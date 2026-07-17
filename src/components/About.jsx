import Section from "./Section.jsx";
import Placeholder from "./Placeholder.jsx";
import { about } from "../data/content.js";

// Editorial layout: standard section header, then portrait (left, offset neon
// frame) beside the bio, with the stats row anchoring the full width below.
export default function About() {
  return (
    <Section id="about" kicker={about.kicker} title={about.title}>
      <div className="grid items-center gap-10 md:grid-cols-[280px_1fr] lg:grid-cols-[320px_1fr] lg:gap-14">
        {/* Portrait with an offset frame behind it for depth */}
        <div className="relative mx-auto w-56 sm:w-64 md:w-full">
          <div
            aria-hidden="true"
            className="absolute left-3 top-3 h-full w-full rounded-2xl border border-neon/25"
          />
          <div className="glass relative overflow-hidden rounded-2xl shadow-neon-sm">
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

        {/* Bio: lead paragraph carries more weight than the rest */}
        <div>
          {about.paragraphs.map((p, i) => (
            <p
              key={i}
              className={
                i === 0
                  ? "mb-5 text-lg leading-relaxed text-ink sm:text-xl"
                  : "mb-5 text-[17px] leading-relaxed text-muted"
              }
            >
              {p}
            </p>
          ))}
        </div>
      </div>

      {/* Stats anchor the section across the full width */}
      <div className="mt-12 grid grid-cols-3 gap-3 sm:gap-4">
        {about.stats.map((s) => (
          <div
            key={s.label}
            className="glass rounded-xl p-4 text-center transition-all duration-300 hover:border-neon/40 hover:shadow-neon-sm sm:p-6"
          >
            <p className="font-pixel text-xl text-neon neon-text sm:text-2xl">{s.value}</p>
            <p className="mt-3 text-xs uppercase tracking-wider text-muted">{s.label}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
