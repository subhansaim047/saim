import os

def update_file(path, old, new):
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()
    if old in content:
        content = content.replace(old, new)
        with open(path, "w", encoding="utf-8", newline="") as f:
            f.write(content)
        print(f"UPDATED: {path}")
    else:
        print(f"NOT FOUND: {path}")

def run():
    # RecipeCalculatorTool.tsx
    update_file(
        "src/components/tools/RecipeCalculatorTool.tsx",
        '<img src={recipeImage} alt="Dish photo" className="w-full h-full object-cover" />',
        '<img src={recipeImage} alt="Recipe Dish Reference Photo" width={640} height={360} loading="lazy" decoding="async" className="w-full h-full object-cover" />'
    )

    # 6 blog header avatar tags
    blog_headers = [
        "src/components/blog/BlogPostAllergenMatrix.tsx",
        "src/components/blog/BlogPostChecklist.tsx",
        "src/components/blog/BlogPostFoodCost.tsx",
        "src/components/blog/BlogPostHaccpPlan.tsx",
        "src/components/blog/BlogPostHygieneQuiz.tsx",
        "src/components/blog/BlogPostRecipeScaler.tsx"
    ]
    for bf in blog_headers:
        update_file(
            bf,
            '<img src="/saim-dev-logo.jpg" alt="Saim Dev" className="w-7 h-7 rounded-full object-cover border border-white/15" />',
            '<img src="/saim-dev-logo.jpg" alt="Saim Dev - Full Stack Web Developer & Restaurant Tech Specialist" width={28} height={28} loading="lazy" decoding="async" className="w-7 h-7 rounded-full object-cover border border-white/15" />'
        )

if __name__ == "__main__":
    run()
