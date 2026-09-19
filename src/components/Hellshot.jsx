import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Crosshair, ExternalLink, Palette, Play, Skull, Zap } from "lucide-react";
import Section from "./Section.jsx";
import { Media } from "./Placeholder.jsx";
import Projects from "./Projects.jsx";
import { hellshot } from "../data/content.js";

const ICONS = { Crosshair, Skull, Zap, Palette };

export default function Hellshot() {
  const [active, setActive] = useState(0);
  const current = hellshot.media[active];

  return (
    <Section id="hellshot" kicker={hellshot.kicker} title={null}>
      <div className="glass overflow-hidden rounded-3xl shadow-neon-sm">
        <div className="p-5 sm:p-8 lg:p-10">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-x-6 gap-y-3">
            <h3>
              <img
                src={hellshot.logo}
                alt={hellshot.title}
                className="pixelated h-12 w-auto [filter:drop-shadow(0_0_10px_rgba(56,225,255,0.45))_drop-shadow(0_0_30px_rgba(56,225,255,0.2))] sm:h-16 lg:h-20"
              />
            </h3>
            <div className="flex flex-wrap gap-2 pb-1">
              {hellshot.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-neon/25 bg-neon/5 px-3 py-1 text-xs font-medium text-neon"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.7fr_1fr]">
            <div>
              <div className="relative aspect-video overflow-hidden rounded-xl border border-white/10 bg-void">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="relative h-full w-full"
                  >
                    {current.video ? (
                      <video
                        src={current.video}
                        autoPlay
                        muted={!current.controls}
                        loop={!current.controls}
                        controls={current.controls}
                        playsInline
                        aria-label={current.alt}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <Media img={current} />
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="mt-3 grid grid-cols-6 gap-2">
                {hellshot.media.map((m, i) => (
                  <button
                    key={m.seed}
                    type="button"
                    onClick={() => setActive(i)}
                    aria-label={m.alt}
                    className={`relative aspect-video overflow-hidden rounded-lg border transition-all duration-200 ${
                      active === i
                        ? "border-neon shadow-neon-sm"
                        : "border-white/10 opacity-60 hover:opacity-100"
                    }`}
                  >
                    <Media img={m} />
                    {m.video && (
                      <span className="absolute inset-0 flex items-center justify-center bg-void/40 text-neon">
                        <Play size={16} className="ml-0.5" />
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col">
              <p className="text-[17px] leading-relaxed text-muted">{hellshot.description}</p>

              {hellshot.role && (
                <p className="mt-5 border-l-2 border-neon/40 pl-4 text-[15px] leading-relaxed text-ink">
                  {hellshot.role}
                </p>
              )}

              <ul className="mt-6 space-y-3 border-t border-white/10 pt-6">
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

              <div className="mt-8 flex flex-col gap-3 lg:mt-auto lg:pt-8">
                <a
                  href={hellshot.steamUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 rounded-lg bg-neon px-6 py-3.5 font-semibold text-void shadow-neon transition-transform duration-200 hover:scale-[1.03]"
                >
                  <ExternalLink size={18} />
                  View on Steam
                </a>
                <a
                  href={hellshot.itchUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="glass flex items-center justify-center gap-2 rounded-lg px-6 py-3.5 font-semibold text-ink transition-all duration-200 hover:border-neon/50 hover:text-neon"
                >
                  <ExternalLink size={18} />
                  View on itch.io
                </a>
                <p className="text-center font-pixel text-[8px] tracking-widest text-muted">
                  AVAILABLE ON STEAM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Projects />
    </Section>
  );
}
