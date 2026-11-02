with open('src/components/tools/MasterFoodTemperatureChartTool.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

import re
# find presets array
m = re.search(r'const presets = \[(.*?)\];', text, re.DOTALL)
if m:
    print(m.group(0))
