with open('src/components/tools/DigitalChecklistTool.tsx', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for i in range(2520, 2577):
    if 'isFoodSanitation' in lines[i] or 'isCalibrationLog' in lines[i] or 'title.toLowerCase()' in lines[i]:
        print(f"{i+1}: {lines[i]}", end='')
