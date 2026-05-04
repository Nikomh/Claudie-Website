export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Claudia Thonet Agile Consulting GmbH",
  url: "https://www.claudiathonet.de",
  logo: "https://www.claudiathonet.de/brand/logos/Logo_querformatig_fuer_hellen_Hintergrund_web_office.png",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Ahlbecker Straße 2",
    addressLocality: "Berlin",
    postalCode: "10437",
    addressCountry: "DE",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+49-151-51937219",
    contactType: "customer service",
    availableLanguage: "German",
  },
  sameAs: [
    "https://www.linkedin.com/in/claudiathonet",
    "https://www.instagram.com/claudiathonet",
    "https://www.youtube.com/@claudiathonet",
  ],
};

export function buildCourseSchema({
  name,
  description,
  url,
  provider = "Claudia Thonet Agile Consulting GmbH",
  courseMode = "Blended",
}: {
  name: string;
  description: string;
  url: string;
  provider?: string;
  courseMode?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name,
    description,
    url: `https://www.claudiathonet.de${url}`,
    provider: {
      "@type": "Organization",
      name: provider,
      sameAs: "https://www.claudiathonet.de",
    },
    courseMode,
    inLanguage: "de",
  };
}

export function buildFAQSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function buildBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `https://www.claudiathonet.de${item.url}`,
    })),
  };
}
