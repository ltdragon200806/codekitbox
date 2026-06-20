const i18n = {
  en: {
    "nav.tools": "Tools",
    "nav.privacy": "Privacy",
    "nav.faq": "FAQ",
    "hero.eyebrow": "Browser-based utilities",
    "hero.title": "Developer tools that stay on your device.",
    "hero.copy": "Encode, decode, format, convert, and generate common developer values without sending your input to a server.",
    "hero.local": "Runs locally",
    "hero.noAccount": "No account",
    "hero.free": "Free utilities",
    "search.label": "Find a tool",
    "search.placeholder": "Search Base64, JWT, JSON, URL...",
    "search.noResults": "No matching tools",
    "popular.eyebrow": "Quick access",
    "popular.title": "Popular tools",
    "popular.all": "View all tools",
    "popular.base64": "Encode and decode text",
    "popular.jwt": "Inspect token claims",
    "popular.json": "Validate and beautify",
    "popular.timestamp": "Convert Unix time",
    "popular.url": "Inspect URL parts",
    "popular.uuid": "Generate UUID v4",
    "popular.qr": "Create a scannable code",
    "popular.image": "Compress and resize photos",
    "category.encoding": "Encoding & Web",
    "category.data": "Data & Time",
    "category.text": "Text & Testing",
    "category.security": "Security & Generators",
    "recent.title": "Recently used",
    "directory.title": "Browse individual tools",
    "footer.about": "About",
    "footer.privacy": "Privacy",
    "footer.terms": "Terms",
    "footer.disclaimer": "Disclaimer",
    "footer.contact": "Contact",
    "accessibility.skip": "Skip to tools",
    "ad.label": "Advertisement",
    "common.clear": "Clear",
    "common.example": "Example",
    "common.copy": "Copy",
    "common.copied": "Copied",
    "menu.base64": "Base64",
    "menu.url": "URL Encode",
    "menu.jwt": "JWT Decoder",
    "menu.timestamp": "Timestamp",
    "menu.json": "JSON Formatter",
    "menu.uuid": "UUID",
    "menu.hash": "Hash",
    "menu.regex": "Regex",
    "menu.diff": "Text Diff",
    "menu.csv": "CSV / JSON",
    "menu.text": "Text Cleaner",
    "menu.case": "Case Converter",
    "menu.html": "HTML Entities",
    "menu.urlparser": "URL Parser",
    "menu.imagecompressor": "Image Compressor",
    "menu.imageresizer": "Image Resizer",
    "menu.imageconverter": "Image Converter",
    "menu.qrcode": "QR Code Generator",
    "menu.password": "Password Generator",
    "menu.percentage": "Percentage Calculator",
    "menu.random": "Random Number",
    "menu.wordcount": "Word Counter",
    "category.everyday": "Everyday Tools",
    "category.images": "Image Tools",
    "tool.imagecompressor.kicker": "Images",
    "tool.imagecompressor.title": "Image Compressor",
    "tool.imageresizer.kicker": "Images",
    "tool.imageresizer.title": "Image Resizer",
    "tool.imageconverter.kicker": "Images",
    "tool.imageconverter.title": "Image Format Converter",
    "tool.qrcode.kicker": "Everyday",
    "tool.qrcode.title": "QR Code Generator",
    "tool.password.kicker": "Everyday",
    "tool.password.title": "Strong Password Generator",
    "tool.percentage.kicker": "Calculator",
    "tool.percentage.title": "Percentage Calculator",
    "tool.random.kicker": "Generator",
    "tool.random.title": "Random Number Generator",
    "tool.wordcount.kicker": "Text",
    "tool.wordcount.title": "Word and Character Counter",
    "tool.base64.kicker": "Encoding",
    "tool.base64.title": "Base64 Encode and Decode Online",
    "tool.url.title": "URL Encode and Decode Online",
    "tool.jwt.kicker": "Tokens",
    "tool.jwt.title": "JWT Decoder Online",
    "tool.timestamp.kicker": "Time",
    "tool.timestamp.title": "Unix Timestamp Converter",
    "tool.json.kicker": "Formatting",
    "tool.json.title": "JSON Formatter and Minifier",
    "tool.uuid.kicker": "Generators",
    "tool.uuid.title": "UUID Generator",
    "tool.hash.kicker": "Security",
    "tool.hash.title": "Hash Generator",
    "tool.regex.kicker": "Testing",
    "tool.regex.title": "Regex Tester",
    "tool.diff.kicker": "Comparison",
    "tool.diff.title": "Text Diff Checker",
    "tool.csv.kicker": "Data",
    "tool.csv.title": "CSV and JSON Converter",
    "tool.text.kicker": "Text",
    "tool.text.title": "Text Cleaner, Deduplicator and Sorter",
    "tool.case.kicker": "Text",
    "tool.case.title": "Case Converter",
    "tool.html.kicker": "Encoding",
    "tool.html.title": "HTML Entity Encoder and Decoder",
    "tool.urlparser.kicker": "Web",
    "tool.urlparser.title": "URL Parser",
    "field.input": "Input",
    "field.output": "Output",
    "field.jwt": "JWT token",
    "field.header": "Header",
    "field.payload": "Payload",
    "field.timestamp": "Timestamp",
    "field.unit": "Unit",
    "field.date": "Date and time",
    "field.jsonInput": "JSON input",
    "field.jsonOutput": "Formatted output",
    "field.hashOutput": "Hash output",
    "field.pattern": "Pattern",
    "field.flags": "Flags",
    "field.matches": "Matches",
    "field.testText": "Test text",
    "action.encode": "Encode",
    "action.decode": "Decode",
    "action.decodeJwt": "Decode JWT",
    "action.timestampToDate": "Timestamp to Date",
    "action.dateToTimestamp": "Date to Timestamp",
    "action.now": "Use Current Time",
    "action.format": "Format",
    "action.minify": "Minify",
    "action.generateUuid": "Generate UUIDs",
    "action.testRegex": "Test Regex",
    "action.compare": "Compare Text",
    "action.csvToJson": "CSV to JSON",
    "action.jsonToCsv": "JSON to CSV",
    "action.dedupe": "Remove Duplicates",
    "action.sortAsc": "Sort A-Z",
    "action.sortDesc": "Sort Z-A",
    "action.removeEmpty": "Remove Empty Lines",
    "action.upper": "UPPERCASE",
    "action.lower": "lowercase",
    "action.title": "Title Case",
    "action.camel": "camelCase",
    "action.snake": "snake_case",
    "action.kebab": "kebab-case",
    "action.encodeHtml": "Encode HTML",
    "action.decodeHtml": "Decode HTML",
    "action.parseUrl": "Parse URL",
    "msg.base64": "Base64 is commonly used to represent binary data as plain text.",
    "msg.jwt": "This decoder does not verify the JWT signature.",
    "msg.json": "Paste JSON to validate and format it.",
    "msg.jsonValid": "Valid JSON.",
    "msg.uuid": "Generates random UUID v4 values using the browser crypto API.",
    "msg.hash": "Modern browsers support SHA hashing through Web Crypto. MD5 is intentionally omitted from this first version because Web Crypto does not provide it.",
    "error.base64": "Invalid Base64 input.",
    "error.url": "Invalid encoded URL component.",
    "error.jwt": "Invalid JWT.",
    "jwt.expired": "Token is expired",
    "jwt.active": "Token is not expired",
    "jwt.noExpiry": "No expiration claim",
    "error.timestamp": "Invalid timestamp.",
    "error.date": "Invalid date.",
    "result.noMatches": "No matches.",
    "result.added": "Added",
    "result.removed": "Removed",
    "result.unchanged": "Unchanged",
    "result.lines": "Lines",
    "result.words": "Words",
    "result.characters": "Characters",
    "error.csv": "Unable to convert this CSV.",
    "error.jsonArray": "Enter a JSON array of objects.",
    "error.urlParse": "Enter a valid absolute URL, including https:// or http://.",
    "privacy.title": "Private by default",
    "privacy.copy": "These tools run locally in your browser whenever possible. Your text, tokens, timestamps, and JSON snippets are processed on your device and are not uploaded by this static page.",
    "quick.title": "Built for quick checks",
    "quick.copy": "Use CodeKitBox for everyday development tasks: decoding a JWT payload, formatting JSON, converting Unix time, generating UUIDs, or testing a regular expression against sample text.",
    "faq.title": "Frequently Asked Questions",
    "faq.free.q": "Are these tools free?",
    "faq.free.a": "Yes. The first version is free and does not require an account.",
    "faq.upload.q": "Is my data uploaded?",
    "faq.upload.a": "No server upload is required for the included tools. They are designed to run in your browser.",
    "faq.jwt.q": "Can I use the decoded JWT as proof of validity?",
    "faq.jwt.a": "No. This tool decodes JWT header and payload data for inspection. It does not verify signatures or prove that a token is trusted.",
    "footer.copy": "Fast online utilities for developers and technical learners.",
  },
  zh: {
    "nav.tools": "工具",
    "nav.privacy": "隐私",
    "nav.faq": "常见问题",
    "hero.eyebrow": "浏览器本地工具",
    "hero.title": "常用开发工具，尽量留在你的设备上处理。",
    "hero.copy": "编码、解码、格式化、转换和生成常见开发数据，适合日常快速检查。",
    "hero.local": "本地处理",
    "hero.noAccount": "无需账号",
    "hero.free": "免费工具",
    "search.label": "查找工具",
    "search.placeholder": "搜索 Base64、JWT、JSON、URL...",
    "search.noResults": "没有匹配的工具",
    "popular.eyebrow": "快速访问",
    "popular.title": "常用工具",
    "popular.all": "查看全部工具",
    "popular.base64": "编码与解码文本",
    "popular.jwt": "查看令牌声明",
    "popular.json": "验证并美化 JSON",
    "popular.timestamp": "转换 Unix 时间",
    "popular.url": "查看 URL 组成",
    "popular.uuid": "生成 UUID v4",
    "popular.qr": "创建可扫描二维码",
    "popular.image": "压缩和调整图片",
    "category.encoding": "编码与网页",
    "category.data": "数据与时间",
    "category.text": "文本与测试",
    "category.security": "安全与生成器",
    "recent.title": "最近使用",
    "directory.title": "浏览独立工具页面",
    "footer.about": "关于",
    "footer.privacy": "隐私",
    "footer.terms": "条款",
    "footer.disclaimer": "免责声明",
    "footer.contact": "联系",
    "accessibility.skip": "跳到工具区域",
    "ad.label": "广告位",
    "common.clear": "清空",
    "common.example": "示例",
    "common.copy": "复制",
    "common.copied": "已复制",
    "menu.base64": "Base64",
    "menu.url": "URL 编码",
    "menu.jwt": "JWT 解码",
    "menu.timestamp": "时间戳",
    "menu.json": "JSON 格式化",
    "menu.uuid": "UUID",
    "menu.hash": "哈希",
    "menu.regex": "正则测试",
    "menu.diff": "文本比较",
    "menu.csv": "CSV / JSON",
    "menu.text": "文本清理",
    "menu.case": "大小写转换",
    "menu.html": "HTML 实体",
    "menu.urlparser": "URL 解析",
    "menu.imagecompressor": "图片压缩",
    "menu.imageresizer": "图片尺寸调整",
    "menu.imageconverter": "图片格式转换",
    "menu.qrcode": "二维码生成器",
    "menu.password": "强密码生成器",
    "menu.percentage": "百分比计算器",
    "menu.random": "随机数生成器",
    "menu.wordcount": "字数统计",
    "category.everyday": "日常工具",
    "category.images": "图片工具",
    "tool.imagecompressor.kicker": "图片",
    "tool.imagecompressor.title": "图片压缩",
    "tool.imageresizer.kicker": "图片",
    "tool.imageresizer.title": "图片尺寸调整",
    "tool.imageconverter.kicker": "图片",
    "tool.imageconverter.title": "图片格式转换",
    "tool.qrcode.kicker": "日常",
    "tool.qrcode.title": "二维码生成器",
    "tool.password.kicker": "日常",
    "tool.password.title": "强密码生成器",
    "tool.percentage.kicker": "计算器",
    "tool.percentage.title": "百分比计算器",
    "tool.random.kicker": "生成器",
    "tool.random.title": "随机数生成器",
    "tool.wordcount.kicker": "文本",
    "tool.wordcount.title": "字数与字符统计",
    "tool.base64.kicker": "编码",
    "tool.base64.title": "Base64 在线编码与解码",
    "tool.url.title": "URL 在线编码与解码",
    "tool.jwt.kicker": "令牌",
    "tool.jwt.title": "JWT 在线解码",
    "tool.timestamp.kicker": "时间",
    "tool.timestamp.title": "Unix 时间戳转换",
    "tool.json.kicker": "格式化",
    "tool.json.title": "JSON 格式化与压缩",
    "tool.uuid.kicker": "生成器",
    "tool.uuid.title": "UUID 生成器",
    "tool.hash.kicker": "安全",
    "tool.hash.title": "哈希生成器",
    "tool.regex.kicker": "测试",
    "tool.regex.title": "正则表达式测试器",
    "tool.diff.kicker": "比较",
    "tool.diff.title": "文本差异比较",
    "tool.csv.kicker": "数据",
    "tool.csv.title": "CSV 与 JSON 转换",
    "tool.text.kicker": "文本",
    "tool.text.title": "文本去重、排序与清理",
    "tool.case.kicker": "文本",
    "tool.case.title": "大小写与命名格式转换",
    "tool.html.kicker": "编码",
    "tool.html.title": "HTML 实体编码与解码",
    "tool.urlparser.kicker": "网络",
    "tool.urlparser.title": "URL 解析器",
    "field.input": "输入",
    "field.output": "输出",
    "field.jwt": "JWT 令牌",
    "field.header": "Header",
    "field.payload": "Payload",
    "field.timestamp": "时间戳",
    "field.unit": "单位",
    "field.date": "日期和时间",
    "field.jsonInput": "JSON 输入",
    "field.jsonOutput": "格式化输出",
    "field.hashOutput": "哈希输出",
    "field.pattern": "表达式",
    "field.flags": "标志",
    "field.matches": "匹配数",
    "field.testText": "测试文本",
    "action.encode": "编码",
    "action.decode": "解码",
    "action.decodeJwt": "解码 JWT",
    "action.timestampToDate": "时间戳转日期",
    "action.dateToTimestamp": "日期转时间戳",
    "action.now": "使用当前时间",
    "action.format": "格式化",
    "action.minify": "压缩",
    "action.generateUuid": "生成 UUID",
    "action.testRegex": "测试正则",
    "action.compare": "比较文本",
    "action.csvToJson": "CSV 转 JSON",
    "action.jsonToCsv": "JSON 转 CSV",
    "action.dedupe": "删除重复行",
    "action.sortAsc": "正序排列",
    "action.sortDesc": "倒序排列",
    "action.removeEmpty": "删除空行",
    "action.upper": "转大写",
    "action.lower": "转小写",
    "action.title": "标题格式",
    "action.camel": "驼峰格式",
    "action.snake": "下划线格式",
    "action.kebab": "短横线格式",
    "action.encodeHtml": "编码 HTML",
    "action.decodeHtml": "解码 HTML",
    "action.parseUrl": "解析 URL",
    "msg.base64": "Base64 常用于把二进制数据表示为纯文本。",
    "msg.jwt": "此工具只解码 JWT，不验证签名。",
    "msg.json": "粘贴 JSON 后可验证并格式化。",
    "msg.jsonValid": "JSON 有效。",
    "msg.uuid": "使用浏览器 Crypto API 生成随机 UUID v4。",
    "msg.hash": "现代浏览器可通过 Web Crypto 生成 SHA 哈希。第一版暂不提供 MD5。",
    "error.base64": "Base64 输入无效。",
    "error.url": "URL 编码内容无效。",
    "error.jwt": "JWT 无效。",
    "jwt.expired": "令牌已过期",
    "jwt.active": "令牌尚未过期",
    "jwt.noExpiry": "没有过期时间声明",
    "error.timestamp": "时间戳无效。",
    "error.date": "日期无效。",
    "result.noMatches": "没有匹配结果。",
    "result.added": "新增",
    "result.removed": "删除",
    "result.unchanged": "未变",
    "result.lines": "行数",
    "result.words": "词数",
    "result.characters": "字符数",
    "error.csv": "无法转换此 CSV。",
    "error.jsonArray": "请输入由对象组成的 JSON 数组。",
    "error.urlParse": "请输入包含 https:// 或 http:// 的有效完整 URL。",
    "privacy.title": "默认保护隐私",
    "privacy.copy": "这些工具尽量在浏览器本地运行。你的文本、令牌、时间戳和 JSON 片段会在设备上处理，不会由这个静态页面上传。",
    "quick.title": "适合快速检查",
    "quick.copy": "你可以用 CodeKitBox 解码 JWT、格式化 JSON、转换 Unix 时间、生成 UUID，或者用样本文本测试正则表达式。",
    "faq.title": "常见问题",
    "faq.free.q": "这些工具免费吗？",
    "faq.free.a": "是的，第一版免费使用，不需要注册账号。",
    "faq.upload.q": "我的数据会上传吗？",
    "faq.upload.a": "当前工具不需要服务器上传，设计目标是在浏览器中直接运行。",
    "faq.jwt.q": "解码后的 JWT 能证明有效吗？",
    "faq.jwt.a": "不能。此工具只用于查看 JWT 的 Header 和 Payload，不验证签名，也不证明令牌可信。",
    "footer.copy": "给开发者和技术学习者使用的快速在线工具。",
  },
  ja: {
    "nav.tools": "ツール",
    "nav.privacy": "プライバシー",
    "nav.faq": "FAQ",
    "hero.eyebrow": "ブラウザ内ツール",
    "hero.title": "よく使う開発ツールを、できるだけ端末内で処理。",
    "hero.copy": "エンコード、デコード、整形、変換、生成をブラウザで素早く行えます。",
    "hero.local": "ブラウザ内処理",
    "hero.noAccount": "登録不要",
    "hero.free": "無料ツール",
    "search.label": "ツールを検索",
    "search.placeholder": "Base64、JWT、JSON、URL を検索...",
    "search.noResults": "一致するツールはありません",
    "popular.eyebrow": "クイックアクセス",
    "popular.title": "よく使うツール",
    "popular.all": "すべてのツールを見る",
    "popular.base64": "テキストを変換",
    "popular.jwt": "トークン情報を確認",
    "popular.json": "JSON を検証・整形",
    "popular.timestamp": "Unix 時刻を変換",
    "popular.url": "URL の構成を確認",
    "popular.uuid": "UUID v4 を生成",
    "popular.qr": "スキャン可能なコードを作成",
    "popular.image": "画像を圧縮・リサイズ",
    "category.encoding": "エンコード・Web",
    "category.data": "データ・時刻",
    "category.text": "テキスト・テスト",
    "category.security": "セキュリティ・生成",
    "recent.title": "最近使用したツール",
    "directory.title": "個別ツールを見る",
    "footer.about": "概要",
    "footer.privacy": "プライバシー",
    "footer.terms": "利用規約",
    "footer.disclaimer": "免責事項",
    "footer.contact": "お問い合わせ",
    "accessibility.skip": "ツールへ移動",
    "ad.label": "広告",
    "common.clear": "クリア",
    "common.example": "サンプル",
    "common.copy": "コピー",
    "common.copied": "コピー済み",
    "menu.base64": "Base64",
    "menu.url": "URL エンコード",
    "menu.jwt": "JWT デコード",
    "menu.timestamp": "タイムスタンプ",
    "menu.json": "JSON 整形",
    "menu.uuid": "UUID",
    "menu.hash": "ハッシュ",
    "menu.regex": "正規表現",
    "menu.diff": "テキスト比較",
    "menu.csv": "CSV / JSON",
    "menu.text": "テキスト整理",
    "menu.case": "大文字小文字",
    "menu.html": "HTML エンティティ",
    "menu.urlparser": "URL 解析",
    "menu.imagecompressor": "画像圧縮",
    "menu.imageresizer": "画像リサイズ",
    "menu.imageconverter": "画像形式変換",
    "menu.qrcode": "QR コード生成",
    "menu.password": "パスワード生成",
    "menu.percentage": "パーセント計算",
    "menu.random": "乱数生成",
    "menu.wordcount": "文字数カウンター",
    "category.everyday": "日常ツール",
    "category.images": "画像ツール",
    "tool.imagecompressor.kicker": "画像",
    "tool.imagecompressor.title": "画像圧縮",
    "tool.imageresizer.kicker": "画像",
    "tool.imageresizer.title": "画像リサイズ",
    "tool.imageconverter.kicker": "画像",
    "tool.imageconverter.title": "画像形式変換",
    "tool.qrcode.kicker": "日常",
    "tool.qrcode.title": "QR コード生成",
    "tool.password.kicker": "日常",
    "tool.password.title": "強力なパスワード生成",
    "tool.percentage.kicker": "計算",
    "tool.percentage.title": "パーセント計算",
    "tool.random.kicker": "生成",
    "tool.random.title": "乱数生成",
    "tool.wordcount.kicker": "テキスト",
    "tool.wordcount.title": "文字数・単語数カウンター",
    "tool.base64.kicker": "エンコード",
    "tool.base64.title": "Base64 エンコード・デコード",
    "tool.url.title": "URL エンコード・デコード",
    "tool.jwt.kicker": "トークン",
    "tool.jwt.title": "JWT デコーダー",
    "tool.timestamp.kicker": "時間",
    "tool.timestamp.title": "Unix タイムスタンプ変換",
    "tool.json.kicker": "整形",
    "tool.json.title": "JSON 整形・圧縮",
    "tool.uuid.kicker": "生成",
    "tool.uuid.title": "UUID 生成",
    "tool.hash.kicker": "セキュリティ",
    "tool.hash.title": "ハッシュ生成",
    "tool.regex.kicker": "テスト",
    "tool.regex.title": "正規表現テスター",
    "tool.diff.kicker": "比較",
    "tool.diff.title": "テキスト差分チェッカー",
    "tool.csv.kicker": "データ",
    "tool.csv.title": "CSV・JSON 変換",
    "tool.text.kicker": "テキスト",
    "tool.text.title": "重複削除・並べ替え・整理",
    "tool.case.kicker": "テキスト",
    "tool.case.title": "大文字小文字・命名形式変換",
    "tool.html.kicker": "エンコード",
    "tool.html.title": "HTML エンティティ変換",
    "tool.urlparser.kicker": "Web",
    "tool.urlparser.title": "URL パーサー",
    "field.input": "入力",
    "field.output": "出力",
    "field.jwt": "JWT トークン",
    "field.header": "Header",
    "field.payload": "Payload",
    "field.timestamp": "タイムスタンプ",
    "field.unit": "単位",
    "field.date": "日時",
    "field.jsonInput": "JSON 入力",
    "field.jsonOutput": "整形結果",
    "field.hashOutput": "ハッシュ結果",
    "field.pattern": "パターン",
    "field.flags": "フラグ",
    "field.matches": "一致数",
    "field.testText": "テスト文字列",
    "action.encode": "エンコード",
    "action.decode": "デコード",
    "action.decodeJwt": "JWT をデコード",
    "action.timestampToDate": "日時に変換",
    "action.dateToTimestamp": "タイムスタンプに変換",
    "action.now": "現在時刻を使う",
    "action.format": "整形",
    "action.minify": "圧縮",
    "action.generateUuid": "UUID を生成",
    "action.testRegex": "正規表現をテスト",
    "action.compare": "テキストを比較",
    "action.csvToJson": "CSV から JSON",
    "action.jsonToCsv": "JSON から CSV",
    "action.dedupe": "重複行を削除",
    "action.sortAsc": "昇順",
    "action.sortDesc": "降順",
    "action.removeEmpty": "空行を削除",
    "action.upper": "大文字",
    "action.lower": "小文字",
    "action.title": "タイトル形式",
    "action.camel": "camelCase",
    "action.snake": "snake_case",
    "action.kebab": "kebab-case",
    "action.encodeHtml": "HTML をエンコード",
    "action.decodeHtml": "HTML をデコード",
    "action.parseUrl": "URL を解析",
    "msg.base64": "Base64 はバイナリデータをテキストで表すためによく使われます。",
    "msg.jwt": "このツールは JWT の署名検証は行いません。",
    "msg.json": "JSON を貼り付けると検証して整形できます。",
    "msg.jsonValid": "有効な JSON です。",
    "msg.uuid": "ブラウザの Crypto API でランダムな UUID v4 を生成します。",
    "msg.hash": "ブラウザの Web Crypto で SHA ハッシュを生成します。初版では MD5 は省略しています。",
    "error.base64": "Base64 入力が無効です。",
    "error.url": "URL エンコード文字列が無効です。",
    "error.jwt": "JWT が無効です。",
    "jwt.expired": "トークンは期限切れです",
    "jwt.active": "トークンは期限切れではありません",
    "jwt.noExpiry": "有効期限の情報はありません",
    "error.timestamp": "タイムスタンプが無効です。",
    "error.date": "日時が無効です。",
    "result.noMatches": "一致はありません。",
    "result.added": "追加",
    "result.removed": "削除",
    "result.unchanged": "変更なし",
    "result.lines": "行数",
    "result.words": "単語数",
    "result.characters": "文字数",
    "error.csv": "この CSV を変換できません。",
    "error.jsonArray": "オブジェクトの JSON 配列を入力してください。",
    "error.urlParse": "https:// または http:// を含む有効な URL を入力してください。",
    "privacy.title": "プライバシー優先",
    "privacy.copy": "これらのツールは可能な限りブラウザ内で動作します。テキスト、トークン、タイムスタンプ、JSON はこの静的ページからアップロードされません。",
    "quick.title": "素早い確認に最適",
    "quick.copy": "JWT の確認、JSON 整形、Unix 時間変換、UUID 生成、正規表現テストなどの日常作業に使えます。",
    "faq.title": "よくある質問",
    "faq.free.q": "無料で使えますか？",
    "faq.free.a": "はい。初版は無料で、アカウント登録も不要です。",
    "faq.upload.q": "データはアップロードされますか？",
    "faq.upload.a": "含まれるツールはサーバーアップロード不要で、ブラウザ内で動作する設計です。",
    "faq.jwt.q": "デコードした JWT は有効性の証明になりますか？",
    "faq.jwt.a": "いいえ。Header と Payload を確認するためのもので、署名検証や信頼性の証明は行いません。",
    "footer.copy": "開発者と技術学習者のための高速オンラインツール。",
  },
};

