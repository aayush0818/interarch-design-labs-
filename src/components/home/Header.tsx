import { useEffect, useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import logo from "@/assets/idl-logo.png";
import { sectors } from "@/data/siteContent";
import navWork from "@/assets/nav-work.jpg";
import navStory from "@/assets/nav-story.jpg";
import navTeam from "@/assets/nav-team.jpg";
import navContact from "@/assets/nav-contact.jpg";

type SubItem = { label: string; to: string; params?: Record<string, string> };
type NavItem = {
  label: string;
  to: string;
  image: string;
  blurb: string;
  children?: SubItem[];
};

const NAV: NavItem[] = [
  {
    label: "Projects",
    to: "/works",
    image: navWork,
    blurb: "A growing archive of architecture, interiors and research built across India.",
  },
  {
    label: "Expertise",
    to: "/sectors",
    image: navStory,
    blurb: "Six sectors, one architectural language — measured, material, daylit.",
    children: sectors.map((s) => ({
      label: s.name,
      to: "/sectors/$sector",
      params: { sector: s.slug },
    })),
  },
  {
    label: "Practice",
    to: "/studio",
    image: navStory,
    blurb: "How the studio thinks, draws, and brings buildings into the world.",
    children: [
      { label: "Overview", to: "/studio" },
      { label: "History", to: "/studio/history" },
      { label: "Process", to: "/process" },
      { label: "Journal", to: "/journal" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    label: "Studios",
    to: "/studio",
    image: navContact,
    blurb: "Working between Mumbai, Ahmedabad and site — one continuous practice.",
  },
  {
    label: "Specialists",
    to: "/studio/team",
    image: navTeam,
    blurb: "Architects, interior designers and researchers shaping every project.",
  },
];

const EASE = [0.22, 1, 0.36, 1] as const;

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

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const close = () => {
    setOpen(false);
    setActiveIdx(null);
  };

  const active = useMemo(() => (activeIdx !== null ? NAV[activeIdx] : null), [activeIdx]);
  const headerClass = `idl-header${scrolled ? " is-scrolled" : ""}${open ? " is-menu" : ""}`;

  return (
    <>
      <header className={headerClass}>
        <Link to="/" className="idl-logo" aria-label="Interarch Design Labs — Home" onClick={close}>
          <img src={logo} alt="Interarch Design Labs" className="idl-logo-mark" />
        </Link>

        <nav className="idl-topnav" aria-label="Primary">
          {NAV.map((item) => (
            <Link key={item.label} to={item.to} className="idl-topnav-link" data-hover>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="idl-header-right">
          <button
            className="idl-menu-btn"
            data-hover
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="idl-mega-menu"
          >
            <span className="idl-menu-btn-label">{open ? "Close" : "Menu"}</span>
            <span className="idl-menu-btn-icon" aria-hidden>
              <span /><span />
            </span>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="idl-mega-menu"
            className="idl-mega"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.55, ease: EASE }}
            role="dialog"
            aria-modal="true"
          >
            {/* LEFT — editorial panel */}
            <div className="idl-mega-left">
              <AnimatePresence mode="wait">
                {active ? (
                  <motion.div
                    key={active.label}
                    className="idl-mega-left-inner"
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5, ease: EASE }}
                  >
                    <div className="idl-mega-eyebrow">— {String((activeIdx ?? 0) + 1).padStart(2, "0")} / {String(NAV.length).padStart(2, "0")}</div>
                    <h2 className="idl-mega-title">{active.label}</h2>
                    <p className="idl-mega-blurb">{active.blurb}</p>
                    <div className="idl-mega-image">
                      <img src={active.image} alt="" width={1200} height={1500} />
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="idle"
                    className="idl-mega-left-inner"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, ease: EASE }}
                  >
                    <div className="idl-mega-eyebrow">— Index</div>
                    <h2 className="idl-mega-title">Interarch<br />Design Labs</h2>
                    <p className="idl-mega-blurb">Architecture, interiors and research — measured, material, daylit. Choose a section to begin.</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* RIGHT — nav + submenu */}
            <div className="idl-mega-right">
              <div className="idl-mega-eyebrow idl-mega-eyebrow--right">Navigation</div>
              <ul className="idl-mega-nav">
                {NAV.map((item, i) => {
                  const isActive = i === activeIdx;
                  const hasKids = !!item.children?.length;
                  return (
                    <motion.li
                      key={item.label}
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, ease: EASE, delay: 0.15 + i * 0.06 }}
                      className={`idl-mega-nav-row${isActive ? " is-active" : ""}`}
                    >
                      {hasKids ? (
                        <button
                          type="button"
                          className="idl-mega-nav-link"
                          data-hover
                          aria-expanded={isActive}
                          onClick={() => setActiveIdx(isActive ? null : i)}
                        >
                          <span className="idl-mega-nav-index">{String(i + 1).padStart(2, "0")}</span>
                          <span className="idl-mega-nav-label">{item.label}</span>
                          <span className="idl-mega-nav-caret" aria-hidden>{isActive ? "—" : "+"}</span>
                        </button>
                      ) : (
                        <Link
                          to={item.to}
                          className="idl-mega-nav-link"
                          data-hover
                          onClick={close}
                          onMouseEnter={() => setActiveIdx(i)}
                        >
                          <span className="idl-mega-nav-index">{String(i + 1).padStart(2, "0")}</span>
                          <span className="idl-mega-nav-label">{item.label}</span>
                        </Link>
                      )}
                      <AnimatePresence>
                        {isActive && hasKids ? (
                          <motion.ul
                            className="idl-mega-sub"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: EASE }}
                          >
                            {item.children!.map((c, ci) => (
                              <motion.li
                                key={c.label}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.35, ease: EASE, delay: ci * 0.05 }}
                              >
                                <Link
                                  to={c.to}
                                  params={c.params as never}
                                  className="idl-mega-sub-link"
                                  data-hover
                                  onClick={close}
                                >
                                  {c.label}
                                </Link>
                              </motion.li>
                            ))}
                          </motion.ul>
                        ) : null}
                      </AnimatePresence>
                    </motion.li>
                  );
                })}
              </ul>

              <div className="idl-mega-foot">
                <span>Interarch Design Labs</span>
                <span>© {new Date().getFullYear()}</span>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
