"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { HelpCircle, ChevronDown } from "lucide-react";

export function LandingFAQ() {
  const t = useTranslations("landing.faq");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqItems = [
    { q: t("q1"), a: t("a1") },
    { q: t("q2"), a: t("a2") },
    { q: t("q3"), a: t("a3") },
    { q: t("q4"), a: t("a4") },
    { q: t("q5"), a: t("a5") },
  ];

  const toggleIndex = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#007AFF]/10 border border-[#007AFF]/20 text-[#007AFF] dark:text-[#52A6FF] text-xs font-semibold uppercase tracking-wider mb-4">
            <HelpCircle size={13} />
            <span>{t("badge")}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1D1D1F] dark:text-white tracking-tight mb-4 font-heading" style={{ textWrap: "balance" }}>
            {t("title")}
          </h2>
          <p className="text-base sm:text-lg text-[#515154] dark:text-[#A1A1A6] leading-relaxed" style={{ textWrap: "pretty" }}>
            {t("subtitle")}
          </p>
        </div>

        {/* FAQ Accordion List (Bento-style items) */}
        <div className="space-y-4">
          {faqItems.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-white dark:bg-[#2C2C2E] border border-black/5 dark:border-white/10 overflow-hidden shadow-xs hover:border-black/10 dark:hover:border-white/20 transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 focus:outline-none focus:ring-1 focus:ring-[#007AFF] cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-[#1D1D1F] dark:text-white leading-snug font-heading">
                    {item.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-[#007AFF]/15 text-[#007AFF] dark:text-[#52A6FF]" : "text-[#8E8E93]"
                    }`}
                  >
                    <ChevronDown size={18} />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-[#515154] dark:text-[#A1A1A6] leading-relaxed border-t border-black/5 dark:border-white/5">
                    {item.a}
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
