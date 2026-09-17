import type { BlogArticle } from "@/types/blog";
export function ArticleCard({
  article,
  onOpen,
}: {
  article: BlogArticle;
  onOpen: (article: BlogArticle) => void;
}) {
  const featuredImageSource = article.featuredImage;
  const subtitle = article.category
    ? `${article.category}${article.readTime ? ` • ${article.readTime}` : ""}`
    : "";
  return (
    <div
      role="button"
      tabIndex={0}
      className="w-full overflow-hidden rounded-[4px] border border-black/10 bg-[#f9f9f7] shadow-xs transition-[box-shadow,transform] duration-300 hover:shadow-lg max-md:w-[82vw] max-md:shrink-0 max-[1025px]:w-[50vw] max-[1025px]:shrink-0"
      onClick={() => onOpen(article)}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onOpen(article);
        }
      }}
      aria-label={`Read article: ${article.title}`}
    >
      <div className="w-full aspect-[16/11] group cursor-pointer relative overflow-hidden bg-stone">
        {/* Top-Right Pill/Plus Icon with brand green background */}
        <div className="bg-[#1c3f21]/90 absolute opacity-0 group-hover:opacity-100 max-[1025px]:opacity-100 w-8 h-8 rounded-full backdrop-blur-lg text-white flex items-center justify-center top-3 right-3 z-10 pointer-events-none transition-opacity duration-300 shadow-[0_2px_8px_rgba(28,63,33,0.4)]">
          <span className="absolute w-3.5 h-[1.5px] bg-white"></span>
          <span className="absolute w-[1.5px] h-3.5 bg-white"></span>
        </div>

        {/* Image with smooth zoom / grayscale on hover */}
        {featuredImageSource && (
          <img
            loading="lazy"
            src={featuredImageSource}
            alt={article.title}
            className={`absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]`}
          />
        )}

        {/* Always visible bottom gradient for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

        {/* Static visible label before hover on desktop */}
        <div className="absolute inset-x-0 bottom-0 p-5 z-[1] transition-opacity duration-300 group-hover:opacity-0 max-[1025px]:hidden">
          {subtitle && (
            <span className="text-[11px] font-mono tracking-[1.5px] uppercase text-white/80 block mb-1">
              {subtitle}
            </span>
          )}
          <h4 className="text-[17px] font-sans font-medium uppercase leading-snug text-white line-clamp-2">
            {article.title}
          </h4>
        </div>

        {/* Slide-in frosted bottom bar from prompt with animated arrow */}
        <div className="absolute w-full px-5 py-4 z-[2] bottom-0 overflow-hidden translate-y-full bg-black/60 backdrop-blur-lg group-hover:translate-y-0 max-[1025px]:translate-y-0 duration-300 ease-out text-white">
          <div className="flex w-full justify-between items-end gap-3">
            <div className="flex flex-col min-w-0">
              {subtitle && (
                <span className="text-[11px] font-mono uppercase tracking-[1.5px] text-white/80 mb-1">
                  {subtitle}
                </span>
              )}
              <h4 className="text-[17px] font-sans font-semibold leading-snug uppercase text-white line-clamp-2">
                {article.title}
              </h4>
            </div>
            <div className="shrink-0 flex items-center">
              <svg
                className="relative -rotate-[135deg] w-6 h-6 overflow-hidden"
                viewBox="0 0 19 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  className="origin-center -translate-y-[110%] scale-0 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-500 ease-out"
                  d="M9.44186 23C9.38605 22.9324 9.33953 22.8559 9.27442 22.7973C6.25116 19.8649 3.22791 16.9369 0.204652 14.009C0.139535 13.9459 0.0604662 13.8964 1.30208e-06 13.8468C0.576745 13.2973 1.12558 12.7748 1.66512 12.2613C3.82326 14.3514 6.01861 16.4775 8.2093 18.6036C8.23256 18.5901 8.26047 18.5811 8.28372 18.5676C8.28372 12.3829 8.28372 6.19369 8.28372 -4.68423e-07C9.09768 -4.32844e-07 9.87442 -3.98892e-07 10.6744 -3.63923e-07C10.6744 6.19369 10.6744 12.3784 10.6744 18.5901C12.893 16.4369 15.0884 14.3108 17.2651 12.2027C17.8465 12.7568 18.3907 13.2838 19 13.8739C18.9488 13.9009 18.8558 13.9324 18.7907 13.9955C15.7581 16.9279 12.7302 19.8649 9.70233 22.7973C9.64186 22.8559 9.5907 22.9324 9.53488 23C9.50698 23 9.47442 23 9.44186 23Z"
                  fill="#ffffff"
                />
                <path
                  className="origin-center group-hover:scale-0 group-hover:translate-y-[110%] transition-all duration-500 ease-out"
                  d="M9.44186 23C9.38605 22.9324 9.33953 22.8559 9.27442 22.7973C6.25116 19.8649 3.22791 16.9369 0.204652 14.009C0.139535 13.9459 0.0604662 13.8964 1.30208e-06 13.8468C0.576745 13.2973 1.12558 12.7748 1.66512 12.2613C3.82326 14.3514 6.01861 16.4775 8.2093 18.6036C8.23256 18.5901 8.26047 18.5811 8.28372 18.5676C8.28372 12.3829 8.28372 6.19369 8.28372 -4.68423e-07C9.09768 -4.32844e-07 9.87442 -3.98892e-07 10.6744 -3.63923e-07C10.6744 6.19369 10.6744 12.3784 10.6744 18.5901C12.893 16.4369 15.0884 14.3108 17.2651 12.2027C17.8465 12.7568 18.3907 13.2838 19 13.8739C18.9488 13.9009 18.8558 13.9324 18.7907 13.9955C15.7581 16.9279 12.7302 19.8649 9.70233 22.7973C9.64186 22.8559 9.5907 22.9324 9.53488 23C9.50698 23 9.47442 23 9.44186 23Z"
                  fill="#ffffff"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
