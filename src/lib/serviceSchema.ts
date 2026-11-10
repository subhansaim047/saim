import { ServicePageData } from "@/components/services/ServicePageTemplate";

export function generateServiceSchemas(data: ServicePageData) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": data.serviceName,
    "description": data.seoDescription,
    "provider": {
      "@type": "Organization",
      "name": "Saim Dev",
      "url": "https://www.saimdev.site",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "GB"
      }
    },
    "areaServed": [
      { "@type": "Country", "name": "United Kingdom", "identifier": "GB" },
      { "@type": "AdministrativeArea", "name": "European Union" }
    ],
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["h1", "p"]
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": data.pricing[0]?.price.includes("£") ? "GBP" : "USD",
      "lowPrice": data.pricing[0]?.price.replace(/[^0-9]/g, "") || "250",
      "offerCount": data.pricing.length
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.saimdev.site"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://www.saimdev.site/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": data.serviceName,
        "item": data.canonicalUrl
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": data.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return { serviceSchema, breadcrumbSchema, faqSchema };
}
