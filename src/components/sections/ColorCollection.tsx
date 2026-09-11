"use client";
import { useState } from "react";
import colors from "@/data/colors.json";
import { Carousel, Arrow } from "@/components/ui/Carousel";
const brands = [
  ["all", "All brands"],
  ["eclos", "Ēclos"],
  ["dekton", "Dekton"],
  ["silestone", "Silestone"],
  ["sensa", "Sensa"],
];
export function ColorCollection() {
  const [brand, setBrand] = useState("all");
  const items = colors.filter((c) => brand === "all" || c.brand === brand);
  return (
    <section className="section-colores spacing-y-s" id="colors">
      <div className="row-2 section-colores__layout">

            <Carousel
              wrapSlider={slider => <div className="section-colores__content">          <aside className="section-colores__filters">
            <div className="section-colores__filters-desktop">
              <p className="font-body-base font-light section-colores__filters-title">
                Brands
              </p>
              <nav
                className="section-colores__brands-list"
                aria-label="Filter colors by brand"
              >
                {brands.map(([id, label]) => (
                  <button
                    type="button"
                    key={id}
                    aria-pressed={brand === id}
                    className={`font-body-base font-light ${brand === id ? "active" : ""}`}
                    onClick={() => setBrand(id)}
                  >
                    {label}
                  </button>
                ))}
              </nav>
            </div>
            <div className="section-colores__filters-mobile">
              <label
                htmlFor="brand-filter"
                className="font-body-base font-light section-colores__filters-title"
              >
                Brands
              </label>
              <select
                id="brand-filter"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              >
                {brands.map(([id, label]) => (
                  <option key={id} value={id}>
                    {label}
                  </option>
                ))}
              </select>
            </div>
          </aside><div className="core-tabs__content">{slider}</div></div>}
              key={brand}
              desktop={5}
              tablet={4}
              mobile={2.2}
              controls={(h) => (
                <div className="section-colores__header-row">
                  <div
                    id="slider-nav-colors"
                    className="slider-nav slider-nav-colores progress_bar_max_width section-colores__slider-nav d-flex align-items-center justify-content-between"
                  >
                    <p className="font-body-base slider-nav-colores__page-count">
                      {String(h.page).padStart(2, "0")}/
                      {String(h.pages).padStart(2, "0")}
                    </p>
                    <div className="slider-nav-colores__bottom-row">
                      <div className="progress-container">
                        <div
                          id="progress-bar-colors"
                          style={{ width: `${(h.page / h.pages) * 100}%` }}
                        />
                      </div>
                      <Arrow
                        direction="left"
                        aria-label="Previous colors"
                        onClick={h.previous}
                        disabled={h.page === 1}
                      />
                      <Arrow
                        aria-label="Next colors"
                        onClick={h.next}
                        disabled={h.page === h.pages}
                      />
                    </div>
                  </div>
                </div>
              )}
            >
              {items.map((c) => (
                <div
                  className="core-slider__slide keen-slider__slide"
                  key={c.title}
                >
                  <a className="core-slider__item" href={c.href}>
                    <h3 className="core-slider__slide__card-body__name font-body-base">
                      {c.title}
                    </h3>
                    <div className="contenido">
                      <img
                        className="core-slider__slide__image"
                        src={c.image}
                        alt={`${c.title} surface`}
                        loading="lazy"
                      />
                      <div className="core-slider__slide__filter" />
                    </div>
                    <div className="core-slider__slide__card-body__block">
                      <div className="core-slider__slide__card-body__arrow">
                        <span className="arrow-text font-body-base">
                          View color
                        </span>
                        <span className="arrow">
                          <svg
                            width="25"
                            height="25"
                            viewBox="0 0 25 25"
                            fill="none"
                          >
                            <path
                              d="m13 4 8 8-8 8M21 12H1"
                              stroke="currentColor"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </Carousel>
      </div>
    </section>
  );
}
