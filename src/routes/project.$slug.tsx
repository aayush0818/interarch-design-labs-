import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import { CustomCursor } from "@/components/home/CustomCursor";
import { CinematicHero } from "@/components/motion/CinematicHero";
import { Reveal, ClipReveal } from "@/components/motion/Reveal";
import { projects } from "@/data/projects";
import { pageImages } from "@/data/siteContent";

export const Route = createFileRoute("/project/$slug")({
  head: ({ params }) => {
    const p = projects.find((x) => x.slug === params.slug);
    return {
      meta: [
        { title: `${p?.name ?? "Project"} — Interarch Design Labs` },
        { name: "description", content: p?.description ?? "Project case study by IDL." },
        { property: "og:title", content: `${p?.name ?? "Project"} — IDL` },
        { property: "og:description", content: p?.description ?? "" },
        ...(p?.cover ? [{ property: "og:image", content: p.cover }] : []),
      ],
    };
  },
  component: ProjectPage,
});

function ProjectPage() {
  const { slug } = Route.useParams();
  const index = Math.max(0, projects.findIndex((p) => p.slug === slug));
  const project = projects[index] ?? projects[0];
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];
  const w = pageImages.works;

  return (
    <>
      <CustomCursor />
      <Header />
      <article className="idlx-page">
        <CinematicHero
          image={project.cover}
          alt={project.name}
          eyebrow={`— ${project.sector} · ${project.location}`}
          title={project.name}
          meta={`${project.year} · ${project.area}`}
        />

        {/* Meta row */}
        <section className="idlx-mono-meta">
          <Reveal><div><span>Location</span><strong>{project.location}</strong></div></Reveal>
          <Reveal delay={0.05}><div><span>Sector</span><strong>{project.sector}</strong></div></Reveal>
          <Reveal delay={0.1}><div><span>Scope</span><strong>{project.scope}</strong></div></Reveal>
          <Reveal delay={0.15}><div><span>Area</span><strong>{project.area}</strong></div></Reveal>
          <Reveal delay={0.2}><div><span>Year</span><strong>{project.year}</strong></div></Reveal>
        </section>

        {/* Essay */}
        <section className="idlx-mono-essay">
          <Reveal>
            <p>{project.description}</p>
          </Reveal>
        </section>

        {/* Photo essay */}
        <section className="idlx-mono-photo">
          <ClipReveal>
            <div className="idlx-mono-fig idlx-mono-fig--full">
              <img src={w[(index + 1) % w.length]} alt="" loading="lazy" />
            </div>
          </ClipReveal>
          <div className="idlx-mono-pair">
            <ClipReveal>
              <div className="idlx-mono-fig"><img src={w[(index + 2) % w.length]} alt="" loading="lazy" /></div>
            </ClipReveal>
            <ClipReveal delay={0.1}>
              <div className="idlx-mono-fig"><img src={w[(index + 3) % w.length]} alt="" loading="lazy" /></div>
            </ClipReveal>
          </div>
          <ClipReveal>
            <div className="idlx-mono-fig idlx-mono-fig--inset">
              <img src={w[(index + 4) % w.length]} alt="" loading="lazy" style={{ aspectRatio: "16/10", objectFit: "cover" }} />
              <p className="idlx-mono-cap" style={{ padding: 0 }}>— A long verandah that becomes the most-used room of the house.</p>
            </div>
          </ClipReveal>
          <ClipReveal>
            <div className="idlx-mono-fig idlx-mono-fig--full">
              <img src={w[(index + 5) % w.length]} alt="" loading="lazy" />
            </div>
          </ClipReveal>
        </section>

        {/* Pager */}
        <nav className="idlx-pager">
          <Link to="/project/$slug" params={{ slug: prev.slug }} data-hover>
            <span>← Previous</span>
            <strong>{prev.name}</strong>
          </Link>
          <Link to="/project/$slug" params={{ slug: next.slug }} data-hover>
            <span>Next →</span>
            <strong>{next.name}</strong>
          </Link>
        </nav>
      </article>
      <Footer />
    </>
  );
}
