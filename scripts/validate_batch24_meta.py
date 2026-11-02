batch24_meta = {
    "fssc-certification-checklist": {
        "title": "Free FSSC Certification Checklist Guide | Saim Dev",
        "desc": "Prepare for FSSC 22000 Version 6 certification audits. Free FSSC checklist covering ISO 22000 requirements, sector PRPs, and food defense plans."
    },
    "natashas-law": {
        "title": "Free Natasha's Law Compliance Checklist | Saim Dev",
        "desc": "Ensure complete PPDS food labelling compliance under UK Natasha's Law. Free food business checklist covering 14 allergens, font size, and ingredients."
    },
    "non-gmo": {
        "title": "Free Non-GMO Food Audit Checklist Guide | Saim Dev",
        "desc": "Audit food supply chains for non-GMO compliance and certification. Free checklist covering segregation, PCR testing logs, and organic verification."
    },
    "amazon-seller-and-product-requirements": {
        "title": "Free Amazon Food Seller Checklist Guide | Saim Dev",
        "desc": "Master Amazon UK grocery ungating and food safety compliance. Free seller checklist covering expiry date rules, packaging standards, and cold chain."
    },
    "restaurant-fire-inspection-checklist": {
        "title": "Free Restaurant Fire Inspection Checklist | Saim Dev",
        "desc": "Ensure commercial kitchen fire safety compliance under the 2005 Order. Free inspection checklist covering hood suppression, extinguishers, and exits."
    }
}

for slug, m in batch24_meta.items():
    t = m["title"]
    d = m["desc"]
    print(f"{slug}:")
    print(f"  Title: {len(t)} chars | Ends with ' | Saim Dev': {t.endswith(' | Saim Dev')} | Has 'Free': {'Free' in t}")
    print(f"  Desc: {len(d)} chars | In 120-155: {120 <= len(d) <= 155}")
