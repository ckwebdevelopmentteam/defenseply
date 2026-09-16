import { existsSync } from "node:fs";
import { resolve } from "node:path";
import content from "./applications.json";
import type { Application, ApplicationContent } from "@/types/application";
import { HERO_CATEGORY_SLUGS, type HeroScene } from "./hero";

// Server-only asset resolution: adding the named files requires no component edits.
function availableImage(path: string): string | null {
  const base = path.replace(/\.[^.]+$/, "");
  return (
    ["webp", "png", "jpg", "jpeg", "avif"]
      .map((extension) => `${base}.${extension}`)
      .find((candidate) =>
        existsSync(resolve(process.cwd(), "public", candidate.slice(1))),
      ) ?? null
  );
}
export function getApplications(): Application[] {
  return (content as ApplicationContent[]).map((category) => ({
    ...category,
    hero: availableImage(category.hero),
    heroMobile:
      availableImage(category.heroMobile) ?? availableImage(category.hero),
    gallery: category.gallery.map((image) => ({
      ...image,
      src: availableImage(image.image),
    })),
  }));
}
export function getApplication(slug: string) {
  return getApplications().find((category) => category.slug === slug);
}

export function getHeroScenes(): HeroScene[] {
  const applications = getApplications();
  return HERO_CATEGORY_SLUGS.map((slug) => {
    const app = applications.find((category) => category.slug === slug);
    if (!app) {
      throw new Error(
        `Missing application data for hero category slug: ${slug}`,
      );
    }
    return {
      slug: app.slug,
      title: app.title,
      href: `/applications/${app.slug}`,
      hero: app.hero,
      heroMobile: app.heroMobile,
      heroAlt: app.heroAlt,
    };
  });
}
