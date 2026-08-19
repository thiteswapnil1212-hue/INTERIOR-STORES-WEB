"use client";

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

      // At the very top → always show
      if (currentScrollY <= 20) {
        setShowNavbar(true);
      }
      // Scrolling down → hide
      else if (currentScrollY > lastScrollY) {
        setShowNavbar(false);
      }
      // Scrolling up → show
      else if (currentScrollY < lastScrollY) {
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

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* ================= DESKTOP NAVBAR ================= */}

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
        <nav className="mx-auto flex h-full max-w-[1440px] items-center justify-between px-16">

          {/* Logo */}
          <Link
            href="/"
            className="font-serif text-2xl tracking-tight text-[#1b1c1a] transition-opacity duration-300 hover:opacity-70"
          >
            Mauli Interior
          </Link>

          {/* Navigation */}
          <div className="flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative py-2 text-sm font-medium transition-colors duration-300 ${
                  isActive(link.href)
                    ? "text-black"
                    : "text-[#444748] hover:text-black"
                }`}
              >
                {link.label}

                {isActive(link.href) && (
                  <span className="absolute bottom-0 left-0 h-px w-full bg-black" />
                )}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <Link
            href="/contact"
            className="bg-black px-6 py-3 text-xs font-semibold uppercase tracking-[0.1em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#30312f]"
          >
            Get a Quote
          </Link>
        </nav>
      </header>

      {/* ================= MOBILE NAVBAR ================= */}

      <header
        className="fixed left-0 right-0 top-0 z-50 flex h-16 items-center justify-between border-b border-[#747878]/15 bg-[#fbf9f6] px-6 md:hidden"
        style={{
          transform: showNavbar
            ? "translateY(0)"
            : "translateY(-100%)",
          transition:
            "transform 450ms cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        <Link
          href="/"
          className="font-serif text-xl tracking-tight text-[#1b1c1a]"
        >
          Mauli Interior
        </Link>

        <button
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label="Open navigation"
          className="text-[#1b1c1a]"
        >
          <Menu size={24} strokeWidth={1.7} />
        </button>
      </header>

      {/* ================= MOBILE MENU ================= */}

      <div
        className={`fixed inset-0 z-[60] bg-[#fbf9f6] transition-transform duration-300 ease-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Mobile Menu Header */}

        <div className="flex h-16 items-center justify-between border-b border-[#747878]/15 px-6">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="font-serif text-xl text-[#1b1c1a]"
          >
            Mauli Interior
          </Link>

          <button
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Close navigation"
            className="text-[#1b1c1a]"
          >
            <X size={24} strokeWidth={1.7} />
          </button>
        </div>

        {/* Mobile Links */}

        <div className="flex flex-col px-6 py-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`border-b border-[#747878]/15 py-5 text-base transition-all duration-300 ${
                isActive(link.href)
                  ? "font-medium text-black"
                  : "text-[#444748] hover:pl-2 hover:text-black"
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Mobile CTA */}

          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="mt-8 bg-black px-6 py-4 text-center text-xs font-semibold uppercase tracking-[0.1em] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#30312f]"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </>
  );
}