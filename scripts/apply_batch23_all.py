# -*- coding: utf-8 -*-
import json
import csv
import sys

# 1. Update DigitalChecklistTool.tsx
dcl_path = 'src/components/tools/DigitalChecklistTool.tsx'
with open(dcl_path, 'r', encoding='utf-8') as f:
    dcl_code = f.read()

new_tasks = '''
const GFSI_AUDIT_TASKS: CheckItem[] = [
  {
    id: "gfsi-1",
    category: "Senior Management Commitment",
    task: "Documented Food Safety Culture policy active, measurable safety objectives published, quarterly executive review minutes recorded, and confidential employee reporting channels operational.",
    status: "pass",
    actionNotes: "Q4 executive food safety review minutes signed"
  },
  {
    id: "gfsi-2",
    category: "HACCP & Hazard Control",
    task: "Multidisciplinary HACCP plan validated on-site; critical control limits confirmed against scientific literature (e.g. 75°C core for 30s or 70°C for 2 min); daily monitoring records signed off.",
    status: "pass",
    actionNotes: "All CCP thermal logs verified compliant"
  },
  {
    id: "gfsi-3",
    category: "Environmental Monitoring & Hygiene",
    task: "Documented environmental pathogen swabbing plan active in high-care zones targeting Listeria monocytogenes and Salmonella; results trended with clear quarantine trigger limits.",
    status: "pass",
    actionNotes: "Zone 1 food-contact surfaces negative on latest swab"
  },
  {
    id: "gfsi-4",
    category: "Allergen Management & Natasha's Law",
    task: "All 14 statutory allergens segregated in designated colour-coded bins; dedicated purple utensils used; verified wet cleaning washdown and lateral flow swab tests recorded between runs.",
    status: "pass",
    actionNotes: "Post-sanitisation ELISA test negative"
  },
  {
    id: "gfsi-5",
    category: "Traceability & Mass-Balance Recall",
    task: "Annual mock recall completed within a strict 4-hour window, achieving 100% mass-balance reconciliation across raw ingredients, packaging, work-in-progress, and distributed finished stock.",
    status: "pass",
    actionNotes: "Mass-balance reconciled 99.8% within 3 hours 15 mins"
  },
  {
    id: "gfsi-6",
    category: "Supplier Assurance & Food Defense",
    task: "Approved supplier programme verified against GFSI certification databases; Food Defense (TACCP) threat assessment and Food Fraud (VACCP) vulnerability assessments documented and active.",
    status: "pass",
    actionNotes: "Raw material supplier certificates up-to-date"
  }
];

const ISO_22000_CERTIFICATION_TASKS: CheckItem[] = [
  {
    id: "iso-cert-1",
    category: "Stage 1: Context & Scope",
    task: "Document internal and external food safety issues, define interested party expectations, and establish formal scope of the Food Safety Management System (FSMS) (Clause 4).",
    status: "pass",
    actionNotes: "FSMS scope document approved by steering committee"
  },
  {
    id: "iso-cert-2",
    category: "Stage 2: Leadership & Commitment",
    task: "Top management publishes Food Safety Policy, assigns organisational roles and authorities, and appoints certified Food Safety Team Leader (Clause 5).",
    status: "pass",
    actionNotes: "Food Safety Team Leader appointment charter signed"
  },
  {
    id: "iso-cert-3",
    category: "Stage 3: Prerequisite Programmes (PRPs)",
    task: "Implement and document sector-specific PRPs (ISO/TS 22002-1) covering facility layout, utilities, waste disposal, equipment suitability, pest management, and personnel hygiene.",
    status: "pass",
    actionNotes: "ISO/TS 22002-1 gap audit completed"
  },
  {
    id: "iso-cert-4",
    category: "Stage 4: Hazard Analysis & CCPs/OPRPs",
    task: "Conduct comprehensive hazard identification; determine acceptable levels; categorise control measures into Operational PRPs (OPRPs) or Critical Control Points (CCPs) via logical decision matrix.",
    status: "pass",
    actionNotes: "Hazard assessment matrix signed off by HACCP team"
  },
  {
    id: "iso-cert-5",
    category: "Stage 5: Validation of Control Measures",
    task: "Validate CCP critical limits and OPRP action criteria prior to implementation using experimental trials, thermal validation data, and statutory standards (Clause 8.5.3).",
    status: "pass",
    actionNotes: "Core temperature lethality curves validated"
  },
  {
    id: "iso-cert-6",
    category: "Stage 6: Monitoring & Corrective Action",
    task: "Establish continuous monitoring systems, calibrated digital probes, and predetermined corrective action protocols for CCP breaches and OPRP non-conformities.",
    status: "pass",
    actionNotes: "Digital data-logger alert thresholds configured"
  },
  {
    id: "iso-cert-7",
    category: "Stage 7: Full Internal Audit Cycle",
    task: "Execute formal internal audit programme covering all ISO 22000:2018 clauses (4 to 10) using independent trained auditors; log findings in corrective action tracker.",
    status: "pass",
    actionNotes: "Internal audit completed with 2 minor findings closed"
  },
  {
    id: "iso-cert-8",
    category: "Stage 8: Executive Management Review",
    task: "Convene executive management review meeting evaluating FSMS performance, customer feedback, audit results, resource adequacy, and continual improvement initiatives.",
    status: "pass",
    actionNotes: "Executive review minutes and resource budget recorded"
  },
  {
    id: "iso-cert-9",
    category: "Stage 9: Stage 1 Certification Audit",
    task: "Host accredited certification body auditor for Stage 1 document review; evaluate FSMS preparedness, regulatory permits, and PRP readiness.",
    status: "pass",
    actionNotes: "Stage 1 audit passed; approved for Stage 2 on-site"
  },
  {
    id: "iso-cert-10",
    category: "Stage 10: Stage 2 On-Site Certification",
    task: "Undergo on-site Stage 2 certification assessment: demonstrate operational adherence, staff competency, CCP controls, and traceability under live operating conditions.",
    status: "pending",
    actionNotes: "Stage 2 on-site audit scheduled for next month"
  }
];

const SQF_AUDIT_TASKS: CheckItem[] = [
  {
    id: "sqf-1",
    category: "Module 2.1: Management Commitment",
    task: "Food safety policy statement signed and displayed; designated SQF Practitioner appointed with full HACCP training; monthly executive food safety meetings minuted.",
    status: "pass",
    actionNotes: "SQF Practitioner certificate on file"
  },
  {
    id: "sqf-2",
    category: "Module 2.2: Document Control & Records",
    task: "Food safety manual maintained with revision controls; all critical monitoring logs, inspection records, and calibration certificates securely archived.",
    status: "pass",
    actionNotes: "Electronic register updated with version control"
  },
  {
    id: "sqf-3",
    category: "Module 2.4: Food Safety Plan (HACCP)",
    task: "Comprehensive HACCP plan formulated according to CODEX principles, validated with scientific data, and reviewed annually or upon recipe change.",
    status: "pass",
    actionNotes: "Annual HACCP reassessment documented"
  },
  {
    id: "sqf-4",
    category: "Module 2.6: Traceability & Recall",
    task: "Mock recall test conducted bi-annually demonstrating 100% mass-balance reconciliation of finished product, ingredients, and rework within 4 hours.",
    status: "pass",
    actionNotes: "Traceability exercise achieved 100% in 2h 45m"
  },
  {
    id: "sqf-5",
    category: "Module 2.8: Allergen Management",
    task: "Allergen management plan active; incoming allergens identified and quarantined; dedicated colour-coded handling tools used; cleaning verified with ATP and allergen swabs.",
    status: "pass",
    actionNotes: "Protein swab tests verified clean prior to start-up"
  },
  {
    id: "sqf-6",
    category: "Module 11.2: Construction of Premises",
    task: "Floors, walls, doors, and ceilings constructed of impervious, non-toxic materials; drainage sloped toward grease traps; overhead lighting protected with shatterproof diffusers.",
    status: "pass",
    actionNotes: "Facility fabric audit completed"
  },
  {
    id: "sqf-7",
    category: "Module 11.3: Personnel Hygiene & Welfare",
    task: "Staff follow protective clothing policy; handwash basins equipped with warm water (35°C to 40°C), antibacterial soap, and disposable paper towels; sickness reporting enforced.",
    status: "pass",
    actionNotes: "Hand hygiene training audited on floor"
  },
  {
    id: "sqf-8",
    category: "Module 11.7: Foreign Matter Detection",
    task: "Inline metal detectors and optical sorters tested and challenged at start of shift, end of shift, and hourly with certified test pieces; reject mechanisms functional.",
    status: "pass",
    actionNotes: "Hourly metal detector test logs verified"
  }
];

const ISO_22000_INTERNAL_AUDIT_TASKS: CheckItem[] = [
  {
    id: "iso-audit-1",
    category: "Clause 4: Context of the Organisation",
    task: "Determine external and internal issues affecting food safety outcomes; map stakeholder needs; define and document the boundaries and applicability of the FSMS.",
    status: "pass",
    actionNotes: "Context analysis matrix reviewed and updated"
  },
  {
    id: "iso-audit-2",
    category: "Clause 5: Leadership & Commitment",
    task: "Top management demonstrates active leadership; ensures food safety policy is communicated and understood; establishes organizational roles, responsibilities, and authorities.",
    status: "pass",
    actionNotes: "Leadership interviews confirmed policy awareness"
  },
  {
    id: "iso-audit-3",
    category: "Clause 6: Planning for the FSMS",
    task: "Risk and opportunity assessment completed; measurable food safety objectives established across relevant functions and verified against continuous improvement plans.",
    status: "pass",
    actionNotes: "FSMS quality objectives reviewed against KPIs"
  },
  {
    id: "iso-audit-4",
    category: "Clause 7: Support & Resources",
    task: "Adequate infrastructure, hygiene facilities, and monitoring equipment provided; staff competency verified through training records; documented information controlled.",
    status: "pass",
    actionNotes: "Staff food hygiene training records verified"
  },
  {
    id: "iso-audit-5",
    category: "Clause 8: Operation & Hazard Control",
    task: "PRPs operational; hazard analysis conducted; CCPs and OPRPs monitored continuously within validated critical limits; emergency preparedness protocols documented.",
    status: "pass",
    actionNotes: "CCP thermal kill logs confirmed fully compliant"
  },
  {
    id: "iso-audit-6",
    category: "Clause 8.9: Non-Conforming Products",
    task: "Clear procedures for quarantining non-conforming product lots; corrective action root cause investigations logged; disposition authorised by Food Safety Team Leader.",
    status: "pass",
    actionNotes: "Quarantine cage locked and disposal log verified"
  },
  {
    id: "iso-audit-7",
    category: "Clause 9: Performance Evaluation",
    task: "Internal audit schedule executed by competent, impartial auditors; monitoring and measurement data analysed; executive management review conducted at planned intervals.",
    status: "pass",
    actionNotes: "Clause 9.2 internal audit plan executed on schedule"
  },
  {
    id: "iso-audit-8",
    category: "Clause 10: Continual Improvement",
    task: "Non-conformities and audit findings addressed with preventive and corrective actions; FSMS systematically updated to reflect new operational changes and scientific standards.",
    status: "pass",
    actionNotes: "Corrective action log verified with 100% closure"
  }
];
'''

