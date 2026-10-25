const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const saimTemplatesPath = path.join(root, 'src', 'data', 'saim_templates.ts');
const serverDir = path.join(root, 'src', 'server');

if (!fs.existsSync(serverDir)) {
  fs.mkdirSync(serverDir, { recursive: true });
}

let content = fs.readFileSync(saimTemplatesPath, 'utf8');

// Parse the array
// Notice the array is exported as: export const FOOD_SAFETY_TEMPLATES: FoodSafetyTemplate[] = [ ... ];
const jsonMatch = content.match(/export const FOOD_SAFETY_TEMPLATES:\s*FoodSafetyTemplate\[\]\s*=\s*(\[[\s\S]*?\]);/);

if (!jsonMatch) {
  console.error('Could not find FOOD_SAFETY_TEMPLATES array');
  process.exit(1);
}

const templates = JSON.parse(jsonMatch[1]);
console.log(`Parsed ${templates.length} templates.`);

// Build upstream map
const upstreamMap = {};
let countWithPdf = 0;

templates.forEach((t) => {
  if (t.pdfUrl && t.pdfUrl.startsWith('http')) {
    upstreamMap[t.id] = t.pdfUrl;
    countWithPdf++;
    // Replace with local download endpoint
    t.pdfUrl = `/api/download?id=${t.id}`;
  } else {
    t.pdfUrl = '';
  }
});

console.log(`Extracted ${countWithPdf} PDF URLs into server upstream map.`);

// Write upstream map
const upstreamMapPath = path.join(serverDir, 'upstream_pdf_map.json');
fs.writeFileSync(upstreamMapPath, JSON.stringify(upstreamMap, null, 2), 'utf8');
console.log(`Wrote upstream map to ${upstreamMapPath}`);

// Rebuild saim_templates.ts
const newFileContent = `export interface FoodSafetyTemplate {
  id: string;
  slug: string;
  title: string;
  desc: string;
  category: string;
  catSlug: string;
  badge: string;
  imgUrl: string;
  pdfUrl: string;
  type: string;
  views?: string;
  stars?: string;
}

export const FOOD_SAFETY_TEMPLATES: FoodSafetyTemplate[] = ${JSON.stringify(templates, null, 2)};

export const ALL_CATEGORIES = [
  { name: "All Templates", slug: "all", count: FOOD_SAFETY_TEMPLATES.length },
  { name: "HACCP & Compliance", slug: "haccp-compliance", count: FOOD_SAFETY_TEMPLATES.filter(t => t.catSlug === "haccp-compliance" || t.category.includes("HACCP")).length },
  { name: "Temperature Logs", slug: "temperature-logs", count: FOOD_SAFETY_TEMPLATES.filter(t => t.catSlug === "temperature-logs" || t.category.includes("Temp")).length },
  { name: "Cleaning & Sanitation", slug: "cleaning-sanitation", count: FOOD_SAFETY_TEMPLATES.filter(t => t.catSlug === "cleaning-sanitation" || t.category.includes("Cleaning")).length },
  { name: "Checklists & Audits", slug: "checklists-audits", count: FOOD_SAFETY_TEMPLATES.filter(t => t.catSlug === "checklists-audits" || t.category.includes("Checklist")).length },
  { name: "Allergen Management", slug: "allergen-management", count: FOOD_SAFETY_TEMPLATES.filter(t => t.catSlug === "allergen-management" || t.category.includes("Allergen")).length },
  { name: "Posters & Guidelines", slug: "posters-guidelines", count: FOOD_SAFETY_TEMPLATES.filter(t => t.catSlug === "posters-guidelines" || t.category.includes("Poster")).length },
  { name: "Standard Operating Procedures (SOP)", slug: "sop-templates", count: FOOD_SAFETY_TEMPLATES.filter(t => t.catSlug === "sop-templates" || t.category.includes("SOP")).length },
];

export function getTemplateBySlug(slug: string): FoodSafetyTemplate | undefined {
  return FOOD_SAFETY_TEMPLATES.find((t) => t.slug === slug);
}
`;

fs.writeFileSync(saimTemplatesPath, newFileContent, 'utf8');
console.log('Updated src/data/saim_templates.ts successfully!');
