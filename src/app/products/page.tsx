import type { Metadata } from "next";
import { products } from "@/data/products";
import { ProductsCatalogClient } from "@/components/product/ProductsCatalogClient";
import { FloatingActions } from "@/components/ui/FloatingActions";

export const metadata: Metadata = {
  title: "Our Products - Defenseply Architectural Composites",
  description:
    "Explore the complete collection of Defenseply premium PVC foam boards, WPC boards, multi-layer composites, and architectural doors.",
  openGraph: {
    title: "Our Products - Defenseply Architectural Composites",
    description:
      "Explore the complete collection of Defenseply premium PVC foam boards, WPC boards, multi-layer composites, and architectural doors.",
    images: [
      {
        url: "/assets/products/pvcfoamboard(main).jpg",
      },
    ],
  },
};

export default function ProductsPage() {
  return (
    <>
      <main id="main-content" className="overflow-x-clip">
        <ProductsCatalogClient products={products} />
      </main>
      <FloatingActions />
    </>
  );
}
