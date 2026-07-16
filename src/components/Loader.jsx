import { motion } from "framer-motion";
import { site } from "../data/content.js";

export default function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-[80] flex flex-col items-center justify-center gap-8 bg-void"
      exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
    >
      <motion.p
        className="font-pixel text-sm text-neon neon-text sm:text-base"
        animate={{ opacity: [1, 0.4, 1] }}
        transition={{ duration: 1.2, repeat: Infinity }}
      >
        {site.name}
      </motion.p>
      <div className="flex gap-1.5" role="progressbar" aria-label="Loading">
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.span
            key={i}
            className="h-3 w-3 bg-neon-deep"
            animate={{ backgroundColor: ["#0e5f75", "#38e1ff", "#0e5f75"] }}
            transition={{ duration: 1, repeat: Infinity, delay: i * 0.1 }}
          />
        ))}
      </div>
      <p className="font-pixel text-[10px] tracking-widest text-muted">LOADING…</p>
    </motion.div>
  );
}
