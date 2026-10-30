"""
Update blog posts to include direct links to interactive tools
"""

# 1. BlogPostChecklist.tsx
p1 = r"C:\Users\subhan\.gemini\antigravity\scratch\saim\src\components\blog\BlogPostChecklist.tsx"
with open(p1, "r", encoding="utf-8") as f:
    c1 = f.read().replace("\r\n", "\n")

target1 = """          <div className="pt-2">
            <Link
              href="/tools"
              className="inline-flex items-center gap-2 border border-white/20 bg-white/5 hover:bg-white/10 text-white font-medium text-xs sm:text-sm px-5 py-3 rounded-full transition-all"
            >
              <span>return to all kitchen tools</span>
            </Link>
          </div>"""

replacement1 = """          <div className="pt-2 flex flex-wrap gap-3">
            <Link
              href="/tools/allergen-matrix-generator"
              className="inline-flex items-center gap-2 border border-primary/30 bg-primary/10 hover:bg-primary/20 text-primary font-medium text-xs sm:text-sm px-5 py-3 rounded-full transition-all"
            >
              <span>Free 14-Allergen Matrix Generator</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/tools"
              className="inline-flex items-center gap-2 border border-white/20 bg-white/5 hover:bg-white/10 text-white font-medium text-xs sm:text-sm px-5 py-3 rounded-full transition-all"
            >
              <span>return to all kitchen tools</span>
            </Link>
          </div>"""

if target1 in c1:
    c1 = c1.replace(target1, replacement1, 1)
    with open(p1, "w", encoding="utf-8") as f:
        f.write(c1)
    print("Updated BlogPostChecklist.tsx")
else:
    print("Target 1 not found")

# 2. BlogPostCoolingGuide.tsx
p2 = r"C:\Users\subhan\.gemini\antigravity\scratch\saim\src\components\blog\BlogPostCoolingGuide.tsx"
with open(p2, "r", encoding="utf-8") as f:
    c2 = f.read().replace("\r\n", "\n")

target2 = """              <Link
                href="/tools"
                className="p-3.5 rounded-xl bg-black/60 border border-white/10 hover:border-primary/40 transition-all flex items-center justify-between group"
              >
                <span className="text-xs font-semibold text-white group-hover:text-primary transition-colors">all kitchen tools</span>
                <ArrowRight className="w-4 h-4 text-primary shrink-0" />
              </Link>"""

replacement2 = """              <Link
                href="/tools/food-cost-calculator"
                className="p-3.5 rounded-xl bg-black/60 border border-white/10 hover:border-primary/40 transition-all flex items-center justify-between group"
              >
                <span className="text-xs font-semibold text-white group-hover:text-primary transition-colors">commercial food cost calculator</span>
                <ArrowRight className="w-4 h-4 text-primary shrink-0" />
              </Link>
              <Link
                href="/tools"
                className="p-3.5 rounded-xl bg-black/60 border border-white/10 hover:border-primary/40 transition-all flex items-center justify-between group"
              >
                <span className="text-xs font-semibold text-white group-hover:text-primary transition-colors">all kitchen tools</span>
                <ArrowRight className="w-4 h-4 text-primary shrink-0" />
              </Link>"""

if target2 in c2:
    c2 = c2.replace(target2, replacement2, 1)
    with open(p2, "w", encoding="utf-8") as f:
        f.write(c2)
    print("Updated BlogPostCoolingGuide.tsx")
else:
    print("Target 2 not found")

# 3. BlogPostRecipeScaler.tsx
p3 = r"C:\Users\subhan\.gemini\antigravity\scratch\saim\src\components\blog\BlogPostRecipeScaler.tsx"
with open(p3, "r", encoding="utf-8") as f:
    c3 = f.read().replace("\r\n", "\n")

target3 = """          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/food-safety-templates/recipe-calculator"
              className="bg-primary hover:brightness-110 text-black font-bold text-xs sm:text-sm px-6 py-3.5 rounded-full flex items-center gap-2 transition-all shadow-xl"
            >
              <span>recipe calculator</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/tools"
              className="border border-white/20 bg-white/5 hover:bg-white/10 text-white font-medium text-xs sm:text-sm px-5 py-3.5 rounded-full transition-all"
            >
              <span>return to all kitchen tools</span>
            </Link>
          </div>"""

