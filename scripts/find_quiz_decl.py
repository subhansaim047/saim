path = r"C:\Users\subhan\.gemini\antigravity\scratch\saim\src\components\tools\FoodSafetyQuizTool.tsx"
with open(path, "r", encoding="utf-8") as f:
    text = f.read()
pos = text.find("export function FoodSafetyQuizTool")
if pos == -1:
    pos = text.find("export const FoodSafetyQuizTool")
print(text[pos:pos+150])
