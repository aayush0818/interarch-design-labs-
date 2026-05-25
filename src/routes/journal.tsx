import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/home/PageShell";
import { journalPosts } from "@/data/siteContent";

export const Route = createFileRoute("/journal")({
  head: () => ({ meta: [
    { title: "Journal — Interarch Design Labs" },
    { name: "description", content: "Essays, notes and studio observations from Interarch Design Labs." },
    { property: "og:title", content: "Journal — Interarch Design Labs" },
    { property: "og:description", content: "A journal on architecture, interiors, light, materials and process." },
  ] }),
  component: JournalPage,
});

function JournalPage() {
  return (
    <PageShell>
      <section className="journal-list"><h1 data-reveal>Journal</h1>{journalPosts.map((p) => <article className="journal-entry" data-reveal key={p.slug}><a href={`/journal/${p.slug}`} data-hover><span>{p.category}</span> <time>{p.date}</time><h2>{p.title} →</h2><p>{p.dek}</p></a></article>)}</section>
    </PageShell>
  );
}
