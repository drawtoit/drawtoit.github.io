import { useEffect, useRef } from "react";

// Canvas starfield: slow upward drift + twinkle. Static frame when
// the user prefers reduced motion.
export default function StarField({ density = 0.00012 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let stars = [];
    let raf = 0;
    let width = 0;
    let height = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.floor(width * height * density);
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() < 0.85 ? 1 : 2,
        speed: 0.02 + Math.random() * 0.08,
        phase: Math.random() * Math.PI * 2,
        blue: Math.random() < 0.3,
      }));
    };

    const draw = (t) => {
      ctx.clearRect(0, 0, width, height);
      for (const s of stars) {
        const twinkle = reduced ? 0.7 : 0.5 + 0.5 * Math.sin(t * 0.002 + s.phase);
        ctx.globalAlpha = 0.25 + twinkle * 0.6;
        ctx.fillStyle = s.blue ? "#38e1ff" : "#cfe9ff";
        ctx.fillRect(s.x | 0, s.y | 0, s.size, s.size);
        if (!reduced) {
          s.y -= s.speed;
          if (s.y < -2) {
            s.y = height + 2;
            s.x = Math.random() * width;
          }
        }
      }
      ctx.globalAlpha = 1;
      if (!reduced) raf = requestAnimationFrame(draw);
    };

    resize();
    draw(0);
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [density]);

  return <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden="true" />;
}
