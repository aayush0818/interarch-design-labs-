import { useEffect } from "react";

/**
 * Continuous rAF loop that drives:
 *   1. text/element reveal via IntersectionObserver (one-shot)
 *   2. image curtain mask (cream overlay lifts as you scroll past)
 *   3. parallax drift on .parallax-img wrappers
 *
 * We use a continuous rAF instead of a `scroll` listener because smooth-scroll
 * libraries (Lenis) and programmatic scrolls don't always fire native
 * `scroll` on window — a continuous loop is bulletproof and trivially cheap
 * (a handful of getBoundingClientRect calls per frame).
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

    // Snapshot wraps once. Components on this page mount synchronously, so a
    // single rAF after first paint catches them all. If sections mount later,
    // we re-query inside the loop (cheap on a small DOM).
    const queryWraps = () =>
      Array.from(document.querySelectorAll<HTMLElement>(".img-reveal-wrap"));

    let wraps = queryWraps();
    let frame = 0;
    let lastQuery = performance.now();
    let rafId = 0;

    const tick = () => {
      const now = performance.now();
      // Re-query every 1.5s to pick up newly-mounted wraps without paying
      // the cost on every frame.
      if (now - lastQuery > 1500) {
        wraps = queryWraps();
        lastQuery = now;
      }

      const vh = window.innerHeight || 1;

      for (const wrap of wraps) {
        const rect = wrap.getBoundingClientRect();
        if (rect.bottom < -300 || rect.top > vh + 300) continue;

        // Reveal progress: starts when top of element enters viewport bottom,
        // completes by the time the top reaches ~25% from viewport top.
        const startY = vh;
        const endY = vh * 0.25;
        const raw = (startY - rect.top) / (startY - endY);
        const p = raw < 0 ? 0 : raw > 1 ? 1 : raw;

        // 100 = fully covered, 0 = fully revealed.
        const mask = (1 - p) * 100;
        wrap.style.setProperty("--mask", mask.toFixed(2));

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

      frame++;
      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(rafId);
      textIo?.disconnect();
    };
  }, []);
}