# Find insertion point in DCL: right after KOSHER_CERTIFICATION_TASKS closing bracket
kosh_end = dcl_code.find('const DEFAULT_GENERAL_TASKS')
if kosh_end == -1:
    raise Exception("Could not find const DEFAULT_GENERAL_TASKS in DigitalChecklistTool.tsx")

dcl_code = dcl_code[:kosh_end] + new_tasks + "\n" + dcl_code[kosh_end:]

# Add detection flags inside getInitialTasks
det_anchor = 'const isBrcAudit ='
det_pos = dcl_code.find(det_anchor)
if det_pos == -1:
    raise Exception("Could not find const isBrcAudit in DigitalChecklistTool.tsx")

new_detection = '''const isGfsi =
    templateTitle.toLowerCase().includes("gfsi") ||
    (templateId && templateId.includes("gfsi"));
  const isIsoCert =
    templateTitle.toLowerCase().includes("get-iso-22000") ||
    templateTitle.toLowerCase().includes("get iso 22000") ||
    (templateId && templateId.includes("get-iso-22000"));
  const isSqfAudit =
    templateTitle.toLowerCase().includes("sqf") ||
    (templateId && templateId.includes("sqf"));
  const isIsoInternalAudit =
    (templateTitle.toLowerCase().includes("iso 22000") && templateTitle.toLowerCase().includes("internal")) ||
    (templateId && templateId.includes("iso-22000-internal"));
  '''

