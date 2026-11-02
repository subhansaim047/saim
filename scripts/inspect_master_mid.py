with open('src/components/tools/MasterFoodTemperatureChartTool.tsx', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for i in range(439, 500):
    print(f"{i+1}: {lines[i]}", end="")
