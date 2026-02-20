# AGENTS.md

## Project Context

South Island Kitchen is a static recipe website built with Eleventy (11ty) and deployed via Cloudflare Pages.
The site content is primarily Markdown recipes rendered into static HTML with an editorial V2 design direction.

Primary goals:

- Keep pages fast, clean, and lightweight.
- Preserve a no-backend architecture.
- Maintain clear ownership of content and layout.

## Stack

- Eleventy (`@11ty/eleventy`)
- Markdown content with front matter
- HTML/Liquid templates
- Vanilla CSS (editorial styles)
- Cloudflare Pages deployment

## Repository Map

- `src/` - input source for Eleventy
- `src/recipes/` - recipe Markdown files and `recipes.json`
- `src/recipes/index.html` - recipe contents page
- `src/index.html` - minimal welcome homepage
- `src/about/index.html` - about page
- `src/_includes/layouts/base.html` - base layout template
- `src/assets/css/tokens.css` - design tokens
- `src/assets/css/editorial.css` - main site styling
- `src/assets/logo/` - favicon/logo assets
- `.eleventy.js` - Eleventy config
- `_site/` - generated output

## Agent Working Rules

1. Keep changes minimal and aligned with existing patterns.
2. Do not introduce frameworks, build tooling, or backend services.
3. Prefer editing source files in `src/`; do not hand-edit generated `_site/` output.
4. Preserve asset paths as absolute from site root (for example: `/assets/css/editorial.css`).
5. When adding recipes, use front matter `title` and `tags`; avoid deprecated media fields.
6. Keep editorial structure single-column and typography-first.
7. Reuse existing tokens and editorial classes before adding new variants.
8. Respect licensing intent in `LICENSE.txt` and existing repository ownership notes.

## Validation Checklist (after edits)

- Run build: `npm run build`
- If relevant, run dev server: `npm run dev`
- Confirm Eleventy still outputs to `_site/`
- Confirm assets still resolve correctly after build
- Confirm recipe and contents pages render with expected layout

## Collaboration Preferences

- Surface assumptions before making broad structural changes.
- For substantial UI/content changes, summarize what changed and why.
- If unclear requirements block progress, ask a focused question and continue with the safest default.
