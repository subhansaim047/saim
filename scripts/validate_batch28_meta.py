batch28_meta = {
    "when-should-you-wash-your-hands": {
        "title": "Free When to Wash Hands Poster Guide | Saim Dev",
        "desc": "Master kitchen hand hygiene triggers under UK food safety laws. Free food service handwashing poster covering raw meat handling, bins, and coughs."
    },
    "how-do-you-calibrate-a-thermometer": {
        "title": "Free How to Calibrate a Thermometer Guide | Saim Dev",
        "desc": "Calibrate kitchen probe thermometers using ice slurry and boiling water. Free step-by-step calibration guide with ±1.0°C FSA accuracy tolerances."
    },
    "kitchen-safety-poster": {
        "title": "Free Commercial Kitchen Safety Poster | Saim Dev",
        "desc": "Prevent slips, cuts, burns, and chemical accidents in professional kitchens. Free printable kitchen safety poster conforming to HSE catering rules."
    },
    "food-safety-and-sanitation": {
        "title": "Free Food Safety & Sanitation Poster Guide | Saim Dev",
        "desc": "Master commercial kitchen two-stage cleaning and BS EN 1276 sanitising. Free printable food safety sanitation poster with contact time rules."
    },
    "big-6-foodborne-illnesses": {
        "title": "Free Big 6 Foodborne Illnesses Poster | Saim Dev",
        "desc": "Identify and prevent the Big 6 pathogens: Norovirus, Salmonella, E. coli, and more. Free foodborne illnesses chart with 48-hour exclusion rules."
    }
}

for slug, m in batch28_meta.items():
    t = m["title"]
    d = m["desc"]
    print(f"{slug}:")
    print(f"  Title: {len(t)} chars | Ends with ' | Saim Dev': {t.endswith(' | Saim Dev')} | Has 'Free': {'Free' in t}")
    print(f"  Desc: {len(d)} chars | In 120-155: {120 <= len(d) <= 155}")
