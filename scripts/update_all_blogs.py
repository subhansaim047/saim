import os
import re
import json

blogs_data = {
    "why-small-business-needs-website-2026": {
        "title": "Why Every Small Business Needs a Professional Website in 2026 | Saim Dev",
        "desc": "Why UK small businesses need a fast Next.js website in 2026. Turn local searches into paying customers with modern mobile performance and local SEO.",
        "component": "BlogPost1Page",
        "date": "2026-08-11"
    },
    "free-website-for-local-business": {
        "title": "I'm Building 5 Free Websites for Local Businesses — Here's Why | Saim Dev",
        "desc": "Saim Dev is building 5 free Next.js websites for independent UK local businesses to expand our portfolio. Learn how to claim your slot today.",
        "component": "BlogPost2Page",
        "date": "2026-09-20"
    },
    "50-percent-off-agency-launch": {
        "title": "I Just Launched My Web Agency — And I'm Offering 50% Off | Saim Dev",
        "desc": "Claim 50% off Next.js web development during our agency launch. Fast turnarounds, bespoke code, and high performance for UK small businesses.",
        "component": "BlogPost3Page",
        "date": "2026-09-20"
    },
    "how-to-create-compliant-14-allergen-matrix-uk-restaurants": {
        "title": "How to Create a Compliant 14-Allergen Matrix for UK Restaurants | Saim Dev",
        "desc": "Auditing recipes and building an allergen matrix aligned with FSA guidance under Natasha's Law. Free interactive digital generator included.",
        "component": "BlogPostAllergenMatrix",
        "date": "2026-10-23"
    },
    "mastering-food-cost-percentage-commercial-kitchen-calculator": {
        "title": "How to Calculate Food Cost Percentage & Protect 70%+ Margins | Saim Dev",
        "desc": "Calculate food cost percentage and protect 70%+ margins. Use our free interactive commercial kitchen calculator built for UK takeaways and cafes.",
        "component": "BlogPostFoodCost",
        "date": "2026-10-23"
    },
    "how-to-scale-recipes-commercial-catering-batch-calculator": {
        "title": "Commercial Recipe Scaling Guide: Scale 10 to 500 Portions | Saim Dev",
        "desc": "Master recipe scaling for catering kitchens. Avoid seasoning errors and calculate precise portion costs with our free interactive tool online.",
        "component": "BlogPostRecipeScale",
        "date": "2026-10-23"
    },
    "sfbb-daily-kitchen-opening-closing-checklist-guide": {
        "title": "SFBB Opening & Closing Checklists: 5-Star Food Hygiene Guide | Saim Dev",
        "desc": "Essential SFBB opening and closing hygiene checks every UK kitchen must log daily. Prevent contamination and pass EHO audits with our free tool.",
        "component": "BlogPostChecklist",
        "date": "2026-10-23"
    },
    "how-to-write-haccp-plan-uk-food-business-step-by-step": {
        "title": "How to Write a HACCP Plan for UK Food Businesses | Saim Dev",
        "desc": "Plain-English guide to creating a HACCP plan for UK takeaways aligned with FSA rules. Build hazard tables with our free digital tool online.",
        "component": "BlogPostHaccpPlan",
        "date": "2026-10-23"
    },
    "level-2-food-hygiene-practice-test-kitchen-staff-guide": {
        "title": "Level 2 Food Hygiene Practice Test: 10 Critical Questions | Saim Dev",
        "desc": "Test your kitchen team with our Level 2 Food Hygiene practice test. Review temperature danger zones, cross-contamination, and hygiene laws today.",
        "component": "BlogPostQuiz",
        "date": "2026-10-23"
    },
    "uk-food-hygiene-rating-scheme-5-star-checklist": {
        "title": "How to Get a 5-Star Food Hygiene Rating: UK EHO Checklist | Saim Dev",
        "desc": "Complete inspection guide for UK restaurants and takeaways to achieve a 5-star Food Hygiene Rating. Covers food safety, cleanliness, and HACCP records.",
        "component": "BlogPostFiveStarRating",
        "date": "2026-10-25"
    },
    "natashas-law-ppds-food-labelling-guide": {
        "title": "Natasha's Law PPDS Food Labelling Guide for UK Takeaways | Saim Dev",
        "desc": "Complete guide to Natasha's Law and PPDS food labelling in the UK. Learn mandatory rules for ingredient lists and allergen emphasis on packaging.",
        "component": "BlogPostNatashasLaw",
        "date": "2026-10-25"
    },
    "commercial-kitchen-food-cooling-temperature-guide": {
        "title": "Commercial Kitchen Food Cooling Guide: UK 90-Minute Rule | Saim Dev",
        "desc": "Learn UK food safety cooling rules: cooling from 75°C to 8°C in 90 minutes, approved methods (blast chilling, shallow pans), and the Danger Zone explained.",
        "component": "BlogPostCoolingGuide",
        "date": "2026-10-25"
    }
}

