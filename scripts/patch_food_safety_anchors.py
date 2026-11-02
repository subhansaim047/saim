with open('src/components/FoodSafetyTemplatesPage.tsx', 'r', encoding='utf-8') as f:
    c = f.read()

target1 = """                  <Link
                    href={`/food-safety-templates/${getCanonicalTemplateSlug(template.slug)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 aspect-[4/3] flex items-center justify-center relative overflow-hidden transition-transform group-hover:scale-[1.02] ${getCardBg(template.type)}`}
                  >"""

replacement1 = """                  <Link
                    href={`/food-safety-templates/${getCanonicalTemplateSlug(template.slug)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Preview ${template.title}`}
                    className={`p-4 aspect-[4/3] flex items-center justify-center relative overflow-hidden transition-transform group-hover:scale-[1.02] ${getCardBg(template.type)}`}
                  >"""

target2 = """                      <Link
                        href={`/food-safety-templates/${getCanonicalTemplateSlug(template.slug)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-2.5 px-3 rounded-xl bg-gray-900 hover:bg-black text-white text-[11px] font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer group-hover:bg-[#2e2d75]"
                      >"""

replacement2 = """                      <Link
                        href={`/food-safety-templates/${getCanonicalTemplateSlug(template.slug)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open ${template.title}`}
                        className="w-full py-2.5 px-3 rounded-xl bg-gray-900 hover:bg-black text-white text-[11px] font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer group-hover:bg-[#2e2d75]"
                      >"""

c_norm = c.replace('\r\n', '\n')
target1_norm = target1.replace('\r\n', '\n')
replacement1_norm = replacement1.replace('\r\n', '\n')
target2_norm = target2.replace('\r\n', '\n')
replacement2_norm = replacement2.replace('\r\n', '\n')

assert target1_norm in c_norm, "target1 not found"
assert target2_norm in c_norm, "target2 not found"

c_norm = c_norm.replace(target1_norm, replacement1_norm)
c_norm = c_norm.replace(target2_norm, replacement2_norm)

with open('src/components/FoodSafetyTemplatesPage.tsx', 'w', encoding='utf-8') as f:
    f.write(c_norm)

print("Updated FoodSafetyTemplatesPage successfully")
