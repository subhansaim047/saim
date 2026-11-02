import os

pages = [
    (r"C:\Users\subhan\.gemini\antigravity\scratch\saim\app\tools\ppds-label-generator\page.tsx", "IconPpdsLabel", "Tag", "Tag"),
    (r"C:\Users\subhan\.gemini\antigravity\scratch\saim\app\tools\allergen-matrix-generator\page.tsx", "IconAllergenShield", "ShieldAlert", "ShieldAlert"),
    (r"C:\Users\subhan\.gemini\antigravity\scratch\saim\app\tools\food-cost-calculator\page.tsx", "IconFoodCost", "Calculator", "Calculator"),
    (r"C:\Users\subhan\.gemini\antigravity\scratch\saim\app\tools\recipe-batch-calculator\page.tsx", "IconRecipeScaler", "ChefHat", "ChefHat"),
]

for file_path, old_icon, new_icon, lucide_import in pages:
    if os.path.exists(file_path):
        with open(file_path, "r", encoding="utf-8") as f:
            c = f.read()
        c = c.replace(f"<{old_icon} />", f"<{new_icon} className=\"w-5 h-5\" />")
        c = c.replace(f"import {{ {old_icon} }} from \"@/components/icons/ToolIcons\";\n", "")
        c = c.replace(f"import {{ {old_icon} }} from \"@/components/icons/ToolIcons\";\r\n", "")
        # make sure lucide_import is imported from lucide-react if not already
        if lucide_import not in c.split("from \"lucide-react\"")[0]:
            c = c.replace("from \"lucide-react\";", f"{lucide_import}, \n}} from \"lucide-react\";")
            c = c.replace("import {", "import {\n  " + lucide_import + ",")
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(c)
        print(f"Patched {file_path}")

print("Done updating tool pages.")
