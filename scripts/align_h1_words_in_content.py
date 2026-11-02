import os

def update_file(path, old, new):
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()
    if old in content:
        content = content.replace(old, new)
        with open(path, "w", encoding="utf-8", newline="") as f:
            f.write(content)
        print(f"UPDATED: {path}")
    else:
        print(f"WARNING: Target not found in {path}")

def run():
    # 1. CaseStudiesPage.tsx
    update_file(
        "src/components/CaseStudiesPage.tsx",
        '''          <p className="text-white/70 text-sm sm:text-base leading-relaxed font-light">
            Explore how Saim Dev replaces slow, outdated websites with high-converting digital platforms engineered for sub-second speed, top search rankings, and predictable lead growth.
          </p>''',
        '''          <p className="text-white/70 text-sm sm:text-base leading-relaxed font-light">
            Explore real client results and real websites engineered by Saim Dev. See how we transform slow, outdated digital presence into high-converting web platforms built for sub-second speed, top Google rankings, and predictable revenue growth.
          </p>'''
    )

    # 2. ContactPage.tsx
    update_file(
        "src/components/ContactPage.tsx",
        '''          <p className="text-white/65 text-sm sm:text-base leading-relaxed font-light">
            Direct communication with your lead engineer. No middlemen, no agency bloat.
          </p>''',
        '''          <p className="text-white/65 text-sm sm:text-base leading-relaxed font-light">
            Ready to build something remarkable for your business? Enjoy direct communication with your lead web engineer to build custom websites without middlemen or agency bloat.
          </p>'''
    )

    # 3. ServicesPage.tsx
    update_file(
        "src/components/ServicesPage.tsx",
        '''          <p className="text-white/70 text-sm sm:text-base leading-relaxed font-light">
            Modern, minimal, and high-performing web architecture tailored to turn visitors into loyal, paying clients.
          </p>''',
        '''          <p className="text-white/70 text-sm sm:text-base leading-relaxed font-light">
            Explore our conversion-focused web solutions engineered with modern, minimal, and high-performing web architecture tailored to turn visitors into loyal, paying clients.
          </p>'''
    )

    # 4. Takeaway Web Design
    update_file(
        "app/services/takeaway-web-design/page.tsx",
        '''          <p className="text-white/70 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-light">
            We build lightning-fast Next.js direct ordering websites for UK takeaways, chip shops, and pizzerias with full code ownership and zero commissions.
          </p>''',
        '''          <p className="text-white/70 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-light">
            Stop paying excessive portal commissions today. We build lightning-fast Next.js direct ordering websites for UK takeaways, chip shops, and pizzerias with full code ownership, zero commissions, and instant mobile ordering.
          </p>'''
    )

    # 5. BlogPostAllergenMatrix.tsx
    update_file(
        "src/components/blog/BlogPostAllergenMatrix.tsx",
        '''        <p className="text-base sm:text-xl text-white/70 leading-relaxed max-w-3xl">
          A comprehensive, step-by-step masterclass on auditing recipes, preventing fatal cross-contamination, and building an Environmental Health Officer (EHO) approved 14-allergen matrix for your commercial kitchen.
        </p>''',
        '''        <p className="text-base sm:text-xl text-white/70 leading-relaxed max-w-3xl">
          Learn how to create a fully compliant 14-allergen matrix for your commercial kitchen. A comprehensive, step-by-step masterclass on auditing recipes, preventing cross-contamination, and presenting accurate allergen declarations for UK restaurants and takeaways.
        </p>'''
    )

    # 6. BlogPostRecipeScaler.tsx
    update_file(
        "src/components/blog/BlogPostRecipeScaler.tsx",
        '''        <p className="text-base sm:text-xl text-white/70 leading-relaxed max-w-3xl">
          Why linear math destroys bulk catering recipes, how to handle non-linear spices and liquids, and how to generate standardized chef prep cards with our free interactive batch scaler.
        </p>''',
        '''        <p className="text-base sm:text-xl text-white/70 leading-relaxed max-w-3xl">
          Discover how to scale recipes without flavor breakdown or texture collapse. Learn why linear multiplication fails in bulk catering, how to calculate non-linear spices and liquids, and how to generate standardized chef prep cards.
        </p>'''
    )

    # 7. BlogPostHygieneQuiz.tsx
    update_file(
        "src/components/blog/BlogPostHygieneQuiz.tsx",
        '''        <p className="text-base sm:text-xl text-white/70 leading-relaxed max-w-3xl">
          How to evaluate your kitchen team&apos;s food safety knowledge before an EHO inspection. Review temperature danger zones, cross-contamination rules, and UK food hygiene standards with our free interactive quiz.
        </p>''',
        '''        <p className="text-base sm:text-xl text-white/70 leading-relaxed max-w-3xl">
          Test your kitchen team with 10 critical food safety questions that every chef and kitchen worker must pass before an inspection. Review temperature danger zones, cross-contamination prevention, and statutory hygiene standards with our interactive practice quiz.
        </p>'''
    )

    # 8. BlogPostFoodCost.tsx
    update_file(
        "src/components/blog/BlogPostFoodCost.tsx",
        '''        <p className="text-base sm:text-xl text-white/70 leading-relaxed max-w-3xl">
          A practical, no-fluff guide to mastering recipe unit economics, factoring in trim shrinkage, and pricing your restaurant or takeaway menu for sustainable profitability.
        </p>''',
        '''        <p className="text-base sm:text-xl text-white/70 leading-relaxed max-w-3xl">
          Learn how to calculate your true food cost percentage and protect healthy 70%+ gross profit margins. A practical guide to mastering recipe unit economics, factoring in trim shrinkage, and pricing your takeaway menu for long-term profitability.
        </p>'''
    )

    # 9. BlogPostChecklist.tsx
    update_file(
        "src/components/blog/BlogPostChecklist.tsx",
        '''        <p className="text-base sm:text-xl text-white/70 leading-relaxed max-w-3xl">
          A practical guide to the critical opening and closing checks Environmental Health Officers demand in UK kitchens. Includes temperature thresholds, corrective actions, and our free digital SFBB checklist tool.
        </p>''',
        '''        <p className="text-base sm:text-xl text-white/70 leading-relaxed max-w-3xl">
          Establish an airtight daily kitchen routine with essential opening and closing checks that help you prepare for a top food hygiene rating. Includes temperature thresholds, corrective actions, and our free digital SFBB checklist tool.
        </p>'''
    )

    # 10. BlogPostHaccpPlan.tsx
    update_file(
        "src/components/blog/BlogPostHaccpPlan.tsx",
        '''          <p className="text-base sm:text-xl text-white/70 leading-relaxed max-w-3xl">
            A comprehensive, plain-English blueprint for commercial food business operators, head chefs, and catering managers. 
            Demystifying hazard analysis, critical limits, and corrective actions under Regulation (EC) 852/2004.
          </p>''',
        '''          <p className="text-base sm:text-xl text-white/70 leading-relaxed max-w-3xl">
            Learn how to write a compliant HACCP plan for your UK food business using the 7 foundational principles. A comprehensive, plain-English blueprint and digital plan builder for food business operators, head chefs, and catering managers to identify hazards, set critical limits, and establish corrective actions.
          </p>'''
    )

    # 11. BlogPost1Page.tsx
    update_file(
        "src/components/BlogPost1Page.tsx",
        '''          <p className="text-white/55 text-base sm:text-lg leading-relaxed mb-7">
            Most small business owners know they should have a website. Very few understand how much they're losing without one. This article covers the research, the real examples, and the practical steps — so you can make an informed decision rather than a guess.
          </p>''',
        '''          <p className="text-white/55 text-base sm:text-lg leading-relaxed mb-7">
            Most small business owners know they need a professional website in 2026, but very few understand how much customer revenue they lose without one. This article covers the latest industry data, real examples, and practical steps so you can make an informed investment decision.
          </p>'''
    )

    # 12. BlogPost3Page.tsx
    update_file(
        "src/components/BlogPost3Page.tsx",
        '''        <p className="text-lg sm:text-xl text-white/60 leading-relaxed mb-8">
          Premium web development at half the price. Find out why I am offering this massive discount and how it can act as the ultimate growth engine for your business.
        </p>''',
        '''        <p className="text-lg sm:text-xl text-white/60 leading-relaxed mb-8">
          To celebrate the launch of my web agency, I am offering an exclusive 50% off discount to my first clients. Find out why I am offering this limited rate and how a high-performance Next.js website can act as the ultimate growth engine for your business.
        </p>'''
    )

    # 13. BlogPostFhrsChecklist.tsx
    update_file(
        "src/components/blog/BlogPostFhrsChecklist.tsx",
        '''          <p className="text-base sm:text-lg text-white/70 leading-relaxed mb-6">
            A practical preparation guide for independent restaurants, takeaways, and commercial kitchens to evaluate food handling, physical premises, and documented due diligence management.
          </p>''',
        '''          <p className="text-base sm:text-lg text-white/70 leading-relaxed mb-6">
            A practical preparation checklist for independent restaurants, takeaways, and commercial kitchens aiming for a top UK Food Hygiene Rating. Evaluate your food handling, cleanliness, and food safety management system before your next council inspection.
          </p>'''
    )

    # 14. FoodSafetyTemplatesPage.tsx
    update_file(
        "src/components/FoodSafetyTemplatesPage.tsx",
        '''        <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl mt-1">
          Practical food hygiene management and due diligence systems built specifically for independent UK takeaways, restaurants, and food businesses.
        </p>''',
        '''        <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl mt-1">
          Download free food safety templates for UK commercial kitchens. Access instant kitchen checklists, temperature logs, allergen matrices, and interactive compliance tools built specifically for independent UK takeaways, restaurants, and caterers.
        </p>'''
    )

    # 15. TechnologiesPage.tsx
    update_file(
        "src/components/TechnologiesPage.tsx",
        '''        <p className="text-white/70 text-sm sm:text-base leading-relaxed font-light">
          Modern, sub-second web architecture powered by cutting-edge frontend frameworks, performance engineering, and robust cloud infrastructure.
        </p>''',
        '''        <p className="text-white/70 text-sm sm:text-base leading-relaxed font-light">
          Explore our core web development technologies and technical expertise: Modern, sub-second web architecture powered by cutting-edge frontend frameworks, performance engineering, and robust cloud infrastructure.
        </p>'''
    )

    # 16. DemosPage.tsx
    update_file(
        "src/components/DemosPage.tsx",
        '''        <p className="mt-4 text-sm sm:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
          Browse through live interactive website demos built with high-performance web architecture, ultra-smooth interactions, and instant load speeds.
        </p>''',
        '''        <p className="mt-4 text-sm sm:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
          Experience live client websites and interactive demos built with high-performance web architecture, ultra-smooth interactions, and instant load speeds.
        </p>'''
    )

    # 17. BlogsPage.tsx
    update_file(
        "src/components/BlogsPage.tsx",
        '''        <p className="text-white/50 text-base sm:text-lg max-w-xl leading-relaxed">
          Practical operational playbooks on food safety law, EHO compliance audits,
          recipe portion economics, and web ordering systems.
        </p>''',
        '''        <p className="text-white/50 text-base sm:text-lg max-w-xl leading-relaxed">
          Explore actionable hospitality insights and kitchen growth systems. Practical operational playbooks on UK food safety law, EHO inspection readiness, recipe portion economics, and commission-free web ordering systems.
        </p>'''
    )

    # 18. nextjs-developer-uk/page.tsx
    update_file(
        "app/nextjs-developer-uk/page.tsx",
        '''          <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed mb-10">
            Stop losing London & UK customers to bloated, sluggish WordPress sites. I build custom, sub-second Next.js web applications engineered for Optimised Core Web Vitals, Google top rankings, and high conversion rates.
          </p>''',
        '''          <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed mb-10">
            Stop losing UK customers to bloated, sluggish WordPress sites. I provide high-performance Next.js web development for UK businesses, delivering custom, sub-second web applications engineered for Optimised Core Web Vitals, Google top rankings, and high conversion rates.
          </p>'''
    )

    # 19. about/page.tsx
    update_file(
        "app/about/page.tsx",
        '''          <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-normal">
            Saim Dev is a Pakistan-based Next.js studio serving UK and European clients remotely. We specialize in high-performance websites for hospitality, service businesses, and ambitious independent brands.
          </p>''',
        '''          <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-normal">
            Learn more about Saim Dev: We are a Next.js web development studio serving UK and European clients remotely. We specialize in high-performance websites for hospitality, service businesses, and ambitious independent brands.
          </p>'''
    )

    # 20. TemplateDetailPage.tsx H1 Brand Suffix Removal
    update_file(
        "src/components/TemplateDetailPage.tsx",
        '''          <h1 className="text-2xl sm:text-4xl font-extrabold text-[#1D1D1F] leading-tight">
            {CORE_PAGES_METADATA[template.slug]?.title || (isAllergenTool ? "Free UK Takeaway Allergen Chart Generator (14 Allergens)" : template.title)}
          </h1>''',
        '''          <h1 className="text-2xl sm:text-4xl font-extrabold text-[#1D1D1F] leading-tight">
            {(CORE_PAGES_METADATA[template.slug]?.title || (isAllergenTool ? "Free UK Takeaway Allergen Chart Generator (14 Allergens)" : template.title)).replace(/\\s*\\|\\s*Saim Dev$/i, "")}
          </h1>'''
    )

if __name__ == "__main__":
    run()
