# STYLEGUIDE.md

## EDITORIAL V2 – Style Guide (Single Column)

### 1. Design Intent

This is not an app UI.
This is a modern cookbook page rendered in HTML.

Priorities:

- Typography > decoration
- Whitespace > containers
- Rules > cards
- Single column only
 -No shadows, no gradients, no UI noise

### 2. Layout Rules

#### Page Structure

All recipe pages must follow:

```HTML
<main class="page">
  <article class="recipe">
    <header class="recipe__header">
      <h1>Title</h1>
      <p class="recipe__deck">Short description</p>
      <p class="meta">By … · Updated …</p>
    </header>

    <section class="recipe__specs">...</section>

    <section class="recipe__ingredients">...</section>

    <section class="recipe__method">...</section>

    <section class="recipe__notes">...</section>
  </article>
</main>
```

- No additional wrapper divs.
- No component nesting.
- No grid layouts.
- No columns.

### 3. Width & Spacing

#### Maximum Width

```CSS
max-width: 66–72ch
```

This is critical. It should feel like a printed page.

Recommended:

```CSS
--measure: 70ch;
```

#### Page Padding

Generous, responsive:

```CSS
padding: clamp(20px, 4vw, 48px);
```

### 4. Colour System

Keep it minimal.

```CSS
--paper: #f6f1e6;
--ink: #1b1b1b;
--ink-muted: #5f5a52;
--rule: rgba(0,0,0,0.18);
--accent: #2f5f6d;
```

Rules:

- Background = paper
- Text = ink
- Metadata = muted
- Only links use accent
- No coloured boxes

### 5. Typography

#### Fonts

Headings:

- EB Garamond (preferred)
- Or Cormorant Garamond

Body:

- Source Serif 4
- Or system serif fallback

#### Base Rules

```CSS
font-size: 1.05rem;
line-height: 1.65;
```

#### Headings

- No heavy bold.
- Slightly reduced letter spacing.
- Strong vertical spacing before sections.

Example scale:

```CSS
h1: clamp(2.4rem, 3vw, 3.2rem);
h2: 1.6rem;
h3: 1.25rem;
```

### 6. Section Styling

#### Header

- No border.
- Spacing only.

Specs

Simple horizontal rule above and below.

```CSS
border-top: 1px solid var(--rule);
border-bottom: 1px solid var(--rule);
padding: 1rem 0;
```

Specs should be inline or simple stacked text.

- No grid.
- No columns.
- No badges.

#### Ingredients

Styling to support Eleventy-rendered Markdown tables.

Requirements:

Style `<table>` elements using `page-content table`

- No outer borders
- No backgrounds
- No zebra striping
- Header row uppercase, muted, thin rule beneath
- Body rows separated by dotted bottom borders
- Quantities right-aligned with tabular numerals
- Maintain single-column editorial aesthetic
- Do not introduce grid or flex layouts
- Do not alter HTML structure

#### Method

- Ordered list.
- Generous spacing between steps.
- No boxed steps.

#### Notes

Optional:

- Thin border only.
- Very subtle background tint.

No heavy callouts.

### 7. Links

- Underlined.
- No button styling.
- No hover animations beyond subtle background tint.

### 8. Things That Must Not Exist

- No box-shadows
- No card classes
- No grid layouts
- No flex layout for content structuring
- No responsive breakpoints for layout changes
- No hero banners
- No background images
- No audio players
- No JavaScript-driven UI

This is static editorial HTML + CSS only.

## Minimal CSS Structure

Only two files:

```bash
/assets/css/tokens.css
/assets/css/editorial.css
```

Everything else should be removed from the bundle.
