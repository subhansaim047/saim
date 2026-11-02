import json
import re

print("=== STARTING BATCH 30 COMPREHENSIVE UPDATE ===")

# -------------------------------------------------------------
# 1. UPDATE CORE METADATA
# -------------------------------------------------------------
with open('src/data/core_metadata.json', 'r', encoding='utf-8') as f:
    meta = json.load(f)

b30_meta = {
    "cold-food-storage-rules": {
        "title": "Free Cold Food Storage Rules Guide | Saim Dev",
        "desc": "UK commercial cold food storage rules guide. Master 8°C statutory limits, 0-5°C refrigeration best practice, 5-tier raw food separation, and EHO logs.",
        "howTo": [
            "Maintain chilled food at or below 5.0°C (statutory legal maximum 8.0°C)",
            "Enforce 5-tier raw food vertical separation to prevent cross-contamination",
            "Apply day-dot labels with preparation dates and strict 48-hour shelf life",
            "Record chiller probe temperatures twice daily in the digital HACCP log"
        ]
    },
    "food-receiving-procedure": {
        "title": "Free Food Receiving Procedure SOP | Saim Dev",
        "desc": "Commercial kitchen food receiving procedure SOP. Check intake temperatures, vehicle hygiene, use-by dates, tamper seals, and delivery rejection rules.",
        "howTo": [
            "Inspect delivery vehicle cleanliness and refrigeration unit temperature",
            "Probe chilled food packages between folds ensuring readings are 5.0°C or below",
            "Check product use-by dates, packaging integrity, and allergen labelling",
            "Reject out-of-temperature or damaged goods and record in delivery log"
        ]
    },
    "reheating-food-temperature-guide": {
        "title": "Free Reheating Food Temp Guide UK | Saim Dev",
        "desc": "UK food reheating temperature guide for caterers. Ensure hot core temperatures reach 75°C for 30s (or 82°C in Scotland) to destroy foodborne pathogens.",
        "howTo": [
            "Reheat food rapidly to at least 75.0°C core (82.0°C in Scotland)",
            "Stir liquids and gravies midway to eliminate internal cold spots",
            "Probe core temperature with a sanitised digital food thermometer",
            "Serve immediately or transfer directly to 63.0°C hot holding",
            "Never reheat food items more than once; safely discard leftovers"
        ]
    },
    "three-sink-method": {
        "title": "Free Three Sink Method Kitchen SOP | Saim Dev",
        "desc": "Commercial kitchen three-sink method SOP poster. Follow Wash (45°C), Rinse (clean warm), and Sanitise (BS EN 1276 chemical or 77°C hot water) steps.",
        "howTo": [
            "Scrape physical food residues into waste bin before washing",
            "Sink 1: Wash in hot water at 45°C with food-grade detergent",
            "Sink 2: Rinse thoroughly in clean warm water to strip soap",
            "Sink 3: Sanitise in BS EN 1276 chemical solution or 77°C water",
            "Air dry all utensils upside down on clean, sanitized wire racks"
        ]
    },
    "five-food-safety-rules": {
        "title": "Free 5 Key Food Safety Rules Poster | Saim Dev",
        "desc": "World Health Organisation 5 keys to safer food reference poster for staff training. Covers cleanliness, separation, cooking, temperature, and safe water.",
        "howTo": [
            "Keep kitchen surfaces, equipment, and hands thoroughly clean",
            "Separate raw meat and poultry from cooked and ready-to-eat foods",
            "Cook food thoroughly to 75.0°C core for 30 seconds",
            "Keep food at safe temperatures below 5.0°C or above 63.0°C",
            "Use safe drinking water and raw ingredients from approved sources"
        ]
    }
}

for slug, data in b30_meta.items():
    assert len(data['title']) <= 60, f"Title too long: {slug} ({len(data['title'])})"
    assert "Free" in data['title'], f"Missing Free: {slug}"
    assert data['title'].endswith(" | Saim Dev"), f"Missing suffix: {slug}"
    assert 120 <= len(data['desc']) <= 155, f"Desc length error: {slug} ({len(data['desc'])})"
    meta[slug] = data
    print(f"Updated metadata for {slug}")

