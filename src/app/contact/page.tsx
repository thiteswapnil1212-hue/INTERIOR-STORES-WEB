
import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";
import BreadcrumbJsonLd from "../../components/seo/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Mauli Interior for custom sofas, curtains, beds and home furnishing enquiries in Pune and PCMC. Call, email, or send a WhatsApp message.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ]}
      />
      <ContactPageClient />
    </>
  );
}