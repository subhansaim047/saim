import fs from "fs";

const content = fs.readFileSync("src/data/saim_templates.ts", "utf8");
const equalsIdx = content.indexOf("=", content.indexOf("FOOD_SAFETY_TEMPLATES"));
const arrayStart = content.indexOf("[", equalsIdx);
const arrayEnd = content.indexOf("];\n\nexport const ALL_CATEGORIES");
const templates = JSON.parse(content.slice(arrayStart, arrayEnd + 1));

console.log("Total templates:", templates.length);
templates.forEach(t => console.log(`${t.id.padEnd(14)} | ${t.type.padEnd(10)} | ${t.slug.padEnd(45)} | ${t.title}`));
