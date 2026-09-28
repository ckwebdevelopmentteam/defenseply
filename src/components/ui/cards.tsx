import React from "react";
import { cn } from "@/lib/utils";

/**
 * @typedef CardItem
 * @property {string | number} id - Unique identifier for the card.
 * @property {string} title - The main title text of the card.
 * @property {string} subtitle - The subtitle or category text.
 * @property {string} imageUrl - The URL for the card's background image.
 * @property {string} [description] - Optional descriptive text for the card.
 */
export interface CardItem {
  id: string | number;
  title: string;
  subtitle: string;
  imageUrl: string;
  description?: string;
}

/**
 * @typedef HoverRevealCardsProps
 * @property {CardItem[]} items - An array of card item objects to display.
 * @property {string} [className] - Optional additional class names for the container.
 * @property {string} [cardClassName] - Optional additional class names for individual cards.
 */
export interface HoverRevealCardsProps {
  items: CardItem[];
  className?: string;
  cardClassName?: string;
}

/**
 * A component that displays a grid of cards with a hover-reveal effect.
 * When a card is hovered or focused, it stands out while others are de-emphasized.
 */
const HoverRevealCards: React.FC<HoverRevealCardsProps> = ({
  items,
  className,
  cardClassName,
}) => {
  return (
    // The `group` class on the container enables styling children on parent hover.
    <div
      role="list"
      className={cn(
        "group grid w-full max-w-6xl grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-4",
        className
      )}
    >
      {items.map((item) => (
        <div
          key={item.id}
          role="listitem"
          aria-label={`${item.title}, ${item.subtitle}`}
          tabIndex={0} // Makes the div focusable for keyboard navigation.
          className={cn(
            "relative h-80 cursor-pointer overflow-hidden rounded-xl bg-cover bg-center shadow-lg transition-all duration-500 ease-in-out",
            // On parent hover, apply these styles to all children.
            "group-hover:scale-[0.97] group-hover:opacity-60 group-hover:blur-[2px]",
            // On child hover/focus, override parent hover styles to highlight the current item.
            // The `!` is used to ensure these styles take precedence.
            "hover:!scale-105 hover:!opacity-100 hover:!blur-none hover:z-10 focus-visible:!scale-105 focus-visible:!opacity-100 focus-visible:!blur-none focus-visible:z-10",
            // Accessibility: Add focus ring using theme variables.
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background",
            cardClassName
          )}
          style={{ backgroundImage: `url(${item.imageUrl})` }}
        >
          {/* Gradient overlay for text contrast, a standard UI practice for text on images. */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent transition-opacity duration-300" />

          {/* Card Content */}
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white select-none">
            <p className="text-xs font-light uppercase tracking-widest opacity-80">
              {item.subtitle}
            </p>
            <h3 className="mt-1 text-xl font-semibold leading-snug tracking-wide text-white">
              {item.title}
            </h3>
            {item.description && (
              <p className="mt-2 text-xs leading-relaxed text-white/80 line-clamp-2">
                {item.description}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export { HoverRevealCards };
export default HoverRevealCards;
