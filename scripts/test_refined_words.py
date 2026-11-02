text = """
Direct Answer: Commercial Food Cooling in the UK
In UK commercial kitchens, food cooling is the controlled temperature reduction of hot cooked food to 8°C or below prior to chilled storage. Retained Regulation (EC) No 852/2004 requires businesses to cool food as quickly as possible to prevent health risks. The Food Standards Agency (FSA) recommends placing food in refrigeration within 90 minutes.

What Commercial Food Cooling Means in UK Catering
Commercial food cooling is the active management of hot food transitioning from cooking heat (75°C+) down to safe refrigeration temperatures. This process is a Critical Control Point (CCP) in any food safety management system based on HACCP principles.
In catering and takeaways, bulk batches of curry, stew, and jointed meats retain significant thermal mass. Leaving these items on ambient prep tables allows them to linger inside the bacterial Danger Zone between 8°C and 63°C. In this zone, bacteria such as Clostridium perfringens and Salmonella double every 20 minutes.

Legal Requirements vs. FSA Guidance and Best Practice
Food business operators must distinguish between statutory legislation, regulatory guidance, and commercial best practice during Environmental Health Officer (EHO) audits.
1. Statutory Legislation: Retained Regulation (EC) 852/2004, Annex II, Chapter IX mandates that food to be held chilled must be cooled as quickly as possible to avoid health hazards. Schedule 4 of the Food Safety and Hygiene (England) Regulations 2013 sets the legal cold-holding ceiling at 8°C.
2. FSA Guidance (SFBB): The Food Standards Agency Safer Food, Better Business pack recommends cooling food as quickly as possible and placing it into chilled storage within 90 minutes. This is guidance rather than an inflexible statutory limit.
3. Industry Best Practice: The UK Cook-Chill Guidelines advise blast-chilling cooked food from 70°C down to 3°C within 90 minutes for optimal commercial safety buffers.
In Scotland, standards are enforced under the Food Hygiene (Scotland) Regulations 2006 alongside Food Standards Scotland (FSS) CookSafe guidance.

The 5-Step Commercial Safe Cooling Workflow
Relying on kitchen air to cool deep containers invites compliance failure. Follow this systematic 5-step procedure:
1. Divide into Shallow Containers: Decant hot soups and stews into shallow stainless steel gastronorms (maximum depth 50mm). This maximizes surface area for rapid heat escape.
2. Portion Large Meat Joints: Dense joints of beef, pork, or poultry retain core heat. Carve roasts into smaller cuts before chilling.
3. Use Ice Baths: Place containers into dedicated sinks filled with iced water. Stir periodically with sanitised utensils to conduct heat away from the centre.
4. Protect from Cross-Contamination: Cover trays loosely with clean greaseproof paper or perforated lids to allow steam escape while shielding against airborne hazards.
5. Move to Monitored Refrigeration: Once pre-cooled, transfer containers to refrigerators operating below 5°C, recording time and temperature in your log.

Specific Risks: Cooked Rice and Bacillus Cereus
Raw rice naturally carries spores of Bacillus cereus that survive normal boiling temperatures. If cooked rice cools slowly at room temperature, spores germinate into vegetative bacteria that produce an emetic toxin called cereulide.
Cereulide is heat-stable and resists subsequent frying or microwave reheating. It causes acute vomiting within hours of consumption.
Rice Protocol: Cool cooked rice within 1 hour, refrigerate immediately at or below 5°C, store for no more than 24 hours, and reheat thoroughly only once.

Temperature Monitoring and Record Keeping
Under Section 21 of the Food Safety Act 1990, documented records provide statutory due diligence evidence. Kitchen supervisors must verify cooling with a calibrated probe thermometer cleaned with food-safe probe wipes.
Record these essential data points in your daily logs:
- Date, food item, and batch number.
- Initial cooking core temperature (≥75°C).
- Time cooling started.
- Final temperature before refrigeration (<8°C).

Corrective Action When Cooling is Too Slow
When food fails to reach target temperatures within planned timeframes, enact documented corrective actions:
- Under 2 Hours in Danger Zone: Reheat the batch to a core temperature of 75°C (82°C in Scotland) for 2 minutes, then rapidly cool using shallow pans or blast chilling.
- Exceeding 2 Hours Unmonitored: Discard the food immediately. Do not attempt re-chilling if food has spent uncontrolled hours between 8°C and 63°C.

Site-Specific FSMS vs. General Guidance
This guide provides technical information based on UK FSA principles. It does not replace a documented Food Safety Management System (FSMS) tailored to your specific kitchen premises, equipment, and staff volumes.
Always consult your local council Environmental Health Officer (EHO) and primary authority advice when validating operational timings.
Official Legislative Sources:
- Retained Regulation (EC) No 852/2004 on hygiene of foodstuffs.
- Food Safety and Hygiene (England) Regulations 2013 (Schedule 4).
- FSA Safer Food, Better Business (SFBB) for Caterers.
- Food Standards Scotland (FSS) CookSafe System.

Related Kitchen Due Diligence Tools & Logs
Access printable logs and interactive tools to maintain compliant kitchen records:
- food cooling poster
- fridge temperature sheet
- freezer temperature chart
- return to all kitchen tools

Frequently Asked Questions on Commercial Food Cooling
Is the 90-minute cooling rule a statutory UK law?
No. Retained Regulation (EC) 852/2004 requires cooling as quickly as possible. The 90-minute figure is FSA guidance in SFBB and an industry cook-chill benchmark.
Why can't hot food go directly into a storage fridge?
Hot pans raise ambient internal fridge temperatures, warming surrounding chilled stock into the Danger Zone (8°C to 63°C).
Why does cooked rice have a 1-hour cooling limit?
Bacillus cereus spores survive boiling and produce heat-stable cereulide toxins during slow cooling.
What is the legal maximum temperature for cold holding?
In England, Wales, and Northern Ireland, the statutory ceiling is 8°C. Best practice is operating between 0°C and 5°C.
What if stew takes 3 hours to reach 15°C?
If cooling exceeds 2 hours unmonitored in the Danger Zone, discard the batch to prevent toxin ingestion.

Food Safety Information Disclaimer: This guide is for educational due diligence assistance only and does not constitute formal legal advice. Food business operators remain responsible under the Food Safety Act 1990 for maintaining an active site-specific HACCP management system.
"""

words = text.split()
print("Refined text word count:", len(words))
