import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/home/PageShell";
import { pageImages } from "@/data/siteContent";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [
    { title: "Contact — Interarch Design Labs" },
    { name: "description", content: "Wherever you are, we design for you. Start a conversation with Interarch Design Labs." },
    { property: "og:title", content: "Contact — Interarch Design Labs" },
    { property: "og:description", content: "Projects across India, the Middle East and Africa — we'd love to shape your next space." },
  ] }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <PageShell footer={false}>
      <section className="contact-page">
        <aside>
          <span className="accent-square" />
          <h1 style={{ fontSize: 'clamp(28px, 3vw, 44px)', lineHeight: 1.1, margin: '8px 0 12px', fontWeight: 300 }}>
            Wherever you are, we design for you.
          </h1>
          <p style={{ opacity: 0.7, maxWidth: 420, marginBottom: 24 }}>
            With projects across India and around the world, we'd love to shape your next space with care, clarity and intent.
          </p>
          <p>Interarch Design Labs<br />Mumbai &amp; Ahmedabad</p>
          <a href="mailto:hello@interarchlabs.com" data-hover>hello@interarchlabs.com</a>
          <img src={pageImages.skyline} alt="Skyline sketch" width={1200} height={220} />
        </aside>
        <section>
          {sent ? (
            <div className="thanks">
              <h1>Thank you. The studio will reply with care.</h1>
              <a className="text-arrow" href="/" data-hover>Return home →</a>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
              <label className="float-field"><input placeholder=" " required /><span>Name</span></label>
              <label className="float-field"><input type="email" placeholder=" " required /><span>Email</span></label>
              <label className="float-field"><input placeholder=" " /><span>Project type</span></label>
              <label className="float-field"><textarea placeholder=" " rows={5} required /><span>Message</span></label>
              <button type="submit" data-hover>Send enquiry</button>
            </form>
          )}
        </section>
      </section>
    </PageShell>
  );
}
