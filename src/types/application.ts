export type ApplicationImageContent = {
  id: string;
  title: string;
  caption: string;
  image: string;
  alt: string;
};
export type ApplicationContent = {
  slug: string;
  title: string;
  headline: string;
  description: string;
  storyTitle: string;
  story: string;
  hero: string;
  heroMobile: string;
  heroAlt: string;
  products: string[];
  gallery: ApplicationImageContent[];
};
export type Application = Omit<
  ApplicationContent,
  "hero" | "heroMobile" | "gallery"
> & {
  hero: string | null;
  heroMobile: string | null;
  gallery: (ApplicationImageContent & { src: string | null })[];
};
