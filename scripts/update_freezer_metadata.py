import json

path = r"C:\Users\subhan\.gemini\antigravity\scratch\saim\src\data\core_metadata.json"
with open(path, "r", encoding="utf-8") as f:
    meta = json.load(f)

title = "Freezer Temperature Log Sheet UK | Free Printable Chart | Saim Dev"
desc = "Free UK commercial freezer temperature log sheet. Daily AM and PM temperature tracking, EHO corrective action prompts, and printable SFBB kitchen chart."

print("Title len:", len(title))
print("Desc len:", len(desc))

meta["freezer-temperature-chart"] = {
    "title": title,
    "desc": desc,
    "howTo": [
        "Select your commercial freezer unit and configure opening AM and closing PM check times.",
        "Record internal probe temperatures twice daily to verify units remain at or below -18°C.",
        "Review automatic compliance badges and log root causes for any defrost or temperature spikes.",
        "Execute the built-in thermometer probe ice point calibration check monthly for EHO audits.",
        "Print the official UK FSA SFBB weekly record sheet or export CSV data for your HACCP binder."
    ]
}

with open(path, "w", encoding="utf-8") as f:
    json.dump(meta, f, indent=2, ensure_ascii=False)

print("Updated core_metadata.json for freezer-temperature-chart")
