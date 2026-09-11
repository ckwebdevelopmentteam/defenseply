/* Original visual structure, implemented as editable React markup. */
export function FreePower() {
  return (
    <div className="freepower-banner">
      <div className="core-cta-customizable bg-gris-claro free-power-cta">
        <div className="core-cta-customizable__text-col">
          <div className="core-cta-customizable__text-col__top">
            <p className="core-cta-customizable__text-col__bottom__text font-16 mb-32">
              {"FreePower Valet."}
            </p>
            <h2 className="font-light font-40">
              {
                "the most luxurious charging experience CRAFTED WITH SILESTONE® VERSAILLES IVORY"
              }
            </h2>
          </div>
          <div className="core-cta-customizable__text-col__bottom">
            <a
              title="Discover more"
              href="https://www.cosentino.com/landings-usa/freepower/"
              className="btn btn-blanco-negro btn- font-14"
            >
              {"Discover more"}
              <span className="arrow-link"></span>
            </a>
          </div>
        </div>
        <div className="core-cta-customizable__image-col">
          <img
            className="core-cta-customizable__image-col__image lazyloaded"
            src="/assets/free-power-cta.png"
            alt=""
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
