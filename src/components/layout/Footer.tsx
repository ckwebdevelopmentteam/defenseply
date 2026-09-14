"use client";
import { useState } from "react";
import groups from "@/data/footer.json";
import { cn } from "@/lib/cn";
const columns = [["1"], ["2", "5"], ["3", "4"], ["7", "8"]];
const socials = [
  { name: "Facebook", icon: "facebook" },
  { name: "Instagram", icon: "instagram" },
  { name: "Pinterest", icon: "pinterest" },
  { name: "Linkedin", icon: "linkedin" },
  { name: "X", icon: "twitter" },
  { name: "Youtube", icon: "youtube" },
];
const linkClass = "text-white/70 transition-colors hover:text-white";
export function Footer() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  return (
    <footer
      id="site-footer"
      className="bg-[#232323] pt-8 font-footer text-base leading-6 text-white"
    >
      <div className="mx-auto w-full px-[15px] min-[576px]:max-w-[540px] min-[768px]:max-w-[720px] min-[992px]:max-w-[960px] min-[1200px]:max-w-[1140px]">
        <div className="h-6 text-center min-[768px]:text-left">
          <img
            className="inline align-baseline"
            src="/assets/logo-cosentino-white.svg"
            alt="Cosentino"
            loading="lazy"
            width={143}
            height={18}
          />
        </div>
        <div className="-mx-[15px] mt-12 grid grid-cols-1 min-[576px]:grid-cols-2 min-[992px]:grid-cols-4">
          {columns.map((ids, column) => (
            <div key={ids[0]} className="px-[15px]">
              {ids.map((id) => {
                const group = groups.find((g) => g.id === id)!;
                return (
                  <div key={id}>
                    <button
                      className={cn(
                        "mb-4 block w-full text-left font-bold max-[576px]:mb-0 max-[576px]:min-h-12",
                        id === "4" && "min-[576px]:mt-8",
                      )}
                      id={`footer-title-${id}`}
                      aria-expanded={!!expanded[id]}
                      aria-controls={`footer-links-${id}`}
                      onClick={() =>
                        setExpanded((current) => ({
                          ...current,
                          [id]: !current[id],
                        }))
                      }
                    >
                      {group.title}
                      <span className="float-right min-[576px]:hidden">
                        {expanded[id] ? "−" : "+"}
                      </span>
                    </button>
                    <ul
                      className={cn(
                        "overflow-hidden",
                        !expanded[id] && "max-[576px]:hidden",
                      )}
                      id={`footer-links-${id}`}
                      aria-labelledby={`footer-title-${id}`}
                    >
                      {group.links.map((label) => (
                        <li key={label} className="mb-4">
                          <a href="#" className={linkClass}>
                            {label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
              {column === columns.length - 1 && (
                <>
                  <div className="mt-8 mb-6 font-bold max-[576px]:mt-0 max-[576px]:flex max-[576px]:h-12 max-[576px]:items-center max-[576px]:mb-0">
                    Follow us:
                  </div>
                  <div className="mb-4 h-[38px] overflow-hidden">
                    {socials.map((social) => (
                      <a
                        href="#"
                        key={social.name}
                        className="mr-[13px] mb-[13px] inline-block size-[25px] align-middle"
                      >
                        <img
                          className="size-full"
                          src={`/assets/${social.icon}-icon.svg`}
                          alt={social.name}
                          loading="lazy"
                          width={32}
                          height={32}
                        />
                      </a>
                    ))}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap min-[576px]:mt-4">
          <p className="mb-4 w-full">
            Cosentino Global, S.L.U. All rights reserved
          </p>
          <p className="mb-4 w-full min-[768px]:w-3/4">
            {["Legal Notice", "Privacy Policy", "Cookie Policy"].map(
              (label, i) => (
                <span key={label}>
                  {i > 0 && " | "}
                  <a className={linkClass} href="#">
                    {label}
                  </a>
                </span>
              ),
            )}
          </p>
          <p className="mb-4 w-full min-[768px]:w-1/4">
            <a className={linkClass} href="#">
              Sitemap
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
