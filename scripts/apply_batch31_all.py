import json
import re

print("=== STARTING BATCH 31 COMPREHENSIVE UPDATE ===")

# -------------------------------------------------------------
# 1. UPDATE CORE METADATA
# -------------------------------------------------------------
with open('src/data/core_metadata.json', 'r', encoding='utf-8') as f:
    meta = json.load(f)

b31_meta = {
    "cold-holding-food": {
        "title": "Free Cold Holding Food Rules & Log | Saim Dev",
        "desc": "UK commercial cold holding food temperature rules. Comply with 8°C legal limits, 4-hour display exemptions, probe calibration, and daily kitchen logs.",
        "howTo": [
            "Maintain cold holding wells and chilled counters at or below 5.0°C",
            "Probe food temperatures every 2 hours using a disinfected digital probe",
            "Apply the 4-hour single display exemption for open buffet service",
            "Discard or rapidly chill any cold foods that exceed the 4-hour display window"
        ]
    },
    "sell-by-date": {
        "title": "Free Food Date Markings Guide UK | Saim Dev",
        "desc": "UK commercial food date marking guide. Understand Use-By versus Best-Before legal definitions, manufacturer shelf life, day-dots, and EHO compliance.",
        "howTo": [
            "Identify Use-By dates as strict statutory safety boundaries for high-risk foods",
            "Recognise Best-Before dates as food quality benchmarks for dry and frozen goods",
            "Apply day-dot stickers upon opening with a mandatory 48-hour discard time",
            "Never sell, prep, or serve foods past their verified Use-By expiration date"
        ]
    },
    "fat-tom-poster": {
        "title": "Free FAT TOM Food Safety Poster | Saim Dev",
        "desc": "Commercial kitchen FAT TOM food safety reference poster. Learn how Food, Acidity, Time, Temperature, Oxygen, and Moisture control bacterial proliferation.",
        "howTo": [
            "Control Temperature: Maintain chilled foods below 5°C and hot food above 63°C",
            "Control Time: Restrict high-risk food exposure within the 8°C-63°C danger zone to <2 hours",
            "Control Moisture: Reduce water activity (Aw) via dehydration, salting, or curing",
            "Control Oxygen: Implement vacuum packing or airtight containers to inhibit aerobic pathogens"
        ]
    },
    "cutting-board-color-chart": {
        "title": "Free UK Chopping Board Colour Chart | Saim Dev",
        "desc": "Free UK colour-coded chopping board chart for commercial kitchens. Master Red (raw meat), Yellow (cooked meat), Blue (fish), and Green (salad) rules.",
        "howTo": [
            "Dedicate RED boards strictly to raw beef, pork, lamb, and poultry preparation",
            "Dedicate YELLOW boards strictly to cooked roasts, deli meats, and carved proteins",
            "Dedicate BLUE boards strictly to raw fish, salmon, shellfish, and seafood",
            "Dedicate GREEN boards strictly to washed salads, fresh fruit, and fresh herbs",
            "Sanitise all colour-coded boards in a commercial dishwasher operating at 82°C"
        ]
    },
    "defrosting-foods": {
        "title": "Free Food Defrosting SOP & Log | Saim Dev",
        "desc": "Commercial food defrosting SOP and thawing log. Follow refrigerator thawing (<=5°C), cold running water, and microwave prep rules under FSA guidelines.",
        "howTo": [
            "Thaw food inside commercial chillers maintained strictly at or below 5.0°C",
            "Place thawing items in deep drip pans on the lowest shelf to catch melting juices",
            "Never defrost high-risk meats, poultry, or seafood at ambient room temperature",
            "Cook thoroughly defrosted foods within 24 hours of thawing completion",
            "Verify core is completely thawed with no interior ice crystals before cooking"
        ]
    }
}

for slug, data in b31_meta.items():
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

# Add cutting-board to isChoppingBoardTool
if 'template.slug.includes("cutting-board")' not in tdp:
    tdp = tdp.replace(
        'template.slug.includes("chopping-board");',
        'template.slug.includes("chopping-board") ||\n    template.slug.includes("cutting-board");'
    )

# Add cold-holding to isMasterFoodTempTool
if 'template.slug.includes("cold-holding")' not in tdp:
    tdp = tdp.replace(
        'template.slug.includes("hot-holding") ||',
        'template.slug.includes("hot-holding") ||\n    template.slug.includes("cold-holding") ||'
    )

