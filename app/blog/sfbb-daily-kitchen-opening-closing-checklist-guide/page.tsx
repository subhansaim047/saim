import type { Metadata } from 'next';
import { BlogPostChecklist } from '@/components/blog/BlogPostChecklist';

export const metadata: Metadata = {
  title: 'SFBB Daily Kitchen Opening & Closing Checklists | Saim Dev',
  description: 'Master your SFBB daily opening and closing checklist routine. Learn the 4 Cs, temperature logging rules, and prepare for a 5-star food hygiene rating.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.saimdev.site/blog/sfbb-daily-kitchen-opening-closing-checklist-guide',
    languages: {
      'en-GB': 'https://www.saimdev.site/blog/sfbb-daily-kitchen-opening-closing-checklist-guide',
    },
  },
  openGraph: {
    title: 'SFBB Daily Kitchen Opening & Closing Checklist Guide UK | Saim Dev',
    description: 'Master your SFBB daily opening and closing checklist routine. Learn the 4 Cs, temperature logging rules, and prepare for a 5-star food hygiene rating.',
    url: 'https://www.saimdev.site/blog/sfbb-daily-kitchen-opening-closing-checklist-guide',
    siteName: 'Saim Dev',
    locale: 'en_GB',
    type: 'article',
    publishedTime: '2026-10-23T00:00:00.000Z',
    modifiedTime: '2026-10-31T00:00:00.000Z',
    authors: ['https://www.saimdev.site/about'],
    images: [{ url: 'https://www.saimdev.site/og-image.png', width: 1200, height: 630, alt: "SFBB Daily Kitchen Opening & Closing Checklist Guide" }]
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@saimwebdev',
    title: 'SFBB Daily Kitchen Opening & Closing Checklist Guide UK | Saim Dev',
    description: 'Master your SFBB daily opening and closing checklist routine. Learn the 4 Cs, temperature logging rules, and prepare for a 5-star food hygiene rating.',
    images: ['https://www.saimdev.site/og-image.png']
  }
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "SFBB Opening & Closing Checklists: 5-Star Food Hygiene Guide | Saim Dev",
    "description": "Master your SFBB daily opening and closing checklist routine. Learn the 4 Cs, temperature logging rules, and prepare for a 5-star food hygiene rating.",
    "url": "https://www.saimdev.site/blog/sfbb-daily-kitchen-opening-closing-checklist-guide",
    "datePublished": "2026-10-23",
    "dateModified": "2026-10-31",
    "author": {
      "@type": "Person",
      "name": "Saim Dev",
      "jobTitle": "Lead Commercial Kitchen Systems & Web Architect",
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
      "@id": "https://www.saimdev.site/blog/sfbb-daily-kitchen-opening-closing-checklist-guide"
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
        "name": "SFBB Daily Kitchen Opening & Closing Checklist Guide",
        "item": "https://www.saimdev.site/blog/sfbb-daily-kitchen-opening-closing-checklist-guide"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How long must a UK food business keep SFBB diary sheets on file?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Environmental Health Officers expect to inspect at least 3 to 6 months of completed daily opening and closing diary sheets during an unannounced inspection. For HACCP temperature records, keeping 12 months on file is standard industry best practice."
        }
      },
      {
        "@type": "Question",
        "name": "What causes a restaurant to lose its 5-star Food Hygiene Rating immediately?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The most common reasons for a rating downgrade are: incomplete or missing SFBB daily diary sheets, fridges running above 8°C with no corrective action logged, evidence of pest activity, lack of hot running water at handwash basins, and failure to provide an up-to-date allergen matrix."
        }
      },
      {
        "@type": "Question",
        "name": "Can I use digital checklists instead of the paper SFBB binder?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. The Food Standards Agency (FSA) permits digital records provided they are readily accessible during an inspection, accurately reflect daily kitchen checks, and include timestamps and corrective action notes."
        }
      },
      {
        "@type": "Question",
        "name": "What is the legal difference between an opening check and a closing check?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Opening checks ensure equipment is functioning and food is safe before service begins (e.g. fridge temps, hot water, clean surfaces). Closing checks ensure food is protected overnight (e.g. date labelling, bin removal, pest checks, equipment shutdown)."
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
      <BlogPostChecklist />
    </>
  );
}
