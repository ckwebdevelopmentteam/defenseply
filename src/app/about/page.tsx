import type { Metadata } from "next";
import { AboutHero } from "@/components/sections/about/AboutHero";
import { AboutWho } from "@/components/sections/about/AboutWho";
import { AboutStory } from "@/components/sections/about/AboutStory";
import { AboutVisionMission } from "@/components/sections/about/AboutVisionMission";
import { AboutValues } from "@/components/sections/about/AboutValues";
import { AboutLeadership } from "@/components/sections/about/AboutLeadership";
import { AboutManufacturing } from "@/components/sections/about/AboutManufacturing";
import { AboutCertifications } from "@/components/sections/about/AboutCertifications";
import { AboutCTA } from "@/components/sections/about/AboutCTA";

export const metadata: Metadata = {
  title: "About Us | DEFENSEPLY INTERNATIONAL LLP",
  description:
    "Learn about DEFENSEPLY INTERNATIONAL LLP — an AP Group venture specialising in Wood Polymer Composite (WPC) and PVC building materials at our KINFRA Industrial Park facility in Kuttippuram, Kerala.",
};

export default function AboutPage() {
  return (
    <main
      id="main-content"
      className="overflow-hidden"
    >
      <AboutHero />
      <AboutWho />
      <AboutStory />
      <AboutVisionMission />
      <AboutValues />
      <AboutLeadership />
      <AboutManufacturing />
      <AboutCertifications />
      <AboutCTA />
    </main>
  );
}
