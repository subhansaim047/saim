import fs from "fs";

const CORE_PAGES_METADATA = JSON.parse(fs.readFileSync("src/data/core_metadata.json", "utf8"));
const pagePlan = JSON.parse(fs.readFileSync("src/data/page_plan.json", "utf8"));

const keepAndImprove = Object.keys(pagePlan).filter(
  slug => pagePlan[slug].bucket === "KEEP" || pagePlan[slug].bucket === "IMPROVE"
);

console.log(`Verifying metadata guards for ${keepAndImprove.length} KEEP/IMPROVE pages...`);

let errors = 0;
const titles = new Map();
const descs = new Map();

for (const slug of keepAndImprove) {
  const meta = CORE_PAGES_METADATA[slug];
  if (!meta) {
    console.error(`[FAIL] Missing CORE_PAGES_METADATA for indexable slug: "${slug}"`);
    errors++;
    continue;
  }

  // 1. Title length <= 60
  if (meta.title.length > 60) {
    console.error(`[FAIL] Title exceeds 60 chars for ${slug} (${meta.title.length} chars): "${meta.title}"`);
    errors++;
  }

  // 2. Title contains 'Free'
  if (!meta.title.includes("Free")) {
    console.error(`[FAIL] Title must include "Free" for ${slug}: "${meta.title}"`);
    errors++;
  }

  // 3. Title ends with ' | Saim Dev'
  if (!meta.title.endsWith(" | Saim Dev")) {
    console.error(`[FAIL] Title must end with " | Saim Dev" for ${slug}: "${meta.title}"`);
    errors++;
  }

  // 4. Description length 120-155 chars
  if (meta.desc.length < 120 || meta.desc.length > 155) {
    console.error(`[FAIL] Description length outside 120-155 range for ${slug} (${meta.desc.length} chars): "${meta.desc}"`);
    errors++;
  }

  // 5. Duplicate title check
  if (titles.has(meta.title)) {
    console.error(`[FAIL] Duplicate title between "${slug}" and "${titles.get(meta.title)}": "${meta.title}"`);
    errors++;
  }
  titles.set(meta.title, slug);

  // 6. Duplicate description check
  if (descs.has(meta.desc)) {
    console.error(`[FAIL] Duplicate description between "${slug}" and "${descs.get(meta.desc)}": "${meta.desc}"`);
    errors++;
  }
  descs.set(meta.desc, slug);

  // 7. Actionable howTo steps check
  if (!Array.isArray(meta.howTo) || meta.howTo.length < 3) {
    console.error(`[FAIL] Page ${slug} must have at least 3 actionable how-to steps`);
    errors++;
  }
}

if (errors === 0) {
  console.log(`\nALL METADATA GUARDS PASSED SUCCESSFULLY!`);
  console.log(`- Verified ${keepAndImprove.length} pages.`);
  console.log(`- Zero title violations, zero description length violations, zero duplicates.`);
  process.exit(0);
} else {
  console.error(`\nMetadata guards failed with ${errors} error(s).`);
  process.exit(1);
}
