import type { Metadata } from 'next';
import { BlogPostRecipeScaler } from '@/components/blog/BlogPostRecipeScaler';

export const metadata: Metadata = {
  title: 'How to Scale Recipes for Commercial Catering UK | Saim Dev',
  description: 'Learn how to scale recipes for commercial catering batches. Recipe Conversion Factor formulas, non-linear seasoning rules, and free scaling tool.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.saimdev.site/blog/how-to-scale-recipes-commercial-catering-batch-calculator',
    languages: {
      'en-GB': 'https://www.saimdev.site/blog/how-to-scale-recipes-commercial-catering-batch-calculator',
    },
  },
  openGraph: {
    title: 'How to Scale Recipes for Commercial Catering UK | Saim Dev',
    description: 'Learn how to scale recipes for commercial catering batches. Recipe Conversion Factor formulas, non-linear seasoning rules, and free scaling tool.',
    url: 'https://www.saimdev.site/blog/how-to-scale-recipes-commercial-catering-batch-calculator',
    siteName: 'Saim Dev',
    locale: 'en_GB',
    type: 'article',
    publishedTime: '2026-10-23T00:00:00.000Z',
    modifiedTime: '2026-10-31T00:00:00.000Z',
    authors: ['https://www.saimdev.site/about'],
    images: [{ url: 'https://www.saimdev.site/og-image.png', width: 1200, height: 630, alt: "How to Scale Recipes for Commercial Catering" }]
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@saimwebdev',
    title: 'How to Scale Recipes for Commercial Catering UK | Saim Dev',
    description: 'Learn how to scale recipes for commercial catering batches. Recipe Conversion Factor formulas, non-linear seasoning rules, and free scaling tool.',
    images: ['https://www.saimdev.site/og-image.png']
  }
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Commercial Recipe Scaling Guide: Scale 10 to 500 Portions | Saim Dev",
    "description": "Learn how to scale recipes for commercial catering batches. Recipe Conversion Factor formulas, non-linear seasoning rules, and free scaling tool.",
    "url": "https://www.saimdev.site/blog/how-to-scale-recipes-commercial-catering-batch-calculator",
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
      "@id": "https://www.saimdev.site/blog/how-to-scale-recipes-commercial-catering-batch-calculator"
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
        "name": "Commercial Catering Recipe Scaling Guide",
        "item": "https://www.saimdev.site/blog/how-to-scale-recipes-commercial-catering-batch-calculator"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Why do professional kitchens insist on weight (grams/kg) instead of volume (cups/spoons)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Volume measurements vary drastically based on humidity, settling, and technique. A cup of flour can weigh anywhere from 120g to 160g depending on whether it is sifted or packed. A 40g discrepancy in a single cup becomes an 800g error when scaling a 20x catering batch."
        }
      },
      {
        "@type": "Question",
        "name": "How do I calculate the Recipe Conversion Factor (RCF)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The formula is: RCF = Desired Yield (portions) ÷ Current Yield (portions). For example, if your base recipe yields 6 portions and you need to cater for 150 guests: RCF = 150 ÷ 6 = 25. Every ingredient weight is then multiplied by 25."
        }
      },
      {
        "@type": "Question",
        "name": "Do cooking temperatures change when scaling a recipe?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Generally, oven baking and frying temperatures remain constant. However, cooking duration increases because a larger thermal mass takes longer to reach safe internal core temperatures (75°C in UK food safety standards). Never increase oven heat to speed up cooking as the exterior will burn before the core reaches safe temperatures."
        }
      },
      {
        "@type": "Question",
        "name": "How does batch scaling affect portion cost calculations?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bulk scaling usually lowers portion costs because commercial kitchens can purchase ingredients in wholesale packaging (e.g. 25kg sacks or 5L oil tubs rather than 1kg retail boxes). Our interactive tool computes both portion cost and total batch cost simultaneously."
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
      <BlogPostRecipeScaler />
    </>
  );
}
