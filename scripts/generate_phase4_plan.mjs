import fs from "fs";

// Read templates from saim_templates.ts
const tsPath = "src/data/saim_templates.ts";
const tsContent = fs.readFileSync(tsPath, "utf8");
const equalsIdx = tsContent.indexOf("=", tsContent.indexOf("FOOD_SAFETY_TEMPLATES"));
const arrayStart = tsContent.indexOf("[", equalsIdx);
const arrayEnd = tsContent.indexOf("];\n\nexport const ALL_CATEGORIES");
const templates = JSON.parse(tsContent.slice(arrayStart, arrayEnd + 1));

console.log(`Loaded ${templates.length} templates for Phase 4 classification.`);

// 1. Exact 24 core UK hospitality templates (23 KEEP + 1 IMPROVE)
const KEEP_IMPROVE_CONFIG = {
  "food-allergen-chart": {
    bucket: "KEEP",
    reason: "Flagship UK allergen chart generator; covers 14 allergens, client-side PDF export, zero data capture"
  },
  "allergy-matrix": {
    bucket: "KEEP",
    reason: "Interactive 14-allergen matrix tool; primary search intent for commercial kitchen menu audits"
  },
  "food-cost-calculator": {
    bucket: "KEEP",
    reason: "Interactive gross profit and recipe food cost calculator for UK hospitality operators"
  },
  "recipe-calculator": {
    bucket: "KEEP",
    reason: "Interactive recipe scaling and batch costing tool for catering businesses"
  },
  "haccp-plan-builder": {
    bucket: "KEEP",
    reason: "Interactive HACCP CCP table builder based on Codex Alimentarius principles for UK kitchens"
  },
  "food-safety-quiz": {
    bucket: "KEEP",
    reason: "Interactive UK Food Hygiene Level 2 practice test and staff training assessment"
  },
  "freezer-temperature-chart": {
    bucket: "KEEP",
    reason: "Core commercial kitchen temperature reference poster for sub-zero food storage"
  },
  "food-cooling-poster": {
    bucket: "KEEP",
    reason: "Core cooling guidance poster for commercial kitchens; covers chilling methods and temperature thresholds"
  },
  "basic-food-preparation-rules": {
    bucket: "KEEP",
    reason: "Essential kitchen prep rules poster; cross-contamination prevention and personal hygiene guidance"
  },
  "walk-in-cooler-food-storage-chart": {
    bucket: "KEEP",
    reason: "Commercial chiller vertical food shelving hierarchy chart preventing raw-to-cooked drips"
  },
  "fridge-temperature-record-sheet-pdf": {
    bucket: "KEEP",
    reason: "Daily commercial fridge, freezer, and cold servery manual temperature record log sheet"
  },
  "cleaning-schedule": {
    bucket: "KEEP",
    reason: "Commercial kitchen deep cleaning schedule, frequency rota, and chemical dilution standard"
  },
  "restaurant-cleaning-checklist": {
    bucket: "IMPROVE",
    reason: "Front-of-house and back-of-house daily cleaning checklist; candidate for expanded UK hospitality content"
  },
  "opening-and-closing-checklist-template": {
    bucket: "KEEP",
    reason: "Standard daily opening and closing verification checklist for food premises"
  },
  "kitchen-prep-list-template": {
    bucket: "KEEP",
    reason: "Daily kitchen station mise en place, portion control, and prep list sheet"
  },
  "pest-control-checklist": {
    bucket: "KEEP",
    reason: "Food premises pest prevention, contractor inspection log, and physical proofing checklist"
  },
  "food-traceability": {
    bucket: "KEEP",
    reason: "Raw ingredient batch traceability and supplier delivery verification log sheet"
  },
  "food-recall": {
    bucket: "KEEP",
    reason: "Food business product recall and withdrawal procedure log for defective or contaminated batches"
  },
  "hand-washing-poster": {
    bucket: "KEEP",
    reason: "Kitchen handwashing technique, timing, and hygienic soap lathering poster"
  },
  "kitchen-safety-poster": {
    bucket: "KEEP",
    reason: "General commercial kitchen hygiene, personal safety, and hazard awareness poster"
  },
  "reheating-food-temperature-guide": {
    bucket: "KEEP",
    reason: "Food reheating guidelines poster showing legal core temperature standards (75°C / 82°C)"
  },
  "five-food-safety-rules": {
    bucket: "KEEP",
    reason: "5 essential food safety principles poster for staff onboarding and training"
  },
  "chopping-board-colour-chart": {
    bucket: "KEEP",
    reason: "UK colour-coded chopping board chart preventing cross-contamination between raw meats and ready-to-eat foods"
  },
  "hot-holding-food-temperature-log": {
    bucket: "KEEP",
    reason: "Cooked food hot holding buffet and servery temperature monitoring log (63°C legal standard)"
  }
};

