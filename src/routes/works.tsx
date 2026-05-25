import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/home/PageShell";
import { projects } from "@/data/projects";
import { pageImages } from "@/data/siteContent";

export const Route = createFileRoute("/works")({
  head: () => ({ meta: [
    { title: "Works — Interarch Design Labs" },
    { name: "description", content: "Selected architecture and interiors by Interarch Design Labs." },
    { property: "og:title", content: "Works — Interarch Design Labs" },
    { property: "og:description", content: "A filtered archive of IDL's residential, hospitality, workplace and institutional projects." },
  ] }),
  component: WorksPage,
});

const filters = ["All", "Architecture", "Interiors"] as const;

function WorksPage() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const visible = useMemo(() => projects.filter((p) => filter === "All" || p.category === filter), [filter]);

  return (
    <PageShell>
      <section className="listing-page works-page-section">
        <h1 data-reveal>Works</h1>
        <div className="filter-tabs" role="tablist" aria-label="Project category">
          {filters.map((f) => <button key={f} className={filter === f ? 'active' : ''} onClick={() => setFilter(f)} type="button" data-hover>{f}</button>)}
        </div>
        <div className="works-grid works-grid-page">
          {visible.map((p, i) => <a className={`works-card ${i % 5 === 0 ? 'works-card--wide' : 'works-card--tall'}`} href={`/project/${p.slug}`} key={p.slug} data-hover>
            <div className="img-reveal-wrap works-drop-wrap" data-reveal-direction="down"><div className="img-parallax"><img src={pageImages.works[i % pageImages.works.length]} alt={`${p.name} project`} width={i % 5 === 0 ? 1920 : 900} height={i % 5 === 0 ? 1080 : 1280} loading="lazy" /></div></div>
            <span className="works-card-label">{p.name} · {p.sector}</span>
          </a>)}
        </div>
      </section>
    </PageShell>
  );
}
