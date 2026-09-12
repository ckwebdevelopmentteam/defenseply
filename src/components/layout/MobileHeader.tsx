"use client";
import { useEffect, useState } from "react";
import { ChevronDown, Globe } from "lucide-react";
import navigation from "@/data/navigation.json";
import { menuPanels, type MenuPanelId } from "./menus";
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
export function MobileHeader({
  scrolled,
  onCountry,
}: {
  scrolled: boolean;
  onCountry: () => void;
}) {
  const [open, setOpen] = useState(false);
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
  }, [open]);
  return (
    <div
      id="core-menu-mobile"
      className={`core-menu-mobile ${open ? "replica-mobile-open" : ""}`}
    >
      <nav
        className={`mobile-navbar theme-regular ${scrolled ? "is-scrolled" : ""} ${open ? "is-open" : ""}`}
        aria-label="Mobile navigation"
      >
        <div className="logo-wrapper">
          <button
            className={`burger-btn ${open ? "is-open" : ""}`}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => {
              setOpen(!open);
              setCategory(null);
              setExpanded(null);
            }}
          >
            <span />
          </button>
          <a href="/usa/" className="brand-logo" aria-label="Cosentino home" />
        </div>
        <div className="menu-actions">
          <button
            className="menu-lang"
            onClick={onCountry}
            aria-label="Choose country or region"
          >
            <Globe size={24} strokeWidth={1} />
            USA
            <ChevronDown size={24} strokeWidth={1} />
          </button>
        </div>
      </nav>
      {open && (
        <div className="menu-container">
          <button
            className="menu-overlay"
            aria-label="Close menu overlay"
            onClick={() => setOpen(false)}
            style={{ opacity: 1, pointerEvents: "auto" }}
          />
          {!category ? (
            <div
              className="mobile-menu"
              style={{ opacity: 1, pointerEvents: "auto" }}
            >
              <ul className="links-wrapper">
                {links.map((name) => (
                  <li key={name} className="menu-item">
                    {name in navigation ? (
                      <button onClick={() => setCategory(name as MenuName)}>
                        {name}
                        <ChevronDown size={24} strokeWidth={1} />
                      </button>
                    ) : (
                      <a href="#">{name}</a>
                    )}
                  </li>
                ))}
              </ul>
              <div className="action-wrapper">
                <a href="#" className="action-btn is-primary">
                  Where To Buy
                </a>
                <a href="#" className="action-btn is-secondary">
                  Professional Area
                </a>
              </div>
            </div>
          ) : (
            <div
              className="menu-submenu first-submenu"
              style={{ opacity: 1, pointerEvents: "auto" }}
            >
              <button
                className="btn-back"
                aria-label="Back to main menu"
                onClick={() => {
                  setCategory(null);
                  setExpanded(null);
                }}
              >
                <span>
                  <ChevronDown size={24} strokeWidth={1} />
                </span>
              </button>
              <div className="first-submenu-items">
                {navigation[category].map((card) => {
                  const id = card.submenu as MenuPanelId;
                  const Panel = id ? menuPanels[id] : null;
                  return (
                    <div className="menu-card" key={card.title}>
                      <div className="card-content">
                        <button
                          className={`card-wrapper ${expanded === id ? "is-open" : ""}`}
                          aria-expanded={!!id && expanded === id}
                          onClick={() => {
                            if (id) setExpanded(expanded === id ? null : id);
                          }}
                        >
                          <div className="header-card">
                            <div className="img-wrapper">
                              {card.image ? (
                                <img
                                  className="main-img"
                                  src={card.image}
                                  alt=""
                                />
                              ) : (
                                <div className="mobile-brand-placeholder" />
                              )}
                              {card.logo && (
                                <img
                                  className="mobile-brand-symbol"
                                  src={card.logo}
                                  alt=""
                                />
                              )}
                            </div>
                          </div>
                          <div className="footer-card">
                            <div className="subtitle-wrapper">
                              <div className="text-container">
                                <p className="main-text">{card.title}</p>
                                <p className="hover-text" aria-hidden="true">
                                  {card.title}
                                </p>
                              </div>
                              <div className="icon">
                                <ChevronDown size={24} strokeWidth={1} />
                              </div>
                            </div>
                          </div>
                        </button>
                      </div>
                      {expanded === id && Panel && (
                        <div className="second-submenu replica-mobile-details">
                          <Panel />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
