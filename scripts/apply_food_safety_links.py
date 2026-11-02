import os
import re

base_dir = r"C:\Users\subhan\.gemini\antigravity\scratch\saim"

# 1. BlogPostAllergenMatrix.tsx
f1_path = os.path.join(base_dir, "src/components/blog/BlogPostAllergenMatrix.tsx")
with open(f1_path, "r", encoding="utf-8") as f:
    c1 = f.read()

# Replace header button with Link
old_f1_head = """        <button
          onClick={() => router.push("/blogs")}
          className="flex items-center gap-2 text-sm font-medium text-white/60 hover:text-white transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          All Articles
        </button>"""
new_f1_head = """        <Link
          href="/blogs"
          className="flex items-center gap-2 text-sm font-medium text-white/60 hover:text-white transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>return to the Saim Dev blog</span>
        </Link>"""
assert old_f1_head in c1, "old_f1_head not found"
c1 = c1.replace(old_f1_head, new_f1_head)

# Replace tool section
old_f1_tool = """          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/food-safety-templates/food-allergen-chart"
              className="bg-primary hover:brightness-110 text-black font-bold text-xs sm:text-sm px-6 py-3.5 rounded-full flex items-center gap-2 transition-all shadow-xl"
            >
              <span>Launch 14-Allergen Matrix Tool</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/tools"
              className="border border-white/20 bg-white/5 hover:bg-white/10 text-white font-medium text-xs sm:text-sm px-5 py-3.5 rounded-full transition-all"
            >
              <span>Explore All Commercial Kitchen Tools</span>
            </Link>
          </div>"""
new_f1_tool = """          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              href="/food-safety-templates/allergy-matrix"
              className="bg-primary hover:brightness-110 text-black font-bold text-xs sm:text-sm px-5 py-3.5 rounded-full flex items-center gap-2 transition-all shadow-xl"
            >
              <span>free 14-allergen matrix</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/food-safety-templates/food-allergen-chart"
              className="bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm px-5 py-3.5 rounded-full flex items-center gap-2 transition-all border border-white/20"
            >
              <span>food allergen chart</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/tools"
              className="border border-white/20 bg-white/5 hover:bg-white/10 text-white font-medium text-xs sm:text-sm px-4 py-3.5 rounded-full transition-all"
            >
              <span>return to all kitchen tools</span>
            </Link>
          </div>"""
assert old_f1_tool in c1, "old_f1_tool not found"
c1 = c1.replace(old_f1_tool, new_f1_tool)

# Add bottom link before </article>
old_f1_bot = """        {/* ── BOTTOM CTA ── */}
        <div className="p-8 rounded-3xl bg-[#0a0a0d] border border-white/10 text-center space-y-4">"""
new_f1_bot = """        {/* ── Bottom Navigation ── */}
        <div className="text-center mb-8">
          <Link href="/blogs" className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors cursor-pointer">
            <ArrowLeft className="w-4 h-4" />
            <span>return to the Saim Dev blog</span>
          </Link>
        </div>

        {/* ── BOTTOM CTA ── */}
        <div className="p-8 rounded-3xl bg-[#0a0a0d] border border-white/10 text-center space-y-4">"""
assert old_f1_bot in c1, "old_f1_bot not found"
c1 = c1.replace(old_f1_bot, new_f1_bot)

with open(f1_path, "w", encoding="utf-8") as f:
    f.write(c1)
print("Updated BlogPostAllergenMatrix.tsx successfully!")

# 2. BlogPostNatashasLaw.tsx
f2_path = os.path.join(base_dir, "src/components/blog/BlogPostNatashasLaw.tsx")
with open(f2_path, "r", encoding="utf-8") as f:
    c2 = f.read()

old_f2_head = """        <Link
          href="/blogs"
          className="flex items-center gap-2 text-sm font-medium text-white/60 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Articles</span>
        </Link>"""
