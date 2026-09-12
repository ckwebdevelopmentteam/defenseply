"use client";
import brands from "@/data/brands.json";
import { Carousel } from "@/components/ui/Carousel";
const names = ["dekton", "silestone", "eclos", "sensa"];
export function BrandShowcase() {
  return (
    <section className="section-marcas pb-60" id="brands">
      <div className="row-1">
        <div className="core-header p-80">
          <div className="core-header__col core-header__col__title">
            <h2 className="font-display-md font-family-diagramm font-light">
              VERSATILE SOLUTIONS FOR ANY SPACE
            </h2>
          </div>
          <div className="core-header__col core-header__col__description">
            <p className="font-16 font-light">
              The low porosity and high resistance of our surfaces, along with
              the wide variety of finishes, thicknesses, and formats available,
              make us the perfect ally for all types of spaces.
            </p>
          </div>
          <div className="core-header__col core-header__col__description">
            <p className="font-16 font-light">
              We offer the best solutions for flooring, cladding, countertops,
              facades... both for residential and commercial use. Discover the
              properties and applications of each of our brands.
            </p>
          </div>
        </div>
      </div>
      <div className="row-2">
        <Carousel desktop={3} tablet={2} mobile={1.1}>
          {brands.map((b, i) => (
            <a
              className="core-slider__slide keen-slider__slide"
              key={b.image}
              href={b.href}
            >
              <img
                className="core-slider__slide__image"
                src={b.image}
                alt={`${names[i]} architectural surface`}
                loading="lazy"
              />
              <div className="core-slider__slide__filter" />
              <div className="core-slider__slide__card-body">
                <div className="core-slider__slide__card-body__block">
                  <img
                    className="brand-mark"
                    src={`/assets/${names[i]}.svg`}
                    alt={names[i]}
                  />
                </div>
                <div className="core-slider__slide__card-body__block">
                  <p className="core-slider__slide__card-body__description font-16">
                    {b.description}
                  </p>
                  <div className="core-slider__slide__card-body__arrow">
                    <span className="arrow-text">Learn More</span>
                    <span className="arrow-link" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