let currentLang = getSavedLanguage();

const tools = {
  base64: {
    kicker: "tool.base64.kicker",
    title: "tool.base64.title",
    render() {
      return `
        <div class="field-grid">
          <div class="field">
            <label for="base64-input">${tr("field.input")}</label>
            <textarea id="base64-input" placeholder="Type text or Base64 here..."></textarea>
          </div>
          <div class="field">
            <label for="base64-output">${tr("field.output")}</label>
            <textarea id="base64-output" readonly></textarea>
            <button class="copy-button" data-copy="base64-output" type="button">${tr("common.copy")}</button>
          </div>
        </div>
        <div class="button-row">
          <button class="mode-button is-selected" data-mode-group="base64" id="base64-encode" type="button">${tr("action.encode")}</button>
          <button class="mode-button" data-mode-group="base64" id="base64-decode" type="button">${tr("action.decode")}</button>
        </div>
        <p class="message">${tr("msg.base64")}</p>
      `;
    },
    bind() {
      const input = qs("#base64-input");
      const output = qs("#base64-output");
      qs("#base64-encode").addEventListener("click", () => {
        output.value = toBase64(input.value);
      });
      qs("#base64-decode").addEventListener("click", () => {
        try {
          output.value = fromBase64(input.value);
        } catch {
          output.value = tr("error.base64");
        }
      });
    },
  },
  url: {
    kicker: "tool.base64.kicker",
    title: "tool.url.title",
    render() {
      return `
        <div class="field-grid">
          <div class="field">
            <label for="url-input">${tr("field.input")}</label>
            <textarea id="url-input" placeholder="https://example.com/search?q=hello world"></textarea>
          </div>
          <div class="field">
            <label for="url-output">${tr("field.output")}</label>
            <textarea id="url-output" readonly></textarea>
            <button class="copy-button" data-copy="url-output" type="button">${tr("common.copy")}</button>
          </div>
        </div>
        <div class="button-row">
          <button class="mode-button is-selected" data-mode-group="url" id="url-encode" type="button">${tr("action.encode")}</button>
          <button class="mode-button" data-mode-group="url" id="url-decode" type="button">${tr("action.decode")}</button>
        </div>
      `;
    },
    bind() {
      const input = qs("#url-input");
      const output = qs("#url-output");
      qs("#url-encode").addEventListener("click", () => {
        output.value = encodeURIComponent(input.value);
      });
      qs("#url-decode").addEventListener("click", () => {
        try {
          output.value = decodeURIComponent(input.value);
        } catch {
          output.value = tr("error.url");
        }
      });
    },
  },
  jwt: {
    kicker: "tool.jwt.kicker",
    title: "tool.jwt.title",
    render() {
      return `
        <div class="field">
          <label for="jwt-input">${tr("field.jwt")}</label>
          <textarea id="jwt-input" placeholder="Paste a JSON Web Token here..."></textarea>
        </div>
        <div class="button-row">
          <button class="primary-button" id="jwt-decode" type="button">${tr("action.decodeJwt")}</button>
        </div>
        <div class="result-list">
          <div>
            <span class="option-label">${tr("field.header")}</span>
            <pre class="result-box" id="jwt-header"></pre>
          </div>
          <div>
            <span class="option-label">${tr("field.payload")}</span>
            <pre class="result-box" id="jwt-payload"></pre>
          </div>
        </div>
        <div id="jwt-status"></div>
        <p class="message">${tr("msg.jwt")}</p>
      `;
    },
    bind() {
      qs("#jwt-decode").addEventListener("click", () => {
        const token = qs("#jwt-input").value.trim();
        const [header, payload] = token.split(".");
        try {
          const decodedHeader = JSON.parse(fromBase64Url(header));
          const decodedPayload = JSON.parse(fromBase64Url(payload));
          qs("#jwt-header").textContent = prettyJson(decodedHeader);
          qs("#jwt-payload").textContent = prettyJson(decodedPayload);
          qs("#jwt-status").innerHTML = jwtStatusHtml(decodedPayload);
        } catch {
          qs("#jwt-header").textContent = tr("error.jwt");
          qs("#jwt-payload").textContent = tr("error.jwt");
          qs("#jwt-status").innerHTML = "";
        }
      });
    },
  },
  timestamp: {
    kicker: "tool.timestamp.kicker",
    title: "tool.timestamp.title",
    render() {
      const now = Math.floor(Date.now() / 1000);
      return `
        <div class="small-grid">
          <div class="field">
            <label for="timestamp-input">${tr("field.timestamp")}</label>
            <input id="timestamp-input" value="${now}" inputmode="numeric" />
          </div>
          <div class="field">
            <label for="timestamp-unit">${tr("field.unit")}</label>
            <select id="timestamp-unit">
              <option value="seconds">Seconds</option>
              <option value="milliseconds">Milliseconds</option>
            </select>
          </div>
          <div class="field">
            <label for="date-input">${tr("field.date")}</label>
            <input id="date-input" type="datetime-local" />
          </div>
        </div>
        <div class="button-row">
          <button class="mode-button is-selected" data-mode-group="timestamp" id="timestamp-to-date" type="button">${tr("action.timestampToDate")}</button>
          <button class="mode-button" data-mode-group="timestamp" id="date-to-timestamp" type="button">${tr("action.dateToTimestamp")}</button>
          <button class="secondary-button" id="timestamp-now" type="button">${tr("action.now")}</button>
        </div>
        <pre class="result-box" id="timestamp-output"></pre>
      `;
    },
    bind() {
      const input = qs("#timestamp-input");
      const unit = qs("#timestamp-unit");
      const dateInput = qs("#date-input");
      const output = qs("#timestamp-output");
      const showDate = () => {
        const raw = Number(input.value);
        const ms = unit.value === "seconds" ? raw * 1000 : raw;
        const date = new Date(ms);
        output.textContent = Number.isNaN(date.getTime())
          ? tr("error.timestamp")
          : `Local: ${date.toString()}\nUTC: ${date.toISOString()}`;
      };
      qs("#timestamp-to-date").addEventListener("click", showDate);
      qs("#date-to-timestamp").addEventListener("click", () => {
        const ms = new Date(dateInput.value).getTime();
        output.textContent = Number.isNaN(ms)
          ? tr("error.date")
          : `Seconds: ${Math.floor(ms / 1000)}\nMilliseconds: ${ms}`;
      });
      qs("#timestamp-now").addEventListener("click", () => {
        input.value = Math.floor(Date.now() / 1000);
        unit.value = "seconds";
        showDate();
      });
      showDate();
    },
  },
  json: {
    kicker: "tool.json.kicker",
    title: "tool.json.title",
    render() {
      return `
        <div class="field-grid">
          <div class="field">
            <label for="json-input">${tr("field.jsonInput")}</label>
            <textarea id="json-input" placeholder='{"name":"CodeKitBox"}'></textarea>
          </div>
          <div class="field">
            <label for="json-output">${tr("field.jsonOutput")}</label>
            <textarea id="json-output" readonly></textarea>
            <button class="copy-button" data-copy="json-output" type="button">${tr("common.copy")}</button>
          </div>
        </div>
        <div class="button-row">
          <button class="mode-button is-selected" data-mode-group="json" id="json-format" type="button">${tr("action.format")}</button>
          <button class="mode-button" data-mode-group="json" id="json-minify" type="button">${tr("action.minify")}</button>
        </div>
        <p class="message" id="json-message">${tr("msg.json")}</p>
      `;
    },
    bind() {
      const input = qs("#json-input");
      const output = qs("#json-output");
      const message = qs("#json-message");
      const parse = () => JSON.parse(input.value);
      qs("#json-format").addEventListener("click", () => {
        try {
          output.value = prettyJson(parse());
          setMessage(message, tr("msg.jsonValid"), false);
        } catch (error) {
          setMessage(message, error.message, true);
        }
      });
      qs("#json-minify").addEventListener("click", () => {
        try {
          output.value = JSON.stringify(parse());
          setMessage(message, tr("msg.jsonValid"), false);
        } catch (error) {
          setMessage(message, error.message, true);
        }
      });
    },
  },
  uuid: {
    kicker: "tool.uuid.kicker",
    title: "tool.uuid.title",
    render() {
      return `
        <div class="button-row">
          <button class="primary-button" id="uuid-generate" type="button">${tr("action.generateUuid")}</button>
          <button class="copy-button" data-copy="uuid-output" type="button">${tr("common.copy")}</button>
        </div>
        <textarea id="uuid-output" readonly></textarea>
        <p class="message">${tr("msg.uuid")}</p>
      `;
    },
    bind() {
      const output = qs("#uuid-output");
      const generate = () => {
        output.value = Array.from({ length: 8 }, () => crypto.randomUUID()).join("\n");
      };
      qs("#uuid-generate").addEventListener("click", generate);
      generate();
    },
  },
  hash: {
    kicker: "tool.hash.kicker",
    title: "tool.hash.title",
    render() {
      return `
        <div class="field-grid">
          <div class="field">
            <label for="hash-input">${tr("field.input")}</label>
            <textarea id="hash-input" placeholder="Text to hash..."></textarea>
          </div>
          <div class="field">
            <label for="hash-output">${tr("field.hashOutput")}</label>
            <textarea id="hash-output" readonly></textarea>
            <button class="copy-button" data-copy="hash-output" type="button">${tr("common.copy")}</button>
          </div>
        </div>
        <div class="button-row">
          <button class="mode-button is-selected" data-mode-group="hash" data-hash="SHA-256" type="button">SHA-256</button>
          <button class="mode-button" data-mode-group="hash" data-hash="SHA-1" type="button">SHA-1</button>
        </div>
        <p class="message">${tr("msg.hash")}</p>
      `;
    },
    bind() {
      qsa("[data-hash]").forEach((button) => {
        button.addEventListener("click", async () => {
          const value = qs("#hash-input").value;
          qs("#hash-output").value = await digest(value, button.dataset.hash);
        });
      });
    },
  },
  regex: {
    kicker: "tool.regex.kicker",
    title: "tool.regex.title",
    render() {
      return `
        <div class="small-grid">
          <div class="field">
            <label for="regex-pattern">${tr("field.pattern")}</label>
            <input id="regex-pattern" placeholder="\\b\\w+@\\w+\\.\\w+\\b" />
          </div>
          <div class="field">
            <label for="regex-flags">${tr("field.flags")}</label>
            <input id="regex-flags" value="g" />
          </div>
          <div class="field">
            <label for="regex-count">${tr("field.matches")}</label>
            <input id="regex-count" readonly />
          </div>
        </div>
        <div class="field">
          <label for="regex-text">${tr("field.testText")}</label>
          <textarea id="regex-text" placeholder="Paste sample text here..."></textarea>
        </div>
        <div class="button-row">
          <button class="primary-button" id="regex-test" type="button">${tr("action.testRegex")}</button>
        </div>
        <pre class="result-box" id="regex-output"></pre>
      `;
    },
    bind() {
      qs("#regex-test").addEventListener("click", () => {
        const pattern = qs("#regex-pattern").value;
        const flags = qs("#regex-flags").value;
        const text = qs("#regex-text").value;
        try {
          const regex = new RegExp(pattern, flags.includes("g") ? flags : `${flags}g`);
          const matches = Array.from(text.matchAll(regex));
          qs("#regex-count").value = matches.length;
          qs("#regex-output").textContent =
            matches.map((match, index) => `${index + 1}. ${match[0]}`).join("\n") ||
            tr("result.noMatches");
        } catch (error) {
          qs("#regex-output").textContent = error.message;
          qs("#regex-count").value = "0";
        }
      });
    },
  },
  diff: {
    kicker: "tool.diff.kicker",
    title: "tool.diff.title",
    render() {
      return `
        <div class="field-grid">
          <div class="field">
            <label for="diff-left">${tr("field.input")} A</label>
            <textarea id="diff-left" placeholder="Original text..."></textarea>
          </div>
          <div class="field">
            <label for="diff-right">${tr("field.input")} B</label>
            <textarea id="diff-right" placeholder="Changed text..."></textarea>
          </div>
        </div>
        <div class="button-row">
          <button class="primary-button" id="diff-compare" type="button">${tr("action.compare")}</button>
        </div>
        <div class="stats-row" id="diff-stats"></div>
        <pre class="result-box" id="diff-output"></pre>
      `;
    },
    bind() {
      qs("#diff-compare").addEventListener("click", () => {
        const result = lineDiff(qs("#diff-left").value, qs("#diff-right").value);
        const counts = result.reduce(
          (total, item) => ({ ...total, [item.type]: total[item.type] + 1 }),
          { added: 0, removed: 0, same: 0 },
        );
        qs("#diff-output").innerHTML = result
          .map((item) => {
            const marker = item.type === "added" ? "+" : item.type === "removed" ? "-" : " ";
            return `<span class="diff-line diff-${item.type}">${marker} ${escapeHtml(item.value)}</span>`;
          })
          .join("");
        qs("#diff-stats").innerHTML = `
          <span class="stat">${tr("result.added")}: ${counts.added}</span>
          <span class="stat">${tr("result.removed")}: ${counts.removed}</span>
          <span class="stat">${tr("result.unchanged")}: ${counts.same}</span>
        `;
      });
    },
  },
  csv: {
    kicker: "tool.csv.kicker",
    title: "tool.csv.title",
    render() {
      return `
        <div class="field-grid">
          <div class="field">
            <label for="csv-input">${tr("field.input")}</label>
            <textarea id="csv-input" placeholder="name,role&#10;Ada,Engineer"></textarea>
          </div>
          <div class="field">
            <label for="csv-output">${tr("field.output")}</label>
            <textarea id="csv-output" readonly></textarea>
            <button class="copy-button" data-copy="csv-output" type="button">${tr("common.copy")}</button>
          </div>
        </div>
        <div class="button-row">
          <button class="mode-button is-selected" data-mode-group="csv" id="csv-to-json" type="button">${tr("action.csvToJson")}</button>
          <button class="mode-button" data-mode-group="csv" id="json-to-csv" type="button">${tr("action.jsonToCsv")}</button>
        </div>
        <p class="message" id="csv-message">Supports quoted CSV fields and commas inside quotes.</p>
      `;
    },
    bind() {
      const input = qs("#csv-input");
      const output = qs("#csv-output");
      const message = qs("#csv-message");
      qs("#csv-to-json").addEventListener("click", () => {
        try {
          output.value = prettyJson(csvToObjects(input.value));
          setMessage(message, tr("msg.jsonValid"), false);
        } catch {
          setMessage(message, tr("error.csv"), true);
        }
      });
      qs("#json-to-csv").addEventListener("click", () => {
        try {
          output.value = objectsToCsv(JSON.parse(input.value));
          setMessage(message, tr("msg.jsonValid"), false);
        } catch {
          setMessage(message, tr("error.jsonArray"), true);
        }
      });
    },
  },
  text: {
    kicker: "tool.text.kicker",
    title: "tool.text.title",
    render() {
      return `
        <div class="field">
          <label for="text-input">${tr("field.input")}</label>
          <textarea id="text-input" placeholder="One item per line..."></textarea>
        </div>
        <div class="button-row">
          <button class="mode-button is-selected" data-mode-group="text" id="text-dedupe" type="button">${tr("action.dedupe")}</button>
          <button class="mode-button" data-mode-group="text" id="text-sort-asc" type="button">${tr("action.sortAsc")}</button>
          <button class="mode-button" data-mode-group="text" id="text-sort-desc" type="button">${tr("action.sortDesc")}</button>
          <button class="mode-button" data-mode-group="text" id="text-empty" type="button">${tr("action.removeEmpty")}</button>
        </div>
        <div class="stats-row" id="text-stats"></div>
      `;
    },
    bind() {
      const input = qs("#text-input");
      const update = (lines) => {
        input.value = lines.join("\n");
        updateTextStats(input.value);
      };
      qs("#text-dedupe").addEventListener("click", () => update([...new Set(toLines(input.value))]));
      qs("#text-sort-asc").addEventListener("click", () =>
        update(toLines(input.value).sort((a, b) => a.localeCompare(b))),
      );
      qs("#text-sort-desc").addEventListener("click", () =>
        update(toLines(input.value).sort((a, b) => b.localeCompare(a))),
      );
      qs("#text-empty").addEventListener("click", () =>
        update(toLines(input.value).filter((line) => line.trim())),
      );
      input.addEventListener("input", () => updateTextStats(input.value));
      updateTextStats("");
    },
  },
  case: {
    kicker: "tool.case.kicker",
    title: "tool.case.title",
    render() {
      return `
        <div class="field-grid">
          <div class="field">
            <label for="case-input">${tr("field.input")}</label>
            <textarea id="case-input" placeholder="example text value"></textarea>
          </div>
          <div class="field">
            <label for="case-output">${tr("field.output")}</label>
            <textarea id="case-output" readonly></textarea>
            <button class="copy-button" data-copy="case-output" type="button">${tr("common.copy")}</button>
          </div>
        </div>
        <div class="button-row">
          <button class="mode-button is-selected" data-mode-group="case" data-case="upper" type="button">${tr("action.upper")}</button>
          <button class="mode-button" data-mode-group="case" data-case="lower" type="button">${tr("action.lower")}</button>
          <button class="mode-button" data-mode-group="case" data-case="title" type="button">${tr("action.title")}</button>
          <button class="mode-button" data-mode-group="case" data-case="camel" type="button">${tr("action.camel")}</button>
          <button class="mode-button" data-mode-group="case" data-case="snake" type="button">${tr("action.snake")}</button>
          <button class="mode-button" data-mode-group="case" data-case="kebab" type="button">${tr("action.kebab")}</button>
        </div>
      `;
    },
    bind() {
      qsa("[data-case]").forEach((button) => {
        button.addEventListener("click", () => {
          qs("#case-output").value = convertCase(qs("#case-input").value, button.dataset.case);
        });
      });
    },
  },
  html: {
    kicker: "tool.html.kicker",
    title: "tool.html.title",
    render() {
      return `
        <div class="field-grid">
          <div class="field">
            <label for="html-input">${tr("field.input")}</label>
            <textarea id="html-input" placeholder="<p>Hello & welcome</p>"></textarea>
          </div>
          <div class="field">
            <label for="html-output">${tr("field.output")}</label>
            <textarea id="html-output" readonly></textarea>
            <button class="copy-button" data-copy="html-output" type="button">${tr("common.copy")}</button>
          </div>
        </div>
        <div class="button-row">
          <button class="mode-button is-selected" data-mode-group="html" id="html-encode" type="button">${tr("action.encodeHtml")}</button>
          <button class="mode-button" data-mode-group="html" id="html-decode" type="button">${tr("action.decodeHtml")}</button>
        </div>
      `;
    },
    bind() {
      const input = qs("#html-input");
      const output = qs("#html-output");
      qs("#html-encode").addEventListener("click", () => {
        output.value = escapeHtml(input.value);
      });
      qs("#html-decode").addEventListener("click", () => {
        output.value = decodeHtml(input.value);
      });
    },
  },
  urlparser: {
    kicker: "tool.urlparser.kicker",
    title: "tool.urlparser.title",
    render() {
      return `
        <div class="field">
          <label for="urlparser-input">URL</label>
          <input id="urlparser-input" placeholder="https://example.com/path?q=hello#section" />
        </div>
        <div class="button-row">
          <button class="primary-button" id="urlparser-parse" type="button">${tr("action.parseUrl")}</button>
        </div>
        <pre class="result-box" id="urlparser-output"></pre>
      `;
    },
    bind() {
      qs("#urlparser-parse").addEventListener("click", () => {
        try {
          const url = new URL(qs("#urlparser-input").value.trim());
          qs("#urlparser-output").textContent = prettyJson({
            protocol: url.protocol,
            username: url.username,
            password: url.password ? "********" : "",
            hostname: url.hostname,
            port: url.port,
            pathname: url.pathname,
            search: url.search,
            parameters: Object.fromEntries(url.searchParams.entries()),
            hash: url.hash,
            origin: url.origin,
          });
        } catch {
          qs("#urlparser-output").textContent = tr("error.urlParse");
        }
      });
    },
  },
  imagecompressor: {
    kicker: "tool.imagecompressor.kicker",
    title: "tool.imagecompressor.title",
    render() {
      return imageToolTemplate("compress");
    },
    bind() {
      bindImageTool("compress");
    },
  },
  imageresizer: {
    kicker: "tool.imageresizer.kicker",
    title: "tool.imageresizer.title",
    render() {
      return imageToolTemplate("resize");
    },
    bind() {
      bindImageTool("resize");
    },
  },
  imageconverter: {
    kicker: "tool.imageconverter.kicker",
    title: "tool.imageconverter.title",
    render() {
      return imageToolTemplate("convert");
    },
    bind() {
      bindImageTool("convert");
    },
  },
  qrcode: {
    kicker: "tool.qrcode.kicker",
    title: "tool.qrcode.title",
    render() {
      return `<div class="field"><label for="qr-input">${tr("field.input")}</label><input id="qr-input" placeholder="https://codekitbox.com/" /></div><div class="button-row"><button class="primary-button" id="qr-generate" type="button">Generate QR</button></div><div class="qr-output" id="qr-output"></div>`;
    },
    bind() {
      qs("#qr-generate").addEventListener("click", () => {
        const output = qs("#qr-output");
        output.innerHTML = "";
        const value = qs("#qr-input").value.trim();
        if (value && window.QRCode) new QRCode(output, { text: value, width: 220, height: 220 });
      });
    },
  },
  password: {
    kicker: "tool.password.kicker",
    title: "tool.password.title",
    render() {
      return `<div class="small-grid"><div class="field"><label>Length</label><input id="password-length" type="number" min="8" max="128" value="20" /></div><div class="field"><label>Options</label><select id="password-options"><option value="all">Letters, numbers & symbols</option><option value="safe">Letters & numbers</option></select></div></div><div class="button-row"><button class="primary-button" id="password-generate" type="button">Generate</button><button class="copy-button" data-copy="password-output" type="button">${tr("common.copy")}</button></div><input id="password-output" readonly />`;
    },
    bind() {
      const generate = () => {
        const length = Math.max(8, Math.min(128, Number(qs("#password-length").value) || 20));
        const chars = qs("#password-options").value === "all" ? "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789!@#$%^&*_-+=" : "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789";
        const bytes = crypto.getRandomValues(new Uint32Array(length));
        qs("#password-output").value = Array.from(bytes, (n) => chars[n % chars.length]).join("");
      };
      qs("#password-generate").addEventListener("click", generate);
      generate();
    },
  },
  percentage: {
    kicker: "tool.percentage.kicker",
    title: "tool.percentage.title",
    render() {
      return `<div class="field-grid"><div class="field"><label>Percentage</label><input id="percentage-rate" type="number" value="20" /></div><div class="field"><label>Value</label><input id="percentage-value" type="number" value="150" /></div></div><div class="button-row"><button class="primary-button" id="percentage-calculate" type="button">Calculate</button></div><div class="result-box" id="percentage-output"></div>`;
    },
    bind() {
      qs("#percentage-calculate").addEventListener("click", () => {
        const rate = Number(qs("#percentage-rate").value);
        const value = Number(qs("#percentage-value").value);
        qs("#percentage-output").textContent = `${rate}% of ${value} = ${(rate * value / 100).toLocaleString()}`;
      });
    },
  },
  random: {
    kicker: "tool.random.kicker",
    title: "tool.random.title",
    render() {
      return `<div class="field-grid"><div class="field"><label>Minimum</label><input id="random-min" type="number" value="1" /></div><div class="field"><label>Maximum</label><input id="random-max" type="number" value="100" /></div></div><div class="button-row"><button class="primary-button" id="random-generate" type="button">Generate</button></div><div class="result-box large-result" id="random-output"></div>`;
    },
    bind() {
      qs("#random-generate").addEventListener("click", () => {
        const min = Math.ceil(Number(qs("#random-min").value));
        const max = Math.floor(Number(qs("#random-max").value));
        const range = max - min + 1;
        qs("#random-output").textContent = range > 0 ? min + Math.floor(Math.random() * range) : "Invalid range";
      });
    },
  },
  wordcount: {
    kicker: "tool.wordcount.kicker",
    title: "tool.wordcount.title",
    render() {
      return `<div class="field"><label for="wordcount-input">${tr("field.input")}</label><textarea id="wordcount-input" placeholder="Type or paste text..."></textarea></div><div class="stats-row" id="wordcount-stats"></div>`;
    },
    bind() {
      const update = () => updateWordCountStats(qs("#wordcount-input").value);
      qs("#wordcount-input").addEventListener("input", update);
      update();
    },
  },
};