# Add sell-by to isWalkInStorageTool
if 'template.slug.includes("sell-by")' not in tdp:
    tdp = tdp.replace(
        'template.slug.includes("shelf-life") ||',
        'template.slug.includes("shelf-life") ||\n    template.slug.includes("sell-by") ||'
    )

# Add fat-tom to isSafeFoodPrepTool
if 'template.slug.includes("fat-tom")' not in tdp:
    tdp = tdp.replace(
        'template.slug.includes("five-food-safety") ||',
        'template.slug.includes("five-food-safety") ||\n    template.slug.includes("fat-tom") ||'
    )

# Add defrost to isChecklistOrLog
if 'template.slug.includes("defrost")' not in tdp:
    tdp = tdp.replace(
        'template.slug.includes("sink") ||',
        'template.slug.includes("sink") ||\n      template.slug.includes("defrost") ||'
    )

with open('src/components/TemplateDetailPage.tsx', 'w', encoding='utf-8') as f:
    f.write(tdp)
print("2. Updated TemplateDetailPage.tsx")

# -------------------------------------------------------------
# 3. UPDATE DigitalChecklistTool.tsx (for defrosting -> DEFROSTING_SOP_TASKS)
# -------------------------------------------------------------
with open('src/components/tools/DigitalChecklistTool.tsx', 'r', encoding='utf-8') as f:
    dcl = f.read()

defrost_tasks_code = """const DEFROSTING_SOP_TASKS: CheckItem[] = [
  {
    id: "defrost-1",
    category: "Chilled Thawing Control",
    task: "Transfer frozen products into dedicated refrigeration units maintained strictly at or below 5.0°C; never defrost at ambient room temperature.",
    status: "pass",
    actionNotes: ""
  },
  {
    id: "defrost-2",
    category: "Drip Containment & Raw Separation",
    task: "Place thawing raw meats in deep-lipped containers or perforated drip pans on the lowest refrigerator shelf to prevent liquid cross-contamination.",
    status: "pass",
    actionNotes: ""
  },
  {
    id: "defrost-3",
    category: "Thaw Date Labelling",
    task: "Apply day-dot or defrost labels recording the date and time thawing began, expected completion time, and designated use-by deadline (within 24 hours of complete thaw).",
    status: "pass",
    actionNotes: ""
  },
  {
    id: "defrost-4",
    category: "Core Temperature & Softness Check",
    task: "Probe internal meat core with a sanitised thermometer to verify complete thawing (no lingering ice crystals) prior to cooking.",
    status: "pass",
    actionNotes: ""
  },
  {
    id: "defrost-5",
    category: "Immediate Cooking Protocol",
    task: "Cook defrosted foods thoroughly to FSA core temperature (>=75.0°C for 30s) within 24 hours; never refreeze thawed raw food items.",
    status: "pass",
    actionNotes: ""
  }
];

"""

if 'DEFROSTING_SOP_TASKS' not in dcl:
    dcl = dcl.replace(
        'const THERMOMETER_SOP_TASKS: CheckItem[] = [',
        defrost_tasks_code + 'const THERMOMETER_SOP_TASKS: CheckItem[] = ['
    )

    dcl = dcl.replace(
        '  const isFoodSanitation =',
        '  const isDefrosting =\n    templateTitle.toLowerCase().includes("defrost") ||\n    (templateId && templateId.includes("defrost"));\n  const isFoodSanitation ='
    )

    dcl = dcl.replace(
        '    if (isFoodSanitation) return FOOD_SANITATION_TASKS;',
        '    if (isDefrosting) return DEFROSTING_SOP_TASKS;\n    if (isFoodSanitation) return FOOD_SANITATION_TASKS;'
    )

    with open('src/components/tools/DigitalChecklistTool.tsx', 'w', encoding='utf-8') as f:
        f.write(dcl)
    print("3. Updated DigitalChecklistTool.tsx for defrosting SOP")
else:
    print("3. DigitalChecklistTool.tsx already contains DEFROSTING_SOP_TASKS")

# -------------------------------------------------------------
# 4. INJECT DEEP CONTENT INTO tool_deep_content.ts
# -------------------------------------------------------------
with open('src/data/tool_deep_content.ts', 'r', encoding='utf-8') as f:
    deep_text = f.read()

