import { TrendingUp } from "lucide-react";
import { ProductSection, ProductSectionHeading } from "./ProductSection";
import type { ProductDetail } from "@/data/products";
export function ProductNarrative({ product }: { product: ProductDetail }) {
  return (
    <ProductSection aria-label="Engineering & Specifications">
      <ProductSectionHeading eyebrow="Engineering Excellence">
        Designed for Architectural Permanence
      </ProductSectionHeading>

      <div className="bg-white border border-[#ebe8e2] rounded p-11 shadow-[0_4px_20px_rgba(0,0,0,0.02)] max-[860px]:p-7 max-[860px]:px-6 max-sm:py-[18px] max-sm:px-4 reveal-on-scroll">
        <p className="text-base leading-[1.8] text-[#3f3e3c] m-0 mb-5 last:mb-0 max-sm:text-sm max-sm:leading-[1.7] max-sm:mb-3.5">
          {product.description}
        </p>
        {product.extendedDescription.map((para, i) => (
          <p
            key={i}
            className="text-base leading-[1.8] text-[#3f3e3c] m-0 mb-5 last:mb-0 max-sm:text-sm max-sm:leading-[1.7] max-sm:mb-3.5"
          >
            {para}
          </p>
        ))}
      </div>

      {/* Industry Insight Callout Box (from PDF) */}
      {product.industryInsight && (
        <aside
          className="bg-gradient-to-br from-[#1f2322] to-[#151817] text-white rounded p-10 mt-10 grid grid-cols-[240px_1fr] gap-9 items-center relative overflow-hidden before:content-[''] before:absolute before:-top-1/2 before:-right-[20%] before:w-[300px] before:h-[300px] before:bg-[radial-gradient(circle,rgba(35,115,74,0.25)_0%,rgba(0,0,0,0)_70%)] before:pointer-events-none max-[860px]:grid-cols-1 max-[860px]:gap-6 max-[860px]:p-7 max-[860px]:px-6 max-sm:p-5 max-sm:px-4 max-sm:mt-6 reveal-on-scroll"
          aria-label="Industry Market Insight"
        >
          <div className="border-r border-white/12 pr-[30px] max-[860px]:border-r-0 max-[860px]:border-b max-[860px]:border-white/12 max-[860px]:pr-0 max-[860px]:pb-5">
            <span className="inline-block text-[11px] tracking-[1.5px] uppercase text-[#5ed694] mb-2 font-semibold font-sans">
              <TrendingUp
                size={13}
                style={{ display: "inline", marginRight: "4px" }}
              />
              Industry Insight
            </span>
            <div className="text-[clamp(32px,3.5vw,48px)] font-light leading-[1.1] text-white tracking-[-0.5px] font-sans max-sm:text-[clamp(28px,8vw,40px)]">
              {product.industryInsight.stat}
            </div>
          </div>
          <div className="flex flex-col">
            <h3 className="text-[19px] font-medium m-0 mb-2.5 text-white font-sans tracking-[0.5px] uppercase max-sm:text-base">
              {product.industryInsight.headline}
            </h3>
            <p className="text-[15px] leading-[1.6] text-[#c4c1bd] m-0 mb-3">
              {product.industryInsight.description}
            </p>
            <span className="text-[11px] text-[#8c8985] uppercase tracking-[1px] font-sans">
              Source: {product.industryInsight.source}
            </span>
          </div>
        </aside>
      )}
    </ProductSection>
  );
}
