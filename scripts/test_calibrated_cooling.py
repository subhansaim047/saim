import re

h1 = "Commercial Kitchen Food Cooling Temperature Guide UK"

opening = "In commercial catering, cooked food must be cooled safely to prevent foodborne illness. Rapid cooling reduces the time high-risk foods spend in the temperature danger zone where pathogenic bacteria multiply quickly. Food businesses across the UK must follow their site-specific food-safety management system alongside official FSA or FSS guidance. Because cooling rates depend on food density and equipment, procedures vary by kitchen."

h2_1 = "Why Is Rapid Food Cooling Important?"
s1 = "When cooking ends, food temperatures drop into warm ranges that support rapid bacterial growth. Leaving large volumes of hot food to cool slowly at room temperature creates an avoidable hazard. Deep containers insulate the thermal core, allowing warm conditions to persist. High-risk foods like cooked rice, pasta, meat joints, gravies, and stocks require diligent control. Documented temperature records verify safe cooling methods."

h2_2 = "The Food Temperature Danger Zone"
s2 = "In UK food safety, 8°C to 63°C is recognised as the temperature danger zone, where bacteria like Salmonella multiply rapidly.\n\nUnder Schedule 4 of the Food Safety and Hygiene (England) Regulations 2013 and devolved equivalents, commercial cold holding requires 8°C or below, while hot holding requires 63°C or above. This danger zone serves as an operational control benchmark rather than an inflexible statutory rule for every preparation stage. Food businesses must follow validated procedures in their HACCP or SFBB systems referencing official FSA guidance."

h2_3 = "A Safe Commercial Food-Cooling Process"
s3 = "Commercial kitchens should follow a structured 10-step safe cooling procedure:\n\n1. Stop heat: Remove cooked items from heat sources promptly.\n2. Divide batches: Split large quantities into smaller portions to speed cooling.\n3. Use shallow pans: Spread food into stainless trays (max depth 50mm).\n4. Allow airflow: Space containers on open wire racks for unhindered ventilation.\n5. Rapid cooling: Deploy a commercial blast chiller or ice-water bath.\n6. Shield food: Cover loosely with clean parchment or vented lids.\n7. Probe core: Check internal temperatures with a sanitised digital probe.\n8. Cold storage: Move batches into cold storage once below 8°C.\n9. Corrective action: If cooling lags, subdivide, refresh ice, or discard.\n10. Review procedures: Re-evaluate cooling whenever recipes or equipment change."

h2_4 = "Why Container Depth and Portion Size Matter"
s4 = "Heat dissipates slowly through dense foods. In deep stockpots, the centre remains insulated, keeping core temperatures dangerously warm while exterior surfaces cool. Transferring hot food into shallow stainless steel pans (maximum depth 50mm) increases surface area for rapid heat loss. Slicing large meat joints or portioning poultry similarly releases trapped core heat, ensuring even chilling."

h2_5 = "Blast Chilling and Other Cooling Methods"
s5 = "Commercial blast chillers circulate high-velocity cold air to drop core temperatures from 70°C to below 3°C within 90 minutes, setting the cook-chill benchmark. Alternatively, kitchens use ice-water baths and sanitised cooling paddles for soups and gravies. Dedicated cooling racks in prep areas assist airflow. Never place hot steaming food directly into standard storage fridges: this elevates cabinet temperatures, endangers chilled foods, and strains compressors."

h2_6 = "Cooling Cooked Rice, Pasta and High-Risk Foods"
s6 = "Certain high-starch and protein-rich preparations require strict handling. Uncooked rice naturally harbours spores of Bacillus cereus, which survive boiling temperatures. If cooled slowly, spores germinate and produce heat-stable emetic toxins that resist subsequent reheating. Cooked rice must be cooled as quickly as possible—ideally within one hour as advised in FSA Safer Food, Better Business guidance—and chilled at 5°C or lower. Thick gravies, sauces, and large meat joints also retain heat and should be stirred or sliced before chilling."

h2_7 = "Temperature Monitoring and Records"
s7 = "Consistent temperature monitoring verifies that cooling controls remain effective. Staff should disinfect probe thermometers with food-safe antibacterial wipes before and after checking each batch, inserting the probe into the geometric centre where cooling is slowest. Document batch names, start times, finish times, core temperatures, and staff initials. Maintaining clean cooling logs provides essential due-diligence evidence for local authority inspections and internal audits."

h2_8 = "What to Do If Food Cools Too Slowly"
s8 = "When cooling lags, act promptly. Subdivide batches into shallower trays or submerge containers into ice-water baths. If food lingers in the danger zone beyond safe HACCP limits, safely discard it—never guess. Under specific validated HACCP safe methods, slow food may be reheated once to 75°C (82°C in Scotland) before rapid re-chilling; reheating does not destroy heat-stable toxins like Bacillus cereus cereulide. Review processes to prevent recurrence."

