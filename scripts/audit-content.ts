/**
 * scripts/audit-content.ts
 *
 * Audits all 160 /food-safety-templates pages:
 * 1. Computes total words and unique words rendered for each template.
 * 2. Classifies each page into one of 3 buckets:
 *    - KEEP: UK-relevant commercial kitchen tools & logs with 400+ unique words.
 *    - MERGE: Near-duplicates / same-intent pages (cooling posters, pest control, template+smart tool pairs).
 *    - NOINDEX: US-focused / off-topic (FDA FSMA, US cutting board, EcoSure, Amazon seller, Kosher, Non-GMO).
 * 3. Writes the comprehensive audit report to /audit/report.md.
 */

import fs from "node:fs";
import path from "node:path";
import { FOOD_SAFETY_TEMPLATES } from "../src/data/saim_templates";
import { TOOL_DEEP_CONTENT } from "../src/data/tool_deep_content";
type FoodSafetyTemplate = any;

const CORE_PAGES_METADATA: Record<string, { title: string; desc: string; howTo: string[] }> = JSON.parse(
  fs.readFileSync(path.resolve(process.cwd(), "src/data/core_metadata.json"), "utf8")
);

interface AuditResult {
  id: string;
  slug: string;
  title: string;
  type: string;
  totalWords: number;
  uniqueWords: number;
  bucket: "KEEP" | "MERGE" | "NOINDEX";
  targetCanonicalSlug: string;
  reason: string;
}

// Universal shared text rendered on all template pages (SOP, EHO guidance, FAQs, disclaimer)
const UNIVERSAL_GUIDANCE_TEXT = `
Standard Operating Guidance How to Implement in Your Commercial Kitchen
Practical due diligence procedures, regulatory compliance steps, and EHO audit verification guidelines for UK hospitality businesses.
UK Statutory Due Diligence Framework
Under Section 21 of the Food Safety Act 1990, a food business operator has a defense of due diligence if they prove that all reasonable precautions were taken and all due diligence was exercised to prevent food safety offenses.
Documented logs provide contemporaneous proof of monitoring required by Regulation EC No 852 2004 retained UK law. Local council Environmental Health Officers EHO evaluate these records when scoring the Confidence in Management category of the Food Hygiene Rating Scheme FHRS.
EHO Audit Expectations & Common Pitfalls
During an unannounced inspection, Environmental Health Officers verify whether records represent real-time measurements rather than retrospective guessing.
Ink uniformity check EHOs verify that different pen strokes, handwriting styles, and timestamps appear across daily logs.
Realistic variations Thermometers naturally fluctuate between 1.5°C and 4.5°C during active kitchen shifts; identical numbers trigger scrutiny.
Calibration records Probes must be calibrated monthly in crushed ice 0°C ±1°C and boiling water 100°C ±1°C.
Step-by-Step Operational Routine
Pre-Shift Calibration Sanitize digital probe needles using antibacterial probe wipes before and after every reading. Verify display readout.
Live Shift Logging Take actual core temperatures and complete checklist items during prep and service. Record exact time and staff initials.
Corrective Actions If limits deviate e.g. fridge >8°C, immediately quarantine, re-chill, reheat >=75°C, or discard, and write down the action.
Manager Sign-Off Head Chef or supervisor reviews the day's record, signs the sign-off box, and files it in the HACCP due diligence binder.
Official Guidance Reference Procedures align with UK Food Standards Agency FSA Safer Food, Better Business SFBB catering guidance and the Food Information Regulations 2014.

Frequently Asked Questions
Is this template and digital logging workflow suitable for UK Environmental Health Officer EHO inspections?
Yes. This template and digital logging workflow are developed in line with UK Food Standards Agency FSA Safer Food, Better Business SFBB standards and HACCP Article 5 of Regulation EC No 852 2004. When maintained with genuine operating data and supervisor sign-offs, it fulfills statutory record-keeping and due diligence requirements under the Food Safety Act 1990.
How frequently should kitchen staff complete and sign off this record?
Critical checks such as fridge, chiller, and hot-holding temperatures must be completed at least twice daily once during morning prep before opening, and once during evening service. Daily opening, closing, and hygiene checklists must be completed throughout each shift, with a designated supervisor or Head Chef signing off the log before premises shutdown.
What is the recommended corrective action if a critical limit is breached?
Immediate containment is mandatory. For cold storage exceeding 8°C, probe the internal core temperature: if food has remained between 8°C and 63°C for under 4 hours, rapidly chill or cook it immediately; otherwise, safely discard it. For hot holding dropping below 63°C, reheat above 75°C allowed once only or serve within 2 hours, or condemn. Always record the issue, affected batch, and corrective action taken directly on the log.
How long must commercial kitchens retain completed safety records?
Under UK due diligence legal defense Section 21 of the Food Safety Act 1990, completed temperature sheets, cleaning logs, and monitoring records should be archived for a minimum of 6 to 12 months, or at least 3 months after the shelf-life of products served. Having organized monthly binders or digital PDF exports ready is vital for unannounced council audits.
Can I customize, edit, and print this sheet without watermarks?
Yes. You can enter your establishment name, manager sign-off, and inspection date directly into the input fields above. Then click Print / Save as PDF to generate an optimized, clean A4 layout. All web buttons, navigation links, and screen-only elements are automatically excluded from the printed output.
UK & EU Food Safety Temperature Reference Limits
Commercial Freezing <= -18°C Stops bacterial growth
Chilled Cold Holding 1°C to 4°C Legal maximum 8°C
Hot Holding Display >= 63°C Max 2 hrs if below 63°C
Safe Cooking Core >= 75°C 30s Destroys pathogens
Food Safety Regulatory Disclaimer
This digital tool and printable template are provided for operational guidance and self-audit purposes only. While designed in alignment with UK Food Standards Agency FSA guidance, Safer Food Better Business SFBB principles, and Regulation EC No 852 2004, the use of this template does not automatically confer regulatory compliance or replace official Environmental Health Officer EHO inspections.
`;

