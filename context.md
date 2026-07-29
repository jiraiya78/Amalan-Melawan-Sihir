# Doa Melawan Sihir — Agent Context

## Project Overview

Static web app for reading Islamic supplications (doa), zikir, and surah verses for protection against sihir (magic/sorcery). Designed for **mobile-first reading** and deployable to **GitHub Pages** with no build step.

## Tech Stack

| Layer | Choice |
|-------|--------|
| HTML | Single `index.html` entry point |
| CSS | Vanilla CSS with design tokens in `css/styles.css` |
| JS | Standard ES5-compatible IIFE (no modules/bundler) |
| Fonts | Google Fonts: **Amiri Quran** (Arabic/Quranic), **Plus Jakarta Sans** (UI) |
| Deployment | Static files only — copy to `gh-pages` branch or enable Pages on `main` |

## File Structure

```
AmalanMelawanSihir/
├── index.html              # App shell
├── css/
│   └── styles.css          # All styles, design tokens, responsive rules
├── js/
│   ├── app.js              # Renderer & navigation logic
│   └── data/
│       └── sections.js     # ALL content lives here (modular data)
└── context.md              # This file
```

## Content Architecture

All content is defined in `js/data/sections.js` as the `APP_SECTIONS` array.

### Section object

```js
{
  id: "unique-kebab-id",       // Used for nav anchor & DOM id
  number: 1,                   // Display number
  title: "Section Title",
  items: [ /* item objects */ ],
  placeholder: "..."           // Optional — shown when items[] is empty
}
```

### Item object (expandable card)

```js
{
  id: "item-id",
  title: "Card header title",
  defaultOpen: true,           // Optional — card starts expanded
  content: [ /* content blocks */ ]
}
```

### Content block types

| type | Purpose | Key fields |
|------|---------|------------|
| `verse` | Quranic verse | `arabic`, `reference`, `translations[]` |
| `zikir` | Dhikr/supplication | `arabic`, `malay`, `english` (optional) |
| `instruction` | Practice guidance | `text` (supports `<em>` for emphasis) |
| `text` | Plain paragraph | `text` |
| `steps` | Numbered steps | `title` (optional), `steps[]` |
| `list` | Bullet/numbered list | `ordered` (bool), `items[]` |
| `subsection` | In-card heading | `title` |

### Translation object (inside `verse`)

```js
{
  lang: "malay" | "english",
  source: "Translator name",
  text: "Translation text"
}
```

## Color Coding (CSS variables)

| Element | Variable | Color |
|---------|----------|-------|
| Arabic verse | `--color-arabic` | Warm cream `#f5e6c8` |
| Malay translation | `--color-malay` | Soft green `#a8e6cf` |
| English translation | `--color-english` | Soft blue `#b8d4f0` |
| Instructions | `--color-instruction` | Sand `#d4c5a9` |
| Verse reference | `--color-ref` | Gold `#c9a227` |

## How to Add Content

### New item in existing section

Add an object to the section's `items` array in `sections.js`:

```js
{
  id: "new-item",
  title: "New Item Title",
  content: [
    { type: "instruction", text: "Read daily after Fajr." },
    { type: "verse", arabic: "...", reference: "Surah X: Y" }
  ]
}
```

### New section

Push a new object to `APP_SECTIONS`:

```js
{
  id: "new-section",
  number: 4,
  title: "New Section Name",
  items: []
}
```

Navigation and rendering update automatically — no changes needed in `app.js` or `index.html`.

### New content block type

1. Add a renderer function in `app.js` inside the IIFE
2. Register it in the `RENDERERS` object
3. Document the type in this file

## Current Sections

1. **Zikir dan Amalan Melawan Sihir** — 3 Qul, Yunus 81–82, Al-Zalzalah, La ilaha illallah zikir
2. **Amalan Pendinding** — Pagar diri ritual (Al-Fatihah, Ayat Kursi 7×, doa, 3 Qul)
3. **Amalan Pendinding Kawasan Rumah** — Placeholder (content pending)

## Design Notes

- Mobile font base: 16px; Arabic verse: ~1.55rem with 2.2 line-height
- Expandable cards use native `<details>/<summary>` — no JS required for toggle
- Sticky section nav with scroll-spy via `IntersectionObserver`
- Islamic theme: deep teal/green background, gold accents, geometric pattern overlay
- `instruction` blocks allow limited HTML (`<em>`) for emphasis — injected via `innerHTML` on that field only

## GitHub Pages Deployment

1. Push repo to GitHub
2. Settings → Pages → Source: deploy from branch `main` (root `/`)
3. Site available at `https://<username>.github.io/AmalanMelawanSihir/`

No build step. All paths are relative.

## Future Enhancements (not yet implemented)

- Section 3 content (Amalan Pendinding Kawasan Rumah)
- Bookmark / last-read position (localStorage)
- Dark/light theme toggle
- Offline support (service worker)
- Audio recitation links
- Search across all content
