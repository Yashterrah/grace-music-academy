import { academy } from "@/constants/academy";

export const siteConfig = {
  name: academy.name,

  shortName: academy.shortName,

  title: `${academy.name} | Music Education Excellence`,

  description: academy.description,

  url: "https://gracemuigaimusicacademy.co.ke",

  ogImage: "/images/og-image.jpg",

  locale: "en_KE",

  themeColor: "#15803D",

  keywords: [
    "Grace Muigai Music Academy",
    "Music School Kenya",
    "Music Lessons Nairobi",
    "Piano Lessons",
    "Music Education",
    "ABRSM",
    "Trinity Music",
    "Online Music Classes",
    "Music Theory",
    "Practical Music Lessons",
  ],

  creator: academy.name,

  authors: [
    {
      name: academy.name,
    },
  ],
} as const;

export type SiteConfig = typeof siteConfig;