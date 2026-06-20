const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const baseUrl = "https://codekitbox.com";
const guideSlugs = {
  base64: "base64-encoding-guide",
  jwt: "jwt-decoding-guide",
  json: "json-formatting-guide",
  qrcode: "qr-code-guide",
  password: "strong-password-guide",
};

const tools = [
  {
    id: "base64",
    slug: "base64-encoder-decoder",
    title: "Base64 Encoder and Decoder Online",
    description: "Encode text to Base64 or decode Base64 strings locally in your browser.",
    intro: "Convert Unicode text and Base64 values without uploading your input.",
    what: "Base64 represents binary data using a limited set of text characters. It is commonly used in data URLs, email attachments, API payloads, and configuration files.",
    example: "Encode a value such as <code>Hello world</code>, or paste an existing Base64 string to recover its readable text.",
    faq: [["Is Base64 encryption?", "No. Base64 is an encoding format and provides no secrecy."], ["Does this tool support Unicode?", "Yes. Text is converted through UTF-8 before encoding and after decoding."]],
  },
  {
    id: "url",
    slug: "url-encoder-decoder",
    title: "URL Encoder and Decoder Online",
    description: "Encode or decode URL components safely in your browser.",
    intro: "Convert spaces, symbols, and non-ASCII text into URL-safe values.",
    what: "URL encoding replaces characters that have special meaning in a URL with percent-encoded values. It is useful for query parameters, form values, and API requests.",
    example: "Encoding <code>hello world</code> produces <code>hello%20world</code>.",
    faq: [["Should I encode an entire URL?", "Usually you should encode individual parameter values, not the complete URL."], ["Is the input uploaded?", "No. This conversion runs locally in your browser."]],
  },
  {
    id: "jwt",
    slug: "jwt-decoder",
    title: "JWT Decoder Online",
    description: "Decode JWT header and payload data locally without uploading your token.",
    intro: "Inspect a JSON Web Token header and payload directly in your browser.",
    what: "A JWT is a compact token format made of Base64URL-encoded sections. Developers often decode tokens to inspect claims such as issuer, subject, audience, and expiration time.",
    example: "Paste a three-part JWT to view its decoded JSON header and payload.",
    faq: [["Does this verify the JWT signature?", "No. Decoding a token does not verify its signature or prove that it is trustworthy."], ["Should I paste production tokens?", "Avoid sharing sensitive production tokens with any online tool, even when processing is local."]],
  },
  {
    id: "timestamp",
    slug: "unix-timestamp-converter",
    title: "Unix Timestamp Converter",
    description: "Convert Unix timestamps to readable dates and dates back to epoch time.",
    intro: "Translate seconds or milliseconds since the Unix epoch into local and UTC dates.",
    what: "Unix time counts elapsed time from January 1, 1970 UTC. APIs and databases commonly store timestamps in either seconds or milliseconds.",
    example: "Use the unit selector when a timestamp appears far in the past or future; it may be milliseconds rather than seconds.",
    faq: [["What is the difference between seconds and milliseconds?", "A millisecond timestamp is usually 1,000 times larger than a seconds timestamp."], ["Which timezone is shown?", "The result includes both your browser's local time and UTC."]],
  },
  {
    id: "json",
    slug: "json-formatter",
    title: "JSON Formatter and Minifier",
    description: "Validate, format, beautify, or minify JSON locally in your browser.",
    intro: "Make compact JSON readable or reduce formatted JSON to a single line.",
    what: "JSON is a structured text format used by APIs, configuration files, and data exports. Formatting adds indentation; minifying removes unnecessary whitespace.",
    example: "Paste JSON and select Format to validate and indent it, or Minify to create compact output.",
    faq: [["Does formatting change my data?", "Formatting changes whitespace only. Values and structure remain the same."], ["Why does JSON validation fail?", "Common causes include trailing commas, single quotes, or unquoted property names."]],
  },
  {
    id: "uuid",
    slug: "uuid-generator",
    title: "UUID v4 Generator",
    description: "Generate random UUID v4 values using your browser crypto API.",
    intro: "Create multiple random identifiers instantly without a server request.",
    what: "UUIDs are 128-bit identifiers used for database records, distributed systems, test fixtures, and application objects.",
    example: "Generate a fresh batch and copy the values into your application or test data.",
    faq: [["Are UUID v4 values guaranteed unique?", "No finite random identifier is absolutely guaranteed unique, but collisions are extremely unlikely."], ["Where are UUIDs generated?", "They are generated locally using the browser crypto API."]],
  },
  {
    id: "hash",
    slug: "sha-hash-generator",
    title: "SHA Hash Generator",
    description: "Generate SHA-256 and SHA-1 hashes locally in your browser.",
    intro: "Calculate deterministic hexadecimal hashes from text input.",
    what: "A cryptographic hash converts data into a fixed-length fingerprint. Hashes are used for integrity checks, caching, and content identification.",
    example: "Enter the same text twice to receive the same hash. Even a small input change produces a different result.",
    faq: [["Can a hash be decoded?", "Cryptographic hashes are designed to be one-way and cannot normally be decoded."], ["Should SHA-1 be used for security?", "SHA-1 is considered weak for collision resistance. Prefer SHA-256 for modern security uses."]],
  },
  {
    id: "regex",
    slug: "regex-tester",
    title: "Regular Expression Tester",
    description: "Test JavaScript regular expressions against sample text in your browser.",
    intro: "Check patterns, flags, match counts, and matched values quickly.",
    what: "Regular expressions describe text patterns. They are commonly used for searching, validation, parsing, and text replacement.",
    example: "Try <code>\\d+</code> against text containing numbers to list each numeric match.",
    faq: [["Which regex flavor is used?", "This tool uses the JavaScript regular expression engine provided by your browser."], ["What are regex flags?", "Flags change matching behavior, such as case-insensitive matching with i or multiline matching with m."]],
  },
  {
    id: "diff",
    slug: "text-diff-checker",
    title: "Text Diff Checker",
    description: "Compare two blocks of text and identify added, removed, and unchanged lines.",
    intro: "Review line-by-line changes between two versions of text.",
    what: "A text diff highlights how one version differs from another. It is useful for configuration changes, drafts, logs, and code snippets.",
    example: "Paste the original text on the left and the revised text on the right, then compare them.",
    faq: [["Does this compare individual characters?", "The current tool compares text line by line."], ["Is my text stored?", "No. The comparison runs locally in your browser."]],
  },
  {
    id: "csv",
    slug: "csv-json-converter",
    title: "CSV to JSON and JSON to CSV Converter",
    description: "Convert CSV data to JSON or JSON arrays to CSV locally.",
    intro: "Move tabular data between CSV and JSON formats without uploading a file.",
    what: "CSV is convenient for spreadsheets and exports, while JSON is common in APIs and applications. Converting between them helps bridge data workflows.",
    example: "For CSV to JSON, the first row is used as property names. For JSON to CSV, enter an array of objects.",
    faq: [["Are quoted commas supported?", "Yes. The parser supports quoted fields and escaped double quotes."], ["Can I convert nested JSON?", "Nested values are serialized, but deeply nested data may require custom transformation."]],
  },
  {
    id: "text",
    slug: "text-cleaner",
    title: "Text Cleaner, Deduplicator and Sorter",
    description: "Remove duplicate lines, sort text, delete empty lines, and view text statistics.",
    intro: "Clean line-based lists and text data in a few clicks.",
    what: "Text cleanup is useful for keyword lists, identifiers, exported values, email lists, and other line-based data.",
    example: "Paste one item per line, remove duplicates, and sort the result before copying it.",
    faq: [["Is sorting case-sensitive?", "Sorting uses the browser's locale-aware comparison."], ["Are spaces removed?", "The empty-line action removes blank lines but preserves content within non-empty lines."]],
  },
  {
    id: "case",
    slug: "case-converter",
    title: "Case Converter",
    description: "Convert text to uppercase, lowercase, title case, camelCase, snake_case, or kebab-case.",
    intro: "Transform words and identifiers into common writing and programming styles.",
    what: "Case conversion helps normalize headings, variable names, filenames, URLs, and database fields.",
    example: "Convert <code>hello world value</code> into <code>helloWorldValue</code>, <code>hello_world_value</code>, or <code>hello-world-value</code>.",
    faq: [["Does it support non-English text?", "Uppercase and lowercase conversion uses browser Unicode support. Programming-style word splitting works best with separated words."], ["Does conversion modify the original input?", "No. Converted text appears in a separate output field."]],
  },
  {
    id: "html",
    slug: "html-entity-encoder-decoder",
    title: "HTML Entity Encoder and Decoder",
    description: "Encode HTML-sensitive characters or decode HTML entities locally.",
    intro: "Safely display markup characters as text or convert entities back to readable values.",
    what: "HTML entities represent characters such as less-than signs, ampersands, and quotation marks without treating them as markup.",
    example: "Encoding <code>&lt;p&gt;</code> produces entity text that a browser can display instead of interpreting as an element.",
    faq: [["Why encode HTML characters?", "Encoding helps display markup as text and reduces accidental HTML interpretation."], ["Does this sanitize unsafe HTML?", "No. Entity encoding is not a complete HTML sanitization solution."]],
  },
  {
    id: "urlparser",
    slug: "url-parser",
    title: "URL Parser Online",
    description: "Break a URL into protocol, hostname, port, path, query parameters, hash, and origin.",
    intro: "Inspect the individual parts of an absolute URL in readable JSON.",
    what: "A URL contains multiple structured components. Parsing helps debug links, redirects, tracking parameters, and API endpoints.",
    example: "Enter a complete URL beginning with <code>https://</code> or <code>http://</code>.",
    faq: [["Why must the URL include a protocol?", "An absolute URL needs a protocol so the browser can parse it unambiguously."], ["Are passwords displayed?", "If a URL contains a password, the output masks it."]],
  },
  { id: "imagecompressor", slug: "image-compressor", title: "Image Compressor Online", description: "Compress JPG, PNG, or WebP images online in your browser. Reduce image file size for forms, email, blogs, and social posts without uploading your picture.", intro: "Reduce image file size without uploading your picture to a server.", what: "Image compression reduces file size by changing quality, format, or dimensions. It is useful before uploading photos to websites, forms, blogs, email attachments, and social platforms.", example: "Choose an image, select JPEG or WebP output, adjust quality, then download the compressed result. If you need a smaller upload, lower the quality or choose WebP.", faq: [["Are my images uploaded?", "No. Images are processed locally in your browser."], ["How do I compress an image under 1MB?", "Choose JPEG or WebP, reduce the quality slider, and download the result. If it is still too large, resize the image to fewer pixels first."], ["Which format compresses best?", "WebP often creates smaller files, while JPEG is widely compatible. PNG is best for sharp graphics and transparency."]] },
  { id: "imageresizer", slug: "image-resizer", title: "Image Resizer Online", description: "Resize JPG, PNG, or WebP images online by width and height. Change photo dimensions locally while keeping aspect ratio.", intro: "Change photo dimensions locally while keeping the aspect ratio if needed.", what: "Image resizing changes pixel dimensions. Smaller images load faster and are easier to upload, attach, share, or fit into profile photos and website layouts.", example: "Choose an image, enter a new width or height, keep aspect ratio enabled, then download the resized file. Common sizes include 800px for blog images and 1200px for social previews.", faq: [["Will resizing reduce quality?", "Reducing dimensions usually lowers detail, but it also makes files smaller and faster to upload."], ["Can I keep the original ratio?", "Yes. Keep aspect ratio enabled and enter either width or height."], ["What size should I use for web images?", "For many blog and website images, 800 to 1600 pixels wide is a practical range. Use the smallest size that still looks clear."]] },
  { id: "imageconverter", slug: "image-converter", title: "Image Format Converter", description: "Convert images between JPG, PNG, and WebP online in your browser. Change image format without uploading your file.", intro: "Convert common image formats without uploading your file.", what: "Image format conversion changes how picture data is stored. JPEG is common for photos, PNG supports transparency, and WebP can provide compact web-friendly files.", example: "Choose an image, pick the output format, adjust quality when available, then download the converted image. Use JPG for photos, PNG for transparent graphics, and WebP for smaller web images.", faq: [["Does converting preserve transparency?", "PNG and WebP can preserve transparency, but converting transparent images to JPEG fills the background with white."], ["Is WebP supported everywhere?", "Modern browsers support WebP, but some older tools may still prefer JPEG or PNG."], ["Should I convert PNG to JPG?", "For photos, JPG is often much smaller. For logos, screenshots, or transparent images, PNG or WebP may be better."]] },
  { id: "qrcode", slug: "qr-code-generator", title: "QR Code Generator Online", description: "Create a QR code from text or a URL in your browser.", intro: "Generate a scannable QR code without uploading your content.", what: "QR codes store text or links in a square barcode that phone cameras can scan.", example: "Enter a URL or short text, then generate the QR code.", faq: [["Is my content uploaded?", "No. The QR code is generated in your browser."], ["What can I encode?", "You can encode links, plain text, contact details, and other short values."]] },
  { id: "password", slug: "password-generator", title: "Strong Password Generator", description: "Generate a strong random password locally in your browser.", intro: "Create secure random passwords without sending them to a server.", what: "Long random passwords help protect online accounts against guessing and reuse attacks.", example: "Choose a length and character set, then generate and copy the password.", faq: [["Is the password stored?", "No. It is generated locally and is not stored by this page."], ["How long should a password be?", "A unique password of 16 characters or more is a practical default."]] },
  { id: "percentage", slug: "percentage-calculator", title: "Percentage Calculator", description: "Calculate a percentage of any number quickly.", intro: "Find percentages for discounts, tips, taxes, and everyday calculations.", what: "A percentage expresses a value as a fraction of one hundred.", example: "Enter a percentage and a value to calculate the result.", faq: [["How is the result calculated?", "The percentage is multiplied by the value and divided by 100."], ["Can I use decimals?", "Yes. Both fields accept decimal values."]] },
  { id: "random", slug: "random-number-generator", title: "Random Number Generator", description: "Generate a random whole number within a selected range.", intro: "Pick a random number for games, drawings, decisions, or testing.", what: "A random number generator selects a value between the minimum and maximum you provide.", example: "Enter the minimum and maximum, then select Generate.", faq: [["Are both endpoints included?", "Yes. The minimum and maximum values can both be selected."], ["Is this suitable for lotteries?", "It is useful for casual drawings, but regulated lotteries may require certified systems."]] },
  { id: "wordcount", slug: "word-character-counter", title: "Word and Character Counter", description: "Count words, characters, characters without spaces, and sentences online. Check text length for posts, essays, forms, and SEO snippets.", intro: "Measure text length instantly while you type.", what: "Word and character counts are useful for essays, social posts, forms, meta descriptions, titles, resumes, and writing limits.", example: "Type or paste text to see the counts update instantly. Use the no-spaces character count when a form ignores whitespace.", faq: [["Is my text uploaded?", "No. Counting happens locally in your browser."], ["Are spaces counted?", "The tool shows both total characters and characters without spaces."], ["Can I use it for social media limits?", "Yes. It is useful for checking short posts, bios, titles, and descriptions before publishing."]] },
];