// 2. Define MERGE mappings (near-duplicates mapped to survivor)
const MERGE_CONFIG = {
  "calculating-food-cost": {
    target: "food-cost-calculator",
    reason: "Near-duplicate of interactive food cost calculator"
  },
  "two-stage-cooling-method": {
    target: "food-cooling-poster",
    reason: "Duplicate cooling method poster merged into canonical food cooling poster"
  },
  "cooling-food-methods-poster": {
    target: "food-cooling-poster",
    reason: "Duplicate cooling methods poster merged into canonical food cooling poster"
  },
  "pest-control-inspection-checklist": {
    target: "pest-control-checklist",
    reason: "Near-duplicate pest inspection checklist"
  },
  "pest-management-plan": {
    target: "pest-control-checklist",
    reason: "Near-duplicate pest management plan"
  },
  "pest-control-template": {
    target: "pest-control-checklist",
    reason: "Duplicate pest control checklist template"
  },
  "pest-control-sop": {
    target: "pest-control-checklist",
    reason: "Duplicate pest control standard operating procedure"
  },
  "cleaning-checklist-template": {
    target: "cleaning-schedule",
    reason: "Duplicate cleaning checklist template"
  },
  "cleaning-restaurant": {
    target: "restaurant-cleaning-checklist",
    reason: "Duplicate restaurant cleaning checklist"
  },
  "deep-cleaning-checklist": {
    target: "restaurant-cleaning-checklist",
    reason: "Duplicate deep cleaning checklist"
  },
  "restaurant-deep-cleaning-checklist": {
    target: "restaurant-cleaning-checklist",
    reason: "Duplicate restaurant deep cleaning checklist variant"
  },
  "kitchen-opening-and-closing-checklist": {
    target: "opening-and-closing-checklist-template",
    reason: "Duplicate kitchen opening and closing checklist"
  },
  "restaurant-opening-checklist": {
    target: "opening-and-closing-checklist-template",
    reason: "Duplicate restaurant opening checklist"
  },
  "restaurant-checklist": {
    target: "opening-and-closing-checklist-template",
    reason: "Generic duplicate restaurant checklist"
  },
  "bar-opening-closing-checklist": {
    target: "opening-and-closing-checklist-template",
    reason: "Duplicate bar opening and closing checklist"
  },
  "bar-opening-checklist": {
    target: "opening-and-closing-checklist-template",
    reason: "Duplicate bar opening checklist variant"
  },
  "allergen-poster": {
    target: "food-allergen-chart",
    reason: "Duplicate allergen display poster"
  },
  "allergen-control-sop": {
    target: "food-allergen-chart",
    reason: "Duplicate allergen control procedure"
  },
  "food-allergy-warning": {
    target: "food-allergen-chart",
    reason: "Duplicate food allergy notice"
  },
  "natashas-law": {
    target: "food-allergen-chart",
    reason: "Duplicate Natasha's Law compliance sheet"
  },
  "cutting-board-color-chart": {
    target: "chopping-board-colour-chart",
    reason: "US cutting board color chart merged into UK colour-coded chopping board chart"
  }
};

const pagePlanRows = [];
const redirectPlanRows = [];
const pagePlanJson = {};

// Also track the two duplicate cooling slugs for redirect plan
redirectPlanRows.push({
  source_slug: "two-stage-cooling-method",
  target_slug: "food-cooling-poster",
  reason: "Duplicate cooling method poster merged into canonical food cooling poster",
  keep_status: "REDIRECT_ON_APPROVAL"
});
redirectPlanRows.push({
  source_slug: "cooling-food-methods-poster",
  target_slug: "food-cooling-poster",
  reason: "Duplicate cooling methods poster merged into canonical food cooling poster",
  keep_status: "REDIRECT_ON_APPROVAL"
});

