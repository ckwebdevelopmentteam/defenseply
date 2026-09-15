import { ArrowRight } from "lucide-react";

export function AboutCTA() {
  return (
    <section
      id="about-cta"
      aria-label="Contact DefensePly"
      className="flex min-h-[280px] items-center justify-between gap-10 bg-[#1c1c1e] bg-[url('/assets/00-Furniture-Hero.avif')] bg-cover bg-center bg-blend-multiply px-[clamp(24px,6.8vw,104px)] py-[60px] text-white max-[800px]:min-h-[220px] max-[800px]:flex-col max-[800px]:items-start max-[800px]:gap-[22px] max-[800px]:px-[22px] max-[800px]:py-[42px]"
    >
      <div>
        <p className="mb-[22px] text-[10px] font-medium tracking-[.22em] uppercase text-white/55">
          Start a Conversation
        </p>
        <h2 className="max-w-[600px] text-[clamp(28px,3.5vw,54px)] leading-[1.04] font-light uppercase text-white max-[520px]:text-[30px]">
          Building the Future of Sustainable Architecture
        </h2>
        <p className="mt-[22px] max-w-[420px] text-[14px] leading-[1.6] text-white/65">
          Partner with India&apos;s emerging leader in WPC and PVC composite
          materials. Reach out to discuss your project, product requirements, or
          dealership opportunities.
        </p>
      </div>
      <a
        href="/contact-us"
        className="mt-0 inline-flex shrink-0 items-center justify-between gap-7 border-0 bg-[#f4d832] px-[17px] py-[13px] text-[11px] leading-none uppercase text-[#171717] transition-colors hover:bg-[#e8c825] min-w-[160px] max-[520px]:min-w-[130px] max-[520px]:text-[10px] max-[520px]:px-[13px] max-[520px]:py-2.5"
      >
        Contact Us <ArrowRight size={16} />
      </a>
    </section>
  );
}
