import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import logo from "@/assets/idl-logo.png";
import { sectors } from "@/data/siteContent";

type NavItem = {
  label: string;
  to: string;
  children?: { label: string; to: string; params?: Record<string, string> }[];
};

const NAV: NavItem[] = [
  { label: "Projects", to: "/works" },
  {
    label: "Sectors",
    to: "/sectors",
    children: sectors.map((s) => ({
      label: s.name,
      to: "/sectors/$sector",
      params: { sector: s.slug },
    })),
  },
  {
    label: "Studio",
    to: "/studio",
    children: [
      { label: "Overview", to: "/studio" },
      { label: "History", to: "/studio/history" },
      { label: "Team", to: "/studio/team" },
    ],
  },
  { label: "Process", to: "/process" },
  { label: "Journal", to: "/journal" },
  { label: "Contact", to: "/contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeAll = () => {
    setOpen(false);
    setActiveIdx(null);
  };

  const activeChildren =
    activeIdx !== null ? NAV[activeIdx]?.children : undefined;

  return (
    <>
      <header className={`idl-header${scrolled || open ? " scrolled" : ""}${open ? " menu-open" : ""}`}>
        <Link to="/" className="idl-logo" aria-label="Interarch Design Labs — Home" onClick={closeAll}>
          <img src={logo} alt="Interarch Design Labs" className="idl-logo-mark" />
        </Link>
        <button
          className="idl-menu-btn"
          data-hover
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
        >
          {open ? "Close" : "Menu"}
        </button>
      </header>

      <div className={`idl-menu-overlay${open ? " open" : ""}`} aria-hidden={!open}>
        <div className={`idl-menu-panel idl-menu-panel--main${activeChildren ? " has-sub" : ""}`}>
          <div className="idl-menu-eyebrow">Navigation</div>
          <nav className="idl-menu-list">
            {NAV.map((item, i) => {
              const isActive = activeIdx === i;
              return (
                <div key={item.label} className="idl-menu-row">
                  {item.children ? (
                    <button
                      type="button"
                      className={`idl-menu-link${isActive ? " active" : ""}`}
                      data-hover
                      onClick={() => setActiveIdx(isActive ? null : i)}
                    >
                      <span>{item.label}</span>
                      <span className="idl-menu-caret">{isActive ? "—" : "+"}</span>
                    </button>
                  ) : (
                    <Link
                      to={item.to}
                      className="idl-menu-link"
                      data-hover
                      onClick={closeAll}
                      onMouseEnter={() => setActiveIdx(null)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              );
            })}
          </nav>
          <div className="idl-menu-foot">
            <span>Interarch Design Labs</span>
            <span>© {new Date().getFullYear()}</span>
          </div>
        </div>

        <div className={`idl-menu-panel idl-menu-panel--sub${activeChildren ? " open" : ""}`}>
          {activeChildren ? (
            <>
              <div className="idl-menu-eyebrow">
                {NAV[activeIdx!].label}
              </div>
              <ul className="idl-menu-sublist">
                {activeChildren.map((c) => (
                  <li key={c.label}>
                    <Link
                      to={c.to}
                      params={c.params as never}
                      className="idl-menu-sublink"
                      data-hover
                      onClick={closeAll}
                    >
                      {c.label}
                    </Link>
                  </li>
                ))}
                <li className="idl-menu-sub-all">
                  <Link
                    to={NAV[activeIdx!].to}
                    className="idl-menu-sublink muted"
                    data-hover
                    onClick={closeAll}
                  >
                    View all →
                  </Link>
                </li>
              </ul>
            </>
          ) : null}
        </div>
      </div>
    </>
  );
}
