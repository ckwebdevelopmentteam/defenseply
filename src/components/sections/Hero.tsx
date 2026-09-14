"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { heroScenes as scenes } from "@/data/hero";
import { cn } from "@/lib/cn";
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
      data-section="hero"
      className="page-bleed relative flex h-screen max-w-screen flex-col justify-end overflow-hidden"
      aria-label="Sustainable architectural surfaces"
    >
      <AnimatePresence initial={false}>
        <motion.div
          key={active}
          className="absolute inset-0 z-[2] bg-cover bg-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduced ? 0 : 1 }}
          style={{ backgroundImage: `url(/assets/${scenes[active].image})` }}
        />
      </AnimatePresence>
      <div className="absolute inset-0 z-[3] bg-black/25" />
      <div className="relative z-[4] flex shrink-0 flex-col items-start justify-end gap-[2.1875em] self-stretch px-[2.375em] py-[2.0625em] max-tablet:pb-[6.0625em] max-phone:gap-[2em] max-phone:pb-[9.0625em] max-phone:text-[2.767vw]">
        <div className="max-w-[20%] text-white max-tablet:max-w-[40%] max-phone:max-w-[85%]">
          <p className="text-[clamp(16px,1.06vw,32px)] leading-[1.375] tracking-[.03125em] max-tablet:text-[clamp(17px,2.214vw,34px)] max-phone:text-[clamp(15px,4.28vw,30px)] max-phone:leading-[1.315rem]">
            Sustainable surfaces for architecture and design
          </p>
        </div>
        <div
          className="flex flex-col items-start justify-center gap-[1.1em]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {scenes.map((s, i) => (
            <h2
              key={s.title}
              className={cn(
                "cursor-pointer text-[clamp(75px,5vw,150px)] font-extralight uppercase leading-[.7333] text-white transition-opacity duration-200 hover:opacity-100 max-tablet:text-[clamp(75px,9.766vw,150px)] max-phone:text-[clamp(48px,12.8vw,96px)]",
                active === i ? "opacity-100" : "opacity-60",
              )}
              onMouseEnter={() => setActive(i)}
            >
              <a
                onFocus={() => {
                  setActive(i);
                  setPaused(true);
                }}
                onBlur={() => setPaused(false)}
                href="#product"
              >
                {s.title}
              </a>
            </h2>
          ))}
        </div>
        <div className="absolute right-[calc(2.375em+100px)] bottom-[2.0625em] capitalize max-phone:right-auto max-phone:left-[2.375em]">
          <p className="text-right text-[clamp(12px,.8vw,24px)] font-medium leading-normal text-white max-tablet:text-[clamp(15px,1.953vw,30px)] max-phone:text-[clamp(15px,4.28vw,30px)]">
            {scenes[active].brand}
            <span className="ml-8 text-[clamp(16px,1.06vw,32px)] font-light max-tablet:text-[clamp(15px,1.953vw,30px)] max-phone:ml-4 max-phone:text-[clamp(15px,4.28vw,30px)]">
              {scenes[active].color}
            </span>
          </p>
        </div>
      </div>
      <a
        href="#product"
        className="absolute bottom-0 left-1/2 z-[9] -translate-1/2 max-phone:hidden"
        aria-label="Explore architectural surfaces"
      >
        <span className="relative inline-block h-9 w-[26px] rounded-[40px] border border-white">
          <span className="absolute top-2 left-[11px] size-0.5 animate-scroll-cue rounded-full bg-white" />
        </span>
      </a>
    </section>
  );
}
