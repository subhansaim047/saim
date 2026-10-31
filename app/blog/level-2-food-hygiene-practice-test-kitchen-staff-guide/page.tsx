import type { Metadata } from 'next';
import { BlogPostHygieneQuiz } from '@/components/blog/BlogPostHygieneQuiz';

export const metadata: Metadata = {
  title: 'Level 2 Food Hygiene Practice Test Questions & Answers UK | Saim Dev',
  description: 'Free Level 2 food hygiene practice test questions and answers for UK kitchen staff. Revise temperature limits, cross-contamination, and food safety laws.',
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
    title: 'Level 2 Food Hygiene Practice Test Questions & Answers UK | Saim Dev',
    description: 'Free Level 2 food hygiene practice test questions and answers for UK kitchen staff. Revise temperature limits, cross-contamination, and food safety laws.',
    url: 'https://www.saimdev.site/blog/level-2-food-hygiene-practice-test-kitchen-staff-guide',
    siteName: 'Saim Dev',
    locale: 'en_GB',
    type: 'article',
    publishedTime: '2026-10-23T00:00:00.000Z',
    modifiedTime: '2026-10-31T00:00:00.000Z',
    authors: ['https://www.saimdev.site/about'],
    images: [{ url: 'https://www.saimdev.site/og-image.png', width: 1200, height: 630, alt: "Level 2 Food Hygiene Practice Test Questions & Answers" }]
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@saimwebdev',
    title: 'Level 2 Food Hygiene Practice Test Questions & Answers UK | Saim Dev',
    description: 'Free Level 2 food hygiene practice test questions and answers for UK kitchen staff. Revise temperature limits, cross-contamination, and food safety laws.',
    images: ['https://www.saimdev.site/og-image.png']
  }
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Level 2 Food Hygiene Practice Test: Questions & Answers for Kitchen Staff | Saim Dev",
    "description": "Free Level 2 food hygiene practice test questions and answers for UK kitchen staff. Revise temperature limits, cross-contamination, and food safety laws.",
    "url": "https://www.saimdev.site/blog/level-2-food-hygiene-practice-test-kitchen-staff-guide",
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
        "name": "Level 2 Food Hygiene Practice Test Guide",
        "item": "https://www.saimdev.site/blog/level-2-food-hygiene-practice-test-kitchen-staff-guide"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is a Level 2 Food Hygiene certificate legally required for all kitchen staff in the UK?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Under Regulation (EC) 852/2004, food business operators must ensure handlers are supervised and trained in hygiene matters commensurate with their work. While having a physical Level 2 certificate is not explicitly named in the Act, it is the universal benchmark used by Environmental Health Officers (EHO) to verify compliance."
        }
      },
      {
        "@type": "Question",
        "name": "How long is a Level 2 Food Hygiene certificate valid?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Level 2 certificates do not have a statutory expiration date, but the Food Standards Agency and industry bodies strongly recommend refresher training every 3 years. EHOs will question staff competence if certificates are older than 3 years."
        }
      },
      {
        "@type": "Question",
        "name": "Can I train kitchen staff in-house instead of paying for external courses?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, provided the trainer holds at least a Level 3 or 4 Award in Food Safety Supervising and documented records of training modules, test results, and practical assessments are retained in the staff file."
        }
      },
      {
        "@type": "Question",
        "name": "What happens if an EHO discovers an untrained cook working on the line?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The EHO can issue a Hygiene Improvement Notice requiring documented training within a set period. If cross-contamination practices are observed, the business's Food Hygiene Rating will be marked down."
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
      <BlogPostHygieneQuiz />
    </>
  );
}