new_f2_head = """        <Link
          href="/blogs"
          className="flex items-center gap-2 text-sm font-medium text-white/60 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>return to the Saim Dev blog</span>
        </Link>"""
assert old_f2_head in c2, "old_f2_head not found"
c2 = c2.replace(old_f2_head, new_f2_head)

old_f2_tool = """            <Link
              href="/tools/ppds-label-generator"
              className="bg-amber-400 hover:bg-amber-300 text-black font-bold text-xs px-5 py-3 rounded-full inline-flex items-center gap-1.5 transition-all shrink-0 shadow-lg"
            >
              <span>Open Free PPDS Tool</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>"""
new_f2_tool = """            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Link
                href="/tools/ppds-label-generator"
                className="bg-amber-400 hover:bg-amber-300 text-black font-bold text-xs px-5 py-3 rounded-full inline-flex items-center gap-1.5 transition-all shadow-lg"
              >
                <span>PPDS label generator</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/tools"
                className="bg-white/10 hover:bg-white/15 text-white text-xs font-medium px-4 py-3 rounded-full transition-all border border-white/15"
              >
                <span>return to all kitchen tools</span>
              </Link>
            </div>"""
assert old_f2_tool in c2, "old_f2_tool not found"
c2 = c2.replace(old_f2_tool, new_f2_tool)

with open(f2_path, "w", encoding="utf-8") as f:
    f.write(c2)
print("Updated BlogPostNatashasLaw.tsx successfully!")

# 3. BlogPostFoodCost.tsx
f3_path = os.path.join(base_dir, "src/components/blog/BlogPostFoodCost.tsx")
with open(f3_path, "r", encoding="utf-8") as f:
    c3 = f.read()

old_f3_head = """        <button
          onClick={() => router.push("/blogs")}
          className="flex items-center gap-2 text-sm font-medium text-white/60 hover:text-white transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          All Articles
        </button>"""
new_f3_head = """        <Link
          href="/blogs"
          className="flex items-center gap-2 text-sm font-medium text-white/60 hover:text-white transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>return to the Saim Dev blog</span>
        </Link>"""
assert old_f3_head in c3, "old_f3_head not found"
c3 = c3.replace(old_f3_head, new_f3_head)

old_f3_tool = """          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/food-safety-templates/food-cost-calculator"
              className="bg-primary hover:brightness-110 text-black font-bold text-xs sm:text-sm px-6 py-3.5 rounded-full flex items-center gap-2 transition-all shadow-xl"
            >
              <span>Launch Food Cost Calculator</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/tools"
              className="border border-white/20 bg-white/5 hover:bg-white/10 text-white font-medium text-xs sm:text-sm px-5 py-3.5 rounded-full transition-all"
            >
              <span>Explore All Commercial Kitchen Tools</span>
            </Link>
          </div>"""
