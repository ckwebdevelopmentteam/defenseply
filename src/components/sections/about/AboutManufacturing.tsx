const infraStats = [
  { value: "45,000 sq. ft.", label: "Modern Manufacturing Plant" },
  { value: "2 Acres", label: "Industrial Site, KINFRA Park" },
  { value: "State-of-the-Art", label: "High-Precision Extrusion Lines" },
  { value: "1600 KVA", label: "Dedicated Power Transformer" },
  { value: "Industrial", label: "Chillers & Rotary Screw Compressors" },
  { value: "NH66", label: "National Highway Connectivity" },
  { value: "3.3 km", label: "Kuttippuram Railway Station" },
  { value: "14 km", label: "Tirur Railway Station" },
];

export function AboutManufacturing() {
  return (
    <section
      id="about-manufacturing"
      aria-label="Manufacturing infrastructure"
      className="relative w-full overflow-hidden bg-[#1c1c1e] py-24 text-white max-[768px]:py-16"
    >
      <div className="w-full px-[38px] max-[768px]:px-6">
        <p className="mb-4 text-[10px] font-medium tracking-[.22em] uppercase text-white/50">
          Manufacturing Infrastructure
        </p>
        <div className="mb-14 grid grid-cols-[1fr_1fr] items-end gap-10 max-[768px]:grid-cols-1 max-[768px]:gap-6 max-[768px]:mb-10">
          <h2 className="text-[clamp(28px,2.5vw,44px)] leading-[1.14] font-light uppercase text-white">
            Built to Scale. Engineered to Perform.
          </h2>
          <p className="text-[15px] leading-[1.7] text-white/60 max-[768px]:max-w-none">
            Our plant at Plot No. 06, KINFRA Industrial Park, Moodal,
            Kuttippuram is strategically designed with scalable capabilities to
            accommodate future expansion as market demand grows.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-4 gap-px bg-white/10 border border-white/10 overflow-hidden rounded-[4px] max-[1024px]:grid-cols-2 max-[520px]:grid-cols-1">
          {infraStats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col justify-between bg-[#1c1c1e] px-7 py-8 max-[768px]:px-5 max-[768px]:py-6"
            >
              <span className="mb-3 block text-[clamp(18px,1.5vw,26px)] leading-[1.2] font-light text-white">
                {stat.value}
              </span>
              <span className="text-[11px] font-medium tracking-[.1em] uppercase text-white/45">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
