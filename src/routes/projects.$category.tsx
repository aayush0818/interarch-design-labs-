import { createFileRoute, Link, redirect } from "@tanstack/react-router";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import { CustomCursor } from "@/components/home/CustomCursor";
import { CinematicHero } from "@/components/motion/CinematicHero";
import { Reveal } from "@/components/motion/Reveal";
import { projectsByCategory } from "@/data/projects";
import { realImages } from "@/data/realImages";

const work1 = realImages.institutional.aerial;
const work3 = realImages.residential.exterior;


const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();

export const Route = createFileRoute("/projects/$category")({
  beforeLoad: ({ params }) => {
    const c = params.category.toLowerCase();
    if (c !== "architecture" && c !== "interiors") throw redirect({ to: "/projects" });
  },
  head: ({ params }) => ({
    meta: [
      { title: `${cap(params.category)} — Projects · IDL` },
      { name: "description", content: `Selected ${params.category.toLowerCase()} projects by Interarch Design Labs.` },
      { property: "og:title", content: `${cap(params.category)} — Projects · IDL` },
      { property: "og:description", content: `Selected ${params.category.toLowerCase()} work.` },
    ],
  }),
  component: CategoryPage,
});

function CategoryPage() {
  const { category } = Route.useParams();
  const cat = category.toLowerCase() as "architecture" | "interiors";
  const list = projectsByCategory(cat);
  const hero = cat === "architecture" ? work1 : work3;
  const other = cat === "architecture" ? "interiors" : "architecture";

  // Editorial asymmetric: pattern of wide/narrow rows
  const layout = (i: number): "wide" | "narrow" | "tall" => {
    const m = i % 5;
    if (m === 0) return "wide";
    if (m === 3) return "tall";
    return "narrow";
  };

  return (
    <>
      <CustomCursor />
      <Header />
      <main className="idlx-page">
        <CinematicHero
          image={hero}
          alt={cap(cat)}
          eyebrow={`— Projects · ${cap(cat)}`}
          title={cap(cat) + "."}
          meta={`${list.length} works`}
          height="tall"
        />

        <div className="idlx-archive">
          <aside className="idlx-archive-rail">
            <span>— Category</span>
            <Link to="/projects" data-hover>All projects</Link>
            <Link
              to="/projects/$category"
              params={{ category: "architecture" }}
              data-hover
              className={cat === "architecture" ? "is-on" : ""}
            >
              Architecture
            </Link>
            <Link
              to="/projects/$category"
              params={{ category: "interiors" }}
              data-hover
              className={cat === "interiors" ? "is-on" : ""}
            >
              Interiors
            </Link>
            <span style={{ marginTop: 32 }}>— Count</span>
            <span style={{ fontFamily: "var(--serif)", fontSize: 30, color: "var(--idlx-ink)" }}>{String(list.length).padStart(2, "0")}</span>
          </aside>

          <div className="idlx-archive-grid">
            {list.map((p, i) => {
              const kind = layout(i);
              const cls =
                kind === "wide"
                  ? "idlx-archive-cell idlx-archive-cell--wide"
                  : "idlx-archive-cell";
              const imgCls =
                kind === "wide"
                  ? "idlx-pcard2-img idlx-pcard2-img--wide"
                  : kind === "tall"
                  ? "idlx-pcard2-img idlx-pcard2-img--tall"
                  : "idlx-pcard2-img";
              return (
                <div key={p.slug} className={cls}>
                  <Reveal delay={(i % 3) * 0.05}>
                    <Link to="/project/$slug" params={{ slug: p.slug }} className="idlx-pcard2" data-hover>
                      <div className={imgCls}>
                        <img src={p.cover} alt={p.name} loading="lazy" />
                      </div>
                      <div className="idlx-pcard2-cap">
                        <span className="idlx-pcard2-name">{p.name}</span>
                        <span className="idlx-pcard2-meta">{p.location} · {p.year}</span>
                      </div>
                    </Link>
                  </Reveal>
                </div>
              );
            })}
          </div>
        </div>

        <section className="idlx-cta idlx-section--bordered">
          <Reveal>
            <Link to="/projects/$category" params={{ category: other }} className="idlx-cta-link" data-hover>
              View {cap(other)} →
            </Link>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