const toolBody = qs("#tool-body");
const title = qs("#tool-title");
const kicker = qs("#tool-kicker");

qsa(".tool-tab").forEach((button) => {
  button.addEventListener("click", () => {
    selectTool(button.dataset.tool);
    rememberTool(button.dataset.tool);
  });
});

qsa("[data-open-tool]").forEach((button) => {
  button.addEventListener("click", () => openHomepageTool(button.dataset.openTool));
});

const toolSearch = qs("#tool-search");
const searchResults = qs("#search-results");
if (toolSearch && searchResults) {
  toolSearch.addEventListener("input", () => renderToolSearch(toolSearch.value));
  toolSearch.addEventListener("focus", () => renderToolSearch(toolSearch.value));
  document.addEventListener("click", (event) => {
    if (!event.target.closest(".tool-search")) setSearchVisibility(false);
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "/" && toolSearch && !["INPUT", "TEXTAREA"].includes(document.activeElement?.tagName)) {
    event.preventDefault();
    toolSearch.focus();
  }
  if (event.key === "Escape" && searchResults) {
    setSearchVisibility(false);
    toolSearch?.blur();
  }
});

qsa(".language-button").forEach((button) => {
  button.addEventListener("click", () => {
    currentLang = button.dataset.lang;
    saveLanguage(currentLang);
    if (document.body.dataset.slug) {
      const prefix = currentLang === "en" ? "" : `/${currentLang}`;
      location.href = `${prefix}/tools/${document.body.dataset.slug}/`;
      return;
    }
    applyTranslations();
    const activeTool = qs(".tool-tab.is-active")?.dataset.tool || document.body.dataset.tool || "base64";
    selectTool(activeTool);
  });
});

