"use client";

import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useMotionValue,
  animate,
  AnimatePresence,
  type Variants,
} from "framer-motion";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import { Arrow } from "@/components/ui/Carousel";

// Defines the structure for each image item in the gallery
export type ImageItem = {
  id: number | string;
  title: string;
  desc: string;
  url: string;
  span: string; // Tailwind CSS grid span classes (e.g., "md:col-span-2")
};

// Defines the props for the main gallery component
export interface InteractiveImageBentoGalleryProps {
  imageItems: ImageItem[];
  title: string;
  description: React.ReactNode;
  viewAllHref?: string;
  viewAllText?: string;
}

// Animation variants for the container to stagger children
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

// Animation variants for each gallery item
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 100, damping: 15 },
  },
};

// Modal component for displaying the selected image
const ImageModal = ({
  item,
  onClose,
}: {
  item: ImageItem;
  onClose: () => void;
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.92, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.92, y: 20 }}
        className="relative flex flex-col items-center w-full max-w-4xl"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={item.url}
          alt={item.title}
          className="h-auto max-h-[80vh] w-full rounded-[4px] object-contain shadow-2xl"
        />
        <div className="mt-4 text-center text-white">
          <h3 className="text-lg font-semibold tracking-wide font-sans">{item.title}</h3>
          <p className="mt-1 text-sm text-white/70 font-sans">{item.desc}</p>
        </div>
      </motion.div>
      <button
        onClick={onClose}
        className="absolute right-5 top-5 rounded-full bg-white/10 p-2 text-white/90 transition-colors hover:bg-white/20 hover:text-white cursor-pointer"
        aria-label="Close image view"
      >
        <X size={22} />
      </button>
    </motion.div>
  );
};

// Main gallery component
export const InteractiveImageBentoGallery: React.FC<
  InteractiveImageBentoGalleryProps
> = ({ imageItems, title, description, viewAllHref, viewAllText }) => {
  const [selectedItem, setSelectedItem] = useState<ImageItem | null>(null);
  const [dragConstraint, setDragConstraint] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const isDragging = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);

  // Calculate the draggable area constraint based on container width
  useEffect(() => {
    const calculateConstraints = () => {
      if (gridRef.current && containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const gridWidth = gridRef.current.scrollWidth;
        const newConstraint = Math.min(0, containerWidth - gridWidth);
        setDragConstraint(newConstraint);

        // Update scroll indicators
        const currentX = x.get();
        setCanScrollLeft(currentX < -5);
        setCanScrollRight(currentX > newConstraint + 5);
      }
    };

    calculateConstraints();
    window.addEventListener("resize", calculateConstraints);
    return () => window.removeEventListener("resize", calculateConstraints);
  }, [imageItems, x]);

  // Update arrow states when x changes
  useEffect(() => {
    const unsubscribe = x.on("change", (latestX) => {
      setCanScrollLeft(latestX < -5);
      setCanScrollRight(latestX > dragConstraint + 5);
    });
    return () => unsubscribe();
  }, [x, dragConstraint]);

  const scrollBy = (offset: number) => {
    const currentX = x.get();
    const targetX = Math.max(dragConstraint, Math.min(0, currentX + offset));
    animate(x, targetX, {
      type: "spring",
      stiffness: 300,
      damping: 30,
    });
  };

  return (
    <div className="relative w-full" aria-label={title}>
      {/* Start-aligned Heading with Description & parallel right-corner Arrows */}
      <div className="relative mb-6 max-phone:mb-5">
        <h2 className="text-display font-semibold uppercase antialiased tracking-tight text-ink mb-3 max-phone:mb-2 text-left">
          {title}
        </h2>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div className="max-w-[840px] text-fluid font-light leading-[1.6] text-muted-foreground text-left max-sm:text-[13.5px] max-sm:leading-[1.35] max-phone:text-[13px] max-phone:leading-[1.35]">
            {description}
          </div>

          {/* Right Corner: Arrows parallel to the 2-line description */}
          <div className="flex shrink-0 items-center gap-2 self-end md:self-end text-[#1a1a1a] pb-0.5">
            <Arrow
              direction="left"
              aria-label="Previous gallery projects"
              className="size-[33px] transition-opacity hover:opacity-70 disabled:cursor-not-allowed disabled:opacity-25 cursor-pointer"
              onClick={() => scrollBy(520)}
              disabled={!canScrollLeft}
            />
            <Arrow
              direction="right"
              aria-label="Next gallery projects"
              className="size-[33px] transition-opacity hover:opacity-70 disabled:cursor-not-allowed disabled:opacity-25 cursor-pointer"
              onClick={() => scrollBy(-520)}
              disabled={!canScrollRight}
            />
          </div>
        </div>
      </div>

      {/* Draggable Bento Grid Container flush with standard left & right page margins */}
      <div
        ref={containerRef}
        className="relative w-full cursor-grab active:cursor-grabbing overflow-hidden"
      >
        <motion.div
          className="w-max"
          style={{ x }}
          drag="x"
          dragConstraints={{ left: dragConstraint, right: 0 }}
          dragElastic={0.06}
          onDragStart={() => {
            isDragging.current = true;
          }}
          onDragEnd={() => {
            setTimeout(() => {
              isDragging.current = false;
            }, 60);
          }}
        >
          <motion.div
            ref={gridRef}
            className="grid auto-cols-[minmax(17rem,21rem)] md:auto-cols-[minmax(20rem,24rem)] grid-flow-col grid-rows-1 md:grid-rows-2 h-[380px] md:h-[580px] gap-4 sm:gap-5 px-0"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {imageItems.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className={cn(
                  "group relative flex h-full w-full cursor-pointer items-end overflow-hidden rounded-[4px] border border-black/8 bg-card p-5 shadow-sm transition-all duration-300 ease-in-out hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background select-none",
                  item.span,
                )}
                whileHover={{ scale: 1.015 }}
                transition={{ type: "spring" as const, stiffness: 300, damping: 20 }}
                onClick={() => {
                  if (!isDragging.current) {
                    setSelectedItem(item);
                  }
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") setSelectedItem(item);
                }}
                tabIndex={0}
                aria-label={`View ${item.title}`}
              >
                <img
                  src={item.url}
                  alt={item.title}
                  loading="lazy"
                  draggable={false}
                  className="absolute inset-0 size-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent opacity-65 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative z-10 translate-y-1 transition-all duration-500 group-hover:translate-y-0">
                  <h3 className="text-base sm:text-lg font-semibold text-white tracking-wide font-sans leading-tight">
                    {item.title}
                  </h3>
                  {/* <p className="mt-1 text-xs sm:text-sm text-white/80 line-clamp-2 font-sans leading-snug">
                    {item.desc}
                  </p> */}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedItem && (
          <ImageModal item={selectedItem} onClose={() => setSelectedItem(null)} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default InteractiveImageBentoGallery;
