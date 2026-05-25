import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import studioHero from "@/assets/studio-hero.jpg";
import studioCulture from "@/assets/studio-culture.jpg";
import teamHero from "@/assets/team-hero.jpg";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";

export const Route = createFileRoute("/studio/about")({
  head: () => ({ meta: [
    { title: "About — Studio · IDL" },
    { name: "description", content: "35+ years of craft, clarity and care. A contemporary legacy in architecture and interiors." },
    { property: "og:title", content: "About — Studio · IDL" },
    { property: "og:description", content: "The union of Interarch and Kala Design." },
    { property: "og:image", content: studioHero },
  ] }),
  component: AboutPage,
});

const EASE = [0.22, 1, 0.36, 1] as const;

const philosophy: Array<{ kicker: string; title: string; body: string; img: string; reverse?: boolean }> = [
  { kicker: "— 01 Clarity", title: "Clarity, before form.", body: "Removing what doesn't matter so the essential can define the space. Every project begins with intent.", img: work1 },
  { kicker: "— 02 Intent", title: "Design must answer how life is lived.", body: "Buildings and interiors are purposeful, considered and quietly luxurious — designed around the people who use them.", img: work2, reverse: true },
  { kicker: "— 03 People & Place", title: "Context is the first material.", body: "Climate, culture and craft inform every move. We listen before we draw.", img: studioCulture },
  { kicker: "— 04 Sustainability", title: "Long-life, low-care.", body: "Passive design, natural light and ventilation, conscious materials and energy-efficient systems — an IGBC Gold project among our certifications.", img: work3, reverse: true },
  { kicker: "— 05 Craft & Collaboration", title: "Not a hierarchy. A dialogue.", body: "Architects, designers, engineers and craftspeople — one studio, many voices, one register.", img: teamHero },
];

const recognition = [
  { award: "A+D Spectrum Architecture Award", inst: "A+D Magazine", year: "2001" },
  { award: "AREA Acknowledgement", inst: "Association of Real Estate Agents", year: "2008" },
  { award: "DRDO Silver Jubilee Honour", inst: "Defence Research & Development Organisation", year: "2009" },
  { award: "AICA Asia Fest Commendation", inst: "AICA Asia", year: "2014" },
  { award: "Rachana Sansad Diamond Jubilee Honour", inst: "Academy of Architecture, Mumbai", year: "2015" },
  { award: "IGBC Gold Certification", inst: "Indian Green Building Council", year: "—" },
];

function AboutPage() {
  return (
    <>
      <section className="idl-sec--sm" style={{ textAlign: "center", paddingTop: 80 }}>
        <span className="idl-eyebrow">— Studio · About</span>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE }}
          style={{ margin: "20px auto 0", maxWidth: 1000, fontFamily: "var(--serif)", fontWeight: 300, fontSize: "clamp(40px, 5.4vw, 80px)", lineHeight: 1.05, letterSpacing: "-0.01em" }}
        >
          A contemporary legacy in architecture and interiors.
        </motion.h1>
      </section>
      <section className="idl-split">
        <div className="idl-split-img"><img src={studioHero} alt="Studio" /></div>
        <div className="idl-split-body">
          <span className="idl-eyebrow">— The studio</span>
          <h2>Where rigorous intent meets modern refinement.</h2>
          <p>Interarch Design Labs is the union of two legacy firms — Interarch, founded in 1989 by Ar. Dipak Thaker, and Kala Design, led by Ar. Hussain Rangwala and Ar. Rohit Gojia. Together we bring forward a shared philosophy: design should not chase trends, it should serve intent.</p>
          <p>The practice spans architecture, interiors, planning and engineering. From a private residence to a civic campus, the foundation is singular — a deep respect for context, craft and collaboration.</p>
        </div>
      </section>
      {philosophy.map((b) => (
        <motion.section
          key={b.title}
          className={`idl-split ${b.reverse ? "idl-split--reverse" : ""}`}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.9, ease: EASE }}
        >
          <div className="idl-split-img"><img src={b.img} alt={b.title} loading="lazy" /></div>
          <div className="idl-split-body">
            <span className="idl-eyebrow">{b.kicker}</span>
            <h2>{b.title}</h2>
            <p>{b.body}</p>
          </div>
        </motion.section>
      ))}
      <section className="idl-recog idl-sec--bordered">
        <header className="idl-recog-head">
          <span className="idl-eyebrow">— Recognition</span>
          <h2>Quiet acknowledgement, over three decades.</h2>
        </header>
        <div className="idl-recog-list">
          {recognition.map((r) => (
            <div className="idl-recog-item" key={r.award}>
              <strong>{r.award}</strong>
              <em>{r.inst}</em>
              <time>{r.year}</time>
            </div>
          ))}
        </div>
      </section>
      <section className="idl-strip idl-sec--bordered">
        <div className="idl-strip-cell"><img src={studioCulture} alt="Studio material table" loading="lazy" /></div>
        <div className="idl-strip-cell"><img src={teamHero} alt="Studio team" loading="lazy" /></div>
        <div className="idl-strip-cell"><img src={studioHero} alt="Studio space" loading="lazy" /></div>
      </section>
    </>
  );
}
