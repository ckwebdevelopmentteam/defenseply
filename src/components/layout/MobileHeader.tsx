"use client";
import { useEffect, useState } from "react";
import { ChevronDown, Globe, Menu, X } from "lucide-react";
import {
  NavigationPanel,
  hasMenuPanel,
  type MenuPanelId,
} from "./NavigationPanel";
import {
  BrandLogo,
  NavigationActions,
  navigation,
  navigationLinks,
  type MenuName,
} from "./NavigationElements";
import { useNavigationState } from "./NavigationState";
import { cn } from "@/lib/cn";
export function MobileHeader({ onCountry }: { onCountry: () => void }) {
  const {
    scrolled,
    mobileOpen: open,
    setMobileOpen: setOpen,
  } = useNavigationState();
  const [category, setCategory] = useState<MenuName | null>(null);
  const [expanded, setExpanded] = useState<MenuPanelId | null>(null);
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", close);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", close);
    };
  }, [open, setOpen]);
  return (
    <div className="pointer-events-none fixed inset-0 z-[2147483640] flex flex-col desktop:hidden">
      <nav
        className={cn(
          "pointer-events-auto flex items-center justify-between px-4 transition-colors",
          scrolled || open ? "h-12 py-3" : "h-[72px] py-6",
          open
            ? "bg-ink text-white"
            : scrolled
              ? "bg-white text-ink shadow-sm"
              : "bg-[linear-gradient(180deg,#0006,transparent)] text-white",
        )}
        aria-label="Mobile navigation"
      >
        <div className="flex items-center gap-3">
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => {
              setOpen(!open);
              setCategory(null);
              setExpanded(null);
            }}
          >
            {open ? (
              <X size={20} strokeWidth={1} />
            ) : (
              <Menu size={20} strokeWidth={1} />
            )}
          </button>
          <BrandLogo className="h-4" />
        </div>
        <button
          className="flex items-center gap-1.5 text-base"
          onClick={onCountry}
          aria-label="Choose country or region"
        >
          <Globe size={24} strokeWidth={1} />
          USA
          <ChevronDown size={24} strokeWidth={1} />
        </button>
      </nav>
      {open && (
        <div className="relative min-h-0 w-full flex-1">
          <button
            className="pointer-events-auto absolute inset-0 bg-black/50"
            aria-label="Close menu overlay"
            onClick={() => setOpen(false)}
          />
          {!category ? (
            <div className="pointer-events-auto absolute inset-y-0 left-0 flex w-[80%] flex-col items-start justify-between gap-8 overflow-y-auto bg-ink px-6 pt-20 pb-8 text-white">
              <ul className="w-full">
                {navigationLinks.map((name) => (
                  <li
                    key={name}
                    className="flex h-12 w-full items-center border-b border-[#979793]/30 py-2 text-[22px] leading-6 font-light tracking-[.5px]"
                  >
                    {name in navigation ? (
                      <button
                        className="flex w-full items-center justify-between"
                        onClick={() => setCategory(name as MenuName)}
                      >
                        {name}
                        <ChevronDown
                          className="-rotate-90"
                          size={24}
                          strokeWidth={1}
                        />
                      </button>
                    ) : (
                      <a href="#">{name}</a>
                    )}
                  </li>
                ))}
              </ul>
              <NavigationActions mobile />
            </div>
          ) : (
            <div className="pointer-events-auto absolute inset-0 flex flex-col bg-ink text-white">
              <button
                className="flex shrink-0 items-center justify-center border-b border-[#1d1d1c] p-4"
                aria-label="Back to main menu"
                onClick={() => {
                  setCategory(null);
                  setExpanded(null);
                }}
              >
                <span className="flex size-[54px] items-center justify-center rounded-full bg-[#30302f]">
                  <ChevronDown
                    size={36}
                    className="rotate-90"
                    strokeWidth={1}
                  />
                </span>
              </button>
              <div className="flex flex-1 flex-col items-center gap-2.5 overflow-y-auto py-8 [scrollbar-width:none]">
                {navigation[category].map((card) => (
                  <div
                    key={card.title}
                    className="w-full max-w-[360px] border-b border-[#1d1d1c] px-4 pb-4"
                  >
                    <button
                      className="w-full text-left"
                      aria-expanded={
                        !!card.submenu && expanded === card.submenu
                      }
                      onClick={() => {
                        if (hasMenuPanel(card.submenu))
                          setExpanded(
                            expanded === card.submenu ? null : card.submenu,
                          );
                      }}
                    >
                      <div className="relative aspect-[9/5] overflow-hidden">
                        {card.image && (
                          <img
                            className="size-full object-cover"
                            src={card.image}
                            alt=""
                          />
                        )}
                        {card.logo && (
                          <img
                            className="absolute top-1/2 left-1/2 h-10 w-[142px] -translate-1/2 object-contain"
                            src={card.logo}
                            alt=""
                          />
                        )}
                      </div>
                      <div className="flex items-center justify-between py-4 text-[22px] leading-6 font-light">
                        <span>{card.title}</span>
                        <ChevronDown
                          size={24}
                          strokeWidth={1}
                          className={cn(
                            expanded === card.submenu && "rotate-180",
                          )}
                        />
                      </div>
                    </button>
                    {expanded === card.submenu && (
                      <NavigationPanel id={expanded} mobile />
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
