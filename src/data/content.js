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
    "I'm a pixel artist and game dev, and making art for video games is what I enjoy most. I mostly draw characters, animations and environments, and along the way I've made a few games of my own for game jams.",
    "I've made art for indie games, school projects and client commissions, from sprites and UI to animation, VFX and key art. I'm open to studio roles, collaborations and freelance projects.",
  ],
  stats: [
    { value: "5+", label: "Years of pixel art" },
    { value: "1", label: "Game on Steam" },
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

export const pixelArtCategories = ["Commissions", "Personal Work"];

export const pixelArt = [
  {
    id: 17,
    title: "Gothic Church",
    tag: "Environment",
    category: "Personal Work",
    ratio: "aspect-square",
    video: new URL("../assets/Iglesia.mp4", import.meta.url).href,
    sound: true,
    description:
      "Personal piece, my own setting. Illustration of a church inspired by 13th-century Gothic architecture, reimagined within a dark, fantastical setting. Rain, drifting fog, and a single flash of lightning build the atmosphere of the scene. I wanted to explore how these effects could convey tenebrosity without showing anything explicitly.",
    src: null,
    seed: 170,
  },
  {
    id: 18,
    title: "Ignis",
    tag: "Creature",
    category: "Personal Work",
    ratio: "aspect-square",
    video: new URL("../assets/Ignis.mp4", import.meta.url).href,
    sound: true,
    description:
      "Original creature design of mine. A beast built around fire, so the silhouette, the palette and the animation all push heat and movement.",
    src: null,
    seed: 180,
  },
  {
    id: 19,
    title: "Maki",
    description:
      "Fan art of Maki Zenin from Jujutsu Kaisen, after the events that leave her scarred. I went for a cold, washed-out palette so the only warmth left is in her expression.",
    tag: "Character",
    category: "Personal Work",
    ratio: "aspect-square",
    video: new URL("../assets/Maki.mp4", import.meta.url).href,
    sound: true,
    src: null,
    seed: 190,
  },
  {
    id: 20,
    title: "Sailor",
    description:
      "Fan art of Sailor Moon reimagined as an armored knight. Drawn with a single pink duotone palette to keep the original color identity while the design goes somewhere heavier.",
    tag: "Character",
    category: "Personal Work",
    ratio: "aspect-[2/3]",
    video: new URL("../assets/Sailor.mp4", import.meta.url).href,
    sound: true,
    src: null,
    seed: 200,
  },
  {
    id: 22,
    title: "Ashley",
    description:
      "Fan art of Ashley from WarioWare, summoning her demon Red in the middle of a ritual. Animated loop with candlelight and a glowing pentagram.",
    tag: "Character",
    category: "Personal Work",
    ratio: "aspect-square",
    src: new URL("../assets/Ashley.gif", import.meta.url).href,
    seed: 220,
  },

  {
    id: 24,
    title: "Character Portraits",
    description:
      "Portrait studies of characters I like: Donald Duck in his Kingdom Hearts mage outfit, Saria from The Legend of Zelda: Ocarina of Time, and The Butcher. Each one gets its own palette and lighting to match the tone of the character.",
    tag: "Portraits",
    category: "Personal Work",
    ratio: "aspect-square",
    frames: [
      { title: "The Butcher", src: new URL("../assets/PortraitButcher.png", import.meta.url).href },
      { title: "Donald", src: new URL("../assets/PortraitDonald.png", import.meta.url).href },
      { title: "Saria", src: new URL("../assets/PortraitSaria.png", import.meta.url).href },
    ],
    seed: 240,
  },
  {
    id: 25,
    title: "Kass",
    description:
      "Fan art of Kass from The Legend of Zelda: Breath of the Wild, sprite sheet and idle animation with his accordion, with Hyrule Castle on the horizon.",
    tag: "Sprite",
    category: "Personal Work",
    ratio: "aspect-square",
    frames: [
      { title: "Kass sprite sheet", src: new URL("../assets/KassSheet.png", import.meta.url).href },
      { title: "Kass animation", src: new URL("../assets/KassAnim.gif", import.meta.url).href },
    ],
    seed: 250,
  },

  {
    id: 16,
    title: "Atomic Pixel Party",
    tag: "Poster",
    category: "Commissions",
    ratio: "aspect-[4/5]",
    video: new URL("../assets/AtomicPixelParty.mp4", import.meta.url).href,
    credit: "Client · Atomic Pixel Party",
    creditUrl: "https://atomicpixel.es/",
    description:
      `I made this poster for the company Atomic Pixel Party, for their "In the Arcade World" season. Hand-drawn in Aseprite and animated in After Effects (the VFX come from there too). The aesthetic leans into arcade fighting games. I looked at franchises like Scott Pilgrim and Street Fighter for the different elements of the composition.`,
    src: null,
    seed: 160,
  },
  {
    id: 21,
    title: "PsychoKalaka Outro",
    tag: "Outro",
    category: "Commissions",
    ratio: "aspect-video",
    video: new URL("../assets/OutroPsychoKalaka.mp4", import.meta.url).href,
    credit: "Client · PsychoKalaka",
    creditUrl: "https://www.youtube.com/@psychokalakaoficial",
    description: "Commissioned outro animation for the YouTube channel PsychoKalaka.",
    src: null,
    seed: 210,
  },
  {
    id: 23,
    title: "HispaniaCraft Mobs",
    description:
      "Animated mob sprites commissioned for the website of HispaniaCraft, a Minecraft server. Each mob is a pixel art take on the in-game model, looping so they can sit anywhere on the page.",
    tag: "Sprites",
    category: "Commissions",
    ratio: "aspect-square",
    credit: "Client · HispaniaCraft",
    creditUrl: "https://hispaniacraft.tebex.io/",
    frames: [
      { title: "Villager", src: new URL("../assets/HispaniaCraftVillager.gif", import.meta.url).href },
      { title: "Copper Golem", src: new URL("../assets/HispaniaCraftCopperGolem.gif", import.meta.url).href },
      { title: "Spider", src: new URL("../assets/HispaniaCraftSpider.gif", import.meta.url).href },
      { title: "Villager King", src: new URL("../assets/HispaniaCraftKing.gif", import.meta.url).href },
    ],
    seed: 230,
  },
  {
    id: 26,
    title: "Orce Album Cover",
    tag: "Album Cover",
    category: "Commissions",
    ratio: "aspect-square",
    credit: "Client · Orce",
    creditUrl: "https://www.tiktok.com/@orce_ey",
    description:
      "Animated album cover made for Orce, an Argentine singer and influencer. Two versions of the same artwork, drawn in Aseprite and animated for the release on streaming platforms and social media.",
    frames: [
      { title: "Version 1", video: new URL("../assets/OrceAlbum1.mp4", import.meta.url).href },
      { title: "Version 2", video: new URL("../assets/OrceAlbum2.mp4", import.meta.url).href },
    ],
    seed: 260,
  },
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
