const awards = [
  {
    year: "2010",
    category: "Civic Recognition",
    name: "Chief Minister of Maharashtra Award",
    org: "Babasaheb Ambedkar Bhavan",
  },
  {
    year: "2015",
    category: "Academic Excellence",
    name: "Rachana Sansad Diamond Jubilee Felicitation",
    org: "Academy of Architecture, Mumbai",
  },
  {
    year: "2014",
    category: "Design Commendation",
    name: "AICA Asia Fest Commendation",
    org: "Artists in Concrete Awards",
  },
];

export function Recognition() {
  return (
    <section className="idl-section" style={{ zIndex: 4 }}>
      <div className="idl-cols">
        <div className="idl-cols-left" data-reveal>
          <h2 className="idl-section-title">Recognition</h2>
          <a className="idl-pill" href="/journal/awards" data-hover>
            View all →
          </a>
        </div>
        <div className="awards-row">
          {awards.map((a, i) => (
            <div
              key={i}
              className="award-card"
              data-reveal
              data-reveal-stagger={i}
            >
              <div className="award-year-big">{a.year}</div>
              <div className="award-meta">
                <span>{a.category}</span>
                <span>{a.year}</span>
              </div>
              <div className="award-name">{a.name}</div>
              <div className="award-body">{a.org}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
