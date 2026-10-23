import fs from "fs";

// 1. Update saim_templates.ts
const tsPath = "src/data/saim_templates.ts";
let tsContent = fs.readFileSync(tsPath, "utf8");

// Extract templates array
const equalsIdx = tsContent.indexOf("=", tsContent.indexOf("FOOD_SAFETY_TEMPLATES"));
const arrayStart = tsContent.indexOf("[", equalsIdx);
const arrayEnd = tsContent.indexOf("];\n\nexport const ALL_CATEGORIES");
const templates = JSON.parse(tsContent.slice(arrayStart, arrayEnd + 1));

console.log(`Original templates count: ${templates.length}`);

// Remove template-2 and template-3 (identical duplicates of template-93 "Food Cooling Poster")
const cleanedTemplates = templates.filter(t => t.id !== "template-2" && t.id !== "template-3");

// Fix template-99: was titled "Safe Food Preparation" but image/slug is "Vacuum-Sealed Food Shelf-Life Chart"
const t99 = cleanedTemplates.find(t => t.id === "template-99");
if (t99) {
  t99.title = "Vacuum-Sealed Food Shelf-Life Chart";
  t99.desc = "Food safety storage chart for vacuum-sealed foods. Reference guide for refrigeration and freezer shelf life.";
}

// Fix template-100: "Calculating Food Cost" type should be smart_tool
const t100 = cleanedTemplates.find(t => t.id === "template-100");
if (t100) {
  t100.type = "smart_tool";
  t100.preheader = "SMART TOOL";
}

console.log(`Cleaned templates count: ${cleanedTemplates.length}`);

// Re-serialize formatted JSON
const newArrayJson = JSON.stringify(cleanedTemplates, null, 2);
const updatedTsContent = tsContent.slice(0, arrayStart) + newArrayJson + tsContent.slice(arrayEnd + 1);
fs.writeFileSync(tsPath, updatedTsContent, "utf8");
console.log("Updated src/data/saim_templates.ts successfully.");

// 2. Update app/tools/page.tsx
const toolsPagePath = "app/tools/page.tsx";
const toolsPageContent = `import type { Metadata } from "next";
import { FoodSafetyTemplatesPage } from "@/components/FoodSafetyTemplatesPage";
import { FOOD_SAFETY_TEMPLATES } from "@/data/saim_templates";

export const metadata: Metadata = {
  title: "Food Safety Templates Hub: Posters, Checklists, Logs & Tools | Free Download",
  description: \`\${FOOD_SAFETY_TEMPLATES.length} free, printable food-safety templates, checklists, posters and kitchen tools for UK food businesses. Direct PDF download, no sign-up.\`,
  alternates: {
    canonical: "https://www.saimdev.site/tools"
  },
  openGraph: {
    title: "Food Safety Templates Hub: Posters, Checklists, Logs & Tools",
    description: \`\${FOOD_SAFETY_TEMPLATES.length} free, printable food-safety templates, checklists, posters and kitchen tools for UK food businesses. Direct PDF download, no sign-up.\`,
    url: "https://www.saimdev.site/tools",
    siteName: "Saim Dev",
    locale: "en_GB",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Food Safety Templates Hub: Posters, Checklists, Logs & Tools",
    description: \`\${FOOD_SAFETY_TEMPLATES.length} free, printable food-safety templates, checklists, posters and kitchen tools for UK food businesses. Direct PDF download, no sign-up.\`
  }
};

export default function ToolsRoute() {
  return <FoodSafetyTemplatesPage />;
}
`;
fs.writeFileSync(toolsPagePath, toolsPageContent, "utf8");
console.log("Updated app/tools/page.tsx successfully.");

// 3. Update app/food-safety-templates/page.tsx
const fstPagePath = "app/food-safety-templates/page.tsx";
const fstPageContent = `import type { Metadata } from "next";
import { FoodSafetyTemplatesPage } from "@/components/FoodSafetyTemplatesPage";
import { FOOD_SAFETY_TEMPLATES } from "@/data/saim_templates";

export const metadata: Metadata = {
  title: "Food Safety Templates Hub: Posters, Checklists, Logs & Tools | Free Download",
  description: \`\${FOOD_SAFETY_TEMPLATES.length} free, printable food-safety templates, checklists, posters and kitchen tools for UK food businesses. Direct PDF download, no sign-up.\`,
  alternates: {
    canonical: "https://www.saimdev.site/food-safety-templates"
  },
  openGraph: {
    title: "Food Safety Templates Hub: Posters, Checklists, Logs & Tools",
    description: \`\${FOOD_SAFETY_TEMPLATES.length} free, printable food-safety templates, checklists, posters and kitchen tools for UK food businesses. Direct PDF download, no sign-up.\`,
    url: "https://www.saimdev.site/food-safety-templates",
    siteName: "Saim Dev",
    locale: "en_GB",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Food Safety Templates Hub: Posters, Checklists, Logs & Tools",
    description: \`\${FOOD_SAFETY_TEMPLATES.length} free, printable food-safety templates, checklists, posters and kitchen tools for UK food businesses. Direct PDF download, no sign-up.\`
  }
};

export default function FoodSafetyTemplatesRoute() {
  return <FoodSafetyTemplatesPage />;
}
`;
fs.writeFileSync(fstPagePath, fstPageContent, "utf8");
console.log("Updated app/food-safety-templates/page.tsx successfully.");
