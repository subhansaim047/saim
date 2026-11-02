import os, re

def replace_first_p_after_h1(path, old_snippet, new_full_p):
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()

    if old_snippet in content:
        # Find the <p tag enclosing old_snippet
        start_idx = content.find(old_snippet)
        p_start = content.rfind("<p", 0, start_idx)
        p_end = content.find("</p>", start_idx) + 4
        if p_start != -1 and p_end != -1:
            old_p = content[p_start:p_end]
            content = content[:p_start] + new_full_p + content[p_end:]
            with open(path, "w", encoding="utf-8", newline="") as f:
                f.write(content)
            print(f"SUCCESS: {path}")
            return True
    print(f"FAILED: {path} (snippet: {repr(old_snippet[:40])})")
    return False

def run():
    # 4. Takeaway Web Design
    replace_first_p_after_h1(
        "app/services/takeaway-web-design/page.tsx",
        "We build lightning-fast Next.js direct ordering websites",
        '''<p className="text-white/70 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-light">
            Stop paying excessive portal commissions today. We build lightning-fast Next.js direct ordering websites for UK takeaways, chip shops, and pizzerias with full code ownership, zero commissions, and instant mobile ordering.
          </p>'''
    )

    # 5. BlogPostAllergenMatrix.tsx
    replace_first_p_after_h1(
        "src/components/blog/BlogPostAllergenMatrix.tsx",
        "A comprehensive, step-by-step masterclass on auditing recipes",
        '''<p className="text-base sm:text-xl text-white/70 leading-relaxed max-w-3xl">
          Learn how to create a fully compliant 14-allergen matrix for your commercial kitchen. A comprehensive, step-by-step masterclass on auditing recipes, preventing cross-contamination, and presenting accurate allergen declarations for UK restaurants and takeaways.
        </p>'''
    )

    # 6. BlogPostRecipeScaler.tsx
    replace_first_p_after_h1(
        "src/components/blog/BlogPostRecipeScaler.tsx",
        "Why linear math destroys bulk catering recipes",
        '''<p className="text-base sm:text-xl text-white/70 leading-relaxed max-w-3xl">
          Discover how to scale recipes without flavor breakdown or texture collapse. Learn why linear multiplication fails in bulk catering, how to calculate non-linear spices and liquids, and how to generate standardized chef prep cards.
        </p>'''
    )

    # 7. BlogPostHygieneQuiz.tsx
    replace_first_p_after_h1(
        "src/components/blog/BlogPostHygieneQuiz.tsx",
        "How to evaluate your kitchen team",
        '''<p className="text-base sm:text-xl text-white/70 leading-relaxed max-w-3xl">
          Test your kitchen team with 10 critical food safety questions that every chef and kitchen worker must pass before an inspection. Review temperature danger zones, cross-contamination prevention, and statutory hygiene standards with our interactive practice quiz.
        </p>'''
    )

    # 8. BlogPostFoodCost.tsx
    replace_first_p_after_h1(
        "src/components/blog/BlogPostFoodCost.tsx",
        "A practical, no-fluff guide to mastering recipe unit economics",
        '''<p className="text-base sm:text-xl text-white/70 leading-relaxed max-w-3xl">
          Learn how to calculate your true food cost percentage and protect healthy 70%+ gross profit margins. A practical guide to mastering recipe unit economics, factoring in trim shrinkage, and pricing your takeaway menu for long-term profitability.
        </p>'''
    )

    # 9. BlogPostChecklist.tsx
    replace_first_p_after_h1(
        "src/components/blog/BlogPostChecklist.tsx",
        "A practical guide to the critical opening and closing checks",
        '''<p className="text-base sm:text-xl text-white/70 leading-relaxed max-w-3xl">
          Establish an airtight daily kitchen routine with essential opening and closing checks that help you prepare for a top food hygiene rating. Includes temperature thresholds, corrective actions, and our free digital SFBB checklist tool.
        </p>'''
    )

    # 12. BlogPost3Page.tsx
    replace_first_p_after_h1(
        "src/components/BlogPost3Page.tsx",
        "Premium web development at half the price",
        '''<p className="text-lg sm:text-xl text-white/60 leading-relaxed mb-8">
          To celebrate the launch of my web agency, I am offering an exclusive 50% off discount to my first clients. Find out why I am offering this limited rate and how a high-performance Next.js website can act as the ultimate growth engine for your business.
        </p>'''
    )

    # 14. FoodSafetyTemplatesPage.tsx
    replace_first_p_after_h1(
        "src/components/FoodSafetyTemplatesPage.tsx",
        "Practical food hygiene management and due diligence systems",
        '''<p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl mt-1">
          Download free food safety templates for UK commercial kitchens. Access instant kitchen checklists, temperature logs, allergen matrices, and interactive compliance tools built specifically for independent UK takeaways, restaurants, and caterers.
        </p>'''
    )

    # 15. TechnologiesPage.tsx
    replace_first_p_after_h1(
        "src/components/TechnologiesPage.tsx",
        "Modern, sub-second web architecture powered by cutting-edge frontend",
        '''<p className="text-white/70 text-sm sm:text-base leading-relaxed font-light">
          Explore our core web development technologies and technical expertise: Modern, sub-second web architecture powered by cutting-edge frontend frameworks, performance engineering, and robust cloud infrastructure.
        </p>'''
    )

    # 16. DemosPage.tsx
    replace_first_p_after_h1(
        "src/components/DemosPage.tsx",
        "Browse through live interactive website demos",
        '''<p className="mt-4 text-sm sm:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
          Experience live client websites and interactive demos built with high-performance web architecture, ultra-smooth interactions, and instant load speeds.
        </p>'''
    )

    # 17. BlogsPage.tsx
    replace_first_p_after_h1(
        "src/components/BlogsPage.tsx",
        "Practical operational playbooks on food safety law",
        '''<p className="text-white/50 text-base sm:text-lg max-w-xl leading-relaxed">
          Explore actionable hospitality insights and kitchen growth systems. Practical operational playbooks on UK food safety law, EHO inspection readiness, recipe portion economics, and commission-free web ordering systems.
        </p>'''
    )

    # 19. app/about/page.tsx
    replace_first_p_after_h1(
        "app/about/page.tsx",
        "Saim Dev is a Pakistan-based Next.js studio",
        '''<p className="text-base sm:text-lg text-gray-700 leading-relaxed font-normal">
            Learn more about Saim Dev: We are a Next.js web development studio serving UK and European clients remotely. We specialize in high-performance websites for hospitality, service businesses, and ambitious independent brands.
          </p>'''
    )

    # 20. TemplateDetailPage.tsx H1 clean up
    with open("src/components/TemplateDetailPage.tsx", "r", encoding="utf-8") as f:
        td_content = f.read()
    h1_target = "{CORE_PAGES_METADATA[template.slug]?.title || (isAllergenTool ? \"Free UK Takeaway Allergen Chart Generator (14 Allergens)\" : template.title)}"
    if h1_target in td_content:
        new_h1 = '{(CORE_PAGES_METADATA[template.slug]?.title || (isAllergenTool ? "Free UK Takeaway Allergen Chart Generator (14 Allergens)" : template.title)).replace(/\\s*\\|\\s*Saim Dev$/i, "")}'
        td_content = td_content.replace(h1_target, new_h1)
        with open("src/components/TemplateDetailPage.tsx", "w", encoding="utf-8", newline="") as f:
            f.write(td_content)
        print("SUCCESS: src/components/TemplateDetailPage.tsx H1 cleaned")
    else:
        print("FAILED: src/components/TemplateDetailPage.tsx H1 target not found")

if __name__ == "__main__":
    run()
