import { m as Ce, v as x, x as w, y as ke, z as De, B as oe, p as Te, C as j, F as Oe, G as k, H as Ue, I as v, J as Me, d as O, U as L, K as Ae, L as se, M as z, s as Pe, N as Fe, O as He, P as je, Q as G, R as Y, E as Le, T as $e, S as le, V as Ne, W as ze, X as Ie, Y as Ve, Z as Xe, u as Ke } from "./single-fetch-DXQUw6pg.js";
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
var Je = Ge, We = Ye, Be = Object.prototype.toString, C = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
function Ge(e, t) {
  if (typeof e != "string")
    throw new TypeError("argument str must be a string");
  for (var n = {}, r = t || {}, a = r.decode || Qe, i = 0; i < e.length; ) {
    var o = e.indexOf("=", i);
    if (o === -1)
      break;
    var s = e.indexOf(";", i);
    if (s === -1)
      s = e.length;
    else if (s < o) {
      i = e.lastIndexOf(";", o - 1) + 1;
      continue;
    }
    var l = e.slice(i, o).trim();
    if (n[l] === void 0) {
      var u = e.slice(o + 1, s).trim();
      u.charCodeAt(0) === 34 && (u = u.slice(1, -1)), n[l] = et(u, a);
    }
    i = s + 1;
  }
  return n;
}
function Ye(e, t, n) {
  var r = n || {}, a = r.encode || Ze;
  if (typeof a != "function")
    throw new TypeError("option encode is invalid");
  if (!C.test(e))
    throw new TypeError("argument name is invalid");
  var i = a(t);
  if (i && !C.test(i))
    throw new TypeError("argument val is invalid");
  var o = e + "=" + i;
  if (r.maxAge != null) {
    var s = r.maxAge - 0;
    if (isNaN(s) || !isFinite(s))
      throw new TypeError("option maxAge is invalid");
    o += "; Max-Age=" + Math.floor(s);
  }
  if (r.domain) {
    if (!C.test(r.domain))
      throw new TypeError("option domain is invalid");
    o += "; Domain=" + r.domain;
  }
  if (r.path) {
    if (!C.test(r.path))
      throw new TypeError("option path is invalid");
    o += "; Path=" + r.path;
  }
  if (r.expires) {
    var l = r.expires;
    if (!qe(l) || isNaN(l.valueOf()))
      throw new TypeError("option expires is invalid");
    o += "; Expires=" + l.toUTCString();
  }
  if (r.httpOnly && (o += "; HttpOnly"), r.secure && (o += "; Secure"), r.partitioned && (o += "; Partitioned"), r.priority) {
    var u = typeof r.priority == "string" ? r.priority.toLowerCase() : r.priority;
    switch (u) {
      case "low":
        o += "; Priority=Low";
        break;
      case "medium":
        o += "; Priority=Medium";
        break;
      case "high":
        o += "; Priority=High";
        break;
      default:
        throw new TypeError("option priority is invalid");
    }
  }
  if (r.sameSite) {
    var c = typeof r.sameSite == "string" ? r.sameSite.toLowerCase() : r.sameSite;
    switch (c) {
      case !0:
        o += "; SameSite=Strict";
        break;
      case "lax":
        o += "; SameSite=Lax";
        break;
      case "strict":
        o += "; SameSite=Strict";
        break;
      case "none":
        o += "; SameSite=None";
        break;
      default:
        throw new TypeError("option sameSite is invalid");
    }
  }
  return o;
}
function Qe(e) {
  return e.indexOf("%") !== -1 ? decodeURIComponent(e) : e;
}
function Ze(e) {
  return encodeURIComponent(e);
}
function qe(e) {
  return Be.call(e) === "[object Date]" || e instanceof Date;
}
function et(e, t) {
  try {
    return t(e);
  } catch {
    return e;
  }
}
/**
 * @remix-run/server-runtime v2.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
const Q = {};
function ue(e, t) {
  !e && !Q[t] && (Q[t] = !0, console.warn(t));
}
/**
 * @remix-run/server-runtime v2.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
const tt = ({
  sign: e,
  unsign: t
}) => (n, r = {}) => {
  let {
    secrets: a = [],
    ...i
  } = {
    path: "/",
    sameSite: "lax",
    ...r
  };
  return st(n, i.expires), {
    get name() {
      return n;
    },
    get isSigned() {
      return a.length > 0;
    },
    get expires() {
      return typeof i.maxAge < "u" ? new Date(Date.now() + i.maxAge * 1e3) : i.expires;
    },
    async parse(o, s) {
      if (!o) return null;
      let l = Je(o, {
        ...i,
        ...s
      });
      return n in l ? l[n] === "" ? "" : await rt(t, l[n], a) : null;
    },
    async serialize(o, s) {
      return We(n, o === "" ? "" : await nt(e, o, a), {
        ...i,
        ...s
      });
    }
  };
}, I = (e) => e != null && typeof e.name == "string" && typeof e.isSigned == "boolean" && typeof e.parse == "function" && typeof e.serialize == "function";
async function nt(e, t, n) {
  let r = at(t);
  return n.length > 0 && (r = await e(r, n[0])), r;
}
async function rt(e, t, n) {
  if (n.length > 0) {
    for (let r of n) {
      let a = await e(t, r);
      if (a !== !1)
        return Z(a);
    }
    return null;
  }
  return Z(t);
}
function at(e) {
  return btoa(ot(encodeURIComponent(JSON.stringify(e))));
}
function Z(e) {
  try {
    return JSON.parse(decodeURIComponent(it(atob(e))));
  } catch {
    return {};
  }
}
function it(e) {
  let t = e.toString(), n = "", r = 0, a, i;
  for (; r < t.length; )
    a = t.charAt(r++), /[\w*+\-./@]/.exec(a) ? n += a : (i = a.charCodeAt(0), i < 256 ? n += "%" + q(i, 2) : n += "%u" + q(i, 4).toUpperCase());
  return n;
}
function q(e, t) {
  let n = e.toString(16);
  for (; n.length < t; ) n = "0" + n;
  return n;
}
function ot(e) {
  let t = e.toString(), n = "", r = 0, a, i;
  for (; r < t.length; ) {
    if (a = t.charAt(r++), a === "%") {
      if (t.charAt(r) === "u") {
        if (i = t.slice(r + 1, r + 5), /^[\da-f]{4}$/i.exec(i)) {
          n += String.fromCharCode(parseInt(i, 16)), r += 5;
          continue;
        }
      } else if (i = t.slice(r, r + 2), /^[\da-f]{2}$/i.exec(i)) {
        n += String.fromCharCode(parseInt(i, 16)), r += 2;
        continue;
      }
    }
    n += a;
  }
  return n;
}
function st(e, t) {
  ue(!t, `The "${e}" cookie has an "expires" property set. This will cause the expires value to not be updated when the session is committed. Instead, you should set the expires value when serializing the cookie. You can use \`commitSession(session, { expires })\` if using a session storage object, or \`cookie.serialize("value", { expires })\` if you're using the cookie directly.`);
}
function U(e) {
  const t = unescape(encodeURIComponent(e));
  return Uint8Array.from(t, (n, r) => t.charCodeAt(r));
}
function lt(e) {
  const t = String.fromCharCode.apply(null, e);
  return decodeURIComponent(escape(t));
}
function D(...e) {
  const t = new Uint8Array(e.reduce((r, a) => r + a.length, 0));
  let n = 0;
  for (const r of e)
    t.set(r, n), n += r.length;
  return t;
}
function ut(e, t) {
  if (e.length !== t.length)
    return !1;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
function ee(e) {
  return e instanceof Uint8Array ? (t) => e[t] : e;
}
function F(e, t, n, r, a) {
  const i = ee(e), o = ee(n);
  for (let s = 0; s < a; ++s)
    if (i(t + s) !== o(r + s))
      return !1;
  return !0;
}
function ct(e) {
  const t = new Array(256).fill(e.length);
  if (e.length > 1)
    for (let n = 0; n < e.length - 1; n++)
      t[e[n]] = e.length - 1 - n;
  return t;
}
const g = Symbol("Match");
class V {
  constructor(t) {
    this._lookbehind = new Uint8Array(), typeof t == "string" ? this._needle = t = U(t) : this._needle = t, this._lastChar = t[t.length - 1], this._occ = ct(t);
  }
  feed(t) {
    let n = 0, r;
    const a = [];
    for (; n !== t.length; )
      [n, ...r] = this._feed(t, n), a.push(...r);
    return a;
  }
  end() {
    const t = this._lookbehind;
    return this._lookbehind = new Uint8Array(), t;
  }
  _feed(t, n) {
    const r = [];
    let a = -this._lookbehind.length;
    if (a < 0) {
      for (; a < 0 && a <= t.length - this._needle.length; ) {
        const i = this._charAt(t, a + this._needle.length - 1);
        if (i === this._lastChar && this._memcmp(t, a, this._needle.length - 1))
          return a > -this._lookbehind.length && r.push(this._lookbehind.slice(0, this._lookbehind.length + a)), r.push(g), this._lookbehind = new Uint8Array(), [
            a + this._needle.length,
            ...r
          ];
        a += this._occ[i];
      }
      if (a < 0)
        for (; a < 0 && !this._memcmp(t, a, t.length - a); )
          a++;
      if (a >= 0)
        r.push(this._lookbehind), this._lookbehind = new Uint8Array();
      else {
        const i = this._lookbehind.length + a;
        return i > 0 && (r.push(this._lookbehind.slice(0, i)), this._lookbehind = this._lookbehind.slice(i)), this._lookbehind = Uint8Array.from(new Array(this._lookbehind.length + t.length), (o, s) => this._charAt(t, s - this._lookbehind.length)), [
          t.length,
          ...r
        ];
      }
    }
    for (a += n; a <= t.length - this._needle.length; ) {
      const i = t[a + this._needle.length - 1];
      if (i === this._lastChar && t[a] === this._needle[0] && F(this._needle, 0, t, a, this._needle.length - 1))
        return a > n && r.push(t.slice(n, a)), r.push(g), [
          a + this._needle.length,
          ...r
        ];
      a += this._occ[i];
    }
    if (a < t.length) {
      for (; a < t.length && (t[a] !== this._needle[0] || !F(t, a, this._needle, 0, t.length - a)); )
        ++a;
      a < t.length && (this._lookbehind = t.slice(a));
    }
    return a > 0 && r.push(t.slice(n, a < t.length ? a : t.length)), [
      t.length,
      ...r
    ];
  }
  _charAt(t, n) {
    return n < 0 ? this._lookbehind[this._lookbehind.length + n] : t[n];
  }
  _memcmp(t, n, r) {
    return F(this._charAt.bind(this, t), n, this._needle, 0, r);
  }
}
class dt {
  constructor(t, n) {
    this._readableStream = n, this._search = new V(t);
  }
  async *[Symbol.asyncIterator]() {
    const t = this._readableStream.getReader();
    try {
      for (; ; ) {
        const r = await t.read();
        if (r.done)
          break;
        yield* this._search.feed(r.value);
      }
      const n = this._search.end();
      n.length && (yield n);
    } finally {
      t.releaseLock();
    }
  }
}
const ft = Function.prototype.apply.bind(D, void 0), ce = U("--"), _ = U(`\r
`);
function ht(e) {
  const t = e.split(";").map((r) => r.trim());
  if (t.shift() !== "form-data")
    throw new Error('malformed content-disposition header: missing "form-data" in `' + JSON.stringify(t) + "`");
  const n = {};
  for (const r of t) {
    const a = r.split("=", 2);
    if (a.length !== 2)
      throw new Error("malformed content-disposition header: key-value pair not found - " + r + " in `" + e + "`");
    const [i, o] = a;
    if (o[0] === '"' && o[o.length - 1] === '"')
      n[i] = o.slice(1, -1).replace(/\\"/g, '"');
    else if (o[0] !== '"' && o[o.length - 1] !== '"')
      n[i] = o;
    else if (o[0] === '"' && o[o.length - 1] !== '"' || o[0] !== '"' && o[o.length - 1] === '"')
      throw new Error("malformed content-disposition header: mismatched quotations in `" + e + "`");
  }
  if (!n.name)
    throw new Error("malformed content-disposition header: missing field name in `" + e + "`");
  return n;
}
function pt(e) {
  const t = [];
  let n = !1, r;
  for (; typeof (r = e.shift()) < "u"; ) {
    const a = r.indexOf(":");
    if (a === -1)
      throw new Error("malformed multipart-form header: missing colon");
    const i = r.slice(0, a).trim().toLowerCase(), o = r.slice(a + 1).trim();
    switch (i) {
      case "content-disposition":
        n = !0, t.push(...Object.entries(ht(o)));
        break;
      case "content-type":
        t.push([
          "contentType",
          o
        ]);
    }
  }
  if (!n)
    throw new Error("malformed multipart-form header: missing content-disposition");
  return Object.fromEntries(t);
}
async function mt(e, t) {
  let n = !0, r = !1;
  const a = [[]], i = new V(_);
  for (; ; ) {
    const o = await e.next();
    if (o.done)
      throw new Error("malformed multipart-form data: unexpected end of stream");
    if (n && o.value !== g && ut(o.value.slice(0, 2), ce))
      return [
        void 0,
        new Uint8Array()
      ];
    let s;
    if (o.value !== g)
      s = o.value;
    else if (!r)
      s = t;
    else
      throw new Error("malformed multipart-form data: unexpected boundary");
    if (!s.length)
      continue;
    n && (n = !1);
    const l = i.feed(s);
    for (const [u, c] of l.entries()) {
      const p = c === g;
      if (!(!p && !c.length)) {
        if (r && p)
          return l.push(i.end()), [
            a.filter((d) => d.length).map(ft).map(lt),
            D(...l.slice(u + 1).map((d) => d === g ? _ : d))
          ];
        (r = p) ? a.push([]) : a[a.length - 1].push(c);
      }
    }
  }
}
async function* yt(e, t) {
  const n = D(ce, U(t)), r = new dt(n, e)[Symbol.asyncIterator]();
  for (; ; ) {
    const i = await r.next();
    if (i.done)
      return;
    if (i.value === g)
      break;
  }
  const a = new V(_);
  for (; ; ) {
    let u = function(y) {
      const m = [];
      for (const f of a.feed(y))
        l && m.push(_), (l = f === g) || m.push(f);
      return D(...m);
    };
    const [i, o] = await mt(r, n);
    if (!i)
      return;
    async function s() {
      const y = await r.next();
      if (y.done)
        throw new Error("malformed multipart-form data: unexpected end of stream");
      return y;
    }
    let l = !1, c = !1;
    async function p() {
      const y = await s();
      let m;
      if (y.value !== g)
        m = y.value;
      else if (!l)
        m = _;
      else
        return c = !0, { value: a.end() };
      return { value: u(m) };
    }
    const d = [{ value: u(o) }];
    for (yield {
      ...pt(i),
      data: {
        [Symbol.asyncIterator]() {
          return this;
        },
        async next() {
          for (; ; ) {
            const y = d.shift();
            if (!y)
              break;
            if (y.value.length > 0)
              return y;
          }
          for (; ; ) {
            if (c)
              return {
                done: c,
                value: void 0
              };
            const y = await p();
            if (y.value.length > 0)
              return y;
          }
        }
      }
    }; !c; )
      d.push(await p());
  }
}
/**
 * @remix-run/server-runtime v2.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function gt(...e) {
  return async (t) => {
    for (let n of e) {
      let r = await n(t);
      if (typeof r < "u" && r !== null)
        return r;
    }
  };
}
async function wt(e, t) {
  let n = e.headers.get("Content-Type") || "", [r, a] = n.split(/\s*;\s*boundary=/);
  if (!e.body || !a || r !== "multipart/form-data")
    throw new TypeError("Could not parse content as FormData.");
  let i = new FormData(), o = yt(e.body, a);
  for await (let s of o) {
    if (s.done) break;
    typeof s.filename == "string" && (s.filename = s.filename.split(/[/\\]/).pop());
    let l = await t(s);
    typeof l < "u" && l !== null && i.append(s.name, l);
  }
  return i;
}
/**
 * @remix-run/server-runtime v2.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function St(e) {
  return Object.keys(e).reduce((t, n) => (t[n] = e[n].module, t), {});
}
/**
 * @remix-run/server-runtime v2.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function te(e, t) {
  if (e === !1 || e === null || typeof e > "u")
    throw console.error("The following error is a bug in Remix; please open an issue! https://github.com/remix-run/remix/issues/new"), new Error(t);
}
/**
 * @remix-run/server-runtime v2.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function $(e, t, n) {
  let r = Ce(e, t, n);
  return r ? r.map((a) => ({
    params: a.params,
    pathname: a.pathname,
    route: a.route
  })) : null;
}
/**
 * @remix-run/server-runtime v2.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
async function bt({
  loadContext: e,
  action: t,
  params: n,
  request: r,
  routeId: a,
  singleFetch: i
}) {
  let o = await t({
    request: i ? fe(T(r)) : de(T(r)),
    context: e,
    params: n
  });
  if (o === void 0)
    throw new Error(`You defined an action for route "${a}" but didn't return anything from your \`action\` function. Please return a value or \`null\`.`);
  return i || w(o) ? o : x(o);
}
async function Rt({
  loadContext: e,
  loader: t,
  params: n,
  request: r,
  routeId: a,
  singleFetch: i
}) {
  let o = await t({
    request: i ? fe(T(r)) : de(T(r)),
    context: e,
    params: n
  });
  if (o === void 0)
    throw new Error(`You defined a loader for route "${a}" but didn't return anything from your \`loader\` function. Please return a value or \`null\`.`);
  return ke(o) ? o.init && De(o.init.status || 200) ? oe(new Headers(o.init.headers).get("Location"), o.init) : o : i || w(o) ? o : x(o);
}
function T(e) {
  let t = new URL(e.url), n = t.searchParams.getAll("index");
  t.searchParams.delete("index");
  let r = [];
  for (let i of n)
    i && r.push(i);
  for (let i of r)
    t.searchParams.append("index", i);
  let a = {
    method: e.method,
    body: e.body,
    headers: e.headers,
    signal: e.signal
  };
  return a.body && (a.duplex = "half"), new Request(t.href, a);
}
function de(e) {
  let t = new URL(e.url);
  t.searchParams.delete("_data");
  let n = {
    method: e.method,
    body: e.body,
    headers: e.headers,
    signal: e.signal
  };
  return n.body && (n.duplex = "half"), new Request(t.href, n);
}
function fe(e) {
  let t = new URL(e.url);
  t.searchParams.delete("_routes");
  let n = {
    method: e.method,
    body: e.body,
    headers: e.headers,
    signal: e.signal
  };
  return n.body && (n.duplex = "half"), new Request(t.href, n);
}
/**
 * @remix-run/server-runtime v2.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function he(e) {
  let t = {};
  return Object.values(e).forEach((n) => {
    let r = n.parentId || "";
    t[r] || (t[r] = []), t[r].push(n);
  }), t;
}
function pe(e, t = "", n = he(e)) {
  return (n[t] || []).map((r) => ({
    ...r,
    children: pe(e, r.id, n)
  }));
}
function me(e, t, n = "", r = he(e)) {
  return (r[n] || []).map((a) => {
    let i = {
      // Always include root due to default boundaries
      hasErrorBoundary: a.id === "root" || a.module.ErrorBoundary != null,
      id: a.id,
      path: a.path,
      loader: a.module.loader ? (
        // Need to use RR's version here to permit the optional context even
        // though we know it'll always be provided in remix
        (o, s) => Rt({
          request: o.request,
          params: o.params,
          loadContext: o.context,
          loader: a.module.loader,
          routeId: a.id,
          singleFetch: t.v3_singleFetch === !0
        })
      ) : void 0,
      action: a.module.action ? (o, s) => bt({
        request: o.request,
        params: o.params,
        loadContext: o.context,
        action: a.module.action,
        routeId: a.id,
        singleFetch: t.v3_singleFetch === !0
      }) : void 0,
      handle: a.module.handle
    };
    return a.index ? {
      index: !0,
      ...i
    } : {
      caseSensitive: a.caseSensitive,
      children: me(e, t, a.id, r),
      ...i
    };
  });
}
/**
 * @remix-run/server-runtime v2.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
const _t = {
  "&": "\\u0026",
  ">": "\\u003e",
  "<": "\\u003c",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
}, vt = /[&><\u2028\u2029]/g;
function xt(e) {
  return e.replace(vt, (t) => _t[t]);
}
/**
 * @remix-run/server-runtime v2.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function ne(e) {
  return xt(JSON.stringify(e));
}
/**
 * @remix-run/server-runtime v2.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
async function Et(e, t) {
  if (t ??= Te.env.REMIX_DEV_ORIGIN, !t) throw Error("Dev server origin not set");
  let n = new URL(t);
  n.pathname = "ping";
  let r = await fetch(n.href, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      buildHash: e.assets.version
    })
  }).catch((a) => {
    throw console.error(`Could not reach Remix dev server at ${n}`), a;
  });
  if (!r.ok)
    throw console.error(`Could not reach Remix dev server at ${n} (${r.status})`), Error(await r.text());
}
function Ct(e) {
  console.log(`[REMIX DEV] ${e.assets.version} ready`);
}
const ye = "__remix_devServerHooks";
function kt(e) {
  globalThis[ye] = e;
}
function re() {
  return globalThis[ye];
}
/**
 * @remix-run/server-runtime v2.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Dt(e, t) {
  return `⚠️ REMIX FUTURE CHANGE: Externally-accessed resource routes will no longer be able to return raw JavaScript objects or \`null\` in React Router v7 when Single Fetch becomes the default. You can prepare for this change at your convenience by wrapping the data returned from your \`${e}\` function in the \`${t}\` route with \`json()\`.  For instructions on making this change, see https://remix.run/docs/en/v2.13.1/guides/single-fetch#resource-routes`;
}
/**
 * @remix-run/server-runtime v2.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
const ge = /* @__PURE__ */ new Set([100, 101, 204, 205, 304]);
function ae(e, t) {
  var n, r;
  let a = pe(e.routes), i = me(e.routes, e.future), o = Ne(t) ? t : v.Production, s = Me(i, {
    basename: e.basename,
    future: {
      v7_relativeSplatPath: ((n = e.future) === null || n === void 0 ? void 0 : n.v3_relativeSplatPath) === !0,
      v7_throwAbortReason: ((r = e.future) === null || r === void 0 ? void 0 : r.v3_throwAbortReason) === !0
    }
  }), l = e.entry.module.handleError || ((u, {
    request: c
  }) => {
    o !== v.Test && !c.signal.aborted && console.error(
      // @ts-expect-error This is "private" from users but intended for internal use
      O(u) && u.error ? u.error : u
    );
  });
  return {
    routes: a,
    dataRoutes: i,
    serverMode: o,
    staticHandler: s,
    errorHandler: l
  };
}
const Tt = (e, t) => {
  let n, r, a, i, o;
  return async function(l, u = {}) {
    if (n = typeof e == "function" ? await e() : e, t ??= n.mode, typeof e == "function") {
      let h = ae(n, t);
      r = h.routes, a = h.serverMode, i = h.staticHandler, o = h.errorHandler;
    } else if (!r || !a || !i || !o) {
      let h = ae(n, t);
      r = h.routes, a = h.serverMode, i = h.staticHandler, o = h.errorHandler;
    }
    let c = new URL(l.url), p = {}, d = (h) => {
      if (t === v.Development) {
        var S, b;
        (S = re()) === null || S === void 0 || (b = S.processRequestError) === null || b === void 0 || b.call(S, h);
      }
      o(h, {
        context: u,
        params: p,
        request: l
      });
    }, y = `${n.basename ?? "/"}/__manifest`.replace(/\/+/g, "/");
    if (c.pathname === y)
      try {
        return await Ot(n, r, c);
      } catch (h) {
        return d(h), new Response("Unknown Server Error", {
          status: 500
        });
      }
    let m = $(r, c.pathname, n.basename);
    m && m.length > 0 && Object.assign(p, m[0].params);
    let f;
    if (c.searchParams.has("_data")) {
      n.future.v3_singleFetch && d(new Error("Warning: Single fetch-enabled apps should not be making ?_data requests, this is likely to break in the future"));
      let h = c.searchParams.get("_data");
      f = await Ut(a, n, i, h, l, u, d), n.entry.module.handleDataRequest && (f = await n.entry.module.handleDataRequest(f, {
        context: u,
        params: p,
        request: l
      }), j(f) && (f = be(f, n.basename)));
    } else if (n.future.v3_singleFetch && c.pathname.endsWith(".data")) {
      let h = new URL(l.url);
      h.pathname = h.pathname.replace(/\.data$/, "").replace(/^\/_root$/, "/");
      let S = $(r, h.pathname, n.basename);
      if (f = await Mt(a, n, i, l, h, u, d), n.entry.module.handleDataRequest && (f = await n.entry.module.handleDataRequest(f, {
        context: u,
        params: S ? S[0].params : {},
        request: l
      }), j(f))) {
        let b = Oe(f.status, f.headers, n.basename);
        l.method === "GET" && (b = {
          [le]: b
        });
        let B = new Headers(f.headers);
        return B.set("Content-Type", "text/x-script"), new Response(k(b, l.signal, n.entry.module.streamTimeout, a), {
          status: Ue,
          headers: B
        });
      }
    } else if (m && m[m.length - 1].route.module.default == null && m[m.length - 1].route.module.ErrorBoundary == null)
      f = await Pt(a, n, i, m.slice(-1)[0].route.id, l, u, d);
    else {
      var E, P;
      let h = t === v.Development ? await ((E = re()) === null || E === void 0 || (P = E.getCriticalCss) === null || P === void 0 ? void 0 : P.call(E, n, c.pathname)) : void 0;
      f = await At(a, n, i, l, u, d, h);
    }
    return l.method === "HEAD" ? new Response(null, {
      headers: f.headers,
      status: f.status,
      statusText: f.statusText
    }) : f;
  };
};
async function Ot(e, t, n) {
  let r = {};
  if (n.searchParams.has("p")) {
    for (let a of n.searchParams.getAll("p")) {
      let i = $(t, a, e.basename);
      if (i)
        for (let o of i) {
          let s = o.route.id;
          r[s] = e.assets.routes[s];
        }
    }
    return x(r, {
      headers: {
        "Cache-Control": "public, max-age=31536000, immutable"
      }
    });
  }
  return new Response("Invalid Request", {
    status: 400
  });
}
async function Ut(e, t, n, r, a, i, o) {
  try {
    let s = await n.queryRoute(a, {
      routeId: r,
      requestContext: i
    });
    if (j(s))
      return be(s, t.basename);
    if (L in s) {
      let l = s[L], u = Ae(l, a.signal, e), c = l.init || {}, p = new Headers(c.headers);
      return p.set("Content-Type", "text/remix-deferred"), p.set("X-Remix-Response", "yes"), c.headers = p, new Response(u, c);
    }
    return s = N(s, "X-Remix-Response", "yes"), s;
  } catch (s) {
    if (w(s))
      return N(s, "X-Remix-Catch", "yes");
    if (O(s))
      return o(s), we(s, e);
    let l = s instanceof Error || s instanceof DOMException ? s : new Error("Unexpected Server Error");
    return o(l), se(z(l, e), {
      status: 500,
      headers: {
        "X-Remix-Error": "yes"
      }
    });
  }
}
async function Mt(e, t, n, r, a, i, o) {
  let {
    result: s,
    headers: l,
    status: u
  } = r.method !== "GET" ? await Fe(t, e, n, r, a, i, o) : await He(t, e, n, r, a, i, o), c = new Headers(l);
  return c.set("X-Remix-Response", "yes"), ge.has(u) ? new Response(null, {
    status: u,
    headers: c
  }) : (c.set("Content-Type", "text/x-script"), new Response(k(s, r.signal, t.entry.module.streamTimeout, e), {
    status: u || 200,
    headers: c
  }));
}
async function At(e, t, n, r, a, i, o) {
  let s;
  try {
    s = await n.query(r, {
      requestContext: a
    });
  } catch (d) {
    return i(d), new Response(null, {
      status: 500
    });
  }
  if (w(s))
    return s;
  let l = je(t, s);
  if (ge.has(s.statusCode))
    return new Response(null, {
      status: s.statusCode,
      headers: l
    });
  s.errors && (Object.values(s.errors).forEach((d) => {
    (!O(d) || d.error) && i(d);
  }), s.errors = G(s.errors, e));
  let u = {
    loaderData: s.loaderData,
    actionData: s.actionData,
    errors: Y(s.errors, e)
  }, c = {
    manifest: t.assets,
    routeModules: St(t.routes),
    staticHandlerContext: s,
    criticalCss: o,
    serverHandoffString: ne({
      basename: t.basename,
      criticalCss: o,
      future: t.future,
      isSpaMode: t.isSpaMode,
      ...t.future.v3_singleFetch ? null : {
        state: u
      }
    }),
    ...t.future.v3_singleFetch ? {
      serverHandoffStream: k(u, r.signal, t.entry.module.streamTimeout, e),
      renderMeta: {}
    } : null,
    future: t.future,
    isSpaMode: t.isSpaMode,
    serializeError: (d) => z(d, e)
  }, p = t.entry.module.default;
  try {
    return await p(r, s.statusCode, l, c, a);
  } catch (d) {
    i(d);
    let y = d;
    if (w(d))
      try {
        let f = await Ft(d);
        y = new Le(d.status, d.statusText, f);
      } catch {
      }
    s = $e(n.dataRoutes, s, y), s.errors && (s.errors = G(s.errors, e));
    let m = {
      loaderData: s.loaderData,
      actionData: s.actionData,
      errors: Y(s.errors, e)
    };
    c = {
      ...c,
      staticHandlerContext: s,
      serverHandoffString: ne({
        basename: t.basename,
        future: t.future,
        isSpaMode: t.isSpaMode,
        ...t.future.v3_singleFetch ? null : {
          state: m
        }
      }),
      ...t.future.v3_singleFetch ? {
        serverHandoffStream: k(m, r.signal, t.entry.module.streamTimeout, e),
        renderMeta: {}
      } : null
    };
    try {
      return await p(r, s.statusCode, l, c, a);
    } catch (f) {
      return i(f), Se(f, e);
    }
  }
}
async function Pt(e, t, n, r, a, i, o) {
  try {
    let s = await n.queryRoute(a, {
      routeId: r,
      requestContext: i
    });
    return typeof s == "object" && s !== null && te(!(L in s), `You cannot return a \`defer()\` response from a Resource Route.  Did you forget to export a default UI component from the "${r}" route?`), t.future.v3_singleFetch && !w(s) && (console.warn(Dt(a.method === "GET" ? "loader" : "action", r)), s = x(s)), te(w(s), "Expected a Response to be returned from queryRoute"), s;
  } catch (s) {
    return w(s) ? N(s, "X-Remix-Catch", "yes") : O(s) ? (s && o(s), we(s, e)) : (o(s), Se(s, e));
  }
}
function we(e, t) {
  return se(z(
    // @ts-expect-error This is "private" from users but intended for internal use
    e.error || new Error("Unexpected Server Error"),
    t
  ), {
    status: e.status,
    statusText: e.statusText,
    headers: {
      "X-Remix-Error": "yes"
    }
  });
}
function Se(e, t) {
  let n = "Unexpected Server Error";
  return t !== v.Production && (n += `

${String(e)}`), new Response(n, {
    status: 500,
    headers: {
      "Content-Type": "text/plain"
    }
  });
}
function Ft(e) {
  let t = e.headers.get("Content-Type");
  return t && /\bapplication\/json\b/.test(t) ? e.body == null ? null : e.json() : e.text();
}
function be(e, t) {
  let n = new Headers(e.headers), r = n.get("Location");
  return n.set("X-Remix-Redirect", t && Pe(r, t) || r), n.set("X-Remix-Status", String(e.status)), n.delete("Location"), e.headers.get("Set-Cookie") !== null && n.set("X-Remix-Revalidate", "yes"), new Response(null, {
    status: 204,
    headers: n
  });
}
function N(e, t, n) {
  let r = new Headers(e.headers);
  return r.set(t, n), new Response(e.body, {
    status: e.status,
    statusText: e.statusText,
    headers: r,
    duplex: e.body ? "half" : void 0
  });
}
/**
 * @remix-run/server-runtime v2.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function H(e) {
  return `__flash_${e}__`;
}
const X = (e = {}, t = "") => {
  let n = new Map(Object.entries(e));
  return {
    get id() {
      return t;
    },
    get data() {
      return Object.fromEntries(n);
    },
    has(r) {
      return n.has(r) || n.has(H(r));
    },
    get(r) {
      if (n.has(r)) return n.get(r);
      let a = H(r);
      if (n.has(a)) {
        let i = n.get(a);
        return n.delete(a), i;
      }
    },
    set(r, a) {
      n.set(r, a);
    },
    flash(r, a) {
      n.set(H(r), a);
    },
    unset(r) {
      n.delete(r);
    }
  };
}, Ht = (e) => e != null && typeof e.id == "string" && typeof e.data < "u" && typeof e.has == "function" && typeof e.get == "function" && typeof e.set == "function" && typeof e.flash == "function" && typeof e.unset == "function", jt = (e) => ({
  cookie: t,
  createData: n,
  readData: r,
  updateData: a,
  deleteData: i
}) => {
  let o = I(t) ? t : e(t?.name || "__session", t);
  return Re(o), {
    async getSession(s, l) {
      let u = s && await o.parse(s, l), c = u && await r(u);
      return X(c || {}, u || "");
    },
    async commitSession(s, l) {
      let {
        id: u,
        data: c
      } = s, p = l?.maxAge != null ? new Date(Date.now() + l.maxAge * 1e3) : l?.expires != null ? l.expires : o.expires;
      return u ? await a(u, c, p) : u = await n(c, p), o.serialize(u, l);
    },
    async destroySession(s, l) {
      return await i(s.id), o.serialize("", {
        ...l,
        maxAge: void 0,
        expires: /* @__PURE__ */ new Date(0)
      });
    }
  };
};
function Re(e) {
  ue(e.isSigned, `The "${e.name}" cookie is not signed, but session cookies should be signed to prevent tampering on the client before they are sent back to the server. See https://remix.run/utils/cookies#signing-cookies for more information.`);
}
/**
 * @remix-run/server-runtime v2.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
const Lt = (e) => ({
  cookie: t
} = {}) => {
  let n = I(t) ? t : e(t?.name || "__session", t);
  return Re(n), {
    async getSession(r, a) {
      return X(r && await n.parse(r, a) || {});
    },
    async commitSession(r, a) {
      let i = await n.serialize(r.data, a);
      if (i.length > 4096)
        throw new Error("Cookie length will exceed browser maximum. Length: " + i.length);
      return i;
    },
    async destroySession(r, a) {
      return n.serialize("", {
        ...a,
        maxAge: void 0,
        expires: /* @__PURE__ */ new Date(0)
      });
    }
  };
};
/**
 * @remix-run/server-runtime v2.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
const $t = (e) => ({
  cookie: t
} = {}) => {
  let n = /* @__PURE__ */ new Map();
  return e({
    cookie: t,
    async createData(r, a) {
      let i = Math.random().toString(36).substring(2, 10);
      return n.set(i, {
        data: r,
        expires: a
      }), i;
    },
    async readData(r) {
      if (n.has(r)) {
        let {
          data: a,
          expires: i
        } = n.get(r);
        if (!i || i > /* @__PURE__ */ new Date())
          return a;
        i && n.delete(r);
      }
      return null;
    },
    async updateData(r, a, i) {
      n.set(r, {
        data: a,
        expires: i
      });
    },
    async deleteData(r) {
      n.delete(r);
    }
  });
};
/**
 * @remix-run/server-runtime v2.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
class _e extends Error {
  constructor(t, n) {
    super(`Field "${t}" exceeded upload size of ${n} bytes.`), this.field = t, this.maxBytes = n;
  }
}
/**
 * @remix-run/server-runtime v2.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Nt({
  filter: e,
  maxPartSize: t = 3e6
} = {}) {
  return async ({
    filename: n,
    contentType: r,
    name: a,
    data: i
  }) => {
    if (e && !await e({
      filename: n,
      contentType: r,
      name: a
    }))
      return;
    let o = 0, s = [];
    for await (let l of i) {
      if (o += l.byteLength, o > t)
        throw new _e(a, t);
      s.push(l);
    }
    return typeof n == "string" ? new File(s, n, {
      type: r
    }) : await new Blob(s, {
      type: r
    }).text();
  };
}
/**
 * @remix-run/server-runtime v2.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
const zt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  MaxPartSizeExceededError: _e,
  UNSAFE_SingleFetchRedirectSymbol: le,
  broadcastDevReady: Et,
  createCookieFactory: tt,
  createCookieSessionStorageFactory: Lt,
  createMemorySessionStorageFactory: $t,
  createRequestHandler: Tt,
  createSession: X,
  createSessionStorageFactory: jt,
  data: ze,
  defer: Ie,
  isCookie: I,
  isSession: Ht,
  json: x,
  logDevReady: Ct,
  redirect: oe,
  redirectDocument: Ve,
  replace: Xe,
  unstable_composeUploadHandlers: gt,
  unstable_createMemoryUploadHandler: Nt,
  unstable_parseMultipartFormData: wt,
  unstable_setDevServerHooks: kt
}, Symbol.toStringTag, { value: "Module" }));
var It = {}, K = {}, R = {};
const ve = /* @__PURE__ */ Ke(zt);
var M = {};
/**
 * @remix-run/cloudflare v2.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
Object.defineProperty(M, "__esModule", { value: !0 });
const J = new TextEncoder(), Vt = async (e, t) => {
  let n = await xe(t, ["sign"]), r = J.encode(e), a = await crypto.subtle.sign("HMAC", n, r), i = btoa(String.fromCharCode(...new Uint8Array(a))).replace(/=+$/, "");
  return e + "." + i;
}, Xt = async (e, t) => {
  let n = e.lastIndexOf("."), r = e.slice(0, n), a = e.slice(n + 1), i = await xe(t, ["verify"]), o = J.encode(r), s = Kt(atob(a));
  return await crypto.subtle.verify("HMAC", i, s, o) ? r : !1;
};
async function xe(e, t) {
  return await crypto.subtle.importKey("raw", J.encode(e), {
    name: "HMAC",
    hash: "SHA-256"
  }, !1, t);
}
function Kt(e) {
  let t = new Uint8Array(e.length);
  for (let n = 0; n < e.length; n++)
    t[n] = e.charCodeAt(n);
  return t;
}
M.sign = Vt;
M.unsign = Xt;
/**
 * @remix-run/cloudflare v2.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
Object.defineProperty(R, "__esModule", { value: !0 });
var A = ve, ie = M;
const W = A.createCookieFactory({
  sign: ie.sign,
  unsign: ie.unsign
}), Jt = A.createCookieSessionStorageFactory(W), Ee = A.createSessionStorageFactory(W), Wt = A.createMemorySessionStorageFactory(Ee);
R.createCookie = W;
R.createCookieSessionStorage = Jt;
R.createMemorySessionStorage = Wt;
R.createSessionStorage = Ee;
/**
 * @remix-run/cloudflare v2.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
Object.defineProperty(K, "__esModule", { value: !0 });
var Bt = R;
function Gt({
  cookie: e,
  kv: t
}) {
  return Bt.createSessionStorage({
    cookie: e,
    async createData(n, r) {
      for (; ; ) {
        let a = new Uint8Array(8);
        crypto.getRandomValues(a);
        let i = [...a].map((o) => o.toString(16).padStart(2, "0")).join("");
        if (!await t.get(i, "json"))
          return await t.put(i, JSON.stringify(n), {
            expiration: r ? Math.round(r.getTime() / 1e3) : void 0
          }), i;
      }
    },
    async readData(n) {
      let r = await t.get(n);
      return r ? JSON.parse(r) : null;
    },
    async updateData(n, r, a) {
      await t.put(n, JSON.stringify(r), {
        expiration: a ? Math.round(a.getTime() / 1e3) : void 0
      });
    },
    async deleteData(n) {
      await t.delete(n);
    }
  });
}
K.createWorkersKVSessionStorage = Gt;
/**
 * @remix-run/cloudflare v2.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = K, n = R, r = ve;
  e.createWorkersKVSessionStorage = t.createWorkersKVSessionStorage, e.createCookie = n.createCookie, e.createCookieSessionStorage = n.createCookieSessionStorage, e.createMemorySessionStorage = n.createMemorySessionStorage, e.createSessionStorage = n.createSessionStorage, Object.defineProperty(e, "MaxPartSizeExceededError", {
    enumerable: !0,
    get: function() {
      return r.MaxPartSizeExceededError;
    }
  }), Object.defineProperty(e, "broadcastDevReady", {
    enumerable: !0,
    get: function() {
      return r.broadcastDevReady;
    }
  }), Object.defineProperty(e, "createRequestHandler", {
    enumerable: !0,
    get: function() {
      return r.createRequestHandler;
    }
  }), Object.defineProperty(e, "createSession", {
    enumerable: !0,
    get: function() {
      return r.createSession;
    }
  }), Object.defineProperty(e, "data", {
    enumerable: !0,
    get: function() {
      return r.data;
    }
  }), Object.defineProperty(e, "defer", {
    enumerable: !0,
    get: function() {
      return r.defer;
    }
  }), Object.defineProperty(e, "isCookie", {
    enumerable: !0,
    get: function() {
      return r.isCookie;
    }
  }), Object.defineProperty(e, "isSession", {
    enumerable: !0,
    get: function() {
      return r.isSession;
    }
  }), Object.defineProperty(e, "json", {
    enumerable: !0,
    get: function() {
      return r.json;
    }
  }), Object.defineProperty(e, "logDevReady", {
    enumerable: !0,
    get: function() {
      return r.logDevReady;
    }
  }), Object.defineProperty(e, "redirect", {
    enumerable: !0,
    get: function() {
      return r.redirect;
    }
  }), Object.defineProperty(e, "redirectDocument", {
    enumerable: !0,
    get: function() {
      return r.redirectDocument;
    }
  }), Object.defineProperty(e, "replace", {
    enumerable: !0,
    get: function() {
      return r.replace;
    }
  }), Object.defineProperty(e, "unstable_composeUploadHandlers", {
    enumerable: !0,
    get: function() {
      return r.unstable_composeUploadHandlers;
    }
  }), Object.defineProperty(e, "unstable_createMemoryUploadHandler", {
    enumerable: !0,
    get: function() {
      return r.unstable_createMemoryUploadHandler;
    }
  }), Object.defineProperty(e, "unstable_parseMultipartFormData", {
    enumerable: !0,
    get: function() {
      return r.unstable_parseMultipartFormData;
    }
  });
})(It);
