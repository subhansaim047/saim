import json

path = r'C:\Users\subhan\.gemini\antigravity\scratch\saim\src\data\core_metadata.json'
with open(path, 'r', encoding='utf-8') as f:
    meta = json.load(f)

batch16_meta = {
    "product-specification-sheet": {
        "title": "Free Product Specification Sheet Template | Saim Dev",
        "desc": "Free food product specification sheet template for UK manufacturers. Document ingredients, 14 allergens, shelf life, microbiological limits, and CCPs.",
        "howTo": [
            "Enter product trade name, recipe batch code, and manufacturer site accreditation numbers.",
            "Document complete quantitative ingredient list with QUID percentages and compound origins.",
            "Check all present and cross-contact allergens according to the UK 14 major allergens list.",
            "Specify storage temperatures, shelf life testing limits, and target microbiological criteria."
        ]
    },
    "pest-management-plan": {
        "title": "Free Integrated Pest Management Plan (IPM) | Saim Dev",
        "desc": "Free integrated pest management plan (IPM) for UK food businesses. Prevent rodent and insect ingress, audit bait stations, and meet EHO standards.",
        "howTo": [
            "Inspect building envelope, door bristle strips, and pipe seals to eliminate rodent ingress points.",
            "Map all tamper-resistant external bait boxes and internal non-toxic insect monitoring traps.",
            "Conduct daily kitchen opening checks for droppings, grease smear marks, or packaging gnawing.",
            "Review BPCA contractor inspection reports and complete recommended pest proofing actions."
        ]
    },
    "meat-cooking-chart": {
        "title": "Free Meat Cooking Temperature Chart & Guide | Saim Dev",
        "desc": "Free commercial meat cooking temperature chart. Master UK statutory core temperatures, resting carry-over heat, and safe probe locations for all meats.",
        "howTo": [
            "Select the commercial meat category (poultry, beef, lamb, pork, duck, venison, or burger).",
            "Enter raw joint weight to calculate oven roasting time and recommended resting duration.",
            "Insert a calibrated probe thermometer into the thermal geometric center of the thickest cut.",
            "Verify minimum UK statutory core temperature (75°C poultry/mince, or approved rare beef sear)."
        ]
    },
    "steak-cooking-chart": {
        "title": "Free Steak Doneness & Cooking Temp Chart | Saim Dev",
        "desc": "Free commercial steak doneness and cooking temperature chart. Master internal temperatures for blue, rare, medium, and well-done steaks with safe resting.",
        "howTo": [
            "Bring steaks to room temperature for 20 minutes and preheat heavy grill or pan to high heat.",
            "Sear all external surfaces thoroughly to kill surface bacteria according to FSA regulations.",
            "Insert a fine digital needle probe horizontally into the exact centre of the steak.",
            "Remove at target internal temperature (e.g. 52°C for rare) and rest 5–8 minutes before serving."
        ]
    },
    "turkey-cooking-chart": {
        "title": "Free Turkey Cooking Temperature Chart | Saim Dev",
        "desc": "Free commercial turkey cooking temperature chart. Calculate roasting times by weight, verify 75°C core probe limits, and ensure safe holiday catering.",
        "howTo": [
            "Weigh whole turkey or turkey crown to determine precise commercial oven cooking duration.",
            "Insert digital probe into thickest part of breast and innermost thigh without touching bone.",
            "Ensure core temperature reaches 75°C for 30 seconds (or 82°C in Scotland) before removal.",
            "Allow a minimum 20 to 30-minute tented foil rest to facilitate safe heat distribution."
        ]
    }
}

for slug, data in batch16_meta.items():
    meta[slug] = data
    print(f"Updated metadata for {slug} (Title: {len(data['title'])} chars, Desc: {len(data['desc'])} chars)")

with open(path, 'w', encoding='utf-8') as f:
    json.dump(meta, f, indent=2, ensure_ascii=False)

print("Finished updating core_metadata.json for Batch 16")
