with open("src/data/core_metadata.ts", "r", encoding="utf-8") as f:
    lines = f.readlines()

print("File has", len(lines), "lines")
print("First 25 lines:")
for l in lines[:25]:
    print(l, end="")
