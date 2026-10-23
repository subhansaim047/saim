import type { Metadata } from 'next';
import { BlogPostAllergenMatrix } from '@/components/blog/BlogPostAllergenMatrix';

export const metadata: Metadata = {
  title: "How to Create a Fully Compliant 14-Allergen Matrix for UK Restaurants & Takeaways | Saim Dev",
  description: "Step-by-step masterclass on auditing recipes, preventing cross-contamination, and building an EHO-approved 14-allergen matrix under Natasha's Law. Free interactive digital generator included.",
  alternates: {
    canonical: 'https://www.saimdev.site/blog/how-to-create-compliant-14-allergen-matrix-uk-restaurants'
  },
  openGraph: {
    title: "How to Create a Fully Compliant 14-Allergen Matrix for UK Restaurants & Takeaways",
    description: "Step-by-step guide to building a legally compliant 14-allergen matrix under Natasha's Law with free interactive tool.",
    url: "https://www.saimdev.site/blog/how-to-create-compliant-14-allergen-matrix-uk-restaurants",
    type: "article",
    publishedTime: "2026-10-23T00:00:00.000Z",
    authors: ["https://www.saimdev.site"],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Create a Compliant 14-Allergen Matrix (UK Food Businesses)",
    description: "Natasha's Law and FIR 2014 masterclass + free interactive commercial allergen matrix generator.",
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
            headline: "How to Create a Fully Compliant 14-Allergen Matrix for UK Restaurants & Takeaways",
            description: "Step-by-step masterclass on auditing recipes, preventing cross-contamination, and building an EHO-approved 14-allergen matrix under Natasha's Law.",
            url: "https://www.saimdev.site/blog/how-to-create-compliant-14-allergen-matrix-uk-restaurants",
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
              "@id": "https://www.saimdev.site/blog/how-to-create-compliant-14-allergen-matrix-uk-restaurants"
            }
          })
        }}
      />
      <BlogPostAllergenMatrix />
    </>
  );
}
