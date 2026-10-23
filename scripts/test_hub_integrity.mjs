import fs from "fs";
import path from "path";

console.log("Running Hub Integrity Test...");

const tsPath = "src/data/saim_templates.ts";
const tsContent = fs.readFileSync(tsPath, "utf8");
const equalsIdx = tsContent.indexOf("=", tsContent.indexOf("FOOD_SAFETY_TEMPLATES"));
const arrayStart = tsContent.indexOf("[", equalsIdx);
const catIdx = tsContent.indexOf("export const ALL_CATEGORIES");
const arrayEnd = tsContent.lastIndexOf("];", catIdx);
const templates = JSON.parse(tsContent.slice(arrayStart, arrayEnd + 1));

let errors = 0;
const seenSlugs = new Set();

templates.forEach((t, index) => {
  // 1. Slug check
  if (!t.slug || typeof t.slug !== "string" || t.slug.trim() === "") {
    console.error(`[ERROR] Template index ${index} (${t.id}) missing slug`);
    errors++;
  } else {
    if (seenSlugs.has(t.slug)) {
      console.error(`[ERROR] Duplicate slug detected: ${t.slug} in template ${t.id}`);
      errors++;
    }
    seenSlugs.add(t.slug);
  }

  // 2. Title / Alt text check
  if (!t.title || typeof t.title !== "string" || t.title.trim() === "") {
    console.error(`[ERROR] Template ${t.id} missing title/alt text`);
    errors++;
  }

  // 3. Image check
  if (!t.imgUrl) {
    console.error(`[ERROR] Template ${t.id} missing imgUrl`);
    errors++;
  } else {
    const cleanImgPath = t.imgUrl.startsWith("/") ? t.imgUrl.slice(1) : t.imgUrl;
    const fullImgPath = path.join("public", cleanImgPath);
    if (!fs.existsSync(fullImgPath)) {
      console.error(`[ERROR] Image not found for ${t.id}: ${fullImgPath}`);
      errors++;
    } else {
      const stats = fs.statSync(fullImgPath);
      if (stats.size === 0) {
        console.error(`[ERROR] Image has 0 bytes for ${t.id}: ${fullImgPath}`);
        errors++;
      }
    }
  }

  // 4. Thumbnail check if specified
  if (t.thumbUrl) {
    const cleanThumbPath = t.thumbUrl.startsWith("/") ? t.thumbUrl.slice(1) : t.thumbUrl;
    const fullThumbPath = path.join("public", cleanThumbPath);
    if (!fs.existsSync(fullThumbPath)) {
      console.error(`[ERROR] Thumbnail not found for ${t.id}: ${fullThumbPath}`);
      errors++;
    }
  }
});

// Specific checks from prompt:
const cooling = templates.filter(t => t.slug === "food-cooling-poster");
if (cooling.length !== 1) {
  console.error(`[ERROR] Expected exactly 1 cooling poster on hub, found ${cooling.length}`);
  errors++;
} else {
  console.log(`[PASS] Single canonical food-cooling-poster on hub: ${cooling[0].id} (${cooling[0].title})`);
}

const t99 = templates.find(t => t.id === "template-99");
if (t99 && t99.title.includes("Safe Food Preparation")) {
  console.error(`[ERROR] Template 99 still titled Safe Food Preparation pointing to ${t99.slug}`);
  errors++;
} else {
  console.log(`[PASS] Template 99 correctly disambiguated: "${t99?.title}" -> /food-safety-templates/${t99?.slug}`);
}

const t100 = templates.find(t => t.id === "template-100");
if (t100 && t100.type !== "smart_tool") {
  console.error(`[ERROR] Template 100 type is ${t100.type}, expected smart_tool`);
  errors++;
} else {
  console.log(`[PASS] Template 100 Calculating Food Cost correctly typed as smart_tool`);
}

if (errors === 0) {
  console.log(`\nALL HUB INTEGRITY CHECKS PASSED (${templates.length} cards verified).`);
  process.exit(0);
} else {
  console.error(`\nFAILED with ${errors} error(s).`);
  process.exit(1);
}
