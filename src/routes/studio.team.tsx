import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { partners, pageImages } from "@/data/siteContent";

export const Route = createFileRoute("/studio/team")({
  head: () => ({ meta: [
    { title: "Team — Studio · IDL" },
    { name: "description", content: "The four partners and the studio team behind Interarch Design Labs." },
    { property: "og:title", content: "Team — Studio · IDL" },
    { property: "og:description", content: "Architects and designers shaping every project." },
  ] }),
  component: TeamPage,
});

const EASE = [0.22, 1, 0.36, 1] as const;

function TeamPage() {
  return (
    <>
      <section className="idl-sec--sm" style={{ textAlign: "center", paddingTop: 80 }}>
        <span className="idl-eyebrow">— Studio · Team</span>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE }}
          style={{ margin: "20px auto 24px", maxWidth: 900, fontFamily: "var(--serif)", fontWeight: 300, fontSize: "clamp(40px, 5vw, 72px)", lineHeight: 1.05 }}
        >
          Four partners. One conviction.
        </motion.h1>
        <p className="idl-prose-lead" style={{ fontSize: "clamp(18px, 1.6vw, 22px)" }}>A studio formed by the union of Interarch and Kala Design — architects who design around how life is lived.</p>
      </section>
      <div className="idl-team-grid">
        {partners.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.9, delay: (i % 2) * 0.1, ease: EASE }}
            className="idl-tcard"
          >
            <div className="idl-tcard-img"><img src={p.image} alt={p.name} loading="lazy" /></div>
            <div className="idl-tcard-cap">
              <strong>{p.name}</strong>
              <span>{p.role}</span>
            </div>
          </motion.div>
        ))}
      </div>
      <section className="idl-sec--sm idl-sec--bordered" style={{ textAlign: "center" }}>
        <span className="idl-eyebrow">— Studio culture</span>
        <p className="idl-prose-lead" style={{ marginTop: 20, fontSize: "clamp(20px, 2vw, 28px)" }}>The work shows in the rooms — drawings, models, samples and the long table where everything is decided.</p>
      </section>
      <div className="idl-strip">
        <div className="idl-strip-cell"><img src={pageImages.studioCulture} alt="Drawings and models" loading="lazy" /></div>
        <div className="idl-strip-cell"><img src={pageImages.studioHero} alt="Studio interior" loading="lazy" /></div>
        <div className="idl-strip-cell"><img src={pageImages.teamHero} alt="Collaboration" loading="lazy" /></div>
      </div>
    </>
  );
}
