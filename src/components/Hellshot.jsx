import { motion } from "framer-motion";
import { Crosshair, ExternalLink, Palette, Skull, Zap } from "lucide-react";
import Section from "./Section.jsx";
import Placeholder from "./Placeholder.jsx";
import { hellshot } from "../data/content.js";

const ICONS = { Crosshair, Skull, Zap, Palette };

function Media({ img, className = "" }) {
  return img.src ? (
    <img src={img.src} alt={img.alt} loading="lazy" className={`pixelated h-full w-full object-cover ${className}`} />
  ) : (
    <Placeholder seed={img.seed} className={className} />
  );
}

export default function Hellshot() {
  return (
    <Section id="hellshot" kicker={hellshot.kicker} title={null}>
      <div className="glass overflow-hidden rounded-3xl shadow-neon-sm">
        {/* Cover */}
        <motion.div
          className="relative aspect-video overflow-hidden sm:aspect-[21/9]"
          initial={{ scale: 1.06, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Media img={hellshot.cover} />
          <div className="absolute inset-0 bg-gradient-to-t from-void via-void/30 to-transparent" />
          <h3 className="absolute bottom-6 left-6 font-pixel text-2xl text-ink neon-text sm:bottom-10 sm:left-10 sm:text-4xl">
            {hellshot.title}
          </h3>
        </motion.div>

        <div className="grid gap-10 p-6 sm:p-10 md:grid-cols-[1.3fr_1fr]">
          <div>
            <p className="text-[17px] leading-relaxed text-muted">{hellshot.description}</p>
            <a
              href={hellshot.steamUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-neon px-6 py-3 font-semibold text-void shadow-neon transition-transform duration-200 hover:scale-105"
            >
              View on Steam
              <ExternalLink size={16} />
            </a>
          </div>
          <ul className="space-y-4">
            {hellshot.features.map((f) => {
              const Icon = ICONS[f.icon];
              return (
                <li key={f.label} className="flex items-center gap-3 text-sm text-ink">
                  <span className="glass rounded-lg p-2 text-neon">
                    <Icon size={16} />
                  </span>
                  {f.label}
                </li>
              );
            })}
          </ul>
        </div>

        {/* Screenshots */}
        <div className="grid grid-cols-2 gap-4 p-6 pt-0 sm:p-10 sm:pt-0 lg:grid-cols-4">
          {hellshot.screenshots.map((s) => (
            <motion.div
              key={s.seed}
              className="aspect-video overflow-hidden rounded-xl border border-white/10"
              whileHover={{ scale: 1.04, borderColor: "rgba(56,225,255,0.5)" }}
              transition={{ duration: 0.2 }}
            >
              <Media img={s} />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