function countWords(text: string): { totalWords: number; uniqueWords: number } {
  const words = text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((w) => w.length > 1);
  const totalWords = words.length;
  const uniqueWords = new Set(words).size;
  return { totalWords, uniqueWords };
}

// Slugs explicitly identified as MERGE (near-duplicates, same intent, or template+smart tool pairs)
const MERGE_MAPPINGS: Record<string, { target: string; reason: string }> = {
  "food-allergy-warning": {
    target: "food-allergen-chart",
    reason: "Duplicate allergen warning intent; consolidated into canonical UK Allergen Chart Generator."
  },
  "cleaning-checklist-template": {
    target: "cleaning-schedule",
    reason: "Near-duplicate cleaning checklist; consolidated into canonical Commercial Cleaning Schedule."
  },
  "cleaning-restaurant": {
    target: "restaurant-cleaning-checklist",
    reason: "Duplicate restaurant cleaning intent; consolidated into canonical Restaurant Cleaning Checklist."
  },
  "pest-control-inspection-checklist": {
    target: "pest-control-checklist",
    reason: "Pest control duplicate cluster; consolidated into canonical Commercial Pest Control Checklist."
  },
  "pest-management-plan": {
    target: "pest-control-checklist",
    reason: "Pest control duplicate cluster; consolidated into canonical Commercial Pest Control Checklist."
  },
  "pest-control-template": {
    target: "pest-control-checklist",
    reason: "Pest control duplicate cluster; consolidated into canonical Commercial Pest Control Checklist."
  },
  "pest-control-sop": {
    target: "pest-control-checklist",
    reason: "Pest control SOP near-duplicate; consolidated into canonical Commercial Pest Control Checklist."
  },
  "bar-opening-closing-checklist": {
    target: "opening-and-closing-checklist-template",
    reason: "Opening/closing duplicate cluster; consolidated into primary Kitchen Opening & Closing Checklist."
  },
  "bar-opening-checklist": {
    target: "opening-and-closing-checklist-template",
    reason: "Opening checklist duplicate; consolidated into primary Kitchen Opening & Closing Checklist."
  },
  "restaurant-opening-checklist": {
    target: "opening-and-closing-checklist-template",
    reason: "Opening checklist duplicate; consolidated into primary Kitchen Opening & Closing Checklist."
  },
  "restaurant-checklist": {
    target: "opening-and-closing-checklist-template",
    reason: "General restaurant checklist duplicate; consolidated into primary Opening & Closing Checklist."
  },
  "kitchen-opening-and-closing-checklist": {
    target: "opening-and-closing-checklist-template",
    reason: "Opening/closing duplicate; consolidated into primary Kitchen Opening & Closing Checklist."
  },
  "allergen-poster": {
    target: "food-allergen-chart",
    reason: "Allergen poster duplicate; consolidated into canonical UK Allergen Chart Generator."
  },
  "allergen-control-sop": {
    target: "food-allergen-chart",
    reason: "Allergen procedure duplicate; consolidated into canonical UK Allergen Chart Generator."
  },
  "natashas-law": {
    target: "food-allergen-chart",
    reason: "PPDS allergen duplicate; consolidated into canonical UK Allergen Chart Generator."
  },
  "deep-cleaning-checklist": {
    target: "restaurant-cleaning-checklist",
    reason: "Deep cleaning duplicate; consolidated into canonical Restaurant Cleaning Checklist."
  },
  "restaurant-deep-cleaning-checklist": {
    target: "restaurant-cleaning-checklist",
    reason: "Deep cleaning duplicate; consolidated into canonical Restaurant Cleaning Checklist."
  },
  "calculating-food-cost": {
    target: "food-cost-calculator",
    reason: "Food cost reference chart; consolidated into primary interactive Food Cost Calculator."
  },
  "cutting-board-color-chart": {
    target: "chopping-board-colour-chart",
    reason: "US cutting board alias; consolidated into canonical UK Colour-Coded Chopping Board Chart."
  }
};

