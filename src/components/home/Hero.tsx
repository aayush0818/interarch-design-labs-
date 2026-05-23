import heroImg from "@/assets/hero.jpg";

export function Hero() {
  return (
    <section className="idl-hero" aria-label="Interarch Design Labs">
      <img
        src={heroImg}
        alt="Architectural project by Interarch Design Labs"
        width={1920}
        height={1280}
        loading="eager"
        fetchPriority="high"
      />
      <div className="idl-hero-vignette" />
      <div className="idl-hero-brand">
        <span className="dot" />
        <span>Interarch Design Labs</span>
      </div>
      <div className="idl-hero-scroll">
        <div>Scroll</div>
        <div className="line" />
      </div>
    </section>
  );
}
