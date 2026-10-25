const fs = require('fs');
const path = require('path');

const content = fs.readFileSync(path.join(__dirname, '..', 'src', 'data', 'saim_templates.ts'), 'utf8');
const match = content.match(/export const FOOD_SAFETY_TEMPLATES:\s*FoodSafetyTemplate\[\]\s*=\s*(\[[\s\S]*?\]);/);
const list = JSON.parse(match[1]);

function checkToolType(template) {
  const isRecipeTool =
    template.slug.includes("recipe") ||
    template.title.toLowerCase().includes("recipe");

  const isCostTool =
    !isRecipeTool &&
    (template.slug.includes("cost") ||
      template.slug.includes("margin") ||
      template.title.toLowerCase().includes("cost") ||
      template.title.toLowerCase().includes("margin"));

  const isHaccpTool =
    template.slug.includes("haccp") ||
    template.slug.includes("flow-chart") ||
    template.slug.includes("hazard-analysis") ||
    template.slug.includes("food-safety-plan") ||
    template.slug.includes("critical-control-point");

  const isQuizTool =
    template.slug.includes("quiz") ||
    template.title.toLowerCase().includes("quiz");

  const isAllergenTool =
    !isRecipeTool &&
    !isCostTool &&
    !isHaccpTool &&
    !isQuizTool &&
    (template.slug.includes("allergen") ||
      template.slug.includes("allergy") ||
      template.title.toLowerCase().includes("allergen") ||
      template.title.toLowerCase().includes("allergy") ||
      template.slug.includes("natasha"));

  const isChecklistOrLog =
    !isRecipeTool &&
    !isCostTool &&
    !isHaccpTool &&
    !isQuizTool &&
    !isAllergenTool &&
    (template.type === "checklist" ||
      template.type === "log" ||
      template.slug.includes("checklist") ||
      template.slug.includes("log") ||
      template.slug.includes("schedule") ||
      template.slug.includes("sheet") ||
      template.slug.includes("opening") ||
      template.slug.includes("closing") ||
      template.slug.includes("sop") ||
      template.slug.includes("audit") ||
      template.slug.includes("delivery") ||
      template.slug.includes("inspection"));

  return { isRecipeTool, isCostTool, isHaccpTool, isQuizTool, isAllergenTool, isChecklistOrLog };
}

list.forEach(t => {
  if (t.slug.includes('calc') || t.slug.includes('recipe') || t.slug.includes('cost') || t.slug.includes('allergy')) {
    console.log(t.slug, '=>', checkToolType(t));
  }
});
