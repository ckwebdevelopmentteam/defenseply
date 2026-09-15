import Link from "next/link";
import { ProductSection, ProductSectionHeading } from "./ProductSection";
import type { ProductDetail } from "@/data/products";
export function RelatedProducts({
  relatedProducts,
}: {
  relatedProducts: ProductDetail[];
}) {
  return (
    <ProductSection aria-label="Explore Related Products">
      <ProductSectionHeading eyebrow="Complete Portfolio">
        Explore Related Surfaces
      </ProductSectionHeading>

      <div className="grid grid-cols-3 gap-6 max-[860px]:grid-cols-2 max-[860px]:gap-4 max-sm:grid-cols-1 max-sm:gap-3">
        {relatedProducts.map((rel, idx) => (
          <Link
            key={rel.slug}
            href={`/products/${rel.slug}`}
            className={`group bg-white border border-[#ebe8e2] rounded overflow-hidden no-underline flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)] reveal-on-scroll ${["reveal-delay-1", "reveal-delay-2", "reveal-delay-3"][idx % 3]}`}
          >
            <div className="w-full aspect-[6/5] bg-[#f5f4f0] overflow-hidden">
              <img
                src={
                  rel.gallery[0]?.src || "/assets/products/pvcfoamdf(main).webp"
                }
                alt={rel.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                loading="lazy"
              />
            </div>
            <div className="py-5 px-[22px] flex flex-col max-sm:py-4 max-sm:px-[18px]">
              <span className="text-[10px] tracking-[1.8px] uppercase text-[#8c827a] mb-1 font-sans">
                {rel.category}
              </span>
              <h3 className="text-base font-medium text-[#1a1a1a] m-0 mb-1.5 font-sans tracking-[0.5px] uppercase max-sm:text-sm">
                {rel.title}
              </h3>
              <p className="text-[13px] leading-[1.5] text-[#6d6a66] m-0">
                {rel.tagline}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </ProductSection>
  );
}
