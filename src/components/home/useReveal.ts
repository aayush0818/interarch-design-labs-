import { useEffect } from "react";

export function useReveal() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    if (!("IntersectionObserver" in window)) {
      document
        .querySelectorAll<HTMLElement>("[data-reveal], [data-reveal-img]")
        .forEach((el) => el.classList.add("is-visible"));
      return;
    }

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

    const imgIo = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            imgIo.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );
    document
      .querySelectorAll<HTMLElement>("[data-reveal-img]")
      .forEach((el) => imgIo.observe(el));

    return () => {
      io.disconnect();
      imgIo.disconnect();
    };
  }, []);
}
