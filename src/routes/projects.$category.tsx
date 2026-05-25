import { createFileRoute, Link, redirect } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import { CustomCursor } from "@/components/home/CustomCursor";
import { projectsByCategory } from "@/data/projects";

export const Route = createFileRoute("/projects/$category")({
  beforeLoad: ({ params }) => {
    const c = params.category.toLowerCase();
    if (c !== "architecture" && c !== "interiors") {
      throw redirect({ to: "/projects" });
    }
  },
  head: ({ params }) => ({ meta: [
    { title: `${cap(params.category)} — Projects · IDL` },
    { name: "description", content: `${cap(params.category)} projects by Interarch Design Labs.` },
    { property: "og:title", content: `${cap(params.category)} — Projects · IDL` },
    { property: "og:description", content: `Archive of ${params.category.toLowerCase()} work.` },
  ] }),
  component: CategoryPage,
});

const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
const EASE = [0.22, 1, 0.36, 1] as const;

function CategoryPage() {
  const { category } = Route.useParams();
  const cat = category.toLowerCase() as "architecture" | "interiors";
  const list = projectsByCategory(cat);

  return (
    <>
      <CustomCursor />
      <Header />
      <main className="idl-archive">
        <aside className="idl-archive-rail">
          <span className="idl-archive-eyebrow">— Archive</span>
          <h1 className="idl-archive-title">{cap(cat)}</h1>
          <p className="idl-archive-count">
            <span>{String(list.length).padStart(2, "0")}</span> projects
          </p>
          <div className="idl-archive-switch">
            <Link to="/projects/$category" params={{ category: "architecture" }} data-hover className={cat === "architecture" ? "is-on" : ""}>Architecture</Link>
            <Link to="/projects/$category" params={{ category: "interiors" }} data-hover className={cat === "interiors" ? "is-on" : ""}>Interiors</Link>
          </div>
          <Link to="/projects" className="idl-archive-back" data-hover>← Back</Link>
        </aside>
        <div className="idl-archive-grid">
          {list.map((p, i) => (
            <motion.div
              key={p.slug}
              className={`idl-archive-cell ${["a", "b", "c", "d"][i % 4]}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: (i % 6) * 0.06, ease: EASE }}
            >
              <Link to="/project/$slug" params={{ slug: p.slug }} className="idl-archive-link" data-hover>
                <div className="idl-archive-img">
                  <img src={p.cover} alt={p.name} loading="lazy" />
                </div>
                <div className="idl-archive-cap">
                  <span>{p.sector} · {p.year}</span>
                  <strong>{p.name}</strong>
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
