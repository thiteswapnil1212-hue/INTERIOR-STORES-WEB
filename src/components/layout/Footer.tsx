import Link from "next/link";
import { WHATSAPP_NUMBER, PRIMARY_PHONE_DISPLAY, PRIMARY_TEL_HREF, SECONDARY_PHONE_DISPLAY, SECONDARY_TEL_HREF } from "../../lib/contact";



const footerLinks = [
  {
    label: "Pages",
    links: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "Custom Sofas", href: "/services/sofas" },
      { label: "Products", href: "/products" },
      { label: "Projects", href: "/projects" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "3D Studio", href: "/3d-studio" },
    ],
  },
];

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="border-t border-[#747878]/15 bg-[#1b1c1a] text-[#fbf9f6]">
      <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 sm:py-16 md:px-12 lg:px-16">

        {/* Top Row */}
        <div className="grid gap-10 md:grid-cols-12 md:gap-8">

          {/* Brand */}
          <div className="md:col-span-5">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#c5a47e]">
              Mauli Interior
            </p>

            <p className="mt-4 max-w-xs text-sm leading-7 text-[#b9bab6]">
              Custom sofas, curtains, beds and home furnishing solutions for
              homes across Pune and Pimpri-Chinchwad.
            </p>

            {/* Contact */}
            <div className="mt-8 space-y-3">
              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#8b8d89]">
                  Phone
                </p>
                <a
                  href={PRIMARY_TEL_HREF}
                  className="mt-1 block text-sm text-[#d5d6d2] transition-colors hover:text-[#c5a47e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c5a47e]"
                >
                  {PRIMARY_PHONE_DISPLAY}
                </a>
                <a
                  href={SECONDARY_TEL_HREF}
                  className="block text-sm text-[#d5d6d2] transition-colors hover:text-[#c5a47e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c5a47e]"
                >
                  {SECONDARY_PHONE_DISPLAY}
                </a>
              </div>

              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#8b8d89]">
                  Email
                </p>
                <a
                  href="mailto:thiteswapnil1212@gmail.com"
                  className="mt-1 block break-all text-sm text-[#d5d6d2] transition-colors hover:text-[#c5a47e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c5a47e]"
                >
                  thiteswapnil1212@gmail.com
                </a>
              </div>

              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#8b8d89]">
                  Workshop
                </p>
                <address className="mt-1 not-italic text-sm leading-6 text-[#d5d6d2]">
                  Godown Chowk, Alankapuram Road,
                  <br />
                  Bhosari, Pune
                </address>
              </div>
            </div>

            {/* WhatsApp */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 inline-flex min-h-11 items-center gap-3 border border-[#fbf9f6]/20 px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#fbf9f6] transition-[border-color,color] duration-300 hover:border-[#c5a47e] hover:text-[#c5a47e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c5a47e]"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="shrink-0"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp
            </a>
          </div>

          {/* Links */}
          <div className="md:col-span-3 md:col-start-7">
            {footerLinks.map((group) => (
              <nav key={group.label} aria-label={`${group.label} footer navigation`}>
                <p className="mb-5 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#8b8d89]">
                  {group.label}
                </p>
                <ul className="space-y-3">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="inline-block py-1.5 text-sm text-[#b9bab6] transition-colors hover:text-[#fbf9f6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c5a47e]"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>

          {/* Service Area */}
          <div className="md:col-span-3 md:col-start-10">
            <p className="mb-5 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#8b8d89]">
              Service Area
            </p>
            <ul className="space-y-2 text-sm text-[#b9bab6]">
              {["Pune", "Pimpri-Chinchwad", "Bhosari", "Moshi"].map((area) => (
                <li key={area} className="flex items-center gap-2">
                  <span className="h-1 w-1 shrink-0 rounded-full bg-[#c5a47e]" aria-hidden="true" />
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="mt-14 flex flex-col gap-3 border-t border-[#fbf9f6]/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[11px] text-[#b9bab6]">
            {`© ${currentYear} Mauli Interior. All rights reserved.`}
          </p>

          <p className="text-[11px] text-[#b9bab6]">
            Pune · Pimpri-Chinchwad · Since 2009
          </p>
        </div>
      </div>
    </footer>
  );
}
