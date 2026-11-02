import re

# Let's draft the copy for each section

direct_answer = """Prepacked for Direct Sale (PPDS) food is food packaged on the premises before a customer selects or orders it. Under Natasha’s Law (the Food Information Amendment Regulations 2019), any UK food business selling PPDS food—including cafes, bakeries, delis, restaurants, and takeaways—must clearly label each item with the name of the food, a complete ingredients list, and any of the 14 statutory allergens emphasised. Businesses must verify current official guidance for their specific operational circumstances."""

sec_what_is = """Prepacked for Direct Sale (PPDS) refers to food that meets three specific criteria: it is packaged before the consumer selects or orders it, it is packaged on the same premises from which it is sold, and it is offered directly to the final consumer.

Common commercial examples of PPDS food include:
• Sandwiches and baguettes prepared and wrapped in clingfilm or paper bags before being placed in a display fridge.
• Salads and pasta pots boxed and lidded in advance for grab-and-go lunchtime customers.
• Bakery items such as cookies, pasties, or muffins packaged on-site and placed on retail shelves.
• Food prepared and packaged on-site by a takeaway before being placed into a heated display for customer collection.

It is crucial to distinguish PPDS from other food sales:
• Non-prepacked food: Loose food displayed without packaging, such as open bakery items or loose pastries served across a counter.
• Food packed after ordering: Food packaged only after the consumer specifies their choice, such as a sandwich made to order or hot chips bagged after an order is placed.
• Prepacked food from external suppliers: Food packaged at a different facility or commercial manufacturing site, which already requires standard full EU/UK FIC prepacked labelling.
• Distance selling: Food ordered online, via mobile apps, or by telephone. Distance selling follows separate allergen communication rules rather than PPDS packaging rules."""

sec_must_include = """A compliant PPDS label must present essential product information clearly, legibly, and prominently on the packaging. Under current UK food labelling rules, a label generally requires:

• Name of the Food: A clear, descriptive name that accurately tells the customer what the food is. Vague commercial or fantasy names should be accompanied by a customary or descriptive name.
• Complete Ingredients List: Every single ingredient used to produce the food must be recorded in descending order of weight (as measured at the time of recipe mixing).
• Emphasised Statutory Allergens: Any of the 14 statutory allergens present in the product must be emphasised within the ingredients list every time they appear.
• Legible Presentation: Information must be easily visible, clearly legible, and not hidden, obscured, or interrupted by graphics or other text.
• Business Information: The name and UK address of the Food Business Operator (FBO) responsible for the food, or the business packaging the item where required by applicable guidance.

Official guidance allows flexibility in physical label layout (such as printed adhesive stickers, tags, or pre-printed wrappers), provided the mandatory details remain legible and easy for consumers to find."""

sec_14_allergens = """UK food legislation identifies 14 statutory allergens that represent the most common triggers of serious allergic reactions and food hypersensitivities:

• Celery: Stalks, leaves, seeds, and celery salt.
• Cereals containing gluten: Including wheat, rye, barley, spelt, Khorasan, and oats.
• Crustaceans: Prawns, crabs, lobsters, scampi, and langoustines.
• Eggs: Fresh eggs, pasteurised liquid egg, dried egg, and egg whites.
• Fish: Fresh, frozen, canned fish, and fish products such as Worcestershire sauce or fish sauce.
• Lupin: Lupin flour, seeds, and cereal blends.
• Milk: Cow's, goat's, and sheep's milk, cheese, butter, cream, and milk powders.
• Molluscs: Mussels, oysters, squid, clams, octopus, and snails.
• Mustard: Mustard liquid, powder, seeds, and mustard dressings.
• Nuts (Tree Nuts): Almonds, hazelnuts, walnuts, cashews, pecans, Brazil nuts, pistachios, and macadamias.
• Peanuts: Groundnuts, peanut butter, and peanut oil.
• Sesame: Sesame seeds, sesame flour, tahini, and sesame oil.
• Soya: Soybeans, edamame, soy sauce, tofu, and soya lecithin.
• Sulphur dioxide and sulphites: When present at concentrations exceeding 10 mg/kg or 10 mg/litre (often in dried fruit, wine, and vinegars).

These allergens must be declared whenever they are present either as standalone ingredients or as components of compound ingredients."""