qs("#clear-tool").addEventListener("click", () => {
  qsa("#tool-body textarea, #tool-body input").forEach((input) => {
    if (input.readOnly) return;
    input.value = "";
  });
});

qs("#load-example").addEventListener("click", () => {
  const activeTool = qs(".tool-tab.is-active")?.dataset.tool || document.body.dataset.tool || "base64";
  loadToolExample(activeTool);
});

document.addEventListener("click", async (event) => {
  const modeButton = event.target.closest("[data-mode-group]");
  if (modeButton) {
    qsa(`[data-mode-group="${modeButton.dataset.modeGroup}"]`).forEach((button) => {
      button.classList.toggle("is-selected", button === modeButton);
    });
  }

  const button = event.target.closest("[data-copy]");
  if (!button) return;
  const target = qs(`#${button.dataset.copy}`);
  await navigator.clipboard.writeText(target.value || target.textContent || "");
  const original = button.textContent;
  button.textContent = tr("common.copied");
  setTimeout(() => {
    button.textContent = original;
  }, 1000);
});

function selectTool(name) {
  const tool = tools[name] || tools.base64;
  name = tools[name] ? name : "base64";
  title.textContent = tr(tool.title);
  kicker.textContent = tr(tool.kicker);
  toolBody.innerHTML = tool.render();
  qsa(".tool-tab").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.tool === name);
  });
  tool.bind();
  updateToolUrl(name);
  updateSeoMetadata(name);
}

