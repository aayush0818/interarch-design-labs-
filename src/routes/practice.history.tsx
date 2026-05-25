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
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.3", "end 0.7"] });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <>
      <CustomCursor />
      <Header />
      <main>
        <section className="idl-sec--sm" style={{ textAlign: "center", paddingTop: 160 }}>
          <span className="idl-eyebrow">— Practice · History</span>
          <h1 style={{ margin: "20px auto 24px", maxWidth: 880, fontFamily: "var(--serif)", fontWeight: 300, fontSize: "clamp(44px, 5.4vw, 80px)", lineHeight: 1.05 }}>Three decades of work.</h1>
          <p className="idl-prose-lead" style={{ fontSize: "clamp(18px, 1.6vw, 22px)" }}>A chronological reading of the practice — moments that shaped how we work today.</p>
        </section>
        <div className="idl-tl">
          <div className="idl-tl-wrap" ref={ref}>
            <div className="idl-tl-spine">
              <motion.div className="idl-tl-spine-fill" style={{ scaleY }} />
            </div>
            {milestones.map((m, i) => (
              <motion.article
                key={m.year + m.title}
                className="idl-tl-item"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20%" }}
                transition={{ duration: 0.9, ease: EASE }}
              >
                <div className="idl-tl-year">{m.year}</div>
                <h3 className="idl-tl-title">{m.title}</h3>
                <p className="idl-tl-text">{m.text}</p>
                {i < milestones.length - 1 && <span className="idl-tl-dot" />}
              </motion.article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
