import type { Metadata } from 'next';
import { BlogPostHygieneQuiz } from '@/components/blog/BlogPostHygieneQuiz';

export const metadata: Metadata = {
  title: "Level 2 Food Hygiene Practice Test: 10 Critical Questions | Saim Dev",
  description: "Test your kitchen team with our Level 2 Food Hygiene practice test. Review temperature danger zones, cross-contamination rules, and UK food safety laws with our free interactive quiz.",
  alternates: {
    canonical: 'https://www.saimdev.site/blog/level-2-food-hygiene-practice-test-kitchen-staff-guide'
  },
  openGraph: {
    title: "Level 2 Food Hygiene Practice Test: 10 Critical Questions Every Chef Must Pass",
    description: "Prepare kitchen staff for EHO audits with our free interactive Level 2 Food Hygiene practice exam.",
    url: "https://www.saimdev.site/blog/level-2-food-hygiene-practice-test-kitchen-staff-guide",
    type: "article",
    publishedTime: "2026-10-23T00:00:00.000Z",
    authors: ["https://www.saimdev.site"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Level 2 Food Hygiene Practice Test for Kitchen Staff",
    description: "10 high-yield exam questions covering UK legal temperatures, cross-contamination, and allergens.",
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
            headline: "Level 2 Food Hygiene Practice Test: 10 Critical Questions Every Kitchen Worker & Chef Must Pass",
            description: "How to evaluate your kitchen team's food safety knowledge before an EHO inspection with our free interactive quiz.",
            url: "https://www.saimdev.site/blog/level-2-food-hygiene-practice-test-kitchen-staff-guide",
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
              "@id": "https://www.saimdev.site/blog/level-2-food-hygiene-practice-test-kitchen-staff-guide"
            }
          })
        }}
      />
      <BlogPostHygieneQuiz />
    </>
  );
}
