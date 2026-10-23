import type { Metadata } from "next";
import { ToolsPage } from "@/components/ToolsPage";

export const metadata: Metadata = {
  title: "Free Takeaway & Restaurant Food Safety Tools | Allergen Matrix & Food Costing",
  description:
    "100% Free Kitchen Tools for UK takeaways & restaurants. Interactive Natasha's Law Allergen Matrix, Food Cost & Margin Calculator, Recipe Scaler, and Daily SFBB Hygiene Logs. Print-ready for Council EHO audits.",
  alternates: {
    canonical: "https://www.saimdev.site/tools"
  },
  openGraph: {
    title: "Free Food Safety & Takeaway Tools | Natasha's Law Allergen Matrix",
    description:
      "Interactive Food Standards Agency (FSA) compliant Allergen Charts, Food Costing & Recipe Scalers. 100% Free forever.",
    url: "https://www.saimdev.site/tools",
    siteName: "Saim Dev",
    locale: "en_GB",
    type: "website"
  }
};

const toolSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Takeaway & Restaurant Food Safety & Allergen Matrix Tool",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "All",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "GBP"
  },
  "description": "Free interactive Allergen Matrix and Food Safety Management tool compliant with UK Natasha's Law (14 Major Allergens) and FSA guidelines."
};

export default function ToolsRoute() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }}
      />
      <ToolsPage />
    </>
  );
}