const localizedTools = {
  zh: {
    base64: ["Base64 在线编码与解码", "在浏览器中将文本编码为 Base64，或将 Base64 解码为可读文本。", "无需上传内容，即可转换 Unicode 文本和 Base64 数据。", "Base64 使用有限的文本字符表示二进制数据，常用于数据 URL、邮件附件、API 数据和配置文件。", "输入文本后点击编码，或粘贴 Base64 字符串并点击解码。"],
    url: ["URL 在线编码与解码", "在浏览器中安全编码或解码 URL 参数。", "快速转换空格、符号和非 ASCII 字符。", "URL 编码会把具有特殊含义的字符替换为百分号编码，常用于查询参数、表单和 API 请求。", "例如，编码 hello world 会得到 hello%20world。"],
    jwt: ["JWT 在线解码器", "在本地查看 JWT 的 Header、Payload 和时间声明。", "无需上传令牌即可检查 JSON Web Token。", "JWT 是由 Base64URL 编码部分组成的紧凑令牌格式，常用于身份验证和 API 授权。", "粘贴三段式 JWT，即可查看解码后的 JSON 和过期状态。"],
    timestamp: ["Unix 时间戳转换器", "在 Unix 时间戳与可读日期之间转换。", "支持秒和毫秒，并显示本地时间与 UTC 时间。", "Unix 时间从 1970 年 1 月 1 日 UTC 开始计数，API 和数据库通常使用秒或毫秒保存时间。", "输入时间戳并选择单位，或选择日期生成时间戳。"],
    json: ["JSON 格式化与压缩", "在线验证、格式化、美化或压缩 JSON。", "让紧凑 JSON 更易阅读，或将格式化 JSON 压缩为一行。", "JSON 是 API、配置文件和数据导出中常见的结构化文本格式。", "粘贴 JSON 后选择格式化或压缩；无效 JSON 会显示错误。"],
    uuid: ["UUID v4 生成器", "使用浏览器加密 API 生成随机 UUID v4。", "无需服务器请求，即可批量创建随机标识符。", "UUID 是常用于数据库记录、分布式系统和测试数据的 128 位标识符。", "选择数量并生成，然后复制到应用或测试数据中。"],
    hash: ["SHA 哈希生成器", "在浏览器中生成 SHA-256 和 SHA-1 哈希。", "根据文本计算稳定的十六进制哈希值。", "加密哈希会把数据转换为固定长度的指纹，常用于完整性检查、缓存和内容识别。", "输入相同文本会得到相同哈希；很小的改动也会产生不同结果。"],
    regex: ["正则表达式测试器", "使用浏览器的 JavaScript 正则引擎测试表达式。", "快速查看匹配数量、匹配内容和标志效果。", "正则表达式用于描述文本模式，常用于搜索、验证、解析和替换。", "输入表达式、标志和测试文本，然后点击测试。"],
    diff: ["文本差异比较工具", "比较两段文本并找出新增、删除和未改变的行。", "逐行查看两个文本版本之间的变化。", "文本差异比较适用于配置修改、文稿、日志和代码片段。", "左侧粘贴原文，右侧粘贴新版本，然后点击比较。"],
    csv: ["CSV 与 JSON 转换器", "在浏览器中将 CSV 转为 JSON，或将 JSON 数组转为 CSV。", "无需上传文件即可转换表格数据。", "CSV 适合电子表格和导出，JSON 常用于 API 和应用程序。", "CSV 转 JSON 时首行作为字段名；JSON 转 CSV 时请输入对象数组。"],
    text: ["文本清理、去重与排序", "删除重复行、空行，排序文本并查看统计信息。", "快速整理逐行列表和文本数据。", "文本清理适用于关键词、标识符、邮箱列表和各种导出数据。", "每行输入一个项目，然后去重、排序或删除空行。"],
    case: ["大小写与命名格式转换器", "转换为大写、小写、标题格式、camelCase、snake_case 或 kebab-case。", "快速统一文本、变量名和文件名格式。", "命名格式转换有助于规范标题、变量、文件名、URL 和数据库字段。", "输入单词或短语，然后选择需要的命名格式。"],
    html: ["HTML 实体编码与解码", "在本地编码 HTML 特殊字符或解码 HTML 实体。", "安全显示标记字符，或将实体恢复为可读文本。", "HTML 实体可表示小于号、与号和引号等字符，避免浏览器把它们当作标记。", "输入 HTML 文本，然后选择编码或解码。"],
    urlparser: ["URL 解析器", "将 URL 拆分为协议、主机名、端口、路径、参数和哈希。", "以清晰 JSON 查看完整 URL 的各个组成部分。", "解析 URL 有助于调试链接、重定向、跟踪参数和 API 地址。", "输入以 https:// 或 http:// 开头的完整 URL，然后点击解析。"],
    imagecompressor: ["图片压缩", "在浏览器本地压缩 JPG、PNG 或 WebP 图片。", "无需上传图片即可减小文件体积。", "图片压缩会通过质量、格式或尺寸调整减少文件大小，适合上传表单、博客和社交平台前使用。", "选择图片，选择 JPEG 或 WebP 输出，调整质量后下载压缩结果。"],
    imageresizer: ["图片尺寸调整", "在浏览器中按宽度和高度调整图片尺寸。", "本地修改图片像素尺寸，并可保持原始比例。", "图片尺寸调整会改变像素宽高，让图片更容易上传、附加或分享。", "选择图片，输入新的宽度或高度，保持比例后下载结果。"],
    imageconverter: ["图片格式转换", "在浏览器本地转换 JPG、PNG 和 WebP 图片格式。", "无需上传文件即可转换常见图片格式。", "JPEG 适合照片，PNG 支持透明背景，WebP 通常更适合网页使用。", "选择图片，选择输出格式，必要时调整质量，然后下载转换后的图片。"],
    qrcode: ["二维码生成器", "在浏览器中把文本或网址生成二维码。", "无需上传内容即可创建可扫描的二维码。", "二维码可以保存网址、文本和其他简短信息，并可使用手机相机扫描。", "输入网址或文本，然后点击生成二维码。"],
    password: ["强密码生成器", "在浏览器本地生成安全的随机密码。", "无需上传或保存即可创建强密码。", "长且随机的密码有助于防止猜测攻击和密码重复使用风险。", "选择长度和字符类型，然后生成并复制密码。"],
    percentage: ["百分比计算器", "快速计算任意数值的百分比。", "适合折扣、小费、税费和日常计算。", "百分比表示以一百为基准的数值比例。", "输入百分比和数值，然后点击计算。"],
    random: ["随机数生成器", "在指定范围内生成随机整数。", "适合游戏、抽签、选择和测试。", "随机数生成器会在你指定的最小值和最大值之间选择一个整数。", "输入最小值和最大值，然后点击生成。"],
    wordcount: ["字数与字符统计", "统计字数、字符数、去空格字符数和句子数。", "输入文字时即时查看长度统计。", "字数和字符统计适用于文章、社交媒体、表单和写作限制。", "输入或粘贴文本，统计结果会自动更新。"],
  },
  ja: {
    base64: ["Base64 エンコード・デコード", "ブラウザ内でテキストを Base64 に変換、または Base64 を復元します。", "入力内容をアップロードせずに Unicode テキストを変換できます。", "Base64 はバイナリデータを限られた文字で表し、データ URL、メール、API、設定ファイルで使われます。", "テキストを入力してエンコードするか、Base64 文字列を貼り付けてデコードします。"],
    url: ["URL エンコード・デコード", "URL の値をブラウザ内で安全にエンコードまたはデコードします。", "空白、記号、非 ASCII 文字を URL 用の値に変換します。", "URL エンコードは特別な意味を持つ文字をパーセント形式に置換し、クエリや API で利用されます。", "たとえば hello world は hello%20world に変換されます。"],
    jwt: ["JWT デコーダー", "JWT のヘッダー、ペイロード、時刻情報をローカルで確認します。", "トークンをアップロードせずに JSON Web Token を調べられます。", "JWT は Base64URL 形式の部分からなるコンパクトなトークンで、認証や API 認可に使われます。", "3 部構成の JWT を貼り付けると JSON と有効期限を確認できます。"],
    timestamp: ["Unix タイムスタンプ変換", "Unix タイムスタンプと読みやすい日時を相互変換します。", "秒とミリ秒に対応し、ローカル時刻と UTC を表示します。", "Unix 時刻は 1970 年 1 月 1 日 UTC からの経過時間で、API やデータベースで広く使われます。", "タイムスタンプと単位を入力するか、日時からタイムスタンプを作成します。"],
    json: ["JSON 整形・圧縮", "JSON をブラウザ内で検証、整形、または圧縮します。", "読みにくい JSON を整形し、整形済み JSON を一行に圧縮できます。", "JSON は API、設定ファイル、データ出力で利用される構造化テキスト形式です。", "JSON を貼り付け、整形または圧縮を選択します。"],
    uuid: ["UUID v4 生成", "ブラウザの暗号 API を使用してランダムな UUID v4 を生成します。", "サーバー通信なしで複数の識別子を作成できます。", "UUID はデータベース、分散システム、テストデータで使われる 128 ビット識別子です。", "必要な数を生成し、アプリやテストデータへコピーします。"],
    hash: ["SHA ハッシュ生成", "ブラウザ内で SHA-256 と SHA-1 ハッシュを生成します。", "テキストから決定的な 16 進数ハッシュを計算します。", "暗号学的ハッシュはデータを固定長の指紋に変換し、整合性確認や識別に使われます。", "同じ入力は同じハッシュになり、小さな変更でも結果が変わります。"],
    regex: ["正規表現テスター", "JavaScript 正規表現をサンプルテキストでテストします。", "パターン、フラグ、一致件数をすばやく確認できます。", "正規表現は検索、検証、解析、置換で使われるテキストパターンです。", "パターン、フラグ、テスト文を入力して実行します。"],
    diff: ["テキスト差分チェッカー", "2 つのテキストから追加、削除、未変更の行を確認します。", "文章の変更を行単位で比較できます。", "差分比較は設定変更、原稿、ログ、コード片の確認に便利です。", "左に元の文章、右に新しい文章を貼り付けて比較します。"],
    csv: ["CSV・JSON 変換", "CSV を JSON に、JSON 配列を CSV にローカル変換します。", "ファイルをアップロードせずに表形式データを変換できます。", "CSV は表計算や出力に、JSON は API やアプリケーションに適しています。", "CSV の先頭行は項目名として使用され、JSON はオブジェクト配列を入力します。"],
    text: ["テキスト整理・重複削除・並べ替え", "重複行や空行の削除、並べ替え、文字数確認ができます。", "行単位のリストやテキストをすばやく整理します。", "キーワード、識別子、メール一覧、出力データの整理に便利です。", "1 行に 1 項目を入力し、重複削除や並べ替えを選択します。"],
    case: ["大文字小文字・命名形式変換", "大文字、小文字、タイトル、camelCase、snake_case、kebab-case に変換します。", "文章、変数名、ファイル名の形式を統一できます。", "命名形式の変換は見出し、変数、URL、データベース項目の整理に役立ちます。", "単語や文章を入力して目的の形式を選択します。"],
    html: ["HTML エンティティ変換", "HTML の特殊文字をエンコード、またはエンティティをデコードします。", "マークアップ文字を安全に表示し、読みやすい文字へ戻せます。", "HTML エンティティは記号をマークアップとして解釈させずに表現します。", "HTML テキストを入力してエンコードまたはデコードします。"],
    urlparser: ["URL パーサー", "URL をプロトコル、ホスト、ポート、パス、クエリ、ハッシュに分解します。", "完全な URL の構成を読みやすい JSON で確認します。", "URL の解析はリンク、リダイレクト、追跡パラメータ、API のデバッグに役立ちます。", "https:// または http:// から始まる URL を入力して解析します。"],
    imagecompressor: ["画像圧縮", "JPG、PNG、WebP 画像をブラウザ内で圧縮します。", "画像をアップロードせずにファイルサイズを小さくします。", "画像圧縮は品質、形式、サイズを調整してファイルサイズを減らします。フォーム、ブログ、SNS へのアップロード前に便利です。", "画像を選び、JPEG または WebP を選択し、品質を調整してダウンロードします。"],
    imageresizer: ["画像リサイズ", "画像の幅と高さをブラウザ内で変更します。", "縦横比を保ちながら写真のサイズを変更できます。", "画像リサイズはピクセル寸法を変更し、アップロードや共有をしやすくします。", "画像を選び、新しい幅または高さを入力して、リサイズ後の画像をダウンロードします。"],
    imageconverter: ["画像形式変換", "JPG、PNG、WebP をブラウザ内で変換します。", "ファイルをアップロードせずに一般的な画像形式を変換します。", "JPEG は写真向き、PNG は透明背景向き、WebP は軽量な Web 画像に向いています。", "画像を選び、出力形式と品質を設定して変換後の画像をダウンロードします。"],
    qrcode: ["QR コード生成", "テキストや URL から QR コードをブラウザ内で作成します。", "内容をアップロードせずにスキャン可能な QR コードを生成します。", "QR コードは URL や短いテキストを保存し、スマートフォンで読み取れます。", "URL またはテキストを入力して生成します。"],
    password: ["強力なパスワード生成", "安全なランダムパスワードをブラウザ内で生成します。", "サーバーへ送信せずに強力なパスワードを作成します。", "長くランダムなパスワードは推測攻撃や使い回しのリスクを減らします。", "長さと文字種を選択して生成します。"],
    percentage: ["パーセント計算", "任意の数値のパーセントをすばやく計算します。", "割引、税金、チップなどの日常計算に便利です。", "パーセントは数値を百分率で表します。", "割合と数値を入力して計算します。"],
    random: ["乱数生成", "指定範囲からランダムな整数を生成します。", "ゲーム、抽選、選択、テストに利用できます。", "最小値と最大値の間からランダムな整数を選びます。", "範囲を入力して生成します。"],
    wordcount: ["文字数・単語数カウンター", "単語、文字、空白を除いた文字、文の数を集計します。", "入力しながらテキストの長さを確認できます。", "文章、投稿、フォームの文字制限を確認する際に便利です。", "テキストを入力または貼り付けると自動で集計します。"],
  },
};

