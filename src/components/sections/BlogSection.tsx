import articles from "@/data/blog.json";
import BlogDrawer from "@/components/blog/BlogDrawer";

export function BlogSection({ items = articles }: { items?: typeof articles }) {
  return (
    <BlogDrawer
      articles={items}
      title="Latest Blogs"
      description="Perspectives on sustainable composite engineering, waterproof architecture, and contemporary fabrication methods."
    />
  );
}
