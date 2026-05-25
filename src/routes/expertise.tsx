import { Outlet, Link, createFileRoute, useRouterState } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import { CustomCursor } from "@/components/home/CustomCursor";
import { sectors } from "@/data/siteContent";

export const Route = createFileRoute("/expertise")({
  head: () => ({ meta: [
    { title: "Expertise — Interarch Design Labs" },
    { name: "description", content: "Six sectors, one architectural language — measured, material, daylit." },
    { property: "og:title", content: "Expertise — Interarch Design Labs" },
    { property: "og:description", content: "Residential, commercial, institutional, hospitality, industrial, workplace." },
    { property: "og:image", content: sectors[0]?.image },
  ] }),
  component: ExpertisePage,
});

const EASE = [0.22, 1, 0.36, 1] as const;

function ExpertisePage() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  if (pathname !== "/expertise") return <Outlet />;

  return (
    <>
      <CustomCursor />
      <Header />
      <main>
        <section className="idl-phero">
          <div className="idl-phero-img"><img src={sectors[0].image} alt="Expertise" /></div>
          <div className="idl-phero-shade" />
          <div className="idl-phero-cap">
            <span className="idl-eyebrow"><span className="dot" />Expertise</span>
            <h1>Six sectors. One architectural language — measured, material, daylit.</h1>
          </div>
        </section>
        <section className="idl-sec--sm">
          <p className="idl-prose-lead">The studio works across scales without changing its register — from a private residence to a civic campus.</p>
        </section>
        {sectors.map((s, i) => (
          <motion.section
            key={s.slug}
            className="idl-erow"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.9, ease: EASE }}
          >
            <div className="idl-erow-img"><img src={s.image} alt={s.name} loading="lazy" /></div>
            <div className="idl-erow-body">
              <span className="idl-eyebrow">— {String(i + 1).padStart(2, "0")} / 06</span>
              <h2>{s.name}</h2>
              <p>{s.statement}</p>
              <Link to="/expertise/$sector" params={{ sector: s.slug }} className="idl-erow-link" data-hover>View {s.name.toLowerCase()} work</Link>
            </div>
          </motion.section>
        ))}
      </main>
      <Footer />
    </>
  );
}
