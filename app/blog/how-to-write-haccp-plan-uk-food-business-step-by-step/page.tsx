import type { Metadata } from 'next';
import { BlogPostHaccpPlan } from '@/components/blog/BlogPostHaccpPlan';

export const metadata: Metadata = {
  title: "How to Write an EHO-Approved HACCP Plan for UK Food Businesses | Saim Dev",
  description: "A practical, plain-English guide to creating an EHO-compliant HACCP plan for catering and takeaway businesses. Build your hazard analysis and CCP tables with our free tool.",
  alternates: {
    canonical: 'https://www.saimdev.site/blog/how-to-write-haccp-plan-uk-food-business-step-by-step'
  },
  openGraph: {
    title: "How to Write an EHO-Approved HACCP Plan (7 Principles Guide)",
    description: "Step-by-step HACCP plan builder for UK restaurants and takeaways. Compliant with Regulation (EC) 852/2004.",
    url: "https://www.saimdev.site/blog/how-to-write-haccp-plan-uk-food-business-step-by-step",
    type: "article",
    publishedTime: "2026-10-23T00:00:00.000Z",
    authors: ["https://www.saimdev.site"],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Write a HACCP Plan for UK Food Businesses",
    description: "7 Principles explained simply with free interactive digital HACCP builder tool.",
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
            headline: "How to Write an EHO-Approved HACCP Plan for Your UK Food Business (7 Principles + Free Digital Plan Builder)",
            description: "A practical, plain-English guide to creating an EHO-compliant HACCP plan for catering and takeaway businesses.",
            url: "https://www.saimdev.site/blog/how-to-write-haccp-plan-uk-food-business-step-by-step",
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
              "@id": "https://www.saimdev.site/blog/how-to-write-haccp-plan-uk-food-business-step-by-step"
            }
          })
        }}
      />
      <BlogPostHaccpPlan />
    </>
  );
}
