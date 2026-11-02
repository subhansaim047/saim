# Script to replace remaining Sparkles across the repository

# 1. TemplateDetailPage.tsx
p1 = 'src/components/TemplateDetailPage.tsx'
with open(p1, 'r', encoding='utf-8') as f:
    c = f.read()
c = c.replace('Sparkles', 'Info')
with open(p1, 'w', encoding='utf-8') as f:
    f.write(c)
print('Updated', p1)

# 2. PpdsLabelGeneratorTool.tsx
p2 = 'src/components/tools/PpdsLabelGeneratorTool.tsx'
with open(p2, 'r', encoding='utf-8') as f:
    c = f.read()
c = c.replace('import { Printer, ShieldCheck, Plus, RotateCcw, AlertTriangle, CheckCircle, Info, Sparkles }', 'import { Printer, ShieldCheck, Plus, RotateCcw, AlertTriangle, CheckCircle, Info, ArrowUpRight }')
c = c.replace('<Sparkles className="w-3 h-3 text-amber-500 opacity-60 group-hover:opacity-100" />', '<ArrowUpRight className="w-3 h-3 text-amber-500 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />')
with open(p2, 'w', encoding='utf-8') as f:
    f.write(c)
print('Updated', p2)

# 3. app/nextjs-developer-uk/page.tsx
p3 = 'app/nextjs-developer-uk/page.tsx'
with open(p3, 'r', encoding='utf-8') as f:
    c = f.read()
c = c.replace('Zap, HelpCircle, Sparkles', 'Zap, HelpCircle, Code2')
c = c.replace('<Sparkles className="w-3.5 h-3.5" />', '<Zap className="w-3.5 h-3.5 animate-pulse" />')
with open(p3, 'w', encoding='utf-8') as f:
    f.write(c)
print('Updated', p3)

# 4. app/services/takeaway-web-design/page.tsx
p4 = 'app/services/takeaway-web-design/page.tsx'
with open(p4, 'r', encoding='utf-8') as f:
    c = f.read()
c = c.replace('  Sparkles,\n', '  UtensilsCrossed,\n')
c = c.replace('<Sparkles className="w-3.5 h-3.5" />', '<UtensilsCrossed className="w-3.5 h-3.5" />')
with open(p4, 'w', encoding='utf-8') as f:
    f.write(c)
print('Updated', p4)

# 5. src/components/Nexova404.tsx
p5 = 'src/components/Nexova404.tsx'
with open(p5, 'r', encoding='utf-8') as f:
    c = f.read()
c = c.replace('import { ArrowRight, Sparkles, CheckCircle2 }', 'import { ArrowRight, Compass, CheckCircle2 }')
c = c.replace('<Sparkles className="w-3.5 h-3.5 text-primary" />', '<Compass className="w-3.5 h-3.5 text-primary" />')
with open(p5, 'w', encoding='utf-8') as f:
    f.write(c)
print('Updated', p5)

# 6. app/about/page.tsx
p6 = 'app/about/page.tsx'
with open(p6, 'r', encoding='utf-8') as f:
    c = f.read()
c = c.replace('Sparkles, ', '')
with open(p6, 'w', encoding='utf-8') as f:
    f.write(c)
print('Updated', p6)

# 7. src/components/blog/BlogPostHygieneQuiz.tsx
p7 = 'src/components/blog/BlogPostHygieneQuiz.tsx'
with open(p7, 'r', encoding='utf-8') as f:
    c = f.read()
c = c.replace('Sparkles, ', '')
with open(p7, 'w', encoding='utf-8') as f:
    f.write(c)
print('Updated', p7)

# 8. src/components/tools/RecipeCalculatorTool.tsx
p8 = 'src/components/tools/RecipeCalculatorTool.tsx'
with open(p8, 'r', encoding='utf-8') as f:
    c = f.read()
c = c.replace('  Sparkles,\n', '')
with open(p8, 'w', encoding='utf-8') as f:
    f.write(c)
print('Updated', p8)
