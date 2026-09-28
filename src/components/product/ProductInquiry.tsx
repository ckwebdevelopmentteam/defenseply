import { Phone, Mail, MapPin } from "lucide-react";
import { ProductInquiryForm } from "./ProductInquiryForm";
import type { ProductDetail } from "@/data/products";
export function ProductInquiry({ product }: { product: ProductDetail }) {
  return (
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
            Panvel–Kochi–Kanyakumari National Highway in KINFRA Industrial Park,
            Kuttippuram, Kerala. We supply architects, interior contractors, and
            commercial builders across South India and the Middle East.
          </p>

          <div className="flex flex-col gap-3.5">
            <div className="flex items-start gap-3 text-[13.5px] text-[#2b2b2a] leading-[1.5] [&>svg]:text-[#155c3c] [&>svg]:shrink-0 [&>svg]:mt-0.5">
              <MapPin size={18} />
              <span>
                Plot No: 06, KINFRA Industrial Park, Valanchery Road,
                Kuttippuram, Malappuram Dist, Kerala – 679571
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

        <ProductInquiryForm key={product.slug} productTitle={product.title} />
      </div>
    </section>
  );
}
