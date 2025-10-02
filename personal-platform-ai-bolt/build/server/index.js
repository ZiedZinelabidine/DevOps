import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { Meta, Links, Outlet, ScrollRestoration, Scripts, RemixServer, useLoaderData } from '@remix-run/react';
import { isbot } from 'isbot';
import { renderToReadableStream } from 'react-dom/server';
import { createHead, renderHeadToString } from 'remix-island';
import { useStore } from '@nanostores/react';
import { map, atom } from 'nanostores';
import Cookies from 'js-cookie';
import { Chalk } from 'chalk';
import React, { useEffect, useRef, useState, useCallback, memo, forwardRef } from 'react';
import { json } from '@remix-run/cloudflare';
import process from 'vite-plugin-node-polyfills/shims/process';
import { createOpenAI } from '@ai-sdk/openai';
import { createAnthropic } from '@ai-sdk/anthropic';
import { createCohere } from '@ai-sdk/cohere';
import { createDeepSeek } from '@ai-sdk/deepseek';
import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { createMistral } from '@ai-sdk/mistral';
import { ollama } from 'ollama-ai-provider';
import { createOpenRouter } from '@openrouter/ai-sdk-provider';
import { createAmazonBedrock } from '@ai-sdk/amazon-bedrock';
import { generateText, streamText as streamText$1, convertToCoreMessages, createDataStream, generateId as generateId$1 } from 'ai';
import { defaultSchema } from 'rehype-sanitize';
import ignore from 'ignore';
import { ClientOnly } from 'remix-utils/client-only';
import * as Tooltip from '@radix-ui/react-tooltip';
import { toast } from 'react-toastify';
import Buffer from 'vite-plugin-node-polyfills/shims/buffer';
import '@webcontainer/api';
import git from 'isomorphic-git';
import http from 'isomorphic-git/http/web/index.js';
import { AnimatePresence, motion, cubicBezier } from 'framer-motion';

const tailwindReset = "/tailwind-compat.css";

const chalk = new Chalk({ level: 3 });
let currentLevel = "info";
const logger$7 = {
  trace: (...messages) => log("trace", undefined, messages),
  debug: (...messages) => log("debug", undefined, messages),
  info: (...messages) => log("info", undefined, messages),
  warn: (...messages) => log("warn", undefined, messages),
  error: (...messages) => log("error", undefined, messages),
  setLevel
};
function createScopedLogger(scope) {
  return {
    trace: (...messages) => log("trace", scope, messages),
    debug: (...messages) => log("debug", scope, messages),
    info: (...messages) => log("info", scope, messages),
    warn: (...messages) => log("warn", scope, messages),
    error: (...messages) => log("error", scope, messages),
    setLevel
  };
}
function setLevel(level) {
  if ((level === "trace" || level === "debug") && true) {
    return;
  }
  currentLevel = level;
}
function log(level, scope, messages) {
  const levelOrder = ["trace", "debug", "info", "warn", "error"];
  if (levelOrder.indexOf(level) < levelOrder.indexOf(currentLevel)) {
    return;
  }
  const allMessages = messages.reduce((acc, current) => {
    if (acc.endsWith("\n")) {
      return acc + current;
    }
    if (!acc) {
      return current;
    }
    return `${acc} ${current}`;
  }, "");
  const labelBackgroundColor = getColorForLevel(level);
  const labelTextColor = level === "warn" ? "#000000" : "#FFFFFF";
  const labelStyles = getLabelStyles(labelBackgroundColor, labelTextColor);
  const scopeStyles = getLabelStyles("#77828D", "white");
  const styles = [labelStyles];
  if (typeof scope === "string") {
    styles.push("", scopeStyles);
  }
  let labelText = formatText(` ${level.toUpperCase()} `, labelTextColor, labelBackgroundColor);
  if (scope) {
    labelText = `${labelText} ${formatText(` ${scope} `, "#FFFFFF", "77828D")}`;
  }
  if (typeof window !== "undefined") {
    console.log(`%c${level.toUpperCase()}${scope ? `%c %c${scope}` : ""}`, ...styles, allMessages);
  } else {
    console.log(`${labelText}`, allMessages);
  }
}
function formatText(text, color, bg) {
  return chalk.bgHex(bg)(chalk.hex(color)(text));
}
function getLabelStyles(color, textColor) {
  return `background-color: ${color}; color: white; border: 4px solid ${color}; color: ${textColor};`;
}
function getColorForLevel(level) {
  switch (level) {
    case "trace":
    case "debug": {
      return "#77828D";
    }
    case "info": {
      return "#1389FD";
    }
    case "warn": {
      return "#FFDB6C";
    }
    case "error": {
      return "#EE4744";
    }
    default: {
      return "#000000";
    }
  }
}

const logger$6 = createScopedLogger("LogStore");
const MAX_LOGS = 1e3;
class LogStore {
  _logs = map({});
  showLogs = atom(true);
  constructor() {
    this._loadLogs();
  }
  _loadLogs() {
    const savedLogs = Cookies.get("eventLogs");
    if (savedLogs) {
      try {
        const parsedLogs = JSON.parse(savedLogs);
        this._logs.set(parsedLogs);
      } catch (error) {
        logger$6.error("Failed to parse logs from cookies:", error);
      }
    }
  }
  _saveLogs() {
    const currentLogs = this._logs.get();
    Cookies.set("eventLogs", JSON.stringify(currentLogs));
  }
  _generateId() {
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }
  _trimLogs() {
    const currentLogs = Object.entries(this._logs.get());
    if (currentLogs.length > MAX_LOGS) {
      const sortedLogs = currentLogs.sort(
        ([, a], [, b]) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
      );
      const newLogs = Object.fromEntries(sortedLogs.slice(0, MAX_LOGS));
      this._logs.set(newLogs);
    }
  }
  addLog(message, level = "info", category = "system", details) {
    const id = this._generateId();
    const entry = {
      id,
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      level,
      message,
      details,
      category
    };
    this._logs.setKey(id, entry);
    this._trimLogs();
    this._saveLogs();
    return id;
  }
  // System events
  logSystem(message, details) {
    return this.addLog(message, "info", "system", details);
  }
  // Provider events
  logProvider(message, details) {
    return this.addLog(message, "info", "provider", details);
  }
  // User actions
  logUserAction(message, details) {
    return this.addLog(message, "info", "user", details);
  }
  // Error events
  logError(message, error, details) {
    const errorDetails = {
      ...details || {},
      error: error instanceof Error ? {
        message: error.message,
        stack: error.stack
      } : error
    };
    return this.addLog(message, "error", "error", errorDetails);
  }
  // Warning events
  logWarning(message, details) {
    return this.addLog(message, "warning", "system", details);
  }
  // Debug events
  logDebug(message, details) {
    return this.addLog(message, "debug", "system", details);
  }
  clearLogs() {
    this._logs.set({});
    this._saveLogs();
  }
  getLogs() {
    return Object.values(this._logs.get()).sort(
      (a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
    );
  }
  getFilteredLogs(level, category, searchQuery) {
    return this.getLogs().filter((log) => {
      const matchesLevel = !level || level === "debug" || log.level === level;
      const matchesCategory = !category || log.category === category;
      const matchesSearch = !searchQuery || log.message.toLowerCase().includes(searchQuery.toLowerCase()) || JSON.stringify(log.details).toLowerCase().includes(searchQuery.toLowerCase());
      return matchesLevel && matchesCategory && matchesSearch;
    });
  }
}
const logStore = new LogStore();

const DEFAULT_THEME = "light";
const themeStore = atom(initStore());
function initStore() {
  return DEFAULT_THEME;
}

function stripIndents(arg0, ...values) {
  if (typeof arg0 !== "string") {
    const processedString = arg0.reduce((acc, curr, i) => {
      acc += curr + (values[i] ?? "");
      return acc;
    }, "");
    return _stripIndents(processedString);
  }
  return _stripIndents(arg0);
}
function _stripIndents(value) {
  return value.split("\n").map((line) => line.trim()).join("\n").trimStart().replace(/[\r\n]$/, "");
}

const globalStyles = "/index.css";

const xtermStyles = "/xterm.css";

const links = () => [
  {
    rel: "icon",
    href: "/favicon.ico",
    type: "image/svg+xml"
  },
  { rel: "stylesheet", href: tailwindReset },
  { rel: "stylesheet", href: tailwindReset },
  { rel: "stylesheet", href: globalStyles },
  { rel: "stylesheet", href: xtermStyles },
  {
    rel: "preconnect",
    href: "https://fonts.googleapis.com"
  },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous"
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
  }
];
const inlineThemeCode = stripIndents`
  setTutorialKitTheme();

  function setTutorialKitTheme() {
    let theme = localStorage.getItem('bolt_theme');

    if (!theme) {
      theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    document.querySelector('html')?.setAttribute('data-theme', theme);
  }
`;
const Head = createHead(() => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx("meta", { charSet: "utf-8" }),
  /* @__PURE__ */ jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
  /* @__PURE__ */ jsx(Meta, {}),
  /* @__PURE__ */ jsx(Links, {}),
  /* @__PURE__ */ jsx("script", { dangerouslySetInnerHTML: { __html: inlineThemeCode } })
] }));
function Layout({ children }) {
  const theme = useStore(themeStore);
  useEffect(() => {
    document.querySelector("html")?.setAttribute("data-theme", theme);
  }, [theme]);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    children,
    /* @__PURE__ */ jsx(ScrollRestoration, {}),
    /* @__PURE__ */ jsx(Scripts, {})
  ] });
}
function App() {
  const theme = useStore(themeStore);
  useEffect(() => {
    logStore.logSystem("Application initialized", {
      theme,
      platform: navigator.platform,
      userAgent: navigator.userAgent,
      timestamp: (/* @__PURE__ */ new Date()).toISOString()
    });
  }, []);
  return /* @__PURE__ */ jsx(Layout, { children: /* @__PURE__ */ jsx(Outlet, {}) });
}

const route0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Head,
  Layout,
  default: App,
  links
}, Symbol.toStringTag, { value: 'Module' }));

async function handleRequest(request, responseStatusCode, responseHeaders, remixContext, _loadContext) {
  const readable = await renderToReadableStream(/* @__PURE__ */ jsx(RemixServer, { context: remixContext, url: request.url }), {
    signal: request.signal,
    onError(error) {
      console.error(error);
      responseStatusCode = 500;
    }
  });
  const body = new ReadableStream({
    start(controller) {
      const head = renderHeadToString({ request, remixContext, Head });
      controller.enqueue(
        new Uint8Array(
          new TextEncoder().encode(
            `<!DOCTYPE html><html lang="en" data-theme="${themeStore.value}"><head>${head}</head><body><div id="root" class="w-full h-full">`
          )
        )
      );
      const reader = readable.getReader();
      function read() {
        reader.read().then(({ done, value }) => {
          if (done) {
            controller.enqueue(new Uint8Array(new TextEncoder().encode("</div></body></html>")));
            controller.close();
            return;
          }
          controller.enqueue(value);
          read();
        }).catch((error) => {
          controller.error(error);
          readable.cancel();
        });
      }
      read();
    },
    cancel() {
      readable.cancel();
    }
  });
  if (isbot(request.headers.get("user-agent") || "")) {
    await readable.allReady;
  }
  responseHeaders.set("Content-Type", "text/html");
  responseHeaders.set("Cross-Origin-Embedder-Policy", "require-corp");
  responseHeaders.set("Cross-Origin-Opener-Policy", "same-origin");
  return new Response(body, {
    headers: responseHeaders,
    status: responseStatusCode
  });
}

const entryServer = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: handleRequest
}, Symbol.toStringTag, { value: 'Module' }));

const PREVIEW_CHANNEL = "preview-updates";
async function loader$6({ params }) {
  const previewId = params.id;
  if (!previewId) {
    throw new Response("Preview ID is required", { status: 400 });
  }
  return json({ previewId });
}
function WebContainerPreview() {
  const { previewId } = useLoaderData();
  const iframeRef = useRef(null);
  const broadcastChannelRef = useRef();
  const [previewUrl, setPreviewUrl] = useState("");
  const handleRefresh = useCallback(() => {
    if (iframeRef.current && previewUrl) {
      iframeRef.current.src = "";
      requestAnimationFrame(() => {
        if (iframeRef.current) {
          iframeRef.current.src = previewUrl;
        }
      });
    }
  }, [previewUrl]);
  const notifyPreviewReady = useCallback(() => {
    if (broadcastChannelRef.current && previewUrl) {
      broadcastChannelRef.current.postMessage({
        type: "preview-ready",
        previewId,
        url: previewUrl,
        timestamp: Date.now()
      });
    }
  }, [previewId, previewUrl]);
  useEffect(() => {
    broadcastChannelRef.current = new BroadcastChannel(PREVIEW_CHANNEL);
    broadcastChannelRef.current.onmessage = (event) => {
      if (event.data.previewId === previewId) {
        if (event.data.type === "refresh-preview" || event.data.type === "file-change") {
          handleRefresh();
        }
      }
    };
    const url = `https://${previewId}.local-credentialless.webcontainer-api.io`;
    setPreviewUrl(url);
    if (iframeRef.current) {
      iframeRef.current.src = url;
    }
    notifyPreviewReady();
    return () => {
      broadcastChannelRef.current?.close();
    };
  }, [previewId, handleRefresh, notifyPreviewReady]);
  return /* @__PURE__ */ jsx("div", { className: "w-full h-full", children: /* @__PURE__ */ jsx(
    "iframe",
    {
      ref: iframeRef,
      title: "WebContainer Preview",
      className: "w-full h-full border-none",
      sandbox: "allow-scripts allow-forms allow-popups allow-modals allow-storage-access-by-user-activation allow-same-origin",
      allow: "cross-origin-isolated",
      loading: "eager",
      onLoad: notifyPreviewReady
    }
  ) });
}

const route1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: WebContainerPreview,
  loader: loader$6
}, Symbol.toStringTag, { value: 'Module' }));

class BaseProvider {
  cachedDynamicModels;
  getApiKeyLink;
  labelForGetApiKey;
  icon;
  getProviderBaseUrlAndKey(options) {
    const { apiKeys, providerSettings, serverEnv, defaultBaseUrlKey, defaultApiTokenKey } = options;
    let settingsBaseUrl = providerSettings?.baseUrl;
    const manager = LLMManager.getInstance();
    if (settingsBaseUrl && settingsBaseUrl.length == 0) {
      settingsBaseUrl = undefined;
    }
    const baseUrlKey = this.config.baseUrlKey || defaultBaseUrlKey;
    let baseUrl = settingsBaseUrl || serverEnv?.[baseUrlKey] || process?.env?.[baseUrlKey] || manager.env?.[baseUrlKey] || this.config.baseUrl;
    if (baseUrl && baseUrl.endsWith("/")) {
      baseUrl = baseUrl.slice(0, -1);
    }
    const apiTokenKey = this.config.apiTokenKey || defaultApiTokenKey;
    const apiKey = apiKeys?.[this.name] || serverEnv?.[apiTokenKey] || process?.env?.[apiTokenKey] || manager.env?.[apiTokenKey];
    return {
      baseUrl,
      apiKey
    };
  }
  getModelsFromCache(options) {
    if (!this.cachedDynamicModels) {
      return null;
    }
    const cacheKey = this.cachedDynamicModels.cacheId;
    const generatedCacheKey = this.getDynamicModelsCacheKey(options);
    if (cacheKey !== generatedCacheKey) {
      this.cachedDynamicModels = undefined;
      return null;
    }
    return this.cachedDynamicModels.models;
  }
  getDynamicModelsCacheKey(options) {
    return JSON.stringify({
      apiKeys: options.apiKeys?.[this.name],
      providerSettings: options.providerSettings?.[this.name],
      serverEnv: options.serverEnv
    });
  }
  storeDynamicModels(options, models) {
    const cacheId = this.getDynamicModelsCacheKey(options);
    this.cachedDynamicModels = {
      cacheId,
      models
    };
  }
}
function getOpenAILikeModel(baseURL, apiKey, model) {
  const openai = createOpenAI({
    baseURL,
    apiKey
  });
  return openai(model);
}

class AnthropicProvider extends BaseProvider {
  name = "Anthropic";
  getApiKeyLink = "https://console.anthropic.com/settings/keys";
  config = {
    apiTokenKey: "ANTHROPIC_API_KEY"
  };
  staticModels = [
    {
      name: "claude-3-5-sonnet-latest",
      label: "Claude 3.5 Sonnet (new)",
      provider: "Anthropic",
      maxTokenAllowed: 8e3
    },
    {
      name: "claude-3-5-sonnet-20240620",
      label: "Claude 3.5 Sonnet (old)",
      provider: "Anthropic",
      maxTokenAllowed: 8e3
    },
    {
      name: "claude-3-5-haiku-latest",
      label: "Claude 3.5 Haiku (new)",
      provider: "Anthropic",
      maxTokenAllowed: 8e3
    },
    { name: "claude-3-opus-latest", label: "Claude 3 Opus", provider: "Anthropic", maxTokenAllowed: 8e3 },
    { name: "claude-3-sonnet-20240229", label: "Claude 3 Sonnet", provider: "Anthropic", maxTokenAllowed: 8e3 },
    { name: "claude-3-haiku-20240307", label: "Claude 3 Haiku", provider: "Anthropic", maxTokenAllowed: 8e3 }
  ];
  getModelInstance = (options) => {
    const { apiKeys, providerSettings, serverEnv, model } = options;
    const { apiKey } = this.getProviderBaseUrlAndKey({
      apiKeys,
      providerSettings,
      serverEnv,
      defaultBaseUrlKey: "",
      defaultApiTokenKey: "ANTHROPIC_API_KEY"
    });
    const anthropic = createAnthropic({
      apiKey
    });
    return anthropic(model);
  };
}

class CohereProvider extends BaseProvider {
  name = "Cohere";
  getApiKeyLink = "https://dashboard.cohere.com/api-keys";
  config = {
    apiTokenKey: "COHERE_API_KEY"
  };
  staticModels = [
    { name: "command-r-plus-08-2024", label: "Command R plus Latest", provider: "Cohere", maxTokenAllowed: 4096 },
    { name: "command-r-08-2024", label: "Command R Latest", provider: "Cohere", maxTokenAllowed: 4096 },
    { name: "command-r-plus", label: "Command R plus", provider: "Cohere", maxTokenAllowed: 4096 },
    { name: "command-r", label: "Command R", provider: "Cohere", maxTokenAllowed: 4096 },
    { name: "command", label: "Command", provider: "Cohere", maxTokenAllowed: 4096 },
    { name: "command-nightly", label: "Command Nightly", provider: "Cohere", maxTokenAllowed: 4096 },
    { name: "command-light", label: "Command Light", provider: "Cohere", maxTokenAllowed: 4096 },
    { name: "command-light-nightly", label: "Command Light Nightly", provider: "Cohere", maxTokenAllowed: 4096 },
    { name: "c4ai-aya-expanse-8b", label: "c4AI Aya Expanse 8b", provider: "Cohere", maxTokenAllowed: 4096 },
    { name: "c4ai-aya-expanse-32b", label: "c4AI Aya Expanse 32b", provider: "Cohere", maxTokenAllowed: 4096 }
  ];
  getModelInstance(options) {
    const { model, serverEnv, apiKeys, providerSettings } = options;
    const { apiKey } = this.getProviderBaseUrlAndKey({
      apiKeys,
      providerSettings: providerSettings?.[this.name],
      serverEnv,
      defaultBaseUrlKey: "",
      defaultApiTokenKey: "COHERE_API_KEY"
    });
    if (!apiKey) {
      throw new Error(`Missing API key for ${this.name} provider`);
    }
    const cohere = createCohere({
      apiKey
    });
    return cohere(model);
  }
}

class DeepseekProvider extends BaseProvider {
  name = "Deepseek";
  getApiKeyLink = "https://platform.deepseek.com/apiKeys";
  config = {
    apiTokenKey: "DEEPSEEK_API_KEY"
  };
  staticModels = [
    { name: "deepseek-coder", label: "Deepseek-Coder", provider: "Deepseek", maxTokenAllowed: 8e3 },
    { name: "deepseek-chat", label: "Deepseek-Chat", provider: "Deepseek", maxTokenAllowed: 8e3 },
    { name: "deepseek-reasoner", label: "Deepseek-Reasoner", provider: "Deepseek", maxTokenAllowed: 8e3 }
  ];
  getModelInstance(options) {
    const { model, serverEnv, apiKeys, providerSettings } = options;
    const { apiKey } = this.getProviderBaseUrlAndKey({
      apiKeys,
      providerSettings: providerSettings?.[this.name],
      serverEnv,
      defaultBaseUrlKey: "",
      defaultApiTokenKey: "DEEPSEEK_API_KEY"
    });
    if (!apiKey) {
      throw new Error(`Missing API key for ${this.name} provider`);
    }
    const deepseek = createDeepSeek({
      apiKey
    });
    return deepseek(model, {
      // simulateStreaming: true,
    });
  }
}

class GoogleProvider extends BaseProvider {
  name = "Google";
  getApiKeyLink = "https://aistudio.google.com/app/apikey";
  config = {
    apiTokenKey: "GOOGLE_GENERATIVE_AI_API_KEY"
  };
  staticModels = [
    { name: "gemini-1.5-flash-latest", label: "Gemini 1.5 Flash", provider: "Google", maxTokenAllowed: 8192 },
    {
      name: "gemini-2.0-flash-thinking-exp-01-21",
      label: "Gemini 2.0 Flash-thinking-exp-01-21",
      provider: "Google",
      maxTokenAllowed: 65536
    },
    { name: "gemini-2.0-flash-exp", label: "Gemini 2.0 Flash", provider: "Google", maxTokenAllowed: 8192 },
    { name: "gemini-1.5-flash-002", label: "Gemini 1.5 Flash-002", provider: "Google", maxTokenAllowed: 8192 },
    { name: "gemini-1.5-flash-8b", label: "Gemini 1.5 Flash-8b", provider: "Google", maxTokenAllowed: 8192 },
    { name: "gemini-1.5-pro-latest", label: "Gemini 1.5 Pro", provider: "Google", maxTokenAllowed: 8192 },
    { name: "gemini-1.5-pro-002", label: "Gemini 1.5 Pro-002", provider: "Google", maxTokenAllowed: 8192 },
    { name: "gemini-exp-1206", label: "Gemini exp-1206", provider: "Google", maxTokenAllowed: 8192 }
  ];
  async getDynamicModels(apiKeys, settings, serverEnv) {
    const { apiKey } = this.getProviderBaseUrlAndKey({
      apiKeys,
      providerSettings: settings,
      serverEnv,
      defaultBaseUrlKey: "",
      defaultApiTokenKey: "GOOGLE_GENERATIVE_AI_API_KEY"
    });
    if (!apiKey) {
      throw `Missing Api Key configuration for ${this.name} provider`;
    }
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`, {
      headers: {
        ["Content-Type"]: "application/json"
      }
    });
    const res = await response.json();
    const data = res.models.filter((model) => model.outputTokenLimit > 8e3);
    return data.map((m) => ({
      name: m.name.replace("models/", ""),
      label: `${m.displayName} - context ${Math.floor((m.inputTokenLimit + m.outputTokenLimit) / 1e3) + "k"}`,
      provider: this.name,
      maxTokenAllowed: m.inputTokenLimit + m.outputTokenLimit || 8e3
    }));
  }
  getModelInstance(options) {
    const { model, serverEnv, apiKeys, providerSettings } = options;
    const { apiKey } = this.getProviderBaseUrlAndKey({
      apiKeys,
      providerSettings: providerSettings?.[this.name],
      serverEnv,
      defaultBaseUrlKey: "",
      defaultApiTokenKey: "GOOGLE_GENERATIVE_AI_API_KEY"
    });
    if (!apiKey) {
      throw new Error(`Missing API key for ${this.name} provider`);
    }
    const google = createGoogleGenerativeAI({
      apiKey
    });
    return google(model);
  }
}

class GroqProvider extends BaseProvider {
  name = "Groq";
  getApiKeyLink = "https://console.groq.com/keys";
  config = {
    apiTokenKey: "GROQ_API_KEY"
  };
  staticModels = [
    { name: "llama-3.1-8b-instant", label: "Llama 3.1 8b (Groq)", provider: "Groq", maxTokenAllowed: 8e3 },
    { name: "llama-3.2-11b-vision-preview", label: "Llama 3.2 11b (Groq)", provider: "Groq", maxTokenAllowed: 8e3 },
    { name: "llama-3.2-90b-vision-preview", label: "Llama 3.2 90b (Groq)", provider: "Groq", maxTokenAllowed: 8e3 },
    { name: "llama-3.2-3b-preview", label: "Llama 3.2 3b (Groq)", provider: "Groq", maxTokenAllowed: 8e3 },
    { name: "llama-3.2-1b-preview", label: "Llama 3.2 1b (Groq)", provider: "Groq", maxTokenAllowed: 8e3 },
    { name: "llama-3.3-70b-versatile", label: "Llama 3.3 70b (Groq)", provider: "Groq", maxTokenAllowed: 8e3 },
    {
      name: "deepseek-r1-distill-llama-70b",
      label: "Deepseek R1 Distill Llama 70b (Groq)",
      provider: "Groq",
      maxTokenAllowed: 131072
    }
  ];
  async getDynamicModels(apiKeys, settings, serverEnv) {
    const { apiKey } = this.getProviderBaseUrlAndKey({
      apiKeys,
      providerSettings: settings,
      serverEnv,
      defaultBaseUrlKey: "",
      defaultApiTokenKey: "GROQ_API_KEY"
    });
    if (!apiKey) {
      throw `Missing Api Key configuration for ${this.name} provider`;
    }
    const response = await fetch(`https://api.groq.com/openai/v1/models`, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    });
    const res = await response.json();
    const data = res.data.filter(
      (model) => model.object === "model" && model.active && model.context_window > 8e3
    );
    return data.map((m) => ({
      name: m.id,
      label: `${m.id} - context ${m.context_window ? Math.floor(m.context_window / 1e3) + "k" : "N/A"} [ by ${m.owned_by}]`,
      provider: this.name,
      maxTokenAllowed: m.context_window || 8e3
    }));
  }
  getModelInstance(options) {
    const { model, serverEnv, apiKeys, providerSettings } = options;
    const { apiKey } = this.getProviderBaseUrlAndKey({
      apiKeys,
      providerSettings: providerSettings?.[this.name],
      serverEnv,
      defaultBaseUrlKey: "",
      defaultApiTokenKey: "GROQ_API_KEY"
    });
    if (!apiKey) {
      throw new Error(`Missing API key for ${this.name} provider`);
    }
    const openai = createOpenAI({
      baseURL: "https://api.groq.com/openai/v1",
      apiKey
    });
    return openai(model);
  }
}

