import { Outlet, Link, createFileRoute, useRouterState } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import { CustomCursor } from "@/components/home/CustomCursor";
import { projects } from "@/data/projects";
import work1 from "@/assets/work-1.jpg";

export const Route = createFileRoute("/projects")({
  head: () => ({ meta: [
    { title: "Projects — Interarch Design Labs" },
    { name: "description", content: "Architecture and interiors shaped through clarity, context and enduring intent." },
    { property: "og:title", content: "Projects — Interarch Design Labs" },
    { property: "og:description", content: "An archive of architecture and interiors by Interarch Design Labs." },
    { property: "og:image", content: work1 },
  ] }),
  component: ProjectsPage,
});

const EASE = [0.22, 1, 0.36, 1] as const;

function ProjectsPage() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  if (pathname !== "/projects") return <Outlet />;

  return (
    <>
      <CustomCursor />
      <Header />
      <main>
        <section className="idl-phero">
          <div className="idl-phero-img"><img src={work1} alt="Selected projects" /></div>
          <div className="idl-phero-shade" />
          <div className="idl-phero-cap">
            <span className="idl-eyebrow"><span className="dot" />Projects</span>
            <h1>Architecture and interiors, shaped through clarity, context and enduring intent.</h1>
          </div>
        </section>
        <nav className="idl-catnav" aria-label="Project categories">
          <Link to="/projects" className="is-on">All</Link>
          <Link to="/projects/$category" params={{ category: "architecture" }}>Architecture</Link>
          <Link to="/projects/$category" params={{ category: "interiors" }}>Interiors</Link>
        </nav>
        <div className="idl-pgrid">
          {projects.map((p, i) => (
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
