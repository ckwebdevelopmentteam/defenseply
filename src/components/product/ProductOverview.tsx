import {
  Check,
  ShieldCheck,
  Phone,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import { ProductGallery } from "./ProductGallery";
import type { ProductDetail } from "@/data/products";
export function ProductOverview({ product }: { product: ProductDetail }) {
  return (
    <section
      className="w-full px-[5%] pb-[clamp(40px,4.5vw,68px)] max-sm:px-[4%] max-sm:pb-8"
      aria-label="Product Overview"
    >
      <div className="mx-auto max-w-[1600px] grid grid-cols-[1.15fr_1fr] gap-[50px] items-start max-lg:grid-cols-1 max-lg:gap-8 max-sm:gap-5">
      {/* Gallery Column */}
      <ProductGallery
        key={product.slug}
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
            href="#project-form"
            className="inline-flex items-center justify-center gap-2.5 bg-[#1c3f21] !text-white text-xs tracking-[1.2px] uppercase font-medium font-sans py-[15px] px-7 rounded-[2px] no-underline transition-all duration-200 border border-[#1c3f21] hover:bg-[#15321a] hover:-translate-y-0.5 max-sm:w-full max-sm:py-[13px] max-sm:px-[18px] max-sm:text-[11px]"
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
            className="inline-flex items-center justify-center gap-2.5 bg-transparent !text-[#1a1a1a] text-xs tracking-[1.2px] uppercase font-medium font-sans py-[15px] px-6 rounded-[2px] no-underline transition-all duration-200 border border-[#1c3f21] hover:bg-[#1c3f21] hover:!text-white hover:-translate-y-0.5 max-sm:w-full max-sm:py-[13px] max-sm:px-[18px] max-sm:text-[11px]"
          >
            <Phone size={15} /> +91 9605 170 000
          </a>
          </div>
        </div>
      </div>
    </section>
  );
}
