import { n as ss, o as us, p as cs, q as fs, r as Nt, _ as ds, k as ps, j as Tt, O as hs, S as vs, M as gs, L as ms } from "./components-6L62PiHE.js";
import { s as ys, u as as, t as is, l as Ss } from "./stripIndent-DDQ8P60l.js";
import { p as Ql } from "./single-fetch-DXQUw6pg.js";
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
let Kl = "positions";
function bs({
  getKey: ce,
  ...F
}) {
  let {
    isSpaMode: z
  } = ss(), Q = us(), h = cs();
  fs({
    getKey: ce,
    storageKey: Kl
  });
  let W = Nt.useMemo(
    () => {
      if (!ce) return null;
      let K = ce(Q, h);
      return K !== Q.key ? K : null;
    },
    // Nah, we only need this the first time for the SSR render
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  if (z)
    return null;
  let $e = ((K, k) => {
    if (!window.history.state || !window.history.state.key) {
      let T = Math.random().toString(32).slice(2);
      window.history.replaceState({
        key: T
      }, "");
    }
    try {
      let gt = JSON.parse(sessionStorage.getItem(K) || "{}")[k || window.history.state.key];
      typeof gt == "number" && window.scrollTo(0, gt);
    } catch (T) {
      console.error(T), sessionStorage.removeItem(K);
    }
  }).toString();
  return /* @__PURE__ */ Nt.createElement("script", ds({}, F, {
    suppressHydrationWarning: !0,
    dangerouslySetInnerHTML: {
      __html: `(${$e})(${JSON.stringify(Kl)}, ${JSON.stringify(W)})`
    }
  }));
}
const ql = "/tailwind-compat.css";
var bo = {};
/**
 * @license React
 * react-dom-server-legacy.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var es;
function ws() {
  if (es) return bo;
  es = 1;
  var ce = Nt;
  function F(a) {
    for (var u = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, p = 1; p < arguments.length; p++) u += "&args[]=" + encodeURIComponent(arguments[p]);
    return "Minified React error #" + a + "; visit " + u + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var z = Object.prototype.hasOwnProperty, Q = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, h = {}, W = {};
  function $e(a) {
    return z.call(W, a) ? !0 : z.call(h, a) ? !1 : Q.test(a) ? W[a] = !0 : (h[a] = !0, !1);
  }
  function K(a, u, p, g, w, y, C) {
    this.acceptsBooleans = u === 2 || u === 3 || u === 4, this.attributeName = g, this.attributeNamespace = w, this.mustUseProperty = p, this.propertyName = a, this.type = u, this.sanitizeURL = y, this.removeEmptyString = C;
  }
  var k = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
    k[a] = new K(a, 0, !1, a, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
    var u = a[0];
    k[u] = new K(u, 1, !1, a[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
    k[a] = new K(a, 2, !1, a.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
    k[a] = new K(a, 2, !1, a, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
    k[a] = new K(a, 3, !1, a.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(a) {
    k[a] = new K(a, 3, !0, a, null, !1, !1);
  }), ["capture", "download"].forEach(function(a) {
    k[a] = new K(a, 4, !1, a, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(a) {
    k[a] = new K(a, 6, !1, a, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(a) {
    k[a] = new K(a, 5, !1, a.toLowerCase(), null, !1, !1);
  });
  var T = /[\-:]([a-z])/g;
  function gt(a) {
    return a[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
    var u = a.replace(
      T,
      gt
    );
    k[u] = new K(u, 1, !1, a, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
    var u = a.replace(T, gt);
    k[u] = new K(u, 1, !1, a, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
    var u = a.replace(T, gt);
    k[u] = new K(u, 1, !1, a, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(a) {
    k[a] = new K(a, 1, !1, a.toLowerCase(), null, !1, !1);
  }), k.xlinkHref = new K("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(a) {
    k[a] = new K(a, 1, !1, a.toLowerCase(), null, !0, !0);
  });
  var _ = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, J = ["Webkit", "ms", "Moz", "O"];
  Object.keys(_).forEach(function(a) {
    J.forEach(function(u) {
      u = u + a.charAt(0).toUpperCase() + a.substring(1), _[u] = _[a];
    });
  });
  var nn = /["'&<>]/;
  function fe(a) {
    if (typeof a == "boolean" || typeof a == "number") return "" + a;
    a = "" + a;
    var u = nn.exec(a);
    if (u) {
      var p = "", g, w = 0;
      for (g = u.index; g < a.length; g++) {
        switch (a.charCodeAt(g)) {
          case 34:
            u = "&quot;";
            break;
          case 38:
            u = "&amp;";
            break;
          case 39:
            u = "&#x27;";
            break;
          case 60:
            u = "&lt;";
            break;
          case 62:
            u = "&gt;";
            break;
          default:
            continue;
        }
        w !== g && (p += a.substring(w, g)), w = g + 1, p += u;
      }
      a = w !== g ? p + a.substring(w, g) : p;
    }
    return a;
  }
  var Vt = /([A-Z])/g, O = /^ms-/, P = Array.isArray;
  function me(a, u) {
    return { insertionMode: a, selectedValue: u };
  }
  function Et(a, u, p) {
    switch (u) {
      case "select":
        return me(1, p.value != null ? p.value : p.defaultValue);
      case "svg":
        return me(2, null);
      case "math":
        return me(3, null);
      case "foreignObject":
        return me(1, null);
      case "table":
        return me(4, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return me(5, null);
      case "colgroup":
        return me(7, null);
      case "tr":
        return me(6, null);
    }
    return 4 <= a.insertionMode || a.insertionMode === 0 ? me(1, null) : a;
  }
  var Ae = /* @__PURE__ */ new Map();
  function ne(a, u, p) {
    if (typeof p != "object") throw Error(F(62));
    u = !0;
    for (var g in p) if (z.call(p, g)) {
      var w = p[g];
      if (w != null && typeof w != "boolean" && w !== "") {
        if (g.indexOf("--") === 0) {
          var y = fe(g);
          w = fe(("" + w).trim());
        } else {
          y = g;
          var C = Ae.get(y);
          C !== void 0 || (C = fe(y.replace(Vt, "-$1").toLowerCase().replace(O, "-ms-")), Ae.set(y, C)), y = C, w = typeof w == "number" ? w === 0 || z.call(_, g) ? "" + w : w + "px" : fe(("" + w).trim());
        }
        u ? (u = !1, a.push(' style="', y, ":", w)) : a.push(";", y, ":", w);
      }
    }
    u || a.push('"');
  }
  function se(a, u, p, g) {
    switch (p) {
      case "style":
        ne(a, u, g);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (!(2 < p.length) || p[0] !== "o" && p[0] !== "O" || p[1] !== "n" && p[1] !== "N") {
      if (u = k.hasOwnProperty(p) ? k[p] : null, u !== null) {
        switch (typeof g) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!u.acceptsBooleans) return;
        }
        switch (p = u.attributeName, u.type) {
          case 3:
            g && a.push(" ", p, '=""');
            break;
          case 4:
            g === !0 ? a.push(" ", p, '=""') : g !== !1 && a.push(" ", p, '="', fe(g), '"');
            break;
          case 5:
            isNaN(g) || a.push(" ", p, '="', fe(g), '"');
            break;
          case 6:
            !isNaN(g) && 1 <= g && a.push(" ", p, '="', fe(g), '"');
            break;
          default:
            u.sanitizeURL && (g = "" + g), a.push(" ", p, '="', fe(g), '"');
        }
      } else if ($e(p)) {
        switch (typeof g) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (u = p.toLowerCase().slice(0, 5), u !== "data-" && u !== "aria-") return;
        }
        a.push(" ", p, '="', fe(g), '"');
      }
    }
  }
  function X(a, u, p) {
    if (u != null) {
      if (p != null) throw Error(F(60));
      if (typeof u != "object" || !("__html" in u)) throw Error(F(61));
      u = u.__html, u != null && a.push("" + u);
    }
  }
  function rt(a) {
    var u = "";
    return ce.Children.forEach(a, function(p) {
      p != null && (u += p);
    }), u;
  }
  function ee(a, u, p, g) {
    a.push(xe(p));
    var w = p = null, y;
    for (y in u) if (z.call(u, y)) {
      var C = u[y];
      if (C != null) switch (y) {
        case "children":
          p = C;
          break;
        case "dangerouslySetInnerHTML":
          w = C;
          break;
        default:
          se(a, g, y, C);
      }
    }
    return a.push(">"), X(a, w, p), typeof p == "string" ? (a.push(fe(p)), null) : p;
  }
  var mt = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Ne = /* @__PURE__ */ new Map();
  function xe(a) {
    var u = Ne.get(a);
    if (u === void 0) {
      if (!mt.test(a)) throw Error(F(65, a));
      u = "<" + a, Ne.set(a, u);
    }
    return u;
  }
  function Rt(a, u, p, g, w) {
    switch (u) {
      case "select":
        a.push(xe("select"));
        var y = null, C = null;
        for (B in p) if (z.call(p, B)) {
          var D = p[B];
          if (D != null) switch (B) {
            case "children":
              y = D;
              break;
            case "dangerouslySetInnerHTML":
              C = D;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              se(a, g, B, D);
          }
        }
        return a.push(">"), X(a, C, y), y;
      case "option":
        C = w.selectedValue, a.push(xe("option"));
        var L = D = null, U = null, B = null;
        for (y in p) if (z.call(p, y)) {
          var V = p[y];
          if (V != null) switch (y) {
            case "children":
              D = V;
              break;
            case "selected":
              U = V;
              break;
            case "dangerouslySetInnerHTML":
              B = V;
              break;
            case "value":
              L = V;
            default:
              se(a, g, y, V);
          }
        }
        if (C != null) if (p = L !== null ? "" + L : rt(D), P(C)) {
          for (g = 0; g < C.length; g++)
            if ("" + C[g] === p) {
              a.push(' selected=""');
              break;
            }
        } else "" + C === p && a.push(' selected=""');
        else U && a.push(' selected=""');
        return a.push(">"), X(a, B, D), D;
      case "textarea":
        a.push(xe("textarea")), B = C = y = null;
        for (D in p) if (z.call(p, D) && (L = p[D], L != null)) switch (D) {
          case "children":
            B = L;
            break;
          case "value":
            y = L;
            break;
          case "defaultValue":
            C = L;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(F(91));
          default:
            se(
              a,
              g,
              D,
              L
            );
        }
        if (y === null && C !== null && (y = C), a.push(">"), B != null) {
          if (y != null) throw Error(F(92));
          if (P(B) && 1 < B.length) throw Error(F(93));
          y = "" + B;
        }
        return typeof y == "string" && y[0] === `
` && a.push(`
`), y !== null && a.push(fe("" + y)), null;
      case "input":
        a.push(xe("input")), L = B = D = y = null;
        for (C in p) if (z.call(p, C) && (U = p[C], U != null)) switch (C) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(F(399, "input"));
          case "defaultChecked":
            L = U;
            break;
          case "defaultValue":
            D = U;
            break;
          case "checked":
            B = U;
            break;
          case "value":
            y = U;
            break;
          default:
            se(a, g, C, U);
        }
        return B !== null ? se(a, g, "checked", B) : L !== null && se(a, g, "checked", L), y !== null ? se(a, g, "value", y) : D !== null && se(a, g, "value", D), a.push("/>"), null;
      case "menuitem":
        a.push(xe("menuitem"));
        for (var Pe in p) if (z.call(p, Pe) && (y = p[Pe], y != null)) switch (Pe) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(F(400));
          default:
            se(a, g, Pe, y);
        }
        return a.push(">"), null;
      case "title":
        a.push(xe("title")), y = null;
        for (V in p) if (z.call(p, V) && (C = p[V], C != null)) switch (V) {
          case "children":
            y = C;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(F(434));
          default:
            se(a, g, V, C);
        }
        return a.push(">"), y;
      case "listing":
      case "pre":
        a.push(xe(u)), C = y = null;
        for (L in p) if (z.call(p, L) && (D = p[L], D != null)) switch (L) {
          case "children":
            y = D;
            break;
          case "dangerouslySetInnerHTML":
            C = D;
            break;
          default:
            se(a, g, L, D);
        }
        if (a.push(">"), C != null) {
          if (y != null) throw Error(F(60));
          if (typeof C != "object" || !("__html" in C)) throw Error(F(61));
          p = C.__html, p != null && (typeof p == "string" && 0 < p.length && p[0] === `
` ? a.push(`
`, p) : a.push("" + p));
        }
        return typeof y == "string" && y[0] === `
` && a.push(`
`), y;
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "img":
      case "keygen":
      case "link":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
        a.push(xe(u));
        for (var Fe in p) if (z.call(p, Fe) && (y = p[Fe], y != null)) switch (Fe) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(F(399, u));
          default:
            se(a, g, Fe, y);
        }
        return a.push("/>"), null;
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return ee(
          a,
          p,
          u,
          g
        );
      case "html":
        return w.insertionMode === 0 && a.push("<!DOCTYPE html>"), ee(a, p, u, g);
      default:
        if (u.indexOf("-") === -1 && typeof p.is != "string") return ee(a, p, u, g);
        a.push(xe(u)), C = y = null;
        for (U in p) if (z.call(p, U) && (D = p[U], D != null)) switch (U) {
          case "children":
            y = D;
            break;
          case "dangerouslySetInnerHTML":
            C = D;
            break;
          case "style":
            ne(a, g, D);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            break;
          default:
            $e(U) && typeof D != "function" && typeof D != "symbol" && a.push(" ", U, '="', fe(D), '"');
        }
        return a.push(">"), X(a, C, y), y;
    }
  }
  function nt(a, u, p) {
    if (a.push('<!--$?--><template id="'), p === null) throw Error(F(395));
    return a.push(p), a.push('"></template>');
  }
  function Ir(a, u, p, g) {
    switch (p.insertionMode) {
      case 0:
      case 1:
        return a.push('<div hidden id="'), a.push(u.segmentPrefix), u = g.toString(16), a.push(u), a.push('">');
      case 2:
        return a.push('<svg aria-hidden="true" style="display:none" id="'), a.push(u.segmentPrefix), u = g.toString(16), a.push(u), a.push('">');
      case 3:
        return a.push('<math aria-hidden="true" style="display:none" id="'), a.push(u.segmentPrefix), u = g.toString(16), a.push(u), a.push('">');
      case 4:
        return a.push('<table hidden id="'), a.push(u.segmentPrefix), u = g.toString(16), a.push(u), a.push('">');
      case 5:
        return a.push('<table hidden><tbody id="'), a.push(u.segmentPrefix), u = g.toString(16), a.push(u), a.push('">');
      case 6:
        return a.push('<table hidden><tr id="'), a.push(u.segmentPrefix), u = g.toString(16), a.push(u), a.push('">');
      case 7:
        return a.push('<table hidden><colgroup id="'), a.push(u.segmentPrefix), u = g.toString(16), a.push(u), a.push('">');
      default:
        throw Error(F(397));
    }
  }
  function Pr(a, u) {
    switch (u.insertionMode) {
      case 0:
      case 1:
        return a.push("</div>");
      case 2:
        return a.push("</svg>");
      case 3:
        return a.push("</math>");
      case 4:
        return a.push("</table>");
      case 5:
        return a.push("</tbody></table>");
      case 6:
        return a.push("</tr></table>");
      case 7:
        return a.push("</colgroup></table>");
      default:
        throw Error(F(397));
    }
  }
  var Fr = /[<\u2028\u2029]/g;
  function ot(a) {
    return JSON.stringify(a).replace(Fr, function(u) {
      switch (u) {
        case "<":
          return "\\u003c";
        case "\u2028":
          return "\\u2028";
        case "\u2029":
          return "\\u2029";
        default:
          throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
      }
    });
  }
  function _e(a, u) {
    return u = u === void 0 ? "" : u, { bootstrapChunks: [], startInlineScript: "<script>", placeholderPrefix: u + "P:", segmentPrefix: u + "S:", boundaryPrefix: u + "B:", idPrefix: u, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1, generateStaticMarkup: a };
  }
  function sr(a, u, p, g) {
    return p.generateStaticMarkup ? (a.push(fe(u)), !1) : (u === "" ? a = g : (g && a.push("<!-- -->"), a.push(fe(u)), a = !0), a);
  }
  var ae = Object.assign, ie = Symbol.for("react.element"), ur = Symbol.for("react.portal"), It = Symbol.for("react.fragment"), de = Symbol.for("react.strict_mode"), ue = Symbol.for("react.profiler"), Yt = Symbol.for("react.provider"), Gt = Symbol.for("react.context"), Me = Symbol.for("react.forward_ref"), yt = Symbol.for("react.suspense"), ke = Symbol.for("react.suspense_list"), cr = Symbol.for("react.memo"), ye = Symbol.for("react.lazy"), Ce = Symbol.for("react.scope"), fr = Symbol.for("react.debug_trace_mode"), Xt = Symbol.for("react.legacy_hidden"), on = Symbol.for("react.default_value"), Ve = Symbol.iterator;
  function Zt(a) {
    if (a == null) return null;
    if (typeof a == "function") return a.displayName || a.name || null;
    if (typeof a == "string") return a;
    switch (a) {
      case It:
        return "Fragment";
      case ur:
        return "Portal";
      case ue:
        return "Profiler";
      case de:
        return "StrictMode";
      case yt:
        return "Suspense";
      case ke:
        return "SuspenseList";
    }
    if (typeof a == "object") switch (a.$$typeof) {
      case Gt:
        return (a.displayName || "Context") + ".Consumer";
      case Yt:
        return (a._context.displayName || "Context") + ".Provider";
      case Me:
        var u = a.render;
        return a = a.displayName, a || (a = u.displayName || u.name || "", a = a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef"), a;
      case cr:
        return u = a.displayName || null, u !== null ? u : Zt(a.type) || "Memo";
      case ye:
        u = a._payload, a = a._init;
        try {
          return Zt(a(u));
        } catch {
        }
    }
    return null;
  }
  var Jt = {};
  function an(a, u) {
    if (a = a.contextTypes, !a) return Jt;
    var p = {}, g;
    for (g in a) p[g] = u[g];
    return p;
  }
  var Ye = null;
  function we(a, u) {
    if (a !== u) {
      a.context._currentValue2 = a.parentValue, a = a.parent;
      var p = u.parent;
      if (a === null) {
        if (p !== null) throw Error(F(401));
      } else {
        if (p === null) throw Error(F(401));
        we(a, p);
      }
      u.context._currentValue2 = u.value;
    }
  }
  function ge(a) {
    a.context._currentValue2 = a.parentValue, a = a.parent, a !== null && ge(a);
  }
  function Dr(a) {
    var u = a.parent;
    u !== null && Dr(u), a.context._currentValue2 = a.value;
  }
  function Ar(a, u) {
    if (a.context._currentValue2 = a.parentValue, a = a.parent, a === null) throw Error(F(402));
    a.depth === u.depth ? we(a, u) : Ar(a, u);
  }
  function _r(a, u) {
    var p = u.parent;
    if (p === null) throw Error(F(402));
    a.depth === p.depth ? we(a, p) : _r(a, p), u.context._currentValue2 = u.value;
  }
  function pe(a) {
    var u = Ye;
    u !== a && (u === null ? Dr(a) : a === null ? ge(u) : u.depth === a.depth ? we(u, a) : u.depth > a.depth ? Ar(u, a) : _r(u, a), Ye = a);
  }
  var Mr = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(a, u) {
    a = a._reactInternals, a.queue !== null && a.queue.push(u);
  }, enqueueReplaceState: function(a, u) {
    a = a._reactInternals, a.replace = !0, a.queue = [u];
  }, enqueueForceUpdate: function() {
  } };
  function ln(a, u, p, g) {
    var w = a.state !== void 0 ? a.state : null;
    a.updater = Mr, a.props = p, a.state = w;
    var y = { queue: [], replace: !1 };
    a._reactInternals = y;
    var C = u.contextType;
    if (a.context = typeof C == "object" && C !== null ? C._currentValue2 : g, C = u.getDerivedStateFromProps, typeof C == "function" && (C = C(p, w), w = C == null ? w : ae({}, w, C), a.state = w), typeof u.getDerivedStateFromProps != "function" && typeof a.getSnapshotBeforeUpdate != "function" && (typeof a.UNSAFE_componentWillMount == "function" || typeof a.componentWillMount == "function")) if (u = a.state, typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(), u !== a.state && Mr.enqueueReplaceState(a, a.state, null), y.queue !== null && 0 < y.queue.length) if (u = y.queue, C = y.replace, y.queue = null, y.replace = !1, C && u.length === 1) a.state = u[0];
    else {
      for (y = C ? u[0] : a.state, w = !0, C = C ? 1 : 0; C < u.length; C++) {
        var D = u[C];
        D = typeof D == "function" ? D.call(a, y, p, g) : D, D != null && (w ? (w = !1, y = ae({}, y, D)) : ae(y, D));
      }
      a.state = y;
    }
    else y.queue = null;
  }
  var sn = { id: 1, overflow: "" };
  function Or(a, u, p) {
    var g = a.id;
    a = a.overflow;
    var w = 32 - dr(g) - 1;
    g &= ~(1 << w), p += 1;
    var y = 32 - dr(u) + w;
    if (30 < y) {
      var C = w - w % 5;
      return y = (g & (1 << C) - 1).toString(32), g >>= C, w -= C, { id: 1 << 32 - dr(u) + w | p << w | g, overflow: y + a };
    }
    return { id: 1 << y | p << w | g, overflow: a };
  }
  var dr = Math.clz32 ? Math.clz32 : Pt, Un = Math.log, Lr = Math.LN2;
  function Pt(a) {
    return a >>>= 0, a === 0 ? 32 : 31 - (Un(a) / Lr | 0) | 0;
  }
  function Br(a, u) {
    return a === u && (a !== 0 || 1 / a === 1 / u) || a !== a && u !== u;
  }
  var un = typeof Object.is == "function" ? Object.is : Br, Ee = null, at = null, Ft = null, Z = null, Dt = !1, pr = !1, Qt = 0, it = null, hr = 0;
  function St() {
    if (Ee === null) throw Error(F(321));
    return Ee;
  }
  function Se() {
    if (0 < hr) throw Error(F(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function Ur() {
    return Z === null ? Ft === null ? (Dt = !1, Ft = Z = Se()) : (Dt = !0, Z = Ft) : Z.next === null ? (Dt = !1, Z = Z.next = Se()) : (Dt = !0, Z = Z.next), Z;
  }
  function Hr() {
    at = Ee = null, pr = !1, Ft = null, hr = 0, Z = it = null;
  }
  function cn(a, u) {
    return typeof u == "function" ? u(a) : u;
  }
  function he(a, u, p) {
    if (Ee = St(), Z = Ur(), Dt) {
      var g = Z.queue;
      if (u = g.dispatch, it !== null && (p = it.get(g), p !== void 0)) {
        it.delete(g), g = Z.memoizedState;
        do
          g = a(g, p.action), p = p.next;
        while (p !== null);
        return Z.memoizedState = g, [g, u];
      }
      return [Z.memoizedState, u];
    }
    return a = a === cn ? typeof u == "function" ? u() : u : p !== void 0 ? p(u) : u, Z.memoizedState = a, a = Z.queue = { last: null, dispatch: null }, a = a.dispatch = Hn.bind(null, Ee, a), [Z.memoizedState, a];
  }
  function jr(a, u) {
    if (Ee = St(), Z = Ur(), u = u === void 0 ? null : u, Z !== null) {
      var p = Z.memoizedState;
      if (p !== null && u !== null) {
        var g = p[1];
        e: if (g === null) g = !1;
        else {
          for (var w = 0; w < g.length && w < u.length; w++) if (!un(u[w], g[w])) {
            g = !1;
            break e;
          }
          g = !0;
        }
        if (g) return p[0];
      }
    }
    return a = a(), Z.memoizedState = [a, u], a;
  }
  function Hn(a, u, p) {
    if (25 <= hr) throw Error(F(301));
    if (a === Ee) if (pr = !0, a = { action: p, next: null }, it === null && (it = /* @__PURE__ */ new Map()), p = it.get(u), p === void 0) it.set(u, a);
    else {
      for (u = p; u.next !== null; ) u = u.next;
      u.next = a;
    }
  }
  function jn() {
    throw Error(F(394));
  }
  function lt() {
  }
  var zr = { readContext: function(a) {
    return a._currentValue2;
  }, useContext: function(a) {
    return St(), a._currentValue2;
  }, useMemo: jr, useReducer: he, useRef: function(a) {
    Ee = St(), Z = Ur();
    var u = Z.memoizedState;
    return u === null ? (a = { current: a }, Z.memoizedState = a) : u;
  }, useState: function(a) {
    return he(cn, a);
  }, useInsertionEffect: lt, useLayoutEffect: function() {
  }, useCallback: function(a, u) {
    return jr(function() {
      return a;
    }, u);
  }, useImperativeHandle: lt, useEffect: lt, useDebugValue: lt, useDeferredValue: function(a) {
    return St(), a;
  }, useTransition: function() {
    return St(), [
      !1,
      jn
    ];
  }, useId: function() {
    var a = at.treeContext, u = a.overflow;
    a = a.id, a = (a & ~(1 << 32 - dr(a) - 1)).toString(32) + u;
    var p = vr;
    if (p === null) throw Error(F(404));
    return u = Qt++, a = ":" + p.idPrefix + "R" + a, 0 < u && (a += "H" + u.toString(32)), a + ":";
  }, useMutableSource: function(a, u) {
    return St(), u(a._source);
  }, useSyncExternalStore: function(a, u, p) {
    if (p === void 0) throw Error(F(407));
    return p();
  } }, vr = null, At = ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function Oe(a) {
    return console.error(a), null;
  }
  function st() {
  }
  function gr(a, u, p, g, w, y, C, D, L) {
    var U = [], B = /* @__PURE__ */ new Set();
    return u = { destination: null, responseState: u, progressiveChunkSize: g === void 0 ? 12800 : g, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: B, pingedTasks: U, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: w === void 0 ? Oe : w, onAllReady: st, onShellReady: C === void 0 ? st : C, onShellError: st, onFatalError: st }, p = Mt(u, 0, null, p, !1, !1), p.parentFlushed = !0, a = _t(u, a, null, p, B, Jt, null, sn), U.push(a), u;
  }
  function _t(a, u, p, g, w, y, C, D) {
    a.allPendingTasks++, p === null ? a.pendingRootTasks++ : p.pendingTasks++;
    var L = { node: u, ping: function() {
      var U = a.pingedTasks;
      U.push(L), U.length === 1 && Re(a);
    }, blockedBoundary: p, blockedSegment: g, abortSet: w, legacyContext: y, context: C, treeContext: D };
    return w.add(L), L;
  }
  function Mt(a, u, p, g, w, y) {
    return { status: 0, id: -1, index: u, parentFlushed: !1, chunks: [], children: [], formatContext: g, boundary: p, lastPushedText: w, textEmbedded: y };
  }
  function ut(a, u) {
    if (a = a.onError(u), a != null && typeof a != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof a + '" instead');
    return a;
  }
  function Ot(a, u) {
    var p = a.onShellError;
    p(u), p = a.onFatalError, p(u), a.destination !== null ? (a.status = 2, a.destination.destroy(u)) : (a.status = 1, a.fatalError = u);
  }
  function Le(a, u, p, g, w) {
    for (Ee = {}, at = u, Qt = 0, a = p(g, w); pr; ) pr = !1, Qt = 0, hr += 1, Z = null, a = p(g, w);
    return Hr(), a;
  }
  function fn(a, u, p, g) {
    var w = p.render(), y = g.childContextTypes;
    if (y != null) {
      var C = u.legacyContext;
      if (typeof p.getChildContext != "function") g = C;
      else {
        p = p.getChildContext();
        for (var D in p) if (!(D in y)) throw Error(F(108, Zt(g) || "Unknown", D));
        g = ae({}, C, p);
      }
      u.legacyContext = g, ve(a, u, w), u.legacyContext = C;
    } else ve(a, u, w);
  }
  function dn(a, u) {
    if (a && a.defaultProps) {
      u = ae({}, u), a = a.defaultProps;
      for (var p in a) u[p] === void 0 && (u[p] = a[p]);
      return u;
    }
    return u;
  }
  function bt(a, u, p, g, w) {
    if (typeof p == "function") if (p.prototype && p.prototype.isReactComponent) {
      w = an(p, u.legacyContext);
      var y = p.contextType;
      y = new p(g, typeof y == "object" && y !== null ? y._currentValue2 : w), ln(y, p, g, w), fn(a, u, y, p);
    } else {
      y = an(p, u.legacyContext), w = Le(a, u, p, g, y);
      var C = Qt !== 0;
      if (typeof w == "object" && w !== null && typeof w.render == "function" && w.$$typeof === void 0) ln(w, p, g, y), fn(a, u, w, p);
      else if (C) {
        g = u.treeContext, u.treeContext = Or(g, 1, 0);
        try {
          ve(a, u, w);
        } finally {
          u.treeContext = g;
        }
      } else ve(a, u, w);
    }
    else if (typeof p == "string") {
      switch (w = u.blockedSegment, y = Rt(w.chunks, p, g, a.responseState, w.formatContext), w.lastPushedText = !1, C = w.formatContext, w.formatContext = Et(C, p, g), ft(a, u, y), w.formatContext = C, p) {
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "input":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          break;
        default:
          w.chunks.push("</", p, ">");
      }
      w.lastPushedText = !1;
    } else {
      switch (p) {
        case Xt:
        case fr:
        case de:
        case ue:
        case It:
          ve(a, u, g.children);
          return;
        case ke:
          ve(a, u, g.children);
          return;
        case Ce:
          throw Error(F(343));
        case yt:
          e: {
            p = u.blockedBoundary, w = u.blockedSegment, y = g.fallback, g = g.children, C = /* @__PURE__ */ new Set();
            var D = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: C, errorDigest: null }, L = Mt(a, w.chunks.length, D, w.formatContext, !1, !1);
            w.children.push(L), w.lastPushedText = !1;
            var U = Mt(a, 0, null, w.formatContext, !1, !1);
            U.parentFlushed = !0, u.blockedBoundary = D, u.blockedSegment = U;
            try {
              if (ft(
                a,
                u,
                g
              ), a.responseState.generateStaticMarkup || U.lastPushedText && U.textEmbedded && U.chunks.push("<!-- -->"), U.status = 1, Ge(D, U), D.pendingTasks === 0) break e;
            } catch (B) {
              U.status = 4, D.forceClientRender = !0, D.errorDigest = ut(a, B);
            } finally {
              u.blockedBoundary = p, u.blockedSegment = w;
            }
            u = _t(a, y, p, L, C, u.legacyContext, u.context, u.treeContext), a.pingedTasks.push(u);
          }
          return;
      }
      if (typeof p == "object" && p !== null) switch (p.$$typeof) {
        case Me:
          if (g = Le(a, u, p.render, g, w), Qt !== 0) {
            p = u.treeContext, u.treeContext = Or(p, 1, 0);
            try {
              ve(a, u, g);
            } finally {
              u.treeContext = p;
            }
          } else ve(a, u, g);
          return;
        case cr:
          p = p.type, g = dn(p, g), bt(a, u, p, g, w);
          return;
        case Yt:
          if (w = g.children, p = p._context, g = g.value, y = p._currentValue2, p._currentValue2 = g, C = Ye, Ye = g = { parent: C, depth: C === null ? 0 : C.depth + 1, context: p, parentValue: y, value: g }, u.context = g, ve(a, u, w), a = Ye, a === null) throw Error(F(403));
          g = a.parentValue, a.context._currentValue2 = g === on ? a.context._defaultValue : g, a = Ye = a.parent, u.context = a;
          return;
        case Gt:
          g = g.children, g = g(p._currentValue2), ve(a, u, g);
          return;
        case ye:
          w = p._init, p = w(p._payload), g = dn(p, g), bt(
            a,
            u,
            p,
            g,
            void 0
          );
          return;
      }
      throw Error(F(130, p == null ? p : typeof p, ""));
    }
  }
  function ve(a, u, p) {
    if (u.node = p, typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case ie:
          bt(a, u, p.type, p.props, p.ref);
          return;
        case ur:
          throw Error(F(257));
        case ye:
          var g = p._init;
          p = g(p._payload), ve(a, u, p);
          return;
      }
      if (P(p)) {
        ct(a, u, p);
        return;
      }
      if (p === null || typeof p != "object" ? g = null : (g = Ve && p[Ve] || p["@@iterator"], g = typeof g == "function" ? g : null), g && (g = g.call(p))) {
        if (p = g.next(), !p.done) {
          var w = [];
          do
            w.push(p.value), p = g.next();
          while (!p.done);
          ct(a, u, w);
        }
        return;
      }
      throw a = Object.prototype.toString.call(p), Error(F(31, a === "[object Object]" ? "object with keys {" + Object.keys(p).join(", ") + "}" : a));
    }
    typeof p == "string" ? (g = u.blockedSegment, g.lastPushedText = sr(u.blockedSegment.chunks, p, a.responseState, g.lastPushedText)) : typeof p == "number" && (g = u.blockedSegment, g.lastPushedText = sr(u.blockedSegment.chunks, "" + p, a.responseState, g.lastPushedText));
  }
  function ct(a, u, p) {
    for (var g = p.length, w = 0; w < g; w++) {
      var y = u.treeContext;
      u.treeContext = Or(y, g, w);
      try {
        ft(a, u, p[w]);
      } finally {
        u.treeContext = y;
      }
    }
  }
  function ft(a, u, p) {
    var g = u.blockedSegment.formatContext, w = u.legacyContext, y = u.context;
    try {
      return ve(a, u, p);
    } catch (L) {
      if (Hr(), typeof L == "object" && L !== null && typeof L.then == "function") {
        p = L;
        var C = u.blockedSegment, D = Mt(a, C.chunks.length, null, C.formatContext, C.lastPushedText, !0);
        C.children.push(D), C.lastPushedText = !1, a = _t(a, u.node, u.blockedBoundary, D, u.abortSet, u.legacyContext, u.context, u.treeContext).ping, p.then(a, a), u.blockedSegment.formatContext = g, u.legacyContext = w, u.context = y, pe(y);
      } else throw u.blockedSegment.formatContext = g, u.legacyContext = w, u.context = y, pe(y), L;
    }
  }
  function Lt(a) {
    var u = a.blockedBoundary;
    a = a.blockedSegment, a.status = 3, dt(this, u, a);
  }
  function mr(a, u, p) {
    var g = a.blockedBoundary;
    a.blockedSegment.status = 3, g === null ? (u.allPendingTasks--, u.status !== 2 && (u.status = 2, u.destination !== null && u.destination.push(null))) : (g.pendingTasks--, g.forceClientRender || (g.forceClientRender = !0, a = p === void 0 ? Error(F(432)) : p, g.errorDigest = u.onError(a), g.parentFlushed && u.clientRenderedBoundaries.push(g)), g.fallbackAbortableTasks.forEach(function(w) {
      return mr(w, u, p);
    }), g.fallbackAbortableTasks.clear(), u.allPendingTasks--, u.allPendingTasks === 0 && (g = u.onAllReady, g()));
  }
  function Ge(a, u) {
    if (u.chunks.length === 0 && u.children.length === 1 && u.children[0].boundary === null) {
      var p = u.children[0];
      p.id = u.id, p.parentFlushed = !0, p.status === 1 && Ge(a, p);
    } else a.completedSegments.push(u);
  }
  function dt(a, u, p) {
    if (u === null) {
      if (p.parentFlushed) {
        if (a.completedRootSegment !== null) throw Error(F(389));
        a.completedRootSegment = p;
      }
      a.pendingRootTasks--, a.pendingRootTasks === 0 && (a.onShellError = st, u = a.onShellReady, u());
    } else u.pendingTasks--, u.forceClientRender || (u.pendingTasks === 0 ? (p.parentFlushed && p.status === 1 && Ge(u, p), u.parentFlushed && a.completedBoundaries.push(u), u.fallbackAbortableTasks.forEach(Lt, a), u.fallbackAbortableTasks.clear()) : p.parentFlushed && p.status === 1 && (Ge(u, p), u.completedSegments.length === 1 && u.parentFlushed && a.partialBoundaries.push(u)));
    a.allPendingTasks--, a.allPendingTasks === 0 && (a = a.onAllReady, a());
  }
  function Re(a) {
    if (a.status !== 2) {
      var u = Ye, p = At.current;
      At.current = zr;
      var g = vr;
      vr = a.responseState;
      try {
        var w = a.pingedTasks, y;
        for (y = 0; y < w.length; y++) {
          var C = w[y], D = a, L = C.blockedSegment;
          if (L.status === 0) {
            pe(C.context);
            try {
              ve(D, C, C.node), D.responseState.generateStaticMarkup || L.lastPushedText && L.textEmbedded && L.chunks.push("<!-- -->"), C.abortSet.delete(C), L.status = 1, dt(D, C.blockedBoundary, L);
            } catch (De) {
              if (Hr(), typeof De == "object" && De !== null && typeof De.then == "function") {
                var U = C.ping;
                De.then(U, U);
              } else {
                C.abortSet.delete(C), L.status = 4;
                var B = C.blockedBoundary, V = De, Pe = ut(D, V);
                if (B === null ? Ot(D, V) : (B.pendingTasks--, B.forceClientRender || (B.forceClientRender = !0, B.errorDigest = Pe, B.parentFlushed && D.clientRenderedBoundaries.push(B))), D.allPendingTasks--, D.allPendingTasks === 0) {
                  var Fe = D.onAllReady;
                  Fe();
                }
              }
            } finally {
            }
          }
        }
        w.splice(0, y), a.destination !== null && Ie(a, a.destination);
      } catch (De) {
        ut(a, De), Ot(a, De);
      } finally {
        vr = g, At.current = p, p === zr && pe(u);
      }
    }
  }
  function Bt(a, u, p) {
    switch (p.parentFlushed = !0, p.status) {
      case 0:
        var g = p.id = a.nextSegmentId++;
        return p.lastPushedText = !1, p.textEmbedded = !1, a = a.responseState, u.push('<template id="'), u.push(a.placeholderPrefix), a = g.toString(16), u.push(a), u.push('"></template>');
      case 1:
        p.status = 2;
        var w = !0;
        g = p.chunks;
        var y = 0;
        p = p.children;
        for (var C = 0; C < p.length; C++) {
          for (w = p[C]; y < w.index; y++) u.push(g[y]);
          w = Kt(a, u, w);
        }
        for (; y < g.length - 1; y++) u.push(g[y]);
        return y < g.length && (w = u.push(g[y])), w;
      default:
        throw Error(F(390));
    }
  }
  function Kt(a, u, p) {
    var g = p.boundary;
    if (g === null) return Bt(a, u, p);
    if (g.parentFlushed = !0, g.forceClientRender) return a.responseState.generateStaticMarkup || (g = g.errorDigest, u.push("<!--$!-->"), u.push("<template"), g && (u.push(' data-dgst="'), g = fe(g), u.push(g), u.push('"')), u.push("></template>")), Bt(a, u, p), a = a.responseState.generateStaticMarkup ? !0 : u.push("<!--/$-->"), a;
    if (0 < g.pendingTasks) {
      g.rootSegmentID = a.nextSegmentId++, 0 < g.completedSegments.length && a.partialBoundaries.push(g);
      var w = a.responseState, y = w.nextSuspenseID++;
      return w = w.boundaryPrefix + y.toString(16), g = g.id = w, nt(u, a.responseState, g), Bt(a, u, p), u.push("<!--/$-->");
    }
    if (g.byteSize > a.progressiveChunkSize) return g.rootSegmentID = a.nextSegmentId++, a.completedBoundaries.push(g), nt(u, a.responseState, g.id), Bt(a, u, p), u.push("<!--/$-->");
    if (a.responseState.generateStaticMarkup || u.push("<!--$-->"), p = g.completedSegments, p.length !== 1) throw Error(F(391));
    return Kt(a, u, p[0]), a = a.responseState.generateStaticMarkup ? !0 : u.push("<!--/$-->"), a;
  }
  function yr(a, u, p) {
    return Ir(u, a.responseState, p.formatContext, p.id), Kt(a, u, p), Pr(u, p.formatContext);
  }
  function ze(a, u, p) {
    for (var g = p.completedSegments, w = 0; w < g.length; w++) pt(a, u, p, g[w]);
    if (g.length = 0, a = a.responseState, g = p.id, p = p.rootSegmentID, u.push(a.startInlineScript), a.sentCompleteBoundaryFunction ? u.push('$RC("') : (a.sentCompleteBoundaryFunction = !0, u.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("')), g === null) throw Error(F(395));
    return p = p.toString(16), u.push(g), u.push('","'), u.push(a.segmentPrefix), u.push(p), u.push('")<\/script>');
  }
  function pt(a, u, p, g) {
    if (g.status === 2) return !0;
    var w = g.id;
    if (w === -1) {
      if ((g.id = p.rootSegmentID) === -1) throw Error(F(392));
      return yr(a, u, g);
    }
    return yr(a, u, g), a = a.responseState, u.push(a.startInlineScript), a.sentCompleteSegmentFunction ? u.push('$RS("') : (a.sentCompleteSegmentFunction = !0, u.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("')), u.push(a.segmentPrefix), w = w.toString(16), u.push(w), u.push('","'), u.push(a.placeholderPrefix), u.push(w), u.push('")<\/script>');
  }
  function Ie(a, u) {
    try {
      var p = a.completedRootSegment;
      if (p !== null && a.pendingRootTasks === 0) {
        Kt(a, u, p), a.completedRootSegment = null;
        var g = a.responseState.bootstrapChunks;
        for (p = 0; p < g.length - 1; p++) u.push(g[p]);
        p < g.length && u.push(g[p]);
      }
      var w = a.clientRenderedBoundaries, y;
      for (y = 0; y < w.length; y++) {
        var C = w[y];
        g = u;
        var D = a.responseState, L = C.id, U = C.errorDigest, B = C.errorMessage, V = C.errorComponentStack;
        if (g.push(D.startInlineScript), D.sentClientRenderFunction ? g.push('$RX("') : (D.sentClientRenderFunction = !0, g.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("')), L === null) throw Error(F(395));
        if (g.push(L), g.push('"'), U || B || V) {
          g.push(",");
          var Pe = ot(U || "");
          g.push(Pe);
        }
        if (B || V) {
          g.push(",");
          var Fe = ot(B || "");
          g.push(Fe);
        }
        if (V) {
          g.push(",");
          var De = ot(V);
          g.push(De);
        }
        if (!g.push(")<\/script>")) {
          a.destination = null, y++, w.splice(0, y);
          return;
        }
      }
      w.splice(0, y);
      var Ut = a.completedBoundaries;
      for (y = 0; y < Ut.length; y++) if (!ze(a, u, Ut[y])) {
        a.destination = null, y++, Ut.splice(0, y);
        return;
      }
      Ut.splice(0, y);
      var ht = a.partialBoundaries;
      for (y = 0; y < ht.length; y++) {
        var br = ht[y];
        e: {
          w = a, C = u;
          var Ht = br.completedSegments;
          for (D = 0; D < Ht.length; D++) if (!pt(w, C, br, Ht[D])) {
            D++, Ht.splice(0, D);
            var qt = !1;
            break e;
          }
          Ht.splice(0, D), qt = !0;
        }
        if (!qt) {
          a.destination = null, y++, ht.splice(0, y);
          return;
        }
      }
      ht.splice(0, y);
      var wt = a.completedBoundaries;
      for (y = 0; y < wt.length; y++) if (!ze(a, u, wt[y])) {
        a.destination = null, y++, wt.splice(0, y);
        return;
      }
      wt.splice(0, y);
    } finally {
      a.allPendingTasks === 0 && a.pingedTasks.length === 0 && a.clientRenderedBoundaries.length === 0 && a.completedBoundaries.length === 0 && u.push(null);
    }
  }
  function Sr(a, u) {
    try {
      var p = a.abortableTasks;
      p.forEach(function(g) {
        return mr(g, a, u);
      }), p.clear(), a.destination !== null && Ie(a, a.destination);
    } catch (g) {
      ut(a, g), Ot(a, g);
    }
  }
  function be() {
  }
  function Be(a, u, p, g) {
    var w = !1, y = null, C = "", D = { push: function(U) {
      return U !== null && (C += U), !0;
    }, destroy: function(U) {
      w = !0, y = U;
    } }, L = !1;
    if (a = gr(a, _e(p, u ? u.identifierPrefix : void 0), { insertionMode: 1, selectedValue: null }, 1 / 0, be, void 0, function() {
      L = !0;
    }), Re(a), Sr(a, g), a.status === 1) a.status = 2, D.destroy(a.fatalError);
    else if (a.status !== 2 && a.destination === null) {
      a.destination = D;
      try {
        Ie(a, D);
      } catch (U) {
        ut(a, U), Ot(a, U);
      }
    }
    if (w) throw y;
    if (!L) throw Error(F(426));
    return C;
  }
  return bo.renderToNodeStream = function() {
    throw Error(F(207));
  }, bo.renderToStaticMarkup = function(a, u) {
    return Be(a, u, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, bo.renderToStaticNodeStream = function() {
    throw Error(F(208));
  }, bo.renderToString = function(a, u) {
    return Be(a, u, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, bo.version = "18.3.1", bo;
}
var Ki = {};
/**
 * @license React
 * react-dom-server.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ts;
function xs() {
  if (ts) return Ki;
  ts = 1;
  var ce = Nt;
  function F(i) {
    for (var s = "https://reactjs.org/docs/error-decoder.html?invariant=" + i, f = 1; f < arguments.length; f++) s += "&args[]=" + encodeURIComponent(arguments[f]);
    return "Minified React error #" + i + "; visit " + s + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var z = null, Q = 0;
  function h(i, s) {
    if (s.length !== 0) if (512 < s.length) 0 < Q && (i.enqueue(new Uint8Array(z.buffer, 0, Q)), z = new Uint8Array(512), Q = 0), i.enqueue(s);
    else {
      var f = z.length - Q;
      f < s.length && (f === 0 ? i.enqueue(z) : (z.set(s.subarray(0, f), Q), i.enqueue(z), s = s.subarray(f)), z = new Uint8Array(512), Q = 0), z.set(s, Q), Q += s.length;
    }
  }
  function W(i, s) {
    return h(i, s), !0;
  }
  function $e(i) {
    z && 0 < Q && (i.enqueue(new Uint8Array(z.buffer, 0, Q)), z = null, Q = 0);
  }
  var K = new TextEncoder();
  function k(i) {
    return K.encode(i);
  }
  function T(i) {
    return K.encode(i);
  }
  function gt(i, s) {
    typeof i.error == "function" ? i.error(s) : i.close();
  }
  var _ = Object.prototype.hasOwnProperty, J = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, nn = {}, fe = {};
  function Vt(i) {
    return _.call(fe, i) ? !0 : _.call(nn, i) ? !1 : J.test(i) ? fe[i] = !0 : (nn[i] = !0, !1);
  }
  function O(i, s, f, v, x, b, E) {
    this.acceptsBooleans = s === 2 || s === 3 || s === 4, this.attributeName = v, this.attributeNamespace = x, this.mustUseProperty = f, this.propertyName = i, this.type = s, this.sanitizeURL = b, this.removeEmptyString = E;
  }
  var P = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i) {
    P[i] = new O(i, 0, !1, i, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(i) {
    var s = i[0];
    P[s] = new O(s, 1, !1, i[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(i) {
    P[i] = new O(i, 2, !1, i.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(i) {
    P[i] = new O(i, 2, !1, i, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i) {
    P[i] = new O(i, 3, !1, i.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(i) {
    P[i] = new O(i, 3, !0, i, null, !1, !1);
  }), ["capture", "download"].forEach(function(i) {
    P[i] = new O(i, 4, !1, i, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(i) {
    P[i] = new O(i, 6, !1, i, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(i) {
    P[i] = new O(i, 5, !1, i.toLowerCase(), null, !1, !1);
  });
  var me = /[\-:]([a-z])/g;
  function Et(i) {
    return i[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i) {
    var s = i.replace(
      me,
      Et
    );
    P[s] = new O(s, 1, !1, i, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i) {
    var s = i.replace(me, Et);
    P[s] = new O(s, 1, !1, i, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(i) {
    var s = i.replace(me, Et);
    P[s] = new O(s, 1, !1, i, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(i) {
    P[i] = new O(i, 1, !1, i.toLowerCase(), null, !1, !1);
  }), P.xlinkHref = new O("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(i) {
    P[i] = new O(i, 1, !1, i.toLowerCase(), null, !0, !0);
  });
  var Ae = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, ne = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Ae).forEach(function(i) {
    ne.forEach(function(s) {
      s = s + i.charAt(0).toUpperCase() + i.substring(1), Ae[s] = Ae[i];
    });
  });
  var se = /["'&<>]/;
  function X(i) {
    if (typeof i == "boolean" || typeof i == "number") return "" + i;
    i = "" + i;
    var s = se.exec(i);
    if (s) {
      var f = "", v, x = 0;
      for (v = s.index; v < i.length; v++) {
        switch (i.charCodeAt(v)) {
          case 34:
            s = "&quot;";
            break;
          case 38:
            s = "&amp;";
            break;
          case 39:
            s = "&#x27;";
            break;
          case 60:
            s = "&lt;";
            break;
          case 62:
            s = "&gt;";
            break;
          default:
            continue;
        }
        x !== v && (f += i.substring(x, v)), x = v + 1, f += s;
      }
      i = x !== v ? f + i.substring(x, v) : f;
    }
    return i;
  }
  var rt = /([A-Z])/g, ee = /^ms-/, mt = Array.isArray, Ne = T("<script>"), xe = T("<\/script>"), Rt = T('<script src="'), nt = T('<script type="module" src="'), Ir = T('" async=""><\/script>'), Pr = /(<\/|<)(s)(cript)/gi;
  function Fr(i, s, f, v) {
    return "" + s + (f === "s" ? "\\u0073" : "\\u0053") + v;
  }
  function ot(i, s, f, v, x) {
    i = i === void 0 ? "" : i, s = s === void 0 ? Ne : T('<script nonce="' + X(s) + '">');
    var b = [];
    if (f !== void 0 && b.push(s, k(("" + f).replace(Pr, Fr)), xe), v !== void 0) for (f = 0; f < v.length; f++) b.push(Rt, k(X(v[f])), Ir);
    if (x !== void 0) for (v = 0; v < x.length; v++) b.push(nt, k(X(x[v])), Ir);
    return { bootstrapChunks: b, startInlineScript: s, placeholderPrefix: T(i + "P:"), segmentPrefix: T(i + "S:"), boundaryPrefix: i + "B:", idPrefix: i, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1 };
  }
  function _e(i, s) {
    return { insertionMode: i, selectedValue: s };
  }
  function sr(i) {
    return _e(i === "http://www.w3.org/2000/svg" ? 2 : i === "http://www.w3.org/1998/Math/MathML" ? 3 : 0, null);
  }
  function ae(i, s, f) {
    switch (s) {
      case "select":
        return _e(1, f.value != null ? f.value : f.defaultValue);
      case "svg":
        return _e(2, null);
      case "math":
        return _e(3, null);
      case "foreignObject":
        return _e(1, null);
      case "table":
        return _e(4, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return _e(5, null);
      case "colgroup":
        return _e(7, null);
      case "tr":
        return _e(6, null);
    }
    return 4 <= i.insertionMode || i.insertionMode === 0 ? _e(1, null) : i;
  }
  var ie = T("<!-- -->");
  function ur(i, s, f, v) {
    return s === "" ? v : (v && i.push(ie), i.push(k(X(s))), !0);
  }
  var It = /* @__PURE__ */ new Map(), de = T(' style="'), ue = T(":"), Yt = T(";");
  function Gt(i, s, f) {
    if (typeof f != "object") throw Error(F(62));
    s = !0;
    for (var v in f) if (_.call(f, v)) {
      var x = f[v];
      if (x != null && typeof x != "boolean" && x !== "") {
        if (v.indexOf("--") === 0) {
          var b = k(X(v));
          x = k(X(("" + x).trim()));
        } else {
          b = v;
          var E = It.get(b);
          E !== void 0 || (E = T(X(b.replace(rt, "-$1").toLowerCase().replace(ee, "-ms-"))), It.set(b, E)), b = E, x = typeof x == "number" ? x === 0 || _.call(Ae, v) ? k("" + x) : k(x + "px") : k(X(("" + x).trim()));
        }
        s ? (s = !1, i.push(de, b, ue, x)) : i.push(Yt, b, ue, x);
      }
    }
    s || i.push(ke);
  }
  var Me = T(" "), yt = T('="'), ke = T('"'), cr = T('=""');
  function ye(i, s, f, v) {
    switch (f) {
      case "style":
        Gt(i, s, v);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (!(2 < f.length) || f[0] !== "o" && f[0] !== "O" || f[1] !== "n" && f[1] !== "N") {
      if (s = P.hasOwnProperty(f) ? P[f] : null, s !== null) {
        switch (typeof v) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!s.acceptsBooleans) return;
        }
        switch (f = k(s.attributeName), s.type) {
          case 3:
            v && i.push(Me, f, cr);
            break;
          case 4:
            v === !0 ? i.push(Me, f, cr) : v !== !1 && i.push(Me, f, yt, k(X(v)), ke);
            break;
          case 5:
            isNaN(v) || i.push(Me, f, yt, k(X(v)), ke);
            break;
          case 6:
            !isNaN(v) && 1 <= v && i.push(Me, f, yt, k(X(v)), ke);
            break;
          default:
            s.sanitizeURL && (v = "" + v), i.push(Me, f, yt, k(X(v)), ke);
        }
      } else if (Vt(f)) {
        switch (typeof v) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (s = f.toLowerCase().slice(0, 5), s !== "data-" && s !== "aria-") return;
        }
        i.push(Me, k(f), yt, k(X(v)), ke);
      }
    }
  }
  var Ce = T(">"), fr = T("/>");
  function Xt(i, s, f) {
    if (s != null) {
      if (f != null) throw Error(F(60));
      if (typeof s != "object" || !("__html" in s)) throw Error(F(61));
      s = s.__html, s != null && i.push(k("" + s));
    }
  }
  function on(i) {
    var s = "";
    return ce.Children.forEach(i, function(f) {
      f != null && (s += f);
    }), s;
  }
  var Ve = T(' selected=""');
  function Zt(i, s, f, v) {
    i.push(we(f));
    var x = f = null, b;
    for (b in s) if (_.call(s, b)) {
      var E = s[b];
      if (E != null) switch (b) {
        case "children":
          f = E;
          break;
        case "dangerouslySetInnerHTML":
          x = E;
          break;
        default:
          ye(i, v, b, E);
      }
    }
    return i.push(Ce), Xt(i, x, f), typeof f == "string" ? (i.push(k(X(f))), null) : f;
  }
  var Jt = T(`
`), an = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Ye = /* @__PURE__ */ new Map();
  function we(i) {
    var s = Ye.get(i);
    if (s === void 0) {
      if (!an.test(i)) throw Error(F(65, i));
      s = T("<" + i), Ye.set(i, s);
    }
    return s;
  }
  var ge = T("<!DOCTYPE html>");
  function Dr(i, s, f, v, x) {
    switch (s) {
      case "select":
        i.push(we("select"));
        var b = null, E = null;
        for ($ in f) if (_.call(f, $)) {
          var A = f[$];
          if (A != null) switch ($) {
            case "children":
              b = A;
              break;
            case "dangerouslySetInnerHTML":
              E = A;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              ye(i, v, $, A);
          }
        }
        return i.push(Ce), Xt(i, E, b), b;
      case "option":
        E = x.selectedValue, i.push(we("option"));
        var H = A = null, N = null, $ = null;
        for (b in f) if (_.call(f, b)) {
          var te = f[b];
          if (te != null) switch (b) {
            case "children":
              A = te;
              break;
            case "selected":
              N = te;
              break;
            case "dangerouslySetInnerHTML":
              $ = te;
              break;
            case "value":
              H = te;
            default:
              ye(i, v, b, te);
          }
        }
        if (E != null) if (f = H !== null ? "" + H : on(A), mt(E)) {
          for (v = 0; v < E.length; v++)
            if ("" + E[v] === f) {
              i.push(Ve);
              break;
            }
        } else "" + E === f && i.push(Ve);
        else N && i.push(Ve);
        return i.push(Ce), Xt(i, $, A), A;
      case "textarea":
        i.push(we("textarea")), $ = E = b = null;
        for (A in f) if (_.call(f, A) && (H = f[A], H != null)) switch (A) {
          case "children":
            $ = H;
            break;
          case "value":
            b = H;
            break;
          case "defaultValue":
            E = H;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(F(91));
          default:
            ye(i, v, A, H);
        }
        if (b === null && E !== null && (b = E), i.push(Ce), $ != null) {
          if (b != null) throw Error(F(92));
          if (mt($) && 1 < $.length) throw Error(F(93));
          b = "" + $;
        }
        return typeof b == "string" && b[0] === `
` && i.push(Jt), b !== null && i.push(k(X("" + b))), null;
      case "input":
        i.push(we("input")), H = $ = A = b = null;
        for (E in f) if (_.call(f, E) && (N = f[E], N != null)) switch (E) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(F(399, "input"));
          case "defaultChecked":
            H = N;
            break;
          case "defaultValue":
            A = N;
            break;
          case "checked":
            $ = N;
            break;
          case "value":
            b = N;
            break;
          default:
            ye(i, v, E, N);
        }
        return $ !== null ? ye(
          i,
          v,
          "checked",
          $
        ) : H !== null && ye(i, v, "checked", H), b !== null ? ye(i, v, "value", b) : A !== null && ye(i, v, "value", A), i.push(fr), null;
      case "menuitem":
        i.push(we("menuitem"));
        for (var He in f) if (_.call(f, He) && (b = f[He], b != null)) switch (He) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(F(400));
          default:
            ye(i, v, He, b);
        }
        return i.push(Ce), null;
      case "title":
        i.push(we("title")), b = null;
        for (te in f) if (_.call(f, te) && (E = f[te], E != null)) switch (te) {
          case "children":
            b = E;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(F(434));
          default:
            ye(i, v, te, E);
        }
        return i.push(Ce), b;
      case "listing":
      case "pre":
        i.push(we(s)), E = b = null;
        for (H in f) if (_.call(f, H) && (A = f[H], A != null)) switch (H) {
          case "children":
            b = A;
            break;
          case "dangerouslySetInnerHTML":
            E = A;
            break;
          default:
            ye(i, v, H, A);
        }
        if (i.push(Ce), E != null) {
          if (b != null) throw Error(F(60));
          if (typeof E != "object" || !("__html" in E)) throw Error(F(61));
          f = E.__html, f != null && (typeof f == "string" && 0 < f.length && f[0] === `
` ? i.push(Jt, k(f)) : i.push(k("" + f)));
        }
        return typeof b == "string" && b[0] === `
` && i.push(Jt), b;
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "img":
      case "keygen":
      case "link":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
        i.push(we(s));
        for (var Ze in f) if (_.call(f, Ze) && (b = f[Ze], b != null)) switch (Ze) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(F(399, s));
          default:
            ye(i, v, Ze, b);
        }
        return i.push(fr), null;
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return Zt(i, f, s, v);
      case "html":
        return x.insertionMode === 0 && i.push(ge), Zt(i, f, s, v);
      default:
        if (s.indexOf("-") === -1 && typeof f.is != "string") return Zt(i, f, s, v);
        i.push(we(s)), E = b = null;
        for (N in f) if (_.call(f, N) && (A = f[N], A != null)) switch (N) {
          case "children":
            b = A;
            break;
          case "dangerouslySetInnerHTML":
            E = A;
            break;
          case "style":
            Gt(i, v, A);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            break;
          default:
            Vt(N) && typeof A != "function" && typeof A != "symbol" && i.push(Me, k(N), yt, k(X(A)), ke);
        }
        return i.push(Ce), Xt(i, E, b), b;
    }
  }
  var Ar = T("</"), _r = T(">"), pe = T('<template id="'), Mr = T('"></template>'), ln = T("<!--$-->"), sn = T('<!--$?--><template id="'), Or = T('"></template>'), dr = T("<!--$!-->"), Un = T("<!--/$-->"), Lr = T("<template"), Pt = T('"'), Br = T(' data-dgst="');
  T(' data-msg="'), T(' data-stck="');
  var un = T("></template>");
  function Ee(i, s, f) {
    if (h(i, sn), f === null) throw Error(F(395));
    return h(i, f), W(i, Or);
  }
  var at = T('<div hidden id="'), Ft = T('">'), Z = T("</div>"), Dt = T('<svg aria-hidden="true" style="display:none" id="'), pr = T('">'), Qt = T("</svg>"), it = T('<math aria-hidden="true" style="display:none" id="'), hr = T('">'), St = T("</math>"), Se = T('<table hidden id="'), Ur = T('">'), Hr = T("</table>"), cn = T('<table hidden><tbody id="'), he = T('">'), jr = T("</tbody></table>"), Hn = T('<table hidden><tr id="'), jn = T('">'), lt = T("</tr></table>"), zr = T('<table hidden><colgroup id="'), vr = T('">'), At = T("</colgroup></table>");
  function Oe(i, s, f, v) {
    switch (f.insertionMode) {
      case 0:
      case 1:
        return h(i, at), h(i, s.segmentPrefix), h(i, k(v.toString(16))), W(i, Ft);
      case 2:
        return h(i, Dt), h(i, s.segmentPrefix), h(i, k(v.toString(16))), W(i, pr);
      case 3:
        return h(i, it), h(i, s.segmentPrefix), h(i, k(v.toString(16))), W(i, hr);
      case 4:
        return h(i, Se), h(i, s.segmentPrefix), h(i, k(v.toString(16))), W(i, Ur);
      case 5:
        return h(i, cn), h(i, s.segmentPrefix), h(i, k(v.toString(16))), W(i, he);
      case 6:
        return h(i, Hn), h(i, s.segmentPrefix), h(i, k(v.toString(16))), W(i, jn);
      case 7:
        return h(
          i,
          zr
        ), h(i, s.segmentPrefix), h(i, k(v.toString(16))), W(i, vr);
      default:
        throw Error(F(397));
    }
  }
  function st(i, s) {
    switch (s.insertionMode) {
      case 0:
      case 1:
        return W(i, Z);
      case 2:
        return W(i, Qt);
      case 3:
        return W(i, St);
      case 4:
        return W(i, Hr);
      case 5:
        return W(i, jr);
      case 6:
        return W(i, lt);
      case 7:
        return W(i, At);
      default:
        throw Error(F(397));
    }
  }
  var gr = T('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'), _t = T('$RS("'), Mt = T('","'), ut = T('")<\/script>'), Ot = T('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'), Le = T('$RC("'), fn = T('","'), dn = T('")<\/script>'), bt = T('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'), ve = T('$RX("'), ct = T('"'), ft = T(")<\/script>"), Lt = T(","), mr = /[<\u2028\u2029]/g;
  function Ge(i) {
    return JSON.stringify(i).replace(mr, function(s) {
      switch (s) {
        case "<":
          return "\\u003c";
        case "\u2028":
          return "\\u2028";
        case "\u2029":
          return "\\u2029";
        default:
          throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
      }
    });
  }
  var dt = Object.assign, Re = Symbol.for("react.element"), Bt = Symbol.for("react.portal"), Kt = Symbol.for("react.fragment"), yr = Symbol.for("react.strict_mode"), ze = Symbol.for("react.profiler"), pt = Symbol.for("react.provider"), Ie = Symbol.for("react.context"), Sr = Symbol.for("react.forward_ref"), be = Symbol.for("react.suspense"), Be = Symbol.for("react.suspense_list"), a = Symbol.for("react.memo"), u = Symbol.for("react.lazy"), p = Symbol.for("react.scope"), g = Symbol.for("react.debug_trace_mode"), w = Symbol.for("react.legacy_hidden"), y = Symbol.for("react.default_value"), C = Symbol.iterator;
  function D(i) {
    if (i == null) return null;
    if (typeof i == "function") return i.displayName || i.name || null;
    if (typeof i == "string") return i;
    switch (i) {
      case Kt:
        return "Fragment";
      case Bt:
        return "Portal";
      case ze:
        return "Profiler";
      case yr:
        return "StrictMode";
      case be:
        return "Suspense";
      case Be:
        return "SuspenseList";
    }
    if (typeof i == "object") switch (i.$$typeof) {
      case Ie:
        return (i.displayName || "Context") + ".Consumer";
      case pt:
        return (i._context.displayName || "Context") + ".Provider";
      case Sr:
        var s = i.render;
        return i = i.displayName, i || (i = s.displayName || s.name || "", i = i !== "" ? "ForwardRef(" + i + ")" : "ForwardRef"), i;
      case a:
        return s = i.displayName || null, s !== null ? s : D(i.type) || "Memo";
      case u:
        s = i._payload, i = i._init;
        try {
          return D(i(s));
        } catch {
        }
    }
    return null;
  }
  var L = {};
  function U(i, s) {
    if (i = i.contextTypes, !i) return L;
    var f = {}, v;
    for (v in i) f[v] = s[v];
    return f;
  }
  var B = null;
  function V(i, s) {
    if (i !== s) {
      i.context._currentValue = i.parentValue, i = i.parent;
      var f = s.parent;
      if (i === null) {
        if (f !== null) throw Error(F(401));
      } else {
        if (f === null) throw Error(F(401));
        V(i, f);
      }
      s.context._currentValue = s.value;
    }
  }
  function Pe(i) {
    i.context._currentValue = i.parentValue, i = i.parent, i !== null && Pe(i);
  }
  function Fe(i) {
    var s = i.parent;
    s !== null && Fe(s), i.context._currentValue = i.value;
  }
  function De(i, s) {
    if (i.context._currentValue = i.parentValue, i = i.parent, i === null) throw Error(F(402));
    i.depth === s.depth ? V(i, s) : De(i, s);
  }
  function Ut(i, s) {
    var f = s.parent;
    if (f === null) throw Error(F(402));
    i.depth === f.depth ? V(i, f) : Ut(i, f), s.context._currentValue = s.value;
  }
  function ht(i) {
    var s = B;
    s !== i && (s === null ? Fe(i) : i === null ? Pe(s) : s.depth === i.depth ? V(s, i) : s.depth > i.depth ? De(s, i) : Ut(s, i), B = i);
  }
  var br = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(i, s) {
    i = i._reactInternals, i.queue !== null && i.queue.push(s);
  }, enqueueReplaceState: function(i, s) {
    i = i._reactInternals, i.replace = !0, i.queue = [s];
  }, enqueueForceUpdate: function() {
  } };
  function Ht(i, s, f, v) {
    var x = i.state !== void 0 ? i.state : null;
    i.updater = br, i.props = f, i.state = x;
    var b = { queue: [], replace: !1 };
    i._reactInternals = b;
    var E = s.contextType;
    if (i.context = typeof E == "object" && E !== null ? E._currentValue : v, E = s.getDerivedStateFromProps, typeof E == "function" && (E = E(f, x), x = E == null ? x : dt({}, x, E), i.state = x), typeof s.getDerivedStateFromProps != "function" && typeof i.getSnapshotBeforeUpdate != "function" && (typeof i.UNSAFE_componentWillMount == "function" || typeof i.componentWillMount == "function")) if (s = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), s !== i.state && br.enqueueReplaceState(i, i.state, null), b.queue !== null && 0 < b.queue.length) if (s = b.queue, E = b.replace, b.queue = null, b.replace = !1, E && s.length === 1) i.state = s[0];
    else {
      for (b = E ? s[0] : i.state, x = !0, E = E ? 1 : 0; E < s.length; E++) {
        var A = s[E];
        A = typeof A == "function" ? A.call(i, b, f, v) : A, A != null && (x ? (x = !1, b = dt({}, b, A)) : dt(b, A));
      }
      i.state = b;
    }
    else b.queue = null;
  }
  var qt = { id: 1, overflow: "" };
  function wt(i, s, f) {
    var v = i.id;
    i = i.overflow;
    var x = 32 - er(v) - 1;
    v &= ~(1 << x), f += 1;
    var b = 32 - er(s) + x;
    if (30 < b) {
      var E = x - x % 5;
      return b = (v & (1 << E) - 1).toString(32), v >>= E, x -= E, { id: 1 << 32 - er(s) + x | f << x | v, overflow: b + i };
    }
    return { id: 1 << b | f << x | v, overflow: i };
  }
  var er = Math.clz32 ? Math.clz32 : pn, wa = Math.log, xa = Math.LN2;
  function pn(i) {
    return i >>>= 0, i === 0 ? 32 : 31 - (wa(i) / xa | 0) | 0;
  }
  function vt(i, s) {
    return i === s && (i !== 0 || 1 / i === 1 / s) || i !== i && s !== s;
  }
  var ka = typeof Object.is == "function" ? Object.is : vt, xt = null, zn = null, hn = null, q = null, tr = !1, vn = !1, rr = 0, jt = null, gn = 0;
  function zt() {
    if (xt === null) throw Error(F(321));
    return xt;
  }
  function Xe() {
    if (0 < gn) throw Error(F(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function Wn() {
    return q === null ? hn === null ? (tr = !1, hn = q = Xe()) : (tr = !0, q = hn) : q.next === null ? (tr = !1, q = q.next = Xe()) : (tr = !0, q = q.next), q;
  }
  function Wr() {
    zn = xt = null, vn = !1, hn = null, gn = 0, q = jt = null;
  }
  function ko(i, s) {
    return typeof s == "function" ? s(i) : s;
  }
  function mn(i, s, f) {
    if (xt = zt(), q = Wn(), tr) {
      var v = q.queue;
      if (s = v.dispatch, jt !== null && (f = jt.get(v), f !== void 0)) {
        jt.delete(v), v = q.memoizedState;
        do
          v = i(v, f.action), f = f.next;
        while (f !== null);
        return q.memoizedState = v, [v, s];
      }
      return [q.memoizedState, s];
    }
    return i = i === ko ? typeof s == "function" ? s() : s : f !== void 0 ? f(s) : s, q.memoizedState = i, i = q.queue = { last: null, dispatch: null }, i = i.dispatch = Ca.bind(null, xt, i), [q.memoizedState, i];
  }
  function Co(i, s) {
    if (xt = zt(), q = Wn(), s = s === void 0 ? null : s, q !== null) {
      var f = q.memoizedState;
      if (f !== null && s !== null) {
        var v = f[1];
        e: if (v === null) v = !1;
        else {
          for (var x = 0; x < v.length && x < s.length; x++) if (!ka(s[x], v[x])) {
            v = !1;
            break e;
          }
          v = !0;
        }
        if (v) return f[0];
      }
    }
    return i = i(), q.memoizedState = [i, s], i;
  }
  function Ca(i, s, f) {
    if (25 <= gn) throw Error(F(301));
    if (i === xt) if (vn = !0, i = { action: f, next: null }, jt === null && (jt = /* @__PURE__ */ new Map()), f = jt.get(s), f === void 0) jt.set(s, i);
    else {
      for (s = f; s.next !== null; ) s = s.next;
      s.next = i;
    }
  }
  function Ta() {
    throw Error(F(394));
  }
  function yn() {
  }
  var To = { readContext: function(i) {
    return i._currentValue;
  }, useContext: function(i) {
    return zt(), i._currentValue;
  }, useMemo: Co, useReducer: mn, useRef: function(i) {
    xt = zt(), q = Wn();
    var s = q.memoizedState;
    return s === null ? (i = { current: i }, q.memoizedState = i) : s;
  }, useState: function(i) {
    return mn(ko, i);
  }, useInsertionEffect: yn, useLayoutEffect: function() {
  }, useCallback: function(i, s) {
    return Co(function() {
      return i;
    }, s);
  }, useImperativeHandle: yn, useEffect: yn, useDebugValue: yn, useDeferredValue: function(i) {
    return zt(), i;
  }, useTransition: function() {
    return zt(), [!1, Ta];
  }, useId: function() {
    var i = zn.treeContext, s = i.overflow;
    i = i.id, i = (i & ~(1 << 32 - er(i) - 1)).toString(32) + s;
    var f = $r;
    if (f === null) throw Error(F(404));
    return s = rr++, i = ":" + f.idPrefix + "R" + i, 0 < s && (i += "H" + s.toString(32)), i + ":";
  }, useMutableSource: function(i, s) {
    return zt(), s(i._source);
  }, useSyncExternalStore: function(i, s, f) {
    if (f === void 0) throw Error(F(407));
    return f();
  } }, $r = null, $n = ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function Ea(i) {
    return console.error(i), null;
  }
  function wr() {
  }
  function Nn(i, s, f, v, x, b, E, A, H) {
    var N = [], $ = /* @__PURE__ */ new Set();
    return s = { destination: null, responseState: s, progressiveChunkSize: v === void 0 ? 12800 : v, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: $, pingedTasks: N, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: x === void 0 ? Ea : x, onAllReady: b === void 0 ? wr : b, onShellReady: E === void 0 ? wr : E, onShellError: A === void 0 ? wr : A, onFatalError: H === void 0 ? wr : H }, f = xr(s, 0, null, f, !1, !1), f.parentFlushed = !0, i = Vn(s, i, null, f, $, L, null, qt), N.push(i), s;
  }
  function Vn(i, s, f, v, x, b, E, A) {
    i.allPendingTasks++, f === null ? i.pendingRootTasks++ : f.pendingTasks++;
    var H = { node: s, ping: function() {
      var N = i.pingedTasks;
      N.push(H), N.length === 1 && Ao(i);
    }, blockedBoundary: f, blockedSegment: v, abortSet: x, legacyContext: b, context: E, treeContext: A };
    return x.add(H), H;
  }
  function xr(i, s, f, v, x, b) {
    return { status: 0, id: -1, index: s, parentFlushed: !1, chunks: [], children: [], formatContext: v, boundary: f, lastPushedText: x, textEmbedded: b };
  }
  function Nr(i, s) {
    if (i = i.onError(s), i != null && typeof i != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof i + '" instead');
    return i;
  }
  function Sn(i, s) {
    var f = i.onShellError;
    f(s), f = i.onFatalError, f(s), i.destination !== null ? (i.status = 2, gt(i.destination, s)) : (i.status = 1, i.fatalError = s);
  }
  function Eo(i, s, f, v, x) {
    for (xt = {}, zn = s, rr = 0, i = f(v, x); vn; ) vn = !1, rr = 0, gn += 1, q = null, i = f(v, x);
    return Wr(), i;
  }
  function Ro(i, s, f, v) {
    var x = f.render(), b = v.childContextTypes;
    if (b != null) {
      var E = s.legacyContext;
      if (typeof f.getChildContext != "function") v = E;
      else {
        f = f.getChildContext();
        for (var A in f) if (!(A in b)) throw Error(F(108, D(v) || "Unknown", A));
        v = dt({}, E, f);
      }
      s.legacyContext = v, Ue(i, s, x), s.legacyContext = E;
    } else Ue(i, s, x);
  }
  function Io(i, s) {
    if (i && i.defaultProps) {
      s = dt({}, s), i = i.defaultProps;
      for (var f in i) s[f] === void 0 && (s[f] = i[f]);
      return s;
    }
    return s;
  }
  function bn(i, s, f, v, x) {
    if (typeof f == "function") if (f.prototype && f.prototype.isReactComponent) {
      x = U(f, s.legacyContext);
      var b = f.contextType;
      b = new f(v, typeof b == "object" && b !== null ? b._currentValue : x), Ht(b, f, v, x), Ro(i, s, b, f);
    } else {
      b = U(f, s.legacyContext), x = Eo(i, s, f, v, b);
      var E = rr !== 0;
      if (typeof x == "object" && x !== null && typeof x.render == "function" && x.$$typeof === void 0) Ht(x, f, v, b), Ro(i, s, x, f);
      else if (E) {
        v = s.treeContext, s.treeContext = wt(v, 1, 0);
        try {
          Ue(i, s, x);
        } finally {
          s.treeContext = v;
        }
      } else Ue(i, s, x);
    }
    else if (typeof f == "string") {
      switch (x = s.blockedSegment, b = Dr(x.chunks, f, v, i.responseState, x.formatContext), x.lastPushedText = !1, E = x.formatContext, x.formatContext = ae(E, f, v), wn(i, s, b), x.formatContext = E, f) {
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "input":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          break;
        default:
          x.chunks.push(Ar, k(f), _r);
      }
      x.lastPushedText = !1;
    } else {
      switch (f) {
        case w:
        case g:
        case yr:
        case ze:
        case Kt:
          Ue(i, s, v.children);
          return;
        case Be:
          Ue(i, s, v.children);
          return;
        case p:
          throw Error(F(343));
        case be:
          e: {
            f = s.blockedBoundary, x = s.blockedSegment, b = v.fallback, v = v.children, E = /* @__PURE__ */ new Set();
            var A = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: E, errorDigest: null }, H = xr(i, x.chunks.length, A, x.formatContext, !1, !1);
            x.children.push(H), x.lastPushedText = !1;
            var N = xr(i, 0, null, x.formatContext, !1, !1);
            N.parentFlushed = !0, s.blockedBoundary = A, s.blockedSegment = N;
            try {
              if (wn(
                i,
                s,
                v
              ), N.lastPushedText && N.textEmbedded && N.chunks.push(ie), N.status = 1, xn(A, N), A.pendingTasks === 0) break e;
            } catch ($) {
              N.status = 4, A.forceClientRender = !0, A.errorDigest = Nr(i, $);
            } finally {
              s.blockedBoundary = f, s.blockedSegment = x;
            }
            s = Vn(i, b, f, H, E, s.legacyContext, s.context, s.treeContext), i.pingedTasks.push(s);
          }
          return;
      }
      if (typeof f == "object" && f !== null) switch (f.$$typeof) {
        case Sr:
          if (v = Eo(i, s, f.render, v, x), rr !== 0) {
            f = s.treeContext, s.treeContext = wt(f, 1, 0);
            try {
              Ue(i, s, v);
            } finally {
              s.treeContext = f;
            }
          } else Ue(i, s, v);
          return;
        case a:
          f = f.type, v = Io(f, v), bn(i, s, f, v, x);
          return;
        case pt:
          if (x = v.children, f = f._context, v = v.value, b = f._currentValue, f._currentValue = v, E = B, B = v = { parent: E, depth: E === null ? 0 : E.depth + 1, context: f, parentValue: b, value: v }, s.context = v, Ue(i, s, x), i = B, i === null) throw Error(F(403));
          v = i.parentValue, i.context._currentValue = v === y ? i.context._defaultValue : v, i = B = i.parent, s.context = i;
          return;
        case Ie:
          v = v.children, v = v(f._currentValue), Ue(i, s, v);
          return;
        case u:
          x = f._init, f = x(f._payload), v = Io(f, v), bn(i, s, f, v, void 0);
          return;
      }
      throw Error(F(
        130,
        f == null ? f : typeof f,
        ""
      ));
    }
  }
  function Ue(i, s, f) {
    if (s.node = f, typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case Re:
          bn(i, s, f.type, f.props, f.ref);
          return;
        case Bt:
          throw Error(F(257));
        case u:
          var v = f._init;
          f = v(f._payload), Ue(i, s, f);
          return;
      }
      if (mt(f)) {
        Po(i, s, f);
        return;
      }
      if (f === null || typeof f != "object" ? v = null : (v = C && f[C] || f["@@iterator"], v = typeof v == "function" ? v : null), v && (v = v.call(f))) {
        if (f = v.next(), !f.done) {
          var x = [];
          do
            x.push(f.value), f = v.next();
          while (!f.done);
          Po(i, s, x);
        }
        return;
      }
      throw i = Object.prototype.toString.call(f), Error(F(31, i === "[object Object]" ? "object with keys {" + Object.keys(f).join(", ") + "}" : i));
    }
    typeof f == "string" ? (v = s.blockedSegment, v.lastPushedText = ur(s.blockedSegment.chunks, f, i.responseState, v.lastPushedText)) : typeof f == "number" && (v = s.blockedSegment, v.lastPushedText = ur(s.blockedSegment.chunks, "" + f, i.responseState, v.lastPushedText));
  }
  function Po(i, s, f) {
    for (var v = f.length, x = 0; x < v; x++) {
      var b = s.treeContext;
      s.treeContext = wt(b, v, x);
      try {
        wn(i, s, f[x]);
      } finally {
        s.treeContext = b;
      }
    }
  }
  function wn(i, s, f) {
    var v = s.blockedSegment.formatContext, x = s.legacyContext, b = s.context;
    try {
      return Ue(i, s, f);
    } catch (H) {
      if (Wr(), typeof H == "object" && H !== null && typeof H.then == "function") {
        f = H;
        var E = s.blockedSegment, A = xr(i, E.chunks.length, null, E.formatContext, E.lastPushedText, !0);
        E.children.push(A), E.lastPushedText = !1, i = Vn(i, s.node, s.blockedBoundary, A, s.abortSet, s.legacyContext, s.context, s.treeContext).ping, f.then(i, i), s.blockedSegment.formatContext = v, s.legacyContext = x, s.context = b, ht(b);
      } else throw s.blockedSegment.formatContext = v, s.legacyContext = x, s.context = b, ht(b), H;
    }
  }
  function Ra(i) {
    var s = i.blockedBoundary;
    i = i.blockedSegment, i.status = 3, Do(this, s, i);
  }
  function Fo(i, s, f) {
    var v = i.blockedBoundary;
    i.blockedSegment.status = 3, v === null ? (s.allPendingTasks--, s.status !== 2 && (s.status = 2, s.destination !== null && s.destination.close())) : (v.pendingTasks--, v.forceClientRender || (v.forceClientRender = !0, i = f === void 0 ? Error(F(432)) : f, v.errorDigest = s.onError(i), v.parentFlushed && s.clientRenderedBoundaries.push(v)), v.fallbackAbortableTasks.forEach(function(x) {
      return Fo(x, s, f);
    }), v.fallbackAbortableTasks.clear(), s.allPendingTasks--, s.allPendingTasks === 0 && (v = s.onAllReady, v()));
  }
  function xn(i, s) {
    if (s.chunks.length === 0 && s.children.length === 1 && s.children[0].boundary === null) {
      var f = s.children[0];
      f.id = s.id, f.parentFlushed = !0, f.status === 1 && xn(i, f);
    } else i.completedSegments.push(s);
  }
  function Do(i, s, f) {
    if (s === null) {
      if (f.parentFlushed) {
        if (i.completedRootSegment !== null) throw Error(F(389));
        i.completedRootSegment = f;
      }
      i.pendingRootTasks--, i.pendingRootTasks === 0 && (i.onShellError = wr, s = i.onShellReady, s());
    } else s.pendingTasks--, s.forceClientRender || (s.pendingTasks === 0 ? (f.parentFlushed && f.status === 1 && xn(s, f), s.parentFlushed && i.completedBoundaries.push(s), s.fallbackAbortableTasks.forEach(Ra, i), s.fallbackAbortableTasks.clear()) : f.parentFlushed && f.status === 1 && (xn(s, f), s.completedSegments.length === 1 && s.parentFlushed && i.partialBoundaries.push(s)));
    i.allPendingTasks--, i.allPendingTasks === 0 && (i = i.onAllReady, i());
  }
  function Ao(i) {
    if (i.status !== 2) {
      var s = B, f = $n.current;
      $n.current = To;
      var v = $r;
      $r = i.responseState;
      try {
        var x = i.pingedTasks, b;
        for (b = 0; b < x.length; b++) {
          var E = x[b], A = i, H = E.blockedSegment;
          if (H.status === 0) {
            ht(E.context);
            try {
              Ue(A, E, E.node), H.lastPushedText && H.textEmbedded && H.chunks.push(ie), E.abortSet.delete(E), H.status = 1, Do(A, E.blockedBoundary, H);
            } catch (Je) {
              if (Wr(), typeof Je == "object" && Je !== null && typeof Je.then == "function") {
                var N = E.ping;
                Je.then(N, N);
              } else {
                E.abortSet.delete(E), H.status = 4;
                var $ = E.blockedBoundary, te = Je, He = Nr(A, te);
                if ($ === null ? Sn(A, te) : ($.pendingTasks--, $.forceClientRender || ($.forceClientRender = !0, $.errorDigest = He, $.parentFlushed && A.clientRenderedBoundaries.push($))), A.allPendingTasks--, A.allPendingTasks === 0) {
                  var Ze = A.onAllReady;
                  Ze();
                }
              }
            } finally {
            }
          }
        }
        x.splice(0, b), i.destination !== null && Yn(i, i.destination);
      } catch (Je) {
        Nr(i, Je), Sn(i, Je);
      } finally {
        $r = v, $n.current = f, f === To && ht(s);
      }
    }
  }
  function kn(i, s, f) {
    switch (f.parentFlushed = !0, f.status) {
      case 0:
        var v = f.id = i.nextSegmentId++;
        return f.lastPushedText = !1, f.textEmbedded = !1, i = i.responseState, h(s, pe), h(s, i.placeholderPrefix), i = k(v.toString(16)), h(s, i), W(s, Mr);
      case 1:
        f.status = 2;
        var x = !0;
        v = f.chunks;
        var b = 0;
        f = f.children;
        for (var E = 0; E < f.length; E++) {
          for (x = f[E]; b < x.index; b++) h(s, v[b]);
          x = Cn(i, s, x);
        }
        for (; b < v.length - 1; b++) h(s, v[b]);
        return b < v.length && (x = W(s, v[b])), x;
      default:
        throw Error(F(390));
    }
  }
  function Cn(i, s, f) {
    var v = f.boundary;
    if (v === null) return kn(i, s, f);
    if (v.parentFlushed = !0, v.forceClientRender) v = v.errorDigest, W(s, dr), h(s, Lr), v && (h(s, Br), h(s, k(X(v))), h(s, Pt)), W(s, un), kn(i, s, f);
    else if (0 < v.pendingTasks) {
      v.rootSegmentID = i.nextSegmentId++, 0 < v.completedSegments.length && i.partialBoundaries.push(v);
      var x = i.responseState, b = x.nextSuspenseID++;
      x = T(x.boundaryPrefix + b.toString(16)), v = v.id = x, Ee(s, i.responseState, v), kn(i, s, f);
    } else if (v.byteSize > i.progressiveChunkSize) v.rootSegmentID = i.nextSegmentId++, i.completedBoundaries.push(v), Ee(s, i.responseState, v.id), kn(i, s, f);
    else {
      if (W(s, ln), f = v.completedSegments, f.length !== 1) throw Error(F(391));
      Cn(i, s, f[0]);
    }
    return W(s, Un);
  }
  function _o(i, s, f) {
    return Oe(s, i.responseState, f.formatContext, f.id), Cn(i, s, f), st(s, f.formatContext);
  }
  function Mo(i, s, f) {
    for (var v = f.completedSegments, x = 0; x < v.length; x++) Oo(i, s, f, v[x]);
    if (v.length = 0, i = i.responseState, v = f.id, f = f.rootSegmentID, h(s, i.startInlineScript), i.sentCompleteBoundaryFunction ? h(s, Le) : (i.sentCompleteBoundaryFunction = !0, h(s, Ot)), v === null) throw Error(F(395));
    return f = k(f.toString(16)), h(s, v), h(s, fn), h(s, i.segmentPrefix), h(s, f), W(s, dn);
  }
  function Oo(i, s, f, v) {
    if (v.status === 2) return !0;
    var x = v.id;
    if (x === -1) {
      if ((v.id = f.rootSegmentID) === -1) throw Error(F(392));
      return _o(i, s, v);
    }
    return _o(i, s, v), i = i.responseState, h(s, i.startInlineScript), i.sentCompleteSegmentFunction ? h(s, _t) : (i.sentCompleteSegmentFunction = !0, h(s, gr)), h(s, i.segmentPrefix), x = k(x.toString(16)), h(s, x), h(s, Mt), h(s, i.placeholderPrefix), h(s, x), W(s, ut);
  }
  function Yn(i, s) {
    z = new Uint8Array(512), Q = 0;
    try {
      var f = i.completedRootSegment;
      if (f !== null && i.pendingRootTasks === 0) {
        Cn(i, s, f), i.completedRootSegment = null;
        var v = i.responseState.bootstrapChunks;
        for (f = 0; f < v.length - 1; f++) h(s, v[f]);
        f < v.length && W(s, v[f]);
      }
      var x = i.clientRenderedBoundaries, b;
      for (b = 0; b < x.length; b++) {
        var E = x[b];
        v = s;
        var A = i.responseState, H = E.id, N = E.errorDigest, $ = E.errorMessage, te = E.errorComponentStack;
        if (h(v, A.startInlineScript), A.sentClientRenderFunction ? h(v, ve) : (A.sentClientRenderFunction = !0, h(
          v,
          bt
        )), H === null) throw Error(F(395));
        h(v, H), h(v, ct), (N || $ || te) && (h(v, Lt), h(v, k(Ge(N || "")))), ($ || te) && (h(v, Lt), h(v, k(Ge($ || "")))), te && (h(v, Lt), h(v, k(Ge(te)))), W(v, ft);
      }
      x.splice(0, b);
      var He = i.completedBoundaries;
      for (b = 0; b < He.length; b++) Mo(i, s, He[b]);
      He.splice(0, b), $e(s), z = new Uint8Array(512), Q = 0;
      var Ze = i.partialBoundaries;
      for (b = 0; b < Ze.length; b++) {
        var Je = Ze[b];
        e: {
          x = i, E = s;
          var Tn = Je.completedSegments;
          for (A = 0; A < Tn.length; A++) if (!Oo(
            x,
            E,
            Je,
            Tn[A]
          )) {
            A++, Tn.splice(0, A);
            var Bo = !1;
            break e;
          }
          Tn.splice(0, A), Bo = !0;
        }
        if (!Bo) {
          i.destination = null, b++, Ze.splice(0, b);
          return;
        }
      }
      Ze.splice(0, b);
      var Vr = i.completedBoundaries;
      for (b = 0; b < Vr.length; b++) Mo(i, s, Vr[b]);
      Vr.splice(0, b);
    } finally {
      $e(s), i.allPendingTasks === 0 && i.pingedTasks.length === 0 && i.clientRenderedBoundaries.length === 0 && i.completedBoundaries.length === 0 && s.close();
    }
  }
  function Lo(i, s) {
    try {
      var f = i.abortableTasks;
      f.forEach(function(v) {
        return Fo(v, i, s);
      }), f.clear(), i.destination !== null && Yn(i, i.destination);
    } catch (v) {
      Nr(i, v), Sn(i, v);
    }
  }
  return Ki.renderToReadableStream = function(i, s) {
    return new Promise(function(f, v) {
      var x, b, E = new Promise(function($, te) {
        b = $, x = te;
      }), A = Nn(i, ot(s ? s.identifierPrefix : void 0, s ? s.nonce : void 0, s ? s.bootstrapScriptContent : void 0, s ? s.bootstrapScripts : void 0, s ? s.bootstrapModules : void 0), sr(s ? s.namespaceURI : void 0), s ? s.progressiveChunkSize : void 0, s ? s.onError : void 0, b, function() {
        var $ = new ReadableStream({ type: "bytes", pull: function(te) {
          if (A.status === 1) A.status = 2, gt(te, A.fatalError);
          else if (A.status !== 2 && A.destination === null) {
            A.destination = te;
            try {
              Yn(A, te);
            } catch (He) {
              Nr(A, He), Sn(A, He);
            }
          }
        }, cancel: function() {
          Lo(A);
        } }, { highWaterMark: 0 });
        $.allReady = E, f($);
      }, function($) {
        E.catch(function() {
        }), v($);
      }, x);
      if (s && s.signal) {
        var H = s.signal, N = function() {
          Lo(A, H.reason), H.removeEventListener("abort", N);
        };
        H.addEventListener("abort", N);
      }
      Ao(A);
    });
  }, Ki.version = "18.3.1", Ki;
}
var wo = {}, rs;
function ks() {
  return rs || (rs = 1, Ql.env.NODE_ENV !== "production" && function() {
    var ce = Nt, F = "18.3.1", z = ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function Q(e) {
      {
        for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
          r[o - 1] = arguments[o];
        W("warn", e, r);
      }
    }
    function h(e) {
      {
        for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
          r[o - 1] = arguments[o];
        W("error", e, r);
      }
    }
    function W(e, t, r) {
      {
        var o = z.ReactDebugCurrentFrame, l = o.getStackAddendum();
        l !== "" && (t += "%s", r = r.concat([l]));
        var c = r.map(function(d) {
          return String(d);
        });
        c.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, c);
      }
    }
    function $e(e) {
      e();
    }
    function K(e) {
    }
    function k(e, t) {
      T(e, t);
    }
    function T(e, t) {
      return e.push(t);
    }
    function gt(e) {
    }
    function _(e) {
      e.push(null);
    }
    function J(e) {
      return e;
    }
    function nn(e) {
      return e;
    }
    function fe(e, t) {
      e.destroy(t);
    }
    function Vt(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, r = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return r;
      }
    }
    function O(e) {
      try {
        return P(e), !1;
      } catch {
        return !0;
      }
    }
    function P(e) {
      return "" + e;
    }
    function me(e, t) {
      if (O(e))
        return h("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Vt(e)), P(e);
    }
    function Et(e, t) {
      if (O(e))
        return h("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Vt(e)), P(e);
    }
    function Ae(e) {
      if (O(e))
        return h("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", Vt(e)), P(e);
    }
    var ne = Object.prototype.hasOwnProperty, se = 0, X = 1, rt = 2, ee = 3, mt = 4, Ne = 5, xe = 6, Rt = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", nt = Rt + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Ir = new RegExp("^[" + Rt + "][" + nt + "]*$"), Pr = {}, Fr = {};
    function ot(e) {
      return ne.call(Fr, e) ? !0 : ne.call(Pr, e) ? !1 : Ir.test(e) ? (Fr[e] = !0, !0) : (Pr[e] = !0, h("Invalid attribute name: `%s`", e), !1);
    }
    function _e(e, t, r, o) {
      if (r !== null && r.type === se)
        return !1;
      switch (typeof t) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (r !== null)
            return !r.acceptsBooleans;
          var l = e.toLowerCase().slice(0, 5);
          return l !== "data-" && l !== "aria-";
        }
        default:
          return !1;
      }
    }
    function sr(e) {
      return ie.hasOwnProperty(e) ? ie[e] : null;
    }
    function ae(e, t, r, o, l, c, d) {
      this.acceptsBooleans = t === rt || t === ee || t === mt, this.attributeName = o, this.attributeNamespace = l, this.mustUseProperty = r, this.propertyName = e, this.type = t, this.sanitizeURL = c, this.removeEmptyString = d;
    }
    var ie = {}, ur = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    ur.forEach(function(e) {
      ie[e] = new ae(
        e,
        se,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], r = e[1];
      ie[t] = new ae(
        t,
        X,
        !1,
        // mustUseProperty
        r,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      ie[e] = new ae(
        e,
        rt,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      ie[e] = new ae(
        e,
        rt,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(e) {
      ie[e] = new ae(
        e,
        ee,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      ie[e] = new ae(
        e,
        ee,
        !0,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      ie[e] = new ae(
        e,
        mt,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      ie[e] = new ae(
        e,
        xe,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      ie[e] = new ae(
        e,
        Ne,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var It = /[\-\:]([a-z])/g, de = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(It, de);
      ie[t] = new ae(
        t,
        X,
        !1,
        // mustUseProperty
        e,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(It, de);
      ie[t] = new ae(
        t,
        X,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(It, de);
      ie[t] = new ae(
        t,
        X,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      ie[e] = new ae(
        e,
        X,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var ue = "xlinkHref";
    ie[ue] = new ae(
      "xlinkHref",
      X,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      ie[e] = new ae(
        e,
        X,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var Yt = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function Gt(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var Me = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Yt).forEach(function(e) {
      Me.forEach(function(t) {
        Yt[Gt(t, e)] = Yt[e];
      });
    });
    var yt = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function ke(e, t) {
      yt[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || h("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || h("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function cr(e, t) {
      if (e.indexOf("-") === -1)
        return typeof t.is == "string";
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var ye = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, Ce = {}, fr = new RegExp("^(aria)-[" + nt + "]*$"), Xt = new RegExp("^(aria)[A-Z][" + nt + "]*$");
    function on(e, t) {
      {
        if (ne.call(Ce, t) && Ce[t])
          return !0;
        if (Xt.test(t)) {
          var r = "aria-" + t.slice(4).toLowerCase(), o = ye.hasOwnProperty(r) ? r : null;
          if (o == null)
            return h("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), Ce[t] = !0, !0;
          if (t !== o)
            return h("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, o), Ce[t] = !0, !0;
        }
        if (fr.test(t)) {
          var l = t.toLowerCase(), c = ye.hasOwnProperty(l) ? l : null;
          if (c == null)
            return Ce[t] = !0, !1;
          if (t !== c)
            return h("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, c), Ce[t] = !0, !0;
        }
      }
      return !0;
    }
    function Ve(e, t) {
      {
        var r = [];
        for (var o in t) {
          var l = on(e, o);
          l || r.push(o);
        }
        var c = r.map(function(d) {
          return "`" + d + "`";
        }).join(", ");
        r.length === 1 ? h("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", c, e) : r.length > 1 && h("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", c, e);
      }
    }
    function Zt(e, t) {
      cr(e, t) || Ve(e, t);
    }
    var Jt = !1;
    function an(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !Jt && (Jt = !0, e === "select" && t.multiple ? h("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : h("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var Ye = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, we = function() {
    };
    {
      var ge = {}, Dr = /^on./, Ar = /^on[^A-Z]/, _r = new RegExp("^(aria)-[" + nt + "]*$"), pe = new RegExp("^(aria)[A-Z][" + nt + "]*$");
      we = function(e, t, r, o) {
        if (ne.call(ge, t) && ge[t])
          return !0;
        var l = t.toLowerCase();
        if (l === "onfocusin" || l === "onfocusout")
          return h("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), ge[t] = !0, !0;
        if (o != null) {
          var c = o.registrationNameDependencies, d = o.possibleRegistrationNames;
          if (c.hasOwnProperty(t))
            return !0;
          var m = d.hasOwnProperty(l) ? d[l] : null;
          if (m != null)
            return h("Invalid event handler property `%s`. Did you mean `%s`?", t, m), ge[t] = !0, !0;
          if (Dr.test(t))
            return h("Unknown event handler property `%s`. It will be ignored.", t), ge[t] = !0, !0;
        } else if (Dr.test(t))
          return Ar.test(t) && h("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), ge[t] = !0, !0;
        if (_r.test(t) || pe.test(t))
          return !0;
        if (l === "innerhtml")
          return h("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), ge[t] = !0, !0;
        if (l === "aria")
          return h("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), ge[t] = !0, !0;
        if (l === "is" && r !== null && r !== void 0 && typeof r != "string")
          return h("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof r), ge[t] = !0, !0;
        if (typeof r == "number" && isNaN(r))
          return h("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), ge[t] = !0, !0;
        var S = sr(t), R = S !== null && S.type === se;
        if (Ye.hasOwnProperty(l)) {
          var I = Ye[l];
          if (I !== t)
            return h("Invalid DOM property `%s`. Did you mean `%s`?", t, I), ge[t] = !0, !0;
        } else if (!R && t !== l)
          return h("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, l), ge[t] = !0, !0;
        return typeof r == "boolean" && _e(t, r, S) ? (r ? h('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', r, t, t, r, t) : h('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', r, t, t, r, t, t, t), ge[t] = !0, !0) : R ? !0 : _e(t, r, S) ? (ge[t] = !0, !1) : ((r === "false" || r === "true") && S !== null && S.type === ee && (h("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", r, t, r === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, r), ge[t] = !0), !0);
      };
    }
    var Mr = function(e, t, r) {
      {
        var o = [];
        for (var l in t) {
          var c = we(e, l, t[l], r);
          c || o.push(l);
        }
        var d = o.map(function(m) {
          return "`" + m + "`";
        }).join(", ");
        o.length === 1 ? h("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", d, e) : o.length > 1 && h("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", d, e);
      }
    };
    function ln(e, t, r) {
      cr(e, t) || Mr(e, t, r);
    }
    var sn = function() {
    };
    {
      var Or = /^(?:webkit|moz|o)[A-Z]/, dr = /^-ms-/, Un = /-(.)/g, Lr = /;\s*$/, Pt = {}, Br = {}, un = !1, Ee = !1, at = function(e) {
        return e.replace(Un, function(t, r) {
          return r.toUpperCase();
        });
      }, Ft = function(e) {
        Pt.hasOwnProperty(e) && Pt[e] || (Pt[e] = !0, h(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          at(e.replace(dr, "ms-"))
        ));
      }, Z = function(e) {
        Pt.hasOwnProperty(e) && Pt[e] || (Pt[e] = !0, h("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, Dt = function(e, t) {
        Br.hasOwnProperty(t) && Br[t] || (Br[t] = !0, h(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(Lr, "")));
      }, pr = function(e, t) {
        un || (un = !0, h("`NaN` is an invalid value for the `%s` css style property.", e));
      }, Qt = function(e, t) {
        Ee || (Ee = !0, h("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      sn = function(e, t) {
        e.indexOf("-") > -1 ? Ft(e) : Or.test(e) ? Z(e) : Lr.test(t) && Dt(e, t), typeof t == "number" && (isNaN(t) ? pr(e, t) : isFinite(t) || Qt(e, t));
      };
    }
    var it = sn, hr = /["'&<>]/;
    function St(e) {
      Ae(e);
      var t = "" + e, r = hr.exec(t);
      if (!r)
        return t;
      var o, l = "", c, d = 0;
      for (c = r.index; c < t.length; c++) {
        switch (t.charCodeAt(c)) {
          case 34:
            o = "&quot;";
            break;
          case 38:
            o = "&amp;";
            break;
          case 39:
            o = "&#x27;";
            break;
          case 60:
            o = "&lt;";
            break;
          case 62:
            o = "&gt;";
            break;
          default:
            continue;
        }
        d !== c && (l += t.substring(d, c)), d = c + 1, l += o;
      }
      return d !== c ? l + t.substring(d, c) : l;
    }
    function Se(e) {
      return typeof e == "boolean" || typeof e == "number" ? "" + e : St(e);
    }
    var Ur = /([A-Z])/g, Hr = /^ms-/;
    function cn(e) {
      return e.replace(Ur, "-$1").toLowerCase().replace(Hr, "-ms-");
    }
    var he = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, jr = !1;
    function Hn(e) {
      !jr && he.test(e) && (jr = !0, h("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    var jn = Array.isArray;
    function lt(e) {
      return jn(e);
    }
    var zr = "<script>";
    function vr(e, t, r, o, l) {
      var c = e === void 0 ? "" : e, d = zr, m = [];
      return {
        bootstrapChunks: m,
        startInlineScript: d,
        placeholderPrefix: c + "P:",
        segmentPrefix: c + "S:",
        boundaryPrefix: c + "B:",
        idPrefix: c,
        nextSuspenseID: 0,
        sentCompleteSegmentFunction: !1,
        sentCompleteBoundaryFunction: !1,
        sentClientRenderFunction: !1
      };
    }
    var At = 0, Oe = 1, st = 2, gr = 3, _t = 4, Mt = 5, ut = 6, Ot = 7;
    function Le(e, t) {
      return {
        insertionMode: e,
        selectedValue: t
      };
    }
    function fn(e, t, r) {
      switch (t) {
        case "select":
          return Le(Oe, r.value != null ? r.value : r.defaultValue);
        case "svg":
          return Le(st, null);
        case "math":
          return Le(gr, null);
        case "foreignObject":
          return Le(Oe, null);
        case "table":
          return Le(_t, null);
        case "thead":
        case "tbody":
        case "tfoot":
          return Le(Mt, null);
        case "colgroup":
          return Le(Ot, null);
        case "tr":
          return Le(ut, null);
      }
      return e.insertionMode >= _t || e.insertionMode === At ? Le(Oe, null) : e;
    }
    var dn = null;
    function bt(e) {
      var t = e.nextSuspenseID++;
      return e.boundaryPrefix + t.toString(16);
    }
    function ve(e, t, r) {
      var o = e.idPrefix, l = ":" + o + "R" + t;
      return r > 0 && (l += "H" + r.toString(32)), l + ":";
    }
    function ct(e) {
      return Se(e);
    }
    var ft = "<!-- -->";
    function Lt(e, t, r, o) {
      return t === "" ? o : (o && e.push(ft), e.push(ct(t)), !0);
    }
    function mr(e, t, r, o) {
      r && o && e.push(ft);
    }
    var Ge = /* @__PURE__ */ new Map();
    function dt(e) {
      var t = Ge.get(e);
      if (t !== void 0)
        return t;
      var r = Se(cn(e));
      return Ge.set(e, r), r;
    }
    var Re = ' style="', Bt = ":", Kt = ";";
    function yr(e, t, r) {
      if (typeof r != "object")
        throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      var o = !0;
      for (var l in r)
        if (ne.call(r, l)) {
          var c = r[l];
          if (!(c == null || typeof c == "boolean" || c === "")) {
            var d = void 0, m = void 0, S = l.indexOf("--") === 0;
            S ? (d = Se(l), Et(c, l), m = Se(("" + c).trim())) : (it(l, c), d = dt(l), typeof c == "number" ? c !== 0 && !ne.call(Yt, l) ? m = c + "px" : m = "" + c : (Et(c, l), m = Se(("" + c).trim()))), o ? (o = !1, e.push(Re, d, Bt, m)) : e.push(Kt, d, Bt, m);
          }
        }
      o || e.push(Ie);
    }
    var ze = " ", pt = '="', Ie = '"', Sr = '=""';
    function be(e, t, r, o) {
      switch (r) {
        case "style": {
          yr(e, t, o);
          return;
        }
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
          return;
      }
      if (
        // shouldIgnoreAttribute
        // We have already filtered out null/undefined and reserved words.
        !(r.length > 2 && (r[0] === "o" || r[0] === "O") && (r[1] === "n" || r[1] === "N"))
      ) {
        var l = sr(r);
        if (l !== null) {
          switch (typeof o) {
            case "function":
            case "symbol":
              return;
            case "boolean":
              if (!l.acceptsBooleans)
                return;
          }
          var c = l.attributeName, d = c;
          switch (l.type) {
            case ee:
              o && e.push(ze, d, Sr);
              return;
            case mt:
              o === !0 ? e.push(ze, d, Sr) : o === !1 || e.push(ze, d, pt, Se(o), Ie);
              return;
            case Ne:
              isNaN(o) || e.push(ze, d, pt, Se(o), Ie);
              break;
            case xe:
              !isNaN(o) && o >= 1 && e.push(ze, d, pt, Se(o), Ie);
              break;
            default:
              l.sanitizeURL && (me(o, c), o = "" + o, Hn(o)), e.push(ze, d, pt, Se(o), Ie);
          }
        } else if (ot(r)) {
          switch (typeof o) {
            case "function":
            case "symbol":
              return;
            case "boolean": {
              var m = r.toLowerCase().slice(0, 5);
              if (m !== "data-" && m !== "aria-")
                return;
            }
          }
          e.push(ze, r, pt, Se(o), Ie);
        }
      }
    }
    var Be = ">", a = "/>";
    function u(e, t, r) {
      if (t != null) {
        if (r != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof t != "object" || !("__html" in t))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        var o = t.__html;
        o != null && (Ae(o), e.push("" + o));
      }
    }
    var p = !1, g = !1, w = !1, y = !1, C = !1, D = !1, L = !1;
    function U(e, t) {
      {
        var r = e[t];
        if (r != null) {
          var o = lt(r);
          e.multiple && !o ? h("The `%s` prop supplied to <select> must be an array if `multiple` is true.", t) : !e.multiple && o && h("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.", t);
        }
      }
    }
    function B(e, t, r) {
      ke("select", t), U(t, "value"), U(t, "defaultValue"), t.value !== void 0 && t.defaultValue !== void 0 && !w && (h("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), w = !0), e.push(vt("select"));
      var o = null, l = null;
      for (var c in t)
        if (ne.call(t, c)) {
          var d = t[c];
          if (d == null)
            continue;
          switch (c) {
            case "children":
              o = d;
              break;
            case "dangerouslySetInnerHTML":
              l = d;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              be(e, r, c, d);
              break;
          }
        }
      return e.push(Be), u(e, l, o), o;
    }
    function V(e) {
      var t = "";
      return ce.Children.forEach(e, function(r) {
        r != null && (t += r, !C && typeof r != "string" && typeof r != "number" && (C = !0, h("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }), t;
    }
    var Pe = ' selected=""';
    function Fe(e, t, r, o) {
      var l = o.selectedValue;
      e.push(vt("option"));
      var c = null, d = null, m = null, S = null;
      for (var R in t)
        if (ne.call(t, R)) {
          var I = t[R];
          if (I == null)
            continue;
          switch (R) {
            case "children":
              c = I;
              break;
            case "selected":
              m = I, L || (h("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), L = !0);
              break;
            case "dangerouslySetInnerHTML":
              S = I;
              break;
            case "value":
              d = I;
            default:
              be(e, r, R, I);
              break;
          }
        }
      if (l != null) {
        var M;
        if (d !== null ? (me(d, "value"), M = "" + d) : (S !== null && (D || (D = !0, h("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."))), M = V(c)), lt(l))
          for (var j = 0; j < l.length; j++) {
            me(l[j], "value");
            var G = "" + l[j];
            if (G === M) {
              e.push(Pe);
              break;
            }
          }
        else
          me(l, "select.value"), "" + l === M && e.push(Pe);
      } else m && e.push(Pe);
      return e.push(Be), u(e, S, c), c;
    }
    function De(e, t, r) {
      ke("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !g && (h("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", t.type), g = !0), t.value !== void 0 && t.defaultValue !== void 0 && !p && (h("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", t.type), p = !0), e.push(vt("input"));
      var o = null, l = null, c = null, d = null;
      for (var m in t)
        if (ne.call(t, m)) {
          var S = t[m];
          if (S == null)
            continue;
          switch (m) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error("input is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            case "defaultChecked":
              d = S;
              break;
            case "defaultValue":
              l = S;
              break;
            case "checked":
              c = S;
              break;
            case "value":
              o = S;
              break;
            default:
              be(e, r, m, S);
              break;
          }
        }
      return c !== null ? be(e, r, "checked", c) : d !== null && be(e, r, "checked", d), o !== null ? be(e, r, "value", o) : l !== null && be(e, r, "value", l), e.push(a), null;
    }
    function Ut(e, t, r) {
      ke("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !y && (h("Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components"), y = !0), e.push(vt("textarea"));
      var o = null, l = null, c = null;
      for (var d in t)
        if (ne.call(t, d)) {
          var m = t[d];
          if (m == null)
            continue;
          switch (d) {
            case "children":
              c = m;
              break;
            case "value":
              o = m;
              break;
            case "defaultValue":
              l = m;
              break;
            case "dangerouslySetInnerHTML":
              throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
            default:
              be(e, r, d, m);
              break;
          }
        }
      if (o === null && l !== null && (o = l), e.push(Be), c != null) {
        if (h("Use the `defaultValue` or `value` props instead of setting children on <textarea>."), o != null)
          throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
        if (lt(c)) {
          if (c.length > 1)
            throw new Error("<textarea> can only have at most one child.");
          Ae(c[0]), o = "" + c[0];
        }
        Ae(c), o = "" + c;
      }
      return typeof o == "string" && o[0] === `
` && e.push(er), o !== null && (me(o, "value"), e.push(ct("" + o))), null;
    }
    function ht(e, t, r, o) {
      e.push(vt(r));
      for (var l in t)
        if (ne.call(t, l)) {
          var c = t[l];
          if (c == null)
            continue;
          switch (l) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error(r + " is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            default:
              be(e, o, l, c);
              break;
          }
        }
      return e.push(a), null;
    }
    function br(e, t, r) {
      e.push(vt("menuitem"));
      for (var o in t)
        if (ne.call(t, o)) {
          var l = t[o];
          if (l == null)
            continue;
          switch (o) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error("menuitems cannot have `children` nor `dangerouslySetInnerHTML`.");
            default:
              be(e, r, o, l);
              break;
          }
        }
      return e.push(Be), null;
    }
    function Ht(e, t, r) {
      e.push(vt("title"));
      var o = null;
      for (var l in t)
        if (ne.call(t, l)) {
          var c = t[l];
          if (c == null)
            continue;
          switch (l) {
            case "children":
              o = c;
              break;
            case "dangerouslySetInnerHTML":
              throw new Error("`dangerouslySetInnerHTML` does not make sense on <title>.");
            default:
              be(e, r, l, c);
              break;
          }
        }
      e.push(Be);
      {
        var d = Array.isArray(o) && o.length < 2 ? o[0] || null : o;
        Array.isArray(o) && o.length > 1 ? h("A title element received an array with more than 1 element as children. In browsers title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : d != null && d.$$typeof != null ? h("A title element received a React element for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : d != null && typeof d != "string" && typeof d != "number" && h("A title element received a value that was not a string or number for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering");
      }
      return o;
    }
    function qt(e, t, r, o) {
      e.push(vt(r));
      var l = null, c = null;
      for (var d in t)
        if (ne.call(t, d)) {
          var m = t[d];
          if (m == null)
            continue;
          switch (d) {
            case "children":
              l = m;
              break;
            case "dangerouslySetInnerHTML":
              c = m;
              break;
            default:
              be(e, o, d, m);
              break;
          }
        }
      return e.push(Be), u(e, c, l), typeof l == "string" ? (e.push(ct(l)), null) : l;
    }
    function wt(e, t, r, o) {
      e.push(vt(r));
      var l = null, c = null;
      for (var d in t)
        if (ne.call(t, d)) {
          var m = t[d];
          if (m == null)
            continue;
          switch (d) {
            case "children":
              l = m;
              break;
            case "dangerouslySetInnerHTML":
              c = m;
              break;
            case "style":
              yr(e, o, m);
              break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
              break;
            default:
              ot(d) && typeof m != "function" && typeof m != "symbol" && e.push(ze, d, pt, Se(m), Ie);
              break;
          }
        }
      return e.push(Be), u(e, c, l), l;
    }
    var er = `
`;
    function wa(e, t, r, o) {
      e.push(vt(r));
      var l = null, c = null;
      for (var d in t)
        if (ne.call(t, d)) {
          var m = t[d];
          if (m == null)
            continue;
          switch (d) {
            case "children":
              l = m;
              break;
            case "dangerouslySetInnerHTML":
              c = m;
              break;
            default:
              be(e, o, d, m);
              break;
          }
        }
      if (e.push(Be), c != null) {
        if (l != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof c != "object" || !("__html" in c))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        var S = c.__html;
        S != null && (typeof S == "string" && S.length > 0 && S[0] === `
` ? e.push(er, S) : (Ae(S), e.push("" + S)));
      }
      return typeof l == "string" && l[0] === `
` && e.push(er), l;
    }
    var xa = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, pn = /* @__PURE__ */ new Map();
    function vt(e) {
      var t = pn.get(e);
      if (t === void 0) {
        if (!xa.test(e))
          throw new Error("Invalid tag: " + e);
        t = "<" + e, pn.set(e, t);
      }
      return t;
    }
    var ka = "<!DOCTYPE html>";
    function xt(e, t, r, o, l) {
      switch (Zt(t, r), an(t, r), ln(t, r, null), !r.suppressContentEditableWarning && r.contentEditable && r.children != null && h("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), l.insertionMode !== st && l.insertionMode !== gr && t.indexOf("-") === -1 && typeof r.is != "string" && t.toLowerCase() !== t && h("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", t), t) {
        case "select":
          return B(e, r, o);
        case "option":
          return Fe(e, r, o, l);
        case "textarea":
          return Ut(e, r, o);
        case "input":
          return De(e, r, o);
        case "menuitem":
          return br(e, r, o);
        case "title":
          return Ht(e, r, o);
        case "listing":
        case "pre":
          return wa(e, r, t, o);
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          return ht(e, r, t, o);
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return qt(e, r, t, o);
        case "html":
          return l.insertionMode === At && e.push(ka), qt(e, r, t, o);
        default:
          return t.indexOf("-") === -1 && typeof r.is != "string" ? qt(e, r, t, o) : wt(e, r, t, o);
      }
    }
    var zn = "</", hn = ">";
    function q(e, t, r) {
      switch (t) {
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "input":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          break;
        default:
          e.push(zn, t, hn);
      }
    }
    function tr(e, t) {
      for (var r = t.bootstrapChunks, o = 0; o < r.length - 1; o++)
        k(e, r[o]);
      return o < r.length ? T(e, r[o]) : !0;
    }
    var vn = '<template id="', rr = '"></template>';
    function jt(e, t, r) {
      k(e, vn), k(e, t.placeholderPrefix);
      var o = r.toString(16);
      return k(e, o), T(e, rr);
    }
    var gn = "<!--$-->", zt = '<!--$?--><template id="', Xe = '"></template>', Wn = "<!--$!-->", Wr = "<!--/$-->", ko = "<template", mn = '"', Co = ' data-dgst="', Ca = ' data-msg="', Ta = ' data-stck="', yn = "></template>";
    function To(e, t) {
      return T(e, gn);
    }
    function $r(e, t, r) {
      if (k(e, zt), r === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return k(e, r), T(e, Xe);
    }
    function $n(e, t, r, o, l) {
      var c;
      return c = T(e, Wn), k(e, ko), r && (k(e, Co), k(e, Se(r)), k(e, mn)), o && (k(e, Ca), k(e, Se(o)), k(e, mn)), l && (k(e, Ta), k(e, Se(l)), k(e, mn)), c = T(e, yn), c;
    }
    function Ea(e, t) {
      return T(e, Wr);
    }
    function wr(e, t) {
      return T(e, Wr);
    }
    function Nn(e, t) {
      return T(e, Wr);
    }
    var Vn = '<div hidden id="', xr = '">', Nr = "</div>", Sn = '<svg aria-hidden="true" style="display:none" id="', Eo = '">', Ro = "</svg>", Io = '<math aria-hidden="true" style="display:none" id="', bn = '">', Ue = "</math>", Po = '<table hidden id="', wn = '">', Ra = "</table>", Fo = '<table hidden><tbody id="', xn = '">', Do = "</tbody></table>", Ao = '<table hidden><tr id="', kn = '">', Cn = "</tr></table>", _o = '<table hidden><colgroup id="', Mo = '">', Oo = "</colgroup></table>";
    function Yn(e, t, r, o) {
      switch (r.insertionMode) {
        case At:
        case Oe:
          return k(e, Vn), k(e, t.segmentPrefix), k(e, o.toString(16)), T(e, xr);
        case st:
          return k(e, Sn), k(e, t.segmentPrefix), k(e, o.toString(16)), T(e, Eo);
        case gr:
          return k(e, Io), k(e, t.segmentPrefix), k(e, o.toString(16)), T(e, bn);
        case _t:
          return k(e, Po), k(e, t.segmentPrefix), k(e, o.toString(16)), T(e, wn);
        case Mt:
          return k(e, Fo), k(e, t.segmentPrefix), k(e, o.toString(16)), T(e, xn);
        case ut:
          return k(e, Ao), k(e, t.segmentPrefix), k(e, o.toString(16)), T(e, kn);
        case Ot:
          return k(e, _o), k(e, t.segmentPrefix), k(e, o.toString(16)), T(e, Mo);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    function Lo(e, t) {
      switch (t.insertionMode) {
        case At:
        case Oe:
          return T(e, Nr);
        case st:
          return T(e, Ro);
        case gr:
          return T(e, Ue);
        case _t:
          return T(e, Ra);
        case Mt:
          return T(e, Do);
        case ut:
          return T(e, Cn);
        case Ot:
          return T(e, Oo);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    var i = "function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)}", s = 'function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}}', f = 'function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())}', v = i + ';$RS("', x = '$RS("', b = '","', E = '")<\/script>';
    function A(e, t, r) {
      k(e, t.startInlineScript), t.sentCompleteSegmentFunction ? k(e, x) : (t.sentCompleteSegmentFunction = !0, k(e, v)), k(e, t.segmentPrefix);
      var o = r.toString(16);
      return k(e, o), k(e, b), k(e, t.placeholderPrefix), k(e, o), T(e, E);
    }
    var H = s + ';$RC("', N = '$RC("', $ = '","', te = '")<\/script>';
    function He(e, t, r, o) {
      if (k(e, t.startInlineScript), t.sentCompleteBoundaryFunction ? k(e, N) : (t.sentCompleteBoundaryFunction = !0, k(e, H)), r === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      var l = o.toString(16);
      return k(e, r), k(e, $), k(e, t.segmentPrefix), k(e, l), T(e, te);
    }
    var Ze = f + ';$RX("', Je = '$RX("', Tn = '"', Bo = ")<\/script>", Vr = ",";
    function el(e, t, r, o, l, c) {
      if (k(e, t.startInlineScript), t.sentClientRenderFunction ? k(e, Je) : (t.sentClientRenderFunction = !0, k(e, Ze)), r === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return k(e, r), k(e, Tn), (o || l || c) && (k(e, Vr), k(e, Ia(o || ""))), (l || c) && (k(e, Vr), k(e, Ia(l || ""))), c && (k(e, Vr), k(e, Ia(c))), T(e, Bo);
    }
    var tl = /[<\u2028\u2029]/g;
    function Ia(e) {
      var t = JSON.stringify(e);
      return t.replace(tl, function(r) {
        switch (r) {
          case "<":
            return "\\u003c";
          case "\u2028":
            return "\\u2028";
          case "\u2029":
            return "\\u2029";
          default:
            throw new Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
        }
      });
    }
    function rl(e, t) {
      var r = vr(t);
      return {
        // Keep this in sync with ReactDOMServerFormatConfig
        bootstrapChunks: r.bootstrapChunks,
        startInlineScript: r.startInlineScript,
        placeholderPrefix: r.placeholderPrefix,
        segmentPrefix: r.segmentPrefix,
        boundaryPrefix: r.boundaryPrefix,
        idPrefix: r.idPrefix,
        nextSuspenseID: r.nextSuspenseID,
        sentCompleteSegmentFunction: r.sentCompleteSegmentFunction,
        sentCompleteBoundaryFunction: r.sentCompleteBoundaryFunction,
        sentClientRenderFunction: r.sentClientRenderFunction,
        // This is an extra field for the legacy renderer
        generateStaticMarkup: e
      };
    }
    function nl() {
      return {
        insertionMode: Oe,
        // We skip the root mode because we don't want to emit the DOCTYPE in legacy mode.
        selectedValue: null
      };
    }
    function di(e, t, r, o) {
      return r.generateStaticMarkup ? (e.push(Se(t)), !1) : Lt(e, t, r, o);
    }
    function pi(e, t, r, o) {
      if (!t.generateStaticMarkup)
        return mr(e, t, r, o);
    }
    function ol(e, t) {
      return t.generateStaticMarkup ? !0 : To(e);
    }
    function al(e, t, r, o, l) {
      return t.generateStaticMarkup ? !0 : $n(e, t, r, o, l);
    }
    function il(e, t) {
      return t.generateStaticMarkup ? !0 : Ea(e);
    }
    function ll(e, t) {
      return t.generateStaticMarkup ? !0 : Nn(e);
    }
    var We = Object.assign, sl = Symbol.for("react.element"), hi = Symbol.for("react.portal"), Uo = Symbol.for("react.fragment"), Qe = Symbol.for("react.strict_mode"), vi = Symbol.for("react.profiler"), Ho = Symbol.for("react.provider"), jo = Symbol.for("react.context"), zo = Symbol.for("react.forward_ref"), Wo = Symbol.for("react.suspense"), Gn = Symbol.for("react.suspense_list"), Xn = Symbol.for("react.memo"), En = Symbol.for("react.lazy"), Pa = Symbol.for("react.scope"), Fa = Symbol.for("react.debug_trace_mode"), Da = Symbol.for("react.legacy_hidden"), $o = Symbol.for("react.default_value"), gi = Symbol.iterator, ul = "@@iterator";
    function cl(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = gi && e[gi] || e[ul];
      return typeof t == "function" ? t : null;
    }
    function fl(e, t, r) {
      var o = e.displayName;
      if (o)
        return o;
      var l = t.displayName || t.name || "";
      return l !== "" ? r + "(" + l + ")" : r;
    }
    function Aa(e) {
      return e.displayName || "Context";
    }
    function le(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && h("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case Uo:
          return "Fragment";
        case hi:
          return "Portal";
        case vi:
          return "Profiler";
        case Qe:
          return "StrictMode";
        case Wo:
          return "Suspense";
        case Gn:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case jo:
            var t = e;
            return Aa(t) + ".Consumer";
          case Ho:
            var r = e;
            return Aa(r._context) + ".Provider";
          case zo:
            return fl(e, e.render, "ForwardRef");
          case Xn:
            var o = e.displayName || null;
            return o !== null ? o : le(e.type) || "Memo";
          case En: {
            var l = e, c = l._payload, d = l._init;
            try {
              return le(d(c));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Zn = 0, mi, _a, oe, Rn, Ma, Oa, La;
    function Ba() {
    }
    Ba.__reactDisabledLog = !0;
    function yi() {
      {
        if (Zn === 0) {
          mi = console.log, _a = console.info, oe = console.warn, Rn = console.error, Ma = console.group, Oa = console.groupCollapsed, La = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Ba,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        Zn++;
      }
    }
    function Si() {
      {
        if (Zn--, Zn === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: We({}, e, {
              value: mi
            }),
            info: We({}, e, {
              value: _a
            }),
            warn: We({}, e, {
              value: oe
            }),
            error: We({}, e, {
              value: Rn
            }),
            group: We({}, e, {
              value: Ma
            }),
            groupCollapsed: We({}, e, {
              value: Oa
            }),
            groupEnd: We({}, e, {
              value: La
            })
          });
        }
        Zn < 0 && h("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var No = z.ReactCurrentDispatcher, Vo;
    function Jn(e, t, r) {
      {
        if (Vo === void 0)
          try {
            throw Error();
          } catch (l) {
            var o = l.stack.trim().match(/\n( *(at )?)/);
            Vo = o && o[1] || "";
          }
        return `
` + Vo + e;
      }
    }
    var Ua = !1, In;
    {
      var Ha = typeof WeakMap == "function" ? WeakMap : Map;
      In = new Ha();
    }
    function Yr(e, t) {
      if (!e || Ua)
        return "";
      {
        var r = In.get(e);
        if (r !== void 0)
          return r;
      }
      var o;
      Ua = !0;
      var l = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var c;
      c = No.current, No.current = null, yi();
      try {
        if (t) {
          var d = function() {
            throw Error();
          };
          if (Object.defineProperty(d.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(d, []);
            } catch (Te) {
              o = Te;
            }
            Reflect.construct(e, [], d);
          } else {
            try {
              d.call();
            } catch (Te) {
              o = Te;
            }
            e.call(d.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Te) {
            o = Te;
          }
          e();
        }
      } catch (Te) {
        if (Te && o && typeof Te.stack == "string") {
          for (var m = Te.stack.split(`
`), S = o.stack.split(`
`), R = m.length - 1, I = S.length - 1; R >= 1 && I >= 0 && m[R] !== S[I]; )
            I--;
          for (; R >= 1 && I >= 0; R--, I--)
            if (m[R] !== S[I]) {
              if (R !== 1 || I !== 1)
                do
                  if (R--, I--, I < 0 || m[R] !== S[I]) {
                    var M = `
` + m[R].replace(" at new ", " at ");
                    return e.displayName && M.includes("<anonymous>") && (M = M.replace("<anonymous>", e.displayName)), typeof e == "function" && In.set(e, M), M;
                  }
                while (R >= 1 && I >= 0);
              break;
            }
        }
      } finally {
        Ua = !1, No.current = c, Si(), Error.prepareStackTrace = l;
      }
      var j = e ? e.displayName || e.name : "", G = j ? Jn(j) : "";
      return typeof e == "function" && In.set(e, G), G;
    }
    function ja(e, t, r) {
      return Yr(e, !0);
    }
    function Qn(e, t, r) {
      return Yr(e, !1);
    }
    function dl(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Kn(e, t, r) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Yr(e, dl(e));
      if (typeof e == "string")
        return Jn(e);
      switch (e) {
        case Wo:
          return Jn("Suspense");
        case Gn:
          return Jn("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case zo:
            return Qn(e.render);
          case Xn:
            return Kn(e.type, t, r);
          case En: {
            var o = e, l = o._payload, c = o._init;
            try {
              return Kn(c(l), t, r);
            } catch {
            }
          }
        }
      return "";
    }
    var bi = {}, za = z.ReactDebugCurrentFrame;
    function Yo(e) {
      if (e) {
        var t = e._owner, r = Kn(e.type, e._source, t ? t.type : null);
        za.setExtraStackFrame(r);
      } else
        za.setExtraStackFrame(null);
    }
    function Go(e, t, r, o, l) {
      {
        var c = Function.call.bind(ne);
        for (var d in e)
          if (c(e, d)) {
            var m = void 0;
            try {
              if (typeof e[d] != "function") {
                var S = Error((o || "React class") + ": " + r + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw S.name = "Invariant Violation", S;
              }
              m = e[d](t, d, o, r, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (R) {
              m = R;
            }
            m && !(m instanceof Error) && (Yo(l), h("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", r, d, typeof m), Yo(null)), m instanceof Error && !(m.message in bi) && (bi[m.message] = !0, Yo(l), h("Failed %s type: %s", r, m.message), Yo(null));
          }
      }
    }
    var Xo;
    Xo = {};
    var qn = {};
    Object.freeze(qn);
    function eo(e, t) {
      {
        var r = e.contextTypes;
        if (!r)
          return qn;
        var o = {};
        for (var l in r)
          o[l] = t[l];
        {
          var c = le(e) || "Unknown";
          Go(r, o, "context", c);
        }
        return o;
      }
    }
    function wi(e, t, r, o) {
      {
        if (typeof e.getChildContext != "function") {
          {
            var l = le(t) || "Unknown";
            Xo[l] || (Xo[l] = !0, h("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", l, l));
          }
          return r;
        }
        var c = e.getChildContext();
        for (var d in c)
          if (!(d in o))
            throw new Error((le(t) || "Unknown") + '.getChildContext(): key "' + d + '" is not defined in childContextTypes.');
        {
          var m = le(t) || "Unknown";
          Go(o, c, "child context", m);
        }
        return We({}, r, c);
      }
    }
    var Gr;
    Gr = {};
    var Zo = null, kr = null;
    function Wa(e) {
      e.context._currentValue2 = e.parentValue;
    }
    function Xr(e) {
      e.context._currentValue2 = e.value;
    }
    function Jo(e, t) {
      if (e !== t) {
        Wa(e);
        var r = e.parent, o = t.parent;
        if (r === null) {
          if (o !== null)
            throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
        } else {
          if (o === null)
            throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
          Jo(r, o);
        }
        Xr(t);
      }
    }
    function Cr(e) {
      Wa(e);
      var t = e.parent;
      t !== null && Cr(t);
    }
    function Qo(e) {
      var t = e.parent;
      t !== null && Qo(t), Xr(e);
    }
    function Ko(e, t) {
      Wa(e);
      var r = e.parent;
      if (r === null)
        throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      r.depth === t.depth ? Jo(r, t) : Ko(r, t);
    }
    function to(e, t) {
      var r = t.parent;
      if (r === null)
        throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      e.depth === r.depth ? Jo(e, r) : to(e, r), Xr(t);
    }
    function ro(e) {
      var t = kr, r = e;
      t !== r && (t === null ? Qo(r) : r === null ? Cr(t) : t.depth === r.depth ? Jo(t, r) : t.depth > r.depth ? Ko(t, r) : to(t, r), kr = r);
    }
    function xi(e, t) {
      var r;
      r = e._currentValue2, e._currentValue2 = t, e._currentRenderer2 !== void 0 && e._currentRenderer2 !== null && e._currentRenderer2 !== Gr && h("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), e._currentRenderer2 = Gr;
      var o = kr, l = {
        parent: o,
        depth: o === null ? 0 : o.depth + 1,
        context: e,
        parentValue: r,
        value: t
      };
      return kr = l, l;
    }
    function ki(e) {
      var t = kr;
      if (t === null)
        throw new Error("Tried to pop a Context at the root of the app. This is a bug in React.");
      t.context !== e && h("The parent context is not the expected context. This is probably a bug in React.");
      {
        var r = t.parentValue;
        r === $o ? t.context._currentValue2 = t.context._defaultValue : t.context._currentValue2 = r, e._currentRenderer2 !== void 0 && e._currentRenderer2 !== null && e._currentRenderer2 !== Gr && h("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), e._currentRenderer2 = Gr;
      }
      return kr = t.parent;
    }
    function Ci() {
      return kr;
    }
    function Tr(e) {
      var t = e._currentValue2;
      return t;
    }
    function $a(e) {
      return e._reactInternals;
    }
    function pl(e, t) {
      e._reactInternals = t;
    }
    var Ti = {}, Pn = {}, no, Na, qo, ea, ta, Fn, oo, ao, ra;
    {
      no = /* @__PURE__ */ new Set(), Na = /* @__PURE__ */ new Set(), qo = /* @__PURE__ */ new Set(), oo = /* @__PURE__ */ new Set(), ea = /* @__PURE__ */ new Set(), ao = /* @__PURE__ */ new Set(), ra = /* @__PURE__ */ new Set();
      var io = /* @__PURE__ */ new Set();
      Fn = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var r = t + "_" + e;
          io.has(r) || (io.add(r), h("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, ta = function(e, t) {
        if (t === void 0) {
          var r = le(e) || "Component";
          ea.has(r) || (ea.add(r), h("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", r));
        }
      };
    }
    function na(e, t) {
      {
        var r = e.constructor, o = r && le(r) || "ReactClass", l = o + "." + t;
        if (Ti[l])
          return;
        h(`%s(...): Can only update a mounting component. This usually means you called %s() outside componentWillMount() on the server. This is a no-op.

Please check the code for the %s component.`, t, t, o), Ti[l] = !0;
      }
    }
    var oa = {
      isMounted: function(e) {
        return !1;
      },
      enqueueSetState: function(e, t, r) {
        var o = $a(e);
        o.queue === null ? na(e, "setState") : (o.queue.push(t), r != null && Fn(r, "setState"));
      },
      enqueueReplaceState: function(e, t, r) {
        var o = $a(e);
        o.replace = !0, o.queue = [t], r != null && Fn(r, "setState");
      },
      enqueueForceUpdate: function(e, t) {
        var r = $a(e);
        r.queue === null ? na(e, "forceUpdate") : t != null && Fn(t, "setState");
      }
    };
    function Va(e, t, r, o, l) {
      var c = r(l, o);
      ta(t, c);
      var d = c == null ? o : We({}, o, c);
      return d;
    }
    function Ei(e, t, r) {
      var o = qn, l = e.contextType;
      if ("contextType" in e) {
        var c = (
          // Allow null for conditional declaration
          l === null || l !== void 0 && l.$$typeof === jo && l._context === void 0
        );
        if (!c && !ra.has(e)) {
          ra.add(e);
          var d = "";
          l === void 0 ? d = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof l != "object" ? d = " However, it is set to a " + typeof l + "." : l.$$typeof === Ho ? d = " Did you accidentally pass the Context.Provider instead?" : l._context !== void 0 ? d = " Did you accidentally pass the Context.Consumer instead?" : d = " However, it is set to an object with keys {" + Object.keys(l).join(", ") + "}.", h("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", le(e) || "Component", d);
        }
      }
      typeof l == "object" && l !== null ? o = Tr(l) : o = r;
      var m = new e(t, o);
      {
        if (typeof e.getDerivedStateFromProps == "function" && (m.state === null || m.state === void 0)) {
          var S = le(e) || "Component";
          no.has(S) || (no.add(S), h("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", S, m.state === null ? "null" : "undefined", S));
        }
        if (typeof e.getDerivedStateFromProps == "function" || typeof m.getSnapshotBeforeUpdate == "function") {
          var R = null, I = null, M = null;
          if (typeof m.componentWillMount == "function" && m.componentWillMount.__suppressDeprecationWarning !== !0 ? R = "componentWillMount" : typeof m.UNSAFE_componentWillMount == "function" && (R = "UNSAFE_componentWillMount"), typeof m.componentWillReceiveProps == "function" && m.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? I = "componentWillReceiveProps" : typeof m.UNSAFE_componentWillReceiveProps == "function" && (I = "UNSAFE_componentWillReceiveProps"), typeof m.componentWillUpdate == "function" && m.componentWillUpdate.__suppressDeprecationWarning !== !0 ? M = "componentWillUpdate" : typeof m.UNSAFE_componentWillUpdate == "function" && (M = "UNSAFE_componentWillUpdate"), R !== null || I !== null || M !== null) {
            var j = le(e) || "Component", G = typeof e.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            qo.has(j) || (qo.add(j), h(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, j, G, R !== null ? `
  ` + R : "", I !== null ? `
  ` + I : "", M !== null ? `
  ` + M : ""));
          }
        }
      }
      return m;
    }
    function Ri(e, t, r) {
      {
        var o = le(t) || "Component", l = e.render;
        l || (t.prototype && typeof t.prototype.render == "function" ? h("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", o) : h("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", o)), e.getInitialState && !e.getInitialState.isReactClassApproved && !e.state && h("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", o), e.getDefaultProps && !e.getDefaultProps.isReactClassApproved && h("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", o), e.propTypes && h("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", o), e.contextType && h("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", o), e.contextTypes && h("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", o), t.contextType && t.contextTypes && !ao.has(t) && (ao.add(t), h("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", o)), typeof e.componentShouldUpdate == "function" && h("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", o), t.prototype && t.prototype.isPureReactComponent && typeof e.shouldComponentUpdate < "u" && h("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", le(t) || "A pure component"), typeof e.componentDidUnmount == "function" && h("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", o), typeof e.componentDidReceiveProps == "function" && h("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", o), typeof e.componentWillRecieveProps == "function" && h("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", o), typeof e.UNSAFE_componentWillRecieveProps == "function" && h("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", o);
        var c = e.props !== r;
        e.props !== void 0 && c && h("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", o, o), e.defaultProps && h("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", o, o), typeof e.getSnapshotBeforeUpdate == "function" && typeof e.componentDidUpdate != "function" && !Na.has(t) && (Na.add(t), h("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", le(t))), typeof e.getDerivedStateFromProps == "function" && h("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", o), typeof e.getDerivedStateFromError == "function" && h("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", o), typeof t.getSnapshotBeforeUpdate == "function" && h("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", o);
        var d = e.state;
        d && (typeof d != "object" || lt(d)) && h("%s.state: must be set to an object or null", o), typeof e.getChildContext == "function" && typeof t.childContextTypes != "object" && h("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", o);
      }
    }
    function Ii(e, t) {
      var r = t.state;
      if (typeof t.componentWillMount == "function") {
        if (t.componentWillMount.__suppressDeprecationWarning !== !0) {
          var o = le(e) || "Unknown";
          Pn[o] || (Q(
            // keep this warning in sync with ReactStrictModeWarning.js
            `componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code from componentWillMount to componentDidMount (preferred in most cases) or the constructor.

Please update the following components: %s`,
            o
          ), Pn[o] = !0);
        }
        t.componentWillMount();
      }
      typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), r !== t.state && (h("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", le(e) || "Component"), oa.enqueueReplaceState(t, t.state, null));
    }
    function hl(e, t, r, o) {
      if (e.queue !== null && e.queue.length > 0) {
        var l = e.queue, c = e.replace;
        if (e.queue = null, e.replace = !1, c && l.length === 1)
          t.state = l[0];
        else {
          for (var d = c ? l[0] : t.state, m = !0, S = c ? 1 : 0; S < l.length; S++) {
            var R = l[S], I = typeof R == "function" ? R.call(t, d, r, o) : R;
            I != null && (m ? (m = !1, d = We({}, d, I)) : We(d, I));
          }
          t.state = d;
        }
      } else
        e.queue = null;
    }
    function Pi(e, t, r, o) {
      Ri(e, t, r);
      var l = e.state !== void 0 ? e.state : null;
      e.updater = oa, e.props = r, e.state = l;
      var c = {
        queue: [],
        replace: !1
      };
      pl(e, c);
      var d = t.contextType;
      if (typeof d == "object" && d !== null ? e.context = Tr(d) : e.context = o, e.state === r) {
        var m = le(t) || "Component";
        oo.has(m) || (oo.add(m), h("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", m));
      }
      var S = t.getDerivedStateFromProps;
      typeof S == "function" && (e.state = Va(e, t, S, l, r)), typeof t.getDerivedStateFromProps != "function" && typeof e.getSnapshotBeforeUpdate != "function" && (typeof e.UNSAFE_componentWillMount == "function" || typeof e.componentWillMount == "function") && (Ii(t, e), hl(c, e, r, o));
    }
    var vl = {
      id: 1,
      overflow: ""
    };
    function gl(e) {
      var t = e.overflow, r = e.id, o = r & ~ml(r);
      return o.toString(32) + t;
    }
    function Ya(e, t, r) {
      var o = e.id, l = e.overflow, c = lo(o) - 1, d = o & ~(1 << c), m = r + 1, S = lo(t) + c;
      if (S > 30) {
        var R = c - c % 5, I = (1 << R) - 1, M = (d & I).toString(32), j = d >> R, G = c - R, Te = lo(t) + G, tn = m << G, rn = tn | j, lr = M + l;
        return {
          id: 1 << Te | rn,
          overflow: lr
        };
      } else {
        var Bn = m << c, Zl = Bn | d, ls = l;
        return {
          id: 1 << S | Zl,
          overflow: ls
        };
      }
    }
    function lo(e) {
      return 32 - yl(e);
    }
    function ml(e) {
      return 1 << lo(e) - 1;
    }
    var yl = Math.clz32 ? Math.clz32 : Sl, Ga = Math.log, aa = Math.LN2;
    function Sl(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (Ga(t) / aa | 0) | 0;
    }
    function bl(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var wl = typeof Object.is == "function" ? Object.is : bl, nr = null, Xa = null, ia = null, re = null, Ke = !1, Dn = !1, Zr = 0, Y = null, Er = 0, la = 25, qe = !1, et;
    function Wt() {
      if (nr === null)
        throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
      return qe && h("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks"), nr;
    }
    function xl(e, t) {
      if (t === null)
        return h("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", et), !1;
      e.length !== t.length && h(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, et, "[" + e.join(", ") + "]", "[" + t.join(", ") + "]");
      for (var r = 0; r < t.length && r < e.length; r++)
        if (!wl(e[r], t[r]))
          return !1;
      return !0;
    }
    function kt() {
      if (Er > 0)
        throw new Error("Rendered more hooks than during the previous render");
      return {
        memoizedState: null,
        queue: null,
        next: null
      };
    }
    function Rr() {
      return re === null ? ia === null ? (Ke = !1, ia = re = kt()) : (Ke = !0, re = ia) : re.next === null ? (Ke = !1, re = re.next = kt()) : (Ke = !0, re = re.next), re;
    }
    function Jr(e, t) {
      nr = t, Xa = e, qe = !1, Zr = 0;
    }
    function kl(e, t, r, o) {
      for (; Dn; )
        Dn = !1, Zr = 0, Er += 1, re = null, r = e(t, o);
      return so(), r;
    }
    function Za() {
      var e = Zr !== 0;
      return e;
    }
    function so() {
      qe = !1, nr = null, Xa = null, Dn = !1, ia = null, Er = 0, Y = null, re = null;
    }
    function Cl(e) {
      return qe && h("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."), Tr(e);
    }
    function Tl(e) {
      return et = "useContext", Wt(), Tr(e);
    }
    function sa(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function Ja(e) {
      return et = "useState", Fi(
        sa,
        // useReducer has a special case to support lazy useState initializers
        e
      );
    }
    function Fi(e, t, r) {
      if (e !== sa && (et = "useReducer"), nr = Wt(), re = Rr(), Ke) {
        var o = re.queue, l = o.dispatch;
        if (Y !== null) {
          var c = Y.get(o);
          if (c !== void 0) {
            Y.delete(o);
            var d = re.memoizedState, m = c;
            do {
              var S = m.action;
              qe = !0, d = e(d, S), qe = !1, m = m.next;
            } while (m !== null);
            return re.memoizedState = d, [d, l];
          }
        }
        return [re.memoizedState, l];
      } else {
        qe = !0;
        var R;
        e === sa ? R = typeof t == "function" ? t() : t : R = r !== void 0 ? r(t) : t, qe = !1, re.memoizedState = R;
        var I = re.queue = {
          last: null,
          dispatch: null
        }, M = I.dispatch = Ai.bind(null, nr, I);
        return [re.memoizedState, M];
      }
    }
    function Di(e, t) {
      nr = Wt(), re = Rr();
      var r = t === void 0 ? null : t;
      if (re !== null) {
        var o = re.memoizedState;
        if (o !== null && r !== null) {
          var l = o[1];
          if (xl(r, l))
            return o[0];
        }
      }
      qe = !0;
      var c = e();
      return qe = !1, re.memoizedState = [c, r], c;
    }
    function Qa(e) {
      nr = Wt(), re = Rr();
      var t = re.memoizedState;
      if (t === null) {
        var r = {
          current: e
        };
        return Object.seal(r), re.memoizedState = r, r;
      } else
        return t;
    }
    function El(e, t) {
      et = "useLayoutEffect", h("useLayoutEffect does nothing on the server, because its effect cannot be encoded into the server renderer's output format. This will lead to a mismatch between the initial, non-hydrated UI and the intended UI. To avoid this, useLayoutEffect should only be used in components that render exclusively on the client. See https://reactjs.org/link/uselayouteffect-ssr for common fixes.");
    }
    function Ai(e, t, r) {
      if (Er >= la)
        throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
      if (e === nr) {
        Dn = !0;
        var o = {
          action: r,
          next: null
        };
        Y === null && (Y = /* @__PURE__ */ new Map());
        var l = Y.get(t);
        if (l === void 0)
          Y.set(t, o);
        else {
          for (var c = l; c.next !== null; )
            c = c.next;
          c.next = o;
        }
      }
    }
    function _i(e, t) {
      return Di(function() {
        return e;
      }, t);
    }
    function Rl(e, t, r) {
      return Wt(), t(e._source);
    }
    function Il(e, t, r) {
      if (r === void 0)
        throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
      return r();
    }
    function Pl(e) {
      return Wt(), e;
    }
    function Fl() {
      throw new Error("startTransition cannot be called during server rendering.");
    }
    function Dl() {
      return Wt(), [!1, Fl];
    }
    function Al() {
      var e = Xa, t = gl(e.treeContext), r = Ka;
      if (r === null)
        throw new Error("Invalid hook call. Hooks can only be called inside of the body of a function component.");
      var o = Zr++;
      return ve(r, t, o);
    }
    function ua() {
    }
    var Mi = {
      readContext: Cl,
      useContext: Tl,
      useMemo: Di,
      useReducer: Fi,
      useRef: Qa,
      useState: Ja,
      useInsertionEffect: ua,
      useLayoutEffect: El,
      useCallback: _i,
      // useImperativeHandle is not run in the server environment
      useImperativeHandle: ua,
      // Effects are not run in the server environment.
      useEffect: ua,
      // Debugging effect
      useDebugValue: ua,
      useDeferredValue: Pl,
      useTransition: Dl,
      useId: Al,
      // Subscriptions are not setup in a server environment.
      useMutableSource: Rl,
      useSyncExternalStore: Il
    }, Ka = null;
    function Oi(e) {
      Ka = e;
    }
    function ca(e) {
      try {
        var t = "", r = e;
        do {
          switch (r.tag) {
            case 0:
              t += Jn(r.type, null, null);
              break;
            case 1:
              t += Qn(r.type, null, null);
              break;
            case 2:
              t += ja(r.type, null, null);
              break;
          }
          r = r.parent;
        } while (r);
        return t;
      } catch (o) {
        return `
Error generating stack: ` + o.message + `
` + o.stack;
      }
    }
    var fa = z.ReactCurrentDispatcher, uo = z.ReactDebugCurrentFrame, da = 0, An = 1, pa = 2, ha = 3, va = 4, _n = 0, qa = 1, Qr = 2, Li = 12800;
    function _l(e) {
      return console.error(e), null;
    }
    function Mn() {
    }
    function On(e, t, r, o, l, c, d, m, S) {
      var R = [], I = /* @__PURE__ */ new Set(), M = {
        destination: null,
        responseState: t,
        progressiveChunkSize: o === void 0 ? Li : o,
        status: _n,
        fatalError: null,
        nextSegmentId: 0,
        allPendingTasks: 0,
        pendingRootTasks: 0,
        completedRootSegment: null,
        abortableTasks: I,
        pingedTasks: R,
        clientRenderedBoundaries: [],
        completedBoundaries: [],
        partialBoundaries: [],
        onError: l === void 0 ? _l : l,
        onAllReady: Mn,
        onShellReady: d === void 0 ? Mn : d,
        onShellError: Mn,
        onFatalError: Mn
      }, j = ga(
        M,
        0,
        null,
        r,
        // Root segments are never embedded in Text on either edge
        !1,
        !1
      );
      j.parentFlushed = !0;
      var G = Kr(M, e, null, j, I, qn, Zo, vl);
      return R.push(G), M;
    }
    function Ml(e, t) {
      var r = e.pingedTasks;
      r.push(t), r.length === 1 && $e(function() {
        return ui(e);
      });
    }
    function Ol(e, t) {
      return {
        id: dn,
        rootSegmentID: -1,
        parentFlushed: !1,
        pendingTasks: 0,
        forceClientRender: !1,
        completedSegments: [],
        byteSize: 0,
        fallbackAbortableTasks: t,
        errorDigest: null
      };
    }
    function Kr(e, t, r, o, l, c, d, m) {
      e.allPendingTasks++, r === null ? e.pendingRootTasks++ : r.pendingTasks++;
      var S = {
        node: t,
        ping: function() {
          return Ml(e, S);
        },
        blockedBoundary: r,
        blockedSegment: o,
        abortSet: l,
        legacyContext: c,
        context: d,
        treeContext: m
      };
      return S.componentStack = null, l.add(S), S;
    }
    function ga(e, t, r, o, l, c) {
      return {
        status: da,
        id: -1,
        // lazily assigned later
        index: t,
        parentFlushed: !1,
        chunks: [],
        children: [],
        formatContext: o,
        boundary: r,
        lastPushedText: l,
        textEmbedded: c
      };
    }
    var or = null;
    function ei() {
      return or === null || or.componentStack === null ? "" : ca(or.componentStack);
    }
    function qr(e, t) {
      e.componentStack = {
        tag: 0,
        parent: e.componentStack,
        type: t
      };
    }
    function co(e, t) {
      e.componentStack = {
        tag: 1,
        parent: e.componentStack,
        type: t
      };
    }
    function ar(e, t) {
      e.componentStack = {
        tag: 2,
        parent: e.componentStack,
        type: t
      };
    }
    function $t(e) {
      e.componentStack === null ? h("Unexpectedly popped too many stack frames. This is a bug in React.") : e.componentStack = e.componentStack.parent;
    }
    var ir = null;
    function ma(e, t) {
      {
        var r;
        typeof t == "string" ? r = t : t && typeof t.message == "string" ? r = t.message : r = String(t);
        var o = ir || ei();
        ir = null, e.errorMessage = r, e.errorComponentStack = o;
      }
    }
    function fo(e, t) {
      var r = e.onError(t);
      if (r != null && typeof r != "string")
        throw new Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof r + '" instead');
      return r;
    }
    function Ct(e, t) {
      var r = e.onShellError;
      r(t);
      var o = e.onFatalError;
      o(t), e.destination !== null ? (e.status = Qr, fe(e.destination, t)) : (e.status = qa, e.fatalError = t);
    }
    function po(e, t, r) {
      qr(t, "Suspense");
      var o = t.blockedBoundary, l = t.blockedSegment, c = r.fallback, d = r.children, m = /* @__PURE__ */ new Set(), S = Ol(e, m), R = l.chunks.length, I = ga(
        e,
        R,
        S,
        l.formatContext,
        // boundaries never require text embedding at their edges because comment nodes bound them
        !1,
        !1
      );
      l.children.push(I), l.lastPushedText = !1;
      var M = ga(
        e,
        0,
        null,
        l.formatContext,
        // boundaries never require text embedding at their edges because comment nodes bound them
        !1,
        !1
      );
      M.parentFlushed = !0, t.blockedBoundary = S, t.blockedSegment = M;
      try {
        if (je(e, t, d), pi(M.chunks, e.responseState, M.lastPushedText, M.textEmbedded), M.status = An, Ln(S, M), S.pendingTasks === 0) {
          $t(t);
          return;
        }
      } catch (G) {
        M.status = va, S.forceClientRender = !0, S.errorDigest = fo(e, G), ma(S, G);
      } finally {
        t.blockedBoundary = o, t.blockedSegment = l;
      }
      var j = Kr(e, c, o, I, m, t.legacyContext, t.context, t.treeContext);
      j.componentStack = t.componentStack, e.pingedTasks.push(j), $t(t);
    }
    function ti(e, t, r, o) {
      qr(t, r);
      var l = t.blockedSegment, c = xt(l.chunks, r, o, e.responseState, l.formatContext);
      l.lastPushedText = !1;
      var d = l.formatContext;
      l.formatContext = fn(d, r, o), je(e, t, c), l.formatContext = d, q(l.chunks, r), l.lastPushedText = !1, $t(t);
    }
    function ho(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function vo(e, t, r, o, l) {
      var c = {};
      Jr(t, c);
      var d = r(o, l);
      return kl(r, o, d, l);
    }
    function Bi(e, t, r, o, l) {
      var c = r.render();
      r.props !== l && (ni || h("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", le(o) || "a component"), ni = !0);
      {
        var d = o.childContextTypes;
        if (d != null) {
          var m = t.legacyContext, S = wi(r, o, m, d);
          t.legacyContext = S, tt(e, t, c), t.legacyContext = m;
          return;
        }
      }
      tt(e, t, c);
    }
    function Ll(e, t, r, o) {
      ar(t, r);
      var l = eo(r, t.legacyContext), c = Ei(r, o, l);
      Pi(c, r, o, l), Bi(e, t, c, r, o), $t(t);
    }
    var Ui = {}, go = {}, ri = {}, Hi = {}, ni = !1, mo = {}, oi = !1, ai = !1, ii = !1;
    function ji(e, t, r, o) {
      var l;
      if (l = eo(r, t.legacyContext), co(t, r), r.prototype && typeof r.prototype.render == "function") {
        var c = le(r) || "Unknown";
        Ui[c] || (h("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", c, c), Ui[c] = !0);
      }
      var d = vo(e, t, r, o, l), m = Za();
      if (typeof d == "object" && d !== null && typeof d.render == "function" && d.$$typeof === void 0) {
        var S = le(r) || "Unknown";
        go[S] || (h("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", S, S, S), go[S] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof d == "object" && d !== null && typeof d.render == "function" && d.$$typeof === void 0
      ) {
        {
          var R = le(r) || "Unknown";
          go[R] || (h("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", R, R, R), go[R] = !0);
        }
        Pi(d, r, o, l), Bi(e, t, d, r, o);
      } else if (zi(r), m) {
        var I = t.treeContext, M = 1, j = 0;
        t.treeContext = Ya(I, M, j);
        try {
          tt(e, t, d);
        } finally {
          t.treeContext = I;
        }
      } else
        tt(e, t, d);
      $t(t);
    }
    function zi(e) {
      {
        if (e && e.childContextTypes && h("%s(...): childContextTypes cannot be defined on a function component.", e.displayName || e.name || "Component"), e.defaultProps !== void 0) {
          var t = le(e) || "Unknown";
          mo[t] || (h("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", t), mo[t] = !0);
        }
        if (typeof e.getDerivedStateFromProps == "function") {
          var r = le(e) || "Unknown";
          Hi[r] || (h("%s: Function components do not support getDerivedStateFromProps.", r), Hi[r] = !0);
        }
        if (typeof e.contextType == "object" && e.contextType !== null) {
          var o = le(e) || "Unknown";
          ri[o] || (h("%s: Function components do not support contextType.", o), ri[o] = !0);
        }
      }
    }
    function li(e, t) {
      if (e && e.defaultProps) {
        var r = We({}, t), o = e.defaultProps;
        for (var l in o)
          r[l] === void 0 && (r[l] = o[l]);
        return r;
      }
      return t;
    }
    function Wi(e, t, r, o, l) {
      co(t, r.render);
      var c = vo(e, t, r.render, o, l), d = Za();
      if (d) {
        var m = t.treeContext, S = 1, R = 0;
        t.treeContext = Ya(m, S, R);
        try {
          tt(e, t, c);
        } finally {
          t.treeContext = m;
        }
      } else
        tt(e, t, c);
      $t(t);
    }
    function Bl(e, t, r, o, l) {
      var c = r.type, d = li(c, o);
      si(e, t, c, d, l);
    }
    function Ul(e, t, r, o) {
      r._context === void 0 ? r !== r.Consumer && (ii || (ii = !0, h("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : r = r._context;
      var l = o.children;
      typeof l != "function" && h("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it.");
      var c = Tr(r), d = l(c);
      tt(e, t, d);
    }
    function $i(e, t, r, o) {
      var l = r._context, c = o.value, d = o.children, m;
      m = t.context, t.context = xi(l, c), tt(e, t, d), t.context = ki(l), m !== t.context && h("Popping the context provider did not return back to the original snapshot. This is a bug in React.");
    }
    function Hl(e, t, r, o, l) {
      qr(t, "Lazy");
      var c = r._payload, d = r._init, m = d(c), S = li(m, o);
      si(e, t, m, S, l), $t(t);
    }
    function si(e, t, r, o, l) {
      if (typeof r == "function")
        if (ho(r)) {
          Ll(e, t, r, o);
          return;
        } else {
          ji(e, t, r, o);
          return;
        }
      if (typeof r == "string") {
        ti(e, t, r, o);
        return;
      }
      switch (r) {
        case Da:
        case Fa:
        case Qe:
        case vi:
        case Uo: {
          tt(e, t, o.children);
          return;
        }
        case Gn: {
          qr(t, "SuspenseList"), tt(e, t, o.children), $t(t);
          return;
        }
        case Pa:
          throw new Error("ReactDOMServer does not yet support scope components.");
        case Wo: {
          po(e, t, o);
          return;
        }
      }
      if (typeof r == "object" && r !== null)
        switch (r.$$typeof) {
          case zo: {
            Wi(e, t, r, o, l);
            return;
          }
          case Xn: {
            Bl(e, t, r, o, l);
            return;
          }
          case Ho: {
            $i(e, t, r, o);
            return;
          }
          case jo: {
            Ul(e, t, r, o);
            return;
          }
          case En: {
            Hl(e, t, r, o);
            return;
          }
        }
      var c = "";
      throw (r === void 0 || typeof r == "object" && r !== null && Object.keys(r).length === 0) && (c += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (r == null ? r : typeof r) + "." + c));
    }
    function jl(e, t) {
      typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
      e[Symbol.toStringTag] === "Generator" && (oi || h("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), oi = !0), e.entries === t && (ai || h("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), ai = !0);
    }
    function tt(e, t, r) {
      try {
        return zl(e, t, r);
      } catch (o) {
        throw typeof o == "object" && o !== null && typeof o.then == "function" || (ir = ir !== null ? ir : ei()), o;
      }
    }
    function zl(e, t, r) {
      if (t.node = r, typeof r == "object" && r !== null) {
        switch (r.$$typeof) {
          case sl: {
            var o = r, l = o.type, c = o.props, d = o.ref;
            si(e, t, l, c, d);
            return;
          }
          case hi:
            throw new Error("Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.");
          case En: {
            var m = r, S = m._payload, R = m._init, I;
            try {
              I = R(S);
            } catch (Bn) {
              throw typeof Bn == "object" && Bn !== null && typeof Bn.then == "function" && qr(t, "Lazy"), Bn;
            }
            tt(e, t, I);
            return;
          }
        }
        if (lt(r)) {
          ya(e, t, r);
          return;
        }
        var M = cl(r);
        if (M) {
          jl(r, M);
          var j = M.call(r);
          if (j) {
            var G = j.next();
            if (!G.done) {
              var Te = [];
              do
                Te.push(G.value), G = j.next();
              while (!G.done);
              ya(e, t, Te);
              return;
            }
            return;
          }
        }
        var tn = Object.prototype.toString.call(r);
        throw new Error("Objects are not valid as a React child (found: " + (tn === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : tn) + "). If you meant to render a collection of children, use an array instead.");
      }
      if (typeof r == "string") {
        var rn = t.blockedSegment;
        rn.lastPushedText = di(t.blockedSegment.chunks, r, e.responseState, rn.lastPushedText);
        return;
      }
      if (typeof r == "number") {
        var lr = t.blockedSegment;
        lr.lastPushedText = di(t.blockedSegment.chunks, "" + r, e.responseState, lr.lastPushedText);
        return;
      }
      typeof r == "function" && h("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
    }
    function ya(e, t, r) {
      for (var o = r.length, l = 0; l < o; l++) {
        var c = t.treeContext;
        t.treeContext = Ya(c, o, l);
        try {
          je(e, t, r[l]);
        } finally {
          t.treeContext = c;
        }
      }
    }
    function Wl(e, t, r) {
      var o = t.blockedSegment, l = o.chunks.length, c = ga(
        e,
        l,
        null,
        o.formatContext,
        // Adopt the parent segment's leading text embed
        o.lastPushedText,
        // Assume we are text embedded at the trailing edge
        !0
      );
      o.children.push(c), o.lastPushedText = !1;
      var d = Kr(e, t.node, t.blockedBoundary, c, t.abortSet, t.legacyContext, t.context, t.treeContext);
      t.componentStack !== null && (d.componentStack = t.componentStack.parent);
      var m = d.ping;
      r.then(m, m);
    }
    function je(e, t, r) {
      var o = t.blockedSegment.formatContext, l = t.legacyContext, c = t.context, d = null;
      d = t.componentStack;
      try {
        return tt(e, t, r);
      } catch (m) {
        if (so(), typeof m == "object" && m !== null && typeof m.then == "function") {
          Wl(e, t, m), t.blockedSegment.formatContext = o, t.legacyContext = l, t.context = c, ro(c), t.componentStack = d;
          return;
        } else
          throw t.blockedSegment.formatContext = o, t.legacyContext = l, t.context = c, ro(c), t.componentStack = d, m;
      }
    }
    function $l(e, t, r, o) {
      var l = fo(e, o);
      if (t === null ? Ct(e, o) : (t.pendingTasks--, t.forceClientRender || (t.forceClientRender = !0, t.errorDigest = l, ma(t, o), t.parentFlushed && e.clientRenderedBoundaries.push(t))), e.allPendingTasks--, e.allPendingTasks === 0) {
        var c = e.onAllReady;
        c();
      }
    }
    function Ni(e) {
      var t = this, r = e.blockedBoundary, o = e.blockedSegment;
      o.status = ha, Yi(t, r, o);
    }
    function Vi(e, t, r) {
      var o = e.blockedBoundary, l = e.blockedSegment;
      if (l.status = ha, o === null)
        t.allPendingTasks--, t.status !== Qr && (t.status = Qr, t.destination !== null && _(t.destination));
      else {
        if (o.pendingTasks--, !o.forceClientRender) {
          o.forceClientRender = !0;
          var c = r === void 0 ? new Error("The render was aborted by the server without a reason.") : r;
          o.errorDigest = t.onError(c);
          {
            var d = "The server did not finish this Suspense boundary: ";
            c && typeof c.message == "string" ? c = d + c.message : c = d + String(c);
            var m = or;
            or = e;
            try {
              ma(o, c);
            } finally {
              or = m;
            }
          }
          o.parentFlushed && t.clientRenderedBoundaries.push(o);
        }
        if (o.fallbackAbortableTasks.forEach(function(R) {
          return Vi(R, t, r);
        }), o.fallbackAbortableTasks.clear(), t.allPendingTasks--, t.allPendingTasks === 0) {
          var S = t.onAllReady;
          S();
        }
      }
    }
    function Ln(e, t) {
      if (t.chunks.length === 0 && t.children.length === 1 && t.children[0].boundary === null) {
        var r = t.children[0];
        r.id = t.id, r.parentFlushed = !0, r.status === An && Ln(e, r);
      } else {
        var o = e.completedSegments;
        o.push(t);
      }
    }
    function Yi(e, t, r) {
      if (t === null) {
        if (r.parentFlushed) {
          if (e.completedRootSegment !== null)
            throw new Error("There can only be one root segment. This is a bug in React.");
          e.completedRootSegment = r;
        }
        if (e.pendingRootTasks--, e.pendingRootTasks === 0) {
          e.onShellError = Mn;
          var o = e.onShellReady;
          o();
        }
      } else if (t.pendingTasks--, !t.forceClientRender) {
        if (t.pendingTasks === 0)
          r.parentFlushed && r.status === An && Ln(t, r), t.parentFlushed && e.completedBoundaries.push(t), t.fallbackAbortableTasks.forEach(Ni, e), t.fallbackAbortableTasks.clear();
        else if (r.parentFlushed && r.status === An) {
          Ln(t, r);
          var l = t.completedSegments;
          l.length === 1 && t.parentFlushed && e.partialBoundaries.push(t);
        }
      }
      if (e.allPendingTasks--, e.allPendingTasks === 0) {
        var c = e.onAllReady;
        c();
      }
    }
    function Nl(e, t) {
      var r = t.blockedSegment;
      if (r.status === da) {
        ro(t.context);
        var o = null;
        o = or, or = t;
        try {
          tt(e, t, t.node), pi(r.chunks, e.responseState, r.lastPushedText, r.textEmbedded), t.abortSet.delete(t), r.status = An, Yi(e, t.blockedBoundary, r);
        } catch (c) {
          if (so(), typeof c == "object" && c !== null && typeof c.then == "function") {
            var l = t.ping;
            c.then(l, l);
          } else
            t.abortSet.delete(t), r.status = va, $l(e, t.blockedBoundary, r, c);
        } finally {
          or = o;
        }
      }
    }
    function ui(e) {
      if (e.status !== Qr) {
        var t = Ci(), r = fa.current;
        fa.current = Mi;
        var o;
        o = uo.getCurrentStack, uo.getCurrentStack = ei;
        var l = Ka;
        Oi(e.responseState);
        try {
          var c = e.pingedTasks, d;
          for (d = 0; d < c.length; d++) {
            var m = c[d];
            Nl(e, m);
          }
          c.splice(0, d), e.destination !== null && ba(e, e.destination);
        } catch (S) {
          fo(e, S), Ct(e, S);
        } finally {
          Oi(l), fa.current = r, uo.getCurrentStack = o, r === Mi && ro(t);
        }
      }
    }
    function en(e, t, r) {
      switch (r.parentFlushed = !0, r.status) {
        case da: {
          var o = r.id = e.nextSegmentId++;
          return r.lastPushedText = !1, r.textEmbedded = !1, jt(t, e.responseState, o);
        }
        case An: {
          r.status = pa;
          for (var l = !0, c = r.chunks, d = 0, m = r.children, S = 0; S < m.length; S++) {
            for (var R = m[S]; d < R.index; d++)
              k(t, c[d]);
            l = yo(e, t, R);
          }
          for (; d < c.length - 1; d++)
            k(t, c[d]);
          return d < c.length && (l = T(t, c[d])), l;
        }
        default:
          throw new Error("Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React.");
      }
    }
    function yo(e, t, r) {
      var o = r.boundary;
      if (o === null)
        return en(e, t, r);
      if (o.parentFlushed = !0, o.forceClientRender)
        return al(t, e.responseState, o.errorDigest, o.errorMessage, o.errorComponentStack), en(e, t, r), ll(t, e.responseState);
      if (o.pendingTasks > 0) {
        o.rootSegmentID = e.nextSegmentId++, o.completedSegments.length > 0 && e.partialBoundaries.push(o);
        var l = o.id = bt(e.responseState);
        return $r(t, e.responseState, l), en(e, t, r), wr(t, e.responseState);
      } else {
        if (o.byteSize > e.progressiveChunkSize)
          return o.rootSegmentID = e.nextSegmentId++, e.completedBoundaries.push(o), $r(t, e.responseState, o.id), en(e, t, r), wr(t, e.responseState);
        ol(t, e.responseState);
        var c = o.completedSegments;
        if (c.length !== 1)
          throw new Error("A previously unvisited boundary must have exactly one root segment. This is a bug in React.");
        var d = c[0];
        return yo(e, t, d), il(t, e.responseState);
      }
    }
    function Vl(e, t, r) {
      return el(t, e.responseState, r.id, r.errorDigest, r.errorMessage, r.errorComponentStack);
    }
    function ci(e, t, r) {
      return Yn(t, e.responseState, r.formatContext, r.id), yo(e, t, r), Lo(t, r.formatContext);
    }
    function So(e, t, r) {
      for (var o = r.completedSegments, l = 0; l < o.length; l++) {
        var c = o[l];
        Gi(e, t, r, c);
      }
      return o.length = 0, He(t, e.responseState, r.id, r.rootSegmentID);
    }
    function Sa(e, t, r) {
      for (var o = r.completedSegments, l = 0; l < o.length; l++) {
        var c = o[l];
        if (!Gi(e, t, r, c))
          return l++, o.splice(0, l), !1;
      }
      return o.splice(0, l), !0;
    }
    function Gi(e, t, r, o) {
      if (o.status === pa)
        return !0;
      var l = o.id;
      if (l === -1) {
        var c = o.id = r.rootSegmentID;
        if (c === -1)
          throw new Error("A root segment ID must have been assigned by now. This is a bug in React.");
        return ci(e, t, o);
      } else
        return ci(e, t, o), A(t, e.responseState, l);
    }
    function ba(e, t) {
      try {
        var r = e.completedRootSegment;
        r !== null && e.pendingRootTasks === 0 && (yo(e, t, r), e.completedRootSegment = null, tr(t, e.responseState));
        var o = e.clientRenderedBoundaries, l;
        for (l = 0; l < o.length; l++) {
          var c = o[l];
          if (!Vl(e, t, c)) {
            e.destination = null, l++, o.splice(0, l);
            return;
          }
        }
        o.splice(0, l);
        var d = e.completedBoundaries;
        for (l = 0; l < d.length; l++) {
          var m = d[l];
          if (!So(e, t, m)) {
            e.destination = null, l++, d.splice(0, l);
            return;
          }
        }
        d.splice(0, l);
        var S = e.partialBoundaries;
        for (l = 0; l < S.length; l++) {
          var R = S[l];
          if (!Sa(e, t, R)) {
            e.destination = null, l++, S.splice(0, l);
            return;
          }
        }
        S.splice(0, l);
        var I = e.completedBoundaries;
        for (l = 0; l < I.length; l++) {
          var M = I[l];
          if (!So(e, t, M)) {
            e.destination = null, l++, I.splice(0, l);
            return;
          }
        }
        I.splice(0, l);
      } finally {
        e.allPendingTasks === 0 && e.pingedTasks.length === 0 && e.clientRenderedBoundaries.length === 0 && e.completedBoundaries.length === 0 && (e.abortableTasks.size !== 0 && h("There was still abortable task at the root when we closed. This is a bug in React."), _(t));
      }
    }
    function Xi(e) {
      $e(function() {
        return ui(e);
      });
    }
    function Yl(e, t) {
      if (e.status === qa) {
        e.status = Qr, fe(t, e.fatalError);
        return;
      }
      if (e.status !== Qr && e.destination === null) {
        e.destination = t;
        try {
          ba(e, t);
        } catch (r) {
          fo(e, r), Ct(e, r);
        }
      }
    }
    function Zi(e, t) {
      try {
        var r = e.abortableTasks;
        r.forEach(function(o) {
          return Vi(o, e, t);
        }), r.clear(), e.destination !== null && ba(e, e.destination);
      } catch (o) {
        fo(e, o), Ct(e, o);
      }
    }
    function fi() {
    }
    function Ji(e, t, r, o) {
      var l = !1, c = null, d = "", m = {
        push: function(M) {
          return M !== null && (d += M), !0;
        },
        destroy: function(M) {
          l = !0, c = M;
        }
      }, S = !1;
      function R() {
        S = !0;
      }
      var I = On(e, rl(r, t ? t.identifierPrefix : void 0), nl(), 1 / 0, fi, void 0, R);
      if (Xi(I), Zi(I, o), Yl(I, m), l)
        throw c;
      if (!S)
        throw new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
      return d;
    }
    function Gl(e, t) {
      return Ji(e, t, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
    }
    function Qi(e, t) {
      return Ji(e, t, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
    }
    function Xl() {
      throw new Error("ReactDOMServer.renderToNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToString() instead.");
    }
    function n() {
      throw new Error("ReactDOMServer.renderToStaticNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToStaticMarkup() instead.");
    }
    wo.renderToNodeStream = Xl, wo.renderToStaticMarkup = Qi, wo.renderToStaticNodeStream = n, wo.renderToString = Gl, wo.version = F;
  }()), wo;
}
var qi = {}, ns;
function Cs() {
  return ns || (ns = 1, Ql.env.NODE_ENV !== "production" && function() {
    var ce = Nt, F = "18.3.1", z = ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function Q(n) {
      {
        for (var e = arguments.length, t = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++)
          t[r - 1] = arguments[r];
        W("warn", n, t);
      }
    }
    function h(n) {
      {
        for (var e = arguments.length, t = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++)
          t[r - 1] = arguments[r];
        W("error", n, t);
      }
    }
    function W(n, e, t) {
      {
        var r = z.ReactDebugCurrentFrame, o = r.getStackAddendum();
        o !== "" && (e += "%s", t = t.concat([o]));
        var l = t.map(function(c) {
          return String(c);
        });
        l.unshift("Warning: " + e), Function.prototype.apply.call(console[n], console, l);
      }
    }
    function $e(n) {
      n();
    }
    var K = 512, k = null, T = 0;
    function gt(n) {
      k = new Uint8Array(K), T = 0;
    }
    function _(n, e) {
      if (e.length !== 0) {
        if (e.length > K) {
          T > 0 && (n.enqueue(new Uint8Array(k.buffer, 0, T)), k = new Uint8Array(K), T = 0), n.enqueue(e);
          return;
        }
        var t = e, r = k.length - T;
        r < t.length && (r === 0 ? n.enqueue(k) : (k.set(t.subarray(0, r), T), n.enqueue(k), t = t.subarray(r)), k = new Uint8Array(K), T = 0), k.set(t, T), T += t.length;
      }
    }
    function J(n, e) {
      return _(n, e), !0;
    }
    function nn(n) {
      k && T > 0 && (n.enqueue(new Uint8Array(k.buffer, 0, T)), k = null, T = 0);
    }
    function fe(n) {
      n.close();
    }
    var Vt = new TextEncoder();
    function O(n) {
      return Vt.encode(n);
    }
    function P(n) {
      return Vt.encode(n);
    }
    function me(n, e) {
      typeof n.error == "function" ? n.error(e) : n.close();
    }
    function Et(n) {
      {
        var e = typeof Symbol == "function" && Symbol.toStringTag, t = e && n[Symbol.toStringTag] || n.constructor.name || "Object";
        return t;
      }
    }
    function Ae(n) {
      try {
        return ne(n), !1;
      } catch {
        return !0;
      }
    }
    function ne(n) {
      return "" + n;
    }
    function se(n, e) {
      if (Ae(n))
        return h("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", e, Et(n)), ne(n);
    }
    function X(n, e) {
      if (Ae(n))
        return h("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", e, Et(n)), ne(n);
    }
    function rt(n) {
      if (Ae(n))
        return h("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", Et(n)), ne(n);
    }
    var ee = Object.prototype.hasOwnProperty, mt = 0, Ne = 1, xe = 2, Rt = 3, nt = 4, Ir = 5, Pr = 6, Fr = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", ot = Fr + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", _e = new RegExp("^[" + Fr + "][" + ot + "]*$"), sr = {}, ae = {};
    function ie(n) {
      return ee.call(ae, n) ? !0 : ee.call(sr, n) ? !1 : _e.test(n) ? (ae[n] = !0, !0) : (sr[n] = !0, h("Invalid attribute name: `%s`", n), !1);
    }
    function ur(n, e, t, r) {
      if (t !== null && t.type === mt)
        return !1;
      switch (typeof e) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (t !== null)
            return !t.acceptsBooleans;
          var o = n.toLowerCase().slice(0, 5);
          return o !== "data-" && o !== "aria-";
        }
        default:
          return !1;
      }
    }
    function It(n) {
      return ue.hasOwnProperty(n) ? ue[n] : null;
    }
    function de(n, e, t, r, o, l, c) {
      this.acceptsBooleans = e === xe || e === Rt || e === nt, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = t, this.propertyName = n, this.type = e, this.sanitizeURL = l, this.removeEmptyString = c;
    }
    var ue = {}, Yt = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    Yt.forEach(function(n) {
      ue[n] = new de(
        n,
        mt,
        !1,
        // mustUseProperty
        n,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
      var e = n[0], t = n[1];
      ue[e] = new de(
        e,
        Ne,
        !1,
        // mustUseProperty
        t,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
      ue[n] = new de(
        n,
        xe,
        !1,
        // mustUseProperty
        n.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
      ue[n] = new de(
        n,
        xe,
        !1,
        // mustUseProperty
        n,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(n) {
      ue[n] = new de(
        n,
        Rt,
        !1,
        // mustUseProperty
        n.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(n) {
      ue[n] = new de(
        n,
        Rt,
        !0,
        // mustUseProperty
        n,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(n) {
      ue[n] = new de(
        n,
        nt,
        !1,
        // mustUseProperty
        n,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(n) {
      ue[n] = new de(
        n,
        Pr,
        !1,
        // mustUseProperty
        n,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(n) {
      ue[n] = new de(
        n,
        Ir,
        !1,
        // mustUseProperty
        n.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var Gt = /[\-\:]([a-z])/g, Me = function(n) {
      return n[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(n) {
      var e = n.replace(Gt, Me);
      ue[e] = new de(
        e,
        Ne,
        !1,
        // mustUseProperty
        n,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(n) {
      var e = n.replace(Gt, Me);
      ue[e] = new de(
        e,
        Ne,
        !1,
        // mustUseProperty
        n,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(n) {
      var e = n.replace(Gt, Me);
      ue[e] = new de(
        e,
        Ne,
        !1,
        // mustUseProperty
        n,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(n) {
      ue[n] = new de(
        n,
        Ne,
        !1,
        // mustUseProperty
        n.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var yt = "xlinkHref";
    ue[yt] = new de(
      "xlinkHref",
      Ne,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(n) {
      ue[n] = new de(
        n,
        Ne,
        !1,
        // mustUseProperty
        n.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var ke = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function cr(n, e) {
      return n + e.charAt(0).toUpperCase() + e.substring(1);
    }
    var ye = ["Webkit", "ms", "Moz", "O"];
    Object.keys(ke).forEach(function(n) {
      ye.forEach(function(e) {
        ke[cr(e, n)] = ke[n];
      });
    });
    var Ce = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function fr(n, e) {
      Ce[e.type] || e.onChange || e.onInput || e.readOnly || e.disabled || e.value == null || h("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), e.onChange || e.readOnly || e.disabled || e.checked == null || h("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function Xt(n, e) {
      if (n.indexOf("-") === -1)
        return typeof e.is == "string";
      switch (n) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var on = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, Ve = {}, Zt = new RegExp("^(aria)-[" + ot + "]*$"), Jt = new RegExp("^(aria)[A-Z][" + ot + "]*$");
    function an(n, e) {
      {
        if (ee.call(Ve, e) && Ve[e])
          return !0;
        if (Jt.test(e)) {
          var t = "aria-" + e.slice(4).toLowerCase(), r = on.hasOwnProperty(t) ? t : null;
          if (r == null)
            return h("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", e), Ve[e] = !0, !0;
          if (e !== r)
            return h("Invalid ARIA attribute `%s`. Did you mean `%s`?", e, r), Ve[e] = !0, !0;
        }
        if (Zt.test(e)) {
          var o = e.toLowerCase(), l = on.hasOwnProperty(o) ? o : null;
          if (l == null)
            return Ve[e] = !0, !1;
          if (e !== l)
            return h("Unknown ARIA attribute `%s`. Did you mean `%s`?", e, l), Ve[e] = !0, !0;
        }
      }
      return !0;
    }
    function Ye(n, e) {
      {
        var t = [];
        for (var r in e) {
          var o = an(n, r);
          o || t.push(r);
        }
        var l = t.map(function(c) {
          return "`" + c + "`";
        }).join(", ");
        t.length === 1 ? h("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", l, n) : t.length > 1 && h("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", l, n);
      }
    }
    function we(n, e) {
      Xt(n, e) || Ye(n, e);
    }
    var ge = !1;
    function Dr(n, e) {
      {
        if (n !== "input" && n !== "textarea" && n !== "select")
          return;
        e != null && e.value === null && !ge && (ge = !0, n === "select" && e.multiple ? h("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", n) : h("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", n));
      }
    }
    var Ar = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, _r = function() {
    };
    {
      var pe = {}, Mr = /^on./, ln = /^on[^A-Z]/, sn = new RegExp("^(aria)-[" + ot + "]*$"), Or = new RegExp("^(aria)[A-Z][" + ot + "]*$");
      _r = function(n, e, t, r) {
        if (ee.call(pe, e) && pe[e])
          return !0;
        var o = e.toLowerCase();
        if (o === "onfocusin" || o === "onfocusout")
          return h("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), pe[e] = !0, !0;
        if (r != null) {
          var l = r.registrationNameDependencies, c = r.possibleRegistrationNames;
          if (l.hasOwnProperty(e))
            return !0;
          var d = c.hasOwnProperty(o) ? c[o] : null;
          if (d != null)
            return h("Invalid event handler property `%s`. Did you mean `%s`?", e, d), pe[e] = !0, !0;
          if (Mr.test(e))
            return h("Unknown event handler property `%s`. It will be ignored.", e), pe[e] = !0, !0;
        } else if (Mr.test(e))
          return ln.test(e) && h("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", e), pe[e] = !0, !0;
        if (sn.test(e) || Or.test(e))
          return !0;
        if (o === "innerhtml")
          return h("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), pe[e] = !0, !0;
        if (o === "aria")
          return h("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), pe[e] = !0, !0;
        if (o === "is" && t !== null && t !== void 0 && typeof t != "string")
          return h("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof t), pe[e] = !0, !0;
        if (typeof t == "number" && isNaN(t))
          return h("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", e), pe[e] = !0, !0;
        var m = It(e), S = m !== null && m.type === mt;
        if (Ar.hasOwnProperty(o)) {
          var R = Ar[o];
          if (R !== e)
            return h("Invalid DOM property `%s`. Did you mean `%s`?", e, R), pe[e] = !0, !0;
        } else if (!S && e !== o)
          return h("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", e, o), pe[e] = !0, !0;
        return typeof t == "boolean" && ur(e, t, m) ? (t ? h('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', t, e, e, t, e) : h('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', t, e, e, t, e, e, e), pe[e] = !0, !0) : S ? !0 : ur(e, t, m) ? (pe[e] = !0, !1) : ((t === "false" || t === "true") && m !== null && m.type === Rt && (h("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", t, e, t === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', e, t), pe[e] = !0), !0);
      };
    }
    var dr = function(n, e, t) {
      {
        var r = [];
        for (var o in e) {
          var l = _r(n, o, e[o], t);
          l || r.push(o);
        }
        var c = r.map(function(d) {
          return "`" + d + "`";
        }).join(", ");
        r.length === 1 ? h("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", c, n) : r.length > 1 && h("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", c, n);
      }
    };
    function Un(n, e, t) {
      Xt(n, e) || dr(n, e, t);
    }
    var Lr = function() {
    };
    {
      var Pt = /^(?:webkit|moz|o)[A-Z]/, Br = /^-ms-/, un = /-(.)/g, Ee = /;\s*$/, at = {}, Ft = {}, Z = !1, Dt = !1, pr = function(n) {
        return n.replace(un, function(e, t) {
          return t.toUpperCase();
        });
      }, Qt = function(n) {
        at.hasOwnProperty(n) && at[n] || (at[n] = !0, h(
          "Unsupported style property %s. Did you mean %s?",
          n,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          pr(n.replace(Br, "ms-"))
        ));
      }, it = function(n) {
        at.hasOwnProperty(n) && at[n] || (at[n] = !0, h("Unsupported vendor-prefixed style property %s. Did you mean %s?", n, n.charAt(0).toUpperCase() + n.slice(1)));
      }, hr = function(n, e) {
        Ft.hasOwnProperty(e) && Ft[e] || (Ft[e] = !0, h(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, n, e.replace(Ee, "")));
      }, St = function(n, e) {
        Z || (Z = !0, h("`NaN` is an invalid value for the `%s` css style property.", n));
      }, Se = function(n, e) {
        Dt || (Dt = !0, h("`Infinity` is an invalid value for the `%s` css style property.", n));
      };
      Lr = function(n, e) {
        n.indexOf("-") > -1 ? Qt(n) : Pt.test(n) ? it(n) : Ee.test(e) && hr(n, e), typeof e == "number" && (isNaN(e) ? St(n, e) : isFinite(e) || Se(n, e));
      };
    }
    var Ur = Lr, Hr = /["'&<>]/;
    function cn(n) {
      rt(n);
      var e = "" + n, t = Hr.exec(e);
      if (!t)
        return e;
      var r, o = "", l, c = 0;
      for (l = t.index; l < e.length; l++) {
        switch (e.charCodeAt(l)) {
          case 34:
            r = "&quot;";
            break;
          case 38:
            r = "&amp;";
            break;
          case 39:
            r = "&#x27;";
            break;
          case 60:
            r = "&lt;";
            break;
          case 62:
            r = "&gt;";
            break;
          default:
            continue;
        }
        c !== l && (o += e.substring(c, l)), c = l + 1, o += r;
      }
      return c !== l ? o + e.substring(c, l) : o;
    }
    function he(n) {
      return typeof n == "boolean" || typeof n == "number" ? "" + n : cn(n);
    }
    var jr = /([A-Z])/g, Hn = /^ms-/;
    function jn(n) {
      return n.replace(jr, "-$1").toLowerCase().replace(Hn, "-ms-");
    }
    var lt = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, zr = !1;
    function vr(n) {
      !zr && lt.test(n) && (zr = !0, h("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(n)));
    }
    var At = Array.isArray;
    function Oe(n) {
      return At(n);
    }
    var st = P("<script>"), gr = P("<\/script>"), _t = P('<script src="'), Mt = P('<script type="module" src="'), ut = P('" async=""><\/script>');
    function Ot(n) {
      return rt(n), ("" + n).replace(Le, fn);
    }
    var Le = /(<\/|<)(s)(cript)/gi, fn = function(n, e, t, r) {
      return "" + e + (t === "s" ? "\\u0073" : "\\u0053") + r;
    };
    function dn(n, e, t, r, o) {
      var l = n === void 0 ? "" : n, c = e === void 0 ? st : P('<script nonce="' + he(e) + '">'), d = [];
      if (t !== void 0 && d.push(c, O(Ot(t)), gr), r !== void 0)
        for (var m = 0; m < r.length; m++)
          d.push(_t, O(he(r[m])), ut);
      if (o !== void 0)
        for (var S = 0; S < o.length; S++)
          d.push(Mt, O(he(o[S])), ut);
      return {
        bootstrapChunks: d,
        startInlineScript: c,
        placeholderPrefix: P(l + "P:"),
        segmentPrefix: P(l + "S:"),
        boundaryPrefix: l + "B:",
        idPrefix: l,
        nextSuspenseID: 0,
        sentCompleteSegmentFunction: !1,
        sentCompleteBoundaryFunction: !1,
        sentClientRenderFunction: !1
      };
    }
    var bt = 0, ve = 1, ct = 2, ft = 3, Lt = 4, mr = 5, Ge = 6, dt = 7;
    function Re(n, e) {
      return {
        insertionMode: n,
        selectedValue: e
      };
    }
    function Bt(n) {
      var e = n === "http://www.w3.org/2000/svg" ? ct : n === "http://www.w3.org/1998/Math/MathML" ? ft : bt;
      return Re(e, null);
    }
    function Kt(n, e, t) {
      switch (e) {
        case "select":
          return Re(ve, t.value != null ? t.value : t.defaultValue);
        case "svg":
          return Re(ct, null);
        case "math":
          return Re(ft, null);
        case "foreignObject":
          return Re(ve, null);
        case "table":
          return Re(Lt, null);
        case "thead":
        case "tbody":
        case "tfoot":
          return Re(mr, null);
        case "colgroup":
          return Re(dt, null);
        case "tr":
          return Re(Ge, null);
      }
      return n.insertionMode >= Lt || n.insertionMode === bt ? Re(ve, null) : n;
    }
    var yr = null;
    function ze(n) {
      var e = n.nextSuspenseID++;
      return P(n.boundaryPrefix + e.toString(16));
    }
    function pt(n, e, t) {
      var r = n.idPrefix, o = ":" + r + "R" + e;
      return t > 0 && (o += "H" + t.toString(32)), o + ":";
    }
    function Ie(n) {
      return he(n);
    }
    var Sr = P("<!-- -->");
    function be(n, e, t, r) {
      return e === "" ? r : (r && n.push(Sr), n.push(O(Ie(e))), !0);
    }
    function Be(n, e, t, r) {
      t && r && n.push(Sr);
    }
    var a = /* @__PURE__ */ new Map();
    function u(n) {
      var e = a.get(n);
      if (e !== void 0)
        return e;
      var t = P(he(jn(n)));
      return a.set(n, t), t;
    }
    var p = P(' style="'), g = P(":"), w = P(";");
    function y(n, e, t) {
      if (typeof t != "object")
        throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      var r = !0;
      for (var o in t)
        if (ee.call(t, o)) {
          var l = t[o];
          if (!(l == null || typeof l == "boolean" || l === "")) {
            var c = void 0, d = void 0, m = o.indexOf("--") === 0;
            m ? (c = O(he(o)), X(l, o), d = O(he(("" + l).trim()))) : (Ur(o, l), c = u(o), typeof l == "number" ? l !== 0 && !ee.call(ke, o) ? d = O(l + "px") : d = O("" + l) : (X(l, o), d = O(he(("" + l).trim())))), r ? (r = !1, n.push(p, c, g, d)) : n.push(w, c, g, d);
          }
        }
      r || n.push(L);
    }
    var C = P(" "), D = P('="'), L = P('"'), U = P('=""');
    function B(n, e, t, r) {
      switch (t) {
        case "style": {
          y(n, e, r);
          return;
        }
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
          return;
      }
      if (
        // shouldIgnoreAttribute
        // We have already filtered out null/undefined and reserved words.
        !(t.length > 2 && (t[0] === "o" || t[0] === "O") && (t[1] === "n" || t[1] === "N"))
      ) {
        var o = It(t);
        if (o !== null) {
          switch (typeof r) {
            case "function":
            case "symbol":
              return;
            case "boolean":
              if (!o.acceptsBooleans)
                return;
          }
          var l = o.attributeName, c = O(l);
          switch (o.type) {
            case Rt:
              r && n.push(C, c, U);
              return;
            case nt:
              r === !0 ? n.push(C, c, U) : r === !1 || n.push(C, c, D, O(he(r)), L);
              return;
            case Ir:
              isNaN(r) || n.push(C, c, D, O(he(r)), L);
              break;
            case Pr:
              !isNaN(r) && r >= 1 && n.push(C, c, D, O(he(r)), L);
              break;
            default:
              o.sanitizeURL && (se(r, l), r = "" + r, vr(r)), n.push(C, c, D, O(he(r)), L);
          }
        } else if (ie(t)) {
          switch (typeof r) {
            case "function":
            case "symbol":
              return;
            case "boolean": {
              var d = t.toLowerCase().slice(0, 5);
              if (d !== "data-" && d !== "aria-")
                return;
            }
          }
          n.push(C, O(t), D, O(he(r)), L);
        }
      }
    }
    var V = P(">"), Pe = P("/>");
    function Fe(n, e, t) {
      if (e != null) {
        if (t != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof e != "object" || !("__html" in e))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        var r = e.__html;
        r != null && (rt(r), n.push(O("" + r)));
      }
    }
    var De = !1, Ut = !1, ht = !1, br = !1, Ht = !1, qt = !1, wt = !1;
    function er(n, e) {
      {
        var t = n[e];
        if (t != null) {
          var r = Oe(t);
          n.multiple && !r ? h("The `%s` prop supplied to <select> must be an array if `multiple` is true.", e) : !n.multiple && r && h("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.", e);
        }
      }
    }
    function wa(n, e, t) {
      fr("select", e), er(e, "value"), er(e, "defaultValue"), e.value !== void 0 && e.defaultValue !== void 0 && !ht && (h("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), ht = !0), n.push(Xe("select"));
      var r = null, o = null;
      for (var l in e)
        if (ee.call(e, l)) {
          var c = e[l];
          if (c == null)
            continue;
          switch (l) {
            case "children":
              r = c;
              break;
            case "dangerouslySetInnerHTML":
              o = c;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              B(n, t, l, c);
              break;
          }
        }
      return n.push(V), Fe(n, o, r), r;
    }
    function xa(n) {
      var e = "";
      return ce.Children.forEach(n, function(t) {
        t != null && (e += t, !Ht && typeof t != "string" && typeof t != "number" && (Ht = !0, h("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }), e;
    }
    var pn = P(' selected=""');
    function vt(n, e, t, r) {
      var o = r.selectedValue;
      n.push(Xe("option"));
      var l = null, c = null, d = null, m = null;
      for (var S in e)
        if (ee.call(e, S)) {
          var R = e[S];
          if (R == null)
            continue;
          switch (S) {
            case "children":
              l = R;
              break;
            case "selected":
              d = R, wt || (h("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), wt = !0);
              break;
            case "dangerouslySetInnerHTML":
              m = R;
              break;
            case "value":
              c = R;
            default:
              B(n, t, S, R);
              break;
          }
        }
      if (o != null) {
        var I;
        if (c !== null ? (se(c, "value"), I = "" + c) : (m !== null && (qt || (qt = !0, h("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."))), I = xa(l)), Oe(o))
          for (var M = 0; M < o.length; M++) {
            se(o[M], "value");
            var j = "" + o[M];
            if (j === I) {
              n.push(pn);
              break;
            }
          }
        else
          se(o, "select.value"), "" + o === I && n.push(pn);
      } else d && n.push(pn);
      return n.push(V), Fe(n, m, l), l;
    }
    function ka(n, e, t) {
      fr("input", e), e.checked !== void 0 && e.defaultChecked !== void 0 && !Ut && (h("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", e.type), Ut = !0), e.value !== void 0 && e.defaultValue !== void 0 && !De && (h("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", e.type), De = !0), n.push(Xe("input"));
      var r = null, o = null, l = null, c = null;
      for (var d in e)
        if (ee.call(e, d)) {
          var m = e[d];
          if (m == null)
            continue;
          switch (d) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error("input is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            case "defaultChecked":
              c = m;
              break;
            case "defaultValue":
              o = m;
              break;
            case "checked":
              l = m;
              break;
            case "value":
              r = m;
              break;
            default:
              B(n, t, d, m);
              break;
          }
        }
      return l !== null ? B(n, t, "checked", l) : c !== null && B(n, t, "checked", c), r !== null ? B(n, t, "value", r) : o !== null && B(n, t, "value", o), n.push(Pe), null;
    }
    function xt(n, e, t) {
      fr("textarea", e), e.value !== void 0 && e.defaultValue !== void 0 && !br && (h("Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components"), br = !0), n.push(Xe("textarea"));
      var r = null, o = null, l = null;
      for (var c in e)
        if (ee.call(e, c)) {
          var d = e[c];
          if (d == null)
            continue;
          switch (c) {
            case "children":
              l = d;
              break;
            case "value":
              r = d;
              break;
            case "defaultValue":
              o = d;
              break;
            case "dangerouslySetInnerHTML":
              throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
            default:
              B(n, t, c, d);
              break;
          }
        }
      if (r === null && o !== null && (r = o), n.push(V), l != null) {
        if (h("Use the `defaultValue` or `value` props instead of setting children on <textarea>."), r != null)
          throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
        if (Oe(l)) {
          if (l.length > 1)
            throw new Error("<textarea> can only have at most one child.");
          rt(l[0]), r = "" + l[0];
        }
        rt(l), r = "" + l;
      }
      return typeof r == "string" && r[0] === `
` && n.push(rr), r !== null && (se(r, "value"), n.push(O(Ie("" + r)))), null;
    }
    function zn(n, e, t, r) {
      n.push(Xe(t));
      for (var o in e)
        if (ee.call(e, o)) {
          var l = e[o];
          if (l == null)
            continue;
          switch (o) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error(t + " is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            default:
              B(n, r, o, l);
              break;
          }
        }
      return n.push(Pe), null;
    }
    function hn(n, e, t) {
      n.push(Xe("menuitem"));
      for (var r in e)
        if (ee.call(e, r)) {
          var o = e[r];
          if (o == null)
            continue;
          switch (r) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error("menuitems cannot have `children` nor `dangerouslySetInnerHTML`.");
            default:
              B(n, t, r, o);
              break;
          }
        }
      return n.push(V), null;
    }
    function q(n, e, t) {
      n.push(Xe("title"));
      var r = null;
      for (var o in e)
        if (ee.call(e, o)) {
          var l = e[o];
          if (l == null)
            continue;
          switch (o) {
            case "children":
              r = l;
              break;
            case "dangerouslySetInnerHTML":
              throw new Error("`dangerouslySetInnerHTML` does not make sense on <title>.");
            default:
              B(n, t, o, l);
              break;
          }
        }
      n.push(V);
      {
        var c = Array.isArray(r) && r.length < 2 ? r[0] || null : r;
        Array.isArray(r) && r.length > 1 ? h("A title element received an array with more than 1 element as children. In browsers title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : c != null && c.$$typeof != null ? h("A title element received a React element for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : c != null && typeof c != "string" && typeof c != "number" && h("A title element received a value that was not a string or number for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering");
      }
      return r;
    }
    function tr(n, e, t, r) {
      n.push(Xe(t));
      var o = null, l = null;
      for (var c in e)
        if (ee.call(e, c)) {
          var d = e[c];
          if (d == null)
            continue;
          switch (c) {
            case "children":
              o = d;
              break;
            case "dangerouslySetInnerHTML":
              l = d;
              break;
            default:
              B(n, r, c, d);
              break;
          }
        }
      return n.push(V), Fe(n, l, o), typeof o == "string" ? (n.push(O(Ie(o))), null) : o;
    }
    function vn(n, e, t, r) {
      n.push(Xe(t));
      var o = null, l = null;
      for (var c in e)
        if (ee.call(e, c)) {
          var d = e[c];
          if (d == null)
            continue;
          switch (c) {
            case "children":
              o = d;
              break;
            case "dangerouslySetInnerHTML":
              l = d;
              break;
            case "style":
              y(n, r, d);
              break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
              break;
            default:
              ie(c) && typeof d != "function" && typeof d != "symbol" && n.push(C, O(c), D, O(he(d)), L);
              break;
          }
        }
      return n.push(V), Fe(n, l, o), o;
    }
    var rr = P(`
`);
    function jt(n, e, t, r) {
      n.push(Xe(t));
      var o = null, l = null;
      for (var c in e)
        if (ee.call(e, c)) {
          var d = e[c];
          if (d == null)
            continue;
          switch (c) {
            case "children":
              o = d;
              break;
            case "dangerouslySetInnerHTML":
              l = d;
              break;
            default:
              B(n, r, c, d);
              break;
          }
        }
      if (n.push(V), l != null) {
        if (o != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof l != "object" || !("__html" in l))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        var m = l.__html;
        m != null && (typeof m == "string" && m.length > 0 && m[0] === `
` ? n.push(rr, O(m)) : (rt(m), n.push(O("" + m))));
      }
      return typeof o == "string" && o[0] === `
` && n.push(rr), o;
    }
    var gn = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, zt = /* @__PURE__ */ new Map();
    function Xe(n) {
      var e = zt.get(n);
      if (e === void 0) {
        if (!gn.test(n))
          throw new Error("Invalid tag: " + n);
        e = P("<" + n), zt.set(n, e);
      }
      return e;
    }
    var Wn = P("<!DOCTYPE html>");
    function Wr(n, e, t, r, o) {
      switch (we(e, t), Dr(e, t), Un(e, t, null), !t.suppressContentEditableWarning && t.contentEditable && t.children != null && h("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), o.insertionMode !== ct && o.insertionMode !== ft && e.indexOf("-") === -1 && typeof t.is != "string" && e.toLowerCase() !== e && h("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e) {
        case "select":
          return wa(n, t, r);
        case "option":
          return vt(n, t, r, o);
        case "textarea":
          return xt(n, t, r);
        case "input":
          return ka(n, t, r);
        case "menuitem":
          return hn(n, t, r);
        case "title":
          return q(n, t, r);
        case "listing":
        case "pre":
          return jt(n, t, e, r);
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          return zn(n, t, e, r);
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return tr(n, t, e, r);
        case "html":
          return o.insertionMode === bt && n.push(Wn), tr(n, t, e, r);
        default:
          return e.indexOf("-") === -1 && typeof t.is != "string" ? tr(n, t, e, r) : vn(n, t, e, r);
      }
    }
    var ko = P("</"), mn = P(">");
    function Co(n, e, t) {
      switch (e) {
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "input":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          break;
        default:
          n.push(ko, O(e), mn);
      }
    }
    function Ca(n, e) {
      for (var t = e.bootstrapChunks, r = 0; r < t.length - 1; r++)
        _(n, t[r]);
      return r < t.length ? J(n, t[r]) : !0;
    }
    var Ta = P('<template id="'), yn = P('"></template>');
    function To(n, e, t) {
      _(n, Ta), _(n, e.placeholderPrefix);
      var r = O(t.toString(16));
      return _(n, r), J(n, yn);
    }
    var $r = P("<!--$-->"), $n = P('<!--$?--><template id="'), Ea = P('"></template>'), wr = P("<!--$!-->"), Nn = P("<!--/$-->"), Vn = P("<template"), xr = P('"'), Nr = P(' data-dgst="'), Sn = P(' data-msg="'), Eo = P(' data-stck="'), Ro = P("></template>");
    function Io(n, e) {
      return J(n, $r);
    }
    function bn(n, e, t) {
      if (_(n, $n), t === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return _(n, t), J(n, Ea);
    }
    function Ue(n, e, t, r, o) {
      var l;
      return l = J(n, wr), _(n, Vn), t && (_(n, Nr), _(n, O(he(t))), _(n, xr)), r && (_(n, Sn), _(n, O(he(r))), _(n, xr)), o && (_(n, Eo), _(n, O(he(o))), _(n, xr)), l = J(n, Ro), l;
    }
    function Po(n, e) {
      return J(n, Nn);
    }
    function wn(n, e) {
      return J(n, Nn);
    }
    function Ra(n, e) {
      return J(n, Nn);
    }
    var Fo = P('<div hidden id="'), xn = P('">'), Do = P("</div>"), Ao = P('<svg aria-hidden="true" style="display:none" id="'), kn = P('">'), Cn = P("</svg>"), _o = P('<math aria-hidden="true" style="display:none" id="'), Mo = P('">'), Oo = P("</math>"), Yn = P('<table hidden id="'), Lo = P('">'), i = P("</table>"), s = P('<table hidden><tbody id="'), f = P('">'), v = P("</tbody></table>"), x = P('<table hidden><tr id="'), b = P('">'), E = P("</tr></table>"), A = P('<table hidden><colgroup id="'), H = P('">'), N = P("</colgroup></table>");
    function $(n, e, t, r) {
      switch (t.insertionMode) {
        case bt:
        case ve:
          return _(n, Fo), _(n, e.segmentPrefix), _(n, O(r.toString(16))), J(n, xn);
        case ct:
          return _(n, Ao), _(n, e.segmentPrefix), _(n, O(r.toString(16))), J(n, kn);
        case ft:
          return _(n, _o), _(n, e.segmentPrefix), _(n, O(r.toString(16))), J(n, Mo);
        case Lt:
          return _(n, Yn), _(n, e.segmentPrefix), _(n, O(r.toString(16))), J(n, Lo);
        case mr:
          return _(n, s), _(n, e.segmentPrefix), _(n, O(r.toString(16))), J(n, f);
        case Ge:
          return _(n, x), _(n, e.segmentPrefix), _(n, O(r.toString(16))), J(n, b);
        case dt:
          return _(n, A), _(n, e.segmentPrefix), _(n, O(r.toString(16))), J(n, H);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    function te(n, e) {
      switch (e.insertionMode) {
        case bt:
        case ve:
          return J(n, Do);
        case ct:
          return J(n, Cn);
        case ft:
          return J(n, Oo);
        case Lt:
          return J(n, i);
        case mr:
          return J(n, v);
        case Ge:
          return J(n, E);
        case dt:
          return J(n, N);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    var He = "function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)}", Ze = 'function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}}', Je = 'function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())}', Tn = P(He + ';$RS("'), Bo = P('$RS("'), Vr = P('","'), el = P('")<\/script>');
    function tl(n, e, t) {
      _(n, e.startInlineScript), e.sentCompleteSegmentFunction ? _(n, Bo) : (e.sentCompleteSegmentFunction = !0, _(n, Tn)), _(n, e.segmentPrefix);
      var r = O(t.toString(16));
      return _(n, r), _(n, Vr), _(n, e.placeholderPrefix), _(n, r), J(n, el);
    }
    var Ia = P(Ze + ';$RC("'), rl = P('$RC("'), nl = P('","'), di = P('")<\/script>');
    function pi(n, e, t, r) {
      if (_(n, e.startInlineScript), e.sentCompleteBoundaryFunction ? _(n, rl) : (e.sentCompleteBoundaryFunction = !0, _(n, Ia)), t === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      var o = O(r.toString(16));
      return _(n, t), _(n, nl), _(n, e.segmentPrefix), _(n, o), J(n, di);
    }
    var ol = P(Je + ';$RX("'), al = P('$RX("'), il = P('"'), ll = P(")<\/script>"), We = P(",");
    function sl(n, e, t, r, o, l) {
      if (_(n, e.startInlineScript), e.sentClientRenderFunction ? _(n, al) : (e.sentClientRenderFunction = !0, _(n, ol)), t === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return _(n, t), _(n, il), (r || o || l) && (_(n, We), _(n, O(Uo(r || "")))), (o || l) && (_(n, We), _(n, O(Uo(o || "")))), l && (_(n, We), _(n, O(Uo(l)))), J(n, ll);
    }
    var hi = /[<\u2028\u2029]/g;
    function Uo(n) {
      var e = JSON.stringify(n);
      return e.replace(hi, function(t) {
        switch (t) {
          case "<":
            return "\\u003c";
          case "\u2028":
            return "\\u2028";
          case "\u2029":
            return "\\u2029";
          default:
            throw new Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
        }
      });
    }
    var Qe = Object.assign, vi = Symbol.for("react.element"), Ho = Symbol.for("react.portal"), jo = Symbol.for("react.fragment"), zo = Symbol.for("react.strict_mode"), Wo = Symbol.for("react.profiler"), Gn = Symbol.for("react.provider"), Xn = Symbol.for("react.context"), En = Symbol.for("react.forward_ref"), Pa = Symbol.for("react.suspense"), Fa = Symbol.for("react.suspense_list"), Da = Symbol.for("react.memo"), $o = Symbol.for("react.lazy"), gi = Symbol.for("react.scope"), ul = Symbol.for("react.debug_trace_mode"), cl = Symbol.for("react.legacy_hidden"), fl = Symbol.for("react.default_value"), Aa = Symbol.iterator, le = "@@iterator";
    function Zn(n) {
      if (n === null || typeof n != "object")
        return null;
      var e = Aa && n[Aa] || n[le];
      return typeof e == "function" ? e : null;
    }
    function mi(n, e, t) {
      var r = n.displayName;
      if (r)
        return r;
      var o = e.displayName || e.name || "";
      return o !== "" ? t + "(" + o + ")" : t;
    }
    function _a(n) {
      return n.displayName || "Context";
    }
    function oe(n) {
      if (n == null)
        return null;
      if (typeof n.tag == "number" && h("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof n == "function")
        return n.displayName || n.name || null;
      if (typeof n == "string")
        return n;
      switch (n) {
        case jo:
          return "Fragment";
        case Ho:
          return "Portal";
        case Wo:
          return "Profiler";
        case zo:
          return "StrictMode";
        case Pa:
          return "Suspense";
        case Fa:
          return "SuspenseList";
      }
      if (typeof n == "object")
        switch (n.$$typeof) {
          case Xn:
            var e = n;
            return _a(e) + ".Consumer";
          case Gn:
            var t = n;
            return _a(t._context) + ".Provider";
          case En:
            return mi(n, n.render, "ForwardRef");
          case Da:
            var r = n.displayName || null;
            return r !== null ? r : oe(n.type) || "Memo";
          case $o: {
            var o = n, l = o._payload, c = o._init;
            try {
              return oe(c(l));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Rn = 0, Ma, Oa, La, Ba, yi, Si, No;
    function Vo() {
    }
    Vo.__reactDisabledLog = !0;
    function Jn() {
      {
        if (Rn === 0) {
          Ma = console.log, Oa = console.info, La = console.warn, Ba = console.error, yi = console.group, Si = console.groupCollapsed, No = console.groupEnd;
          var n = {
            configurable: !0,
            enumerable: !0,
            value: Vo,
            writable: !0
          };
          Object.defineProperties(console, {
            info: n,
            log: n,
            warn: n,
            error: n,
            group: n,
            groupCollapsed: n,
            groupEnd: n
          });
        }
        Rn++;
      }
    }
    function Ua() {
      {
        if (Rn--, Rn === 0) {
          var n = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Qe({}, n, {
              value: Ma
            }),
            info: Qe({}, n, {
              value: Oa
            }),
            warn: Qe({}, n, {
              value: La
            }),
            error: Qe({}, n, {
              value: Ba
            }),
            group: Qe({}, n, {
              value: yi
            }),
            groupCollapsed: Qe({}, n, {
              value: Si
            }),
            groupEnd: Qe({}, n, {
              value: No
            })
          });
        }
        Rn < 0 && h("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var In = z.ReactCurrentDispatcher, Ha;
    function Yr(n, e, t) {
      {
        if (Ha === void 0)
          try {
            throw Error();
          } catch (o) {
            var r = o.stack.trim().match(/\n( *(at )?)/);
            Ha = r && r[1] || "";
          }
        return `
` + Ha + n;
      }
    }
    var ja = !1, Qn;
    {
      var dl = typeof WeakMap == "function" ? WeakMap : Map;
      Qn = new dl();
    }
    function Kn(n, e) {
      if (!n || ja)
        return "";
      {
        var t = Qn.get(n);
        if (t !== void 0)
          return t;
      }
      var r;
      ja = !0;
      var o = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var l;
      l = In.current, In.current = null, Jn();
      try {
        if (e) {
          var c = function() {
            throw Error();
          };
          if (Object.defineProperty(c.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(c, []);
            } catch (G) {
              r = G;
            }
            Reflect.construct(n, [], c);
          } else {
            try {
              c.call();
            } catch (G) {
              r = G;
            }
            n.call(c.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (G) {
            r = G;
          }
          n();
        }
      } catch (G) {
        if (G && r && typeof G.stack == "string") {
          for (var d = G.stack.split(`
`), m = r.stack.split(`
`), S = d.length - 1, R = m.length - 1; S >= 1 && R >= 0 && d[S] !== m[R]; )
            R--;
          for (; S >= 1 && R >= 0; S--, R--)
            if (d[S] !== m[R]) {
              if (S !== 1 || R !== 1)
                do
                  if (S--, R--, R < 0 || d[S] !== m[R]) {
                    var I = `
` + d[S].replace(" at new ", " at ");
                    return n.displayName && I.includes("<anonymous>") && (I = I.replace("<anonymous>", n.displayName)), typeof n == "function" && Qn.set(n, I), I;
                  }
                while (S >= 1 && R >= 0);
              break;
            }
        }
      } finally {
        ja = !1, In.current = l, Ua(), Error.prepareStackTrace = o;
      }
      var M = n ? n.displayName || n.name : "", j = M ? Yr(M) : "";
      return typeof n == "function" && Qn.set(n, j), j;
    }
    function bi(n, e, t) {
      return Kn(n, !0);
    }
    function za(n, e, t) {
      return Kn(n, !1);
    }
    function Yo(n) {
      var e = n.prototype;
      return !!(e && e.isReactComponent);
    }
    function Go(n, e, t) {
      if (n == null)
        return "";
      if (typeof n == "function")
        return Kn(n, Yo(n));
      if (typeof n == "string")
        return Yr(n);
      switch (n) {
        case Pa:
          return Yr("Suspense");
        case Fa:
          return Yr("SuspenseList");
      }
      if (typeof n == "object")
        switch (n.$$typeof) {
          case En:
            return za(n.render);
          case Da:
            return Go(n.type, e, t);
          case $o: {
            var r = n, o = r._payload, l = r._init;
            try {
              return Go(l(o), e, t);
            } catch {
            }
          }
        }
      return "";
    }
    var Xo = {}, qn = z.ReactDebugCurrentFrame;
    function eo(n) {
      if (n) {
        var e = n._owner, t = Go(n.type, n._source, e ? e.type : null);
        qn.setExtraStackFrame(t);
      } else
        qn.setExtraStackFrame(null);
    }
    function wi(n, e, t, r, o) {
      {
        var l = Function.call.bind(ee);
        for (var c in n)
          if (l(n, c)) {
            var d = void 0;
            try {
              if (typeof n[c] != "function") {
                var m = Error((r || "React class") + ": " + t + " type `" + c + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof n[c] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw m.name = "Invariant Violation", m;
              }
              d = n[c](e, c, r, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (S) {
              d = S;
            }
            d && !(d instanceof Error) && (eo(o), h("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", r || "React class", t, c, typeof d), eo(null)), d instanceof Error && !(d.message in Xo) && (Xo[d.message] = !0, eo(o), h("Failed %s type: %s", t, d.message), eo(null));
          }
      }
    }
    var Gr;
    Gr = {};
    var Zo = {};
    Object.freeze(Zo);
    function kr(n, e) {
      {
        var t = n.contextTypes;
        if (!t)
          return Zo;
        var r = {};
        for (var o in t)
          r[o] = e[o];
        {
          var l = oe(n) || "Unknown";
          wi(t, r, "context", l);
        }
        return r;
      }
    }
    function Wa(n, e, t, r) {
      {
        if (typeof n.getChildContext != "function") {
          {
            var o = oe(e) || "Unknown";
            Gr[o] || (Gr[o] = !0, h("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", o, o));
          }
          return t;
        }
        var l = n.getChildContext();
        for (var c in l)
          if (!(c in r))
            throw new Error((oe(e) || "Unknown") + '.getChildContext(): key "' + c + '" is not defined in childContextTypes.');
        {
          var d = oe(e) || "Unknown";
          wi(r, l, "child context", d);
        }
        return Qe({}, t, l);
      }
    }
    var Xr;
    Xr = {};
    var Jo = null, Cr = null;
    function Qo(n) {
      n.context._currentValue = n.parentValue;
    }
    function Ko(n) {
      n.context._currentValue = n.value;
    }
    function to(n, e) {
      if (n !== e) {
        Qo(n);
        var t = n.parent, r = e.parent;
        if (t === null) {
          if (r !== null)
            throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
        } else {
          if (r === null)
            throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
          to(t, r);
        }
        Ko(e);
      }
    }
    function ro(n) {
      Qo(n);
      var e = n.parent;
      e !== null && ro(e);
    }
    function xi(n) {
      var e = n.parent;
      e !== null && xi(e), Ko(n);
    }
    function ki(n, e) {
      Qo(n);
      var t = n.parent;
      if (t === null)
        throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      t.depth === e.depth ? to(t, e) : ki(t, e);
    }
    function Ci(n, e) {
      var t = e.parent;
      if (t === null)
        throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      n.depth === t.depth ? to(n, t) : Ci(n, t), Ko(e);
    }
    function Tr(n) {
      var e = Cr, t = n;
      e !== t && (e === null ? xi(t) : t === null ? ro(e) : e.depth === t.depth ? to(e, t) : e.depth > t.depth ? ki(e, t) : Ci(e, t), Cr = t);
    }
    function $a(n, e) {
      var t;
      t = n._currentValue, n._currentValue = e, n._currentRenderer !== void 0 && n._currentRenderer !== null && n._currentRenderer !== Xr && h("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), n._currentRenderer = Xr;
      var r = Cr, o = {
        parent: r,
        depth: r === null ? 0 : r.depth + 1,
        context: n,
        parentValue: t,
        value: e
      };
      return Cr = o, o;
    }
    function pl(n) {
      var e = Cr;
      if (e === null)
        throw new Error("Tried to pop a Context at the root of the app. This is a bug in React.");
      e.context !== n && h("The parent context is not the expected context. This is probably a bug in React.");
      {
        var t = e.parentValue;
        t === fl ? e.context._currentValue = e.context._defaultValue : e.context._currentValue = t, n._currentRenderer !== void 0 && n._currentRenderer !== null && n._currentRenderer !== Xr && h("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), n._currentRenderer = Xr;
      }
      return Cr = e.parent;
    }
    function Ti() {
      return Cr;
    }
    function Pn(n) {
      var e = n._currentValue;
      return e;
    }
    function no(n) {
      return n._reactInternals;
    }
    function Na(n, e) {
      n._reactInternals = e;
    }
    var qo = {}, ea = {}, ta, Fn, oo, ao, ra, io, na, oa, Va;
    {
      ta = /* @__PURE__ */ new Set(), Fn = /* @__PURE__ */ new Set(), oo = /* @__PURE__ */ new Set(), na = /* @__PURE__ */ new Set(), ao = /* @__PURE__ */ new Set(), oa = /* @__PURE__ */ new Set(), Va = /* @__PURE__ */ new Set();
      var Ei = /* @__PURE__ */ new Set();
      io = function(n, e) {
        if (!(n === null || typeof n == "function")) {
          var t = e + "_" + n;
          Ei.has(t) || (Ei.add(t), h("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", e, n));
        }
      }, ra = function(n, e) {
        if (e === void 0) {
          var t = oe(n) || "Component";
          ao.has(t) || (ao.add(t), h("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", t));
        }
      };
    }
    function Ri(n, e) {
      {
        var t = n.constructor, r = t && oe(t) || "ReactClass", o = r + "." + e;
        if (qo[o])
          return;
        h(`%s(...): Can only update a mounting component. This usually means you called %s() outside componentWillMount() on the server. This is a no-op.

Please check the code for the %s component.`, e, e, r), qo[o] = !0;
      }
    }
    var Ii = {
      isMounted: function(n) {
        return !1;
      },
      enqueueSetState: function(n, e, t) {
        var r = no(n);
        r.queue === null ? Ri(n, "setState") : (r.queue.push(e), t != null && io(t, "setState"));
      },
      enqueueReplaceState: function(n, e, t) {
        var r = no(n);
        r.replace = !0, r.queue = [e], t != null && io(t, "setState");
      },
      enqueueForceUpdate: function(n, e) {
        var t = no(n);
        t.queue === null ? Ri(n, "forceUpdate") : e != null && io(e, "setState");
      }
    };
    function hl(n, e, t, r, o) {
      var l = t(o, r);
      ra(e, l);
      var c = l == null ? r : Qe({}, r, l);
      return c;
    }
    function Pi(n, e, t) {
      var r = Zo, o = n.contextType;
      if ("contextType" in n) {
        var l = (
          // Allow null for conditional declaration
          o === null || o !== void 0 && o.$$typeof === Xn && o._context === void 0
        );
        if (!l && !Va.has(n)) {
          Va.add(n);
          var c = "";
          o === void 0 ? c = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof o != "object" ? c = " However, it is set to a " + typeof o + "." : o.$$typeof === Gn ? c = " Did you accidentally pass the Context.Provider instead?" : o._context !== void 0 ? c = " Did you accidentally pass the Context.Consumer instead?" : c = " However, it is set to an object with keys {" + Object.keys(o).join(", ") + "}.", h("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", oe(n) || "Component", c);
        }
      }
      typeof o == "object" && o !== null ? r = Pn(o) : r = t;
      var d = new n(e, r);
      {
        if (typeof n.getDerivedStateFromProps == "function" && (d.state === null || d.state === void 0)) {
          var m = oe(n) || "Component";
          ta.has(m) || (ta.add(m), h("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", m, d.state === null ? "null" : "undefined", m));
        }
        if (typeof n.getDerivedStateFromProps == "function" || typeof d.getSnapshotBeforeUpdate == "function") {
          var S = null, R = null, I = null;
          if (typeof d.componentWillMount == "function" && d.componentWillMount.__suppressDeprecationWarning !== !0 ? S = "componentWillMount" : typeof d.UNSAFE_componentWillMount == "function" && (S = "UNSAFE_componentWillMount"), typeof d.componentWillReceiveProps == "function" && d.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? R = "componentWillReceiveProps" : typeof d.UNSAFE_componentWillReceiveProps == "function" && (R = "UNSAFE_componentWillReceiveProps"), typeof d.componentWillUpdate == "function" && d.componentWillUpdate.__suppressDeprecationWarning !== !0 ? I = "componentWillUpdate" : typeof d.UNSAFE_componentWillUpdate == "function" && (I = "UNSAFE_componentWillUpdate"), S !== null || R !== null || I !== null) {
            var M = oe(n) || "Component", j = typeof n.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            oo.has(M) || (oo.add(M), h(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, M, j, S !== null ? `
  ` + S : "", R !== null ? `
  ` + R : "", I !== null ? `
  ` + I : ""));
          }
        }
      }
      return d;
    }
    function vl(n, e, t) {
      {
        var r = oe(e) || "Component", o = n.render;
        o || (e.prototype && typeof e.prototype.render == "function" ? h("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", r) : h("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", r)), n.getInitialState && !n.getInitialState.isReactClassApproved && !n.state && h("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", r), n.getDefaultProps && !n.getDefaultProps.isReactClassApproved && h("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", r), n.propTypes && h("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", r), n.contextType && h("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", r), n.contextTypes && h("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", r), e.contextType && e.contextTypes && !oa.has(e) && (oa.add(e), h("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", r)), typeof n.componentShouldUpdate == "function" && h("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", r), e.prototype && e.prototype.isPureReactComponent && typeof n.shouldComponentUpdate < "u" && h("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", oe(e) || "A pure component"), typeof n.componentDidUnmount == "function" && h("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", r), typeof n.componentDidReceiveProps == "function" && h("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", r), typeof n.componentWillRecieveProps == "function" && h("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", r), typeof n.UNSAFE_componentWillRecieveProps == "function" && h("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", r);
        var l = n.props !== t;
        n.props !== void 0 && l && h("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", r, r), n.defaultProps && h("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", r, r), typeof n.getSnapshotBeforeUpdate == "function" && typeof n.componentDidUpdate != "function" && !Fn.has(e) && (Fn.add(e), h("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", oe(e))), typeof n.getDerivedStateFromProps == "function" && h("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", r), typeof n.getDerivedStateFromError == "function" && h("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", r), typeof e.getSnapshotBeforeUpdate == "function" && h("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", r);
        var c = n.state;
        c && (typeof c != "object" || Oe(c)) && h("%s.state: must be set to an object or null", r), typeof n.getChildContext == "function" && typeof e.childContextTypes != "object" && h("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", r);
      }
    }
    function gl(n, e) {
      var t = e.state;
      if (typeof e.componentWillMount == "function") {
        if (e.componentWillMount.__suppressDeprecationWarning !== !0) {
          var r = oe(n) || "Unknown";
          ea[r] || (Q(
            // keep this warning in sync with ReactStrictModeWarning.js
            `componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code from componentWillMount to componentDidMount (preferred in most cases) or the constructor.

Please update the following components: %s`,
            r
          ), ea[r] = !0);
        }
        e.componentWillMount();
      }
      typeof e.UNSAFE_componentWillMount == "function" && e.UNSAFE_componentWillMount(), t !== e.state && (h("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", oe(n) || "Component"), Ii.enqueueReplaceState(e, e.state, null));
    }
    function Ya(n, e, t, r) {
      if (n.queue !== null && n.queue.length > 0) {
        var o = n.queue, l = n.replace;
        if (n.queue = null, n.replace = !1, l && o.length === 1)
          e.state = o[0];
        else {
          for (var c = l ? o[0] : e.state, d = !0, m = l ? 1 : 0; m < o.length; m++) {
            var S = o[m], R = typeof S == "function" ? S.call(e, c, t, r) : S;
            R != null && (d ? (d = !1, c = Qe({}, c, R)) : Qe(c, R));
          }
          e.state = c;
        }
      } else
        n.queue = null;
    }
    function lo(n, e, t, r) {
      vl(n, e, t);
      var o = n.state !== void 0 ? n.state : null;
      n.updater = Ii, n.props = t, n.state = o;
      var l = {
        queue: [],
        replace: !1
      };
      Na(n, l);
      var c = e.contextType;
      if (typeof c == "object" && c !== null ? n.context = Pn(c) : n.context = r, n.state === t) {
        var d = oe(e) || "Component";
        na.has(d) || (na.add(d), h("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", d));
      }
      var m = e.getDerivedStateFromProps;
      typeof m == "function" && (n.state = hl(n, e, m, o, t)), typeof e.getDerivedStateFromProps != "function" && typeof n.getSnapshotBeforeUpdate != "function" && (typeof n.UNSAFE_componentWillMount == "function" || typeof n.componentWillMount == "function") && (gl(e, n), Ya(l, n, t, r));
    }
    var ml = {
      id: 1,
      overflow: ""
    };
    function yl(n) {
      var e = n.overflow, t = n.id, r = t & ~Sl(t);
      return r.toString(32) + e;
    }
    function Ga(n, e, t) {
      var r = n.id, o = n.overflow, l = aa(r) - 1, c = r & ~(1 << l), d = t + 1, m = aa(e) + l;
      if (m > 30) {
        var S = l - l % 5, R = (1 << S) - 1, I = (c & R).toString(32), M = c >> S, j = l - S, G = aa(e) + j, Te = d << j, tn = Te | M, rn = I + o;
        return {
          id: 1 << G | tn,
          overflow: rn
        };
      } else {
        var lr = d << l, Bn = lr | c, Zl = o;
        return {
          id: 1 << m | Bn,
          overflow: Zl
        };
      }
    }
    function aa(n) {
      return 32 - bl(n);
    }
    function Sl(n) {
      return 1 << aa(n) - 1;
    }
    var bl = Math.clz32 ? Math.clz32 : Xa, wl = Math.log, nr = Math.LN2;
    function Xa(n) {
      var e = n >>> 0;
      return e === 0 ? 32 : 31 - (wl(e) / nr | 0) | 0;
    }
    function ia(n, e) {
      return n === e && (n !== 0 || 1 / n === 1 / e) || n !== n && e !== e;
    }
    var re = typeof Object.is == "function" ? Object.is : ia, Ke = null, Dn = null, Zr = null, Y = null, Er = !1, la = !1, qe = 0, et = null, Wt = 0, xl = 25, kt = !1, Rr;
    function Jr() {
      if (Ke === null)
        throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
      return kt && h("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks"), Ke;
    }
    function kl(n, e) {
      if (e === null)
        return h("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", Rr), !1;
      n.length !== e.length && h(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, Rr, "[" + n.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var t = 0; t < e.length && t < n.length; t++)
        if (!re(n[t], e[t]))
          return !1;
      return !0;
    }
    function Za() {
      if (Wt > 0)
        throw new Error("Rendered more hooks than during the previous render");
      return {
        memoizedState: null,
        queue: null,
        next: null
      };
    }
    function so() {
      return Y === null ? Zr === null ? (Er = !1, Zr = Y = Za()) : (Er = !0, Y = Zr) : Y.next === null ? (Er = !1, Y = Y.next = Za()) : (Er = !0, Y = Y.next), Y;
    }
    function Cl(n, e) {
      Ke = e, Dn = n, kt = !1, qe = 0;
    }
    function Tl(n, e, t, r) {
      for (; la; )
        la = !1, qe = 0, Wt += 1, Y = null, t = n(e, r);
      return Ja(), t;
    }
    function sa() {
      var n = qe !== 0;
      return n;
    }
    function Ja() {
      kt = !1, Ke = null, Dn = null, la = !1, Zr = null, Wt = 0, et = null, Y = null;
    }
    function Fi(n) {
      return kt && h("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."), Pn(n);
    }
    function Di(n) {
      return Rr = "useContext", Jr(), Pn(n);
    }
    function Qa(n, e) {
      return typeof e == "function" ? e(n) : e;
    }
    function El(n) {
      return Rr = "useState", Ai(
        Qa,
        // useReducer has a special case to support lazy useState initializers
        n
      );
    }
    function Ai(n, e, t) {
      if (n !== Qa && (Rr = "useReducer"), Ke = Jr(), Y = so(), Er) {
        var r = Y.queue, o = r.dispatch;
        if (et !== null) {
          var l = et.get(r);
          if (l !== void 0) {
            et.delete(r);
            var c = Y.memoizedState, d = l;
            do {
              var m = d.action;
              kt = !0, c = n(c, m), kt = !1, d = d.next;
            } while (d !== null);
            return Y.memoizedState = c, [c, o];
          }
        }
        return [Y.memoizedState, o];
      } else {
        kt = !0;
        var S;
        n === Qa ? S = typeof e == "function" ? e() : e : S = t !== void 0 ? t(e) : e, kt = !1, Y.memoizedState = S;
        var R = Y.queue = {
          last: null,
          dispatch: null
        }, I = R.dispatch = Pl.bind(null, Ke, R);
        return [Y.memoizedState, I];
      }
    }
    function _i(n, e) {
      Ke = Jr(), Y = so();
      var t = e === void 0 ? null : e;
      if (Y !== null) {
        var r = Y.memoizedState;
        if (r !== null && t !== null) {
          var o = r[1];
          if (kl(t, o))
            return r[0];
        }
      }
      kt = !0;
      var l = n();
      return kt = !1, Y.memoizedState = [l, t], l;
    }
    function Rl(n) {
      Ke = Jr(), Y = so();
      var e = Y.memoizedState;
      if (e === null) {
        var t = {
          current: n
        };
        return Object.seal(t), Y.memoizedState = t, t;
      } else
        return e;
    }
    function Il(n, e) {
      Rr = "useLayoutEffect", h("useLayoutEffect does nothing on the server, because its effect cannot be encoded into the server renderer's output format. This will lead to a mismatch between the initial, non-hydrated UI and the intended UI. To avoid this, useLayoutEffect should only be used in components that render exclusively on the client. See https://reactjs.org/link/uselayouteffect-ssr for common fixes.");
    }
    function Pl(n, e, t) {
      if (Wt >= xl)
        throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
      if (n === Ke) {
        la = !0;
        var r = {
          action: t,
          next: null
        };
        et === null && (et = /* @__PURE__ */ new Map());
        var o = et.get(e);
        if (o === void 0)
          et.set(e, r);
        else {
          for (var l = o; l.next !== null; )
            l = l.next;
          l.next = r;
        }
      }
    }
    function Fl(n, e) {
      return _i(function() {
        return n;
      }, e);
    }
    function Dl(n, e, t) {
      return Jr(), e(n._source);
    }
    function Al(n, e, t) {
      if (t === void 0)
        throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
      return t();
    }
    function ua(n) {
      return Jr(), n;
    }
    function Mi() {
      throw new Error("startTransition cannot be called during server rendering.");
    }
    function Ka() {
      return Jr(), [!1, Mi];
    }
    function Oi() {
      var n = Dn, e = yl(n.treeContext), t = uo;
      if (t === null)
        throw new Error("Invalid hook call. Hooks can only be called inside of the body of a function component.");
      var r = qe++;
      return pt(t, e, r);
    }
    function ca() {
    }
    var fa = {
      readContext: Fi,
      useContext: Di,
      useMemo: _i,
      useReducer: Ai,
      useRef: Rl,
      useState: El,
      useInsertionEffect: ca,
      useLayoutEffect: Il,
      useCallback: Fl,
      // useImperativeHandle is not run in the server environment
      useImperativeHandle: ca,
      // Effects are not run in the server environment.
      useEffect: ca,
      // Debugging effect
      useDebugValue: ca,
      useDeferredValue: ua,
      useTransition: Ka,
      useId: Oi,
      // Subscriptions are not setup in a server environment.
      useMutableSource: Dl,
      useSyncExternalStore: Al
    }, uo = null;
    function da(n) {
      uo = n;
    }
    function An(n) {
      try {
        var e = "", t = n;
        do {
          switch (t.tag) {
            case 0:
              e += Yr(t.type, null, null);
              break;
            case 1:
              e += za(t.type, null, null);
              break;
            case 2:
              e += bi(t.type, null, null);
              break;
          }
          t = t.parent;
        } while (t);
        return e;
      } catch (r) {
        return `
Error generating stack: ` + r.message + `
` + r.stack;
      }
    }
    var pa = z.ReactCurrentDispatcher, ha = z.ReactDebugCurrentFrame, va = 0, _n = 1, qa = 2, Qr = 3, Li = 4, _l = 0, Mn = 1, On = 2, Ml = 12800;
    function Ol(n) {
      return console.error(n), null;
    }
    function Kr() {
    }
    function ga(n, e, t, r, o, l, c, d, m) {
      var S = [], R = /* @__PURE__ */ new Set(), I = {
        destination: null,
        responseState: e,
        progressiveChunkSize: r === void 0 ? Ml : r,
        status: _l,
        fatalError: null,
        nextSegmentId: 0,
        allPendingTasks: 0,
        pendingRootTasks: 0,
        completedRootSegment: null,
        abortableTasks: R,
        pingedTasks: S,
        clientRenderedBoundaries: [],
        completedBoundaries: [],
        partialBoundaries: [],
        onError: o === void 0 ? Ol : o,
        onAllReady: l === void 0 ? Kr : l,
        onShellReady: c === void 0 ? Kr : c,
        onShellError: d === void 0 ? Kr : d,
        onFatalError: m === void 0 ? Kr : m
      }, M = co(
        I,
        0,
        null,
        t,
        // Root segments are never embedded in Text on either edge
        !1,
        !1
      );
      M.parentFlushed = !0;
      var j = qr(I, n, null, M, R, Zo, Jo, ml);
      return S.push(j), I;
    }
    function or(n, e) {
      var t = n.pingedTasks;
      t.push(e), t.length === 1 && $e(function() {
        return ci(n);
      });
    }
    function ei(n, e) {
      return {
        id: yr,
        rootSegmentID: -1,
        parentFlushed: !1,
        pendingTasks: 0,
        forceClientRender: !1,
        completedSegments: [],
        byteSize: 0,
        fallbackAbortableTasks: e,
        errorDigest: null
      };
    }
    function qr(n, e, t, r, o, l, c, d) {
      n.allPendingTasks++, t === null ? n.pendingRootTasks++ : t.pendingTasks++;
      var m = {
        node: e,
        ping: function() {
          return or(n, m);
        },
        blockedBoundary: t,
        blockedSegment: r,
        abortSet: o,
        legacyContext: l,
        context: c,
        treeContext: d
      };
      return m.componentStack = null, o.add(m), m;
    }
    function co(n, e, t, r, o, l) {
      return {
        status: va,
        id: -1,
        // lazily assigned later
        index: e,
        parentFlushed: !1,
        chunks: [],
        children: [],
        formatContext: r,
        boundary: t,
        lastPushedText: o,
        textEmbedded: l
      };
    }
    var ar = null;
    function $t() {
      return ar === null || ar.componentStack === null ? "" : An(ar.componentStack);
    }
    function ir(n, e) {
      n.componentStack = {
        tag: 0,
        parent: n.componentStack,
        type: e
      };
    }
    function ma(n, e) {
      n.componentStack = {
        tag: 1,
        parent: n.componentStack,
        type: e
      };
    }
    function fo(n, e) {
      n.componentStack = {
        tag: 2,
        parent: n.componentStack,
        type: e
      };
    }
    function Ct(n) {
      n.componentStack === null ? h("Unexpectedly popped too many stack frames. This is a bug in React.") : n.componentStack = n.componentStack.parent;
    }
    var po = null;
    function ti(n, e) {
      {
        var t;
        typeof e == "string" ? t = e : e && typeof e.message == "string" ? t = e.message : t = String(e);
        var r = po || $t();
        po = null, n.errorMessage = t, n.errorComponentStack = r;
      }
    }
    function ho(n, e) {
      var t = n.onError(e);
      if (t != null && typeof t != "string")
        throw new Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof t + '" instead');
      return t;
    }
    function vo(n, e) {
      var t = n.onShellError;
      t(e);
      var r = n.onFatalError;
      r(e), n.destination !== null ? (n.status = On, me(n.destination, e)) : (n.status = Mn, n.fatalError = e);
    }
    function Bi(n, e, t) {
      ir(e, "Suspense");
      var r = e.blockedBoundary, o = e.blockedSegment, l = t.fallback, c = t.children, d = /* @__PURE__ */ new Set(), m = ei(n, d), S = o.chunks.length, R = co(
        n,
        S,
        m,
        o.formatContext,
        // boundaries never require text embedding at their edges because comment nodes bound them
        !1,
        !1
      );
      o.children.push(R), o.lastPushedText = !1;
      var I = co(
        n,
        0,
        null,
        o.formatContext,
        // boundaries never require text embedding at their edges because comment nodes bound them
        !1,
        !1
      );
      I.parentFlushed = !0, e.blockedBoundary = m, e.blockedSegment = I;
      try {
        if (Ln(n, e, c), Be(I.chunks, n.responseState, I.lastPushedText, I.textEmbedded), I.status = _n, en(m, I), m.pendingTasks === 0) {
          Ct(e);
          return;
        }
      } catch (j) {
        I.status = Li, m.forceClientRender = !0, m.errorDigest = ho(n, j), ti(m, j);
      } finally {
        e.blockedBoundary = r, e.blockedSegment = o;
      }
      var M = qr(n, l, r, R, d, e.legacyContext, e.context, e.treeContext);
      M.componentStack = e.componentStack, n.pingedTasks.push(M), Ct(e);
    }
    function Ll(n, e, t, r) {
      ir(e, t);
      var o = e.blockedSegment, l = Wr(o.chunks, t, r, n.responseState, o.formatContext);
      o.lastPushedText = !1;
      var c = o.formatContext;
      o.formatContext = Kt(c, t, r), Ln(n, e, l), o.formatContext = c, Co(o.chunks, t), o.lastPushedText = !1, Ct(e);
    }
    function Ui(n) {
      return n.prototype && n.prototype.isReactComponent;
    }
    function go(n, e, t, r, o) {
      var l = {};
      Cl(e, l);
      var c = t(r, o);
      return Tl(t, r, c, o);
    }
    function ri(n, e, t, r, o) {
      var l = t.render();
      t.props !== o && (ii || h("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", oe(r) || "a component"), ii = !0);
      {
        var c = r.childContextTypes;
        if (c != null) {
          var d = e.legacyContext, m = Wa(t, r, d, c);
          e.legacyContext = m, je(n, e, l), e.legacyContext = d;
          return;
        }
      }
      je(n, e, l);
    }
    function Hi(n, e, t, r) {
      fo(e, t);
      var o = kr(t, e.legacyContext), l = Pi(t, r, o);
      lo(l, t, r, o), ri(n, e, l, t, r), Ct(e);
    }
    var ni = {}, mo = {}, oi = {}, ai = {}, ii = !1, ji = {}, zi = !1, li = !1, Wi = !1;
    function Bl(n, e, t, r) {
      var o;
      if (o = kr(t, e.legacyContext), ma(e, t), t.prototype && typeof t.prototype.render == "function") {
        var l = oe(t) || "Unknown";
        ni[l] || (h("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", l, l), ni[l] = !0);
      }
      var c = go(n, e, t, r, o), d = sa();
      if (typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0) {
        var m = oe(t) || "Unknown";
        mo[m] || (h("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", m, m, m), mo[m] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0
      ) {
        {
          var S = oe(t) || "Unknown";
          mo[S] || (h("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", S, S, S), mo[S] = !0);
        }
        lo(c, t, r, o), ri(n, e, c, t, r);
      } else if (Ul(t), d) {
        var R = e.treeContext, I = 1, M = 0;
        e.treeContext = Ga(R, I, M);
        try {
          je(n, e, c);
        } finally {
          e.treeContext = R;
        }
      } else
        je(n, e, c);
      Ct(e);
    }
    function Ul(n) {
      {
        if (n && n.childContextTypes && h("%s(...): childContextTypes cannot be defined on a function component.", n.displayName || n.name || "Component"), n.defaultProps !== void 0) {
          var e = oe(n) || "Unknown";
          ji[e] || (h("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", e), ji[e] = !0);
        }
        if (typeof n.getDerivedStateFromProps == "function") {
          var t = oe(n) || "Unknown";
          ai[t] || (h("%s: Function components do not support getDerivedStateFromProps.", t), ai[t] = !0);
        }
        if (typeof n.contextType == "object" && n.contextType !== null) {
          var r = oe(n) || "Unknown";
          oi[r] || (h("%s: Function components do not support contextType.", r), oi[r] = !0);
        }
      }
    }
    function $i(n, e) {
      if (n && n.defaultProps) {
        var t = Qe({}, e), r = n.defaultProps;
        for (var o in r)
          t[o] === void 0 && (t[o] = r[o]);
        return t;
      }
      return e;
    }
    function Hl(n, e, t, r, o) {
      ma(e, t.render);
      var l = go(n, e, t.render, r, o), c = sa();
      if (c) {
        var d = e.treeContext, m = 1, S = 0;
        e.treeContext = Ga(d, m, S);
        try {
          je(n, e, l);
        } finally {
          e.treeContext = d;
        }
      } else
        je(n, e, l);
      Ct(e);
    }
    function si(n, e, t, r, o) {
      var l = t.type, c = $i(l, r);
      ya(n, e, l, c, o);
    }
    function jl(n, e, t, r) {
      t._context === void 0 ? t !== t.Consumer && (Wi || (Wi = !0, h("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : t = t._context;
      var o = r.children;
      typeof o != "function" && h("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it.");
      var l = Pn(t), c = o(l);
      je(n, e, c);
    }
    function tt(n, e, t, r) {
      var o = t._context, l = r.value, c = r.children, d;
      d = e.context, e.context = $a(o, l), je(n, e, c), e.context = pl(o), d !== e.context && h("Popping the context provider did not return back to the original snapshot. This is a bug in React.");
    }
    function zl(n, e, t, r, o) {
      ir(e, "Lazy");
      var l = t._payload, c = t._init, d = c(l), m = $i(d, r);
      ya(n, e, d, m, o), Ct(e);
    }
    function ya(n, e, t, r, o) {
      if (typeof t == "function")
        if (Ui(t)) {
          Hi(n, e, t, r);
          return;
        } else {
          Bl(n, e, t, r);
          return;
        }
      if (typeof t == "string") {
        Ll(n, e, t, r);
        return;
      }
      switch (t) {
        case cl:
        case ul:
        case zo:
        case Wo:
        case jo: {
          je(n, e, r.children);
          return;
        }
        case Fa: {
          ir(e, "SuspenseList"), je(n, e, r.children), Ct(e);
          return;
        }
        case gi:
          throw new Error("ReactDOMServer does not yet support scope components.");
        case Pa: {
          Bi(n, e, r);
          return;
        }
      }
      if (typeof t == "object" && t !== null)
        switch (t.$$typeof) {
          case En: {
            Hl(n, e, t, r, o);
            return;
          }
          case Da: {
            si(n, e, t, r, o);
            return;
          }
          case Gn: {
            tt(n, e, t, r);
            return;
          }
          case Xn: {
            jl(n, e, t, r);
            return;
          }
          case $o: {
            zl(n, e, t, r);
            return;
          }
        }
      var l = "";
      throw (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (l += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (t == null ? t : typeof t) + "." + l));
    }
    function Wl(n, e) {
      typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
      n[Symbol.toStringTag] === "Generator" && (zi || h("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), zi = !0), n.entries === e && (li || h("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), li = !0);
    }
    function je(n, e, t) {
      try {
        return $l(n, e, t);
      } catch (r) {
        throw typeof r == "object" && r !== null && typeof r.then == "function" || (po = po !== null ? po : $t()), r;
      }
    }
    function $l(n, e, t) {
      if (e.node = t, typeof t == "object" && t !== null) {
        switch (t.$$typeof) {
          case vi: {
            var r = t, o = r.type, l = r.props, c = r.ref;
            ya(n, e, o, l, c);
            return;
          }
          case Ho:
            throw new Error("Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.");
          case $o: {
            var d = t, m = d._payload, S = d._init, R;
            try {
              R = S(m);
            } catch (lr) {
              throw typeof lr == "object" && lr !== null && typeof lr.then == "function" && ir(e, "Lazy"), lr;
            }
            je(n, e, R);
            return;
          }
        }
        if (Oe(t)) {
          Ni(n, e, t);
          return;
        }
        var I = Zn(t);
        if (I) {
          Wl(t, I);
          var M = I.call(t);
          if (M) {
            var j = M.next();
            if (!j.done) {
              var G = [];
              do
                G.push(j.value), j = M.next();
              while (!j.done);
              Ni(n, e, G);
              return;
            }
            return;
          }
        }
        var Te = Object.prototype.toString.call(t);
        throw new Error("Objects are not valid as a React child (found: " + (Te === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : Te) + "). If you meant to render a collection of children, use an array instead.");
      }
      if (typeof t == "string") {
        var tn = e.blockedSegment;
        tn.lastPushedText = be(e.blockedSegment.chunks, t, n.responseState, tn.lastPushedText);
        return;
      }
      if (typeof t == "number") {
        var rn = e.blockedSegment;
        rn.lastPushedText = be(e.blockedSegment.chunks, "" + t, n.responseState, rn.lastPushedText);
        return;
      }
      typeof t == "function" && h("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
    }
    function Ni(n, e, t) {
      for (var r = t.length, o = 0; o < r; o++) {
        var l = e.treeContext;
        e.treeContext = Ga(l, r, o);
        try {
          Ln(n, e, t[o]);
        } finally {
          e.treeContext = l;
        }
      }
    }
    function Vi(n, e, t) {
      var r = e.blockedSegment, o = r.chunks.length, l = co(
        n,
        o,
        null,
        r.formatContext,
        // Adopt the parent segment's leading text embed
        r.lastPushedText,
        // Assume we are text embedded at the trailing edge
        !0
      );
      r.children.push(l), r.lastPushedText = !1;
      var c = qr(n, e.node, e.blockedBoundary, l, e.abortSet, e.legacyContext, e.context, e.treeContext);
      e.componentStack !== null && (c.componentStack = e.componentStack.parent);
      var d = c.ping;
      t.then(d, d);
    }
    function Ln(n, e, t) {
      var r = e.blockedSegment.formatContext, o = e.legacyContext, l = e.context, c = null;
      c = e.componentStack;
      try {
        return je(n, e, t);
      } catch (d) {
        if (Ja(), typeof d == "object" && d !== null && typeof d.then == "function") {
          Vi(n, e, d), e.blockedSegment.formatContext = r, e.legacyContext = o, e.context = l, Tr(l), e.componentStack = c;
          return;
        } else
          throw e.blockedSegment.formatContext = r, e.legacyContext = o, e.context = l, Tr(l), e.componentStack = c, d;
      }
    }
    function Yi(n, e, t, r) {
      var o = ho(n, r);
      if (e === null ? vo(n, r) : (e.pendingTasks--, e.forceClientRender || (e.forceClientRender = !0, e.errorDigest = o, ti(e, r), e.parentFlushed && n.clientRenderedBoundaries.push(e))), n.allPendingTasks--, n.allPendingTasks === 0) {
        var l = n.onAllReady;
        l();
      }
    }
    function Nl(n) {
      var e = this, t = n.blockedBoundary, r = n.blockedSegment;
      r.status = Qr, yo(e, t, r);
    }
    function ui(n, e, t) {
      var r = n.blockedBoundary, o = n.blockedSegment;
      if (o.status = Qr, r === null)
        e.allPendingTasks--, e.status !== On && (e.status = On, e.destination !== null && fe(e.destination));
      else {
        if (r.pendingTasks--, !r.forceClientRender) {
          r.forceClientRender = !0;
          var l = t === void 0 ? new Error("The render was aborted by the server without a reason.") : t;
          r.errorDigest = e.onError(l);
          {
            var c = "The server did not finish this Suspense boundary: ";
            l && typeof l.message == "string" ? l = c + l.message : l = c + String(l);
            var d = ar;
            ar = n;
            try {
              ti(r, l);
            } finally {
              ar = d;
            }
          }
          r.parentFlushed && e.clientRenderedBoundaries.push(r);
        }
        if (r.fallbackAbortableTasks.forEach(function(S) {
          return ui(S, e, t);
        }), r.fallbackAbortableTasks.clear(), e.allPendingTasks--, e.allPendingTasks === 0) {
          var m = e.onAllReady;
          m();
        }
      }
    }
    function en(n, e) {
      if (e.chunks.length === 0 && e.children.length === 1 && e.children[0].boundary === null) {
        var t = e.children[0];
        t.id = e.id, t.parentFlushed = !0, t.status === _n && en(n, t);
      } else {
        var r = n.completedSegments;
        r.push(e);
      }
    }
    function yo(n, e, t) {
      if (e === null) {
        if (t.parentFlushed) {
          if (n.completedRootSegment !== null)
            throw new Error("There can only be one root segment. This is a bug in React.");
          n.completedRootSegment = t;
        }
        if (n.pendingRootTasks--, n.pendingRootTasks === 0) {
          n.onShellError = Kr;
          var r = n.onShellReady;
          r();
        }
      } else if (e.pendingTasks--, !e.forceClientRender) {
        if (e.pendingTasks === 0)
          t.parentFlushed && t.status === _n && en(e, t), e.parentFlushed && n.completedBoundaries.push(e), e.fallbackAbortableTasks.forEach(Nl, n), e.fallbackAbortableTasks.clear();
        else if (t.parentFlushed && t.status === _n) {
          en(e, t);
          var o = e.completedSegments;
          o.length === 1 && e.parentFlushed && n.partialBoundaries.push(e);
        }
      }
      if (n.allPendingTasks--, n.allPendingTasks === 0) {
        var l = n.onAllReady;
        l();
      }
    }
    function Vl(n, e) {
      var t = e.blockedSegment;
      if (t.status === va) {
        Tr(e.context);
        var r = null;
        r = ar, ar = e;
        try {
          je(n, e, e.node), Be(t.chunks, n.responseState, t.lastPushedText, t.textEmbedded), e.abortSet.delete(e), t.status = _n, yo(n, e.blockedBoundary, t);
        } catch (l) {
          if (Ja(), typeof l == "object" && l !== null && typeof l.then == "function") {
            var o = e.ping;
            l.then(o, o);
          } else
            e.abortSet.delete(e), t.status = Li, Yi(n, e.blockedBoundary, t, l);
        } finally {
          ar = r;
        }
      }
    }
    function ci(n) {
      if (n.status !== On) {
        var e = Ti(), t = pa.current;
        pa.current = fa;
        var r;
        r = ha.getCurrentStack, ha.getCurrentStack = $t;
        var o = uo;
        da(n.responseState);
        try {
          var l = n.pingedTasks, c;
          for (c = 0; c < l.length; c++) {
            var d = l[c];
            Vl(n, d);
          }
          l.splice(0, c), n.destination !== null && fi(n, n.destination);
        } catch (m) {
          ho(n, m), vo(n, m);
        } finally {
          da(o), pa.current = t, ha.getCurrentStack = r, t === fa && Tr(e);
        }
      }
    }
    function So(n, e, t) {
      switch (t.parentFlushed = !0, t.status) {
        case va: {
          var r = t.id = n.nextSegmentId++;
          return t.lastPushedText = !1, t.textEmbedded = !1, To(e, n.responseState, r);
        }
        case _n: {
          t.status = qa;
          for (var o = !0, l = t.chunks, c = 0, d = t.children, m = 0; m < d.length; m++) {
            for (var S = d[m]; c < S.index; c++)
              _(e, l[c]);
            o = Sa(n, e, S);
          }
          for (; c < l.length - 1; c++)
            _(e, l[c]);
          return c < l.length && (o = J(e, l[c])), o;
        }
        default:
          throw new Error("Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React.");
      }
    }
    function Sa(n, e, t) {
      var r = t.boundary;
      if (r === null)
        return So(n, e, t);
      if (r.parentFlushed = !0, r.forceClientRender)
        return Ue(e, n.responseState, r.errorDigest, r.errorMessage, r.errorComponentStack), So(n, e, t), Ra(e, n.responseState);
      if (r.pendingTasks > 0) {
        r.rootSegmentID = n.nextSegmentId++, r.completedSegments.length > 0 && n.partialBoundaries.push(r);
        var o = r.id = ze(n.responseState);
        return bn(e, n.responseState, o), So(n, e, t), wn(e, n.responseState);
      } else {
        if (r.byteSize > n.progressiveChunkSize)
          return r.rootSegmentID = n.nextSegmentId++, n.completedBoundaries.push(r), bn(e, n.responseState, r.id), So(n, e, t), wn(e, n.responseState);
        Io(e, n.responseState);
        var l = r.completedSegments;
        if (l.length !== 1)
          throw new Error("A previously unvisited boundary must have exactly one root segment. This is a bug in React.");
        var c = l[0];
        return Sa(n, e, c), Po(e, n.responseState);
      }
    }
    function Gi(n, e, t) {
      return sl(e, n.responseState, t.id, t.errorDigest, t.errorMessage, t.errorComponentStack);
    }
    function ba(n, e, t) {
      return $(e, n.responseState, t.formatContext, t.id), Sa(n, e, t), te(e, t.formatContext);
    }
    function Xi(n, e, t) {
      for (var r = t.completedSegments, o = 0; o < r.length; o++) {
        var l = r[o];
        Zi(n, e, t, l);
      }
      return r.length = 0, pi(e, n.responseState, t.id, t.rootSegmentID);
    }
    function Yl(n, e, t) {
      for (var r = t.completedSegments, o = 0; o < r.length; o++) {
        var l = r[o];
        if (!Zi(n, e, t, l))
          return o++, r.splice(0, o), !1;
      }
      return r.splice(0, o), !0;
    }
    function Zi(n, e, t, r) {
      if (r.status === qa)
        return !0;
      var o = r.id;
      if (o === -1) {
        var l = r.id = t.rootSegmentID;
        if (l === -1)
          throw new Error("A root segment ID must have been assigned by now. This is a bug in React.");
        return ba(n, e, r);
      } else
        return ba(n, e, r), tl(e, n.responseState, o);
    }
    function fi(n, e) {
      gt();
      try {
        var t = n.completedRootSegment;
        t !== null && n.pendingRootTasks === 0 && (Sa(n, e, t), n.completedRootSegment = null, Ca(e, n.responseState));
        var r = n.clientRenderedBoundaries, o;
        for (o = 0; o < r.length; o++) {
          var l = r[o];
          Gi(n, e, l);
        }
        r.splice(0, o);
        var c = n.completedBoundaries;
        for (o = 0; o < c.length; o++) {
          var d = c[o];
          Xi(n, e, d);
        }
        c.splice(0, o), nn(e), gt(e);
        var m = n.partialBoundaries;
        for (o = 0; o < m.length; o++) {
          var S = m[o];
          if (!Yl(n, e, S)) {
            n.destination = null, o++, m.splice(0, o);
            return;
          }
        }
        m.splice(0, o);
        var R = n.completedBoundaries;
        for (o = 0; o < R.length; o++) {
          var I = R[o];
          Xi(n, e, I);
        }
        R.splice(0, o);
      } finally {
        nn(e), n.allPendingTasks === 0 && n.pingedTasks.length === 0 && n.clientRenderedBoundaries.length === 0 && n.completedBoundaries.length === 0 && (n.abortableTasks.size !== 0 && h("There was still abortable task at the root when we closed. This is a bug in React."), fe(e));
      }
    }
    function Ji(n) {
      $e(function() {
        return ci(n);
      });
    }
    function Gl(n, e) {
      if (n.status === Mn) {
        n.status = On, me(e, n.fatalError);
        return;
      }
      if (n.status !== On && n.destination === null) {
        n.destination = e;
        try {
          fi(n, e);
        } catch (t) {
          ho(n, t), vo(n, t);
        }
      }
    }
    function Qi(n, e) {
      try {
        var t = n.abortableTasks;
        t.forEach(function(r) {
          return ui(r, n, e);
        }), t.clear(), n.destination !== null && fi(n, n.destination);
      } catch (r) {
        ho(n, r), vo(n, r);
      }
    }
    function Xl(n, e) {
      return new Promise(function(t, r) {
        var o, l, c = new Promise(function(M, j) {
          l = M, o = j;
        });
        function d() {
          var M = new ReadableStream(
            {
              type: "bytes",
              pull: function(j) {
                Gl(S, j);
              },
              cancel: function(j) {
                Qi(S);
              }
            },
            // $FlowFixMe size() methods are not allowed on byte streams.
            {
              highWaterMark: 0
            }
          );
          M.allReady = c, t(M);
        }
        function m(M) {
          c.catch(function() {
          }), r(M);
        }
        var S = ga(n, dn(e ? e.identifierPrefix : void 0, e ? e.nonce : void 0, e ? e.bootstrapScriptContent : void 0, e ? e.bootstrapScripts : void 0, e ? e.bootstrapModules : void 0), Bt(e ? e.namespaceURI : void 0), e ? e.progressiveChunkSize : void 0, e ? e.onError : void 0, l, d, m, o);
        if (e && e.signal) {
          var R = e.signal, I = function() {
            Qi(S, R.reason), R.removeEventListener("abort", I);
          };
          R.addEventListener("abort", I);
        }
        Ji(S);
      });
    }
    qi.renderToReadableStream = Xl, qi.version = F;
  }()), qi;
}
var xo, Jl;
Ql.env.NODE_ENV === "production" ? (xo = ws(), Jl = xs()) : (xo = ks(), Jl = Cs());
xo.version;
xo.renderToString;
xo.renderToStaticMarkup;
xo.renderToNodeStream;
xo.renderToStaticNodeStream;
Jl.renderToReadableStream;
let os = !1;
function Ts(ce, { id: F = "remix-island", cleanup: z = !0 } = {}) {
  const Q = (h) => {
    const [W, $e] = Nt.useState(os);
    return Nt.useEffect(() => {
      z && Es(Q), os = !0, $e(!0);
    }, []), !W && h.__remix_island_render_server ? Nt.createElement(ce) : W ? ps.createPortal(Nt.createElement(ce), document.head) : null;
  };
  return Q.displayName = "RemixIslandHead", Q.__remix_island_id = F, Q;
}
function Es(ce, F = document.head) {
  let z = !1;
  const Q = [], h = ce.__remix_island_id;
  for (const W of F.childNodes) if (!(!z && W.nodeName !== "#comment")) {
    if (z && W.nodeName === "#comment" && W.nodeValue === `${h}-end`) {
      Q.push(W);
      break;
    }
    (z || W.nodeName === "#comment" && W.nodeValue === `${h}-start`) && (z = !0, Q.push(W));
  }
  for (const W of Q) W.remove();
}
const Rs = "/index.css", Is = "/xterm.css", Ms = () => [{
  rel: "icon",
  href: "/favicon.ico",
  type: "image/svg+xml"
}, {
  rel: "stylesheet",
  href: ql
}, {
  rel: "stylesheet",
  href: ql
}, {
  rel: "stylesheet",
  href: Rs
}, {
  rel: "stylesheet",
  href: Is
}, {
  rel: "preconnect",
  href: "https://fonts.googleapis.com"
}, {
  rel: "preconnect",
  href: "https://fonts.gstatic.com",
  crossOrigin: "anonymous"
}, {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
}], Ps = ys`
  setTutorialKitTheme();

  function setTutorialKitTheme() {
    let theme = localStorage.getItem('bolt_theme');

    if (!theme) {
      theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    document.querySelector('html')?.setAttribute('data-theme', theme);
  }
`;
Ts(() => /* @__PURE__ */ Tt.jsxs(Tt.Fragment, {
  children: [/* @__PURE__ */ Tt.jsx("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ Tt.jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1"
  }), /* @__PURE__ */ Tt.jsx(gs, {}), /* @__PURE__ */ Tt.jsx(ms, {}), /* @__PURE__ */ Tt.jsx("script", {
    dangerouslySetInnerHTML: {
      __html: Ps
    }
  })]
}));
function Fs({
  children: ce
}) {
  const F = as(is);
  return Nt.useEffect(() => {
    document.querySelector("html")?.setAttribute("data-theme", F);
  }, [F]), /* @__PURE__ */ Tt.jsxs(Tt.Fragment, {
    children: [ce, /* @__PURE__ */ Tt.jsx(bs, {}), /* @__PURE__ */ Tt.jsx(vs, {})]
  });
}
function Os() {
  const ce = as(is);
  return Nt.useEffect(() => {
    Ss.logSystem("Application initialized", {
      theme: ce,
      platform: navigator.platform,
      userAgent: navigator.userAgent,
      timestamp: (/* @__PURE__ */ new Date()).toISOString()
    });
  }, []), /* @__PURE__ */ Tt.jsx(Fs, {
    children: /* @__PURE__ */ Tt.jsx(hs, {})
  });
}
export {
  Fs as Layout,
  Os as default,
  Ms as links
};
