import Link from "next/link";
import type { ProductDetail } from "@/types/product";
import { Heading } from "@/components/ui/Heading";
import { ArrowIcon } from "@/components/ui/ActionLink";

import { cn } from "@/lib/cn";

/** Uses catalog content and imagery, independently of the provisional detail-page UI. */
export function ApplicationMaterials({
  products,
  title = "Materials for your next idea",
  description = "Explore the board range with your designer or fabricator. The right grade, thickness and finish depend on your application and installation.",
  className,
}: {
  products: ProductDetail[];
  title?: string;
  description?: string;
  className?: string;
}) {
  return (
    <section
      id="materials"
      className={cn(
        "w-full px-[5%] py-[clamp(40px,4.5vw,64px)] scroll-mt-24 max-sm:px-[4%] max-sm:py-8",
        className,
      )}
      aria-label={title}
    >
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-8 max-w-3xl">
          <p className="mb-2 text-xs tracking-[.2em] uppercase text-muted font-medium">
            Recommended Composite Boards
          </p>
          <Heading className="max-w-3xl">{title}</Heading>
          {description && (
            <p className="mt-4 max-w-2xl text-base leading-relaxed font-light text-ink/80">
              {description}
            </p>
          )}
        </div>

        <div className="grid grid-cols-3 gap-6 max-phone:grid-cols-1 max-phone:gap-8">
          {products.map((product) => (
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              className="group flex flex-col justify-between rounded-xs border border-line/60 bg-white p-4 transition-all duration-300 hover:border-ink/40 hover:shadow-sm"
            >
              <div>
                <div className="overflow-hidden rounded-xs bg-stone">
                  <img
                    src={product.card.image}
                    alt={product.title}
                    loading="lazy"
                    className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none"
                  />
                </div>
                {product.specs?.thickness && (
                  <p className="mt-3 text-[11px] font-mono uppercase tracking-wider text-muted">
                    Available: {product.specs.thickness}
                  </p>
                )}
              </div>
              <div className="mt-4 flex items-center justify-between gap-4 border-t border-line/60 pt-3.5">
                <h3 className="text-base font-normal uppercase tracking-tight text-ink group-hover:text-black">
                  {product.title}
                </h3>
                <ArrowIcon />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
