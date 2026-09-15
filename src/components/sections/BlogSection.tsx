import articles from "@/data/blog.json";
import { SectionHeading } from "@/components/ui/Heading";
import { ArrowIcon } from "@/components/ui/ActionLink";

export function BlogSection({ items = articles }: { items?: typeof articles }) {
  return (
    <section
      data-section="blog"
      id="blog"
      className="mb-20 max-phone:mb-12"
      aria-label="Design Journal & Insights"
    >
      <SectionHeading
        title="DESIGN JOURNAL & INSIGHTS"
        descriptions={[
          "Perspectives on sustainable composite engineering, waterproof architecture, and contemporary fabrication methods.",
        ]}
      />

      <div className="grid grid-cols-3 gap-7 max-desktop:grid-cols-2 max-phone:grid-cols-1 max-phone:gap-6">
        {items.map((article) => (
          <article
            key={article.id}
            className="group flex flex-col overflow-hidden rounded-[2px] border border-black/8 bg-[#fafaf8] transition-[box-shadow,transform] duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)]"
          >
            <a href={article.href} className="flex h-full flex-col">
              {/* Image Banner */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone">
                <img
                  src={article.image}
                  alt={article.title}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-600 ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 rounded-[2px] bg-black/80 px-3 py-1 text-[11px] font-medium tracking-[1px] uppercase text-white backdrop-blur-md">
                  {article.category}
                </span>
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col justify-between p-7 max-phone:p-5">
                <div>
                  <div className="mb-3 flex items-center gap-3 text-[12px] text-[#787673]">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className="mb-3 text-[19px] leading-[1.3] font-normal tracking-[0.3px] uppercase text-[#1a1a1a] transition-colors group-hover:text-black max-phone:text-base">
                    {article.title}
                  </h3>
                  <p className="text-[14px] leading-[1.65] text-[#5d5d59]">
                    {article.excerpt}
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-2 border-t border-black/6 pt-4 text-[13px] font-medium tracking-[0.5px] uppercase text-ink">
                  <span>Read Article</span>
                  <ArrowIcon className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
