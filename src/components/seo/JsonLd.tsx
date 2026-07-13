import { siteConfig } from "@/config/site-config";

export function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TravelAgency",
        "@id": `${siteConfig.seo.siteUrl}/#organization`,
        name: siteConfig.business.name,
        description: siteConfig.business.description,
        url: siteConfig.seo.siteUrl,
        telephone: siteConfig.business.phone,
        email: siteConfig.business.email,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Montego Bay",
          addressRegion: "St. James",
          addressCountry: "JM",
        },
        areaServed: siteConfig.destinations.map((d) => ({
          "@type": "City",
          name: d.name,
          containedInPlace: {
            "@type": "Country",
            name: "Jamaica",
          },
        })),
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: siteConfig.business.googleRating,
          reviewCount: siteConfig.business.reviewCount,
        },
        priceRange: "$$",
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.seo.siteUrl}/#website`,
        url: siteConfig.seo.siteUrl,
        name: siteConfig.business.name,
        publisher: { "@id": `${siteConfig.seo.siteUrl}/#organization` },
      },
      {
        "@type": "FAQPage",
        mainEntity: siteConfig.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
