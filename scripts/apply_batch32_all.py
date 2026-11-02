import json
import re

print("=== STARTING BATCH 32 (FINAL 5 TOOLS) COMPREHENSIVE UPDATE ===")

# -------------------------------------------------------------
# 1. UPDATE CORE METADATA
# -------------------------------------------------------------
with open('src/data/core_metadata.json', 'r', encoding='utf-8') as f:
    meta = json.load(f)

b32_meta = {
    "boiling-water-thermometer-calibration": {
        "title": "Free Boiling Water Calibration SOP | Saim Dev",
        "desc": "Boiling water thermometer calibration SOP for UK kitchens. Verify 100°C ±1°C accuracy, probe adjustment, and statutory monthly EHO logging records.",
        "howTo": [
            "Bring a deep pan of clean water to a vigorous rolling boil",
            "Submerge the probe stem at least 50mm without touching pot sides",
            "Hold stationary for 10 seconds until the digital reading stabilises",
            "Verify the thermometer reads 100.0°C within ±1.0°C tolerance",
            "Record the reading, calibration date, and chef initials in the log"
        ]
    },
    "prevent-freezer-burn": {
        "title": "Free Freezer Burn Prevention Guide | Saim Dev",
        "desc": "Commercial kitchen freezer burn prevention guide. Master vacuum sealing, airtight containers, continuous -18°C controls, and FIFO stock rotation.",
        "howTo": [
            "Wrap meats in heavy-duty food-grade moisture-vapour-proof barrier film",
            "Vacuum seal proteins to eliminate all interior headspace air pockets",
            "Maintain commercial freezers at a steady -18.0°C without fluctuations",
            "Apply First-In, First-Out (FIFO) stock rotation with clear date markers",
            "Never place warm foods directly into commercial sub-zero storage"
        ]
    },
    "restaurant-steps-of-service": {
        "title": "Free Restaurant Steps Of Service SOP | Saim Dev",
        "desc": "UK restaurant front-of-house steps of service SOP. From guest greeting, dietary & allergen inquiries, order entry, to payment and table reset.",
        "howTo": [
            "Greet guests within 60 seconds of arrival with warm hospitality",
            "Inquire proactively about statutory food allergies and dietary needs",
            "Relay allergen alerts directly to Head Chef before ringing tickets",
            "Deliver courses simultaneously using tray stands and correct cutlery",
            "Process card payments tableside and reset sanitised covers promptly"
        ]
    },
    "restaurant-food-safety-procedures": {
        "title": "Free Food Safety Procedures SOP UK | Saim Dev",
        "desc": "UK restaurant food safety procedures SOP. Implement 4Cs (Cleaning, Cooking, Chilling, Cross-contamination), CCP limits, and FSA SFBB compliance.",
        "howTo": [
            "Cleaning: Execute two-stage detergent wash and BS EN 1276 sanitisation",
            "Cooking: Verify internal core temperatures reach at least 75.0°C for 30s",
            "Chilling: Rapidly chill cooked items to below 8.0°C within 90 minutes",
            "Cross-Contamination: Separate raw and ready-to-eat via colour-coded tools",
            "Due Diligence: Complete and file daily opening and closing SFBB logs"
        ]
    },
    "restaurant-manager-responsibilities": {
        "title": "Free Kitchen Manager Compliance SOP | Saim Dev",
        "desc": "Commercial kitchen manager responsibilities SOP. Master EHO audit readiness, staff hygiene training, HACCP diary verification, and due diligence.",
        "howTo": [
            "Audit daily opening and closing food hygiene checklists before service",
            "Verify all temperature probe logs are signed and within critical limits",
            "Supervise staff allergen communications and Natasha's Law compliance",
            "Maintain pest control reports, supplier certificates, and staff training",
            "Act as primary liaison during local authority EHO statutory inspections"
        ]
    }
}

for slug, data in b32_meta.items():
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