new_f3_tool = """          <div className="flex flex-wrap items-center gap-4 pt-2">
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
assert old_f3_tool in c3, "old_f3_tool not found"
c3 = c3.replace(old_f3_tool, new_f3_tool)

old_f3_bot = """        {/* ── BOTTOM CTA ── */}
        <div className="p-8 rounded-3xl bg-[#0a0a0d] border border-white/10 text-center space-y-4">"""
new_f3_bot = """        {/* ── Bottom Navigation ── */}
        <div className="text-center mb-8">
          <Link href="/blogs" className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors cursor-pointer">
            <ArrowLeft className="w-4 h-4" />
            <span>return to the Saim Dev blog</span>
          </Link>
        </div>

        {/* ── BOTTOM CTA ── */}
        <div className="p-8 rounded-3xl bg-[#0a0a0d] border border-white/10 text-center space-y-4">"""
assert old_f3_bot in c3, "old_f3_bot not found"
c3 = c3.replace(old_f3_bot, new_f3_bot)

with open(f3_path, "w", encoding="utf-8") as f:
    f.write(c3)
print("Updated BlogPostFoodCost.tsx successfully!")

# 4. BlogPostRecipeScaler.tsx
f4_path = os.path.join(base_dir, "src/components/blog/BlogPostRecipeScaler.tsx")
with open(f4_path, "r", encoding="utf-8") as f:
    c4 = f.read()

old_f4_head = """        <button
          onClick={() => router.push("/blogs")}
          className="flex items-center gap-2 text-sm font-medium text-white/60 hover:text-white transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          All Articles
        </button>"""
new_f4_head = """        <Link
          href="/blogs"
          className="flex items-center gap-2 text-sm font-medium text-white/60 hover:text-white transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>return to the Saim Dev blog</span>
        </Link>"""
assert old_f4_head in c4, "old_f4_head not found"
c4 = c4.replace(old_f4_head, new_f4_head)

old_f4_tool = """          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/food-safety-templates/recipe-cost-calculator"
              className="bg-primary hover:brightness-110 text-black font-bold text-xs sm:text-sm px-6 py-3.5 rounded-full flex items-center gap-2 transition-all shadow-xl"
            >
              <span>Launch Recipe Batch Scaler</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/tools"
              className="border border-white/20 bg-white/5 hover:bg-white/10 text-white font-medium text-xs sm:text-sm px-5 py-3.5 rounded-full transition-all"
            >
              <span>Explore All Commercial Kitchen Tools</span>
            </Link>
          </div>"""
new_f4_tool = """          <div className="flex flex-wrap items-center gap-4 pt-2">
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
assert old_f4_tool in c4, "old_f4_tool not found"
c4 = c4.replace(old_f4_tool, new_f4_tool)

old_f4_bot = """        {/* ── BOTTOM CTA ── */}
        <div className="p-8 rounded-3xl bg-[#0a0a0d] border border-white/10 text-center space-y-4">"""
new_f4_bot = """        {/* ── Bottom Navigation ── */}
        <div className="text-center mb-8">
          <Link href="/blogs" className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors cursor-pointer">
            <ArrowLeft className="w-4 h-4" />
            <span>return to the Saim Dev blog</span>
          </Link>
        </div>

        {/* ── BOTTOM CTA ── */}
        <div className="p-8 rounded-3xl bg-[#0a0a0d] border border-white/10 text-center space-y-4">"""
assert old_f4_bot in c4, "old_f4_bot not found"
c4 = c4.replace(old_f4_bot, new_f4_bot)

with open(f4_path, "w", encoding="utf-8") as f:
    f.write(c4)
print("Updated BlogPostRecipeScaler.tsx successfully!")

# 5. BlogPostHaccpPlan.tsx
f5_path = os.path.join(base_dir, "src/components/blog/BlogPostHaccpPlan.tsx")
with open(f5_path, "r", encoding="utf-8") as f:
    c5 = f.read()

old_f5_head = """        <button
          onClick={() => router.push("/blogs")}
          className="flex items-center gap-2 text-sm font-medium text-white/60 hover:text-white transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          All Articles
        </button>"""
new_f5_head = """        <Link
          href="/blogs"
          className="flex items-center gap-2 text-sm font-medium text-white/60 hover:text-white transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>return to the Saim Dev blog</span>
        </Link>"""
assert old_f5_head in c5, "old_f5_head not found"
c5 = c5.replace(old_f5_head, new_f5_head)

old_f5_tool = """          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/food-safety-templates/haccp-plan"
              className="bg-primary hover:brightness-110 text-black font-bold text-xs sm:text-sm px-6 py-3.5 rounded-full flex items-center gap-2 transition-all shadow-xl"
            >
              <span>Launch HACCP Plan Builder</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/tools"
              className="border border-white/20 bg-white/5 hover:bg-white/10 text-white font-medium text-xs sm:text-sm px-5 py-3.5 rounded-full transition-all"
            >
              <span>Explore All Commercial Kitchen Tools</span>
            </Link>
          </div>"""
