import os
import re
import json

def audit():
    with open('src/data/saim_templates.ts', 'r', encoding='utf-8') as f:
        content = f.read()

    # Find all templates
    template_ids = re.findall(r'"id":\s*"template-(\d+)"', content)
    print(f"Total template entries in FOOD_SAFETY_TEMPLATES: {len(template_ids)}")

    # Check types
    types = re.findall(r'"type":\s*"([^"]+)"', content)
    type_counts = {}
    for t in types:
        type_counts[t] = type_counts.get(t, 0) + 1
    print(f"Template types breakdown: {type_counts}")

    # Inspect app/food-safety-templates/[slug]/page.tsx to see what gets rendered
    with open('app/food-safety-templates/[slug]/page.tsx', 'r', encoding='utf-8') as f:
        detail_code = f.read()

    # Check how many specific tools or interactive components are mapped
    interactive_comps = re.findall(r'(\w+Tool)', detail_code)
    unique_tool_comps = sorted(list(set(interactive_comps)))
    print(f"Interactive tool components referenced in template detail page: {len(unique_tool_comps)} -> {unique_tool_comps}")

    # Inspect app/tools/
    tools_dir = 'app/tools'
    dedicated_routes = [d for d in os.listdir(tools_dir) if os.path.isdir(os.path.join(tools_dir, d))]
    print(f"Dedicated calculator routes under app/tools: {len(dedicated_routes)} -> {dedicated_routes}")

    # Check for any external database or server-side API
    # package.json dependencies
    with open('package.json', 'r', encoding='utf-8') as f:
        pkg_data = json.load(f)
    deps = {**pkg_data.get('dependencies', {}), **pkg_data.get('devDependencies', {})}
    db_packages = [k for k in deps if any(db in k.lower() for db in ['sql', 'mongo', 'prisma', 'supabase', 'firebase', 'dynamo', 'orm'])]
    print(f"Database / ORM packages in package.json: {db_packages}")

    # Check how data is stored in the interactive tools
    # e.g., localStorage, React useState
    storage_keys = []
    comp_tools_dir = 'src/components/tools'
    for f in os.listdir(comp_tools_dir):
        if f.endswith('.tsx'):
            with open(os.path.join(comp_tools_dir, f), 'r', encoding='utf-8') as tf:
                tcontent = tf.read()
                matches = re.findall(r'localStorage\.(?:getItem|setItem)\(["\']([^"\']+)["\']', tcontent)
                storage_keys.extend(matches)
    print(f"Client-side localStorage keys used across tools: {sorted(list(set(storage_keys)))}")

if __name__ == '__main__':
    audit()
