import type { Metadata } from 'next';
import { BlogPostFhrsChecklist } from '@/components/blog/BlogPostFhrsChecklist';

export const metadata: Metadata = {
  title: '5-Star Food Hygiene Rating: UK EHO Checklist | Saim Dev',
  description: 'Complete UK inspection checklist to secure a 5-star Food Hygiene Rating. Practical tips for structure, hygiene practices, and confidence in management.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.saimdev.site/blog/uk-food-hygiene-rating-scheme-5-star-checklist',
    languages: {
      'en-GB': 'https://www.saimdev.site/blog/uk-food-hygiene-rating-scheme-5-star-checklist',
    },
  },
  openGraph: {
    title: '5-Star Food Hygiene Rating: UK EHO Checklist | Saim Dev',
    description: 'Complete UK inspection checklist to secure a 5-star Food Hygiene Rating. Practical tips for structure, hygiene practices, and confidence in management.',
    url: 'https://www.saimdev.site/blog/uk-food-hygiene-rating-scheme-5-star-checklist',
    siteName: 'Saim Dev',
    locale: 'en_GB',
    type: 'article',
    publishedTime: '2026-10-25T00:00:00.000Z',
    modifiedTime: '2026-10-29T18:00:00.000Z',
    authors: ['https://www.saimdev.site/about'],
    images: [{ url: 'https://www.saimdev.site/og-image.png', width: 1200, height: 630, alt: "How to Get a 5-Star Food Hygiene Rating: UK EHO Checklist" }]
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@saimwebdev',
    title: '5-Star Food Hygiene Rating: UK EHO Checklist | Saim Dev',
    description: 'Complete UK inspection checklist to secure a 5-star Food Hygiene Rating. Practical tips for structure, hygiene practices, and confidence in management.',
    images: ['https://www.saimdev.site/og-image.png']
  }
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How to Get a 5-Star Food Hygiene Rating: UK EHO Checklist | Saim Dev",
    "description": "Complete inspection guide for UK restaurants and takeaways to achieve a 5-star Food Hygiene Rating. Covers food safety, cleanliness, and HACCP records.",
    "url": "https://www.saimdev.site/blog/uk-food-hygiene-rating-scheme-5-star-checklist",
    "datePublished": "2026-10-25",
    "dateModified": "2026-10-29",
    "author": {
      "@type": "Person",
      "name": "Saim Dev",
      "jobTitle": "Founder & Lead Next.js Architect",
      "url": "https://www.saimdev.site/about"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Saim Dev",
      "url": "https://www.saimdev.site",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.saimdev.site/saim-dev-logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.saimdev.site/blog/uk-food-hygiene-rating-scheme-5-star-checklist"
    },
    "image": "https://www.saimdev.site/og-image.png"
  };

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
        "name": "Blog",
        "item": "https://www.saimdev.site/blogs"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "How to Get a 5-Star Food Hygiene Rating: UK EHO Checklist",
        "item": "https://www.saimdev.site/blog/uk-food-hygiene-rating-scheme-5-star-checklist"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What are the three main areas checked during a food hygiene inspection?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Environmental Health Officers (EHOs) evaluate three statutory pillars: (1) Hygienic food handling (prep, cooking, chilling, storage), (2) Physical cleanliness and condition of the premises (lighting, ventilation, handwash basins, pest proofing), and (3) Confidence in management (documented SFBB/HACCP records, opening/closing checks, and staff training)."
        }
      },
      {
        "@type": "Question",
        "name": "How many penalty points can a kitchen have to get a 5-star rating?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Under the Food Hygiene Rating Scheme (FHRS), ratings are determined by penalty scores where lower is better. To achieve a 5-star rating, a food business must score 0 to 5 penalty points across each of the three inspection categories, with a total score not exceeding 15 to 20 points across all areas."
        }
      },
      {
        "@type": "Question",
        "name": "How does a Food Hygiene Rating affect Just Eat and Uber Eats listings?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Major UK delivery apps (Just Eat, Deliveroo, Uber Eats) prominently display council hygiene ratings on restaurant profiles. Venues with 1 or 2 stars are often filtered out by diners or risk automatic suspension from delivery platforms until a compliant rating is restored."
        }
      },
      {
        "@type": "Question",
        "name": "What records should a restaurant or takeaway keep on-site?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Operators should maintain a documented Food Safety Management System (such as the FSA's Safer Food, Better Business pack), daily opening and closing check sheets, fridge/freezer temperature logs, core cooking and cooling records, staff hygiene training records, pest control reports, and an up-to-date 14 allergen matrix."
        }
      },
      {
        "@type": "Question",
        "name": "What can a business do if it receives an unfair or low rating?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A lower rating does not automatically mean permanent closure. Operators should immediately rectify identified non-compliances, record corrective actions in their diary, and submit an appeal within 21 days or request a formal paid re-rating inspection from their local council once improvements are completed."
        }
      },
      {
        "@type": "Question",
        "name": "Is the Scottish food hygiene system the same as England and Wales?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. England, Wales, and Northern Ireland use the 0 to 5 Food Hygiene Rating Scheme (FHRS). Scotland operates the Food Hygiene Information Scheme (FHIS), which awards either a 'Pass' or 'Improvement Required' outcome inspected with Food Standards Scotland."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <BlogPostFhrsChecklist />
    </>
  );
}
