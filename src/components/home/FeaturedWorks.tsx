import { projects } from "@/data/projects";

export function FeaturedWorks() {
  return (
    <section className="works-section idl-section">
      <div className="works-header">
        <h2 className="idl-section-title">Selected Works</h2>
        <a className="works-viewall" href="/works" data-hover>
          View all works →
        </a>
      </div>
      <div className="works-list">
        {projects.map((p, i) => (
          <a
            key={p.slug}
            href={`/project/${p.slug}`}
            className="works-row"
            data-reveal
            data-reveal-stagger={i}
            data-hover
          >
            <span className="works-index">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="works-name">{p.sector}</span>
            <span className="works-location">{p.location}</span>
            <span className="works-year">{p.year}</span>
            <span className="works-arrow">→</span>
          </a>
        ))}
      </div>
    </section>
  );
}
