function In(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Mr = { exports: {} }, X = Mr.exports = {}, de, ue;
function Nt() {
  throw new Error("setTimeout has not been defined");
}
function Ft() {
  throw new Error("clearTimeout has not been defined");
}
(function() {
  try {
    typeof setTimeout == "function" ? de = setTimeout : de = Nt;
  } catch {
    de = Nt;
  }
  try {
    typeof clearTimeout == "function" ? ue = clearTimeout : ue = Ft;
  } catch {
    ue = Ft;
  }
})();
function Ir(e) {
  if (de === setTimeout)
    return setTimeout(e, 0);
  if ((de === Nt || !de) && setTimeout)
    return de = setTimeout, setTimeout(e, 0);
  try {
    return de(e, 0);
  } catch {
    try {
      return de.call(null, e, 0);
    } catch {
      return de.call(this, e, 0);
    }
  }
}
function An(e) {
  if (ue === clearTimeout)
    return clearTimeout(e);
  if ((ue === Ft || !ue) && clearTimeout)
    return ue = clearTimeout, clearTimeout(e);
  try {
    return ue(e);
  } catch {
    try {
      return ue.call(null, e);
    } catch {
      return ue.call(this, e);
    }
  }
}
var pe = [], We = !1, Me, vt = -1;
function _n() {
  !We || !Me || (We = !1, Me.length ? pe = Me.concat(pe) : vt = -1, pe.length && Ar());
}
function Ar() {
  if (!We) {
    var e = Ir(_n);
    We = !0;
    for (var t = pe.length; t; ) {
      for (Me = pe, pe = []; ++vt < t; )
        Me && Me[vt].run();
      vt = -1, t = pe.length;
    }
    Me = null, We = !1, An(e);
  }
}
X.nextTick = function(e) {
  var t = new Array(arguments.length - 1);
  if (arguments.length > 1)
    for (var r = 1; r < arguments.length; r++)
      t[r - 1] = arguments[r];
  pe.push(new _r(e, t)), pe.length === 1 && !We && Ir(Ar);
};
function _r(e, t) {
  this.fun = e, this.array = t;
}
_r.prototype.run = function() {
  this.fun.apply(null, this.array);
};
X.title = "browser";
X.browser = !0;
X.env = {};
X.argv = [];
X.version = "";
X.versions = {};
function ge() {
}
X.on = ge;
X.addListener = ge;
X.once = ge;
X.off = ge;
X.removeListener = ge;
X.removeAllListeners = ge;
X.emit = ge;
X.prependListener = ge;
X.prependOnceListener = ge;
X.listeners = function(e) {
  return [];
};
X.binding = function(e) {
  throw new Error("process.binding is not supported");
};
X.cwd = function() {
  return "/";
};
X.chdir = function(e) {
  throw new Error("process.chdir is not supported");
};
X.umask = function() {
  return 0;
};
var Nn = Mr.exports;
const Za = /* @__PURE__ */ In(Nn);
var qa = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ei(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function ti(e) {
  if (e.__esModule) return e;
  var t = e.default;
  if (typeof t == "function") {
    var r = function n() {
      return this instanceof n ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    r.prototype = t.prototype;
  } else r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(e).forEach(function(n) {
    var a = Object.getOwnPropertyDescriptor(e, n);
    Object.defineProperty(r, n, a.get ? a : {
      enumerable: !0,
      get: function() {
        return e[n];
      }
    });
  }), r;
}
/**
 * @remix-run/router v1.22.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function $() {
  return $ = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, $.apply(this, arguments);
}
var Z;
(function(e) {
  e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE";
})(Z || (Z = {}));
const hr = "popstate";
function ri(e) {
  e === void 0 && (e = {});
  function t(n, a) {
    let {
      pathname: i,
      search: o,
      hash: s
    } = n.location;
    return Ae(
      "",
      {
        pathname: i,
        search: o,
        hash: s
      },
      // state defaults to `null` because `window.history.state` does
      a.state && a.state.usr || null,
      a.state && a.state.key || "default"
    );
  }
  function r(n, a) {
    return typeof a == "string" ? a : _e(a);
  }
  return Un(t, r, null, e);
}
function B(e, t) {
  if (e === !1 || e === null || typeof e > "u")
    throw new Error(t);
}
function Ke(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {
    }
  }
}
function Fn() {
  return Math.random().toString(36).substr(2, 8);
}
function pr(e, t) {
  return {
    usr: e.state,
    key: e.key,
    idx: t
  };
}
function Ae(e, t, r, n) {
  return r === void 0 && (r = null), $({
    pathname: typeof e == "string" ? e : e.pathname,
    search: "",
    hash: ""
  }, typeof t == "string" ? Ne(t) : t, {
    state: r,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: t && t.key || n || Fn()
  });
}
function _e(e) {
  let {
    pathname: t = "/",
    search: r = "",
    hash: n = ""
  } = e;
  return r && r !== "?" && (t += r.charAt(0) === "?" ? r : "?" + r), n && n !== "#" && (t += n.charAt(0) === "#" ? n : "#" + n), t;
}
function Ne(e) {
  let t = {};
  if (e) {
    let r = e.indexOf("#");
    r >= 0 && (t.hash = e.substr(r), e = e.substr(0, r));
    let n = e.indexOf("?");
    n >= 0 && (t.search = e.substr(n), e = e.substr(0, n)), e && (t.pathname = e);
  }
  return t;
}
function Un(e, t, r, n) {
  n === void 0 && (n = {});
  let {
    window: a = document.defaultView,
    v5Compat: i = !1
  } = n, o = a.history, s = Z.Pop, l = null, u = h();
  u == null && (u = 0, o.replaceState($({}, o.state, {
    idx: u
  }), ""));
  function h() {
    return (o.state || {
      idx: null
    }).idx;
  }
  function m() {
    s = Z.Pop;
    let S = h(), O = S == null ? null : S - u;
    u = S, l && l({
      action: s,
      location: v.location,
      delta: O
    });
  }
  function g(S, O) {
    s = Z.Push;
    let D = Ae(v.location, S, O);
    u = h() + 1;
    let C = pr(D, u), E = v.createHref(D);
    try {
      o.pushState(C, "", E);
    } catch (M) {
      if (M instanceof DOMException && M.name === "DataCloneError")
        throw M;
      a.location.assign(E);
    }
    i && l && l({
      action: s,
      location: v.location,
      delta: 1
    });
  }
  function y(S, O) {
    s = Z.Replace;
    let D = Ae(v.location, S, O);
    u = h();
    let C = pr(D, u), E = v.createHref(D);
    o.replaceState(C, "", E), i && l && l({
      action: s,
      location: v.location,
      delta: 0
    });
  }
  function w(S) {
    let O = a.location.origin !== "null" ? a.location.origin : a.location.href, D = typeof S == "string" ? S : _e(S);
    return D = D.replace(/ $/, "%20"), B(O, "No window.location.(origin|href) available to create URL for href: " + D), new URL(D, O);
  }
  let v = {
    get action() {
      return s;
    },
    get location() {
      return e(a, o);
    },
    listen(S) {
      if (l)
        throw new Error("A history only accepts one active listener");
      return a.addEventListener(hr, m), l = S, () => {
        a.removeEventListener(hr, m), l = null;
      };
    },
    createHref(S) {
      return t(a, S);
    },
    createURL: w,
    encodeLocation(S) {
      let O = w(S);
      return {
        pathname: O.pathname,
        search: O.search,
        hash: O.hash
      };
    },
    push: g,
    replace: y,
    go(S) {
      return o.go(S);
    }
  };
  return v;
}
var U;
(function(e) {
  e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error";
})(U || (U = {}));
const $n = /* @__PURE__ */ new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);
function Hn(e) {
  return e.index === !0;
}
function it(e, t, r, n) {
  return r === void 0 && (r = []), n === void 0 && (n = {}), e.map((a, i) => {
    let o = [...r, String(i)], s = typeof a.id == "string" ? a.id : o.join("-");
    if (B(a.index !== !0 || !a.children, "Cannot specify children on an index route"), B(!n[s], 'Found a route id collision on id "' + s + `".  Route id's must be globally unique within Data Router usages`), Hn(a)) {
      let l = $({}, a, t(a), {
        id: s
      });
      return n[s] = l, l;
    } else {
      let l = $({}, a, t(a), {
        id: s,
        children: void 0
      });
      return n[s] = l, a.children && (l.children = it(a.children, t, o, n)), l;
    }
  });
}
function Ee(e, t, r) {
  return r === void 0 && (r = "/"), wt(e, t, r, !1);
}
function wt(e, t, r, n) {
  let a = typeof t == "string" ? Ne(t) : t, i = ot(a.pathname || "/", r);
  if (i == null)
    return null;
  let o = Nr(e);
  zn(o);
  let s = null;
  for (let l = 0; s == null && l < o.length; ++l) {
    let u = qn(i);
    s = Qn(o[l], u, n);
  }
  return s;
}
function kn(e, t) {
  let {
    route: r,
    pathname: n,
    params: a
  } = e;
  return {
    id: r.id,
    pathname: n,
    params: a,
    data: t[r.id],
    handle: r.handle
  };
}
function Nr(e, t, r, n) {
  t === void 0 && (t = []), r === void 0 && (r = []), n === void 0 && (n = "");
  let a = (i, o, s) => {
    let l = {
      relativePath: s === void 0 ? i.path || "" : s,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: o,
      route: i
    };
    l.relativePath.startsWith("/") && (B(l.relativePath.startsWith(n), 'Absolute route path "' + l.relativePath + '" nested under path ' + ('"' + n + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), l.relativePath = l.relativePath.slice(n.length));
    let u = nt([n, l.relativePath]), h = r.concat(l);
    i.children && i.children.length > 0 && (B(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      i.index !== !0,
      "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + u + '".')
    ), Nr(i.children, t, h, u)), !(i.path == null && !i.index) && t.push({
      path: u,
      score: Gn(u, i.index),
      routesMeta: h
    });
  };
  return e.forEach((i, o) => {
    var s;
    if (i.path === "" || !((s = i.path) != null && s.includes("?")))
      a(i, o);
    else
      for (let l of Fr(i.path))
        a(i, o, l);
  }), t;
}
function Fr(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [r, ...n] = t, a = r.endsWith("?"), i = r.replace(/\?$/, "");
  if (n.length === 0)
    return a ? [i, ""] : [i];
  let o = Fr(n.join("/")), s = [];
  return s.push(...o.map((l) => l === "" ? i : [i, l].join("/"))), a && s.push(...o), s.map((l) => e.startsWith("/") && l === "" ? "/" : l);
}
function zn(e) {
  e.sort((t, r) => t.score !== r.score ? r.score - t.score : Xn(t.routesMeta.map((n) => n.childrenIndex), r.routesMeta.map((n) => n.childrenIndex)));
}
const Bn = /^:[\w-]+$/, Vn = 3, Wn = 2, Yn = 1, Jn = 10, Kn = -2, mr = (e) => e === "*";
function Gn(e, t) {
  let r = e.split("/"), n = r.length;
  return r.some(mr) && (n += Kn), t && (n += Wn), r.filter((a) => !mr(a)).reduce((a, i) => a + (Bn.test(i) ? Vn : i === "" ? Yn : Jn), n);
}
function Xn(e, t) {
  return e.length === t.length && e.slice(0, -1).every((n, a) => n === t[a]) ? (
    // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    e[e.length - 1] - t[t.length - 1]
  ) : (
    // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0
  );
}
function Qn(e, t, r) {
  r === void 0 && (r = !1);
  let {
    routesMeta: n
  } = e, a = {}, i = "/", o = [];
  for (let s = 0; s < n.length; ++s) {
    let l = n[s], u = s === n.length - 1, h = i === "/" ? t : t.slice(i.length) || "/", m = yr({
      path: l.relativePath,
      caseSensitive: l.caseSensitive,
      end: u
    }, h), g = l.route;
    if (!m && u && r && !n[n.length - 1].route.index && (m = yr({
      path: l.relativePath,
      caseSensitive: l.caseSensitive,
      end: !1
    }, h)), !m)
      return null;
    Object.assign(a, m.params), o.push({
      // TODO: Can this as be avoided?
      params: a,
      pathname: nt([i, m.pathname]),
      pathnameBase: aa(nt([i, m.pathnameBase])),
      route: g
    }), m.pathnameBase !== "/" && (i = nt([i, m.pathnameBase]));
  }
  return o;
}
function yr(e, t) {
  typeof e == "string" && (e = {
    path: e,
    caseSensitive: !1,
    end: !0
  });
  let [r, n] = Zn(e.path, e.caseSensitive, e.end), a = t.match(r);
  if (!a) return null;
  let i = a[0], o = i.replace(/(.)\/+$/, "$1"), s = a.slice(1);
  return {
    params: n.reduce((u, h, m) => {
      let {
        paramName: g,
        isOptional: y
      } = h;
      if (g === "*") {
        let v = s[m] || "";
        o = i.slice(0, i.length - v.length).replace(/(.)\/+$/, "$1");
      }
      const w = s[m];
      return y && !w ? u[g] = void 0 : u[g] = (w || "").replace(/%2F/g, "/"), u;
    }, {}),
    pathname: i,
    pathnameBase: o,
    pattern: e
  };
}
function Zn(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !0), Ke(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
  let n = [], a = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (o, s, l) => (n.push({
    paramName: s,
    isOptional: l != null
  }), l ? "/?([^\\/]+)?" : "/([^\\/]+)"));
  return e.endsWith("*") ? (n.push({
    paramName: "*"
  }), a += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : r ? a += "\\/*$" : e !== "" && e !== "/" && (a += "(?:(?=\\/|$))"), [new RegExp(a, t ? void 0 : "i"), n];
}
function qn(e) {
  try {
    return e.split("/").map((t) => decodeURIComponent(t).replace(/\//g, "%2F")).join("/");
  } catch (t) {
    return Ke(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")), e;
  }
}
function ot(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase()))
    return null;
  let r = t.endsWith("/") ? t.length - 1 : t.length, n = e.charAt(r);
  return n && n !== "/" ? null : e.slice(r) || "/";
}
function ea(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: r,
    search: n = "",
    hash: a = ""
  } = typeof e == "string" ? Ne(e) : e;
  return {
    pathname: r ? r.startsWith("/") ? r : ta(r, t) : t,
    search: ia(n),
    hash: oa(a)
  };
}
function ta(e, t) {
  let r = t.replace(/\/+$/, "").split("/");
  return e.split("/").forEach((a) => {
    a === ".." ? r.length > 1 && r.pop() : a !== "." && r.push(a);
  }), r.length > 1 ? r.join("/") : "/";
}
function Mt(e, t, r, n) {
  return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(n) + "].  Please separate it out to the ") + ("`to." + r + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.';
}
function Ur(e) {
  return e.filter((t, r) => r === 0 || t.route.path && t.route.path.length > 0);
}
function ra(e, t) {
  let r = Ur(e);
  return t ? r.map((n, a) => a === r.length - 1 ? n.pathname : n.pathnameBase) : r.map((n) => n.pathnameBase);
}
function na(e, t, r, n) {
  n === void 0 && (n = !1);
  let a;
  typeof e == "string" ? a = Ne(e) : (a = $({}, e), B(!a.pathname || !a.pathname.includes("?"), Mt("?", "pathname", "search", a)), B(!a.pathname || !a.pathname.includes("#"), Mt("#", "pathname", "hash", a)), B(!a.search || !a.search.includes("#"), Mt("#", "search", "hash", a)));
  let i = e === "" || a.pathname === "", o = i ? "/" : a.pathname, s;
  if (o == null)
    s = r;
  else {
    let m = t.length - 1;
    if (!n && o.startsWith("..")) {
      let g = o.split("/");
      for (; g[0] === ".."; )
        g.shift(), m -= 1;
      a.pathname = g.join("/");
    }
    s = m >= 0 ? t[m] : "/";
  }
  let l = ea(a, s), u = o && o !== "/" && o.endsWith("/"), h = (i || o === ".") && r.endsWith("/");
  return !l.pathname.endsWith("/") && (u || h) && (l.pathname += "/"), l;
}
const nt = (e) => e.join("/").replace(/\/\/+/g, "/"), aa = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"), ia = (e) => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e, oa = (e) => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e, la = function(t, r) {
  r === void 0 && (r = {});
  let n = typeof r == "number" ? {
    status: r
  } : r, a = new Headers(n.headers);
  return a.has("Content-Type") || a.set("Content-Type", "application/json; charset=utf-8"), new Response(JSON.stringify(t), $({}, n, {
    headers: a
  }));
};
class sa {
  constructor(t, r) {
    this.type = "DataWithResponseInit", this.data = t, this.init = r || null;
  }
}
function da(e, t) {
  return new sa(e, typeof t == "number" ? {
    status: t
  } : t);
}
class gr extends Error {
}
class ua {
  constructor(t, r) {
    this.pendingKeysSet = /* @__PURE__ */ new Set(), this.subscribers = /* @__PURE__ */ new Set(), this.deferredKeys = [], B(t && typeof t == "object" && !Array.isArray(t), "defer() only accepts plain objects");
    let n;
    this.abortPromise = new Promise((i, o) => n = o), this.controller = new AbortController();
    let a = () => n(new gr("Deferred data aborted"));
    this.unlistenAbortSignal = () => this.controller.signal.removeEventListener("abort", a), this.controller.signal.addEventListener("abort", a), this.data = Object.entries(t).reduce((i, o) => {
      let [s, l] = o;
      return Object.assign(i, {
        [s]: this.trackPromise(s, l)
      });
    }, {}), this.done && this.unlistenAbortSignal(), this.init = r;
  }
  trackPromise(t, r) {
    if (!(r instanceof Promise))
      return r;
    this.deferredKeys.push(t), this.pendingKeysSet.add(t);
    let n = Promise.race([r, this.abortPromise]).then((a) => this.onSettle(n, t, void 0, a), (a) => this.onSettle(n, t, a));
    return n.catch(() => {
    }), Object.defineProperty(n, "_tracked", {
      get: () => !0
    }), n;
  }
  onSettle(t, r, n, a) {
    if (this.controller.signal.aborted && n instanceof gr)
      return this.unlistenAbortSignal(), Object.defineProperty(t, "_error", {
        get: () => n
      }), Promise.reject(n);
    if (this.pendingKeysSet.delete(r), this.done && this.unlistenAbortSignal(), n === void 0 && a === void 0) {
      let i = new Error('Deferred data for key "' + r + '" resolved/rejected with `undefined`, you must resolve/reject with a value or `null`.');
      return Object.defineProperty(t, "_error", {
        get: () => i
      }), this.emit(!1, r), Promise.reject(i);
    }
    return a === void 0 ? (Object.defineProperty(t, "_error", {
      get: () => n
    }), this.emit(!1, r), Promise.reject(n)) : (Object.defineProperty(t, "_data", {
      get: () => a
    }), this.emit(!1, r), a);
  }
  emit(t, r) {
    this.subscribers.forEach((n) => n(t, r));
  }
  subscribe(t) {
    return this.subscribers.add(t), () => this.subscribers.delete(t);
  }
  cancel() {
    this.controller.abort(), this.pendingKeysSet.forEach((t, r) => this.pendingKeysSet.delete(r)), this.emit(!0);
  }
  async resolveData(t) {
    let r = !1;
    if (!this.done) {
      let n = () => this.cancel();
      t.addEventListener("abort", n), r = await new Promise((a) => {
        this.subscribe((i) => {
          t.removeEventListener("abort", n), (i || this.done) && a(i);
        });
      });
    }
    return r;
  }
  get done() {
    return this.pendingKeysSet.size === 0;
  }
  get unwrappedData() {
    return B(this.data !== null && this.done, "Can only unwrap data on initialized and settled deferreds"), Object.entries(this.data).reduce((t, r) => {
      let [n, a] = r;
      return Object.assign(t, {
        [n]: fa(a)
      });
    }, {});
  }
  get pendingKeys() {
    return Array.from(this.pendingKeysSet);
  }
}
function ca(e) {
  return e instanceof Promise && e._tracked === !0;
}
function fa(e) {
  if (!ca(e))
    return e;
  if (e._error)
    throw e._error;
  return e._data;
}
const ha = function(t, r) {
  r === void 0 && (r = {});
  let n = typeof r == "number" ? {
    status: r
  } : r;
  return new ua(t, n);
}, Gt = function(t, r) {
  r === void 0 && (r = 302);
  let n = r;
  typeof n == "number" ? n = {
    status: n
  } : typeof n.status > "u" && (n.status = 302);
  let a = new Headers(n.headers);
  return a.set("Location", t), new Response(null, $({}, n, {
    headers: a
  }));
}, pa = (e, t) => {
  let r = Gt(e, t);
  return r.headers.set("X-Remix-Reload-Document", "true"), r;
}, ma = (e, t) => {
  let r = Gt(e, t);
  return r.headers.set("X-Remix-Replace", "true"), r;
};
class bt {
  constructor(t, r, n, a) {
    a === void 0 && (a = !1), this.status = t, this.statusText = r || "", this.internal = a, n instanceof Error ? (this.data = n.toString(), this.error = n) : this.data = n;
  }
}
function ye(e) {
  return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e;
}
const $r = ["post", "put", "patch", "delete"], ya = new Set($r), ga = ["get", ...$r], va = new Set(ga), wa = /* @__PURE__ */ new Set([301, 302, 303, 307, 308]), ba = /* @__PURE__ */ new Set([307, 308]), It = {
  state: "idle",
  location: void 0,
  formMethod: void 0,
  formAction: void 0,
  formEncType: void 0,
  formData: void 0,
  json: void 0,
  text: void 0
}, Ea = {
  state: "idle",
  data: void 0,
  formMethod: void 0,
  formAction: void 0,
  formEncType: void 0,
  formData: void 0,
  json: void 0,
  text: void 0
}, tt = {
  state: "unblocked",
  proceed: void 0,
  reset: void 0,
  location: void 0
}, Xt = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, Hr = (e) => ({
  hasErrorBoundary: !!e.hasErrorBoundary
}), kr = "remix-router-transitions";
function ni(e) {
  const t = e.window ? e.window : typeof window < "u" ? window : void 0, r = typeof t < "u" && typeof t.document < "u" && typeof t.document.createElement < "u", n = !r;
  B(e.routes.length > 0, "You must provide a non-empty routes array to createRouter");
  let a;
  if (e.mapRouteProperties)
    a = e.mapRouteProperties;
  else if (e.detectErrorBoundary) {
    let d = e.detectErrorBoundary;
    a = (c) => ({
      hasErrorBoundary: d(c)
    });
  } else
    a = Hr;
  let i = {}, o = it(e.routes, a, void 0, i), s, l = e.basename || "/", u = e.dataStrategy || Vr, h = e.patchRoutesOnNavigation, m = $({
    v7_fetcherPersist: !1,
    v7_normalizeFormMethod: !1,
    v7_partialHydration: !1,
    v7_prependBasename: !1,
    v7_relativeSplatPath: !1,
    v7_skipActionErrorRevalidation: !1
  }, e.future), g = null, y = /* @__PURE__ */ new Set(), w = null, v = null, S = null, O = e.hydrationData != null, D = Ee(o, e.history.location, l), C = !1, E = null;
  if (D == null && !h) {
    let d = J(404, {
      pathname: e.history.location.pathname
    }), {
      matches: c,
      route: p
    } = Et(o);
    D = c, E = {
      [p.id]: d
    };
  }
  D && !e.hydrationData && ht(D, o, e.history.location.pathname).active && (D = null);
  let M;
  if (D)
    if (D.some((d) => d.route.lazy))
      M = !1;
    else if (!D.some((d) => d.route.loader))
      M = !0;
    else if (m.v7_partialHydration) {
      let d = e.hydrationData ? e.hydrationData.loaderData : null, c = e.hydrationData ? e.hydrationData.errors : null;
      if (c) {
        let p = D.findIndex((b) => c[b.route.id] !== void 0);
        M = D.slice(0, p + 1).every((b) => !Ht(b.route, d, c));
      } else
        M = D.every((p) => !Ht(p.route, d, c));
    } else
      M = e.hydrationData != null;
  else if (M = !1, D = [], m.v7_partialHydration) {
    let d = ht(null, o, e.history.location.pathname);
    d.active && d.matches && (C = !0, D = d.matches);
  }
  let A, f = {
    historyAction: e.history.action,
    location: e.history.location,
    matches: D,
    initialized: M,
    navigation: It,
    // Don't restore on initial updateState() if we were SSR'd
    restoreScrollPosition: e.hydrationData != null ? !1 : null,
    preventScrollReset: !1,
    revalidation: "idle",
    loaderData: e.hydrationData && e.hydrationData.loaderData || {},
    actionData: e.hydrationData && e.hydrationData.actionData || null,
    errors: e.hydrationData && e.hydrationData.errors || E,
    fetchers: /* @__PURE__ */ new Map(),
    blockers: /* @__PURE__ */ new Map()
  }, _ = Z.Pop, V = !1, k, Y = !1, ne = /* @__PURE__ */ new Map(), oe = null, Fe = !1, Pe = !1, lt = [], st = /* @__PURE__ */ new Set(), q = /* @__PURE__ */ new Map(), dt = 0, Ge = -1, Ue = /* @__PURE__ */ new Map(), ce = /* @__PURE__ */ new Set(), $e = /* @__PURE__ */ new Map(), Xe = /* @__PURE__ */ new Map(), le = /* @__PURE__ */ new Set(), Te = /* @__PURE__ */ new Map(), xe = /* @__PURE__ */ new Map(), ut;
  function yn() {
    if (g = e.history.listen((d) => {
      let {
        action: c,
        location: p,
        delta: b
      } = d;
      if (ut) {
        ut(), ut = void 0;
        return;
      }
      Ke(xe.size === 0 || b != null, "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");
      let R = dr({
        currentLocation: f.location,
        nextLocation: p,
        historyAction: c
      });
      if (R && b != null) {
        let j = new Promise((I) => {
          ut = I;
        });
        e.history.go(b * -1), ft(R, {
          state: "blocked",
          location: p,
          proceed() {
            ft(R, {
              state: "proceeding",
              proceed: void 0,
              reset: void 0,
              location: p
            }), j.then(() => e.history.go(b));
          },
          reset() {
            let I = new Map(f.blockers);
            I.set(R, tt), re({
              blockers: I
            });
          }
        });
        return;
      }
      return je(c, p);
    }), r) {
      _a(t, ne);
      let d = () => Na(t, ne);
      t.addEventListener("pagehide", d), oe = () => t.removeEventListener("pagehide", d);
    }
    return f.initialized || je(Z.Pop, f.location, {
      initialHydration: !0
    }), A;
  }
  function gn() {
    g && g(), oe && oe(), y.clear(), k && k.abort(), f.fetchers.forEach((d, c) => ct(c)), f.blockers.forEach((d, c) => sr(c));
  }
  function vn(d) {
    return y.add(d), () => y.delete(d);
  }
  function re(d, c) {
    c === void 0 && (c = {}), f = $({}, f, d);
    let p = [], b = [];
    m.v7_fetcherPersist && f.fetchers.forEach((R, j) => {
      R.state === "idle" && (le.has(j) ? b.push(j) : p.push(j));
    }), le.forEach((R) => {
      !f.fetchers.has(R) && !q.has(R) && b.push(R);
    }), [...y].forEach((R) => R(f, {
      deletedFetchers: b,
      viewTransitionOpts: c.viewTransitionOpts,
      flushSync: c.flushSync === !0
    })), m.v7_fetcherPersist ? (p.forEach((R) => f.fetchers.delete(R)), b.forEach((R) => ct(R))) : b.forEach((R) => le.delete(R));
  }
  function He(d, c, p) {
    var b, R;
    let {
      flushSync: j
    } = p === void 0 ? {} : p, I = f.actionData != null && f.navigation.formMethod != null && ie(f.navigation.formMethod) && f.navigation.state === "loading" && ((b = d.state) == null ? void 0 : b._isRedirect) !== !0, T;
    c.actionData ? Object.keys(c.actionData).length > 0 ? T = c.actionData : T = null : I ? T = f.actionData : T = null;
    let x = c.loaderData ? Tr(f.loaderData, c.loaderData, c.matches || [], c.errors) : f.loaderData, P = f.blockers;
    P.size > 0 && (P = new Map(P), P.forEach((F, ee) => P.set(ee, tt)));
    let L = V === !0 || f.navigation.formMethod != null && ie(f.navigation.formMethod) && ((R = d.state) == null ? void 0 : R._isRedirect) !== !0;
    s && (o = s, s = void 0), Fe || _ === Z.Pop || (_ === Z.Push ? e.history.push(d, d.state) : _ === Z.Replace && e.history.replace(d, d.state));
    let N;
    if (_ === Z.Pop) {
      let F = ne.get(f.location.pathname);
      F && F.has(d.pathname) ? N = {
        currentLocation: f.location,
        nextLocation: d
      } : ne.has(d.pathname) && (N = {
        currentLocation: d,
        nextLocation: f.location
      });
    } else if (Y) {
      let F = ne.get(f.location.pathname);
      F ? F.add(d.pathname) : (F = /* @__PURE__ */ new Set([d.pathname]), ne.set(f.location.pathname, F)), N = {
        currentLocation: f.location,
        nextLocation: d
      };
    }
    re($({}, c, {
      actionData: T,
      loaderData: x,
      historyAction: _,
      location: d,
      initialized: !0,
      navigation: It,
      revalidation: "idle",
      restoreScrollPosition: cr(d, c.matches || f.matches),
      preventScrollReset: L,
      blockers: P
    }), {
      viewTransitionOpts: N,
      flushSync: j === !0
    }), _ = Z.Pop, V = !1, Y = !1, Fe = !1, Pe = !1, lt = [];
  }
  async function tr(d, c) {
    if (typeof d == "number") {
      e.history.go(d);
      return;
    }
    let p = Ut(f.location, f.matches, l, m.v7_prependBasename, d, m.v7_relativeSplatPath, c?.fromRouteId, c?.relative), {
      path: b,
      submission: R,
      error: j
    } = wr(m.v7_normalizeFormMethod, !1, p, c), I = f.location, T = Ae(f.location, b, c && c.state);
    T = $({}, T, e.history.encodeLocation(T));
    let x = c && c.replace != null ? c.replace : void 0, P = Z.Push;
    x === !0 ? P = Z.Replace : x === !1 || R != null && ie(R.formMethod) && R.formAction === f.location.pathname + f.location.search && (P = Z.Replace);
    let L = c && "preventScrollReset" in c ? c.preventScrollReset === !0 : void 0, N = (c && c.flushSync) === !0, F = dr({
      currentLocation: I,
      nextLocation: T,
      historyAction: P
    });
    if (F) {
      ft(F, {
        state: "blocked",
        location: T,
        proceed() {
          ft(F, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: T
          }), tr(d, c);
        },
        reset() {
          let ee = new Map(f.blockers);
          ee.set(F, tt), re({
            blockers: ee
          });
        }
      });
      return;
    }
    return await je(P, T, {
      submission: R,
      // Send through the formData serialization error if we have one so we can
      // render at the right error boundary after we match routes
      pendingError: j,
      preventScrollReset: L,
      replace: c && c.replace,
      enableViewTransition: c && c.viewTransition,
      flushSync: N
    });
  }
  function wn() {
    if (jt(), re({
      revalidation: "loading"
    }), f.navigation.state !== "submitting") {
      if (f.navigation.state === "idle") {
        je(f.historyAction, f.location, {
          startUninterruptedRevalidation: !0
        });
        return;
      }
      je(_ || f.historyAction, f.navigation.location, {
        overrideNavigation: f.navigation,
        // Proxy through any rending view transition
        enableViewTransition: Y === !0
      });
    }
  }
  async function je(d, c, p) {
    k && k.abort(), k = null, _ = d, Fe = (p && p.startUninterruptedRevalidation) === !0, Ln(f.location, f.matches), V = (p && p.preventScrollReset) === !0, Y = (p && p.enableViewTransition) === !0;
    let b = s || o, R = p && p.overrideNavigation, j = p != null && p.initialHydration && f.matches && f.matches.length > 0 && !C ? (
      // `matchRoutes()` has already been called if we're in here via `router.initialize()`
      f.matches
    ) : Ee(b, c, l), I = (p && p.flushSync) === !0, T = ht(j, b, c.pathname);
    if (T.active && T.matches && (j = T.matches), !j) {
      let {
        error: W,
        notFoundMatches: z,
        route: K
      } = Lt(c.pathname);
      He(c, {
        matches: z,
        loaderData: {},
        errors: {
          [K.id]: W
        }
      }, {
        flushSync: I
      });
      return;
    }
    if (f.initialized && !Pe && xa(f.location, c) && !(p && p.submission && ie(p.submission.formMethod))) {
      He(c, {
        matches: j
      }, {
        flushSync: I
      });
      return;
    }
    k = new AbortController();
    let x = Ve(e.history, c, k.signal, p && p.submission), P;
    if (p && p.pendingError)
      P = [Se(j).route.id, {
        type: U.error,
        error: p.pendingError
      }];
    else if (p && p.submission && ie(p.submission.formMethod)) {
      let W = await bn(x, c, p.submission, j, T.active, {
        replace: p.replace,
        flushSync: I
      });
      if (W.shortCircuited)
        return;
      if (W.pendingActionResult) {
        let [z, K] = W.pendingActionResult;
        if (te(K) && ye(K.error) && K.error.status === 404) {
          k = null, He(c, {
            matches: W.matches,
            loaderData: {},
            errors: {
              [z]: K.error
            }
          });
          return;
        }
      }
      j = W.matches || j, P = W.pendingActionResult, R = At(c, p.submission), I = !1, T.active = !1, x = Ve(e.history, x.url, x.signal);
    }
    let {
      shortCircuited: L,
      matches: N,
      loaderData: F,
      errors: ee
    } = await En(x, c, j, T.active, R, p && p.submission, p && p.fetcherSubmission, p && p.replace, p && p.initialHydration === !0, I, P);
    L || (k = null, He(c, $({
      matches: N || j
    }, xr(P), {
      loaderData: F,
      errors: ee
    })));
  }
  async function bn(d, c, p, b, R, j) {
    j === void 0 && (j = {}), jt();
    let I = Ia(c, p);
    if (re({
      navigation: I
    }, {
      flushSync: j.flushSync === !0
    }), R) {
      let P = await pt(b, c.pathname, d.signal);
      if (P.type === "aborted")
        return {
          shortCircuited: !0
        };
      if (P.type === "error") {
        let L = Se(P.partialMatches).route.id;
        return {
          matches: P.partialMatches,
          pendingActionResult: [L, {
            type: U.error,
            error: P.error
          }]
        };
      } else if (P.matches)
        b = P.matches;
      else {
        let {
          notFoundMatches: L,
          error: N,
          route: F
        } = Lt(c.pathname);
        return {
          matches: L,
          pendingActionResult: [F.id, {
            type: U.error,
            error: N
          }]
        };
      }
    }
    let T, x = Ie(b, c);
    if (!x.route.action && !x.route.lazy)
      T = {
        type: U.error,
        error: J(405, {
          method: d.method,
          pathname: c.pathname,
          routeId: x.route.id
        })
      };
    else if (T = (await Qe("action", f, d, [x], b, null))[x.route.id], d.signal.aborted)
      return {
        shortCircuited: !0
      };
    if (De(T)) {
      let P;
      return j && j.replace != null ? P = j.replace : P = Rr(T.response.headers.get("Location"), new URL(d.url), l) === f.location.pathname + f.location.search, await Le(d, T, !0, {
        submission: p,
        replace: P
      }), {
        shortCircuited: !0
      };
    }
    if (me(T))
      throw J(400, {
        type: "defer-action"
      });
    if (te(T)) {
      let P = Se(b, x.route.id);
      return (j && j.replace) !== !0 && (_ = Z.Push), {
        matches: b,
        pendingActionResult: [P.route.id, T]
      };
    }
    return {
      matches: b,
      pendingActionResult: [x.route.id, T]
    };
  }
  async function En(d, c, p, b, R, j, I, T, x, P, L) {
    let N = R || At(c, j), F = j || I || Lr(N), ee = !Fe && (!m.v7_partialHydration || !x);
    if (b) {
      if (ee) {
        let G = rr(L);
        re($({
          navigation: N
        }, G !== void 0 ? {
          actionData: G
        } : {}), {
          flushSync: P
        });
      }
      let H = await pt(p, c.pathname, d.signal);
      if (H.type === "aborted")
        return {
          shortCircuited: !0
        };
      if (H.type === "error") {
        let G = Se(H.partialMatches).route.id;
        return {
          matches: H.partialMatches,
          loaderData: {},
          errors: {
            [G]: H.error
          }
        };
      } else if (H.matches)
        p = H.matches;
      else {
        let {
          error: G,
          notFoundMatches: ze,
          route: et
        } = Lt(c.pathname);
        return {
          matches: ze,
          loaderData: {},
          errors: {
            [et.id]: G
          }
        };
      }
    }
    let W = s || o, [z, K] = br(e.history, f, p, F, c, m.v7_partialHydration && x === !0, m.v7_skipActionErrorRevalidation, Pe, lt, st, le, $e, ce, W, l, L);
    if (Ot((H) => !(p && p.some((G) => G.route.id === H)) || z && z.some((G) => G.route.id === H)), Ge = ++dt, z.length === 0 && K.length === 0) {
      let H = or();
      return He(c, $({
        matches: p,
        loaderData: {},
        // Commit pending error if we're short circuiting
        errors: L && te(L[1]) ? {
          [L[0]]: L[1].error
        } : null
      }, xr(L), H ? {
        fetchers: new Map(f.fetchers)
      } : {}), {
        flushSync: P
      }), {
        shortCircuited: !0
      };
    }
    if (ee) {
      let H = {};
      if (!b) {
        H.navigation = N;
        let G = rr(L);
        G !== void 0 && (H.actionData = G);
      }
      K.length > 0 && (H.fetchers = Sn(K)), re(H, {
        flushSync: P
      });
    }
    K.forEach((H) => {
      we(H.key), H.controller && q.set(H.key, H.controller);
    });
    let ke = () => K.forEach((H) => we(H.key));
    k && k.signal.addEventListener("abort", ke);
    let {
      loaderResults: Ze,
      fetcherResults: he
    } = await nr(f, p, z, K, d);
    if (d.signal.aborted)
      return {
        shortCircuited: !0
      };
    k && k.signal.removeEventListener("abort", ke), K.forEach((H) => q.delete(H.key));
    let se = gt(Ze);
    if (se)
      return await Le(d, se.result, !0, {
        replace: T
      }), {
        shortCircuited: !0
      };
    if (se = gt(he), se)
      return ce.add(se.key), await Le(d, se.result, !0, {
        replace: T
      }), {
        shortCircuited: !0
      };
    let {
      loaderData: Ct,
      errors: qe
    } = Pr(f, p, Ze, L, K, he, Te);
    Te.forEach((H, G) => {
      H.subscribe((ze) => {
        (ze || H.done) && Te.delete(G);
      });
    }), m.v7_partialHydration && x && f.errors && (qe = $({}, f.errors, qe));
    let Oe = or(), mt = lr(Ge), yt = Oe || mt || K.length > 0;
    return $({
      matches: p,
      loaderData: Ct,
      errors: qe
    }, yt ? {
      fetchers: new Map(f.fetchers)
    } : {});
  }
  function rr(d) {
    if (d && !te(d[1]))
      return {
        [d[0]]: d[1].data
      };
    if (f.actionData)
      return Object.keys(f.actionData).length === 0 ? null : f.actionData;
  }
  function Sn(d) {
    return d.forEach((c) => {
      let p = f.fetchers.get(c.key), b = rt(void 0, p ? p.data : void 0);
      f.fetchers.set(c.key, b);
    }), new Map(f.fetchers);
  }
  function Rn(d, c, p, b) {
    if (n)
      throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");
    we(d);
    let R = (b && b.flushSync) === !0, j = s || o, I = Ut(f.location, f.matches, l, m.v7_prependBasename, p, m.v7_relativeSplatPath, c, b?.relative), T = Ee(j, I, l), x = ht(T, j, I);
    if (x.active && x.matches && (T = x.matches), !T) {
      fe(d, c, J(404, {
        pathname: I
      }), {
        flushSync: R
      });
      return;
    }
    let {
      path: P,
      submission: L,
      error: N
    } = wr(m.v7_normalizeFormMethod, !0, I, b);
    if (N) {
      fe(d, c, N, {
        flushSync: R
      });
      return;
    }
    let F = Ie(T, P), ee = (b && b.preventScrollReset) === !0;
    if (L && ie(L.formMethod)) {
      Dn(d, c, P, F, T, x.active, R, ee, L);
      return;
    }
    $e.set(d, {
      routeId: c,
      path: P
    }), Pn(d, c, P, F, T, x.active, R, ee, L);
  }
  async function Dn(d, c, p, b, R, j, I, T, x) {
    jt(), $e.delete(d);
    function P(Q) {
      if (!Q.route.action && !Q.route.lazy) {
        let Be = J(405, {
          method: x.formMethod,
          pathname: p,
          routeId: c
        });
        return fe(d, c, Be, {
          flushSync: I
        }), !0;
      }
      return !1;
    }
    if (!j && P(b))
      return;
    let L = f.fetchers.get(d);
    ve(d, Aa(x, L), {
      flushSync: I
    });
    let N = new AbortController(), F = Ve(e.history, p, N.signal, x);
    if (j) {
      let Q = await pt(R, new URL(F.url).pathname, F.signal);
      if (Q.type === "aborted")
        return;
      if (Q.type === "error") {
        fe(d, c, Q.error, {
          flushSync: I
        });
        return;
      } else if (Q.matches) {
        if (R = Q.matches, b = Ie(R, p), P(b))
          return;
      } else {
        fe(d, c, J(404, {
          pathname: p
        }), {
          flushSync: I
        });
        return;
      }
    }
    q.set(d, N);
    let ee = dt, z = (await Qe("action", f, F, [b], R, d))[b.route.id];
    if (F.signal.aborted) {
      q.get(d) === N && q.delete(d);
      return;
    }
    if (m.v7_fetcherPersist && le.has(d)) {
      if (De(z) || te(z)) {
        ve(d, be(void 0));
        return;
      }
    } else {
      if (De(z))
        if (q.delete(d), Ge > ee) {
          ve(d, be(void 0));
          return;
        } else
          return ce.add(d), ve(d, rt(x)), Le(F, z, !1, {
            fetcherSubmission: x,
            preventScrollReset: T
          });
      if (te(z)) {
        fe(d, c, z.error);
        return;
      }
    }
    if (me(z))
      throw J(400, {
        type: "defer-action"
      });
    let K = f.navigation.location || f.location, ke = Ve(e.history, K, N.signal), Ze = s || o, he = f.navigation.state !== "idle" ? Ee(Ze, f.navigation.location, l) : f.matches;
    B(he, "Didn't find any matches after fetcher action");
    let se = ++dt;
    Ue.set(d, se);
    let Ct = rt(x, z.data);
    f.fetchers.set(d, Ct);
    let [qe, Oe] = br(e.history, f, he, x, K, !1, m.v7_skipActionErrorRevalidation, Pe, lt, st, le, $e, ce, Ze, l, [b.route.id, z]);
    Oe.filter((Q) => Q.key !== d).forEach((Q) => {
      let Be = Q.key, fr = f.fetchers.get(Be), Mn = rt(void 0, fr ? fr.data : void 0);
      f.fetchers.set(Be, Mn), we(Be), Q.controller && q.set(Be, Q.controller);
    }), re({
      fetchers: new Map(f.fetchers)
    });
    let mt = () => Oe.forEach((Q) => we(Q.key));
    N.signal.addEventListener("abort", mt);
    let {
      loaderResults: yt,
      fetcherResults: H
    } = await nr(f, he, qe, Oe, ke);
    if (N.signal.aborted)
      return;
    N.signal.removeEventListener("abort", mt), Ue.delete(d), q.delete(d), Oe.forEach((Q) => q.delete(Q.key));
    let G = gt(yt);
    if (G)
      return Le(ke, G.result, !1, {
        preventScrollReset: T
      });
    if (G = gt(H), G)
      return ce.add(G.key), Le(ke, G.result, !1, {
        preventScrollReset: T
      });
    let {
      loaderData: ze,
      errors: et
    } = Pr(f, he, yt, void 0, Oe, H, Te);
    if (f.fetchers.has(d)) {
      let Q = be(z.data);
      f.fetchers.set(d, Q);
    }
    lr(se), f.navigation.state === "loading" && se > Ge ? (B(_, "Expected pending action"), k && k.abort(), He(f.navigation.location, {
      matches: he,
      loaderData: ze,
      errors: et,
      fetchers: new Map(f.fetchers)
    })) : (re({
      errors: et,
      loaderData: Tr(f.loaderData, ze, he, et),
      fetchers: new Map(f.fetchers)
    }), Pe = !1);
  }
  async function Pn(d, c, p, b, R, j, I, T, x) {
    let P = f.fetchers.get(d);
    ve(d, rt(x, P ? P.data : void 0), {
      flushSync: I
    });
    let L = new AbortController(), N = Ve(e.history, p, L.signal);
    if (j) {
      let z = await pt(R, new URL(N.url).pathname, N.signal);
      if (z.type === "aborted")
        return;
      if (z.type === "error") {
        fe(d, c, z.error, {
          flushSync: I
        });
        return;
      } else if (z.matches)
        R = z.matches, b = Ie(R, p);
      else {
        fe(d, c, J(404, {
          pathname: p
        }), {
          flushSync: I
        });
        return;
      }
    }
    q.set(d, L);
    let F = dt, W = (await Qe("loader", f, N, [b], R, d))[b.route.id];
    if (me(W) && (W = await Qt(W, N.signal, !0) || W), q.get(d) === L && q.delete(d), !N.signal.aborted) {
      if (le.has(d)) {
        ve(d, be(void 0));
        return;
      }
      if (De(W))
        if (Ge > F) {
          ve(d, be(void 0));
          return;
        } else {
          ce.add(d), await Le(N, W, !1, {
            preventScrollReset: T
          });
          return;
        }
      if (te(W)) {
        fe(d, c, W.error);
        return;
      }
      B(!me(W), "Unhandled fetcher deferred data"), ve(d, be(W.data));
    }
  }
  async function Le(d, c, p, b) {
    let {
      submission: R,
      fetcherSubmission: j,
      preventScrollReset: I,
      replace: T
    } = b === void 0 ? {} : b;
    c.response.headers.has("X-Remix-Revalidate") && (Pe = !0);
    let x = c.response.headers.get("Location");
    B(x, "Expected a Location header on the redirect Response"), x = Rr(x, new URL(d.url), l);
    let P = Ae(f.location, x, {
      _isRedirect: !0
    });
    if (r) {
      let z = !1;
      if (c.response.headers.has("X-Remix-Reload-Document"))
        z = !0;
      else if (Xt.test(x)) {
        const K = e.history.createURL(x);
        z = // Hard reload if it's an absolute URL to a new origin
        K.origin !== t.location.origin || // Hard reload if it's an absolute URL that does not match our basename
        ot(K.pathname, l) == null;
      }
      if (z) {
        T ? t.location.replace(x) : t.location.assign(x);
        return;
      }
    }
    k = null;
    let L = T === !0 || c.response.headers.has("X-Remix-Replace") ? Z.Replace : Z.Push, {
      formMethod: N,
      formAction: F,
      formEncType: ee
    } = f.navigation;
    !R && !j && N && F && ee && (R = Lr(f.navigation));
    let W = R || j;
    if (ba.has(c.response.status) && W && ie(W.formMethod))
      await je(L, P, {
        submission: $({}, W, {
          formAction: x
        }),
        // Preserve these flags across redirects
        preventScrollReset: I || V,
        enableViewTransition: p ? Y : void 0
      });
    else {
      let z = At(P, R);
      await je(L, P, {
        overrideNavigation: z,
        // Send fetcher submissions through for shouldRevalidate
        fetcherSubmission: j,
        // Preserve these flags across redirects
        preventScrollReset: I || V,
        enableViewTransition: p ? Y : void 0
      });
    }
  }
  async function Qe(d, c, p, b, R, j) {
    let I, T = {};
    try {
      I = await Wr(u, d, c, p, b, R, j, i, a);
    } catch (x) {
      return b.forEach((P) => {
        T[P.route.id] = {
          type: U.error,
          error: x
        };
      }), T;
    }
    for (let [x, P] of Object.entries(I))
      if (Xr(P)) {
        let L = P.result;
        T[x] = {
          type: U.redirect,
          response: Jr(L, p, x, R, l, m.v7_relativeSplatPath)
        };
      } else
        T[x] = await Yr(P);
    return T;
  }
  async function nr(d, c, p, b, R) {
    let j = d.matches, I = Qe("loader", d, R, p, c, null), T = Promise.all(b.map(async (L) => {
      if (L.matches && L.match && L.controller) {
        let F = (await Qe("loader", d, Ve(e.history, L.path, L.controller.signal), [L.match], L.matches, L.key))[L.match.route.id];
        return {
          [L.key]: F
        };
      } else
        return Promise.resolve({
          [L.key]: {
            type: U.error,
            error: J(404, {
              pathname: L.path
            })
          }
        });
    })), x = await I, P = (await T).reduce((L, N) => Object.assign(L, N), {});
    return await Promise.all([Ca(c, x, R.signal, j, d.loaderData), Ma(c, P, b)]), {
      loaderResults: x,
      fetcherResults: P
    };
  }
  function jt() {
    Pe = !0, lt.push(...Ot()), $e.forEach((d, c) => {
      q.has(c) && st.add(c), we(c);
    });
  }
  function ve(d, c, p) {
    p === void 0 && (p = {}), f.fetchers.set(d, c), re({
      fetchers: new Map(f.fetchers)
    }, {
      flushSync: (p && p.flushSync) === !0
    });
  }
  function fe(d, c, p, b) {
    b === void 0 && (b = {});
    let R = Se(f.matches, c);
    ct(d), re({
      errors: {
        [R.route.id]: p
      },
      fetchers: new Map(f.fetchers)
    }, {
      flushSync: (b && b.flushSync) === !0
    });
  }
  function ar(d) {
    return Xe.set(d, (Xe.get(d) || 0) + 1), le.has(d) && le.delete(d), f.fetchers.get(d) || Ea;
  }
  function ct(d) {
    let c = f.fetchers.get(d);
    q.has(d) && !(c && c.state === "loading" && Ue.has(d)) && we(d), $e.delete(d), Ue.delete(d), ce.delete(d), m.v7_fetcherPersist && le.delete(d), st.delete(d), f.fetchers.delete(d);
  }
  function Tn(d) {
    let c = (Xe.get(d) || 0) - 1;
    c <= 0 ? (Xe.delete(d), le.add(d), m.v7_fetcherPersist || ct(d)) : Xe.set(d, c), re({
      fetchers: new Map(f.fetchers)
    });
  }
  function we(d) {
    let c = q.get(d);
    c && (c.abort(), q.delete(d));
  }
  function ir(d) {
    for (let c of d) {
      let p = ar(c), b = be(p.data);
      f.fetchers.set(c, b);
    }
  }
  function or() {
    let d = [], c = !1;
    for (let p of ce) {
      let b = f.fetchers.get(p);
      B(b, "Expected fetcher: " + p), b.state === "loading" && (ce.delete(p), d.push(p), c = !0);
    }
    return ir(d), c;
  }
  function lr(d) {
    let c = [];
    for (let [p, b] of Ue)
      if (b < d) {
        let R = f.fetchers.get(p);
        B(R, "Expected fetcher: " + p), R.state === "loading" && (we(p), Ue.delete(p), c.push(p));
      }
    return ir(c), c.length > 0;
  }
  function xn(d, c) {
    let p = f.blockers.get(d) || tt;
    return xe.get(d) !== c && xe.set(d, c), p;
  }
  function sr(d) {
    f.blockers.delete(d), xe.delete(d);
  }
  function ft(d, c) {
    let p = f.blockers.get(d) || tt;
    B(p.state === "unblocked" && c.state === "blocked" || p.state === "blocked" && c.state === "blocked" || p.state === "blocked" && c.state === "proceeding" || p.state === "blocked" && c.state === "unblocked" || p.state === "proceeding" && c.state === "unblocked", "Invalid blocker state transition: " + p.state + " -> " + c.state);
    let b = new Map(f.blockers);
    b.set(d, c), re({
      blockers: b
    });
  }
  function dr(d) {
    let {
      currentLocation: c,
      nextLocation: p,
      historyAction: b
    } = d;
    if (xe.size === 0)
      return;
    xe.size > 1 && Ke(!1, "A router only supports one blocker at a time");
    let R = Array.from(xe.entries()), [j, I] = R[R.length - 1], T = f.blockers.get(j);
    if (!(T && T.state === "proceeding") && I({
      currentLocation: c,
      nextLocation: p,
      historyAction: b
    }))
      return j;
  }
  function Lt(d) {
    let c = J(404, {
      pathname: d
    }), p = s || o, {
      matches: b,
      route: R
    } = Et(p);
    return Ot(), {
      notFoundMatches: b,
      route: R,
      error: c
    };
  }
  function Ot(d) {
    let c = [];
    return Te.forEach((p, b) => {
      (!d || d(b)) && (p.cancel(), c.push(b), Te.delete(b));
    }), c;
  }
  function jn(d, c, p) {
    if (w = d, S = c, v = p || null, !O && f.navigation === It) {
      O = !0;
      let b = cr(f.location, f.matches);
      b != null && re({
        restoreScrollPosition: b
      });
    }
    return () => {
      w = null, S = null, v = null;
    };
  }
  function ur(d, c) {
    return v && v(d, c.map((b) => kn(b, f.loaderData))) || d.key;
  }
  function Ln(d, c) {
    if (w && S) {
      let p = ur(d, c);
      w[p] = S();
    }
  }
  function cr(d, c) {
    if (w) {
      let p = ur(d, c), b = w[p];
      if (typeof b == "number")
        return b;
    }
    return null;
  }
  function ht(d, c, p) {
    if (h)
      if (d) {
        if (Object.keys(d[0].params).length > 0)
          return {
            active: !0,
            matches: wt(c, p, l, !0)
          };
      } else
        return {
          active: !0,
          matches: wt(c, p, l, !0) || []
        };
    return {
      active: !1,
      matches: null
    };
  }
  async function pt(d, c, p) {
    if (!h)
      return {
        type: "success",
        matches: d
      };
    let b = d;
    for (; ; ) {
      let R = s == null, j = s || o, I = i;
      try {
        await h({
          signal: p,
          path: c,
          matches: b,
          patch: (P, L) => {
            p.aborted || Sr(P, L, j, I, a);
          }
        });
      } catch (P) {
        return {
          type: "error",
          error: P,
          partialMatches: b
        };
      } finally {
        R && !p.aborted && (o = [...o]);
      }
      if (p.aborted)
        return {
          type: "aborted"
        };
      let T = Ee(j, c, l);
      if (T)
        return {
          type: "success",
          matches: T
        };
      let x = wt(j, c, l, !0);
      if (!x || b.length === x.length && b.every((P, L) => P.route.id === x[L].route.id))
        return {
          type: "success",
          matches: null
        };
      b = x;
    }
  }
  function On(d) {
    i = {}, s = it(d, a, void 0, i);
  }
  function Cn(d, c) {
    let p = s == null;
    Sr(d, c, s || o, i, a), p && (o = [...o], re({}));
  }
  return A = {
    get basename() {
      return l;
    },
    get future() {
      return m;
    },
    get state() {
      return f;
    },
    get routes() {
      return o;
    },
    get window() {
      return t;
    },
    initialize: yn,
    subscribe: vn,
    enableScrollRestoration: jn,
    navigate: tr,
    fetch: Rn,
    revalidate: wn,
    // Passthrough to history-aware createHref used by useHref so we get proper
    // hash-aware URLs in DOM paths
    createHref: (d) => e.history.createHref(d),
    encodeLocation: (d) => e.history.encodeLocation(d),
    getFetcher: ar,
    deleteFetcher: Tn,
    dispose: gn,
    getBlocker: xn,
    deleteBlocker: sr,
    patchRoutes: Cn,
    _internalFetchControllers: q,
    _internalActiveDeferreds: Te,
    // TODO: Remove setRoutes, it's temporary to avoid dealing with
    // updating the tree while validating the update algorithm.
    _internalSetRoutes: On
  }, A;
}
const Sa = Symbol("deferred");
function ai(e, t) {
  B(e.length > 0, "You must provide a non-empty routes array to createStaticHandler");
  let r = {}, n = (t ? t.basename : null) || "/", a;
  if (t != null && t.mapRouteProperties)
    a = t.mapRouteProperties;
  else if (t != null && t.detectErrorBoundary) {
    let y = t.detectErrorBoundary;
    a = (w) => ({
      hasErrorBoundary: y(w)
    });
  } else
    a = Hr;
  let i = $({
    v7_relativeSplatPath: !1,
    v7_throwAbortReason: !1
  }, t ? t.future : null), o = it(e, a, void 0, r);
  async function s(y, w) {
    let {
      requestContext: v,
      skipLoaderErrorBubbling: S,
      dataStrategy: O
    } = w === void 0 ? {} : w, D = new URL(y.url), C = y.method, E = Ae("", _e(D), null, "default"), M = Ee(o, E, n);
    if (!zt(C) && C !== "HEAD") {
      let f = J(405, {
        method: C
      }), {
        matches: _,
        route: V
      } = Et(o);
      return {
        basename: n,
        location: E,
        matches: _,
        loaderData: {},
        actionData: null,
        errors: {
          [V.id]: f
        },
        statusCode: f.status,
        loaderHeaders: {},
        actionHeaders: {},
        activeDeferreds: null
      };
    } else if (!M) {
      let f = J(404, {
        pathname: E.pathname
      }), {
        matches: _,
        route: V
      } = Et(o);
      return {
        basename: n,
        location: E,
        matches: _,
        loaderData: {},
        actionData: null,
        errors: {
          [V.id]: f
        },
        statusCode: f.status,
        loaderHeaders: {},
        actionHeaders: {},
        activeDeferreds: null
      };
    }
    let A = await u(y, E, M, v, O || null, S === !0, null);
    return Re(A) ? A : $({
      location: E,
      basename: n
    }, A);
  }
  async function l(y, w) {
    let {
      routeId: v,
      requestContext: S,
      dataStrategy: O
    } = w === void 0 ? {} : w, D = new URL(y.url), C = y.method, E = Ae("", _e(D), null, "default"), M = Ee(o, E, n);
    if (!zt(C) && C !== "HEAD" && C !== "OPTIONS")
      throw J(405, {
        method: C
      });
    if (!M)
      throw J(404, {
        pathname: E.pathname
      });
    let A = v ? M.find((k) => k.route.id === v) : Ie(M, E);
    if (v && !A)
      throw J(403, {
        pathname: E.pathname,
        routeId: v
      });
    if (!A)
      throw J(404, {
        pathname: E.pathname
      });
    let f = await u(y, E, M, S, O || null, !1, A);
    if (Re(f))
      return f;
    let _ = f.errors ? Object.values(f.errors)[0] : void 0;
    if (_ !== void 0)
      throw _;
    if (f.actionData)
      return Object.values(f.actionData)[0];
    if (f.loaderData) {
      var V;
      let k = Object.values(f.loaderData)[0];
      return (V = f.activeDeferreds) != null && V[A.route.id] && (k[Sa] = f.activeDeferreds[A.route.id]), k;
    }
  }
  async function u(y, w, v, S, O, D, C) {
    B(y.signal, "query()/queryRoute() requests must contain an AbortController signal");
    try {
      if (ie(y.method.toLowerCase()))
        return await h(y, v, C || Ie(v, w), S, O, D, C != null);
      let E = await m(y, v, S, O, D, C);
      return Re(E) ? E : $({}, E, {
        actionData: null,
        actionHeaders: {}
      });
    } catch (E) {
      if (ja(E) && Re(E.result)) {
        if (E.type === U.error)
          throw E.result;
        return E.result;
      }
      if (Oa(E))
        return E;
      throw E;
    }
  }
  async function h(y, w, v, S, O, D, C) {
    let E;
    if (!v.route.action && !v.route.lazy) {
      let f = J(405, {
        method: y.method,
        pathname: new URL(y.url).pathname,
        routeId: v.route.id
      });
      if (C)
        throw f;
      E = {
        type: U.error,
        error: f
      };
    } else
      E = (await g("action", y, [v], w, C, S, O))[v.route.id], y.signal.aborted && vr(y, C, i);
    if (De(E))
      throw new Response(null, {
        status: E.response.status,
        headers: {
          Location: E.response.headers.get("Location")
        }
      });
    if (me(E)) {
      let f = J(400, {
        type: "defer-action"
      });
      if (C)
        throw f;
      E = {
        type: U.error,
        error: f
      };
    }
    if (C) {
      if (te(E))
        throw E.error;
      return {
        matches: [v],
        loaderData: {},
        actionData: {
          [v.route.id]: E.data
        },
        errors: null,
        // Note: statusCode + headers are unused here since queryRoute will
        // return the raw Response or value
        statusCode: 200,
        loaderHeaders: {},
        actionHeaders: {},
        activeDeferreds: null
      };
    }
    let M = new Request(y.url, {
      headers: y.headers,
      redirect: y.redirect,
      signal: y.signal
    });
    if (te(E)) {
      let f = D ? v : Se(w, v.route.id), _ = await m(M, w, S, O, D, null, [f.route.id, E]);
      return $({}, _, {
        statusCode: ye(E.error) ? E.error.status : E.statusCode != null ? E.statusCode : 500,
        actionData: null,
        actionHeaders: $({}, E.headers ? {
          [v.route.id]: E.headers
        } : {})
      });
    }
    let A = await m(M, w, S, O, D, null);
    return $({}, A, {
      actionData: {
        [v.route.id]: E.data
      }
    }, E.statusCode ? {
      statusCode: E.statusCode
    } : {}, {
      actionHeaders: E.headers ? {
        [v.route.id]: E.headers
      } : {}
    });
  }
  async function m(y, w, v, S, O, D, C) {
    let E = D != null;
    if (E && !(D != null && D.route.loader) && !(D != null && D.route.lazy))
      throw J(400, {
        method: y.method,
        pathname: new URL(y.url).pathname,
        routeId: D?.route.id
      });
    let A = (D ? [D] : C && te(C[1]) ? $t(w, C[0]) : w).filter((Y) => Y.route.loader || Y.route.lazy);
    if (A.length === 0)
      return {
        matches: w,
        // Add a null for all matched routes for proper revalidation on the client
        loaderData: w.reduce((Y, ne) => Object.assign(Y, {
          [ne.route.id]: null
        }), {}),
        errors: C && te(C[1]) ? {
          [C[0]]: C[1].error
        } : null,
        statusCode: 200,
        loaderHeaders: {},
        activeDeferreds: null
      };
    let f = await g("loader", y, A, w, E, v, S);
    y.signal.aborted && vr(y, E, i);
    let _ = /* @__PURE__ */ new Map(), V = Kr(w, f, C, _, O), k = new Set(A.map((Y) => Y.route.id));
    return w.forEach((Y) => {
      k.has(Y.route.id) || (V.loaderData[Y.route.id] = null);
    }), $({}, V, {
      matches: w,
      activeDeferreds: _.size > 0 ? Object.fromEntries(_.entries()) : null
    });
  }
  async function g(y, w, v, S, O, D, C) {
    let E = await Wr(C || Vr, y, null, w, v, S, null, r, a, D), M = {};
    return await Promise.all(S.map(async (A) => {
      if (!(A.route.id in E))
        return;
      let f = E[A.route.id];
      if (Xr(f)) {
        let _ = f.result;
        throw Jr(_, w, A.route.id, S, n, i.v7_relativeSplatPath);
      }
      if (Re(f.result) && O)
        throw f;
      M[A.route.id] = await Yr(f);
    })), M;
  }
  return {
    dataRoutes: o,
    query: s,
    queryRoute: l
  };
}
function ii(e, t, r) {
  return $({}, t, {
    statusCode: ye(r) ? r.status : 500,
    errors: {
      [t._deepestRenderedBoundaryId || e[0].id]: r
    }
  });
}
function vr(e, t, r) {
  if (r.v7_throwAbortReason && e.signal.reason !== void 0)
    throw e.signal.reason;
  let n = t ? "queryRoute" : "query";
  throw new Error(n + "() call aborted: " + e.method + " " + e.url);
}
function Ra(e) {
  return e != null && ("formData" in e && e.formData != null || "body" in e && e.body !== void 0);
}
function Ut(e, t, r, n, a, i, o, s) {
  let l, u;
  if (o) {
    l = [];
    for (let m of t)
      if (l.push(m), m.route.id === o) {
        u = m;
        break;
      }
  } else
    l = t, u = t[t.length - 1];
  let h = na(a || ".", ra(l, i), ot(e.pathname, r) || e.pathname, s === "path");
  if (a == null && (h.search = e.search, h.hash = e.hash), (a == null || a === "" || a === ".") && u) {
    let m = Zt(h.search);
    if (u.route.index && !m)
      h.search = h.search ? h.search.replace(/^\?/, "?index&") : "?index";
    else if (!u.route.index && m) {
      let g = new URLSearchParams(h.search), y = g.getAll("index");
      g.delete("index"), y.filter((v) => v).forEach((v) => g.append("index", v));
      let w = g.toString();
      h.search = w ? "?" + w : "";
    }
  }
  return n && r !== "/" && (h.pathname = h.pathname === "/" ? r : nt([r, h.pathname])), _e(h);
}
function wr(e, t, r, n) {
  if (!n || !Ra(n))
    return {
      path: r
    };
  if (n.formMethod && !zt(n.formMethod))
    return {
      path: r,
      error: J(405, {
        method: n.formMethod
      })
    };
  let a = () => ({
    path: r,
    error: J(400, {
      type: "invalid-body"
    })
  }), i = n.formMethod || "get", o = e ? i.toUpperCase() : i.toLowerCase(), s = Gr(r);
  if (n.body !== void 0) {
    if (n.formEncType === "text/plain") {
      if (!ie(o))
        return a();
      let g = typeof n.body == "string" ? n.body : n.body instanceof FormData || n.body instanceof URLSearchParams ? (
        // https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#plain-text-form-data
        Array.from(n.body.entries()).reduce((y, w) => {
          let [v, S] = w;
          return "" + y + v + "=" + S + `
`;
        }, "")
      ) : String(n.body);
      return {
        path: r,
        submission: {
          formMethod: o,
          formAction: s,
          formEncType: n.formEncType,
          formData: void 0,
          json: void 0,
          text: g
        }
      };
    } else if (n.formEncType === "application/json") {
      if (!ie(o))
        return a();
      try {
        let g = typeof n.body == "string" ? JSON.parse(n.body) : n.body;
        return {
          path: r,
          submission: {
            formMethod: o,
            formAction: s,
            formEncType: n.formEncType,
            formData: void 0,
            json: g,
            text: void 0
          }
        };
      } catch {
        return a();
      }
    }
  }
  B(typeof FormData == "function", "FormData is not available in this environment");
  let l, u;
  if (n.formData)
    l = kt(n.formData), u = n.formData;
  else if (n.body instanceof FormData)
    l = kt(n.body), u = n.body;
  else if (n.body instanceof URLSearchParams)
    l = n.body, u = Dr(l);
  else if (n.body == null)
    l = new URLSearchParams(), u = new FormData();
  else
    try {
      l = new URLSearchParams(n.body), u = Dr(l);
    } catch {
      return a();
    }
  let h = {
    formMethod: o,
    formAction: s,
    formEncType: n && n.formEncType || "application/x-www-form-urlencoded",
    formData: u,
    json: void 0,
    text: void 0
  };
  if (ie(h.formMethod))
    return {
      path: r,
      submission: h
    };
  let m = Ne(r);
  return t && m.search && Zt(m.search) && l.append("index", ""), m.search = "?" + l, {
    path: _e(m),
    submission: h
  };
}
function $t(e, t, r) {
  r === void 0 && (r = !1);
  let n = e.findIndex((a) => a.route.id === t);
  return n >= 0 ? e.slice(0, r ? n + 1 : n) : e;
}
function br(e, t, r, n, a, i, o, s, l, u, h, m, g, y, w, v) {
  let S = v ? te(v[1]) ? v[1].error : v[1].data : void 0, O = e.createURL(t.location), D = e.createURL(a), C = r;
  i && t.errors ? C = $t(r, Object.keys(t.errors)[0], !0) : v && te(v[1]) && (C = $t(r, v[0]));
  let E = v ? v[1].statusCode : void 0, M = o && E && E >= 400, A = C.filter((_, V) => {
    let {
      route: k
    } = _;
    if (k.lazy)
      return !0;
    if (k.loader == null)
      return !1;
    if (i)
      return Ht(k, t.loaderData, t.errors);
    if (Da(t.loaderData, t.matches[V], _) || l.some((oe) => oe === _.route.id))
      return !0;
    let Y = t.matches[V], ne = _;
    return Er(_, $({
      currentUrl: O,
      currentParams: Y.params,
      nextUrl: D,
      nextParams: ne.params
    }, n, {
      actionResult: S,
      actionStatus: E,
      defaultShouldRevalidate: M ? !1 : (
        // Forced revalidation due to submission, useRevalidator, or X-Remix-Revalidate
        s || O.pathname + O.search === D.pathname + D.search || // Search params affect all loaders
        O.search !== D.search || zr(Y, ne)
      )
    }));
  }), f = [];
  return m.forEach((_, V) => {
    if (i || !r.some((Fe) => Fe.route.id === _.routeId) || h.has(V))
      return;
    let k = Ee(y, _.path, w);
    if (!k) {
      f.push({
        key: V,
        routeId: _.routeId,
        path: _.path,
        matches: null,
        match: null,
        controller: null
      });
      return;
    }
    let Y = t.fetchers.get(V), ne = Ie(k, _.path), oe = !1;
    g.has(V) ? oe = !1 : u.has(V) ? (u.delete(V), oe = !0) : Y && Y.state !== "idle" && Y.data === void 0 ? oe = s : oe = Er(ne, $({
      currentUrl: O,
      currentParams: t.matches[t.matches.length - 1].params,
      nextUrl: D,
      nextParams: r[r.length - 1].params
    }, n, {
      actionResult: S,
      actionStatus: E,
      defaultShouldRevalidate: M ? !1 : s
    })), oe && f.push({
      key: V,
      routeId: _.routeId,
      path: _.path,
      matches: k,
      match: ne,
      controller: new AbortController()
    });
  }), [A, f];
}
function Ht(e, t, r) {
  if (e.lazy)
    return !0;
  if (!e.loader)
    return !1;
  let n = t != null && t[e.id] !== void 0, a = r != null && r[e.id] !== void 0;
  return !n && a ? !1 : typeof e.loader == "function" && e.loader.hydrate === !0 ? !0 : !n && !a;
}
function Da(e, t, r) {
  let n = (
    // [a] -> [a, b]
    !t || // [a, b] -> [a, c]
    r.route.id !== t.route.id
  ), a = e[r.route.id] === void 0;
  return n || a;
}
function zr(e, t) {
  let r = e.route.path;
  return (
    // param change for this match, /users/123 -> /users/456
    e.pathname !== t.pathname || // splat param changed, which is not present in match.path
    // e.g. /files/images/avatar.jpg -> files/finances.xls
    r != null && r.endsWith("*") && e.params["*"] !== t.params["*"]
  );
}
function Er(e, t) {
  if (e.route.shouldRevalidate) {
    let r = e.route.shouldRevalidate(t);
    if (typeof r == "boolean")
      return r;
  }
  return t.defaultShouldRevalidate;
}
function Sr(e, t, r, n, a) {
  var i;
  let o;
  if (e) {
    let u = n[e];
    B(u, "No route found to patch children into: routeId = " + e), u.children || (u.children = []), o = u.children;
  } else
    o = r;
  let s = t.filter((u) => !o.some((h) => Br(u, h))), l = it(s, a, [e || "_", "patch", String(((i = o) == null ? void 0 : i.length) || "0")], n);
  o.push(...l);
}
function Br(e, t) {
  return "id" in e && "id" in t && e.id === t.id ? !0 : e.index === t.index && e.path === t.path && e.caseSensitive === t.caseSensitive ? (!e.children || e.children.length === 0) && (!t.children || t.children.length === 0) ? !0 : e.children.every((r, n) => {
    var a;
    return (a = t.children) == null ? void 0 : a.some((i) => Br(r, i));
  }) : !1;
}
async function Pa(e, t, r) {
  if (!e.lazy)
    return;
  let n = await e.lazy();
  if (!e.lazy)
    return;
  let a = r[e.id];
  B(a, "No route found in manifest");
  let i = {};
  for (let o in n) {
    let l = a[o] !== void 0 && // This property isn't static since it should always be updated based
    // on the route updates
    o !== "hasErrorBoundary";
    Ke(!l, 'Route "' + a.id + '" has a static property "' + o + '" defined but its lazy function is also returning a value for this property. ' + ('The lazy route property "' + o + '" will be ignored.')), !l && !$n.has(o) && (i[o] = n[o]);
  }
  Object.assign(a, i), Object.assign(a, $({}, t(a), {
    lazy: void 0
  }));
}
async function Vr(e) {
  let {
    matches: t
  } = e, r = t.filter((a) => a.shouldLoad);
  return (await Promise.all(r.map((a) => a.resolve()))).reduce((a, i, o) => Object.assign(a, {
    [r[o].route.id]: i
  }), {});
}
async function Wr(e, t, r, n, a, i, o, s, l, u) {
  let h = i.map((y) => y.route.lazy ? Pa(y.route, l, s) : void 0), m = i.map((y, w) => {
    let v = h[w], S = a.some((D) => D.route.id === y.route.id);
    return $({}, y, {
      shouldLoad: S,
      resolve: async (D) => (D && n.method === "GET" && (y.route.lazy || y.route.loader) && (S = !0), S ? Ta(t, n, y, v, D, u) : Promise.resolve({
        type: U.data,
        result: void 0
      }))
    });
  }), g = await e({
    matches: m,
    request: n,
    params: i[0].params,
    fetcherKey: o,
    context: u
  });
  try {
    await Promise.all(h);
  } catch {
  }
  return g;
}
async function Ta(e, t, r, n, a, i) {
  let o, s, l = (u) => {
    let h, m = new Promise((w, v) => h = v);
    s = () => h(), t.signal.addEventListener("abort", s);
    let g = (w) => typeof u != "function" ? Promise.reject(new Error("You cannot call the handler for a route which defines a boolean " + ('"' + e + '" [routeId: ' + r.route.id + "]"))) : u({
      request: t,
      params: r.params,
      context: i
    }, ...w !== void 0 ? [w] : []), y = (async () => {
      try {
        return {
          type: "data",
          result: await (a ? a((v) => g(v)) : g())
        };
      } catch (w) {
        return {
          type: "error",
          result: w
        };
      }
    })();
    return Promise.race([y, m]);
  };
  try {
    let u = r.route[e];
    if (n)
      if (u) {
        let h, [m] = await Promise.all([
          // If the handler throws, don't let it immediately bubble out,
          // since we need to let the lazy() execution finish so we know if this
          // route has a boundary that can handle the error
          l(u).catch((g) => {
            h = g;
          }),
          n
        ]);
        if (h !== void 0)
          throw h;
        o = m;
      } else if (await n, u = r.route[e], u)
        o = await l(u);
      else if (e === "action") {
        let h = new URL(t.url), m = h.pathname + h.search;
        throw J(405, {
          method: t.method,
          pathname: m,
          routeId: r.route.id
        });
      } else
        return {
          type: U.data,
          result: void 0
        };
    else if (u)
      o = await l(u);
    else {
      let h = new URL(t.url), m = h.pathname + h.search;
      throw J(404, {
        pathname: m
      });
    }
    B(o.result !== void 0, "You defined " + (e === "action" ? "an action" : "a loader") + " for route " + ('"' + r.route.id + "\" but didn't return anything from your `" + e + "` ") + "function. Please return a value or `null`.");
  } catch (u) {
    return {
      type: U.error,
      result: u
    };
  } finally {
    s && t.signal.removeEventListener("abort", s);
  }
  return o;
}
async function Yr(e) {
  let {
    result: t,
    type: r
  } = e;
  if (Re(t)) {
    let m;
    try {
      let g = t.headers.get("Content-Type");
      g && /\bapplication\/json\b/.test(g) ? t.body == null ? m = null : m = await t.json() : m = await t.text();
    } catch (g) {
      return {
        type: U.error,
        error: g
      };
    }
    return r === U.error ? {
      type: U.error,
      error: new bt(t.status, t.statusText, m),
      statusCode: t.status,
      headers: t.headers
    } : {
      type: U.data,
      data: m,
      statusCode: t.status,
      headers: t.headers
    };
  }
  if (r === U.error) {
    if (jr(t)) {
      var n, a;
      if (t.data instanceof Error) {
        var i, o;
        return {
          type: U.error,
          error: t.data,
          statusCode: (i = t.init) == null ? void 0 : i.status,
          headers: (o = t.init) != null && o.headers ? new Headers(t.init.headers) : void 0
        };
      }
      return {
        type: U.error,
        error: new bt(((n = t.init) == null ? void 0 : n.status) || 500, void 0, t.data),
        statusCode: ye(t) ? t.status : void 0,
        headers: (a = t.init) != null && a.headers ? new Headers(t.init.headers) : void 0
      };
    }
    return {
      type: U.error,
      error: t,
      statusCode: ye(t) ? t.status : void 0
    };
  }
  if (La(t)) {
    var s, l;
    return {
      type: U.deferred,
      deferredData: t,
      statusCode: (s = t.init) == null ? void 0 : s.status,
      headers: ((l = t.init) == null ? void 0 : l.headers) && new Headers(t.init.headers)
    };
  }
  if (jr(t)) {
    var u, h;
    return {
      type: U.data,
      data: t.data,
      statusCode: (u = t.init) == null ? void 0 : u.status,
      headers: (h = t.init) != null && h.headers ? new Headers(t.init.headers) : void 0
    };
  }
  return {
    type: U.data,
    data: t
  };
}
function Jr(e, t, r, n, a, i) {
  let o = e.headers.get("Location");
  if (B(o, "Redirects returned/thrown from loaders/actions must have a Location header"), !Xt.test(o)) {
    let s = n.slice(0, n.findIndex((l) => l.route.id === r) + 1);
    o = Ut(new URL(t.url), s, a, !0, o, i), e.headers.set("Location", o);
  }
  return e;
}
function Rr(e, t, r) {
  if (Xt.test(e)) {
    let n = e, a = n.startsWith("//") ? new URL(t.protocol + n) : new URL(n), i = ot(a.pathname, r) != null;
    if (a.origin === t.origin && i)
      return a.pathname + a.search + a.hash;
  }
  return e;
}
function Ve(e, t, r, n) {
  let a = e.createURL(Gr(t)).toString(), i = {
    signal: r
  };
  if (n && ie(n.formMethod)) {
    let {
      formMethod: o,
      formEncType: s
    } = n;
    i.method = o.toUpperCase(), s === "application/json" ? (i.headers = new Headers({
      "Content-Type": s
    }), i.body = JSON.stringify(n.json)) : s === "text/plain" ? i.body = n.text : s === "application/x-www-form-urlencoded" && n.formData ? i.body = kt(n.formData) : i.body = n.formData;
  }
  return new Request(a, i);
}
function kt(e) {
  let t = new URLSearchParams();
  for (let [r, n] of e.entries())
    t.append(r, typeof n == "string" ? n : n.name);
  return t;
}
function Dr(e) {
  let t = new FormData();
  for (let [r, n] of e.entries())
    t.append(r, n);
  return t;
}
function Kr(e, t, r, n, a) {
  let i = {}, o = null, s, l = !1, u = {}, h = r && te(r[1]) ? r[1].error : void 0;
  return e.forEach((m) => {
    if (!(m.route.id in t))
      return;
    let g = m.route.id, y = t[g];
    if (B(!De(y), "Cannot handle redirect results in processLoaderData"), te(y)) {
      let w = y.error;
      if (h !== void 0 && (w = h, h = void 0), o = o || {}, a)
        o[g] = w;
      else {
        let v = Se(e, g);
        o[v.route.id] == null && (o[v.route.id] = w);
      }
      i[g] = void 0, l || (l = !0, s = ye(y.error) ? y.error.status : 500), y.headers && (u[g] = y.headers);
    } else
      me(y) ? (n.set(g, y.deferredData), i[g] = y.deferredData.data, y.statusCode != null && y.statusCode !== 200 && !l && (s = y.statusCode), y.headers && (u[g] = y.headers)) : (i[g] = y.data, y.statusCode && y.statusCode !== 200 && !l && (s = y.statusCode), y.headers && (u[g] = y.headers));
  }), h !== void 0 && r && (o = {
    [r[0]]: h
  }, i[r[0]] = void 0), {
    loaderData: i,
    errors: o,
    statusCode: s || 200,
    loaderHeaders: u
  };
}
function Pr(e, t, r, n, a, i, o) {
  let {
    loaderData: s,
    errors: l
  } = Kr(
    t,
    r,
    n,
    o,
    !1
    // This method is only called client side so we always want to bubble
  );
  return a.forEach((u) => {
    let {
      key: h,
      match: m,
      controller: g
    } = u, y = i[h];
    if (B(y, "Did not find corresponding fetcher result"), !(g && g.signal.aborted))
      if (te(y)) {
        let w = Se(e.matches, m?.route.id);
        l && l[w.route.id] || (l = $({}, l, {
          [w.route.id]: y.error
        })), e.fetchers.delete(h);
      } else if (De(y))
        B(!1, "Unhandled fetcher revalidation redirect");
      else if (me(y))
        B(!1, "Unhandled fetcher deferred data");
      else {
        let w = be(y.data);
        e.fetchers.set(h, w);
      }
  }), {
    loaderData: s,
    errors: l
  };
}
function Tr(e, t, r, n) {
  let a = $({}, t);
  for (let i of r) {
    let o = i.route.id;
    if (t.hasOwnProperty(o) ? t[o] !== void 0 && (a[o] = t[o]) : e[o] !== void 0 && i.route.loader && (a[o] = e[o]), n && n.hasOwnProperty(o))
      break;
  }
  return a;
}
function xr(e) {
  return e ? te(e[1]) ? {
    // Clear out prior actionData on errors
    actionData: {}
  } : {
    actionData: {
      [e[0]]: e[1].data
    }
  } : {};
}
function Se(e, t) {
  return (t ? e.slice(0, e.findIndex((n) => n.route.id === t) + 1) : [...e]).reverse().find((n) => n.route.hasErrorBoundary === !0) || e[0];
}
function Et(e) {
  let t = e.length === 1 ? e[0] : e.find((r) => r.index || !r.path || r.path === "/") || {
    id: "__shim-error-route__"
  };
  return {
    matches: [{
      params: {},
      pathname: "",
      pathnameBase: "",
      route: t
    }],
    route: t
  };
}
function J(e, t) {
  let {
    pathname: r,
    routeId: n,
    method: a,
    type: i,
    message: o
  } = t === void 0 ? {} : t, s = "Unknown Server Error", l = "Unknown @remix-run/router error";
  return e === 400 ? (s = "Bad Request", a && r && n ? l = "You made a " + a + ' request to "' + r + '" but ' + ('did not provide a `loader` for route "' + n + '", ') + "so there is no way to handle the request." : i === "defer-action" ? l = "defer() is not supported in actions" : i === "invalid-body" && (l = "Unable to encode submission body")) : e === 403 ? (s = "Forbidden", l = 'Route "' + n + '" does not match URL "' + r + '"') : e === 404 ? (s = "Not Found", l = 'No route matches URL "' + r + '"') : e === 405 && (s = "Method Not Allowed", a && r && n ? l = "You made a " + a.toUpperCase() + ' request to "' + r + '" but ' + ('did not provide an `action` for route "' + n + '", ') + "so there is no way to handle the request." : a && (l = 'Invalid request method "' + a.toUpperCase() + '"')), new bt(e || 500, s, new Error(l), !0);
}
function gt(e) {
  let t = Object.entries(e);
  for (let r = t.length - 1; r >= 0; r--) {
    let [n, a] = t[r];
    if (De(a))
      return {
        key: n,
        result: a
      };
  }
}
function Gr(e) {
  let t = typeof e == "string" ? Ne(e) : e;
  return _e($({}, t, {
    hash: ""
  }));
}
function xa(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search ? !1 : e.hash === "" ? t.hash !== "" : e.hash === t.hash ? !0 : t.hash !== "";
}
function ja(e) {
  return e != null && typeof e == "object" && "type" in e && "result" in e && (e.type === U.data || e.type === U.error);
}
function Xr(e) {
  return Re(e.result) && wa.has(e.result.status);
}
function me(e) {
  return e.type === U.deferred;
}
function te(e) {
  return e.type === U.error;
}
function De(e) {
  return (e && e.type) === U.redirect;
}
function jr(e) {
  return typeof e == "object" && e != null && "type" in e && "data" in e && "init" in e && e.type === "DataWithResponseInit";
}
function La(e) {
  let t = e;
  return t && typeof t == "object" && typeof t.data == "object" && typeof t.subscribe == "function" && typeof t.cancel == "function" && typeof t.resolveData == "function";
}
function Re(e) {
  return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.headers == "object" && typeof e.body < "u";
}
function Oa(e) {
  if (!Re(e))
    return !1;
  let t = e.status, r = e.headers.get("Location");
  return t >= 300 && t <= 399 && r != null;
}
function zt(e) {
  return va.has(e.toLowerCase());
}
function ie(e) {
  return ya.has(e.toLowerCase());
}
async function Ca(e, t, r, n, a) {
  let i = Object.entries(t);
  for (let o = 0; o < i.length; o++) {
    let [s, l] = i[o], u = e.find((g) => g?.route.id === s);
    if (!u)
      continue;
    let h = n.find((g) => g.route.id === u.route.id), m = h != null && !zr(h, u) && (a && a[u.route.id]) !== void 0;
    me(l) && m && await Qt(l, r, !1).then((g) => {
      g && (t[s] = g);
    });
  }
}
async function Ma(e, t, r) {
  for (let n = 0; n < r.length; n++) {
    let {
      key: a,
      routeId: i,
      controller: o
    } = r[n], s = t[a];
    e.find((u) => u?.route.id === i) && me(s) && (B(o, "Expected an AbortController for revalidating fetcher deferred result"), await Qt(s, o.signal, !0).then((u) => {
      u && (t[a] = u);
    }));
  }
}
async function Qt(e, t, r) {
  if (r === void 0 && (r = !1), !await e.deferredData.resolveData(t)) {
    if (r)
      try {
        return {
          type: U.data,
          data: e.deferredData.unwrappedData
        };
      } catch (a) {
        return {
          type: U.error,
          error: a
        };
      }
    return {
      type: U.data,
      data: e.deferredData.data
    };
  }
}
function Zt(e) {
  return new URLSearchParams(e).getAll("index").some((t) => t === "");
}
function Ie(e, t) {
  let r = typeof t == "string" ? Ne(t).search : t.search;
  if (e[e.length - 1].route.index && Zt(r || ""))
    return e[e.length - 1];
  let n = Ur(e);
  return n[n.length - 1];
}
function Lr(e) {
  let {
    formMethod: t,
    formAction: r,
    formEncType: n,
    text: a,
    formData: i,
    json: o
  } = e;
  if (!(!t || !r || !n)) {
    if (a != null)
      return {
        formMethod: t,
        formAction: r,
        formEncType: n,
        formData: void 0,
        json: void 0,
        text: a
      };
    if (i != null)
      return {
        formMethod: t,
        formAction: r,
        formEncType: n,
        formData: i,
        json: void 0,
        text: void 0
      };
    if (o !== void 0)
      return {
        formMethod: t,
        formAction: r,
        formEncType: n,
        formData: void 0,
        json: o,
        text: void 0
      };
  }
}
function At(e, t) {
  return t ? {
    state: "loading",
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text
  } : {
    state: "loading",
    location: e,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0
  };
}
function Ia(e, t) {
  return {
    state: "submitting",
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text
  };
}
function rt(e, t) {
  return e ? {
    state: "loading",
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t
  } : {
    state: "loading",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: t
  };
}
function Aa(e, t) {
  return {
    state: "submitting",
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t ? t.data : void 0
  };
}
function be(e) {
  return {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: e
  };
}
function _a(e, t) {
  try {
    let r = e.sessionStorage.getItem(kr);
    if (r) {
      let n = JSON.parse(r);
      for (let [a, i] of Object.entries(n || {}))
        i && Array.isArray(i) && t.set(a, new Set(i || []));
    }
  } catch {
  }
}
function Na(e, t) {
  if (t.size > 0) {
    let r = {};
    for (let [n, a] of t)
      r[n] = [...a];
    try {
      e.sessionStorage.setItem(kr, JSON.stringify(r));
    } catch (n) {
      Ke(!1, "Failed to save applied view transitions in sessionStorage (" + n + ").");
    }
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
let at = /* @__PURE__ */ function(e) {
  return e.Development = "development", e.Production = "production", e.Test = "test", e;
}({});
function oi(e) {
  return e === at.Development || e === at.Production || e === at.Test;
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
function Tt(e, t) {
  if (e instanceof Error && t !== at.Development) {
    let r = new Error("Unexpected Server Error");
    return r.stack = void 0, r;
  }
  return e;
}
function Qr(e, t) {
  return Object.entries(e).reduce((r, [n, a]) => Object.assign(r, {
    [n]: Tt(a, t)
  }), {});
}
function Fa(e, t) {
  let r = Tt(e, t);
  return {
    message: r.message,
    stack: r.stack
  };
}
function li(e, t) {
  if (!e) return null;
  let r = Object.entries(e), n = {};
  for (let [a, i] of r)
    if (ye(i))
      n[a] = {
        ...i,
        __type: "RouteErrorResponse"
      };
    else if (i instanceof Error) {
      let o = Tt(i, t);
      n[a] = {
        message: o.message,
        stack: o.stack,
        __type: "Error",
        // If this is a subclass (i.e., ReferenceError), send up the type so we
        // can re-create the same type during hydration.  This will only apply
        // in dev mode since all production errors are sanitized to normal
        // Error instances
        ...o.name !== "Error" ? {
          __subType: o.name
        } : {}
      };
    } else
      n[a] = i;
  return n;
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
const si = (e, t = {}) => la(e, t), di = (e, t = {}) => ha(e, t), ui = (e, t = 302) => Gt(e, t), ci = (e, t = 302) => ma(e, t), fi = (e, t = 302) => pa(e, t);
function hi(e) {
  let t = e;
  return t && typeof t == "object" && typeof t.data == "object" && typeof t.subscribe == "function" && typeof t.cancel == "function" && typeof t.resolveData == "function";
}
function Zr(e) {
  return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.headers == "object" && typeof e.body < "u";
}
const Ua = /* @__PURE__ */ new Set([301, 302, 303, 307, 308]);
function qt(e) {
  return Ua.has(e);
}
function pi(e) {
  return qt(e.status);
}
function $a(e) {
  return e != null && typeof e.then == "function" && e._tracked === !0;
}
const Ha = "__deferred_promise:";
function mi(e, t, r) {
  let n = new TextEncoder();
  return new ReadableStream({
    async start(i) {
      let o = {}, s = [];
      for (let [u, h] of Object.entries(e.data))
        $a(h) ? (o[u] = `${Ha}${u}`, (typeof h._data < "u" || typeof h._error < "u") && s.push(u)) : o[u] = h;
      i.enqueue(n.encode(JSON.stringify(o) + `

`));
      for (let u of s)
        Or(i, n, u, e.data[u], r);
      let l = e.subscribe((u, h) => {
        h && Or(i, n, h, e.data[h], r);
      });
      await e.resolveData(t), l(), i.close();
    }
  });
}
function Or(e, t, r, n, a) {
  "_error" in n ? e.enqueue(t.encode("error:" + JSON.stringify({
    [r]: n._error instanceof Error ? Fa(n._error, a) : n._error
  }) + `

`)) : e.enqueue(t.encode("data:" + JSON.stringify({
    [r]: n._data ?? null
  }) + `

`));
}
var qr = -1, en = -2, tn = -3, rn = -4, er = -5, nn = -6, an = -7, on = "B", ln = "D", Ye = "E", Bt = "M", sn = "N", Je = "P", dn = "R", Vt = "S", un = "Y", cn = "U", Wt = "Z", fn = class {
  promise;
  resolve;
  reject;
  constructor() {
    this.promise = new Promise((e, t) => {
      this.resolve = e, this.reject = t;
    });
  }
};
function ka() {
  const e = new TextDecoder();
  let t = "";
  return new TransformStream({
    transform(r, n) {
      const a = e.decode(r, { stream: !0 }), i = (t + a).split(`
`);
      t = i.pop() || "";
      for (const o of i)
        n.enqueue(o);
    },
    flush(r) {
      t && r.enqueue(t);
    }
  });
}
function ae(e) {
  const { indices: t } = this, r = t.get(e);
  if (r)
    return [r];
  if (e === void 0)
    return an;
  if (e === null)
    return er;
  if (Number.isNaN(e))
    return en;
  if (e === Number.POSITIVE_INFINITY)
    return nn;
  if (e === Number.NEGATIVE_INFINITY)
    return tn;
  if (e === 0 && 1 / e < 0)
    return rn;
  const n = this.index++;
  return t.set(e, n), za.call(this, e, n), n;
}
function za(e, t) {
  const { deferred: r, plugins: n, postPlugins: a } = this, i = this.stringified, o = [[e, t]];
  for (; o.length > 0; ) {
    const [s, l] = o.pop(), u = (m) => Object.keys(m).map((g) => `"_${ae.call(this, g)}":${ae.call(this, m[g])}`).join(",");
    let h = null;
    switch (typeof s) {
      case "boolean":
      case "number":
      case "string":
        i[l] = JSON.stringify(s);
        break;
      case "bigint":
        i[l] = `["${on}","${s}"]`;
        break;
      case "symbol": {
        const m = Symbol.keyFor(s);
        m ? i[l] = `["${un}",${JSON.stringify(m)}]` : h = new Error(
          "Cannot encode symbol unless created with Symbol.for()"
        );
        break;
      }
      case "object": {
        if (!s) {
          i[l] = `${er}`;
          break;
        }
        const m = Array.isArray(s);
        let g = !1;
        if (!m && n)
          for (const y of n) {
            const w = y(s);
            if (Array.isArray(w)) {
              g = !0;
              const [v, ...S] = w;
              i[l] = `[${JSON.stringify(v)}`, S.length > 0 && (i[l] += `,${S.map((O) => ae.call(this, O)).join(",")}`), i[l] += "]";
              break;
            }
          }
        if (!g) {
          let y = m ? "[" : "{";
          if (m) {
            for (let w = 0; w < s.length; w++)
              y += (w ? "," : "") + (w in s ? ae.call(this, s[w]) : qr);
            i[l] = `${y}]`;
          } else s instanceof Date ? i[l] = `["${ln}",${s.getTime()}]` : s instanceof URL ? i[l] = `["${cn}",${JSON.stringify(s.href)}]` : s instanceof RegExp ? i[l] = `["${dn}",${JSON.stringify(
            s.source
          )},${JSON.stringify(s.flags)}]` : s instanceof Set ? s.size > 0 ? i[l] = `["${Vt}",${[...s].map((w) => ae.call(this, w)).join(",")}]` : i[l] = `["${Vt}"]` : s instanceof Map ? s.size > 0 ? i[l] = `["${Bt}",${[...s].flatMap(([w, v]) => [
            ae.call(this, w),
            ae.call(this, v)
          ]).join(",")}]` : i[l] = `["${Bt}"]` : s instanceof Promise ? (i[l] = `["${Je}",${l}]`, r[l] = s) : s instanceof Error ? (i[l] = `["${Ye}",${JSON.stringify(s.message)}`, s.name !== "Error" && (i[l] += `,${JSON.stringify(s.name)}`), i[l] += "]") : Object.getPrototypeOf(s) === null ? i[l] = `["${sn}",{${u(s)}}]` : Va(s) ? i[l] = `{${u(s)}}` : h = new Error("Cannot encode object with prototype");
        }
        break;
      }
      default: {
        const m = Array.isArray(s);
        let g = !1;
        if (!m && n)
          for (const y of n) {
            const w = y(s);
            if (Array.isArray(w)) {
              g = !0;
              const [v, ...S] = w;
              i[l] = `[${JSON.stringify(v)}`, S.length > 0 && (i[l] += `,${S.map((O) => ae.call(this, O)).join(",")}`), i[l] += "]";
              break;
            }
          }
        g || (h = new Error("Cannot encode function or unexpected type"));
      }
    }
    if (h) {
      let m = !1;
      if (a)
        for (const g of a) {
          const y = g(s);
          if (Array.isArray(y)) {
            m = !0;
            const [w, ...v] = y;
            i[l] = `[${JSON.stringify(w)}`, v.length > 0 && (i[l] += `,${v.map((S) => ae.call(this, S)).join(",")}`), i[l] += "]";
            break;
          }
        }
      if (!m)
        throw h;
    }
  }
}
var Ba = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function Va(e) {
  const t = Object.getPrototypeOf(e);
  return t === Object.prototype || t === null || Object.getOwnPropertyNames(t).sort().join("\0") === Ba;
}
var _t = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : void 0;
function Yt(e) {
  const { hydrated: t, values: r } = this;
  if (typeof e == "number")
    return Cr.call(this, e);
  if (!Array.isArray(e) || !e.length)
    throw new SyntaxError();
  const n = r.length;
  for (const a of e)
    r.push(a);
  return t.length = r.length, Cr.call(this, n);
}
function Cr(e) {
  const { hydrated: t, values: r, deferred: n, plugins: a } = this;
  let i;
  const o = [
    [
      e,
      (l) => {
        i = l;
      }
    ]
  ];
  let s = [];
  for (; o.length > 0; ) {
    const [l, u] = o.pop();
    switch (l) {
      case an:
        u(void 0);
        continue;
      case er:
        u(null);
        continue;
      case en:
        u(NaN);
        continue;
      case nn:
        u(1 / 0);
        continue;
      case tn:
        u(-1 / 0);
        continue;
      case rn:
        u(-0);
        continue;
    }
    if (t[l]) {
      u(t[l]);
      continue;
    }
    const h = r[l];
    if (!h || typeof h != "object") {
      t[l] = h, u(h);
      continue;
    }
    if (Array.isArray(h))
      if (typeof h[0] == "string") {
        const [m, g, y] = h;
        switch (m) {
          case ln:
            u(t[l] = new Date(g));
            continue;
          case cn:
            u(t[l] = new URL(g));
            continue;
          case on:
            u(t[l] = BigInt(g));
            continue;
          case dn:
            u(t[l] = new RegExp(g, y));
            continue;
          case un:
            u(t[l] = Symbol.for(g));
            continue;
          case Vt:
            const w = /* @__PURE__ */ new Set();
            t[l] = w;
            for (let E = 1; E < h.length; E++)
              o.push([
                h[E],
                (M) => {
                  w.add(M);
                }
              ]);
            u(w);
            continue;
          case Bt:
            const v = /* @__PURE__ */ new Map();
            t[l] = v;
            for (let E = 1; E < h.length; E += 2) {
              const M = [];
              o.push([
                h[E + 1],
                (A) => {
                  M[1] = A;
                }
              ]), o.push([
                h[E],
                (A) => {
                  M[0] = A;
                }
              ]), s.push(() => {
                v.set(M[0], M[1]);
              });
            }
            u(v);
            continue;
          case sn:
            const S = /* @__PURE__ */ Object.create(null);
            t[l] = S;
            for (const E of Object.keys(g).reverse()) {
              const M = [];
              o.push([
                g[E],
                (A) => {
                  M[1] = A;
                }
              ]), o.push([
                Number(E.slice(1)),
                (A) => {
                  M[0] = A;
                }
              ]), s.push(() => {
                S[M[0]] = M[1];
              });
            }
            u(S);
            continue;
          case Je:
            if (t[g])
              u(t[l] = t[g]);
            else {
              const E = new fn();
              n[g] = E, u(t[l] = E.promise);
            }
            continue;
          case Ye:
            const [, O, D] = h;
            let C = D && _t && _t[D] ? new _t[D](O) : new Error(O);
            t[l] = C, u(C);
            continue;
          case Wt:
            u(t[l] = t[g]);
            continue;
          default:
            if (Array.isArray(a)) {
              const E = [], M = h.slice(1);
              for (let A = 0; A < M.length; A++) {
                const f = M[A];
                o.push([
                  f,
                  (_) => {
                    E[A] = _;
                  }
                ]);
              }
              s.push(() => {
                for (const A of a) {
                  const f = A(h[0], ...E);
                  if (f) {
                    u(t[l] = f.value);
                    return;
                  }
                }
                throw new SyntaxError();
              });
              continue;
            }
            throw new SyntaxError();
        }
      } else {
        const m = [];
        t[l] = m;
        for (let g = 0; g < h.length; g++) {
          const y = h[g];
          y !== qr && o.push([
            y,
            (w) => {
              m[g] = w;
            }
          ]);
        }
        u(m);
        continue;
      }
    else {
      const m = {};
      t[l] = m;
      for (const g of Object.keys(h).reverse()) {
        const y = [];
        o.push([
          h[g],
          (w) => {
            y[1] = w;
          }
        ]), o.push([
          Number(g.slice(1)),
          (w) => {
            y[0] = w;
          }
        ]), s.push(() => {
          m[y[0]] = y[1];
        });
      }
      u(m);
      continue;
    }
  }
  for (; s.length > 0; )
    s.pop()();
  return i;
}
async function yi(e, t) {
  const { plugins: r } = t ?? {}, n = new fn(), a = e.pipeThrough(ka()).getReader(), i = {
    values: [],
    hydrated: [],
    deferred: {},
    plugins: r
  }, o = await Wa.call(i, a);
  let s = n.promise;
  return o.done ? n.resolve() : s = Ya.call(i, a).then(n.resolve).catch((l) => {
    for (const u of Object.values(i.deferred))
      u.reject(l);
    n.reject(l);
  }), {
    done: s.then(() => a.closed),
    value: o.value
  };
}
async function Wa(e) {
  const t = await e.read();
  if (!t.value)
    throw new SyntaxError();
  let r;
  try {
    r = JSON.parse(t.value);
  } catch {
    throw new SyntaxError();
  }
  return {
    done: t.done,
    value: Yt.call(this, r)
  };
}
async function Ya(e) {
  let t = await e.read();
  for (; !t.done; ) {
    if (!t.value)
      continue;
    const r = t.value;
    switch (r[0]) {
      case Je: {
        const n = r.indexOf(":"), a = Number(r.slice(1, n)), i = this.deferred[a];
        if (!i)
          throw new Error(`Deferred ID ${a} not found in stream`);
        const o = r.slice(n + 1);
        let s;
        try {
          s = JSON.parse(o);
        } catch {
          throw new SyntaxError();
        }
        const l = Yt.call(this, s);
        i.resolve(l);
        break;
      }
      case Ye: {
        const n = r.indexOf(":"), a = Number(r.slice(1, n)), i = this.deferred[a];
        if (!i)
          throw new Error(`Deferred ID ${a} not found in stream`);
        const o = r.slice(n + 1);
        let s;
        try {
          s = JSON.parse(o);
        } catch {
          throw new SyntaxError();
        }
        const l = Yt.call(this, s);
        i.reject(l);
        break;
      }
      default:
        throw new SyntaxError();
    }
    t = await e.read();
  }
}
function Ja(e, t) {
  const { plugins: r, postPlugins: n, signal: a } = t ?? {}, i = {
    deferred: {},
    index: 0,
    indices: /* @__PURE__ */ new Map(),
    stringified: [],
    plugins: r,
    postPlugins: n,
    signal: a
  }, o = new TextEncoder();
  let s = 0;
  return new ReadableStream({
    async start(u) {
      const h = ae.call(i, e);
      if (Array.isArray(h))
        throw new Error("This should never happen");
      h < 0 ? u.enqueue(o.encode(`${h}
`)) : (u.enqueue(
        o.encode(`[${i.stringified.join(",")}]
`)
      ), s = i.stringified.length - 1);
      const m = /* @__PURE__ */ new WeakSet();
      for (; Object.keys(i.deferred).length > 0; ) {
        for (const [g, y] of Object.entries(i.deferred))
          m.has(y) || m.add(
            i.deferred[Number(g)] = Ka(
              y,
              i.signal
            ).then(
              (w) => {
                const v = ae.call(i, w);
                if (Array.isArray(v))
                  u.enqueue(
                    o.encode(
                      `${Je}${g}:[["${Wt}",${v[0]}]]
`
                    )
                  ), i.index++, s++;
                else if (v < 0)
                  u.enqueue(
                    o.encode(`${Je}${g}:${v}
`)
                  );
                else {
                  const S = i.stringified.slice(s + 1).join(",");
                  u.enqueue(
                    o.encode(
                      `${Je}${g}:[${S}]
`
                    )
                  ), s = i.stringified.length - 1;
                }
              },
              (w) => {
                (!w || typeof w != "object" || !(w instanceof Error)) && (w = new Error("An unknown error occurred"));
                const v = ae.call(i, w);
                if (Array.isArray(v))
                  u.enqueue(
                    o.encode(
                      `${Ye}${g}:[["${Wt}",${v[0]}]]
`
                    )
                  ), i.index++, s++;
                else if (v < 0)
                  u.enqueue(
                    o.encode(`${Ye}${g}:${v}
`)
                  );
                else {
                  const S = i.stringified.slice(s + 1).join(",");
                  u.enqueue(
                    o.encode(
                      `${Ye}${g}:[${S}]
`
                    )
                  ), s = i.stringified.length - 1;
                }
              }
            ).finally(() => {
              delete i.deferred[Number(g)];
            })
          );
        await Promise.race(Object.values(i.deferred));
      }
      await Promise.all(Object.values(i.deferred)), u.close();
    }
  });
}
function Ka(e, t) {
  if (!t)
    return e;
  if (t.aborted)
    return Promise.reject(t.reason || new Error("Signal was aborted."));
  const r = new Promise((n, a) => {
    t.addEventListener("abort", (i) => {
      a(t.reason || new Error("Signal was aborted."));
    }), e.then(n).catch(a);
  });
  return r.catch(() => {
  }), Promise.race([r, e]);
}
var xt = { exports: {} }, St = {
  decodeValues: !0,
  map: !1,
  silent: !1
};
function Jt(e) {
  return typeof e == "string" && !!e.trim();
}
function Kt(e, t) {
  var r = e.split(";").filter(Jt), n = r.shift(), a = Ga(n), i = a.name, o = a.value;
  t = t ? Object.assign({}, St, t) : St;
  try {
    o = t.decodeValues ? decodeURIComponent(o) : o;
  } catch (l) {
    console.error(
      "set-cookie-parser encountered an error while decoding a cookie with value '" + o + "'. Set options.decodeValues to false to disable this feature.",
      l
    );
  }
  var s = {
    name: i,
    value: o
  };
  return r.forEach(function(l) {
    var u = l.split("="), h = u.shift().trimLeft().toLowerCase(), m = u.join("=");
    h === "expires" ? s.expires = new Date(m) : h === "max-age" ? s.maxAge = parseInt(m, 10) : h === "secure" ? s.secure = !0 : h === "httponly" ? s.httpOnly = !0 : h === "samesite" ? s.sameSite = m : h === "partitioned" ? s.partitioned = !0 : s[h] = m;
  }), s;
}
function Ga(e) {
  var t = "", r = "", n = e.split("=");
  return n.length > 1 ? (t = n.shift(), r = n.join("=")) : r = e, { name: t, value: r };
}
function hn(e, t) {
  if (t = t ? Object.assign({}, St, t) : St, !e)
    return t.map ? {} : [];
  if (e.headers)
    if (typeof e.headers.getSetCookie == "function")
      e = e.headers.getSetCookie();
    else if (e.headers["set-cookie"])
      e = e.headers["set-cookie"];
    else {
      var r = e.headers[Object.keys(e.headers).find(function(a) {
        return a.toLowerCase() === "set-cookie";
      })];
      !r && e.headers.cookie && !t.silent && console.warn(
        "Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning."
      ), e = r;
    }
  if (Array.isArray(e) || (e = [e]), t.map) {
    var n = {};
    return e.filter(Jt).reduce(function(a, i) {
      var o = Kt(i, t);
      return a[o.name] = o, a;
    }, n);
  } else
    return e.filter(Jt).map(function(a) {
      return Kt(a, t);
    });
}
function Xa(e) {
  if (Array.isArray(e))
    return e;
  if (typeof e != "string")
    return [];
  var t = [], r = 0, n, a, i, o, s;
  function l() {
    for (; r < e.length && /\s/.test(e.charAt(r)); )
      r += 1;
    return r < e.length;
  }
  function u() {
    return a = e.charAt(r), a !== "=" && a !== ";" && a !== ",";
  }
  for (; r < e.length; ) {
    for (n = r, s = !1; l(); )
      if (a = e.charAt(r), a === ",") {
        for (i = r, r += 1, l(), o = r; r < e.length && u(); )
          r += 1;
        r < e.length && e.charAt(r) === "=" ? (s = !0, r = o, t.push(e.substring(n, i)), n = r) : r = i + 1;
      } else
        r += 1;
    (!s || r >= e.length) && t.push(e.substring(n, e.length));
  }
  return t;
}
xt.exports = hn;
xt.exports.parse = hn;
xt.exports.parseString = Kt;
var Qa = xt.exports.splitCookiesString = Xa;
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
function pn(e, t) {
  let r = t.errors ? t.matches.findIndex((i) => t.errors[i.route.id]) : -1, n = r >= 0 ? t.matches.slice(0, r + 1) : t.matches, a;
  if (r >= 0) {
    let {
      actionHeaders: i,
      actionData: o,
      loaderHeaders: s,
      loaderData: l
    } = t;
    t.matches.slice(r).some((u) => {
      let h = u.route.id;
      return i[h] && (!o || o[h] === void 0) ? a = i[h] : s[h] && l[h] === void 0 && (a = s[h]), a != null;
    });
  }
  return n.reduce((i, o, s) => {
    let {
      id: l
    } = o.route, u = e.routes[l].module, h = t.loaderHeaders[l] || new Headers(), m = t.actionHeaders[l] || new Headers(), g = a != null && s === n.length - 1, y = g && a !== h && a !== m;
    if (u.headers == null) {
      let v = new Headers(i);
      return y && Ce(a, v), Ce(m, v), Ce(h, v), v;
    }
    let w = new Headers(u.headers ? typeof u.headers == "function" ? u.headers({
      loaderHeaders: h,
      parentHeaders: i,
      actionHeaders: m,
      errorHeaders: g ? a : void 0
    }) : u.headers : void 0);
    return y && Ce(a, w), Ce(m, w), Ce(h, w), Ce(i, w), w;
  }, new Headers());
}
function Ce(e, t) {
  let r = e.get("Set-Cookie");
  if (r) {
    var n;
    let a = Qa(r), i = new Set((n = t.getSetCookie) === null || n === void 0 ? void 0 : n.call(t));
    a.forEach((o) => {
      i.has(o) || t.append("Set-Cookie", o);
    });
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
const Rt = Symbol("SingleFetchRedirect"), Dt = 202;
function mn({
  isActionDataRequest: e,
  loadRouteIds: t
} = {}) {
  return async ({
    request: r,
    matches: n
  }) => {
    if (e && r.method === "GET")
      return {};
    let a = t ? n.filter((o) => t.includes(o.route.id)) : n;
    return (await Promise.all(a.map((o) => o.resolve()))).reduce((o, s, l) => Object.assign(o, {
      [a[l].route.id]: s
    }), {});
  };
}
async function gi(e, t, r, n, a, i, o) {
  try {
    let s = new Request(a, {
      method: n.method,
      body: n.body,
      headers: n.headers,
      signal: n.signal,
      ...n.body ? {
        duplex: "half"
      } : void 0
    }), l = await r.query(s, {
      requestContext: i,
      skipLoaderErrorBubbling: !0,
      dataStrategy: mn({
        isActionDataRequest: !0
      })
    });
    if (Zr(l))
      return {
        result: Pt(l.status, l.headers, e.basename),
        headers: l.headers,
        status: Dt
      };
    let u = l, h = pn(e, u);
    if (qt(u.statusCode) && h.has("Location"))
      return {
        result: Pt(u.statusCode, h, e.basename),
        headers: h,
        status: Dt
      };
    u.errors && (Object.values(u.errors).forEach((g) => {
      (!ye(g) || g.error) && o(g);
    }), u.errors = Qr(u.errors, t));
    let m;
    return u.errors ? m = {
      error: Object.values(u.errors)[0]
    } : m = {
      data: Object.values(u.actionData || {})[0]
    }, {
      result: m,
      headers: h,
      status: u.statusCode
    };
  } catch (s) {
    return o(s), {
      result: {
        error: s
      },
      headers: new Headers(),
      status: 500
    };
  }
}
async function vi(e, t, r, n, a, i, o) {
  try {
    var s;
    let l = new Request(a, {
      headers: n.headers,
      signal: n.signal
    }), u = ((s = new URL(n.url).searchParams.get("_routes")) === null || s === void 0 ? void 0 : s.split(",")) || void 0, h = await r.query(l, {
      requestContext: i,
      skipLoaderErrorBubbling: !0,
      dataStrategy: mn({
        loadRouteIds: u
      })
    });
    if (Zr(h))
      return {
        result: {
          [Rt]: Pt(h.status, h.headers, e.basename)
        },
        headers: h.headers,
        status: Dt
      };
    let m = h, g = pn(e, m);
    if (qt(m.statusCode) && g.has("Location"))
      return {
        result: {
          [Rt]: Pt(m.statusCode, g, e.basename)
        },
        headers: g,
        status: Dt
      };
    m.errors && (Object.values(m.errors).forEach((v) => {
      (!ye(v) || v.error) && o(v);
    }), m.errors = Qr(m.errors, t));
    let y = {};
    return (u ? m.matches.filter((v) => v.route.loader && u.includes(v.route.id)) : m.matches).forEach((v) => {
      var S, O;
      let D = (S = m.loaderData) === null || S === void 0 ? void 0 : S[v.route.id], C = (O = m.errors) === null || O === void 0 ? void 0 : O[v.route.id];
      C !== void 0 ? y[v.route.id] = {
        error: C
      } : D !== void 0 && (y[v.route.id] = {
        data: D
      });
    }), {
      result: y,
      headers: g,
      status: m.statusCode
    };
  } catch (l) {
    return o(l), {
      result: {
        root: {
          error: l
        }
      },
      headers: new Headers(),
      status: 500
    };
  }
}
function Pt(e, t, r) {
  let n = t.get("Location");
  return r && (n = ot(n, r) || n), {
    redirect: n,
    status: e,
    revalidate: (
      // Technically X-Remix-Revalidate isn't needed here - that was an implementation
      // detail of ?_data requests as our way to tell the front end to revalidate when
      // we didn't have a response body to include that information in.
      // With single fetch, we tell the front end via this revalidate boolean field.
      // However, we're respecting it for now because it may be something folks have
      // used in their own responses
      // TODO(v3): Consider removing or making this official public API
      t.has("X-Remix-Revalidate") || t.has("Set-Cookie")
    ),
    reload: t.has("X-Remix-Reload-Document"),
    replace: t.has("X-Remix-Replace")
  };
}
function wi(e, t, r, n) {
  let a = new AbortController(), i = setTimeout(() => a.abort(new Error("Server Timeout")), typeof r == "number" ? r : 4950);
  return t.addEventListener("abort", () => clearTimeout(i)), Ja(e, {
    signal: a.signal,
    plugins: [(o) => {
      if (o instanceof Error) {
        let {
          name: s,
          message: l,
          stack: u
        } = n === at.Production ? Tt(o, n) : o;
        return ["SanitizedError", s, l, u];
      }
      if (o instanceof bt) {
        let {
          data: s,
          status: l,
          statusText: u
        } = o;
        return ["ErrorResponse", s, l, u];
      }
      if (o && typeof o == "object" && Rt in o)
        return ["SingleFetchRedirect", o[Rt]];
    }],
    postPlugins: [(o) => {
      if (o && typeof o == "object")
        return ["SingleFetchClassInstance", Object.fromEntries(Object.entries(o))];
    }, () => ["SingleFetchFallback"]]
  });
}
function bi(e, t) {
  return da(e, t);
}
export {
  Z as A,
  ui as B,
  pi as C,
  ua as D,
  bt as E,
  Pt as F,
  wi as G,
  Dt as H,
  at as I,
  ai as J,
  mi as K,
  la as L,
  Fa as M,
  gi as N,
  vi as O,
  pn as P,
  Qr as Q,
  li as R,
  Rt as S,
  ii as T,
  Sa as U,
  oi as V,
  bi as W,
  di as X,
  fi as Y,
  ci as Z,
  ri as a,
  Ne as b,
  ni as c,
  ye as d,
  gr as e,
  ra as f,
  ei as g,
  kn as h,
  B as i,
  nt as j,
  _e as k,
  yr as l,
  Ee as m,
  yi as n,
  da as o,
  Za as p,
  Gt as q,
  na as r,
  ot as s,
  qa as t,
  ti as u,
  si as v,
  Ke as w,
  Zr as x,
  hi as y,
  qt as z
};
