import { motion } from "framer-motion";
import { Briefcase, Gamepad2, Instagram } from "lucide-react";
import Section from "./Section.jsx";
import { contact } from "../data/content.js";

const ICONS = { Instagram, Gamepad2, Briefcase };

export default function Contact() {
  return (
    <Section id="contact" kicker={contact.kicker} title={contact.title}>
      <p className="-mt-4 mb-12 max-w-xl text-[17px] leading-relaxed text-muted">{contact.blurb}</p>
      <div className="grid gap-3 sm:grid-cols-3 sm:gap-4">
        {contact.channels.map((c, i) => {
          const Icon = ICONS[c.icon];
          return (
            <motion.a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("mailto:") ? undefined : "_blank"}
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
    </Section>
  );
}
