export type MissionItem = {
  id: "innovation" | "responsibility" | "quality" | "partnership";
  number: string;
  title: string;
  description: string;
};

export type AboutPurposeData = {
  vision: {
    label: string;
    statement: readonly [string, string];
    description: string;
    caption: string;
  };
  mission: {
    label: string;
    heading: readonly [string, string];
    intro: string;
    items: readonly MissionItem[];
  };
};

export const aboutPurposeData: AboutPurposeData = {
  vision: {
    label: "OUR VISION",
    statement: ["A better material future.", "A lighter footprint."],
    description:
      "To help shape a future where thoughtfully engineered WPC and PVC materials support better spaces and reduce dependence on conventional timber.",
    caption: "The future we work towards.",
  },
  mission: {
    label: "OUR MISSION",
    heading: ["Better materials.", "Considered at every step."],
    intro:
      "Our mission is to bring together material innovation, responsible choices, consistent quality and dependable support.",
    items: [
      {
        id: "innovation",
        number: "01",
        title: "Advance material possibilities",
        description:
          "Improve WPC and PVC solutions through thoughtful engineering, manufacturing refinement and practical innovation.",
      },
      {
        id: "responsibility",
        number: "02",
        title: "Make responsible choices",
        description:
          "Develop alternatives to conventional timber and work towards more considered use of materials and resources.",
      },
      {
        id: "quality",
        number: "03",
        title: "Build confidence in quality",
        description:
          "Focus on consistent manufacturing and dependable performance for the intended application.",
      },
      {
        id: "partnership",
        number: "04",
        title: "Support every partnership",
        description:
          "Help architects, fabricators, dealers and homeowners make informed material choices with responsive guidance and support.",
      },
    ],
  },
} as const;
