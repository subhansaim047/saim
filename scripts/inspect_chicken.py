import re

with open('src/components/tools/MeatCookingTemperatureChartTool.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

m = re.search(r'chicken:\s*\{.*?\n  \},', text, re.DOTALL)
if m:
    cuts = re.findall(r'id:\s*"([^"]+)",\s*name:\s*"([^"]+)"', m.group(0))
    print('Chicken cuts:', cuts)
