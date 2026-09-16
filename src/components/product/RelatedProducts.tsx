import Link from "next/link";
import { ProductSection } from "./ProductSection";
import type { ProductDetail } from "@/data/products";
export function RelatedProducts({
  relatedProducts,
}: {
  relatedProducts: ProductDetail[];
}) {
  return (
    <ProductSection aria-label="Explore Related Products">
      <div className="mx-auto mb-12 flex max-w-[760px] flex-col items-center text-center max-phone:mb-8">
        <span className="mb-3.5 inline-flex items-center gap-2 rounded-full border border-black/15 bg-white px-4 py-1 text-[11px] font-semibold tracking-[2.5px] uppercase font-sans text-ink shadow-xs">
          <span className="size-1.5 rounded-full bg-[#9a6d00]" />
          Complete Portfolio
        </span>
        <h2 className="text-[clamp(24px,2.4vw,36px)] font-semibold tracking-[1px] uppercase text-[#1a1a1a] mb-3 text-center font-sans">
          Explore Related Surfaces
        </h2>
        <p className="max-w-[620px] text-[15px] font-light leading-[1.6] text-[#595653] text-center mx-auto">
          Discover complementary composite grades, moisture-resistant boards, and specialized profiles engineered for seamless architectural coordination.
        </p>
      </div>

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
                  rel.gallery[0]?.src ||
                  "/assets/products/pvcfoamboard(main).jpg"
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
