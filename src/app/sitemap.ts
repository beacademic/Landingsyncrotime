import type { MetadataRoute } from "next";

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

  return sitemapEntries;
}