class HuggingFaceProvider extends BaseProvider {
  name = "HuggingFace";
  getApiKeyLink = "https://huggingface.co/settings/tokens";
  config = {
    apiTokenKey: "HuggingFace_API_KEY"
  };
  staticModels = [
    {
      name: "Qwen/Qwen2.5-Coder-32B-Instruct",
      label: "Qwen2.5-Coder-32B-Instruct (HuggingFace)",
      provider: "HuggingFace",
      maxTokenAllowed: 8e3
    },
    {
      name: "01-ai/Yi-1.5-34B-Chat",
      label: "Yi-1.5-34B-Chat (HuggingFace)",
      provider: "HuggingFace",
      maxTokenAllowed: 8e3
    },
    {
      name: "codellama/CodeLlama-34b-Instruct-hf",
      label: "CodeLlama-34b-Instruct (HuggingFace)",
      provider: "HuggingFace",
      maxTokenAllowed: 8e3
    },
    {
      name: "NousResearch/Hermes-3-Llama-3.1-8B",
      label: "Hermes-3-Llama-3.1-8B (HuggingFace)",
      provider: "HuggingFace",
      maxTokenAllowed: 8e3
    },
    {
      name: "Qwen/Qwen2.5-Coder-32B-Instruct",
      label: "Qwen2.5-Coder-32B-Instruct (HuggingFace)",
      provider: "HuggingFace",
      maxTokenAllowed: 8e3
    },
    {
      name: "Qwen/Qwen2.5-72B-Instruct",
      label: "Qwen2.5-72B-Instruct (HuggingFace)",
      provider: "HuggingFace",
      maxTokenAllowed: 8e3
    },
    {
      name: "meta-llama/Llama-3.1-70B-Instruct",
      label: "Llama-3.1-70B-Instruct (HuggingFace)",
      provider: "HuggingFace",
      maxTokenAllowed: 8e3
    },
    {
      name: "meta-llama/Llama-3.1-405B",
      label: "Llama-3.1-405B (HuggingFace)",
      provider: "HuggingFace",
      maxTokenAllowed: 8e3
    },
    {
      name: "01-ai/Yi-1.5-34B-Chat",
      label: "Yi-1.5-34B-Chat (HuggingFace)",
      provider: "HuggingFace",
      maxTokenAllowed: 8e3
    },
    {
      name: "codellama/CodeLlama-34b-Instruct-hf",
      label: "CodeLlama-34b-Instruct (HuggingFace)",
      provider: "HuggingFace",
      maxTokenAllowed: 8e3
    },
    {
      name: "NousResearch/Hermes-3-Llama-3.1-8B",
      label: "Hermes-3-Llama-3.1-8B (HuggingFace)",
      provider: "HuggingFace",
      maxTokenAllowed: 8e3
    }
  ];
  getModelInstance(options) {
    const { model, serverEnv, apiKeys, providerSettings } = options;
    const { apiKey } = this.getProviderBaseUrlAndKey({
      apiKeys,
      providerSettings: providerSettings?.[this.name],
      serverEnv,
      defaultBaseUrlKey: "",
      defaultApiTokenKey: "HuggingFace_API_KEY"
    });
    if (!apiKey) {
      throw new Error(`Missing API key for ${this.name} provider`);
    }
    const openai = createOpenAI({
      baseURL: "https://api-inference.huggingface.co/v1/",
      apiKey
    });
    return openai(model);
  }
}

class LMStudioProvider extends BaseProvider {
  name = "LMStudio";
  getApiKeyLink = "https://lmstudio.ai/";
  labelForGetApiKey = "Get LMStudio";
  icon = "i-ph:cloud-arrow-down";
  config = {
    baseUrlKey: "LMSTUDIO_API_BASE_URL",
    baseUrl: "http://localhost:1234/"
  };
  staticModels = [];
  async getDynamicModels(apiKeys, settings, serverEnv = {}) {
    let { baseUrl } = this.getProviderBaseUrlAndKey({
      apiKeys,
      providerSettings: settings,
      serverEnv,
      defaultBaseUrlKey: "LMSTUDIO_API_BASE_URL",
      defaultApiTokenKey: ""
    });
    if (!baseUrl) {
      throw new Error("No baseUrl found for LMStudio provider");
    }
    if (typeof window === "undefined") {
      const isDocker = process?.env?.RUNNING_IN_DOCKER === "true" || serverEnv?.RUNNING_IN_DOCKER === "true";
      baseUrl = isDocker ? baseUrl.replace("localhost", "host.docker.internal") : baseUrl;
      baseUrl = isDocker ? baseUrl.replace("127.0.0.1", "host.docker.internal") : baseUrl;
    }
    const response = await fetch(`${baseUrl}/v1/models`);
    const data = await response.json();
    return data.data.map((model) => ({
      name: model.id,
      label: model.id,
      provider: this.name,
      maxTokenAllowed: 8e3
    }));
  }
  getModelInstance = (options) => {
    const { apiKeys, providerSettings, serverEnv, model } = options;
    let { baseUrl } = this.getProviderBaseUrlAndKey({
      apiKeys,
      providerSettings: providerSettings?.[this.name],
      serverEnv,
      defaultBaseUrlKey: "LMSTUDIO_API_BASE_URL",
      defaultApiTokenKey: ""
    });
    if (!baseUrl) {
      throw new Error("No baseUrl found for LMStudio provider");
    }
    const isDocker = process.env.RUNNING_IN_DOCKER === "true" || serverEnv?.RUNNING_IN_DOCKER === "true";
    if (typeof window === "undefined") {
      baseUrl = isDocker ? baseUrl.replace("localhost", "host.docker.internal") : baseUrl;
      baseUrl = isDocker ? baseUrl.replace("127.0.0.1", "host.docker.internal") : baseUrl;
    }
    logger$7.debug("LMStudio Base Url used: ", baseUrl);
    const lmstudio = createOpenAI({
      baseURL: `${baseUrl}/v1`,
      apiKey: ""
    });
    return lmstudio(model);
  };
}

class MistralProvider extends BaseProvider {
  name = "Mistral";
  getApiKeyLink = "https://console.mistral.ai/api-keys/";
  config = {
    apiTokenKey: "MISTRAL_API_KEY"
  };
  staticModels = [
    { name: "open-mistral-7b", label: "Mistral 7B", provider: "Mistral", maxTokenAllowed: 8e3 },
    { name: "open-mixtral-8x7b", label: "Mistral 8x7B", provider: "Mistral", maxTokenAllowed: 8e3 },
    { name: "open-mixtral-8x22b", label: "Mistral 8x22B", provider: "Mistral", maxTokenAllowed: 8e3 },
    { name: "open-codestral-mamba", label: "Codestral Mamba", provider: "Mistral", maxTokenAllowed: 8e3 },
    { name: "open-mistral-nemo", label: "Mistral Nemo", provider: "Mistral", maxTokenAllowed: 8e3 },
    { name: "ministral-8b-latest", label: "Mistral 8B", provider: "Mistral", maxTokenAllowed: 8e3 },
    { name: "mistral-small-latest", label: "Mistral Small", provider: "Mistral", maxTokenAllowed: 8e3 },
    { name: "codestral-latest", label: "Codestral", provider: "Mistral", maxTokenAllowed: 8e3 },
    { name: "mistral-large-latest", label: "Mistral Large Latest", provider: "Mistral", maxTokenAllowed: 8e3 }
  ];
  getModelInstance(options) {
    const { model, serverEnv, apiKeys, providerSettings } = options;
    const { apiKey } = this.getProviderBaseUrlAndKey({
      apiKeys,
      providerSettings: providerSettings?.[this.name],
      serverEnv,
      defaultBaseUrlKey: "",
      defaultApiTokenKey: "MISTRAL_API_KEY"
    });
    if (!apiKey) {
      throw new Error(`Missing API key for ${this.name} provider`);
    }
    const mistral = createMistral({
      apiKey
    });
    return mistral(model);
  }
}

const DEFAULT_NUM_CTX = process?.env?.DEFAULT_NUM_CTX ? parseInt(process.env.DEFAULT_NUM_CTX, 10) : 32768;
class OllamaProvider extends BaseProvider {
  name = "Ollama";
  getApiKeyLink = "https://ollama.com/download";
  labelForGetApiKey = "Download Ollama";
  icon = "i-ph:cloud-arrow-down";
  config = {
    baseUrlKey: "OLLAMA_API_BASE_URL"
  };
  staticModels = [];
  async getDynamicModels(apiKeys, settings, serverEnv = {}) {
    let { baseUrl } = this.getProviderBaseUrlAndKey({
      apiKeys,
      providerSettings: settings,
      serverEnv,
      defaultBaseUrlKey: "OLLAMA_API_BASE_URL",
      defaultApiTokenKey: ""
    });
    if (!baseUrl) {
      throw new Error("No baseUrl found for OLLAMA provider");
    }
    if (typeof window === "undefined") {
      const isDocker = process?.env?.RUNNING_IN_DOCKER === "true" || serverEnv?.RUNNING_IN_DOCKER === "true";
      baseUrl = isDocker ? baseUrl.replace("localhost", "host.docker.internal") : baseUrl;
      baseUrl = isDocker ? baseUrl.replace("127.0.0.1", "host.docker.internal") : baseUrl;
    }
    const response = await fetch(`${baseUrl}/api/tags`);
    const data = await response.json();
    return data.models.map((model) => ({
      name: model.name,
      label: `${model.name} (${model.details.parameter_size})`,
      provider: this.name,
      maxTokenAllowed: 8e3
    }));
  }
  getModelInstance = (options) => {
    const { apiKeys, providerSettings, serverEnv, model } = options;
    let { baseUrl } = this.getProviderBaseUrlAndKey({
      apiKeys,
      providerSettings: providerSettings?.[this.name],
      serverEnv,
      defaultBaseUrlKey: "OLLAMA_API_BASE_URL",
      defaultApiTokenKey: ""
    });
    if (!baseUrl) {
      throw new Error("No baseUrl found for OLLAMA provider");
    }
    const isDocker = process?.env?.RUNNING_IN_DOCKER === "true" || serverEnv?.RUNNING_IN_DOCKER === "true";
    baseUrl = isDocker ? baseUrl.replace("localhost", "host.docker.internal") : baseUrl;
    baseUrl = isDocker ? baseUrl.replace("127.0.0.1", "host.docker.internal") : baseUrl;
    logger$7.debug("Ollama Base Url used: ", baseUrl);
    const ollamaInstance = ollama(model, {
      numCtx: DEFAULT_NUM_CTX
    });
    ollamaInstance.config.baseURL = `${baseUrl}/api`;
    return ollamaInstance;
  };
}

class OpenRouterProvider extends BaseProvider {
  name = "OpenRouter";
  getApiKeyLink = "https://openrouter.ai/settings/keys";
  config = {
    apiTokenKey: "OPEN_ROUTER_API_KEY"
  };
  staticModels = [
    {
      name: "anthropic/claude-3.5-sonnet",
      label: "Anthropic: Claude 3.5 Sonnet (OpenRouter)",
      provider: "OpenRouter",
      maxTokenAllowed: 8e3
    },
    {
      name: "anthropic/claude-3-haiku",
      label: "Anthropic: Claude 3 Haiku (OpenRouter)",
      provider: "OpenRouter",
      maxTokenAllowed: 8e3
    },
    {
      name: "deepseek/deepseek-coder",
      label: "Deepseek-Coder V2 236B (OpenRouter)",
      provider: "OpenRouter",
      maxTokenAllowed: 8e3
    },
    {
      name: "google/gemini-flash-1.5",
      label: "Google Gemini Flash 1.5 (OpenRouter)",
      provider: "OpenRouter",
      maxTokenAllowed: 8e3
    },
    {
      name: "google/gemini-pro-1.5",
      label: "Google Gemini Pro 1.5 (OpenRouter)",
      provider: "OpenRouter",
      maxTokenAllowed: 8e3
    },
    { name: "x-ai/grok-beta", label: "xAI Grok Beta (OpenRouter)", provider: "OpenRouter", maxTokenAllowed: 8e3 },
    {
      name: "mistralai/mistral-nemo",
      label: "OpenRouter Mistral Nemo (OpenRouter)",
      provider: "OpenRouter",
      maxTokenAllowed: 8e3
    },
    {
      name: "qwen/qwen-110b-chat",
      label: "OpenRouter Qwen 110b Chat (OpenRouter)",
      provider: "OpenRouter",
      maxTokenAllowed: 8e3
    },
    { name: "cohere/command", label: "Cohere Command (OpenRouter)", provider: "OpenRouter", maxTokenAllowed: 4096 }
  ];
  async getDynamicModels(_apiKeys, _settings, _serverEnv = {}) {
    try {
      const response = await fetch("https://openrouter.ai/api/v1/models", {
        headers: {
          "Content-Type": "application/json"
        }
      });
      const data = await response.json();
      return data.data.sort((a, b) => a.name.localeCompare(b.name)).map((m) => ({
        name: m.id,
        label: `${m.name} - in:$${(m.pricing.prompt * 1e6).toFixed(2)} out:$${(m.pricing.completion * 1e6).toFixed(2)} - context ${Math.floor(m.context_length / 1e3)}k`,
        provider: this.name,
        maxTokenAllowed: 8e3
      }));
    } catch (error) {
      console.error("Error getting OpenRouter models:", error);
      return [];
    }
  }
  getModelInstance(options) {
    const { model, serverEnv, apiKeys, providerSettings } = options;
    const { apiKey } = this.getProviderBaseUrlAndKey({
      apiKeys,
      providerSettings: providerSettings?.[this.name],
      serverEnv,
      defaultBaseUrlKey: "",
      defaultApiTokenKey: "OPEN_ROUTER_API_KEY"
    });
    if (!apiKey) {
      throw new Error(`Missing API key for ${this.name} provider`);
    }
    const openRouter = createOpenRouter({
      apiKey
    });
    const instance = openRouter.chat(model);
    return instance;
  }
}

class OpenAILikeProvider extends BaseProvider {
  name = "OpenAILike";
  getApiKeyLink = undefined;
  config = {
    baseUrlKey: "OPENAI_LIKE_API_BASE_URL",
    apiTokenKey: "OPENAI_LIKE_API_KEY"
  };
  staticModels = [];
  async getDynamicModels(apiKeys, settings, serverEnv = {}) {
    const { baseUrl, apiKey } = this.getProviderBaseUrlAndKey({
      apiKeys,
      providerSettings: settings,
      serverEnv,
      defaultBaseUrlKey: "OPENAI_LIKE_API_BASE_URL",
      defaultApiTokenKey: "OPENAI_LIKE_API_KEY"
    });
    if (!baseUrl || !apiKey) {
      return [];
    }
    const response = await fetch(`${baseUrl}/models`, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    });
    const res = await response.json();
    return res.data.map((model) => ({
      name: model.id,
      label: model.id,
      provider: this.name,
      maxTokenAllowed: 8e3
    }));
  }
  getModelInstance(options) {
    const { model, serverEnv, apiKeys, providerSettings } = options;
    const { baseUrl, apiKey } = this.getProviderBaseUrlAndKey({
      apiKeys,
      providerSettings: providerSettings?.[this.name],
      serverEnv,
      defaultBaseUrlKey: "OPENAI_LIKE_API_BASE_URL",
      defaultApiTokenKey: "OPENAI_LIKE_API_KEY"
    });
    if (!baseUrl || !apiKey) {
      throw new Error(`Missing configuration for ${this.name} provider`);
    }
    return getOpenAILikeModel(baseUrl, apiKey, model);
  }
}

class OpenAIProvider extends BaseProvider {
  name = "OpenAI";
  getApiKeyLink = "https://platform.openai.com/api-keys";
  config = {
    apiTokenKey: "OPENAI_API_KEY"
  };
  staticModels = [
    { name: "gpt-4o", label: "GPT-4o", provider: "OpenAI", maxTokenAllowed: 8e3 },
    { name: "gpt-4o-mini", label: "GPT-4o Mini", provider: "OpenAI", maxTokenAllowed: 8e3 },
    { name: "gpt-4-turbo", label: "GPT-4 Turbo", provider: "OpenAI", maxTokenAllowed: 8e3 },
    { name: "gpt-4", label: "GPT-4", provider: "OpenAI", maxTokenAllowed: 8e3 },
    { name: "gpt-3.5-turbo", label: "GPT-3.5 Turbo", provider: "OpenAI", maxTokenAllowed: 8e3 }
  ];
  async getDynamicModels(apiKeys, settings, serverEnv) {
    const { apiKey } = this.getProviderBaseUrlAndKey({
      apiKeys,
      providerSettings: settings,
      serverEnv,
      defaultBaseUrlKey: "",
      defaultApiTokenKey: "OPENAI_API_KEY"
    });
    if (!apiKey) {
      throw `Missing Api Key configuration for ${this.name} provider`;
    }
    const response = await fetch(`https://api.openai.com/v1/models`, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    });
    const res = await response.json();
    const staticModelIds = this.staticModels.map((m) => m.name);
    const data = res.data.filter(
      (model) => model.object === "model" && (model.id.startsWith("gpt-") || model.id.startsWith("o") || model.id.startsWith("chatgpt-")) && !staticModelIds.includes(model.id)
    );
    return data.map((m) => ({
      name: m.id,
      label: `${m.id}`,
      provider: this.name,
      maxTokenAllowed: m.context_window || 32e3
    }));
  }
  getModelInstance(options) {
    const { model, serverEnv, apiKeys, providerSettings } = options;
    const { apiKey } = this.getProviderBaseUrlAndKey({
      apiKeys,
      providerSettings: providerSettings?.[this.name],
      serverEnv,
      defaultBaseUrlKey: "",
      defaultApiTokenKey: "OPENAI_API_KEY"
    });
    if (!apiKey) {
      throw new Error(`Missing API key for ${this.name} provider`);
    }
    const openai = createOpenAI({
      apiKey
    });
    return openai(model);
  }
}

class PerplexityProvider extends BaseProvider {
  name = "Perplexity";
  getApiKeyLink = "https://www.perplexity.ai/settings/api";
  config = {
    apiTokenKey: "PERPLEXITY_API_KEY"
  };
  staticModels = [
    {
      name: "llama-3.1-sonar-small-128k-online",
      label: "Sonar Small Online",
      provider: "Perplexity",
      maxTokenAllowed: 8192
    },
    {
      name: "llama-3.1-sonar-large-128k-online",
      label: "Sonar Large Online",
      provider: "Perplexity",
      maxTokenAllowed: 8192
    },
    {
      name: "llama-3.1-sonar-huge-128k-online",
      label: "Sonar Huge Online",
      provider: "Perplexity",
      maxTokenAllowed: 8192
    }
  ];
  getModelInstance(options) {
    const { model, serverEnv, apiKeys, providerSettings } = options;
    const { apiKey } = this.getProviderBaseUrlAndKey({
      apiKeys,
      providerSettings: providerSettings?.[this.name],
      serverEnv,
      defaultBaseUrlKey: "",
      defaultApiTokenKey: "PERPLEXITY_API_KEY"
    });
    if (!apiKey) {
      throw new Error(`Missing API key for ${this.name} provider`);
    }
    const perplexity = createOpenAI({
      baseURL: "https://api.perplexity.ai/",
      apiKey
    });
    return perplexity(model);
  }
}

class TogetherProvider extends BaseProvider {
  name = "Together";
  getApiKeyLink = "https://api.together.xyz/settings/api-keys";
  config = {
    baseUrlKey: "TOGETHER_API_BASE_URL",
    apiTokenKey: "TOGETHER_API_KEY"
  };
  staticModels = [
    {
      name: "Qwen/Qwen2.5-Coder-32B-Instruct",
      label: "Qwen/Qwen2.5-Coder-32B-Instruct",
      provider: "Together",
      maxTokenAllowed: 8e3
    },
    {
      name: "meta-llama/Llama-3.2-90B-Vision-Instruct-Turbo",
      label: "meta-llama/Llama-3.2-90B-Vision-Instruct-Turbo",
      provider: "Together",
      maxTokenAllowed: 8e3
    },
    {
      name: "mistralai/Mixtral-8x7B-Instruct-v0.1",
      label: "Mixtral 8x7B Instruct",
      provider: "Together",
      maxTokenAllowed: 8192
    }
  ];
  async getDynamicModels(apiKeys, settings, serverEnv = {}) {
    const { baseUrl: fetchBaseUrl, apiKey } = this.getProviderBaseUrlAndKey({
      apiKeys,
      providerSettings: settings,
      serverEnv,
      defaultBaseUrlKey: "TOGETHER_API_BASE_URL",
      defaultApiTokenKey: "TOGETHER_API_KEY"
    });
    const baseUrl = fetchBaseUrl || "https://api.together.xyz/v1";
    if (!apiKey) {
      return [];
    }
    const response = await fetch(`${baseUrl}/models`, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    });
    const res = await response.json();
    const data = (res || []).filter((model) => model.type === "chat");
    return data.map((m) => ({
      name: m.id,
      label: `${m.display_name} - in:$${m.pricing.input.toFixed(2)} out:$${m.pricing.output.toFixed(2)} - context ${Math.floor(m.context_length / 1e3)}k`,
      provider: this.name,
      maxTokenAllowed: 8e3
    }));
  }
  getModelInstance(options) {
    const { model, serverEnv, apiKeys, providerSettings } = options;
    const { baseUrl, apiKey } = this.getProviderBaseUrlAndKey({
      apiKeys,
      providerSettings: providerSettings?.[this.name],
      serverEnv,
      defaultBaseUrlKey: "TOGETHER_API_BASE_URL",
      defaultApiTokenKey: "TOGETHER_API_KEY"
    });
    if (!baseUrl || !apiKey) {
      throw new Error(`Missing configuration for ${this.name} provider`);
    }
    return getOpenAILikeModel(baseUrl, apiKey, model);
  }
}