const localeUi = {
  en: {
    htmlLang: "en", prefix: "", allTools: "All tools", eyebrow: "Free browser-based tool",
    ad: "Advertisement", what: "What is this tool?", how: "How to use it", privacy: "Privacy",
    privacyText: "This tool is designed to process your input locally in the browser. Avoid entering passwords, private keys, or other sensitive production data into any online tool.",
    faq: "Frequently asked questions", more: "More developer tools", footer: "Fast online utilities for developers and technical learners.",
    links: ["About", "Privacy", "Terms", "Disclaimer", "Contact"],
    uses: "Common uses", mistakes: "Common mistakes", practical: "Practical example",
  },
  zh: {
    htmlLang: "zh-CN", prefix: "/zh", allTools: "全部工具", eyebrow: "免费的浏览器本地工具",
    ad: "广告", what: "这个工具是什么？", how: "如何使用", privacy: "隐私说明",
    privacyText: "此工具在浏览器本地处理输入内容。请勿在任何在线工具中输入密码、私钥或其他敏感的生产数据。",
    faq: "常见问题", more: "更多开发者工具", footer: "为开发者和技术学习者提供快速在线工具。",
    links: ["关于", "隐私", "条款", "免责声明", "联系"],
    uses: "常见使用场景", mistakes: "常见错误", practical: "实际示例",
  },
  ja: {
    htmlLang: "ja", prefix: "/ja", allTools: "すべてのツール", eyebrow: "無料のブラウザ内ツール",
    ad: "広告", what: "このツールについて", how: "使い方", privacy: "プライバシー",
    privacyText: "このツールは入力内容をブラウザ内で処理します。パスワード、秘密鍵、その他の機密データはオンラインツールに入力しないでください。",
    faq: "よくある質問", more: "その他の開発者ツール", footer: "開発者と技術学習者のための高速オンラインツール。",
    links: ["概要", "プライバシー", "利用規約", "免責事項", "お問い合わせ"],
    uses: "よくある利用場面", mistakes: "よくある間違い", practical: "実用例",
  },
};

