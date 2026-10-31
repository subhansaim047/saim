import fs from "fs";

async function pingIndexNow() {
  console.log("Reading sitemap.xml for IndexNow batch submission...");
  const sitemapXml = fs.readFileSync("public/sitemap.xml", "utf8");
  const locRegex = /<loc>(https:\/\/www\.saimdev\.site[^<]*)<\/loc>/g;
  const urlList = [];
  let match;
  while ((match = locRegex.exec(sitemapXml)) !== null) {
    urlList.push(match[1]);
  }

  console.log(`Found ${urlList.length} canonical URLs for IndexNow.`);
  const apiKey = "e9b867c458a24db9a098d6c7619280df";
  const payload = {
    host: "www.saimdev.site",
    key: apiKey,
    keyLocation: `https://www.saimdev.site/${apiKey}.txt`,
    urlList: urlList
  };

  try {
    console.log("Submitting to IndexNow API (https://api.indexnow.org/indexnow)...");
    const res = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify(payload)
    });

    console.log(`IndexNow Response Status: ${res.status} ${res.statusText}`);
    if (res.status === 200 || res.status === 202) {
      console.log("✅ Successfully submitted URLs to IndexNow (Bing / Yandex / Search Engines)!");
    } else {
      const text = await res.text();
      console.log(`Response body: ${text}`);
    }
  } catch (err) {
    console.error("IndexNow ping failed:", err.message);
  }
}

pingIndexNow();
