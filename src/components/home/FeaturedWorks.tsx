import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";
import work5 from "@/assets/work-5.jpg";
import work6 from "@/assets/work-6.jpg";
import { projects } from "@/data/projects";

// Every selected work is presented full-width, stacked. No grid pairs.
const grid = [
  { img: work1, slug: projects[0]?.slug },
  { img: work2, slug: projects[1]?.slug },
  { img: work3, slug: projects[2]?.slug },
  { img: work4, slug: projects[3]?.slug },
  { img: work5, slug: projects[4]?.slug },
  { img: work6, slug: projects[5]?.slug },
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

      <div className="works-stack">
        {grid.map((cell, i) => (
          <a
            key={i}
            href={cell.slug ? `/project/${cell.slug}` : "/works"}
            className="works-card works-card--wide"
            data-hover
          >
            <div className="img-reveal-wrap works-drop-wrap">
              <div className="img-parallax">
                <img src={cell.img} alt="" loading={i < 2 ? "eager" : "lazy"} decoding="async" />
              </div>
            </div>
            <span className="works-card-label">View Project →</span>
          </a>
        ))}
      </div>
    </section>
  );
}