// Process each template
templates.forEach(t => {
  const slug = t.slug;
  let bucket = "NOINDEX";
  let target = slug;
  let reason = "";

  if (KEEP_IMPROVE_CONFIG[slug]) {
    bucket = KEEP_IMPROVE_CONFIG[slug].bucket;
    target = slug;
    reason = KEEP_IMPROVE_CONFIG[slug].reason;
  } else if (MERGE_CONFIG[slug]) {
    bucket = "MERGE";
    target = MERGE_CONFIG[slug].target;
    reason = MERGE_CONFIG[slug].reason;

    redirectPlanRows.push({
      source_slug: slug,
      target_slug: target,
      reason: reason,
      keep_status: "REDIRECT_ON_APPROVAL"
    });
  } else {
    bucket = "NOINDEX";
    target = slug;
    // Categorize NOINDEX reason
    const lower = (t.title + " " + t.desc + " " + slug).toLowerCase();
    if (lower.includes("fsma") || lower.includes("fda") || lower.includes("ecosure") || lower.includes("big 6") || lower.includes("fat tom") || lower.includes("fahrenheit")) {
      reason = "US-specific food regulation / agency standard, off-audience for UK food businesses";
    } else if (lower.includes("brc") || lower.includes("sqf") || lower.includes("gfsi") || lower.includes("iso 22000") || lower.includes("fssc")) {
      reason = "Industrial manufacturing certification standard; off-audience for independent UK restaurants";
    } else if (lower.includes("kosher") || lower.includes("gmo") || lower.includes("amazon")) {
      reason = "Specialised non-hospitality certification / platform requirement";
    } else {
      reason = "Thin content / niche template; retained live with noindex to preserve direct downloads without index bloat";
    }
  }

  pagePlanRows.push({
    slug: slug,
    title: t.title,
    current_type: t.type,
    proposed_bucket: bucket,
    target_canonical_slug: target,
    reason: reason
  });

  pagePlanJson[slug] = {
    bucket,
    target_canonical_slug: target,
    reason
  };
});

// Write review/page-plan.csv
const pagePlanCsv = [
  "slug,title,current_type,proposed_bucket,target_canonical_slug,reason",
  ...pagePlanRows.map(r => `"${r.slug}","${r.title.replace(/"/g, '""')}","${r.current_type}","${r.proposed_bucket}","${r.target_canonical_slug}","${r.reason.replace(/"/g, '""')}"`)
].join("\n");

fs.writeFileSync("review/page-plan.csv", pagePlanCsv, "utf8");

// Write review/redirect-plan.csv
const redirectPlanCsv = [
  "source_slug,target_slug,reason,keep_status",
  ...redirectPlanRows.map(r => `"${r.source_slug}","${r.target_slug}","${r.reason.replace(/"/g, '""')}","${r.keep_status}"`)
].join("\n");

fs.writeFileSync("review/redirect-plan.csv", redirectPlanCsv, "utf8");

// Save pagePlanJson for app consumption
fs.writeFileSync("src/data/page_plan.json", JSON.stringify(pagePlanJson, null, 2), "utf8");

const keepCount = pagePlanRows.filter(r => r.proposed_bucket === "KEEP").length;
const improveCount = pagePlanRows.filter(r => r.proposed_bucket === "IMPROVE").length;
const mergeCount = pagePlanRows.filter(r => r.proposed_bucket === "MERGE").length;
const noindexCount = pagePlanRows.filter(r => r.proposed_bucket === "NOINDEX").length;

console.log(`\nPhase 4 Page Plan Summary:`);
console.log(`- KEEP: ${keepCount}`);
console.log(`- IMPROVE: ${improveCount}`);
console.log(`- Total Indexable (KEEP + IMPROVE): ${keepCount + improveCount}`);
console.log(`- MERGE: ${mergeCount}`);
console.log(`- NOINDEX: ${noindexCount}`);
console.log(`- Redirect Plan Rows: ${redirectPlanRows.length}`);
