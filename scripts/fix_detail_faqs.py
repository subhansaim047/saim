with open('src/components/TemplateDetailPage.tsx', 'r', encoding='utf-8') as f:
    c = f.read()

# Locate duplicate
target = '''  const faqs = activeFaqs;
    {
      q: `Is the ${template.title} suitable for UK Environmental Health Officer (EHO) inspections?`,
      a: `Yes. This template and digital logging workflow are developed in line with UK Food Standards Agency (FSA) Safer Food, Better Business (SFBB) standards and HACCP Article 5 of Regulation (EC) No 852/2004. When maintained with genuine operating data and supervisor sign-offs, it fulfills statutory record-keeping and due diligence requirements under the Food Safety Act 1990.`
    },
    {
      q: "How frequently should kitchen staff complete and sign off this record?",
      a: "Critical checks (such as fridge, chiller, and hot-holding temperatures) must be completed at least twice daily—once during morning prep before opening, and once during evening service. Daily opening, closing, and hygiene checklists must be completed throughout each shift, with a designated supervisor or Head Chef signing off the log before premises shutdown."
    },
    {
      q: "What is the recommended corrective action if a critical limit is breached?",
      a: "Immediate containment is mandatory. For cold storage exceeding 8°C, probe the internal core temperature: if food has remained between 8°C and 63°C for under 4 hours, rapidly chill or cook it immediately; otherwise, safely discard it. For hot holding dropping below 63°C, reheat above 75°C (allowed once only) or serve within 2 hours, or condemn. Always record the issue, affected batch, and corrective action taken directly on the log."
    },
    {
      q: "How long must commercial kitchens retain completed safety records?",
      a: "Under UK due diligence legal defense (Section 21 of the Food Safety Act 1990), completed temperature sheets, cleaning logs, and monitoring records should be archived for a minimum of 6 to 12 months, or at least 3 months after the shelf-life of products served. Having organized monthly binders or digital PDF exports ready is vital for unannounced council audits."
    },
    {
      q: "Can I customize, edit, and print this sheet without watermarks?",
      a: "Yes. You can enter your establishment name, manager sign-off, and inspection date directly into the input fields above. Then click 'Print / Save as PDF' to generate an optimized, clean A4 layout. All web buttons, navigation links, and screen-only elements are automatically excluded from the printed output."
    }
  ];'''

replacement = '''  const faqs = activeFaqs;'''

target_crlf = target.replace('\n', '\r\n')
target_lf = target.replace('\r\n', '\n')

if target_crlf in c:
    c = c.replace(target_crlf, replacement.replace('\n', '\r\n'))
    print("Cleaned duplicate CRLF in TemplateDetailPage.tsx")
elif target_lf in c:
    c = c.replace(target_lf, replacement.replace('\r\n', '\n'))
    print("Cleaned duplicate LF in TemplateDetailPage.tsx")
else:
    # search using regex
    import re
    c = re.sub(r'const faqs = activeFaqs;\s*\{\s*q:\s*`Is the \$\{template\.title\}[\s\S]*?\n  \];', 'const faqs = activeFaqs;', c)
    print("Cleaned duplicate regex in TemplateDetailPage.tsx")

with open('src/components/TemplateDetailPage.tsx', 'w', encoding='utf-8') as f:
    f.write(c)
