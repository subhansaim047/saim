import urllib.request
import time
import sys

sys.stdout.reconfigure(encoding='utf-8')

url = "https://www.saimdev.site"
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Accept-Encoding': 'gzip, deflate, br'
}

print(f"Benchmarking real HTTP response time for: {url}\n")

timings = []
for i in range(5):
    start = time.perf_counter()
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req, timeout=10) as resp:
            content = resp.read()
            elapsed = (time.perf_counter() - start) * 1000  # ms
            status = resp.status
            size_kb = len(content) / 1024
            headers_dict = dict(resp.headers)
            timings.append(elapsed)
            print(f"Run {i+1}: Status {status} | Size: {size_kb:.1f} KB | Total time: {elapsed:.1f} ms")
            if i == 0:
                print(f"   Vercel Cache: {headers_dict.get('x-vercel-cache', 'N/A')}")
                print(f"   Age: {headers_dict.get('age', 'N/A')}s")
                print(f"   Server: {headers_dict.get('server', 'N/A')}")
    except Exception as e:
        print(f"Run {i+1}: Failed with error: {e}")

if timings:
    avg = sum(timings) / len(timings)
    fastest = min(timings)
    print(f"\nAverage Response Time: {avg:.1f} ms ({avg/1000:.2f}s)")
    print(f"Fastest Response Time: {fastest:.1f} ms ({fastest/1000:.2f}s)")
    if avg < 1000:
        print("RESULT: UNDER 1 SECOND (SUB-SECOND) CONFIRMED!")
    else:
        print("RESULT: EXCEEDS 1 SECOND")