with open('src/data/core_metadata.json', 'w', encoding='utf-8') as f:
    json.dump(meta, f, indent=2, ensure_ascii=False)
print("1. Updated core_metadata.json")

# -------------------------------------------------------------
# 2. UPDATE TemplateDetailPage.tsx ROUTING
# -------------------------------------------------------------
with open('src/components/TemplateDetailPage.tsx', 'r', encoding='utf-8') as f:
    tdp = f.read()

# Add three-sink-method and food-receiving to isChecklistOrLog if not present
if 'template.slug.includes("sink")' not in tdp:
    tdp = tdp.replace(
        'template.slug.includes("thermometer") ||',
        'template.slug.includes("thermometer") ||\n      template.slug.includes("sink") ||'
    )

# Add five-food-safety-rules to isSafeFoodPrepTool
if 'template.slug.includes("five-food-safety")' not in tdp:
    tdp = tdp.replace(
        'template.slug.includes("food-preparation-rules");',
        'template.slug.includes("food-preparation-rules") ||\n    template.slug.includes("five-food-safety") ||\n    template.slug === "five-food-safety-rules";'
    )

# Add reheating to isMasterFoodTempTool
if 'template.slug.includes("reheating")' not in tdp:
    tdp = tdp.replace(
        'template.slug.includes("hot-holding") ||',
        'template.slug.includes("hot-holding") ||\n    template.slug.includes("reheating") ||'
    )

with open('src/components/TemplateDetailPage.tsx', 'w', encoding='utf-8') as f:
    f.write(tdp)
print("2. Updated TemplateDetailPage.tsx")

# -------------------------------------------------------------
# 3. UPDATE DigitalChecklistTool.tsx (for three-sink-method -> UTENSIL_CLEANING_TASKS)
# -------------------------------------------------------------
with open('src/components/tools/DigitalChecklistTool.tsx', 'r', encoding='utf-8') as f:
    dcl = f.read()

if 'templateTitle.toLowerCase().includes("sink")' not in dcl:
    dcl = dcl.replace(
        '  const isUtensilCleaning =',
        '  const isUtensilCleaning =\n    templateTitle.toLowerCase().includes("sink") ||\n    (templateId && templateId.includes("three-sink")) ||'
    )
    with open('src/components/tools/DigitalChecklistTool.tsx', 'w', encoding='utf-8') as f:
        f.write(dcl)
    print("3. Updated DigitalChecklistTool.tsx for three-sink-method")
else:
    print("3. DigitalChecklistTool.tsx already handles sink")

# -------------------------------------------------------------
# 4. INJECT DEEP CONTENT INTO tool_deep_content.ts
# -------------------------------------------------------------
with open('src/data/tool_deep_content.ts', 'r', encoding='utf-8') as f:
    deep_text = f.read()

fallback_pos = deep_text.find('export const FALLBACK_DEEP_CONTENT')
assert fallback_pos != -1, "Could not find FALLBACK_DEEP_CONTENT"
insert_pos = deep_text.rfind('};', 0, fallback_pos)
assert insert_pos != -1, "Could not find closing brace before FALLBACK_DEEP_CONTENT"

# Check which ones need inserting
b30_deep_content = ""