sec_compound = """Many kitchen ingredients are composite products rather than single raw ingredients. A compound ingredient is an ingredient that is itself made from multiple sub-ingredients. Under Natasha’s Law, kitchen staff must declare every sub-ingredient or ensure all components are fully accounted for.

Common kitchen examples of compound ingredients containing hidden allergens include:
• Mayonnaise: Frequently made with rapeseed oil, water, pasteurised egg, spirit vinegar, and mustard.
• Pesto: Typically contains fresh basil, olive oil, hard cheese (milk), and pine nuts or cashews (tree nuts).
• Bread and rolls: May contain wheat flour (gluten), soya flour, and sesame seeds or seed traces.
• Stock cubes and gravies: Often contain celery, wheat gluten, yeast extracts, and flavour enhancers.
• Commercial sauces: Barbecue, teriyaki, and curry sauces frequently contain soya, fish, wheat, mustard, or sulphites.
• Spice mixes and curry pastes: May incorporate mustard powder, ground celery seeds, or sesame.
• Chocolate and confectionery: Usually contain whole milk powder, butter oil, and soya lecithin emulsifiers.
• Marinades and dressings: Often incorporate soy sauce (soya, wheat), fish sauce, or vinegar containing sulphites.
• Worcestershire sauce: Contains malt vinegar from barley (gluten) and anchovies (fish).
• Composite fillings: Fillings like coronation chicken or tuna crunch combine proteins with allergen-rich dressings.

Food businesses must inspect supplier specifications and physical trade packaging rather than guessing or relying on generic recipes."""

sec_how_to = """Follow these 9 systematic steps to create compliant PPDS food labels for your kitchen:

1. Identify the exact food product: Determine whether the item meets PPDS criteria before packaging.
2. Record every recipe ingredient: Weigh and document every raw ingredient and compound component in the recipe batch.
3. Check supplier specifications: Inspect manufacturer trade labels and product data sheets for each ingredient brand.
4. Identify allergens in all ingredients: Flag any of the 14 statutory allergens present in both raw items and sub-ingredients.
5. Prepare the complete ingredient list: Order ingredients in descending order of incoming weight at recipe preparation.
6. Emphasise allergens clearly: Highlight allergens in BOLD capitals or high-contrast font whenever they appear in the text.
7. Add required business information: Include the legal food name, packaging date/shelf life, and responsible business details.
8. Check the label before printing: Proofread the completed label against physical ingredient containers on the line.
9. Review whenever ingredients change: Re-audit the label whenever a recipe, supplier, or ingredient brand is substituted."""

sec_examples = """Review these practical PPDS labelling examples showing proper ingredient ordering and allergen emphasis:

Example 1: Roast Chicken and Mayonnaise Sandwich
• Product Name: Roast Chicken Salad Sandwich
• Ingredients: White bread [WHEAT flour, water, yeast, salt, SOYA flour], roast chicken breast (32%) [chicken, salt, dextrose], mayonnaise [rapeseed oil, water, pasteurised EGG, spirit vinegar, MUSTARD flour], cos lettuce.
• Emphasised Allergens: WHEAT, SOYA, EGG, MUSTARD.
• Practical Note: Verify whether your bread baker uses milk or sesame topping seeds.

Example 2: Basil Pesto Pasta Salad Bowl
• Product Name: Tomato & Basil Pesto Penne Salad
• Ingredients: Penne pasta (52%) [durum WHEAT semolina, water], basil pesto (18%) [olive oil, basil, Parmesan cheese (MILK), pine NUTS (TREE NUTS), garlic, salt], cherry tomatoes, spinach.
• Emphasised Allergens: WHEAT, MILK, NUTS.
• Practical Note: Commercial pestos frequently substitute cashew nuts or add milk derivatives.

Example 3: Almond Frangipane Tart
• Product Name: Baked Almond & Raspberry Tart
• Ingredients: Pastry [WHEAT flour, butter (MILK), sugar, EGG], frangipane filling [ground ALMONDS (TREE NUTS) (24%), sugar, butter (MILK), pasteurised EGG], raspberry jam [raspberries, sugar, pectin, citric acid], flaked ALMONDS (TREE NUTS).
• Emphasised Allergens: WHEAT, MILK, EGG, ALMONDS (NUTS).
• Practical Note: Confirm whether your bakery supplier uses peanut-free almond flour.

Always check actual supplier delivery packaging, as recipe formulations differ between commercial brands."""

