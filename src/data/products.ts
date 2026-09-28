import catalog from "./products.json";
import type { ProductDetail } from "@/types/product";
export type { ProductDetail } from "@/types/product";
export const products: ProductDetail[] = catalog;
export const getProductBySlug = (slug: string) =>
  products.find((product) => product.slug === slug);
export const getAllProductSlugs = () => products.map((product) => product.slug);
export const productCards = products.map((product) => ({
  ...product.card,
  title: product.title,
  slug: product.slug,
  tagline: product.tagline,
  href: `/products/${product.slug}`,
}));
