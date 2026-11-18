import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Scale } from "lucide-react";
import { setRequestLocale } from "next-intl/server";
import { locales } from "@/i18n/request";
import { LegalDocArticle } from "@/components/legal/LegalDocArticle";
import { termsFor, legalUiFor } from "@/lib/legalDocs";

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
  const baseUrl = (process.env.NEXT_PUBLIC_LANDING_URL || "https://syncrotime.com").replace(/\/$/, "");

  const titleByLocale: Record<string, string> = {
    es: "Términos de Servicio",
    en: "Terms of Service",
    pt: "Termos de Serviço",
  };

  const title = titleByLocale[locale] || titleByLocale.es;

  return {
    title,
    description: "Términos y condiciones de uso de la plataforma SyncroTime.",
    alternates: {
      canonical: `${baseUrl}/${locale}/terms/`,
      languages: {
        es: `${baseUrl}/es/terms/`,
        en: `${baseUrl}/en/terms/`,
        pt: `${baseUrl}/pt/terms/`,
        "x-default": `${baseUrl}/es/terms/`,
      },
    },
  };
}

export default async function TermsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const doc = termsFor(locale);
  const ui = legalUiFor(locale);

  return (
    <div className="min-h-screen bg-[#F5F5F7] dark:bg-[#1C1C1E] text-[#1D1D1F] dark:text-[#F5F5F7] transition-colors duration-200">
      {/* ─── Nav ─── */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-white/80 dark:bg-[#1C1C1E]/80 backdrop-blur-[20px] border-b border-black/5 dark:border-white/10">
        <Link href={`/${locale}/`} className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-white dark:bg-[#2C2C2E] border border-black/5 dark:border-white/10 p-1.5 shadow-sm flex items-center justify-center">
            <Image src="/logo.png" alt="SyncroTime" width={22} height={22} className="object-contain" />
          </div>
          <span className="text-lg font-bold tracking-tight text-[#1D1D1F] dark:text-white font-heading">
            Syncro<span className="text-[#007AFF] dark:text-[#52A6FF]">Time</span>
          </span>
        </Link>
        <Link
          href={`/${locale}/`}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold px-4 py-2 rounded-full bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 border border-black/5 dark:border-white/10 transition-all text-[#1D1D1F] dark:text-white"
        >
          <ArrowLeft size={16} />
          <span>{ui.back}</span>
        </Link>
      </nav>

      {/* ─── Header ─── */}
      <header className="pt-32 pb-12 px-4 text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto">
          <div className="w-12 h-12 rounded-2xl bg-[#007AFF]/10 border border-[#007AFF]/20 flex items-center justify-center mx-auto mb-4 text-[#007AFF]">
            <Scale size={24} />
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3 font-heading">{doc.title}</h1>
          <p className="text-xs sm:text-sm text-[#6E6E73] dark:text-[#A1A1A6]">{doc.updated}</p>
        </div>
      </header>

      {/* ─── Content ─── */}
      <main className="pb-24 px-4 max-w-4xl mx-auto">
        <LegalDocArticle doc={doc} />
      </main>

      {/* ─── Footer ─── */}
      <footer className="py-8 px-4 border-t border-black/5 dark:border-white/10 text-center text-xs text-[#8E8E93]">
        <p className="mb-2">© {new Date().getFullYear()} SyncroTime · {ui.rights}</p>
        <div className="flex justify-center gap-4">
          <Link href={`/${locale}/terms/`} className="hover:text-[#007AFF] transition-colors">{ui.terms}</Link>
          <Link href={`/${locale}/privacy/`} className="hover:text-[#007AFF] transition-colors">{ui.privacy}</Link>
          <Link href={`/${locale}/refunds/`} className="hover:text-[#007AFF] transition-colors">{ui.refunds}</Link>
        </div>
      </footer>
    </div>
  );
}