dcl_code = dcl_code[:det_pos] + new_detection + dcl_code[det_pos:]

# Add returns inside getInitialTasks
ret_anchor = 'if (isBrcAudit) return BRC_AUDIT_TASKS;'
ret_pos = dcl_code.find(ret_anchor)
if ret_pos == -1:
    raise Exception("Could not find if (isBrcAudit) return BRC_AUDIT_TASKS; in DigitalChecklistTool.tsx")

new_returns = '''if (isGfsi) return GFSI_AUDIT_TASKS;
    if (isIsoCert) return ISO_22000_CERTIFICATION_TASKS;
    if (isSqfAudit) return SQF_AUDIT_TASKS;
    if (isIsoInternalAudit) return ISO_22000_INTERNAL_AUDIT_TASKS;
    '''

dcl_code = dcl_code[:ret_pos] + new_returns + dcl_code[ret_pos:]

with open(dcl_path, 'w', encoding='utf-8') as f:
    f.write(dcl_code)
print("Updated DigitalChecklistTool.tsx with Batch 23 audit tasks and routing.")

# 2. Update core_metadata.json
meta_path = 'src/data/core_metadata.json'
with open(meta_path, 'r', encoding='utf-8') as f:
    core_meta = json.load(f)

core_meta["gmp-audit-checklist"] = {
    "title": "Free GMP Audit Checklist Template | Saim Dev",
    "desc": "Master Good Manufacturing Practice compliance across food processing lines. Free GMP audit checklist covering PRPs, pest control, hygiene, and staff.",
    "howTo": [
        "Audit personnel hygiene: verify clean protective uniforms, hairnets, beard snoods, and handwash basins.",
        "Inspect facility fabric: verify floors, walls, and ceilings are smooth, impervious, and crack-free.",
        "Check raw material storage: ensure colour-coded allergen segregation and strict temperature compliance.",
        "Verify equipment preventative maintenance schedules, calibration logs, and food-contact surface swabbing.",
        "Log findings, categorise non-conformances, and establish immediate corrective actions with assigned owners."
    ]
}

