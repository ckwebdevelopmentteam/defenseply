import { IsoCertificationCard } from "@/components/ui/IsoCertificationCard";

const additionalCertifications = [
  {
    title: "Lead-Free Certified",
    subtitle: "Non-Toxic Formulations",
    description: "Verified zero lead or heavy metal additives in all polymer composite matrices.",
  },
  {
    title: "Green Pro Certified",
    subtitle: "Eco-Conscious Standards",
    description: "Evaluated for minimal lifecycle footprint and sustainable production practices.",
  },
  {
    title: "CE Compliance",
    subtitle: "European Conformity",
    description: "Meets stringent European health, safety, and environmental protection requirements.",
  },
];

export function AboutCertifications() {
  return (
    <section
      id="about-certifications"
      aria-label="Certifications"
      className="w-full bg-white py-24 max-[768px]:py-16 border-t border-black/5"
    >
      <div className="w-full px-[38px] max-[768px]:px-6">
        <div className="mb-12 flex items-end justify-between gap-6 max-[768px]:flex-col max-[768px]:items-start max-[768px]:gap-4 max-w-[1040px]">
          <div>
            <p className="mb-4 text-[10px] font-medium tracking-[.22em] uppercase text-[#979793]">
              Certifications &amp; Compliance
            </p>
            <h2 className="text-[clamp(28px,2.5vw,44px)] leading-[1.14] font-light uppercase text-[#1a1a1a]">
              Standards We Are Certified To
            </h2>
          </div>
          <p className="max-w-[420px] text-[14px] leading-[1.65] text-[#666] max-[768px]:max-w-none">
            DEFENSEPLY INTERNATIONAL LLP operates in compliance with
            internationally recognised quality, environmental, and occupational
            health &amp; safety benchmarks.
          </p>
        </div>

        {/* Featured ISO Certification Card */}
        <div className="max-w-[1040px] mb-10">
          <IsoCertificationCard />
        </div>

        {/* Additional Regulatory Badges */}
        <div className="max-w-[1040px]">
          <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#8A8376] mb-4">
            COMPLEMENTARY REGULATORY VALIDATIONS
          </p>
          <div className="grid grid-cols-3 gap-4 max-[1024px]:grid-cols-2 max-[600px]:grid-cols-1">
            {additionalCertifications.map((cert) => (
              <div
                key={cert.title}
                className="flex flex-col justify-between rounded-[12px] border border-[#E8E2D8] bg-[#FAF8F5] p-5.5 transition-all duration-300 hover:border-[#DCD4C8] hover:shadow-[0_8px_24px_rgba(0,0,0,0.04)]"
              >
                <div>
                  <span className="text-[9.5px] font-semibold tracking-[0.16em] uppercase text-[#9E7B5A]">
                    {cert.subtitle}
                  </span>
                  <h3 className="mt-1 mb-2 text-[16px] font-semibold tracking-[-0.01em] text-[#161513]">
                    {cert.title}
                  </h3>
                  <p className="text-[12px] leading-[1.6] text-[#555047]">
                    {cert.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