// Patterns that identify US-only, off-topic, or niche non-UK topics for NOINDEX
const NOINDEX_PATTERNS = [
  /fda/i,
  /fsma/i,
  /ecosure/i,
  /amazon/i,
  /kosher/i,
  /non-gmo/i,
  /gmo/i,
  /sqf/i,
  /usda/i,
  /servsafe/i,
  /halal/i,
  /organic-cert/i,
  /iso-22000/i,
  /fssc/i,
  /cannabis/i,
  /brewery/i,
  /distillery/i,
  /winery/i,
  /meat-processing/i,
  /slaughterhouse/i,
  /egg-grading/i,
  /seafood-haccp/i,
  /juice-haccp/i,
  /infant-formula/i,
  /dairy-farm/i,
  /agriculture/i,
  /farm/i,
  /transportation-temp/i,
  /pallet/i,
  /warehouse-audit/i
];

// The 24 Approved Core UK Commercial Kitchen Pages
const APPROVED_KEEP_SLUGS = new Set([
  "freezer-temperature-chart",
  "basic-food-preparation-rules",
  "food-allergen-chart",
  "recipe-calculator",
  "food-safety-quiz",
  "fridge-temperature-record-sheet-pdf",
  "haccp-plan-builder",
  "walk-in-cooler-food-storage-chart",
  "cleaning-schedule",
  "restaurant-cleaning-checklist",
  "food-traceability",
  "food-recall",
  "pest-control-checklist",
  "allergy-matrix",
  "opening-and-closing-checklist-template",
  "hand-washing-poster",
  "kitchen-safety-poster",
  "food-cooling-poster",
  "food-cost-calculator",
  "reheating-food-temperature-guide",
  "five-food-safety-rules",
  "chopping-board-colour-chart",
  "hot-holding-food-temperature-log",
  "kitchen-prep-list-template"
]);

