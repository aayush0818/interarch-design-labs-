import { useRef } from "react";
import { Link, createFileRoute, redirect } from "@tanstack/react-router";
import { motion, useScroll } from "framer-motion";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import { CustomCursor } from "@/components/home/CustomCursor";
import { journalPosts } from "@/data/siteContent";

export const Route = createFileRoute("/practice/journal/$slug")({
  beforeLoad: ({ params }) => {
    if (!journalPosts.find((p) => p.slug === params.slug)) throw redirect({ to: "/practice/journal" });
  },
  head: ({ params }) => {
    const p = journalPosts.find((x) => x.slug === params.slug);
    return { meta: [
      { title: `${p?.title ?? "Essay"} — Journal · IDL` },
      { name: "description", content: p?.dek ?? "" },
      { property: "og:title", content: `${p?.title} — Journal · IDL` },
      { property: "og:description", content: p?.dek ?? "" },
    ] };
  },
  component: EssayPage,
});

const EASE = [0.22, 1, 0.36, 1] as const;

const body = (slug: string): Array<{ kind: "p" | "quote"; text: string }> => [
  { kind: "p", text: "Every building begins not with a line, but with a question. Why this room, why this window, why this view? The drawing only earns its weight once the answer is honest." },
  { kind: "p", text: "We talk to the people who will use the space long before the brief is fixed. Habits that drawings miss — the way light is preferred at breakfast, the door that everyone leaves open — these are the real plans." },
  { kind: "quote", text: "Clarity is not minimalism. It is the discipline of leaving in only what matters." },
  { kind: "p", text: `In the case of "${slug.replace(/-/g, " ")}", that meant editing as much as designing. The plan grew quieter each week, until what remained felt inevitable.` },
  { kind: "p", text: "A building done with care is patient. It accepts a new tenant, a wedding, a quiet rainy afternoon, with the same composure. That is the test." },
];

function EssayPage() {
  const { slug } = Route.useParams();
  const post = journalPosts.find((p) => p.slug === slug)!;
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start", "end end"] });

  return (
    <>
      <CustomCursor />
      <Header />
      <motion.div className="idl-read-progress" style={{ scaleX: scrollYProgress }} />
      <article className="idl-essay" ref={ref}>
        <Link to="/practice/journal" className="idl-essay-back" data-hover>← Journal</Link>
        <header>
          <span className="kicker">{post.category} · {post.date}</span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE }}
          >
            {post.title}
          </motion.h1>
          <p className="idl-essay-dek">{post.dek}</p>
        </header>
        <div className="idl-essay-body">
          {body(slug).map((b, i) =>
            b.kind === "quote" ? (
              <motion.blockquote
                key={i}
                className="idl-essay-pull"
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: EASE }}
              >
                {b.text}
              </motion.blockquote>
            ) : i === 0 ? (
              <p key={i} className="idl-essay-first">{b.text}</p>
            ) : (
              <p key={i}>{b.text}</p>
            )
          )}
        </div>
      </article>
      <Footer />
    </>
  );
}