if '"cold-food-storage-rules":' not in deep_text:
    b30_deep_content += """  "cold-food-storage-rules": {
    directAnswer:
      "Under Schedule 4 of the Food Safety and Hygiene (England) Regulations 2013, cold food storage in commercial kitchens must be maintained at or below 8.0°C, with FSA best practice operating strictly between 1.0°C and 5.0°C. Storing foods using the 5-tier vertical hierarchy prevents cross-contamination between raw meats and ready-to-eat items.",
    howTo: [
      "Maintain commercial refrigerator temperatures between 1.0°C and 5.0°C.",
      "Position raw meat and poultry strictly below ready-to-eat foods.",
      "Seal and date-mark all prepped ingredients with 48-hour day-dot labels.",
      "Check and record internal temperatures twice daily in the digital log."
    ],
    faqs: [
      {
        q: "What is the legal maximum cold food storage temperature in the UK?",
        a: "Under the Food Safety and Hygiene (England) Regulations 2013, the legal maximum temperature for high-risk chilled foods is 8.0°C."
      },
      {
        q: "What is the FSA recommended operating temperature for commercial fridges?",
        a: "The UK Food Standards Agency recommends maintaining commercial kitchen refrigerators between 1.0°C and 5.0°C to provide a safety buffer below the 8.0°C legal ceiling."
      },
      {
        q: "How long can high-risk prepped food be stored in a commercial chiller?",
        a: "Under SFBB guidelines, commercially prepared and opened high-risk foods should be consumed or discarded within 48 to 72 hours, labelled with a day-dot sticker."
      },
      {
        q: "What is the 4-hour rule for cold food display in the UK?",
        a: "Under Schedule 4, chilled food can be kept above 8.0°C for a single display period of up to 4 hours (e.g. buffet service). After 4 hours, it must be chilled or discarded."
      },
      {
        q: "Can raw and ready-to-eat food be stored together in cold storage?",
        a: "Never unsealed or without vertical segregation. Raw food must always be positioned on lower shelves beneath ready-to-eat foods to prevent cross-contamination drips."
      }
    ],
    relatedTools: [
      "fridge-organization-chart",
      "walk-in-cooler-food-storage-chart",
      "fridge-temperature-record-sheet-pdf"
    ],
    relatedBlog: {
      title: "Commercial Kitchen Food Cooling & Temperature Guide",
      slug: "commercial-kitchen-food-cooling-temperature-guide"
    }
  },
"""

if '"food-receiving-procedure":' not in deep_text:
    b30_deep_content += """  "food-receiving-procedure": {
    directAnswer:
      "A commercial food receiving procedure verifies that incoming food deliveries meet statutory safety criteria before acceptance. Operators must probe chilled items (5.0°C or below), verify frozen goods (-18.0°C), check vehicle cleanliness, confirm tamper seals and use-by dates, and reject any non-compliant stock under Regulation (EC) No 852/2004.",
    howTo: [
      "Inspect delivery vehicle cleanliness, pest evidence, and refrigeration unit.",
      "Probe temperatures between packages without puncturing seals (chilled <=5°C, frozen <=-18°C).",
      "Inspect use-by dates, packaging seals, batch codes, and allergen declarations.",
      "Record delivery details, supplier name, temperatures, and sign off in the intake log.",
      "Immediately quarantine and reject any damaged, warm, or unlabelled stock."
    ],
    faqs: [
      {
        q: "What temperature should chilled food be upon delivery in the UK?",
        a: "Chilled food must be delivered at 8.0°C or below by law, with best practice intake temperature being 5.0°C or colder (or 3.0°C for fresh red meat)."
      },
      {
        q: "What is the mandatory temperature for deep-frozen deliveries?",
        a: "Deep-frozen products must be delivered at -18.0°C or colder with no signs of thawing, softening, or ice crystal refreezing."
      },
      {
        q: "How should staff measure delivery temperature without damaging packaging?",
        a: "Place a calibrated digital probe flat between two vacuum-sealed packs or folded packaging edges, holding firmly for 10 seconds without piercing the plastic."
      },
      {
        q: "When must a commercial food delivery be rejected?",
        a: "Deliveries must be rejected if temperatures exceed 8.0°C, packaging is punctured or bloated, products are past their use-by date, or the vehicle is unhygienic."
      },
      {
        q: "How long must commercial food delivery logs be retained for due diligence?",
        a: "Delivery inspection sheets should be retained for at least 12 months under Section 21 of the Food Safety Act 1990 to prove supplier traceability."
      }
    ],
    relatedTools: [
      "delivery-log",
      "approved-supplier-list",
      "ingredient-traceability"
    ],
    relatedBlog: {
      title: "How to Write a HACCP Plan for UK Food Businesses: Step-by-Step",
      slug: "how-to-write-haccp-plan-uk-food-business-step-by-step"
    }
  },
"""

