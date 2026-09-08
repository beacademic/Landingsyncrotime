import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import type { Metadata } from "next";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { locales } from "@/i18n/request";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

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
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const t = await getTranslations({ locale, namespace: "meta" });

  const baseUrl = (
    process.env.NEXT_PUBLIC_LANDING_URL ||
    "https://syncrotime.com"
  ).replace(/\/$/, "");

  const pageTitle = t("title");
  const pageDesc = t("description");
  const ogTitle = t("ogTitle") || pageTitle;
  const ogDesc = t("ogDescription") || pageDesc;
  const keywordsList = t("keywords")
    ? t("keywords")
        .split(",")
        .map((k) => k.trim())
    : [
        "horarios escolares",
        "generador de horarios",
        "software de horarios",
        "horarios universitarios",
        "gestión educativa",
        "optimización de horarios",
        "timetabling software",
      ];

  return {
    title: {
      default: pageTitle,
      template: "%s | SyncroTime",
    },
    description: pageDesc,
    keywords: keywordsList,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: `${baseUrl}/${locale}/`,
      languages: {
        es: `${baseUrl}/es/`,
        en: `${baseUrl}/en/`,
        pt: `${baseUrl}/pt/`,
        "x-default": `${baseUrl}/es/`,
      },
    },
    openGraph: {
      title: ogTitle,
      description: ogDesc,
      url: `${baseUrl}/${locale}/`,
      siteName: "SyncroTime",
      locale: locale === "en" ? "en_US" : locale === "pt" ? "pt_BR" : "es_ES",
      type: "website",
      images: [
        {
          url: `${baseUrl}/og-image.png`,
          width: 1200,
          height: 630,
          alt: "SyncroTime — Generador de Horarios Escolares y Universitarios",
          type: "image/png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: ogDesc,
      images: [`${baseUrl}/og-image.png`],
      creator: "@SyncroTime",
      site: "@SyncroTime",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    category: "education",
    authors: [{ name: "SyncroTime", url: baseUrl }],
    creator: "SyncroTime",
    publisher: "SyncroTime",
    formatDetection: {
      telephone: false,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  if (!locales.includes(locale as (typeof locales)[number])) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className={`${inter.variable} ${plusJakartaSans.variable}`}>
      <head>
        <link rel="icon" href="/icon.png" sizes="any" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <meta name="theme-color" content="#007AFF" />
      </head>
      <body className="antialiased min-h-screen font-sans">
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
