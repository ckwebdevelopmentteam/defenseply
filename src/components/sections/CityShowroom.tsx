/* Original visual structure, implemented as editable React markup. */
export function CityShowroom() {
  return (
    <section
      className="section-city"
      id="section-city-98f14649-d9c4-45c2-9d34-526df62115b7"
    >
      <div className="section-city__col section-city__col-title">
        <img src="/assets/LOGO-CITY.svg" alt="" loading="lazy" width={256.0} height={21.0} />
        <img
          className="section-city__col-title__image"
          src="/assets/we-talk-design.jpg"
          alt=""
          loading="lazy"
        />
        <div className="cta px-md-5">
          <p className="font-16 text-center">
            {
              "A space for inspiration, connection, and creation to bring any design or architectural project to life."
            }
          </p>
          <a
            title="More information"
            href="https://www.cosentino.com/usa/professional/cosentino-city/"
            className="btn btn-borde-negro-azul btn- font-14"
          >
            {"More information"}
            <span className="arrow-link"></span>
          </a>
        </div>
      </div>
      <div className="section-city__col section-city__col-rigth">
        <img src="/assets/JoseManuelFerrao2023_002.jpg" alt="" loading="lazy" />
      </div>
    </section>
  );
}