const detailedContent = {
  en: {
    base64: {
      uses: ["Inspect Base64 values from API responses and configuration files.", "Create or debug data URLs used for small images and files.", "Convert Unicode text safely through UTF-8 before sharing or testing."],
      mistakes: ["Base64 is encoding, not encryption; anyone can decode it.", "Missing padding or damaged characters can make a Base64 value invalid.", "Binary files may not decode into readable text."],
      exampleTitle: "Base64 Unicode example",
      exampleText: "Encoding <code>Hello 世界</code> produces a portable text value. Decoding that result restores the original Unicode text.",
    },
    jwt: {
      uses: ["Inspect authentication claims while debugging an API.", "Check issuer, audience, roles, and subject values.", "Convert <code>iat</code>, <code>nbf</code>, and <code>exp</code> claims into readable dates."],
      mistakes: ["A decoded JWT is not necessarily valid; its signature must still be verified.", "Do not share active production tokens because they may grant access.", "JWT timestamps normally use seconds, while some systems use milliseconds elsewhere."],
      exampleTitle: "Checking JWT expiration",
      exampleText: "Paste a token and compare its <code>exp</code> date with the current time. An expired token should be refreshed or rejected by the application.",
    },
    json: {
      uses: ["Format compact API responses for easier reading.", "Validate configuration data before deployment.", "Minify JSON before storing or transmitting it."],
      mistakes: ["JSON requires double quotes; single-quoted strings are invalid.", "Trailing commas after the last item are not allowed.", "Comments and unquoted property names are not valid standard JSON."],
      exampleTitle: "Formatting an API response",
      exampleText: "Paste <code>{\"name\":\"Ada\",\"active\":true}</code> and select Format to display the properties on separate indented lines.",
    },
    qrcode: {
      uses: ["Share a website link from a poster, screen, or printed document.", "Encode short instructions, contact details, or event information.", "Let another device open a link without typing it."],
      mistakes: ["Always scan and test the finished QR code before publishing it.", "Very long text creates a denser code that may be harder to scan.", "Keep strong contrast and enough empty space around the code."],
      exampleTitle: "Creating a QR code for a link",
      exampleText: "Enter a complete HTTPS URL, generate the code, then scan it with a phone before placing it in print or on a screen.",
    },
    password: {
      uses: ["Create a unique password for a new online account.", "Generate credentials for a router, test account, or encrypted file.", "Replace a reused password after a security alert."],
      mistakes: ["Do not reuse the same password across multiple accounts.", "Short passwords are easier to guess even when they include symbols.", "Store important passwords in a trusted password manager rather than an unprotected note."],
      exampleTitle: "Choosing a strong password length",
      exampleText: "A unique random password of 16–24 characters is a practical default for most accounts. Use a longer value when the service allows it.",
    },
    percentage: {
      uses: ["Calculate a sale discount, tip, tax, or commission.", "Find part of a total for budgeting and reporting.", "Compare percentage changes in everyday numbers."],
      mistakes: ["A percentage change is different from a change in percentage points.", "Make sure the entered value is the correct base amount.", "Avoid rounding intermediate values too early when accuracy matters."],
      exampleTitle: "Discount calculation example",
      exampleText: "To find a 20% discount on 150, enter 20 and 150. The discount is 30, so the price after discount is 120.",
    },
    imagecompressor: {
      uses: ["Reduce a photo before uploading it to a form, blog, or marketplace listing.", "Make images smaller for email attachments and chat apps.", "Create lighter web images that load faster on mobile connections."],
      mistakes: ["Do not lower quality so far that text, faces, or product details become unclear.", "PNG screenshots and logos may look worse if converted to low-quality JPEG.", "Large pixel dimensions can keep a file big even when quality is reduced."],
      exampleTitle: "Compress an image under 1MB",
      exampleText: "Start with WebP or JPEG at about 75% quality. If the result is still too large, resize the image to a smaller width such as 1200px and compress again.",
    },
    imageresizer: {
      uses: ["Resize profile photos, avatars, blog images, and form uploads.", "Create smaller versions of phone photos before sharing.", "Fit images into fixed website, marketplace, or document size requirements."],
      mistakes: ["Stretching width and height separately can distort the image.", "Upscaling a small image will not add real detail.", "Saving a resized image as PNG may still be larger than JPEG or WebP for photos."],
      exampleTitle: "Resize a photo for web upload",
      exampleText: "Choose a phone photo, keep aspect ratio enabled, enter a width such as 1200px, and download the resized result before uploading.",
    },
    imageconverter: {
      uses: ["Convert PNG screenshots or photos to JPG for wider compatibility.", "Create WebP images for faster website loading.", "Keep PNG when transparency or crisp UI graphics matter."],
      mistakes: ["JPEG does not support transparency and will use a solid background.", "Repeatedly converting lossy images can reduce quality.", "Some older apps may not accept WebP even though modern browsers do."],
      exampleTitle: "Choose the right output format",
      exampleText: "Use JPG for photos, PNG for transparent graphics, and WebP when you want a compact file for a website or modern browser.",
    },
    wordcount: {
      uses: ["Check essay, article, resume, and application form length.", "Measure social media bios, titles, and short posts before publishing.", "Review meta descriptions and page titles while writing SEO content."],
      mistakes: ["Different platforms may count emojis, CJK characters, and line breaks differently.", "Character count with spaces and without spaces are not the same requirement.", "Pasting rich text from another app may include hidden whitespace."],
      exampleTitle: "Check a meta description",
      exampleText: "Paste a page description and keep it concise. A practical meta description is often around 120 to 160 characters, but clarity matters more than hitting an exact number.",
    },
  },
  zh: {
    base64: { uses: ["查看 API 返回值或配置文件中的 Base64 内容。", "创建或排查小图片、文件使用的 data URL。", "通过 UTF-8 安全转换包含中文的 Unicode 文本。"], mistakes: ["Base64 是编码而不是加密，任何人都可以解码。", "缺少填充符或字符损坏会导致解码失败。", "二进制文件解码后通常不是可读文本。"], exampleTitle: "包含中文的 Base64 示例", exampleText: "编码 <code>Hello 世界</code> 后会得到便于传输的文本值；再次解码即可恢复原始 Unicode 文本。" },
    jwt: { uses: ["调试 API 身份验证时查看令牌声明。", "检查签发者、受众、角色和用户标识。", "把 <code>iat</code>、<code>nbf</code> 和 <code>exp</code> 转成可读时间。"], mistakes: ["能解码并不代表 JWT 有效，仍然必须验证签名。", "不要分享仍有效的生产令牌，它可能带有访问权限。", "JWT 时间通常使用秒，不要和毫秒时间戳混淆。"], exampleTitle: "检查 JWT 是否过期", exampleText: "粘贴令牌后，将 <code>exp</code> 时间与当前时间比较。已过期的令牌应由应用拒绝或刷新。" },
    json: { uses: ["格式化紧凑的 API 返回数据以便阅读。", "部署前验证配置文件。", "存储或传输前压缩 JSON。"], mistakes: ["JSON 字符串必须使用双引号，不能使用单引号。", "最后一个项目后不能保留逗号。", "标准 JSON 不支持注释和未加引号的属性名。"], exampleTitle: "格式化 API 返回示例", exampleText: "粘贴 <code>{\"name\":\"Ada\",\"active\":true}</code> 并选择格式化，属性会按缩进分行显示。" },
    qrcode: { uses: ["在海报、屏幕或打印材料中分享网址。", "保存简短说明、联系方式或活动信息。", "让另一台设备无需输入即可打开链接。"], mistakes: ["发布前务必使用手机扫描测试二维码。", "内容过长会让二维码过密，更难扫描。", "保持足够对比度，并在二维码四周留白。"], exampleTitle: "为网址创建二维码", exampleText: "输入完整的 HTTPS 网址并生成二维码，发布到屏幕或印刷品之前先用手机扫描确认。" },
    password: { uses: ["为新注册的网络账号创建独立密码。", "为路由器、测试账号或加密文件生成凭据。", "安全警报后替换重复使用的旧密码。"], mistakes: ["不要在多个账号上重复使用同一个密码。", "即使包含符号，过短的密码仍然容易被猜测。", "重要密码应保存在可信密码管理器中，而不是无保护的笔记里。"], exampleTitle: "如何选择密码长度", exampleText: "对大多数账号而言，16–24 位独立随机密码是实用的默认选择；服务允许时可以使用更长密码。" },
    percentage: { uses: ["计算折扣、小费、税费或佣金。", "计算预算和报告中总数的一部分。", "比较日常数值的百分比变化。"], mistakes: ["百分比变化与百分点变化不是同一个概念。", "确认输入的是正确的基准数值。", "需要精确结果时，不要过早对中间值四舍五入。"], exampleTitle: "折扣计算示例", exampleText: "计算 150 的 20% 折扣时，输入 20 和 150，折扣为 30，折后价格为 120。" },
    imagecompressor: { uses: ["上传表单、博客或二手平台前压缩照片。", "让邮件附件和聊天图片体积更小。", "制作加载更快的网页图片，改善移动端访问体验。"], mistakes: ["不要把质量压得太低，否则文字、人脸或商品细节会变模糊。", "截图、Logo 和透明图像不一定适合低质量 JPEG。", "图片像素尺寸过大时，只调低质量仍可能不够小。"], exampleTitle: "把图片压缩到 1MB 以下", exampleText: "可以先选择 WebP 或 JPEG，并把质量调到约 75%。如果结果仍然太大，再把图片宽度调整到 1200px 左右后重新压缩。" },
    imageresizer: { uses: ["调整头像、证件照、博客配图和表单上传图片。", "分享手机照片前制作较小版本。", "让图片符合网站、平台或文档要求的固定尺寸。"], mistakes: ["分别修改宽度和高度可能导致图片变形。", "把小图放大不会增加真实细节。", "照片保存为 PNG 时，体积可能仍然比 JPEG 或 WebP 大。"], exampleTitle: "调整网页上传图片尺寸", exampleText: "选择手机照片，保持宽高比例，输入例如 1200px 的宽度，然后下载调整后的图片再上传。" },
    imageconverter: { uses: ["把 PNG 截图或照片转成兼容性更好的 JPG。", "生成适合网页加载的 WebP 图片。", "需要透明背景或清晰界面图时保留 PNG。"], mistakes: ["JPEG 不支持透明背景，会填充为纯色背景。", "反复转换有损格式可能降低画质。", "现代浏览器支持 WebP，但一些旧软件可能仍偏好 JPG 或 PNG。"], exampleTitle: "选择合适的图片格式", exampleText: "照片通常用 JPG，透明图形用 PNG，网页中追求更小体积时可以选择 WebP。" },
    wordcount: { uses: ["检查文章、简历、申请表和投稿字数。", "发布社交媒体简介、标题和短文前确认长度。", "写 SEO 标题和描述时快速查看字符数。"], mistakes: ["不同平台对表情、中日韩字符和换行的统计方式可能不同。", "含空格字符数和不含空格字符数不是同一个要求。", "从其他软件粘贴时可能带入隐藏空白。"], exampleTitle: "检查网页描述长度", exampleText: "粘贴页面描述后查看字符数。实用的 meta description 通常约 120 到 160 个字符，但清楚表达比精确卡字数更重要。" },
  },
  ja: {
    base64: { uses: ["API レスポンスや設定ファイルの Base64 値を確認する。", "小さな画像やファイルの data URL を作成・確認する。", "日本語を含む Unicode テキストを UTF-8 経由で安全に変換する。"], mistakes: ["Base64 は暗号化ではなく、誰でもデコードできます。", "パディング不足や文字の破損でデコードに失敗します。", "バイナリファイルは読みやすいテキストにはなりません。"], exampleTitle: "Unicode の Base64 例", exampleText: "<code>Hello 世界</code> をエンコードすると転送しやすい文字列になり、デコードすると元の Unicode テキストに戻ります。" },
    jwt: { uses: ["API 認証のデバッグ中にクレームを確認する。", "発行者、対象者、ロール、ユーザー ID を確認する。", "<code>iat</code>、<code>nbf</code>、<code>exp</code> を読みやすい日時へ変換する。"], mistakes: ["デコードできても JWT が有効とは限らず、署名検証が必要です。", "アクセス権を持つ本番トークンを共有しないでください。", "JWT の時刻は通常秒単位で、ミリ秒と混同しないよう注意します。"], exampleTitle: "JWT の有効期限を確認", exampleText: "トークンを貼り付け、<code>exp</code> と現在時刻を比較します。期限切れのトークンは更新または拒否する必要があります。" },
    json: { uses: ["圧縮された API レスポンスを読みやすく整形する。", "デプロイ前に設定データを検証する。", "保存や送信前に JSON を圧縮する。"], mistakes: ["JSON 文字列はダブルクォートが必要です。", "最後の項目の後にカンマは付けられません。", "標準 JSON ではコメントや引用符なしのプロパティ名は使えません。"], exampleTitle: "API レスポンスの整形例", exampleText: "<code>{\"name\":\"Ada\",\"active\":true}</code> を貼り付けて整形すると、各項目がインデント表示されます。" },
    qrcode: { uses: ["ポスター、画面、印刷物から Web サイトを共有する。", "短い案内、連絡先、イベント情報を保存する。", "別の端末で入力せずにリンクを開く。"], mistakes: ["公開前にスマートフォンで必ず読み取りテストをしてください。", "長い内容はコードが密になり読み取りにくくなります。", "十分なコントラストと周囲の余白を確保してください。"], exampleTitle: "リンクの QR コードを作成", exampleText: "完全な HTTPS URL を入力して生成し、画面や印刷物に掲載する前にスマートフォンで確認します。" },
    password: { uses: ["新しいオンラインアカウント用の固有パスワードを作成する。", "ルーター、テストアカウント、暗号化ファイル用の認証情報を生成する。", "セキュリティ警告後に使い回したパスワードを交換する。"], mistakes: ["同じパスワードを複数アカウントで使い回さないでください。", "記号を含んでいても短いパスワードは推測されやすくなります。", "重要なパスワードは信頼できるパスワード管理ツールに保存してください。"], exampleTitle: "強力なパスワードの長さ", exampleText: "多くのアカウントでは、16～24 文字の固有なランダムパスワードが実用的です。可能ならさらに長くします。" },
    percentage: { uses: ["割引、チップ、税金、手数料を計算する。", "予算やレポートで合計の一部を求める。", "日常の数値の割合変化を比較する。"], mistakes: ["割合の変化とパーセントポイントの変化は異なります。", "正しい基準値を入力しているか確認してください。", "精度が必要な場合は途中で早く丸めないでください。"], exampleTitle: "割引計算の例", exampleText: "150 の 20% 割引を求める場合、20 と 150 を入力します。割引額は 30、割引後は 120 です。" },
    imagecompressor: { uses: ["フォーム、ブログ、フリマ出品の前に写真を軽くする。", "メール添付やチャット送信用に画像サイズを小さくする。", "モバイルでも読み込みやすい軽量な Web 画像を作る。"], mistakes: ["品質を下げすぎると文字、顔、商品の細部が見づらくなります。", "スクリーンショットやロゴは低品質 JPEG に向かない場合があります。", "ピクセル寸法が大きいままだと、品質を下げても十分小さくならないことがあります。"], exampleTitle: "画像を 1MB 未満に圧縮", exampleText: "まず WebP または JPEG を選び、品質を 75% 前後にします。まだ大きい場合は、幅を 1200px 程度にリサイズしてから再度圧縮します。" },
    imageresizer: { uses: ["プロフィール写真、アバター、ブログ画像、フォーム用画像をリサイズする。", "スマホ写真を共有前に小さくする。", "サイト、出品ページ、資料で指定されたサイズに合わせる。"], mistakes: ["幅と高さを別々に変えると画像が歪むことがあります。", "小さい画像を拡大しても本当の細部は増えません。", "写真を PNG で保存すると JPEG や WebP より大きくなる場合があります。"], exampleTitle: "Web アップロード用にリサイズ", exampleText: "スマホ写真を選び、縦横比を保ったまま幅を 1200px などに設定して、リサイズ後の画像をダウンロードします。" },
    imageconverter: { uses: ["PNG のスクリーンショットや写真を互換性の高い JPG に変換する。", "Web サイト用に軽量な WebP 画像を作る。", "透明背景やくっきりした UI 画像には PNG を使う。"], mistakes: ["JPEG は透明背景に対応せず、単色背景になります。", "非可逆形式を何度も変換すると画質が落ちることがあります。", "WebP は現代ブラウザで使えますが、古いアプリでは JPG や PNG が必要な場合があります。"], exampleTitle: "適切な画像形式を選ぶ", exampleText: "写真は JPG、透明な図形は PNG、Web ページで軽さを重視する場合は WebP が実用的です。" },
    wordcount: { uses: ["記事、履歴書、応募フォーム、投稿文の長さを確認する。", "SNS のプロフィール、タイトル、短文を公開前に確認する。", "SEO タイトルや説明文を書くときに文字数を確認する。"], mistakes: ["絵文字、日本語文字、改行の数え方はサービスによって異なる場合があります。", "スペース込みとスペースなしの文字数は別の条件です。", "他のアプリから貼り付けると見えない空白が含まれることがあります。"], exampleTitle: "ページ説明文の長さを確認", exampleText: "説明文を貼り付けて文字数を確認します。meta description は 120〜160 文字程度が実用的ですが、正確な文字数より分かりやすさが重要です。" },
  },
};

