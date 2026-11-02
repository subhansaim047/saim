path = r'C:\Users\subhan\.gemini\antigravity\scratch\saim\src\data\tool_deep_content.ts'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

batch17_code = '''  "proper-food-storage-chart": {
    directAnswer:
      "A commercial food storage chart establishes strict vertical refrigeration hierarchy based on minimum cooking temperatures to prevent liquid drip contamination. Ready-to-eat (RTE) cooked foods occupy top shelves, followed sequentially downward by raw fish, raw whole beef and pork, raw ground meats, and raw poultry on the bottom shelf.",
    howTo: [
      "Store all prepped ready-to-eat salads, cooked meats, and dairy on top shelves completely sealed and labelled.",
      "Position raw whole seafood and intact beef/lamb joints on middle shelves below cooked foods.",
      "Place raw minced meats, rolled joints, and sausages below whole meat cuts on dedicated drip trays.",
      "Store raw chicken, turkey, and duck exclusively on the lowest bottom shelf, maintaining walk-in chiller airflow."
    ],
    faqs: [
      {
        q: "Why is vertical food storage order legally essential in commercial kitchens?",
        a:
          "Under Regulation (EC) No 852/2004 Annex II, food businesses must prevent cross-contamination. Storing foods with higher cooking temperatures (e.g., poultry at 75°C) below foods requiring lower temperatures or no cooking (e.g., salads) ensures that any accidental fluid drips land on foods that will receive sufficient thermal processing to destroy pathogens."
      },
      {
        q: "What is the correct commercial fridge shelf order from top to bottom?",
        a:
          "From top to bottom: Shelf 1: Ready-to-Eat (RTE) foods, cooked meats, dairy, and salads; Shelf 2: Raw fish and seafood (cook temp 63°C); Shelf 3: Raw whole beef and pork cuts (cook temp 63°C); Shelf 4: Raw ground / minced meats and burgers (cook temp 75°C); Shelf 5 (Bottom): Raw poultry, chicken, and turkey (cook temp 75°C)."
      },
      {
        q: "How should opened commercial food containers be labelled in refrigeration?",
        a:
          "All decanted or opened food containers must feature food rotation day dots or digital labels detailing: product description, opening date, allergen content, use-by date (typically day of prep plus 2 days for high-risk RTE foods), and the initials of the food handler."
      },
      {
        q: "What is the maximum legal temperature for commercial walk-in chillers in the UK?",
        a:
          "Under the Food Safety (Temperature Control) Regulations 1995, chilled foods must legally be held at or below 8°C. However, the Food Standards Agency (FSA) strongly advises running commercial chillers between 1°C and 5°C to retard the growth of psychrotrophic Listeria monocytogenes."
      }
    ],
    relatedTools: ["walk-in-cooler-food-storage-chart", "fridge-temperature-chart", "danger-zone-for-food"],
    relatedBlog: {
      title: "Commercial Kitchen Food Cooling and Temperature Limits Guide",
      slug: "commercial-kitchen-food-cooling-temperature-guide"
    }
  },
  "sanitation-standard-operating-procedures": {
    directAnswer:
      "Sanitation Standard Operating Procedures (SSOP) are detailed written protocols specifying how food equipment, prep stations, and facilities must be cleaned and disinfected. Meeting Regulation (EC) No 852/2004 and BRCGS standards, SSOPs outline pre-operational hygiene checks, chemical dilution ratios, contact times, and verification records.",
    howTo: [
      "Perform pre-operational sanitation audits of food surfaces and equipment before shifts commence.",
      "Dilute BS EN 1276 compliant commercial sanitiser chemicals strictly according to manufacturer dosage specifications.",
      "Execute the 5-stage cleaning method: pre-scrape, wash with detergent, clean rinse, disinfect with sanitiser, and air-dry.",
      "Document daily visual cleanliness inspections and chemical titration tests in your digital hygiene log."
    ],
    faqs: [
      {
        q: "What is the difference between an SOP and an SSOP?",
        a:
          "A Standard Operating Procedure (SOP) covers any general kitchen process (such as recipe preparation or receiving deliveries). A Sanitation Standard Operating Procedure (SSOP) focuses specifically on sanitation and hygiene procedures before and during food operations to prevent contamination of food contact surfaces."
      },
      {
        q: "What are the 5 mandatory stages of commercial kitchen cleaning?",
        a:
          "The standard 5-stage cleaning process is: 1. Pre-scrape (remove loose debris); 2. Main clean (wash with hot water and detergent to lift grease); 3. Intermediate rinse (rinse with clean water to remove detergent residue); 4. Disinfection (apply BS EN 1276 sanitiser and maintain contact time); 5. Final rinse / air dry."
      },
      {
        q: "Why is chemical contact time critical in commercial food sanitisation?",
        a:
          "Disinfectants do not kill pathogens instantly. Chemical sanitisers certified to BS EN 1276 or BS EN 13697 require a specified dwell time (typically between 30 seconds and 5 minutes) in wet contact with the surface to achieve the mandatory 5-log (99.999%) bacterial kill rate."
      },
      {
        q: "How should an SSOP program be validated and verified?",
        a:
          "Validation involves establishing that cleaning chemicals and contact times effectively destroy target pathogens. Verification involves ongoing monitoring: daily visual pre-op inspections, ATP bioluminescence swab testing of contact surfaces, and periodic microbiological swab testing by accredited laboratories."
      }
    ],
    relatedTools: ["ssop", "restaurant-cleaning-checklist", "proper-method-for-cleaning-dirty-utensils"],
    relatedBlog: {
      title: "SFBB Daily Kitchen Opening and Closing Checklist Guide",
      slug: "sfbb-daily-kitchen-opening-closing-checklist-guide"
    }
  },
  "what-are-the-critical-control-points-for-food-safety": {
    directAnswer:
      "A Critical Control Point (CCP) is an operational stage in food preparation where control can be applied and is essential to prevent, eliminate, or reduce a food safety hazard to an acceptable level. Established under Codex Alimentarius HACCP Principle 2, common catering CCPs include Goods Receiving (CCP 1), Cooking (CCP 2), Hot Holding (CCP 3), and Chilling (CCP 4).",
    howTo: [
      "Construct a linear process flow diagram representing every preparation step from intake to service.",
      "Identify specific biological, physical, chemical, and allergen hazards associated with each step.",
      "Apply the 4 questions of the Codex CCP decision tree to evaluate whether control at this stage is essential.",
      "Define measurable, validated critical limits (e.g., minimum 75°C core for cooking) and monitoring procedures."
    ],
    faqs: [
      {
        q: "What are the four questions in the Codex Alimentarius CCP decision tree?",
        a:
          "The 4 questions are: Q1: Do preventive control measures exist? Q2: Is the step specifically designed to eliminate or reduce the hazard to an acceptable level? Q3: Could contamination occur in excess of acceptable levels? Q4: Will a subsequent step eliminate or reduce the hazard? If yes to Q2, or yes to Q3 and no to Q4, the step is a CCP."
      },
      {
        q: "What is the difference between a CCP and a Prerequisite Programme (PRP)?",
        a:
          "Prerequisite Programmes (PRPs) are baseline environmental and operational conditions necessary for safe food production (e.g., staff personal hygiene, pest control, structural maintenance). A Critical Control Point (CCP) is a specific operational process step where food hazard elimination is actively monitored with measurable parameters (e.g., cooking core temperature)."
      },
      {
        q: "What happens when a critical limit at a CCP is breached?",
        a:
          "A breach of a critical limit indicates that the safety of the food cannot be guaranteed. Operators must execute immediate corrective action: stop the process, isolate and quarantine affected food, investigate the root cause, and either re-process (e.g., recook to 75°C) or safely condemn and discard the product."
      },
      {
        q: "Are CCP records legally required during an Environmental Health inspection?",
        a:
          "Yes. Under Regulation (EC) No 852/2004 Article 5, food businesses must document their HACCP-based system and retain monitoring records demonstrating that CCP critical limits were consistently achieved and verified across all service shifts."
      }
    ],
    relatedTools: ["haccp-flow-chart-template", "hazard-analysis-template", "food-flow-chart"],
    relatedBlog: {
      title: "How to Write a HACCP Plan for UK Food Businesses Step-by-Step",
      slug: "how-to-write-haccp-plan-uk-food-business-step-by-step"
    }
  },
  "vacuum-sealed-food-shelf-life-chart": {
    directAnswer:
      "Under UK Food Standards Agency (FSA) regulations, vacuum-packed (VP) and modified atmosphere packed (MAP) chilled foods must be assigned a maximum shelf life of 10 days at 3°C to 8°C unless specific controlling factors against non-proteolytic Clostridium botulinum are applied (e.g., heating to 90°C for 10 minutes, pH <= 5.0, or salt >= 3.5%).",
    howTo: [
      "Verify walk-in and drawer refrigerators storing vacuum-packed foods operate strictly below 3°C (or under 8°C).",
      "Apply the statutory UK FSA 10-day maximum shelf life limit to all vacuum-sealed fresh meats and cooked dishes.",
      "To extend shelf life beyond 10 days, substantiate validated barriers: thermal cook (90°C for 10m), pH <= 5.0, or salt >= 3.5%.",
      "Apply water-resistant tamper-evident labels displaying packaging date, batch lot, and use-by date."
    ],
    faqs: [
      {
        q: "Why does the UK FSA enforce a 10-day shelf life rule on vacuum-packed food?",
        a:
          "Vacuum packaging removes oxygen, creating an anaerobic environment. While this prevents aerobic spoilage moulds, it creates ideal growth conditions for non-proteolytic Clostridium botulinum, which can grow and produce lethal neurotoxins at refrigeration temperatures down to 3°C without altering food appearance or smell. The 10-day limit prevents toxin formation."
      },
      {
        q: "What controlling factors allow vacuum-packed foods to exceed 10 days shelf life?",
        a:
          "Under FSA guidance, shelf life can safely exceed 10 days if at least one controlling factor is verified: 1. Heat treatment of 90°C for 10 minutes (or equivalent 6-log lethality); 2. A pH of 5.0 or less throughout the food; 3. A minimum salt concentration of 3.5% in the aqueous phase; 4. A water activity (aw) of 0.97 or less; or 5. Storage consistently under 3°C throughout supply."
      },
      {
        q: "Can commercial kitchens vacuum-pack raw meat and cooked foods on the same machine?",
        a:
          "Dual use of vacuum packing machines for raw food and ready-to-eat (RTE) cooked foods is strictly prohibited under the FSA E. coli O157 Cross-Contamination Guidance. Premises must either maintain two completely separate dedicated machines or strictly limit machine use to sealed pouch packing."
      },
      {
        q: "How should sous-vide cooked vacuum packs be chilled and stored?",
        a:
          "Immediately following sous-vide thermal processing, pouches must be blast-chilled in an ice slurry or commercial blast chiller to below 3°C within 90 minutes. They must then be held under continuous temperature monitoring and consumed within validated shelf life parameters."
      }
    ],
    relatedTools: ["proper-food-storage-chart", "walk-in-cooler-food-storage-chart", "food-cooling-poster"],
    relatedBlog: {
      title: "Commercial Kitchen Food Cooling and Temperature Limits Guide",
      slug: "commercial-kitchen-food-cooling-temperature-guide"
    }
  },
  "fsma-food-traceability-list": {
    directAnswer:
      "A food traceability log provides comprehensive 'one-step-back, one-step-forward' tracking of all ingredients, packaging, and finished dishes. Complying with UK Regulation (EC) No 178/2002 Article 18 and FSMA Rule 204, it captures Key Data Elements (KDEs) across Critical Tracking Events (CTEs) to enable rapid recall execution within 4 hours.",
    howTo: [
      "Record supplier name, invoice reference, batch/lot number, delivery temperature, and intake date.",
      "Assign unique internal batch preparation codes to blended sauces, marinated meats, and prep items.",
      "Log finished product batch codes alongside wholesale, catering event, or delivery customer details.",
      "Conduct bi-annual mock recall simulations tracing 100% of ingredient quantities within a 4-hour window."
    ],
    faqs: [
      {
        q: "What is the legal basis for food traceability in the UK and EU?",
        a:
          "Article 18 of Regulation (EC) No 178/2002 (retained UK General Food Law) legally mandates that food businesses must identify any person from whom they have been supplied with food or ingredients, and identify other businesses to which their products have been supplied ('one step back, one step forward')."
      },
      {
        q: "What are Critical Tracking Events (CTEs) and Key Data Elements (KDEs) under FSMA Rule 204?",
        a:
          "Under FDA FSMA Rule 204, Critical Tracking Events (CTEs) are points in the supply chain where traceability data must be captured: Harvesting, Cooling, Initial Packing, Receiving, Transforming (processing/cooking), and Shipping. Key Data Elements (KDEs) are the specific data points required (lot codes, quantities, locations, dates)."
      },
      {
        q: "How quickly must a food business produce traceability records during a recall?",
        a:
          "Both UK Environmental Health Officers and international food safety standards (BRCGS/SALSA) expect commercial food businesses to complete a full 100% mass-balance traceability audit and trace affected batch lots within 4 hours of notification."
      },
      {
        q: "How long must food traceability records be retained on-site?",
        a:
          "Traceability records for perishable foods with shelf lives under 3 months should be kept for at least 6 months after dispatch. For products with longer shelf lives or frozen goods, records must be retained for the shelf life plus an additional 6 to 12 months."
      }
    ],
    relatedTools: ["food-traceability", "product-specification-sheet", "receiving-log"],
    relatedBlog: {
      title: "How to Create a Compliant 14-Allergen Matrix for UK Restaurants",
      slug: "how-to-create-compliant-14-allergen-matrix-uk-restaurants"
    }
  }
};'''

idx = content.rfind('export const FALLBACK_DEEP_CONTENT')
if idx != -1:
    before_fallback = content[:idx]
    after_fallback = content[idx:]
    brace_idx = before_fallback.rfind('};')
    if brace_idx != -1:
        before_brace = before_fallback[:brace_idx].rstrip()
        if not before_brace.endswith(','):
            before_brace += ',\n'
        else:
            before_brace += '\n'
        content = before_brace + batch17_code + '\n\n' + after_fallback
        with open(path, 'w', encoding='utf-8') as f:
            f.write(content)
        print("Successfully appended Batch 17 to tool_deep_content.ts")
    else:
        print("Could not find closing brace before FALLBACK_DEEP_CONTENT")
else:
    print("Could not find FALLBACK_DEEP_CONTENT in file")
