with open('src/components/TemplateDetailPage.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

# 1. Update Byline / Date bar:
old_date = '<span>Last Updated: <strong className="text-gray-900 font-semibold">October 2026</strong></span>'
new_date = '<span>Last Reviewed: <strong className="text-gray-900 font-semibold">27 October 2026</strong></span>'

if old_date in text:
    text = text.replace(old_date, new_date)
    print("1. Updated Last Reviewed date.")
else:
    print("1. Could not find old_date")

# 2. Update H1 and description to use CORE_PAGES_METADATA if available:
old_hero = """            <h1 className="text-2xl sm:text-4xl font-extrabold text-[#1D1D1F] leading-tight">
              {isAllergenTool ? "Free UK Takeaway Allergen Chart Generator (14 Allergens)" : template.title}
            </h1>

            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              {isAllergenTool
                ? "Build and print a UK allergen chart for your takeaway in minutes. Covers all 14 allergens, a customer filter and PDF print. Free, no sign-up."
                : template.desc}
            </p>"""

new_hero = """            <h1 className="text-2xl sm:text-4xl font-extrabold text-[#1D1D1F] leading-tight">
              {CORE_PAGES_METADATA[template.slug]?.title || (isAllergenTool ? "Free UK Takeaway Allergen Chart Generator (14 Allergens)" : template.title)}
            </h1>

            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              {CORE_PAGES_METADATA[template.slug]?.desc || (isAllergenTool
                ? "Build and print a UK allergen chart for your takeaway in minutes. Covers all 14 allergens, a customer filter and PDF print. Free, no sign-up."
                : template.desc)}
            </p>"""

if old_hero in text:
    text = text.replace(old_hero, new_hero)
    print("2. Updated H1 and Hero description to use CORE_PAGES_METADATA.")
else:
    print("2. Could not find old_hero")

# 3. Update conversion banner CTA link text to exact anchor: "takeaway website with allergen filter"
old_cta = '<span>Takeaway Demo & Details</span>'
new_cta = '<span>takeaway website with allergen filter</span>'

if old_cta in text:
    text = text.replace(old_cta, new_cta)
    print("3. Updated CTA anchor text to 'takeaway website with allergen filter'.")
else:
    print("3. Could not find old_cta")

with open('src/components/TemplateDetailPage.tsx', 'w', encoding='utf-8') as f:
    f.write(text)

print("TemplateDetailPage.tsx updated successfully.")
