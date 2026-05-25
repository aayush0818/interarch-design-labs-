import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/home/PageShell";
import { sectors } from "@/data/siteContent";

export const Route = createFileRoute("/sectors")({
  head: () => ({ meta: [
    { title: "Sectors — Interarch Design Labs" },
    { name: "description", content: "Residential, commercial, institutional, hospitality, industrial and workplace design sectors." },
    { property: "og:title", content: "Sectors — Interarch Design Labs" },
    { property: "og:description", content: "Explore the sectors served by Interarch Design Labs." },
  ] }),
  component: SectorsPage,
});

function SectorsPage() {
  return (
    <PageShell>
      <section className="listing-page">
        <h1 data-reveal>Sectors</h1>
        <div className="sector-card-grid">
          {sectors.map((s) => <a href={`/sectors/${s.slug}`} className="sector-card" data-hover key={s.slug}><div className="img-reveal-wrap"><div className="img-parallax"><img src={s.image} alt={`${s.name} architecture`} width={1000} height={1200} loading="lazy" /></div></div><span>{s.name}</span><p>{s.statement}</p></a>)}
        </div>
      </section>
    </PageShell>
  );
}
