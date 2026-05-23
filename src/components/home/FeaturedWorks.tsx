import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";

const works = [
  { img: work1, category: "Residential", year: "2024", sector: "Private Villa" },
  { img: work2, category: "Hospitality", year: "2023", sector: "Boutique Retreat" },
  { img: work3, category: "Commercial", year: "2024", sector: "Brand Headquarters" },
];

export function FeaturedWorks() {
  return (
    <section className="idl-section">
      <div className="idl-cols">
        <div className="idl-cols-left" data-reveal>
          <h2 className="idl-section-title">
            Selected
            <br />
            Works
          </h2>
          <a className="idl-pill" href="/works" data-hover>
            View all →
          </a>
        </div>
        <div className="idl-cols-right">
          {works.map((w, i) => (
            <a
              key={i}
              href="/works"
              className="work-card"
              data-reveal
              data-reveal-stagger={i}
              data-hover
            >
              <div className="work-card-img">
                <img src={w.img} alt={w.sector} width={1200} height={1400} loading="lazy" />
              </div>
              <div className="work-card-meta">
                <span>{w.category}</span>
                <span>{w.year}</span>
              </div>
              <div className="work-card-sector">{w.sector}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
