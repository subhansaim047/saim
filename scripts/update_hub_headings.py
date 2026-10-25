# -*- coding: utf-8 -*-
with open("src/components/FoodSafetyTemplatesPage.tsx", "r", encoding="utf-8") as f:
    content = f.read()

# 1. Update Breadcrumb
content = content.replace("Food Safety Templates Hub</span>", "Kitchen Tools &amp; Checklists</span>", 1)

# 2. Update Hero Banner
old_hero = '''            <div className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-wider uppercase text-slate-700 bg-slate-100 border border-slate-200 px-3 py-1 rounded-full w-fit">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block"></span>
              <span>Kitchen Hygiene &amp; Food Safety Resources</span>
              <span className="text-slate-300">•</span>
              <span className="text-slate-600">Free Printable &amp; Digital</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#1D1D1F] leading-[1.1]">
              Food Safety Templates Hub: Posters, Checklists, Logs, Smart Tools, and More
            </h1>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl mt-1">
              Templates and tools to help you organise kitchen records, train staff and prepare for inspections.
            </p>'''

new_hero = '''            <div className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-wider uppercase text-slate-700 bg-slate-100 border border-slate-200 px-3 py-1 rounded-full w-fit">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block"></span>
              <span>UK Food Safety &amp; Kitchen Management</span>
              <span className="text-slate-300">•</span>
              <span>Free Printable Logs &amp; Interactive Tools</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#1D1D1F] leading-[1.1]">
              UK Restaurant &amp; Takeaway Kitchen Tools: Daily Checklists, Logs &amp; Allergen Matrices
            </h1>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl mt-1">
              Practical due diligence systems built specifically for independent UK takeaways, restaurants, pubs, and catering operations. Aligned with Food Standards Agency (FSA) and Safer Food, Better Business (SFBB) standards.
            </p>'''

if old_hero in content:
    content = content.replace(old_hero, new_hero, 1)
    print("Hero updated.")
else:
    print("Old hero not found directly, checking partial replacement...")
    content = content.replace("Food Safety Templates Hub: Posters, Checklists, Logs, Smart Tools, and More", "UK Restaurant &amp; Takeaway Kitchen Tools: Daily Checklists, Logs &amp; Allergen Matrices")
    content = content.replace("Templates and tools to help you organise kitchen records, train staff and prepare for inspections.", "Practical due diligence systems built specifically for independent UK takeaways, restaurants, pubs, and catering operations. Aligned with Food Standards Agency (FSA) and Safer Food, Better Business (SFBB) standards.")

# 3. Update Sidebar Heading
content = content.replace('<span className="font-bold text-lg text-[#1D1D1F]">Filter resources</span>', '<span className="font-bold text-lg text-[#1D1D1F]">Filter Kitchen Resources</span>')

with open("src/components/FoodSafetyTemplatesPage.tsx", "w", encoding="utf-8") as f:
    f.write(content)

print("Updated FoodSafetyTemplatesPage.tsx successfully.")
