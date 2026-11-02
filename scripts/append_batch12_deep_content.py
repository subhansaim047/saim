# scripts/append_batch12_deep_content.py
with open('src/data/tool_deep_content.ts', 'r', encoding='utf-8') as f:
    text = f.read()

batch12_content = """  "ssop": {
    directAnswer:
      "A Sanitation Standard Operating Procedure (SSOP) is a mandatory written protocol defining specific operational and pre-operational cleaning routines in commercial kitchens and food processing facilities. It details chemical dilution rates, BS EN 1276 contact times, mechanical disassembly, and ATP swab verification thresholds (<30 RLU) required under Regulation (EC) No 852/2004.",
    howTo: [
      "Isolate machinery power, lock out moving components, and manually scrape dry food debris from contact zones.",
      "Apply warm water (45°C–55°C) and food-grade alkaline detergent to emulsify surface fats, proteins, and oils.",
      "Rinse surfaces thoroughly with clean running potable water to remove all chemical detergent residue.",
      "Apply BS EN 1276 certified bactericidal disinfectant, strictly observing the required contact time (30s–5min).",
      "Perform rapid ATP bioluminescence swab testing on critical points to verify hygiene line clearance (<30 RLU)."
    ],
    faqs: [
      {
        q: "What is the legal difference between an SOP and an SSOP?",
        a: "A Standard Operating Procedure (SOP) governs general production, receiving, or administrative tasks, whereas a Sanitation Standard Operating Procedure (SSOP) specifically mandates the hygienic and chemical sanitation protocols required to prevent microbiological and allergen cross-contamination on food contact equipment."
      },
      {
        q: "What British Standard must commercial kitchen chemical sanitisers meet?",
        a: "Under UK food safety regulations and FSA guidance, chemical sanitisers and surface disinfectants must comply with British Standard BS EN 1276 (chemical bactericidal activity) or BS EN 13697 (surface disinfectant test for food areas), achieving a 5-log (99.999%) reduction in viable pathogens."
      },
      {
        q: "What is pre-operational vs operational sanitation?",
        a: "Pre-operational sanitation comprises the deep cleaning, chemical disinfection, and ATP swab clearance conducted before production commences. Operational sanitation refers to ongoing mid-shift routines such as sanitising cutting boards between raw and cooked batches and clearing waste."
      },
      {
        q: "What ATP bioluminescence swab reading indicates an SSOP pass?",
        a: "In commercial catering and food manufacturing, an ATP swab test reading under 30 Relative Light Units (RLU) is universally accepted as a pass for stainless steel food contact surfaces. Readings between 30 and 100 RLU require recleaning, while readings over 100 RLU represent immediate failure."
      },
      {
        q: "Do Environmental Health Officers inspect SSOP documentation?",
        a: "Yes. During an unannounced EHO inspection, officers examine written SSOP cleaning schedules, chemical data sheets, contact time specifications, and completed daily verification sign-off logs to evaluate your 'Confidence in Management'."
      }
    ],
    relatedTools: ["restaurant-cleaning-checklist", "cleaning-schedule", "haccp-plan-builder"],
    relatedBlog: {
      title: "SFBB Daily Kitchen Opening and Closing Checklist Guide",
      slug: "sfbb-daily-kitchen-opening-closing-checklist-guide"
    }
  },
  "receiving-log": {
    directAnswer:
      "A food receiving temperature log is a statutory due diligence intake record used by commercial kitchens to verify that incoming supplier deliveries meet UK food hygiene standards. It records delivery vehicle hygiene, core probe temperatures of chilled foods (1°C–5°C, legal max 8°C), frozen stock (≤-18°C), packaging integrity, and batch traceability codes.",
    howTo: [
      "Inspect the delivery vehicle cargo hold for cleanliness, absence of strong odours, pests, and active refrigeration.",
      "Disinfect a calibrated digital needle probe with a BS EN 1276 wipe and measure core food temperatures.",
      "Verify fresh meat, poultry, fish, and dairy arrive between 1°C and 5°C; reject any delivery exceeding 8°C.",
      "Inspect packaging for damage, torn hermetic seals, blown vacuum pouches, or compromised use-by dates.",
      "Log supplier name, batch lot numbers, invoice reference, and probe temperatures in your goods intake record."
    ],
    faqs: [
      {
        q: "What is the legal maximum delivery temperature for chilled food in the UK?",
        a: "Under the Food Safety and Hygiene (England) Regulations 2013, the statutory legal maximum temperature for chilled high-risk food is 8°C. Best practice in professional kitchens requires receiving chilled food between 1°C and 5°C to allow for transit warm-up."
      },
      {
        q: "When should a food delivery be rejected?",
        a: "Deliveries must be rejected if chilled food exceeds 8°C, frozen goods show signs of thawing (softening or large ice crystals above -15°C), packaging is punctured or bloated, use-by dates have passed, or the transport vehicle is dirty or unchilled."
      },
      {
        q: "What delivery records must be kept for EHO food traceability?",
        a: "Under Regulation (EC) No 178/2002 (General Food Law), businesses must operate 'one-step-back' traceability. You must record supplier identity, product name, delivery date, lot/batch number, and retain commercial delivery notes or invoices for at least 12 months."
      },
      {
        q: "How quickly must received goods be moved to cold storage?",
        a: "Chilled and frozen foods must be transferred from the delivery dock into walk-in chillers or freezers within 15 minutes of arrival. Leaving temperature-sensitive stock on ambient loading docks violates cold chain HACCP controls."
      },
      {
        q: "How should infrared vs needle probe thermometers be used for receiving?",
        a: "Infrared non-contact thermometers are ideal for rapid surface screening between outer cartons. However, if an infrared reading reads near the 5°C–8°C borderline, a sanitised needle probe must be inserted between packs or into a sacrificial sample for accurate core verification."
      }
    ],
    relatedTools: ["fridge-temperature-record-sheet-pdf", "food-traceability", "walk-in-cooler-food-storage-chart"],
    relatedBlog: {
      title: "Commercial Kitchen Food Cooling & Temperature Limits Guide",
      slug: "commercial-kitchen-food-cooling-temperature-guide"
    }
  },
  "calculating-food-cost": {
    directAnswer:
      "Calculating food cost percentage is the financial discipline of dividing total raw ingredient costs by net menu sales revenue, expressed as a percentage. In UK commercial hospitality, target food cost percentages generally range between 28% and 32%, ensuring a 68% to 72% gross profit (GP) margin necessary to cover kitchen labour, utilities, VAT, and overheads.",
    howTo: [
      "Calculate the precise raw ingredient cost for each recipe component, factoring in preparation trim yield.",
      "Establish your target gross profit margin percentage (typically 70% in UK restaurants and takeaways).",
      "Apply the UK standard VAT rate (20% for eat-in meals and hot takeaways; 0% for eligible cold grocery items).",
      "Factor in online delivery marketplace commission buffers (typically 15% to 30%) if selling via third-party apps.",
      "Compute the optimal menu selling price: (Portion Ingredient Cost / (1 - Target Gross Profit %)) × (1 + VAT Rate)."
    ],
    faqs: [
      {
        q: "What is the formula to calculate food cost percentage?",
        a: "Food Cost Percentage = (Total Cost of Ingredients / Net Menu Selling Price) × 100. For example, if a gourmet burger costs £3.00 in raw ingredients and sells for £10.00 net of VAT, your food cost percentage is 30% (£3.00 / £10.00 × 100)."
      },
      {
        q: "What is an ideal food cost percentage for a UK restaurant or takeaway?",
        a: "Industry benchmarks in the UK target food costs between 28% and 32%, delivering a 68% to 72% gross profit margin. High-volume pizza or pasta concepts can achieve 18% to 22%, whereas premium steak and seafood offerings often operate between 34% and 38%."
      },
      {
        q: "What is the difference between Ideal Food Cost and Actual Food Cost?",
        a: "Ideal (Theoretical) Food Cost reflects what food costs should be based strictly on recipe card formulas and sales mix. Actual Food Cost is calculated by: (Beginning Inventory + Purchases - Ending Inventory) / Revenue. The variance between the two exposes kitchen waste, shrinkage, over-portioning, and spoilage."
      },
      {
        q: "How does UK VAT affect menu price calculations?",
        a: "VAT at 20% must be deducted from the customer's gross payment before calculating food cost percentage. For example, a dish on the menu for £12.00 gross includes £2.00 in VAT, leaving £10.00 in net revenue. Measuring food cost against the gross £12.00 distorts your true margin by 20%."
      },
      {
        q: "How should delivery platform commission be incorporated into dish pricing?",
        a: "Delivery aggregators (Deliveroo, Just Eat, Uber Eats) charge 20% to 30% commission on orders. Operators should mark up delivery menu prices by (1 / (1 - Commission %)) to prevent delivery orders from eroding kitchen gross profits."
      }
    ],
    relatedTools: ["food-cost-calculator", "recipe-calculator", "product-specification-template"],
    relatedBlog: {
      title: "Mastering Food Cost Percentage: Commercial Kitchen Calculator",
      slug: "mastering-food-cost-percentage-commercial-kitchen-calculator"
    }
  },
  "food-production-gmp-audit-checklist": {
    directAnswer:
      "A food production GMP audit checklist is an operational quality assurance audit tool used by food manufacturers, dark kitchens, and catering facilities to verify adherence to Good Manufacturing Practices (GMP). It evaluates personnel hygiene, structural integrity, equipment calibration, allergen zoning, pest prevention, and batch traceability.",
    howTo: [
      "Audit personnel hygiene: verify clean protective wear, hairnets, beard coverings, handwashing, and zero jewellery.",
      "Inspect facility architecture: ensure non-porous washable walls, non-slip flooring, and clean drain channels.",
      "Verify allergen controls: audit dedicated purple smallwares, sealed raw ingredient bins, and PPDS labelling.",
      "Test critical monitoring devices: verify monthly probe calibrations and challenge metal detectors with certified wands.",
      "Audit lot traceability: cross-reference raw material delivery lot codes against finished batch production sheets."
    ],
    faqs: [
      {
        q: "What are Good Manufacturing Practices (GMP) in food production?",
        a: "GMP comprises the foundational prerequisite environmental and operational conditions required to produce safe food under Regulation (EC) No 852/2004, BRCGS, and SALSA standards. They provide the hygienic foundation upon which specific HACCP plans operate."
      },
      {
        q: "What are the 6 core pillars of a food factory GMP audit?",
        a: "The 6 core pillars are: (1) Personnel Hygiene and Protective Clothing, (2) Facility Maintenance and Drainage, (3) Equipment Cleaning and Food Contact Materials, (4) Allergen Management and Natasha's Law, (5) Pest Proofing and Exclusions, and (6) Traceability and Record Keeping."
      },
      {
        q: "How often should internal GMP audits be conducted?",
        a: "Commercial food processing operations should conduct daily pre-operational GMP walkthroughs, weekly detailed station audits, and comprehensive monthly management reviews to prepare for external SALSA or BRCGS certifications."
      },
      {
        q: "What is an allergen zoning barrier in GMP compliance?",
        a: "Allergen zoning physically or chronologically separates the storage, handling, and processing of the 14 statutory allergens from allergen-free production lines. It includes dedicated color-coded tools (purple), dedicated weighing scales, and validated clean-in-place (CIP) washdowns."
      },
      {
        q: "How does a GMP audit checklist support BRCGS or SALSA audits?",
        a: "Documented internal GMP audits with recorded non-conformances and corrective action notes provide auditor-verifiable evidence of active quality control, fulfilling BRCGS Clause 3.4 on Internal Audits."
      }
    ],
    relatedTools: ["haccp-plan-builder", "ssop", "product-specification-template"],
    relatedBlog: {
      title: "How to Write a HACCP Plan for a UK Food Business Step-by-Step",
      slug: "how-to-write-haccp-plan-uk-food-business-step-by-step"
    }
  },
  "hazard-analysis-template": {
    directAnswer:
      "A HACCP hazard analysis template is a structured food safety risk assessment tool implementing HACCP Principle 1. It systematically identifies biological, chemical, physical, and allergen hazards across every operational stage, evaluates risk using a Severity × Likelihood matrix, and establishes Critical Control Points (CCPs) under UK food law.",
    howTo: [
      "Map every process flow step from goods receiving, storage, and preparation to cooking, cooling, and serving.",
      "Identify all potential biological (pathogens), chemical (cleaning toxins), physical (glass/metal), and allergen hazards.",
      "Score each hazard's risk level using a 5×5 Severity (1–5) × Likelihood (1–5) risk evaluation matrix.",
      "Apply the Codex Alimentarius decision tree to determine if the control measure represents a mandatory CCP or a PRP.",
      "Document measurable critical limits (e.g. core cook ≥75°C), monitoring procedures, and corrective actions for every CCP."
    ],
    faqs: [
      {
        q: "What are the 4 categories of food safety hazards in a HACCP analysis?",
        a: "The four categories are: (1) Biological (pathogenic bacteria like Salmonella, E. coli, Campylobacter, viruses, and parasites), (2) Chemical (cleaning chemical residue, pest toxins, mycotoxins, heavy metals), (3) Physical (glass, brittle plastic, metal shavings, bone fragments, plasters), and (4) Allergenic (the 14 statutory allergens under UK Natasha's Law)."
      },
      {
        q: "What is the difference between a CCP and an Operational Prerequisite Programme (oPRP)?",
        a: "A Critical Control Point (CCP) is a specific step where control can be applied and is essential to prevent, eliminate, or reduce a food safety hazard to an acceptable level (e.g. cooking chicken to 75°C). An oPRP is an essential control to manage hazard introduction that lacks measurable numerical critical limits (e.g. segregation of cutting boards)."
      },
      {
        q: "How do you calculate hazard risk in HACCP Principle 1?",
        a: "Hazard Risk = Severity × Likelihood. Severity rates the health impact (from 1 = mild discomfort to 5 = fatal anaphylaxis/illness), while Likelihood rates the probability of occurrence (from 1 = highly improbable to 5 = frequent). Hazards scoring above the threshold (typically ≥12) require dedicated CCP controls."
      },
      {
        q: "Is a documented hazard analysis legally required for all UK food businesses?",
        a: "Yes. Article 5 of Regulation (EC) No 852/2004 requires all food business operators to put in place, implement, and maintain a permanent procedure based on HACCP principles, beginning with a documented hazard analysis."
      },
      {
        q: "How often should a restaurant HACCP hazard analysis be reviewed?",
        a: "HACCP hazard analyses must be reviewed at least annually, or immediately whenever there is a significant change: introduction of new menu items, alteration of suppliers, installation of new cooking/chilling equipment, or following a food safety incident/recall."
      }
    ],
    relatedTools: ["haccp-plan-builder", "food-traceability", "ssop"],
    relatedBlog: {
      title: "How to Write a HACCP Plan for a UK Food Business Step-by-Step",
      slug: "how-to-write-haccp-plan-uk-food-business-step-by-step"
    }
  }
"""

# We must ensure there is a comma before batch12_content!
boundary = "  }\n};\n\nexport const FALLBACK_DEEP_CONTENT"
replacement = "  },\n\n" + batch12_content + "};\n\nexport const FALLBACK_DEEP_CONTENT"

if boundary in text:
    text = text.replace(boundary, replacement, 1)
    with open('src/data/tool_deep_content.ts', 'w', encoding='utf-8') as f:
        f.write(text)
    print("Batch 12 deep content successfully appended with proper comma!")
else:
    print("Boundary not found, searching alternative")
