# South Island Kitchen

South Island Kitchen is a lightweight, static recipe website built with **[Eleventy (11ty)](https://www.11ty.dev/)** and deployed via **[Cloudflare Pages](https://pages.cloudflare.com/)**. The project is intentionally minimal to ensure fast load times and clean layouts.

This repo initially started as a simple host for markdown recipe files but has since been converted into a project for a dedicated website, which can be found at **[southislandkitchen.uk](https://southislandkitchen.uk)**.

---

## Project Goals

* Publish personal recipes in a clean, distraction-free format
* Use static-site tooling only (no runtime backend)
* Ensure fast global delivery via Cloudflare
* Maintain full ownership of content and layout

---

## Tech Stack

* **[Eleventy (11ty)](https://www.11ty.dev/)** – static site generator
* **Markdown** – recipe content
* **HTML / Liquid** – templating
* **Vanilla CSS** – styling (dark-mode first)
* **[Cloudflare Pages](https://pages.cloudflare.com/)** – hosting & CI/CD

---

## Repository Structure

```text
.
├── src/
│   ├── _includes/
│   │   └── layouts/
│   │       └── base.html
│   ├── assets/
│   │   └── banner/
│   │   └── css/
│   │       └── main.css
│   │       └── ... .css
│   │   └── images/
│   │   └── logo/
│   ├── recipes/
│   │   └── example-recipe.md
│   └── index.html    # homepage
├── .eleventy.js
├── package-lock.json
├── package.json
├── README.md
└── _site/            # build output (ignored in git)
```

Notes:

* `src/` is the Eleventy input directory
* `_site/` is the generated output directory
* Static assets are passed through from `src/assets/`

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
npx eleventy --serve
```

This will start a local server (typically at `http://localhost:8080`) with live rebuilds on file changes.

---

## Eleventy Configuration

Eleventy is configured via `.eleventy.js`.

Key behaviours:

* Input directory: `src/`
* Output directory: `_site/`
* Static assets copied via `addPassthroughCopy("src/assets")`

If assets do not load in production, confirm:

* Asset paths are absolute (`/assets/css/main.css`)
* Passthrough copy is configured
* Only **one** `module.exports` block exists in `.eleventy.js`

---

## Deployment (Cloudflare Pages)

Deployment is fully automated via GitHub integration.

### Cloudflare Build Settings

* **Framework preset:** None
* **Build command:**

  ```bash
  npx eleventy
  ```

* **Build output directory:**

  ```text
  _site
  ```

On each push to the master branch, Cloudflare Pages rebuilds and deploys the site.

---

## Content Authoring

Recipes are written as Markdown files with front matter.

Example:

```markdown
---
title: Simple Sourdough
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