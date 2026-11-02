import subprocess
import sys

sys.stdout.reconfigure(encoding='utf-8')

cwd = r'C:\Users\subhan\.gemini\antigravity\scratch\saim'

files_to_add = [
    'audit/tools-seo-tracker.json',
    'audit/tools-seo-tracker.csv',
    'src/components/TemplateDetailPage.tsx',
    'src/components/tools/DigitalChecklistTool.tsx',
    'src/components/tools/ChoppingBoardColourChartTool.tsx',
    'src/components/tools/HandWashingPosterTool.tsx',
    'src/components/tools/SafeFoodPrepRulesTool.tsx',
    'audit/tools_reports/hand-washing-poster.json',
    'audit/tools_reports/hand-washing-poster.md',
    'audit/tools_reports/chopping-board-colour-chart.json',
    'audit/tools_reports/chopping-board-colour-chart.md',
    'audit/tools_reports/food-cost-calculator.json',
    'audit/tools_reports/food-cost-calculator.md',
    'audit/tools_reports/food-recall.json',
    'audit/tools_reports/food-recall.md',
    'audit/tools_reports/basic-food-preparation-rules.json',
    'audit/tools_reports/basic-food-preparation-rules.md',
]

print("Adding files to git...")
p_add = subprocess.run(['git', 'add'] + files_to_add, cwd=cwd, capture_output=True, text=True)
print("Git add code:", p_add.returncode)

commit_msg = """feat(seo): complete Phase 1 Batch 2 (tools 6-10) reverse engineering and interactive upgrades

- #6 hand-washing-poster: Built HandWashingPosterTool with 6-step FSA sequence, 20s drill stopwatch, mandatory triggers, and station ID A4 print.
- #7 chopping-board-colour-chart: Built ChoppingBoardColourChartTool with full 7-colour coding, purple allergen & brown root veg standards, live ingredient search classifier, and 82C rinse rules.
- #8 food-cost-calculator: Verified FoodCostCalculatorTool (889 lines) with target GP% sliders, delivery commission buffer (30%), 20% VAT net/gross engine, and CSV export.
- #9 food-recall: Upgraded DigitalChecklistTool with 6 statutory recall stages under Reg (EC) 178/2002, FSA notification, Cat 3 ABP disposal, and incident logs.
- #10 basic-food-preparation-rules: Built SafeFoodPrepRulesTool with 5 kitchen stations, 8-point pre-prep readiness audit drill, UK 75C vs Scotland 82C standard toggle, and A4 print layout.
- 11/11 CI quality guards passed with 0 errors; all 201 static routes compiled cleanly."""

print("Committing changes...")
p_commit = subprocess.run(['git', 'commit', '-m', commit_msg], cwd=cwd, capture_output=True, text=True)
print("Git commit code:", p_commit.returncode)
print(p_commit.stdout)
if p_commit.stderr:
    print("Stderr:", p_commit.stderr)

print("Pushing to origin main...")
p_push = subprocess.run(['git', 'push', 'origin', 'main'], cwd=cwd, capture_output=True, text=True)
print("Git push code:", p_push.returncode)
print(p_push.stdout)
if p_push.stderr:
    print("Push stderr:", p_push.stderr)
