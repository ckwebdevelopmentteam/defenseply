// Built using Hyperiux Vault: https://vault.hyperiux.com
"use client";

import { useEffect, useMemo, useRef, useState, type CSSProperties, type KeyboardEvent } from "react";
import gsap from "gsap";

export interface TeamMember {
  id: string;
  slug?: string;
  title: string;
  /** Rendered as raw HTML (`dangerouslySetInnerHTML`) — trusted content only. */
  content: string;
  featuredImage: string | { node: { sourceUrl: string } };
  category?: string;
  date?: string;
  readTime?: string;
  excerpt?: string;
  href?: string;
  teams?: {
    designation: string;
    linkedin?: string;
    profilePicture?: string | { node: { sourceUrl: string } };
  };
}

function getImageSource(image?: string | { node?: { sourceUrl?: string } }) {
  if (typeof image === "string") return image;
  return image?.node?.sourceUrl;
}

function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);

    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  return prefersReducedMotion;
}

const DEFAULT_TEAM: TeamMember[] = [
  {
    id: "1",
    slug: "amara-okafor",
    title: "Amara Okafor",
    content:
      "<p>Amara leads brand strategy, turning ambiguous briefs into positioning that clients can actually build a company around. She spends the first two weeks of every engagement asking questions most agencies skip, and it shows in how quickly the work converges.</p><p>Before joining, she ran strategy teams at two design studios in London and Lagos, working across finance, hospitality, and consumer tech. She's most interested in the gap between what a brand says about itself and what its product actually does.</p><p>Outside of client work, Amara mentors early-career strategists and writes occasionally about positioning frameworks that don't collapse the moment a competitor copies them.</p>",
    featuredImage: "https://cdn.21st.dev/assets/mirror/98/98759e3989bc46576c87c1864600ffcf42acddd25d8ef93f4f2bb36a4d0a8317.png",
    teams: {
      designation: "Head of Strategy",
      linkedin: "https://www.linkedin.com",
    },
  },
  {
    id: "2",
    slug: "daniel-reyes",
    title: "Daniel Reyes",
    content:
      "<p>Daniel designs interfaces that hold up under real usage, not just in a showcase reel. Motion, type, and grid systems are his daily tools, and he'd rather ship a slightly less flashy interaction that never jitters than a spectacular one that breaks on the third viewport size he tests.</p><p>He came up through in-house product teams before moving into studio work, which shows in how much he cares about states most designers skip - empty, loading, error, and the ugly middle of a long list. Every project he leads gets a pass for those before it ships.</p><p>He's currently obsessed with reducing the gap between design files and shipped code, and spends a fair amount of time building small internal tools to close it.</p>",
    featuredImage: "https://cdn.21st.dev/assets/mirror/6d/6d08314779bd0f0add53695629c611517cfc9a29659879b7030cf9425376db3b.png",
    teams: {
      designation: "Design Director",
      linkedin: "https://www.linkedin.com",
    },
  },
  {
    id: "3",
    slug: "priya-menon",
    title: "Priya Menon",
    content:
      "<p>Priya builds the animation and interaction layer for every project, from scroll choreography to micro-interactions that make a page feel alive. Her rule of thumb: if you notice the animation before you notice what it's telling you, it's wrong.</p><p>She works closely with design from the earliest wireframes rather than being handed a finished comp to animate, which is why so much of the studio's motion work reads as intentional instead of decorative. Performance budgets are non-negotiable on her projects - nothing ships if it drops frames on a mid-range phone.</p><p>When she's not tuning easing curves, she's usually deep in a rabbit hole about how physical materials move, which somehow always ends up back in a spring config.</p>",
    featuredImage: "https://cdn.21st.dev/assets/mirror/52/521b1366e0e97702f3853ca34e44ec22afb0a6331932f938e3ab28afa7ace647.png",
    teams: {
      designation: "Lead Motion Engineer",
      linkedin: "https://www.linkedin.com",
    },
  },
  {
    id: "4",
    slug: "marcus-lindqvist",
    title: "Marcus Lindqvist",
    content:
      "<p>Marcus runs client relationships end to end, keeping ambitious timelines honest and every project shipping on schedule. He's the person who tells a client their launch date is unrealistic in week one, which tends to save everyone a much worse conversation in week eleven.</p><p>His background is split between agency production and a few years running operations at a small product company, so he understands both sides of the table - what a studio needs to do great work, and what a client actually needs to justify the spend internally.</p><p>He keeps every project's scope, budget, and timeline visible to the whole team at all times, on the theory that surprises are the only real project risk worth worrying about.</p>",
    featuredImage: "https://cdn.21st.dev/assets/mirror/0c/0c393afa742241b52395132efb49b1b10b6dcd16d54201e1852c82a35d91d83a.png",
    teams: {
      designation: "Producer",
      linkedin: "https://www.linkedin.com",
    },
  },
  {
    id: "5",
    slug: "sofia-almeida",
    title: "Sofia Almeida",
    content:
      "<p>Sofia writes the copy and content strategy behind every brand voice we ship, working closely with strategy and design from day one rather than being brought in at the end to fill placeholder text. That's usually the difference between a headline that fits the layout and one that fits the brand.</p><p>She's written for everything from three-person startups to companies going through a full rebrand, and has a particular interest in how a brand's voice needs to flex across a homepage, a support email, and an error message without losing its identity in any of them.</p><p>She also runs the studio's internal writing guidelines, which exist mostly so five different people don't invent five different ways to describe the same product feature.</p>",
    featuredImage: "https://cdn.21st.dev/assets/mirror/14/147057108e060ee8724a4179da79fe1043e9b979c41a1aa48f9af2efa886b94f.png",
    teams: {
      designation: "Content Lead",
      linkedin: "https://www.linkedin.com",
    },
  },
];

