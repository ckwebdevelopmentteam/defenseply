import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  Check,
  ShieldCheck,
  Droplets,
  Flame,
  TreePine,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  FileText,
  ArrowRight,
  TrendingUp,
} from "lucide-react";

import { FloatingActions } from "@/components/ui/FloatingActions";
import { ProductGallery } from "@/components/product/ProductGallery";
import { ProductInquiryForm } from "@/components/product/ProductInquiryForm";
import { products, getProductBySlug, getAllProductSlugs } from "@/data/products";
import "@/styles/product-detail.css";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllProductSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found - Defenseply",
    };
  }

  return {
    title: `${product.title} - Defenseply Architectural Composites`,
    description: `${product.tagline}. High-performance eco-architecture solutions by Defenseply International LLP.`,
    openGraph: {
      title: `${product.title} - Defenseply`,
      description: product.tagline,
      images: product.gallery.length > 0 ? [{ url: product.gallery[0].src }] : [],
    },
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  // Related products (excluding current)
  const relatedProducts = products.filter((p) => p.slug !== product.slug).slice(0, 3);

  return (
    <>
      <main className="product-detail-page" id="main-content">
        {/* Breadcrumbs */}
        <div className="product-breadcrumb-wrap">
          <nav aria-label="Breadcrumb" className="product-breadcrumb">
            <Link href="/">Home</Link>
            <span className="product-breadcrumb__sep">/</span>
            <Link href="/#products">Products</Link>
            <span className="product-breadcrumb__sep">/</span>
            <span className="current" aria-current="page">
              {product.title}
            </span>
          </nav>
        </div>

        {/* Product Hero Section */}
        <section className="product-hero" aria-label="Product Overview">
          {/* Gallery Column */}
          <ProductGallery
            gallery={product.gallery}
            title={product.title}
            badge={product.badges[0]}
          />

          {/* Product Information Column */}
          <div className="product-info">
            <span className="product-info__category">{product.category}</span>
            <h1 className="product-info__title font-family-diagramm">{product.title}</h1>
            <p className="product-info__tagline">{product.tagline}</p>

            {/* Badges Pill Row */}
            <div className="product-info__badges">
              {product.badges.map((b) => (
                <span key={b} className="product-badge-pill">
                  <ShieldCheck size={14} />
                  {b}
                </span>
              ))}
            </div>

            {/* Highlights Grid */}
            <div className="product-highlights-grid">
              {product.highlights.map((h) => (
                <div key={h.label} className="product-highlight-item">
                  <span className="product-highlight-item__label">{h.label}</span>
                  <span className="product-highlight-item__value">{h.value}</span>
                </div>
              ))}
            </div>

            {/* Key Traits Checklist */}
            <div className="product-traits">
              <h2 className="product-traits__heading">Key Performance Highlights</h2>
              <ul className="product-traits__list">
                {product.traits.map((trait, idx) => (
                  <li key={idx} className="product-traits__item">
                    <Check size={16} />
                    <span>{trait}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="product-actions">
              <a href="#inquiry" className="btn-primary-defense">
                Request a Quote <ArrowRight size={15} />
              </a>
              <a
                href="https://wa.me/919605170000?text=Hi%20Defenseply%20team,%20I%20am%20interested%20in%20"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp-defense"
              >
                <MessageCircle size={16} /> WhatsApp Inquiry
              </a>
              <a href="tel:+919605170000" className="btn-outline-defense">
                <Phone size={15} /> +91 9605 170 000
              </a>
            </div>
          </div>
        </section>

        {/* Detailed Narrative Section */}
        <section className="product-section" aria-label="Engineering & Specifications">
          <div className="product-section__header">
            <span className="product-section__eyebrow">Engineering Excellence</span>
            <h2 className="product-section__title font-family-diagramm">
              Designed for Architectural Permanence
            </h2>
          </div>

          <div className="product-overview-card">
            <p>{product.description}</p>
            {product.extendedDescription.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          {/* Industry Insight Callout Box (from PDF) */}
          {product.industryInsight && (
            <aside className="industry-insight-box" aria-label="Industry Market Insight">
              <div className="industry-insight__stat-wrap">
                <span className="industry-insight__badge">
                  <TrendingUp size={13} style={{ display: "inline", marginRight: "4px" }} />
                  Industry Insight
                </span>
                <div className="industry-insight__stat font-family-diagramm">
                  {product.industryInsight.stat}
                </div>
              </div>
              <div className="industry-insight__content">
                <h3>{product.industryInsight.headline}</h3>
                <p>{product.industryInsight.description}</p>
                <span className="industry-insight__source">
                  Source: {product.industryInsight.source}
                </span>
              </div>
            </aside>
          )}
        </section>

        {/* Technical Specifications Matrix */}
        <section className="product-section" aria-label="Technical Specifications">
          <div className="product-section__header">
            <span className="product-section__eyebrow">Technical Parameters</span>
            <h2 className="product-section__title font-family-diagramm">
              Fits Into Your Vision
            </h2>
          </div>

          <div className="product-specs-table-wrap">
            <table className="product-specs-table">
              <tbody>
                <tr>
                  <th>Thickness Options</th>
                  <td>
                    <strong>{product.specs.thickness}</strong>
                  </td>
                </tr>
                <tr>
                  <th>Density Range</th>
                  <td>{product.specs.density}</td>
                </tr>
                <tr>
                  <th>Standard Dimensions</th>
                  <td>{product.specs.standardSize}</td>
                </tr>
                <tr>
                  <th>Available Finishes</th>
                  <td>
                    <div className="spec-chips">
                      {product.specs.finishes.map((f) => (
                        <span key={f} className="spec-chip">
                          {f}
                        </span>
                      ))}
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>Custom Colors</th>
                  <td>
                    <div className="spec-chips">
                      {product.specs.colors.map((c) => (
                        <span key={c} className="spec-chip">
                          {c}
                        </span>
                      ))}
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>Water & Moisture Rating</th>
                  <td>{product.specs.waterResistance}</td>
                </tr>
                {product.specs.fireRating && (
                  <tr>
                    <th>Fire Resistance</th>
                    <td>{product.specs.fireRating}</td>
                  </tr>
                )}
                <tr>
                  <th>Screw Holding & Fastening</th>
                  <td>{product.specs.screwHolding}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Applications Showcase */}
        <section className="product-section" aria-label="Architectural Applications">
          <div className="product-section__header">
            <span className="product-section__eyebrow">Versatile Applications</span>
            <h2 className="product-section__title font-family-diagramm">
              Where {product.title} Excels
            </h2>
          </div>

          <div className="product-applications-grid">
            {product.applications.map((app) => (
              <article key={app.title} className="product-app-card">
                <div className="product-app-card__image-wrap">
                  <img src={app.image} alt={app.title} className="product-app-card__image" loading="lazy" />
                </div>
                <div className="product-app-card__content">
                  <h3 className="product-app-card__title">{app.title}</h3>
                  <p className="product-app-card__desc">{app.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Green Promise Banner */}
        <section className="product-section" aria-label="Defenseply Green Promise">
          <div className="green-promise-card">
            <div className="green-promise__left">
              <span className="product-section__eyebrow">
                Sustainable Eco-Architecture
              </span>
              <h3 className="font-family-diagramm">The Defenseply Green Promise</h3>
              <p>
                Defenseply products are the guardians of tomorrow's greenery. By choosing composite
                boards and architectural profiles, you choose a future of conscious luxury.
              </p>
            </div>
            <div className="green-promise__points">
              <div className="green-promise__point">
                <TreePine size={18} /> Zero Deforestation
              </div>
              <div className="green-promise__point">
                <Sparkles size={18} /> Lower Carbon Footprint
              </div>
              <div className="green-promise__point">
                <Droplets size={18} /> 100% Recyclable
              </div>
              <div className="green-promise__point">
                <ShieldCheck size={18} /> Sustainable Living
              </div>
            </div>
          </div>
        </section>

        {/* Inquiry & Direct Contact Form */}
        <section className="product-inquiry-section" id="inquiry" aria-label="Request Technical Quote">
          <div className="product-inquiry-wrap">
            <div className="product-inquiry__info">
              <span className="product-section__eyebrow">Direct Factory Connect</span>
              <h2 className="font-family-diagramm">Order or Request Specs for {product.title}</h2>
              <p>
                Strategically manufactured at our modern 2-acre facility along the
                Panvel–Kochi–Kanyakumari National Highway in KINFRA Industrial Park, Kuttippuram, Kerala.
                We supply architects, interior contractors, and commercial builders across South India
                and the Middle East.
              </p>

              <div className="product-contact-items">
                <div className="product-contact-item">
                  <MapPin size={18} />
                  <span>
                    Plot No: 06, KINFRA Industrial Park, Valanchery Road, Kuttippuram, Malappuram
                    Dist, Kerala – 679571
                  </span>
                </div>
                <div className="product-contact-item">
                  <Phone size={18} />
                  <span>+91 9605 170 000 / +91 9388 377 110</span>
                </div>
                <div className="product-contact-item">
                  <Mail size={18} />
                  <span>defenseply@gmail.com</span>
                </div>
              </div>
            </div>

            <ProductInquiryForm productTitle={product.title} />
          </div>
        </section>

        {/* Related Products Section */}
        <section className="product-section" aria-label="Explore Related Products">
          <div className="product-section__header">
            <span className="product-section__eyebrow">Complete Portfolio</span>
            <h2 className="product-section__title font-family-diagramm">Explore Related Surfaces</h2>
          </div>

          <div className="related-products-grid">
            {relatedProducts.map((rel) => (
              <Link key={rel.slug} href={`/products/${rel.slug}`} className="related-product-card">
                <div className="related-product-card__image-wrap">
                  <img
                    src={rel.gallery[0]?.src || "/assets/products/pvcfoamdf(main).webp"}
                    alt={rel.title}
                    className="related-product-card__image"
                    loading="lazy"
                  />
                </div>
                <div className="related-product-card__body">
                  <span className="related-product-card__cat">{rel.category}</span>
                  <h3 className="related-product-card__title">{rel.title}</h3>
                  <p className="related-product-card__tagline">{rel.tagline}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <FloatingActions />
    </>
  );
}
