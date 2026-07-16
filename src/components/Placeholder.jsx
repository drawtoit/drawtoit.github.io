// Deterministic pixel-art placeholder. Replace by setting `src`
// on the item in src/data/content.js — this only renders while src is null.
const PALETTE = ["#0b1424", "#101c33", "#16294a", "#1f3d69", "#2a5c93", "#38e1ff"];
const N = 10;

function mulberry32(seed) {
  let a = seed;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export default function Placeholder({ seed = 1, className = "" }) {
  const rand = mulberry32(seed);
  const cells = [];
  for (let y = 0; y < N; y++) {
    for (let x = 0; x < N; x++) {
      // Bias toward dark tones so neon pixels stay rare accents.
      const r = rand();
      const idx = r > 0.93 ? 5 : Math.floor(r * 5);
      cells.push(
        <rect key={`${x}-${y}`} x={x} y={y} width="1.05" height="1.05" fill={PALETTE[idx]} />
      );
    }
  }
  return (
    <svg
      viewBox={`0 0 ${N} ${N}`}
      preserveAspectRatio="none"
      shapeRendering="crispEdges"
      className={`h-full w-full ${className}`}
      aria-hidden="true"
    >
      {cells}
    </svg>
  );
}
