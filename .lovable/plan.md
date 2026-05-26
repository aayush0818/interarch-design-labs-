
# Inner Pages — Full Rebuild (Reference: Talati & Partners, Essajees Atelier, Open Atelier Mumbai)

The homepage stays exactly as it is. Everything inside the site gets thrown out and rebuilt against three reference studios known for slow, cinematic, image-led architectural sites. Content will be lifted verbatim from the brief — no paraphrasing, no shortening, no skipped sections.

---

## 1. What's wrong today (honest read)

- Pages feel like one CSS file forced over five different templates.
- Heroes are short, scale-stabilised, and forgettable — references all use silent full-bleed image + slow type reveal.
- "Motion" is just `whileInView` fade+y on every block. No image masks, no clip reveals, no marquee, no horizontal scroll, no cursor states, no curtain transitions, no parallax.
- Content was rewritten/trimmed. Sections from the brief (Mission, Vision, Values, Why IDL, Sustainability, Culture, Internships, Mentorship, Working at IDL, full Timeline, Range of Experience, Industry Recognition long list) are missing or compressed.
- Structure is wrong: Practice/Studio/Projects/Expertise overlap and the user's intended IA isn't honored cleanly.

---

## 2. Reference language we will actually borrow

- **Talati & Partners** — silent full-bleed hero, slow horizontal project rail, monoline serif, image captions as small caps, project pages as long vertical photo essays with anchored meta.
- **Essajees Atelier** — image-first index, hover-reveal project names, slow stagger, generous negative space, "studio" laid out as quiet column with portraits.
- **Open Atelier Mumbai** — clean editorial typography, oversized but restrained display serif headlines, scroll-pinned section transitions, project filmstrip + monograph layout.

Common ingredients we'll codify:
- Full-bleed cinematic hero (90–100vh) with image, slow zoom-out from 1.08→1, mask-reveal title.
- Slow type — display serif, light weight, generous tracking. Body in clean grotesk.
- Curtain page transitions (cream panel sweeps in/out on route change).
- Image hover: subtle scale 1→1.04 + caption fade-up.
- Horizontal scroll rails on selected sections (featured projects, awards).
- Sticky meta column on long pages (project detail, history).
- Lenis-style smooth scroll already present — actually use it for parallax on hero images and figure floats.
- Custom cursor states: "view", "drag", "open".

---

## 3. Final Information Architecture (locked)

```
/                         Home  (UNCHANGED)
/studio                   Studio landing (About content)
/studio/team              Team / Leadership
/projects                 Projects landing (Architecture | Interiors diptych)
/projects/architecture    Architecture index
/projects/interiors       Interiors index
/project/$slug            Project monograph
/expertise                Expertise index (6 sectors)
/expertise/$sector        Sector page (Residential, Institutional, Commercial Interiors, Hospitality, Master Planning, Sustainability)
/practice                 Practice landing
/practice/history         Timeline (1989 → Today, full)
/practice/process         5-step process
/practice/journal         Journal index
/practice/journal/$slug   Essay
/contact                  Contact
```

No "specialists" page. No duplicate About. Header mega-menu mirrors this exactly.

---

## 4. Page-by-page rebuild spec

Each page gets its OWN structural identity. They share the design system (palette, type, motion easing) but compositions differ — like a magazine where every spread is laid out for its content.

### 4.1 `/studio` — About
- **Hero**: full-bleed studio photo, slow zoom-out. Headline ("A contemporary legacy in architecture and interiors.") mask-reveals line by line.
- **Manifesto block**: oversized serif paragraph, left-aligned, single column, max-width 720px. Uses the full "Interarch Design Labs — A contemporary legacy…" paragraph verbatim.
- **Pull quote**: "Simple. Considered. Enduring. This is Interarch Design Labs." — centered, 80vh whitespace around it.
- **Mission / Vision / Values**: three stacked editorial spreads, each with eyebrow + serif headline + body. Values rendered as 4 numbered rows (Integrity of Intent, Clarity in Craft, Responsibility to Context, Designed Around You).
- **IDL Studio** narrative block — full text from brief, paired with a slow parallax image strip.
- **Range of Experience** — partner credits (40+ yrs Dipak Thaker, 30+ yrs Murtuza Rangwala, Hussain Rangwala & Rohit Gojia) as a clean 4-row list with hairline dividers.
- **Industry Recognition** — full 7-item award list with year, body, institution. Horizontal slow-scroll rail on desktop, stacked on mobile.
- **Culture & Process / Internships / Mentorship / Working at IDL** — 4-up editorial cards with image + heading + paragraph, content verbatim.
- **CTA strip** → Team / Contact.

