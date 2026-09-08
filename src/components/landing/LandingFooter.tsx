"use client";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app.syncrotime.com";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Globe } from "lucide-react";

interface LandingFooterProps {
  locale: string;
}

export function LandingFooter({ locale }: LandingFooterProps) {
  const t = useTranslations("landing.footer");
  const tNav = useTranslations("landing.nav");

  const languages = [
    { code: "es", label: "Español", flag: "🇪🇸" },
    { code: "en", label: "English", flag: "🇺🇸" },
    { code: "pt", label: "Português", flag: "🇧🇷" },
  ];

  return (
    <footer className="bg-white dark:bg-[#1C1C1E] border-t border-black/5 dark:border-white/10 text-[#515154] dark:text-[#A1A1A6] text-sm transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Col 1: Brand */}
          <div className="md:col-span-2 space-y-4">
            <Link href={`/${locale}/`} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-white dark:bg-[#2C2C2E] border border-black/5 dark:border-white/10 shadow-sm p-1.5 flex items-center justify-center flex-shrink-0">
                <Image
                  src="/logo.png"
                  alt="SyncroTime Logo"
                  width={22}
                  height={22}
                  className="object-contain"
                />
              </div>
              <span className="text-lg font-bold tracking-tight text-[#1D1D1F] dark:text-white font-heading">
                Syncro<span className="text-[#007AFF] dark:text-[#52A6FF]">Time</span>
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-[#6E6E73] dark:text-[#A1A1A6] max-w-md leading-relaxed" style={{ textWrap: "pretty" }}>
              {t("description")}
            </p>

            <div className="pt-2 flex items-center gap-2">
              <Globe size={14} className="text-[#007AFF] dark:text-[#52A6FF]" />
              <span className="text-xs text-[#6E6E73] dark:text-[#A1A1A6]">{t("language")}:</span>
              <div className="flex items-center gap-2">
                {languages.map((lang) => (
                  <Link
                    key={lang.code}
                    href={`/${lang.code}/`}
                    className={`px-2.5 py-0.5 rounded-full text-xs transition-colors ${
                      lang.code === locale
                        ? "bg-[#007AFF]/10 text-[#007AFF] dark:text-[#52A6FF] font-bold border border-[#007AFF]/25"
                        : "text-[#6E6E73] dark:text-[#A1A1A6] hover:text-[#1D1D1F] dark:hover:text-white"
                    }`}
                  >
                    {lang.flag} {lang.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#1D1D1F] dark:text-white mb-4">
              {t("navTitle")}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#caracteristicas" className="hover:text-[#007AFF] dark:hover:text-white transition-colors">
                  {tNav("features")}
                </a>
              </li>
              <li>
                <a href="#beneficios" className="hover:text-[#007AFF] dark:hover:text-white transition-colors">
                  {tNav("comparison")}
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="hover:text-[#007AFF] dark:hover:text-white transition-colors">
                  {tNav("howItWorks")}
                </a>
              </li>
              <li>
                <a href="#precios" className="hover:text-[#007AFF] dark:hover:text-white transition-colors">
                  {tNav("pricing")}
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#007AFF] dark:hover:text-white transition-colors">
                  {tNav("faq")}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Legal & Auth */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#1D1D1F] dark:text-white mb-4">
              {t("legalTitle")}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href={`/${locale}/terms/`} className="hover:text-[#007AFF] dark:hover:text-white transition-colors">
                  {t("terms")}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/privacy/`} className="hover:text-[#007AFF] dark:hover:text-white transition-colors">
                  {t("privacy")}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/refunds/`} className="hover:text-[#007AFF] dark:hover:text-white transition-colors">
                  {t("refunds")}
                </Link>
              </li>
              <li>
                <Link href={`${APP_URL}/${locale}/login`} className="hover:text-[#007AFF] dark:hover:text-white transition-colors">
                  {t("login")}
                </Link>
              </li>
              <li>
                <Link href={`${APP_URL}/${locale}/register`} className="hover:text-[#007AFF] dark:hover:text-white transition-colors">
                  {t("register")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-black/5 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8E8E93]">
          <p>© {new Date().getFullYear()} SyncroTime. {t("rights")}</p>
          <p className="text-[11px] text-[#8E8E93]">
            Generador de Horarios Escolares y Universitarios • Motor de Optimización Algorítmica
          </p>
        </div>
      </div>
    </footer>
  );
}
