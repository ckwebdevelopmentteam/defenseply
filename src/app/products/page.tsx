import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { products } from "@/data/products";
import { getApplications } from "@/data/applications";
import { FloatingActions } from "@/components/ui/FloatingActions";

export const metadata: Metadata = {
  title: "Products | Defenseply WPC & PVC Architectural Composites",
  description:
    "Explore Defenseply premium PVC foam boards, WPC boards, 3-layer multiboards, designer doors, and calibrated architectural composite solutions.",
  openGraph: {
    title: "Products | Defenseply WPC & PVC Architectural Composites",
    description:
      "Explore Defenseply premium PVC foam boards, WPC boards, 3-layer multiboards, designer doors, and calibrated architectural composite solutions.",
    images: [
      {
        url: "/hero-background.jpg",
      },
    ],
  },
};

export default function ProductsPage() {
  const allApplications = getApplications();

  return (
    <>
      <main id="main-content" className="w-full max-w-full overflow-x-hidden bg-white text-ink">
        {/* Page Header / Hero Overview with Architectural Background Pattern */}
        <section className="relative isolate flex min-h-[460px] sm:min-h-[520px] md:min-h-[580px] w-full flex-col justify-end overflow-hidden border-b border-[#E5E2D8] bg-[#FAF9F5] pt-24 sm:pt-28 pb-10 sm:pb-14 md:pb-20 text-[#161d19] px-4 sm:px-[5%]">
          {/* Background Graphic Pattern Image */}
          <div className="absolute inset-0 -z-20 overflow-hidden pointer-events-none">
            <Image
              src="/hero-background.jpg"
              alt="DefensePly Background Pattern"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>

          <div className="mx-auto w-full max-w-[1600px]">
            <div className="max-w-3xl">
              <p className="mb-2 sm:mb-3 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] sm:tracking-[0.24em] text-[#163326]">
                Defenseply Architectural Composites Catalog
              </p>
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-[#161d19] leading-[1.1] sm:leading-[1.05]">
                Engineered for enduring performance, crafted for architectural perfection.
              </h1>
              <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg leading-relaxed text-[#435249] font-normal">
                Explore the complete collection of Defenseply premium PVC foam boards, WPC boards,
                multi-layer composites, and architectural doors. Engineered for 100% waterproof
                resilience, zero pest degradation, and precision fabrication across demanding interior
                and exterior environments.
              </p>
            </div>
          </div>
        </section>

        {/* Quick-Jump Browse Anchor Bar — 2nd Section */}
        <section
          id="browse"
          aria-label="Browse Defenseply Products"
          className="w-full border-b border-[#EAE7DE] bg-[#FAF9F5]/70 py-3 sm:py-4 md:py-6 px-4 sm:px-[5%]"
        >
          <div className="mx-auto flex max-w-[1600px] flex-col sm:flex-row sm:items-center gap-2 sm:gap-2.5">
            <span className="text-[11px] sm:text-xs uppercase tracking-widest text-[#718076] font-mono shrink-0">
              Browse:
            </span>
            <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 sm:flex-wrap thin-scrollbar scroll-smooth">
              {products.map((p) => (
                <a
                  key={p.slug}
                  href={`#${p.slug}`}
                  className="inline-flex shrink-0 items-center gap-1.5 rounded-[4px] px-3 sm:px-3.5 py-1.5 text-[11px] sm:text-xs font-medium uppercase tracking-wider text-[#163326] bg-white hover:bg-[#163326] hover:text-white transition-all duration-200 border border-[#DCD7CE] shadow-xs active:scale-95"
                >
                  {p.title}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Products Showcase Listing */}
        <section className="w-full px-4 sm:px-[5%] py-10 sm:py-16 md:py-24">
          <div className="mx-auto max-w-[1600px] space-y-16 sm:space-y-24 md:space-y-32">
            {products.map((product, index) => {
              const isReversed = index % 2 === 1;
              const heroImage =
                product.card?.image ||
                product.gallery?.[0]?.src ||
                "/assets/products/pvcfoamboard(main).jpg";

              // Find matching applications for this product
              const compatibleApps = allApplications.filter(
                (app) =>
                  app.products.includes(product.slug) ||
                  product.applications?.some(
                    (pa) =>
                      app.title.toLowerCase().includes(pa.title.toLowerCase()) ||
                      pa.title.toLowerCase().includes(app.title.toLowerCase()),
                  ),
              );

              return (
                <article
                  key={product.slug}
                  id={product.slug}
                  className="scroll-mt-24 sm:scroll-mt-32 grid gap-6 sm:gap-8 lg:gap-12 xl:gap-16 lg:grid-cols-12 items-stretch"
                >
                  {/* Visual Banner Column */}
                  <div
                    className={`flex flex-col lg:col-span-7 min-w-0 ${
                      isReversed ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <Link
                      href={`/products/${product.slug}`}
                      className="group relative block w-full aspect-[16/10] sm:aspect-[16/9] min-h-[220px] sm:min-h-[340px] md:min-h-[400px] overflow-hidden rounded-[4px] bg-neutral-900 shadow-lg sm:shadow-xl"
                    >
                      {/* Hero Banner Image */}
                      <img
                        src={heroImage}
                        alt={product.title}
                        className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                        loading="lazy"
                      />

                      {/* Gradient Overlay */}
                      <div
                        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent transition-opacity duration-300 group-hover:opacity-90"
                        aria-hidden="true"
                      />

                      {/* Image Footer Cue */}
                      <div className="absolute bottom-4 sm:bottom-6 inset-x-4 sm:inset-x-6 flex items-center justify-between text-white">
                        <p className="text-base sm:text-lg md:text-xl font-light text-white truncate pr-2">
                          Explore {product.title}
                        </p>
                        <div
                          aria-hidden="true"
                          className="flex size-9 sm:size-11 shrink-0 items-center justify-center rounded-full border border-white/40 bg-white/10 text-white backdrop-blur-xs transition-all duration-300 group-hover:bg-white group-hover:text-black group-hover:border-white"
                        >
                          <ArrowUpRight className="size-4 sm:size-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </div>
                      </div>
                    </Link>
                  </div>

                  {/* Content & Information Column */}
                  <div
                    className={`flex flex-col justify-between py-1 min-w-0 ${
                      isReversed ? "lg:order-1" : "lg:order-2"
                    } lg:col-span-5`}
                  >
                    <div className="min-w-0">
                      <h2 className="text-2xl sm:text-4xl lg:text-[clamp(38px,3.5vw,56px)] font-extralight uppercase tracking-[0.03em] text-neutral-900 leading-[1.1] break-words">
                        {product.title}
                      </h2>

                      <p className="mt-2.5 sm:mt-3 text-sm sm:text-base md:text-lg text-neutral-800 font-normal leading-snug">
                        {product.tagline}
                      </p>

                      <p className="mt-2 sm:mt-3 text-xs sm:text-sm md:text-base leading-relaxed text-neutral-600 font-light">
                        {product.description}
                      </p>

                      {/* Feature Badges */}
                      {product.badges && product.badges.length > 0 && (
                        <div className="mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-neutral-200">
                          <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-neutral-400 font-mono mb-2">
                            Core Performance Attributes:
                          </p>
                          <div className="flex flex-wrap gap-1.5 sm:gap-2">
                            {product.badges.map((badge) => (
                              <span
                                key={badge}
                                className="inline-flex items-center gap-1.5 rounded-[4px] px-2.5 sm:px-3 py-1 text-[11px] sm:text-xs text-neutral-700 bg-neutral-100 border border-neutral-200/80 font-light"
                              >
                                <span className="size-1.5 rounded-full bg-[#1c3f21] shrink-0" />
                                <span className="break-words">{badge}</span>
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Technical Specifications Highlights */}
                      {product.specs && (
                        <div className="mt-4 sm:mt-5 pt-3.5 sm:pt-4 border-t border-neutral-200/60 flex flex-wrap gap-x-4 sm:gap-x-6 gap-y-1.5 sm:gap-y-2 text-[11px] sm:text-xs text-neutral-500 font-mono">
                          {product.specs.thickness && (
                            <span className="break-words">
                              <strong className="text-neutral-700 font-medium uppercase">
                                Thickness:
                              </strong>{" "}
                              {product.specs.thickness}
                            </span>
                          )}
                          {product.specs.density && (
                            <span className="break-words">
                              <strong className="text-neutral-700 font-medium uppercase">
                                Density:
                              </strong>{" "}
                              {product.specs.density}
                            </span>
                          )}
                          {product.specs.standardSize && (
                            <span className="break-words">
                              <strong className="text-neutral-700 font-medium uppercase">
                                Size:
                              </strong>{" "}
                              {product.specs.standardSize}
                            </span>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Bottom Action Area with Compatible Applications */}
                    <div className="pt-6 sm:pt-8 lg:pt-6 min-w-0">
                      {/* Recommended Applications Links */}
                      {compatibleApps.length > 0 && (
                        <div className="mb-4">
                          <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-neutral-400 font-mono mb-1.5">
                            Ideal Applications:
                          </p>
                          <div className="flex flex-wrap gap-x-2.5 sm:gap-x-3 gap-y-1">
                            {compatibleApps.map((app) => (
                              <Link
                                key={app.slug}
                                href={`/applications/${app.slug}`}
                                className="text-xs text-neutral-600 hover:text-[#1c3f21] hover:underline underline-offset-4 transition-colors"
                              >
                                {app.title}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}

                      <Link
                        href={`/products/${product.slug}`}
                        className="group flex w-full sm:inline-flex sm:w-auto items-center justify-between gap-3 sm:gap-4 rounded-[4px] px-5 sm:px-6 py-3.5 bg-neutral-900 text-white text-[11px] sm:text-xs uppercase tracking-[0.12em] sm:tracking-[0.18em] font-medium transition-all duration-300 hover:bg-[#1c3f21] active:scale-[0.99]"
                      >
                        <span className="truncate">View {product.title} Specifications</span>
                        <ArrowRight className="size-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* Consultation & Material Specification Section */}
        <section className="border-t border-neutral-200 bg-[#f7f6f2] py-12 sm:py-16 md:py-20 w-full px-4 sm:px-[5%]">
          <div className="mx-auto max-w-[1600px] text-center">
            <div className="mx-auto max-w-3xl">
              <p className="mb-2 sm:mb-3 text-[10px] sm:text-[11px] uppercase tracking-[0.2em] sm:tracking-[0.22em] text-[#1c3f21] font-semibold">
                Technical Consultation & Custom Fabrication
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-tight text-neutral-900 leading-snug">
                Need custom board thicknesses, densities, or volume procurement?
              </h2>
              <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base leading-relaxed text-neutral-600 font-light">
                Our polymer engineers and material specialists can recommend optimal calibrations,
                screwholding tolerances, fire-retardant grades, and CNC routing parameters for your
                architectural requirements.
              </p>
              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                <Link
                  href="/contact-us"
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-[4px] px-6 sm:px-7 py-3.5 sm:py-4 bg-neutral-900 text-white text-xs uppercase tracking-[0.14em] sm:tracking-[0.18em] font-medium transition-colors hover:bg-[#1c3f21] active:scale-[0.99]"
                >
                  <span>Speak with a Material Specialist</span>
                  <ArrowRight className="size-4 shrink-0" />
                </Link>
                <Link
                  href="/applications"
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-[4px] px-6 sm:px-7 py-3.5 sm:py-4 bg-white text-neutral-900 border border-neutral-300 text-xs uppercase tracking-[0.14em] sm:tracking-[0.18em] font-medium transition-colors hover:bg-neutral-100 active:scale-[0.99]"
                >
                  <span>Explore Architectural Applications</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FloatingActions />
    </>
  );
}
