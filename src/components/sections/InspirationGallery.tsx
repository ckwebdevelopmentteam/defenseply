"use client";
import { useState } from "react";
import {
  Grid2X2,
  Columns2,
  Square,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import gallery from "@/data/gallery.json";
import { Carousel } from "@/components/ui/Carousel";
import { Dialog } from "@/components/ui/Dialog";
const categories = [
  "All spaces",
  "Kitchens",
  "Bathrooms",
  "Other interiors",
  "Outdoor",
  "Facades",
  "Commercial",
];
// The public gallery snapshot is kept local; category membership is editable here.
const categoryIndices: Record<string, number[]> = {
  "All spaces": gallery.map((_, i) => i),
  Kitchens: [0, 2, 3, 5, 8, 12, 13, 14, 17],
  Bathrooms: [1, 4, 6, 7, 9],
  "Other interiors": [0, 1, 2, 9, 15, 16, 17],
  Outdoor: [7, 10, 11, 12],
  Facades: [10, 11, 12],
  Commercial: [0, 1, 2, 6, 15],
};
export function InspirationGallery() {
  const [category, setCategory] = useState("All spaces"),
    [view, setView] = useState("grid-2x2"),
    [selected, setSelected] = useState<number | null>(null);
  const items = categoryIndices[category].map((i) => gallery[i]);
  const groups = Array.from({ length: Math.ceil(items.length / 4) }, (_, i) =>
    items.slice(i * 4, i * 4 + 4),
  );
  return (
    <section className="section-galeria" id="gallery">
      <div className="row-1">
        <div className="core-header p-80">
          <div className="core-header__col core-header__col__title">
            <h2 className="font-display-md font-family-diagramm font-light">
              INSPIRATION GALLERIES
            </h2>
          </div>
          <div className="core-header__col core-header__col__description d-mobile-none" />
          <div className="core-header__col core-header__col__description d-mobile-none" />
        </div>
      </div>
      <div className="row-2">
        <div className="core-gallery pb-40">
          <div className="core-gallery__nav">
            <select
              className="gallery-mobile-select"
              aria-label="Gallery space"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              {categories.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
            <ul className="core-gallery__nav__tags" aria-label="Gallery space">
              {categories.map((c) => (
                <li key={c}>
                  <button
                    className={`core-gallery__nav__tags-item font-body-base font-normal ${category === c ? "active" : ""}`}
                    onClick={() => setCategory(c)}
                    aria-pressed={category === c}
                  >
                    {c}
                  </button>
                </li>
              ))}
            </ul>
            <div className="core-gallery__nav__view-switcher">
              {[
                [Grid2X2, "grid-2x2", "Four-image grid"],
                [Columns2, "grid-2x1", "Two-image layout"],
                [Square, "grid-1x1", "Large-image layout"],
              ].map(([Icon, id, label]) => {
                const I = Icon as typeof Grid2X2;
                return (
                  <button
                    key={String(id)}
                    className={`view-option ${id} ${view === id ? "active" : ""}`}
                    aria-label={String(label)}
                    aria-pressed={view === id}
                    onClick={() => setView(String(id))}
                  >
                    <I strokeWidth={1} />
                  </button>
                );
              })}
            </div>
          </div>
          <div className="core-gallery__content">
            <Carousel
              key={category + view}
              className="core-gallery__content__grid"
              desktop={view === "grid-2x2" ? 2 : view === "grid-2x1" ? 1 : 0.5}
              tablet={view === "grid-2x2" ? 1 : 1}
              mobile={view === "grid-2x2" ? 2 : 1}
            >
              {groups.map((group, g) => (
                <div
                  className={`core-gallery__content__item keen-slider__slide ${view}`}
                  key={g}
                >
                  {group.map((item) => (
                    <button
                      className="core-gallery__content__item__image"
                      key={item.title}
                      aria-label={`View ${item.title}`}
                      onClick={() => setSelected(gallery.indexOf(item))}
                    >
                      <div className="core-gallery__content__item__filter">
                        <div className="core-gallery__content__item__filter__cruz" />
                      </div>
                      <img
                        className="core-gallery__thumb"
                        draggable={false}
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                      />
                    </button>
                  ))}
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
      <Dialog
        open={selected !== null}
        onClose={() => setSelected(null)}
        label="Project gallery"
        className="gallery-lightbox"
      >
        {selected !== null && (
          <div className="lightbox-content">
            <button
              className="lightbox-close"
              aria-label="Close gallery"
              onClick={() => setSelected(null)}
            >
              <X />
            </button>
            <button
              className="lightbox-prev"
              aria-label="Previous image"
              onClick={() =>
                setSelected((selected + gallery.length - 1) % gallery.length)
              }
            >
              <ChevronLeft />
            </button>
            <img src={gallery[selected].image} alt={gallery[selected].title} />
            <button
              className="lightbox-next"
              aria-label="Next image"
              onClick={() => setSelected((selected + 1) % gallery.length)}
            >
              <ChevronRight />
            </button>
            <a href={gallery[selected].href}>{gallery[selected].title}</a>
          </div>
        )}
      </Dialog>
    </section>
  );
}
