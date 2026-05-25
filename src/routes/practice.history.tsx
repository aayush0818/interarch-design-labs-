import { useRef } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import { CustomCursor } from "@/components/home/CustomCursor";
import { milestones } from "@/data/siteContent";

export const Route = createFileRoute("/practice/history")({
  head: () => ({ meta: [
    { title: "History — Practice · IDL" },
    { name: "description", content: "Three decades of practice — from Interarch (1989) to Interarch Design Labs." },
    { property: "og:title", content: "History — Practice · IDL" },
    { property: "og:description", content: "Milestones of the IDL legacy." },
  ] }),
  component: HistoryPage,
});

const EASE = [0.22, 1, 0.36, 1] as const;

function HistoryPage() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.2", "end 0.8"] });
  const lineH = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <>
      <CustomCursor />
      <Header />
      <main className="idl-timeline-page">
        <header className="idl-timeline-head">
          <span className="idl-eyebrow-line">— Practice · History</span>
          <h1>The spine<br />of the studio.</h1>
          <p>A chronological reading of the practice — moments that shaped how we work today.</p>
        </header>
        <div className="idl-timeline" ref={ref}>
          <div className="idl-timeline-spine">
            <motion.div className="idl-timeline-spine-fill" style={{ height: lineH }} />
          </div>
          {milestones.map((m, i) => (
            <motion.article
              key={m.year + m.title}
              className={`idl-timeline-row ${i % 2 === 0 ? "is-left" : "is-right"}`}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.8, ease: EASE }}
            >
              <div className="idl-timeline-year">{m.year}</div>
              <div className="idl-timeline-dot" />
              <div className="idl-timeline-card">
                <h3>{m.title}</h3>
                <p>{m.text}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
