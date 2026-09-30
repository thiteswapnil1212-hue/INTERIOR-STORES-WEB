"use client";

import { useState } from "react";
import { PRIMARY_PHONE_DISPLAY } from "../../lib/contact";

const faqs = [
  {
    question: "What does Mauli Interior make?",
    answer:
      "Custom sofas, curtains, beds, mattresses, cushions, and wall / bed panels. Everything is made to measure for your space.",
  },
  {
    question: "Which areas do you serve?",
    answer:
      "Pune, Pimpri-Chinchwad (PCMC), Bhosari, Moshi, and nearby areas.",
  },
  {
    question: "Do you visit my home for measurements?",
    answer:
      "Yes. We visit homes across Pune and PCMC to take measurements and understand your requirements before starting work.",
  },
  {
    question: "How do I get a price quote?",
    answer:
      `Send your requirement through the enquiry form, call ${PRIMARY_PHONE_DISPLAY}, or message us on WhatsApp. We'll discuss your space and share a quote.`,
  },
  {
    question: "Where is your workshop?",
    answer: "Godown Chowk, Alankapuram Road, Bhosari, Pune.",
  },
  {
    question: "How long does an order take?",
    answer:
      "It depends on the design and materials. Share your requirement with us and we'll give you a clear timeline along with your quote.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      aria-labelledby="faq-heading"
      className="border-t border-[#747878]/15 bg-[#fbf9f6]"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="mx-auto max-w-[1000px] px-5 py-14 sm:px-8 sm:py-16 md:px-12 md:py-20">
        <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#805533]">
          Common questions
        </p>

        <h2
          id="faq-heading"
          className="font-serif text-3xl tracking-tight sm:text-4xl md:text-5xl"
        >
          Before you ask.
        </h2>

        <div className="mt-8 divide-y divide-[#747878]/15 border-y border-[#747878]/15">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={faq.question}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  className="flex w-full items-center justify-between gap-6 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#805533]"
                >
                  <span className="text-[15px] font-medium text-[#1b1c1a] sm:text-base">
                    {faq.question}
                  </span>

                  <span
                    aria-hidden="true"
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#747878]/25 text-lg text-[#805533] transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                <div
                  id={`faq-answer-${index}`}
                  className={`grid transition-all duration-300 ease-out motion-reduce:transition-none ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-2xl pb-6 pr-10 text-sm leading-7 text-[#5c5e5c]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
