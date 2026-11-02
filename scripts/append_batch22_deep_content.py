file_path = 'src/data/tool_deep_content.ts'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

batch22_deep_content = '''  "restaurant-opening-checklist": {
    directAnswer:
      "A restaurant opening checklist coordinates front-of-house (FOH) setup, dining room ambiance, POS register floats, and kitchen line readiness before guest arrival. Completing morning checks 60 to 90 minutes before service ensures food refrigeration reads below 4°C, cookline equipment is preheated, and staff are briefed on allergens and daily covers.",
    howTo: [
      "Conduct exterior safety check: disarm security alarms, unlock guest entrances, and power on dining room and terrace lights.",
      "Log temperatures for all walk-in coolers, line prep drawers, and display bars, verifying readings remain at or below 4°C.",
      "Start up kitchen ventilation hoods, preheat ovens and griddles, and verify deep fryer oil level and clarity.",
      "Stock dining stations with polished cutlery, glassware, rolled napkins, and sanitised condiment dispensers.",
      "Count cash register drawers, power on POS terminals, and conduct morning pre-shift staff briefing."
    ],
    faqs: [
      {
        q: "How long before doors open should a restaurant opening checklist be started?",
        a: "Front-of-house staff typically arrive 60 minutes before service, while back-of-house kitchen prep leads require 90 to 120 minutes to allow heavy cooking equipment to reach operational temperature, prep fresh produce, and verify chiller readings."
      },
      {
        q: "What is the most critical food safety check on a morning restaurant opening checklist?",
        a: "Refrigeration temperature verification. If overnight power fluctuations caused prep tables or walk-ins to rise above 8.0°C, food may be compromised. Identifying temperature excursions before service allows immediate corrective action before plating meals."
      },
      {
        q: "What should be covered during the morning pre-service staff briefing?",
        a: "The opening manager should review expected reservation numbers, VIP guests, large party bookings, 86'd out-of-stock items, daily chef specials, and critical allergen cross-contact warnings for specific menu preparations."
      },
      {
        q: "How does a structured opening checklist prevent customer service delays?",
        a: "By ensuring side-work—such as rolling silverware, cutting bar fruit, brewing iced tea, and printing backup kitchen paper—is completed before service, front-of-house staff can focus entirely on greeting, seating, and taking guest orders."
      },
      {
        q: "Can restaurant opening checklists be customised for different days of the week?",
        a: "Yes. Monday openings often require delivery intake, weekly deep-clean resets, and draft beer line flushes, whereas weekend openings emphasize high-volume prep pars, extra ice machine cycles, and increased table setup."
      }
    ],
    relatedTools: [
      "opening-and-closing-checklist-template",
      "restaurant-sop",
      "bar-opening-closing-checklist"
    ],
    relatedBlog: {
      title: "SFBB Daily Kitchen Opening and Closing Checklist Guide",
      slug: "sfbb-daily-kitchen-opening-closing-checklist-guide"
    }
  },
  "printable-retail-store-daily-checklist": {
    directAnswer:
      "A food retail store daily checklist manages retail grocery, deli counter, and convenience shop operations from morning opening to evening shutdown. Following this procedure guarantees continuous refrigeration monitoring (dairy ≤4°C, raw meat ≤3°C), shelf-life stock rotation (FIFO), aisle cleanliness, register reconciliation, and shop floor security.",
    howTo: [
      "Record morning probe readings of open-front display chillers, multi-deck dairy cases, and frozen display freezers.",
      "Conduct daily shelf-life audits: remove out-of-date stock, mark down near-expiry items, and face shelves using FIFO.",
      "Sanitise customer touchpoints: disinfect shopping cart handles, checkout conveyors, PIN pads, and deli slicers.",
      "Inspect receiving loading bays: verify delivery pallet condition, vehicle temperatures, and tamper-evident packaging seals.",
      "Reconcile register till floats, balance electronic payment receipts, and complete evening perimeter security checks."
    ],
    faqs: [
      {
        q: "What are the legal temperature limits for retail grocery display chillers?",
        a: "Under the Food Safety and Hygiene (England) Regulations 2013, chilled food in open-deck retail cabinets must not exceed 8.0°C. Best-practice retailer standards maintain dairy cabinets between 1°C and 4°C, and fresh meat/fish cases between 0°C and 2°C."
      },
      {
        q: "What is the difference between Use-By and Best-Before dates in food retail?",
        a: "It is a criminal offence under the Food Safety Act 1990 to sell any food past its 'Use-By' date because it poses an imminent microbiological safety hazard. 'Best-Before' dates denote optimal sensory quality; retailers may legally sell foods past Best-Before if sound and clearly disclosed."
      },
      {
        q: "How frequently should retail food store floors and spill zones be checked?",
        a: "Conduct visual floor walk-throughs every 30 to 60 minutes. Spilled liquids, broken jars, or fallen produce must be cleaned immediately and demarcated with bright yellow warning cones to prevent slip-and-fall customer injuries."
      },
      {
        q: "What are the food safety rules for supermarket and deli service counters?",
        a: "Deli meats and cheeses displayed in service cases must be protected with sneeze guards, held at or below 4°C, sliced with dedicated clean machines, and discarded once pre-sliced portions reach their 48-hour display limit."
      },
      {
        q: "How should cash drawer discrepancies be handled on retail daily checklists?",
        a: "Discrepancies exceeding the store tolerance limit (typically £5 to £10) must trigger an immediate till recount, audit of voided transactions and price overrides, and formal escalation on the manager shift report."
      }
    ],
    relatedTools: [
      "canned-food-expiration-dates-chart",
      "food-expiration-dates-guidelines-chart",
      "fsma-food-traceability-list"
    ],
    relatedBlog: {
      title: "UK Food Hygiene Rating Scheme 5-Star Checklist",
      slug: "uk-food-hygiene-rating-scheme-5-star-checklist"
    }
  },
  "opening-and-closing-checklist-template": {
    directAnswer:
      "A commercial kitchen opening and closing checklist establishes end-to-end accountability across morning start-up, midday prep changeovers, and nightly deep-cleaning shutdowns. Implementing this template ensures food safety critical limits are maintained, appliances are powered down safely, and kitchen premises are left sanitised and audit-ready.",
    howTo: [
      "Execute morning startup: power on exhaust fans, calibrate digital thermometers, and verify cold storage temperatures below 4°C.",
      "Conduct active service line-checks: verify steam tables hold above 63°C and cook-line ingredients are refreshed.",
      "Transition into closing: wrap, date-label, and transfer line ingredients into walk-in refrigeration using clean Cambro containers.",
      "Execute deep sanitation: boil out fryers, degrease ranges and flat tops, descale dishwashers, and squeegee clean floor tiles.",
      "Complete final security check: turn off natural gas valves, verify walk-in door latches, and lock external delivery doors."
    ],
    faqs: [
      {
        q: "Why is a dual opening and closing checklist system recommended by EHO inspectors?",
        a: "Opening checklists verify that food and equipment are safe to begin cooking, while closing checklists ensure that food is protected overnight and equipment is turned off. Together, they create continuous due diligence records required for 5-star Food Hygiene Ratings."
      },
      {
        q: "What are the common equipment fire hazards addressed during kitchen closing?",
        a: "Unattended deep fryers left on overnight, grease buildup inside extraction ductwork, and gas valve micro-leaks are primary commercial kitchen fire causes. Closing SOPs mandate physical gas shut-off checks and fryer power disengagement."
      },
      {
        q: "How should kitchen closing checklists allocate staff cleaning responsibilities?",
        a: "Tasks should be divided by kitchen stations: grill cook cleans the flat top and grease trap, sauté chef scrubs the ranges and ovens, prep chef cleans meat slicers and worktops, and the kitchen porter cleans floor drains and dishwasher tanks."
      },
      {
        q: "How long should completed opening and closing checklist logs be kept?",
        a: "Retain signed physical or digital opening and closing log sheets for at least 12 months on-site, and up to 3 years in digital archives, to satisfy Environmental Health Officer audits and insurance due diligence inquiries."
      },
      {
        q: "What corrective action is required if evening closing cleaning is deemed substandard?",
        a: "The morning opening manager notes the deficiency in the shift hand-off log, has the morning crew address immediate hygiene risks before prep starts, and addresses the failure with closing staff during the next operational shift."
      }
    ],
    relatedTools: [
      "restaurant-opening-checklist",
      "kitchen-sop",
      "restaurant-sop"
    ],
    relatedBlog: {
      title: "SFBB Daily Kitchen Opening and Closing Checklist Guide",
      slug: "sfbb-daily-kitchen-opening-closing-checklist-guide"
    }
  },
  "restaurant-equipment-list": {
    directAnswer:
      "A master restaurant equipment list details the full inventory of commercial cooking machinery, walk-in refrigeration, food preparation tools, warewashing stations, and smallwares required for commercial foodservice operations. Categorizing equipment by functional kitchen zone ensures efficient workflow design and compliance with UK commercial health and fire codes.",
    howTo: [
      "Specify heavy cooking equipment: commercial ranges, combi ovens, fryers, griddles, and charbroilers with gas interlock systems.",
      "Calculate refrigeration needs: size walk-in chillers, lowboy chef bases, sandwich prep tables, and blast chillers.",
      "Select commercial preparation machinery: NSF-rated food processors, meat slicers, planetary mixers, and immersion stick blenders.",
      "Design warewashing infrastructure: commercial pass-through dishwashers, three-compartment pot sinks, and hands-free hand sinks.",
      "Compile smallwares and utensils inventory: calibrated digital probe thermometers, GN stainless steel pans, and colour-coded cutting boards."
    ],
    faqs: [
      {
        q: "What is the difference between commercial and domestic kitchen equipment?",
        a: "Commercial equipment is constructed from heavy-duty 304 food-grade stainless steel, delivers significantly higher British Thermal Unit (BTU) heating output, features industrial compressors designed for frequent door openings, and carries NSF/CE commercial sanitation certifications."
      },
      {
        q: "Why is a blast chiller an essential piece of commercial restaurant equipment?",
        a: "Standard walk-in coolers cannot cool large volumes of hot food quickly enough without raising ambient cabinet temperatures. Blast chillers circulate high-velocity freezing air to drop food core temperatures from 60°C to below 5°C within 90 minutes, complying with UK FSA regulations."
      },
      {
        q: "What are the mandatory hand-washing sink requirements in a commercial kitchen?",
        a: "Food hygiene law mandates dedicated hand-washing basins situated conveniently near food prep areas. Sinks must feature hands-free mixer taps (knee- or sensor-operated), constant hot and cold running water, liquid antibacterial soap, and single-use disposable paper towels."
      },
      {
        q: "What type of fire suppression system is legally required over commercial cooking ranges?",
        a: "Commercial extraction canopies over grease-producing appliances (fryers, griddles, charbroilers) must be fitted with an automatic wet-chemical fire suppression system (such as Ansul R-102) connected to an automatic gas supply shut-off interlock valve."
      },
      {
        q: "How often should commercial kitchen equipment undergo preventive maintenance?",
        a: "Gas appliances and ventilation hoods require annual certified gas-safe inspections. Refrigeration compressors and condenser coils should be vacuumed and checked quarterly, and digital probe thermometers calibrated monthly."
      }
    ],
    relatedTools: [
      "kitchen-utensils-guide",
      "kitchen-sop",
      "product-specification-sheet"
    ],
    relatedBlog: {
      title: "Commercial Kitchen Food Cooling and Temperature Limits Guide",
      slug: "commercial-kitchen-food-cooling-temperature-guide"
    }
  },
  "opening-a-restaurant-checklist": {
    directAnswer:
      "An opening a restaurant checklist outlines the critical legal, regulatory, operational, and financial milestones required to launch a food business. The checklist covers local authority registration (at least 28 days prior), premises licensing, HACCP food safety management system implementation, commercial kitchen fit-out, and staff food hygiene certification.",
    howTo: [
      "Submit Food Business Registration to your local authority environmental health department at least 28 days before opening.",
      "Document a comprehensive food safety management system based on HACCP or the FSA Safer Food, Better Business (SFBB) pack.",
      "Secure essential premises licenses: alcohol premises licence, pavement licence, and commercial music PRS/PPL certification.",
      "Procure commercial kitchen infrastructure with certified extraction canopies, gas interlocks, and fire suppression systems.",
      "Hire kitchen and FOH staff, ensuring all food handlers complete certified Level 2 Food Hygiene and Natasha's Law training."
    ],
    faqs: [
      {
        q: "When must I register my new restaurant with the local council in the UK?",
        a: "Under Regulation (EC) No 852/2004, you must register your food business with your local authority at least 28 days before opening or beginning any food operations. Registration is completely free and cannot be refused."
      },
      {
        q: "What food hygiene training is legally required for restaurant staff before opening?",
        a: "While UK law requires food handlers to be adequately supervised and instructed in food hygiene, industry standards mandate that all cooks and prep staff hold an accredited Level 2 Food Safety and Hygiene certificate, and head chefs hold Level 3."
      },
      {
        q: "What documentation must be on-site for the initial Environmental Health Officer inspection?",
        a: "The EHO will inspect your premises unannounced shortly after opening. You must have ready: your documented HACCP/SFBB manual, daily temperature logs, staff hygiene training certificates, pest control contract, and waste carrier transfer notes."
      },
      {
        q: "What commercial insurances are mandatory when opening a restaurant?",
        a: "Employers' Liability Insurance is a strict legal requirement if you employ any staff (minimum £5 million cover). Public Liability Insurance and Product Liability Insurance are essential to protect against customer injury and food poisoning claims."
      },
      {
        q: "How do I ensure compliant allergen labelling under Natasha's Law before opening?",
        a: "Review all recipes to map the 14 major allergens on a central matrix. For any foods pre-packaged on-site for direct sale (e.g. takeaway salads, sandwiches), print compliant labels detailing the full ingredient list with allergens emphasised in bold."
      }
    ],
    relatedTools: [
      "restaurant-opening-checklist",
      "haccp-plan-builder",
      "restaurant-sop"
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
    insert_str = ',\n' + batch22_deep_content + '\n'
else:
    insert_str = '\n' + batch22_deep_content + '\n'

new_content = content[:closing_idx] + insert_str + content[closing_idx:]

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Appended Batch 22 deep content successfully!")
