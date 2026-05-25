import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import studioHero from "@/assets/studio-hero.jpg";
import studioCulture from "@/assets/studio-culture.jpg";
import skyline from "@/assets/skyline-sketch.png";

export const Route = createFileRoute("/studio/about")({
  head: () => ({ meta: [
    { title: "About — Studio · IDL" },
    { name: "description", content: "35+ years of craft, clarity and care. The IDL studio is the union of Interarch and Kala Design." },
    { property: "og:title", content: "About — Studio · IDL" },
    { property: "og:description", content: "A multidisciplinary studio across architecture, interiors and planning." },
    { property: "og:image", content: studioHero },
  ] }),
  component: AboutPage,
});

const EASE = [0.22, 1, 0.36, 1] as const;
const principles = [
  "Architecture must respond to life.",
  "Every design should feel inevitable, yet personal.",
  "Innovation matters only when rooted in context.",
];

function AboutPage() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const yMarg1 = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const yMarg2 = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <article className="idl-manifesto" ref={ref}>
      <header className="idl-manifesto-head">
        <span className="idl-manifesto-eyebrow">— Studio · About</span>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE }}
        >
          A contemporary legacy<br />in architecture<br /><em>and interiors.</em>
        </motion.h1>
      </header>

      <motion.aside className="idl-manifesto-margin idl-manifesto-margin--left" style={{ y: yMarg1 }}>
        <img src={skyline} alt="" />
        <span>est. 1989</span>
      </motion.aside>

      <section className="idl-manifesto-body">
        <p className="lead">
          Our work is founded on a simple conviction: <em>design must answer how life is lived.</em> We translate that conviction into buildings and interiors that are purposeful, considered, and quietly luxurious.
        </p>
        <p>
          Interarch Design Labs is the union of two legacy firms — Interarch, founded in 1989 by Ar. Dipak Thaker, and Kala Design, led by Ar. Hussain Rangwala and Ar. Rohit Gojia. Together we bring forward a shared philosophy: design should not chase trends, it should serve intent.
        </p>
        <p>
          The practice spans architecture, interiors, planning and engineering. From a private residence to a civic campus, the foundation is singular — a deep respect for context, craft and collaboration.
        </p>
      </section>

      <motion.aside className="idl-manifesto-margin idl-manifesto-margin--right" style={{ y: yMarg2 }}>
        <div className="idl-manifesto-swatches">
          <span style={{ background: "#a8392b" }} />
          <span style={{ background: "#3f3431" }} />
          <span style={{ background: "#e0d5c8" }} />
          <span style={{ background: "#f5ede0" }} />
        </div>
        <small>Material palette</small>
      </motion.aside>

      <section className="idl-manifesto-principles">
        <span className="idl-manifesto-eyebrow">— Guiding principles</span>
        {principles.map((p, i) => (
          <motion.div
            key={p}
            className={`idl-manifesto-principle ${i % 2 === 0 ? "is-left" : "is-right"}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.9, ease: EASE }}
          >
            <span className="idl-manifesto-numeral">{String(i + 1).padStart(2, "0")}</span>
            <p>{p}</p>
          </motion.div>
        ))}
      </section>

      <section className="idl-manifesto-end">
        <motion.div
          className="idl-manifesto-image"
          initial={{ opacity: 0, scale: 1.04 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: EASE }}
        >
          <img src={studioCulture} alt="Studio material table" />
        </motion.div>
        <p>Not a hierarchy, but a dialogue — across disciplines, generations and perspectives.</p>
      </section>
    </article>
  );
}
