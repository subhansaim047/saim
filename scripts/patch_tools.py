import os

path = r"C:\Users\subhan\.gemini\antigravity\scratch\saim\src\components\ToolsPage.tsx"
with open(path, "r", encoding="utf-8") as f:
    content = f.read()

# Replace imports
content = content.replace(
    'import { IconPpdsLabel, IconAllergenShield, IconFoodCost, IconRecipeScaler, IconHaccpFolio, IconTempLog, IconChecklistAudit } from "./icons/ToolIcons";',
    '// clean icons aligned with ProcessSection'
)

# Quick cards
content = content.replace(
    '<IconTile color="amber" size="sm">\n                <IconPpdsLabel />\n              </IconTile>',
    '<IconTile color="amber" size="sm">\n                <Tag className="w-4 h-4" />\n              </IconTile>'
)
content = content.replace(
    '<IconTile color="amber" size="sm">\r\n                <IconPpdsLabel />\r\n              </IconTile>',
    '<IconTile color="amber" size="sm">\r\n                <Tag className="w-4 h-4" />\r\n              </IconTile>'
)

content = content.replace(
    '<IconTile color="vermilion" size="sm">\n                <IconAllergenShield />\n              </IconTile>',
    '<IconTile color="vermilion" size="sm">\n                <ShieldAlert className="w-4 h-4" />\n              </IconTile>'
)
content = content.replace(
    '<IconTile color="vermilion" size="sm">\r\n                <IconAllergenShield />\r\n              </IconTile>',
    '<IconTile color="vermilion" size="sm">\r\n                <ShieldAlert className="w-4 h-4" />\r\n              </IconTile>'
)

content = content.replace(
    '<IconTile color="emerald" size="sm">\n                <IconFoodCost />\n              </IconTile>',
    '<IconTile color="emerald" size="sm">\n                <Calculator className="w-4 h-4" />\n              </IconTile>'
)
content = content.replace(
    '<IconTile color="emerald" size="sm">\r\n                <IconFoodCost />\r\n              </IconTile>',
    '<IconTile color="emerald" size="sm">\r\n                <Calculator className="w-4 h-4" />\r\n              </IconTile>'
)

content = content.replace(
    '<IconTile color="blue" size="sm">\n                <IconChecklistAudit />\n              </IconTile>',
    '<IconTile color="blue" size="sm">\n                <ClipboardCheck className="w-4 h-4" />\n              </IconTile>'
)
content = content.replace(
    '<IconTile color="blue" size="sm">\r\n                <IconChecklistAudit />\r\n              </IconTile>',
    '<IconTile color="blue" size="sm">\r\n                <ClipboardCheck className="w-4 h-4" />\r\n              </IconTile>'
)

content = content.replace(
    '<IconTile color="indigo" size="sm">\n                <IconHaccpFolio />\n              </IconTile>',
    '<IconTile color="indigo" size="sm">\n                <Printer className="w-4 h-4" />\n              </IconTile>'
)
content = content.replace(
    '<IconTile color="indigo" size="sm">\r\n                <IconHaccpFolio />\r\n              </IconTile>',
    '<IconTile color="indigo" size="sm">\r\n                <Printer className="w-4 h-4" />\r\n              </IconTile>'
)

# Replace tabs
content = content.replace('<IconAllergenShield className="w-4 h-4 shrink-0" />', '<ShieldAlert className="w-4 h-4 shrink-0" />')
content = content.replace('<IconFoodCost className="w-4 h-4 shrink-0" />', '<Calculator className="w-4 h-4 shrink-0" />')
content = content.replace('<IconRecipeScaler className="w-4 h-4 shrink-0" />', '<ChefHat className="w-4 h-4 shrink-0" />')
content = content.replace('<IconChecklistAudit className="w-4 h-4 shrink-0" />', '<ClipboardCheck className="w-4 h-4 shrink-0" />')
content = content.replace('<IconTempLog className="w-4 h-4 shrink-0" />', '<Thermometer className="w-4 h-4 shrink-0" />')

with open(path, "w", encoding="utf-8") as f:
    f.write(content)

print("Patch applied to ToolsPage.tsx successfully.")
