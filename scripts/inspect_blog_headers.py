import os, sys

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8', errors='replace')

blog_files = [
    "src/components/BlogPost1Page.tsx",
    "src/components/BlogPost2Page.tsx",
    "src/components/BlogPost3Page.tsx",
    "src/components/blog/BlogPostAllergenMatrix.tsx",
    "src/components/blog/BlogPostChecklist.tsx",
    "src/components/blog/BlogPostFoodCost.tsx",
    "src/components/blog/BlogPostHaccpPlan.tsx",
    "src/components/blog/BlogPostHygieneQuiz.tsx",
    "src/components/blog/BlogPostRecipeScaler.tsx",
]

for rel in blog_files:
    full = os.path.join(r"C:\Users\subhan\.gemini\antigravity\scratch\saim", rel)
    with open(full, "r", encoding="utf-8") as f:
        lines = f.readlines()
    print("=" * 60)
    print(rel)
    # find <h1
    h1_idx = -1
    for i, line in enumerate(lines):
        if "<h1" in line:
            h1_idx = i
            break
    if h1_idx != -1:
        start = max(0, h1_idx - 10)
        end = min(len(lines), h1_idx + 4)
        print("".join(lines[start:end]))
    else:
        print("h1 not found")
