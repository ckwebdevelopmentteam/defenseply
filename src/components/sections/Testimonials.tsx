import { Star, Quote } from "lucide-react";
import testimonials from "@/data/testimonials.json";
import { SectionHeading } from "@/components/ui/Heading";

export function Testimonials({
  items = testimonials,
}: {
  items?: typeof testimonials;
}) {
  return (
    <section
      data-section="testimonials"
      id="testimonials"
      className="mb-20 max-phone:mb-12"
      aria-label="What Our Clients Say"
    >
      <SectionHeading
        title="WHAT OUR CLIENTS SAY"
        descriptions={[
          "Proven performance across landmark commercial developments, high-humidity coastal villas, and luxury residential interiors.",
        ]}
      />

      <div className="grid grid-cols-2 gap-7 max-desktop:grid-cols-1 max-phone:gap-5">
        {items.map((item) => (
          <article
            key={item.id}
            className="group flex flex-col justify-between rounded-[2px] border border-black/8 bg-[#fafaf8] p-9 transition-[box-shadow,transform] duration-300 hover:shadow-[0_12px_32px_rgba(0,0,0,0.05)] max-phone:p-6"
          >
            <div>
              {/* Top Row: Stars + Quote Icon */}
              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-1 text-[#d9a84e]">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} size={15} fill="currentColor" stroke="none" />
                  ))}
                </div>
                <span className="text-black/15">
                  <Quote size={28} />
                </span>
              </div>

              {/* Quote text */}
              <blockquote className="mb-6 text-[15.5px] leading-[1.75] font-normal text-[#2e2d2b] max-phone:text-sm">
                "{item.quote}"
              </blockquote>
            </div>

            {/* Author Footer */}
            <div className="border-t border-black/8 pt-5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h4 className="text-[16px] font-medium tracking-[0.3px] uppercase text-[#1a1a1a]">
                    {item.name}
                  </h4>
                  <p className="text-[13px] text-[#6d6b67]">
                    {item.role}, <strong className="font-medium text-[#3b3a38]">{item.company}</strong>
                  </p>
                  <p className="text-[12px] text-[#8c8a85]">{item.location}</p>
                </div>
                <span className="rounded-full bg-stone px-3.5 py-1 text-[11px] font-medium tracking-[0.5px] text-[#4a4947]">
                  {item.projectType}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
