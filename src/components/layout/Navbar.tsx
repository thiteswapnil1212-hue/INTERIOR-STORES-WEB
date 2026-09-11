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
  const [scrolled, setScrolled] = useState(false);

  /* =========================================================
     ACTIVE LINK
  ========================================================= */

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  /* =========================================================
     SCROLL BEHAVIOR
  ========================================================= */

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 20);

      // Always show navbar near the top
      if (currentScrollY <= 20) {
        setShowNavbar(true);
        lastScrollY = currentScrollY;
        return;
      }

      // Hide while scrolling down
      if (currentScrollY > lastScrollY + 4) {
        setShowNavbar(false);
      }

      // Show while scrolling up
      if (currentScrollY < lastScrollY - 4) {
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

  /* =========================================================
     CLOSE MENU ON ROUTE CHANGE
  ========================================================= */

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  /* =========================================================
     LOCK BODY SCROLL WHEN MOBILE MENU IS OPEN
  ========================================================= */

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  /* =========================================================
     ESCAPE KEY
  ========================================================= */

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      {/* =====================================================
          DESKTOP NAVBAR
      ====================================================== */}

      <header
        className={`fixed left-0 right-0 top-0 z-50 hidden h-20 border-b transition-all duration-500 md:block ${
          showNavbar
            ? "translate-y-0"
            : "-translate-y-full"
        } ${
          scrolled
            ? "border-black/10 bg-[#fbf9f6]/95 shadow-[0_4px_20px_rgba(0,0,0,0.03)] backdrop-blur-md"
            : "border-black/5 bg-[#fbf9f6]"
        }`}
      >
        <nav
          aria-label="Main navigation"
          className="mx-auto flex h-full max-w-[1440px] items-center justify-between px-8 lg:px-16"
        >
          {/* =================================================
              LOGO
          ================================================== */}

          <Link
            href="/"
            aria-label="Mauli Interior home"
            className="group flex shrink-0 items-center"
          >
            <Image
              src="/images/home/brand/mauli-logo.jpg"
              alt="Mauli Interior"
              width={140}
              height={48}
              priority
              sizes="90px"
              className="h-auto w-[82px] object-contain transition-opacity duration-300 group-hover:opacity-75 lg:w-[90px]"
            />
          </Link>

          {/* =================================================
              NAVIGATION LINKS
          ================================================== */}

          <div className="flex items-center gap-5 lg:gap-8">
            {navLinks.map((link) => {
              const active = isActive(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`group relative py-2 text-[13px] font-medium transition-colors duration-300 ${
                    active
                      ? "text-[#1b1c1a]"
                      : "text-[#555856] hover:text-[#1b1c1a]"
                  }`}
                >
                  {link.label}

                  <span
                    aria-hidden="true"
                    className={`absolute bottom-0 left-0 h-px bg-[#805533] transition-all duration-300 ${
                      active
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* =================================================
              DESKTOP CTA
          ================================================== */}

          <Link
            href="/contact"
            className="group inline-flex min-h-11 items-center justify-center bg-[#1b1c1a] px-6 text-[10px] font-semibold uppercase tracking-[0.16em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#805533] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#805533] focus-visible:ring-offset-2"
          >
            <span>Get a Quote</span>
          </Link>
        </nav>
      </header>

      {/* =====================================================
          MOBILE NAVBAR
      ====================================================== */}

      <header
        className={`fixed left-0 right-0 top-0 z-50 flex h-16 items-center justify-between border-b px-5 transition-all duration-500 sm:px-6 md:hidden ${
          showNavbar
            ? "translate-y-0"
            : "-translate-y-full"
        } ${
          scrolled
            ? "border-black/10 bg-[#fbf9f6]/95 shadow-[0_4px_20px_rgba(0,0,0,0.03)] backdrop-blur-md"
            : "border-black/5 bg-[#fbf9f6]"
        }`}
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
            width={130}
            height={44}
            priority
            sizes="75px"
            className="h-auto w-[75px] object-contain"
          />
        </Link>

        {/* Mobile Menu Button */}

        <button
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label="Open navigation menu"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          className="flex h-11 w-11 items-center justify-center text-[#1b1c1a] transition-all duration-200 hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#805533]"
        >
          <Menu
            size={23}
            strokeWidth={1.6}
            aria-hidden="true"
          />
        </button>
      </header>

      {/* =====================================================
          MOBILE MENU
      ====================================================== */}

      <div
        id="mobile-navigation"
        className={`fixed inset-0 z-[60] flex flex-col bg-[#fbf9f6] transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden ${
          isOpen
            ? "visible translate-x-0 opacity-100"
            : "invisible translate-x-full opacity-0"
        }`}
        aria-hidden={!isOpen}
      >
        {/* =================================================
            MOBILE MENU HEADER
        ================================================== */}

        <div className="flex h-16 shrink-0 items-center justify-between border-b border-black/10 px-5 sm:px-6">
          <Link
            href="/"
            aria-label="Mauli Interior home"
            onClick={() => setIsOpen(false)}
            className="flex h-10 w-[60px] shrink-0 items-center overflow-hidden"
          >
            <Image
              src="/images/home/brand/mauli-logo.jpg"
              alt="Mauli Interior"
              width={120}
              height={40}
              priority
              sizes="60px"
              className="block h-auto w-[60px] object-contain"
            />
          </Link>

          <button
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Close navigation menu"
            className="flex h-11 w-11 items-center justify-center text-[#1b1c1a] transition-all duration-200 hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#805533]"
          >
            <X
              size={23}
              strokeWidth={1.6}
              aria-hidden="true"
            />
          </button>
        </div>

        {/* =================================================
            MOBILE LINKS
        ================================================== */}

        <nav
          aria-label="Mobile navigation"
          className="flex flex-1 flex-col overflow-y-auto px-5 py-6 sm:px-6"
        >
          {navLinks.map((link, index) => {
            const active = isActive(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                aria-current={active ? "page" : undefined}
                className={`group flex items-center justify-between border-b border-black/10 py-5 text-[17px] transition-all duration-300 ${
                  active
                    ? "font-medium text-[#1b1c1a]"
                    : "text-[#555856] hover:pl-2 hover:text-[#1b1c1a]"
                }`}
              >
                <span>{link.label}</span>

                <span
                  aria-hidden="true"
                  className={`text-lg transition-transform duration-300 ${
                    active
                      ? "translate-x-0 text-[#805533]"
                      : "translate-x-[-4px] opacity-40 group-hover:translate-x-0"
                  }`}
                >
                  →
                </span>
              </Link>
            );
          })}

          {/* =================================================
              MOBILE CTA
          ================================================== */}

          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="mt-8 flex min-h-12 items-center justify-center bg-[#1b1c1a] px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-white transition-all duration-300 hover:bg-[#805533] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#805533] focus-visible:ring-offset-2"
          >
            Get a Quote
          </Link>

          {/* =================================================
              MOBILE FOOTER
          ================================================== */}

          <div className="mt-auto pt-10">
            <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#805533]">
              Mauli Interior
            </p>

            <p className="mt-2 max-w-xs text-xs leading-5 text-[#77736e]">
              Custom sofas and home furnishing solutions for
              homes across Pune and PCMC.
            </p>
          </div>
        </nav>
      </div>
    </>
  );
}