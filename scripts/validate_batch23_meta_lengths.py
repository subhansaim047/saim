batch23_meta = {
    "gmp-audit-checklist": {
        "title": "Free GMP Audit Checklist Template | Saim Dev",
        "desc": "Master Good Manufacturing Practice compliance across food processing lines. Free GMP audit checklist covering PRPs, pest control, hygiene, and staff."
    },
    "gfsi-audit-checklist": {
        "title": "Free GFSI Audit Checklist Guide | Saim Dev",
        "desc": "Prepare for BRCGS, SQF, and FSSC 22000 certification audits. Free GFSI audit checklist covering management commitment, HACCP checks, and recall tests."
    },
    "get-iso-22000-certified": {
        "title": "Free ISO 22000 Certification Checklist | Saim Dev",
        "desc": "Follow a step-by-step 10-stage roadmap to achieve ISO 22000 certification. Free implementation checklist covering PRPs, CCP validation, and Stage 2 audits."
    },
    "sqf-audit-checklist": {
        "title": "Free SQF Audit Checklist Template | Saim Dev",
        "desc": "Streamline Safe Quality Food Edition 9 compliance with an interactive audit tool. Free SQF checklist covering Module 2 system elements and Module 11 GMPs."
    },
    "iso-22000-internal-audit-checklist": {
        "title": "Free ISO 22000 Internal Audit Checklist | Saim Dev",
        "desc": "Conduct rigorous ISO 22000:2018 internal audits across Clauses 4 to 10. Free interactive checklist with evidence logging and non-conformance tracking."
    }
}

for slug, m in batch23_meta.items():
    t = m["title"]
    d = m["desc"]
    print(f"{slug}:")
    print(f"  Title: {len(t)} chars | Ends with ' | Saim Dev': {t.endswith(' | Saim Dev')} | Has 'Free': {'Free' in t}")
    print(f"  Desc: {len(d)} chars | In 120-155: {120 <= len(d) <= 155}")