h2_9 = "Cooling Checklist for Commercial Kitchens"
s9 = "Maintain cooling standards across kitchen shifts using this concise checklist:\n- Batches split into shallow pans under 50mm depth.\n- Blast chiller or ice-water bath utilised.\n- Vented covers shield food from contamination.\n- Digital probe sanitised before and after use.\n- Core temperatures checked at the thickest part.\n- Cooling start and finish times recorded.\n- Batches moved to cold storage once below 8°C.\n- Cold storage kept at 5°C or below.\n- Slow batches corrected or discarded promptly.\n- Team trained on site-specific HACCP procedures."

h2_10 = "England, Wales, Scotland and Northern Ireland"
s10 = "Food hygiene rules across the UK share core standards, but administration varies:\n- England: FSA policy, enforced by local councils under 2013 regulations; voluntary rating display.\n- Wales: FSA policy; mandatory hygiene rating display by law.\n- Scotland: Food Standards Scotland under 2006 regulations; operates FHIS and CookSafe (82°C reheating standard).\n- Northern Ireland: FSA policy; mandatory hygiene rating display applies by law.\nLocal Environmental Health Officers inspect businesses against these regional frameworks and site-specific HACCP."

h2_11 = "Frequently Asked Questions"
faqs = [
    ("Why must cooked food be cooled quickly?", "Rapid cooling minimises time in the danger zone between 8°C and 63°C, preventing bacterial multiplication and spore germination."),
    ("What is the safest way to cool a large batch of food?", "Dividing batches into shallow stainless steel trays (under 50mm depth) and using a blast chiller or ice-water bath with frequent stirring."),
    ("Can a blast chiller be used for cooked food?", "Yes. Commercial blast chillers are designed specifically to pull hot cooked food down below 3°C within 90 minutes using high-velocity chilled airflow."),
    ("How should cooked rice be cooled?", "Spread rice into thin layers, cool as quickly as possible—ideally within one hour as advised by the FSA—and chill below 5°C to inhibit Bacillus cereus."),
    ("What should a kitchen record during cooling?", "Record the date, food item, batch size, cooling start and finish times, final core temperature, and staff initials in your food safety log."),
    ("What should staff do if food does not cool as expected?", "Execute HACCP corrective actions: subdivide into smaller trays, add ice baths, or safely discard the food if danger zone time limits are breached."),
    ("Is there one cooling time that applies to every UK food business?", "No single cooling time applies to every UK kitchen. While the FSA recommends cooling food within 90 minutes as standard SFBB best practice, exact cooling procedures depend on food type, portion mass, equipment, and your site-specific HACCP plan.")
]

disclaimer = "Food Safety Information Disclaimer: This guide provides general food safety information for commercial kitchens across the UK. It does not replace site-specific food-safety management systems (HACCP or SFBB) or official guidance from the Food Standards Agency, Food Standards Scotland, or your local authority environmental health department. Businesses must validate their own cooling controls to ensure customer safety."

tools_section = "Related Kitchen Due Diligence Tools & Logs Access free printable sheets and interactive tools: food cooling poster, fridge temperature record sheet, freezer temperature chart, hot holding food temperature log, reheating food temperature guide, HACCP plan builder, opening and closing checklist template, all kitchen tools."

agency_bridge = "Elevate your food brand with custom web engineering. Saim Dev builds bespoke Next.js websites for UK catering and restaurant operators, optimized for sub-second speeds, mobile ordering, and maximum local search visibility. Discuss on WhatsApp View Services & Packages"

headings = [h2_1, h2_2, h2_3, h2_4, h2_5, h2_6, h2_7, h2_8, h2_9, h2_10, h2_11]
all_content = [opening] + [item for pair in zip(headings, [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, ""]) for item in pair if item] + [tools_section, disclaimer, agency_bridge]

faq_titles = " ".join([q for q, a in faqs])
faq_all = " ".join([q + " " + a for q, a in faqs])

words_ssr = len((" ".join(all_content) + " " + faq_titles).split())
words_full = len((" ".join(all_content) + " " + faq_all).split())

print("SSR Word count (with headings & FAQ titles):", words_ssr)
print("Full Word count (with FAQ answers):", words_full)

forbidden = ["eho-approved", "fsa-approved", "guaranteed compliance", "guaranteed inspection pass", "legally guaranteed", "one rule applies to every uk kitchen"]
found = [f for f in forbidden if f in (" ".join(all_content) + " " + faq_all).lower()]
print("Forbidden phrases found:", found)
