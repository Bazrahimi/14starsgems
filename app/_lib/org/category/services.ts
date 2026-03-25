import type { ServicesPage } from "../definitions";
import { cldImages } from "../publicAssets";

import { gemstoneCollection } from "./subCategories/gemstoneCollection";
import { featuredGemstones } from "./subCategories/featuredGemstones";
import { gemstoneSelectionSupport } from "./subCategories/gemstoneSelectionSupport";

export const SERVICES_PAGE = {
  gemstoneCollection: {
    slug: "natural-gemstone-collection-south-east-victoria",
    label: "Natural Gemstone Collection",
    image: [
      // cldImages.services.gemstoneCollection
    ],
    labelFarsi: "مجموعه سنگ‌های قیمتی طبیعی",
    description: [
      "A curated collection of natural gemstones across South East Victoria, including aquamarine, topaz, emerald, tourmaline, ruby, and sapphire for collectors, gifts, and personal selection.",
    ] as const,
    subcategories: gemstoneCollection,
  },

  featuredGemstones: {
    slug: "featured-gemstones-south-east-victoria",
    label: "Featured Gemstones",
    image: [
      // cldImages.services.featuredGemstones
    ],
    labelFarsi: "سنگ‌های قیمتی منتخب",
    description: [
      "Featured gemstone pieces selected for colour, character, visual appeal, and collector interest, including both classic and distinctive natural stones.",
    ] as const,
    subcategories: featuredGemstones,
  },

  gemstoneSelectionSupport: {
    slug: "gemstone-selection-support-south-east-victoria",
    label: "Gemstone Selection Support",
    image: [
      // cldImages.services.gemstoneSelectionSupport
    ],
    labelFarsi: "راهنمای انتخاب سنگ‌های قیمتی",
    description: [
      "Helpful gemstone selection support for buyers and collectors looking for the right stone based on colour, type, appearance, and intended use.",
    ] as const,
    subcategories: gemstoneSelectionSupport,
  },
} as const satisfies Record<string, ServicesPage>;