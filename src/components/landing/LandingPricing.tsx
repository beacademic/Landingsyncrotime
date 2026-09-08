"use client";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app.syncrotime.com";

import { useState } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Check, ArrowRight, ShieldCheck, Tag } from "lucide-react";

interface LandingPricingProps {
  locale: string;
}

export function LandingPricing({ locale }: LandingPricingProps) {
  const t = useTranslations("landing.pricing");
  const [billingPeriod, setBillingPeriod] = useState<"annual" | "monthly">("annual");

  const features = [
    t("feat1"),
    t("feat2"),
    t("feat3"),
    t("feat4"),
    t("feat5"),
    t("feat6"),
    t("feat7"),
  ];

  return (
    <section id="precios" className="py-24 relative overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#007AFF]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#007AFF]/10 border border-[#007AFF]/20 text-[#007AFF] dark:text-[#52A6FF] text-xs font-semibold uppercase tracking-wider mb-4">
            <Tag size={13} />
            <span>{t("badge")}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1D1D1F] dark:text-white tracking-tight mb-4 font-heading" style={{ textWrap: "balance" }}>
            {t("title")}
          </h2>
          <p className="text-base sm:text-lg text-[#515154] dark:text-[#A1A1A6] leading-relaxed" style={{ textWrap: "pretty" }}>
            {t("subtitle")}
          </p>

          {/* Billing Switcher Toggle (Apple Segmented Style) */}
          <div className="mt-8 inline-flex items-center p-1 rounded-full bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 shadow-inner">
            <button
              type="button"
              onClick={() => setBillingPeriod("monthly")}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                billingPeriod === "monthly"
                  ? "bg-white dark:bg-[#2C2C2E] text-[#1D1D1F] dark:text-white shadow-sm"
                  : "text-[#515154] dark:text-[#A1A1A6] hover:text-[#1D1D1F] dark:hover:text-white"
              }`}
            >
              {t("billingMonthly")}
            </button>
            <button
              type="button"
              onClick={() => setBillingPeriod("annual")}
              className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                billingPeriod === "annual"
                  ? "bg-white dark:bg-[#2C2C2E] text-[#1D1D1F] dark:text-white shadow-sm"
                  : "text-[#515154] dark:text-[#A1A1A6] hover:text-[#1D1D1F] dark:hover:text-white"
              }`}
            >
              <span>{t("billingAnnual")}</span>
              <span className="px-2 py-0.5 rounded-full bg-[#34C759]/15 text-[#34C759] text-[10px] font-bold border border-[#34C759]/25">
                {t("annualBadge")}
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Card (Bento Card architecture) */}
        <div className="max-w-lg mx-auto">
          <div className="rounded-3xl bg-white dark:bg-[#2C2C2E] border border-black/5 dark:border-white/10 p-8 sm:p-10 shadow-lg hover:shadow-2xl dark:shadow-black/30 backdrop-blur-2xl relative overflow-hidden group transition-all duration-300">
            {/* Resplandor ambiental superior en hover */}
            <div
              className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
              style={{ background: "radial-gradient(circle at 50% 0%, rgba(0, 122, 255, 0.18), transparent 70%)" }}
            />
            {/* Línea de brillo sutil en el borde superior */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-black/5 dark:via-white/15 to-transparent" />

            {/* Top Recommended Tag */}
            <div className="absolute top-6 right-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold text-white bg-gradient-to-r from-[#007AFF] to-[#5856D6] shadow-[0_2px_10px_rgba(0,122,255,0.25)]">
                PLAN COMPLETO
              </span>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold text-[#1D1D1F] dark:text-white mb-1.5 font-heading">
                SyncroTime Pro
              </h3>
              <p className="text-xs text-[#515154] dark:text-[#A1A1A6]">
                Todo lo que tu institución necesita para generar horarios sin fricción.
              </p>
            </div>

            {/* Price Display */}
            <div className="mb-8 pb-6 border-b border-black/5 dark:border-white/10">
              <div className="flex items-baseline gap-2">
                <span className="text-5xl sm:text-6xl font-extrabold text-[#1D1D1F] dark:text-white font-mono tracking-tight">
                  {billingPeriod === "annual" ? "$33" : "$42"}
                </span>
                <span className="text-[#515154] dark:text-[#A1A1A6] text-sm font-medium">USD {t("perMonth")}</span>
              </div>
              <p className="text-xs text-[#007AFF] dark:text-[#52A6FF] font-semibold mt-2">
                {billingPeriod === "annual"
                  ? t("annualEquivalent")
                  : t("monthlyEquivalent")}
              </p>
            </div>

            {/* CTA Button */}
            <Link
              href={`${APP_URL}/${locale}/register?plan=pro&billing=${billingPeriod}`}
              className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-full bg-gradient-to-r from-[#007AFF] to-[#5856D6] shadow-[0_4px_14px_rgba(0,122,255,0.25)] hover:shadow-[0_6px_20px_rgba(0,122,255,0.35)] hover:opacity-95 text-white font-bold text-base active:scale-[0.98] transition-all duration-200 mb-4"
            >
              <span>{t("cta")}</span>
              <ArrowRight size={18} />
            </Link>

            <p className="text-center text-xs text-[#6E6E73] dark:text-[#A1A1A6] mb-8 flex items-center justify-center gap-1.5">
              <ShieldCheck size={14} className="text-[#34C759]" />
              <span>{t("subtext")}</span>
            </p>

            {/* Feature List */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#1D1D1F] dark:text-white mb-4">
                {t("featuresTitle")}
              </h4>
              <ul className="space-y-3.5">
                {features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-[#515154] dark:text-[#A1A1A6]">
                    <div className="w-5 h-5 rounded-full bg-[#34C759]/10 border border-[#34C759]/25 flex items-center justify-center flex-shrink-0 mt-0.5 text-[#34C759]">
                      <Check size={12} />
                    </div>
                    <span className="leading-tight text-[#1D1D1F] dark:text-[#F5F5F7] font-medium">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