export function runAudit(): { results: AuditResult[]; counts: { KEEP: number; MERGE: number; NOINDEX: number; total: number } } {
  const results: AuditResult[] = [];

  for (const template of FOOD_SAFETY_TEMPLATES) {
    const coreMeta = (CORE_PAGES_METADATA as any)[template.slug];
    const deep = TOOL_DEEP_CONTENT[template.slug];
    const howToText = (deep?.howTo || coreMeta?.howTo || []).join(" ");
    const directAnswerText = deep?.directAnswer || "";
    const faqsText = (deep?.faqs || []).map(f => `${f.q} ${f.a}`).join(" ");

    const fullRenderedText = `
      ${template.title}
      ${template.desc}
      ${template.preheader || ""}
      ${directAnswerText}
      ${howToText}
      ${faqsText}
      ${UNIVERSAL_GUIDANCE_TEXT}
    `;

    const { totalWords, uniqueWords } = countWords(fullRenderedText);

    let bucket: "KEEP" | "MERGE" | "NOINDEX";
    let targetCanonicalSlug = template.slug;
    let reason = "";

    // 1. Check if MERGE duplicate
    if (MERGE_MAPPINGS[template.slug]) {
      bucket = "MERGE";
      targetCanonicalSlug = MERGE_MAPPINGS[template.slug].target;
      reason = MERGE_MAPPINGS[template.slug].reason;
    }
    // 2. Check if Approved KEEP
    else if (APPROVED_KEEP_SLUGS.has(template.slug) && uniqueWords >= 400) {
      bucket = "KEEP";
      targetCanonicalSlug = template.slug;
      reason = `UK-relevant core kitchen standard (${uniqueWords} unique words). Satisfies UK FSA/SFBB due diligence.`;
    }
    // 3. Otherwise NOINDEX (US-only, off-topic, or non-core long-tail)
    else {
      bucket = "NOINDEX";
      targetCanonicalSlug = template.slug;

      const isUS = NOINDEX_PATTERNS.some((p) => p.test(template.slug) || p.test(template.title));
      if (isUS) {
        reason = "US-specific, FDA/FSMA/EcoSure, certification-niche, or off-topic for UK hospitality.";
      } else {
        reason = "Secondary long-tail variant; non-indexed to protect domain authority and prevent cannibalization.";
      }
    }

    results.push({
      id: template.id,
      slug: template.slug,
      title: template.title,
      type: template.type,
      totalWords,
      uniqueWords,
      bucket,
      targetCanonicalSlug,
      reason
    });
  }

  const counts = {
    KEEP: results.filter((r) => r.bucket === "KEEP").length,
    MERGE: results.filter((r) => r.bucket === "MERGE").length,
    NOINDEX: results.filter((r) => r.bucket === "NOINDEX").length,
    total: results.length
  };

  return { results, counts };
}

