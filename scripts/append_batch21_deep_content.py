file_path = 'src/data/tool_deep_content.ts'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

batch21_deep_content = '''  "waste-management-plan-sop": {
    directAnswer:
      "A commercial kitchen Waste Management Plan SOP governs source-segregation across food biowaste, recyclables, cooking oil, and general refuse. By enforcing frequent bin clearance, outdoor grease containment tanks, locked dumpster lids, and certified carrier Waste Transfer Notes, hospitality venues prevent pest infestation and satisfy environmental health regulations.",
    howTo: [
      "Segregate kitchen waste streams at the source into organic food scraps, clean recyclables, and general landfill.",
      "Transfer cooled cooking oil below 38°C into certified outdoor used-cooking-oil containment drums; never dispose of oils down drains.",
      "Empty kitchen prep bins when they reach three-quarters full or at least every 2 hours during peak service periods.",
      "Wash, rinse, and sanitise all internal and external bins at the end of every operating shift in designated wash bays.",
      "Archive signed commercial Waste Transfer Notes and grease trap servicing logs for a minimum of 2 years for statutory audits."
    ],
    faqs: [
      {
        q: "What is the legal requirement for commercial kitchen waste disposal in the UK?",
        a: "Under the Environmental Protection Act 1990 and the Waste (England and Wales) Regulations 2011, food businesses have a statutory 'Duty of Care' to separate recyclable materials and ensure all commercial waste is collected solely by an authorized, registered waste carrier holding a valid Waste Transfer Note."
      },
      {
        q: "Why is hot cooking oil prohibited from municipal kitchen sinks and drains?",
        a: "Fats, oils, and grease (FOG) solidify inside pipework, producing catastrophic sewer blockages ('fatbergs') and foul odor backflow. Discharging FOG into public sewers breaches Section 111 of the Water Industry Act 1991 and results in heavy prosecution fines."
      },
      {
        q: "How does proper waste management reduce kitchen pest infestation risks?",
        a: "Exposed food waste and unwashed grease containers emit volatile aromatic compounds that attract rodents, flies, and cockroaches from hundreds of meters away. Sealing external bins, sanitising bin pads, and eliminating organic residue denies pests food and shelter."
      },
      {
        q: "How often should commercial restaurant grease traps be serviced?",
        a: "Grease traps must be inspected weekly by kitchen staff and pumped out completely by a licensed grease carrier every 1 to 3 months, or whenever fats and settled solids exceed 25% of the trap's total liquid capacity."
      },
      {
        q: "Can organic food scraps be composted on-site at a commercial restaurant?",
        a: "On-site composting of catering waste containing meat, animal products, or food from kitchens handling animal products is strictly regulated under the Animal By-Products (Enforcement) Regulations 2013 to prevent animal disease transmission."
      }
    ],
    relatedTools: [
      "grease-trap-cleaning",
      "restaurant-hood-cleaning",
      "pest-control-sop"
    ],
    relatedBlog: {
      title: "SFBB Daily Kitchen Opening and Closing Checklist Guide",
      slug: "sfbb-daily-kitchen-opening-closing-checklist-guide"
    }
  },
  "kitchen-sop": {
    directAnswer:
      "A commercial Kitchen Standard Operating Procedure (SOP) standardises morning prep line-checks, cross-contamination controls, cooking temperature verification, and nightly closing sanitisation. Enforcing documented SOPs ensures consistent dish quality, minimizes ingredient waste, and guarantees compliance with UK Food Standards Agency 5-star hygiene benchmarks.",
    howTo: [
      "Initiate shift with pre-service station opening: inspect equipment power, sanitize prep surfaces, and log chiller temperatures.",
      "Enforce strict color-coded chopping board rules (Red for raw meat, Yellow for raw poultry, Blue for raw fish, Green for produce).",
      "Probe core temperatures of all cooked proteins to verify statutory 75°C for 30 seconds (82°C in Scotland) before plating.",
      "Execute two-stage rapid cooling for batch-cooked foods, chilling from 60°C to below 5°C within 90 minutes.",
      "Conduct comprehensive closing deep clean, discard expired prepped items, and obtain supervisor log sign-off."
    ],
    faqs: [
      {
        q: "What are the core components of a commercial kitchen SOP manual?",
        a: "A comprehensive kitchen SOP covers: Personal Hygiene and Fitness to Work, Food Storage and FIFO Rotation, Cooking and Reheating Critical Limits, Cross-Contamination Prevention, Allergen Management, Equipment Cleaning Schedules, and Daily Temperature Logging."
      },
      {
        q: "How do kitchen SOPs protect restaurants during Environmental Health Officer audits?",
        a: "EHO inspectors evaluate confidence in management under the Food Hygiene Rating Scheme. Documented, actively initialled kitchen SOP checklists provide verifiable legal proof of due diligence under Section 21 of the Food Safety Act 1990."
      },
      {
        q: "What is the standard protocol if a commercial refrigeration unit fails its temperature check?",
        a: "If a chiller reads above 8.0°C, probe the internal food core immediately. If food core is above 8°C for less than 4 hours, transfer stock immediately to a backup walk-in at or below 4°C. If duration is unknown or exceeds 4 hours, dispose of perishable stock immediately."
      },
      {
        q: "How should kitchen staff handle allergen orders under restaurant SOPs?",
        a: "Staff must wash hands, put on clean aprons, use dedicated purple allergen boards and sanitised pans, verify recipe ingredients against the Natasha's Law matrix, and deliver the dish separately with a visual allergen marker."
      },
      {
        q: "How frequently should kitchen line-checks be completed?",
        a: "Line-checks must be performed at least twice daily: once during morning opening before lunch service, and once during afternoon prep turnaround before dinner service."
      }
    ],
    relatedTools: [
      "restaurant-sop",
      "standard-operating-procedure-in-food-industry",
      "chopping-board-colour-chart"
    ],
    relatedBlog: {
      title: "UK Food Hygiene Rating Scheme 5-Star Checklist",
      slug: "uk-food-hygiene-rating-scheme-5-star-checklist"
    }
  },
  "brc-audit": {
    directAnswer:
      "A BRCGS Food Safety Audit Checklist prepares food manufacturers, packaging facilities, and commercial processors for Global Standard for Food Safety Issue 9 certification audits. The checklist benchmarks operational compliance across senior management commitment, HACCP systems, factory hygiene fabric, foreign body detection, and mass-balance traceability.",
    howTo: [
      "Review senior executive commitment: verify documented food safety objectives, safety culture plans, and management review logs.",
      "Validate the facility HACCP plan: re-verify on-site process flow diagrams and review scientific validations for all CCP critical limits.",
      "Inspect factory structural fabric: check walls, coving, floor drainage, overhead light shatterproof shields, and pest exclusion seals.",
      "Challenge foreign body detection equipment hourly: test metal detectors with certified 1.5mm Fe, 2.0mm Non-Fe, and 2.5mm SS test wands.",
      "Conduct an unannounced mock recall challenge: trace one batch forward and backward within 4 hours, achieving 100% mass balance."
    ],
    faqs: [
      {
        q: "What are the fundamental clauses in a BRCGS Food Safety Issue 9 audit?",
        a: "BRCGS designates ten Fundamental Clauses where failure to comply results in non-certification: Senior Management Commitment (1.1), The Food Safety Plan - HACCP (2), Internal Audits (3.4), Corrective and Preventive Action (3.7), Traceability (3.9), Layout and Product Flow (4.3), Housekeeping and Hygiene (4.11), Management of Allergens (5.3), Control of Operations (6.1), and Training (7.1)."
      },
      {
        q: "What is the acceptable time window to complete a BRCGS mock traceability challenge?",
        a: "The standard mandates that a full mass-balance traceability exercise (tracing finished product back to raw materials, primary packaging, and forward to final retail distribution) must be completed within a maximum of 4 hours."
      },
      {
        q: "How are non-conformances graded during an official BRCGS audit?",
        a: "Audit findings are classified into three severity tiers: Minor (procedural lapse without direct food safety risk), Major (significant failure that could compromise food safety or integrity), and Critical (imminent food safety hazard or regulatory breach resulting in immediate audit failure)."
      },
      {
        q: "What is the BRCGS requirement for food safety culture?",
        a: "Clause 1.1.2 mandates that senior management define, implement, and annually evaluate a clear action plan to drive continuous behavioral improvement in food safety culture, incorporating open employee feedback, training, and performance metrics."
      },
      {
        q: "How frequently must internal audits be conducted under BRCGS standards?",
        a: "All operational areas, procedures, and PRPs must be audited throughout the year according to an established schedule based on risk, with the entire scope of the standard audited at least once every 12 months."
      }
    ],
    relatedTools: [
      "haccp-plan-builder",
      "fsma-food-traceability-list",
      "food-traceability-log"
    ],
    relatedBlog: {
      title: "How to Write a HACCP Plan for UK Food Businesses Step-by-Step",
      slug: "how-to-write-haccp-plan-uk-food-business-step-by-step"
    }
  },
  "kosher-certification": {
    directAnswer:
      "A Kosher Kitchen Certification SOP ensures strict adherence to Jewish dietary laws (Kashrut) across commercial food production, catering, and restaurant facilities. The standard mandates complete segregation of Meat (Fleishig), Dairy (Milchig), and Neutral (Pareve) equipment, rabbinically approved ingredient sourcing, Mashgiach supervision, and produce insect inspection.",
    howTo: [
      "Establish absolute physical segregation: maintain distinct color-coded cookware, cutting boards, and dishwashers for meat and dairy.",
      "Verify all incoming ingredients, oils, additives, and cleaning chemicals against recognized Kosher agency databases (OU, Star-K, KLBD).",
      "Facilitate Mashgiach on-site supervision: maintain supervisor sign-ins, oven ignition controls (Bishul Yisroel), and lockable storage.",
      "Conduct microscopic produce inspection (Bedikat Tola'im): wash, filter, and inspect leafy greens and berries to verify zero insect presence.",
      "Execute supervised kashering / purging (Hagala): enforce 24-hour equipment resting periods and boiling water purges when necessary."
    ],
    faqs: [
      {
        q: "What is the fundamental rule regarding meat and dairy in a Kosher kitchen?",
        a: "Kashrut law strictly prohibits the cooking, consumption, or simultaneous handling of meat (*Fleishig*) and dairy (*Milchig*) products. Commercial facilities must maintain physically separate preparation lines, sinks, cookware, and storage tiers."
      },
      {
        q: "What is a Pareve food item in Kosher culinary operations?",
        a: "Pareve items are neutral foods containing neither meat nor dairy ingredients (such as eggs, raw fruits, vegetables, grains, and kosher fish). Pareve foods can be prepared and served alongside either meat or dairy meals, provided utensils remain uncontaminated."
      },
      {
        q: "What role does a Mashgiach play in a certified commercial Kosher kitchen?",
        a: "A Mashgiach is a trained, rabbinically certified Kosher supervisor appointed to inspect incoming deliveries for kosher symbols, verify seal integrity, light gas and electric ovens (Bishul Yisroel), inspect produce for insects, and ensure zero cross-contact occurs."
      },
      {
        q: "What is Bedikat Tola'im and why is it mandatory for vegetables?",
        a: "The consumption of insects is strictly forbidden under biblical dietary laws. Bedikat Tola'im is the rigorous procedure of inspecting fresh produce (such as broccoli, cauliflower, herbs, and leafy lettuce) using lightbox backlights and white cloth filtration to verify complete absence of thrips, aphids, and mites."
      },
      {
        q: "What process is required to 'kasher' commercial kitchen equipment?",
        a: "Kashering (*Hagalat Kelim*) involves thoroughly scrubbing the equipment, letting it sit idle and unused for 24 hours, and immersing it in rolling boiling water or applying direct blowtorch heat (*Libbun*) under rabbinic supervision to purge absorbed non-kosher lipids."
      }
    ],
    relatedTools: [
      "food-allergen-chart",
      "chopping-board-colour-chart",
      "safe-food-prep-rules"
    ],
    relatedBlog: {
      title: "How to Create a Compliant 14-Allergen Matrix for UK Restaurants",
      slug: "how-to-create-compliant-14-allergen-matrix-uk-restaurants"
    }
  },
  "bar-opening-closing-checklist": {
    directAnswer:
      "A Bar Opening and Closing Checklist establishes operational, hygiene, and security routines across pre-service prep, service execution, and nightly shutdown. Following this procedure ensures calibrated beverage refrigeration, clean draft beer lines, sanitized ice handling, and secure alcohol inventory control for hospitality venues.",
    howTo: [
      "Perform morning setup: sanitize bar tops, restock glassware, inspect speed rails, and verify beer cellar cooler temperatures below 4°C.",
      "Check draft line pressure, inspect CO2 gauges, and flush beer taps to clear overnight foam and yeast buildup.",
      "Enforce strict ice hygiene: always store dedicated ice scoops outside the machine on sanitized trays, never left inside ice bins.",
      "Execute nightly closing: cover, date-label, and refrigerate cut citrus garnishes, syrups, and perishable purees.",
      "Disassemble and sanitize soda gun nozzles, flush drip trays with boiling water, count POS registers, and lock liquor cabinets."
    ],
    faqs: [
      {
        q: "Why is ice machine hygiene a top priority for Environmental Health Officers?",
        a: "Ice is classified as a ready-to-eat food under UK Food Hygiene Regulations. Dirty ice machines, unwashed scoop handles, and microbial biofilm harbour Listeria and coliform bacteria. Ice machines must be descaled and sanitised monthly."
      },
      {
        q: "How should draft beer lines be maintained in a commercial bar?",
        a: "Draft lines must be professionally cleaned every 7 to 14 days with food-grade alkaline line cleaner to dissolve yeast, hop resins, and beer stone (calcium oxalate), followed by thorough water rinsing to prevent chemical contamination."
      },
      {
        q: "What temperature should bar bottle coolers and under-counter fridges maintain?",
        a: "Under-counter bottle coolers holding perishable mixers, dairy products, or white wine should be kept at or below 4.0°C (legal maximum 8.0°C) to inhibit bacterial growth and preserve freshness."
      },
      {
        q: "How long can cut cocktail garnishes (lemons, limes, berries) be safely kept?",
        a: "Cut citrus and fruits must be stored in airtight, labelled containers at or below 4°C and used within 24 to 48 hours. Any garnishes held at room temperature during service must be discarded at the end of the shift."
      },
      {
        q: "What security and closing protocols prevent internal bar shrinkage?",
        a: "Standard closing SOPs require blind cash-till reconciliations, logging spilled or broken liquor on waste sheets, and locking back-bar liquor cabinets and storerooms with designated key-holder sign-offs."
      }
    ],
    relatedTools: [
      "restaurant-sop",
      "kitchen-sop",
      "restaurant-hood-cleaning"
    ],
    relatedBlog: {
      title: "SFBB Daily Kitchen Opening and Closing Checklist Guide",
      slug: "sfbb-daily-kitchen-opening-closing-checklist-guide"
    }
  }'''

idx = content.rfind('export const FALLBACK_DEEP_CONTENT')
if idx == -1:
    raise Exception("Could not find FALLBACK_DEEP_CONTENT")

closing_idx = content.rfind('};', 0, idx)
if closing_idx == -1:
    raise Exception("Could not find closing bracket of TOOL_DEEP_CONTENT")

preceding_text = content[:closing_idx].rstrip()
if not preceding_text.endswith(','):
    insert_str = ',\n' + batch21_deep_content + '\n'
else:
    insert_str = '\n' + batch21_deep_content + '\n'

new_content = content[:closing_idx] + insert_str + content[closing_idx:]

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Appended Batch 21 deep content successfully!")
