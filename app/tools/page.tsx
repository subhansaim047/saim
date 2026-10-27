import type { Metadata } from "next";
import { FoodSafetyTemplatesPage } from "@/components/FoodSafetyTemplatesPage";

export const metadata: Metadata = {
  title: "Free Food Safety Templates UK | Kitchen Compliance Hub",
  description: "Free food safety templates for UK commercial kitchens. Download 14-allergen matrices, PPDS label makers, food cost calculators, and SFBB temperature logs.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.saimdev.site/tools",
    languages: {
      "en-GB": "https://www.saimdev.site/tools",
    },
  },
  openGraph: {
    type: "website",
    title: "Free Food Safety Templates UK | Kitchen Compliance Hub",
    description: "Free food safety templates for UK commercial kitchens. Download 14-allergen matrices, PPDS label makers, food cost calculators, and SFBB temperature logs.",
    url: "https://www.saimdev.site/tools",
    siteName: "Saim Dev",
    locale: "en_GB",
    images: [
      {
        url: "https://www.saimdev.site/og-tools.png",
        width: 1200,
        height: 630,
        alt: "Free Food Safety Templates UK - Saim Dev",
        type: "image/png"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    creator: "@saimwebdev",
    title: "Free Food Safety Templates UK | Kitchen Compliance Hub",
    description: "Free food safety templates for UK commercial kitchens. Download 14-allergen matrices, PPDS label makers, food cost calculators, and SFBB temperature logs.",
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
        "name": "Free Food Safety Templates UK",
        "item": "https://www.saimdev.site/tools"
      }
    ]
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Free UK Food Safety Templates & Kitchen Management Tools",
    "description": "Essential statutory food hygiene templates, allergen charts, temperature logs, and HACCP tools for UK restaurants and takeaways.",
    "numberOfItems": 14,
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Natasha's Law PPDS Food Label Generator",
        "url": "https://www.saimdev.site/tools/ppds-label-generator"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "14 Allergen Matrix Template UK",
        "url": "https://www.saimdev.site/food-safety-templates/allergy-matrix"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Takeaway 14 Food Allergen Chart",
        "url": "https://www.saimdev.site/food-safety-templates/food-allergen-chart"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Food Cost & Margin Calculator UK",
        "url": "https://www.saimdev.site/food-safety-templates/food-cost-calculator"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "HACCP Plan Builder & CCP Matrix",
        "url": "https://www.saimdev.site/food-safety-templates/haccp-plan-builder"
      },
      {
        "@type": "ListItem",
        "position": 6,
        "name": "SFBB Opening and Closing Checks Template",
        "url": "https://www.saimdev.site/food-safety-templates/opening-and-closing-checklist-template"
      },
      {
        "@type": "ListItem",
        "position": 7,
        "name": "Commercial Fridge Temperature Record Sheet UK",
        "url": "https://www.saimdev.site/food-safety-templates/fridge-temperature-record-sheet-pdf"
      },
      {
        "@type": "ListItem",
        "position": 8,
        "name": "Commercial Freezer Temperature Chart UK",
        "url": "https://www.saimdev.site/food-safety-templates/freezer-temperature-chart"
      },
      {
        "@type": "ListItem",
        "position": 9,
        "name": "Takeaway Cleaning Schedule Template UK",
        "url": "https://www.saimdev.site/food-safety-templates/cleaning-schedule"
      },
      {
        "@type": "ListItem",
        "position": 10,
        "name": "EHO Food Hygiene Inspection Checklist UK",
        "url": "https://www.saimdev.site/food-safety-templates/eho-checklist"
      },
      {
        "@type": "ListItem",
        "position": 11,
        "name": "Goods In Delivery Intake Temperature Log",
        "url": "https://www.saimdev.site/food-safety-templates/delivery-log"
      },
      {
        "@type": "ListItem",
        "position": 12,
        "name": "Hot Holding Temperature Log Sheet UK",
        "url": "https://www.saimdev.site/food-safety-templates/hot-holding-food-temperature-log"
      },
      {
        "@type": "ListItem",
        "position": 13,
        "name": "Commercial Cooking Temperature Record Sheet UK",
        "url": "https://www.saimdev.site/food-safety-templates/cooking-log-template"
      },
      {
        "@type": "ListItem",
        "position": 14,
        "name": "Recipe Scaler & Batch Yield Calculator",
        "url": "https://www.saimdev.site/food-safety-templates/recipe-calculator"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <FoodSafetyTemplatesPage />
    </>
  );
}
