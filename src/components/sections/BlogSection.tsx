import articles from "@/data/blog.json";
import BlogDrawer from "@/components/blog/BlogDrawer";

export function BlogSection({ items = articles }: { items?: typeof articles }) {
  return (
    <BlogDrawer
      articles={items}
      eyebrow="Media & Corporate Newsroom"
      title="Perspectives on Material Science, Architecture & Sustainable Living"
      description="Discover the latest insights from the forefront of composite material innovation. From research breakthroughs and sustainable manufacturing at our KINFRA facility to expert architectural fabrication, explore how Defenseply is engineering durable, rot-free spaces for modern living."
    />
  );
}
