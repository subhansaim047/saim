import subprocess
import sys

sys.stdout.reconfigure(encoding='utf-8')

cwd = r'C:\Users\subhan\.gemini\antigravity\scratch\saim'

files_to_add = [
    'src/components/tools/FoodCoolingPosterTool.tsx',
    'src/components/tools/WalkInCoolerStorageChartTool.tsx',
    'src/components/tools/FridgeTemperatureRecordTool.tsx',
    'src/components/tools/DigitalChecklistTool.tsx',
    'src/components/TemplateDetailPage.tsx',
    'audit/tools_reports/food-cooling-poster.json',
    'audit/tools_reports/food-cooling-poster.md',
    'audit/tools_reports/walk-in-cooler-food-storage-chart.json',
    'audit/tools_reports/walk-in-cooler-food-storage-chart.md',
    'audit/tools_reports/fridge-temperature-record-sheet-pdf.json',
    'audit/tools_reports/fridge-temperature-record-sheet-pdf.md',
    'audit/tools_reports/food-allergen-chart.json',
    'audit/tools_reports/food-allergen-chart.md',
    'audit/tools_reports/pest-control-checklist.json',
    'audit/tools_reports/pest-control-checklist.md',
    'audit/tools-seo-tracker.json',
    'audit/tools-seo-tracker.csv'
]

print("Adding Batch 3 files to git...")
p_add = subprocess.run(['git', 'add'] + files_to_add, cwd=cwd, capture_output=True, text=True)
print("Git add code:", p_add.returncode)

commit_msg = """feat(seo): complete Phase 1 Batch 3 (tools 11-15) reverse engineering and interactive upgrades

- #11 food-cooling-poster: Built FoodCoolingPosterTool with 90-minute countdown stopwatch, 2-stage milestone guide (0-45m drop to 21C, 45-90m drop to 8C), batch cooling log simulator, CSV export, and A4 print poster.
- #12 walk-in-cooler-food-storage-chart: Built WalkInCoolerStorageChartTool with 5-tier vertical shelf hierarchy, live ingredient search classifier, 15cm floor clearance standards, and A4/A3 cooler door print chart.
- #13 fridge-temperature-record-sheet-pdf: Built FridgeTemperatureRecordTool with multi-unit management, twice-daily AM/PM inputs, automatic <=5C/5-8C/>8C compliance flags, monthly probe calibration verification, and CSV export.
- #14 food-allergen-chart: Verified AllergenMatrixTool with 14 statutory EU/UK allergens, live customer allergen filter, Natasha's Law compliance, and printable A4 matrix.
- #15 pest-control-checklist: Enhanced DigitalChecklistTool with PEST_CONTROL_TASKS covering BPCA bait boxes, EFKs, mesh screens, dry store pests, waste storage, and service reports.
- Verified: 11/11 CI quality guards passed; all 201 static routes rendered cleanly in 29.2s."""

print("Committing Batch 3...")
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
