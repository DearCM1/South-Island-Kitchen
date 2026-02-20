# AGENTS.md

## Project Context

South Island Kitchen is a static recipe website built with Eleventy (11ty) and deployed via Cloudflare Pages.
The site content is primarily Markdown recipes rendered into static HTML.

Primary goals:
- Keep pages fast, clean, and lightweight.
- Preserve a no-backend architecture.
- Maintain clear ownership of content and layout.

## Stack

- Eleventy (`@11ty/eleventy`)
- Markdown content with front matter
- HTML/Liquid templates
- Vanilla CSS and minimal Vanilla JS
- Cloudflare Pages deployment

## Repository Map

- `src/` - input source for Eleventy
- `src/recipes/` - recipe Markdown files and `recipes.json`
- `src/_includes/layouts/base.html` - base layout template
- `src/assets/` - static assets (css/js/images/audio/logo/banner)
- `.eleventy.js` - Eleventy config
- `_site/` - generated output

## Agent Working Rules

1. Keep changes minimal and aligned with existing patterns.
2. Do not introduce frameworks, build tooling, or backend services.
3. Prefer editing source files in `src/`; do not hand-edit generated `_site/` output.
4. Preserve asset paths as absolute from site root (for example: `/assets/css/main.css`).
5. When adding recipes, follow existing front matter fields (`title`, `tags`, `headerImage`, `headerImageAlt`, optional `audio`).
6. Reuse existing CSS tokens/components before creating new styles.
7. Avoid large visual redesigns unless explicitly requested.
8. Respect licensing intent in `LICENSE.txt` and existing repository ownership notes.

## Validation Checklist (after edits)

- Run build: `npm run build`
- If relevant, run dev server: `npm run dev`
- Confirm Eleventy still outputs to `_site/`
- Confirm assets still resolve correctly after build

## Collaboration Preferences

- Surface assumptions before making broad structural changes.
- For substantial UI/content changes, summarize what changed and why.
- If unclear requirements block progress, ask a focused question and continue with the safest default.
