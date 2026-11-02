file_path = 'src/components/tools/DigitalChecklistTool.tsx'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Update isStartingFoodBusiness to explicitly check "opening a restaurant" and templateId
old_start = '''  const isStartingFoodBusiness =
    templateTitle.toLowerCase().includes("starting") ||
    templateTitle.toLowerCase().includes("new business") ||
    templateTitle.toLowerCase().includes("start a food") ||
    templateTitle.toLowerCase().includes("start-up");'''

new_start = '''  const isStartingFoodBusiness =
    templateTitle.toLowerCase().includes("starting") ||
    templateTitle.toLowerCase().includes("new business") ||
    templateTitle.toLowerCase().includes("start a food") ||
    templateTitle.toLowerCase().includes("start-up") ||
    templateTitle.toLowerCase().includes("opening a restaurant") ||
    (templateId && templateId.includes("opening-a-restaurant"));'''

if 'opening a restaurant' not in content:
    content = content.replace(old_start, new_start)
    print("Updated isStartingFoodBusiness")

# Update isRestaurantFoh to explicitly check "restaurant opening"
old_foh = '''  const isRestaurantFoh =
    !isRetailStore &&
    !isKitchenOpeningClosing &&
    !isStartingFoodBusiness &&'''

new_foh = '''  const isRestaurantFoh =
    !isRetailStore &&
    !isKitchenOpeningClosing &&
    !isStartingFoodBusiness &&
    (templateTitle.toLowerCase().includes("restaurant opening") || (templateId && templateId.includes("restaurant-opening")) ||'''

if 'restaurant opening' not in content:
    content = content.replace(old_foh, new_foh)
    # close the parenthesis for the added OR branch
    content = content.replace('!templateTitle.toLowerCase().includes("health")));', '!templateTitle.toLowerCase().includes("health"))));')
    print("Updated isRestaurantFoh")

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Saved DigitalChecklistTool.tsx successfully for Batch 22!")
