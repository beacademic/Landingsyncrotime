"use client";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app.syncrotime.com";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { ArrowRight, ShieldCheck, Zap, Clock, Users, Award } from "lucide-react";
import { SchedulePreviewDemo } from "./SchedulePreviewDemo";
import { StatusBadge } from "@/components/ui/StatusBadge";

interface LandingHeroProps {
  locale: string;
}

export function LandingHero({ locale }: LandingHeroProps) {
  const t = useTranslations("landing.hero");

  return (
    <section className="relative pt-32 pb-20 lg:pt-36 lg:pb-28 overflow-hidden">
      {/* Background Soft Lighting Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[850px] h-[450px] bg-gradient-to-tr from-[#007AFF]/15 via-[#5856D6]/10 to-transparent rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Top Pill Badge */}
          <div className="mb-6">
            <StatusBadge
              label={t("badge")}
              variant="primary"
              pulse={true}
              className="py-1.5 px-4 text-xs sm:text-sm font-semibold shadow-sm"
            />
          </div>

          {/* Primary Semantic H1 Header */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1D1D1F] dark:text-white leading-[1.15] mb-6 font-heading" style={{ textWrap: "balance" }}>
            {t("title1")}{" "}
            <span className="bg-gradient-to-r from-[#007AFF] to-[#5856D6] bg-clip-text text-transparent block sm:inline">
              {t("titleHighlight")}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-[#515154] dark:text-[#A1A1A6] max-w-2xl mx-auto leading-relaxed mb-8" style={{ textWrap: "pretty" }}>
            {t("subtitle")}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto justify-center mb-6">
            <Link
              href={`${APP_URL}/${locale}/register`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-base text-white tracking-tight bg-gradient-to-r from-[#007AFF] to-[#5856D6] shadow-[0_4px_14px_rgba(0,122,255,0.25)] hover:shadow-[0_6px_20px_rgba(0,122,255,0.35)] hover:opacity-95 active:scale-[0.98] transition-all duration-200"
            >
              <span>{t("ctaPrimary")}</span>
              <ArrowRight size={18} />
            </Link>

            <a
              href="#beneficios"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white dark:bg-[#2C2C2E] border border-black/5 dark:border-white/10 text-[#1D1D1F] dark:text-[#F5F5F7] font-semibold text-base shadow-sm hover:shadow-md hover:bg-[#E8E8ED]/50 dark:hover:bg-[#3A3A3C] active:scale-[0.98] transition-all duration-200"
            >
              <span>{t("ctaSecondary")}</span>
            </a>
          </div>

          {/* Micro-guarantee */}
          <p className="text-xs sm:text-sm text-[#8E8E93] flex items-center gap-2 justify-center">
            <ShieldCheck size={16} className="text-[#34C759]" />
            <span>{t("microGuarantee")}</span>
          </p>
        </div>

        {/* Live Interactive Schedule Demo Preview */}
        <div className="mt-14 max-w-5xl mx-auto">
          <SchedulePreviewDemo />
        </div>

        {/* Trust Badges & Stats Grid (Bento cards) */}
        <div className="mt-16 pt-12 border-t border-black/5 dark:border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-5 rounded-3xl bg-white dark:bg-[#2C2C2E] border border-black/5 dark:border-white/10 shadow-sm hover:shadow-md transition-all">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#007AFF] dark:text-[#52A6FF] font-mono flex items-center justify-center gap-2">
              <Clock size={20} />
              {t("stat1Value")}
            </div>
            <div className="text-xs sm:text-sm text-[#6E6E73] dark:text-[#A1A1A6] mt-1.5 font-medium">
              {t("stat1Label")}
            </div>
          </div>

          <div className="p-5 rounded-3xl bg-white dark:bg-[#2C2C2E] border border-black/5 dark:border-white/10 shadow-sm hover:shadow-md transition-all">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#34C759] font-mono flex items-center justify-center gap-2">
              <Zap size={20} />
              {t("stat2Value")}
            </div>
            <div className="text-xs sm:text-sm text-[#6E6E73] dark:text-[#A1A1A6] mt-1.5 font-medium">
              {t("stat2Label")}
            </div>
          </div>

          <div className="p-5 rounded-3xl bg-white dark:bg-[#2C2C2E] border border-black/5 dark:border-white/10 shadow-sm hover:shadow-md transition-all">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#5856D6] font-mono flex items-center justify-center gap-2">
              <Users size={20} />
              {t("stat3Value")}
            </div>
            <div className="text-xs sm:text-sm text-[#6E6E73] dark:text-[#A1A1A6] mt-1.5 font-medium">
              {t("stat3Label")}
            </div>
          </div>

          <div className="p-5 rounded-3xl bg-white dark:bg-[#2C2C2E] border border-black/5 dark:border-white/10 shadow-sm hover:shadow-md transition-all">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#FF9500] font-mono flex items-center justify-center gap-2">
              <Award size={20} />
              {t("stat4Value")}
            </div>
            <div className="text-xs sm:text-sm text-[#6E6E73] dark:text-[#A1A1A6] mt-1.5 font-medium">
              {t("stat4Label")}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
