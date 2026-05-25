import { useState } from "react";
import { Link, Outlet, createFileRoute, useRouterState } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import { CustomCursor } from "@/components/home/CustomCursor";
import { useReveal } from "@/components/home/useReveal";
import { projectsByCategory } from "@/data/projects";
import work1 from "@/assets/work-1.jpg";
import work3 from "@/assets/work-3.jpg";

export const Route = createFileRoute("/projects")({
  head: () => ({ meta: [
    { title: "Projects — Interarch Design Labs" },
    { name: "description", content: "An archive of architecture and interiors by Interarch Design Labs." },
    { property: "og:title", content: "Projects — Interarch Design Labs" },
    { property: "og:description", content: "Two doors — architecture and interiors. Choose where to begin." },
  ] }),
  component: ProjectsPage,
});

const EASE = [0.22, 1, 0.36, 1] as const;

function ProjectsPage() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  if (pathname !== "/projects") return <Outlet />;

  useReveal();
  const [hover, setHover] = useState<"a" | "i" | null>(null);
  const aCount = projectsByCategory("architecture").length;
  const iCount = projectsByCategory("interiors").length;

  return (
    <>
      <CustomCursor />
      <Header />
      <section className="idl-diptych" onMouseLeave={() => setHover(null)}>
        <motion.div
          className={`idl-diptych-half ${hover === "a" ? "is-open" : ""} ${hover === "i" ? "is-dim" : ""}`}
          onMouseEnter={() => setHover("a")}
          initial={{ flex: 1 }}
          animate={{ flex: hover === "a" ? 1.5 : hover === "i" ? 0.6 : 1 }}
          transition={{ duration: 0.9, ease: EASE }}
        >
          <Link to="/projects/$category" params={{ category: "architecture" }} className="idl-diptych-link" data-hover>
            <img src={work1} alt="Architecture works" />
            <div className="idl-diptych-overlay" />
            <div className="idl-diptych-meta">
              <span className="idl-diptych-index">01 / 02</span>
              <span className="idl-diptych-count">{String(aCount).padStart(2, "0")} projects</span>
            </div>
            <motion.h2
              className="idl-diptych-label"
              animate={{ y: hover === "a" ? -8 : 0, letterSpacing: hover === "a" ? "0.06em" : "0.02em" }}
              transition={{ duration: 0.6, ease: EASE }}
            >
              Architecture
            </motion.h2>
          </Link>
        </motion.div>
        <motion.div
          className={`idl-diptych-half ${hover === "i" ? "is-open" : ""} ${hover === "a" ? "is-dim" : ""}`}
          onMouseEnter={() => setHover("i")}
          initial={{ flex: 1 }}
          animate={{ flex: hover === "i" ? 1.5 : hover === "a" ? 0.6 : 1 }}
          transition={{ duration: 0.9, ease: EASE }}
        >
          <Link to="/projects/$category" params={{ category: "interiors" }} className="idl-diptych-link" data-hover>
            <img src={work3} alt="Interior works" />
            <div className="idl-diptych-overlay" />
            <div className="idl-diptych-meta">
              <span className="idl-diptych-index">02 / 02</span>
              <span className="idl-diptych-count">{String(iCount).padStart(2, "0")} projects</span>
            </div>
            <motion.h2
              className="idl-diptych-label"
              animate={{ y: hover === "i" ? -8 : 0, letterSpacing: hover === "i" ? "0.06em" : "0.02em" }}
              transition={{ duration: 0.6, ease: EASE }}
            >
              Interiors
            </motion.h2>
          </Link>
        </motion.div>
      </section>
      <Footer />
    </>
  );
}
