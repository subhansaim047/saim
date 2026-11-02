import re

with open('src/components/tools/MasterFoodTemperatureChartTool.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

# search headings and tables
headings = re.findall(r'<h[234][^>]*>(.*?)</h[234]>', text)
print("Headings:", [re.sub(r'<[^>]+>', '', h) for h in headings])