core_meta["gfsi-audit-checklist"] = {
    "title": "Free GFSI Audit Checklist Guide | Saim Dev",
    "desc": "Prepare for BRCGS, SQF, and FSSC 22000 certification audits. Free GFSI audit checklist covering management commitment, HACCP checks, and recall tests.",
    "howTo": [
        "Review senior management commitment: verify documented food safety culture policy and executive review minutes.",
        "Audit HACCP plan: validate critical control limits (e.g. 75°C core for 30s) against scientific evidence.",
        "Inspect environmental pathogen monitoring programme and review zone-by-zone swabbing trend analysis.",
        "Execute 4-hour mock recall exercise and confirm 100% mass-balance reconciliation across production batches.",
        "Review supplier assurance records, TACCP threat assessments, and VACCP food fraud vulnerability studies."
    ]
}

core_meta["get-iso-22000-certified"] = {
    "title": "Free ISO 22000 Certification Checklist | Saim Dev",
    "desc": "Follow a step-by-step 10-stage roadmap to achieve ISO 22000 certification. Free implementation checklist covering PRPs, CCP validation, and Stage 2 audits.",
    "howTo": [
        "Establish FSMS context, define food safety scope, and map interested party statutory requirements.",
        "Secure executive commitment, publish Food Safety Policy, and appoint certified Food Safety Team Leader.",
        "Implement sector-specific Prerequisite Programmes (PRPs) according to ISO/TS 22002-1 technical standards.",
        "Conduct hazard identification, determine acceptable levels, and categorise control measures into CCPs and OPRPs.",
        "Complete full internal audit cycle across Clauses 4 to 10, execute Stage 1 audit, and clear findings for Stage 2."
    ]
}

core_meta["sqf-audit-checklist"] = {
    "title": "Free SQF Audit Checklist Template | Saim Dev",
    "desc": "Streamline Safe Quality Food Edition 9 compliance with an interactive audit tool. Free SQF checklist covering Module 2 system elements and Module 11 GMPs.",
    "howTo": [
        "Verify Module 2 management commitment: inspect SQF Practitioner credentials and document control registers.",
        "Audit Module 2.4 food safety plan: review HACCP flow diagrams, critical limits, and monitoring frequencies.",
        "Test product identification, trace, and recall: verify bi-annual 4-hour mass-balance mock recall records.",
        "Inspect Module 11 premises construction: verify sanitary drainage, shatterproof lighting, and pest proofing.",
        "Challenge foreign matter detection: test inline metal detectors hourly with certified Fe, Non-Fe, and SS wands."
    ]
}

core_meta["iso-22000-internal-audit-checklist"] = {
    "title": "Free ISO 22000 Internal Audit Checklist | Saim Dev",
    "desc": "Conduct rigorous ISO 22000:2018 internal audits across Clauses 4 to 10. Free interactive checklist with evidence logging and non-conformance tracking.",
    "howTo": [
        "Plan internal audit schedule: assign impartial, qualified auditors and define scope for Clauses 4 through 10.",
        "Audit Clause 5 leadership and Clause 6 risk planning: review food safety culture metrics and measurable KPIs.",
        "Examine Clause 7 support: verify equipment calibration certificates, staff competency files, and document controls.",
        "Audit Clause 8 operations: review PRP monitoring, hazard control plan execution, and non-conformance quarantine.",
        "Evaluate Clause 9 performance and Clause 10 improvement: log audit findings, issue CARs, and track corrective action closure."
    ]
}

with open(meta_path, 'w', encoding='utf-8') as f:
    json.dump(core_meta, f, indent=2, ensure_ascii=False)
print("Updated core_metadata.json for Batch 23 tools.")

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

