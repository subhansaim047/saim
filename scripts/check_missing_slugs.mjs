import fs from "fs";

const plan = JSON.parse(fs.readFileSync("src/data/page_plan.json", "utf8"));
const content = fs.readFileSync("src/data/saim_templates.ts", "utf8");
const equalsIdx = content.indexOf("=", content.indexOf("FOOD_SAFETY_TEMPLATES"));
const arrayStart = content.indexOf("[", equalsIdx);
const arrayEnd = content.indexOf("];\n\nexport const ALL_CATEGORIES");
const templates = JSON.parse(content.slice(arrayStart, arrayEnd + 1));

const targetSlugs = [
  "personal-hygiene-checklist",
  "waste-management-sop",
  "safe-cooking-temperature-chart",
  "dry-storage-temperature-log",
  "hot-holding-temperature-log"
];

targetSlugs.forEach(ts => {
  const found = templates.find(t => t.slug === ts);
  console.log(`Checking ${ts}: ${found ? "FOUND" : "NOT FOUND"}`);
  if (!found) {
    const candidates = templates.filter(t => t.slug.includes(ts.split("-")[0]));
    console.log(`  Candidates:`, candidates.map(c => c.slug));
  }
});
