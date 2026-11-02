# -*- coding: utf-8 -*-
with open('src/data/tool_deep_content.ts', 'r', encoding='utf-8') as f:
    text = f.read()

fallback_pos = text.find('export const FALLBACK_DEEP_CONTENT')
if fallback_pos == -1:
    raise Exception("Could not find FALLBACK_DEEP_CONTENT")

end_tool_deep = text.rfind('};', 0, fallback_pos)
if end_tool_deep == -1:
    raise Exception("Could not find }; before FALLBACK_DEEP_CONTENT")

# Check what precedes };
pre_text = text[:end_tool_deep].rstrip()
if pre_text.endswith('}'):
    # Needs a comma after the closing brace of the previous item
    pre_text = pre_text + ','

batch22_items = '''
  "restaurant-opening-checklist": {
    directAnswer:
      "A restaurant opening checklist coordinates front-of-house (FOH) setup, dining room ambiance, POS register floats, and kitchen line readiness before guest arrival. Completing morning checks 60 to 90 minutes before service ensures food refrigeration reads below 5.0°C, cookline equipment is preheated, and staff are briefed on allergens and daily covers.",
    howTo: [
      "Conduct exterior safety check: disarm security alarms, unlock guest entrances, and power on dining room and terrace lights.",
      "Log temperatures for all walk-in chillers, line prep drawers, and display bars, verifying readings remain at or below 5.0°C.",
      "Start up kitchen ventilation hoods, preheat ovens and griddles, and verify deep fryer oil level and clarity.",
      "Stock dining stations with polished cutlery, glassware, rolled napkins, and sanitised condiment dispensers.",
      "Count cash register floats, power on POS terminals, and conduct morning pre-shift staff briefing covering specials and allergens."
    ],
    faqs: [
      {
        q: "How long before doors open should a restaurant opening checklist be started?",
        a: "Front-of-house staff typically arrive 60 minutes before service, while back-of-house kitchen prep leads require 90 to 120 minutes to allow heavy cooking equipment to reach operational temperature, prep fresh produce, and verify chiller readings."
      },
      {
        q: "What is the most critical food safety check on a morning restaurant opening checklist?",
        a: "Refrigeration temperature verification. If overnight power fluctuations caused prep tables or walk-ins to rise above 8.0°C, food safety may be compromised. Identifying temperature excursions before service allows immediate corrective action before plating meals."
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
        a: "Yes. Monday openings often require delivery intake, weekly deep-clean resets, and draft beer line flushes, whereas weekend openings emphasise high-volume prep pars, extra ice machine cycles, and increased table setup."
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
      "A printable retail store daily checklist standardises supermarket, deli, and convenience store operations across shift handovers. It governs morning opening procedures, display refrigeration temperature audits, shelf date rotation (FIFO), sanitisation rounds, and evening cash reconciliation.",
    howTo: [
      "Complete morning store perimeter check: inspect exterior signage, disarm security alarms, and turn on retail floor lighting.",
      "Log temperatures for dairy cases (below 4.0°C), meat chillers (below 3.0°C), and ice cream display freezers (below -18.0°C).",
      "Audit fresh produce and chilled shelves for expired 'Use-By' dates, removing out-of-date stock immediately to quarantine.",
      "Sanitise customer shopping baskets, trolley handles, checkout conveyor belts, and chip-and-pin payment terminals.",
      "Count till drawers against float sheets, verify receipt printer paper rolls, and sign off opening manager checklist."
    ],
    faqs: [
      {
        q: "Why are temperature audits vital for retail grocery stores?",
        a: "Retail open-deck multi-deck chillers are sensitive to ambient store humidity and customer foot traffic. Logging temperatures twice daily proves compliance with UK food temperature regulations (legal max 8.0°C) and prevents inventory spoilage."
      },
      {
        q: "What is the legal difference between 'Use-By' and 'Best-Before' dates in retail food audits?",
        a: "Under UK food safety law, it is a criminal offence to display or sell any food product past its 'Use-By' date because it poses a direct microbiological risk. 'Best-Before' relates to food quality rather than safety, though selling stale items damages brand reputation."
      },
      {
        q: "How often should retail checkout high-touch surfaces be sanitised?",
        a: "Payment keypads, conveyor belts, counter surfaces, and scanner glass should be sanitised at least every 2 to 4 hours during peak retail traffic, and thoroughly disinfected at shift changeover."
      },
      {
        q: "What cash handling controls belong on a retail store daily checklist?",
        a: "Beginning-of-day float verification, mid-shift safe drops when till cash exceeds set thresholds (e.g. £300), and end-of-day double-blind till reconciliation comparing POS register totals against counted cash and card receipts."
      },
      {
        q: "How does a daily retail checklist protect against shoplifting and shrinkage?",
        a: "Morning audits include verifying that security mirrors, CCTV monitor feeds, electronic article surveillance (EAS) gates, and high-value stock display lock-cases are fully operational before customers enter."
      }
    ],
    relatedTools: [
      "retail-store-daily-checklist",
      "store-closing-checklist",
      "opening-and-closing-checklist-template"
    ],
    relatedBlog: {
      title: "SFBB Daily Kitchen Opening and Closing Checklist Guide",
      slug: "sfbb-daily-kitchen-opening-closing-checklist-guide"
    }
  },
  "restaurant-equipment-list": {
    directAnswer:
      "A restaurant equipment list details all commercial machinery, cooking appliances, refrigeration assets, warewashing equipment, and smallwares required to operate a licensed food service business. It provides specification, maintenance schedules, power requirements, and asset tags for kitchen fit-outs and audits.",
    howTo: [
      "Categorise equipment into operational zones: heavy cooking line, walk-in/reach-in cold storage, prep area, warewashing, and bar.",
      "Record manufacturer model numbers, serial numbers, voltage/gas phase requirements, and installation commission dates.",
      "Document scheduled preventative maintenance intervals for refrigeration condenser cleaning, water filter swaps, and hood servicing.",
      "Establish statutory test certificates on file: Gas Safe commercial safety certificate, PAT electrical test, and extraction duct degrease certification.",
      "Maintain a smallwares inventory sheet tracking GN pans, cutting boards, chef knives, and calibrated digital thermometers."
    ],
    faqs: [
      {
        q: "What heavy cooking equipment is essential for a commercial restaurant kitchen?",
        a: "Standard line setups include a commercial gas range with convection oven base, flat-top griddle, charbroiler, twin-tank deep fat fryer with filtration, salamander grill, and high-performance kitchen ventilation hood with fire suppression."
      },
      {
        q: "What refrigeration equipment is required to satisfy UK environmental health standards?",
        a: "Kitchens require commercial fan-assisted walk-in cold rooms or upright reach-in chillers capable of maintaining food below 5.0°C, dedicated raw meat storage, commercial blast chillers for hot prep, and deep freezers operating at -18.0°C or colder."
      },
      {
        q: "How often must commercial restaurant kitchen equipment be serviced?",
        a: "Commercial gas equipment requires annual inspection and certification by a registered Gas Safe engineer. Ventilation extraction systems require annual or bi-annual professional TR19 duct degreasing to comply with commercial building insurance."
      },
      {
        q: "What warewashing equipment is needed to prevent cross-contamination?",
        a: "Commercial pass-through hood dishwashers with chemical sanitiser dosing or 82°C thermal rinse cycles, separate double-bowl pot wash sinks, and dedicated handwash basins equipped with sensor taps, warm water, antibacterial soap, and paper towels."
      },
      {
        q: "Why is a smallwares inventory list important for kitchen budgeting?",
        a: "Smallwares—including GN stainless containers, polycarbonate cambro containers, tongs, spatulas, and colour-coded chopping boards—suffer frequent wear and tear. Maintaining an asset list ensures timely replacement before food hygiene is compromised."
      }
    ],
    relatedTools: [
      "kitchen-utensils-list",
      "commercial-kitchen-cleaning-checklist",
      "kitchen-sop"
    ],
    relatedBlog: {
      title: "SFBB Daily Kitchen Opening and Closing Checklist Guide",
      slug: "sfbb-daily-kitchen-opening-closing-checklist-guide"
    }
  },
  "opening-a-restaurant-checklist": {
    directAnswer:
      "An opening a restaurant checklist guides entrepreneurs through the pre-launch stages of launching a food and beverage business. It covers statutory local authority food registration, premises licensing, HACCP safety management, commercial equipment fit-out, supplier contracts, and staff food hygiene training.",
    howTo: [
      "Register food premises with your local authority environmental health department at least 28 days before opening.",
      "Formulate and print your bespoke HACCP plan or FSA Safer Food, Better Business (SFBB) management system.",
      "Obtain required statutory permits: Premises Licence for alcohol/entertainment, planning permission (Class E/Sui Generis), and PPL/PRS music licences.",
      "Complete commercial kitchen build-out: non-slip flooring, stainless steel splashbacks, ventilation hoods, and pest proofing.",
      "Train and certify all food handling staff in Level 2 Food Safety and Natasha's Law allergen management prior to opening day."
    ],
    faqs: [
      {
        q: "When must I register a new restaurant with the local council in the UK?",
        a: "Under UK law (Regulation EC No 852/2004), you must register your food business with your local environmental health authority at least 28 days before trading or serving any food to the public."
      },
      {
        q: "What licences are needed before opening a restaurant serving alcohol?",
        a: "You need a Premises Licence from your local licensing authority, and at least one designated member of staff must hold an accredited Personal Licence to act as the Designated Premises Supervisor (DPS)."
      },
      {
        q: "Is an EHO inspection conducted before or after opening doors to customers?",
        a: "Environmental Health Officers (EHO) usually inspect food premises unannounced within 28 days to several months after trading begins. However, you must have your food safety management system (SFBB or HACCP) operating from day one."
      },
      {
        q: "What insurance policies are legally mandatory for a new restaurant?",
        a: "Employers' Liability Insurance is legally required as soon as you hire staff (minimum £5 million cover). Commercial Public and Product Liability Insurance and building/contents coverage are essential commercial requirements."
      },
      {
        q: "How many weeks before launch should mock service runs and soft openings begin?",
        a: "A soft opening with invited guests, family, and industry colleagues should run 7 to 14 days before the official launch. This stress-tests POS systems, kitchen cook times, table turnover rates, and front-of-house hospitality under live conditions."
      }
    ],
    relatedTools: [
      "starting-a-food-business-checklist",
      "restaurant-opening-checklist",
      "restaurant-sop"
    ],
    relatedBlog: {
      title: "SFBB Daily Kitchen Opening and Closing Checklist Guide",
      slug: "sfbb-daily-kitchen-opening-closing-checklist-guide"
    }
  }
'''

new_text = pre_text + batch22_items + "\n};\n\n" + text[fallback_pos:]

with open('src/data/tool_deep_content.ts', 'w', encoding='utf-8') as f:
    f.write(new_text)

print("Successfully injected Batch 22 into TOOL_DEEP_CONTENT.")
