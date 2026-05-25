import { useEffect } from "react";

export function useReveal() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // ---- 1. Reveal-on-enter for [data-reveal] (text + generic) ----
    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12 }
      );
      document
        .querySelectorAll<HTMLElement>("[data-reveal]")
        .forEach((el) => io.observe(el));
    } else {
      document
        .querySelectorAll<HTMLElement>("[data-reveal]")
        .forEach((el) => el.classList.add("is-visible"));
    }

    // ---- 2. Image reveal: slide down + fade in ----
    const wraps = Array.from(
      document.querySelectorAll<HTMLElement>(".img-reveal-wrap")
    );
    if ("IntersectionObserver" in window) {
      const imgIo = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              imgIo.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12 }
      );
      wraps.forEach((el) => imgIo.observe(el));
    } else {
      wraps.forEach((el) => el.classList.add("is-visible"));
    }

    // ---- 3. Global parallax loop for .parallax-img ----
    // Single passive scroll → rAF, batch updates via CSS variable.
    const parallaxEls = Array.from(
      document.querySelectorAll<HTMLElement>(".parallax-img")
    );
    if (parallaxEls.length === 0) return;

    let ticking = false;
    const vh = () => window.innerHeight || 1;

    const update = () => {
      ticking = false;
      const viewportH = vh();
      for (const el of parallaxEls) {
        const rect = el.getBoundingClientRect();
        // Skip elements way outside viewport
        if (rect.bottom < -200 || rect.top > viewportH + 200) continue;
        const speed = parseFloat(el.dataset.parallaxSpeed || "0.08");
        // Distance of element center from viewport center, normalised.
        const center = rect.top + rect.height / 2;
        const delta = center - viewportH / 2;
        // Negative offset = move slower than scroll (feels heavier).
        const y = -delta * speed;
        const inner = el.querySelector<HTMLElement>(".img-parallax");
        if (inner) {
          inner.style.transform = `translate3d(0, ${y.toFixed(2)}px, 0)`;
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
    };
  }, []);
}
