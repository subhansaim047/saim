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
      'en-GB': 'https://www.saimdev.site/services',
    },
  },
  openGraph: {
    type: 'website',
    title: 'Web Development Services UK | Fixed Price | Saim Dev',
    description: 'Fixed-price Next.js web development for UK businesses from £250. Includes bespoke ordering systems, landing pages, local SEO setup, and fast delivery.',
    url: 'https://www.saimdev.site/services',
    siteName: 'Saim Dev',
    locale: 'en_GB',
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

const servicesFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
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
};

export default function Page() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
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
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesFaqSchema) }}
      />
      <ServicesPage />
    </>
  );
}
