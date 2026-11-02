import sys
sys.stdout.reconfigure(encoding='utf-8')

with open('app/tools/ppds-label-generator/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

lines = text.splitlines()
print("Top 35 lines:")
for i in range(35):
    print(f"{i+1}: {lines[i]}")

print("\nLines 180-220:")
for i in range(180, min(220, len(lines))):
    print(f"{i+1}: {lines[i]}")

print("\nLast 50 lines:")
for i in range(max(0, len(lines)-50), len(lines)):
    print(f"{i+1}: {lines[i]}")
