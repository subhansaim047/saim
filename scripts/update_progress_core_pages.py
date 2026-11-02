with open('CONTENT_PROGRESS.md', 'r', encoding='utf-8') as f:
    c = f.read()

replacements = {
    "| 3 | [takeaway-web-design-london](https://www.saimdev.site/services/takeaway-web-design-london) | `takeaway website design uk` | `todo` | `app/services/takeaway-web-design-london/page.tsx` |":
    "| 3 | [takeaway-web-design-london](https://www.saimdev.site/services/takeaway-web-design-london) | `takeaway website design uk` | `done` | `app/services/takeaway-web-design-london/page.tsx` (Direct answer summary, British English, active voice) |",

    "| 4 | [takeaway-web-design-manchester](https://www.saimdev.site/services/takeaway-web-design-manchester) | `takeaway website design uk` | `todo` | `app/services/takeaway-web-design-manchester/page.tsx` |":
    "| 4 | [takeaway-web-design-manchester](https://www.saimdev.site/services/takeaway-web-design-manchester) | `takeaway website design uk` | `done` | `app/services/takeaway-web-design-manchester/page.tsx` (Direct answer summary, British English, active voice) |",

    "| 5 | [takeaway-web-design-birmingham](https://www.saimdev.site/services/takeaway-web-design-birmingham) | `takeaway website design uk` | `todo` | `app/services/takeaway-web-design-birmingham/page.tsx` |":
    "| 5 | [takeaway-web-design-birmingham](https://www.saimdev.site/services/takeaway-web-design-birmingham) | `takeaway website design uk` | `done` | `app/services/takeaway-web-design-birmingham/page.tsx` (Direct answer summary, British English, active voice) |",

    "| 6 | [nextjs-developer-uk](https://www.saimdev.site/nextjs-developer-uk) | `freelance nextjs developer uk` | `todo` | `app/nextjs-developer-uk/page.tsx` |":
    "| 6 | [nextjs-developer-uk](https://www.saimdev.site/nextjs-developer-uk) | `freelance nextjs developer uk` | `done` | `app/nextjs-developer-uk/page.tsx` (Direct answer summary, harmonised studio voice 'we', British English) |",

    "| 7 | [Services Overview](https://www.saimdev.site/services) | `web development services uk` | `todo` | `app/services/page.tsx` |":
    "| 7 | [Services Overview](https://www.saimdev.site/services) | `web development services uk` | `done` | `src/components/ServicesPage.tsx` (Direct answer summary, British English 'optimised/colour') |",

    "| 8 | [technologies](https://www.saimdev.site/technologies) | `nextjs tech stack web agency` | `todo` | `app/technologies/page.tsx` |":
    "| 8 | [technologies](https://www.saimdev.site/technologies) | `nextjs tech stack web agency` | `done` | `src/components/TechnologiesPage.tsx` (Keyword-led H1, direct answer summary, British English) |",

    "| 9 | [case-studies](https://www.saimdev.site/case-studies) | `nextjs website case studies` | `todo` | `app/case-studies/page.tsx` |":
    "| 9 | [case-studies](https://www.saimdev.site/case-studies) | `nextjs website case studies` | `done` | `src/components/CaseStudiesPage.tsx` (Keyword-led H1, direct answer summary, British English 'optimisation/enquiry') |",

    "| 10 | [demos](https://www.saimdev.site/demos) | `restaurant website demos uk` | `todo` | `app/demos/page.tsx` |":
    "| 10 | [demos](https://www.saimdev.site/demos) | `restaurant website demos uk` | `done` | `src/components/DemosPage.tsx` (Keyword-led H1, direct answer summary, British English 'categorised/enquiry') |",

    "| 11 | [about](https://www.saimdev.site/about) | `about saim dev nextjs studio` | `todo` | `app/about/page.tsx` |":
    "| 11 | [about](https://www.saimdev.site/about) | `about saim dev nextjs studio` | `done` | `app/about/page.tsx` (Direct answer summary, British English 'specialise') |",

    "| 12 | [contact](https://www.saimdev.site/contact) | `hire nextjs developer uk contact` | `todo` | `app/contact/page.tsx` |":
    "| 12 | [contact](https://www.saimdev.site/contact) | `hire nextjs developer uk contact` | `done` | `src/components/ContactPage.tsx` (Keyword-led H1, direct answer summary, British English 'enquire') |",

    "| 13 | [blogs](https://www.saimdev.site/blogs) | `restaurant tech and web dev blog` | `todo` | `app/blogs/page.tsx` |":
    "| 13 | [blogs](https://www.saimdev.site/blogs) | `restaurant tech and web dev blog` | `done` | `src/components/BlogsPage.tsx` (Keyword-led H1, direct answer summary, British English 'standardised') |"
}

for old, new in replacements.items():
    assert old in c, f"Could not find {old}"
    c = c.replace(old, new)

with open('CONTENT_PROGRESS.md', 'w', encoding='utf-8', newline='\n') as f:
    f.write(c)

print("Successfully updated CONTENT_PROGRESS.md for Core Pages 3 to 13")
