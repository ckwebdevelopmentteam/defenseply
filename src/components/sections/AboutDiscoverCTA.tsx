"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";

interface AboutDiscoverCTAProps {
  className?: string;
  href?: string;
}

export function AboutDiscoverCTA({
  className,
  href = "/about",
}: AboutDiscoverCTAProps) {
  const shouldReduceMotion = useReducedMotion();

  const underlineVariants = {
    initial: {
      scaleX: 0,
      opacity: 0,
    },
    hover: {
      scaleX: 1,
      opacity: 1,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.35,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  const arrowVariants = {
    initial: {
      x: 0,
    },
    hover: {
      x: shouldReduceMotion ? 0 : 4,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.3,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      whileFocus="hover"
      animate="initial"
      className={cn("shrink-0", className)}
    >
      <Link
        href={href}
        className="group/cta inline-flex items-center gap-1.5 text-[13px] sm:text-sm font-medium tracking-[0.03em] text-[#1c3f21] transition-opacity duration-200 hover:opacity-95 focus-visible:outline-2 focus-visible:outline-[#1c3f21] focus-visible:outline-offset-4"
        aria-label="Discover DEFENSEPLY — Learn more about our company and sustainable composites"
      >
        <span className="relative inline-block pb-0.5">
          <span>Discover DEFENSEPLY</span>
          {/* Subtle baseline underline (always visible) */}
          <span
            aria-hidden="true"
            className="absolute bottom-0 left-0 h-px w-full bg-[#1c3f21]/35 transition-opacity duration-300 group-hover/cta:opacity-0"
          />
          {/* Animated active underline */}
          <motion.span
            aria-hidden="true"
            className="absolute bottom-0 left-0 h-[1.5px] w-full origin-left bg-[#1c3f21]"
            variants={underlineVariants}
          />
        </span>

        {/* Small arrow icon with smooth horizontal glide */}
        <motion.span
          aria-hidden="true"
          className="inline-flex items-center text-[#1c3f21]"
          variants={arrowVariants}
        >
          <ArrowUpRight size={15} strokeWidth={2} className="shrink-0" />
        </motion.span>
      </Link>
    </motion.div>
  );
}
