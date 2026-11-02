# -*- coding: utf-8 -*-
import json
import csv
import sys

# 1. Update DigitalChecklistTool.tsx
dcl_path = 'src/components/tools/DigitalChecklistTool.tsx'
with open(dcl_path, 'r', encoding='utf-8') as f:
    dcl_code = f.read()

new_tasks = '''
const FSSC_AUDIT_TASKS: CheckItem[] = [
  {
    id: "fssc-1",
    category: "ISO 22000 FSMS Core",
    task: "Food Safety Policy signed by senior leadership, Food Safety Team Leader appointed, and HACCP plan validated against statutory lethality standards (e.g. 75°C core for 30s or 70°C for 2 min).",
    status: "pass",
    actionNotes: "FSMS governance documents approved"
  },
  {
    id: "fssc-2",
    category: "Sector PRPs (ISO/TS 22002-1)",
    task: "Hygienic zoning maintained with physical barrier separation between raw materials and ready-to-eat packaging areas; positive air pressure verified in high-care zones.",
    status: "pass",
    actionNotes: "Zoning and air filtration logs verified"
  },
  {
    id: "fssc-3",
    category: "FSSC Req 2.5.1: Food Safety Culture",
    task: "Documented executive food safety culture plan active with measurable behavioural KPIs, employee food safety suggestions logged, and confidential whistleblowing hotline displayed.",
    status: "pass",
    actionNotes: "Annual staff culture survey completed"
  },
  {
    id: "fssc-4",
    category: "FSSC Req 2.5.3: Food Fraud Mitigation",
    task: "Documented food fraud vulnerability assessment (VACCP) covering all raw material supply chains, economic adulteration threats identified, and mitigation controls operational.",
    status: "pass",
    actionNotes: "High-risk raw ingredients audited against fraud index"
  },
  {
    id: "fssc-5",
    category: "FSSC Req 2.5.4: Food Defense (TACCP)",
    task: "Threat assessment (TACCP) conducted; facility perimeter security doors locked with key-card access; bulk raw material delivery and storage silos sealed and logged.",
    status: "pass",
    actionNotes: "Silo intake locks and CCTV feeds verified"
  },
  {
    id: "fssc-6",
    category: "FSSC Req 2.5.15: Equipment Management",
    task: "Hygienic design specifications verified for all newly commissioned machinery; sanitary welds inspected; cleanability and chemical compatibility documented.",
    status: "pass",
    actionNotes: "Equipment design sign-offs on file"
  }
];

const NATASHAS_LAW_TASKS: CheckItem[] = [
  {
    id: "nat-1",
    category: "PPDS Food Classification",
    task: "Identify and register all Prepacked for Direct Sale (PPDS) foods packed on-site prior to customer order (e.g. packaged sandwiches, baguettes, boxed salads, takeaway pies).",
    status: "pass",
    actionNotes: "PPDS menu inventory catalogued"
  },
  {
    id: "nat-2",
    category: "Exact Legal Name",
    task: "The precise descriptive name of the food clearly displayed on the front of packaging (e.g. 'Roast Chicken Salad with Mustard Mayonnaise Sandwich').",
    status: "pass",
    actionNotes: "Product title matches recipe specification"
  },
  {
    id: "nat-3",
    category: "Complete Ingredients List",
    task: "Full ingredients listed in descending order by incoming weight at mixing bowl stage, including sub-ingredients of compound foods (e.g. bread flour components, sauces).",
    status: "pass",
    actionNotes: "Ingredient weight breakdowns verified"
  },
  {
    id: "nat-4",
    category: "14 Allergen Emphasising",
    task: "All 14 statutory allergens emphasised in BOLD, CAPITAL LETTERS, or high-contrast styling each time they appear within the ingredient list (e.g. Wheat flour, Mustard, Egg).",
    status: "pass",
    actionNotes: "Allergen typographical emphasis audited"
  },
  {
    id: "nat-5",
    category: "Typography & Font Size",
    task: "Label typography meets UK Food Information Regulations 2014 minimum x-height of 1.2 mm (or 0.9 mm if packaging printable surface is under 80 cm²).",
    status: "pass",
    actionNotes: "Print x-height verified with scale gauge"
  },
  {
    id: "nat-6",
    category: "Supplier Recipe Change Controls",
    task: "Formal sign-off procedure requiring kitchen management review whenever ingredient suppliers or recipes alter allergen profiles before printing new labels.",
    status: "pass",
    actionNotes: "Supplier change notification protocol active"
  }
];

const NON_GMO_TASKS: CheckItem[] = [
  {
    id: "gmo-1",
    category: "High-Risk Crop Register",
    task: "Maintain comprehensive register of all high-risk agricultural inputs (soy, maize, canola, sugar beet, cotton derivatives) with valid non-GMO Identity Preserved (IP) certificates.",
    status: "pass",
    actionNotes: "Supplier non-GMO declarations verified"
  },
  {
    id: "gmo-2",
    category: "PCR Testing Verification",
    task: "Certificates of Analysis (COA) reviewed for every bulk lot verifying GMO genetic material remains below statutory thresholds (0.9% for food under UK/EU retained regulations).",
    status: "pass",
    actionNotes: "Lab PCR test reports confirmed negative"
  },
  {
    id: "gmo-3",
    category: "Physical Segregation",
    task: "Storage bins, transport hoppers, and production lines physically segregated and labelled 'Non-GMO / GMO-Free Only' to prevent crossover with conventional commodities.",
    status: "pass",
    actionNotes: "Dedicated non-GMO bulk bins inspected"
  },
  {
    id: "gmo-4",
    category: "Flush-Out & Cleanout Protocols",
    task: "Documented wet-cleaning purge and vacuum cleanout protocols executed and inspected between conventional and non-GMO production runs.",
    status: "pass",
    actionNotes: "Line clearance flush documented"
  },
  {
    id: "gmo-5",
    category: "Packaging Claims Substantiation",
    task: "Finished product labelling audited against Non-GMO Project standard and UK Trading Standards regulations with verifiable audit trail from farm gate to packed unit.",
    status: "pass",
    actionNotes: "Claim substantiation file complete"
  }
];

const AMAZON_FOOD_SELLER_TASKS: CheckItem[] = [
  {
    id: "amz-1",
    category: "Account & Ungating Approvals",
    task: "Commercial invoices from verified manufacturer/distributor on file, UK local authority food business registration active, and minimum 4-star food hygiene rating documented.",
    status: "pass",
    actionNotes: "Amazon Grocery category approval granted"
  },
  {
    id: "amz-2",
    category: "Shelf-Life & Expiration Window",
    task: "Perishable food inventory delivered to Amazon FBA fulfilment centres has at least 50+ days shelf-life remaining (90+ days recommended for rapid inventory turnover).",
    status: "pass",
    actionNotes: "Inbound inventory shelf-life exceeds 120 days"
  },
  {
    id: "amz-3",
    category: "Expiry Date Print Standards",
    task: "Expiration dates printed in DD-MM-YYYY or MM-YYYY format in minimum 36-point bold font on master shipping cartons and individual retail units.",
    status: "pass",
    actionNotes: "Outer carton expiry date labels verified"
  },
  {
    id: "amz-4",
    category: "Meltable & Heat-Sensitive Goods",
    task: "Heat-sensitive products and chocolate confectionery restricted to October 16 - April 30 shipping window unless temperature-controlled FBA logistics utilized.",
    status: "pass",
    actionNotes: "Seasonal meltable inventory calendar flagged"
  },
  {
    id: "amz-5",
    category: "Packaging Integrity & Polybagging",
    task: "Liquid containers double-sealed or shrink-wrapped; powders hermetically sealed; poly bags with opening $\ge 5$ inches carry printed suffocation warning.",
    status: "pass",
    actionNotes: "Polybag suffocation warnings verified"
  },
  {
    id: "amz-6",
    category: "UK Food Labelling Compliance",
    task: "Packaging displays full English ingredients list, 14 statutory allergens highlighted in bold, net quantity, and UK manufacturer or importer business address.",
    status: "pass",
    actionNotes: "FIR 2014 compliant retail packaging approved"
  }
];

const RESTAURANT_FIRE_TASKS: CheckItem[] = [
  {
    id: "fire-1",
    category: "Automatic Suppression (Ansul)",
    task: "Commercial kitchen hood fire suppression system (Ansul / R-102 wet chemical) inspected, serviced, and tagged by certified technician within the last 6 months.",
    status: "pass",
    actionNotes: "Semi-annual Ansul service certificate valid"
  },
  {
    id: "fire-2",
    category: "Extraction Hood & Duct TR19 Degreasing",
    task: "Commercial extraction hoods, grease baffle filters, and kitchen ducts professionally degreased and certified to BESA TR19 fire safety standards.",
    status: "pass",
    actionNotes: "TR19 duct cleaning certificate displayed"
  },
  {
    id: "fire-3",
    category: "Class F & CO2 Extinguishers",
    task: "Class F wet chemical extinguisher stationed within 5 metres of deep fat fryers; CO2 extinguisher mounted near electrical cookline switchgear; annual service tags intact.",
    status: "pass",
    actionNotes: "All extinguishers inspected and pressure verified"
  },
  {
    id: "fire-4",
    category: "Fire Blanket Positioning",
    task: "Fire blanket conforming to BS EN 1869 mounted on kitchen wall away from cookline in an unobstructed, clearly signposted location.",
    status: "pass",
    actionNotes: "Kitchen fire blanket quick-release verified"
  },
  {
    id: "fire-5",
    category: "Emergency Exits & Lighting",
    task: "All emergency exit doors unlocked, push-bars functional, escape routes free from storage clutter, and illuminated exit signage operational on backup battery.",
    status: "pass",
    actionNotes: "Emergency exit walkthrough clear"
  },
  {
    id: "fire-6",
    category: "Gas Interlock & Emergency Shut-Off",
    task: "Gas interlock system cuts gas supply when ventilation fails; emergency manual gas shut-off valve clearly labelled, accessible, and tested weekly.",
    status: "pass",
    actionNotes: "Gas interlock fail-safe test passed"
  }
];
'''

