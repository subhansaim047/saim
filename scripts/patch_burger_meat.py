# scripts/patch_burger_meat.py
with open('src/components/TemplateDetailPage.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

target = """  const isMeatCookingTool =
    !isMasterFoodTempTool &&
    template.slug.includes("temperature-chart") &&
    (template.slug.includes("venison") ||
      template.slug.includes("chicken") ||
      template.slug.includes("duck") ||
      template.slug.includes("beef") ||
      template.slug.includes("lamb") ||
      template.slug.includes("pork") ||
      template.slug.includes("ham") ||
      template.slug.includes("turkey") ||
      template.slug.includes("fish"));

  const initialMeat: MeatCategory =
    template.slug.includes("venison") ? "venison" :
    template.slug.includes("chicken") ? "chicken" :
    template.slug.includes("duck") ? "duck" :
    template.slug.includes("beef") ? "beef" :
    template.slug.includes("lamb") ? "lamb" :
    template.slug.includes("ham") ? "ham" :
    template.slug.includes("pork") ? "pork" :
    template.slug.includes("fish") ? "fish" : "chicken";"""

replacement = """  const isMeatCookingTool =
    !isMasterFoodTempTool &&
    (template.slug.includes("temperature-chart") || template.slug.includes("temp-chart")) &&
    (template.slug.includes("venison") ||
      template.slug.includes("chicken") ||
      template.slug.includes("duck") ||
      template.slug.includes("beef") ||
      template.slug.includes("lamb") ||
      template.slug.includes("pork") ||
      template.slug.includes("ham") ||
      template.slug.includes("turkey") ||
      template.slug.includes("fish") ||
      template.slug.includes("burger"));

  const initialMeat: MeatCategory =
    template.slug.includes("burger") ? "burger" :
    template.slug.includes("venison") ? "venison" :
    template.slug.includes("chicken") ? "chicken" :
    template.slug.includes("duck") ? "duck" :
    template.slug.includes("beef") ? "beef" :
    template.slug.includes("lamb") ? "lamb" :
    template.slug.includes("ham") ? "ham" :
    template.slug.includes("pork") ? "pork" :
    template.slug.includes("fish") ? "fish" : "chicken";"""

if target in text:
    text = text.replace(target, replacement, 1)
    with open('src/components/TemplateDetailPage.tsx', 'w', encoding='utf-8') as f:
        f.write(text)
    print("Updated isMeatCookingTool and initialMeat for burger")
else:
    print("Error: target not found")