function openHomepageTool(name) {
  selectTool(name);
  rememberTool(name);
  qs("#tools")?.scrollIntoView({ behavior: "smooth", block: "start" });
  if (toolSearch) toolSearch.value = "";
  setSearchVisibility(false);
}

function rememberTool(name) {
  if (!tools[name] || document.body.dataset.tool) return;
  try {
    const recent = JSON.parse(localStorage.getItem("codekitbox-recent-tools") || "[]")
      .filter((item) => tools[item] && item !== name);
    localStorage.setItem("codekitbox-recent-tools", JSON.stringify([name, ...recent].slice(0, 4)));
  } catch {
    // Recent tools are optional when storage is unavailable.
  }
  renderRecentTools();
}

function renderRecentTools() {
  const container = qs("#recent-tools");
  const list = qs("#recent-tool-list");
  if (!container || !list) return;
  let recent = [];
  try {
    recent = JSON.parse(localStorage.getItem("codekitbox-recent-tools") || "[]")
      .filter((item) => tools[item]);
  } catch {
    recent = [];
  }
  container.hidden = recent.length === 0;
  list.innerHTML = recent
    .map((name) => `<button data-recent-tool="${name}" type="button">${escapeHtml(tr(`menu.${name}`))}</button>`)
    .join("");
  qsa("[data-recent-tool]").forEach((button) => {
    button.addEventListener("click", () => openHomepageTool(button.dataset.recentTool));
  });
}

