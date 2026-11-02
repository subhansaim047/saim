with open('src/components/FoodSafetyTemplatesPage.tsx', 'r', encoding='utf-8') as f:
    lines = f.readlines()

print("=== Hero lines (205-255) ===")
for i in range(205, 255):
    print(f"{i+1}: {lines[i]}")

print("\n=== Grid lines (560-590) ===")
for i in range(560, 590):
    print(f"{i+1}: {lines[i]}")
