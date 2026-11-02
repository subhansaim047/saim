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

# 1. FeaturedToolsSection.tsx
tools_card_target = """              <Link
                key={tool.slug}
                href={tool.customHref || `/food-safety-templates/${tool.slug}`}
                className="group relative flex flex-col justify-between rounded-2xl bg-[#0f0f12] border border-white/10 p-6 transition-all duration-300 hover:border-white/25 hover:bg-[#15151a] hover:-translate-y-1.5 shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    {/* Category Pill with glowing dot */}
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-mono px-2.5 py-0.5 rounded-full border border-white/10 bg-white/[0.04] text-white/80 group-hover:border-white/20 transition-colors">
                      <span className={`w-1.5 h-1.5 rounded-full ${DOT_COLORS[tool.color] || DOT_COLORS.amber}`} />
                      <span>{tool.tag}</span>
                    </span>

                    {/* Sybiosme Squircle Badge Tile */}
                    <IconTile color={tool.color} size="md">
                      <Icon className="w-5 h-5" />
                    </IconTile>
                  </div>

                  <p className="text-lg font-medium text-white mb-2 group-hover:text-primary transition-colors">
                    {tool.title}
                  </p>
                  <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                    {tool.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-white/50 group-hover:text-white transition-colors">
                  <span>Open Interactive Tool</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 text-primary" />
                </div>
              </Link>"""

tools_card_replacement = """              <div
                key={tool.slug}
                className="group relative flex flex-col justify-between rounded-2xl bg-[#0f0f12] border border-white/10 p-6 transition-all duration-300 hover:border-white/25 hover:bg-[#15151a] hover:-translate-y-1.5 shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    {/* Category Pill with glowing dot */}
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-mono px-2.5 py-0.5 rounded-full border border-white/10 bg-white/[0.04] text-white/80 group-hover:border-white/20 transition-colors">
                      <span className={`w-1.5 h-1.5 rounded-full ${DOT_COLORS[tool.color] || DOT_COLORS.amber}`} />
                      <span>{tool.tag}</span>
                    </span>

                    {/* Sybiosme Squircle Badge Tile */}
                    <IconTile color={tool.color} size="md">
                      <Icon className="w-5 h-5" />
                    </IconTile>
                  </div>

                  <p className="text-lg font-medium text-white mb-2 group-hover:text-primary transition-colors">
                    <Link
                      href={tool.customHref || `/food-safety-templates/${tool.slug}`}
                      className="after:absolute after:inset-0 focus:outline-none"
                    >
                      {tool.title}
                    </Link>
                  </p>
                  <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                    {tool.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-white/50 group-hover:text-white transition-colors pointer-events-none">
                  <span>Open Interactive Tool</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 text-primary" />
                </div>
              </div>"""

update_file("src/components/FeaturedToolsSection.tsx", tools_card_target, tools_card_replacement)

# 2. takeaway-web-design/page.tsx
takeaway_target = """          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              href="/tools/allergen-matrix-generator"
              className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-amber-400/40 transition-all group"
            >
              <div className="text-xs font-mono text-orange-400 font-bold mb-1">Interactive Tool</div>
              <div className="text-sm font-semibold text-white group-hover:text-amber-300">14 Allergen Matrix</div>
              <div className="text-[11px] text-white/60 mt-1">Generate dish allergen charts with CSV and PDF export.</div>
            </Link>

            <Link
              href="/tools/ppds-label-generator"
              className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-amber-400/40 transition-all group"
            >
              <div className="text-xs font-mono text-amber-400 font-bold mb-1">Interactive Tool</div>
              <div className="text-sm font-semibold text-white group-hover:text-amber-300">PPDS Label Maker</div>
              <div className="text-[11px] text-white/60 mt-1">Natasha&apos;s Law compliant packaging labels with auto-bolding.</div>
            </Link>

            <Link
              href="/tools/food-cost-calculator"
              className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-amber-400/40 transition-all group"
            >
              <div className="text-xs font-mono text-emerald-400 font-bold mb-1">Interactive Tool</div>
              <div className="text-sm font-semibold text-white group-hover:text-amber-300">Food Cost Calculator</div>
              <div className="text-[11px] text-white/60 mt-1">Calculate gross margins, food cost % and target prices.</div>
            </Link>

            <Link
              href="/tools/recipe-batch-calculator"
              className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-amber-400/40 transition-all group"
            >
              <div className="text-xs font-mono text-blue-400 font-bold mb-1">Interactive Tool</div>
              <div className="text-sm font-semibold text-white group-hover:text-amber-300">Recipe Batch Scaling</div>
              <div className="text-[11px] text-white/60 mt-1">Scale commercial recipes from 10 to 500 portions instantly.</div>
            </Link>
          </div>"""

