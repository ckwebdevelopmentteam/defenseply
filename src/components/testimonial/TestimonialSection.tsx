"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Define the shape of a single testimonial
export interface Testimonial {
  type: "user" | "quote";
  quote: string;
  name?: string;
  role?: string;
  avatarSrc?: string;
  avatarFallback?: string;
}

// Define props for the main section component
export interface TestimonialSectionProps extends React.HTMLAttributes<HTMLElement> {
  title: string;
  description?: string;
  testimonials: Testimonial[];
}

const QuoteIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="48"
    height="36"
    viewBox="0 0 48 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M14.9951 36C12.4951 36 10.2285 35.0167 8.19513 33.05C6.1618 31.0833 5.14513 28.8333 5.14513 26.3C5.14513 22.8 6.2118 19.4833 8.34513 16.35C10.4785 13.2167 13.2285 10.1 16.5951 7L21.4951 11.25C19.3618 13.1333 17.6785 14.8833 16.4451 16.5C15.2118 18.1167 14.5951 19.9833 14.5951 22.1H19.9951V36H14.9951ZM37.9951 36C35.4951 36 33.2285 35.0167 31.1951 33.05C29.1618 31.0833 28.1451 28.8333 28.1451 26.3C28.1451 22.8 29.2118 19.4833 31.3451 16.35C33.4785 13.2167 36.2285 10.1 39.5951 7L44.4951 11.25C42.3618 13.1333 40.6785 14.8833 39.4451 16.5C38.2118 18.1167 37.5951 19.9833 37.5951 22.1H42.9951V36H37.9951Z"
      fill="currentColor"
    />
  </svg>
);

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  const isQuoteType = testimonial.type === "quote";

  return (
    <motion.div
      className="w-full flex flex-col"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      {isQuoteType ? (
        <div className="w-full flex flex-col items-center">
          <div className="w-full max-w-[390px] flex flex-col items-start group cursor-pointer transition-all duration-300 hover:-translate-y-1.5 transform-gpu px-2">
            <QuoteIcon className="h-9 w-12 text-black/35 mb-4 self-start transition-all duration-300 group-hover:scale-110 group-hover:text-black/60" />
            <p className="text-[clamp(17px,1.3vw,19.5px)] font-sans font-medium leading-[1.65] text-[#111] transition-colors duration-300">
              &ldquo;{testimonial.quote}&rdquo;
            </p>
          </div>
        </div>
      ) : (
        <div
          className={cn(
            "w-full flex flex-col  border border-black/10 bg-[#fafaf8] p-8 shadow-xs hover:shadow-lg hover:-translate-y-1.5 transform-gpu transition-all duration-300 max-phone:p-6 cursor-pointer",
          )}
        >
          <p className="text-[#333] font-sans text-[16px] max-phone:text-[15px] leading-[1.65] font-normal">
            &ldquo;{testimonial.quote}&rdquo;
          </p>
          <div className="flex flex-row items-center gap-3.5 mt-5">
            <Avatar className="size-12 border border-black/10 shrink-0">
              <AvatarImage
                src={testimonial.avatarSrc}
                alt={testimonial.name}
                className="object-cover"
              />
              <AvatarFallback className="bg-[#e8e8e6] text-[#111] font-semibold text-xs">
                {testimonial.avatarFallback}
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <p className="font-semibold text-[15px] text-[#111] leading-tight">
                {testimonial.name}
              </p>
              <p className="text-[12.5px] text-[#777] font-mono leading-tight mt-1">
                {testimonial.role}
              </p>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

const TestimonialSection = React.forwardRef<
  HTMLElement,
  TestimonialSectionProps
>(({ title, description, testimonials, className, ...props }, ref) => {
  // Animation variants for the container and items
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <section
      ref={ref}
      className={cn("w-full bg-white mb-24 pb-4 max-phone:mb-12 max-phone:pb-0 max-md:mb-12 max-md:pb-0", className)}
      {...props}
    >
      {/* Section Heading: Centered */}
      <div className="flex flex-col items-center text-center mb-12 max-phone:mb-8">
        <h2 className="text-display font-semibold uppercase antialiased tracking-tight text-ink mb-3 max-phone:mb-2 text-center">
          {title}
        </h2>
        {description && (
          <p className="max-w-[720px] text-fluid font-light leading-[1.5] text-[#5d5d59] text-center mx-auto max-sm:text-[13.5px] max-sm:leading-[1.35] max-phone:text-[13px] max-phone:leading-[1.35] max-phone:max-w-[340px]">
            {description}
          </p>
        )}
      </div>

      {/* 2. Cards Container with subtle, standard decrease */}
      <div className="w-full max-w-[1360px] mx-auto">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-10 items-start justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={containerVariants}
        >
          {testimonials.map((testimonial, index) => {
            const isQuote = testimonial.type === "quote";
            return (
              <div
                key={index}
                className={cn(
                  "w-full flex flex-col",
                  isQuote && "lg:translate-y-7 xl:translate-y-9",
                )}
              >
                <TestimonialCard testimonial={testimonial} />
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
});

TestimonialSection.displayName = "TestimonialSection";

export { TestimonialSection, TestimonialCard };
export default TestimonialSection;