function renderToolSearch(query) {
  const normalized = query.trim().toLocaleLowerCase();
  const matches = Object.keys(tools).filter((name) => {
    const searchable = `${tr(`menu.${name}`)} ${tr(tools[name].title)} ${name}`.toLocaleLowerCase();
    return !normalized || searchable.includes(normalized);
  });
  searchResults.innerHTML = matches.length
    ? matches.map((name) => `
      <button class="search-result" data-search-tool="${name}" type="button">
        <span>${escapeHtml(tr(`menu.${name}`))}</span>
        <small>${escapeHtml(tr(tools[name].kicker))}</small>
      </button>
    `).join("")
    : `<span class="search-result"><span>${escapeHtml(tr("search.noResults"))}</span></span>`;
  setSearchVisibility(true);
  qsa("[data-search-tool]").forEach((button) => {
    button.addEventListener("click", () => openHomepageTool(button.dataset.searchTool));
  });
}

function setSearchVisibility(visible) {
  if (!searchResults) return;
  searchResults.hidden = !visible;
  toolSearch?.setAttribute("aria-expanded", String(visible));
}

function applyTranslations() {
  document.documentElement.lang = currentLang === "zh" ? "zh-CN" : currentLang;
  qsa("[data-i18n]").forEach((element) => {
    element.textContent = tr(element.dataset.i18n);
  });
  qsa("[data-i18n-placeholder]").forEach((element) => {
    element.placeholder = tr(element.dataset.i18nPlaceholder);
  });
  qsa(".language-button").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === currentLang);
  });
  renderRecentTools();
}

