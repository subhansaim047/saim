import fs from "fs";

const content = fs.readFileSync("src/data/saim_templates.ts", "utf8");
const equalsIdx = content.indexOf("=", content.indexOf("FOOD_SAFETY_TEMPLATES"));
const arrayStart = content.indexOf("[", equalsIdx);
const arrayEnd = content.indexOf("];\n\nexport const ALL_CATEGORIES");
const templates = JSON.parse(content.slice(arrayStart, arrayEnd + 1));

console.log("=== COOLING TEMPLATES ===");
const cooling = templates.filter(t => t.slug.includes("cool") || t.title.toLowerCase().includes("cool"));
cooling.forEach(t => console.log(JSON.stringify({ id: t.id, slug: t.slug, title: t.title, targetUrl: t.targetUrl, imgUrl: t.imgUrl, type: t.type })));

console.log("\n=== SAFE FOOD PREPARATION ===");
const prep = templates.filter(t => t.title.toLowerCase().includes("safe food prep") || t.slug.includes("prep") || t.slug.includes("vacuum"));
prep.forEach(t => console.log(JSON.stringify({ id: t.id, slug: t.slug, title: t.title, targetUrl: t.targetUrl, imgUrl: t.imgUrl })));

console.log("\n=== FOOD COST ===");
const cost = templates.filter(t => t.slug.includes("cost") || t.title.toLowerCase().includes("cost"));
cost.forEach(t => console.log(JSON.stringify({ id: t.id, slug: t.slug, title: t.title, type: t.type, preheader: t.preheader })));
