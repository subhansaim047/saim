import sys

path = r"C:\Users\subhan\.gemini\antigravity\scratch\saim\src\components\tools\DigitalChecklistTool.tsx"
with open(path, "r", encoding="utf-8") as f:
    text = f.read()

# 1. Add HEALTH_INSPECTION_TASKS above export const DigitalChecklistTool
health_tasks = '''const HEALTH_INSPECTION_TASKS: CheckItem[] = [
  {
    id: "fhrs-1",
    category: "Pillar 1: Food Hygiene & Handling",
    task: "Cross-contamination controls verified: raw meats stored strictly on bottom refrigerator shelves beneath ready-to-eat foods; distinct colour-coded chopping boards (Red for raw meat, Yellow for poultry, Blue for fish, Green for salad) in use.",
    status: "pass",
    actionNotes: "Boards separated and sanitised"
  },
  {
    id: "fhrs-2",
    category: "Pillar 1: Food Hygiene & Handling",
    task: "Temperature control adherence: commercial chillers operating at or below 5°C, freezers at or below -18°C, hot holding held above 63°C, and core cooking temps verified at 75°C (82°C in Scotland) with calibrated needle probe.",
    status: "pass",
    actionNotes: "All probe temperatures logged"
  },
  {
    id: "fhrs-3",
    category: "Pillar 1: Food Hygiene & Handling",
    task: "Allergen management (Natasha's Law): all 14 statutory allergens declared for every menu dish; PPDS foods labelled with complete ingredient lists with allergens emphasised in bold; 14 allergen matrix accessible.",
    status: "pass",
    actionNotes: "14 allergen matrix verified"
  },
  {
    id: "fhrs-4",
    category: "Pillar 2: Cleanliness & Structure",
    task: "Dedicated handwash basins fully equipped: hot and cold running water, unperfumed bactericidal liquid soap (BS EN 1499), and disposable blue paper towels. Basins strictly used for hand hygiene only.",
    status: "pass",
    actionNotes: "Soap & paper roll fully stocked"
  },
  {
    id: "fhrs-5",
    category: "Pillar 2: Cleanliness & Structure",
    task: "Physical premises & pest proofing: no gaps under external doors, fly screens intact on openable windows, grease filters clean, walls and non-slip floors in good repair with no cracked tiles or standing water.",
    status: "pass",
    actionNotes: "No pest ingress points observed"
  },
  {
    id: "fhrs-6",
    category: "Pillar 3: Confidence in Management",
    task: "Documented Food Safety Management System: Safer Food, Better Business (SFBB) pack or HACCP binder fully completed, daily opening/closing checks signed off by supervisor, and last 12 months archived.",
    status: "pass",
    actionNotes: "SFBB diary up to date and signed"
  },
  {
    id: "fhrs-7",
    category: "Pillar 3: Confidence in Management",
    task: "Staff training & due diligence: valid Level 2 Food Hygiene certificates on file for all food handlers; Level 3 for supervisor; supplier delivery invoices and batch traceability records immediately accessible.",
    status: "pass",
    actionNotes: "Training certificates filed in binder"
  }
];

'''

if "const HEALTH_INSPECTION_TASKS" not in text:
    text = text.replace("const CLEANING_TASKS: CheckItem[] =", health_tasks + "const CLEANING_TASKS: CheckItem[] =", 1)

# 2. Update initial tasks selector
old_selector = '''  const isCleaning = templateTitle.toLowerCase().includes("cleaning");
  // Checklist Tasks
  const [tasks, setTasks] = useState<CheckItem[]>(() =>
    isCleaning ? CLEANING_TASKS : DEFAULT_GENERAL_TASKS
  );'''

new_selector = '''  const isCleaning = templateTitle.toLowerCase().includes("cleaning");
  const isHealthInspection =
    templateTitle.toLowerCase().includes("inspection") ||
    templateTitle.toLowerCase().includes("eho") ||
    templateTitle.toLowerCase().includes("hygiene audit");

  // Checklist Tasks
  const [tasks, setTasks] = useState<CheckItem[]>(() => {
    if (isHealthInspection) return HEALTH_INSPECTION_TASKS;
    if (isCleaning) return CLEANING_TASKS;
    return DEFAULT_GENERAL_TASKS;
  });'''

text = text.replace(old_selector, new_selector, 1)

# 3. Add FHRS 5-Star Readiness Estimator Banner if isHealthInspection
fhrs_banner = '''      {/* FHRS 5-Star Readiness Estimator Banner */}
      {isHealthInspection && (
        <div className="bg-gradient-to-r from-emerald-900 to-teal-950 text-white rounded-2xl p-5 border border-emerald-700/50 shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 no-print">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-300">
                UK Food Hygiene Rating Scheme (FHRS) Readiness
              </span>
            </div>
            <p className="text-xs text-emerald-100 max-w-xl">
              Based on the 3 official EHO scoring pillars: Food Hygiene (Cross-contamination &amp; Temps), Structural Condition (Cleanliness &amp; Pest proofing), and Confidence in Management (SFBB Diary).
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-2.5 text-center shrink-0">
            {tasks.filter(t => t.status === "fail").length === 0 ? (
              <div>
                <span className="text-amber-300 text-lg font-black tracking-widest block">★★★★★</span>
                <span className="text-xs font-bold text-white uppercase">5-Star Ready (Very Good)</span>
              </div>
            ) : tasks.filter(t => t.status === "fail").length === 1 ? (
              <div>
                <span className="text-amber-300 text-lg font-black tracking-widest block">★★★★☆</span>
                <span className="text-xs font-bold text-amber-200 uppercase">4-Star Potential (1 Issue to Fix)</span>
              </div>
            ) : (
              <div>
                <span className="text-rose-400 text-lg font-black tracking-widest block">★★☆☆☆</span>
                <span className="text-xs font-bold text-rose-200 uppercase">Risk of EHO Action (Fix Breaches)</span>
              </div>
            )}
          </div>
        </div>
      )}'''

target_for_banner = '      {/* BS EN 1276 Sanitiser Contact Time Verification Widget */}'
text = text.replace(target_for_banner, fhrs_banner + "\n\n" + target_for_banner, 1)

with open(path, "w", encoding="utf-8") as f:
    f.write(text)

print("Successfully added Health Inspection tasks and FHRS 5-star estimator to DigitalChecklistTool.tsx")
