export interface ProductDetail {
  card: { image: string; hoverImage?: string; label: string };
  slug: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  extendedDescription: string[];
  badges: string[];
  gallery: {
    src: string;
    alt: string;
    caption?: string;
  }[];
  traits: string[];
  specs: {
    thickness: string;
    density: string;
    standardSize: string;
    finishes: string[];
    colors: string[];
    fireRating?: string;
    waterResistance: string;
    screwHolding: string;
  };
  industryInsight?: {
    headline: string;
    stat: string;
    description: string;
    source: string;
  };
  applications: {
    title: string;
    description: string;
    image: string;
  }[];
  highlights: {
    label: string;
    value: string;
  }[];
}