function localizedTool(tool, locale) {
  if (locale === "en") return tool;
  const [title, description, intro, what, example] = localizedTools[locale][tool.id];
  const faq = locale === "zh"
    ? [["输入内容会上传吗？", "不会。此工具在浏览器本地运行。"], ["这个工具免费吗？", "是的，无需注册即可免费使用。"]]
    : [["入力内容はアップロードされますか？", "いいえ。このツールはブラウザ内で動作します。"], ["無料で利用できますか？", "はい。登録なしで無料で利用できます。"]];
  return { ...tool, title, description, intro, what, example, faq };
}

function toolPath(tool, locale) {
  return `${localeUi[locale].prefix}/tools/${tool.slug}/`;
}

function relatedLinks(locale) {
  return tools
    .map((tool) => {
      const item = localizedTool(tool, locale);
      return `<a href="${toolPath(tool, locale)}">${item.title}</a>`;
    })
    .join("");
}

function structuredData(sourceTool, tool, locale) {
  const url = `${baseUrl}${toolPath(sourceTool, locale)}`;
  return JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        name: tool.title,
        description: tool.description,
        url,
        applicationCategory: "UtilitiesApplication",
        operatingSystem: "Any",
        inLanguage: localeUi[locale].htmlLang,
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "CodeKitBox", item: baseUrl },
          { "@type": "ListItem", position: 2, name: tool.title, item: url },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: tool.faq.map(([name, text]) => ({
          "@type": "Question",
          name,
          acceptedAnswer: { "@type": "Answer", text },
        })),
      },
    ],
  });
}

