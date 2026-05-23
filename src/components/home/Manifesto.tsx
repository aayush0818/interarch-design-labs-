import { useEffect, useRef } from "react";

export function Manifesto() {
  const outerRef = useRef<HTMLDivElement | null>(null);
  const labelRef = useRef<HTMLDivElement | null>(null);
  const l1 = useRef<HTMLSpanElement | null>(null);
  const l2 = useRef<HTMLSpanElement | null>(null);
  const l3 = useRef<HTMLSpanElement | null>(null);
  const ruleRef = useRef<HTMLDivElement | null>(null);
  const bodyRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const outer = outerRef.current;
    if (!outer) return;
    let ticking = false;

    const toggle = (el: HTMLElement | null, on: boolean) => {
      if (!el) return;
      el.classList.toggle("visible", on);
    };

    const update = () => {
      ticking = false;
      const rect = outer.getBoundingClientRect();
      const total = outer.offsetHeight - window.innerHeight;
      const p = Math.min(Math.max(-rect.top / total, 0), 1);

      toggle(labelRef.current, p >= 0.0);
      toggle(l1.current, p >= 0.15);
      toggle(l2.current, p >= 0.35);
      toggle(l3.current, p >= 0.55);
      toggle(ruleRef.current, p >= 0.72);
      toggle(bodyRef.current, p >= 0.82);
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="manifesto-outer" ref={outerRef}>
      <div className="manifesto-stage">
        <div className="m-label" ref={labelRef}>
          (Our Philosophy)
        </div>
        <div className="reveal-line">
          <span className="reveal-line-inner" ref={l1}>
            Not just spaces.
          </span>
        </div>
        <div className="reveal-line">
          <span className="reveal-line-inner" ref={l2}>
            Stories, shaped with care,
          </span>
        </div>
        <div className="reveal-line">
          <span className="reveal-line-inner" ref={l3}>
            clarity, and the way you live.
          </span>
        </div>
        <div className="m-rule" ref={ruleRef} />
        <div className="m-body" ref={bodyRef}>
          Designed around you.
        </div>
      </div>
    </div>
  );
}
