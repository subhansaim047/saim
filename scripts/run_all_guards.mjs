import fs from "fs";
import path from "path";

console.log("=================================================");
console.log("       SAIMDEV.SITE - CI QUALITY GUARDS           ");
console.log("=================================================\n");

let failures = 0;

function assert(condition, message) {
  if (!condition) {
    console.error(`❌ [FAIL] ${message}`);
    failures++;
  } else {
    console.log(`✅ [PASS] ${message}`);
  }
}

// -----------------------------------------------------------------
// GUARD 1: Forbidden claims in content / templates data
// -----------------------------------------------------------------
console.log("\n--- Guard 1: Forbidden Sitewide Claims Check ---");
const forbiddenPatterns = [
  /100%\s+free\s+downloads\s+compliant/i,
  /official\s+14\s+food\s+allergen/i,
  /achieve\s+5-star\s+food\s+hygiene/i,
  /prevent\s+catastrophic\s+allergy/i,
  /fsa\s+compliant/i,
  /eho\s+approved/i,
  /audited\s+by/i
];

const filesToScan = [
  "src/data/saim_templates.ts",
  "src/components/FoodSafetyTemplatesPage.tsx",
  "src/components/TemplateDetailPage.tsx",
  "app/tools/page.tsx",
  "app/food-safety-templates/page.tsx",
  "src/components/tools/AllergenMatrixTool.tsx"
];

for (const file of filesToScan) {
  if (fs.existsSync(file)) {
    const content = fs.readFileSync(file, "utf8");
    for (const pattern of forbiddenPatterns) {
      const match = content.match(pattern);
      assert(!match, `No forbidden claim matching ${pattern} in ${file}`);
    }
  }
}

// -----------------------------------------------------------------
// GUARD 2: Hub card integrity (valid routes, unique slugs, images)
// -----------------------------------------------------------------
console.log("\n--- Guard 2: Hub Integrity & Asset Links ---");
const tsContent = fs.readFileSync("src/data/saim_templates.ts", "utf8");
const equalsIdx = tsContent.indexOf("=", tsContent.indexOf("FOOD_SAFETY_TEMPLATES"));
const arrayStart = tsContent.indexOf("[", equalsIdx);
const catIdx = tsContent.indexOf("export const ALL_CATEGORIES");
const arrayEnd = tsContent.lastIndexOf("];", catIdx);
const templates = JSON.parse(tsContent.slice(arrayStart, arrayEnd + 1));

const seenSlugs = new Set();
let missingImages = 0;

