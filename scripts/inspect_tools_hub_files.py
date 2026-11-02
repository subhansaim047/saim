import sys
sys.stdout.reconfigure(encoding='utf-8')

with open('app/tools/page.tsx', 'r', encoding='utf-8') as f:
    tools_page = f.read()

print("=== app/tools/page.tsx ===")
print('\n'.join(tools_page.splitlines()[:45]))

with open('src/components/FoodSafetyTemplatesPage.tsx', 'r', encoding='utf-8') as f:
    hub_comp = f.read()

print("\n=== src/components/FoodSafetyTemplatesPage.tsx ===")
print('\n'.join(hub_comp.splitlines()[:55]))
