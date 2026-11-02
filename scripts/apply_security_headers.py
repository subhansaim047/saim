import os

config_path = r"C:\Users\subhan\.gemini\antigravity\scratch\saim\next.config.mjs"
with open(config_path, "r", encoding="utf-8") as f:
    content = f.read()

target = "const nextConfig = {\n  reactStrictMode: true,\n  async redirects() {"
replacement = """const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://www.google-analytics.com; frame-src 'none'; object-src 'none'; base-uri 'self';",
          },
        ],
      },
    ];
  },
  async redirects() {"""

if target in content:
    content = content.replace(target, replacement, 1)
    with open(config_path, "w", encoding="utf-8") as f:
        f.write(content)
    print("SUCCESS: Updated next.config.mjs (LF)")
else:
    target_crlf = target.replace("\n", "\r\n")
    replacement_crlf = replacement.replace("\n", "\r\n")
    if target_crlf in content:
        content = content.replace(target_crlf, replacement_crlf, 1)
        with open(config_path, "w", encoding="utf-8") as f:
            f.write(content)
        print("SUCCESS: Updated next.config.mjs (CRLF)")
    else:
        print("FAILED: Target not found")
