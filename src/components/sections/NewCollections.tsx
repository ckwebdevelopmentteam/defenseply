"use client";
import collections from "@/data/collections.json";
import { Carousel, Progress } from "@/components/ui/Carousel";
export function NewCollections() {
  return (
    <section className="core-slider-novedades" aria-label="Our Products">
      <div className="header">
        <div className="d-flex">
          <h2 className="font-display-md font-family-diagramm font-light text-uppercase">
            Our Products
          </h2>
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
                  <div className="core-slider__slide__card-body__arrow">
                    <span className="arrow-link" />
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
