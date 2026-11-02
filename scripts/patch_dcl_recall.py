import sys

path = r"C:\Users\subhan\.gemini\antigravity\scratch\saim\src\components\tools\DigitalChecklistTool.tsx"
with open(path, "r", encoding="utf-8") as f:
    text = f.read()

recall_tasks = '''const RECALL_INCIDENT_TASKS: CheckItem[] = [
  {
    id: "recall-1",
    category: "1. Quarantine & Batch Freeze",
    task: "Isolate all remaining stock of the implicated batch immediately in secure storage; apply red 'DO NOT USE - QUARANTINE' warning tape.",
    status: "pass",
    actionNotes: "Remaining inventory isolated in cold room"
  },
  {
    id: "recall-2",
    category: "2. Supply Chain Traceability",
    task: "Identify raw ingredient batch code, supplier delivery invoice, and map all customers or wholesale clients that received the product (Article 18 of Regulation EC 178/2002).",
    status: "pass",
    actionNotes: "One-step-back & one-step-forward accounts traced"
  },
  {
    id: "recall-3",
    category: "3. FSA & Local Council Notification",
    task: "Notify the Food Standards Agency (FSA) Incidents Team and local authority Environmental Health Officer immediately with batch details and health hazard assessment.",
    status: "pass",
    actionNotes: "FSA incident form submitted"
  },
  {
    id: "recall-4",
    category: "4. Customer Recall Notice Publication",
    task: "Display Point-of-Sale (POS) customer recall notices at front-of-house counters, on takeaway digital ordering apps, and across business social media channels.",
    status: "pass",
    actionNotes: "POS notice posted with return instructions"
  },
  {
    id: "recall-5",
    category: "5. Safe Destruction & Waste Certification",
    task: "Dispose of returned and condemned stock via licensed hazardous waste or Category 3 animal byproduct (ABP) disposal contractor; file waste transfer notes.",
    status: "pass",
    actionNotes: "Waste contractor certificate filed"
  },
  {
    id: "recall-6",
    category: "6. Root-Cause & Preventative Actions",
    task: "Conduct thorough incident review with kitchen team and ingredient suppliers; update HACCP hazard analysis to prevent recurring food safety failures.",
    status: "pass",
    actionNotes: "Supplier CAPA report requested"
  }
];

'''

if "const RECALL_INCIDENT_TASKS" not in text:
    text = text.replace("const HEALTH_INSPECTION_TASKS: CheckItem[] =", recall_tasks + "const HEALTH_INSPECTION_TASKS: CheckItem[] =", 1)

# Update selector
old_sel = '''  const isCleaning = templateTitle.toLowerCase().includes("cleaning");
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

new_sel = '''  const isCleaning = templateTitle.toLowerCase().includes("cleaning");
  const isRecall = templateTitle.toLowerCase().includes("recall") || templateTitle.toLowerCase().includes("withdrawal");
  const isHealthInspection =
    templateTitle.toLowerCase().includes("inspection") ||
    templateTitle.toLowerCase().includes("eho") ||
    templateTitle.toLowerCase().includes("hygiene audit");

  // Checklist Tasks
  const [tasks, setTasks] = useState<CheckItem[]>(() => {
    if (isRecall) return RECALL_INCIDENT_TASKS;
    if (isHealthInspection) return HEALTH_INSPECTION_TASKS;
    if (isCleaning) return CLEANING_TASKS;
    return DEFAULT_GENERAL_TASKS;
  });'''

text = text.replace(old_sel, new_sel, 1)

with open(path, "w", encoding="utf-8") as f:
    f.write(text)

print("Successfully added RECALL_INCIDENT_TASKS to DigitalChecklistTool.tsx")
