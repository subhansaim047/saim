with open('src/components/tools/MasterFoodTemperatureChartTool.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

# find return (
idx = text.find('return (')
if idx != -1:
    print(text[idx:idx+2500])
