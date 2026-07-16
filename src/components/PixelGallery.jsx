import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import Section from "./Section.jsx";
import Placeholder from "./Placeholder.jsx";
import { pixelArt } from "../data/content.js";

// Swap in your own art in src/data/content.js: drop the file in src/assets/
// and set `src: new URL("../assets/my-art.png", import.meta.url).href`.
function Media({ item, className = "" }) {
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

// "aspect-[3/4]" → [3, 4]; "aspect-square" → [1, 1]
function ratioParts(ratio) {
  if (ratio === "aspect-square") return [1, 1];
  return ratio.slice(8, -1).split("/").map(Number);
}

export default function PixelGallery() {
  const [active, setActive] = useState(null);
  const item = active !== null ? pixelArt[active] : null;

  useEffect(() => {
    if (active === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") setActive((i) => (i + 1) % pixelArt.length);
      if (e.key === "ArrowLeft") setActive((i) => (i - 1 + pixelArt.length) % pixelArt.length);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);

  return (
    <Section id="pixel-art" kicker="Gallery" title="Pixel art">
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {pixelArt.map((it, i) => (
          <motion.figure
            key={it.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
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
                  className="transition-transform duration-700 ease-out group-hover:scale-110"
                />
              </motion.div>
              {/* Caption always visible on touch, hover-reveal on desktop */}
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

      {/* Lightbox */}
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

            <motion.figure
              layoutId={`pixel-${item.id}`}
              className="relative z-10 overflow-hidden rounded-2xl border border-neon/30 shadow-neon"
              style={(() => {
                const [w, h] = ratioParts(item.ratio);
                return {
                  aspectRatio: `${w} / ${h}`,
                  width: `min(92vw, 56rem, calc(78vh * ${w} / ${h}))`,
                };
              })()}
            >
              <Media item={item} />
              <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-void/95 via-void/40 to-transparent p-5">
                <span>
                  <span className="block font-semibold text-ink">{item.title}</span>
                  <span className="block font-pixel text-[9px] uppercase tracking-widest text-neon">
                    {item.tag}
                  </span>
                </span>
                <span className="font-pixel text-[9px] text-muted">
                  {active + 1} / {pixelArt.length}
                </span>
              </figcaption>
            </motion.figure>

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
              onClick={() => setActive((i) => (i - 1 + pixelArt.length) % pixelArt.length)}
              aria-label="Anterior"
              className="absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/15 bg-void/60 p-3 text-ink backdrop-blur-sm transition-colors hover:border-neon/50 hover:text-neon sm:left-6"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={() => setActive((i) => (i + 1) % pixelArt.length)}
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
