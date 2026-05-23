import { useState } from "react";
import story from "@/assets/nav-story.jpg";
import work from "@/assets/nav-work.jpg";
import team from "@/assets/nav-team.jpg";
import contact from "@/assets/nav-contact.jpg";

const links = [
  { label: "Our Story", href: "/studio", img: story },
  { label: "Our Work", href: "/works", img: work },
  { label: "Our Team", href: "/studio/team", img: team },
  { label: "Get in Touch", href: "/contact", img: contact },
];

export function HoverImageNav() {
  const [active, setActive] = useState(0);
  return (
    <section
      className="hover-nav-section"
      onMouseLeave={() => setActive(0)}
    >
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