class XAIProvider extends BaseProvider {
  name = "xAI";
  getApiKeyLink = "https://docs.x.ai/docs/quickstart#creating-an-api-key";
  config = {
    apiTokenKey: "XAI_API_KEY"
  };
  staticModels = [
    { name: "grok-beta", label: "xAI Grok Beta", provider: "xAI", maxTokenAllowed: 8e3 },
    { name: "grok-2-1212", label: "xAI Grok2 1212", provider: "xAI", maxTokenAllowed: 8e3 }
  ];
  getModelInstance(options) {
    const { model, serverEnv, apiKeys, providerSettings } = options;
    const { apiKey } = this.getProviderBaseUrlAndKey({
      apiKeys,
      providerSettings: providerSettings?.[this.name],
      serverEnv,
      defaultBaseUrlKey: "",
      defaultApiTokenKey: "XAI_API_KEY"
    });
    if (!apiKey) {
      throw new Error(`Missing API key for ${this.name} provider`);
    }
    const openai = createOpenAI({
      baseURL: "https://api.x.ai/v1",
      apiKey
    });
    return openai(model);
  }
}

class HyperbolicProvider extends BaseProvider {
  name = "Hyperbolic";
  getApiKeyLink = "https://app.hyperbolic.xyz/settings";
  config = {
    apiTokenKey: "HYPERBOLIC_API_KEY"
  };
  staticModels = [
    {
      name: "Qwen/Qwen2.5-Coder-32B-Instruct",
      label: "Qwen 2.5 Coder 32B Instruct",
      provider: "Hyperbolic",
      maxTokenAllowed: 8192
    },
    {
      name: "Qwen/Qwen2.5-72B-Instruct",
      label: "Qwen2.5-72B-Instruct",
      provider: "Hyperbolic",
      maxTokenAllowed: 8192
    },
    {
      name: "deepseek-ai/DeepSeek-V2.5",
      label: "DeepSeek-V2.5",
      provider: "Hyperbolic",
      maxTokenAllowed: 8192
    },
    {
      name: "Qwen/QwQ-32B-Preview",
      label: "QwQ-32B-Preview",
      provider: "Hyperbolic",
      maxTokenAllowed: 8192
    },
    {
      name: "Qwen/Qwen2-VL-72B-Instruct",
      label: "Qwen2-VL-72B-Instruct",
      provider: "Hyperbolic",
      maxTokenAllowed: 8192
    }
  ];
  async getDynamicModels(apiKeys, settings, serverEnv = {}) {
    const { baseUrl: fetchBaseUrl, apiKey } = this.getProviderBaseUrlAndKey({
      apiKeys,
      providerSettings: settings,
      serverEnv,
      defaultBaseUrlKey: "",
      defaultApiTokenKey: "HYPERBOLIC_API_KEY"
    });
    const baseUrl = fetchBaseUrl || "https://api.hyperbolic.xyz/v1";
    if (!apiKey) {
      throw `Missing Api Key configuration for ${this.name} provider`;
    }
    const response = await fetch(`${baseUrl}/models`, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    });
    const res = await response.json();
    const data = res.data.filter((model) => model.object === "model" && model.supports_chat);
    return data.map((m) => ({
      name: m.id,
      label: `${m.id} - context ${m.context_length ? Math.floor(m.context_length / 1e3) + "k" : "N/A"}`,
      provider: this.name,
      maxTokenAllowed: m.context_length || 8e3
    }));
  }
  getModelInstance(options) {
    const { model, serverEnv, apiKeys, providerSettings } = options;
    const { apiKey } = this.getProviderBaseUrlAndKey({
      apiKeys,
      providerSettings: providerSettings?.[this.name],
      serverEnv,
      defaultBaseUrlKey: "",
      defaultApiTokenKey: "HYPERBOLIC_API_KEY"
    });
    if (!apiKey) {
      throw `Missing Api Key configuration for ${this.name} provider`;
    }
    const openai = createOpenAI({
      baseURL: "https://api.hyperbolic.xyz/v1/",
      apiKey
    });
    return openai(model);
  }
}

class AmazonBedrockProvider extends BaseProvider {
  name = "AmazonBedrock";
  getApiKeyLink = "https://console.aws.amazon.com/iam/home";
  config = {
    apiTokenKey: "AWS_BEDROCK_CONFIG"
  };
  staticModels = [
    {
      name: "anthropic.claude-3-5-sonnet-20240620-v1:0",
      label: "Claude 3.5 Sonnet (Bedrock)",
      provider: "AmazonBedrock",
      maxTokenAllowed: 4096
    },
    {
      name: "anthropic.claude-3-sonnet-20240229-v1:0",
      label: "Claude 3 Sonnet (Bedrock)",
      provider: "AmazonBedrock",
      maxTokenAllowed: 4096
    },
    {
      name: "anthropic.claude-3-haiku-20240307-v1:0",
      label: "Claude 3 Haiku (Bedrock)",
      provider: "AmazonBedrock",
      maxTokenAllowed: 4096
    },
    {
      name: "amazon.nova-pro-v1:0",
      label: "Amazon Nova Pro (Bedrock)",
      provider: "AmazonBedrock",
      maxTokenAllowed: 5120
    },
    {
      name: "amazon.nova-lite-v1:0",
      label: "Amazon Nova Lite (Bedrock)",
      provider: "AmazonBedrock",
      maxTokenAllowed: 5120
    },
    {
      name: "mistral.mistral-large-2402-v1:0",
      label: "Mistral Large 24.02 (Bedrock)",
      provider: "AmazonBedrock",
      maxTokenAllowed: 8192
    }
  ];
  _parseAndValidateConfig(apiKey) {
    let parsedConfig;
    try {
      parsedConfig = JSON.parse(apiKey);
    } catch {
      throw new Error(
        "Invalid AWS Bedrock configuration format. Please provide a valid JSON string containing region, accessKeyId, and secretAccessKey."
      );
    }
    const { region, accessKeyId, secretAccessKey, sessionToken } = parsedConfig;
    if (!region || !accessKeyId || !secretAccessKey) {
      throw new Error(
        "Missing required AWS credentials. Configuration must include region, accessKeyId, and secretAccessKey."
      );
    }
    return {
      region,
      accessKeyId,
      secretAccessKey,
      ...sessionToken && { sessionToken }
    };
  }
  getModelInstance(options) {
    const { model, serverEnv, apiKeys, providerSettings } = options;
    const { apiKey } = this.getProviderBaseUrlAndKey({
      apiKeys,
      providerSettings: providerSettings?.[this.name],
      serverEnv,
      defaultBaseUrlKey: "",
      defaultApiTokenKey: "AWS_BEDROCK_CONFIG"
    });
    if (!apiKey) {
      throw new Error(`Missing API key for ${this.name} provider`);
    }
    const config = this._parseAndValidateConfig(apiKey);
    const bedrock = createAmazonBedrock(config);
    return bedrock(model);
  }
}

class GithubProvider extends BaseProvider {
  name = "Github";
  getApiKeyLink = "https://github.com/settings/personal-access-tokens";
  config = {
    apiTokenKey: "GITHUB_API_KEY"
  };
  // find more in https://github.com/marketplace?type=models
  staticModels = [
    { name: "gpt-4o", label: "GPT-4o", provider: "Github", maxTokenAllowed: 8e3 },
    { name: "o1", label: "o1-preview", provider: "Github", maxTokenAllowed: 1e5 },
    { name: "o1-mini", label: "o1-mini", provider: "Github", maxTokenAllowed: 8e3 },
    { name: "gpt-4o-mini", label: "GPT-4o Mini", provider: "Github", maxTokenAllowed: 8e3 },
    { name: "gpt-4-turbo", label: "GPT-4 Turbo", provider: "Github", maxTokenAllowed: 8e3 },
    { name: "gpt-4", label: "GPT-4", provider: "Github", maxTokenAllowed: 8e3 },
    { name: "gpt-3.5-turbo", label: "GPT-3.5 Turbo", provider: "Github", maxTokenAllowed: 8e3 }
  ];
  getModelInstance(options) {
    const { model, serverEnv, apiKeys, providerSettings } = options;
    const { apiKey } = this.getProviderBaseUrlAndKey({
      apiKeys,
      providerSettings: providerSettings?.[this.name],
      serverEnv,
      defaultBaseUrlKey: "",
      defaultApiTokenKey: "GITHUB_API_KEY"
    });
    if (!apiKey) {
      throw new Error(`Missing API key for ${this.name} provider`);
    }
    const openai = createOpenAI({
      baseURL: "https://models.inference.ai.azure.com",
      apiKey
    });
    return openai(model);
  }
}

const providers = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  AmazonBedrockProvider,
  AnthropicProvider,
  CohereProvider,
  DeepseekProvider,
  GithubProvider,
  GoogleProvider,
  GroqProvider,
  HuggingFaceProvider,
  HyperbolicProvider,
  LMStudioProvider,
  MistralProvider,
  OllamaProvider,
  OpenAILikeProvider,
  OpenAIProvider,
  OpenRouterProvider,
  PerplexityProvider,
  TogetherProvider,
  XAIProvider
}, Symbol.toStringTag, { value: 'Module' }));

const logger$5 = createScopedLogger("LLMManager");
class LLMManager {
  static _instance;
  _providers = /* @__PURE__ */ new Map();
  _modelList = [];
  _env = {};
  constructor(_env) {
    this._registerProvidersFromDirectory();
    this._env = _env;
  }
  static getInstance(env = {}) {
    if (!LLMManager._instance) {
      LLMManager._instance = new LLMManager(env);
    }
    return LLMManager._instance;
  }
  get env() {
    return this._env;
  }
  async _registerProvidersFromDirectory() {
    try {
      for (const exportedItem of Object.values(providers)) {
        if (typeof exportedItem === "function" && exportedItem.prototype instanceof BaseProvider) {
          const provider = new exportedItem();
          try {
            this.registerProvider(provider);
          } catch (error) {
            logger$5.warn("Failed To Register Provider: ", provider.name, "error:", error.message);
          }
        }
      }
    } catch (error) {
      logger$5.error("Error registering providers:", error);
    }
  }
  registerProvider(provider) {
    if (this._providers.has(provider.name)) {
      logger$5.warn(`Provider ${provider.name} is already registered. Skipping.`);
      return;
    }
    logger$5.info("Registering Provider: ", provider.name);
    this._providers.set(provider.name, provider);
    this._modelList = [...this._modelList, ...provider.staticModels];
  }
  getProvider(name) {
    return this._providers.get(name);
  }
  getAllProviders() {
    return Array.from(this._providers.values());
  }
  getModelList() {
    return this._modelList;
  }
  async updateModelList(options) {
    const { apiKeys, providerSettings, serverEnv } = options;
    let enabledProviders = Array.from(this._providers.values()).map((p) => p.name);
    if (providerSettings && Object.keys(providerSettings).length > 0) {
      enabledProviders = enabledProviders.filter((p) => providerSettings[p].enabled);
    }
    const dynamicModels = await Promise.all(
      Array.from(this._providers.values()).filter((provider) => enabledProviders.includes(provider.name)).filter(
        (provider) => !!provider.getDynamicModels
      ).map(async (provider) => {
        const cachedModels = provider.getModelsFromCache(options);
        if (cachedModels) {
          return cachedModels;
        }
        const dynamicModels2 = await provider.getDynamicModels(apiKeys, providerSettings?.[provider.name], serverEnv).then((models) => {
          logger$5.info(`Caching ${models.length} dynamic models for ${provider.name}`);
          provider.storeDynamicModels(options, models);
          return models;
        }).catch((err) => {
          logger$5.error(`Error getting dynamic models ${provider.name} :`, err);
          return [];
        });
        return dynamicModels2;
      })
    );
    const staticModels = Array.from(this._providers.values()).flatMap((p) => p.staticModels || []);
    const dynamicModelsFlat = dynamicModels.flat();
    const dynamicModelKeys = dynamicModelsFlat.map((d) => `${d.name}-${d.provider}`);
    const filteredStaticModesl = staticModels.filter((m) => !dynamicModelKeys.includes(`${m.name}-${m.provider}`));
    const modelList = [...dynamicModelsFlat, ...filteredStaticModesl];
    modelList.sort((a, b) => a.name.localeCompare(b.name));
    this._modelList = modelList;
    return modelList;
  }
  getStaticModelList() {
    return [...this._providers.values()].flatMap((p) => p.staticModels || []);
  }
  async getModelListFromProvider(providerArg, options) {
    const provider = this._providers.get(providerArg.name);
    if (!provider) {
      throw new Error(`Provider ${providerArg.name} not found`);
    }
    const staticModels = provider.staticModels || [];
    if (!provider.getDynamicModels) {
      return staticModels;
    }
    const { apiKeys, providerSettings, serverEnv } = options;
    const cachedModels = provider.getModelsFromCache({
      apiKeys,
      providerSettings,
      serverEnv
    });
    if (cachedModels) {
      logger$5.info(`Found ${cachedModels.length} cached models for ${provider.name}`);
      return [...cachedModels, ...staticModels];
    }
    logger$5.info(`Getting dynamic models for ${provider.name}`);
    const dynamicModels = await provider.getDynamicModels?.(apiKeys, providerSettings?.[provider.name], serverEnv).then((models) => {
      logger$5.info(`Got ${models.length} dynamic models for ${provider.name}`);
      provider.storeDynamicModels(options, models);
      return models;
    }).catch((err) => {
      logger$5.error(`Error getting dynamic models ${provider.name} :`, err);
      return [];
    });
    const dynamicModelsName = dynamicModels.map((d) => d.name);
    const filteredStaticList = staticModels.filter((m) => !dynamicModelsName.includes(m.name));
    const modelList = [...dynamicModels, ...filteredStaticList];
    modelList.sort((a, b) => a.name.localeCompare(b.name));
    return modelList;
  }
  getStaticModelListFromProvider(providerArg) {
    const provider = this._providers.get(providerArg.name);
    if (!provider) {
      throw new Error(`Provider ${providerArg.name} not found`);
    }
    return [...provider.staticModels || []];
  }
  getDefaultProvider() {
    const firstProvider = this._providers.values().next().value;
    if (!firstProvider) {
      throw new Error("No providers registered");
    }
    return firstProvider;
  }
}

function parseCookies$1(cookieHeader) {
  const cookies = {};
  if (!cookieHeader) {
    return cookies;
  }
  const items = cookieHeader.split(";").map((cookie) => cookie.trim());
  items.forEach((item) => {
    const [name, ...rest] = item.split("=");
    if (name && rest.length > 0) {
      const decodedName = decodeURIComponent(name.trim());
      const decodedValue = decodeURIComponent(rest.join("=").trim());
      cookies[decodedName] = decodedValue;
    }
  });
  return cookies;
}
function getApiKeysFromCookie(cookieHeader) {
  const cookies = parseCookies$1(cookieHeader);
  return cookies.apiKeys ? JSON.parse(cookies.apiKeys) : {};
}
function getProviderSettingsFromCookie(cookieHeader) {
  const cookies = parseCookies$1(cookieHeader);
  return cookies.providers ? JSON.parse(cookies.providers) : {};
}

let cachedProviders = null;
let cachedDefaultProvider = null;
function getProviderInfo(llmManager) {
  if (!cachedProviders) {
    cachedProviders = llmManager.getAllProviders().map((provider) => ({
      name: provider.name,
      staticModels: provider.staticModels,
      getApiKeyLink: provider.getApiKeyLink,
      labelForGetApiKey: provider.labelForGetApiKey,
      icon: provider.icon
    }));
  }
  if (!cachedDefaultProvider) {
    const defaultProvider = llmManager.getDefaultProvider();
    cachedDefaultProvider = {
      name: defaultProvider.name,
      staticModels: defaultProvider.staticModels,
      getApiKeyLink: defaultProvider.getApiKeyLink,
      labelForGetApiKey: defaultProvider.labelForGetApiKey,
      icon: defaultProvider.icon
    };
  }
  return { providers: cachedProviders, defaultProvider: cachedDefaultProvider };
}
async function loader$5({
  request,
  params,
  context
}) {
  const llmManager = LLMManager.getInstance(context.cloudflare?.env);
  const cookieHeader = request.headers.get("Cookie");
  const apiKeys = getApiKeysFromCookie(cookieHeader);
  const providerSettings = getProviderSettingsFromCookie(cookieHeader);
  const { providers, defaultProvider } = getProviderInfo(llmManager);
  let modelList = [];
  if (params.provider) {
    const provider = llmManager.getProvider(params.provider);
    if (provider) {
      modelList = await llmManager.getModelListFromProvider(provider, {
        apiKeys,
        providerSettings,
        serverEnv: context.cloudflare?.env
      });
    }
  } else {
    modelList = await llmManager.updateModelList({
      apiKeys,
      providerSettings,
      serverEnv: context.cloudflare?.env
    });
  }
  return json({
    modelList,
    providers,
    defaultProvider
  });
}

const route7 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  loader: loader$5
}, Symbol.toStringTag, { value: 'Module' }));

const route2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  loader: loader$5
}, Symbol.toStringTag, { value: 'Module' }));

const __vite_import_meta_env__$1 = {"BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "SSR": true, "VITE_USER_NODE_ENV": "production"};
const WORK_DIR_NAME = "project";
const WORK_DIR = `/home/${WORK_DIR_NAME}`;
const MODIFICATIONS_TAG_NAME = "bolt_file_modifications";
const MODEL_REGEX = /^\[Model: (.*?)\]\n\n/;
const PROVIDER_REGEX = /\[Provider: (.*?)\]\n\n/;
const DEFAULT_MODEL = "claude-3-5-sonnet-latest";
const llmManager = LLMManager.getInstance(__vite_import_meta_env__$1);
const PROVIDER_LIST = llmManager.getAllProviders();
const DEFAULT_PROVIDER = llmManager.getDefaultProvider();
const providerBaseUrlEnvKeys = {};
PROVIDER_LIST.forEach((provider) => {
  providerBaseUrlEnvKeys[provider.name] = {
    baseUrlKey: provider.config.baseUrlKey,
    apiTokenKey: provider.config.apiTokenKey
  };
});

const loader$4 = async ({ context, request }) => {
  const url = new URL(request.url);
  const provider = url.searchParams.get("provider");
  if (!provider || !providerBaseUrlEnvKeys[provider].apiTokenKey) {
    return Response.json({ isSet: false });
  }
  const envVarName = providerBaseUrlEnvKeys[provider].apiTokenKey;
  const isSet = !!(process.env[envVarName] || context?.cloudflare?.env?.[envVarName]);
  return Response.json({ isSet });
};

const route3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  loader: loader$4
}, Symbol.toStringTag, { value: 'Module' }));

async function action$3({ request, params }) {
  return handleProxyRequest(request, params["*"]);
}
async function loader$3({ request, params }) {
  return handleProxyRequest(request, params["*"]);
}
async function handleProxyRequest(request, path) {
  try {
    if (!path) {
      return json({ error: "Invalid proxy URL format" }, { status: 400 });
    }
    const url = new URL(request.url);
    const targetURL = `https://${path}${url.search}`;
    const response = await fetch(targetURL, {
      method: request.method,
      headers: {
        ...Object.fromEntries(request.headers),
        // Override host header with the target host
        host: new URL(targetURL).host
      },
      body: ["GET", "HEAD"].includes(request.method) ? null : await request.arrayBuffer()
    });
    const corsHeaders = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "*"
    };
    if (request.method === "OPTIONS") {
      return new Response(null, {
        headers: corsHeaders,
        status: 204
      });
    }
    const responseHeaders = new Headers(response.headers);
    Object.entries(corsHeaders).forEach(([key, value]) => {
      responseHeaders.set(key, value);
    });
    return new Response(response.body, {
      status: response.status,
      headers: responseHeaders
    });
  } catch (error) {
    console.error("Git proxy error:", error);
    return json({ error: "Proxy error" }, { status: 500 });
  }
}

const route4 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  action: action$3,
  loader: loader$3
}, Symbol.toStringTag, { value: 'Module' }));

const MAX_TOKENS = 8e3;
const MAX_RESPONSE_SEGMENTS = 2;
const IGNORE_PATTERNS$2 = [
  "node_modules/**",
  ".git/**",
  "dist/**",
  "build/**",
  ".next/**",
  "coverage/**",
  ".cache/**",
  ".vscode/**",
  ".idea/**",
  "**/*.log",
  "**/.DS_Store",
  "**/npm-debug.log*",
  "**/yarn-debug.log*",
  "**/yarn-error.log*",
  "**/*lock.json",
  "**/*lock.yml"
];

const allowedHTMLElements = [
  "a",
  "b",
  "blockquote",
  "br",
  "code",
  "dd",
  "del",
  "details",
  "div",
  "dl",
  "dt",
  "em",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "hr",
  "i",
  "ins",
  "kbd",
  "li",
  "ol",
  "p",
  "pre",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "source",
  "span",
  "strike",
  "strong",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "tfoot",
  "th",
  "thead",
  "tr",
  "ul",
  "var",
  "think"
];
({
  ...defaultSchema,
  attributes: {
    ...defaultSchema.attributes,
    div: [
      ...defaultSchema.attributes?.div ?? [],
      "data*",
      ["className", "__boltArtifact__", "__boltThought__"]
      // ['className', '__boltThought__']
    ]
  }});

