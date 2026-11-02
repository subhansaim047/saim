import json

path = r'C:\Users\subhan\.gemini\antigravity\scratch\saim\src\data\core_metadata.json'
with open(path, 'r', encoding='utf-8') as f:
    meta = json.load(f)

batch18_meta = {
    "food-expiration-dates-guidelines-chart": {
        "title": "Free Food Expiration Dates Guidelines Chart | Saim Dev",
        "desc": "Free food expiration dates guidelines chart for UK catering. Understand Use-By versus Best-Before dates, legal sale rules, and food waste reduction.",
        "howTo": [
            "Differentiate between statutory food safety Use-By dates and quality Best-Before dates.",
            "Enforce strict zero-use policy for any foodstuffs past their printed Use-By date.",
            "Inspect dry goods and ambient pantry products past Best-Before for sensory quality.",
            "Apply day dots to opened commercial packaging specifying date opened and use-by limit."
        ]
    },
    "canned-food-expiration-dates-chart": {
        "title": "Free Canned Food Expiration Dates Chart | Saim Dev",
        "desc": "Free canned food expiration dates chart. Inspect dented, rusted, or swollen cans, manage commercial ambient pantry storage, and prevent botulism risks.",
        "howTo": [
            "Inspect canned deliveries for sharp rim dents, seam fractures, swelling, or rusting.",
            "Store commercial canned goods in a cool, dry, well-ventilated storeroom below 21°C.",
            "Rotate stock using First-In, First-Out (FIFO) based on manufacturer Best-Before dates.",
            "Decant opened canned foods immediately into food-grade plastic containers before chilling."
        ]
    },
    "how-long-to-keep-leftovers-chart": {
        "title": "Free Leftover Food Storage Time Chart | Saim Dev",
        "desc": "Free commercial leftovers storage chart. Master UK 2-day chilling rules, rapid 90-minute cooling limits, and 75°C core reheating standards for catering.",
        "howTo": [
            "Cool batch-cooked food to below 8°C within 90 minutes using shallow pans or blast chillers.",
            "Transfer cooled leftovers into airtight, date-labelled food containers in the walk-in fridge.",
            "Consume or safely discard refrigerated cooked leftovers within 48 hours (day of prep + 2).",
            "Reheat leftovers only once, ensuring internal core temperature reaches at least 75°C."
        ]
    },
    "how-long-does-butter-last-poster": {
        "title": "Free How Long Does Butter Last Poster | Saim Dev",
        "desc": "Free butter storage and shelf life poster for commercial kitchens. Master salted vs unsalted butter storage, ambient service limits, and rancidity tests.",
        "howTo": [
            "Store unopened salted and unsalted butter in commercial refrigeration at 1°C to 5°C.",
            "Keep service butter at ambient room temperature in covered crocks for up to 24 hours.",
            "Protect butter blocks from light and pungent kitchen aromas using airtight greaseproof wraps.",
            "Freeze surplus blocks at -18°C for up to 9 months, thawing slowly in the refrigerator."
        ]
    },
    "milk-pasteurization-temperature-time-chart": {
        "title": "Free Milk Pasteurization Temp & Time Chart | Saim Dev",
        "desc": "Free milk pasteurization temperature-time chart. Master HTST (72°C for 15s), LTLT vat batching, and UHT standards for commercial dairy processing.",
        "howTo": [
            "Select dairy thermal processing method: HTST continuous flow, LTLT vat batch, or UHT.",
            "Heat raw milk to statutory parameters (e.g. 72°C held continuously for at least 15 seconds).",
            "Chill pasteurised milk immediately to below 6°C to inhibit spore germination and spoilage.",
            "Verify complete pathogen inactivation using standard alkaline phosphatase (ALP) enzyme tests."
        ]
    }
}

for slug, data in batch18_meta.items():
    meta[slug] = data
    print(f"Updated metadata for {slug} (Title: {len(data['title'])} chars, Desc: {len(data['desc'])} chars)")

with open(path, 'w', encoding='utf-8') as f:
    json.dump(meta, f, indent=2, ensure_ascii=False)

print("Finished updating core_metadata.json for Batch 18")
