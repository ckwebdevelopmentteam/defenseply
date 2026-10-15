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
      <main id="main-content" className="overflow-hidden bg-white text-ink">
        {/* Page Header / Hero Overview with Architectural Composite Boards Image */}
        <section className="relative isolate flex min-h-[580px] md:min-h-[660px] h-[78vh] w-full flex-col justify-end overflow-hidden border-b border-neutral-800 bg-neutral-950 pt-[110px] pb-12 md:pb-16 text-white px-[5%] max-sm:px-[4%]">
          {/* Background Image of Stacked Composite Boards */}
          <div className="absolute inset-0 -z-20 overflow-hidden pointer-events-none">
            <Image
              src="/assets/stacked_boards_bg.jpg"
              alt="Defenseply Architectural Composite Boards"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center opacity-60"
            />
          </div>

          {/* Top vignette gradient for transparent header contrast matching Home and About */}
          <div className="pointer-events-none absolute inset-x-0 top-0 z-[2] h-40 bg-gradient-to-b from-black/80 via-black/40 to-transparent" />

          {/* Cinematic Gradient Overlays */}
          <div
            className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-black/90 via-black/75 to-black/40"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-black/85 via-transparent to-black/30"
            aria-hidden="true"
          />

          <div className="relative z-10 mx-auto w-full max-w-[1600px]">
            <div className="max-w-3xl">
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#55ba6a]">
                Defenseply Architectural Composites Catalog
              </p>
              <h1 className="text-[clamp(30px,3.6vw,52px)] font-light tracking-tight text-white leading-[1.12]">
                Engineered for enduring performance, crafted for architectural perfection.
              </h1>
              <p className="mt-6 text-base md:text-lg leading-relaxed text-white/80 font-normal">
                Explore the complete collection of Defenseply premium PVC foam boards, WPC boards,
                multi-layer composites, and architectural doors. Engineered for high moisture
                resilience, termite protection, and precision fabrication across demanding interior
                and exterior environments.
              </p>
            </div>
          </div>
        </section>

        {/* Quick-Jump Browse Anchor Bar — 2nd Section */}
        <section
          id="browse"
          aria-label="Browse Defenseply Products"
          className="w-full px-[5%] max-sm:px-[4%] py-5 md:py-6"
        >
          <div className="mx-auto flex max-w-[1600px] flex-wrap items-center gap-2.5">
            <span className="text-xs uppercase tracking-widest text-[#718076] font-mono mr-2 shrink-0">
              Browse:
            </span>
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
              {products.map((p) => (
                <a
                  key={p.slug}
                  href={`#${p.slug}`}
                  className="inline-flex items-center gap-1.5 rounded-[4px] px-3.5 py-1.5 text-xs font-medium uppercase tracking-wider text-[#163326] bg-white hover:bg-[#163326] hover:text-white transition-all duration-200 border border-[#DCD7CE] shadow-xs"
                >
                  {p.title}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Products Showcase Listing */}
        <section className="w-full px-[5%] max-sm:px-[4%] py-16 md:py-24">
          <div className="mx-auto max-w-[1600px] space-y-24 md:space-y-32">
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
                  className="scroll-mt-32 grid gap-8 lg:gap-12 xl:gap-16 lg:grid-cols-12 items-stretch"
                >
                  {/* Visual Banner Column */}
                  <div
                    className={`flex flex-col lg:col-span-7 ${
                      isReversed ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <Link
                      href={`/products/${product.slug}`}
                      className="group relative block w-full h-full min-h-[340px] md:min-h-[400px] aspect-[16/10] sm:aspect-[16/9] overflow-hidden rounded-[4px] bg-neutral-900 shadow-xl"
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
                        className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent transition-opacity duration-300 group-hover:opacity-90"
                        aria-hidden="true"
                      />

                      {/* Image Footer Cue */}
                      <div className="absolute bottom-6 inset-x-6 flex items-center justify-between text-white">
                        <p className="text-lg md:text-xl font-light text-white">
                          Explore {product.title}
                        </p>
                        <div
                          aria-hidden="true"
                          className="flex size-11 shrink-0 items-center justify-center rounded-full border border-white/40 bg-white/10 text-white backdrop-blur-xs transition-all duration-300 group-hover:bg-white group-hover:text-black group-hover:border-white"
                        >
                          <ArrowUpRight className="size-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </div>
                      </div>
                    </Link>
                  </div>

                  {/* Content & Information Column */}
                  <div
                    className={`flex flex-col justify-between py-1 ${
                      isReversed ? "lg:order-1" : "lg:order-2"
                    } lg:col-span-5`}
                  >
                    <div>
                      <h2 className="text-4xl sm:text-5xl lg:text-[clamp(42px,3.8vw,62px)] font-extralight uppercase tracking-[0.03em] text-neutral-900 leading-[1.04]">
                        {product.title}
                      </h2>

                      <p className="mt-3 text-base md:text-lg text-neutral-800 font-normal">
                        {product.tagline}
                      </p>

                      <p className="mt-3 text-sm md:text-base leading-relaxed text-neutral-600 font-light">
                        {product.description}
                      </p>

                      {/* Feature Badges */}
                      {product.badges && product.badges.length > 0 && (
                        <div className="mt-6 pt-5 border-t border-neutral-200">
                          <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-400 font-mono mb-2.5">
                            Core Performance Attributes:
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {product.badges.map((badge) => (
                              <span
                                key={badge}
                                className="inline-flex items-center gap-1.5 rounded-[4px] px-3 py-1 text-xs text-neutral-700 bg-neutral-100 border border-neutral-200/80 font-light"
                              >
                                <span className="size-1.5 rounded-full bg-[#1c3f21]" />
                                {badge}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Technical Specifications Highlights */}
                      {product.specs && (
                        <div className="mt-5 pt-4 border-t border-neutral-200/60 flex flex-wrap gap-x-6 gap-y-2 text-xs text-neutral-500 font-mono">
                          {product.specs.thickness && (
                            <span>
                              <strong className="text-neutral-700 font-medium uppercase">
                                Thickness:
                              </strong>{" "}
                              {product.specs.thickness}
                            </span>
                          )}
                          {product.specs.density && (
                            <span>
                              <strong className="text-neutral-700 font-medium uppercase">
                                Density:
                              </strong>{" "}
                              {product.specs.density}
                            </span>
                          )}
                          {product.specs.standardSize && (
                            <span>
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
                    <div className="pt-8 lg:pt-6">
                      {/* Recommended Applications Links */}
                      {compatibleApps.length > 0 && (
                        <div className="mb-4">
                          <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-400 font-mono mb-1.5">
                            Ideal Applications:
                          </p>
                          <div className="flex flex-wrap gap-x-3 gap-y-1">
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
                        className="group inline-flex items-center justify-between gap-4 rounded-[4px] px-6 py-3.5 bg-neutral-900 text-white text-xs uppercase tracking-[0.18em] font-medium transition-all duration-300 hover:bg-[#1c3f21]"
                      >
                        <span>View {product.title} Specifications</span>
                        <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* Consultation & Material Specification Section */}
        <section className="border-t border-neutral-200 bg-[#f7f6f2] py-20 w-full px-[5%] max-sm:px-[4%]">
          <div className="mx-auto max-w-[1600px] text-center">
            <div className="mx-auto max-w-3xl">
              <p className="mb-3 text-[11px] uppercase tracking-[0.22em] text-[#1c3f21] font-semibold">
                Technical Consultation & Custom Fabrication
              </p>
              <h2 className="text-3xl md:text-4xl font-light tracking-tight text-neutral-900">
                Need custom board thicknesses, densities, or volume procurement?
              </h2>
              <p className="mt-4 text-sm md:text-base leading-relaxed text-neutral-600 font-light">
                Our polymer engineers and material specialists can recommend optimal calibrations,
                screwholding tolerances, fire-retardant grades, and CNC routing parameters for your
                architectural requirements.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2 rounded-[4px] px-7 py-4 bg-neutral-900 text-white text-xs uppercase tracking-[0.18em] font-medium transition-colors hover:bg-[#1c3f21]"
                >
                  <span>Speak with a Material Specialist</span>
                  <ArrowRight className="size-4" />
                </Link>
                <Link
                  href="/applications"
                  className="inline-flex items-center gap-2 rounded-[4px] px-7 py-4 bg-white text-neutral-900 border border-neutral-300 text-xs uppercase tracking-[0.18em] font-medium transition-colors hover:bg-neutral-100"
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
