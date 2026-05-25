import logo from "@/assets/idl-logo.png";

export function Footer() {
  return (
    <footer className="idl-footer">
      <div className="idl-footer-ghost">Interarch Design Labs</div>
      <div className="idl-footer-grid">
        <div className="idl-footer-col">
          <img src={logo} alt="Interarch Design Labs" className="idl-footer-logo" />
          <p>Mumbai &amp; Ahmedabad</p>
          <a href="mailto:hello@interarchlabs.com">hello@interarchlabs.com</a>
        </div>
        <div className="idl-footer-col">
          <nav className="idl-footer-nav">
            <a href="/studio" data-hover>Studio</a>
            <a href="/works" data-hover>Works</a>
            <a href="/sectors" data-hover>Sectors</a>
            <a href="/process" data-hover>Process</a>
            <a href="/journal" data-hover>Journal</a>
            <a href="/contact" data-hover>Contact</a>
          </nav>
        </div>
        <div className="idl-footer-col idl-footer-right">
          <p className="copy">© 2025 Interarch Design Labs</p>
          <p className="tag">Designed with intention.</p>
        </div>
      </div>
    </footer>
  );
}

