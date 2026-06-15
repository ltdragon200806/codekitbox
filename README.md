# CodeKitBox

[CodeKitBox](https://codekitbox.com/) is a free collection of fast, practical
browser-based utilities. Most tools process input locally on the user's device,
without requiring an account or uploading common text inputs to an application
server.

## Included tools

- Base64, URL, and HTML entity encoding
- JWT decoding and Unix timestamp conversion
- JSON formatting, CSV conversion, and URL parsing
- UUID, SHA hash, QR code, password, and random number generation
- Regex testing, text diffing, case conversion, text cleanup, and word counting
- Percentage calculation

The site includes dedicated English, Simplified Chinese, and Japanese tool pages
and practical guides.

## Why CodeKitBox

- **Private by default:** common inputs are processed in the browser.
- **No account required:** open a tool and use it immediately.
- **Fast and lightweight:** static files with no frontend framework dependency.
- **Multilingual:** English, Chinese, and Japanese pages.
- **Search-friendly:** clean URLs, canonical links, hreflang, sitemap, and
  structured data.

## Local development

Use the included preview server so root-relative URLs work correctly:

```powershell
C:\Users\brave\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe scripts\preview-server.js
```

Then open:

```text
http://127.0.0.1:8765/
```

## Generate pages and test

```powershell
C:\Users\brave\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe scripts\generate-tool-pages.js
C:\Users\brave\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe scripts\generate-guides.js
C:\Users\brave\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe tests\smoke.js
```

## Deployment

The production site is deployed as static assets on Cloudflare Workers:

**https://codekitbox.com/**

## Feedback

Feedback and tool suggestions are welcome at
[contact@codekitbox.com](mailto:contact@codekitbox.com).

