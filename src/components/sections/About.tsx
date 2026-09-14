import Link from "next/link";
import { Compass, ShieldCheck, Clock, Sparkles, ArrowUpRight } from "lucide-react";

export function About() {
  return (
    <section className="section-about" id="about" aria-label="About Defense Ply">
      <div className="section-about__container">
        {/* Header with editorial headline */}
        <header className="section-about__header">
          <h2 className="section-about__headline font-family-diagramm font-light">
            For over 25 years, our team has engineered bespoke architectural surfaces,
            uniting sustainable innovation with timeless design for spaces that inspire.
          </h2>
        </header>

        {/* 3-Card Grid */}
        <div className="section-about__cards">
          {/* Card 1: Features & CTA */}
          <article className="section-about__card section-about__card--features">
            <div>
              <div className="section-about__icon-box" aria-hidden="true">
                <Compass size={22} strokeWidth={1.75} />
              </div>
              <p className="section-about__desc">
                Explore Defense Ply surfaces with collections crafted for residential,
                commercial, and outdoor spaces. Exceptional durability, zero porosity,
                and bespoke finishes tailored to your vision.
              </p>
            </div>

            <div>
              <div className="section-about__chips">
                <div className="section-about__chip">
                  <span className="section-about__chip-icon" aria-hidden="true">
                    <ShieldCheck size={16} strokeWidth={1.8} />
                  </span>
                  <span>Zero Porosity</span>
                </div>
                <div className="section-about__chip">
                  <span className="section-about__chip-icon" aria-hidden="true">
                    <Clock size={16} strokeWidth={1.8} />
                  </span>
                  <span>25-Yr Warranty</span>
                </div>
                <div className="section-about__chip">
                  <span className="section-about__chip-icon" aria-hidden="true">
                    <Sparkles size={16} strokeWidth={1.8} />
                  </span>
                  <span>Eco-Engineered</span>
                </div>
              </div>

              <div className="section-about__actions">
                <a href="#contact" className="section-about__btn-pill">
                  Contact Us
                </a>
                <a
                  href="#contact"
                  className="section-about__btn-circle"
                  aria-label="Contact Defense Ply team"
                >
                  <ArrowUpRight size={18} strokeWidth={2} />
                </a>
              </div>
            </div>
          </article>

          {/* Card 2: Center Hero Image */}
          <article className="section-about__card section-about__card--image">
            <div className="section-about__image-container">
              <img
                src="/assets/Casa-Navacerrada-LGC-2.jpg"
                alt="Luxury architectural surface interior"
                className="section-about__image-bg"
                loading="lazy"
              />
              <div className="section-about__image-overlay" />
              <h3 className="section-about__image-title">Architectural Mastery</h3>
            </div>
          </article>

          {/* Card 3: Stacked Gallery */}
          <article className="section-about__card section-about__card--gallery">
            <div className="section-about__stack-stage" aria-hidden="true">
              <div className="section-about__stack-photo section-about__stack-photo--left">
                <img
                  src="/assets/cosentino-city-barcelona.avif"
                  alt="City showroom surface installation"
                  loading="lazy"
                />
              </div>
              <div className="section-about__stack-photo section-about__stack-photo--center">
                <img
                  src="/assets/proyecto-barquillo.avif"
                  alt="Curated residential architectural space"
                  loading="lazy"
                />
              </div>
              <div className="section-about__stack-photo section-about__stack-photo--right">
                <img
                  src="/assets/battersea-residential.avif"
                  alt="Premium stone countertop and cladding"
                  loading="lazy"
                />
              </div>
            </div>

            <p className="section-about__gallery-desc">
              Stories and moments from architects and homeowners who transformed
              their spaces with our surfaces.
            </p>
          </article>
        </div>

        {/* 4-Column Statistics Row */}
        <div className="section-about__stats">
          <div className="section-about__stat-item">
            <span className="section-about__stat-number">25+</span>
            <span className="section-about__stat-label">years of excellence</span>
          </div>
          <div className="section-about__stat-item">
            <span className="section-about__stat-number">1,200+</span>
            <span className="section-about__stat-label">completed projects</span>
          </div>
          <div className="section-about__stat-item">
            <span className="section-about__stat-number">50+</span>
            <span className="section-about__stat-label">curated finishes</span>
          </div>
          <div className="section-about__stat-item">
            <span className="section-about__stat-number">100%</span>
            <span className="section-about__stat-label">sustainable craft</span>
          </div>
        </div>
      </div>
    </section>
  );
}
