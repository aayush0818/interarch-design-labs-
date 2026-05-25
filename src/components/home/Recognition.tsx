import award1 from "@/assets/award-1.jpg";
import award2 from "@/assets/award-2.jpg";
import award3 from "@/assets/award-3.jpg";

const items = [
  {
    img: award1,
    category: "Awards & Accolades",
    date: "23.03.26",
    headline:
      "IDL retains #1 ranking — Interior Design's 2026 Top 100 Hospitality List",
    href: "/journal/awards/top-100",
  },
  {
    img: award2,
    category: "Awards & Accolades",
    date: "15.12.25",
    headline:
      "IDL listed on Forbes' India's Top Hospitality Architects & Designers 2026",
    href: "/journal/awards/forbes-top",
  },
  {
    img: award3,
    category: "Awards & Accolades",
    date: "23.01.26",
    headline:
      "Babasaheb Ambedkar Bhavan named 2025 Chief Minister's Civic Award Finalist",
    href: "/journal/awards/cm-civic",
  },
];

export function Recognition() {
  return (
    <section className="recognition-section">
      <div className="recognition-grid">
        <div className="recognition-left">
          <h2 className="recognition-title">Recognition</h2>
          <a className="idl-pill" href="/journal/awards" data-hover>
            View all
          </a>
        </div>
        <div className="recognition-cards">
          {items.map((a, i) => (
            <a key={i} href={a.href} className="rec-card" data-hover>
              <div className="rec-card-img">
                <div className="img-reveal-wrap parallax-img" data-parallax-speed="0.07">
                  <div className="img-parallax">
                    <img src={a.img} alt="" width={960} height={1280} loading="lazy" />
                  </div>
                </div>
              </div>
              <div className="rec-card-rule" />
              <div className="rec-card-meta">
                <span>{a.category}</span>
                <span>{a.date}</span>
              </div>
              <div className="rec-card-headline">{a.headline}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
