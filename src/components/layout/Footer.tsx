"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Footer() {
  const pathname = usePathname();

  if (pathname === "/contact-us" || pathname?.startsWith("/contact-us")) {
    return null;
  }

  return (
    <footer className="w-full bg-[#000000] text-white overflow-hidden border-t border-white/10 px-6 sm:px-10 lg:px-14 xl:px-16 pt-10 sm:pt-12 pb-6">
      <div className="w-full">
        
        {/* ── Top Watermark: Cleanly Aligned DEFENSEPLY Spanning Exactly Left to Right ── */}
        <div className="w-full select-none pointer-events-none overflow-hidden mb-6 sm:mb-8 lg:mb-9">
          <h2 className="sr-only">DefensePly</h2>
          <svg
            viewBox="0 0 1000 115"
            className="w-full h-auto block select-none pointer-events-none text-[#181a20]"
            preserveAspectRatio="xMidYMid meet"
            aria-hidden="true"
          >
            <text
              x="0"
              y="98"
              fill="currentColor"
              fontWeight="900"
              fontSize="138"
              textLength="1000"
              lengthAdjust="spacing"
              fontFamily="var(--font-sans), system-ui, -apple-system, sans-serif"
            >
              DEFENSEPLY
            </text>
          </svg>
        </div>

        {/* ── Middle: 5 Columns with Vertical Dividers ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-y-10 lg:gap-y-0 items-stretch">
          
          {/* 1. Brand, Overview & Corporate Headquarters (3 cols) */}
          <div className="lg:col-span-3 lg:border-r lg:border-white/10 lg:pr-7 xl:pr-8 flex flex-col items-start">
            <Link href="/" aria-label="DefensePly Home" className="block mb-5">
              <img
                src="/assets/defenseply-logo-dark.png"
                alt="DefensePly"
                className="w-[88px] sm:w-[96px] h-auto invert brightness-200"
              />
            </Link>

            <p className="text-[12.5px] sm:text-[13px] leading-[1.65] text-white/60 mb-5 max-w-[280px]">
              Advanced WPC and cellular PVC composite solutions engineered for sustainable modern architecture.
            </p>

            <h4 className="text-[13px] font-semibold text-white mb-1.5">
              Corporate Headquarters
            </h4>

            <p className="text-[12px] sm:text-[12.5px] leading-[1.6] text-white/60 mb-5">
              <strong className="font-semibold text-white">Defenseply International LLP</strong><br />
              Plot No. 06, KINFRA Industrial Park,<br />
              Moodal, Valanchery Road, Kuttippuram,<br />
              Kerala 679571, India.
            </p>

            <Link
              href="/contact-us"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-[3px] bg-[#135928] hover:bg-[#186a30] text-white text-[11px] sm:text-[11.5px] font-semibold tracking-[0.08em] uppercase transition-colors"
            >
              <span>CONTACT HEADQUARTERS</span>
              <span className="text-sm">→</span>
            </Link>
          </div>

          {/* 2. Corporate (2 cols) */}
          <div className="lg:col-span-2 lg:border-r lg:border-white/10 lg:px-6 xl:px-7 flex flex-col items-start">
            <div className="w-5 h-[2px] bg-[#d4af37] mb-2.5" />
            <h3 className="text-[14.5px] font-semibold text-white tracking-tight mb-5">
              Corporate
            </h3>
            <ul className="flex flex-col gap-3">
              {[
                { name: "Corporate Governance", href: "/about" },
                { name: "Board of Directors", href: "/about" },
                { name: "Sustainability & ESG", href: "/about" },
                { name: "Careers & Human Capital", href: "/contact-us" },
              ].map(({ name, href }) => (
                <li key={name}>
                  <Link
                    href={href}
                    className="text-[12.5px] sm:text-[13px] text-white/60 hover:text-white transition-colors duration-200 leading-snug"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Divisions & Media (2 cols) */}
          <div className="lg:col-span-2 lg:border-r lg:border-white/10 lg:px-6 xl:px-7 flex flex-col items-start">
            <div className="w-5 h-[2px] bg-[#d4af37] mb-2.5" />
            <h3 className="text-[14.5px] font-semibold text-white tracking-tight mb-5">
              Divisions &amp; Media
            </h3>
            <ul className="flex flex-col gap-3">
              {[
                { name: "Advanced Polymers SBU", href: "/products" },
                { name: "Building Materials SBU", href: "/products" },
                { name: "Global Supply Chain & Trade", href: "/contact-us" },
                { name: "Media Center & Press Releases", href: "/#news" },
              ].map(({ name, href }) => (
                <li key={name}>
                  <Link
                    href={href}
                    className="text-[12.5px] sm:text-[13px] text-white/60 hover:text-white transition-colors duration-200 leading-snug"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Infrastructure (2 cols) */}
          <div className="lg:col-span-2 lg:border-r lg:border-white/10 lg:px-6 xl:px-7 flex flex-col items-start">
            <div className="w-5 h-[2px] bg-[#d4af37] mb-2.5" />
            <h3 className="text-[14.5px] font-semibold text-white tracking-tight mb-5">
              Infrastructure
            </h3>
            <ul className="flex flex-col gap-3">
              {[
                { name: "KINFRA Industrial Park Plant", href: "/about" },
                { name: "Global Port Logistics Network", href: "/#infrastructure" },
                { name: "Center of Excellence R&D", href: "/#quality-testing" },
                { name: "Contact Corporate Headquarters", href: "/contact-us" },
              ].map(({ name, href }) => (
                <li key={name}>
                  <Link
                    href={href}
                    className="text-[12.5px] sm:text-[13px] text-white/60 hover:text-white transition-colors duration-200 leading-snug"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 5. Associated Companies & Social (3 cols) */}
          <div className="lg:col-span-3 lg:pl-7 xl:pl-8 flex flex-col items-start w-full">
            {/* Top Right Social Icons */}
            <div className="w-full flex items-center justify-end gap-2.5 mb-3.5">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.75a1.6 1.6 0 0 0-1.6 1.6 1.6 1.6 0 0 0 1.6 1.6 1.6 1.6 0 0 0 1.6-1.6 1.6 1.6 0 0 0-1.6-1.6Z" />
                </svg>
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="m10 15 5-3-5-3v6m11.5-6.6a2.9 2.9 0 0 0-2-2C17.7 6 12 6 12 6s-5.7 0-7.5.4a2.9 2.9 0 0 0-2 2A30.6 30.6 0 0 0 2 12c0 2.2.1 4.4.5 6.6a2.9 2.9 0 0 0 2 2c1.8.4 7.5.4 7.5.4s5.7 0 7.5-.4a2.9 2.9 0 0 0 2-2c.4-2.2.5-4.4.5-6.6 0-2.2-.1-4.4-.5-6.6Z" />
                </svg>
              </a>

              <a
                href="/"
                aria-label="Website"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white transition-colors"
              >
                <svg
                  className="w-3.5 h-3.5 fill-none stroke-current stroke-2 stroke-linecap-round stroke-linejoin-round"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                  <path d="M2 12h20" />
                </svg>
              </a>
            </div>

            <div className="w-full border-t border-white/10 mb-3.5" />

            <h4 className="text-[10px] sm:text-[10.5px] font-mono tracking-[0.12em] font-semibold text-white uppercase mb-2">
              ASSOCIATED COMPANIES &amp; GROUP ENTITIES
            </h4>

            <p className="text-[11px] sm:text-[11.5px] text-white/55 leading-relaxed mb-3.5">
              Backed by veteran industrial conglomerates and operating specialized manufacturing subsidiaries.
            </p>

            {/* Badges / Entity buttons matching reference */}
            <div className="w-full flex flex-col gap-2">
              <div className="grid grid-cols-2 gap-2">
                <div className="py-1.5 px-3 rounded-[3px] border border-white/15 bg-white/[0.02] text-center text-[11.5px] font-medium text-white/80 hover:text-white hover:border-white/30 transition-colors cursor-default">
                  AP Group
                </div>
                <div className="py-1.5 px-3 rounded-[3px] border border-white/15 bg-white/[0.02] text-center text-[11.5px] font-medium text-white/80 hover:text-white hover:border-white/30 transition-colors cursor-default">
                  NGH Group
                </div>
              </div>

              <div className="w-full py-1.5 px-3 rounded-[3px] border border-white/15 bg-white/[0.02] text-center text-[11.5px] font-medium text-white/80 hover:text-white hover:border-white/30 transition-colors cursor-default">
                Defenseply Composites
              </div>

              <div className="w-full py-1.5 px-3 rounded-[3px] border border-white/15 bg-white/[0.02] text-center text-[11.5px] font-medium text-white/80 hover:text-white hover:border-white/30 transition-colors cursor-default">
                Defenseply Global Trade
              </div>

              <div className="w-full py-1.5 px-3 rounded-[3px] border border-dashed border-white/20 bg-transparent text-center text-[11px] font-mono text-white/45 cursor-default">
                + Future Ventures
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom Bar: Divider Line, Copyright Left, Terms & Privacy Right ── */}
        <div className="w-full border-t border-white/10 mt-10 sm:mt-12 pt-5 sm:pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[12px] text-white/50">
            © {new Date().getFullYear()} DefensePly. All rights reserved.
          </p>

          <div className="flex items-center text-[12px] text-white/60">
            <Link
              href="/terms"
              className="hover:text-white transition-colors duration-200"
            >
              Terms &amp; Conditions
            </Link>
            <span className="mx-3 text-white/25">|</span>
            <Link
              href="/privacy"
              className="hover:text-white transition-colors duration-200"
            >
              Privacy Policy
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
