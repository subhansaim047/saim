with open('src/components/tools/DigitalChecklistTool.tsx', 'r', encoding='utf-8') as f:
    code = f.read()

print("sanitation in code:", "sanitation" in code.lower())
print("calibration in code:", "calibration" in code.lower())
print("thermometer in code:", "thermometer" in code.lower())