const getSystemPrompt = (cwd = WORK_DIR) => `
You are Bolt, an expert AI assistant and exceptional senior software developer with vast knowledge across multiple programming languages, frameworks, and best practices.

<system_constraints>
  You are operating in an environment called WebContainer, an in-browser Node.js runtime that emulates a Linux system to some degree. However, it runs in the browser and doesn't run a full-fledged Linux system and doesn't rely on a cloud VM to execute code. All code is executed in the browser. It does come with a shell that emulates zsh. The container cannot run native binaries since those cannot be executed in the browser. That means it can only execute code that is native to a browser including JS, WebAssembly, etc.

  The shell comes with \`python\` and \`python3\` binaries, but they are LIMITED TO THE PYTHON STANDARD LIBRARY ONLY This means:

    - There is NO \`pip\` support! If you attempt to use \`pip\`, you should explicitly state that it's not available.
    - CRITICAL: Third-party libraries cannot be installed or imported.
    - Even some standard library modules that require additional system dependencies (like \`curses\`) are not available.
    - Only modules from the core Python standard library can be used.

  Additionally, there is no \`g++\` or any C/C++ compiler available. WebContainer CANNOT run native binaries or compile C/C++ code!

  Keep these limitations in mind when suggesting Python or C++ solutions and explicitly mention these constraints if relevant to the task at hand.

  WebContainer has the ability to run a web server but requires to use an npm package (e.g., Vite, servor, serve, http-server) or use the Node.js APIs to implement a web server.

  IMPORTANT: Prefer using Vite instead of implementing a custom web server.

  IMPORTANT: Git is NOT available.

  IMPORTANT: WebContainer CANNOT execute diff or patch editing so always write your code in full no partial/diff update

  IMPORTANT: Prefer writing Node.js scripts instead of shell scripts. The environment doesn't fully support shell scripts, so use Node.js for scripting tasks whenever possible!

  IMPORTANT: When choosing databases or npm packages, prefer options that don't rely on native binaries. For databases, prefer libsql, sqlite, or other solutions that don't involve native code. WebContainer CANNOT execute arbitrary native binaries.

  Available shell commands:
    File Operations:
      - cat: Display file contents
      - cp: Copy files/directories
      - ls: List directory contents
      - mkdir: Create directory
      - mv: Move/rename files
      - rm: Remove files
      - rmdir: Remove empty directories
      - touch: Create empty file/update timestamp
    
    System Information:
      - hostname: Show system name
      - ps: Display running processes
      - pwd: Print working directory
      - uptime: Show system uptime
      - env: Environment variables
    
    Development Tools:
      - node: Execute Node.js code
      - python3: Run Python scripts
      - code: VSCode operations
      - jq: Process JSON
    
    Other Utilities:
      - curl, head, sort, tail, clear, which, export, chmod, scho, hostname, kill, ln, xxd, alias, false,  getconf, true, loadenv, wasm, xdg-open, command, exit, source
</system_constraints>

<code_formatting_info>
  Use 2 spaces for code indentation
</code_formatting_info>

<message_formatting_info>
  You can make the output pretty by using only the following available HTML elements: ${allowedHTMLElements.map((tagName) => `<${tagName}>`).join(", ")}
</message_formatting_info>

<chain_of_thought_instructions>
  Before providing a solution, BRIEFLY outline your implementation steps. This helps ensure systematic thinking and clear communication. Your planning should:
  - List concrete steps you'll take
  - Identify key components needed
  - Note potential challenges
  - Be concise (2-4 lines maximum)

  Example responses:

  User: "Create a todo list app with local storage"
  Assistant: "Sure. I'll start by:
  1. Set up Vite + React
  2. Create TodoList and TodoItem components
  3. Implement localStorage for persistence
  4. Add CRUD operations
  
  Let's start now.

  [Rest of response...]"

  User: "Help debug why my API calls aren't working"
  Assistant: "Great. My first steps will be:
  1. Check network requests
  2. Verify API endpoint format
  3. Examine error handling
  
  [Rest of response...]"

</chain_of_thought_instructions>

<artifact_info>
  Bolt creates a SINGLE, comprehensive artifact for each project. The artifact contains all necessary steps and components, including:

  - Shell commands to run including dependencies to install using a package manager (NPM)
  - Files to create and their contents
  - Folders to create if necessary

  <artifact_instructions>
    1. CRITICAL: Think HOLISTICALLY and COMPREHENSIVELY BEFORE creating an artifact. This means:

      - Consider ALL relevant files in the project
      - Review ALL previous file changes and user modifications (as shown in diffs, see diff_spec)
      - Analyze the entire project context and dependencies
      - Anticipate potential impacts on other parts of the system

      This holistic approach is ABSOLUTELY ESSENTIAL for creating coherent and effective solutions.

    2. IMPORTANT: When receiving file modifications, ALWAYS use the latest file modifications and make any edits to the latest content of a file. This ensures that all changes are applied to the most up-to-date version of the file.

    3. The current working directory is \`${cwd}\`.

    4. Wrap the content in opening and closing \`<boltArtifact>\` tags. These tags contain more specific \`<boltAction>\` elements.

    5. Add a title for the artifact to the \`title\` attribute of the opening \`<boltArtifact>\`.

    6. Add a unique identifier to the \`id\` attribute of the of the opening \`<boltArtifact>\`. For updates, reuse the prior identifier. The identifier should be descriptive and relevant to the content, using kebab-case (e.g., "example-code-snippet"). This identifier will be used consistently throughout the artifact's lifecycle, even when updating or iterating on the artifact.

    7. Use \`<boltAction>\` tags to define specific actions to perform.

    8. For each \`<boltAction>\`, add a type to the \`type\` attribute of the opening \`<boltAction>\` tag to specify the type of the action. Assign one of the following values to the \`type\` attribute:

      - shell: For running shell commands.

        - When Using \`npx\`, ALWAYS provide the \`--yes\` flag.
        - When running multiple shell commands, use \`&&\` to run them sequentially.
        - ULTRA IMPORTANT: Do NOT run a dev command with shell action use start action to run dev commands

      - file: For writing new files or updating existing files. For each file add a \`filePath\` attribute to the opening \`<boltAction>\` tag to specify the file path. The content of the file artifact is the file contents. All file paths MUST BE relative to the current working directory.

      - start: For starting a development server.
        - Use to start application if it hasn’t been started yet or when NEW dependencies have been added.
        - Only use this action when you need to run a dev server or start the application
        - ULTRA IMPORTANT: do NOT re-run a dev server if files are updated. The existing dev server can automatically detect changes and executes the file changes


    9. The order of the actions is VERY IMPORTANT. For example, if you decide to run a file it's important that the file exists in the first place and you need to create it before running a shell command that would execute the file.

    10. ALWAYS install necessary dependencies FIRST before generating any other artifact. If that requires a \`package.json\` then you should create that first!

      IMPORTANT: Add all required dependencies to the \`package.json\` already and try to avoid \`npm i <pkg>\` if possible!

    11. CRITICAL: Always provide the FULL, updated content of the artifact. This means:

      - Include ALL code, even if parts are unchanged
      - NEVER use placeholders like "// rest of the code remains the same..." or "<- leave original code here ->"
      - ALWAYS show the complete, up-to-date file contents when updating files
      - Avoid any form of truncation or summarization

    12. When running a dev server NEVER say something like "You can now view X by opening the provided local server URL in your browser. The preview will be opened automatically or by the user manually!

    13. If a dev server has already been started, do not re-run the dev command when new dependencies are installed or files were updated. Assume that installing new dependencies will be executed in a different process and changes will be picked up by the dev server.

    14. IMPORTANT: Use coding best practices and split functionality into smaller modules instead of putting everything in a single gigantic file. Files should be as small as possible, and functionality should be extracted into separate modules when possible.

      - Ensure code is clean, readable, and maintainable.
      - Adhere to proper naming conventions and consistent formatting.
      - Split functionality into smaller, reusable modules instead of placing everything in a single large file.
      - Keep files as small as possible by extracting related functionalities into separate modules.
      - Use imports to connect these modules together effectively.
  </artifact_instructions>
</artifact_info>

NEVER use the word "artifact". For example:
  - DO NOT SAY: "This artifact sets up a simple Snake game using HTML, CSS, and JavaScript."
  - INSTEAD SAY: "We set up a simple Snake game using HTML, CSS, and JavaScript."

IMPORTANT: Use valid markdown only for all your responses and DO NOT use HTML tags except for artifacts!

ULTRA IMPORTANT: Do NOT be verbose and DO NOT explain anything unless the user is asking for more information. That is VERY important.

ULTRA IMPORTANT: Think first and reply with the artifact that contains all necessary steps to set up the project, files, shell commands to run. It is SUPER IMPORTANT to respond with this first.

Here are some examples of correct usage of artifacts:

<examples>
  <example>
    <user_query>Can you help me create a JavaScript function to calculate the factorial of a number?</user_query>

    <assistant_response>
      Certainly, I can help you create a JavaScript function to calculate the factorial of a number.

      <boltArtifact id="factorial-function" title="JavaScript Factorial Function">
        <boltAction type="file" filePath="index.js">function factorial(n) {
  ...
}
...</boltAction>

        <boltAction type="shell">node index.js</boltAction>
      </boltArtifact>
    </assistant_response>
  </example>

  <example>
    <user_query>Build a snake game</user_query>

    <assistant_response>
      Certainly! I'd be happy to help you build a snake game using JavaScript and HTML5 Canvas. This will be a basic implementation that you can later expand upon. Let's create the game step by step.

      <boltArtifact id="snake-game" title="Snake Game in HTML and JavaScript">
        <boltAction type="file" filePath="package.json">{
  "name": "snake",
  "scripts": {
    "dev": "vite"
  }
  ...
}</boltAction>

        <boltAction type="shell">npm install --save-dev vite</boltAction>

        <boltAction type="file" filePath="index.html">...</boltAction>

        <boltAction type="start">npm run dev</boltAction>
      </boltArtifact>

      Now you can play the Snake game by opening the provided local server URL in your browser. Use the arrow keys to control the snake. Eat the red food to grow and increase your score. The game ends if you hit the wall or your own tail.
    </assistant_response>
  </example>

  <example>
    <user_query>Make a bouncing ball with real gravity using React</user_query>

    <assistant_response>
      Certainly! I'll create a bouncing ball with real gravity using React. We'll use the react-spring library for physics-based animations.

      <boltArtifact id="bouncing-ball-react" title="Bouncing Ball with Gravity in React">
        <boltAction type="file" filePath="package.json">{
  "name": "bouncing-ball",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-spring": "^9.7.1"
  },
  "devDependencies": {
    "@types/react": "^18.0.28",
    "@types/react-dom": "^18.0.11",
    "@vitejs/plugin-react": "^3.1.0",
    "vite": "^4.2.0"
  }
}</boltAction>

        <boltAction type="file" filePath="index.html">...</boltAction>

        <boltAction type="file" filePath="src/main.jsx">...</boltAction>

        <boltAction type="file" filePath="src/index.css">...</boltAction>

        <boltAction type="file" filePath="src/App.jsx">...</boltAction>

        <boltAction type="start">npm run dev</boltAction>
      </boltArtifact>

      You can now view the bouncing ball animation in the preview. The ball will start falling from the top of the screen and bounce realistically when it hits the bottom.
    </assistant_response>
  </example>
</examples>
`;
const CONTINUE_PROMPT = stripIndents`
  Continue your prior response. IMPORTANT: Immediately begin from where you left off without any interruptions.
  Do not repeat any content, including artifact and action tags.
`;

const optimized = (options) => {
  const { cwd, allowedHtmlElements } = options;
  return `
You are Bolt, an expert AI assistant and exceptional senior software developer with vast knowledge across multiple programming languages, frameworks, and best practices.

<system_constraints>
  - Operating in WebContainer, an in-browser Node.js runtime
  - Limited Python support: standard library only, no pip
  - No C/C++ compiler, native binaries, or Git
  - Prefer Node.js scripts over shell scripts
  - Use Vite for web servers
  - Databases: prefer libsql, sqlite, or non-native solutions
  - When for react dont forget to write vite config and index.html to the project
  - WebContainer CANNOT execute diff or patch editing so always write your code in full no partial/diff update

  Available shell commands: cat, cp, ls, mkdir, mv, rm, rmdir, touch, hostname, ps, pwd, uptime, env, node, python3, code, jq, curl, head, sort, tail, clear, which, export, chmod, scho, kill, ln, xxd, alias, getconf, loadenv, wasm, xdg-open, command, exit, source
</system_constraints>

<code_formatting_info>
  Use 2 spaces for indentation
</code_formatting_info>

<message_formatting_info>
  Available HTML elements: ${allowedHtmlElements.join(", ")}
</message_formatting_info>

<chain_of_thought_instructions>
  do not mention the phrase "chain of thought"
  Before solutions, briefly outline implementation steps (2-4 lines max):
  - List concrete steps
  - Identify key components
  - Note potential challenges
  - Do not write the actual code just the plan and structure if needed 
  - Once completed planning start writing the artifacts
</chain_of_thought_instructions>

<artifact_info>
  Create a single, comprehensive artifact for each project:
  - Use \`<boltArtifact>\` tags with \`title\` and \`id\` attributes
  - Use \`<boltAction>\` tags with \`type\` attribute:
    - shell: Run commands
    - file: Write/update files (use \`filePath\` attribute)
    - start: Start dev server (only when necessary)
  - Order actions logically
  - Install dependencies first
  - Provide full, updated content for all files
  - Use coding best practices: modular, clean, readable code
</artifact_info>


# CRITICAL RULES - NEVER IGNORE

## File and Command Handling
1. ALWAYS use artifacts for file contents and commands - NO EXCEPTIONS
2. When writing a file, INCLUDE THE ENTIRE FILE CONTENT - NO PARTIAL UPDATES
3. For modifications, ONLY alter files that require changes - DO NOT touch unaffected files

## Response Format
4. Use markdown EXCLUSIVELY - HTML tags are ONLY allowed within artifacts
5. Be concise - Explain ONLY when explicitly requested
6. NEVER use the word "artifact" in responses

## Development Process
7. ALWAYS think and plan comprehensively before providing a solution
8. Current working directory: \`${cwd} \` - Use this for all file paths
9. Don't use cli scaffolding to steup the project, use cwd as Root of the project
11. For nodejs projects ALWAYS install dependencies after writing package.json file

## Coding Standards
10. ALWAYS create smaller, atomic components and modules
11. Modularity is PARAMOUNT - Break down functionality into logical, reusable parts
12. IMMEDIATELY refactor any file exceeding 250 lines
13. ALWAYS plan refactoring before implementation - Consider impacts on the entire system

## Artifact Usage
22. Use \`<boltArtifact>\` tags with \`title\` and \`id\` attributes for each project
23. Use \`<boltAction>\` tags with appropriate \`type\` attribute:
    - \`shell\`: For running commands
    - \`file\`: For writing/updating files (include \`filePath\` attribute)
    - \`start\`: For starting dev servers (use only when necessary/ or new dependencies are installed)
24. Order actions logically - dependencies MUST be installed first
25. For Vite project must include vite config and index.html for entry point
26. Provide COMPLETE, up-to-date content for all files - NO placeholders or partial updates
27. WebContainer CANNOT execute diff or patch editing so always write your code in full no partial/diff update

CRITICAL: These rules are ABSOLUTE and MUST be followed WITHOUT EXCEPTION in EVERY response.

Examples:
<examples>
  <example>
    <user_query>Can you help me create a JavaScript function to calculate the factorial of a number?</user_query>
    <assistant_response>
      Certainly, I can help you create a JavaScript function to calculate the factorial of a number.

      <boltArtifact id="factorial-function" title="JavaScript Factorial Function">
        <boltAction type="file" filePath="index.js">function factorial(n) {
  ...
}

...</boltAction>
        <boltAction type="shell">node index.js</boltAction>
      </boltArtifact>
    </assistant_response>
  </example>

  <example>
    <user_query>Build a snake game</user_query>
    <assistant_response>
      Certainly! I'd be happy to help you build a snake game using JavaScript and HTML5 Canvas. This will be a basic implementation that you can later expand upon. Let's create the game step by step.

      <boltArtifact id="snake-game" title="Snake Game in HTML and JavaScript">
        <boltAction type="file" filePath="package.json">{
  "name": "snake",
  "scripts": {
    "dev": "vite"
  }
  ...
}</boltAction>
        <boltAction type="shell">npm install --save-dev vite</boltAction>
        <boltAction type="file" filePath="index.html">...</boltAction>
        <boltAction type="start">npm run dev</boltAction>
      </boltArtifact>

      Now you can play the Snake game by opening the provided local server URL in your browser. Use the arrow keys to control the snake. Eat the red food to grow and increase your score. The game ends if you hit the wall or your own tail.
    </assistant_response>
  </example>

  <example>
    <user_query>Make a bouncing ball with real gravity using React</user_query>
    <assistant_response>
      Certainly! I'll create a bouncing ball with real gravity using React. We'll use the react-spring library for physics-based animations.

      <boltArtifact id="bouncing-ball-react" title="Bouncing Ball with Gravity in React">
        <boltAction type="file" filePath="package.json">{
  "name": "bouncing-ball",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-spring": "^9.7.1"
  },
  "devDependencies": {
    "@types/react": "^18.0.28",
    "@types/react-dom": "^18.0.11",
    "@vitejs/plugin-react": "^3.1.0",
    "vite": "^4.2.0"
  }
}</boltAction>
        <boltAction type="file" filePath="index.html">...</boltAction>
        <boltAction type="file" filePath="src/main.jsx">...</boltAction>
        <boltAction type="file" filePath="src/index.css">...</boltAction>
        <boltAction type="file" filePath="src/App.jsx">...</boltAction>
        <boltAction type="start">npm run dev</boltAction>
      </boltArtifact>

      You can now view the bouncing ball animation in the preview. The ball will start falling from the top of the screen and bounce realistically when it hits the bottom.
    </assistant_response>
  </example>
</examples>
Always use artifacts for file contents and commands, following the format shown in these examples.
`;
};

class PromptLibrary {
  static library = {
    default: {
      label: "Default Prompt",
      description: "This is the battle tested default system Prompt",
      get: (options) => getSystemPrompt(options.cwd)
    },
    optimized: {
      label: "Optimized Prompt (experimental)",
      description: "an Experimental version of the prompt for lower token usage",
      get: (options) => optimized(options)
    }
  };
  static getList() {
    return Object.entries(this.library).map(([key, value]) => {
      const { label, description } = value;
      return {
        id: key,
        label,
        description
      };
    });
  }
  static getPropmtFromLibrary(promptId, options) {
    const prompt = this.library[promptId];
    if (!prompt) {
      throw "Prompt Now Found";
    }
    return this.library[promptId]?.get(options);
  }
}

function extractPropertiesFromMessage(message) {
  const textContent = Array.isArray(message.content) ? message.content.find((item) => item.type === "text")?.text || "" : message.content;
  const modelMatch = textContent.match(MODEL_REGEX);
  const providerMatch = textContent.match(PROVIDER_REGEX);
  const model = modelMatch ? modelMatch[1] : DEFAULT_MODEL;
  const provider = providerMatch ? providerMatch[1] : DEFAULT_PROVIDER.name;
  const cleanedContent = Array.isArray(message.content) ? message.content.map((item) => {
    if (item.type === "text") {
      return {
        type: "text",
        text: item.text?.replace(MODEL_REGEX, "").replace(PROVIDER_REGEX, "")
      };
    }
    return item;
  }) : textContent.replace(MODEL_REGEX, "").replace(PROVIDER_REGEX, "");
  return { model, provider, content: cleanedContent };
}
function simplifyBoltActions(input) {
  const regex = /(<boltAction[^>]*type="file"[^>]*>)([\s\S]*?)(<\/boltAction>)/g;
  return input.replace(regex, (_0, openingTag, _2, closingTag) => {
    return `${openingTag}
          ...
        ${closingTag}`;
  });
}
function createFilesContext(files, useRelativePath) {
  const ig = ignore().add(IGNORE_PATTERNS$2);
  let filePaths = Object.keys(files);
  filePaths = filePaths.filter((x) => {
    const relPath = x.replace("/home/project/", "");
    return !ig.ignores(relPath);
  });
  const fileContexts = filePaths.filter((x) => files[x] && files[x].type == "file").map((path) => {
    const dirent = files[path];
    if (!dirent || dirent.type == "folder") {
      return "";
    }
    const codeWithLinesNumbers = dirent.content.split("\n").join("\n");
    let filePath = path;
    if (useRelativePath) {
      filePath = path.replace("/home/project/", "");
    }
    return `<boltAction type="file" filePath="${filePath}">${codeWithLinesNumbers}</boltAction>`;
  });
  return `<boltArtifact id="code-content" title="Code Content" >
${fileContexts.join("\n")}
</boltArtifact>`;
}
function extractCurrentContext(messages) {
  const lastAssistantMessage = messages.filter((x) => x.role == "assistant").slice(-1)[0];
  if (!lastAssistantMessage) {
    return { summary: undefined, codeContext: undefined };
  }
  let summary;
  let codeContext;
  if (!lastAssistantMessage.annotations?.length) {
    return { summary: undefined, codeContext: undefined };
  }
  for (let i = 0; i < lastAssistantMessage.annotations.length; i++) {
    const annotation = lastAssistantMessage.annotations[i];
    if (!annotation || typeof annotation !== "object") {
      continue;
    }
    if (!annotation.type) {
      continue;
    }
    const annotationObject = annotation;
    if (annotationObject.type === "codeContext") {
      codeContext = annotationObject;
      break;
    } else if (annotationObject.type === "chatSummary") {
      summary = annotationObject;
      break;
    }
  }
  return { summary, codeContext };
}

const ig$2 = ignore().add(IGNORE_PATTERNS$2);
const logger$4 = createScopedLogger("select-context");
async function selectContext(props) {
  const { messages, env: serverEnv, apiKeys, files, providerSettings, summary, onFinish } = props;
  let currentModel = DEFAULT_MODEL;
  let currentProvider = DEFAULT_PROVIDER.name;
  const processedMessages = messages.map((message) => {
    if (message.role === "user") {
      const { model, provider: provider2, content } = extractPropertiesFromMessage(message);
      currentModel = model;
      currentProvider = provider2;
      return { ...message, content };
    } else if (message.role == "assistant") {
      let content = message.content;
      content = simplifyBoltActions(content);
      content = content.replace(/<div class=\\"__boltThought__\\">.*?<\/div>/s, "");
      content = content.replace(/<think>.*?<\/think>/s, "");
      return { ...message, content };
    }
    return message;
  });
  const provider = PROVIDER_LIST.find((p) => p.name === currentProvider) || DEFAULT_PROVIDER;
  const staticModels = LLMManager.getInstance().getStaticModelListFromProvider(provider);
  let modelDetails = staticModels.find((m) => m.name === currentModel);
  if (!modelDetails) {
    const modelsList = [
      ...provider.staticModels || [],
      ...await LLMManager.getInstance().getModelListFromProvider(provider, {
        apiKeys,
        providerSettings,
        serverEnv
      })
    ];
    if (!modelsList.length) {
      throw new Error(`No models found for provider ${provider.name}`);
    }
    modelDetails = modelsList.find((m) => m.name === currentModel);
    if (!modelDetails) {
      logger$4.warn(
        `MODEL [${currentModel}] not found in provider [${provider.name}]. Falling back to first model. ${modelsList[0].name}`
      );
      modelDetails = modelsList[0];
    }
  }
  const { codeContext } = extractCurrentContext(processedMessages);
  let filePaths = getFilePaths(files || {});
  filePaths = filePaths.filter((x) => {
    const relPath = x.replace("/home/project/", "");
    return !ig$2.ignores(relPath);
  });
  let context = "";
  const currrentFiles = [];
  const contextFiles = {};
  if (codeContext?.type === "codeContext") {
    const codeContextFiles = codeContext.files;
    Object.keys(files || {}).forEach((path) => {
      let relativePath = path;
      if (path.startsWith("/home/project/")) {
        relativePath = path.replace("/home/project/", "");
      }
      if (codeContextFiles.includes(relativePath)) {
        contextFiles[relativePath] = files[path];
        currrentFiles.push(relativePath);
      }
    });
    context = createFilesContext(contextFiles);
  }
  const summaryText = `Here is the summary of the chat till now: ${summary}`;
  const extractTextContent = (message) => Array.isArray(message.content) ? message.content.find((item) => item.type === "text")?.text || "" : message.content;
  const lastUserMessage = processedMessages.filter((x) => x.role == "user").pop();
  if (!lastUserMessage) {
    throw new Error("No user message found");
  }
  const resp = await generateText({
    system: `
        You are a software engineer. You are working on a project. You have access to the following files:

        AVAILABLE FILES PATHS
        ---
        ${filePaths.map((path) => `- ${path}`).join("\n")}
        ---
        
        You have following code loaded in the context buffer that you can refer to:

        CURRENT CONTEXT BUFFER
        ---
        ${context}
        ---

        Now, you are given a task. You need to select the files that are relevant to the task from the list of files above.

        RESPONSE FORMAT:
        your response shoudl be in following format:
---
<updateContextBuffer>
    <includeFile path="path/to/file"/>
    <excludeFile path="path/to/file"/>
</updateContextBuffer>
---
        * Your should start with <updateContextBuffer> and end with </updateContextBuffer>. 
        * You can include multiple <includeFile> and <excludeFile> tags in the response.
        * You should not include any other text in the response.
        * You should not include any file that is not in the list of files above.
        * You should not include any file that is already in the context buffer.
        * If no changes are needed, you can leave the response empty updateContextBuffer tag.
        `,
    prompt: `
        ${summaryText}

        Users Question: ${extractTextContent(lastUserMessage)}

        update the context buffer with the files that are relevant to the task from the list of files above.

        CRITICAL RULES:
        * Only include relevant files in the context buffer.
        * context buffer should not include any file that is not in the list of files above.
        * context buffer is extremlly expensive, so only include files that are absolutely necessary.
        * If no changes are needed, you can leave the response empty updateContextBuffer tag.
        * Only 5 files can be placed in the context buffer at a time.
        * if the buffer is full, you need to exclude files that is not needed and include files that is relevent.

        `,
    model: provider.getModelInstance({
      model: currentModel,
      serverEnv,
      apiKeys,
      providerSettings
    })
  });
  const response = resp.text;
  const updateContextBuffer = response.match(/<updateContextBuffer>([\s\S]*?)<\/updateContextBuffer>/);
  if (!updateContextBuffer) {
    throw new Error("Invalid response. Please follow the response format");
  }
  const includeFiles = updateContextBuffer[1].match(/<includeFile path="(.*?)"/gm)?.map((x) => x.replace('<includeFile path="', "").replace('"', "")) || [];
  const excludeFiles = updateContextBuffer[1].match(/<excludeFile path="(.*?)"/gm)?.map((x) => x.replace('<excludeFile path="', "").replace('"', "")) || [];
  const filteredFiles = {};
  excludeFiles.forEach((path) => {
    delete contextFiles[path];
  });
  includeFiles.forEach((path) => {
    let fullPath = path;
    if (!path.startsWith("/home/project/")) {
      fullPath = `/home/project/${path}`;
    }
    if (!filePaths.includes(fullPath)) {
      throw new Error(`File ${path} is not in the list of files above.`);
    }
    if (currrentFiles.includes(path)) {
      return;
    }
    filteredFiles[path] = files[fullPath];
  });
  if (onFinish) {
    onFinish(resp);
  }
  return filteredFiles;
}
function getFilePaths(files) {
  let filePaths = Object.keys(files);
  filePaths = filePaths.filter((x) => {
    const relPath = x.replace("/home/project/", "");
    return !ig$2.ignores(relPath);
  });
  return filePaths;
}