### 4.2 `/studio/team`
- Hero: short — eyebrow "Our Team" + headline "Heritage and reinvention. Independent voices, one vision."
- Intro paragraph from brief (Interarch + Kala convergence, Mumbai + Ahmedabad, India/ME/Africa).
- **Leadership grid**: 4 partner portraits, 2×2 on desktop. Each portrait: tall 3:4 image, name, role, years of experience. Hover: image scales 1.02, name underline draws left→right. Click → FLIP-expand panel with full bio (no separate page).
- **Studio collective**: small caption "Supported by a multidisciplinary team of architects, interior designers, visualisers, project managers and delivery specialists."
- Slow marquee strip of studio life photos at the bottom.

### 4.3 `/projects` — Landing
- **Diptych** full-viewport: left half "Architecture", right half "Interiors". Each half is a full-bleed image with a serif label centered. Hover side → other side dims to 0.4 and chosen side image scales 1.04. Click → route.
- Below the fold: small intro paragraph + counts ("32 architecture projects · 18 interior projects · across India, Middle East & Africa").

### 4.4 `/projects/architecture` and `/projects/interiors`
- Hero: category name in oversized light serif, with a single hero image behind, slow parallax.
- **Asymmetric editorial grid** (Open Atelier-style): rows alternate — full-width / two-up / three-up. Captions small caps under each image. Hover image: scale 1→1.03, caption gains underline.
- Filter chips by sector (top right, sticky).
- Sticky left rail shows current count + scroll progress.

### 4.5 `/project/$slug` — Monograph
- **Cover**: 100vh image, project name reveals from below via mask.
- Below: 5-column meta row (Location · Sector · Scope · Area · Year) with hairline borders.
- Long-form essay paragraph (single column, 640px).
- **Photo essay**: sequence of figures — alternating full-bleed, centered portrait, two-up. Each figure has caption + slow reveal on enter.
- Sticky right meta rail with project name + jump-to-section anchors.
- Next/Prev project pager at the end (large image preview on hover).

### 4.6 `/expertise` — Index
- Hero: silent, single line "Six disciplines. One sensibility."
- **List view** (Talati-style): 6 large rows, one per discipline. Each row is type-only: number, name, one-line statement. On hover, an image floats in from the right edge (clip-path reveal). Click → sector page.
- Below: short philosophy paragraph from "Our Design Approach" (Clarity / Intent / People & Place / Sustainability / Craft & Collaboration).

### 4.7 `/expertise/$sector`
Six sectors with their own page, each rebuilt with the exact content blocks:
- Residential (Apartments + Bungalows & Villas sub-sections)
- Institutional Architecture
- Commercial Interiors
- Hospitality
- Master Planning
- Sustainability & Building Performance

Structure:
- Cinematic hero with sector image.
- Intro statement (verbatim from brief).
- For Residential: two sub-spreads (Apartments / Bungalows & Villas) with their paragraphs and image pairs.
- Sustainability page additionally lists IGBC Gold + bullets (Passive design, natural light & ventilation, conscious materials, energy-efficient systems).
- Horizontal filmstrip of related projects.
- CTA → Contact.

### 4.8 `/practice` — Landing
- Three large doors: History · Process · Journal. Each is a vertical image panel that expands on hover (flex 1 → 2). Click → child route.

### 4.9 `/practice/history`
- Hero: "Two practices. One purpose." + intro paragraph verbatim.
- **Vertical spine timeline** — full content for 1989, 2001, 2008, 2009, 2010, 2014–15, 2015, Today. Each year is a large pinned section: year on left (sticky inside section), narrative on right, optional image. The spine line is drawn via `useScroll` and clips between dots.
- Closing block: "Today" paragraph + CTA.

### 4.10 `/practice/process`
- Hero: "Five phases. One trajectory."
- 5 scroll-pinned panels (Listening → Concept & Strategy → Design Development → Execution → Beyond Delivery). Each panel is full-viewport: phase number + name on left, paragraph + image on right. As you scroll, panels stack with translateY + scale, like Open Atelier's project blocks.

### 4.11 `/practice/journal` and `/practice/journal/$slug`
- Index: editorial 3-column grid, first post is a "feature" double-width row.
- Essay: narrow column, drop-cap first paragraph, pull-quotes, scroll progress bar at top.

### 4.12 `/contact`
- Left: oversized serif headline "Wherever you are, we design for you." + subline from brief.
- Form: underline-only inputs with floating labels, slow caret. On submit, the form panel slides up to reveal a typeset "Thank you" letter.
- Right: two studio addresses (Mumbai, Ahmedabad), email, regions served (India, Middle East, Africa).

---

## 5. Design system (shared, not page-specific)

