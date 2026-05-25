import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PageShell } from "@/components/home/PageShell";
import { pageImages, partners } from "@/data/siteContent";

export const Route = createFileRoute("/studio/team")({
  head: () => ({ meta: [
    { title: "Team — Interarch Design Labs" },
    { name: "description", content: "Four partners. Distinct strengths. One aligned vision — meet the leadership of IDL." },
    { property: "og:title", content: "Team — Interarch Design Labs" },
    { property: "og:description", content: "The partners and associates who shape IDL's architecture, interiors and delivery." },
  ] }),
  component: TeamPage,
});

function TeamPage() {
  return (
    <PageShell>
      <PageHero image={pageImages.teamHero} alt="IDL team studio" title="Four partners. One aligned vision." />
      <section className="partner-strip-section">
        <span className="section-kicker">Leadership</span>
        <div className="partner-strip">
          {partners.map((p) => (
            <a className="partner-tile" href={`#${encodeURIComponent(p.name)}`} key={p.name} data-hover>
              <img src={p.image} alt={p.name} width={900} height={900} loading="lazy" />
              <h3>{p.name}</h3>
              <p>{p.role}</p>
            </a>
          ))}
        </div>
      </section>
      {partners.map((p) => (
        <section className="partner-section" id={p.name} key={p.name}>
          <div className="img-reveal-wrap partner-portrait" data-reveal-direction="bottom">
            <div className="img-parallax"><img src={p.image} alt={p.name} width={1000} height={1400} loading="lazy" /></div>
          </div>
          <div className="partner-copy" data-reveal>
            <h2>{p.name}</h2>
            <span className="partner-role">{p.role}</span>
            <p className="partner-line">{p.line}</p>
            <ul>{p.details.map((d) => <li key={d}>{d}</li>)}</ul>
          </div>
          <div className="partner-divider"><span>{p.role}</span></div>
        </section>
      ))}
      <section className="associates-section">
        <span className="section-kicker">Studio</span>
        <p style={{ maxWidth: 720, opacity: 0.7, marginBottom: 24 }}>
          The partners are supported by a multidisciplinary team of architects, interior designers, visualisers, project managers and delivery specialists across our Mumbai and Ahmedabad studios.
        </p>
      </section>
    </PageShell>
  );
}
