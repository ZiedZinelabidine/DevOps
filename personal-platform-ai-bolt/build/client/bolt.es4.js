import { l as pe, r as b, j as l } from "./components-6L62PiHE.js";
import { K as me, S as fe, M as n, O as he, Q as ge, R as $, U as Se, V as ve, W as D, X as F, Y as ye, Z as xe, _ as V, $ as we, a0 as be, a1 as Te, a2 as je, a3 as _e } from "./Header-DaHJSYVl.js";
import "./single-fetch-DXQUw6pg.js";
import "./stripIndent-DDQ8P60l.js";
var J = "vercel.ai.error", Ie = Symbol.for(J), U, Ee = class q extends Error {
  /**
   * Creates an AI SDK Error.
   *
   * @param {Object} params - The parameters for creating the error.
   * @param {string} params.name - The name of the error.
   * @param {string} params.message - The error message.
   * @param {unknown} [params.cause] - The underlying cause of the error.
   */
  constructor({
    name: t,
    message: r,
    cause: a
  }) {
    super(r), this[U] = !0, this.name = t, this.cause = a;
  }
  /**
   * Checks if the given error is an AI SDK Error.
   * @param {unknown} error - The error to check.
   * @returns {boolean} True if the error is an AI SDK Error, false otherwise.
   */
  static isInstance(t) {
    return q.hasMarker(t, J);
  }
  static hasMarker(t, r) {
    const a = Symbol.for(r);
    return t != null && typeof t == "object" && a in t && typeof t[a] == "boolean" && t[a] === !0;
  }
};
U = Ie;
var m = Ee;
function z(e) {
  return e == null ? "unknown error" : typeof e == "string" ? e : e instanceof Error ? e.message : JSON.stringify(e);
}
var B = "AI_InvalidArgumentError", G = `vercel.ai.error.${B}`, Oe = Symbol.for(G), H, Me = class extends m {
  constructor({
    message: e,
    cause: t,
    argument: r
  }) {
    super({ name: B, message: e, cause: t }), this[H] = !0, this.argument = r;
  }
  static isInstance(e) {
    return m.hasMarker(e, G);
  }
};
H = Oe;
var L = "AI_JSONParseError", X = `vercel.ai.error.${L}`, Re = Symbol.for(X), K, A = class extends m {
  constructor({ text: e, cause: t }) {
    super({
      name: L,
      message: `JSON parsing failed: Text: ${e}.
Error message: ${z(t)}`,
      cause: t
    }), this[K] = !0, this.text = e;
  }
  static isInstance(e) {
    return m.hasMarker(e, X);
  }
};
K = Re;
var Y = "AI_TypeValidationError", Q = `vercel.ai.error.${Y}`, De = Symbol.for(Q), W, Ae = class T extends m {
  constructor({ value: t, cause: r }) {
    super({
      name: Y,
      message: `Type validation failed: Value: ${JSON.stringify(t)}.
Error message: ${z(r)}`,
      cause: r
    }), this[W] = !0, this.value = t;
  }
  static isInstance(t) {
    return m.hasMarker(t, Q);
  }
  /**
   * Wraps an error into a TypeValidationError.
   * If the cause is already a TypeValidationError with the same value, it returns the cause.
   * Otherwise, it creates a new TypeValidationError.
   *
   * @param {Object} params - The parameters for wrapping the error.
   * @param {unknown} params.value - The value that failed validation.
   * @param {unknown} params.cause - The original error or cause of the validation failure.
   * @returns {TypeValidationError} A TypeValidationError instance.
   */
  static wrap({
    value: t,
    cause: r
  }) {
    return T.isInstance(r) && r.value === t ? r : new T({ value: t, cause: r });
  }
};
W = De;
var C = Ae;
function Ce(e) {
  return new ReadableStream({
    /**
     * Called when the consumer wants to pull more data from the stream.
     *
     * @param {ReadableStreamDefaultController<T>} controller - The controller to enqueue data into the stream.
     * @returns {Promise<void>}
     */
    async pull(t) {
      try {
        const { value: r, done: a } = await e.next();
        a ? t.close() : t.enqueue(r);
      } catch (r) {
        t.error(r);
      }
    },
    /**
     * Called when the consumer cancels the stream.
     */
    cancel() {
    }
  });
}
var f = ({
  prefix: e,
  size: t = 16,
  alphabet: r = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
  separator: a = "-"
} = {}) => {
  const o = me(r, t);
  if (e == null)
    return o;
  if (r.includes(a))
    throw new Me({
      argument: "separator",
      message: `The separator "${a}" must not be part of the alphabet "${r}".`
    });
  return (s) => `${e}${a}${o(s)}`;
}, P = f(), j = Symbol.for("vercel.ai.validator");
function Pe(e) {
  return { [j]: !0, validate: e };
}
function ke(e) {
  return typeof e == "object" && e !== null && j in e && e[j] === !0 && "validate" in e;
}
function Ne(e) {
  return ke(e) ? e : $e(e);
}
function $e(e) {
  return Pe((t) => {
    const r = e.safeParse(t);
    return r.success ? { success: !0, value: r.data } : { success: !1, error: r.error };
  });
}
function Z({
  value: e,
  schema: t
}) {
  const r = Ne(t);
  try {
    if (r.validate == null)
      return { success: !0, value: e };
    const a = r.validate(e);
    return a.success ? a : {
      success: !1,
      error: C.wrap({ value: e, cause: a.error })
    };
  } catch (a) {
    return {
      success: !1,
      error: C.wrap({ value: e, cause: a })
    };
  }
}
function Fe({
  text: e,
  schema: t
}) {
  try {
    const r = fe.parse(e);
    if (t == null)
      return { success: !0, value: r, rawValue: r };
    const a = Z({ value: r, schema: t });
    return a.success ? { ...a, rawValue: r } : a;
  } catch (r) {
    return {
      success: !1,
      error: A.isInstance(r) ? r : new A({ text: e, cause: r })
    };
  }
}
var Ve = Object.defineProperty, I = (e, t) => {
  for (var r in t)
    Ve(e, r, { get: t[r], enumerable: !0 });
};
function ee(e, {
  contentType: t,
  dataStreamVersion: r
}) {
  const a = new Headers(e ?? {});
  return a.has("Content-Type") || a.set("Content-Type", t), a.set("X-Vercel-AI-Data-Stream", r), a;
}
var te = "AI_NoObjectGeneratedError", re = `vercel.ai.error.${te}`, Je = Symbol.for(re), ae, k = class extends m {
  constructor({
    message: e = "No object generated.",
    cause: t,
    text: r,
    response: a,
    usage: o
  }) {
    super({ name: te, message: e, cause: t }), this[ae] = !0, this.text = r, this.response = a, this.usage = o;
  }
  static isInstance(e) {
    return m.hasMarker(e, re);
  }
};
ae = Je;
var ne = n.union([
  n.string(),
  n.instanceof(Uint8Array),
  n.instanceof(ArrayBuffer),
  n.custom(
    // Buffer might not be available in some environments such as CloudFlare:
    (e) => {
      var t, r;
      return (r = (t = globalThis.Buffer) == null ? void 0 : t.isBuffer(e)) != null ? r : !1;
    },
    { message: "Must be a Buffer" }
  )
]), _ = n.lazy(
  () => n.union([
    n.null(),
    n.string(),
    n.number(),
    n.boolean(),
    n.record(n.string(), _),
    n.array(_)
  ])
), c = n.record(
  n.string(),
  n.record(n.string(), _)
), Ue = n.array(
  n.union([
    n.object({ type: n.literal("text"), text: n.string() }),
    n.object({
      type: n.literal("image"),
      data: n.string(),
      mimeType: n.string().optional()
    })
  ])
), oe = n.object({
  type: n.literal("text"),
  text: n.string(),
  providerOptions: c.optional(),
  experimental_providerMetadata: c.optional()
}), qe = n.object({
  type: n.literal("image"),
  image: n.union([ne, n.instanceof(URL)]),
  mimeType: n.string().optional(),
  providerOptions: c.optional(),
  experimental_providerMetadata: c.optional()
}), ze = n.object({
  type: n.literal("file"),
  data: n.union([ne, n.instanceof(URL)]),
  mimeType: n.string(),
  providerOptions: c.optional(),
  experimental_providerMetadata: c.optional()
}), Be = n.object({
  type: n.literal("tool-call"),
  toolCallId: n.string(),
  toolName: n.string(),
  args: n.unknown(),
  providerOptions: c.optional(),
  experimental_providerMetadata: c.optional()
}), Ge = n.object({
  type: n.literal("tool-result"),
  toolCallId: n.string(),
  toolName: n.string(),
  result: n.unknown(),
  content: Ue.optional(),
  isError: n.boolean().optional(),
  providerOptions: c.optional(),
  experimental_providerMetadata: c.optional()
}), He = n.object({
  role: n.literal("system"),
  content: n.string(),
  providerOptions: c.optional(),
  experimental_providerMetadata: c.optional()
}), Le = n.object({
  role: n.literal("user"),
  content: n.union([
    n.string(),
    n.array(n.union([oe, qe, ze]))
  ]),
  providerOptions: c.optional(),
  experimental_providerMetadata: c.optional()
}), Xe = n.object({
  role: n.literal("assistant"),
  content: n.union([
    n.string(),
    n.array(n.union([oe, Be]))
  ]),
  providerOptions: c.optional(),
  experimental_providerMetadata: c.optional()
}), Ke = n.object({
  role: n.literal("tool"),
  content: n.array(Ge),
  providerOptions: c.optional(),
  experimental_providerMetadata: c.optional()
});
n.union([
  He,
  Le,
  Xe,
  Ke
]);
var Ye = "JSON schema:", Qe = "You MUST answer with a JSON object that matches the JSON schema above.", We = "You MUST answer with JSON.";
function Ze({
  prompt: e,
  schema: t,
  schemaPrefix: r = t != null ? Ye : void 0,
  schemaSuffix: a = t != null ? Qe : We
}) {
  return [
    e != null && e.length > 0 ? e : void 0,
    e != null && e.length > 0 ? "" : void 0,
    // add a newline if prompt is not null
    r,
    t != null ? JSON.stringify(t) : void 0,
    a
  ].filter((o) => o != null).join(`
`);
}
f({ prefix: "aiobj", size: 24 });
f({ prefix: "aiobj", size: 24 });
f({
  prefix: "aitxt",
  size: 24
});
f({
  prefix: "msg",
  size: 24
});
var et = {};
I(et, {
  object: () => rt,
  text: () => tt
});
var tt = () => ({
  type: "text",
  responseFormat: () => ({ type: "text" }),
  injectIntoSystemPrompt({ system: e }) {
    return e;
  },
  parsePartial({ text: e }) {
    return { partial: e };
  },
  parseOutput({ text: e }) {
    return e;
  }
}), rt = ({
  schema: e
}) => {
  const t = he(e);
  return {
    type: "object",
    responseFormat: ({ model: r }) => ({
      type: "json",
      schema: r.supportsStructuredOutputs ? t.jsonSchema : void 0
    }),
    injectIntoSystemPrompt({ system: r, model: a }) {
      return a.supportsStructuredOutputs ? r : Ze({
        prompt: r,
        schema: t.jsonSchema
      });
    },
    parsePartial({ text: r }) {
      const a = ge(r);
      switch (a.state) {
        case "failed-parse":
        case "undefined-input":
          return;
        case "repaired-parse":
        case "successful-parse":
          return {
            // Note: currently no validation of partial results:
            partial: a.value
          };
        default: {
          const o = a.state;
          throw new Error(`Unsupported parse state: ${o}`);
        }
      }
    },
    parseOutput({ text: r }, a) {
      const o = Fe({ text: r });
      if (!o.success)
        throw new k({
          message: "No object generated: could not parse the response.",
          cause: o.error,
          text: r,
          response: a.response,
          usage: a.usage
        });
      const s = Z({
        value: o.value,
        schema: t
      });
      if (!s.success)
        throw new k({
          message: "No object generated: response did not match schema.",
          cause: s.error,
          text: r,
          response: a.response,
          usage: a.usage
        });
      return s.value;
    }
  };
};
function se(e, t) {
  const r = e.getReader(), a = t.getReader();
  let o, s, d = !1, h = !1;
  async function S(i) {
    try {
      o == null && (o = r.read());
      const u = await o;
      o = void 0, u.done ? i.close() : i.enqueue(u.value);
    } catch (u) {
      i.error(u);
    }
  }
  async function y(i) {
    try {
      s == null && (s = a.read());
      const u = await s;
      s = void 0, u.done ? i.close() : i.enqueue(u.value);
    } catch (u) {
      i.error(u);
    }
  }
  return new ReadableStream({
    async pull(i) {
      try {
        if (d) {
          await y(i);
          return;
        }
        if (h) {
          await S(i);
          return;
        }
        o == null && (o = r.read()), s == null && (s = a.read());
        const { result: u, reader: v } = await Promise.race([
          o.then((g) => ({ result: g, reader: r })),
          s.then((g) => ({ result: g, reader: a }))
        ]);
        u.done || i.enqueue(u.value), v === r ? (o = void 0, u.done && (await y(i), d = !0)) : (s = void 0, u.done && (h = !0, await S(i)));
      } catch (u) {
        i.error(u);
      }
    },
    cancel() {
      r.cancel(), a.cancel();
    }
  });
}
f({
  prefix: "aitxt",
  size: 24
});
f({
  prefix: "msg",
  size: 24
});
var at = {};
I(at, {
  mergeIntoDataStream: () => st,
  toDataStream: () => nt,
  toDataStreamResponse: () => ot
});
function ie(e = {}) {
  const t = new TextEncoder();
  let r = "";
  return new TransformStream({
    async start() {
      e.onStart && await e.onStart();
    },
    async transform(a, o) {
      o.enqueue(t.encode(a)), r += a, e.onToken && await e.onToken(a), e.onText && typeof a == "string" && await e.onText(a);
    },
    async flush() {
      e.onCompletion && await e.onCompletion(r), e.onFinal && await e.onFinal(r);
    }
  });
}
function E(e, t) {
  return e.pipeThrough(
    new TransformStream({
      transform: async (r, a) => {
        var o;
        if (typeof r == "string") {
          a.enqueue(r);
          return;
        }
        if ("event" in r) {
          r.event === "on_chat_model_stream" && N(
            (o = r.data) == null ? void 0 : o.chunk,
            a
          );
          return;
        }
        N(r, a);
      }
    })
  ).pipeThrough(ie(t)).pipeThrough(new TextDecoderStream()).pipeThrough(
    new TransformStream({
      transform: async (r, a) => {
        a.enqueue($("text", r));
      }
    })
  );
}
function nt(e, t) {
  return E(e, t).pipeThrough(
    new TextEncoderStream()
  );
}
function ot(e, t) {
  var r;
  const a = E(
    e,
    t?.callbacks
  ).pipeThrough(new TextEncoderStream()), o = t?.data, s = t?.init, d = o ? se(o.stream, a) : a;
  return new Response(d, {
    status: (r = s?.status) != null ? r : 200,
    statusText: s?.statusText,
    headers: ee(s?.headers, {
      contentType: "text/plain; charset=utf-8",
      dataStreamVersion: "v1"
    })
  });
}
function st(e, t) {
  t.dataStream.merge(E(e, t.callbacks));
}
function N(e, t) {
  if (typeof e.content == "string")
    t.enqueue(e.content);
  else {
    const r = e.content;
    for (const a of r)
      a.type === "text" && t.enqueue(a.text);
  }
}
var it = {};
I(it, {
  mergeIntoDataStream: () => lt,
  toDataStream: () => ut,
  toDataStreamResponse: () => ct
});
function O(e, t) {
  const r = dt();
  return Ce(e[Symbol.asyncIterator]()).pipeThrough(
    new TransformStream({
      async transform(a, o) {
        o.enqueue(r(a.delta));
      }
    })
  ).pipeThrough(ie(t)).pipeThrough(new TextDecoderStream()).pipeThrough(
    new TransformStream({
      transform: async (a, o) => {
        o.enqueue($("text", a));
      }
    })
  );
}
function ut(e, t) {
  return O(e, t).pipeThrough(
    new TextEncoderStream()
  );
}
function ct(e, t = {}) {
  var r;
  const { init: a, data: o, callbacks: s } = t, d = O(e, s).pipeThrough(
    new TextEncoderStream()
  ), h = o ? se(o.stream, d) : d;
  return new Response(h, {
    status: (r = a?.status) != null ? r : 200,
    statusText: a?.statusText,
    headers: ee(a?.headers, {
      contentType: "text/plain; charset=utf-8",
      dataStreamVersion: "v1"
    })
  });
}
function lt(e, t) {
  t.dataStream.merge(O(e, t.callbacks));
}
function dt() {
  let e = !0;
  return (t) => (e && (t = t.trimStart(), t && (e = !1)), t);
}
const pt = [
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
function mt() {
  const [e] = pe(), { ready: t, importChat: r } = Se(), { ready: a, gitClone: o } = ve(), [s, d] = b.useState(!1), [h, S] = b.useState(!0), y = async (i) => {
    if (!(!a && !t) && i) {
      const u = we().add(pt);
      try {
        const { workdir: v, data: g } = await o(i);
        if (r) {
          const ue = Object.keys(g).filter((p) => !u.ignores(p)), ce = new TextDecoder("utf-8"), M = ue.map((p) => {
            const { data: w, encoding: de } = g[p];
            return {
              path: p,
              content: de === "utf8" ? w : w instanceof Uint8Array ? ce.decode(w) : ""
            };
          }).filter((p) => p.content), le = await be(M), R = Te(le), x = [{
            role: "assistant",
            content: `Cloning the repo ${i} into ${v}
<boltArtifact id="imported-files" title="Git Cloned Files"  type="bundled">
${M.map(
              (p) => `<boltAction type="file" filePath="${p.path}">
${je(p.content)}
</boltAction>`
            ).join(`
`)}
</boltArtifact>`,
            id: P(),
            createdAt: /* @__PURE__ */ new Date()
          }];
          R && (x.push({
            role: "user",
            id: P(),
            content: "Setup the codebase and Start the application"
          }), x.push(R)), await r(`Git Project:${i.split("/").slice(-1)[0]}`, x, { gitUrl: i });
        }
      } catch (v) {
        console.error("Error during import:", v), D.error("Failed to import repository"), S(!1), window.location.href = "/";
        return;
      }
    }
  };
  return b.useEffect(() => {
    if (!t || !a || s)
      return;
    const i = e.get("url");
    if (!i) {
      window.location.href = "/";
      return;
    }
    y(i).catch((u) => {
      console.error("Error importing repo:", u), D.error("Failed to import repository"), S(!1), window.location.href = "/";
    }), d(!0);
  }, [e, t, a, s]), /* @__PURE__ */ l.jsx(F, { fallback: /* @__PURE__ */ l.jsx(V, {}), children: () => /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    /* @__PURE__ */ l.jsx(ye, {}),
    h && /* @__PURE__ */ l.jsx(xe, { message: "Please wait while we clone the repository..." })
  ] }) });
}
const ft = "_", ht = {
  rayContainer: ft
}, gt = () => /* @__PURE__ */ l.jsx("div", { className: `${ht.rayContainer} ` }), bt = () => [{
  title: "Bolt"
}, {
  name: "description",
  content: "Talk with Bolt, an AI assistant from StackBlitz"
}];
function Tt() {
  return /* @__PURE__ */ l.jsxs("div", {
    className: "flex flex-col h-full w-full bg-bolt-elements-background-depth-1",
    children: [/* @__PURE__ */ l.jsx(gt, {}), /* @__PURE__ */ l.jsx(_e, {}), /* @__PURE__ */ l.jsx(F, {
      fallback: /* @__PURE__ */ l.jsx(V, {}),
      children: () => /* @__PURE__ */ l.jsx(mt, {})
    })]
  });
}
export {
  Tt as default,
  bt as meta
};