# Insert tasks before DEFAULT_GENERAL_TASKS
kosh_end = dcl_code.find('const DEFAULT_GENERAL_TASKS')
if kosh_end == -1:
    raise Exception("Could not find const DEFAULT_GENERAL_TASKS in DigitalChecklistTool.tsx")

dcl_code = dcl_code[:kosh_end] + new_tasks + "\n" + dcl_code[kosh_end:]

# Add detection flags inside getInitialTasks
det_anchor = 'const isBrcAudit ='
det_pos = dcl_code.find(det_anchor)
if det_pos == -1:
    raise Exception("Could not find const isBrcAudit in DigitalChecklistTool.tsx")

new_detection = '''const isFssc =
    templateTitle.toLowerCase().includes("fssc") ||
    (templateId && templateId.includes("fssc"));
  const isNatashas =
    templateTitle.toLowerCase().includes("natasha") ||
    (templateId && templateId.includes("natasha"));
  const isNonGmo =
    templateTitle.toLowerCase().includes("non-gmo") ||
    templateTitle.toLowerCase().includes("non gmo") ||
    (templateId && templateId.includes("non-gmo"));
  const isAmazonSeller =
    templateTitle.toLowerCase().includes("amazon") ||
    (templateId && templateId.includes("amazon"));
  const isFireInspection =
    templateTitle.toLowerCase().includes("fire") ||
    (templateId && templateId.includes("fire"));
  '''

