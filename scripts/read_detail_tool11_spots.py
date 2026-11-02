import sys

sys.stdout.reconfigure(encoding='utf-8')

with open(r'C:\Users\subhan\.gemini\antigravity\scratch\saim\src\components\TemplateDetailPage.tsx', 'r', encoding='utf-8') as f:
    lines = f.readlines()

print("--- Imports ---")
for i in range(32, 40):
    print(f"L{i+1}: {lines[i]}", end='')

print("\n--- Boolean Checks ---")
for i in range(134, 146):
    print(f"L{i+1}: {lines[i]}", end='')

print("\n--- Render Block ---")
for i in range(422, 437):
    print(f"L{i+1}: {lines[i]}", end='')
