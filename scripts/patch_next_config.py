with open("next.config.mjs", "r", encoding="utf-8") as f:
    content = f.read()

target = "frame-src 'none';"
replacement = "frame-src 'self';"
if target in content:
    content = content.replace(target, replacement)
    print("Replaced frame-src 'none' with 'self'")
else:
    print("Target frame-src not found!")

# Add rewrites if not present
if "async rewrites()" not in content:
    idx = content.find("async redirects()")
    if idx != -1:
        rewrites_code = """  async rewrites() {
    return [
      {
        source: '/idreesleather',
        destination: '/idreesleather/index.html',
      },
    ];
  },
"""
        content = content[:idx] + rewrites_code + content[idx:]
        print("Added async rewrites()")

with open("next.config.mjs", "w", encoding="utf-8") as f:
    f.write(content)
