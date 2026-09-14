"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
const scenes = [
  {
    title: "Kitchens",
    image: "cocinasEclos.jpg",
    brand: "Ēclos",
    color: "Legnd",
    href: "kitchens/",
  },
  {
    title: "Bathrooms",
    image: "BATHROOMS.jpg",
    brand: "Dekton",
    color: "Trevi & Polar",
    href: "bathrooms/",
  },
  {
    title: "Facades",
    image: "fachadas.jpg",
    brand: "Dekton",
    color: "Danae & Zenith",
    href: "facades/",
  },
  {
    title: "Commercial",
    image: "contract-v3.jpg",
    brand: "Dekton",
    color: "Awake",
    href: "inspiration/contract/",
  },
];
export function Hero() {
  const [active, setActive] = useState(0),
    [paused, setPaused] = useState(false);
  const reduced = useReducedMotion();
  useEffect(() => {
    if (paused || reduced) return;
    const timer = setInterval(
      () => setActive((i) => (i + 1) % scenes.length),
      5000,
    );
    return () => clearInterval(timer);
  }, [paused, reduced]);
  return (
    <section
      id="home"
      className="section-hero"
      aria-label="Sustainable architectural surfaces"
    >
      <AnimatePresence initial={false}>
        <motion.div
          key={active}
          className="hero-background current-background"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduced ? 0 : 1 }}
          style={{ backgroundImage: `url(/assets/${scenes[active].image})` }}
        />
      </AnimatePresence>
      <div className="section-hero__filter" />
      <div className="opciones">
        <div className="claim">
          <p>Sustainable surfaces for architecture and design</p>
        </div>
        <div
          className="selectores"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {scenes.map((s, i) => (
            <h2
              key={s.title}
              className={active === i ? "active" : ""}
              onMouseEnter={() => setActive(i)}
            >
              <a
                onFocus={() => {
                  setActive(i);
                  setPaused(true);
                }}
                onBlur={() => setPaused(false)}
                href={`https://www.cosentino.com/usa/${s.href}`}
              >
                {s.title}
              </a>
            </h2>
          ))}
        </div>
        <div className="leyenda active">
          <p className="principal">
            {scenes[active].brand}
            <span className="secundario">{scenes[active].color}</span>
          </p>
        </div>
      </div>
      <a
        href="#spaces"
        className="scroll__down"
        aria-label="Explore architectural surfaces"
      >
        <span className="scroll__mouse">
          <span className="scroll__wheel" />
        </span>
      </a>
    </section>
  );
}
