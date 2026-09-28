import { AboutVision } from "./AboutVision";
import { AboutMission } from "./AboutMission";

export function AboutVisionMission() {
  return (
    <section
      id="about-vision"
      aria-labelledby="about-vision-heading"
      className="w-full font-sans"
    >
      <h2 id="about-vision-heading" className="sr-only">
        Our vision and mission
      </h2>

      {/* A. VISION — FULL-WIDTH DARK STATEMENT WITH RESPONSIVE PHOTOGRAPHIC BACKGROUND */}
      <AboutVision />

      {/* B. MISSION — EDITORIAL STICKY PHOTOGRAPH & PRINCIPLES */}
      <AboutMission />
    </section>
  );
}
