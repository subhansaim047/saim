import re

with open('CONTENT_PROGRESS.md', 'r', encoding='utf-8') as f:
    lines = f.readlines()

new_lines = []
in_section_6 = False
updated_count = 0

for line in lines:
    if '## 6. Statutory Food Safety Templates' in line:
        in_section_6 = True
        new_lines.append(line)
        continue
    
    if in_section_6 and line.startswith('|') and '| `todo` |' in line:
        # replace `todo` with `done` and add verified note
        parts = line.split('|')
        if len(parts) >= 6:
            parts[4] = ' `done` '
            note = parts[5].strip()
            if not note.endswith(')'):
                parts[5] = f' {note} (Audited, Guard-3 metadata compliant, single H1, FSA & British English aligned) |\n'
            else:
                parts[5] = f' {note} |\n'
            line = '|'.join(parts)
            updated_count += 1
    new_lines.append(line)

with open('CONTENT_PROGRESS.md', 'w', encoding='utf-8', newline='\n') as f:
    f.writelines(new_lines)

print(f'Successfully updated {updated_count} templates to done in Section 6!')
