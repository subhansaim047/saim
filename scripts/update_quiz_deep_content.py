import re

path = "src/data/tool_deep_content.ts"
with open(path, "r", encoding="utf-8") as f:
    text = f.read()

new_quiz_content = '''  "food-safety-quiz": {
    directAnswer:
      "The UK Food Safety Level 2 hygiene practice exam tests commercial kitchen and catering personnel on critical statutory food handling, core thermal Critical Control Points (CCPs), cross-contamination prevention, the 14 major allergens, and HACCP compliance. Aligned directly with the UK Food Standards Agency (FSA) and CIEH syllabi, this 25-question mock test prepares hospitality staff for official accreditation and council Environmental Health Officer (EHO) inspections.",
    howTo: [
      "Select either Exam Mode (graded with an 80% pass threshold) or Study Mode (instant statutory guidance notes after every question).",
      "Optionally filter by specific food safety knowledge domain: Temperatures, Allergens & Natasha's Law, Cross-Contamination, Personal Hygiene, or HACCP.",
      "Complete the 25 multiple-choice questions reflecting real commercial catering operational scenarios.",
      "Review the detailed FSA Guidance Note provided for each answer to master statutory temperatures and legal compliance limits.",
      "Click 'Print Paper' to generate a physical assessment paper for kitchen staff onboarding or to file your completed score in SFBB Section 4 (Staff Training)."
    ],
    faqs: [
      {
        q: "What is the official pass mark for a UK Level 2 Food Hygiene and Safety exam?",
        a: "Under UK accredited awarding bodies (including City & Guilds, Highfield, CIEH, and RSPH), the standard pass threshold is 80% (typically 20 correct answers out of 25 multiple-choice questions)."
      },
      {
        q: "How long is a UK Level 2 Food Hygiene certificate valid for?",
        a: "While UK food legislation does not specify an automatic statutory expiration date, Environmental Health Officers (EHOs) and industry auditing bodies strongly recommend that hospitality and catering staff renew their Level 2 certification every 2 to 3 years to ensure awareness of updated legislation such as Natasha's Law."
      },
      {
        q: "Is Level 2 Food Hygiene certification legally mandatory for kitchen workers in the UK?",
        a: "Under Retained EU Regulation (EC) No 852/2004, UK food business operators are legally required to ensure that food handlers are supervised, instructed, and trained in food hygiene matters commensurate with their work activity. A Level 2 Food Safety and Hygiene certificate is the universal industry-accepted benchmark to prove compliance during local authority inspections."
      },
      {
        q: "What core temperature rules must be memorized for the Level 2 exam?",
        a: "Key statutory temperatures include: commercial refrigerators at 1°C to 5°C (legal maximum 8°C); commercial freezers at -18°C or below; core cooking temperature at 75°C for 30 seconds (or 70°C for 2 minutes); hot holding buffet service at 63°C or above; and leftover food reheating to at least 75°C (82°C in Scotland)."
      },
      {
        q: "What happens if a trainee fails the practice mock test?",
        a: "Unlike paid accredited exam portals that charge re-sit fees, our practice tool is 100% free with unlimited retakes. Trainees can review the instant statutory guidance notes, focus on weaker domains using topic filters, and retake the test until scoring 100%."
      }
    ],
    relatedTools: [
      "freezer-temperature-chart",
      "food-allergen-chart",
      "haccp-plan-builder"
    ],
    relatedBlog: {
      title: "Level 2 Food Hygiene Practice Test Kitchen Staff Guide",
      slug: "level-2-food-hygiene-practice-test-kitchen-staff-guide"
    }
  },'''

pattern = r'  \"food-safety-quiz\":\s*\{[\s\S]*?\n  \},'
updated = re.sub(pattern, new_quiz_content, text)

if updated != text:
    with open(path, "w", encoding="utf-8") as f:
        f.write(updated)
    print("Successfully updated food-safety-quiz deep content.")
else:
    print("Could not match pattern in file.")
