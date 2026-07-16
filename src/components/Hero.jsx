import { motion, useReducedMotion } from "framer-motion";
import { Gamepad2, ImageIcon } from "lucide-react";
import StarField from "./StarField.jsx";
import { site, links } from "../data/content.js";
import heroGif from "../assets/GifPrincipio.gif";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 1.9 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};
const letters = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 2.0 } },
};
const letter = {
  hidden: { opacity: 0, y: 26, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden">
      <StarField />

      {/* GIF full-bleed. Mobile: bottom block flush with the bottom and side
          edges, text above. Desktop: right side flush with top/bottom/right.
          Slow opening-shot zoom, light gradients so the art stays visible. */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, delay: 1.8, ease: "easeOut" }}
        className="absolute inset-x-0 bottom-0 h-[45vh] overflow-hidden lg:left-auto lg:right-0 lg:top-0 lg:h-auto lg:w-[58%]"
      >
        <motion.img
          src={heroGif}
          alt=""
          initial={{ scale: reduce ? 1 : 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 3.2, delay: 1.8, ease: [0.22, 1, 0.36, 1] }}
          className="pixelated h-full w-full object-cover"
        />
        {/* Mobile: fade only the top of the gif into the page */}
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-void to-transparent lg:hidden" />
        {/* Desktop: tight side fade towards the text */}
        <div className="absolute inset-0 hidden lg:block lg:bg-gradient-to-r lg:from-void lg:via-void/15 lg:to-transparent" />
        <div className="absolute inset-x-0 bottom-0 hidden h-24 bg-gradient-to-t from-void/90 to-transparent lg:block" />
      </motion.div>

      {/* Cinematic viewfinder frame */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.6 }}
        className="pointer-events-none absolute inset-x-5 bottom-5 top-24 z-10 sm:inset-x-8 sm:bottom-8"
      >
        <span className="absolute left-0 top-0 h-6 w-6 border-l border-t border-neon/30" />
        <span className="absolute right-0 top-0 h-6 w-6 border-r border-t border-neon/30" />
        <span className="absolute bottom-0 left-0 h-6 w-6 border-b border-l border-neon/30" />
        <span className="absolute bottom-0 right-0 h-6 w-6 border-b border-r border-neon/30" />
      </motion.div>

      {/* Neon horizon glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-neon-deep/20 to-transparent"
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-[48vh] pt-28 lg:py-0">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex max-w-xl flex-col items-start text-left"
        >
          <motion.p
            variants={item}
            className="mb-6 flex items-center gap-3 font-pixel text-[9px] tracking-widest text-neon"
          >
            <span aria-hidden="true" className="h-px w-8 bg-neon/60" />
            PIXEL ART · GAME DEV · ANIMATION
          </motion.p>

          {/* Name revealed letter by letter, with an occasional CRT glitch */}
          <motion.h1
            variants={letters}
            aria-label={site.name}
            className="hero-glitch font-pixel text-3xl leading-relaxed text-ink neon-text sm:text-5xl md:text-6xl"
          >
            {site.name.split("").map((ch, i) => (
              <motion.span key={i} variants={letter} aria-hidden="true" className="inline-block">
                {ch}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p variants={item} className="mt-6 text-xl font-light text-muted sm:text-2xl">
            {site.tagline}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:gap-4"
          >
            <a
              href="#pixel-art"
              className="group flex items-center justify-center gap-2 rounded-lg bg-neon px-6 py-3 font-semibold text-void shadow-neon transition-transform duration-200 hover:scale-105"
            >
              <ImageIcon size={18} className="transition-transform group-hover:-rotate-6" />
              View Portfolio
            </a>
            <a
              href={links.steam}
              target="_blank"
              rel="noreferrer"
              className="glass flex items-center justify-center gap-2 rounded-lg px-6 py-3 font-semibold text-ink transition-all duration-200 hover:border-neon/50 hover:text-neon"
            >
              <Gamepad2 size={18} />
              Play Hellshot
            </a>
          </motion.div>

          <motion.p
            variants={item}
            className="mt-10 flex items-center gap-3 font-pixel text-[8px] tracking-widest text-muted"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neon opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-neon" />
            </span>
            OPEN FOR COMMISSIONS
          </motion.p>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        aria-label="Scroll to About"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 3 }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-muted transition-colors hover:text-neon"
      >
        <span className="font-pixel text-[8px] tracking-widest">SCROLL</span>
        <motion.span
          className="block h-10 w-px bg-gradient-to-b from-neon/80 to-transparent"
          style={{ transformOrigin: "top" }}
          animate={reduce ? {} : { scaleY: [0, 1, 1], opacity: [0, 1, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.a>
    </section>
  );
}
