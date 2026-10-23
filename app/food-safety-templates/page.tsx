import type { Metadata } from "next";
import { FoodSafetyTemplatesPage } from "@/components/FoodSafetyTemplatesPage";

export const metadata: Metadata = {
  title: "Food Safety Templates Hub: Posters, Checklists, Logs, Smart Tools | Free Download",
  description:
    "Explore our collection of food safety templates, checklists, logs, posters, and smart tools. 100% Free downloads compliant with UK Natasha's Law & FSA standards.",
  alternates: {
    canonical: "https://www.saimdev.site/food-safety-templates"
  },
  openGraph: {
    title: "Food Safety Templates Hub: Posters, Checklists, Logs, Smart Tools",
    description:
      "All 170+ Food Safety Posters, Logs, Checklists, and Interactive Smart Calculators. 100% Free forever.",
    url: "https://www.saimdev.site/food-safety-templates",
    siteName: "Saim Dev",
    locale: "en_GB",
    type: "website"
  }
};

export default function FoodSafetyTemplatesRoute() {
  return <FoodSafetyTemplatesPage />;
}
