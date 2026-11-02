with open('src/components/FoodSafetyTemplatesPage.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update badge inside Link
badge_target = """                    {/* Preheader Badge */}
                    <span className={`absolute top-2.5 left-2.5 px-2 py-0.5 rounded-md text-[9px] font-extrabold uppercase tracking-wider font-mono shadow-sm ${getPillColor(template.type)}`}>
                      {template.preheader || template.type.toUpperCase()}
                    </span>"""

badge_replacement = """                    {/* Preheader Badge */}
                    <span className={`absolute top-2.5 left-2.5 px-2 py-0.5 rounded-md text-[9px] font-extrabold uppercase tracking-wider font-mono shadow-sm ${getPillColor(template.type)}`}>
                      {template.preheader || template.type.toUpperCase()}
                      <span className="sr-only"> for {template.title}</span>
                    </span>"""

content_norm = content.replace('\r\n', '\n')
badge_target_norm = badge_target.replace('\r\n', '\n')
badge_replacement_norm = badge_replacement.replace('\r\n', '\n')

assert badge_target_norm in content_norm, "badge_target not found"
content_norm = content_norm.replace(badge_target_norm, badge_replacement_norm)

# 2. In secondary tools / quick links: disambiguate "Food Cost Calculator"
content_norm = content_norm.replace(
    'href="/tools/food-cost-calculator" className="font-medium text-amber-900 underline">Food Cost Calculator</a>',
    'href="/tools/food-cost-calculator" className="font-medium text-amber-900 underline">Interactive Food Cost Calculator Tool</a>'
)
content_norm = content_norm.replace(
    'href="/tools/food-cost-calculator" className="text-primary hover:underline">Food Cost Calculator</Link>',
    'href="/tools/food-cost-calculator" className="text-primary hover:underline">Interactive Food Cost Calculator</Link>'
)

with open('src/components/FoodSafetyTemplatesPage.tsx', 'w', encoding='utf-8') as f:
    f.write(content_norm)

print("FoodSafetyTemplatesPage.tsx updated successfully!")
