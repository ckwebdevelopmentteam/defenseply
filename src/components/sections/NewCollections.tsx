"use client";
import collections from "@/data/collections.json";
import { Carousel, Progress } from "@/components/ui/Carousel";
export function NewCollections({
  items = collections,
}: {
  items?: typeof collections;
}) {
  return (
    <section
      data-section="collections"
      className="page-bleed relative mb-25 bg-stone px-[38px] py-15"
      aria-label="New collections"
    >
      <div className="flex items-center gap-3">
        <p className="text-body">New</p>
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          aria-hidden="true"
        >
          <path d="m7 4 12 12M19 4v12H7" stroke="currentColor" />
        </svg>
      </div>
      <Carousel controls={(h) => <Progress handle={h} id="collections" />}>
        {items.map((item) => (
          <div
            className="keen-slider__slide relative flex h-full flex-col overflow-hidden"
            key={item.title}
          >
            <a href={item.href} className="relative">
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="inline w-full aspect-[6/5] object-cover align-middle max-phone:aspect-[3/4]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(147deg,rgba(60,60,59,.55)_32%,rgba(60,60,59,.33)_50%,transparent_100%)] opacity-30" />
              <div className="absolute inset-0 flex flex-col justify-between p-8 text-white">
                <div className="flex flex-col gap-3">
                  <p className="text-[13px] leading-normal">{item.label}</p>
                  <h3 className="max-w-[70%] text-[22px] leading-6 font-light tracking-[.5px] uppercase">
                    {item.title}
                  </h3>
                </div>
                <div className="flex items-end justify-between">
                  <span className="flex size-11 items-center justify-center rounded-full bg-white/40">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path d="M10 3v14M3 10h14" stroke="currentColor" />
                    </svg>
                  </span>
                  {item.isNew && (
                    <span className="h-5 w-12 rounded-xs bg-[#faf9c2] text-center text-xs leading-5 text-ink">
                      New
                    </span>
                  )}
                </div>
              </div>
            </a>
          </div>
        ))}
      </Carousel>
    </section>
  );
}
