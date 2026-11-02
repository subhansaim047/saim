file_path = 'src/components/tools/DigitalChecklistTool.tsx'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

brc_and_kosher_tasks = '''const BRC_AUDIT_TASKS: CheckItem[] = [
  {
    id: "brc-1",
    category: "Senior Management",
    task: "Documented Food Safety Culture plan active, measurable quality targets defined, and bi-monthly executive review minutes recorded.",
    status: "pass",
    actionNotes: "Q4 review signed by plant director"
  },
  {
    id: "brc-2",
    category: "HACCP System",
    task: "Multidisciplinary HACCP plan verified on-site; critical control limits validated against scientific literature (e.g. 75°C core/30s).",
    status: "pass",
    actionNotes: "Annual flow chart review complete"
  },
  {
    id: "brc-3",
    category: "Site Standards",
    task: "Factory perimeter secure, exterior doors sealed with brush sweeps, and internal walls, floors and coving crack-free and washable.",
    status: "pass",
    actionNotes: "Loading dock sweep adjusted"
  },
  {
    id: "brc-4",
    category: "Foreign Body Control",
    task: "Metal detector / X-ray test wands (1.5mm Fe, 2.0mm Non-Fe, 2.5mm SS) challenged hourly; reject arm fail-safe verified.",
    status: "pass",
    actionNotes: "Hourly test log initialled"
  },
  {
    id: "brc-5",
    category: "Allergen Management",
    task: "Dedicated color-coded allergen utensils segregated; full wet clean flush-out and lateral flow swab test verified between runs.",
    status: "pass",
    actionNotes: "Peanut/nut line swab negative"
  },
  {
    id: "brc-6",
    category: "Traceability Recall",
    task: "Annual mock recall completed within 4 hours achieving 99.5% to 100.5% mass-balance reconciliation across raw ingredients and packaging.",
    status: "pass",
    actionNotes: "Mock recall file BRC-2026-02 closed"
  },
  {
    id: "brc-7",
    category: "Personnel & PPE",
    task: "Clean production clothing without external pockets or buttons; blue detectable metal-strip plasters logged and verified.",
    status: "pass",
    actionNotes: "First aid box replenished"
  },
  {
    id: "brc-8",
    category: "Pest Management",
    task: "Licensed PCO contract active, electronic trap maps up to date, zero interior toxic baits, and quarterly trend analysis reviewed.",
    status: "pass",
    actionNotes: "Fly killer tubes replaced"
  }
];

const KOSHER_CERTIFICATION_TASKS: CheckItem[] = [
  {
    id: "kosh-1",
    category: "Dietary Segregation",
    task: "Strict physical segregation of Meat (Fleishig), Dairy (Milchig), and Neutral (Pareve) utensils, cutting boards, and cookware.",
    status: "pass",
    actionNotes: "Color-coded red (meat) and blue (dairy) tags verified"
  },
  {
    id: "kosh-2",
    category: "Ingredient Verification",
    task: "Every incoming ingredient, processing aid, and sanitising chemical verified on accepted Kosher agency database (OU, Star-K, KLBD).",
    status: "pass",
    actionNotes: "Supplier certs on file"
  },
  {
    id: "kosh-3",
    category: "Mashgiach Supervision",
    task: "Mashgiach on-duty sign-in logged, Bishul Yisroel pilot lights verified, and kitchen locks inspected prior to production.",
    status: "pass",
    actionNotes: "Rabbinic sign-off recorded"
  },
  {
    id: "kosh-4",
    category: "Produce Inspection",
    task: "Leafy greens, berries, and broccoli inspected under backlight and cloth filtration (Bedikat Tola'im) to ensure zero insect infestation.",
    status: "pass",
    actionNotes: "Batch inspection sheet signed"
  },
  {
    id: "kosh-5",
    category: "Kashering & Purging",
    task: "Equipment crossover protocols enforced; 24-hour resting period and boiling water immersion (Hagala) completed under supervision if required.",
    status: "pending",
    actionNotes: "Scheduled for bi-weekly deep clean"
  },
  {
    id: "kosh-6",
    category: "Dishwashing Control",
    task: "Dedicated dishwashers or strict separation of meat and dairy washing cycles with separate rinse racks and clean drainage traps.",
    status: "pass",
    actionNotes: "Meat rack sanitized"
  }
];
'''

if 'BRC_AUDIT_TASKS' not in content:
    content = content.replace('const DEFAULT_GENERAL_TASKS: CheckItem[] = [', brc_and_kosher_tasks + '\nconst DEFAULT_GENERAL_TASKS: CheckItem[] = [')
    print("Added BRC_AUDIT_TASKS and KOSHER_CERTIFICATION_TASKS")

# Add checks for isBrcAudit and isKosher
new_checks = '''  const isBrcAudit =
    templateTitle.toLowerCase().includes("brc") ||
    (templateId && templateId.includes("brc"));
  const isKosher =
    templateTitle.toLowerCase().includes("kosher") ||
    (templateId && templateId.includes("kosher"));
'''

if 'const isBrcAudit =' not in content:
    content = content.replace('  const isFiveWhys =', new_checks + '  const isFiveWhys =')
    print("Added isBrcAudit and isKosher checks")

# Add to tasks state
tasks_addition = '''    if (isBrcAudit) return BRC_AUDIT_TASKS;
    if (isKosher) return KOSHER_CERTIFICATION_TASKS;
'''

if 'if (isBrcAudit) return BRC_AUDIT_TASKS;' not in content:
    content = content.replace('if (isFiveWhys) return FIVE_WHYS_RCA_TASKS;', tasks_addition + '    if (isFiveWhys) return FIVE_WHYS_RCA_TASKS;')
    print("Added BRC and Kosher tasks to tasks state initialization")

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Saved DigitalChecklistTool.tsx successfully for Batch 21!")
