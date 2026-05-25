import { Outlet, createFileRoute, useRouterState } from "@tanstack/react-router";
import { PageHero, PageShell } from "@/components/home/PageShell";
import { pageImages } from "@/data/siteContent";

export const Route = createFileRoute("/studio")({
  head: () => ({
    meta: [
      { title: "Studio — Interarch Design Labs" },
      { name: "description", content: "35+ years of craft, clarity and care. The IDL studio combines the legacies of Interarch and Kala Design." },
      { property: "og:title", content: "Studio — Interarch Design Labs" },
      { property: "og:description", content: "A multidisciplinary studio across architecture, interiors, planning and engineering." },
    ],
  }),
  component: StudioPage,
});

function StudioPage() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  if (pathname !== "/studio") return <Outlet />;

  return (
    <PageShell>
      <PageHero image={pageImages.studioHero} alt="Interarch Design Labs studio" title="35+ years of craft, clarity and care." />
      <section className="editorial-two-col">
        <div className="story-copy" data-reveal>
          <p>Interarch Design Labs is the union of two legacy firms — Interarch, founded in 1989 by Ar. Dipak Thaker and Ar. Murtuza Rangwala, and Kala Design, led by Ar. Hussain Rangwala and Ar. Rohit Gojia. Together we bring forward a shared philosophy: design should not chase trends, it should serve intent.</p>
          <p>Our practice spans architecture, interiors, planning and engineering. The foundation is singular — a deep respect for context, craft and collaboration. From residential homes to institutional campuses, our portfolio speaks of relationships built on trust and consistency.</p>
        </div>
        <div className="fact-rule" />
        <div className="facts-grid">
          <div className="fact-item"><span>Founded</span><strong>1989</strong></div>
          <div className="fact-item"><span>Studios</span><strong>Mumbai · Ahmedabad</strong></div>
          <div className="fact-item"><span>Partners</span><strong>04</strong></div>
          <div className="fact-item"><span>Reach</span><strong>India · ME · Africa</strong></div>
        </div>
      </section>
      <section className="three-column-block">
        <span className="section-kicker">Guiding Principles</span>
        {[
          'Architecture must respond to life.',
          'Every design should feel inevitable yet personal.',
          'Innovation matters only when rooted in context.',
        ].map((text, i) => (
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
          <span className="section-kicker">Culture & Process</span>
          <h2>Not a hierarchy, but a dialogue — across disciplines, generations and perspectives.</h2>
          <p>We value process as much as outcomes: the sketch before the line, the question before the answer, the conversation before the decision. Architecture, for us, is not an object to be delivered — it is an experience to be lived.</p>
        </div>
      </section>
    </PageShell>
  );
}
