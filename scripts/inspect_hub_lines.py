import sys
sys.stdout.reconfigure(encoding='utf-8')

with open('src/components/FoodSafetyTemplatesPage.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

lines = text.splitlines()
print("Lines 212-230:")
for i in range(211, 230):
    print(f"{i+1}: {lines[i]}")

print("\nLines 620-650:")
for i in range(620, min(650, len(lines))):
    print(f"{i+1}: {lines[i]}")
