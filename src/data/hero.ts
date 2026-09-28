export const HERO_CATEGORY_SLUGS = [
  "commercial",
  "bedroom",
  "wardrobe",
  "kitchen",
] as const;

export type HeroCategorySlug = (typeof HERO_CATEGORY_SLUGS)[number];

export type HeroScene = {
  slug: string;
  title: string;
  href: string;
  hero: string | null;
  heroMobile: string | null;
  heroAlt: string;
};
