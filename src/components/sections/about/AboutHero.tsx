export function AboutHero() {
  return (
    <section
      id="about-hero"
      aria-label="About DEFENSEPLY INTERNATIONAL LLP"
      className="relative flex h-screen w-full flex-col justify-end overflow-hidden bg-[#111]"
    >
      {/* Background image */}
      <img
        src="/assets/Casa-Navacerrada-LGC-2.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 size-full object-cover opacity-60"
        loading="eager"
      />
      {/* Top vignette gradient for transparent header contrast */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[2] h-40 bg-gradient-to-b from-black/80 via-black/40 to-transparent" />
      {/* Gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,#00000014_0%,#00000080_55%,#000000cc_100%)]" />

      {/* Content */}
      <div className="relative z-10 px-[38px] pb-16 max-[768px]:px-6 max-[768px]:pb-12">
        <p className="mb-5 text-[10px] font-medium tracking-[.22em] uppercase text-white/60">
          About Defenseply
        </p>
        <h1 className="max-w-[1020px] text-[clamp(38px,4.5vw,80px)] leading-[1.04] font-light uppercase text-white max-[768px]:max-w-full">
          Building a Better Future with Advanced Composite Materials
        </h1>
        <p className="mt-7 max-w-[560px] text-[15px] leading-[1.65] text-white/75 max-[768px]:mt-5 max-[768px]:max-w-full">
          Backed by the AP Group, DEFENSEPLY INTERNATIONAL LLP is an emerging
          manufacturing enterprise poised to redefine standards in the building
          materials industry through high-performance, eco-friendly composite
          solutions.
        </p>
      </div>

      {/* Scroll cue */}
      <a
        href="#about-who"
        className="absolute bottom-5 left-1/2 z-10 -translate-x-1/2 max-[768px]:hidden"
        aria-label="Continue to company overview"
      >
        <span className="relative inline-block h-9 w-[26px] rounded-[40px] border border-white/60">
          <span className="absolute top-2 left-[11px] size-0.5 animate-scroll-cue rounded-full bg-white/60" />
        </span>
      </a>
    </section>
  );
}
