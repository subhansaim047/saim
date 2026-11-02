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

# 1. FooterSection: Disambiguate anchor texts
footer_target = """            <a href="/#benefits">Key Benefits</a>
            <a href="/#process">Our Process</a>
            <a href="/#pricing">Pricing Plans</a>
            <a href="/#faq">FAQ</a>
            <Link href="/blogs">Blogs</Link>
            <a href="/#contact">Contact</a>"""

footer_replacement = """            <a href="/#benefits">Key Benefits</a>
            <a href="/#process">Our Process</a>
            <a href="/#pricing">Pricing Plans</a>
            <a href="/#faq">FAQ &amp; Help</a>
            <Link href="/blogs">Blogs</Link>
            <a href="/#contact">Get in Touch</a>"""

update_file("src/components/FooterSection.tsx", footer_target, footer_replacement)

footer_legal_target = """            <Link href="/" className="hover:text-white transition-colors py-2 px-1.5 inline-block">Home</Link>
            <span>•</span>
            <Link href="/services" className="hover:text-white transition-colors py-2 px-1.5 inline-block">Services</Link>
            <span>•</span>
            <Link href="/demos" className="hover:text-white transition-colors py-2 px-1.5 inline-block">Demos</Link>
            <span>•</span>
            <Link href="/about" className="hover:text-white transition-colors py-2 px-1.5 inline-block">About</Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-white transition-colors py-2 px-1.5 inline-block">Contact</Link>"""

footer_legal_replacement = """            <Link href="/" className="hover:text-white transition-colors py-2 px-1.5 inline-block">Home</Link>
            <span>•</span>
            <Link href="/services" className="hover:text-white transition-colors py-2 px-1.5 inline-block">All Services</Link>
            <span>•</span>
            <Link href="/demos" className="hover:text-white transition-colors py-2 px-1.5 inline-block">Demo Showcase</Link>
            <span>•</span>
            <Link href="/about" className="hover:text-white transition-colors py-2 px-1.5 inline-block">About</Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-white transition-colors py-2 px-1.5 inline-block">Contact Us</Link>"""

update_file("src/components/FooterSection.tsx", footer_legal_target, footer_legal_replacement)

# 2. PricingSection: Disambiguate "Get Started"
pricing_target = """          <a
            href={orderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "sybiosme-action-btn w-full",
              plan.featured
                ? "bg-white hover:bg-neutral-100 text-black shadow-xl"
                : "bg-white/[0.06] hover:bg-white/15 text-white border border-white/10 hover:border-white/20"
            )}
          >
            <span className="text-sm font-medium tracking-tight">
              {plan.featured ? "Order on WhatsApp" : "Get Started"}
            </span>"""

pricing_replacement = """          <a
            href={orderUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={plan.featured ? `Order ${plan.name} on WhatsApp` : `Get started with ${plan.name} package`}
            className={cn(
              "sybiosme-action-btn w-full",
              plan.featured
                ? "bg-white hover:bg-neutral-100 text-black shadow-xl"
                : "bg-white/[0.06] hover:bg-white/15 text-white border border-white/10 hover:border-white/20"
            )}
          >
            <span className="text-sm font-medium tracking-tight">
              {plan.featured ? "Order on WhatsApp" : `Get Started — ${plan.name}`}
            </span>"""

update_file("src/components/PricingSection.tsx", pricing_target, pricing_replacement)

# 3. DemosPage: Add aria-labels and descriptive text
demos_target_1 = """                  <a
                    href={demo.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-primary hover:bg-white text-black p-2.5 rounded-xl transition-all shadow-lg cursor-pointer"
                    title="Open Fullscreen Demo"
                  >"""

demos_replacement_1 = """                  <a
                    href={demo.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${demo.title} interactive demo`}
                    className="bg-primary hover:bg-white text-black p-2.5 rounded-xl transition-all shadow-lg cursor-pointer"
                    title={`Open ${demo.title} Demo`}
                  >"""

demos_target_2 = """                    <a
                      href={demo.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full bg-primary hover:bg-white text-black text-xs font-bold py-2.5 px-3 rounded-xl transition-all shadow-md flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <span>Live Site</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>"""

demos_replacement_2 = """                    <a
                      href={demo.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`View live site for ${demo.title}`}
                      className="w-full bg-primary hover:bg-white text-black text-xs font-bold py-2.5 px-3 rounded-xl transition-all shadow-md flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <span>Live Site</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>"""

update_file("src/components/DemosPage.tsx", demos_target_1, demos_replacement_1)
update_file("src/components/DemosPage.tsx", demos_target_2, demos_replacement_2)

# 4. FoodSafetyTemplatesPage: Add aria-label to cards
tools_target_1 = """                  <Link
                    href={`/food-safety-templates/${getCanonicalTemplateSlug(template.slug)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative block h-40 sm:h-44 w-full overflow-hidden bg-gray-100 cursor-pointer"
                  >"""

tools_replacement_1 = """                  <Link
                    href={`/food-safety-templates/${getCanonicalTemplateSlug(template.slug)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Preview ${template.title}`}
                    className="relative block h-40 sm:h-44 w-full overflow-hidden bg-gray-100 cursor-pointer"
                  >"""

tools_target_2 = """                      <Link
                        href={`/food-safety-templates/${getCanonicalTemplateSlug(template.slug)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-2.5 px-3 rounded-xl bg-gray-900 hover:bg-black text-white text-[11px] font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer group-hover:bg-[#2e2d75]"
                      >"""

tools_replacement_2 = """                      <Link
                        href={`/food-safety-templates/${getCanonicalTemplateSlug(template.slug)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open ${template.title}`}
                        className="w-full py-2.5 px-3 rounded-xl bg-gray-900 hover:bg-black text-white text-[11px] font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer group-hover:bg-[#2e2d75]"
                      >"""

update_file("src/components/FoodSafetyTemplatesPage.tsx", tools_target_1, tools_replacement_1)
update_file("src/components/FoodSafetyTemplatesPage.tsx", tools_target_2, tools_replacement_2)

print("\nAll anchor text disambiguations applied successfully!")
