# South Island Kitchen

South Island Kitchen is a lightweight, static recipe website built with **[Eleventy (11ty)](https://www.11ty.dev/)** and deployed via **[Cloudflare Pages](https://pages.cloudflare.com/)**.

The current implementation follows an **editorial V2** style: typography-first, single-column layouts, minimal UI chrome, and static content only.

---

## Project Goals

* Publish personal recipes in a clean, distraction-free format
* Use static-site tooling only (no runtime backend)
* Ensure fast global delivery via Cloudflare
* Maintain full ownership of content and layout
* Keep visual design editorial and content-focused

---

## Tech Stack

* **[Eleventy (11ty)](https://www.11ty.dev/)** – static site generator
* **Markdown** – recipe content
* **HTML / Liquid** – templating
* **Vanilla CSS** – editorial styling via `tokens.css` + `editorial.css`
* **[Cloudflare Pages](https://pages.cloudflare.com/)** – hosting & CI/CD

---

## Repository Structure

```text
.
├── src/
│   ├── _includes/
│   │   └── layouts/
│   │       └── base.html
│   ├── about/
│   │   └── index.html
│   ├── assets/
│   │   ├── css/
│   │   │   ├── tokens.css
│   │   │   └── editorial.css
│   │   └── logo/
│   ├── recipes/
│   │   ├── index.html
│   │   ├── recipes.json
│   │   └── *.md
│   └── index.html
├── .eleventy.js
├── package-lock.json
├── package.json
├── README.md
└── _site/
```

Notes:

* `src/` is the Eleventy input directory
* `_site/` is the generated output directory
* Static assets are passed through from `src/assets/`
* `src/index.html` is a simple welcome page
* `src/recipes/index.html` is the recipe contents page

---

## Local Development

### Prerequisites

* Node.js (LTS recommended)
* npm

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

This will start a local server (typically at `http://localhost:8080`) with live rebuilds on file changes.

---

## Eleventy Configuration

Eleventy is configured via `.eleventy.js`.

Key behaviours:

* Input directory: `src/`
* Output directory: `_site/`
* Static assets copied via `addPassthroughCopy("src/assets")`

---

## Deployment (Cloudflare Pages)

Deployment is fully automated via GitHub integration.

### Cloudflare Build Settings

* **Framework preset:** None
* **Build command:**

  ```bash
  npm run build
  ```

* **Build output directory:**

  ```text
  _site
  ```

On each push to the configured production branch, Cloudflare Pages rebuilds and deploys the site.

---

## Content Authoring

Recipes are written as Markdown files with front matter.

Example:

```markdown
---
title: Sourdough
tags: [baking]
---

## Ingredients

- Flour
- Water
- Salt

## Method

1. Mix
2. Rest
3. Bake
```

---

## Licensing & Copyright

All content, design, and source files in this repository are the exclusive property of Calum Dear.

**All rights reserved**.

This project uses third-party tools (including Eleventy) for build and deployment purposes only. No third-party source code is redistributed as part of this repository.

---

## Status

This project is intentionally iterative.
