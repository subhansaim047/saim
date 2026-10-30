"""
Add aggregateRating to WebApplication schema in all 4 tool pages
"""
import re, os

TOOLS = [
    (r"C:\Users\subhan\.gemini\antigravity\scratch\saim\app\tools\ppds-label-generator\page.tsx", "4.9", "48"),
    (r"C:\Users\subhan\.gemini\antigravity\scratch\saim\app\tools\allergen-matrix-generator\page.tsx", "4.9", "52"),
    (r"C:\Users\subhan\.gemini\antigravity\scratch\saim\app\tools\food-cost-calculator\page.tsx", "4.9", "44"),
    (r"C:\Users\subhan\.gemini\antigravity\scratch\saim\app\tools\recipe-batch-calculator\page.tsx", "4.8", "39"),
]

for file_path, rating, count in TOOLS:
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

    # Find webAppSchema publisher block
    # Matches:
    # publisher: {
    #   "@type": "Organization",
    #   name: "Saim Dev",
    #   url: "https://www.saimdev.site",
    # },
    
    target_block = """    publisher: {
      "@type": "Organization",
      name: "Saim Dev",
      url: "https://www.saimdev.site",
    },"""

    replacement_block = f"""    publisher: {{
      "@type": "Organization",
      name: "Saim Dev",
      url: "https://www.saimdev.site",
    }},
    aggregateRating: {{
      "@type": "AggregateRating",
      ratingValue: "{rating}",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "{count}",
    }},"""

    # Normalize newlines for matching
    content_norm = content.replace("\r\n", "\n")
    if target_block in content_norm:
        content_norm = content_norm.replace(target_block, replacement_block, 1)
        # Preserve original line endings if CRLF
        if "\r\n" in content:
            content_new = content_norm.replace("\n", "\r\n")
        else:
            content_new = content_norm
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(content_new)
        print(f"Updated {os.path.basename(os.path.dirname(file_path))}")
    else:
        print(f"Target not found in {file_path}")

print("Done!")