function page(sourceTool, locale) {
  const tool = localizedTool(sourceTool, locale);
  const ui = localeUi[locale];
  const canonicalPath = toolPath(sourceTool, locale);
  const details = detailedContent[locale]?.[sourceTool.id];
  const guideSlug = guideSlugs[sourceTool.id];
  const guideLabel = locale === "zh" ? "阅读完整使用指南" : locale === "ja" ? "詳しい使い方ガイドを読む" : "Read the complete practical guide";
  const guidePrefix = locale === "en" ? "" : `/${locale}`;
  const guideHtml = guideSlug ? `<p class="practical-guide-link"><a href="${guidePrefix}/guides/${guideSlug}/">${guideLabel} &rarr;</a></p>` : "";
  const faqHtml = tool.faq.map(([question, answer]) => `<details><summary>${question}</summary><p>${answer}</p></details>`).join("");
  const detailHtml = details ? `
        <section class="deep-content">
          <div>
            <h2>${ui.uses}</h2>
            <ul>${details.uses.map((item) => `<li>${item}</li>`).join("")}</ul>
          </div>
          <div>
            <h2>${ui.mistakes}</h2>
            <ul>${details.mistakes.map((item) => `<li>${item}</li>`).join("")}</ul>
          </div>
        </section>
        <section class="practical-example">
          <h2>${ui.practical}: ${details.exampleTitle}</h2>
          <p>${details.exampleText}</p>
        </section>` : "";
  return `<!doctype html>
<html lang="${ui.htmlLang}">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${tool.title} - CodeKitBox</title>
    <meta name="description" content="${tool.description}" />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="${baseUrl}${canonicalPath}" />
    <link rel="alternate" hreflang="en" href="${baseUrl}${toolPath(sourceTool, "en")}" />
    <link rel="alternate" hreflang="zh-CN" href="${baseUrl}${toolPath(sourceTool, "zh")}" />
    <link rel="alternate" hreflang="ja" href="${baseUrl}${toolPath(sourceTool, "ja")}" />
    <link rel="alternate" hreflang="x-default" href="${baseUrl}${toolPath(sourceTool, "en")}" />
    <meta property="og:title" content="${tool.title} - CodeKitBox" />
    <meta property="og:description" content="${tool.description}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${baseUrl}${canonicalPath}" />
    <meta property="og:image" content="${baseUrl}/assets/codekitbox-social-preview.png" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${tool.title} - CodeKitBox" />
    <meta name="twitter:description" content="${tool.description}" />
    <meta name="twitter:image" content="${baseUrl}/assets/codekitbox-social-preview.png" />
    <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
    <link rel="stylesheet" href="/styles.css" />
    <link rel="stylesheet" href="/tool-pages.css" />
    <script type="application/ld+json">${structuredData(sourceTool, tool, locale)}</script>
  </head>
  <body data-tool="${sourceTool.id}" data-lang="${locale}" data-slug="${sourceTool.slug}">
    <a class="skip-link" href="#main-content">Skip to tool</a>
    <header class="tool-page-header">
      <nav class="tool-page-nav">
        <a class="brand" href="/" aria-label="CodeKitBox home"><span class="brand-mark">C</span><span>CodeKitBox</span></a>
        <div class="tool-page-nav-links">
          <a href="/">${ui.allTools}</a>
          <div class="language-switcher" aria-label="Language selector">
            <button class="language-button${locale === "en" ? " is-active" : ""}" data-lang="en" type="button">EN</button>
            <button class="language-button${locale === "zh" ? " is-active" : ""}" data-lang="zh" type="button">&#20013;</button>
            <button class="language-button${locale === "ja" ? " is-active" : ""}" data-lang="ja" type="button">&#26085;</button>
          </div>
        </div>
      </nav>
    </header>
    <main class="tool-page-main" id="main-content">
      <section class="tool-page-intro">
        <p class="eyebrow">${ui.eyebrow}</p>
        <h1>${tool.title}</h1>
        <p>${tool.intro}</p>
      </section>
      <section class="ad-slot" aria-label="Advertisement placeholder"><span>${ui.ad}</span></section>
      <section class="tool-panel" aria-live="polite">
        <div class="tool-heading">
          <div><p class="eyebrow" id="tool-kicker"></p><h2 id="tool-title">${tool.title}</h2></div>
          <div class="heading-actions">
            <button class="secondary-button" id="load-example" type="button" data-i18n="common.example">Example</button>
            <button class="secondary-button" id="clear-tool" type="button" data-i18n="common.clear">Clear</button>
          </div>
        </div>
        <div class="tool-body" id="tool-body"></div>
      </section>
      <article class="tool-article">
        <h2>${ui.what}</h2>
        <p>${tool.what}</p>
        <h2>${ui.how}</h2>
        <p>${tool.example}</p>
        ${guideHtml}
        ${detailHtml}
        <h2>${ui.privacy}</h2>
        <p>${ui.privacyText}</p>
        <h2>${ui.faq}</h2>
        ${faqHtml}
        <h2>${ui.more}</h2>
        <div class="related-tools">${relatedLinks(locale)}</div>
      </article>
    </main>
    <footer class="site-footer tool-page-footer">
      <div><p>CodeKitBox</p><p>${ui.footer}</p></div>
      <nav class="footer-links"><a href="/about.html">${ui.links[0]}</a><a href="/privacy.html">${ui.links[1]}</a><a href="/terms.html">${ui.links[2]}</a><a href="/disclaimer.html">${ui.links[3]}</a><a href="/contact.html">${ui.links[4]}</a></nav>
    </footer>
    ${sourceTool.id === "qrcode" ? '<script src="/vendor/qrcode.min.js" defer></script>' : ""}
    <script src="/app.js" defer></script>
  </body>
</html>`;
}

for (const locale of ["en", "zh", "ja"]) {
  const toolsDir = path.join(root, localeUi[locale].prefix, "tools");
  fs.rmSync(toolsDir, { recursive: true, force: true });
  for (const tool of tools) {
    const dir = path.join(toolsDir, tool.slug);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, "index.html"), page(tool, locale), "utf8");
  }
}

const sitemapEntries = [
  ["", "1.0"],
  ...["en", "zh", "ja"].flatMap((locale) =>
    tools.map((tool) => [toolPath(tool, locale).replace(/^\//, ""), "0.9"])),
  ["about.html", "0.5"],
  ["privacy.html", "0.4"],
  ["terms.html", "0.4"],
  ["disclaimer.html", "0.4"],
  ["contact.html", "0.5"],
];
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries.map(([url, priority]) => `  <url><loc>${baseUrl}/${url}</loc><priority>${priority}</priority></url>`).join("\n")}
</urlset>
`;
fs.writeFileSync(path.join(root, "sitemap.xml"), sitemap, "utf8");
console.log(`Generated ${tools.length * 3} localized tool pages and sitemap.xml`);
