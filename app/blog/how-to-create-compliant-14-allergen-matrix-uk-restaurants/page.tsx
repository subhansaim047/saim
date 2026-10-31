import type { Metadata } from 'next';
import { BlogPostAllergenMatrix } from '@/components/blog/BlogPostAllergenMatrix';

export const metadata: Metadata = {
  title: 'How to Create a 14-Allergen Matrix for Restaurants UK | Saim Dev',
  description: 'Step-by-step guide on how to create a 14 allergen matrix for restaurants and takeaways in the UK under Natasha\'s Law and Food Information Regulations.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.saimdev.site/blog/how-to-create-compliant-14-allergen-matrix-uk-restaurants',
    languages: {
      'en-GB': 'https://www.saimdev.site/blog/how-to-create-compliant-14-allergen-matrix-uk-restaurants',
    },
  },
  openGraph: {
    title: 'How to Create a 14-Allergen Matrix for Restaurants UK | Saim Dev',
    description: 'Step-by-step guide on how to create a 14 allergen matrix for restaurants and takeaways in the UK under Natasha\'s Law and Food Information Regulations.',
    url: 'https://www.saimdev.site/blog/how-to-create-compliant-14-allergen-matrix-uk-restaurants',
    siteName: 'Saim Dev',
    locale: 'en_GB',
    type: 'article',
    publishedTime: '2026-10-23T00:00:00.000Z',
    modifiedTime: '2026-10-31T00:00:00.000Z',
    authors: ['https://www.saimdev.site/about'],
    images: [{ url: 'https://www.saimdev.site/og-image.png', width: 1200, height: 630, alt: "How to Create a Compliant 14-Allergen Matrix for UK Restaurants" }]
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@saimwebdev',
    title: 'How to Create a 14-Allergen Matrix for Restaurants UK | Saim Dev',
    description: 'Step-by-step guide on how to create a 14 allergen matrix for restaurants and takeaways in the UK under Natasha\'s Law and Food Information Regulations.',
    images: ['https://www.saimdev.site/og-image.png']
  }
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "How to Create a Compliant 14-Allergen Matrix for UK Restaurants & Takeaways | Saim Dev",
    "description": "Step-by-step guide on how to create a 14 allergen matrix for restaurants and takeaways in the UK under Natasha\'s Law and Food Information Regulations.",
    "url": "https://www.saimdev.site/blog/how-to-create-compliant-14-allergen-matrix-uk-restaurants",
    "datePublished": "2026-10-23",
    "dateModified": "2026-10-31",
    "author": {
      "@type": "Person",
      "name": "Saim Dev",
      "jobTitle": "Lead Web & Kitchen Compliance Engineer",
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
      "@id": "https://www.saimdev.site/blog/how-to-create-compliant-14-allergen-matrix-uk-restaurants"
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
        "name": "14-Allergen Matrix Guide for UK Restaurants",
        "item": "https://www.saimdev.site/blog/how-to-create-compliant-14-allergen-matrix-uk-restaurants"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is an allergen matrix legally mandatory for UK takeaways and restaurants?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Under the Food Information Regulations (FIR) 2014 and retained EU Regulation 1169/2011, food businesses are legally required to declare the presence of any of the 14 major allergens. While the specific matrix format is not named in statute, an up-to-date allergen matrix or recipe specification folder is the universally accepted standard by Environmental Health Officers (EHO) to verify legal compliance."
        }
      },
      {
        "@type": "Question",
        "name": "Can I just tell customers verbally instead of writing an allergen matrix?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can provide allergen information verbally, but the law strictly requires clear signage pointing customers to that information. Furthermore, during an EHO inspection, you must present written, verifiable recipe specifications proving your verbal advice is accurate."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between Contains and May Contain on an allergen matrix?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Contains indicates the allergen is an intentional ingredient in the dish (e.g. cheddar cheese containing milk). May Contain is used only when an unavoidable cross-contact risk remains despite all reasonable preventive separation controls."
        }
      },
      {
        "@type": "Question",
        "name": "What are the penalties for non-compliance with Natasha's Law and FIR 2014?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Failing to declare allergens accurately can lead to unlimited financial penalties, criminal prosecution of food business operators, emergency hygiene prohibition notices (immediate closure), and severe civil liability."
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
      <BlogPostAllergenMatrix />
    </>
  );
}
