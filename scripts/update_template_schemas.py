with open('app/food-safety-templates/[slug]/page.tsx', 'r', encoding='utf-8') as f:
    c = f.read()

# Add import if needed
if 'TOOL_DEEP_CONTENT' not in c:
    c = c.replace(
        'import { CORE_PAGES_METADATA } from "@/data/core_metadata";',
        'import { CORE_PAGES_METADATA } from "@/data/core_metadata";\nimport { TOOL_DEEP_CONTENT, FALLBACK_DEEP_CONTENT } from "@/data/tool_deep_content";'
    )

# Replace structuredSchema and faqSchema block
schema_block = '''  const deepContent = TOOL_DEEP_CONTENT[slug] || FALLBACK_DEEP_CONTENT;

  // 2. WebApplication Schema (free tool, price 0 GBP)
  const structuredSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": pageTitle,
    "description": pageDesc,
    "url": canonicalUrl,
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "All / Modern Web Browser",
    "browserRequirements": "Requires JavaScript. Requires HTML5.",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "GBP"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Saim Dev",
      "url": "https://www.saimdev.site",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.saimdev.site/saim-dev-logo.png"
      }
    }
  };

  // 3. FAQPage Schema (matching visible on-page FAQs directly)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": deepContent.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };'''

# Find the start of structuredSchema and end before return
import re
c = re.sub(
    r'  // 2\. WebApplication Schema[\s\S]*?const faqSchema = \{[\s\S]*?\}\;\n  \};',
    schema_block,
    c
)

with open('app/food-safety-templates/[slug]/page.tsx', 'w', encoding='utf-8') as f:
    f.write(c)

print("Updated app/food-safety-templates/[slug]/page.tsx with WebApplication and synchronized FAQPage schemas")
