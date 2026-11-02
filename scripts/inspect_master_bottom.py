with open('src/components/tools/MasterFoodTemperatureChartTool.tsx', 'r', encoding='utf-8') as f:
    lines = f.readlines()

print("Total lines:", len(lines))
for i in range(len(lines) - 40, len(lines)):
    print(f"{i+1}: {lines[i]}", end="")
