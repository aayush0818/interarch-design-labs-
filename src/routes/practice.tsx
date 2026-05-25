import { Outlet, Link, createFileRoute, useRouterState } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import { CustomCursor } from "@/components/home/CustomCursor";
import work1 from "@/assets/work-1.jpg";
import work4 from "@/assets/work-4.jpg";
import studioCulture from "@/assets/studio-culture.jpg";

export const Route = createFileRoute("/practice")({
  head: () => ({ meta: [
    { title: "Practice — Interarch Design Labs" },
    { name: "description", content: "History, process and journal — how the IDL studio thinks, draws and builds." },
    { property: "og:title", content: "Practice — Interarch Design Labs" },
    { property: "og:description", content: "Three readings of the practice." },
  ] }),
  component: PracticePage,
});

const EASE = [0.22, 1, 0.36, 1] as const;

const rows = [
  { to: "/practice/history" as const, eyebrow: "— 01 / History", title: "Three decades of work.", body: "From Interarch (1989) to Interarch Design Labs — a chronological reading of the practice.", img: work1 },
  { to: "/practice/process" as const, eyebrow: "— 02 / Process", title: "Five phases. One trajectory.", body: "From listening to evolution — the considered method that shapes every project.", img: work4 },
  { to: "/practice/journal" as const, eyebrow: "— 03 / Journal", title: "Notes from the studio.", body: "Essays and observations on architecture, interiors, light and material.", img: studioCulture },
];

function PracticePage() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  if (pathname !== "/practice") return <Outlet />;

  return (
    <>
      <CustomCursor />
      <Header />
      <main>
        <section className="idl-phero">
          <div className="idl-phero-img"><img src={studioCulture} alt="Practice" /></div>
          <div className="idl-phero-shade" />
          <div className="idl-phero-cap">
            <span className="idl-eyebrow"><span className="dot" />Practice</span>
            <h1>How the studio thinks, draws, and brings buildings into the world.</h1>
          </div>
        </section>
        {rows.map((r) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.9, ease: EASE }}
          >
            <Link to={r.to} className="idl-pract-row" data-hover>
              <div className="idl-pract-img"><img src={r.img} alt={r.title} loading="lazy" /></div>
              <div className="idl-pract-body">
                <span className="idl-eyebrow">{r.eyebrow}</span>
                <h2>{r.title}</h2>
                <p>{r.body}</p>
                <span className="idl-erow-link">Continue →</span>
              </div>
            </Link>
          </motion.div>
        ))}
      </main>
      <Footer />
    </>
  );
}
