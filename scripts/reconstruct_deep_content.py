import sys
sys.stdout.reconfigure(encoding='utf-8')

# Let's restore and cleanly structure tool_deep_content.ts
with open('src/data/tool_deep_content.ts', 'r', encoding='utf-8') as f:
    text = f.read()

# Define the 3 new entries cleanly
new_tools = """  },
  "eho-checklist": {
    directAnswer:
      "An EHO inspection checklist is a structured compliance audit tool used by UK restaurants and takeaways to prepare for unannounced local authority food hygiene inspections. It audits the three statutory scoring areas evaluated under the Food Hygiene Rating Scheme (FHRS): food hygiene handling, structural physical cleanliness, and confidence in management procedures.",
    howTo: [
      "Audit daily temperature logs for chilled storage (<8°C), hot holding (>63°C), and cooking (75°C core).",
      "Inspect structural premises: handwash stations stocked with warm running water, soap, and hygienic paper towels.",
      "Verify complete allergen records and ensure all kitchen staff understand Natasha's Law and cross-contact controls.",
      "Inspect pest control measures, pest-proofing barriers, fly killer units, and contractor servicing documentation.",
      "Organise your SFBB diary or HACCP documentation so it can be presented to the inspecting EHO officer immediately."
    ],
    faqs: [
      {
        q: "What do Environmental Health Officers (EHOs) inspect during a UK food hygiene audit?",
        a: "EHOs inspect three distinct scoring categories defined by the Food Standards Agency (FSA): 1) Food hygiene practices (cooking, chilling, reheating, and cross-contamination); 2) Physical structural condition (cleanliness, pest-proofing, ventilation, lighting, and layout); and 3) Confidence in management (HACCP documentation, SFBB daily diary completion, allergen matrices, and staff hygiene training records)."
      },
      {
        q: "How can a UK takeaway or restaurant achieve a 5-star Food Hygiene Rating?",
        a: "To earn a 5-star rating (Very Good), businesses must score no more than 5 penalty points in any of the three inspection categories. This requires complete, legible daily temperature sheets, robust allergen controls, pristine kitchen cleanliness, and fully documented staff food hygiene training."
      },
      {
        q: "Do EHOs give advance notice before visiting a commercial food premises?",
        a: "No. Routine statutory food hygiene inspections by local council EHOs are unannounced. Officers have a legal right of entry at all reasonable hours to inspect food handling operations, take food or swab samples, and review written due diligence records."
      },
      {
        q: "What documents must be ready to show the EHO during an inspection?",
        a: "You must readily provide: 1) Your completed HACCP plan or FSA Safer Food, Better Business (SFBB) diary; 2) Daily fridge, freezer, and hot-holding temperature logs; 3) 14-allergen matrix sheets; 4) Staff Level 2 Food Hygiene certificates; 5) Pest control inspection reports; and 6) Waste disposal commercial contracts."
      },
      {
        q: "What happens if a food business receives an EHO rating below 3 stars?",
        a: "Ratings of 0, 1, or 2 indicate critical compliance failures. The inspecting officer will issue formal Improvement Notices or Hygiene Emergency Prohibition Notices if imminent health risks exist. Businesses may request a reinspection after completing all required remediation and paying the local council re-rating fee."
      }
    ],
    relatedTools: ["opening-and-closing-checklist-template", "cleaning-schedule", "fridge-temperature-record-sheet-pdf"],
    relatedBlog: {
      title: "EHO Inspection Checklist & 5-Star Food Hygiene Guide UK",
      slug: "fhrs-food-hygiene-rating-guide-uk"
    }
  },
  "delivery-log": {
    directAnswer:
      "A commercial delivery log (goods in intake sheet) is a due diligence record used by UK food businesses to inspect and log supplier food deliveries. Verifying delivery vehicle cleanliness, chilling temperatures (8°C or below), frozen solid state (-18°C or colder), packaging integrity, and use-by dates prevents compromised stock from entering the food preparation chain.",
    howTo: [
      "Inspect supplier transport vehicle cleanliness, pest indicators, and overall cargo temperature conditions.",
      "Probe core or between-pack temperatures of chilled foods to verify readings are at or below 8°C (ideally 1°C to 5°C).",
      "Check frozen goods to confirm solid frozen state at or below -18°C with zero signs of thawing or refreezing.",
      "Examine date codes, batch numbers, packaging integrity, and allergen labelling on incoming ingredients.",
      "Record supplier name, vehicle registration, batch codes, temperatures, and staff sign-off on the intake sheet."
    ],
    faqs: [
      {
        q: "What is the legal temperature limit for receiving chilled food deliveries in the UK?",
        a: "Under the Food Safety and Hygiene (England) Regulations 2013, chilled foods must be delivered and stored at or below 8°C. Best practice recommended by the Food Standards Agency (FSA) is between 1°C and 5°C. If chilled deliveries arrive above 8°C, they should be rejected immediately."
      },
      {
        q: "What are the rules for accepting frozen food deliveries?",
        a: "Frozen goods must arrive solidly frozen at or below -18°C. Inspect packaging for soft spots, condensation ice crystals, or misshapen cartons, which indicate temperature abuse and subsequent refreezing during transit."
      },
      {
        q: "What should kitchen staff do if a delivery arrives at an unsafe temperature?",
        a: "Do not accept or sign for the affected items. Quarantine the delivery immediately, inform the delivery driver and supplier customer service, record the rejected temperature and batch code on the delivery log, and document the supplier refusal."
      },
      {
        q: "Why is a goods-in temperature log essential for EHO due diligence?",
        a: "Section 21 of the Food Safety Act 1990 provides a defence of due diligence if a business can prove it took all reasonable precautions. A signed goods-in log proves contaminated or spoiled food was not accepted from suppliers and did not enter your food preparation workflow."
      },
      {
        q: "How long should delivery intake records be retained?",
        a: "Completed delivery inspection logs should be archived for at least 12 months, or until after the longest shelf-life of the batch has expired, ensuring traceable due diligence records during local council audits."
      }
    ],
    relatedTools: ["fridge-temperature-record-sheet-pdf", "freezer-temperature-chart", "food-traceability"],
    relatedBlog: {
      title: "Commercial Kitchen Food Cooling & Temperature Limits Guide",
      slug: "commercial-kitchen-food-cooling-temperature-guide"
    }
  },
  "cooking-log-template": {
    directAnswer:
      "A commercial cooking temperature log sheet is a daily kitchen record used to document that cooked meat, poultry, and high-risk foods reach safe core temperatures. Under UK Food Standards Agency (FSA) guidance, batch cooking must achieve at least 75°C (or 82°C in Scotland) to eliminate harmful pathogens like Salmonella and E. coli.",
    howTo: [
      "Disinfect the probe thermometer needle with a food-safe antibacterial wipe before and after each temperature check.",
      "Insert the calibrated probe into the thickest part of the meat, bird, or batch dish away from bones.",
      "Verify that the temperature reading maintains at least 75°C for 30 seconds (or 82°C in Scotland under CookSafe).",
      "Record product name, time, batch number, core temperature reading, and chef initials on the daily cooking log.",
      "If temperature falls short of 75°C, continue cooking and re-probe until the critical limit is verified."
    ],
    faqs: [
      {
        q: "What is the legal core cooking temperature for meat and poultry in the UK?",
        a: "In England, Wales, and Northern Ireland, Food Standards Agency (FSA) guidance recommends cooking food until the core temperature reaches at least 75°C for 30 seconds (or equivalent time/temperature combinations such as 70°C for 2 minutes). In Scotland, Food Standards Scotland (FSS) CookSafe guidance requires a core temperature of 82°C."
      },
      {
        q: "What time and temperature combinations are legally acceptable for cooking?",
        a: "Safe equivalent cooking combinations recognised by the FSA include: 60°C for 45 minutes, 65°C for 10 minutes, 70°C for 2 minutes, 75°C for 30 seconds, and 80°C for 6 seconds. The core temperature must be maintained throughout the thickest portion."
      },
      {
        q: "How should kitchen staff calibrate digital food thermometers?",
        a: "Staff should verify probe calibration monthly using two methods: 1) The ice point test (placing the probe in an ice-water slush, which must read between -1°C and +1°C); and 2) The boiling point test (inserting into vigorously boiling water, which must read between 99°C and 101°C). Record calibration results in your kitchen equipment log."
      },
      {
        q: "Do Environmental Health Officers inspect cooking temperature logs?",
        a: "Yes. EHOs review cooking temperature records to verify that your kitchen exercises active pathogen control under HACCP Principle 5 (Monitoring Critical Control Points). Missing or retroactively filled cooking sheets are a frequent cause of FHRS rating downgrades."
      },
      {
        q: "How should cooked food be treated if it is being cooled for later service?",
        a: "Cooked food intended for chilled storage must be cooled as rapidly as possible—ideally reaching 8°C or below within 90 minutes. Use shallow pans, blast chillers, or ice baths, and log the cooling time on your kitchen cooling record sheet."
      }
    ],
    relatedTools: ["hot-holding-food-temperature-log", "reheating-food-temperature-guide", "fridge-temperature-record-sheet-pdf"],
    relatedBlog: {
      title: "Commercial Kitchen Food Cooling & Temperature Limits Guide",
      slug: "commercial-kitchen-food-cooling-temperature-guide"
    }
  }
};"""

