import type { Metadata } from 'next';
import { BlogPostRecipeScaler } from '@/components/blog/BlogPostRecipeScaler';

export const metadata: Metadata = {
  title: "Commercial Recipe Scaling Guide: How to Scale for 10 to 500 Portions | Saim Dev",
  description: "Master commercial recipe batching and scaling for catering kitchens. Avoid salt and spice traps and calculate precise portion costs with our free interactive tool.",
  alternates: {
    canonical: 'https://www.saimdev.site/blog/how-to-scale-recipes-commercial-catering-batch-calculator'
  },
  openGraph: {
    title: "Commercial Recipe Scaling Guide: Scale 10 to 500 Portions Without Taste Breakdown",
    description: "Learn how commercial caterers scale batches accurately with our free interactive recipe scaler tool.",
    url: "https://www.saimdev.site/blog/how-to-scale-recipes-commercial-catering-batch-calculator",
    type: "article",
    publishedTime: "2026-10-23T00:00:00.000Z",
    authors: ["https://www.saimdev.site"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Commercial Recipe Scaling & Batching Guide for Kitchens",
    description: "Formulas and free interactive tool for scaling catering recipes without flavor loss.",
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
            headline: "The Commercial Kitchen Guide to Recipe Scaling: How to Scale from 10 to 500 Portions Without Taste Breakdown",
            description: "Why linear math destroys bulk catering recipes, how to handle non-linear spices and liquids, and how to generate standardized chef prep cards.",
            url: "https://www.saimdev.site/blog/how-to-scale-recipes-commercial-catering-batch-calculator",
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
              "@id": "https://www.saimdev.site/blog/how-to-scale-recipes-commercial-catering-batch-calculator"
            }
          })
        }}
      />
      <BlogPostRecipeScaler />
    </>
  );
}
