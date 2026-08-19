"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

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

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* ================= DESKTOP NAVBAR ================= */}
      <header className="fixed inset-x-0 top-0 z-50 hidden h-20 border-b border-[#747878]/15 bg-[#fbf9f6] md:block">
        <nav className="mx-auto flex h-full max-w-[1440px] items-center justify-between px-16">
          
          {/* Logo */}
          <Link
            href="/"
            className="navbar-logo font-serif text-2xl tracking-tight text-[#1b1c1a]"
          >
            Mauli Interior
          </Link>

          {/* Navigation */}
          <div className="flex items-center gap-7">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  animationDelay: `${150 + index * 60}ms`,
                }}
                className={`navbar-link relative py-2 text-sm font-medium ${
                  isActive(link.href)
                    ? "text-[#000000]"
                    : "text-[#444748]"
                }`}
              >
                {link.label}

                {isActive(link.href) && (
                  <span className="active-line absolute bottom-0 left-0 h-px w-full origin-left bg-black" />
                )}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <Link
            href="/contact"
            className="navbar-cta bg-[#000000] px-6 py-3 text-xs font-semibold uppercase tracking-[0.1em] text-white"
          >
            Get a Quote
          </Link>
        </nav>
      </header>

      {/* ================= MOBILE HEADER ================= */}
      <header className="fixed inset-x-0 top-0 z-50 flex h-16 items-center justify-between border-b border-[#747878]/15 bg-[#fbf9f6] px-6 md:hidden">
        <Link
          href="/"
          className="mobile-navbar-logo font-serif text-xl tracking-tight text-[#1b1c1a]"
        >
          Mauli Interior
        </Link>

        <button
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label="Open navigation"
          className="mobile-menu-button text-[#1b1c1a]"
        >
          <Menu size={24} strokeWidth={1.7} />
        </button>
      </header>

      {/* ================= MOBILE NAVIGATION ================= */}
      <div
        className={`fixed inset-0 z-[60] bg-[#fbf9f6] transition-transform duration-300 ease-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Mobile Header */}
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
            className="text-[#1b1c1a] transition-transform duration-300 hover:rotate-90"
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

      {/* ================= ANIMATION STYLES ================= */}
      <style jsx>{`
        /* Logo */
        .navbar-logo {
          opacity: 0;
          animation: navbarFadeDown 0.7s cubic-bezier(0.22, 1, 0.36, 1)
            forwards;
        }

        /* Navigation links */
        .navbar-link {
          opacity: 0;
          animation: navbarFadeDown 0.6s cubic-bezier(0.22, 1, 0.36, 1)
            forwards;
        }

        /* CTA */
        .navbar-cta {
          opacity: 0;
          animation: navbarFadeDown 0.7s 0.5s
            cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        /* Main animation */
        @keyframes navbarFadeDown {
          from {
            opacity: 0;
            transform: translateY(-18px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Active underline */
        .active-line {
          animation: lineReveal 0.45s 0.7s ease-out both;
        }

        @keyframes lineReveal {
          from {
            transform: scaleX(0);
          }

          to {
            transform: scaleX(1);
          }
        }

        /* Desktop link hover */
        .navbar-link::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          width: 0;
          height: 1px;
          background: #000;
          transition: width 0.3s ease;
        }

        .navbar-link:hover::after {
          width: 100%;
        }

        /* CTA hover */
        .navbar-cta {
          transition:
            transform 0.3s ease,
            background-color 0.3s ease;
        }

        .navbar-cta:hover {
          transform: translateY(-2px);
          background-color: #30312f;
        }

        /* Mobile */
        .mobile-navbar-logo {
          animation: mobileLogoEnter 0.6s ease-out both;
        }

        .mobile-menu-button {
          animation: mobileButtonEnter 0.6s 0.15s ease-out both;
        }

        @keyframes mobileLogoEnter {
          from {
            opacity: 0;
            transform: translateX(-15px);
          }

          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes mobileButtonEnter {
          from {
            opacity: 0;
            transform: translateX(15px);
          }

          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .navbar-logo,
          .navbar-link,
          .navbar-cta,
          .active-line,
          .mobile-navbar-logo,
          .mobile-menu-button {
            opacity: 1;
            animation: none;
          }
        }
      `}</style>
    </>
  );
}