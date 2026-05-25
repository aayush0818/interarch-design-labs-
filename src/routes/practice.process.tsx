import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import { CustomCursor } from "@/components/home/CustomCursor";
import { pageImages } from "@/data/siteContent";

export const Route = createFileRoute("/practice/process")({
  head: () => ({ meta: [
    { title: "Process — Practice · IDL" },
    { name: "description", content: "From listening to evolution — the five phases of the IDL design method." },
    { property: "og:title", content: "Process — Practice · IDL" },
    { property: "og:description", content: "A phased, considered method for architecture and interiors." },
  ] }),
  component: ProcessPage,
});

const EASE = [0.22, 1, 0.36, 1] as const;

const phases: Array<{ title: string; body: string; img: string }> = [
  { title: "Listening", body: "Every project begins with listening — to people, to context, to the story the site already carries. We work to understand aspirations, constraints and the quiet habits drawings often miss.", img: pageImages.works[0] },
  { title: "Concept", body: "Ideas are sketched and tested until the project finds its order. Climate, culture, craft and approval pathways inform a clear strategic direction.", img: pageImages.works[1] },
  { title: "Development", body: "Concepts come to life through proportion, materiality and detail. Drawings, schedules, mockups and consultant input bring rigour to every decision.", img: pageImages.works[2] },
  { title: "Execution", body: "We coordinate with engineers, consultants and craftspeople to deliver seamlessly. Site review protects intent as decisions become permanent.", img: pageImages.works[3] },
  { title: "Evolution", body: "A building is sustainable when it adapts and ages well. We stay involved so spaces continue to grow, adapt and live alongside you.", img: pageImages.works[4] },
];

function ProcessPage() {
  return (
    <>
      <CustomCursor />
      <Header />
      <main>
        <section className="idl-sec--sm" style={{ textAlign: "center", paddingTop: 160 }}>
          <span className="idl-eyebrow">— Practice · Process</span>
          <h1 style={{ margin: "20px auto 24px", maxWidth: 880, fontFamily: "var(--serif)", fontWeight: 300, fontSize: "clamp(44px, 5.4vw, 80px)", lineHeight: 1.05 }}>Five phases. One trajectory.</h1>
          <p className="idl-prose-lead" style={{ fontSize: "clamp(18px, 1.6vw, 22px)" }}>A considered method that holds from the first conversation to the building's quietest second decade.</p>
        </section>
        <div className="idl-proc">
          {phases.map((p, i) => (
            <motion.section
              key={p.title}
              className="idl-proc-row"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.9, ease: EASE }}
            >
              <div>
                <div className="idl-proc-num">{String(i + 1).padStart(2, "0")}</div>
                <h2 className="idl-proc-title">{p.title}</h2>
              </div>
              <div className="idl-proc-body">
                <p>{p.body}</p>
                <figure><img src={p.img} alt={p.title} loading="lazy" /></figure>
              </div>
            </motion.section>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