takeaway_replacement = """          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="relative p-4 rounded-xl bg-white/5 border border-white/10 hover:border-amber-400/40 transition-all group">
              <div className="text-xs font-mono text-orange-400 font-bold mb-1">Interactive Tool</div>
              <div className="text-sm font-semibold text-white group-hover:text-amber-300">
                <Link href="/tools/allergen-matrix-generator" className="after:absolute after:inset-0 focus:outline-none">
                  14 Allergen Matrix
                </Link>
              </div>
              <div className="text-[11px] text-white/60 mt-1">Generate dish allergen charts with CSV and PDF export.</div>
            </div>

            <div className="relative p-4 rounded-xl bg-white/5 border border-white/10 hover:border-amber-400/40 transition-all group">
              <div className="text-xs font-mono text-amber-400 font-bold mb-1">Interactive Tool</div>
              <div className="text-sm font-semibold text-white group-hover:text-amber-300">
                <Link href="/tools/ppds-label-generator" className="after:absolute after:inset-0 focus:outline-none">
                  PPDS Label Maker
                </Link>
              </div>
              <div className="text-[11px] text-white/60 mt-1">Natasha&apos;s Law compliant packaging labels with auto-bolding.</div>
            </div>

            <div className="relative p-4 rounded-xl bg-white/5 border border-white/10 hover:border-amber-400/40 transition-all group">
              <div className="text-xs font-mono text-emerald-400 font-bold mb-1">Interactive Tool</div>
              <div className="text-sm font-semibold text-white group-hover:text-amber-300">
                <Link href="/tools/food-cost-calculator" className="after:absolute after:inset-0 focus:outline-none">
                  Food Cost Calculator
                </Link>
              </div>
              <div className="text-[11px] text-white/60 mt-1">Calculate gross margins, food cost % and target prices.</div>
            </div>

            <div className="relative p-4 rounded-xl bg-white/5 border border-white/10 hover:border-amber-400/40 transition-all group">
              <div className="text-xs font-mono text-blue-400 font-bold mb-1">Interactive Tool</div>
              <div className="text-sm font-semibold text-white group-hover:text-amber-300">
                <Link href="/tools/recipe-batch-calculator" className="after:absolute after:inset-0 focus:outline-none">
                  Recipe Batch Scaling
                </Link>
              </div>
              <div className="text-[11px] text-white/60 mt-1">Scale commercial recipes from 10 to 500 portions instantly.</div>
            </div>
          </div>"""

update_file("app/services/takeaway-web-design/page.tsx", takeaway_target, takeaway_replacement)

# 3. DemosPage.tsx: shorten sr-only to demo.id
demos_target = """                      <span>Live Site</span>
                      <span className="sr-only"> - {demo.title}</span>"""

demos_replacement = """                      <span>Live Site</span>
                      <span className="sr-only"> ({demo.id})</span>"""

update_file("src/components/DemosPage.tsx", demos_target, demos_replacement)

# 4. FoodSafetyTemplatesPage.tsx: remove long sr-only
tools_target_btn = """                        <span>{template.type === "smart_tool" || template.slug.includes("calc") || template.slug.includes("allergen") || template.slug.includes("quiz") ? "Open Interactive Tool" : "Open Template"}</span>
                        <span className="sr-only">: {template.title}</span>"""

tools_replacement_btn = """                        <span>{template.type === "smart_tool" || template.slug.includes("calc") || template.slug.includes("allergen") || template.slug.includes("quiz") ? "Open Interactive Tool" : "Open Template"}</span>"""

update_file("src/components/FoodSafetyTemplatesPage.tsx", tools_target_btn, tools_replacement_btn)

badge_target = """                    <span className={`absolute top-2.5 left-2.5 px-2 py-0.5 rounded-md text-[9px] font-extrabold uppercase tracking-wider font-mono shadow-sm ${getPillColor(template.type)}`}>
                      {template.preheader || template.type.toUpperCase()}
                      <span className="sr-only"> for {template.title}</span>
                    </span>"""

badge_replacement = """                    <span className={`absolute top-2.5 left-2.5 px-2 py-0.5 rounded-md text-[9px] font-extrabold uppercase tracking-wider font-mono shadow-sm ${getPillColor(template.type)}`}>
                      {template.preheader || template.type.toUpperCase()}
                    </span>"""

update_file("src/components/FoodSafetyTemplatesPage.tsx", badge_target, badge_replacement)

print("\nAll long anchor text fixes applied successfully!")
