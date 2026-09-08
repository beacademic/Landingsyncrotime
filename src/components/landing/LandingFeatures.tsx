"use client";

import { useTranslations } from "next-intl";
import {
  Zap,
  UserCheck,
  Building2,
  FileSpreadsheet,
  BarChart3,
  Globe,
  Layers,
} from "lucide-react";
import { BentoCard } from "@/components/ui/BentoCard";

export function LandingFeatures() {
  const t = useTranslations("landing.features");

  const features = [
    {
      icon: Zap,
      title: t("f1Title"),
      desc: t("f1Desc"),
      glowColor: "#007AFF",
      iconBg: "bg-[#007AFF]/10 text-[#007AFF] dark:text-[#52A6FF] border-[#007AFF]/20",
    },
    {
      icon: UserCheck,
      title: t("f2Title"),
      desc: t("f2Desc"),
      glowColor: "#FF2D55",
      iconBg: "bg-[#FF2D55]/10 text-[#FF2D55] border-[#FF2D55]/20",
    },
    {
      icon: Building2,
      title: t("f3Title"),
      desc: t("f3Desc"),
      glowColor: "#34C759",
      iconBg: "bg-[#34C759]/10 text-[#34C759] border-[#34C759]/20",
    },
    {
      icon: FileSpreadsheet,
      title: t("f4Title"),
      desc: t("f4Desc"),
      glowColor: "#FF9500",
      iconBg: "bg-[#FF9500]/10 text-[#FF9500] dark:text-[#FF9F0A] border-[#FF9500]/20",
    },
    {
      icon: BarChart3,
      title: t("f5Title"),
      desc: t("f5Desc"),
      glowColor: "#007AFF",
      iconBg: "bg-[#007AFF]/10 text-[#007AFF] dark:text-[#52A6FF] border-[#007AFF]/20",
    },
    {
      icon: Globe,
      title: t("f6Title"),
      desc: t("f6Desc"),
      glowColor: "#5856D6",
      iconBg: "bg-[#5856D6]/10 text-[#5856D6] dark:text-[#8B5CF6] border-[#5856D6]/20",
    },
  ];

  return (
    <section id="caracteristicas" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#007AFF]/10 border border-[#007AFF]/20 text-[#007AFF] dark:text-[#52A6FF] text-xs font-semibold uppercase tracking-wider mb-4">
            <Layers size={13} />
            <span>{t("badge")}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1D1D1F] dark:text-white tracking-tight mb-4 font-heading" style={{ textWrap: "balance" }}>
            {t("title")}
          </h2>
          <p className="text-base sm:text-lg text-[#515154] dark:text-[#A1A1A6] leading-relaxed" style={{ textWrap: "pretty" }}>
            {t("subtitle")}
          </p>
        </div>

        {/* 6 Bento Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <BentoCard
                key={idx}
                glowColor={item.glowColor}
                className="p-7 flex flex-col justify-between"
              >
                <div>
                  <div
                    className={`w-12 h-12 rounded-2xl border flex items-center justify-center mb-6 transition-transform group-hover:scale-105 shadow-xs ${item.iconBg}`}
                  >
                    <Icon size={22} />
                  </div>
                  <h3 className="text-xl font-bold text-[#1D1D1F] dark:text-white mb-3 font-heading">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#515154] dark:text-[#A1A1A6] leading-relaxed" style={{ textWrap: "pretty" }}>
                    {item.desc}
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
