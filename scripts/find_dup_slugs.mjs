import fs from "fs";

const content = fs.readFileSync("src/data/saim_templates.ts", "utf8");
const equalsIdx = content.indexOf("=", content.indexOf("FOOD_SAFETY_TEMPLATES"));
const arrayStart = content.indexOf("[", equalsIdx);
const arrayEnd = content.indexOf("];\n\nexport const ALL_CATEGORIES");
const templates = JSON.parse(content.slice(arrayStart, arrayEnd + 1));

const slugMap = new Map();
templates.forEach(t => {
  if (!slugMap.has(t.slug)) {
    slugMap.set(t.slug, []);
  }
  slugMap.get(t.slug).push(t);
});

console.log("=== SLUGS WITH MULTIPLE TEMPLATES ===");
for (const [slug, list] of slugMap.entries()) {
  if (list.length > 1) {
    console.log(`Slug: ${slug} (${list.length} occurrences):`);
    list.forEach(item => console.log(`  - id: ${item.id}, title: ${item.title}, type: ${item.type}`));
  }
}