for slug, data in blogs_data.items():
    page_path = f"app/blog/{slug}/page.tsx"
    if not os.path.exists(page_path):
        continue

    with open(page_path, 'r', encoding='utf-8') as f:
        existing = f.read()

    import_match = re.search(r'import \{ ([^}]+) \} from [\'"]([^\'"]+)[\'"];', existing)
    if import_match:
        comp_name = import_match.group(1).strip()
        comp_path = import_match.group(2).strip()
    else:
        comp_name = data["component"]
        comp_path = f"@/components/blog/{comp_name}" if "BlogPost" in comp_name and comp_name not in ["BlogPost1Page", "BlogPost2Page", "BlogPost3Page"] else f"@/components/{comp_name}"

    url = f"https://www.saimdev.site/blog/{slug}"
    title_json = json.dumps(data["title"])
    desc_json = json.dumps(data["desc"])
    clean_title = data["title"].split(' | ')[0]
    clean_title_json = json.dumps(clean_title)
    date_pub = data["date"]
    date_mod = "2026-10-25"

    code = f'''import type {{ Metadata }} from 'next';
import {{ {comp_name} }} from '{comp_path}';

export const metadata: Metadata = {{
  title: {title_json},
  description: {desc_json},
  alternates: {{
    canonical: '{url}'
  }},
  openGraph: {{
    title: {title_json},
    description: {desc_json},
    url: '{url}',
    siteName: 'Saim Dev',
    locale: 'en_GB',
    type: 'article',
    publishedTime: '{date_pub}T00:00:00.000Z',
    modifiedTime: '{date_mod}T00:00:00.000Z',
    authors: ['https://www.saimdev.site/about'],
    images: [{{ url: 'https://www.saimdev.site/og-image.png', width: 1200, height: 630, alt: {clean_title_json} }}]
  }},
  twitter: {{
    card: 'summary_large_image',
    title: {title_json},
    description: {desc_json},
    images: ['https://www.saimdev.site/og-image.png']
  }}
}};

export default function Page() {{
  const articleSchema = {{
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": {title_json},
    "description": {desc_json},
    "url": "{url}",
    "datePublished": "{date_pub}",
    "dateModified": "{date_mod}",
    "author": {{
      "@type": "Person",
      "name": "Saim Dev",
      "jobTitle": "Founder & Lead Next.js Architect",
      "url": "https://www.saimdev.site/about"
    }},
    "publisher": {{
      "@type": "Organization",
      "name": "Saim Dev",
      "url": "https://www.saimdev.site",
      "logo": {{
        "@type": "ImageObject",
        "url": "https://www.saimdev.site/saim-dev-logo.png"
      }}
    }},
    "mainEntityOfPage": {{
      "@type": "WebPage",
      "@id": "{url}"
    }},
    "image": "https://www.saimdev.site/og-image.png"
  }};

  const breadcrumbSchema = {{
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {{
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.saimdev.site/"
      }},
      {{
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://www.saimdev.site/blogs"
      }},
      {{
        "@type": "ListItem",
        "position": 3,
        "name": {clean_title_json},
        "item": "{url}"
      }}
    ]
  }};

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{{{ __html: JSON.stringify(articleSchema) }}}}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{{{ __html: JSON.stringify(breadcrumbSchema) }}}}
      />
      <{comp_name} />
    </>
  );
}}
'''
    with open(page_path, 'w', encoding='utf-8') as f:
        f.write(code)
    print(f"Updated {page_path}")

print("ALL BLOG PAGES UPDATED SAFELY")
