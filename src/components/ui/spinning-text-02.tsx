"use client";

import React, { useState, useId } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export type SpinningTextProps = {
  text: string;
  radius?: number;
  fontSize?: number;
  speed?: number;
  direction?: "normal" | "reverse";
  className?: string;
  children?: React.ReactNode;
};

export const SpinningText: React.FC<SpinningTextProps> = ({
  text,
  radius = 40,
  fontSize = 11.5,
  speed = 22,
  direction = "normal",
  className,
  children,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const rawId = useId();
  const pathId = `spin-path-${rawId.replace(/[:]/g, "")}`;
  const circ = 2 * Math.PI * radius;

  return (
    <div
      className={cn("relative flex items-center justify-center select-none", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        animate={{
          rotate: direction === "normal" ? 360 : -360,
        }}
        transition={{
          duration: isHovered ? speed / 2 : speed,
          repeat: Infinity,
          ease: "linear",
        }}
        className="relative flex items-center justify-center size-full"
      >
        <svg
          viewBox="0 0 100 100"
          className="size-full overflow-visible pointer-events-none"
        >
          <defs>
            <path
              id={pathId}
              d={`M 50,50 m -${radius},0 a ${radius},${radius} 0 1,1 ${radius * 2},0 a ${radius},${radius} 0 1,1 -${radius * 2},0`}
            />
          </defs>
          <text
            fill="currentColor"
            fontSize={fontSize}
            className="uppercase font-sans font-semibold tracking-[0.04em]"
          >
            <textPath
              href={`#${pathId}`}
              startOffset="0%"
              textLength={Math.round(circ * 0.98)}
              lengthAdjust="spacingAndGlyphs"
            >
              {text}
            </textPath>
          </text>
        </svg>
      </motion.div>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {children || (
          <Star className="text-primary fill-primary" size={radius / 2} />
        )}
      </div>
    </div>
  );
};

const SpinningText02 = () => {
  return (
    <div className="py-20">
      <SpinningText
        text="INTERACTIVE 2026 DYNAMIC 2026 MODERN 2026 "
        radius={100}
        fontSize={12}
        speed={20}
        direction="reverse"
        className="text-primary font-medium"
      >
        <div className="size-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
          <Star size={32} className="fill-primary text-primary animate-pulse" />
        </div>
      </SpinningText>
    </div>
  );
};

export default SpinningText02;