if '"three-sink-method":' not in deep_text:
    b30_deep_content += """  "three-sink-method": {
    directAnswer:
      "The three-sink method is the statutory commercial warewashing procedure for manual cleaning of pots, pans, and utensils. Sink 1 washes with detergent at 45.0°C, Sink 2 rinses with clean warm water, and Sink 3 sanitises using a BS EN 1276 chemical solution or 77.0°C hot water, followed by complete air drying.",
    howTo: [
      "Scrape and pre-rinse food residues and grease into waste disposal bins.",
      "Sink 1 (Wash): Scrub items in hot water at 45.0°C with commercial detergent.",
      "Sink 2 (Rinse): Dip in clean warm water to strip all soap surfactants.",
      "Sink 3 (Sanitise): Submerge in BS EN 1276 disinfectant for 30-60s (or 77°C water for 30s).",
      "Air Dry: Invert clean items on sanitised wire shelving; never towel dry."
    ],
    faqs: [
      {
        q: "What are the three steps in the commercial three-sink method?",
        a: "The three sequential steps are Wash (hot soapy water at 45°C), Rinse (clean warm water), and Sanitise (BS EN 1276 chemical solution or 77°C hot water)."
      },
      {
        q: "What water temperature is required for the wash sink in manual dishwashing?",
        a: "The wash sink should maintain a minimum water temperature of 45.0°C (113°F) to effectively dissolve animal fats, greases, and food soils."
      },
      {
        q: "How long must items be submerged in the sanitising sink?",
        a: "Items must remain submerged for the chemical manufacturer contact time (typically 30 to 60 seconds for BS EN 1276 sanitisers) or 30 seconds if using 77°C hot water."
      },
      {
        q: "Can kitchen staff dry washed utensils with clean tea towels?",
        a: "No. Towel drying spreads bacteria across freshly sanitised equipment. All warewashed pots, pans, and cutlery must be left to air dry completely."
      },
      {
        q: "How frequently must water in the three sinks be changed?",
        a: "Sink water must be drained and replaced whenever it becomes greasy, dirty, soapy in the rinse sink, or drops below effective working temperatures."
      }
    ],
    relatedTools: [
      "food-sanitation-rules",
      "kitchen-safety-poster",
      "hand-washing-poster"
    ],
    relatedBlog: {
      title: "How to Get a 5-Star Food Hygiene Rating: UK EHO Checklist",
      slug: "uk-food-hygiene-rating-scheme-5-star-checklist"
    }
  },
"""

if b30_deep_content:
    new_deep_text = deep_text[:insert_pos] + b30_deep_content + deep_text[insert_pos:]
    with open('src/data/tool_deep_content.ts', 'w', encoding='utf-8') as f:
        f.write(new_deep_text)
    print("4. Injected new deep content into tool_deep_content.ts")
else:
    print("4. Deep content already present for batch 30")

# -------------------------------------------------------------
# 5. UPDATE TRACKER JSON & CSV
# -------------------------------------------------------------
with open('audit/tools-seo-tracker.json', 'r', encoding='utf-8') as f:
    tracker = json.load(f)

updated_count = 0
for t in tracker:
    if t.get('slug') in b30_meta:
        t['status'] = 'COMPLETED'
        t['title'] = b30_meta[t['slug']]['title']
        t['metaDescription'] = b30_meta[t['slug']]['desc']
        updated_count += 1
        print(f"Marked {t['slug']} as COMPLETED in tracker")

with open('audit/tools-seo-tracker.json', 'w', encoding='utf-8') as f:
    json.dump(tracker, f, indent=2, ensure_ascii=False)

# Update CSV
import csv
with open('audit/tools-seo-tracker.json', 'r', encoding='utf-8') as f:
    tracker_data = json.load(f)

if tracker_data:
    all_keys = []
    for row in tracker_data:
        for k in row.keys():
            if k not in all_keys:
                all_keys.append(k)

    with open('audit/tools-seo-tracker.csv', 'w', newline='', encoding='utf-8') as f:
        writer = csv.DictWriter(f, fieldnames=all_keys)
        writer.writeheader()
        writer.writerows(tracker_data)

print(f"5. Updated tracker files (marked {updated_count} tools COMPLETED)")
print("=== BATCH 30 APPLIED SUCCESSFULLY ===")
