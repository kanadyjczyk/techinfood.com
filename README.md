# TechInFood — techinfood.com

Free knowledge hub and advisory resource for small and medium food businesses.  
Guides, documentation, how-tos, and honest advice on technology for food distributors, wholesalers, and food-related businesses.

---

## About this site

TechInFood is a static HTML/CSS website — no framework, no build step, no dependencies.  
Every page is self-contained and loads fast. Hosted on GitHub Pages, served via custom domain `techinfood.com`.

---

## Site structure

```
/
├── index.html              → Homepage (knowledge hub)
├── sitemap.xml             → SEO sitemap
├── robots.txt              → Search engine instructions
│
├── assets/
│   ├── style.css           → Shared design system & components
│   └── nav.js              → Shared JS (modal, reveal animations)
│
├── guides/
│   ├── index.html          → Guides listing page
│   ├── airtable-pim.html   → Guide: Setting up Airtable as a PIM
│   ├── ai-email-to-sales-order.html   → Guide: AI email to sales order
│   ├── invoice-approval-automation.html → Guide: Invoice approval automation
│   └── rest-api-sftp-graph.html       → Guide: REST API vs SFTP vs Graph
│
└── blog/
    ├── index.html          → Blog listing page
    └── posts/
        ├── do-i-need-an-erp.html           → Post: Do I need an ERP?
        └── airtable-vs-spreadsheet.html    → Post: Airtable vs spreadsheets
```

---

## Adding new content

### New guide page
1. Copy an existing guide page (e.g. `guides/airtable-pim.html`)
2. Update the `<title>`, `<meta name="description">`, and `<link rel="canonical">`
3. Update the breadcrumb and page hero
4. Write your content inside `.article-body`
5. Add the new page to `sitemap.xml`
6. Add a card for it in `guides/index.html`

### New blog post
1. Copy an existing post (e.g. `blog/posts/do-i-need-an-erp.html`)
2. Update meta tags, title, canonical, and breadcrumb
3. Write your content
4. Add to `blog/index.html` and `sitemap.xml`
5. Note: blog post paths use `../../assets/` for CSS/JS links (two levels deep)

---

## Deploying to GitHub Pages

### First time setup
1. Push this repository to GitHub
2. Go to **Settings → Pages**
3. Set source to **Deploy from a branch → main → / (root)**
4. GitHub Pages will be live at `https://yourusername.github.io/techinfood`

### Connecting your custom domain (techinfood.com)

**Step 1 — Add CNAME file**  
Create a file called `CNAME` in the root of this repo containing:
```
techinfood.com
```

**Step 2 — Update your DNS records**  
At your domain registrar (GoDaddy, Namecheap, etc.), add these records:

| Type | Name | Value |
|------|------|-------|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | yourusername.github.io |

**Step 3 — Enable HTTPS**  
In GitHub Pages settings, tick **Enforce HTTPS** once DNS propagates (usually 10–30 minutes).

---

## Updating the sitemap

When you add a new page, add a `<url>` block to `sitemap.xml`:

```xml
<url>
  <loc>https://www.techinfood.com/guides/your-new-page.html</loc>
  <lastmod>2025-11-01</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.85</priority>
</url>
```

Then submit the sitemap to Google Search Console at:  
`https://search.google.com/search-console`

---

## Google Search Console setup (do this on day one)

1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add property → URL prefix → `https://www.techinfood.com`
3. Verify ownership (HTML tag method — paste the tag into `<head>` of `index.html`)
4. Submit sitemap: Sitemaps → add `https://www.techinfood.com/sitemap.xml`
5. Request indexing for key pages via URL Inspection tool

---

## Design system

All colours, fonts, and components are defined in `assets/style.css`.  
Each page links to this shared stylesheet plus uses `assets/nav.js` for shared interactions.

**Colours**
- `--amber: #e8a422` — primary accent
- `--cream: #f0e8d0` — headings
- `--bg: #0d0d0b` — page background
- `--surface: #141410` — section backgrounds
- `--muted: #6b6550` — body text

**Fonts** (Google Fonts)
- `Playfair Display` — headings
- `DM Mono` — body, UI
- `Fraunces` — article titles, pull quotes

---

## Contact

hello@techinfood.com
