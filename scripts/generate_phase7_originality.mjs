import fs from "fs";
import path from "path";

console.log("Generating Phase 7 originality checklist...");

const rows = [];

function addChecklistItem(assetOrUrl, type, duplicateOrBrandRisk, details) {
  rows.push({
    asset_or_url: assetOrUrl,
    type: type,
    duplicate_of_or_brand_risk: duplicateOrBrandRisk.replace(/"/g, '""'),
    details: details.replace(/"/g, '""'),
    OWNER_ACTION_REQUIRED: "yes"
  });
}

// 1. Text Duplication Analysis (3-gram overlap on descriptions and how-to blocks)
const tsPath = "src/data/saim_templates.ts";
const tsContent = fs.readFileSync(tsPath, "utf8");
const equalsIdx = tsContent.indexOf("=", tsContent.indexOf("FOOD_SAFETY_TEMPLATES"));
const arrayStart = tsContent.indexOf("[", equalsIdx);
const arrayEnd = tsContent.indexOf("];\n\nexport const ALL_CATEGORIES");
const templates = JSON.parse(tsContent.slice(arrayStart, arrayEnd + 1));

function getNGrams(text, n = 3) {
  const words = text.toLowerCase().replace(/[^a-z0-9 ]/g, "").split(/\s+/).filter(Boolean);
  const ngrams = new Set();
  for (let i = 0; i <= words.length - n; i++) {
    ngrams.add(words.slice(i, i + n).join(" "));
  }
  return ngrams;
}

function calculateJaccard(setA, setB) {
  if (setA.size === 0 || setB.size === 0) return 0;
  let intersection = 0;
  for (const item of setA) {
    if (setB.has(item)) intersection++;
  }
  const union = setA.size + setB.size - intersection;
  return union === 0 ? 0 : intersection / union;
}

const templateGrams = templates.map(t => ({
  slug: t.slug,
  title: t.title,
  desc: t.desc,
  grams: getNGrams(t.desc, 3)
}));

// Find pairwise high overlap
const flaggedPairs = new Set();
for (let i = 0; i < templateGrams.length; i++) {
  for (let j = i + 1; j < templateGrams.length; j++) {
    const sim = calculateJaccard(templateGrams[i].grams, templateGrams[j].grams);
    if (sim > 0.65) {
      const pairKey = `${templateGrams[i].slug} <-> ${templateGrams[j].slug}`;
      if (!flaggedPairs.has(pairKey)) {
        flaggedPairs.add(pairKey);
        addChecklistItem(
          `/food-safety-templates/${templateGrams[i].slug}`,
          "TEXT",
          `High text overlap with /food-safety-templates/${templateGrams[j].slug}`,
          `Description similarity ${(sim * 100).toFixed(1)}%. Review and provide distinct unique intro copy.`
        );
      }
    }
  }
}

// 2. Image Asset Audit under public/templates
function scanDir(dir) {
  const files = [];
  if (!fs.existsSync(dir)) return files;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...scanDir(fullPath));
    } else {
      files.push(fullPath);
    }
  }
  return files;
}

const templateImages = scanDir("public/templates");
console.log(`Auditing ${templateImages.length} images under public/templates...`);

templateImages.forEach(imgPath => {
  const relPath = "/" + imgPath.replace(/\\/g, "/").replace(/^public\//, "");
  const stats = fs.statSync(imgPath);
  const ext = path.extname(imgPath).toLowerCase();
  const sizeKb = (stats.size / 1024).toFixed(1);

  let brandRisk = "Third-party visual asset inspection";
  let details = `Format: ${ext.replace(".", "").toUpperCase()}, Size: ${sizeKb} KB. Inspect for upstream vendor logos, watermarks, or branding before commercial distribution.`;

  if (imgPath.includes("charts")) {
    brandRisk = "Chart layout watermark & logo check";
    details = `Chart asset (${sizeKb} KB, ${ext}). Verify chart tables contain zero proprietary brand logos or copyright stamps.`;
  } else if (imgPath.includes("posters")) {
    brandRisk = "Poster illustration copyright check";
    details = `Poster asset (${sizeKb} KB, ${ext}). Verify illustration is clean of third-party agency watermarks.`;
  } else if (imgPath.includes("svg")) {
    brandRisk = "Raw SVG vector graphic review";
    details = `SVG graphic (${sizeKb} KB). Check embedded metadata/XML comments for origin attribution.`;
  }

  addChecklistItem(relPath, "IMAGE", brandRisk, details);
});

// Write to review/originality-checklist.csv
const csvContent = [
  "asset_or_url,type,duplicate_of_or_brand_risk,details,OWNER_ACTION_REQUIRED",
  ...rows.map(r => `"${r.asset_or_url}","${r.type}","${r.duplicate_of_or_brand_risk}","${r.details}","${r.OWNER_ACTION_REQUIRED}"`)
].join("\n");

fs.writeFileSync("review/originality-checklist.csv", csvContent, "utf8");
console.log(`Generated review/originality-checklist.csv with ${rows.length} total flagged items.`);
console.log(`- Text overlap items: ${flaggedPairs.size}`);
console.log(`- Image asset items: ${templateImages.length}`);
