import re
import json
import csv
import os

repo_dir = r"C:\Users\subhan\.gemini\antigravity\scratch\saim"

# 1. Parse templates from saim_templates.ts
with open(os.path.join(repo_dir, "src/data/saim_templates.ts"), "r", encoding="utf-8") as f:
    content = f.read()

json_match = re.search(r'export const FOOD_SAFETY_TEMPLATES: FoodSafetyTemplate\[\] = (\[[\s\S]*?\]);', content)
if not json_match:
    raise Exception("Could not find FOOD_SAFETY_TEMPLATES array in src/data/saim_templates.ts")

templates = json.loads(json_match.group(1))
print(f"Loaded {len(templates)} templates from saim_templates.ts")

# 2. Load core metadata
core_meta = {}
try:
    with open(os.path.join(repo_dir, "src/data/core_metadata.ts"), "r", encoding="utf-8") as f:
        meta_content = f.read()
        # Parse titles and descs
        blocks = re.findall(r'\"([a-z0-9\-]+)\":\s*\{\s*title:\s*\"([^\"]+)\",\s*desc:\s*\"([^\"]+)\"', meta_content)
        for b in blocks:
            core_meta[b[0]] = {"title": b[1], "desc": b[2]}
except Exception as e:
    print(f"Warning reading core_metadata: {e}")

# 3. Load deep content
deep_content_slugs = set()
try:
    with open(os.path.join(repo_dir, "src/data/tool_deep_content.ts"), "r", encoding="utf-8") as f:
        dc_text = f.read()
        dc_slugs = re.findall(r'\"([a-z0-9\-]+)\":\s*\{', dc_text)
        deep_content_slugs = set(dc_slugs)
except Exception as e:
    print(f"Warning reading deep_content: {e}")

# 4. Load keywords dataset for keyword matching & search demand
keyword_map = {}
kw_file = os.path.join(repo_dir, "audit/keywords_300_dataset.csv")
if os.path.exists(kw_file):
    with open(kw_file, "r", encoding="utf-8") as f:
        reader = csv.DictReader(f)
        for row in reader:
            target_url = row.get("Target URL", "")
            slug = target_url.strip("/").split("/")[-1]
            if slug:
                keyword_map[slug] = {
                    "keyword": row.get("Keyword", ""),
                    "vol_uk": int(row.get("Est. Monthly Vol (UK)", 0) or 0),
                    "kd": int(row.get("Keyword Difficulty (KD)", 0) or 0),
                    "priority": row.get("Priority", "Medium")
                }

# Opportunity heuristic: high search volume, low KD
def calculate_opportunity(t, kw_info):
    if kw_info:
        vol = kw_info["vol_uk"]
        kd = max(kw_info["kd"], 1)
        # Winnability = 100 - kd
        winnability = max(100 - kd, 10)
        score = (vol + 50) * (winnability / 100.0)
        return round(score, 1)
    
    # Heuristic based on type and title
    cat_weights = {
        "smart_tool": 85,
        "chart": 70,
        "checklist": 65,
        "log": 55,
        "poster": 45
    }
    base = cat_weights.get(t.get("type", ""), 50)
    title = t.get("title", "").lower()
    if any(k in title for k in ["temperature", "allergen", "cleaning", "haccp", "sfbb", "hygiene"]):
        base += 30
    return float(base)

# Build inventory
tracker = []
for i, t in enumerate(templates):
    slug = t["slug"]
    meta = core_meta.get(slug, {})
    title = meta.get("title", f"{t['title']} | Free Food Safety Download | Saim Dev")
    desc = meta.get("desc", t.get("desc", ""))
    h1 = t["title"]
    
    # Calculate word count
    # Estimate from deep content or fallback
    has_deep = slug in deep_content_slugs
    est_words = 1200 if has_deep else 450
    
    kw_info = keyword_map.get(slug)
    main_kw = kw_info["keyword"] if kw_info else f"{t['title'].lower()} uk"
    opp_score = calculate_opportunity(t, kw_info)
    
    status = "COMPLETED" if (has_deep and meta) else "PENDING"
    
    row = {
        "index": i + 1,
        "id": t["id"],
        "name": t["title"],
        "slug": slug,
        "url": f"https://www.saimdev.site/food-safety-templates/{slug}",
        "category": t.get("type", "chart"),
        "title": title,
        "meta_description": desc,
        "h1": h1,
        "word_count": est_words,
        "has_deep_content": has_deep,
        "main_keyword": main_kw,
        "opportunity_score": opp_score,
        "current_ranking": "Top 10-20 (indexed)" if has_deep else "Unranked / Baseline",
        "status": status,
        "competitors_analyzed": []
    }
    tracker.append(row)

# Sort by opportunity score descending
tracker.sort(key=lambda x: x["opportunity_score"], reverse=True)

# Assign priority ranks
for idx, r in enumerate(tracker):
    r["priority_rank"] = idx + 1

# Save tracker JSON
tracker_json_path = os.path.join(repo_dir, "audit/tools-seo-tracker.json")
with open(tracker_json_path, "w", encoding="utf-8") as f:
    json.dump(tracker, f, indent=2)

# Save tracker CSV
tracker_csv_path = os.path.join(repo_dir, "audit/tools-seo-tracker.csv")
with open(tracker_csv_path, "w", encoding="utf-8", newline="") as f:
    fieldnames = [
        "priority_rank", "id", "name", "slug", "category", "opportunity_score",
        "main_keyword", "url", "word_count", "has_deep_content", "status"
    ]
    writer = csv.DictWriter(f, fieldnames=fieldnames, extrasaction='ignore')
    writer.writeheader()
    for r in tracker:
        writer.writerow(r)

print(f"Master tracker created with {len(tracker)} tools.")
print(f"Top 10 highest opportunity tools:")
for r in tracker[:10]:
    print(f"#{r['priority_rank']} | {r['name']} ({r['slug']}) | Opp Score: {r['opportunity_score']} | KW: {r['main_keyword']} | Status: {r['status']}")

completed_count = sum(1 for r in tracker if r["status"] == "COMPLETED")
pending_count = sum(1 for r in tracker if r["status"] == "PENDING")
print(f"\nInventory Summary: {completed_count} COMPLETED | {pending_count} PENDING | Total: {len(tracker)}")
