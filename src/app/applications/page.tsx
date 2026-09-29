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
    <main id="main-content" className="w-full max-w-full overflow-x-clip bg-white text-ink">
      {/* Page Header / Hero Overview with Architectural Background */}
      <section className="relative isolate flex min-h-[500px] w-full min-w-0 flex-col justify-end overflow-hidden border-b border-neutral-800 bg-neutral-950 px-[5%] pt-28 pb-10 text-white sm:min-h-[520px] sm:pb-16 lg:h-[80vh] max-desktop:pt-[130px] max-phone:min-h-[470px] max-phone:pt-[110px] max-sm:px-[4%]">
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

        <div className="mx-auto w-full min-w-0 max-w-[1600px]">
          <div className="max-w-3xl">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#55ba6a]">
              Defenseply Applications Directory
            </p>
            <h1 className="text-[clamp(2.35rem,8.8vw,4.5rem)] leading-[1.05] font-light tracking-tight text-white">
              Engineered for the spaces you build and live in.
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed font-light text-white/80 sm:mt-6 sm:text-base md:text-lg">
              Explore how Defenseply WPC and PVC board innovations adapt to residential,
              corporate, retail, and bespoke environments. Discover application ideas,
              finish pairings, and material specifications designed for longevity.
            </p>
          </div>

          {/* Quick-Jump Anchor Bar */}
          <div className="mt-8 border-t border-white/15 pt-5 sm:mt-12 sm:pt-6">
            <span className="mb-3 block text-[10px] font-mono uppercase tracking-widest text-white/50 sm:mr-2 sm:mb-0 sm:inline-block">
              Browse:
            </span>
            <div className="-mx-1 flex snap-x snap-mandatory gap-2 overflow-x-auto px-1 pb-2 sm:mx-0 sm:inline-flex sm:flex-wrap sm:overflow-visible sm:p-0">
              {applications.map((app) => (
                <a
                  key={app.slug}
                  href={`#${app.slug}`}
                  className="inline-flex shrink-0 snap-start items-center rounded-[4px] border border-white/20 bg-white/10 px-3.5 py-2 text-xs font-medium uppercase tracking-wider text-white/90 transition-colors duration-200 hover:bg-white hover:text-neutral-950 sm:py-1.5"
                >
                  {app.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Parent Applications Listing */}
      <section className="w-full min-w-0 px-[5%] py-14 sm:py-16 md:py-24 max-sm:px-[4%]">
        <div className="mx-auto w-full min-w-0 max-w-[1600px] space-y-16 sm:space-y-20 md:space-y-32">
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
                className="grid w-full min-w-0 grid-cols-1 scroll-mt-28 gap-7 sm:gap-8 lg:grid-cols-12 lg:gap-12 xl:gap-16"
              >
                {/* Visual Banner Column */}
                <div
                  className={`flex w-full min-w-0 flex-col lg:col-span-7 ${
                    isReversed ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <Link
                    href={`/applications/${app.slug}`}
                    className="group relative block min-h-[280px] w-full overflow-hidden rounded-[4px] bg-neutral-900 shadow-xl aspect-[16/11] sm:min-h-[340px] sm:aspect-[16/10] md:min-h-[400px] md:aspect-[16/9]"
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
                    <div className="absolute inset-x-5 bottom-5 flex items-center justify-between text-white sm:inset-x-6 sm:bottom-6">
                      <p className="text-base font-light text-white sm:text-lg md:text-xl">
                        Explore {app.title}
                      </p>
                      <div
                        aria-hidden="true"
                        className="flex size-10 shrink-0 items-center justify-center rounded-full border border-white/40 bg-white/10 text-white backdrop-blur-xs transition-all duration-300 group-hover:border-white group-hover:bg-white group-hover:text-black sm:size-11"
                      >
                        <ArrowUpRight className="size-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </div>
                  </Link>
                </div>

                {/* Content & Information Column */}
                <div
                  className={`flex h-full w-full min-w-0 flex-col py-1 ${
                    isReversed ? "lg:order-1" : "lg:order-2"
                  } lg:col-span-5`}
                >
                  <div className="min-w-0">
                    <div className="mb-5 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-400 sm:mb-7">
                      <span className="text-[#1c3f21]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="h-px w-8 bg-neutral-300" aria-hidden="true" />
                      <span>Application</span>
                    </div>

                    <h2 className="text-4xl sm:text-5xl lg:text-[clamp(42px,3.8vw,62px)] font-extralight uppercase tracking-[0.03em] text-neutral-900 leading-[1.04]">
                      {app.title}
                    </h2>

                    <p className="mt-4 text-base md:text-lg text-neutral-800 font-normal">
                      {app.headline}
                    </p>

                    <p className="mt-3 max-w-xl text-sm md:text-base leading-relaxed text-neutral-600 font-light">
                      {app.description}
                    </p>

                    {/* Application index: more scannable and less decorative than tag chips. */}
                    <div className="mt-7 border-y border-neutral-200 py-3 sm:mt-8 sm:py-4">
                      <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-400">
                        Explore within this space
                      </p>
                      <ol className="grid gap-x-8 min-[480px]:grid-cols-2">
                        {app.gallery.map((item, itemIndex) => (
                          <li
                            key={item.id}
                            className="flex items-baseline gap-3 border-t border-neutral-100 py-2.5 first:border-t-0 min-[480px]:even:border-t-0"
                          >
                            <span className="shrink-0 font-mono text-[10px] text-[#1c3f21]">
                              {String(itemIndex + 1).padStart(2, "0")}
                            </span>
                            <span className="text-sm font-normal text-neutral-700">
                              {item.title}
                            </span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>

                  {/* Bottom action area is visually connected to the material choice. */}
                  <div className="mt-auto min-w-0 pt-7 sm:pt-8 lg:pt-10">
                    {compatibleProducts.length > 0 && (
                      <div className="mb-5">
                        <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-400">
                          Suitable board systems
                        </p>
                        <div className="flex flex-wrap gap-x-4 gap-y-2.5">
                          {compatibleProducts.map((product) => (
                            <Link
                              key={product.slug}
                              href={`/products/${product.slug}`}
                              className="border-b border-neutral-300 pb-0.5 text-xs text-neutral-600 transition-colors hover:border-[#1c3f21] hover:text-[#1c3f21]"
                            >
                              {product.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}

                    <Link
                      href={`/applications/${app.slug}`}
                      className="group inline-flex min-h-11 w-full items-center justify-between gap-4 text-xs font-medium uppercase tracking-[0.18em] text-neutral-900 transition-colors hover:text-[#1c3f21] sm:min-h-0 sm:w-auto sm:justify-start"
                    >
                      <span className="border-b border-neutral-900 pb-1 transition-colors group-hover:border-[#1c3f21]">
                        View {app.title} application
                      </span>
                      <span className="flex size-8 items-center justify-center rounded-full border border-neutral-300 transition-all duration-300 group-hover:border-[#1c3f21] group-hover:bg-[#1c3f21] group-hover:text-white">
                        <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                      </span>
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
                className="inline-flex items-center gap-2 rounded-[4px] px-7 py-4 bg-neutral-900 text-white text-xs uppercase tracking-[0.18em] font-medium transition-colors hover:bg-[#1c3f21]"
              >
                <span>Speak with a Material Specialist</span>
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/#products"
                className="inline-flex items-center gap-2 rounded-[4px] px-7 py-4 bg-white text-neutral-900 border border-neutral-300 text-xs uppercase tracking-[0.18em] font-medium transition-colors hover:bg-neutral-100"
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
