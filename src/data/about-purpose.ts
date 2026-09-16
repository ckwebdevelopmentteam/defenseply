export type MissionTone = "clay" | "sage" | "blue" | "sand";

export type MissionItem = {
  id: "innovation" | "responsibility" | "quality" | "partnership";
  number: string;
  category: string;
  headingLines: readonly [string, string];
  description: string;
  tone: MissionTone;
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
    headingLines: readonly [string, string];
    description: string;
    items: readonly MissionItem[];
  };
};

export const aboutPurposeData: AboutPurposeData = {
  vision: {
    label: "OUR VISION",
    headingLines: ["Better spaces today.", "Better possibilities tomorrow."],
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
    headingLines: ["What we believe.", "What we build into every day."],
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
        tone: "clay",
      },
      {
        id: "responsibility",
        number: "02",
        category: "Responsibility",
        headingLines: ["Choose wisely.", "Use thoughtfully."],
        description:
          "Develop alternatives to conventional timber and work towards more considered use of materials and resources.",
        tone: "sage",
      },
      {
        id: "quality",
        number: "03",
        category: "Quality",
        headingLines: ["Refine details.", "Build confidence."],
        description:
          "Focus on consistent manufacturing and dependable performance for the intended application.",
        tone: "blue",
      },
      {
        id: "partnership",
        number: "04",
        category: "Partnership",
        headingLines: ["Listen closely.", "Grow together."],
        description:
          "Support architects, fabricators, dealers and homeowners with informed material choices and responsive guidance.",
        tone: "sand",
      },
    ],
  },
} as const;
