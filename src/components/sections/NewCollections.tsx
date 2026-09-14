"use client";
import collections from "@/data/collections.json";
import { Carousel, Progress } from "@/components/ui/Carousel";
import { ArrowIcon } from "@/components/ui/ActionLink";

export function NewCollections({
  items = collections,
}: {
  items?: typeof collections;
} = {}) {
  return (
    <section
      data-section="collections"
      className="page-bleed relative mb-25 bg-stone px-[38px] py-15"
      aria-label="Our Products"
    >
      <div className="mb-8 flex items-center">
        <h2 className="font-display-md font-family-diagramm font-light uppercase tracking-tight text-ink text-[clamp(28px,2.5vw,42px)]">
          Our Products
        </h2>
      </div>
      <Carousel controls={(h) => <Progress handle={h} id="collections" />}>
        {items.map((item) => (
          <div
            className="keen-slider__slide group relative flex h-full flex-col overflow-hidden"
            key={item.title}
          >
            <a href={item.href} className="relative block h-full overflow-hidden">
              {/* Base Image */}
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="inline w-full aspect-[6/5] object-cover align-middle max-phone:aspect-[3/4] transition-[transform,filter] duration-500 group-hover:scale-105"
              />
              {/* Hover Image */}
              {"hoverImage" in item && item.hoverImage && (
                <img
                  src={item.hoverImage}
                  alt={item.title}
                  loading="lazy"
                  className="absolute inset-0 size-full aspect-[6/5] object-cover align-middle max-phone:aspect-[3/4] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
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
