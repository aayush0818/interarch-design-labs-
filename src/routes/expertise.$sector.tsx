import { createFileRoute, Link, redirect } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import { CustomCursor } from "@/components/home/CustomCursor";
import { sectors } from "@/data/siteContent";
import { projectsBySector } from "@/data/projects";

export const Route = createFileRoute("/expertise/$sector")({
  beforeLoad: ({ params }) => {
    if (!sectors.find((s) => s.slug === params.sector)) {
      throw redirect({ to: "/expertise" });
    }
  },
  head: ({ params }) => {
    const s = sectors.find((x) => x.slug === params.sector);
    return { meta: [
      { title: `${s?.name ?? "Sector"} — Expertise · IDL` },
      { name: "description", content: s?.statement ?? "Sector expertise by Interarch Design Labs." },
      { property: "og:title", content: `${s?.name} — Expertise · IDL` },
      { property: "og:description", content: s?.statement ?? "" },
    ] };
  },
  component: SectorPage,
});

const EASE = [0.22, 1, 0.36, 1] as const;

function SectorPage() {
  const { sector } = Route.useParams();
  const data = sectors.find((s) => s.slug === sector)!;
  const list = projectsBySector(data.name);

  return (
    <>
      <CustomCursor />
      <Header />
      <main className="idl-spread">
        <header className="idl-spread-masthead">
          <div className="idl-spread-eyebrow">— Expertise · {String(sectors.findIndex((s) => s.slug === sector) + 1).padStart(2, "0")} / 06</div>
          <motion.h1
            className="idl-spread-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE }}
          >
            {data.name}
          </motion.h1>
        </header>
        <section className="idl-spread-body">
          <div className="idl-spread-dropcap">
            <span className="dropcap">{data.name.charAt(0)}</span>
            <p>{data.statement}</p>
          </div>
          <div className="idl-spread-col">
            <p>Every project in this sector begins with the same questions — how is the day spent here, where does the light fall, what material will age with grace? Answers shape proportion, plan and detail.</p>
            <p>We hold the brief lightly enough to let the place speak, and firmly enough that the building serves its people first.</p>
          </div>
        </section>
        <aside className="idl-spread-pull">
          <span className="idl-spread-rule" />
          <blockquote>"Architecture must respond to life. {data.name.toLowerCase()} is no exception."</blockquote>
          <span className="idl-spread-rule" />
        </aside>
        <section className="idl-spread-filmstrip">
          <header>
            <span className="idl-spread-eyebrow">— Selected work</span>
            <h2>{list.length} project{list.length !== 1 ? "s" : ""}</h2>
          </header>
          <div className="idl-spread-track">
            {list.length === 0 ? (
              <p className="idl-spread-empty">Project records coming soon.</p>
            ) : list.map((p, i) => (
              <motion.div
                key={p.slug}
                className="idl-spread-frame"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: EASE }}
              >
                <Link to="/project/$slug" params={{ slug: p.slug }} data-hover>
                  <img src={p.cover} alt={p.name} loading="lazy" />
                  <span>{p.name}</span>
                  <small>{p.location} · {p.year}</small>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
        <footer className="idl-spread-cta">
          <h2>Begin a {data.name.toLowerCase()} project.</h2>
          <Link to="/contact" className="text-arrow" data-hover>Contact the studio →</Link>
        </footer>
      </main>
      <Footer />
    </>
  );
}
