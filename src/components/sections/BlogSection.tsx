import articles from "@/data/blog.json";
import BlogDrawer from "@/components/blog/BlogDrawer";

export function BlogSection({ items = articles }: { items?: typeof articles }) {
  return (
    <BlogDrawer
      articles={items}
      title="Technical Insights & Articles"
      description="Perspectives on polymer composite engineering, moisture-critical architectural considerations, and precision fabrication standards."
    />
  );
}
