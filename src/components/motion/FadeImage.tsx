"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

type FadeImageProps = Omit<ImageProps, "onLoad" | "onError"> & {
  onLoad?: ImageProps["onLoad"];
  onError?: ImageProps["onError"];
};

/**
 * Drop-in replacement for next/image that fades in once the image
 * has loaded, instead of popping. Opacity-only, so no layout shift.
 *
 * - priority images render immediately (no fade — protects LCP)
 * - on error the image is shown anyway (a broken icon beats an
 *   invisible box)
 * - the caller owns the transition classes; this only toggles
 *   opacity-0 -> opacity-100
 * - under prefers-reduced-motion the global CSS nukes the
 *   transition duration, so the fade is effectively instant
 */
export default function FadeImage({
  className = "",
  onLoad,
  onError,
  ...props
}: FadeImageProps) {
  const [loaded, setLoaded] = useState(!!props.priority);

  return (
    <Image
      {...props}
      onLoad={(e) => {
        setLoaded(true);
        onLoad?.(e);
      }}
      onError={(e) => {
        setLoaded(true);
        onError?.(e);
      }}
      className={`${className} ${loaded ? "opacity-100" : "opacity-0"}`}
    />
  );
}
