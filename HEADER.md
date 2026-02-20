# Editorial Header v2 -- Implementation Instructions for Codex CLI

## Objective

Implement a refined, editorial-style header navigation bar consistent with the existing single-column layout.

Design characteristics:

- Title left-aligned
- Navigation below title
- Sticky header
- Sans-serif navigation typography
- Generous top page margin
- No UI chrome (no shadows, no buttons, no icons, no gradients)

---

## Structural Requirements

### HTML Structure

Ensure all templates include:

```html
<header class="site-header">
  <div class="site-header__inner">
    <div class="site-header__branding">
      <a href="/" class="site-title">South Island Kitchen</a>
    </div>

    <nav class="site-nav" aria-label="Primary">
      <a href="/">Home</a>
      <a href="/recipes/">Recipes</a>
      <a href="/about/">About</a>
      <a href="/archive/">Archive</a>
    </nav>
  </div>
</header>
```

Constraints:

- Do not introduce grid layouts.
- Avoid unnecessary wrapper divs.
- Do not add JavaScript.

---

## Layout Rules

### Width Alignment

Header content must align exactly with the main editorial column:

```CSS
.site-header__inner {
  max-width: var(--measure);
  margin: 0 auto;
  padding: 0 var(--gutter);
}
```

---

## Vertical Rhythm

Add generous top margin to simulate printed page spacing:

```CSS
.site-header {
  padding-top: clamp(24px, 5vw, 48px);
}
```

Spacing between elements:

- `\~0.8rem` between title and nav
- `\~0.9rem` bottom padding under nav
- `1px` rule separating header from content

---

## Title Styling

```CSS
.site-title {
  font-family: var(--serif);
  font-size: clamp(2rem, 2.6vw, 2.6rem);
  font-weight: 500;
  text-decoration: none;
  color: var(--ink);
  line-height: 1.1;
}

.site-title:hover {
  opacity: 0.85;
}
```

Rules:

- No underline.
- No decorative elements.
- No logo graphics.

---

## Navigation Styling

```CSS
.site-nav {
  margin-top: 0.8rem;
  padding-bottom: 0.9rem;
  border-bottom: 1px solid var(--rule);
  display: flex;
  flex-wrap: wrap;
}

.site-nav a {
  font-family: var(--ui-sans);
  font-size: 0.82rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--ink-muted);
  margin-right: 1.6rem;
}

.site-nav a:hover {
  color: var(--ink);
  text-decoration: underline;
  text-underline-offset: 0.2em;
}
```

Constraints:

- No background fills.
- No hover animations.
- No box styling.
- No icons.

---

## Sticky Behaviour

```CSS
.site-header {
  position: sticky;
  top: 0;
  background: var(--paper);
  z-index: 100;
  box-shadow: 0 1px 0 var(--rule);
}
```

Important:

- Do not add blur or heavy shadow.
- Do not animate on scroll.
- Header must remain consistent in size.

---

## Mobile Behaviour

- Do not introduce a hamburger menu.
- Allow navigation links to wrap naturally.
- No JS interaction.
- Maintain typographic integrity.

---

## Prohibited Additions

Do NOT add:

- Buttons
- Search bar
- Icons
- Dropdown menus
- Background colour blocks
- Shadows beyond a 1px rule
- Animations

---

## Acceptance Criteria

1. Header aligns exactly with editorial content width.
2. Title left-aligned and visually dominant.
3. Navigation sits below title in uppercase sans-serif.
4. Header remains sticky without visual heaviness.
5. No console errors.
6. No additional UI complexity introduced.
