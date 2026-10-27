import type { Metadata } from 'next';
import { BlogPostHygieneQuiz } from '@/components/blog/BlogPostHygieneQuiz';

export const metadata: Metadata = {
  title: 'Level 2 Food Hygiene Practice Test: 10 Key Questions',
  description: 'Prepare kitchen staff for UK Food Safety Level 2 certification with this practice test covering critical temperatures, hygiene, and cross-contamination.',
  robots: {

    index: true,

    follow: true,

  },

  alternates: {
    canonical: 'https://www.saimdev.site/blog/level-2-food-hygiene-practice-test-kitchen-staff-guide',
    languages: {
      'en-GB': 'https://www.saimdev.site/blog/level-2-food-hygiene-practice-test-kitchen-staff-guide',
    },
  },
  openGraph: {
    title: 'Level 2 Food Hygiene Practice Test: 10 Key Questions',
    description: 'Prepare kitchen staff for UK Food Safety Level 2 certification with this practice test covering critical temperatures, hygiene, and cross-contamination.',
    url: 'https://www.saimdev.site/blog/level-2-food-hygiene-practice-test-kitchen-staff-guide',
    siteName: 'Saim Dev',
    locale: 'en_GB',
    type: 'article',
    publishedTime: '2026-10-23T00:00:00.000Z',
    modifiedTime: '2026-10-25T00:00:00.000Z',
    authors: ['https://www.saimdev.site/about'],
    images: [{ url: 'https://www.saimdev.site/og-image.png', width: 1200, height: 630, alt: "Level 2 Food Hygiene Practice Test: 10 Critical Questions" }]
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@saimwebdev',
    title: 'Level 2 Food Hygiene Practice Test: 10 Key Questions',
    description: 'Prepare kitchen staff for UK Food Safety Level 2 certification with this practice test covering critical temperatures, hygiene, and cross-contamination.',
    images: ['https://www.saimdev.site/og-image.png']
  }
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Level 2 Food Hygiene Practice Test: 10 Critical Questions | Saim Dev",
    "description": "Test your kitchen team with our Level 2 Food Hygiene practice test. Review temperature danger zones, cross-contamination, and hygiene laws today.",
    "url": "https://www.saimdev.site/blog/level-2-food-hygiene-practice-test-kitchen-staff-guide",
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
      "@id": "https://www.saimdev.site/blog/level-2-food-hygiene-practice-test-kitchen-staff-guide"
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
        "name": "Level 2 Food Hygiene Practice Test: 10 Critical Questions",
        "item": "https://www.saimdev.site/blog/level-2-food-hygiene-practice-test-kitchen-staff-guide"
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
      <BlogPostHygieneQuiz />
    </>
  );
}
