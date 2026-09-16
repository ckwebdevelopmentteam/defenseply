export interface BlogArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  featuredImage: string;
  /** Trusted repository-authored HTML; sanitize before accepting external content. */
  content: string;
}
