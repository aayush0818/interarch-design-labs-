import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`idl-header${scrolled ? " scrolled" : ""}`}>
      <Link to="/" className="idl-logo">
        Interarch Design Labs
      </Link>
      <button className="idl-menu-btn" data-hover type="button">
        Menu
      </button>
    </header>
  );
}
