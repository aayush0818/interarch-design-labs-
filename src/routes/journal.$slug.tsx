import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/home/PageShell";
import { journalPosts, pageImages } from "@/data/siteContent";

export const Route = createFileRoute("/journal/$slug")({
  head: () => ({ meta: [
    { title: "Journal Post — Interarch Design Labs" },
    { name: "description", content: "An editorial journal post from Interarch Design Labs." },
    { property: "og:title", content: "Journal Post — Interarch Design Labs" },
    { property: "og:description", content: "Thoughts on architecture, interiors, light and process from IDL." },
  ] }),
  component: JournalPostPage,
});

function JournalPostPage() {
  const { slug } = Route.useParams();
  const index = Math.max(0, journalPosts.findIndex((p) => p.slug === slug));
  const post = journalPosts[index] ?? journalPosts[0];
  const next = journalPosts[(index + 1) % journalPosts.length];
  return (
    <PageShell>
      <article className="journal-post"><header><span className="section-kicker">{post.category} · {post.date}</span><h1>{post.title}</h1></header><p className="dropcap">{post.dek} Architecture becomes legible when its strongest decisions are allowed to remain quiet. The studio studies what should be held, what should be removed and what should be left unsaid.</p><p>Every project contains a sequence of small thresholds: the line of shade before an entrance, the way a room receives afternoon light, the proportion of a wall before it meets a piece of furniture. These are not decorative choices. They are the language through which a building becomes memorable.</p><blockquote>Restraint is not emptiness. It is the confidence to let one precise thing carry the weight of many.</blockquote><figure><div className="img-reveal-wrap"><div className="img-parallax"><img src={pageImages.works[index % pageImages.works.length]} alt="Architectural journal reference" width={1200} height={800} loading="lazy" /></div></div><figcaption>Studio reference image from the IDL archive.</figcaption></figure><p>The journal exists as a record of those decisions: not a catalogue of style, but a set of notes on clarity, patience and use.</p><footer><span className="section-kicker">Next entry</span><a href={`/journal/${next.slug}`} data-hover>{next.title} →</a></footer></article>
    </PageShell>
  );
}
