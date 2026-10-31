with open('app/terms/page.tsx', 'r', encoding='utf-8') as f:
    c = f.read()

target = "export default function Page() {\n  return <TermsOfService />;\n}"
if target not in c:
    target = "export default function Page() {\r\n  return <TermsOfService />;\r\n}"

replacement = """export default function Page() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.saimdev.site/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Terms of Service",
        "item": "https://www.saimdev.site/terms"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <TermsOfService />
    </>
  );
}"""

c = c.replace(target, replacement)
with open('app/terms/page.tsx', 'w', encoding='utf-8') as f:
    f.write(c)
print("Updated app/terms/page.tsx")

# privacy
with open('app/privacy/page.tsx', 'r', encoding='utf-8') as f:
    c = f.read()

target = "export default function Page() {\n  return <PrivacyPolicy />;\n}"
if target not in c:
    target = "export default function Page() {\r\n  return <PrivacyPolicy />;\r\n}"

replacement = """export default function Page() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.saimdev.site/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Privacy Policy",
        "item": "https://www.saimdev.site/privacy"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <PrivacyPolicy />
    </>
  );
}"""

c = c.replace(target, replacement)
with open('app/privacy/page.tsx', 'w', encoding='utf-8') as f:
    f.write(c)
print("Updated app/privacy/page.tsx")

# cookie-policy
with open('app/cookie-policy/page.tsx', 'r', encoding='utf-8') as f:
    c = f.read()

target = "export default function CookiePolicyPage() {"
replacement = """export default function CookiePolicyPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.saimdev.site/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Cookie Policy",
        "item": "https://www.saimdev.site/cookie-policy"
      }
    ]
  };"""

if "breadcrumbSchema" not in c:
    c = c.replace(target, replacement)
    c = c.replace("return (\n    <div className=\"min-h-screen", "return (\n    <>\n      <script type=\"application/ld+json\" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />\n      <div className=\"min-h-screen")
    c = c.replace("return (\r\n    <div className=\"min-h-screen", "return (\r\n    <>\r\n      <script type=\"application/ld+json\" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />\r\n      <div className=\"min-h-screen")
    c = c.replace("</div>\n  );\n}", "</div>\n    </>\n  );\n}")
    c = c.replace("</div>\r\n  );\r\n}", "</div>\r\n    </>\r\n  );\r\n}")
    with open('app/cookie-policy/page.tsx', 'w', encoding='utf-8') as f:
        f.write(c)
    print("Updated app/cookie-policy/page.tsx")

# disclaimer
with open('app/disclaimer/page.tsx', 'r', encoding='utf-8') as f:
    c = f.read()

target = "export default function DisclaimerPage() {"
replacement = """export default function DisclaimerPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.saimdev.site/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Food Safety Disclaimer",
        "item": "https://www.saimdev.site/disclaimer"
      }
    ]
  };"""

if "breadcrumbSchema" not in c:
    c = c.replace(target, replacement)
    c = c.replace("return (\n    <div className=\"min-h-screen", "return (\n    <>\n      <script type=\"application/ld+json\" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />\n      <div className=\"min-h-screen")
    c = c.replace("return (\r\n    <div className=\"min-h-screen", "return (\r\n    <>\r\n      <script type=\"application/ld+json\" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />\r\n      <div className=\"min-h-screen")
    c = c.replace("</div>\n  );\n}", "</div>\n    </>\n  );\n}")
    c = c.replace("</div>\r\n  );\r\n}", "</div>\r\n    </>\r\n  );\r\n}")
    with open('app/disclaimer/page.tsx', 'w', encoding='utf-8') as f:
        f.write(c)
    print("Updated app/disclaimer/page.tsx")
