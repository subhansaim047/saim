import re

content = """
To prepare for a top rating under the Food Hygiene Rating Scheme (FHRS), UK restaurants and takeaways must maintain verifiable standards across hygienic food handling, clean structural premises, and documented food safety management (such as SFBB or HACCP). The final rating is determined exclusively by the inspecting Environmental Health Officer (EHO) representing your local authority. A structured preparation checklist helps ensure daily practices match what officers evaluate during unannounced audits.

The Food Hygiene Rating Scheme provides consumers with transparent information regarding hygiene standards at the time of inspection. Run by the Food Standards Agency (FSA) with local councils, the scheme assesses food handling, cleanliness, and food safety management.

Ratings range from 0 (‘Urgent Improvement Necessary’) to 5 (‘Very Good’). The audit evaluates compliance with UK food safety law, including the Food Safety Act 1990 and the Food Hygiene Regulations, rather than food quality or customer service.

Environmental Health Officers inspect commercial kitchens across three distinct pillars. A serious failure in any single pillar caps the maximum attainable rating:

Inspectors examine operational routines during storage, prep, cooking, chilling, and hot-holding:
• Temperature Control: Storing chilled stock below 8°C (ideally 0°C to 5°C) and hot-holding above 63°C.
• Cross-Contamination: Strict physical separation of raw meats and ready-to-eat foods using colour-coded boards.
• Allergen Management: Accurate declaration of the 14 statutory allergens under Natasha's Law and the FIR 2014.
• Personal Hygiene: Clean protective clothing, hair coverings, bare below the elbows, and frequent handwashing.
• Food Traceability: Retaining supplier invoices verifying one-up, one-down ingredient traceability.

Inspectors review physical condition, layout, repair, lighting, and ventilation:
• Surfaces & Finishes: Smooth, impervious floors and walls that are easy to clean and disinfect.
• Handwashing Facilities: Dedicated basins with hot and cold running water, soap, and hygienic hand drying.
• Equipment Maintenance: Refrigerators with intact seals, degreased extraction canopies, and sound prep surfaces.
• Pest-Proofing: Fly screens, sealed external doors (no gaps over 5mm), and zero pest activity.
• Waste Storage: External bins with tight-fitting lids stored on clean, hard standing.

The decisive pillar evaluates written safety management and staff compliance:
• Documented FSMS: An up-to-date Safer Food, Better Business (SFBB) pack or bespoke HACCP system on-site.
• Daily Records: Consistent completion of opening and closing checks, temperature logs, and hot-holding sheets.
• Staff Training: Documented food hygiene training (such as Level 2) and allergen training for all handlers.
• Evidence of Practice: Demonstrating that staff routinely understand and follow documented controls.

Use this operational checklist to organise daily shift routines across prep, cooking, and shutdown:

Opening & Delivery Checks
• Check delivery temperatures (frozen ≤ -18°C, chilled ≤ 8°C).
• Inspect packaging integrity and date codes.
• Stock hand basins with warm water, soap, and towels.
• Verify fridge and freezer running temperatures.

Cooking & Temperature Checks
• Probe core cooking temperatures to ≥ 75°C (82°C in Scotland).
• Confirm hot-holding units keep food above 63°C.
• Cool cooked food below 8°C within safe targets.
• Disinfect probe thermometers between uses.

Cleaning & Allergen Controls
• Disinfect surfaces using BS EN 1276 certified sanitiser.
• Ensure allergen matrices match current ingredients.
• Use designated colour-coded chopping boards.
• Keep clean cloths and separate raw prep utensils.

Closing & Management Sign-Off
• Complete evening kitchen clean-down.
• Dispose of waste in external lidded bins.
• Ensure all perishable stock is covered and chilled.
• Sign off daily opening and closing checks.

Environmental Health Officers evaluate practices, premises, and management records. During an audit, an inspector may observe food handlers at work, check probe calibration in iced water, question staff on allergens, and review past safety records. Inspection priorities may vary between local authorities based on local risk profiles.

Follow these 7 steps to review your kitchen before an unannounced visit:
1. Review safety management: Confirm all safe methods and diary pages in your SFBB or HACCP pack are complete.
2. Verify daily records: Ensure temperature logs and cleaning records are completed in real time.
3. Rectify past issues: Address any non-compliances highlighted in previous council inspections.
4. Train kitchen staff: Ensure handlers can explain cooking temperatures, allergen controls, and hygiene rules.
5. Inspect the premises: Check behind cookers, under fridges, and around drains for dirt or pest ingress.
6. Check allergens and traceability: Keep allergen matrices up to date and file supplier invoices.
7. Record corrective actions: Document corrective steps taken whenever temperatures or procedures fall out of spec.

Receiving a lower rating (0 to 2) indicates non-compliance that requires prompt remediation. It does not automatically mean closure unless an imminent health risk triggers an emergency prohibition order.

Operators should address officer recommendations, rectify physical defects, and document improvements. Businesses may appeal the rating within 21 days or request a paid re-rating inspection once issues are resolved.

Food hygiene schemes differ across the UK home nations:
• England, Wales, and Northern Ireland: Use the Food Hygiene Rating Scheme (FHRS), awarding scores from 0 to 5. Sticker display is mandatory in Wales and Northern Ireland, and voluntary in England (ratings appear online on the FSA register).
• Scotland: Operates the Food Hygiene Information Scheme (FHIS), awarding 'Pass' or 'Improvement Required' ratings inspected with Food Standards Scotland (FSS).
*Procedures and fees for re-rating visits vary by local authority.

Related Food Hygiene Documentation & Record Sheets
Access free printable templates and tools:
• opening & closing checklist
• daily cleaning schedule
• fridge temperature sheet
• hot holding temperature log
• food traceability log
• HACCP plan builder
return to all kitchen tools
all food safety blog articles

Frequently Asked Questions About UK Food Hygiene Inspections
What are the main areas checked during a food hygiene inspection?
How can a takeaway prepare for a food hygiene inspection?
Does a 5-star rating guarantee future inspections will have the same result?
What records should a restaurant keep for an inspection?
How can a business respond if it receives a low rating?
Is the Scottish scheme the same as the Food Hygiene Rating Scheme?

Official Guidance Sources:
• Food Standards Agency (FSA): Food Hygiene Rating Scheme guidance
• Food Standards Scotland (FSS): Food Hygiene Information Scheme
• GOV.UK: Food hygiene ratings for businesses

Food Safety Information Disclaimer: This article provides general information and does not replace a site-specific Food Safety Management System, official council guidance or an Environmental Health Officer inspection.

Transform Your Food Business Online
Proud of your hygiene standards? Showcase them on a fast, modern website.
Saim Dev builds custom Next.js websites for independent UK takeaways and restaurants with allergen filters, commission-free ordering, and sub-second page speeds.
Discuss Your Project on WhatsApp
View Web Development Services
"""

words = re.findall(r'\b[\w\'-]+\b', content)
print("Word count:", len(words))
