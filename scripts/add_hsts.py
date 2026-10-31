with open('next.config.mjs', 'r', encoding='utf-8') as f:
    c = f.read()

hsts_block = """          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
"""

if 'Strict-Transport-Security' not in c:
    c = c.replace("headers: [", "headers: [\n" + hsts_block, 1)
    with open('next.config.mjs', 'w', encoding='utf-8') as f:
        f.write(c)
    print("HSTS header added successfully!")
else:
    print("HSTS already present.")
