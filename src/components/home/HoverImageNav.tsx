import { useState } from "react";
import story from "@/assets/idl-home-hero-mansion.png";
import work from "@/assets/idl-institutional-facade.png";
import team from "@/assets/idl-workplace-studio.png";
import awards from "@/assets/idl-retail-boutique.png";

const links = [
  { label: "Studio", href: "/studio/about", img: story },
  { label: "Projects", href: "/projects", img: work },
  { label: "News", href: "/news", img: awards },
  { label: "Contact", href: "/contact", img: team },
];

export function HoverImageNav() {
  const [active, setActive] = useState(0);
  return (
    <section className="hover-nav-section" onMouseLeave={() => setActive(0)}>
      {links.map((l, i) => (
        <img
          key={l.label}
          src={l.img}
          alt=""
          aria-hidden
          className={`hn-img${i === active ? " active" : ""}`}
          width={1600}
          height={1000}
          loading="lazy"
        />
      ))}
      <div className="hover-nav-content">
        <div className="hn-label">Interarch Design Labs</div>
        {links.map((l, i) => (
          <a
            key={l.label}
            href={l.href}
            className={`hn-link${i === active ? " active" : ""}`}
            onMouseEnter={() => setActive(i)}
            onFocus={() => setActive(i)}
            data-hover
          >
            {l.label}
          </a>
        ))}
      </div>
    </section>
  );
}
