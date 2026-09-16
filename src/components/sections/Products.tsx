"use client";
import { productCards } from "@/data/products";
import { Carousel, Progress } from "@/components/ui/Carousel";
import { ArrowIcon } from "@/components/ui/ActionLink";

export function Products({
  items = productCards,
}: {
  items?: typeof productCards;
} = {}) {
  return (
    <section
      id="products"
      data-section="products"
      className="page-bleed relative mb-20 border-y border-black/8 bg-stone px-[38px] py-18 max-phone:mb-12 max-phone:py-12"
      aria-label="Our Products"
    >
      {/* Ambient Section Highlight */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.65),transparent_70%)]" />

      {/* Centered Heading with Description */}
      <div className="relative mx-auto  flex max-w-[840px] flex-col items-center text-center max-phone:mb-8">
        <h2 className="text-display font-semibold uppercase antialiased tracking-tight text-ink mb-3 max-phone:mb-2 text-center">
          Our Products
        </h2>
        <p className="max-w-[700px] text-fluid font-light leading-[1.6] text-[#55534e] text-center mx-auto">
          Calibrated cellular composite boards, waterproof formulations, and precision-moulded architectural profiles engineered for demanding interior and structural environments.
        </p>
      </div>
      <Carousel controls={(h) => <Progress handle={h} id="products" />}>
        {items.map((item) => (
          <div
            className="keen-slider__slide group relative flex h-full flex-col overflow-hidden"
            key={item.title}
          >
            <a
              href={item.href}
              className="relative block h-full overflow-hidden"
            >
              {/* Base Image */}
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="inline w-full aspect-[6/5] object-cover align-middle max-phone:aspect-[3/4] transition-[transform,filter] duration-1000 ease-in-out group-hover:scale-105"
              />
              {/* Hover Image */}
              {"hoverImage" in item && item.hoverImage && (
                <img
                  src={item.hoverImage}
                  alt={item.title}
                  loading="lazy"
                  className="absolute inset-0 size-full aspect-[6/5] object-cover align-middle max-phone:aspect-[3/4] opacity-0 transition-opacity duration-1000 ease-in-out group-hover:opacity-100"
                />
              )}
              {/* Gradient Overlays */}
              <div className="absolute inset-0 bg-[linear-gradient(147deg,rgba(60,60,59,.55)_32%,rgba(60,60,59,.33)_50%,transparent_100%)] opacity-30 pointer-events-none" />
              <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,.4)_0%,transparent_35%,transparent_65%,rgba(0,0,0,.3)_100%)] pointer-events-none" />

              {/* Card Body */}
              <div className="absolute inset-0 flex flex-col justify-between p-8 text-white">
                <div className="flex flex-col gap-3">
                  <p className="text-[13px] leading-normal">{item.label}</p>
                  <h3 className="max-w-[80%] text-[22px] leading-6 font-light tracking-[.5px] uppercase">
                    {item.title}
                  </h3>
                </div>
                <div className="flex items-end justify-between">
                  <div className="flex items-center">
                    <ArrowIcon className="size-[25px] transition-transform duration-500 group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </Carousel>
    </section>
  );
}
