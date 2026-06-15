const fs = require("node:fs");
const http = require("node:http");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const types = {
  ".css": "text/css",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".xml": "application/xml",
};

http.createServer((request, response) => {
  let pathname = decodeURIComponent(request.url.split("?")[0]);
  if (pathname.endsWith("/")) pathname += "index.html";
  const file = path.join(root, pathname.replace(/^\/+/, ""));
  if (!file.startsWith(root) || !fs.existsSync(file)) {
    response.writeHead(404).end("Not found");
    return;
  }
  response.setHeader("Content-Type", types[path.extname(file)] || "application/octet-stream");
  fs.createReadStream(file).pipe(response);
}).listen(8765, "127.0.0.1");
