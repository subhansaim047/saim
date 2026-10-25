import fs from "fs";

const content = fs.readFileSync("src/components/TemplateDetailPage.tsx", "utf8");
console.log("Includes calculating-food-cost:", content.includes("calculating-food-cost"));
console.log("Includes cost-calculator:", content.includes("food-cost-calculator"));

// Also check lines where isTool or isSmartTool is checked
const lines = content.split("\n");
lines.forEach((l, i) => {
  if (l.includes("cost") || l.includes("Tool")) {
    if (l.includes("is") || l.includes("slug")) {
      console.log(`L${i+1}: ${l.trim()}`);
    }
  }
});
