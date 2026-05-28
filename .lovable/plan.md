# Visual Refinement & Real-Image Migration

A cohesive pass across five areas plus a full-site image audit. The studio keeps its quiet-luxury, image-led register. All AI-generated imagery is removed and replaced only with the provided real project photos.

## Real images available (the only ones we may use)
- **Institutional**: `institutional-aerial-campus`, `institutional-pool-court`, `institutional-green-tower`, `institutional-palm-court`
- **Residential**: `residential-living-gallery`, `residential-lounge-warm`, `residential-dining-light`, `residential-living-aquarium`, `residential-lounge-noir`
- **Commercial**: `commercial-monster-lounge`, `commercial-monster-boardroom`, `commercial-monster-corridor`, `commercial-boardroom-suite`, `commercial-reception-lobby`, `commercial-boutique-panorama`, `commercial-boutique-floor`, `commercial-boutique-interior`, `commercial-salon-interior`, `commercial-textile-studio`, `commercial-pilates-studio`
- **Team portraits (real)**: `team-dipak-thaker`, `team-rohit-gojia`, `team-murtaza-rangwala`, `team-hussain-rangwala`
- **Brand**: `idl-logo`

## AI-generated images to purge everywhere
`work-1..6.jpg`, `sector-residential/commercial/institutional/hospitality/industrial/workplace.jpg`, `studio-hero.jpg`, `studio-culture.jpg`, `team-hero.jpg`, `hero.jpg`, `nav-*.jpg`, `award-1..3.jpg`, `partner-1..4.jpg`, `skyline-sketch.png`, `9c5aa0d0-...jpg`, and the `idl-home-hero-mansion / idl-institutional-facade / idl-commercial-salon / idl-retail-boutique / idl-workplace-studio` set.

Every file referencing these (Header, HoverImageNav, Hero, FeaturedWorks, Verticals, Recognition, SketchPhilosophy, Clients, news.tsx, news.awards.tsx, projects.tsx, projects.$category.tsx, studio.about/team/history, practice.*, expertise.$sector, styles.css background refs, siteContent.ts) gets re-pointed to a real image. Where a decorative AI image has no real equivalent (e.g. sketch philosophy section), the section is reworked to lean on layout/typography instead of inventing imagery.

## 1. Expertise (`expertise.tsx` + `expertise.$sector.tsx` + `sectors` data)
- Assign each of the six sectors a real cover image and a small real gallery from the matching portfolio:
  - Residential → residential set
  - Commercial Interiors → commercial set
  - Institutional → institutional set
  - Hospitality → institutional-palm/pool (resort-like) + commercial
  - Master Planning → institutional-aerial / green-tower
  - Sustainability → institutional-green-tower + residential daylight shots
- Sector detail page: replace the single repeated `data.image` in the residential sub-cards with distinct gallery images, and add a small image band so each sector reads visually, not just as text.

## 2. History (`studio.history.tsx`)
Rebuild from the flat award-row list into a year-by-year cinematic journey:
- Full-height intro hero (real institutional image) with "A legacy in motion".
- Vertical scroll spine with animated progress fill (reuse the `idlx-spine` pattern already in `practice.history.tsx`), one stage per milestone (1989 → Today).
- Alternating layout: each stage shows year (large), title, text, and a paired real image, with clear stage-to-stage transitions (Reveal/MaskText motion). Images cycle through the real institutional/residential/commercial sets.

## 3. About (`studio.about.tsx`)
Make it more visual and immersive while keeping all copy:
- Swap `studioHero`, `studioCulture`, `teamHero`, `work2`, `work4` for real images.
- Break dense text blocks with image-led splits: intro manifesto paired with a hero image, Mission/Vision/Values interleaved with a full-bleed image band, Range-of-Experience as a stat + image composition, Recognition kept but spaced, Culture cards given more breathing room.
- Add varied presentation (image strips, pull-quote over image, two-up spreads) rather than stacked paragraphs.

## 4. Contact (`contact.tsx`)
Cleaner, more minimal, cohesive layout:
- Calmer two-column structure (letter form + studio info) with more whitespace, refined field styling, and a quiet real image accent for warmth.
- Tighten typographic rhythm so it matches the rest of the site.

## 5. Footer (`Footer.tsx` + footer CSS)
- Simplify into a clean, balanced grid: brand/logo + locations, single nav column, contact + copyright. Reduce visual noise, align spacing and type with the minimal direction.

## Technical notes
- Image swaps centralised through `siteContent.ts` and `projects.ts` import maps so routes need minimal change.
- Reuse existing motion components (`CinematicHero`, `Reveal`, `MaskText`, `Marquee`) and `idlx-*` CSS tokens; add only small CSS for the new history timeline/about spreads.
- After edits, grep to confirm zero references remain to any purged AI asset; delete the orphaned asset files.
- Verify build succeeds and spot-check each redesigned route in preview.
