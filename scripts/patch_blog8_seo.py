# 1. Update app/blog/how-to-write-haccp-plan-uk-food-business-step-by-step/page.tsx
page_content = '''import type { Metadata } from 'next';
import { BlogPostHaccpPlan } from '@/components/blog/BlogPostHaccpPlan';

export const metadata: Metadata = {
  title: 'How to Write a HACCP Plan UK Food Business Step-by-Step | Saim Dev',
  description: 'Step-by-step guide on how to write a HACCP plan for UK food businesses. Learn the 7 principles, CCP decision trees, critical limits, and legal requirements.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.saimdev.site/blog/how-to-write-haccp-plan-uk-food-business-step-by-step',
    languages: {
      'en-GB': 'https://www.saimdev.site/blog/how-to-write-haccp-plan-uk-food-business-step-by-step',
    },
  },
  openGraph: {
    title: 'How to Write a HACCP Plan UK Food Business Step-by-Step | Saim Dev',
    description: 'Step-by-step guide on how to write a HACCP plan for UK food businesses. Learn the 7 principles, CCP decision trees, critical limits, and legal requirements.',
    url: 'https://www.saimdev.site/blog/how-to-write-haccp-plan-uk-food-business-step-by-step',
    siteName: 'Saim Dev',
    locale: 'en_GB',
    type: 'article',
    publishedTime: '2026-10-23T00:00:00.000Z',
    modifiedTime: '2026-10-31T00:00:00.000Z',
    authors: ['https://www.saimdev.site/about'],
    images: [{ url: 'https://www.saimdev.site/og-image.png', width: 1200, height: 630, alt: "How to Write a HACCP Plan for UK Food Businesses" }]
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@saimwebdev',
    title: 'How to Write a HACCP Plan UK Food Business Step-by-Step | Saim Dev',
    description: 'Step-by-step guide on how to write a HACCP plan for UK food businesses. Learn the 7 principles, CCP decision trees, critical limits, and legal requirements.',
    images: ['https://www.saimdev.site/og-image.png']
  }
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "How to Write a HACCP Plan for UK Food Businesses | Saim Dev",
    "description": "Step-by-step guide on how to write a HACCP plan for UK food businesses. Learn the 7 principles, CCP decision trees, critical limits, and legal requirements.",
    "url": "https://www.saimdev.site/blog/how-to-write-haccp-plan-uk-food-business-step-by-step",
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
      "@id": "https://www.saimdev.site/blog/how-to-write-haccp-plan-uk-food-business-step-by-step"
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
        "name": "How to Write a UK HACCP Plan Step-by-Step",
        "item": "https://www.saimdev.site/blog/how-to-write-haccp-plan-uk-food-business-step-by-step"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is a full HACCP plan legally required for a small UK takeaway or cafe?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Under Regulation (EC) No 852/2004, all food businesses must maintain procedures based on HACCP principles. For small caterers, following the Food Standards Agency's Safer Food, Better Business (SFBB) pack satisfies this requirement. Businesses handling high-risk processes (sous-vide, raw sushi, vacuum packing, or central production) must produce a documented bespoke HACCP plan."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between a CCP and a Prerequisite Programme (PRP)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Prerequisite Programmes (PRPs) are basic environmental conditions necessary across the entire kitchen (pest control, staff handwashing, structural hygiene). A Critical Control Point (CCP) is a specific operational step where a hazard is actively eliminated or controlled (such as cooking poultry to 75°C core temperature)."
        }
      },
      {
        "@type": "Question",
        "name": "How often must a commercial kitchen review its HACCP plan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A HACCP plan must be reviewed at least annually, and immediately whenever there is a change to menu recipes, cooking equipment, supplier sources, kitchen layout, or after a food safety incident."
        }
      },
      {
        "@type": "Question",
        "name": "Can I be prosecuted if my HACCP records are incomplete?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Environmental Health Officers can issue Hygiene Improvement Notices (HINs). Continued failure to comply is a criminal offence subject to unlimited fines in the Magistrates' Court."
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
      <BlogPostHaccpPlan />
    </>
  );
}
'''

with open('app/blog/how-to-write-haccp-plan-uk-food-business-step-by-step/page.tsx', 'w', encoding='utf-8') as f:
    f.write(page_content)

print("Updated app/blog/how-to-write-haccp-plan-uk-food-business-step-by-step/page.tsx")
