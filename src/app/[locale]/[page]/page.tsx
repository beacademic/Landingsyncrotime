import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2, AlertTriangle } from "lucide-react";
import { setRequestLocale } from "next-intl/server";
import { LandingFooter } from "@/components/landing/LandingFooter";
import { UNIVERSITY_CONTENT, UNIVERSITY_SLUGS, universityPath, type Locale } from "@/lib/universityPage";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app.syncrotime.com";
const baseUrl = (process.env.NEXT_PUBLIC_LANDING_URL || "https://syncrotime.com").replace(/\/$/, "");

/** Páginas con slug propio por idioma (por ahora, la de universidades). */
export function generateStaticParams() {
  return (Object.keys(UNIVERSITY_SLUGS) as Locale[]).map((locale) => ({ locale, page: UNIVERSITY_SLUGS[locale] }));
}
export const dynamicParams = false;

function resolve(locale: string, page: string): Locale | null {
  const l = locale as Locale;
  return UNIVERSITY_SLUGS[l] === page ? l : null;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; page: string }>;
}): Promise<Metadata> {
  const { locale, page } = await params;
  const l = resolve(locale, page);
  if (!l) return { title: "SyncroTime", robots: { index: false, follow: false } };
  setRequestLocale(l);
  const c = UNIVERSITY_CONTENT[l];
  const url = `${baseUrl}${universityPath(l)}`;
  return {
    title: c.title,
    description: c.description,
    alternates: {
      canonical: url,
      languages: {
        es: `${baseUrl}${universityPath("es")}`,
        en: `${baseUrl}${universityPath("en")}`,
        pt: `${baseUrl}${universityPath("pt")}`,
        "x-default": `${baseUrl}${universityPath("es")}`,
      },
    },
    openGraph: {
      title: `${c.title} | SyncroTime`,
      description: c.description,
      url,
      siteName: "SyncroTime",
      locale: l === "en" ? "en_US" : l === "pt" ? "pt_BR" : "es_ES",
      type: "website",
      images: [{ url: `${baseUrl}/og-image.png`, width: 1200, height: 630 }],
    },
  };
}

