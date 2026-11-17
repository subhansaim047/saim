import type { Metadata } from 'next';
import { ServicesPage } from '@/components/ServicesPage';

export const metadata: Metadata = {
  title: 'Web Development Services UK | Fixed Price | Saim Dev',
  description: 'Fixed-price Next.js web development for UK businesses from £250. Includes bespoke ordering systems, landing pages, local SEO setup, and fast delivery.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.saimdev.site/services',
    languages: {
      'en': 'https://www.saimdev.site/services',
      'en-GB': 'https://www.saimdev.site/services',
      'en-US': 'https://www.saimdev.site/services',
      'x-default': 'https://www.saimdev.site/services',
    },
  },
  openGraph: {
    type: 'website',
    title: 'Web Development Services UK | Fixed Price | Saim Dev',
    description: 'Fixed-price Next.js web development for UK businesses from £250. Includes bespoke ordering systems, landing pages, local SEO setup, and fast delivery.',
    url: 'https://www.saimdev.site/services',
    siteName: 'Saim Dev',
    locale: 'en_GB',
    alternateLocale: ['en_US'],
    images: [
      {
        url: 'https://www.saimdev.site/og-services.png',
        width: 1200,
        height: 630,
        alt: 'Fixed-Price Next.js Web Development Services UK - Saim Dev',
        type: 'image/png'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@saimwebdev',
    title: 'Web Development Services UK | Fixed Price | Saim Dev',
    description: 'Fixed-price Next.js web development for UK businesses from £250. Includes bespoke ordering systems, landing pages, local SEO setup, and fast delivery.',
    images: ['https://www.saimdev.site/og-services.png']
  }
};

const SERVICE_CATALOG_URLS = [
  { name: "Bespoke Business Websites", url: "https://www.saimdev.site/services/business-websites" },
  { name: "Next.js Web Development UK & US", url: "https://www.saimdev.site/services/website-development" },
  { name: "Custom Web Apps & SaaS MVPs", url: "https://www.saimdev.site/services/custom-web-apps" },
  { name: "0% Commission Takeaway Web Design", url: "https://www.saimdev.site/services/takeaway-web-design" },
  { name: "E-Commerce Development (Stripe)", url: "https://www.saimdev.site/services/ecommerce-development" },
  { name: "Headless Shopify Engineering", url: "https://www.saimdev.site/services/ecommerce-shopify" },
  { name: "Landing Pages & CRO Sprints", url: "https://www.saimdev.site/services/landing-pages-cro" },
  { name: "Technical SEO & Schema Engineering", url: "https://www.saimdev.site/services/seo-services" },
  { name: "Legacy Website Redesign", url: "https://www.saimdev.site/services/website-redesign" },
  { name: "Exact Pixel-Accurate Website Rebuild", url: "https://www.saimdev.site/services/website-clone" },
  { name: "Website Speed & Core Web Vitals", url: "https://www.saimdev.site/services/website-speed-optimization" },
  { name: "Headless WordPress & Next.js CMS", url: "https://www.saimdev.site/services/wordpress-headless-cms" },
];

const servicesGraphSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://www.saimdev.site/services#webpage",
      "url": "https://www.saimdev.site/services",
      "name": "Next.js Web Development Services UK & US | Saim Dev",
      "description": "Fixed-price Next.js web development services for UK and US businesses from £250: business websites, custom web apps, takeaway ordering systems, CRO landing pages, and technical SEO.",
      "inLanguage": "en-GB",
      "isPartOf": { "@id": "https://www.saimdev.site/#website" },
      "about": { "@id": "https://www.saimdev.site/#organization" },
      "breadcrumb": { "@id": "https://www.saimdev.site/services#breadcrumb" },
      "mainEntity": { "@id": "https://www.saimdev.site/services#catalog" }
    },
    {
      "@type": "ItemList",
      "@id": "https://www.saimdev.site/services#catalog",
      "name": "Saim Dev Engineering Services Directory",
      "numberOfItems": SERVICE_CATALOG_URLS.length,
      "itemListElement": SERVICE_CATALOG_URLS.map((item, idx) => ({
        "@type": "ListItem",
        "position": idx + 1,
        "name": item.name,
        "url": item.url
      }))
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.saimdev.site/services#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.saimdev.site/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Web Development Services",
          "item": "https://www.saimdev.site/services"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.saimdev.site/services#faq",
      "isPartOf": { "@id": "https://www.saimdev.site/services#webpage" },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Which plan or service is right for my business?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "If you operate a UK takeaway, cafe, or restaurant, our £250 Fixed Price Takeaway Package is specifically tailored to eliminate 30%+ Just Eat, Deliveroo, and Uber Eats commissions with an interactive Natasha's Law allergen-filtered menu. For general UK and European small businesses, our Starter Plan begins at £250, and comprehensive multi-page custom builds range from £350 to £850."
          }
        },
        {
          "@type": "Question",
          "name": "Does the takeaway website include Natasha's Law allergen filtering?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Every restaurant and takeaway site we deliver includes an interactive 14-allergen filter matrix on the digital menu. Diners can filter out nuts, gluten, dairy, celery, mustard, etc. in real time, helping you maintain compliance with the Food Information Regulations 2014 and Natasha's Law."
          }
        },
        {
          "@type": "Question",
          "name": "Are there any recurring commission fees or monthly subscriptions?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "None. Unlike aggregator platforms (Just Eat, Deliveroo) that take 20% to 35% of every single order, you pay a one-time fixed price from £250. Orders go directly to your WhatsApp or kitchen tablet, and you keep 100% of your customer revenue."
          }
        },
        {
          "@type": "Question",
          "name": "Do I get full ownership of the website?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! Upon project completion and full payment, you receive full ownership of the Next.js code, assets, and design with zero recurring agency locks or platform dependency."
          }
        }
      ]
    }
  ]
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesGraphSchema) }}
      />
      <ServicesPage />
    </>
  );
}
