import { useState } from "react";
import residential from "@/assets/sector-residential.jpg";
import commercial from "@/assets/sector-commercial.jpg";
import institutional from "@/assets/sector-institutional.jpg";
import hospitality from "@/assets/sector-hospitality.jpg";
import industrial from "@/assets/sector-industrial.jpg";
import workplace from "@/assets/sector-workplace.jpg";

const items = [
  {
    name: "Residential",
    href: "/sectors/residential",
    desc: "Homes that prioritise daylight, proportion and an intuitive flow. Every decision, from plan to finish, supports daily life with calm precision.",
    img: residential,
  },
  {
    name: "Commercial",
    href: "/sectors/commercial",
    desc: "Workplaces and retail environments that translate brand identity into spatial performance. Designed for productivity, culture and future growth.",
    img: commercial,
  },
  {
    name: "Institutional",
    href: "/sectors/institutional",
    desc: "Buildings that serve public life with clarity and durability. Designed for long-term performance, with efficiency, accessibility and civic presence.",
    img: institutional,
  },
  {
    name: "Hospitality",
    href: "/sectors/hospitality",
    desc: "Environments shaped by atmosphere, warmth and the art of arrival. Every space is calibrated to the experience of the guest.",
    img: hospitality,
  },
  {
    name: "Industrial",
    href: "/sectors/industrial",
    desc: "Functional environments designed with the same rigour and material intelligence as our finest interiors. Performance and presence, unified.",
    img: industrial,
  },
  {
    name: "Workplace",
    href: "/sectors/workplace",
    desc: "Spaces that balance the needs of individuals and teams. Culture made visible through architecture and interior design.",
    img: workplace,
  },
];

export function Verticals() {
  const [active, setActive] = useState(0);
  return (
    <section className="verticals-section">
      <div className="verticals-left">
        <div className="verticals-names">
          {items.map((it, i) => (
            <button
              key={it.name}
              className={`v-name${i === active ? " active" : ""}`}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              type="button"
              data-hover
            >
              {it.name}
            </button>
          ))}
        </div>
        <div className="verticals-center">
          {items.map((it, i) => (
            <div key={it.name} className={`v-desc${i === active ? " visible" : ""}`}>
              <div className="v-desc-label">({String(i + 1).padStart(2, "0")})</div>
              <p className="v-desc-text">{it.desc}</p>
              <a className="v-desc-btn" href={it.href} data-hover>
                Explore {it.name} →
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="v-image-panel">
        {items.map((it, i) => (
          <img
            key={it.name}
            src={it.img}
            alt={`${it.name} architecture`}
            className={i === active ? "active" : ""}
            width={1200}
            height={1500}
            loading={i === 0 ? "eager" : "lazy"}
          />
        ))}
      </div>
    </section>
  );
}