const logger$3 = createScopedLogger("stream-text");
async function streamText(props) {
  const {
    messages,
    env: serverEnv,
    options,
    apiKeys,
    files,
    providerSettings,
    promptId,
    contextOptimization,
    contextFiles,
    summary
  } = props;
  let currentModel = DEFAULT_MODEL;
  let currentProvider = DEFAULT_PROVIDER.name;
  let processedMessages = messages.map((message) => {
    if (message.role === "user") {
      const { model, provider: provider2, content } = extractPropertiesFromMessage(message);
      currentModel = model;
      currentProvider = provider2;
      return { ...message, content };
    } else if (message.role == "assistant") {
      let content = message.content;
      content = content.replace(/<div class=\\"__boltThought__\\">.*?<\/div>/s, "");
      content = content.replace(/<think>.*?<\/think>/s, "");
      return { ...message, content };
    }
    return message;
  });
  const provider = PROVIDER_LIST.find((p) => p.name === currentProvider) || DEFAULT_PROVIDER;
  const staticModels = LLMManager.getInstance().getStaticModelListFromProvider(provider);
  let modelDetails = staticModels.find((m) => m.name === currentModel);
  if (!modelDetails) {
    const modelsList = [
      ...provider.staticModels || [],
      ...await LLMManager.getInstance().getModelListFromProvider(provider, {
        apiKeys,
        providerSettings,
        serverEnv
      })
    ];
    if (!modelsList.length) {
      throw new Error(`No models found for provider ${provider.name}`);
    }
    modelDetails = modelsList.find((m) => m.name === currentModel);
    if (!modelDetails) {
      logger$3.warn(
        `MODEL [${currentModel}] not found in provider [${provider.name}]. Falling back to first model. ${modelsList[0].name}`
      );
      modelDetails = modelsList[0];
    }
  }
  const dynamicMaxTokens = modelDetails && modelDetails.maxTokenAllowed ? modelDetails.maxTokenAllowed : MAX_TOKENS;
  let systemPrompt = PromptLibrary.getPropmtFromLibrary(promptId || "default", {
    cwd: WORK_DIR,
    allowedHtmlElements: allowedHTMLElements,
    modificationTagName: MODIFICATIONS_TAG_NAME
  }) ?? getSystemPrompt();
  if (files && contextFiles && contextOptimization) {
    const codeContext = createFilesContext(contextFiles, true);
    const filePaths = getFilePaths(files);
    systemPrompt = `${systemPrompt}
Below are all the files present in the project:
---
${filePaths.join("\n")}
---

Below is the artifact containing the context loaded into context buffer for you to have knowledge of and might need changes to fullfill current user request.
CONTEXT BUFFER:
---
${codeContext}
---
`;
    if (summary) {
      systemPrompt = `${systemPrompt}
      below is the chat history till now
CHAT SUMMARY:
---
${props.summary}
---
`;
      if (props.messageSliceId) {
        processedMessages = processedMessages.slice(props.messageSliceId);
      } else {
        const lastMessage = processedMessages.pop();
        if (lastMessage) {
          processedMessages = [lastMessage];
        }
      }
    }
  }
  logger$3.info(`Sending llm call to ${provider.name} with model ${modelDetails.name}`);
  return await streamText$1({
    model: provider.getModelInstance({
      model: modelDetails.name,
      serverEnv,
      apiKeys,
      providerSettings
    }),
    system: systemPrompt,
    maxTokens: dynamicMaxTokens,
    messages: convertToCoreMessages(processedMessages),
    ...options
  });
}

async function action$2(args) {
  return enhancerAction(args);
}
async function enhancerAction({ context, request }) {
  const { message, model, provider } = await request.json();
  const { name: providerName } = provider;
  if (!model || typeof model !== "string") {
    throw new Response("Invalid or missing model", {
      status: 400,
      statusText: "Bad Request"
    });
  }
  if (!providerName || typeof providerName !== "string") {
    throw new Response("Invalid or missing provider", {
      status: 400,
      statusText: "Bad Request"
    });
  }
  const cookieHeader = request.headers.get("Cookie");
  const apiKeys = getApiKeysFromCookie(cookieHeader);
  const providerSettings = getProviderSettingsFromCookie(cookieHeader);
  try {
    const result = await streamText({
      messages: [
        {
          role: "user",
          content: `[Model: ${model}]

[Provider: ${providerName}]

` + stripIndents`
            You are a professional prompt engineer specializing in crafting precise, effective prompts.
            Your task is to enhance prompts by making them more specific, actionable, and effective.

            I want you to improve the user prompt that is wrapped in \`<original_prompt>\` tags.

            For valid prompts:
            - Make instructions explicit and unambiguous
            - Add relevant context and constraints
            - Remove redundant information
            - Maintain the core intent
            - Ensure the prompt is self-contained
            - Use professional language

            For invalid or unclear prompts:
            - Respond with clear, professional guidance
            - Keep responses concise and actionable
            - Maintain a helpful, constructive tone
            - Focus on what the user should provide
            - Use a standard template for consistency

            IMPORTANT: Your response must ONLY contain the enhanced prompt text.
            Do not include any explanations, metadata, or wrapper tags.

            <original_prompt>
              ${message}
            </original_prompt>
          `
        }
      ],
      env: context.cloudflare?.env,
      apiKeys,
      providerSettings
    });
    return new Response(result.textStream, {
      status: 200,
      headers: {
        "Content-Type": "text/event-stream",
        Connection: "keep-alive",
        "Cache-Control": "no-cache",
        "Text-Encoding": "chunked"
      }
    });
  } catch (error) {
    console.log(error);
    if (error instanceof Error && error.message?.includes("API key")) {
      throw new Response("Invalid or missing API key", {
        status: 401,
        statusText: "Unauthorized"
      });
    }
    throw new Response(null, {
      status: 500,
      statusText: "Internal Server Error"
    });
  }
}

const route5 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  action: action$2
}, Symbol.toStringTag, { value: 'Module' }));

const __vite_import_meta_env__ = {"BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "SSR": true, "VITE_USER_NODE_ENV": "production"};
async function action$1(args) {
  return llmCallAction(args);
}
async function getModelList(options) {
  const llmManager = LLMManager.getInstance(__vite_import_meta_env__);
  return llmManager.updateModelList(options);
}
const logger$2 = createScopedLogger("api.llmcall");
async function llmCallAction({ context, request }) {
  const { system, message, model, provider, streamOutput } = await request.json();
  const { name: providerName } = provider;
  if (!model || typeof model !== "string") {
    throw new Response("Invalid or missing model", {
      status: 400,
      statusText: "Bad Request"
    });
  }
  if (!providerName || typeof providerName !== "string") {
    throw new Response("Invalid or missing provider", {
      status: 400,
      statusText: "Bad Request"
    });
  }
  const cookieHeader = request.headers.get("Cookie");
  const apiKeys = getApiKeysFromCookie(cookieHeader);
  const providerSettings = getProviderSettingsFromCookie(cookieHeader);
  if (streamOutput) {
    try {
      const result = await streamText({
        options: {
          system
        },
        messages: [
          {
            role: "user",
            content: `${message}`
          }
        ],
        env: context.cloudflare?.env,
        apiKeys,
        providerSettings
      });
      return new Response(result.textStream, {
        status: 200,
        headers: {
          "Content-Type": "text/plain; charset=utf-8"
        }
      });
    } catch (error) {
      console.log(error);
      if (error instanceof Error && error.message?.includes("API key")) {
        throw new Response("Invalid or missing API key", {
          status: 401,
          statusText: "Unauthorized"
        });
      }
      throw new Response(null, {
        status: 500,
        statusText: "Internal Server Error"
      });
    }
  } else {
    try {
      const models = await getModelList({ apiKeys, providerSettings, serverEnv: context.cloudflare?.env });
      const modelDetails = models.find((m) => m.name === model);
      if (!modelDetails) {
        throw new Error("Model not found");
      }
      const dynamicMaxTokens = modelDetails && modelDetails.maxTokenAllowed ? modelDetails.maxTokenAllowed : MAX_TOKENS;
      const providerInfo = PROVIDER_LIST.find((p) => p.name === provider.name);
      if (!providerInfo) {
        throw new Error("Provider not found");
      }
      logger$2.info(`Generating response Provider: ${provider.name}, Model: ${modelDetails.name}`);
      const result = await generateText({
        system,
        messages: [
          {
            role: "user",
            content: `${message}`
          }
        ],
        model: providerInfo.getModelInstance({
          model: modelDetails.name,
          serverEnv: context.cloudflare?.env,
          apiKeys,
          providerSettings
        }),
        maxTokens: dynamicMaxTokens,
        toolChoice: "none"
      });
      logger$2.info(`Generated response`);
      return new Response(JSON.stringify(result), {
        status: 200,
        headers: {
          "Content-Type": "application/json"
        }
      });
    } catch (error) {
      console.log(error);
      if (error instanceof Error && error.message?.includes("API key")) {
        throw new Response("Invalid or missing API key", {
          status: 401,
          statusText: "Unauthorized"
        });
      }
      throw new Response(null, {
        status: 500,
        statusText: "Internal Server Error"
      });
    }
  }
}

const route6 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  action: action$1
}, Symbol.toStringTag, { value: 'Module' }));

class SwitchableStream extends TransformStream {
  _controller = null;
  _currentReader = null;
  _switches = 0;
  constructor() {
    let controllerRef;
    super({
      start(controller) {
        controllerRef = controller;
      }
    });
    if (controllerRef === undefined) {
      throw new Error("Controller not properly initialized");
    }
    this._controller = controllerRef;
  }
  async switchSource(newStream) {
    if (this._currentReader) {
      await this._currentReader.cancel();
    }
    this._currentReader = newStream.getReader();
    this._pumpStream();
    this._switches++;
  }
  async _pumpStream() {
    if (!this._currentReader || !this._controller) {
      throw new Error("Stream is not properly initialized");
    }
    try {
      while (true) {
        const { done, value } = await this._currentReader.read();
        if (done) {
          break;
        }
        this._controller.enqueue(value);
      }
    } catch (error) {
      console.log(error);
      this._controller.error(error);
    }
  }
  close() {
    if (this._currentReader) {
      this._currentReader.cancel();
    }
    this._controller?.terminate();
  }
  get switches() {
    return this._switches;
  }
}

const logger$1 = createScopedLogger("create-summary");
async function createSummary(props) {
  const { messages, env: serverEnv, apiKeys, providerSettings, onFinish } = props;
  let currentModel = DEFAULT_MODEL;
  let currentProvider = DEFAULT_PROVIDER.name;
  const processedMessages = messages.map((message) => {
    if (message.role === "user") {
      const { model, provider: provider2, content } = extractPropertiesFromMessage(message);
      currentModel = model;
      currentProvider = provider2;
      return { ...message, content };
    } else if (message.role == "assistant") {
      let content = message.content;
      content = simplifyBoltActions(content);
      content = content.replace(/<div class=\\"__boltThought__\\">.*?<\/div>/s, "");
      content = content.replace(/<think>.*?<\/think>/s, "");
      return { ...message, content };
    }
    return message;
  });
  const provider = PROVIDER_LIST.find((p) => p.name === currentProvider) || DEFAULT_PROVIDER;
  const staticModels = LLMManager.getInstance().getStaticModelListFromProvider(provider);
  let modelDetails = staticModels.find((m) => m.name === currentModel);
  if (!modelDetails) {
    const modelsList = [
      ...provider.staticModels || [],
      ...await LLMManager.getInstance().getModelListFromProvider(provider, {
        apiKeys,
        providerSettings,
        serverEnv
      })
    ];
    if (!modelsList.length) {
      throw new Error(`No models found for provider ${provider.name}`);
    }
    modelDetails = modelsList.find((m) => m.name === currentModel);
    if (!modelDetails) {
      logger$1.warn(
        `MODEL [${currentModel}] not found in provider [${provider.name}]. Falling back to first model. ${modelsList[0].name}`
      );
      modelDetails = modelsList[0];
    }
  }
  let slicedMessages = processedMessages;
  const { summary } = extractCurrentContext(processedMessages);
  let summaryText = undefined;
  let chatId = undefined;
  if (summary && summary.type === "chatSummary") {
    chatId = summary.chatId;
    summaryText = `Below is the Chat Summary till now, this is chat summary before the conversation provided by the user 
you should also use this as historical message while providing the response to the user.        
${summary.summary}`;
    if (chatId) {
      let index = 0;
      for (let i = 0; i < processedMessages.length; i++) {
        if (processedMessages[i].id === chatId) {
          index = i;
          break;
        }
      }
      slicedMessages = processedMessages.slice(index + 1);
    }
  }
  logger$1.debug("Sliced Messages:", slicedMessages.length);
  const extractTextContent = (message) => Array.isArray(message.content) ? message.content.find((item) => item.type === "text")?.text || "" : message.content;
  const resp = await generateText({
    system: `
        You are a software engineer. You are working on a project. you need to summarize the work till now and provide a summary of the chat till now.

        Please only use the following format to generate the summary:
---
# Project Overview
- **Project**: {project_name} - {brief_description}
- **Current Phase**: {phase}
- **Tech Stack**: {languages}, {frameworks}, {key_dependencies}
- **Environment**: {critical_env_details}

# Conversation Context
- **Last Topic**: {main_discussion_point}
- **Key Decisions**: {important_decisions_made}
- **User Context**:
  - Technical Level: {expertise_level}
  - Preferences: {coding_style_preferences}
  - Communication: {preferred_explanation_style}

# Implementation Status
## Current State
- **Active Feature**: {feature_in_development}
- **Progress**: {what_works_and_what_doesn't}
- **Blockers**: {current_challenges}

## Code Evolution
- **Recent Changes**: {latest_modifications}
- **Working Patterns**: {successful_approaches}
- **Failed Approaches**: {attempted_solutions_that_failed}

# Requirements
- **Implemented**: {completed_features}
- **In Progress**: {current_focus}
- **Pending**: {upcoming_features}
- **Technical Constraints**: {critical_constraints}

# Critical Memory
- **Must Preserve**: {crucial_technical_context}
- **User Requirements**: {specific_user_needs}
- **Known Issues**: {documented_problems}

# Next Actions
- **Immediate**: {next_steps}
- **Open Questions**: {unresolved_issues}

---
Note:
4. Keep entries concise and focused on information needed for continuity


---
        
        RULES:
        * Only provide the whole summary of the chat till now.
        * Do not provide any new information.
        * DO not need to think too much just start writing imidiately
        * do not write any thing other that the summary with with the provided structure
        `,
    prompt: `

Here is the previous summary of the chat:
<old_summary>
${summaryText} 
</old_summary>

Below is the chat after that:
---
<new_chats>
${slicedMessages.map((x) => {
      return `---
[${x.role}] ${extractTextContent(x)}
---`;
    }).join("\n")}
</new_chats>
---

Please provide a summary of the chat till now including the hitorical summary of the chat.
`,
    model: provider.getModelInstance({
      model: currentModel,
      serverEnv,
      apiKeys,
      providerSettings
    })
  });
  const response = resp.text;
  if (onFinish) {
    onFinish(resp);
  }
  return response;
}

async function action(args) {
  return chatAction(args);
}
const logger = createScopedLogger("api.chat");
function parseCookies(cookieHeader) {
  const cookies = {};
  const items = cookieHeader.split(";").map((cookie) => cookie.trim());
  items.forEach((item) => {
    const [name, ...rest] = item.split("=");
    if (name && rest) {
      const decodedName = decodeURIComponent(name.trim());
      const decodedValue = decodeURIComponent(rest.join("=").trim());
      cookies[decodedName] = decodedValue;
    }
  });
  return cookies;
}
async function chatAction({ context, request }) {
  const { messages, files, promptId, contextOptimization } = await request.json();
  const cookieHeader = request.headers.get("Cookie");
  const apiKeys = JSON.parse(parseCookies(cookieHeader || "").apiKeys || "{}");
  const providerSettings = JSON.parse(
    parseCookies(cookieHeader || "").providers || "{}"
  );
  const stream = new SwitchableStream();
  const cumulativeUsage = {
    completionTokens: 0,
    promptTokens: 0,
    totalTokens: 0
  };
  const encoder = new TextEncoder();
  let progressCounter = 1;
  try {
    const totalMessageContent = messages.reduce((acc, message) => acc + message.content, "");
    logger.debug(`Total message length: ${totalMessageContent.split(" ").length}, words`);
    let lastChunk = void 0;
    const dataStream = createDataStream({
      async execute(dataStream2) {
        const filePaths = getFilePaths(files || {});
        let filteredFiles = void 0;
        let summary = void 0;
        let messageSliceId = 0;
        if (messages.length > 3) {
          messageSliceId = messages.length - 3;
        }
        if (filePaths.length > 0 && contextOptimization) {
          logger.debug("Generating Chat Summary");
          dataStream2.writeData({
            type: "progress",
            label: "summary",
            status: "in-progress",
            order: progressCounter++,
            message: "Analysing Request"
          });
          console.log(`Messages count: ${messages.length}`);
          summary = await createSummary({
            messages: [...messages],
            env: context.cloudflare?.env,
            apiKeys,
            providerSettings,
            promptId,
            contextOptimization,
            onFinish(resp) {
              if (resp.usage) {
                logger.debug("createSummary token usage", JSON.stringify(resp.usage));
                cumulativeUsage.completionTokens += resp.usage.completionTokens || 0;
                cumulativeUsage.promptTokens += resp.usage.promptTokens || 0;
                cumulativeUsage.totalTokens += resp.usage.totalTokens || 0;
              }
            }
          });
          dataStream2.writeData({
            type: "progress",
            label: "summary",
            status: "complete",
            order: progressCounter++,
            message: "Analysis Complete"
          });
          dataStream2.writeMessageAnnotation({
            type: "chatSummary",
            summary,
            chatId: messages.slice(-1)?.[0]?.id
          });
          logger.debug("Updating Context Buffer");
          dataStream2.writeData({
            type: "progress",
            label: "context",
            status: "in-progress",
            order: progressCounter++,
            message: "Determining Files to Read"
          });
          console.log(`Messages count: ${messages.length}`);
          filteredFiles = await selectContext({
            messages: [...messages],
            env: context.cloudflare?.env,
            apiKeys,
            files,
            providerSettings,
            promptId,
            contextOptimization,
            summary,
            onFinish(resp) {
              if (resp.usage) {
                logger.debug("selectContext token usage", JSON.stringify(resp.usage));
                cumulativeUsage.completionTokens += resp.usage.completionTokens || 0;
                cumulativeUsage.promptTokens += resp.usage.promptTokens || 0;
                cumulativeUsage.totalTokens += resp.usage.totalTokens || 0;
              }
            }
          });
          if (filteredFiles) {
            logger.debug(`files in context : ${JSON.stringify(Object.keys(filteredFiles))}`);
          }
          dataStream2.writeMessageAnnotation({
            type: "codeContext",
            files: Object.keys(filteredFiles).map((key) => {
              let path = key;
              if (path.startsWith(WORK_DIR)) {
                path = path.replace(WORK_DIR, "");
              }
              return path;
            })
          });
          dataStream2.writeData({
            type: "progress",
            label: "context",
            status: "complete",
            order: progressCounter++,
            message: "Code Files Selected"
          });
        }
        const options = {
          toolChoice: "none",
          onFinish: async ({ text: content, finishReason, usage }) => {
            logger.debug("usage", JSON.stringify(usage));
            if (usage) {
              cumulativeUsage.completionTokens += usage.completionTokens || 0;
              cumulativeUsage.promptTokens += usage.promptTokens || 0;
              cumulativeUsage.totalTokens += usage.totalTokens || 0;
            }
            if (finishReason !== "length") {
              dataStream2.writeMessageAnnotation({
                type: "usage",
                value: {
                  completionTokens: cumulativeUsage.completionTokens,
                  promptTokens: cumulativeUsage.promptTokens,
                  totalTokens: cumulativeUsage.totalTokens
                }
              });
              dataStream2.writeData({
                type: "progress",
                label: "response",
                status: "complete",
                order: progressCounter++,
                message: "Response Generated"
              });
              await new Promise((resolve) => setTimeout(resolve, 0));
              return;
            }
            if (stream.switches >= MAX_RESPONSE_SEGMENTS) {
              throw Error("Cannot continue message: Maximum segments reached");
            }
            const switchesLeft = MAX_RESPONSE_SEGMENTS - stream.switches;
            logger.info(`Reached max token limit (${MAX_TOKENS}): Continuing message (${switchesLeft} switches left)`);
            const lastUserMessage = messages.filter((x) => x.role == "user").slice(-1)[0];
            const { model, provider } = extractPropertiesFromMessage(lastUserMessage);
            messages.push({ id: generateId$1(), role: "assistant", content });
            messages.push({
              id: generateId$1(),
              role: "user",
              content: `[Model: ${model}]

[Provider: ${provider}]

${CONTINUE_PROMPT}`
            });
            const result2 = await streamText({
              messages,
              env: context.cloudflare?.env,
              options,
              apiKeys,
              files,
              providerSettings,
              promptId,
              contextOptimization,
              contextFiles: filteredFiles,
              summary,
              messageSliceId
            });
            result2.mergeIntoDataStream(dataStream2);
            (async () => {
              for await (const part of result2.fullStream) {
                if (part.type === "error") {
                  const error = part.error;
                  logger.error(`${error}`);
                  return;
                }
              }
            })();
            return;
          }
        };
        dataStream2.writeData({
          type: "progress",
          label: "response",
          status: "in-progress",
          order: progressCounter++,
          message: "Generating Response"
        });
        const result = await streamText({
          messages,
          env: context.cloudflare?.env,
          options,
          apiKeys,
          files,
          providerSettings,
          promptId,
          contextOptimization,
          contextFiles: filteredFiles,
          summary,
          messageSliceId
        });
        (async () => {
          for await (const part of result.fullStream) {
            if (part.type === "error") {
              const error = part.error;
              logger.error(`${error}`);
              return;
            }
          }
        })();
        result.mergeIntoDataStream(dataStream2);
      },
      onError: (error) => `Custom error: ${error.message}`
    }).pipeThrough(
      new TransformStream({
        transform: (chunk, controller) => {
          if (!lastChunk) {
            lastChunk = " ";
          }
          if (typeof chunk === "string") {
            if (chunk.startsWith("g") && !lastChunk.startsWith("g")) {
              controller.enqueue(encoder.encode(`0: "<div class=\\"__boltThought__\\">"
`));
            }
            if (lastChunk.startsWith("g") && !chunk.startsWith("g")) {
              controller.enqueue(encoder.encode(`0: "</div>\\n"
`));
            }
          }
          lastChunk = chunk;
          let transformedChunk = chunk;
          if (typeof chunk === "string" && chunk.startsWith("g")) {
            let content = chunk.split(":").slice(1).join(":");
            if (content.endsWith("\n")) {
              content = content.slice(0, content.length - 1);
            }
            transformedChunk = `0:${content}
`;
          }
          const str = typeof transformedChunk === "string" ? transformedChunk : JSON.stringify(transformedChunk);
          controller.enqueue(encoder.encode(str));
        }
      })
    );
    return new Response(dataStream, {
      status: 200,
      headers: {
        "Content-Type": "text/event-stream; charset=utf-8",
        Connection: "keep-alive",
        "Cache-Control": "no-cache",
        "Text-Encoding": "chunked"
      }
    });
  } catch (error) {
    logger.error(error);
    if (error.message?.includes("API key")) {
      throw new Response("Invalid or missing API key", {
        status: 401,
        statusText: "Unauthorized"
      });
    }
    throw new Response(null, {
      status: 500,
      statusText: "Internal Server Error"
    });
  }
}

const route8 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  action
}, Symbol.toStringTag, { value: 'Module' }));

