import { aboutPurposeData as data } from "@/data/about-purpose";

export type ResolvedMissionItem = {
  id: "innovation" | "responsibility" | "quality" | "partnership";
  number: string;
  category: string;
  headingLines: readonly [string, string];
  description: string;
  imageSrc: string | null;
  alt: string;
  desktopObjectPosition: string;
  mobileObjectPosition: string;
};

function MissionIntro() {
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between text-[11px] font-medium uppercase leading-[1.5] tracking-[0.16em] text-[#656B61]">
        <span>{data.mission.label}</span>
        <span aria-hidden="true">{data.mission.sequenceLabel}</span>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-6 text-left min-[1100px]:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] min-[1100px]:items-end min-[1100px]:gap-12">
        <h3
          id="mission-statement-heading"
          className="text-[clamp(30px,8vw,38px)] font-light uppercase leading-[1.08] tracking-[-0.02em] text-[#252725] md:text-[40px] min-[1100px]:text-[clamp(32px,2.5vw,46px)]"
        >
          {data.mission.headingLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h3>

        <p className="max-w-[40ch] text-[15px] font-normal leading-[1.65] text-[#555B52] md:text-[16px]">
          {data.mission.description}
        </p>
      </div>

      <div
        className="mt-7 h-px w-full bg-[#D4D7CD] md:mt-9 min-[1100px]:mt-12"
        aria-hidden="true"
      />
    </div>
  );
}

export function MissionPrinciples({
  items,
}: {
  items: readonly ResolvedMissionItem[];
}) {
  return (
    <section
      id="about-mission"
      aria-labelledby="mission-statement-heading"
      className="w-full bg-[#F5F3EE] py-14 font-sans text-[#252725] md:py-[72px] min-[1100px]:py-[104px]"
    >
      <div className="w-full px-6 md:px-[38px]">
        <MissionIntro />

        <ol
          className="m-0 mt-8 grid w-full grid-cols-1 gap-5 p-0 md:mt-10 md:grid-cols-4 md:gap-6"
          aria-label="Our mission principles"
        >
          {items.map((item, index) => (
            <li
              key={item.id}
              className="min-w-0 overflow-hidden rounded-[5px] border border-[#D4D7CD] bg-[#FAF9F5] shadow-[0_12px_30px_rgba(37,39,37,0.035)]"
            >
              <article className="flex h-full w-full flex-col">
                <div className="aspect-[4/3] w-full overflow-hidden bg-[#E8E6DF]">
                  {item.imageSrc ? (
                    <img
                      src={item.imageSrc}
                      alt={item.alt}
                      style={{
                        objectPosition:
                          item.desktopObjectPosition || "50% 50%",
                      }}
                      className="size-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="flex size-full items-center justify-center text-[13px] text-[#656B61]">
                      <span>Image pending</span>
                    </div>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-6 sm:p-7 min-[1100px]:p-7">
                  <div className="flex items-center justify-between gap-4 border-b border-[#D4D7CD] pb-4">
                    <div className="flex items-center gap-4">
                      <span
                        className="w-8 shrink-0 text-[12px] font-normal tabular-nums text-[#656B61]"
                        aria-hidden="true"
                      >
                        {item.number}
                      </span>
                      <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-[#656B61]">
                        {item.category}
                      </span>
                    </div>
                    <span
                      className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#8A8E85]"
                      aria-hidden="true"
                    >
                      {item.number} / {String(items.length).padStart(2, "0")}
                    </span>
                  </div>

                  <h4 className="mt-6 text-[clamp(30px,3vw,42px)] font-light leading-[1.08] tracking-[-0.025em] text-[#252725]">
                    <span className="block">{item.headingLines[0]}</span>
                    <span className="block">{item.headingLines[1]}</span>
                  </h4>

                  <p className="mt-4 text-[15px] font-normal leading-[1.7] text-[#555B52]">
                    {item.description}
                  </p>

                  <div className="mt-auto flex items-end justify-between border-t border-[#D4D7CD] pt-6">
                    <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#8A8E85]">
                      Guiding principle
                    </span>
                    <span
                      className="select-none text-[52px] font-extralight leading-[0.75] tracking-[-0.08em] text-[#DDE0D7]"
                      aria-hidden="true"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
