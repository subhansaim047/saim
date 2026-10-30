"""
Append UK city landing pages and template library to public/llms-full.txt
"""
p = r"C:\Users\subhan\.gemini\antigravity\scratch\saim\public\llms-full.txt"
with open(p, "r", encoding="utf-8") as f:
    content = f.read()

extra_section = """

---

## 5. UK City-Specific Service Pages

Saim Dev provides dedicated takeaway and restaurant website design services across major UK cities:

- **London Takeaway Website Design**: https://www.saimdev.site/services/takeaway-web-design-london
  Commission-free ordering platforms for London restaurants and takeaways. Covers Central London, East London, North London, South London, West London, and all 32 boroughs. Includes 14-allergen menus aligned with Natasha's Law and direct WhatsApp kitchen dispatch.

- **Manchester Takeaway Website Design**: https://www.saimdev.site/services/takeaway-web-design-manchester
  Bespoke takeaway websites for Manchester food businesses, Northern Quarter venues, Curry Mile restaurants, and Greater Manchester districts (Salford, Trafford, Stockport, Bolton, Bury, Rochdale, Oldham).

- **Birmingham Takeaway Website Design**: https://www.saimdev.site/services/takeaway-web-design-birmingham
  Custom restaurant and takeaway websites for Birmingham's Balti Triangle, Digbeth, Edgbaston, Solihull, and the wider West Midlands.

All city packages include: commission-free ordering, Natasha's Law allergen filtering, WhatsApp kitchen dispatch, and complete UK local SEO setup.

---

## 6. Free Food Safety Templates Library

Saim Dev publishes 160+ free downloadable food safety templates for UK commercial kitchens:
- URL: https://www.saimdev.site/food-safety-templates
- All templates are FSA-aligned, SFBB-compliant, and formatted for A4 printing
- Categories include: HACCP plans, temperature logs, cleaning schedules, allergen charts, staff training records
- License: Free for non-commercial kitchen compliance use
- Regular updates aligned with current UK food safety legislation
"""

if "## 5. UK City-Specific Service Pages" not in content:
    content = content.rstrip() + extra_section
    with open(p, "w", encoding="utf-8") as f:
        f.write(content)
    print("Updated public/llms-full.txt!")
else:
    print("Already updated in llms-full.txt")
