import os

def update_file(filepath, target, replacement):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    content_norm = content.replace('\r\n', '\n')
    target_norm = target.replace('\r\n', '\n')
    replacement_norm = replacement.replace('\r\n', '\n')
    if target_norm not in content_norm:
        raise ValueError(f"Target not found in {filepath}")
    updated = content_norm.replace(target_norm, replacement_norm)
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(updated)
    print(f"[OK] Successfully updated {filepath}")

# 1. FaqSection: 14 FAQ h3 -> span
faq_target = """                      <summary className="w-full text-left flex items-center justify-between gap-4 cursor-pointer select-none list-none focus:outline-none">
                        <h3 className="text-white text-base sm:text-lg font-medium leading-snug group-hover:text-white/90 transition-colors">
                          {item.question}
                        </h3>
                        <div className="sybiosme-disclosure-icon">"""

faq_replacement = """                      <summary className="w-full text-left flex items-center justify-between gap-4 cursor-pointer select-none list-none focus:outline-none">
                        <span className="text-white text-base sm:text-lg font-medium leading-snug group-hover:text-white/90 transition-colors">
                          {item.question}
                        </span>
                        <div className="sybiosme-disclosure-icon">"""

update_file("src/components/FaqSection.tsx", faq_target, faq_replacement)

# 2. FeaturedToolsSection: 7 tool cards h3 -> p
tools_target = """                  <h3 className="text-lg font-medium text-white mb-2 group-hover:text-primary transition-colors">
                    {tool.title}
                  </h3>"""

tools_replacement = """                  <p className="text-lg font-medium text-white mb-2 group-hover:text-primary transition-colors">
                    {tool.title}
                  </p>"""

update_file("src/components/FeaturedToolsSection.tsx", tools_target, tools_replacement)

# 3. ProcessSection: 4 step cards h3 -> p
process_target = """                    <h3 className="text-white text-lg sm:text-xl font-medium mb-3 group-hover:text-white transition-colors">
                      {item.title}
                    </h3>"""

process_replacement = """                    <p className="text-white text-lg sm:text-xl font-medium mb-3 group-hover:text-white transition-colors">
                      {item.title}
                    </p>"""

update_file("src/components/ProcessSection.tsx", process_target, process_replacement)

# 4. PricingSection: 3 plan card names h3 -> p
pricing_target = """          <div className="flex items-center justify-between mb-2">
            <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-white">
              {plan.name}
            </h3>
            {plan.featured && <span className="section-dot" />}
          </div>"""

pricing_replacement = """          <div className="flex items-center justify-between mb-2">
            <p className="text-2xl sm:text-3xl font-medium tracking-tight text-white">
              {plan.name}
            </p>
            {plan.featured && <span className="section-dot" />}
          </div>"""

update_file("src/components/PricingSection.tsx", pricing_target, pricing_replacement)

# 5. BenefitsSection: 3 benefit card titles h3 -> p
benefits_target_1 = """                  <h3 className="text-white text-xl sm:text-2xl font-light leading-tight">
                    Business Growth &amp;
                    <br />
                    Lead Conversion
                  </h3>"""

benefits_replacement_1 = """                  <p className="text-white text-xl sm:text-2xl font-light leading-tight">
                    Business Growth &amp;
                    <br />
                    Lead Conversion
                  </p>"""

benefits_target_2 = """                <h3 className="text-white text-xl sm:text-2xl font-light leading-tight text-left">
                  Performance, Speed &amp;
                  <br />
                  SEO Optimization
                </h3>"""

benefits_replacement_2 = """                <p className="text-white text-xl sm:text-2xl font-light leading-tight text-left">
                  Performance, Speed &amp;
                  <br />
                  SEO Optimization
                </p>"""

benefits_target_3 = """                  <h3 className="text-white text-xl sm:text-2xl font-light leading-tight">
                    Marketing Integration &amp;
                    <br />
                    Technical Security
                  </h3>"""

benefits_replacement_3 = """                  <p className="text-white text-xl sm:text-2xl font-light leading-tight">
                    Marketing Integration &amp;
                    <br />
                    Technical Security
                  </p>"""

update_file("src/components/BenefitsSection.tsx", benefits_target_1, benefits_replacement_1)
update_file("src/components/BenefitsSection.tsx", benefits_target_2, benefits_replacement_2)
update_file("src/components/BenefitsSection.tsx", benefits_target_3, benefits_replacement_3)

# 6. ContactSection: 1 h3 inside button -> span
contact_target = """                <h3 className="text-lg sm:text-xl font-medium text-white group-hover:text-white/90 transition-colors">
                  Prefer to send a project brief?
                </h3>"""

contact_replacement = """                <span className="text-lg sm:text-xl font-medium text-white group-hover:text-white/90 transition-colors">
                  Prefer to send a project brief?
                </span>"""

update_file("src/components/ContactSection.tsx", contact_target, contact_replacement)

# 7. FooterSection: 1 h2 in footer tagline -> p
footer_target = """          <h2 className="site-footer__heading">
            High-Performance Web Architecture for Growing Businesses.
          </h2>"""

footer_replacement = """          <p className="site-footer__heading">
            High-Performance Web Architecture for Growing Businesses.
          </p>"""

update_file("src/components/FooterSection.tsx", footer_target, footer_replacement)

print("\nAll 7 components successfully updated with semantic heading optimizations!")
