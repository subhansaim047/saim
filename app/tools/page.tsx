import type { Metadata } from "next";
import { FoodSafetyTemplatesPage } from "@/components/FoodSafetyTemplatesPage";

export const metadata: Metadata = {
  title: 'Free UK Kitchen Tools & Food Safety Templates Hub',
  description: 'Free compliance tools for UK commercial kitchens. Access 14-allergen matrices, PPDS label makers, food cost calculators, and SFBB temperature logs.',
  alternates: {
    canonical: "https://www.saimdev.site/tools"
  },
  openGraph: {
    title: 'Free UK Kitchen Tools & Food Safety Templates Hub',
    description: 'Free compliance tools for UK commercial kitchens. Access 14-allergen matrices, PPDS label makers, food cost calculators, and SFBB temperature logs.',
    url: "https://www.saimdev.site/tools",
    siteName: "Saim Dev",
    locale: "en_GB",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: 'Free UK Kitchen Tools & Food Safety Templates Hub',
    description: "Free printable food safety templates, checklists, logs and posters for UK restaurants and takeaways. Edit online, then print or save as PDF."
  }
};

export default function Route() {
  return <FoodSafetyTemplatesPage />;
}
