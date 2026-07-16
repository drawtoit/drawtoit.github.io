import { site } from "../data/content.js";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 text-center">
      <p className="font-pixel text-xs text-neon neon-text">{site.name}</p>
      <p className="mt-4 font-pixel text-[9px] tracking-widest text-muted">
        © {new Date().getFullYear()} — MADE PIXEL BY PIXEL
      </p>
    </footer>
  );
}
