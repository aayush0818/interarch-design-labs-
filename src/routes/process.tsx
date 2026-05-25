import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/home/PageShell";

export const Route = createFileRoute("/process")({
  head: () => ({ meta: [
    { title: "Process — Interarch Design Labs" },
    { name: "description", content: "The design process of Interarch Design Labs from listening to delivery." },
    { property: "og:title", content: "Process — Interarch Design Labs" },
    { property: "og:description", content: "A precise, phased method for architecture and interiors." },
  ] }),
  component: ProcessPage,
});

const steps = [
  ['Listen', 'We begin with use, budget, ambition, constraints and the quiet habits that drawings often miss.', 'Brief archive'],
  ['Read', 'Context is mapped through climate, site movement, precedent, craft and approval pathways.', 'Research dossier'],
  ['Compose', 'Plans, massing, material studies and room sequences are tested until the project finds its order.', 'Concept package'],
  ['Detail', 'The idea becomes buildable through drawings, schedules, prototypes and coordinated consultant input.', 'Tender set'],
  ['Make', 'Site review protects proportion, finish and intent while decisions become permanent.', 'Completion book'],
];

function ProcessPage() {
  return (
    <PageShell>
      <section className="process-page"><div className="process-line" />{steps.map(([title, text, deliverable], i) => <article className="process-step" key={title} data-reveal><div className="ghost-number">{String(i + 1).padStart(2, '0')}</div><span className="step-label">Phase {String(i + 1).padStart(2, '0')}</span><h1>{title}</h1><p>{text}</p><div className="deliverable"><span>Deliverable</span><strong>{deliverable}</strong></div></article>)}</section>
    </PageShell>
  );
}
