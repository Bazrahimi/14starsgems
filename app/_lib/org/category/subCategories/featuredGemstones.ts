import type { ServiceSubCategory } from "../../definitions";

export const featuredGemstones = {
  overview: {
    label: "Featured Gemstones Overview",
    labelFarsi: "معرفی سنگ‌های قیمتی منتخب",
    image: [],
    description: [
      "Our featured gemstones highlight visually distinctive natural stones selected for beauty, colour, and collector appeal.",
    ],
    items: [
      "Highlighted gemstone pieces",
      "Visually distinctive stones",
      "Premium-looking selections",
      "Collector favourites",
      "Gift-worthy gemstones",
      "Display-quality stones",
    ] as const,
  },

  collectorPieces: {
    label: "Collector Pieces",
    labelFarsi: "سنگ‌های کلکسیونی",
    image: [],
    description: [
      "Gemstone pieces suited for collectors looking for strong visual character and natural uniqueness.",
    ],
    items: [
      "Collector gemstones",
      "Unique natural stones",
      "Rare-looking pieces",
      "Statement gemstones",
      "Distinctive colour pieces",
      "Private collection stones",
    ] as const,
  },

  displayStones: {
    label: "Display Stones",
    labelFarsi: "سنگ‌های نمایشی",
    image: [],
    description: [
      "Selected stones suited for display, presentation, and decorative appreciation.",
    ],
    items: [
      "Display gemstones",
      "Cabinet display stones",
      "Feature stones",
      "Decorative natural pieces",
      "Presentation-ready gemstones",
      "Visually strong selections",
    ] as const,
  },

  giftSelection: {
    label: "Gift Selection Gemstones",
    labelFarsi: "سنگ‌های قیمتی مناسب هدیه",
    image: [],
    description: [
      "A range of gemstones suited for meaningful gifts and special occasions.",
    ],
    items: [
      "Gift gemstones",
      "Special occasion stones",
      "Elegant gemstone options",
      "Memorable gift pieces",
      "Colourful natural stones",
      "Selected presentation pieces",
    ] as const,
  },
} as const satisfies ServiceSubCategory;