# Add freezer-burn to isFreezerTool
if 'template.slug.includes("freezer-burn")' not in tdp:
    tdp = tdp.replace(
        'template.slug.includes("freezer-temperature");',
        'template.slug.includes("freezer-temperature") ||\n    template.slug.includes("freezer-burn");'
    )

# Add manager and steps-of-service to isChecklistOrLog
if 'template.slug.includes("manager")' not in tdp:
    tdp = tdp.replace(
        'template.slug.includes("defrost") ||',
        'template.slug.includes("defrost") ||\n      template.slug.includes("manager") ||\n      template.slug.includes("steps-of-service") ||'
    )

with open('src/components/TemplateDetailPage.tsx', 'w', encoding='utf-8') as f:
    f.write(tdp)
print("2. Updated TemplateDetailPage.tsx")

# -------------------------------------------------------------
# 3. UPDATE DigitalChecklistTool.tsx (routing for steps-of-service & manager)
# -------------------------------------------------------------
with open('src/components/tools/DigitalChecklistTool.tsx', 'r', encoding='utf-8') as f:
    dcl = f.read()

if 'templateId && templateId.includes("steps-of-service")' not in dcl:
    dcl = dcl.replace(
        'templateTitle.toLowerCase().includes("foh")',
        'templateTitle.toLowerCase().includes("foh") ||\n    templateTitle.toLowerCase().includes("steps of service") ||\n    (templateId && templateId.includes("steps-of-service"))'
    )

if 'templateId && templateId.includes("restaurant-manager-responsibilities")' not in dcl:
    dcl = dcl.replace(
        'templateTitle.toLowerCase().includes("due diligence")',
        'templateTitle.toLowerCase().includes("due diligence") ||\n    templateTitle.toLowerCase().includes("manager") ||\n    (templateId && templateId.includes("restaurant-manager-responsibilities"))'
    )

with open('src/components/tools/DigitalChecklistTool.tsx', 'w', encoding='utf-8') as f:
    f.write(dcl)
print("3. Updated DigitalChecklistTool.tsx")

# -------------------------------------------------------------
# 4. INJECT DEEP CONTENT INTO tool_deep_content.ts
# -------------------------------------------------------------
with open('src/data/tool_deep_content.ts', 'r', encoding='utf-8') as f:
    deep_text = f.read()

fallback_pos = deep_text.find('export const FALLBACK_DEEP_CONTENT')
assert fallback_pos != -1, "Could not find FALLBACK_DEEP_CONTENT"
insert_pos = deep_text.rfind('};', 0, fallback_pos)
assert insert_pos != -1, "Could not find closing brace before FALLBACK_DEEP_CONTENT"

