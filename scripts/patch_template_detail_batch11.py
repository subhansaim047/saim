# scripts/patch_template_detail_batch11.py
with open('src/components/TemplateDetailPage.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Add import
old_import = 'import { ProductSpecificationTool } from "./tools/ProductSpecificationTool";'
new_import = 'import { ProductSpecificationTool } from "./tools/ProductSpecificationTool";\nimport KitchenUtensilsTool from "./tools/KitchenUtensilsTool";'
if old_import in content:
    content = content.replace(old_import, new_import)
    print("Added KitchenUtensilsTool import")
else:
    print("Error: old_import not found")

# 2. Add boolean flag
old_flag = """const isProductSpecTool =
    template.slug === "product-specification-template" ||
    template.slug.includes("product-specification");"""

new_flag = """const isProductSpecTool =
    template.slug === "product-specification-template" ||
    template.slug.includes("product-specification");

  const isUtensilsTool =
    template.slug === "kitchen-utensils-list" ||
    template.slug.includes("utensil") ||
    template.slug.includes("equipment-list");"""

if old_flag in content:
    content = content.replace(old_flag, new_flag)
    print("Added isUtensilsTool flag")
else:
    print("Error: old_flag not found")

# 3. Add JSX rendering
old_jsx = """      {/* 4n. Commercial Food Product Technical Specification Builder */}
      {isProductSpecTool && (
        <ProductSpecificationTool templateId={template.id} />
      )}"""

new_jsx = """      {/* 4n. Commercial Food Product Technical Specification Builder */}
      {isProductSpecTool && (
        <ProductSpecificationTool templateId={template.id} />
      )}

      {/* 4o. Commercial Kitchen Utensils & Equipment Inventory Auditor */}
      {isUtensilsTool && (
        <KitchenUtensilsTool templateId={template.id} />
      )}"""

if old_jsx in content:
    content = content.replace(old_jsx, new_jsx)
    print("Added KitchenUtensilsTool JSX")
else:
    print("Error: old_jsx not found")

# 4. Update fallback exclusions
old_fallback = "!isProductSpecTool && ("
new_fallback = "!isProductSpecTool && !isUtensilsTool && ("
if old_fallback in content:
    content = content.replace(old_fallback, new_fallback)
    print("Updated fallback exclusions")
else:
    print("Error: old_fallback not found")

with open('src/components/TemplateDetailPage.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Saved TemplateDetailPage.tsx")
