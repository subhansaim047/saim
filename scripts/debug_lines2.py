with open('src/components/BlogPost2Page.tsx', 'r', encoding='utf-8') as f:
    l2 = f.readlines()
with open('src/components/BlogPost3Page.tsx', 'r', encoding='utf-8') as f:
    l3 = f.readlines()

with open('debug_output2.txt', 'w', encoding='utf-8') as out:
    out.write("=== BlogPost2Page top ===\n")
    for i in range(70, min(95, len(l2))):
        out.write(f"{i+1}: {repr(l2[i])}\n")
    out.write("=== BlogPost2Page bottom ===\n")
    for i in range(max(0, len(l2)-35), len(l2)):
        out.write(f"{i+1}: {repr(l2[i])}\n")
    out.write("=== BlogPost3Page top ===\n")
    for i in range(40, min(65, len(l3))):
        out.write(f"{i+1}: {repr(l3[i])}\n")
    out.write("=== BlogPost3Page bottom ===\n")
    for i in range(max(0, len(l3)-35), len(l3)):
        out.write(f"{i+1}: {repr(l3[i])}\n")

print("Written to debug_output2.txt")
