with open('src/components/BlogPost1Page.tsx', 'r', encoding='utf-8') as f:
    lines = f.readlines()
with open('debug_output.txt', 'w', encoding='utf-8') as out:
    for i in range(max(0, len(lines)-45), len(lines)):
        out.write(f"{i+1}: {repr(lines[i])}\n")
print("Written bottom of BlogPost1Page to debug_output.txt")
