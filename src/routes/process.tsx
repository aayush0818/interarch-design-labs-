import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/home/PageShell";

export const Route = createFileRoute("/process")({
  head: () => ({ meta: [
    { title: "Process — Interarch Design Labs" },
    { name: "description", content: "From listening to delivery — how IDL takes a project from vision to lived experience." },
    { property: "og:title", content: "Process — Interarch Design Labs" },
    { property: "og:description", content: "A phased, considered method for architecture and interiors." },
  ] }),
  component: ProcessPage,
});

const steps: Array<[string, string, string]> = [
  ['Listening First', 'Every project begins with listening — to people, to context, to the story the site already carries. We work to understand aspirations, constraints and the quiet habits drawings often miss.', 'Brief archive'],
  ['Concept & Strategy', 'Ideas are sketched and tested until the project finds its order. Climate, culture, craft and approval pathways inform a clear strategic direction.', 'Concept package'],
  ['Design Development', 'Concepts come to life through proportion, materiality and detail. Drawings, schedules, mockups and consultant input bring rigour to every decision.', 'Design package'],
  ['Execution', 'We coordinate with engineers, consultants and craftspeople to deliver seamlessly. Site review protects intent as decisions become permanent.', 'Tender & site set'],
  ['Beyond Delivery', 'A building is sustainable when it adapts and ages well. We stay involved so spaces continue to grow, adapt and live alongside you.', 'Post-occupancy review'],
];

function ProcessPage() {
  return (
    <PageShell>
      <section className="process-page">
        <div className="process-line" />
        {steps.map(([title, text, deliverable], i) => (
          <article className="process-step" key={title} data-reveal>
            <div className="ghost-number">{String(i + 1).padStart(2, '0')}</div>
            <span className="step-label">Phase {String(i + 1).padStart(2, '0')}</span>
            <h1>{title}</h1>
            <p>{text}</p>
            <div className="deliverable"><span>Deliverable</span><strong>{deliverable}</strong></div>
          </article>
        ))}
      </section>
    </PageShell>
  );
}
