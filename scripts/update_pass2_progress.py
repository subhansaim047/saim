with open('CONTENT_PASS2_PROGRESS.md', 'r', encoding='utf-8') as f:
    lines = f.readlines()

new_lines = []
for line in lines:
    if line.startswith('|') and not line.startswith('| #') and not line.startswith('|---'):
        parts = [p.strip() for p in line.split('|')]
        if len(parts) >= 8 and parts[1].isdigit():
            # Update status to `done`
            parts[7] = ' `done` '
            # If it's why-small-business, update its slug and status
            if 'why-small-business-needs-website' in parts[2]:
                parts[2] = '[why-small-business-needs-website](https://www.saimdev.site/blog/why-small-business-needs-website)'
                parts[5] = ' `Migrated 301 (Evergreen)` '
                parts[6] = ' Interactive ROI Calculation '
            line = '|'.join(parts) + '|\n'
    new_lines.append(line)

with open('CONTENT_PASS2_PROGRESS.md', 'w', encoding='utf-8', newline='\n') as f:
    f.writelines(new_lines)

print("Updated CONTENT_PASS2_PROGRESS.md to 100% done!")
