const fs = require('fs');
const path = require('path');

const tsPath = path.resolve(__dirname, '../src/data/saim_templates.ts');
let content = fs.readFileSync(tsPath, 'utf8');

const jsonMatch = content.match(/export const FOOD_SAFETY_TEMPLATES: FoodSafetyTemplate\[\] = (\[[\s\S]*?\]);/);
if (!jsonMatch) {
  console.error("Could not parse array from saim_templates.ts");
  process.exit(1);
}

const templates = JSON.parse(jsonMatch[1]);
console.log(`Original total count: ${templates.length}`);

// 1. Assign cleaned charts
let chartsUpdated = 0;
templates.forEach(t => {
  if (t.type === 'chart') {
    t.imgUrl = `/templates/charts/${t.id}.png`;
    chartsUpdated++;
  }
});
console.log(`Updated ${chartsUpdated} chart imgUrls.`);

// 2. Filter out ebooks
const nonEbooks = templates.filter(t => t.type !== 'ebook');
console.log(`Removed ${templates.length - nonEbooks.length} ebooks. New total count: ${nonEbooks.length}`);

// 3. Update interface definition
let newContent = content.replace(
  /export type TemplateType = [^;]+;/,
  `export type TemplateType = "poster" | "chart" | "smart_tool" | "checklist" | "log";`
);

// 4. Replace JSON array
newContent = newContent.replace(
  jsonMatch[0],
  `export const FOOD_SAFETY_TEMPLATES: FoodSafetyTemplate[] = ${JSON.stringify(nonEbooks, null, 2)};`
);

fs.writeFileSync(tsPath, newContent, 'utf8');
console.log("Updated src/data/saim_templates.ts successfully!");
