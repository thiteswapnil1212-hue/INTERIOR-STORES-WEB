"use client";

import { useEffect, useRef, useState } from "react";

export type SplitLine = { text: string; accent?: boolean };

type SplitTextProps = {
  lines: SplitLine[];
  className?: string;
  /** heading level to render */
  as?: "h1" | "h2" | "h3" | "p";
  id?: string;
  /** stagger between words, ms */
  stagger?: number;
  /** delay before the first word, ms */
  delay?: number;
  /** class applied to accent lines */
  accentClassName?: string;
};

const EASE = "cubic-bezier(0.22, 1, 0.36, 1)"; // calm Apple-like ease-out

/**
 * Apple-style headline reveal: words rise into place one by one,
 * each masked until it slides up. Fires once when scrolled into view.
 * Respects prefers-reduced-motion (renders fully visible).
 */
export default function SplitText({
  lines,
  className = "",
  as = "h2",
  id,
  stagger = 45,
  delay = 0,
  accentClassName = "text-[#805533]",
}: SplitTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.35 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const Tag = as as "h2";
  let wordIndex = 0;

  return (
    <Tag ref={ref as never} id={id} className={className}>
      {lines.map((line, li) => (
        <span key={li} className="block">
          {line.text.split(" ").map((word, wi, arr) => {
            const i = wordIndex++;
            const isLast = wi === arr.length - 1;
            return (
              // The trailing space lives INSIDE the word's span (not as a
              // whitespace-only text node) so screen readers, search engines
              // and text extraction keep the word boundary: "word word",
              // never "wordword".
              <span
                key={wi}
                className="inline-block overflow-hidden pb-[0.08em] -mb-[0.08em] align-bottom"
              >
                <span
                  className="inline-block will-change-transform motion-reduce:transform-none motion-reduce:opacity-100"
                  style={{
                    transitionProperty: "transform, opacity",
                    transitionDuration: "900ms",
                    transitionTimingFunction: EASE,
                    transitionDelay: visible ? `${delay + i * stagger}ms` : "0ms",
                    transform: visible ? "translateY(0)" : "translateY(115%)",
                    opacity: visible ? 1 : 0,
                  }}
                >
                  <span className={line.accent ? accentClassName : undefined}>
                    {word}
                    {!isLast && " "}
                  </span>
                </span>
              </span>
            );
          })}
        </span>
      ))}
    </Tag>
  );
}
