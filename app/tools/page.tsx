import type { Metadata } from "next";
import { FoodSafetyTemplatesPage } from "@/components/FoodSafetyTemplatesPage";

export const metadata: Metadata = {
  title: "Food Safety Templates Hub: Posters, Checklists, Logs, Smart Tools | Free Download",
  description:
    "Explore our collection of food safety templates, checklists, logs, posters, and smart tools. Free printable kitchen templates, logs, checklists, and food safety tools for hospitality teams.",
  alternates: {
    canonical: "https://www.saimdev.site/tools"
  },
  openGraph: {
    title: "Food Safety Templates Hub: Posters, Checklists, Logs, Smart Tools",
    description:
      "Food safety posters, logs, checklists, and interactive kitchen calculators for hospitality teams.",
    url: "https://www.saimdev.site/tools",
    siteName: "Saim Dev",
    locale: "en_GB",
    type: "website"
  }
};

export default function ToolsRoute() {
  return <FoodSafetyTemplatesPage />;
}
