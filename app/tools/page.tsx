import type { Metadata } from "next";
import { FoodSafetyTemplatesPage } from "@/components/FoodSafetyTemplatesPage";

export const metadata: Metadata = {
  title: "Free Food Safety Templates & Kitchen Tools | Saim Dev",
  description: "Free printable food safety templates, checklists, logs and posters for UK restaurants and takeaways. Edit online, then print or save as PDF.",
  alternates: {
    canonical: "https://www.saimdev.site/tools"
  },
  openGraph: {
    title: "Free Food Safety Templates & Kitchen Tools | Saim Dev",
    description: "Free printable food safety templates, checklists, logs and posters for UK restaurants and takeaways. Edit online, then print or save as PDF.",
    url: "https://www.saimdev.site/tools",
    siteName: "Saim Dev",
    locale: "en_GB",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Food Safety Templates & Kitchen Tools | Saim Dev",
    description: "Free printable food safety templates, checklists, logs and posters for UK restaurants and takeaways. Edit online, then print or save as PDF."
  }
};

export default function Route() {
  return <FoodSafetyTemplatesPage />;
}
