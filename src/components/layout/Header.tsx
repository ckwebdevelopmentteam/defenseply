"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import navigation from "@/data/navigation.json";
const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Product", href: "/#product" },
  { name: "Gallery", href: "/#gallery" },
  { name: "Contact Us", href: "/contact-us" },
];
type MenuName = keyof typeof navigation;
export function Header({ solid }: { solid?: boolean } = {}) {
  const [scrolled, setScrolled] = useState(false),
    [open, setOpen] = useState<MenuName | null>(null),
    [mobile, setMobile] = useState(false);
  const reduced = useReducedMotion();
  const isSolid = solid || scrolled;
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
    <a href="/" aria-label="Defenseply home" className="brand-logo">
      <img
        src="/assets/defenseply-logo.png"
        alt="Defenseply"
        className="brand-logo-img logo-light"
      />
      <img
        src="/assets/defenseply-logo-dark.png"
        alt="Defenseply"
        className="brand-logo-img logo-dark"
      />
    </a>
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
          className={`main-menu-container theme-regular ${isSolid ? "is-scrolled" : "is-at-top"}`}
          style={{ padding: isSolid || open ? "10px 32px" : "18px 32px" }}
        >
          <div className="main-menu-wrapper">
            <div className="row-side row-left">
              <div className="menu-logo">{logo}</div>
            </div>
            <nav className="row-center" aria-label="Main navigation">
              <ul className="menu-main">
                {navItems.map((item) => (
                  <li className="menu-item" key={item.name}>
                    {item.name in navigation ? (
                      <button
                        aria-expanded={open === item.name}
                        aria-controls="desktop-submenu"
                        onClick={() => toggle(item.name as MenuName)}
                      >
                        {item.name}
                        <ChevronDown
                          size={17}
                          strokeWidth={1}
                          style={{
                            transform:
                              open === item.name ? "rotate(180deg)" : undefined,
                          }}
                        />
                      </button>
                    ) : (
                      <a href={item.href}>{item.name}</a>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
            <div className="row-side row-right">
              <a
                className="menu-btn is-primary"
                href="/contact-us"
              >
                Where To Buy
              </a>
              <a
                className="menu-btn is-secondary"
                href="/contact-us"
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
        className={`replica-mobile-header ${isSolid || mobile ? "solid" : ""}`}
      >
        <button
          onClick={() => setMobile(!mobile)}
          aria-label={mobile ? "Close menu" : "Open menu"}
          aria-expanded={mobile}
        >
          {mobile ? <X /> : <Menu />}
        </button>
        {logo}
        <span style={{ width: 24 }} aria-hidden="true" />
      </div>
      {mobile && (
        <nav className="replica-mobile-nav" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <div key={item.name}>
              {item.name in navigation ? (
                <>
                  <button
                    onClick={() => toggle(item.name as MenuName)}
                    aria-expanded={open === item.name}
                  >
                    {item.name}
                    <ChevronDown size={20} />
                  </button>
                  {open === item.name && (
                    <div className="mobile-subitems">
                      {navigation[open].map((c) => (
                        <a
                          href={c.href}
                          key={c.title}
                          onClick={() => setMobile(false)}
                        >
                          {c.title}
                        </a>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <a href={item.href} onClick={() => setMobile(false)}>
                  {item.name}
                </a>
              )}
            </div>
          ))}
          <a
            href="/contact-us"
            onClick={() => setMobile(false)}
          >
            Where To Buy
          </a>
          <a
            href="/contact-us"
            onClick={() => setMobile(false)}
          >
            Professional Area
          </a>
        </nav>
      )}
    </header>
  );
}
