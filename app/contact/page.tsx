import type { Metadata } from 'next';
import { ContactPage } from '@/components/ContactPage';

export const metadata: Metadata = {
  title: 'Contact Saim Dev | Fast Fixed-Price Website Quotes',
  description: 'Get a fixed-price quote for your UK small-business website. Contact Saim Dev via WhatsApp or enquiry form for quick responses within 24 hours.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.saimdev.site/contact',
    languages: {
      'en-GB': 'https://www.saimdev.site/contact',
    },
  },
  openGraph: {
    type: 'website',
    title: 'Contact Saim Dev | Fast Fixed-Price Website Quotes',
    description: 'Get a fixed-price quote for your UK small-business website. Contact Saim Dev via WhatsApp or enquiry form for quick responses within 24 hours.',
    url: 'https://www.saimdev.site/contact',
    siteName: 'Saim Dev',
    locale: 'en_GB',
    images: [
      {
        url: 'https://www.saimdev.site/og-contact.png',
        width: 1200,
        height: 630,
        alt: 'Contact Saim Dev for Fixed-Price Website Project Quotes',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@saimwebdev',
    title: 'Contact Saim Dev | Fast Fixed-Price Website Quotes',
    description: 'Get a fixed-price quote for your UK small-business website. Contact Saim Dev via WhatsApp or enquiry form for quick responses within 24 hours.',
    images: ['https://www.saimdev.site/og-contact.png'],
  },
};

const contactFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does a website cost for a UK business?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our transparent fixed pricing starts from £250 for a single high-converting landing page, £390 for a full multi-page business website, and £790 for a custom takeaway ordering system with allergen filters. There are zero hidden monthly fees or agency markups — you pay once and own everything."
      }
    },
    {
      "@type": "Question",
      "name": "How quickly can you build and launch my website?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Landing pages are typically delivered within 3–5 business days. Full multi-page business websites take 5–7 days, and complete takeaway systems with ordering menus take 7–10 days from brief to live production deployment."
      }
    },
    {
      "@type": "Question",
      "name": "Do you work with UK businesses remotely?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Saim Dev operates as a dedicated remote studio serving UK and European clients from Pakistan. All communication happens directly via WhatsApp or email — no account managers, no delays, just direct access to your lead developer."
      }
    },
    {
      "@type": "Question",
      "name": "What areas of the UK do you cover?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We serve businesses across the entire United Kingdom including London, Manchester, Birmingham, Leeds, Glasgow, Edinburgh, Bristol, Liverpool, and all surrounding areas. Our services are delivered 100% remotely with zero travel fees."
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
        "name": "Contact",
        "item": "https://www.saimdev.site/contact"
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactFaqSchema) }}
      />
      <ContactPage />
    </>
  );
}
