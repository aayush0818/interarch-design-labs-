
# Internal Pages — Unified Cinematic Rebuild

The previous rebuild gave each page a distinct concept (Diptych, Newspaper, Letter, Three Doors, etc.). The brief now asks for the opposite: one calm, symmetrical, institutional language across every internal page. Homepage stays untouched.

## 1. Global Language (applies to every internal page)

- **Palette**: cream `#f5eee3` background, warm brown `#3f3431` text, red `#ed3d39` used sparingly as a single accent rule/dot.
- **Type**: existing serif for headings (restrained sizes — never oversized), existing sans for metadata/body.
- **Grid**: 12-col, generous outer margins, large vertical rhythm (≥160px between sections desktop).
- **Motion vocabulary (single set, reused everywhere)**:
  - Hero images: scale 1.03 → 1, opacity 0 → 1, 1.4s, ease `[0.22,1,0.36,1]`.
  - Section reveal: y 40 → 0, opacity 0 → 1, 0.9s, stagger 0.08s.
  - Tile hover: image scale 1 → 1.02, brightness +4%, 0.6s.
  - Underlines/dividers: scaleX 0 → 1, 0.8s.
  - No bounce, no layout morphs, no horizontal scroll, no sticky-stack pinning, no typewriter, no FLIP.
- **UI primitives**: minimal. Underline-only form fields. Thin 1px dividers in warm brown at 20% opacity. Cursor stays as existing CustomCursor.

## 2. Pages to Rebuild

Each page below is rebuilt to the same calm spec. All previously-created "concept" CSS (`.idl-diptych`, `.idl-archive-grid`, `.idl-timeline-spine`, `.idl-letter`, `.idl-three-doors`, `.idl-phase-stack`, `.idl-newspaper`, `.idl-portrait-gallery`, `.idl-manifesto`, `.idl-editorial-spread`, `.idl-museum-index`) is removed from `styles.css` and replaced by a small shared set: `.idl-hero`, `.idl-meta-row`, `.idl-prose`, `.idl-grid-2`, `.idl-grid-3`, `.idl-section`, `.idl-divider`, `.idl-figure`, `.idl-eyebrow`.

### Projects (`/projects`)
- 70vh cinematic hero image, small serif heading bottom-left, eyebrow "Projects".
- Category nav: inline "Architecture · Interiors" with large spacing, hover underline.
- 2-col strict grid of all projects, large gutters, image + location + name only.
- Filter by category via inline nav (no separate `$category` page needed, but keep route for deep-link).

### Projects / $category (`/projects/architecture`, `/projects/interiors`)
- Same template as Projects landing, pre-filtered, eyebrow shows category.

### Project detail (`/project/$slug`)
- Fullscreen hero with Location / Sector / Project Name bottom-left.
- Metadata row: Location · Sector · Scope · Area · Year — equal columns, thin dividers.
- Narrow centered intro paragraph.
- Sequential gallery: fullscreen → 2-col pair → portrait → fullscreen → material closeups (uses existing cover + work images; layout, not new assets).
- Material detail strip (3-col closeups).
- Related projects: 2 large cards.

### Expertise (`/expertise`)
- Small cinematic hero.
- Six full-width horizontal panels (Residential, Commercial, Institutional, Hospitality, Industrial, Workplace), each: full-bleed image left, title + 2-line description + "View work →" right. Alternating side every other row for rhythm (still symmetrical, not asymmetrical chaos).
- Philosophy block centered.

### Expertise / $sector (`/expertise/$sector`)
- Hero with sector name.
- Narrow philosophy paragraph (from existing siteContent).
- 2-col grid of projects in that sector.

### Studio (`/studio` → redirects to `/studio/about`)
- Layout wrapper with sub-tab strip "About · Team", thin underline on active.

### Studio / About (`/studio/about`)
- Intro statement (narrow, centered).
- About: text left, image right, large breathing room.
- Five philosophy blocks (Clarity, Intent, People & Place, Sustainability, Craft & Collaboration) — each a symmetrical split (alternating image side), large image + 1 paragraph.
- Recognition list: Award · Institution · Year, three columns, thin dividers, no badges.
- Culture strip: 3 documentary images, captions.

### Studio / Team (`/studio/team`)
- Leadership intro paragraph.
- Strict symmetrical portrait grid (3-col desktop, 2-col tablet), consistent aspect ratio, name + role only.
- Studio culture strip below: 3 documentary frames.

### Practice (`/practice`)
- Calm landing: three stacked sections (History · Process · Journal), each a horizontal split with image + title + 2-line intro + link. No "three doors" full-height bands.

### Practice / History (`/practice/history`)
- Vertical timeline, large centered years (1989, 2001, 2008, 2010, 2015, Today), narrow narrative beneath each. Thin vertical line drawn via `useScroll`. No alternating left/right card layout.

### Practice / Process (`/practice/process`)
- Five sections (Listening, Concept, Development, Execution, Evolution). Each: left = stage number + title; right = paragraph + small supporting image. Large vertical spacing between stages. No sticky pinning.

### Practice / Journal (`/practice/journal`)
- Featured article (large image + date + title).
- Symmetrical 3-col grid of articles below. Image + date + title only.
- Hover: slow image scale, opacity shift on text. No newspaper masthead/column rules.

### Practice / Journal / $slug (`/practice/journal/$slug`)
- Centered narrow measure, serif body, large drop-cap, generous leading. Keep existing scroll-progress bar (it's restrained enough).

### Contact (`/contact`)
- Hero: serif statement "Wherever you are, we design for you." (left-aligned, large whitespace).
- Two-col: left = underline-only form (Name, Email, Project Type, Message), right = office metadata (City / Address / Email / Phone) styled as architectural documentation.
- Remove typewriter intro, "Dear IDL" letter framing, skyline sketch.

## 3. Files Touched

**Edit:**
- `src/styles.css` — remove all per-concept classes from the prior rebuild; add a small shared set listed in §1.
- `src/components/home/Header.tsx` — keep new IA; ensure nav matches (`Projects / Expertise / Studio / Practice / Contact`).
- `src/routes/project.$slug.tsx` — rebuild to spec.
- `src/routes/projects.tsx`, `src/routes/projects.$category.tsx` — rebuild.
- `src/routes/expertise.tsx`, `src/routes/expertise.$sector.tsx` — rebuild.
- `src/routes/studio.tsx`, `src/routes/studio.about.tsx`, `src/routes/studio.team.tsx` — rebuild.
- `src/routes/practice.tsx`, `src/routes/practice.history.tsx`, `src/routes/practice.process.tsx`, `src/routes/practice.journal.tsx`, `src/routes/practice.journal.$slug.tsx` — rebuild.
- `src/routes/contact.tsx` — rebuild.
- `src/data/projects.ts` — add `scope` field where missing (uses existing data otherwise).

**Create:** none (the small shared classes live inside `styles.css`; no new components needed — `useReveal` and `CustomCursor` already exist).

**Delete:** none (all current routes get rebuilt in place).

## 4. Out of Scope

- Homepage (`index.tsx`, all `components/home/*` except `Header.tsx`) — untouched.
- No new content; uses existing `siteContent.ts` and `projects.ts` strings.
- No new images generated; reuses the existing `work-*.jpg` and `skyline-sketch.png` assets.
- No backend, data, or auth changes.
