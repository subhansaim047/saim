import re

file_path = 'src/components/tools/DigitalChecklistTool.tsx'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

five_whys_tasks = '''const FIVE_WHYS_RCA_TASKS: CheckItem[] = [
  {
    id: "fw-1",
    task: "Immediate Containment: Quarantine suspect product batch, halt affected process line, and verify facility boundary containment.",
    shift: "Opening",
    status: "pass",
    notes: "Product isolated with quarantine tape and placed in secure hold area."
  },
  {
    id: "fw-2",
    task: "Incident Documentation: Record exact time, temperature, CCP critical limit breach, and equipment serial numbers.",
    shift: "Opening",
    status: "pass",
    notes: "Batch records and CCP digital sensor graphs secured."
  },
  {
    id: "fw-3",
    task: "Investigation Team Assembly: Convene HACCP team lead, QA manager, shift supervisor, and maintenance engineer.",
    shift: "Opening",
    status: "pending"
  },
  {
    id: "fw-4",
    task: "Why #1 (Direct Symptom): Establish immediate physical failure mechanism (e.g. why did the line fail to divert suspect product?).",
    shift: "Midday",
    status: "pending"
  },
  {
    id: "fw-5",
    task: "Why #2 (Immediate Cause): Identify operational breakdown behind the direct failure (e.g. why was the override active?).",
    shift: "Midday",
    status: "pending"
  },
  {
    id: "fw-6",
    task: "Why #3 (Procedural Failure): Investigate the gap in standard protocols (e.g. why was there no formal lockout sign-off?).",
    shift: "Midday",
    status: "pending"
  },
  {
    id: "fw-7",
    task: "Why #4 (Management Oversight): Examine supervision, handover, and training gaps (e.g. shift change lacked bypass check).",
    shift: "Midday",
    status: "pending"
  },
  {
    id: "fw-8",
    task: "Why #5 (Root Cause Determination): Uncover foundational management system flaw (e.g. FSMS excluded non-routine maintenance).",
    shift: "Midday",
    status: "pending"
  },
  {
    id: "fw-9",
    task: "Root Cause Categorisation: Formally classify into Equipment, Procedural, Human/Training, Engineering Design, or Supplier Defect.",
    shift: "Closing",
    status: "pending"
  },
  {
    id: "fw-10",
    task: "CAPA Plan Formulation: Define corrective and preventive actions with assigned owners, deliverables, and strict due dates.",
    shift: "Closing",
    status: "pending"
  },
  {
    id: "fw-11",
    task: "Procedural Revision & Retraining: Update relevant SOPs, amend HACCP control plans, and conduct documented staff briefings.",
    shift: "Closing",
    status: "pending"
  },
  {
    id: "fw-12",
    task: "Effectiveness Verification Audit: Perform scheduled 30-day and 60-day audits to verify permanent elimination of root cause.",
    shift: "Closing",
    status: "pending"
  }
];
'''

if 'FIVE_WHYS_RCA_TASKS' not in content:
    # insert before DEFAULT_GENERAL_TASKS
    content = content.replace('const DEFAULT_GENERAL_TASKS: CheckItem[] = [', five_whys_tasks + '\nconst DEFAULT_GENERAL_TASKS: CheckItem[] = [')
    print("Added FIVE_WHYS_RCA_TASKS")

# Add isFiveWhys check
five_whys_check = '''  const isFiveWhys =
    templateTitle.toLowerCase().includes("5 whys") ||
    templateTitle.toLowerCase().includes("root cause") ||
    (templateId && (templateId.includes("5-whys") || templateId.includes("root-cause")));
'''

if 'const isFiveWhys =' not in content:
    content = content.replace('  const isHoodCleaning =', five_whys_check + '  const isHoodCleaning =')
    print("Added isFiveWhys check")

# Update isSsop check to cover "standard operating procedure" and templateId
old_ssop = '''  const isSsop =
    templateTitle.toLowerCase().includes("ssop") ||
    templateTitle.toLowerCase().includes("sanitation standard") ||
    templateTitle.toLowerCase().includes("sanitation sop");'''

new_ssop = '''  const isSsop =
    templateTitle.toLowerCase().includes("ssop") ||
    templateTitle.toLowerCase().includes("sanitation standard") ||
    templateTitle.toLowerCase().includes("sanitation sop") ||
    templateTitle.toLowerCase().includes("standard operating procedure in food") ||
    (templateId && templateId.includes("standard-operating-procedure"));'''

if 'standard-operating-procedure' not in content:
    content = content.replace(old_ssop, new_ssop)
    print("Updated isSsop check")

# Update tasks state to return FIVE_WHYS_RCA_TASKS
if 'if (isFiveWhys) return FIVE_WHYS_RCA_TASKS;' not in content:
    content = content.replace('if (isHoodCleaning) return HOOD_CLEANING_TASKS;', 'if (isFiveWhys) return FIVE_WHYS_RCA_TASKS;\n    if (isHoodCleaning) return HOOD_CLEANING_TASKS;')
    print("Added FIVE_WHYS_RCA_TASKS to tasks initialization")

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Saved DigitalChecklistTool.tsx successfully!")
