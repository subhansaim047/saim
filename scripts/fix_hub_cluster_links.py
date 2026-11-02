path = 'src/components/FoodSafetyTemplatesPage.tsx'

with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# Fix cluster links:
# 1. delivery-intake-log -> delivery-log
content = content.replace('/food-safety-templates/delivery-intake-log', '/food-safety-templates/delivery-log')

# 2. fridge-temperature-log -> fridge-temperature-chart
content = content.replace('/food-safety-templates/fridge-temperature-log', '/food-safety-templates/fridge-temperature-chart')

# 3. freezer-temperature-log -> freezer-temperature-chart
content = content.replace('/food-safety-templates/freezer-temperature-log', '/food-safety-templates/freezer-temperature-chart')

# 4. opening-closing-checklist -> kitchen-opening-and-closing-checklist
content = content.replace('/food-safety-templates/opening-closing-checklist', '/food-safety-templates/kitchen-opening-and-closing-checklist')

# 5. chopping-board-guide -> chopping-board-colour-chart
content = content.replace('/food-safety-templates/chopping-board-guide', '/food-safety-templates/chopping-board-colour-chart')

# 6. handwashing-poster -> hand-washing-poster
content = content.replace('/food-safety-templates/handwashing-poster', '/food-safety-templates/hand-washing-poster')

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Hub cluster links updated successfully!")
