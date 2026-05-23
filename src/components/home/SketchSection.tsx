import { useEffect, useRef } from "react";
import skyline from "@/assets/skyline-sketch.png";

const W = 1200;
const H = 220;

function buildClip(p: number): string {
  if (p <= 0) return `0,0 0,0 0,${H} 0,${H}`;
  if (p >= 1) return `0,0 ${W},0 ${W},${H} 0,${H}`;
  const ex = p * W;
  const pts = [`0,0`, `${ex.toFixed(1)},0`];
  for (let i = 0; i <= 48; i++) {
    const t = i / 48;
    const y = t * H;
    const jag =
      Math.sin(t * 26 + p * 35) * 7 +
      Math.sin(t * 11 + p * 18) * 4 +
      Math.cos(t * 47 + p * 9) * 2.5 +
      Math.sin(t * 7) * 2;
    pts.push(`${Math.max(0, ex + jag).toFixed(1)},${y.toFixed(1)}`);
  }
  pts.push(`0,${H}`);
  return pts.join(" ");
}

export function SketchSection() {
  const outerRef = useRef<HTMLDivElement | null>(null);
  const polyRef = useRef<SVGPolygonElement | null>(null);
  const dotRef = useRef<SVGCircleElement | null>(null);
  const lineRef = useRef<SVGLineElement | null>(null);
  const pctRef = useRef<HTMLSpanElement | null>(null);
  const topLabelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const outer = outerRef.current;
    if (!outer) return;
    let ticking = false;

    const update = () => {
      ticking = false;
      const rect = outer.getBoundingClientRect();
      const total = outer.offsetHeight - window.innerHeight;
      const p = Math.min(Math.max(-rect.top / total, 0), 1);

      polyRef.current?.setAttribute("points", buildClip(p));

      const ex = p * W;
      const py = H * 0.5 + Math.sin(p * Math.PI * 4) * 20 + Math.cos(p * Math.PI * 7) * 10;

      if (p > 0.01 && p < 0.99) {
        dotRef.current?.setAttribute("cx", String(ex));
        dotRef.current?.setAttribute("cy", String(py));
        dotRef.current?.setAttribute("opacity", "0.6");
        lineRef.current?.setAttribute("x1", String(ex));
        lineRef.current?.setAttribute("x2", String(ex));
        lineRef.current?.setAttribute("opacity", "0.12");
      } else {
        dotRef.current?.setAttribute("opacity", "0");
        lineRef.current?.setAttribute("opacity", "0");
      }

      if (pctRef.current) pctRef.current.textContent = `${Math.round(p * 100)}%`;
      if (topLabelRef.current) {
        topLabelRef.current.classList.toggle("visible", p > 0.03);
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

  return (
    <div className="sketch-outer" ref={outerRef}>
      <div className="sketch-stage">
        <div className="sketch-top-label" ref={topLabelRef}>
          (Our City · Mumbai)
        </div>
        <svg
          className="sketch-svg"
          viewBox={`0 0 ${W} ${H}`}
          preserveAspectRatio="xMidYMid meet"
          aria-hidden
        >
          <defs>
            <clipPath id="sketchClip">
              <polygon ref={polyRef} points={`0,0 0,0 0,${H} 0,${H}`} />
            </clipPath>
          </defs>
          <image
            href={skyline}
            x="0"
            y="0"
            width={W}
            height={H}
            preserveAspectRatio="xMidYMid meet"
            clipPath="url(#sketchClip)"
          />
          <line ref={lineRef} x1="0" y1="0" x2="0" y2={H} stroke="#3f3431" strokeWidth="0.5" opacity="0" />
          <circle ref={dotRef} cx="0" cy={H / 2} r="4" fill="#3f3431" opacity="0" />
        </svg>
        <div className="sketch-bottom-left">
          Building the city · <span ref={pctRef}>0%</span>
        </div>
        <div className="sketch-bottom-right">Where every building tells a story</div>
      </div>
    </div>
  );
}
