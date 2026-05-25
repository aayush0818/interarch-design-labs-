import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PageShell } from "@/components/home/PageShell";
import { pageImages } from "@/data/siteContent";

export const Route = createFileRoute("/studio")({
  head: () => ({
    meta: [
      { title: "Studio — Interarch Design Labs" },
      { name: "description", content: "The philosophy, practice and working culture of Interarch Design Labs." },
      { property: "og:title", content: "Studio — Interarch Design Labs" },
      { property: "og:description", content: "A studio shaped by clarity, proportion, material intelligence and restraint." },
    ],
  }),
  component: StudioPage,
});

function StudioPage() {
  return (
    <PageShell>
      <PageHero image={pageImages.studioHero} alt="Warm architectural studio interior" title="A studio shaped by restraint." />
      <section className="editorial-two-col">
        <div className="story-copy" data-reveal>
          <p>Interarch Design Labs works across architecture, interiors and spatial strategy. The practice is built on the belief that a project should feel inevitable: precise in plan, calm in material and generous in the way it supports life.</p>
          <p>We begin with context before image. Climate, use, craft, sequence and memory are studied until the building's quieter logic appears. The work is contemporary, but never rushed; refined, but never decorative for its own sake.</p>
        </div>
        <div className="fact-rule" />
        <div className="facts-grid">
          <div className="fact-item"><span>Founded</span><strong>2009</strong></div>
          <div className="fact-item"><span>Studios</span><strong>02</strong></div>
          <div className="fact-item"><span>Sectors</span><strong>06</strong></div>
          <div className="fact-item"><span>Projects</span><strong>120+</strong></div>
        </div>
      </section>
      <section className="three-column-block">
        <span className="section-kicker">Principles</span>
        {['Clarity before gesture', 'Material honesty', 'Silence as confidence'].map((text, i) => (
          <div className="principle" data-reveal key={text}>
            <span>{String(i + 1).padStart(2, '0')}</span>
            <p>{text}</p>
          </div>
        ))}
      </section>
      <section className="culture-section">
        <div className="img-reveal-wrap culture-img parallax-img" data-parallax-speed="0.05">
          <div className="img-parallax"><img src={pageImages.studioCulture} alt="Studio material table" width={1400} height={1000} loading="lazy" /></div>
        </div>
        <div data-reveal>
          <span className="section-kicker">Culture</span>
          <h2>Every decision is reviewed at the scale of the city, the room and the hand.</h2>
          <p>Drawings, samples, conversations and site visits sit beside one another. The studio's pace is deliberate because every built decision becomes part of someone's daily rhythm.</p>
        </div>
      </section>
    </PageShell>
  );
}
