"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { siteConfig } from "@/config/site-config";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-py bg-jamaica-cream">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions US Travelers Ask Us"
          description="Resort transfers, pricing, payment, and group travel — answered straight."
        />

        <div className="mt-8 space-y-2 sm:mt-12 sm:space-y-3">
          {siteConfig.faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-xl border-2 border-jamaica-green/10 bg-white"
              >
                <button
                  type="button"
                  className="flex min-h-12 w-full touch-manipulation items-center justify-between gap-3 px-4 py-4 text-left active:bg-jamaica-cream sm:gap-4 sm:px-5"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-bold leading-snug text-jamaica-black sm:text-base">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-jamaica-green transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="border-t border-jamaica-green/10 px-5 pb-4 pt-2">
                    <p className="text-sm leading-relaxed text-jamaica-black-soft/80">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
