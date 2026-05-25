import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/home/PageShell";
import { milestones, pageImages } from "@/data/siteContent";

export const Route = createFileRoute("/studio/history")({
  head: () => ({ meta: [
    { title: "History — Interarch Design Labs" },
    { name: "description", content: "A concise timeline of Interarch Design Labs and its evolution." },
    { property: "og:title", content: "History — Interarch Design Labs" },
    { property: "og:description", content: "The moments that shaped the studio's practice and design discipline." },
  ] }),
  component: HistoryPage,
});

function HistoryPage() {
  return (
    <PageShell>
      <section className="history-page">
        <h1 data-reveal>History drawn in lines.</h1>
        <img className="history-sketch" src={pageImages.skyline} alt="Hand drawn skyline" width={1200} height={220} loading="lazy" />
        <div className="timeline-line"><span /></div>
        <div className="timeline-items">
          {milestones.map((m) => <article className="milestone" data-reveal key={m.year}><strong>{m.year}</strong><h2>{m.title}</h2><p>{m.text}</p></article>)}
        </div>
      </section>
    </PageShell>
  );
}
