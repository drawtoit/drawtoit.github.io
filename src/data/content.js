// ─────────────────────────────────────────────────────────────
// EDIT THIS FILE to change all text, links and images.
// To use your own images: drop files in src/assets/ and set
// `src: new URL("../assets/my-file.png", import.meta.url).href`
// (or simply import them at the top and assign).
// While `src` is null, an auto-generated pixel placeholder shows.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: "DRAWTOIT",
  tagline: "Pixel Artist & Indie Game Developer",
};

export const links = {
  instagram: "https://instagram.com/drawtoit",
  // steam = la página del juego; steamProfile = tu página personal (curator)
  steam: "https://store.steampowered.com/app/4232500/Hellshot/",
  steamProfile: "https://store.steampowered.com/curator/45882349",
  fiverr: "https://fiverr.com/drawtoit",
};

export const about = {
  kicker: "About me",
  title: "Crafting worlds, one pixel at a time",
  // Replace with your real biography.
  paragraphs: [
    "I'm a pixel artist and indie game developer passionate about turning tiny squares into living worlds. From character sprites to full environments, I focus on readable silhouettes, bold palettes and animation that feels alive.",
    "Currently building my own games and taking on freelance work — sprites, tilesets, animations and complete art direction for indie projects.",
  ],
  stats: [
    { value: "5+", label: "Years of pixel art" },
    { value: "1", label: "Game on Steam" },
    { value: "∞", label: "Pixels placed" },
  ],
  // Tu retrato/avatar: copia el archivo a src/assets/ y cambia src, p.ej.:
  //   src: new URL("../assets/retrato.png", import.meta.url).href,
  portrait: {
    src: new URL("../assets/Profile.png", import.meta.url).href,
    alt: "DRAWTOIT portrait",
    seed: 3,
  },
};

export const hellshot = {
  kicker: "Featured project",
  title: "HELLSHOT",
  tags: ["Bullet Hell", "Pixel Art", "Action", "Indie"],
  description:
    "A fast-paced bullet-hell where every shot counts. Fight your way through the depths, dodge impossible patterns and take down towering bosses — all rendered in hand-crafted pixel art.",
  features: [
    { icon: "Crosshair", label: "Tight, responsive gunplay" },
    { icon: "Skull", label: "Brutal bullet-hell bosses" },
    { icon: "Zap", label: "Fast runs, high replayability" },
    { icon: "Palette", label: "100% hand-made pixel art" },
  ],
  steamUrl: links.steam,
  logo: new URL("../assets/Logohellshotajunto2.png", import.meta.url).href,
  capsule: new URL("../assets/Capsula.png", import.meta.url).href,
  cover: {
    video: new URL("../assets/CapsuleHellshot.mp4", import.meta.url).href,
    alt: "Hellshot key art",
    seed: 7,
  },
  screenshots: [
    { src: new URL("../assets/Captura1.jpg", import.meta.url).href, alt: "Hellshot screenshot 1", seed: 21 },
    { src: new URL("../assets/Captura2.jpg", import.meta.url).href, alt: "Hellshot screenshot 2", seed: 34 },
    { src: new URL("../assets/Captura3.jpg", import.meta.url).href, alt: "Hellshot screenshot 3", seed: 55 },
    { src: new URL("../assets/Captura4.jpg", import.meta.url).href, alt: "Hellshot screenshot 4", seed: 89 },
  ],
};

// Masonry gallery. `ratio` controls the tile shape — keep the class
// strings literal so Tailwind picks them up.
// Para usar tus imágenes: copia el archivo a src/assets/ y cambia src, p.ej.:
//   src: new URL("../assets/mi-dibujo.png", import.meta.url).href,
export const pixelArt = [
  { id: 1, title: "Neon Alley", tag: "Environment", ratio: "aspect-[3/4]", src: null, seed: 11 },
  { id: 2, title: "Bounty Hunter", tag: "Character", ratio: "aspect-square", src: null, seed: 23 },
  { id: 3, title: "Deep Cavern", tag: "Environment", ratio: "aspect-[4/3]", src: null, seed: 37 },
  { id: 4, title: "Mech Unit 07", tag: "Character", ratio: "aspect-[3/4]", src: null, seed: 41 },
  { id: 5, title: "Skyline Ruins", tag: "Environment", ratio: "aspect-[4/5]", src: null, seed: 53 },
  { id: 6, title: "Item Set Vol.1", tag: "Props", ratio: "aspect-square", src: null, seed: 67 },
  { id: 7, title: "The Last Train", tag: "Scene", ratio: "aspect-[4/3]", src: null, seed: 71 },
  { id: 8, title: "Boss: Cinder King", tag: "Character", ratio: "aspect-[3/4]", src: null, seed: 83 },
  { id: 9, title: "Forest Tileset", tag: "Tileset", ratio: "aspect-[4/3]", src: null, seed: 97 },
];

// Animation cards — point `src` at your GIFs (they render as <img>).
// Para usar tus GIFs: copia el archivo a src/assets/ y cambia src, p.ej.:
//   src: new URL("../assets/run-cycle.gif", import.meta.url).href,
export const animations = [
  { id: 1, title: "Run Cycle", tag: "8 frames", src: null, seed: 101 },
  { id: 2, title: "Sword Slash", tag: "12 frames", src: null, seed: 113 },
  { id: 3, title: "Idle Breathing", tag: "6 frames", src: null, seed: 127 },
  { id: 4, title: "Explosion FX", tag: "14 frames", src: null, seed: 131 },
  { id: 5, title: "Water Shader", tag: "Loop", src: null, seed: 139 },
  { id: 6, title: "Boss Intro", tag: "24 frames", src: null, seed: 149 },
];

export const skills = [
  { icon: "Grid3x3", name: "Pixel Art", note: "Sprites, tilesets, key art" },
  { icon: "PenTool", name: "Aseprite", note: "Daily driver for art & animation" },
  { icon: "Box", name: "Unity", note: "2D gameplay & tooling" },
  { icon: "Gamepad2", name: "Game Design", note: "Mechanics, levels, feel" },
  { icon: "Clapperboard", name: "Animation", note: "Frame-by-frame motion" },
  { icon: "Layers", name: "Photoshop", note: "Mockups & post-processing" },
];

export const contact = {
  kicker: "Contact",
  title: "Let's build something together",
  blurb:
    "Open for commissions, collaborations and freelance work. Pick your channel:",
  channels: [
    { icon: "Instagram", label: "Instagram", href: links.instagram },
    { icon: "Gamepad2", label: "Steam", href: links.steamProfile },
    { icon: "Briefcase", label: "Fiverr", href: links.fiverr },
  ],
};
