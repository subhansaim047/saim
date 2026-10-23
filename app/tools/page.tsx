import type { Metadata } from "next";
import { FoodSafetyTemplatesPage } from "@/components/FoodSafetyTemplatesPage";
import { FOOD_SAFETY_TEMPLATES } from "@/data/saim_templates";

export const metadata: Metadata = {
  title: "Food Safety Templates Hub: Posters, Checklists, Logs & Tools | Free Download",
  description: `${FOOD_SAFETY_TEMPLATES.length} free, printable food-safety templates, checklists, posters and kitchen tools for UK food businesses. Direct PDF download, no sign-up.`,
  alternates: {
    canonical: "https://www.saimdev.site/tools"
  },
  openGraph: {
    title: "Food Safety Templates Hub: Posters, Checklists, Logs & Tools",
    description: `${FOOD_SAFETY_TEMPLATES.length} free, printable food-safety templates, checklists, posters and kitchen tools for UK food businesses. Direct PDF download, no sign-up.`,
    url: "https://www.saimdev.site/tools",
    siteName: "Saim Dev",
    locale: "en_GB",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Food Safety Templates Hub: Posters, Checklists, Logs & Tools",
    description: `${FOOD_SAFETY_TEMPLATES.length} free, printable food-safety templates, checklists, posters and kitchen tools for UK food businesses. Direct PDF download, no sign-up.`
  }
};

export default function ToolsRoute() {
  return <FoodSafetyTemplatesPage />;
}
