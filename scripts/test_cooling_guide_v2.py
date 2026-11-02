import re
from bs4 import BeautifulSoup

# Let's craft the exact component text and measure word counts

opening_direct_answer = """In commercial catering, cooked food must be cooled safely to protect consumers from foodborne illness. Rapid, controlled cooling reduces the time high-risk foods spend in the temperature danger zone where pathogenic bacteria multiply quickly. Food businesses across the UK must follow their site-specific food-safety management system alongside official guidance from the Food Standards Agency or Food Standards Scotland. Because cooling rates depend on food density, volume, and equipment, exact procedures vary across commercial kitchens."""

s1_why_important = """When cooking finishes, food temperatures decline into warm ranges that support rapid bacterial multiplication. Leaving large volumes of hot food to cool slowly at ambient room temperature creates a severe food safety risk. Deep containers insulate the thermal core, allowing warm conditions to persist for hours. High-risk foods such as cooked rice, pasta, meat joints, gravies, and stocks require diligent control. Documented temperature records and verified corrective actions ensure cooling methods remain safe and legally defensible."""

s2_danger_zone = """In UK food safety, the range between 8°C and 63°C is recognised as the temperature danger zone. Within this spectrum, pathogenic bacteria like *Salmonella* and *Clostridium perfringens* multiply most rapidly.

Under Schedule 4 of the Food Safety and Hygiene (England) Regulations 2013 (and parallel legislation in Wales and Northern Ireland), commercial cold holding is legally mandated at 8°C or below, while hot holding requires 63°C or above. The 8°C to 63°C danger zone is an operational control range rather than an inflexible statutory rule for every culinary stage. Food business operators should follow validated procedures set out in their HACCP or SFBB systems referencing official Food Standards Agency guidance."""

s3_safe_process = """Commercial kitchens should follow a structured 10-step safe cooling procedure:

1. **Halt heating promptly:** Remove cooked batches from ovens or hobs to initiate temperature reduction.
2. **Divide large quantities:** Split bulky batches into smaller portions to accelerate heat dissipation.
3. **Use shallow containers:** Spread hot food into shallow stainless steel gastronorm pans (maximum depth 50mm).
4. **Facilitate heat escape:** Place containers on open wire racks with space between trays for ventilation.
5. **Use rapid-cooling equipment:** Utilise a commercial blast chiller or ice-water bath rather than room cooling.
6. **Protect from contamination:** Cover loosely with clean greaseproof paper or vented lids to prevent airborne debris.
7. **Monitor core temperatures:** Test internal temperatures with a disinfected digital probe thermometer and record readings.
8. **Transfer to chilled storage:** Move food to walk-in chillers once temperatures drop below 8°C (ideally below 5°C).
9. **Apply corrective actions:** If cooling lags, subdivide immediately, refresh ice baths, or safely discard.
10. **Review procedures regularly:** Re-evaluate cooling times whenever recipes, batch sizes, or kitchen equipment change."""

s4_container_depth = """Heat transfers slowly through dense foods. In deep stockpots, the centre remains insulated, keeping core temperatures dangerously warm while exterior surfaces appear cool. 

Transferring hot food into shallow stainless steel pans increases the surface area relative to volume, facilitating faster heat exchange. Food should be portioned to a maximum depth of 50mm (2 inches). Slicing large joints of meat or portioning whole poultry similarly accelerates cooling, ensuring the thermal centre cools at a safe rate."""

s5_blast_chilling = """Professional kitchens rely on several rapid-cooling methods:

- **Commercial blast chillers:** Circulate high-velocity refrigerated air to drop core food temperatures from 70°C to below 3°C within 90 minutes. They represent the industry benchmark for cook-chill operations.
- **Ice-water baths and cooling paddles:** Submerging metal pots into iced water while stirring with sanitised frozen cooling paddles rapidly extracts core heat from soups and gravies.
- **Dedicated cooling racks:** Well-ventilated prep areas allow heat to dissipate without warming surrounding kitchen zones.

Never place hot steaming food directly into standard storage fridges. Doing so raises the cabinet air temperature, endangers neighbouring chilled items, causes condensation, and overworks compressor motors."""

s6_rice_pasta = """Certain high-starch and protein-rich preparations require strict handling:

- **Cooked rice and pasta:** Uncooked rice naturally harbours spores of *Bacillus cereus*, which survive boiling temperatures. If cooled slowly, spores germinate and produce heat-stable emetic toxins that resist subsequent reheating. Rice should be cooled as quickly as possible—ideally within one hour as advised in FSA Safer Food, Better Business guidance—and chilled at 5°C or lower.
- **Thick sauces, gravies, and stews:** Dense liquids trap internal heat. Frequent stirring during cooling prevents hot pockets.
- **Meat joints:** Deboning or carving cooked roasts into smaller cuts before cooling releases trapped core heat."""

s7_monitoring = """Consistent temperature monitoring verifies that cooling controls remain effective:

- **Sanitised probe thermometers:** Disinfect probe thermometers with food-safe antibacterial wipes before and after checking each batch.
- **Core measurements:** Insert the probe into the geometric centre of the food, where temperatures drop slowest.
- **Accurate record logs:** Record the batch name, start time, finish time, core temperature, and staff initials.

Maintaining clean cooling records provides essential due-diligence evidence for local authority inspections and internal audits."""

