import type { MetadataRoute } from "next";
import { universityPath } from "@/lib/universityPage";

export const dynamic = "force-static";

const LOCALES = ["es", "en", "pt"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = (process.env.NEXT_PUBLIC_LANDING_URL || "https://syncrotime.com").replace(/\/$/, "");

  const routes = [
    { path: "", priority: 1.0, changeFrequency: "daily" as const },
    { path: "terms", priority: 0.5, changeFrequency: "monthly" as const },
    { path: "privacy", priority: 0.5, changeFrequency: "monthly" as const },
    { path: "refunds", priority: 0.5, changeFrequency: "monthly" as const },
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  for (const route of routes) {
    for (const locale of LOCALES) {
      const pathSuffix = route.path ? `/${route.path}/` : "/";
      const pageUrl = `${baseUrl}/${locale}${pathSuffix}`;

      sitemapEntries.push({
        url: pageUrl,
        lastModified: new Date(),
        changeFrequency: route.changeFrequency,
        priority: route.priority,
        alternates: {
          languages: {
            es: `${baseUrl}/es${pathSuffix}`,
            en: `${baseUrl}/en${pathSuffix}`,
            pt: `${baseUrl}/pt${pathSuffix}`,
            "x-default": `${baseUrl}/es${pathSuffix}`,
          },
        },
      });
    }
  }

  // Página de universidades: slug propio por idioma.
  const universityAlternates = {
    es: `${baseUrl}${universityPath("es")}`,
    en: `${baseUrl}${universityPath("en")}`,
    pt: `${baseUrl}${universityPath("pt")}`,
    "x-default": `${baseUrl}${universityPath("es")}`,
  };
  for (const locale of LOCALES) {
    sitemapEntries.push({
      url: `${baseUrl}${universityPath(locale)}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: { languages: universityAlternates },
    });
  }

  return sitemapEntries;
}
