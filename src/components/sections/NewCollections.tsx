"use client";
import collections from "@/data/collections.json";
import { Carousel, Progress } from "@/components/ui/Carousel";
export function NewCollections() {
  return (
    <section className="core-slider-novedades" aria-label="Our Products">
      <div className="header">
        <div className="d-flex">
          <p className="font-body-base text-uppercase font-normal">Our Products</p>
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
      </div>
      <Carousel
        className=""
        controls={(h) => <Progress handle={h} id="collections" />}
      >
        {collections.map((c) => (
          <div
            key={c.title}
            className="core-slider-novedades__slide keen-slider__slide"
          >
            <a
              className="core-slider-novedades__slide__container"
              href={c.href}
            >
              <div className="shadow" />
              <img
                className="core-slider-novedades__slide__image"
                src={c.image}
                alt={c.title}
                loading="lazy"
              />
              {"hoverImage" in c && c.hoverImage && (
                <img
                  className="core-slider-novedades__slide__image-hover"
                  src={c.hoverImage}
                  alt={c.title}
                  loading="lazy"
                />
              )}
              <div className="core-slider-novedades__slide__card-body">
                <div className="core-slider-novedades__slide__card-body_top">
                  <div className="core-slider-novedades__slide__card-body__logo">
                    <p className="core-slider-novedades__logo">{c.label}</p>
                  </div>
                  <div className="cos-novedades__enlace">
                    <h3 className="core-slider-novedades__slide__card-body__name font-display-sm uppercase">
                      {c.title}
                    </h3>
                  </div>
                </div>
                <div className="extra">
                  <span className="arrow-link" />
                </div>
              </div>
            </a>
          </div>
        ))}
      </Carousel>
    </section>
  );
}
