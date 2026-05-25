import { Outlet, Link, createFileRoute, useRouterState } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import { CustomCursor } from "@/components/home/CustomCursor";
import { journalPosts, pageImages } from "@/data/siteContent";

export const Route = createFileRoute("/practice/journal")({
  head: () => ({ meta: [
    { title: "Journal — Practice · IDL" },
    { name: "description", content: "Essays, notes and studio observations from Interarch Design Labs." },
    { property: "og:title", content: "Journal — Practice · IDL" },
    { property: "og:description", content: "A journal on architecture, interiors, light and material." },
  ] }),
  component: JournalPage,
});

const EASE = [0.22, 1, 0.36, 1] as const;

function JournalPage() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  if (pathname !== "/practice/journal") return <Outlet />;

  const [feature, ...rest] = journalPosts;

  return (
    <>
      <CustomCursor />
      <Header />
      <main className="idl-jrn">
        <header className="idl-jrn-head">
          <span className="idl-eyebrow">— Practice · Journal</span>
          <h1>Notes from the studio.</h1>
        </header>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: EASE }}
        >
          <Link to="/practice/journal/$slug" params={{ slug: feature.slug }} className="idl-jrn-feat" data-hover>
            <div className="idl-jrn-feat-img"><img src={pageImages.works[0]} alt={feature.title} /></div>
            <div className="idl-jrn-feat-cap">
              <span>{feature.category} · {feature.date}</span>
              <h2>{feature.title}</h2>
            </div>
          </Link>
        </motion.div>
        <div className="idl-jrn-grid">
          {rest.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.08, ease: EASE }}
            >
              <Link to="/practice/journal/$slug" params={{ slug: p.slug }} className="idl-jrn-card" data-hover>
                <div className="idl-jrn-card-img"><img src={pageImages.works[(i + 2) % pageImages.works.length]} alt={p.title} loading="lazy" /></div>
                <div className="idl-jrn-card-cap">
                  <span>{p.category} · {p.date}</span>
                  <h3>{p.title}</h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
