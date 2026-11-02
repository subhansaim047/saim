from bs4 import BeautifulSoup
import re, json

def parse():
    with open("scripts/seobility_response.html", "r", encoding="utf-8", errors="ignore") as f:
        html = f.read()

    soup = BeautifulSoup(html, "html.parser")

    # Find title
    print("Page Title:", soup.title.string if soup.title else "No title")

    # Overall score
    score_el = soup.find(class_=re.compile(r"score|progress-circle|gauge|circle", re.I))
    # Look for text with %
    print("\n=== SCORES FOUND ===")
    for el in soup.find_all(class_=re.compile(r"score|percent|rating|badge", re.I)):
        txt = el.get_text().strip()
        if "%" in txt or any(char.isdigit() for char in txt):
            print(f"  {el.get('class')}: {txt[:80]}")

    # Look for error / warning blocks
    print("\n=== ISSUES / WARNINGS / TIPS ===")
    alerts = soup.find_all(class_=re.compile(r"alert|warning|danger|error|tip|hint|task|check-result|result-box", re.I))
    print(f"Total alert/result elements: {len(alerts)}")

    for idx, a in enumerate(alerts[:30]):
        text = " ".join(a.get_text().split())
        if len(text) > 10 and len(text) < 300:
            print(f"[{idx+1}] ({a.get('class')}): {text}")

    # Extract all check titles and results
    print("\n=== CHECK SECTIONS ===")
    sections = soup.find_all(["h2", "h3", "h4"])
    for s in sections:
        txt = s.get_text().strip()
        if any(w in txt.lower() for w in ["meta", "quality", "structure", "link", "server", "content", "technical", "mobile", "social"]):
            print(f"Heading: {txt}")

if __name__ == "__main__":
    parse()
