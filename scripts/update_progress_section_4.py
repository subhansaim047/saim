with open('CONTENT_PROGRESS.md', 'r', encoding='utf-8') as f:
    c = f.read()

c = c.replace(
    "| 1 | [terms](https://www.saimdev.site/terms) | `terms saim dev` | `todo` | `app/terms/page.tsx` |",
    "| 1 | [terms](https://www.saimdev.site/terms) | `terms saim dev` | `done` | `src/components/TermsOfService.tsx` (Single H1, British English 'speed optimisation', transparent fixed tiers) |"
)
c = c.replace(
    "| 2 | [privacy](https://www.saimdev.site/privacy) | `privacy saim dev` | `todo` | `app/privacy/page.tsx` |",
    "| 2 | [privacy](https://www.saimdev.site/privacy) | `privacy saim dev` | `done` | `src/components/PrivacyPolicy.tsx` (Single H1, UK GDPR & DPA 2018 disclosures, ICO complaint rights) |"
)
c = c.replace(
    "| 3 | [cookie-policy](https://www.saimdev.site/cookie-policy) | `cookie-policy saim dev` | `todo` | `app/cookie-policy/page.tsx` |",
    "| 3 | [cookie-policy](https://www.saimdev.site/cookie-policy) | `cookie-policy saim dev` | `done` | `app/cookie-policy/page.tsx` (Single H1, explicit storage inventory, PECR compliant) |"
)
c = c.replace(
    "| 4 | [disclaimer](https://www.saimdev.site/disclaimer) | `disclaimer saim dev` | `todo` | `app/disclaimer/page.tsx` |",
    "| 4 | [disclaimer](https://www.saimdev.site/disclaimer) | `disclaimer saim dev` | `done` | `app/disclaimer/page.tsx` (Single H1, statutory food hygiene advisory, FSA guidance notices) |"
)

with open('CONTENT_PROGRESS.md', 'w', encoding='utf-8', newline='\n') as f:
    f.write(c)

print("Successfully updated Section 4 in CONTENT_PROGRESS.md")