dcl_code = dcl_code[:det_pos] + new_detection + dcl_code[det_pos:]

# Add returns inside getInitialTasks
ret_anchor = 'if (isBrcAudit) return BRC_AUDIT_TASKS;'
ret_pos = dcl_code.find(ret_anchor)
if ret_pos == -1:
    raise Exception("Could not find if (isBrcAudit) return BRC_AUDIT_TASKS; in DigitalChecklistTool.tsx")

new_returns = '''if (isFssc) return FSSC_AUDIT_TASKS;
    if (isNatashas) return NATASHAS_LAW_TASKS;
    if (isNonGmo) return NON_GMO_TASKS;
    if (isAmazonSeller) return AMAZON_FOOD_SELLER_TASKS;
    if (isFireInspection) return RESTAURANT_FIRE_TASKS;
    '''

dcl_code = dcl_code[:ret_pos] + new_returns + dcl_code[ret_pos:]

with open(dcl_path, 'w', encoding='utf-8') as f:
    f.write(dcl_code)
print("Updated DigitalChecklistTool.tsx with Batch 24 audit tasks and routing.")

# 2. Update core_metadata.json
meta_path = 'src/data/core_metadata.json'
with open(meta_path, 'r', encoding='utf-8') as f:
    core_meta = json.load(f)

core_meta["fssc-certification-checklist"] = {
    "title": "Free FSSC Certification Checklist Guide | Saim Dev",
    "desc": "Prepare for FSSC 22000 Version 6 certification audits. Free FSSC checklist covering ISO 22000 requirements, sector PRPs, and food defense plans.",
    "howTo": [
        "Audit ISO 22000 FSMS foundation: verify Food Safety Policy, HACCP plan, and leadership commitment.",
        "Review sector-specific prerequisite programmes (ISO/TS 22002-1) for hygienic zoning and drainage.",
        "Inspect FSSC Additional Requirements: verify Food Safety Culture plan and measurable team KPIs.",
        "Audit TACCP food defense threats and VACCP food fraud vulnerability assessments across all ingredients.",
        "Review hygienic design sign-offs for all processing machinery under equipment management clause 2.5.15."
    ]
}

core_meta["natashas-law"] = {
    "title": "Free Natasha's Law Compliance Checklist | Saim Dev",
    "desc": "Ensure complete PPDS food labelling compliance under UK Natasha's Law. Free food business checklist covering 14 allergens, font size, and ingredients.",
    "howTo": [
        "Identify and catalog all Prepacked for Direct Sale (PPDS) foods prepared and packed on-site.",
        "Verify descriptive legal food name is prominently printed on the primary product packaging.",
        "List complete ingredients in descending order of weight at the mixing stage with all sub-ingredients.",
        "Emphasise all 14 statutory allergens in bold capital letters each time they appear in the list.",
        "Check typography meets minimum statutory x-height (1.2 mm, or 0.9 mm if packaging area <80 cm²)."
    ]
}

core_meta["non-gmo"] = {
    "title": "Free Non-GMO Food Audit Checklist Guide | Saim Dev",
    "desc": "Audit food supply chains for non-GMO compliance and certification. Free checklist covering segregation, PCR testing logs, and organic verification.",
    "howTo": [
        "Maintain high-risk crop register: verify non-GMO Identity Preserved certificates for soy and maize.",
        "Audit independent laboratory PCR Certificates of Analysis to confirm GMO levels remain below 0.9%.",
        "Inspect physical segregation of dedicated non-GMO bulk storage silos, bins, and transport augers.",
        "Validate documented line cleanout and flush purge protocols between conventional and non-GMO batches.",
        "Review retail packaging and marketing claims against UK Trading Standards substantiation rules."
    ]
}

