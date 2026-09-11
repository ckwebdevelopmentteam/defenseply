"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Globe2, ChevronDown, Menu, X } from "lucide-react";
import navigation from "@/data/navigation.json";
import { Dialog } from "@/components/ui/Dialog";
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
    [mobile, setMobile] = useState(false),
    [country, setCountry] = useState(false);
  const reduced = useReducedMotion();
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 40);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  useEffect(() => {
    if (!open && !mobile) return;
    const key = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(null);
        setMobile(false);
      }
    };
    document.addEventListener("keydown", key);
    return () => document.removeEventListener("keydown", key);
  }, [open, mobile]);
  const toggle = (name: MenuName) => setOpen(open === name ? null : name);
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
                      <a
                        href={`https://www.cosentino.com/usa/${name === "Colors" ? "colors/" : "professional/cosentino-city/"}`}
                      >
                        {name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
            <div className="row-side row-right">
              <a
                className="menu-btn is-primary"
                href="https://www.cosentino.com/usa/where-to-buy/"
              >
                Where To Buy
              </a>
              <a
                className="menu-btn is-secondary"
                href="https://we.cosentino.com/home"
                target="_blank"
                rel="noreferrer"
              >
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
                      <a className="card-wrapper" href={card.href}>
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
                          <div className="hover-text">
                            <p>{card.title}</p>
                            <ChevronDown size={15} />
                          </div>
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div
        className={`replica-mobile-header ${scrolled || mobile ? "solid" : ""}`}
      >
        <button
          onClick={() => setMobile(!mobile)}
          aria-label={mobile ? "Close menu" : "Open menu"}
          aria-expanded={mobile}
        >
          {mobile ? <X /> : <Menu />}
        </button>
        {logo}
        <button
          onClick={() => setCountry(true)}
          aria-label="Choose country or region"
        >
          <Globe2 size={20} /> USA
        </button>
      </div>
      {mobile && (
        <nav className="replica-mobile-nav" aria-label="Mobile navigation">
          {links.map((name) => (
            <div key={name}>
              {name in navigation ? (
                <>
                  <button
                    onClick={() => toggle(name as MenuName)}
                    aria-expanded={open === name}
                  >
                    {name}
                    <ChevronDown size={20} />
                  </button>
                  {open === name && (
                    <div className="mobile-subitems">
                      {navigation[open].map((c) => (
                        <a href={c.href} key={c.title}>
                          {c.title}
                        </a>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <a
                  href={`https://www.cosentino.com/usa/${name === "Colors" ? "colors/" : "professional/cosentino-city/"}`}
                >
                  {name}
                </a>
              )}
            </div>
          ))}
          <a href="https://www.cosentino.com/usa/where-to-buy/">Where To Buy</a>
          <a href="https://we.cosentino.com/home">Professional Area</a>
        </nav>
      )}
      <CountryDialog open={country} onClose={() => setCountry(false)} />
    </header>
  );
}
function CountryDialog({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [continent, setContinent] = useState(""),
    [region, setRegion] = useState("");
  return (
    <Dialog open={open} onClose={onClose} label="Choose your country or region">
      <div className="country-dialog">
        <div className="flex items-center justify-between gap-8">
          <h2>Choose Your Country or Region</h2>
          <button onClick={onClose} aria-label="Close country selector">
            close <X size={20} />
          </button>
        </div>
        <label className="sr-only" htmlFor="continent">
          Continent
        </label>
        <select
          id="continent"
          value={continent}
          onChange={(e) => {
            setContinent(e.target.value);
            setRegion("");
          }}
        >
          <option value="">Continent</option>
          {[
            "North America",
            "South America",
            "Europe",
            "Asia",
            "Oceania",
            "Africa",
          ].map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
        <label className="sr-only" htmlFor="region">
          Country
        </label>
        <select
          id="region"
          disabled={!continent}
          value={region}
          onChange={(e) => setRegion(e.target.value)}
        >
          <option value="">Country</option>
          {(continent === "North America"
            ? ["United States", "Canada", "Mexico"]
            : continent === "Europe"
              ? ["Spain", "United Kingdom", "France", "Germany", "Italy"]
              : continent === "Asia"
                ? ["India", "Singapore", "Japan", "United Arab Emirates"]
                : continent === "Oceania"
                  ? ["Australia", "New Zealand"]
                  : continent === "Africa"
                    ? ["South Africa"]
                    : ["Brazil", "Argentina", "Chile"]
          ).map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
        <label className="sr-only" htmlFor="language">
          Language
        </label>
        <select id="language" disabled={!region}>
          <option>English</option>
        </select>
        <button
          className="btn btn-negro-azul"
          disabled={!region}
          onClick={onClose}
        >
          Continue <span className="arrow-link" />
        </button>
        <label className="remember">
          <input type="checkbox" /> Remember my selection
        </label>
      </div>
    </Dialog>
  );
}
