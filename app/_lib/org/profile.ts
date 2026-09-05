//app/_lib/org/org-profile.ts

import { CtaKey } from "../content/cta";
import { OtherLanguageKey } from "../languages/multiculturalStatement";

const ORG_DOMAIN = "14stargems.com.au" as const;
const orgName = "14 Start Gems Stone";
// const appName = "canconstruction";

export const getBaseUrl = (): string => {
  if (process.env.NODE_ENV === "development") return "http://localhost:3000";
  // if (process.env.VERCEL_URL) {
  //   return `https://${appName}.demo.katebtech.com.au`;
  // }
  return `https://${ORG_DOMAIN}`;
};

export const ORG_PROFILE = {
  orgName,
  orgNameFarsi: "",
  industry: "Gemstones",
  subSector: "Natural Gemstones And Stone Collection",
  description:
    "14 Star Gems offers a curated collection of natural gemstones in South East Victoria, including aquamarine, topaz, emerald, black and green tourmaline, ruby, and sapphire.",
  // languages: ["EN", "HZ", "FA"] as const satisfies readonly LanguageKey[],
  otherLangKeys: [] as OtherLanguageKey[],
  domain: ORG_DOMAIN,
  email: "qhazo_ali@yahoo.com",
  phone: "0412 968 818",
  address: "Level 2, 311 Lonsdale Street, Dandenong VIC 3175",
  abn: "",
  cta: "freeQuote" as CtaKey,
  primaryColor: "#15803d",
  secondaryColor: "#0ea5e9",
} as const;

//