core_meta["amazon-seller-and-product-requirements"] = {
    "title": "Free Amazon Food Seller Checklist Guide | Saim Dev",
    "desc": "Master Amazon UK grocery ungating and food safety compliance. Free seller checklist covering expiry date rules, packaging standards, and cold chain.",
    "howTo": [
        "Secure Grocery category ungating: provide commercial distributor invoices and UK food business registration.",
        "Verify inventory shelf-life: ensure perishable items have at least 50+ days remaining upon FBA delivery.",
        "Print high-contrast expiration dates in DD-MM-YYYY format in 36-point font on cartons and retail units.",
        "Apply polybags with printed suffocation warnings to powdered or liquid products with openings over 5 inches.",
        "Verify full English ingredient list and 14 bold allergens conform to UK Food Information Regulations 2014."
    ]
}

core_meta["restaurant-fire-inspection-checklist"] = {
    "title": "Free Restaurant Fire Inspection Checklist | Saim Dev",
    "desc": "Ensure commercial kitchen fire safety compliance under the 2005 Order. Free inspection checklist covering hood suppression, extinguishers, and exits.",
    "howTo": [
        "Verify commercial kitchen hood automatic wet chemical suppression (Ansul) inspected within 6 months.",
        "Confirm extraction ducts, canopies, and grease baffle filters are degreased to BESA TR19 standards.",
        "Inspect Class F extinguisher stationed near deep fryers and CO2 extinguisher near electrical cookline.",
        "Check BS EN 1869 compliant fire blanket mounted on kitchen wall in an unobstructed position.",
        "Test gas interlock ventilation fail-safe and verify emergency exits are illuminated and unobstructed."
    ]
}

with open(meta_path, 'w', encoding='utf-8') as f:
    json.dump(core_meta, f, indent=2, ensure_ascii=False)
print("Updated core_metadata.json for Batch 24 tools.")

# 3. Update tool_deep_content.ts
deep_path = 'src/data/tool_deep_content.ts'
with open(deep_path, 'r', encoding='utf-8') as f:
    deep_code = f.read()

fallback_pos = deep_code.find('export const FALLBACK_DEEP_CONTENT')
if fallback_pos == -1:
    raise Exception("Could not find FALLBACK_DEEP_CONTENT in tool_deep_content.ts")

end_tool_deep = deep_code.rfind('};', 0, fallback_pos)
if end_tool_deep == -1:
    raise Exception("Could not find }; before FALLBACK_DEEP_CONTENT")

pre_text = deep_code[:end_tool_deep].rstrip()
if pre_text.endswith('}'):
    pre_text = pre_text + ','

