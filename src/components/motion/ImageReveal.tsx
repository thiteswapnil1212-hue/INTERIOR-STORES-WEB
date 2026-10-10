"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type ImageRevealProps = {
  src: string;
  alt: string;
  sizes?: string;
  priority?: boolean;
  /** aspect ratio class, e.g. "aspect-[4/3]" */
  aspectClassName?: string;
  className?: string;
  imgClassName?: string;
};

/**
 * Premium editorial image reveal: the frame opens with a soft clip-path
 * while the photo settles from a gentle zoom. Fires once on scroll into
 * view. Respects prefers-reduced-motion (renders fully visible).
 */
export default function ImageReveal({
  src,
  alt,
  sizes = "100vw",
  priority = false,
  aspectClassName = "aspect-[4/3]",
  className = "",
  imgClassName = "",
}: ImageRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={`relative overflow-hidden bg-[#e9e4dc] ${aspectClassName} ${className}`}>
      <div
        className="absolute inset-0 transition-[clip-path] duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none"
        style={{
          clipPath: visible ? "inset(0 0 0% 0)" : "inset(10% 7% 10% 7%)",
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className={`object-cover transition-transform duration-[1500ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
            visible ? "scale-100" : "scale-[1.14]"
          } ${imgClassName}`}
        />
      </div>
    </div>
  );
}
