import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import { CustomCursor } from "@/components/home/CustomCursor";

export const Route = createFileRoute("/practice/process")({
  head: () => ({ meta: [
    { title: "Process — Practice · IDL" },
    { name: "description", content: "From listening to delivery — the five phases of the IDL design method." },
    { property: "og:title", content: "Process — Practice · IDL" },
    { property: "og:description", content: "A phased, considered method for architecture and interiors." },
  ] }),
  component: ProcessPage,
});

const EASE = [0.22, 1, 0.36, 1] as const;

const phases: Array<[string, string, string]> = [
  ["Listening First", "Every project begins with listening — to people, to context, to the story the site already carries. We work to understand aspirations, constraints and the quiet habits drawings often miss.", "Brief archive"],
  ["Concept & Strategy", "Ideas are sketched and tested until the project finds its order. Climate, culture, craft and approval pathways inform a clear strategic direction.", "Concept package"],
  ["Design Development", "Concepts come to life through proportion, materiality and detail. Drawings, schedules, mockups and consultant input bring rigour to every decision.", "Design package"],
  ["Execution", "We coordinate with engineers, consultants and craftspeople to deliver seamlessly. Site review protects intent as decisions become permanent.", "Tender & site set"],
  ["Beyond Delivery", "A building is sustainable when it adapts and ages well. We stay involved so spaces continue to grow, adapt and live alongside you.", "Post-occupancy review"],
];

function ProcessPage() {
  return (
    <>
      <CustomCursor />
      <Header />
      <main className="idl-stack">
        <header className="idl-stack-head">
          <span className="idl-eyebrow-line">— Practice · Process</span>
          <h1>Five phases.<br />One trajectory.</h1>
        </header>
        <div className="idl-stack-track">
          {phases.map(([title, text, deliv], i) => (
            <section
              key={title}
              className="idl-stack-panel"
              style={{ top: `${72 + i * 18}px`, zIndex: i + 1 }}
            >
              <motion.div
                className="idl-stack-inner"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-30%" }}
                transition={{ duration: 0.8, ease: EASE }}
              >
                <span className="idl-stack-num">{String(i + 1).padStart(2, "0")}</span>
                <span className="idl-stack-tag">Phase {String(i + 1).padStart(2, "0")}</span>
                <h2>{title}</h2>
                <p>{text}</p>
                <div className="idl-stack-deliv">
                  <span>Deliverable</span>
                  <strong>{deliv}</strong>
                </div>
              </motion.div>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
