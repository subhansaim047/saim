import type { Metadata } from 'next';
import { BlogPostFoodCost } from '@/components/blog/BlogPostFoodCost';

export const metadata: Metadata = {
  title: "How to Calculate Food Cost Percentage & Protect 70%+ Margins | Saim Dev",
  description: "Calculate food cost percentage and protect 70%+ margins. Use our free interactive commercial kitchen calculator built for UK takeaways and cafes.",
  alternates: {
    canonical: 'https://www.saimdev.site/blog/mastering-food-cost-percentage-commercial-kitchen-calculator'
  },
  openGraph: {
    title: "How to Calculate Food Cost Percentage & Protect 70%+ Margins | Saim Dev",
    description: "Calculate food cost percentage and protect 70%+ margins. Use our free interactive commercial kitchen calculator built for UK takeaways and cafes.",
    url: 'https://www.saimdev.site/blog/mastering-food-cost-percentage-commercial-kitchen-calculator',
    siteName: 'Saim Dev',
    locale: 'en_GB',
    type: 'article',
    publishedTime: '2026-10-23T00:00:00.000Z',
    modifiedTime: '2026-10-25T00:00:00.000Z',
    authors: ['https://www.saimdev.site/about'],
    images: [{ url: 'https://www.saimdev.site/og-image.png', width: 1200, height: 630, alt: "How to Calculate Food Cost Percentage & Protect 70%+ Margins" }]
  },
  twitter: {
    card: 'summary_large_image',
    title: "How to Calculate Food Cost Percentage & Protect 70%+ Margins | Saim Dev",
    description: "Calculate food cost percentage and protect 70%+ margins. Use our free interactive commercial kitchen calculator built for UK takeaways and cafes.",
    images: ['https://www.saimdev.site/og-image.png']
  }
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How to Calculate Food Cost Percentage & Protect 70%+ Margins | Saim Dev",
    "description": "Calculate food cost percentage and protect 70%+ margins. Use our free interactive commercial kitchen calculator built for UK takeaways and cafes.",
    "url": "https://www.saimdev.site/blog/mastering-food-cost-percentage-commercial-kitchen-calculator",
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
        "name": "How to Calculate Food Cost Percentage & Protect 70%+ Margins",
        "item": "https://www.saimdev.site/blog/mastering-food-cost-percentage-commercial-kitchen-calculator"
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
      <BlogPostFoodCost />
    </>
  );
}