function classNames(...args) {
  let classes = "";
  for (const arg of args) {
    classes = appendClass(classes, parseValue(arg));
  }
  return classes;
}
function parseValue(arg) {
  if (typeof arg === "string" || typeof arg === "number") {
    return arg;
  }
  if (typeof arg !== "object") {
    return "";
  }
  if (Array.isArray(arg)) {
    return classNames(...arg);
  }
  let classes = "";
  for (const key in arg) {
    if (arg[key]) {
      classes = appendClass(classes, key);
    }
  }
  return classes;
}
function appendClass(value, newClass) {
  if (!newClass) {
    return value;
  }
  if (value) {
    return value + " " + newClass;
  }
  return value + newClass;
}

const IconButton = memo(
  forwardRef(
    ({
      icon,
      size = "xl",
      className,
      iconClassName,
      disabledClassName,
      disabled = false,
      title,
      onClick,
      children
    }, ref) => {
      return /* @__PURE__ */ jsx(
        "button",
        {
          ref,
          className: classNames(
            "flex items-center text-bolt-elements-item-contentDefault bg-transparent enabled:hover:text-bolt-elements-item-contentActive rounded-md p-1 enabled:hover:bg-bolt-elements-item-backgroundActive disabled:cursor-not-allowed",
            {
              [classNames("opacity-30", disabledClassName)]: disabled
            },
            className
          ),
          title,
          disabled,
          onClick: (event) => {
            if (disabled) {
              return;
            }
            onClick?.(event);
          },
          children: children ? children : /* @__PURE__ */ jsx("div", { className: classNames(icon, getIconSize(size), iconClassName) })
        }
      );
    }
  )
);
function getIconSize(size) {
  if (size === "sm") {
    return "text-sm";
  } else if (size === "md") {
    return "text-md";
  } else if (size === "lg") {
    return "text-lg";
  } else if (size === "xl") {
    return "text-xl";
  } else {
    return "text-2xl";
  }
}

const Workbench = undefined;

const Messages = undefined;

const SendButton = undefined;

const providerEnvKeyStatusCache = {};
const apiKeyMemoizeCache = {};
function getApiKeysFromCookies() {
  const storedApiKeys = Cookies.get("apiKeys");
  let parsedKeys = {};
  if (storedApiKeys) {
    parsedKeys = apiKeyMemoizeCache[storedApiKeys];
    if (!parsedKeys) {
      parsedKeys = apiKeyMemoizeCache[storedApiKeys] = JSON.parse(storedApiKeys);
    }
  }
  return parsedKeys;
}
const APIKeyManager = ({ provider, apiKey, setApiKey }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [tempKey, setTempKey] = useState(apiKey);
  const [isEnvKeySet, setIsEnvKeySet] = useState(false);
  useEffect(() => {
    const savedKeys = getApiKeysFromCookies();
    const savedKey = savedKeys[provider.name] || "";
    setTempKey(savedKey);
    setApiKey(savedKey);
    setIsEditing(false);
  }, [provider.name]);
  const checkEnvApiKey = useCallback(async () => {
    if (providerEnvKeyStatusCache[provider.name] !== undefined) {
      setIsEnvKeySet(providerEnvKeyStatusCache[provider.name]);
      return;
    }
    try {
      const response = await fetch(`/api/check-env-key?provider=${encodeURIComponent(provider.name)}`);
      const data = await response.json();
      const isSet = data.isSet;
      providerEnvKeyStatusCache[provider.name] = isSet;
      setIsEnvKeySet(isSet);
    } catch (error) {
      console.error("Failed to check environment API key:", error);
      setIsEnvKeySet(false);
    }
  }, [provider.name]);
  useEffect(() => {
    checkEnvApiKey();
  }, [checkEnvApiKey]);
  const handleSave = () => {
    setApiKey(tempKey);
    const currentKeys = getApiKeysFromCookies();
    const newKeys = { ...currentKeys, [provider.name]: tempKey };
    Cookies.set("apiKeys", JSON.stringify(newKeys));
    setIsEditing(false);
  };
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between py-3 px-1", children: [
    /* @__PURE__ */ jsx("div", { className: "flex items-center gap-2 flex-1", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxs("span", { className: "text-sm font-medium text-bolt-elements-textSecondary", children: [
        provider?.name,
        " API Key:"
      ] }),
      !isEditing && /* @__PURE__ */ jsx("div", { className: "flex items-center gap-2", children: apiKey ? /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("div", { className: "i-ph:check-circle-fill text-green-500 w-4 h-4" }),
        /* @__PURE__ */ jsx("span", { className: "text-xs text-green-500", children: "Set via UI" })
      ] }) : isEnvKeySet ? /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("div", { className: "i-ph:check-circle-fill text-green-500 w-4 h-4" }),
        /* @__PURE__ */ jsx("span", { className: "text-xs text-green-500", children: "Set via environment variable" })
      ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("div", { className: "i-ph:x-circle-fill text-red-500 w-4 h-4" }),
        /* @__PURE__ */ jsx("span", { className: "text-xs text-red-500", children: "Not Set (Please set via UI or ENV_VAR)" })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "flex items-center gap-2 shrink-0", children: isEditing ? /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "password",
          value: tempKey,
          placeholder: "Enter API Key",
          onChange: (e) => setTempKey(e.target.value),
          className: "w-[300px] px-3 py-1.5 text-sm rounded border border-bolt-elements-borderColor \n                        bg-bolt-elements-prompt-background text-bolt-elements-textPrimary \n                        focus:outline-none focus:ring-2 focus:ring-bolt-elements-focus"
        }
      ),
      /* @__PURE__ */ jsx(
        IconButton,
        {
          onClick: handleSave,
          title: "Save API Key",
          className: "bg-green-500/10 hover:bg-green-500/20 text-green-500",
          children: /* @__PURE__ */ jsx("div", { className: "i-ph:check w-4 h-4" })
        }
      ),
      /* @__PURE__ */ jsx(
        IconButton,
        {
          onClick: () => setIsEditing(false),
          title: "Cancel",
          className: "bg-red-500/10 hover:bg-red-500/20 text-red-500",
          children: /* @__PURE__ */ jsx("div", { className: "i-ph:x w-4 h-4" })
        }
      )
    ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(
        IconButton,
        {
          onClick: () => setIsEditing(true),
          title: "Edit API Key",
          className: "bg-blue-500/10 hover:bg-blue-500/20 text-blue-500",
          children: /* @__PURE__ */ jsx("div", { className: "i-ph:pencil-simple w-4 h-4" })
        }
      ),
      provider?.getApiKeyLink && !apiKey && /* @__PURE__ */ jsxs(
        IconButton,
        {
          onClick: () => window.open(provider?.getApiKeyLink),
          title: "Get API Key",
          className: "bg-purple-500/10 hover:bg-purple-500/20 text-purple-500 flex items-center gap-2",
          children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs whitespace-nowrap", children: provider?.labelForGetApiKey || "Get API Key" }),
            /* @__PURE__ */ jsx("div", { className: `${provider?.icon || "i-ph:key"} w-4 h-4` })
          ]
        }
      )
    ] }) })
  ] });
};

const BaseChat$1 = "s";
const Chat$1 = "t";
const PromptEffectContainer = "u";
const PromptEffectLine = "v";
const PromptShine = "w";
const styles$1 = {
	BaseChat: BaseChat$1,
	Chat: Chat$1,
	PromptEffectContainer: PromptEffectContainer,
	PromptEffectLine: PromptEffectLine,
	PromptShine: PromptShine
};

const WithTooltip = forwardRef(
  ({
    tooltip,
    children,
    sideOffset = 5,
    className = "",
    arrowClassName = "",
    tooltipStyle = {},
    position = "top",
    maxWidth = 250,
    delay = 0
  }, _ref) => {
    return /* @__PURE__ */ jsxs(Tooltip.Root, { delayDuration: delay, children: [
      /* @__PURE__ */ jsx(Tooltip.Trigger, { asChild: true, children }),
      /* @__PURE__ */ jsx(Tooltip.Portal, { children: /* @__PURE__ */ jsxs(
        Tooltip.Content,
        {
          side: position,
          className: `
              z-[2000]
              px-2.5
              py-1.5
              max-h-[300px]
              select-none
              rounded-md
              bg-bolt-elements-background-depth-3
              text-bolt-elements-textPrimary
              text-sm
              leading-tight
              shadow-lg
              animate-in
              fade-in-0
              zoom-in-95
              data-[state=closed]:animate-out
              data-[state=closed]:fade-out-0
              data-[state=closed]:zoom-out-95
              ${className}
            `,
          sideOffset,
          style: {
            maxWidth,
            ...tooltipStyle
          },
          children: [
            /* @__PURE__ */ jsx("div", { className: "break-words", children: tooltip }),
            /* @__PURE__ */ jsx(
              Tooltip.Arrow,
              {
                className: `
                fill-bolt-elements-background-depth-3
                ${arrowClassName}
              `,
                width: 12,
                height: 6
              }
            )
          ]
        }
      ) })
    ] });
  }
);

const ExportChatButton = ({ exportChat }) => {
  return /* @__PURE__ */ jsx(WithTooltip, { tooltip: "Export Chat", children: /* @__PURE__ */ jsx(IconButton, { title: "Export Chat", onClick: () => exportChat?.(), children: /* @__PURE__ */ jsx("div", { className: "i-ph:download-simple text-xl" }) }) });
};

const IGNORE_PATTERNS$1 = [
  "node_modules/**",
  ".git/**",
  "dist/**",
  "build/**",
  ".next/**",
  "coverage/**",
  ".cache/**",
  ".vscode/**",
  ".idea/**",
  "**/*.log",
  "**/.DS_Store",
  "**/npm-debug.log*",
  "**/yarn-debug.log*",
  "**/yarn-error.log*"
];
const MAX_FILES = 1e3;
const ig$1 = ignore().add(IGNORE_PATTERNS$1);
const generateId = () => Math.random().toString(36).substring(2, 15);
const isBinaryFile = async (file) => {
  const chunkSize = 1024;
  const buffer = new Uint8Array(await file.slice(0, chunkSize).arrayBuffer());
  for (let i = 0; i < buffer.length; i++) {
    const byte = buffer[i];
    if (byte === 0 || byte < 32 && byte !== 9 && byte !== 10 && byte !== 13) {
      return true;
    }
  }
  return false;
};
const shouldIncludeFile = (path) => {
  return !ig$1.ignores(path);
};

async function detectProjectCommands(files) {
  const hasFile = (name) => files.some((f) => f.path.endsWith(name));
  if (hasFile("package.json")) {
    const packageJsonFile = files.find((f) => f.path.endsWith("package.json"));
    if (!packageJsonFile) {
      return { type: "", setupCommand: "", followupMessage: "" };
    }
    try {
      const packageJson = JSON.parse(packageJsonFile.content);
      const scripts = packageJson?.scripts || {};
      const preferredCommands = ["dev", "start", "preview"];
      const availableCommand = preferredCommands.find((cmd) => scripts[cmd]);
      if (availableCommand) {
        return {
          type: "Node.js",
          setupCommand: `npm install`,
          startCommand: `npm run ${availableCommand}`,
          followupMessage: `Found "${availableCommand}" script in package.json. Running "npm run ${availableCommand}" after installation.`
        };
      }
      return {
        type: "Node.js",
        setupCommand: "npm install",
        followupMessage: "Would you like me to inspect package.json to determine the available scripts for running this project?"
      };
    } catch (error) {
      console.error("Error parsing package.json:", error);
      return { type: "", setupCommand: "", followupMessage: "" };
    }
  }
  if (hasFile("index.html")) {
    return {
      type: "Static",
      startCommand: "npx --yes serve",
      followupMessage: ""
    };
  }
  return { type: "", setupCommand: "", followupMessage: "" };
}
function createCommandsMessage(commands) {
  if (!commands.setupCommand && !commands.startCommand) {
    return null;
  }
  let commandString = "";
  if (commands.setupCommand) {
    commandString += `
<boltAction type="shell">${commands.setupCommand}</boltAction>`;
  }
  if (commands.startCommand) {
    commandString += `
<boltAction type="start">${commands.startCommand}</boltAction>
`;
  }
  return {
    role: "assistant",
    content: `
<boltArtifact id="project-setup" title="Project Setup">
${commandString}
</boltArtifact>${commands.followupMessage ? `

${commands.followupMessage}` : ""}`,
    id: generateId(),
    createdAt: /* @__PURE__ */ new Date()
  };
}
function escapeBoltArtifactTags(input) {
  const regex = /(<boltArtifact[^>]*>)([\s\S]*?)(<\/boltArtifact>)/g;
  return input.replace(regex, (match, openTag, content, closeTag) => {
    const escapedOpenTag = openTag.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const escapedCloseTag = closeTag.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    return `${escapedOpenTag}${content}${escapedCloseTag}`;
  });
}
function escapeBoltAActionTags(input) {
  const regex = /(<boltAction[^>]*>)([\s\S]*?)(<\/boltAction>)/g;
  return input.replace(regex, (match, openTag, content, closeTag) => {
    const escapedOpenTag = openTag.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const escapedCloseTag = closeTag.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    return `${escapedOpenTag}${content}${escapedCloseTag}`;
  });
}
function escapeBoltTags(input) {
  return escapeBoltArtifactTags(escapeBoltAActionTags(input));
}

const createChatFromFolder = async (files, binaryFiles, folderName) => {
  const fileArtifacts = await Promise.all(
    files.map(async (file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
          const content = reader.result;
          const relativePath = file.webkitRelativePath.split("/").slice(1).join("/");
          resolve({
            content,
            path: relativePath
          });
        };
        reader.onerror = reject;
        reader.readAsText(file);
      });
    })
  );
  const commands = await detectProjectCommands(fileArtifacts);
  const commandsMessage = createCommandsMessage(commands);
  const binaryFilesMessage = binaryFiles.length > 0 ? `

Skipped ${binaryFiles.length} binary files:
${binaryFiles.map((f) => `- ${f}`).join("\n")}` : "";
  const filesMessage = {
    role: "assistant",
    content: `I've imported the contents of the "${folderName}" folder.${binaryFilesMessage}

<boltArtifact id="imported-files" title="Imported Files" type="bundled" >
${fileArtifacts.map(
      (file) => `<boltAction type="file" filePath="${file.path}">
${escapeBoltTags(file.content)}
</boltAction>`
    ).join("\n\n")}
</boltArtifact>`,
    id: generateId(),
    createdAt: /* @__PURE__ */ new Date()
  };
  const userMessage = {
    role: "user",
    id: generateId(),
    content: `Import the "${folderName}" folder`,
    createdAt: /* @__PURE__ */ new Date()
  };
  const messages = [userMessage, filesMessage];
  if (commandsMessage) {
    messages.push({
      role: "user",
      id: generateId(),
      content: "Setup the codebase and Start the application"
    });
    messages.push(commandsMessage);
  }
  return messages;
};

const ImportFolderButton = ({ className, importChat }) => {
  const [isLoading, setIsLoading] = useState(false);
  const handleFileChange = async (e) => {
    const allFiles = Array.from(e.target.files || []);
    const filteredFiles = allFiles.filter((file) => {
      const path = file.webkitRelativePath.split("/").slice(1).join("/");
      const include = shouldIncludeFile(path);
      return include;
    });
    if (filteredFiles.length === 0) {
      const error = new Error("No valid files found");
      logStore.logError("File import failed - no valid files", error, { folderName: "Unknown Folder" });
      toast.error("No files found in the selected folder");
      return;
    }
    if (filteredFiles.length > MAX_FILES) {
      const error = new Error(`Too many files: ${filteredFiles.length}`);
      logStore.logError("File import failed - too many files", error, {
        fileCount: filteredFiles.length,
        maxFiles: MAX_FILES
      });
      toast.error(
        `This folder contains ${filteredFiles.length.toLocaleString()} files. This product is not yet optimized for very large projects. Please select a folder with fewer than ${MAX_FILES.toLocaleString()} files.`
      );
      return;
    }
    const folderName = filteredFiles[0]?.webkitRelativePath.split("/")[0] || "Unknown Folder";
    setIsLoading(true);
    const loadingToast = toast.loading(`Importing ${folderName}...`);
    try {
      const fileChecks = await Promise.all(
        filteredFiles.map(async (file) => ({
          file,
          isBinary: await isBinaryFile(file)
        }))
      );
      const textFiles = fileChecks.filter((f) => !f.isBinary).map((f) => f.file);
      const binaryFilePaths = fileChecks.filter((f) => f.isBinary).map((f) => f.file.webkitRelativePath.split("/").slice(1).join("/"));
      if (textFiles.length === 0) {
        const error = new Error("No text files found");
        logStore.logError("File import failed - no text files", error, { folderName });
        toast.error("No text files found in the selected folder");
        return;
      }
      if (binaryFilePaths.length > 0) {
        logStore.logWarning(`Skipping binary files during import`, {
          folderName,
          binaryCount: binaryFilePaths.length
        });
        toast.info(`Skipping ${binaryFilePaths.length} binary files`);
      }
      const messages = await createChatFromFolder(textFiles, binaryFilePaths, folderName);
      if (importChat) {
        await importChat(folderName, [...messages]);
      }
      logStore.logSystem("Folder imported successfully", {
        folderName,
        textFileCount: textFiles.length,
        binaryFileCount: binaryFilePaths.length
      });
      toast.success("Folder imported successfully");
    } catch (error) {
      logStore.logError("Failed to import folder", error, { folderName });
      console.error("Failed to import folder:", error);
      toast.error("Failed to import folder");
    } finally {
      setIsLoading(false);
      toast.dismiss(loadingToast);
      e.target.value = "";
    }
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "input",
      {
        type: "file",
        id: "folder-import",
        className: "hidden",
        webkitdirectory: "",
        directory: "",
        onChange: handleFileChange,
        ...{}
      }
    ),
    /* @__PURE__ */ jsxs(
      "button",
      {
        onClick: () => {
          const input = document.getElementById("folder-import");
          input?.click();
        },
        className,
        disabled: isLoading,
        children: [
          /* @__PURE__ */ jsx("div", { className: "i-ph:upload-simple" }),
          isLoading ? "Importing..." : "Import Folder"
        ]
      }
    )
  ] });
};

function ImportButtons(importChat) {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center w-auto", children: [
    /* @__PURE__ */ jsx(
      "input",
      {
        type: "file",
        id: "chat-import",
        className: "hidden",
        accept: ".json",
        onChange: async (e) => {
          const file = e.target.files?.[0];
          if (file && importChat) {
            try {
              const reader = new FileReader();
              reader.onload = async (e2) => {
                try {
                  const content = e2.target?.result;
                  const data = JSON.parse(content);
                  if (Array.isArray(data.messages)) {
                    await importChat(data.description || "Imported Chat", data.messages);
                    toast.success("Chat imported successfully");
                    return;
                  }
                  toast.error("Invalid chat file format");
                } catch (error) {
                  if (error instanceof Error) {
                    toast.error("Failed to parse chat file: " + error.message);
                  } else {
                    toast.error("Failed to parse chat file");
                  }
                }
              };
              reader.onerror = () => toast.error("Failed to read chat file");
              reader.readAsText(file);
            } catch (error) {
              toast.error(error instanceof Error ? error.message : "Failed to import chat");
            }
            e.target.value = "";
          } else {
            toast.error("Something went wrong");
          }
        }
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "flex flex-col items-center gap-4 max-w-2xl text-center", children: /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
      /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: () => {
            const input = document.getElementById("chat-import");
            input?.click();
          },
          className: "px-4 py-2 rounded-lg border border-bolt-elements-borderColor bg-bolt-elements-prompt-background text-bolt-elements-textPrimary hover:bg-bolt-elements-background-depth-3 transition-all flex items-center gap-2",
          children: [
            /* @__PURE__ */ jsx("div", { className: "i-ph:upload-simple" }),
            "Import Chat"
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        ImportFolderButton,
        {
          importChat,
          className: "px-4 py-2 rounded-lg border border-bolt-elements-borderColor bg-bolt-elements-prompt-background text-bolt-elements-textPrimary hover:bg-bolt-elements-background-depth-3 transition-all flex items-center gap-2"
        }
      )
    ] }) })
  ] });
}

let webcontainer = new Promise(() => {
});

const lookupSavedPassword = (url) => {
  const domain = url.split("/")[2];
  const gitCreds = Cookies.get(`git:${domain}`);
  if (!gitCreds) {
    return null;
  }
  try {
    const { username, password } = JSON.parse(gitCreds || "{}");
    return { username, password };
  } catch (error) {
    console.log(`Failed to parse Git Cookie ${error}`);
    return null;
  }
};
const saveGitAuth = (url, auth) => {
  const domain = url.split("/")[2];
  Cookies.set(`git:${domain}`, JSON.stringify(auth));
};
function useGit() {
  const [ready, setReady] = useState(false);
  const [webcontainer$1, setWebcontainer] = useState();
  const [fs, setFs] = useState();
  const fileData = useRef({});
  useEffect(() => {
    webcontainer.then((container) => {
      fileData.current = {};
      setWebcontainer(container);
      setFs(getFs(container, fileData));
      setReady(true);
    });
  }, []);
  const gitClone = useCallback(
    async (url) => {
      if (!webcontainer$1 || !fs || !ready) {
        throw "Webcontainer not initialized";
      }
      fileData.current = {};
      const headers = {
        "User-Agent": "bolt.diy"
      };
      const auth = lookupSavedPassword(url);
      if (auth) {
        headers.Authorization = `Basic ${Buffer.from(`${auth.username}:${auth.password}`).toString("base64")}`;
      }
      try {
        await git.clone({
          fs,
          http,
          dir: webcontainer$1.workdir,
          url,
          depth: 1,
          singleBranch: true,
          corsProxy: "/api/git-proxy",
          headers,
          onAuth: (url2) => {
            let auth2 = lookupSavedPassword(url2);
            if (auth2) {
              return auth2;
            }
            if (confirm("This repo is password protected. Ready to enter a username & password?")) {
              auth2 = {
                username: prompt("Enter username"),
                password: prompt("Enter password")
              };
              return auth2;
            } else {
              return { cancel: true };
            }
          },
          onAuthFailure: (url2, _auth) => {
            toast.error(`Error Authenticating with ${url2.split("/")[2]}`);
            throw `Error Authenticating with ${url2.split("/")[2]}`;
          },
          onAuthSuccess: (url2, auth2) => {
            saveGitAuth(url2, auth2);
          }
        });
        const data = {};
        for (const [key, value] of Object.entries(fileData.current)) {
          data[key] = value;
        }
        return { workdir: webcontainer$1.workdir, data };
      } catch (error) {
        console.error("Git clone error:", error);
        throw error;
      }
    },
    [webcontainer$1, fs, ready]
  );
  return { ready, gitClone };
}
const getFs = (webcontainer, record) => ({
  promises: {
    readFile: async (path, options) => {
      const encoding = options?.encoding;
      const relativePath = pathUtils.relative(webcontainer.workdir, path);
      try {
        const result = await webcontainer.fs.readFile(relativePath, encoding);
        return result;
      } catch (error) {
        throw error;
      }
    },
    writeFile: async (path, data, options) => {
      const encoding = options.encoding;
      const relativePath = pathUtils.relative(webcontainer.workdir, path);
      if (record.current) {
        record.current[relativePath] = { data, encoding };
      }
      try {
        const result = await webcontainer.fs.writeFile(relativePath, data, { ...options, encoding });
        return result;
      } catch (error) {
        throw error;
      }
    },
    mkdir: async (path, options) => {
      const relativePath = pathUtils.relative(webcontainer.workdir, path);
      try {
        const result = await webcontainer.fs.mkdir(relativePath, { ...options, recursive: true });
        return result;
      } catch (error) {
        throw error;
      }
    },
    readdir: async (path, options) => {
      const relativePath = pathUtils.relative(webcontainer.workdir, path);
      try {
        const result = await webcontainer.fs.readdir(relativePath, options);
        return result;
      } catch (error) {
        throw error;
      }
    },
    rm: async (path, options) => {
      const relativePath = pathUtils.relative(webcontainer.workdir, path);
      try {
        const result = await webcontainer.fs.rm(relativePath, { ...options || {} });
        return result;
      } catch (error) {
        throw error;
      }
    },
    rmdir: async (path, options) => {
      const relativePath = pathUtils.relative(webcontainer.workdir, path);
      try {
        const result = await webcontainer.fs.rm(relativePath, { recursive: true, ...options });
        return result;
      } catch (error) {
        throw error;
      }
    },
    unlink: async (path) => {
      const relativePath = pathUtils.relative(webcontainer.workdir, path);
      try {
        return await webcontainer.fs.rm(relativePath, { recursive: false });
      } catch (error) {
        throw error;
      }
    },
    stat: async (path) => {
      try {
        const relativePath = pathUtils.relative(webcontainer.workdir, path);
        const resp = await webcontainer.fs.readdir(pathUtils.dirname(relativePath), { withFileTypes: true });
        const name = pathUtils.basename(relativePath);
        const fileInfo = resp.find((x) => x.name == name);
        if (!fileInfo) {
          throw new Error(`ENOENT: no such file or directory, stat '${path}'`);
        }
        return {
          isFile: () => fileInfo.isFile(),
          isDirectory: () => fileInfo.isDirectory(),
          isSymbolicLink: () => false,
          size: 1,
          mode: 438,
          // Default permissions
          mtimeMs: Date.now(),
          uid: 1e3,
          gid: 1e3
        };
      } catch (error) {
        console.log(error?.message);
        const err = new Error(`ENOENT: no such file or directory, stat '${path}'`);
        err.code = "ENOENT";
        err.errno = -2;
        err.syscall = "stat";
        err.path = path;
        throw err;
      }
    },
    lstat: async (path) => {
      return await getFs(webcontainer, record).promises.stat(path);
    },
    readlink: async (path) => {
      throw new Error(`EINVAL: invalid argument, readlink '${path}'`);
    },
    symlink: async (target, path) => {
      throw new Error(`EPERM: operation not permitted, symlink '${target}' -> '${path}'`);
    },
    chmod: async (_path, _mode) => {
      return await Promise.resolve();
    }
  }
});
const pathUtils = {
  dirname: (path) => {
    if (!path || !path.includes("/")) {
      return ".";
    }
    path = path.replace(/\/+$/, "");
    return path.split("/").slice(0, -1).join("/") || "/";
  },
  basename: (path, ext) => {
    path = path.replace(/\/+$/, "");
    const base = path.split("/").pop() || "";
    if (ext && base.endsWith(ext)) {
      return base.slice(0, -ext.length);
    }
    return base;
  },
  relative: (from, to) => {
    if (!from || !to) {
      return ".";
    }
    const normalizePathParts = (p) => p.replace(/\/+$/, "").split("/").filter(Boolean);
    const fromParts = normalizePathParts(from);
    const toParts = normalizePathParts(to);
    let commonLength = 0;
    const minLength = Math.min(fromParts.length, toParts.length);
    for (let i = 0; i < minLength; i++) {
      if (fromParts[i] !== toParts[i]) {
        break;
      }
      commonLength++;
    }
    const upCount = fromParts.length - commonLength;
    const remainingPath = toParts.slice(commonLength);
    const relativeParts = [...Array(upCount).fill(".."), ...remainingPath];
    return relativeParts.length === 0 ? "." : relativeParts.join("/");
  }
};

