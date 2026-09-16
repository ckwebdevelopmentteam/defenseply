"use client";

import Link from "next/link";
import { footerGroups, socialLinks } from "@/data/site";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="flex w-full flex-col justify-end overflow-hidden bg-black px-4 pt-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="flex flex-wrap justify-between gap-y-12 lg:gap-x-8">
          <div className="flex w-full flex-col items-start text-left md:w-[45%] lg:w-[35%]">
            <Link href="/" aria-label="DefensePly home">
              <img
                className="h-auto w-[130px] invert brightness-200"
                src="/assets/defenseply-logo-dark.png"
                alt="DefensePly"
              />
            </Link>
            <div className="mt-8 h-0.5 w-full max-w-52 bg-linear-to-r from-[#24212D] to-[#24212D]/0"></div>
            <p className="mt-6 max-w-[350px] text-sm leading-relaxed text-white/60">
              Reliable WPC and PVC solutions for spaces built with purpose.
            </p>
          </div>

          <div className="flex w-[45%] flex-col items-start text-left md:w-[45%] lg:w-[15%]">
            <h3 className="text-sm font-medium text-white">Important Links</h3>
            <div className="mt-6 flex flex-col gap-2">
              {footerGroups[0]?.links.map(({ name, href }) => (
                <Link
                  key={name}
                  href={href}
                  className="text-sm text-white/60 transition-colors hover:text-white"
                >
                  {name}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex w-[45%] flex-col items-start text-left md:w-[45%] lg:w-[15%]">
            <h3 className="text-sm font-medium text-white">Social Links</h3>
            <div className="mt-6 flex flex-col gap-2">
              {socialLinks.map((item) => (
                <Link
                  key={item.name}
                  href="/#contact"
                  className="text-sm text-white/60 transition-colors hover:text-white capitalize"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-4 flex w-full flex-col items-start text-left md:mt-0 md:w-[45%] lg:w-[25%]">
            <h3 className="text-sm font-medium text-white">Start a Conversation</h3>
            <p className="mt-4 text-xs leading-relaxed text-white/60">
              <strong className="font-semibold text-white">Building the Future of Sustainable Architecture</strong><br /><br />
              Partner with India's emerging leader in WPC and PVC composite materials. Reach out to discuss your project, product requirements, or dealership opportunities.
            </p>
            <Link
              href="/contact-us"
              className="mt-6 flex h-10 w-36 items-center justify-center rounded-full bg-linear-to-b from-[#5623D8] to-[#7B53E2] text-sm text-white transition hover:opacity-90 active:scale-95 focus:outline-none"
            >
              Contact Us
            </Link>
          </div>
        </div>

        <div className="mb-4 mt-16 h-0.5 w-full bg-linear-to-r from-[#24212D]/0 via-[#24212D] to-[#24212D]/0"></div>

        <div className="relative z-10 flex flex-wrap items-center justify-between gap-x-2 gap-y-4 sm:flex-row">
          <p className="text-xs text-white/60">
            © {new Date().getFullYear()} DefensePly. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-right">
            <Link
              href="#"
              className="text-xs text-white/60 transition-colors hover:text-white"
            >
              Terms & Conditions
            </Link>
            <div className="h-4 w-px bg-white/20"></div>
            <Link
              href="#"
              className="text-xs text-white/60 transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>
          </div>
        </div>

        <div className="mt-6 flex w-full justify-center md:mt-12 md:mb-[-0.5%]">
          <h1 className="pointer-events-none select-none text-center text-[clamp(4.5rem,19.5vw,25rem)] font-extrabold leading-[0.70] tracking-tighter text-zinc-900">
            defensePly
          </h1>
        </div>
      </div>
    </motion.footer>
  );
}
