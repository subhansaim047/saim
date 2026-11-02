const fs = require('fs');

const content = fs.readFileSync('src/data/saim_templates.ts', 'utf8');
const jsonMatch = content.match(/export const FOOD_SAFETY_TEMPLATES: FoodSafetyTemplate\[\] = (\[[\s\S]*?\]);/);

if (!jsonMatch) {
  console.log("Could not find array match");
  process.exit(1);
}

const templates = JSON.parse(jsonMatch[1]);
console.log("Total templates parsed:", templates.length);

const categories = {};
templates.forEach(t => {
  const cat = t.category || t.catSlug || t.type || 'uncategorized';
  categories[cat] = (categories[cat] || 0) + 1;
});
console.log("Categories breakdown:", categories);

console.log("\nFirst 10 templates:");
templates.slice(0, 10).forEach((t, i) => {
  console.log(`${i+1}. [${t.id}] ${t.title} -> /food-safety-templates/${t.slug} (Type: ${t.type})`);
});

// Also check interactive tools under /tools/
const toolsDir = 'app/tools';
const toolRoutes = fs.readdirSync(toolsDir).filter(f => fs.statSync(`${toolsDir}/${f}`).isDirectory());
console.log("\nInteractive tool sub-routes under /tools/:", toolRoutes);
