import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PageShell } from "@/components/home/PageShell";
import { sectors } from "@/data/siteContent";

export const Route = createFileRoute("/sectors/$sector")({
  head: () => ({ meta: [
    { title: "Sector — Interarch Design Labs" },
    { name: "description", content: "Sector expertise by Interarch Design Labs." },
    { property: "og:title", content: "Sector — Interarch Design Labs" },
    { property: "og:description", content: "Architecture and interiors shaped for specific ways of living and working." },
  ] }),
  component: SectorPage,
});

function SectorPage() {
  const { sector } = Route.useParams();
  const current = sectors.find((s) => s.slug === sector) ?? sectors[0];

  return (
    <PageShell>
      <PageHero image={current.image} alt={`${current.name} architecture`} title={current.name} />
      <section className="sector-intro">
        <div className="sector-statement" data-reveal><p>{current.statement}</p></div>
        <div className="fact-rule" />
        <div className="facts-grid"><div className="fact-item"><span>Service</span><strong>Architecture</strong></div><div className="fact-item"><span>Service</span><strong>Interiors</strong></div><div className="fact-item"><span>Method</span><strong>Research</strong></div><div className="fact-item"><span>Output</span><strong>Detail</strong></div></div>
      </section>
      <section className="sector-philosophy"><span className="section-kicker">Approach</span><h2>Each project is composed through proportion, light, movement and material restraint.</h2><div className="accent-draw" /></section>
      <section className="gallery-strip sector-gallery">{sectors.slice(0,4).map((s) => <div className="img-reveal-wrap" key={s.slug}><div className="img-parallax"><img src={s.image} alt="Sector reference" width={800} height={1100} loading="lazy" /></div></div>)}</section>
      <section className="sector-cta"><h2>Begin a {current.name.toLowerCase()} project with IDL.</h2><a className="text-arrow" href="/contact" data-hover>Contact the studio →</a></section>
    </PageShell>
  );
}
