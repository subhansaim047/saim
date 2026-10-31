with open('CONTENT_PASS2_PROGRESS.md', 'r', encoding='utf-8') as f:
    lines = f.readlines()

formatted_lines = []
for line in lines:
    if line.startswith('|') and not line.startswith('| #') and not line.startswith('|---'):
        parts = [p.strip() for p in line.split('|')]
        # Filter out empty leading/trailing elements from split
        parts = [p for p in parts if p != '']
        if len(parts) >= 7 and parts[0].isdigit():
            idx = parts[0]
            name = parts[1]
            kw = parts[2]
            intent = parts[3]
            slug_status = parts[4]
            unique_elem = parts[5]
            status = '`done`'
            src = parts[7] if len(parts) > 7 else (parts[6] if len(parts) > 6 else '')
            if src == '`done`' or src == '`todo`':
                src = ''
            formatted_lines.append(f"| {idx} | {name} | {kw} | {intent} | {slug_status} | {unique_elem} | {status} | {src} |\n")
        else:
            formatted_lines.append(line)
    else:
        formatted_lines.append(line)

with open('CONTENT_PASS2_PROGRESS.md', 'w', encoding='utf-8', newline='\n') as f:
    f.writelines(formatted_lines)

print("Properly formatted CONTENT_PASS2_PROGRESS.md")
