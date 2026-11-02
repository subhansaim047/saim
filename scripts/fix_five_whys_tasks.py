import re

file_path = 'src/components/tools/DigitalChecklistTool.tsx'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

correct_five_whys = '''const FIVE_WHYS_RCA_TASKS: CheckItem[] = [
  {
    id: "fw-1",
    category: "Immediate Containment",
    task: "Immediate Containment: Quarantine suspect product batch, halt affected process line, and verify facility boundary containment.",
    status: "pass",
    actionNotes: "Product isolated with quarantine tape and placed in secure hold area."
  },
  {
    id: "fw-2",
    category: "Incident Data",
    task: "Incident Documentation: Record exact time, temperature, CCP critical limit breach, and equipment serial numbers.",
    status: "pass",
    actionNotes: "Batch records and CCP digital sensor graphs secured."
  },
  {
    id: "fw-3",
    category: "HACCP Team",
    task: "Investigation Team Assembly: Convene HACCP team lead, QA manager, shift supervisor, and maintenance engineer.",
    status: "pending",
    actionNotes: ""
  },
  {
    id: "fw-4",
    category: "Why #1 (Symptom)",
    task: "Why #1 (Direct Symptom): Establish immediate physical failure mechanism (e.g. why did the line fail to divert suspect product?).",
    status: "pending",
    actionNotes: ""
  },
  {
    id: "fw-5",
    category: "Why #2 (Cause)",
    task: "Why #2 (Immediate Cause): Identify operational breakdown behind the direct failure (e.g. why was the override active?).",
    status: "pending",
    actionNotes: ""
  },
  {
    id: "fw-6",
    category: "Why #3 (Procedure)",
    task: "Why #3 (Procedural Failure): Investigate the gap in standard protocols (e.g. why was there no formal lockout sign-off?).",
    status: "pending",
    actionNotes: ""
  },
  {
    id: "fw-7",
    category: "Why #4 (Management)",
    task: "Why #4 (Management Oversight): Examine supervision, handover, and training gaps (e.g. shift change lacked bypass check).",
    status: "pending",
    actionNotes: ""
  },
  {
    id: "fw-8",
    category: "Why #5 (Root Cause)",
    task: "Why #5 (Root Cause Determination): Uncover foundational management system flaw (e.g. FSMS excluded non-routine maintenance).",
    status: "pending",
    actionNotes: ""
  },
  {
    id: "fw-9",
    category: "Classification",
    task: "Root Cause Categorisation: Formally classify into Equipment, Procedural, Human/Training, Engineering Design, or Supplier Defect.",
    status: "pending",
    actionNotes: ""
  },
  {
    id: "fw-10",
    category: "CAPA Formulation",
    task: "CAPA Plan Formulation: Define corrective and preventive actions with assigned owners, deliverables, and strict due dates.",
    status: "pending",
    actionNotes: ""
  },
  {
    id: "fw-11",
    category: "SOP Revision",
    task: "Procedural Revision & Retraining: Update relevant SOPs, amend HACCP control plans, and conduct documented staff briefings.",
    status: "pending",
    actionNotes: ""
  },
  {
    id: "fw-12",
    category: "Verification",
    task: "Effectiveness Verification Audit: Perform scheduled 30-day and 60-day audits to verify permanent elimination of root cause.",
    status: "pending",
    actionNotes: ""
  }
];'''

# Replace old FIVE_WHYS_RCA_TASKS block
content = re.sub(r'const FIVE_WHYS_RCA_TASKS: CheckItem\[\] = \[.*?\];', correct_five_whys, content, flags=re.DOTALL)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Replaced FIVE_WHYS_RCA_TASKS with correct CheckItem fields!")