function tr(key) {
  return i18n[currentLang][key] || i18n.en[key] || key;
}

function qs(selector) {
  return document.querySelector(selector);
}

function qsa(selector) {
  return Array.from(document.querySelectorAll(selector));
}

function getSavedLanguage() {
  const pageLang = document.body.dataset.lang;
  if (i18n[pageLang]) return pageLang;
  const queryLang = new URLSearchParams(location.search).get("lang");
  if (i18n[queryLang]) return queryLang;
  try {
    return localStorage.getItem("codekitbox-lang") || "en";
  } catch {
    return "en";
  }
}

function saveLanguage(lang) {
  try {
    localStorage.setItem("codekitbox-lang", lang);
  } catch {
    // Language persistence is optional when storage is unavailable.
  }
}

function toBase64(value) {
  const bytes = new TextEncoder().encode(value);
  const binary = Array.from(bytes, (byte) => String.fromCharCode(byte)).join("");
  return btoa(binary);
}

function fromBase64(value) {
  const binary = atob(value.trim());
  const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));
  return new TextDecoder().decode(bytes);
}

function fromBase64Url(value = "") {
  const normalized = value.replace(/-/g, "+").replace(/_/g, "/");
  const padded = normalized.padEnd(Math.ceil(normalized.length / 4) * 4, "=");
  return fromBase64(padded);
}

function prettyJson(value) {
  return JSON.stringify(value, null, 2);
}

function setMessage(element, text, isError) {
  element.textContent = text;
  element.classList.toggle("error", isError);
}

function toLines(value) {
  return value.replace(/\r\n/g, "\n").split("\n");
}

function lineDiff(left, right) {
  const a = toLines(left);
  const b = toLines(right);
  const matrix = Array.from({ length: a.length + 1 }, () =>
    Array(b.length + 1).fill(0),
  );
  for (let i = a.length - 1; i >= 0; i -= 1) {
    for (let j = b.length - 1; j >= 0; j -= 1) {
      matrix[i][j] = a[i] === b[j]
        ? matrix[i + 1][j + 1] + 1
        : Math.max(matrix[i + 1][j], matrix[i][j + 1]);
    }
  }
  const result = [];
  let i = 0;
  let j = 0;
  while (i < a.length && j < b.length) {
    if (a[i] === b[j]) {
      result.push({ type: "same", value: a[i] });
      i += 1;
      j += 1;
    } else if (matrix[i + 1][j] >= matrix[i][j + 1]) {
      result.push({ type: "removed", value: a[i] });
      i += 1;
    } else {
      result.push({ type: "added", value: b[j] });
      j += 1;
    }
  }
  while (i < a.length) result.push({ type: "removed", value: a[i++] });
  while (j < b.length) result.push({ type: "added", value: b[j++] });
  return result;
}

function parseCsv(value) {
  const rows = [];
  let row = [];
  let field = "";
  let quoted = false;
  for (let i = 0; i < value.length; i += 1) {
    const char = value[i];
    if (quoted && char === '"' && value[i + 1] === '"') {
      field += '"';
      i += 1;
    } else if (char === '"') {
      quoted = !quoted;
    } else if (char === "," && !quoted) {
      row.push(field);
      field = "";
    } else if ((char === "\n" || char === "\r") && !quoted) {
      if (char === "\r" && value[i + 1] === "\n") i += 1;
      row.push(field);
      rows.push(row);
      row = [];
      field = "";
    } else {
      field += char;
    }
  }
  if (quoted) throw new Error("Unclosed quoted field");
  if (field || row.length) {
    row.push(field);
    rows.push(row);
  }
  return rows;
}

function csvToObjects(value) {
  const [headers = [], ...rows] = parseCsv(value);
  if (!headers.length) return [];
  return rows
    .filter((row) => row.some((field) => field !== ""))
    .map((row) =>
      Object.fromEntries(headers.map((header, index) => [header.trim(), row[index] ?? ""])),
    );
}

function objectsToCsv(value) {
  if (!Array.isArray(value) || !value.every((item) => item && typeof item === "object")) {
    throw new Error("JSON array required");
  }
  const headers = [...new Set(value.flatMap((item) => Object.keys(item)))];
  const rows = [headers, ...value.map((item) => headers.map((header) => item[header] ?? ""))];
  return rows.map((row) => row.map(csvField).join(",")).join("\n");
}

