"use client";

import { useEffect } from "react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-[calc(100vh-80px)] items-center justify-center bg-[#fbf9f6] px-6 pt-16 text-[#1b1c1a] md:pt-20">
      <div className="mx-auto max-w-lg text-center">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#805533]">
          System Error
        </p>
        <h1 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
          Something went wrong.
        </h1>
        <p className="mt-6 text-sm leading-6 text-[#5c5e5c]">
          We apologize for the inconvenience. An unexpected error has occurred.
        </p>
        <button
          onClick={() => reset()}
          className="mt-8 inline-flex min-h-12 items-center justify-center gap-3 bg-[#1b1c1a] px-8 py-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-white transition-colors duration-300 hover:bg-[#805533] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#805533]"
        >
          Try Again
        </button>
      </div>
    </main>
  );
}
