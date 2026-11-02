batch25_meta = {
    "restaurant-maintenance-checklist": {
        "title": "Free Restaurant Maintenance Checklist | Saim Dev",
        "desc": "Keep commercial kitchen equipment and facilities running reliably. Free preventative maintenance checklist covering HVAC, refrigeration, and Gas Safe."
    },
    "restaurant-inventory-template": {
        "title": "Free Restaurant Inventory Template Guide | Saim Dev",
        "desc": "Track commercial kitchen food stock, par levels, and inventory costs. Free customizable restaurant inventory sheet covering cold storage and dry stock."
    },
    "restaurant-schedule-template": {
        "title": "Free Restaurant Staff Schedule Template | Saim Dev",
        "desc": "Streamline weekly FOH and BOH hospitality staff scheduling. Free restaurant rota template with shift planning, rest break rules, and labour budgets."
    },
    "kitchen-prep-list-template": {
        "title": "Free Kitchen Prep List Checklist Guide | Saim Dev",
        "desc": "Organise daily commercial kitchen culinary prep stations with par levels. Free kitchen prep sheet covering batch pars, cooling times, and allergens."
    },
    "cooking-log-template": {
        "title": "Free Cooking Temperature Log Sheet | Saim Dev",
        "desc": "Record daily commercial kitchen cooking core temperatures for EHO audits. Free cooking temperature log sheet with FSA 75°C critical limit validation."
    }
}

for slug, m in batch25_meta.items():
    t = m["title"]
    d = m["desc"]
    print(f"{slug}:")
    print(f"  Title: {len(t)} chars | Ends with ' | Saim Dev': {t.endswith(' | Saim Dev')} | Has 'Free': {'Free' in t}")
    print(f"  Desc: {len(d)} chars | In 120-155: {120 <= len(d) <= 155}")
