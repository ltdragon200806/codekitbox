const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const baseUrl = "https://codekitbox.com";

const localeUi = {
  en: {
    prefix: "",
    lang: "en",
    guides: "Guides",
    tools: "All tools",
    useTool: "Open the free tool",
    related: "Related guides",
    updated: "Practical guide",
    steps: "Step-by-step",
    tips: "Important tips",
    faq: "Frequently asked questions",
    footer: "Fast, private browser-based utilities.",
  },
  zh: {
    prefix: "/zh",
    lang: "zh-CN",
    guides: "使用指南",
    tools: "全部工具",
    useTool: "打开免费工具",
    related: "相关指南",
    updated: "实用指南",
    steps: "操作步骤",
    tips: "重要提示",
    faq: "常见问题",
    footer: "快速、注重隐私的浏览器工具。",
  },
  ja: {
    prefix: "/ja",
    lang: "ja",
    guides: "使い方ガイド",
    tools: "すべてのツール",
    useTool: "無料ツールを開く",
    related: "関連ガイド",
    updated: "実用ガイド",
    steps: "手順",
    tips: "重要なポイント",
    faq: "よくある質問",
    footer: "高速でプライバシーに配慮したブラウザツール。",
  },
};

const guides = [
  {
    id: "base64",
    slug: "base64-encoding-guide",
    toolSlug: "base64-encoder-decoder",
    en: {
      title: "Base64 Encoding and Decoding: A Practical Guide",
      description: "Learn what Base64 is, when to use it, and how to safely encode or decode Unicode text.",
      intro: "Base64 is a convenient way to represent binary data as text. It is useful in APIs, email, configuration files, and data URLs, but it is not encryption.",
      steps: ["Paste text into the Base64 encoder.", "Select Encode to create a Base64 value.", "To reverse it, paste the Base64 value and select Decode.", "Check that decoded Unicode text displays correctly."],
      tips: ["Never treat Base64 as a security feature.", "Keep the original character encoding consistent, usually UTF-8.", "Large files are better handled by dedicated file tools."],
      faq: [["Can Base64 be decrypted?", "Base64 is decoded, not decrypted. Anyone can reverse it."], ["Why does decoded text look broken?", "The original and decoded character encodings may not match. UTF-8 is the safest default."]],
    },
    zh: {
      title: "Base64 编码与解码实用指南",
      description: "了解 Base64 的用途、适用场景，以及如何安全地编码和解码 Unicode 文本。",
      intro: "Base64 可以把二进制数据表示为普通文本，常用于 API、邮件、配置文件和 Data URL，但它并不是加密方式。",
      steps: ["把需要转换的文字粘贴到 Base64 工具中。", "点击编码，生成 Base64 字符串。", "需要还原时，粘贴 Base64 字符串并点击解码。", "确认中文等 Unicode 内容显示正确。"],
      tips: ["不要把 Base64 当作安全或加密措施。", "编码和解码时应使用一致的字符编码，通常选择 UTF-8。", "体积较大的文件更适合使用专门的文件处理工具。"],
      faq: [["Base64 可以解密吗？", "Base64 不是加密，只需要解码即可还原。"], ["为什么解码后出现乱码？", "通常是原始字符编码与解码使用的编码不一致，建议统一使用 UTF-8。"]],
    },
    ja: {
      title: "Base64 エンコード・デコード実用ガイド",
      description: "Base64 の用途と、Unicode テキストを安全に変換する方法を解説します。",
      intro: "Base64 はバイナリデータをテキストとして表現する方法です。API、メール、設定ファイル、Data URL で使われますが、暗号化ではありません。",
      steps: ["変換するテキストを Base64 ツールに貼り付けます。", "エンコードを選択して Base64 値を生成します。", "元に戻す場合は値を貼り付けてデコードします。", "日本語などの Unicode テキストが正しく表示されるか確認します。"],
      tips: ["Base64 をセキュリティ対策として使用しないでください。", "通常は UTF-8 で文字コードを統一します。", "大きなファイルには専用のファイルツールを使用してください。"],
      faq: [["Base64 は復号できますか？", "暗号ではないため、誰でもデコードできます。"], ["文字化けするのはなぜですか？", "変換前後の文字コードが一致していない可能性があります。"]],
    },
  },
  {
    id: "jwt",
    slug: "jwt-decoding-guide",
    toolSlug: "jwt-decoder",
    en: {
      title: "How to Decode and Inspect a JWT Safely",
      description: "Understand JWT structure, inspect claims, and avoid confusing decoding with signature verification.",
      intro: "A JSON Web Token normally contains a header, payload, and signature. Decoding reveals readable claims, but it does not prove that the token is valid.",
      steps: ["Copy a three-part JWT without extra spaces.", "Paste it into the JWT decoder.", "Review the header algorithm and payload claims.", "Check exp, nbf, iss, aud, and sub values.", "Verify the signature separately in your application."],
      tips: ["Do not paste sensitive production tokens into tools you do not trust.", "Decoding is not signature verification.", "Unix timestamps in JWT claims are usually measured in seconds."],
      faq: [["Can a decoded JWT be trusted?", "No. Trust requires signature and claim validation."], ["What does exp mean?", "The exp claim is the Unix timestamp after which the token should be rejected."]],
    },
    zh: {
      title: "如何安全解码和检查 JWT",
      description: "了解 JWT 的结构、常见声明，以及为什么解码不等于验证签名。",
      intro: "JWT 通常由 Header、Payload 和 Signature 三部分组成。解码可以查看其中的声明，但不能证明令牌有效或可信。",
      steps: ["复制由三段组成的 JWT，并避免带入多余空格。", "把 JWT 粘贴到解码工具中。", "检查 Header 中的算法和 Payload 中的声明。", "重点查看 exp、nbf、iss、aud 和 sub。", "在应用程序中另外执行签名验证。"],
      tips: ["不要把敏感的生产环境令牌粘贴到不可信的网站。", "能解码不代表签名有效。", "JWT 中的 Unix 时间通常以秒为单位。"],
      faq: [["解码后的 JWT 可以直接信任吗？", "不可以，必须验证签名和相关声明。"], ["exp 是什么意思？", "exp 表示令牌失效的 Unix 时间戳。"]],
    },
    ja: {
      title: "JWT を安全にデコードして確認する方法",
      description: "JWT の構造とクレームを理解し、デコードと署名検証の違いを確認します。",
      intro: "JWT は通常、ヘッダー、ペイロード、署名の3部分で構成されます。デコードで内容は読めますが、有効性は証明できません。",
      steps: ["3部分で構成された JWT をコピーします。", "JWT デコーダーに貼り付けます。", "ヘッダーのアルゴリズムとペイロードのクレームを確認します。", "exp、nbf、iss、aud、sub を確認します。", "アプリケーション側で署名を検証します。"],
      tips: ["信頼できないツールに本番トークンを貼り付けないでください。", "デコードは署名検証ではありません。", "JWT の Unix 時刻は通常秒単位です。"],
      faq: [["デコードした JWT は信頼できますか？", "いいえ。署名とクレームの検証が必要です。"], ["exp とは何ですか？", "トークンを無効として扱う期限の Unix タイムスタンプです。"]],
    },
  },
  {
    id: "json",
    slug: "json-formatting-guide",
    toolSlug: "json-formatter",
    en: {
      title: "How to Format, Validate, and Fix JSON",
      description: "Learn how to beautify JSON, find common syntax errors, and prepare compact JSON for APIs.",
      intro: "Valid JSON follows strict syntax rules. Formatting makes nested data easier to inspect, while minifying removes unnecessary whitespace.",
      steps: ["Paste JSON into the formatter.", "Select Format to validate and indent it.", "If validation fails, read the error location.", "Fix quotes, commas, brackets, or property names.", "Select Minify when compact output is required."],
      tips: ["JSON strings and property names require double quotes.", "Trailing commas are not allowed in standard JSON.", "Formatting changes whitespace, not the data itself."],
      faq: [["Why is my JSON invalid?", "Common causes are trailing commas, single quotes, and missing brackets."], ["Does minifying JSON lose data?", "No. It only removes unnecessary whitespace."]],
    },
    zh: {
      title: "如何格式化、验证和修复 JSON",
      description: "学习美化 JSON、定位常见语法错误，并生成适合 API 使用的压缩 JSON。",
      intro: "标准 JSON 遵循严格的语法规则。格式化可以让嵌套数据更容易阅读，压缩则会删除不必要的空白。",
      steps: ["把 JSON 粘贴到格式化工具。", "点击格式化，验证并添加缩进。", "验证失败时查看错误位置。", "修复引号、逗号、括号或属性名。", "需要紧凑内容时点击压缩。"],
      tips: ["JSON 字符串和属性名必须使用双引号。", "标准 JSON 不允许尾随逗号。", "格式化只改变空白，不会修改数据。"],
      faq: [["为什么 JSON 无效？", "常见原因包括尾随逗号、单引号和缺失括号。"], ["压缩 JSON 会丢失数据吗？", "不会，只会删除不必要的空白字符。"]],
    },
    ja: {
      title: "JSON を整形・検証・修正する方法",
      description: "JSON の整形、よくある構文エラーの発見、API 用の圧縮方法を解説します。",
      intro: "標準 JSON には厳格な構文ルールがあります。整形するとネストしたデータが読みやすくなり、圧縮すると不要な空白が削除されます。",
      steps: ["JSON をフォーマッターに貼り付けます。", "整形を選択して検証とインデントを実行します。", "失敗した場合はエラー位置を確認します。", "引用符、カンマ、括弧、プロパティ名を修正します。", "必要に応じて圧縮します。"],
      tips: ["文字列とプロパティ名にはダブルクォートが必要です。", "標準 JSON では末尾のカンマは使用できません。", "整形ではデータ自体は変更されません。"],
      faq: [["JSON が無効になる原因は？", "末尾のカンマ、シングルクォート、括弧不足が一般的です。"], ["圧縮するとデータは失われますか？", "いいえ。不要な空白だけが削除されます。"]],
    },
  },
  {
    id: "qrcode",
    slug: "qr-code-guide",
    toolSlug: "qr-code-generator",
    en: {
      title: "How to Create a QR Code That Scans Reliably",
      description: "Create QR codes for URLs and text while avoiding common scanning and printing problems.",
      intro: "A good QR code is easy to scan, points to accurate content, and has enough contrast and empty space around it.",
      steps: ["Enter the complete URL or text.", "Generate the QR code.", "Test it with more than one phone camera.", "Keep sufficient white space around the code.", "Retest after resizing or printing."],
      tips: ["Use a complete HTTPS URL.", "Shorter content creates a simpler, easier-to-scan code.", "Avoid low contrast, distortion, and very small print sizes."],
      faq: [["Do QR codes expire?", "Static QR codes do not expire, but the destination URL can stop working."], ["How small can a QR code be?", "It depends on scanning distance and content complexity. Always test the final size."]],
    },
    zh: {
      title: "如何制作容易扫描的二维码",
      description: "为网址和文字生成二维码，并避免常见的扫描和打印问题。",
      intro: "一个好用的二维码应当容易扫描、内容准确，并具有足够的对比度和周围留白。",
      steps: ["输入完整的网址或文字。", "生成二维码。", "使用多部手机测试扫描。", "二维码周围保留足够的空白。", "缩放或打印后再次测试。"],
      tips: ["网址建议使用完整的 HTTPS 地址。", "内容越短，二维码越简单、越容易扫描。", "避免低对比度、变形和过小的打印尺寸。"],
      faq: [["二维码会过期吗？", "静态二维码不会过期，但它指向的网址可能失效。"], ["二维码最小可以做多大？", "取决于扫描距离和内容复杂度，最终尺寸必须实际测试。"]],
    },
    ja: {
      title: "読み取りやすい QR コードを作る方法",
      description: "URL やテキストの QR コードを作成し、読み取りや印刷の問題を避けます。",
      intro: "使いやすい QR コードには、正しい内容、十分なコントラスト、周囲の余白が必要です。",
      steps: ["完全な URL またはテキストを入力します。", "QR コードを生成します。", "複数のスマートフォンでテストします。", "コードの周囲に十分な余白を確保します。", "サイズ変更や印刷後に再テストします。"],
      tips: ["完全な HTTPS URL を使用してください。", "内容が短いほど読み取りやすいコードになります。", "低いコントラスト、変形、小さすぎる印刷を避けてください。"],
      faq: [["QR コードに有効期限はありますか？", "静的 QR コードに期限はありませんが、リンク先が無効になる場合があります。"], ["最小サイズはどのくらいですか？", "距離と内容によって異なるため、最終サイズで必ずテストしてください。"]],
    },
  },
  {
    id: "password",
    slug: "strong-password-guide",
    toolSlug: "password-generator",
    en: {
      title: "How to Create and Manage Strong Passwords",
      description: "Create unique strong passwords, understand password length, and avoid dangerous reuse.",
      intro: "The most practical password strategy is to use a long, random, unique password for every account and store it in a trusted password manager.",
      steps: ["Generate a random password of at least 16 characters.", "Use a unique password for every account.", "Save it in a trusted password manager.", "Enable multi-factor authentication.", "Replace exposed or reused passwords immediately."],
      tips: ["Length and randomness matter more than clever substitutions.", "Never reuse important passwords.", "Recovery codes should also be stored safely."],
      faq: [["How long should a password be?", "At least 16 random characters is a practical default."], ["Should I change passwords regularly?", "Change them when exposed, reused, or required by a specific policy."]],
    },
    zh: {
      title: "如何创建和管理高强度密码",
      description: "创建独一无二的强密码，了解密码长度，并避免危险的密码复用。",
      intro: "最实用的密码策略是为每个账号使用长、随机且唯一的密码，并保存在可信的密码管理器中。",
      steps: ["生成至少 16 位的随机密码。", "每个账号使用不同密码。", "保存在可信的密码管理器中。", "开启多因素认证。", "发现泄露或复用后立即更换密码。"],
      tips: ["长度和随机性比巧妙替换字母更重要。", "不要重复使用重要账号的密码。", "恢复代码也需要安全保存。"],
      faq: [["密码应该多长？", "至少 16 位随机字符是一个实用的默认选择。"], ["需要定期更换密码吗？", "密码泄露、重复使用或特定政策要求时应当更换。"]],
    },
    ja: {
      title: "強力なパスワードを作成・管理する方法",
      description: "アカウントごとに固有の強力なパスワードを作り、安全に管理する方法を解説します。",
      intro: "実用的な戦略は、各アカウントで長くランダムな固有パスワードを使い、信頼できるパスワードマネージャーに保存することです。",
      steps: ["16文字以上のランダムなパスワードを生成します。", "アカウントごとに別のパスワードを使用します。", "信頼できるパスワードマネージャーに保存します。", "多要素認証を有効にします。", "漏えいや再利用が判明したらすぐに変更します。"],
      tips: ["巧妙な置き換えより、長さとランダム性が重要です。", "重要なパスワードを再利用しないでください。", "復旧コードも安全に保存してください。"],
      faq: [["パスワードは何文字必要ですか？", "16文字以上のランダム文字列が実用的な目安です。"], ["定期的に変更すべきですか？", "漏えい、再利用、ポリシー上の必要がある場合に変更してください。"]],
    },
  },
  {
    id: "ai-writing-length",
    slug: "ai-writing-word-count-checklist",
    toolSlug: "word-character-counter",
    en: {
      title: "AI Writing Checklist: Check Word Count, Character Count, and Title Length",
      description: "Use a simple checklist to review AI-generated drafts before publishing, including word count, character count, title length, and meta descriptions.",
      intro: "AI can create a useful first draft quickly, but the final text still needs human review. Checking length, structure, and clarity helps make the content easier to publish.",
      steps: ["Paste the AI-generated draft into the word and character counter.", "Check total words, total characters, and characters without spaces.", "Review the title separately and keep it clear instead of simply long.", "Check short descriptions, bios, and summaries against the platform limit.", "Read the final text once to remove repetition, vague claims, and unsupported facts."],
      tips: ["Do not publish AI output without checking facts and tone.", "Different platforms count emojis, CJK characters, and line breaks differently.", "A shorter title that matches user intent is usually better than a keyword-stuffed title."],
      faq: [["Can AI text be published as-is?", "It is safer to review, edit, and fact-check it first. AI text can contain repetition or confident mistakes."], ["What should I check before posting AI-written text?", "Check accuracy, originality, length, readability, and whether the text matches the audience and platform."], ["Which tool helps with length limits?", "The word and character counter can quickly show total words, characters, and characters without spaces."]],
    },
    zh: {
      title: "AI 写作发布前检查：字数、字符数和标题长度",
      description: "发布 AI 生成文章前，用简单清单检查字数、字符数、标题长度和页面描述，减少重复、超长和表达不清的问题。",
      intro: "AI 可以很快生成初稿，但最终发布前仍然需要人工检查。确认长度、结构和表达清晰度，可以让内容更适合搜索、社交平台和表单限制。",
      steps: ["把 AI 生成的草稿粘贴到字数与字符统计工具中。", "查看总字数、总字符数和不含空格字符数。", "单独检查标题，优先保证清楚，不要为了堆关键词而过长。", "检查简介、摘要、社交媒体 bio 或 meta description 是否超出平台限制。", "最后通读一遍，删除重复句、空泛表述和没有依据的结论。"],
      tips: ["不要不检查事实就直接发布 AI 内容。", "不同平台对表情、中日韩字符和换行的统计方式可能不同。", "标题不一定越长越好，能准确匹配用户搜索意图更重要。"],
      faq: [["AI 写的文章可以直接发布吗？", "不建议直接发布。最好先检查事实、语气、重复内容和是否符合目标平台。"], ["发布 AI 文本前要检查什么？", "重点检查准确性、原创性、字数长度、可读性，以及内容是否真正回答用户问题。"], ["哪个工具适合检查长度限制？", "字数与字符统计工具可以快速查看字数、字符数和不含空格字符数。"]],
    },
    ja: {
      title: "AI 文章を公開する前のチェックリスト：単語数・文字数・タイトル長",
      description: "AI が生成した文章を公開する前に、単語数、文字数、タイトル、説明文の長さを確認するための実用チェックリストです。",
      intro: "AI は下書きを素早く作れますが、公開前には人の確認が必要です。長さ、構成、読みやすさを確認すると、検索や SNS、フォーム投稿に使いやすくなります。",
      steps: ["AI が生成した下書きを文字数・単語数カウンターに貼り付けます。", "単語数、文字数、空白を除いた文字数を確認します。", "タイトルを別に確認し、長さよりも分かりやすさを優先します。", "概要文、プロフィール文、meta description が制限内に収まるか確認します。", "最後に読み直し、重複表現、曖昧な主張、根拠のない内容を削除します。"],
      tips: ["AI 文章は事実確認とトーン調整をしてから公開してください。", "絵文字、日本語文字、改行の数え方はサービスごとに異なる場合があります。", "キーワードを詰め込むより、検索意図に合う自然なタイトルが有効です。"],
      faq: [["AI が書いた文章をそのまま公開できますか？", "公開前に編集、事実確認、重複チェックをする方が安全です。"], ["公開前に何を確認すべきですか？", "正確性、独自性、長さ、読みやすさ、読者の目的に合っているかを確認します。"], ["長さの確認に使えるツールは？", "文字数・単語数カウンターで文字数、単語数、空白を除いた文字数を確認できます。"]],
    },
  },
  {
    id: "ai-json-cleanup",
    slug: "format-json-from-ai-output",
    toolSlug: "json-formatter",
    en: {
      title: "How to Format JSON from AI Output Before Using It",
      description: "AI tools often return JSON snippets. Learn how to validate, format, and clean JSON before using it in apps, prompts, automations, or configuration files.",
      intro: "AI-generated JSON can be helpful, but it may include trailing commas, comments, extra explanation, or invalid quotes. Formatting and validation make problems easier to see.",
      steps: ["Copy only the JSON block from the AI answer.", "Paste it into the JSON formatter.", "Select Format to validate and indent the data.", "If validation fails, remove explanations, comments, trailing commas, or smart quotes.", "Use the cleaned JSON in your app, automation, or prompt only after reviewing the values."],
      tips: ["AI may produce JSON-like text that is not valid JSON.", "Never paste secrets, private keys, or production credentials into AI tools or online tools.", "Validate generated configuration before deploying it."],
      faq: [["Why is AI-generated JSON invalid?", "Common causes include extra prose, trailing commas, comments, single quotes, or unquoted property names."], ["Can formatting JSON change the data?", "Formatting changes whitespace and indentation only. The values should remain the same."], ["Should I trust AI-generated configuration?", "Review it carefully. AI output can be plausible but still wrong for your environment."]],
    },
    zh: {
      title: "AI 输出的 JSON 怎么整理、格式化和验证",
      description: "AI 经常生成 JSON 片段。使用到应用、自动化、配置文件或提示词前，应该先格式化、验证并清理 JSON。",
      intro: "AI 生成的 JSON 很方便，但可能夹带说明文字、注释、尾随逗号或不合法引号。先格式化和验证，可以更快发现问题。",
      steps: ["只复制 AI 回复中的 JSON 代码块。", "粘贴到 JSON 格式化工具中。", "点击格式化，检查是否能正确缩进和验证。", "如果验证失败，删除解释文字、注释、尾随逗号或智能引号。", "确认字段值无误后，再用于应用、自动化或配置文件。"],
      tips: ["AI 可能生成看起来像 JSON、但实际不合法的内容。", "不要把密钥、私钥、生产账号密码粘贴到 AI 或任何在线工具里。", "部署前一定要验证 AI 生成的配置。"],
      faq: [["为什么 AI 生成的 JSON 会报错？", "常见原因包括多余说明、尾随逗号、注释、单引号或未加引号的属性名。"], ["格式化 JSON 会改变数据吗？", "格式化通常只改变缩进和空白，不应该改变字段和值。"], ["AI 生成的配置可以直接用吗？", "不建议直接使用。它可能看起来合理，但仍然需要结合你的环境检查。"]],
    },
    ja: {
      title: "AI が出力した JSON を使う前に整形・検証する方法",
      description: "AI ツールが返す JSON 風の出力を、アプリ、設定ファイル、自動化、プロンプトで使う前に整形・検証する方法です。",
      intro: "AI が生成する JSON は便利ですが、説明文、コメント、末尾カンマ、不正な引用符が混ざることがあります。整形と検証で問題を見つけやすくなります。",
      steps: ["AI の回答から JSON ブロックだけをコピーします。", "JSON フォーマッターに貼り付けます。", "Format を選び、インデントと検証を行います。", "エラーが出る場合は、説明文、コメント、末尾カンマ、スマート引用符を削除します。", "値を確認してから、アプリ、設定、自動化に使用します。"],
      tips: ["AI は正しい JSON に見える不正なテキストを出すことがあります。", "秘密鍵、API キー、本番認証情報は AI やオンラインツールに貼り付けないでください。", "AI が生成した設定はデプロイ前に必ず検証してください。"],
      faq: [["AI 生成 JSON が無効になる理由は？", "余分な説明文、末尾カンマ、コメント、シングルクォート、引用符なしのプロパティ名がよくある原因です。"], ["JSON の整形でデータは変わりますか？", "通常は空白とインデントだけが変わり、値は変わりません。"], ["AI が作った設定をそのまま使えますか？", "環境に合わない場合があるため、必ず確認してから使ってください。"]],
    },
  },
  {
    id: "ai-image-upload",
    slug: "compress-images-for-ai-and-web-upload",
    toolSlug: "image-compressor",
    en: {
      title: "How to Compress Images Before Uploading to AI Tools, Forms, or Websites",
      description: "Large images can fail to upload or slow down workflows. Learn how to compress and resize images before using them with AI tools, forms, websites, and email.",
      intro: "Many AI tools, forms, and websites limit image size. Compressing or resizing a picture first can make uploads faster and more reliable.",
      steps: ["Choose the image you want to upload.", "If the file is very large, resize it to a practical width such as 1200px or 1600px.", "Compress the image as JPEG or WebP.", "Check the output file size and preview the visual quality.", "Use the compressed image for the AI tool, form, website, or email attachment."],
      tips: ["Keep the original image if it is important.", "Use PNG for transparency or sharp screenshots, and JPEG or WebP for photos.", "Do not over-compress images that contain small text or product details."],
      faq: [["Will compression affect AI image understanding?", "Mild compression usually works well, but very blurry or tiny images may reduce quality for OCR and visual analysis."], ["What file size should I aim for?", "For many uploads, under 1MB or 2MB is convenient, but the right limit depends on the service."], ["Are images uploaded by this tool?", "No. The image compressor processes images locally in your browser."]],
    },
    zh: {
      title: "上传 AI 工具、表单或网站前，如何压缩图片",
      description: "图片太大可能导致上传失败或速度很慢。学习如何在上传 AI 工具、表单、网站和邮件前压缩或调整图片尺寸。",
      intro: "很多 AI 工具、表单和网站都有图片大小限制。提前压缩或调整尺寸，可以让上传更快、更稳定。",
      steps: ["选择需要上传的图片。", "如果文件很大，先把宽度调整到 1200px 或 1600px 这类实用尺寸。", "选择 JPEG 或 WebP 进行压缩。", "查看输出文件大小，并预览图片是否清晰。", "把压缩后的图片上传到 AI 工具、表单、网站或邮件附件中。"],
      tips: ["重要图片请保留原图。", "透明背景或清晰截图适合 PNG，照片通常适合 JPEG 或 WebP。", "包含小字或商品细节的图片不要过度压缩。"],
      faq: [["压缩会影响 AI 识别图片吗？", "轻度压缩通常没问题，但过度模糊或尺寸太小可能影响 OCR 和视觉分析。"], ["图片应该压缩到多大？", "很多上传场景下 1MB 或 2MB 以下比较方便，但具体限制取决于平台。"], ["图片会上传到服务器吗？", "不会。图片压缩工具会在你的浏览器本地处理。"]],
    },
    ja: {
      title: "AI ツール、フォーム、Web サイトにアップロードする前に画像を圧縮する方法",
      description: "大きすぎる画像はアップロード失敗や待ち時間の原因になります。AI ツール、フォーム、Web、メール向けに画像を圧縮・リサイズする方法です。",
      intro: "多くの AI ツール、フォーム、Web サイトには画像サイズ制限があります。事前に圧縮・リサイズすると、アップロードが速く安定します。",
      steps: ["アップロードしたい画像を選びます。", "ファイルが大きい場合は、幅 1200px や 1600px 程度にリサイズします。", "JPEG または WebP として圧縮します。", "出力サイズと見た目の品質を確認します。", "圧縮後の画像を AI ツール、フォーム、Web サイト、メール添付に使用します。"],
      tips: ["重要な画像は元ファイルを残してください。", "透明背景や鮮明なスクリーンショットには PNG、写真には JPEG や WebP が向いています。", "小さな文字や商品詳細を含む画像は圧縮しすぎないようにします。"],
      faq: [["圧縮すると AI の画像理解に影響しますか？", "軽い圧縮なら多くの場合問題ありませんが、ぼやけた画像や小さすぎる画像は OCR や画像解析に不利です。"], ["目安のファイルサイズは？", "多くの用途では 1MB または 2MB 未満が扱いやすいですが、サービスごとの制限を確認してください。"], ["画像はアップロードされますか？", "いいえ。画像圧縮ツールはブラウザ内で処理します。"]],
    },
  },
  {
    id: "ai-qr-workflow",
    slug: "turn-ai-generated-links-into-qr-codes",
    toolSlug: "qr-code-generator",
    en: {
      title: "Turn AI-Generated Links, Event Text, or Instructions into QR Codes",
      description: "AI can draft event copy, instructions, and landing page links. Learn how to turn the final text or URL into a QR code that people can scan.",
      intro: "AI is useful for drafting event descriptions, menu text, instructions, and landing page copy. A QR code makes the final link or short text easy to open from posters, screens, and printed materials.",
      steps: ["Use AI to draft the message, event description, or landing page text.", "Edit the text and verify every URL before sharing.", "Copy the final HTTPS link or short text.", "Generate the QR code and download it.", "Scan the QR code with more than one phone before printing or publishing."],
      tips: ["Use a short, stable HTTPS URL when possible.", "Do not put long paragraphs into a QR code if a landing page would be easier to update.", "Always test the code at the final printed or displayed size."],
      faq: [["Can I put AI-generated text directly into a QR code?", "Yes, but short text scans better. For long content, link to a page instead."], ["Do QR codes expire?", "Static QR codes do not expire, but the destination link can stop working."], ["Should I verify AI-generated URLs?", "Yes. Always open and check links before creating a QR code."]],
    },
    zh: {
      title: "把 AI 生成的链接、活动文案或说明做成二维码",
      description: "AI 可以帮助生成活动文案、说明和落地页链接。这里介绍如何把最终链接或短文本生成可扫描二维码。",
      intro: "AI 很适合起草活动介绍、菜单说明、操作步骤和落地页文案。二维码可以让海报、屏幕和打印材料上的链接更容易被打开。",
      steps: ["先用 AI 起草活动说明、短文案或落地页内容。", "人工修改文案，并确认所有链接都能正常打开。", "复制最终 HTTPS 链接或短文本。", "生成二维码并下载。", "发布或打印前，用不止一台手机扫描测试。"],
      tips: ["尽量使用短而稳定的 HTTPS 链接。", "长篇内容不要直接塞进二维码，放到网页里再生成链接更方便更新。", "打印或展示前，一定按最终尺寸测试扫码效果。"],
      faq: [["可以把 AI 生成的文字直接做成二维码吗？", "可以，但短文本更容易扫描。长内容更建议放到网页里，再把链接做成二维码。"], ["二维码会过期吗？", "静态二维码本身不会过期，但目标链接可能失效。"], ["AI 生成的链接需要检查吗？", "需要。生成二维码前一定要打开链接确认内容正确。"]],
    },
    ja: {
      title: "AI が作成したリンク、イベント文、案内文を QR コードにする方法",
      description: "AI が作成したイベント案内、説明文、ランディングページ URL を、スキャンしやすい QR コードに変換する方法です。",
      intro: "AI はイベント説明、メニュー文、手順、ランディングページ文の下書きに便利です。QR コードにすると、ポスター、画面、印刷物から簡単に開けます。",
      steps: ["AI で案内文、イベント説明、リンク先の文章を下書きします。", "人が編集し、URL が正しく開くか確認します。", "最終的な HTTPS リンクまたは短いテキストをコピーします。", "QR コードを生成してダウンロードします。", "公開や印刷前に複数のスマートフォンで読み取りテストをします。"],
      tips: ["できるだけ短く安定した HTTPS URL を使います。", "長い文章は QR コードに直接入れず、Web ページにしてリンクする方が更新しやすいです。", "印刷や表示の最終サイズで必ず読み取り確認をしてください。"],
      faq: [["AI が作った文章を直接 QR コードにできますか？", "可能ですが、短い文章の方が読み取りやすいです。長文はページにしてリンクする方がおすすめです。"], ["QR コードに有効期限はありますか？", "静的 QR コード自体は期限切れになりませんが、リンク先が使えなくなることはあります。"], ["AI が作った URL は確認すべきですか？", "はい。QR コードを作る前に必ず開いて確認してください。"]],
    },
  },
];

