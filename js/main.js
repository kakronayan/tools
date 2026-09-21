(function () {
  const U = window.Utils;

  const ICONS = {
    box: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M21 8v8a2 2 0 0 1-1 1.73l-7 4a2 2 0 0 1-2 0l-7-4A2 2 0 0 1 3 16V8"/><path d="m3 8 9 5 9-5"/><path d="M12 22V13"/><path d="m3 8 9-5 9 5"/></svg>',
    wrench:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
    api: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M4 7V4h16v3"/><path d="M9 20h6"/><path d="M12 4v16"/></svg>',
    regex:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>',
    schema:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/></svg>',
    search:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>',
    binary:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><rect x="2" y="3" width="20" height="18" rx="2"/><path d="M8 10h.01M16 10h.01M8 14h.01M16 14h.01"/></svg>',
    link: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>',
    code: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
    key: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="m21 2-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0 3 3L22 7l-3-3m-3.5 3.5L19 4"/></svg>',
    braces:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5a2 2 0 0 0 2 2h1"/><path d="M16 3h1a2 2 0 0 1 2 2v5a2 2 0 0 0 2 2 2 2 0 0 0-2 2v5a2 2 0 0 1-2 2h-1"/></svg>',
    file: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/></svg>',
    database:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>',
    palette:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>',
    hash: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><line x1="4" y1="9" x2="20" y2="9"/><line x1="4" y1="15" x2="20" y2="15"/><line x1="10" y1="3" x2="8" y2="21"/><line x1="16" y1="3" x2="14" y2="21"/></svg>',
    shield:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
    image:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></svg>',
    swap: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="m16 3 4 4-4 4"/><path d="M20 7H4"/><path d="m8 21-4-4 4-4"/><path d="M4 17h16"/></svg>',
    upload:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>',
    copy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>',
    download:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>',
    check:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',
    clock:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
    panelLeft:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18"/><path d="m14 9-3 3 3 3"/></svg>',
    panelRight:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18"/><path d="m12 9 3 3-3 3"/></svg>',
  };

  const AVATAR_URL =
    "https://avatars.githubusercontent.com/u/39107948?u=9de13f9e4950a94f683f0c8a3d8c0e491dec65d4";

  const DEFAULT_BASE64 = `{
  "user_id": 1024,
  "username": "alex_dev",
  "session": "active",
  "permissions": ["read", "write", "admin"]
}`;

  const NAV_SECTIONS = [
    {
      title: "Popular Encoders",
      items: [
        {
          id: "base64",
          name: "Base64 Encoder",
          icon: "binary",
          title: "Base64 Encoder / Decoder",
          desc: "Convert text, JSON, or binary data to Base64 and back. All processing happens locally in your browser.",
        },
        {
          id: "url-encode",
          name: "URL Encoder",
          icon: "link",
          title: "URL Encoder / Decoder",
          desc: "Encode or decode URI components safely for query strings and paths.",
        },
        {
          id: "html-encode",
          name: "HTML Entity Encoder",
          icon: "code",
          title: "HTML Entity Encoder",
          desc: "Escape or unescape HTML entities for safe markup output.",
        },
        {
          id: "jwt",
          name: "JWT Decoder",
          icon: "key",
          title: "JWT Decoder",
          desc: "Inspect JWT header and payload without sending tokens to a server.",
        },
      ],
    },
    {
      title: "Formatters",
      items: [
        {
          id: "json",
          name: "JSON Formatter",
          icon: "braces",
          title: "JSON Formatter",
          desc: "Format, minify, and query JSON with path lookups.",
        },
        {
          id: "text",
          name: "Text Utilities",
          icon: "file",
          title: "Text Utilities",
          desc: "Convert case, generate slugs, and count characters.",
        },
        {
          id: "sql",
          name: "SQL Beautifier",
          icon: "database",
          comingSoon: true,
        },
        { id: "css", name: "CSS Optimizer", icon: "palette", comingSoon: true },
      ],
    },
    {
      title: "Generators & Crypto",
      items: [
        {
          id: "uuid",
          name: "UUID Generator",
          icon: "hash",
          title: "UUID Generator",
          desc: "Generate RFC 4122 UUIDs locally in your browser.",
        },
        {
          id: "crypto",
          name: "MD5 & SHA Hashers",
          icon: "shield",
          title: "Hash Generator",
          desc: "Compute SHA digests from text without leaving the page.",
        },
        {
          id: "bcrypt",
          name: "Bcrypt Hasher",
          icon: "shield",
          comingSoon: true,
        },
        {
          id: "placeholder",
          name: "Placeholder Image",
          icon: "image",
          comingSoon: true,
        },
      ],
    },
  ];

  const TOP_TABS = [
    { id: "utilities", label: "Utilities", icon: "wrench" },
    { id: "api", label: "API Client", icon: "api", comingSoon: true },
    { id: "regex", label: "Regex Sandbox", icon: "regex", tool: "regex" },
    { id: "schema", label: "JSON Schema", icon: "schema", tool: "json" },
  ];

  const ALL_ITEMS = NAV_SECTIONS.flatMap((s) => s.items);

  const state = {
    tool: getToolFromHash(),
    topTab: "utilities",
    search: "",
    liveMode: true,
    sidebarCollapsed: localStorage.getItem("sidebarCollapsed") === "true",
    base64: {
      input: DEFAULT_BASE64,
      mode: "encode",
      settings: {
        urlSafe: true,
        noPadding: false,
        splitLines: false,
        encoding: "UTF-8",
      },
    },
    jwt: { input: "" },
    text: { input: "Hello, DevBox!", mode: "slug" },
    encoding: { input: "<p>Hello world & friends</p>", mode: "urlEncode" },
    json: {
      input: '{"message":"Hello","items":[{"name":"alpha"}]}',
      mode: "format",
      path: "$.items[0].name",
    },
    crypto: {
      input: "Hash this locally",
      algorithm: "SHA-256",
      output: "Click Generate hash to compute a digest.",
    },
    time: { input: String(Math.floor(Date.now() / 1000)), mode: "unix" },
    color: { primary: "#0f172a", secondary: "#ffffff" },
    regex: {
      pattern: "\\b\\w{5}\\b",
      flags: "gi",
      input: "These local tools test regex matches in your browser.",
    },
    history: [
      { name: "User Profile Payload", time: "2m ago", action: "Encode" },
      { name: "OAuth Access Token", time: "15m ago", action: "Decode" },
      { name: "API Key String", time: "1h ago", action: "Encode" },
    ],
  };

  function getToolFromHash() {
    const hash = location.hash.replace(/^#/, "").trim();
    return ALL_ITEMS.some((t) => t.id === hash && !t.comingSoon)
      ? hash
      : "base64";
  }

  function getNavItem(id) {
    return ALL_ITEMS.find((t) => t.id === id) ?? ALL_ITEMS[0];
  }

  function resolveTool(id) {
    if (id === "url-encode") return { kind: "encoding", mode: "urlEncode" };
    if (id === "html-encode") return { kind: "encoding", mode: "htmlEscape" };
    if (id === "uuid") return { kind: "crypto-uuid" };
    return { kind: id };
  }

  function escHtml(s) {
    return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  function toast(msg) {
    const el = document.getElementById("toast");
    document.getElementById("toast-text").textContent = msg;
    el.classList.add("show");
    clearTimeout(window._toastTimer);
    window._toastTimer = setTimeout(() => el.classList.remove("show"), 2400);
  }

  function copyText(value) {
    if (!value) return;
    navigator.clipboard
      ?.writeText(value)
      .then(() => toast("Copied to clipboard"));
  }

  function downloadText(value, filename) {
    const blob = new Blob([value], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
    toast("Download started");
  }

  function encodeBase64(input, settings) {
    let result = U.bytesToBase64(U.textEncoder.encode(input));
    if (settings.urlSafe)
      result = result.replace(/\+/g, "-").replace(/\//g, "_");
    if (settings.noPadding) result = result.replace(/=+$/, "");
    if (settings.splitLines)
      result = (result.match(/.{1,76}/g) ?? [result]).join("\n");
    return result;
  }

  function decodeBase64(input, settings) {
    let value = input.trim().replace(/\s/g, "");
    if (settings.urlSafe) value = value.replace(/-/g, "+").replace(/_/g, "/");
    const pad = value.length % 4;
    if (pad) value += "=".repeat(4 - pad);
    return U.base64ToText(value);
  }

  function computeOutput() {
    const resolved = resolveTool(state.tool);
    try {
      switch (resolved.kind) {
        case "base64":
          return state.base64.mode === "encode"
            ? encodeBase64(state.base64.input, state.base64.settings)
            : decodeBase64(state.base64.input, state.base64.settings);
        case "jwt": {
          if (!state.jwt.input.trim())
            return "Paste a JWT to inspect its header and payload.";
          const parts = state.jwt.input.trim().split(".");
          if (parts.length < 2)
            return "JWTs should contain at least a header and payload separated by dots.";
          return `Header\n${U.base64UrlToJson(parts[0])}\n\nPayload\n${U.base64UrlToJson(parts[1])}\n\nSignature\n${parts[2] ? "Present (not verified)" : "Missing"}`;
        }
        case "text": {
          const { input, mode } = state.text;
          if (mode === "slug") return U.generateSlug(input);
          if (mode === "count") return U.countText(input);
          return U.caseConvert(input, mode);
        }
        case "encoding": {
          const mode = resolved.mode ?? state.encoding.mode;
          const input = state.encoding.input;
          if (mode === "urlEncode") return encodeURIComponent(input);
          if (mode === "urlDecode") return decodeURIComponent(input);
          if (mode === "htmlEscape") return U.escapeHtml(input);
          if (mode === "htmlUnescape") return U.unescapeHtml(input);
          if (mode === "unicodeEscape") return U.unicodeEscape(input);
          return U.unicodeUnescape(input);
        }
        case "json": {
          const { input, mode, path } = state.json;
          if (mode === "minify") return U.minifyJson(input);
          if (mode === "path") return U.evaluateJsonPath(input, path);
          return U.prettyJson(input);
        }
        case "crypto":
          return state.crypto.output;
        case "crypto-uuid":
          return state.crypto.output;
        case "time":
          return U.formatDateSummary(state.time.input, state.time.mode);
        case "color": {
          const color = U.parseColorInput(state.color.primary);
          if (!color) return "Enter a valid HEX, RGB, or HSL color.";
          const hsl = U.rgbToHsl(color.r, color.g, color.b);
          return [
            `HEX: ${U.rgbToHex(color.r, color.g, color.b)}`,
            `RGB: rgb(${color.r}, ${color.g}, ${color.b})`,
            `HSL: hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`,
            "",
            U.testContrast(state.color.primary, state.color.secondary),
          ].join("\n");
        }
        case "regex": {
          const regex = new RegExp(state.regex.pattern, state.regex.flags);
          const matcher = regex.global
            ? regex
            : new RegExp(regex.source, `${regex.flags}g`);
          const matches = Array.from(state.regex.input.matchAll(matcher));
          if (!matches.length) return "No matches.";
          return matches
            .map(
              (match, index) =>
                `${index + 1}. "${match[0]}" at index ${match.index}`,
            )
            .join("\n");
        }
        default:
          return "";
      }
    } catch (error) {
      return `Error: ${error.message}`;
    }
  }

  function isErrorOutput(output) {
    return (
      output.startsWith("Error:") ||
      output.startsWith("Invalid") ||
      output.startsWith("Unable")
    );
  }

  function getStatusMessage(output) {
    if (isErrorOutput(output)) return { type: "error", text: output };
    if (state.tool === "base64") {
      const mode = state.base64.mode === "encode" ? "encoded" : "decoded";
      const kind = state.base64.settings.urlSafe
        ? "URL-safe Base64"
        : "standard Base64";
      return {
        type: "success",
        text: `Successfully ${mode}! Output is valid ${kind} encoding. All processing completed locally.`,
      };
    }
    if (output && !output.startsWith("Paste") && !output.startsWith("Click")) {
      return {
        type: "success",
        text: "Operation completed successfully in your browser.",
      };
    }
    return null;
  }

  function addHistory(name) {
    const action =
      state.tool === "base64"
        ? state.base64.mode === "encode"
          ? "Encode"
          : "Decode"
        : "Run";
    state.history.unshift({ name, time: "Just now", action });
    if (state.history.length > 8) state.history.pop();
  }

  function modeButtons(modes, selected, group) {
    return `<div class="mode-row">${modes
      .map(
        ([value, label]) =>
          `<button class="mode-btn ${selected === value ? "active" : ""}" data-mode="${value}" data-group="${group}" type="button">${label}</button>`,
      )
      .join("")}</div>`;
  }

  function ioGrid(inputHtml, output, copy = true) {
    return `
      <div class="grid-2">
        <div class="field-block">${inputHtml}</div>
        <div class="field-block">
          <div class="output-head">
            <label class="field-label">Output</label>
            ${copy ? `<button class="copy-btn" data-copy="${escHtml(output)}" type="button">Copy Result</button>` : ""}
          </div>
          <div class="out" id="toolOutput">${escHtml(output)}</div>
        </div>
      </div>`;
  }

  function renderBase64Workspace(output) {
    const inputLen = state.base64.input.length;
    const outputLen = output.length;
    const status = getStatusMessage(output);

    return `
      <div class="editor-workspace">
        <div class="editor-panel">
          <div class="editor-panel-head">
            <span class="editor-label">Input String <strong>( ${inputLen} chars )</strong></span>
            <div class="editor-actions">
              <button class="ghost-btn" id="uploadBtn" type="button">${ICONS.upload} Upload File</button>
              <button class="ghost-btn" id="clearBtn" type="button">Clear</button>
            </div>
          </div>
          <div class="editor-box">
            <textarea class="editor-textarea" id="toolInput">${escHtml(state.base64.input)}</textarea>
          </div>
        </div>
        <button class="swap-btn" id="swapBtn" type="button" title="Swap input and output">${ICONS.swap}</button>
        <div class="editor-panel">
          <div class="editor-panel-head">
            <span class="editor-label">Base64 Output <strong>( ${outputLen} chars )</strong></span>
            <div class="editor-actions">
              <button class="ghost-btn primary copy-btn" data-copy="${escHtml(output)}" type="button">${ICONS.copy} Copy Result</button>
              <button class="ghost-btn" id="downloadBtn" type="button">${ICONS.download} Download</button>
            </div>
          </div>
          <div class="editor-box output-highlight">
            <pre class="editor-output ${isErrorOutput(output) ? "error" : ""}" id="toolOutput">${escHtml(output)}</pre>
          </div>
        </div>
      </div>
      ${
        status
          ? `<div class="status-banner ${status.type === "error" ? "error" : ""}">${ICONS.check}<span>${escHtml(status.text)}</span></div>`
          : ""
      }`;
  }

  function renderGenericTool(output) {
    const resolved = resolveTool(state.tool);
    const isError = isErrorOutput(output);

    if (getNavItem(state.tool).comingSoon) {
      return `
        <div class="coming-soon">
          ${ICONS.clock}
          <h3>Coming Soon</h3>
          <p>This tool is on the roadmap. Check back in a future release.</p>
        </div>`;
    }

    switch (resolved.kind) {
      case "jwt":
        return ioGrid(
          `<label class="field-label">Token</label><textarea id="toolInput" placeholder="Paste a JWT...">${escHtml(state.jwt.input)}</textarea>`,
          output,
        );
      case "text":
        return `
          ${modeButtons(
            [
              ["slug", "Slug"],
              ["camel", "camelCase"],
              ["pascal", "PascalCase"],
              ["snake", "snake_case"],
              ["kebab", "kebab-case"],
              ["upper", "UPPER"],
              ["lower", "lower"],
              ["title", "Title Case"],
              ["count", "Count"],
            ],
            state.text.mode,
            "text",
          )}
          ${ioGrid(
            `<label class="field-label">Input</label><textarea id="toolInput">${escHtml(state.text.input)}</textarea>`,
            output,
          )}`;
      case "encoding": {
        const mode = resolved.mode ?? state.encoding.mode;
        const modes =
          state.tool === "url-encode"
            ? [
                ["urlEncode", "Encode"],
                ["urlDecode", "Decode"],
              ]
            : [
                ["htmlEscape", "Escape"],
                ["htmlUnescape", "Unescape"],
              ];
        return `
          ${modeButtons(modes, mode, "encoding")}
          ${ioGrid(
            `<label class="field-label">Input</label><textarea id="toolInput">${escHtml(state.encoding.input)}</textarea>`,
            output,
          )}`;
      }
      case "json":
        return `
          ${modeButtons(
            [
              ["format", "Format"],
              ["minify", "Minify"],
              ["path", "Path lookup"],
            ],
            state.json.mode,
            "json",
          )}
          ${
            state.json.mode === "path"
              ? `<div class="field-block"><label class="field-label">JSON path</label><input class="field-input" id="jsonPath" type="text" value="${escHtml(state.json.path)}"></div>`
              : ""
          }
          ${ioGrid(
            `<label class="field-label">Input</label><textarea id="toolInput">${escHtml(state.json.input)}</textarea>`,
            output,
          )}`;
      case "crypto":
      case "crypto-uuid":
        return `
          ${
            resolved.kind === "crypto"
              ? modeButtons(
                  [
                    ["SHA-1", "SHA-1"],
                    ["SHA-256", "SHA-256"],
                    ["SHA-384", "SHA-384"],
                    ["SHA-512", "SHA-512"],
                  ],
                  state.crypto.algorithm,
                  "crypto",
                )
              : ""
          }
          <div class="mode-row">
            ${resolved.kind === "crypto" ? '<button class="action-btn primary" id="hashBtn" type="button">Generate hash</button>' : ""}
            <button class="action-btn primary" id="uuidBtn" type="button">Generate UUID</button>
          </div>
          ${
            resolved.kind === "crypto"
              ? ioGrid(
                  `<label class="field-label">Input</label><textarea id="toolInput">${escHtml(state.crypto.input)}</textarea>`,
                  output,
                )
              : `<div class="field-block"><div class="output-head"><label class="field-label">Generated UUID</label><button class="copy-btn" data-copy="${escHtml(output)}" type="button">Copy Result</button></div><div class="out" id="toolOutput">${escHtml(output)}</div></div>`
          }`;
      case "regex":
        return `
          <div class="row-2 field-block">
            <div><label class="field-label">Pattern</label><input class="field-input" id="regexPattern" type="text" value="${escHtml(state.regex.pattern)}"></div>
            <div><label class="field-label">Flags</label><input class="field-input" id="regexFlags" type="text" value="${escHtml(state.regex.flags)}"></div>
          </div>
          ${ioGrid(
            `<label class="field-label">Test string</label><textarea id="toolInput">${escHtml(state.regex.input)}</textarea>`,
            output,
          )}`;
      default:
        return `<div class="coming-soon"><h3>Tool not found</h3></div>`;
    }
  }

  function renderNavSections() {
    const q = state.search.toLowerCase().trim();
    return NAV_SECTIONS.map(
      (section) => `
      <div class="nav-section">
        <div class="nav-section-title">${section.title}</div>
        ${section.items
          .map((item) => {
            const hidden = q && !item.name.toLowerCase().includes(q);
            return `
            <button class="nav-item ${state.tool === item.id ? "active" : ""} ${hidden ? "hidden" : ""}"
              data-tool="${item.id}" data-name="${escHtml(item.name)}" type="button" title="${escHtml(item.name)}">
              ${ICONS[item.icon] ?? ICONS.file}
              <span class="nav-item-label">${item.name}</span>
            </button>`;
          })
          .join("")}
      </div>`,
    ).join("");
  }

  function renderRightSidebar() {
    const isBase64 = state.tool === "base64";
    const s = state.base64.settings;

    return `
      <aside class="sidebar-right">
        <div class="panel-section">
          <h3 class="panel-section-title">Tool Settings</h3>
          ${
            isBase64
              ? `
            <div class="setting-row">
              <div class="setting-info">
                <span class="setting-label">URL Safe</span>
                <span class="setting-desc">Use - and _ instead of + and /</span>
              </div>
              <button class="toggle ${s.urlSafe ? "on" : ""}" data-setting="urlSafe" type="button" aria-label="URL Safe"></button>
            </div>
            <div class="setting-row">
              <div class="setting-info">
                <span class="setting-label">No Padding</span>
                <span class="setting-desc">Strip trailing = characters</span>
              </div>
              <button class="toggle ${s.noPadding ? "on" : ""}" data-setting="noPadding" type="button" aria-label="No Padding"></button>
            </div>
            <div class="setting-row">
              <div class="setting-info">
                <span class="setting-label">Split Lines</span>
                <span class="setting-desc">Wrap output at 76 characters</span>
              </div>
              <button class="toggle ${s.splitLines ? "on" : ""}" data-setting="splitLines" type="button" aria-label="Split Lines"></button>
            </div>
            <div class="setting-row" style="flex-direction:column;align-items:stretch">
              <span class="setting-label">Character Encoding</span>
              <select class="setting-select" id="charEncoding">
                <option value="UTF-8" selected>UTF-8</option>
                <option value="ASCII" disabled>ASCII (soon)</option>
              </select>
            </div>`
              : `<p style="margin:0;font-size:13px;color:var(--text-faint);line-height:1.5">Settings for this tool will appear here when available.</p>`
          }
        </div>
        <div class="panel-section">
          <h3 class="panel-section-title">Run History</h3>
          <div class="history-list">
            ${state.history
              .map(
                (h) => `
              <div class="history-item">
                <div>
                  <div class="history-name">${escHtml(h.name)}</div>
                  <div class="history-meta">${escHtml(h.time)}</div>
                </div>
                <span class="history-action">${escHtml(h.action)}</span>
              </div>`,
              )
              .join("")}
          </div>
        </div>
        <div class="profile-card">
          <div class="profile-user">
            <div class="profile-avatar">
              <img src="${AVATAR_URL}" alt="" width="36" height="36">
            </div>
            <div>
              <div class="profile-name">alex_dev</div>
              <div class="profile-role">Administrator</div>
            </div>
            <span class="pro-badge">PRO</span>
          </div>
          <div class="profile-actions">
            <button class="profile-btn" type="button">Settings</button>
            <button class="profile-btn" type="button">Sign Out</button>
          </div>
        </div>
      </aside>`;
  }

  function render() {
    const item = getNavItem(state.tool);
    const output = computeOutput();
    const isBase64 = state.tool === "base64";
    const breadcrumb =
      state.tool === "base64" ||
      state.tool.startsWith("url") ||
      state.tool.startsWith("html") ||
      state.tool === "jwt"
        ? "Encoders & Decoders"
        : state.tool === "json" || state.tool === "text"
          ? "Formatters"
          : "Generators & Crypto";

    document.getElementById("app").innerHTML = `
      <div class="bg-grid"></div>
      <div class="bg-glow"></div>
      <div class="app-shell">
        <header class="topbar">
          <div class="topbar-brand">
            <button class="sidebar-toggle" id="sidebarToggle" type="button" aria-label="${state.sidebarCollapsed ? "Expand menu" : "Collapse menu"}" title="${state.sidebarCollapsed ? "Expand menu" : "Collapse menu"}">
              ${state.sidebarCollapsed ? ICONS.panelRight : ICONS.panelLeft}
            </button>
            <div class="brand-icon">${ICONS.box}</div>
            <div class="brand-text">DevBox <span>/ ${breadcrumb}</span></div>
          </div>
          <nav class="topbar-nav">
            ${TOP_TABS.map(
              (tab) => `
              <button class="topbar-tab ${state.topTab === tab.id ? "active" : ""}" data-tab="${tab.id}" type="button">
                ${ICONS[tab.icon]} ${tab.label}
              </button>`,
            ).join("")}
          </nav>
          <div class="topbar-actions">
            <div class="search-box">
              ${ICONS.search}
              <input id="searchInput" type="search" placeholder="Search tools..." value="${escHtml(state.search)}">
            </div>
            <div class="live-mode">
              <span>Live Mode</span>
              <button class="toggle ${state.liveMode ? "on" : ""}" id="liveModeToggle" type="button" aria-label="Live Mode"></button>
            </div>
            <div class="avatar">
              <img src="${AVATAR_URL}" alt="" width="32" height="32">
            </div>
          </div>
        </header>
        <div class="app-body">
          <aside class="sidebar-left ${state.sidebarCollapsed ? "collapsed" : ""}" id="sidebarNav">${renderNavSections()}</aside>
          <main class="workspace">
            <div class="workspace-inner">
              <div class="workspace-header">
                <div>
                  <h1 class="workspace-title">${item.title ?? item.name}</h1>
                  <p class="workspace-desc">${item.desc ?? ""}</p>
                </div>
                ${
                  isBase64
                    ? `
                  <div class="segmented">
                    <button class="segmented-btn ${state.base64.mode === "encode" ? "active" : ""}" data-mode="encode" data-group="base64" type="button">Encode</button>
                    <button class="segmented-btn ${state.base64.mode === "decode" ? "active" : ""}" data-mode="decode" data-group="base64" type="button">Decode</button>
                  </div>`
                    : ""
                }
              </div>
              <div class="tool-generic" id="toolBody">${isBase64 ? renderBase64Workspace(output) : renderGenericTool(output)}</div>
            </div>
          </main>
          ${renderRightSidebar()}
        </div>
      </div>
      <div class="toast" id="toast"><span class="led"></span><span id="toast-text"></span></div>
    `;

    bindEvents(output);
  }

  function bindEvents(latestOutput) {
    document.getElementById("sidebarToggle")?.addEventListener("click", () => {
      state.sidebarCollapsed = !state.sidebarCollapsed;
      localStorage.setItem("sidebarCollapsed", String(state.sidebarCollapsed));
      render();
    });

    document.getElementById("searchInput")?.addEventListener("input", (e) => {
      state.search = e.target.value;
      document.querySelectorAll(".nav-item").forEach((btn) => {
        const name = (btn.dataset.name ?? "").toLowerCase();
        btn.classList.toggle(
          "hidden",
          state.search.trim() && !name.includes(state.search.toLowerCase()),
        );
      });
    });

    document.getElementById("liveModeToggle")?.addEventListener("click", () => {
      state.liveMode = !state.liveMode;
      render();
    });

    document.querySelectorAll("[data-tab]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const tab = TOP_TABS.find((t) => t.id === btn.dataset.tab);
        if (tab?.comingSoon) {
          toast("Coming soon");
          return;
        }
        state.topTab = btn.dataset.tab;
        if (tab?.tool) {
          state.tool = tab.tool;
          history.pushState({ tool: state.tool }, "", `#${state.tool}`);
        }
        render();
      });
    });

    document.querySelectorAll("[data-tool]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const item = getNavItem(btn.dataset.tool);
        if (item.comingSoon) {
          state.tool = btn.dataset.tool;
          render();
          return;
        }
        state.tool = btn.dataset.tool;
        const resolved = resolveTool(state.tool);
        if (resolved.kind === "encoding") state.encoding.mode = resolved.mode;
        history.pushState({ tool: state.tool }, "", `#${state.tool}`);
        render();
      });
    });

    document.querySelectorAll("[data-mode]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const group = btn.dataset.group;
        const mode = btn.dataset.mode;
        if (group === "base64") state.base64.mode = mode;
        if (group === "text") state.text.mode = mode;
        if (group === "encoding") state.encoding.mode = mode;
        if (group === "json") state.json.mode = mode;
        if (group === "crypto") state.crypto.algorithm = mode;
        if (group === "time") state.time.mode = mode;
        render();
      });
    });

    document.querySelectorAll("[data-setting]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const key = btn.dataset.setting;
        state.base64.settings[key] = !state.base64.settings[key];
        render();
      });
    });

    const input = document.getElementById("toolInput");
    if (input) {
      input.addEventListener("input", (e) => {
        const value = e.target.value;
        if (state.tool === "base64") state.base64.input = value;
        if (state.tool === "jwt") state.jwt.input = value;
        if (state.tool === "text") state.text.input = value;
        if (state.tool === "url-encode" || state.tool === "html-encode")
          state.encoding.input = value;
        if (state.tool === "json") state.json.input = value;
        if (state.tool === "crypto") state.crypto.input = value;
        if (state.tool === "regex") state.regex.input = value;
        if (state.liveMode) updateOutput();
      });
    }

    document.getElementById("jsonPath")?.addEventListener("input", (e) => {
      state.json.path = e.target.value;
      if (state.liveMode) updateOutput();
    });

    document.getElementById("regexPattern")?.addEventListener("input", (e) => {
      state.regex.pattern = e.target.value;
      if (state.liveMode) updateOutput();
    });

    document.getElementById("regexFlags")?.addEventListener("input", (e) => {
      state.regex.flags = e.target.value;
      if (state.liveMode) updateOutput();
    });

    document.getElementById("clearBtn")?.addEventListener("click", () => {
      state.base64.input = "";
      render();
    });

    document.getElementById("swapBtn")?.addEventListener("click", () => {
      const out = computeOutput();
      if (!isErrorOutput(out)) {
        state.base64.input = out;
        state.base64.mode =
          state.base64.mode === "encode" ? "decode" : "encode";
        addHistory("Swapped payload");
        render();
      }
    });

    document.getElementById("uploadBtn")?.addEventListener("click", () => {
      const fileInput = document.createElement("input");
      fileInput.type = "file";
      fileInput.addEventListener("change", () => {
        const file = fileInput.files?.[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = () => {
          state.base64.input = String(reader.result ?? "");
          addHistory(file.name);
          render();
        };
        reader.readAsText(file);
      });
      fileInput.click();
    });

    document.getElementById("downloadBtn")?.addEventListener("click", () => {
      const out = computeOutput();
      if (!isErrorOutput(out)) downloadText(out, "output.txt");
    });

    document.getElementById("hashBtn")?.addEventListener("click", async () => {
      try {
        const digest = await crypto.subtle.digest(
          state.crypto.algorithm,
          U.textEncoder.encode(state.crypto.input),
        );
        state.crypto.output = Array.from(new Uint8Array(digest), (byte) =>
          byte.toString(16).padStart(2, "0"),
        ).join("");
        addHistory("Hash digest");
        render();
      } catch (error) {
        state.crypto.output = `Error: ${error.message}`;
        render();
      }
    });

    document.getElementById("uuidBtn")?.addEventListener("click", () => {
      state.crypto.output = crypto.randomUUID();
      addHistory("UUID");
      render();
    });

    document.querySelectorAll("[data-copy]").forEach((btn) => {
      btn.addEventListener("click", () =>
        copyText(
          btn.dataset.copy ||
            document.getElementById("toolOutput")?.textContent ||
            "",
        ),
      );
    });
  }

  function updateOutput() {
    const out = document.getElementById("toolOutput");
    if (!out) return;
    const value = computeOutput();
    if (out.tagName === "TEXTAREA") return;
    out.textContent = value;
    out.classList.toggle("error", isErrorOutput(value));
    document.querySelectorAll(".copy-btn").forEach((btn) => {
      btn.dataset.copy = value;
    });
    const banner = document.querySelector(".status-banner span");
    const status = getStatusMessage(value);
    if (banner && status) banner.textContent = status.text;
    const label = document.querySelector(
      ".editor-panel:last-child .editor-label strong",
    );
    if (label) label.textContent = `( ${value.length} chars )`;
    const inputLabel = document.querySelector(
      ".editor-panel:first-child .editor-label strong",
    );
    if (inputLabel && state.tool === "base64")
      inputLabel.textContent = `( ${state.base64.input.length} chars )`;
  }

  window.addEventListener('popstate', () => {
    state.tool = getToolFromHash();
    render();
  });

  if (!location.hash) history.replaceState({ tool: state.tool }, '', `#${state.tool}`);
  render();
})();
