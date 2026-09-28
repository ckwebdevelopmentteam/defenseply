"use client";

import { useEffect } from "react";

export function ProductPageAnimations() {
  useEffect(() => {
    // Reveal elements on scroll using IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      },
    );

    const elements = document.querySelectorAll(
      "#main-content .reveal-on-scroll",
    );
    elements.forEach((el) => {
      // If already visible in the viewport upon mount, reveal immediately
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add("is-revealed");
      } else {
        el.classList.add("reveal-pending");
        observer.observe(el);
      }
    });

    return () => {
      observer.disconnect();
      elements.forEach((el) => el.classList.remove("reveal-pending"));
    };
  }, []);

  return null;
}
