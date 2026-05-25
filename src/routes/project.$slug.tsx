import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PageShell } from "@/components/home/PageShell";
import { projects } from "@/data/projects";
import { pageImages } from "@/data/siteContent";

export const Route = createFileRoute("/project/$slug")({
  head: () => ({ meta: [
    { title: "Project — Interarch Design Labs" },
    { name: "description", content: "Project case study by Interarch Design Labs." },
    { property: "og:title", content: "Project — Interarch Design Labs" },
    { property: "og:description", content: "Architecture and interiors case study with context, process and imagery." },
  ] }),
  component: ProjectPage,
});

function ProjectPage() {
  const { slug } = Route.useParams();
  const index = Math.max(0, projects.findIndex((p) => p.slug === slug));
  const project = projects[index] ?? projects[0];
  const next = projects[(index + 1) % projects.length];

  return (
    <PageShell>
      <PageHero image={pageImages.works[index % pageImages.works.length]} alt={`${project.name} project`} title={project.name} />
      <section className="project-meta"><div><span>Sector</span><strong>{project.sector}</strong></div><div><span>Location</span><strong>{project.location}</strong></div><div><span>Year</span><strong>{project.year}</strong></div><div><span>Area</span><strong>{project.area}</strong></div></section>
      <section className="project-body">
        <div data-reveal><p className="dropcap">{project.description}</p><p>The project is read through thresholds, quiet rooms, calibrated daylight and a material palette that allows the architecture to age with dignity.</p></div>
        <div className="project-side-images"><div className="img-reveal-wrap"><div className="img-parallax"><img src={pageImages.works[(index + 1) % pageImages.works.length]} alt="Project detail" width={900} height={1200} loading="lazy" /></div></div><div className="img-reveal-wrap"><div className="img-parallax"><img src={pageImages.works[(index + 2) % pageImages.works.length]} alt="Project interior" width={900} height={1200} loading="lazy" /></div></div></div>
      </section>
      <section className="project-wide"><div className="img-reveal-wrap"><div className="img-parallax"><img src={pageImages.works[(index + 3) % pageImages.works.length]} alt="Project wide view" width={1920} height={1080} loading="lazy" /></div></div></section>
      <a className="next-project" href={`/project/${next.slug}`} data-hover><div><span>Next project</span><strong>{next.name} →</strong></div><img src={pageImages.works[(index + 1) % pageImages.works.length]} alt={next.name} width={1200} height={900} loading="lazy" /></a>
    </PageShell>
  );
}
