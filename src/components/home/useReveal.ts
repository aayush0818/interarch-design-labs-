import { useEffect } from "react";

/**
 * Single passive scroll → rAF loop that drives:
 *   1. text/element reveal via IntersectionObserver (one-shot)
 *   2. image curtain mask (cream overlay lifts as you scroll past)
 *   3. parallax drift on .parallax-img wrappers
 *
 * The mask is the source of truth for "image entrance" — no IO needed
 * for images, because the curtain itself ties reveal to scroll position.
 */
export function useReveal() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // ---- 1. One-shot reveal for [data-reveal] (text blocks, headings) ----
    let textIo: IntersectionObserver | null = null;
    if ("IntersectionObserver" in window) {
      textIo = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              textIo!.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12 }
      );
      document
        .querySelectorAll<HTMLElement>("[data-reveal]")
        .forEach((el) => textIo!.observe(el));
    } else {
      document
        .querySelectorAll<HTMLElement>("[data-reveal]")
        .forEach((el) => el.classList.add("is-visible"));
    }

    // ---- 2 + 3. Scroll-tied loop for image masks + parallax ----
    const wraps = Array.from(
      document.querySelectorAll<HTMLElement>(".img-reveal-wrap")
    );

    let ticking = false;
    const update = () => {
      ticking = false;
      const vh = window.innerHeight || 1;

      for (const wrap of wraps) {
        const rect = wrap.getBoundingClientRect();
        if (rect.bottom < -300 || rect.top > vh + 300) continue;

        // Reveal progress: starts when top of element enters viewport
        // bottom, completes by the time the top reaches ~25% from
        // viewport top. Linear, clamped 0..1.
        const startY = vh;
        const endY = vh * 0.25;
        const raw = (startY - rect.top) / (startY - endY);
        const p = raw < 0 ? 0 : raw > 1 ? 1 : raw;

        // Mask: 100 = fully covered, 0 = fully revealed.
        // As p → 1 the cream curtain translates up off the image.
        const mask = (1 - p) * 100;
        wrap.style.setProperty("--mask", mask.toFixed(2));

        // Parallax on .parallax-img wrappers — image drifts slower
        // than the scroll so it feels like it's floating behind.
        if (wrap.classList.contains("parallax-img")) {
          const speed = parseFloat(wrap.dataset.parallaxSpeed || "0.08");
          const delta = rect.top + rect.height / 2 - vh / 2;
          const y = -delta * speed;
          const inner = wrap.querySelector<HTMLElement>(".img-parallax");
          if (inner) {
            inner.style.transform = `translate3d(0, ${y.toFixed(2)}px, 0)`;
          }
        }
      }
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      textIo?.disconnect();
    };
  }, []);
}
