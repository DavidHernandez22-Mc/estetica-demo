"use client";

import { useEffect } from "react";

/**
 * Staggered entrances for every [data-reveal] element. Content is only hidden
 * once this runs (html.js), so the page reads fine without script.
 */
export function Reveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }
    // Stagger siblings that share a section: heading, then text, then picture.
    const counts = new Map<Element, number>();
    els.forEach((el) => {
      const section = el.closest("section, footer") ?? document.body;
      const n = counts.get(section) ?? 0;
      counts.set(section, n + 1);
      el.style.setProperty("--d", `${Math.min(n, 4) * 70}ms`);
    });
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          e.target.classList.add("in");
          io.unobserve(e.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return null;
}