Add to `src/styles.css`:
- Palette: cream `#f5eee3`, ink `#1a1614`, brown `#3f3431`, accent red `#ed3d39`, hairline `#1a161422`.
- Type: serif display (Cormorant or similar light 300), grotesk body (already loaded). All headlines weight 300, tight leading 1.02–1.08, letter-spacing -0.015em.
- Spacing scale: 8 / 16 / 24 / 40 / 64 / 120 / 200.
- Motion tokens: ease `[0.22, 1, 0.36, 1]`, durations 0.8 / 1.2 / 1.6s.
- Primitives: `.idl-hero-cinematic`, `.idl-mask-reveal` (clip-path inset 100% → 0), `.idl-figure`, `.idl-marquee`, `.idl-rail` (horizontal scroll), `.idl-spine` (timeline), `.idl-stack` (sticky pinned), `.idl-doors`.

## 6. Motion system (new — this is the missing piece)

Built with framer-motion + the existing Lenis smooth scroll. A single `useReveal` style hook standardises:
- **Mask reveal** for headlines: each line wrapped in overflow-hidden, child translates from 110% → 0 with stagger 0.08, dur 1.2.
- **Image cinematic** for heroes: img starts scale 1.12, animates to 1 over 1.6s on mount; parallax y on scroll via `useScroll` + `useTransform`.
- **Figure reveal**: clip-path inset(0 0 100% 0) → inset(0) on enter, dur 1.2.
- **Curtain page transition**: cream `<motion.div>` fixed full screen, scaleY 0→1 on exit, 1→0 on enter, origin alternating. Wired into the root layout.
- **Cursor states**: existing `CustomCursor` extended with `data-cursor="view" | "drag" | "open"` labels picked up on hover.
- **Marquee** for award strip and studio photos — `motion.div` translating x infinitely, paused on hover.
- **Horizontal scroll rail** for featured projects on sector pages — uses `useScroll` mapped to translateX.
- **Sticky pinning** for history years and process phases.

Restraint rules: no bouncing, no spring overshoot, no rotate, no skew. Everything is opacity + translate + scale + clip-path with the same ease curve.

---

## 7. Content fidelity

A single `src/data/siteContent.ts` will be rewritten to hold every block from the brief verbatim, keyed by page. Pages render from it — no inline copywriting. This makes sure nothing is silently rewritten. The brief sections that will be added back:

- Full About paragraph + "Simple. Considered. Enduring."
- Our Team intro + Meet the Leadership
- Full History timeline (1989 → Today) — both versions merged
- Architecture & Project Types (Residential / Institutional / Commercial Interiors) verbatim
- Mission / Vision / Values
- IDL Studio narrative
- Range of Experience (partner credits + work areas)
- Industry Recognition (full 7-item list)
- Culture & Process / Internships / Design Mentorship / Working at IDL
- Contact header + subline
- Our Design Approach (Clarity / Intent / People & Place / Sustainability / Craft & Collaboration)
- Sustainability & Building Performance
- In Conversation (journal placeholder)

---

## 8. File-level change list

**Rewrite from scratch**
- `src/routes/studio.tsx` (landing = About content)
- `src/routes/studio.team.tsx`
- `src/routes/projects.tsx`
- `src/routes/projects.$category.tsx`
- `src/routes/project.$slug.tsx`
- `src/routes/expertise.tsx`
- `src/routes/expertise.$sector.tsx`
- `src/routes/practice.tsx`
- `src/routes/practice.history.tsx`
- `src/routes/practice.process.tsx`
- `src/routes/practice.journal.tsx`
- `src/routes/practice.journal.$slug.tsx`
- `src/routes/contact.tsx`
- `src/data/siteContent.ts` (full content store)
- `src/styles.css` (replace inner-page CSS modules with new primitive set)

**New helpers**
- `src/components/motion/MaskReveal.tsx`
- `src/components/motion/CinematicImage.tsx`
- `src/components/motion/Figure.tsx`
- `src/components/motion/Marquee.tsx`
- `src/components/motion/HorizontalRail.tsx`
- `src/components/motion/PageCurtain.tsx` (mounted in `__root.tsx`)
- `src/components/home/Header.tsx` — mega-menu updated to final IA (only nav change; visual remains)

**Delete (orphan after restructure)**
- Old `studio.about.tsx` (content folded into `studio.tsx`)
- Any leftover sector/works/journal duplicates

**Untouched**
- All `src/routes/index.tsx` and `src/components/home/*` that build the homepage.

---

## 9. Acceptance criteria

1. Homepage renders identically (visual diff = 0).
2. Every content block from the brief appears verbatim somewhere in the site.
3. Every inner page has: full-bleed cinematic hero, mask-reveal headline, at least one signature motion moment (rail / spine / pinned stack / diptych / doors / marquee).
4. Cross-page route change plays the cream curtain transition.
5. No two inner pages share the same composition — distinct structural identity per page.
6. Mobile: heroes 80vh, grids collapse to single column, horizontal rails become vertical stacks, sticky rails unstick.
7. Lighthouse: no regressions on LCP for the homepage.

---

If you approve, I'll execute the rebuild in this order: design system + motion primitives → content store → Studio → Projects → Expertise → Practice → Contact → header IA → cleanup.
