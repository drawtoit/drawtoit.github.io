import { motion } from "framer-motion";
import Section from "./Section.jsx";
import Placeholder from "./Placeholder.jsx";
import { pixelArt } from "../data/content.js";

export default function PixelGallery() {
  return (
    <Section id="pixel-art" kicker="Gallery" title="Pixel art">
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {pixelArt.map((item, i) => (
          <motion.figure
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            className="group relative mb-4 break-inside-avoid overflow-hidden rounded-2xl border border-white/10"
          >
            <div className={`${item.ratio} transition-transform duration-500 group-hover:scale-110`}>
              {item.src ? (
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  className="pixelated h-full w-full object-cover"
                />
              ) : (
                <Placeholder seed={item.seed} />
              )}
            </div>
            {/* Caption always visible on touch, hover-reveal on desktop */}
            <figcaption className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-void/90 via-transparent to-transparent p-4 opacity-100 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100">
              <p className="font-semibold text-ink">{item.title}</p>
              <p className="font-pixel text-[9px] uppercase tracking-widest text-neon">{item.tag}</p>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </Section>
  );
}
