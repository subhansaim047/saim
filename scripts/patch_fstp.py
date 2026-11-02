path = r"C:\Users\subhan\.gemini\antigravity\scratch\saim\src\components\FoodSafetyTemplatesPage.tsx"
with open(path, "r", encoding="utf-8") as f:
    c = f.read()

# Replace the import from ToolIcons
c = c.replace(
    'import { IconPpdsLabel, IconAllergenShield, IconFoodCost, IconRecipeScaler, IconHaccpFolio, IconTempLog, IconCleaningSchedule, IconEhoChecklist, IconDeliveryLog, IconFoodSafetyQuiz } from "./icons/ToolIcons";',
    'import { Tag, ShieldAlert, Calculator, ChefHat, ClipboardCheck, Snowflake, Droplets, Award } from "lucide-react";'
)

# Replace the button icons
c = c.replace('<IconAllergenShield className="w-4 h-4 shrink-0" />', '<ShieldAlert className="w-4 h-4 shrink-0" />')
c = c.replace('<IconFoodCost className="w-4 h-4 shrink-0" />', '<Calculator className="w-4 h-4 shrink-0" />')
c = c.replace('<IconRecipeScaler className="w-4 h-4 shrink-0" />', '<ChefHat className="w-4 h-4 shrink-0" />')
c = c.replace('<IconPpdsLabel className="w-4 h-4 shrink-0" />', '<Tag className="w-4 h-4 shrink-0" />')

# Replace the cluster card icons
c = c.replace('<IconAllergenShield />', '<ShieldAlert className="w-4 h-4" />')
c = c.replace('<IconHaccpFolio />', '<ClipboardCheck className="w-4 h-4" />')
c = c.replace('<IconTempLog />', '<Snowflake className="w-4 h-4" />')
c = c.replace('<IconCleaningSchedule />', '<Droplets className="w-4 h-4" />')
c = c.replace('<IconFoodCost />', '<Calculator className="w-4 h-4" />')
c = c.replace('<IconEhoChecklist />', '<Award className="w-4 h-4" />')

with open(path, "w", encoding="utf-8") as f:
    f.write(c)

print("FoodSafetyTemplatesPage.tsx patched successfully.")
