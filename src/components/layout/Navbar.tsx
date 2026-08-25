
"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services/sofas" },
  { label: "3D Studio", href: "/3d-studio" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 20) {
        setShowNavbar(true);
      } else if (currentScrollY > lastScrollY) {
        setShowNavbar(false);
      } else if (currentScrollY < lastScrollY) {
        setShowNavbar(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

  return (
    <>
      {/* =========================================================
          DESKTOP NAVBAR
      ========================================================= */}

      <header
        className="fixed left-0 right-0 top-0 z-50 hidden h-20 border-b border-[#747878]/15 bg-[#fbf9f6] md:block"
        style={{
          transform: showNavbar
            ? "translateY(0)"
            : "translateY(-100%)",
          transition:
            "transform 450ms cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        <nav className="mx-auto flex h-full max-w-[1440px] items-center justify-between px-8 lg:px-16">
          {/* Logo */}

          <Link
            href="/"
            aria-label="Mauli Interior home"
            className="flex shrink-0 items-center transition-opacity duration-300 hover:opacity-75"
          >
            <Image
              src="/images/home/brand/mauli-logo.jpg"
              alt="Mauli Interior"
              width={180}
              height={60}
              priority
              sizes="155px"
              className="h-auto w-[135px] object-contain lg:w-[155px]"
            />
          </Link>

          {/* Navigation */}

          <nav
            aria-label="Main navigation"
            className="flex items-center gap-5 lg:gap-7"
          >
            {navLinks.map((link) => {
              const active = isActive(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative py-2 text-sm font-medium transition-colors duration-300 ${
                    active
                      ? "text-black"
                      : "text-[#444748] hover:text-black"
                  }`}
                >
                  {link.label}

                  {active && (
                    <span className="absolute bottom-0 left-0 h-px w-full bg-black" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA */}

          <Link
            href="/contact"
            className="shrink-0 bg-[#1b1c1a] px-6 py-3 text-xs font-semibold uppercase tracking-[0.1em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#805533]"
          >
            Get a Quote
          </Link>
        </nav>
      </header>

      {/* =========================================================
          MOBILE NAVBAR
      ========================================================= */}

      <header
        className="fixed left-0 right-0 top-0 z-50 flex h-16 items-center justify-between border-b border-[#747878]/15 bg-[#fbf9f6] px-5 sm:px-6 md:hidden"
        style={{
          transform: showNavbar
            ? "translateY(0)"
            : "translateY(-100%)",
          transition:
            "transform 450ms cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        {/* Mobile Logo */}

        <Link
          href="/"
          aria-label="Mauli Interior home"
          className="flex shrink-0 items-center"
        >
          <Image
            src="/images/home/brand/mauli-logo.jpg"
            alt="Mauli Interior"
            width={160}
            height={54}
            priority
            sizes="120px"
            className="h-auto w-[120px] object-contain"
          />
        </Link>

        {/* Menu Button */}

        <button
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label="Open navigation"
          aria-expanded={isOpen}
          className="flex h-11 w-11 items-center justify-center text-[#1b1c1a] transition-opacity hover:opacity-60"
        >
          <Menu size={24} strokeWidth={1.7} />
        </button>
      </header>

      {/* =========================================================
          MOBILE MENU
      ========================================================= */}

      <div
        className={`fixed inset-0 z-[60] bg-[#fbf9f6] transition-transform duration-300 ease-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!isOpen}
      >
        {/* Mobile Menu Header */}

        <div className="flex h-16 items-center justify-between border-b border-[#747878]/15 px-5 sm:px-6">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            aria-label="Mauli Interior home"
            className="flex shrink-0 items-center"
          >
            <Image
              src="/images/home/brand/mauli-logo.jpg"
              alt="Mauli Interior"
              width={160}
              height={54}
              sizes="120px"
              className="h-auto w-[120px] object-contain"
            />
          </Link>

          {/* Close */}

          <button
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Close navigation"
            className="flex h-11 w-11 items-center justify-center text-[#1b1c1a] transition-opacity hover:opacity-60"
          >
            <X size={24} strokeWidth={1.7} />
          </button>
        </div>

        {/* Mobile Links */}

        <div className="flex flex-col px-5 py-7 sm:px-6 sm:py-8">
          {navLinks.map((link) => {
            const active = isActive(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                aria-current={active ? "page" : undefined}
                className={`border-b border-[#747878]/15 py-5 text-base transition-all duration-300 ${
                  active
                    ? "font-medium text-black"
                    : "text-[#444748] hover:pl-2 hover:text-black"
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          {/* Mobile CTA */}

          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="mt-8 flex min-h-12 items-center justify-center bg-[#1b1c1a] px-6 py-4 text-xs font-semibold uppercase tracking-[0.1em] text-white transition-all duration-300 hover:bg-[#805533]"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </>
  );
}