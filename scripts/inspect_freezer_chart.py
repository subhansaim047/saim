import os
import re

path = r"C:\Users\subhan\.gemini\antigravity\scratch\saim\src\data\saim_templates.ts"
with open(path, "r", encoding="utf-8") as f:
    text = f.read()

pos = text.find('"freezer-temperature-chart"')
if pos == -1:
    pos = text.find("'freezer-temperature-chart'")
print("Found position:", pos)
if pos != -1:
    start = text.rfind('{', 0, pos)
    end = text.find('}', pos)
    print("Entry:", text[start:end+1])
