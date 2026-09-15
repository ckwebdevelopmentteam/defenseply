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
  ArrowRight,
  TrendingUp,
} from "lucide-react";

import { FloatingActions } from "@/components/ui/FloatingActions";
import { ProductGallery } from "@/components/product/ProductGallery";
import { ProductInquiryForm } from "@/components/product/ProductInquiryForm";
import { ProductPageAnimations } from "@/components/product/ProductPageAnimations";
import { products, getProductBySlug, getAllProductSlugs } from "@/data/products";

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
      <ProductPageAnimations />
      <main className="bg-[#f7f7f6] text-[#1a1a1a] min-h-screen pb-20 max-sm:pb-[50px]" id="main-content">
        {/* Breadcrumbs */}
        <div className="pt-[120px] pb-6 px-[5%] max-w-[1440px] mx-auto max-sm:pt-[88px] max-sm:pb-3.5 max-sm:px-[4%] max-[390px]:pt-20 max-[390px]:pb-3 animate-fade-in">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs tracking-[0.8px] uppercase text-[#767472] flex-wrap max-sm:text-[10px] max-sm:gap-1.5">
            <Link href="/" className="text-[#767472] no-underline transition-colors duration-200 hover:text-[#1a1a1a]">
              Home
            </Link>
            <span className="opacity-40 text-[11px]">/</span>
            <Link href="/#products" className="text-[#767472] no-underline transition-colors duration-200 hover:text-[#1a1a1a]">
              Products
            </Link>
            <span className="opacity-40 text-[11px]">/</span>
            <span className="text-[#1a1a1a] font-medium" aria-current="page">
              {product.title}
            </span>
          </nav>
        </div>

        {/* Product Hero Section */}
        <section
          className="max-w-[1440px] mx-auto px-[5%] pb-[60px] grid grid-cols-[1.15fr_1fr] gap-[50px] items-start max-lg:grid-cols-1 max-lg:gap-8 max-lg:pb-[50px] max-sm:px-[4%] max-sm:pb-9 max-sm:gap-5 max-[390px]:pb-7"
          aria-label="Product Overview"
        >
          {/* Gallery Column */}
          <ProductGallery
            gallery={product.gallery}
            title={product.title}
            badge={product.badges[0]}
          />

          {/* Product Information Column */}
          <div className="flex flex-col animate-fade-up">
            <span className="text-[11px] tracking-[2px] uppercase text-[#8c827a] mb-2 font-medium font-sans">
              {product.category}
            </span>
            <h1 className="text-[clamp(28px,3.2vw,44px)] leading-[1.12] font-light tracking-[1px] uppercase text-[#1a1a1a] m-0 mb-4 font-sans max-sm:text-[clamp(20px,5.5vw,30px)] max-sm:tracking-[0.5px] max-sm:mb-3 max-[390px]:text-[19px]">
              {product.title}
            </h1>
            <p className="text-base leading-[1.6] text-[#4a4846] mb-6 font-normal max-sm:text-sm max-sm:mb-4">
              {product.tagline}
            </p>

            {/* Badges Pill Row */}
            <div className="flex flex-wrap gap-2 mb-7 max-sm:mb-[18px]">
              {product.badges.map((b) => (
                <span
                  key={b}
                  className="inline-flex items-center gap-1.5 py-1.5 px-3 bg-white border border-[#e2ded8] rounded-full text-xs font-medium tracking-[0.3px] text-[#2b2b2a] [&>svg]:text-[#155c3c]"
                >
                  <ShieldCheck size={14} />
                  {b}
                </span>
              ))}
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-3 p-5 bg-white border border-[#ebe8e2] rounded mb-7 max-sm:p-3.5 max-sm:gap-2.5 max-sm:mb-[18px] max-[390px]:grid-cols-1">
              {product.highlights.map((h) => (
                <div key={h.label} className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-[1px] text-[#8c827a] mb-1 font-sans font-medium">
                    {h.label}
                  </span>
                  <span className="text-[15px] font-semibold text-[#1a1a1a] max-sm:text-sm">
                    {h.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Key Traits Checklist */}
            <div className="mb-8 max-sm:mb-[22px]">
              <h2 className="text-[13px] uppercase tracking-[1.5px] font-semibold mb-3 text-[#1a1a1a] font-sans">
                Key Performance Highlights
              </h2>
              <ul className="list-none p-0 m-0 flex flex-col gap-2.5">
                {product.traits.map((trait, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-sm leading-[1.5] text-[#3b3937] [&>svg]:text-[#155c3c] [&>svg]:shrink-0 [&>svg]:mt-[3px] max-sm:text-[13px]"
                  >
                    <Check size={16} />
                    <span>{trait}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 pt-2 max-sm:flex-col max-sm:gap-2.5">
              <a
                href="#inquiry"
                className="inline-flex items-center justify-center gap-2.5 bg-[#1a1a1a] !text-white text-xs tracking-[1.2px] uppercase font-medium font-sans py-[15px] px-7 rounded-[2px] no-underline transition-all duration-200 border border-[#1a1a1a] hover:bg-[#333333] hover:-translate-y-0.5 max-sm:w-full max-sm:py-[13px] max-sm:px-[18px] max-sm:text-[11px]"
              >
                Request a Quote <ArrowRight size={15} />
              </a>
              <a
                href="https://wa.me/919605170000?text=Hi%20Defenseply%20team,%20I%20am%20interested%20in%20"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25d366] !text-white text-xs tracking-[0.8px] uppercase font-semibold font-sans py-[15px] px-5 rounded-[2px] no-underline transition-all duration-200 hover:bg-[#1ebe5d] hover:-translate-y-0.5 max-sm:w-full max-sm:py-[13px] max-sm:px-[18px] max-sm:text-[11px]"
              >
                <MessageCircle size={16} /> WhatsApp Inquiry
              </a>
              <a
                href="tel:+919605170000"
                className="inline-flex items-center justify-center gap-2.5 bg-transparent !text-[#1a1a1a] text-xs tracking-[1.2px] uppercase font-medium font-sans py-[15px] px-6 rounded-[2px] no-underline transition-all duration-200 border border-[#1a1a1a] hover:bg-[#1a1a1a] hover:!text-white hover:-translate-y-0.5 max-sm:w-full max-sm:py-[13px] max-sm:px-[18px] max-sm:text-[11px]"
              >
                <Phone size={15} /> +91 9605 170 000
              </a>
            </div>
          </div>
        </section>

        {/* Detailed Narrative Section */}
        <section
          className="max-w-[1440px] mx-auto py-[60px] px-[5%] max-[860px]:py-11 max-[860px]:px-[5%] max-sm:py-[34px] max-sm:px-[4%] max-[390px]:py-7"
          aria-label="Engineering & Specifications"
        >
          <div className="mb-9 max-[860px]:mb-6">
            <span className="block text-[11px] tracking-[2.5px] uppercase text-[#8c827a] mb-2 font-medium font-sans">
              Engineering Excellence
            </span>
            <h2 className="text-[clamp(24px,2.4vw,36px)] leading-[1.15] font-light tracking-[1px] uppercase text-[#1a1a1a] m-0 font-sans max-sm:text-[clamp(19px,5vw,26px)]">
              Designed for Architectural Permanence
            </h2>
          </div>

          <div className="bg-white border border-[#ebe8e2] rounded p-11 shadow-[0_4px_20px_rgba(0,0,0,0.02)] max-[860px]:p-7 max-[860px]:px-6 max-sm:py-[18px] max-sm:px-4 reveal-on-scroll">
            <p className="text-base leading-[1.8] text-[#3f3e3c] m-0 mb-5 last:mb-0 max-sm:text-sm max-sm:leading-[1.7] max-sm:mb-3.5">
              {product.description}
            </p>
            {product.extendedDescription.map((para, i) => (
              <p
                key={i}
                className="text-base leading-[1.8] text-[#3f3e3c] m-0 mb-5 last:mb-0 max-sm:text-sm max-sm:leading-[1.7] max-sm:mb-3.5"
              >
                {para}
              </p>
            ))}
          </div>

          {/* Industry Insight Callout Box (from PDF) */}
          {product.industryInsight && (
            <aside
              className="bg-gradient-to-br from-[#1f2322] to-[#151817] text-white rounded p-10 mt-10 grid grid-cols-[240px_1fr] gap-9 items-center relative overflow-hidden before:content-[''] before:absolute before:-top-1/2 before:-right-[20%] before:w-[300px] before:h-[300px] before:bg-[radial-gradient(circle,rgba(35,115,74,0.25)_0%,rgba(0,0,0,0)_70%)] before:pointer-events-none max-[860px]:grid-cols-1 max-[860px]:gap-6 max-[860px]:p-7 max-[860px]:px-6 max-sm:p-5 max-sm:px-4 max-sm:mt-6 reveal-on-scroll"
              aria-label="Industry Market Insight"
            >
              <div className="border-r border-white/12 pr-[30px] max-[860px]:border-r-0 max-[860px]:border-b max-[860px]:border-white/12 max-[860px]:pr-0 max-[860px]:pb-5">
                <span className="inline-block text-[11px] tracking-[1.5px] uppercase text-[#5ed694] mb-2 font-semibold font-sans">
                  <TrendingUp size={13} style={{ display: "inline", marginRight: "4px" }} />
                  Industry Insight
                </span>
                <div className="text-[clamp(32px,3.5vw,48px)] font-light leading-[1.1] text-white tracking-[-0.5px] font-sans max-sm:text-[clamp(28px,8vw,40px)]">
                  {product.industryInsight.stat}
                </div>
              </div>
              <div className="flex flex-col">
                <h3 className="text-[19px] font-medium m-0 mb-2.5 text-white font-sans tracking-[0.5px] uppercase max-sm:text-base">
                  {product.industryInsight.headline}
                </h3>
                <p className="text-[15px] leading-[1.6] text-[#c4c1bd] m-0 mb-3">
                  {product.industryInsight.description}
                </p>
                <span className="text-[11px] text-[#8c8985] uppercase tracking-[1px] font-sans">
                  Source: {product.industryInsight.source}
                </span>
              </div>
            </aside>
          )}
        </section>

        {/* Technical Specifications Matrix */}
        <section
          className="max-w-[1440px] mx-auto py-[60px] px-[5%] max-[860px]:py-11 max-[860px]:px-[5%] max-sm:py-[34px] max-sm:px-[4%] max-[390px]:py-7"
          aria-label="Technical Specifications"
        >
          <div className="mb-9 max-[860px]:mb-6">
            <span className="block text-[11px] tracking-[2.5px] uppercase text-[#8c827a] mb-2 font-medium font-sans">
              Technical Parameters
            </span>
            <h2 className="text-[clamp(24px,2.4vw,36px)] leading-[1.15] font-light tracking-[1px] uppercase text-[#1a1a1a] m-0 font-sans max-sm:text-[clamp(19px,5vw,26px)]">
              Fits Into Your Vision
            </h2>
          </div>

          <div className="bg-white border border-[#ebe8e2] rounded overflow-x-auto shadow-[0_4px_20px_rgba(0,0,0,0.02)] reveal-on-scroll">
            <table className="w-full border-collapse text-left min-w-[320px]">
              <tbody>
                <tr className="border-b border-[#f0ece5] last:border-b-0 even:bg-[#faf9f6]">
                  <th className="py-4 px-5 text-xs uppercase tracking-[1px] text-[#706b65] font-semibold w-[36%] align-top font-sans max-sm:py-3 max-sm:px-3.5 max-sm:text-[10px] max-sm:whitespace-nowrap">
                    Thickness Options
                  </th>
                  <td className="py-4 px-5 text-[14.5px] leading-[1.5] text-[#1a1a1a] align-top max-sm:py-3 max-sm:px-3.5 max-sm:text-[13px]">
                    <strong>{product.specs.thickness}</strong>
                  </td>
                </tr>
                <tr className="border-b border-[#f0ece5] last:border-b-0 even:bg-[#faf9f6]">
                  <th className="py-4 px-5 text-xs uppercase tracking-[1px] text-[#706b65] font-semibold w-[36%] align-top font-sans max-sm:py-3 max-sm:px-3.5 max-sm:text-[10px] max-sm:whitespace-nowrap">
                    Density Range
                  </th>
                  <td className="py-4 px-5 text-[14.5px] leading-[1.5] text-[#1a1a1a] align-top max-sm:py-3 max-sm:px-3.5 max-sm:text-[13px]">
                    {product.specs.density}
                  </td>
                </tr>
                <tr className="border-b border-[#f0ece5] last:border-b-0 even:bg-[#faf9f6]">
                  <th className="py-4 px-5 text-xs uppercase tracking-[1px] text-[#706b65] font-semibold w-[36%] align-top font-sans max-sm:py-3 max-sm:px-3.5 max-sm:text-[10px] max-sm:whitespace-nowrap">
                    Standard Dimensions
                  </th>
                  <td className="py-4 px-5 text-[14.5px] leading-[1.5] text-[#1a1a1a] align-top max-sm:py-3 max-sm:px-3.5 max-sm:text-[13px]">
                    {product.specs.standardSize}
                  </td>
                </tr>
                <tr className="border-b border-[#f0ece5] last:border-b-0 even:bg-[#faf9f6]">
                  <th className="py-4 px-5 text-xs uppercase tracking-[1px] text-[#706b65] font-semibold w-[36%] align-top font-sans max-sm:py-3 max-sm:px-3.5 max-sm:text-[10px] max-sm:whitespace-nowrap">
                    Available Finishes
                  </th>
                  <td className="py-4 px-5 text-[14.5px] leading-[1.5] text-[#1a1a1a] align-top max-sm:py-3 max-sm:px-3.5 max-sm:text-[13px]">
                    <div className="flex flex-wrap gap-1.5">
                      {product.specs.finishes.map((f) => (
                        <span key={f} className="inline-block py-[3px] px-2.5 bg-[#ebe7e0] rounded-full text-xs text-[#2b2b2a]">
                          {f}
                        </span>
                      ))}
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-[#f0ece5] last:border-b-0 even:bg-[#faf9f6]">
                  <th className="py-4 px-5 text-xs uppercase tracking-[1px] text-[#706b65] font-semibold w-[36%] align-top font-sans max-sm:py-3 max-sm:px-3.5 max-sm:text-[10px] max-sm:whitespace-nowrap">
                    Custom Colors
                  </th>
                  <td className="py-4 px-5 text-[14.5px] leading-[1.5] text-[#1a1a1a] align-top max-sm:py-3 max-sm:px-3.5 max-sm:text-[13px]">
                    <div className="flex flex-wrap gap-1.5">
                      {product.specs.colors.map((c) => (
                        <span key={c} className="inline-block py-[3px] px-2.5 bg-[#ebe7e0] rounded-full text-xs text-[#2b2b2a]">
                          {c}
                        </span>
                      ))}
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-[#f0ece5] last:border-b-0 even:bg-[#faf9f6]">
                  <th className="py-4 px-5 text-xs uppercase tracking-[1px] text-[#706b65] font-semibold w-[36%] align-top font-sans max-sm:py-3 max-sm:px-3.5 max-sm:text-[10px] max-sm:whitespace-nowrap">
                    Water & Moisture Rating
                  </th>
                  <td className="py-4 px-5 text-[14.5px] leading-[1.5] text-[#1a1a1a] align-top max-sm:py-3 max-sm:px-3.5 max-sm:text-[13px]">
                    {product.specs.waterResistance}
                  </td>
                </tr>
                {product.specs.fireRating && (
                  <tr className="border-b border-[#f0ece5] last:border-b-0 even:bg-[#faf9f6]">
                    <th className="py-4 px-5 text-xs uppercase tracking-[1px] text-[#706b65] font-semibold w-[36%] align-top font-sans max-sm:py-3 max-sm:px-3.5 max-sm:text-[10px] max-sm:whitespace-nowrap">
                      Fire Resistance
                    </th>
                    <td className="py-4 px-5 text-[14.5px] leading-[1.5] text-[#1a1a1a] align-top max-sm:py-3 max-sm:px-3.5 max-sm:text-[13px]">
                      {product.specs.fireRating}
                    </td>
                  </tr>
                )}
                <tr className="border-b border-[#f0ece5] last:border-b-0 even:bg-[#faf9f6]">
                  <th className="py-4 px-5 text-xs uppercase tracking-[1px] text-[#706b65] font-semibold w-[36%] align-top font-sans max-sm:py-3 max-sm:px-3.5 max-sm:text-[10px] max-sm:whitespace-nowrap">
                    Screw Holding & Fastening
                  </th>
                  <td className="py-4 px-5 text-[14.5px] leading-[1.5] text-[#1a1a1a] align-top max-sm:py-3 max-sm:px-3.5 max-sm:text-[13px]">
                    {product.specs.screwHolding}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Applications Showcase */}
        <section
          className="max-w-[1440px] mx-auto py-[60px] px-[5%] max-[860px]:py-11 max-[860px]:px-[5%] max-sm:py-[34px] max-sm:px-[4%] max-[390px]:py-7"
          aria-label="Architectural Applications"
        >
          <div className="mb-9 max-[860px]:mb-6">
            <span className="block text-[11px] tracking-[2.5px] uppercase text-[#8c827a] mb-2 font-medium font-sans">
              Versatile Applications
            </span>
            <h2 className="text-[clamp(24px,2.4vw,36px)] leading-[1.15] font-light tracking-[1px] uppercase text-[#1a1a1a] m-0 font-sans max-sm:text-[clamp(19px,5vw,26px)]">
              Where {product.title} Excels
            </h2>
          </div>

          <div className="grid grid-cols-4 gap-6 max-lg:grid-cols-2 max-lg:gap-[18px] max-sm:grid-cols-1 max-sm:gap-3">
            {product.applications.map((app, idx) => (
              <article
                key={app.title}
                className={`group bg-white border border-[#ebe8e2] rounded overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)] reveal-on-scroll reveal-delay-${(idx % 2) + 1}`}
              >
                <div className="w-full aspect-[4/3] overflow-hidden bg-[#f0ede8]">
                  <img
                    src={app.image}
                    alt={app.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-5 flex flex-col grow max-sm:p-4">
                  <h3 className="text-[15px] font-medium text-[#1a1a1a] m-0 mb-2 font-sans tracking-[0.5px] uppercase max-sm:text-[13px]">
                    {app.title}
                  </h3>
                  <p className="text-[13px] leading-[1.55] text-[#595653] m-0">{app.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Green Promise Banner */}
        <section
          className="max-w-[1440px] mx-auto py-[60px] px-[5%] max-[860px]:py-11 max-[860px]:px-[5%] max-sm:py-[34px] max-sm:px-[4%] max-[390px]:py-7"
          aria-label="Defenseply Green Promise"
        >
          <div className="bg-[url('/assets/green-promise-bg.png')] bg-cover bg-center no-repeat rounded-lg py-[52px] px-12 grid grid-cols-[1fr_1.3fr] gap-12 items-center relative overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-[linear-gradient(to_right,rgba(10,50,30,0.38)_0%,rgba(10,50,30,0.10)_60%,rgba(10,50,30,0.05)_100%)] before:pointer-events-none before:z-0 max-[860px]:grid-cols-1 max-[860px]:gap-7 max-[860px]:py-9 max-[860px]:px-7 max-[860px]:bg-left max-sm:py-7 max-sm:px-[18px] max-sm:gap-[22px] max-sm:bg-left reveal-on-scroll">
            <div className="relative z-[1]">
              <span className="block text-[11px] tracking-[2.5px] uppercase text-white/75 mb-2 font-medium font-sans">
                Sustainable Eco-Architecture
              </span>
              <h3 className="text-[clamp(22px,2.2vw,34px)] font-light leading-[1.18] text-white m-0 mb-3.5 font-sans tracking-[1px] uppercase [text-shadow:0_1px_8px_rgba(0,0,0,0.15)] max-sm:text-[clamp(19px,5vw,26px)]">
                The Defenseply Green Promise
              </h3>
              <p className="text-[15px] leading-[1.65] text-white/90 m-0 max-sm:text-sm">
                Defenseply products are the guardians of tomorrow's greenery. By choosing composite
                boards and architectural profiles, you choose a future of conscious luxury.
              </p>
            </div>
            <div className="relative z-[1] grid grid-cols-2 gap-3 max-sm:grid-cols-2 max-sm:gap-2.5">
              <div className="flex items-center gap-2.5 bg-white/[0.22] backdrop-blur-[10px] border border-white/[0.38] py-3.5 px-4 rounded-md text-[12.5px] font-medium text-white font-sans tracking-[0.6px] uppercase [&>svg]:text-white [&>svg]:shrink-0 [&>svg]:opacity-90 max-sm:py-[11px] max-sm:px-3 max-sm:text-[11.5px] max-sm:gap-2">
                <TreePine size={18} /> Zero Deforestation
              </div>
              <div className="flex items-center gap-2.5 bg-white/[0.22] backdrop-blur-[10px] border border-white/[0.38] py-3.5 px-4 rounded-md text-[12.5px] font-medium text-white font-sans tracking-[0.6px] uppercase [&>svg]:text-white [&>svg]:shrink-0 [&>svg]:opacity-90 max-sm:py-[11px] max-sm:px-3 max-sm:text-[11.5px] max-sm:gap-2">
                <Sparkles size={18} /> Lower Carbon Footprint
              </div>
              <div className="flex items-center gap-2.5 bg-white/[0.22] backdrop-blur-[10px] border border-white/[0.38] py-3.5 px-4 rounded-md text-[12.5px] font-medium text-white font-sans tracking-[0.6px] uppercase [&>svg]:text-white [&>svg]:shrink-0 [&>svg]:opacity-90 max-sm:py-[11px] max-sm:px-3 max-sm:text-[11.5px] max-sm:gap-2">
                <Droplets size={18} /> 100% Recyclable
              </div>
              <div className="flex items-center gap-2.5 bg-white/[0.22] backdrop-blur-[10px] border border-white/[0.38] py-3.5 px-4 rounded-md text-[12.5px] font-medium text-white font-sans tracking-[0.6px] uppercase [&>svg]:text-white [&>svg]:shrink-0 [&>svg]:opacity-90 max-sm:py-[11px] max-sm:px-3 max-sm:text-[11.5px] max-sm:gap-2">
                <ShieldCheck size={18} /> Sustainable Living
              </div>
            </div>
          </div>
        </section>

        {/* Inquiry & Direct Contact Form */}
        <section
          className="bg-white border-y border-[#e7e4de] py-20 px-[5%] max-[860px]:py-[50px] max-sm:py-9 max-sm:px-[4%]"
          id="inquiry"
          aria-label="Request Technical Quote"
        >
          <div className="max-w-[1000px] mx-auto grid grid-cols-[1fr_1.2fr] gap-[50px] items-start max-[860px]:grid-cols-1 max-[860px]:gap-8 reveal-on-scroll">
            <div className="flex flex-col">
              <span className="block text-[11px] tracking-[2.5px] uppercase text-[#8c827a] mb-2 font-medium font-sans">
                Direct Factory Connect
              </span>
              <h2 className="text-[clamp(22px,2.8vw,38px)] font-light leading-[1.15] m-0 mb-4 text-[#1a1a1a] font-sans tracking-[1px] uppercase max-sm:text-[clamp(19px,5vw,26px)]">
                Order or Request Specs for {product.title}
              </h2>
              <p className="text-[15px] leading-[1.6] text-[#595653] mb-6">
                Strategically manufactured at our modern 2-acre facility along the
                Panvel–Kochi–Kanyakumari National Highway in KINFRA Industrial Park, Kuttippuram, Kerala.
                We supply architects, interior contractors, and commercial builders across South India
                and the Middle East.
              </p>

              <div className="flex flex-col gap-3.5">
                <div className="flex items-start gap-3 text-[13.5px] text-[#2b2b2a] leading-[1.5] [&>svg]:text-[#155c3c] [&>svg]:shrink-0 [&>svg]:mt-0.5">
                  <MapPin size={18} />
                  <span>
                    Plot No: 06, KINFRA Industrial Park, Valanchery Road, Kuttippuram, Malappuram
                    Dist, Kerala – 679571
                  </span>
                </div>
                <div className="flex items-start gap-3 text-[13.5px] text-[#2b2b2a] leading-[1.5] [&>svg]:text-[#155c3c] [&>svg]:shrink-0 [&>svg]:mt-0.5">
                  <Phone size={18} />
                  <span>+91 9605 170 000 / +91 9388 377 110</span>
                </div>
                <div className="flex items-start gap-3 text-[13.5px] text-[#2b2b2a] leading-[1.5] [&>svg]:text-[#155c3c] [&>svg]:shrink-0 [&>svg]:mt-0.5">
                  <Mail size={18} />
                  <span>defenseply@gmail.com</span>
                </div>
              </div>
            </div>

            <ProductInquiryForm productTitle={product.title} />
          </div>
        </section>

        {/* Related Products Section */}
        <section
          className="max-w-[1440px] mx-auto py-[60px] px-[5%] max-[860px]:py-11 max-[860px]:px-[5%] max-sm:py-[34px] max-sm:px-[4%] max-[390px]:py-7"
          aria-label="Explore Related Products"
        >
          <div className="mb-9 max-[860px]:mb-6">
            <span className="block text-[11px] tracking-[2.5px] uppercase text-[#8c827a] mb-2 font-medium font-sans">
              Complete Portfolio
            </span>
            <h2 className="text-[clamp(24px,2.4vw,36px)] leading-[1.15] font-light tracking-[1px] uppercase text-[#1a1a1a] m-0 font-sans max-sm:text-[clamp(19px,5vw,26px)]">
              Explore Related Surfaces
            </h2>
          </div>

          <div className="grid grid-cols-3 gap-6 max-[860px]:grid-cols-2 max-[860px]:gap-4 max-sm:grid-cols-1 max-sm:gap-3">
            {relatedProducts.map((rel, idx) => (
              <Link
                key={rel.slug}
                href={`/products/${rel.slug}`}
                className={`group bg-white border border-[#ebe8e2] rounded overflow-hidden no-underline flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)] reveal-on-scroll reveal-delay-${(idx % 3) + 1}`}
              >
                <div className="w-full aspect-[6/5] bg-[#f5f4f0] overflow-hidden">
                  <img
                    src={rel.gallery[0]?.src || "/assets/products/pvcfoamboard(main).jpg"}
                    alt={rel.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                </div>
                <div className="py-5 px-[22px] flex flex-col max-sm:py-4 max-sm:px-[18px]">
                  <span className="text-[10px] tracking-[1.8px] uppercase text-[#8c827a] mb-1 font-sans">
                    {rel.category}
                  </span>
                  <h3 className="text-base font-medium text-[#1a1a1a] m-0 mb-1.5 font-sans tracking-[0.5px] uppercase max-sm:text-sm">
                    {rel.title}
                  </h3>
                  <p className="text-[13px] leading-[1.5] text-[#6d6a66] m-0">{rel.tagline}</p>
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
