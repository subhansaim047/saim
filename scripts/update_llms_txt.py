"""
Update public/llms.txt to include city pages
"""
p = r"C:\Users\subhan\.gemini\antigravity\scratch\saim\public\llms.txt"
with open(p, "r", encoding="utf-8") as f:
    content = f.read().replace("\r\n", "\n")

target = """4. [Takeaway Website Design UK](https://www.saimdev.site/services/takeaway-web-design): Commission-free direct ordering websites for UK takeaways & restaurants with built-in Natasha's Law allergen filters. Fixed £250."""

replacement = """4. [Takeaway Website Design UK](https://www.saimdev.site/services/takeaway-web-design): Commission-free direct ordering websites for UK takeaways & restaurants with built-in Natasha's Law allergen filters. Fixed £250.
   - [Takeaway Website Design London](https://www.saimdev.site/services/takeaway-web-design-london): Direct ordering websites for London restaurants and food operators across all 32 boroughs.
   - [Takeaway Website Design Manchester](https://www.saimdev.site/services/takeaway-web-design-manchester): Bespoke takeaway websites for Greater Manchester eateries and curry houses.
   - [Takeaway Website Design Birmingham](https://www.saimdev.site/services/takeaway-web-design-birmingham): Custom websites for Birmingham, Balti Triangle, and West Midlands takeaways."""

if target in content:
    content = content.replace(target, replacement, 1)
    with open(p, "w", encoding="utf-8") as f:
        f.write(content)
    print("Updated public/llms.txt with city pages!")
else:
    print("Target in llms.txt not found")
