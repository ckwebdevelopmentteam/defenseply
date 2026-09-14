"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Globe2, ChevronDown } from "lucide-react";
import {
  NavigationPanel,
  hasMenuPanel,
  type MenuPanelId,
} from "./NavigationPanel";
import { MobileHeader } from "./MobileHeader";
import { CountryDialog } from "./CountryDialog";
import {
  BrandLogo,
  NavigationActions,
  navigation,
  navigationLinks,
  type MenuName,
} from "./NavigationElements";
import { useNavigationState } from "./NavigationState";
import { cn } from "@/lib/cn";
export function Header() {
  const { scrolled } = useNavigationState();
  const [open, setOpen] = useState<MenuName | null>(null);
  const [country, setCountry] = useState(false);
  const [submenu, setSubmenu] = useState<MenuPanelId | null>(null);
  const reduced = useReducedMotion();
  useEffect(() => {
    if (!open) return;
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
    };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [open]);
  return (
    <header id="core-main-menu">
      <div
        className={cn(
          "pointer-events-none fixed inset-0 z-[2147483640] flex flex-col items-center antialiased max-desktop:hidden",
          open && "pointer-events-auto bg-black/50",
        )}
        onClick={(e) => {
          if (e.target === e.currentTarget) setOpen(null);
        }}
      >
        <div
          className={cn(
            "group/header pointer-events-auto z-10 flex w-full justify-center px-8 transition-colors",
            scrolled || open ? "py-3" : "py-8",
            open
              ? "bg-ink text-white"
              : scrolled
                ? "bg-white text-ink shadow-sm"
                : "bg-[linear-gradient(180deg,#0006,transparent)] text-white hover:bg-white hover:bg-none hover:text-ink",
          )}
        >
          <div className="flex w-full max-w-[1650px] items-center justify-between gap-5 max-[1200px]:gap-2.5">
            <div className="flex items-center gap-4 max-[1400px]:gap-2.5">
              <BrandLogo />
              <button
                className="flex items-center gap-1.5 border-l border-current/30 pl-4 font-light max-[1400px]:gap-0 max-[1400px]:pl-2.5"
                onClick={() => setCountry(true)}
                aria-label="Choose country or region"
              >
                <Globe2 size={24} strokeWidth={1} />
                <span className="mt-0.5 text-xs font-normal">USA</span>
                <ChevronDown size={20} strokeWidth={1} />
              </button>
            </div>
            <nav aria-label="Main navigation">
              <ul className="flex items-center gap-8 max-[1400px]:gap-[18px] max-[1200px]:gap-2.5">
                {navigationLinks.map((name) => (
                  <li
                    key={name}
                    className="whitespace-nowrap text-[13px] max-[1200px]:text-xs"
                  >
                    {name in navigation ? (
                      <button
                        className="flex items-center gap-1"
                        aria-expanded={open === name}
                        aria-controls="desktop-submenu"
                        onClick={() => {
                          setOpen(open === name ? null : (name as MenuName));
                          setSubmenu(null);
                        }}
                      >
                        {name}
                        <ChevronDown
                          className={cn(
                            "h-6 w-[23px]",
                            open === name && "rotate-180",
                          )}
                          strokeWidth={1}
                        />
                      </button>
                    ) : (
                      <a href="#">{name}</a>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
            <NavigationActions />
          </div>
        </div>
        <AnimatePresence>
          {open && (
            <motion.div
              id="desktop-submenu"
              className="w-full overflow-y-auto"
              key={open}
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: reduced ? 0 : 0.22 }}
            >
              <div className="flex h-[calc(50vh-25px)] justify-center bg-ink px-30 max-[1400px]:px-20 max-[1150px]:px-10">
                <div
                  className={cn(
                    "flex size-full max-w-[1640px] justify-around gap-8 max-[1344px]:gap-0",
                    navigation[open].length >= 5 && "gap-0",
                  )}
                >
                  {navigation[open].map((card) => (
                    <div
                      key={card.title}
                      className="flex flex-1 items-center justify-center overflow-hidden px-4 first:pl-0 last:pr-0 max-[1344px]:px-1.5"
                    >
                      <a
                        href="#"
                        className="group flex h-[210px] w-full max-w-[360px] flex-col gap-2 text-white"
                        aria-expanded={
                          card.submenu ? submenu === card.submenu : undefined
                        }
                        aria-controls={
                          card.submenu ? "desktop-menu-panel" : undefined
                        }
                        onClick={(e) => {
                          if (hasMenuPanel(card.submenu)) {
                            e.preventDefault();
                            setSubmenu(
                              submenu === card.submenu ? null : card.submenu,
                            );
                          }
                        }}
                      >
                        <div className="relative h-[180px] overflow-hidden">
                          {card.image && (
                            <img
                              className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                              src={card.image}
                              alt=""
                            />
                          )}
                          {card.logo && (
                            <img
                              className="absolute top-1/2 left-1/2 h-[35px] w-[115px] -translate-1/2 object-contain"
                              src={card.logo}
                              alt=""
                            />
                          )}
                        </div>
                        <div className="flex items-center justify-between text-[15px]">
                          <span>{card.title}</span>
                          <ChevronDown
                            size={15}
                            className={cn(
                              submenu === card.submenu && "rotate-180",
                            )}
                          />
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
              {submenu && (
                <div
                  id="desktop-menu-panel"
                  className="flex min-h-[calc(50vh-25px)] items-center justify-center bg-[#1d1d1c] px-30 py-8 max-[1400px]:px-20 max-[1150px]:px-10"
                >
                  <div className="w-full max-w-[1640px]">
                    <NavigationPanel key={submenu} id={submenu} />
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <MobileHeader onCountry={() => setCountry(true)} />
      {country && <CountryDialog open onClose={() => setCountry(false)} />}
    </header>
  );
}
