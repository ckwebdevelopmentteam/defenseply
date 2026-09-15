"use client";

import articles from "@/data/blog.json";
import InformationDrawer, { type TeamMember } from "@/components/ui/information-drawer";

export function BlogSection({ items = articles }: { items?: typeof articles }) {
  // Map articles to the drawer's TeamMember schema
  const drawerItems: TeamMember[] = items.map((item) => ({
    id: item.id,
    slug: item.slug || item.id,
    title: item.title,
    excerpt: item.excerpt,
    category: item.category,
    date: item.date,
    readTime: item.readTime,
    featuredImage: item.featuredImage || item.image,
    content: item.content || `<p>${item.excerpt}</p>`,
    teams: {
      designation: `${item.category} • ${item.readTime}`,
      profilePicture: item.featuredImage || item.image,
    },
  }));

  return (
    <InformationDrawer
      teams={drawerItems}
      title="Latest Blogs"
      description="Perspectives on sustainable composite engineering, waterproof architecture, and contemporary fabrication methods."
      backgroundColor="#ffffff"
      textColor="#111111"
      sidebarWidth="55%"
      overlayOpacity={0.45}
    />
  );
}
