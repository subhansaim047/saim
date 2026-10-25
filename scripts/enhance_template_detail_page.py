# -*- coding: utf-8 -*-
import os

detail_page_path = "src/components/TemplateDetailPage.tsx"
with open(detail_page_path, "r", encoding="utf-8") as f:
    content = f.read()

# 1. Add TOOL_DEEP_CONTENT import
import_marker = 'import { FoodSafetyDisclaimer } from "./FoodSafetyDisclaimer";'
deep_import = '''import { FoodSafetyDisclaimer } from "./FoodSafetyDisclaimer";
import { TOOL_DEEP_CONTENT } from "@/data/tool_deep_content";'''
if import_marker in content and 'import { TOOL_DEEP_CONTENT }' not in content:
    content = content.replace(import_marker, deep_import, 1)

# 2. Update Header link to /tools
content = content.replace(
    'href="/food-safety-templates" className="flex items-center gap-2 text-xs font-bold text-gray-700 hover:text-black">\n          <ArrowLeft className="w-4 h-4" />\n          <span>Back to Templates Hub</span>',
    'href="/tools" className="flex items-center gap-2 text-xs font-bold text-gray-700 hover:text-black">\n          <ArrowLeft className="w-4 h-4" />\n          <span>Back to Kitchen Tools Hub</span>'
)
content = content.replace('<span>Back to Templates Hub</span>', '<span>Back to Kitchen Tools Hub</span>')
content = content.replace('href="/food-safety-templates"', 'href="/tools"')

# 3. Add deepContent logic inside component
component_marker = 'export const TemplateDetailPage: React.FC<Props> = ({ template }) => {'
deep_logic = '''export const TemplateDetailPage: React.FC<Props> = ({ template }) => {
  const deepContent = TOOL_DEEP_CONTENT[template.slug];'''

if component_marker in content and 'const deepContent = TOOL_DEEP_CONTENT' not in content:
    content = content.replace(component_marker, deep_logic, 1)

with open(detail_page_path, "w", encoding="utf-8") as f:
    f.write(content)

print("Updated imports and links in TemplateDetailPage.tsx")
