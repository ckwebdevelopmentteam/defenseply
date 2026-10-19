import Image from "next/image";

export interface IsoStandard {
  image: string;
  alt: string;
  code: string;
  category: string;
  description: string;
}

export const ISO_STANDARDS: IsoStandard[] = [
  {
    image: "/assets/certifications/iso-9001-boards.jpg",
    alt: "ISO 9001:2015 Quality Management — Calibrated Wood Polymer Composite Boards",
    code: "9001:2015",
    category: "QUALITY MANAGEMENT",
    description:
      "Rigorous multi-stage batch inspection ensuring structural density, uniform thickness, and strict dimensional tolerances.",
  },
  {
    image: "/assets/certifications/iso-14001-leaf.jpg",
    alt: "ISO 14001:2015 Environmental Management — Eco-Friendly Recyclable Materials",
    code: "14001:2015",
    category: "ENVIRONMENTAL MANAGEMENT",
    description:
      "100% recyclable, lead-free formulations manufactured with zero harmful emissions and eco-conscious resource cycles.",
  },
  {
    image: "/assets/certifications/iso-45001-helmet.jpg",
    alt: "ISO 45001:2018 Health & Safety — Workplace Safety and Operational Protection",
    code: "45001:2018",
    category: "HEALTH & SAFETY",
    description:
      "Internationally certified workplace protocols safeguarding workforce well-being across automated extrusion lines.",
  },
];

export function IsoCertificationCard({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      className={`rounded-[2px] border border-[#E8E2D8] bg-[#FAF8F5] p-5 sm:p-6 lg:p-6.5 shadow-[0_8px_30px_rgba(0,0,0,0.03)] transition-[box-shadow,border-color] duration-300 hover:border-[#DCD4C8] hover:shadow-[0_12px_36px_rgba(0,0,0,0.05)] ${className}`}
    >
      {/* Top Header */}
      <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-[#E8E2D8]">
        <p className="text-[10px] sm:text-[10.5px] font-semibold tracking-[0.2em] uppercase text-[#9E7B5A]">
          GLOBAL OPERATIONAL BENCHMARKS
        </p>
        <span className="text-[10px] sm:text-[10.5px] font-semibold tracking-[0.14em] uppercase text-[#9E7B5A]">
          ISO CERTIFIED
        </span>
      </div>

      {/* Rows Container */}
      <div className="divide-y divide-[#E8E2D8]">
        {ISO_STANDARDS.map((item) => (
          <div
            key={item.code}
            className="py-4 sm:py-5 first:pt-4 last:pb-1 flex flex-col sm:flex-row sm:items-center gap-3.5 sm:gap-4 lg:gap-5"
          >
            {/* Top row on mobile, Left item on sm+: Image Thumbnail */}
            <div className="flex items-center gap-3.5 sm:contents">
              <div className="relative size-[74px] sm:size-[80px] lg:size-[86px] shrink-0 overflow-hidden rounded-[2px] bg-[#EAE5DC] border border-black/[0.04] shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="90px"
                  className="object-cover object-center"
                />
              </div>

              {/* Vertical hairline divider with warm bronze tick accent */}
              <div
                className="hidden sm:flex flex-col items-center justify-center self-stretch w-[1px] bg-[#E8E2D8] relative shrink-0 mx-0.5"
                aria-hidden="true"
              >
                <span className="w-[2px] h-3.5 bg-[#9E7B5A]" />
              </div>

              {/* Middle Section: ISO Code & Category */}
              <div className="flex flex-col justify-center shrink-0 min-w-[120px] sm:min-w-[130px] lg:min-w-[145px]">
                <span className="text-[12.5px] sm:text-[13px] font-medium tracking-[0.02em] text-[#161513] leading-tight">
                  ISO
                </span>
                <span className="text-[20px] sm:text-[22px] lg:text-[23px] font-bold tracking-[-0.02em] text-[#161513] leading-tight mt-0.5 mb-1 sm:mb-1.5">
                  {item.code}
                </span>
                <span className="text-[9.5px] sm:text-[10px] font-semibold tracking-[0.16em] uppercase text-[#9E7B5A]">
                  {item.category}
                </span>
              </div>
            </div>

            {/* Vertical hairline divider between ISO title and description */}
            <div
              className="hidden sm:block w-[1px] self-stretch bg-[#E8E2D8] shrink-0 mx-0.5"
              aria-hidden="true"
            />

            {/* Right Section: Horizontal accent dash and description */}
            <div className="flex flex-col justify-center flex-1 pl-0 sm:pl-1">
              <span
                className="block w-7 sm:w-8 h-[1.5px] bg-[#9E7B5A]/80 mb-2 sm:mb-2.5 shrink-0"
                aria-hidden="true"
              />
              <p className="text-[11.5px] sm:text-[12px] lg:text-[12.5px] leading-[1.62] text-[#555047] font-normal">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