batch23_deep_items = '''
  "gmp-audit-checklist": {
    directAnswer:
      "A Good Manufacturing Practice (GMP) audit checklist verifies that a food processing facility adheres to foundational hygiene, environmental, and operational standards required by UK food hygiene regulations and Codex Alimentarius. Conducting systematic GMP audits ensures personnel hygiene, facility sanitation, pest barriers, and allergen controls are operating effectively to prevent contamination.",
    howTo: [
      "Audit personnel hygiene: verify staff wear clean protective uniforms, hairnets, beard snoods, and wash hands at designated stations upon entering production.",
      "Inspect facility infrastructure: check floors, walls, and ceilings for smooth, impervious surfaces with no cracks, condensation, or flaking paint.",
      "Review raw ingredient storage: confirm colour-coded allergen segregation, raw and ready-to-eat separation, and chiller temperatures maintained below 5.0°C.",
      "Examine equipment maintenance: inspect preventative maintenance logs, sanitary welds, oil seals, and annual calibration certificates for thermometer probes.",
      "Log audit findings, categorise non-conformances into minor, major, or critical, and assign corrective action owners with completion deadlines."
    ],
    faqs: [
      {
        q: "How frequently should a food manufacturing plant conduct internal GMP audits?",
        a: "High-care and ready-to-eat food facilities typically conduct GMP audits on a monthly or bi-weekly cycle, with individual operational sections (e.g. hygiene, pest control, equipment condition) audited on a rotating weekly schedule."
      },
      {
        q: "What is the difference between GMP and HACCP?",
        a: "GMPs (Good Manufacturing Practices) are the foundational prerequisite programmes (PRPs) that establish a clean, controlled environment across the entire plant. HACCP is a product- and process-specific food safety plan that targets specific microbiological, chemical, and physical hazards at critical control points."
      },
      {
        q: "What are the common non-conformances discovered during GMP audits?",
        a: "Frequent findings include broken or missing handwash station supplies (soap/paper towels), damaged rubber door sweeps allowing pest ingress, unlabelled allergen scoops, water pooling due to poor floor drainage slope, and flaking paint on overhead structures."
      },
      {
        q: "How does a structured GMP audit checklist support GFSI certification?",
        a: "GFSI-benchmarked schemes such as BRCGS, SQF, and FSSC 22000 require robust prerequisite programmes. Documented GMP audit records with evidence of root-cause corrective actions serve as mandatory compliance evidence during third-party certification audits."
      },
      {
        q: "Can this GMP audit checklist be used for warehouse and distribution facilities?",
        a: "Yes. The checklist can be adapted for ambient, chilled, and frozen storage facilities by focusing on pallet condition, vehicle cleanliness, pest monitoring, temperature logging, and stock rotation (FIFO)."
      }
    ],
    relatedTools: [
      "gfsi-audit-checklist",
      "haccp-plan-template",
      "commercial-kitchen-cleaning-checklist"
    ],
    relatedBlog: {
      title: "How to Get a 5-Star Food Hygiene Rating: UK EHO Checklist",
      slug: "uk-food-hygiene-rating-scheme-5-star-checklist"
    }
  },
  "gfsi-audit-checklist": {
    directAnswer:
      "A GFSI audit checklist prepares food manufacturers and processors for third-party audits benchmarked by the Global Food Safety Initiative (GFSI), such as BRCGS Global Standard for Food Safety, SQF Code, and FSSC 22000. It covers senior management commitment, HACCP validation, environmental monitoring, mock recalls, and supply chain security.",
    howTo: [
      "Evaluate senior management commitment: review documented Food Safety Culture initiatives, measurable safety objectives, and quarterly executive review minutes.",
      "Audit HACCP plan: verify process flow diagrams against live production and confirm critical control limits are validated with scientific literature.",
      "Review environmental monitoring: audit pathogen swabbing trends for Listeria monocytogenes and Salmonella in high-risk post-lethality areas.",
      "Execute traceability exercise: conduct an unannounced mock recall and confirm 100% mass-balance reconciliation across ingredients and finished batches within 4 hours.",
      "Verify supplier assurance: inspect approved vendor files, TACCP threat assessments for food defense, and VACCP vulnerability studies for food fraud."
    ],
    faqs: [
      {
        q: "What standards are benchmarked under the Global Food Safety Initiative (GFSI)?",
        a: "Major GFSI-benchmarked standards include BRCGS Global Standard for Food Safety, SQF (Safe Quality Food) Code, FSSC 22000, IFS Food, and GlobalGAP. Certification to any benchmarked scheme is internationally recognised by major retailers and food service operators."
      },
      {
        q: "What is the mandatory mock recall window required for GFSI audits?",
        a: "GFSI benchmarked standards, including BRCGS Issue 9 and SQF Edition 9, require a complete traceability and mass-balance recall exercise to be executed and reconciled within a maximum timeframe of 4 hours."
      },
      {
        q: "How does GFSI audit readiness differ from standard local council EHO inspections?",
        a: "While UK Local Authority EHO audits evaluate statutory compliance with Food Hygiene Regulations (EC 852/2004), GFSI audits evaluate a comprehensive management system including food safety culture, supplier approval, foreign body prevention, validation data, and continuous improvement."
      },
      {
        q: "What is Food Safety Culture in a GFSI audit context?",
        a: "Food Safety Culture refers to the shared values, beliefs, and operational norms affecting food safety attitudes across all levels of an organisation, evidenced through clear whistleblowing channels, staff training, management investment, and employee engagement."
      },
      {
        q: "How often are GFSI certification audits conducted?",
        a: "GFSI certification audits occur annually. Facilities typically undergo announced audits, with accredited certification bodies also requiring unannounced audits at least once every three years."
      }
    ],
    relatedTools: [
      "gmp-audit-checklist",
      "brc-audit",
      "sqf-audit-checklist"
    ],
    relatedBlog: {
      title: "How to Write a HACCP Plan for UK Food Businesses: Step-by-Step",
      slug: "how-to-write-haccp-plan-uk-food-business-step-by-step"
    }
  },
  "get-iso-22000-certified": {
    directAnswer:
      "Getting ISO 22000 certified involves implementing a globally recognized Food Safety Management System (FSMS) based on ISO 22000:2018. The certification roadmap encompasses 10 systematic phases: context definition, leadership commitment, hazard analysis, prerequisite programmes (PRPs), CCP and OPRP validation, internal audits, management reviews, Stage 1 documentation assessment, and Stage 2 on-site certification.",
    howTo: [
      "Phase 1 & 2: Define FSMS scope, identify internal/external food safety issues, secure leadership commitment, and appoint the Food Safety Team Leader.",
      "Phase 3 & 4: Implement sector-specific Prerequisite Programmes (ISO/TS 22002-1) and execute hazard analysis to categorise control measures into CCPs and OPRPs.",
      "Phase 5 & 6: Scientifically validate critical limits, deploy continuous digital monitoring equipment, and document corrective action protocols.",
      "Phase 7 & 8: Conduct full internal audit cycle across Clauses 4 to 10 and convene executive management review meeting to evaluate system performance.",
      "Phase 9 & 10: Undergo independent Stage 1 readiness audit, resolve any non-conformances, and complete Stage 2 on-site certification audit to achieve accredited certification."
    ],
    faqs: [
      {
        q: "What is the primary difference between ISO 22000 and FSSC 22000?",
        a: "ISO 22000 is an international food safety management system standard issued by ISO. FSSC 22000 combines ISO 22000 with sector-specific PRPs (ISO/TS 22002-1) and additional FSSC-specific requirements, making FSSC 22000 fully benchmarked by GFSI."
      },
      {
        q: "How long does it take for a food business to achieve ISO 22000 certification?",
        a: "The implementation timeline typically ranges from 6 to 12 months, depending on the maturity of existing food safety controls, staff training requirements, and time needed to collect sufficient verification and internal audit data."
      },
      {
        q: "What is an OPRP in ISO 22000:2018?",
        a: "An Operational Prerequisite Programme (OPRP) is a control measure identified by hazard analysis as essential to prevent or reduce a significant food safety hazard to an acceptable level, managed with action criteria rather than traditional strict critical limits."
      },
      {
        q: "What happens during the Stage 1 and Stage 2 ISO 22000 audits?",
        a: "Stage 1 is a documentation and readiness review where the certification body verifies that FSMS policies, hazard analysis, and internal audits comply with ISO requirements. Stage 2 is an extensive on-site audit evaluating live operational implementation and staff adherence."
      },
      {
        q: "Is ISO 22000 certification mandatory for UK food businesses?",
        a: "No. Statutory UK law requires compliance with hygiene regulations and HACCP principles (EC 852/2004), but ISO 22000 is voluntary and sought by commercial food manufacturers to access tier-one retail, contract manufacturing, and international export markets."
      }
    ],
    relatedTools: [
      "iso-22000-internal-audit-checklist",
      "gfsi-audit-checklist",
      "haccp-plan-template"
    ],
    relatedBlog: {
      title: "How to Write a HACCP Plan for UK Food Businesses: Step-by-Step",
      slug: "how-to-write-haccp-plan-uk-food-business-step-by-step"
    }
  },
  "sqf-audit-checklist": {
    directAnswer:
      "An SQF audit checklist benchmarks food manufacturing and packaging operations against the Safe Quality Food (SQF) Code Edition 9. It evaluates Module 2 System Elements—including management commitment, HACCP, allergen control, and traceability—alongside Module 11 Good Manufacturing Practices (GMP) for food processing facilities.",
    howTo: [
      "Audit Module 2.1 Management Commitment: verify appointment of certified SQF Practitioner, monthly food safety review minutes, and displayed policy statement.",
      "Review Module 2.4 Food Safety Plan: inspect validated HACCP flow diagrams, critical limits, hazard analysis records, and mandatory annual reassessments.",
      "Verify Module 2.6 Product Traceability: review bi-annual 4-hour mass-balance mock recall records demonstrating 100% reconciliation across raw materials and finished goods.",
      "Inspect Module 11 Facility Hygiene: check sanitary drainage, impervious floors and walls, insect screens, and shatterproof lighting diffusers.",
      "Audit Module 11.7 Foreign Matter Controls: challenge inline metal detectors hourly with certified ferrous, non-ferrous, and stainless steel test pieces; verify reject arm function."
    ],
    faqs: [
      {
        q: "What are the core requirements to become an SQF Practitioner?",
        a: "An SQF Practitioner must be a permanent, full-time employee, have completed an accredited HACCP training course (minimum 2 days / 16 hours), and demonstrate comprehensive knowledge of the SQF Code Edition 9."
      },
      {
        q: "How does SQF classify non-conformances during an audit?",
        a: "SQF classifies audit findings into Minor Non-Conformance (1 point deduction), Major Non-Conformance (10 points deduction), and Critical Non-Conformance (immediate audit failure and certification suspension if public health is threatened)."
      },
      {
        q: "What score is required to achieve an SQF Excellent rating?",
        a: "An SQF audit score of 96% to 100% achieves an 'Excellent' rating with an annual audit cycle. A score of 86% to 95% achieves 'Good'. Scores between 70% and 85% achieve 'Complies', requiring a 6-month surveillance audit."
      },
      {
        q: "Are unannounced audits required under SQF Edition 9?",
        a: "Yes. Every SQF-certified site must undergo one mandatory unannounced audit once every three years to verify that standard operating procedures are maintained continuously on ordinary operating days."
      },
      {
        q: "What allergen controls does SQF Edition 9 mandate?",
        a: "SQF mandates an active Allergen Management Plan, validation of cleaning procedures with quantitative test swabs (e.g. ELISA/lateral flow), segregation of allergen ingredients, and training for all staff handling allergenic materials."
      }
    ],
    relatedTools: [
      "gfsi-audit-checklist",
      "gmp-audit-checklist",
      "brc-audit"
    ],
    relatedBlog: {
      title: "Natasha's Law PPDS Food Labelling Guide",
      slug: "natashas-law-ppds-food-labelling-guide"
    }
  },
  "iso-22000-internal-audit-checklist": {
    directAnswer:
      "An ISO 22000 internal audit checklist enables food businesses to systematically verify compliance with Clauses 4 through 10 of ISO 22000:2018. It guides internal auditors through evaluating context of the organisation, leadership, risk planning, prerequisite programmes (PRPs), hazard analysis (CCPs/OPRPs), performance measurement, and corrective action closure.",
    howTo: [
      "Plan internal audit schedule: define audit scope, ensure auditor independence from audited activities, and review previous non-conformances.",
      "Audit Clause 4 & 5: evaluate documented FSMS scope, food safety policy communication, and top management resource allocation.",
      "Audit Clause 6 & 7: review food safety objectives, risk and opportunity registers, monitoring device calibration, and personnel competence records.",
      "Audit Clause 8: assess PRP monitoring records, hazard control plans, CCP thermal logs (e.g. 75°C core for 30s), and product non-conformance quarantine procedures.",
      "Audit Clause 9 & 10: evaluate internal audit reports, executive management review minutes, and root-cause corrective action closure rates."
    ],
    faqs: [
      {
        q: "Who is qualified to conduct an ISO 22000 internal audit?",
        a: "Internal auditors must be trained in ISO 22000:2018 standards and audit methodologies (ISO 19011). Crucially, auditors must be impartial and cannot audit their own day-to-day operational responsibilities."
      },
      {
        q: "How often must internal audits be conducted under ISO 22000 Clause 9.2?",
        a: "The standard requires internal audits to be conducted at planned intervals. Best practice is to establish an annual schedule where all clauses and operational departments are audited at least once per year, with high-risk processes audited quarterly."
      },
      {
        q: "What documentation must be available during an ISO 22000 internal audit?",
        a: "Auditors examine the Food Safety Manual, PRP procedures, HACCP plans, hazard analysis studies, CCP/OPRP monitoring logs, calibration records, supplier evaluations, mock recall results, and corrective action requests (CARs)."
      },
      {
        q: "How should internal audit findings and non-conformances be managed?",
        a: "Every finding must be logged in a Corrective Action Request (CAR) with immediate containment, root-cause investigation (e.g. 5 Whys), corrective action implementation, and auditor verification of effectiveness before sign-off."
      },
      {
        q: "What role does the executive management review play in ISO 22000 internal audits?",
        a: "Under Clause 9.3, all internal audit findings, trends, and non-conformances must be formally presented to executive management during planned review meetings to determine resource allocation and strategic FSMS improvements."
      }
    ],
    relatedTools: [
      "get-iso-22000-certified",
      "gfsi-audit-checklist",
      "haccp-plan-template"
    ],
    relatedBlog: {
      title: "How to Write a HACCP Plan for UK Food Businesses: Step-by-Step",
      slug: "how-to-write-haccp-plan-uk-food-business-step-by-step"
    }
  }
'''

