import { createFileRoute, Link, redirect } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import { CustomCursor } from "@/components/home/CustomCursor";
import { projectsByCategory } from "@/data/projects";
import work1 from "@/assets/work-1.jpg";
import work3 from "@/assets/work-3.jpg";

const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
const EASE = [0.22, 1, 0.36, 1] as const;

export const Route = createFileRoute("/projects/$category")({
  beforeLoad: ({ params }) => {
    const c = params.category.toLowerCase();
    if (c !== "architecture" && c !== "interiors") throw redirect({ to: "/projects" });
  },
  head: ({ params }) => ({ meta: [
    { title: `${cap(params.category)} — Projects · IDL` },
    { name: "description", content: `${cap(params.category)} projects by Interarch Design Labs.` },
    { property: "og:title", content: `${cap(params.category)} — Projects · IDL` },
    { property: "og:description", content: `Selected ${params.category.toLowerCase()} work.` },
  ] }),
  component: CategoryPage,
});

function CategoryPage() {
  const { category } = Route.useParams();
  const cat = category.toLowerCase() as "architecture" | "interiors";
  const list = projectsByCategory(cat);
  const hero = cat === "architecture" ? work1 : work3;

  return (
    <>
      <CustomCursor />
      <Header />
      <main>
        <section className="idl-phero">
          <div className="idl-phero-img"><img src={hero} alt={cap(cat)} /></div>
          <div className="idl-phero-shade" />
          <div className="idl-phero-cap">
            <span className="idl-eyebrow"><span className="dot" />Projects · {cap(cat)}</span>
            <h1>{cap(cat)}.</h1>
          </div>
        </section>
        <nav className="idl-catnav" aria-label="Project categories">
          <Link to="/projects">All</Link>
          <Link to="/projects/$category" params={{ category: "architecture" }} className={cat === "architecture" ? "is-on" : ""}>Architecture</Link>
          <Link to="/projects/$category" params={{ category: "interiors" }} className={cat === "interiors" ? "is-on" : ""}>Interiors</Link>
        </nav>
        <div className="idl-pgrid">
          {list.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.9, delay: (i % 4) * 0.08, ease: EASE }}
            >
              <Link to="/project/$slug" params={{ slug: p.slug }} className="idl-pcard" data-hover>
                <div className="idl-pcard-img"><img src={p.cover} alt={p.name} loading="lazy" /></div>
                <div className="idl-pcard-cap">
                  <span>{p.location}</span>
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
