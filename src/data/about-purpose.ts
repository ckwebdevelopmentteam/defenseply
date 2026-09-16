export type MissionItemData = {
  id: "innovation" | "responsibility" | "quality" | "partnership";
  number: string;
  category: string;
  headingLines: readonly [string, string];
  description: string;
  preferredFileBase: string;
  fallbackSrc: string;
  alt: string;
  objectPosition?: string;
};

export type AboutPurposeData = {
  vision: {
    label: string;
    headingLines: readonly [string, string];
    description: string;
    principles: readonly string[];
  };
  mission: {
    label: string;
    sequenceLabel: string;
    headingLines: readonly [string, string, string];
    description: string;
    items: readonly MissionItemData[];
  };
};

export const aboutPurposeData: AboutPurposeData = {
  vision: {
    label: "OUR VISION",
    headingLines: ["Better Spaces Today.", "Better Possibilities Tomorrow."],
    description:
      "Our vision is to help shape a future where thoughtfully engineered WPC and PVC materials support better spaces and a more considered use of resources.",
    principles: [
      "Thoughtful materials",
      "Practical innovation",
      "Long-term purpose",
    ],
  },
  mission: {
    label: "OUR MISSION",
    sequenceLabel: "01 — 04",
    headingLines: [
      "What we believe.",
      "What we build into",
      "every day.",
    ],
    description:
      "Four commitments guide how we develop materials, refine our processes and support the people who build with us.",
    items: [
      {
        id: "innovation",
        number: "01",
        category: "Innovation",
        headingLines: ["Think forward.", "Make better."],
        description:
          "Improve WPC and PVC solutions through thoughtful engineering, manufacturing refinement and practical innovation.",
        preferredFileBase: "assets/about/mission/innovation",
        fallbackSrc: "/assets/applications/creative/cnc-screens.webp",
        alt: "Decorative CNC-routed geometric screens showcasing precise fabrication and detail",
        objectPosition: "center",
      },
      {
        id: "responsibility",
        number: "02",
        category: "Responsibility",
        headingLines: ["Choose wisely.", "Use thoughtfully."],
        description:
          "Develop alternatives to conventional timber and work towards more considered use of materials and resources.",
        preferredFileBase: "assets/about/mission/responsibility",
        fallbackSrc: "/assets/applications/interiors/living-room-partitions.webp",
        alt: "Architectural living room partition screens fabricated from engineered composite boards",
        objectPosition: "center",
      },
      {
        id: "quality",
        number: "03",
        category: "Quality",
        headingLines: ["Refine details.", "Build confidence."],
        description:
          "Focus on consistent manufacturing and dependable performance for the intended application.",
        preferredFileBase: "assets/about/mission/quality",
        fallbackSrc: "/assets/applications/interiors/built-in-storage.webp",
        alt: "Built-in interior cabinetry and storage with clean joinery and finished edges",
        objectPosition: "center",
      },
      {
        id: "partnership",
        number: "04",
        category: "Partnership",
        headingLines: ["Listen closely.", "Grow together."],
        description:
          "Support architects, fabricators, dealers and homeowners with informed material choices and responsive guidance.",
        preferredFileBase: "assets/about/mission/partnership",
        fallbackSrc: "/assets/applications/commercial/office-furniture.webp",
        alt: "Modern commercial office workstation setting with durable engineered board surfaces",
        objectPosition: "center",
      },
    ],
  },
} as const;
