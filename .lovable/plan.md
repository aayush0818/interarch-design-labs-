Plan to fix the navigation exactly as requested:

1. Rebuild `Header.tsx` around the required state model
   - Keep only two visible header states:
     - Hero/top: logo + centered full nav + search icon, no Menu button.
     - Scrolled: logo + Menu + search icon, no nav items.
   - Use scroll threshold state without flicker and close/reset overlay cleanly.
   - Add ESC close and body scroll lock while the overlay is open.

2. Correct the navigation hierarchy and submenu logic
   - Make every parent category with children expand/collapse instead of navigating.
   - Only final child links navigate and close the menu.
   - Add children for the main groups using existing routes/data:
     - Projects: project/detail links or archive group.
     - Expertise: sector links.
     - Practice: overview/history/process/journal/contact.
     - Studios: Mumbai/Dubai-style submenu labels mapped to existing safe routes unless matching route files are added later.
     - Specialists: team/people route.
   - Ensure active parent updates the left content panel.

3. Rebuild the fullscreen overlay behavior
   - 50/50 desktop split: left dynamic editorial content, right nav/submenus.
   - Muted sage-gray architectural background.
   - Framer Motion opacity/translateY animations with 50–80ms stagger.
   - Smooth reverse close animation; no abrupt disappearance.
   - Parent click toggles submenu; clicking active parent again collapses it.

4. Fix responsive behavior
   - Desktop hero: logo + full nav + search.
   - Mobile hero: logo + search only; no desktop nav and no Menu at top.
   - Mobile scrolled: logo + Menu + search.
   - Mobile overlay: stacked layout with accordion-style submenu reveal.

5. Update CSS precisely for premium spacing and stable layout
   - Logo width: desktop 160–190px, mobile 110–130px.
   - Header heights: 110px desktop, 90px tablet, 80px mobile.
   - Scrolled background: warm light with dark type, subtle blur/shadow.
   - Use the requested `0.4s cubic-bezier(0.22, 1, 0.36, 1)` transitions.
   - Fix z-index, overlay clipping, spacing, and scrolled nav visibility.

6. Verify after implementation
   - Check the edited files for syntax and JSX balance.
   - Validate the header rules in the preview: top state, scrolled state, menu open, submenu toggle, final link close, and mobile layout.