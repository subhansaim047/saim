# -*- coding: utf-8 -*-
import json
import csv
import sys

# 1. Update DigitalChecklistTool.tsx
dcl_path = 'src/components/tools/DigitalChecklistTool.tsx'
with open(dcl_path, 'r', encoding='utf-8') as f:
    dcl_code = f.read()

new_tasks = '''
const RESTAURANT_MAINTENANCE_TASKS: CheckItem[] = [
  {
    id: "maint-1",
    category: "Daily HVAC & Refrigeration",
    task: "Walk-in chiller and freezer coils inspected, evaporator fans spinning freely, and door magnetic gaskets clean and airtight with zero frost build-up.",
    status: "pass",
    actionNotes: "Refrigeration seals and airflow verified"
  },
  {
    id: "maint-2",
    category: "Weekly Cookline Deep Clean",
    task: "Deep fat fryers boiled out, thermostatic controls calibrated, flat-top griddles scraped and seasoned, and range burner ports degreased.",
    status: "pass",
    actionNotes: "Fryer boil-out and griddle calibration complete"
  },
  {
    id: "maint-3",
    category: "Monthly Water Filtration",
    task: "Water softening and filtration cartridges replaced or inspected on ice machines, combi steamers, and espresso machines to prevent limescale scale.",
    status: "pass",
    actionNotes: "Combi oven water filter cartridge swapped"
  },
  {
    id: "maint-4",
    category: "Quarterly Extraction Degreasing",
    task: "Kitchen extraction canopies, grease baffle filters, and vertical duct risers degreased and certified to BESA TR19 fire safety standards.",
    status: "pass",
    actionNotes: "TR19 duct degreasing certificate on file"
  },
  {
    id: "maint-5",
    category: "Semi-Annual Suppression Inspection",
    task: "Ansul / R-102 wet chemical fire suppression discharge nozzles inspected, pull-stations tested, and emergency gas shut-off valve verified.",
    status: "pass",
    actionNotes: "6-month Ansul service tag signed"
  },
  {
    id: "maint-6",
    category: "Annual Statutory Certification",
    task: "Commercial Gas Safe safety inspection, Portable Appliance Testing (PAT), and fixed electrical wiring inspection (EICR) completed.",
    status: "pass",
    actionNotes: "Gas Safe and PAT certificates updated"
  }
];

const RESTAURANT_INVENTORY_TASKS: CheckItem[] = [
  {
    id: "inv-1",
    category: "Walk-In Chiller Protein Pars",
    task: "Count high-value chilled proteins (prime steaks, poultry, fish fillets) against minimum par levels; confirm storage below 5.0°C.",
    status: "pass",
    actionNotes: "Chilled proteins audited against par counts"
  },
  {
    id: "inv-2",
    category: "Deep Freezer Stock Audit",
    task: "Audit frozen seafood, frozen bakery, and batch-prepped sauces; confirm FIFO stock rotation and continuous storage below -18.0°C.",
    status: "pass",
    actionNotes: "Freezer inventory rotated with FIFO facing"
  },
  {
    id: "inv-3",
    category: "Dry Storage Par Levels",
    task: "Reconcile dry pantry goods (flour, oils, grains, spices, canned goods) and flag items approaching minimum replenishment thresholds.",
    status: "pass",
    actionNotes: "Dry store replenishment re-order logged"
  },
  {
    id: "inv-4",
    category: "Bar & Cellar Inventory",
    task: "Audit draught beer kegs, premium spirits, liqueurs, and wine cellar cases against POS sales depletion reports to detect inventory shrinkage.",
    status: "pass",
    actionNotes: "Keg weights and spirit dip-levels reconciled"
  },
  {
    id: "inv-5",
    category: "Chemicals & Hygiene Supplies",
    task: "Count warewashing chemicals, food-grade surface sanitisers (BS EN 1276), blue roll, and disposable food handler gloves.",
    status: "pass",
    actionNotes: "Sanitiser stock verified adequate for 2 weeks"
  },
  {
    id: "inv-6",
    category: "Waste & Spoilage Reconciliation",
    task: "Record kitchen prep trim loss, expired items, and customer return waste on the daily waste sheet before finalizing stock valuation.",
    status: "pass",
    actionNotes: "Daily kitchen waste log reconciled with chef"
  }
];

const RESTAURANT_SCHEDULE_TASKS: CheckItem[] = [
  {
    id: "sched-1",
    category: "Sales & Covers Forecasting",
    task: "Forecast weekly covers and revenue per service shift to set targeted labour cost percentages (target 28% to 32% of projected turnover).",
    status: "pass",
    actionNotes: "Labour budget model aligned with sales forecast"
  },
  {
    id: "sched-2",
    category: "BOH Kitchen Rota Coverage",
    task: "Schedule Head Chef, sous chefs, line cooks, kitchen porters, and prep leads ensuring full line coverage across lunch and dinner services.",
    status: "pass",
    actionNotes: "Cookline station coverage verified"
  },
  {
    id: "sched-3",
    category: "FOH Hospitality Rota Coverage",
    task: "Assign hosts, servers, runners, bartenders, and floor managers matched to expected table turnover and reservation density.",
    status: "pass",
    actionNotes: "Peak Saturday shift fully staffed with backup runner"
  },
  {
    id: "sched-4",
    category: "Working Time Regulations 1998",
    task: "Audit scheduled shifts ensuring compliance with UK Working Time Regulations: maximum 48-hour week and mandatory 11-hour rest between shifts.",
    status: "pass",
    actionNotes: "11-hour rest intervals between closing and opening verified"
  },
  {
    id: "sched-5",
    category: "Shift Trades & Leave Requests",
    task: "Review and approve employee holiday requests, sick cover replacements, and shift trade authorizations before final schedule lock.",
    status: "pass",
    actionNotes: "All leave requests reconciled on rota"
  },
  {
    id: "sched-6",
    category: "Rota Publication & Dispatch",
    task: "Publish finalized weekly schedule at least 7 to 14 days in advance to employee mobile app and display printed copy on kitchen staff noticeboard.",
    status: "pass",
    actionNotes: "Weekly rota published to team portal"
  }
];

const KITCHEN_PREP_LIST_TASKS: CheckItem[] = [
  {
    id: "prep-1",
    category: "Morning Cover Par Planning",
    task: "Review daily reservations, VIP covers, and catering orders to calculate required batch prep pars across all kitchen stations.",
    status: "pass",
    actionNotes: "Prep pars calculated for 160 covers"
  },
  {
    id: "prep-2",
    category: "Hot Cookline Prep Pars",
    task: "Simmer stocks, portion prime steaks, truss poultry, batch reduction sauces, and blanch cookline vegetables needed for saute and grill lines.",
    status: "pass",
    actionNotes: "Sauces and stock reductions completed"
  },
  {
    id: "prep-3",
    category: "Cold Larder & Garde Manger",
    task: "Wash, dry, and spin salad greens, slice charcuterie, dress terrines, and portion chilled starters into stainless GN containers.",
    status: "pass",
    actionNotes: "Larder station mise-en-place fully stocked"
  },
  {
    id: "prep-4",
    category: "Pastry & Dessert Station",
    task: "Bake fresh service breads, portion cheesecakes and tarts, whip pastry creams, and refresh dessert garnish wells.",
    status: "pass",
    actionNotes: "Service bread rolls and desserts prepped"
  },
  {
    id: "prep-5",
    category: "90-Minute Cooling Window",
    task: "Ensure all hot cooked prep batches are cooled from 60°C to below 8°C (ideally below 5°C) within 90 minutes before walk-in chiller storage.",
    status: "pass",
    actionNotes: "Blast chiller cooling logs verified within 70 minutes"
  },
  {
    id: "prep-6",
    category: "Day-Dot & Natasha's Law Labelling",
    task: "Affix day-dot label with prep date, use-by date, preparer initials, and 14 bold statutory allergen declarations on every container.",
    status: "pass",
    actionNotes: "All containers labelled with batch dates and allergens"
  }
];

const COOKING_LOG_TASKS: CheckItem[] = [
  {
    id: "cook-1",
    category: "Probe Thermometer Calibration",
    task: "Calibrate digital probe thermometer using boiling water (99°C to 101°C) or crushed melting ice (-1°C to +1°C) prior to start of cooking service.",
    status: "pass",
    actionNotes: "Ice point checked at 0.2°C; probe sanitised"
  },
  {
    id: "cook-2",
    category: "Poultry Core Temperature Check",
    task: "Insert probe into the thickest part of chicken, turkey, or duck; confirm core temperature reaches minimum 75°C for 30 seconds (or 70°C for 2 min).",
    status: "pass",
    actionNotes: "Roast chicken breast reached 77.4°C for 45s"
  },
  {
    id: "cook-3",
    category: "Minced Meat & Burger Lethality",
    task: "Verify core temperature of beef patties, sausages, and minced meat dishes reaches 75°C for 30 seconds to ensure destruction of pathogenic E. coli.",
    status: "pass",
    actionNotes: "Burger patty core confirmed 76.1°C"
  },
  {
    id: "cook-4",
    category: "Pork, Game & Stew Casseroles",
    task: "Confirm core temperature of pork joints, braised game meats, and casseroles exceeds 75°C for 30 seconds before serving or hot-holding.",
    status: "pass",
    actionNotes: "Braised pork shoulder core reached 78.5°C"
  },
  {
    id: "cook-5",
    category: "Scottish Reheating Critical Limit",
    task: "For reheated dishes (soups, stews, curries), ensure core temperature reaches a minimum of 82°C (Food Hygiene Scotland Regulations 2006).",
    status: "pass",
    actionNotes: "Reheated soup core reached 84.0°C"
  },
  {
    id: "cook-6",
    category: "Corrective Action & Probe Hygiene",
    task: "If core temperature is under critical limit, return dish to heat immediately and re-test; sanitise probe with food-safe wipe between food items.",
    status: "pass",
    actionNotes: "Probe sanitising wipes verified BS EN 1276"
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

new_detection = '''const isMaintenance =
    templateTitle.toLowerCase().includes("maintenance") ||
    (templateId && templateId.includes("maintenance"));
  const isInventory =
    templateTitle.toLowerCase().includes("inventory") ||
    (templateId && templateId.includes("inventory"));
  const isSchedule =
    templateTitle.toLowerCase().includes("schedule") ||
    templateTitle.toLowerCase().includes("rota") ||
    (templateId && templateId.includes("schedule"));
  const isPrepList =
    templateTitle.toLowerCase().includes("prep list") ||
    templateTitle.toLowerCase().includes("prep-list") ||
    (templateId && templateId.includes("prep-list"));
  const isCookingLog =
    templateTitle.toLowerCase().includes("cooking log") ||
    templateTitle.toLowerCase().includes("cooking-log") ||
    (templateId && templateId.includes("cooking-log"));
  '''

dcl_code = dcl_code[:det_pos] + new_detection + dcl_code[det_pos:]

# Add returns inside getInitialTasks
ret_anchor = 'if (isBrcAudit) return BRC_AUDIT_TASKS;'
ret_pos = dcl_code.find(ret_anchor)
if ret_pos == -1:
    raise Exception("Could not find if (isBrcAudit) return BRC_AUDIT_TASKS; in DigitalChecklistTool.tsx")

new_returns = '''if (isMaintenance) return RESTAURANT_MAINTENANCE_TASKS;
    if (isInventory) return RESTAURANT_INVENTORY_TASKS;
    if (isSchedule) return RESTAURANT_SCHEDULE_TASKS;
    if (isPrepList) return KITCHEN_PREP_LIST_TASKS;
    if (isCookingLog) return COOKING_LOG_TASKS;
    '''

dcl_code = dcl_code[:ret_pos] + new_returns + dcl_code[ret_pos:]

with open(dcl_path, 'w', encoding='utf-8') as f:
    f.write(dcl_code)
print("Updated DigitalChecklistTool.tsx with Batch 25 tasks and routing.")

# 2. Update core_metadata.json
meta_path = 'src/data/core_metadata.json'
with open(meta_path, 'r', encoding='utf-8') as f:
    core_meta = json.load(f)

core_meta["restaurant-maintenance-checklist"] = {
    "title": "Free Restaurant Maintenance Checklist | Saim Dev",
    "desc": "Keep commercial kitchen equipment and facilities running reliably. Free preventative maintenance checklist covering HVAC, refrigeration, and Gas Safe.",
    "howTo": [
        "Audit daily refrigeration: inspect walk-in chiller gaskets, evaporator fan motors, and coil frost build-up.",
        "Execute weekly cookline maintenance: boil out deep fat fryers and degrease griddles and range burners.",
        "Inspect monthly water filtration cartridges on ice makers, combi ovens, and commercial coffee machines.",
        "Verify quarterly extraction degreasing certificates conforming to BESA TR19 commercial kitchen standards.",
        "Review annual Gas Safe commercial appliance certificates, PAT electrical tests, and fixed wire EICR reports."
    ]
}

core_meta["restaurant-inventory-template"] = {
    "title": "Free Restaurant Inventory Template Guide | Saim Dev",
    "desc": "Track commercial kitchen food stock, par levels, and inventory costs. Free customisable restaurant inventory sheet covering cold storage and dry stock.",
    "howTo": [
        "Audit cold storage proteins: count steaks, poultry, and fish in walk-in chillers (maintained below 5.0°C).",
        "Inspect deep freezer inventory: verify frozen stock counts, FIFO rotation, and continuous storage below -18.0°C.",
        "Reconcile dry pantry supplies: count bulk grains, oils, seasonings, and flour against minimum par levels.",
        "Audit cellar and bar stock: log draught keg volumes, spirit bottles, and wines against POS sales records.",
        "Calculate total food inventory value, flag items needing replenishment, and submit daily food waste deductions."
    ]
}

core_meta["restaurant-schedule-template"] = {
    "title": "Free Restaurant Staff Schedule Template | Saim Dev",
    "desc": "Streamline weekly FOH and BOH hospitality staff scheduling. Free restaurant rota template with shift planning, rest break rules, and labour budgets.",
    "howTo": [
        "Forecast weekly covers and revenue per shift to establish targeted labour percentage targets (28-32%).",
        "Schedule back-of-house kitchen brigade: ensure Head Chef, line cooks, and kitchen porters cover peak rush.",
        "Assign front-of-house staff: schedule hosts, servers, runners, and bartenders based on table bookings.",
        "Audit shifts against Working Time Regulations 1998: ensure minimum 11 consecutive hours rest between shifts.",
        "Publish finalised weekly rota at least 7 to 14 days in advance to staff mobile portal and kitchen noticeboard."
    ]
}

core_meta["kitchen-prep-list-template"] = {
    "title": "Free Kitchen Prep List Checklist Guide | Saim Dev",
    "desc": "Organise daily commercial kitchen culinary prep stations with par levels. Free kitchen prep sheet covering batch pars, cooling times, and allergens.",
    "howTo": [
        "Review daily booking forecast to determine required prep par quantities for lunch and dinner services.",
        "Prep hot cookline mise-en-place: portion steaks, truss poultry, simmer sauces, and blanch cookline vegetables.",
        "Stock cold larder station: wash and spin salad greens, slice charcuterie, and portion chilled appetisers.",
        "Ensure all cooked hot prep is cooled from 60°C to below 8°C (ideally <5°C) within the statutory 90-minute limit.",
        "Affix day-dot labels with prep date, use-by date, chef initials, and 14 bold statutory allergen declarations."
    ]
}

core_meta["cooking-log-template"] = {
    "title": "Free Cooking Temperature Log Sheet | Saim Dev",
    "desc": "Record daily commercial kitchen cooking core temperatures for EHO audits. Free cooking temperature log sheet with FSA 75°C critical limit validation.",
    "howTo": [
        "Calibrate digital probe thermometer using melting ice (0.0°C) or boiling water (100.0°C) before service.",
        "Sanitise probe with food-safe probe wipe conforming to BS EN 1276 / 13697 before taking core temperatures.",
        "Insert probe into thickest core of meat/poultry and verify reading reaches at least 75°C for 30s or 70°C for 2 min.",
        "For Scottish food businesses, verify pre-cooked reheated dishes reach a minimum core temperature of 82°C.",
        "Log dish name, batch number, core temperature, time, and chef signature; initiate corrective action if under temp."
    ]
}

with open(meta_path, 'w', encoding='utf-8') as f:
    json.dump(core_meta, f, indent=2, ensure_ascii=False)
print("Updated core_metadata.json for Batch 25 tools.")

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

batch25_deep_items = '''
  "restaurant-maintenance-checklist": {
    directAnswer:
      "A restaurant maintenance checklist organizes preventative upkeep schedules for commercial kitchen equipment, refrigeration systems, HVAC ventilation, plumbing, and structural fabric. Implementing structured daily, weekly, monthly, quarterly, and annual maintenance checks prevents catastrophic equipment failures during peak service, ensures energy efficiency, and satisfies statutory Gas Safe and fire safety regulations.",
    howTo: [
      "Daily maintenance: clean refrigeration condenser vents, inspect walk-in chiller door gaskets, and verify dishwasher wash/rinse operating temperatures.",
      "Weekly maintenance: boil out and descale deep fat fryers, clean griddle surfaces, and flush beer draft lines.",
      "Monthly maintenance: inspect water softening cartridges on combi steamers and ice machines, and test kitchen emergency gas shut-off valves.",
      "Quarterly maintenance: service HVAC air makeup units and arrange professional TR19 grease extraction duct degreasing.",
      "Annual statutory maintenance: complete Gas Safe CP42 commercial appliance certification, portable appliance testing (PAT), and fixed wiring inspections."
    ],
    faqs: [
      {
        q: "Why is preventative maintenance critical for restaurant refrigeration?",
        a: "Dirty condenser coils cause compressor motors to overheat and consume up to 35% more electricity. If a walk-in compressor fails overnight, thousands of pounds of perishable food stock can spoil or breach the legal 8.0°C chilled food threshold."
      },
      {
        q: "What commercial kitchen maintenance tasks are legally mandatory in the UK?",
        a: "Annual Gas Safe inspection of commercial gas appliances (Gas Safety Installation and Use Regulations 1998), TR19 certified kitchen extraction duct cleaning for fire insurance, and annual testing of portable electrical equipment (PAT)."
      },
      {
        q: "How often should commercial deep fat fryers undergo boil-out maintenance?",
        a: "Commercial fryers should undergo a thorough boil-out cleaning using dedicated fryer cleaner chemicals once every 1 to 2 weeks, depending on oil usage volume, to remove carbonized grease buildup on heating elements."
      },
      {
        q: "How can regular equipment maintenance lower restaurant operating costs?",
        a: "Descaling combi ovens and steamers reduces heating element burn-out, properly sealed walk-in doors prevent compressor burnout, and calibrated cooking thermostats prevent unnecessary gas and electricity consumption."
      },
      {
        q: "What should be included in a kitchen equipment asset register?",
        a: "Each machine should have an asset tag recording manufacturer, model number, serial number, electrical/gas specifications, purchase date, warranty expiration date, service contractor contact, and preventative maintenance logs."
      }
    ],
    relatedTools: [
      "restaurant-equipment-list",
      "commercial-kitchen-cleaning-checklist",
      "restaurant-fire-inspection-checklist"
    ],
    relatedBlog: {
      title: "SFBB Daily Kitchen Opening and Closing Checklist Guide",
      slug: "sfbb-daily-kitchen-opening-closing-checklist-guide"
    }
  },
  "restaurant-inventory-template": {
    directAnswer:
      "A restaurant inventory template provides a systematic spreadsheet and digital count sheet for auditing food, beverage, and cleaning stock across commercial food establishments. It tracks inventory on hand, unit costs, par levels, usage rates, and food cost variances across walk-in chillers, deep freezers, dry storage, and bar cellars.",
    howTo: [
      "Organize stock sheet by physical location: mirror the layout of dry storage shelves, walk-in chillers (0-5°C), deep freezers (-18°C), and bar storerooms.",
      "Count inventory consistently: conduct physical inventory counts at the same time each week (e.g. Sunday night after closing or Monday morning before deliveries).",
      "Record standard units of measure: log items in unambiguous inventory units (e.g. kilograms for meat, litres for milk, cases for canned produce).",
      "Reconcile against POS depletion data: compare physical ending inventory against expected theoretical inventory calculated by POS recipe sales.",
      "Calculate food cost variance and waste: identify shrinkage, over-portioning, or inventory spoilage and adjust future purchasing orders accordingly."
    ],
    faqs: [
      {
        q: "How frequently should a restaurant conduct physical food inventory?",
        a: "High-volume commercial kitchens perform weekly inventory counts on perishable and high-cost proteins (meat, poultry, seafood, dairy), and monthly counts on dry goods, frozen inventory, and cleaning supplies."
      },
      {
        q: "What is the difference between physical inventory and theoretical inventory?",
        a: "Physical inventory is the actual counted quantity of goods present in the kitchen. Theoretical inventory is what should be on hand based on starting inventory plus received purchases minus POS sales. The difference represents inventory variance or waste."
      },
      {
        q: "What is an inventory par level in a restaurant?",
        a: "A par level is the minimum quantity of an ingredient required on hand to meet customer demand between delivery cycles, with a safety buffer to prevent stockouts without causing food spoilage."
      },
      {
        q: "How does proper inventory management protect food safety?",
        a: "Accurate inventory tracking enforces First-In, First-Out (FIFO) stock rotation, ensures food items approaching use-by dates are utilized promptly, and prevents overcrowding in walk-in chillers which impedes proper airflow."
      },
      {
        q: "How does tracking food inventory tie into food cost percentage?",
        a: "Cost of Goods Sold (COGS) is calculated as: Beginning Inventory + Purchases - Ending Inventory. Dividing COGS by total food revenue gives the restaurant's actual food cost percentage (target 28% to 32%)."
      }
    ],
    relatedTools: [
      "food-cost-calculator",
      "recipe-batch-calculator",
      "restaurant-equipment-list"
    ],
    relatedBlog: {
      title: "Mastering Food Cost Percentage: Commercial Kitchen Calculator",
      slug: "mastering-food-cost-percentage-commercial-kitchen-calculator"
    }
  },
  "restaurant-schedule-template": {
    directAnswer:
      "A restaurant schedule template organizes front-of-house (FOH) and back-of-house (BOH) staff rotas across weekly shifts. It matches staffing levels to forecasted guest covers, tracks labour cost percentages, and enforces compliance with UK Working Time Regulations 1998 regarding maximum weekly hours, rest breaks, and minimum intervals between shifts.",
    howTo: [
      "Forecast shift demand: analyze historical sales trends, reservations, weather, and local events to project required front-of-house and kitchen labour hours.",
      "Schedule core station leads: assign Head Chef, sous chefs, head bartender, and lead floor manager before scheduling part-time support staff.",
      "Balance station staffing: ensure appropriate server-to-table ratios (typically 4-5 tables per server) and line cook staffing based on expected ticket volume.",
      "Audit UK employment compliance: verify no employee exceeds the 48-hour working week without an opt-out agreement and ensure 11 consecutive hours of daily rest.",
      "Publish schedule 7 to 14 days in advance: distribute finalized rota via employee mobile app and display printed A4 sheet on kitchen noticeboards."
    ],
    faqs: [
      {
        q: "What is an acceptable labour cost percentage for a restaurant?",
        a: "Prime labour costs in full-service restaurants typically target 28% to 35% of total gross sales, while quick-service takeaways and fast-casual concepts target 22% to 28%."
      },
      {
        q: "What rest break rules apply to restaurant workers under UK law?",
        a: "Under the Working Time Regulations 1998, workers are entitled to an uninterrupted 20-minute rest break during shifts lasting longer than 6 hours, 11 consecutive hours of daily rest between shifts, and 24 hours of uninterrupted weekly rest."
      },
      {
        q: "How can staggered shifts prevent labor overspending during quiet hours?",
        a: "Rather than scheduling all staff for full 8-hour shifts, managers use staggered start times (e.g. prep team at 9 AM, opening servers at 11:30 AM, rush support at 12:30 PM) and cut staff as cover volume diminishes."
      },
      {
        q: "How far in advance should restaurant schedules be published?",
        a: "Best practice is to publish weekly rotas at least 7 to 14 days in advance. Consistent scheduling reduces last-minute shift call-offs, improves staff morale, and lowers employee turnover."
      },
      {
        q: "How do split shifts work in hospitality scheduling?",
        a: "A split shift involves working two distinct periods on the same day (e.g. 11:00 AM - 3:00 PM for lunch, and 6:00 PM - 10:30 PM for dinner) separated by an unpaid break of several hours. Rest periods must be monitored carefully."
      }
    ],
    relatedTools: [
      "restaurant-opening-checklist",
      "kitchen-sop",
      "restaurant-sop"
    ],
    relatedBlog: {
      title: "How to Get a 5-Star Food Hygiene Rating: UK EHO Checklist",
      slug: "uk-food-hygiene-rating-scheme-5-star-checklist"
    }
  },
  "kitchen-prep-list-template": {
    directAnswer:
      "A kitchen prep list template structures daily culinary production schedules for commercial brigade kitchens. It details par quantities, ingredient portioning, batch cooking tasks, allergen controls, and 90-minute cooling compliance across kitchen prep stations—including grill, saute, cold larder, pastry, and butcher stations.",
    howTo: [
      "Review daily cover pars: check morning reservation sheets and event bookings to calculate batch production quantities for each menu item.",
      "Assign station responsibilities: allocate specific prep lists to saute, grill, fry, salad/larder, pastry, and prep cook stations.",
      "Execute batch prep with allergen controls: follow strict colour-coded board rules and prepare allergen-free recipes before handling gluten, dairy, or nuts.",
      "Monitor statutory food cooling: cool hot batch preps (stocks, soups, braised meats) from 60°C to below 8°C (ideally <5°C) within 90 minutes before walk-in storage.",
      "Label and store prepped items: attach day-dot labels with item name, prep date, use-by date, chef initials, and bold statutory allergen declarations."
    ],
    faqs: [
      {
        q: "What is a prep par in a commercial kitchen?",
        a: "A prep par is the predetermined quantity of prepped ingredients, sauces, or portions required at a kitchen station to smoothly execute service without running out of stock or over-prepping food that leads to spoilage."
      },
      {
        q: "Why is the 90-minute cooling rule vital during kitchen prep?",
        a: "Under UK Food Standards Agency guidelines, warm cooked foods passing through the danger zone (8°C to 60°C) must be cooled to below 8°C within 90 minutes to prevent the germination and proliferation of spore-forming pathogens such as Clostridium perfringens and Bacillus cereus."
      },
      {
        q: "How should prepped foods be dated and rotated in walk-in chillers?",
        a: "Commercial kitchens use colour-coded day-dot stickers indicating the day of the week the item was prepped, along with the calculated 'Use-By' date (typically prep day + 2 days for high-risk foods, or 3 days maximum under SFBB)."
      },
      {
        q: "How does a structured prep list prevent cross-contamination?",
        a: "Prep lists sequence culinary tasks to prevent cross-contact—scheduling vegetable and ready-to-eat salad prep first in the morning before handling raw poultry or meats, followed by complete sanitisation of cutting boards and slicers."
      },
      {
        q: "Can this kitchen prep list template be adapted for caterers and dark kitchens?",
        a: "Yes. The template supports batch scaling for high-volume off-premise catering, prep kitchens, and virtual food delivery brands operating multi-concept production lines."
      }
    ],
    relatedTools: [
      "recipe-batch-calculator",
      "cooking-log-template",
      "opening-and-closing-checklist-template"
    ],
    relatedBlog: {
      title: "Commercial Kitchen Food Cooling Temperature Guide",
      slug: "commercial-kitchen-food-cooling-temperature-guide"
    }
  },
  "cooking-log-template": {
    directAnswer:
      "A cooking log template records daily core cooking and reheating temperatures in commercial food kitchens to verify statutory microbiological lethality. Aligned with UK Food Standards Agency (FSA) standards and Regulation (EC) No 852/2004, it documents time, batch numbers, internal core temperatures (minimum 75°C for 30 seconds or 70°C for 2 minutes; 82°C in Scotland), probe calibration, and corrective actions.",
    howTo: [
      "Calibrate digital probe thermometer: verify probe accuracy in boiling water (99°C to 101°C) or crushed melting ice (-1°C to +1°C) before service.",
      "Sanitise probe needle: clean and disinfect probe needle using food-safe antibacterial probe wipes conforming to BS EN 1276.",
      "Insert probe into core: insert probe into the thickest part of the meat, poultry, or casserole, avoiding contact with bones or roasting pans.",
      "Verify critical limit lethality: confirm internal temperature reaches at least 75°C for 30 seconds, 70°C for 2 minutes, or 82°C for Scottish reheated food.",
      "Log data and corrective actions: record food name, batch, time, temperature, and initials; if temperature is low, continue cooking and re-test."
    ],
    faqs: [
      {
        q: "What is the legal core cooking temperature requirement in the UK?",
        a: "The UK Food Standards Agency recognizes cooking food to an internal core temperature of 70°C for 2 minutes, or 75°C for 30 seconds (or equivalent time/temperature combinations such as 80°C for 6 seconds) as delivering a verified 6-log (99.9999%) reduction in harmful pathogens such as Salmonella, Listeria, and E. coli."
      },
      {
        q: "What is the Scottish reheating temperature regulation?",
        a: "Under the Food Hygiene (Scotland) Regulations 2006 (Schedule 4), pre-cooked food being reheated must reach a minimum internal core temperature of 82°C unless the business can prove an equivalent safe lethality combination."
      },
      {
        q: "How frequently must a commercial kitchen complete a cooking temperature log?",
        a: "Kitchens should log core cooking temperatures for every major batch of cooked high-risk food (poultry, minced meats, joints, gravies, stews) prepared during each service shift, as evidence of HACCP CCP monitoring."
      },
      {
        q: "How often should digital kitchen thermometers be calibrated?",
        a: "Thermometer probes should undergo monthly calibration testing using boiling water and crushed melting ice, with results recorded in a calibration log. Probes showing an error greater than ±0.5°C should be serviced or replaced."
      },
      {
        q: "How long must completed cooking temperature logs be archived for EHO inspections?",
        a: "Under UK due diligence defence (Food Safety Act 1990), completed temperature monitoring sheets and SFBB diary pages should be retained on file for at least 12 months for review during council Environmental Health Officer audits."
      }
    ],
    relatedTools: [
      "meat-cooking-temperatures",
      "poultry-cooking-temperatures",
      "freezer-temperature-chart"
    ],
    relatedBlog: {
      title: "Commercial Kitchen Food Cooling Temperature Guide",
      slug: "commercial-kitchen-food-cooling-temperature-guide"
    }
  }
