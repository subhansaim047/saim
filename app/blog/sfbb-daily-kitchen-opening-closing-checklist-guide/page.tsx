import type { Metadata } from 'next';
import { BlogPostChecklist } from '@/components/blog/BlogPostChecklist';

export const metadata: Metadata = {
  title: "SFBB Opening & Closing Checklists: 5-Star Food Hygiene Guide | Saim Dev",
  description: "Discover the essential SFBB opening and closing hygiene checks every UK kitchen must log daily. Prevent cross-contamination and pass EHO audits with our free digital checklist.",
  alternates: {
    canonical: 'https://www.saimdev.site/blog/sfbb-daily-kitchen-opening-closing-checklist-guide'
  },
  openGraph: {
    title: "SFBB Opening & Closing Checklists: Daily Kitchen Routine for 5-Star Ratings",
    description: "Master EHO food hygiene audits with proper daily opening and closing checks. Free interactive digital tool included.",
    url: "https://www.saimdev.site/blog/sfbb-daily-kitchen-opening-closing-checklist-guide",
    type: "article",
    publishedTime: "2026-10-23T00:00:00.000Z",
    authors: ["https://www.saimdev.site"],
  },
  twitter: {
    card: "summary_large_image",
    title: "SFBB Kitchen Opening & Closing Checklist Guide",
    description: "Daily hygiene routines, fridge temperature logs, and free digital checklist tool for UK kitchens.",
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
            headline: "SFBB Opening & Closing Checklists: The Daily Kitchen Routine That Guarantees a 5-Star Food Hygiene Rating",
            description: "A practical guide to the critical opening and closing checks Environmental Health Officers demand in UK kitchens.",
            url: "https://www.saimdev.site/blog/sfbb-daily-kitchen-opening-closing-checklist-guide",
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
              "@id": "https://www.saimdev.site/blog/sfbb-daily-kitchen-opening-closing-checklist-guide"
            }
          })
        }}
      />
      <BlogPostChecklist />
    </>
  );
}
