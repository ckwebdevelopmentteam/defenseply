import Link from "next/link";
import type { ProductDetail } from "@/types/product";
import { Heading } from "@/components/ui/Heading";
import { ArrowIcon } from "@/components/ui/ActionLink";

/** Uses catalog content and imagery, independently of the provisional detail-page UI. */
export function ApplicationMaterials({
  products,
}: {
  products: ProductDetail[];
}) {
  return (
    <section className="px-[5%] py-[clamp(56px,7vw,112px)]">
      <div className="mx-auto max-w-[1440px]">
        <Heading className="max-w-3xl">Materials for your next idea</Heading>
        <p className="mt-6 mb-10 max-w-2xl text-base leading-relaxed font-light">
          Explore the board range with your designer or fabricator. The right
          grade, thickness and finish depend on your application and
          installation.
        </p>
        <div className="grid grid-cols-3 gap-6 max-phone:grid-cols-1 max-phone:gap-10">
          {products.map((product) => (
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              className="group block"
            >
              <div className="overflow-hidden bg-stone">
                <img
                  src={product.card.image}
                  alt={product.title}
                  loading="lazy"
                  className="aspect-[6/5] w-full object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none"
                />
              </div>
              <div className="mt-5 flex items-center justify-between gap-4 border-b border-line pb-5">
                <h3 className="text-lg font-light uppercase">
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
