"use client";
import { useState } from "react";
import spaces from "@/data/spaces.json";
import { Carousel, Arrow } from "@/components/ui/Carousel";
export function Spaces() {
  const [active, setActive] = useState<keyof typeof spaces>("Kitchens");
  return (
    <div className="bg-section bg-gris-claro" id="spaces">
      <div className="bg-section__container">
        <hr />
        <section className="section-espacios">
          <div className="row-1">
            <p className="font-16 font-family-diagramm font-normal text-center">
              Cosentino Architectural Surfaces
            </p>
            <h2 className="font-40 font-family-diagramm font-light text-center">
              Meaningful Design to Inspire People’s Lives
            </h2>
          </div>
          <div className="row-2">
            <div className="core-tabs pb-40">
              <Carousel
                key={active}
                wrapSlider={(slider) => (
                  <div id="spaces-panel" role="tabpanel" aria-label={active}>
                    {slider}
                  </div>
                )}
                controls={(h) => (
                  <div className="core-tabs__nav">
                    <ul
                      className="core-tabs__nav__tags"
                      role="tablist"
                      aria-label="Explore spaces"
                    >
                      {(Object.keys(spaces) as (keyof typeof spaces)[]).map(
                        (t) => (
                          <li key={t}>
                            <button
                              type="button"
                              role="tab"
                              aria-selected={active === t}
                              aria-controls="spaces-panel"
                              className={`core-tabs__nav__tags-item font-15 font-light ${active === t ? "active" : ""}`}
                              onClick={() => setActive(t)}
                            >
                              {t}
                            </button>
                          </li>
                        ),
                      )}
                    </ul>
                    <div className="core-tabs__nav__arrows">
                      <Arrow
                        direction="left"
                        aria-label="Previous spaces"
                        onClick={h.previous}
                        disabled={h.page === 1}
                      />
                      <Arrow
                        aria-label="Next spaces"
                        onClick={h.next}
                        disabled={h.page === h.pages}
                      />
                    </div>
                  </div>
                )}
              >
                {spaces[active].map((c) => (
                  <a
                    key={c.title}
                    className="core-slider__slide keen-slider__slide"
                    href="#"
                  >
                    <img
                      className="core-slider__slide__image"
                      src={c.image}
                      alt={c.title}
                      loading="lazy"
                    />
                    <div className="core-slider__slide__filter" />
                    <div className="core-slider__slide__card-body">
                      <div className="core-slider__slide__card-body__block">
                        <h3 className="core-slider__slide__card-body__name font-16">
                          {c.title}
                        </h3>
                      </div>
                      <div className="core-slider__slide__card-body__block">
                        <div className="core-slider__slide__card-body__arrow">
                          <span className="arrow-link" />
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </Carousel>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
