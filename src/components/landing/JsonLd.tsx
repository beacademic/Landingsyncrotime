import React from "react";

interface JsonLdProps {
  locale: string;
  baseUrl: string;
  faqList: Array<{ question: string; answer: string }>;
}

export function JsonLd({ locale, baseUrl, faqList }: JsonLdProps) {
  const currentUrl = `${baseUrl}/${locale}/`;

  const softwareAppSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "SyncroTime",
    url: currentUrl,
    applicationCategory: "EducationalApplication",
    applicationSubCategory: "Timetable & Scheduling Software",
    operatingSystem: "Web, Cloud, All Modern Browsers",
    image: `${baseUrl}/og-image.png`,
    screenshot: `${baseUrl}/og-image.png`,
    inLanguage: locale,
    description:
      locale === "es"
        ? "Software SaaS para la generación automática de horarios escolares y universitarios sin colisiones de profesores ni salas mediante optimización algorítmica."
        : locale === "pt"
        ? "Software SaaS para geração automática de horários escolares e universitários sem conflitos através de otimização algorítmica."
        : "SaaS software for automated, conflict-free school and university timetable generation using combinatorial algorithmic optimization.",
    offers: [
      {
        "@type": "Offer",
        name: locale === "es" ? "Prueba Gratuita" : locale === "pt" ? "Teste Grátis" : "Free Trial",
        price: "0",
        priceCurrency: "USD",
        description: "7-Day Full Free Trial without restrictions",
      },
      {
        "@type": "Offer",
        name: locale === "es" ? "Plan Mensual" : locale === "pt" ? "Plano Mensal" : "Monthly Plan",
        price: "42",
        priceCurrency: "USD",
        billingDuration: "P1M",
      },
      {
        "@type": "Offer",
        name: locale === "es" ? "Plan Anual" : locale === "pt" ? "Plano Anual" : "Annual Plan",
        price: "400",
        priceCurrency: "USD",
        billingDuration: "P1Y",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "128",
      bestRating: "5",
      worstRating: "1",
    },
    author: {
      "@type": "Organization",
      name: "SyncroTime",
      url: baseUrl,
    },
    featureList: [
      "Motor algorítmico de optimización combinatoria sin cruces",
      "Gestión de disponibilidad y restricciones docentes",
      "Asignación automática de cursos, materias y salas",
      "Exportación oficial a PDF y Excel (.xlsx)",
      "Auditoría y control de carga horaria docente",
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
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "soporte@syncrotime.com",
      availableLanguage: ["Spanish", "English", "Portuguese"],
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "SyncroTime",
    url: baseUrl,
    inLanguage: [
      { "@type": "Language", name: "Spanish", alternateName: "es" },
      { "@type": "Language", name: "English", alternateName: "en" },
      { "@type": "Language", name: "Portuguese", alternateName: "pt" },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "SyncroTime",
        item: `${baseUrl}/${locale}/`,
      },
    ],
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
