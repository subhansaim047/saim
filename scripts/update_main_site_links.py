import re

def update_footer_section():
    path = "src/components/FooterSection.tsx"
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()

    target = '<Link href="/tools/ppds-label-generator">PPDS Label Maker</Link>'
    replacement = (
        '<Link href="/tools/ppds-label-generator">PPDS Label Maker</Link>\n'
        '            <Link href="/tools/allergen-matrix-generator">Allergen Matrix</Link>\n'
        '            <Link href="/tools/food-cost-calculator">Food Cost Tool</Link>'
    )
    if target in content and '<Link href="/tools/allergen-matrix-generator">' not in content:
        content = content.replace(target, replacement, 1)
        with open(path, "w", encoding="utf-8") as f:
            f.write(content)
        print("Updated FooterSection.tsx")
    else:
        print("FooterSection.tsx already updated or target not found")

def update_site_footer():
    path = "src/components/SiteFooter.tsx"
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()

    target = '<Link href="/tools/ppds-label-generator" className={isDark ? "hover:text-white transition-colors py-1 px-1 text-amber-300" : "hover:text-black transition-colors py-1 px-1 text-amber-800"}>PPDS Label Maker</Link>'
    replacement = (
        '<Link href="/tools/ppds-label-generator" className={isDark ? "hover:text-white transition-colors py-1 px-1 text-amber-300" : "hover:text-black transition-colors py-1 px-1 text-amber-800"}>PPDS Label Maker</Link>\n'
        '        <span aria-hidden="true">·</span>\n'
        '        <Link href="/tools/allergen-matrix-generator" className={isDark ? "hover:text-white transition-colors py-1 px-1 text-orange-300" : "hover:text-black transition-colors py-1 px-1 text-orange-800"}>Allergen Matrix</Link>\n'
        '        <span aria-hidden="true">·</span>\n'
        '        <Link href="/tools/food-cost-calculator" className={isDark ? "hover:text-white transition-colors py-1 px-1 text-emerald-300" : "hover:text-black transition-colors py-1 px-1 text-emerald-800"}>Food Cost Tool</Link>'
    )
    if target in content and '<Link href="/tools/allergen-matrix-generator"' not in content:
        content = content.replace(target, replacement, 1)
        with open(path, "w", encoding="utf-8") as f:
            f.write(content)
        print("Updated SiteFooter.tsx")
    else:
        print("SiteFooter.tsx already updated or target not found")

def update_takeaway_page():
    path = "app/services/takeaway-web-design/page.tsx"
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()

    # Update demo link
    old_link = 'href="/food-safety-templates/food-allergen-chart"'
    new_link = 'href="/tools/allergen-matrix-generator"'
    if old_link in content:
        content = content.replace(old_link, new_link)
        with open(path, "w", encoding="utf-8") as f:
            f.write(content)
        print("Updated takeaway-web-design page allergen matrix link")
    else:
        print("takeaway page demo link already updated or not found")

if __name__ == "__main__":
    update_footer_section()
    update_site_footer()
    update_takeaway_page()
