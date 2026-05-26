import work1 from "@/assets/9c5aa0d0-310f-4331-b48d-b05de9dac663.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";
import work5 from "@/assets/work-5.jpg";
import work6 from "@/assets/work-6.jpg";
import { projects } from "@/data/projects";

// work-2 and work-6 are wide; the other four sit as two pairs.
const grid: Array<{ img: string; slug?: string; span: "wide" | "tall" }> = [
  { img: work2, slug: projects[0]?.slug, span: "wide" },
  { img: work1, slug: projects[1]?.slug, span: "tall" },
  { img: work3, slug: projects[2]?.slug, span: "tall" },
  { img: work4, slug: projects[3]?.slug, span: "tall" },
  { img: work5, slug: projects[4]?.slug, span: "tall" },
  { img: work6, slug: projects[5]?.slug, span: "wide" },
];

export function FeaturedWorks() {
  return (
    <section className="works-section idl-section">
      <div className="works-header">
        <h2 className="idl-section-title">Selected Works</h2>
        <a className="works-viewall" href="/projects" data-hover>
          View all works →
        </a>
      </div>

      <div className="works-grid">
        {grid.map((cell, i) => (
          <a
            key={i}
            href={cell.slug ? `/project/${cell.slug}` : "/projects"}
            className={`works-card works-card--${cell.span}`}
            data-hover
          >
            <div className="img-reveal-wrap works-drop-wrap">
              <div className="img-parallax">
                <img src={cell.img} alt="" className="object-fill" loading={i < 2 ? "eager" : "lazy"} decoding="async" />
              </div>
            </div>
            <span className="works-card-label">View Project →</span>
          </a>
        ))}
      </div>
    </section>
  );
}


