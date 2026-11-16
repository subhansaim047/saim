import { ServicePageData } from "@/components/services/ServicePageTemplate";

function parseOfferPrice(raw: string): string {
  const m = raw.match(/\d[\d,]*/);
  return m ? m[0].replace(/,/g, "") : "250";
}

function toDualUsdEstimate(amount: number): string {
  return String(Math.round((amount * 1.27) / 10) * 10);
}

function toDualGbpEstimate(amount: number): string {
  return String(Math.round((amount * 0.79) / 10) * 10);
}

export function generateServiceSchemas(data: ServicePageData) {
  const numericPrices = data.pricing.map((tier) => Number(parseOfferPrice(tier.price)));
  const minPrice = numericPrices.length ? String(Math.min(...numericPrices)) : "250";
  const maxPrice = numericPrices.length ? String(Math.max(...numericPrices)) : minPrice;
  const isGbpPrimary = data.pricing[0]?.price.includes("£") ?? true;
  const currency = isGbpPrimary ? "GBP" : "USD";
  const altCurrency = isGbpPrimary ? "USD" : "GBP";
  const altLow = isGbpPrimary
    ? toDualUsdEstimate(Number(minPrice))
    : toDualGbpEstimate(Number(minPrice));
  const altHigh = isGbpPrimary
    ? toDualUsdEstimate(Number(maxPrice))
    : toDualGbpEstimate(Number(maxPrice));

  const primaryOffers = data.pricing.map((tier) => ({
    "@type": "Offer",
    "name": `${tier.name} (${tier.price.includes("£") ? "GBP" : "USD"})`,
    "description": tier.description,
    "priceCurrency": tier.price.includes("£") ? "GBP" : "USD",
    "price": parseOfferPrice(tier.price),
    "url": data.canonicalUrl,
    "availability": "https://schema.org/InStock",
  }));

  const altCurrencyOffers = data.pricing.map((tier) => {
    const num = Number(parseOfferPrice(tier.price));
    const converted = tier.price.includes("£")
      ? toDualUsdEstimate(num)
      : toDualGbpEstimate(num);
    return {
      "@type": "Offer",
      "name": `${tier.name} (${altCurrency})`,
      "description": tier.description,
      "priceCurrency": altCurrency,
      "price": converted,
      "url": data.canonicalUrl,
      "availability": "https://schema.org/InStock",
    };
  });

  const serviceNode = {
    "@type": "Service",
    "@id": `${data.canonicalUrl}#service`,
    "name": data.serviceName,
    "serviceType": data.mainKeyword,
    "url": data.canonicalUrl,
    "description": data.seoDescription,
    "provider": {
      "@id": "https://www.saimdev.site/#organization",
    },
    "areaServed": [
      { "@type": "Country", "name": "United Kingdom", "identifier": "GB" },
      { "@type": "Country", "name": "United States", "identifier": "US" },
      { "@type": "AdministrativeArea", "name": "European Union" },
    ],
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["h1", ".rh-hero-enter-sub", "h2"],
    },
    "offers": [
      {
        "@type": "AggregateOffer",
        "priceCurrency": currency,
        "lowPrice": minPrice,
        "highPrice": maxPrice,
        "offerCount": data.pricing.length,
      },
      {
        "@type": "AggregateOffer",
        "priceCurrency": altCurrency,
        "lowPrice": altLow,
        "highPrice": altHigh,
        "offerCount": data.pricing.length,
      },
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `${data.serviceName} Fixed Packages`,
      "itemListElement": [...primaryOffers, ...altCurrencyOffers],
    },
  };

  const breadcrumbNode = {
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

  const faqNode = {
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

  const webPageNode = {
    "@type": "WebPage",
    "@id": `${data.canonicalUrl}#webpage`,
    "url": data.canonicalUrl,
    "name": data.seoTitle,
    "description": data.seoDescription,
    "isPartOf": { "@id": "https://www.saimdev.site/#website" },
    "about": { "@id": `${data.canonicalUrl}#service` },
    "author": { "@id": "https://www.saimdev.site/#person" },
    "breadcrumb": { "@id": `${data.canonicalUrl}#breadcrumb` },
    "primaryImageOfPage": {
      "@type": "ImageObject",
      "url": "https://www.saimdev.site/og-image.png",
      "width": 1200,
      "height": 630,
    },
    "inLanguage": ["en-GB", "en-US"],
  };

  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [webPageNode, serviceNode, breadcrumbNode, faqNode],
  };

  const serviceSchema = { "@context": "https://schema.org", ...serviceNode };
  const breadcrumbSchema = { "@context": "https://schema.org", ...breadcrumbNode };
  const faqSchema = { "@context": "https://schema.org", ...faqNode };

  return { serviceSchema, breadcrumbSchema, faqSchema, webPageNode, schemaGraph };
}
