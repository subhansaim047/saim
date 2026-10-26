import type { Metadata } from "next";
import { FoodSafetyTemplatesPage } from "@/components/FoodSafetyTemplatesPage";

export const metadata: Metadata = {
  title: 'Free UK Kitchen Tools & Food Safety Templates Hub',
  description: 'Free compliance tools for UK commercial kitchens. Access 14-allergen matrices, PPDS label makers, food cost calculators, and SFBB temperature logs.',
  alternates: {
    canonical: "https://www.saimdev.site/tools"
  },
  openGraph: {
    type: "website",
    title: 'Free UK Kitchen Tools & Food Safety Templates Hub',
    description: 'Free compliance tools for UK commercial kitchens. Access 14-allergen matrices, PPDS label makers, food cost calculators, and SFBB temperature logs.',
    url: "https://www.saimdev.site/tools",
    siteName: "Saim Dev",
    locale: "en_GB",
    images: [
      {
        url: "https://www.saimdev.site/og-tools.png",
        width: 1200,
        height: 630,
        alt: "UK Kitchen Tools and Food Safety Templates Hub - Saim Dev",
        type: "image/png"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: 'Free UK Kitchen Tools & Food Safety Templates Hub',
    description: 'Free compliance tools for UK commercial kitchens. Access 14-allergen matrices, PPDS label makers, food cost calculators, and SFBB temperature logs.',
    images: ["https://www.saimdev.site/og-tools.png"]
  }
};

export default function Route() {
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
        "name": "Free UK Kitchen Tools & Food Safety Templates",
        "item": "https://www.saimdev.site/tools"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <FoodSafetyTemplatesPage />
    </>
  );
}
