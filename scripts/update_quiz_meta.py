import json

path = "src/data/core_metadata.json"
with open(path, "r", encoding="utf-8") as f:
    data = json.load(f)

data["food-safety-quiz"] = {
    "title": "Level 2 Food Hygiene Practice Test UK | Free Quiz | Saim Dev",
    "desc": "Free UK Level 2 food hygiene practice test. 25 official mock exam questions with answers, statutory temperatures, and printable staff training scorecards.",
    "howTo": [
        "Select either Exam Mode (graded with an 80% pass threshold) or Study Mode (instant guidance hints).",
        "Answer 25 multiple-choice questions covering statutory temperature limits, allergens, and HACCP.",
        "Review the detailed FSA guidance notes and print your completed assessment scorecard for staff records."
    ]
}

with open(path, "w", encoding="utf-8") as f:
    json.dump(data, f, indent=2)

print("Updated food-safety-quiz in core_metadata.json")
