# Interarch Design Labs — Visual-First Rebuild Plan

## What will change

I’ll keep the premium architectural tone, but shift the site from text-led to image-led by rebuilding the information architecture, homepage pacing, and key inner-page compositions around your uploaded visuals.

## Approved direction locked in

- Homepage hero will use the last uploaded mansion aerial image.
- Architecture and Interiors will stay under Projects.
- News will be introduced now with an expandable Awards structure for future additions.

## New information architecture

```text
/
/projects
/projects/architecture
/projects/interiors
/project/$slug
/expertise
/expertise/residential
/expertise/commercial
/expertise/institutional
/expertise/hospitality
/expertise/industrial
/expertise/workplace
/studio/about
/studio/team
/studio/history
/news
/news/journal
/news/journal/$slug
/news/awards
/contact
```

## Build plan

### 1. Reframe the global experience
- Update the primary navigation to remove Practice entirely.
- Rebuild the menu structure to match the new IA exactly.
- Keep the same restrained typography family and palette, but tighten hierarchy so imagery leads and copy supports.
- Refine motion globally toward softer fades, subtle image drift, gentle reveals, and calmer route transitions.

### 2. Refine the homepage into a quieter cinematic landing
- Replace the current hero image with the uploaded mansion aerial.
- Strip the hero down to only:
  - Interarch Design Labs
  - subtle Scroll indicator
- Remove the large supporting hero copy block and supporting subline.
- Re-sequence homepage sections so they breathe more through:
  - larger imagery
  - visual pauses
  - reduced on-screen paragraph density
  - stronger spacing rhythm
- Distribute the uploaded images strategically across homepage sections to avoid repetition.

### 3. Rebuild Projects around image-led presentation
- Keep `/projects` as the parent landing.
- Make the landing more immersive and less informational, with architecture/interiors presented as calm visual gateways.
- Rework `/projects/architecture` and `/projects/interiors` into spacious, editorial image grids with reduced card density and stronger photographic pacing.
- Update project detail pages so imagery dominates and metadata/copy sits in quieter supporting rails or blocks.
- Replace generic/placeholder project imagery where possible with uploaded assets and more deliberate curation from existing assets.

### 4. Rebuild Expertise for calmer sector storytelling
- Keep the current sector split, but relabel and present it as:
  - Residential
  - Commercial
  - Institutional
  - Hospitality
  - Industrial
  - Workplace
- Reduce text density on the expertise index.
- Shift sector pages toward cinematic hero imagery, shorter narrative blocks, and more visual pacing between content sections.
- Pair each sector with a more appropriate uploaded image where it helps reduce repetition.

### 5. Rebuild Studio into a legacy-led visual section
- Keep About and Team, and move History under Studio.
- Recompose About to feel more documentary-like and less like a manifesto wall.
- Break long copy into smaller, quieter modules separated by imagery and whitespace.
- Rebuild Team to feel more editorial and portrait-led.
- Rebuild History as a visual timeline with large years, short narratives, and alternating image moments instead of long continuous reading blocks.

### 6. Replace Practice with News
- Remove Practice from navigation and the user journey.
- Introduce `/news` as the new publication-style parent section.
- Move Journal under News and redesign it to feel like an architecture publication:
  - large imagery
  - minimal metadata
  - spacious editorial grid
  - calmer hierarchy
- Create `/news/awards` as an understated awards archive using the current recognition material.
- Structure Awards so more entries and images can be added later without redesigning the page.

### 7. Unify imagery across the whole site
- Use all uploaded images as premium visual assets across the experience where they fit best.
- Reduce reuse of the same asset across multiple sections.
- Ensure every major page has at least one strong, immersive visual moment.
- Make imagery do more of the emotional and pacing work so copy no longer dominates the viewport.

## Technical implementation

### Files likely to change
- `src/components/home/Hero.tsx`
- `src/components/home/Header.tsx`
- `src/components/home/FeaturedWorks.tsx`
- `src/components/home/Verticals.tsx`
- `src/components/home/HoverImageNav.tsx`
- `src/data/siteContent.ts`
- `src/data/projects.ts`
- `src/routes/projects.tsx`
- `src/routes/projects.$category.tsx`
- `src/routes/project.$slug.tsx`
- `src/routes/expertise.tsx`
- `src/routes/expertise.$sector.tsx`
- `src/routes/studio.about.tsx`
- `src/routes/studio.team.tsx`
- `src/routes/studio.history.tsx` (new or moved from current history structure)
- `src/routes/news.tsx` (new)
- `src/routes/news.journal.tsx` (new)
- `src/routes/news.journal.$slug.tsx` (new)
- `src/routes/news.awards.tsx` (new)
- `src/styles.css`
- route files and generated route tree affected by removing Practice and adding News

### Structural changes
- Retire the current `/practice/*` route family from navigation and page flow.
- Migrate journal/history concepts into the new Studio and News sections.
- Update route metadata to match the new IA and shareable page structure.

### Motion direction
- Keep Framer Motion, but reduce any feeling of generic repeated fade-ups.
- Standardize motion to quiet luxury behaviors:
  - slow opacity reveals
  - subtle upward offsets
  - image stabilization / slow scale correction
  - light parallax or drift only where it supports atmosphere

## Outcome

The site will feel less like a studio profile and more like a luxury architectural monograph: quieter hero, stronger imagery, less visible text density, better pacing, cleaner navigation, and a more unified cinematic experience.