function route(locale, type, slug = "") {
  const prefix = localeUi[locale].prefix;
  return `${prefix}/${type}/${slug}`.replace(/\/+/g, "/");
}

function toolRoute(locale, slug) {
  return `${route(locale, "tools", slug)}/`;
}

function guideRoute(locale, slug) {
  return `${route(locale, "guides", slug)}/`;
}

function languageLinks(guide) {
  return ["en", "zh", "ja"].map((locale) =>
    `<link rel="alternate" hreflang="${locale === "zh" ? "zh-CN" : locale}" href="${baseUrl}${guideRoute(locale, guide.slug)}" />`
  ).join("\n    ");
}

function relatedGuideLinks(locale, currentId) {
  return guides.filter((guide) => guide.id !== currentId).slice(0, 4).map((guide) =>
    `<a href="${guideRoute(locale, guide.slug)}">${guide[locale].title}</a>`
  ).join("");
}

function structuredData(guide, locale) {
  const content = guide[locale];
  return JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: content.title,
        description: content.description,
        mainEntityOfPage: `${baseUrl}${guideRoute(locale, guide.slug)}`,
        author: { "@type": "Organization", name: "CodeKitBox" },
        publisher: { "@type": "Organization", name: "CodeKitBox" },
        inLanguage: localeUi[locale].lang,
      },
      {
        "@type": "FAQPage",
        mainEntity: content.faq.map(([name, text]) => ({
          "@type": "Question",
          name,
          acceptedAnswer: { "@type": "Answer", text },
        })),
      },
    ],
  });
}

