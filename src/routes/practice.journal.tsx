import { Outlet, Link, createFileRoute, useRouterState } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import { CustomCursor } from "@/components/home/CustomCursor";
import { journalPosts } from "@/data/siteContent";

export const Route = createFileRoute("/practice/journal")({
  head: () => ({ meta: [
    { title: "Journal — Practice · IDL" },
    { name: "description", content: "Essays, notes and studio observations from Interarch Design Labs." },
    { property: "og:title", content: "Journal — Practice · IDL" },
    { property: "og:description", content: "A journal on architecture, interiors, light, materials and process." },
  ] }),
  component: JournalPage,
});

const EASE = [0.22, 1, 0.36, 1] as const;

function JournalPage() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  if (pathname !== "/practice/journal") return <Outlet />;

  const [feature, ...rest] = journalPosts;
  const today = new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "long", year: "numeric" });

  return (
    <>
      <CustomCursor />
      <Header />
      <main className="idl-paper">
        <div className="idl-paper-masthead">
          <span>Interarch Design Labs · Journal</span>
          <span>Vol. I</span>
          <span>{today}</span>
        </div>
        <div className="idl-paper-rule" />
        <section className="idl-paper-grid">
          <motion.article
            className="idl-paper-feature"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: EASE }}
          >
            <span className="kicker">{feature.category} · {feature.date}</span>
            <h1>
              <Link to="/practice/journal/$slug" params={{ slug: feature.slug }} data-hover>
                {feature.title}
              </Link>
            </h1>
            <p>{feature.dek}</p>
            <Link to="/practice/journal/$slug" params={{ slug: feature.slug }} className="text-arrow" data-hover>
              Read the essay →
            </Link>
          </motion.article>
          <aside className="idl-paper-side">
            {rest.map((p, i) => (
              <motion.article
                key={p.slug}
                className="idl-paper-side-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 + i * 0.1, ease: EASE }}
              >
                <span className="kicker">{p.category} · {p.date}</span>
                <h2>
                  <Link to="/practice/journal/$slug" params={{ slug: p.slug }} data-hover>
                    {p.title}
                  </Link>
                </h2>
                <p>{p.dek}</p>
              </motion.article>
            ))}
          </aside>
        </section>
      </main>
      <Footer />
    </>
  );
}
