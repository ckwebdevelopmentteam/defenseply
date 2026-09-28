import { ProductSection, ProductSectionHeading } from "./ProductSection";
import type { ProductDetail } from "@/data/products";
import HoverRevealCards, { type CardItem } from "@/components/ui/cards";

export function ProductApplications({ product }: { product: ProductDetail }) {
  const cardItems: CardItem[] = product.applications.map((app, idx) => ({
    id: `${product.slug}-app-${idx}`,
    title: app.title,
    subtitle: product.title,
    imageUrl: app.image,
    description: app.description,
  }));

  return (
    <ProductSection aria-label="Architectural Applications">
      <ProductSectionHeading eyebrow="Versatile Applications">
        Where {product.title} Excels
      </ProductSectionHeading>

      <div className="w-full reveal-on-scroll">
        <HoverRevealCards
          items={cardItems}
          className="max-w-none p-0 gap-6 max-lg:grid-cols-2 max-lg:gap-5 max-sm:grid-cols-1 max-sm:gap-4"
          cardClassName="h-96 max-sm:h-80 shadow-md hover:shadow-2xl border border-black/10"
        />
      </div>
    </ProductSection>
  );
}