function guidePage(guide, locale) {
  const ui = localeUi[locale];
  const content = guide[locale];
  const canonical = `${baseUrl}${guideRoute(locale, guide.slug)}`;
  return `<!doctype html>
<html lang="${ui.lang}">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${content.title} - CodeKitBox</title>
    <meta name="description" content="${content.description}" />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="${canonical}" />
    <meta property="og:title" content="${content.title} - CodeKitBox" />
    <meta property="og:description" content="${content.description}" />
    <meta property="og:type" content="article" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:image" content="${baseUrl}/assets/codekitbox-social-preview.png" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${content.title} - CodeKitBox" />
    <meta name="twitter:description" content="${content.description}" />
    <meta name="twitter:image" content="${baseUrl}/assets/codekitbox-social-preview.png" />
    ${languageLinks(guide)}
    <link rel="alternate" hreflang="x-default" href="${baseUrl}${guideRoute("en", guide.slug)}" />
    <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
    <link rel="stylesheet" href="/styles.css" />
    <link rel="stylesheet" href="/tool-pages.css" />
    <link rel="stylesheet" href="/guides.css" />
    <script type="application/ld+json">${structuredData(guide, locale)}</script>
  </head>
  <body>
    <a class="skip-link" href="#main-content">Skip to content</a>
    <header class="tool-page-header">
      <nav class="tool-page-nav">
        <a class="brand" href="/" aria-label="CodeKitBox home"><span class="brand-mark">C</span><span>CodeKitBox</span></a>
        <div class="tool-page-nav-links"><a href="${route(locale, "guides")}/">${ui.guides}</a><a href="/">${ui.tools}</a></div>
      </nav>
    </header>
    <main class="guide-main" id="main-content">
      <article class="guide-article">
        <header class="guide-hero">
          <p class="eyebrow">${ui.updated}</p>
          <h1>${content.title}</h1>
          <p>${content.intro}</p>
          <a class="primary-button guide-cta" href="${toolRoute(locale, guide.toolSlug)}">${ui.useTool}</a>
        </header>
        <section>
          <h2>${ui.steps}</h2>
          <ol class="guide-steps">${content.steps.map((step) => `<li>${step}</li>`).join("")}</ol>
        </section>
        <section class="guide-tips">
          <h2>${ui.tips}</h2>
          <ul>${content.tips.map((tip) => `<li>${tip}</li>`).join("")}</ul>
        </section>
        <section>
          <h2>${ui.faq}</h2>
          ${content.faq.map(([q, a]) => `<details><summary>${q}</summary><p>${a}</p></details>`).join("")}
        </section>
        <section>
          <h2>${ui.related}</h2>
          <div class="related-tools">${relatedGuideLinks(locale, guide.id)}</div>
        </section>
      </article>
      <aside class="guide-aside">
        <p class="eyebrow">${ui.useTool}</p>
        <h2>${content.title.replace(/:.*$/, "")}</h2>
        <p>${content.description}</p>
        <a class="primary-button" href="${toolRoute(locale, guide.toolSlug)}">${ui.useTool}</a>
      </aside>
    </main>
    <footer class="site-footer tool-page-footer"><div><p>CodeKitBox</p><p>${ui.footer}</p></div></footer>
  </body>
</html>`;
}

