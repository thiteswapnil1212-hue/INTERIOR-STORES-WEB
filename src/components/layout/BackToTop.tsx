"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

/**
 * Back-to-top button. Appears after scrolling down,
 * sits opposite the WhatsApp float button.
 * Hides while the footer is on screen so it never
 * covers footer content or links, and hides while a
 * scroll-driven 3D moment is on screen so it never
 * covers its CTA text.
 */
export default function BackToTop() {
  const [show, setShow] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);
  const [momentVisible, setMomentVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const footer = document.querySelector("footer");
    const moments = Array.from(
      document.querySelectorAll("[data-scroll-moment]")
    );
    let observer: IntersectionObserver | null = null;
    if (footer || moments.length > 0) {
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.target.tagName === "FOOTER") {
              setFooterVisible(entry.isIntersecting);
            } else {
              setMomentVisible(entry.isIntersecting);
            }
          }
        },
        { threshold: 0 }
      );
      if (footer) observer.observe(footer);
      moments.forEach((moment) => observer?.observe(moment));
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer?.disconnect();
    };
  }, []);

  const visible = show && !footerVisible && !momentVisible;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      tabIndex={visible ? 0 : -1}
      className={`fixed bottom-24 left-5 z-40 flex h-12 w-12 md:bottom-8 items-center justify-center rounded-full bg-[#1b1c1a] text-white shadow-[0_8px_24px_rgba(27,28,26,0.35)] transition-[transform,opacity,background-color] duration-300 hover:bg-[#805533] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#805533] focus-visible:ring-offset-2 md:bottom-8 md:left-8 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <ArrowUp size={18} strokeWidth={2} aria-hidden="true" />
    </button>
  );
}