function csvField(value) {
  const text = typeof value === "object" ? JSON.stringify(value) : String(value);
  return /[",\n\r]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
}

function updateTextStats(value) {
  const stats = qs("#text-stats");
  if (!stats) return;
  const lines = value ? toLines(value).length : 0;
  const words = value.trim() ? value.trim().split(/\s+/u).length : 0;
  stats.innerHTML = `
    <span class="stat">${tr("result.lines")}: ${lines}</span>
    <span class="stat">${tr("result.words")}: ${words}</span>
    <span class="stat">${tr("result.characters")}: ${value.length}</span>
  `;
}

function updateWordCountStats(value) {
  const element = qs("#wordcount-stats");
  if (!element) return;
  const charactersNoSpaces = value.replace(/\s/gu, "").length;
  const words = value.trim() ? value.trim().split(/\s+/u).length : 0;
  const sentences = value.trim() ? value.split(/[.!?。！？]+/u).filter((item) => item.trim()).length : 0;
  element.innerHTML = `<span class="stat">${tr("result.characters")}: ${value.length}</span><span class="stat">No spaces: ${charactersNoSpaces}</span><span class="stat">${tr("result.words")}: ${words}</span><span class="stat">Sentences: ${sentences}</span>`;
}

function convertCase(value, type) {
  if (type === "upper") return value.toUpperCase();
  if (type === "lower") return value.toLowerCase();
  const words = value
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .trim()
    .split(/[^\p{L}\p{N}]+/u)
    .filter(Boolean);
  if (type === "title") {
    return words.map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ");
  }
  if (type === "camel") {
    return words
      .map((word, index) =>
        index === 0
          ? word.toLowerCase()
          : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(),
      )
      .join("");
  }
  return words.map((word) => word.toLowerCase()).join(type === "snake" ? "_" : "-");
}

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function decodeHtml(value) {
  const textarea = document.createElement("textarea");
  textarea.innerHTML = value;
  return textarea.value;
}

function jwtStatusHtml(payload) {
  const now = Math.floor(Date.now() / 1000);
  const status = typeof payload.exp === "number"
    ? payload.exp < now
      ? `<span class="status-badge status-expired">${tr("jwt.expired")}</span>`
      : `<span class="status-badge status-valid">${tr("jwt.active")}</span>`
    : `<span class="status-badge status-valid">${tr("jwt.noExpiry")}</span>`;
  const claims = ["iat", "nbf", "exp"]
    .filter((claim) => typeof payload[claim] === "number")
    .map((claim) => {
      const date = new Date(payload[claim] * 1000);
      return `<div class="claim-time"><strong>${claim}</strong><span>${date.toLocaleString()}</span><span>${date.toISOString()}</span></div>`;
    })
    .join("");
  return `${status}${claims ? `<div class="claim-times">${claims}</div>` : ""}`;
}

function imageToolTemplate(mode) {
  const isResize = mode === "resize";
  const isConvert = mode === "convert";
  const quality = isConvert ? 92 : 75;
  const buttonText = isResize ? "Resize image" : isConvert ? "Convert image" : "Compress image";
  return `
    <div class="field">
      <label for="image-file">Image file</label>
      <input id="image-file" type="file" accept="image/png,image/jpeg,image/webp" />
    </div>
    <div class="image-tool-grid">
      <div class="field">
        <label for="image-format">Output format</label>
        <select id="image-format">
          <option value="image/webp"${isConvert ? " selected" : ""}>WebP</option>
          <option value="image/jpeg"${!isConvert ? " selected" : ""}>JPEG</option>
          <option value="image/png">PNG</option>
        </select>
      </div>
      <div class="field">
        <label for="image-quality">Quality</label>
        <input id="image-quality" type="range" min="40" max="100" value="${quality}" />
      </div>
      <div class="field">
        <label for="image-width">Width</label>
        <input id="image-width" type="number" min="1" placeholder="Auto" />
      </div>
      <div class="field">
        <label for="image-height">Height</label>
        <input id="image-height" type="number" min="1" placeholder="Auto" />
      </div>
    </div>
    <label class="checkbox-line"><input id="image-keep-ratio" type="checkbox" ${isResize ? "checked" : ""} /> Keep aspect ratio</label>
    <p class="privacy-note">Images are processed locally in your browser. Please make sure you have the right to edit and use the images you choose.</p>
    <div class="button-row"><button class="primary-button" id="image-process" type="button">${buttonText}</button></div>
    <div class="image-preview-grid">
      <div class="result-box" id="image-original">Choose a JPG, PNG, or WebP image.</div>
      <div class="result-box" id="image-result">Processed image details will appear here.</div>
    </div>`;
}

function bindImageTool(mode) {
  let source = null;
  const fileInput = qs("#image-file");
  const widthInput = qs("#image-width");
  const heightInput = qs("#image-height");
  const original = qs("#image-original");
  const result = qs("#image-result");
  const keepRatio = qs("#image-keep-ratio");

  fileInput.addEventListener("change", async () => {
    const file = fileInput.files?.[0];
    result.textContent = "Processed image details will appear here.";
    if (!file) return;
    try {
      source = await loadImageSource(file);
      widthInput.value = source.width;
      heightInput.value = source.height;
      original.innerHTML = `<strong>Original</strong><span>${source.width} x ${source.height}px</span><span>${formatBytes(file.size)}</span><span>${file.type || "image"}</span>`;
    } catch {
      source = null;
      original.textContent = "Unable to read this image.";
    }
  });

  widthInput.addEventListener("input", () => {
    if (!source || !keepRatio.checked || document.activeElement !== widthInput) return;
    const width = Number(widthInput.value);
    if (width > 0) heightInput.value = Math.round(width * source.height / source.width);
  });

  heightInput.addEventListener("input", () => {
    if (!source || !keepRatio.checked || document.activeElement !== heightInput) return;
    const height = Number(heightInput.value);
    if (height > 0) widthInput.value = Math.round(height * source.width / source.height);
  });

  qs("#image-process").addEventListener("click", async () => {
    if (!source) {
      result.textContent = "Choose an image first.";
      return;
    }
    const width = Math.max(1, Math.round(Number(widthInput.value) || source.width));
    const height = Math.max(1, Math.round(Number(heightInput.value) || source.height));
    const format = qs("#image-format").value;
    const quality = Math.max(0.4, Math.min(1, Number(qs("#image-quality").value) / 100));
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const context = canvas.getContext("2d");
    if (format === "image/jpeg") {
      context.fillStyle = "#ffffff";
      context.fillRect(0, 0, width, height);
    }
    context.drawImage(source.image, 0, 0, width, height);
    const blob = await canvasToBlob(canvas, format, quality);
    if (!blob) {
      result.textContent = "Unable to process this image.";
      return;
    }
    const url = URL.createObjectURL(blob);
    const extension = format.split("/")[1].replace("jpeg", "jpg");
    const filename = `${source.name.replace(/\.[^.]+$/, "")}-${mode}.${extension}`;
    const saved = source.file.size - blob.size;
    result.innerHTML = `<strong>Output</strong><span>${width} x ${height}px</span><span>${formatBytes(blob.size)}</span><span>${saved > 0 ? `${Math.round(saved / source.file.size * 100)}% smaller` : "Size may be larger"}</span><a class="primary-button image-download" href="${url}" download="${filename}">Download ${extension.toUpperCase()}</a>`;
  });
}

function loadImageSource(file) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    const url = URL.createObjectURL(file);
    image.onload = () => {
      URL.revokeObjectURL(url);
      resolve({ file, image, name: file.name || "image", width: image.naturalWidth, height: image.naturalHeight });
    };
    image.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("Invalid image"));
    };
    image.src = url;
  });
}

function canvasToBlob(canvas, format, quality) {
  return new Promise((resolve) => {
    canvas.toBlob((blob) => resolve(blob), format, format === "image/png" ? undefined : quality);
  });
}

function formatBytes(bytes) {
  if (!Number.isFinite(bytes)) return "0 B";
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
}

function loadToolExample(name) {
  const examples = {
    base64: { "#base64-input": "Hello, CodeKitBox!" },
    url: { "#url-input": "hello world & language=日本語" },
    jwt: { "#jwt-input": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkNvZGVLaXRCb3giLCJpYXQiOjE3MTgzMjMyMDAsImV4cCI6MTg5MzQ1NjAwMH0.signature" },
    timestamp: { "#timestamp-input": "1893456000" },
    json: { "#json-input": "{\"name\":\"CodeKitBox\",\"tools\":22,\"private\":true}" },
    uuid: {},
    hash: { "#hash-input": "Hello, CodeKitBox!" },
    regex: { "#regex-pattern": "\\b\\w+@\\w+\\.\\w+\\b", "#regex-text": "Contact hello@example.com or support@codekitbox.com" },
    diff: { "#diff-left": "alpha\nbeta\ngamma", "#diff-right": "alpha\nbeta updated\ngamma" },
    csv: { "#csv-input": "name,role\nAda,Engineer\nLinus,Developer" },
    text: { "#text-input": "banana\napple\nbanana\n\norange" },
    case: { "#case-input": "hello world value" },
    html: { "#html-input": "<p>Hello & welcome</p>" },
    urlparser: { "#urlparser-input": "https://codekitbox.com/tools/url-parser/?source=example#demo" },
    imagecompressor: {},
    imageresizer: {},
    imageconverter: {},
    qrcode: { "#qr-input": "https://codekitbox.com/" },
    password: {},
    percentage: { "#percentage-rate": "15", "#percentage-value": "200" },
    random: { "#random-min": "1", "#random-max": "100" },
    wordcount: { "#wordcount-input": "CodeKitBox makes everyday text checks quick and private." },
  };
  Object.entries(examples[name] || {}).forEach(([selector, value]) => {
    const input = qs(selector);
    if (input) {
      input.value = value;
      input.dispatchEvent(new Event("input", { bubbles: true }));
    }
  });
}

function updateToolUrl(name) {
  if (document.body.dataset.tool) return;
  if (!["http:", "https:"].includes(location.protocol)) return;
  const params = new URLSearchParams(location.search);
  params.set("tool", name);
  params.set("lang", currentLang);
  history.replaceState({}, "", `${location.pathname}?${params.toString()}${location.hash}`);
}

function updateSeoMetadata(name) {
  // Keep the homepage metadata and canonical URL stable. Dedicated tool pages
  // already provide their own localized SEO metadata in generated HTML.
  return name;
}

async function digest(value, algorithm) {
  const data = new TextEncoder().encode(value);
  const buffer = await crypto.subtle.digest(algorithm, data);
  return Array.from(new Uint8Array(buffer))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

applyTranslations();
selectTool(document.body.dataset.tool || new URLSearchParams(location.search).get("tool") || "base64");
