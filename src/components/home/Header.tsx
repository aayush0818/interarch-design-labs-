import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import logo from "@/assets/idl-logo.png";

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
      <Link to="/" className="idl-logo" aria-label="Interarch Design Labs — Home">
        <img src={logo} alt="Interarch Design Labs" className="idl-logo-mark" />
      </Link>
      <button className="idl-menu-btn" data-hover type="button">
        Menu
      </button>
    </header>
  );
}

