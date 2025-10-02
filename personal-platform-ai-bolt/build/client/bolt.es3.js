import { i as E, d as h, c as y, s as M, g, a as S, b as D, r as i, e as F, R as b, f as O, h as P, m as N, k, j as L } from "./components-6L62PiHE.js";
import { E as T, m as z, c as I, a as B, p as R } from "./single-fetch-DXQUw6pg.js";
/**
 * @remix-run/react v2.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function H(u) {
  if (!u) return null;
  let _ = Object.entries(u), n = {};
  for (let [a, e] of _)
    if (e && e.__type === "RouteErrorResponse")
      n[a] = new T(e.status, e.statusText, e.data, e.internal === !0);
    else if (e && e.__type === "Error") {
      if (e.__subType) {
        let o = window[e.__subType];
        if (typeof o == "function")
          try {
            let r = new o(e.message);
            r.stack = e.stack, n[a] = r;
          } catch {
          }
      }
      if (n[a] == null) {
        let o = new Error(e.message);
        o.stack = e.stack, n[a] = o;
      }
    } else
      n[a] = e;
  return n;
}
let s, t, c = !1, C;
new Promise((u) => {
  C = u;
}).catch(() => {
});
function j(u) {
  if (!t) {
    if (window.__remixContext.future.v3_singleFetch) {
      if (!s) {
        let d = window.__remixContext.stream;
        E(d, "No stream found for single fetch decoding"), window.__remixContext.stream = void 0, s = h(d, window).then((l) => {
          window.__remixContext.state = l.value, s.value = !0;
        }).catch((l) => {
          s.error = l;
        });
      }
      if (s.error)
        throw s.error;
      if (!s.value)
        throw s;
    }
    let o = y(window.__remixManifest.routes, window.__remixRouteModules, window.__remixContext.state, window.__remixContext.future, window.__remixContext.isSpaMode), r;
    if (!window.__remixContext.isSpaMode) {
      r = {
        ...window.__remixContext.state,
        loaderData: {
          ...window.__remixContext.state.loaderData
        }
      };
      let d = z(o, window.location, window.__remixContext.basename);
      if (d)
        for (let l of d) {
          let w = l.route.id, f = window.__remixRouteModules[w], m = window.__remixManifest.routes[w];
          f && M(m, f, window.__remixContext.isSpaMode) && (f.HydrateFallback || !m.hasLoader) ? r.loaderData[w] = void 0 : m && !m.hasLoader && (r.loaderData[w] = null);
        }
      r && r.errors && (r.errors = H(r.errors));
    }
    t = I({
      routes: o,
      history: B(),
      basename: window.__remixContext.basename,
      future: {
        v7_normalizeFormMethod: !0,
        v7_fetcherPersist: window.__remixContext.future.v3_fetcherPersist,
        v7_partialHydration: !0,
        v7_prependBasename: !0,
        v7_relativeSplatPath: window.__remixContext.future.v3_relativeSplatPath,
        // Single fetch enables this underlying behavior
        v7_skipActionErrorRevalidation: window.__remixContext.future.v3_singleFetch === !0
      },
      hydrationData: r,
      mapRouteProperties: N,
      dataStrategy: window.__remixContext.future.v3_singleFetch ? S(window.__remixManifest, window.__remixRouteModules, () => t) : void 0,
      patchRoutesOnNavigation: g(window.__remixManifest, window.__remixRouteModules, window.__remixContext.future, window.__remixContext.isSpaMode, window.__remixContext.basename)
    }), t.state.initialized && (c = !0, t.initialize()), t.createRoutesForHMR = D, window.__remixRouter = t, C && C(t);
  }
  let [_, n] = i.useState(R.env.NODE_ENV === "development" ? window.__remixContext.criticalCss : void 0);
  R.env.NODE_ENV === "development" && (window.__remixClearCriticalCss = () => n(void 0));
  let [a, e] = i.useState(t.state.location);
  return i.useLayoutEffect(() => {
    c || (c = !0, t.initialize());
  }, []), i.useLayoutEffect(() => t.subscribe((o) => {
    o.location !== a && e(o.location);
  }), [a]), F(t, window.__remixManifest, window.__remixRouteModules, window.__remixContext.future, window.__remixContext.isSpaMode), // This fragment is important to ensure we match the <RemixServer> JSX
  // structure so that useId values hydrate correctly
  /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(b.Provider, {
    value: {
      manifest: window.__remixManifest,
      routeModules: window.__remixRouteModules,
      future: window.__remixContext.future,
      criticalCss: _,
      isSpaMode: window.__remixContext.isSpaMode
    }
  }, /* @__PURE__ */ i.createElement(O, {
    location: a
  }, /* @__PURE__ */ i.createElement(P, {
    router: t,
    fallbackElement: null,
    future: {
      v7_startTransition: !0
    }
  }))), window.__remixContext.future.v3_singleFetch ? /* @__PURE__ */ i.createElement(i.Fragment, null) : null);
}
var p, x = k;
if (R.env.NODE_ENV === "production")
  x.createRoot, p = x.hydrateRoot;
else {
  var v = x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  p = function(u, _, n) {
    v.usingClientEntryPoint = !0;
    try {
      return x.hydrateRoot(u, _, n);
    } finally {
      v.usingClientEntryPoint = !1;
    }
  };
}
i.startTransition(() => {
  p(document.getElementById("root"), /* @__PURE__ */ L.jsx(j, {}));
});
