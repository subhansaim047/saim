import os, glob, re
from bs4 import BeautifulSoup

STOP_WORDS = {
    "a", "about", "above", "after", "again", "against", "all", "am", "an", "and", "any", "are", "aren't",
    "as", "at", "be", "because", "been", "before", "being", "below", "between", "both", "but", "by",
    "can't", "cannot", "could", "couldn't", "did", "didn't", "do", "does", "doesn't", "doing", "don't",
    "down", "during", "each", "few", "for", "from", "further", "had", "hadn't", "has", "hasn't", "have",
    "haven't", "having", "he", "he'd", "he'll", "he's", "her", "here", "here's", "hers", "herself", "him",
    "himself", "his", "how", "how's", "i", "i'd", "i'll", "i'm", "i've", "if", "in", "into", "is", "isn't",
    "it", "it's", "its", "itself", "let's", "me", "more", "most", "mustn't", "my", "myself", "no", "nor",
    "not", "of", "off", "on", "once", "only", "or", "other", "ought", "our", "ours", "ourselves", "out",
    "over", "own", "same", "shan't", "she", "she'd", "she'll", "she's", "should", "shouldn't", "so", "some",
    "such", "than", "that", "that's", "the", "their", "theirs", "them", "themselves", "then", "there",
    "there's", "these", "they", "they'd", "they'll", "they're", "they've", "this", "those", "through", "to",
    "too", "under", "until", "up", "very", "was", "wasn't", "we", "we'd", "we'll", "we're", "we've", "were",
    "weren't", "what", "what's", "when", "when's", "where", "where's", "which", "while", "who", "who's",
    "whom", "why", "why's", "with", "won't", "would", "wouldn't", "you", "you'd", "you'll", "you're",
    "you've", "your", "yours", "yourself", "yourselves", "&", "vs", "amp"
}

def clean_words(text):
    words = re.findall(r"[a-zA-Z0-9'-]+", text.lower())
    clean = []
    for w in words:
        w = w.strip("'-")
        if len(w) > 2 and w not in STOP_WORDS and not w.isdigit():
            clean.append(w)
    return clean

def audit():
    # Find all generated HTML files in .next/server/app
    html_files = glob.glob(".next/server/app/**/*.html", recursive=True)
    if not html_files:
        print("No .next/server/app HTML files found! Checking public or app...")
        return

    print(f"Analyzing {len(html_files)} pre-rendered HTML files for H1 keyword usage...\n")

    results = []
    for path in html_files:
        rel_route = path.replace(".next\\server\\app", "").replace(".next/server/app", "").replace("\\", "/").replace(".html", "")
        if rel_route.endswith("/index"):
            rel_route = rel_route[:-6]
        if not rel_route:
            rel_route = "/"

        # Skip error pages
        if rel_route in ["/_not-found", "/500"]:
            continue

        with open(path, "r", encoding="utf-8", errors="ignore") as f:
            content = f.read()

        soup = BeautifulSoup(content, "html.parser")
        h1s = soup.find_all("h1")

        if not h1s:
            results.append({
                "route": rel_route,
                "status": "NO_H1",
                "h1": "",
                "missing": []
            })
            continue

        h1_text = " ".join([h.get_text() for h in h1s]).strip()
        h1_words = list(dict.fromkeys(clean_words(h1_text)))

        # Extract body text excluding the H1 itself
        for h in soup.find_all("h1"):
            h.decompose()
        # Also remove script and style
        for s in soup.find_all(["script", "style"]):
            s.decompose()

        body_text = soup.get_text(separator=" ").lower()
        body_words = set(clean_words(body_text))

        missing_words = [w for w in h1_words if w not in body_words]
        results.append({
            "route": rel_route,
            "status": "MISSING_WORDS" if missing_words else "OK",
            "h1": h1_text,
            "h1_words": h1_words,
            "missing": missing_words
        })

    flagged = [r for r in results if r["status"] != "OK"]
    print(f"Total routes scanned: {len(results)}")
    print(f"Routes with H1 words missing in content: {len(flagged)}\n")

    for r in flagged:
        print(f"Route: {r['route']}")
        print(f"  H1: \"{r['h1']}\"")
        print(f"  Missing words in content: {r['missing']}")
        print()

if __name__ == "__main__":
    audit()
