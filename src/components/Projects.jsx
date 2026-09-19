import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Play } from "lucide-react";
import { Media } from "./Placeholder.jsx";
import { projects } from "../data/content.js";

function ProjectCard({ project }) {
  const [active, setActive] = useState(0);
  const media = project.media;

  return (
    <article className="glass overflow-hidden rounded-3xl shadow-neon-sm">
      <div className="p-4 sm:p-5">
        <div className="relative aspect-video overflow-hidden rounded-xl border border-white/10 bg-void">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="h-full w-full"
            >
              {media[active].video ? (
                <video
                  src={media[active].video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  aria-label={media[active].alt}
                  className="h-full w-full object-cover"
                />
              ) : (
                <Media img={media[active]} />
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {media.length > 1 && (
          <div className="mt-2 grid grid-cols-5 gap-2">
            {media.map((m, i) => (
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
        )}

        <div className="mt-4 flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
          <h3 className="text-xl font-bold tracking-tight text-ink">{project.title}</h3>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-neon/25 bg-neon/5 px-3 py-1 text-xs font-medium text-neon"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <p className="mt-2 text-sm leading-relaxed text-muted">{project.description}</p>

        {project.itchUrl && (
          <a
            href={project.itchUrl}
            target="_blank"
            rel="noreferrer"
            className="glass mt-4 inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold text-ink transition-all duration-200 hover:border-neon/50 hover:text-neon"
          >
            <ExternalLink size={16} />
            View on itch.io
          </a>
        )}
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <div className="mt-6 grid gap-6 sm:grid-cols-2">
      {projects.map((p) => (
        <ProjectCard key={p.id} project={p} />
      ))}
    </div>
  );
}