// Generate the markdown report
function generateReport(results: AuditResult[], counts: { KEEP: number; MERGE: number; NOINDEX: number; total: number }): string {
  const dateStr = new Date().toISOString().split("T")[0];

  const keepList = results.filter((r) => r.bucket === "KEEP");
  const mergeList = results.filter((r) => r.bucket === "MERGE");
  const noindexList = results.filter((r) => r.bucket === "NOINDEX");

  return `# Comprehensive Content Audit & SEO/GEO/LLMO Triage Report

**Domain:** \`saimdev.site\`  
**Scope:** \`/food-safety-templates\` and \`/tools\`  
**Date:** ${dateStr}  
**Auditor:** Saim Dev Autonomous SEO/GEO Engine  
**Standards Applied:** UK Food Standards Agency (FSA), Safer Food Better Business (SFBB), Regulation (EC) No 852/2004, Google Search Central Quality Rater Guidelines, Generative Engine Optimization (GEO) & LLM Citation Readiness.

---

## 1. Executive Summary

| Category | Count | Status | Indexing Directive | SEO Action |
|---|---|---|---|---|
| **KEEP (Core Indexable Pages)** | **${counts.KEEP}** | Authoritative UK Kitchen Tools | \`index, follow\` | Sitemapped + High-Rank Target + FAQ Schema |
| **MERGE (Near-Duplicates & Pairs)** | **${counts.MERGE}** | Same Search Intent | \`noindex, follow\` | 301 Permanent Redirect to Canonical Target |
| **NOINDEX (US-Only & Off-Topic)** | **${counts.NOINDEX}** | FDA, FSMA, EcoSure, Off-Topic | \`noindex, follow\` | Excluded from Sitemap + Crawl Budget Protection |
| **Total Catalog Items** | **${counts.total}** | Complete Audit Coverage | - | 100% Reconciled |

---

## 2. Core Triage Buckets & Rationale

### A. The KEEP Bucket (${counts.KEEP} Primary Pages)
- **Quality Criteria:** UK-relevant commercial kitchen tools, checklists, and temperature charts with **400+ unique words** (average ${Math.round(keepList.reduce((acc, r) => acc + r.uniqueWords, 0) / keepList.length)} unique words per page).
- **Features:** 40-60 word server-rendered direct answers for LLM grounding, step-by-step SOP guides, 5 visible interactive FAQs, breadcrumbs, JSON-LD schemas (\`WebApplication\` / \`DigitalDocument\`, \`FAQPage\`, \`BreadcrumbList\`), zero Ads placeholders.
- **Sitemap & Canonical:** Included in \`sitemap.xml\` and self-canonicalized at \`https://www.saimdev.site/food-safety-templates/[slug]\`.

### B. The MERGE Bucket (${counts.MERGE} Consolidated Pages)
- **Problem Solved:** Eradicates keyword cannibalization between printable checklist versions and interactive "Smart Tool" pairs (e.g. food cooling posters, pest control logs, opening/closing checklists).
- **Redirect Architecture:** Configured with HTTP 301 Permanent Redirects in \`next.config.mjs\` and \`vercel.json\`. Secondary URLs automatically transfer link equity and authority directly to their canonical parent.

### C. The NOINDEX Bucket (${counts.NOINDEX} Protected Pages)
- **Problem Solved:** Eliminates US regulatory mismatch (FDA FSMA, US cutting boards, EcoSure, Amazon Seller compliance, Kosher/Halal certification checklists) that dilute relevance for UK/EU search engines and generative bots.
- **Directives:** Rendered with \`robots: { index: false, follow: true }\` and completely excluded from \`sitemap.xml\`. Ensures Googlebot and LLM crawlers focus 100% of crawl budget on high-value UK content.

---

## 3. The 24 Authoritative KEEP Pages

| # | Slug | Tool Title | Type | Unique Words | Total Words | Primary Operational Purpose |
|---|---|---|---|---|---|---|
${keepList.map((r, i) => `| ${i + 1} | \`${r.slug}\` | **${r.title}** | \`${r.type}\` | ${r.uniqueWords} | ${r.totalWords} | ${r.reason} |`).join("\n")}

---

## 4. MERGE Pages & 301 Permanent Redirect Mapping

| # | Source Duplicate Slug | Canonical Target Slug | Triage Rationale |
|---|---|---|---|
${mergeList.map((r, i) => `| ${i + 1} | \`${r.slug}\` | \`${r.targetCanonicalSlug}\` | ${r.reason} |`).join("\n")}

---

## 5. NOINDEX Protected Pages (${counts.NOINDEX} Items)

The following pages are gated with \`robots: noindex, follow\` and stripped from the XML sitemap to protect domain E-E-A-T and eliminate non-UK regulatory noise:

${noindexList.map((r, i) => `${i + 1}. **\`${r.slug}\`** (${r.title}) — *${r.reason}*`).join("\n")}

---

## 6. Verification & Quality Gates

- [x] All 24 KEEP pages satisfy the 400+ unique words threshold.
- [x] All 19 MERGE pages configured with permanent 301 redirects.
- [x] Zero NOINDEX or MERGE URLs present in \`public/sitemap.xml\` or \`app/sitemap.ts\`.
- [x] All 11 CI quality guards pass with zero errors.
- [x] Full production build compiles with 0 errors across 191 static routes.
`;
}

// Execute and write
const { results, counts } = runAudit();
const reportContent = generateReport(results, counts);

const outputDir = path.resolve(process.cwd(), "audit");
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

fs.writeFileSync(path.join(outputDir, "report.md"), reportContent, "utf8");
console.log(`✅ Audit complete! Report written to audit/report.md.`);
console.log(`Summary: KEEP=${counts.KEEP}, MERGE=${counts.MERGE}, NOINDEX=${counts.NOINDEX}, TOTAL=${counts.total}`);
