export const site = {
  name: "DRAWTOIT",
  tagline: "2D Artist specialized in pixel art",
};

export const links = {
  instagram: "https://instagram.com/drawtoit",
  steam: "https://store.steampowered.com/app/4232500/Hellshot/",
  steamProfile: "https://store.steampowered.com/curator/45882349",
  fiverr: "https://fiverr.com/drawtoit",
  email: "mailto:drawtoit.contact@gmail.com",
};

export const about = {
  kicker: "About me",
  title: "Crafting worlds, one pixel at a time",
  paragraphs: [
    "I'm a pixel artist and indie game developer passionate about turning tiny squares into living worlds. From character sprites to full environments, I focus on readable silhouettes, bold palettes and animation that feels alive.",
    "I shipped Hellshot on Steam and made all the art for it: character sprites, environments, animation and VFX. I'm open to studio roles, collaborations and freelance projects.",
  ],
  stats: [
    { value: "5+", label: "Years of pixel art" },
    { value: "1", label: "Game on Steam" },
    { value: "∞", label: "Pixels placed" },
  ],
  portrait: {
    src: new URL("../assets/Profile.png", import.meta.url).href,
    alt: "DRAWTOIT portrait",
    seed: 3,
  },
};

export const hellshot = {
  kicker: "Featured project",
  title: "HELLSHOT",
  tags: ["Survivors-like", "Cosmic Horror", "Pixel Art", "Roguelite"],
  description:
    "A cat, a slot machine, and a blue hell. Survive endless waves of eldritch aliens, stack relics until your damage stops making sense, then pull the lever for a whole new build.",
  role:
    "I made all the art for Hellshot: character and enemy sprites, bosses, UI, VFX and the store key art.",
  features: [
    { icon: "Crosshair", label: "Tight, responsive gunplay" },
    { icon: "Skull", label: "Brutal bullet-hell bosses" },
    { icon: "Zap", label: "Fast runs, high replayability" },
    { icon: "Palette", label: "100% hand-made pixel art" },
  ],
  steamUrl: links.steam,
  itchUrl: "https://drawtoit.itch.io/hellshot",
  logo: new URL("../assets/Logohellshotajunto2.png", import.meta.url).href,
  media: [
    {
      video: new URL("../assets/HellshotCover.mp4", import.meta.url).href,
      src: new URL("../assets/HellshotCoverThumb.jpg", import.meta.url).href,
      alt: "Hellshot key art",
      seed: 6,
    },
    {
      video: new URL("../assets/HellshotGameplayLoop.mp4", import.meta.url).href,
      src: new URL("../assets/HellshotGameplayThumb.jpg", import.meta.url).href,
      alt: "Hellshot gameplay",
      seed: 7,
    },
    {
      video: new URL("../assets/CinematicTrailer.mp4", import.meta.url).href,
      src: new URL("../assets/CinematicThumb.jpg", import.meta.url).href,
      alt: "Hellshot intro cinematic",
      controls: true,
      seed: 8,
    },
    { src: new URL("../assets/Captura1.jpg", import.meta.url).href, alt: "Main menu", seed: 21 },
    { src: new URL("../assets/Captura2.jpg", import.meta.url).href, alt: "Abyssal Army Sorcerer boss fight", seed: 34 },
    { src: new URL("../assets/Captura3.jpg", import.meta.url).href, alt: "Relic slot machine shop", seed: 55 },
  ],
};

