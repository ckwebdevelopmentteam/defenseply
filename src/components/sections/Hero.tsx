import { getHeroScenes } from "@/data/applications";
import { HeroSlider } from "./HeroSlider";
import type { HeroScene } from "@/data/hero";

export function Hero({
  scenes,
}: {
  scenes?: HeroScene[];
} = {}) {
  const resolvedScenes = scenes ?? getHeroScenes();
  return <HeroSlider scenes={resolvedScenes} />;
}