new_deep_code = pre_text + batch23_deep_items + "\n};\n\n" + deep_code[fallback_pos:]

with open(deep_path, 'w', encoding='utf-8') as f:
    f.write(new_deep_code)
print("Updated tool_deep_content.ts with Batch 23 deep content.")

# 4. Update tracker
tracker_path = 'audit/tools-seo-tracker.json'
with open(tracker_path, 'r', encoding='utf-8') as f:
    tracker = json.load(f)

batch23_data = {
    "gmp-audit-checklist": {
        "priority_rank": 111,
        "target_keyword": "gmp audit checklist",
        "top_5_competitors": [
            "https://safetyculture.com/checklists/gmp-audit/",
            "https://www.fooddocs.com/post/gmp-audit-checklist",
            "https://www.lumiform.app/template/gmp-audit-checklist",
            "https://www.process.st/templates/gmp-audit-checklist/",
            "https://www.datacollaborative.com/blog/gmp-inspection-checklist-food-safety"
        ],
        "differentiators": [
            "Pre-configured ISO 22000 / Codex Alimentarius GMP clauses with interactive pass/fail tracking",
            "Allergen cross-contact segregation protocols aligned with Natasha's Law",
            "Real-time non-conformance severity logging with corrective action notes",
            "Zero paywall, 100% free client-side interactive tool",
            "Clean A4 PDF export formatted for official third-party audits"
        ]
    },
    "gfsi-audit-checklist": {
        "priority_rank": 112,
        "target_keyword": "gfsi audit checklist",
        "top_5_competitors": [
            "https://safetyculture.com/checklists/gfsi-audit/",
            "https://www.fooddocs.com/post/gfsi-audit-checklist",
            "https://www.lumiform.app/template/gfsi-audit",
            "https://www.mygfsi.com/how-to-implement/assessment-checklist/",
            "https://www.cert-id.com/gfsi-gap-analysis-checklist"
        ],
        "differentiators": [
            "Covers GFSI Benchmarking Requirements v2020: Senior Management, HACCP, FSQMS, and PRPs",
            "Interactive scoring with automatic non-conformance categorization",
            "Mock recall 4-hour mass-balance reconciliation verification checkpoint",
            "Zero signup gate or PDF email capture required",
            "One-click print for external certification body reviews"
        ]
    },
    "get-iso-22000-certified": {
        "priority_rank": 113,
        "target_keyword": "get iso 22000 certified",
        "top_5_competitors": [
            "https://www.bsigroup.com/en-GB/iso-22000-food-safety-management/how-to-get-certified/",
            "https://www.nqa.com/en-gb/certification/standards/iso-22000",
            "https://www.iso-9001-checklist.co.uk/how-to-get-iso-22000-certified.htm",
            "https://www.sgs.com/en-gb/services/iso-22000-food-safety-management-systems-certification",
            "https://www.fooddocs.com/post/how-to-get-iso-22000-certified"
        ],
        "differentiators": [
            "10-step interactive implementation roadmap from GAP analysis to Stage 1 & Stage 2 audits",
            "PRP and OPRP/CCP validation checklist with thermal kill curve standards",
            "PDCA executive management review tracker",
            "Zero consulting paywall: accessible interactive guidance directly in-browser",
            "Printable implementation progress report for executive leadership"
        ]
    },
    "sqf-audit-checklist": {
        "priority_rank": 114,
        "target_keyword": "sqf audit checklist",
        "top_5_competitors": [
            "https://safetyculture.com/checklists/sqf-audit/",
            "https://www.fooddocs.com/post/sqf-audit-checklist",
            "https://www.lumiform.app/template/sqf-audit-checklist",
            "https://www.sqfi.com/resource-center/sqf-code-edition-9-checklists/",
            "https://www.process.st/templates/sqf-internal-audit-checklist/"
        ],
        "differentiators": [
            "Structured around SQF Code Edition 9 System Elements (Module 2) and GMPs (Module 11)",
            "Minor, Major, and Critical non-conformance severity classification",
            "Mandatory unannounced audit readiness validation checklist",
            "100% free interactive browser tool with local storage save",
            "Clean A4 export for SQF Practitioner sign-off"
        ]
    },
    "iso-22000-internal-audit-checklist": {
        "priority_rank": 115,
        "target_keyword": "iso 22000 internal audit checklist",
        "top_5_competitors": [
            "https://www.iso-9001-checklist.co.uk/iso-22000-internal-audit-checklist.htm",
            "https://safetyculture.com/checklists/iso-22000-internal-audit/",
            "https://www.fooddocs.com/post/iso-22000-internal-audit-checklist",
            "https://www.lumiform.app/template/iso-22000-internal-audit",
            "https://www.advisera.com/22000academy/knowledgebase/checklist-of-mandatory-documentation-required-by-iso-22000-2018/"
        ],
        "differentiators": [
            "Clause-by-Clause audit breakdown for ISO 22000:2018 (Clauses 4 through 10)",
            "Context, leadership, planning, support, operations, performance evaluation, and continual improvement",
            "Objective evidence logging and auditor sign-off per clause",
            "Zero download barrier, free interactive status tracking",
            "Instant print to official audit record format"
        ]
    }
}

for row in tracker:
    slug = row.get("slug")
    if slug in batch23_data:
        info = batch23_data[slug]
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
print(f"Batch 23 application complete! Total completed tools: {completed_count}/160")
