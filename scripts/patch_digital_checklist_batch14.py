# scripts/patch_digital_checklist_batch14.py
with open('src/components/tools/DigitalChecklistTool.tsx', 'r', encoding='utf-8') as f:
    dcl_content = f.read()

new_tasks_batch14 = """const MEAT_SLICER_CLEANING_TASKS: CheckItem[] = [
  {
    id: "slicer-1",
    category: "1. Electrical Isolation & Lockout",
    task: "Turn off slicer motor, unplug power lead from mains socket, and wrap cord to prevent liquid contact.",
    status: "pass",
    actionNotes: "Power cord unplugged and isolated"
  },
  {
    id: "slicer-2",
    category: "2. Blade Gauge Zero-Locking",
    task: "Turn thickness indexing gauge knob fully clockwise past zero until blade edge is fully shielded by the gauge plate.",
    status: "pass",
    actionNotes: "Blade thickness set to zero lock"
  },
  {
    id: "slicer-3",
    category: "3. Disassembly & PPE Protection",
    task: "Put on EN 388 Level 5 cut-resistant stainless mesh safety gloves; remove product chute, slice deflector, and center blade guard plate.",
    status: "pass",
    actionNotes: "Cut-resistant gloves worn; components removed"
  },
  {
    id: "slicer-4",
    category: "4. Detergent Wash & Gross Debris",
    task: "Wipe and scrub blade surfaces from center outwards with warm detergent solution (45°C–55°C) using non-scratch blue scouring pad; wash removed components in 3-sink bay.",
    status: "pass",
    actionNotes: "Blade wiped from center outward; chute washed"
  },
  {
    id: "slicer-5",
    category: "5. Chemical Disinfection (BS EN 1276)",
    task: "Apply BS EN 1276 certified food-contact sanitiser to blade, gauge plate, and chassis; maintain minimum 30-second wet contact time; allow air drying.",
    status: "pass",
    actionNotes: "Sanitiser applied; 30s contact time observed"
  },
  {
    id: "slicer-6",
    category: "6. Reassembly & Lubrication",
    task: "Inspect blade for nicks or burrs; reassemble guard and carriage tightly; apply NSF H1 food-grade mineral oil to slide rods.",
    status: "pass",
    actionNotes: "Reassembled and lubricated with food-grade oil"
  }
];

const UTENSIL_CLEANING_TASKS: CheckItem[] = [
  {
    id: "ut-clean-1",
    category: "1. Pre-Scrape & Debris Disposal",
    task: "Scrape all residual food scraps, bones, and grease into organics waste bin; pre-rinse heavily soiled pots with warm spray.",
    status: "pass",
    actionNotes: "Plates and pots scraped and pre-rinsed"
  },
  {
    id: "ut-clean-2",
    category: "2. Sink 1: Detergent Wash (45°C–55°C)",
    task: "Submerge utensils in Sink 1 filled with clean warm water (45°C–55°C) and commercial degreasing detergent; scrub with colour-coded brushes.",
    status: "pass",
    actionNotes: "Wash water temperature verified at 48°C"
  },
  {
    id: "ut-clean-3",
    category: "3. Sink 2: Clean Potable Water Rinse",
    task: "Immerse washed utensils in Sink 2 filled with clean warm running water to remove all suspended detergent residue and organic matter.",
    status: "pass",
    actionNotes: "Utensils fully rinsed of detergent suds"
  },
  {
    id: "ut-clean-4",
    category: "4. Sink 3: Chemical or Thermal Disinfection",
    task: "Submerge in Sink 3 containing BS EN 1276 chemical sanitiser (contact time 30s) OR hot water sanitisation (minimum 82°C for 30 seconds).",
    status: "pass",
    actionNotes: "BS EN 1276 chemical sanitiser verified at 200ppm"
  },
  {
    id: "ut-clean-5",
    category: "5. Ambient Air Drying on Clean Racks",
    task: "Transfer sanitised utensils to wire shelving racks to air dry completely; NEVER use tea towels or cloth rags which recontaminate items.",
    status: "pass",
    actionNotes: "Air-drying on inverted stainless wire racks"
  },
  {
    id: "ut-clean-6",
    category: "6. Clean Storage & Cross-Contamination",
    task: "Store dried utensils in clean, enclosed cupboards or designated magnetic bars at least 15cm off the floor; purple allergen tools segregated.",
    status: "pass",
    actionNotes: "Stored in sanitised cupboard off floor"
  }
];

"""

# Insert new tasks before DEFAULT_GENERAL_TASKS
target_marker = "const DEFAULT_GENERAL_TASKS: CheckItem[] = ["
if target_marker in dcl_content:
    dcl_content = dcl_content.replace(target_marker, new_tasks_batch14 + target_marker)
    print("Inserted Batch 14 tasks arrays into DigitalChecklistTool")
