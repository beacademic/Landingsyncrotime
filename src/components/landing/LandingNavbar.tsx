"use client";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app.syncrotime.com";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Globe, Menu, X, ArrowRight } from "lucide-react";

interface LandingNavbarProps {
  locale: string;
}

export function LandingNavbar({ locale }: LandingNavbarProps) {
  const t = useTranslations("landing.nav");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const languages = [
    { code: "es", label: "Español", flag: "🇪🇸" },
    { code: "en", label: "English", flag: "🇺🇸" },
    { code: "pt", label: "Português", flag: "🇧🇷" },
  ];

  const currentLang = languages.find((l) => l.code === locale) || languages[0];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-[#1C1C1E]/80 backdrop-blur-[20px] border-b border-black/5 dark:border-white/10 transition-colors duration-200">
      <nav
        aria-label="Main Navigation"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4"
      >
        {/* Brand Logo with Apple HIG rounded-2xl container */}
        <Link
          href={`/${locale}`}
          className="flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-[#007AFF] rounded-2xl p-1"
        >
          <div className="w-10 h-10 rounded-2xl bg-white dark:bg-[#2C2C2E] border border-black/5 dark:border-white/10 shadow-sm p-1.5 flex items-center justify-center flex-shrink-0">
            <Image
              src="/logo.png"
              alt="SyncroTime Logo"
              width={22}
              height={22}
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-[#1D1D1F] dark:text-white font-heading">
              Syncro<span className="text-[#007AFF] dark:text-[#52A6FF]">Time</span>
            </span>
            <span className="text-[10px] text-[#515154] dark:text-[#A1A1A6] tracking-wider uppercase font-semibold">
              Horarios Inteligentes
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-8">
          <a
            href="#caracteristicas"
            className="text-sm font-medium text-[#515154] hover:text-[#1D1D1F] dark:text-[#A1A1A6] dark:hover:text-[#F5F5F7] transition-colors"
          >
            {t("features")}
          </a>
          <a
            href="#beneficios"
            className="text-sm font-medium text-[#515154] hover:text-[#1D1D1F] dark:text-[#A1A1A6] dark:hover:text-[#F5F5F7] transition-colors"
          >
            {t("comparison")}
          </a>
          <a
            href="#como-funciona"
            className="text-sm font-medium text-[#515154] hover:text-[#1D1D1F] dark:text-[#A1A1A6] dark:hover:text-[#F5F5F7] transition-colors"
          >
            {t("howItWorks")}
          </a>
          <a
            href="#precios"
            className="text-sm font-medium text-[#515154] hover:text-[#1D1D1F] dark:text-[#A1A1A6] dark:hover:text-[#F5F5F7] transition-colors"
          >
            {t("pricing")}
          </a>
          <a
            href="#faq"
            className="text-sm font-medium text-[#515154] hover:text-[#1D1D1F] dark:text-[#A1A1A6] dark:hover:text-[#F5F5F7] transition-colors"
          >
            {t("faq")}
          </a>
        </div>

        {/* Right CTA Actions & Language Selector */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Language Selector Dropdown */}
          <div className="relative">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 border border-black/5 dark:border-white/10 text-xs font-semibold text-[#1D1D1F] dark:text-[#F5F5F7] transition-all cursor-pointer"
              aria-label="Seleccionar idioma"
            >
              <Globe size={14} className="text-[#007AFF] dark:text-[#52A6FF]" />
              <span>{currentLang.flag} {currentLang.code.toUpperCase()}</span>
            </button>

            {langDropdownOpen && (
              <div className="absolute right-0 mt-2 w-36 rounded-2xl bg-white/95 dark:bg-[#2C2C2E]/95 border border-black/5 dark:border-white/10 shadow-2xl py-1.5 z-50 backdrop-blur-2xl">
                {languages.map((lang) => (
                  <Link
                    key={lang.code}
                    href={`/${lang.code}`}
                    onClick={() => setLangDropdownOpen(false)}
                    className={`flex items-center gap-2.5 px-3.5 py-2 text-xs font-medium transition-colors ${
                      lang.code === locale
                        ? "bg-[#007AFF]/10 text-[#007AFF] dark:text-[#52A6FF] font-semibold"
                        : "text-[#515154] dark:text-[#A1A1A6] hover:bg-black/5 dark:hover:bg-white/5 hover:text-[#1D1D1F] dark:hover:text-white"
                    }`}
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.label}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href={`${APP_URL}/${locale}/login`}
            className="text-xs sm:text-sm font-medium text-[#515154] hover:text-[#1D1D1F] dark:text-[#A1A1A6] dark:hover:text-[#F5F5F7] px-3.5 py-2 transition-colors"
          >
            {t("login")}
          </Link>

          {/* Signature Action Button with Apple HIG styling */}
          <Link
            href={`${APP_URL}/${locale}/register`}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full font-semibold text-xs sm:text-sm text-white tracking-tight bg-gradient-to-r from-[#007AFF] to-[#5856D6] shadow-[0_4px_14px_rgba(0,122,255,0.25)] hover:shadow-[0_6px_20px_rgba(0,122,255,0.35)] hover:opacity-95 active:scale-[0.98] transition-all duration-200"
          >
            <span>{t("startTrial")}</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex sm:hidden items-center gap-2">
          <Link
            href={`${APP_URL}/${locale}/register`}
            className="px-3 py-1.5 rounded-full bg-gradient-to-r from-[#007AFF] to-[#5856D6] text-white text-xs font-semibold shadow-sm"
          >
            Probar
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-black/5 dark:bg-white/5 text-[#515154] dark:text-[#A1A1A6] hover:text-[#1D1D1F] dark:hover:text-white"
            aria-label="Abrir menú de navegación"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden px-4 pt-2 pb-6 bg-white/95 dark:bg-[#1C1C1E]/95 border-b border-black/5 dark:border-white/10 backdrop-blur-2xl space-y-3">
          <div className="flex flex-col space-y-2 pt-2 border-t border-black/5 dark:border-white/5">
            <a
              href="#caracteristicas"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-[#515154] dark:text-[#A1A1A6] py-1.5"
            >
              {t("features")}
            </a>
            <a
              href="#beneficios"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-[#515154] dark:text-[#A1A1A6] py-1.5"
            >
              {t("comparison")}
            </a>
            <a
              href="#como-funciona"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-[#515154] dark:text-[#A1A1A6] py-1.5"
            >
              {t("howItWorks")}
            </a>
            <a
              href="#precios"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-[#515154] dark:text-[#A1A1A6] py-1.5"
            >
              {t("pricing")}
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-[#515154] dark:text-[#A1A1A6] py-1.5"
            >
              {t("faq")}
            </a>
          </div>

          <div className="pt-3 border-t border-black/5 dark:border-white/10 flex items-center justify-between">
            <span className="text-xs text-[#515154] dark:text-[#A1A1A6]">Idioma:</span>
            <div className="flex items-center gap-2">
              {languages.map((lang) => (
                <Link
                  key={lang.code}
                  href={`/${lang.code}`}
                  className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                    lang.code === locale
                      ? "bg-[#007AFF] text-white"
                      : "bg-black/5 dark:bg-white/5 text-[#515154] dark:text-[#A1A1A6]"
                  }`}
                >
                  {lang.flag} {lang.code.toUpperCase()}
                </Link>
              ))}
            </div>
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <Link
              href={`${APP_URL}/${locale}/login`}
              className="w-full text-center py-2.5 rounded-full bg-black/5 dark:bg-white/5 text-[#1D1D1F] dark:text-[#F5F5F7] text-sm font-medium"
            >
              {t("login")}
            </Link>
            <Link
              href={`${APP_URL}/${locale}/register`}
              className="w-full text-center py-2.5 rounded-full bg-gradient-to-r from-[#007AFF] to-[#5856D6] text-white text-sm font-semibold shadow-md shadow-[#007AFF]/25"
            >
              {t("startTrial")}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
