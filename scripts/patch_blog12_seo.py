# 1. Update app/blog/commercial-kitchen-food-cooling-temperature-guide/page.tsx
page_content = '''import type { Metadata } from 'next';
import { BlogPostCoolingGuide } from '@/components/blog/BlogPostCoolingGuide';

export const metadata: Metadata = {
  title: 'Commercial Kitchen Food Cooling Temperature Rules UK | Saim Dev',
  description: 'Complete UK guide to commercial kitchen food cooling temperature rules. Learn the 90-minute FSA guideline, danger zone limits, and safe cooling methods.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.saimdev.site/blog/commercial-kitchen-food-cooling-temperature-guide',
    languages: {
      'en-GB': 'https://www.saimdev.site/blog/commercial-kitchen-food-cooling-temperature-guide',
    },
  },
  openGraph: {
    title: 'Commercial Kitchen Food Cooling Temperature Rules UK | Saim Dev',
    description: 'Complete UK guide to commercial kitchen food cooling temperature rules. Learn the 90-minute FSA guideline, danger zone limits, and safe cooling methods.',
    url: 'https://www.saimdev.site/blog/commercial-kitchen-food-cooling-temperature-guide',
    siteName: 'Saim Dev',
    locale: 'en_GB',
    type: 'article',
    publishedTime: '2026-10-25T00:00:00.000Z',
    modifiedTime: '2026-10-31T00:00:00.000Z',
    authors: ['https://www.saimdev.site/about'],
    images: [{ url: 'https://www.saimdev.site/og-image.png', width: 1200, height: 630, alt: "Commercial Kitchen Food Cooling Temperature Rules UK" }]
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@saimwebdev',
    title: 'Commercial Kitchen Food Cooling Temperature Rules UK | Saim Dev',
    description: 'Complete UK guide to commercial kitchen food cooling temperature rules. Learn the 90-minute FSA guideline, danger zone limits, and safe cooling methods.',
    images: ['https://www.saimdev.site/og-image.png']
  }
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Commercial Kitchen Food Cooling Temperature Rules UK | Saim Dev",
    "description": "Complete UK guide to commercial kitchen food cooling temperature rules. Learn the 90-minute FSA guideline, danger zone limits, and safe cooling methods.",
    "url": "https://www.saimdev.site/blog/commercial-kitchen-food-cooling-temperature-guide",
    "datePublished": "2026-10-25",
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
      "@id": "https://www.saimdev.site/blog/commercial-kitchen-food-cooling-temperature-guide"
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
        "name": "Commercial Kitchen Food Cooling Temperature Guide",
        "item": "https://www.saimdev.site/blog/commercial-kitchen-food-cooling-temperature-guide"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Why must cooked food be cooled quickly in commercial catering?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Rapid cooling minimises time in the bacterial danger zone between 8°C and 63°C, preventing spore germination and rapid bacterial multiplication (such as Bacillus cereus in rice and Clostridium perfringens in meat gravies)."
        }
      },
      {
        "@type": "Question",
        "name": "What is the safest way to cool a large batch of hot food?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Dividing large batches into shallow stainless steel gastronorm trays (under 50mm depth) and using a blast chiller or ice-water bath with frequent stirring ensures rapid heat dissipation from the thermal core."
        }
      },
      {
        "@type": "Question",
        "name": "Can a commercial blast chiller be used for hot cooked food?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Commercial blast chillers are designed specifically to pull hot cooked food down below 3°C to 5°C within 90 minutes using high-velocity chilled airflow without warming existing refrigerated items."
        }
      },
      {
        "@type": "Question",
        "name": "How should cooked rice be cooled in a restaurant or takeaway?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Spread cooked rice into shallow, thin layers and cool as quickly as possible—ideally within one hour as advised by the Food Standards Agency (FSA)—then chill below 5°C to inhibit toxin production from Bacillus cereus spores."
        }
      },
      {
        "@type": "Question",
        "name": "What data must a kitchen record during food cooling?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Record the date, food item, batch size, cooling start time, cooling completion time, final core temperature reading, and staff initials in your food safety temperature log."
        }
      },
      {
        "@type": "Question",
        "name": "What should kitchen staff do if food does not cool within target times?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Execute pre-determined HACCP corrective actions: subdivide into smaller pans, add ice baths, or safely discard the food if danger zone time limits have been exceeded."
        }
      },
      {
        "@type": "Question",
        "name": "Is there one statutory cooling time that applies to every UK food business?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "While the FSA recommends cooling food to 8°C or below within 90 minutes as standard SFBB best practice, exact cooling procedures depend on food density, batch mass, and your validated HACCP management plan."
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
      <BlogPostCoolingGuide />
    </>
  );
}
'''

with open('app/blog/commercial-kitchen-food-cooling-temperature-guide/page.tsx', 'w', encoding='utf-8') as f:
    f.write(page_content)

print("Updated app/blog/commercial-kitchen-food-cooling-temperature-guide/page.tsx")