new_f5_tool = """          <div className="flex flex-wrap items-center gap-4 pt-2">
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
assert old_f5_tool in c5, "old_f5_tool not found"
c5 = c5.replace(old_f5_tool, new_f5_tool)

old_f5_bot = """        {/* ── BOTTOM CTA ── */}
        <div className="p-8 rounded-3xl bg-[#0a0a0d] border border-white/10 text-center space-y-4">"""
new_f5_bot = """        {/* ── Bottom Navigation ── */}
        <div className="text-center mb-8">
          <Link href="/blogs" className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors cursor-pointer">
            <ArrowLeft className="w-4 h-4" />
            <span>return to the Saim Dev blog</span>
          </Link>
        </div>

        {/* ── BOTTOM CTA ── */}
        <div className="p-8 rounded-3xl bg-[#0a0a0d] border border-white/10 text-center space-y-4">"""
assert old_f5_bot in c5, "old_f5_bot not found"
c5 = c5.replace(old_f5_bot, new_f5_bot)

with open(f5_path, "w", encoding="utf-8") as f:
    f.write(c5)
print("Updated BlogPostHaccpPlan.tsx successfully!")

# 6. BlogPostChecklist.tsx
f6_path = os.path.join(base_dir, "src/components/blog/BlogPostChecklist.tsx")
with open(f6_path, "r", encoding="utf-8") as f:
    c6 = f.read()

old_f6_head = """        <button
          onClick={() => router.push("/blogs")}
          className="flex items-center gap-2 text-sm font-medium text-white/60 hover:text-white transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          All Articles
        </button>"""
new_f6_head = """        <Link
          href="/blogs"
          className="flex items-center gap-2 text-sm font-medium text-white/60 hover:text-white transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>return to the Saim Dev blog</span>
        </Link>"""
assert old_f6_head in c6, "old_f6_head not found"
c6 = c6.replace(old_f6_head, new_f6_head)

old_f6_tool = """          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/food-safety-templates/cleaning-schedule"
              className="bg-primary hover:brightness-110 text-black font-bold text-xs sm:text-sm px-6 py-3.5 rounded-full flex items-center gap-2 transition-all shadow-xl"
            >
              <span>Launch Daily SFBB Checklist Tool</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/tools"
              className="border border-white/20 bg-white/5 hover:bg-white/10 text-white font-medium text-xs sm:text-sm px-5 py-3.5 rounded-full transition-all"
            >
              <span>Explore All Commercial Kitchen Tools</span>
            </Link>
          </div>"""
new_f6_tool = """          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <Link
              href="/food-safety-templates/opening-and-closing-checklist-template"
              className="p-3.5 rounded-xl bg-primary text-black font-bold text-xs sm:text-sm flex items-center justify-between shadow-xl hover:brightness-110 transition-all"
            >
              <span>opening and closing checklist</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </Link>

            <Link
              href="/food-safety-templates/cleaning-schedule"
              className="p-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm flex items-center justify-between border border-white/15 transition-all"
            >
              <span>cleaning schedule</span>
              <ArrowRight className="w-4 h-4 shrink-0 text-primary" />
            </Link>

            <Link
              href="/food-safety-templates/fridge-temperature-record-sheet-pdf"
              className="p-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm flex items-center justify-between border border-white/15 transition-all"
            >
              <span>kitchen temperature log</span>
              <ArrowRight className="w-4 h-4 shrink-0 text-primary" />
            </Link>
          </div>

          <div className="pt-2">
            <Link
              href="/tools"
              className="inline-flex items-center gap-2 border border-white/20 bg-white/5 hover:bg-white/10 text-white font-medium text-xs sm:text-sm px-5 py-3 rounded-full transition-all"
            >
              <span>return to all kitchen tools</span>
            </Link>
          </div>"""
assert old_f6_tool in c6, "old_f6_tool not found"
c6 = c6.replace(old_f6_tool, new_f6_tool)

old_f6_bot = """        {/* ── BOTTOM CTA ── */}
        <div className="p-8 rounded-3xl bg-[#0a0a0d] border border-white/10 text-center space-y-4">"""
new_f6_bot = """        {/* ── Bottom Navigation ── */}
        <div className="text-center mb-8">
          <Link href="/blogs" className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors cursor-pointer">
            <ArrowLeft className="w-4 h-4" />
            <span>return to the Saim Dev blog</span>
          </Link>
        </div>

        {/* ── BOTTOM CTA ── */}
        <div className="p-8 rounded-3xl bg-[#0a0a0d] border border-white/10 text-center space-y-4">"""
assert old_f6_bot in c6, "old_f6_bot not found"
c6 = c6.replace(old_f6_bot, new_f6_bot)

with open(f6_path, "w", encoding="utf-8") as f:
    f.write(c6)
print("Updated BlogPostChecklist.tsx successfully!")

# 7. BlogPostCoolingGuide.tsx
f7_path = os.path.join(base_dir, "src/components/blog/BlogPostCoolingGuide.tsx")
with open(f7_path, "r", encoding="utf-8") as f:
    c7 = f.read()

old_f7_cross = """            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <Link
                href="/food-safety-templates/food-cooling-poster"
                className="p-3.5 rounded-xl bg-black/60 border border-white/10 hover:border-primary/40 transition-all flex items-center justify-between group"
              >
                <span className="text-xs font-semibold text-white group-hover:text-primary transition-colors">Food Cooling Procedures Poster</span>
                <ArrowRight className="w-4 h-4 text-primary shrink-0" />
              </Link>
              <Link
                href="/food-safety-templates/fridge-temperature-record-sheet-pdf"
                className="p-3.5 rounded-xl bg-black/60 border border-white/10 hover:border-primary/40 transition-all flex items-center justify-between group"
              >
                <span className="text-xs font-semibold text-white group-hover:text-primary transition-colors">Fridge &amp; Chiller Record Sheet</span>
                <ArrowRight className="w-4 h-4 text-primary shrink-0" />
              </Link>
            </div>"""
new_f7_cross = """            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <Link
                href="/food-safety-templates/food-cooling-poster"
                className="p-3.5 rounded-xl bg-black/60 border border-white/10 hover:border-primary/40 transition-all flex items-center justify-between group"
              >
                <span className="text-xs font-semibold text-white group-hover:text-primary transition-colors">food cooling poster</span>
                <ArrowRight className="w-4 h-4 text-primary shrink-0" />
              </Link>
              <Link
                href="/food-safety-templates/fridge-temperature-record-sheet-pdf"
                className="p-3.5 rounded-xl bg-black/60 border border-white/10 hover:border-primary/40 transition-all flex items-center justify-between group"
              >
                <span className="text-xs font-semibold text-white group-hover:text-primary transition-colors">fridge temperature sheet</span>
                <ArrowRight className="w-4 h-4 text-primary shrink-0" />
              </Link>
              <Link
                href="/food-safety-templates/freezer-temperature-chart"
                className="p-3.5 rounded-xl bg-black/60 border border-white/10 hover:border-primary/40 transition-all flex items-center justify-between group"
              >
                <span className="text-xs font-semibold text-white group-hover:text-primary transition-colors">freezer temperature chart</span>
                <ArrowRight className="w-4 h-4 text-primary shrink-0" />
              </Link>
            </div>

            <div className="pt-2">
              <Link
                href="/tools"
                className="inline-flex items-center gap-2 border border-white/20 bg-white/5 hover:bg-white/10 text-white font-medium text-xs px-4 py-2.5 rounded-full transition-all"
              >
                <span>return to all kitchen tools</span>
              </Link>
            </div>"""
assert old_f7_cross in c7, "old_f7_cross not found"
c7 = c7.replace(old_f7_cross, new_f7_cross)

with open(f7_path, "w", encoding="utf-8") as f:
    f.write(c7)
print("Updated BlogPostCoolingGuide.tsx successfully!")

# 8. TemplateDetailPage.tsx
f8_path = os.path.join(base_dir, "src/components/TemplateDetailPage.tsx")
with open(f8_path, "r", encoding="utf-8") as f:
    c8 = f.read()

# Header update: Back to Kitchen Tools Hub -> return to all kitchen tools
old_f8_head = """        <Link href="/tools" className="flex items-center gap-2 text-xs font-bold text-gray-700 hover:text-black">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Kitchen Tools Hub</span>
        </Link>"""
new_f8_head = """        <Link href="/tools" className="flex items-center gap-2 text-xs font-bold text-gray-700 hover:text-black">
          <ArrowLeft className="w-4 h-4" />
          <span>return to all kitchen tools</span>
        </Link>"""
assert old_f8_head in c8, "old_f8_head not found"
c8 = c8.replace(old_f8_head, new_f8_head)

# Helper function definition for fallback related blog
fallback_helper = """
function getFallbackRelatedBlog(slug: string, title: string) {
  const s = slug.toLowerCase();
  const t = title.toLowerCase();
  if (s.includes("allergen") || s.includes("allergy") || t.includes("allergen") || t.includes("allergy") || s.includes("natasha")) {
    return {
      title: "How to Create a Compliant 14-Allergen Matrix for UK Restaurants",
      slug: "how-to-create-compliant-14-allergen-matrix-uk-restaurants"
    };
  }
  if (s.includes("haccp") || s.includes("hazard") || s.includes("critical-control") || s.includes("ccp")) {
    return {
      title: "How to Write a HACCP Plan for UK Food Businesses Step-by-Step",
      slug: "how-to-write-haccp-plan-uk-food-business-step-by-step"
    };
  }
  if (s.includes("cost") || s.includes("margin") || t.includes("cost") || t.includes("margin")) {
    return {
      title: "Mastering Food Cost Percentage: Commercial Kitchen Recipe Pricing Guide",
      slug: "mastering-food-cost-percentage-commercial-kitchen-calculator"
    };
  }
  if (s.includes("recipe") || t.includes("recipe") || s.includes("batch")) {
    return {
      title: "How to Scale Recipes for Commercial Catering: Batch Calculator Guide",
      slug: "how-to-scale-recipes-commercial-catering-batch-calculator"
    };
  }
  if (s.includes("cooling") || s.includes("temp") || s.includes("fridge") || s.includes("freezer") || s.includes("chill")) {
    return {
      title: "Commercial Kitchen Food Cooling & Temperature Limits Guide",
      slug: "commercial-kitchen-food-cooling-temperature-guide"
    };
  }
  if (s.includes("quiz") || t.includes("quiz") || s.includes("hygiene")) {
    return {
      title: "Level 2 Food Hygiene Practice Test & Kitchen Staff Training Guide",
      slug: "level-2-food-hygiene-practice-test-kitchen-staff-guide"
    };
  }
  return {
    title: "SFBB Daily Kitchen Opening & Closing Checklist Guide",
    slug: "sfbb-daily-kitchen-opening-closing-checklist-guide"
  };
}
"""

# Insert fallback helper before TemplateDetailPage component export
if "function getFallbackRelatedBlog" not in c8:
    c8 = c8.replace("export const TemplateDetailPage: React.FC<Props>", fallback_helper + "\nexport const TemplateDetailPage: React.FC<Props>")

# Calculate activeRelatedBlog inside TemplateDetailPage component
old_c8_deep = "  const deepContent = TOOL_DEEP_CONTENT[template.slug];"
new_c8_deep = "  const deepContent = TOOL_DEEP_CONTENT[template.slug];\n  const activeRelatedBlog = deepContent?.relatedBlog || getFallbackRelatedBlog(template.slug, template.title);"
if old_c8_deep in c8 and "const activeRelatedBlog =" not in c8:
    c8 = c8.replace(old_c8_deep, new_c8_deep)

# Replace deepContent?.relatedBlog in JSX
old_c8_blog_jsx = """        {/* Related Compliance Blog Guide */}
        {deepContent?.relatedBlog && (
          <div className="bg-gradient-to-r from-blue-900 to-indigo-950 text-white rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-md no-print">
            <div className="space-y-1 max-w-xl">
              <span className="text-[10px] font-mono uppercase tracking-widest text-amber-300 font-bold block">
                Recommended UK Hospitality Inspection Guide
              </span>
              <h4 className="text-base sm:text-lg font-bold">
                {deepContent.relatedBlog.title}
              </h4>
              <p className="text-xs text-blue-200 leading-relaxed">
                Read our in-depth guidance on UK Food Standards Agency inspection procedures, staff training, and compliance routines.
              </p>
            </div>
            <Link
              href={`/blog/${deepContent.relatedBlog.slug}`}
              className="bg-white text-gray-950 hover:bg-gray-100 font-bold text-xs px-5 py-2.5 rounded-full inline-flex items-center gap-1.5 transition-all shadow shrink-0"
            >
              <span>Read Guide</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        )}"""

new_c8_blog_jsx = """        {/* Related Compliance Blog Guide */}
        {activeRelatedBlog && (
          <div className="bg-gradient-to-r from-blue-900 to-indigo-950 text-white rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-md no-print">
            <div className="space-y-1 max-w-xl">
              <span className="text-[10px] font-mono uppercase tracking-widest text-amber-300 font-bold block">
                Recommended UK Hospitality Inspection Guide
              </span>
              <h4 className="text-base sm:text-lg font-bold">
                {activeRelatedBlog.title}
              </h4>
              <p className="text-xs text-blue-200 leading-relaxed">
                Read our in-depth guidance on UK Food Standards Agency inspection procedures, staff training, and compliance routines.
              </p>
            </div>
            <Link
              href={`/blog/${activeRelatedBlog.slug}`}
              className="bg-white text-gray-950 hover:bg-gray-100 font-bold text-xs px-5 py-2.5 rounded-full inline-flex items-center gap-1.5 transition-all shadow shrink-0"
            >
              <span>Read Guide</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        )}"""
assert old_c8_blog_jsx in c8, "old_c8_blog_jsx not found"
c8 = c8.replace(old_c8_blog_jsx, new_c8_blog_jsx)

# Add bottom link back to tools before Conversion Banner
old_c8_banner = """        {/* Conversion Banner: High-Impact Takeaway Commercial Bridge */}"""
new_c8_banner = """        {/* Bottom return link to Kitchen Tools Hub */}
        <div className="text-center pt-2 pb-2 no-print">
          <Link
            href="/tools"
            className="inline-flex items-center gap-2 text-xs font-semibold text-gray-600 hover:text-black transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>return to all kitchen tools</span>
          </Link>
        </div>

        {/* Conversion Banner: High-Impact Takeaway Commercial Bridge */}"""
if old_c8_banner in c8 and "Bottom return link to Kitchen Tools Hub" not in c8:
    c8 = c8.replace(old_c8_banner, new_c8_banner)

with open(f8_path, "w", encoding="utf-8") as f:
    f.write(c8)
print("Updated TemplateDetailPage.tsx successfully!")

# 9. app/tools/ppds-label-generator/page.tsx
f9_path = os.path.join(base_dir, "app/tools/ppds-label-generator/page.tsx")
with open(f9_path, "r", encoding="utf-8") as f:
    c9 = f.read()

old_f9_head = """        <Link
          href="/tools"
          className="flex items-center gap-2 text-xs font-bold text-gray-700 hover:text-black transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Kitchen Tools Hub</span>
        </Link>"""
new_f9_head = """        <Link
          href="/tools"
          className="flex items-center gap-2 text-xs font-bold text-gray-700 hover:text-black transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>return to all kitchen tools</span>
        </Link>"""
assert old_f9_head in c9, "old_f9_head not found"
c9 = c9.replace(old_f9_head, new_f9_head)

with open(f9_path, "w", encoding="utf-8") as f:
    f.write(c9)
print("Updated ppds-label-generator/page.tsx successfully!")
