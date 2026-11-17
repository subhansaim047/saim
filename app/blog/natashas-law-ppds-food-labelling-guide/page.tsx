import type { Metadata } from 'next';
import { BlogPostNatashasLaw } from '@/components/blog/BlogPostNatashasLaw';

export const metadata: Metadata = {
  title: "Natashas Law PPDS Food Labelling Guide UK | Saim Dev",
  description: "Complete UK compliance guide to Natasha's Law and PPDS food labelling requirements. Learn packaging definitions, ingredient rules, and allergen font standards.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.saimdev.site/blog/natashas-law-ppds-food-labelling-guide',
    languages: {
      'en': 'https://www.saimdev.site/blog/natashas-law-ppds-food-labelling-guide',
      'en-GB': 'https://www.saimdev.site/blog/natashas-law-ppds-food-labelling-guide',
      'en-US': 'https://www.saimdev.site/blog/natashas-law-ppds-food-labelling-guide',
      'x-default': 'https://www.saimdev.site/blog/natashas-law-ppds-food-labelling-guide',
    },
  },
  openGraph: {
    title: "Natashas Law PPDS Food Labelling Guide UK | Saim Dev",
    description: "Complete UK compliance guide to Natasha's Law and PPDS food labelling requirements. Learn packaging definitions, ingredient rules, and allergen font standards.",
    url: 'https://www.saimdev.site/blog/natashas-law-ppds-food-labelling-guide',
    siteName: 'Saim Dev',
    locale: 'en_GB',
    alternateLocale: ['en_US'],
    type: 'article',
    publishedTime: '2026-10-25T00:00:00.000Z',
    modifiedTime: '2026-10-31T00:00:00.000Z',
    authors: ['https://www.saimdev.site/about'],
    images: [{ url: 'https://www.saimdev.site/og-image.png', width: 1200, height: 630, alt: "Natasha's Law PPDS Food Labelling Guide for UK Food Businesses" }]
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@saimwebdev',
    title: "Natashas Law PPDS Food Labelling Guide UK | Saim Dev",
    description: "Complete UK compliance guide to Natasha's Law and PPDS food labelling requirements. Learn packaging definitions, ingredient rules, and allergen font standards.",
    images: ['https://www.saimdev.site/og-image.png']
  }
};

export default function Page() {
  const url = "https://www.saimdev.site/blog/natashas-law-ppds-food-labelling-guide";
  const graphSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        "url": url,
        "name": "Natasha's Law PPDS Food Labelling Guide for UK Food Businesses | Saim Dev",
        "description": "Complete UK compliance guide to Natasha's Law and PPDS food labelling requirements. Learn packaging definitions, ingredient rules, and allergen font standards.",
        "inLanguage": "en-GB",
        "isPartOf": { "@id": "https://www.saimdev.site/#website" },
        "primaryImageOfPage": "https://www.saimdev.site/og-image.png",
        "breadcrumb": { "@id": `${url}#breadcrumb` }
      },
      {
        "@type": "BlogPosting",
        "@id": `${url}#article`,
        "headline": "Natasha's Law PPDS Food Labelling Guide for UK Food Businesses | Saim Dev",
        "description": "Complete UK compliance guide to Natasha's Law and PPDS food labelling requirements. Learn packaging definitions, ingredient rules, and allergen font standards.",
        "url": url,
        "datePublished": "2026-10-25",
        "dateModified": "2026-10-31",
        "inLanguage": "en-GB",
        "author": {
          "@id": "https://www.saimdev.site/#person",
          "@type": "Person",
          "name": "Saim Dev",
          "jobTitle": "Lead Commercial Kitchen Systems & Web Architect",
          "url": "https://www.saimdev.site/about"
        },
        "publisher": { "@id": "https://www.saimdev.site/#organization" },
        "mainEntityOfPage": { "@id": `${url}#webpage` },
        "image": "https://www.saimdev.site/og-image.png"
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
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
            "name": "Natasha's Law PPDS Food Labelling Guide",
            "item": url
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        "isPartOf": { "@id": `${url}#webpage` },
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What does PPDS mean?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "PPDS stands for Prepacked for Direct Sale. It refers to food that is packaged on the same premises from which it is sold to consumers, before the customer selects or orders it."
            }
          },
          {
            "@type": "Question",
            "name": "What is Natasha's Law?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Natasha's Law is the UK Food Information (Amendment) Regulations 2019, which took effect on 1 October 2021. It requires food businesses in England, Wales, Scotland, and Northern Ireland to provide a full ingredients list and clear allergen emphasis on all PPDS food."
            }
          },
          {
            "@type": "Question",
            "name": "Does PPDS food need an ingredients list?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Every PPDS food item must display a complete ingredients list directly on the package, with ingredients listed in descending order by weight as recorded during recipe preparation."
            }
          },
          {
            "@type": "Question",
            "name": "How must allergens be emphasised?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Any of the 14 statutory allergens present in the food must be visually emphasised within the ingredients list every time they appear, such as by using bold typeface, contrasting capital letters, or coloured text styling."
            }
          },
          {
            "@type": "Question",
            "name": "Is a sandwich prepared and wrapped in a cafe PPDS food?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. If a sandwich is prepared, wrapped in packaging (such as film, plastic wedges, or paper bags), and placed in a display fridge before a customer orders it, it is classified as PPDS."
            }
          },
          {
            "@type": "Question",
            "name": "Are online takeaway orders covered by the same rules?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Distance selling follows separate rules under the Food Information Regulations. Allergen information must be made available before purchase is completed (e.g. on your ordering website) and provided in writing at delivery or collection."
            }
          },
          {
            "@type": "Question",
            "name": "What happens if a supplier changes an ingredient?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "If a supplier or ingredient brand changes, operators must immediately check product specifications, update recipe sheets, and print revised packaging labels before selling newly prepared batches."
            }
          },
          {
            "@type": "Question",
            "name": "Can a label generator replace food-safety checks?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Digital label generators format text and assist with layout, but the food business operator remains legally responsible for verifying actual ingredients, recipe accuracy, and supplier allergen specifications."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graphSchema) }}
      />
      <BlogPostNatashasLaw />
    </>
  );
}