fallback_pos = deep_text.find('export const FALLBACK_DEEP_CONTENT')
assert fallback_pos != -1, "Could not find FALLBACK_DEEP_CONTENT"
insert_pos = deep_text.rfind('};', 0, fallback_pos)
assert insert_pos != -1, "Could not find closing brace before FALLBACK_DEEP_CONTENT"

b31_deep_content = """  "cold-holding-food": {
    directAnswer:
      "Under Schedule 4 of the Food Safety and Hygiene (England) Regulations 2013, cold-holding food must be maintained at or below 8.0°C continuously, with FSA best practice operating between 1.0°C and 5.0°C. Caterers may utilize a single 4-hour display exemption window above 8.0°C, after which food must be chilled or discarded.",
    howTo: [
      "Maintain salad bars, sandwich prep counters, and display wells at or below 5.0°C.",
      "Verify food temperature every 2 hours using a disinfected digital probe thermometer.",
      "Utilise the statutory 4-hour display exemption once only during buffet or counter service.",
      "Discard or rapidly chill any cold foods that exceed the 4-hour room temperature window."
    ],
    faqs: [
      {
        q: "What is the legal maximum temperature for cold holding food in the UK?",
        a: "Under Schedule 4 of the Food Safety and Hygiene Regulations 2013, the legal maximum cold holding temperature is 8.0°C."
      },
      {
        q: "What is the 4-hour cold food display rule in the UK?",
        a: "Under UK food law, cold food can be displayed above 8.0°C for a single period of up to 4 hours. Once 4 hours pass, any remaining food must be chilled to 8°C or below, or safely discarded."
      },
      {
        q: "How frequently should cold-holding units be probed?",
        a: "Check and log internal food temperatures at least every 2 hours during continuous service to demonstrate due diligence."
      },
      {
        q: "Can cold-holding food be saved if it exceeds 8°C for over 4 hours?",
        a: "No. If high-risk food has been held above 8.0°C for longer than 4 hours, bacterial multiplication (including Listeria and Salmonella) makes it unsafe; it must be discarded immediately."
      },
      {
        q: "What equipment is suitable for cold holding?",
        a: "Refrigerated display wells, cold buffet tables with ice inserts, and blown-air chilled prep counters maintaining 1.0°C to 5.0°C."
      }
    ],
    relatedTools: [
      "cold-food-storage-rules",
      "fridge-organization-chart",
      "walk-in-cooler-food-storage-chart"
    ],
    relatedBlog: {
      title: "Commercial Kitchen Food Cooling & Temperature Guide",
      slug: "commercial-kitchen-food-cooling-temperature-guide"
    }
  },
  "sell-by-date": {
    directAnswer:
      "In the UK under Regulation (EU) No 1169/2011, 'Use-By' dates are statutory food safety boundaries indicating when high-risk foods become hazardous to consume. 'Best-Before' dates indicate food quality rather than safety. Selling or serving food past its Use-By date is a criminal offence under the Food Safety Act 1990.",
    howTo: [
      "Treat Use-By dates as non-negotiable legal safety deadlines for high-risk foods.",
      "Evaluate Best-Before dates for quality, sensory acceptability, and stock rotation.",
      "Affix day-dot stickers to opened products with a mandatory 48-hour discard period.",
      "Never display, prepare, or serve any product once its Use-By date has expired.",
      "Conduct daily morning rotation checks following First-In, First-Out (FIFO) standards."
    ],
    faqs: [
      {
        q: "What is the legal difference between Use-By and Best-Before dates?",
        a: "'Use-By' is about safety—eating food after this date is hazardous and selling it is illegal. 'Best-Before' is about quality—food is still safe to eat afterwards, but its flavor or texture may decline."
      },
      {
        q: "Is 'Sell-By' or 'Display-Until' a legal food safety date in the UK?",
        a: "No. 'Sell-By' and 'Display-Until' dates are internal stock management codes for retailers and carry no legal standing under UK food safety law."
      },
      {
        q: "Can a food business donate or sell food past its Use-By date?",
        a: "No. It is illegal to sell, serve, or distribute any food after its Use-By date under the Food Safety and Hygiene Regulations."
      },
      {
        q: "How does opening a sealed package alter the Use-By date?",
        a: "Once opened, manufacturer dates are superseded by kitchen shelf-life rules: high-risk foods must be used within 2 to 3 days (48-72 hours) and labelled with a day-dot."
      },
      {
        q: "What penalties apply for serving food past its Use-By date?",
        a: "Serving expired food breaches the Food Safety Act 1990, resulting in zero-star hygiene ratings, formal improvement notices, and unlimited statutory fines."
      }
    ],
    relatedTools: [
      "food-receiving-procedure",
      "fridge-organization-chart",
      "food-traceability"
    ],
    relatedBlog: {
      title: "How to Get a 5-Star Food Hygiene Rating: UK EHO Checklist",
      slug: "uk-food-hygiene-rating-scheme-5-star-checklist"
    }
  },
  "fat-tom-poster": {
    directAnswer:
      "FAT TOM is a foundational food microbiology acronym representing the six environmental conditions required for bacterial growth: Food (rich nutrients), Acidity (pH 4.6 to 7.5), Time (over 2 hours in danger zone), Temperature (8°C to 63°C), Oxygen (aerobic or anaerobic), and Moisture (water activity above 0.85).",
    howTo: [
      "Control Temperature: Maintain chilled foods below 5°C and hot food above 63°C.",
      "Control Time: Restrict high-risk food exposure within the 8°C-63°C danger zone to <2 hours.",
      "Control Moisture: Reduce water activity (Aw) via dehydration, salting, or curing.",
      "Control Acidity: Use acidic marinades (vinegar, citrus) to lower pH below 4.6.",
      "Control Oxygen: Implement vacuum packing or airtight containers to inhibit aerobic pathogens."
    ],
    faqs: [
      {
        q: "What does the FAT TOM acronym stand for in food safety?",
        a: "FAT TOM stands for Food, Acidity, Time, Temperature, Oxygen, and Moisture—the six critical parameters governing bacterial multiplication."
      },
      {
        q: "Which two FAT TOM factors are easiest for commercial kitchens to control?",
        a: "Time and Temperature are the two primary factors kitchen staff control daily through rapid cooking, chilling, hot holding, and cold storage."
      },
      {
        q: "What pH range supports rapid bacterial growth?",
        a: "Bacteria multiply most rapidly in neutral to mildly acidic environments between pH 4.6 and 7.5. Foods below pH 4.6 inhibit most bacterial pathogens."
      },
      {
        q: "What is water activity (Aw) in the FAT TOM model?",
        a: "Water activity measures the unbound moisture available for bacterial growth. Most foodborne bacteria require Aw >= 0.85 to multiply."
      },
      {
        q: "How do anaerobic bacteria multiply without oxygen in FAT TOM?",
        a: "Anaerobic pathogens such as Clostridium botulinum and Clostridium perfringens thrive in oxygen-free environments like vacuum bags, deep stock pots, and canned goods."
      }
    ],
    relatedTools: [
      "five-food-safety-rules",
      "basic-food-preparation-rules",
      "food-sanitation-rules"
    ],
    relatedBlog: {
      title: "How to Write a HACCP Plan for UK Food Businesses: Step-by-Step",
      slug: "how-to-write-haccp-plan-uk-food-business-step-by-step"
    }
  },
  "cutting-board-color-chart": {
    directAnswer:
      "The UK commercial chopping board colour code standard uses six distinct board colours to prevent cross-contamination: Red for raw meat, Yellow for cooked meat, Blue for raw fish, Green for washed salad and fruit, Brown for unwashed root vegetables, and White for bakery and dairy.",
    howTo: [
      "Dedicate RED boards strictly to raw beef, pork, lamb, and poultry preparation.",
      "Dedicate YELLOW boards strictly to cooked roasts, deli meats, and carved proteins.",
      "Dedicate BLUE boards strictly to raw fish, salmon, shellfish, and seafood.",
      "Dedicate GREEN boards strictly to washed salads, fresh fruit, and fresh herbs.",
      "Sanitise all colour-coded boards in a commercial dishwasher operating at 82°C."
    ],
    faqs: [
      {
        q: "What is the UK colour-coding standard for commercial chopping boards?",
        a: "Red: raw meat; Yellow: cooked meat; Blue: raw fish; Green: salad & fruit; Brown: root vegetables; White: bakery & dairy."
      },
      {
        q: "Why is colour coding mandatory in commercial kitchens?",
        a: "Colour coding provides an immediate visual barrier that prevents raw meat bacteria (Campylobacter, Salmonella) from transferring to ready-to-eat foods."
      },
      {
        q: "Can wooden chopping boards be used in commercial kitchens?",
        a: "Wooden boards are generally discouraged in UK commercial kitchens because knife scoring harbours bacteria and moisture. High-density polyethylene (HDPE) boards are standard."
      },
      {
        q: "When should commercial plastic chopping boards be replaced?",
        a: "Replace boards as soon as deep knife grooves, warping, or discolouration prevent effective two-stage cleaning and sanitisation."
      },
      {
        q: "What washing temperature is required to sanitise chopping boards?",
        a: "Commercial pass-through dishwashers must reach a minimum rinse temperature of 82.0°C to achieve thermal sanitisation of cutting boards."
      }
    ],
    relatedTools: [
      "chopping-board-colour-chart",
      "food-sanitation-rules",
      "kitchen-safety-poster"
    ],
    relatedBlog: {
      title: "How to Get a 5-Star Food Hygiene Rating: UK EHO Checklist",
      slug: "uk-food-hygiene-rating-scheme-5-star-checklist"
    }
  },
  "defrosting-foods": {
    directAnswer:
      "Commercial food defrosting must be conducted under controlled conditions to prevent food entering the 8°C-63°C danger zone. The primary approved method is refrigerator thawing at or below 5.0°C in dedicated drip-tray thaw boxes. Microwave defrosting is permissible only if food is cooked immediately thereafter.",
    howTo: [
      "Thaw food inside commercial chillers maintained strictly at or below 5.0°C.",
      "Place thawing items in deep drip pans on the lowest shelf to catch melting juices.",
      "Never defrost high-risk meats, poultry, or seafood at ambient room temperature.",
      "Cook thoroughly defrosted foods within 24 hours of thawing completion.",
      "Verify core is completely thawed with no interior ice crystals before cooking."
    ],
    faqs: [
      {
        q: "What is the safest method for defrosting food in a commercial kitchen?",
        a: "Refrigerated thawing at or below 5.0°C. This keeps the outer surfaces of food outside the temperature danger zone while the core thaws."
      },
      {
        q: "Why is defrosting food at room temperature dangerous and illegal?",
        a: "At room temperature (around 20°C), the outer layer of thawing meat enters the danger zone for hours, allowing rapid bacterial multiplication while the center remains frozen."
      },
      {
        q: "Can thawed raw food be refrozen without cooking?",
        a: "Never. Refreezing thawed raw food damages cell structures, releases moisture, and locks in bacteria that multiplied during the thawing phase. Cook first, then freeze."
      },
      {
        q: "How long can defrosted food be kept before cooking?",
        a: "Defrosted food must be cooked within 24 hours of complete thawing and kept at or below 5.0°C until cooking commences."
      },
      {
        q: "Is cold running water defrosting acceptable under UK food hygiene rules?",
        a: "Only as an emergency method using potable running water below 15°C with food submerged in watertight packaging, followed by immediate cooking."
      }
    ],
    relatedTools: [
      "freezer-temperature-chart",
      "meat-cooking-temperature-chart",
      "food-temperature-chart"
    ],
    relatedBlog: {
      title: "Commercial Kitchen Food Cooling & Temperature Guide",
      slug: "commercial-kitchen-food-cooling-temperature-guide"
    }
  },
"""

new_deep_text = deep_text[:insert_pos] + b31_deep_content + deep_text[insert_pos:]
with open('src/data/tool_deep_content.ts', 'w', encoding='utf-8') as f:
    f.write(new_deep_text)
print("4. Injected Batch 31 deep content into tool_deep_content.ts")

# -------------------------------------------------------------
# 5. UPDATE TRACKER JSON & CSV
# -------------------------------------------------------------
with open('audit/tools-seo-tracker.json', 'r', encoding='utf-8') as f:
    tracker = json.load(f)

updated_count = 0
for t in tracker:
    if t.get('slug') in b31_meta:
        t['status'] = 'COMPLETED'
        t['title'] = b31_meta[t['slug']]['title']
        t['metaDescription'] = b31_meta[t['slug']]['desc']
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
print("=== BATCH 31 APPLIED SUCCESSFULLY ===")