b32_deep_content = """  "boiling-water-thermometer-calibration": {
    directAnswer:
      "The boiling point thermometer calibration method verifies digital probe accuracy in a rolling boil of clean water. Under UK food safety due diligence, the sensor must read 100.0°C within an allowable tolerance of ±1.0°C (between 99.0°C and 101.0°C at sea level). Monthly logging protects against undetected thermometer drift.",
    howTo: [
      "Bring a deep pan of clean tap water to a rolling, vigorous boil.",
      "Immerse the metal probe stem at least 50mm into the boiling water.",
      "Ensure the probe tip remains suspended without touching pot sides or bottom.",
      "Wait 10 seconds until the digital reading holds constant without fluctuating.",
      "Record the calibration reading (must be 100.0°C ±1.0°C) in the kitchen register."
    ],
    faqs: [
      {
        q: "What is the acceptable accuracy tolerance for boiling water calibration?",
        a: "Under UK food safety guidelines, commercial digital probe thermometers must read within ±1.0°C of boiling point (99.0°C to 101.0°C at normal atmospheric pressure)."
      },
      {
        q: "Why must the probe needle avoid touching the bottom or sides of the pot?",
        a: "The metal pot bottom absorbs direct radiant heat from the cooker element and reaches temperatures far exceeding 100°C, causing false high readings."
      },
      {
        q: "How often should commercial kitchen thermometers be calibrated?",
        a: "Perform dual ice bath (0.0°C) and boiling water (100.0°C) calibration checks at least monthly, and immediately if a unit is dropped or shows suspicious readings."
      },
      {
        q: "What action must be taken if a thermometer reads 102.5°C during a boil test?",
        a: "The unit exceeds the ±1.0°C tolerance; adjust the digital offset calibration screw if supported, or immediately remove the probe from service and replace it."
      },
      {
        q: "Does altitude affect the boiling water calibration temperature?",
        a: "Yes. Water boils at 100.0°C at sea level, but for every 300 meters (1,000 feet) above sea level, the boiling point drops approximately 1.0°C. Adjust targets accordingly."
      }
    ],
    relatedTools: [
      "how-to-use-a-meat-thermometer",
      "how-to-use-a-food-thermometer",
      "thermometer-calibration-log"
    ],
    relatedBlog: {
      title: "How to Write a HACCP Plan for UK Food Businesses: Step-by-Step",
      slug: "how-to-write-haccp-plan-uk-food-business-step-by-step"
    }
  },
  "prevent-freezer-burn": {
    directAnswer:
      "Freezer burn occurs when moisture sublimates from frozen food surfaces, leaving dry, oxidized, discoloured patches. Commercial kitchens prevent freezer burn by using moisture-vapour-proof vacuum packaging, eliminating interior headspace air, maintaining steady -18.0°C temperatures without thermal cycling, and adhering to strict FIFO storage rotation.",
    howTo: [
      "Vacuum-seal raw meats and prepared batches in heavy-duty food-grade pouches.",
      "Press out all excess air before sealing zipper bags or plastic wrap barriers.",
      "Maintain sub-zero storage at -18.0°C continuously, minimizing door opening times.",
      "Rotate stock using First-In, First-Out (FIFO) standards with clear date labels.",
      "Chill foods thoroughly to 5.0°C before loading them into commercial freezers."
    ],
    faqs: [
      {
        q: "What is freezer burn and is freezer-burned food safe to eat?",
        a: "Freezer burn is dehydration and oxidation caused by air contact in sub-zero storage. While dry and texture-degraded, freezer-burned food is microbiologically safe if kept at -18°C, though flavor and appearance suffer."
      },
      {
        q: "What packaging material best prevents freezer burn in commercial kitchens?",
        a: "Heavy-duty commercial vacuum bags, barrier film wraps, and airtight food-grade plastic tubs with silicone hermetic gaskets provide the strongest vapor barrier."
      },
      {
        q: "How does temperature fluctuation accelerate freezer burn?",
        a: "When freezer temperatures cycle above -18°C (e.g. during frequent door opening), ice crystals inside food melt slightly and vaporize into air spaces, desiccating meat surfaces."
      },
      {
        q: "Can freezer-burned areas be salvaged before cooking?",
        a: "Yes. Chefs can trim away gray or leathery freezer-burned patches with a clean knife before cooking; the remaining unaffected food will cook normally."
      },
      {
        q: "What is the maximum recommended freezer storage time for commercial meats?",
        a: "Whole beef and lamb joints keep up to 12 months at -18°C, minced meats 4 to 6 months, and poultry 6 to 9 months when sealed in airtight vacuum packaging."
      }
    ],
    relatedTools: [
      "freezer-temperature-chart",
      "defrosting-foods",
      "walk-in-cooler-food-storage-chart"
    ],
    relatedBlog: {
      title: "Commercial Kitchen Food Cooling & Temperature Guide",
      slug: "commercial-kitchen-food-cooling-temperature-guide"
    }
  },
  "restaurant-steps-of-service": {
    directAnswer:
      "Restaurant steps of service define the standardized front-of-house operational sequence from initial guest greeting within 60 seconds, allergen inquiry, beverage and order taking, course delivery, mid-meal check-back, to billing and table turnover. Flawless execution ensures exceptional guest hospitality and statutory allergen compliance.",
    howTo: [
      "Greet and seat guests warmly within 60 seconds of entering the dining room.",
      "Inquire proactively about food allergies before taking drink or food orders.",
      "Record order details precisely and transmit dietary alerts directly to the kitchen.",
      "Deliver hot courses simultaneously with appropriate cutlery and condiments.",
      "Conduct a two-minute / two-bite check-back to verify satisfaction and resolve queries.",
      "Present clear, itemized bills promptly and thank guests warmly upon departure."
    ],
    faqs: [
      {
        q: "What are the standard steps of service in a commercial restaurant?",
        a: "The core sequence is: 1. Welcome & Seating (60s); 2. Drink & Allergy Inquiry; 3. Food Ordering; 4. Service & Delivery; 5. Two-Minute Check-Back; 6. Dessert/Coffee Offer; 7. Payment & Farewell."
      },
      {
        q: "When must front-of-house staff ask guests about statutory food allergies?",
        a: "Staff should ask about allergies immediately after seating or before presenting menus, ensuring any guest dietary restrictions are communicated to the kitchen before food prep begins."
      },
      {
        q: "What is the two-minute check-back rule?",
        a: "Servers return to the table within two minutes of course delivery (or after two bites) to verify food quality, temperature, and satisfaction while errors can still be quickly rectified."
      },
      {
        q: "How does standardized steps of service improve table turnover?",
        a: "Standardizing each phase eliminates unnecessary waiting intervals between courses and payment, maximizing seating efficiency and revenue during peak service."
      },
      {
        q: "What should servers do if a customer declares a severe peanut or gluten allergy?",
        a: "Immediately note the allergy in red on the ticket, speak in person with the Head Chef or Manager, and reference the premises allergen matrix before serving."
      }
    ],
    relatedTools: [
      "restaurant-opening-checklist",
      "natashas-law",
      "consumer-advisory"
    ],
    relatedBlog: {
      title: "How to Create a Compliant 14 Allergen Matrix: UK Guide",
      slug: "how-to-create-compliant-14-allergen-matrix-uk-restaurants"
    }
  },
  "restaurant-food-safety-procedures": {
    directAnswer:
      "Commercial restaurant food safety procedures establish standardized protocols across the '4 Cs' of food hygiene: Cleaning (two-stage disinfection), Cooking (75.0°C core lethality), Chilling (rapid 90-minute cooldown and <=5°C storage), and Cross-Contamination prevention. Consistent execution satisfies UK Food Safety Act 1990 due diligence.",
    howTo: [
      "Implement two-stage detergent washing and BS EN 1276 disinfectant contact times.",
      "Verify cooking reaches at least 75.0°C for 30 seconds (or 82.0°C in Scotland).",
      "Chill cooked batches from 60°C to below 8°C within 90 minutes before refrigeration.",
      "Enforce strict raw and cooked separation using colour-coded boards and tongs.",
      "Maintain daily SFBB diary sign-offs, temp logs, and supplier delivery records."
    ],
    faqs: [
      {
        q: "What are the '4 Cs' of UK food safety procedures?",
        a: "The 4 Cs defined by the UK Food Standards Agency are Cleaning, Cooking, Chilling, and Cross-Contamination—the cornerstone of Safer Food, Better Business."
      },
      {
        q: "What constitutes legal 'due diligence' for restaurant food safety?",
        a: "Under Section 21 of the Food Safety Act 1990, due diligence requires proving that a business took all reasonable precautions and exercised all due diligence through documented HACCP logs."
      },
      {
        q: "How long must commercial kitchen temperature and cleaning logs be archived?",
        a: "Retain completed daily logs and temperature sheets for a minimum of 12 months so they are readily available during unannounced local authority inspections."
      },
      {
        q: "What are the rules regarding staff sickness and food handling?",
        a: "Staff suffering from vomiting, diarrhea, or acute gastrointestinal symptoms must be excluded from food handling for at least 48 hours after symptoms cease."
      },
      {
        q: "How does a restaurant maintain a 5-star food hygiene rating?",
        a: "Achieving a 5-star rating requires excellent hygiene handling, high standards of premises cleanliness and structure, and full confidence in management documented through HACCP."
      }
    ],
    relatedTools: [
      "food-sanitation-rules",
      "five-food-safety-rules",
      "basic-food-preparation-rules"
    ],
    relatedBlog: {
      title: "How to Get a 5-Star Food Hygiene Rating: UK EHO Checklist",
      slug: "uk-food-hygiene-rating-scheme-5-star-checklist"
    }
  },
  "restaurant-manager-responsibilities": {
    directAnswer:
      "A commercial restaurant manager bears statutory legal responsibility for food business operator (FBO) compliance under the Food Safety Act 1990 and Regulation (EC) No 852/2004. Duties include verifying daily opening/closing HACCP records, enforcing allergen declarations, supervising staff hygiene training, and maintaining EHO audit readiness.",
    howTo: [
      "Audit and sign off daily SFBB opening and closing kitchen checklists.",
      "Verify all critical temperature probe sheets (fridges, cooking, hot holding).",
      "Oversee staff training on allergen cross-contact and Natasha's Law compliance.",
      "Review pest control contractor reports and ensure rapid proofing actions.",
      "Act as the designated premises lead during Environmental Health Officer inspections."
    ],
    faqs: [
      {
        q: "What are the statutory legal responsibilities of a restaurant manager in the UK?",
        a: "A restaurant manager must ensure food served is safe to eat, of the nature/substance expected, accurately labelled, and produced under an active, verified HACCP management system."
      },
      {
        q: "Can a restaurant manager be held personally liable for food safety offences?",
        a: "Yes. Under Section 20 of the Food Safety Act 1990, if an offence is committed with the consent, connivance, or neglect of a manager or director, they can be prosecuted individually."
      },
      {
        q: "What food hygiene training qualification should a restaurant manager hold?",
        a: "Kitchen and restaurant managers are expected to hold at least a Level 3 Food Hygiene and Safety for Supervisors or Level 4 Food Safety Management qualification."
      },
      {
        q: "What should a manager do immediately upon an EHO unannounced visit?",
        a: "Greet the officer, verify credentials, provide access to the kitchen, produce completed HACCP diaries and temperature logs, and accompany the officer taking detailed notes."
      },
      {
        q: "How does a manager ensure allergen compliance under Natasha's Law?",
        a: "Ensure all prepacked for direct sale (PPDS) foods bear full ingredient lists with 14 statutory allergens emphasized in bold, and verify allergen matrixes are updated with supplier changes."
      }
    ],
    relatedTools: [
      "restaurant-opening-checklist",
      "gmp-audit-checklist",
      "due-diligence-checklist"
    ],
    relatedBlog: {
      title: "How to Get a 5-Star Food Hygiene Rating: UK EHO Checklist",
      slug: "uk-food-hygiene-rating-scheme-5-star-checklist"
    }
  },
"""

new_deep_text = deep_text[:insert_pos] + b32_deep_content + deep_text[insert_pos:]
with open('src/data/tool_deep_content.ts', 'w', encoding='utf-8') as f:
    f.write(new_deep_text)
print("4. Injected Batch 32 deep content into tool_deep_content.ts")

# -------------------------------------------------------------
# 5. UPDATE TRACKER JSON & CSV
# -------------------------------------------------------------
with open('audit/tools-seo-tracker.json', 'r', encoding='utf-8') as f:
    tracker = json.load(f)

updated_count = 0
for t in tracker:
    if t.get('slug') in b32_meta:
        t['status'] = 'COMPLETED'
        t['title'] = b32_meta[t['slug']]['title']
        t['metaDescription'] = b32_meta[t['slug']]['desc']
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
print("=== BATCH 32 APPLIED SUCCESSFULLY - 160/160 TOOLS ARE NOW COMPLETED! ===")
