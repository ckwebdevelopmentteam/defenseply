import fs from "node:fs";
import path from "node:path";
import { aboutPurposeData as data } from "@/data/about-purpose";
import {
  MissionPrinciples,
  type ResolvedMissionItem,
} from "./MissionPrinciples";

const EXTENSIONS = [".webp", ".avif", ".jpg", ".jpeg", ".png"];

function resolveItemMedia(
  preferredFileBase: string,
  preferredAlt: string,
  fallbackSrc: string,
  fallbackAlt: string,
): { src: string | null; alt: string } {
  for (const ext of EXTENSIONS) {
    const relativePath = `${preferredFileBase}${ext}`;
    const fullPath = path.resolve(process.cwd(), "public", relativePath);
    if (fs.existsSync(fullPath)) {
      return { src: `/${relativePath}`, alt: preferredAlt };
    }
  }

  const fallbackRel = fallbackSrc.startsWith("/")
    ? fallbackSrc.slice(1)
    : fallbackSrc;
  const fallbackFullPath = path.resolve(process.cwd(), "public", fallbackRel);
  if (fs.existsSync(fallbackFullPath)) {
    return { src: fallbackSrc, alt: fallbackAlt };
  }

  return { src: null, alt: preferredAlt };
}

export function AboutMission() {
  const resolvedItems: readonly ResolvedMissionItem[] = data.mission.items.map(
    (item) => {
      const media = resolveItemMedia(
        item.preferredFileBase,
        item.preferredAlt,
        item.fallbackSrc,
        item.fallbackAlt,
      );
      return {
        id: item.id,
        number: item.number,
        category: item.category,
        headingLines: item.headingLines,
        description: item.description,
        imageSrc: media.src,
        alt: media.alt,
        desktopObjectPosition: item.desktopObjectPosition,
        mobileObjectPosition: item.mobileObjectPosition,
      };
    },
  );

  return <MissionPrinciples items={resolvedItems} />;
}
