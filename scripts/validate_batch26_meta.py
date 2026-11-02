batch26_meta = {
    "thermometer-calibration-log": {
        "title": "Free Thermometer Calibration Log Sheet | Saim Dev",
        "desc": "Calibrate commercial kitchen probe thermometers with ice and boiling water checks. Free calibration log sheet for FSA and EHO compliance."
    },
    "what-is-the-minimum-hot-holding-temperature-requirement-for-pizza": {
        "title": "Free Hot Holding Temperature Guide for Pizza | Saim Dev",
        "desc": "Master UK hot-holding rules for pizza and display merchandisers. Free guidance covering the legal 63°C requirement and the 2-hour exemption rule."
    },
    "approved-supplier-list": {
        "title": "Free Approved Supplier List Template | Saim Dev",
        "desc": "Manage commercial food vendors, audit certifications, and allergen compliance. Free approved supplier list template for HACCP and EHO records."
    },
    "ingredient-traceability": {
        "title": "Free Ingredient Traceability Matrix Sheet | Saim Dev",
        "desc": "Track food ingredients from delivery to customer plating under EC 178/2002. Free ingredient traceability matrix sheet with mock recall support."
    },
    "delivery-log": {
        "title": "Free Food Delivery Temperature Log Sheet | Saim Dev",
        "desc": "Audit goods receiving temperatures for chilled, raw meat, and frozen stock. Free food delivery temperature log sheet for UK commercial kitchens."
    }
}

for slug, m in batch26_meta.items():
    t = m["title"]
    d = m["desc"]
    print(f"{slug}:")
    print(f"  Title: {len(t)} chars | Ends with ' | Saim Dev': {t.endswith(' | Saim Dev')} | Has 'Free': {'Free' in t}")
    print(f"  Desc: {len(d)} chars | In 120-155: {120 <= len(d) <= 155}")
