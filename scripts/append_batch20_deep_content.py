import re

file_path = 'src/data/tool_deep_content.ts'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

batch20_deep_content = '''  "freezer-organization-chart": {
    directAnswer:
      "Commercial freezer organization prevents cross-contamination, preserves cold airflow, and minimizes food waste using vertical shelf zones. Ready-to-eat foods occupy top shelves, prepped sauces fill middle tiers, raw meats sit on bottom shelves in leak-proof pans, and all bulk stock is elevated 6 inches off the floor on dunnage racks.",
    howTo: [
      "Position ready-to-eat foods, baked pastries, and ice cream on the uppermost shelves away from any thaw drips.",
      "Store prepped soups, stocks, and par-cooked ingredients in airtight labelled Cambro containers across middle shelves.",
      "Keep raw beef, pork, poultry, and fish on lowest shelves, placing raw chicken at the absolute bottom.",
      "Leave 3 to 6 inches of clearance between food boxes and freezer evaporator fans to ensure unimpeded air circulation.",
      "Rotate all inventory using First-In, First-Out (FIFO) procedures and label items with product name, prep date, and use-by date."
    ],
    faqs: [
      {
        q: "Why must raw meats still be kept on bottom shelves inside a freezer?",
        a: "Even though items remain solid at -18°C, automatic defrost cycles, power dips, or warm air infiltration during peak kitchen hours can cause surface melting or condensation. Storing raw proteins on the bottom tier guarantees thaw juices never contaminate ready-to-eat products below."
      },
      {
        q: "What is the 6-inch floor clearance rule in commercial freezers?",
        a: "Under UK Food Standards Agency and FDA Food Code rules, all food and ingredients must be stored at least 6 inches (150 mm) above the floor on slatted dunnage racks. This allows thorough floor sanitisation, prevents water absorption, and eliminates pest harborage."
      },
      {
        q: "How does overpacking a commercial freezer create food safety hazards?",
        a: "Commercial freezers cool via forced-air convection. Stacking boxes against walls or ceiling evaporators chokes airflow, creating warm pockets where temperatures can spike above -12°C, accelerating freezer burn and shortening ingredient shelf life."
      },
      {
        q: "What labeling information is legally required on frozen prepped food?",
        a: "Every transferred or prepped container must display a clear, moisture-resistant label detailing: product name, allergen flags, batch or preparation date, strict use-by date, and the handler's initials for full traceability."
      },
      {
        q: "How often should commercial freezers be defrosted and cleaned?",
        a: "Conduct routine weekly inspections to remove ice crystallization. Complete a full defrost, shelf strip-down, and antibacterial sanitisation every 3 to 6 months, or whenever ice buildup on evaporator coils exceeds 6mm in thickness."
      }
    ],
    relatedTools: [
      "walk-in-cooler-storage-chart",
      "freezer-temperature-chart",
      "food-expiration-dates-guidelines-chart"
    ],
    relatedBlog: {
      title: "SFBB Daily Kitchen Opening and Closing Checklist Guide",
      slug: "sfbb-daily-kitchen-opening-closing-checklist-guide"
    }
  },
  "5-whys-root-cause-analysis-template": {
    directAnswer:
      "The 5 Whys Root Cause Analysis template enables food businesses to systematically investigate Critical Control Point (CCP) failures, foreign body findings, and allergen cross-contact incidents. By interrogating deviations across 5 iterative levels, teams drill past superficial human error to fix foundational management and procedural gaps.",
    howTo: [
      "Isolate the incident immediately: quarantine affected production lots, halt line operations, and secure physical containment.",
      "Formulate a concise, objective problem statement detailing the exact safety deviation without assigning individual blame.",
      "Assemble a multidisciplinary investigation team consisting of the QA manager, kitchen supervisor, and equipment technicians.",
      "Ask 'Why?' five times sequentially, basing each answer on verifiable physical evidence and operational logs rather than assumptions.",
      "Formulate a Corrective and Preventive Action (CAPA) plan with designated owners, firm completion dates, and 30-day verification audits."
    ],
    faqs: [
      {
        q: "What is the primary benefit of the 5 Whys methodology in food safety?",
        a: "Traditional investigations often stop at 'operator made a mistake' and recommend retraining. The 5 Whys forces management to ask why the error was possible, revealing systemic flaws like missing SOP safeguards, poor equipment design, or inadequate shift handover protocols."
      },
      {
        q: "How do I avoid blaming individuals during a 5 Whys investigation?",
        a: "Focus strictly on process controls, environmental inputs, and procedural clarity rather than individual conduct. Ask why the training was ineffective or why the physical system allowed a human error to bypass critical safety barriers."
      },
      {
        q: "What should I do if the root cause is identified before reaching the fifth Why?",
        a: "Five is simply a rule of thumb. If a verified systemic or organizational root cause is clearly reached at Why 3 or Why 4, stop there. Conversely, complex multi-variable incidents may require 6 or 7 iterations or a complementary Ishikawa fishbone diagram."
      },
      {
        q: "How does 5 Whys root cause analysis link to HACCP Principle 5?",
        a: "HACCP Principle 5 requires food business operators to establish corrective actions when monitoring indicates a CCP critical limit has been breached. 5 Whys provides the structured audit evidence needed to prove the cause was permanently eliminated."
      },
      {
        q: "How long must completed 5 Whys CAPA records be retained?",
        a: "Retain completed investigation reports, root cause classifications, and signed verification records for a minimum of 3 years to comply with local authority EHO inspections, BRCGS audits, and product liability defence."
      }
    ],
    relatedTools: [
      "haccp-plan-builder",
      "what-are-the-critical-control-points-for-food-safety",
      "food-traceability-log"
    ],
    relatedBlog: {
      title: "How to Write a HACCP Plan for UK Food Businesses Step-by-Step",
      slug: "how-to-write-haccp-plan-uk-food-business-step-by-step"
    }
  },
  "restaurant-sop": {
    directAnswer:
      "A restaurant Standard Operating Procedure (SOP) standardises daily operations across front-of-house service, kitchen prep, and food hygiene compliance. A comprehensive SOP establishes clear opening and closing checklists, cross-contamination controls, calibrated temperature logging, and staff illness reporting to guarantee consistent 5-star hygiene ratings.",
    howTo: [
      "Establish structured shift routines: morning kitchen opening, midday prep restock, and evening closing sanitisation.",
      "Detail food handling standards including core cooking temperatures (75°C for 30s), rapid cooling, and color-coded board use.",
      "Define front-of-house service protocols covering table turn times, allergen customer inquiries, and dining room sanitisation.",
      "Document staff hygiene rules: mandatory handwashing frequencies, uniform standards, and 48-hour sickness exclusion policies.",
      "Implement digital checklist sign-offs and monthly manager audits to guarantee consistent operational execution."
    ],
    faqs: [
      {
        q: "Why are documented restaurant SOPs essential for food hygiene inspections?",
        a: "Environmental Health Officers evaluate confidence in management during food hygiene rating inspections. Having written, actively audited SOPs demonstrates that food safety is institutionalised rather than left to informal staff memory."
      },
      {
        q: "How often should restaurant SOP manuals be updated?",
        a: "Review restaurant SOPs at least annually, and immediately whenever introducing new menu items, altering kitchen equipment, renovating premises, or responding to updated food legislation such as Natasha's Law."
      },
      {
        q: "What is the 48-hour sickness exclusion rule in restaurant SOPs?",
        a: "Under UK Food Standards Agency and Regulation EC No 852/2004, any food handler experiencing vomiting or diarrhea must be excluded from food premises until they have been completely symptom-free for at least 48 continuous hours."
      },
      {
        q: "How do SOPs help reduce commercial restaurant food waste?",
        a: "SOPs enforce strict recipe portion control, First-In, First-Out (FIFO) stock rotation, daily prep pars based on sales forecasts, and daily walk-in cooler temperature logs, preventing ingredient spoilage and stock over-ordering."
      },
      {
        q: "Can restaurant SOP checklists be digitized on tablet computers?",
        a: "Yes. Digital checklists streamline shift sign-offs, generate tamper-proof timestamped audit trails, and instantly alert head chefs to overdue cleaning tasks or failed refrigerator temperature checks."
      }
    ],
    relatedTools: [
      "standard-operating-procedure-in-food-industry",
      "sanitation-standard-operating-procedures",
      "kitchen-utensils-guide"
    ],
    relatedBlog: {
      title: "UK Food Hygiene Rating Scheme 5-Star Checklist",
      slug: "uk-food-hygiene-rating-scheme-5-star-checklist"
    }
  },
  "standard-operating-procedure-in-food-industry": {
    directAnswer:
      "Food industry Standard Operating Procedures (SOPs and SSOPs) establish uniform manufacturing, sanitation, and quality control protocols across industrial food processing and commercial catering. Compliant SOPs cover pre-operational equipment sanitisation, chemical titration, allergen segregation, CCP monitoring, and product traceability under BRCGS and ISO 22000.",
    howTo: [
      "Define pre-operational sanitation procedures including visual inspection, chemical dosing, and contact dwell times.",
      "Establish operational CCP monitoring protocols: calibrate temperature probes, metal detectors, and checkweighers before production.",
      "Map zoning protocols to eliminate cross-contamination between raw ingredient processing lines and high-care finished packing areas.",
      "Implement rapid ATP surface swabbing or allergen lateral-flow tests to verify cleaning efficacy before releasing machinery.",
      "Maintain timestamped digital records and supervisor sign-offs for all batch processes to facilitate trace-back audits."
    ],
    faqs: [
      {
        q: "What is the difference between an SOP and an SSOP in the food industry?",
        a: "An SOP (Standard Operating Procedure) governs operational activities such as recipe batching, metal detection, and packaging. An SSOP (Sanitation Standard Operating Procedure) focuses specifically on cleaning, sanitising, and microbial decontamination before and during production."
      },
      {
        q: "What are the essential elements of an industrial food processing SOP?",
        a: "A compliant SOP contains: unique document ID, revision version, scope, responsible personnel, necessary safety PPE, step-by-step instructions, critical limit parameters, corrective actions, and verification audit frequencies."
      },
      {
        q: "How are chemical sanitisation concentrations monitored under food industry SOPs?",
        a: "Operators must test active chemical concentrations (quaternary ammonium, peracetic acid, or sodium hypochlorite) using chemical test strips or automated titration, logging PPM levels before applying sanitiser to food-contact surfaces."
      },
      {
        q: "How do industrial SOPs prevent allergen cross-contact on shared production lines?",
        a: "SOPs schedule allergen-free production runs first, mandate dedicated colour-coded cleaning tools, enforce complete wet-clean flush-outs between allergen changeovers, and verify line cleanliness with validated allergen swab test kits."
      },
      {
        q: "What standards require formal food manufacturing SOPs?",
        a: "Documented SOPs are mandatory under UK Food Hygiene Regulations 2013, Regulation EC No 852/2004, US FDA Food Safety Modernization Act (FSMA), BRCGS Global Standard for Food Safety, and FSSC 22000."
      }
    ],
    relatedTools: [
      "sanitation-standard-operating-procedures",
      "restaurant-sop",
      "haccp-plan-builder"
    ],
    relatedBlog: {
      title: "How to Write a HACCP Plan for UK Food Businesses Step-by-Step",
      slug: "how-to-write-haccp-plan-uk-food-business-step-by-step"
    }
  },
  "pest-control-sop": {
    directAnswer:
      "A commercial kitchen Pest Control SOP establishes an Integrated Pest Management (IPM) program that denies pests food, water, and shelter. The procedure mandates physical exclusion barriers, daily kitchen sanitisation, waste management protocols, monthly visits by licensed Pest Control Operators (PCOs), and a formal pest sightings register.",
    howTo: [
      "Conduct weekly physical exclusion audits: inspect door sweeps, window screens, pipe penetrations, and structural seals.",
      "Enforce strict kitchen closing sanitisation: clean behind heavy appliances, empty grease traps, and remove food residues.",
      "Store all food 6 inches off the floor in sealed, airtight plastic bins; never leave unsealed cardboard boxes on the floor.",
      "Log any pest sightings, droppings, or gnawed packaging immediately in the kitchen Pest Incident Log and notify management.",
      "Facilitate scheduled PCO inspections, review pest trap floor maps, and archive treatment reports in the food safety binder."
    ],
    faqs: [
      {
        q: "What are the four pillars of Integrated Pest Management in food businesses?",
        a: "The four pillars are: Deny Access (physical exclusion and sealing gaps), Deny Food & Water (scrupulous kitchen hygiene and waste clearance), Deny Shelter (eliminating clutter and empty cardboard), and Professional Monitoring (inspections and non-toxic traps)."
      },
      {
        q: "Why is open cardboard a major pest attractant in commercial kitchens?",
        a: "Corrugated cardboard traps moisture, provides organic cellulose food, and contains hollow fluting channels that serve as ideal breeding nests and transport vectors for cockroaches and insect eggs."
      },
      {
        q: "What should staff do immediately if a live rodent or insect is spotted?",
        a: "Immediately notify the manager on duty, log the sighting in the pest register (time, exact location, pest type), discard any potentially contaminated exposed food, sanitise the area, and contact the contracted pest control provider for an emergency visit."
      },
      {
        q: "Are open rodent baits or poison traps permitted inside commercial food prep areas?",
        a: "No. Toxic rodenticides and poison baits are strictly forbidden in food preparation and storage zones due to severe chemical contamination risks. Food prep areas permit only non-toxic mechanical snap traps, tamper-resistant glue boards, and electric fly killers."
      },
      {
        q: "How long must commercial pest control records be preserved for EHO inspections?",
        a: "Maintain pest control technician service sheets, contractor insurance certificates, bait station location maps, and internal sighting logs for at least 3 years inside your Food Standards Agency compliance binder."
      }
    ],
    relatedTools: [
      "pest-management-plan",
      "restaurant-sop",
      "sanitation-standard-operating-procedures"
    ],
    relatedBlog: {
      title: "UK Food Hygiene Rating Scheme 5-Star Checklist",
      slug: "uk-food-hygiene-rating-scheme-5-star-checklist"
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
    insert_str = ',\n' + batch20_deep_content + '\n'
else:
    insert_str = '\n' + batch20_deep_content + '\n'

new_content = content[:closing_idx] + insert_str + content[closing_idx:]

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Appended Batch 20 deep content successfully!")
