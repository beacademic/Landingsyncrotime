"use client";

import { useTranslations } from "next-intl";
import { Compass, Settings2, Sliders, CheckCheck } from "lucide-react";
import { BentoCard } from "@/components/ui/BentoCard";

export function LandingHowItWorks() {
  const t = useTranslations("landing.howItWorks");

  const steps = [
    {
      num: t("step1Number"),
      title: t("step1Title"),
      desc: t("step1Desc"),
      icon: Settings2,
      glowColor: "#007AFF",
    },
    {
      num: t("step2Number"),
      title: t("step2Title"),
      desc: t("step2Desc"),
      icon: Sliders,
      glowColor: "#5856D6",
    },
    {
      num: t("step3Number"),
      title: t("step3Title"),
      desc: t("step3Desc"),
      icon: CheckCheck,
      glowColor: "#34C759",
    },
  ];

  return (
    <section id="como-funciona" className="py-24 relative border-t border-black/5 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#007AFF]/10 border border-[#007AFF]/20 text-[#007AFF] dark:text-[#52A6FF] text-xs font-semibold uppercase tracking-wider mb-4">
            <Compass size={13} />
            <span>{t("badge")}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1D1D1F] dark:text-white tracking-tight mb-4 font-heading" style={{ textWrap: "balance" }}>
            {t("title")}
          </h2>
          <p className="text-base sm:text-lg text-[#515154] dark:text-[#A1A1A6] leading-relaxed" style={{ textWrap: "pretty" }}>
            {t("subtitle")}
          </p>
        </div>

        {/* 3 Step Process Flow */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <BentoCard
                key={idx}
                glowColor={step.glowColor}
                className="p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-3xl font-black text-[#007AFF] dark:text-[#52A6FF]">
                      {step.num}
                    </span>
                    <div className="w-10 h-10 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 flex items-center justify-center text-[#007AFF] dark:text-[#52A6FF] group-hover:scale-105 transition-transform">
                      <Icon size={20} />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-[#1D1D1F] dark:text-white mb-3 font-heading">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#515154] dark:text-[#A1A1A6] leading-relaxed" style={{ textWrap: "pretty" }}>
                    {step.desc}
                  </p>
                </div>
              </BentoCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