export const projects = [
  {
    id: "dorado",
    title: "Dorado",
    tags: ["GB JAM 14"],
    description:
      "Made for GB JAM 14 around the theme \"old gold\". I made the whole game except the music and sound effects.",
    itchUrl: "https://drawtoit.itch.io/dorado",
    media: [
      {
        video: new URL("../assets/DoradoCover.mp4", import.meta.url).href,
        src: new URL("../assets/DoradoCover.jpg", import.meta.url).href,
        alt: "Dorado cover",
        seed: 29,
      },
      {
        video: new URL("../assets/DoradoGameplayLoop.mp4", import.meta.url).href,
        src: new URL("../assets/DoradoGameplayThumb.jpg", import.meta.url).href,
        alt: "Dorado gameplay",
        seed: 29 * 2,
      },
      { src: new URL("../assets/DoradoScreenshot1.png", import.meta.url).href, alt: "A lost city defended by fearsome creatures", seed: 29 * 3 },
      { src: new URL("../assets/DoradoScreenshot2.png", import.meta.url).href, alt: "Backpack and loot inventory", seed: 29 * 5 },
      { src: new URL("../assets/DoradoScreenshot3.png", import.meta.url).href, alt: "Battle against a jaguar warrior", seed: 29 * 7 },
    ],
  },
  {
    id: "katabra",
    title: "Katabra",
    tags: ["School project"],
    description:
      "School project where I was the art director and handled the visual side: key art, sprites and UI, all hand-made pixel art.",
    itchUrl: "https://drawtoit.itch.io/katabra",
    media: [
      { src: new URL("../assets/PortadaKatabra.png", import.meta.url).href, alt: "Katabra key art", seed: 19 },
      {
        video: new URL("../assets/KatabraGameplayLoop.mp4", import.meta.url).href,
        src: new URL("../assets/KatabraGameplayThumb.jpg", import.meta.url).href,
        alt: "Katabra gameplay",
        seed: 19 * 2,
      },
      { src: new URL("../assets/KatabraScreenshot1.jpg", import.meta.url).href, alt: "Rubber duck bathroom arena", seed: 19 * 3 },
      { src: new URL("../assets/KatabraScreenshot2.jpg", import.meta.url).href, alt: "Bear's bar in the forest", seed: 19 * 5 },
      { src: new URL("../assets/KatabraScreenshot3.jpg", import.meta.url).href, alt: "Glowing circular maze", seed: 19 * 7 },
    ],
  },
  {
    id: "oniria",
    title: "Oniria",
    tags: ["B1T JAM 5", "Winner"],
    description:
      "Made for B1T JAM 5 around the theme \"sleep\". I made the whole game except the music, and it was one of the winners out of 175 entries.",
    itchUrl: "https://drawtoit.itch.io/oniria",
    media: [
      { src: new URL("../assets/OniriaCover.png", import.meta.url).href, alt: "Oniria cover", seed: 23 },
      {
        video: new URL("../assets/OniriaGameplayLoop.mp4", import.meta.url).href,
        src: new URL("../assets/OniriaGameplayThumb.jpg", import.meta.url).href,
        alt: "Oniria gameplay",
        seed: 23 * 2,
      },
      { src: new URL("../assets/OniriaScreenshot1.gif", import.meta.url).href, alt: "Moth platforming past crossbow traps", seed: 23 * 3 },
      { src: new URL("../assets/OniriaScreenshot2.gif", import.meta.url).href, alt: "Night falls over the garden", seed: 23 * 5 },
      { src: new URL("../assets/OniriaScreenshot3.gif", import.meta.url).href, alt: "Spotting a crossbow trap in the dark", seed: 23 * 7 },
    ],
  },
];

export const pixelArtCategories = ["Illustration", "Character Art", "Animation"];

