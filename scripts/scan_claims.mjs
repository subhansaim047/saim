import fs from "fs";
import path from "path";

const claimTerms = [
  "compliant",
  "compliance",
  "official",
  "approved",
  "certified",
  "guarantee",
  "100%",
  "free from",
  "audited by",
  "5-star",
  "5★",
  "prevent",
  "meet standards",
  "meets standards",
  "fsa standards",
  "inspection ready",
  "audit ready",
  "eho approved"
];

function checkFile(filePath) {
  const content = fs.readFileSync(filePath, "utf8");
  const lines = content.split("\n");
  const results = [];
  lines.forEach((line, idx) => {
    const lower = line.toLowerCase();
    for (const term of claimTerms) {
      if (lower.includes(term)) {
        results.push({ lineNum: idx + 1, term, line: line.trim() });
        break;
      }
    }
  });
  return results;
}

const files = [
  "src/data/saim_templates.ts",
  "src/components/FoodSafetyTemplatesPage.tsx",
  "src/components/TemplateDetailPage.tsx",
  "app/tools/page.tsx",
  "app/food-safety-templates/page.tsx",
  "app/food-safety-templates/[slug]/page.tsx",
  "src/components/tools/AllergenMatrixTool.tsx",
  "src/components/tools/DigitalChecklistTool.tsx",
  "src/components/tools/FoodCostCalculatorTool.tsx",
  "src/components/tools/FoodSafetyQuizTool.tsx",
  "src/components/tools/HaccpPlanBuilderTool.tsx",
  "src/components/tools/RecipeCalculatorTool.tsx"
];

for (const f of files) {
  if (fs.existsSync(f)) {
    const hits = checkFile(f);
    console.log(`${f}: ${hits.length} hits`);
    hits.slice(0, 5).forEach(h => console.log(`   L${h.lineNum} [${h.term}]: ${h.line.slice(0, 80)}`));
  }
}
