import fs from "fs";

// Check if there are other templates with vacuum in title or slug
const content = fs.readFileSync("src/data/saim_templates.ts", "utf8");
const equalsIdx = content.indexOf("=", content.indexOf("FOOD_SAFETY_TEMPLATES"));
const arrayStart = content.indexOf("[", equalsIdx);
const arrayEnd = content.indexOf("];\n\nexport const ALL_CATEGORIES");
const templates = JSON.parse(content.slice(arrayStart, arrayEnd + 1));

const t99 = templates.find(t => t.id === "template-99");
console.log("Template 99:", t99);

const t4 = templates.find(t => t.id === "template-4");
console.log("Template 4:", t4);

const vacuum = templates.filter(t => t.title.toLowerCase().includes("vacuum") || t.slug.includes("vacuum"));
console.log("Vacuum templates:", vacuum.map(v => ({ id: v.id, title: v.title, slug: v.slug })));