const LoadingOverlay = ({
  message = "Loading...",
  progress,
  progressText
}) => {
  return /* @__PURE__ */ jsx("div", { className: "fixed inset-0 flex items-center justify-center bg-black/80 z-50 backdrop-blur-sm", children: /* @__PURE__ */ jsxs("div", { className: "relative flex flex-col items-center gap-4 p-8 rounded-lg bg-bolt-elements-background-depth-2 shadow-lg", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "i-svg-spinners:90-ring-with-bg text-bolt-elements-loader-progress",
        style: { fontSize: "2rem" }
      }
    ),
    /* @__PURE__ */ jsx("p", { className: "text-lg text-bolt-elements-textTertiary", children: message }),
    progress !== undefined && /* @__PURE__ */ jsxs("div", { className: "w-64 flex flex-col gap-2", children: [
      /* @__PURE__ */ jsx("div", { className: "w-full h-2 bg-bolt-elements-background-depth-1 rounded-full overflow-hidden", children: /* @__PURE__ */ jsx(
        "div",
        {
          className: "h-full bg-bolt-elements-loader-progress transition-all duration-300 ease-out rounded-full",
          style: { width: `${Math.min(100, Math.max(0, progress))}%` }
        }
      ) }),
      progressText && /* @__PURE__ */ jsx("p", { className: "text-sm text-bolt-elements-textTertiary text-center", children: progressText })
    ] })
  ] }) });
};

const IGNORE_PATTERNS = [
  "node_modules/**",
  ".git/**",
  ".github/**",
  ".vscode/**",
  "**/*.jpg",
  "**/*.jpeg",
  "**/*.png",
  "dist/**",
  "build/**",
  ".next/**",
  "coverage/**",
  ".cache/**",
  ".vscode/**",
  ".idea/**",
  "**/*.log",
  "**/.DS_Store",
  "**/npm-debug.log*",
  "**/yarn-debug.log*",
  "**/yarn-error.log*",
  "**/*lock.json",
  "**/*lock.yaml"
];
const ig = ignore().add(IGNORE_PATTERNS);
function GitCloneButton({ importChat }) {
  const { ready, gitClone } = useGit();
  const [loading, setLoading] = useState(false);
  const onClick = async (_e) => {
    if (!ready) {
      return;
    }
    const repoUrl = prompt("Enter the Git url");
    if (repoUrl) {
      setLoading(true);
      try {
        const { workdir, data } = await gitClone(repoUrl);
        if (importChat) {
          const filePaths = Object.keys(data).filter((filePath) => !ig.ignores(filePath));
          console.log(filePaths);
          const textDecoder = new TextDecoder("utf-8");
          const fileContents = filePaths.map((filePath) => {
            const { data: content, encoding } = data[filePath];
            return {
              path: filePath,
              content: encoding === "utf8" ? content : content instanceof Uint8Array ? textDecoder.decode(content) : ""
            };
          }).filter((f) => f.content);
          const commands = await detectProjectCommands(fileContents);
          const commandsMessage = createCommandsMessage(commands);
          const filesMessage = {
            role: "assistant",
            content: `Cloning the repo ${repoUrl} into ${workdir}
<boltArtifact id="imported-files" title="Git Cloned Files" type="bundled">
${fileContents.map(
              (file) => `<boltAction type="file" filePath="${file.path}">
${escapeBoltTags(file.content)}
</boltAction>`
            ).join("\n")}
</boltArtifact>`,
            id: generateId(),
            createdAt: /* @__PURE__ */ new Date()
          };
          const messages = [filesMessage];
          if (commandsMessage) {
            messages.push(commandsMessage);
          }
          await importChat(`Git Project:${repoUrl.split("/").slice(-1)[0]}`, messages, { gitUrl: repoUrl });
        }
      } catch (error) {
        console.error("Error during import:", error);
        toast.error("Failed to import repository");
      } finally {
        setLoading(false);
      }
    }
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(
      "button",
      {
        onClick,
        title: "Clone a Git Repo",
        className: "px-4 py-2 rounded-lg border border-bolt-elements-borderColor bg-bolt-elements-prompt-background text-bolt-elements-textPrimary hover:bg-bolt-elements-background-depth-3 transition-all flex items-center gap-2",
        children: [
          /* @__PURE__ */ jsx("span", { className: "i-ph:git-branch" }),
          "Clone a Git Repo"
        ]
      }
    ),
    loading && /* @__PURE__ */ jsx(LoadingOverlay, { message: "Please wait while we clone the repository..." })
  ] });
}

const FilePreview = ({ files, imageDataList, onRemove }) => {
  if (!files || files.length === 0) {
    return null;
  }
  return /* @__PURE__ */ jsx("div", { className: "flex flex-row overflow-x-auto -mt-2", children: files.map((file, index) => /* @__PURE__ */ jsx("div", { className: "mr-2 relative", children: imageDataList[index] && /* @__PURE__ */ jsxs("div", { className: "relative pt-4 pr-4", children: [
    /* @__PURE__ */ jsx("img", { src: imageDataList[index], alt: file.name, className: "max-h-20" }),
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => onRemove(index),
        className: "absolute top-1 right-1 z-10 bg-black rounded-full w-5 h-5 shadow-md hover:bg-gray-900 transition-colors flex items-center justify-center",
        children: /* @__PURE__ */ jsx("div", { className: "i-ph:x w-3 h-3 text-gray-200" })
      }
    )
  ] }) }, file.name + file.size)) });
};

const ModelSelector = ({
  model,
  setModel,
  provider,
  setProvider,
  modelList,
  providerList,
  modelLoading
}) => {
  useEffect(() => {
    if (providerList.length == 0) {
      return;
    }
    if (provider && !providerList.map((p) => p.name).includes(provider.name)) {
      const firstEnabledProvider = providerList[0];
      setProvider?.(firstEnabledProvider);
      const firstModel = modelList.find((m) => m.provider === firstEnabledProvider.name);
      if (firstModel) {
        setModel?.(firstModel.name);
      }
    }
  }, [providerList, provider, setProvider, modelList, setModel]);
  if (providerList.length === 0) {
    return /* @__PURE__ */ jsx("div", { className: "mb-2 p-4 rounded-lg border border-bolt-elements-borderColor bg-bolt-elements-prompt-background text-bolt-elements-textPrimary", children: /* @__PURE__ */ jsx("p", { className: "text-center", children: "No providers are currently enabled. Please enable at least one provider in the settings to start using the chat." }) });
  }
  return /* @__PURE__ */ jsxs("div", { className: "mb-2 flex gap-2 flex-col sm:flex-row", children: [
    /* @__PURE__ */ jsx(
      "select",
      {
        value: provider?.name ?? "",
        onChange: (e) => {
          const newProvider = providerList.find((p) => p.name === e.target.value);
          if (newProvider && setProvider) {
            setProvider(newProvider);
          }
          const firstModel = [...modelList].find((m) => m.provider === e.target.value);
          if (firstModel && setModel) {
            setModel(firstModel.name);
          }
        },
        className: "flex-1 p-2 rounded-lg border border-bolt-elements-borderColor bg-bolt-elements-prompt-background text-bolt-elements-textPrimary focus:outline-none focus:ring-2 focus:ring-bolt-elements-focus transition-all",
        children: providerList.map((provider2) => /* @__PURE__ */ jsx("option", { value: provider2.name, children: provider2.name }, provider2.name))
      }
    ),
    /* @__PURE__ */ jsx(
      "select",
      {
        value: model,
        onChange: (e) => setModel?.(e.target.value),
        className: "flex-1 p-2 rounded-lg border border-bolt-elements-borderColor bg-bolt-elements-prompt-background text-bolt-elements-textPrimary focus:outline-none focus:ring-2 focus:ring-bolt-elements-focus transition-all lg:max-w-[70%]",
        disabled: modelLoading === "all" || modelLoading === provider?.name,
        children: modelLoading == "all" || modelLoading == provider?.name ? /* @__PURE__ */ jsx("option", { value: "", children: "Loading..." }, 0) : [...modelList].filter((e) => e.provider == provider?.name && e.name).map((modelOption, index) => /* @__PURE__ */ jsx("option", { value: modelOption.name, children: modelOption.label }, index))
      },
      provider?.name
    )
  ] });
};

const SpeechRecognitionButton = ({
  isListening,
  onStart,
  onStop,
  disabled
}) => {
  return /* @__PURE__ */ jsx(
    IconButton,
    {
      title: isListening ? "Stop listening" : "Start speech recognition",
      disabled,
      className: classNames("transition-all", {
        "text-bolt-elements-item-contentAccent": isListening
      }),
      onClick: isListening ? onStop : onStart,
      children: isListening ? /* @__PURE__ */ jsx("div", { className: "i-ph:microphone-slash text-xl" }) : /* @__PURE__ */ jsx("div", { className: "i-ph:microphone text-xl" })
    }
  );
};

const ScreenshotStateManager = ({
  setUploadedFiles,
  setImageDataList,
  uploadedFiles,
  imageDataList
}) => {
  useEffect(() => {
    if (setUploadedFiles && setImageDataList) {
      window.__BOLT_SET_UPLOADED_FILES__ = setUploadedFiles;
      window.__BOLT_SET_IMAGE_DATA_LIST__ = setImageDataList;
      window.__BOLT_UPLOADED_FILES__ = uploadedFiles;
      window.__BOLT_IMAGE_DATA_LIST__ = imageDataList;
    }
    return () => {
      delete window.__BOLT_SET_UPLOADED_FILES__;
      delete window.__BOLT_SET_IMAGE_DATA_LIST__;
      delete window.__BOLT_UPLOADED_FILES__;
      delete window.__BOLT_IMAGE_DATA_LIST__;
    };
  }, [setUploadedFiles, setImageDataList, uploadedFiles, imageDataList]);
  return null;
};

