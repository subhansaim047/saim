import type { Metadata } from 'next';
import { BlogPostChecklist } from '@/components/blog/BlogPostChecklist';

export const metadata: Metadata = {
  title: 'SFBB Kitchen Opening & Closing Guide UK | Saim Dev',
  description: 'Master your daily opening and closing checks with Safer Food, Better Business guidance. Protect kitchen hygiene and secure a 5-star council rating.',
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
    title: 'SFBB Kitchen Opening & Closing Guide UK | Saim Dev',
    description: 'Master your daily opening and closing checks with Safer Food, Better Business guidance. Protect kitchen hygiene and secure a 5-star council rating.',
    url: 'https://www.saimdev.site/blog/sfbb-daily-kitchen-opening-closing-checklist-guide',
    siteName: 'Saim Dev',
    locale: 'en_GB',
    type: 'article',
    publishedTime: '2026-10-23T00:00:00.000Z',
    modifiedTime: '2026-10-25T00:00:00.000Z',
    authors: ['https://www.saimdev.site/about'],
    images: [{ url: 'https://www.saimdev.site/og-image.png', width: 1200, height: 630, alt: "SFBB Opening & Closing Checklists: 5-Star Food Hygiene Guide" }]
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@saimwebdev',
    title: 'SFBB Kitchen Opening & Closing Guide UK | Saim Dev',
    description: 'Master your daily opening and closing checks with Safer Food, Better Business guidance. Protect kitchen hygiene and secure a 5-star council rating.',
    images: ['https://www.saimdev.site/og-image.png']
  }
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "SFBB Opening & Closing Checklists: 5-Star Food Hygiene Guide | Saim Dev",
    "description": "Essential SFBB opening and closing hygiene checks every UK kitchen must log daily. Prevent contamination and pass EHO audits with our free tool.",
    "url": "https://www.saimdev.site/blog/sfbb-daily-kitchen-opening-closing-checklist-guide",
    "datePublished": "2026-10-23",
    "dateModified": "2026-10-25",
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
        "name": "SFBB Opening & Closing Checklists: 5-Star Food Hygiene Guide",
        "item": "https://www.saimdev.site/blog/sfbb-daily-kitchen-opening-closing-checklist-guide"
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
      <BlogPostChecklist />
    </>
  );
}