else:
    print("Error: target_marker not found in DigitalChecklistTool")

# Add booleans in DigitalChecklistTool
old_bools = """  const isSsop =
    templateTitle.toLowerCase().includes("ssop") ||
    templateTitle.toLowerCase().includes("sanitation standard") ||
    templateTitle.toLowerCase().includes("sanitation sop");"""

new_bools = """  const isMeatSlicer =
    templateTitle.toLowerCase().includes("meat slicer") ||
    templateTitle.toLowerCase().includes("slicer");
  const isUtensilCleaning =
    templateTitle.toLowerCase().includes("dirty utensils") ||
    templateTitle.toLowerCase().includes("cleaning and sanitizing") ||
    (templateTitle.toLowerCase().includes("utensil") && templateTitle.toLowerCase().includes("cleaning"));
  const isSsop =
    templateTitle.toLowerCase().includes("ssop") ||
    templateTitle.toLowerCase().includes("sanitation standard") ||
    templateTitle.toLowerCase().includes("sanitation sop");"""

if old_bools in dcl_content:
    dcl_content = dcl_content.replace(old_bools, new_bools)
    print("Added isMeatSlicer and isUtensilCleaning booleans to DigitalChecklistTool")
else:
    print("Error: old_bools not found in DigitalChecklistTool")

# Update returns in DigitalChecklistTool
old_returns = """    if (isSsop) return SSOP_PROCEDURES_TASKS;"""
new_returns = """    if (isMeatSlicer) return MEAT_SLICER_CLEANING_TASKS;
    if (isUtensilCleaning) return UTENSIL_CLEANING_TASKS;
    if (isSsop) return SSOP_PROCEDURES_TASKS;"""

if old_returns in dcl_content:
    dcl_content = dcl_content.replace(old_returns, new_returns)
    print("Updated task returns in DigitalChecklistTool")
else:
    print("Error: old_returns not found in DigitalChecklistTool")

with open('src/components/tools/DigitalChecklistTool.tsx', 'w', encoding='utf-8') as f:
    f.write(dcl_content)

# Update TemplateDetailPage.tsx for hot-holding and isChecklistOrLog
with open('src/components/TemplateDetailPage.tsx', 'r', encoding='utf-8') as f:
    page_content = f.read()

# Update isMasterFoodTempTool to include hot-holding
old_master = """  const isMasterFoodTempTool =
    template.slug === "food-temperature-chart" ||
    template.slug === "food-temperature" ||
    template.slug === "food-temperature-log" ||
    template.slug === "food-temperatures-poster" ||
    template.slug.includes("food-temperatures-poster") ||
    template.slug === "danger-zone-for-food" ||
    template.slug.includes("danger-zone");"""

new_master = """  const isMasterFoodTempTool =
    template.slug === "food-temperature-chart" ||
    template.slug === "food-temperature" ||
    template.slug === "food-temperature-log" ||
    template.slug === "food-temperatures-poster" ||
    template.slug.includes("food-temperatures-poster") ||
    template.slug === "danger-zone-for-food" ||
    template.slug.includes("danger-zone") ||
    template.slug.includes("hot-holding");"""

if old_master in page_content:
    page_content = page_content.replace(old_master, new_master)
    print("Updated isMasterFoodTempTool with hot-holding in TemplateDetailPage")
else:
    print("Error: old_master not found in TemplateDetailPage")

# Update isChecklistOrLog
old_checklist = """    (template.type === "checklist" ||
      template.type === "log" ||
      template.slug.includes("checklist") ||
      template.slug.includes("log") ||
      template.slug.includes("schedule") ||
      template.slug.includes("sheet") ||
      template.slug.includes("opening") ||
      template.slug.includes("closing") ||
      template.slug.includes("sop") ||
      template.slug.includes("audit") ||
      template.slug.includes("delivery") ||
      template.slug.includes("inspection"));"""

new_checklist = """    (template.type === "checklist" ||
      template.type === "log" ||
      template.slug.includes("checklist") ||
      template.slug.includes("log") ||
      template.slug.includes("schedule") ||
      template.slug.includes("sheet") ||
      template.slug.includes("opening") ||
      template.slug.includes("closing") ||
      template.slug.includes("sop") ||
      template.slug.includes("audit") ||
      template.slug.includes("delivery") ||
      template.slug.includes("inspection") ||
      template.slug.includes("cleaning") ||
      template.slug.includes("slicer") ||
      template.slug.includes("utensil"));"""

if old_checklist in page_content:
    page_content = page_content.replace(old_checklist, new_checklist)
    print("Updated isChecklistOrLog in TemplateDetailPage")
else:
    print("Error: old_checklist not found in TemplateDetailPage")

with open('src/components/TemplateDetailPage.tsx', 'w', encoding='utf-8') as f:
    f.write(page_content)

print("Batch 14 routing and task patches complete")
