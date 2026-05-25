import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { partners } from "@/data/siteContent";

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
const tilts = [-0.8, 0.9, -1.1, 0.6];

function TeamPage() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="idl-portraits">
      <header className="idl-portraits-head">
        <span className="idl-portraits-eyebrow">— Studio · Team</span>
        <h1>Four partners.<br /><em>One conviction.</em></h1>
        <p>Hover a portrait to hear them. Click to read the full bio.</p>
      </header>
      <div className="idl-portraits-grid">
        {partners.map((p, i) => {
          const isOpen = open === i;
          return (
            <motion.article
              key={p.name}
              className={`idl-portrait ${isOpen ? "is-open" : ""}`}
              initial={{ opacity: 0, y: 40, rotate: tilts[i] }}
              whileInView={{ opacity: 1, y: 0, rotate: tilts[i] }}
              whileHover={{ rotate: 0, y: -8 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: EASE, delay: i * 0.1 }}
              onClick={() => setOpen(isOpen ? null : i)}
              data-hover
            >
              <div className="idl-portrait-img">
                <img src={p.image} alt={p.name} loading="lazy" />
              </div>
              <div className="idl-portrait-cap">
                <span>{String(i + 1).padStart(2, "0")} — {p.role}</span>
                <h2>{p.name}</h2>
                <em className="idl-portrait-quote">"{p.line}"</em>
              </div>
              <AnimatePresence>
                {isOpen ? (
                  <motion.ul
                    className="idl-portrait-bio"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.45, ease: EASE }}
                  >
                    {p.details.map((d) => <li key={d}>— {d}</li>)}
                  </motion.ul>
                ) : null}
              </AnimatePresence>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
