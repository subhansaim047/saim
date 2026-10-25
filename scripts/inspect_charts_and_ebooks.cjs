const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, '../src/data/saim_templates.ts');
const content = fs.readFileSync(filePath, 'utf8');

// Match JSON objects in the array
const jsonPartMatch = content.match(/export const FOOD_SAFETY_TEMPLATES: FoodSafetyTemplate\[\] = (\[[\s\S]*?\]);/);
if (!jsonPartMatch) {
  console.error("Could not find array in saim_templates.ts");
  process.exit(1);
}

const templates = JSON.parse(jsonPartMatch[1]);
console.log(`Total templates currently: ${templates.length}`);

const typeCounts = {};
templates.forEach(t => {
  typeCounts[t.type] = (typeCounts[t.type] || 0) + 1;
});
console.log('Type breakdown:', typeCounts);

const charts = templates.filter(t => t.type === 'chart');
console.log(`\nFound ${charts.length} templates with type === 'chart':`);
charts.forEach((c, idx) => {
  console.log(`${idx + 1}. [${c.id}] ${c.title} (slug: ${c.slug}) -> imgUrl: ${c.imgUrl}, targetUrl: ${c.targetUrl}`);
});

const ebooks = templates.filter(t => t.type === 'ebook');
console.log(`\nFound ${ebooks.length} templates with type === 'ebook':`);
ebooks.forEach((e, idx) => {
  console.log(`${idx + 1}. [${e.id}] ${e.title} (slug: ${e.slug})`);
});
