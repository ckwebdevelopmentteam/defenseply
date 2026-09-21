import { existsSync } from "node:fs";
import { resolve } from "node:path";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { getApplications } from "@/data/applications";
import { products } from "@/data/products";
import { ApplicationImage } from "@/components/application/ApplicationImage";

export const metadata: Metadata = {
  title: "Applications | Defenseply WPC & PVC Architectural Solutions",
  description:
    "Explore Defenseply applications across interiors, commercial environments, creative panels, wardrobes, bedrooms, and modular kitchens.",
};

function getOverviewHero(): { src: string; avif?: string } {
  const custom = ["webp", "png", "jpg", "jpeg", "avif"]
    .map((ext) => `/assets/applications/overview-hero.${ext}`)
    .find((candidate) =>
      existsSync(resolve(process.cwd(), "public", candidate.slice(1))),
    );

  if (custom) return { src: custom };

  return {
    src: "/assets/applications/interiors/defenseply-eco-architecture-living.webp",
  };
}

export default function ApplicationsIndexPage() {
  const applications = getApplications();
  const overviewHero = getOverviewHero();

  return (
    <main id="main-content" className="overflow-hidden bg-white text-ink">
      {/* Page Header / Hero Overview with Architectural Background */}
      <section className="relative isolate overflow-hidden border-b border-neutral-800 bg-neutral-950 pt-28 pb-20 md:pt-36 md:pb-28 max-desktop:pt-[130px] max-phone:pt-[110px] text-white w-full px-[5%] max-sm:px-[4%]">
        {/* Background Image with optimized avif/jpg delivery */}
        <picture className="absolute inset-0 size-full -z-20">
          {overviewHero.avif && (
            <source srcSet={overviewHero.avif} type="image/avif" />
          )}
          <img
            src={overviewHero.src}
            alt="Defenseply Architectural Applications"
            className="size-full object-cover opacity-45"
            loading="eager"
          />
        </picture>

        {/* Cinematic Gradient Overlays */}
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-black/90 via-black/75 to-black/50"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-black/80 via-transparent to-black/30"
          aria-hidden="true"
        />

        <div className="mx-auto max-w-[1600px]">
          <div className="max-w-3xl">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#55ba6a]">
              Defenseply Applications Directory
            </p>
            <h1 className="text-4xl font-light tracking-tight text-white md:text-6xl lg:text-7xl leading-[1.05]">
              Engineered for the spaces you build and live in.
            </h1>
            <p className="mt-6 text-base md:text-lg leading-relaxed text-white/80 font-light">
              Explore how Defenseply WPC and PVC board innovations adapt to residential,
              corporate, retail, and bespoke environments. Discover application ideas,
              finish pairings, and material specifications designed for longevity.
            </p>
          </div>

          {/* Quick-Jump Anchor Bar */}
          <div className="mt-12 flex flex-wrap items-center gap-2.5 pt-6 border-t border-white/15">
            <span className="text-xs uppercase tracking-widest text-white/50 font-mono mr-2">
              Browse:
            </span>
            {applications.map((app) => (
              <a
                key={app.slug}
                href={`#${app.slug}`}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium uppercase tracking-wider text-white/90 bg-white/10 hover:bg-white hover:text-neutral-950 transition-colors duration-200 border border-white/20 backdrop-blur-xs"
              >
                {app.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Parent Applications Listing */}
      <section className="w-full px-[5%] max-sm:px-[4%] py-16 md:py-24">
        <div className="mx-auto max-w-[1600px] space-y-24 md:space-y-32">
          {applications.map((app, index) => {
            const isReversed = index % 2 === 1;

            // Resolve compatible product names
            const compatibleProducts = products.filter((p) =>
              app.products.includes(p.slug),
            );

            return (
              <article
                key={app.slug}
                id={app.slug}
                className="scroll-mt-32 grid gap-8 lg:gap-12 xl:gap-16 lg:grid-cols-12 items-stretch"
              >
                {/* Visual Banner Column */}
                <div
                  className={`flex flex-col lg:col-span-7 ${
                    isReversed ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <Link
                    href={`/applications/${app.slug}`}
                    className="group relative block w-full h-full min-h-[340px] md:min-h-[400px] aspect-[16/10] sm:aspect-[16/9] overflow-hidden bg-neutral-900 shadow-xl"
                  >
                    {/* Hero Banner Image */}
                    <ApplicationImage
                      src={app.hero}
                      mobileSrc={app.heroMobile}
                      alt={app.heroAlt}
                      fill
                      className="transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />

                    {/* Gradient Overlay */}
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent transition-opacity duration-300 group-hover:opacity-90"
                      aria-hidden="true"
                    />

                    {/* Image Footer Cue */}
                    <div className="absolute bottom-6 inset-x-6 flex items-center justify-between text-white">
                      <p className="text-lg md:text-xl font-light text-white">
                        Explore {app.title}
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
                      {app.title}
                    </h2>

                    <p className="mt-3 text-base md:text-lg text-neutral-800 font-normal">
                      {app.headline}
                    </p>

                    <p className="mt-3 text-sm md:text-base leading-relaxed text-neutral-600 font-light">
                      {app.description}
                    </p>

                    {/* Included Space Highlights */}
                    <div className="mt-6 pt-5 border-t border-neutral-200">
                      <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-400 font-mono mb-2.5">
                        Featured Spaces & Details:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {app.gallery.map((item) => (
                          <span
                            key={item.id}
                            className="inline-flex items-center gap-1.5 px-3 py-1 text-xs text-neutral-700 bg-neutral-100 border border-neutral-200/80 font-light"
                          >
                            <span className="size-1.5 rounded-full bg-[#1c3f21]" />
                            {item.title}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Action Area with Recommended Materials just above the Button */}
                  <div className="pt-8 lg:pt-6">
                    {/* Compatible Materials */}
                    {compatibleProducts.length > 0 && (
                      <div className="mb-4">
                        <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-400 font-mono mb-1.5">
                          Recommended Materials:
                        </p>
                        <div className="flex flex-wrap gap-x-3 gap-y-1">
                          {compatibleProducts.map((product) => (
                            <Link
                              key={product.slug}
                              href={`/products/${product.slug}`}
                              className="text-xs text-neutral-600 hover:text-[#1c3f21] hover:underline underline-offset-4 transition-colors"
                            >
                              {product.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}

                    <Link
                      href={`/applications/${app.slug}`}
                      className="group inline-flex items-center justify-between gap-4 px-6 py-3.5 bg-neutral-900 text-white text-xs uppercase tracking-[0.18em] font-medium transition-all duration-300 hover:bg-[#1c3f21]"
                    >
                      <span>View {app.title} Application</span>
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
              Custom Projects & Guidance
            </p>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-neutral-900">
              Have a custom application or fabrication requirement?
            </h2>
            <p className="mt-4 text-sm md:text-base leading-relaxed text-neutral-600 font-light">
              Our material specialists can recommend the optimal board density, thickness,
              screwholding parameters, and CNC routing configurations for your specific project.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 px-7 py-4 bg-neutral-900 text-white text-xs uppercase tracking-[0.18em] font-medium transition-colors hover:bg-[#1c3f21]"
              >
                <span>Speak with a Material Specialist</span>
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/#products"
                className="inline-flex items-center gap-2 px-7 py-4 bg-white text-neutral-900 border border-neutral-300 text-xs uppercase tracking-[0.18em] font-medium transition-colors hover:bg-neutral-100"
              >
                <span>Explore Products</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
