import json

with open('src/data/page_plan.json', 'r', encoding='utf-8') as f:
    plan = json.load(f)

# 1. Promote UK pages to KEEP
promotions = {
    "eho-checklist": {
        "bucket": "KEEP",
        "target_canonical_slug": "eho-checklist",
        "reason": "Essential UK commercial kitchen Environmental Health Officer 5-star hygiene audit checklist"
    },
    "delivery-log": {
        "bucket": "KEEP",
        "target_canonical_slug": "delivery-log",
        "reason": "Statutory goods-in temperature and supplier delivery verification log for UK catering"
    },
    "cooking-log-template": {
        "bucket": "KEEP",
        "target_canonical_slug": "cooking-log-template",
        "reason": "Mandatory 75°C core probe cooking temperature monitoring record for UK commercial kitchens"
    }
}

for slug, data in promotions.items():
    plan[slug] = data
    print(f"Promoted {slug} to KEEP")

# 2. Ensure OFF_AUDIENCE_SLUGS are strictly NOINDEX
off_audience = [
    "brc-audit", "kosher-certification", "non-gmo",
    "amazon-seller-and-product-requirements", "ecosure-inspection-checklist",
    "sqf-audit-checklist", "gfsi-audit-checklist", "get-iso-22000-certified",
    "iso-22000-internal-audit-checklist", "fssc-certification-checklist",
    "fat-tom-poster", "three-sink-method", "big-6-foodborne-illnesses",
    "freeze-drying-time-chart", "turkey-pasteurization-chart",
    "milk-pasteurization-temperature-time-chart", "juice-pasteurization-temperature-time-chart",
    "meat-pasteurization-chart", "poultry-pasteurization-chart", "chicken-pasteurization-chart",
    "what-is-the-minimum-hot-holding-temperature-for-fried-chicken",
    "what-is-the-minimum-hot-holding-temperature-requirement-for-pizza",
    "what-is-the-minimum-hot-holding-temperature-for-hot-dog"
]

for slug in off_audience:
    if slug in plan:
        plan[slug]["bucket"] = "NOINDEX"
        plan[slug]["target_canonical_slug"] = slug
        plan[slug]["reason"] = "Off-audience / out-of-jurisdiction industrial or US regulation"
    else:
        plan[slug] = {
            "bucket": "NOINDEX",
            "target_canonical_slug": slug,
            "reason": "Off-audience / out-of-jurisdiction industrial or US regulation"
        }
    print(f"Set {slug} to NOINDEX")

with open('src/data/page_plan.json', 'w', encoding='utf-8') as f:
    json.dump(plan, f, indent=2)

print("\npage_plan.json updated successfully!")
