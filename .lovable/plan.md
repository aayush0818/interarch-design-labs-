Two focused tweaks to the header:

1. Hero-state hover dropdowns (no fullscreen overlay)
   - In the top/hero nav, hovering a parent item (Projects, Expertise, Practice, Studios) reveals its subpages as a small dropdown anchored under that link.
   - Clicking the parent label itself does nothing (or toggles); only sub-links navigate.
   - Hovering "Specialists" (no children) does nothing extra — it stays a direct link.
   - Dropdown styling: transparent/blurred dark panel matching hero text, small uppercase sans labels, subtle fade + 4px translateY animation via Framer Motion.
   - Dropdown closes on mouse leave of the link + panel group, and on scroll.
   - The fullscreen mega-menu overlay is no longer triggered from the hero state — it only opens from the scrolled-state Menu button.

2. Shrink the fullscreen overlay so it fits the viewport without scrolling
   - Reduce vertical padding (top ~96px, bottom ~40px) and tighten gaps.
   - Reduce nav typography: `idl-mega-nav-label` from `clamp(36px, 4.6vw, 64px)` → roughly `clamp(26px, 3.2vw, 44px)`.
   - Reduce row padding (18px → 10px) and gap between rows.
   - Reduce left panel `idl-mega-title` from `clamp(56px, 6.4vw, 104px)` → `clamp(36px, 4.4vw, 64px)`; shrink editorial image max-height so the whole left column fits.
   - Submenu items: tighter line-height and smaller font.
   - Set `.idl-mega` to `height: 100dvh; overflow: hidden` and give each column `overflow: hidden` (was `auto`) so nothing scrolls.
   - Tablet/mobile: scale further down; on mobile stack vertically with compact spacing (overlay still fits one screen).

Files to edit: `src/components/home/Header.tsx` (hero hover dropdowns), `src/styles.css` (new `.idl-topnav-drop` styles + overlay size reductions).