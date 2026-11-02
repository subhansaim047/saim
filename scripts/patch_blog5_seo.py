# 1. Update app/blog/mastering-food-cost-percentage-commercial-kitchen-calculator/page.tsx
page_content = '''import type { Metadata } from 'next';
import { BlogPostFoodCost } from '@/components/blog/BlogPostFoodCost';

export const metadata: Metadata = {
  title: 'How to Calculate Food Cost Percentage Commercial Kitchen UK | Saim Dev',
  description: 'Learn how to calculate food cost percentage in a commercial kitchen. Formulas, shrinkage math, target gross margins, and free online calculator.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.saimdev.site/blog/mastering-food-cost-percentage-commercial-kitchen-calculator',
    languages: {
      'en-GB': 'https://www.saimdev.site/blog/mastering-food-cost-percentage-commercial-kitchen-calculator',
    },
  },
  openGraph: {
    title: 'How to Calculate Food Cost Percentage Commercial Kitchen UK | Saim Dev',
    description: 'Learn how to calculate food cost percentage in a commercial kitchen. Formulas, shrinkage math, target gross margins, and free online calculator.',
    url: 'https://www.saimdev.site/blog/mastering-food-cost-percentage-commercial-kitchen-calculator',
    siteName: 'Saim Dev',
    locale: 'en_GB',
    type: 'article',
    publishedTime: '2026-10-23T00:00:00.000Z',
    modifiedTime: '2026-10-31T00:00:00.000Z',
    authors: ['https://www.saimdev.site/about'],
    images: [{ url: 'https://www.saimdev.site/og-image.png', width: 1200, height: 630, alt: "How to Calculate Food Cost Percentage Commercial Kitchen" }]
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@saimwebdev',
    title: 'How to Calculate Food Cost Percentage Commercial Kitchen UK | Saim Dev',
    description: 'Learn how to calculate food cost percentage in a commercial kitchen. Formulas, shrinkage math, target gross margins, and free online calculator.',
    images: ['https://www.saimdev.site/og-image.png']
  }
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "How to Calculate Food Cost Percentage & Protect 70%+ Margins | Saim Dev",
    "description": "Learn how to calculate food cost percentage in a commercial kitchen. Formulas, shrinkage math, target gross margins, and free online calculator.",
    "url": "https://www.saimdev.site/blog/mastering-food-cost-percentage-commercial-kitchen-calculator",
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
      "@id": "https://www.saimdev.site/blog/mastering-food-cost-percentage-commercial-kitchen-calculator"
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
        "name": "Commercial Kitchen Food Cost Percentage Guide",
        "item": "https://www.saimdev.site/blog/mastering-food-cost-percentage-commercial-kitchen-calculator"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is an acceptable food cost percentage for a commercial kitchen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In the UK hospitality industry, the standard benchmark for food cost is between 28% and 32%, which corresponds to a Gross Profit (GP) margin of 68% to 72%. For premium steakhouses or seafood, food cost may reach 34%, while pizza and pasta concepts often operate at 18% to 22% food cost."
        }
      },
      {
        "@type": "Question",
        "name": "What is the formula to calculate food cost percentage?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For an individual dish: Food Cost Percentage = (Total Cost of Ingredients ÷ Selling Price Excluding VAT) × 100. For overall monthly restaurant operations: Actual Food Cost % = [(Beginning Inventory + Purchases - Ending Inventory) ÷ Total Food Revenue] × 100."
        }
      },
      {
        "@type": "Question",
        "name": "How do I factor in third-party delivery commissions (Just Eat, Deliveroo, UberEats)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Delivery aggregators charge between 20% and 30% commission plus VAT. To protect your bottom line, either set higher menu prices on third-party delivery apps or incentivise direct ordering through your own commission-free takeaway website."
        }
      },
      {
        "@type": "Question",
        "name": "How often should a restaurant recalculate its recipe costs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Recipe costing should be audited at least quarterly. In times of wholesale ingredient inflation or when commodity prices shift significantly, high-volume menu items should be reviewed monthly."
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
      <BlogPostFoodCost />
    </>
  );
}
'''

with open('app/blog/mastering-food-cost-percentage-commercial-kitchen-calculator/page.tsx', 'w', encoding='utf-8') as f:
    f.write(page_content)

print("Updated app/blog/mastering-food-cost-percentage-commercial-kitchen-calculator/page.tsx")
