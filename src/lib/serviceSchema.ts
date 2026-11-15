import { ServicePageData } from "@/components/services/ServicePageTemplate";

function parseOfferPrice(raw: string): string {
  const m = raw.match(/\d[\d,]*/);
  return m ? m[0].replace(/,/g, "") : "250";
}

export function generateServiceSchemas(data: ServicePageData) {
  const numericPrices = data.pricing.map((tier) => Number(parseOfferPrice(tier.price)));
  const minPrice = numericPrices.length ? String(Math.min(...numericPrices)) : "250";
  const maxPrice = numericPrices.length ? String(Math.max(...numericPrices)) : minPrice;
  const currency = data.pricing[0]?.price.includes("£") ? "GBP" : "USD";

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${data.canonicalUrl}#service`,
    "name": data.serviceName,
    "serviceType": data.mainKeyword,
    "url": data.canonicalUrl,
    "description": data.seoDescription,
    "provider": {
      "@type": "Organization",
      "@id": "https://www.saimdev.site/#organization",
      "name": "Saim Dev",
      "url": "https://www.saimdev.site",
    },
    "areaServed": [
      { "@type": "Country", "name": "United Kingdom", "identifier": "GB" },
      { "@type": "AdministrativeArea", "name": "European Union" },
    ],
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["h1", ".rh-hero-subtitle", "h2"],
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": currency,
      "lowPrice": minPrice,
      "highPrice": maxPrice,
      "offerCount": data.pricing.length,
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `${data.serviceName} Fixed Packages`,
      "itemListElement": data.pricing.map((tier) => ({
        "@type": "Offer",
        "name": tier.name,
        "description": tier.description,
        "priceCurrency": tier.price.includes("£") ? "GBP" : "USD",
        "price": parseOfferPrice(tier.price),
        "url": data.canonicalUrl,
        "availability": "https://schema.org/InStock",
      })),
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${data.canonicalUrl}#breadcrumb`,
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.saimdev.site",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://www.saimdev.site/services",
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": data.serviceName,
        "item": data.canonicalUrl,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${data.canonicalUrl}#faq`,
    "mainEntity": data.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return { serviceSchema, breadcrumbSchema, faqSchema };
}