replacement3 = """          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/tools/recipe-batch-calculator"
              className="bg-primary hover:brightness-110 text-black font-bold text-xs sm:text-sm px-6 py-3.5 rounded-full flex items-center gap-2 transition-all shadow-xl"
            >
              <span>Interactive Recipe Batch Scaler</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/tools"
              className="border border-white/20 bg-white/5 hover:bg-white/10 text-white font-medium text-xs sm:text-sm px-5 py-3.5 rounded-full transition-all"
            >
              <span>return to all kitchen tools</span>
            </Link>
          </div>"""

if target3 in c3:
    c3 = c3.replace(target3, replacement3, 1)
    with open(p3, "w", encoding="utf-8") as f:
        f.write(c3)
    print("Updated BlogPostRecipeScaler.tsx")
else:
    print("Target 3 not found")

# 4. BlogPostFoodCost.tsx
p4 = r"C:\Users\subhan\.gemini\antigravity\scratch\saim\src\components\blog\BlogPostFoodCost.tsx"
with open(p4, "r", encoding="utf-8") as f:
    c4 = f.read().replace("\r\n", "\n")

target4 = """          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/food-safety-templates/food-cost-calculator"
              className="bg-primary hover:brightness-110 text-black font-bold text-xs sm:text-sm px-6 py-3.5 rounded-full flex items-center gap-2 transition-all shadow-xl"
            >
              <span>commercial food cost calculator</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/tools"
              className="border border-white/20 bg-white/5 hover:bg-white/10 text-white font-medium text-xs sm:text-sm px-5 py-3.5 rounded-full transition-all"
            >
              <span>return to all kitchen tools</span>
            </Link>
          </div>"""

replacement4 = """          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/tools/food-cost-calculator"
              className="bg-primary hover:brightness-110 text-black font-bold text-xs sm:text-sm px-6 py-3.5 rounded-full flex items-center gap-2 transition-all shadow-xl"
            >
              <span>Interactive Food Cost Calculator</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/tools"
              className="border border-white/20 bg-white/5 hover:bg-white/10 text-white font-medium text-xs sm:text-sm px-5 py-3.5 rounded-full transition-all"
            >
              <span>return to all kitchen tools</span>
            </Link>
          </div>"""

if target4 in c4:
    c4 = c4.replace(target4, replacement4, 1)
    with open(p4, "w", encoding="utf-8") as f:
        f.write(c4)
    print("Updated BlogPostFoodCost.tsx")
else:
    print("Target 4 not found")

# 5. BlogPostHaccpPlan.tsx
p5 = r"C:\Users\subhan\.gemini\antigravity\scratch\saim\src\components\blog\BlogPostHaccpPlan.tsx"
with open(p5, "r", encoding="utf-8") as f:
    c5 = f.read().replace("\r\n", "\n")

target5 = """          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/food-safety-templates/haccp-plan-builder"
              className="bg-primary hover:brightness-110 text-black font-bold text-xs sm:text-sm px-6 py-3.5 rounded-full flex items-center gap-2 transition-all shadow-xl"
            >
              <span>HACCP plan builder</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/tools"
              className="border border-white/20 bg-white/5 hover:bg-white/10 text-white font-medium text-xs sm:text-sm px-5 py-3.5 rounded-full transition-all"
            >
              <span>return to all kitchen tools</span>
            </Link>
          </div>"""

replacement5 = """          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/tools/allergen-matrix-generator"
              className="bg-primary hover:brightness-110 text-black font-bold text-xs sm:text-sm px-6 py-3.5 rounded-full flex items-center gap-2 transition-all shadow-xl"
            >
              <span>Interactive Allergen Matrix Tool</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/food-safety-templates/haccp-plan-builder"
              className="border border-white/20 bg-white/5 hover:bg-white/10 text-white font-medium text-xs sm:text-sm px-5 py-3.5 rounded-full transition-all"
            >
              <span>HACCP Plan Template</span>
            </Link>
          </div>"""

if target5 in c5:
    c5 = c5.replace(target5, replacement5, 1)
    with open(p5, "w", encoding="utf-8") as f:
        f.write(c5)
    print("Updated BlogPostHaccpPlan.tsx")
else:
    print("Target 5 not found")

print("All blog link updates complete!")
