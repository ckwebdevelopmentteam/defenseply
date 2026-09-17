import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  products,
  getProductBySlug,
  getAllProductSlugs,
} from "@/data/products";
import { ProductPageAnimations } from "@/components/product/ProductPageAnimations";
import { ProductOverview } from "@/components/product/ProductOverview";
import { ProductNarrative } from "@/components/product/ProductNarrative";
import { ProductSpecifications } from "@/components/product/ProductSpecifications";
import { ProductApplications } from "@/components/product/ProductApplications";
import { ProductGreenPromise } from "@/components/product/ProductGreenPromise";
import { RelatedProducts } from "@/components/product/RelatedProducts";
interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllProductSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found - Defenseply",
    };
  }

  return {
    title: `${product.title} - Defenseply Architectural Composites`,
    description: `${product.tagline}. High-performance eco-architecture solutions by Defenseply International LLP.`,
    openGraph: {
      title: `${product.title} - Defenseply`,
      description: product.tagline,
      images:
        product.gallery.length > 0 ? [{ url: product.gallery[0].src }] : [],
    },
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  // Related products (excluding current)
  const relatedProducts = products
    .filter((p) => p.slug !== product.slug)
    .slice(0, 3);

  return (
    <>
      <ProductPageAnimations key={product.slug} />
      <main
        className="bg-[#f7f7f6] text-[#1a1a1a] min-h-screen overflow-hidden"
        id="main-content"
      >
        {/* Breadcrumbs */}
        <div className="w-full pt-[120px] pb-4 px-[5%] max-desktop:pt-[130px] max-phone:pt-[106px] max-sm:pb-3 max-sm:px-[4%] animate-fade-in">
          <div className="mx-auto max-w-[1440px]">
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-2 text-xs tracking-[0.8px] uppercase text-[#767472] flex-wrap max-sm:text-[10px] max-sm:gap-1.5"
            >
              <Link
                href="/"
                className="text-[#767472] no-underline transition-colors duration-200 hover:text-[#1a1a1a]"
              >
                Home
              </Link>
              <span className="opacity-40 text-[11px]">/</span>
              <Link
                href="/#products"
                className="text-[#767472] no-underline transition-colors duration-200 hover:text-[#1a1a1a]"
              >
                Products
              </Link>
              <span className="opacity-40 text-[11px]">/</span>
              <span className="text-[#1a1a1a] font-medium" aria-current="page">
                {product.title}
              </span>
            </nav>
          </div>
        </div>

        {/* Product Hero Section */}
        <ProductOverview product={product} />

        {/* Detailed Narrative Section */}
        <ProductNarrative product={product} />

        {/* Technical Specifications Matrix */}
        <ProductSpecifications product={product} />

        {/* Applications Showcase */}
        <ProductApplications product={product} />

        {/* Green Promise Banner */}
        <ProductGreenPromise />

        {/* Related Products Section ("Explore Related Surfaces") */}
        <RelatedProducts relatedProducts={relatedProducts} />
      </main>
    </>
  );
}
