import type { ServiceSubCategory } from "../../definitions";

export const gemstoneCollection = {
  overview: {
    label: "Natural Gemstone Collection Overview",
    labelFarsi: "معرفی مجموعه سنگ‌های قیمتی طبیعی",
    image: [],
    description: [
      "We offer a curated collection of natural gemstones suitable for personal collections, gifts, display, and gemstone enthusiasts.",
    ],
    items: [
      "Natural gemstone collection",
      "crystal and specimen  gemstone pieces",
      "Collector stones",
      "Display-quality stones",
 
    ] as const,
  },

  aquamarineAndTopaz: {
    label: "Aquamarine And Topaz",
    labelFarsi: "آکوامارین و توپاز",
    image: [],
    description: [
      "Aquamarine and topaz stones selected for their clarity, blue tones, and clean visual appeal.",
    ],
    items: [
      "Aquamarine stones",
      "Topaz stones",
      "Blue-toned gemstones",
      "Collector pieces",
      "Gift selection stones",
      "Display stones",
    ] as const,
  },

  emeraldAndTourmaline: {
    label: "Emerald And Tourmaline",
    labelFarsi: "زمرد و تورمالین",
    image: [],
    description: [
      "Emerald and black or green tourmaline stones chosen for their strong colour, character, and natural beauty.",
    ],
    items: [
      "Emerald stones",
      "Green tourmaline",
      "Black tourmaline",
      "Natural green gemstones",
      "Collector-grade stones",
      "Feature display pieces",
    ] as const,
  },

  rubyAndSapphire: {
    label: "Ruby And Sapphire",
    labelFarsi: "یاقوت سرخ و یاقوت کبود",
    image: [],
    description: [
      "Ruby and sapphire stones with rich colour and timeless appeal for collectors and gemstone lovers.",
    ],
    items: [
      "Ruby stones",
      "Sapphire stones",
      "Red gemstones",
      "Blue gemstones",
      "Classic collector stones",
      "Premium display pieces",
    ] as const,
  },
} as const satisfies ServiceSubCategory;