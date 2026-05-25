import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PageShell } from "@/components/home/PageShell";
import { pageImages, partners } from "@/data/siteContent";

export const Route = createFileRoute("/studio/team")({
  head: () => ({ meta: [
    { title: "Team — Interarch Design Labs" },
    { name: "description", content: "Meet the partners and associates behind Interarch Design Labs." },
    { property: "og:title", content: "Team — Interarch Design Labs" },
    { property: "og:description", content: "The people who shape IDL's architecture, interiors, research and delivery." },
  ] }),
  component: TeamPage,
});

function TeamPage() {
  return (
    <PageShell>
      <PageHero image={pageImages.teamHero} alt="IDL team studio" title="People behind the precision." />
      <section className="partner-strip-section">
        <span className="section-kicker">Partners</span>
        <div className="partner-strip">
          {partners.map((p) => <a className="partner-tile" href={`#${p.name}`} key={p.name} data-hover><img src={p.image} alt={p.name} width={900} height={900} loading="lazy" /><h3>{p.name}</h3><p>{p.role}</p></a>)}
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
        <span className="section-kicker">Associates</span>
        <table><tbody>{['Riya Kapoor — Senior Architect', 'Devika Jain — Interior Lead', 'Omar Sheikh — Project Architect', 'Tara Menon — Materials Research'].map((r) => <tr key={r}><td>{r}</td></tr>)}</tbody></table>
      </section>
    </PageShell>
  );
}