function guideIndex(locale) {
  const ui = localeUi[locale];
  const title = locale === "zh" ? "CodeKitBox 使用指南" : locale === "ja" ? "CodeKitBox 使い方ガイド" : "CodeKitBox Practical Guides";
  const description = locale === "zh" ? "通过简明教程了解常用在线工具、数据格式和安全实践。" : locale === "ja" ? "オンラインツール、データ形式、セキュリティの基本を実用的なガイドで学べます。" : "Learn common online tools, data formats, and security practices with concise practical guides.";
  return `<!doctype html>
<html lang="${ui.lang}">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${title}</title>
    <meta name="description" content="${description}" />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="${baseUrl}${route(locale, "guides")}/" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="${baseUrl}/assets/codekitbox-social-preview.png" />
    <meta name="twitter:card" content="summary_large_image" />
    <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
    <link rel="stylesheet" href="/styles.css" />
    <link rel="stylesheet" href="/tool-pages.css" />
    <link rel="stylesheet" href="/guides.css" />
  </head>
  <body>
    <header class="tool-page-header"><nav class="tool-page-nav"><a class="brand" href="/"><span class="brand-mark">C</span><span>CodeKitBox</span></a><div class="tool-page-nav-links"><a href="/">${ui.tools}</a></div></nav></header>
    <main class="guide-index">
      <header><p class="eyebrow">${ui.guides}</p><h1>${title}</h1><p>${description}</p></header>
      <div class="guide-grid">${guides.map((guide) => `<article><p class="eyebrow">${ui.updated}</p><h2><a href="${guideRoute(locale, guide.slug)}">${guide[locale].title}</a></h2><p>${guide[locale].description}</p><a class="guide-card-link" href="${guideRoute(locale, guide.slug)}">${ui.guides} &rarr;</a></article>`).join("")}</div>
    </main>
    <footer class="site-footer tool-page-footer"><div><p>CodeKitBox</p><p>${ui.footer}</p></div></footer>
  </body>
</html>`;
}

