const awards = [
  {
    year: "2010",
    category: "Government Award",
    name: "Chief Minister of Maharashtra Award",
    body: "Babasaheb Ambedkar Bhavan",
  },
  {
    year: "2014",
    category: "AICA Asia Fest",
    name: "AICA Asia Fest Commendation",
    body: "Architectural Design Excellence",
  },
  {
    year: "2015",
    category: "Academia",
    name: "Rachana Sansad Diamond Jubilee",
    body: "Academy of Architecture, Mumbai",
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
        <div className="idl-cols-right">
          {awards.map((a, i) => (
            <div key={i} className="award-card" data-reveal data-reveal-stagger={i}>
              <div className="award-year-big">{a.year}</div>
              <div className="award-meta">
                <span>{a.category}</span>
                <span>{a.year}</span>
              </div>
              <div className="award-name">{a.name}</div>
              <div className="award-body">{a.body}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
