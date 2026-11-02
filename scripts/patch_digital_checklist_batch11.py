# scripts/patch_digital_checklist_batch11.py
import re

with open('src/components/tools/DigitalChecklistTool.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

new_tasks = """const RETAIL_STORE_TASKS: CheckItem[] = [
  {
    id: "retail-1",
    category: "1. Store Opening & Premises Security",
    task: "External perimeter and shutters inspected; alarm disarmed; CCTV cameras fully operational; cash floats verified and registered at till stations.",
    status: "pass",
    actionNotes: "Shutters, alarm and till floats verified"
  },
  {
    id: "retail-2",
    category: "2. Chilled & Frozen Display Refrigeration",
    task: "Grab-and-go open-deck display chillers verified at 1°C to 5°C (legal maximum 8°C); ice cream and frozen display cabinets at ≤-18°C; digital probe audit logged.",
    status: "pass",
    actionNotes: "All retail display decks within statutory limits"
  },
  {
    id: "retail-3",
    category: "3. Stock Rotation & Expiry Auditing (FIFO)",
    task: "Daily First-In, First-Out (FIFO) shelf pull completed; pre-packed sandwiches, salads, and dairy use-by dates audited; damaged packs or expired lines quarantined.",
    status: "pass",
    actionNotes: "Damaged and day-dated lines pulled and logged"
  },
  {
    id: "retail-4",
    category: "4. Shop Floor Sanitation & Aisle Clearways",
    task: "Aisles completely free from tripping hazards and overstocked pallets; customer baskets and shopping trolley handles sanitised with BS EN 1276 surface spray.",
    status: "pass",
    actionNotes: "Trolleys wiped down; aisles unobstructed"
  },
  {
    id: "retail-5",
    category: "5. Natasha's Law & Food Display Labelling",
    task: "All pre-packed for direct sale (PPDS) items checked for full ingredients lists with 14 statutory allergens highlighted in bold; loose bakery items clearly signposted.",
    status: "pass",
    actionNotes: "PPDS packaging compliance verified"
  },
  {
    id: "retail-6",
    category: "6. Store Closing, Cash Reconcile & Secure Lockup",
    task: "All tills cashed up and takings secured in drop safe; waste bins emptied to external locked compactor; fire exit clearways verified; alarm system armed.",
    status: "pass",
    actionNotes: "Safe locked and alarm armed"
  }
];

const KITCHEN_OPENING_CLOSING_TASKS: CheckItem[] = [
  {
    id: "koc-1",
    category: "1. Morning Shift: Cold Chain & Temperature Audit",
    task: "Inspect walk-in chillers and prep fridges: verify digital display and calibrated probe readings are between 1°C and 5°C; deep freezers at ≤-18°C. Record probe readings in daily log.",
    status: "pass",
    actionNotes: "All refrigeration units within statutory limits"
  },
  {
    id: "koc-2",
    category: "2. Morning Shift: Hygiene Stations & Chemical Verification",
    task: "Confirm dedicated handwashing sinks have unobstructed access, continuous hot running water (>45°C), bactericidal unperfumed hand soap (BS EN 1499), and blue roll.",
    status: "pass",
    actionNotes: "Handwash sinks fully restocked"
  },
  {
    id: "koc-3",
    category: "3. Morning Shift: Canopy, Gas Safety & Station Setup",
    task: "Turn on kitchen extraction canopy and verify airflow interlock; inspect gas cooker flame guards; sanitise stainless steel prep tables with BS EN 1276 disinfectant.",
    status: "pass",
    actionNotes: "Canopy and interlock operational"
  },
  {
    id: "koc-4",
    category: "4. Mid-Service: Cross-Contamination & Allergen Barrier",
    task: "Verify colour-coded chopping boards (Red, Blue, Yellow, Green, White, Purple) are separated; purple allergen station setup with clean dedicated smallwares; probe wipes available.",
    status: "pass",
    actionNotes: "Strict raw vs RTE segregation active"
  },
  {
    id: "koc-5",
    category: "5. Evening Shutdown: Hot Food Cooling & Proper Storage",
    task: "All cooked foods cooled from >63°C to <8°C within 90 minutes using blast chiller or shallow pans; decanted into food-grade containers with dated labels; raw meats stored underneath RTE items.",
    status: "pass",
    actionNotes: "All prep decanted, labelled and covered"
  },
  {
    id: "koc-6",
    category: "6. Evening Shutdown: Deep Sanitisation & Equipment Isolation",
    task: "Empty and scrub bain-maries; filter and cover deep fat fryers; dismantle and sanitise commercial meat slicers; mop non-slip kitchen floors with heavy degreaser.",
    status: "pass",
    actionNotes: "Cookline scrubbed and degreased"
  },
  {
    id: "koc-7",
    category: "7. Night Lockup: Gas Isolation & Waste Removal",
    task: "Shut off commercial gas isolation valve; verify electric fryers and ovens powered down; tie waste bags and remove to external lidded bins; verify back door pest seals intact.",
    status: "pass",
    actionNotes: "Gas isolated, waste cleared, doors secured"
  }
];

const STARTING_FOOD_BUSINESS_TASKS: CheckItem[] = [
  {
    id: "sfb-1",
    category: "Phase 1: Statutory Registration & Council Approvals",
    task: "Register food business with Local Authority environmental health department at least 28 days before trading; confirm planning permission (Class E) and trade waste agreement.",
    status: "pass",
    actionNotes: "Local Authority 28-day notice submitted"
  },
  {
    id: "sfb-2",
    category: "Phase 2: Food Safety Management System (HACCP / SFBB)",
    task: "Implement documented Food Standards Agency 'Safer Food, Better Business' (SFBB) pack or bespoke HACCP system detailing hazard analysis, CCPs, and critical limits.",
    status: "pass",
    actionNotes: "SFBB pack printed and fully completed"
  },
  {
    id: "sfb-3",
    category: "Phase 3: Kitchen Infrastructure & Cross-Contamination",
    task: "Install separate designated handwash basins with hot & cold water; commercial ventilation canopy with gas interlock; washable non-slip flooring; colour-coded prep stations.",
    status: "pass",
    actionNotes: "Hand basins and ventilation installed"
  },
  {
    id: "sfb-4",
    category: "Phase 4: Staff Training & Food Safety Certification",
    task: "All food handlers certified in Level 2 Food Safety in Catering; Head Chef/Manager holds Level 3 Food Hygiene; Natasha's Law allergen training completed by all staff.",
    status: "pass",
    actionNotes: "Level 2/3 certificates filed in compliance binder"
  },
  {
    id: "sfb-5",
    category: "Phase 5: Natasha's Law & 14 Statutory Allergen Matrix",
    task: "Formulate complete 14-allergen recipe matrix for all food and beverage offerings; design compliant PPDS labels with ingredients in descending order and allergens in bold.",
    status: "pass",
    actionNotes: "14-allergen matrix verified against ingredient specs"
  },
  {
    id: "sfb-6",
    category: "Phase 6: Pest Proofing & Commercial Waste Management",
    task: "Contract commercial pest control service with scheduled monitoring; secure commercial trade waste disposal agreement with licensed carrier (Duty of Care note on file).",
    status: "pass",
    actionNotes: "Pest contract and waste carrier agreement active"
  },
  {
    id: "sfb-7",
    category: "Phase 7: Pre-Opening FHRS 5-Star Readiness Audit",
    task: "Execute comprehensive mock inspection across all 3 FHRS pillars: Hygienic Food Handling, Structural Cleanliness, and Confidence in Management.",
    status: "pass",
    actionNotes: "Mock EHO inspection completed with 5-star score"
  }
];

"""

# Insert new tasks before DEFAULT_GENERAL_TASKS
target_marker = "const DEFAULT_GENERAL_TASKS: CheckItem[] = ["
if target_marker in content:
    content = content.replace(target_marker, new_tasks + target_marker)
    print("Inserted new tasks arrays")
else:
    print("Error: target_marker not found")

# Replace boolean conditions
old_bools = """  const isBar =
    templateTitle.toLowerCase().includes("bar") ||
    templateTitle.toLowerCase().includes("cellar") ||
    templateTitle.toLowerCase().includes("beverage");
  const isRestaurantFoh =
    templateTitle.toLowerCase().includes("front of house") ||
    templateTitle.toLowerCase().includes("foh") ||
    (templateTitle.toLowerCase().includes("restaurant") && !templateTitle.toLowerCase().includes("cleaning"));"""

new_bools = """  const isRetailStore =
    templateTitle.toLowerCase().includes("retail") ||
    templateTitle.toLowerCase().includes("store") ||
    templateTitle.toLowerCase().includes("shop");
  const isKitchenOpeningClosing =
    (templateTitle.toLowerCase().includes("opening") && templateTitle.toLowerCase().includes("closing")) ||
    templateTitle.toLowerCase().includes("kitchen opening") ||
    templateTitle.toLowerCase().includes("kitchen closing");
  const isStartingFoodBusiness =
    templateTitle.toLowerCase().includes("starting") ||
    templateTitle.toLowerCase().includes("new business") ||
    templateTitle.toLowerCase().includes("start a food") ||
    templateTitle.toLowerCase().includes("start-up");
  const isBar =
    templateTitle.toLowerCase().includes("bar") ||
    templateTitle.toLowerCase().includes("cellar") ||
    templateTitle.toLowerCase().includes("beverage");
  const isRestaurantFoh =
    !isRetailStore &&
    !isKitchenOpeningClosing &&
    !isStartingFoodBusiness &&
    (templateTitle.toLowerCase().includes("front of house") ||
     templateTitle.toLowerCase().includes("foh") ||
     (templateTitle.toLowerCase().includes("restaurant") &&
      !templateTitle.toLowerCase().includes("cleaning") &&
      !templateTitle.toLowerCase().includes("inspection") &&
      !templateTitle.toLowerCase().includes("health")));"""

if old_bools in content:
    content = content.replace(old_bools, new_bools)
    print("Replaced boolean conditions")
else:
    print("Warning: old_bools not found, checking variations")

# Replace return logic in useState<CheckItem[]>
old_returns = """    if (isBar) return BAR_OPERATIONS_TASKS;
    if (isRestaurantFoh) return RESTAURANT_FOH_TASKS;"""

new_returns = """    if (isRetailStore) return RETAIL_STORE_TASKS;
    if (isKitchenOpeningClosing) return KITCHEN_OPENING_CLOSING_TASKS;
    if (isStartingFoodBusiness) return STARTING_FOOD_BUSINESS_TASKS;
    if (isBar) return BAR_OPERATIONS_TASKS;
    if (isRestaurantFoh) return RESTAURANT_FOH_TASKS;"""

if old_returns in content:
    content = content.replace(old_returns, new_returns)
    print("Replaced task returns")
else:
    print("Warning: old_returns not found")

with open('src/components/tools/DigitalChecklistTool.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated DigitalChecklistTool.tsx")
