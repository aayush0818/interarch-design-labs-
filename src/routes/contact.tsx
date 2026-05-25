import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Header } from "@/components/home/Header";
import { CustomCursor } from "@/components/home/CustomCursor";
import skyline from "@/assets/skyline-sketch.png";

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
const GREETING = "Dear IDL,";

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [typed, setTyped] = useState("");
  const today = new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "long", year: "numeric" });

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      i++;
      setTyped(GREETING.slice(0, i));
      if (i >= GREETING.length) clearInterval(id);
    }, 70);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <CustomCursor />
      <Header />
      <main className="idl-letter">
        <section className="idl-letter-paper">
          <div className="idl-letter-stamp">{today}</div>
          <h1 className="idl-letter-greeting">
            {typed}
            <span className="idl-letter-caret" />
          </h1>
          {sent ? (
            <motion.div
              className="idl-letter-thanks"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
            >
              <p>Thank you. The studio will reply with care.</p>
              <p className="idl-letter-sign">— IDL</p>
            </motion.div>
          ) : (
            <motion.form
              className="idl-letter-form"
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.12, delayChildren: 0.6 } } }}
            >
              {[
                ["My name is", "name", "text", "Your name"],
                ["I can be reached at", "email", "email", "you@studio.com"],
                ["I'd like to talk about", "topic", "text", "A home, an office, a hotel…"],
              ].map(([prefix, n, t, ph]) => (
                <motion.label
                  key={n as string}
                  className="idl-letter-line"
                  variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
                  transition={{ duration: 0.6, ease: EASE }}
                >
                  <span>{prefix}</span>
                  <input type={t as string} name={n as string} placeholder={ph as string} required />
                  <em>.</em>
                </motion.label>
              ))}
              <motion.label
                className="idl-letter-block"
                variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.6, ease: EASE }}
              >
                <span>More about the project —</span>
                <textarea rows={4} required placeholder="Site, scale, timeline, anything that helps us listen." />
              </motion.label>
              <motion.div
                className="idl-letter-actions"
                variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
                transition={{ duration: 0.6, ease: EASE }}
              >
                <span className="idl-letter-sign">— Yours,</span>
                <button type="submit" data-hover>Send the letter →</button>
              </motion.div>
            </motion.form>
          )}
        </section>
        <aside className="idl-letter-aside">
          <span className="idl-eyebrow-line">— Studio</span>
          <h2>Interarch<br />Design Labs</h2>
          <p>Mumbai &middot; Ahmedabad<br />Projects across India, the Middle East &amp; Africa.</p>
          <a href="mailto:hello@interarchlabs.com" data-hover className="idl-letter-mail">hello@interarchlabs.com</a>
          <img src={skyline} alt="Skyline sketch" className="idl-letter-skyline" />
          <p className="idl-letter-sig">— A studio that listens first.</p>
        </aside>
      </main>
    </>
  );
}
