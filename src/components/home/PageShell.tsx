import { CustomCursor } from "@/components/home/CustomCursor";
import { Footer } from "@/components/home/Footer";
import { Header } from "@/components/home/Header";
import { useReveal } from "@/components/home/useReveal";

type PageShellProps = {
  children: React.ReactNode;
  footer?: boolean;
};

export function PageShell({ children, footer = true }: PageShellProps) {
  useReveal();

  return (
    <>
      <CustomCursor />
      <Header />
      <main className="editorial-page">{children}</main>
      {footer ? <Footer /> : null}
    </>
  );
}

type PageHeroProps = {
  image: string;
  title: string;
  alt: string;
};

export function PageHero({ image, title, alt }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="img-reveal-wrap page-hero-image">
        <div className="img-parallax">
          <img src={image} alt={alt} width={1920} height={1080} loading="eager" />
        </div>
      </div>
      <div className="page-hero-shade" />
      <h1 className="page-hero-title">{title}</h1>
    </section>
  );
}