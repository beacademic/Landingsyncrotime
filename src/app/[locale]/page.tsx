import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { locales } from "@/i18n/request";
import { LandingNavbar } from "@/components/landing/LandingNavbar";
import { LandingHero } from "@/components/landing/LandingHero";
import { LandingPainSolution } from "@/components/landing/LandingPainSolution";
import { LandingFeatures } from "@/components/landing/LandingFeatures";
import { LandingHowItWorks } from "@/components/landing/LandingHowItWorks";
import { LandingPricing } from "@/components/landing/LandingPricing";
import { LandingFAQ } from "@/components/landing/LandingFAQ";
import { LandingCtaSection } from "@/components/landing/LandingCtaSection";
import { LandingFooter } from "@/components/landing/LandingFooter";
import { JsonLd } from "@/components/landing/JsonLd";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);

  if (!locales.includes(locale as (typeof locales)[number])) {
    return {
      title: "SyncroTime",
      robots: { index: false, follow: false },
    };
  }

  const baseUrl = (
    process.env.NEXT_PUBLIC_LANDING_URL ||
    "https://syncrotime.com"
  ).replace(/\/$/, "");

  return {
    alternates: {
      canonical: `${baseUrl}/${locale}/`,
      languages: {
        es: `${baseUrl}/es/`,
        en: `${baseUrl}/en/`,
        pt: `${baseUrl}/pt/`,
        "x-default": `${baseUrl}/es/`,
      },
    },
  };
}

export default async function LocalePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  if (!locales.includes(locale as (typeof locales)[number])) {
    notFound();
  }

  const faqT = await getTranslations({ locale, namespace: "landing.faq" });

  const baseUrl = (
    process.env.NEXT_PUBLIC_LANDING_URL ||
    "https://syncrotime.com"
  ).replace(/\/$/, "");

  const faqList = [
    { question: faqT("q1"), answer: faqT("a1") },
    { question: faqT("q2"), answer: faqT("a2") },
    { question: faqT("q3"), answer: faqT("a3") },
    { question: faqT("q4"), answer: faqT("a4") },
    { question: faqT("q5"), answer: faqT("a5") },
  ];

  return (
    <div className="min-h-screen bg-[#F5F5F7] dark:bg-[#1C1C1E] text-[#1D1D1F] dark:text-[#F5F5F7] flex flex-col selection:bg-[#007AFF] selection:text-white transition-colors duration-200">
      <JsonLd locale={locale} baseUrl={baseUrl} faqList={faqList} />
      <LandingNavbar locale={locale} />
      <main className="flex-1">
        <LandingHero locale={locale} />
        <LandingPainSolution />
        <LandingFeatures />
        <LandingHowItWorks />
        <LandingPricing locale={locale} />
        <LandingFAQ />
        <LandingCtaSection locale={locale} />
      </main>
      <LandingFooter locale={locale} />
    </div>
  );
}