for (const t of templates) {
  assert(t.slug && t.slug.trim() !== "", `Template ${t.id} has valid slug`);
  assert(!seenSlugs.has(t.slug), `Slug "${t.slug}" is unique across templates`);
  seenSlugs.add(t.slug);

  const cleanImg = t.imgUrl.replace(/^\//, "");
  if (!fs.existsSync(path.join("public", cleanImg))) {
    missingImages++;
    console.error(`Missing image for ${t.id}: public/${cleanImg}`);
  }
}
assert(missingImages === 0, `All ${templates.length} templates have valid image files on disk`);

// -----------------------------------------------------------------
// GUARD 3: Metadata length & uniqueness on KEEP/IMPROVE pages
// -----------------------------------------------------------------
console.log("\n--- Guard 3: Core Indexed Pages Metadata Quality ---");
const pagePlan = JSON.parse(fs.readFileSync("src/data/page_plan.json", "utf8"));
const coreMeta = JSON.parse(fs.readFileSync("src/data/core_metadata.json", "utf8"));

const keepAndImprove = Object.keys(pagePlan).filter(
  slug => pagePlan[slug].bucket === "KEEP" || pagePlan[slug].bucket === "IMPROVE"
);

const titles = new Set();
const descriptions = new Set();

for (const slug of keepAndImprove) {
  const meta = coreMeta[slug];
  assert(!!meta, `Page "${slug}" has hand-crafted core metadata`);
  if (meta) {
    assert(meta.title.length <= 60, `Title <= 60 chars for ${slug} (${meta.title.length} chars)`);
    assert(meta.title.includes("Free"), `Title includes "Free" for ${slug}`);
    assert(meta.title.endsWith(" | Saim Dev") || meta.title === "Free UK Takeaway Allergen Chart Generator (14 Allergens)", `Title ends with " | Saim Dev" or matches approved title for ${slug}`);
    assert(meta.desc.length >= 120 && meta.desc.length <= 155, `Description in range 120-155 chars for ${slug} (${meta.desc.length} chars)`);
    assert(!titles.has(meta.title), `Title is unique for ${slug}`);
    assert(!descriptions.has(meta.desc), `Description is unique for ${slug}`);
    titles.add(meta.title);
    descriptions.add(meta.desc);
  }
}

// -----------------------------------------------------------------
// GUARD 4: Sitemap & Noindex Alignment
// -----------------------------------------------------------------
console.log("\n--- Guard 4: Sitemap & Noindex Alignment ---");
const sitemapContent = fs.readFileSync("public/sitemap.xml", "utf8");

let noindexLeakInSitemap = 0;
for (const [slug, plan] of Object.entries(pagePlan)) {
  const urlEntry = `https://www.saimdev.site/food-safety-templates/${slug}`;
  if (plan.bucket === "NOINDEX" || plan.bucket === "MERGE") {
    if (sitemapContent.includes(urlEntry)) {
      noindexLeakInSitemap++;
      console.error(`NOINDEX page "${slug}" leaked into sitemap.xml!`);
    }
  } else if (plan.bucket === "KEEP" || plan.bucket === "IMPROVE") {
    assert(sitemapContent.includes(urlEntry), `Indexed page "${slug}" is present in sitemap.xml`);
  }
}
assert(noindexLeakInSitemap === 0, `Zero NOINDEX or MERGE pages appear in sitemap.xml`);

// -----------------------------------------------------------------
// GUARD 5: Allergen chart demo data safety & UI terminology
// -----------------------------------------------------------------
console.log("\n--- Guard 5: Allergen Tool Data & Semantics Safety ---");
const allergenToolContent = fs.readFileSync("src/components/tools/AllergenMatrixTool.tsx", "utf8");

assert(!allergenToolContent.includes("Free From:"), `No "Free From:" filter labels in AllergenMatrixTool UI`);
assert(!allergenToolContent.includes("Audited By"), `No "Audited By" claims in AllergenMatrixTool UI`);
assert(!allergenToolContent.includes("Artisan Kitchen & Takeaway Ltd"), `No prefilled company name in AllergenMatrixTool`);
assert(allergenToolContent.includes("Covers the 14 UK/EU allergens"), `Contains approved neutral badge`);
assert(allergenToolContent.includes("YES = Contains"), `Contains safe legend semantics`);

// Check gluten demo data
assert(allergenToolContent.includes('gluten: "contains"'), `Demo dishes containing gluten marked as contains`);

// Check review date starts empty
assert(allergenToolContent.includes('const [reviewDate, setReviewDate] = useState("");'), `reviewDate starts empty in AllergenMatrixTool`);
assert(!allergenToolContent.includes('new Date()'), `No build-time new Date() in AllergenMatrixTool`);

// -----------------------------------------------------------------
// GUARD 6: No SMS placeholder tokens in components
// -----------------------------------------------------------------
console.log("\n--- Guard 6: SMS Placeholder Tokens Check ---");
const filesToCheckSms = [
  "src/components/ContactPage.tsx",
  "src/components/PrivacyPolicy.tsx",
  "src/components/TermsOfService.tsx",
  "src/components/ServicesPage.tsx",
  "src/components/CaseStudiesPage.tsx",
  "src/components/BlogPost3Page.tsx"
];

for (const file of filesToCheckSms) {
  if (fs.existsSync(file)) {
    const content = fs.readFileSync(file, "utf8");
    const smsMatch = content.match(/Instagram\s*\(SMS\)|Instagram:\s*SMS|via\s+Instagram\s+at\s+SMS|Inquiry\s+on\s+SMS|Saim\s+Dev\s+\(SMS\)/i);
    assert(!smsMatch, `No SMS placeholder tokens in ${file}`);
  }
}

// -----------------------------------------------------------------
// GUARD 7: Demo Data Ingredient to Allergen Lint
// -----------------------------------------------------------------
console.log("\n--- Guard 7: Demo Data Ingredient-to-Allergen Lint ---");
assert(allergenToolContent.includes('eggs: "contains"') && allergenToolContent.includes('Egg-washed panko crumbed king prawns'), `Egg ingredient in King Prawns marked as eggs contains`);
assert(allergenToolContent.includes('mustard: "contains"') && allergenToolContent.includes('balsamic vinaigrette (balsamic vinegar, olive oil, mustard)'), `Mustard ingredient in Garden Salad marked as mustard contains`);
assert(allergenToolContent.includes('sulphites: "contains"'), `Sulphites ingredient in Garden Salad marked as sulphites contains`);
assert(allergenToolContent.includes('crustaceans: "contains"'), `Prawn ingredient in King Prawns marked as crustaceans contains`);
assert(allergenToolContent.includes('celery: "contains"'), `Celery ingredient in Hot Wings marked as celery contains`);

// -----------------------------------------------------------------
// FINAL SUMMARY
// -----------------------------------------------------------------
console.log("\n=================================================");
if (failures === 0) {
  console.log("🎉 ALL QUALITY GUARDS PASSED WITH ZERO ERRORS!");
  console.log("=================================================");
  process.exit(0);
} else {
  console.error(`💥 QUALITY GUARDS FAILED WITH ${failures} ERROR(S)!`);
  console.log("=================================================");
  process.exit(1);
}
