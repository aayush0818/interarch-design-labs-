import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/home/PageShell";
import { milestones, pageImages } from "@/data/siteContent";

export const Route = createFileRoute("/studio/history")({
  head: () => ({ meta: [
    { title: "History — Interarch Design Labs" },
    { name: "description", content: "From 1989 to today — the milestones that shaped Interarch Design Labs." },
    { property: "og:title", content: "History — Interarch Design Labs" },
    { property: "og:description", content: "Two practices, one purpose. A concise timeline of IDL's evolution." },
  ] }),
  component: HistoryPage,
});

function HistoryPage() {
  return (
    <PageShell>
      <section className="history-page">
        <h1 data-reveal>Two practices. One purpose.</h1>
        <p data-reveal style={{ maxWidth: 720, opacity: 0.7, marginTop: 12 }}>
          Interarch began as a practice dedicated to enduring architectural principles. Kala Design established itself through detail-driven interiors and contextual thinking. Over time, collaboration matured into a single, integrated studio — Interarch Design Labs.
        </p>
        <img className="history-sketch" src={pageImages.skyline} alt="Hand drawn skyline" width={1200} height={220} loading="lazy" />
        <div className="timeline-line"><span /></div>
        <div className="timeline-items">
          {milestones.map((m) => (
            <article className="milestone" data-reveal key={m.year}>
              <strong>{m.year}</strong>
              <h2>{m.title}</h2>
              <p>{m.text}</p>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
