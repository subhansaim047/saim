with open("scripts/test_cooling_guide_draft.py", "r", encoding="utf-8") as f:
    text = f.read()

# remove trailing '''
text = text.rstrip().rstrip("'''").rstrip()
with open("scripts/test_cooling_guide_draft.py", "w", encoding="utf-8") as f:
    f.write(text)
print("Fixed script")
