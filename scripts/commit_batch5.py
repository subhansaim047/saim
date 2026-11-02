import subprocess
import sys

sys.stdout.reconfigure(encoding='utf-8')

cwd = r'C:\Users\subhan\.gemini\antigravity\scratch\saim'

files_to_add = [
    'src/components/tools/HamCookingTemperatureTool.tsx',
    'src/components/TemplateDetailPage.tsx',
    'src/data/core_metadata.json',
    'src/data/tool_deep_content.ts',
    'audit/tools_reports/cleaning-restaurant.json',
    'audit/tools_reports/cleaning-restaurant.md',
    'audit/tools_reports/haccp-audit.json',
    'audit/tools_reports/haccp-audit.md',
    'audit/tools_reports/haccp-risk-assessment.json',
    'audit/tools_reports/haccp-risk-assessment.md',
    'audit/tools_reports/restaurant-deep-cleaning-checklist.json',
    'audit/tools_reports/restaurant-deep-cleaning-checklist.md',
    'audit/tools_reports/ham-cooking-temperature-chart.json',
    'audit/tools_reports/ham-cooking-temperature-chart.md',
    'audit/tools-seo-tracker.json',
    'audit/tools-seo-tracker.csv'
]

print("Adding Batch 5 files to git...")
p_add = subprocess.run(['git', 'add'] + files_to_add, cwd=cwd, capture_output=True, text=True)
print("Git add code:", p_add.returncode)

commit_msg = """feat(seo): complete Phase 1 Batch 5 (tools 21-25) reverse engineering and interactive upgrades

- #21 cleaning-restaurant: Added deep content, BS EN 1276 disinfection guidance, and tied into DigitalChecklistTool with deep clean tasks.
- #22 haccp-audit: Added internal audit checklist deep content and tied into HaccpPlanBuilderTool with CCP verification routines.
- #23 haccp-risk-assessment: Added Codex Alimentarius decision tree deep content and CCP risk scoring matrix.
- #24 restaurant-deep-cleaning-checklist: Added TR19 canopy and fryer boil-out guidance, tied into DigitalChecklistTool.
- #25 ham-cooking-temperature-chart: Built HamCookingTemperatureTool with joint weight calculator, bone-in vs rolled gammon timings, 75C (82C Scotland) core limits, and A4 print roast chart.
- Verified: 11/11 CI quality guards passed; all 201 static routes rendered cleanly in 27.9s."""

print("Committing Batch 5...")
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
