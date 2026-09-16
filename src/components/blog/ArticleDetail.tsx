import type { BlogArticle } from "@/types/blog";
export function ArticleDetail({
  article,
  handleClose,
  articles,
}: {
  article: BlogArticle | null;
  handleClose: () => void;
  articles: BlogArticle[];
}) {
  if (!article) return null;

  const articleIndex = articles.findIndex((item) => item.id === article.id);
  const featuredImageSource = article.featuredImage;

  return (
    <div className="w-full flex flex-col">
      {/* Top Header: Close Button & Counter */}
      <div className="w-full flex items-center justify-between pb-4 border-b border-black/10">
        <button
          type="button"
          aria-label="Close article detail"
          className="size-10 cursor-pointer flex items-center justify-center rounded-full border border-black/15 bg-[#f5f5f3] text-[#111] transition-all hover:bg-black hover:text-white"
          onClick={handleClose}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className="size-4"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <span className="text-xs font-mono tracking-widest text-[#777]">
          {articleIndex + 1} / {articles.length}
        </span>
      </div>

      {/* Meta tags */}
      <div className="mt-6 flex flex-wrap items-center gap-3">
        {article.category && (
          <span className="rounded-full border border-black/80 bg-stone px-3.5 py-1 text-[11px] font-mono uppercase text-[#222]">
            {article.category}
          </span>
        )}
        {(article.date || article.readTime) && (
          <span className="text-xs font-mono text-[#777]">
            {article.date} {article.date && article.readTime ? "•" : ""}{" "}
            {article.readTime}
          </span>
        )}
      </div>

      {/* Article Title */}
      <h2 className="text-[clamp(24px,2.8vw,38px)] uppercase tracking-tight text-[#111] font-sans leading-[1.15] mt-4 mb-6">
        {article.title}
      </h2>

      {/* Hero Banner Image */}
      {featuredImageSource && (
        <div className="w-full aspect-[16/9] rounded-[4px] overflow-hidden relative mb-8 bg-stone shadow-md">
          <img
            src={featuredImageSource}
            alt={article.title}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      )}

      {/* HTML Content */}
      <div
        className="prose prose-neutral max-w-none text-[15px] leading-[1.8] font-normal text-[#333] space-y-4 font-sans"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />

      {/* Architectural Takeaways Box */}
      <div className="mt-8 rounded-[4px] bg-[#f7f7f5] p-6 border border-black/8">
        <h3 className="text-xs font-mono uppercase tracking-wider text-[#777] mb-3">
          Defenseply Material Takeaways
        </h3>
        <ul className="text-sm text-[#333] space-y-2 list-disc pl-5">
          <li>
            100% waterproof cellular composite structure with zero swelling
            risk.
          </li>
          <li>
            Calibrated high-density surface ready for CNC carving and PU
            coatings.
          </li>
          <li>
            Class 1 fire retardancy certified and zero toxic formaldehyde
            emissions.
          </li>
        </ul>
      </div>

      {/* Footer CTA */}
      <div className="mt-8 pt-6 border-t border-black/10 flex flex-wrap items-center justify-between gap-4 mb-8">
        <span className="text-xs font-mono text-[#666]">
          Interested in specifying this material for your project?
        </span>
        <a
          href="/contact-us#project-form"
          onClick={handleClose}
          className="inline-flex items-center gap-2 rounded-full bg-[#111] px-6 py-2.5 text-xs font-mono uppercase tracking-wider text-white transition-all hover:bg-[#333] shadow-xs active:scale-95"
        >
          Inquire Materials
          <svg
            className="size-3.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </a>
      </div>
    </div>
  );
}
