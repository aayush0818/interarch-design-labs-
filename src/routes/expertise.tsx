import { useState } from "react";
import { Outlet, Link, createFileRoute, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import { CustomCursor } from "@/components/home/CustomCursor";
import { sectors } from "@/data/siteContent";

export const Route = createFileRoute("/expertise")({
  head: () => ({ meta: [
    { title: "Expertise — Interarch Design Labs" },
    { name: "description", content: "Six sectors, one architectural language — residential, commercial, institutional, hospitality, industrial and workplace." },
    { property: "og:title", content: "Expertise — Interarch Design Labs" },
    { property: "og:description", content: "An index of six sectors served by Interarch Design Labs." },
  ] }),
  component: ExpertisePage,
});

const EASE = [0.22, 1, 0.36, 1] as const;

function ExpertisePage() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  if (pathname !== "/expertise") return <Outlet />;

  const [hover, setHover] = useState<number | null>(null);

  return (
    <>
      <CustomCursor />
      <Header />
      <main className={`idl-index-page ${hover !== null ? "is-cinema" : ""}`}>
        <header className="idl-index-head">
          <span className="idl-index-eyebrow">— Index</span>
          <h1>Six sectors.<br />One language.</h1>
          <p>Measured, material, daylit. The studio works across scales without changing its register.</p>
        </header>
        <ol className="idl-index-list" onMouseLeave={() => setHover(null)}>
          {sectors.map((s, i) => (
            <li key={s.slug} onMouseEnter={() => setHover(i)} className={hover === i ? "is-on" : ""}>
              <Link to="/expertise/$sector" params={{ sector: s.slug }} data-hover>
                <span className="idl-index-num">{String(i + 1).padStart(2, "0")}</span>
                <span className="idl-index-name">{s.name}</span>
                <span className="idl-index-state">{s.statement}</span>
                <span className="idl-index-arrow">→</span>
              </Link>
            </li>
          ))}
        </ol>
        <AnimatePresence>
          {hover !== null ? (
            <motion.div
              key={sectors[hover].slug}
              className="idl-index-peek"
              initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
              animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
              exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
              transition={{ duration: 0.6, ease: EASE }}
            >
              <img src={sectors[hover].image} alt={sectors[hover].name} />
              <div className="idl-index-peek-cap">{sectors[hover].name}</div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
}
