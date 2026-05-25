# Site Restructure & Page Rebuild — Each Page Its Own Artwork

Homepage stays untouched. Every other page is rebuilt from scratch with its **own distinct visual personality, layout language, and motion vocabulary**. Shared only: the brand (typography family, color tokens, cursor, header, footer). Composition, rhythm, and choreography differ per page.

## 1. New Information Architecture

```text
Projects          Expertise         Studio        Practice        Contact
├ Architecture    ├ Residential     ├ About       ├ History
└ Interiors       ├ Commercial      └ Team        ├ Process
                  ├ Institutional                 └ Journal
                  ├ Hospitality
                  ├ Industrial
                  └ Workplace
```

Removed: Specialists, Studios (Mumbai/Ahmedabad), Studio overview, "All Works".

## 2. Route Changes

**Delete:** `works.tsx`, `sectors.tsx`, `sectors.$sector.tsx`, `studio.history.tsx`, old `studio.tsx`, `journal.tsx`, `journal.$slug.tsx`, `process.tsx`.

**Create:**
- `projects.tsx`, `projects.$category.tsx`
- `expertise.tsx`, `expertise.$sector.tsx`
- `studio.tsx` (layout, redirects to `/studio/about`), `studio.about.tsx`, `studio.team.tsx` (rebuilt)
- `practice.tsx` (layout + landing), `practice.history.tsx`, `practice.process.tsx`, `practice.journal.tsx`, `practice.journal.$slug.tsx`
- `contact.tsx` (rebuilt)

Old `/works`, `/sectors/*`, `/journal/*`, `/process`, `/studio/history` `beforeLoad`-redirect to new equivalents.

## 3. Per-Page Design Direction (each one different)

Each page below = its own concept, its own grid, its own motion register. No shared "page template".

### Projects (landing) — *The Diptych*
Full-bleed split screen: left half **Architecture**, right half **Interiors**, each a tall photographic plate. On hover, the chosen half expands to 60/40, the other dims; oversized serif label slides up from the bottom; a thin horizontal rule extends across as you hover. No header copy — just two doors.
Motion: Framer `layout` for the width morph, cursor-tracked vignette light.

### Projects/Architecture & Projects/Interiors — *The Archive Wall*
Edge-to-edge dense **brick-grid** of projects, varying aspect ratios. Sticky left rail with category name in vertical lockup and project count animating. Click → project detail. On hover, neighbouring tiles desaturate, hovered tile blooms.
Motion: GSAP-style stagger on first paint, magnetic cursor on tiles.

### Expertise (landing) — *The Index*
Pure typography page. Six rows like a museum index — each row: `01 — Residential — short statement`. Hovering a row triggers a large image of that sector to fade in **fixed top-right** as a floating peek. Background turns near-black on hover for cinema effect.
Motion: row index counter ticks, image peek with mask-reveal.

### Expertise/$sector — *The Editorial Spread*
Magazine layout: oversized sector name as drop-cap, two-column body text, pull-quote with rule, then a vertically scrolling **filmstrip of projects in that sector** (horizontal scroll inside a section, snap points). Footer CTA: "Start a [sector] project".
Motion: horizontal scroll-snap with momentum, drop-cap draws in.

### Studio (layout) — sub-tab strip "About · Team" pinned top of content.

### Studio/About — *The Manifesto*
Asymmetric centered single column with **huge serif statement** that scrolls past sticky sketches in the margin (skyline doodle, material swatches). Principles rendered as oversized numerals (01, 02, 03) on alternating sides. Ends with quiet image of the studio table.
Motion: text mask-reveal line by line, marginalia parallax.

### Studio/Team — *The Portrait Gallery*
Four partner portraits arranged in a **2×2 imperfect grid** (each card slightly offset, rotated 0.5–1°, like prints on a wall). Hover a portrait → it lifts, straightens, their quote appears beside it in handwritten-feel italic. Click → expands inline to full bio.
Motion: subtle tilt-correction on hover, FLIP expand on click.

### Practice (landing) — *The Three Doors*
Three full-height vertical bands stacked: **History · Process · Journal**. Each band shows a teaser (year ticker / phase counter / latest post). Click any band — it grows to full screen and routes.
Motion: band hover lifts content, scroll-driven band height variation.

### Practice/History — *The Timeline Spine*
Vertical chronological spine down the center. Years on the left, milestones on the right, alternating sides past the spine. Scroll-linked progress line **draws the spine** as you scroll. Each milestone enters from its own side.
Motion: `useScroll` + `useTransform` to draw SVG path; per-milestone slide-in.

### Practice/Process — *The Phase Stack*
Five **sticky stacked panels**, one per phase. As you scroll, each panel pins, the deliverable badge animates in, then the next panel slides up over it. Big phase number bleeds off the edge.
Motion: scroll-pinning via `position: sticky` + opacity/scale on the outgoing card.

### Practice/Journal — *The Newspaper*
Editorial broadsheet layout: masthead with date, then a **featured essay** taking 2/3 width, secondary essays in narrower columns with column rules. Serif headlines, tracked-out kicker. Hover → ink underline draws under title.
Motion: column rules draw down on enter, headlines mask-reveal.

### Practice/Journal/$slug — *The Long Read*
Single narrow measure (~640px) centered, generous leading, drop-cap on first paragraph, pull-quotes as horizontal bands breaking out of the measure. Reading-progress bar fixed top.
Motion: progress bar scroll-linked, pull-quotes scale-in on enter.

### Contact — *The Letter*
Two-thirds left: a written-letter feel — date stamp, "Dear IDL," intro line typing in, then the form fields appear inline as if part of a letter ("My name is ___, I'd like to talk about ___"). Right third: studio address + skyline sketch + email as a signature line.
Motion: typewriter intro line, fields fade in sequentially.

### Project/$slug — *The Monograph*
Already exists — light polish only: bigger title plate, project facts as a horizontal ledger, vertical photo essay with alternating full-bleed and indented images.

## 4. Shared (only the bones)

- Header (updated NAV array), Footer, CustomCursor, useReveal — unchanged components, reused.
- Color tokens, fonts, easing curve — already global in `styles.css`.
- **No** shared `PageHero` / `PageShell` template forced on every page. `PageShell` kept available but pages opt in only where it fits (it won't fit most of these).

## 5. Files Touched

**Edit:** `src/components/home/Header.tsx` (NAV only), `src/styles.css` (one additive block per page concept, namespaced `.idl-projects-*`, `.idl-expertise-*`, `.idl-studio-*`, `.idl-practice-*`, `.idl-contact-*`), `src/data/projects.ts` (add entries so every sector has projects; add `cover` field), `src/routes/project.$slug.tsx` (polish).

**Create:** all routes in §2, plus `src/components/site/HoverPeek.tsx`, `src/components/site/ScrollProgressLine.tsx`, `src/components/site/StickyStack.tsx` (small reusable motion primitives, not visual templates).

**Delete:** files listed in §2.

## 6. Out of Scope

- Homepage (`index.tsx` and all `components/home/*` except `Header.tsx`) untouched.
- No backend, auth, or content rewriting — uses existing `siteContent.ts` + the doc shared earlier.