batch24_deep_items = '''
  "fssc-certification-checklist": {
    directAnswer:
      "An FSSC certification checklist audits food processing, packaging, and manufacturing facilities against the FSSC 22000 Version 6 scheme benchmarked by GFSI. It integrates ISO 22000:2018 food safety management requirements, sector-specific prerequisite programmes (ISO/TS 22002-1), and FSSC Additional Requirements including Food Safety Culture, Food Fraud Mitigation, Food Defense, and Equipment Management.",
    howTo: [
      "Review ISO 22000 foundations: inspect documented Food Safety Policy, appoint Food Safety Team Leader, and validate HACCP critical limits (e.g. 75°C core for 30s).",
      "Audit sector PRPs (ISO/TS 22002-1): verify facility layout, physical segregation of raw and ready-to-eat zones, pest control, and drainage gradients.",
      "Inspect FSSC Additional Requirement 2.5.1: audit Food Safety Culture plan, measurable executive KPIs, staff training records, and confidential reporting channels.",
      "Review TACCP (Food Defense) and VACCP (Food Fraud): evaluate site security access controls, bulk silo seals, and raw material adulteration vulnerability assessments.",
      "Verify Equipment Management (Clause 2.5.15): confirm hygienic design certificates, cleanability sign-offs, and sanitary weld inspection records for all processing machinery."
    ],
    faqs: [
      {
        q: "What are the major new updates in FSSC 22000 Version 6?",
        a: "Version 6 introduced strengthened requirements for Food Safety and Quality Culture, Food Loss and Waste reduction targets, Equipment Management (hygienic design), and enhanced Allergen Management including mandatory supplier allergen declarations."
      },
      {
        q: "How does FSSC 22000 differ from standalone ISO 22000?",
        a: "Standalone ISO 22000 is not recognized by GFSI. FSSC 22000 combines ISO 22000 with sector-specific technical PRPs (ISO/TS 22002-x) and 18 FSSC Additional Requirements, providing full GFSI benchmarking recognized by global food retailers."
      },
      {
        q: "What is the mandatory mock recall requirement under FSSC 22000?",
        a: "Sites must conduct an annual mock recall testing both upstream supplier traceability and downstream customer distribution, achieving 100% mass-balance reconciliation within a strict 4-hour window."
      },
      {
        q: "How are non-conformances graded during an FSSC 22000 audit?",
        a: "Findings are categorized into Minor Non-Conformance (resolved within 3 months), Major Non-Conformance (requires corrective action plan within 14 days and closure within 28 days), and Critical Non-Conformance (immediate certification suspension)."
      },
      {
        q: "Are unannounced audits compulsory under FSSC 22000 Version 6?",
        a: "Yes. In every 3-year certification cycle, at least one of the two annual surveillance audits must be conducted unannounced by the accredited certification body."
      }
    ],
    relatedTools: [
      "gfsi-audit-checklist",
      "get-iso-22000-certified",
      "iso-22000-internal-audit-checklist"
    ],
    relatedBlog: {
      title: "How to Write a HACCP Plan for UK Food Businesses: Step-by-Step",
      slug: "how-to-write-haccp-plan-uk-food-business-step-by-step"
    }
  },
  "natashas-law": {
    directAnswer:
      "A Natasha's Law compliance checklist ensures UK food businesses adhere to the Food Information (Amendment) (England) Regulations 2020. Enacted on 1 October 2021, Natasha's Law requires all Prepacked for Direct Sale (PPDS) food to feature a complete, clear ingredient list with all 14 statutory allergens highlighted in bold, capitalized, or contrasting typography.",
    howTo: [
      "Identify PPDS foods: audit all foods packaged on-site before a customer selects or orders them (e.g. sandwiches, wraps, salads, bottled juices, and packaged bakery goods).",
      "Verify exact food name: ensure the precise descriptive name of the food appears prominently on the front of packaging.",
      "Audit full ingredients: verify ingredients are listed in descending order by weight at mixing stage, including sub-ingredients of compound foods.",
      "Emphasise 14 statutory allergens: ensure Celery, Cereals containing gluten, Crustaceans, Eggs, Fish, Lupin, Milk, Molluscs, Mustard, Nuts, Peanuts, Sesame, Soya, and Sulphur dioxide are in bold.",
      "Check font legibility: verify typography meets statutory Food Information Regulations 2014 minimum x-height of 1.2 mm (or 0.9 mm if package area is under 80 cm²)."
    ],
    faqs: [
      {
        q: "What food qualifies as Prepacked for Direct Sale (PPDS) under Natasha's Law?",
        a: "PPDS food is food that is packed on the same premises from which it is sold (or from a mobile unit operated by the same business) before the customer chooses or orders it. This includes pre-wrapped sandwiches, packaged salads, and boxed cakes placed on display shelves."
      },
      {
        q: "What food is exempt from Natasha's Law labelling?",
        a: "Food that is not prepacked (e.g. meals served on plates in restaurants, unwrapped food in glass displays) and food packed after the customer orders it (e.g. a sandwich made to order, takeaway food ordered over the phone or via deliver apps) is exempt from PPDS label requirements, but allergen info must still be provided orally or in writing."
      },
      {
        q: "What are the legal penalties for non-compliance with Natasha's Law in the UK?",
        a: "Failing to comply with Natasha's Law is a criminal offence under the Food Safety Act 1990. Local council Environmental Health Officers (EHO) can issue Improvement Notices, hefty fines, and pursue criminal prosecution resulting in unlimited commercial fines."
      },
      {
        q: "Can handwritten labels be used to comply with Natasha's Law?",
        a: "Yes, handwritten labels are legally permissible provided they are easily visible, clearly legible, and strictly adhere to the 1.2 mm minimum x-height and bold allergen emphasis requirements. However, digital label printers are strongly recommended to avoid handwriting errors."
      },
      {
        q: "How should compound ingredients be listed on a PPDS label?",
        a: "Compound ingredients (e.g. mayonnaise) must be declared with their full constituent ingredients in parentheses, with any statutory allergens emphasised (e.g. 'Mayonnaise [Rapeseed Oil, Water, Pasteurised **Egg** Yolk, Spirit Vinegar, Salt, **Mustard** Flour]')."
      }
    ],
    relatedTools: [
      "food-allergen-chart",
      "allergen-cross-contamination-sop",
      "allergen-matrix-generator"
    ],
    relatedBlog: {
      title: "Natasha's Law PPDS Food Labelling Guide",
      slug: "natashas-law-ppds-food-labelling-guide"
    }
  },
  "non-gmo": {
    directAnswer:
      "A Non-GMO food audit checklist establishes identity preservation, traceability, and testing protocols across agricultural and food processing supply chains. It verifies that ingredients adhere to strict non-GMO standards—such as the Non-GMO Project Standard and UK/EU Retained Regulations (EC) No 1829/2003 and 1830/2003—maintaining genetically engineered components below statutory thresholds (0.9%).",
    howTo: [
      "Review high-risk crop register: verify non-GMO Identity Preserved (IP) certificates for soy, maize, canola, sugar beet, and cotton derivatives.",
      "Audit laboratory testing: inspect PCR (Polymerase Chain Reaction) testing Certificates of Analysis (COA) for every raw material production lot.",
      "Inspect physical segregation: confirm dedicated silos, hoppers, conveyors, and storage zones are labelled 'Non-GMO / GMO-Free Only'.",
      "Validate cleanout procedures: verify documented equipment flush-outs, wet sanitisation, and dry vacuum sweeps between conventional and non-GMO production runs.",
      "Review retail packaging and claims: audit finished labels against UK Trading Standards rules to ensure non-GMO claims are accurate, truthful, and substantiated."
    ],
    faqs: [
      {
        q: "What is the legal threshold for GMO presence in the UK and European Union?",
        a: "Under Retained EU Regulations (EC) No 1829/2003 and 1830/2003, food and feed containing adventitious or technically unavoidable GMO presence below 0.9% do not require GMO labelling, provided the operator can prove appropriate preventative controls."
      },
      {
        q: "Which agricultural crops are classified as high-risk for GMO contamination?",
        a: "Major high-risk crops include soybeans, field corn (maize), canola (rapeseed), sugar beets, cotton, alfalfa, papaya, and summer squash (zucchini), along with animal-derived products fed on GM rations."
      },
      {
        q: "What laboratory testing method is the gold standard for non-GMO verification?",
        a: "Quantitative Real-Time Polymerase Chain Reaction (qPCR) testing conducted by an ISO 17025 accredited laboratory is the recognized scientific standard for detecting and quantifying GMO DNA sequences."
      },
      {
        q: "How does identity preservation (IP) work in non-GMO manufacturing?",
        a: "Identity preservation tracks non-GMO commodities through every step of the supply chain—from certified non-GM seed selection and dedicated harvesting to segregated transport, processing, and packaging—backed by documented chain-of-custody records."
      },
      {
        q: "Can organic certified foods automatically claim non-GMO status?",
        a: "Yes. Under UK and EU organic standards, the use of genetically modified organisms (GMOs) and ingredients produced from GMOs is strictly prohibited across all organic production."
      }
    ],
    relatedTools: [
      "kosher-certification",
      "gmp-audit-checklist",
      "haccp-plan-template"
    ],
    relatedBlog: {
      title: "How to Create a Compliant 14 Allergen Matrix for UK Restaurants",
      slug: "how-to-create-compliant-14-allergen-matrix-uk-restaurants"
    }
  },
  "amazon-seller-and-product-requirements": {
    directAnswer:
      "An Amazon food seller requirements checklist guides grocery brand owners and third-party merchants through Amazon UK grocery gating, food safety compliance, and Fulfilment by Amazon (FBA) standards. It covers commercial distributor invoices, local authority food business registrations, expiration date formatting, packaging polybagging, and temperature-sensitive seasonal storage rules.",
    howTo: [
      "Complete Amazon Grocery ungating: submit valid commercial distributor invoices, active UK local council food business registration, and food hygiene rating certification.",
      "Audit inventory shelf-life: verify perishable food delivered to Amazon FBA centres has at least 50+ days shelf-life remaining (90+ days recommended).",
      "Apply expiration date labelling: print dates in DD-MM-YYYY format in minimum 36-point font on both master cartons and individual retail packaging.",
      "Comply with polybagging rules: double-seal liquid containers and package powdered goods in polybags bearing printed suffocation warnings for openings 5 inches or wider.",
      "Ensure UK packaging compliance: verify ingredients, 14 bold allergens, net weights, and UK manufacturer or importer business details comply with FIR 2014."
    ],
    faqs: [
      {
        q: "What documentation is required to ungate the Grocery category on Amazon UK?",
        a: "Amazon requires at least one dated commercial invoice from a recognized manufacturer or distributor within the past 180 days showing purchase of at least 10 units, matching seller account details, and proof of local council food business registration."
      },
      {
        q: "What is Amazon FBA's policy regarding perishable food expiration dates?",
        a: "Amazon requires that all food products arriving at FBA fulfilment centres have at least 50 days of remaining shelf-life. Products with fewer than 50 days are flagged as expired and discarded at the seller's expense."
      },
      {
        q: "What are the rules for selling meltable food items via Amazon FBA?",
        a: "Meltable products—such as chocolate, gummies, and wax-based confectionery—are only accepted at Amazon FBA fulfilment centres between October 16 and April 30. During warmer summer months, meltable inventory is automatically disposed of unless merchant-fulfilled with cold-chain logistics."
      },
      {
        q: "What packaging requirements apply to glass containers sold on Amazon?",
        a: "Glass containers containing food must be packaged to withstand a 3-foot drop test onto concrete without breaking. Sellers must use bubble wrap, heavy cardboard dividers, or individual form-fitting boxes."
      },
      {
        q: "Does Amazon accept food products packaged without English labels?",
        a: "No. All food items sold on Amazon UK must feature complete English labelling conforming to UK Food Information Regulations 2014, including legal product name, ingredients, 14 allergens highlighted in bold, and UK business address."
      }
    ],
    relatedTools: [
      "printable-retail-store-daily-checklist",
      "natashas-law",
      "food-allergen-chart"
    ],
    relatedBlog: {
      title: "Natasha's Law PPDS Food Labelling Guide",
      slug: "natashas-law-ppds-food-labelling-guide"
    }
  },
  "restaurant-fire-inspection-checklist": {
    directAnswer:
      "A restaurant fire inspection checklist audits commercial kitchens and dining premises for compliance with the Regulatory Reform (Fire Safety) Order 2005 and local fire authority standards. It covers commercial kitchen hood automatic suppression systems (Ansul), BESA TR19 extraction duct degreasing, Class F fire extinguishers, emergency exit lighting, fire blankets, and gas interlock fail-safe systems.",
    howTo: [
      "Inspect automatic hood suppression: confirm the Ansul / R-102 wet chemical fire suppression system has been serviced and tagged by a qualified engineer within the last 6 months.",
      "Verify extraction duct degreasing: audit TR19 certification records confirming hoods, grease baffle filters, and ducts have been professionally cleaned.",
      "Check fire extinguisher positioning: verify a Class F wet chemical extinguisher is located within 5 metres of deep fat fryers and a CO2 extinguisher is mounted near electrical panels.",
      "Inspect fire blankets and emergency exits: confirm BS EN 1869 compliant fire blankets are mounted away from cooklines and all fire exit doors are unlocked and unobstructed.",
      "Test emergency systems: verify gas interlock system cuts fuel supply when extraction fans stop, and conduct weekly fire alarm and emergency lighting battery tests."
    ],
    faqs: [
      {
        q: "What fire safety legislation governs commercial restaurants in England and Wales?",
        a: "Commercial kitchens are legally governed by the Regulatory Reform (Fire Safety) Order 2005. The designated 'Responsible Person' must conduct a documented Fire Risk Assessment, maintain firefighting equipment, and train staff."
      },
      {
        q: "Why is a Class F fire extinguisher mandatory in commercial kitchens?",
        a: "Class F extinguishers are specifically designed for high-temperature cooking oil and fat fires (deep fat fryers). Standard water or foam extinguishers cause explosive boiling flare-ups, while Class F wet chemical agents saponify the oil into a non-combustible soap foam."
      },
      {
        q: "How frequently must restaurant extraction ducts be cleaned to comply with insurance?",
        a: "Under BESA TR19 standards, extraction systems in heavy-use kitchens (12-16 hours/day) must be professionally degreased every 3 months; moderate-use kitchens (6-12 hours/day) every 6 months; light-use kitchens (2-6 hours/day) annually."
      },
      {
        q: "What is a gas interlock system and why is it legally required in commercial kitchens?",
        a: "Under BS 6173 and Gas Safe regulations, a gas interlock system automatically shuts off the gas supply to cooking equipment if the mechanical ventilation hood fails, preventing dangerous carbon monoxide accumulation and fire hazards."
      },
      {
        q: "How often should commercial kitchen fire suppression systems be serviced?",
        a: "Automatic wet chemical suppression systems (e.g. Ansul R-102) must undergo comprehensive professional servicing and recertification every 6 months by an authorized BAFE-registered technician."
      }
    ],
    relatedTools: [
      "commercial-kitchen-cleaning-checklist",
      "opening-and-closing-checklist-template",
      "kitchen-sop"
    ],
    relatedBlog: {
      title: "SFBB Daily Kitchen Opening and Closing Checklist Guide",
      slug: "sfbb-daily-kitchen-opening-closing-checklist-guide"
    }
  }
'''