for (const locale of ["en", "zh", "ja"]) {
  const guidesDir = path.join(root, localeUi[locale].prefix, "guides");
  fs.rmSync(guidesDir, { recursive: true, force: true });
  fs.mkdirSync(guidesDir, { recursive: true });
  fs.writeFileSync(path.join(guidesDir, "index.html"), guideIndex(locale), "utf8");
  for (const guide of guides) {
    const dir = path.join(guidesDir, guide.slug);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, "index.html"), guidePage(guide, locale), "utf8");
  }
}

const sitemapPath = path.join(root, "sitemap.xml");
let sitemap = fs.readFileSync(sitemapPath, "utf8");
sitemap = sitemap.replace(/\s*<url><loc>https:\/\/codekitbox\.com\/(?:zh\/|ja\/)?guides\/.*?<\/url>/g, "");
const entries = ["en", "zh", "ja"].flatMap((locale) => [
  `${route(locale, "guides")}/`,
  ...guides.map((guide) => guideRoute(locale, guide.slug)),
]);
const xml = entries.map((url) => `  <url><loc>${baseUrl}${url}</loc><priority>0.8</priority></url>`).join("\n");
sitemap = sitemap.replace("</urlset>", `${xml}\n</urlset>`);
fs.writeFileSync(sitemapPath, sitemap, "utf8");

console.log(`Generated ${guides.length * 3} localized guide pages, 3 guide indexes, and updated sitemap.xml`);
