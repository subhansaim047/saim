import fs from "fs";

const content = fs.readFileSync("src/data/saim_templates.ts", "utf8");
const equalsIdx = content.indexOf("=", content.indexOf("FOOD_SAFETY_TEMPLATES"));
const arrayStart = content.indexOf("[", equalsIdx);
const arrayEnd = content.indexOf("];\n\nexport const ALL_CATEGORIES");
const templates = JSON.parse(content.slice(arrayStart, arrayEnd + 1));

console.log(`Loaded ${templates.length} templates`);

const regex = /(official|compliant|compliance|guarantee|certified|5-star|5★|fsa standards|approved|audit ready|inspection ready|prevent|eho approved|100%|free from)/gi;

const hits = [];
templates.forEach(t => {
  ['title', 'desc', 'badge', 'preheader'].forEach(f => {
    if (t[f] && regex.test(t[f])) {
      hits.push({ id: t.id, slug: t.slug, field: f, val: t[f] });
    }
  });
});

console.log(`Found ${hits.length} field hits across templates`);
const descHits = hits.filter(h => h.field === 'desc');
console.log(`Desc hits: ${descHits.length}`);
descHits.slice(0, 15).forEach(h => {
  console.log(`${h.id}: ${h.val}`);
});

const otherHits = hits.filter(h => h.field !== 'desc');
console.log(`Other field hits: ${otherHits.length}`);
otherHits.forEach(h => console.log(`${h.id} (${h.field}): ${h.val}`));
