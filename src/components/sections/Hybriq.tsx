/* Original visual structure, implemented as editable React markup. */
export function Hybriq() {
  return (
    <section
      className="bg-section section-hybriq p-60"
      id="section-hybriq-599552f9-f1a6-405a-8e55-94e40639832a"
    >
      <div className="section-hybriq__col section-hybriq__col-title">
        <h2 className="font-40 font-family-diagramm font-light uppercase">
          {
            "Silestone. The first mineral surface with low silica content. With exclusive Hybriq+ technology."
          }
        </h2>
        <a
          title="Learn more about Hybriq+"
          href="#"
          className="btn btn-borde-negro-azul btn- font-14"
        >
          {"Learn more about Hybriq+"}
          <span className="arrow-link"></span>
        </a>
      </div>
      <div className="section-hybriq__col section-hybriq__col-slider">
        <div className="core-slider">
          <div className="core-slider__slide number-slide-0">
            <img
              className="core-slider__slide__image"
              src="/assets/hybriq.jpg"
              alt=""
              loading="lazy"
              width={743}
              height={531}
            />
            <div className="core-slider__slide__filter"></div>
            <div className="core-slider__slide__card-body">
              <div className="core-slider__slide__card-body__block"></div>
              <div className="core-slider__slide__card-body__block">
                <div className="core-slider__slide__card-body__arrow"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
