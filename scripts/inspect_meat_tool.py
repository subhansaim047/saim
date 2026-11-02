import re

with open('src/components/tools/MeatCookingTemperatureChartTool.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

# find MeatCategory type definition
m = re.search(r'export type MeatCategory = ([^;]+);', text)
if m:
    print("MeatCategory type:", m.group(1))

# find all top-level keys in MEAT_DATABASE
keys = re.findall(r'(\w+):\s*\{\s*id:\s*"(\w+)"', text)
print("Database keys:", keys)
