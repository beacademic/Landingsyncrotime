import React from "react";

interface JsonLdProps {
  locale: string;
  baseUrl: string;
  faqList: Array<{ question: string; answer: string }>;
}

export function JsonLd({ locale, baseUrl, faqList }: JsonLdProps) {
  const currentUrl = `${baseUrl}/${locale}`;

  const softwareAppSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "SyncroTime",
    url: currentUrl,
    applicationCategory: "EducationalApplication",
    operatingSystem: "Web, Cloud, All Devices",
    description:
      locale === "es"
        ? "Software SaaS para la generación automática de horarios escolares y universitarios sin colisiones de profesores ni salas."
        : locale === "pt"
        ? "Software SaaS para geração automática de horários escolares e universitários sem conflitos."
        : "SaaS software for automated, conflict-free school and university timetable generation.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "7-Day Free Trial",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "128",
      bestRating: "5",
      worstRating: "1",
    },
    featureList: [
      "Algoritmo de optimización combinatoria sin cruces",
      "Gestión de disponibilidad y restricciones docentes",
      "Asignación automática de cursos y salas",
      "Exportación a PDF oficial y Excel",
      "Auditoría de carga horaria docente",
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqList.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SyncroTime",
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    sameAs: [],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "SyncroTime",
    url: baseUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: `${baseUrl}/${locale}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
