import { Outlet, Link, createFileRoute, useRouterState } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import { CustomCursor } from "@/components/home/CustomCursor";
import { journalPosts, milestones } from "@/data/siteContent";

export const Route = createFileRoute("/practice")({
  head: () => ({ meta: [
    { title: "Practice — Interarch Design Labs" },
    { name: "description", content: "History, process and journal — how the IDL studio thinks, draws and builds." },
    { property: "og:title", content: "Practice — Interarch Design Labs" },
    { property: "og:description", content: "Three doors into the practice: history, process and the journal." },
  ] }),
  component: PracticePage,
});

const EASE = [0.22, 1, 0.36, 1] as const;

function PracticePage() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  if (pathname !== "/practice") return <Outlet />;

  const latestYear = milestones[milestones.length - 1]?.year;
  const latestPost = journalPosts[0];

  const bands: Array<{ to: any; label: string; eyebrow: string; meta: string; tone: string }> = [
    { to: "/practice/history", label: "History", eyebrow: "01", meta: `1989 — ${latestYear}`, tone: "ochre" },
    { to: "/practice/process", label: "Process", eyebrow: "02", meta: "05 phases", tone: "ink" },
    { to: "/practice/journal", label: "Journal", eyebrow: "03", meta: latestPost ? `Latest · ${latestPost.date}` : "Notes", tone: "stone" },
  ];

  return (
    <>
      <CustomCursor />
      <Header />
      <main className="idl-doors">
        {bands.map((b, i) => (
          <motion.div
            key={b.label}
            className={`idl-door idl-door--${b.tone}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: i * 0.12, ease: EASE }}
            whileHover={{ flex: 1.6 }}
          >
            <Link to={b.to} className="idl-door-link" data-hover>
              <span className="idl-door-eyebrow">— {b.eyebrow}</span>
              <h2>{b.label}</h2>
              <span className="idl-door-meta">{b.meta}</span>
              <span className="idl-door-arrow">→</span>
            </Link>
          </motion.div>
        ))}
      </main>
      <Footer />
    </>
  );
}
