with open('src/components/tools/DigitalChecklistTool.tsx', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for i, line in enumerate(lines):
    if 'const isFoodSanitation' in line or 'const isCalibrationLog' in line:
        for j in range(max(0, i - 10), min(len(lines), i + 25)):
            print(f"{j+1}: {lines[j]}", end='')
        break
