# 1. Update DemosPage.tsx
with open('src/components/DemosPage.tsx', 'r', encoding='utf-8') as f:
    demos_content = f.read()

demos_target = """                    <a
                      href={demo.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`View live site for ${demo.title}`}
                      className="w-full bg-primary hover:bg-white text-black text-xs font-bold py-2.5 px-3 rounded-xl transition-all shadow-md flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <span>Live Site</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>"""

demos_replacement = """                    <a
                      href={demo.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`View live site for ${demo.title}`}
                      className="w-full bg-primary hover:bg-white text-black text-xs font-bold py-2.5 px-3 rounded-xl transition-all shadow-md flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <span>Live Site</span>
                      <span className="sr-only"> - {demo.title}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>"""

demos_content = demos_content.replace('\r\n', '\n')
demos_target = demos_target.replace('\r\n', '\n')
demos_replacement = demos_replacement.replace('\r\n', '\n')

assert demos_target in demos_content, "demos_target not found"
demos_content = demos_content.replace(demos_target, demos_replacement)

with open('src/components/DemosPage.tsx', 'w', encoding='utf-8') as f:
    f.write(demos_content)
print("Updated DemosPage.tsx with sr-only unique anchor text")

# 2. Update FoodSafetyTemplatesPage.tsx
with open('src/components/FoodSafetyTemplatesPage.tsx', 'r', encoding='utf-8') as f:
    tools_content = f.read()

tools_target = """                        <span>{template.type === "smart_tool" || template.slug.includes("calc") || template.slug.includes("allergen") || template.slug.includes("quiz") ? "Open Interactive Tool" : "Open Template"}</span>
                        <ExternalLink className="w-3 h-3 text-gray-400 group-hover:text-white" />"""

tools_replacement = """                        <span>{template.type === "smart_tool" || template.slug.includes("calc") || template.slug.includes("allergen") || template.slug.includes("quiz") ? "Open Interactive Tool" : "Open Template"}</span>
                        <span className="sr-only">: {template.title}</span>
                        <ExternalLink className="w-3 h-3 text-gray-400 group-hover:text-white" />"""

tools_content = tools_content.replace('\r\n', '\n')
tools_target = tools_target.replace('\r\n', '\n')
tools_replacement = tools_replacement.replace('\r\n', '\n')

assert tools_target in tools_content, "tools_target not found"
tools_content = tools_content.replace(tools_target, tools_replacement)

badge_target = """                    <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-gray-700 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full shadow-sm border border-gray-200">
                      {template.preheader || template.type.toUpperCase()}
                    </span>"""

badge_replacement = """                    <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-gray-700 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full shadow-sm border border-gray-200">
                      {template.preheader || template.type.toUpperCase()}
                      <span className="sr-only"> ({template.title})</span>
                    </span>"""

badge_target = badge_target.replace('\r\n', '\n')
badge_replacement = badge_replacement.replace('\r\n', '\n')

if badge_target in tools_content:
    tools_content = tools_content.replace(badge_target, badge_replacement)
    print("Updated badge links in FoodSafetyTemplatesPage.tsx")

with open('src/components/FoodSafetyTemplatesPage.tsx', 'w', encoding='utf-8') as f:
    f.write(tools_content)
print("Updated FoodSafetyTemplatesPage.tsx with sr-only unique anchor text")
