import { createFileRoute, Link, redirect } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import { CustomCursor } from "@/components/home/CustomCursor";
import { sectors } from "@/data/siteContent";
import { projectsBySector } from "@/data/projects";

export const Route = createFileRoute("/expertise/$sector")({
  beforeLoad: ({ params }) => {
    if (!sectors.find((s) => s.slug === params.sector)) throw redirect({ to: "/expertise" });
  },
  head: ({ params }) => {
    const s = sectors.find((x) => x.slug === params.sector);
    return { meta: [
      { title: `${s?.name ?? "Sector"} — Expertise · IDL` },
      { name: "description", content: s?.statement ?? "" },
      { property: "og:title", content: `${s?.name} — Expertise · IDL` },
      { property: "og:description", content: s?.statement ?? "" },
      ...(s?.image ? [{ property: "og:image", content: s.image }] : []),
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
      <main>
        <section className="idl-phero">
          <div className="idl-phero-img"><img src={data.image} alt={data.name} /></div>
          <div className="idl-phero-shade" />
          <div className="idl-phero-cap">
            <span className="idl-eyebrow"><span className="dot" />Expertise</span>
            <h1>{data.name}.</h1>
          </div>
        </section>
        <section className="idl-sec">
          <p className="idl-prose-lead">{data.statement}</p>
        </section>
        <section className="idl-sec--sm idl-sec--bordered">
          <header style={{ textAlign: "center", marginBottom: "60px" }}>
            <span className="idl-eyebrow">— Selected work</span>
          </header>
          {list.length === 0 ? (
            <p style={{ textAlign: "center", fontFamily: "var(--serif)", fontStyle: "italic", opacity: 0.6 }}>Project records coming soon.</p>
          ) : (
            <div className="idl-pgrid" style={{ paddingTop: 0, paddingBottom: 0 }}>
              {list.map((p, i) => (
                <motion.div
                  key={p.slug}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.9, delay: (i % 4) * 0.08, ease: EASE }}
                >
                  <Link to="/project/$slug" params={{ slug: p.slug }} className="idl-pcard" data-hover>
                    <div className="idl-pcard-img"><img src={p.cover} alt={p.name} loading="lazy" /></div>
                    <div className="idl-pcard-cap">
                      <span>{p.location}</span>
                      <strong>{p.name}</strong>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </section>
        <section className="idl-sec idl-sec--bordered" style={{ textAlign: "center" }}>
          <p className="idl-prose-lead" style={{ marginBottom: 28 }}>Begin a {data.name.toLowerCase()} project.</p>
          <Link to="/contact" className="idl-erow-link" data-hover>Contact the studio →</Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
