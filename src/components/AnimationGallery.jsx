import { motion } from "framer-motion";
import { Play } from "lucide-react";
import Section from "./Section.jsx";
import Placeholder from "./Placeholder.jsx";
import { animations } from "../data/content.js";

export default function AnimationGallery() {
  return (
    <Section id="animation" kicker="Motion" title="Animation">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {animations.map((a, i) => (
          <motion.div
            key={a.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            className="group glass overflow-hidden rounded-2xl"
          >
            <div className="relative aspect-video overflow-hidden">
              <div className="h-full w-full transition-transform duration-500 group-hover:scale-110">
                {a.src ? (
                  <img
                    src={a.src}
                    alt={a.title}
                    loading="lazy"
                    className="pixelated h-full w-full object-cover"
                  />
                ) : (
                  <Placeholder seed={a.seed} />
                )}
              </div>
              {!a.src && (
                <span className="absolute inset-0 m-auto flex h-12 w-12 items-center justify-center rounded-full border border-neon/50 bg-void/60 text-neon opacity-80 transition-transform duration-300 group-hover:scale-110">
                  <Play size={18} className="ml-0.5" />
                </span>
              )}
              <span className="absolute right-3 top-3 rounded bg-void/70 px-2 py-1 font-pixel text-[8px] text-neon">
                GIF
              </span>
            </div>
            <div className="flex items-center justify-between p-4">
              <p className="text-sm font-semibold text-ink">{a.title}</p>
              <p className="text-xs text-muted">{a.tag}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