sec_distance = """Food sold through distance selling channels (telephone orders, business websites, and delivery aggregators like Just Eat, Deliveroo, or Uber Eats) is governed by separate legal rules under the Food Information Regulations.

When selling food remotely:
• Before purchase: Allergen information must be made available before the customer completes their payment, whether via an online allergen filter, website menu notice, or verbal declaration over the phone.
• At delivery or collection: Clear allergen information must accompany the food when it is physically handed to the customer (such as on written order receipts, itemised container stickers, or delivery dockets).

Operational distinctions:
• In-store PPDS display: Full ingredient list and emphasised allergens fixed directly to the package.
• Telephone order: Staff must communicate allergens verbally before payment and supply written allergen notices upon delivery.
• Website or app delivery: Customers view allergen declarations digitally during ordering, with written verification upon handover.
• Customer collection: If packaged after the customer arrives, non-prepacked rules apply; if packaged in advance for collection, provide clear allergen paperwork."""

sec_supplier_changes = """Ingredient substitutions represent one of the highest risk factors for unintended allergen exposure. Kitchen operators must review packaging labels immediately whenever:

• An ingredient brand changes: Different manufacturers use different fillers, vegetable oils, or emulsifiers.
• A supplier changes: Wholesalers often substitute product lines without notifying the kitchen in advance.
• A kitchen recipe changes: Tweaking a marinade, dressing, or breading alters the descending weight order.
• A sauce or seasoning changes: Switching bouillon brands or dipping sauces can introduce undeclared celery, gluten, or soya.
• A product becomes prepacked before sale: If counter-served items are pre-portioned into grab-and-go packaging, they instantly transition to PPDS.
• A manufacturer alters an allergen statement: Suppliers frequently update factory cross-contamination statements on raw packs."""

sec_tool_cta = """Kitchen operators can use our free PPDS label generator to simplify the creation of compliant product labels with automated allergen highlighting and printable adhesive formats.

While the tool assists with formatting and layout, food business operators remain legally responsible for ensuring that:
• All entered ingredients and sub-ingredients are truthful and accurate.
• Current supplier specifications and trade delivery invoices have been verified.
• The completed label is reviewed and approved before application.
• Recipe modifications and ingredient brand substitutions are promptly updated.
• Operations comply with relevant local authority Environmental Health requirements."""

sec_faqs = """What does PPDS mean?
PPDS stands for Prepacked for Direct Sale. It refers to food that is packaged on the same premises from which it is sold to consumers, before the customer selects or orders it.

What is Natasha’s Law?
Natasha’s Law is the UK Food Information (Amendment) Regulations 2019. It requires UK food businesses to provide full ingredient lists and highlighted allergens on all PPDS foods.

Does PPDS food need a full ingredients list?
Yes. Every PPDS food item must have a complete ingredients list displayed on the packaging, with ingredients listed in descending order by weight.

How must allergens be emphasised on a label?
Statutory allergens must be visually emphasised within the ingredients list every time they appear, such as through bold typeface, capital letters, or contrasting text colours.

Is a sandwich wrapped in a cafe PPDS food?
Yes. If a sandwich is assembled, packaged in plastic or paper, and placed in a display fridge before a customer orders it, it is classified as PPDS.

Are online takeaway orders covered by the same rules?
No. Distance selling follows separate requirements: allergen information must be provided before the order is placed (e.g. on the online menu) and at delivery or collection.

What happens if a supplier changes an ingredient?
If an ingredient brand or recipe changes, you must immediately review the product specification, update the ingredients list, and print updated labels.

Can an online label generator replace food-safety checks?
No. Digital tools assist with label formatting, but the food business operator is legally responsible for verifying actual kitchen ingredients and supplier specifications."""

sec_sources_disclaimer = """Official Guidance Sources:
• Food Standards Agency (FSA): Introduction to allergen labelling and PPDS guidance (food.gov.uk)
• Food Standards Scotland (FSS): Prepacked for Direct Sale food guidance (foodstandards.gov.scot)
• GOV.UK: Food labelling and packaging requirements for UK businesses (gov.uk)

Food Safety Information Disclaimer: This guide provides general information and does not replace current official guidance, a site-specific food-safety management system or advice from the relevant local authority."""

full_text = f"{direct_answer}\n\n{sec_what_is}\n\n{sec_must_include}\n\n{sec_14_allergens}\n\n{sec_compound}\n\n{sec_how_to}\n\n{sec_examples}\n\n{sec_distance}\n\n{sec_supplier_changes}\n\n{sec_tool_cta}\n\n{sec_faqs}\n\n{sec_sources_disclaimer}"

words = re.findall(r"\b[\w\'-]+\b", full_text)
print("Total words in drafted body:", len(words))