s8_slow_cooling = """When cooling fails to meet targets, kitchen staff must enact immediate corrective actions:

1. **Active intervention:** If food cools slowly, transfer it into shallower trays, split it into smaller batches, or place it into an ice bath.
2. **HACCP limits and disposal:** If food has lingered in the danger zone beyond safe parameters established in your HACCP plan, it must be safely discarded. Never guess whether food remains safe.
3. **Reheating limitations:** Under specific, validated HACCP safe methods, slow-cooling food may be reheated once to a core temperature of 75°C (82°C in Scotland) before restarting rapid chilling. Note that reheating cannot inactivate heat-stable toxins such as *Bacillus cereus* cereulide.
4. **Investigate causes:** Check ambient kitchen temperatures, cooling tray depth, and blast chiller performance to prevent recurring delays."""

s9_checklist = """Maintain cooling standards across kitchen shifts using this concise checklist:

- [ ] Food divided into shallow gastronorm pans (under 50mm depth).
- [ ] Batches cooled in blast chiller or ice-water bath.
- [ ] Vented covers used to shield food from contamination.
- [ ] Probe thermometer sanitised before and after readings.
- [ ] Core temperatures checked at the thickest point.
- [ ] Cooling start and finish times recorded in the logbook.
- [ ] Food moved to cold storage once below 8°C.
- [ ] Chilled storage maintained at 5°C or below.
- [ ] Slow-cooling batches corrected or safely disposed of.
- [ ] Staff trained on site-specific HACCP safe methods."""

s10_devolved = """Food hygiene legislation across the UK shares core principles, but operational frameworks differ by nation:

- **England:** The Food Standards Agency sets policy, enforced by local authority Environmental Health Officers under the Food Safety and Hygiene (England) Regulations 2013. Food hygiene rating display remains voluntary for premises.
- **Wales:** Regulated under FSA policy, displaying Food Hygiene Rating Scheme stickers is mandatory by law under the Food Hygiene Rating (Wales) Act 2013.
- **Scotland:** Administered by Food Standards Scotland under the Food Hygiene (Scotland) Regulations 2006. Scotland operates the Food Hygiene Information Scheme and recommends the CookSafe manual, which specifies a 82°C reheating standard.
- **Northern Ireland:** Administered by the FSA, mandatory hygiene rating display applies under the Food Hygiene Rating Act (Northern Ireland) 2016.

Local Environmental Health Officers inspect businesses against these regional standards while reviewing site-specific HACCP documentation."""

faq_list = [
    ("Why must cooked food be cooled quickly?", "Rapid cooling minimises the time high-risk food spends in the danger zone between 8°C and 63°C, where pathogenic bacteria multiply and bacterial spores can germinate to produce harmful toxins."),
    ("What is the safest way to cool a large batch of food?", "The safest commercial method is dividing the batch into shallow stainless steel trays (50mm depth or less) and placing them in a commercial blast chiller or surrounding them in an ice-water bath with frequent stirring."),
    ("Can a blast chiller be used for cooked food?", "Yes. Commercial blast chillers are designed specifically to pull hot cooked food through the temperature danger zone down below 3°C within 90 minutes using high-velocity chilled airflow."),
    ("How should cooked rice be cooled?", "Cooked rice should be spread into thin layers on clean trays, cooled as quickly as possible—ideally within one hour as recommended by the FSA—and transferred immediately to refrigeration below 5°C to inhibit *Bacillus cereus* toxin production."),
    ("What should a kitchen record during cooling?", "Staff should record the date, food item, batch size, cooking completion time, start of cooling, cooling method, time transferred to fridge, final core temperature, and initials of the responsible team member."),
    ("What should staff do if food does not cool as expected?", "If food cools too slowly, staff should execute pre-planned HACCP corrective actions, such as portioning into smaller pans, setting into ice baths, or safely discarding the food if danger zone time limits are breached."),
    ("Is there one cooling time that applies to every UK food business?", "No single cooling time applies universally to every UK kitchen. While the FSA recommends cooling food within 90 minutes as standard best practice in SFBB, exact cooling times depend on the food category, portion mass, preparation technique, equipment capacity, and your site-specific HACCP system.")
]

disclaimer = """This guide provides general food safety information for commercial kitchens across the UK. It does not replace site-specific food-safety management systems (HACCP or SFBB) or official guidance from the Food Standards Agency, Food Standards Scotland, or your local authority environmental health department. Businesses must validate their own cooling controls to ensure customer safety."""

sections = [
    opening_direct_answer,
    s1_why_important,
    s2_danger_zone,
    s3_safe_process,
    s4_container_depth,
    s5_blast_chilling,
    s6_rice_pasta,
    s7_monitoring,
    s8_slow_cooling,
    s9_checklist,
    s10_devolved
]

# In SSR HTML, let's see word count if FAQ questions are in the HTML and answers are in React state (or if both are in HTML)
faq_questions_only = " ".join([q for q, a in faq_list])
faq_full = " ".join([q + " " + a for q, a in faq_list])

words_ssr_collapsed = len((" ".join(sections) + " " + faq_questions_only + " " + disclaimer).split())
words_full = len((" ".join(sections) + " " + faq_full + " " + disclaimer).split())

print("SSR Word count (FAQ questions only):", words_ssr_collapsed)
print("Full Word count (including FAQ answers):", words_full)

# Check forbidden
all_text = " ".join(sections) + " " + faq_full + " " + disclaimer
forbidden = ["eho-approved", "fsa-approved", "guaranteed compliance", "guaranteed inspection pass", "legally guaranteed", "one rule applies to every uk kitchen"]
found = [f for f in forbidden if f in all_text.lower()]
print("Forbidden phrases found:", found)