export interface InformationDrawerProps {
  /** Items shown in the grid (team members or editorial articles). */
  teams?: TeamMember[];
  /** Optional badge pill text above title. */
  badge?: string;
  /** Heading above the grid. */
  title?: string;
  /** Intro paragraph under the heading. */
  description?: string;
  /** GSAP tween duration (seconds) for the drawer panel and overlay. */
  duration?: number;
  /** GSAP ease for the drawer panel and overlay. */
  ease?: string;
  /** GSAP tween delay (seconds) for the drawer panel and overlay. */
  delay?: number;
  /** Drawer panel background color. */
  backgroundColor?: string;
  /** Drawer panel text color. */
  textColor?: string;
  /** Drawer panel width on desktop. Numbers are treated as percentages. */
  sidebarWidth?: string | number;
  /** Backdrop opacity while the drawer is open. */
  overlayOpacity?: number;
  /** GSAP tween duration (seconds) for the staged content fade in/out. */
  contentDuration?: number;
  /** Optional className for the section */
  className?: string;
}

/**
 * A responsive grid that opens a full-height detail drawer per article/member. The overlay
 * and panel slide in with GSAP, then the rich editorial content fades in once the panel
 * settles. Background page scroll is locked while the drawer is open.
 */
export default function InformationDrawer({
  teams = DEFAULT_TEAM,
  badge,
  title = "Built by Different Minds",
  description = "A multidisciplinary team of designers, developers, strategists, and creative thinkers working together to turn ambitious ideas into thoughtful digital experiences. We bring different perspectives, skills, and creative energy to every project.",
  duration = 0.65,
  ease = "power2.inOut",
  delay = 0,
  backgroundColor = "#ffffff",
  textColor = "#111111",
  sidebarWidth = "55%",
  overlayOpacity = 0.45,
  contentDuration = 0.25,
  className = "",
}: InformationDrawerProps) {
  const [detailOpen, setDetailOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  const teamInfo: TeamMember[] = Array.isArray(teams) ? teams : [];

  const lockScroll = () => {
    if (typeof document !== "undefined") {
      document.body.style.overflow = "hidden";
      document.body.classList.add("drawer-open");
    }
  };
  const unlockScroll = () => {
    if (typeof document !== "undefined") {
      document.body.style.overflow = "";
      document.body.classList.remove("drawer-open");
    }
  };

  const handleDetail = (member: TeamMember) => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
    setSelectedMember(member);
    setDetailOpen(true);
    lockScroll();
  };

  const handleCardKeyDown = (event: KeyboardEvent<HTMLDivElement>, member: TeamMember) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    handleDetail(member);
  };

  const handleClose = () => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    unlockScroll();

    // Fade the content out first, then slide the drawer away.
    const fadeOut = prefersReducedMotion ? 0 : contentDuration;

    if (contentRef.current) {
      gsap.to(contentRef.current, {
        opacity: 0,
        duration: fadeOut,
        ease,
        overwrite: "auto",
        onComplete: () => setDetailOpen(false),
      });
    } else {
      setDetailOpen(false);
    }

    // Clear the member only once the panel has finished sliding out.
    closeTimeout.current = setTimeout(
      () => {
        setSelectedMember(null);
        closeTimeout.current = null;
      },
      (fadeOut + (prefersReducedMotion ? 0 : duration + delay)) * 1000,
    );
  };

  const drawerWidth = useMemo(() => {
    if (typeof sidebarWidth === "number") return `${sidebarWidth}%`;
    return sidebarWidth;
  }, [sidebarWidth]);

  useEffect(() => {
    if (typeof window === "undefined" || !overlayRef.current) return;

    gsap.to(overlayRef.current, {
      opacity: detailOpen ? overlayOpacity : 0,
      duration: prefersReducedMotion ? 0 : duration,
      ease,
      delay: prefersReducedMotion ? 0 : delay,
      overwrite: "auto",
    });
  }, [detailOpen, duration, ease, delay, overlayOpacity, prefersReducedMotion]);

  // Fade the content in only after the drawer panel has finished sliding open.
  useEffect(() => {
    if (typeof window === "undefined" || !detailOpen || !contentRef.current) return;

    gsap.fromTo(
      contentRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: prefersReducedMotion ? 0 : contentDuration,
        ease,
        delay: prefersReducedMotion ? 0 : delay + duration,
        overwrite: "auto",
      },
    );
  }, [detailOpen, selectedMember, duration, contentDuration, ease, delay, prefersReducedMotion]);

  useEffect(() => {
    const handleEsc = (e: globalThis.KeyboardEvent) => {
      if (e.key === "Escape" && detailOpen) {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
      if (closeTimeout.current) clearTimeout(closeTimeout.current);
      unlockScroll();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [detailOpen]);

  const sectionStyle = { "--information-drawer-text-color": textColor } as CSSProperties;
  const drawerStyle = {
    backgroundColor,
    color: textColor,
    width: drawerWidth,
    transform: detailOpen ? "translateX(0)" : "translateX(100%)",
    transitionDelay: prefersReducedMotion ? "0s" : `${delay}s`,
    transitionDuration: prefersReducedMotion ? "0s" : `${duration}s`,
  } as CSSProperties;

  return (
    <section
      id="blog"
      data-section="blog"
      className={`relative w-full mb-20 max-phone:mb-12 ${className}`}
      style={sectionStyle}
      aria-label="Editorial Journal & Insights"
    >
      <div className={`w-full ${detailOpen ? "pointer-events-none" : "pointer-events-auto"}`}>
        {/* Left-aligned Header matching Defenseply standard */}
        <div className="flex flex-col items-start text-left mb-10 max-phone:mb-8">
          {badge && (
            <span className="mb-3 inline-block rounded-full border border-black/80 px-5 py-1 text-[11px] font-medium tracking-[2.5px] uppercase font-sans">
              {badge}
            </span>
          )}
          <h2 className="text-display font-light uppercase antialiased tracking-tight text-ink mb-3 max-phone:mb-2 text-left">
            {title}
          </h2>
          {description && (
            <p className="max-w-[720px] text-fluid font-light leading-[1.5] text-[#5d5d59] text-left">
              {description}
            </p>
          )}
        </div>

        {/* Article Cards Grid */}
        <div className="w-full overflow-hidden max-md:overflow-x-auto max-md:overflow-y-hidden max-[1025px]:overflow-x-auto max-[1025px]:overflow-y-hidden">
          <div className="grid grid-cols-3 gap-6 justify-between max-md:flex max-md:flex-nowrap max-md:w-fit max-md:gap-4 max-[1025px]:flex max-[1025px]:flex-nowrap max-[1025px]:w-fit max-[1025px]:gap-5">
            {teamInfo.length > 0 ? (
              teamInfo.map((member) => {
                const featuredImageSource = getImageSource(member.featuredImage);
                const subtitle =
                  member.teams?.designation ||
                  (member.category
                    ? `${member.category}${member.readTime ? ` • ${member.readTime}` : ""}`
                    : "");

                return (
                  <div
                    key={member.id ?? member.slug}
                    role="button"
                    tabIndex={0}
                    className="w-full overflow-hidden rounded-[4px] border border-black/10 bg-[#f9f9f7] shadow-xs transition-[box-shadow,transform] duration-300 hover:shadow-lg max-md:w-[82vw] max-md:shrink-0 max-[1025px]:w-[50vw] max-[1025px]:shrink-0"
                    onClick={() => handleDetail(member)}
                    onKeyDown={(event) => handleCardKeyDown(event, member)}
                    aria-label={`Read article: ${member.title}`}
                  >
                    <div className="w-full aspect-[16/11] group cursor-pointer relative overflow-hidden bg-stone">
                      {/* Top-Right Pill/Plus Icon from prompt */}
                      <div className="bg-black/40 absolute opacity-0 group-hover:opacity-100 max-[1025px]:opacity-100 w-8 h-8 rounded-full backdrop-blur-lg text-white flex items-center justify-center top-3 right-3 z-10 pointer-events-none transition-opacity duration-300">
                        <span className="absolute w-3.5 h-[1.5px] bg-white"></span>
                        <span className="absolute w-[1.5px] h-3.5 bg-white"></span>
                      </div>

                      {/* Image with smooth zoom / grayscale on hover */}
                      {featuredImageSource && (
                        <img
                          loading="lazy"
                          src={featuredImageSource}
                          alt={member.title}
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
                          {member.title}
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
                              {member.title}
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
              })
            ) : (
              <p className="col-span-full py-10 text-center font-mono text-[#666]">No articles yet.</p>
            )}
          </div>
        </div>
      </div>

      {/* GSAP Sliding Drawer Overlay & Panel */}
      <div
        id="article-detail"
        className={`fixed inset-0 z-[2147483646] overflow-visible bg-transparent ${
          detailOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          ref={overlayRef}
          onClick={handleClose}
          className={`absolute inset-0 bg-black opacity-0 ${
            detailOpen ? "pointer-events-auto opacity-100" : "pointer-events-none"
          }`}
        />
        <aside
          className="fixed inset-y-0 right-0 z-[2147483647] flex flex-col overflow-y-auto overflow-x-hidden px-8 py-10 max-phone:px-5 max-phone:py-6 pointer-events-auto transition-transform ease-in-out max-md:!w-full shadow-2xl"
          style={drawerStyle}
          aria-label="Article Details"
        >
          <div ref={contentRef} className="flex flex-col opacity-0">
            <ArticleDetail
              teams={teamInfo}
              member={selectedMember}
              handleClose={handleClose}
              textColor={textColor}
            />
          </div>
        </aside>
      </div>
    </section>
  );
}

function ArticleDetail({
  member,
  handleClose,
  teams,
  textColor,
}: {
  member: TeamMember | null;
  handleClose: () => void;
  teams: TeamMember[];
  textColor: string;
}) {
  if (!member) return null;

  const memberIndex = teams.findIndex((item) => item.id === member.id);
  const featuredImageSource = getImageSource(member.featuredImage);

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
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="size-4">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <span className="text-xs font-mono tracking-widest text-[#777]">
          {memberIndex + 1} / {teams.length}
        </span>
      </div>

      {/* Meta tags */}
      <div className="mt-6 flex flex-wrap items-center gap-3">
        {member.category && (
          <span className="rounded-full border border-black/80 bg-stone px-3.5 py-1 text-[11px] font-mono uppercase text-[#222]">
            {member.category}
          </span>
        )}
        {(member.date || member.readTime) && (
          <span className="text-xs font-mono text-[#777]">
            {member.date} {member.date && member.readTime ? "•" : ""} {member.readTime}
          </span>
        )}
      </div>

      {/* Article Title */}
      <h2 className="text-[clamp(24px,2.8vw,38px)] uppercase tracking-tight text-[#111] font-sans leading-[1.15] mt-4 mb-6">
        {member.title}
      </h2>

      {/* Hero Banner Image */}
      {featuredImageSource && (
        <div className="w-full aspect-[16/9] rounded-[4px] overflow-hidden relative mb-8 bg-stone shadow-md">
          <img
            src={featuredImageSource}
            alt={member.title}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      )}

      {/* HTML Content */}
      <div
        className="prose prose-neutral max-w-none text-[15px] leading-[1.8] font-normal text-[#333] space-y-4 font-sans"
        dangerouslySetInnerHTML={{ __html: member.content }}
      />

      {/* Architectural Takeaways Box */}
      <div className="mt-8 rounded-[4px] bg-[#f7f7f5] p-6 border border-black/8">
        <h3 className="text-xs font-mono uppercase tracking-wider text-[#777] mb-3">
          Defenseply Material Takeaways
        </h3>
        <ul className="text-sm text-[#333] space-y-2 list-disc pl-5">
          <li>100% waterproof cellular composite structure with zero swelling risk.</li>
          <li>Calibrated high-density surface ready for CNC carving and PU coatings.</li>
          <li>Class 1 fire retardancy certified and zero toxic formaldehyde emissions.</li>
        </ul>
      </div>

      {/* Footer CTA */}
      <div className="mt-8 pt-6 border-t border-black/10 flex flex-wrap items-center justify-between gap-4 mb-8">
        <span className="text-xs font-mono text-[#666]">
          Interested in specifying this material for your project?
        </span>
        <a
          href="#contact"
          onClick={handleClose}
          className="inline-flex items-center gap-2 rounded-full bg-[#111] px-6 py-2.5 text-xs font-mono uppercase tracking-wider text-white transition-all hover:bg-[#333] shadow-xs active:scale-95"
        >
          Inquire Materials
          <svg className="size-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </a>
      </div>
    </div>
  );
}