# Strip out any erroneous eho-checklist from FALLBACK_DEEP_CONTENT
idx_fallback = text.find('export const FALLBACK_DEEP_CONTENT: ToolDeepContent = {')
if idx_fallback != -1:
    # First part is TOOL_DEEP_CONTENT
    first_part = text[:idx_fallback]
    # Remove any trailing }; in first_part
    last_closing = first_part.rfind('};\n')
    if last_closing == -1:
        last_closing = first_part.rfind('};')
    
    # In first_part before last_closing:
    # Look for the last tool before closure (kitchen-prep-list-template)
    target_kprep = 'slug: "sfbb-daily-kitchen-opening-closing-checklist-guide"\n    }\n  }'
    idx_kprep = first_part.find(target_kprep)
    if idx_kprep != -1:
        clean_first_part = first_part[:idx_kprep + len(target_kprep) - 3] + new_tools + '\n\n'
    else:
        print("Could not find target_kprep in first_part")
        sys.exit(1)

    # Standard clean FALLBACK_DEEP_CONTENT
    clean_fallback = """export const FALLBACK_DEEP_CONTENT: ToolDeepContent = {
  directAnswer:
    "This commercial food safety template provides standard operating procedures, monitoring logs, and due diligence verification for UK restaurants, takeaways, and caterers. Designed to align with Food Standards Agency (FSA) regulations and Section 21 defense under the Food Safety Act 1990.",
  howTo: [
    "Review the specific control points, monitoring parameters, and critical limits defined in this procedure.",
    "Input your business details, operating date, and designated supervisor sign-off into the form fields.",
    "Execute physical checks at required intervals during kitchen prep and service shifts.",
    "Record real-time values, deviations, and any immediate corrective actions taken directly on the log.",
    "Click Print / Save as PDF to archive clean copies in your kitchen compliance binder."
  ],
  faqs: [
    {
      q: "Is this food safety document suitable for UK EHO inspections?",
      a: "Yes. When accurately maintained with genuine operational data and supervisor signatures, it supports statutory due diligence requirements under the Food Safety Act 1990 and HACCP Article 5 of Regulation (EC) No 852/2004."
    },
    {
      q: "How frequently must kitchen staff complete this record?",
      a: "Depending on the procedure, monitoring should occur daily, during each operational shift, or immediately upon receiving food deliveries and finishing cooking batches."
    },
    {
      q: "What corrective action should be taken if a critical limit is breached?",
      a: "Immediately quarantine affected food batches, investigate the cause (e.g., refrigeration failure, cooking temperature shortfall), correct or safely discard the food, and log the action taken."
    },
    {
      q: "How long must commercial kitchens retain completed safety logs?",
      a: "Under UK due diligence legal defense, records should be kept for at least 6 to 12 months, or 3 months beyond the shelf life of the food produced."
    },
    {
      q: "Can I customize and print this template without watermarks?",
      a: "Yes. All input fields allow custom entries and the print function outputs an optimized A4 document with no web chrome or watermarks."
    }
  ],
  relatedTools: ["allergy-matrix", "freezer-temperature-chart", "food-cost-calculator"],
  relatedBlog: {
    title: "How to Get a 5-Star Food Hygiene Rating: UK EHO Checklist",
    slug: "uk-food-hygiene-rating-scheme-5-star-checklist"
  }
};
"""
    final_text = clean_first_part + clean_fallback
    with open('src/data/tool_deep_content.ts', 'w', encoding='utf-8') as f:
        f.write(final_text)
    print("Cleanly reconstructed tool_deep_content.ts with correct structure!")
else:
    print("Could not find FALLBACK_DEEP_CONTENT")