new_deep_code = pre_text + batch24_deep_items + "\n};\n\n" + deep_code[fallback_pos:]

with open(deep_path, 'w', encoding='utf-8') as f:
    f.write(new_deep_code)
print("Updated tool_deep_content.ts with Batch 24 deep content.")

# 4. Update tracker
tracker_path = 'audit/tools-seo-tracker.json'
with open(tracker_path, 'r', encoding='utf-8') as f:
    tracker = json.load(f)

batch24_data = {
    "fssc-certification-checklist": {
        "priority_rank": 116,
        "target_keyword": "fssc certification checklist",
        "top_5_competitors": [
            "https://www.fssc.com/schemes/fssc-22000/ready-for-audit/",
            "https://safetyculture.com/checklists/fssc-22000/",
            "https://www.fooddocs.com/post/fssc-22000-checklist",
            "https://www.lumiform.app/template/fssc-22000-audit",
            "https://www.dnv.co.uk/services/fssc-22000-food-safety-system-certification"
        ],
        "differentiators": [
            "Full alignment with FSSC 22000 Version 6 (Food Safety Culture, Equipment Management, Loss & Waste)",
            "Combines ISO 22000:2018 + ISO/TS 22002-1 PRPs + FSSC Additional Requirements",
            "Interactive non-conformance severity scoring with objective evidence logging",
            "Zero download fee or sales contact gate",
            "Instant A4 PDF print ready for certification body assessment"
        ]
    },
    "natashas-law": {
        "priority_rank": 117,
        "target_keyword": "natashas law checklist",
        "top_5_competitors": [
            "https://www.food.gov.uk/business-guidance/introduction-to-natashas-law",
            "https://www.highspeedtraining.co.uk/hub/natashas-law-checklist/",
            "https://www.virtual-college.co.uk/resources/natashas-law-checklist",
            "https://www.brother.co.uk/labelling-and-receipts/natashas-law",
            "https://www.fooddocs.com/post/natashas-law-checklist"
        ],
        "differentiators": [
            "Interactive PPDS (Prepacked for Direct Sale) assessment decision tree",
            "Descriptive food name + 14 statutory allergens highlighted in bold verification",
            "Minimum typography font size compliance check (1.2 mm x-height under FIR 2014)",
            "Direct cross-links to interactive PPDS Label Generator and Allergen Matrix tools",
            "100% free with clean PDF print for EHO hygiene inspections"
        ]
    },
    "non-gmo": {
        "priority_rank": 118,
        "target_keyword": "non gmo certification checklist",
        "top_5_competitors": [
            "https://www.nongmoproject.org/product-verification/",
            "https://safetyculture.com/checklists/non-gmo-audit/",
            "https://www.fooddocs.com/post/non-gmo-checklist",
            "https://www.nsf.org/consumer-resources/non-gmo-certification",
            "https://www.ecocert.com/en/certification-detail/non-gmo"
        ],
        "differentiators": [
            "Non-GMO Project standard & Retained UK/EU Regulation 0.9% labelling threshold checks",
            "High-risk ingredient supply chain verification (soy, corn, canola, sugar beet)",
            "PCR testing certificate of analysis (COA) audit logs",
            "Zero paywall, interactive segregation and flush cleanout validation",
            "Printable audit documentation for non-GMO claims substantiation"
        ]
    },
    "amazon-seller-and-product-requirements": {
        "priority_rank": 119,
        "target_keyword": "amazon food seller requirements checklist",
        "top_5_competitors": [
            "https://sellercentral.amazon.co.uk/help/hub/reference/external/201476140",
            "https://www.junglescout.com/blog/how-to-sell-groceries-on-amazon/",
            "https://safetyculture.com/checklists/amazon-seller-compliance/",
            "https://www.ecommengine.com/blog/selling-groceries-on-amazon",
            "https://www.fooddocs.com/post/amazon-food-seller-checklist"
        ],
        "differentiators": [
            "Amazon UK grocery gating requirements checklist (invoices, local council registration, rating)",
            "Minimum shelf-life remaining compliance checks (50+ days FBA rule; 90+ days recommended)",
            "Polybagging suffocation warning and liquid double-sealing audit criteria",
            "UK Food Information Regulations 2014 English packaging and 14 bold allergens audit",
            "Zero signup gate, client-side interactive tool with clean A4 export"
        ]
    },
    "restaurant-fire-inspection-checklist": {
        "priority_rank": 120,
        "target_keyword": "restaurant fire inspection checklist",
        "top_5_competitors": [
            "https://safetyculture.com/checklists/restaurant-fire-inspection/",
            "https://www.fooddocs.com/post/restaurant-fire-inspection-checklist",
            "https://www.london-fire.gov.uk/safety/business/business-fire-safety-guidance/restaurants-and-takeaways/",
            "https://www.lumiform.app/template/restaurant-fire-inspection",
            "https://pos.toasttab.com/blog/on-the-line/restaurant-fire-safety-checklist"
        ],
        "differentiators": [
            "Regulatory Reform (Fire Safety) Order 2005 commercial kitchen audit criteria",
            "Class F wet chemical extinguisher verification for deep fat fryers",
            "Ansul / R-102 automatic suppression 6-month semi-annual service verification",
            "BESA TR19 grease extraction duct degreasing certification and gas interlock checks",
            "100% free interactive tool with printable fire safety audit log"
        ]
    }
}

