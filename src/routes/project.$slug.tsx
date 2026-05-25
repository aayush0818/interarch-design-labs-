import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import { CustomCursor } from "@/components/home/CustomCursor";
import { projects } from "@/data/projects";
import { pageImages } from "@/data/siteContent";

export const Route = createFileRoute("/project/$slug")({
  head: ({ params }) => {
    const p = projects.find((x) => x.slug === params.slug);
    return { meta: [
      { title: `${p?.name ?? "Project"} — IDL` },
      { name: "description", content: p?.description ?? "Project case study by Interarch Design Labs." },
      { property: "og:title", content: `${p?.name ?? "Project"} — IDL` },
      { property: "og:description", content: p?.description ?? "" },
      ...(p?.cover ? [{ property: "og:image", content: p.cover }] : []),
    ] };
  },
  component: ProjectPage,
});

const EASE = [0.22, 1, 0.36, 1] as const;

function ProjectPage() {
  const { slug } = Route.useParams();
  const index = Math.max(0, projects.findIndex((p) => p.slug === slug));
  const project = projects[index] ?? projects[0];
  const related = projects.filter((p) => p.slug !== project.slug && p.category === project.category).slice(0, 2);
  const w = pageImages.works;

  return (
    <>
      <CustomCursor />
      <Header />
      <article className="idl-mono">
        <section className="idl-phero idl-phero--full">
          <div className="idl-phero-img"><img src={project.cover} alt={project.name} /></div>
          <div className="idl-phero-shade" />
          <div className="idl-phero-cap">
            <span className="idl-eyebrow"><span className="dot" />{project.location} · {project.sector}</span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
            >
              {project.name}
            </motion.h1>
          </div>
        </section>
        <section className="idl-metarow">
          <div><span>Location</span><strong>{project.location}</strong></div>
          <div><span>Sector</span><strong>{project.sector}</strong></div>
          <div><span>Scope</span><strong>{project.scope}</strong></div>
          <div><span>Area</span><strong>{project.area}</strong></div>
          <div><span>Year</span><strong>{project.year}</strong></div>
        </section>
        <section className="idl-mono-intro">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: EASE }}
          >
            {project.description}
          </motion.p>
        </section>
        <section className="idl-mono-gallery">
          <motion.div className="idl-mono-fig idl-mono-fig--full" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, ease: EASE }}>
            <img src={w[(index + 1) % w.length]} alt="" loading="lazy" />
          </motion.div>
          <div className="idl-mono-pair">
            <motion.div className="idl-mono-fig" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, ease: EASE }}>
              <img src={w[(index + 2) % w.length]} alt="" loading="lazy" />
            </motion.div>
            <motion.div className="idl-mono-fig" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.08, ease: EASE }}>
              <img src={w[(index + 3) % w.length]} alt="" loading="lazy" />
            </motion.div>
          </div>
          <motion.div className="idl-mono-fig idl-mono-portrait" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, ease: EASE }}>
            <img src={w[(index + 4) % w.length]} alt="" loading="lazy" />
          </motion.div>
          <motion.div className="idl-mono-fig idl-mono-fig--full" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, ease: EASE }}>
            <img src={w[(index + 5) % w.length]} alt="" loading="lazy" />
          </motion.div>
        </section>
        <section className="idl-mono-material">
          <div className="idl-mono-material-head">
            <span className="idl-eyebrow">— Material</span>
            <h2>The studio in detail.</h2>
          </div>
          <motion.div className="idl-mono-fig" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, ease: EASE }}>
            <img src={w[(index + 1) % w.length]} alt="" loading="lazy" />
          </motion.div>
          <motion.div className="idl-mono-fig" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, delay: 0.08, ease: EASE }}>
            <img src={w[(index + 3) % w.length]} alt="" loading="lazy" />
          </motion.div>
          <motion.div className="idl-mono-fig" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, delay: 0.16, ease: EASE }}>
            <img src={w[(index + 5) % w.length]} alt="" loading="lazy" />
          </motion.div>
        </section>
        {related.length > 0 && (
          <section className="idl-related">
            <header className="idl-related-head">
              <span className="idl-eyebrow">— Related</span>
              <h2>More from the {project.category.toLowerCase()} archive.</h2>
            </header>
            <div className="idl-related-grid">
              {related.map((r) => (
                <Link key={r.slug} to="/project/$slug" params={{ slug: r.slug }} className="idl-pcard" data-hover>
                  <div className="idl-pcard-img"><img src={r.cover} alt={r.name} loading="lazy" /></div>
                  <div className="idl-pcard-cap">
                    <span>{r.location}</span>
                    <strong>{r.name}</strong>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>
      <Footer />
    </>
  );
}
