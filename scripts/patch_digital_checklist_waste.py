import sys

sys.stdout.reconfigure(encoding='utf-8')

FILE_PATH = 'C:/Users/subhan/.gemini/antigravity/scratch/saim/src/components/tools/DigitalChecklistTool.tsx'

with open(FILE_PATH, 'r', encoding='utf-8') as f:
    content = f.read()

waste_tasks = '''const WASTE_MANAGEMENT_TASKS: CheckItem[] = [
  {
    id: "w1",
    category: "1. Kitchen Food Waste Segregation",
    task: "Ensure internal foot-pedal bins are lined with heavy-duty biohazard/waste bags; food waste segregated from dry recycling and packaging.",
    status: "pass",
    actionNotes: "Internal pedal bins lined and segregated"
  },
  {
    id: "w2",
    category: "2. Used Cooking Oil (UCO) Storage",
    task: "Drain cooled spent cooking oil into sealed, bunded storage drums; verify collection by Environment Agency registered waste carrier.",
    status: "pass",
    actionNotes: "Oil drums sealed in bunded store"
  },
  {
    id: "w3",
    category: "3. Category 3 Animal By-Product (ABP) Waste",
    task: "Raw meat/bone trimmings and condemned food stored in designated, lidded Category 3 ABP bins; separate from general municipal refuse.",
    status: "pass",
    actionNotes: "Category 3 ABP bin locked"
  },
  {
    id: "w4",
    category: "4. External Commercial Waste Corral",
    task: "Check external commercial wheelie bins: verify all lids are securely shut, drain plugs fitted, and bin lock mechanisms engaged.",
    status: "pass",
    actionNotes: "External bins locked; lids closed"
  },
  {
    id: "w5",
    category: "5. Grease Trap & Interceptor Maintenance",
    task: "Inspect indoor or outdoor grease trap: skim surface grease, verify biological dosing pump is operational, and log pumping schedule.",
    status: "pass",
    actionNotes: "Grease trap skimmed and operating normally"
  },
  {
    id: "w6",
    category: "6. Refuse Enclosure Hygiene & Pest Proofing",
    task: "Wash and disinfect external bin storage yard; ensure zero food spillages, stagnant effluent, or rodent harborage near refuse corals.",
    status: "pass",
    actionNotes: "Waste yard pressure-washed and clean"
  },
  {
    id: "w7",
    category: "7. Duty of Care Waste Transfer Notes",
    task: "Verify latest Waste Transfer Notes (WTNs) and oil collection receipts from registered waste contractors are archived in the compliance binder.",
    status: "pass",
    actionNotes: "Duty of care transfer notes filed for 2 years"
  }
];

const RESTROOM_TASKS: CheckItem[] = ['''

content = content.replace("const RESTROOM_TASKS: CheckItem[] = [", waste_tasks)

old_detection = '''  const isRestroom =
    templateTitle.toLowerCase().includes("restroom") ||
    templateTitle.toLowerCase().includes("washroom") ||
    templateTitle.toLowerCase().includes("toilet");'''

new_detection = '''  const isWasteManagement =
    templateTitle.toLowerCase().includes("waste") ||
    templateTitle.toLowerCase().includes("refuse") ||
    templateTitle.toLowerCase().includes("garbage");
  const isRestroom =
    templateTitle.toLowerCase().includes("restroom") ||
    templateTitle.toLowerCase().includes("washroom") ||
    templateTitle.toLowerCase().includes("toilet");'''

content = content.replace(old_detection, new_detection)

old_task_init = '''  const [tasks, setTasks] = useState<CheckItem[]>(() => {
    if (isRestroom) return RESTROOM_TASKS;'''

new_task_init = '''  const [tasks, setTasks] = useState<CheckItem[]>(() => {
    if (isWasteManagement) return WASTE_MANAGEMENT_TASKS;
    if (isRestroom) return RESTROOM_TASKS;'''

content = content.replace(old_task_init, new_task_init)

with open(FILE_PATH, 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated DigitalChecklistTool.tsx with WASTE_MANAGEMENT_TASKS successfully")
