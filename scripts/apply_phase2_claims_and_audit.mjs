import fs from "fs";
import path from "path";

const claimsLog = [];

function recordClaimChange(file, line, before, after, reason) {
  claimsLog.push({
    file,
    line,
    before: before.replace(/"/g, '""'),
    after: after.replace(/"/g, '""'),
    reason: reason.replace(/"/g, '""')
  });
}

// 1. Process app/tools/page.tsx and app/food-safety-templates/page.tsx
for (const p of ["app/tools/page.tsx", "app/food-safety-templates/page.tsx"]) {
  let content = fs.readFileSync(p, "utf8");
  const origLines = content.split("\n");
  
  const beforeDesc = '100% Free downloads compliant with UK Natasha\'s Law & FSA standards.';
  const afterDesc = 'Free printable kitchen templates, logs, checklists, and food safety tools for hospitality teams.';
  if (content.includes(beforeDesc)) {
    const lineNo = origLines.findIndex(l => l.includes(beforeDesc)) + 1;
    content = content.replace(beforeDesc, afterDesc);
    recordClaimChange(p, lineNo, beforeDesc, afterDesc, "Removed compliance & 100% claim from meta description");
  }

  const beforeOg = 'All 170+ Food Safety Posters, Logs, Checklists, and Interactive Smart Calculators. 100% Free forever.';
  const afterOg = 'Food safety posters, logs, checklists, and interactive kitchen calculators for hospitality teams.';
  if (content.includes(beforeOg)) {
    const lineNo = origLines.findIndex(l => l.includes(beforeOg)) + 1;
    content = content.replace(beforeOg, afterOg);
    recordClaimChange(p, lineNo, beforeOg, afterOg, "Removed 170+ and 100% free claims from OG description");
  }

  fs.writeFileSync(p, content, "utf8");
}

// 2. Process src/components/FoodSafetyTemplatesPage.tsx
{
  const p = "src/components/FoodSafetyTemplatesPage.tsx";
  let content = fs.readFileSync(p, "utf8");
  const origLines = content.split("\n");

  // import FoodSafetyDisclaimer
  if (!content.includes("FoodSafetyDisclaimer")) {
    content = content.replace(
      'import { RecipeCalculatorTool } from "./tools/RecipeCalculatorTool";',
      'import { RecipeCalculatorTool } from "./tools/RecipeCalculatorTool";\nimport { FoodSafetyDisclaimer } from "./FoodSafetyDisclaimer";'
    );
  }

  // Header / Hero changes
  const replacements = [
    {
      before: '<span>Official HACCP &amp; Food Hygiene Resources</span>',
      after: '<span>Kitchen Hygiene &amp; Food Safety Resources</span>',
      reason: 'Removed "Official" claim from hub badge'
    },
    {
      before: "to streamline Natasha's Law compliance and achieve 5-Star Food Hygiene ratings.",
      after: "to help kitchen teams organise records, train staff, and maintain consistent daily hygiene routines.",
      reason: 'Removed Natasha\'s Law compliance and 5-Star rating guarantees'
    },
    {
      before: '100% Free Interactive Templates &amp; Compliance Hub',
      after: 'Kitchen Safety Templates &amp; Record Tools',
      reason: 'Removed "100% Free" and "Compliance Hub" marketing claim'
    },
    {
      before: 'All 160+ Posters, Logs, Charts &amp; Smart Tools Free',
      after: 'Free Printable &amp; Digital Food Safety Records',
      reason: 'Replaced conflicting "All 160+" count with neutral heading'
    },
    {
      before: 'Customize compliance sheets online and print or save as PDF with zero sign-up.',
      after: 'Customise kitchen sheets online and print or save as PDF with zero sign-up.',
      reason: 'Neutralised compliance claim'
    },
    {
      before: "Need automated Natasha's Law allergen filtering on your menu?",
      after: "Need an online menu with an allergen filter?",
      reason: 'Updated conversion CTA to neutral phrasing as specified in prompt'
    },
    {
      before: 'Food safety templates streamline compliance, enhance operational consistency, and reduce risks of foodborne illnesses.',
      after: 'Food safety templates help standardise routines, organise kitchen records, and support daily food hygiene.',
      reason: 'Neutralised compliance and illness reduction claims'
    },
    {
      before: "Temperature logs and calibration records support HACCP monitoring, Natasha's Law, and EHO audit readiness.",
      after: "Temperature logs and calibration records help teams track daily checks and keep organised records.",
      reason: 'Removed EHO audit readiness claim'
    },
    {
      before: 'Our customizable templates are essential tools for comprehensive food safety management, allowing you to manage food safety hazards and maintain compliance effortlessly.',
      after: 'Our templates help kitchen teams organise records and maintain consistent daily procedures.',
      reason: 'Removed "maintain compliance effortlessly" claim'
    },
    {
      before: 'Comprehensive food safety checklists: your daily compliance partners',
      after: 'Food safety checklists for daily kitchen routines',
      reason: 'Removed compliance partner claim'
    },
    {
      before: 'Checklists are essential tools for maintaining consistency and compliance in daily operations. Use the Restaurant Cleaning Checklist and Kitchen Opening and Closing Checklist to maintain a spotless environment every shift. The Health Inspection Checklist ensures your team is always audit-ready.',
      after: 'Checklists help maintain consistency in daily operations. Use the Restaurant Cleaning Checklist and Kitchen Opening and Closing Checklist to support daily cleanliness. The Health Inspection Checklist helps your team review standards before an inspection.',
      reason: 'Removed audit-ready guarantee'
    },
    {
      before: '<h4 className="font-bold text-sm text-gray-900 mb-1">1. Enhanced compliance and reduced risk</h4>\n                <p className="text-xs text-gray-600 leading-relaxed">Meet local authority and FSA food safety standards consistently.</p>',
      after: '<h4 className="font-bold text-sm text-gray-900 mb-1">1. Organised documentation</h4>\n                <p className="text-xs text-gray-600 leading-relaxed">Keep kitchen records structured and accessible for staff and supervisors.</p>',
      reason: 'Removed "Meet FSA standards consistently" claim'
    },
    {
      before: '<h4 className="font-bold text-sm text-gray-900 mb-1">4. Enhanced customer trust &amp; 5★ ratings</h4>\n                <p className="text-xs text-gray-600 leading-relaxed">Protect your reputation and prevent catastrophic allergy incidents.</p>',
      after: '<h4 className="font-bold text-sm text-gray-900 mb-1">4. Consistent team routines</h4>\n                <p className="text-xs text-gray-600 leading-relaxed">Provide clear visual guidance and daily logs for kitchen staff.</p>',
      reason: 'Removed 5-star rating and "prevent catastrophic allergy incidents" claim'
    },
    {
      before: '<p>© 2026 Saim Dev. All 160+ Food Safety Templates, Checklists &amp; Posters are 100% Free.</p>',
      after: '<p>© 2026 Saim Dev. Free kitchen templates, checklists, and tools.</p>',
      reason: 'Removed conflicting 160+ count and 100% free claim'
    }
  ];

  for (const rep of replacements) {
    if (content.includes(rep.before)) {
      const lineNo = origLines.findIndex(l => l.includes(rep.before.split("\n")[0])) + 1;
      content = content.replace(rep.before, rep.after);
      recordClaimChange(p, lineNo, rep.before.split("\n")[0], rep.after.split("\n")[0], rep.reason);
    }
  }

  // Mount disclaimer on hub page right before editorial section
  if (!content.includes("<FoodSafetyDisclaimer")) {
    const target = '<section className="editorial-section';
    content = content.replace(
      target,
      `<div className="max-w-7xl mx-auto px-4 sm:px-8 pb-8 no-print">\n        <FoodSafetyDisclaimer />\n      </div>\n\n      ` + target
    );
  }

  fs.writeFileSync(p, content, "utf8");
}

// 3. Process src/components/TemplateDetailPage.tsx
{
  const p = "src/components/TemplateDetailPage.tsx";
  let content = fs.readFileSync(p, "utf8");
  const origLines = content.split("\n");

  if (content.includes("Active Compliance Date")) {
    const lineNo = origLines.findIndex(l => l.includes("Active Compliance Date")) + 1;
    content = content.replace("Active Compliance Date", "Date of Record");
    recordClaimChange(p, lineNo, "Active Compliance Date", "Date of Record", "Replaced compliance label with neutral record date");
  }

  if (content.includes("Manager Sign-Off / Responsible Person")) {
    const lineNo = origLines.findIndex(l => l.includes("Manager Sign-Off / Responsible Person")) + 1;
    content = content.replace("Manager Sign-Off / Responsible Person", "Checked By / Responsible Person");
    recordClaimChange(p, lineNo, "Manager Sign-Off / Responsible Person", "Checked By / Responsible Person", "Replaced sign-off with neutral checked-by");
  }

  fs.writeFileSync(p, content, "utf8");
}

// 4. Process src/components/tools/HaccpPlanBuilderTool.tsx
{
  const p = "src/components/tools/HaccpPlanBuilderTool.tsx";
  let content = fs.readFileSync(p, "utf8");
  const origLines = content.split("\n");

  if (content.includes("Codex Alimentarius &amp; UK FSA Compliant")) {
    const lineNo = origLines.findIndex(l => l.includes("Codex Alimentarius &amp; UK FSA Compliant")) + 1;
    content = content.replace(
      "Codex Alimentarius &amp; UK FSA Compliant",
      "Based on Codex Alimentarius HACCP Principles"
    );
    recordClaimChange(p, lineNo, "Codex Alimentarius &amp; UK FSA Compliant", "Based on Codex Alimentarius HACCP Principles", "Removed false FSA compliance claim from tool header");
  }

  if (content.includes("for EHO compliance")) {
    const lineNo = origLines.findIndex(l => l.includes("for EHO compliance")) + 1;
    content = content.replace("for EHO compliance.", "for kitchen records.");
    recordClaimChange(p, lineNo, "for EHO compliance.", "for kitchen records.", "Removed unverified EHO compliance claim");
  }

  fs.writeFileSync(p, content, "utf8");
}

// 5. Process src/components/tools/FoodSafetyQuizTool.tsx
{
  const p = "src/components/tools/FoodSafetyQuizTool.tsx";
  let content = fs.readFileSync(p, "utf8");
  const origLines = content.split("\n");

  if (content.includes("Official UK Food Hygiene Level 2 Training Standard")) {
    const lineNo = origLines.findIndex(l => l.includes("Official UK Food Hygiene Level 2 Training Standard")) + 1;
    content = content.replace("Official UK Food Hygiene Level 2 Training Standard", "UK Food Hygiene Level 2 Practice Quiz");
    recordClaimChange(p, lineNo, "Official UK Food Hygiene Level 2 Training Standard", "UK Food Hygiene Level 2 Practice Quiz", "Removed 'Official' claim");
  }

  if (content.includes("guarantee the disinfectant kills")) {
    const lineNo = origLines.findIndex(l => l.includes("guarantee the disinfectant kills")) + 1;
    content = content.replace("guarantee the disinfectant kills", "specify that the disinfectant kills");
    recordClaimChange(p, lineNo, "guarantee the disinfectant kills", "specify that the disinfectant kills", "Replaced guarantee with standard specification phrasing");
  }

  fs.writeFileSync(p, content, "utf8");
}

// 6. Process src/components/tools/RecipeCalculatorTool.tsx
{
  const p = "src/components/tools/RecipeCalculatorTool.tsx";
  let content = fs.readFileSync(p, "utf8");
  const origLines = content.split("\n");

  if (content.includes("with 100% mathematical accuracy")) {
    const lineNo = origLines.findIndex(l => l.includes("with 100% mathematical accuracy")) + 1;
    content = content.replace("with 100% mathematical accuracy.", "accurately.");
    recordClaimChange(p, lineNo, "with 100% mathematical accuracy.", "accurately.", "Removed '100%' claim");
  }

  fs.writeFileSync(p, content, "utf8");
}

// 7. Process src/data/saim_templates.ts descriptions
{
  const p = "src/data/saim_templates.ts";
  let content = fs.readFileSync(p, "utf8");
  const origLines = content.split("\n");

  origLines.forEach((line, idx) => {
    let newLine = line;
    let changed = false;
    let reason = "";

    // Pattern 1: "Official kitchen wall poster for X. Promotes compliance with UK Food Standards Agency (FSA) and Natasha's Law guidelines. Free printable A4/A3 format."
    if (line.includes("Official kitchen wall poster for")) {
      newLine = newLine.replace(
        /Official kitchen wall poster for (.*?)\. Promotes compliance with UK Food Standards Agency \(FSA\) and Natasha's Law guidelines\. Free printable A4\/A3 format\./,
        "Kitchen wall poster for $1. Designed as a visual reference for food handlers. Printable format."
      );
      changed = true;
      reason = "Removed 'Official' and 'compliance with FSA & Natasha\\'s Law' claims from poster description";
    }

    // Pattern 2: "Comprehensive food hygiene and compliance checklist for X. Designed for daily kitchen supervisor verification and local authority (EHO) audits."
    if (line.includes("Comprehensive food hygiene and compliance checklist for")) {
      newLine = newLine.replace(
        /Comprehensive food hygiene and compliance checklist for (.*?)\. Designed for daily kitchen supervisor verification and local authority \(EHO\) audits\./,
        "Kitchen checklist for $1. Helps supervisors and team members organise daily checks and documentation."
      );
      changed = true;
      reason = "Removed 'compliance' and 'EHO audits' claims from checklist description";
    }

    // Pattern 3: "Mandatory record keeping log for X. Essential for HACCP documentation, due diligence, and 5-Star Food Hygiene ratings."
    if (line.includes("Mandatory record keeping log for")) {
      newLine = newLine.replace(
        /Mandatory record keeping log for (.*?)\. Essential for HACCP documentation, due diligence, and 5-Star Food Hygiene ratings\./,
        "Record-keeping log for $1. Designed to help kitchen teams record daily checks and maintain documentation."
      );
      changed = true;
      reason = "Removed 'Mandatory' and '5-Star Food Hygiene ratings' claims from log description";
    }

    if (changed && newLine !== line) {
      recordClaimChange(p, idx + 1, line.trim(), newLine.trim(), reason);
      origLines[idx] = newLine;
    }
  });

  content = origLines.join("\n");
  fs.writeFileSync(p, content, "utf8");
}

// Write review/claims-review.csv
const claimsCsv = [
  "file,line,before,after,reason",
  ...claimsLog.map(c => `"${c.file}",${c.line},"${c.before}","${c.after}","${c.reason}"`)
].join("\n");

fs.writeFileSync("review/claims-review.csv", claimsCsv, "utf8");
console.log(`Generated review/claims-review.csv with ${claimsLog.length} claim modifications.`);
