import sys
sys.stdout.reconfigure(encoding='utf-8')

with open('app/food-safety-templates/[slug]/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

# 1. Add import for TOOL_DEEP_CONTENT
old_import = 'import { TemplateDetailPage } from "@/components/TemplateDetailPage";'
new_import = 'import { TemplateDetailPage } from "@/components/TemplateDetailPage";\nimport { TOOL_DEEP_CONTENT } from "@/data/tool_deep_content";'

if old_import in text:
    text = text.replace(old_import, new_import)
    print("1. Added TOOL_DEEP_CONTENT import.")
else:
    print("1. Could not find old_import")

# 2. Add dateModified to structuredSchema
old_offers = """"offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "GBP"
        },"""
new_offers = """"offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "GBP"
        },
        "dateModified": "2026-10-27","""

if old_offers in text:
    text = text.replace(old_offers, new_offers)
    print("2. Added dateModified to WebApplication schema.")
else:
    print("2. Could not find old_offers")

old_doc = """"isAccessibleForFree": true,"""
new_doc = """"isAccessibleForFree": true,
        "dateModified": "2026-10-27","""

if old_doc in text:
    text = text.replace(old_doc, new_doc)
    print("3. Added dateModified to DigitalDocument schema.")
else:
    print("3. Could not find old_doc")

# 4. Use custom FAQs from TOOL_DEEP_CONTENT[slug]
old_faq_block = """  // 3. FAQPage Schema
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
  };"""

new_faq_block = """  // 3. FAQPage Schema
  const deepContent = TOOL_DEEP_CONTENT[slug];
  const customFaqs = deepContent?.faqs && deepContent.faqs.length > 0
    ? deepContent.faqs.map((f) => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": f.a
        }
      }))
    : [
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
      ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": customFaqs
  };"""

# Check for character replacement if smart quotes or dashes exist
if old_faq_block in text:
    text = text.replace(old_faq_block, new_faq_block)
    print("4. Replaced faqSchema with dynamic deep content FAQs.")
else:
    # Try finding with regex or normalized whitespace
    print("4. Looking for faqSchema block with fuzzy match...")
    idx_start = text.find('// 3. FAQPage Schema')
    idx_end = text.find('return (', idx_start)
    if idx_start != -1 and idx_end != -1:
        text = text[:idx_start] + new_faq_block + '\n\n  ' + text[idx_end:]
        print("4. Successfully replaced faqSchema block via index slice.")
    else:
        print("4. Failed to find faqSchema block.")

with open('app/food-safety-templates/[slug]/page.tsx', 'w', encoding='utf-8') as f:
    f.write(text)

print("Updated app/food-safety-templates/[slug]/page.tsx successfully.")