for row in tracker:
    slug = row.get("slug")
    if slug in batch24_data:
        info = batch24_data[slug]
        row["status"] = "COMPLETED"
        row["priority_rank"] = info["priority_rank"]
        row["target_keyword"] = info["target_keyword"]
        row["top_5_competitors"] = info["top_5_competitors"]
        row["differentiators"] = info["differentiators"]
        row["phase1_completed"] = True
        print(f"Updated tracker for {slug} (Rank {info['priority_rank']})")

with open(tracker_path, 'w', encoding='utf-8') as f:
    json.dump(tracker, f, indent=2, ensure_ascii=False)

csv_path = 'audit/tools-seo-tracker.csv'
all_keys = set()
for r in tracker:
    all_keys.update(r.keys())
fieldnames = sorted(list(all_keys))

with open(csv_path, 'w', encoding='utf-8', newline='') as f:
    writer = csv.DictWriter(f, fieldnames=fieldnames)
    writer.writeheader()
    for r in tracker:
        row_copy = {}
        for k in fieldnames:
            v = r.get(k, "")
            if isinstance(v, (list, dict)):
                row_copy[k] = json.dumps(v)
            else:
                row_copy[k] = v
        writer.writerow(row_copy)

completed_count = sum(1 for r in tracker if r.get('status') == 'COMPLETED')
print(f"Batch 24 application complete! Total completed tools: {completed_count}/160")
