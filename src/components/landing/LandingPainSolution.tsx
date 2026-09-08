"use client";

import { useTranslations } from "next-intl";
import { XCircle, CheckCircle2, AlertTriangle, Zap } from "lucide-react";
import { BentoCard } from "@/components/ui/BentoCard";

export function LandingPainSolution() {
  const t = useTranslations("landing.problemSolution");

  const traditionalPoints = [
    t("traditionalItems.0"),
    t("traditionalItems.1"),
    t("traditionalItems.2"),
    t("traditionalItems.3"),
    t("traditionalItems.4"),
  ];

  const syncroPoints = [
    t("syncroItems.0"),
    t("syncroItems.1"),
    t("syncroItems.2"),
    t("syncroItems.3"),
    t("syncroItems.4"),
  ];

  return (
    <section id="beneficios" className="py-24 relative border-y border-black/5 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FF3B30]/10 border border-[#FF3B30]/20 text-[#FF3B30] text-xs font-semibold uppercase tracking-wider mb-4">
            <AlertTriangle size={13} />
            <span>{t("badge")}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1D1D1F] dark:text-white tracking-tight mb-4 font-heading" style={{ textWrap: "balance" }}>
            {t("title")}
          </h2>
          <p className="text-base sm:text-lg text-[#515154] dark:text-[#A1A1A6] leading-relaxed" style={{ textWrap: "pretty" }}>
            {t("subtitle")}
          </p>
        </div>

        {/* 2-Column Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Traditional Card (Bento Style) */}
          <div className="rounded-3xl bg-white dark:bg-[#2C2C2E] border border-black/5 dark:border-white/10 p-7 sm:p-8 relative overflow-hidden shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-black/5 dark:border-white/10">
              <div className="w-10 h-10 rounded-2xl bg-[#FF3B30]/10 border border-[#FF3B30]/20 flex items-center justify-center text-[#FF3B30]">
                <XCircle size={22} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#1D1D1F] dark:text-white font-heading">
                  {t("traditionalTitle")}
                </h3>
                <span className="text-xs text-[#FF3B30] font-semibold">
                  Ineficiente y propenso a errores
                </span>
              </div>
            </div>

            <ul className="space-y-4">
              {traditionalPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-3 text-[#515154] dark:text-[#A1A1A6] text-sm sm:text-base">
                  <XCircle size={18} className="text-[#FF3B30] flex-shrink-0 mt-0.5" />
                  <span className="leading-snug">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* SyncroTime Card (BentoCard with Ambient Glow) */}
          <BentoCard glowColor="#007AFF" className="p-7 sm:p-8">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-black/5 dark:border-white/10">
              <div className="w-10 h-10 rounded-2xl bg-[#007AFF]/10 border border-[#007AFF]/25 flex items-center justify-center text-[#007AFF] dark:text-[#52A6FF]">
                <Zap size={22} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#1D1D1F] dark:text-white flex items-center gap-2 font-heading">
                  {t("syncroTitle")}
                  <span className="px-2.5 py-0.5 rounded-full bg-[#007AFF]/10 border border-[#007AFF]/25 text-[#007AFF] dark:text-[#52A6FF] text-[11px] font-semibold">
                    Recomendado
                  </span>
                </h3>
                <span className="text-xs text-[#34C759] font-semibold">
                  Optimización matemática garantizada
                </span>
              </div>
            </div>

            <ul className="space-y-4 relative z-10">
              {syncroPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-3 text-[#1D1D1F] dark:text-[#F5F5F7] text-sm sm:text-base font-medium">
                  <CheckCircle2 size={18} className="text-[#34C759] flex-shrink-0 mt-0.5" />
                  <span className="leading-snug">{point}</span>
                </li>
              ))}
            </ul>
          </BentoCard>
        </div>
      </div>
    </section>
  );
}
