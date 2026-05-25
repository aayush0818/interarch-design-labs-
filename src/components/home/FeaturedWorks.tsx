import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";
import work5 from "@/assets/work-5.jpg";
import work6 from "@/assets/work-6.jpg";
import { projects } from "@/data/projects";

// wide → tall pair → tall pair → wide
const grid = [
  { img: work1, slug: projects[0]?.slug, span: "wide" },
  { img: work2, slug: projects[1]?.slug, span: "tall" },
  { img: work3, slug: projects[2]?.slug, span: "tall" },
  { img: work5, slug: projects[3]?.slug, span: "tall" },
  { img: work6, slug: projects[4]?.slug, span: "tall" },
  { img: work4, slug: projects[5]?.slug, span: "wide" },
];

export function FeaturedWorks() {
  return (
    <section className="works-section idl-section">
      <div className="works-header">
        <h2 className="idl-section-title">Selected Works</h2>
        <a className="works-viewall" href="/works" data-hover>
          View all works →
        </a>
      </div>

      <div className="works-grid">
        {grid.map((cell, i) => {
          const rowIndex = Math.floor(i / (cell.span === "wide" ? 1 : 2));
          return (
            <a
              key={i}
              href={cell.slug ? `/project/${cell.slug}` : "/works"}
              className={`works-card works-card--${cell.span}`}
              data-hover
            >
              <div
                className="img-reveal-wrap parallax-img"
                data-parallax-speed={cell.span === "wide" ? "0.06" : "0.09"}
              >
                <div className="img-parallax">
                  <img
                    src={cell.img}
                    alt=""
                    width={cell.span === "wide" ? 1920 : 900}
                    height={cell.span === "wide" ? 1080 : 1280}
                    loading="lazy"
                  />
                </div>
              </div>
              <span className="works-card-label">View Project →</span>
            </a>
          );
        })}
      </div>
    </section>
  );
}
