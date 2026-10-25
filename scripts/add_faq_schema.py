# -*- coding: utf-8 -*-
import re

file_path = "app/food-safety-templates/[slug]/page.tsx"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

faq_code = '''  // 3. FAQPage Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `Is the ${template.title} suitable for UK Environmental Health Officer (EHO) inspections?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. This template and digital logging workflow are developed in line with UK Food Standards Agency (FSA) Safer Food, Better Business (SFBB) standards and HACCP Article 5 of Regulation (EC) No 852/2004. When maintained with genuine operating data and supervisor sign-offs, it fulfills statutory record-keeping and due diligence requirements under the Food Safety Act 1990."
        }
      },
      {
        "@type": "Question",
        "name": "How frequently should kitchen staff complete and sign off this record?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Critical checks (such as fridge, chiller, and hot-holding temperatures) must be completed at least twice daily—once during morning prep before opening, and once during evening service. Daily opening, closing, and hygiene checklists must be completed throughout each shift, with a designated supervisor or Head Chef signing off the log before premises shutdown."
        }
      },
      {
        "@type": "Question",
        "name": "What is the recommended corrective action if a critical limit is breached?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Immediately quarantine the affected food or area. For cold storage exceeding 8°C, probe the internal core temperature: if food has remained between 8°C and 63°C for under 4 hours, rapidly chill or cook it immediately; otherwise, safely discard it. For hot holding dropping below 63°C, reheat above 75°C (allowed once only) or serve within 2 hours, or condemn. Always record the issue, affected batch, and corrective action taken directly on the log."
        }
      },
      {
        "@type": "Question",
        "name": "How long must commercial kitchens retain completed safety records?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Under UK due diligence legal defense (Section 21 of the Food Safety Act 1990), completed temperature sheets, cleaning logs, and monitoring records should be archived for a minimum of 6 to 12 months, or at least 3 months after the shelf-life of products served. Having organized monthly binders or digital PDF exports ready is vital for unannounced council audits."
        }
      },
      {
        "@type": "Question",
        "name": "Can I customize, edit, and print this sheet without watermarks?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. You can enter your establishment name, manager sign-off, and inspection date directly into the input fields, then click 'Print / Save as PDF' to generate an optimized, clean A4 layout without watermarks or website navigation elements."
        }
      }
    ]
  };

  return ('''

target_return = "  return ("
if target_return in content:
    content = content.replace(target_return, faq_code, 1)

target_script = '''      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredSchema) }}
      />'''

replacement_script = '''      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />'''

if target_script in content:
    content = content.replace(target_script, replacement_script, 1)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)

print("Updated app/food-safety-templates/[slug]/page.tsx with FAQPage schema successfully.")
