const assert = require("node:assert/strict");
const fs = require("node:fs");
const vm = require("node:vm");

function element() {
  return {
    addEventListener() {},
    classList: { toggle() {} },
    dataset: {},
    value: "",
    textContent: "",
    innerHTML: "",
    content: "",
  };
}

const fallbackElement = element();
const context = vm.createContext({
  console,
  crypto,
  TextDecoder,
  TextEncoder,
  URL,
  URLSearchParams,
  Uint8Array,
  atob(value) { return Buffer.from(value, "base64").toString("binary"); },
  btoa(value) { return Buffer.from(value, "binary").toString("base64"); },
  Array,
  Object,
  JSON,
  Math,
  Date,
  RegExp,
  String,
  Number,
  Set,
  setTimeout,
  location: { search: "", protocol: "file:", pathname: "/index.html", hash: "" },
  history: { replaceState() {} },
  localStorage: { getItem() { return null; }, setItem() {} },
  navigator: { clipboard: { async writeText() {} } },
  document: {
    body: { dataset: {} },
    documentElement: { lang: "en" },
    querySelector() { return fallbackElement; },
    querySelectorAll() { return []; },
    addEventListener() {},
    createElement() { return element(); },
  },
});

vm.runInContext(fs.readFileSync("app.js", "utf8"), context);

assert.equal(vm.runInContext("Object.keys(tools).length", context), 22);
assert.deepEqual(
  JSON.parse(vm.runInContext("JSON.stringify(csvToObjects('name,note\\nAda,\"hello, world\"'))", context)),
  [{ name: "Ada", note: "hello, world" }],
);
assert.equal(
  vm.runInContext("objectsToCsv([{name:'Ada',note:'hello, world'}])", context),
  'name,note\nAda,"hello, world"',
);
assert.equal(vm.runInContext("convertCase('hello world value', 'camel')", context), "helloWorldValue");
assert.equal(
  vm.runInContext("lineDiff('same\\nold', 'same\\nnew').map(item => item.type).join(',')", context),
  "same,removed,added",
);
assert.equal(vm.runInContext("fromBase64(toBase64('你好 CodeKitBox'))", context), "你好 CodeKitBox");

const guidePages = [
  "guides/base64-encoding-guide/index.html",
  "guides/jwt-decoding-guide/index.html",
  "guides/json-formatting-guide/index.html",
  "guides/qr-code-guide/index.html",
  "guides/strong-password-guide/index.html",
];
for (const page of guidePages) {
  assert.equal(fs.existsSync(page), true, `Missing guide page: ${page}`);
  assert.equal(fs.existsSync(`zh/${page}`), true, `Missing Chinese guide page: zh/${page}`);
  assert.equal(fs.existsSync(`ja/${page}`), true, `Missing Japanese guide page: ja/${page}`);
}
assert.equal(fs.readFileSync("sitemap.xml", "utf8").includes("/guides/base64-encoding-guide/"), true);
assert.equal(fs.readFileSync("tools/jwt-decoder/index.html", "utf8").includes("/guides/jwt-decoding-guide/"), true);
assert.equal(fs.existsSync("tools/image-compressor/index.html"), true);
assert.equal(fs.existsSync("tools/image-resizer/index.html"), true);
assert.equal(fs.existsSync("tools/image-converter/index.html"), true);
assert.equal(fs.readFileSync("sitemap.xml", "utf8").includes("/tools/image-compressor/"), true);

console.log("CodeKitBox smoke tests passed");
