import Section from "./Section.jsx";
import Placeholder from "./Placeholder.jsx";
import { about } from "../data/content.js";

export default function About() {
  return (
    <Section id="about" kicker={about.kicker} title={about.title}>
      <div className="grid items-start gap-10 md:grid-cols-[1.4fr_1fr]">
        <div>
          {about.paragraphs.map((p, i) => (
            <p key={i} className="mb-5 text-[17px] leading-relaxed text-muted">
              {p}
            </p>
          ))}
          <div className="mt-10 grid grid-cols-3 gap-3 sm:gap-4">
            {about.stats.map((s) => (
              <div
                key={s.label}
                className="glass rounded-xl p-4 text-center transition-all duration-300 hover:border-neon/40 hover:shadow-neon-sm sm:p-5"
              >
                <p className="font-pixel text-xl text-neon neon-text">{s.value}</p>
                <p className="mt-3 text-xs uppercase tracking-wider text-muted">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Portrait / avatar — set about.portrait.src in content.js to replace */}
        <div className="glass overflow-hidden rounded-2xl border-white/10 shadow-neon-sm">
          <div className="aspect-square">
            {about.portrait.src ? (
              <img
                src={about.portrait.src}
                alt={about.portrait.alt}
                loading="lazy"
                className="pixelated h-full w-full object-cover"
              />
            ) : (
              <Placeholder seed={about.portrait.seed} />
            )}
          </div>
        </div>
      </div>
    </Section>
  );
}
