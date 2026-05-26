import { createFileRoute, Link } from "@tanstack/react-router";
import { CinematicHero } from "@/components/motion/CinematicHero";
import { milestones } from "@/data/siteContent";
import hero from "@/assets/idl-institutional-facade.png";

export const Route = createFileRoute("/studio/history")({
  component: StudioHistoryPage,
});

function StudioHistoryPage() {
  return (
    <>
      <CinematicHero image={hero} alt="Studio history" eyebrow="— Studio · History" title={"A legacy\nin motion."} height="tall" />
      <section className="idlx-section">
        <div className="idlx-awards">
          {milestones.map((m) => (
            <article key={m.year} className="idlx-award-row">
              <span className="idlx-award-year">{m.year}</span>
              <span className="idlx-award-name">{m.title}</span>
              <span className="idlx-award-note">{m.text}</span>
            </article>
          ))}
        </div>
      </section>
      <section className="idlx-cta idlx-section--bordered">
        <Link to="/studio/team" className="idlx-cta-link" data-hover>Meet the team →</Link>
      </section>
    </>
  );
}
