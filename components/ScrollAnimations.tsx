"use client";

import { useEffect } from "react";

export function ScrollAnimations() {
  useEffect(() => {
    if (typeof window === "undefined" || typeof document === "undefined") {
      return;
    }

    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(".ftco-animate")
    );

    if (!("IntersectionObserver" in window) || elements.length === 0) {
      elements.forEach((el) => {
        el.classList.add("fadeInUp", "ftco-animated");
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.classList.add("fadeInUp", "ftco-animated");
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}

