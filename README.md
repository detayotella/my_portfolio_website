# Adetayo Tella · Portfolio

Personal portfolio for **Adetayo Tella**, Computer Science graduate and AI/ML engineer.
Built around one positioning: *“I build intelligent systems and study how they work.”*

Static site: **Astro 5 + TypeScript + Tailwind CSS 4**, zero client-side JavaScript except a
theme toggle, a mobile menu, a copy-email button, scroll-spy, and a scroll-reveal observer
(all progressive enhancement). The site ships a hand-drawn SVG schematic of the RAG pipeline,
a light “lab notebook” default theme with a dark “terminal at night” mode, dedicated case-study
pages per project, and full SEO/OG metadata.

## Commands

```bash
npm install       # once
npm run dev       # dev server at localhost:4321
npm run build     # production build → dist/
npm run preview   # serve dist/ locally
npm run check     # astro type check
```

Node 18.17+ / 20.3+ / 22+ (built with v24).

## Where to edit content

Everything is data-driven: you should never need to touch a component to update content.

| What | File |
| --- | --- |
| Name, statement, links, education | `src/data/profile.ts` |
| Skills (grouped, ordered) | `src/data/skills.ts` |
| Experience, education, certifications | `src/data/experience.ts` |
| “Currently Exploring” topics | `src/data/exploring.ts` |
| Projects (cards + case studies) | `src/content/projects/*.mdx` |
| Writing notes (posts + homepage list) | `src/content/writing/*.mdx` |
| Project screenshots | `src/assets/projects/*.png` |
| Colors, fonts, motion, case-study typography | `src/styles/global.css` |

### Adding a project

Create `src/content/projects/my-project.mdx` with frontmatter:

```yaml
---
title: "My Project"
subtitle: "short subtitle"
summary: "One or two sentences shown on the homepage card."
tags: ["Python", "FastAPI"]
image: "my-project.png"   # optional; file in src/assets/projects/
imageAlt: "What the screenshot shows"
order: 5          # card number / sort order
featured: false   # true = the big featured block (only one)
links:
  repo: "https://github.com/you/your-repo"   # optional
  demo: "https://…"                          # optional
---
```

…then write the case study body in Markdown. The card, URL (`/projects/my-project/`),
and SEO metadata are generated automatically. Screenshots are optimized to WebP at
build time via `astro:assets` (no manual resizing needed).

### Adding a writing note

Create `src/content/writing/my-note.mdx` with frontmatter:

```yaml
---
title: "My note"
description: "One or two sentences shown in the lists and previews."
pubDate: 2026-10-01
tags: ["RAG"]        # optional
draft: false         # true = hidden everywhere
---
```

The post appears on the homepage Writing section and at `/writing/my-note/`
automatically, newest first.

## Remaining TODOs before publishing

- `astro.config.mjs` → set `site` to the production domain (then optionally
  `npm i @astrojs/sitemap` and add it to `integrations`; add the sitemap line to `public/robots.txt`)
- `src/content/projects/*.mdx` → add `links.demo` entries if any project gets a live demo
- `public/og.png` → regenerate from `scripts/og-card.astro.txt` (see below) after any
  headline/branding change

## Design system

- **Palette:** warm paper `#faf9f6` + ink `#1c1917` + burnt-amber accent (`#ea580c` graphics,
  `#9a3412` for small text, WCAG AA). Dark mode swaps the same semantic tokens (`.dark` class,
  set pre-paint in `src/layouts/Base.astro` to avoid flashes).
- **Type:** Space Grotesk Variable (display headings) + Inter Variable (interface) +
  JetBrains Mono Variable (labels, tags, schematics). Registered as `font-display`,
  `font-sans`, and `font-mono` Tailwind tokens.
- **Layout:** fixed nav that starts transparent over the hero and detaches into a floating
  glass capsule (backdrop blur + hairline border) once the page scrolls. Sections keep one
  corner-radius system (4px controls, 12px cards).
- **Motion:** fade-up reveals with a 60ms stagger inside grids, hover lift + shadow on cards,
  `scale(0.97)` press feedback on all interactive elements, a spring overshoot on the mobile
  menu. All transform/opacity only, and everything collapses under `prefers-reduced-motion`.
  No animation libraries.
- **Interactions:** copy-email button in the contact panel (with clipboard fallback to
  mailto), scroll-spy underline on nav links, IntersectionObserver reveals.

## Regenerating the Open Graph card

`public/og.png` (1200×630) was rendered from the template now stored at
`scripts/og-card.astro.txt`. To regenerate after edits: copy it back to
`src/pages/og.astro`, `npm run build`, screenshot `http://localhost:4321/og/` at a
1200×630 viewport into `public/og.png`, move the file back to `scripts/`, rebuild.

## Deployment

The build output in `dist/` is fully static: deploy to Vercel, Netlify, or GitHub Pages
(no server, no env vars). Framework preset: **Astro** (build `npm run build`, output `dist`).