export default async function UniversityPage({
  params,
}: {
  params: Promise<{ locale: string; page: string }>;
}) {
  const { locale, page } = await params;
  const l = resolve(locale, page);
  if (!l) notFound();
  setRequestLocale(l);
  const c = UNIVERSITY_CONTENT[l];
  const url = `${baseUrl}${universityPath(l)}`;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: c.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "SyncroTime", item: `${baseUrl}/${l}/` },
      { "@type": "ListItem", position: 2, name: c.navLabel, item: url },
    ],
  };

  const card = "rounded-3xl bg-white dark:bg-[#2C2C2E] border border-black/5 dark:border-white/10";
  const muted = "text-[#515154] dark:text-[#A1A1A6]";

  return (
    <div className="min-h-screen bg-[#F5F5F7] dark:bg-[#1C1C1E] text-[#1D1D1F] dark:text-[#F5F5F7] flex flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <nav className="sticky top-0 z-50 flex items-center justify-between px-4 sm:px-6 py-3 bg-white/80 dark:bg-[#1C1C1E]/80 backdrop-blur-[20px] border-b border-black/5 dark:border-white/10">
        <Link href={`/${l}/`} className="flex items-center gap-3">
          <span className="w-10 h-10 rounded-2xl bg-white dark:bg-[#2C2C2E] border border-black/5 dark:border-white/10 p-1.5 shadow-sm flex items-center justify-center">
            <Image src="/logo.png" alt="" width={22} height={22} className="object-contain" />
          </span>
          <span className="text-lg font-bold tracking-tight font-heading">
            Syncro<span className="text-[#007AFF] dark:text-[#52A6FF]">Time</span>
          </span>
        </Link>
        <a
          href={`${APP_URL}/${l}/register`}
          className="inline-flex items-center min-h-11 px-4 rounded-full bg-gradient-to-r from-[#007AFF] to-[#5856D6] text-white text-sm font-semibold"
        >
          {c.ctaTrial}
        </a>
      </nav>

      <main className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <Link href={`/${l}/`} className={`inline-flex items-center gap-2 text-sm ${muted} hover:text-[#007AFF] mb-6`}>
          <ArrowLeft size={16} aria-hidden="true" />
          {c.back}
        </Link>

        <header className="mb-14 max-w-3xl">
          <p className="inline-block text-xs font-bold uppercase tracking-wider text-[#0066CC] dark:text-[#52A6FF] bg-[#007AFF]/10 border border-[#007AFF]/20 rounded-full px-3 py-1 mb-5">
            {c.badge}
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-[1.1] mb-5 font-heading" style={{ textWrap: "balance" }}>
            {c.h1}
          </h1>
          <p className={`text-lg leading-relaxed mb-8 ${muted}`}>{c.intro}</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={`${APP_URL}/${l}/register`}
              className="inline-flex items-center justify-center gap-2 min-h-12 px-7 rounded-full bg-gradient-to-r from-[#007AFF] to-[#5856D6] text-white font-semibold"
            >
              {c.ctaTrial}
              <ArrowRight size={16} aria-hidden="true" />
            </a>
            <Link
              href={`/${l}/`}
              className="inline-flex items-center justify-center min-h-12 px-7 rounded-full bg-white dark:bg-[#2C2C2E] border border-black/10 dark:border-white/10 font-semibold"
            >
              {c.ctaHome}
            </Link>
          </div>
        </header>

        <section className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 font-heading">{c.problemsTitle}</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {c.problems.map((p) => (
              <div key={p.title} className={`${card} p-6`}>
                <AlertTriangle className="w-5 h-5 text-[#FF9500] mb-3" aria-hidden="true" />
                <h3 className="font-bold mb-2">{p.title}</h3>
                <p className={`text-sm leading-relaxed ${muted}`}>{p.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 font-heading">{c.setupTitle}</h2>
          <p className={`mb-6 max-w-3xl leading-relaxed ${muted}`}>{c.setupIntro}</p>
          <div className="grid gap-4 md:grid-cols-3">
            {c.steps.map((s) => (
              <div key={s.title} className={`${card} p-6`}>
                <h3 className="font-bold mb-2">{s.title}</h3>
                <p className={`text-sm leading-relaxed ${muted}`}>{s.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14 grid gap-6 lg:grid-cols-2">
          <div className={`${card} p-6 sm:p-8`}>
            <h2 className="text-xl font-bold mb-4 font-heading">{c.featuresTitle}</h2>
            <ul className="space-y-3">
              {c.features.map((f) => (
                <li key={f} className={`flex gap-3 text-sm leading-relaxed ${muted}`}>
                  <CheckCircle2 className="w-5 h-5 text-[#34C759] shrink-0" aria-hidden="true" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className={`${card} p-6 sm:p-8`}>
            <h2 className="text-xl font-bold mb-4 font-heading">{c.pricingTitle}</h2>
            <p className={`leading-relaxed mb-6 ${muted}`}>{c.pricingText}</p>
            <a href={`/${l}/#precios`} className="inline-flex items-center gap-2 font-semibold text-[#007AFF] dark:text-[#52A6FF]">
              {c.pricingTitle}
              <ArrowRight size={16} aria-hidden="true" />
            </a>
          </div>
        </section>

        <section className="mb-14 max-w-3xl">
          <h2 className="text-2xl font-bold mb-5 font-heading">{c.faqTitle}</h2>
          <div className="space-y-3">
            {c.faqs.map((f) => (
              <details key={f.q} className={`${card} p-5`}>
                <summary className="cursor-pointer font-semibold">{f.q}</summary>
                <p className={`mt-3 leading-relaxed ${muted}`}>{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="rounded-3xl bg-[#1C1C1E] dark:bg-[#2C2C2E] text-white p-6 sm:p-10">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 font-heading">{c.finalTitle}</h2>
          <p className="text-[#A1A1A6] max-w-2xl mb-6 leading-relaxed">{c.finalText}</p>
          <a
            href={`${APP_URL}/${l}/register`}
            className="inline-flex items-center gap-2 min-h-12 px-7 rounded-full bg-gradient-to-r from-[#007AFF] to-[#5856D6] text-white font-semibold"
          >
            {c.ctaTrial}
            <ArrowRight size={16} aria-hidden="true" />
          </a>
        </section>
      </main>

      <LandingFooter locale={l} />
    </div>
  );
}