'''

new_deep_code = pre_text + batch25_deep_items + "\n};\n\n" + deep_code[fallback_pos:]

with open(deep_path, 'w', encoding='utf-8') as f:
    f.write(new_deep_code)
print("Updated tool_deep_content.ts with Batch 25 deep content.")

# 4. Update tracker
tracker_path = 'audit/tools-seo-tracker.json'
with open(tracker_path, 'r', encoding='utf-8') as f:
    tracker = json.load(f)

batch25_data = {
    "restaurant-maintenance-checklist": {
        "priority_rank": 121,
        "target_keyword": "restaurant maintenance checklist",
        "top_5_competitors": [
            "https://pos.toasttab.com/blog/on-the-line/restaurant-maintenance-checklist",
            "https://safetyculture.com/checklists/restaurant-preventative-maintenance/",
            "https://www.touchbistro.com/blog/restaurant-maintenance-checklist/",
            "https://www.lightspeedhq.com/blog/restaurant-maintenance-checklist/",
            "https://www.fooddocs.com/post/restaurant-maintenance-checklist"
        ],
        "differentiators": [
            "Multi-frequency preventative maintenance intervals: daily, weekly, monthly, quarterly, and annual Gas Safe certification",
            "Asset tagging and equipment warranty/service contract tracking",
            "Real-time pass/fail/pending interactive status tracking with technician log notes",
            "Zero login, zero paywall, fully accessible interactive browser tool",
            "Clean A4 PDF export formatted for facility audits and insurance compliance"
        ]
    },
    "restaurant-inventory-template": {
        "priority_rank": 122,
        "target_keyword": "restaurant inventory template",
        "top_5_competitors": [
            "https://pos.toasttab.com/blog/on-the-line/restaurant-inventory-template",
            "https://www.touchbistro.com/blog/restaurant-inventory-spreadsheet-template/",
            "https://www.lightspeedhq.com/blog/restaurant-inventory-management-template/",
            "https://www.7shifts.com/blog/restaurant-inventory-sheet/",
            "https://www.fooddocs.com/post/restaurant-inventory-template"
        ],
        "differentiators": [
            "Categorised stock auditing: dry store, walk-in chiller (0-5°C), deep freezer (-18°C), bar/cellar, and chemicals",
            "Standard unit-of-measure logging with par-level re-order threshold alerts",
            "Direct cross-links to interactive Food Cost Calculator and Recipe Batch Calculator",
            "Local storage persistence so inventory isn't lost on browser refresh",
            "1-click printable count sheet and CSV export"
        ]
    },
    "restaurant-schedule-template": {
        "priority_rank": 123,
        "target_keyword": "restaurant schedule template",
        "top_5_competitors": [
            "https://www.7shifts.com/blog/restaurant-schedule-template/",
            "https://pos.toasttab.com/blog/on-the-line/restaurant-schedule-template",
            "https://www.touchbistro.com/blog/restaurant-employee-schedule-template/",
            "https://www.wheniwork.com/templates/restaurant-schedule-template",
            "https://www.lightspeedhq.com/blog/restaurant-scheduling-template/"
        ],
        "differentiators": [
            "Shift-based scheduling covering FOH and BOH brigade matched to sales/covers forecasts",
            "Working Time Regulations 1998 compliance checks (48-hour weekly max, mandatory 11-hour rest intervals)",
            "Target labour cost percentage forecasting (28-32% guideline)",
            "Free interactive shift builder with local storage and instant A4 rota print",
            "Zero signup gate or recurring SaaS subscription required"
        ]
    },
    "kitchen-prep-list-template": {
        "priority_rank": 124,
        "target_keyword": "kitchen prep list template",
        "top_5_competitors": [
            "https://pos.toasttab.com/blog/on-the-line/kitchen-prep-list-template",
            "https://www.touchbistro.com/blog/kitchen-prep-list-template/",
            "https://www.lightspeedhq.com/blog/restaurant-prep-list-template/",
            "https://www.fooddocs.com/post/kitchen-prep-list",
            "https://safetyculture.com/checklists/kitchen-prep-list/"
        ],
        "differentiators": [
            "Interactive culinary prep station routing: grill, saute, cold larder, pastry, and butcher prep",
            "Par-level calculations based on weekday vs weekend cover forecasts",
            "Natasha's Law allergen segregation notes and 90-minute cooling window reminders for hot prep",
            "Local storage persistence, custom item additions, and real-time completion progress",
            "Clean, watermark-free A4 PDF export designed for stainless-steel kitchen clipboards"
        ]
    },
    "cooking-log-template": {
        "priority_rank": 125,
        "target_keyword": "cooking log template",
        "top_5_competitors": [
            "https://www.fooddocs.com/post/cooking-temperature-log",
            "https://safetyculture.com/checklists/cooking-temperature-log/",
            "https://www.highspeedtraining.co.uk/hub/food-temperature-log-sheet/",
            "https://www.virtual-college.co.uk/resources/food-temperature-log-sheet",
            "https://www.ncass.org.uk/resources/daily-record-sheets/"
        ],
        "differentiators": [
            "Validated UK Food Standards Agency critical limits: 75°C core for 30 seconds or 70°C for 2 minutes",
            "Scottish 82°C reheating rule validation integrated",
            "Digital temperature probe input with instantaneous Pass / Corrective Action status evaluation",
            "Batch number, food item, core temp, probe sanitisation tick, and chef signature fields",
            "100% free interactive tool with unbranded A4 print format conforming to EHO due diligence requirements"
        ]
    }
}

for row in tracker:
    slug = row.get("slug")
    if slug in batch25_data:
        info = batch25_data[slug]
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
print(f"Batch 25 application complete! Total completed tools: {completed_count}/160")
