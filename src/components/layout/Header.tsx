"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Globe2, ChevronDown } from "lucide-react";
import navigation from "@/data/navigation.json";
import { menuPanels, type MenuPanelId } from "./menus";
import { MobileHeader } from "./MobileHeader";
import { CountryDialog } from "./CountryDialog";
const links = [
  "Colors",
  "Our Brands",
  "Spaces",
  "Inspiration",
  "Showrooms",
  "Professionals",
  "Corporate",
];
type MenuName = keyof typeof navigation;
export function Header() {
  const [scrolled, setScrolled] = useState(false),
    [open, setOpen] = useState<MenuName | null>(null),
    [country, setCountry] = useState(false),
    [submenu, setSubmenu] = useState<MenuPanelId | null>(null);
  const ActivePanel = submenu ? menuPanels[submenu] : null;
  const reduced = useReducedMotion();
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 40);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  useEffect(() => {
    if (!open) return;
    const key = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(null);
      }
    };
    document.addEventListener("keydown", key);
    return () => document.removeEventListener("keydown", key);
  }, [open]);
  const toggle = (name: MenuName) => {
    setOpen(open === name ? null : name);
    setSubmenu(null);
  };
  const logo = (
    <a href="/usa/" aria-label="Cosentino home" className="brand-logo" />
  );
  return (
    <header id="core-main-menu" className="core-main-menu">
      <div
        id="core-menu-desktop"
        className={`core-menu-desktop ${open ? "is-open" : ""}`}
        onClick={(e) => {
          if (e.target === e.currentTarget) setOpen(null);
        }}
      >
        <div
          className={`main-menu-container theme-regular ${scrolled ? "is-scrolled" : "is-at-top"}`}
          style={{ padding: scrolled || open ? "12px 32px" : "32px" }}
        >
          <div className="main-menu-wrapper">
            <div className="row-side row-left">
              <div className="menu-logo">{logo}</div>
              <button
                className="menu-lang"
                onClick={() => setCountry(true)}
                aria-label="Choose country or region"
              >
                <Globe2 size={24} strokeWidth={1} />
                <p>USA</p>
                <ChevronDown size={20} strokeWidth={1} />
              </button>
            </div>
            <nav className="row-center" aria-label="Main navigation">
              <ul className="menu-main">
                {links.map((name) => (
                  <li className="menu-item" key={name}>
                    {name in navigation ? (
                      <button
                        aria-expanded={open === name}
                        aria-controls="desktop-submenu"
                        onClick={() => toggle(name as MenuName)}
                      >
                        {name}
                        <ChevronDown
                          size={17}
                          strokeWidth={1}
                          style={{
                            transform:
                              open === name ? "rotate(180deg)" : undefined,
                          }}
                        />
                      </button>
                    ) : (
                      <a href="#">{name}</a>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
            <div className="row-side row-right">
              <a className="menu-btn is-primary" href="#">
                Where To Buy
              </a>
              <a className="menu-btn is-secondary" href="#" rel="noreferrer">
                Professional Area
              </a>
            </div>
          </div>
        </div>
        <AnimatePresence>
          {open && (
            <motion.div
              id="desktop-submenu"
              className="menu-submenu replica-submenu"
              key={open}
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: reduced ? 0 : 0.22 }}
            >
              <div className="first-wrapper" style={{ transform: "none" }}>
                <div className="first-submenu">
                  {navigation[open].map((card) => (
                    <div className="menu-card" key={card.title}>
                      <a
                        className={`card-wrapper ${submenu === card.submenu ? "is-active" : ""}`}
                        href={card.href}
                        aria-expanded={
                          card.submenu ? submenu === card.submenu : undefined
                        }
                        aria-controls={
                          card.submenu ? "desktop-menu-panel" : undefined
                        }
                        onClick={(event) => {
                          if (card.submenu) {
                            event.preventDefault();
                            setSubmenu(
                              submenu === card.submenu
                                ? null
                                : (card.submenu as MenuPanelId),
                            );
                          }
                        }}
                      >
                        <div className="header-card">
                          <div className="img-wrapper scale-hover">
                            {card.image && (
                              <img
                                className="main-img"
                                src={card.image}
                                alt=""
                              />
                            )}
                            {card.logo && (
                              <img
                                className="menu-brand-symbol"
                                src={card.logo}
                                alt=""
                              />
                            )}
                          </div>
                        </div>
                        <div className="footer-card">
                          <div className="main-text">
                            <p>{card.title}</p>
                            <ChevronDown size={15} />
                          </div>
                          <div className="hover-text" aria-hidden="true">
                            <p>{card.title}</p>
                            <ChevronDown size={15} />
                          </div>
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
              {ActivePanel && (
                <div
                  className="second-wrapper"
                  id="desktop-menu-panel"
                  style={{ transform: "none" }}
                >
                  <div className="second-submenu">
                    <ActivePanel key={submenu} />
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <MobileHeader scrolled={scrolled} onCountry={() => setCountry(true)} />
      {country && <CountryDialog open onClose={() => setCountry(false)} />}
    </header>
  );
}
