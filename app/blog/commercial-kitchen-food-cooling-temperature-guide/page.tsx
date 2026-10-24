import type { Metadata } from 'next';
import { BlogPostCoolingGuide } from '@/components/blog/BlogPostCoolingGuide';

export const metadata: Metadata = {
  title: "Commercial Kitchen Food Cooling Guide: UK 90-Minute Rule | Saim Dev",
  description: "Learn UK food safety cooling rules: cooling from 75°C to 8°C in 90 minutes, approved methods (blast chilling, shallow pans), and the Danger Zone explained.",
  alternates: {
    canonical: 'https://www.saimdev.site/blog/commercial-kitchen-food-cooling-temperature-guide'
  },
  openGraph: {
    title: "Commercial Kitchen Food Cooling Guide: The UK 90-Minute Rule & Limits",
    description: "Everything UK restaurant and takeaway managers need to know about rapidly reducing food temperatures and passing EHO chilling audits.",
    url: "https://www.saimdev.site/blog/commercial-kitchen-food-cooling-temperature-guide",
    type: "article",
    publishedTime: "2026-10-25T00:00:00.000Z",
    authors: ["https://www.saimdev.site"],
    images: [{ url: "https://www.saimdev.site/og-image.png", width: 1200, height: 630 }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Commercial Kitchen Food Cooling Guide (UK 90-Minute Rule)",
    description: "Learn how to safely cool hot food below 8°C in under 90 minutes to comply with UK Food Standards Agency guidelines.",
    images: ["https://www.saimdev.site/og-image.png"]
  }
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Commercial Kitchen Food Cooling Guide: The UK 90-Minute Rule & Temperature Limits",
    "description": "Everything UK restaurant and takeaway managers need to know about rapidly reducing food temperatures and passing EHO chilling audits.",
    "url": "https://www.saimdev.site/blog/commercial-kitchen-food-cooling-temperature-guide",
    "datePublished": "2026-10-25",
    "dateModified": "2026-10-25",
    "author": {
      "@type": "Organization",
      "name": "Saim Dev",
      "url": "https://www.saimdev.site"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Saim Dev",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.saimdev.site/saim-dev-logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.saimdev.site/blog/commercial-kitchen-food-cooling-temperature-guide"
    }
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
        "name": "Food Cooling Temperature Guide",
        "item": "https://www.saimdev.site/blog/commercial-kitchen-food-cooling-temperature-guide"
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
      <BlogPostCoolingGuide />
    </>
  );
}
