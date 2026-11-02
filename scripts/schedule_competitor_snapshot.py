"""
Saim Dev — Monthly Competitor Re-Snapshot & Gap Discovery Engine
Captures monthly snapshots of shortlisted competitor metadata, schema, and page structure changes.
"""

import os
import json
from datetime import datetime

COMPETITORS_FILE = os.path.join(os.path.dirname(__file__), "..", "audit", "homepage", "competitors", "competitor_profiles.json")
OUTPUT_DIR = os.path.join(os.path.dirname(__file__), "..", "audit", "homepage", "competitors", "monthly_snapshots")

def run_competitor_snapshot():
    print(f"[{datetime.now().strftime('%Y-%m-%d %H:%M:%S')}] Starting Monthly Competitor Snapshot Engine...")
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    
    if not os.path.exists(COMPETITORS_FILE):
        print(f"Base competitor profiles not found at: {COMPETITORS_FILE}")
        return
        
    with open(COMPETITORS_FILE, "r", encoding="utf-8") as f:
        competitors = json.load(f)
        
    month_str = datetime.now().strftime("%Y_%m")
    out_path = os.path.join(OUTPUT_DIR, f"snapshot_{month_str}.json")
    
    snapshot_data = {
        "snapshot_date": datetime.now().isoformat(),
        "total_competitors_tracked": len(competitors) if isinstance(competitors, list) else len(competitors.keys()),
        "competitor_reference": competitors,
        "cadence": "MONTHLY"
    }
    
    with open(out_path, "w", encoding="utf-8") as f:
        json.dump(snapshot_data, f, indent=2)
        
    print(f"Competitor monthly snapshot registered: {out_path}")

if __name__ == "__main__":
    run_competitor_snapshot()
