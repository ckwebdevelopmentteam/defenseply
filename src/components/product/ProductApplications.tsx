import { ProductSection, ProductSectionHeading } from "./ProductSection";
import type { ProductDetail } from "@/data/products";
export function ProductApplications({ product }: { product: ProductDetail }) {
  return (
    <ProductSection aria-label="Architectural Applications">
      <ProductSectionHeading eyebrow="Versatile Applications">
        Where {product.title} Excels
      </ProductSectionHeading>

      <div className="grid grid-cols-4 gap-6 max-lg:grid-cols-2 max-lg:gap-[18px] max-sm:grid-cols-1 max-sm:gap-3">
        {product.applications.map((app, idx) => (
          <article
            key={app.title}
            className={`group bg-white border border-[#ebe8e2] rounded overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)] reveal-on-scroll ${idx % 2 === 0 ? "reveal-delay-1" : "reveal-delay-2"}`}
          >
            <div className="w-full aspect-[4/3] overflow-hidden bg-[#f0ede8]">
              <img
                src={app.image}
                alt={app.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="p-5 flex flex-col grow max-sm:p-4">
              <h3 className="text-[15px] font-medium text-[#1a1a1a] m-0 mb-2 font-sans tracking-[0.5px] uppercase max-sm:text-[13px]">
                {app.title}
              </h3>
              <p className="text-[13px] leading-[1.55] text-[#595653] m-0">
                {app.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </ProductSection>
  );
}
