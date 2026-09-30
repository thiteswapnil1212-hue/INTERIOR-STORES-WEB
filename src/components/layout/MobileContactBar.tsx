"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone } from "lucide-react";
import {
  WHATSAPP_NUMBER,
  PRIMARY_PHONE_DISPLAY,
  PRIMARY_TEL_HREF,
} from "../../lib/contact";

const prefilledMessage = encodeURIComponent(
  "Hello Mauli Interior! I'd like to enquire about your services."
);

/**
 * Sticky bottom contact bar, mobile only.
 * Most visitors are on phones — this keeps Call and WhatsApp one tap away
 * without opening the menu. Hidden on the 3D studio, which has its own
 * sticky design-sharing CTA, and on desktop where the header covers it.
 */
export default function MobileContactBar() {
  const pathname = usePathname();
  if (pathname === "/3d-studio") return null;

  return (
    <>
      <div
        className="fixed inset-x-0 bottom-0 z-40 border-t border-black/10 bg-[#fbf9f6]/95 backdrop-blur-md md:hidden"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <div className="grid grid-cols-2 gap-3 px-4 py-3">
          <a
            href={PRIMARY_TEL_HREF}
            aria-label={`Call Mauli Interior on ${PRIMARY_PHONE_DISPLAY}`}
            className="inline-flex min-h-12 items-center justify-center gap-2 bg-[#1b1c1a] px-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-white transition-colors duration-300 hover:bg-[#805533] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#805533] focus-visible:ring-offset-2"
          >
            <Phone size={15} strokeWidth={2} aria-hidden="true" />
            Call Now
          </a>
          <Link
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${prefilledMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with Mauli Interior on WhatsApp"
            className="inline-flex min-h-12 items-center justify-center gap-2 bg-[#25d366] px-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-white transition-colors duration-300 hover:bg-[#1eb856] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25d366] focus-visible:ring-offset-2"
          >
            <svg
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="shrink-0"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp
          </Link>
        </div>
      </div>
      {/* Spacer so the bar never covers footer content on mobile */}
      <div aria-hidden="true" className="h-[76px] md:hidden" />
    </>
  );
}
