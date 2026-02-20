# Codex CLI — Hierarchical Agent Instructions

This document explains how to use the `load_agents.sh` script to provide **Claude-style hierarchical instruction inheritance** when working with the Codex CLI.

The goal is to give Codex explicit, deterministic system context derived from `AGENTS.md` files distributed across your repository.

---

## 0. TL;DR

From this repository root, initialize Codex with hierarchical agent context by running either:

### A – For root directory

```bash
codex "$(tools/load_agents.sh)"
```

### B – For subdirectories

```bash
codex --cd src/recipes "$(tools/load_agents.sh src/recipes)"
```

> Note: directory arguments are resolved from the repository root.

---

## 1. Prerequisites

- A Unix-like shell (macOS, Linux)
- Codex CLI installed and available on your PATH
- A repository using `AGENTS.md` files for agent instructions
- The loader script located at:

```bash
tools/load_agents.sh
```

---

## 2. Make the loader script executable

Run this once after cloning the repository:

```bash
chmod +x tools/load_agents.sh
```

This allows the script to be executed directly.

---

## 3. Repository layout convention

Example structure in this repo:

```bash
AGENTS.md
src/AGENTS.md
src/recipes/AGENTS.md
```

Rules:

- `AGENTS.md` at the **repo root** contains global rules and invariants
- Subdirectory `AGENTS.md` files contain increasingly specific instructions
- Files are inherited from root → leaf
- Instruction files should be **short, declarative, and non-redundant**

---

## 4. Choosing a working directory

Decide which directory Codex should actively work in.

Example target directory:

```bash
src/recipes
```

This determines:

- Which `AGENTS.md` files are loaded by the loader
- What Codex treats as its working filesystem root

**Important:** Codex does *not* infer this automatically — it must be specified explicitly.

---

## 5. Generate hierarchical agent context

The loader script walks upward from the chosen working directory and collects all relevant `AGENTS.md` files.

You normally do **not** need to materialise this output into a file, but you may do so for inspection:

```bash
tools/load_agents.sh src/recipes > /tmp/codex_context.txt
```

This command:

- Walks upward from `src/recipes`
- Collects all `AGENTS.md` files
- Concatenates them root → leaf
- Outputs a single instruction block suitable for Codex’s initial prompt

Optional inspection:

```bash
cat /tmp/codex_context.txt
```

---

## 6. Initialise Codex with explicit agent context

```bash
codex --cd src/recipes "$(tools/load_agents.sh src/recipes)"
```

What this does:

1. `tools/load_agents.sh src/recipes`
   - Generates the hierarchical agent instructions
2. The output is passed as Codex’s **initial prompt**
3. `--cd src/recipes`
   - Sets Codex’s working root to the target directory
4. Codex starts interactively with the correct scope and context

This is the **canonical and supported** way to initialise Codex with structured agent instructions.

---

## 7. Operational notes

- Codex does **not** automatically load instruction files
- Context is **only** what you explicitly inject
- Re-run the loader **for every new Codex session**
- Keep `AGENTS.md` files concise to avoid shell argument length limits
- Treat instruction files as version-controlled configuration, not prose documentation

---

## 8. What this gives you

- Deterministic instruction inheritance
- Repo-wide behavioural consistency
- Claude-style agent structuring without relying on tool magic
- Fully inspectable and debuggable context

This setup is the **minimum viable workflow** for CLI-based agent work with Codex.
