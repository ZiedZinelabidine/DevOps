import { p as je, g as b0, A as Kk, i as sn, b as D0, s as es, w as Wa, m as uC, j as yv, d as oC, e as k0, f as O0, r as L0, h as qk, k as ZE, l as l0, D as Jk, n as Zk, o as eO, q as N0, S as M0, E as wy } from "./single-fetch-DXQUw6pg.js";
function U0(d, m) {
  for (var v = 0; v < m.length; v++) {
    const R = m[v];
    if (typeof R != "string" && !Array.isArray(R)) {
      for (const w in R)
        if (w !== "default" && !(w in d)) {
          const b = Object.getOwnPropertyDescriptor(R, w);
          b && Object.defineProperty(d, w, b.get ? b : {
            enumerable: !0,
            get: () => R[w]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(d, Symbol.toStringTag, { value: "Module" }));
}
var eC = { exports: {} }, dv = {}, tC = { exports: {} }, Ot = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var u0;
function tO() {
  if (u0) return Ot;
  u0 = 1;
  var d = Symbol.for("react.element"), m = Symbol.for("react.portal"), v = Symbol.for("react.fragment"), R = Symbol.for("react.strict_mode"), w = Symbol.for("react.profiler"), b = Symbol.for("react.provider"), g = Symbol.for("react.context"), U = Symbol.for("react.forward_ref"), N = Symbol.for("react.suspense"), F = Symbol.for("react.memo"), K = Symbol.for("react.lazy"), O = Symbol.iterator;
  function j(P) {
    return P === null || typeof P != "object" ? null : (P = O && P[O] || P["@@iterator"], typeof P == "function" ? P : null);
  }
  var Y = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, H = Object.assign, de = {};
  function se(P, ee, nt) {
    this.props = P, this.context = ee, this.refs = de, this.updater = nt || Y;
  }
  se.prototype.isReactComponent = {}, se.prototype.setState = function(P, ee) {
    if (typeof P != "object" && typeof P != "function" && P != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, P, ee, "setState");
  }, se.prototype.forceUpdate = function(P) {
    this.updater.enqueueForceUpdate(this, P, "forceUpdate");
  };
  function be() {
  }
  be.prototype = se.prototype;
  function ne(P, ee, nt) {
    this.props = P, this.context = ee, this.refs = de, this.updater = nt || Y;
  }
  var le = ne.prototype = new be();
  le.constructor = ne, H(le, se.prototype), le.isPureReactComponent = !0;
  var pe = Array.isArray, me = Object.prototype.hasOwnProperty, ye = { current: null }, Se = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Le(P, ee, nt) {
    var Ze, Rt = {}, yt = null, vt = null;
    if (ee != null) for (Ze in ee.ref !== void 0 && (vt = ee.ref), ee.key !== void 0 && (yt = "" + ee.key), ee) me.call(ee, Ze) && !Se.hasOwnProperty(Ze) && (Rt[Ze] = ee[Ze]);
    var gt = arguments.length - 2;
    if (gt === 1) Rt.children = nt;
    else if (1 < gt) {
      for (var wt = Array(gt), Qt = 0; Qt < gt; Qt++) wt[Qt] = arguments[Qt + 2];
      Rt.children = wt;
    }
    if (P && P.defaultProps) for (Ze in gt = P.defaultProps, gt) Rt[Ze] === void 0 && (Rt[Ze] = gt[Ze]);
    return { $$typeof: d, type: P, key: yt, ref: vt, props: Rt, _owner: ye.current };
  }
  function Qe(P, ee) {
    return { $$typeof: d, type: P.type, key: ee, ref: P.ref, props: P.props, _owner: P._owner };
  }
  function it(P) {
    return typeof P == "object" && P !== null && P.$$typeof === d;
  }
  function Ct(P) {
    var ee = { "=": "=0", ":": "=2" };
    return "$" + P.replace(/[=:]/g, function(nt) {
      return ee[nt];
    });
  }
  var et = /\/+/g;
  function Be(P, ee) {
    return typeof P == "object" && P !== null && P.key != null ? Ct("" + P.key) : ee.toString(36);
  }
  function mt(P, ee, nt, Ze, Rt) {
    var yt = typeof P;
    (yt === "undefined" || yt === "boolean") && (P = null);
    var vt = !1;
    if (P === null) vt = !0;
    else switch (yt) {
      case "string":
      case "number":
        vt = !0;
        break;
      case "object":
        switch (P.$$typeof) {
          case d:
          case m:
            vt = !0;
        }
    }
    if (vt) return vt = P, Rt = Rt(vt), P = Ze === "" ? "." + Be(vt, 0) : Ze, pe(Rt) ? (nt = "", P != null && (nt = P.replace(et, "$&/") + "/"), mt(Rt, ee, nt, "", function(Qt) {
      return Qt;
    })) : Rt != null && (it(Rt) && (Rt = Qe(Rt, nt + (!Rt.key || vt && vt.key === Rt.key ? "" : ("" + Rt.key).replace(et, "$&/") + "/") + P)), ee.push(Rt)), 1;
    if (vt = 0, Ze = Ze === "" ? "." : Ze + ":", pe(P)) for (var gt = 0; gt < P.length; gt++) {
      yt = P[gt];
      var wt = Ze + Be(yt, gt);
      vt += mt(yt, ee, nt, wt, Rt);
    }
    else if (wt = j(P), typeof wt == "function") for (P = wt.call(P), gt = 0; !(yt = P.next()).done; ) yt = yt.value, wt = Ze + Be(yt, gt++), vt += mt(yt, ee, nt, wt, Rt);
    else if (yt === "object") throw ee = String(P), Error("Objects are not valid as a React child (found: " + (ee === "[object Object]" ? "object with keys {" + Object.keys(P).join(", ") + "}" : ee) + "). If you meant to render a collection of children, use an array instead.");
    return vt;
  }
  function ct(P, ee, nt) {
    if (P == null) return P;
    var Ze = [], Rt = 0;
    return mt(P, Ze, "", "", function(yt) {
      return ee.call(nt, yt, Rt++);
    }), Ze;
  }
  function kt(P) {
    if (P._status === -1) {
      var ee = P._result;
      ee = ee(), ee.then(function(nt) {
        (P._status === 0 || P._status === -1) && (P._status = 1, P._result = nt);
      }, function(nt) {
        (P._status === 0 || P._status === -1) && (P._status = 2, P._result = nt);
      }), P._status === -1 && (P._status = 0, P._result = ee);
    }
    if (P._status === 1) return P._result.default;
    throw P._result;
  }
  var Pe = { current: null }, he = { transition: null }, $e = { ReactCurrentDispatcher: Pe, ReactCurrentBatchConfig: he, ReactCurrentOwner: ye };
  function Re() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return Ot.Children = { map: ct, forEach: function(P, ee, nt) {
    ct(P, function() {
      ee.apply(this, arguments);
    }, nt);
  }, count: function(P) {
    var ee = 0;
    return ct(P, function() {
      ee++;
    }), ee;
  }, toArray: function(P) {
    return ct(P, function(ee) {
      return ee;
    }) || [];
  }, only: function(P) {
    if (!it(P)) throw Error("React.Children.only expected to receive a single React element child.");
    return P;
  } }, Ot.Component = se, Ot.Fragment = v, Ot.Profiler = w, Ot.PureComponent = ne, Ot.StrictMode = R, Ot.Suspense = N, Ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $e, Ot.act = Re, Ot.cloneElement = function(P, ee, nt) {
    if (P == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + P + ".");
    var Ze = H({}, P.props), Rt = P.key, yt = P.ref, vt = P._owner;
    if (ee != null) {
      if (ee.ref !== void 0 && (yt = ee.ref, vt = ye.current), ee.key !== void 0 && (Rt = "" + ee.key), P.type && P.type.defaultProps) var gt = P.type.defaultProps;
      for (wt in ee) me.call(ee, wt) && !Se.hasOwnProperty(wt) && (Ze[wt] = ee[wt] === void 0 && gt !== void 0 ? gt[wt] : ee[wt]);
    }
    var wt = arguments.length - 2;
    if (wt === 1) Ze.children = nt;
    else if (1 < wt) {
      gt = Array(wt);
      for (var Qt = 0; Qt < wt; Qt++) gt[Qt] = arguments[Qt + 2];
      Ze.children = gt;
    }
    return { $$typeof: d, type: P.type, key: Rt, ref: yt, props: Ze, _owner: vt };
  }, Ot.createContext = function(P) {
    return P = { $$typeof: g, _currentValue: P, _currentValue2: P, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, P.Provider = { $$typeof: b, _context: P }, P.Consumer = P;
  }, Ot.createElement = Le, Ot.createFactory = function(P) {
    var ee = Le.bind(null, P);
    return ee.type = P, ee;
  }, Ot.createRef = function() {
    return { current: null };
  }, Ot.forwardRef = function(P) {
    return { $$typeof: U, render: P };
  }, Ot.isValidElement = it, Ot.lazy = function(P) {
    return { $$typeof: K, _payload: { _status: -1, _result: P }, _init: kt };
  }, Ot.memo = function(P, ee) {
    return { $$typeof: F, type: P, compare: ee === void 0 ? null : ee };
  }, Ot.startTransition = function(P) {
    var ee = he.transition;
    he.transition = {};
    try {
      P();
    } finally {
      he.transition = ee;
    }
  }, Ot.unstable_act = Re, Ot.useCallback = function(P, ee) {
    return Pe.current.useCallback(P, ee);
  }, Ot.useContext = function(P) {
    return Pe.current.useContext(P);
  }, Ot.useDebugValue = function() {
  }, Ot.useDeferredValue = function(P) {
    return Pe.current.useDeferredValue(P);
  }, Ot.useEffect = function(P, ee) {
    return Pe.current.useEffect(P, ee);
  }, Ot.useId = function() {
    return Pe.current.useId();
  }, Ot.useImperativeHandle = function(P, ee, nt) {
    return Pe.current.useImperativeHandle(P, ee, nt);
  }, Ot.useInsertionEffect = function(P, ee) {
    return Pe.current.useInsertionEffect(P, ee);
  }, Ot.useLayoutEffect = function(P, ee) {
    return Pe.current.useLayoutEffect(P, ee);
  }, Ot.useMemo = function(P, ee) {
    return Pe.current.useMemo(P, ee);
  }, Ot.useReducer = function(P, ee, nt) {
    return Pe.current.useReducer(P, ee, nt);
  }, Ot.useRef = function(P) {
    return Pe.current.useRef(P);
  }, Ot.useState = function(P) {
    return Pe.current.useState(P);
  }, Ot.useSyncExternalStore = function(P, ee, nt) {
    return Pe.current.useSyncExternalStore(P, ee, nt);
  }, Ot.useTransition = function() {
    return Pe.current.useTransition();
  }, Ot.version = "18.3.1", Ot;
}
var mv = { exports: {} };
mv.exports;
var o0;
function nO() {
  return o0 || (o0 = 1, function(d, m) {
    je.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var v = "18.3.1", R = Symbol.for("react.element"), w = Symbol.for("react.portal"), b = Symbol.for("react.fragment"), g = Symbol.for("react.strict_mode"), U = Symbol.for("react.profiler"), N = Symbol.for("react.provider"), F = Symbol.for("react.context"), K = Symbol.for("react.forward_ref"), O = Symbol.for("react.suspense"), j = Symbol.for("react.suspense_list"), Y = Symbol.for("react.memo"), H = Symbol.for("react.lazy"), de = Symbol.for("react.offscreen"), se = Symbol.iterator, be = "@@iterator";
      function ne(S) {
        if (S === null || typeof S != "object")
          return null;
        var _ = se && S[se] || S[be];
        return typeof _ == "function" ? _ : null;
      }
      var le = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, pe = {
        transition: null
      }, me = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, ye = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, Se = {}, Le = null;
      function Qe(S) {
        Le = S;
      }
      Se.setExtraStackFrame = function(S) {
        Le = S;
      }, Se.getCurrentStack = null, Se.getStackAddendum = function() {
        var S = "";
        Le && (S += Le);
        var _ = Se.getCurrentStack;
        return _ && (S += _() || ""), S;
      };
      var it = !1, Ct = !1, et = !1, Be = !1, mt = !1, ct = {
        ReactCurrentDispatcher: le,
        ReactCurrentBatchConfig: pe,
        ReactCurrentOwner: ye
      };
      ct.ReactDebugCurrentFrame = Se, ct.ReactCurrentActQueue = me;
      function kt(S) {
        {
          for (var _ = arguments.length, Q = new Array(_ > 1 ? _ - 1 : 0), q = 1; q < _; q++)
            Q[q - 1] = arguments[q];
          he("warn", S, Q);
        }
      }
      function Pe(S) {
        {
          for (var _ = arguments.length, Q = new Array(_ > 1 ? _ - 1 : 0), q = 1; q < _; q++)
            Q[q - 1] = arguments[q];
          he("error", S, Q);
        }
      }
      function he(S, _, Q) {
        {
          var q = ct.ReactDebugCurrentFrame, ve = q.getStackAddendum();
          ve !== "" && (_ += "%s", Q = Q.concat([ve]));
          var Ge = Q.map(function(Ce) {
            return String(Ce);
          });
          Ge.unshift("Warning: " + _), Function.prototype.apply.call(console[S], console, Ge);
        }
      }
      var $e = {};
      function Re(S, _) {
        {
          var Q = S.constructor, q = Q && (Q.displayName || Q.name) || "ReactClass", ve = q + "." + _;
          if ($e[ve])
            return;
          Pe("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", _, q), $e[ve] = !0;
        }
      }
      var P = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(S) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(S, _, Q) {
          Re(S, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(S, _, Q, q) {
          Re(S, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(S, _, Q, q) {
          Re(S, "setState");
        }
      }, ee = Object.assign, nt = {};
      Object.freeze(nt);
      function Ze(S, _, Q) {
        this.props = S, this.context = _, this.refs = nt, this.updater = Q || P;
      }
      Ze.prototype.isReactComponent = {}, Ze.prototype.setState = function(S, _) {
        if (typeof S != "object" && typeof S != "function" && S != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, S, _, "setState");
      }, Ze.prototype.forceUpdate = function(S) {
        this.updater.enqueueForceUpdate(this, S, "forceUpdate");
      };
      {
        var Rt = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, yt = function(S, _) {
          Object.defineProperty(Ze.prototype, S, {
            get: function() {
              kt("%s(...) is deprecated in plain JavaScript React classes. %s", _[0], _[1]);
            }
          });
        };
        for (var vt in Rt)
          Rt.hasOwnProperty(vt) && yt(vt, Rt[vt]);
      }
      function gt() {
      }
      gt.prototype = Ze.prototype;
      function wt(S, _, Q) {
        this.props = S, this.context = _, this.refs = nt, this.updater = Q || P;
      }
      var Qt = wt.prototype = new gt();
      Qt.constructor = wt, ee(Qt, Ze.prototype), Qt.isPureReactComponent = !0;
      function Nn() {
        var S = {
          current: null
        };
        return Object.seal(S), S;
      }
      var _r = Array.isArray;
      function Rn(S) {
        return _r(S);
      }
      function rr(S) {
        {
          var _ = typeof Symbol == "function" && Symbol.toStringTag, Q = _ && S[Symbol.toStringTag] || S.constructor.name || "Object";
          return Q;
        }
      }
      function $n(S) {
        try {
          return In(S), !1;
        } catch {
          return !0;
        }
      }
      function In(S) {
        return "" + S;
      }
      function Yr(S) {
        if ($n(S))
          return Pe("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", rr(S)), In(S);
      }
      function pi(S, _, Q) {
        var q = S.displayName;
        if (q)
          return q;
        var ve = _.displayName || _.name || "";
        return ve !== "" ? Q + "(" + ve + ")" : Q;
      }
      function sa(S) {
        return S.displayName || "Context";
      }
      function qn(S) {
        if (S == null)
          return null;
        if (typeof S.tag == "number" && Pe("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof S == "function")
          return S.displayName || S.name || null;
        if (typeof S == "string")
          return S;
        switch (S) {
          case b:
            return "Fragment";
          case w:
            return "Portal";
          case U:
            return "Profiler";
          case g:
            return "StrictMode";
          case O:
            return "Suspense";
          case j:
            return "SuspenseList";
        }
        if (typeof S == "object")
          switch (S.$$typeof) {
            case F:
              var _ = S;
              return sa(_) + ".Consumer";
            case N:
              var Q = S;
              return sa(Q._context) + ".Provider";
            case K:
              return pi(S, S.render, "ForwardRef");
            case Y:
              var q = S.displayName || null;
              return q !== null ? q : qn(S.type) || "Memo";
            case H: {
              var ve = S, Ge = ve._payload, Ce = ve._init;
              try {
                return qn(Ce(Ge));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var wn = Object.prototype.hasOwnProperty, Yn = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, Er, Qa, Mn;
      Mn = {};
      function Cr(S) {
        if (wn.call(S, "ref")) {
          var _ = Object.getOwnPropertyDescriptor(S, "ref").get;
          if (_ && _.isReactWarning)
            return !1;
        }
        return S.ref !== void 0;
      }
      function ca(S) {
        if (wn.call(S, "key")) {
          var _ = Object.getOwnPropertyDescriptor(S, "key").get;
          if (_ && _.isReactWarning)
            return !1;
        }
        return S.key !== void 0;
      }
      function Ga(S, _) {
        var Q = function() {
          Er || (Er = !0, Pe("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", _));
        };
        Q.isReactWarning = !0, Object.defineProperty(S, "key", {
          get: Q,
          configurable: !0
        });
      }
      function vi(S, _) {
        var Q = function() {
          Qa || (Qa = !0, Pe("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", _));
        };
        Q.isReactWarning = !0, Object.defineProperty(S, "ref", {
          get: Q,
          configurable: !0
        });
      }
      function ge(S) {
        if (typeof S.ref == "string" && ye.current && S.__self && ye.current.stateNode !== S.__self) {
          var _ = qn(ye.current.type);
          Mn[_] || (Pe('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', _, S.ref), Mn[_] = !0);
        }
      }
      var He = function(S, _, Q, q, ve, Ge, Ce) {
        var qe = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: R,
          // Built-in properties that belong on the element
          type: S,
          key: _,
          ref: Q,
          props: Ce,
          // Record the component responsible for creating this element.
          _owner: Ge
        };
        return qe._store = {}, Object.defineProperty(qe._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(qe, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: q
        }), Object.defineProperty(qe, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: ve
        }), Object.freeze && (Object.freeze(qe.props), Object.freeze(qe)), qe;
      };
      function St(S, _, Q) {
        var q, ve = {}, Ge = null, Ce = null, qe = null, bt = null;
        if (_ != null) {
          Cr(_) && (Ce = _.ref, ge(_)), ca(_) && (Yr(_.key), Ge = "" + _.key), qe = _.__self === void 0 ? null : _.__self, bt = _.__source === void 0 ? null : _.__source;
          for (q in _)
            wn.call(_, q) && !Yn.hasOwnProperty(q) && (ve[q] = _[q]);
        }
        var zt = arguments.length - 2;
        if (zt === 1)
          ve.children = Q;
        else if (zt > 1) {
          for (var un = Array(zt), qt = 0; qt < zt; qt++)
            un[qt] = arguments[qt + 2];
          Object.freeze && Object.freeze(un), ve.children = un;
        }
        if (S && S.defaultProps) {
          var Et = S.defaultProps;
          for (q in Et)
            ve[q] === void 0 && (ve[q] = Et[q]);
        }
        if (Ge || Ce) {
          var Jt = typeof S == "function" ? S.displayName || S.name || "Unknown" : S;
          Ge && Ga(ve, Jt), Ce && vi(ve, Jt);
        }
        return He(S, Ge, Ce, qe, bt, ye.current, ve);
      }
      function It(S, _) {
        var Q = He(S.type, _, S.ref, S._self, S._source, S._owner, S.props);
        return Q;
      }
      function rn(S, _, Q) {
        if (S == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + S + ".");
        var q, ve = ee({}, S.props), Ge = S.key, Ce = S.ref, qe = S._self, bt = S._source, zt = S._owner;
        if (_ != null) {
          Cr(_) && (Ce = _.ref, zt = ye.current), ca(_) && (Yr(_.key), Ge = "" + _.key);
          var un;
          S.type && S.type.defaultProps && (un = S.type.defaultProps);
          for (q in _)
            wn.call(_, q) && !Yn.hasOwnProperty(q) && (_[q] === void 0 && un !== void 0 ? ve[q] = un[q] : ve[q] = _[q]);
        }
        var qt = arguments.length - 2;
        if (qt === 1)
          ve.children = Q;
        else if (qt > 1) {
          for (var Et = Array(qt), Jt = 0; Jt < qt; Jt++)
            Et[Jt] = arguments[Jt + 2];
          ve.children = Et;
        }
        return He(S.type, Ge, Ce, qe, bt, zt, ve);
      }
      function mn(S) {
        return typeof S == "object" && S !== null && S.$$typeof === R;
      }
      var cn = ".", Jn = ":";
      function an(S) {
        var _ = /[=:]/g, Q = {
          "=": "=0",
          ":": "=2"
        }, q = S.replace(_, function(ve) {
          return Q[ve];
        });
        return "$" + q;
      }
      var Gt = !1, Xt = /\/+/g;
      function fa(S) {
        return S.replace(Xt, "$&/");
      }
      function Rr(S, _) {
        return typeof S == "object" && S !== null && S.key != null ? (Yr(S.key), an("" + S.key)) : _.toString(36);
      }
      function xa(S, _, Q, q, ve) {
        var Ge = typeof S;
        (Ge === "undefined" || Ge === "boolean") && (S = null);
        var Ce = !1;
        if (S === null)
          Ce = !0;
        else
          switch (Ge) {
            case "string":
            case "number":
              Ce = !0;
              break;
            case "object":
              switch (S.$$typeof) {
                case R:
                case w:
                  Ce = !0;
              }
          }
        if (Ce) {
          var qe = S, bt = ve(qe), zt = q === "" ? cn + Rr(qe, 0) : q;
          if (Rn(bt)) {
            var un = "";
            zt != null && (un = fa(zt) + "/"), xa(bt, _, un, "", function(cd) {
              return cd;
            });
          } else bt != null && (mn(bt) && (bt.key && (!qe || qe.key !== bt.key) && Yr(bt.key), bt = It(
            bt,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            Q + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (bt.key && (!qe || qe.key !== bt.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              fa("" + bt.key) + "/"
            ) : "") + zt
          )), _.push(bt));
          return 1;
        }
        var qt, Et, Jt = 0, yn = q === "" ? cn : q + Jn;
        if (Rn(S))
          for (var bl = 0; bl < S.length; bl++)
            qt = S[bl], Et = yn + Rr(qt, bl), Jt += xa(qt, _, Q, Et, ve);
        else {
          var is = ne(S);
          if (typeof is == "function") {
            var Qi = S;
            is === Qi.entries && (Gt || kt("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Gt = !0);
            for (var ls = is.call(Qi), hu, sd = 0; !(hu = ls.next()).done; )
              qt = hu.value, Et = yn + Rr(qt, sd++), Jt += xa(qt, _, Q, Et, ve);
          } else if (Ge === "object") {
            var Ec = String(S);
            throw new Error("Objects are not valid as a React child (found: " + (Ec === "[object Object]" ? "object with keys {" + Object.keys(S).join(", ") + "}" : Ec) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return Jt;
      }
      function Ii(S, _, Q) {
        if (S == null)
          return S;
        var q = [], ve = 0;
        return xa(S, q, "", "", function(Ge) {
          return _.call(Q, Ge, ve++);
        }), q;
      }
      function lu(S) {
        var _ = 0;
        return Ii(S, function() {
          _++;
        }), _;
      }
      function uu(S, _, Q) {
        Ii(S, function() {
          _.apply(this, arguments);
        }, Q);
      }
      function gl(S) {
        return Ii(S, function(_) {
          return _;
        }) || [];
      }
      function Sl(S) {
        if (!mn(S))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return S;
      }
      function ou(S) {
        var _ = {
          $$typeof: F,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: S,
          _currentValue2: S,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        _.Provider = {
          $$typeof: N,
          _context: _
        };
        var Q = !1, q = !1, ve = !1;
        {
          var Ge = {
            $$typeof: F,
            _context: _
          };
          Object.defineProperties(Ge, {
            Provider: {
              get: function() {
                return q || (q = !0, Pe("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), _.Provider;
              },
              set: function(Ce) {
                _.Provider = Ce;
              }
            },
            _currentValue: {
              get: function() {
                return _._currentValue;
              },
              set: function(Ce) {
                _._currentValue = Ce;
              }
            },
            _currentValue2: {
              get: function() {
                return _._currentValue2;
              },
              set: function(Ce) {
                _._currentValue2 = Ce;
              }
            },
            _threadCount: {
              get: function() {
                return _._threadCount;
              },
              set: function(Ce) {
                _._threadCount = Ce;
              }
            },
            Consumer: {
              get: function() {
                return Q || (Q = !0, Pe("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), _.Consumer;
              }
            },
            displayName: {
              get: function() {
                return _.displayName;
              },
              set: function(Ce) {
                ve || (kt("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", Ce), ve = !0);
              }
            }
          }), _.Consumer = Ge;
        }
        return _._currentRenderer = null, _._currentRenderer2 = null, _;
      }
      var br = -1, Dr = 0, ar = 1, hi = 2;
      function Xa(S) {
        if (S._status === br) {
          var _ = S._result, Q = _();
          if (Q.then(function(Ge) {
            if (S._status === Dr || S._status === br) {
              var Ce = S;
              Ce._status = ar, Ce._result = Ge;
            }
          }, function(Ge) {
            if (S._status === Dr || S._status === br) {
              var Ce = S;
              Ce._status = hi, Ce._result = Ge;
            }
          }), S._status === br) {
            var q = S;
            q._status = Dr, q._result = Q;
          }
        }
        if (S._status === ar) {
          var ve = S._result;
          return ve === void 0 && Pe(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, ve), "default" in ve || Pe(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, ve), ve.default;
        } else
          throw S._result;
      }
      function mi(S) {
        var _ = {
          // We use these fields to store the result.
          _status: br,
          _result: S
        }, Q = {
          $$typeof: H,
          _payload: _,
          _init: Xa
        };
        {
          var q, ve;
          Object.defineProperties(Q, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return q;
              },
              set: function(Ge) {
                Pe("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), q = Ge, Object.defineProperty(Q, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return ve;
              },
              set: function(Ge) {
                Pe("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), ve = Ge, Object.defineProperty(Q, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return Q;
      }
      function yi(S) {
        S != null && S.$$typeof === Y ? Pe("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof S != "function" ? Pe("forwardRef requires a render function but was given %s.", S === null ? "null" : typeof S) : S.length !== 0 && S.length !== 2 && Pe("forwardRef render functions accept exactly two parameters: props and ref. %s", S.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), S != null && (S.defaultProps != null || S.propTypes != null) && Pe("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var _ = {
          $$typeof: K,
          render: S
        };
        {
          var Q;
          Object.defineProperty(_, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return Q;
            },
            set: function(q) {
              Q = q, !S.name && !S.displayName && (S.displayName = q);
            }
          });
        }
        return _;
      }
      var k;
      k = Symbol.for("react.module.reference");
      function re(S) {
        return !!(typeof S == "string" || typeof S == "function" || S === b || S === U || mt || S === g || S === O || S === j || Be || S === de || it || Ct || et || typeof S == "object" && S !== null && (S.$$typeof === H || S.$$typeof === Y || S.$$typeof === N || S.$$typeof === F || S.$$typeof === K || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        S.$$typeof === k || S.getModuleId !== void 0));
      }
      function we(S, _) {
        re(S) || Pe("memo: The first argument must be a component. Instead received: %s", S === null ? "null" : typeof S);
        var Q = {
          $$typeof: Y,
          type: S,
          compare: _ === void 0 ? null : _
        };
        {
          var q;
          Object.defineProperty(Q, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return q;
            },
            set: function(ve) {
              q = ve, !S.name && !S.displayName && (S.displayName = ve);
            }
          });
        }
        return Q;
      }
      function Me() {
        var S = le.current;
        return S === null && Pe(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), S;
      }
      function ft(S) {
        var _ = Me();
        if (S._context !== void 0) {
          var Q = S._context;
          Q.Consumer === S ? Pe("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : Q.Provider === S && Pe("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return _.useContext(S);
      }
      function ut(S) {
        var _ = Me();
        return _.useState(S);
      }
      function _t(S, _, Q) {
        var q = Me();
        return q.useReducer(S, _, Q);
      }
      function Tt(S) {
        var _ = Me();
        return _.useRef(S);
      }
      function Tn(S, _) {
        var Q = Me();
        return Q.useEffect(S, _);
      }
      function ln(S, _) {
        var Q = Me();
        return Q.useInsertionEffect(S, _);
      }
      function fn(S, _) {
        var Q = Me();
        return Q.useLayoutEffect(S, _);
      }
      function ir(S, _) {
        var Q = Me();
        return Q.useCallback(S, _);
      }
      function Ka(S, _) {
        var Q = Me();
        return Q.useMemo(S, _);
      }
      function qa(S, _, Q) {
        var q = Me();
        return q.useImperativeHandle(S, _, Q);
      }
      function dt(S, _) {
        {
          var Q = Me();
          return Q.useDebugValue(S, _);
        }
      }
      function ht() {
        var S = Me();
        return S.useTransition();
      }
      function Ja(S) {
        var _ = Me();
        return _.useDeferredValue(S);
      }
      function su() {
        var S = Me();
        return S.useId();
      }
      function cu(S, _, Q) {
        var q = Me();
        return q.useSyncExternalStore(S, _, Q);
      }
      var El = 0, no, Cl, Wr, ts, kr, gc, Sc;
      function ro() {
      }
      ro.__reactDisabledLog = !0;
      function Rl() {
        {
          if (El === 0) {
            no = console.log, Cl = console.info, Wr = console.warn, ts = console.error, kr = console.group, gc = console.groupCollapsed, Sc = console.groupEnd;
            var S = {
              configurable: !0,
              enumerable: !0,
              value: ro,
              writable: !0
            };
            Object.defineProperties(console, {
              info: S,
              log: S,
              warn: S,
              error: S,
              group: S,
              groupCollapsed: S,
              groupEnd: S
            });
          }
          El++;
        }
      }
      function da() {
        {
          if (El--, El === 0) {
            var S = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: ee({}, S, {
                value: no
              }),
              info: ee({}, S, {
                value: Cl
              }),
              warn: ee({}, S, {
                value: Wr
              }),
              error: ee({}, S, {
                value: ts
              }),
              group: ee({}, S, {
                value: kr
              }),
              groupCollapsed: ee({}, S, {
                value: gc
              }),
              groupEnd: ee({}, S, {
                value: Sc
              })
            });
          }
          El < 0 && Pe("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var Za = ct.ReactCurrentDispatcher, ei;
      function ao(S, _, Q) {
        {
          if (ei === void 0)
            try {
              throw Error();
            } catch (ve) {
              var q = ve.stack.trim().match(/\n( *(at )?)/);
              ei = q && q[1] || "";
            }
          return `
` + ei + S;
        }
      }
      var fu = !1, wl;
      {
        var io = typeof WeakMap == "function" ? WeakMap : Map;
        wl = new io();
      }
      function lo(S, _) {
        if (!S || fu)
          return "";
        {
          var Q = wl.get(S);
          if (Q !== void 0)
            return Q;
        }
        var q;
        fu = !0;
        var ve = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var Ge;
        Ge = Za.current, Za.current = null, Rl();
        try {
          if (_) {
            var Ce = function() {
              throw Error();
            };
            if (Object.defineProperty(Ce.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(Ce, []);
              } catch (yn) {
                q = yn;
              }
              Reflect.construct(S, [], Ce);
            } else {
              try {
                Ce.call();
              } catch (yn) {
                q = yn;
              }
              S.call(Ce.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (yn) {
              q = yn;
            }
            S();
          }
        } catch (yn) {
          if (yn && q && typeof yn.stack == "string") {
            for (var qe = yn.stack.split(`
`), bt = q.stack.split(`
`), zt = qe.length - 1, un = bt.length - 1; zt >= 1 && un >= 0 && qe[zt] !== bt[un]; )
              un--;
            for (; zt >= 1 && un >= 0; zt--, un--)
              if (qe[zt] !== bt[un]) {
                if (zt !== 1 || un !== 1)
                  do
                    if (zt--, un--, un < 0 || qe[zt] !== bt[un]) {
                      var qt = `
` + qe[zt].replace(" at new ", " at ");
                      return S.displayName && qt.includes("<anonymous>") && (qt = qt.replace("<anonymous>", S.displayName)), typeof S == "function" && wl.set(S, qt), qt;
                    }
                  while (zt >= 1 && un >= 0);
                break;
              }
          }
        } finally {
          fu = !1, Za.current = Ge, da(), Error.prepareStackTrace = ve;
        }
        var Et = S ? S.displayName || S.name : "", Jt = Et ? ao(Et) : "";
        return typeof S == "function" && wl.set(S, Jt), Jt;
      }
      function Yi(S, _, Q) {
        return lo(S, !1);
      }
      function ud(S) {
        var _ = S.prototype;
        return !!(_ && _.isReactComponent);
      }
      function Wi(S, _, Q) {
        if (S == null)
          return "";
        if (typeof S == "function")
          return lo(S, ud(S));
        if (typeof S == "string")
          return ao(S);
        switch (S) {
          case O:
            return ao("Suspense");
          case j:
            return ao("SuspenseList");
        }
        if (typeof S == "object")
          switch (S.$$typeof) {
            case K:
              return Yi(S.render);
            case Y:
              return Wi(S.type, _, Q);
            case H: {
              var q = S, ve = q._payload, Ge = q._init;
              try {
                return Wi(Ge(ve), _, Q);
              } catch {
              }
            }
          }
        return "";
      }
      var Pt = {}, uo = ct.ReactDebugCurrentFrame;
      function At(S) {
        if (S) {
          var _ = S._owner, Q = Wi(S.type, S._source, _ ? _.type : null);
          uo.setExtraStackFrame(Q);
        } else
          uo.setExtraStackFrame(null);
      }
      function ns(S, _, Q, q, ve) {
        {
          var Ge = Function.call.bind(wn);
          for (var Ce in S)
            if (Ge(S, Ce)) {
              var qe = void 0;
              try {
                if (typeof S[Ce] != "function") {
                  var bt = Error((q || "React class") + ": " + Q + " type `" + Ce + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof S[Ce] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw bt.name = "Invariant Violation", bt;
                }
                qe = S[Ce](_, Ce, q, Q, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (zt) {
                qe = zt;
              }
              qe && !(qe instanceof Error) && (At(ve), Pe("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", q || "React class", Q, Ce, typeof qe), At(null)), qe instanceof Error && !(qe.message in Pt) && (Pt[qe.message] = !0, At(ve), Pe("Failed %s type: %s", Q, qe.message), At(null));
            }
        }
      }
      function gi(S) {
        if (S) {
          var _ = S._owner, Q = Wi(S.type, S._source, _ ? _.type : null);
          Qe(Q);
        } else
          Qe(null);
      }
      var lt;
      lt = !1;
      function oo() {
        if (ye.current) {
          var S = qn(ye.current.type);
          if (S)
            return `

Check the render method of \`` + S + "`.";
        }
        return "";
      }
      function lr(S) {
        if (S !== void 0) {
          var _ = S.fileName.replace(/^.*[\\\/]/, ""), Q = S.lineNumber;
          return `

Check your code at ` + _ + ":" + Q + ".";
        }
        return "";
      }
      function Si(S) {
        return S != null ? lr(S.__source) : "";
      }
      var Or = {};
      function Ei(S) {
        var _ = oo();
        if (!_) {
          var Q = typeof S == "string" ? S : S.displayName || S.name;
          Q && (_ = `

Check the top-level render call using <` + Q + ">.");
        }
        return _;
      }
      function dn(S, _) {
        if (!(!S._store || S._store.validated || S.key != null)) {
          S._store.validated = !0;
          var Q = Ei(_);
          if (!Or[Q]) {
            Or[Q] = !0;
            var q = "";
            S && S._owner && S._owner !== ye.current && (q = " It was passed a child from " + qn(S._owner.type) + "."), gi(S), Pe('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', Q, q), gi(null);
          }
        }
      }
      function Kt(S, _) {
        if (typeof S == "object") {
          if (Rn(S))
            for (var Q = 0; Q < S.length; Q++) {
              var q = S[Q];
              mn(q) && dn(q, _);
            }
          else if (mn(S))
            S._store && (S._store.validated = !0);
          else if (S) {
            var ve = ne(S);
            if (typeof ve == "function" && ve !== S.entries)
              for (var Ge = ve.call(S), Ce; !(Ce = Ge.next()).done; )
                mn(Ce.value) && dn(Ce.value, _);
          }
        }
      }
      function Tl(S) {
        {
          var _ = S.type;
          if (_ == null || typeof _ == "string")
            return;
          var Q;
          if (typeof _ == "function")
            Q = _.propTypes;
          else if (typeof _ == "object" && (_.$$typeof === K || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          _.$$typeof === Y))
            Q = _.propTypes;
          else
            return;
          if (Q) {
            var q = qn(_);
            ns(Q, S.props, "prop", q, S);
          } else if (_.PropTypes !== void 0 && !lt) {
            lt = !0;
            var ve = qn(_);
            Pe("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ve || "Unknown");
          }
          typeof _.getDefaultProps == "function" && !_.getDefaultProps.isReactClassApproved && Pe("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Wn(S) {
        {
          for (var _ = Object.keys(S.props), Q = 0; Q < _.length; Q++) {
            var q = _[Q];
            if (q !== "children" && q !== "key") {
              gi(S), Pe("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", q), gi(null);
              break;
            }
          }
          S.ref !== null && (gi(S), Pe("Invalid attribute `ref` supplied to `React.Fragment`."), gi(null));
        }
      }
      function Lr(S, _, Q) {
        var q = re(S);
        if (!q) {
          var ve = "";
          (S === void 0 || typeof S == "object" && S !== null && Object.keys(S).length === 0) && (ve += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ge = Si(_);
          Ge ? ve += Ge : ve += oo();
          var Ce;
          S === null ? Ce = "null" : Rn(S) ? Ce = "array" : S !== void 0 && S.$$typeof === R ? (Ce = "<" + (qn(S.type) || "Unknown") + " />", ve = " Did you accidentally export a JSX literal instead of a component?") : Ce = typeof S, Pe("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Ce, ve);
        }
        var qe = St.apply(this, arguments);
        if (qe == null)
          return qe;
        if (q)
          for (var bt = 2; bt < arguments.length; bt++)
            Kt(arguments[bt], S);
        return S === b ? Wn(qe) : Tl(qe), qe;
      }
      var _a = !1;
      function du(S) {
        var _ = Lr.bind(null, S);
        return _.type = S, _a || (_a = !0, kt("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(_, "type", {
          enumerable: !1,
          get: function() {
            return kt("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: S
            }), S;
          }
        }), _;
      }
      function rs(S, _, Q) {
        for (var q = rn.apply(this, arguments), ve = 2; ve < arguments.length; ve++)
          Kt(arguments[ve], q.type);
        return Tl(q), q;
      }
      function as(S, _) {
        var Q = pe.transition;
        pe.transition = {};
        var q = pe.transition;
        pe.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          S();
        } finally {
          if (pe.transition = Q, Q === null && q._updatedFibers) {
            var ve = q._updatedFibers.size;
            ve > 10 && kt("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), q._updatedFibers.clear();
          }
        }
      }
      var xl = !1, pu = null;
      function od(S) {
        if (pu === null)
          try {
            var _ = ("require" + Math.random()).slice(0, 7), Q = d && d[_];
            pu = Q.call(d, "timers").setImmediate;
          } catch {
            pu = function(ve) {
              xl === !1 && (xl = !0, typeof MessageChannel > "u" && Pe("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var Ge = new MessageChannel();
              Ge.port1.onmessage = ve, Ge.port2.postMessage(void 0);
            };
          }
        return pu(S);
      }
      var ba = 0, ti = !1;
      function Ci(S) {
        {
          var _ = ba;
          ba++, me.current === null && (me.current = []);
          var Q = me.isBatchingLegacy, q;
          try {
            if (me.isBatchingLegacy = !0, q = S(), !Q && me.didScheduleLegacyUpdate) {
              var ve = me.current;
              ve !== null && (me.didScheduleLegacyUpdate = !1, _l(ve));
            }
          } catch (Et) {
            throw Da(_), Et;
          } finally {
            me.isBatchingLegacy = Q;
          }
          if (q !== null && typeof q == "object" && typeof q.then == "function") {
            var Ge = q, Ce = !1, qe = {
              then: function(Et, Jt) {
                Ce = !0, Ge.then(function(yn) {
                  Da(_), ba === 0 ? so(yn, Et, Jt) : Et(yn);
                }, function(yn) {
                  Da(_), Jt(yn);
                });
              }
            };
            return !ti && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              Ce || (ti = !0, Pe("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), qe;
          } else {
            var bt = q;
            if (Da(_), ba === 0) {
              var zt = me.current;
              zt !== null && (_l(zt), me.current = null);
              var un = {
                then: function(Et, Jt) {
                  me.current === null ? (me.current = [], so(bt, Et, Jt)) : Et(bt);
                }
              };
              return un;
            } else {
              var qt = {
                then: function(Et, Jt) {
                  Et(bt);
                }
              };
              return qt;
            }
          }
        }
      }
      function Da(S) {
        S !== ba - 1 && Pe("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), ba = S;
      }
      function so(S, _, Q) {
        {
          var q = me.current;
          if (q !== null)
            try {
              _l(q), od(function() {
                q.length === 0 ? (me.current = null, _(S)) : so(S, _, Q);
              });
            } catch (ve) {
              Q(ve);
            }
          else
            _(S);
        }
      }
      var co = !1;
      function _l(S) {
        if (!co) {
          co = !0;
          var _ = 0;
          try {
            for (; _ < S.length; _++) {
              var Q = S[_];
              do
                Q = Q(!0);
              while (Q !== null);
            }
            S.length = 0;
          } catch (q) {
            throw S = S.slice(_ + 1), q;
          } finally {
            co = !1;
          }
        }
      }
      var vu = Lr, fo = rs, po = du, ni = {
        map: Ii,
        forEach: uu,
        count: lu,
        toArray: gl,
        only: Sl
      };
      m.Children = ni, m.Component = Ze, m.Fragment = b, m.Profiler = U, m.PureComponent = wt, m.StrictMode = g, m.Suspense = O, m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ct, m.act = Ci, m.cloneElement = fo, m.createContext = ou, m.createElement = vu, m.createFactory = po, m.createRef = Nn, m.forwardRef = yi, m.isValidElement = mn, m.lazy = mi, m.memo = we, m.startTransition = as, m.unstable_act = Ci, m.useCallback = ir, m.useContext = ft, m.useDebugValue = dt, m.useDeferredValue = Ja, m.useEffect = Tn, m.useId = su, m.useImperativeHandle = qa, m.useInsertionEffect = ln, m.useLayoutEffect = fn, m.useMemo = Ka, m.useReducer = _t, m.useRef = Tt, m.useState = ut, m.useSyncExternalStore = cu, m.useTransition = ht, m.version = v, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(mv, mv.exports)), mv.exports;
}
je.env.NODE_ENV === "production" ? tC.exports = tO() : tC.exports = nO();
var D = tC.exports;
const rO = /* @__PURE__ */ b0(D), aO = /* @__PURE__ */ U0({
  __proto__: null,
  default: rO
}, [D]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var s0;
function iO() {
  if (s0) return dv;
  s0 = 1;
  var d = D, m = Symbol.for("react.element"), v = Symbol.for("react.fragment"), R = Object.prototype.hasOwnProperty, w = d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, b = { key: !0, ref: !0, __self: !0, __source: !0 };
  function g(U, N, F) {
    var K, O = {}, j = null, Y = null;
    F !== void 0 && (j = "" + F), N.key !== void 0 && (j = "" + N.key), N.ref !== void 0 && (Y = N.ref);
    for (K in N) R.call(N, K) && !b.hasOwnProperty(K) && (O[K] = N[K]);
    if (U && U.defaultProps) for (K in N = U.defaultProps, N) O[K] === void 0 && (O[K] = N[K]);
    return { $$typeof: m, type: U, key: j, ref: Y, props: O, _owner: w.current };
  }
  return dv.Fragment = v, dv.jsx = g, dv.jsxs = g, dv;
}
var pv = {}, c0;
function lO() {
  return c0 || (c0 = 1, je.env.NODE_ENV !== "production" && function() {
    var d = D, m = Symbol.for("react.element"), v = Symbol.for("react.portal"), R = Symbol.for("react.fragment"), w = Symbol.for("react.strict_mode"), b = Symbol.for("react.profiler"), g = Symbol.for("react.provider"), U = Symbol.for("react.context"), N = Symbol.for("react.forward_ref"), F = Symbol.for("react.suspense"), K = Symbol.for("react.suspense_list"), O = Symbol.for("react.memo"), j = Symbol.for("react.lazy"), Y = Symbol.for("react.offscreen"), H = Symbol.iterator, de = "@@iterator";
    function se(k) {
      if (k === null || typeof k != "object")
        return null;
      var re = H && k[H] || k[de];
      return typeof re == "function" ? re : null;
    }
    var be = d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function ne(k) {
      {
        for (var re = arguments.length, we = new Array(re > 1 ? re - 1 : 0), Me = 1; Me < re; Me++)
          we[Me - 1] = arguments[Me];
        le("error", k, we);
      }
    }
    function le(k, re, we) {
      {
        var Me = be.ReactDebugCurrentFrame, ft = Me.getStackAddendum();
        ft !== "" && (re += "%s", we = we.concat([ft]));
        var ut = we.map(function(_t) {
          return String(_t);
        });
        ut.unshift("Warning: " + re), Function.prototype.apply.call(console[k], console, ut);
      }
    }
    var pe = !1, me = !1, ye = !1, Se = !1, Le = !1, Qe;
    Qe = Symbol.for("react.module.reference");
    function it(k) {
      return !!(typeof k == "string" || typeof k == "function" || k === R || k === b || Le || k === w || k === F || k === K || Se || k === Y || pe || me || ye || typeof k == "object" && k !== null && (k.$$typeof === j || k.$$typeof === O || k.$$typeof === g || k.$$typeof === U || k.$$typeof === N || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      k.$$typeof === Qe || k.getModuleId !== void 0));
    }
    function Ct(k, re, we) {
      var Me = k.displayName;
      if (Me)
        return Me;
      var ft = re.displayName || re.name || "";
      return ft !== "" ? we + "(" + ft + ")" : we;
    }
    function et(k) {
      return k.displayName || "Context";
    }
    function Be(k) {
      if (k == null)
        return null;
      if (typeof k.tag == "number" && ne("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof k == "function")
        return k.displayName || k.name || null;
      if (typeof k == "string")
        return k;
      switch (k) {
        case R:
          return "Fragment";
        case v:
          return "Portal";
        case b:
          return "Profiler";
        case w:
          return "StrictMode";
        case F:
          return "Suspense";
        case K:
          return "SuspenseList";
      }
      if (typeof k == "object")
        switch (k.$$typeof) {
          case U:
            var re = k;
            return et(re) + ".Consumer";
          case g:
            var we = k;
            return et(we._context) + ".Provider";
          case N:
            return Ct(k, k.render, "ForwardRef");
          case O:
            var Me = k.displayName || null;
            return Me !== null ? Me : Be(k.type) || "Memo";
          case j: {
            var ft = k, ut = ft._payload, _t = ft._init;
            try {
              return Be(_t(ut));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var mt = Object.assign, ct = 0, kt, Pe, he, $e, Re, P, ee;
    function nt() {
    }
    nt.__reactDisabledLog = !0;
    function Ze() {
      {
        if (ct === 0) {
          kt = console.log, Pe = console.info, he = console.warn, $e = console.error, Re = console.group, P = console.groupCollapsed, ee = console.groupEnd;
          var k = {
            configurable: !0,
            enumerable: !0,
            value: nt,
            writable: !0
          };
          Object.defineProperties(console, {
            info: k,
            log: k,
            warn: k,
            error: k,
            group: k,
            groupCollapsed: k,
            groupEnd: k
          });
        }
        ct++;
      }
    }
    function Rt() {
      {
        if (ct--, ct === 0) {
          var k = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: mt({}, k, {
              value: kt
            }),
            info: mt({}, k, {
              value: Pe
            }),
            warn: mt({}, k, {
              value: he
            }),
            error: mt({}, k, {
              value: $e
            }),
            group: mt({}, k, {
              value: Re
            }),
            groupCollapsed: mt({}, k, {
              value: P
            }),
            groupEnd: mt({}, k, {
              value: ee
            })
          });
        }
        ct < 0 && ne("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var yt = be.ReactCurrentDispatcher, vt;
    function gt(k, re, we) {
      {
        if (vt === void 0)
          try {
            throw Error();
          } catch (ft) {
            var Me = ft.stack.trim().match(/\n( *(at )?)/);
            vt = Me && Me[1] || "";
          }
        return `
` + vt + k;
      }
    }
    var wt = !1, Qt;
    {
      var Nn = typeof WeakMap == "function" ? WeakMap : Map;
      Qt = new Nn();
    }
    function _r(k, re) {
      if (!k || wt)
        return "";
      {
        var we = Qt.get(k);
        if (we !== void 0)
          return we;
      }
      var Me;
      wt = !0;
      var ft = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var ut;
      ut = yt.current, yt.current = null, Ze();
      try {
        if (re) {
          var _t = function() {
            throw Error();
          };
          if (Object.defineProperty(_t.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(_t, []);
            } catch (dt) {
              Me = dt;
            }
            Reflect.construct(k, [], _t);
          } else {
            try {
              _t.call();
            } catch (dt) {
              Me = dt;
            }
            k.call(_t.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (dt) {
            Me = dt;
          }
          k();
        }
      } catch (dt) {
        if (dt && Me && typeof dt.stack == "string") {
          for (var Tt = dt.stack.split(`
`), Tn = Me.stack.split(`
`), ln = Tt.length - 1, fn = Tn.length - 1; ln >= 1 && fn >= 0 && Tt[ln] !== Tn[fn]; )
            fn--;
          for (; ln >= 1 && fn >= 0; ln--, fn--)
            if (Tt[ln] !== Tn[fn]) {
              if (ln !== 1 || fn !== 1)
                do
                  if (ln--, fn--, fn < 0 || Tt[ln] !== Tn[fn]) {
                    var ir = `
` + Tt[ln].replace(" at new ", " at ");
                    return k.displayName && ir.includes("<anonymous>") && (ir = ir.replace("<anonymous>", k.displayName)), typeof k == "function" && Qt.set(k, ir), ir;
                  }
                while (ln >= 1 && fn >= 0);
              break;
            }
        }
      } finally {
        wt = !1, yt.current = ut, Rt(), Error.prepareStackTrace = ft;
      }
      var Ka = k ? k.displayName || k.name : "", qa = Ka ? gt(Ka) : "";
      return typeof k == "function" && Qt.set(k, qa), qa;
    }
    function Rn(k, re, we) {
      return _r(k, !1);
    }
    function rr(k) {
      var re = k.prototype;
      return !!(re && re.isReactComponent);
    }
    function $n(k, re, we) {
      if (k == null)
        return "";
      if (typeof k == "function")
        return _r(k, rr(k));
      if (typeof k == "string")
        return gt(k);
      switch (k) {
        case F:
          return gt("Suspense");
        case K:
          return gt("SuspenseList");
      }
      if (typeof k == "object")
        switch (k.$$typeof) {
          case N:
            return Rn(k.render);
          case O:
            return $n(k.type, re, we);
          case j: {
            var Me = k, ft = Me._payload, ut = Me._init;
            try {
              return $n(ut(ft), re, we);
            } catch {
            }
          }
        }
      return "";
    }
    var In = Object.prototype.hasOwnProperty, Yr = {}, pi = be.ReactDebugCurrentFrame;
    function sa(k) {
      if (k) {
        var re = k._owner, we = $n(k.type, k._source, re ? re.type : null);
        pi.setExtraStackFrame(we);
      } else
        pi.setExtraStackFrame(null);
    }
    function qn(k, re, we, Me, ft) {
      {
        var ut = Function.call.bind(In);
        for (var _t in k)
          if (ut(k, _t)) {
            var Tt = void 0;
            try {
              if (typeof k[_t] != "function") {
                var Tn = Error((Me || "React class") + ": " + we + " type `" + _t + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof k[_t] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Tn.name = "Invariant Violation", Tn;
              }
              Tt = k[_t](re, _t, Me, we, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ln) {
              Tt = ln;
            }
            Tt && !(Tt instanceof Error) && (sa(ft), ne("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Me || "React class", we, _t, typeof Tt), sa(null)), Tt instanceof Error && !(Tt.message in Yr) && (Yr[Tt.message] = !0, sa(ft), ne("Failed %s type: %s", we, Tt.message), sa(null));
          }
      }
    }
    var wn = Array.isArray;
    function Yn(k) {
      return wn(k);
    }
    function Er(k) {
      {
        var re = typeof Symbol == "function" && Symbol.toStringTag, we = re && k[Symbol.toStringTag] || k.constructor.name || "Object";
        return we;
      }
    }
    function Qa(k) {
      try {
        return Mn(k), !1;
      } catch {
        return !0;
      }
    }
    function Mn(k) {
      return "" + k;
    }
    function Cr(k) {
      if (Qa(k))
        return ne("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Er(k)), Mn(k);
    }
    var ca = be.ReactCurrentOwner, Ga = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, vi, ge;
    function He(k) {
      if (In.call(k, "ref")) {
        var re = Object.getOwnPropertyDescriptor(k, "ref").get;
        if (re && re.isReactWarning)
          return !1;
      }
      return k.ref !== void 0;
    }
    function St(k) {
      if (In.call(k, "key")) {
        var re = Object.getOwnPropertyDescriptor(k, "key").get;
        if (re && re.isReactWarning)
          return !1;
      }
      return k.key !== void 0;
    }
    function It(k, re) {
      typeof k.ref == "string" && ca.current;
    }
    function rn(k, re) {
      {
        var we = function() {
          vi || (vi = !0, ne("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", re));
        };
        we.isReactWarning = !0, Object.defineProperty(k, "key", {
          get: we,
          configurable: !0
        });
      }
    }
    function mn(k, re) {
      {
        var we = function() {
          ge || (ge = !0, ne("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", re));
        };
        we.isReactWarning = !0, Object.defineProperty(k, "ref", {
          get: we,
          configurable: !0
        });
      }
    }
    var cn = function(k, re, we, Me, ft, ut, _t) {
      var Tt = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: m,
        // Built-in properties that belong on the element
        type: k,
        key: re,
        ref: we,
        props: _t,
        // Record the component responsible for creating this element.
        _owner: ut
      };
      return Tt._store = {}, Object.defineProperty(Tt._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Tt, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Me
      }), Object.defineProperty(Tt, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ft
      }), Object.freeze && (Object.freeze(Tt.props), Object.freeze(Tt)), Tt;
    };
    function Jn(k, re, we, Me, ft) {
      {
        var ut, _t = {}, Tt = null, Tn = null;
        we !== void 0 && (Cr(we), Tt = "" + we), St(re) && (Cr(re.key), Tt = "" + re.key), He(re) && (Tn = re.ref, It(re, ft));
        for (ut in re)
          In.call(re, ut) && !Ga.hasOwnProperty(ut) && (_t[ut] = re[ut]);
        if (k && k.defaultProps) {
          var ln = k.defaultProps;
          for (ut in ln)
            _t[ut] === void 0 && (_t[ut] = ln[ut]);
        }
        if (Tt || Tn) {
          var fn = typeof k == "function" ? k.displayName || k.name || "Unknown" : k;
          Tt && rn(_t, fn), Tn && mn(_t, fn);
        }
        return cn(k, Tt, Tn, ft, Me, ca.current, _t);
      }
    }
    var an = be.ReactCurrentOwner, Gt = be.ReactDebugCurrentFrame;
    function Xt(k) {
      if (k) {
        var re = k._owner, we = $n(k.type, k._source, re ? re.type : null);
        Gt.setExtraStackFrame(we);
      } else
        Gt.setExtraStackFrame(null);
    }
    var fa;
    fa = !1;
    function Rr(k) {
      return typeof k == "object" && k !== null && k.$$typeof === m;
    }
    function xa() {
      {
        if (an.current) {
          var k = Be(an.current.type);
          if (k)
            return `

Check the render method of \`` + k + "`.";
        }
        return "";
      }
    }
    function Ii(k) {
      return "";
    }
    var lu = {};
    function uu(k) {
      {
        var re = xa();
        if (!re) {
          var we = typeof k == "string" ? k : k.displayName || k.name;
          we && (re = `

Check the top-level render call using <` + we + ">.");
        }
        return re;
      }
    }
    function gl(k, re) {
      {
        if (!k._store || k._store.validated || k.key != null)
          return;
        k._store.validated = !0;
        var we = uu(re);
        if (lu[we])
          return;
        lu[we] = !0;
        var Me = "";
        k && k._owner && k._owner !== an.current && (Me = " It was passed a child from " + Be(k._owner.type) + "."), Xt(k), ne('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', we, Me), Xt(null);
      }
    }
    function Sl(k, re) {
      {
        if (typeof k != "object")
          return;
        if (Yn(k))
          for (var we = 0; we < k.length; we++) {
            var Me = k[we];
            Rr(Me) && gl(Me, re);
          }
        else if (Rr(k))
          k._store && (k._store.validated = !0);
        else if (k) {
          var ft = se(k);
          if (typeof ft == "function" && ft !== k.entries)
            for (var ut = ft.call(k), _t; !(_t = ut.next()).done; )
              Rr(_t.value) && gl(_t.value, re);
        }
      }
    }
    function ou(k) {
      {
        var re = k.type;
        if (re == null || typeof re == "string")
          return;
        var we;
        if (typeof re == "function")
          we = re.propTypes;
        else if (typeof re == "object" && (re.$$typeof === N || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        re.$$typeof === O))
          we = re.propTypes;
        else
          return;
        if (we) {
          var Me = Be(re);
          qn(we, k.props, "prop", Me, k);
        } else if (re.PropTypes !== void 0 && !fa) {
          fa = !0;
          var ft = Be(re);
          ne("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ft || "Unknown");
        }
        typeof re.getDefaultProps == "function" && !re.getDefaultProps.isReactClassApproved && ne("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function br(k) {
      {
        for (var re = Object.keys(k.props), we = 0; we < re.length; we++) {
          var Me = re[we];
          if (Me !== "children" && Me !== "key") {
            Xt(k), ne("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Me), Xt(null);
            break;
          }
        }
        k.ref !== null && (Xt(k), ne("Invalid attribute `ref` supplied to `React.Fragment`."), Xt(null));
      }
    }
    var Dr = {};
    function ar(k, re, we, Me, ft, ut) {
      {
        var _t = it(k);
        if (!_t) {
          var Tt = "";
          (k === void 0 || typeof k == "object" && k !== null && Object.keys(k).length === 0) && (Tt += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Tn = Ii();
          Tn ? Tt += Tn : Tt += xa();
          var ln;
          k === null ? ln = "null" : Yn(k) ? ln = "array" : k !== void 0 && k.$$typeof === m ? (ln = "<" + (Be(k.type) || "Unknown") + " />", Tt = " Did you accidentally export a JSX literal instead of a component?") : ln = typeof k, ne("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ln, Tt);
        }
        var fn = Jn(k, re, we, ft, ut);
        if (fn == null)
          return fn;
        if (_t) {
          var ir = re.children;
          if (ir !== void 0)
            if (Me)
              if (Yn(ir)) {
                for (var Ka = 0; Ka < ir.length; Ka++)
                  Sl(ir[Ka], k);
                Object.freeze && Object.freeze(ir);
              } else
                ne("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Sl(ir, k);
        }
        if (In.call(re, "key")) {
          var qa = Be(k), dt = Object.keys(re).filter(function(su) {
            return su !== "key";
          }), ht = dt.length > 0 ? "{key: someKey, " + dt.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Dr[qa + ht]) {
            var Ja = dt.length > 0 ? "{" + dt.join(": ..., ") + ": ...}" : "{}";
            ne(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ht, qa, Ja, qa), Dr[qa + ht] = !0;
          }
        }
        return k === R ? br(fn) : ou(fn), fn;
      }
    }
    function hi(k, re, we) {
      return ar(k, re, we, !0);
    }
    function Xa(k, re, we) {
      return ar(k, re, we, !1);
    }
    var mi = Xa, yi = hi;
    pv.Fragment = R, pv.jsx = mi, pv.jsxs = yi;
  }()), pv;
}
je.env.NODE_ENV === "production" ? eC.exports = iO() : eC.exports = lO();
var dN = eC.exports, nC = { exports: {} }, Ia = {}, py = { exports: {} }, XE = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f0;
function uO() {
  return f0 || (f0 = 1, function(d) {
    function m(he, $e) {
      var Re = he.length;
      he.push($e);
      e: for (; 0 < Re; ) {
        var P = Re - 1 >>> 1, ee = he[P];
        if (0 < w(ee, $e)) he[P] = $e, he[Re] = ee, Re = P;
        else break e;
      }
    }
    function v(he) {
      return he.length === 0 ? null : he[0];
    }
    function R(he) {
      if (he.length === 0) return null;
      var $e = he[0], Re = he.pop();
      if (Re !== $e) {
        he[0] = Re;
        e: for (var P = 0, ee = he.length, nt = ee >>> 1; P < nt; ) {
          var Ze = 2 * (P + 1) - 1, Rt = he[Ze], yt = Ze + 1, vt = he[yt];
          if (0 > w(Rt, Re)) yt < ee && 0 > w(vt, Rt) ? (he[P] = vt, he[yt] = Re, P = yt) : (he[P] = Rt, he[Ze] = Re, P = Ze);
          else if (yt < ee && 0 > w(vt, Re)) he[P] = vt, he[yt] = Re, P = yt;
          else break e;
        }
      }
      return $e;
    }
    function w(he, $e) {
      var Re = he.sortIndex - $e.sortIndex;
      return Re !== 0 ? Re : he.id - $e.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var b = performance;
      d.unstable_now = function() {
        return b.now();
      };
    } else {
      var g = Date, U = g.now();
      d.unstable_now = function() {
        return g.now() - U;
      };
    }
    var N = [], F = [], K = 1, O = null, j = 3, Y = !1, H = !1, de = !1, se = typeof setTimeout == "function" ? setTimeout : null, be = typeof clearTimeout == "function" ? clearTimeout : null, ne = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function le(he) {
      for (var $e = v(F); $e !== null; ) {
        if ($e.callback === null) R(F);
        else if ($e.startTime <= he) R(F), $e.sortIndex = $e.expirationTime, m(N, $e);
        else break;
        $e = v(F);
      }
    }
    function pe(he) {
      if (de = !1, le(he), !H) if (v(N) !== null) H = !0, kt(me);
      else {
        var $e = v(F);
        $e !== null && Pe(pe, $e.startTime - he);
      }
    }
    function me(he, $e) {
      H = !1, de && (de = !1, be(Le), Le = -1), Y = !0;
      var Re = j;
      try {
        for (le($e), O = v(N); O !== null && (!(O.expirationTime > $e) || he && !Ct()); ) {
          var P = O.callback;
          if (typeof P == "function") {
            O.callback = null, j = O.priorityLevel;
            var ee = P(O.expirationTime <= $e);
            $e = d.unstable_now(), typeof ee == "function" ? O.callback = ee : O === v(N) && R(N), le($e);
          } else R(N);
          O = v(N);
        }
        if (O !== null) var nt = !0;
        else {
          var Ze = v(F);
          Ze !== null && Pe(pe, Ze.startTime - $e), nt = !1;
        }
        return nt;
      } finally {
        O = null, j = Re, Y = !1;
      }
    }
    var ye = !1, Se = null, Le = -1, Qe = 5, it = -1;
    function Ct() {
      return !(d.unstable_now() - it < Qe);
    }
    function et() {
      if (Se !== null) {
        var he = d.unstable_now();
        it = he;
        var $e = !0;
        try {
          $e = Se(!0, he);
        } finally {
          $e ? Be() : (ye = !1, Se = null);
        }
      } else ye = !1;
    }
    var Be;
    if (typeof ne == "function") Be = function() {
      ne(et);
    };
    else if (typeof MessageChannel < "u") {
      var mt = new MessageChannel(), ct = mt.port2;
      mt.port1.onmessage = et, Be = function() {
        ct.postMessage(null);
      };
    } else Be = function() {
      se(et, 0);
    };
    function kt(he) {
      Se = he, ye || (ye = !0, Be());
    }
    function Pe(he, $e) {
      Le = se(function() {
        he(d.unstable_now());
      }, $e);
    }
    d.unstable_IdlePriority = 5, d.unstable_ImmediatePriority = 1, d.unstable_LowPriority = 4, d.unstable_NormalPriority = 3, d.unstable_Profiling = null, d.unstable_UserBlockingPriority = 2, d.unstable_cancelCallback = function(he) {
      he.callback = null;
    }, d.unstable_continueExecution = function() {
      H || Y || (H = !0, kt(me));
    }, d.unstable_forceFrameRate = function(he) {
      0 > he || 125 < he ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Qe = 0 < he ? Math.floor(1e3 / he) : 5;
    }, d.unstable_getCurrentPriorityLevel = function() {
      return j;
    }, d.unstable_getFirstCallbackNode = function() {
      return v(N);
    }, d.unstable_next = function(he) {
      switch (j) {
        case 1:
        case 2:
        case 3:
          var $e = 3;
          break;
        default:
          $e = j;
      }
      var Re = j;
      j = $e;
      try {
        return he();
      } finally {
        j = Re;
      }
    }, d.unstable_pauseExecution = function() {
    }, d.unstable_requestPaint = function() {
    }, d.unstable_runWithPriority = function(he, $e) {
      switch (he) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          he = 3;
      }
      var Re = j;
      j = he;
      try {
        return $e();
      } finally {
        j = Re;
      }
    }, d.unstable_scheduleCallback = function(he, $e, Re) {
      var P = d.unstable_now();
      switch (typeof Re == "object" && Re !== null ? (Re = Re.delay, Re = typeof Re == "number" && 0 < Re ? P + Re : P) : Re = P, he) {
        case 1:
          var ee = -1;
          break;
        case 2:
          ee = 250;
          break;
        case 5:
          ee = 1073741823;
          break;
        case 4:
          ee = 1e4;
          break;
        default:
          ee = 5e3;
      }
      return ee = Re + ee, he = { id: K++, callback: $e, priorityLevel: he, startTime: Re, expirationTime: ee, sortIndex: -1 }, Re > P ? (he.sortIndex = Re, m(F, he), v(N) === null && he === v(F) && (de ? (be(Le), Le = -1) : de = !0, Pe(pe, Re - P))) : (he.sortIndex = ee, m(N, he), H || Y || (H = !0, kt(me))), he;
    }, d.unstable_shouldYield = Ct, d.unstable_wrapCallback = function(he) {
      var $e = j;
      return function() {
        var Re = j;
        j = $e;
        try {
          return he.apply(this, arguments);
        } finally {
          j = Re;
        }
      };
    };
  }(XE)), XE;
}
var KE = {}, d0;
function oO() {
  return d0 || (d0 = 1, function(d) {
    je.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var m = !1, v = 5;
      function R(ge, He) {
        var St = ge.length;
        ge.push(He), g(ge, He, St);
      }
      function w(ge) {
        return ge.length === 0 ? null : ge[0];
      }
      function b(ge) {
        if (ge.length === 0)
          return null;
        var He = ge[0], St = ge.pop();
        return St !== He && (ge[0] = St, U(ge, St, 0)), He;
      }
      function g(ge, He, St) {
        for (var It = St; It > 0; ) {
          var rn = It - 1 >>> 1, mn = ge[rn];
          if (N(mn, He) > 0)
            ge[rn] = He, ge[It] = mn, It = rn;
          else
            return;
        }
      }
      function U(ge, He, St) {
        for (var It = St, rn = ge.length, mn = rn >>> 1; It < mn; ) {
          var cn = (It + 1) * 2 - 1, Jn = ge[cn], an = cn + 1, Gt = ge[an];
          if (N(Jn, He) < 0)
            an < rn && N(Gt, Jn) < 0 ? (ge[It] = Gt, ge[an] = He, It = an) : (ge[It] = Jn, ge[cn] = He, It = cn);
          else if (an < rn && N(Gt, He) < 0)
            ge[It] = Gt, ge[an] = He, It = an;
          else
            return;
        }
      }
      function N(ge, He) {
        var St = ge.sortIndex - He.sortIndex;
        return St !== 0 ? St : ge.id - He.id;
      }
      var F = 1, K = 2, O = 3, j = 4, Y = 5;
      function H(ge, He) {
      }
      var de = typeof performance == "object" && typeof performance.now == "function";
      if (de) {
        var se = performance;
        d.unstable_now = function() {
          return se.now();
        };
      } else {
        var be = Date, ne = be.now();
        d.unstable_now = function() {
          return be.now() - ne;
        };
      }
      var le = 1073741823, pe = -1, me = 250, ye = 5e3, Se = 1e4, Le = le, Qe = [], it = [], Ct = 1, et = null, Be = O, mt = !1, ct = !1, kt = !1, Pe = typeof setTimeout == "function" ? setTimeout : null, he = typeof clearTimeout == "function" ? clearTimeout : null, $e = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function Re(ge) {
        for (var He = w(it); He !== null; ) {
          if (He.callback === null)
            b(it);
          else if (He.startTime <= ge)
            b(it), He.sortIndex = He.expirationTime, R(Qe, He);
          else
            return;
          He = w(it);
        }
      }
      function P(ge) {
        if (kt = !1, Re(ge), !ct)
          if (w(Qe) !== null)
            ct = !0, Mn(ee);
          else {
            var He = w(it);
            He !== null && Cr(P, He.startTime - ge);
          }
      }
      function ee(ge, He) {
        ct = !1, kt && (kt = !1, ca()), mt = !0;
        var St = Be;
        try {
          var It;
          if (!m) return nt(ge, He);
        } finally {
          et = null, Be = St, mt = !1;
        }
      }
      function nt(ge, He) {
        var St = He;
        for (Re(St), et = w(Qe); et !== null && !(et.expirationTime > St && (!ge || pi())); ) {
          var It = et.callback;
          if (typeof It == "function") {
            et.callback = null, Be = et.priorityLevel;
            var rn = et.expirationTime <= St, mn = It(rn);
            St = d.unstable_now(), typeof mn == "function" ? et.callback = mn : et === w(Qe) && b(Qe), Re(St);
          } else
            b(Qe);
          et = w(Qe);
        }
        if (et !== null)
          return !0;
        var cn = w(it);
        return cn !== null && Cr(P, cn.startTime - St), !1;
      }
      function Ze(ge, He) {
        switch (ge) {
          case F:
          case K:
          case O:
          case j:
          case Y:
            break;
          default:
            ge = O;
        }
        var St = Be;
        Be = ge;
        try {
          return He();
        } finally {
          Be = St;
        }
      }
      function Rt(ge) {
        var He;
        switch (Be) {
          case F:
          case K:
          case O:
            He = O;
            break;
          default:
            He = Be;
            break;
        }
        var St = Be;
        Be = He;
        try {
          return ge();
        } finally {
          Be = St;
        }
      }
      function yt(ge) {
        var He = Be;
        return function() {
          var St = Be;
          Be = He;
          try {
            return ge.apply(this, arguments);
          } finally {
            Be = St;
          }
        };
      }
      function vt(ge, He, St) {
        var It = d.unstable_now(), rn;
        if (typeof St == "object" && St !== null) {
          var mn = St.delay;
          typeof mn == "number" && mn > 0 ? rn = It + mn : rn = It;
        } else
          rn = It;
        var cn;
        switch (ge) {
          case F:
            cn = pe;
            break;
          case K:
            cn = me;
            break;
          case Y:
            cn = Le;
            break;
          case j:
            cn = Se;
            break;
          case O:
          default:
            cn = ye;
            break;
        }
        var Jn = rn + cn, an = {
          id: Ct++,
          callback: He,
          priorityLevel: ge,
          startTime: rn,
          expirationTime: Jn,
          sortIndex: -1
        };
        return rn > It ? (an.sortIndex = rn, R(it, an), w(Qe) === null && an === w(it) && (kt ? ca() : kt = !0, Cr(P, rn - It))) : (an.sortIndex = Jn, R(Qe, an), !ct && !mt && (ct = !0, Mn(ee))), an;
      }
      function gt() {
      }
      function wt() {
        !ct && !mt && (ct = !0, Mn(ee));
      }
      function Qt() {
        return w(Qe);
      }
      function Nn(ge) {
        ge.callback = null;
      }
      function _r() {
        return Be;
      }
      var Rn = !1, rr = null, $n = -1, In = v, Yr = -1;
      function pi() {
        var ge = d.unstable_now() - Yr;
        return !(ge < In);
      }
      function sa() {
      }
      function qn(ge) {
        if (ge < 0 || ge > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        ge > 0 ? In = Math.floor(1e3 / ge) : In = v;
      }
      var wn = function() {
        if (rr !== null) {
          var ge = d.unstable_now();
          Yr = ge;
          var He = !0, St = !0;
          try {
            St = rr(He, ge);
          } finally {
            St ? Yn() : (Rn = !1, rr = null);
          }
        } else
          Rn = !1;
      }, Yn;
      if (typeof $e == "function")
        Yn = function() {
          $e(wn);
        };
      else if (typeof MessageChannel < "u") {
        var Er = new MessageChannel(), Qa = Er.port2;
        Er.port1.onmessage = wn, Yn = function() {
          Qa.postMessage(null);
        };
      } else
        Yn = function() {
          Pe(wn, 0);
        };
      function Mn(ge) {
        rr = ge, Rn || (Rn = !0, Yn());
      }
      function Cr(ge, He) {
        $n = Pe(function() {
          ge(d.unstable_now());
        }, He);
      }
      function ca() {
        he($n), $n = -1;
      }
      var Ga = sa, vi = null;
      d.unstable_IdlePriority = Y, d.unstable_ImmediatePriority = F, d.unstable_LowPriority = j, d.unstable_NormalPriority = O, d.unstable_Profiling = vi, d.unstable_UserBlockingPriority = K, d.unstable_cancelCallback = Nn, d.unstable_continueExecution = wt, d.unstable_forceFrameRate = qn, d.unstable_getCurrentPriorityLevel = _r, d.unstable_getFirstCallbackNode = Qt, d.unstable_next = Rt, d.unstable_pauseExecution = gt, d.unstable_requestPaint = Ga, d.unstable_runWithPriority = Ze, d.unstable_scheduleCallback = vt, d.unstable_shouldYield = pi, d.unstable_wrapCallback = yt, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(KE)), KE;
}
var p0;
function A0() {
  return p0 || (p0 = 1, je.env.NODE_ENV === "production" ? py.exports = uO() : py.exports = oO()), py.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var v0;
function sO() {
  if (v0) return Ia;
  v0 = 1;
  var d = D, m = A0();
  function v(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++) r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var R = /* @__PURE__ */ new Set(), w = {};
  function b(n, r) {
    g(n, r), g(n + "Capture", r);
  }
  function g(n, r) {
    for (w[n] = r, n = 0; n < r.length; n++) R.add(r[n]);
  }
  var U = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), N = Object.prototype.hasOwnProperty, F = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, K = {}, O = {};
  function j(n) {
    return N.call(O, n) ? !0 : N.call(K, n) ? !1 : F.test(n) ? O[n] = !0 : (K[n] = !0, !1);
  }
  function Y(n, r, l, o) {
    if (l !== null && l.type === 0) return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return o ? !1 : l !== null ? !l.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function H(n, r, l, o) {
    if (r === null || typeof r > "u" || Y(n, r, l, o)) return !0;
    if (o) return !1;
    if (l !== null) switch (l.type) {
      case 3:
        return !r;
      case 4:
        return r === !1;
      case 5:
        return isNaN(r);
      case 6:
        return isNaN(r) || 1 > r;
    }
    return !1;
  }
  function de(n, r, l, o, c, p, E) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = o, this.attributeNamespace = c, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = p, this.removeEmptyString = E;
  }
  var se = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    se[n] = new de(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    se[r] = new de(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    se[n] = new de(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    se[n] = new de(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    se[n] = new de(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    se[n] = new de(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    se[n] = new de(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    se[n] = new de(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    se[n] = new de(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var be = /[\-:]([a-z])/g;
  function ne(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      be,
      ne
    );
    se[r] = new de(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(be, ne);
    se[r] = new de(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(be, ne);
    se[r] = new de(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    se[n] = new de(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), se.xlinkHref = new de("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    se[n] = new de(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function le(n, r, l, o) {
    var c = se.hasOwnProperty(r) ? se[r] : null;
    (c !== null ? c.type !== 0 : o || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (H(r, l, c, o) && (l = null), o || c === null ? j(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : c.mustUseProperty ? n[c.propertyName] = l === null ? c.type === 3 ? !1 : "" : l : (r = c.attributeName, o = c.attributeNamespace, l === null ? n.removeAttribute(r) : (c = c.type, l = c === 3 || c === 4 && l === !0 ? "" : "" + l, o ? n.setAttributeNS(o, r, l) : n.setAttribute(r, l))));
  }
  var pe = d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, me = Symbol.for("react.element"), ye = Symbol.for("react.portal"), Se = Symbol.for("react.fragment"), Le = Symbol.for("react.strict_mode"), Qe = Symbol.for("react.profiler"), it = Symbol.for("react.provider"), Ct = Symbol.for("react.context"), et = Symbol.for("react.forward_ref"), Be = Symbol.for("react.suspense"), mt = Symbol.for("react.suspense_list"), ct = Symbol.for("react.memo"), kt = Symbol.for("react.lazy"), Pe = Symbol.for("react.offscreen"), he = Symbol.iterator;
  function $e(n) {
    return n === null || typeof n != "object" ? null : (n = he && n[he] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var Re = Object.assign, P;
  function ee(n) {
    if (P === void 0) try {
      throw Error();
    } catch (l) {
      var r = l.stack.trim().match(/\n( *(at )?)/);
      P = r && r[1] || "";
    }
    return `
` + P + n;
  }
  var nt = !1;
  function Ze(n, r) {
    if (!n || nt) return "";
    nt = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r) if (r = function() {
        throw Error();
      }, Object.defineProperty(r.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(r, []);
        } catch (G) {
          var o = G;
        }
        Reflect.construct(n, [], r);
      } else {
        try {
          r.call();
        } catch (G) {
          o = G;
        }
        n.call(r.prototype);
      }
      else {
        try {
          throw Error();
        } catch (G) {
          o = G;
        }
        n();
      }
    } catch (G) {
      if (G && o && typeof G.stack == "string") {
        for (var c = G.stack.split(`
`), p = o.stack.split(`
`), E = c.length - 1, x = p.length - 1; 1 <= E && 0 <= x && c[E] !== p[x]; ) x--;
        for (; 1 <= E && 0 <= x; E--, x--) if (c[E] !== p[x]) {
          if (E !== 1 || x !== 1)
            do
              if (E--, x--, 0 > x || c[E] !== p[x]) {
                var L = `
` + c[E].replace(" at new ", " at ");
                return n.displayName && L.includes("<anonymous>") && (L = L.replace("<anonymous>", n.displayName)), L;
              }
            while (1 <= E && 0 <= x);
          break;
        }
      }
    } finally {
      nt = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? ee(n) : "";
  }
  function Rt(n) {
    switch (n.tag) {
      case 5:
        return ee(n.type);
      case 16:
        return ee("Lazy");
      case 13:
        return ee("Suspense");
      case 19:
        return ee("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = Ze(n.type, !1), n;
      case 11:
        return n = Ze(n.type.render, !1), n;
      case 1:
        return n = Ze(n.type, !0), n;
      default:
        return "";
    }
  }
  function yt(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case Se:
        return "Fragment";
      case ye:
        return "Portal";
      case Qe:
        return "Profiler";
      case Le:
        return "StrictMode";
      case Be:
        return "Suspense";
      case mt:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case Ct:
        return (n.displayName || "Context") + ".Consumer";
      case it:
        return (n._context.displayName || "Context") + ".Provider";
      case et:
        var r = n.render;
        return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case ct:
        return r = n.displayName || null, r !== null ? r : yt(n.type) || "Memo";
      case kt:
        r = n._payload, n = n._init;
        try {
          return yt(n(r));
        } catch {
        }
    }
    return null;
  }
  function vt(n) {
    var r = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return n = r.render, n = n.displayName || n.name || "", r.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return r;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return yt(r);
      case 8:
        return r === Le ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof r == "function") return r.displayName || r.name || null;
        if (typeof r == "string") return r;
    }
    return null;
  }
  function gt(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function wt(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function Qt(n) {
    var r = wt(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), o = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var c = l.get, p = l.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return c.call(this);
      }, set: function(E) {
        o = "" + E, p.call(this, E);
      } }), Object.defineProperty(n, r, { enumerable: l.enumerable }), { getValue: function() {
        return o;
      }, setValue: function(E) {
        o = "" + E;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function Nn(n) {
    n._valueTracker || (n._valueTracker = Qt(n));
  }
  function _r(n) {
    if (!n) return !1;
    var r = n._valueTracker;
    if (!r) return !0;
    var l = r.getValue(), o = "";
    return n && (o = wt(n) ? n.checked ? "true" : "false" : n.value), n = o, n !== l ? (r.setValue(n), !0) : !1;
  }
  function Rn(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u") return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function rr(n, r) {
    var l = r.checked;
    return Re({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? n._wrapperState.initialChecked });
  }
  function $n(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, o = r.checked != null ? r.checked : r.defaultChecked;
    l = gt(r.value != null ? r.value : l), n._wrapperState = { initialChecked: o, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function In(n, r) {
    r = r.checked, r != null && le(n, "checked", r, !1);
  }
  function Yr(n, r) {
    In(n, r);
    var l = gt(r.value), o = r.type;
    if (l != null) o === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (o === "submit" || o === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? sa(n, r.type, l) : r.hasOwnProperty("defaultValue") && sa(n, r.type, gt(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function pi(n, r, l) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var o = r.type;
      if (!(o !== "submit" && o !== "reset" || r.value !== void 0 && r.value !== null)) return;
      r = "" + n._wrapperState.initialValue, l || r === n.value || (n.value = r), n.defaultValue = r;
    }
    l = n.name, l !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, l !== "" && (n.name = l);
  }
  function sa(n, r, l) {
    (r !== "number" || Rn(n.ownerDocument) !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  var qn = Array.isArray;
  function wn(n, r, l, o) {
    if (n = n.options, r) {
      r = {};
      for (var c = 0; c < l.length; c++) r["$" + l[c]] = !0;
      for (l = 0; l < n.length; l++) c = r.hasOwnProperty("$" + n[l].value), n[l].selected !== c && (n[l].selected = c), c && o && (n[l].defaultSelected = !0);
    } else {
      for (l = "" + gt(l), r = null, c = 0; c < n.length; c++) {
        if (n[c].value === l) {
          n[c].selected = !0, o && (n[c].defaultSelected = !0);
          return;
        }
        r !== null || n[c].disabled || (r = n[c]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function Yn(n, r) {
    if (r.dangerouslySetInnerHTML != null) throw Error(v(91));
    return Re({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function Er(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null) throw Error(v(92));
        if (qn(l)) {
          if (1 < l.length) throw Error(v(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), l = r;
    }
    n._wrapperState = { initialValue: gt(l) };
  }
  function Qa(n, r) {
    var l = gt(r.value), o = gt(r.defaultValue);
    l != null && (l = "" + l, l !== n.value && (n.value = l), r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)), o != null && (n.defaultValue = "" + o);
  }
  function Mn(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function Cr(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function ca(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? Cr(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var Ga, vi = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, l, o, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, l, o, c);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n) n.innerHTML = r;
    else {
      for (Ga = Ga || document.createElement("div"), Ga.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = Ga.firstChild; n.firstChild; ) n.removeChild(n.firstChild);
      for (; r.firstChild; ) n.appendChild(r.firstChild);
    }
  });
  function ge(n, r) {
    if (r) {
      var l = n.firstChild;
      if (l && l === n.lastChild && l.nodeType === 3) {
        l.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var He = {
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
  }, St = ["Webkit", "ms", "Moz", "O"];
  Object.keys(He).forEach(function(n) {
    St.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), He[r] = He[n];
    });
  });
  function It(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || He.hasOwnProperty(n) && He[n] ? ("" + r).trim() : r + "px";
  }
  function rn(n, r) {
    n = n.style;
    for (var l in r) if (r.hasOwnProperty(l)) {
      var o = l.indexOf("--") === 0, c = It(l, r[l], o);
      l === "float" && (l = "cssFloat"), o ? n.setProperty(l, c) : n[l] = c;
    }
  }
  var mn = Re({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function cn(n, r) {
    if (r) {
      if (mn[n] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(v(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(v(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML)) throw Error(v(61));
      }
      if (r.style != null && typeof r.style != "object") throw Error(v(62));
    }
  }
  function Jn(n, r) {
    if (n.indexOf("-") === -1) return typeof r.is == "string";
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
  var an = null;
  function Gt(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var Xt = null, fa = null, Rr = null;
  function xa(n) {
    if (n = Ye(n)) {
      if (typeof Xt != "function") throw Error(v(280));
      var r = n.stateNode;
      r && (r = xn(r), Xt(n.stateNode, n.type, r));
    }
  }
  function Ii(n) {
    fa ? Rr ? Rr.push(n) : Rr = [n] : fa = n;
  }
  function lu() {
    if (fa) {
      var n = fa, r = Rr;
      if (Rr = fa = null, xa(n), r) for (n = 0; n < r.length; n++) xa(r[n]);
    }
  }
  function uu(n, r) {
    return n(r);
  }
  function gl() {
  }
  var Sl = !1;
  function ou(n, r, l) {
    if (Sl) return n(r, l);
    Sl = !0;
    try {
      return uu(n, r, l);
    } finally {
      Sl = !1, (fa !== null || Rr !== null) && (gl(), lu());
    }
  }
  function br(n, r) {
    var l = n.stateNode;
    if (l === null) return null;
    var o = xn(l);
    if (o === null) return null;
    l = o[r];
    e: switch (r) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (o = !o.disabled) || (n = n.type, o = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !o;
        break e;
      default:
        n = !1;
    }
    if (n) return null;
    if (l && typeof l != "function") throw Error(v(231, r, typeof l));
    return l;
  }
  var Dr = !1;
  if (U) try {
    var ar = {};
    Object.defineProperty(ar, "passive", { get: function() {
      Dr = !0;
    } }), window.addEventListener("test", ar, ar), window.removeEventListener("test", ar, ar);
  } catch {
    Dr = !1;
  }
  function hi(n, r, l, o, c, p, E, x, L) {
    var G = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, G);
    } catch (ue) {
      this.onError(ue);
    }
  }
  var Xa = !1, mi = null, yi = !1, k = null, re = { onError: function(n) {
    Xa = !0, mi = n;
  } };
  function we(n, r, l, o, c, p, E, x, L) {
    Xa = !1, mi = null, hi.apply(re, arguments);
  }
  function Me(n, r, l, o, c, p, E, x, L) {
    if (we.apply(this, arguments), Xa) {
      if (Xa) {
        var G = mi;
        Xa = !1, mi = null;
      } else throw Error(v(198));
      yi || (yi = !0, k = G);
    }
  }
  function ft(n) {
    var r = n, l = n;
    if (n.alternate) for (; r.return; ) r = r.return;
    else {
      n = r;
      do
        r = n, r.flags & 4098 && (l = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? l : null;
  }
  function ut(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null) return r.dehydrated;
    }
    return null;
  }
  function _t(n) {
    if (ft(n) !== n) throw Error(v(188));
  }
  function Tt(n) {
    var r = n.alternate;
    if (!r) {
      if (r = ft(n), r === null) throw Error(v(188));
      return r !== n ? null : n;
    }
    for (var l = n, o = r; ; ) {
      var c = l.return;
      if (c === null) break;
      var p = c.alternate;
      if (p === null) {
        if (o = c.return, o !== null) {
          l = o;
          continue;
        }
        break;
      }
      if (c.child === p.child) {
        for (p = c.child; p; ) {
          if (p === l) return _t(c), n;
          if (p === o) return _t(c), r;
          p = p.sibling;
        }
        throw Error(v(188));
      }
      if (l.return !== o.return) l = c, o = p;
      else {
        for (var E = !1, x = c.child; x; ) {
          if (x === l) {
            E = !0, l = c, o = p;
            break;
          }
          if (x === o) {
            E = !0, o = c, l = p;
            break;
          }
          x = x.sibling;
        }
        if (!E) {
          for (x = p.child; x; ) {
            if (x === l) {
              E = !0, l = p, o = c;
              break;
            }
            if (x === o) {
              E = !0, o = p, l = c;
              break;
            }
            x = x.sibling;
          }
          if (!E) throw Error(v(189));
        }
      }
      if (l.alternate !== o) throw Error(v(190));
    }
    if (l.tag !== 3) throw Error(v(188));
    return l.stateNode.current === l ? n : r;
  }
  function Tn(n) {
    return n = Tt(n), n !== null ? ln(n) : null;
  }
  function ln(n) {
    if (n.tag === 5 || n.tag === 6) return n;
    for (n = n.child; n !== null; ) {
      var r = ln(n);
      if (r !== null) return r;
      n = n.sibling;
    }
    return null;
  }
  var fn = m.unstable_scheduleCallback, ir = m.unstable_cancelCallback, Ka = m.unstable_shouldYield, qa = m.unstable_requestPaint, dt = m.unstable_now, ht = m.unstable_getCurrentPriorityLevel, Ja = m.unstable_ImmediatePriority, su = m.unstable_UserBlockingPriority, cu = m.unstable_NormalPriority, El = m.unstable_LowPriority, no = m.unstable_IdlePriority, Cl = null, Wr = null;
  function ts(n) {
    if (Wr && typeof Wr.onCommitFiberRoot == "function") try {
      Wr.onCommitFiberRoot(Cl, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  var kr = Math.clz32 ? Math.clz32 : ro, gc = Math.log, Sc = Math.LN2;
  function ro(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (gc(n) / Sc | 0) | 0;
  }
  var Rl = 64, da = 4194304;
  function Za(n) {
    switch (n & -n) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n;
    }
  }
  function ei(n, r) {
    var l = n.pendingLanes;
    if (l === 0) return 0;
    var o = 0, c = n.suspendedLanes, p = n.pingedLanes, E = l & 268435455;
    if (E !== 0) {
      var x = E & ~c;
      x !== 0 ? o = Za(x) : (p &= E, p !== 0 && (o = Za(p)));
    } else E = l & ~c, E !== 0 ? o = Za(E) : p !== 0 && (o = Za(p));
    if (o === 0) return 0;
    if (r !== 0 && r !== o && !(r & c) && (c = o & -o, p = r & -r, c >= p || c === 16 && (p & 4194240) !== 0)) return r;
    if (o & 4 && (o |= l & 16), r = n.entangledLanes, r !== 0) for (n = n.entanglements, r &= o; 0 < r; ) l = 31 - kr(r), c = 1 << l, o |= n[l], r &= ~c;
    return o;
  }
  function ao(n, r) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return r + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return r + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function fu(n, r) {
    for (var l = n.suspendedLanes, o = n.pingedLanes, c = n.expirationTimes, p = n.pendingLanes; 0 < p; ) {
      var E = 31 - kr(p), x = 1 << E, L = c[E];
      L === -1 ? (!(x & l) || x & o) && (c[E] = ao(x, r)) : L <= r && (n.expiredLanes |= x), p &= ~x;
    }
  }
  function wl(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function io() {
    var n = Rl;
    return Rl <<= 1, !(Rl & 4194240) && (Rl = 64), n;
  }
  function lo(n) {
    for (var r = [], l = 0; 31 > l; l++) r.push(n);
    return r;
  }
  function Yi(n, r, l) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - kr(r), n[r] = l;
  }
  function ud(n, r) {
    var l = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var o = n.eventTimes;
    for (n = n.expirationTimes; 0 < l; ) {
      var c = 31 - kr(l), p = 1 << c;
      r[c] = 0, o[c] = -1, n[c] = -1, l &= ~p;
    }
  }
  function Wi(n, r) {
    var l = n.entangledLanes |= r;
    for (n = n.entanglements; l; ) {
      var o = 31 - kr(l), c = 1 << o;
      c & r | n[o] & r && (n[o] |= r), l &= ~c;
    }
  }
  var Pt = 0;
  function uo(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var At, ns, gi, lt, oo, lr = !1, Si = [], Or = null, Ei = null, dn = null, Kt = /* @__PURE__ */ new Map(), Tl = /* @__PURE__ */ new Map(), Wn = [], Lr = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function _a(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        Or = null;
        break;
      case "dragenter":
      case "dragleave":
        Ei = null;
        break;
      case "mouseover":
      case "mouseout":
        dn = null;
        break;
      case "pointerover":
      case "pointerout":
        Kt.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Tl.delete(r.pointerId);
    }
  }
  function du(n, r, l, o, c, p) {
    return n === null || n.nativeEvent !== p ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: o, nativeEvent: p, targetContainers: [c] }, r !== null && (r = Ye(r), r !== null && ns(r)), n) : (n.eventSystemFlags |= o, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function rs(n, r, l, o, c) {
    switch (r) {
      case "focusin":
        return Or = du(Or, n, r, l, o, c), !0;
      case "dragenter":
        return Ei = du(Ei, n, r, l, o, c), !0;
      case "mouseover":
        return dn = du(dn, n, r, l, o, c), !0;
      case "pointerover":
        var p = c.pointerId;
        return Kt.set(p, du(Kt.get(p) || null, n, r, l, o, c)), !0;
      case "gotpointercapture":
        return p = c.pointerId, Tl.set(p, du(Tl.get(p) || null, n, r, l, o, c)), !0;
    }
    return !1;
  }
  function as(n) {
    var r = Cu(n.target);
    if (r !== null) {
      var l = ft(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = ut(l), r !== null) {
            n.blockedOn = r, oo(n.priority, function() {
              gi(l);
            });
            return;
          }
        } else if (r === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function xl(n) {
    if (n.blockedOn !== null) return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var l = fo(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (l === null) {
        l = n.nativeEvent;
        var o = new l.constructor(l.type, l);
        an = o, l.target.dispatchEvent(o), an = null;
      } else return r = Ye(l), r !== null && ns(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function pu(n, r, l) {
    xl(n) && l.delete(r);
  }
  function od() {
    lr = !1, Or !== null && xl(Or) && (Or = null), Ei !== null && xl(Ei) && (Ei = null), dn !== null && xl(dn) && (dn = null), Kt.forEach(pu), Tl.forEach(pu);
  }
  function ba(n, r) {
    n.blockedOn === r && (n.blockedOn = null, lr || (lr = !0, m.unstable_scheduleCallback(m.unstable_NormalPriority, od)));
  }
  function ti(n) {
    function r(c) {
      return ba(c, n);
    }
    if (0 < Si.length) {
      ba(Si[0], n);
      for (var l = 1; l < Si.length; l++) {
        var o = Si[l];
        o.blockedOn === n && (o.blockedOn = null);
      }
    }
    for (Or !== null && ba(Or, n), Ei !== null && ba(Ei, n), dn !== null && ba(dn, n), Kt.forEach(r), Tl.forEach(r), l = 0; l < Wn.length; l++) o = Wn[l], o.blockedOn === n && (o.blockedOn = null);
    for (; 0 < Wn.length && (l = Wn[0], l.blockedOn === null); ) as(l), l.blockedOn === null && Wn.shift();
  }
  var Ci = pe.ReactCurrentBatchConfig, Da = !0;
  function so(n, r, l, o) {
    var c = Pt, p = Ci.transition;
    Ci.transition = null;
    try {
      Pt = 1, _l(n, r, l, o);
    } finally {
      Pt = c, Ci.transition = p;
    }
  }
  function co(n, r, l, o) {
    var c = Pt, p = Ci.transition;
    Ci.transition = null;
    try {
      Pt = 4, _l(n, r, l, o);
    } finally {
      Pt = c, Ci.transition = p;
    }
  }
  function _l(n, r, l, o) {
    if (Da) {
      var c = fo(n, r, l, o);
      if (c === null) Lc(n, r, o, vu, l), _a(n, o);
      else if (rs(c, n, r, l, o)) o.stopPropagation();
      else if (_a(n, o), r & 4 && -1 < Lr.indexOf(n)) {
        for (; c !== null; ) {
          var p = Ye(c);
          if (p !== null && At(p), p = fo(n, r, l, o), p === null && Lc(n, r, o, vu, l), p === c) break;
          c = p;
        }
        c !== null && o.stopPropagation();
      } else Lc(n, r, o, null, l);
    }
  }
  var vu = null;
  function fo(n, r, l, o) {
    if (vu = null, n = Gt(o), n = Cu(n), n !== null) if (r = ft(n), r === null) n = null;
    else if (l = r.tag, l === 13) {
      if (n = ut(r), n !== null) return n;
      n = null;
    } else if (l === 3) {
      if (r.stateNode.current.memoizedState.isDehydrated) return r.tag === 3 ? r.stateNode.containerInfo : null;
      n = null;
    } else r !== n && (n = null);
    return vu = n, null;
  }
  function po(n) {
    switch (n) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (ht()) {
          case Ja:
            return 1;
          case su:
            return 4;
          case cu:
          case El:
            return 16;
          case no:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var ni = null, S = null, _ = null;
  function Q() {
    if (_) return _;
    var n, r = S, l = r.length, o, c = "value" in ni ? ni.value : ni.textContent, p = c.length;
    for (n = 0; n < l && r[n] === c[n]; n++) ;
    var E = l - n;
    for (o = 1; o <= E && r[l - o] === c[p - o]; o++) ;
    return _ = c.slice(n, 1 < o ? 1 - o : void 0);
  }
  function q(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function ve() {
    return !0;
  }
  function Ge() {
    return !1;
  }
  function Ce(n) {
    function r(l, o, c, p, E) {
      this._reactName = l, this._targetInst = c, this.type = o, this.nativeEvent = p, this.target = E, this.currentTarget = null;
      for (var x in n) n.hasOwnProperty(x) && (l = n[x], this[x] = l ? l(p) : p[x]);
      return this.isDefaultPrevented = (p.defaultPrevented != null ? p.defaultPrevented : p.returnValue === !1) ? ve : Ge, this.isPropagationStopped = Ge, this;
    }
    return Re(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = ve);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = ve);
    }, persist: function() {
    }, isPersistent: ve }), r;
  }
  var qe = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, bt = Ce(qe), zt = Re({}, qe, { view: 0, detail: 0 }), un = Ce(zt), qt, Et, Jt, yn = Re({}, zt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: pd, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== Jt && (Jt && n.type === "mousemove" ? (qt = n.screenX - Jt.screenX, Et = n.screenY - Jt.screenY) : Et = qt = 0, Jt = n), qt);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : Et;
  } }), bl = Ce(yn), is = Re({}, yn, { dataTransfer: 0 }), Qi = Ce(is), ls = Re({}, zt, { relatedTarget: 0 }), hu = Ce(ls), sd = Re({}, qe, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Ec = Ce(sd), cd = Re({}, qe, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), Rv = Ce(cd), fd = Re({}, qe, { data: 0 }), dd = Ce(fd), wv = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, Tv = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, My = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Gi(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = My[n]) ? !!r[n] : !1;
  }
  function pd() {
    return Gi;
  }
  var vd = Re({}, zt, { key: function(n) {
    if (n.key) {
      var r = wv[n.key] || n.key;
      if (r !== "Unidentified") return r;
    }
    return n.type === "keypress" ? (n = q(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? Tv[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: pd, charCode: function(n) {
    return n.type === "keypress" ? q(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? q(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), hd = Ce(vd), md = Re({}, yn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), xv = Ce(md), Cc = Re({}, zt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: pd }), _v = Ce(Cc), Qr = Re({}, qe, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Xi = Ce(Qr), Un = Re({}, yn, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Ki = Ce(Un), yd = [9, 13, 27, 32], vo = U && "CompositionEvent" in window, us = null;
  U && "documentMode" in document && (us = document.documentMode);
  var os = U && "TextEvent" in window && !us, bv = U && (!vo || us && 8 < us && 11 >= us), Dv = " ", Rc = !1;
  function kv(n, r) {
    switch (n) {
      case "keyup":
        return yd.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Ov(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var ho = !1;
  function Lv(n, r) {
    switch (n) {
      case "compositionend":
        return Ov(r);
      case "keypress":
        return r.which !== 32 ? null : (Rc = !0, Dv);
      case "textInput":
        return n = r.data, n === Dv && Rc ? null : n;
      default:
        return null;
    }
  }
  function Uy(n, r) {
    if (ho) return n === "compositionend" || !vo && kv(n, r) ? (n = Q(), _ = S = ni = null, ho = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
          if (r.char && 1 < r.char.length) return r.char;
          if (r.which) return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return bv && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var Ay = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Nv(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!Ay[n.type] : r === "textarea";
  }
  function gd(n, r, l, o) {
    Ii(o), r = vs(r, "onChange"), 0 < r.length && (l = new bt("onChange", "change", null, l, o), n.push({ event: l, listeners: r }));
  }
  var Ri = null, mu = null;
  function Mv(n) {
    Su(n, 0);
  }
  function ss(n) {
    var r = ai(n);
    if (_r(r)) return n;
  }
  function zy(n, r) {
    if (n === "change") return r;
  }
  var Uv = !1;
  if (U) {
    var Sd;
    if (U) {
      var Ed = "oninput" in document;
      if (!Ed) {
        var Av = document.createElement("div");
        Av.setAttribute("oninput", "return;"), Ed = typeof Av.oninput == "function";
      }
      Sd = Ed;
    } else Sd = !1;
    Uv = Sd && (!document.documentMode || 9 < document.documentMode);
  }
  function zv() {
    Ri && (Ri.detachEvent("onpropertychange", Fv), mu = Ri = null);
  }
  function Fv(n) {
    if (n.propertyName === "value" && ss(mu)) {
      var r = [];
      gd(r, mu, n, Gt(n)), ou(Mv, r);
    }
  }
  function Fy(n, r, l) {
    n === "focusin" ? (zv(), Ri = r, mu = l, Ri.attachEvent("onpropertychange", Fv)) : n === "focusout" && zv();
  }
  function Pv(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return ss(mu);
  }
  function Py(n, r) {
    if (n === "click") return ss(r);
  }
  function jv(n, r) {
    if (n === "input" || n === "change") return ss(r);
  }
  function jy(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var ri = typeof Object.is == "function" ? Object.is : jy;
  function cs(n, r) {
    if (ri(n, r)) return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null) return !1;
    var l = Object.keys(n), o = Object.keys(r);
    if (l.length !== o.length) return !1;
    for (o = 0; o < l.length; o++) {
      var c = l[o];
      if (!N.call(r, c) || !ri(n[c], r[c])) return !1;
    }
    return !0;
  }
  function Hv(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function wc(n, r) {
    var l = Hv(n);
    n = 0;
    for (var o; l; ) {
      if (l.nodeType === 3) {
        if (o = n + l.textContent.length, n <= r && o >= r) return { node: l, offset: r - n };
        n = o;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = Hv(l);
    }
  }
  function Dl(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? Dl(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function fs() {
    for (var n = window, r = Rn(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var l = typeof r.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) n = r.contentWindow;
      else break;
      r = Rn(n.document);
    }
    return r;
  }
  function Tc(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function mo(n) {
    var r = fs(), l = n.focusedElem, o = n.selectionRange;
    if (r !== l && l && l.ownerDocument && Dl(l.ownerDocument.documentElement, l)) {
      if (o !== null && Tc(l)) {
        if (r = o.start, n = o.end, n === void 0 && (n = r), "selectionStart" in l) l.selectionStart = r, l.selectionEnd = Math.min(n, l.value.length);
        else if (n = (r = l.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var c = l.textContent.length, p = Math.min(o.start, c);
          o = o.end === void 0 ? p : Math.min(o.end, c), !n.extend && p > o && (c = o, o = p, p = c), c = wc(l, p);
          var E = wc(
            l,
            o
          );
          c && E && (n.rangeCount !== 1 || n.anchorNode !== c.node || n.anchorOffset !== c.offset || n.focusNode !== E.node || n.focusOffset !== E.offset) && (r = r.createRange(), r.setStart(c.node, c.offset), n.removeAllRanges(), p > o ? (n.addRange(r), n.extend(E.node, E.offset)) : (r.setEnd(E.node, E.offset), n.addRange(r)));
        }
      }
      for (r = [], n = l; n = n.parentNode; ) n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof l.focus == "function" && l.focus(), l = 0; l < r.length; l++) n = r[l], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var Hy = U && "documentMode" in document && 11 >= document.documentMode, yo = null, Cd = null, ds = null, Rd = !1;
  function wd(n, r, l) {
    var o = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    Rd || yo == null || yo !== Rn(o) || (o = yo, "selectionStart" in o && Tc(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), ds && cs(ds, o) || (ds = o, o = vs(Cd, "onSelect"), 0 < o.length && (r = new bt("onSelect", "select", null, r, l), n.push({ event: r, listeners: o }), r.target = yo)));
  }
  function xc(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var yu = { animationend: xc("Animation", "AnimationEnd"), animationiteration: xc("Animation", "AnimationIteration"), animationstart: xc("Animation", "AnimationStart"), transitionend: xc("Transition", "TransitionEnd") }, ur = {}, Td = {};
  U && (Td = document.createElement("div").style, "AnimationEvent" in window || (delete yu.animationend.animation, delete yu.animationiteration.animation, delete yu.animationstart.animation), "TransitionEvent" in window || delete yu.transitionend.transition);
  function _c(n) {
    if (ur[n]) return ur[n];
    if (!yu[n]) return n;
    var r = yu[n], l;
    for (l in r) if (r.hasOwnProperty(l) && l in Td) return ur[n] = r[l];
    return n;
  }
  var Vv = _c("animationend"), Bv = _c("animationiteration"), $v = _c("animationstart"), Iv = _c("transitionend"), xd = /* @__PURE__ */ new Map(), bc = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function ka(n, r) {
    xd.set(n, r), b(r, [n]);
  }
  for (var _d = 0; _d < bc.length; _d++) {
    var gu = bc[_d], Vy = gu.toLowerCase(), By = gu[0].toUpperCase() + gu.slice(1);
    ka(Vy, "on" + By);
  }
  ka(Vv, "onAnimationEnd"), ka(Bv, "onAnimationIteration"), ka($v, "onAnimationStart"), ka("dblclick", "onDoubleClick"), ka("focusin", "onFocus"), ka("focusout", "onBlur"), ka(Iv, "onTransitionEnd"), g("onMouseEnter", ["mouseout", "mouseover"]), g("onMouseLeave", ["mouseout", "mouseover"]), g("onPointerEnter", ["pointerout", "pointerover"]), g("onPointerLeave", ["pointerout", "pointerover"]), b("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), b("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), b("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), b("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), b("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), b("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var ps = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), bd = new Set("cancel close invalid load scroll toggle".split(" ").concat(ps));
  function Dc(n, r, l) {
    var o = n.type || "unknown-event";
    n.currentTarget = l, Me(o, r, void 0, n), n.currentTarget = null;
  }
  function Su(n, r) {
    r = (r & 4) !== 0;
    for (var l = 0; l < n.length; l++) {
      var o = n[l], c = o.event;
      o = o.listeners;
      e: {
        var p = void 0;
        if (r) for (var E = o.length - 1; 0 <= E; E--) {
          var x = o[E], L = x.instance, G = x.currentTarget;
          if (x = x.listener, L !== p && c.isPropagationStopped()) break e;
          Dc(c, x, G), p = L;
        }
        else for (E = 0; E < o.length; E++) {
          if (x = o[E], L = x.instance, G = x.currentTarget, x = x.listener, L !== p && c.isPropagationStopped()) break e;
          Dc(c, x, G), p = L;
        }
      }
    }
    if (yi) throw n = k, yi = !1, k = null, n;
  }
  function Yt(n, r) {
    var l = r[ys];
    l === void 0 && (l = r[ys] = /* @__PURE__ */ new Set());
    var o = n + "__bubble";
    l.has(o) || (Yv(r, n, 2, !1), l.add(o));
  }
  function kc(n, r, l) {
    var o = 0;
    r && (o |= 4), Yv(l, n, o, r);
  }
  var Oc = "_reactListening" + Math.random().toString(36).slice(2);
  function go(n) {
    if (!n[Oc]) {
      n[Oc] = !0, R.forEach(function(l) {
        l !== "selectionchange" && (bd.has(l) || kc(l, !1, n), kc(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[Oc] || (r[Oc] = !0, kc("selectionchange", !1, r));
    }
  }
  function Yv(n, r, l, o) {
    switch (po(r)) {
      case 1:
        var c = so;
        break;
      case 4:
        c = co;
        break;
      default:
        c = _l;
    }
    l = c.bind(null, r, l, n), c = void 0, !Dr || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = !0), o ? c !== void 0 ? n.addEventListener(r, l, { capture: !0, passive: c }) : n.addEventListener(r, l, !0) : c !== void 0 ? n.addEventListener(r, l, { passive: c }) : n.addEventListener(r, l, !1);
  }
  function Lc(n, r, l, o, c) {
    var p = o;
    if (!(r & 1) && !(r & 2) && o !== null) e: for (; ; ) {
      if (o === null) return;
      var E = o.tag;
      if (E === 3 || E === 4) {
        var x = o.stateNode.containerInfo;
        if (x === c || x.nodeType === 8 && x.parentNode === c) break;
        if (E === 4) for (E = o.return; E !== null; ) {
          var L = E.tag;
          if ((L === 3 || L === 4) && (L = E.stateNode.containerInfo, L === c || L.nodeType === 8 && L.parentNode === c)) return;
          E = E.return;
        }
        for (; x !== null; ) {
          if (E = Cu(x), E === null) return;
          if (L = E.tag, L === 5 || L === 6) {
            o = p = E;
            continue e;
          }
          x = x.parentNode;
        }
      }
      o = o.return;
    }
    ou(function() {
      var G = p, ue = Gt(l), ce = [];
      e: {
        var ie = xd.get(n);
        if (ie !== void 0) {
          var De = bt, Ue = n;
          switch (n) {
            case "keypress":
              if (q(l) === 0) break e;
            case "keydown":
            case "keyup":
              De = hd;
              break;
            case "focusin":
              Ue = "focus", De = hu;
              break;
            case "focusout":
              Ue = "blur", De = hu;
              break;
            case "beforeblur":
            case "afterblur":
              De = hu;
              break;
            case "click":
              if (l.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              De = bl;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              De = Qi;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              De = _v;
              break;
            case Vv:
            case Bv:
            case $v:
              De = Ec;
              break;
            case Iv:
              De = Xi;
              break;
            case "scroll":
              De = un;
              break;
            case "wheel":
              De = Ki;
              break;
            case "copy":
            case "cut":
            case "paste":
              De = Rv;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              De = xv;
          }
          var Fe = (r & 4) !== 0, On = !Fe && n === "scroll", V = Fe ? ie !== null ? ie + "Capture" : null : ie;
          Fe = [];
          for (var A = G, I; A !== null; ) {
            I = A;
            var oe = I.stateNode;
            if (I.tag === 5 && oe !== null && (I = oe, V !== null && (oe = br(A, V), oe != null && Fe.push(So(A, oe, I)))), On) break;
            A = A.return;
          }
          0 < Fe.length && (ie = new De(ie, Ue, null, l, ue), ce.push({ event: ie, listeners: Fe }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (ie = n === "mouseover" || n === "pointerover", De = n === "mouseout" || n === "pointerout", ie && l !== an && (Ue = l.relatedTarget || l.fromElement) && (Cu(Ue) || Ue[qi])) break e;
          if ((De || ie) && (ie = ue.window === ue ? ue : (ie = ue.ownerDocument) ? ie.defaultView || ie.parentWindow : window, De ? (Ue = l.relatedTarget || l.toElement, De = G, Ue = Ue ? Cu(Ue) : null, Ue !== null && (On = ft(Ue), Ue !== On || Ue.tag !== 5 && Ue.tag !== 6) && (Ue = null)) : (De = null, Ue = G), De !== Ue)) {
            if (Fe = bl, oe = "onMouseLeave", V = "onMouseEnter", A = "mouse", (n === "pointerout" || n === "pointerover") && (Fe = xv, oe = "onPointerLeave", V = "onPointerEnter", A = "pointer"), On = De == null ? ie : ai(De), I = Ue == null ? ie : ai(Ue), ie = new Fe(oe, A + "leave", De, l, ue), ie.target = On, ie.relatedTarget = I, oe = null, Cu(ue) === G && (Fe = new Fe(V, A + "enter", Ue, l, ue), Fe.target = I, Fe.relatedTarget = On, oe = Fe), On = oe, De && Ue) t: {
              for (Fe = De, V = Ue, A = 0, I = Fe; I; I = kl(I)) A++;
              for (I = 0, oe = V; oe; oe = kl(oe)) I++;
              for (; 0 < A - I; ) Fe = kl(Fe), A--;
              for (; 0 < I - A; ) V = kl(V), I--;
              for (; A--; ) {
                if (Fe === V || V !== null && Fe === V.alternate) break t;
                Fe = kl(Fe), V = kl(V);
              }
              Fe = null;
            }
            else Fe = null;
            De !== null && Wv(ce, ie, De, Fe, !1), Ue !== null && On !== null && Wv(ce, On, Ue, Fe, !0);
          }
        }
        e: {
          if (ie = G ? ai(G) : window, De = ie.nodeName && ie.nodeName.toLowerCase(), De === "select" || De === "input" && ie.type === "file") var Ae = zy;
          else if (Nv(ie)) if (Uv) Ae = jv;
          else {
            Ae = Pv;
            var Ke = Fy;
          }
          else (De = ie.nodeName) && De.toLowerCase() === "input" && (ie.type === "checkbox" || ie.type === "radio") && (Ae = Py);
          if (Ae && (Ae = Ae(n, G))) {
            gd(ce, Ae, l, ue);
            break e;
          }
          Ke && Ke(n, ie, G), n === "focusout" && (Ke = ie._wrapperState) && Ke.controlled && ie.type === "number" && sa(ie, "number", ie.value);
        }
        switch (Ke = G ? ai(G) : window, n) {
          case "focusin":
            (Nv(Ke) || Ke.contentEditable === "true") && (yo = Ke, Cd = G, ds = null);
            break;
          case "focusout":
            ds = Cd = yo = null;
            break;
          case "mousedown":
            Rd = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Rd = !1, wd(ce, l, ue);
            break;
          case "selectionchange":
            if (Hy) break;
          case "keydown":
          case "keyup":
            wd(ce, l, ue);
        }
        var Je;
        if (vo) e: {
          switch (n) {
            case "compositionstart":
              var at = "onCompositionStart";
              break e;
            case "compositionend":
              at = "onCompositionEnd";
              break e;
            case "compositionupdate":
              at = "onCompositionUpdate";
              break e;
          }
          at = void 0;
        }
        else ho ? kv(n, l) && (at = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (at = "onCompositionStart");
        at && (bv && l.locale !== "ko" && (ho || at !== "onCompositionStart" ? at === "onCompositionEnd" && ho && (Je = Q()) : (ni = ue, S = "value" in ni ? ni.value : ni.textContent, ho = !0)), Ke = vs(G, at), 0 < Ke.length && (at = new dd(at, n, null, l, ue), ce.push({ event: at, listeners: Ke }), Je ? at.data = Je : (Je = Ov(l), Je !== null && (at.data = Je)))), (Je = os ? Lv(n, l) : Uy(n, l)) && (G = vs(G, "onBeforeInput"), 0 < G.length && (ue = new dd("onBeforeInput", "beforeinput", null, l, ue), ce.push({ event: ue, listeners: G }), ue.data = Je));
      }
      Su(ce, r);
    });
  }
  function So(n, r, l) {
    return { instance: n, listener: r, currentTarget: l };
  }
  function vs(n, r) {
    for (var l = r + "Capture", o = []; n !== null; ) {
      var c = n, p = c.stateNode;
      c.tag === 5 && p !== null && (c = p, p = br(n, l), p != null && o.unshift(So(n, p, c)), p = br(n, r), p != null && o.push(So(n, p, c))), n = n.return;
    }
    return o;
  }
  function kl(n) {
    if (n === null) return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function Wv(n, r, l, o, c) {
    for (var p = r._reactName, E = []; l !== null && l !== o; ) {
      var x = l, L = x.alternate, G = x.stateNode;
      if (L !== null && L === o) break;
      x.tag === 5 && G !== null && (x = G, c ? (L = br(l, p), L != null && E.unshift(So(l, L, x))) : c || (L = br(l, p), L != null && E.push(So(l, L, x)))), l = l.return;
    }
    E.length !== 0 && n.push({ event: r, listeners: E });
  }
  var Qv = /\r\n?/g, $y = /\u0000|\uFFFD/g;
  function Gv(n) {
    return (typeof n == "string" ? n : "" + n).replace(Qv, `
`).replace($y, "");
  }
  function Nc(n, r, l) {
    if (r = Gv(r), Gv(n) !== r && l) throw Error(v(425));
  }
  function Ol() {
  }
  var hs = null, Eu = null;
  function Mc(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var Uc = typeof setTimeout == "function" ? setTimeout : void 0, Dd = typeof clearTimeout == "function" ? clearTimeout : void 0, Xv = typeof Promise == "function" ? Promise : void 0, Eo = typeof queueMicrotask == "function" ? queueMicrotask : typeof Xv < "u" ? function(n) {
    return Xv.resolve(null).then(n).catch(Ac);
  } : Uc;
  function Ac(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function Co(n, r) {
    var l = r, o = 0;
    do {
      var c = l.nextSibling;
      if (n.removeChild(l), c && c.nodeType === 8) if (l = c.data, l === "/$") {
        if (o === 0) {
          n.removeChild(c), ti(r);
          return;
        }
        o--;
      } else l !== "$" && l !== "$?" && l !== "$!" || o++;
      l = c;
    } while (l);
    ti(r);
  }
  function wi(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3) break;
      if (r === 8) {
        if (r = n.data, r === "$" || r === "$!" || r === "$?") break;
        if (r === "/$") return null;
      }
    }
    return n;
  }
  function Kv(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var l = n.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (r === 0) return n;
          r--;
        } else l === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var Ll = Math.random().toString(36).slice(2), Ti = "__reactFiber$" + Ll, ms = "__reactProps$" + Ll, qi = "__reactContainer$" + Ll, ys = "__reactEvents$" + Ll, Ro = "__reactListeners$" + Ll, Iy = "__reactHandles$" + Ll;
  function Cu(n) {
    var r = n[Ti];
    if (r) return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[qi] || l[Ti]) {
        if (l = r.alternate, r.child !== null || l !== null && l.child !== null) for (n = Kv(n); n !== null; ) {
          if (l = n[Ti]) return l;
          n = Kv(n);
        }
        return r;
      }
      n = l, l = n.parentNode;
    }
    return null;
  }
  function Ye(n) {
    return n = n[Ti] || n[qi], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function ai(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(v(33));
  }
  function xn(n) {
    return n[ms] || null;
  }
  var Lt = [], Oa = -1;
  function ii(n) {
    return { current: n };
  }
  function on(n) {
    0 > Oa || (n.current = Lt[Oa], Lt[Oa] = null, Oa--);
  }
  function Ie(n, r) {
    Oa++, Lt[Oa] = n.current, n.current = r;
  }
  var Gr = {}, Cn = ii(Gr), Qn = ii(!1), Xr = Gr;
  function La(n, r) {
    var l = n.type.contextTypes;
    if (!l) return Gr;
    var o = n.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === r) return o.__reactInternalMemoizedMaskedChildContext;
    var c = {}, p;
    for (p in l) c[p] = r[p];
    return o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function An(n) {
    return n = n.childContextTypes, n != null;
  }
  function wo() {
    on(Qn), on(Cn);
  }
  function qv(n, r, l) {
    if (Cn.current !== Gr) throw Error(v(168));
    Ie(Cn, r), Ie(Qn, l);
  }
  function gs(n, r, l) {
    var o = n.stateNode;
    if (r = r.childContextTypes, typeof o.getChildContext != "function") return l;
    o = o.getChildContext();
    for (var c in o) if (!(c in r)) throw Error(v(108, vt(n) || "Unknown", c));
    return Re({}, l, o);
  }
  function Kr(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || Gr, Xr = Cn.current, Ie(Cn, n), Ie(Qn, Qn.current), !0;
  }
  function zc(n, r, l) {
    var o = n.stateNode;
    if (!o) throw Error(v(169));
    l ? (n = gs(n, r, Xr), o.__reactInternalMemoizedMergedChildContext = n, on(Qn), on(Cn), Ie(Cn, n)) : on(Qn), Ie(Qn, l);
  }
  var xi = null, To = !1, Ji = !1;
  function Fc(n) {
    xi === null ? xi = [n] : xi.push(n);
  }
  function Nl(n) {
    To = !0, Fc(n);
  }
  function _i() {
    if (!Ji && xi !== null) {
      Ji = !0;
      var n = 0, r = Pt;
      try {
        var l = xi;
        for (Pt = 1; n < l.length; n++) {
          var o = l[n];
          do
            o = o(!0);
          while (o !== null);
        }
        xi = null, To = !1;
      } catch (c) {
        throw xi !== null && (xi = xi.slice(n + 1)), fn(Ja, _i), c;
      } finally {
        Pt = r, Ji = !1;
      }
    }
    return null;
  }
  var Ml = [], Ul = 0, Al = null, Zi = 0, zn = [], Na = 0, pa = null, bi = 1, Di = "";
  function Ru(n, r) {
    Ml[Ul++] = Zi, Ml[Ul++] = Al, Al = n, Zi = r;
  }
  function Jv(n, r, l) {
    zn[Na++] = bi, zn[Na++] = Di, zn[Na++] = pa, pa = n;
    var o = bi;
    n = Di;
    var c = 32 - kr(o) - 1;
    o &= ~(1 << c), l += 1;
    var p = 32 - kr(r) + c;
    if (30 < p) {
      var E = c - c % 5;
      p = (o & (1 << E) - 1).toString(32), o >>= E, c -= E, bi = 1 << 32 - kr(r) + c | l << c | o, Di = p + n;
    } else bi = 1 << p | l << c | o, Di = n;
  }
  function Pc(n) {
    n.return !== null && (Ru(n, 1), Jv(n, 1, 0));
  }
  function jc(n) {
    for (; n === Al; ) Al = Ml[--Ul], Ml[Ul] = null, Zi = Ml[--Ul], Ml[Ul] = null;
    for (; n === pa; ) pa = zn[--Na], zn[Na] = null, Di = zn[--Na], zn[Na] = null, bi = zn[--Na], zn[Na] = null;
  }
  var qr = null, Jr = null, vn = !1, Ma = null;
  function kd(n, r) {
    var l = Pa(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function Zv(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, qr = n, Jr = wi(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, qr = n, Jr = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = pa !== null ? { id: bi, overflow: Di } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = Pa(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, qr = n, Jr = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Od(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function Ld(n) {
    if (vn) {
      var r = Jr;
      if (r) {
        var l = r;
        if (!Zv(n, r)) {
          if (Od(n)) throw Error(v(418));
          r = wi(l.nextSibling);
          var o = qr;
          r && Zv(n, r) ? kd(o, l) : (n.flags = n.flags & -4097 | 2, vn = !1, qr = n);
        }
      } else {
        if (Od(n)) throw Error(v(418));
        n.flags = n.flags & -4097 | 2, vn = !1, qr = n;
      }
    }
  }
  function Gn(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
    qr = n;
  }
  function Hc(n) {
    if (n !== qr) return !1;
    if (!vn) return Gn(n), vn = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !Mc(n.type, n.memoizedProps)), r && (r = Jr)) {
      if (Od(n)) throw Ss(), Error(v(418));
      for (; r; ) kd(n, r), r = wi(r.nextSibling);
    }
    if (Gn(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(v(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data;
            if (l === "/$") {
              if (r === 0) {
                Jr = wi(n.nextSibling);
                break e;
              }
              r--;
            } else l !== "$" && l !== "$!" && l !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        Jr = null;
      }
    } else Jr = qr ? wi(n.stateNode.nextSibling) : null;
    return !0;
  }
  function Ss() {
    for (var n = Jr; n; ) n = wi(n.nextSibling);
  }
  function zl() {
    Jr = qr = null, vn = !1;
  }
  function el(n) {
    Ma === null ? Ma = [n] : Ma.push(n);
  }
  var Yy = pe.ReactCurrentBatchConfig;
  function wu(n, r, l) {
    if (n = l.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (l._owner) {
        if (l = l._owner, l) {
          if (l.tag !== 1) throw Error(v(309));
          var o = l.stateNode;
        }
        if (!o) throw Error(v(147, n));
        var c = o, p = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === p ? r.ref : (r = function(E) {
          var x = c.refs;
          E === null ? delete x[p] : x[p] = E;
        }, r._stringRef = p, r);
      }
      if (typeof n != "string") throw Error(v(284));
      if (!l._owner) throw Error(v(290, n));
    }
    return n;
  }
  function Vc(n, r) {
    throw n = Object.prototype.toString.call(r), Error(v(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function eh(n) {
    var r = n._init;
    return r(n._payload);
  }
  function Tu(n) {
    function r(V, A) {
      if (n) {
        var I = V.deletions;
        I === null ? (V.deletions = [A], V.flags |= 16) : I.push(A);
      }
    }
    function l(V, A) {
      if (!n) return null;
      for (; A !== null; ) r(V, A), A = A.sibling;
      return null;
    }
    function o(V, A) {
      for (V = /* @__PURE__ */ new Map(); A !== null; ) A.key !== null ? V.set(A.key, A) : V.set(A.index, A), A = A.sibling;
      return V;
    }
    function c(V, A) {
      return V = Il(V, A), V.index = 0, V.sibling = null, V;
    }
    function p(V, A, I) {
      return V.index = I, n ? (I = V.alternate, I !== null ? (I = I.index, I < A ? (V.flags |= 2, A) : I) : (V.flags |= 2, A)) : (V.flags |= 1048576, A);
    }
    function E(V) {
      return n && V.alternate === null && (V.flags |= 2), V;
    }
    function x(V, A, I, oe) {
      return A === null || A.tag !== 6 ? (A = op(I, V.mode, oe), A.return = V, A) : (A = c(A, I), A.return = V, A);
    }
    function L(V, A, I, oe) {
      var Ae = I.type;
      return Ae === Se ? ue(V, A, I.props.children, oe, I.key) : A !== null && (A.elementType === Ae || typeof Ae == "object" && Ae !== null && Ae.$$typeof === kt && eh(Ae) === A.type) ? (oe = c(A, I.props), oe.ref = wu(V, A, I), oe.return = V, oe) : (oe = Xs(I.type, I.key, I.props, null, V.mode, oe), oe.ref = wu(V, A, I), oe.return = V, oe);
    }
    function G(V, A, I, oe) {
      return A === null || A.tag !== 4 || A.stateNode.containerInfo !== I.containerInfo || A.stateNode.implementation !== I.implementation ? (A = Cf(I, V.mode, oe), A.return = V, A) : (A = c(A, I.children || []), A.return = V, A);
    }
    function ue(V, A, I, oe, Ae) {
      return A === null || A.tag !== 7 ? (A = ll(I, V.mode, oe, Ae), A.return = V, A) : (A = c(A, I), A.return = V, A);
    }
    function ce(V, A, I) {
      if (typeof A == "string" && A !== "" || typeof A == "number") return A = op("" + A, V.mode, I), A.return = V, A;
      if (typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case me:
            return I = Xs(A.type, A.key, A.props, null, V.mode, I), I.ref = wu(V, null, A), I.return = V, I;
          case ye:
            return A = Cf(A, V.mode, I), A.return = V, A;
          case kt:
            var oe = A._init;
            return ce(V, oe(A._payload), I);
        }
        if (qn(A) || $e(A)) return A = ll(A, V.mode, I, null), A.return = V, A;
        Vc(V, A);
      }
      return null;
    }
    function ie(V, A, I, oe) {
      var Ae = A !== null ? A.key : null;
      if (typeof I == "string" && I !== "" || typeof I == "number") return Ae !== null ? null : x(V, A, "" + I, oe);
      if (typeof I == "object" && I !== null) {
        switch (I.$$typeof) {
          case me:
            return I.key === Ae ? L(V, A, I, oe) : null;
          case ye:
            return I.key === Ae ? G(V, A, I, oe) : null;
          case kt:
            return Ae = I._init, ie(
              V,
              A,
              Ae(I._payload),
              oe
            );
        }
        if (qn(I) || $e(I)) return Ae !== null ? null : ue(V, A, I, oe, null);
        Vc(V, I);
      }
      return null;
    }
    function De(V, A, I, oe, Ae) {
      if (typeof oe == "string" && oe !== "" || typeof oe == "number") return V = V.get(I) || null, x(A, V, "" + oe, Ae);
      if (typeof oe == "object" && oe !== null) {
        switch (oe.$$typeof) {
          case me:
            return V = V.get(oe.key === null ? I : oe.key) || null, L(A, V, oe, Ae);
          case ye:
            return V = V.get(oe.key === null ? I : oe.key) || null, G(A, V, oe, Ae);
          case kt:
            var Ke = oe._init;
            return De(V, A, I, Ke(oe._payload), Ae);
        }
        if (qn(oe) || $e(oe)) return V = V.get(I) || null, ue(A, V, oe, Ae, null);
        Vc(A, oe);
      }
      return null;
    }
    function Ue(V, A, I, oe) {
      for (var Ae = null, Ke = null, Je = A, at = A = 0, tr = null; Je !== null && at < I.length; at++) {
        Je.index > at ? (tr = Je, Je = null) : tr = Je.sibling;
        var Vt = ie(V, Je, I[at], oe);
        if (Vt === null) {
          Je === null && (Je = tr);
          break;
        }
        n && Je && Vt.alternate === null && r(V, Je), A = p(Vt, A, at), Ke === null ? Ae = Vt : Ke.sibling = Vt, Ke = Vt, Je = tr;
      }
      if (at === I.length) return l(V, Je), vn && Ru(V, at), Ae;
      if (Je === null) {
        for (; at < I.length; at++) Je = ce(V, I[at], oe), Je !== null && (A = p(Je, A, at), Ke === null ? Ae = Je : Ke.sibling = Je, Ke = Je);
        return vn && Ru(V, at), Ae;
      }
      for (Je = o(V, Je); at < I.length; at++) tr = De(Je, V, at, I[at], oe), tr !== null && (n && tr.alternate !== null && Je.delete(tr.key === null ? at : tr.key), A = p(tr, A, at), Ke === null ? Ae = tr : Ke.sibling = tr, Ke = tr);
      return n && Je.forEach(function(Ql) {
        return r(V, Ql);
      }), vn && Ru(V, at), Ae;
    }
    function Fe(V, A, I, oe) {
      var Ae = $e(I);
      if (typeof Ae != "function") throw Error(v(150));
      if (I = Ae.call(I), I == null) throw Error(v(151));
      for (var Ke = Ae = null, Je = A, at = A = 0, tr = null, Vt = I.next(); Je !== null && !Vt.done; at++, Vt = I.next()) {
        Je.index > at ? (tr = Je, Je = null) : tr = Je.sibling;
        var Ql = ie(V, Je, Vt.value, oe);
        if (Ql === null) {
          Je === null && (Je = tr);
          break;
        }
        n && Je && Ql.alternate === null && r(V, Je), A = p(Ql, A, at), Ke === null ? Ae = Ql : Ke.sibling = Ql, Ke = Ql, Je = tr;
      }
      if (Vt.done) return l(
        V,
        Je
      ), vn && Ru(V, at), Ae;
      if (Je === null) {
        for (; !Vt.done; at++, Vt = I.next()) Vt = ce(V, Vt.value, oe), Vt !== null && (A = p(Vt, A, at), Ke === null ? Ae = Vt : Ke.sibling = Vt, Ke = Vt);
        return vn && Ru(V, at), Ae;
      }
      for (Je = o(V, Je); !Vt.done; at++, Vt = I.next()) Vt = De(Je, V, at, Vt.value, oe), Vt !== null && (n && Vt.alternate !== null && Je.delete(Vt.key === null ? at : Vt.key), A = p(Vt, A, at), Ke === null ? Ae = Vt : Ke.sibling = Vt, Ke = Vt);
      return n && Je.forEach(function(zh) {
        return r(V, zh);
      }), vn && Ru(V, at), Ae;
    }
    function On(V, A, I, oe) {
      if (typeof I == "object" && I !== null && I.type === Se && I.key === null && (I = I.props.children), typeof I == "object" && I !== null) {
        switch (I.$$typeof) {
          case me:
            e: {
              for (var Ae = I.key, Ke = A; Ke !== null; ) {
                if (Ke.key === Ae) {
                  if (Ae = I.type, Ae === Se) {
                    if (Ke.tag === 7) {
                      l(V, Ke.sibling), A = c(Ke, I.props.children), A.return = V, V = A;
                      break e;
                    }
                  } else if (Ke.elementType === Ae || typeof Ae == "object" && Ae !== null && Ae.$$typeof === kt && eh(Ae) === Ke.type) {
                    l(V, Ke.sibling), A = c(Ke, I.props), A.ref = wu(V, Ke, I), A.return = V, V = A;
                    break e;
                  }
                  l(V, Ke);
                  break;
                } else r(V, Ke);
                Ke = Ke.sibling;
              }
              I.type === Se ? (A = ll(I.props.children, V.mode, oe, I.key), A.return = V, V = A) : (oe = Xs(I.type, I.key, I.props, null, V.mode, oe), oe.ref = wu(V, A, I), oe.return = V, V = oe);
            }
            return E(V);
          case ye:
            e: {
              for (Ke = I.key; A !== null; ) {
                if (A.key === Ke) if (A.tag === 4 && A.stateNode.containerInfo === I.containerInfo && A.stateNode.implementation === I.implementation) {
                  l(V, A.sibling), A = c(A, I.children || []), A.return = V, V = A;
                  break e;
                } else {
                  l(V, A);
                  break;
                }
                else r(V, A);
                A = A.sibling;
              }
              A = Cf(I, V.mode, oe), A.return = V, V = A;
            }
            return E(V);
          case kt:
            return Ke = I._init, On(V, A, Ke(I._payload), oe);
        }
        if (qn(I)) return Ue(V, A, I, oe);
        if ($e(I)) return Fe(V, A, I, oe);
        Vc(V, I);
      }
      return typeof I == "string" && I !== "" || typeof I == "number" ? (I = "" + I, A !== null && A.tag === 6 ? (l(V, A.sibling), A = c(A, I), A.return = V, V = A) : (l(V, A), A = op(I, V.mode, oe), A.return = V, V = A), E(V)) : l(V, A);
    }
    return On;
  }
  var _n = Tu(!0), Te = Tu(!1), va = ii(null), Zr = null, xo = null, Nd = null;
  function Md() {
    Nd = xo = Zr = null;
  }
  function Ud(n) {
    var r = va.current;
    on(va), n._currentValue = r;
  }
  function Ad(n, r, l) {
    for (; n !== null; ) {
      var o = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, o !== null && (o.childLanes |= r)) : o !== null && (o.childLanes & r) !== r && (o.childLanes |= r), n === l) break;
      n = n.return;
    }
  }
  function gn(n, r) {
    Zr = n, Nd = xo = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (Pn = !0), n.firstContext = null);
  }
  function Ua(n) {
    var r = n._currentValue;
    if (Nd !== n) if (n = { context: n, memoizedValue: r, next: null }, xo === null) {
      if (Zr === null) throw Error(v(308));
      xo = n, Zr.dependencies = { lanes: 0, firstContext: n };
    } else xo = xo.next = n;
    return r;
  }
  var xu = null;
  function zd(n) {
    xu === null ? xu = [n] : xu.push(n);
  }
  function Fd(n, r, l, o) {
    var c = r.interleaved;
    return c === null ? (l.next = l, zd(r)) : (l.next = c.next, c.next = l), r.interleaved = l, ha(n, o);
  }
  function ha(n, r) {
    n.lanes |= r;
    var l = n.alternate;
    for (l !== null && (l.lanes |= r), l = n, n = n.return; n !== null; ) n.childLanes |= r, l = n.alternate, l !== null && (l.childLanes |= r), l = n, n = n.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var ma = !1;
  function Pd(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function th(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function tl(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function Fl(n, r, l) {
    var o = n.updateQueue;
    if (o === null) return null;
    if (o = o.shared, Nt & 2) {
      var c = o.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), o.pending = r, ha(n, l);
    }
    return c = o.interleaved, c === null ? (r.next = r, zd(o)) : (r.next = c.next, c.next = r), o.interleaved = r, ha(n, l);
  }
  function Bc(n, r, l) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194240) !== 0)) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, Wi(n, l);
    }
  }
  function nh(n, r) {
    var l = n.updateQueue, o = n.alternate;
    if (o !== null && (o = o.updateQueue, l === o)) {
      var c = null, p = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var E = { eventTime: l.eventTime, lane: l.lane, tag: l.tag, payload: l.payload, callback: l.callback, next: null };
          p === null ? c = p = E : p = p.next = E, l = l.next;
        } while (l !== null);
        p === null ? c = p = r : p = p.next = r;
      } else c = p = r;
      l = { baseState: o.baseState, firstBaseUpdate: c, lastBaseUpdate: p, shared: o.shared, effects: o.effects }, n.updateQueue = l;
      return;
    }
    n = l.lastBaseUpdate, n === null ? l.firstBaseUpdate = r : n.next = r, l.lastBaseUpdate = r;
  }
  function Es(n, r, l, o) {
    var c = n.updateQueue;
    ma = !1;
    var p = c.firstBaseUpdate, E = c.lastBaseUpdate, x = c.shared.pending;
    if (x !== null) {
      c.shared.pending = null;
      var L = x, G = L.next;
      L.next = null, E === null ? p = G : E.next = G, E = L;
      var ue = n.alternate;
      ue !== null && (ue = ue.updateQueue, x = ue.lastBaseUpdate, x !== E && (x === null ? ue.firstBaseUpdate = G : x.next = G, ue.lastBaseUpdate = L));
    }
    if (p !== null) {
      var ce = c.baseState;
      E = 0, ue = G = L = null, x = p;
      do {
        var ie = x.lane, De = x.eventTime;
        if ((o & ie) === ie) {
          ue !== null && (ue = ue.next = {
            eventTime: De,
            lane: 0,
            tag: x.tag,
            payload: x.payload,
            callback: x.callback,
            next: null
          });
          e: {
            var Ue = n, Fe = x;
            switch (ie = r, De = l, Fe.tag) {
              case 1:
                if (Ue = Fe.payload, typeof Ue == "function") {
                  ce = Ue.call(De, ce, ie);
                  break e;
                }
                ce = Ue;
                break e;
              case 3:
                Ue.flags = Ue.flags & -65537 | 128;
              case 0:
                if (Ue = Fe.payload, ie = typeof Ue == "function" ? Ue.call(De, ce, ie) : Ue, ie == null) break e;
                ce = Re({}, ce, ie);
                break e;
              case 2:
                ma = !0;
            }
          }
          x.callback !== null && x.lane !== 0 && (n.flags |= 64, ie = c.effects, ie === null ? c.effects = [x] : ie.push(x));
        } else De = { eventTime: De, lane: ie, tag: x.tag, payload: x.payload, callback: x.callback, next: null }, ue === null ? (G = ue = De, L = ce) : ue = ue.next = De, E |= ie;
        if (x = x.next, x === null) {
          if (x = c.shared.pending, x === null) break;
          ie = x, x = ie.next, ie.next = null, c.lastBaseUpdate = ie, c.shared.pending = null;
        }
      } while (!0);
      if (ue === null && (L = ce), c.baseState = L, c.firstBaseUpdate = G, c.lastBaseUpdate = ue, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          E |= c.lane, c = c.next;
        while (c !== r);
      } else p === null && (c.shared.lanes = 0);
      Mi |= E, n.lanes = E, n.memoizedState = ce;
    }
  }
  function jd(n, r, l) {
    if (n = r.effects, r.effects = null, n !== null) for (r = 0; r < n.length; r++) {
      var o = n[r], c = o.callback;
      if (c !== null) {
        if (o.callback = null, o = l, typeof c != "function") throw Error(v(191, c));
        c.call(o);
      }
    }
  }
  var Cs = {}, ki = ii(Cs), Rs = ii(Cs), ws = ii(Cs);
  function _u(n) {
    if (n === Cs) throw Error(v(174));
    return n;
  }
  function Hd(n, r) {
    switch (Ie(ws, r), Ie(Rs, n), Ie(ki, Cs), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : ca(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = ca(r, n);
    }
    on(ki), Ie(ki, r);
  }
  function bu() {
    on(ki), on(Rs), on(ws);
  }
  function rh(n) {
    _u(ws.current);
    var r = _u(ki.current), l = ca(r, n.type);
    r !== l && (Ie(Rs, n), Ie(ki, l));
  }
  function $c(n) {
    Rs.current === n && (on(ki), on(Rs));
  }
  var Sn = ii(0);
  function Ic(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var l = r.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || l.data === "$?" || l.data === "$!")) return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if (r.flags & 128) return r;
      } else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === n) break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n) return null;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return null;
  }
  var Ts = [];
  function We() {
    for (var n = 0; n < Ts.length; n++) Ts[n]._workInProgressVersionPrimary = null;
    Ts.length = 0;
  }
  var xt = pe.ReactCurrentDispatcher, jt = pe.ReactCurrentBatchConfig, Zt = 0, Ht = null, Fn = null, Zn = null, Yc = !1, xs = !1, Du = 0, ae = 0;
  function Ft() {
    throw Error(v(321));
  }
  function tt(n, r) {
    if (r === null) return !1;
    for (var l = 0; l < r.length && l < n.length; l++) if (!ri(n[l], r[l])) return !1;
    return !0;
  }
  function Pl(n, r, l, o, c, p) {
    if (Zt = p, Ht = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, xt.current = n === null || n.memoizedState === null ? uf : Ls, n = l(o, c), xs) {
      p = 0;
      do {
        if (xs = !1, Du = 0, 25 <= p) throw Error(v(301));
        p += 1, Zn = Fn = null, r.updateQueue = null, xt.current = of, n = l(o, c);
      } while (xs);
    }
    if (xt.current = Mu, r = Fn !== null && Fn.next !== null, Zt = 0, Zn = Fn = Ht = null, Yc = !1, r) throw Error(v(300));
    return n;
  }
  function li() {
    var n = Du !== 0;
    return Du = 0, n;
  }
  function wr() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Zn === null ? Ht.memoizedState = Zn = n : Zn = Zn.next = n, Zn;
  }
  function bn() {
    if (Fn === null) {
      var n = Ht.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = Fn.next;
    var r = Zn === null ? Ht.memoizedState : Zn.next;
    if (r !== null) Zn = r, Fn = n;
    else {
      if (n === null) throw Error(v(310));
      Fn = n, n = { memoizedState: Fn.memoizedState, baseState: Fn.baseState, baseQueue: Fn.baseQueue, queue: Fn.queue, next: null }, Zn === null ? Ht.memoizedState = Zn = n : Zn = Zn.next = n;
    }
    return Zn;
  }
  function nl(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function jl(n) {
    var r = bn(), l = r.queue;
    if (l === null) throw Error(v(311));
    l.lastRenderedReducer = n;
    var o = Fn, c = o.baseQueue, p = l.pending;
    if (p !== null) {
      if (c !== null) {
        var E = c.next;
        c.next = p.next, p.next = E;
      }
      o.baseQueue = c = p, l.pending = null;
    }
    if (c !== null) {
      p = c.next, o = o.baseState;
      var x = E = null, L = null, G = p;
      do {
        var ue = G.lane;
        if ((Zt & ue) === ue) L !== null && (L = L.next = { lane: 0, action: G.action, hasEagerState: G.hasEagerState, eagerState: G.eagerState, next: null }), o = G.hasEagerState ? G.eagerState : n(o, G.action);
        else {
          var ce = {
            lane: ue,
            action: G.action,
            hasEagerState: G.hasEagerState,
            eagerState: G.eagerState,
            next: null
          };
          L === null ? (x = L = ce, E = o) : L = L.next = ce, Ht.lanes |= ue, Mi |= ue;
        }
        G = G.next;
      } while (G !== null && G !== p);
      L === null ? E = o : L.next = x, ri(o, r.memoizedState) || (Pn = !0), r.memoizedState = o, r.baseState = E, r.baseQueue = L, l.lastRenderedState = o;
    }
    if (n = l.interleaved, n !== null) {
      c = n;
      do
        p = c.lane, Ht.lanes |= p, Mi |= p, c = c.next;
      while (c !== n);
    } else c === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function ku(n) {
    var r = bn(), l = r.queue;
    if (l === null) throw Error(v(311));
    l.lastRenderedReducer = n;
    var o = l.dispatch, c = l.pending, p = r.memoizedState;
    if (c !== null) {
      l.pending = null;
      var E = c = c.next;
      do
        p = n(p, E.action), E = E.next;
      while (E !== c);
      ri(p, r.memoizedState) || (Pn = !0), r.memoizedState = p, r.baseQueue === null && (r.baseState = p), l.lastRenderedState = p;
    }
    return [p, o];
  }
  function Wc() {
  }
  function Qc(n, r) {
    var l = Ht, o = bn(), c = r(), p = !ri(o.memoizedState, c);
    if (p && (o.memoizedState = c, Pn = !0), o = o.queue, _s(Kc.bind(null, l, o, n), [n]), o.getSnapshot !== r || p || Zn !== null && Zn.memoizedState.tag & 1) {
      if (l.flags |= 2048, Ou(9, Xc.bind(null, l, o, c, r), void 0, null), Xn === null) throw Error(v(349));
      Zt & 30 || Gc(l, r, c);
    }
    return c;
  }
  function Gc(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = Ht.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Ht.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
  }
  function Xc(n, r, l, o) {
    r.value = l, r.getSnapshot = o, qc(r) && Jc(n);
  }
  function Kc(n, r, l) {
    return l(function() {
      qc(r) && Jc(n);
    });
  }
  function qc(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var l = r();
      return !ri(n, l);
    } catch {
      return !0;
    }
  }
  function Jc(n) {
    var r = ha(n, 1);
    r !== null && Ar(r, n, 1, -1);
  }
  function Zc(n) {
    var r = wr();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: nl, lastRenderedState: n }, r.queue = n, n = n.dispatch = Nu.bind(null, Ht, n), [r.memoizedState, n];
  }
  function Ou(n, r, l, o) {
    return n = { tag: n, create: r, destroy: l, deps: o, next: null }, r = Ht.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Ht.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (o = l.next, l.next = n, n.next = o, r.lastEffect = n)), n;
  }
  function ef() {
    return bn().memoizedState;
  }
  function _o(n, r, l, o) {
    var c = wr();
    Ht.flags |= n, c.memoizedState = Ou(1 | r, l, void 0, o === void 0 ? null : o);
  }
  function bo(n, r, l, o) {
    var c = bn();
    o = o === void 0 ? null : o;
    var p = void 0;
    if (Fn !== null) {
      var E = Fn.memoizedState;
      if (p = E.destroy, o !== null && tt(o, E.deps)) {
        c.memoizedState = Ou(r, l, p, o);
        return;
      }
    }
    Ht.flags |= n, c.memoizedState = Ou(1 | r, l, p, o);
  }
  function tf(n, r) {
    return _o(8390656, 8, n, r);
  }
  function _s(n, r) {
    return bo(2048, 8, n, r);
  }
  function nf(n, r) {
    return bo(4, 2, n, r);
  }
  function bs(n, r) {
    return bo(4, 4, n, r);
  }
  function Lu(n, r) {
    if (typeof r == "function") return n = n(), r(n), function() {
      r(null);
    };
    if (r != null) return n = n(), r.current = n, function() {
      r.current = null;
    };
  }
  function rf(n, r, l) {
    return l = l != null ? l.concat([n]) : null, bo(4, 4, Lu.bind(null, r, n), l);
  }
  function Ds() {
  }
  function af(n, r) {
    var l = bn();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && tt(r, o[1]) ? o[0] : (l.memoizedState = [n, r], n);
  }
  function lf(n, r) {
    var l = bn();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && tt(r, o[1]) ? o[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function Vd(n, r, l) {
    return Zt & 21 ? (ri(l, r) || (l = io(), Ht.lanes |= l, Mi |= l, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, Pn = !0), n.memoizedState = l);
  }
  function ks(n, r) {
    var l = Pt;
    Pt = l !== 0 && 4 > l ? l : 4, n(!0);
    var o = jt.transition;
    jt.transition = {};
    try {
      n(!1), r();
    } finally {
      Pt = l, jt.transition = o;
    }
  }
  function Bd() {
    return bn().memoizedState;
  }
  function Os(n, r, l) {
    var o = Ui(n);
    if (l = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null }, ya(n)) ah(r, l);
    else if (l = Fd(n, r, l, o), l !== null) {
      var c = Vn();
      Ar(l, n, o, c), nn(l, r, o);
    }
  }
  function Nu(n, r, l) {
    var o = Ui(n), c = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (ya(n)) ah(r, c);
    else {
      var p = n.alternate;
      if (n.lanes === 0 && (p === null || p.lanes === 0) && (p = r.lastRenderedReducer, p !== null)) try {
        var E = r.lastRenderedState, x = p(E, l);
        if (c.hasEagerState = !0, c.eagerState = x, ri(x, E)) {
          var L = r.interleaved;
          L === null ? (c.next = c, zd(r)) : (c.next = L.next, L.next = c), r.interleaved = c;
          return;
        }
      } catch {
      } finally {
      }
      l = Fd(n, r, c, o), l !== null && (c = Vn(), Ar(l, n, o, c), nn(l, r, o));
    }
  }
  function ya(n) {
    var r = n.alternate;
    return n === Ht || r !== null && r === Ht;
  }
  function ah(n, r) {
    xs = Yc = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function nn(n, r, l) {
    if (l & 4194240) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, Wi(n, l);
    }
  }
  var Mu = { readContext: Ua, useCallback: Ft, useContext: Ft, useEffect: Ft, useImperativeHandle: Ft, useInsertionEffect: Ft, useLayoutEffect: Ft, useMemo: Ft, useReducer: Ft, useRef: Ft, useState: Ft, useDebugValue: Ft, useDeferredValue: Ft, useTransition: Ft, useMutableSource: Ft, useSyncExternalStore: Ft, useId: Ft, unstable_isNewReconciler: !1 }, uf = { readContext: Ua, useCallback: function(n, r) {
    return wr().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: Ua, useEffect: tf, useImperativeHandle: function(n, r, l) {
    return l = l != null ? l.concat([n]) : null, _o(
      4194308,
      4,
      Lu.bind(null, r, n),
      l
    );
  }, useLayoutEffect: function(n, r) {
    return _o(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return _o(4, 2, n, r);
  }, useMemo: function(n, r) {
    var l = wr();
    return r = r === void 0 ? null : r, n = n(), l.memoizedState = [n, r], n;
  }, useReducer: function(n, r, l) {
    var o = wr();
    return r = l !== void 0 ? l(r) : r, o.memoizedState = o.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, o.queue = n, n = n.dispatch = Os.bind(null, Ht, n), [o.memoizedState, n];
  }, useRef: function(n) {
    var r = wr();
    return n = { current: n }, r.memoizedState = n;
  }, useState: Zc, useDebugValue: Ds, useDeferredValue: function(n) {
    return wr().memoizedState = n;
  }, useTransition: function() {
    var n = Zc(!1), r = n[0];
    return n = ks.bind(null, n[1]), wr().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var o = Ht, c = wr();
    if (vn) {
      if (l === void 0) throw Error(v(407));
      l = l();
    } else {
      if (l = r(), Xn === null) throw Error(v(349));
      Zt & 30 || Gc(o, r, l);
    }
    c.memoizedState = l;
    var p = { value: l, getSnapshot: r };
    return c.queue = p, tf(Kc.bind(
      null,
      o,
      p,
      n
    ), [n]), o.flags |= 2048, Ou(9, Xc.bind(null, o, p, l, r), void 0, null), l;
  }, useId: function() {
    var n = wr(), r = Xn.identifierPrefix;
    if (vn) {
      var l = Di, o = bi;
      l = (o & ~(1 << 32 - kr(o) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = Du++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else l = ae++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, Ls = {
    readContext: Ua,
    useCallback: af,
    useContext: Ua,
    useEffect: _s,
    useImperativeHandle: rf,
    useInsertionEffect: nf,
    useLayoutEffect: bs,
    useMemo: lf,
    useReducer: jl,
    useRef: ef,
    useState: function() {
      return jl(nl);
    },
    useDebugValue: Ds,
    useDeferredValue: function(n) {
      var r = bn();
      return Vd(r, Fn.memoizedState, n);
    },
    useTransition: function() {
      var n = jl(nl)[0], r = bn().memoizedState;
      return [n, r];
    },
    useMutableSource: Wc,
    useSyncExternalStore: Qc,
    useId: Bd,
    unstable_isNewReconciler: !1
  }, of = { readContext: Ua, useCallback: af, useContext: Ua, useEffect: _s, useImperativeHandle: rf, useInsertionEffect: nf, useLayoutEffect: bs, useMemo: lf, useReducer: ku, useRef: ef, useState: function() {
    return ku(nl);
  }, useDebugValue: Ds, useDeferredValue: function(n) {
    var r = bn();
    return Fn === null ? r.memoizedState = n : Vd(r, Fn.memoizedState, n);
  }, useTransition: function() {
    var n = ku(nl)[0], r = bn().memoizedState;
    return [n, r];
  }, useMutableSource: Wc, useSyncExternalStore: Qc, useId: Bd, unstable_isNewReconciler: !1 };
  function ui(n, r) {
    if (n && n.defaultProps) {
      r = Re({}, r), n = n.defaultProps;
      for (var l in n) r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  function $d(n, r, l, o) {
    r = n.memoizedState, l = l(o, r), l = l == null ? r : Re({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var sf = { isMounted: function(n) {
    return (n = n._reactInternals) ? ft(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var o = Vn(), c = Ui(n), p = tl(o, c);
    p.payload = r, l != null && (p.callback = l), r = Fl(n, p, c), r !== null && (Ar(r, n, c, o), Bc(r, n, c));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var o = Vn(), c = Ui(n), p = tl(o, c);
    p.tag = 1, p.payload = r, l != null && (p.callback = l), r = Fl(n, p, c), r !== null && (Ar(r, n, c, o), Bc(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = Vn(), o = Ui(n), c = tl(l, o);
    c.tag = 2, r != null && (c.callback = r), r = Fl(n, c, o), r !== null && (Ar(r, n, o, l), Bc(r, n, o));
  } };
  function ih(n, r, l, o, c, p, E) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(o, p, E) : r.prototype && r.prototype.isPureReactComponent ? !cs(l, o) || !cs(c, p) : !0;
  }
  function cf(n, r, l) {
    var o = !1, c = Gr, p = r.contextType;
    return typeof p == "object" && p !== null ? p = Ua(p) : (c = An(r) ? Xr : Cn.current, o = r.contextTypes, p = (o = o != null) ? La(n, c) : Gr), r = new r(l, p), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = sf, n.stateNode = r, r._reactInternals = n, o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = p), r;
  }
  function lh(n, r, l, o) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, o), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, o), r.state !== n && sf.enqueueReplaceState(r, r.state, null);
  }
  function Ns(n, r, l, o) {
    var c = n.stateNode;
    c.props = l, c.state = n.memoizedState, c.refs = {}, Pd(n);
    var p = r.contextType;
    typeof p == "object" && p !== null ? c.context = Ua(p) : (p = An(r) ? Xr : Cn.current, c.context = La(n, p)), c.state = n.memoizedState, p = r.getDerivedStateFromProps, typeof p == "function" && ($d(n, r, p, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && sf.enqueueReplaceState(c, c.state, null), Es(n, l, c, o), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function Uu(n, r) {
    try {
      var l = "", o = r;
      do
        l += Rt(o), o = o.return;
      while (o);
      var c = l;
    } catch (p) {
      c = `
Error generating stack: ` + p.message + `
` + p.stack;
    }
    return { value: n, source: r, stack: c, digest: null };
  }
  function Id(n, r, l) {
    return { value: n, source: null, stack: l ?? null, digest: r ?? null };
  }
  function Yd(n, r) {
    try {
      console.error(r.value);
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  var ff = typeof WeakMap == "function" ? WeakMap : Map;
  function uh(n, r, l) {
    l = tl(-1, l), l.tag = 3, l.payload = { element: null };
    var o = r.value;
    return l.callback = function() {
      Mo || (Mo = !0, Fu = o), Yd(n, r);
    }, l;
  }
  function Wd(n, r, l) {
    l = tl(-1, l), l.tag = 3;
    var o = n.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var c = r.value;
      l.payload = function() {
        return o(c);
      }, l.callback = function() {
        Yd(n, r);
      };
    }
    var p = n.stateNode;
    return p !== null && typeof p.componentDidCatch == "function" && (l.callback = function() {
      Yd(n, r), typeof o != "function" && (Bl === null ? Bl = /* @__PURE__ */ new Set([this]) : Bl.add(this));
      var E = r.stack;
      this.componentDidCatch(r.value, { componentStack: E !== null ? E : "" });
    }), l;
  }
  function Qd(n, r, l) {
    var o = n.pingCache;
    if (o === null) {
      o = n.pingCache = new ff();
      var c = /* @__PURE__ */ new Set();
      o.set(r, c);
    } else c = o.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), o.set(r, c));
    c.has(l) || (c.add(l), n = Jy.bind(null, n, r, l), r.then(n, n));
  }
  function oh(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r) return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function Hl(n, r, l, o, c) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = c, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = tl(-1, 1), r.tag = 2, Fl(l, r, 1))), l.lanes |= 1), n);
  }
  var Ms = pe.ReactCurrentOwner, Pn = !1;
  function or(n, r, l, o) {
    r.child = n === null ? Te(r, null, l, o) : _n(r, n.child, l, o);
  }
  function ea(n, r, l, o, c) {
    l = l.render;
    var p = r.ref;
    return gn(r, c), o = Pl(n, r, l, o, p, c), l = li(), n !== null && !Pn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, za(n, r, c)) : (vn && l && Pc(r), r.flags |= 1, or(n, r, o, c), r.child);
  }
  function Au(n, r, l, o, c) {
    if (n === null) {
      var p = l.type;
      return typeof p == "function" && !up(p) && p.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = p, pt(n, r, p, o, c)) : (n = Xs(l.type, null, o, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (p = n.child, !(n.lanes & c)) {
      var E = p.memoizedProps;
      if (l = l.compare, l = l !== null ? l : cs, l(E, o) && n.ref === r.ref) return za(n, r, c);
    }
    return r.flags |= 1, n = Il(p, o), n.ref = r.ref, n.return = r, r.child = n;
  }
  function pt(n, r, l, o, c) {
    if (n !== null) {
      var p = n.memoizedProps;
      if (cs(p, o) && n.ref === r.ref) if (Pn = !1, r.pendingProps = o = p, (n.lanes & c) !== 0) n.flags & 131072 && (Pn = !0);
      else return r.lanes = n.lanes, za(n, r, c);
    }
    return sh(n, r, l, o, c);
  }
  function Us(n, r, l) {
    var o = r.pendingProps, c = o.children, p = n !== null ? n.memoizedState : null;
    if (o.mode === "hidden") if (!(r.mode & 1)) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Ie(Oo, ga), ga |= l;
    else {
      if (!(l & 1073741824)) return n = p !== null ? p.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, Ie(Oo, ga), ga |= n, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, o = p !== null ? p.baseLanes : l, Ie(Oo, ga), ga |= o;
    }
    else p !== null ? (o = p.baseLanes | l, r.memoizedState = null) : o = l, Ie(Oo, ga), ga |= o;
    return or(n, r, c, l), r.child;
  }
  function Gd(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function sh(n, r, l, o, c) {
    var p = An(l) ? Xr : Cn.current;
    return p = La(r, p), gn(r, c), l = Pl(n, r, l, o, p, c), o = li(), n !== null && !Pn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, za(n, r, c)) : (vn && o && Pc(r), r.flags |= 1, or(n, r, l, c), r.child);
  }
  function ch(n, r, l, o, c) {
    if (An(l)) {
      var p = !0;
      Kr(r);
    } else p = !1;
    if (gn(r, c), r.stateNode === null) Aa(n, r), cf(r, l, o), Ns(r, l, o, c), o = !0;
    else if (n === null) {
      var E = r.stateNode, x = r.memoizedProps;
      E.props = x;
      var L = E.context, G = l.contextType;
      typeof G == "object" && G !== null ? G = Ua(G) : (G = An(l) ? Xr : Cn.current, G = La(r, G));
      var ue = l.getDerivedStateFromProps, ce = typeof ue == "function" || typeof E.getSnapshotBeforeUpdate == "function";
      ce || typeof E.UNSAFE_componentWillReceiveProps != "function" && typeof E.componentWillReceiveProps != "function" || (x !== o || L !== G) && lh(r, E, o, G), ma = !1;
      var ie = r.memoizedState;
      E.state = ie, Es(r, o, E, c), L = r.memoizedState, x !== o || ie !== L || Qn.current || ma ? (typeof ue == "function" && ($d(r, l, ue, o), L = r.memoizedState), (x = ma || ih(r, l, x, o, ie, L, G)) ? (ce || typeof E.UNSAFE_componentWillMount != "function" && typeof E.componentWillMount != "function" || (typeof E.componentWillMount == "function" && E.componentWillMount(), typeof E.UNSAFE_componentWillMount == "function" && E.UNSAFE_componentWillMount()), typeof E.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof E.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = o, r.memoizedState = L), E.props = o, E.state = L, E.context = G, o = x) : (typeof E.componentDidMount == "function" && (r.flags |= 4194308), o = !1);
    } else {
      E = r.stateNode, th(n, r), x = r.memoizedProps, G = r.type === r.elementType ? x : ui(r.type, x), E.props = G, ce = r.pendingProps, ie = E.context, L = l.contextType, typeof L == "object" && L !== null ? L = Ua(L) : (L = An(l) ? Xr : Cn.current, L = La(r, L));
      var De = l.getDerivedStateFromProps;
      (ue = typeof De == "function" || typeof E.getSnapshotBeforeUpdate == "function") || typeof E.UNSAFE_componentWillReceiveProps != "function" && typeof E.componentWillReceiveProps != "function" || (x !== ce || ie !== L) && lh(r, E, o, L), ma = !1, ie = r.memoizedState, E.state = ie, Es(r, o, E, c);
      var Ue = r.memoizedState;
      x !== ce || ie !== Ue || Qn.current || ma ? (typeof De == "function" && ($d(r, l, De, o), Ue = r.memoizedState), (G = ma || ih(r, l, G, o, ie, Ue, L) || !1) ? (ue || typeof E.UNSAFE_componentWillUpdate != "function" && typeof E.componentWillUpdate != "function" || (typeof E.componentWillUpdate == "function" && E.componentWillUpdate(o, Ue, L), typeof E.UNSAFE_componentWillUpdate == "function" && E.UNSAFE_componentWillUpdate(o, Ue, L)), typeof E.componentDidUpdate == "function" && (r.flags |= 4), typeof E.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof E.componentDidUpdate != "function" || x === n.memoizedProps && ie === n.memoizedState || (r.flags |= 4), typeof E.getSnapshotBeforeUpdate != "function" || x === n.memoizedProps && ie === n.memoizedState || (r.flags |= 1024), r.memoizedProps = o, r.memoizedState = Ue), E.props = o, E.state = Ue, E.context = L, o = G) : (typeof E.componentDidUpdate != "function" || x === n.memoizedProps && ie === n.memoizedState || (r.flags |= 4), typeof E.getSnapshotBeforeUpdate != "function" || x === n.memoizedProps && ie === n.memoizedState || (r.flags |= 1024), o = !1);
    }
    return As(n, r, l, o, p, c);
  }
  function As(n, r, l, o, c, p) {
    Gd(n, r);
    var E = (r.flags & 128) !== 0;
    if (!o && !E) return c && zc(r, l, !1), za(n, r, p);
    o = r.stateNode, Ms.current = r;
    var x = E && typeof l.getDerivedStateFromError != "function" ? null : o.render();
    return r.flags |= 1, n !== null && E ? (r.child = _n(r, n.child, null, p), r.child = _n(r, null, x, p)) : or(n, r, x, p), r.memoizedState = o.state, c && zc(r, l, !0), r.child;
  }
  function Do(n) {
    var r = n.stateNode;
    r.pendingContext ? qv(n, r.pendingContext, r.pendingContext !== r.context) : r.context && qv(n, r.context, !1), Hd(n, r.containerInfo);
  }
  function fh(n, r, l, o, c) {
    return zl(), el(c), r.flags |= 256, or(n, r, l, o), r.child;
  }
  var df = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Xd(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function pf(n, r, l) {
    var o = r.pendingProps, c = Sn.current, p = !1, E = (r.flags & 128) !== 0, x;
    if ((x = E) || (x = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), x ? (p = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), Ie(Sn, c & 1), n === null)
      return Ld(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (E = o.children, n = o.fallback, p ? (o = r.mode, p = r.child, E = { mode: "hidden", children: E }, !(o & 1) && p !== null ? (p.childLanes = 0, p.pendingProps = E) : p = Yl(E, o, 0, null), n = ll(n, o, l, null), p.return = r, n.return = r, p.sibling = n, r.child = p, r.child.memoizedState = Xd(l), r.memoizedState = df, n) : Kd(r, E));
    if (c = n.memoizedState, c !== null && (x = c.dehydrated, x !== null)) return dh(n, r, E, o, x, c, l);
    if (p) {
      p = o.fallback, E = r.mode, c = n.child, x = c.sibling;
      var L = { mode: "hidden", children: o.children };
      return !(E & 1) && r.child !== c ? (o = r.child, o.childLanes = 0, o.pendingProps = L, r.deletions = null) : (o = Il(c, L), o.subtreeFlags = c.subtreeFlags & 14680064), x !== null ? p = Il(x, p) : (p = ll(p, E, l, null), p.flags |= 2), p.return = r, o.return = r, o.sibling = p, r.child = o, o = p, p = r.child, E = n.child.memoizedState, E = E === null ? Xd(l) : { baseLanes: E.baseLanes | l, cachePool: null, transitions: E.transitions }, p.memoizedState = E, p.childLanes = n.childLanes & ~l, r.memoizedState = df, o;
    }
    return p = n.child, n = p.sibling, o = Il(p, { mode: "visible", children: o.children }), !(r.mode & 1) && (o.lanes = l), o.return = r, o.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = o, r.memoizedState = null, o;
  }
  function Kd(n, r) {
    return r = Yl({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function zs(n, r, l, o) {
    return o !== null && el(o), _n(r, n.child, null, l), n = Kd(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function dh(n, r, l, o, c, p, E) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, o = Id(Error(v(422))), zs(n, r, E, o)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (p = o.fallback, c = r.mode, o = Yl({ mode: "visible", children: o.children }, c, 0, null), p = ll(p, c, E, null), p.flags |= 2, o.return = r, p.return = r, o.sibling = p, r.child = o, r.mode & 1 && _n(r, n.child, null, E), r.child.memoizedState = Xd(E), r.memoizedState = df, p);
    if (!(r.mode & 1)) return zs(n, r, E, null);
    if (c.data === "$!") {
      if (o = c.nextSibling && c.nextSibling.dataset, o) var x = o.dgst;
      return o = x, p = Error(v(419)), o = Id(p, o, void 0), zs(n, r, E, o);
    }
    if (x = (E & n.childLanes) !== 0, Pn || x) {
      if (o = Xn, o !== null) {
        switch (E & -E) {
          case 4:
            c = 2;
            break;
          case 16:
            c = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            c = 32;
            break;
          case 536870912:
            c = 268435456;
            break;
          default:
            c = 0;
        }
        c = c & (o.suspendedLanes | E) ? 0 : c, c !== 0 && c !== p.retryLane && (p.retryLane = c, ha(n, c), Ar(o, n, c, -1));
      }
      return lp(), o = Id(Error(v(421))), zs(n, r, E, o);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = Zy.bind(null, n), c._reactRetry = r, null) : (n = p.treeContext, Jr = wi(c.nextSibling), qr = r, vn = !0, Ma = null, n !== null && (zn[Na++] = bi, zn[Na++] = Di, zn[Na++] = pa, bi = n.id, Di = n.overflow, pa = r), r = Kd(r, o.children), r.flags |= 4096, r);
  }
  function qd(n, r, l) {
    n.lanes |= r;
    var o = n.alternate;
    o !== null && (o.lanes |= r), Ad(n.return, r, l);
  }
  function Nr(n, r, l, o, c) {
    var p = n.memoizedState;
    p === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: o, tail: l, tailMode: c } : (p.isBackwards = r, p.rendering = null, p.renderingStartTime = 0, p.last = o, p.tail = l, p.tailMode = c);
  }
  function Oi(n, r, l) {
    var o = r.pendingProps, c = o.revealOrder, p = o.tail;
    if (or(n, r, o.children, l), o = Sn.current, o & 2) o = o & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128) e: for (n = r.child; n !== null; ) {
        if (n.tag === 13) n.memoizedState !== null && qd(n, l, r);
        else if (n.tag === 19) qd(n, l, r);
        else if (n.child !== null) {
          n.child.return = n, n = n.child;
          continue;
        }
        if (n === r) break e;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === r) break e;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
      o &= 1;
    }
    if (Ie(Sn, o), !(r.mode & 1)) r.memoizedState = null;
    else switch (c) {
      case "forwards":
        for (l = r.child, c = null; l !== null; ) n = l.alternate, n !== null && Ic(n) === null && (c = l), l = l.sibling;
        l = c, l === null ? (c = r.child, r.child = null) : (c = l.sibling, l.sibling = null), Nr(r, !1, c, l, p);
        break;
      case "backwards":
        for (l = null, c = r.child, r.child = null; c !== null; ) {
          if (n = c.alternate, n !== null && Ic(n) === null) {
            r.child = c;
            break;
          }
          n = c.sibling, c.sibling = l, l = c, c = n;
        }
        Nr(r, !0, l, null, p);
        break;
      case "together":
        Nr(r, !1, null, null, void 0);
        break;
      default:
        r.memoizedState = null;
    }
    return r.child;
  }
  function Aa(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function za(n, r, l) {
    if (n !== null && (r.dependencies = n.dependencies), Mi |= r.lanes, !(l & r.childLanes)) return null;
    if (n !== null && r.child !== n.child) throw Error(v(153));
    if (r.child !== null) {
      for (n = r.child, l = Il(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; ) n = n.sibling, l = l.sibling = Il(n, n.pendingProps), l.return = r;
      l.sibling = null;
    }
    return r.child;
  }
  function Fs(n, r, l) {
    switch (r.tag) {
      case 3:
        Do(r), zl();
        break;
      case 5:
        rh(r);
        break;
      case 1:
        An(r.type) && Kr(r);
        break;
      case 4:
        Hd(r, r.stateNode.containerInfo);
        break;
      case 10:
        var o = r.type._context, c = r.memoizedProps.value;
        Ie(va, o._currentValue), o._currentValue = c;
        break;
      case 13:
        if (o = r.memoizedState, o !== null)
          return o.dehydrated !== null ? (Ie(Sn, Sn.current & 1), r.flags |= 128, null) : l & r.child.childLanes ? pf(n, r, l) : (Ie(Sn, Sn.current & 1), n = za(n, r, l), n !== null ? n.sibling : null);
        Ie(Sn, Sn.current & 1);
        break;
      case 19:
        if (o = (l & r.childLanes) !== 0, n.flags & 128) {
          if (o) return Oi(n, r, l);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), Ie(Sn, Sn.current), o) break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, Us(n, r, l);
    }
    return za(n, r, l);
  }
  var Fa, jn, ph, vh;
  Fa = function(n, r) {
    for (var l = r.child; l !== null; ) {
      if (l.tag === 5 || l.tag === 6) n.appendChild(l.stateNode);
      else if (l.tag !== 4 && l.child !== null) {
        l.child.return = l, l = l.child;
        continue;
      }
      if (l === r) break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === r) return;
        l = l.return;
      }
      l.sibling.return = l.return, l = l.sibling;
    }
  }, jn = function() {
  }, ph = function(n, r, l, o) {
    var c = n.memoizedProps;
    if (c !== o) {
      n = r.stateNode, _u(ki.current);
      var p = null;
      switch (l) {
        case "input":
          c = rr(n, c), o = rr(n, o), p = [];
          break;
        case "select":
          c = Re({}, c, { value: void 0 }), o = Re({}, o, { value: void 0 }), p = [];
          break;
        case "textarea":
          c = Yn(n, c), o = Yn(n, o), p = [];
          break;
        default:
          typeof c.onClick != "function" && typeof o.onClick == "function" && (n.onclick = Ol);
      }
      cn(l, o);
      var E;
      l = null;
      for (G in c) if (!o.hasOwnProperty(G) && c.hasOwnProperty(G) && c[G] != null) if (G === "style") {
        var x = c[G];
        for (E in x) x.hasOwnProperty(E) && (l || (l = {}), l[E] = "");
      } else G !== "dangerouslySetInnerHTML" && G !== "children" && G !== "suppressContentEditableWarning" && G !== "suppressHydrationWarning" && G !== "autoFocus" && (w.hasOwnProperty(G) ? p || (p = []) : (p = p || []).push(G, null));
      for (G in o) {
        var L = o[G];
        if (x = c?.[G], o.hasOwnProperty(G) && L !== x && (L != null || x != null)) if (G === "style") if (x) {
          for (E in x) !x.hasOwnProperty(E) || L && L.hasOwnProperty(E) || (l || (l = {}), l[E] = "");
          for (E in L) L.hasOwnProperty(E) && x[E] !== L[E] && (l || (l = {}), l[E] = L[E]);
        } else l || (p || (p = []), p.push(
          G,
          l
        )), l = L;
        else G === "dangerouslySetInnerHTML" ? (L = L ? L.__html : void 0, x = x ? x.__html : void 0, L != null && x !== L && (p = p || []).push(G, L)) : G === "children" ? typeof L != "string" && typeof L != "number" || (p = p || []).push(G, "" + L) : G !== "suppressContentEditableWarning" && G !== "suppressHydrationWarning" && (w.hasOwnProperty(G) ? (L != null && G === "onScroll" && Yt("scroll", n), p || x === L || (p = [])) : (p = p || []).push(G, L));
      }
      l && (p = p || []).push("style", l);
      var G = p;
      (r.updateQueue = G) && (r.flags |= 4);
    }
  }, vh = function(n, r, l, o) {
    l !== o && (r.flags |= 4);
  };
  function Ps(n, r) {
    if (!vn) switch (n.tailMode) {
      case "hidden":
        r = n.tail;
        for (var l = null; r !== null; ) r.alternate !== null && (l = r), r = r.sibling;
        l === null ? n.tail = null : l.sibling = null;
        break;
      case "collapsed":
        l = n.tail;
        for (var o = null; l !== null; ) l.alternate !== null && (o = l), l = l.sibling;
        o === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : o.sibling = null;
    }
  }
  function er(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, l = 0, o = 0;
    if (r) for (var c = n.child; c !== null; ) l |= c.lanes | c.childLanes, o |= c.subtreeFlags & 14680064, o |= c.flags & 14680064, c.return = n, c = c.sibling;
    else for (c = n.child; c !== null; ) l |= c.lanes | c.childLanes, o |= c.subtreeFlags, o |= c.flags, c.return = n, c = c.sibling;
    return n.subtreeFlags |= o, n.childLanes = l, r;
  }
  function hh(n, r, l) {
    var o = r.pendingProps;
    switch (jc(r), r.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return er(r), null;
      case 1:
        return An(r.type) && wo(), er(r), null;
      case 3:
        return o = r.stateNode, bu(), on(Qn), on(Cn), We(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (n === null || n.child === null) && (Hc(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, Ma !== null && (Pu(Ma), Ma = null))), jn(n, r), er(r), null;
      case 5:
        $c(r);
        var c = _u(ws.current);
        if (l = r.type, n !== null && r.stateNode != null) ph(n, r, l, o, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!o) {
            if (r.stateNode === null) throw Error(v(166));
            return er(r), null;
          }
          if (n = _u(ki.current), Hc(r)) {
            o = r.stateNode, l = r.type;
            var p = r.memoizedProps;
            switch (o[Ti] = r, o[ms] = p, n = (r.mode & 1) !== 0, l) {
              case "dialog":
                Yt("cancel", o), Yt("close", o);
                break;
              case "iframe":
              case "object":
              case "embed":
                Yt("load", o);
                break;
              case "video":
              case "audio":
                for (c = 0; c < ps.length; c++) Yt(ps[c], o);
                break;
              case "source":
                Yt("error", o);
                break;
              case "img":
              case "image":
              case "link":
                Yt(
                  "error",
                  o
                ), Yt("load", o);
                break;
              case "details":
                Yt("toggle", o);
                break;
              case "input":
                $n(o, p), Yt("invalid", o);
                break;
              case "select":
                o._wrapperState = { wasMultiple: !!p.multiple }, Yt("invalid", o);
                break;
              case "textarea":
                Er(o, p), Yt("invalid", o);
            }
            cn(l, p), c = null;
            for (var E in p) if (p.hasOwnProperty(E)) {
              var x = p[E];
              E === "children" ? typeof x == "string" ? o.textContent !== x && (p.suppressHydrationWarning !== !0 && Nc(o.textContent, x, n), c = ["children", x]) : typeof x == "number" && o.textContent !== "" + x && (p.suppressHydrationWarning !== !0 && Nc(
                o.textContent,
                x,
                n
              ), c = ["children", "" + x]) : w.hasOwnProperty(E) && x != null && E === "onScroll" && Yt("scroll", o);
            }
            switch (l) {
              case "input":
                Nn(o), pi(o, p, !0);
                break;
              case "textarea":
                Nn(o), Mn(o);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof p.onClick == "function" && (o.onclick = Ol);
            }
            o = c, r.updateQueue = o, o !== null && (r.flags |= 4);
          } else {
            E = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = Cr(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = E.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof o.is == "string" ? n = E.createElement(l, { is: o.is }) : (n = E.createElement(l), l === "select" && (E = n, o.multiple ? E.multiple = !0 : o.size && (E.size = o.size))) : n = E.createElementNS(n, l), n[Ti] = r, n[ms] = o, Fa(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (E = Jn(l, o), l) {
                case "dialog":
                  Yt("cancel", n), Yt("close", n), c = o;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Yt("load", n), c = o;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < ps.length; c++) Yt(ps[c], n);
                  c = o;
                  break;
                case "source":
                  Yt("error", n), c = o;
                  break;
                case "img":
                case "image":
                case "link":
                  Yt(
                    "error",
                    n
                  ), Yt("load", n), c = o;
                  break;
                case "details":
                  Yt("toggle", n), c = o;
                  break;
                case "input":
                  $n(n, o), c = rr(n, o), Yt("invalid", n);
                  break;
                case "option":
                  c = o;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!o.multiple }, c = Re({}, o, { value: void 0 }), Yt("invalid", n);
                  break;
                case "textarea":
                  Er(n, o), c = Yn(n, o), Yt("invalid", n);
                  break;
                default:
                  c = o;
              }
              cn(l, c), x = c;
              for (p in x) if (x.hasOwnProperty(p)) {
                var L = x[p];
                p === "style" ? rn(n, L) : p === "dangerouslySetInnerHTML" ? (L = L ? L.__html : void 0, L != null && vi(n, L)) : p === "children" ? typeof L == "string" ? (l !== "textarea" || L !== "") && ge(n, L) : typeof L == "number" && ge(n, "" + L) : p !== "suppressContentEditableWarning" && p !== "suppressHydrationWarning" && p !== "autoFocus" && (w.hasOwnProperty(p) ? L != null && p === "onScroll" && Yt("scroll", n) : L != null && le(n, p, L, E));
              }
              switch (l) {
                case "input":
                  Nn(n), pi(n, o, !1);
                  break;
                case "textarea":
                  Nn(n), Mn(n);
                  break;
                case "option":
                  o.value != null && n.setAttribute("value", "" + gt(o.value));
                  break;
                case "select":
                  n.multiple = !!o.multiple, p = o.value, p != null ? wn(n, !!o.multiple, p, !1) : o.defaultValue != null && wn(
                    n,
                    !!o.multiple,
                    o.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof c.onClick == "function" && (n.onclick = Ol);
              }
              switch (l) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  o = !!o.autoFocus;
                  break e;
                case "img":
                  o = !0;
                  break e;
                default:
                  o = !1;
              }
            }
            o && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return er(r), null;
      case 6:
        if (n && r.stateNode != null) vh(n, r, n.memoizedProps, o);
        else {
          if (typeof o != "string" && r.stateNode === null) throw Error(v(166));
          if (l = _u(ws.current), _u(ki.current), Hc(r)) {
            if (o = r.stateNode, l = r.memoizedProps, o[Ti] = r, (p = o.nodeValue !== l) && (n = qr, n !== null)) switch (n.tag) {
              case 3:
                Nc(o.nodeValue, l, (n.mode & 1) !== 0);
                break;
              case 5:
                n.memoizedProps.suppressHydrationWarning !== !0 && Nc(o.nodeValue, l, (n.mode & 1) !== 0);
            }
            p && (r.flags |= 4);
          } else o = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(o), o[Ti] = r, r.stateNode = o;
        }
        return er(r), null;
      case 13:
        if (on(Sn), o = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (vn && Jr !== null && r.mode & 1 && !(r.flags & 128)) Ss(), zl(), r.flags |= 98560, p = !1;
          else if (p = Hc(r), o !== null && o.dehydrated !== null) {
            if (n === null) {
              if (!p) throw Error(v(318));
              if (p = r.memoizedState, p = p !== null ? p.dehydrated : null, !p) throw Error(v(317));
              p[Ti] = r;
            } else zl(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            er(r), p = !1;
          } else Ma !== null && (Pu(Ma), Ma = null), p = !0;
          if (!p) return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = l, r) : (o = o !== null, o !== (n !== null && n.memoizedState !== null) && o && (r.child.flags |= 8192, r.mode & 1 && (n === null || Sn.current & 1 ? kn === 0 && (kn = 3) : lp())), r.updateQueue !== null && (r.flags |= 4), er(r), null);
      case 4:
        return bu(), jn(n, r), n === null && go(r.stateNode.containerInfo), er(r), null;
      case 10:
        return Ud(r.type._context), er(r), null;
      case 17:
        return An(r.type) && wo(), er(r), null;
      case 19:
        if (on(Sn), p = r.memoizedState, p === null) return er(r), null;
        if (o = (r.flags & 128) !== 0, E = p.rendering, E === null) if (o) Ps(p, !1);
        else {
          if (kn !== 0 || n !== null && n.flags & 128) for (n = r.child; n !== null; ) {
            if (E = Ic(n), E !== null) {
              for (r.flags |= 128, Ps(p, !1), o = E.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), r.subtreeFlags = 0, o = l, l = r.child; l !== null; ) p = l, n = o, p.flags &= 14680066, E = p.alternate, E === null ? (p.childLanes = 0, p.lanes = n, p.child = null, p.subtreeFlags = 0, p.memoizedProps = null, p.memoizedState = null, p.updateQueue = null, p.dependencies = null, p.stateNode = null) : (p.childLanes = E.childLanes, p.lanes = E.lanes, p.child = E.child, p.subtreeFlags = 0, p.deletions = null, p.memoizedProps = E.memoizedProps, p.memoizedState = E.memoizedState, p.updateQueue = E.updateQueue, p.type = E.type, n = E.dependencies, p.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
              return Ie(Sn, Sn.current & 1 | 2), r.child;
            }
            n = n.sibling;
          }
          p.tail !== null && dt() > No && (r.flags |= 128, o = !0, Ps(p, !1), r.lanes = 4194304);
        }
        else {
          if (!o) if (n = Ic(E), n !== null) {
            if (r.flags |= 128, o = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), Ps(p, !0), p.tail === null && p.tailMode === "hidden" && !E.alternate && !vn) return er(r), null;
          } else 2 * dt() - p.renderingStartTime > No && l !== 1073741824 && (r.flags |= 128, o = !0, Ps(p, !1), r.lanes = 4194304);
          p.isBackwards ? (E.sibling = r.child, r.child = E) : (l = p.last, l !== null ? l.sibling = E : r.child = E, p.last = E);
        }
        return p.tail !== null ? (r = p.tail, p.rendering = r, p.tail = r.sibling, p.renderingStartTime = dt(), r.sibling = null, l = Sn.current, Ie(Sn, o ? l & 1 | 2 : l & 1), r) : (er(r), null);
      case 22:
      case 23:
        return ip(), o = r.memoizedState !== null, n !== null && n.memoizedState !== null !== o && (r.flags |= 8192), o && r.mode & 1 ? ga & 1073741824 && (er(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : er(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(v(156, r.tag));
  }
  function vf(n, r) {
    switch (jc(r), r.tag) {
      case 1:
        return An(r.type) && wo(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return bu(), on(Qn), on(Cn), We(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return $c(r), null;
      case 13:
        if (on(Sn), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null) throw Error(v(340));
          zl();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return on(Sn), null;
      case 4:
        return bu(), null;
      case 10:
        return Ud(r.type._context), null;
      case 22:
      case 23:
        return ip(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var js = !1, Tr = !1, Wy = typeof WeakSet == "function" ? WeakSet : Set, Ne = null;
  function ko(n, r) {
    var l = n.ref;
    if (l !== null) if (typeof l == "function") try {
      l(null);
    } catch (o) {
      hn(n, r, o);
    }
    else l.current = null;
  }
  function hf(n, r, l) {
    try {
      l();
    } catch (o) {
      hn(n, r, o);
    }
  }
  var mh = !1;
  function yh(n, r) {
    if (hs = Da, n = fs(), Tc(n)) {
      if ("selectionStart" in n) var l = { start: n.selectionStart, end: n.selectionEnd };
      else e: {
        l = (l = n.ownerDocument) && l.defaultView || window;
        var o = l.getSelection && l.getSelection();
        if (o && o.rangeCount !== 0) {
          l = o.anchorNode;
          var c = o.anchorOffset, p = o.focusNode;
          o = o.focusOffset;
          try {
            l.nodeType, p.nodeType;
          } catch {
            l = null;
            break e;
          }
          var E = 0, x = -1, L = -1, G = 0, ue = 0, ce = n, ie = null;
          t: for (; ; ) {
            for (var De; ce !== l || c !== 0 && ce.nodeType !== 3 || (x = E + c), ce !== p || o !== 0 && ce.nodeType !== 3 || (L = E + o), ce.nodeType === 3 && (E += ce.nodeValue.length), (De = ce.firstChild) !== null; )
              ie = ce, ce = De;
            for (; ; ) {
              if (ce === n) break t;
              if (ie === l && ++G === c && (x = E), ie === p && ++ue === o && (L = E), (De = ce.nextSibling) !== null) break;
              ce = ie, ie = ce.parentNode;
            }
            ce = De;
          }
          l = x === -1 || L === -1 ? null : { start: x, end: L };
        } else l = null;
      }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (Eu = { focusedElem: n, selectionRange: l }, Da = !1, Ne = r; Ne !== null; ) if (r = Ne, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null) n.return = r, Ne = n;
    else for (; Ne !== null; ) {
      r = Ne;
      try {
        var Ue = r.alternate;
        if (r.flags & 1024) switch (r.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (Ue !== null) {
              var Fe = Ue.memoizedProps, On = Ue.memoizedState, V = r.stateNode, A = V.getSnapshotBeforeUpdate(r.elementType === r.type ? Fe : ui(r.type, Fe), On);
              V.__reactInternalSnapshotBeforeUpdate = A;
            }
            break;
          case 3:
            var I = r.stateNode.containerInfo;
            I.nodeType === 1 ? I.textContent = "" : I.nodeType === 9 && I.documentElement && I.removeChild(I.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(v(163));
        }
      } catch (oe) {
        hn(r, r.return, oe);
      }
      if (n = r.sibling, n !== null) {
        n.return = r.return, Ne = n;
        break;
      }
      Ne = r.return;
    }
    return Ue = mh, mh = !1, Ue;
  }
  function Hs(n, r, l) {
    var o = r.updateQueue;
    if (o = o !== null ? o.lastEffect : null, o !== null) {
      var c = o = o.next;
      do {
        if ((c.tag & n) === n) {
          var p = c.destroy;
          c.destroy = void 0, p !== void 0 && hf(r, l, p);
        }
        c = c.next;
      } while (c !== o);
    }
  }
  function Vs(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & n) === n) {
          var o = l.create;
          l.destroy = o();
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function Jd(n) {
    var r = n.ref;
    if (r !== null) {
      var l = n.stateNode;
      switch (n.tag) {
        case 5:
          n = l;
          break;
        default:
          n = l;
      }
      typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function mf(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, mf(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[Ti], delete r[ms], delete r[ys], delete r[Ro], delete r[Iy])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function Bs(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function rl(n) {
    e: for (; ; ) {
      for (; n.sibling === null; ) {
        if (n.return === null || Bs(n.return)) return null;
        n = n.return;
      }
      for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
        if (n.flags & 2 || n.child === null || n.tag === 4) continue e;
        n.child.return = n, n = n.child;
      }
      if (!(n.flags & 2)) return n.stateNode;
    }
  }
  function Li(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6) n = n.stateNode, r ? l.nodeType === 8 ? l.parentNode.insertBefore(n, r) : l.insertBefore(n, r) : (l.nodeType === 8 ? (r = l.parentNode, r.insertBefore(n, l)) : (r = l, r.appendChild(n)), l = l._reactRootContainer, l != null || r.onclick !== null || (r.onclick = Ol));
    else if (o !== 4 && (n = n.child, n !== null)) for (Li(n, r, l), n = n.sibling; n !== null; ) Li(n, r, l), n = n.sibling;
  }
  function Ni(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6) n = n.stateNode, r ? l.insertBefore(n, r) : l.appendChild(n);
    else if (o !== 4 && (n = n.child, n !== null)) for (Ni(n, r, l), n = n.sibling; n !== null; ) Ni(n, r, l), n = n.sibling;
  }
  var Dn = null, Mr = !1;
  function Ur(n, r, l) {
    for (l = l.child; l !== null; ) gh(n, r, l), l = l.sibling;
  }
  function gh(n, r, l) {
    if (Wr && typeof Wr.onCommitFiberUnmount == "function") try {
      Wr.onCommitFiberUnmount(Cl, l);
    } catch {
    }
    switch (l.tag) {
      case 5:
        Tr || ko(l, r);
      case 6:
        var o = Dn, c = Mr;
        Dn = null, Ur(n, r, l), Dn = o, Mr = c, Dn !== null && (Mr ? (n = Dn, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : Dn.removeChild(l.stateNode));
        break;
      case 18:
        Dn !== null && (Mr ? (n = Dn, l = l.stateNode, n.nodeType === 8 ? Co(n.parentNode, l) : n.nodeType === 1 && Co(n, l), ti(n)) : Co(Dn, l.stateNode));
        break;
      case 4:
        o = Dn, c = Mr, Dn = l.stateNode.containerInfo, Mr = !0, Ur(n, r, l), Dn = o, Mr = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Tr && (o = l.updateQueue, o !== null && (o = o.lastEffect, o !== null))) {
          c = o = o.next;
          do {
            var p = c, E = p.destroy;
            p = p.tag, E !== void 0 && (p & 2 || p & 4) && hf(l, r, E), c = c.next;
          } while (c !== o);
        }
        Ur(n, r, l);
        break;
      case 1:
        if (!Tr && (ko(l, r), o = l.stateNode, typeof o.componentWillUnmount == "function")) try {
          o.props = l.memoizedProps, o.state = l.memoizedState, o.componentWillUnmount();
        } catch (x) {
          hn(l, r, x);
        }
        Ur(n, r, l);
        break;
      case 21:
        Ur(n, r, l);
        break;
      case 22:
        l.mode & 1 ? (Tr = (o = Tr) || l.memoizedState !== null, Ur(n, r, l), Tr = o) : Ur(n, r, l);
        break;
      default:
        Ur(n, r, l);
    }
  }
  function Sh(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var l = n.stateNode;
      l === null && (l = n.stateNode = new Wy()), r.forEach(function(o) {
        var c = Dh.bind(null, n, o);
        l.has(o) || (l.add(o), o.then(c, c));
      });
    }
  }
  function oi(n, r) {
    var l = r.deletions;
    if (l !== null) for (var o = 0; o < l.length; o++) {
      var c = l[o];
      try {
        var p = n, E = r, x = E;
        e: for (; x !== null; ) {
          switch (x.tag) {
            case 5:
              Dn = x.stateNode, Mr = !1;
              break e;
            case 3:
              Dn = x.stateNode.containerInfo, Mr = !0;
              break e;
            case 4:
              Dn = x.stateNode.containerInfo, Mr = !0;
              break e;
          }
          x = x.return;
        }
        if (Dn === null) throw Error(v(160));
        gh(p, E, c), Dn = null, Mr = !1;
        var L = c.alternate;
        L !== null && (L.return = null), c.return = null;
      } catch (G) {
        hn(c, r, G);
      }
    }
    if (r.subtreeFlags & 12854) for (r = r.child; r !== null; ) Zd(r, n), r = r.sibling;
  }
  function Zd(n, r) {
    var l = n.alternate, o = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (oi(r, n), ta(n), o & 4) {
          try {
            Hs(3, n, n.return), Vs(3, n);
          } catch (Fe) {
            hn(n, n.return, Fe);
          }
          try {
            Hs(5, n, n.return);
          } catch (Fe) {
            hn(n, n.return, Fe);
          }
        }
        break;
      case 1:
        oi(r, n), ta(n), o & 512 && l !== null && ko(l, l.return);
        break;
      case 5:
        if (oi(r, n), ta(n), o & 512 && l !== null && ko(l, l.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            ge(c, "");
          } catch (Fe) {
            hn(n, n.return, Fe);
          }
        }
        if (o & 4 && (c = n.stateNode, c != null)) {
          var p = n.memoizedProps, E = l !== null ? l.memoizedProps : p, x = n.type, L = n.updateQueue;
          if (n.updateQueue = null, L !== null) try {
            x === "input" && p.type === "radio" && p.name != null && In(c, p), Jn(x, E);
            var G = Jn(x, p);
            for (E = 0; E < L.length; E += 2) {
              var ue = L[E], ce = L[E + 1];
              ue === "style" ? rn(c, ce) : ue === "dangerouslySetInnerHTML" ? vi(c, ce) : ue === "children" ? ge(c, ce) : le(c, ue, ce, G);
            }
            switch (x) {
              case "input":
                Yr(c, p);
                break;
              case "textarea":
                Qa(c, p);
                break;
              case "select":
                var ie = c._wrapperState.wasMultiple;
                c._wrapperState.wasMultiple = !!p.multiple;
                var De = p.value;
                De != null ? wn(c, !!p.multiple, De, !1) : ie !== !!p.multiple && (p.defaultValue != null ? wn(
                  c,
                  !!p.multiple,
                  p.defaultValue,
                  !0
                ) : wn(c, !!p.multiple, p.multiple ? [] : "", !1));
            }
            c[ms] = p;
          } catch (Fe) {
            hn(n, n.return, Fe);
          }
        }
        break;
      case 6:
        if (oi(r, n), ta(n), o & 4) {
          if (n.stateNode === null) throw Error(v(162));
          c = n.stateNode, p = n.memoizedProps;
          try {
            c.nodeValue = p;
          } catch (Fe) {
            hn(n, n.return, Fe);
          }
        }
        break;
      case 3:
        if (oi(r, n), ta(n), o & 4 && l !== null && l.memoizedState.isDehydrated) try {
          ti(r.containerInfo);
        } catch (Fe) {
          hn(n, n.return, Fe);
        }
        break;
      case 4:
        oi(r, n), ta(n);
        break;
      case 13:
        oi(r, n), ta(n), c = n.child, c.flags & 8192 && (p = c.memoizedState !== null, c.stateNode.isHidden = p, !p || c.alternate !== null && c.alternate.memoizedState !== null || (np = dt())), o & 4 && Sh(n);
        break;
      case 22:
        if (ue = l !== null && l.memoizedState !== null, n.mode & 1 ? (Tr = (G = Tr) || ue, oi(r, n), Tr = G) : oi(r, n), ta(n), o & 8192) {
          if (G = n.memoizedState !== null, (n.stateNode.isHidden = G) && !ue && n.mode & 1) for (Ne = n, ue = n.child; ue !== null; ) {
            for (ce = Ne = ue; Ne !== null; ) {
              switch (ie = Ne, De = ie.child, ie.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Hs(4, ie, ie.return);
                  break;
                case 1:
                  ko(ie, ie.return);
                  var Ue = ie.stateNode;
                  if (typeof Ue.componentWillUnmount == "function") {
                    o = ie, l = ie.return;
                    try {
                      r = o, Ue.props = r.memoizedProps, Ue.state = r.memoizedState, Ue.componentWillUnmount();
                    } catch (Fe) {
                      hn(o, l, Fe);
                    }
                  }
                  break;
                case 5:
                  ko(ie, ie.return);
                  break;
                case 22:
                  if (ie.memoizedState !== null) {
                    $s(ce);
                    continue;
                  }
              }
              De !== null ? (De.return = ie, Ne = De) : $s(ce);
            }
            ue = ue.sibling;
          }
          e: for (ue = null, ce = n; ; ) {
            if (ce.tag === 5) {
              if (ue === null) {
                ue = ce;
                try {
                  c = ce.stateNode, G ? (p = c.style, typeof p.setProperty == "function" ? p.setProperty("display", "none", "important") : p.display = "none") : (x = ce.stateNode, L = ce.memoizedProps.style, E = L != null && L.hasOwnProperty("display") ? L.display : null, x.style.display = It("display", E));
                } catch (Fe) {
                  hn(n, n.return, Fe);
                }
              }
            } else if (ce.tag === 6) {
              if (ue === null) try {
                ce.stateNode.nodeValue = G ? "" : ce.memoizedProps;
              } catch (Fe) {
                hn(n, n.return, Fe);
              }
            } else if ((ce.tag !== 22 && ce.tag !== 23 || ce.memoizedState === null || ce === n) && ce.child !== null) {
              ce.child.return = ce, ce = ce.child;
              continue;
            }
            if (ce === n) break e;
            for (; ce.sibling === null; ) {
              if (ce.return === null || ce.return === n) break e;
              ue === ce && (ue = null), ce = ce.return;
            }
            ue === ce && (ue = null), ce.sibling.return = ce.return, ce = ce.sibling;
          }
        }
        break;
      case 19:
        oi(r, n), ta(n), o & 4 && Sh(n);
        break;
      case 21:
        break;
      default:
        oi(
          r,
          n
        ), ta(n);
    }
  }
  function ta(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var l = n.return; l !== null; ) {
            if (Bs(l)) {
              var o = l;
              break e;
            }
            l = l.return;
          }
          throw Error(v(160));
        }
        switch (o.tag) {
          case 5:
            var c = o.stateNode;
            o.flags & 32 && (ge(c, ""), o.flags &= -33);
            var p = rl(n);
            Ni(n, p, c);
            break;
          case 3:
          case 4:
            var E = o.stateNode.containerInfo, x = rl(n);
            Li(n, x, E);
            break;
          default:
            throw Error(v(161));
        }
      } catch (L) {
        hn(n, n.return, L);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function Qy(n, r, l) {
    Ne = n, ep(n);
  }
  function ep(n, r, l) {
    for (var o = (n.mode & 1) !== 0; Ne !== null; ) {
      var c = Ne, p = c.child;
      if (c.tag === 22 && o) {
        var E = c.memoizedState !== null || js;
        if (!E) {
          var x = c.alternate, L = x !== null && x.memoizedState !== null || Tr;
          x = js;
          var G = Tr;
          if (js = E, (Tr = L) && !G) for (Ne = c; Ne !== null; ) E = Ne, L = E.child, E.tag === 22 && E.memoizedState !== null ? tp(c) : L !== null ? (L.return = E, Ne = L) : tp(c);
          for (; p !== null; ) Ne = p, ep(p), p = p.sibling;
          Ne = c, js = x, Tr = G;
        }
        Eh(n);
      } else c.subtreeFlags & 8772 && p !== null ? (p.return = c, Ne = p) : Eh(n);
    }
  }
  function Eh(n) {
    for (; Ne !== null; ) {
      var r = Ne;
      if (r.flags & 8772) {
        var l = r.alternate;
        try {
          if (r.flags & 8772) switch (r.tag) {
            case 0:
            case 11:
            case 15:
              Tr || Vs(5, r);
              break;
            case 1:
              var o = r.stateNode;
              if (r.flags & 4 && !Tr) if (l === null) o.componentDidMount();
              else {
                var c = r.elementType === r.type ? l.memoizedProps : ui(r.type, l.memoizedProps);
                o.componentDidUpdate(c, l.memoizedState, o.__reactInternalSnapshotBeforeUpdate);
              }
              var p = r.updateQueue;
              p !== null && jd(r, p, o);
              break;
            case 3:
              var E = r.updateQueue;
              if (E !== null) {
                if (l = null, r.child !== null) switch (r.child.tag) {
                  case 5:
                    l = r.child.stateNode;
                    break;
                  case 1:
                    l = r.child.stateNode;
                }
                jd(r, E, l);
              }
              break;
            case 5:
              var x = r.stateNode;
              if (l === null && r.flags & 4) {
                l = x;
                var L = r.memoizedProps;
                switch (r.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    L.autoFocus && l.focus();
                    break;
                  case "img":
                    L.src && (l.src = L.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (r.memoizedState === null) {
                var G = r.alternate;
                if (G !== null) {
                  var ue = G.memoizedState;
                  if (ue !== null) {
                    var ce = ue.dehydrated;
                    ce !== null && ti(ce);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(v(163));
          }
          Tr || r.flags & 512 && Jd(r);
        } catch (ie) {
          hn(r, r.return, ie);
        }
      }
      if (r === n) {
        Ne = null;
        break;
      }
      if (l = r.sibling, l !== null) {
        l.return = r.return, Ne = l;
        break;
      }
      Ne = r.return;
    }
  }
  function $s(n) {
    for (; Ne !== null; ) {
      var r = Ne;
      if (r === n) {
        Ne = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        l.return = r.return, Ne = l;
        break;
      }
      Ne = r.return;
    }
  }
  function tp(n) {
    for (; Ne !== null; ) {
      var r = Ne;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var l = r.return;
            try {
              Vs(4, r);
            } catch (L) {
              hn(r, l, L);
            }
            break;
          case 1:
            var o = r.stateNode;
            if (typeof o.componentDidMount == "function") {
              var c = r.return;
              try {
                o.componentDidMount();
              } catch (L) {
                hn(r, c, L);
              }
            }
            var p = r.return;
            try {
              Jd(r);
            } catch (L) {
              hn(r, p, L);
            }
            break;
          case 5:
            var E = r.return;
            try {
              Jd(r);
            } catch (L) {
              hn(r, E, L);
            }
        }
      } catch (L) {
        hn(r, r.return, L);
      }
      if (r === n) {
        Ne = null;
        break;
      }
      var x = r.sibling;
      if (x !== null) {
        x.return = r.return, Ne = x;
        break;
      }
      Ne = r.return;
    }
  }
  var Gy = Math.ceil, Vl = pe.ReactCurrentDispatcher, zu = pe.ReactCurrentOwner, sr = pe.ReactCurrentBatchConfig, Nt = 0, Xn = null, Hn = null, cr = 0, ga = 0, Oo = ii(0), kn = 0, Is = null, Mi = 0, Lo = 0, yf = 0, Ys = null, na = null, np = 0, No = 1 / 0, Sa = null, Mo = !1, Fu = null, Bl = null, gf = !1, al = null, Ws = 0, $l = 0, Uo = null, Qs = -1, xr = 0;
  function Vn() {
    return Nt & 6 ? dt() : Qs !== -1 ? Qs : Qs = dt();
  }
  function Ui(n) {
    return n.mode & 1 ? Nt & 2 && cr !== 0 ? cr & -cr : Yy.transition !== null ? (xr === 0 && (xr = io()), xr) : (n = Pt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : po(n.type)), n) : 1;
  }
  function Ar(n, r, l, o) {
    if (50 < $l) throw $l = 0, Uo = null, Error(v(185));
    Yi(n, l, o), (!(Nt & 2) || n !== Xn) && (n === Xn && (!(Nt & 2) && (Lo |= l), kn === 4 && si(n, cr)), ra(n, o), l === 1 && Nt === 0 && !(r.mode & 1) && (No = dt() + 500, To && _i()));
  }
  function ra(n, r) {
    var l = n.callbackNode;
    fu(n, r);
    var o = ei(n, n === Xn ? cr : 0);
    if (o === 0) l !== null && ir(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = o & -o, n.callbackPriority !== r) {
      if (l != null && ir(l), r === 1) n.tag === 0 ? Nl(rp.bind(null, n)) : Fc(rp.bind(null, n)), Eo(function() {
        !(Nt & 6) && _i();
      }), l = null;
      else {
        switch (uo(o)) {
          case 1:
            l = Ja;
            break;
          case 4:
            l = su;
            break;
          case 16:
            l = cu;
            break;
          case 536870912:
            l = no;
            break;
          default:
            l = cu;
        }
        l = Oh(l, Sf.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function Sf(n, r) {
    if (Qs = -1, xr = 0, Nt & 6) throw Error(v(327));
    var l = n.callbackNode;
    if (Ao() && n.callbackNode !== l) return null;
    var o = ei(n, n === Xn ? cr : 0);
    if (o === 0) return null;
    if (o & 30 || o & n.expiredLanes || r) r = Ef(n, o);
    else {
      r = o;
      var c = Nt;
      Nt |= 2;
      var p = Rh();
      (Xn !== n || cr !== r) && (Sa = null, No = dt() + 500, il(n, r));
      do
        try {
          wh();
          break;
        } catch (x) {
          Ch(n, x);
        }
      while (!0);
      Md(), Vl.current = p, Nt = c, Hn !== null ? r = 0 : (Xn = null, cr = 0, r = kn);
    }
    if (r !== 0) {
      if (r === 2 && (c = wl(n), c !== 0 && (o = c, r = Gs(n, c))), r === 1) throw l = Is, il(n, 0), si(n, o), ra(n, dt()), l;
      if (r === 6) si(n, o);
      else {
        if (c = n.current.alternate, !(o & 30) && !Xy(c) && (r = Ef(n, o), r === 2 && (p = wl(n), p !== 0 && (o = p, r = Gs(n, p))), r === 1)) throw l = Is, il(n, 0), si(n, o), ra(n, dt()), l;
        switch (n.finishedWork = c, n.finishedLanes = o, r) {
          case 0:
          case 1:
            throw Error(v(345));
          case 2:
            Hu(n, na, Sa);
            break;
          case 3:
            if (si(n, o), (o & 130023424) === o && (r = np + 500 - dt(), 10 < r)) {
              if (ei(n, 0) !== 0) break;
              if (c = n.suspendedLanes, (c & o) !== o) {
                Vn(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = Uc(Hu.bind(null, n, na, Sa), r);
              break;
            }
            Hu(n, na, Sa);
            break;
          case 4:
            if (si(n, o), (o & 4194240) === o) break;
            for (r = n.eventTimes, c = -1; 0 < o; ) {
              var E = 31 - kr(o);
              p = 1 << E, E = r[E], E > c && (c = E), o &= ~p;
            }
            if (o = c, o = dt() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * Gy(o / 1960)) - o, 10 < o) {
              n.timeoutHandle = Uc(Hu.bind(null, n, na, Sa), o);
              break;
            }
            Hu(n, na, Sa);
            break;
          case 5:
            Hu(n, na, Sa);
            break;
          default:
            throw Error(v(329));
        }
      }
    }
    return ra(n, dt()), n.callbackNode === l ? Sf.bind(null, n) : null;
  }
  function Gs(n, r) {
    var l = Ys;
    return n.current.memoizedState.isDehydrated && (il(n, r).flags |= 256), n = Ef(n, r), n !== 2 && (r = na, na = l, r !== null && Pu(r)), n;
  }
  function Pu(n) {
    na === null ? na = n : na.push.apply(na, n);
  }
  function Xy(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var l = r.updateQueue;
        if (l !== null && (l = l.stores, l !== null)) for (var o = 0; o < l.length; o++) {
          var c = l[o], p = c.getSnapshot;
          c = c.value;
          try {
            if (!ri(p(), c)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (l = r.child, r.subtreeFlags & 16384 && l !== null) l.return = r, r = l;
      else {
        if (r === n) break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n) return !0;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    return !0;
  }
  function si(n, r) {
    for (r &= ~yf, r &= ~Lo, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - kr(r), o = 1 << l;
      n[l] = -1, r &= ~o;
    }
  }
  function rp(n) {
    if (Nt & 6) throw Error(v(327));
    Ao();
    var r = ei(n, 0);
    if (!(r & 1)) return ra(n, dt()), null;
    var l = Ef(n, r);
    if (n.tag !== 0 && l === 2) {
      var o = wl(n);
      o !== 0 && (r = o, l = Gs(n, o));
    }
    if (l === 1) throw l = Is, il(n, 0), si(n, r), ra(n, dt()), l;
    if (l === 6) throw Error(v(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Hu(n, na, Sa), ra(n, dt()), null;
  }
  function ap(n, r) {
    var l = Nt;
    Nt |= 1;
    try {
      return n(r);
    } finally {
      Nt = l, Nt === 0 && (No = dt() + 500, To && _i());
    }
  }
  function ju(n) {
    al !== null && al.tag === 0 && !(Nt & 6) && Ao();
    var r = Nt;
    Nt |= 1;
    var l = sr.transition, o = Pt;
    try {
      if (sr.transition = null, Pt = 1, n) return n();
    } finally {
      Pt = o, sr.transition = l, Nt = r, !(Nt & 6) && _i();
    }
  }
  function ip() {
    ga = Oo.current, on(Oo);
  }
  function il(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, Dd(l)), Hn !== null) for (l = Hn.return; l !== null; ) {
      var o = l;
      switch (jc(o), o.tag) {
        case 1:
          o = o.type.childContextTypes, o != null && wo();
          break;
        case 3:
          bu(), on(Qn), on(Cn), We();
          break;
        case 5:
          $c(o);
          break;
        case 4:
          bu();
          break;
        case 13:
          on(Sn);
          break;
        case 19:
          on(Sn);
          break;
        case 10:
          Ud(o.type._context);
          break;
        case 22:
        case 23:
          ip();
      }
      l = l.return;
    }
    if (Xn = n, Hn = n = Il(n.current, null), cr = ga = r, kn = 0, Is = null, yf = Lo = Mi = 0, na = Ys = null, xu !== null) {
      for (r = 0; r < xu.length; r++) if (l = xu[r], o = l.interleaved, o !== null) {
        l.interleaved = null;
        var c = o.next, p = l.pending;
        if (p !== null) {
          var E = p.next;
          p.next = c, o.next = E;
        }
        l.pending = o;
      }
      xu = null;
    }
    return n;
  }
  function Ch(n, r) {
    do {
      var l = Hn;
      try {
        if (Md(), xt.current = Mu, Yc) {
          for (var o = Ht.memoizedState; o !== null; ) {
            var c = o.queue;
            c !== null && (c.pending = null), o = o.next;
          }
          Yc = !1;
        }
        if (Zt = 0, Zn = Fn = Ht = null, xs = !1, Du = 0, zu.current = null, l === null || l.return === null) {
          kn = 1, Is = r, Hn = null;
          break;
        }
        e: {
          var p = n, E = l.return, x = l, L = r;
          if (r = cr, x.flags |= 32768, L !== null && typeof L == "object" && typeof L.then == "function") {
            var G = L, ue = x, ce = ue.tag;
            if (!(ue.mode & 1) && (ce === 0 || ce === 11 || ce === 15)) {
              var ie = ue.alternate;
              ie ? (ue.updateQueue = ie.updateQueue, ue.memoizedState = ie.memoizedState, ue.lanes = ie.lanes) : (ue.updateQueue = null, ue.memoizedState = null);
            }
            var De = oh(E);
            if (De !== null) {
              De.flags &= -257, Hl(De, E, x, p, r), De.mode & 1 && Qd(p, G, r), r = De, L = G;
              var Ue = r.updateQueue;
              if (Ue === null) {
                var Fe = /* @__PURE__ */ new Set();
                Fe.add(L), r.updateQueue = Fe;
              } else Ue.add(L);
              break e;
            } else {
              if (!(r & 1)) {
                Qd(p, G, r), lp();
                break e;
              }
              L = Error(v(426));
            }
          } else if (vn && x.mode & 1) {
            var On = oh(E);
            if (On !== null) {
              !(On.flags & 65536) && (On.flags |= 256), Hl(On, E, x, p, r), el(Uu(L, x));
              break e;
            }
          }
          p = L = Uu(L, x), kn !== 4 && (kn = 2), Ys === null ? Ys = [p] : Ys.push(p), p = E;
          do {
            switch (p.tag) {
              case 3:
                p.flags |= 65536, r &= -r, p.lanes |= r;
                var V = uh(p, L, r);
                nh(p, V);
                break e;
              case 1:
                x = L;
                var A = p.type, I = p.stateNode;
                if (!(p.flags & 128) && (typeof A.getDerivedStateFromError == "function" || I !== null && typeof I.componentDidCatch == "function" && (Bl === null || !Bl.has(I)))) {
                  p.flags |= 65536, r &= -r, p.lanes |= r;
                  var oe = Wd(p, x, r);
                  nh(p, oe);
                  break e;
                }
            }
            p = p.return;
          } while (p !== null);
        }
        xh(l);
      } catch (Ae) {
        r = Ae, Hn === l && l !== null && (Hn = l = l.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Rh() {
    var n = Vl.current;
    return Vl.current = Mu, n === null ? Mu : n;
  }
  function lp() {
    (kn === 0 || kn === 3 || kn === 2) && (kn = 4), Xn === null || !(Mi & 268435455) && !(Lo & 268435455) || si(Xn, cr);
  }
  function Ef(n, r) {
    var l = Nt;
    Nt |= 2;
    var o = Rh();
    (Xn !== n || cr !== r) && (Sa = null, il(n, r));
    do
      try {
        Ky();
        break;
      } catch (c) {
        Ch(n, c);
      }
    while (!0);
    if (Md(), Nt = l, Vl.current = o, Hn !== null) throw Error(v(261));
    return Xn = null, cr = 0, kn;
  }
  function Ky() {
    for (; Hn !== null; ) Th(Hn);
  }
  function wh() {
    for (; Hn !== null && !Ka(); ) Th(Hn);
  }
  function Th(n) {
    var r = kh(n.alternate, n, ga);
    n.memoizedProps = n.pendingProps, r === null ? xh(n) : Hn = r, zu.current = null;
  }
  function xh(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (l = vf(l, r), l !== null) {
          l.flags &= 32767, Hn = l;
          return;
        }
        if (n !== null) n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          kn = 6, Hn = null;
          return;
        }
      } else if (l = hh(l, r, ga), l !== null) {
        Hn = l;
        return;
      }
      if (r = r.sibling, r !== null) {
        Hn = r;
        return;
      }
      Hn = r = n;
    } while (r !== null);
    kn === 0 && (kn = 5);
  }
  function Hu(n, r, l) {
    var o = Pt, c = sr.transition;
    try {
      sr.transition = null, Pt = 1, qy(n, r, l, o);
    } finally {
      sr.transition = c, Pt = o;
    }
    return null;
  }
  function qy(n, r, l, o) {
    do
      Ao();
    while (al !== null);
    if (Nt & 6) throw Error(v(327));
    l = n.finishedWork;
    var c = n.finishedLanes;
    if (l === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current) throw Error(v(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var p = l.lanes | l.childLanes;
    if (ud(n, p), n === Xn && (Hn = Xn = null, cr = 0), !(l.subtreeFlags & 2064) && !(l.flags & 2064) || gf || (gf = !0, Oh(cu, function() {
      return Ao(), null;
    })), p = (l.flags & 15990) !== 0, l.subtreeFlags & 15990 || p) {
      p = sr.transition, sr.transition = null;
      var E = Pt;
      Pt = 1;
      var x = Nt;
      Nt |= 4, zu.current = null, yh(n, l), Zd(l, n), mo(Eu), Da = !!hs, Eu = hs = null, n.current = l, Qy(l), qa(), Nt = x, Pt = E, sr.transition = p;
    } else n.current = l;
    if (gf && (gf = !1, al = n, Ws = c), p = n.pendingLanes, p === 0 && (Bl = null), ts(l.stateNode), ra(n, dt()), r !== null) for (o = n.onRecoverableError, l = 0; l < r.length; l++) c = r[l], o(c.value, { componentStack: c.stack, digest: c.digest });
    if (Mo) throw Mo = !1, n = Fu, Fu = null, n;
    return Ws & 1 && n.tag !== 0 && Ao(), p = n.pendingLanes, p & 1 ? n === Uo ? $l++ : ($l = 0, Uo = n) : $l = 0, _i(), null;
  }
  function Ao() {
    if (al !== null) {
      var n = uo(Ws), r = sr.transition, l = Pt;
      try {
        if (sr.transition = null, Pt = 16 > n ? 16 : n, al === null) var o = !1;
        else {
          if (n = al, al = null, Ws = 0, Nt & 6) throw Error(v(331));
          var c = Nt;
          for (Nt |= 4, Ne = n.current; Ne !== null; ) {
            var p = Ne, E = p.child;
            if (Ne.flags & 16) {
              var x = p.deletions;
              if (x !== null) {
                for (var L = 0; L < x.length; L++) {
                  var G = x[L];
                  for (Ne = G; Ne !== null; ) {
                    var ue = Ne;
                    switch (ue.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Hs(8, ue, p);
                    }
                    var ce = ue.child;
                    if (ce !== null) ce.return = ue, Ne = ce;
                    else for (; Ne !== null; ) {
                      ue = Ne;
                      var ie = ue.sibling, De = ue.return;
                      if (mf(ue), ue === G) {
                        Ne = null;
                        break;
                      }
                      if (ie !== null) {
                        ie.return = De, Ne = ie;
                        break;
                      }
                      Ne = De;
                    }
                  }
                }
                var Ue = p.alternate;
                if (Ue !== null) {
                  var Fe = Ue.child;
                  if (Fe !== null) {
                    Ue.child = null;
                    do {
                      var On = Fe.sibling;
                      Fe.sibling = null, Fe = On;
                    } while (Fe !== null);
                  }
                }
                Ne = p;
              }
            }
            if (p.subtreeFlags & 2064 && E !== null) E.return = p, Ne = E;
            else e: for (; Ne !== null; ) {
              if (p = Ne, p.flags & 2048) switch (p.tag) {
                case 0:
                case 11:
                case 15:
                  Hs(9, p, p.return);
              }
              var V = p.sibling;
              if (V !== null) {
                V.return = p.return, Ne = V;
                break e;
              }
              Ne = p.return;
            }
          }
          var A = n.current;
          for (Ne = A; Ne !== null; ) {
            E = Ne;
            var I = E.child;
            if (E.subtreeFlags & 2064 && I !== null) I.return = E, Ne = I;
            else e: for (E = A; Ne !== null; ) {
              if (x = Ne, x.flags & 2048) try {
                switch (x.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Vs(9, x);
                }
              } catch (Ae) {
                hn(x, x.return, Ae);
              }
              if (x === E) {
                Ne = null;
                break e;
              }
              var oe = x.sibling;
              if (oe !== null) {
                oe.return = x.return, Ne = oe;
                break e;
              }
              Ne = x.return;
            }
          }
          if (Nt = c, _i(), Wr && typeof Wr.onPostCommitFiberRoot == "function") try {
            Wr.onPostCommitFiberRoot(Cl, n);
          } catch {
          }
          o = !0;
        }
        return o;
      } finally {
        Pt = l, sr.transition = r;
      }
    }
    return !1;
  }
  function _h(n, r, l) {
    r = Uu(l, r), r = uh(n, r, 1), n = Fl(n, r, 1), r = Vn(), n !== null && (Yi(n, 1, r), ra(n, r));
  }
  function hn(n, r, l) {
    if (n.tag === 3) _h(n, n, l);
    else for (; r !== null; ) {
      if (r.tag === 3) {
        _h(r, n, l);
        break;
      } else if (r.tag === 1) {
        var o = r.stateNode;
        if (typeof r.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (Bl === null || !Bl.has(o))) {
          n = Uu(l, n), n = Wd(r, n, 1), r = Fl(r, n, 1), n = Vn(), r !== null && (Yi(r, 1, n), ra(r, n));
          break;
        }
      }
      r = r.return;
    }
  }
  function Jy(n, r, l) {
    var o = n.pingCache;
    o !== null && o.delete(r), r = Vn(), n.pingedLanes |= n.suspendedLanes & l, Xn === n && (cr & l) === l && (kn === 4 || kn === 3 && (cr & 130023424) === cr && 500 > dt() - np ? il(n, 0) : yf |= l), ra(n, r);
  }
  function bh(n, r) {
    r === 0 && (n.mode & 1 ? (r = da, da <<= 1, !(da & 130023424) && (da = 4194304)) : r = 1);
    var l = Vn();
    n = ha(n, r), n !== null && (Yi(n, r, l), ra(n, l));
  }
  function Zy(n) {
    var r = n.memoizedState, l = 0;
    r !== null && (l = r.retryLane), bh(n, l);
  }
  function Dh(n, r) {
    var l = 0;
    switch (n.tag) {
      case 13:
        var o = n.stateNode, c = n.memoizedState;
        c !== null && (l = c.retryLane);
        break;
      case 19:
        o = n.stateNode;
        break;
      default:
        throw Error(v(314));
    }
    o !== null && o.delete(r), bh(n, l);
  }
  var kh;
  kh = function(n, r, l) {
    if (n !== null) if (n.memoizedProps !== r.pendingProps || Qn.current) Pn = !0;
    else {
      if (!(n.lanes & l) && !(r.flags & 128)) return Pn = !1, Fs(n, r, l);
      Pn = !!(n.flags & 131072);
    }
    else Pn = !1, vn && r.flags & 1048576 && Jv(r, Zi, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var o = r.type;
        Aa(n, r), n = r.pendingProps;
        var c = La(r, Cn.current);
        gn(r, l), c = Pl(null, r, o, n, c, l);
        var p = li();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, An(o) ? (p = !0, Kr(r)) : p = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, Pd(r), c.updater = sf, r.stateNode = c, c._reactInternals = r, Ns(r, o, n, l), r = As(null, r, o, !0, p, l)) : (r.tag = 0, vn && p && Pc(r), or(null, r, c, l), r = r.child), r;
      case 16:
        o = r.elementType;
        e: {
          switch (Aa(n, r), n = r.pendingProps, c = o._init, o = c(o._payload), r.type = o, c = r.tag = tg(o), n = ui(o, n), c) {
            case 0:
              r = sh(null, r, o, n, l);
              break e;
            case 1:
              r = ch(null, r, o, n, l);
              break e;
            case 11:
              r = ea(null, r, o, n, l);
              break e;
            case 14:
              r = Au(null, r, o, ui(o.type, n), l);
              break e;
          }
          throw Error(v(
            306,
            o,
            ""
          ));
        }
        return r;
      case 0:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ui(o, c), sh(n, r, o, c, l);
      case 1:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ui(o, c), ch(n, r, o, c, l);
      case 3:
        e: {
          if (Do(r), n === null) throw Error(v(387));
          o = r.pendingProps, p = r.memoizedState, c = p.element, th(n, r), Es(r, o, null, l);
          var E = r.memoizedState;
          if (o = E.element, p.isDehydrated) if (p = { element: o, isDehydrated: !1, cache: E.cache, pendingSuspenseBoundaries: E.pendingSuspenseBoundaries, transitions: E.transitions }, r.updateQueue.baseState = p, r.memoizedState = p, r.flags & 256) {
            c = Uu(Error(v(423)), r), r = fh(n, r, o, l, c);
            break e;
          } else if (o !== c) {
            c = Uu(Error(v(424)), r), r = fh(n, r, o, l, c);
            break e;
          } else for (Jr = wi(r.stateNode.containerInfo.firstChild), qr = r, vn = !0, Ma = null, l = Te(r, null, o, l), r.child = l; l; ) l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (zl(), o === c) {
              r = za(n, r, l);
              break e;
            }
            or(n, r, o, l);
          }
          r = r.child;
        }
        return r;
      case 5:
        return rh(r), n === null && Ld(r), o = r.type, c = r.pendingProps, p = n !== null ? n.memoizedProps : null, E = c.children, Mc(o, c) ? E = null : p !== null && Mc(o, p) && (r.flags |= 32), Gd(n, r), or(n, r, E, l), r.child;
      case 6:
        return n === null && Ld(r), null;
      case 13:
        return pf(n, r, l);
      case 4:
        return Hd(r, r.stateNode.containerInfo), o = r.pendingProps, n === null ? r.child = _n(r, null, o, l) : or(n, r, o, l), r.child;
      case 11:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ui(o, c), ea(n, r, o, c, l);
      case 7:
        return or(n, r, r.pendingProps, l), r.child;
      case 8:
        return or(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return or(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (o = r.type._context, c = r.pendingProps, p = r.memoizedProps, E = c.value, Ie(va, o._currentValue), o._currentValue = E, p !== null) if (ri(p.value, E)) {
            if (p.children === c.children && !Qn.current) {
              r = za(n, r, l);
              break e;
            }
          } else for (p = r.child, p !== null && (p.return = r); p !== null; ) {
            var x = p.dependencies;
            if (x !== null) {
              E = p.child;
              for (var L = x.firstContext; L !== null; ) {
                if (L.context === o) {
                  if (p.tag === 1) {
                    L = tl(-1, l & -l), L.tag = 2;
                    var G = p.updateQueue;
                    if (G !== null) {
                      G = G.shared;
                      var ue = G.pending;
                      ue === null ? L.next = L : (L.next = ue.next, ue.next = L), G.pending = L;
                    }
                  }
                  p.lanes |= l, L = p.alternate, L !== null && (L.lanes |= l), Ad(
                    p.return,
                    l,
                    r
                  ), x.lanes |= l;
                  break;
                }
                L = L.next;
              }
            } else if (p.tag === 10) E = p.type === r.type ? null : p.child;
            else if (p.tag === 18) {
              if (E = p.return, E === null) throw Error(v(341));
              E.lanes |= l, x = E.alternate, x !== null && (x.lanes |= l), Ad(E, l, r), E = p.sibling;
            } else E = p.child;
            if (E !== null) E.return = p;
            else for (E = p; E !== null; ) {
              if (E === r) {
                E = null;
                break;
              }
              if (p = E.sibling, p !== null) {
                p.return = E.return, E = p;
                break;
              }
              E = E.return;
            }
            p = E;
          }
          or(n, r, c.children, l), r = r.child;
        }
        return r;
      case 9:
        return c = r.type, o = r.pendingProps.children, gn(r, l), c = Ua(c), o = o(c), r.flags |= 1, or(n, r, o, l), r.child;
      case 14:
        return o = r.type, c = ui(o, r.pendingProps), c = ui(o.type, c), Au(n, r, o, c, l);
      case 15:
        return pt(n, r, r.type, r.pendingProps, l);
      case 17:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ui(o, c), Aa(n, r), r.tag = 1, An(o) ? (n = !0, Kr(r)) : n = !1, gn(r, l), cf(r, o, c), Ns(r, o, c, l), As(null, r, o, !0, n, l);
      case 19:
        return Oi(n, r, l);
      case 22:
        return Us(n, r, l);
    }
    throw Error(v(156, r.tag));
  };
  function Oh(n, r) {
    return fn(n, r);
  }
  function eg(n, r, l, o) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Pa(n, r, l, o) {
    return new eg(n, r, l, o);
  }
  function up(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function tg(n) {
    if (typeof n == "function") return up(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === et) return 11;
      if (n === ct) return 14;
    }
    return 2;
  }
  function Il(n, r) {
    var l = n.alternate;
    return l === null ? (l = Pa(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function Xs(n, r, l, o, c, p) {
    var E = 2;
    if (o = n, typeof n == "function") up(n) && (E = 1);
    else if (typeof n == "string") E = 5;
    else e: switch (n) {
      case Se:
        return ll(l.children, c, p, r);
      case Le:
        E = 8, c |= 8;
        break;
      case Qe:
        return n = Pa(12, l, r, c | 2), n.elementType = Qe, n.lanes = p, n;
      case Be:
        return n = Pa(13, l, r, c), n.elementType = Be, n.lanes = p, n;
      case mt:
        return n = Pa(19, l, r, c), n.elementType = mt, n.lanes = p, n;
      case Pe:
        return Yl(l, c, p, r);
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case it:
            E = 10;
            break e;
          case Ct:
            E = 9;
            break e;
          case et:
            E = 11;
            break e;
          case ct:
            E = 14;
            break e;
          case kt:
            E = 16, o = null;
            break e;
        }
        throw Error(v(130, n == null ? n : typeof n, ""));
    }
    return r = Pa(E, l, r, c), r.elementType = n, r.type = o, r.lanes = p, r;
  }
  function ll(n, r, l, o) {
    return n = Pa(7, n, o, r), n.lanes = l, n;
  }
  function Yl(n, r, l, o) {
    return n = Pa(22, n, o, r), n.elementType = Pe, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function op(n, r, l) {
    return n = Pa(6, n, null, r), n.lanes = l, n;
  }
  function Cf(n, r, l) {
    return r = Pa(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function Lh(n, r, l, o, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = lo(0), this.expirationTimes = lo(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = lo(0), this.identifierPrefix = o, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function Rf(n, r, l, o, c, p, E, x, L) {
    return n = new Lh(n, r, l, x, L), r === 1 ? (r = 1, p === !0 && (r |= 8)) : r = 0, p = Pa(3, null, null, r), n.current = p, p.stateNode = n, p.memoizedState = { element: o, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Pd(p), n;
  }
  function ng(n, r, l) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: ye, key: o == null ? null : "" + o, children: n, containerInfo: r, implementation: l };
  }
  function sp(n) {
    if (!n) return Gr;
    n = n._reactInternals;
    e: {
      if (ft(n) !== n || n.tag !== 1) throw Error(v(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (An(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(v(171));
    }
    if (n.tag === 1) {
      var l = n.type;
      if (An(l)) return gs(n, l, r);
    }
    return r;
  }
  function Nh(n, r, l, o, c, p, E, x, L) {
    return n = Rf(l, o, !0, n, c, p, E, x, L), n.context = sp(null), l = n.current, o = Vn(), c = Ui(l), p = tl(o, c), p.callback = r ?? null, Fl(l, p, c), n.current.lanes = c, Yi(n, c, o), ra(n, o), n;
  }
  function wf(n, r, l, o) {
    var c = r.current, p = Vn(), E = Ui(c);
    return l = sp(l), r.context === null ? r.context = l : r.pendingContext = l, r = tl(p, E), r.payload = { element: n }, o = o === void 0 ? null : o, o !== null && (r.callback = o), n = Fl(c, r, E), n !== null && (Ar(n, c, E, p), Bc(n, c, E)), E;
  }
  function Tf(n) {
    if (n = n.current, !n.child) return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function cp(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var l = n.retryLane;
      n.retryLane = l !== 0 && l < r ? l : r;
    }
  }
  function xf(n, r) {
    cp(n, r), (n = n.alternate) && cp(n, r);
  }
  function Mh() {
    return null;
  }
  var Vu = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function fp(n) {
    this._internalRoot = n;
  }
  _f.prototype.render = fp.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null) throw Error(v(409));
    wf(n, r, null, null);
  }, _f.prototype.unmount = fp.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      ju(function() {
        wf(null, n, null, null);
      }), r[qi] = null;
    }
  };
  function _f(n) {
    this._internalRoot = n;
  }
  _f.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = lt();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < Wn.length && r !== 0 && r < Wn[l].priority; l++) ;
      Wn.splice(l, 0, n), l === 0 && as(n);
    }
  };
  function dp(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function bf(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function Uh() {
  }
  function rg(n, r, l, o, c) {
    if (c) {
      if (typeof o == "function") {
        var p = o;
        o = function() {
          var G = Tf(E);
          p.call(G);
        };
      }
      var E = Nh(r, o, n, 0, null, !1, !1, "", Uh);
      return n._reactRootContainer = E, n[qi] = E.current, go(n.nodeType === 8 ? n.parentNode : n), ju(), E;
    }
    for (; c = n.lastChild; ) n.removeChild(c);
    if (typeof o == "function") {
      var x = o;
      o = function() {
        var G = Tf(L);
        x.call(G);
      };
    }
    var L = Rf(n, 0, !1, null, null, !1, !1, "", Uh);
    return n._reactRootContainer = L, n[qi] = L.current, go(n.nodeType === 8 ? n.parentNode : n), ju(function() {
      wf(r, L, l, o);
    }), L;
  }
  function Ks(n, r, l, o, c) {
    var p = l._reactRootContainer;
    if (p) {
      var E = p;
      if (typeof c == "function") {
        var x = c;
        c = function() {
          var L = Tf(E);
          x.call(L);
        };
      }
      wf(r, E, n, c);
    } else E = rg(l, r, n, c, o);
    return Tf(E);
  }
  At = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = Za(r.pendingLanes);
          l !== 0 && (Wi(r, l | 1), ra(r, dt()), !(Nt & 6) && (No = dt() + 500, _i()));
        }
        break;
      case 13:
        ju(function() {
          var o = ha(n, 1);
          if (o !== null) {
            var c = Vn();
            Ar(o, n, 1, c);
          }
        }), xf(n, 1);
    }
  }, ns = function(n) {
    if (n.tag === 13) {
      var r = ha(n, 134217728);
      if (r !== null) {
        var l = Vn();
        Ar(r, n, 134217728, l);
      }
      xf(n, 134217728);
    }
  }, gi = function(n) {
    if (n.tag === 13) {
      var r = Ui(n), l = ha(n, r);
      if (l !== null) {
        var o = Vn();
        Ar(l, n, r, o);
      }
      xf(n, r);
    }
  }, lt = function() {
    return Pt;
  }, oo = function(n, r) {
    var l = Pt;
    try {
      return Pt = n, r();
    } finally {
      Pt = l;
    }
  }, Xt = function(n, r, l) {
    switch (r) {
      case "input":
        if (Yr(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; ) l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var o = l[r];
            if (o !== n && o.form === n.form) {
              var c = xn(o);
              if (!c) throw Error(v(90));
              _r(o), Yr(o, c);
            }
          }
        }
        break;
      case "textarea":
        Qa(n, l);
        break;
      case "select":
        r = l.value, r != null && wn(n, !!l.multiple, r, !1);
    }
  }, uu = ap, gl = ju;
  var ag = { usingClientEntryPoint: !1, Events: [Ye, ai, xn, Ii, lu, ap] }, qs = { findFiberByHostInstance: Cu, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Ah = { bundleType: qs.bundleType, version: qs.version, rendererPackageName: qs.rendererPackageName, rendererConfig: qs.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: pe.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = Tn(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: qs.findFiberByHostInstance || Mh, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Wl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Wl.isDisabled && Wl.supportsFiber) try {
      Cl = Wl.inject(Ah), Wr = Wl;
    } catch {
    }
  }
  return Ia.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ag, Ia.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!dp(r)) throw Error(v(200));
    return ng(n, r, null, l);
  }, Ia.createRoot = function(n, r) {
    if (!dp(n)) throw Error(v(299));
    var l = !1, o = "", c = Vu;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (o = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = Rf(n, 1, !1, null, null, l, !1, o, c), n[qi] = r.current, go(n.nodeType === 8 ? n.parentNode : n), new fp(r);
  }, Ia.findDOMNode = function(n) {
    if (n == null) return null;
    if (n.nodeType === 1) return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(v(188)) : (n = Object.keys(n).join(","), Error(v(268, n)));
    return n = Tn(r), n = n === null ? null : n.stateNode, n;
  }, Ia.flushSync = function(n) {
    return ju(n);
  }, Ia.hydrate = function(n, r, l) {
    if (!bf(r)) throw Error(v(200));
    return Ks(null, n, r, !0, l);
  }, Ia.hydrateRoot = function(n, r, l) {
    if (!dp(n)) throw Error(v(405));
    var o = l != null && l.hydratedSources || null, c = !1, p = "", E = Vu;
    if (l != null && (l.unstable_strictMode === !0 && (c = !0), l.identifierPrefix !== void 0 && (p = l.identifierPrefix), l.onRecoverableError !== void 0 && (E = l.onRecoverableError)), r = Nh(r, null, n, 1, l ?? null, c, !1, p, E), n[qi] = r.current, go(n), o) for (n = 0; n < o.length; n++) l = o[n], c = l._getVersion, c = c(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, c] : r.mutableSourceEagerHydrationData.push(
      l,
      c
    );
    return new _f(r);
  }, Ia.render = function(n, r, l) {
    if (!bf(r)) throw Error(v(200));
    return Ks(null, n, r, !1, l);
  }, Ia.unmountComponentAtNode = function(n) {
    if (!bf(n)) throw Error(v(40));
    return n._reactRootContainer ? (ju(function() {
      Ks(null, null, n, !1, function() {
        n._reactRootContainer = null, n[qi] = null;
      });
    }), !0) : !1;
  }, Ia.unstable_batchedUpdates = ap, Ia.unstable_renderSubtreeIntoContainer = function(n, r, l, o) {
    if (!bf(l)) throw Error(v(200));
    if (n == null || n._reactInternals === void 0) throw Error(v(38));
    return Ks(n, r, l, !1, o);
  }, Ia.version = "18.3.1-next-f1338f8080-20240426", Ia;
}
var Ya = {}, h0;
function cO() {
  return h0 || (h0 = 1, je.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var d = D, m = A0(), v = d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, R = !1;
    function w(e) {
      R = e;
    }
    function b(e) {
      if (!R) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        U("warn", e, a);
      }
    }
    function g(e) {
      if (!R) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        U("error", e, a);
      }
    }
    function U(e, t, a) {
      {
        var i = v.ReactDebugCurrentFrame, u = i.getStackAddendum();
        u !== "" && (t += "%s", a = a.concat([u]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var N = 0, F = 1, K = 2, O = 3, j = 4, Y = 5, H = 6, de = 7, se = 8, be = 9, ne = 10, le = 11, pe = 12, me = 13, ye = 14, Se = 15, Le = 16, Qe = 17, it = 18, Ct = 19, et = 21, Be = 22, mt = 23, ct = 24, kt = 25, Pe = !0, he = !1, $e = !1, Re = !1, P = !1, ee = !0, nt = !0, Ze = !0, Rt = !0, yt = /* @__PURE__ */ new Set(), vt = {}, gt = {};
    function wt(e, t) {
      Qt(e, t), Qt(e + "Capture", t);
    }
    function Qt(e, t) {
      vt[e] && g("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), vt[e] = t;
      {
        var a = e.toLowerCase();
        gt[a] = e, e === "onDoubleClick" && (gt.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        yt.add(t[i]);
    }
    var Nn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", _r = Object.prototype.hasOwnProperty;
    function Rn(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function rr(e) {
      try {
        return $n(e), !1;
      } catch {
        return !0;
      }
    }
    function $n(e) {
      return "" + e;
    }
    function In(e, t) {
      if (rr(e))
        return g("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Rn(e)), $n(e);
    }
    function Yr(e) {
      if (rr(e))
        return g("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Rn(e)), $n(e);
    }
    function pi(e, t) {
      if (rr(e))
        return g("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Rn(e)), $n(e);
    }
    function sa(e, t) {
      if (rr(e))
        return g("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Rn(e)), $n(e);
    }
    function qn(e) {
      if (rr(e))
        return g("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", Rn(e)), $n(e);
    }
    function wn(e) {
      if (rr(e))
        return g("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", Rn(e)), $n(e);
    }
    var Yn = 0, Er = 1, Qa = 2, Mn = 3, Cr = 4, ca = 5, Ga = 6, vi = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", ge = vi + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", He = new RegExp("^[" + vi + "][" + ge + "]*$"), St = {}, It = {};
    function rn(e) {
      return _r.call(It, e) ? !0 : _r.call(St, e) ? !1 : He.test(e) ? (It[e] = !0, !0) : (St[e] = !0, g("Invalid attribute name: `%s`", e), !1);
    }
    function mn(e, t, a) {
      return t !== null ? t.type === Yn : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function cn(e, t, a, i) {
      if (a !== null && a.type === Yn)
        return !1;
      switch (typeof t) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (i)
            return !1;
          if (a !== null)
            return !a.acceptsBooleans;
          var u = e.toLowerCase().slice(0, 5);
          return u !== "data-" && u !== "aria-";
        }
        default:
          return !1;
      }
    }
    function Jn(e, t, a, i) {
      if (t === null || typeof t > "u" || cn(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case Mn:
            return !t;
          case Cr:
            return t === !1;
          case ca:
            return isNaN(t);
          case Ga:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function an(e) {
      return Xt.hasOwnProperty(e) ? Xt[e] : null;
    }
    function Gt(e, t, a, i, u, s, f) {
      this.acceptsBooleans = t === Qa || t === Mn || t === Cr, this.attributeName = i, this.attributeNamespace = u, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
    }
    var Xt = {}, fa = [
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
    fa.forEach(function(e) {
      Xt[e] = new Gt(
        e,
        Yn,
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
      var t = e[0], a = e[1];
      Xt[t] = new Gt(
        t,
        Er,
        !1,
        // mustUseProperty
        a,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      Xt[e] = new Gt(
        e,
        Qa,
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
      Xt[e] = new Gt(
        e,
        Qa,
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
      Xt[e] = new Gt(
        e,
        Mn,
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
      Xt[e] = new Gt(
        e,
        Mn,
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
      Xt[e] = new Gt(
        e,
        Cr,
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
      Xt[e] = new Gt(
        e,
        Ga,
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
      Xt[e] = new Gt(
        e,
        ca,
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
    var Rr = /[\-\:]([a-z])/g, xa = function(e) {
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
      var t = e.replace(Rr, xa);
      Xt[t] = new Gt(
        t,
        Er,
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
      var t = e.replace(Rr, xa);
      Xt[t] = new Gt(
        t,
        Er,
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
      var t = e.replace(Rr, xa);
      Xt[t] = new Gt(
        t,
        Er,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      Xt[e] = new Gt(
        e,
        Er,
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
    var Ii = "xlinkHref";
    Xt[Ii] = new Gt(
      "xlinkHref",
      Er,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      Xt[e] = new Gt(
        e,
        Er,
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
    var lu = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, uu = !1;
    function gl(e) {
      !uu && lu.test(e) && (uu = !0, g("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function Sl(e, t, a, i) {
      if (i.mustUseProperty) {
        var u = i.propertyName;
        return e[u];
      } else {
        In(a, t), i.sanitizeURL && gl("" + a);
        var s = i.attributeName, f = null;
        if (i.type === Cr) {
          if (e.hasAttribute(s)) {
            var h = e.getAttribute(s);
            return h === "" ? !0 : Jn(t, a, i, !1) ? h : h === "" + a ? a : h;
          }
        } else if (e.hasAttribute(s)) {
          if (Jn(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === Mn)
            return a;
          f = e.getAttribute(s);
        }
        return Jn(t, a, i, !1) ? f === null ? a : f : f === "" + a ? a : f;
      }
    }
    function ou(e, t, a, i) {
      {
        if (!rn(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var u = e.getAttribute(t);
        return In(a, t), u === "" + a ? a : u;
      }
    }
    function br(e, t, a, i) {
      var u = an(t);
      if (!mn(t, u, i)) {
        if (Jn(t, a, u, i) && (a = null), i || u === null) {
          if (rn(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (In(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var f = u.mustUseProperty;
        if (f) {
          var h = u.propertyName;
          if (a === null) {
            var y = u.type;
            e[h] = y === Mn ? !1 : "";
          } else
            e[h] = a;
          return;
        }
        var C = u.attributeName, T = u.attributeNamespace;
        if (a === null)
          e.removeAttribute(C);
        else {
          var z = u.type, M;
          z === Mn || z === Cr && a === !0 ? M = "" : (In(a, C), M = "" + a, u.sanitizeURL && gl(M.toString())), T ? e.setAttributeNS(T, C, M) : e.setAttribute(C, M);
        }
      }
    }
    var Dr = Symbol.for("react.element"), ar = Symbol.for("react.portal"), hi = Symbol.for("react.fragment"), Xa = Symbol.for("react.strict_mode"), mi = Symbol.for("react.profiler"), yi = Symbol.for("react.provider"), k = Symbol.for("react.context"), re = Symbol.for("react.forward_ref"), we = Symbol.for("react.suspense"), Me = Symbol.for("react.suspense_list"), ft = Symbol.for("react.memo"), ut = Symbol.for("react.lazy"), _t = Symbol.for("react.scope"), Tt = Symbol.for("react.debug_trace_mode"), Tn = Symbol.for("react.offscreen"), ln = Symbol.for("react.legacy_hidden"), fn = Symbol.for("react.cache"), ir = Symbol.for("react.tracing_marker"), Ka = Symbol.iterator, qa = "@@iterator";
    function dt(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Ka && e[Ka] || e[qa];
      return typeof t == "function" ? t : null;
    }
    var ht = Object.assign, Ja = 0, su, cu, El, no, Cl, Wr, ts;
    function kr() {
    }
    kr.__reactDisabledLog = !0;
    function gc() {
      {
        if (Ja === 0) {
          su = console.log, cu = console.info, El = console.warn, no = console.error, Cl = console.group, Wr = console.groupCollapsed, ts = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: kr,
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
        Ja++;
      }
    }
    function Sc() {
      {
        if (Ja--, Ja === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: ht({}, e, {
              value: su
            }),
            info: ht({}, e, {
              value: cu
            }),
            warn: ht({}, e, {
              value: El
            }),
            error: ht({}, e, {
              value: no
            }),
            group: ht({}, e, {
              value: Cl
            }),
            groupCollapsed: ht({}, e, {
              value: Wr
            }),
            groupEnd: ht({}, e, {
              value: ts
            })
          });
        }
        Ja < 0 && g("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ro = v.ReactCurrentDispatcher, Rl;
    function da(e, t, a) {
      {
        if (Rl === void 0)
          try {
            throw Error();
          } catch (u) {
            var i = u.stack.trim().match(/\n( *(at )?)/);
            Rl = i && i[1] || "";
          }
        return `
` + Rl + e;
      }
    }
    var Za = !1, ei;
    {
      var ao = typeof WeakMap == "function" ? WeakMap : Map;
      ei = new ao();
    }
    function fu(e, t) {
      if (!e || Za)
        return "";
      {
        var a = ei.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      Za = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = ro.current, ro.current = null, gc();
      try {
        if (t) {
          var f = function() {
            throw Error();
          };
          if (Object.defineProperty(f.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(f, []);
            } catch (X) {
              i = X;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (X) {
              i = X;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (X) {
            i = X;
          }
          e();
        }
      } catch (X) {
        if (X && i && typeof X.stack == "string") {
          for (var h = X.stack.split(`
`), y = i.stack.split(`
`), C = h.length - 1, T = y.length - 1; C >= 1 && T >= 0 && h[C] !== y[T]; )
            T--;
          for (; C >= 1 && T >= 0; C--, T--)
            if (h[C] !== y[T]) {
              if (C !== 1 || T !== 1)
                do
                  if (C--, T--, T < 0 || h[C] !== y[T]) {
                    var z = `
` + h[C].replace(" at new ", " at ");
                    return e.displayName && z.includes("<anonymous>") && (z = z.replace("<anonymous>", e.displayName)), typeof e == "function" && ei.set(e, z), z;
                  }
                while (C >= 1 && T >= 0);
              break;
            }
        }
      } finally {
        Za = !1, ro.current = s, Sc(), Error.prepareStackTrace = u;
      }
      var M = e ? e.displayName || e.name : "", W = M ? da(M) : "";
      return typeof e == "function" && ei.set(e, W), W;
    }
    function wl(e, t, a) {
      return fu(e, !0);
    }
    function io(e, t, a) {
      return fu(e, !1);
    }
    function lo(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Yi(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return fu(e, lo(e));
      if (typeof e == "string")
        return da(e);
      switch (e) {
        case we:
          return da("Suspense");
        case Me:
          return da("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case re:
            return io(e.render);
          case ft:
            return Yi(e.type, t, a);
          case ut: {
            var i = e, u = i._payload, s = i._init;
            try {
              return Yi(s(u), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function ud(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case Y:
          return da(e.type);
        case Le:
          return da("Lazy");
        case me:
          return da("Suspense");
        case Ct:
          return da("SuspenseList");
        case N:
        case K:
        case Se:
          return io(e.type);
        case le:
          return io(e.type.render);
        case F:
          return wl(e.type);
        default:
          return "";
      }
    }
    function Wi(e) {
      try {
        var t = "", a = e;
        do
          t += ud(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function Pt(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var u = t.displayName || t.name || "";
      return u !== "" ? a + "(" + u + ")" : a;
    }
    function uo(e) {
      return e.displayName || "Context";
    }
    function At(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && g("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case hi:
          return "Fragment";
        case ar:
          return "Portal";
        case mi:
          return "Profiler";
        case Xa:
          return "StrictMode";
        case we:
          return "Suspense";
        case Me:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case k:
            var t = e;
            return uo(t) + ".Consumer";
          case yi:
            var a = e;
            return uo(a._context) + ".Provider";
          case re:
            return Pt(e, e.render, "ForwardRef");
          case ft:
            var i = e.displayName || null;
            return i !== null ? i : At(e.type) || "Memo";
          case ut: {
            var u = e, s = u._payload, f = u._init;
            try {
              return At(f(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function ns(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function gi(e) {
      return e.displayName || "Context";
    }
    function lt(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case ct:
          return "Cache";
        case be:
          var i = a;
          return gi(i) + ".Consumer";
        case ne:
          var u = a;
          return gi(u._context) + ".Provider";
        case it:
          return "DehydratedFragment";
        case le:
          return ns(a, a.render, "ForwardRef");
        case de:
          return "Fragment";
        case Y:
          return a;
        case j:
          return "Portal";
        case O:
          return "Root";
        case H:
          return "Text";
        case Le:
          return At(a);
        case se:
          return a === Xa ? "StrictMode" : "Mode";
        case Be:
          return "Offscreen";
        case pe:
          return "Profiler";
        case et:
          return "Scope";
        case me:
          return "Suspense";
        case Ct:
          return "SuspenseList";
        case kt:
          return "TracingMarker";
        case F:
        case N:
        case Qe:
        case K:
        case ye:
        case Se:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var oo = v.ReactDebugCurrentFrame, lr = null, Si = !1;
    function Or() {
      {
        if (lr === null)
          return null;
        var e = lr._debugOwner;
        if (e !== null && typeof e < "u")
          return lt(e);
      }
      return null;
    }
    function Ei() {
      return lr === null ? "" : Wi(lr);
    }
    function dn() {
      oo.getCurrentStack = null, lr = null, Si = !1;
    }
    function Kt(e) {
      oo.getCurrentStack = e === null ? null : Ei, lr = e, Si = !1;
    }
    function Tl() {
      return lr;
    }
    function Wn(e) {
      Si = e;
    }
    function Lr(e) {
      return "" + e;
    }
    function _a(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return wn(e), e;
        default:
          return "";
      }
    }
    var du = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function rs(e, t) {
      du[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || g("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || g("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function as(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function xl(e) {
      return e._valueTracker;
    }
    function pu(e) {
      e._valueTracker = null;
    }
    function od(e) {
      var t = "";
      return e && (as(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function ba(e) {
      var t = as(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      wn(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var u = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return u.call(this);
          },
          set: function(h) {
            wn(h), i = "" + h, s.call(this, h);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var f = {
          getValue: function() {
            return i;
          },
          setValue: function(h) {
            wn(h), i = "" + h;
          },
          stopTracking: function() {
            pu(e), delete e[t];
          }
        };
        return f;
      }
    }
    function ti(e) {
      xl(e) || (e._valueTracker = ba(e));
    }
    function Ci(e) {
      if (!e)
        return !1;
      var t = xl(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = od(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function Da(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var so = !1, co = !1, _l = !1, vu = !1;
    function fo(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function po(e, t) {
      var a = e, i = t.checked, u = ht({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return u;
    }
    function ni(e, t) {
      rs("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !co && (g("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Or() || "A component", t.type), co = !0), t.value !== void 0 && t.defaultValue !== void 0 && !so && (g("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Or() || "A component", t.type), so = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: _a(t.value != null ? t.value : i),
        controlled: fo(t)
      };
    }
    function S(e, t) {
      var a = e, i = t.checked;
      i != null && br(a, "checked", i, !1);
    }
    function _(e, t) {
      var a = e;
      {
        var i = fo(t);
        !a._wrapperState.controlled && i && !vu && (g("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), vu = !0), a._wrapperState.controlled && !i && !_l && (g("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), _l = !0);
      }
      S(e, t);
      var u = _a(t.value), s = t.type;
      if (u != null)
        s === "number" ? (u === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != u) && (a.value = Lr(u)) : a.value !== Lr(u) && (a.value = Lr(u));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? Ge(a, t.type, u) : t.hasOwnProperty("defaultValue") && Ge(a, t.type, _a(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function Q(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var u = t.type, s = u === "submit" || u === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var f = Lr(i._wrapperState.initialValue);
        a || f !== i.value && (i.value = f), i.defaultValue = f;
      }
      var h = i.name;
      h !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, h !== "" && (i.name = h);
    }
    function q(e, t) {
      var a = e;
      _(a, t), ve(a, t);
    }
    function ve(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        In(a, "name");
        for (var u = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < u.length; s++) {
          var f = u[s];
          if (!(f === e || f.form !== e.form)) {
            var h = Zh(f);
            if (!h)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            Ci(f), _(f, h);
          }
        }
      }
    }
    function Ge(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || Da(e.ownerDocument) !== e) && (a == null ? e.defaultValue = Lr(e._wrapperState.initialValue) : e.defaultValue !== Lr(a) && (e.defaultValue = Lr(a)));
    }
    var Ce = !1, qe = !1, bt = !1;
    function zt(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? d.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || qe || (qe = !0, g("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (bt || (bt = !0, g("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !Ce && (g("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), Ce = !0);
    }
    function un(e, t) {
      t.value != null && e.setAttribute("value", Lr(_a(t.value)));
    }
    var qt = Array.isArray;
    function Et(e) {
      return qt(e);
    }
    var Jt;
    Jt = !1;
    function yn() {
      var e = Or();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var bl = ["value", "defaultValue"];
    function is(e) {
      {
        rs("select", e);
        for (var t = 0; t < bl.length; t++) {
          var a = bl[t];
          if (e[a] != null) {
            var i = Et(e[a]);
            e.multiple && !i ? g("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, yn()) : !e.multiple && i && g("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, yn());
          }
        }
      }
    }
    function Qi(e, t, a, i) {
      var u = e.options;
      if (t) {
        for (var s = a, f = {}, h = 0; h < s.length; h++)
          f["$" + s[h]] = !0;
        for (var y = 0; y < u.length; y++) {
          var C = f.hasOwnProperty("$" + u[y].value);
          u[y].selected !== C && (u[y].selected = C), C && i && (u[y].defaultSelected = !0);
        }
      } else {
        for (var T = Lr(_a(a)), z = null, M = 0; M < u.length; M++) {
          if (u[M].value === T) {
            u[M].selected = !0, i && (u[M].defaultSelected = !0);
            return;
          }
          z === null && !u[M].disabled && (z = u[M]);
        }
        z !== null && (z.selected = !0);
      }
    }
    function ls(e, t) {
      return ht({}, t, {
        value: void 0
      });
    }
    function hu(e, t) {
      var a = e;
      is(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !Jt && (g("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Jt = !0);
    }
    function sd(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? Qi(a, !!t.multiple, i, !1) : t.defaultValue != null && Qi(a, !!t.multiple, t.defaultValue, !0);
    }
    function Ec(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var u = t.value;
      u != null ? Qi(a, !!t.multiple, u, !1) : i !== !!t.multiple && (t.defaultValue != null ? Qi(a, !!t.multiple, t.defaultValue, !0) : Qi(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function cd(e, t) {
      var a = e, i = t.value;
      i != null && Qi(a, !!t.multiple, i, !1);
    }
    var Rv = !1;
    function fd(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = ht({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: Lr(a._wrapperState.initialValue)
      });
      return i;
    }
    function dd(e, t) {
      var a = e;
      rs("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !Rv && (g("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Or() || "A component"), Rv = !0);
      var i = t.value;
      if (i == null) {
        var u = t.children, s = t.defaultValue;
        if (u != null) {
          g("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (Et(u)) {
              if (u.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              u = u[0];
            }
            s = u;
          }
        }
        s == null && (s = ""), i = s;
      }
      a._wrapperState = {
        initialValue: _a(i)
      };
    }
    function wv(e, t) {
      var a = e, i = _a(t.value), u = _a(t.defaultValue);
      if (i != null) {
        var s = Lr(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      u != null && (a.defaultValue = Lr(u));
    }
    function Tv(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function My(e, t) {
      wv(e, t);
    }
    var Gi = "http://www.w3.org/1999/xhtml", pd = "http://www.w3.org/1998/Math/MathML", vd = "http://www.w3.org/2000/svg";
    function hd(e) {
      switch (e) {
        case "svg":
          return vd;
        case "math":
          return pd;
        default:
          return Gi;
      }
    }
    function md(e, t) {
      return e == null || e === Gi ? hd(t) : e === vd && t === "foreignObject" ? Gi : e;
    }
    var xv = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, u) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, u);
        });
      } : e;
    }, Cc, _v = xv(function(e, t) {
      if (e.namespaceURI === vd && !("innerHTML" in e)) {
        Cc = Cc || document.createElement("div"), Cc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = Cc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), Qr = 1, Xi = 3, Un = 8, Ki = 9, yd = 11, vo = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === Xi) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, us = {
      animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
      background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
      borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
      borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
      borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
      borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
      borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
      borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
      borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
      borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
      fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
      gap: ["columnGap", "rowGap"],
      grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
      wordWrap: ["overflowWrap"]
    }, os = {
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
    function bv(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var Dv = ["Webkit", "ms", "Moz", "O"];
    Object.keys(os).forEach(function(e) {
      Dv.forEach(function(t) {
        os[bv(t, e)] = os[e];
      });
    });
    function Rc(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(os.hasOwnProperty(e) && os[e]) ? t + "px" : (sa(t, e), ("" + t).trim());
    }
    var kv = /([A-Z])/g, Ov = /^ms-/;
    function ho(e) {
      return e.replace(kv, "-$1").toLowerCase().replace(Ov, "-ms-");
    }
    var Lv = function() {
    };
    {
      var Uy = /^(?:webkit|moz|o)[A-Z]/, Ay = /^-ms-/, Nv = /-(.)/g, gd = /;\s*$/, Ri = {}, mu = {}, Mv = !1, ss = !1, zy = function(e) {
        return e.replace(Nv, function(t, a) {
          return a.toUpperCase();
        });
      }, Uv = function(e) {
        Ri.hasOwnProperty(e) && Ri[e] || (Ri[e] = !0, g(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          zy(e.replace(Ay, "ms-"))
        ));
      }, Sd = function(e) {
        Ri.hasOwnProperty(e) && Ri[e] || (Ri[e] = !0, g("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, Ed = function(e, t) {
        mu.hasOwnProperty(t) && mu[t] || (mu[t] = !0, g(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(gd, "")));
      }, Av = function(e, t) {
        Mv || (Mv = !0, g("`NaN` is an invalid value for the `%s` css style property.", e));
      }, zv = function(e, t) {
        ss || (ss = !0, g("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      Lv = function(e, t) {
        e.indexOf("-") > -1 ? Uv(e) : Uy.test(e) ? Sd(e) : gd.test(t) && Ed(e, t), typeof t == "number" && (isNaN(t) ? Av(e, t) : isFinite(t) || zv(e, t));
      };
    }
    var Fv = Lv;
    function Fy(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var u = e[i];
            if (u != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : ho(i)) + ":", t += Rc(i, u, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function Pv(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var u = i.indexOf("--") === 0;
          u || Fv(i, t[i]);
          var s = Rc(i, t[i], u);
          i === "float" && (i = "cssFloat"), u ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function Py(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function jv(e) {
      var t = {};
      for (var a in e)
        for (var i = us[a] || [a], u = 0; u < i.length; u++)
          t[i[u]] = a;
      return t;
    }
    function jy(e, t) {
      {
        if (!t)
          return;
        var a = jv(e), i = jv(t), u = {};
        for (var s in a) {
          var f = a[s], h = i[s];
          if (h && f !== h) {
            var y = f + "," + h;
            if (u[y])
              continue;
            u[y] = !0, g("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", Py(e[f]) ? "Removing" : "Updating", f, h);
          }
        }
      }
    }
    var ri = {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0
      // NOTE: menuitem's close tag should be omitted, but that causes problems.
    }, cs = ht({
      menuitem: !0
    }, ri), Hv = "__html";
    function wc(e, t) {
      if (t) {
        if (cs[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(Hv in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && g("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function Dl(e, t) {
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
    var fs = {
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
    }, Tc = {
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
    }, mo = {}, Hy = new RegExp("^(aria)-[" + ge + "]*$"), yo = new RegExp("^(aria)[A-Z][" + ge + "]*$");
    function Cd(e, t) {
      {
        if (_r.call(mo, t) && mo[t])
          return !0;
        if (yo.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = Tc.hasOwnProperty(a) ? a : null;
          if (i == null)
            return g("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), mo[t] = !0, !0;
          if (t !== i)
            return g("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), mo[t] = !0, !0;
        }
        if (Hy.test(t)) {
          var u = t.toLowerCase(), s = Tc.hasOwnProperty(u) ? u : null;
          if (s == null)
            return mo[t] = !0, !1;
          if (t !== s)
            return g("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), mo[t] = !0, !0;
        }
      }
      return !0;
    }
    function ds(e, t) {
      {
        var a = [];
        for (var i in t) {
          var u = Cd(e, i);
          u || a.push(i);
        }
        var s = a.map(function(f) {
          return "`" + f + "`";
        }).join(", ");
        a.length === 1 ? g("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && g("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function Rd(e, t) {
      Dl(e, t) || ds(e, t);
    }
    var wd = !1;
    function xc(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !wd && (wd = !0, e === "select" && t.multiple ? g("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : g("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var yu = function() {
    };
    {
      var ur = {}, Td = /^on./, _c = /^on[^A-Z]/, Vv = new RegExp("^(aria)-[" + ge + "]*$"), Bv = new RegExp("^(aria)[A-Z][" + ge + "]*$");
      yu = function(e, t, a, i) {
        if (_r.call(ur, t) && ur[t])
          return !0;
        var u = t.toLowerCase();
        if (u === "onfocusin" || u === "onfocusout")
          return g("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), ur[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, f = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var h = f.hasOwnProperty(u) ? f[u] : null;
          if (h != null)
            return g("Invalid event handler property `%s`. Did you mean `%s`?", t, h), ur[t] = !0, !0;
          if (Td.test(t))
            return g("Unknown event handler property `%s`. It will be ignored.", t), ur[t] = !0, !0;
        } else if (Td.test(t))
          return _c.test(t) && g("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), ur[t] = !0, !0;
        if (Vv.test(t) || Bv.test(t))
          return !0;
        if (u === "innerhtml")
          return g("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), ur[t] = !0, !0;
        if (u === "aria")
          return g("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), ur[t] = !0, !0;
        if (u === "is" && a !== null && a !== void 0 && typeof a != "string")
          return g("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), ur[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return g("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), ur[t] = !0, !0;
        var y = an(t), C = y !== null && y.type === Yn;
        if (fs.hasOwnProperty(u)) {
          var T = fs[u];
          if (T !== t)
            return g("Invalid DOM property `%s`. Did you mean `%s`?", t, T), ur[t] = !0, !0;
        } else if (!C && t !== u)
          return g("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, u), ur[t] = !0, !0;
        return typeof a == "boolean" && cn(t, a, y, !1) ? (a ? g('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : g('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), ur[t] = !0, !0) : C ? !0 : cn(t, a, y, !1) ? (ur[t] = !0, !1) : ((a === "false" || a === "true") && y !== null && y.type === Mn && (g("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), ur[t] = !0), !0);
      };
    }
    var $v = function(e, t, a) {
      {
        var i = [];
        for (var u in t) {
          var s = yu(e, u, t[u], a);
          s || i.push(u);
        }
        var f = i.map(function(h) {
          return "`" + h + "`";
        }).join(", ");
        i.length === 1 ? g("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e) : i.length > 1 && g("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e);
      }
    };
    function Iv(e, t, a) {
      Dl(e, t) || $v(e, t, a);
    }
    var xd = 1, bc = 2, ka = 4, _d = xd | bc | ka, gu = null;
    function Vy(e) {
      gu !== null && g("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), gu = e;
    }
    function By() {
      gu === null && g("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), gu = null;
    }
    function ps(e) {
      return e === gu;
    }
    function bd(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === Xi ? t.parentNode : t;
    }
    var Dc = null, Su = null, Yt = null;
    function kc(e) {
      var t = Po(e);
      if (t) {
        if (typeof Dc != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = Zh(a);
          Dc(t.stateNode, t.type, i);
        }
      }
    }
    function Oc(e) {
      Dc = e;
    }
    function go(e) {
      Su ? Yt ? Yt.push(e) : Yt = [e] : Su = e;
    }
    function Yv() {
      return Su !== null || Yt !== null;
    }
    function Lc() {
      if (Su) {
        var e = Su, t = Yt;
        if (Su = null, Yt = null, kc(e), t)
          for (var a = 0; a < t.length; a++)
            kc(t[a]);
      }
    }
    var So = function(e, t) {
      return e(t);
    }, vs = function() {
    }, kl = !1;
    function Wv() {
      var e = Yv();
      e && (vs(), Lc());
    }
    function Qv(e, t, a) {
      if (kl)
        return e(t, a);
      kl = !0;
      try {
        return So(e, t, a);
      } finally {
        kl = !1, Wv();
      }
    }
    function $y(e, t, a) {
      So = e, vs = a;
    }
    function Gv(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function Nc(e, t, a) {
      switch (e) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          return !!(a.disabled && Gv(t));
        default:
          return !1;
      }
    }
    function Ol(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = Zh(a);
      if (i === null)
        return null;
      var u = i[t];
      if (Nc(t, e.type, i))
        return null;
      if (u && typeof u != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof u + "` type.");
      return u;
    }
    var hs = !1;
    if (Nn)
      try {
        var Eu = {};
        Object.defineProperty(Eu, "passive", {
          get: function() {
            hs = !0;
          }
        }), window.addEventListener("test", Eu, Eu), window.removeEventListener("test", Eu, Eu);
      } catch {
        hs = !1;
      }
    function Mc(e, t, a, i, u, s, f, h, y) {
      var C = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, C);
      } catch (T) {
        this.onError(T);
      }
    }
    var Uc = Mc;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var Dd = document.createElement("react");
      Uc = function(t, a, i, u, s, f, h, y, C) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var T = document.createEvent("Event"), z = !1, M = !0, W = window.event, X = Object.getOwnPropertyDescriptor(window, "event");
        function J() {
          Dd.removeEventListener(Z, Xe, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = W);
        }
        var xe = Array.prototype.slice.call(arguments, 3);
        function Xe() {
          z = !0, J(), a.apply(i, xe), M = !1;
        }
        var Ve, Ut = !1, Dt = !1;
        function B($) {
          if (Ve = $.error, Ut = !0, Ve === null && $.colno === 0 && $.lineno === 0 && (Dt = !0), $.defaultPrevented && Ve != null && typeof Ve == "object")
            try {
              Ve._suppressLogging = !0;
            } catch {
            }
        }
        var Z = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", B), Dd.addEventListener(Z, Xe, !1), T.initEvent(Z, !1, !1), Dd.dispatchEvent(T), X && Object.defineProperty(window, "event", X), z && M && (Ut ? Dt && (Ve = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : Ve = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(Ve)), window.removeEventListener("error", B), !z)
          return J(), Mc.apply(this, arguments);
      };
    }
    var Xv = Uc, Eo = !1, Ac = null, Co = !1, wi = null, Kv = {
      onError: function(e) {
        Eo = !0, Ac = e;
      }
    };
    function Ll(e, t, a, i, u, s, f, h, y) {
      Eo = !1, Ac = null, Xv.apply(Kv, arguments);
    }
    function Ti(e, t, a, i, u, s, f, h, y) {
      if (Ll.apply(this, arguments), Eo) {
        var C = ys();
        Co || (Co = !0, wi = C);
      }
    }
    function ms() {
      if (Co) {
        var e = wi;
        throw Co = !1, wi = null, e;
      }
    }
    function qi() {
      return Eo;
    }
    function ys() {
      if (Eo) {
        var e = Ac;
        return Eo = !1, Ac = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Ro(e) {
      return e._reactInternals;
    }
    function Iy(e) {
      return e._reactInternals !== void 0;
    }
    function Cu(e, t) {
      e._reactInternals = t;
    }
    var Ye = (
      /*                      */
      0
    ), ai = (
      /*                */
      1
    ), xn = (
      /*                    */
      2
    ), Lt = (
      /*                       */
      4
    ), Oa = (
      /*                */
      16
    ), ii = (
      /*                 */
      32
    ), on = (
      /*                     */
      64
    ), Ie = (
      /*                   */
      128
    ), Gr = (
      /*            */
      256
    ), Cn = (
      /*                          */
      512
    ), Qn = (
      /*                     */
      1024
    ), Xr = (
      /*                      */
      2048
    ), La = (
      /*                    */
      4096
    ), An = (
      /*                   */
      8192
    ), wo = (
      /*             */
      16384
    ), qv = (
      /*               */
      32767
    ), gs = (
      /*                   */
      32768
    ), Kr = (
      /*                */
      65536
    ), zc = (
      /* */
      131072
    ), xi = (
      /*                       */
      1048576
    ), To = (
      /*                    */
      2097152
    ), Ji = (
      /*                 */
      4194304
    ), Fc = (
      /*                */
      8388608
    ), Nl = (
      /*               */
      16777216
    ), _i = (
      /*              */
      33554432
    ), Ml = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      Lt | Qn | 0
    ), Ul = xn | Lt | Oa | ii | Cn | La | An, Al = Lt | on | Cn | An, Zi = Xr | Oa, zn = Ji | Fc | To, Na = v.ReactCurrentOwner;
    function pa(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (xn | La)) !== Ye && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === O ? a : null;
    }
    function bi(e) {
      if (e.tag === me) {
        var t = e.memoizedState;
        if (t === null) {
          var a = e.alternate;
          a !== null && (t = a.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function Di(e) {
      return e.tag === O ? e.stateNode.containerInfo : null;
    }
    function Ru(e) {
      return pa(e) === e;
    }
    function Jv(e) {
      {
        var t = Na.current;
        if (t !== null && t.tag === F) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || g("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", lt(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var u = Ro(e);
      return u ? pa(u) === u : !1;
    }
    function Pc(e) {
      if (pa(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function jc(e) {
      var t = e.alternate;
      if (!t) {
        var a = pa(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var i = e, u = t; ; ) {
        var s = i.return;
        if (s === null)
          break;
        var f = s.alternate;
        if (f === null) {
          var h = s.return;
          if (h !== null) {
            i = u = h;
            continue;
          }
          break;
        }
        if (s.child === f.child) {
          for (var y = s.child; y; ) {
            if (y === i)
              return Pc(s), e;
            if (y === u)
              return Pc(s), t;
            y = y.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== u.return)
          i = s, u = f;
        else {
          for (var C = !1, T = s.child; T; ) {
            if (T === i) {
              C = !0, i = s, u = f;
              break;
            }
            if (T === u) {
              C = !0, u = s, i = f;
              break;
            }
            T = T.sibling;
          }
          if (!C) {
            for (T = f.child; T; ) {
              if (T === i) {
                C = !0, i = f, u = s;
                break;
              }
              if (T === u) {
                C = !0, u = f, i = s;
                break;
              }
              T = T.sibling;
            }
            if (!C)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== u)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== O)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function qr(e) {
      var t = jc(e);
      return t !== null ? Jr(t) : null;
    }
    function Jr(e) {
      if (e.tag === Y || e.tag === H)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = Jr(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function vn(e) {
      var t = jc(e);
      return t !== null ? Ma(t) : null;
    }
    function Ma(e) {
      if (e.tag === Y || e.tag === H)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== j) {
          var a = Ma(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var kd = m.unstable_scheduleCallback, Zv = m.unstable_cancelCallback, Od = m.unstable_shouldYield, Ld = m.unstable_requestPaint, Gn = m.unstable_now, Hc = m.unstable_getCurrentPriorityLevel, Ss = m.unstable_ImmediatePriority, zl = m.unstable_UserBlockingPriority, el = m.unstable_NormalPriority, Yy = m.unstable_LowPriority, wu = m.unstable_IdlePriority, Vc = m.unstable_yieldValue, eh = m.unstable_setDisableYieldValue, Tu = null, _n = null, Te = null, va = !1, Zr = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function xo(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return g("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        nt && (e = ht({}, e, {
          getLaneLabelMap: xu,
          injectProfilingHooks: Ua
        })), Tu = t.inject(e), _n = t;
      } catch (a) {
        g("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function Nd(e, t) {
      if (_n && typeof _n.onScheduleFiberRoot == "function")
        try {
          _n.onScheduleFiberRoot(Tu, e, t);
        } catch (a) {
          va || (va = !0, g("React instrumentation encountered an error: %s", a));
        }
    }
    function Md(e, t) {
      if (_n && typeof _n.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & Ie) === Ie;
          if (Ze) {
            var i;
            switch (t) {
              case Nr:
                i = Ss;
                break;
              case Oi:
                i = zl;
                break;
              case Aa:
                i = el;
                break;
              case za:
                i = wu;
                break;
              default:
                i = el;
                break;
            }
            _n.onCommitFiberRoot(Tu, e, i, a);
          }
        } catch (u) {
          va || (va = !0, g("React instrumentation encountered an error: %s", u));
        }
    }
    function Ud(e) {
      if (_n && typeof _n.onPostCommitFiberRoot == "function")
        try {
          _n.onPostCommitFiberRoot(Tu, e);
        } catch (t) {
          va || (va = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function Ad(e) {
      if (_n && typeof _n.onCommitFiberUnmount == "function")
        try {
          _n.onCommitFiberUnmount(Tu, e);
        } catch (t) {
          va || (va = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function gn(e) {
      if (typeof Vc == "function" && (eh(e), w(e)), _n && typeof _n.setStrictMode == "function")
        try {
          _n.setStrictMode(Tu, e);
        } catch (t) {
          va || (va = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function Ua(e) {
      Te = e;
    }
    function xu() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < Du; a++) {
          var i = ah(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function zd(e) {
      Te !== null && typeof Te.markCommitStarted == "function" && Te.markCommitStarted(e);
    }
    function Fd() {
      Te !== null && typeof Te.markCommitStopped == "function" && Te.markCommitStopped();
    }
    function ha(e) {
      Te !== null && typeof Te.markComponentRenderStarted == "function" && Te.markComponentRenderStarted(e);
    }
    function ma() {
      Te !== null && typeof Te.markComponentRenderStopped == "function" && Te.markComponentRenderStopped();
    }
    function Pd(e) {
      Te !== null && typeof Te.markComponentPassiveEffectMountStarted == "function" && Te.markComponentPassiveEffectMountStarted(e);
    }
    function th() {
      Te !== null && typeof Te.markComponentPassiveEffectMountStopped == "function" && Te.markComponentPassiveEffectMountStopped();
    }
    function tl(e) {
      Te !== null && typeof Te.markComponentPassiveEffectUnmountStarted == "function" && Te.markComponentPassiveEffectUnmountStarted(e);
    }
    function Fl() {
      Te !== null && typeof Te.markComponentPassiveEffectUnmountStopped == "function" && Te.markComponentPassiveEffectUnmountStopped();
    }
    function Bc(e) {
      Te !== null && typeof Te.markComponentLayoutEffectMountStarted == "function" && Te.markComponentLayoutEffectMountStarted(e);
    }
    function nh() {
      Te !== null && typeof Te.markComponentLayoutEffectMountStopped == "function" && Te.markComponentLayoutEffectMountStopped();
    }
    function Es(e) {
      Te !== null && typeof Te.markComponentLayoutEffectUnmountStarted == "function" && Te.markComponentLayoutEffectUnmountStarted(e);
    }
    function jd() {
      Te !== null && typeof Te.markComponentLayoutEffectUnmountStopped == "function" && Te.markComponentLayoutEffectUnmountStopped();
    }
    function Cs(e, t, a) {
      Te !== null && typeof Te.markComponentErrored == "function" && Te.markComponentErrored(e, t, a);
    }
    function ki(e, t, a) {
      Te !== null && typeof Te.markComponentSuspended == "function" && Te.markComponentSuspended(e, t, a);
    }
    function Rs(e) {
      Te !== null && typeof Te.markLayoutEffectsStarted == "function" && Te.markLayoutEffectsStarted(e);
    }
    function ws() {
      Te !== null && typeof Te.markLayoutEffectsStopped == "function" && Te.markLayoutEffectsStopped();
    }
    function _u(e) {
      Te !== null && typeof Te.markPassiveEffectsStarted == "function" && Te.markPassiveEffectsStarted(e);
    }
    function Hd() {
      Te !== null && typeof Te.markPassiveEffectsStopped == "function" && Te.markPassiveEffectsStopped();
    }
    function bu(e) {
      Te !== null && typeof Te.markRenderStarted == "function" && Te.markRenderStarted(e);
    }
    function rh() {
      Te !== null && typeof Te.markRenderYielded == "function" && Te.markRenderYielded();
    }
    function $c() {
      Te !== null && typeof Te.markRenderStopped == "function" && Te.markRenderStopped();
    }
    function Sn(e) {
      Te !== null && typeof Te.markRenderScheduled == "function" && Te.markRenderScheduled(e);
    }
    function Ic(e, t) {
      Te !== null && typeof Te.markForceUpdateScheduled == "function" && Te.markForceUpdateScheduled(e, t);
    }
    function Ts(e, t) {
      Te !== null && typeof Te.markStateUpdateScheduled == "function" && Te.markStateUpdateScheduled(e, t);
    }
    var We = (
      /*                         */
      0
    ), xt = (
      /*                 */
      1
    ), jt = (
      /*                    */
      2
    ), Zt = (
      /*               */
      8
    ), Ht = (
      /*              */
      16
    ), Fn = Math.clz32 ? Math.clz32 : xs, Zn = Math.log, Yc = Math.LN2;
    function xs(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (Zn(t) / Yc | 0) | 0;
    }
    var Du = 31, ae = (
      /*                        */
      0
    ), Ft = (
      /*                          */
      0
    ), tt = (
      /*                        */
      1
    ), Pl = (
      /*    */
      2
    ), li = (
      /*             */
      4
    ), wr = (
      /*            */
      8
    ), bn = (
      /*                     */
      16
    ), nl = (
      /*                */
      32
    ), jl = (
      /*                       */
      4194240
    ), ku = (
      /*                        */
      64
    ), Wc = (
      /*                        */
      128
    ), Qc = (
      /*                        */
      256
    ), Gc = (
      /*                        */
      512
    ), Xc = (
      /*                        */
      1024
    ), Kc = (
      /*                        */
      2048
    ), qc = (
      /*                        */
      4096
    ), Jc = (
      /*                        */
      8192
    ), Zc = (
      /*                        */
      16384
    ), Ou = (
      /*                       */
      32768
    ), ef = (
      /*                       */
      65536
    ), _o = (
      /*                       */
      131072
    ), bo = (
      /*                       */
      262144
    ), tf = (
      /*                       */
      524288
    ), _s = (
      /*                       */
      1048576
    ), nf = (
      /*                       */
      2097152
    ), bs = (
      /*                            */
      130023424
    ), Lu = (
      /*                             */
      4194304
    ), rf = (
      /*                             */
      8388608
    ), Ds = (
      /*                             */
      16777216
    ), af = (
      /*                             */
      33554432
    ), lf = (
      /*                             */
      67108864
    ), Vd = Lu, ks = (
      /*          */
      134217728
    ), Bd = (
      /*                          */
      268435455
    ), Os = (
      /*               */
      268435456
    ), Nu = (
      /*                        */
      536870912
    ), ya = (
      /*                   */
      1073741824
    );
    function ah(e) {
      {
        if (e & tt)
          return "Sync";
        if (e & Pl)
          return "InputContinuousHydration";
        if (e & li)
          return "InputContinuous";
        if (e & wr)
          return "DefaultHydration";
        if (e & bn)
          return "Default";
        if (e & nl)
          return "TransitionHydration";
        if (e & jl)
          return "Transition";
        if (e & bs)
          return "Retry";
        if (e & ks)
          return "SelectiveHydration";
        if (e & Os)
          return "IdleHydration";
        if (e & Nu)
          return "Idle";
        if (e & ya)
          return "Offscreen";
      }
    }
    var nn = -1, Mu = ku, uf = Lu;
    function Ls(e) {
      switch (Hl(e)) {
        case tt:
          return tt;
        case Pl:
          return Pl;
        case li:
          return li;
        case wr:
          return wr;
        case bn:
          return bn;
        case nl:
          return nl;
        case ku:
        case Wc:
        case Qc:
        case Gc:
        case Xc:
        case Kc:
        case qc:
        case Jc:
        case Zc:
        case Ou:
        case ef:
        case _o:
        case bo:
        case tf:
        case _s:
        case nf:
          return e & jl;
        case Lu:
        case rf:
        case Ds:
        case af:
        case lf:
          return e & bs;
        case ks:
          return ks;
        case Os:
          return Os;
        case Nu:
          return Nu;
        case ya:
          return ya;
        default:
          return g("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function of(e, t) {
      var a = e.pendingLanes;
      if (a === ae)
        return ae;
      var i = ae, u = e.suspendedLanes, s = e.pingedLanes, f = a & Bd;
      if (f !== ae) {
        var h = f & ~u;
        if (h !== ae)
          i = Ls(h);
        else {
          var y = f & s;
          y !== ae && (i = Ls(y));
        }
      } else {
        var C = a & ~u;
        C !== ae ? i = Ls(C) : s !== ae && (i = Ls(s));
      }
      if (i === ae)
        return ae;
      if (t !== ae && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & u) === ae) {
        var T = Hl(i), z = Hl(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          T >= z || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          T === bn && (z & jl) !== ae
        )
          return t;
      }
      (i & li) !== ae && (i |= a & bn);
      var M = e.entangledLanes;
      if (M !== ae)
        for (var W = e.entanglements, X = i & M; X > 0; ) {
          var J = Pn(X), xe = 1 << J;
          i |= W[J], X &= ~xe;
        }
      return i;
    }
    function ui(e, t) {
      for (var a = e.eventTimes, i = nn; t > 0; ) {
        var u = Pn(t), s = 1 << u, f = a[u];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function $d(e, t) {
      switch (e) {
        case tt:
        case Pl:
        case li:
          return t + 250;
        case wr:
        case bn:
        case nl:
        case ku:
        case Wc:
        case Qc:
        case Gc:
        case Xc:
        case Kc:
        case qc:
        case Jc:
        case Zc:
        case Ou:
        case ef:
        case _o:
        case bo:
        case tf:
        case _s:
        case nf:
          return t + 5e3;
        case Lu:
        case rf:
        case Ds:
        case af:
        case lf:
          return nn;
        case ks:
        case Os:
        case Nu:
        case ya:
          return nn;
        default:
          return g("Should have found matching lanes. This is a bug in React."), nn;
      }
    }
    function sf(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, u = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var h = Pn(f), y = 1 << h, C = s[h];
        C === nn ? ((y & i) === ae || (y & u) !== ae) && (s[h] = $d(y, t)) : C <= t && (e.expiredLanes |= y), f &= ~y;
      }
    }
    function ih(e) {
      return Ls(e.pendingLanes);
    }
    function cf(e) {
      var t = e.pendingLanes & -1073741825;
      return t !== ae ? t : t & ya ? ya : ae;
    }
    function lh(e) {
      return (e & tt) !== ae;
    }
    function Ns(e) {
      return (e & Bd) !== ae;
    }
    function Uu(e) {
      return (e & bs) === e;
    }
    function Id(e) {
      var t = tt | li | bn;
      return (e & t) === ae;
    }
    function Yd(e) {
      return (e & jl) === e;
    }
    function ff(e, t) {
      var a = Pl | li | wr | bn;
      return (t & a) !== ae;
    }
    function uh(e, t) {
      return (t & e.expiredLanes) !== ae;
    }
    function Wd(e) {
      return (e & jl) !== ae;
    }
    function Qd() {
      var e = Mu;
      return Mu <<= 1, (Mu & jl) === ae && (Mu = ku), e;
    }
    function oh() {
      var e = uf;
      return uf <<= 1, (uf & bs) === ae && (uf = Lu), e;
    }
    function Hl(e) {
      return e & -e;
    }
    function Ms(e) {
      return Hl(e);
    }
    function Pn(e) {
      return 31 - Fn(e);
    }
    function or(e) {
      return Pn(e);
    }
    function ea(e, t) {
      return (e & t) !== ae;
    }
    function Au(e, t) {
      return (e & t) === t;
    }
    function pt(e, t) {
      return e | t;
    }
    function Us(e, t) {
      return e & ~t;
    }
    function Gd(e, t) {
      return e & t;
    }
    function sh(e) {
      return e;
    }
    function ch(e, t) {
      return e !== Ft && e < t ? e : t;
    }
    function As(e) {
      for (var t = [], a = 0; a < Du; a++)
        t.push(e);
      return t;
    }
    function Do(e, t, a) {
      e.pendingLanes |= t, t !== Nu && (e.suspendedLanes = ae, e.pingedLanes = ae);
      var i = e.eventTimes, u = or(t);
      i[u] = a;
    }
    function fh(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var u = Pn(i), s = 1 << u;
        a[u] = nn, i &= ~s;
      }
    }
    function df(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function Xd(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = ae, e.pingedLanes = ae, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, u = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var h = Pn(f), y = 1 << h;
        i[h] = ae, u[h] = nn, s[h] = nn, f &= ~y;
      }
    }
    function pf(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, u = a; u; ) {
        var s = Pn(u), f = 1 << s;
        // Is this one of the newly entangled lanes?
        f & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), u &= ~f;
      }
    }
    function Kd(e, t) {
      var a = Hl(t), i;
      switch (a) {
        case li:
          i = Pl;
          break;
        case bn:
          i = wr;
          break;
        case ku:
        case Wc:
        case Qc:
        case Gc:
        case Xc:
        case Kc:
        case qc:
        case Jc:
        case Zc:
        case Ou:
        case ef:
        case _o:
        case bo:
        case tf:
        case _s:
        case nf:
        case Lu:
        case rf:
        case Ds:
        case af:
        case lf:
          i = nl;
          break;
        case Nu:
          i = Os;
          break;
        default:
          i = Ft;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== Ft ? Ft : i;
    }
    function zs(e, t, a) {
      if (Zr)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var u = or(a), s = 1 << u, f = i[u];
          f.add(t), a &= ~s;
        }
    }
    function dh(e, t) {
      if (Zr)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var u = or(t), s = 1 << u, f = a[u];
          f.size > 0 && (f.forEach(function(h) {
            var y = h.alternate;
            (y === null || !i.has(y)) && i.add(h);
          }), f.clear()), t &= ~s;
        }
    }
    function qd(e, t) {
      return null;
    }
    var Nr = tt, Oi = li, Aa = bn, za = Nu, Fs = Ft;
    function Fa() {
      return Fs;
    }
    function jn(e) {
      Fs = e;
    }
    function ph(e, t) {
      var a = Fs;
      try {
        return Fs = e, t();
      } finally {
        Fs = a;
      }
    }
    function vh(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function Ps(e, t) {
      return e > t ? e : t;
    }
    function er(e, t) {
      return e !== 0 && e < t;
    }
    function hh(e) {
      var t = Hl(e);
      return er(Nr, t) ? er(Oi, t) ? Ns(t) ? Aa : za : Oi : Nr;
    }
    function vf(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var js;
    function Tr(e) {
      js = e;
    }
    function Wy(e) {
      js(e);
    }
    var Ne;
    function ko(e) {
      Ne = e;
    }
    var hf;
    function mh(e) {
      hf = e;
    }
    var yh;
    function Hs(e) {
      yh = e;
    }
    var Vs;
    function Jd(e) {
      Vs = e;
    }
    var mf = !1, Bs = [], rl = null, Li = null, Ni = null, Dn = /* @__PURE__ */ new Map(), Mr = /* @__PURE__ */ new Map(), Ur = [], gh = [
      "mousedown",
      "mouseup",
      "touchcancel",
      "touchend",
      "touchstart",
      "auxclick",
      "dblclick",
      "pointercancel",
      "pointerdown",
      "pointerup",
      "dragend",
      "dragstart",
      "drop",
      "compositionend",
      "compositionstart",
      "keydown",
      "keypress",
      "keyup",
      "input",
      "textInput",
      // Intentionally camelCase
      "copy",
      "cut",
      "paste",
      "click",
      "change",
      "contextmenu",
      "reset",
      "submit"
    ];
    function Sh(e) {
      return gh.indexOf(e) > -1;
    }
    function oi(e, t, a, i, u) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: u,
        targetContainers: [i]
      };
    }
    function Zd(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          rl = null;
          break;
        case "dragenter":
        case "dragleave":
          Li = null;
          break;
        case "mouseover":
        case "mouseout":
          Ni = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          Dn.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          Mr.delete(i);
          break;
        }
      }
    }
    function ta(e, t, a, i, u, s) {
      if (e === null || e.nativeEvent !== s) {
        var f = oi(t, a, i, u, s);
        if (t !== null) {
          var h = Po(t);
          h !== null && Ne(h);
        }
        return f;
      }
      e.eventSystemFlags |= i;
      var y = e.targetContainers;
      return u !== null && y.indexOf(u) === -1 && y.push(u), e;
    }
    function Qy(e, t, a, i, u) {
      switch (t) {
        case "focusin": {
          var s = u;
          return rl = ta(rl, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var f = u;
          return Li = ta(Li, e, t, a, i, f), !0;
        }
        case "mouseover": {
          var h = u;
          return Ni = ta(Ni, e, t, a, i, h), !0;
        }
        case "pointerover": {
          var y = u, C = y.pointerId;
          return Dn.set(C, ta(Dn.get(C) || null, e, t, a, i, y)), !0;
        }
        case "gotpointercapture": {
          var T = u, z = T.pointerId;
          return Mr.set(z, ta(Mr.get(z) || null, e, t, a, i, T)), !0;
        }
      }
      return !1;
    }
    function ep(e) {
      var t = ec(e.target);
      if (t !== null) {
        var a = pa(t);
        if (a !== null) {
          var i = a.tag;
          if (i === me) {
            var u = bi(a);
            if (u !== null) {
              e.blockedOn = u, Vs(e.priority, function() {
                hf(a);
              });
              return;
            }
          } else if (i === O) {
            var s = a.stateNode;
            if (vf(s)) {
              e.blockedOn = Di(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function Eh(e) {
      for (var t = yh(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < Ur.length && er(t, Ur[i].priority); i++)
        ;
      Ur.splice(i, 0, a), i === 0 && ep(a);
    }
    function $s(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = Lo(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var u = e.nativeEvent, s = new u.constructor(u.type, u);
          Vy(s), u.target.dispatchEvent(s), By();
        } else {
          var f = Po(i);
          return f !== null && Ne(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function tp(e, t, a) {
      $s(e) && a.delete(t);
    }
    function Gy() {
      mf = !1, rl !== null && $s(rl) && (rl = null), Li !== null && $s(Li) && (Li = null), Ni !== null && $s(Ni) && (Ni = null), Dn.forEach(tp), Mr.forEach(tp);
    }
    function Vl(e, t) {
      e.blockedOn === t && (e.blockedOn = null, mf || (mf = !0, m.unstable_scheduleCallback(m.unstable_NormalPriority, Gy)));
    }
    function zu(e) {
      if (Bs.length > 0) {
        Vl(Bs[0], e);
        for (var t = 1; t < Bs.length; t++) {
          var a = Bs[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      rl !== null && Vl(rl, e), Li !== null && Vl(Li, e), Ni !== null && Vl(Ni, e);
      var i = function(h) {
        return Vl(h, e);
      };
      Dn.forEach(i), Mr.forEach(i);
      for (var u = 0; u < Ur.length; u++) {
        var s = Ur[u];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; Ur.length > 0; ) {
        var f = Ur[0];
        if (f.blockedOn !== null)
          break;
        ep(f), f.blockedOn === null && Ur.shift();
      }
    }
    var sr = v.ReactCurrentBatchConfig, Nt = !0;
    function Xn(e) {
      Nt = !!e;
    }
    function Hn() {
      return Nt;
    }
    function cr(e, t, a) {
      var i = yf(t), u;
      switch (i) {
        case Nr:
          u = ga;
          break;
        case Oi:
          u = Oo;
          break;
        case Aa:
        default:
          u = kn;
          break;
      }
      return u.bind(null, t, a, e);
    }
    function ga(e, t, a, i) {
      var u = Fa(), s = sr.transition;
      sr.transition = null;
      try {
        jn(Nr), kn(e, t, a, i);
      } finally {
        jn(u), sr.transition = s;
      }
    }
    function Oo(e, t, a, i) {
      var u = Fa(), s = sr.transition;
      sr.transition = null;
      try {
        jn(Oi), kn(e, t, a, i);
      } finally {
        jn(u), sr.transition = s;
      }
    }
    function kn(e, t, a, i) {
      Nt && Is(e, t, a, i);
    }
    function Is(e, t, a, i) {
      var u = Lo(e, t, a, i);
      if (u === null) {
        fg(e, t, i, Mi, a), Zd(e, i);
        return;
      }
      if (Qy(u, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (Zd(e, i), t & ka && Sh(e)) {
        for (; u !== null; ) {
          var s = Po(u);
          s !== null && Wy(s);
          var f = Lo(e, t, a, i);
          if (f === null && fg(e, t, i, Mi, a), f === u)
            break;
          u = f;
        }
        u !== null && i.stopPropagation();
        return;
      }
      fg(e, t, i, null, a);
    }
    var Mi = null;
    function Lo(e, t, a, i) {
      Mi = null;
      var u = bd(i), s = ec(u);
      if (s !== null) {
        var f = pa(s);
        if (f === null)
          s = null;
        else {
          var h = f.tag;
          if (h === me) {
            var y = bi(f);
            if (y !== null)
              return y;
            s = null;
          } else if (h === O) {
            var C = f.stateNode;
            if (vf(C))
              return Di(f);
            s = null;
          } else f !== s && (s = null);
        }
      }
      return Mi = s, null;
    }
    function yf(e) {
      switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return Nr;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return Oi;
        case "message": {
          var t = Hc();
          switch (t) {
            case Ss:
              return Nr;
            case zl:
              return Oi;
            case el:
            case Yy:
              return Aa;
            case wu:
              return za;
            default:
              return Aa;
          }
        }
        default:
          return Aa;
      }
    }
    function Ys(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function na(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function np(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function No(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var Sa = null, Mo = null, Fu = null;
    function Bl(e) {
      return Sa = e, Mo = Ws(), !0;
    }
    function gf() {
      Sa = null, Mo = null, Fu = null;
    }
    function al() {
      if (Fu)
        return Fu;
      var e, t = Mo, a = t.length, i, u = Ws(), s = u.length;
      for (e = 0; e < a && t[e] === u[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === u[s - i]; i++)
        ;
      var h = i > 1 ? 1 - i : void 0;
      return Fu = u.slice(e, h), Fu;
    }
    function Ws() {
      return "value" in Sa ? Sa.value : Sa.textContent;
    }
    function $l(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function Uo() {
      return !0;
    }
    function Qs() {
      return !1;
    }
    function xr(e) {
      function t(a, i, u, s, f) {
        this._reactName = a, this._targetInst = u, this.type = i, this.nativeEvent = s, this.target = f, this.currentTarget = null;
        for (var h in e)
          if (e.hasOwnProperty(h)) {
            var y = e[h];
            y ? this[h] = y(s) : this[h] = s[h];
          }
        var C = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return C ? this.isDefaultPrevented = Uo : this.isDefaultPrevented = Qs, this.isPropagationStopped = Qs, this;
      }
      return ht(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Uo);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Uo);
        },
        /**
         * We release all dispatched `SyntheticEvent`s after each event loop, adding
         * them back into the pool. This allows a way to hold onto a reference that
         * won't be added back into the pool.
         */
        persist: function() {
        },
        /**
         * Checks if this event should be released back into the pool.
         *
         * @return {boolean} True if this should not be released, false otherwise.
         */
        isPersistent: Uo
      }), t;
    }
    var Vn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Ui = xr(Vn), Ar = ht({}, Vn, {
      view: 0,
      detail: 0
    }), ra = xr(Ar), Sf, Gs, Pu;
    function Xy(e) {
      e !== Pu && (Pu && e.type === "mousemove" ? (Sf = e.screenX - Pu.screenX, Gs = e.screenY - Pu.screenY) : (Sf = 0, Gs = 0), Pu = e);
    }
    var si = ht({}, Ar, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: hn,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (Xy(e), Sf);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : Gs;
      }
    }), rp = xr(si), ap = ht({}, si, {
      dataTransfer: 0
    }), ju = xr(ap), ip = ht({}, Ar, {
      relatedTarget: 0
    }), il = xr(ip), Ch = ht({}, Vn, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Rh = xr(Ch), lp = ht({}, Vn, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), Ef = xr(lp), Ky = ht({}, Vn, {
      data: 0
    }), wh = xr(Ky), Th = wh, xh = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, Hu = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    };
    function qy(e) {
      if (e.key) {
        var t = xh[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = $l(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? Hu[e.keyCode] || "Unidentified" : "";
    }
    var Ao = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function _h(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = Ao[e];
      return i ? !!a[i] : !1;
    }
    function hn(e) {
      return _h;
    }
    var Jy = ht({}, Ar, {
      key: qy,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: hn,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? $l(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? $l(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), bh = xr(Jy), Zy = ht({}, si, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), Dh = xr(Zy), kh = ht({}, Ar, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: hn
    }), Oh = xr(kh), eg = ht({}, Vn, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Pa = xr(eg), up = ht({}, si, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : (
          // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
          "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        );
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : (
          // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
          "wheelDeltaY" in e ? -e.wheelDeltaY : (
            // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
            "wheelDelta" in e ? -e.wheelDelta : 0
          )
        );
      },
      deltaZ: 0,
      // Browsers without "deltaMode" is reporting in raw wheel delta where one
      // notch on the scroll is always +/- 120, roughly equivalent to pixels.
      // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
      // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
      deltaMode: 0
    }), tg = xr(up), Il = [9, 13, 27, 32], Xs = 229, ll = Nn && "CompositionEvent" in window, Yl = null;
    Nn && "documentMode" in document && (Yl = document.documentMode);
    var op = Nn && "TextEvent" in window && !Yl, Cf = Nn && (!ll || Yl && Yl > 8 && Yl <= 11), Lh = 32, Rf = String.fromCharCode(Lh);
    function ng() {
      wt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), wt("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), wt("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), wt("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var sp = !1;
    function Nh(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function wf(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function Tf(e, t) {
      return e === "keydown" && t.keyCode === Xs;
    }
    function cp(e, t) {
      switch (e) {
        case "keyup":
          return Il.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== Xs;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function xf(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function Mh(e) {
      return e.locale === "ko";
    }
    var Vu = !1;
    function fp(e, t, a, i, u) {
      var s, f;
      if (ll ? s = wf(t) : Vu ? cp(t, i) && (s = "onCompositionEnd") : Tf(t, i) && (s = "onCompositionStart"), !s)
        return null;
      Cf && !Mh(i) && (!Vu && s === "onCompositionStart" ? Vu = Bl(u) : s === "onCompositionEnd" && Vu && (f = al()));
      var h = Hh(a, s);
      if (h.length > 0) {
        var y = new wh(s, t, null, i, u);
        if (e.push({
          event: y,
          listeners: h
        }), f)
          y.data = f;
        else {
          var C = xf(i);
          C !== null && (y.data = C);
        }
      }
    }
    function _f(e, t) {
      switch (e) {
        case "compositionend":
          return xf(t);
        case "keypress":
          var a = t.which;
          return a !== Lh ? null : (sp = !0, Rf);
        case "textInput":
          var i = t.data;
          return i === Rf && sp ? null : i;
        default:
          return null;
      }
    }
    function dp(e, t) {
      if (Vu) {
        if (e === "compositionend" || !ll && cp(e, t)) {
          var a = al();
          return gf(), Vu = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!Nh(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return Cf && !Mh(t) ? null : t.data;
        default:
          return null;
      }
    }
    function bf(e, t, a, i, u) {
      var s;
      if (op ? s = _f(t, i) : s = dp(t, i), !s)
        return null;
      var f = Hh(a, "onBeforeInput");
      if (f.length > 0) {
        var h = new Th("onBeforeInput", "beforeinput", null, i, u);
        e.push({
          event: h,
          listeners: f
        }), h.data = s;
      }
    }
    function Uh(e, t, a, i, u, s, f) {
      fp(e, t, a, i, u), bf(e, t, a, i, u);
    }
    var rg = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    };
    function Ks(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!rg[e.type] : t === "textarea";
    }
    /**
     * Checks if an event is supported in the current execution environment.
     *
     * NOTE: This will not work correctly for non-generic events such as `change`,
     * `reset`, `load`, `error`, and `select`.
     *
     * Borrows from Modernizr.
     *
     * @param {string} eventNameSuffix Event name, e.g. "click".
     * @return {boolean} True if the event is supported.
     * @internal
     * @license Modernizr 3.0.0pre (Custom Build) | MIT
     */
    function ag(e) {
      if (!Nn)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function qs() {
      wt("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function Ah(e, t, a, i) {
      go(i);
      var u = Hh(t, "onChange");
      if (u.length > 0) {
        var s = new Ui("onChange", "change", null, a, i);
        e.push({
          event: s,
          listeners: u
        });
      }
    }
    var Wl = null, n = null;
    function r(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function l(e) {
      var t = [];
      Ah(t, n, e, bd(e)), Qv(o, t);
    }
    function o(e) {
      FC(e, 0);
    }
    function c(e) {
      var t = Mf(e);
      if (Ci(t))
        return e;
    }
    function p(e, t) {
      if (e === "change")
        return t;
    }
    var E = !1;
    Nn && (E = ag("input") && (!document.documentMode || document.documentMode > 9));
    function x(e, t) {
      Wl = e, n = t, Wl.attachEvent("onpropertychange", G);
    }
    function L() {
      Wl && (Wl.detachEvent("onpropertychange", G), Wl = null, n = null);
    }
    function G(e) {
      e.propertyName === "value" && c(n) && l(e);
    }
    function ue(e, t, a) {
      e === "focusin" ? (L(), x(t, a)) : e === "focusout" && L();
    }
    function ce(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return c(n);
    }
    function ie(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function De(e, t) {
      if (e === "click")
        return c(t);
    }
    function Ue(e, t) {
      if (e === "input" || e === "change")
        return c(t);
    }
    function Fe(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || Ge(e, "number", e.value);
    }
    function On(e, t, a, i, u, s, f) {
      var h = a ? Mf(a) : window, y, C;
      if (r(h) ? y = p : Ks(h) ? E ? y = Ue : (y = ce, C = ue) : ie(h) && (y = De), y) {
        var T = y(t, a);
        if (T) {
          Ah(e, T, i, u);
          return;
        }
      }
      C && C(t, h, a), t === "focusout" && Fe(h);
    }
    function V() {
      Qt("onMouseEnter", ["mouseout", "mouseover"]), Qt("onMouseLeave", ["mouseout", "mouseover"]), Qt("onPointerEnter", ["pointerout", "pointerover"]), Qt("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function A(e, t, a, i, u, s, f) {
      var h = t === "mouseover" || t === "pointerover", y = t === "mouseout" || t === "pointerout";
      if (h && !ps(i)) {
        var C = i.relatedTarget || i.fromElement;
        if (C && (ec(C) || _p(C)))
          return;
      }
      if (!(!y && !h)) {
        var T;
        if (u.window === u)
          T = u;
        else {
          var z = u.ownerDocument;
          z ? T = z.defaultView || z.parentWindow : T = window;
        }
        var M, W;
        if (y) {
          var X = i.relatedTarget || i.toElement;
          if (M = a, W = X ? ec(X) : null, W !== null) {
            var J = pa(W);
            (W !== J || W.tag !== Y && W.tag !== H) && (W = null);
          }
        } else
          M = null, W = a;
        if (M !== W) {
          var xe = rp, Xe = "onMouseLeave", Ve = "onMouseEnter", Ut = "mouse";
          (t === "pointerout" || t === "pointerover") && (xe = Dh, Xe = "onPointerLeave", Ve = "onPointerEnter", Ut = "pointer");
          var Dt = M == null ? T : Mf(M), B = W == null ? T : Mf(W), Z = new xe(Xe, Ut + "leave", M, i, u);
          Z.target = Dt, Z.relatedTarget = B;
          var $ = null, fe = ec(u);
          if (fe === a) {
            var Oe = new xe(Ve, Ut + "enter", W, i, u);
            Oe.target = B, Oe.relatedTarget = Dt, $ = Oe;
          }
          Dx(e, Z, $, M, W);
        }
      }
    }
    function I(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var oe = typeof Object.is == "function" ? Object.is : I;
    function Ae(e, t) {
      if (oe(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var u = 0; u < a.length; u++) {
        var s = a[u];
        if (!_r.call(t, s) || !oe(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function Ke(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function Je(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function at(e, t) {
      for (var a = Ke(e), i = 0, u = 0; a; ) {
        if (a.nodeType === Xi) {
          if (u = i + a.textContent.length, i <= t && u >= t)
            return {
              node: a,
              offset: t - i
            };
          i = u;
        }
        a = Ke(Je(a));
      }
    }
    function tr(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var u = i.anchorNode, s = i.anchorOffset, f = i.focusNode, h = i.focusOffset;
      try {
        u.nodeType, f.nodeType;
      } catch {
        return null;
      }
      return Vt(e, u, s, f, h);
    }
    function Vt(e, t, a, i, u) {
      var s = 0, f = -1, h = -1, y = 0, C = 0, T = e, z = null;
      e: for (; ; ) {
        for (var M = null; T === t && (a === 0 || T.nodeType === Xi) && (f = s + a), T === i && (u === 0 || T.nodeType === Xi) && (h = s + u), T.nodeType === Xi && (s += T.nodeValue.length), (M = T.firstChild) !== null; )
          z = T, T = M;
        for (; ; ) {
          if (T === e)
            break e;
          if (z === t && ++y === a && (f = s), z === i && ++C === u && (h = s), (M = T.nextSibling) !== null)
            break;
          T = z, z = T.parentNode;
        }
        T = M;
      }
      return f === -1 || h === -1 ? null : {
        start: f,
        end: h
      };
    }
    function Ql(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var u = i.getSelection(), s = e.textContent.length, f = Math.min(t.start, s), h = t.end === void 0 ? f : Math.min(t.end, s);
        if (!u.extend && f > h) {
          var y = h;
          h = f, f = y;
        }
        var C = at(e, f), T = at(e, h);
        if (C && T) {
          if (u.rangeCount === 1 && u.anchorNode === C.node && u.anchorOffset === C.offset && u.focusNode === T.node && u.focusOffset === T.offset)
            return;
          var z = a.createRange();
          z.setStart(C.node, C.offset), u.removeAllRanges(), f > h ? (u.addRange(z), u.extend(T.node, T.offset)) : (z.setEnd(T.node, T.offset), u.addRange(z));
        }
      }
    }
    function zh(e) {
      return e && e.nodeType === Xi;
    }
    function _C(e, t) {
      return !e || !t ? !1 : e === t ? !0 : zh(e) ? !1 : zh(t) ? _C(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function cx(e) {
      return e && e.ownerDocument && _C(e.ownerDocument.documentElement, e);
    }
    function fx(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function bC() {
      for (var e = window, t = Da(); t instanceof e.HTMLIFrameElement; ) {
        if (fx(t))
          e = t.contentWindow;
        else
          return t;
        t = Da(e.document);
      }
      return t;
    }
    function ig(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function dx() {
      var e = bC();
      return {
        focusedElem: e,
        selectionRange: ig(e) ? vx(e) : null
      };
    }
    function px(e) {
      var t = bC(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && cx(a)) {
        i !== null && ig(a) && hx(a, i);
        for (var u = [], s = a; s = s.parentNode; )
          s.nodeType === Qr && u.push({
            element: s,
            left: s.scrollLeft,
            top: s.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var f = 0; f < u.length; f++) {
          var h = u[f];
          h.element.scrollLeft = h.left, h.element.scrollTop = h.top;
        }
      }
    }
    function vx(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = tr(e), t || {
        start: 0,
        end: 0
      };
    }
    function hx(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : Ql(e, t);
    }
    var mx = Nn && "documentMode" in document && document.documentMode <= 11;
    function yx() {
      wt("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var Df = null, lg = null, pp = null, ug = !1;
    function gx(e) {
      if ("selectionStart" in e && ig(e))
        return {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, a = t.getSelection();
      return {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      };
    }
    function Sx(e) {
      return e.window === e ? e.document : e.nodeType === Ki ? e : e.ownerDocument;
    }
    function DC(e, t, a) {
      var i = Sx(a);
      if (!(ug || Df == null || Df !== Da(i))) {
        var u = gx(Df);
        if (!pp || !Ae(pp, u)) {
          pp = u;
          var s = Hh(lg, "onSelect");
          if (s.length > 0) {
            var f = new Ui("onSelect", "select", null, t, a);
            e.push({
              event: f,
              listeners: s
            }), f.target = Df;
          }
        }
      }
    }
    function Ex(e, t, a, i, u, s, f) {
      var h = a ? Mf(a) : window;
      switch (t) {
        case "focusin":
          (Ks(h) || h.contentEditable === "true") && (Df = h, lg = a, pp = null);
          break;
        case "focusout":
          Df = null, lg = null, pp = null;
          break;
        case "mousedown":
          ug = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ug = !1, DC(e, i, u);
          break;
        case "selectionchange":
          if (mx)
            break;
        case "keydown":
        case "keyup":
          DC(e, i, u);
      }
    }
    function Fh(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var kf = {
      animationend: Fh("Animation", "AnimationEnd"),
      animationiteration: Fh("Animation", "AnimationIteration"),
      animationstart: Fh("Animation", "AnimationStart"),
      transitionend: Fh("Transition", "TransitionEnd")
    }, og = {}, kC = {};
    Nn && (kC = document.createElement("div").style, "AnimationEvent" in window || (delete kf.animationend.animation, delete kf.animationiteration.animation, delete kf.animationstart.animation), "TransitionEvent" in window || delete kf.transitionend.transition);
    function Ph(e) {
      if (og[e])
        return og[e];
      if (!kf[e])
        return e;
      var t = kf[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in kC)
          return og[e] = t[a];
      return e;
    }
    var OC = Ph("animationend"), LC = Ph("animationiteration"), NC = Ph("animationstart"), MC = Ph("transitionend"), UC = /* @__PURE__ */ new Map(), AC = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function zo(e, t) {
      UC.set(e, t), wt(t, [e]);
    }
    function Cx() {
      for (var e = 0; e < AC.length; e++) {
        var t = AC[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        zo(a, "on" + i);
      }
      zo(OC, "onAnimationEnd"), zo(LC, "onAnimationIteration"), zo(NC, "onAnimationStart"), zo("dblclick", "onDoubleClick"), zo("focusin", "onFocus"), zo("focusout", "onBlur"), zo(MC, "onTransitionEnd");
    }
    function Rx(e, t, a, i, u, s, f) {
      var h = UC.get(t);
      if (h !== void 0) {
        var y = Ui, C = t;
        switch (t) {
          case "keypress":
            if ($l(i) === 0)
              return;
          case "keydown":
          case "keyup":
            y = bh;
            break;
          case "focusin":
            C = "focus", y = il;
            break;
          case "focusout":
            C = "blur", y = il;
            break;
          case "beforeblur":
          case "afterblur":
            y = il;
            break;
          case "click":
            if (i.button === 2)
              return;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            y = rp;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = ju;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = Oh;
            break;
          case OC:
          case LC:
          case NC:
            y = Rh;
            break;
          case MC:
            y = Pa;
            break;
          case "scroll":
            y = ra;
            break;
          case "wheel":
            y = tg;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = Ef;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = Dh;
            break;
        }
        var T = (s & ka) !== 0;
        {
          var z = !T && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", M = _x(a, h, i.type, T, z);
          if (M.length > 0) {
            var W = new y(h, C, null, i, u);
            e.push({
              event: W,
              listeners: M
            });
          }
        }
      }
    }
    Cx(), V(), qs(), yx(), ng();
    function wx(e, t, a, i, u, s, f) {
      Rx(e, t, a, i, u, s);
      var h = (s & _d) === 0;
      h && (A(e, t, a, i, u), On(e, t, a, i, u), Ex(e, t, a, i, u), Uh(e, t, a, i, u));
    }
    var vp = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], sg = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(vp));
    function zC(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, Ti(i, t, void 0, e), e.currentTarget = null;
    }
    function Tx(e, t, a) {
      var i;
      if (a)
        for (var u = t.length - 1; u >= 0; u--) {
          var s = t[u], f = s.instance, h = s.currentTarget, y = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          zC(e, y, h), i = f;
        }
      else
        for (var C = 0; C < t.length; C++) {
          var T = t[C], z = T.instance, M = T.currentTarget, W = T.listener;
          if (z !== i && e.isPropagationStopped())
            return;
          zC(e, W, M), i = z;
        }
    }
    function FC(e, t) {
      for (var a = (t & ka) !== 0, i = 0; i < e.length; i++) {
        var u = e[i], s = u.event, f = u.listeners;
        Tx(s, f, a);
      }
      ms();
    }
    function xx(e, t, a, i, u) {
      var s = bd(a), f = [];
      wx(f, e, i, a, s, t), FC(f, t);
    }
    function En(e, t) {
      sg.has(e) || g('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = tb(t), u = kx(e);
      i.has(u) || (PC(t, e, bc, a), i.add(u));
    }
    function cg(e, t, a) {
      sg.has(e) && !t && g('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= ka), PC(a, e, i, t);
    }
    var jh = "_reactListening" + Math.random().toString(36).slice(2);
    function hp(e) {
      if (!e[jh]) {
        e[jh] = !0, yt.forEach(function(a) {
          a !== "selectionchange" && (sg.has(a) || cg(a, !1, e), cg(a, !0, e));
        });
        var t = e.nodeType === Ki ? e : e.ownerDocument;
        t !== null && (t[jh] || (t[jh] = !0, cg("selectionchange", !1, t)));
      }
    }
    function PC(e, t, a, i, u) {
      var s = cr(e, t, a), f = void 0;
      hs && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? np(e, t, s, f) : na(e, t, s) : f !== void 0 ? No(e, t, s, f) : Ys(e, t, s);
    }
    function jC(e, t) {
      return e === t || e.nodeType === Un && e.parentNode === t;
    }
    function fg(e, t, a, i, u) {
      var s = i;
      if (!(t & xd) && !(t & bc)) {
        var f = u;
        if (i !== null) {
          var h = i;
          e: for (; ; ) {
            if (h === null)
              return;
            var y = h.tag;
            if (y === O || y === j) {
              var C = h.stateNode.containerInfo;
              if (jC(C, f))
                break;
              if (y === j)
                for (var T = h.return; T !== null; ) {
                  var z = T.tag;
                  if (z === O || z === j) {
                    var M = T.stateNode.containerInfo;
                    if (jC(M, f))
                      return;
                  }
                  T = T.return;
                }
              for (; C !== null; ) {
                var W = ec(C);
                if (W === null)
                  return;
                var X = W.tag;
                if (X === Y || X === H) {
                  h = s = W;
                  continue e;
                }
                C = C.parentNode;
              }
            }
            h = h.return;
          }
        }
      }
      Qv(function() {
        return xx(e, t, a, s);
      });
    }
    function mp(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function _x(e, t, a, i, u, s) {
      for (var f = t !== null ? t + "Capture" : null, h = i ? f : t, y = [], C = e, T = null; C !== null; ) {
        var z = C, M = z.stateNode, W = z.tag;
        if (W === Y && M !== null && (T = M, h !== null)) {
          var X = Ol(C, h);
          X != null && y.push(mp(C, X, T));
        }
        if (u)
          break;
        C = C.return;
      }
      return y;
    }
    function Hh(e, t) {
      for (var a = t + "Capture", i = [], u = e; u !== null; ) {
        var s = u, f = s.stateNode, h = s.tag;
        if (h === Y && f !== null) {
          var y = f, C = Ol(u, a);
          C != null && i.unshift(mp(u, C, y));
          var T = Ol(u, t);
          T != null && i.push(mp(u, T, y));
        }
        u = u.return;
      }
      return i;
    }
    function Of(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== Y);
      return e || null;
    }
    function bx(e, t) {
      for (var a = e, i = t, u = 0, s = a; s; s = Of(s))
        u++;
      for (var f = 0, h = i; h; h = Of(h))
        f++;
      for (; u - f > 0; )
        a = Of(a), u--;
      for (; f - u > 0; )
        i = Of(i), f--;
      for (var y = u; y--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = Of(a), i = Of(i);
      }
      return null;
    }
    function HC(e, t, a, i, u) {
      for (var s = t._reactName, f = [], h = a; h !== null && h !== i; ) {
        var y = h, C = y.alternate, T = y.stateNode, z = y.tag;
        if (C !== null && C === i)
          break;
        if (z === Y && T !== null) {
          var M = T;
          if (u) {
            var W = Ol(h, s);
            W != null && f.unshift(mp(h, W, M));
          } else if (!u) {
            var X = Ol(h, s);
            X != null && f.push(mp(h, X, M));
          }
        }
        h = h.return;
      }
      f.length !== 0 && e.push({
        event: t,
        listeners: f
      });
    }
    function Dx(e, t, a, i, u) {
      var s = i && u ? bx(i, u) : null;
      i !== null && HC(e, t, i, s, !1), u !== null && a !== null && HC(e, a, u, s, !0);
    }
    function kx(e, t) {
      return e + "__bubble";
    }
    var ja = !1, yp = "dangerouslySetInnerHTML", Vh = "suppressContentEditableWarning", Fo = "suppressHydrationWarning", VC = "autoFocus", Js = "children", Zs = "style", Bh = "__html", dg, $h, gp, BC, Ih, $C, IC;
    dg = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, $h = function(e, t) {
      Rd(e, t), xc(e, t), Iv(e, t, {
        registrationNameDependencies: vt,
        possibleRegistrationNames: gt
      });
    }, $C = Nn && !document.documentMode, gp = function(e, t, a) {
      if (!ja) {
        var i = Yh(a), u = Yh(t);
        u !== i && (ja = !0, g("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(u), JSON.stringify(i)));
      }
    }, BC = function(e) {
      if (!ja) {
        ja = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), g("Extra attributes from the server: %s", t);
      }
    }, Ih = function(e, t) {
      t === !1 ? g("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : g("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, IC = function(e, t) {
      var a = e.namespaceURI === Gi ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var Ox = /\r\n?/g, Lx = /\u0000|\uFFFD/g;
    function Yh(e) {
      qn(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(Ox, `
`).replace(Lx, "");
    }
    function Wh(e, t, a, i) {
      var u = Yh(t), s = Yh(e);
      if (s !== u && (i && (ja || (ja = !0, g('Text content did not match. Server: "%s" Client: "%s"', s, u))), a && Pe))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function YC(e) {
      return e.nodeType === Ki ? e : e.ownerDocument;
    }
    function Nx() {
    }
    function Qh(e) {
      e.onclick = Nx;
    }
    function Mx(e, t, a, i, u) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === Zs)
            f && Object.freeze(f), Pv(t, f);
          else if (s === yp) {
            var h = f ? f[Bh] : void 0;
            h != null && _v(t, h);
          } else if (s === Js)
            if (typeof f == "string") {
              var y = e !== "textarea" || f !== "";
              y && vo(t, f);
            } else typeof f == "number" && vo(t, "" + f);
          else s === Vh || s === Fo || s === VC || (vt.hasOwnProperty(s) ? f != null && (typeof f != "function" && Ih(s, f), s === "onScroll" && En("scroll", t)) : f != null && br(t, s, f, u));
        }
    }
    function Ux(e, t, a, i) {
      for (var u = 0; u < t.length; u += 2) {
        var s = t[u], f = t[u + 1];
        s === Zs ? Pv(e, f) : s === yp ? _v(e, f) : s === Js ? vo(e, f) : br(e, s, f, i);
      }
    }
    function Ax(e, t, a, i) {
      var u, s = YC(a), f, h = i;
      if (h === Gi && (h = hd(e)), h === Gi) {
        if (u = Dl(e, t), !u && e !== e.toLowerCase() && g("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var y = s.createElement("div");
          y.innerHTML = "<script><\/script>";
          var C = y.firstChild;
          f = y.removeChild(C);
        } else if (typeof t.is == "string")
          f = s.createElement(e, {
            is: t.is
          });
        else if (f = s.createElement(e), e === "select") {
          var T = f;
          t.multiple ? T.multiple = !0 : t.size && (T.size = t.size);
        }
      } else
        f = s.createElementNS(h, e);
      return h === Gi && !u && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !_r.call(dg, e) && (dg[e] = !0, g("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function zx(e, t) {
      return YC(t).createTextNode(e);
    }
    function Fx(e, t, a, i) {
      var u = Dl(t, a);
      $h(t, a);
      var s;
      switch (t) {
        case "dialog":
          En("cancel", e), En("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          En("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var f = 0; f < vp.length; f++)
            En(vp[f], e);
          s = a;
          break;
        case "source":
          En("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          En("error", e), En("load", e), s = a;
          break;
        case "details":
          En("toggle", e), s = a;
          break;
        case "input":
          ni(e, a), s = po(e, a), En("invalid", e);
          break;
        case "option":
          zt(e, a), s = a;
          break;
        case "select":
          hu(e, a), s = ls(e, a), En("invalid", e);
          break;
        case "textarea":
          dd(e, a), s = fd(e, a), En("invalid", e);
          break;
        default:
          s = a;
      }
      switch (wc(t, s), Mx(t, e, i, s, u), t) {
        case "input":
          ti(e), Q(e, a, !1);
          break;
        case "textarea":
          ti(e), Tv(e);
          break;
        case "option":
          un(e, a);
          break;
        case "select":
          sd(e, a);
          break;
        default:
          typeof s.onClick == "function" && Qh(e);
          break;
      }
    }
    function Px(e, t, a, i, u) {
      $h(t, i);
      var s = null, f, h;
      switch (t) {
        case "input":
          f = po(e, a), h = po(e, i), s = [];
          break;
        case "select":
          f = ls(e, a), h = ls(e, i), s = [];
          break;
        case "textarea":
          f = fd(e, a), h = fd(e, i), s = [];
          break;
        default:
          f = a, h = i, typeof f.onClick != "function" && typeof h.onClick == "function" && Qh(e);
          break;
      }
      wc(t, h);
      var y, C, T = null;
      for (y in f)
        if (!(h.hasOwnProperty(y) || !f.hasOwnProperty(y) || f[y] == null))
          if (y === Zs) {
            var z = f[y];
            for (C in z)
              z.hasOwnProperty(C) && (T || (T = {}), T[C] = "");
          } else y === yp || y === Js || y === Vh || y === Fo || y === VC || (vt.hasOwnProperty(y) ? s || (s = []) : (s = s || []).push(y, null));
      for (y in h) {
        var M = h[y], W = f?.[y];
        if (!(!h.hasOwnProperty(y) || M === W || M == null && W == null))
          if (y === Zs)
            if (M && Object.freeze(M), W) {
              for (C in W)
                W.hasOwnProperty(C) && (!M || !M.hasOwnProperty(C)) && (T || (T = {}), T[C] = "");
              for (C in M)
                M.hasOwnProperty(C) && W[C] !== M[C] && (T || (T = {}), T[C] = M[C]);
            } else
              T || (s || (s = []), s.push(y, T)), T = M;
          else if (y === yp) {
            var X = M ? M[Bh] : void 0, J = W ? W[Bh] : void 0;
            X != null && J !== X && (s = s || []).push(y, X);
          } else y === Js ? (typeof M == "string" || typeof M == "number") && (s = s || []).push(y, "" + M) : y === Vh || y === Fo || (vt.hasOwnProperty(y) ? (M != null && (typeof M != "function" && Ih(y, M), y === "onScroll" && En("scroll", e)), !s && W !== M && (s = [])) : (s = s || []).push(y, M));
      }
      return T && (jy(T, h[Zs]), (s = s || []).push(Zs, T)), s;
    }
    function jx(e, t, a, i, u) {
      a === "input" && u.type === "radio" && u.name != null && S(e, u);
      var s = Dl(a, i), f = Dl(a, u);
      switch (Ux(e, t, s, f), a) {
        case "input":
          _(e, u);
          break;
        case "textarea":
          wv(e, u);
          break;
        case "select":
          Ec(e, u);
          break;
      }
    }
    function Hx(e) {
      {
        var t = e.toLowerCase();
        return fs.hasOwnProperty(t) && fs[t] || null;
      }
    }
    function Vx(e, t, a, i, u, s, f) {
      var h, y;
      switch (h = Dl(t, a), $h(t, a), t) {
        case "dialog":
          En("cancel", e), En("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          En("load", e);
          break;
        case "video":
        case "audio":
          for (var C = 0; C < vp.length; C++)
            En(vp[C], e);
          break;
        case "source":
          En("error", e);
          break;
        case "img":
        case "image":
        case "link":
          En("error", e), En("load", e);
          break;
        case "details":
          En("toggle", e);
          break;
        case "input":
          ni(e, a), En("invalid", e);
          break;
        case "option":
          zt(e, a);
          break;
        case "select":
          hu(e, a), En("invalid", e);
          break;
        case "textarea":
          dd(e, a), En("invalid", e);
          break;
      }
      wc(t, a);
      {
        y = /* @__PURE__ */ new Set();
        for (var T = e.attributes, z = 0; z < T.length; z++) {
          var M = T[z].name.toLowerCase();
          switch (M) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              y.add(T[z].name);
          }
        }
      }
      var W = null;
      for (var X in a)
        if (a.hasOwnProperty(X)) {
          var J = a[X];
          if (X === Js)
            typeof J == "string" ? e.textContent !== J && (a[Fo] !== !0 && Wh(e.textContent, J, s, f), W = [Js, J]) : typeof J == "number" && e.textContent !== "" + J && (a[Fo] !== !0 && Wh(e.textContent, J, s, f), W = [Js, "" + J]);
          else if (vt.hasOwnProperty(X))
            J != null && (typeof J != "function" && Ih(X, J), X === "onScroll" && En("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof h == "boolean") {
            var xe = void 0, Xe = an(X);
            if (a[Fo] !== !0) {
              if (!(X === Vh || X === Fo || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              X === "value" || X === "checked" || X === "selected")) {
                if (X === yp) {
                  var Ve = e.innerHTML, Ut = J ? J[Bh] : void 0;
                  if (Ut != null) {
                    var Dt = IC(e, Ut);
                    Dt !== Ve && gp(X, Ve, Dt);
                  }
                } else if (X === Zs) {
                  if (y.delete(X), $C) {
                    var B = Fy(J);
                    xe = e.getAttribute("style"), B !== xe && gp(X, xe, B);
                  }
                } else if (h)
                  y.delete(X.toLowerCase()), xe = ou(e, X, J), J !== xe && gp(X, xe, J);
                else if (!mn(X, Xe, h) && !Jn(X, J, Xe, h)) {
                  var Z = !1;
                  if (Xe !== null)
                    y.delete(Xe.attributeName), xe = Sl(e, X, J, Xe);
                  else {
                    var $ = i;
                    if ($ === Gi && ($ = hd(t)), $ === Gi)
                      y.delete(X.toLowerCase());
                    else {
                      var fe = Hx(X);
                      fe !== null && fe !== X && (Z = !0, y.delete(fe)), y.delete(X);
                    }
                    xe = ou(e, X, J);
                  }
                  var Oe = P;
                  !Oe && J !== xe && !Z && gp(X, xe, J);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      y.size > 0 && a[Fo] !== !0 && BC(y), t) {
        case "input":
          ti(e), Q(e, a, !0);
          break;
        case "textarea":
          ti(e), Tv(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && Qh(e);
          break;
      }
      return W;
    }
    function Bx(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function pg(e, t) {
      {
        if (ja)
          return;
        ja = !0, g("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function vg(e, t) {
      {
        if (ja)
          return;
        ja = !0, g('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function hg(e, t, a) {
      {
        if (ja)
          return;
        ja = !0, g("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function mg(e, t) {
      {
        if (t === "" || ja)
          return;
        ja = !0, g('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function $x(e, t, a) {
      switch (t) {
        case "input":
          q(e, a);
          return;
        case "textarea":
          My(e, a);
          return;
        case "select":
          cd(e, a);
          return;
      }
    }
    var Sp = function() {
    }, Ep = function() {
    };
    {
      var Ix = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], WC = [
        "applet",
        "caption",
        "html",
        "table",
        "td",
        "th",
        "marquee",
        "object",
        "template",
        // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
        // TODO: Distinguish by namespace here -- for <title>, including it here
        // errs on the side of fewer warnings
        "foreignObject",
        "desc",
        "title"
      ], Yx = WC.concat(["button"]), Wx = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], QC = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      Ep = function(e, t) {
        var a = ht({}, e || QC), i = {
          tag: t
        };
        return WC.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), Yx.indexOf(t) !== -1 && (a.pTagInButtonScope = null), Ix.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var Qx = function(e, t) {
        switch (t) {
          case "select":
            return e === "option" || e === "optgroup" || e === "#text";
          case "optgroup":
            return e === "option" || e === "#text";
          case "option":
            return e === "#text";
          case "tr":
            return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
          case "tbody":
          case "thead":
          case "tfoot":
            return e === "tr" || e === "style" || e === "script" || e === "template";
          case "colgroup":
            return e === "col" || e === "template";
          case "table":
            return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
          case "head":
            return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
          case "html":
            return e === "head" || e === "body" || e === "frameset";
          case "frameset":
            return e === "frame";
          case "#document":
            return e === "html";
        }
        switch (e) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
          case "rp":
          case "rt":
            return Wx.indexOf(t) === -1;
          case "body":
          case "caption":
          case "col":
          case "colgroup":
          case "frameset":
          case "frame":
          case "head":
          case "html":
          case "tbody":
          case "td":
          case "tfoot":
          case "th":
          case "thead":
          case "tr":
            return t == null;
        }
        return !0;
      }, Gx = function(e, t) {
        switch (e) {
          case "address":
          case "article":
          case "aside":
          case "blockquote":
          case "center":
          case "details":
          case "dialog":
          case "dir":
          case "div":
          case "dl":
          case "fieldset":
          case "figcaption":
          case "figure":
          case "footer":
          case "header":
          case "hgroup":
          case "main":
          case "menu":
          case "nav":
          case "ol":
          case "p":
          case "section":
          case "summary":
          case "ul":
          case "pre":
          case "listing":
          case "table":
          case "hr":
          case "xmp":
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t.pTagInButtonScope;
          case "form":
            return t.formTag || t.pTagInButtonScope;
          case "li":
            return t.listItemTagAutoclosing;
          case "dd":
          case "dt":
            return t.dlItemTagAutoclosing;
          case "button":
            return t.buttonTagInScope;
          case "a":
            return t.aTagInScope;
          case "nobr":
            return t.nobrTagInScope;
        }
        return null;
      }, GC = {};
      Sp = function(e, t, a) {
        a = a || QC;
        var i = a.current, u = i && i.tag;
        t != null && (e != null && g("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = Qx(e, u) ? null : i, f = s ? null : Gx(e, a), h = s || f;
        if (h) {
          var y = h.tag, C = !!s + "|" + e + "|" + y;
          if (!GC[C]) {
            GC[C] = !0;
            var T = e, z = "";
            if (e === "#text" ? /\S/.test(t) ? T = "Text nodes" : (T = "Whitespace text nodes", z = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : T = "<" + e + ">", s) {
              var M = "";
              y === "table" && e === "tr" && (M += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), g("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", T, y, z, M);
            } else
              g("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", T, y);
          }
        }
      };
    }
    var Gh = "suppressHydrationWarning", Xh = "$", Kh = "/$", Cp = "$?", Rp = "$!", Xx = "style", yg = null, gg = null;
    function Kx(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case Ki:
        case yd: {
          t = i === Ki ? "#document" : "#fragment";
          var u = e.documentElement;
          a = u ? u.namespaceURI : md(null, "");
          break;
        }
        default: {
          var s = i === Un ? e.parentNode : e, f = s.namespaceURI || null;
          t = s.tagName, a = md(f, t);
          break;
        }
      }
      {
        var h = t.toLowerCase(), y = Ep(null, h);
        return {
          namespace: a,
          ancestorInfo: y
        };
      }
    }
    function qx(e, t, a) {
      {
        var i = e, u = md(i.namespace, t), s = Ep(i.ancestorInfo, t);
        return {
          namespace: u,
          ancestorInfo: s
        };
      }
    }
    function oN(e) {
      return e;
    }
    function Jx(e) {
      yg = Hn(), gg = dx();
      var t = null;
      return Xn(!1), t;
    }
    function Zx(e) {
      px(gg), Xn(yg), yg = null, gg = null;
    }
    function e_(e, t, a, i, u) {
      var s;
      {
        var f = i;
        if (Sp(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var h = "" + t.children, y = Ep(f.ancestorInfo, e);
          Sp(null, h, y);
        }
        s = f.namespace;
      }
      var C = Ax(e, t, a, s);
      return xp(u, C), _g(C, t), C;
    }
    function t_(e, t) {
      e.appendChild(t);
    }
    function n_(e, t, a, i, u) {
      switch (Fx(e, t, a, i), t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!a.autoFocus;
        case "img":
          return !0;
        default:
          return !1;
      }
    }
    function r_(e, t, a, i, u, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var h = "" + i.children, y = Ep(f.ancestorInfo, t);
          Sp(null, h, y);
        }
      }
      return Px(e, t, a, i);
    }
    function Sg(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function a_(e, t, a, i) {
      {
        var u = a;
        Sp(null, e, u.ancestorInfo);
      }
      var s = zx(e, t);
      return xp(i, s), s;
    }
    function i_() {
      var e = window.event;
      return e === void 0 ? Aa : yf(e.type);
    }
    var Eg = typeof setTimeout == "function" ? setTimeout : void 0, l_ = typeof clearTimeout == "function" ? clearTimeout : void 0, Cg = -1, XC = typeof Promise == "function" ? Promise : void 0, u_ = typeof queueMicrotask == "function" ? queueMicrotask : typeof XC < "u" ? function(e) {
      return XC.resolve(null).then(e).catch(o_);
    } : Eg;
    function o_(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function s_(e, t, a, i) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          return;
        case "img": {
          a.src && (e.src = a.src);
          return;
        }
      }
    }
    function c_(e, t, a, i, u, s) {
      jx(e, t, a, i, u), _g(e, u);
    }
    function KC(e) {
      vo(e, "");
    }
    function f_(e, t, a) {
      e.nodeValue = a;
    }
    function d_(e, t) {
      e.appendChild(t);
    }
    function p_(e, t) {
      var a;
      e.nodeType === Un ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && Qh(a);
    }
    function v_(e, t, a) {
      e.insertBefore(t, a);
    }
    function h_(e, t, a) {
      e.nodeType === Un ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function m_(e, t) {
      e.removeChild(t);
    }
    function y_(e, t) {
      e.nodeType === Un ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function Rg(e, t) {
      var a = t, i = 0;
      do {
        var u = a.nextSibling;
        if (e.removeChild(a), u && u.nodeType === Un) {
          var s = u.data;
          if (s === Kh)
            if (i === 0) {
              e.removeChild(u), zu(t);
              return;
            } else
              i--;
          else (s === Xh || s === Cp || s === Rp) && i++;
        }
        a = u;
      } while (a);
      zu(t);
    }
    function g_(e, t) {
      e.nodeType === Un ? Rg(e.parentNode, t) : e.nodeType === Qr && Rg(e, t), zu(e);
    }
    function S_(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function E_(e) {
      e.nodeValue = "";
    }
    function C_(e, t) {
      e = e;
      var a = t[Xx], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = Rc("display", i);
    }
    function R_(e, t) {
      e.nodeValue = t;
    }
    function w_(e) {
      e.nodeType === Qr ? e.textContent = "" : e.nodeType === Ki && e.documentElement && e.removeChild(e.documentElement);
    }
    function T_(e, t, a) {
      return e.nodeType !== Qr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function x_(e, t) {
      return t === "" || e.nodeType !== Xi ? null : e;
    }
    function __(e) {
      return e.nodeType !== Un ? null : e;
    }
    function qC(e) {
      return e.data === Cp;
    }
    function wg(e) {
      return e.data === Rp;
    }
    function b_(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, u;
      return t && (a = t.dgst, i = t.msg, u = t.stck), {
        message: i,
        digest: a,
        stack: u
      };
    }
    function D_(e, t) {
      e._reactRetry = t;
    }
    function qh(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === Qr || t === Xi)
          break;
        if (t === Un) {
          var a = e.data;
          if (a === Xh || a === Rp || a === Cp)
            break;
          if (a === Kh)
            return null;
        }
      }
      return e;
    }
    function wp(e) {
      return qh(e.nextSibling);
    }
    function k_(e) {
      return qh(e.firstChild);
    }
    function O_(e) {
      return qh(e.firstChild);
    }
    function L_(e) {
      return qh(e.nextSibling);
    }
    function N_(e, t, a, i, u, s, f) {
      xp(s, e), _g(e, a);
      var h;
      {
        var y = u;
        h = y.namespace;
      }
      var C = (s.mode & xt) !== We;
      return Vx(e, t, a, h, i, C, f);
    }
    function M_(e, t, a, i) {
      return xp(a, e), a.mode & xt, Bx(e, t);
    }
    function U_(e, t) {
      xp(t, e);
    }
    function A_(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === Un) {
          var i = t.data;
          if (i === Kh) {
            if (a === 0)
              return wp(t);
            a--;
          } else (i === Xh || i === Rp || i === Cp) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function JC(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === Un) {
          var i = t.data;
          if (i === Xh || i === Rp || i === Cp) {
            if (a === 0)
              return t;
            a--;
          } else i === Kh && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function z_(e) {
      zu(e);
    }
    function F_(e) {
      zu(e);
    }
    function P_(e) {
      return e !== "head" && e !== "body";
    }
    function j_(e, t, a, i) {
      var u = !0;
      Wh(t.nodeValue, a, i, u);
    }
    function H_(e, t, a, i, u, s) {
      if (t[Gh] !== !0) {
        var f = !0;
        Wh(i.nodeValue, u, s, f);
      }
    }
    function V_(e, t) {
      t.nodeType === Qr ? pg(e, t) : t.nodeType === Un || vg(e, t);
    }
    function B_(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === Qr ? pg(a, t) : t.nodeType === Un || vg(a, t));
      }
    }
    function $_(e, t, a, i, u) {
      (u || t[Gh] !== !0) && (i.nodeType === Qr ? pg(a, i) : i.nodeType === Un || vg(a, i));
    }
    function I_(e, t, a) {
      hg(e, t);
    }
    function Y_(e, t) {
      mg(e, t);
    }
    function W_(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && hg(i, t);
      }
    }
    function Q_(e, t) {
      {
        var a = e.parentNode;
        a !== null && mg(a, t);
      }
    }
    function G_(e, t, a, i, u, s) {
      (s || t[Gh] !== !0) && hg(a, i);
    }
    function X_(e, t, a, i, u) {
      (u || t[Gh] !== !0) && mg(a, i);
    }
    function K_(e) {
      g("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function q_(e) {
      hp(e);
    }
    var Lf = Math.random().toString(36).slice(2), Nf = "__reactFiber$" + Lf, Tg = "__reactProps$" + Lf, Tp = "__reactContainer$" + Lf, xg = "__reactEvents$" + Lf, J_ = "__reactListeners$" + Lf, Z_ = "__reactHandles$" + Lf;
    function eb(e) {
      delete e[Nf], delete e[Tg], delete e[xg], delete e[J_], delete e[Z_];
    }
    function xp(e, t) {
      t[Nf] = e;
    }
    function Jh(e, t) {
      t[Tp] = e;
    }
    function ZC(e) {
      e[Tp] = null;
    }
    function _p(e) {
      return !!e[Tp];
    }
    function ec(e) {
      var t = e[Nf];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[Tp] || a[Nf], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var u = JC(e); u !== null; ) {
              var s = u[Nf];
              if (s)
                return s;
              u = JC(u);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function Po(e) {
      var t = e[Nf] || e[Tp];
      return t && (t.tag === Y || t.tag === H || t.tag === me || t.tag === O) ? t : null;
    }
    function Mf(e) {
      if (e.tag === Y || e.tag === H)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Zh(e) {
      return e[Tg] || null;
    }
    function _g(e, t) {
      e[Tg] = t;
    }
    function tb(e) {
      var t = e[xg];
      return t === void 0 && (t = e[xg] = /* @__PURE__ */ new Set()), t;
    }
    var eR = {}, tR = v.ReactDebugCurrentFrame;
    function em(e) {
      if (e) {
        var t = e._owner, a = Yi(e.type, e._source, t ? t.type : null);
        tR.setExtraStackFrame(a);
      } else
        tR.setExtraStackFrame(null);
    }
    function ul(e, t, a, i, u) {
      {
        var s = Function.call.bind(_r);
        for (var f in e)
          if (s(e, f)) {
            var h = void 0;
            try {
              if (typeof e[f] != "function") {
                var y = Error((i || "React class") + ": " + a + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw y.name = "Invariant Violation", y;
              }
              h = e[f](t, f, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (C) {
              h = C;
            }
            h && !(h instanceof Error) && (em(u), g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof h), em(null)), h instanceof Error && !(h.message in eR) && (eR[h.message] = !0, em(u), g("Failed %s type: %s", a, h.message), em(null));
          }
      }
    }
    var bg = [], tm;
    tm = [];
    var Bu = -1;
    function jo(e) {
      return {
        current: e
      };
    }
    function aa(e, t) {
      if (Bu < 0) {
        g("Unexpected pop.");
        return;
      }
      t !== tm[Bu] && g("Unexpected Fiber popped."), e.current = bg[Bu], bg[Bu] = null, tm[Bu] = null, Bu--;
    }
    function ia(e, t, a) {
      Bu++, bg[Bu] = e.current, tm[Bu] = a, e.current = t;
    }
    var Dg;
    Dg = {};
    var ci = {};
    Object.freeze(ci);
    var $u = jo(ci), Gl = jo(!1), kg = ci;
    function Uf(e, t, a) {
      return a && Xl(t) ? kg : $u.current;
    }
    function nR(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function Af(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return ci;
        var u = e.stateNode;
        if (u && u.__reactInternalMemoizedUnmaskedChildContext === t)
          return u.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var f in i)
          s[f] = t[f];
        {
          var h = lt(e) || "Unknown";
          ul(i, s, "context", h);
        }
        return u && nR(e, t, s), s;
      }
    }
    function nm() {
      return Gl.current;
    }
    function Xl(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function rm(e) {
      aa(Gl, e), aa($u, e);
    }
    function Og(e) {
      aa(Gl, e), aa($u, e);
    }
    function rR(e, t, a) {
      {
        if ($u.current !== ci)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        ia($u, t, e), ia(Gl, a, e);
      }
    }
    function aR(e, t, a) {
      {
        var i = e.stateNode, u = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = lt(e) || "Unknown";
            Dg[s] || (Dg[s] = !0, g("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var h in f)
          if (!(h in u))
            throw new Error((lt(e) || "Unknown") + '.getChildContext(): key "' + h + '" is not defined in childContextTypes.');
        {
          var y = lt(e) || "Unknown";
          ul(u, f, "child context", y);
        }
        return ht({}, a, f);
      }
    }
    function am(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || ci;
        return kg = $u.current, ia($u, a, e), ia(Gl, Gl.current, e), !0;
      }
    }
    function iR(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var u = aR(e, t, kg);
          i.__reactInternalMemoizedMergedChildContext = u, aa(Gl, e), aa($u, e), ia($u, u, e), ia(Gl, a, e);
        } else
          aa(Gl, e), ia(Gl, a, e);
      }
    }
    function nb(e) {
      {
        if (!Ru(e) || e.tag !== F)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case O:
              return t.stateNode.context;
            case F: {
              var a = t.type;
              if (Xl(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Ho = 0, im = 1, Iu = null, Lg = !1, Ng = !1;
    function lR(e) {
      Iu === null ? Iu = [e] : Iu.push(e);
    }
    function rb(e) {
      Lg = !0, lR(e);
    }
    function uR() {
      Lg && Vo();
    }
    function Vo() {
      if (!Ng && Iu !== null) {
        Ng = !0;
        var e = 0, t = Fa();
        try {
          var a = !0, i = Iu;
          for (jn(Nr); e < i.length; e++) {
            var u = i[e];
            do
              u = u(a);
            while (u !== null);
          }
          Iu = null, Lg = !1;
        } catch (s) {
          throw Iu !== null && (Iu = Iu.slice(e + 1)), kd(Ss, Vo), s;
        } finally {
          jn(t), Ng = !1;
        }
      }
      return null;
    }
    var zf = [], Ff = 0, lm = null, um = 0, Ai = [], zi = 0, tc = null, Yu = 1, Wu = "";
    function ab(e) {
      return rc(), (e.flags & xi) !== Ye;
    }
    function ib(e) {
      return rc(), um;
    }
    function lb() {
      var e = Wu, t = Yu, a = t & ~ub(t);
      return a.toString(32) + e;
    }
    function nc(e, t) {
      rc(), zf[Ff++] = um, zf[Ff++] = lm, lm = e, um = t;
    }
    function oR(e, t, a) {
      rc(), Ai[zi++] = Yu, Ai[zi++] = Wu, Ai[zi++] = tc, tc = e;
      var i = Yu, u = Wu, s = om(i) - 1, f = i & ~(1 << s), h = a + 1, y = om(t) + s;
      if (y > 30) {
        var C = s - s % 5, T = (1 << C) - 1, z = (f & T).toString(32), M = f >> C, W = s - C, X = om(t) + W, J = h << W, xe = J | M, Xe = z + u;
        Yu = 1 << X | xe, Wu = Xe;
      } else {
        var Ve = h << s, Ut = Ve | f, Dt = u;
        Yu = 1 << y | Ut, Wu = Dt;
      }
    }
    function Mg(e) {
      rc();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        nc(e, a), oR(e, a, i);
      }
    }
    function om(e) {
      return 32 - Fn(e);
    }
    function ub(e) {
      return 1 << om(e) - 1;
    }
    function Ug(e) {
      for (; e === lm; )
        lm = zf[--Ff], zf[Ff] = null, um = zf[--Ff], zf[Ff] = null;
      for (; e === tc; )
        tc = Ai[--zi], Ai[zi] = null, Wu = Ai[--zi], Ai[zi] = null, Yu = Ai[--zi], Ai[zi] = null;
    }
    function ob() {
      return rc(), tc !== null ? {
        id: Yu,
        overflow: Wu
      } : null;
    }
    function sb(e, t) {
      rc(), Ai[zi++] = Yu, Ai[zi++] = Wu, Ai[zi++] = tc, Yu = t.id, Wu = t.overflow, tc = e;
    }
    function rc() {
      Fr() || g("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var zr = null, Fi = null, ol = !1, ac = !1, Bo = null;
    function cb() {
      ol && g("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function sR() {
      ac = !0;
    }
    function fb() {
      return ac;
    }
    function db(e) {
      var t = e.stateNode.containerInfo;
      return Fi = O_(t), zr = e, ol = !0, Bo = null, ac = !1, !0;
    }
    function pb(e, t, a) {
      return Fi = L_(t), zr = e, ol = !0, Bo = null, ac = !1, a !== null && sb(e, a), !0;
    }
    function cR(e, t) {
      switch (e.tag) {
        case O: {
          V_(e.stateNode.containerInfo, t);
          break;
        }
        case Y: {
          var a = (e.mode & xt) !== We;
          $_(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case me: {
          var i = e.memoizedState;
          i.dehydrated !== null && B_(i.dehydrated, t);
          break;
        }
      }
    }
    function fR(e, t) {
      cR(e, t);
      var a = yk();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= Oa) : i.push(a);
    }
    function Ag(e, t) {
      {
        if (ac)
          return;
        switch (e.tag) {
          case O: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case Y:
                var i = t.type;
                t.pendingProps, I_(a, i);
                break;
              case H:
                var u = t.pendingProps;
                Y_(a, u);
                break;
            }
            break;
          }
          case Y: {
            var s = e.type, f = e.memoizedProps, h = e.stateNode;
            switch (t.tag) {
              case Y: {
                var y = t.type, C = t.pendingProps, T = (e.mode & xt) !== We;
                G_(
                  s,
                  f,
                  h,
                  y,
                  C,
                  // TODO: Delete this argument when we remove the legacy root API.
                  T
                );
                break;
              }
              case H: {
                var z = t.pendingProps, M = (e.mode & xt) !== We;
                X_(
                  s,
                  f,
                  h,
                  z,
                  // TODO: Delete this argument when we remove the legacy root API.
                  M
                );
                break;
              }
            }
            break;
          }
          case me: {
            var W = e.memoizedState, X = W.dehydrated;
            if (X !== null) switch (t.tag) {
              case Y:
                var J = t.type;
                t.pendingProps, W_(X, J);
                break;
              case H:
                var xe = t.pendingProps;
                Q_(X, xe);
                break;
            }
            break;
          }
          default:
            return;
        }
      }
    }
    function dR(e, t) {
      t.flags = t.flags & -4097 | xn, Ag(e, t);
    }
    function pR(e, t) {
      switch (e.tag) {
        case Y: {
          var a = e.type;
          e.pendingProps;
          var i = T_(t, a);
          return i !== null ? (e.stateNode = i, zr = e, Fi = k_(i), !0) : !1;
        }
        case H: {
          var u = e.pendingProps, s = x_(t, u);
          return s !== null ? (e.stateNode = s, zr = e, Fi = null, !0) : !1;
        }
        case me: {
          var f = __(t);
          if (f !== null) {
            var h = {
              dehydrated: f,
              treeContext: ob(),
              retryLane: ya
            };
            e.memoizedState = h;
            var y = gk(f);
            return y.return = e, e.child = y, zr = e, Fi = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function zg(e) {
      return (e.mode & xt) !== We && (e.flags & Ie) === Ye;
    }
    function Fg(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function Pg(e) {
      if (ol) {
        var t = Fi;
        if (!t) {
          zg(e) && (Ag(zr, e), Fg()), dR(zr, e), ol = !1, zr = e;
          return;
        }
        var a = t;
        if (!pR(e, t)) {
          zg(e) && (Ag(zr, e), Fg()), t = wp(a);
          var i = zr;
          if (!t || !pR(e, t)) {
            dR(zr, e), ol = !1, zr = e;
            return;
          }
          fR(i, a);
        }
      }
    }
    function vb(e, t, a) {
      var i = e.stateNode, u = !ac, s = N_(i, e.type, e.memoizedProps, t, a, e, u);
      return e.updateQueue = s, s !== null;
    }
    function hb(e) {
      var t = e.stateNode, a = e.memoizedProps, i = M_(t, a, e);
      if (i) {
        var u = zr;
        if (u !== null)
          switch (u.tag) {
            case O: {
              var s = u.stateNode.containerInfo, f = (u.mode & xt) !== We;
              j_(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case Y: {
              var h = u.type, y = u.memoizedProps, C = u.stateNode, T = (u.mode & xt) !== We;
              H_(
                h,
                y,
                C,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                T
              );
              break;
            }
          }
      }
      return i;
    }
    function mb(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      U_(a, e);
    }
    function yb(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return A_(a);
    }
    function vR(e) {
      for (var t = e.return; t !== null && t.tag !== Y && t.tag !== O && t.tag !== me; )
        t = t.return;
      zr = t;
    }
    function sm(e) {
      if (e !== zr)
        return !1;
      if (!ol)
        return vR(e), ol = !0, !1;
      if (e.tag !== O && (e.tag !== Y || P_(e.type) && !Sg(e.type, e.memoizedProps))) {
        var t = Fi;
        if (t)
          if (zg(e))
            hR(e), Fg();
          else
            for (; t; )
              fR(e, t), t = wp(t);
      }
      return vR(e), e.tag === me ? Fi = yb(e) : Fi = zr ? wp(e.stateNode) : null, !0;
    }
    function gb() {
      return ol && Fi !== null;
    }
    function hR(e) {
      for (var t = Fi; t; )
        cR(e, t), t = wp(t);
    }
    function Pf() {
      zr = null, Fi = null, ol = !1, ac = !1;
    }
    function mR() {
      Bo !== null && (sT(Bo), Bo = null);
    }
    function Fr() {
      return ol;
    }
    function jg(e) {
      Bo === null ? Bo = [e] : Bo.push(e);
    }
    var Sb = v.ReactCurrentBatchConfig, Eb = null;
    function Cb() {
      return Sb.transition;
    }
    var sl = {
      recordUnsafeLifecycleWarnings: function(e, t) {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function(e, t) {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    };
    {
      var Rb = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & Zt && (t = a), a = a.return;
        return t;
      }, ic = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, bp = [], Dp = [], kp = [], Op = [], Lp = [], Np = [], lc = /* @__PURE__ */ new Set();
      sl.recordUnsafeLifecycleWarnings = function(e, t) {
        lc.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && bp.push(e), e.mode & Zt && typeof t.UNSAFE_componentWillMount == "function" && Dp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && kp.push(e), e.mode & Zt && typeof t.UNSAFE_componentWillReceiveProps == "function" && Op.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && Lp.push(e), e.mode & Zt && typeof t.UNSAFE_componentWillUpdate == "function" && Np.push(e));
      }, sl.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        bp.length > 0 && (bp.forEach(function(M) {
          e.add(lt(M) || "Component"), lc.add(M.type);
        }), bp = []);
        var t = /* @__PURE__ */ new Set();
        Dp.length > 0 && (Dp.forEach(function(M) {
          t.add(lt(M) || "Component"), lc.add(M.type);
        }), Dp = []);
        var a = /* @__PURE__ */ new Set();
        kp.length > 0 && (kp.forEach(function(M) {
          a.add(lt(M) || "Component"), lc.add(M.type);
        }), kp = []);
        var i = /* @__PURE__ */ new Set();
        Op.length > 0 && (Op.forEach(function(M) {
          i.add(lt(M) || "Component"), lc.add(M.type);
        }), Op = []);
        var u = /* @__PURE__ */ new Set();
        Lp.length > 0 && (Lp.forEach(function(M) {
          u.add(lt(M) || "Component"), lc.add(M.type);
        }), Lp = []);
        var s = /* @__PURE__ */ new Set();
        if (Np.length > 0 && (Np.forEach(function(M) {
          s.add(lt(M) || "Component"), lc.add(M.type);
        }), Np = []), t.size > 0) {
          var f = ic(t);
          g(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, f);
        }
        if (i.size > 0) {
          var h = ic(i);
          g(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, h);
        }
        if (s.size > 0) {
          var y = ic(s);
          g(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, y);
        }
        if (e.size > 0) {
          var C = ic(e);
          b(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, C);
        }
        if (a.size > 0) {
          var T = ic(a);
          b(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, T);
        }
        if (u.size > 0) {
          var z = ic(u);
          b(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, z);
        }
      };
      var cm = /* @__PURE__ */ new Map(), yR = /* @__PURE__ */ new Set();
      sl.recordLegacyContextWarning = function(e, t) {
        var a = Rb(e);
        if (a === null) {
          g("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!yR.has(e.type)) {
          var i = cm.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], cm.set(a, i)), i.push(e));
        }
      }, sl.flushLegacyContextWarning = function() {
        cm.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(lt(s) || "Component"), yR.add(s.type);
            });
            var u = ic(i);
            try {
              Kt(a), g(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u);
            } finally {
              dn();
            }
          }
        });
      }, sl.discardPendingWarnings = function() {
        bp = [], Dp = [], kp = [], Op = [], Lp = [], Np = [], cm = /* @__PURE__ */ new Map();
      };
    }
    var Hg, Vg, Bg, $g, Ig, gR = function(e, t) {
    };
    Hg = !1, Vg = !1, Bg = {}, $g = {}, Ig = {}, gR = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = lt(t) || "Component";
        $g[a] || ($g[a] = !0, g('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function wb(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function Mp(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & Zt || ee) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self) && // Will already throw with "Function components cannot have string refs"
        !(a._owner && a._owner.tag !== F) && // Will already warn with "Function components cannot be given refs"
        !(typeof a.type == "function" && !wb(a.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        a._owner) {
          var u = lt(e) || "Component";
          Bg[u] || (g('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', u, i), Bg[u] = !0);
        }
        if (a._owner) {
          var s = a._owner, f;
          if (s) {
            var h = s;
            if (h.tag !== F)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            f = h.stateNode;
          }
          if (!f)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var y = f;
          pi(i, "ref");
          var C = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === C)
            return t.ref;
          var T = function(z) {
            var M = y.refs;
            z === null ? delete M[C] : M[C] = z;
          };
          return T._stringRef = C, T;
        } else {
          if (typeof i != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!a._owner)
            throw new Error("Element ref was specified as a string (" + i + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return i;
    }
    function fm(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function dm(e) {
      {
        var t = lt(e) || "Component";
        if (Ig[t])
          return;
        Ig[t] = !0, g("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function SR(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function ER(e) {
      function t(B, Z) {
        if (e) {
          var $ = B.deletions;
          $ === null ? (B.deletions = [Z], B.flags |= Oa) : $.push(Z);
        }
      }
      function a(B, Z) {
        if (!e)
          return null;
        for (var $ = Z; $ !== null; )
          t(B, $), $ = $.sibling;
        return null;
      }
      function i(B, Z) {
        for (var $ = /* @__PURE__ */ new Map(), fe = Z; fe !== null; )
          fe.key !== null ? $.set(fe.key, fe) : $.set(fe.index, fe), fe = fe.sibling;
        return $;
      }
      function u(B, Z) {
        var $ = hc(B, Z);
        return $.index = 0, $.sibling = null, $;
      }
      function s(B, Z, $) {
        if (B.index = $, !e)
          return B.flags |= xi, Z;
        var fe = B.alternate;
        if (fe !== null) {
          var Oe = fe.index;
          return Oe < Z ? (B.flags |= xn, Z) : Oe;
        } else
          return B.flags |= xn, Z;
      }
      function f(B) {
        return e && B.alternate === null && (B.flags |= xn), B;
      }
      function h(B, Z, $, fe) {
        if (Z === null || Z.tag !== H) {
          var Oe = jE($, B.mode, fe);
          return Oe.return = B, Oe;
        } else {
          var _e = u(Z, $);
          return _e.return = B, _e;
        }
      }
      function y(B, Z, $, fe) {
        var Oe = $.type;
        if (Oe === hi)
          return T(B, Z, $.props.children, fe, $.key);
        if (Z !== null && (Z.elementType === Oe || // Keep this check inline so it only runs on the false path:
        xT(Z, $) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof Oe == "object" && Oe !== null && Oe.$$typeof === ut && SR(Oe) === Z.type)) {
          var _e = u(Z, $.props);
          return _e.ref = Mp(B, Z, $), _e.return = B, _e._debugSource = $._source, _e._debugOwner = $._owner, _e;
        }
        var rt = PE($, B.mode, fe);
        return rt.ref = Mp(B, Z, $), rt.return = B, rt;
      }
      function C(B, Z, $, fe) {
        if (Z === null || Z.tag !== j || Z.stateNode.containerInfo !== $.containerInfo || Z.stateNode.implementation !== $.implementation) {
          var Oe = HE($, B.mode, fe);
          return Oe.return = B, Oe;
        } else {
          var _e = u(Z, $.children || []);
          return _e.return = B, _e;
        }
      }
      function T(B, Z, $, fe, Oe) {
        if (Z === null || Z.tag !== de) {
          var _e = Zo($, B.mode, fe, Oe);
          return _e.return = B, _e;
        } else {
          var rt = u(Z, $);
          return rt.return = B, rt;
        }
      }
      function z(B, Z, $) {
        if (typeof Z == "string" && Z !== "" || typeof Z == "number") {
          var fe = jE("" + Z, B.mode, $);
          return fe.return = B, fe;
        }
        if (typeof Z == "object" && Z !== null) {
          switch (Z.$$typeof) {
            case Dr: {
              var Oe = PE(Z, B.mode, $);
              return Oe.ref = Mp(B, null, Z), Oe.return = B, Oe;
            }
            case ar: {
              var _e = HE(Z, B.mode, $);
              return _e.return = B, _e;
            }
            case ut: {
              var rt = Z._payload, st = Z._init;
              return z(B, st(rt), $);
            }
          }
          if (Et(Z) || dt(Z)) {
            var tn = Zo(Z, B.mode, $, null);
            return tn.return = B, tn;
          }
          fm(B, Z);
        }
        return typeof Z == "function" && dm(B), null;
      }
      function M(B, Z, $, fe) {
        var Oe = Z !== null ? Z.key : null;
        if (typeof $ == "string" && $ !== "" || typeof $ == "number")
          return Oe !== null ? null : h(B, Z, "" + $, fe);
        if (typeof $ == "object" && $ !== null) {
          switch ($.$$typeof) {
            case Dr:
              return $.key === Oe ? y(B, Z, $, fe) : null;
            case ar:
              return $.key === Oe ? C(B, Z, $, fe) : null;
            case ut: {
              var _e = $._payload, rt = $._init;
              return M(B, Z, rt(_e), fe);
            }
          }
          if (Et($) || dt($))
            return Oe !== null ? null : T(B, Z, $, fe, null);
          fm(B, $);
        }
        return typeof $ == "function" && dm(B), null;
      }
      function W(B, Z, $, fe, Oe) {
        if (typeof fe == "string" && fe !== "" || typeof fe == "number") {
          var _e = B.get($) || null;
          return h(Z, _e, "" + fe, Oe);
        }
        if (typeof fe == "object" && fe !== null) {
          switch (fe.$$typeof) {
            case Dr: {
              var rt = B.get(fe.key === null ? $ : fe.key) || null;
              return y(Z, rt, fe, Oe);
            }
            case ar: {
              var st = B.get(fe.key === null ? $ : fe.key) || null;
              return C(Z, st, fe, Oe);
            }
            case ut:
              var tn = fe._payload, Bt = fe._init;
              return W(B, Z, $, Bt(tn), Oe);
          }
          if (Et(fe) || dt(fe)) {
            var Kn = B.get($) || null;
            return T(Z, Kn, fe, Oe, null);
          }
          fm(Z, fe);
        }
        return typeof fe == "function" && dm(Z), null;
      }
      function X(B, Z, $) {
        {
          if (typeof B != "object" || B === null)
            return Z;
          switch (B.$$typeof) {
            case Dr:
            case ar:
              gR(B, $);
              var fe = B.key;
              if (typeof fe != "string")
                break;
              if (Z === null) {
                Z = /* @__PURE__ */ new Set(), Z.add(fe);
                break;
              }
              if (!Z.has(fe)) {
                Z.add(fe);
                break;
              }
              g("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", fe);
              break;
            case ut:
              var Oe = B._payload, _e = B._init;
              X(_e(Oe), Z, $);
              break;
          }
        }
        return Z;
      }
      function J(B, Z, $, fe) {
        for (var Oe = null, _e = 0; _e < $.length; _e++) {
          var rt = $[_e];
          Oe = X(rt, Oe, B);
        }
        for (var st = null, tn = null, Bt = Z, Kn = 0, $t = 0, Bn = null; Bt !== null && $t < $.length; $t++) {
          Bt.index > $t ? (Bn = Bt, Bt = null) : Bn = Bt.sibling;
          var ua = M(B, Bt, $[$t], fe);
          if (ua === null) {
            Bt === null && (Bt = Bn);
            break;
          }
          e && Bt && ua.alternate === null && t(B, Bt), Kn = s(ua, Kn, $t), tn === null ? st = ua : tn.sibling = ua, tn = ua, Bt = Bn;
        }
        if ($t === $.length) {
          if (a(B, Bt), Fr()) {
            var Ir = $t;
            nc(B, Ir);
          }
          return st;
        }
        if (Bt === null) {
          for (; $t < $.length; $t++) {
            var di = z(B, $[$t], fe);
            di !== null && (Kn = s(di, Kn, $t), tn === null ? st = di : tn.sibling = di, tn = di);
          }
          if (Fr()) {
            var wa = $t;
            nc(B, wa);
          }
          return st;
        }
        for (var Ta = i(B, Bt); $t < $.length; $t++) {
          var oa = W(Ta, B, $t, $[$t], fe);
          oa !== null && (e && oa.alternate !== null && Ta.delete(oa.key === null ? $t : oa.key), Kn = s(oa, Kn, $t), tn === null ? st = oa : tn.sibling = oa, tn = oa);
        }
        if (e && Ta.forEach(function(rd) {
          return t(B, rd);
        }), Fr()) {
          var Zu = $t;
          nc(B, Zu);
        }
        return st;
      }
      function xe(B, Z, $, fe) {
        var Oe = dt($);
        if (typeof Oe != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          $[Symbol.toStringTag] === "Generator" && (Vg || g("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), Vg = !0), $.entries === Oe && (Hg || g("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Hg = !0);
          var _e = Oe.call($);
          if (_e)
            for (var rt = null, st = _e.next(); !st.done; st = _e.next()) {
              var tn = st.value;
              rt = X(tn, rt, B);
            }
        }
        var Bt = Oe.call($);
        if (Bt == null)
          throw new Error("An iterable object provided no iterator.");
        for (var Kn = null, $t = null, Bn = Z, ua = 0, Ir = 0, di = null, wa = Bt.next(); Bn !== null && !wa.done; Ir++, wa = Bt.next()) {
          Bn.index > Ir ? (di = Bn, Bn = null) : di = Bn.sibling;
          var Ta = M(B, Bn, wa.value, fe);
          if (Ta === null) {
            Bn === null && (Bn = di);
            break;
          }
          e && Bn && Ta.alternate === null && t(B, Bn), ua = s(Ta, ua, Ir), $t === null ? Kn = Ta : $t.sibling = Ta, $t = Ta, Bn = di;
        }
        if (wa.done) {
          if (a(B, Bn), Fr()) {
            var oa = Ir;
            nc(B, oa);
          }
          return Kn;
        }
        if (Bn === null) {
          for (; !wa.done; Ir++, wa = Bt.next()) {
            var Zu = z(B, wa.value, fe);
            Zu !== null && (ua = s(Zu, ua, Ir), $t === null ? Kn = Zu : $t.sibling = Zu, $t = Zu);
          }
          if (Fr()) {
            var rd = Ir;
            nc(B, rd);
          }
          return Kn;
        }
        for (var fv = i(B, Bn); !wa.done; Ir++, wa = Bt.next()) {
          var ru = W(fv, B, Ir, wa.value, fe);
          ru !== null && (e && ru.alternate !== null && fv.delete(ru.key === null ? Ir : ru.key), ua = s(ru, ua, Ir), $t === null ? Kn = ru : $t.sibling = ru, $t = ru);
        }
        if (e && fv.forEach(function(Xk) {
          return t(B, Xk);
        }), Fr()) {
          var Gk = Ir;
          nc(B, Gk);
        }
        return Kn;
      }
      function Xe(B, Z, $, fe) {
        if (Z !== null && Z.tag === H) {
          a(B, Z.sibling);
          var Oe = u(Z, $);
          return Oe.return = B, Oe;
        }
        a(B, Z);
        var _e = jE($, B.mode, fe);
        return _e.return = B, _e;
      }
      function Ve(B, Z, $, fe) {
        for (var Oe = $.key, _e = Z; _e !== null; ) {
          if (_e.key === Oe) {
            var rt = $.type;
            if (rt === hi) {
              if (_e.tag === de) {
                a(B, _e.sibling);
                var st = u(_e, $.props.children);
                return st.return = B, st._debugSource = $._source, st._debugOwner = $._owner, st;
              }
            } else if (_e.elementType === rt || // Keep this check inline so it only runs on the false path:
            xT(_e, $) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof rt == "object" && rt !== null && rt.$$typeof === ut && SR(rt) === _e.type) {
              a(B, _e.sibling);
              var tn = u(_e, $.props);
              return tn.ref = Mp(B, _e, $), tn.return = B, tn._debugSource = $._source, tn._debugOwner = $._owner, tn;
            }
            a(B, _e);
            break;
          } else
            t(B, _e);
          _e = _e.sibling;
        }
        if ($.type === hi) {
          var Bt = Zo($.props.children, B.mode, fe, $.key);
          return Bt.return = B, Bt;
        } else {
          var Kn = PE($, B.mode, fe);
          return Kn.ref = Mp(B, Z, $), Kn.return = B, Kn;
        }
      }
      function Ut(B, Z, $, fe) {
        for (var Oe = $.key, _e = Z; _e !== null; ) {
          if (_e.key === Oe)
            if (_e.tag === j && _e.stateNode.containerInfo === $.containerInfo && _e.stateNode.implementation === $.implementation) {
              a(B, _e.sibling);
              var rt = u(_e, $.children || []);
              return rt.return = B, rt;
            } else {
              a(B, _e);
              break;
            }
          else
            t(B, _e);
          _e = _e.sibling;
        }
        var st = HE($, B.mode, fe);
        return st.return = B, st;
      }
      function Dt(B, Z, $, fe) {
        var Oe = typeof $ == "object" && $ !== null && $.type === hi && $.key === null;
        if (Oe && ($ = $.props.children), typeof $ == "object" && $ !== null) {
          switch ($.$$typeof) {
            case Dr:
              return f(Ve(B, Z, $, fe));
            case ar:
              return f(Ut(B, Z, $, fe));
            case ut:
              var _e = $._payload, rt = $._init;
              return Dt(B, Z, rt(_e), fe);
          }
          if (Et($))
            return J(B, Z, $, fe);
          if (dt($))
            return xe(B, Z, $, fe);
          fm(B, $);
        }
        return typeof $ == "string" && $ !== "" || typeof $ == "number" ? f(Xe(B, Z, "" + $, fe)) : (typeof $ == "function" && dm(B), a(B, Z));
      }
      return Dt;
    }
    var jf = ER(!0), CR = ER(!1);
    function Tb(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = hc(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = hc(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function xb(e, t) {
      for (var a = e.child; a !== null; )
        dk(a, t), a = a.sibling;
    }
    var Yg = jo(null), Wg;
    Wg = {};
    var pm = null, Hf = null, Qg = null, vm = !1;
    function hm() {
      pm = null, Hf = null, Qg = null, vm = !1;
    }
    function RR() {
      vm = !0;
    }
    function wR() {
      vm = !1;
    }
    function TR(e, t, a) {
      ia(Yg, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== Wg && g("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = Wg;
    }
    function Gg(e, t) {
      var a = Yg.current;
      aa(Yg, t), e._currentValue = a;
    }
    function Xg(e, t, a) {
      for (var i = e; i !== null; ) {
        var u = i.alternate;
        if (Au(i.childLanes, t) ? u !== null && !Au(u.childLanes, t) && (u.childLanes = pt(u.childLanes, t)) : (i.childLanes = pt(i.childLanes, t), u !== null && (u.childLanes = pt(u.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && g("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function _b(e, t, a) {
      bb(e, t, a);
    }
    function bb(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var u = void 0, s = i.dependencies;
        if (s !== null) {
          u = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === F) {
                var h = Ms(a), y = Qu(nn, h);
                y.tag = ym;
                var C = i.updateQueue;
                if (C !== null) {
                  var T = C.shared, z = T.pending;
                  z === null ? y.next = y : (y.next = z.next, z.next = y), T.pending = y;
                }
              }
              i.lanes = pt(i.lanes, a);
              var M = i.alternate;
              M !== null && (M.lanes = pt(M.lanes, a)), Xg(i.return, a, e), s.lanes = pt(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === ne)
          u = i.type === e.type ? null : i.child;
        else if (i.tag === it) {
          var W = i.return;
          if (W === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          W.lanes = pt(W.lanes, a);
          var X = W.alternate;
          X !== null && (X.lanes = pt(X.lanes, a)), Xg(W, a, e), u = i.sibling;
        } else
          u = i.child;
        if (u !== null)
          u.return = i;
        else
          for (u = i; u !== null; ) {
            if (u === e) {
              u = null;
              break;
            }
            var J = u.sibling;
            if (J !== null) {
              J.return = u.return, u = J;
              break;
            }
            u = u.return;
          }
        i = u;
      }
    }
    function Vf(e, t) {
      pm = e, Hf = null, Qg = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (ea(a.lanes, t) && Gp(), a.firstContext = null);
      }
    }
    function nr(e) {
      vm && g("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (Qg !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (Hf === null) {
          if (pm === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          Hf = a, pm.dependencies = {
            lanes: ae,
            firstContext: a
          };
        } else
          Hf = Hf.next = a;
      }
      return t;
    }
    var uc = null;
    function Kg(e) {
      uc === null ? uc = [e] : uc.push(e);
    }
    function Db() {
      if (uc !== null) {
        for (var e = 0; e < uc.length; e++) {
          var t = uc[e], a = t.interleaved;
          if (a !== null) {
            t.interleaved = null;
            var i = a.next, u = t.pending;
            if (u !== null) {
              var s = u.next;
              u.next = i, a.next = s;
            }
            t.pending = a;
          }
        }
        uc = null;
      }
    }
    function xR(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, Kg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, mm(e, i);
    }
    function kb(e, t, a, i) {
      var u = t.interleaved;
      u === null ? (a.next = a, Kg(t)) : (a.next = u.next, u.next = a), t.interleaved = a;
    }
    function Ob(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, Kg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, mm(e, i);
    }
    function Ha(e, t) {
      return mm(e, t);
    }
    var Lb = mm;
    function mm(e, t) {
      e.lanes = pt(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = pt(a.lanes, t)), a === null && (e.flags & (xn | La)) !== Ye && CT(e);
      for (var i = e, u = e.return; u !== null; )
        u.childLanes = pt(u.childLanes, t), a = u.alternate, a !== null ? a.childLanes = pt(a.childLanes, t) : (u.flags & (xn | La)) !== Ye && CT(e), i = u, u = u.return;
      if (i.tag === O) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var _R = 0, bR = 1, ym = 2, qg = 3, gm = !1, Jg, Sm;
    Jg = !1, Sm = null;
    function Zg(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: ae
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function DR(e, t) {
      var a = t.updateQueue, i = e.updateQueue;
      if (a === i) {
        var u = {
          baseState: i.baseState,
          firstBaseUpdate: i.firstBaseUpdate,
          lastBaseUpdate: i.lastBaseUpdate,
          shared: i.shared,
          effects: i.effects
        };
        t.updateQueue = u;
      }
    }
    function Qu(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: _R,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function $o(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var u = i.shared;
      if (Sm === u && !Jg && (g("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), Jg = !0), kD()) {
        var s = u.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), u.pending = t, Lb(e, a);
      } else
        return Ob(e, u, t, a);
    }
    function Em(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var u = i.shared;
        if (Wd(a)) {
          var s = u.lanes;
          s = Gd(s, e.pendingLanes);
          var f = pt(s, a);
          u.lanes = f, pf(e, f);
        }
      }
    }
    function eS(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var u = i.updateQueue;
        if (a === u) {
          var s = null, f = null, h = a.firstBaseUpdate;
          if (h !== null) {
            var y = h;
            do {
              var C = {
                eventTime: y.eventTime,
                lane: y.lane,
                tag: y.tag,
                payload: y.payload,
                callback: y.callback,
                next: null
              };
              f === null ? s = f = C : (f.next = C, f = C), y = y.next;
            } while (y !== null);
            f === null ? s = f = t : (f.next = t, f = t);
          } else
            s = f = t;
          a = {
            baseState: u.baseState,
            firstBaseUpdate: s,
            lastBaseUpdate: f,
            shared: u.shared,
            effects: u.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var T = a.lastBaseUpdate;
      T === null ? a.firstBaseUpdate = t : T.next = t, a.lastBaseUpdate = t;
    }
    function Nb(e, t, a, i, u, s) {
      switch (a.tag) {
        case bR: {
          var f = a.payload;
          if (typeof f == "function") {
            RR();
            var h = f.call(s, i, u);
            {
              if (e.mode & Zt) {
                gn(!0);
                try {
                  f.call(s, i, u);
                } finally {
                  gn(!1);
                }
              }
              wR();
            }
            return h;
          }
          return f;
        }
        case qg:
          e.flags = e.flags & -65537 | Ie;
        case _R: {
          var y = a.payload, C;
          if (typeof y == "function") {
            RR(), C = y.call(s, i, u);
            {
              if (e.mode & Zt) {
                gn(!0);
                try {
                  y.call(s, i, u);
                } finally {
                  gn(!1);
                }
              }
              wR();
            }
          } else
            C = y;
          return C == null ? i : ht({}, i, C);
        }
        case ym:
          return gm = !0, i;
      }
      return i;
    }
    function Cm(e, t, a, i) {
      var u = e.updateQueue;
      gm = !1, Sm = u.shared;
      var s = u.firstBaseUpdate, f = u.lastBaseUpdate, h = u.shared.pending;
      if (h !== null) {
        u.shared.pending = null;
        var y = h, C = y.next;
        y.next = null, f === null ? s = C : f.next = C, f = y;
        var T = e.alternate;
        if (T !== null) {
          var z = T.updateQueue, M = z.lastBaseUpdate;
          M !== f && (M === null ? z.firstBaseUpdate = C : M.next = C, z.lastBaseUpdate = y);
        }
      }
      if (s !== null) {
        var W = u.baseState, X = ae, J = null, xe = null, Xe = null, Ve = s;
        do {
          var Ut = Ve.lane, Dt = Ve.eventTime;
          if (Au(i, Ut)) {
            if (Xe !== null) {
              var Z = {
                eventTime: Dt,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Ft,
                tag: Ve.tag,
                payload: Ve.payload,
                callback: Ve.callback,
                next: null
              };
              Xe = Xe.next = Z;
            }
            W = Nb(e, u, Ve, W, t, a);
            var $ = Ve.callback;
            if ($ !== null && // If the update was already committed, we should not queue its
            // callback again.
            Ve.lane !== Ft) {
              e.flags |= on;
              var fe = u.effects;
              fe === null ? u.effects = [Ve] : fe.push(Ve);
            }
          } else {
            var B = {
              eventTime: Dt,
              lane: Ut,
              tag: Ve.tag,
              payload: Ve.payload,
              callback: Ve.callback,
              next: null
            };
            Xe === null ? (xe = Xe = B, J = W) : Xe = Xe.next = B, X = pt(X, Ut);
          }
          if (Ve = Ve.next, Ve === null) {
            if (h = u.shared.pending, h === null)
              break;
            var Oe = h, _e = Oe.next;
            Oe.next = null, Ve = _e, u.lastBaseUpdate = Oe, u.shared.pending = null;
          }
        } while (!0);
        Xe === null && (J = W), u.baseState = J, u.firstBaseUpdate = xe, u.lastBaseUpdate = Xe;
        var rt = u.shared.interleaved;
        if (rt !== null) {
          var st = rt;
          do
            X = pt(X, st.lane), st = st.next;
          while (st !== rt);
        } else s === null && (u.shared.lanes = ae);
        lv(X), e.lanes = X, e.memoizedState = W;
      }
      Sm = null;
    }
    function Mb(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function kR() {
      gm = !1;
    }
    function Rm() {
      return gm;
    }
    function OR(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u], f = s.callback;
          f !== null && (s.callback = null, Mb(f, a));
        }
    }
    var Up = {}, Io = jo(Up), Ap = jo(Up), wm = jo(Up);
    function Tm(e) {
      if (e === Up)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function LR() {
      var e = Tm(wm.current);
      return e;
    }
    function tS(e, t) {
      ia(wm, t, e), ia(Ap, e, e), ia(Io, Up, e);
      var a = Kx(t);
      aa(Io, e), ia(Io, a, e);
    }
    function Bf(e) {
      aa(Io, e), aa(Ap, e), aa(wm, e);
    }
    function nS() {
      var e = Tm(Io.current);
      return e;
    }
    function NR(e) {
      Tm(wm.current);
      var t = Tm(Io.current), a = qx(t, e.type);
      t !== a && (ia(Ap, e, e), ia(Io, a, e));
    }
    function rS(e) {
      Ap.current === e && (aa(Io, e), aa(Ap, e));
    }
    var Ub = 0, MR = 1, UR = 1, zp = 2, cl = jo(Ub);
    function aS(e, t) {
      return (e & t) !== 0;
    }
    function $f(e) {
      return e & MR;
    }
    function iS(e, t) {
      return e & MR | t;
    }
    function Ab(e, t) {
      return e | t;
    }
    function Yo(e, t) {
      ia(cl, t, e);
    }
    function If(e) {
      aa(cl, e);
    }
    function zb(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function xm(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === me) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || qC(i) || wg(i))
              return t;
          }
        } else if (t.tag === Ct && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var u = (t.flags & Ie) !== Ye;
          if (u)
            return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e)
          return null;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var Va = (
      /*   */
      0
    ), fr = (
      /* */
      1
    ), Kl = (
      /*  */
      2
    ), dr = (
      /*    */
      4
    ), Pr = (
      /*   */
      8
    ), lS = [];
    function uS() {
      for (var e = 0; e < lS.length; e++) {
        var t = lS[e];
        t._workInProgressVersionPrimary = null;
      }
      lS.length = 0;
    }
    function Fb(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var ke = v.ReactCurrentDispatcher, Fp = v.ReactCurrentBatchConfig, oS, Yf;
    oS = /* @__PURE__ */ new Set();
    var oc = ae, en = null, pr = null, vr = null, _m = !1, Pp = !1, jp = 0, Pb = 0, jb = 25, te = null, Pi = null, Wo = -1, sS = !1;
    function Wt() {
      {
        var e = te;
        Pi === null ? Pi = [e] : Pi.push(e);
      }
    }
    function Ee() {
      {
        var e = te;
        Pi !== null && (Wo++, Pi[Wo] !== e && Hb(e));
      }
    }
    function Wf(e) {
      e != null && !Et(e) && g("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", te, typeof e);
    }
    function Hb(e) {
      {
        var t = lt(en);
        if (!oS.has(t) && (oS.add(t), Pi !== null)) {
          for (var a = "", i = 30, u = 0; u <= Wo; u++) {
            for (var s = Pi[u], f = u === Wo ? e : s, h = u + 1 + ". " + s; h.length < i; )
              h += " ";
            h += f + `
`, a += h;
          }
          g(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function la() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function cS(e, t) {
      if (sS)
        return !1;
      if (t === null)
        return g("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", te), !1;
      e.length !== t.length && g(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, te, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!oe(e[a], t[a]))
          return !1;
      return !0;
    }
    function Qf(e, t, a, i, u, s) {
      oc = s, en = t, Pi = e !== null ? e._debugHookTypes : null, Wo = -1, sS = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = ae, e !== null && e.memoizedState !== null ? ke.current = nw : Pi !== null ? ke.current = tw : ke.current = ew;
      var f = a(i, u);
      if (Pp) {
        var h = 0;
        do {
          if (Pp = !1, jp = 0, h >= jb)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          h += 1, sS = !1, pr = null, vr = null, t.updateQueue = null, Wo = -1, ke.current = rw, f = a(i, u);
        } while (Pp);
      }
      ke.current = jm, t._debugHookTypes = Pi;
      var y = pr !== null && pr.next !== null;
      if (oc = ae, en = null, pr = null, vr = null, te = null, Pi = null, Wo = -1, e !== null && (e.flags & zn) !== (t.flags & zn) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & xt) !== We && g("Internal React error: Expected static flag was missing. Please notify the React team."), _m = !1, y)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function Gf() {
      var e = jp !== 0;
      return jp = 0, e;
    }
    function AR(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & Ht) !== We ? t.flags &= -50333701 : t.flags &= -2053, e.lanes = Us(e.lanes, a);
    }
    function zR() {
      if (ke.current = jm, _m) {
        for (var e = en.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        _m = !1;
      }
      oc = ae, en = null, pr = null, vr = null, Pi = null, Wo = -1, te = null, XR = !1, Pp = !1, jp = 0;
    }
    function ql() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return vr === null ? en.memoizedState = vr = e : vr = vr.next = e, vr;
    }
    function ji() {
      var e;
      if (pr === null) {
        var t = en.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = pr.next;
      var a;
      if (vr === null ? a = en.memoizedState : a = vr.next, a !== null)
        vr = a, a = vr.next, pr = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        pr = e;
        var i = {
          memoizedState: pr.memoizedState,
          baseState: pr.baseState,
          baseQueue: pr.baseQueue,
          queue: pr.queue,
          next: null
        };
        vr === null ? en.memoizedState = vr = i : vr = vr.next = i;
      }
      return vr;
    }
    function FR() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function fS(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function dS(e, t, a) {
      var i = ql(), u;
      a !== void 0 ? u = a(t) : u = t, i.memoizedState = i.baseState = u;
      var s = {
        pending: null,
        interleaved: null,
        lanes: ae,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      };
      i.queue = s;
      var f = s.dispatch = Ib.bind(null, en, s);
      return [i.memoizedState, f];
    }
    function pS(e, t, a) {
      var i = ji(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = pr, f = s.baseQueue, h = u.pending;
      if (h !== null) {
        if (f !== null) {
          var y = f.next, C = h.next;
          f.next = C, h.next = y;
        }
        s.baseQueue !== f && g("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = f = h, u.pending = null;
      }
      if (f !== null) {
        var T = f.next, z = s.baseState, M = null, W = null, X = null, J = T;
        do {
          var xe = J.lane;
          if (Au(oc, xe)) {
            if (X !== null) {
              var Ve = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Ft,
                action: J.action,
                hasEagerState: J.hasEagerState,
                eagerState: J.eagerState,
                next: null
              };
              X = X.next = Ve;
            }
            if (J.hasEagerState)
              z = J.eagerState;
            else {
              var Ut = J.action;
              z = e(z, Ut);
            }
          } else {
            var Xe = {
              lane: xe,
              action: J.action,
              hasEagerState: J.hasEagerState,
              eagerState: J.eagerState,
              next: null
            };
            X === null ? (W = X = Xe, M = z) : X = X.next = Xe, en.lanes = pt(en.lanes, xe), lv(xe);
          }
          J = J.next;
        } while (J !== null && J !== T);
        X === null ? M = z : X.next = W, oe(z, i.memoizedState) || Gp(), i.memoizedState = z, i.baseState = M, i.baseQueue = X, u.lastRenderedState = z;
      }
      var Dt = u.interleaved;
      if (Dt !== null) {
        var B = Dt;
        do {
          var Z = B.lane;
          en.lanes = pt(en.lanes, Z), lv(Z), B = B.next;
        } while (B !== Dt);
      } else f === null && (u.lanes = ae);
      var $ = u.dispatch;
      return [i.memoizedState, $];
    }
    function vS(e, t, a) {
      var i = ji(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = u.dispatch, f = u.pending, h = i.memoizedState;
      if (f !== null) {
        u.pending = null;
        var y = f.next, C = y;
        do {
          var T = C.action;
          h = e(h, T), C = C.next;
        } while (C !== y);
        oe(h, i.memoizedState) || Gp(), i.memoizedState = h, i.baseQueue === null && (i.baseState = h), u.lastRenderedState = h;
      }
      return [h, s];
    }
    function sN(e, t, a) {
    }
    function cN(e, t, a) {
    }
    function hS(e, t, a) {
      var i = en, u = ql(), s, f = Fr();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), Yf || s !== a() && (g("The result of getServerSnapshot should be cached to avoid an infinite loop"), Yf = !0);
      } else {
        if (s = t(), !Yf) {
          var h = t();
          oe(s, h) || (g("The result of getSnapshot should be cached to avoid an infinite loop"), Yf = !0);
        }
        var y = ay();
        if (y === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        ff(y, oc) || PR(i, t, s);
      }
      u.memoizedState = s;
      var C = {
        value: s,
        getSnapshot: t
      };
      return u.queue = C, Lm(HR.bind(null, i, C, e), [e]), i.flags |= Xr, Hp(fr | Pr, jR.bind(null, i, C, s, t), void 0, null), s;
    }
    function bm(e, t, a) {
      var i = en, u = ji(), s = t();
      if (!Yf) {
        var f = t();
        oe(s, f) || (g("The result of getSnapshot should be cached to avoid an infinite loop"), Yf = !0);
      }
      var h = u.memoizedState, y = !oe(h, s);
      y && (u.memoizedState = s, Gp());
      var C = u.queue;
      if (Bp(HR.bind(null, i, C, e), [e]), C.getSnapshot !== t || y || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      vr !== null && vr.memoizedState.tag & fr) {
        i.flags |= Xr, Hp(fr | Pr, jR.bind(null, i, C, s, t), void 0, null);
        var T = ay();
        if (T === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        ff(T, oc) || PR(i, t, s);
      }
      return s;
    }
    function PR(e, t, a) {
      e.flags |= wo;
      var i = {
        getSnapshot: t,
        value: a
      }, u = en.updateQueue;
      if (u === null)
        u = FR(), en.updateQueue = u, u.stores = [i];
      else {
        var s = u.stores;
        s === null ? u.stores = [i] : s.push(i);
      }
    }
    function jR(e, t, a, i) {
      t.value = a, t.getSnapshot = i, VR(t) && BR(e);
    }
    function HR(e, t, a) {
      var i = function() {
        VR(t) && BR(e);
      };
      return a(i);
    }
    function VR(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !oe(a, i);
      } catch {
        return !0;
      }
    }
    function BR(e) {
      var t = Ha(e, tt);
      t !== null && gr(t, e, tt, nn);
    }
    function Dm(e) {
      var t = ql();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: ae,
        dispatch: null,
        lastRenderedReducer: fS,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = Yb.bind(null, en, a);
      return [t.memoizedState, i];
    }
    function mS(e) {
      return pS(fS);
    }
    function yS(e) {
      return vS(fS);
    }
    function Hp(e, t, a, i) {
      var u = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = en.updateQueue;
      if (s === null)
        s = FR(), en.updateQueue = s, s.lastEffect = u.next = u;
      else {
        var f = s.lastEffect;
        if (f === null)
          s.lastEffect = u.next = u;
        else {
          var h = f.next;
          f.next = u, u.next = h, s.lastEffect = u;
        }
      }
      return u;
    }
    function gS(e) {
      var t = ql();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function km(e) {
      var t = ji();
      return t.memoizedState;
    }
    function Vp(e, t, a, i) {
      var u = ql(), s = i === void 0 ? null : i;
      en.flags |= e, u.memoizedState = Hp(fr | t, a, void 0, s);
    }
    function Om(e, t, a, i) {
      var u = ji(), s = i === void 0 ? null : i, f = void 0;
      if (pr !== null) {
        var h = pr.memoizedState;
        if (f = h.destroy, s !== null) {
          var y = h.deps;
          if (cS(s, y)) {
            u.memoizedState = Hp(t, a, f, s);
            return;
          }
        }
      }
      en.flags |= e, u.memoizedState = Hp(fr | t, a, f, s);
    }
    function Lm(e, t) {
      return (en.mode & Ht) !== We ? Vp(_i | Xr | Fc, Pr, e, t) : Vp(Xr | Fc, Pr, e, t);
    }
    function Bp(e, t) {
      return Om(Xr, Pr, e, t);
    }
    function SS(e, t) {
      return Vp(Lt, Kl, e, t);
    }
    function Nm(e, t) {
      return Om(Lt, Kl, e, t);
    }
    function ES(e, t) {
      var a = Lt;
      return a |= Ji, (en.mode & Ht) !== We && (a |= Nl), Vp(a, dr, e, t);
    }
    function Mm(e, t) {
      return Om(Lt, dr, e, t);
    }
    function $R(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var u = t;
        u.hasOwnProperty("current") || g("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(u).join(", ") + "}");
        var s = e();
        return u.current = s, function() {
          u.current = null;
        };
      }
    }
    function CS(e, t, a) {
      typeof t != "function" && g("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, u = Lt;
      return u |= Ji, (en.mode & Ht) !== We && (u |= Nl), Vp(u, dr, $R.bind(null, t, e), i);
    }
    function Um(e, t, a) {
      typeof t != "function" && g("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return Om(Lt, dr, $R.bind(null, t, e), i);
    }
    function Vb(e, t) {
    }
    var Am = Vb;
    function RS(e, t) {
      var a = ql(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function zm(e, t) {
      var a = ji(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (cS(i, s))
          return u[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function wS(e, t) {
      var a = ql(), i = t === void 0 ? null : t, u = e();
      return a.memoizedState = [u, i], u;
    }
    function Fm(e, t) {
      var a = ji(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (cS(i, s))
          return u[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function TS(e) {
      var t = ql();
      return t.memoizedState = e, e;
    }
    function IR(e) {
      var t = ji(), a = pr, i = a.memoizedState;
      return WR(t, i, e);
    }
    function YR(e) {
      var t = ji();
      if (pr === null)
        return t.memoizedState = e, e;
      var a = pr.memoizedState;
      return WR(t, a, e);
    }
    function WR(e, t, a) {
      var i = !Id(oc);
      if (i) {
        if (!oe(a, t)) {
          var u = Qd();
          en.lanes = pt(en.lanes, u), lv(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, Gp()), e.memoizedState = a, a;
    }
    function Bb(e, t, a) {
      var i = Fa();
      jn(vh(i, Oi)), e(!0);
      var u = Fp.transition;
      Fp.transition = {};
      var s = Fp.transition;
      Fp.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (jn(i), Fp.transition = u, u === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && b("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function xS() {
      var e = Dm(!1), t = e[0], a = e[1], i = Bb.bind(null, a), u = ql();
      return u.memoizedState = i, [t, i];
    }
    function QR() {
      var e = mS(), t = e[0], a = ji(), i = a.memoizedState;
      return [t, i];
    }
    function GR() {
      var e = yS(), t = e[0], a = ji(), i = a.memoizedState;
      return [t, i];
    }
    var XR = !1;
    function $b() {
      return XR;
    }
    function _S() {
      var e = ql(), t = ay(), a = t.identifierPrefix, i;
      if (Fr()) {
        var u = lb();
        i = ":" + a + "R" + u;
        var s = jp++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = Pb++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function Pm() {
      var e = ji(), t = e.memoizedState;
      return t;
    }
    function Ib(e, t, a) {
      typeof arguments[3] == "function" && g("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = qo(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (KR(e))
        qR(t, u);
      else {
        var s = xR(e, t, u, i);
        if (s !== null) {
          var f = Ra();
          gr(s, e, i, f), JR(s, t, i);
        }
      }
      ZR(e, i);
    }
    function Yb(e, t, a) {
      typeof arguments[3] == "function" && g("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = qo(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (KR(e))
        qR(t, u);
      else {
        var s = e.alternate;
        if (e.lanes === ae && (s === null || s.lanes === ae)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var h;
            h = ke.current, ke.current = fl;
            try {
              var y = t.lastRenderedState, C = f(y, a);
              if (u.hasEagerState = !0, u.eagerState = C, oe(C, y)) {
                kb(e, t, u, i);
                return;
              }
            } catch {
            } finally {
              ke.current = h;
            }
          }
        }
        var T = xR(e, t, u, i);
        if (T !== null) {
          var z = Ra();
          gr(T, e, i, z), JR(T, t, i);
        }
      }
      ZR(e, i);
    }
    function KR(e) {
      var t = e.alternate;
      return e === en || t !== null && t === en;
    }
    function qR(e, t) {
      Pp = _m = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function JR(e, t, a) {
      if (Wd(a)) {
        var i = t.lanes;
        i = Gd(i, e.pendingLanes);
        var u = pt(i, a);
        t.lanes = u, pf(e, u);
      }
    }
    function ZR(e, t, a) {
      Ts(e, t);
    }
    var jm = {
      readContext: nr,
      useCallback: la,
      useContext: la,
      useEffect: la,
      useImperativeHandle: la,
      useInsertionEffect: la,
      useLayoutEffect: la,
      useMemo: la,
      useReducer: la,
      useRef: la,
      useState: la,
      useDebugValue: la,
      useDeferredValue: la,
      useTransition: la,
      useMutableSource: la,
      useSyncExternalStore: la,
      useId: la,
      unstable_isNewReconciler: he
    }, ew = null, tw = null, nw = null, rw = null, Jl = null, fl = null, Hm = null;
    {
      var bS = function() {
        g("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, ot = function() {
        g("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      ew = {
        readContext: function(e) {
          return nr(e);
        },
        useCallback: function(e, t) {
          return te = "useCallback", Wt(), Wf(t), RS(e, t);
        },
        useContext: function(e) {
          return te = "useContext", Wt(), nr(e);
        },
        useEffect: function(e, t) {
          return te = "useEffect", Wt(), Wf(t), Lm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return te = "useImperativeHandle", Wt(), Wf(a), CS(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return te = "useInsertionEffect", Wt(), Wf(t), SS(e, t);
        },
        useLayoutEffect: function(e, t) {
          return te = "useLayoutEffect", Wt(), Wf(t), ES(e, t);
        },
        useMemo: function(e, t) {
          te = "useMemo", Wt(), Wf(t);
          var a = ke.current;
          ke.current = Jl;
          try {
            return wS(e, t);
          } finally {
            ke.current = a;
          }
        },
        useReducer: function(e, t, a) {
          te = "useReducer", Wt();
          var i = ke.current;
          ke.current = Jl;
          try {
            return dS(e, t, a);
          } finally {
            ke.current = i;
          }
        },
        useRef: function(e) {
          return te = "useRef", Wt(), gS(e);
        },
        useState: function(e) {
          te = "useState", Wt();
          var t = ke.current;
          ke.current = Jl;
          try {
            return Dm(e);
          } finally {
            ke.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return te = "useDebugValue", Wt(), void 0;
        },
        useDeferredValue: function(e) {
          return te = "useDeferredValue", Wt(), TS(e);
        },
        useTransition: function() {
          return te = "useTransition", Wt(), xS();
        },
        useMutableSource: function(e, t, a) {
          return te = "useMutableSource", Wt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return te = "useSyncExternalStore", Wt(), hS(e, t, a);
        },
        useId: function() {
          return te = "useId", Wt(), _S();
        },
        unstable_isNewReconciler: he
      }, tw = {
        readContext: function(e) {
          return nr(e);
        },
        useCallback: function(e, t) {
          return te = "useCallback", Ee(), RS(e, t);
        },
        useContext: function(e) {
          return te = "useContext", Ee(), nr(e);
        },
        useEffect: function(e, t) {
          return te = "useEffect", Ee(), Lm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return te = "useImperativeHandle", Ee(), CS(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return te = "useInsertionEffect", Ee(), SS(e, t);
        },
        useLayoutEffect: function(e, t) {
          return te = "useLayoutEffect", Ee(), ES(e, t);
        },
        useMemo: function(e, t) {
          te = "useMemo", Ee();
          var a = ke.current;
          ke.current = Jl;
          try {
            return wS(e, t);
          } finally {
            ke.current = a;
          }
        },
        useReducer: function(e, t, a) {
          te = "useReducer", Ee();
          var i = ke.current;
          ke.current = Jl;
          try {
            return dS(e, t, a);
          } finally {
            ke.current = i;
          }
        },
        useRef: function(e) {
          return te = "useRef", Ee(), gS(e);
        },
        useState: function(e) {
          te = "useState", Ee();
          var t = ke.current;
          ke.current = Jl;
          try {
            return Dm(e);
          } finally {
            ke.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return te = "useDebugValue", Ee(), void 0;
        },
        useDeferredValue: function(e) {
          return te = "useDeferredValue", Ee(), TS(e);
        },
        useTransition: function() {
          return te = "useTransition", Ee(), xS();
        },
        useMutableSource: function(e, t, a) {
          return te = "useMutableSource", Ee(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return te = "useSyncExternalStore", Ee(), hS(e, t, a);
        },
        useId: function() {
          return te = "useId", Ee(), _S();
        },
        unstable_isNewReconciler: he
      }, nw = {
        readContext: function(e) {
          return nr(e);
        },
        useCallback: function(e, t) {
          return te = "useCallback", Ee(), zm(e, t);
        },
        useContext: function(e) {
          return te = "useContext", Ee(), nr(e);
        },
        useEffect: function(e, t) {
          return te = "useEffect", Ee(), Bp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return te = "useImperativeHandle", Ee(), Um(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return te = "useInsertionEffect", Ee(), Nm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return te = "useLayoutEffect", Ee(), Mm(e, t);
        },
        useMemo: function(e, t) {
          te = "useMemo", Ee();
          var a = ke.current;
          ke.current = fl;
          try {
            return Fm(e, t);
          } finally {
            ke.current = a;
          }
        },
        useReducer: function(e, t, a) {
          te = "useReducer", Ee();
          var i = ke.current;
          ke.current = fl;
          try {
            return pS(e, t, a);
          } finally {
            ke.current = i;
          }
        },
        useRef: function(e) {
          return te = "useRef", Ee(), km();
        },
        useState: function(e) {
          te = "useState", Ee();
          var t = ke.current;
          ke.current = fl;
          try {
            return mS(e);
          } finally {
            ke.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return te = "useDebugValue", Ee(), Am();
        },
        useDeferredValue: function(e) {
          return te = "useDeferredValue", Ee(), IR(e);
        },
        useTransition: function() {
          return te = "useTransition", Ee(), QR();
        },
        useMutableSource: function(e, t, a) {
          return te = "useMutableSource", Ee(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return te = "useSyncExternalStore", Ee(), bm(e, t);
        },
        useId: function() {
          return te = "useId", Ee(), Pm();
        },
        unstable_isNewReconciler: he
      }, rw = {
        readContext: function(e) {
          return nr(e);
        },
        useCallback: function(e, t) {
          return te = "useCallback", Ee(), zm(e, t);
        },
        useContext: function(e) {
          return te = "useContext", Ee(), nr(e);
        },
        useEffect: function(e, t) {
          return te = "useEffect", Ee(), Bp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return te = "useImperativeHandle", Ee(), Um(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return te = "useInsertionEffect", Ee(), Nm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return te = "useLayoutEffect", Ee(), Mm(e, t);
        },
        useMemo: function(e, t) {
          te = "useMemo", Ee();
          var a = ke.current;
          ke.current = Hm;
          try {
            return Fm(e, t);
          } finally {
            ke.current = a;
          }
        },
        useReducer: function(e, t, a) {
          te = "useReducer", Ee();
          var i = ke.current;
          ke.current = Hm;
          try {
            return vS(e, t, a);
          } finally {
            ke.current = i;
          }
        },
        useRef: function(e) {
          return te = "useRef", Ee(), km();
        },
        useState: function(e) {
          te = "useState", Ee();
          var t = ke.current;
          ke.current = Hm;
          try {
            return yS(e);
          } finally {
            ke.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return te = "useDebugValue", Ee(), Am();
        },
        useDeferredValue: function(e) {
          return te = "useDeferredValue", Ee(), YR(e);
        },
        useTransition: function() {
          return te = "useTransition", Ee(), GR();
        },
        useMutableSource: function(e, t, a) {
          return te = "useMutableSource", Ee(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return te = "useSyncExternalStore", Ee(), bm(e, t);
        },
        useId: function() {
          return te = "useId", Ee(), Pm();
        },
        unstable_isNewReconciler: he
      }, Jl = {
        readContext: function(e) {
          return bS(), nr(e);
        },
        useCallback: function(e, t) {
          return te = "useCallback", ot(), Wt(), RS(e, t);
        },
        useContext: function(e) {
          return te = "useContext", ot(), Wt(), nr(e);
        },
        useEffect: function(e, t) {
          return te = "useEffect", ot(), Wt(), Lm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return te = "useImperativeHandle", ot(), Wt(), CS(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return te = "useInsertionEffect", ot(), Wt(), SS(e, t);
        },
        useLayoutEffect: function(e, t) {
          return te = "useLayoutEffect", ot(), Wt(), ES(e, t);
        },
        useMemo: function(e, t) {
          te = "useMemo", ot(), Wt();
          var a = ke.current;
          ke.current = Jl;
          try {
            return wS(e, t);
          } finally {
            ke.current = a;
          }
        },
        useReducer: function(e, t, a) {
          te = "useReducer", ot(), Wt();
          var i = ke.current;
          ke.current = Jl;
          try {
            return dS(e, t, a);
          } finally {
            ke.current = i;
          }
        },
        useRef: function(e) {
          return te = "useRef", ot(), Wt(), gS(e);
        },
        useState: function(e) {
          te = "useState", ot(), Wt();
          var t = ke.current;
          ke.current = Jl;
          try {
            return Dm(e);
          } finally {
            ke.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return te = "useDebugValue", ot(), Wt(), void 0;
        },
        useDeferredValue: function(e) {
          return te = "useDeferredValue", ot(), Wt(), TS(e);
        },
        useTransition: function() {
          return te = "useTransition", ot(), Wt(), xS();
        },
        useMutableSource: function(e, t, a) {
          return te = "useMutableSource", ot(), Wt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return te = "useSyncExternalStore", ot(), Wt(), hS(e, t, a);
        },
        useId: function() {
          return te = "useId", ot(), Wt(), _S();
        },
        unstable_isNewReconciler: he
      }, fl = {
        readContext: function(e) {
          return bS(), nr(e);
        },
        useCallback: function(e, t) {
          return te = "useCallback", ot(), Ee(), zm(e, t);
        },
        useContext: function(e) {
          return te = "useContext", ot(), Ee(), nr(e);
        },
        useEffect: function(e, t) {
          return te = "useEffect", ot(), Ee(), Bp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return te = "useImperativeHandle", ot(), Ee(), Um(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return te = "useInsertionEffect", ot(), Ee(), Nm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return te = "useLayoutEffect", ot(), Ee(), Mm(e, t);
        },
        useMemo: function(e, t) {
          te = "useMemo", ot(), Ee();
          var a = ke.current;
          ke.current = fl;
          try {
            return Fm(e, t);
          } finally {
            ke.current = a;
          }
        },
        useReducer: function(e, t, a) {
          te = "useReducer", ot(), Ee();
          var i = ke.current;
          ke.current = fl;
          try {
            return pS(e, t, a);
          } finally {
            ke.current = i;
          }
        },
        useRef: function(e) {
          return te = "useRef", ot(), Ee(), km();
        },
        useState: function(e) {
          te = "useState", ot(), Ee();
          var t = ke.current;
          ke.current = fl;
          try {
            return mS(e);
          } finally {
            ke.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return te = "useDebugValue", ot(), Ee(), Am();
        },
        useDeferredValue: function(e) {
          return te = "useDeferredValue", ot(), Ee(), IR(e);
        },
        useTransition: function() {
          return te = "useTransition", ot(), Ee(), QR();
        },
        useMutableSource: function(e, t, a) {
          return te = "useMutableSource", ot(), Ee(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return te = "useSyncExternalStore", ot(), Ee(), bm(e, t);
        },
        useId: function() {
          return te = "useId", ot(), Ee(), Pm();
        },
        unstable_isNewReconciler: he
      }, Hm = {
        readContext: function(e) {
          return bS(), nr(e);
        },
        useCallback: function(e, t) {
          return te = "useCallback", ot(), Ee(), zm(e, t);
        },
        useContext: function(e) {
          return te = "useContext", ot(), Ee(), nr(e);
        },
        useEffect: function(e, t) {
          return te = "useEffect", ot(), Ee(), Bp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return te = "useImperativeHandle", ot(), Ee(), Um(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return te = "useInsertionEffect", ot(), Ee(), Nm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return te = "useLayoutEffect", ot(), Ee(), Mm(e, t);
        },
        useMemo: function(e, t) {
          te = "useMemo", ot(), Ee();
          var a = ke.current;
          ke.current = fl;
          try {
            return Fm(e, t);
          } finally {
            ke.current = a;
          }
        },
        useReducer: function(e, t, a) {
          te = "useReducer", ot(), Ee();
          var i = ke.current;
          ke.current = fl;
          try {
            return vS(e, t, a);
          } finally {
            ke.current = i;
          }
        },
        useRef: function(e) {
          return te = "useRef", ot(), Ee(), km();
        },
        useState: function(e) {
          te = "useState", ot(), Ee();
          var t = ke.current;
          ke.current = fl;
          try {
            return yS(e);
          } finally {
            ke.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return te = "useDebugValue", ot(), Ee(), Am();
        },
        useDeferredValue: function(e) {
          return te = "useDeferredValue", ot(), Ee(), YR(e);
        },
        useTransition: function() {
          return te = "useTransition", ot(), Ee(), GR();
        },
        useMutableSource: function(e, t, a) {
          return te = "useMutableSource", ot(), Ee(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return te = "useSyncExternalStore", ot(), Ee(), bm(e, t);
        },
        useId: function() {
          return te = "useId", ot(), Ee(), Pm();
        },
        unstable_isNewReconciler: he
      };
    }
    var Qo = m.unstable_now, aw = 0, Vm = -1, $p = -1, Bm = -1, DS = !1, $m = !1;
    function iw() {
      return DS;
    }
    function Wb() {
      $m = !0;
    }
    function Qb() {
      DS = !1, $m = !1;
    }
    function Gb() {
      DS = $m, $m = !1;
    }
    function lw() {
      return aw;
    }
    function uw() {
      aw = Qo();
    }
    function kS(e) {
      $p = Qo(), e.actualStartTime < 0 && (e.actualStartTime = Qo());
    }
    function ow(e) {
      $p = -1;
    }
    function Im(e, t) {
      if ($p >= 0) {
        var a = Qo() - $p;
        e.actualDuration += a, t && (e.selfBaseDuration = a), $p = -1;
      }
    }
    function Zl(e) {
      if (Vm >= 0) {
        var t = Qo() - Vm;
        Vm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case O:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case pe:
              var u = a.stateNode;
              u.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function OS(e) {
      if (Bm >= 0) {
        var t = Qo() - Bm;
        Bm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case O:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case pe:
              var u = a.stateNode;
              u !== null && (u.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function eu() {
      Vm = Qo();
    }
    function LS() {
      Bm = Qo();
    }
    function NS(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function dl(e, t) {
      if (e && e.defaultProps) {
        var a = ht({}, t), i = e.defaultProps;
        for (var u in i)
          a[u] === void 0 && (a[u] = i[u]);
        return a;
      }
      return t;
    }
    var MS = {}, US, AS, zS, FS, PS, sw, Ym, jS, HS, VS, Ip;
    {
      US = /* @__PURE__ */ new Set(), AS = /* @__PURE__ */ new Set(), zS = /* @__PURE__ */ new Set(), FS = /* @__PURE__ */ new Set(), jS = /* @__PURE__ */ new Set(), PS = /* @__PURE__ */ new Set(), HS = /* @__PURE__ */ new Set(), VS = /* @__PURE__ */ new Set(), Ip = /* @__PURE__ */ new Set();
      var cw = /* @__PURE__ */ new Set();
      Ym = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          cw.has(a) || (cw.add(a), g("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, sw = function(e, t) {
        if (t === void 0) {
          var a = At(e) || "Component";
          PS.has(a) || (PS.add(a), g("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(MS, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(MS);
    }
    function BS(e, t, a, i) {
      var u = e.memoizedState, s = a(i, u);
      {
        if (e.mode & Zt) {
          gn(!0);
          try {
            s = a(i, u);
          } finally {
            gn(!1);
          }
        }
        sw(t, s);
      }
      var f = s == null ? u : ht({}, u, s);
      if (e.memoizedState = f, e.lanes === ae) {
        var h = e.updateQueue;
        h.baseState = f;
      }
    }
    var $S = {
      isMounted: Jv,
      enqueueSetState: function(e, t, a) {
        var i = Ro(e), u = Ra(), s = qo(i), f = Qu(u, s);
        f.payload = t, a != null && (Ym(a, "setState"), f.callback = a);
        var h = $o(i, f, s);
        h !== null && (gr(h, i, s, u), Em(h, i, s)), Ts(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = Ro(e), u = Ra(), s = qo(i), f = Qu(u, s);
        f.tag = bR, f.payload = t, a != null && (Ym(a, "replaceState"), f.callback = a);
        var h = $o(i, f, s);
        h !== null && (gr(h, i, s, u), Em(h, i, s)), Ts(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = Ro(e), i = Ra(), u = qo(a), s = Qu(i, u);
        s.tag = ym, t != null && (Ym(t, "forceUpdate"), s.callback = t);
        var f = $o(a, s, u);
        f !== null && (gr(f, a, u, i), Em(f, a, u)), Ic(a, u);
      }
    };
    function fw(e, t, a, i, u, s, f) {
      var h = e.stateNode;
      if (typeof h.shouldComponentUpdate == "function") {
        var y = h.shouldComponentUpdate(i, s, f);
        {
          if (e.mode & Zt) {
            gn(!0);
            try {
              y = h.shouldComponentUpdate(i, s, f);
            } finally {
              gn(!1);
            }
          }
          y === void 0 && g("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", At(t) || "Component");
        }
        return y;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !Ae(a, i) || !Ae(u, s) : !0;
    }
    function Xb(e, t, a) {
      var i = e.stateNode;
      {
        var u = At(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? g("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : g("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && g("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && g("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), i.propTypes && g("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), i.contextType && g("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), t.childContextTypes && !Ip.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & Zt) === We && (Ip.add(t), g(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), t.contextTypes && !Ip.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & Zt) === We && (Ip.add(t), g(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), i.contextTypes && g("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !HS.has(t) && (HS.add(t), g("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof i.componentShouldUpdate == "function" && g("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && g("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", At(t) || "A pure component"), typeof i.componentDidUnmount == "function" && g("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof i.componentDidReceiveProps == "function" && g("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof i.componentWillRecieveProps == "function" && g("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof i.UNSAFE_componentWillRecieveProps == "function" && g("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var f = i.props !== a;
        i.props !== void 0 && f && g("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), i.defaultProps && g("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !zS.has(t) && (zS.add(t), g("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", At(t))), typeof i.getDerivedStateFromProps == "function" && g("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof i.getDerivedStateFromError == "function" && g("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && g("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var h = i.state;
        h && (typeof h != "object" || Et(h)) && g("%s.state: must be set to an object or null", u), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && g("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function dw(e, t) {
      t.updater = $S, e.stateNode = t, Cu(t, e), t._reactInternalInstance = MS;
    }
    function pw(e, t, a) {
      var i = !1, u = ci, s = ci, f = t.contextType;
      if ("contextType" in t) {
        var h = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === k && f._context === void 0
        );
        if (!h && !VS.has(t)) {
          VS.add(t);
          var y = "";
          f === void 0 ? y = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? y = " However, it is set to a " + typeof f + "." : f.$$typeof === yi ? y = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? y = " Did you accidentally pass the Context.Consumer instead?" : y = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", g("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", At(t) || "Component", y);
        }
      }
      if (typeof f == "object" && f !== null)
        s = nr(f);
      else {
        u = Uf(e, t, !0);
        var C = t.contextTypes;
        i = C != null, s = i ? Af(e, u) : ci;
      }
      var T = new t(a, s);
      if (e.mode & Zt) {
        gn(!0);
        try {
          T = new t(a, s);
        } finally {
          gn(!1);
        }
      }
      var z = e.memoizedState = T.state !== null && T.state !== void 0 ? T.state : null;
      dw(e, T);
      {
        if (typeof t.getDerivedStateFromProps == "function" && z === null) {
          var M = At(t) || "Component";
          AS.has(M) || (AS.add(M), g("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", M, T.state === null ? "null" : "undefined", M));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof T.getSnapshotBeforeUpdate == "function") {
          var W = null, X = null, J = null;
          if (typeof T.componentWillMount == "function" && T.componentWillMount.__suppressDeprecationWarning !== !0 ? W = "componentWillMount" : typeof T.UNSAFE_componentWillMount == "function" && (W = "UNSAFE_componentWillMount"), typeof T.componentWillReceiveProps == "function" && T.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? X = "componentWillReceiveProps" : typeof T.UNSAFE_componentWillReceiveProps == "function" && (X = "UNSAFE_componentWillReceiveProps"), typeof T.componentWillUpdate == "function" && T.componentWillUpdate.__suppressDeprecationWarning !== !0 ? J = "componentWillUpdate" : typeof T.UNSAFE_componentWillUpdate == "function" && (J = "UNSAFE_componentWillUpdate"), W !== null || X !== null || J !== null) {
            var xe = At(t) || "Component", Xe = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            FS.has(xe) || (FS.add(xe), g(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, xe, Xe, W !== null ? `
  ` + W : "", X !== null ? `
  ` + X : "", J !== null ? `
  ` + J : ""));
          }
        }
      }
      return i && nR(e, u, s), T;
    }
    function Kb(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (g("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", lt(e) || "Component"), $S.enqueueReplaceState(t, t.state, null));
    }
    function vw(e, t, a, i) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== u) {
        {
          var s = lt(e) || "Component";
          US.has(s) || (US.add(s), g("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        $S.enqueueReplaceState(t, t.state, null);
      }
    }
    function IS(e, t, a, i) {
      Xb(e, t, a);
      var u = e.stateNode;
      u.props = a, u.state = e.memoizedState, u.refs = {}, Zg(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        u.context = nr(s);
      else {
        var f = Uf(e, t, !0);
        u.context = Af(e, f);
      }
      {
        if (u.state === a) {
          var h = At(t) || "Component";
          jS.has(h) || (jS.add(h), g("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", h));
        }
        e.mode & Zt && sl.recordLegacyContextWarning(e, u), sl.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var y = t.getDerivedStateFromProps;
      if (typeof y == "function" && (BS(e, t, y, a), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (Kb(e, u), Cm(e, a, u, i), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var C = Lt;
        C |= Ji, (e.mode & Ht) !== We && (C |= Nl), e.flags |= C;
      }
    }
    function qb(e, t, a, i) {
      var u = e.stateNode, s = e.memoizedProps;
      u.props = s;
      var f = u.context, h = t.contextType, y = ci;
      if (typeof h == "object" && h !== null)
        y = nr(h);
      else {
        var C = Uf(e, t, !0);
        y = Af(e, C);
      }
      var T = t.getDerivedStateFromProps, z = typeof T == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      !z && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (s !== a || f !== y) && vw(e, u, a, y), kR();
      var M = e.memoizedState, W = u.state = M;
      if (Cm(e, a, u, i), W = e.memoizedState, s === a && M === W && !nm() && !Rm()) {
        if (typeof u.componentDidMount == "function") {
          var X = Lt;
          X |= Ji, (e.mode & Ht) !== We && (X |= Nl), e.flags |= X;
        }
        return !1;
      }
      typeof T == "function" && (BS(e, t, T, a), W = e.memoizedState);
      var J = Rm() || fw(e, t, s, a, M, W, y);
      if (J) {
        if (!z && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var xe = Lt;
          xe |= Ji, (e.mode & Ht) !== We && (xe |= Nl), e.flags |= xe;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var Xe = Lt;
          Xe |= Ji, (e.mode & Ht) !== We && (Xe |= Nl), e.flags |= Xe;
        }
        e.memoizedProps = a, e.memoizedState = W;
      }
      return u.props = a, u.state = W, u.context = y, J;
    }
    function Jb(e, t, a, i, u) {
      var s = t.stateNode;
      DR(e, t);
      var f = t.memoizedProps, h = t.type === t.elementType ? f : dl(t.type, f);
      s.props = h;
      var y = t.pendingProps, C = s.context, T = a.contextType, z = ci;
      if (typeof T == "object" && T !== null)
        z = nr(T);
      else {
        var M = Uf(t, a, !0);
        z = Af(t, M);
      }
      var W = a.getDerivedStateFromProps, X = typeof W == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !X && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== y || C !== z) && vw(t, s, i, z), kR();
      var J = t.memoizedState, xe = s.state = J;
      if (Cm(t, i, s, u), xe = t.memoizedState, f === y && J === xe && !nm() && !Rm())
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || J !== e.memoizedState) && (t.flags |= Lt), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || J !== e.memoizedState) && (t.flags |= Qn), !1;
      typeof W == "function" && (BS(t, a, W, i), xe = t.memoizedState);
      var Xe = Rm() || fw(t, a, h, i, J, xe, z) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      $e;
      return Xe ? (!X && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, xe, z), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, xe, z)), typeof s.componentDidUpdate == "function" && (t.flags |= Lt), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= Qn)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || J !== e.memoizedState) && (t.flags |= Lt), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || J !== e.memoizedState) && (t.flags |= Qn), t.memoizedProps = i, t.memoizedState = xe), s.props = i, s.state = xe, s.context = z, Xe;
    }
    function sc(e, t) {
      return {
        value: e,
        source: t,
        stack: Wi(t),
        digest: null
      };
    }
    function YS(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function Zb(e, t) {
      return !0;
    }
    function WS(e, t) {
      try {
        var a = Zb(e, t);
        if (a === !1)
          return;
        var i = t.value, u = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === F)
            return;
          console.error(i);
        }
        var h = u ? lt(u) : null, y = h ? "The above error occurred in the <" + h + "> component:" : "The above error occurred in one of your React components:", C;
        if (e.tag === O)
          C = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var T = lt(e) || "Anonymous";
          C = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + T + ".");
        }
        var z = y + `
` + f + `

` + ("" + C);
        console.error(z);
      } catch (M) {
        setTimeout(function() {
          throw M;
        });
      }
    }
    var e1 = typeof WeakMap == "function" ? WeakMap : Map;
    function hw(e, t, a) {
      var i = Qu(nn, a);
      i.tag = qg, i.payload = {
        element: null
      };
      var u = t.value;
      return i.callback = function() {
        WD(u), WS(e, t);
      }, i;
    }
    function QS(e, t, a) {
      var i = Qu(nn, a);
      i.tag = qg;
      var u = e.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var s = t.value;
        i.payload = function() {
          return u(s);
        }, i.callback = function() {
          _T(e), WS(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        _T(e), WS(e, t), typeof u != "function" && ID(this);
        var y = t.value, C = t.stack;
        this.componentDidCatch(y, {
          componentStack: C !== null ? C : ""
        }), typeof u != "function" && (ea(e.lanes, tt) || g("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", lt(e) || "Unknown"));
      }), i;
    }
    function mw(e, t, a) {
      var i = e.pingCache, u;
      if (i === null ? (i = e.pingCache = new e1(), u = /* @__PURE__ */ new Set(), i.set(t, u)) : (u = i.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(t, u))), !u.has(a)) {
        u.add(a);
        var s = QD.bind(null, e, t, a);
        Zr && uv(e, a), t.then(s, s);
      }
    }
    function t1(e, t, a, i) {
      var u = e.updateQueue;
      if (u === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        u.add(a);
    }
    function n1(e, t) {
      var a = e.tag;
      if ((e.mode & xt) === We && (a === N || a === le || a === Se)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function yw(e) {
      var t = e;
      do {
        if (t.tag === me && zb(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function gw(e, t, a, i, u) {
      if ((e.mode & xt) === We) {
        if (e === t)
          e.flags |= Kr;
        else {
          if (e.flags |= Ie, a.flags |= zc, a.flags &= -52805, a.tag === F) {
            var s = a.alternate;
            if (s === null)
              a.tag = Qe;
            else {
              var f = Qu(nn, tt);
              f.tag = ym, $o(a, f, tt);
            }
          }
          a.lanes = pt(a.lanes, tt);
        }
        return e;
      }
      return e.flags |= Kr, e.lanes = u, e;
    }
    function r1(e, t, a, i, u) {
      if (a.flags |= gs, Zr && uv(e, u), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        n1(a), Fr() && a.mode & xt && sR();
        var f = yw(t);
        if (f !== null) {
          f.flags &= -257, gw(f, t, a, e, u), f.mode & xt && mw(e, s, u), t1(f, e, s);
          return;
        } else {
          if (!lh(u)) {
            mw(e, s, u), _E();
            return;
          }
          var h = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = h;
        }
      } else if (Fr() && a.mode & xt) {
        sR();
        var y = yw(t);
        if (y !== null) {
          (y.flags & Kr) === Ye && (y.flags |= Gr), gw(y, t, a, e, u), jg(sc(i, a));
          return;
        }
      }
      i = sc(i, a), zD(i);
      var C = t;
      do {
        switch (C.tag) {
          case O: {
            var T = i;
            C.flags |= Kr;
            var z = Ms(u);
            C.lanes = pt(C.lanes, z);
            var M = hw(C, T, z);
            eS(C, M);
            return;
          }
          case F:
            var W = i, X = C.type, J = C.stateNode;
            if ((C.flags & Ie) === Ye && (typeof X.getDerivedStateFromError == "function" || J !== null && typeof J.componentDidCatch == "function" && !yT(J))) {
              C.flags |= Kr;
              var xe = Ms(u);
              C.lanes = pt(C.lanes, xe);
              var Xe = QS(C, W, xe);
              eS(C, Xe);
              return;
            }
            break;
        }
        C = C.return;
      } while (C !== null);
    }
    function a1() {
      return null;
    }
    var Yp = v.ReactCurrentOwner, pl = !1, GS, Wp, XS, KS, qS, cc, JS, Wm, Qp;
    GS = {}, Wp = {}, XS = {}, KS = {}, qS = {}, cc = !1, JS = {}, Wm = {}, Qp = {};
    function Ea(e, t, a, i) {
      e === null ? t.child = CR(t, null, a, i) : t.child = jf(t, e.child, a, i);
    }
    function i1(e, t, a, i) {
      t.child = jf(t, e.child, null, i), t.child = jf(t, null, a, i);
    }
    function Sw(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && ul(
          s,
          i,
          // Resolved props
          "prop",
          At(a)
        );
      }
      var f = a.render, h = t.ref, y, C;
      Vf(t, u), ha(t);
      {
        if (Yp.current = t, Wn(!0), y = Qf(e, t, f, i, h, u), C = Gf(), t.mode & Zt) {
          gn(!0);
          try {
            y = Qf(e, t, f, i, h, u), C = Gf();
          } finally {
            gn(!1);
          }
        }
        Wn(!1);
      }
      return ma(), e !== null && !pl ? (AR(e, t, u), Gu(e, t, u)) : (Fr() && C && Mg(t), t.flags |= ai, Ea(e, t, y, u), t.child);
    }
    function Ew(e, t, a, i, u) {
      if (e === null) {
        var s = a.type;
        if (ck(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = nd(s), t.tag = Se, t.type = f, tE(t, s), Cw(e, t, f, i, u);
        }
        {
          var h = s.propTypes;
          if (h && ul(
            h,
            i,
            // Resolved props
            "prop",
            At(s)
          ), a.defaultProps !== void 0) {
            var y = At(s) || "Unknown";
            Qp[y] || (g("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", y), Qp[y] = !0);
          }
        }
        var C = FE(a.type, null, i, t, t.mode, u);
        return C.ref = t.ref, C.return = t, t.child = C, C;
      }
      {
        var T = a.type, z = T.propTypes;
        z && ul(
          z,
          i,
          // Resolved props
          "prop",
          At(T)
        );
      }
      var M = e.child, W = uE(e, u);
      if (!W) {
        var X = M.memoizedProps, J = a.compare;
        if (J = J !== null ? J : Ae, J(X, i) && e.ref === t.ref)
          return Gu(e, t, u);
      }
      t.flags |= ai;
      var xe = hc(M, i);
      return xe.ref = t.ref, xe.return = t, t.child = xe, xe;
    }
    function Cw(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === ut) {
          var f = s, h = f._payload, y = f._init;
          try {
            s = y(h);
          } catch {
            s = null;
          }
          var C = s && s.propTypes;
          C && ul(
            C,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            At(s)
          );
        }
      }
      if (e !== null) {
        var T = e.memoizedProps;
        if (Ae(T, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (pl = !1, t.pendingProps = i = T, uE(e, u))
            (e.flags & zc) !== Ye && (pl = !0);
          else return t.lanes = e.lanes, Gu(e, t, u);
      }
      return ZS(e, t, a, i, u);
    }
    function Rw(e, t, a) {
      var i = t.pendingProps, u = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || Re)
        if ((t.mode & xt) === We) {
          var f = {
            baseLanes: ae,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, iy(t, a);
        } else if (ea(a, ya)) {
          var z = {
            baseLanes: ae,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = z;
          var M = s !== null ? s.baseLanes : a;
          iy(t, M);
        } else {
          var h = null, y;
          if (s !== null) {
            var C = s.baseLanes;
            y = pt(C, a);
          } else
            y = a;
          t.lanes = t.childLanes = ya;
          var T = {
            baseLanes: y,
            cachePool: h,
            transitions: null
          };
          return t.memoizedState = T, t.updateQueue = null, iy(t, y), null;
        }
      else {
        var W;
        s !== null ? (W = pt(s.baseLanes, a), t.memoizedState = null) : W = a, iy(t, W);
      }
      return Ea(e, t, u, a), t.child;
    }
    function l1(e, t, a) {
      var i = t.pendingProps;
      return Ea(e, t, i, a), t.child;
    }
    function u1(e, t, a) {
      var i = t.pendingProps.children;
      return Ea(e, t, i, a), t.child;
    }
    function o1(e, t, a) {
      {
        t.flags |= Lt;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var u = t.pendingProps, s = u.children;
      return Ea(e, t, s, a), t.child;
    }
    function ww(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= Cn, t.flags |= To);
    }
    function ZS(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && ul(
          s,
          i,
          // Resolved props
          "prop",
          At(a)
        );
      }
      var f;
      {
        var h = Uf(t, a, !0);
        f = Af(t, h);
      }
      var y, C;
      Vf(t, u), ha(t);
      {
        if (Yp.current = t, Wn(!0), y = Qf(e, t, a, i, f, u), C = Gf(), t.mode & Zt) {
          gn(!0);
          try {
            y = Qf(e, t, a, i, f, u), C = Gf();
          } finally {
            gn(!1);
          }
        }
        Wn(!1);
      }
      return ma(), e !== null && !pl ? (AR(e, t, u), Gu(e, t, u)) : (Fr() && C && Mg(t), t.flags |= ai, Ea(e, t, y, u), t.child);
    }
    function Tw(e, t, a, i, u) {
      {
        switch (xk(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, h = new f(t.memoizedProps, s.context), y = h.state;
            s.updater.enqueueSetState(s, y, null);
            break;
          }
          case !0: {
            t.flags |= Ie, t.flags |= Kr;
            var C = new Error("Simulated error coming from DevTools"), T = Ms(u);
            t.lanes = pt(t.lanes, T);
            var z = QS(t, sc(C, t), T);
            eS(t, z);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var M = a.propTypes;
          M && ul(
            M,
            i,
            // Resolved props
            "prop",
            At(a)
          );
        }
      }
      var W;
      Xl(a) ? (W = !0, am(t)) : W = !1, Vf(t, u);
      var X = t.stateNode, J;
      X === null ? (Gm(e, t), pw(t, a, i), IS(t, a, i, u), J = !0) : e === null ? J = qb(t, a, i, u) : J = Jb(e, t, a, i, u);
      var xe = eE(e, t, a, J, W, u);
      {
        var Xe = t.stateNode;
        J && Xe.props !== i && (cc || g("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", lt(t) || "a component"), cc = !0);
      }
      return xe;
    }
    function eE(e, t, a, i, u, s) {
      ww(e, t);
      var f = (t.flags & Ie) !== Ye;
      if (!i && !f)
        return u && iR(t, a, !1), Gu(e, t, s);
      var h = t.stateNode;
      Yp.current = t;
      var y;
      if (f && typeof a.getDerivedStateFromError != "function")
        y = null, ow();
      else {
        ha(t);
        {
          if (Wn(!0), y = h.render(), t.mode & Zt) {
            gn(!0);
            try {
              h.render();
            } finally {
              gn(!1);
            }
          }
          Wn(!1);
        }
        ma();
      }
      return t.flags |= ai, e !== null && f ? i1(e, t, y, s) : Ea(e, t, y, s), t.memoizedState = h.state, u && iR(t, a, !0), t.child;
    }
    function xw(e) {
      var t = e.stateNode;
      t.pendingContext ? rR(e, t.pendingContext, t.pendingContext !== t.context) : t.context && rR(e, t.context, !1), tS(e, t.containerInfo);
    }
    function s1(e, t, a) {
      if (xw(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, u = t.memoizedState, s = u.element;
      DR(e, t), Cm(t, i, null, a);
      var f = t.memoizedState;
      t.stateNode;
      var h = f.element;
      if (u.isDehydrated) {
        var y = {
          element: h,
          isDehydrated: !1,
          cache: f.cache,
          pendingSuspenseBoundaries: f.pendingSuspenseBoundaries,
          transitions: f.transitions
        }, C = t.updateQueue;
        if (C.baseState = y, t.memoizedState = y, t.flags & Gr) {
          var T = sc(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return _w(e, t, h, a, T);
        } else if (h !== s) {
          var z = sc(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return _w(e, t, h, a, z);
        } else {
          db(t);
          var M = CR(t, null, h, a);
          t.child = M;
          for (var W = M; W; )
            W.flags = W.flags & -3 | La, W = W.sibling;
        }
      } else {
        if (Pf(), h === s)
          return Gu(e, t, a);
        Ea(e, t, h, a);
      }
      return t.child;
    }
    function _w(e, t, a, i, u) {
      return Pf(), jg(u), t.flags |= Gr, Ea(e, t, a, i), t.child;
    }
    function c1(e, t, a) {
      NR(t), e === null && Pg(t);
      var i = t.type, u = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = u.children, h = Sg(i, u);
      return h ? f = null : s !== null && Sg(i, s) && (t.flags |= ii), ww(e, t), Ea(e, t, f, a), t.child;
    }
    function f1(e, t) {
      return e === null && Pg(t), null;
    }
    function d1(e, t, a, i) {
      Gm(e, t);
      var u = t.pendingProps, s = a, f = s._payload, h = s._init, y = h(f);
      t.type = y;
      var C = t.tag = fk(y), T = dl(y, u), z;
      switch (C) {
        case N:
          return tE(t, y), t.type = y = nd(y), z = ZS(null, t, y, T, i), z;
        case F:
          return t.type = y = LE(y), z = Tw(null, t, y, T, i), z;
        case le:
          return t.type = y = NE(y), z = Sw(null, t, y, T, i), z;
        case ye: {
          if (t.type !== t.elementType) {
            var M = y.propTypes;
            M && ul(
              M,
              T,
              // Resolved for outer only
              "prop",
              At(y)
            );
          }
          return z = Ew(
            null,
            t,
            y,
            dl(y.type, T),
            // The inner type can have defaults too
            i
          ), z;
        }
      }
      var W = "";
      throw y !== null && typeof y == "object" && y.$$typeof === ut && (W = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + y + ". " + ("Lazy element type must resolve to a class or function." + W));
    }
    function p1(e, t, a, i, u) {
      Gm(e, t), t.tag = F;
      var s;
      return Xl(a) ? (s = !0, am(t)) : s = !1, Vf(t, u), pw(t, a, i), IS(t, a, i, u), eE(null, t, a, !0, s, u);
    }
    function v1(e, t, a, i) {
      Gm(e, t);
      var u = t.pendingProps, s;
      {
        var f = Uf(t, a, !1);
        s = Af(t, f);
      }
      Vf(t, i);
      var h, y;
      ha(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var C = At(a) || "Unknown";
          GS[C] || (g("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", C, C), GS[C] = !0);
        }
        t.mode & Zt && sl.recordLegacyContextWarning(t, null), Wn(!0), Yp.current = t, h = Qf(null, t, a, u, s, i), y = Gf(), Wn(!1);
      }
      if (ma(), t.flags |= ai, typeof h == "object" && h !== null && typeof h.render == "function" && h.$$typeof === void 0) {
        var T = At(a) || "Unknown";
        Wp[T] || (g("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", T, T, T), Wp[T] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof h == "object" && h !== null && typeof h.render == "function" && h.$$typeof === void 0
      ) {
        {
          var z = At(a) || "Unknown";
          Wp[z] || (g("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", z, z, z), Wp[z] = !0);
        }
        t.tag = F, t.memoizedState = null, t.updateQueue = null;
        var M = !1;
        return Xl(a) ? (M = !0, am(t)) : M = !1, t.memoizedState = h.state !== null && h.state !== void 0 ? h.state : null, Zg(t), dw(t, h), IS(t, a, u, i), eE(null, t, a, !0, M, i);
      } else {
        if (t.tag = N, t.mode & Zt) {
          gn(!0);
          try {
            h = Qf(null, t, a, u, s, i), y = Gf();
          } finally {
            gn(!1);
          }
        }
        return Fr() && y && Mg(t), Ea(null, t, h, i), tE(t, a), t.child;
      }
    }
    function tE(e, t) {
      {
        if (t && t.childContextTypes && g("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = Or();
          i && (a += `

Check the render method of \`` + i + "`.");
          var u = i || "", s = e._debugSource;
          s && (u = s.fileName + ":" + s.lineNumber), qS[u] || (qS[u] = !0, g("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (t.defaultProps !== void 0) {
          var f = At(t) || "Unknown";
          Qp[f] || (g("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", f), Qp[f] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var h = At(t) || "Unknown";
          KS[h] || (g("%s: Function components do not support getDerivedStateFromProps.", h), KS[h] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var y = At(t) || "Unknown";
          XS[y] || (g("%s: Function components do not support contextType.", y), XS[y] = !0);
        }
      }
    }
    var nE = {
      dehydrated: null,
      treeContext: null,
      retryLane: Ft
    };
    function rE(e) {
      return {
        baseLanes: e,
        cachePool: a1(),
        transitions: null
      };
    }
    function h1(e, t) {
      var a = null;
      return {
        baseLanes: pt(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function m1(e, t, a, i) {
      if (t !== null) {
        var u = t.memoizedState;
        if (u === null)
          return !1;
      }
      return aS(e, zp);
    }
    function y1(e, t) {
      return Us(e.childLanes, t);
    }
    function bw(e, t, a) {
      var i = t.pendingProps;
      _k(t) && (t.flags |= Ie);
      var u = cl.current, s = !1, f = (t.flags & Ie) !== Ye;
      if (f || m1(u, e) ? (s = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (u = Ab(u, UR)), u = $f(u), Yo(t, u), e === null) {
        Pg(t);
        var h = t.memoizedState;
        if (h !== null) {
          var y = h.dehydrated;
          if (y !== null)
            return R1(t, y);
        }
        var C = i.children, T = i.fallback;
        if (s) {
          var z = g1(t, C, T, a), M = t.child;
          return M.memoizedState = rE(a), t.memoizedState = nE, z;
        } else
          return aE(t, C);
      } else {
        var W = e.memoizedState;
        if (W !== null) {
          var X = W.dehydrated;
          if (X !== null)
            return w1(e, t, f, i, X, W, a);
        }
        if (s) {
          var J = i.fallback, xe = i.children, Xe = E1(e, t, xe, J, a), Ve = t.child, Ut = e.child.memoizedState;
          return Ve.memoizedState = Ut === null ? rE(a) : h1(Ut, a), Ve.childLanes = y1(e, a), t.memoizedState = nE, Xe;
        } else {
          var Dt = i.children, B = S1(e, t, Dt, a);
          return t.memoizedState = null, B;
        }
      }
    }
    function aE(e, t, a) {
      var i = e.mode, u = {
        mode: "visible",
        children: t
      }, s = iE(u, i);
      return s.return = e, e.child = s, s;
    }
    function g1(e, t, a, i) {
      var u = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, h, y;
      return (u & xt) === We && s !== null ? (h = s, h.childLanes = ae, h.pendingProps = f, e.mode & jt && (h.actualDuration = 0, h.actualStartTime = -1, h.selfBaseDuration = 0, h.treeBaseDuration = 0), y = Zo(a, u, i, null)) : (h = iE(f, u), y = Zo(a, u, i, null)), h.return = e, y.return = e, h.sibling = y, e.child = h, y;
    }
    function iE(e, t, a) {
      return DT(e, t, ae, null);
    }
    function Dw(e, t) {
      return hc(e, t);
    }
    function S1(e, t, a, i) {
      var u = e.child, s = u.sibling, f = Dw(u, {
        mode: "visible",
        children: a
      });
      if ((t.mode & xt) === We && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var h = t.deletions;
        h === null ? (t.deletions = [s], t.flags |= Oa) : h.push(s);
      }
      return t.child = f, f;
    }
    function E1(e, t, a, i, u) {
      var s = t.mode, f = e.child, h = f.sibling, y = {
        mode: "hidden",
        children: a
      }, C;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & xt) === We && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== f
      ) {
        var T = t.child;
        C = T, C.childLanes = ae, C.pendingProps = y, t.mode & jt && (C.actualDuration = 0, C.actualStartTime = -1, C.selfBaseDuration = f.selfBaseDuration, C.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        C = Dw(f, y), C.subtreeFlags = f.subtreeFlags & zn;
      var z;
      return h !== null ? z = hc(h, i) : (z = Zo(i, s, u, null), z.flags |= xn), z.return = t, C.return = t, C.sibling = z, t.child = C, z;
    }
    function Qm(e, t, a, i) {
      i !== null && jg(i), jf(t, e.child, null, a);
      var u = t.pendingProps, s = u.children, f = aE(t, s);
      return f.flags |= xn, t.memoizedState = null, f;
    }
    function C1(e, t, a, i, u) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, h = iE(f, s), y = Zo(i, s, u, null);
      return y.flags |= xn, h.return = t, y.return = t, h.sibling = y, t.child = h, (t.mode & xt) !== We && jf(t, e.child, null, u), y;
    }
    function R1(e, t, a) {
      return (e.mode & xt) === We ? (g("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = tt) : wg(t) ? e.lanes = wr : e.lanes = ya, null;
    }
    function w1(e, t, a, i, u, s, f) {
      if (a)
        if (t.flags & Gr) {
          t.flags &= -257;
          var B = YS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return Qm(e, t, f, B);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= Ie, null;
          var Z = i.children, $ = i.fallback, fe = C1(e, t, Z, $, f), Oe = t.child;
          return Oe.memoizedState = rE(f), t.memoizedState = nE, fe;
        }
      else {
        if (cb(), (t.mode & xt) === We)
          return Qm(
            e,
            t,
            f,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (wg(u)) {
          var h, y, C;
          {
            var T = b_(u);
            h = T.digest, y = T.message, C = T.stack;
          }
          var z;
          y ? z = new Error(y) : z = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var M = YS(z, h, C);
          return Qm(e, t, f, M);
        }
        var W = ea(f, e.childLanes);
        if (pl || W) {
          var X = ay();
          if (X !== null) {
            var J = Kd(X, f);
            if (J !== Ft && J !== s.retryLane) {
              s.retryLane = J;
              var xe = nn;
              Ha(e, J), gr(X, e, J, xe);
            }
          }
          _E();
          var Xe = YS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return Qm(e, t, f, Xe);
        } else if (qC(u)) {
          t.flags |= Ie, t.child = e.child;
          var Ve = GD.bind(null, e);
          return D_(u, Ve), null;
        } else {
          pb(t, u, s.treeContext);
          var Ut = i.children, Dt = aE(t, Ut);
          return Dt.flags |= La, Dt;
        }
      }
    }
    function kw(e, t, a) {
      e.lanes = pt(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = pt(i.lanes, t)), Xg(e.return, t, a);
    }
    function T1(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === me) {
          var u = i.memoizedState;
          u !== null && kw(i, a, e);
        } else if (i.tag === Ct)
          kw(i, a, e);
        else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    function x1(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && xm(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function _1(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !JS[e])
        if (JS[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              g('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              g('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              g('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          g('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function b1(e, t) {
      e !== void 0 && !Wm[e] && (e !== "collapsed" && e !== "hidden" ? (Wm[e] = !0, g('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (Wm[e] = !0, g('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function Ow(e, t) {
      {
        var a = Et(e), i = !a && typeof dt(e) == "function";
        if (a || i) {
          var u = a ? "array" : "iterable";
          return g("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function D1(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (Et(e)) {
          for (var a = 0; a < e.length; a++)
            if (!Ow(e[a], a))
              return;
        } else {
          var i = dt(e);
          if (typeof i == "function") {
            var u = i.call(e);
            if (u)
              for (var s = u.next(), f = 0; !s.done; s = u.next()) {
                if (!Ow(s.value, f))
                  return;
                f++;
              }
          } else
            g('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function lE(e, t, a, i, u) {
      var s = e.memoizedState;
      s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: u
      } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = i, s.tail = a, s.tailMode = u);
    }
    function Lw(e, t, a) {
      var i = t.pendingProps, u = i.revealOrder, s = i.tail, f = i.children;
      _1(u), b1(s, u), D1(f, u), Ea(e, t, f, a);
      var h = cl.current, y = aS(h, zp);
      if (y)
        h = iS(h, zp), t.flags |= Ie;
      else {
        var C = e !== null && (e.flags & Ie) !== Ye;
        C && T1(t, t.child, a), h = $f(h);
      }
      if (Yo(t, h), (t.mode & xt) === We)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var T = x1(t.child), z;
            T === null ? (z = t.child, t.child = null) : (z = T.sibling, T.sibling = null), lE(
              t,
              !1,
              // isBackwards
              z,
              T,
              s
            );
            break;
          }
          case "backwards": {
            var M = null, W = t.child;
            for (t.child = null; W !== null; ) {
              var X = W.alternate;
              if (X !== null && xm(X) === null) {
                t.child = W;
                break;
              }
              var J = W.sibling;
              W.sibling = M, M = W, W = J;
            }
            lE(
              t,
              !0,
              // isBackwards
              M,
              null,
              // last
              s
            );
            break;
          }
          case "together": {
            lE(
              t,
              !1,
              // isBackwards
              null,
              // tail
              null,
              // last
              void 0
            );
            break;
          }
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function k1(e, t, a) {
      tS(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = jf(t, null, i, a) : Ea(e, t, i, a), t.child;
    }
    var Nw = !1;
    function O1(e, t, a) {
      var i = t.type, u = i._context, s = t.pendingProps, f = t.memoizedProps, h = s.value;
      {
        "value" in s || Nw || (Nw = !0, g("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var y = t.type.propTypes;
        y && ul(y, s, "prop", "Context.Provider");
      }
      if (TR(t, u, h), f !== null) {
        var C = f.value;
        if (oe(C, h)) {
          if (f.children === s.children && !nm())
            return Gu(e, t, a);
        } else
          _b(t, u, a);
      }
      var T = s.children;
      return Ea(e, t, T, a), t.child;
    }
    var Mw = !1;
    function L1(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (Mw || (Mw = !0, g("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var u = t.pendingProps, s = u.children;
      typeof s != "function" && g("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Vf(t, a);
      var f = nr(i);
      ha(t);
      var h;
      return Yp.current = t, Wn(!0), h = s(f), Wn(!1), ma(), t.flags |= ai, Ea(e, t, h, a), t.child;
    }
    function Gp() {
      pl = !0;
    }
    function Gm(e, t) {
      (t.mode & xt) === We && e !== null && (e.alternate = null, t.alternate = null, t.flags |= xn);
    }
    function Gu(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), ow(), lv(t.lanes), ea(a, t.childLanes) ? (Tb(e, t), t.child) : null;
    }
    function N1(e, t, a) {
      {
        var i = t.return;
        if (i === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, t === i.child)
          i.child = a;
        else {
          var u = i.child;
          if (u === null)
            throw new Error("Expected parent to have a child.");
          for (; u.sibling !== t; )
            if (u = u.sibling, u === null)
              throw new Error("Expected to find the previous sibling.");
          u.sibling = a;
        }
        var s = i.deletions;
        return s === null ? (i.deletions = [e], i.flags |= Oa) : s.push(e), a.flags |= xn, a;
      }
    }
    function uE(e, t) {
      var a = e.lanes;
      return !!ea(a, t);
    }
    function M1(e, t, a) {
      switch (t.tag) {
        case O:
          xw(t), t.stateNode, Pf();
          break;
        case Y:
          NR(t);
          break;
        case F: {
          var i = t.type;
          Xl(i) && am(t);
          break;
        }
        case j:
          tS(t, t.stateNode.containerInfo);
          break;
        case ne: {
          var u = t.memoizedProps.value, s = t.type._context;
          TR(t, s, u);
          break;
        }
        case pe:
          {
            var f = ea(a, t.childLanes);
            f && (t.flags |= Lt);
            {
              var h = t.stateNode;
              h.effectDuration = 0, h.passiveEffectDuration = 0;
            }
          }
          break;
        case me: {
          var y = t.memoizedState;
          if (y !== null) {
            if (y.dehydrated !== null)
              return Yo(t, $f(cl.current)), t.flags |= Ie, null;
            var C = t.child, T = C.childLanes;
            if (ea(a, T))
              return bw(e, t, a);
            Yo(t, $f(cl.current));
            var z = Gu(e, t, a);
            return z !== null ? z.sibling : null;
          } else
            Yo(t, $f(cl.current));
          break;
        }
        case Ct: {
          var M = (e.flags & Ie) !== Ye, W = ea(a, t.childLanes);
          if (M) {
            if (W)
              return Lw(e, t, a);
            t.flags |= Ie;
          }
          var X = t.memoizedState;
          if (X !== null && (X.rendering = null, X.tail = null, X.lastEffect = null), Yo(t, cl.current), W)
            break;
          return null;
        }
        case Be:
        case mt:
          return t.lanes = ae, Rw(e, t, a);
      }
      return Gu(e, t, a);
    }
    function Uw(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return N1(e, t, FE(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, u = t.pendingProps;
        if (i !== u || nm() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          pl = !0;
        else {
          var s = uE(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & Ie) === Ye)
            return pl = !1, M1(e, t, a);
          (e.flags & zc) !== Ye ? pl = !0 : pl = !1;
        }
      } else if (pl = !1, Fr() && ab(t)) {
        var f = t.index, h = ib();
        oR(t, h, f);
      }
      switch (t.lanes = ae, t.tag) {
        case K:
          return v1(e, t, t.type, a);
        case Le: {
          var y = t.elementType;
          return d1(e, t, y, a);
        }
        case N: {
          var C = t.type, T = t.pendingProps, z = t.elementType === C ? T : dl(C, T);
          return ZS(e, t, C, z, a);
        }
        case F: {
          var M = t.type, W = t.pendingProps, X = t.elementType === M ? W : dl(M, W);
          return Tw(e, t, M, X, a);
        }
        case O:
          return s1(e, t, a);
        case Y:
          return c1(e, t, a);
        case H:
          return f1(e, t);
        case me:
          return bw(e, t, a);
        case j:
          return k1(e, t, a);
        case le: {
          var J = t.type, xe = t.pendingProps, Xe = t.elementType === J ? xe : dl(J, xe);
          return Sw(e, t, J, Xe, a);
        }
        case de:
          return l1(e, t, a);
        case se:
          return u1(e, t, a);
        case pe:
          return o1(e, t, a);
        case ne:
          return O1(e, t, a);
        case be:
          return L1(e, t, a);
        case ye: {
          var Ve = t.type, Ut = t.pendingProps, Dt = dl(Ve, Ut);
          if (t.type !== t.elementType) {
            var B = Ve.propTypes;
            B && ul(
              B,
              Dt,
              // Resolved for outer only
              "prop",
              At(Ve)
            );
          }
          return Dt = dl(Ve.type, Dt), Ew(e, t, Ve, Dt, a);
        }
        case Se:
          return Cw(e, t, t.type, t.pendingProps, a);
        case Qe: {
          var Z = t.type, $ = t.pendingProps, fe = t.elementType === Z ? $ : dl(Z, $);
          return p1(e, t, Z, fe, a);
        }
        case Ct:
          return Lw(e, t, a);
        case et:
          break;
        case Be:
          return Rw(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Xf(e) {
      e.flags |= Lt;
    }
    function Aw(e) {
      e.flags |= Cn, e.flags |= To;
    }
    var zw, oE, Fw, Pw;
    zw = function(e, t, a, i) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === Y || u.tag === H)
          t_(e, u.stateNode);
        else if (u.tag !== j) {
          if (u.child !== null) {
            u.child.return = u, u = u.child;
            continue;
          }
        }
        if (u === t)
          return;
        for (; u.sibling === null; ) {
          if (u.return === null || u.return === t)
            return;
          u = u.return;
        }
        u.sibling.return = u.return, u = u.sibling;
      }
    }, oE = function(e, t) {
    }, Fw = function(e, t, a, i, u) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, h = nS(), y = r_(f, a, s, i, u, h);
        t.updateQueue = y, y && Xf(t);
      }
    }, Pw = function(e, t, a, i) {
      a !== i && Xf(t);
    };
    function Xp(e, t) {
      if (!Fr())
        switch (e.tailMode) {
          case "hidden": {
            for (var a = e.tail, i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? e.tail = null : i.sibling = null;
            break;
          }
          case "collapsed": {
            for (var u = e.tail, s = null; u !== null; )
              u.alternate !== null && (s = u), u = u.sibling;
            s === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : s.sibling = null;
            break;
          }
        }
    }
    function jr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = ae, i = Ye;
      if (t) {
        if ((e.mode & jt) !== We) {
          for (var y = e.selfBaseDuration, C = e.child; C !== null; )
            a = pt(a, pt(C.lanes, C.childLanes)), i |= C.subtreeFlags & zn, i |= C.flags & zn, y += C.treeBaseDuration, C = C.sibling;
          e.treeBaseDuration = y;
        } else
          for (var T = e.child; T !== null; )
            a = pt(a, pt(T.lanes, T.childLanes)), i |= T.subtreeFlags & zn, i |= T.flags & zn, T.return = e, T = T.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & jt) !== We) {
          for (var u = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = pt(a, pt(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, u += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = u, e.treeBaseDuration = s;
        } else
          for (var h = e.child; h !== null; )
            a = pt(a, pt(h.lanes, h.childLanes)), i |= h.subtreeFlags, i |= h.flags, h.return = e, h = h.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function U1(e, t, a) {
      if (gb() && (t.mode & xt) !== We && (t.flags & Ie) === Ye)
        return hR(t), Pf(), t.flags |= Gr | gs | Kr, !1;
      var i = sm(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (mb(t), jr(t), (t.mode & jt) !== We) {
            var u = a !== null;
            if (u) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (Pf(), (t.flags & Ie) === Ye && (t.memoizedState = null), t.flags |= Lt, jr(t), (t.mode & jt) !== We) {
            var f = a !== null;
            if (f) {
              var h = t.child;
              h !== null && (t.treeBaseDuration -= h.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return mR(), !0;
    }
    function jw(e, t, a) {
      var i = t.pendingProps;
      switch (Ug(t), t.tag) {
        case K:
        case Le:
        case Se:
        case N:
        case le:
        case de:
        case se:
        case pe:
        case be:
        case ye:
          return jr(t), null;
        case F: {
          var u = t.type;
          return Xl(u) && rm(t), jr(t), null;
        }
        case O: {
          var s = t.stateNode;
          if (Bf(t), Og(t), uS(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = sm(t);
            if (f)
              Xf(t);
            else if (e !== null) {
              var h = e.memoizedState;
              // Check if this is a client root
              (!h.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & Gr) !== Ye) && (t.flags |= Qn, mR());
            }
          }
          return oE(e, t), jr(t), null;
        }
        case Y: {
          rS(t);
          var y = LR(), C = t.type;
          if (e !== null && t.stateNode != null)
            Fw(e, t, C, i, y), e.ref !== t.ref && Aw(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return jr(t), null;
            }
            var T = nS(), z = sm(t);
            if (z)
              vb(t, y, T) && Xf(t);
            else {
              var M = e_(C, i, y, T, t);
              zw(M, t, !1, !1), t.stateNode = M, n_(M, C, i, y) && Xf(t);
            }
            t.ref !== null && Aw(t);
          }
          return jr(t), null;
        }
        case H: {
          var W = i;
          if (e && t.stateNode != null) {
            var X = e.memoizedProps;
            Pw(e, t, X, W);
          } else {
            if (typeof W != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var J = LR(), xe = nS(), Xe = sm(t);
            Xe ? hb(t) && Xf(t) : t.stateNode = a_(W, J, xe, t);
          }
          return jr(t), null;
        }
        case me: {
          If(t);
          var Ve = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var Ut = U1(e, t, Ve);
            if (!Ut)
              return t.flags & Kr ? t : null;
          }
          if ((t.flags & Ie) !== Ye)
            return t.lanes = a, (t.mode & jt) !== We && NS(t), t;
          var Dt = Ve !== null, B = e !== null && e.memoizedState !== null;
          if (Dt !== B && Dt) {
            var Z = t.child;
            if (Z.flags |= An, (t.mode & xt) !== We) {
              var $ = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !0);
              $ || aS(cl.current, UR) ? AD() : _E();
            }
          }
          var fe = t.updateQueue;
          if (fe !== null && (t.flags |= Lt), jr(t), (t.mode & jt) !== We && Dt) {
            var Oe = t.child;
            Oe !== null && (t.treeBaseDuration -= Oe.treeBaseDuration);
          }
          return null;
        }
        case j:
          return Bf(t), oE(e, t), e === null && q_(t.stateNode.containerInfo), jr(t), null;
        case ne:
          var _e = t.type._context;
          return Gg(_e, t), jr(t), null;
        case Qe: {
          var rt = t.type;
          return Xl(rt) && rm(t), jr(t), null;
        }
        case Ct: {
          If(t);
          var st = t.memoizedState;
          if (st === null)
            return jr(t), null;
          var tn = (t.flags & Ie) !== Ye, Bt = st.rendering;
          if (Bt === null)
            if (tn)
              Xp(st, !1);
            else {
              var Kn = FD() && (e === null || (e.flags & Ie) === Ye);
              if (!Kn)
                for (var $t = t.child; $t !== null; ) {
                  var Bn = xm($t);
                  if (Bn !== null) {
                    tn = !0, t.flags |= Ie, Xp(st, !1);
                    var ua = Bn.updateQueue;
                    return ua !== null && (t.updateQueue = ua, t.flags |= Lt), t.subtreeFlags = Ye, xb(t, a), Yo(t, iS(cl.current, zp)), t.child;
                  }
                  $t = $t.sibling;
                }
              st.tail !== null && Gn() > lT() && (t.flags |= Ie, tn = !0, Xp(st, !1), t.lanes = Vd);
            }
          else {
            if (!tn) {
              var Ir = xm(Bt);
              if (Ir !== null) {
                t.flags |= Ie, tn = !0;
                var di = Ir.updateQueue;
                if (di !== null && (t.updateQueue = di, t.flags |= Lt), Xp(st, !0), st.tail === null && st.tailMode === "hidden" && !Bt.alternate && !Fr())
                  return jr(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              Gn() * 2 - st.renderingStartTime > lT() && a !== ya && (t.flags |= Ie, tn = !0, Xp(st, !1), t.lanes = Vd);
            }
            if (st.isBackwards)
              Bt.sibling = t.child, t.child = Bt;
            else {
              var wa = st.last;
              wa !== null ? wa.sibling = Bt : t.child = Bt, st.last = Bt;
            }
          }
          if (st.tail !== null) {
            var Ta = st.tail;
            st.rendering = Ta, st.tail = Ta.sibling, st.renderingStartTime = Gn(), Ta.sibling = null;
            var oa = cl.current;
            return tn ? oa = iS(oa, zp) : oa = $f(oa), Yo(t, oa), Ta;
          }
          return jr(t), null;
        }
        case et:
          break;
        case Be:
        case mt: {
          xE(t);
          var Zu = t.memoizedState, rd = Zu !== null;
          if (e !== null) {
            var fv = e.memoizedState, ru = fv !== null;
            ru !== rd && (t.flags |= An);
          }
          return !rd || (t.mode & xt) === We ? jr(t) : ea(nu, ya) && (jr(t), t.subtreeFlags & (xn | Lt) && (t.flags |= An)), null;
        }
        case ct:
          return null;
        case kt:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function A1(e, t, a) {
      switch (Ug(t), t.tag) {
        case F: {
          var i = t.type;
          Xl(i) && rm(t);
          var u = t.flags;
          return u & Kr ? (t.flags = u & -65537 | Ie, (t.mode & jt) !== We && NS(t), t) : null;
        }
        case O: {
          t.stateNode, Bf(t), Og(t), uS();
          var s = t.flags;
          return (s & Kr) !== Ye && (s & Ie) === Ye ? (t.flags = s & -65537 | Ie, t) : null;
        }
        case Y:
          return rS(t), null;
        case me: {
          If(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            Pf();
          }
          var h = t.flags;
          return h & Kr ? (t.flags = h & -65537 | Ie, (t.mode & jt) !== We && NS(t), t) : null;
        }
        case Ct:
          return If(t), null;
        case j:
          return Bf(t), null;
        case ne:
          var y = t.type._context;
          return Gg(y, t), null;
        case Be:
        case mt:
          return xE(t), null;
        case ct:
          return null;
        default:
          return null;
      }
    }
    function Hw(e, t, a) {
      switch (Ug(t), t.tag) {
        case F: {
          var i = t.type.childContextTypes;
          i != null && rm(t);
          break;
        }
        case O: {
          t.stateNode, Bf(t), Og(t), uS();
          break;
        }
        case Y: {
          rS(t);
          break;
        }
        case j:
          Bf(t);
          break;
        case me:
          If(t);
          break;
        case Ct:
          If(t);
          break;
        case ne:
          var u = t.type._context;
          Gg(u, t);
          break;
        case Be:
        case mt:
          xE(t);
          break;
      }
    }
    var Vw = null;
    Vw = /* @__PURE__ */ new Set();
    var Xm = !1, Hr = !1, z1 = typeof WeakSet == "function" ? WeakSet : Set, ze = null, Kf = null, qf = null;
    function F1(e) {
      Ll(null, function() {
        throw e;
      }), ys();
    }
    var P1 = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & jt)
        try {
          eu(), t.componentWillUnmount();
        } finally {
          Zl(e);
        }
      else
        t.componentWillUnmount();
    };
    function Bw(e, t) {
      try {
        Go(dr, e);
      } catch (a) {
        pn(e, t, a);
      }
    }
    function sE(e, t, a) {
      try {
        P1(e, a);
      } catch (i) {
        pn(e, t, i);
      }
    }
    function j1(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        pn(e, t, i);
      }
    }
    function $w(e, t) {
      try {
        Yw(e);
      } catch (a) {
        pn(e, t, a);
      }
    }
    function Jf(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (Ze && Rt && e.mode & jt)
              try {
                eu(), i = a(null);
              } finally {
                Zl(e);
              }
            else
              i = a(null);
          } catch (u) {
            pn(e, t, u);
          }
          typeof i == "function" && g("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", lt(e));
        } else
          a.current = null;
    }
    function Km(e, t, a) {
      try {
        a();
      } catch (i) {
        pn(e, t, i);
      }
    }
    var Iw = !1;
    function H1(e, t) {
      Jx(e.containerInfo), ze = t, V1();
      var a = Iw;
      return Iw = !1, a;
    }
    function V1() {
      for (; ze !== null; ) {
        var e = ze, t = e.child;
        (e.subtreeFlags & Ml) !== Ye && t !== null ? (t.return = e, ze = t) : B1();
      }
    }
    function B1() {
      for (; ze !== null; ) {
        var e = ze;
        Kt(e);
        try {
          $1(e);
        } catch (a) {
          pn(e, e.return, a);
        }
        dn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, ze = t;
          return;
        }
        ze = e.return;
      }
    }
    function $1(e) {
      var t = e.alternate, a = e.flags;
      if ((a & Qn) !== Ye) {
        switch (Kt(e), e.tag) {
          case N:
          case le:
          case Se:
            break;
          case F: {
            if (t !== null) {
              var i = t.memoizedProps, u = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !cc && (s.props !== e.memoizedProps && g("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", lt(e) || "instance"), s.state !== e.memoizedState && g("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", lt(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : dl(e.type, i), u);
              {
                var h = Vw;
                f === void 0 && !h.has(e.type) && (h.add(e.type), g("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", lt(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case O: {
            {
              var y = e.stateNode;
              w_(y.containerInfo);
            }
            break;
          }
          case Y:
          case H:
          case j:
          case Qe:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        dn();
      }
    }
    function vl(e, t, a) {
      var i = t.updateQueue, u = i !== null ? i.lastEffect : null;
      if (u !== null) {
        var s = u.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var h = f.destroy;
            f.destroy = void 0, h !== void 0 && ((e & Pr) !== Va ? tl(t) : (e & dr) !== Va && Es(t), (e & Kl) !== Va && ov(!0), Km(t, a, h), (e & Kl) !== Va && ov(!1), (e & Pr) !== Va ? Fl() : (e & dr) !== Va && jd());
          }
          f = f.next;
        } while (f !== s);
      }
    }
    function Go(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var u = i.next, s = u;
        do {
          if ((s.tag & e) === e) {
            (e & Pr) !== Va ? Pd(t) : (e & dr) !== Va && Bc(t);
            var f = s.create;
            (e & Kl) !== Va && ov(!0), s.destroy = f(), (e & Kl) !== Va && ov(!1), (e & Pr) !== Va ? th() : (e & dr) !== Va && nh();
            {
              var h = s.destroy;
              if (h !== void 0 && typeof h != "function") {
                var y = void 0;
                (s.tag & dr) !== Ye ? y = "useLayoutEffect" : (s.tag & Kl) !== Ye ? y = "useInsertionEffect" : y = "useEffect";
                var C = void 0;
                h === null ? C = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof h.then == "function" ? C = `

It looks like you wrote ` + y + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + y + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : C = " You returned: " + h, g("%s must not return anything besides a function, which is used for clean-up.%s", y, C);
              }
            }
          }
          s = s.next;
        } while (s !== u);
      }
    }
    function I1(e, t) {
      if ((t.flags & Lt) !== Ye)
        switch (t.tag) {
          case pe: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, u = i.id, s = i.onPostCommit, f = lw(), h = t.alternate === null ? "mount" : "update";
            iw() && (h = "nested-update"), typeof s == "function" && s(u, h, a, f);
            var y = t.return;
            e: for (; y !== null; ) {
              switch (y.tag) {
                case O:
                  var C = y.stateNode;
                  C.passiveEffectDuration += a;
                  break e;
                case pe:
                  var T = y.stateNode;
                  T.passiveEffectDuration += a;
                  break e;
              }
              y = y.return;
            }
            break;
          }
        }
    }
    function Y1(e, t, a, i) {
      if ((a.flags & Al) !== Ye)
        switch (a.tag) {
          case N:
          case le:
          case Se: {
            if (!Hr)
              if (a.mode & jt)
                try {
                  eu(), Go(dr | fr, a);
                } finally {
                  Zl(a);
                }
              else
                Go(dr | fr, a);
            break;
          }
          case F: {
            var u = a.stateNode;
            if (a.flags & Lt && !Hr)
              if (t === null)
                if (a.type === a.elementType && !cc && (u.props !== a.memoizedProps && g("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", lt(a) || "instance"), u.state !== a.memoizedState && g("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", lt(a) || "instance")), a.mode & jt)
                  try {
                    eu(), u.componentDidMount();
                  } finally {
                    Zl(a);
                  }
                else
                  u.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : dl(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !cc && (u.props !== a.memoizedProps && g("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", lt(a) || "instance"), u.state !== a.memoizedState && g("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", lt(a) || "instance")), a.mode & jt)
                  try {
                    eu(), u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    Zl(a);
                  }
                else
                  u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
              }
            var h = a.updateQueue;
            h !== null && (a.type === a.elementType && !cc && (u.props !== a.memoizedProps && g("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", lt(a) || "instance"), u.state !== a.memoizedState && g("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", lt(a) || "instance")), OR(a, h, u));
            break;
          }
          case O: {
            var y = a.updateQueue;
            if (y !== null) {
              var C = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case Y:
                    C = a.child.stateNode;
                    break;
                  case F:
                    C = a.child.stateNode;
                    break;
                }
              OR(a, y, C);
            }
            break;
          }
          case Y: {
            var T = a.stateNode;
            if (t === null && a.flags & Lt) {
              var z = a.type, M = a.memoizedProps;
              s_(T, z, M);
            }
            break;
          }
          case H:
            break;
          case j:
            break;
          case pe: {
            {
              var W = a.memoizedProps, X = W.onCommit, J = W.onRender, xe = a.stateNode.effectDuration, Xe = lw(), Ve = t === null ? "mount" : "update";
              iw() && (Ve = "nested-update"), typeof J == "function" && J(a.memoizedProps.id, Ve, a.actualDuration, a.treeBaseDuration, a.actualStartTime, Xe);
              {
                typeof X == "function" && X(a.memoizedProps.id, Ve, xe, Xe), BD(a);
                var Ut = a.return;
                e: for (; Ut !== null; ) {
                  switch (Ut.tag) {
                    case O:
                      var Dt = Ut.stateNode;
                      Dt.effectDuration += xe;
                      break e;
                    case pe:
                      var B = Ut.stateNode;
                      B.effectDuration += xe;
                      break e;
                  }
                  Ut = Ut.return;
                }
              }
            }
            break;
          }
          case me: {
            Z1(e, a);
            break;
          }
          case Ct:
          case Qe:
          case et:
          case Be:
          case mt:
          case kt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Hr || a.flags & Cn && Yw(a);
    }
    function W1(e) {
      switch (e.tag) {
        case N:
        case le:
        case Se: {
          if (e.mode & jt)
            try {
              eu(), Bw(e, e.return);
            } finally {
              Zl(e);
            }
          else
            Bw(e, e.return);
          break;
        }
        case F: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && j1(e, e.return, t), $w(e, e.return);
          break;
        }
        case Y: {
          $w(e, e.return);
          break;
        }
      }
    }
    function Q1(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === Y) {
          if (a === null) {
            a = i;
            try {
              var u = i.stateNode;
              t ? S_(u) : C_(i.stateNode, i.memoizedProps);
            } catch (f) {
              pn(e, e.return, f);
            }
          }
        } else if (i.tag === H) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? E_(s) : R_(s, i.memoizedProps);
            } catch (f) {
              pn(e, e.return, f);
            }
        } else if (!((i.tag === Be || i.tag === mt) && i.memoizedState !== null && i !== e)) {
          if (i.child !== null) {
            i.child.return = i, i = i.child;
            continue;
          }
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          a === i && (a = null), i = i.return;
        }
        a === i && (a = null), i.sibling.return = i.return, i = i.sibling;
      }
    }
    function Yw(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case Y:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var u;
          if (e.mode & jt)
            try {
              eu(), u = t(i);
            } finally {
              Zl(e);
            }
          else
            u = t(i);
          typeof u == "function" && g("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", lt(e));
        } else
          t.hasOwnProperty("current") || g("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", lt(e)), t.current = i;
      }
    }
    function G1(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function Ww(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, Ww(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === Y) {
          var a = e.stateNode;
          a !== null && eb(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function X1(e) {
      for (var t = e.return; t !== null; ) {
        if (Qw(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Qw(e) {
      return e.tag === Y || e.tag === O || e.tag === j;
    }
    function Gw(e) {
      var t = e;
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || Qw(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== Y && t.tag !== H && t.tag !== it; ) {
          if (t.flags & xn || t.child === null || t.tag === j)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & xn))
          return t.stateNode;
      }
    }
    function K1(e) {
      var t = X1(e);
      switch (t.tag) {
        case Y: {
          var a = t.stateNode;
          t.flags & ii && (KC(a), t.flags &= -33);
          var i = Gw(e);
          fE(e, i, a);
          break;
        }
        case O:
        case j: {
          var u = t.stateNode.containerInfo, s = Gw(e);
          cE(e, s, u);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function cE(e, t, a) {
      var i = e.tag, u = i === Y || i === H;
      if (u) {
        var s = e.stateNode;
        t ? h_(a, s, t) : p_(a, s);
      } else if (i !== j) {
        var f = e.child;
        if (f !== null) {
          cE(f, t, a);
          for (var h = f.sibling; h !== null; )
            cE(h, t, a), h = h.sibling;
        }
      }
    }
    function fE(e, t, a) {
      var i = e.tag, u = i === Y || i === H;
      if (u) {
        var s = e.stateNode;
        t ? v_(a, s, t) : d_(a, s);
      } else if (i !== j) {
        var f = e.child;
        if (f !== null) {
          fE(f, t, a);
          for (var h = f.sibling; h !== null; )
            fE(h, t, a), h = h.sibling;
        }
      }
    }
    var Vr = null, hl = !1;
    function q1(e, t, a) {
      {
        var i = t;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case Y: {
              Vr = i.stateNode, hl = !1;
              break e;
            }
            case O: {
              Vr = i.stateNode.containerInfo, hl = !0;
              break e;
            }
            case j: {
              Vr = i.stateNode.containerInfo, hl = !0;
              break e;
            }
          }
          i = i.return;
        }
        if (Vr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        Xw(e, t, a), Vr = null, hl = !1;
      }
      G1(a);
    }
    function Xo(e, t, a) {
      for (var i = a.child; i !== null; )
        Xw(e, t, i), i = i.sibling;
    }
    function Xw(e, t, a) {
      switch (Ad(a), a.tag) {
        case Y:
          Hr || Jf(a, t);
        case H: {
          {
            var i = Vr, u = hl;
            Vr = null, Xo(e, t, a), Vr = i, hl = u, Vr !== null && (hl ? y_(Vr, a.stateNode) : m_(Vr, a.stateNode));
          }
          return;
        }
        case it: {
          Vr !== null && (hl ? g_(Vr, a.stateNode) : Rg(Vr, a.stateNode));
          return;
        }
        case j: {
          {
            var s = Vr, f = hl;
            Vr = a.stateNode.containerInfo, hl = !0, Xo(e, t, a), Vr = s, hl = f;
          }
          return;
        }
        case N:
        case le:
        case ye:
        case Se: {
          if (!Hr) {
            var h = a.updateQueue;
            if (h !== null) {
              var y = h.lastEffect;
              if (y !== null) {
                var C = y.next, T = C;
                do {
                  var z = T, M = z.destroy, W = z.tag;
                  M !== void 0 && ((W & Kl) !== Va ? Km(a, t, M) : (W & dr) !== Va && (Es(a), a.mode & jt ? (eu(), Km(a, t, M), Zl(a)) : Km(a, t, M), jd())), T = T.next;
                } while (T !== C);
              }
            }
          }
          Xo(e, t, a);
          return;
        }
        case F: {
          if (!Hr) {
            Jf(a, t);
            var X = a.stateNode;
            typeof X.componentWillUnmount == "function" && sE(a, t, X);
          }
          Xo(e, t, a);
          return;
        }
        case et: {
          Xo(e, t, a);
          return;
        }
        case Be: {
          if (
            // TODO: Remove this dead flag
            a.mode & xt
          ) {
            var J = Hr;
            Hr = J || a.memoizedState !== null, Xo(e, t, a), Hr = J;
          } else
            Xo(e, t, a);
          break;
        }
        default: {
          Xo(e, t, a);
          return;
        }
      }
    }
    function J1(e) {
      e.memoizedState;
    }
    function Z1(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var u = i.memoizedState;
          if (u !== null) {
            var s = u.dehydrated;
            s !== null && F_(s);
          }
        }
      }
    }
    function Kw(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new z1()), t.forEach(function(i) {
          var u = XD.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), Zr)
              if (Kf !== null && qf !== null)
                uv(qf, Kf);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(u, u);
          }
        });
      }
    }
    function eD(e, t, a) {
      Kf = a, qf = e, Kt(t), qw(t, e), Kt(t), Kf = null, qf = null;
    }
    function ml(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u];
          try {
            q1(e, t, s);
          } catch (y) {
            pn(s, t, y);
          }
        }
      var f = Tl();
      if (t.subtreeFlags & Ul)
        for (var h = t.child; h !== null; )
          Kt(h), qw(h, e), h = h.sibling;
      Kt(f);
    }
    function qw(e, t, a) {
      var i = e.alternate, u = e.flags;
      switch (e.tag) {
        case N:
        case le:
        case ye:
        case Se: {
          if (ml(t, e), tu(e), u & Lt) {
            try {
              vl(Kl | fr, e, e.return), Go(Kl | fr, e);
            } catch (rt) {
              pn(e, e.return, rt);
            }
            if (e.mode & jt) {
              try {
                eu(), vl(dr | fr, e, e.return);
              } catch (rt) {
                pn(e, e.return, rt);
              }
              Zl(e);
            } else
              try {
                vl(dr | fr, e, e.return);
              } catch (rt) {
                pn(e, e.return, rt);
              }
          }
          return;
        }
        case F: {
          ml(t, e), tu(e), u & Cn && i !== null && Jf(i, i.return);
          return;
        }
        case Y: {
          ml(t, e), tu(e), u & Cn && i !== null && Jf(i, i.return);
          {
            if (e.flags & ii) {
              var s = e.stateNode;
              try {
                KC(s);
              } catch (rt) {
                pn(e, e.return, rt);
              }
            }
            if (u & Lt) {
              var f = e.stateNode;
              if (f != null) {
                var h = e.memoizedProps, y = i !== null ? i.memoizedProps : h, C = e.type, T = e.updateQueue;
                if (e.updateQueue = null, T !== null)
                  try {
                    c_(f, T, C, y, h, e);
                  } catch (rt) {
                    pn(e, e.return, rt);
                  }
              }
            }
          }
          return;
        }
        case H: {
          if (ml(t, e), tu(e), u & Lt) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var z = e.stateNode, M = e.memoizedProps, W = i !== null ? i.memoizedProps : M;
            try {
              f_(z, W, M);
            } catch (rt) {
              pn(e, e.return, rt);
            }
          }
          return;
        }
        case O: {
          if (ml(t, e), tu(e), u & Lt && i !== null) {
            var X = i.memoizedState;
            if (X.isDehydrated)
              try {
                z_(t.containerInfo);
              } catch (rt) {
                pn(e, e.return, rt);
              }
          }
          return;
        }
        case j: {
          ml(t, e), tu(e);
          return;
        }
        case me: {
          ml(t, e), tu(e);
          var J = e.child;
          if (J.flags & An) {
            var xe = J.stateNode, Xe = J.memoizedState, Ve = Xe !== null;
            if (xe.isHidden = Ve, Ve) {
              var Ut = J.alternate !== null && J.alternate.memoizedState !== null;
              Ut || UD();
            }
          }
          if (u & Lt) {
            try {
              J1(e);
            } catch (rt) {
              pn(e, e.return, rt);
            }
            Kw(e);
          }
          return;
        }
        case Be: {
          var Dt = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & xt
          ) {
            var B = Hr;
            Hr = B || Dt, ml(t, e), Hr = B;
          } else
            ml(t, e);
          if (tu(e), u & An) {
            var Z = e.stateNode, $ = e.memoizedState, fe = $ !== null, Oe = e;
            if (Z.isHidden = fe, fe && !Dt && (Oe.mode & xt) !== We) {
              ze = Oe;
              for (var _e = Oe.child; _e !== null; )
                ze = _e, nD(_e), _e = _e.sibling;
            }
            Q1(Oe, fe);
          }
          return;
        }
        case Ct: {
          ml(t, e), tu(e), u & Lt && Kw(e);
          return;
        }
        case et:
          return;
        default: {
          ml(t, e), tu(e);
          return;
        }
      }
    }
    function tu(e) {
      var t = e.flags;
      if (t & xn) {
        try {
          K1(e);
        } catch (a) {
          pn(e, e.return, a);
        }
        e.flags &= -3;
      }
      t & La && (e.flags &= -4097);
    }
    function tD(e, t, a) {
      Kf = a, qf = t, ze = e, Jw(e, t, a), Kf = null, qf = null;
    }
    function Jw(e, t, a) {
      for (var i = (e.mode & xt) !== We; ze !== null; ) {
        var u = ze, s = u.child;
        if (u.tag === Be && i) {
          var f = u.memoizedState !== null, h = f || Xm;
          if (h) {
            dE(e, t, a);
            continue;
          } else {
            var y = u.alternate, C = y !== null && y.memoizedState !== null, T = C || Hr, z = Xm, M = Hr;
            Xm = h, Hr = T, Hr && !M && (ze = u, rD(u));
            for (var W = s; W !== null; )
              ze = W, Jw(
                W,
                // New root; bubble back up to here and stop.
                t,
                a
              ), W = W.sibling;
            ze = u, Xm = z, Hr = M, dE(e, t, a);
            continue;
          }
        }
        (u.subtreeFlags & Al) !== Ye && s !== null ? (s.return = u, ze = s) : dE(e, t, a);
      }
    }
    function dE(e, t, a) {
      for (; ze !== null; ) {
        var i = ze;
        if ((i.flags & Al) !== Ye) {
          var u = i.alternate;
          Kt(i);
          try {
            Y1(t, u, i, a);
          } catch (f) {
            pn(i, i.return, f);
          }
          dn();
        }
        if (i === e) {
          ze = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, ze = s;
          return;
        }
        ze = i.return;
      }
    }
    function nD(e) {
      for (; ze !== null; ) {
        var t = ze, a = t.child;
        switch (t.tag) {
          case N:
          case le:
          case ye:
          case Se: {
            if (t.mode & jt)
              try {
                eu(), vl(dr, t, t.return);
              } finally {
                Zl(t);
              }
            else
              vl(dr, t, t.return);
            break;
          }
          case F: {
            Jf(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && sE(t, t.return, i);
            break;
          }
          case Y: {
            Jf(t, t.return);
            break;
          }
          case Be: {
            var u = t.memoizedState !== null;
            if (u) {
              Zw(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, ze = a) : Zw(e);
      }
    }
    function Zw(e) {
      for (; ze !== null; ) {
        var t = ze;
        if (t === e) {
          ze = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, ze = a;
          return;
        }
        ze = t.return;
      }
    }
    function rD(e) {
      for (; ze !== null; ) {
        var t = ze, a = t.child;
        if (t.tag === Be) {
          var i = t.memoizedState !== null;
          if (i) {
            eT(e);
            continue;
          }
        }
        a !== null ? (a.return = t, ze = a) : eT(e);
      }
    }
    function eT(e) {
      for (; ze !== null; ) {
        var t = ze;
        Kt(t);
        try {
          W1(t);
        } catch (i) {
          pn(t, t.return, i);
        }
        if (dn(), t === e) {
          ze = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, ze = a;
          return;
        }
        ze = t.return;
      }
    }
    function aD(e, t, a, i) {
      ze = t, iD(t, e, a, i);
    }
    function iD(e, t, a, i) {
      for (; ze !== null; ) {
        var u = ze, s = u.child;
        (u.subtreeFlags & Zi) !== Ye && s !== null ? (s.return = u, ze = s) : lD(e, t, a, i);
      }
    }
    function lD(e, t, a, i) {
      for (; ze !== null; ) {
        var u = ze;
        if ((u.flags & Xr) !== Ye) {
          Kt(u);
          try {
            uD(t, u, a, i);
          } catch (f) {
            pn(u, u.return, f);
          }
          dn();
        }
        if (u === e) {
          ze = null;
          return;
        }
        var s = u.sibling;
        if (s !== null) {
          s.return = u.return, ze = s;
          return;
        }
        ze = u.return;
      }
    }
    function uD(e, t, a, i) {
      switch (t.tag) {
        case N:
        case le:
        case Se: {
          if (t.mode & jt) {
            LS();
            try {
              Go(Pr | fr, t);
            } finally {
              OS(t);
            }
          } else
            Go(Pr | fr, t);
          break;
        }
      }
    }
    function oD(e) {
      ze = e, sD();
    }
    function sD() {
      for (; ze !== null; ) {
        var e = ze, t = e.child;
        if ((ze.flags & Oa) !== Ye) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var u = a[i];
              ze = u, dD(u, e);
            }
            {
              var s = e.alternate;
              if (s !== null) {
                var f = s.child;
                if (f !== null) {
                  s.child = null;
                  do {
                    var h = f.sibling;
                    f.sibling = null, f = h;
                  } while (f !== null);
                }
              }
            }
            ze = e;
          }
        }
        (e.subtreeFlags & Zi) !== Ye && t !== null ? (t.return = e, ze = t) : cD();
      }
    }
    function cD() {
      for (; ze !== null; ) {
        var e = ze;
        (e.flags & Xr) !== Ye && (Kt(e), fD(e), dn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, ze = t;
          return;
        }
        ze = e.return;
      }
    }
    function fD(e) {
      switch (e.tag) {
        case N:
        case le:
        case Se: {
          e.mode & jt ? (LS(), vl(Pr | fr, e, e.return), OS(e)) : vl(Pr | fr, e, e.return);
          break;
        }
      }
    }
    function dD(e, t) {
      for (; ze !== null; ) {
        var a = ze;
        Kt(a), vD(a, t), dn();
        var i = a.child;
        i !== null ? (i.return = a, ze = i) : pD(e);
      }
    }
    function pD(e) {
      for (; ze !== null; ) {
        var t = ze, a = t.sibling, i = t.return;
        if (Ww(t), t === e) {
          ze = null;
          return;
        }
        if (a !== null) {
          a.return = i, ze = a;
          return;
        }
        ze = i;
      }
    }
    function vD(e, t) {
      switch (e.tag) {
        case N:
        case le:
        case Se: {
          e.mode & jt ? (LS(), vl(Pr, e, t), OS(e)) : vl(Pr, e, t);
          break;
        }
      }
    }
    function hD(e) {
      switch (e.tag) {
        case N:
        case le:
        case Se: {
          try {
            Go(dr | fr, e);
          } catch (a) {
            pn(e, e.return, a);
          }
          break;
        }
        case F: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            pn(e, e.return, a);
          }
          break;
        }
      }
    }
    function mD(e) {
      switch (e.tag) {
        case N:
        case le:
        case Se: {
          try {
            Go(Pr | fr, e);
          } catch (t) {
            pn(e, e.return, t);
          }
          break;
        }
      }
    }
    function yD(e) {
      switch (e.tag) {
        case N:
        case le:
        case Se: {
          try {
            vl(dr | fr, e, e.return);
          } catch (a) {
            pn(e, e.return, a);
          }
          break;
        }
        case F: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && sE(e, e.return, t);
          break;
        }
      }
    }
    function gD(e) {
      switch (e.tag) {
        case N:
        case le:
        case Se:
          try {
            vl(Pr | fr, e, e.return);
          } catch (t) {
            pn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var Kp = Symbol.for;
      Kp("selector.component"), Kp("selector.has_pseudo_class"), Kp("selector.role"), Kp("selector.test_id"), Kp("selector.text");
    }
    var SD = [];
    function ED() {
      SD.forEach(function(e) {
        return e();
      });
    }
    var CD = v.ReactCurrentActQueue;
    function RD(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function tT() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && CD.current !== null && g("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var wD = Math.ceil, pE = v.ReactCurrentDispatcher, vE = v.ReactCurrentOwner, Br = v.ReactCurrentBatchConfig, yl = v.ReactCurrentActQueue, hr = (
      /*             */
      0
    ), nT = (
      /*               */
      1
    ), $r = (
      /*                */
      2
    ), Hi = (
      /*                */
      4
    ), Xu = 0, qp = 1, fc = 2, qm = 3, Jp = 4, rT = 5, hE = 6, Mt = hr, Ca = null, Ln = null, mr = ae, nu = ae, mE = jo(ae), yr = Xu, Zp = null, Jm = ae, ev = ae, Zm = ae, tv = null, Ba = null, yE = 0, aT = 500, iT = 1 / 0, TD = 500, Ku = null;
    function nv() {
      iT = Gn() + TD;
    }
    function lT() {
      return iT;
    }
    var ey = !1, gE = null, Zf = null, dc = !1, Ko = null, rv = ae, SE = [], EE = null, xD = 50, av = 0, CE = null, RE = !1, ty = !1, _D = 50, ed = 0, ny = null, iv = nn, ry = ae, uT = !1;
    function ay() {
      return Ca;
    }
    function Ra() {
      return (Mt & ($r | Hi)) !== hr ? Gn() : (iv !== nn || (iv = Gn()), iv);
    }
    function qo(e) {
      var t = e.mode;
      if ((t & xt) === We)
        return tt;
      if ((Mt & $r) !== hr && mr !== ae)
        return Ms(mr);
      var a = Cb() !== Eb;
      if (a) {
        if (Br.transition !== null) {
          var i = Br.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return ry === Ft && (ry = Qd()), ry;
      }
      var u = Fa();
      if (u !== Ft)
        return u;
      var s = i_();
      return s;
    }
    function bD(e) {
      var t = e.mode;
      return (t & xt) === We ? tt : oh();
    }
    function gr(e, t, a, i) {
      qD(), uT && g("useInsertionEffect must not schedule updates."), RE && (ty = !0), Do(e, a, i), (Mt & $r) !== ae && e === Ca ? ek(t) : (Zr && zs(e, t, a), tk(t), e === Ca && ((Mt & $r) === hr && (ev = pt(ev, a)), yr === Jp && Jo(e, mr)), $a(e, i), a === tt && Mt === hr && (t.mode & xt) === We && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !yl.isBatchingLegacy && (nv(), uR()));
    }
    function DD(e, t, a) {
      var i = e.current;
      i.lanes = t, Do(e, t, a), $a(e, a);
    }
    function kD(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (Mt & $r) !== hr
      );
    }
    function $a(e, t) {
      var a = e.callbackNode;
      sf(e, t);
      var i = of(e, e === Ca ? mr : ae);
      if (i === ae) {
        a !== null && wT(a), e.callbackNode = null, e.callbackPriority = Ft;
        return;
      }
      var u = Hl(i), s = e.callbackPriority;
      if (s === u && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(yl.current !== null && a !== kE)) {
        a == null && s !== tt && g("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && wT(a);
      var f;
      if (u === tt)
        e.tag === Ho ? (yl.isBatchingLegacy !== null && (yl.didScheduleLegacyUpdate = !0), rb(cT.bind(null, e))) : lR(cT.bind(null, e)), yl.current !== null ? yl.current.push(Vo) : u_(function() {
          (Mt & ($r | Hi)) === hr && Vo();
        }), f = null;
      else {
        var h;
        switch (hh(i)) {
          case Nr:
            h = Ss;
            break;
          case Oi:
            h = zl;
            break;
          case Aa:
            h = el;
            break;
          case za:
            h = wu;
            break;
          default:
            h = el;
            break;
        }
        f = OE(h, oT.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = f;
    }
    function oT(e, t) {
      if (Qb(), iv = nn, ry = ae, (Mt & ($r | Hi)) !== hr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = Ju();
      if (i && e.callbackNode !== a)
        return null;
      var u = of(e, e === Ca ? mr : ae);
      if (u === ae)
        return null;
      var s = !ff(e, u) && !uh(e, u) && !t, f = s ? jD(e, u) : ly(e, u);
      if (f !== Xu) {
        if (f === fc) {
          var h = cf(e);
          h !== ae && (u = h, f = wE(e, h));
        }
        if (f === qp) {
          var y = Zp;
          throw pc(e, ae), Jo(e, u), $a(e, Gn()), y;
        }
        if (f === hE)
          Jo(e, u);
        else {
          var C = !ff(e, u), T = e.current.alternate;
          if (C && !LD(T)) {
            if (f = ly(e, u), f === fc) {
              var z = cf(e);
              z !== ae && (u = z, f = wE(e, z));
            }
            if (f === qp) {
              var M = Zp;
              throw pc(e, ae), Jo(e, u), $a(e, Gn()), M;
            }
          }
          e.finishedWork = T, e.finishedLanes = u, OD(e, f, u);
        }
      }
      return $a(e, Gn()), e.callbackNode === a ? oT.bind(null, e) : null;
    }
    function wE(e, t) {
      var a = tv;
      if (vf(e)) {
        var i = pc(e, t);
        i.flags |= Gr, K_(e.containerInfo);
      }
      var u = ly(e, t);
      if (u !== fc) {
        var s = Ba;
        Ba = a, s !== null && sT(s);
      }
      return u;
    }
    function sT(e) {
      Ba === null ? Ba = e : Ba.push.apply(Ba, e);
    }
    function OD(e, t, a) {
      switch (t) {
        case Xu:
        case qp:
          throw new Error("Root did not complete. This is a bug in React.");
        case fc: {
          vc(e, Ba, Ku);
          break;
        }
        case qm: {
          if (Jo(e, a), Uu(a) && // do not delay if we're inside an act() scope
          !TT()) {
            var i = yE + aT - Gn();
            if (i > 10) {
              var u = of(e, ae);
              if (u !== ae)
                break;
              var s = e.suspendedLanes;
              if (!Au(s, a)) {
                Ra(), df(e, s);
                break;
              }
              e.timeoutHandle = Eg(vc.bind(null, e, Ba, Ku), i);
              break;
            }
          }
          vc(e, Ba, Ku);
          break;
        }
        case Jp: {
          if (Jo(e, a), Yd(a))
            break;
          if (!TT()) {
            var f = ui(e, a), h = f, y = Gn() - h, C = KD(y) - y;
            if (C > 10) {
              e.timeoutHandle = Eg(vc.bind(null, e, Ba, Ku), C);
              break;
            }
          }
          vc(e, Ba, Ku);
          break;
        }
        case rT: {
          vc(e, Ba, Ku);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function LD(e) {
      for (var t = e; ; ) {
        if (t.flags & wo) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var u = 0; u < i.length; u++) {
                var s = i[u], f = s.getSnapshot, h = s.value;
                try {
                  if (!oe(f(), h))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var y = t.child;
        if (t.subtreeFlags & wo && y !== null) {
          y.return = t, t = y;
          continue;
        }
        if (t === e)
          return !0;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return !0;
    }
    function Jo(e, t) {
      t = Us(t, Zm), t = Us(t, ev), fh(e, t);
    }
    function cT(e) {
      if (Gb(), (Mt & ($r | Hi)) !== hr)
        throw new Error("Should not already be working.");
      Ju();
      var t = of(e, ae);
      if (!ea(t, tt))
        return $a(e, Gn()), null;
      var a = ly(e, t);
      if (e.tag !== Ho && a === fc) {
        var i = cf(e);
        i !== ae && (t = i, a = wE(e, i));
      }
      if (a === qp) {
        var u = Zp;
        throw pc(e, ae), Jo(e, t), $a(e, Gn()), u;
      }
      if (a === hE)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, vc(e, Ba, Ku), $a(e, Gn()), null;
    }
    function ND(e, t) {
      t !== ae && (pf(e, pt(t, tt)), $a(e, Gn()), (Mt & ($r | Hi)) === hr && (nv(), Vo()));
    }
    function TE(e, t) {
      var a = Mt;
      Mt |= nT;
      try {
        return e(t);
      } finally {
        Mt = a, Mt === hr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !yl.isBatchingLegacy && (nv(), uR());
      }
    }
    function MD(e, t, a, i, u) {
      var s = Fa(), f = Br.transition;
      try {
        return Br.transition = null, jn(Nr), e(t, a, i, u);
      } finally {
        jn(s), Br.transition = f, Mt === hr && nv();
      }
    }
    function qu(e) {
      Ko !== null && Ko.tag === Ho && (Mt & ($r | Hi)) === hr && Ju();
      var t = Mt;
      Mt |= nT;
      var a = Br.transition, i = Fa();
      try {
        return Br.transition = null, jn(Nr), e ? e() : void 0;
      } finally {
        jn(i), Br.transition = a, Mt = t, (Mt & ($r | Hi)) === hr && Vo();
      }
    }
    function fT() {
      return (Mt & ($r | Hi)) !== hr;
    }
    function iy(e, t) {
      ia(mE, nu, e), nu = pt(nu, t);
    }
    function xE(e) {
      nu = mE.current, aa(mE, e);
    }
    function pc(e, t) {
      e.finishedWork = null, e.finishedLanes = ae;
      var a = e.timeoutHandle;
      if (a !== Cg && (e.timeoutHandle = Cg, l_(a)), Ln !== null)
        for (var i = Ln.return; i !== null; ) {
          var u = i.alternate;
          Hw(u, i), i = i.return;
        }
      Ca = e;
      var s = hc(e.current, null);
      return Ln = s, mr = nu = t, yr = Xu, Zp = null, Jm = ae, ev = ae, Zm = ae, tv = null, Ba = null, Db(), sl.discardPendingWarnings(), s;
    }
    function dT(e, t) {
      do {
        var a = Ln;
        try {
          if (hm(), zR(), dn(), vE.current = null, a === null || a.return === null) {
            yr = qp, Zp = t, Ln = null;
            return;
          }
          if (Ze && a.mode & jt && Im(a, !0), nt)
            if (ma(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              ki(a, i, mr);
            } else
              Cs(a, t, mr);
          r1(e, a.return, a, t, mr), mT(a);
        } catch (u) {
          t = u, Ln === a && a !== null ? (a = a.return, Ln = a) : a = Ln;
          continue;
        }
        return;
      } while (!0);
    }
    function pT() {
      var e = pE.current;
      return pE.current = jm, e === null ? jm : e;
    }
    function vT(e) {
      pE.current = e;
    }
    function UD() {
      yE = Gn();
    }
    function lv(e) {
      Jm = pt(e, Jm);
    }
    function AD() {
      yr === Xu && (yr = qm);
    }
    function _E() {
      (yr === Xu || yr === qm || yr === fc) && (yr = Jp), Ca !== null && (Ns(Jm) || Ns(ev)) && Jo(Ca, mr);
    }
    function zD(e) {
      yr !== Jp && (yr = fc), tv === null ? tv = [e] : tv.push(e);
    }
    function FD() {
      return yr === Xu;
    }
    function ly(e, t) {
      var a = Mt;
      Mt |= $r;
      var i = pT();
      if (Ca !== e || mr !== t) {
        if (Zr) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (uv(e, mr), u.clear()), dh(e, t);
        }
        Ku = qd(), pc(e, t);
      }
      bu(t);
      do
        try {
          PD();
          break;
        } catch (s) {
          dT(e, s);
        }
      while (!0);
      if (hm(), Mt = a, vT(i), Ln !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return $c(), Ca = null, mr = ae, yr;
    }
    function PD() {
      for (; Ln !== null; )
        hT(Ln);
    }
    function jD(e, t) {
      var a = Mt;
      Mt |= $r;
      var i = pT();
      if (Ca !== e || mr !== t) {
        if (Zr) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (uv(e, mr), u.clear()), dh(e, t);
        }
        Ku = qd(), nv(), pc(e, t);
      }
      bu(t);
      do
        try {
          HD();
          break;
        } catch (s) {
          dT(e, s);
        }
      while (!0);
      return hm(), vT(i), Mt = a, Ln !== null ? (rh(), Xu) : ($c(), Ca = null, mr = ae, yr);
    }
    function HD() {
      for (; Ln !== null && !Od(); )
        hT(Ln);
    }
    function hT(e) {
      var t = e.alternate;
      Kt(e);
      var a;
      (e.mode & jt) !== We ? (kS(e), a = bE(t, e, nu), Im(e, !0)) : a = bE(t, e, nu), dn(), e.memoizedProps = e.pendingProps, a === null ? mT(e) : Ln = a, vE.current = null;
    }
    function mT(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & gs) === Ye) {
          Kt(t);
          var u = void 0;
          if ((t.mode & jt) === We ? u = jw(a, t, nu) : (kS(t), u = jw(a, t, nu), Im(t, !1)), dn(), u !== null) {
            Ln = u;
            return;
          }
        } else {
          var s = A1(a, t);
          if (s !== null) {
            s.flags &= qv, Ln = s;
            return;
          }
          if ((t.mode & jt) !== We) {
            Im(t, !1);
            for (var f = t.actualDuration, h = t.child; h !== null; )
              f += h.actualDuration, h = h.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= gs, i.subtreeFlags = Ye, i.deletions = null;
          else {
            yr = hE, Ln = null;
            return;
          }
        }
        var y = t.sibling;
        if (y !== null) {
          Ln = y;
          return;
        }
        t = i, Ln = t;
      } while (t !== null);
      yr === Xu && (yr = rT);
    }
    function vc(e, t, a) {
      var i = Fa(), u = Br.transition;
      try {
        Br.transition = null, jn(Nr), VD(e, t, a, i);
      } finally {
        Br.transition = u, jn(i);
      }
      return null;
    }
    function VD(e, t, a, i) {
      do
        Ju();
      while (Ko !== null);
      if (JD(), (Mt & ($r | Hi)) !== hr)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, s = e.finishedLanes;
      if (zd(s), u === null)
        return Fd(), null;
      if (s === ae && g("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = ae, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = Ft;
      var f = pt(u.lanes, u.childLanes);
      Xd(e, f), e === Ca && (Ca = null, Ln = null, mr = ae), ((u.subtreeFlags & Zi) !== Ye || (u.flags & Zi) !== Ye) && (dc || (dc = !0, EE = a, OE(el, function() {
        return Ju(), null;
      })));
      var h = (u.subtreeFlags & (Ml | Ul | Al | Zi)) !== Ye, y = (u.flags & (Ml | Ul | Al | Zi)) !== Ye;
      if (h || y) {
        var C = Br.transition;
        Br.transition = null;
        var T = Fa();
        jn(Nr);
        var z = Mt;
        Mt |= Hi, vE.current = null, H1(e, u), uw(), eD(e, u, s), Zx(e.containerInfo), e.current = u, Rs(s), tD(u, e, s), ws(), Ld(), Mt = z, jn(T), Br.transition = C;
      } else
        e.current = u, uw();
      var M = dc;
      if (dc ? (dc = !1, Ko = e, rv = s) : (ed = 0, ny = null), f = e.pendingLanes, f === ae && (Zf = null), M || ET(e.current, !1), Md(u.stateNode, i), Zr && e.memoizedUpdaters.clear(), ED(), $a(e, Gn()), t !== null)
        for (var W = e.onRecoverableError, X = 0; X < t.length; X++) {
          var J = t[X], xe = J.stack, Xe = J.digest;
          W(J.value, {
            componentStack: xe,
            digest: Xe
          });
        }
      if (ey) {
        ey = !1;
        var Ve = gE;
        throw gE = null, Ve;
      }
      return ea(rv, tt) && e.tag !== Ho && Ju(), f = e.pendingLanes, ea(f, tt) ? (Wb(), e === CE ? av++ : (av = 0, CE = e)) : av = 0, Vo(), Fd(), null;
    }
    function Ju() {
      if (Ko !== null) {
        var e = hh(rv), t = Ps(Aa, e), a = Br.transition, i = Fa();
        try {
          return Br.transition = null, jn(t), $D();
        } finally {
          jn(i), Br.transition = a;
        }
      }
      return !1;
    }
    function BD(e) {
      SE.push(e), dc || (dc = !0, OE(el, function() {
        return Ju(), null;
      }));
    }
    function $D() {
      if (Ko === null)
        return !1;
      var e = EE;
      EE = null;
      var t = Ko, a = rv;
      if (Ko = null, rv = ae, (Mt & ($r | Hi)) !== hr)
        throw new Error("Cannot flush passive effects while already rendering.");
      RE = !0, ty = !1, _u(a);
      var i = Mt;
      Mt |= Hi, oD(t.current), aD(t, t.current, a, e);
      {
        var u = SE;
        SE = [];
        for (var s = 0; s < u.length; s++) {
          var f = u[s];
          I1(t, f);
        }
      }
      Hd(), ET(t.current, !0), Mt = i, Vo(), ty ? t === ny ? ed++ : (ed = 0, ny = t) : ed = 0, RE = !1, ty = !1, Ud(t);
      {
        var h = t.current.stateNode;
        h.effectDuration = 0, h.passiveEffectDuration = 0;
      }
      return !0;
    }
    function yT(e) {
      return Zf !== null && Zf.has(e);
    }
    function ID(e) {
      Zf === null ? Zf = /* @__PURE__ */ new Set([e]) : Zf.add(e);
    }
    function YD(e) {
      ey || (ey = !0, gE = e);
    }
    var WD = YD;
    function gT(e, t, a) {
      var i = sc(a, t), u = hw(e, i, tt), s = $o(e, u, tt), f = Ra();
      s !== null && (Do(s, tt, f), $a(s, f));
    }
    function pn(e, t, a) {
      if (F1(a), ov(!1), e.tag === O) {
        gT(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === O) {
          gT(i, e, a);
          return;
        } else if (i.tag === F) {
          var u = i.type, s = i.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !yT(s)) {
            var f = sc(a, e), h = QS(i, f, tt), y = $o(i, h, tt), C = Ra();
            y !== null && (Do(y, tt, C), $a(y, C));
            return;
          }
        }
        i = i.return;
      }
      g(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function QD(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var u = Ra();
      df(e, a), nk(e), Ca === e && Au(mr, a) && (yr === Jp || yr === qm && Uu(mr) && Gn() - yE < aT ? pc(e, ae) : Zm = pt(Zm, a)), $a(e, u);
    }
    function ST(e, t) {
      t === Ft && (t = bD(e));
      var a = Ra(), i = Ha(e, t);
      i !== null && (Do(i, t, a), $a(i, a));
    }
    function GD(e) {
      var t = e.memoizedState, a = Ft;
      t !== null && (a = t.retryLane), ST(e, a);
    }
    function XD(e, t) {
      var a = Ft, i;
      switch (e.tag) {
        case me:
          i = e.stateNode;
          var u = e.memoizedState;
          u !== null && (a = u.retryLane);
          break;
        case Ct:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), ST(e, a);
    }
    function KD(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : wD(e / 1960) * 1960;
    }
    function qD() {
      if (av > xD)
        throw av = 0, CE = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      ed > _D && (ed = 0, ny = null, g("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function JD() {
      sl.flushLegacyContextWarning(), sl.flushPendingUnsafeLifecycleWarnings();
    }
    function ET(e, t) {
      Kt(e), uy(e, Nl, yD), t && uy(e, _i, gD), uy(e, Nl, hD), t && uy(e, _i, mD), dn();
    }
    function uy(e, t, a) {
      for (var i = e, u = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== u && i.child !== null && s !== Ye ? i = i.child : ((i.flags & t) !== Ye && a(i), i.sibling !== null ? i = i.sibling : i = u = i.return);
      }
    }
    var oy = null;
    function CT(e) {
      {
        if ((Mt & $r) !== hr || !(e.mode & xt))
          return;
        var t = e.tag;
        if (t !== K && t !== O && t !== F && t !== N && t !== le && t !== ye && t !== Se)
          return;
        var a = lt(e) || "ReactComponent";
        if (oy !== null) {
          if (oy.has(a))
            return;
          oy.add(a);
        } else
          oy = /* @__PURE__ */ new Set([a]);
        var i = lr;
        try {
          Kt(e), g("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? Kt(e) : dn();
        }
      }
    }
    var bE;
    {
      var ZD = null;
      bE = function(e, t, a) {
        var i = kT(ZD, t);
        try {
          return Uw(e, t, a);
        } catch (s) {
          if (fb() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (hm(), zR(), Hw(e, t), kT(t, i), t.mode & jt && kS(t), Ll(null, Uw, null, e, t, a), qi()) {
            var u = ys();
            typeof u == "object" && u !== null && u._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var RT = !1, DE;
    DE = /* @__PURE__ */ new Set();
    function ek(e) {
      if (Si && !$b())
        switch (e.tag) {
          case N:
          case le:
          case Se: {
            var t = Ln && lt(Ln) || "Unknown", a = t;
            if (!DE.has(a)) {
              DE.add(a);
              var i = lt(e) || "Unknown";
              g("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case F: {
            RT || (g("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), RT = !0);
            break;
          }
        }
    }
    function uv(e, t) {
      if (Zr) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          zs(e, i, t);
        });
      }
    }
    var kE = {};
    function OE(e, t) {
      {
        var a = yl.current;
        return a !== null ? (a.push(t), kE) : kd(e, t);
      }
    }
    function wT(e) {
      if (e !== kE)
        return Zv(e);
    }
    function TT() {
      return yl.current !== null;
    }
    function tk(e) {
      {
        if (e.mode & xt) {
          if (!tT())
            return;
        } else if (!RD() || Mt !== hr || e.tag !== N && e.tag !== le && e.tag !== Se)
          return;
        if (yl.current === null) {
          var t = lr;
          try {
            Kt(e), g(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, lt(e));
          } finally {
            t ? Kt(e) : dn();
          }
        }
      }
    }
    function nk(e) {
      e.tag !== Ho && tT() && yl.current === null && g(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function ov(e) {
      uT = e;
    }
    var Vi = null, td = null, rk = function(e) {
      Vi = e;
    };
    function nd(e) {
      {
        if (Vi === null)
          return e;
        var t = Vi(e);
        return t === void 0 ? e : t.current;
      }
    }
    function LE(e) {
      return nd(e);
    }
    function NE(e) {
      {
        if (Vi === null)
          return e;
        var t = Vi(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = nd(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: re,
                render: a
              };
              return e.displayName !== void 0 && (i.displayName = e.displayName), i;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function xT(e, t) {
      {
        if (Vi === null)
          return !1;
        var a = e.elementType, i = t.type, u = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case F: {
            typeof i == "function" && (u = !0);
            break;
          }
          case N: {
            (typeof i == "function" || s === ut) && (u = !0);
            break;
          }
          case le: {
            (s === re || s === ut) && (u = !0);
            break;
          }
          case ye:
          case Se: {
            (s === ft || s === ut) && (u = !0);
            break;
          }
          default:
            return !1;
        }
        if (u) {
          var f = Vi(a);
          if (f !== void 0 && f === Vi(i))
            return !0;
        }
        return !1;
      }
    }
    function _T(e) {
      {
        if (Vi === null || typeof WeakSet != "function")
          return;
        td === null && (td = /* @__PURE__ */ new WeakSet()), td.add(e);
      }
    }
    var ak = function(e, t) {
      {
        if (Vi === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        Ju(), qu(function() {
          ME(e.current, i, a);
        });
      }
    }, ik = function(e, t) {
      {
        if (e.context !== ci)
          return;
        Ju(), qu(function() {
          sv(t, e, null, null);
        });
      }
    };
    function ME(e, t, a) {
      {
        var i = e.alternate, u = e.child, s = e.sibling, f = e.tag, h = e.type, y = null;
        switch (f) {
          case N:
          case Se:
          case F:
            y = h;
            break;
          case le:
            y = h.render;
            break;
        }
        if (Vi === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var C = !1, T = !1;
        if (y !== null) {
          var z = Vi(y);
          z !== void 0 && (a.has(z) ? T = !0 : t.has(z) && (f === F ? T = !0 : C = !0));
        }
        if (td !== null && (td.has(e) || i !== null && td.has(i)) && (T = !0), T && (e._debugNeedsRemount = !0), T || C) {
          var M = Ha(e, tt);
          M !== null && gr(M, e, tt, nn);
        }
        u !== null && !T && ME(u, t, a), s !== null && ME(s, t, a);
      }
    }
    var lk = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(u) {
          return u.current;
        }));
        return UE(e.current, i, a), a;
      }
    };
    function UE(e, t, a) {
      {
        var i = e.child, u = e.sibling, s = e.tag, f = e.type, h = null;
        switch (s) {
          case N:
          case Se:
          case F:
            h = f;
            break;
          case le:
            h = f.render;
            break;
        }
        var y = !1;
        h !== null && t.has(h) && (y = !0), y ? uk(e, a) : i !== null && UE(i, t, a), u !== null && UE(u, t, a);
      }
    }
    function uk(e, t) {
      {
        var a = ok(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case Y:
              t.add(i.stateNode);
              return;
            case j:
              t.add(i.stateNode.containerInfo);
              return;
            case O:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function ok(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === Y)
          i = !0, t.add(a.stateNode);
        else if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === e)
          return i;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return i;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
      return !1;
    }
    var AE;
    {
      AE = !1;
      try {
        var bT = Object.preventExtensions({});
      } catch {
        AE = !0;
      }
    }
    function sk(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = Ye, this.subtreeFlags = Ye, this.deletions = null, this.lanes = ae, this.childLanes = ae, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !AE && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var fi = function(e, t, a, i) {
      return new sk(e, t, a, i);
    };
    function zE(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function ck(e) {
      return typeof e == "function" && !zE(e) && e.defaultProps === void 0;
    }
    function fk(e) {
      if (typeof e == "function")
        return zE(e) ? F : N;
      if (e != null) {
        var t = e.$$typeof;
        if (t === re)
          return le;
        if (t === ft)
          return ye;
      }
      return K;
    }
    function hc(e, t) {
      var a = e.alternate;
      a === null ? (a = fi(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = Ye, a.subtreeFlags = Ye, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & zn, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case K:
        case N:
        case Se:
          a.type = nd(e.type);
          break;
        case F:
          a.type = LE(e.type);
          break;
        case le:
          a.type = NE(e.type);
          break;
      }
      return a;
    }
    function dk(e, t) {
      e.flags &= zn | xn;
      var a = e.alternate;
      if (a === null)
        e.childLanes = ae, e.lanes = t, e.child = null, e.subtreeFlags = Ye, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = Ye, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function pk(e, t, a) {
      var i;
      return e === im ? (i = xt, t === !0 && (i |= Zt, i |= Ht)) : i = We, Zr && (i |= jt), fi(O, null, null, i);
    }
    function FE(e, t, a, i, u, s) {
      var f = K, h = e;
      if (typeof e == "function")
        zE(e) ? (f = F, h = LE(h)) : h = nd(h);
      else if (typeof e == "string")
        f = Y;
      else
        e: switch (e) {
          case hi:
            return Zo(a.children, u, s, t);
          case Xa:
            f = se, u |= Zt, (u & xt) !== We && (u |= Ht);
            break;
          case mi:
            return vk(a, u, s, t);
          case we:
            return hk(a, u, s, t);
          case Me:
            return mk(a, u, s, t);
          case Tn:
            return DT(a, u, s, t);
          case ln:
          case _t:
          case fn:
          case ir:
          case Tt:
          default: {
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case yi:
                  f = ne;
                  break e;
                case k:
                  f = be;
                  break e;
                case re:
                  f = le, h = NE(h);
                  break e;
                case ft:
                  f = ye;
                  break e;
                case ut:
                  f = Le, h = null;
                  break e;
              }
            var y = "";
            {
              (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (y += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
              var C = i ? lt(i) : null;
              C && (y += `

Check the render method of \`` + C + "`.");
            }
            throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + y));
          }
        }
      var T = fi(f, a, t, u);
      return T.elementType = e, T.type = h, T.lanes = s, T._debugOwner = i, T;
    }
    function PE(e, t, a) {
      var i = null;
      i = e._owner;
      var u = e.type, s = e.key, f = e.props, h = FE(u, s, f, i, t, a);
      return h._debugSource = e._source, h._debugOwner = e._owner, h;
    }
    function Zo(e, t, a, i) {
      var u = fi(de, e, i, t);
      return u.lanes = a, u;
    }
    function vk(e, t, a, i) {
      typeof e.id != "string" && g('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = fi(pe, e, i, t | jt);
      return u.elementType = mi, u.lanes = a, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function hk(e, t, a, i) {
      var u = fi(me, e, i, t);
      return u.elementType = we, u.lanes = a, u;
    }
    function mk(e, t, a, i) {
      var u = fi(Ct, e, i, t);
      return u.elementType = Me, u.lanes = a, u;
    }
    function DT(e, t, a, i) {
      var u = fi(Be, e, i, t);
      u.elementType = Tn, u.lanes = a;
      var s = {
        isHidden: !1
      };
      return u.stateNode = s, u;
    }
    function jE(e, t, a) {
      var i = fi(H, e, null, t);
      return i.lanes = a, i;
    }
    function yk() {
      var e = fi(Y, null, null, We);
      return e.elementType = "DELETED", e;
    }
    function gk(e) {
      var t = fi(it, null, null, We);
      return t.stateNode = e, t;
    }
    function HE(e, t, a) {
      var i = e.children !== null ? e.children : [], u = fi(j, i, e.key, t);
      return u.lanes = a, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, u;
    }
    function kT(e, t) {
      return e === null && (e = fi(K, null, null, We)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function Sk(e, t, a, i, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = Cg, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Ft, this.eventTimes = As(ae), this.expirationTimes = As(nn), this.pendingLanes = ae, this.suspendedLanes = ae, this.pingedLanes = ae, this.expiredLanes = ae, this.mutableReadLanes = ae, this.finishedLanes = ae, this.entangledLanes = ae, this.entanglements = As(ae), this.identifierPrefix = i, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < Du; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case im:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case Ho:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function OT(e, t, a, i, u, s, f, h, y, C) {
      var T = new Sk(e, t, a, h, y), z = pk(t, s);
      T.current = z, z.stateNode = T;
      {
        var M = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        z.memoizedState = M;
      }
      return Zg(z), T;
    }
    var VE = "18.3.1";
    function Ek(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return Yr(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: ar,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var BE, $E;
    BE = !1, $E = {};
    function LT(e) {
      if (!e)
        return ci;
      var t = Ro(e), a = nb(t);
      if (t.tag === F) {
        var i = t.type;
        if (Xl(i))
          return aR(t, i, a);
      }
      return a;
    }
    function Ck(e, t) {
      {
        var a = Ro(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var u = qr(a);
        if (u === null)
          return null;
        if (u.mode & Zt) {
          var s = lt(a) || "Component";
          if (!$E[s]) {
            $E[s] = !0;
            var f = lr;
            try {
              Kt(u), a.mode & Zt ? g("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : g("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? Kt(f) : dn();
            }
          }
        }
        return u.stateNode;
      }
    }
    function NT(e, t, a, i, u, s, f, h) {
      var y = !1, C = null;
      return OT(e, t, y, C, a, i, u, s, f);
    }
    function MT(e, t, a, i, u, s, f, h, y, C) {
      var T = !0, z = OT(a, i, T, e, u, s, f, h, y);
      z.context = LT(null);
      var M = z.current, W = Ra(), X = qo(M), J = Qu(W, X);
      return J.callback = t ?? null, $o(M, J, X), DD(z, X, W), z;
    }
    function sv(e, t, a, i) {
      Nd(t, e);
      var u = t.current, s = Ra(), f = qo(u);
      Sn(f);
      var h = LT(a);
      t.context === null ? t.context = h : t.pendingContext = h, Si && lr !== null && !BE && (BE = !0, g(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, lt(lr) || "Unknown"));
      var y = Qu(s, f);
      y.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && g("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), y.callback = i);
      var C = $o(u, y, f);
      return C !== null && (gr(C, u, f, s), Em(C, u, f)), f;
    }
    function sy(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case Y:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function Rk(e) {
      switch (e.tag) {
        case O: {
          var t = e.stateNode;
          if (vf(t)) {
            var a = ih(t);
            ND(t, a);
          }
          break;
        }
        case me: {
          qu(function() {
            var u = Ha(e, tt);
            if (u !== null) {
              var s = Ra();
              gr(u, e, tt, s);
            }
          });
          var i = tt;
          IE(e, i);
          break;
        }
      }
    }
    function UT(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = ch(a.retryLane, t));
    }
    function IE(e, t) {
      UT(e, t);
      var a = e.alternate;
      a && UT(a, t);
    }
    function wk(e) {
      if (e.tag === me) {
        var t = ks, a = Ha(e, t);
        if (a !== null) {
          var i = Ra();
          gr(a, e, t, i);
        }
        IE(e, t);
      }
    }
    function Tk(e) {
      if (e.tag === me) {
        var t = qo(e), a = Ha(e, t);
        if (a !== null) {
          var i = Ra();
          gr(a, e, t, i);
        }
        IE(e, t);
      }
    }
    function AT(e) {
      var t = vn(e);
      return t === null ? null : t.stateNode;
    }
    var zT = function(e) {
      return null;
    };
    function xk(e) {
      return zT(e);
    }
    var FT = function(e) {
      return !1;
    };
    function _k(e) {
      return FT(e);
    }
    var PT = null, jT = null, HT = null, VT = null, BT = null, $T = null, IT = null, YT = null, WT = null;
    {
      var QT = function(e, t, a) {
        var i = t[a], u = Et(e) ? e.slice() : ht({}, e);
        return a + 1 === t.length ? (Et(u) ? u.splice(i, 1) : delete u[i], u) : (u[i] = QT(e[i], t, a + 1), u);
      }, GT = function(e, t) {
        return QT(e, t, 0);
      }, XT = function(e, t, a, i) {
        var u = t[i], s = Et(e) ? e.slice() : ht({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[u], Et(s) ? s.splice(u, 1) : delete s[u];
        } else
          s[u] = XT(
            // $FlowFixMe number or string is fine here
            e[u],
            t,
            a,
            i + 1
          );
        return s;
      }, KT = function(e, t, a) {
        if (t.length !== a.length) {
          b("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              b("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return XT(e, t, a, 0);
      }, qT = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var u = t[a], s = Et(e) ? e.slice() : ht({}, e);
        return s[u] = qT(e[u], t, a + 1, i), s;
      }, JT = function(e, t, a) {
        return qT(e, t, 0, a);
      }, YE = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      PT = function(e, t, a, i) {
        var u = YE(e, t);
        if (u !== null) {
          var s = JT(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = ht({}, e.memoizedProps);
          var f = Ha(e, tt);
          f !== null && gr(f, e, tt, nn);
        }
      }, jT = function(e, t, a) {
        var i = YE(e, t);
        if (i !== null) {
          var u = GT(i.memoizedState, a);
          i.memoizedState = u, i.baseState = u, e.memoizedProps = ht({}, e.memoizedProps);
          var s = Ha(e, tt);
          s !== null && gr(s, e, tt, nn);
        }
      }, HT = function(e, t, a, i) {
        var u = YE(e, t);
        if (u !== null) {
          var s = KT(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = ht({}, e.memoizedProps);
          var f = Ha(e, tt);
          f !== null && gr(f, e, tt, nn);
        }
      }, VT = function(e, t, a) {
        e.pendingProps = JT(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Ha(e, tt);
        i !== null && gr(i, e, tt, nn);
      }, BT = function(e, t) {
        e.pendingProps = GT(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Ha(e, tt);
        a !== null && gr(a, e, tt, nn);
      }, $T = function(e, t, a) {
        e.pendingProps = KT(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Ha(e, tt);
        i !== null && gr(i, e, tt, nn);
      }, IT = function(e) {
        var t = Ha(e, tt);
        t !== null && gr(t, e, tt, nn);
      }, YT = function(e) {
        zT = e;
      }, WT = function(e) {
        FT = e;
      };
    }
    function bk(e) {
      var t = qr(e);
      return t === null ? null : t.stateNode;
    }
    function Dk(e) {
      return null;
    }
    function kk() {
      return lr;
    }
    function Ok(e) {
      var t = e.findFiberByHostInstance, a = v.ReactCurrentDispatcher;
      return xo({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: PT,
        overrideHookStateDeletePath: jT,
        overrideHookStateRenamePath: HT,
        overrideProps: VT,
        overridePropsDeletePath: BT,
        overridePropsRenamePath: $T,
        setErrorHandler: YT,
        setSuspenseHandler: WT,
        scheduleUpdate: IT,
        currentDispatcherRef: a,
        findHostInstanceByFiber: bk,
        findFiberByHostInstance: t || Dk,
        // React Refresh
        findHostInstancesForRefresh: lk,
        scheduleRefresh: ak,
        scheduleRoot: ik,
        setRefreshHandler: rk,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: kk,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: VE
      });
    }
    var ZT = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function WE(e) {
      this._internalRoot = e;
    }
    cy.prototype.render = WE.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? g("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : fy(arguments[1]) ? g("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && g("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== Un) {
          var i = AT(t.current);
          i && i.parentNode !== a && g("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      sv(e, t, null, null);
    }, cy.prototype.unmount = WE.prototype.unmount = function() {
      typeof arguments[0] == "function" && g("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        fT() && g("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), qu(function() {
          sv(null, e, null, null);
        }), ZC(t);
      }
    };
    function Lk(e, t) {
      if (!fy(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      e0(e);
      var a = !1, i = !1, u = "", s = ZT;
      t != null && (t.hydrate ? b("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === Dr && g(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = NT(e, im, null, a, i, u, s);
      Jh(f.current, e);
      var h = e.nodeType === Un ? e.parentNode : e;
      return hp(h), new WE(f);
    }
    function cy(e) {
      this._internalRoot = e;
    }
    function Nk(e) {
      e && Eh(e);
    }
    cy.prototype.unstable_scheduleHydration = Nk;
    function Mk(e, t, a) {
      if (!fy(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      e0(e), t === void 0 && g("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, u = a != null && a.hydratedSources || null, s = !1, f = !1, h = "", y = ZT;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (h = a.identifierPrefix), a.onRecoverableError !== void 0 && (y = a.onRecoverableError));
      var C = MT(t, null, e, im, i, s, f, h, y);
      if (Jh(C.current, e), hp(e), u)
        for (var T = 0; T < u.length; T++) {
          var z = u[T];
          Fb(C, z);
        }
      return new cy(C);
    }
    function fy(e) {
      return !!(e && (e.nodeType === Qr || e.nodeType === Ki || e.nodeType === yd));
    }
    function cv(e) {
      return !!(e && (e.nodeType === Qr || e.nodeType === Ki || e.nodeType === yd || e.nodeType === Un && e.nodeValue === " react-mount-point-unstable "));
    }
    function e0(e) {
      e.nodeType === Qr && e.tagName && e.tagName.toUpperCase() === "BODY" && g("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), _p(e) && (e._reactRootContainer ? g("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : g("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var Uk = v.ReactCurrentOwner, t0;
    t0 = function(e) {
      if (e._reactRootContainer && e.nodeType !== Un) {
        var t = AT(e._reactRootContainer.current);
        t && t.parentNode !== e && g("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = QE(e), u = !!(i && Po(i));
      u && !a && g("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Qr && e.tagName && e.tagName.toUpperCase() === "BODY" && g("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function QE(e) {
      return e ? e.nodeType === Ki ? e.documentElement : e.firstChild : null;
    }
    function n0() {
    }
    function Ak(e, t, a, i, u) {
      if (u) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var M = sy(f);
            s.call(M);
          };
        }
        var f = MT(
          t,
          i,
          e,
          Ho,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          n0
        );
        e._reactRootContainer = f, Jh(f.current, e);
        var h = e.nodeType === Un ? e.parentNode : e;
        return hp(h), qu(), f;
      } else {
        for (var y; y = e.lastChild; )
          e.removeChild(y);
        if (typeof i == "function") {
          var C = i;
          i = function() {
            var M = sy(T);
            C.call(M);
          };
        }
        var T = NT(
          e,
          Ho,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          n0
        );
        e._reactRootContainer = T, Jh(T.current, e);
        var z = e.nodeType === Un ? e.parentNode : e;
        return hp(z), qu(function() {
          sv(t, T, a, i);
        }), T;
      }
    }
    function zk(e, t) {
      e !== null && typeof e != "function" && g("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function dy(e, t, a, i, u) {
      t0(a), zk(u === void 0 ? null : u, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = Ak(a, t, e, u, i);
      else {
        if (f = s, typeof u == "function") {
          var h = u;
          u = function() {
            var y = sy(f);
            h.call(y);
          };
        }
        sv(t, f, e, u);
      }
      return sy(f);
    }
    var r0 = !1;
    function Fk(e) {
      {
        r0 || (r0 = !0, g("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = Uk.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || g("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", At(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === Qr ? e : Ck(e, "findDOMNode");
    }
    function Pk(e, t, a) {
      if (g("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !cv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = _p(t) && t._reactRootContainer === void 0;
        i && g("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return dy(null, e, t, !0, a);
    }
    function jk(e, t, a) {
      if (g("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !cv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = _p(t) && t._reactRootContainer === void 0;
        i && g("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return dy(null, e, t, !1, a);
    }
    function Hk(e, t, a, i) {
      if (g("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !cv(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !Iy(e))
        throw new Error("parentComponent must be a valid React Component");
      return dy(e, t, a, !1, i);
    }
    var a0 = !1;
    function Vk(e) {
      if (a0 || (a0 = !0, g("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !cv(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = _p(e) && e._reactRootContainer === void 0;
        t && g("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = QE(e), i = a && !Po(a);
          i && g("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return qu(function() {
          dy(null, null, e, !1, function() {
            e._reactRootContainer = null, ZC(e);
          });
        }), !0;
      } else {
        {
          var u = QE(e), s = !!(u && Po(u)), f = e.nodeType === Qr && cv(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && g("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    Tr(Rk), ko(wk), mh(Tk), Hs(Fa), Jd(ph), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && g("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), Oc($x), $y(TE, MD, qu);
    function Bk(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!fy(t))
        throw new Error("Target container is not a DOM element.");
      return Ek(e, t, null, a);
    }
    function $k(e, t, a, i) {
      return Hk(e, t, a, i);
    }
    var GE = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [Po, Mf, Zh, go, Lc, TE]
    };
    function Ik(e, t) {
      return GE.usingClientEntryPoint || g('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), Lk(e, t);
    }
    function Yk(e, t, a) {
      return GE.usingClientEntryPoint || g('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), Mk(e, t, a);
    }
    function Wk(e) {
      return fT() && g("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), qu(e);
    }
    var Qk = Ok({
      findFiberByHostInstance: ec,
      bundleType: 1,
      version: VE,
      rendererPackageName: "react-dom"
    });
    if (!Qk && Nn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var i0 = window.location.protocol;
      /^(https?|file):$/.test(i0) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (i0 === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Ya.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = GE, Ya.createPortal = Bk, Ya.createRoot = Ik, Ya.findDOMNode = Fk, Ya.flushSync = Wk, Ya.hydrate = Pk, Ya.hydrateRoot = Yk, Ya.render = jk, Ya.unmountComponentAtNode = Vk, Ya.unstable_batchedUpdates = TE, Ya.unstable_renderSubtreeIntoContainer = $k, Ya.version = VE, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Ya;
}
function z0() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (je.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(z0);
    } catch (d) {
      console.error(d);
    }
  }
}
je.env.NODE_ENV === "production" ? (z0(), nC.exports = sO()) : nC.exports = cO();
var F0 = nC.exports;
const fO = /* @__PURE__ */ b0(F0), dO = /* @__PURE__ */ U0({
  __proto__: null,
  default: fO
}, [F0]);
function Ty() {
  return Ty = Object.assign ? Object.assign.bind() : function(d) {
    for (var m = 1; m < arguments.length; m++) {
      var v = arguments[m];
      for (var R in v)
        Object.prototype.hasOwnProperty.call(v, R) && (d[R] = v[R]);
    }
    return d;
  }, Ty.apply(this, arguments);
}
const yc = /* @__PURE__ */ D.createContext(null);
je.env.NODE_ENV !== "production" && (yc.displayName = "DataRouter");
const id = /* @__PURE__ */ D.createContext(null);
je.env.NODE_ENV !== "production" && (id.displayName = "DataRouterState");
const gv = /* @__PURE__ */ D.createContext(null);
je.env.NODE_ENV !== "production" && (gv.displayName = "Await");
const $i = /* @__PURE__ */ D.createContext(null);
je.env.NODE_ENV !== "production" && ($i.displayName = "Navigation");
const _y = /* @__PURE__ */ D.createContext(null);
je.env.NODE_ENV !== "production" && (_y.displayName = "Location");
const au = /* @__PURE__ */ D.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
je.env.NODE_ENV !== "production" && (au.displayName = "Route");
const sC = /* @__PURE__ */ D.createContext(null);
je.env.NODE_ENV !== "production" && (sC.displayName = "RouteError");
function cC(d, m) {
  let {
    relative: v
  } = m === void 0 ? {} : m;
  Ev() || (je.env.NODE_ENV !== "production" ? sn(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  ) : sn(!1));
  let {
    basename: R,
    navigator: w
  } = D.useContext($i), {
    hash: b,
    pathname: g,
    search: U
  } = Cv(d, {
    relative: v
  }), N = g;
  return R !== "/" && (N = g === "/" ? R : yv([R, g])), w.createHref({
    pathname: N,
    search: U,
    hash: b
  });
}
function Ev() {
  return D.useContext(_y) != null;
}
function iu() {
  return Ev() || (je.env.NODE_ENV !== "production" ? sn(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ) : sn(!1)), D.useContext(_y).location;
}
const P0 = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function j0(d) {
  D.useContext($i).static || D.useLayoutEffect(d);
}
function H0() {
  let {
    isDataRoute: d
  } = D.useContext(au);
  return d ? OO() : pO();
}
function pO() {
  Ev() || (je.env.NODE_ENV !== "production" ? sn(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  ) : sn(!1));
  let d = D.useContext(yc), {
    basename: m,
    future: v,
    navigator: R
  } = D.useContext($i), {
    matches: w
  } = D.useContext(au), {
    pathname: b
  } = iu(), g = JSON.stringify(O0(w, v.v7_relativeSplatPath)), U = D.useRef(!1);
  return j0(() => {
    U.current = !0;
  }), D.useCallback(function(F, K) {
    if (K === void 0 && (K = {}), je.env.NODE_ENV !== "production" && Wa(U.current, P0), !U.current) return;
    if (typeof F == "number") {
      R.go(F);
      return;
    }
    let O = L0(F, JSON.parse(g), b, K.relative === "path");
    d == null && m !== "/" && (O.pathname = O.pathname === "/" ? m : yv([m, O.pathname])), (K.replace ? R.replace : R.push)(O, K.state, K);
  }, [m, R, g, b, d]);
}
const vO = /* @__PURE__ */ D.createContext(null);
function hO(d) {
  let m = D.useContext(au).outlet;
  return m && /* @__PURE__ */ D.createElement(vO.Provider, {
    value: d
  }, m);
}
function Cv(d, m) {
  let {
    relative: v
  } = m === void 0 ? {} : m, {
    future: R
  } = D.useContext($i), {
    matches: w
  } = D.useContext(au), {
    pathname: b
  } = iu(), g = JSON.stringify(O0(w, R.v7_relativeSplatPath));
  return D.useMemo(() => L0(d, JSON.parse(g), b, v === "path"), [d, g, b, v]);
}
function mO(d, m, v, R) {
  Ev() || (je.env.NODE_ENV !== "production" ? sn(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  ) : sn(!1));
  let {
    navigator: w,
    static: b
  } = D.useContext($i), {
    matches: g
  } = D.useContext(au), U = g[g.length - 1], N = U ? U.params : {}, F = U ? U.pathname : "/", K = U ? U.pathnameBase : "/", O = U && U.route;
  if (je.env.NODE_ENV !== "production") {
    let ne = O && O.path || "";
    $0(F, !O || ne.endsWith("*"), "You rendered descendant <Routes> (or called `useRoutes()`) at " + ('"' + F + '" (under <Route path="' + ne + '">) but the ') + `parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

` + ('Please change the parent <Route path="' + ne + '"> to <Route ') + ('path="' + (ne === "/" ? "*" : ne + "/*") + '">.'));
  }
  let j = iu(), Y;
  Y = j;
  let H = Y.pathname || "/", de = H;
  if (K !== "/") {
    let ne = K.replace(/^\//, "").split("/");
    de = "/" + H.replace(/^\//, "").split("/").slice(ne.length).join("/");
  }
  let se = !b && v && v.matches && v.matches.length > 0 ? v.matches : uC(d, {
    pathname: de
  });
  return je.env.NODE_ENV !== "production" && (je.env.NODE_ENV !== "production" && Wa(O || se != null, 'No routes matched location "' + Y.pathname + Y.search + Y.hash + '" '), je.env.NODE_ENV !== "production" && Wa(se == null || se[se.length - 1].route.element !== void 0 || se[se.length - 1].route.Component !== void 0 || se[se.length - 1].route.lazy !== void 0, 'Matched leaf route at location "' + Y.pathname + Y.search + Y.hash + '" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.')), CO(se && se.map((ne) => Object.assign({}, ne, {
    params: Object.assign({}, N, ne.params),
    pathname: yv([
      K,
      // Re-encode pathnames that were decoded inside matchRoutes
      w.encodeLocation ? w.encodeLocation(ne.pathname).pathname : ne.pathname
    ]),
    pathnameBase: ne.pathnameBase === "/" ? K : yv([
      K,
      // Re-encode pathnames that were decoded inside matchRoutes
      w.encodeLocation ? w.encodeLocation(ne.pathnameBase).pathname : ne.pathnameBase
    ])
  })), g, v, R);
}
function yO() {
  let d = B0(), m = oC(d) ? d.status + " " + d.statusText : d instanceof Error ? d.message : JSON.stringify(d), v = d instanceof Error ? d.stack : null, R = "rgba(200,200,200, 0.5)", w = {
    padding: "0.5rem",
    backgroundColor: R
  }, b = {
    padding: "2px 4px",
    backgroundColor: R
  }, g = null;
  return je.env.NODE_ENV !== "production" && (console.error("Error handled by React Router default ErrorBoundary:", d), g = /* @__PURE__ */ D.createElement(D.Fragment, null, /* @__PURE__ */ D.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ D.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ D.createElement("code", {
    style: b
  }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ D.createElement("code", {
    style: b
  }, "errorElement"), " prop on your route."))), /* @__PURE__ */ D.createElement(D.Fragment, null, /* @__PURE__ */ D.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ D.createElement("h3", {
    style: {
      fontStyle: "italic"
    }
  }, m), v ? /* @__PURE__ */ D.createElement("pre", {
    style: w
  }, v) : null, g);
}
const gO = /* @__PURE__ */ D.createElement(yO, null);
class SO extends D.Component {
  constructor(m) {
    super(m), this.state = {
      location: m.location,
      revalidation: m.revalidation,
      error: m.error
    };
  }
  static getDerivedStateFromError(m) {
    return {
      error: m
    };
  }
  static getDerivedStateFromProps(m, v) {
    return v.location !== m.location || v.revalidation !== "idle" && m.revalidation === "idle" ? {
      error: m.error,
      location: m.location,
      revalidation: m.revalidation
    } : {
      error: m.error !== void 0 ? m.error : v.error,
      location: v.location,
      revalidation: m.revalidation || v.revalidation
    };
  }
  componentDidCatch(m, v) {
    console.error("React Router caught the following error during render", m, v);
  }
  render() {
    return this.state.error !== void 0 ? /* @__PURE__ */ D.createElement(au.Provider, {
      value: this.props.routeContext
    }, /* @__PURE__ */ D.createElement(sC.Provider, {
      value: this.state.error,
      children: this.props.component
    })) : this.props.children;
  }
}
function EO(d) {
  let {
    routeContext: m,
    match: v,
    children: R
  } = d, w = D.useContext(yc);
  return w && w.static && w.staticContext && (v.route.errorElement || v.route.ErrorBoundary) && (w.staticContext._deepestRenderedBoundaryId = v.route.id), /* @__PURE__ */ D.createElement(au.Provider, {
    value: m
  }, R);
}
function CO(d, m, v, R) {
  var w;
  if (m === void 0 && (m = []), v === void 0 && (v = null), R === void 0 && (R = null), d == null) {
    var b;
    if (!v)
      return null;
    if (v.errors)
      d = v.matches;
    else if ((b = R) != null && b.v7_partialHydration && m.length === 0 && !v.initialized && v.matches.length > 0)
      d = v.matches;
    else
      return null;
  }
  let g = d, U = (w = v) == null ? void 0 : w.errors;
  if (U != null) {
    let K = g.findIndex((O) => O.route.id && U?.[O.route.id] !== void 0);
    K >= 0 || (je.env.NODE_ENV !== "production" ? sn(!1, "Could not find a matching route for errors on route IDs: " + Object.keys(U).join(",")) : sn(!1)), g = g.slice(0, Math.min(g.length, K + 1));
  }
  let N = !1, F = -1;
  if (v && R && R.v7_partialHydration)
    for (let K = 0; K < g.length; K++) {
      let O = g[K];
      if ((O.route.HydrateFallback || O.route.hydrateFallbackElement) && (F = K), O.route.id) {
        let {
          loaderData: j,
          errors: Y
        } = v, H = O.route.loader && j[O.route.id] === void 0 && (!Y || Y[O.route.id] === void 0);
        if (O.route.lazy || H) {
          N = !0, F >= 0 ? g = g.slice(0, F + 1) : g = [g[0]];
          break;
        }
      }
    }
  return g.reduceRight((K, O, j) => {
    let Y, H = !1, de = null, se = null;
    v && (Y = U && O.route.id ? U[O.route.id] : void 0, de = O.route.errorElement || gO, N && (F < 0 && j === 0 ? ($0("route-fallback", !1, "No `HydrateFallback` element provided to render during initial hydration"), H = !0, se = null) : F === j && (H = !0, se = O.route.hydrateFallbackElement || null)));
    let be = m.concat(g.slice(0, j + 1)), ne = () => {
      let le;
      return Y ? le = de : H ? le = se : O.route.Component ? le = /* @__PURE__ */ D.createElement(O.route.Component, null) : O.route.element ? le = O.route.element : le = K, /* @__PURE__ */ D.createElement(EO, {
        match: O,
        routeContext: {
          outlet: K,
          matches: be,
          isDataRoute: v != null
        },
        children: le
      });
    };
    return v && (O.route.ErrorBoundary || O.route.errorElement || j === 0) ? /* @__PURE__ */ D.createElement(SO, {
      location: v.location,
      revalidation: v.revalidation,
      component: de,
      error: Y,
      children: ne(),
      routeContext: {
        outlet: null,
        matches: be,
        isDataRoute: !0
      }
    }) : ne();
  }, null);
}
var V0 = /* @__PURE__ */ function(d) {
  return d.UseBlocker = "useBlocker", d.UseRevalidator = "useRevalidator", d.UseNavigateStable = "useNavigate", d;
}(V0 || {}), eo = /* @__PURE__ */ function(d) {
  return d.UseBlocker = "useBlocker", d.UseLoaderData = "useLoaderData", d.UseActionData = "useActionData", d.UseRouteError = "useRouteError", d.UseNavigation = "useNavigation", d.UseRouteLoaderData = "useRouteLoaderData", d.UseMatches = "useMatches", d.UseRevalidator = "useRevalidator", d.UseNavigateStable = "useNavigate", d.UseRouteId = "useRouteId", d;
}(eo || {});
function fC(d) {
  return d + " must be used within a data router.  See https://reactrouter.com/v6/routers/picking-a-router.";
}
function RO(d) {
  let m = D.useContext(yc);
  return m || (je.env.NODE_ENV !== "production" ? sn(!1, fC(d)) : sn(!1)), m;
}
function by(d) {
  let m = D.useContext(id);
  return m || (je.env.NODE_ENV !== "production" ? sn(!1, fC(d)) : sn(!1)), m;
}
function wO(d) {
  let m = D.useContext(au);
  return m || (je.env.NODE_ENV !== "production" ? sn(!1, fC(d)) : sn(!1)), m;
}
function Dy(d) {
  let m = wO(d), v = m.matches[m.matches.length - 1];
  return v.route.id || (je.env.NODE_ENV !== "production" ? sn(!1, d + ' can only be used on routes that contain a unique "id"') : sn(!1)), v.route.id;
}
function TO() {
  return Dy(eo.UseRouteId);
}
function xO() {
  return by(eo.UseNavigation).navigation;
}
function _O() {
  let {
    matches: d,
    loaderData: m
  } = by(eo.UseMatches);
  return D.useMemo(() => d.map((v) => qk(v, m)), [d, m]);
}
function bO() {
  let d = by(eo.UseLoaderData), m = Dy(eo.UseLoaderData);
  if (d.errors && d.errors[m] != null) {
    console.error("You cannot `useLoaderData` in an errorElement (routeId: " + m + ")");
    return;
  }
  return d.loaderData[m];
}
function B0() {
  var d;
  let m = D.useContext(sC), v = by(eo.UseRouteError), R = Dy(eo.UseRouteError);
  return m !== void 0 ? m : (d = v.errors) == null ? void 0 : d[R];
}
function DO() {
  let d = D.useContext(gv);
  return d?._data;
}
function kO() {
  let d = D.useContext(gv);
  return d?._error;
}
function OO() {
  let {
    router: d
  } = RO(V0.UseNavigateStable), m = Dy(eo.UseNavigateStable), v = D.useRef(!1);
  return j0(() => {
    v.current = !0;
  }), D.useCallback(function(w, b) {
    b === void 0 && (b = {}), je.env.NODE_ENV !== "production" && Wa(v.current, P0), v.current && (typeof w == "number" ? d.navigate(w) : d.navigate(w, Ty({
      fromRouteId: m
    }, b)));
  }, [d, m]);
}
const m0 = {};
function $0(d, m, v) {
  !m && !m0[d] && (m0[d] = !0, je.env.NODE_ENV !== "production" && Wa(!1, v));
}
const y0 = {};
function LO(d, m) {
  je.env.NODE_ENV !== "production" && !y0[m] && (y0[m] = !0, console.warn(m));
}
const ad = (d, m, v) => LO(d, "⚠️ React Router Future Flag Warning: " + m + ". " + ("You can use the `" + d + "` future flag to opt-in early. ") + ("For more information, see " + v + "."));
function NO(d, m) {
  d?.v7_startTransition === void 0 && ad("v7_startTransition", "React Router will begin wrapping state updates in `React.startTransition` in v7", "https://reactrouter.com/v6/upgrading/future#v7_starttransition"), d?.v7_relativeSplatPath === void 0 && (!m || !m.v7_relativeSplatPath) && ad("v7_relativeSplatPath", "Relative route resolution within Splat routes is changing in v7", "https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath"), m && (m.v7_fetcherPersist === void 0 && ad("v7_fetcherPersist", "The persistence behavior of fetchers is changing in v7", "https://reactrouter.com/v6/upgrading/future#v7_fetcherpersist"), m.v7_normalizeFormMethod === void 0 && ad("v7_normalizeFormMethod", "Casing of `formMethod` fields is being normalized to uppercase in v7", "https://reactrouter.com/v6/upgrading/future#v7_normalizeformmethod"), m.v7_partialHydration === void 0 && ad("v7_partialHydration", "`RouterProvider` hydration behavior is changing in v7", "https://reactrouter.com/v6/upgrading/future#v7_partialhydration"), m.v7_skipActionErrorRevalidation === void 0 && ad("v7_skipActionErrorRevalidation", "The revalidation behavior after 4xx/5xx `action` responses is changing in v7", "https://reactrouter.com/v6/upgrading/future#v7_skipactionerrorrevalidation"));
}
function pN(d) {
  return hO(d.context);
}
function MO(d) {
  let {
    basename: m = "/",
    children: v = null,
    location: R,
    navigationType: w = Kk.Pop,
    navigator: b,
    static: g = !1,
    future: U
  } = d;
  Ev() && (je.env.NODE_ENV !== "production" ? sn(!1, "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.") : sn(!1));
  let N = m.replace(/^\/*/, "/"), F = D.useMemo(() => ({
    basename: N,
    navigator: b,
    static: g,
    future: Ty({
      v7_relativeSplatPath: !1
    }, U)
  }), [N, U, b, g]);
  typeof R == "string" && (R = D0(R));
  let {
    pathname: K = "/",
    search: O = "",
    hash: j = "",
    state: Y = null,
    key: H = "default"
  } = R, de = D.useMemo(() => {
    let se = es(K, N);
    return se == null ? null : {
      location: {
        pathname: se,
        search: O,
        hash: j,
        state: Y,
        key: H
      },
      navigationType: w
    };
  }, [N, K, O, j, Y, H, w]);
  return je.env.NODE_ENV !== "production" && Wa(de != null, '<Router basename="' + N + '"> is not able to match the URL ' + ('"' + K + O + j + '" because it does not start with the ') + "basename, so the <Router> won't render anything."), de == null ? null : /* @__PURE__ */ D.createElement($i.Provider, {
    value: F
  }, /* @__PURE__ */ D.createElement(_y.Provider, {
    children: v,
    value: de
  }));
}
function UO(d) {
  let {
    children: m,
    errorElement: v,
    resolve: R
  } = d;
  return /* @__PURE__ */ D.createElement(zO, {
    resolve: R,
    errorElement: v
  }, /* @__PURE__ */ D.createElement(FO, null, m));
}
var Bi = /* @__PURE__ */ function(d) {
  return d[d.pending = 0] = "pending", d[d.success = 1] = "success", d[d.error = 2] = "error", d;
}(Bi || {});
const AO = new Promise(() => {
});
class zO extends D.Component {
  constructor(m) {
    super(m), this.state = {
      error: null
    };
  }
  static getDerivedStateFromError(m) {
    return {
      error: m
    };
  }
  componentDidCatch(m, v) {
    console.error("<Await> caught the following error during render", m, v);
  }
  render() {
    let {
      children: m,
      errorElement: v,
      resolve: R
    } = this.props, w = null, b = Bi.pending;
    if (!(R instanceof Promise))
      b = Bi.success, w = Promise.resolve(), Object.defineProperty(w, "_tracked", {
        get: () => !0
      }), Object.defineProperty(w, "_data", {
        get: () => R
      });
    else if (this.state.error) {
      b = Bi.error;
      let g = this.state.error;
      w = Promise.reject().catch(() => {
      }), Object.defineProperty(w, "_tracked", {
        get: () => !0
      }), Object.defineProperty(w, "_error", {
        get: () => g
      });
    } else R._tracked ? (w = R, b = "_error" in w ? Bi.error : "_data" in w ? Bi.success : Bi.pending) : (b = Bi.pending, Object.defineProperty(R, "_tracked", {
      get: () => !0
    }), w = R.then((g) => Object.defineProperty(R, "_data", {
      get: () => g
    }), (g) => Object.defineProperty(R, "_error", {
      get: () => g
    })));
    if (b === Bi.error && w._error instanceof k0)
      throw AO;
    if (b === Bi.error && !v)
      throw w._error;
    if (b === Bi.error)
      return /* @__PURE__ */ D.createElement(gv.Provider, {
        value: w,
        children: v
      });
    if (b === Bi.success)
      return /* @__PURE__ */ D.createElement(gv.Provider, {
        value: w,
        children: m
      });
    throw w;
  }
}
function FO(d) {
  let {
    children: m
  } = d, v = DO(), R = typeof m == "function" ? m(v) : m;
  return /* @__PURE__ */ D.createElement(D.Fragment, null, R);
}
function vN(d) {
  let m = {
    // Note: this check also occurs in createRoutesFromChildren so update
    // there if you change this -- please and thank you!
    hasErrorBoundary: d.ErrorBoundary != null || d.errorElement != null
  };
  return d.Component && (je.env.NODE_ENV !== "production" && d.element && je.env.NODE_ENV !== "production" && Wa(!1, "You should not include both `Component` and `element` on your route - `Component` will be used."), Object.assign(m, {
    element: /* @__PURE__ */ D.createElement(d.Component),
    Component: void 0
  })), d.HydrateFallback && (je.env.NODE_ENV !== "production" && d.hydrateFallbackElement && je.env.NODE_ENV !== "production" && Wa(!1, "You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used."), Object.assign(m, {
    hydrateFallbackElement: /* @__PURE__ */ D.createElement(d.HydrateFallback),
    HydrateFallback: void 0
  })), d.ErrorBoundary && (je.env.NODE_ENV !== "production" && d.errorElement && je.env.NODE_ENV !== "production" && Wa(!1, "You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used."), Object.assign(m, {
    errorElement: /* @__PURE__ */ D.createElement(d.ErrorBoundary),
    ErrorBoundary: void 0
  })), m;
}
function mc() {
  return mc = Object.assign ? Object.assign.bind() : function(d) {
    for (var m = 1; m < arguments.length; m++) {
      var v = arguments[m];
      for (var R in v)
        Object.prototype.hasOwnProperty.call(v, R) && (d[R] = v[R]);
    }
    return d;
  }, mc.apply(this, arguments);
}
function dC(d, m) {
  if (d == null) return {};
  var v = {}, R = Object.keys(d), w, b;
  for (b = 0; b < R.length; b++)
    w = R[b], !(m.indexOf(w) >= 0) && (v[w] = d[w]);
  return v;
}
const Sy = "get", Ey = "application/x-www-form-urlencoded";
function ky(d) {
  return d != null && typeof d.tagName == "string";
}
function PO(d) {
  return ky(d) && d.tagName.toLowerCase() === "button";
}
function jO(d) {
  return ky(d) && d.tagName.toLowerCase() === "form";
}
function HO(d) {
  return ky(d) && d.tagName.toLowerCase() === "input";
}
function VO(d) {
  return !!(d.metaKey || d.altKey || d.ctrlKey || d.shiftKey);
}
function BO(d, m) {
  return d.button === 0 && // Ignore everything but left clicks
  (!m || m === "_self") && // Let browser handle "target=_blank" etc.
  !VO(d);
}
function rC(d) {
  return d === void 0 && (d = ""), new URLSearchParams(typeof d == "string" || Array.isArray(d) || d instanceof URLSearchParams ? d : Object.keys(d).reduce((m, v) => {
    let R = d[v];
    return m.concat(Array.isArray(R) ? R.map((w) => [v, w]) : [[v, R]]);
  }, []));
}
function $O(d, m) {
  let v = rC(d);
  return m && m.forEach((R, w) => {
    v.has(w) || m.getAll(w).forEach((b) => {
      v.append(w, b);
    });
  }), v;
}
let vy = null;
function IO() {
  if (vy === null)
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      ), vy = !1;
    } catch {
      vy = !0;
    }
  return vy;
}
const YO = /* @__PURE__ */ new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);
function qE(d) {
  return d != null && !YO.has(d) ? (je.env.NODE_ENV !== "production" && Wa(!1, '"' + d + '" is not a valid `encType` for `<Form>`/`<fetcher.Form>` ' + ('and will default to "' + Ey + '"')), null) : d;
}
function WO(d, m) {
  let v, R, w, b, g;
  if (jO(d)) {
    let U = d.getAttribute("action");
    R = U ? es(U, m) : null, v = d.getAttribute("method") || Sy, w = qE(d.getAttribute("enctype")) || Ey, b = new FormData(d);
  } else if (PO(d) || HO(d) && (d.type === "submit" || d.type === "image")) {
    let U = d.form;
    if (U == null)
      throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
    let N = d.getAttribute("formaction") || U.getAttribute("action");
    if (R = N ? es(N, m) : null, v = d.getAttribute("formmethod") || U.getAttribute("method") || Sy, w = qE(d.getAttribute("formenctype")) || qE(U.getAttribute("enctype")) || Ey, b = new FormData(U, d), !IO()) {
      let {
        name: F,
        type: K,
        value: O
      } = d;
      if (K === "image") {
        let j = F ? F + "." : "";
        b.append(j + "x", "0"), b.append(j + "y", "0");
      } else F && b.append(F, O);
    }
  } else {
    if (ky(d))
      throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
    v = Sy, R = null, w = Ey, g = d;
  }
  return b && w === "text/plain" && (g = b, b = void 0), {
    action: R,
    method: v.toLowerCase(),
    encType: w,
    formData: b,
    body: g
  };
}
const QO = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "viewTransition"], GO = ["aria-current", "caseSensitive", "className", "end", "style", "to", "viewTransition", "children"], XO = ["fetcherKey", "navigate", "reloadDocument", "replace", "state", "method", "action", "onSubmit", "relative", "preventScrollReset", "viewTransition"], KO = "6";
try {
  window.__reactRouterVersion = KO;
} catch {
}
const pC = /* @__PURE__ */ D.createContext({
  isTransitioning: !1
});
je.env.NODE_ENV !== "production" && (pC.displayName = "ViewTransition");
const I0 = /* @__PURE__ */ D.createContext(/* @__PURE__ */ new Map());
je.env.NODE_ENV !== "production" && (I0.displayName = "Fetchers");
const qO = "startTransition", g0 = aO[qO], JO = "flushSync", S0 = dO[JO];
function ZO(d) {
  g0 ? g0(d) : d();
}
function vv(d) {
  S0 ? S0(d) : d();
}
class eL {
  constructor() {
    this.status = "pending", this.promise = new Promise((m, v) => {
      this.resolve = (R) => {
        this.status === "pending" && (this.status = "resolved", m(R));
      }, this.reject = (R) => {
        this.status === "pending" && (this.status = "rejected", v(R));
      };
    });
  }
}
function hN(d) {
  let {
    fallbackElement: m,
    router: v,
    future: R
  } = d, [w, b] = D.useState(v.state), [g, U] = D.useState(), [N, F] = D.useState({
    isTransitioning: !1
  }), [K, O] = D.useState(), [j, Y] = D.useState(), [H, de] = D.useState(), se = D.useRef(/* @__PURE__ */ new Map()), {
    v7_startTransition: be
  } = R || {}, ne = D.useCallback((Le) => {
    be ? ZO(Le) : Le();
  }, [be]), le = D.useCallback((Le, Qe) => {
    let {
      deletedFetchers: it,
      flushSync: Ct,
      viewTransitionOpts: et
    } = Qe;
    Le.fetchers.forEach((mt, ct) => {
      mt.data !== void 0 && se.current.set(ct, mt.data);
    }), it.forEach((mt) => se.current.delete(mt));
    let Be = v.window == null || v.window.document == null || typeof v.window.document.startViewTransition != "function";
    if (!et || Be) {
      Ct ? vv(() => b(Le)) : ne(() => b(Le));
      return;
    }
    if (Ct) {
      vv(() => {
        j && (K && K.resolve(), j.skipTransition()), F({
          isTransitioning: !0,
          flushSync: !0,
          currentLocation: et.currentLocation,
          nextLocation: et.nextLocation
        });
      });
      let mt = v.window.document.startViewTransition(() => {
        vv(() => b(Le));
      });
      mt.finished.finally(() => {
        vv(() => {
          O(void 0), Y(void 0), U(void 0), F({
            isTransitioning: !1
          });
        });
      }), vv(() => Y(mt));
      return;
    }
    j ? (K && K.resolve(), j.skipTransition(), de({
      state: Le,
      currentLocation: et.currentLocation,
      nextLocation: et.nextLocation
    })) : (U(Le), F({
      isTransitioning: !0,
      flushSync: !1,
      currentLocation: et.currentLocation,
      nextLocation: et.nextLocation
    }));
  }, [v.window, j, K, se, ne]);
  D.useLayoutEffect(() => v.subscribe(le), [v, le]), D.useEffect(() => {
    N.isTransitioning && !N.flushSync && O(new eL());
  }, [N]), D.useEffect(() => {
    if (K && g && v.window) {
      let Le = g, Qe = K.promise, it = v.window.document.startViewTransition(async () => {
        ne(() => b(Le)), await Qe;
      });
      it.finished.finally(() => {
        O(void 0), Y(void 0), U(void 0), F({
          isTransitioning: !1
        });
      }), Y(it);
    }
  }, [ne, g, K, v.window]), D.useEffect(() => {
    K && g && w.location.key === g.location.key && K.resolve();
  }, [K, j, w.location, g]), D.useEffect(() => {
    !N.isTransitioning && H && (U(H.state), F({
      isTransitioning: !0,
      flushSync: !1,
      currentLocation: H.currentLocation,
      nextLocation: H.nextLocation
    }), de(void 0));
  }, [N.isTransitioning, H]), D.useEffect(() => {
    je.env.NODE_ENV !== "production" && Wa(m == null || !v.future.v7_partialHydration, "`<RouterProvider fallbackElement>` is deprecated when using `v7_partialHydration`, use a `HydrateFallback` component instead");
  }, []);
  let pe = D.useMemo(() => ({
    createHref: v.createHref,
    encodeLocation: v.encodeLocation,
    go: (Le) => v.navigate(Le),
    push: (Le, Qe, it) => v.navigate(Le, {
      state: Qe,
      preventScrollReset: it?.preventScrollReset
    }),
    replace: (Le, Qe, it) => v.navigate(Le, {
      replace: !0,
      state: Qe,
      preventScrollReset: it?.preventScrollReset
    })
  }), [v]), me = v.basename || "/", ye = D.useMemo(() => ({
    router: v,
    navigator: pe,
    static: !1,
    basename: me
  }), [v, pe, me]), Se = D.useMemo(() => ({
    v7_relativeSplatPath: v.future.v7_relativeSplatPath
  }), [v.future.v7_relativeSplatPath]);
  return D.useEffect(() => NO(R, v.future), [R, v.future]), /* @__PURE__ */ D.createElement(D.Fragment, null, /* @__PURE__ */ D.createElement(yc.Provider, {
    value: ye
  }, /* @__PURE__ */ D.createElement(id.Provider, {
    value: w
  }, /* @__PURE__ */ D.createElement(I0.Provider, {
    value: se.current
  }, /* @__PURE__ */ D.createElement(pC.Provider, {
    value: N
  }, /* @__PURE__ */ D.createElement(MO, {
    basename: me,
    location: w.location,
    navigationType: w.historyAction,
    navigator: pe,
    future: Se
  }, w.initialized || v.future.v7_partialHydration ? /* @__PURE__ */ D.createElement(tL, {
    routes: v.routes,
    future: v.future,
    state: w
  }) : m))))), null);
}
const tL = /* @__PURE__ */ D.memo(nL);
function nL(d) {
  let {
    routes: m,
    future: v,
    state: R
  } = d;
  return mO(m, void 0, R, v);
}
je.env.NODE_ENV;
const rL = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", aL = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, vC = /* @__PURE__ */ D.forwardRef(function(m, v) {
  let {
    onClick: R,
    relative: w,
    reloadDocument: b,
    replace: g,
    state: U,
    target: N,
    to: F,
    preventScrollReset: K,
    viewTransition: O
  } = m, j = dC(m, QO), {
    basename: Y
  } = D.useContext($i), H, de = !1;
  if (typeof F == "string" && aL.test(F) && (H = F, rL))
    try {
      let le = new URL(window.location.href), pe = F.startsWith("//") ? new URL(le.protocol + F) : new URL(F), me = es(pe.pathname, Y);
      pe.origin === le.origin && me != null ? F = me + pe.search + pe.hash : de = !0;
    } catch {
      je.env.NODE_ENV !== "production" && Wa(!1, '<Link to="' + F + '"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.');
    }
  let se = cC(F, {
    relative: w
  }), be = lL(F, {
    replace: g,
    state: U,
    target: N,
    preventScrollReset: K,
    relative: w,
    viewTransition: O
  });
  function ne(le) {
    R && R(le), le.defaultPrevented || be(le);
  }
  return (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    /* @__PURE__ */ D.createElement("a", mc({}, j, {
      href: H || se,
      onClick: de || b ? R : ne,
      ref: v,
      target: N
    }))
  );
});
je.env.NODE_ENV !== "production" && (vC.displayName = "Link");
const Y0 = /* @__PURE__ */ D.forwardRef(function(m, v) {
  let {
    "aria-current": R = "page",
    caseSensitive: w = !1,
    className: b = "",
    end: g = !1,
    style: U,
    to: N,
    viewTransition: F,
    children: K
  } = m, O = dC(m, GO), j = Cv(N, {
    relative: O.relative
  }), Y = iu(), H = D.useContext(id), {
    navigator: de,
    basename: se
  } = D.useContext($i), be = H != null && // Conditional usage is OK here because the usage of a data router is static
  // eslint-disable-next-line react-hooks/rules-of-hooks
  pL(j) && F === !0, ne = de.encodeLocation ? de.encodeLocation(j).pathname : j.pathname, le = Y.pathname, pe = H && H.navigation && H.navigation.location ? H.navigation.location.pathname : null;
  w || (le = le.toLowerCase(), pe = pe ? pe.toLowerCase() : null, ne = ne.toLowerCase()), pe && se && (pe = es(pe, se) || pe);
  const me = ne !== "/" && ne.endsWith("/") ? ne.length - 1 : ne.length;
  let ye = le === ne || !g && le.startsWith(ne) && le.charAt(me) === "/", Se = pe != null && (pe === ne || !g && pe.startsWith(ne) && pe.charAt(ne.length) === "/"), Le = {
    isActive: ye,
    isPending: Se,
    isTransitioning: be
  }, Qe = ye ? R : void 0, it;
  typeof b == "function" ? it = b(Le) : it = [b, ye ? "active" : null, Se ? "pending" : null, be ? "transitioning" : null].filter(Boolean).join(" ");
  let Ct = typeof U == "function" ? U(Le) : U;
  return /* @__PURE__ */ D.createElement(vC, mc({}, O, {
    "aria-current": Qe,
    className: it,
    ref: v,
    style: Ct,
    to: N,
    viewTransition: F
  }), typeof K == "function" ? K(Le) : K);
});
je.env.NODE_ENV !== "production" && (Y0.displayName = "NavLink");
const W0 = /* @__PURE__ */ D.forwardRef((d, m) => {
  let {
    fetcherKey: v,
    navigate: R,
    reloadDocument: w,
    replace: b,
    state: g,
    method: U = Sy,
    action: N,
    onSubmit: F,
    relative: K,
    preventScrollReset: O,
    viewTransition: j
  } = d, Y = dC(d, XO), H = cL(), de = fL(N, {
    relative: K
  }), se = U.toLowerCase() === "get" ? "get" : "post", be = (ne) => {
    if (F && F(ne), ne.defaultPrevented) return;
    ne.preventDefault();
    let le = ne.nativeEvent.submitter, pe = le?.getAttribute("formmethod") || U;
    H(le || ne.currentTarget, {
      fetcherKey: v,
      method: pe,
      navigate: R,
      replace: b,
      state: g,
      relative: K,
      preventScrollReset: O,
      viewTransition: j
    });
  };
  return /* @__PURE__ */ D.createElement("form", mc({
    ref: m,
    method: se,
    action: de,
    onSubmit: w ? F : be
  }, Y));
});
je.env.NODE_ENV !== "production" && (W0.displayName = "Form");
je.env.NODE_ENV;
var Sv;
(function(d) {
  d.UseScrollRestoration = "useScrollRestoration", d.UseSubmit = "useSubmit", d.UseSubmitFetcher = "useSubmitFetcher", d.UseFetcher = "useFetcher", d.useViewTransitionState = "useViewTransitionState";
})(Sv || (Sv = {}));
var aC;
(function(d) {
  d.UseFetcher = "useFetcher", d.UseFetchers = "useFetchers", d.UseScrollRestoration = "useScrollRestoration";
})(aC || (aC = {}));
function Q0(d) {
  return d + " must be used within a data router.  See https://reactrouter.com/v6/routers/picking-a-router.";
}
function hC(d) {
  let m = D.useContext(yc);
  return m || (je.env.NODE_ENV !== "production" ? sn(!1, Q0(d)) : sn(!1)), m;
}
function iL(d) {
  let m = D.useContext(id);
  return m || (je.env.NODE_ENV !== "production" ? sn(!1, Q0(d)) : sn(!1)), m;
}
function lL(d, m) {
  let {
    target: v,
    replace: R,
    state: w,
    preventScrollReset: b,
    relative: g,
    viewTransition: U
  } = m === void 0 ? {} : m, N = H0(), F = iu(), K = Cv(d, {
    relative: g
  });
  return D.useCallback((O) => {
    if (BO(O, v)) {
      O.preventDefault();
      let j = R !== void 0 ? R : ZE(F) === ZE(K);
      N(d, {
        replace: j,
        state: w,
        preventScrollReset: b,
        relative: g,
        viewTransition: U
      });
    }
  }, [F, N, K, R, w, v, d, b, g, U]);
}
function mN(d) {
  je.env.NODE_ENV !== "production" && Wa(typeof URLSearchParams < "u", "You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");
  let m = D.useRef(rC(d)), v = D.useRef(!1), R = iu(), w = D.useMemo(() => (
    // Only merge in the defaults if we haven't yet called setSearchParams.
    // Once we call that we want those to take precedence, otherwise you can't
    // remove a param with setSearchParams({}) if it has an initial value
    $O(R.search, v.current ? null : m.current)
  ), [R.search]), b = H0(), g = D.useCallback((U, N) => {
    const F = rC(typeof U == "function" ? U(w) : U);
    v.current = !0, b("?" + F, N);
  }, [b, w]);
  return [w, g];
}
function uL() {
  if (typeof document > "u")
    throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.");
}
let oL = 0, sL = () => "__" + String(++oL) + "__";
function cL() {
  let {
    router: d
  } = hC(Sv.UseSubmit), {
    basename: m
  } = D.useContext($i), v = TO();
  return D.useCallback(function(R, w) {
    w === void 0 && (w = {}), uL();
    let {
      action: b,
      method: g,
      encType: U,
      formData: N,
      body: F
    } = WO(R, m);
    if (w.navigate === !1) {
      let K = w.fetcherKey || sL();
      d.fetch(K, v, w.action || b, {
        preventScrollReset: w.preventScrollReset,
        formData: N,
        body: F,
        formMethod: w.method || g,
        formEncType: w.encType || U,
        flushSync: w.flushSync
      });
    } else
      d.navigate(w.action || b, {
        preventScrollReset: w.preventScrollReset,
        formData: N,
        body: F,
        formMethod: w.method || g,
        formEncType: w.encType || U,
        replace: w.replace,
        state: w.state,
        fromRouteId: v,
        flushSync: w.flushSync,
        viewTransition: w.viewTransition
      });
  }, [d, m, v]);
}
function fL(d, m) {
  let {
    relative: v
  } = m === void 0 ? {} : m, {
    basename: R
  } = D.useContext($i), w = D.useContext(au);
  w || (je.env.NODE_ENV !== "production" ? sn(!1, "useFormAction must be used inside a RouteContext") : sn(!1));
  let [b] = w.matches.slice(-1), g = mc({}, Cv(d || ".", {
    relative: v
  })), U = iu();
  if (d == null) {
    g.search = U.search;
    let N = new URLSearchParams(g.search), F = N.getAll("index");
    if (F.some((O) => O === "")) {
      N.delete("index"), F.filter((j) => j).forEach((j) => N.append("index", j));
      let O = N.toString();
      g.search = O ? "?" + O : "";
    }
  }
  return (!d || d === ".") && b.route.index && (g.search = g.search ? g.search.replace(/^\?/, "?index&") : "?index"), R !== "/" && (g.pathname = g.pathname === "/" ? R : yv([R, g.pathname])), ZE(g);
}
const E0 = "react-router-scroll-positions";
let hy = {};
function yN(d) {
  let {
    getKey: m,
    storageKey: v
  } = d === void 0 ? {} : d, {
    router: R
  } = hC(Sv.UseScrollRestoration), {
    restoreScrollPosition: w,
    preventScrollReset: b
  } = iL(aC.UseScrollRestoration), {
    basename: g
  } = D.useContext($i), U = iu(), N = _O(), F = xO();
  D.useEffect(() => (window.history.scrollRestoration = "manual", () => {
    window.history.scrollRestoration = "auto";
  }), []), dL(D.useCallback(() => {
    if (F.state === "idle") {
      let K = (m ? m(U, N) : null) || U.key;
      hy[K] = window.scrollY;
    }
    try {
      sessionStorage.setItem(v || E0, JSON.stringify(hy));
    } catch (K) {
      je.env.NODE_ENV !== "production" && Wa(!1, "Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (" + K + ").");
    }
    window.history.scrollRestoration = "auto";
  }, [v, m, F.state, U, N])), typeof document < "u" && (D.useLayoutEffect(() => {
    try {
      let K = sessionStorage.getItem(v || E0);
      K && (hy = JSON.parse(K));
    } catch {
    }
  }, [v]), D.useLayoutEffect(() => {
    let K = m && g !== "/" ? (j, Y) => m(
      // Strip the basename to match useLocation()
      mc({}, j, {
        pathname: es(j.pathname, g) || j.pathname
      }),
      Y
    ) : m, O = R?.enableScrollRestoration(hy, () => window.scrollY, K);
    return () => O && O();
  }, [R, g, m]), D.useLayoutEffect(() => {
    if (w !== !1) {
      if (typeof w == "number") {
        window.scrollTo(0, w);
        return;
      }
      if (U.hash) {
        let K = document.getElementById(decodeURIComponent(U.hash.slice(1)));
        if (K) {
          K.scrollIntoView();
          return;
        }
      }
      b !== !0 && window.scrollTo(0, 0);
    }
  }, [U, w, b]));
}
function dL(d, m) {
  let {
    capture: v
  } = {};
  D.useEffect(() => {
    let R = v != null ? {
      capture: v
    } : void 0;
    return window.addEventListener("pagehide", d, R), () => {
      window.removeEventListener("pagehide", d, R);
    };
  }, [d, v]);
}
function pL(d, m) {
  m === void 0 && (m = {});
  let v = D.useContext(pC);
  v == null && (je.env.NODE_ENV !== "production" ? sn(!1, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?") : sn(!1));
  let {
    basename: R
  } = hC(Sv.useViewTransitionState), w = Cv(d, {
    relative: m.relative
  });
  if (!v.isTransitioning)
    return !1;
  let b = es(v.currentLocation.pathname, R) || v.currentLocation.pathname, g = es(v.nextLocation.pathname, R) || v.nextLocation.pathname;
  return l0(w.pathname, g) != null || l0(w.pathname, b) != null;
}
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
function Sr() {
  return Sr = Object.assign ? Object.assign.bind() : function(d) {
    for (var m = 1; m < arguments.length; m++) {
      var v = arguments[m];
      for (var R in v)
        Object.prototype.hasOwnProperty.call(v, R) && (d[R] = v[R]);
    }
    return d;
  }, Sr.apply(this, arguments);
}
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
function to(d, m) {
  if (d === !1 || d === null || typeof d > "u")
    throw new Error(m);
}
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
async function G0(d, m) {
  if (d.id in m)
    return m[d.id];
  try {
    let v = await import(
      /* webpackIgnore: true */
      d.module
    );
    return m[d.id] = v, v;
  } catch (v) {
    return console.error(`Error loading route module \`${d.module}\`, reloading page...`), console.error(v), window.__remixContext.isSpaMode, window.location.reload(), new Promise(() => {
    });
  }
}
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
function vL(d, m, v) {
  let R = d.map((b) => {
    var g;
    let U = m[b.route.id], N = v.routes[b.route.id];
    return [N.css ? N.css.map((F) => ({
      rel: "stylesheet",
      href: F
    })) : [], (U == null || (g = U.links) === null || g === void 0 ? void 0 : g.call(U)) || []];
  }).flat(2), w = EL(d, v);
  return K0(R, w);
}
async function X0(d, m) {
  var v, R;
  if (!d.css && !m.links || !RL()) return;
  let w = [((v = d.css) === null || v === void 0 ? void 0 : v.map((U) => ({
    rel: "stylesheet",
    href: U
  }))) ?? [], ((R = m.links) === null || R === void 0 ? void 0 : R.call(m)) ?? []].flat(1);
  if (w.length === 0) return;
  let b = [];
  for (let U of w)
    !mC(U) && U.rel === "stylesheet" && b.push({
      ...U,
      rel: "preload",
      as: "style"
    });
  let g = b.filter((U) => (!U.media || window.matchMedia(U.media).matches) && !document.querySelector(`link[rel="stylesheet"][href="${U.href}"]`));
  await Promise.all(g.map(hL));
}
async function hL(d) {
  return new Promise((m) => {
    let v = document.createElement("link");
    Object.assign(v, d);
    function R() {
      document.head.contains(v) && document.head.removeChild(v);
    }
    v.onload = () => {
      R(), m();
    }, v.onerror = () => {
      R(), m();
    }, document.head.appendChild(v);
  });
}
function mC(d) {
  return d != null && typeof d.page == "string";
}
function mL(d) {
  return d == null ? !1 : d.href == null ? d.rel === "preload" && typeof d.imageSrcSet == "string" && typeof d.imageSizes == "string" : typeof d.rel == "string" && typeof d.href == "string";
}
async function yL(d, m, v) {
  let R = await Promise.all(d.map(async (w) => {
    let b = await G0(m.routes[w.route.id], v);
    return b.links ? b.links() : [];
  }));
  return K0(R.flat(1).filter(mL).filter((w) => w.rel === "stylesheet" || w.rel === "preload").map((w) => w.rel === "stylesheet" ? {
    ...w,
    rel: "prefetch",
    as: "style"
  } : {
    ...w,
    rel: "prefetch"
  }));
}
function C0(d, m, v, R, w, b, g) {
  let U = q0(d), N = (O, j) => v[j] ? O.route.id !== v[j].route.id : !0, F = (O, j) => {
    var Y;
    return (
      // param change, /users/123 -> /users/456
      v[j].pathname !== O.pathname || // splat param changed, which is not present in match.path
      // e.g. /files/images/avatar.jpg -> files/finances.xls
      ((Y = v[j].route.path) === null || Y === void 0 ? void 0 : Y.endsWith("*")) && v[j].params["*"] !== O.params["*"]
    );
  };
  return g === "data" && (b.v3_singleFetch || w.search !== U.search) ? (
    // this is really similar to stuff in transition.ts, maybe somebody smarter
    // than me (or in less of a hurry) can share some of it. You're the best.
    m.filter((O, j) => {
      if (!R.routes[O.route.id].hasLoader)
        return !1;
      if (N(O, j) || F(O, j))
        return !0;
      let H = b.v3_singleFetch || w.search !== U.search;
      if (O.route.shouldRevalidate) {
        var de;
        let se = O.route.shouldRevalidate({
          currentUrl: new URL(w.pathname + w.search + w.hash, window.origin),
          currentParams: ((de = v[0]) === null || de === void 0 ? void 0 : de.params) || {},
          nextUrl: new URL(d, window.origin),
          nextParams: O.params,
          defaultShouldRevalidate: H
        });
        if (typeof se == "boolean")
          return se;
      }
      return H;
    })
  ) : m.filter((O, j) => {
    let Y = R.routes[O.route.id];
    return (g === "assets" || Y.hasLoader) && (N(O, j) || F(O, j));
  });
}
function gL(d, m, v) {
  let R = q0(d);
  return yC(m.filter((w) => v.routes[w.route.id].hasLoader && !v.routes[w.route.id].hasClientLoader).map((w) => {
    let {
      pathname: b,
      search: g
    } = R, U = new URLSearchParams(g);
    return U.set("_data", w.route.id), `${b}?${U}`;
  }));
}
function SL(d, m) {
  return yC(d.map((v) => {
    let R = m.routes[v.route.id], w = [R.module];
    return R.imports && (w = w.concat(R.imports)), w;
  }).flat(1));
}
function EL(d, m) {
  return yC(d.map((v) => {
    let R = m.routes[v.route.id], w = [R.module];
    return R.imports && (w = w.concat(R.imports)), w;
  }).flat(1));
}
function yC(d) {
  return [...new Set(d)];
}
function CL(d) {
  let m = {}, v = Object.keys(d).sort();
  for (let R of v)
    m[R] = d[R];
  return m;
}
function K0(d, m) {
  let v = /* @__PURE__ */ new Set(), R = new Set(m);
  return d.reduce((w, b) => {
    if (m && !mC(b) && b.as === "script" && b.href && R.has(b.href))
      return w;
    let U = JSON.stringify(CL(b));
    return v.has(U) || (v.add(U), w.push({
      key: U,
      link: b
    })), w;
  }, []);
}
function q0(d) {
  let m = D0(d);
  return m.search === void 0 && (m.search = ""), m;
}
let my;
function RL() {
  if (my !== void 0)
    return my;
  let d = document.createElement("link");
  return my = d.relList.supports("preload"), d = null, my;
}
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
const wL = {
  "&": "\\u0026",
  ">": "\\u003e",
  "<": "\\u003c",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
}, TL = /[&><\u2028\u2029]/g;
function yy(d) {
  return d.replace(TL, (m) => wL[m]);
}
function R0(d) {
  return {
    __html: d
  };
}
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
function xL(d) {
  return d.headers.get("X-Remix-Catch") != null;
}
function _L(d) {
  return d.headers.get("X-Remix-Error") != null;
}
function bL(d) {
  return gC(d) && d.status >= 400 && d.headers.get("X-Remix-Error") == null && d.headers.get("X-Remix-Catch") == null && d.headers.get("X-Remix-Response") == null;
}
function DL(d) {
  return d.headers.get("X-Remix-Redirect") != null;
}
function kL(d) {
  var m;
  return !!((m = d.headers.get("Content-Type")) !== null && m !== void 0 && m.match(/text\/remix-deferred/));
}
function gC(d) {
  return d != null && typeof d.status == "number" && typeof d.statusText == "string" && typeof d.headers == "object" && typeof d.body < "u";
}
function OL(d) {
  let m = d;
  return m && typeof m == "object" && typeof m.data == "object" && typeof m.subscribe == "function" && typeof m.cancel == "function" && typeof m.resolveData == "function";
}
async function J0(d, m, v = 0) {
  let R = new URL(d.url);
  R.searchParams.set("_data", m), v > 0 && await new Promise((U) => setTimeout(U, 5 ** v * 10));
  let w = await Oy(d), b = window.__remixRevalidation, g = await fetch(R.href, w).catch((U) => {
    if (typeof b == "number" && b === window.__remixRevalidation && U?.name === "TypeError" && v < 3)
      return J0(d, m, v + 1);
    throw U;
  });
  if (_L(g)) {
    let U = await g.json(), N = new Error(U.message);
    return N.stack = U.stack, N;
  }
  if (bL(g)) {
    let U = await g.text(), N = new Error(U);
    return N.stack = void 0, N;
  }
  return g;
}
async function Oy(d) {
  let m = {
    signal: d.signal
  };
  if (d.method !== "GET") {
    m.method = d.method;
    let v = d.headers.get("Content-Type");
    v && /\bapplication\/json\b/.test(v) ? (m.headers = {
      "Content-Type": v
    }, m.body = JSON.stringify(await d.json())) : v && /\btext\/plain\b/.test(v) ? (m.headers = {
      "Content-Type": v
    }, m.body = await d.text()) : v && /\bapplication\/x-www-form-urlencoded\b/.test(v) ? m.body = new URLSearchParams(await d.text()) : m.body = await d.formData();
  }
  return m;
}
const LL = "__deferred_promise:";
async function NL(d) {
  if (!d)
    throw new Error("parseDeferredReadableStream requires stream argument");
  let m, v = {};
  try {
    let R = ML(d), b = (await R.next()).value;
    if (!b) throw new Error("no critical data");
    let g = JSON.parse(b);
    if (typeof g == "object" && g !== null)
      for (let [U, N] of Object.entries(g))
        typeof N != "string" || !N.startsWith(LL) || (m = m || {}, m[U] = new Promise((F, K) => {
          v[U] = {
            resolve: (O) => {
              F(O), delete v[U];
            },
            reject: (O) => {
              K(O), delete v[U];
            }
          };
        }));
    return (async () => {
      try {
        for await (let U of R) {
          let [N, ...F] = U.split(":"), K = F.join(":"), O = JSON.parse(K);
          if (N === "data")
            for (let [j, Y] of Object.entries(O))
              v[j] && v[j].resolve(Y);
          else if (N === "error")
            for (let [j, Y] of Object.entries(O)) {
              let H = new Error(Y.message);
              H.stack = Y.stack, v[j] && v[j].reject(H);
            }
        }
        for (let [U, N] of Object.entries(v))
          N.reject(new k0(`Deferred ${U} will never be resolved`));
      } catch (U) {
        for (let N of Object.values(v))
          N.reject(U);
      }
    })(), new Jk({
      ...g,
      ...m
    });
  } catch (R) {
    for (let w of Object.values(v))
      w.reject(R);
    throw R;
  }
}
async function* ML(d) {
  let m = d.getReader(), v = [], R = [], w = !1, b = new TextEncoder(), g = new TextDecoder(), U = async () => {
    if (R.length > 0) return R.shift();
    for (; !w && R.length === 0; ) {
      let F = await m.read();
      if (F.done) {
        w = !0;
        break;
      }
      v.push(F.value);
      try {
        let O = g.decode(w0(...v)).split(`

`);
        if (O.length >= 2 && (R.push(...O.slice(0, -1)), v = [b.encode(O.slice(-1).join(`

`))]), R.length > 0)
          break;
      } catch {
        continue;
      }
    }
    return R.length > 0 || v.length > 0 && (R = g.decode(w0(...v)).split(`

`).filter((K) => K), v = []), R.shift();
  }, N = await U();
  for (; N; )
    yield N, N = await U();
}
function w0(...d) {
  let m = new Uint8Array(d.reduce((R, w) => R + w.length, 0)), v = 0;
  for (let R of d)
    m.set(R, v), v += R.length;
  return m;
}
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
function gN(d, m, v) {
  return async ({
    request: R,
    matches: w,
    fetcherKey: b
  }) => R.method !== "GET" ? UL(R, w) : b ? zL(R, w) : AL(d, m, v(), R, w);
}
async function UL(d, m) {
  let v = m.find((b) => b.shouldLoad);
  to(v, "No action match found");
  let R, w = await v.resolve(async (b) => await b(async () => {
    let U = Ly(d.url), N = await Oy(d), {
      data: F,
      status: K
    } = await SC(U, N);
    return R = K, iC(F, v.route.id);
  }));
  return gC(w.result) || oC(w.result) ? {
    [v.route.id]: w
  } : {
    [v.route.id]: {
      type: w.type,
      result: eO(w.result, R)
    }
  };
}
async function AL(d, m, v, R, w) {
  let b = /* @__PURE__ */ new Set(), g = !1, U = w.map(() => T0()), N = Promise.all(U.map((H) => H.promise)), F = T0(), K = ex(Ly(R.url)), O = await Oy(R), j = {}, Y = Promise.all(w.map(async (H, de) => H.resolve(async (se) => {
    if (U[de].resolve(), !H.shouldLoad) {
      var be;
      if (!v.state.initialized)
        return;
      if (H.route.id in v.state.loaderData && d.routes[H.route.id].hasLoader && (be = m[H.route.id]) !== null && be !== void 0 && be.shouldRevalidate) {
        g = !0;
        return;
      }
    }
    if (d.routes[H.route.id].hasClientLoader) {
      d.routes[H.route.id].hasLoader && (g = !0);
      try {
        let ne = await Z0(se, K, O, H.route.id);
        j[H.route.id] = {
          type: "data",
          result: ne
        };
      } catch (ne) {
        j[H.route.id] = {
          type: "error",
          result: ne
        };
      }
      return;
    }
    d.routes[H.route.id].hasLoader && b.add(H.route.id);
    try {
      let ne = await se(async () => {
        let le = await F.promise;
        return tx(le, H.route.id);
      });
      j[H.route.id] = {
        type: "data",
        result: ne
      };
    } catch (ne) {
      j[H.route.id] = {
        type: "error",
        result: ne
      };
    }
  })));
  if (await N, (!v.state.initialized || b.size === 0) && !window.__remixHdrActive)
    F.resolve({});
  else
    try {
      g && b.size > 0 && K.searchParams.set("_routes", w.filter((de) => b.has(de.route.id)).map((de) => de.route.id).join(","));
      let H = await SC(K, O);
      F.resolve(H.data);
    } catch (H) {
      F.reject(H);
    }
  return await Y, j;
}
async function zL(d, m) {
  let v = m.find((w) => w.shouldLoad);
  to(v, "No fetcher match found");
  let R = await v.resolve(async (w) => {
    let b = ex(Ly(d.url)), g = await Oy(d);
    return Z0(w, b, g, v.route.id);
  });
  return {
    [v.route.id]: R
  };
}
function Z0(d, m, v, R) {
  return d(async () => {
    let w = new URL(m);
    w.searchParams.set("_routes", R);
    let {
      data: b
    } = await SC(w, v);
    return tx(b, R);
  });
}
function ex(d) {
  let m = d.searchParams.getAll("index");
  d.searchParams.delete("index");
  let v = [];
  for (let R of m)
    R && v.push(R);
  for (let R of v)
    d.searchParams.append("index", R);
  return d;
}
function Ly(d) {
  let m = typeof d == "string" ? new URL(d, window.location.origin) : d;
  return m.pathname === "/" ? m.pathname = "_root.data" : m.pathname = `${m.pathname.replace(/\/$/, "")}.data`, m;
}
async function SC(d, m) {
  let v = await fetch(d, m);
  if ((/* @__PURE__ */ new Set([100, 101, 204, 205])).has(v.status))
    return !m.method || m.method === "GET" ? {
      status: v.status,
      data: {}
    } : {
      status: v.status,
      data: {
        data: null
      }
    };
  to(v.body, "No response body to decode");
  try {
    let w = await FL(v.body, window);
    return {
      status: v.status,
      data: w.value
    };
  } catch (w) {
    throw console.error(w), new Error(`Unable to decode turbo-stream response from URL: ${d.toString()}`);
  }
}
function FL(d, m) {
  return Zk(d, {
    plugins: [(v, ...R) => {
      if (v === "SanitizedError") {
        let [w, b, g] = R, U = Error;
        w && w in m && typeof m[w] == "function" && (U = m[w]);
        let N = new U(b);
        return N.stack = g, {
          value: N
        };
      }
      if (v === "ErrorResponse") {
        let [w, b, g] = R;
        return {
          value: new wy(b, g, w)
        };
      }
      if (v === "SingleFetchRedirect")
        return {
          value: {
            [M0]: R[0]
          }
        };
    }, (v, R) => {
      if (v === "SingleFetchFallback")
        return {
          value: void 0
        };
      if (v === "SingleFetchClassInstance")
        return {
          value: R
        };
    }]
  });
}
function tx(d, m) {
  let v = d[M0];
  return v ? iC(v, m) : d[m] !== void 0 ? iC(d[m], m) : null;
}
function iC(d, m) {
  if ("error" in d)
    throw d.error;
  if ("redirect" in d) {
    let v = {};
    throw d.revalidate && (v["X-Remix-Revalidate"] = "yes"), d.reload && (v["X-Remix-Reload-Document"] = "yes"), d.replace && (v["X-Remix-Replace"] = "yes"), N0(d.redirect, {
      status: d.status,
      headers: v
    });
  } else {
    if ("data" in d)
      return d.data;
    throw new Error(`No response found for routeId "${m}"`);
  }
}
function T0() {
  let d, m, v = new Promise((R, w) => {
    d = async (b) => {
      R(b);
      try {
        await v;
      } catch {
      }
    }, m = async (b) => {
      w(b);
      try {
        await v;
      } catch {
      }
    };
  });
  return {
    promise: v,
    //@ts-ignore
    resolve: d,
    //@ts-ignore
    reject: m
  };
}
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
class SN extends D.Component {
  constructor(m) {
    super(m), this.state = {
      error: m.error || null,
      location: m.location
    };
  }
  static getDerivedStateFromError(m) {
    return {
      error: m
    };
  }
  static getDerivedStateFromProps(m, v) {
    return v.location !== m.location ? {
      error: m.error || null,
      location: m.location
    } : {
      error: m.error || v.error,
      location: v.location
    };
  }
  render() {
    return this.state.error ? /* @__PURE__ */ D.createElement(nx, {
      error: this.state.error,
      isOutsideRemixApp: !0
    }) : this.props.children;
  }
}
function nx({
  error: d,
  isOutsideRemixApp: m
}) {
  console.error(d);
  let v = /* @__PURE__ */ D.createElement("script", {
    dangerouslySetInnerHTML: {
      __html: `
        console.log(
          "💿 Hey developer 👋. You can provide a way better UX than this when your app throws errors. Check out https://remix.run/guides/errors for more information."
        );
      `
    }
  });
  if (oC(d))
    return /* @__PURE__ */ D.createElement(lC, {
      title: "Unhandled Thrown Response!"
    }, /* @__PURE__ */ D.createElement("h1", {
      style: {
        fontSize: "24px"
      }
    }, d.status, " ", d.statusText), v);
  let R;
  if (d instanceof Error)
    R = d;
  else {
    let w = d == null ? "Unknown Error" : typeof d == "object" && "toString" in d ? d.toString() : JSON.stringify(d);
    R = new Error(w);
  }
  return /* @__PURE__ */ D.createElement(lC, {
    title: "Application Error!",
    isOutsideRemixApp: m
  }, /* @__PURE__ */ D.createElement("h1", {
    style: {
      fontSize: "24px"
    }
  }, "Application Error"), /* @__PURE__ */ D.createElement("pre", {
    style: {
      padding: "2rem",
      background: "hsla(10, 50%, 50%, 0.1)",
      color: "red",
      overflow: "auto"
    }
  }, R.stack), v);
}
function lC({
  title: d,
  renderScripts: m,
  isOutsideRemixApp: v,
  children: R
}) {
  var w;
  let {
    routeModules: b
  } = ld();
  return (w = b.root) !== null && w !== void 0 && w.Layout && !v ? R : /* @__PURE__ */ D.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ D.createElement("head", null, /* @__PURE__ */ D.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ D.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1,viewport-fit=cover"
  }), /* @__PURE__ */ D.createElement("title", null, d)), /* @__PURE__ */ D.createElement("body", null, /* @__PURE__ */ D.createElement("main", {
    style: {
      fontFamily: "system-ui, sans-serif",
      padding: "2rem"
    }
  }, R, m ? /* @__PURE__ */ D.createElement(iN, null) : null)));
}
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
function PL() {
  return /* @__PURE__ */ D.createElement(lC, {
    title: "Loading...",
    renderScripts: !0
  }, /* @__PURE__ */ D.createElement("script", {
    dangerouslySetInnerHTML: {
      __html: `
              console.log(
                "💿 Hey developer 👋. You can provide a way better UX than this " +
                "when your app is loading JS modules and/or running \`clientLoader\` " +
                "functions. Check out https://remix.run/route/hydrate-fallback " +
                "for more information."
              );
            `
    }
  }));
}
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
function rx(d) {
  let m = {};
  return Object.values(d).forEach((v) => {
    let R = v.parentId || "";
    m[R] || (m[R] = []), m[R].push(v);
  }), m;
}
function jL(d, m, v) {
  let R = ax(m), w = m.HydrateFallback && (!v || d.id === "root") ? m.HydrateFallback : d.id === "root" ? PL : void 0, b = m.ErrorBoundary ? m.ErrorBoundary : d.id === "root" ? () => /* @__PURE__ */ D.createElement(nx, {
    error: B0()
  }) : void 0;
  return d.id === "root" && m.Layout ? {
    ...R ? {
      element: /* @__PURE__ */ D.createElement(m.Layout, null, /* @__PURE__ */ D.createElement(R, null))
    } : {
      Component: R
    },
    ...b ? {
      errorElement: /* @__PURE__ */ D.createElement(m.Layout, null, /* @__PURE__ */ D.createElement(b, null))
    } : {
      ErrorBoundary: b
    },
    ...w ? {
      hydrateFallbackElement: /* @__PURE__ */ D.createElement(m.Layout, null, /* @__PURE__ */ D.createElement(w, null))
    } : {
      HydrateFallback: w
    }
  } : {
    Component: R,
    ErrorBoundary: b,
    HydrateFallback: w
  };
}
function EN(d, m, v, R, w, b) {
  return EC(m, v, R, w, b, "", rx(m), d);
}
function gy(d, m, v) {
  if (v) {
    let g = `You cannot call ${d === "action" ? "serverAction()" : "serverLoader()"} in SPA Mode (routeId: "${m.id}")`;
    throw console.error(g), new wy(400, "Bad Request", new Error(g), !0);
  }
  let w = `You are trying to call ${d === "action" ? "serverAction()" : "serverLoader()"} on a route that does not have a server ${d} (routeId: "${m.id}")`;
  if (d === "loader" && !m.hasLoader || d === "action" && !m.hasAction)
    throw console.error(w), new wy(400, "Bad Request", new Error(w), !0);
}
function JE(d, m) {
  let v = d === "clientAction" ? "a" : "an", R = `Route "${m}" does not have ${v} ${d}, but you are trying to submit to it. To fix this, please add ${v} \`${d}\` function to the route`;
  throw console.error(R), new wy(405, "Method Not Allowed", new Error(R), !0);
}
function EC(d, m, v, R, w, b = "", g = rx(d), U) {
  return (g[b] || []).map((N) => {
    let F = m[N.id];
    async function K(le, pe, me) {
      if (typeof me == "function")
        return await me();
      let ye = await BL(le, N);
      return pe ? $L(ye) : ye;
    }
    function O(le, pe, me) {
      return N.hasLoader ? K(le, pe, me) : Promise.resolve(null);
    }
    function j(le, pe, me) {
      if (!N.hasAction)
        throw JE("action", N.id);
      return K(le, pe, me);
    }
    async function Y(le) {
      let pe = m[N.id], me = pe ? X0(N, pe) : Promise.resolve();
      try {
        return le();
      } finally {
        await me;
      }
    }
    let H = {
      id: N.id,
      index: N.index,
      path: N.path
    };
    if (F) {
      var de, se, be;
      Object.assign(H, {
        ...H,
        ...jL(N, F, w),
        handle: F.handle,
        shouldRevalidate: x0(R, F, N.id, U)
      });
      let le = v == null || (de = v.loaderData) === null || de === void 0 ? void 0 : de[N.id], pe = v == null || (se = v.errors) === null || se === void 0 ? void 0 : se[N.id], me = U == null && (((be = F.clientLoader) === null || be === void 0 ? void 0 : be.hydrate) === !0 || !N.hasLoader);
      H.loader = async ({
        request: ye,
        params: Se
      }, Le) => {
        try {
          return await Y(async () => (to(F, "No `routeModule` available for critical-route loader"), F.clientLoader ? F.clientLoader({
            request: ye,
            params: Se,
            async serverLoader() {
              if (gy("loader", N, w), me) {
                if (le !== void 0)
                  return le;
                if (pe !== void 0)
                  throw pe;
                return null;
              }
              return O(ye, !0, Le);
            }
          }) : w ? null : O(ye, !1, Le)));
        } finally {
          me = !1;
        }
      }, H.loader.hydrate = YL(N, F, w), H.action = ({
        request: ye,
        params: Se
      }, Le) => Y(async () => {
        if (to(F, "No `routeModule` available for critical-route action"), !F.clientAction) {
          if (w)
            throw JE("clientAction", N.id);
          return j(ye, !1, Le);
        }
        return F.clientAction({
          request: ye,
          params: Se,
          async serverAction() {
            return gy("action", N, w), j(ye, !0, Le);
          }
        });
      });
    } else
      N.hasClientLoader || (H.loader = ({
        request: le
      }, pe) => Y(() => w ? Promise.resolve(null) : O(le, !1, pe))), N.hasClientAction || (H.action = ({
        request: le
      }, pe) => Y(() => {
        if (w)
          throw JE("clientAction", N.id);
        return j(le, !1, pe);
      })), H.lazy = async () => {
        let le = await VL(N, m), pe = {
          ...le
        };
        if (le.clientLoader) {
          let me = le.clientLoader;
          pe.loader = (ye, Se) => me({
            ...ye,
            async serverLoader() {
              return gy("loader", N, w), O(ye.request, !0, Se);
            }
          });
        }
        if (le.clientAction) {
          let me = le.clientAction;
          pe.action = (ye, Se) => me({
            ...ye,
            async serverAction() {
              return gy("action", N, w), j(ye.request, !0, Se);
            }
          });
        }
        return {
          ...pe.loader ? {
            loader: pe.loader
          } : {},
          ...pe.action ? {
            action: pe.action
          } : {},
          hasErrorBoundary: pe.hasErrorBoundary,
          shouldRevalidate: x0(R, pe, N.id, U),
          handle: pe.handle,
          // No need to wrap these in layout since the root route is never
          // loaded via route.lazy()
          Component: pe.Component,
          ErrorBoundary: pe.ErrorBoundary
        };
      };
    let ne = EC(d, m, v, R, w, N.id, g, U);
    return ne.length > 0 && (H.children = ne), H;
  });
}
function x0(d, m, v, R) {
  if (R)
    return HL(v, m.shouldRevalidate, R);
  if (d.v3_singleFetch && m.shouldRevalidate) {
    let w = m.shouldRevalidate;
    return (b) => w({
      ...b,
      defaultShouldRevalidate: !0
    });
  }
  return m.shouldRevalidate;
}
function HL(d, m, v) {
  let R = !1;
  return (w) => R ? m ? m(w) : w.defaultShouldRevalidate : (R = !0, v.has(d));
}
async function VL(d, m) {
  let v = await G0(d, m);
  return await X0(d, v), {
    Component: ax(v),
    ErrorBoundary: v.ErrorBoundary,
    clientAction: v.clientAction,
    clientLoader: v.clientLoader,
    handle: v.handle,
    links: v.links,
    meta: v.meta,
    shouldRevalidate: v.shouldRevalidate
  };
}
async function BL(d, m) {
  let v = await J0(d, m.id);
  if (v instanceof Error)
    throw v;
  if (DL(v))
    throw IL(v);
  if (xL(v))
    throw v;
  return kL(v) && v.body ? await NL(v.body) : v;
}
function $L(d) {
  if (OL(d))
    return d.data;
  if (gC(d)) {
    let m = d.headers.get("Content-Type");
    return m && /\bapplication\/json\b/.test(m) ? d.json() : d.text();
  }
  return d;
}
function IL(d) {
  let m = parseInt(d.headers.get("X-Remix-Status"), 10) || 302, v = d.headers.get("X-Remix-Redirect"), R = {}, w = d.headers.get("X-Remix-Revalidate");
  w && (R["X-Remix-Revalidate"] = w);
  let b = d.headers.get("X-Remix-Reload-Document");
  b && (R["X-Remix-Reload-Document"] = b);
  let g = d.headers.get("X-Remix-Replace");
  return g && (R["X-Remix-Replace"] = g), N0(v, {
    status: m,
    headers: R
  });
}
function ax(d) {
  if (d.default == null) return;
  if (!(typeof d.default == "object" && Object.keys(d.default).length === 0))
    return d.default;
}
function YL(d, m, v) {
  return v && d.id !== "root" || m.clientLoader != null && (m.clientLoader.hydrate === !0 || d.hasLoader !== !0);
}
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
const Cy = /* @__PURE__ */ new Set(), WL = 1e3, xy = /* @__PURE__ */ new Set(), QL = 7680;
function CC(d, m) {
  return d.v3_lazyRouteDiscovery === !0 && !m;
}
function GL(d, m) {
  let v = new Set(m.state.matches.map((g) => g.route.id)), R = m.state.location.pathname.split("/").filter(Boolean), w = ["/"];
  for (R.pop(); R.length > 0; )
    w.push(`/${R.join("/")}`), R.pop();
  w.forEach((g) => {
    let U = uC(m.routes, g, m.basename);
    U && U.forEach((N) => v.add(N.route.id));
  });
  let b = [...v].reduce((g, U) => Object.assign(g, {
    [U]: d.routes[U]
  }), {});
  return {
    ...d,
    routes: b
  };
}
function CN(d, m, v, R, w) {
  if (CC(v, R))
    return async ({
      path: b,
      patch: g,
      signal: U
    }) => {
      xy.has(b) || await ix([b], d, m, v, R, w, g, U);
    };
}
function RN(d, m, v, R, w) {
  D.useEffect(() => {
    var b;
    if (!CC(R, w) || ((b = navigator.connection) === null || b === void 0 ? void 0 : b.saveData) === !0)
      return;
    function g(O) {
      let j = O.tagName === "FORM" ? O.getAttribute("action") : O.getAttribute("href");
      if (!j)
        return;
      let Y = new URL(j, window.location.origin);
      xy.has(Y.pathname) || Cy.add(Y.pathname);
    }
    async function U() {
      let O = Array.from(Cy.keys()).filter((j) => xy.has(j) ? (Cy.delete(j), !1) : !0);
      if (O.length !== 0)
        try {
          await ix(O, m, v, R, w, d.basename, d.patchRoutes);
        } catch (j) {
          console.error("Failed to fetch manifest patches", j);
        }
    }
    document.body.querySelectorAll("a[data-discover], form[data-discover]").forEach((O) => g(O)), U();
    let N = KL(U, 100);
    function F(O) {
      return O.nodeType === Node.ELEMENT_NODE;
    }
    let K = new MutationObserver((O) => {
      let j = /* @__PURE__ */ new Set();
      O.forEach((Y) => {
        [Y.target, ...Y.addedNodes].forEach((H) => {
          F(H) && ((H.tagName === "A" && H.getAttribute("data-discover") || H.tagName === "FORM" && H.getAttribute("data-discover")) && j.add(H), H.tagName !== "A" && H.querySelectorAll("a[data-discover], form[data-discover]").forEach((de) => j.add(de)));
        });
      }), j.forEach((Y) => g(Y)), N();
    });
    return K.observe(document.documentElement, {
      subtree: !0,
      childList: !0,
      attributes: !0,
      attributeFilter: ["data-discover", "href", "action"]
    }), () => K.disconnect();
  }, [R, w, m, v, d]);
}
async function ix(d, m, v, R, w, b, g, U) {
  let N = `${b ?? "/"}/__manifest`.replace(/\/+/g, "/"), F = new URL(N, window.location.origin);
  if (d.sort().forEach((H) => F.searchParams.append("p", H)), F.searchParams.set("version", m.version), F.toString().length > QL) {
    Cy.clear();
    return;
  }
  let K;
  try {
    let H = await fetch(F, {
      signal: U
    });
    if (H.ok) {
      if (H.status >= 400)
        throw new Error(await H.text());
    } else throw new Error(`${H.status} ${H.statusText}`);
    K = await H.json();
  } catch (H) {
    if (U != null && U.aborted) return;
    throw H;
  }
  let O = new Set(Object.keys(m.routes)), j = Object.values(K).reduce((H, de) => O.has(de.id) ? H : Object.assign(H, {
    [de.id]: de
  }), {});
  Object.assign(m.routes, j), d.forEach((H) => XL(H, xy));
  let Y = /* @__PURE__ */ new Set();
  Object.values(j).forEach((H) => {
    (!H.parentId || !j[H.parentId]) && Y.add(H.parentId);
  }), Y.forEach((H) => g(H || null, EC(j, v, null, R, w, H)));
}
function XL(d, m) {
  if (m.size >= WL) {
    let v = m.values().next().value;
    typeof v == "string" && m.delete(v);
  }
  m.add(d);
}
function KL(d, m) {
  let v;
  return (...R) => {
    window.clearTimeout(v), v = window.setTimeout(() => d(...R), m);
  };
}
const qL = {};
function lx() {
  let d = D.useContext(yc);
  return to(d, "You must render this element inside a <DataRouterContext.Provider> element"), d;
}
function Ny() {
  let d = D.useContext(id);
  return to(d, "You must render this element inside a <DataRouterStateContext.Provider> element"), d;
}
const ux = /* @__PURE__ */ D.createContext(void 0);
ux.displayName = "Remix";
function ld() {
  let d = D.useContext(ux);
  return to(d, "You must render this element inside a <Remix> element"), d;
}
function ox(d, m) {
  let [v, R] = D.useState(!1), [w, b] = D.useState(!1), {
    onFocus: g,
    onBlur: U,
    onMouseEnter: N,
    onMouseLeave: F,
    onTouchStart: K
  } = m, O = D.useRef(null);
  D.useEffect(() => {
    if (d === "render" && b(!0), d === "viewport") {
      let H = (se) => {
        se.forEach((be) => {
          b(be.isIntersecting);
        });
      }, de = new IntersectionObserver(H, {
        threshold: 0.5
      });
      return O.current && de.observe(O.current), () => {
        de.disconnect();
      };
    }
  }, [d]);
  let j = () => {
    d === "intent" && R(!0);
  }, Y = () => {
    d === "intent" && (R(!1), b(!1));
  };
  return D.useEffect(() => {
    if (v) {
      let H = setTimeout(() => {
        b(!0);
      }, 100);
      return () => {
        clearTimeout(H);
      };
    }
  }, [v]), [w, O, {
    onFocus: hv(g, j),
    onBlur: hv(U, Y),
    onMouseEnter: hv(N, j),
    onMouseLeave: hv(F, Y),
    onTouchStart: hv(K, j)
  }];
}
const RC = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
function wC(d, m, v) {
  return d === "render" && !m && !v ? "true" : void 0;
}
let JL = /* @__PURE__ */ D.forwardRef(({
  to: d,
  prefetch: m = "none",
  discover: v = "render",
  ...R
}, w) => {
  let b = typeof d == "string" && RC.test(d), g = cC(d), [U, N, F] = ox(m, R);
  return /* @__PURE__ */ D.createElement(D.Fragment, null, /* @__PURE__ */ D.createElement(Y0, Sr({}, R, F, {
    ref: sx(w, N),
    to: d,
    "data-discover": wC(v, b, R.reloadDocument)
  })), U && !b ? /* @__PURE__ */ D.createElement(xC, {
    page: g
  }) : null);
});
JL.displayName = "NavLink";
let ZL = /* @__PURE__ */ D.forwardRef(({
  to: d,
  prefetch: m = "none",
  discover: v = "render",
  ...R
}, w) => {
  let b = typeof d == "string" && RC.test(d), g = cC(d), [U, N, F] = ox(m, R);
  return /* @__PURE__ */ D.createElement(D.Fragment, null, /* @__PURE__ */ D.createElement(vC, Sr({}, R, F, {
    ref: sx(w, N),
    to: d,
    "data-discover": wC(v, b, R.reloadDocument)
  })), U && !b ? /* @__PURE__ */ D.createElement(xC, {
    page: g
  }) : null);
});
ZL.displayName = "Link";
let eN = /* @__PURE__ */ D.forwardRef(({
  discover: d = "render",
  ...m
}, v) => {
  let R = typeof m.action == "string" && RC.test(m.action);
  return /* @__PURE__ */ D.createElement(W0, Sr({}, m, {
    ref: v,
    "data-discover": wC(d, R, m.reloadDocument)
  }));
});
eN.displayName = "Form";
function hv(d, m) {
  return (v) => {
    d && d(v), v.defaultPrevented || m(v);
  };
}
function TC(d, m, v) {
  if (v && !Ry)
    return [d[0]];
  if (m) {
    let R = d.findIndex((w) => m[w.route.id] !== void 0);
    return d.slice(0, R + 1);
  }
  return d;
}
function wN() {
  let {
    isSpaMode: d,
    manifest: m,
    routeModules: v,
    criticalCss: R
  } = ld(), {
    errors: w,
    matches: b
  } = Ny(), g = TC(b, w, d), U = D.useMemo(() => vL(g, v, m), [g, v, m]);
  return /* @__PURE__ */ D.createElement(D.Fragment, null, R ? /* @__PURE__ */ D.createElement("style", {
    dangerouslySetInnerHTML: {
      __html: R
    }
  }) : null, U.map(({
    key: N,
    link: F
  }) => mC(F) ? /* @__PURE__ */ D.createElement(xC, Sr({
    key: N
  }, F)) : /* @__PURE__ */ D.createElement("link", Sr({
    key: N
  }, F))));
}
function xC({
  page: d,
  ...m
}) {
  let {
    router: v
  } = lx(), R = D.useMemo(() => uC(v.routes, d, v.basename), [v.routes, d, v.basename]);
  return R ? /* @__PURE__ */ D.createElement(nN, Sr({
    page: d,
    matches: R
  }, m)) : (console.warn(`Tried to prefetch ${d} but no routes matched.`), null);
}
function tN(d) {
  let {
    manifest: m,
    routeModules: v
  } = ld(), [R, w] = D.useState([]);
  return D.useEffect(() => {
    let b = !1;
    return yL(d, m, v).then((g) => {
      b || w(g);
    }), () => {
      b = !0;
    };
  }, [d, m, v]), R;
}
function nN({
  page: d,
  matches: m,
  ...v
}) {
  let R = iu(), {
    future: w,
    manifest: b,
    routeModules: g
  } = ld(), {
    loaderData: U,
    matches: N
  } = Ny(), F = D.useMemo(() => C0(d, m, N, b, R, w, "data"), [d, m, N, b, R, w]), K = D.useMemo(() => {
    if (!w.v3_singleFetch)
      return gL(d, F, b);
    if (d === R.pathname + R.search + R.hash)
      return [];
    let H = /* @__PURE__ */ new Set(), de = !1;
    if (m.forEach((be) => {
      var ne;
      b.routes[be.route.id].hasLoader && (!F.some((le) => le.route.id === be.route.id) && be.route.id in U && (ne = g[be.route.id]) !== null && ne !== void 0 && ne.shouldRevalidate || b.routes[be.route.id].hasClientLoader ? de = !0 : H.add(be.route.id));
    }), H.size === 0)
      return [];
    let se = Ly(d);
    return de && H.size > 0 && se.searchParams.set("_routes", m.filter((be) => H.has(be.route.id)).map((be) => be.route.id).join(",")), [se.pathname + se.search];
  }, [w.v3_singleFetch, U, R, b, F, m, d, g]), O = D.useMemo(() => C0(d, m, N, b, R, w, "assets"), [d, m, N, b, R, w]), j = D.useMemo(() => SL(O, b), [O, b]), Y = tN(O);
  return /* @__PURE__ */ D.createElement(D.Fragment, null, K.map((H) => /* @__PURE__ */ D.createElement("link", Sr({
    key: H,
    rel: "prefetch",
    as: "fetch",
    href: H
  }, v))), j.map((H) => /* @__PURE__ */ D.createElement("link", Sr({
    key: H,
    rel: "modulepreload",
    href: H
  }, v))), Y.map(({
    key: H,
    link: de
  }) => (
    // these don't spread `linkProps` because they are full link descriptors
    // already with their own props
    /* @__PURE__ */ D.createElement("link", Sr({
      key: H
    }, de))
  )));
}
function TN() {
  let {
    isSpaMode: d,
    routeModules: m
  } = ld(), {
    errors: v,
    matches: R,
    loaderData: w
  } = Ny(), b = iu(), g = TC(R, v, d), U = null;
  v && (U = v[g[g.length - 1].route.id]);
  let N = [], F = null, K = [];
  for (let O = 0; O < g.length; O++) {
    let j = g[O], Y = j.route.id, H = w[Y], de = j.params, se = m[Y], be = [], ne = {
      id: Y,
      data: H,
      meta: [],
      params: j.params,
      pathname: j.pathname,
      handle: j.route.handle,
      error: U
    };
    if (K[O] = ne, se != null && se.meta ? be = typeof se.meta == "function" ? se.meta({
      data: H,
      params: de,
      location: b,
      matches: K,
      error: U
    }) : Array.isArray(se.meta) ? [...se.meta] : se.meta : F && (be = [...F]), be = be || [], !Array.isArray(be))
      throw new Error("The route at " + j.route.path + ` returns an invalid value. All route meta functions must return an array of meta objects.

To reference the meta function API, see https://remix.run/route/meta`);
    ne.meta = be, K[O] = ne, N = [...be], F = N;
  }
  return /* @__PURE__ */ D.createElement(D.Fragment, null, N.flat().map((O) => {
    if (!O)
      return null;
    if ("tagName" in O) {
      let {
        tagName: j,
        ...Y
      } = O;
      if (!rN(j))
        return console.warn(`A meta object uses an invalid tagName: ${j}. Expected either 'link' or 'meta'`), null;
      let H = j;
      return /* @__PURE__ */ D.createElement(H, Sr({
        key: JSON.stringify(Y)
      }, Y));
    }
    if ("title" in O)
      return /* @__PURE__ */ D.createElement("title", {
        key: "title"
      }, String(O.title));
    if ("charset" in O && (O.charSet ??= O.charset, delete O.charset), "charSet" in O && O.charSet != null)
      return typeof O.charSet == "string" ? /* @__PURE__ */ D.createElement("meta", {
        key: "charSet",
        charSet: O.charSet
      }) : null;
    if ("script:ld+json" in O)
      try {
        let j = JSON.stringify(O["script:ld+json"]);
        return /* @__PURE__ */ D.createElement("script", {
          key: `script:ld+json:${j}`,
          type: "application/ld+json",
          dangerouslySetInnerHTML: {
            __html: j
          }
        });
      } catch {
        return null;
      }
    return /* @__PURE__ */ D.createElement("meta", Sr({
      key: JSON.stringify(O)
    }, O));
  }));
}
function rN(d) {
  return typeof d == "string" && /^(meta|link)$/.test(d);
}
function aN(d) {
  return /* @__PURE__ */ D.createElement(UO, d);
}
let Ry = !1;
function iN(d) {
  let {
    manifest: m,
    serverHandoffString: v,
    abortDelay: R,
    serializeError: w,
    isSpaMode: b,
    future: g,
    renderMeta: U
  } = ld(), {
    router: N,
    static: F,
    staticContext: K
  } = lx(), {
    matches: O
  } = Ny(), j = CC(g, b);
  U && (U.didRenderScripts = !0);
  let Y = TC(O, null, b);
  D.useEffect(() => {
    Ry = !0;
  }, []);
  let H = (ye, Se) => {
    let Le;
    return w && Se instanceof Error ? Le = w(Se) : Le = Se, `${JSON.stringify(ye)}:__remixContext.p(!1, ${yy(JSON.stringify(Le))})`;
  }, de = (ye, Se, Le) => {
    let Qe;
    try {
      Qe = JSON.stringify(Le);
    } catch (it) {
      return H(Se, it);
    }
    return `${JSON.stringify(Se)}:__remixContext.p(${yy(Qe)})`;
  }, se = (ye, Se, Le) => {
    let Qe;
    return w && Le instanceof Error ? Qe = w(Le) : Qe = Le, `__remixContext.r(${JSON.stringify(ye)}, ${JSON.stringify(Se)}, !1, ${yy(JSON.stringify(Qe))})`;
  }, be = (ye, Se, Le) => {
    let Qe;
    try {
      Qe = JSON.stringify(Le);
    } catch (it) {
      return se(ye, Se, it);
    }
    return `__remixContext.r(${JSON.stringify(ye)}, ${JSON.stringify(Se)}, ${yy(Qe)})`;
  }, ne = [], le = D.useMemo(() => {
    var ye;
    let Se = g.v3_singleFetch ? (
      // prettier-ignore
      "window.__remixContext.stream = new ReadableStream({start(controller){window.__remixContext.streamController = controller;}}).pipeThrough(new TextEncoderStream());"
    ) : "", Le = K ? `window.__remixContext = ${v};${Se}` : " ", Qe = g.v3_singleFetch ? void 0 : K?.activeDeferreds;
    Le += Qe ? ["__remixContext.p = function(v,e,p,x) {", "  if (typeof e !== 'undefined') {", je.env.NODE_ENV === "development" ? `    x=new Error(e.message);
    x.stack=e.stack;` : `    x=new Error("Unexpected Server Error");
    x.stack=undefined;`, "    p=Promise.reject(x);", "  } else {", "    p=Promise.resolve(v);", "  }", "  return p;", "};", "__remixContext.n = function(i,k) {", "  __remixContext.t = __remixContext.t || {};", "  __remixContext.t[i] = __remixContext.t[i] || {};", "  let p = new Promise((r, e) => {__remixContext.t[i][k] = {r:(v)=>{r(v);},e:(v)=>{e(v);}};});", typeof R == "number" ? `setTimeout(() => {if(typeof p._error !== "undefined" || typeof p._data !== "undefined"){return;} __remixContext.t[i][k].e(new Error("Server timeout."))}, ${R});` : "", "  return p;", "};", "__remixContext.r = function(i,k,v,e,p,x) {", "  p = __remixContext.t[i][k];", "  if (typeof e !== 'undefined') {", je.env.NODE_ENV === "development" ? `    x=new Error(e.message);
    x.stack=e.stack;` : `    x=new Error("Unexpected Server Error");
    x.stack=undefined;`, "    p.e(x);", "  } else {", "    p.r(v);", "  }", "};"].join(`
`) + Object.entries(Qe).map(([Ct, et]) => {
      let Be = new Set(et.pendingKeys), mt = et.deferredKeys.map((ct) => {
        if (Be.has(ct))
          return ne.push(/* @__PURE__ */ D.createElement(_0, {
            key: `${Ct} | ${ct}`,
            deferredData: et,
            routeId: Ct,
            dataKey: ct,
            scriptProps: d,
            serializeData: be,
            serializeError: se
          })), `${JSON.stringify(ct)}:__remixContext.n(${JSON.stringify(Ct)}, ${JSON.stringify(ct)})`;
        {
          let kt = et.data[ct];
          return typeof kt._error < "u" ? H(ct, kt._error) : de(Ct, ct, kt._data);
        }
      }).join(`,
`);
      return `Object.assign(__remixContext.state.loaderData[${JSON.stringify(Ct)}], {${mt}});`;
    }).join(`
`) + (ne.length > 0 ? `__remixContext.a=${ne.length};` : "") : "";
    let it = F ? `${(ye = m.hmr) !== null && ye !== void 0 && ye.runtime ? `import ${JSON.stringify(m.hmr.runtime)};` : ""}${j ? "" : `import ${JSON.stringify(m.url)}`};
${Y.map((Ct, et) => `import * as route${et} from ${JSON.stringify(m.routes[Ct.route.id].module)};`).join(`
`)}
${j ? (
      // Inline a minimal manifest with the SSR matches
      `window.__remixManifest = ${JSON.stringify(GL(m, N), null, 2)};`
    ) : ""}
window.__remixRouteModules = {${Y.map((Ct, et) => `${JSON.stringify(Ct.route.id)}:route${et}`).join(",")}};

import(${JSON.stringify(m.entry.module)});` : " ";
    return /* @__PURE__ */ D.createElement(D.Fragment, null, /* @__PURE__ */ D.createElement("script", Sr({}, d, {
      suppressHydrationWarning: !0,
      dangerouslySetInnerHTML: R0(Le),
      type: void 0
    })), /* @__PURE__ */ D.createElement("script", Sr({}, d, {
      suppressHydrationWarning: !0,
      dangerouslySetInnerHTML: R0(it),
      type: "module",
      async: !0
    })));
  }, []);
  if (!F && typeof __remixContext == "object" && __remixContext.a)
    for (let ye = 0; ye < __remixContext.a; ye++)
      ne.push(/* @__PURE__ */ D.createElement(_0, {
        key: ye,
        scriptProps: d,
        serializeData: be,
        serializeError: se
      }));
  let pe = Y.map((ye) => {
    let Se = m.routes[ye.route.id];
    return (Se.imports || []).concat([Se.module]);
  }).flat(1), me = Ry ? [] : m.entry.imports.concat(pe);
  return Ry ? null : /* @__PURE__ */ D.createElement(D.Fragment, null, j ? null : /* @__PURE__ */ D.createElement("link", {
    rel: "modulepreload",
    href: m.url,
    crossOrigin: d.crossOrigin
  }), /* @__PURE__ */ D.createElement("link", {
    rel: "modulepreload",
    href: m.entry.module,
    crossOrigin: d.crossOrigin
  }), uN(me).map((ye) => /* @__PURE__ */ D.createElement("link", {
    key: ye,
    rel: "modulepreload",
    href: ye,
    crossOrigin: d.crossOrigin
  })), le, ne);
}
function _0({
  dataKey: d,
  deferredData: m,
  routeId: v,
  scriptProps: R,
  serializeData: w,
  serializeError: b
}) {
  return typeof document > "u" && m && d && v && to(m.pendingKeys.includes(d), `Deferred data for route ${v} with key ${d} was not pending but tried to render a script for it.`), /* @__PURE__ */ D.createElement(D.Suspense, {
    fallback: (
      // This makes absolutely no sense. The server renders null as a fallback,
      // but when hydrating, we need to render a script tag to avoid a hydration issue.
      // To reproduce a hydration mismatch, just render null as a fallback.
      typeof document > "u" && m && d && v ? null : /* @__PURE__ */ D.createElement("script", Sr({}, R, {
        async: !0,
        suppressHydrationWarning: !0,
        dangerouslySetInnerHTML: {
          __html: " "
        }
      }))
    )
  }, typeof document > "u" && m && d && v ? /* @__PURE__ */ D.createElement(aN, {
    resolve: m.data[d],
    errorElement: /* @__PURE__ */ D.createElement(lN, {
      dataKey: d,
      routeId: v,
      scriptProps: R,
      serializeError: b
    }),
    children: (g) => /* @__PURE__ */ D.createElement("script", Sr({}, R, {
      async: !0,
      suppressHydrationWarning: !0,
      dangerouslySetInnerHTML: {
        __html: w(v, d, g)
      }
    }))
  }) : /* @__PURE__ */ D.createElement("script", Sr({}, R, {
    async: !0,
    suppressHydrationWarning: !0,
    dangerouslySetInnerHTML: {
      __html: " "
    }
  })));
}
function lN({
  dataKey: d,
  routeId: m,
  scriptProps: v,
  serializeError: R
}) {
  let w = kO();
  return /* @__PURE__ */ D.createElement("script", Sr({}, v, {
    suppressHydrationWarning: !0,
    dangerouslySetInnerHTML: {
      __html: R(m, d, w)
    }
  }));
}
function uN(d) {
  return [...new Set(d)];
}
function xN() {
  return bO();
}
// Dead Code Elimination magic for production builds.
// This way devs don't have to worry about doing the NODE_ENV check themselves.
je.env.NODE_ENV;
function sx(...d) {
  return (m) => {
    d.forEach((v) => {
      typeof v == "function" ? v(m) : v != null && (v.current = m);
    });
  };
}
export {
  wN as L,
  TN as M,
  pN as O,
  ux as R,
  iN as S,
  Sr as _,
  gN as a,
  EN as b,
  EC as c,
  FL as d,
  RN as e,
  SN as f,
  CN as g,
  hN as h,
  to as i,
  dN as j,
  F0 as k,
  mN as l,
  vN as m,
  ld as n,
  iu as o,
  _O as p,
  yN as q,
  D as r,
  YL as s,
  rO as t,
  xN as u,
  aO as v,
  fO as w,
  H0 as x
};
