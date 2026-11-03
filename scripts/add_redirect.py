with open("next.config.mjs", "r", encoding="utf-8") as f:
    text = f.read()

target = "destination: '/blog/why-small-business-needs-website',\n        permanent: true,\n      },"
addition = """
      // Demo Showcase Routes
      {
        source: '/thejacketmaker',
        destination: '/thejacketmaker/index.html',
        permanent: true,
      },"""

if target in text:
    text = text.replace(target, target + addition)
else:
    target_crlf = "destination: '/blog/why-small-business-needs-website',\r\n        permanent: true,\r\n      },"
    text = text.replace(target_crlf, target_crlf + addition.replace("\n", "\r\n"))

with open("next.config.mjs", "w", encoding="utf-8") as f:
    f.write(text)

print("Updated next.config.mjs successfully!")
