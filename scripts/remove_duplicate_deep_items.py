# -*- coding: utf-8 -*-
with open('src/data/tool_deep_content.ts', 'r', encoding='utf-8') as f:
    text = f.read()

# Find the second occurrence of "kitchen-prep-list-template"
import re
matches = [m.start() for m in re.finditer(r'"kitchen-prep-list-template":', text)]
if len(matches) > 1:
    second_occ = matches[1]
    # In the second occurrence block, we want to remove from "kitchen-prep-list-template": to the end of the items we added
    fallback_pos = text.find('export const FALLBACK_DEEP_CONTENT')
    end_obj = text.rfind('};', 0, fallback_pos)
    
    # We want to keep everything before second_occ, but check if there's a trailing comma needed
    prefix = text[:second_occ].rstrip()
    if prefix.endswith(','):
        # remove trailing comma since it's the last item
        prefix = prefix[:-1]
    
    suffix = "\n};\n\n" + text[fallback_pos:]
    new_text = prefix + suffix
    
    with open('src/data/tool_deep_content.ts', 'w', encoding='utf-8') as f:
        f.write(new_text)
    print("Removed duplicate second occurrence of kitchen-prep-list-template and cooking-log-template.")
else:
    print("No duplicates found.")
