## Scope

Replace `src/routes/index.tsx` with a fresh homepage built from the 9 sections in your brief. No other pages touched. All existing UI primitives in `src/components/ui` stay.

## Setup

1. Install `@studio-freight/lenis`.
2. Add Cormorant Garamond + DM Sans via Google Fonts `<link>` (preconnect + stylesheet) in `__root.tsx` `head().links`.
3. Add design tokens to `src/styles.css`: the 6 colours, two font families, three motion easings, the global `* { border-radius: 0 !important }` reset, `body { cursor: none; overflow-x: hidden; background: var(--bg); color: var(--fg); font-family: var(--sans) }`. Tokens live as CSS variables under `:root` so we don't touch the existing oklch shadcn palette below them.
4. Generate images into `src/assets/` using the agent's `imagegen` (premium tier where useful) — all warm-cream / brown / brick palette, architectural photography style:
   - `hero.jpg` (1920×1080)
   - 6 sector images: `sector-residential.jpg`, `commercial.jpg`, `institutional.jpg`, `hospitality.jpg`, `industrial.jpg`, `workplace.jpg`
   - 3 featured project images: `work-1/2/3.jpg`
   - 4 hover-nav images: `nav-story.jpg`, `nav-work.jpg`, `nav-team.jpg`, `nav-contact.jpg`
   - `skyline-sketch.png` (1200×220, hand-drawn pen sketch of Mumbai skyline, transparent background)

## Component structure

All new files under `src/components/home/`:

- `SmoothScroll.tsx` — Lenis root wrapper, mounted in `__root.tsx` around `<Outlet />`.
- `CustomCursor.tsx` — 7×7 square, fixed, RAF lerp follow, scale on `a/button/[data-hover]` hover via CSS.
- `Header.tsx` — fixed logo + MENU, scroll listener toggles `.scrolled` class at >80px.
- `Hero.tsx` — sticky 100svh, full-bleed image, bottom-left brand chip, bottom-right scroll indicator with travelling-line keyframe.
- `Verticals.tsx` — 3-column flex; left names list (hover sets active state), centre description fades, right sticky image panel with cross-dissolved stacked images. Pure React state, no scroll logic.
- `FeaturedWorks.tsx` — left title + "VIEW ALL" link; right 3 cards with `data-reveal`.
- `SketchSection.tsx` — 300vh outer + sticky stage; one `useEffect` adds a passive scroll listener that calls `requestAnimationFrame` to update polygon points + dot/line attributes via refs (no React re-renders during scroll). `buildClip` exactly as specified.
- `Manifesto.tsx` — 200vh outer + sticky stage; same scroll-progress pattern, drives `.visible` class on clip-mask reveal lines and the accent rule by progress thresholds.
- `Clients.tsx` — static strip, 5 names.
- `Recognition.tsx` — left title + view-all; right 3 award cards with decorative year, `data-reveal`.
- `HoverImageNav.tsx` — 4 absolute images, 4 links; React state for active index, default 0.
- `Footer.tsx` — dark, ghost giant text behind, 3-column content.

Shared scroll-reveal hook `useReveal()` mounts a single IntersectionObserver and observes all `[data-reveal]` elements (re-scanned in a `useEffect` on `index.tsx`).

## Routing

`src/routes/index.tsx` becomes a thin composition rendering Header + the 9 sections + Footer + CustomCursor. Replaces the current placeholder. `__root.tsx` gets `<SmoothScroll>` wrapping `<Outlet />` plus the Google Fonts links — no other shell changes; `<Outlet />` is preserved.

## Performance discipline

- No Framer Motion anywhere on the homepage.
- Sketch + Manifesto: single passive scroll listener each, all DOM updates via `ref.setAttribute` / `classList.toggle` — no `setState` in the scroll callback.
- All animated nodes get `will-change: transform` + `translateZ(0)`.
- Every `<img>` gets explicit `width`/`height` and `loading="lazy"` (except hero which is `eager` + `fetchpriority="high"`).
- Lenis runs at the app root; no other smooth-scroll libs.
- Z-index stacking as specified so sections physically cover the sticky hero.

## What I will NOT do

- Won't touch other routes, components, or `src/components/ui`.
- Won't add sections, copy, colours, or border-radii outside the spec.
- Won't use Framer Motion / GSAP / AnimatePresence.
- Won't build the MENU overlay yet — MENU button is a no-op placeholder, as you said.

## Verification

After build: open the preview, check console for errors, scroll the page, confirm hero is covered by section 2, verticals hover swaps the image, sketch builds with scroll, manifesto lines reveal, hover-nav swaps images, footer renders. Fix anything that doesn't.
