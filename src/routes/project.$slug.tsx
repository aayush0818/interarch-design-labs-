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
  const next = projects[(index + 1) % projects.length];

  return (
    <>
      <CustomCursor />
      <Header />
      <article className="idl-mono">
        <header className="idl-mono-plate">
          <motion.div
            className="idl-mono-cover"
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: EASE }}
          >
            <img src={project.cover} alt={project.name} />
            <div className="idl-mono-shade" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
          >
            {project.name}
          </motion.h1>
        </header>
        <section className="idl-mono-ledger">
          <div><span>Sector</span><strong>{project.sector}</strong></div>
          <div><span>Location</span><strong>{project.location}</strong></div>
          <div><span>Year</span><strong>{project.year}</strong></div>
          <div><span>Area</span><strong>{project.area}</strong></div>
          <div><span>Type</span><strong>{project.category}</strong></div>
        </section>
        <section className="idl-mono-body">
          <p className="dropcap">{project.description}</p>
          <p>The project is read through thresholds, quiet rooms, calibrated daylight and a material palette that allows the architecture to age with dignity.</p>
        </section>
        <section className="idl-mono-essay">
          <motion.div
            className="idl-mono-img idl-mono-img--bleed"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: EASE }}
          >
            <img src={pageImages.works[(index + 1) % pageImages.works.length]} alt="Project view" />
          </motion.div>
          <motion.div
            className="idl-mono-img idl-mono-img--indent"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: EASE }}
          >
            <img src={pageImages.works[(index + 2) % pageImages.works.length]} alt="Project detail" />
          </motion.div>
          <motion.div
            className="idl-mono-img idl-mono-img--bleed"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: EASE }}
          >
            <img src={pageImages.works[(index + 3) % pageImages.works.length]} alt="Project wide view" />
          </motion.div>
        </section>
        <Link to="/project/$slug" params={{ slug: next.slug }} className="idl-mono-next" data-hover>
          <div>
            <span>Next project</span>
            <strong>{next.name} →</strong>
          </div>
          <img src={next.cover} alt={next.name} />
        </Link>
      </article>
      <Footer />
    </>
  );
}