const StarterTemplates = () => {
  return /* @__PURE__ */ jsx("div", { className: "flex flex-col items-center gap-4", children: /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-500", children: "Par bolt.diy et DeepSeeks." }) });
};

function ChatAlert({ alert, clearAlert, postMessage }) {
  const { description, content, source } = alert;
  const isPreview = source === "preview";
  const title = isPreview ? "Preview Error" : "Terminal Error";
  const message = isPreview ? "We encountered an error while running the preview. Would you like Bolt to analyze and help resolve this issue?" : "We encountered an error while running terminal commands. Would you like Bolt to analyze and help resolve this issue?";
  return /* @__PURE__ */ jsx(AnimatePresence, { children: /* @__PURE__ */ jsx(
    motion.div,
    {
      initial: { opacity: 0, y: -20 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -20 },
      transition: { duration: 0.3 },
      className: `rounded-lg border border-bolt-elements-borderColor bg-bolt-elements-background-depth-2 p-4`,
      children: /* @__PURE__ */ jsxs("div", { className: "flex items-start", children: [
        /* @__PURE__ */ jsx(
          motion.div,
          {
            className: "flex-shrink-0",
            initial: { scale: 0 },
            animate: { scale: 1 },
            transition: { delay: 0.2 },
            children: /* @__PURE__ */ jsx("div", { className: `i-ph:warning-duotone text-xl text-bolt-elements-button-danger-text` })
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "ml-3 flex-1", children: [
          /* @__PURE__ */ jsx(
            motion.h3,
            {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { delay: 0.1 },
              className: `text-sm font-medium text-bolt-elements-textPrimary`,
              children: title
            }
          ),
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { delay: 0.2 },
              className: `mt-2 text-sm text-bolt-elements-textSecondary`,
              children: [
                /* @__PURE__ */ jsx("p", { children: message }),
                description && /* @__PURE__ */ jsxs("div", { className: "text-xs text-bolt-elements-textSecondary p-2 bg-bolt-elements-background-depth-3 rounded mt-4 mb-4", children: [
                  "Error: ",
                  description
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            motion.div,
            {
              className: "mt-4",
              initial: { opacity: 0, y: 10 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.3 },
              children: /* @__PURE__ */ jsxs("div", { className: classNames(" flex gap-2"), children: [
                /* @__PURE__ */ jsxs(
                  "button",
                  {
                    onClick: () => postMessage(
                      `*Fix this ${isPreview ? "preview" : "terminal"} error* 
\`\`\`${isPreview ? "js" : "sh"}
${content}
\`\`\`
`
                    ),
                    className: classNames(
                      `px-2 py-1.5 rounded-md text-sm font-medium`,
                      "bg-bolt-elements-button-primary-background",
                      "hover:bg-bolt-elements-button-primary-backgroundHover",
                      "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-bolt-elements-button-danger-background",
                      "text-bolt-elements-button-primary-text",
                      "flex items-center gap-1.5"
                    ),
                    children: [
                      /* @__PURE__ */ jsx("div", { className: "i-ph:chat-circle-duotone" }),
                      "Ask Bolt"
                    ]
                  }
                ),
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    onClick: clearAlert,
                    className: classNames(
                      `px-2 py-1.5 rounded-md text-sm font-medium`,
                      "bg-bolt-elements-button-secondary-background",
                      "hover:bg-bolt-elements-button-secondary-backgroundHover",
                      "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-bolt-elements-button-secondary-background",
                      "text-bolt-elements-button-secondary-text"
                    ),
                    children: "Dismiss"
                  }
                )
              ] })
            }
          )
        ] })
      ] })
    }
  ) });
}

const cubicEasingFn = cubicBezier(0.4, 0, 0.2, 1);

function ProgressCompilation({ data }) {
  const [progressList, setProgressList] = React.useState([]);
  const [expanded, setExpanded] = useState(false);
  React.useEffect(() => {
    if (!data || data.length == 0) {
      setProgressList([]);
      return;
    }
    const progressMap = /* @__PURE__ */ new Map();
    data.forEach((x) => {
      const existingProgress = progressMap.get(x.label);
      if (existingProgress && existingProgress.status === "complete") {
        return;
      }
      progressMap.set(x.label, x);
    });
    const newData = Array.from(progressMap.values());
    newData.sort((a, b) => a.order - b.order);
    setProgressList(newData);
  }, [data]);
  if (progressList.length === 0) {
    return /* @__PURE__ */ jsx(Fragment, {});
  }
  return /* @__PURE__ */ jsx(AnimatePresence, { children: /* @__PURE__ */ jsx(
    "div",
    {
      className: classNames(
        "bg-bolt-elements-background-depth-2",
        "border border-bolt-elements-borderColor",
        "shadow-lg rounded-lg  relative w-full max-w-chat mx-auto z-prompt",
        "p-1"
      ),
      style: { transform: "translateY(1rem)" },
      children: /* @__PURE__ */ jsxs(
        "div",
        {
          className: classNames(
            "bg-bolt-elements-item-backgroundAccent",
            "p-1 rounded-lg text-bolt-elements-item-contentAccent",
            "flex "
          ),
          children: [
            /* @__PURE__ */ jsx("div", { className: "flex-1", children: /* @__PURE__ */ jsx(AnimatePresence, { children: expanded ? /* @__PURE__ */ jsx(
              motion.div,
              {
                className: "actions",
                initial: { height: 0 },
                animate: { height: "auto" },
                exit: { height: "0px" },
                transition: { duration: 0.15 },
                children: progressList.map((x, i) => {
                  return /* @__PURE__ */ jsx(ProgressItem, { progress: x }, i);
                })
              }
            ) : /* @__PURE__ */ jsx(ProgressItem, { progress: progressList.slice(-1)[0] }) }) }),
            /* @__PURE__ */ jsx(
              motion.button,
              {
                initial: { width: 0 },
                animate: { width: "auto" },
                exit: { width: 0 },
                transition: { duration: 0.15, ease: cubicEasingFn },
                className: " p-1 rounded-lg bg-bolt-elements-item-backgroundAccent hover:bg-bolt-elements-artifacts-backgroundHover",
                onClick: () => setExpanded((v) => !v),
                children: /* @__PURE__ */ jsx("div", { className: expanded ? "i-ph:caret-up-bold" : "i-ph:caret-down-bold" })
              }
            )
          ]
        }
      )
    }
  ) });
}
const ProgressItem = ({ progress }) => {
  return /* @__PURE__ */ jsxs(
    motion.div,
    {
      className: classNames("flex text-sm gap-3"),
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 0.15 },
      children: [
        /* @__PURE__ */ jsx("div", { className: "flex items-center gap-1.5 ", children: /* @__PURE__ */ jsx("div", { children: progress.status === "in-progress" ? /* @__PURE__ */ jsx("div", { className: "i-svg-spinners:90-ring-with-bg" }) : progress.status === "complete" ? /* @__PURE__ */ jsx("div", { className: "i-ph:check" }) : null }) }),
        progress.message
      ]
    }
  );
};

const TEXTAREA_MIN_HEIGHT = 76;
const BaseChat = React.forwardRef(
  ({
    textareaRef,
    messageRef,
    scrollRef,
    showChat = true,
    chatStarted = false,
    isStreaming = false,
    model,
    setModel,
    provider,
    setProvider,
    providerList,
    input = "",
    enhancingPrompt,
    handleInputChange,
    // promptEnhanced,
    enhancePrompt,
    sendMessage,
    handleStop,
    importChat,
    exportChat,
    uploadedFiles = [],
    setUploadedFiles,
    imageDataList = [],
    setImageDataList,
    messages,
    actionAlert,
    clearAlert,
    data
  }, ref) => {
    const TEXTAREA_MAX_HEIGHT = chatStarted ? 400 : 200;
    const [apiKeys, setApiKeys] = useState(getApiKeysFromCookies());
    const [modelList, setModelList] = useState([]);
    const [isModelSettingsCollapsed, setIsModelSettingsCollapsed] = useState(false);
    const [isListening, setIsListening] = useState(false);
    const [recognition, setRecognition] = useState(null);
    const [transcript, setTranscript] = useState("");
    const [isModelLoading, setIsModelLoading] = useState("all");
    const [progressAnnotations, setProgressAnnotations] = useState([]);
    useEffect(() => {
      if (data) {
        const progressList = data.filter(
          (x) => typeof x === "object" && x.type === "progress"
        );
        setProgressAnnotations(progressList);
      }
    }, [data]);
    useEffect(() => {
      console.log(transcript);
    }, [transcript]);
    useEffect(() => {
      if (typeof window !== "undefined" && ("SpeechRecognition" in window || "webkitSpeechRecognition" in window)) {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        const recognition2 = new SpeechRecognition();
        recognition2.continuous = true;
        recognition2.interimResults = true;
        recognition2.onresult = (event) => {
          const transcript2 = Array.from(event.results).map((result) => result[0]).map((result) => result.transcript).join("");
          setTranscript(transcript2);
          if (handleInputChange) {
            const syntheticEvent = {
              target: { value: transcript2 }
            };
            handleInputChange(syntheticEvent);
          }
        };
        recognition2.onerror = (event) => {
          console.error("Speech recognition error:", event.error);
          setIsListening(false);
        };
        setRecognition(recognition2);
      }
    }, []);
    useEffect(() => {
      if (typeof window !== "undefined") {
        let parsedApiKeys = {};
        try {
          parsedApiKeys = getApiKeysFromCookies();
          setApiKeys(parsedApiKeys);
        } catch (error) {
          console.error("Error loading API keys from cookies:", error);
          Cookies.remove("apiKeys");
        }
        setIsModelLoading("all");
        fetch("/api/models").then((response) => response.json()).then((data2) => {
          const typedData = data2;
          setModelList(typedData.modelList);
        }).catch((error) => {
          console.error("Error fetching model list:", error);
        }).finally(() => {
          setIsModelLoading(undefined);
        });
      }
    }, [providerList, provider]);
    const onApiKeysChange = async (providerName, apiKey) => {
      const newApiKeys = { ...apiKeys, [providerName]: apiKey };
      setApiKeys(newApiKeys);
      Cookies.set("apiKeys", JSON.stringify(newApiKeys));
      setIsModelLoading(providerName);
      let providerModels = [];
      try {
        const response = await fetch(`/api/models/${encodeURIComponent(providerName)}`);
        const data2 = await response.json();
        providerModels = data2.modelList;
      } catch (error) {
        console.error("Error loading dynamic models for:", providerName, error);
      }
      setModelList((prevModels) => {
        const otherModels = prevModels.filter((model2) => model2.provider !== providerName);
        return [...otherModels, ...providerModels];
      });
      setIsModelLoading(undefined);
    };
    const startListening = () => {
      if (recognition) {
        recognition.start();
        setIsListening(true);
      }
    };
    const stopListening = () => {
      if (recognition) {
        recognition.stop();
        setIsListening(false);
      }
    };
    const handleSendMessage = (event, messageInput) => {
      if (sendMessage) {
        sendMessage(event, messageInput);
        if (recognition) {
          recognition.abort();
          setTranscript("");
          setIsListening(false);
          if (handleInputChange) {
            const syntheticEvent = {
              target: { value: "" }
            };
            handleInputChange(syntheticEvent);
          }
        }
      }
    };
    const handleFileUpload = () => {
      const input2 = document.createElement("input");
      input2.type = "file";
      input2.accept = "image/*";
      input2.onchange = async (e) => {
        const file = e.target.files?.[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = (e2) => {
            const base64Image = e2.target?.result;
            setUploadedFiles?.([...uploadedFiles, file]);
            setImageDataList?.([...imageDataList, base64Image]);
          };
          reader.readAsDataURL(file);
        }
      };
      input2.click();
    };
    const handlePaste = async (e) => {
      const items = e.clipboardData?.items;
      if (!items) {
        return;
      }
      for (const item of items) {
        if (item.type.startsWith("image/")) {
          e.preventDefault();
          const file = item.getAsFile();
          if (file) {
            const reader = new FileReader();
            reader.onload = (e2) => {
              const base64Image = e2.target?.result;
              setUploadedFiles?.([...uploadedFiles, file]);
              setImageDataList?.([...imageDataList, base64Image]);
            };
            reader.readAsDataURL(file);
          }
          break;
        }
      }
    };
    const baseChat = /* @__PURE__ */ jsx(
      "div",
      {
        ref,
        className: classNames(styles$1.BaseChat, "relative flex h-full w-full overflow-hidden"),
        "data-chat-visible": showChat,
        children: /* @__PURE__ */ jsxs("div", { ref: scrollRef, className: "flex flex-col lg:flex-row overflow-y-auto w-full h-full", children: [
          /* @__PURE__ */ jsxs("div", { className: classNames(styles$1.Chat, "flex flex-col flex-grow lg:min-w-[var(--chat-min-width)] h-full"), children: [
            !chatStarted && /* @__PURE__ */ jsxs("div", { id: "intro", className: "mt-[16vh] max-w-chat mx-auto text-center px-4 lg:px-0", children: [
              /* @__PURE__ */ jsx("h1", { className: "text-3xl lg:text-6xl font-bold text-bolt-elements-textPrimary mb-4 animate-fade-in", children: "Créez votre application" }),
              /* @__PURE__ */ jsx("p", { className: "text-md lg:text-xl mb-8 text-bolt-elements-textSecondary animate-fade-in animation-delay-200", children: "Créez votre site avec juste une desciption ." })
            ] }),
            /* @__PURE__ */ jsxs(
              "div",
              {
                className: classNames("pt-6 px-2 sm:px-6", {
                  "h-full flex flex-col": chatStarted
                }),
                ref: scrollRef,
                children: [
                  /* @__PURE__ */ jsx(ClientOnly, { children: () => {
                    return chatStarted ? /* @__PURE__ */ jsx(
                      Messages,
                      {
                        ref: messageRef,
                        className: "flex flex-col w-full flex-1 max-w-chat pb-6 mx-auto z-1",
                        messages,
                        isStreaming
                      }
                    ) : null;
                  } }),
                  /* @__PURE__ */ jsxs(
                    "div",
                    {
                      className: classNames("flex flex-col gap-4 w-full max-w-chat mx-auto z-prompt mb-6", {
                        "sticky bottom-2": chatStarted
                      }),
                      children: [
                        /* @__PURE__ */ jsx("div", { className: "bg-bolt-elements-background-depth-2", children: actionAlert && /* @__PURE__ */ jsx(
                          ChatAlert,
                          {
                            alert: actionAlert,
                            clearAlert: () => clearAlert?.(),
                            postMessage: (message) => {
                              sendMessage?.({}, message);
                              clearAlert?.();
                            }
                          }
                        ) }),
                        progressAnnotations && /* @__PURE__ */ jsx(ProgressCompilation, { data: progressAnnotations }),
                        /* @__PURE__ */ jsxs(
                          "div",
                          {
                            className: classNames(
                              "bg-bolt-elements-background-depth-2 p-3 rounded-lg border border-bolt-elements-borderColor relative w-full max-w-chat mx-auto z-prompt"
                              /*
                               * {
                               *   'sticky bottom-2': chatStarted,
                               * },
                               */
                            ),
                            children: [
                              /* @__PURE__ */ jsxs("svg", { className: classNames(styles$1.PromptEffectContainer), children: [
                                /* @__PURE__ */ jsxs("defs", { children: [
                                  /* @__PURE__ */ jsxs(
                                    "linearGradient",
                                    {
                                      id: "line-gradient",
                                      x1: "20%",
                                      y1: "0%",
                                      x2: "-14%",
                                      y2: "10%",
                                      gradientUnits: "userSpaceOnUse",
                                      gradientTransform: "rotate(-45)",
                                      children: [
                                        /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "#b44aff", stopOpacity: "0%" }),
                                        /* @__PURE__ */ jsx("stop", { offset: "40%", stopColor: "#b44aff", stopOpacity: "80%" }),
                                        /* @__PURE__ */ jsx("stop", { offset: "50%", stopColor: "#b44aff", stopOpacity: "80%" }),
                                        /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "#b44aff", stopOpacity: "0%" })
                                      ]
                                    }
                                  ),
                                  /* @__PURE__ */ jsxs("linearGradient", { id: "shine-gradient", children: [
                                    /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "white", stopOpacity: "0%" }),
                                    /* @__PURE__ */ jsx("stop", { offset: "40%", stopColor: "#ffffff", stopOpacity: "80%" }),
                                    /* @__PURE__ */ jsx("stop", { offset: "50%", stopColor: "#ffffff", stopOpacity: "80%" }),
                                    /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "white", stopOpacity: "0%" })
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsx("rect", { className: classNames(styles$1.PromptEffectLine), pathLength: "100", strokeLinecap: "round" }),
                                /* @__PURE__ */ jsx("rect", { className: classNames(styles$1.PromptShine), x: "48", y: "24", width: "70", height: "1" })
                              ] }),
                              /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(ClientOnly, { children: () => /* @__PURE__ */ jsxs("div", { className: isModelSettingsCollapsed ? "hidden" : "hidden", children: [
                                /* @__PURE__ */ jsx(
                                  ModelSelector,
                                  {
                                    model,
                                    setModel,
                                    modelList,
                                    provider,
                                    setProvider,
                                    providerList: providerList || PROVIDER_LIST,
                                    apiKeys,
                                    modelLoading: isModelLoading
                                  },
                                  provider?.name + ":" + modelList.length
                                ),
                                (providerList || []).length > 0 && provider && /* @__PURE__ */ jsx(
                                  APIKeyManager,
                                  {
                                    provider,
                                    apiKey: apiKeys[provider.name] || "",
                                    setApiKey: (key) => {
                                      onApiKeysChange(provider.name, key);
                                    }
                                  }
                                )
                              ] }) }) }),
                              /* @__PURE__ */ jsx(
                                FilePreview,
                                {
                                  files: uploadedFiles,
                                  imageDataList,
                                  onRemove: (index) => {
                                    setUploadedFiles?.(uploadedFiles.filter((_, i) => i !== index));
                                    setImageDataList?.(imageDataList.filter((_, i) => i !== index));
                                  }
                                }
                              ),
                              /* @__PURE__ */ jsx(ClientOnly, { children: () => /* @__PURE__ */ jsx(
                                ScreenshotStateManager,
                                {
                                  setUploadedFiles,
                                  setImageDataList,
                                  uploadedFiles,
                                  imageDataList
                                }
                              ) }),
                              /* @__PURE__ */ jsxs(
                                "div",
                                {
                                  className: classNames(
                                    "relative shadow-xs border border-bolt-elements-borderColor backdrop-blur rounded-lg"
                                  ),
                                  children: [
                                    /* @__PURE__ */ jsx(
                                      "textarea",
                                      {
                                        ref: textareaRef,
                                        className: classNames(
                                          "w-full pl-4 pt-4 pr-16 outline-none resize-none text-bolt-elements-textPrimary placeholder-bolt-elements-textTertiary bg-transparent text-sm",
                                          "transition-all duration-200",
                                          "hover:border-bolt-elements-focus"
                                        ),
                                        onDragEnter: (e) => {
                                          e.preventDefault();
                                          e.currentTarget.style.border = "2px solid #1488fc";
                                        },
                                        onDragOver: (e) => {
                                          e.preventDefault();
                                          e.currentTarget.style.border = "2px solid #1488fc";
                                        },
                                        onDragLeave: (e) => {
                                          e.preventDefault();
                                          e.currentTarget.style.border = "1px solid var(--bolt-elements-borderColor)";
                                        },
                                        onDrop: (e) => {
                                          e.preventDefault();
                                          e.currentTarget.style.border = "1px solid var(--bolt-elements-borderColor)";
                                          const files = Array.from(e.dataTransfer.files);
                                          files.forEach((file) => {
                                            if (file.type.startsWith("image/")) {
                                              const reader = new FileReader();
                                              reader.onload = (e2) => {
                                                const base64Image = e2.target?.result;
                                                setUploadedFiles?.([...uploadedFiles, file]);
                                                setImageDataList?.([...imageDataList, base64Image]);
                                              };
                                              reader.readAsDataURL(file);
                                            }
                                          });
                                        },
                                        onKeyDown: (event) => {
                                          if (event.key === "Enter") {
                                            if (event.shiftKey) {
                                              return;
                                            }
                                            event.preventDefault();
                                            if (isStreaming) {
                                              handleStop?.();
                                              return;
                                            }
                                            if (event.nativeEvent.isComposing) {
                                              return;
                                            }
                                            handleSendMessage?.(event);
                                          }
                                        },
                                        value: input,
                                        onChange: (event) => {
                                          handleInputChange?.(event);
                                        },
                                        onPaste: handlePaste,
                                        style: {
                                          minHeight: TEXTAREA_MIN_HEIGHT,
                                          maxHeight: TEXTAREA_MAX_HEIGHT
                                        },
                                        placeholder: "Comment on peut vous aider aujourd'hui ?",
                                        translate: "no"
                                      }
                                    ),
                                    /* @__PURE__ */ jsx(ClientOnly, { children: () => /* @__PURE__ */ jsx(
                                      SendButton,
                                      {
                                        show: input.length > 0 || isStreaming || uploadedFiles.length > 0,
                                        isStreaming,
                                        disabled: !providerList || providerList.length === 0,
                                        onClick: (event) => {
                                          if (isStreaming) {
                                            handleStop?.();
                                            return;
                                          }
                                          if (input.length > 0 || uploadedFiles.length > 0) {
                                            handleSendMessage?.(event);
                                          }
                                        }
                                      }
                                    ) }),
                                    /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-sm p-4 pt-2", children: [
                                      /* @__PURE__ */ jsxs("div", { className: "flex gap-1 items-center", children: [
                                        /* @__PURE__ */ jsx(IconButton, { title: "Upload file", className: "transition-all", onClick: () => handleFileUpload(), children: /* @__PURE__ */ jsx("div", { className: "i-ph:paperclip text-xl" }) }),
                                        /* @__PURE__ */ jsx(
                                          IconButton,
                                          {
                                            title: "Enhance prompt",
                                            disabled: input.length === 0 || enhancingPrompt,
                                            className: classNames("transition-all", enhancingPrompt ? "opacity-100" : ""),
                                            onClick: () => {
                                              enhancePrompt?.();
                                              toast.success("Prompt enhanced!");
                                            },
                                            children: enhancingPrompt ? /* @__PURE__ */ jsx("div", { className: "i-svg-spinners:90-ring-with-bg text-bolt-elements-loader-progress text-xl animate-spin" }) : /* @__PURE__ */ jsx("div", { className: "i-bolt:stars text-xl" })
                                          }
                                        ),
                                        /* @__PURE__ */ jsx(
                                          SpeechRecognitionButton,
                                          {
                                            isListening,
                                            onStart: startListening,
                                            onStop: stopListening,
                                            disabled: isStreaming
                                          }
                                        ),
                                        chatStarted && /* @__PURE__ */ jsx(ClientOnly, { children: () => /* @__PURE__ */ jsx(ExportChatButton, { exportChat }) }),
                                        /* @__PURE__ */ jsxs(
                                          IconButton,
                                          {
                                            title: "Model Settings",
                                            className: classNames("transition-all flex items-center gap-1", {
                                              "bg-bolt-elements-item-backgroundAccent text-bolt-elements-item-contentAccent": isModelSettingsCollapsed,
                                              "bg-bolt-elements-item-backgroundDefault text-bolt-elements-item-contentDefault": !isModelSettingsCollapsed
                                            }),
                                            onClick: () => setIsModelSettingsCollapsed(!isModelSettingsCollapsed),
                                            disabled: !providerList || providerList.length === 0,
                                            children: [
                                              /* @__PURE__ */ jsx("div", { className: `i-ph:caret-${isModelSettingsCollapsed ? "right" : "down"} text-lg` }),
                                              isModelSettingsCollapsed ? /* @__PURE__ */ jsx("span", { className: "text-xs", children: model }) : /* @__PURE__ */ jsx("span", {})
                                            ]
                                          }
                                        )
                                      ] }),
                                      input.length > 3 ? /* @__PURE__ */ jsxs("div", { className: "text-xs text-bolt-elements-textTertiary", children: [
                                        "Use ",
                                        /* @__PURE__ */ jsx("kbd", { className: "kdb px-1.5 py-0.5 rounded bg-bolt-elements-background-depth-2", children: "Shift" }),
                                        " ",
                                        "+ ",
                                        /* @__PURE__ */ jsx("kbd", { className: "kdb px-1.5 py-0.5 rounded bg-bolt-elements-background-depth-2", children: "Return" }),
                                        " ",
                                        "a new line"
                                      ] }) : null
                                    ] })
                                  ]
                                }
                              )
                            ]
                          }
                        )
                      ]
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-center gap-5", children: [
              !chatStarted && /* @__PURE__ */ jsxs("div", { className: "flex justify-center gap-2", children: [
                ImportButtons(importChat),
                /* @__PURE__ */ jsx(GitCloneButton, { importChat })
              ] }),
              !chatStarted && /* @__PURE__ */ jsx(StarterTemplates, {})
            ] })
          ] }),
          /* @__PURE__ */ jsx(ClientOnly, { children: () => /* @__PURE__ */ jsx(Workbench, { chatStarted, isStreaming }) })
        ] })
      }
    );
    return /* @__PURE__ */ jsx(Tooltip.Provider, { delayDuration: 200, children: baseChat });
  }
);

const Chat = undefined;

const chatStore = map({
  started: false,
  aborted: false,
  showChat: true
});

const HeaderActionButtons = undefined;

const ChatDescription = undefined;

function Header() {
  const chat = useStore(chatStore);
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(
    "header",
    {
      className: classNames("flex items-center p-5 border-b h-[var(--header-height)]", {
        "border-transparent": !chat.started,
        "border-bolt-elements-borderColor": chat.started
      }),
      children: chat.started && /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("span", { className: "flex-1 px-4 truncate text-center text-bolt-elements-textPrimary", children: /* @__PURE__ */ jsx(ClientOnly, { children: () => /* @__PURE__ */ jsx(ChatDescription, {}) }) }),
        /* @__PURE__ */ jsx(ClientOnly, { children: () => /* @__PURE__ */ jsx("div", { className: "mr-1", children: /* @__PURE__ */ jsx(HeaderActionButtons, {}) }) })
      ] })
    }
  ) });
}

const meta$1 = () => {
  return [{ title: "AI ItGalaxy" }, { name: "description", content: "Talk with AI ItGalaxy, an AI assistant from StackBlitz" }];
};
const loader$2 = () => json({});
function Index$1() {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col h-full w-full bg-bolt-elements-background-depth-1", children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx(ClientOnly, { fallback: /* @__PURE__ */ jsx(BaseChat, {}), children: () => /* @__PURE__ */ jsx(Chat, {}) })
  ] });
}

const route10 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: Index$1,
  loader: loader$2,
  meta: meta$1
}, Symbol.toStringTag, { value: 'Module' }));

async function loader$1(args) {
  return json({ id: args.params.id });
}

const route9 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: Index$1,
  loader: loader$1
}, Symbol.toStringTag, { value: 'Module' }));

const GitUrlImport = undefined;

const rayContainer = "_";
const styles = {
	rayContainer: rayContainer};

const BackgroundRays = () => {
  return /* @__PURE__ */ jsx("div", { className: `${styles.rayContainer} ` });
};

const meta = () => {
  return [{ title: "Bolt" }, { name: "description", content: "Talk with Bolt, an AI assistant from StackBlitz" }];
};
async function loader(args) {
  return json({ url: args.params.url });
}
function Index() {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col h-full w-full bg-bolt-elements-background-depth-1", children: [
    /* @__PURE__ */ jsx(BackgroundRays, {}),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx(ClientOnly, { fallback: /* @__PURE__ */ jsx(BaseChat, {}), children: () => /* @__PURE__ */ jsx(GitUrlImport, {}) })
  ] });
}

const route11 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: Index,
  loader,
  meta
}, Symbol.toStringTag, { value: 'Module' }));

const serverManifest = {'entry':{'module':'/bolt.es3.js','imports':['/components-6L62PiHE.js','/single-fetch-DXQUw6pg.js'],'css':[]},'routes':{'root':{'id':'root','parentId':undefined,'path':'','index':undefined,'caseSensitive':undefined,'hasAction':false,'hasLoader':false,'hasClientAction':false,'hasClientLoader':false,'hasErrorBoundary':false,'module':'/bolt.es5.js','imports':['/components-6L62PiHE.js','/single-fetch-DXQUw6pg.js','/stripIndent-DDQ8P60l.js'],'css':[]},'routes/webcontainer.preview.$id':{'id':'routes/webcontainer.preview.$id','parentId':'root','path':'webcontainer/preview/:id','index':undefined,'caseSensitive':undefined,'hasAction':false,'hasLoader':true,'hasClientAction':false,'hasClientLoader':false,'hasErrorBoundary':false,'module':'/bolt.es2.js','imports':['/components-6L62PiHE.js','/single-fetch-DXQUw6pg.js'],'css':[]},'routes/api.models.$provider':{'id':'routes/api.models.$provider','parentId':'routes/api.models','path':':provider','index':undefined,'caseSensitive':undefined,'hasAction':false,'hasLoader':true,'hasClientAction':false,'hasClientLoader':false,'hasErrorBoundary':false,'module':'/bolt.es.js','imports':[],'css':[]},'routes/api.check-env-key':{'id':'routes/api.check-env-key','parentId':'root','path':'api/check-env-key','index':undefined,'caseSensitive':undefined,'hasAction':false,'hasLoader':true,'hasClientAction':false,'hasClientLoader':false,'hasErrorBoundary':false,'module':'/bolt.es8.js','imports':[],'css':[]},'routes/api.git-proxy.$':{'id':'routes/api.git-proxy.$','parentId':'root','path':'api/git-proxy/*','index':undefined,'caseSensitive':undefined,'hasAction':true,'hasLoader':true,'hasClientAction':false,'hasClientLoader':false,'hasErrorBoundary':false,'module':'/bolt.es9.js','imports':[],'css':[]},'routes/api.enhancer':{'id':'routes/api.enhancer','parentId':'root','path':'api/enhancer','index':undefined,'caseSensitive':undefined,'hasAction':true,'hasLoader':false,'hasClientAction':false,'hasClientLoader':false,'hasErrorBoundary':false,'module':'/bolt.es6.js','imports':['/single-fetch-DXQUw6pg.js'],'css':[]},'routes/api.llmcall':{'id':'routes/api.llmcall','parentId':'root','path':'api/llmcall','index':undefined,'caseSensitive':undefined,'hasAction':true,'hasLoader':false,'hasClientAction':false,'hasClientLoader':false,'hasErrorBoundary':false,'module':'/bolt.es11.js','imports':['/bolt.es6.js','/single-fetch-DXQUw6pg.js'],'css':[]},'routes/api.models':{'id':'routes/api.models','parentId':'root','path':'api/models','index':undefined,'caseSensitive':undefined,'hasAction':false,'hasLoader':true,'hasClientAction':false,'hasClientLoader':false,'hasErrorBoundary':false,'module':'/bolt.es10.js','imports':[],'css':[]},'routes/api.chat':{'id':'routes/api.chat','parentId':'root','path':'api/chat','index':undefined,'caseSensitive':undefined,'hasAction':true,'hasLoader':false,'hasClientAction':false,'hasClientLoader':false,'hasErrorBoundary':false,'module':'/bolt.es12.js','imports':['/bolt.es6.js','/single-fetch-DXQUw6pg.js'],'css':[]},'routes/chat.$id':{'id':'routes/chat.$id','parentId':'root','path':'chat/:id','index':undefined,'caseSensitive':undefined,'hasAction':false,'hasLoader':true,'hasClientAction':false,'hasClientLoader':false,'hasErrorBoundary':false,'module':'/bolt.es13.js','imports':['/bolt.es7.js','/components-6L62PiHE.js','/Header-DaHJSYVl.js','/single-fetch-DXQUw6pg.js','/stripIndent-DDQ8P60l.js'],'css':[]},'routes/_index':{'id':'routes/_index','parentId':'root','path':undefined,'index':true,'caseSensitive':undefined,'hasAction':false,'hasLoader':true,'hasClientAction':false,'hasClientLoader':false,'hasErrorBoundary':false,'module':'/bolt.es7.js','imports':['/components-6L62PiHE.js','/Header-DaHJSYVl.js','/single-fetch-DXQUw6pg.js','/stripIndent-DDQ8P60l.js'],'css':[]},'routes/git':{'id':'routes/git','parentId':'root','path':'git','index':undefined,'caseSensitive':undefined,'hasAction':false,'hasLoader':true,'hasClientAction':false,'hasClientLoader':false,'hasErrorBoundary':false,'module':'/bolt.es4.js','imports':['/components-6L62PiHE.js','/Header-DaHJSYVl.js','/single-fetch-DXQUw6pg.js','/stripIndent-DDQ8P60l.js'],'css':[]}},'url':'/assets/manifest-6b09feb5.js','version':'6b09feb5'};

/**
       * `mode` is only relevant for the old Remix compiler but
       * is included here to satisfy the `ServerBuild` typings.
       */
      const mode = "production";
      const assetsBuildDirectory = "build/client";
      const basename = "/";
      const future = {"v3_fetcherPersist":true,"v3_relativeSplatPath":true,"v3_throwAbortReason":true,"v3_routeConfig":false,"v3_singleFetch":false,"v3_lazyRouteDiscovery":true,"unstable_optimizeDeps":false};
      const isSpaMode = false;
      const publicPath = "/";
      const entry = { module: entryServer };
      const routes = {
        "root": {
          id: "root",
          parentId: undefined,
          path: "",
          index: undefined,
          caseSensitive: undefined,
          module: route0
        },
  "routes/webcontainer.preview.$id": {
          id: "routes/webcontainer.preview.$id",
          parentId: "root",
          path: "webcontainer/preview/:id",
          index: undefined,
          caseSensitive: undefined,
          module: route1
        },
  "routes/api.models.$provider": {
          id: "routes/api.models.$provider",
          parentId: "routes/api.models",
          path: ":provider",
          index: undefined,
          caseSensitive: undefined,
          module: route2
        },
  "routes/api.check-env-key": {
          id: "routes/api.check-env-key",
          parentId: "root",
          path: "api/check-env-key",
          index: undefined,
          caseSensitive: undefined,
          module: route3
        },
  "routes/api.git-proxy.$": {
          id: "routes/api.git-proxy.$",
          parentId: "root",
          path: "api/git-proxy/*",
          index: undefined,
          caseSensitive: undefined,
          module: route4
        },
  "routes/api.enhancer": {
          id: "routes/api.enhancer",
          parentId: "root",
          path: "api/enhancer",
          index: undefined,
          caseSensitive: undefined,
          module: route5
        },
  "routes/api.llmcall": {
          id: "routes/api.llmcall",
          parentId: "root",
          path: "api/llmcall",
          index: undefined,
          caseSensitive: undefined,
          module: route6
        },
  "routes/api.models": {
          id: "routes/api.models",
          parentId: "root",
          path: "api/models",
          index: undefined,
          caseSensitive: undefined,
          module: route7
        },
  "routes/api.chat": {
          id: "routes/api.chat",
          parentId: "root",
          path: "api/chat",
          index: undefined,
          caseSensitive: undefined,
          module: route8
        },
  "routes/chat.$id": {
          id: "routes/chat.$id",
          parentId: "root",
          path: "chat/:id",
          index: undefined,
          caseSensitive: undefined,
          module: route9
        },
  "routes/_index": {
          id: "routes/_index",
          parentId: "root",
          path: undefined,
          index: true,
          caseSensitive: undefined,
          module: route10
        },
  "routes/git": {
          id: "routes/git",
          parentId: "root",
          path: "git",
          index: undefined,
          caseSensitive: undefined,
          module: route11
        }
      };

export { serverManifest as assets, assetsBuildDirectory, basename, entry, future, isSpaMode, mode, publicPath, routes };
