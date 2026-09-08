"use client";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app.syncrotime.com";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { ArrowRight, ShieldCheck, Zap } from "lucide-react";

interface LandingCtaSectionProps {
  locale: string;
}

export function LandingCtaSection({ locale }: LandingCtaSectionProps) {
  const t = useTranslations("landing.ctaSection");

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-white dark:bg-[#2C2C2E] border border-black/5 dark:border-white/10 p-8 sm:p-14 text-center overflow-hidden shadow-xl dark:shadow-black/20 backdrop-blur-2xl">
          {/* Ambient Glow */}
          <div
            className="pointer-events-none absolute -inset-px rounded-3xl opacity-50 dark:opacity-40 blur-2xl"
            style={{ background: "radial-gradient(circle at 50% 0%, rgba(0, 122, 255, 0.2), rgba(88, 86, 214, 0.15) 50%, transparent 80%)" }}
          />
          {/* Top specular border highlight */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-black/5 dark:via-white/15 to-transparent" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#007AFF]/10 border border-[#007AFF]/20 text-[#007AFF] dark:text-[#52A6FF] text-xs font-semibold uppercase tracking-wider mb-6">
              <Zap size={13} />
              <span>Prueba 100% Sin Riesgo</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1D1D1F] dark:text-white tracking-tight leading-tight mb-4 font-heading" style={{ textWrap: "balance" }}>
              {t("title")}
            </h2>

            <p className="text-base sm:text-lg text-[#515154] dark:text-[#A1A1A6] mb-8 max-w-xl mx-auto" style={{ textWrap: "pretty" }}>
              {t("subtitle")}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <Link
                href={`${APP_URL}/${locale}/register`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#007AFF] to-[#5856D6] shadow-[0_4px_14px_rgba(0,122,255,0.25)] hover:shadow-[0_6px_20px_rgba(0,122,255,0.35)] text-white font-bold text-base active:scale-[0.98] transition-all duration-200"
              >
                <span>{t("primaryCta")}</span>
                <ArrowRight size={18} />
              </Link>

              <Link
                href={`${APP_URL}/${locale}/login`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 text-[#1D1D1F] dark:text-[#F5F5F7] font-semibold text-base hover:bg-black/10 dark:hover:bg-white/10 active:scale-[0.98] transition-all duration-200"
              >
                <span>{t("secondaryCta")}</span>
              </Link>
            </div>

            <p className="text-xs sm:text-sm text-[#8E8E93] flex items-center justify-center gap-2">
              <ShieldCheck size={16} className="text-[#34C759]" />
              <span>{t("note")}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
