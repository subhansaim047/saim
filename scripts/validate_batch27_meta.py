batch27_meta = {
    "food-production-sheet": {
        "title": "Free Food Production Sheet Template | Saim Dev",
        "desc": "Manage daily commercial kitchen culinary batch production with par levels. Free food production sheet covering recipe yields, CCPs, and allergens."
    },
    "dispatch-log": {
        "title": "Free Food Dispatch Temperature Log Sheet | Saim Dev",
        "desc": "Record food transport temperatures for catering and deliveries. Free dispatch log covering hot holding, chilled van temps, and vehicle cleanliness."
    },
    "hot-holding-food-temperature-log": {
        "title": "Free Hot Holding Temperature Log Sheet | Saim Dev",
        "desc": "Monitor commercial kitchen bain-maries and heated display cabinets at ≥63°C. Free hot holding temperature log sheet for UK EHO compliance."
    },
    "corrective-action-plan-template": {
        "title": "Free Corrective Action Plan Template | Saim Dev",
        "desc": "Document food safety non-conformances, 5 Whys root causes, and CAPA actions. Free corrective action plan template for HACCP and EHO audits."
    },
    "fridge-layout-poster": {
        "title": "Free Commercial Fridge Layout Poster | Saim Dev",
        "desc": "Organise commercial kitchen walk-in and reach-in refrigerators safely. Free printable fridge layout poster showing raw and ready-to-eat shelf tiers."
    }
}

for slug, m in batch27_meta.items():
    t = m["title"]
    d = m["desc"]
    print(f"{slug}:")
    print(f"  Title: {len(t)} chars | Ends with ' | Saim Dev': {t.endswith(' | Saim Dev')} | Has 'Free': {'Free' in t}")
    print(f"  Desc: {len(d)} chars | In 120-155: {120 <= len(d) <= 155}")
