import type { Metadata } from 'next';
import { BlogPostFoodCost } from '@/components/blog/BlogPostFoodCost';

export const metadata: Metadata = {
  title: "How to Calculate Food Cost Percentage & Protect 70%+ Gross Margins | Saim Dev",
  description: "Learn the exact formula top restaurants use to calculate food cost percentage and lock in 70%+ margins. Use our free interactive commercial food cost calculator.",
  alternates: {
    canonical: 'https://www.saimdev.site/blog/mastering-food-cost-percentage-commercial-kitchen-calculator'
  },
  openGraph: {
    title: "How to Calculate Food Cost Percentage & Protect 70%+ Margins",
    description: "Master commercial recipe economics, shrinkage, and menu pricing with our free interactive food cost tool.",
    url: "https://www.saimdev.site/blog/mastering-food-cost-percentage-commercial-kitchen-calculator",
    type: "article",
    publishedTime: "2026-10-23T00:00:00.000Z",
    authors: ["https://www.saimdev.site"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Commercial Food Cost & Recipe Margin Calculator Guide",
    description: "Step-by-step recipe unit economics and menu engineering for restaurants and takeaways.",
  }
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "How to Calculate Food Cost Percentage & Protect 70%+ Gross Margins in Your Commercial Kitchen",
            description: "A practical guide to mastering recipe unit economics, factoring in trim shrinkage, and pricing your restaurant menu for profitability.",
            url: "https://www.saimdev.site/blog/mastering-food-cost-percentage-commercial-kitchen-calculator",
            datePublished: "2026-10-23",
            dateModified: "2026-10-23",
            author: {
              "@type": "Person",
              "name": "Saim Dev",
              "url": "https://www.saimdev.site"
            },
            publisher: {
              "@type": "Organization",
              "name": "Saim Dev Hospitality Systems",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.saimdev.site/saim-dev-logo.jpg"
              }
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://www.saimdev.site/blog/mastering-food-cost-percentage-commercial-kitchen-calculator"
            }
          })
        }}
      />
      <BlogPostFoodCost />
    </>
  );
}