export const pixelArt = [
  {
    id: 17,
    title: "Gothic Church",
    tag: "Environment",
    category: "Illustration",
    ratio: "aspect-square",
    video: new URL("../assets/Iglesia.mp4", import.meta.url).href,
    sound: true,
    description:
      "Illustration of a church inspired by 13th-century Gothic architecture, reimagined within a dark, fantastical setting. Rain, drifting fog, and a single flash of lightning build the atmosphere of the scene. I wanted to explore how these effects could convey tenebrosity without showing anything explicitly.",
    src: null,
    seed: 170,
  },
  {
    id: 18,
    title: "Ignis",
    tag: "Creature",
    category: "Illustration",
    ratio: "aspect-square",
    video: new URL("../assets/Ignis.mp4", import.meta.url).href,
    sound: true,
    src: null,
    seed: 180,
  },
  {
    id: 19,
    title: "Maki",
    tag: "Character",
    category: "Illustration",
    ratio: "aspect-square",
    video: new URL("../assets/Maki.mp4", import.meta.url).href,
    sound: true,
    src: null,
    seed: 190,
  },
  {
    id: 20,
    title: "Sailor",
    tag: "Character",
    category: "Illustration",
    ratio: "aspect-[2/3]",
    video: new URL("../assets/Sailor.mp4", import.meta.url).href,
    sound: true,
    src: null,
    seed: 200,
  },
  { id: 1, title: "Neon Alley", tag: "Environment", category: "Illustration", ratio: "aspect-[3/4]", src: null, seed: 11 },
  { id: 3, title: "Deep Cavern", tag: "Environment", category: "Illustration", ratio: "aspect-[4/3]", src: null, seed: 37 },
  { id: 5, title: "Skyline Ruins", tag: "Environment", category: "Illustration", ratio: "aspect-[4/5]", src: null, seed: 53 },
  { id: 6, title: "Item Set Vol.1", tag: "Props", category: "Illustration", ratio: "aspect-square", src: null, seed: 67 },
  { id: 7, title: "The Last Train", tag: "Scene", category: "Illustration", ratio: "aspect-[4/3]", src: null, seed: 71 },
  { id: 9, title: "Forest Tileset", tag: "Tileset", category: "Illustration", ratio: "aspect-[4/3]", src: null, seed: 97 },

  { id: 2, title: "Bounty Hunter", tag: "Character", category: "Character Art", ratio: "aspect-square", src: null, seed: 23 },
  { id: 4, title: "Mech Unit 07", tag: "Character", category: "Character Art", ratio: "aspect-[3/4]", src: null, seed: 41 },
  { id: 8, title: "Boss: Cinder King", tag: "Boss", category: "Character Art", ratio: "aspect-[3/4]", src: null, seed: 83 },

  {
    id: 16,
    title: "Atomic Pixel Party",
    tag: "Poster",
    category: "Animation",
    ratio: "aspect-[4/5]",
    video: new URL("../assets/AtomicPixelParty.mp4", import.meta.url).href,
    credit: "Client · Atomic Pixel Party",
    description:
      `I made this poster for the company Atomic Pixel Party, for their "In the Arcade World" season. Hand-drawn in Aseprite and animated in After Effects (the VFX come from there too). The aesthetic leans into arcade fighting games. I looked at franchises like Scott Pilgrim and Street Fighter for the different elements of the composition.`,
    src: null,
    seed: 160,
  },
  {
    id: 21,
    title: "PsychoKalaka Outro",
    tag: "Outro",
    category: "Animation",
    ratio: "aspect-video",
    video: new URL("../assets/OutroPsychoKalaka.mp4", import.meta.url).href,
    credit: "Client · PsychoKalaka",
    creditUrl: "https://www.youtube.com/@psychokalakaoficial",
    description: "Commissioned outro animation for the YouTube channel PsychoKalaka.",
    src: null,
    seed: 210,
  },
  { id: 10, title: "Run Cycle", tag: "8 frames", category: "Animation", ratio: "aspect-video", src: null, seed: 101 },
  { id: 11, title: "Sword Slash", tag: "12 frames", category: "Animation", ratio: "aspect-square", src: null, seed: 113 },
  { id: 12, title: "Idle Breathing", tag: "6 frames", category: "Animation", ratio: "aspect-video", src: null, seed: 127 },
  { id: 13, title: "Explosion FX", tag: "14 frames", category: "Animation", ratio: "aspect-square", src: null, seed: 131 },
  { id: 14, title: "Water Shader", tag: "Loop", category: "Animation", ratio: "aspect-video", src: null, seed: 139 },
  { id: 15, title: "Boss Intro", tag: "24 frames", category: "Animation", ratio: "aspect-[4/3]", src: null, seed: 149 },
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
    "Available for studio roles, collaborations and freelance projects. The quickest ways to reach me:",
  channels: [
    { icon: "Instagram", label: "Instagram", href: links.instagram },
    { icon: "Gamepad2", label: "Steam", href: links.steamProfile },
    { icon: "Briefcase", label: "Fiverr", href: links.fiverr },
  ],
  email: "drawtoit.contact@gmail.com",
};
