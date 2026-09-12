"use client";
import { useEffect } from "react";

/** Placeholder links retain the reference styling without leaving or jumping the page. */
export function LocalNavigation() {
  useEffect(() => {
    const preventPlaceholder = (event: MouseEvent) => {
      const link =
        event.target instanceof Element ? event.target.closest("a") : null;
      if (link?.getAttribute("href") === "#") event.preventDefault();
    };
    document.addEventListener("click", preventPlaceholder);
    document.addEventListener("auxclick", preventPlaceholder);
    return () => {
      document.removeEventListener("click", preventPlaceholder);
      document.removeEventListener("auxclick", preventPlaceholder);
    };
  }, []);
  return null;
}
