import type { ServiceSubCategory } from "../../definitions";

export const gemstoneSelectionSupport = {
  overview: {
    label: "Gemstone Selection Support Overview",
    labelFarsi: "معرفی راهنمای انتخاب سنگ‌های قیمتی",
    image: [],
    description: [
      "We help customers choose gemstones based on type, colour, intended use, and personal preference.",
    ],
    items: [
      "Gemstone selection help",
      "Collector guidance",
      "Gift selection support",
      "Colour-based suggestions",
      "Stone type comparison",
      "Beginner-friendly guidance",
    ] as const,
  },

  choosingByColour: {
    label: "Choosing Gemstones By Colour",
    labelFarsi: "انتخاب سنگ‌های قیمتی بر اساس رنگ",
    image: [],
    description: [
      "Support for selecting gemstones based on preferred tones such as blue, green, red, or darker natural colours.",
    ],
    items: [
      "Blue gemstone options",
      "Green gemstone options",
      "Red gemstone options",
      "Dark-toned stones",
      "Colour preference guidance",
      "Visual style selection",
    ] as const,
  },

  choosingByStoneType: {
    label: "Choosing By Stone Type",
    labelFarsi: "انتخاب بر اساس نوع سنگ",
    image: [],
    description: [
      "Guidance for selecting between aquamarine, topaz, emerald, tourmaline, ruby, and sapphire.",
    ],
    items: [
      "Aquamarine selection",
      "Topaz selection",
      "Emerald selection",
      "Tourmaline selection",
      "Ruby selection",
      "Sapphire selection",
    ] as const,
  },

  personalAndGiftSelection: {
    label: "Personal And Gift Selection",
    labelFarsi: "انتخاب شخصی و هدیه‌ای",
    image: [],
    description: [
      "Helpful guidance for choosing the right gemstone for yourself, a collection, or a gift.",
    ],
    items: [
      "Personal collection stones",
      "Gift gemstone ideas",
      "Display selection support",
      "Collector-focused choices",
      "Meaningful stone options",
      "Curated gemstone suggestions",
    ] as const,
  },
} as const satisfies ServiceSubCategory;