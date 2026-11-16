import type { NextjsGuideData } from "@/components/blog/NextjsGuideArticle";

export const NEXTJS_MIGRATION_GUIDE: NextjsGuideData = {
  slug: "migrate-wordpress-webflow-to-nextjs-seo-guide",
  categoryLabel: "Migrations · Zero SEO Loss",
  h1: "How to Migrate WordPress or Webflow to Next.js Without Losing Google Rankings",
  breadcrumbTitle: "WordPress & Webflow Migration",
  directAnswer:
    "Migrating an established UK or US site from WordPress or Webflow to Next.js preserves and often strengthens organic rankings when every legacy URL gets a single-hop permanent 301 redirect in next.config.mjs and vercel.json, self-referencing canonicals match the new hierarchy, XML sitemaps exclude redirecting URLs, and automated prebuild scripts catch regressions before DNS switchover.",
  publishedDisplay: "Nov 16, 2026",
  updatedDisplay: "Nov 16, 2026",
  readTime: "12 min read",
  keyTakeaways: [
    "Export every indexed URL from Google Search Console, sitemap.xml, and Analytics before touching designs so zero ranking URLs become 404 errors.",
    "Configure clean permanent HTTP redirects at the edge (next.config.mjs + vercel.json) with maximum 1 hop directly to canonical destinations.",
    "Never leave redirecting legacy paths inside public/sitemap.xml or sitemap.ts — search engines treat sitemap redirects as mixed indexation signals.",
    "Match URL-by-URL metadata, H1 relevance, internal anchor equity, and @graph JSON-LD before pointing your apex domain and www CNAME.",
  ],
  sections: [
    {
      id: "why-migrations-drop",
      title: "Why Website Redesigns & Rebuilds Accidentally Tank Traffic",
      paragraphs: [
        "Most post-launch organic traffic crashes have nothing to do with Google disliking React or Next.js. Rankings collapse when development teams ship prettier layouts while silently breaking URL slugs, changing H1 intent, stripping internal footer/body links, or leaving old WordPress /category/, /tag/, or Webflow query-string URLs returning 404 Not Found.",
        "When UK and US businesses move off Elementor, Divi, or Webflow onto Next.js 16 App Router, preserving accumulated backlink equity across old URLs requires treating URL parity and redirect engineering as first-class code milestones alongside UI components.",
      ],
      table: {
        headers: ["Migration Failure Mode", "Google Indexing Impact", "Next.js Engineering Prevention"],
        rows: [
          ["Missing 301 on legacy blog/service slugs", "Backlink authority lost; Search Console 404 spikes", "Exhaustive permanent redirect map tested pre-cutover"],
          ["Redirect chains (/old -> /old/ -> /new)", "Crawl budget dilution & delayed signal pass", "Trailing-slash normalization + direct 1-hop targets"],
          ["Redirecting URLs left inside sitemap.xml", "Search Console 'Page with redirect' errors", "Programmatic sitemap generation synced with routes"],
          ["Changed H1 / deleted topical subheadings", "Keyword relevance drift across primary queries", "Content & heading parity audit per money route"],
          ["Dropped Schema.org provider/entity links", "Lost brand entity disambiguation in SERP/LLMs", "Unified JSON-LD @graph wired in Server Components"],
        ],
      },
    },
    {
      id: "four-phase-workflow",
      title: "The 4-Stage Zero-Loss Next.js Migration Workflow",
      paragraphs: [
        "Every WordPress-to-Next.js or Webflow-to-Next.js migration we run for UK and US clients follows a deterministic four-stage checklist verified in staging before public DNS cutover.",
      ],
      bullets: [
        {
          title: "Stage 1: Full Legacy URL Inventory & Traffic Weighting",
          detail:
            "Pull 16 months of landing page clicks/impressions from Search Console plus external backlink targets from Ahrefs or Bing Webmaster Tools. Flag every URL earning impressions, conversions, or referring domains — including old PDF assets, image attachments, and regional landing pages.",
        },
        {
          title: "Stage 2: Keep, Consolidate, or 301 Redirect Mapping",
          detail:
            "Keep high-performing URL slugs verbatim wherever logical. Consolidate outdated or cannibalizing thin pages via single-hop permanent 301/308 rules toward the closest topical hub — never redirect unrelated old posts lazily to the homepage, which Google often treats as a soft 404.",
        },
        {
          title: "Stage 3: Staging Parity, Internal Anchors & Schema Wiring",
          detail:
            "Verify every kept or consolidated Next.js route carries matching or stronger editorial depth, crisp heading hierarchy, relative internal link equity inside bodies and footers, and validated JSON-LD Organization/Service/BlogPosting markup.",
        },
        {
          title: "Stage 4: Cutover Verification & Search Console Resubmission",
          detail:
            "Keep old origin backups warm for 30 days, deploy production Next.js build on Vercel/Cloudflare, run automated header checks on the top 100 legacy URLs to confirm instant 301/200 codes, and submit clean XML sitemaps in Search Console.",
        },
      ],
    },
    {
      id: "webflow-specific-rules",
      title: "Webflow-Specific Gotchas When Porting to Next.js",
      paragraphs: [
        "Many fast-growing UK and US startups start on Webflow before outgrowing CMS collection limits, per-locale pricing walls, or external script overhead. Porting custom Webflow builds cleanly into Next.js requires catching subtle front-end traps during reconstruction.",
        "First, if pulling or rebuilding downloaded Webflow static stylesheets/scripts temporarily during staged ports, strip stale Subresource Integrity hashes (`integrity=\"...\"`) whenever editing files so browsers never block modified CSS bundles. Second, inspect card wrapper `<a>` tags: setting `display: none` to hide a dead child link on a Webflow card accidentally hides the whole clickable service card — replace or unwrap cleanly in React JSX instead.",
        "Finally, verify CSS decorative `background-image` gradients and absolute `/` root asset paths across clean Vercel routes (never relative `./css/...` paths that break inside nested App Router directories!).",
      ],
    },
    {
      id: "wordpress-content-architecture",
      title: "Handling WordPress Taxonomies, Media & Redirect Edge Cases",
      paragraphs: [
        "WordPress installations accumulate hidden archives over years of publishing: author archives, date URLs, attachment pages, `/feed/` endpoints, and query-string URLs. Migrating cleanly onto Next.js removes crawl clutter while protecting genuine articles.",
        "If an editorial team needs continued visual publishing after migration, we either connect Next.js ISR routes to a headless CMS (Sanity, Strapi, or headless WordPress behind restricted API tokens) or compile clean version-controlled MDX posts directly in GitHub.",
      ],
      table: {
        headers: ["Legacy URL Pattern", "Target Action in Next.js", "Expected Outcome"],
        rows: [
          ["Primary Money & Service Pages", "Keep identical URL path if clean", "Zero re-indexing pause; retains direct links"],
          ["Legacy /blog/old-post-2024 URLs", "301 Redirect to evergreen slug (e.g. /blog/...)", "Preserves links without yearly date rot"],
          ["Thin Duplicate / Broken Utility Pages", "301 Redirect to authoritative pillar guide", "Consolidates crawl budget onto strong URLs"],
          ["WordPress /wp-content/uploads/ PDFs", "Re-host on /public/ or R2 + 301 rule", "No broken downloads from external sites"],
        ],
      },
      callout:
        "Even better: pair migrations with an automated CI script (`npm test`) that reads `next.config.mjs`, `public/sitemap.xml`, and core routes so no future deploy can accidentally re-inject retired URLs into your XML sitemap.",
    },
    {
      id: "post-launch-audit",
      title: "First 30 Days After DNS Cutover: What to Monitor",
      paragraphs: [
        "During the first four weeks after migrating to Next.js, monitor Google Search Console's Indexing ('Pages') report daily rather than waiting a full quarter. Watch specifically for unexpected 'Duplicate without user-selected canonical' (usually trailing-slash or apex-vs-www mismatch) and 'Not found (404)' spikes indicating missed external links.",
        "Track Core Web Vitals field collections (CrUX 28-day window) alongside server edge logs across London (`lhr1`) and US East (`iad1`) regions to confirm real buyers experience faster first paint and interaction latency.",
        "Run live crawler spot checks across every top-50 commercial page and blog article to confirm HTTP status parity (`200 OK` on destinations, single-hop `308`/`301` on legacy slugs), single `<h1>` presence, intact OpenGraph 1200x630 previews, and valid Schema.org `@graph` JSON-LD before declaring migration sign-off.",
      ],
    },
    {
      id: "canary-validation-checklist",
      title: "Pre-Cutover Verification Script Checklist for UK & US Teams",
      paragraphs: [
        "Before switching production A records and CNAME entries at your DNS registrar, validate the staging Vercel preview domain against a deterministic pre-cutover checklist so UK and US users experience zero dead links or mixed canonical signals.",
      ],
      bullets: [
        {
          title: "1. Single-Hop Redirect Matrix Verification",
          detail:
            "Curl-test every legacy URL from the legacy inventory CSV against the new production deployment; reject any multi-hop chain (`http://` -> `https://apex` -> `https://www` -> `/new-slug`) exceeding one edge redirect.",
        },
        {
          title: "2. Apex-to-WWW & Protocol Canonical Lock",
          detail:
            "Verify every `rel=\"canonical\"`, `og:url`, XML `<loc>`, and JSON-LD `@id` aligns identically on `https://www.` (or apex if chosen), eliminating split desktop/mobile crawler indexing.",
        },
        {
          title: "3. Structured Data & Internal Link Parity",
          detail:
            "Inspect footer, header mega-menu, and body cross-links to verify deprecated CMS category URLs are removed from templates and priority money pages receive strong descriptive internal anchor equity.",
        },
      ],
    },
  ],
  conclusionHeading: "Upgrade Your Stack Without Sacrificing Hard-Won Rankings",
  conclusionParagraphs: [
    "Replacing a fragile WordPress or costly Webflow setup should boost conversion rates and mobile rankings — never gamble with years of search equity.",
    "Inspect our fixed-scope Next.js website development UK & US service or dedicated WordPress to Next.js migration specs to scope a 301-verified transition sprint.",
  ],
  faqs: [
    {
      q: "How long does it take Google to re-crawl migrated Next.js pages?",
      a: "Submitting an updated XML sitemap and inspecting priority URLs in Search Console typically triggers Googlebot re-crawls across core service pages within days, with consolidated redirect signals stabilizing over 2 to 6 weeks.",
    },
    {
      q: "Can we migrate design 1:1 from Webflow or WordPress into clean Next.js?",
      a: "Yes. Our 1:1 rebuild workflow preserves visual polish, responsive grids, and animations in pure React 19 + Tailwind CSS while stripping CMS script bloat and adding strict SEO hygiene.",
    },
    {
      q: "Should we move URLs onto a brand-new domain at the same time as Next.js?",
      a: "Avoid changing both domain names and site architecture simultaneously unless unavoidable. Keeping your existing domain keeps trust signals intact so Google isolates and rewards your speed improvements faster.",
    },
  ],
  relatedLinks: [
    { label: "Next.js Website Development UK & US", href: "/services/website-development" },
    { label: "WordPress to Next.js Migration Specs", href: "/services/wordpress-headless-cms" },
    { label: "1:1 Website Rebuild & Webflow UI Port", href: "/services/website-clone" },
    { label: "Next.js App Router vs WordPress for SEO", href: "/blog/nextjs-app-router-vs-wordpress-uk-seo" },
  ],
};
