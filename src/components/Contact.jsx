import { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, Check, Copy, Gamepad2, Instagram, Mail } from "lucide-react";
import Section from "./Section.jsx";
import { contact } from "../data/content.js";

const ICONS = { Instagram, Gamepad2, Briefcase };

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <Section id="contact" kicker={contact.kicker} title={contact.title}>
      <p className="-mt-4 mb-12 max-w-xl text-[17px] leading-relaxed text-muted">{contact.blurb}</p>

      <div className="grid grid-cols-3 gap-3 sm:gap-4">
        {contact.channels.map((c, i) => {
          const Icon = ICONS[c.icon];
          return (
            <motion.a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.06 }}
              whileHover={{ y: -4 }}
              className="glass flex flex-col items-center gap-3 rounded-2xl p-4 text-center transition-all duration-300 hover:border-neon/50 hover:shadow-neon-sm sm:p-6"
            >
              <Icon size={22} className="text-neon" />
              <span className="text-sm font-semibold text-ink">{c.label}</span>
            </motion.a>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        className="glass mt-4 flex flex-col items-center justify-between gap-4 rounded-2xl p-5 sm:flex-row sm:p-6"
      >
        <span className="flex min-w-0 items-center gap-3">
          <Mail size={22} className="shrink-0 text-neon" />
          <a
            href={`mailto:${contact.email}`}
            className="truncate text-sm font-semibold text-ink transition-colors hover:text-neon sm:text-base"
          >
            {contact.email}
          </a>
        </span>
        <button
          type="button"
          onClick={copy}
          aria-label="Copiar dirección de correo"
          className={`flex shrink-0 items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition-all duration-200 ${
            copied
              ? "border-neon bg-neon/10 text-neon"
              : "border-white/15 text-muted hover:border-neon/50 hover:text-neon"
          }`}
        >
          {copied ? <Check size={16} /> : <Copy size={16} />}
          {copied ? "Copied" : "Copy"}
        </button>
      </motion.div>
    </Section>
  );
}
