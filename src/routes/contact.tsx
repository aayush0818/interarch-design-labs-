import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import { CustomCursor } from "@/components/home/CustomCursor";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [
    { title: "Contact — Interarch Design Labs" },
    { name: "description", content: "Wherever you are, we design for you. Start a conversation with Interarch Design Labs." },
    { property: "og:title", content: "Contact — Interarch Design Labs" },
    { property: "og:description", content: "Projects across India, the Middle East and Africa." },
  ] }),
  component: ContactPage,
});

const EASE = [0.22, 1, 0.36, 1] as const;

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <CustomCursor />
      <Header />
      <main className="idl-contact">
        <div className="idl-contact-form-wrap">
          <span className="idl-eyebrow">— Contact</span>
          <motion.h1
            className="idl-contact-head"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: EASE }}
          >
            Wherever you are,<br />we design for you.
          </motion.h1>
          {sent ? (
            <motion.p
              className="idl-contact-thanks"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
            >
              Thank you. The studio will write back with care.
            </motion.p>
          ) : (
            <motion.form
              className="idl-contact-form"
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.08, delayChildren: 0.3 } } }}
            >
              {[
                { label: "Name", name: "name", type: "text", ph: "Your name" },
                { label: "Email", name: "email", type: "email", ph: "you@studio.com" },
                { label: "Project type", name: "type", type: "text", ph: "Residence, workplace, hospitality…" },
              ].map((f) => (
                <motion.label
                  key={f.name}
                  className="idl-cfield"
                  variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
                  transition={{ duration: 0.7, ease: EASE }}
                >
                  <span>{f.label}</span>
                  <input type={f.type} name={f.name} placeholder={f.ph} required />
                </motion.label>
              ))}
              <motion.label
                className="idl-cfield"
                variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.7, ease: EASE }}
              >
                <span>Message</span>
                <textarea name="message" placeholder="Site, scale, timeline — anything that helps us listen." required />
              </motion.label>
              <motion.button
                type="submit"
                className="idl-contact-submit"
                data-hover
                variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
                transition={{ duration: 0.7, ease: EASE }}
              >
                Send →
              </motion.button>
            </motion.form>
          )}
        </div>
        <aside className="idl-contact-info">
          <h3>Studio</h3>
          <div className="idl-contact-block">
            <strong>Mumbai</strong>
            <p>Interarch Design Labs<br />Mumbai, Maharashtra, India</p>
          </div>
          <div className="idl-contact-block">
            <strong>Ahmedabad</strong>
            <p>Interarch Design Labs<br />Ahmedabad, Gujarat, India</p>
          </div>
          <h3>Contact</h3>
          <div className="idl-contact-block">
            <p><a href="mailto:hello@interarchlabs.com" data-hover>hello@interarchlabs.com</a></p>
            <p style={{ marginTop: 10 }}>Projects across India,<br />the Middle East &amp; Africa.</p>
          </div>
        </aside>
      </main>
      <Footer />
    </>
  );
}
