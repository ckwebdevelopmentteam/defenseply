import Link from "next/link";
import { footerGroups, socialLinks } from "@/data/site";
import { FooterNewsletter } from "./FooterNewsletter";
export function Footer() {
  return (
    <footer
      id="site-footer"
      className="bg-paper px-6 pt-[76px] pb-7 text-[#1b1b1b] max-[760px]:px-4 max-[760px]:pt-8 max-[760px]:pb-4"
    >
      <div className="mx-auto w-full max-w-[1120px]">
        <FooterNewsletter />

        <div className="grid grid-cols-[1.55fr_repeat(3,1fr)] gap-[52px] pt-[78px] pb-[72px] max-[760px]:grid-cols-2 max-[760px]:gap-x-5 max-[760px]:gap-y-[30px] max-[760px]:pt-[42px] max-[760px]:pb-[34px]">
          <div className="max-[760px]:col-span-full">
            <Link href="/" aria-label="DefensePly home">
              <img
                className="h-auto w-[116px] max-[760px]:w-24"
                src="/assets/defenseply-logo-dark.png"
                alt="DefensePly"
              />
            </Link>
            <p className="mt-6 mb-[30px] max-w-[220px] text-[13px] leading-[1.55] text-footer-muted max-[760px]:mt-3.5 max-[760px]:mb-5 max-[760px]:max-w-[200px] max-[760px]:text-[11px]">
              Reliable WPC and PVC solutions for spaces built with purpose.
            </p>
            <div className="flex gap-[9px]" aria-label="Social media">
              {socialLinks.map((item) => (
                <Link
                  key={item.name}
                  href="/#contact"
                  aria-label={item.name}
                  className="grid size-[25px] place-items-center rounded-full border border-[#c9c8c1] text-[#1b1b1b] hover:border-footer-accent hover:bg-footer-accent"
                >
                  <img
                    className="size-[13px] object-contain"
                    src={`/assets/${item.icon}-icon.svg`}
                    alt=""
                  />
                </Link>
              ))}
            </div>
          </div>

          {footerGroups.map((group) => (
            <nav
              className="flex flex-col items-start gap-[19px] max-[760px]:gap-[13px] max-[420px]:gap-2.5"
              aria-label={group.title}
              key={group.title}
            >
              <h3 className="mb-[5px] text-[10px] font-medium tracking-[.14em] uppercase text-[#9a8220] max-[760px]:text-[9px]">
                {group.title}
              </h3>
              {group.links.map(({ name: label, href }) => (
                <Link
                  className="text-xs text-footer-muted hover:text-[#1b1b1b] max-[760px]:text-[10px]"
                  href={href}
                  key={label}
                >
                  {label}
                </Link>
              ))}
            </nav>
          ))}
        </div>

        <div className="flex min-h-[66px] items-center justify-center border-t border-[#deddd8] text-center text-xs text-footer-muted max-[760px]:min-h-[50px] max-[760px]:text-[10px]">
          <p>© {new Date().getFullYear()} DefensePly. All rights reserved.</p>
          <Link className="hidden" href="/#home">
            Back to top
          </Link>
        </div>
      </div>
    </footer>
  );
}
