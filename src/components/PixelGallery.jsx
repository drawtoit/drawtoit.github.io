import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2, Volume2, VolumeX, X } from "lucide-react";
import Section from "./Section.jsx";
import Placeholder from "./Placeholder.jsx";
import { pixelArt, pixelArtCategories } from "../data/content.js";

const FILTERS = ["All", ...pixelArtCategories];

const DEFAULT_VOLUME = 0.35;

function Media({ item, className = "", muted = true, onAutoplayBlocked }) {
  if (item.video) {
    return (
      <video
        ref={(el) => {
          if (!el) return;
          el.muted = muted;
          el.volume = item.volume ?? DEFAULT_VOLUME;
          if (!muted) el.play?.().catch(() => onAutoplayBlocked?.());
        }}
        src={item.video}
        autoPlay
        muted
        loop
        playsInline
        aria-label={item.title}
        className={`h-full w-full object-cover ${className}`}
      />
    );
  }
  return item.src ? (
    <img
      src={item.src}
      alt={item.title}
      loading="lazy"
      className={`pixelated h-full w-full object-cover ${className}`}
    />
  ) : (
    <Placeholder seed={item.seed} className={className} />
  );
}

function ratioParts(ratio) {
  if (ratio === "aspect-square") return [1, 1];
  if (ratio === "aspect-video") return [16, 9];
  return ratio.slice(8, -1).split("/").map(Number);
}

export default function PixelGallery() {
  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState(null);
  const [muted, setMuted] = useState(false);

  const shown = filter === "All" ? pixelArt : pixelArt.filter((it) => it.category === filter);
  const item = active !== null ? shown[active] : null;

  const changeFilter = (f) => {
    setActive(null);
    setFilter(f);
  };

  useEffect(() => {
    if (active === null) {
      setMuted(false);
      return;
    }
    const onKey = (e) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") setActive((i) => (i + 1) % shown.length);
      if (e.key === "ArrowLeft") setActive((i) => (i - 1 + shown.length) % shown.length);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active, shown.length]);

  return (
    <Section id="pixel-art" kicker="Gallery" title="Pixel art">
      <div className="mb-8 flex flex-wrap gap-2">
        {FILTERS.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => changeFilter(f)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-200 ${
              filter === f
                ? "border-neon bg-neon/10 text-neon"
                : "border-white/10 text-muted hover:border-neon/40 hover:text-ink"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div key={filter} className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {shown.map((it, i) => (
          <motion.figure
            key={it.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: "easeOut", delay: (i % 3) * 0.08 }}
            className="group relative mb-4 break-inside-avoid overflow-hidden rounded-2xl border border-white/10 transition-all duration-300 hover:border-neon/40 hover:shadow-neon-sm"
          >
            <button
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Ver ${it.title} ampliado`}
              className="block w-full text-left"
            >
              <motion.div layoutId={`pixel-${it.id}`} className={it.ratio}>
                <Media
                  item={it}
                  className="transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
              </motion.div>
              <span className="pointer-events-none absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-void/90 via-transparent to-transparent p-4 opacity-100 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100">
                <span className="translate-y-0 font-semibold text-ink transition-transform duration-300 md:translate-y-2 md:group-hover:translate-y-0">
                  {it.title}
                </span>
                <span className="translate-y-0 font-pixel text-[9px] uppercase tracking-widest text-neon transition-transform duration-300 md:translate-y-2 md:group-hover:translate-y-0">
                  {it.tag}
                </span>
              </span>
              <span className="pointer-events-none absolute right-3 top-3 rounded-lg bg-void/60 p-2 text-neon opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
                <Maximize2 size={14} />
              </span>
            </button>
          </motion.figure>
        ))}
      </div>

      <AnimatePresence>
        {item && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-10"
            role="dialog"
            aria-modal="true"
            aria-label={item.title}
          >
            <div
              className="absolute inset-0 bg-void/90 backdrop-blur-md"
              onClick={() => setActive(null)}
            />

            <figure className="relative z-10 flex max-h-full flex-col items-center gap-4 overflow-y-auto">
              <motion.div
                layoutId={`pixel-${item.id}`}
                className="shrink-0 overflow-hidden rounded-2xl border border-neon/30 shadow-neon"
                style={(() => {
                  const [w, h] = ratioParts(item.ratio);
                  return {
                    aspectRatio: `${w} / ${h}`,
                    width: `min(92vw, 48rem, calc(62vh * ${w} / ${h}))`,
                  };
                })()}
              >
                <Media
                  item={item}
                  muted={muted}
                  onAutoplayBlocked={() => setMuted(true)}
                />
              </motion.div>

              <figcaption className="w-full max-w-2xl px-1 pb-2">
                <div className="flex items-end justify-between gap-4">
                  <span>
                    <span className="block font-semibold text-ink">{item.title}</span>
                    <span className="mt-1 block font-pixel text-[9px] uppercase tracking-widest text-neon">
                      {item.tag}
                      {item.credit && <span className="text-muted"> · {item.credit}</span>}
                    </span>
                  </span>
                  <span className="flex shrink-0 items-center gap-3">
                    {item.sound && (
                      <button
                        type="button"
                        onClick={() => setMuted((m) => !m)}
                        aria-label={muted ? "Activar sonido" : "Silenciar"}
                        className="rounded-full border border-white/15 p-2 text-muted transition-colors hover:border-neon/50 hover:text-neon"
                      >
                        {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                      </button>
                    )}
                    <span className="font-pixel text-[9px] text-muted">
                      {active + 1} / {shown.length}
                    </span>
                  </span>
                </div>
                {item.description && (
                  <p className="mt-3 text-pretty text-justify text-sm leading-relaxed text-muted hyphens-auto">
                    {item.description}
                  </p>
                )}
              </figcaption>
            </figure>

            <button
              type="button"
              onClick={() => setActive(null)}
              aria-label="Cerrar"
              className="absolute right-4 top-4 z-20 rounded-full border border-white/15 bg-void/60 p-3 text-ink backdrop-blur-sm transition-colors hover:border-neon/50 hover:text-neon"
            >
              <X size={18} />
            </button>
            <button
              type="button"
              onClick={() => setActive((i) => (i - 1 + shown.length) % shown.length)}
              aria-label="Anterior"
              className="absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/15 bg-void/60 p-3 text-ink backdrop-blur-sm transition-colors hover:border-neon/50 hover:text-neon sm:left-6"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={() => setActive((i) => (i + 1) % shown.length)}
              aria-label="Siguiente"
              className="absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/15 bg-void/60 p-3 text-ink backdrop-blur-sm transition-colors hover:border-neon/50 hover:text-neon sm:right-6"
            >
              <ChevronRight size={20} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
