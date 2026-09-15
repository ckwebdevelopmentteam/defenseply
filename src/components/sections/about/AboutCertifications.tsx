const certifications = [
  "ISO 14001:2015",
  "ISO 45001:2018",
  "ISO 9001:2015",
  "BIFMA",
  "Green Pro Certified",
  "CE",
];

export function AboutCertifications() {
  return (
    <section
      id="about-certifications"
      aria-label="Certifications"
      className="w-full bg-white py-24 max-[768px]:py-16"
    >
      <div className="mx-auto w-full max-w-[1500px] px-[38px] max-[768px]:px-6">
        <div className="mb-12 flex items-end justify-between gap-6 max-[768px]:flex-col max-[768px]:items-start max-[768px]:gap-4">
          <div>
            <p className="mb-4 text-[10px] font-medium tracking-[.22em] uppercase text-[#979793]">
              Certifications
            </p>
            <h2 className="text-[clamp(28px,2.5vw,44px)] leading-[1.14] font-light uppercase text-[#1a1a1a]">
              Standards We Are Certified To
            </h2>
          </div>
          <p className="max-w-[380px] text-[14px] leading-[1.65] text-[#666] max-[768px]:max-w-none">
            DEFENSEPLY INTERNATIONAL LLP operates in compliance with
            internationally recognised quality, environmental, and occupational
            health &amp; safety standards.
          </p>
        </div>

        <div className="grid grid-cols-6 gap-4 max-[1024px]:grid-cols-3 max-[520px]:grid-cols-2">
          {certifications.map((cert) => (
            <div
              key={cert}
              className="flex min-h-[100px] items-center justify-center border border-black/8 bg-[#f7f8f9] px-4 py-6 text-center text-[12px] font-medium uppercase tracking-[.12em] text-[#1a1a1a] transition-[box-shadow] duration-300 hover:shadow-[0_8px_24px_#0000000c] max-[520px]:min-h-[80px]"
            >
              {cert}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
