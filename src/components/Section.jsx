import { motion } from "framer-motion";

// Shared scroll-reveal wrapper with kicker + title header.
export default function Section({ id, kicker, title, children, className = "" }) {
  return (
    <section id={id} className={`relative mx-auto max-w-6xl px-5 py-24 sm:py-32 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {kicker && (
          <p className="mb-4 flex items-center gap-3 font-pixel text-[10px] uppercase tracking-widest text-neon">
            <span aria-hidden="true" className="h-px w-8 bg-neon/60" />
            {kicker}
          </p>
        )}
        {title && (
          <h2 className="mb-12 max-w-2xl text-balance text-3xl font-bold leading-tight tracking-tight text-ink sm:text-5xl">
            {title}
          </h2>
        )}
        {children}
      </motion.div>
    </section>
  );
}
