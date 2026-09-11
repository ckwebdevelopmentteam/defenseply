/* Original visual structure, implemented as editable React markup. */
export function Renovation() {
  return (
    <div className="core-cta">
      <div className="core-cta__text-col cta-text bg-gris-claro">
        <div className="core-cta__text-col__top">
          <h2 className="font-40 font-light">
            {"DO YOU HAVE A RENOVATION? WE CAN HELP YOU"}
          </h2>
        </div>
        <div className="core-cta__text-col__bottom">
          <p className="core-cta__text-col__bottom__text font-16">
            {
              "Our extensive network of collaborators allows us to offer you advice for any renovation across five continents."
            }
          </p>
          <a
            title="Where to buy"
            href="https://www.cosentino.com/usa/where-to-buy/#appointment"
            className="btn btn-negro-azul btn- font-14 mt-32"
          >
            {"Where to buy"}
            <span className="arrow-link"></span>
          </a>
        </div>
      </div>
      <div className="core-cta__image-col cta-image">
        <img
          className="core-cta__image-col__image"
          src="/assets/Casa-Navacerrada-LGC-2.jpg"
          alt=""
          loading="lazy"
        />
      </div>
    </div>
  );
}
