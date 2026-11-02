import sys

sys.stdout.reconfigure(encoding='utf-8')

with open('C:/Users/subhan/.gemini/antigravity/scratch/saim/src/components/TemplateDetailPage.tsx', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for i, line in enumerate(lines):
    if any(k in line for k in ['MeatCookingTemperature', 'DigitalChecklist', 'MasterFoodTemperature', 'AllergenMatrix', 'FoodTraceability']):
        print(f"{i+1}: {line.strip()}")
