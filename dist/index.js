var A2 = Object.defineProperty;
var C2 = (e, t, r) => t in e ? A2(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var G = (e, t, r) => (C2(e, typeof t != "symbol" ? t + "" : t, r), r);
import { defineComponent as he, computed as M, openBlock as I, createElementBlock as W, normalizeClass as Ae, normalizeStyle as Ne, renderSlot as xe, reactive as Ce, ref as ce, watch as pe, onMounted as ot, onUnmounted as Et, toRefs as S2, h as pi, watchEffect as hx, provide as zi, inject as Dl, unref as Y, createBlock as $e, resolveDynamicComponent as px, normalizeProps as Eo, mergeProps as Rn, withKeys as Rd, createVNode as ae, withCtx as de, createCommentVNode as ve, withDirectives as vx, createElementVNode as oe, toDisplayString as ke, nextTick as nn, Fragment as Be, renderList as et, toRef as to, resolveComponent as ue, Transition as gx, createTextVNode as kr, isRef as ua, withModifiers as qf, guardReactiveProps as k2, resolveDirective as O2, toHandlers as F2, useSlots as T2, useAttrs as M2, getCurrentInstance as Iu, warn as P2, shallowRef as Gf, onScopeDispose as B2, effectScope as I2, toRaw as R2, onBeforeUnmount as N2, TransitionGroup as L2 } from "vue";
import { StyleString as Va, JobsQueue as El, Debounce as Al, Resource as j2, ElementListenerGroup as Kf, text as Ya, Event as mt, flow as pn, Exception as z2, element as Hi, Breakpoint as Ao, LocalStorage as mx, pick as Co, Loader as xx, Hook as yx, Ticker as bx, Cache as _x, I18n as H2, Interaction as V2, record as So, array as Y2, calc as W2, json as ro, detect as U2 } from "power-helper";
import { useIntersectionObserver as wx, useResizeObserver as q2 } from "@vueuse/core";
const G2 = /* @__PURE__ */ he({
  __name: "ani",
  props: {
    mode: {
      type: String,
      required: !0
    },
    delay: {
      type: String,
      required: !1,
      default: () => {
      }
    },
    duration: {
      type: String,
      required: !1,
      default: () => {
      }
    },
    repeat: {
      type: String,
      required: !1,
      default: () => {
      }
    }
  },
  setup(e) {
    const t = e, r = M(() => {
      let i = new Va();
      return t.delay && i.set("animationDelay", t.delay), t.duration === "super-faster" && i.set("animationDuration", ".25s"), i.join();
    }), n = M(() => {
      let i = ["animate__animated", `animate__${t.mode}`];
      return t.duration && t.duration !== "super-faster" && i.push(`animate__${t.duration}`), t.repeat && i.push(`animate__repeat-${t.repeat}`), i.join(" ");
    });
    return (i, a) => (I(), W("div", {
      class: Ae(n.value),
      style: Ne(r.value)
    }, [
      xe(i.$slots, "default")
    ], 6));
  }
});
var St = "top", qt = "bottom", Gt = "right", kt = "left", Zf = "auto", us = [St, qt, Gt, kt], Di = "start", Wa = "end", K2 = "clippingParents", $x = "viewport", fa = "popper", Z2 = "reference", Nd = /* @__PURE__ */ us.reduce(function(e, t) {
  return e.concat([t + "-" + Di, t + "-" + Wa]);
}, []), Dx = /* @__PURE__ */ [].concat(us, [Zf]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Di, t + "-" + Wa]);
}, []), X2 = "beforeRead", J2 = "read", Q2 = "afterRead", ew = "beforeMain", tw = "main", rw = "afterMain", nw = "beforeWrite", iw = "write", aw = "afterWrite", sw = [X2, J2, Q2, ew, tw, rw, nw, iw, aw];
function gr(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Rt(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Nn(e) {
  var t = Rt(e).Element;
  return e instanceof t || e instanceof Element;
}
function Yt(e) {
  var t = Rt(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Xf(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = Rt(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function ow(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(r) {
    var n = t.styles[r] || {}, i = t.attributes[r] || {}, a = t.elements[r];
    !Yt(a) || !gr(a) || (Object.assign(a.style, n), Object.keys(i).forEach(function(s) {
      var o = i[s];
      o === !1 ? a.removeAttribute(s) : a.setAttribute(s, o === !0 ? "" : o);
    }));
  });
}
function lw(e) {
  var t = e.state, r = {
    popper: {
      position: t.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(t.elements.popper.style, r.popper), t.styles = r, t.elements.arrow && Object.assign(t.elements.arrow.style, r.arrow), function() {
    Object.keys(t.elements).forEach(function(n) {
      var i = t.elements[n], a = t.attributes[n] || {}, s = Object.keys(t.styles.hasOwnProperty(n) ? t.styles[n] : r[n]), o = s.reduce(function(l, c) {
        return l[c] = "", l;
      }, {});
      !Yt(i) || !gr(i) || (Object.assign(i.style, o), Object.keys(a).forEach(function(l) {
        i.removeAttribute(l);
      }));
    });
  };
}
const cw = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: ow,
  effect: lw,
  requires: ["computeStyles"]
};
function vr(e) {
  return e.split("-")[0];
}
var Mn = Math.max, ko = Math.min, Ei = Math.round;
function Ru() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Ex() {
  return !/^((?!chrome|android).)*safari/i.test(Ru());
}
function Ai(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  var n = e.getBoundingClientRect(), i = 1, a = 1;
  t && Yt(e) && (i = e.offsetWidth > 0 && Ei(n.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && Ei(n.height) / e.offsetHeight || 1);
  var s = Nn(e) ? Rt(e) : window, o = s.visualViewport, l = !Ex() && r, c = (n.left + (l && o ? o.offsetLeft : 0)) / i, u = (n.top + (l && o ? o.offsetTop : 0)) / a, f = n.width / i, d = n.height / a;
  return {
    width: f,
    height: d,
    top: u,
    right: c + f,
    bottom: u + d,
    left: c,
    x: c,
    y: u
  };
}
function Jf(e) {
  var t = Ai(e), r = e.offsetWidth, n = e.offsetHeight;
  return Math.abs(t.width - r) <= 1 && (r = t.width), Math.abs(t.height - n) <= 1 && (n = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: n
  };
}
function Ax(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (r && Xf(r)) {
    var n = t;
    do {
      if (n && e.isSameNode(n))
        return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function Pr(e) {
  return Rt(e).getComputedStyle(e);
}
function uw(e) {
  return ["table", "td", "th"].indexOf(gr(e)) >= 0;
}
function vn(e) {
  return ((Nn(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function Cl(e) {
  return gr(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Xf(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    vn(e)
  );
}
function Ld(e) {
  return !Yt(e) || // https://github.com/popperjs/popper-core/issues/837
  Pr(e).position === "fixed" ? null : e.offsetParent;
}
function fw(e) {
  var t = /firefox/i.test(Ru()), r = /Trident/i.test(Ru());
  if (r && Yt(e)) {
    var n = Pr(e);
    if (n.position === "fixed")
      return null;
  }
  var i = Cl(e);
  for (Xf(i) && (i = i.host); Yt(i) && ["html", "body"].indexOf(gr(i)) < 0; ) {
    var a = Pr(i);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function fs(e) {
  for (var t = Rt(e), r = Ld(e); r && uw(r) && Pr(r).position === "static"; )
    r = Ld(r);
  return r && (gr(r) === "html" || gr(r) === "body" && Pr(r).position === "static") ? t : r || fw(e) || t;
}
function Qf(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Fa(e, t, r) {
  return Mn(e, ko(t, r));
}
function dw(e, t, r) {
  var n = Fa(e, t, r);
  return n > r ? r : n;
}
function Cx() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Sx(e) {
  return Object.assign({}, Cx(), e);
}
function kx(e, t) {
  return t.reduce(function(r, n) {
    return r[n] = e, r;
  }, {});
}
var hw = function(t, r) {
  return t = typeof t == "function" ? t(Object.assign({}, r.rects, {
    placement: r.placement
  })) : t, Sx(typeof t != "number" ? t : kx(t, us));
};
function pw(e) {
  var t, r = e.state, n = e.name, i = e.options, a = r.elements.arrow, s = r.modifiersData.popperOffsets, o = vr(r.placement), l = Qf(o), c = [kt, Gt].indexOf(o) >= 0, u = c ? "height" : "width";
  if (!(!a || !s)) {
    var f = hw(i.padding, r), d = Jf(a), h = l === "y" ? St : kt, p = l === "y" ? qt : Gt, v = r.rects.reference[u] + r.rects.reference[l] - s[l] - r.rects.popper[u], g = s[l] - r.rects.reference[l], m = fs(a), y = m ? l === "y" ? m.clientHeight || 0 : m.clientWidth || 0 : 0, _ = v / 2 - g / 2, x = f[h], b = y - d[u] - f[p], w = y / 2 - d[u] / 2 + _, E = Fa(x, w, b), $ = l;
    r.modifiersData[n] = (t = {}, t[$] = E, t.centerOffset = E - w, t);
  }
}
function vw(e) {
  var t = e.state, r = e.options, n = r.element, i = n === void 0 ? "[data-popper-arrow]" : n;
  i != null && (typeof i == "string" && (i = t.elements.popper.querySelector(i), !i) || Ax(t.elements.popper, i) && (t.elements.arrow = i));
}
const gw = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: pw,
  effect: vw,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Ci(e) {
  return e.split("-")[1];
}
var mw = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function xw(e, t) {
  var r = e.x, n = e.y, i = t.devicePixelRatio || 1;
  return {
    x: Ei(r * i) / i || 0,
    y: Ei(n * i) / i || 0
  };
}
function jd(e) {
  var t, r = e.popper, n = e.popperRect, i = e.placement, a = e.variation, s = e.offsets, o = e.position, l = e.gpuAcceleration, c = e.adaptive, u = e.roundOffsets, f = e.isFixed, d = s.x, h = d === void 0 ? 0 : d, p = s.y, v = p === void 0 ? 0 : p, g = typeof u == "function" ? u({
    x: h,
    y: v
  }) : {
    x: h,
    y: v
  };
  h = g.x, v = g.y;
  var m = s.hasOwnProperty("x"), y = s.hasOwnProperty("y"), _ = kt, x = St, b = window;
  if (c) {
    var w = fs(r), E = "clientHeight", $ = "clientWidth";
    if (w === Rt(r) && (w = vn(r), Pr(w).position !== "static" && o === "absolute" && (E = "scrollHeight", $ = "scrollWidth")), w = w, i === St || (i === kt || i === Gt) && a === Wa) {
      x = qt;
      var C = f && w === b && b.visualViewport ? b.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        w[E]
      );
      v -= C - n.height, v *= l ? 1 : -1;
    }
    if (i === kt || (i === St || i === qt) && a === Wa) {
      _ = Gt;
      var D = f && w === b && b.visualViewport ? b.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        w[$]
      );
      h -= D - n.width, h *= l ? 1 : -1;
    }
  }
  var A = Object.assign({
    position: o
  }, c && mw), S = u === !0 ? xw({
    x: h,
    y: v
  }, Rt(r)) : {
    x: h,
    y: v
  };
  if (h = S.x, v = S.y, l) {
    var k;
    return Object.assign({}, A, (k = {}, k[x] = y ? "0" : "", k[_] = m ? "0" : "", k.transform = (b.devicePixelRatio || 1) <= 1 ? "translate(" + h + "px, " + v + "px)" : "translate3d(" + h + "px, " + v + "px, 0)", k));
  }
  return Object.assign({}, A, (t = {}, t[x] = y ? v + "px" : "", t[_] = m ? h + "px" : "", t.transform = "", t));
}
function yw(e) {
  var t = e.state, r = e.options, n = r.gpuAcceleration, i = n === void 0 ? !0 : n, a = r.adaptive, s = a === void 0 ? !0 : a, o = r.roundOffsets, l = o === void 0 ? !0 : o, c = {
    placement: vr(t.placement),
    variation: Ci(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: i,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, jd(Object.assign({}, c, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: s,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, jd(Object.assign({}, c, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const bw = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: yw,
  data: {}
};
var Cs = {
  passive: !0
};
function _w(e) {
  var t = e.state, r = e.instance, n = e.options, i = n.scroll, a = i === void 0 ? !0 : i, s = n.resize, o = s === void 0 ? !0 : s, l = Rt(t.elements.popper), c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && c.forEach(function(u) {
    u.addEventListener("scroll", r.update, Cs);
  }), o && l.addEventListener("resize", r.update, Cs), function() {
    a && c.forEach(function(u) {
      u.removeEventListener("scroll", r.update, Cs);
    }), o && l.removeEventListener("resize", r.update, Cs);
  };
}
const ww = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: _w,
  data: {}
};
var $w = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function no(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return $w[t];
  });
}
var Dw = {
  start: "end",
  end: "start"
};
function zd(e) {
  return e.replace(/start|end/g, function(t) {
    return Dw[t];
  });
}
function e0(e) {
  var t = Rt(e), r = t.pageXOffset, n = t.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: n
  };
}
function t0(e) {
  return Ai(vn(e)).left + e0(e).scrollLeft;
}
function Ew(e, t) {
  var r = Rt(e), n = vn(e), i = r.visualViewport, a = n.clientWidth, s = n.clientHeight, o = 0, l = 0;
  if (i) {
    a = i.width, s = i.height;
    var c = Ex();
    (c || !c && t === "fixed") && (o = i.offsetLeft, l = i.offsetTop);
  }
  return {
    width: a,
    height: s,
    x: o + t0(e),
    y: l
  };
}
function Aw(e) {
  var t, r = vn(e), n = e0(e), i = (t = e.ownerDocument) == null ? void 0 : t.body, a = Mn(r.scrollWidth, r.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), s = Mn(r.scrollHeight, r.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), o = -n.scrollLeft + t0(e), l = -n.scrollTop;
  return Pr(i || r).direction === "rtl" && (o += Mn(r.clientWidth, i ? i.clientWidth : 0) - a), {
    width: a,
    height: s,
    x: o,
    y: l
  };
}
function r0(e) {
  var t = Pr(e), r = t.overflow, n = t.overflowX, i = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + i + n);
}
function Ox(e) {
  return ["html", "body", "#document"].indexOf(gr(e)) >= 0 ? e.ownerDocument.body : Yt(e) && r0(e) ? e : Ox(Cl(e));
}
function Ta(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = Ox(e), i = n === ((r = e.ownerDocument) == null ? void 0 : r.body), a = Rt(n), s = i ? [a].concat(a.visualViewport || [], r0(n) ? n : []) : n, o = t.concat(s);
  return i ? o : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    o.concat(Ta(Cl(s)))
  );
}
function Nu(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function Cw(e, t) {
  var r = Ai(e, !1, t === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function Hd(e, t, r) {
  return t === $x ? Nu(Ew(e, r)) : Nn(t) ? Cw(t, r) : Nu(Aw(vn(e)));
}
function Sw(e) {
  var t = Ta(Cl(e)), r = ["absolute", "fixed"].indexOf(Pr(e).position) >= 0, n = r && Yt(e) ? fs(e) : e;
  return Nn(n) ? t.filter(function(i) {
    return Nn(i) && Ax(i, n) && gr(i) !== "body";
  }) : [];
}
function kw(e, t, r, n) {
  var i = t === "clippingParents" ? Sw(e) : [].concat(t), a = [].concat(i, [r]), s = a[0], o = a.reduce(function(l, c) {
    var u = Hd(e, c, n);
    return l.top = Mn(u.top, l.top), l.right = ko(u.right, l.right), l.bottom = ko(u.bottom, l.bottom), l.left = Mn(u.left, l.left), l;
  }, Hd(e, s, n));
  return o.width = o.right - o.left, o.height = o.bottom - o.top, o.x = o.left, o.y = o.top, o;
}
function Fx(e) {
  var t = e.reference, r = e.element, n = e.placement, i = n ? vr(n) : null, a = n ? Ci(n) : null, s = t.x + t.width / 2 - r.width / 2, o = t.y + t.height / 2 - r.height / 2, l;
  switch (i) {
    case St:
      l = {
        x: s,
        y: t.y - r.height
      };
      break;
    case qt:
      l = {
        x: s,
        y: t.y + t.height
      };
      break;
    case Gt:
      l = {
        x: t.x + t.width,
        y: o
      };
      break;
    case kt:
      l = {
        x: t.x - r.width,
        y: o
      };
      break;
    default:
      l = {
        x: t.x,
        y: t.y
      };
  }
  var c = i ? Qf(i) : null;
  if (c != null) {
    var u = c === "y" ? "height" : "width";
    switch (a) {
      case Di:
        l[c] = l[c] - (t[u] / 2 - r[u] / 2);
        break;
      case Wa:
        l[c] = l[c] + (t[u] / 2 - r[u] / 2);
        break;
    }
  }
  return l;
}
function Ua(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, i = n === void 0 ? e.placement : n, a = r.strategy, s = a === void 0 ? e.strategy : a, o = r.boundary, l = o === void 0 ? K2 : o, c = r.rootBoundary, u = c === void 0 ? $x : c, f = r.elementContext, d = f === void 0 ? fa : f, h = r.altBoundary, p = h === void 0 ? !1 : h, v = r.padding, g = v === void 0 ? 0 : v, m = Sx(typeof g != "number" ? g : kx(g, us)), y = d === fa ? Z2 : fa, _ = e.rects.popper, x = e.elements[p ? y : d], b = kw(Nn(x) ? x : x.contextElement || vn(e.elements.popper), l, u, s), w = Ai(e.elements.reference), E = Fx({
    reference: w,
    element: _,
    strategy: "absolute",
    placement: i
  }), $ = Nu(Object.assign({}, _, E)), C = d === fa ? $ : w, D = {
    top: b.top - C.top + m.top,
    bottom: C.bottom - b.bottom + m.bottom,
    left: b.left - C.left + m.left,
    right: C.right - b.right + m.right
  }, A = e.modifiersData.offset;
  if (d === fa && A) {
    var S = A[i];
    Object.keys(D).forEach(function(k) {
      var j = [Gt, qt].indexOf(k) >= 0 ? 1 : -1, P = [St, qt].indexOf(k) >= 0 ? "y" : "x";
      D[k] += S[P] * j;
    });
  }
  return D;
}
function Ow(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, i = r.boundary, a = r.rootBoundary, s = r.padding, o = r.flipVariations, l = r.allowedAutoPlacements, c = l === void 0 ? Dx : l, u = Ci(n), f = u ? o ? Nd : Nd.filter(function(p) {
    return Ci(p) === u;
  }) : us, d = f.filter(function(p) {
    return c.indexOf(p) >= 0;
  });
  d.length === 0 && (d = f);
  var h = d.reduce(function(p, v) {
    return p[v] = Ua(e, {
      placement: v,
      boundary: i,
      rootBoundary: a,
      padding: s
    })[vr(v)], p;
  }, {});
  return Object.keys(h).sort(function(p, v) {
    return h[p] - h[v];
  });
}
function Fw(e) {
  if (vr(e) === Zf)
    return [];
  var t = no(e);
  return [zd(e), t, zd(t)];
}
function Tw(e) {
  var t = e.state, r = e.options, n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (var i = r.mainAxis, a = i === void 0 ? !0 : i, s = r.altAxis, o = s === void 0 ? !0 : s, l = r.fallbackPlacements, c = r.padding, u = r.boundary, f = r.rootBoundary, d = r.altBoundary, h = r.flipVariations, p = h === void 0 ? !0 : h, v = r.allowedAutoPlacements, g = t.options.placement, m = vr(g), y = m === g, _ = l || (y || !p ? [no(g)] : Fw(g)), x = [g].concat(_).reduce(function(F, te) {
      return F.concat(vr(te) === Zf ? Ow(t, {
        placement: te,
        boundary: u,
        rootBoundary: f,
        padding: c,
        flipVariations: p,
        allowedAutoPlacements: v
      }) : te);
    }, []), b = t.rects.reference, w = t.rects.popper, E = /* @__PURE__ */ new Map(), $ = !0, C = x[0], D = 0; D < x.length; D++) {
      var A = x[D], S = vr(A), k = Ci(A) === Di, j = [St, qt].indexOf(S) >= 0, P = j ? "width" : "height", H = Ua(t, {
        placement: A,
        boundary: u,
        rootBoundary: f,
        altBoundary: d,
        padding: c
      }), K = j ? k ? Gt : kt : k ? qt : St;
      b[P] > w[P] && (K = no(K));
      var X = no(K), Z = [];
      if (a && Z.push(H[S] <= 0), o && Z.push(H[K] <= 0, H[X] <= 0), Z.every(function(F) {
        return F;
      })) {
        C = A, $ = !1;
        break;
      }
      E.set(A, Z);
    }
    if ($)
      for (var B = p ? 3 : 1, T = function(te) {
        var J = x.find(function(be) {
          var ee = E.get(be);
          if (ee)
            return ee.slice(0, te).every(function(_e) {
              return _e;
            });
        });
        if (J)
          return C = J, "break";
      }, R = B; R > 0; R--) {
        var N = T(R);
        if (N === "break")
          break;
      }
    t.placement !== C && (t.modifiersData[n]._skip = !0, t.placement = C, t.reset = !0);
  }
}
const Mw = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Tw,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Vd(e, t, r) {
  return r === void 0 && (r = {
    x: 0,
    y: 0
  }), {
    top: e.top - t.height - r.y,
    right: e.right - t.width + r.x,
    bottom: e.bottom - t.height + r.y,
    left: e.left - t.width - r.x
  };
}
function Yd(e) {
  return [St, Gt, qt, kt].some(function(t) {
    return e[t] >= 0;
  });
}
function Pw(e) {
  var t = e.state, r = e.name, n = t.rects.reference, i = t.rects.popper, a = t.modifiersData.preventOverflow, s = Ua(t, {
    elementContext: "reference"
  }), o = Ua(t, {
    altBoundary: !0
  }), l = Vd(s, n), c = Vd(o, i, a), u = Yd(l), f = Yd(c);
  t.modifiersData[r] = {
    referenceClippingOffsets: l,
    popperEscapeOffsets: c,
    isReferenceHidden: u,
    hasPopperEscaped: f
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": u,
    "data-popper-escaped": f
  });
}
const Bw = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: Pw
};
function Iw(e, t, r) {
  var n = vr(e), i = [kt, St].indexOf(n) >= 0 ? -1 : 1, a = typeof r == "function" ? r(Object.assign({}, t, {
    placement: e
  })) : r, s = a[0], o = a[1];
  return s = s || 0, o = (o || 0) * i, [kt, Gt].indexOf(n) >= 0 ? {
    x: o,
    y: s
  } : {
    x: s,
    y: o
  };
}
function Rw(e) {
  var t = e.state, r = e.options, n = e.name, i = r.offset, a = i === void 0 ? [0, 0] : i, s = Dx.reduce(function(u, f) {
    return u[f] = Iw(f, t.rects, a), u;
  }, {}), o = s[t.placement], l = o.x, c = o.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += c), t.modifiersData[n] = s;
}
const Nw = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Rw
};
function Lw(e) {
  var t = e.state, r = e.name;
  t.modifiersData[r] = Fx({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const jw = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Lw,
  data: {}
};
function zw(e) {
  return e === "x" ? "y" : "x";
}
function Hw(e) {
  var t = e.state, r = e.options, n = e.name, i = r.mainAxis, a = i === void 0 ? !0 : i, s = r.altAxis, o = s === void 0 ? !1 : s, l = r.boundary, c = r.rootBoundary, u = r.altBoundary, f = r.padding, d = r.tether, h = d === void 0 ? !0 : d, p = r.tetherOffset, v = p === void 0 ? 0 : p, g = Ua(t, {
    boundary: l,
    rootBoundary: c,
    padding: f,
    altBoundary: u
  }), m = vr(t.placement), y = Ci(t.placement), _ = !y, x = Qf(m), b = zw(x), w = t.modifiersData.popperOffsets, E = t.rects.reference, $ = t.rects.popper, C = typeof v == "function" ? v(Object.assign({}, t.rects, {
    placement: t.placement
  })) : v, D = typeof C == "number" ? {
    mainAxis: C,
    altAxis: C
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, C), A = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, S = {
    x: 0,
    y: 0
  };
  if (w) {
    if (a) {
      var k, j = x === "y" ? St : kt, P = x === "y" ? qt : Gt, H = x === "y" ? "height" : "width", K = w[x], X = K + g[j], Z = K - g[P], B = h ? -$[H] / 2 : 0, T = y === Di ? E[H] : $[H], R = y === Di ? -$[H] : -E[H], N = t.elements.arrow, F = h && N ? Jf(N) : {
        width: 0,
        height: 0
      }, te = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Cx(), J = te[j], be = te[P], ee = Fa(0, E[H], F[H]), _e = _ ? E[H] / 2 - B - ee - J - D.mainAxis : T - ee - J - D.mainAxis, Xe = _ ? -E[H] / 2 + B + ee + be + D.mainAxis : R + ee + be + D.mainAxis, Qe = t.elements.arrow && fs(t.elements.arrow), tt = Qe ? x === "y" ? Qe.clientTop || 0 : Qe.clientLeft || 0 : 0, Ie = (k = A == null ? void 0 : A[x]) != null ? k : 0, We = K + _e - Ie - tt, bt = K + Xe - Ie, Ot = Fa(h ? ko(X, We) : X, K, h ? Mn(Z, bt) : Z);
      w[x] = Ot, S[x] = Ot - K;
    }
    if (o) {
      var Ft, Tt = x === "x" ? St : kt, _r = x === "x" ? qt : Gt, ct = w[b], ze = b === "y" ? "height" : "width", Ue = ct + g[Tt], dt = ct - g[_r], Mt = [St, kt].indexOf(m) !== -1, Nt = (Ft = A == null ? void 0 : A[b]) != null ? Ft : 0, At = Mt ? Ue : ct - E[ze] - $[ze] - Nt + D.altAxis, Lt = Mt ? ct + E[ze] + $[ze] - Nt - D.altAxis : dt, Ur = h && Mt ? dw(At, ct, Lt) : Fa(h ? At : Ue, ct, h ? Lt : dt);
      w[b] = Ur, S[b] = Ur - ct;
    }
    t.modifiersData[n] = S;
  }
}
const Vw = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Hw,
  requiresIfExists: ["offset"]
};
function Yw(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Ww(e) {
  return e === Rt(e) || !Yt(e) ? e0(e) : Yw(e);
}
function Uw(e) {
  var t = e.getBoundingClientRect(), r = Ei(t.width) / e.offsetWidth || 1, n = Ei(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function qw(e, t, r) {
  r === void 0 && (r = !1);
  var n = Yt(t), i = Yt(t) && Uw(t), a = vn(t), s = Ai(e, i, r), o = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (n || !n && !r) && ((gr(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  r0(a)) && (o = Ww(t)), Yt(t) ? (l = Ai(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : a && (l.x = t0(a))), {
    x: s.left + o.scrollLeft - l.x,
    y: s.top + o.scrollTop - l.y,
    width: s.width,
    height: s.height
  };
}
function Gw(e) {
  var t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), n = [];
  e.forEach(function(a) {
    t.set(a.name, a);
  });
  function i(a) {
    r.add(a.name);
    var s = [].concat(a.requires || [], a.requiresIfExists || []);
    s.forEach(function(o) {
      if (!r.has(o)) {
        var l = t.get(o);
        l && i(l);
      }
    }), n.push(a);
  }
  return e.forEach(function(a) {
    r.has(a.name) || i(a);
  }), n;
}
function Kw(e) {
  var t = Gw(e);
  return sw.reduce(function(r, n) {
    return r.concat(t.filter(function(i) {
      return i.phase === n;
    }));
  }, []);
}
function Zw(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(r) {
      Promise.resolve().then(function() {
        t = void 0, r(e());
      });
    })), t;
  };
}
function Xw(e) {
  var t = e.reduce(function(r, n) {
    var i = r[n.name];
    return r[n.name] = i ? Object.assign({}, i, n, {
      options: Object.assign({}, i.options, n.options),
      data: Object.assign({}, i.data, n.data)
    }) : n, r;
  }, {});
  return Object.keys(t).map(function(r) {
    return t[r];
  });
}
var Wd = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Ud() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return !t.some(function(n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function Jw(e) {
  e === void 0 && (e = {});
  var t = e, r = t.defaultModifiers, n = r === void 0 ? [] : r, i = t.defaultOptions, a = i === void 0 ? Wd : i;
  return function(o, l, c) {
    c === void 0 && (c = a);
    var u = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Wd, a),
      modifiersData: {},
      elements: {
        reference: o,
        popper: l
      },
      attributes: {},
      styles: {}
    }, f = [], d = !1, h = {
      state: u,
      setOptions: function(m) {
        var y = typeof m == "function" ? m(u.options) : m;
        v(), u.options = Object.assign({}, a, u.options, y), u.scrollParents = {
          reference: Nn(o) ? Ta(o) : o.contextElement ? Ta(o.contextElement) : [],
          popper: Ta(l)
        };
        var _ = Kw(Xw([].concat(n, u.options.modifiers)));
        return u.orderedModifiers = _.filter(function(x) {
          return x.enabled;
        }), p(), h.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!d) {
          var m = u.elements, y = m.reference, _ = m.popper;
          if (Ud(y, _)) {
            u.rects = {
              reference: qw(y, fs(_), u.options.strategy === "fixed"),
              popper: Jf(_)
            }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(D) {
              return u.modifiersData[D.name] = Object.assign({}, D.data);
            });
            for (var x = 0; x < u.orderedModifiers.length; x++) {
              if (u.reset === !0) {
                u.reset = !1, x = -1;
                continue;
              }
              var b = u.orderedModifiers[x], w = b.fn, E = b.options, $ = E === void 0 ? {} : E, C = b.name;
              typeof w == "function" && (u = w({
                state: u,
                options: $,
                name: C,
                instance: h
              }) || u);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Zw(function() {
        return new Promise(function(g) {
          h.forceUpdate(), g(u);
        });
      }),
      destroy: function() {
        v(), d = !0;
      }
    };
    if (!Ud(o, l))
      return h;
    h.setOptions(c).then(function(g) {
      !d && c.onFirstUpdate && c.onFirstUpdate(g);
    });
    function p() {
      u.orderedModifiers.forEach(function(g) {
        var m = g.name, y = g.options, _ = y === void 0 ? {} : y, x = g.effect;
        if (typeof x == "function") {
          var b = x({
            state: u,
            name: m,
            instance: h,
            options: _
          }), w = function() {
          };
          f.push(b || w);
        }
      });
    }
    function v() {
      f.forEach(function(g) {
        return g();
      }), f = [];
    }
    return h;
  };
}
var Qw = [ww, jw, bw, cw, Nw, Mw, Vw, gw, Bw], e$ = /* @__PURE__ */ Jw({
  defaultModifiers: Qw
}), t$ = Object.defineProperty, r$ = (e, t, r) => t in e ? t$(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, re = (e, t, r) => (r$(e, typeof t != "symbol" ? t + "" : t, r), r);
const Nr = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [n, i] of t)
    r[n] = i;
  return r;
}, n$ = {}, i$ = {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  viewBox: "0 0 24 24"
}, a$ = /* @__PURE__ */ oe("polyline", { points: "9 18 15 12 9 6" }, null, -1), s$ = [
  a$
];
function o$(e, t) {
  return I(), W("svg", i$, s$);
}
const l$ = /* @__PURE__ */ Nr(n$, [["render", o$]]), c$ = {}, u$ = {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  viewBox: "0 0 24 24"
}, f$ = /* @__PURE__ */ oe("polyline", { points: "15 18 9 12 15 6" }, null, -1), d$ = [
  f$
];
function h$(e, t) {
  return I(), W("svg", u$, d$);
}
const p$ = /* @__PURE__ */ Nr(c$, [["render", h$]]), v$ = {}, g$ = {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  viewBox: "0 0 24 24"
}, m$ = /* @__PURE__ */ oe("polyline", { points: "6 9 12 15 18 9" }, null, -1), x$ = [
  m$
];
function y$(e, t) {
  return I(), W("svg", g$, x$);
}
const b$ = /* @__PURE__ */ Nr(v$, [["render", y$]]), _$ = {}, w$ = {
  fill: "none",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  viewBox: "0 0 24 24"
}, $$ = /* @__PURE__ */ oe("path", { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" }, null, -1), D$ = [
  $$
];
function E$(e, t) {
  return I(), W("svg", w$, D$);
}
const A$ = /* @__PURE__ */ Nr(_$, [["render", E$]]), C$ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  IconChevronDown: b$,
  IconChevronLeft: p$,
  IconChevronRight: l$,
  IconClock: A$
}, Symbol.toStringTag, { value: "Module" })), Si = /* @__PURE__ */ he({
  __name: "BaseIcon",
  props: {
    name: { type: String, required: !0 },
    width: { type: String },
    height: { type: String },
    size: { type: String, default: "26" },
    viewBox: { type: String }
  },
  setup(e) {
    const t = e, r = M(() => t.width || t.size), n = M(() => t.height || t.size), i = M(() => C$[`Icon${t.name}`]);
    return (a, s) => (I(), $e(px(Y(i)), {
      width: Y(r),
      height: Y(n),
      class: "vc-base-icon"
    }, null, 8, ["width", "height"]));
  }
});
function Tx() {
  return typeof window < "u";
}
function S$(e) {
  return Tx() && e in window;
}
function k$(e) {
  const t = ce(!1), r = M(() => t.value ? "dark" : "light");
  let n, i;
  function a(h) {
    t.value = h.matches;
  }
  function s() {
    S$("matchMedia") && (n = window.matchMedia("(prefers-color-scheme: dark)"), n.addEventListener("change", a), t.value = n.matches);
  }
  function o() {
    const { selector: h = ":root", darkClass: p = "dark" } = e.value, v = document.querySelector(h);
    t.value = v.classList.contains(p);
  }
  function l(h) {
    const { selector: p = ":root", darkClass: v = "dark" } = h;
    if (Tx() && p && v) {
      const g = document.querySelector(p);
      g && (i = new MutationObserver(o), i.observe(g, {
        attributes: !0,
        attributeFilter: ["class"]
      }), t.value = g.classList.contains(v));
    }
  }
  function c() {
    f();
    const h = typeof e.value;
    h === "string" && e.value.toLowerCase() === "system" ? s() : h === "object" ? l(e.value) : t.value = !!e.value;
  }
  const u = pe(() => e.value, () => c(), {
    immediate: !0
  });
  function f() {
    n && (n.removeEventListener("change", a), n = void 0), i && (i.disconnect(), i = void 0);
  }
  function d() {
    f(), u();
  }
  return Et(() => d()), {
    isDark: t,
    displayMode: r,
    cleanup: d
  };
}
var Ss = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function O$(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var F$ = typeof Ss == "object" && Ss && Ss.Object === Object && Ss, Mx = F$, T$ = Mx, M$ = typeof self == "object" && self && self.Object === Object && self, P$ = T$ || M$ || Function("return this")(), mr = P$, B$ = mr, I$ = B$.Symbol, Sl = I$, qd = Sl, Px = Object.prototype, R$ = Px.hasOwnProperty, N$ = Px.toString, da = qd ? qd.toStringTag : void 0;
function L$(e) {
  var t = R$.call(e, da), r = e[da];
  try {
    e[da] = void 0;
    var n = !0;
  } catch {
  }
  var i = N$.call(e);
  return n && (t ? e[da] = r : delete e[da]), i;
}
var j$ = L$, z$ = Object.prototype, H$ = z$.toString;
function V$(e) {
  return H$.call(e);
}
var Y$ = V$, Gd = Sl, W$ = j$, U$ = Y$, q$ = "[object Null]", G$ = "[object Undefined]", Kd = Gd ? Gd.toStringTag : void 0;
function K$(e) {
  return e == null ? e === void 0 ? G$ : q$ : Kd && Kd in Object(e) ? W$(e) : U$(e);
}
var xr = K$;
function Z$(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Lr = Z$, X$ = xr, J$ = Lr, Q$ = "[object AsyncFunction]", eD = "[object Function]", tD = "[object GeneratorFunction]", rD = "[object Proxy]";
function nD(e) {
  if (!J$(e))
    return !1;
  var t = X$(e);
  return t == eD || t == tD || t == Q$ || t == rD;
}
var Yn = nD, iD = Array.isArray, ir = iD;
function aD(e) {
  return e != null && typeof e == "object";
}
var ar = aD, sD = xr, oD = ir, lD = ar, cD = "[object String]";
function uD(e) {
  return typeof e == "string" || !oD(e) && lD(e) && sD(e) == cD;
}
var dr = uD, fD = xr, dD = ar, hD = "[object Boolean]";
function pD(e) {
  return e === !0 || e === !1 || dD(e) && fD(e) == hD;
}
var vD = pD, gD = xr, mD = ar, xD = "[object Number]";
function yD(e) {
  return typeof e == "number" || mD(e) && gD(e) == xD;
}
var nr = yD, bD = xr, _D = ar, wD = "[object Date]";
function $D(e) {
  return _D(e) && bD(e) == wD;
}
var DD = $D;
function ED(e) {
  return function(t) {
    return e(t);
  };
}
var Bx = ED, qa = {}, AD = {
  get exports() {
    return qa;
  },
  set exports(e) {
    qa = e;
  }
};
(function(e, t) {
  var r = Mx, n = t && !t.nodeType && t, i = n && !0 && e && !e.nodeType && e, a = i && i.exports === n, s = a && r.process, o = function() {
    try {
      var l = i && i.require && i.require("util").types;
      return l || s && s.binding && s.binding("util");
    } catch {
    }
  }();
  e.exports = o;
})(AD, qa);
var CD = DD, SD = Bx, Zd = qa, Xd = Zd && Zd.isDate, kD = Xd ? SD(Xd) : CD, OD = kD, FD = xr, TD = ar, MD = "[object Symbol]";
function PD(e) {
  return typeof e == "symbol" || TD(e) && FD(e) == MD;
}
var n0 = PD, BD = ir, ID = n0, RD = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, ND = /^\w*$/;
function LD(e, t) {
  if (BD(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || ID(e) ? !0 : ND.test(e) || !RD.test(e) || t != null && e in Object(t);
}
var i0 = LD, jD = mr, zD = jD["__core-js_shared__"], HD = zD, oc = HD, Jd = function() {
  var e = /[^.]+$/.exec(oc && oc.keys && oc.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function VD(e) {
  return !!Jd && Jd in e;
}
var YD = VD, WD = Function.prototype, UD = WD.toString;
function qD(e) {
  if (e != null) {
    try {
      return UD.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Ix = qD, GD = Yn, KD = YD, ZD = Lr, XD = Ix, JD = /[\\^$.*+?()[\]{}|]/g, QD = /^\[object .+?Constructor\]$/, eE = Function.prototype, tE = Object.prototype, rE = eE.toString, nE = tE.hasOwnProperty, iE = RegExp(
  "^" + rE.call(nE).replace(JD, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function aE(e) {
  if (!ZD(e) || KD(e))
    return !1;
  var t = GD(e) ? iE : QD;
  return t.test(XD(e));
}
var sE = aE;
function oE(e, t) {
  return e == null ? void 0 : e[t];
}
var lE = oE, cE = sE, uE = lE;
function fE(e, t) {
  var r = uE(e, t);
  return cE(r) ? r : void 0;
}
var Wn = fE, dE = Wn, hE = dE(Object, "create"), kl = hE, Qd = kl;
function pE() {
  this.__data__ = Qd ? Qd(null) : {}, this.size = 0;
}
var vE = pE;
function gE(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var mE = gE, xE = kl, yE = "__lodash_hash_undefined__", bE = Object.prototype, _E = bE.hasOwnProperty;
function wE(e) {
  var t = this.__data__;
  if (xE) {
    var r = t[e];
    return r === yE ? void 0 : r;
  }
  return _E.call(t, e) ? t[e] : void 0;
}
var $E = wE, DE = kl, EE = Object.prototype, AE = EE.hasOwnProperty;
function CE(e) {
  var t = this.__data__;
  return DE ? t[e] !== void 0 : AE.call(t, e);
}
var SE = CE, kE = kl, OE = "__lodash_hash_undefined__";
function FE(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = kE && t === void 0 ? OE : t, this;
}
var TE = FE, ME = vE, PE = mE, BE = $E, IE = SE, RE = TE;
function Vi(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Vi.prototype.clear = ME;
Vi.prototype.delete = PE;
Vi.prototype.get = BE;
Vi.prototype.has = IE;
Vi.prototype.set = RE;
var NE = Vi;
function LE() {
  this.__data__ = [], this.size = 0;
}
var jE = LE;
function zE(e, t) {
  return e === t || e !== e && t !== t;
}
var Yi = zE, HE = Yi;
function VE(e, t) {
  for (var r = e.length; r--; )
    if (HE(e[r][0], t))
      return r;
  return -1;
}
var Ol = VE, YE = Ol, WE = Array.prototype, UE = WE.splice;
function qE(e) {
  var t = this.__data__, r = YE(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : UE.call(t, r, 1), --this.size, !0;
}
var GE = qE, KE = Ol;
function ZE(e) {
  var t = this.__data__, r = KE(t, e);
  return r < 0 ? void 0 : t[r][1];
}
var XE = ZE, JE = Ol;
function QE(e) {
  return JE(this.__data__, e) > -1;
}
var eA = QE, tA = Ol;
function rA(e, t) {
  var r = this.__data__, n = tA(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
var nA = rA, iA = jE, aA = GE, sA = XE, oA = eA, lA = nA;
function Wi(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Wi.prototype.clear = iA;
Wi.prototype.delete = aA;
Wi.prototype.get = sA;
Wi.prototype.has = oA;
Wi.prototype.set = lA;
var Fl = Wi, cA = Wn, uA = mr, fA = cA(uA, "Map"), a0 = fA, eh = NE, dA = Fl, hA = a0;
function pA() {
  this.size = 0, this.__data__ = {
    hash: new eh(),
    map: new (hA || dA)(),
    string: new eh()
  };
}
var vA = pA;
function gA(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var mA = gA, xA = mA;
function yA(e, t) {
  var r = e.__data__;
  return xA(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
var Tl = yA, bA = Tl;
function _A(e) {
  var t = bA(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var wA = _A, $A = Tl;
function DA(e) {
  return $A(this, e).get(e);
}
var EA = DA, AA = Tl;
function CA(e) {
  return AA(this, e).has(e);
}
var SA = CA, kA = Tl;
function OA(e, t) {
  var r = kA(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
var FA = OA, TA = vA, MA = wA, PA = EA, BA = SA, IA = FA;
function Ui(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Ui.prototype.clear = TA;
Ui.prototype.delete = MA;
Ui.prototype.get = PA;
Ui.prototype.has = BA;
Ui.prototype.set = IA;
var s0 = Ui, Rx = s0, RA = "Expected a function";
function o0(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(RA);
  var r = function() {
    var n = arguments, i = t ? t.apply(this, n) : n[0], a = r.cache;
    if (a.has(i))
      return a.get(i);
    var s = e.apply(this, n);
    return r.cache = a.set(i, s) || a, s;
  };
  return r.cache = new (o0.Cache || Rx)(), r;
}
o0.Cache = Rx;
var NA = o0, LA = NA, jA = 500;
function zA(e) {
  var t = LA(e, function(n) {
    return r.size === jA && r.clear(), n;
  }), r = t.cache;
  return t;
}
var HA = zA, VA = HA, YA = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, WA = /\\(\\)?/g, UA = VA(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(YA, function(r, n, i, a) {
    t.push(i ? a.replace(WA, "$1") : n || r);
  }), t;
}), qA = UA;
function GA(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; )
    i[r] = t(e[r], r, e);
  return i;
}
var KA = GA, th = Sl, ZA = KA, XA = ir, JA = n0, QA = 1 / 0, rh = th ? th.prototype : void 0, nh = rh ? rh.toString : void 0;
function Nx(e) {
  if (typeof e == "string")
    return e;
  if (XA(e))
    return ZA(e, Nx) + "";
  if (JA(e))
    return nh ? nh.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -QA ? "-0" : t;
}
var eC = Nx, tC = eC;
function rC(e) {
  return e == null ? "" : tC(e);
}
var nC = rC, iC = ir, aC = i0, sC = qA, oC = nC;
function lC(e, t) {
  return iC(e) ? e : aC(e, t) ? [e] : sC(oC(e));
}
var Lx = lC, cC = n0, uC = 1 / 0;
function fC(e) {
  if (typeof e == "string" || cC(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -uC ? "-0" : t;
}
var Ml = fC, dC = Lx, hC = Ml;
function pC(e, t) {
  t = dC(t, e);
  for (var r = 0, n = t.length; e != null && r < n; )
    e = e[hC(t[r++])];
  return r && r == n ? e : void 0;
}
var jx = pC, vC = jx;
function gC(e, t, r) {
  var n = e == null ? void 0 : vC(e, t);
  return n === void 0 ? r : n;
}
var Fn = gC, mC = Wn, xC = function() {
  try {
    var e = mC(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), zx = xC, ih = zx;
function yC(e, t, r) {
  t == "__proto__" && ih ? ih(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
var Pl = yC, bC = Pl, _C = Yi, wC = Object.prototype, $C = wC.hasOwnProperty;
function DC(e, t, r) {
  var n = e[t];
  (!($C.call(e, t) && _C(n, r)) || r === void 0 && !(t in e)) && bC(e, t, r);
}
var EC = DC, AC = 9007199254740991, CC = /^(?:0|[1-9]\d*)$/;
function SC(e, t) {
  var r = typeof e;
  return t = t ?? AC, !!t && (r == "number" || r != "symbol" && CC.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var l0 = SC;
function kC(e) {
  return function(t, r, n) {
    for (var i = -1, a = Object(t), s = n(t), o = s.length; o--; ) {
      var l = s[e ? o : ++i];
      if (r(a[l], l, a) === !1)
        break;
    }
    return t;
  };
}
var OC = kC, FC = OC, TC = FC(), Hx = TC;
function MC(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var PC = MC, BC = xr, IC = ar, RC = "[object Arguments]";
function NC(e) {
  return IC(e) && BC(e) == RC;
}
var LC = NC, ah = LC, jC = ar, Vx = Object.prototype, zC = Vx.hasOwnProperty, HC = Vx.propertyIsEnumerable, VC = ah(/* @__PURE__ */ function() {
  return arguments;
}()) ? ah : function(e) {
  return jC(e) && zC.call(e, "callee") && !HC.call(e, "callee");
}, c0 = VC, ki = {}, YC = {
  get exports() {
    return ki;
  },
  set exports(e) {
    ki = e;
  }
};
function WC() {
  return !1;
}
var UC = WC;
(function(e, t) {
  var r = mr, n = UC, i = t && !t.nodeType && t, a = i && !0 && e && !e.nodeType && e, s = a && a.exports === i, o = s ? r.Buffer : void 0, l = o ? o.isBuffer : void 0, c = l || n;
  e.exports = c;
})(YC, ki);
var qC = 9007199254740991;
function GC(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= qC;
}
var u0 = GC, KC = xr, ZC = u0, XC = ar, JC = "[object Arguments]", QC = "[object Array]", eS = "[object Boolean]", tS = "[object Date]", rS = "[object Error]", nS = "[object Function]", iS = "[object Map]", aS = "[object Number]", sS = "[object Object]", oS = "[object RegExp]", lS = "[object Set]", cS = "[object String]", uS = "[object WeakMap]", fS = "[object ArrayBuffer]", dS = "[object DataView]", hS = "[object Float32Array]", pS = "[object Float64Array]", vS = "[object Int8Array]", gS = "[object Int16Array]", mS = "[object Int32Array]", xS = "[object Uint8Array]", yS = "[object Uint8ClampedArray]", bS = "[object Uint16Array]", _S = "[object Uint32Array]", Te = {};
Te[hS] = Te[pS] = Te[vS] = Te[gS] = Te[mS] = Te[xS] = Te[yS] = Te[bS] = Te[_S] = !0;
Te[JC] = Te[QC] = Te[fS] = Te[eS] = Te[dS] = Te[tS] = Te[rS] = Te[nS] = Te[iS] = Te[aS] = Te[sS] = Te[oS] = Te[lS] = Te[cS] = Te[uS] = !1;
function wS(e) {
  return XC(e) && ZC(e.length) && !!Te[KC(e)];
}
var $S = wS, DS = $S, ES = Bx, sh = qa, oh = sh && sh.isTypedArray, AS = oh ? ES(oh) : DS, f0 = AS, CS = PC, SS = c0, kS = ir, OS = ki, FS = l0, TS = f0, MS = Object.prototype, PS = MS.hasOwnProperty;
function BS(e, t) {
  var r = kS(e), n = !r && SS(e), i = !r && !n && OS(e), a = !r && !n && !i && TS(e), s = r || n || i || a, o = s ? CS(e.length, String) : [], l = o.length;
  for (var c in e)
    (t || PS.call(e, c)) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    FS(c, l))) && o.push(c);
  return o;
}
var Yx = BS, IS = Object.prototype;
function RS(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || IS;
  return e === r;
}
var d0 = RS;
function NS(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var Wx = NS, LS = Wx, jS = LS(Object.keys, Object), zS = jS, HS = d0, VS = zS, YS = Object.prototype, WS = YS.hasOwnProperty;
function US(e) {
  if (!HS(e))
    return VS(e);
  var t = [];
  for (var r in Object(e))
    WS.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
var qS = US, GS = Yn, KS = u0;
function ZS(e) {
  return e != null && KS(e.length) && !GS(e);
}
var ds = ZS, XS = Yx, JS = qS, QS = ds;
function ek(e) {
  return QS(e) ? XS(e) : JS(e);
}
var h0 = ek, tk = Hx, rk = h0;
function nk(e, t) {
  return e && tk(e, t, rk);
}
var Ux = nk, ik = Fl;
function ak() {
  this.__data__ = new ik(), this.size = 0;
}
var sk = ak;
function ok(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
var lk = ok;
function ck(e) {
  return this.__data__.get(e);
}
var uk = ck;
function fk(e) {
  return this.__data__.has(e);
}
var dk = fk, hk = Fl, pk = a0, vk = s0, gk = 200;
function mk(e, t) {
  var r = this.__data__;
  if (r instanceof hk) {
    var n = r.__data__;
    if (!pk || n.length < gk - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new vk(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
var xk = mk, yk = Fl, bk = sk, _k = lk, wk = uk, $k = dk, Dk = xk;
function qi(e) {
  var t = this.__data__ = new yk(e);
  this.size = t.size;
}
qi.prototype.clear = bk;
qi.prototype.delete = _k;
qi.prototype.get = wk;
qi.prototype.has = $k;
qi.prototype.set = Dk;
var p0 = qi, Ek = "__lodash_hash_undefined__";
function Ak(e) {
  return this.__data__.set(e, Ek), this;
}
var Ck = Ak;
function Sk(e) {
  return this.__data__.has(e);
}
var kk = Sk, Ok = s0, Fk = Ck, Tk = kk;
function Oo(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new Ok(); ++t < r; )
    this.add(e[t]);
}
Oo.prototype.add = Oo.prototype.push = Fk;
Oo.prototype.has = Tk;
var Mk = Oo;
function Pk(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
var qx = Pk;
function Bk(e, t) {
  return e.has(t);
}
var Ik = Bk, Rk = Mk, Nk = qx, Lk = Ik, jk = 1, zk = 2;
function Hk(e, t, r, n, i, a) {
  var s = r & jk, o = e.length, l = t.length;
  if (o != l && !(s && l > o))
    return !1;
  var c = a.get(e), u = a.get(t);
  if (c && u)
    return c == t && u == e;
  var f = -1, d = !0, h = r & zk ? new Rk() : void 0;
  for (a.set(e, t), a.set(t, e); ++f < o; ) {
    var p = e[f], v = t[f];
    if (n)
      var g = s ? n(v, p, f, t, e, a) : n(p, v, f, e, t, a);
    if (g !== void 0) {
      if (g)
        continue;
      d = !1;
      break;
    }
    if (h) {
      if (!Nk(t, function(m, y) {
        if (!Lk(h, y) && (p === m || i(p, m, r, n, a)))
          return h.push(y);
      })) {
        d = !1;
        break;
      }
    } else if (!(p === v || i(p, v, r, n, a))) {
      d = !1;
      break;
    }
  }
  return a.delete(e), a.delete(t), d;
}
var Gx = Hk, Vk = mr, Yk = Vk.Uint8Array, Kx = Yk;
function Wk(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n, i) {
    r[++t] = [i, n];
  }), r;
}
var Uk = Wk;
function qk(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n) {
    r[++t] = n;
  }), r;
}
var Gk = qk, lh = Sl, ch = Kx, Kk = Yi, Zk = Gx, Xk = Uk, Jk = Gk, Qk = 1, eO = 2, tO = "[object Boolean]", rO = "[object Date]", nO = "[object Error]", iO = "[object Map]", aO = "[object Number]", sO = "[object RegExp]", oO = "[object Set]", lO = "[object String]", cO = "[object Symbol]", uO = "[object ArrayBuffer]", fO = "[object DataView]", uh = lh ? lh.prototype : void 0, lc = uh ? uh.valueOf : void 0;
function dO(e, t, r, n, i, a, s) {
  switch (r) {
    case fO:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case uO:
      return !(e.byteLength != t.byteLength || !a(new ch(e), new ch(t)));
    case tO:
    case rO:
    case aO:
      return Kk(+e, +t);
    case nO:
      return e.name == t.name && e.message == t.message;
    case sO:
    case lO:
      return e == t + "";
    case iO:
      var o = Xk;
    case oO:
      var l = n & Qk;
      if (o || (o = Jk), e.size != t.size && !l)
        return !1;
      var c = s.get(e);
      if (c)
        return c == t;
      n |= eO, s.set(e, t);
      var u = Zk(o(e), o(t), n, i, a, s);
      return s.delete(e), u;
    case cO:
      if (lc)
        return lc.call(e) == lc.call(t);
  }
  return !1;
}
var hO = dO;
function pO(e, t) {
  for (var r = -1, n = t.length, i = e.length; ++r < n; )
    e[i + r] = t[r];
  return e;
}
var vO = pO, gO = vO, mO = ir;
function xO(e, t, r) {
  var n = t(e);
  return mO(e) ? n : gO(n, r(e));
}
var yO = xO;
function bO(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = 0, a = []; ++r < n; ) {
    var s = e[r];
    t(s, r, e) && (a[i++] = s);
  }
  return a;
}
var _O = bO;
function wO() {
  return [];
}
var $O = wO, DO = _O, EO = $O, AO = Object.prototype, CO = AO.propertyIsEnumerable, fh = Object.getOwnPropertySymbols, SO = fh ? function(e) {
  return e == null ? [] : (e = Object(e), DO(fh(e), function(t) {
    return CO.call(e, t);
  }));
} : EO, kO = SO, OO = yO, FO = kO, TO = h0;
function MO(e) {
  return OO(e, TO, FO);
}
var PO = MO, dh = PO, BO = 1, IO = Object.prototype, RO = IO.hasOwnProperty;
function NO(e, t, r, n, i, a) {
  var s = r & BO, o = dh(e), l = o.length, c = dh(t), u = c.length;
  if (l != u && !s)
    return !1;
  for (var f = l; f--; ) {
    var d = o[f];
    if (!(s ? d in t : RO.call(t, d)))
      return !1;
  }
  var h = a.get(e), p = a.get(t);
  if (h && p)
    return h == t && p == e;
  var v = !0;
  a.set(e, t), a.set(t, e);
  for (var g = s; ++f < l; ) {
    d = o[f];
    var m = e[d], y = t[d];
    if (n)
      var _ = s ? n(y, m, d, t, e, a) : n(m, y, d, e, t, a);
    if (!(_ === void 0 ? m === y || i(m, y, r, n, a) : _)) {
      v = !1;
      break;
    }
    g || (g = d == "constructor");
  }
  if (v && !g) {
    var x = e.constructor, b = t.constructor;
    x != b && "constructor" in e && "constructor" in t && !(typeof x == "function" && x instanceof x && typeof b == "function" && b instanceof b) && (v = !1);
  }
  return a.delete(e), a.delete(t), v;
}
var LO = NO, jO = Wn, zO = mr, HO = jO(zO, "DataView"), VO = HO, YO = Wn, WO = mr, UO = YO(WO, "Promise"), qO = UO, GO = Wn, KO = mr, ZO = GO(KO, "Set"), XO = ZO, JO = Wn, QO = mr, e4 = JO(QO, "WeakMap"), t4 = e4, Lu = VO, ju = a0, zu = qO, Hu = XO, Vu = t4, Zx = xr, Gi = Ix, hh = "[object Map]", r4 = "[object Object]", ph = "[object Promise]", vh = "[object Set]", gh = "[object WeakMap]", mh = "[object DataView]", n4 = Gi(Lu), i4 = Gi(ju), a4 = Gi(zu), s4 = Gi(Hu), o4 = Gi(Vu), En = Zx;
(Lu && En(new Lu(new ArrayBuffer(1))) != mh || ju && En(new ju()) != hh || zu && En(zu.resolve()) != ph || Hu && En(new Hu()) != vh || Vu && En(new Vu()) != gh) && (En = function(e) {
  var t = Zx(e), r = t == r4 ? e.constructor : void 0, n = r ? Gi(r) : "";
  if (n)
    switch (n) {
      case n4:
        return mh;
      case i4:
        return hh;
      case a4:
        return ph;
      case s4:
        return vh;
      case o4:
        return gh;
    }
  return t;
});
var l4 = En, cc = p0, c4 = Gx, u4 = hO, f4 = LO, xh = l4, yh = ir, bh = ki, d4 = f0, h4 = 1, _h = "[object Arguments]", wh = "[object Array]", ks = "[object Object]", p4 = Object.prototype, $h = p4.hasOwnProperty;
function v4(e, t, r, n, i, a) {
  var s = yh(e), o = yh(t), l = s ? wh : xh(e), c = o ? wh : xh(t);
  l = l == _h ? ks : l, c = c == _h ? ks : c;
  var u = l == ks, f = c == ks, d = l == c;
  if (d && bh(e)) {
    if (!bh(t))
      return !1;
    s = !0, u = !1;
  }
  if (d && !u)
    return a || (a = new cc()), s || d4(e) ? c4(e, t, r, n, i, a) : u4(e, t, l, r, n, i, a);
  if (!(r & h4)) {
    var h = u && $h.call(e, "__wrapped__"), p = f && $h.call(t, "__wrapped__");
    if (h || p) {
      var v = h ? e.value() : e, g = p ? t.value() : t;
      return a || (a = new cc()), i(v, g, r, n, a);
    }
  }
  return d ? (a || (a = new cc()), f4(e, t, r, n, i, a)) : !1;
}
var g4 = v4, m4 = g4, Dh = ar;
function Xx(e, t, r, n, i) {
  return e === t ? !0 : e == null || t == null || !Dh(e) && !Dh(t) ? e !== e && t !== t : m4(e, t, r, n, Xx, i);
}
var Jx = Xx, x4 = p0, y4 = Jx, b4 = 1, _4 = 2;
function w4(e, t, r, n) {
  var i = r.length, a = i, s = !n;
  if (e == null)
    return !a;
  for (e = Object(e); i--; ) {
    var o = r[i];
    if (s && o[2] ? o[1] !== e[o[0]] : !(o[0] in e))
      return !1;
  }
  for (; ++i < a; ) {
    o = r[i];
    var l = o[0], c = e[l], u = o[1];
    if (s && o[2]) {
      if (c === void 0 && !(l in e))
        return !1;
    } else {
      var f = new x4();
      if (n)
        var d = n(c, u, l, e, t, f);
      if (!(d === void 0 ? y4(u, c, b4 | _4, n, f) : d))
        return !1;
    }
  }
  return !0;
}
var $4 = w4, D4 = Lr;
function E4(e) {
  return e === e && !D4(e);
}
var Qx = E4, A4 = Qx, C4 = h0;
function S4(e) {
  for (var t = C4(e), r = t.length; r--; ) {
    var n = t[r], i = e[n];
    t[r] = [n, i, A4(i)];
  }
  return t;
}
var k4 = S4;
function O4(e, t) {
  return function(r) {
    return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
  };
}
var e1 = O4, F4 = $4, T4 = k4, M4 = e1;
function P4(e) {
  var t = T4(e);
  return t.length == 1 && t[0][2] ? M4(t[0][0], t[0][1]) : function(r) {
    return r === e || F4(r, e, t);
  };
}
var B4 = P4;
function I4(e, t) {
  return e != null && t in Object(e);
}
var R4 = I4, N4 = Lx, L4 = c0, j4 = ir, z4 = l0, H4 = u0, V4 = Ml;
function Y4(e, t, r) {
  t = N4(t, e);
  for (var n = -1, i = t.length, a = !1; ++n < i; ) {
    var s = V4(t[n]);
    if (!(a = e != null && r(e, s)))
      break;
    e = e[s];
  }
  return a || ++n != i ? a : (i = e == null ? 0 : e.length, !!i && H4(i) && z4(s, i) && (j4(e) || L4(e)));
}
var t1 = Y4, W4 = R4, U4 = t1;
function q4(e, t) {
  return e != null && U4(e, t, W4);
}
var G4 = q4, K4 = Jx, Z4 = Fn, X4 = G4, J4 = i0, Q4 = Qx, eF = e1, tF = Ml, rF = 1, nF = 2;
function iF(e, t) {
  return J4(e) && Q4(t) ? eF(tF(e), t) : function(r) {
    var n = Z4(r, e);
    return n === void 0 && n === t ? X4(r, e) : K4(t, n, rF | nF);
  };
}
var aF = iF;
function sF(e) {
  return e;
}
var v0 = sF;
function oF(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
var lF = oF, cF = jx;
function uF(e) {
  return function(t) {
    return cF(t, e);
  };
}
var fF = uF, dF = lF, hF = fF, pF = i0, vF = Ml;
function gF(e) {
  return pF(e) ? dF(vF(e)) : hF(e);
}
var mF = gF, xF = B4, yF = aF, bF = v0, _F = ir, wF = mF;
function $F(e) {
  return typeof e == "function" ? e : e == null ? bF : typeof e == "object" ? _F(e) ? yF(e[0], e[1]) : xF(e) : wF(e);
}
var r1 = $F, DF = Pl, EF = Ux, AF = r1;
function CF(e, t) {
  var r = {};
  return t = AF(t), EF(e, function(n, i, a) {
    DF(r, i, t(n, i, a));
  }), r;
}
var SF = CF;
function kF(e, t, r) {
  switch (r.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, r[0]);
    case 2:
      return e.call(t, r[0], r[1]);
    case 3:
      return e.call(t, r[0], r[1], r[2]);
  }
  return e.apply(t, r);
}
var n1 = kF, OF = n1, Eh = Math.max;
function FF(e, t, r) {
  return t = Eh(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var n = arguments, i = -1, a = Eh(n.length - t, 0), s = Array(a); ++i < a; )
      s[i] = n[t + i];
    i = -1;
    for (var o = Array(t + 1); ++i < t; )
      o[i] = n[i];
    return o[t] = r(s), OF(e, this, o);
  };
}
var TF = FF;
function MF(e) {
  return function() {
    return e;
  };
}
var PF = MF, BF = PF, Ah = zx, IF = v0, RF = Ah ? function(e, t) {
  return Ah(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: BF(t),
    writable: !0
  });
} : IF, NF = RF, LF = 800, jF = 16, zF = Date.now;
function HF(e) {
  var t = 0, r = 0;
  return function() {
    var n = zF(), i = jF - (n - r);
    if (r = n, i > 0) {
      if (++t >= LF)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
var VF = HF, YF = NF, WF = VF, UF = WF(YF), qF = UF, GF = v0, KF = TF, ZF = qF;
function XF(e, t) {
  return ZF(KF(e, t, GF), e + "");
}
var g0 = XF, JF = Yi, QF = ds, e8 = l0, t8 = Lr;
function r8(e, t, r) {
  if (!t8(r))
    return !1;
  var n = typeof t;
  return (n == "number" ? QF(r) && e8(t, r.length) : n == "string" && t in r) ? JF(r[t], e) : !1;
}
var m0 = r8;
function n8(e) {
  var t = [];
  if (e != null)
    for (var r in Object(e))
      t.push(r);
  return t;
}
var i8 = n8, a8 = Lr, s8 = d0, o8 = i8, l8 = Object.prototype, c8 = l8.hasOwnProperty;
function u8(e) {
  if (!a8(e))
    return o8(e);
  var t = s8(e), r = [];
  for (var n in e)
    n == "constructor" && (t || !c8.call(e, n)) || r.push(n);
  return r;
}
var f8 = u8, d8 = Yx, h8 = f8, p8 = ds;
function v8(e) {
  return p8(e) ? d8(e, !0) : h8(e);
}
var x0 = v8, g8 = g0, m8 = Yi, x8 = m0, y8 = x0, i1 = Object.prototype, b8 = i1.hasOwnProperty, _8 = g8(function(e, t) {
  e = Object(e);
  var r = -1, n = t.length, i = n > 2 ? t[2] : void 0;
  for (i && x8(t[0], t[1], i) && (n = 1); ++r < n; )
    for (var a = t[r], s = y8(a), o = -1, l = s.length; ++o < l; ) {
      var c = s[o], u = e[c];
      (u === void 0 || m8(u, i1[c]) && !b8.call(e, c)) && (e[c] = a[c]);
    }
  return e;
}), Ch = _8, w8 = Pl, $8 = Yi;
function D8(e, t, r) {
  (r !== void 0 && !$8(e[t], r) || r === void 0 && !(t in e)) && w8(e, t, r);
}
var a1 = D8, Fo = {}, E8 = {
  get exports() {
    return Fo;
  },
  set exports(e) {
    Fo = e;
  }
};
(function(e, t) {
  var r = mr, n = t && !t.nodeType && t, i = n && !0 && e && !e.nodeType && e, a = i && i.exports === n, s = a ? r.Buffer : void 0, o = s ? s.allocUnsafe : void 0;
  function l(c, u) {
    if (u)
      return c.slice();
    var f = c.length, d = o ? o(f) : new c.constructor(f);
    return c.copy(d), d;
  }
  e.exports = l;
})(E8, Fo);
var Sh = Kx;
function A8(e) {
  var t = new e.constructor(e.byteLength);
  return new Sh(t).set(new Sh(e)), t;
}
var C8 = A8, S8 = C8;
function k8(e, t) {
  var r = t ? S8(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.length);
}
var O8 = k8;
function F8(e, t) {
  var r = -1, n = e.length;
  for (t || (t = Array(n)); ++r < n; )
    t[r] = e[r];
  return t;
}
var T8 = F8, M8 = Lr, kh = Object.create, P8 = /* @__PURE__ */ function() {
  function e() {
  }
  return function(t) {
    if (!M8(t))
      return {};
    if (kh)
      return kh(t);
    e.prototype = t;
    var r = new e();
    return e.prototype = void 0, r;
  };
}(), B8 = P8, I8 = Wx, R8 = I8(Object.getPrototypeOf, Object), s1 = R8, N8 = B8, L8 = s1, j8 = d0;
function z8(e) {
  return typeof e.constructor == "function" && !j8(e) ? N8(L8(e)) : {};
}
var H8 = z8, V8 = ds, Y8 = ar;
function W8(e) {
  return Y8(e) && V8(e);
}
var U8 = W8, q8 = xr, G8 = s1, K8 = ar, Z8 = "[object Object]", X8 = Function.prototype, J8 = Object.prototype, o1 = X8.toString, Q8 = J8.hasOwnProperty, eT = o1.call(Object);
function tT(e) {
  if (!K8(e) || q8(e) != Z8)
    return !1;
  var t = G8(e);
  if (t === null)
    return !0;
  var r = Q8.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r instanceof r && o1.call(r) == eT;
}
var rT = tT;
function nT(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
    return e[t];
}
var l1 = nT, iT = EC, aT = Pl;
function sT(e, t, r, n) {
  var i = !r;
  r || (r = {});
  for (var a = -1, s = t.length; ++a < s; ) {
    var o = t[a], l = n ? n(r[o], e[o], o, r, e) : void 0;
    l === void 0 && (l = e[o]), i ? aT(r, o, l) : iT(r, o, l);
  }
  return r;
}
var oT = sT, lT = oT, cT = x0;
function uT(e) {
  return lT(e, cT(e));
}
var fT = uT, Oh = a1, dT = Fo, hT = O8, pT = T8, vT = H8, Fh = c0, Th = ir, gT = U8, mT = ki, xT = Yn, yT = Lr, bT = rT, _T = f0, Mh = l1, wT = fT;
function $T(e, t, r, n, i, a, s) {
  var o = Mh(e, r), l = Mh(t, r), c = s.get(l);
  if (c) {
    Oh(e, r, c);
    return;
  }
  var u = a ? a(o, l, r + "", e, t, s) : void 0, f = u === void 0;
  if (f) {
    var d = Th(l), h = !d && mT(l), p = !d && !h && _T(l);
    u = l, d || h || p ? Th(o) ? u = o : gT(o) ? u = pT(o) : h ? (f = !1, u = dT(l, !0)) : p ? (f = !1, u = hT(l, !0)) : u = [] : bT(l) || Fh(l) ? (u = o, Fh(o) ? u = wT(o) : (!yT(o) || xT(o)) && (u = vT(l))) : f = !1;
  }
  f && (s.set(l, u), i(u, l, n, a, s), s.delete(l)), Oh(e, r, u);
}
var DT = $T, ET = p0, AT = a1, CT = Hx, ST = DT, kT = Lr, OT = x0, FT = l1;
function c1(e, t, r, n, i) {
  e !== t && CT(t, function(a, s) {
    if (i || (i = new ET()), kT(a))
      ST(e, t, s, r, c1, n, i);
    else {
      var o = n ? n(FT(e, s), a, s + "", e, t, i) : void 0;
      o === void 0 && (o = a), AT(e, s, o);
    }
  }, OT);
}
var u1 = c1, TT = u1, Ph = Lr;
function f1(e, t, r, n, i, a) {
  return Ph(e) && Ph(t) && (a.set(t, e), TT(e, t, void 0, f1, a), a.delete(t)), e;
}
var MT = f1, PT = g0, BT = m0;
function IT(e) {
  return PT(function(t, r) {
    var n = -1, i = r.length, a = i > 1 ? r[i - 1] : void 0, s = i > 2 ? r[2] : void 0;
    for (a = e.length > 3 && typeof a == "function" ? (i--, a) : void 0, s && BT(r[0], r[1], s) && (a = i < 3 ? void 0 : a, i = 1), t = Object(t); ++n < i; ) {
      var o = r[n];
      o && e(t, o, n, a);
    }
    return t;
  });
}
var RT = IT, NT = u1, LT = RT, jT = LT(function(e, t, r, n) {
  NT(e, t, r, n);
}), zT = jT, HT = n1, VT = g0, YT = MT, WT = zT, UT = VT(function(e) {
  return e.push(void 0, YT), HT(WT, void 0, e);
}), Ga = UT, qT = Object.prototype, GT = qT.hasOwnProperty;
function KT(e, t) {
  return e != null && GT.call(e, t);
}
var ZT = KT, XT = ZT, JT = t1;
function QT(e, t) {
  return e != null && JT(e, t, XT);
}
var d1 = QT, e3 = ds;
function t3(e, t) {
  return function(r, n) {
    if (r == null)
      return r;
    if (!e3(r))
      return e(r, n);
    for (var i = r.length, a = t ? i : -1, s = Object(r); (t ? a-- : ++a < i) && n(s[a], a, s) !== !1; )
      ;
    return r;
  };
}
var r3 = t3, n3 = Ux, i3 = r3, a3 = i3(n3), s3 = a3;
function o3(e) {
  return e && e.length ? e[0] : void 0;
}
var h1 = o3;
function l3(e) {
  var t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
var vi = l3, c3 = s3;
function u3(e, t) {
  var r;
  return c3(e, function(n, i, a) {
    return r = t(n, i, a), !r;
  }), !!r;
}
var f3 = u3, d3 = qx, h3 = r1, p3 = f3, v3 = ir, g3 = m0;
function m3(e, t, r) {
  var n = v3(e) ? d3 : p3;
  return r && g3(e, t, r) && (t = void 0), n(e, h3(t));
}
var x3 = m3;
const y3 = (e) => Object.prototype.toString.call(e).slice(8, -1), yi = (e) => OD(e) && !isNaN(e.getTime()), Br = (e) => y3(e) === "Object", y0 = d1, Bh = (e, t) => x3(t, (r) => d1(e, r)), Se = (e, t, r = "0") => {
  for (e = e != null ? String(e) : "", t = t || 2; e.length < t; )
    e = `${r}${e}`;
  return e;
}, Wt = (e) => Array.isArray(e), Sr = (e) => Wt(e) && e.length > 0, To = (e) => e == null ? e ?? null : document && dr(e) ? document.querySelector(e) : e.$el ?? e, tn = (e, t, r, n = void 0) => {
  e.removeEventListener(t, r, n);
}, rn = (e, t, r, n = void 0) => (e.addEventListener(t, r, n), () => tn(e, t, r, n)), io = (e, t) => !!e && !!t && (e === t || e.contains(t)), Os = (e, t) => {
  (e.key === " " || e.key === "Enter") && (t(e), e.preventDefault());
}, p1 = (e, ...t) => {
  const r = {};
  let n;
  for (n in e)
    t.includes(n) || (r[n] = e[n]);
  return r;
}, v1 = (e, t) => {
  const r = {};
  return t.forEach((n) => {
    n in e && (r[n] = e[n]);
  }), r;
};
function b3(e, t, r) {
  return Math.min(Math.max(e, t), r);
}
const Mo = () => {
  function e() {
    return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
  }
  return `${e() + e()}-${e()}-${e()}-${e()}-${e()}${e()}${e()}`;
}, _3 = ["base", "start", "end", "startEnd"], w3 = [
  "class",
  "wrapperClass",
  "contentClass",
  "style",
  "contentStyle",
  "color",
  "fillMode"
], $3 = { base: {}, start: {}, end: {} };
function b0(e, t, r = $3) {
  let n = e, i = {};
  t === !0 || dr(t) ? (n = dr(t) ? t : n, i = { ...r }) : Br(t) && (Bh(t, _3) ? i = { ...t } : i = {
    base: { ...t },
    start: { ...t },
    end: { ...t }
  });
  const a = Ga(
    i,
    { start: i.startEnd, end: i.startEnd },
    r
  );
  return Object.entries(a).forEach(([s, o]) => {
    let l = n;
    o === !0 || dr(o) ? (l = dr(o) ? o : l, a[s] = { color: l }) : Br(o) && (Bh(o, w3) ? a[s] = { ...o } : a[s] = {}), Ga(a[s], { color: l });
  }), a;
}
class D3 {
  constructor() {
    re(this, "type", "highlight");
  }
  normalizeConfig(t, r) {
    return b0(t, r, {
      base: { fillMode: "light" },
      start: { fillMode: "solid" },
      end: { fillMode: "solid" }
    });
  }
  prepareRender(t) {
    t.highlights = [], t.content || (t.content = []);
  }
  render({ data: t, onStart: r, onEnd: n }, i) {
    const { key: a, highlight: s } = t;
    if (!s)
      return;
    const { highlights: o } = i, { base: l, start: c, end: u } = s;
    r && n ? o.push({
      ...c,
      key: a,
      wrapperClass: `vc-day-layer vc-day-box-center-center vc-attr vc-${c.color}`,
      class: [`vc-highlight vc-highlight-bg-${c.fillMode}`, c.class],
      contentClass: [
        `vc-attr vc-highlight-content-${c.fillMode} vc-${c.color}`,
        c.contentClass
      ]
    }) : r ? (o.push({
      ...l,
      key: `${a}-base`,
      wrapperClass: `vc-day-layer vc-day-box-right-center vc-attr vc-${l.color}`,
      class: [
        `vc-highlight vc-highlight-base-start vc-highlight-bg-${l.fillMode}`,
        l.class
      ]
    }), o.push({
      ...c,
      key: a,
      wrapperClass: `vc-day-layer vc-day-box-center-center vc-attr vc-${c.color}`,
      class: [`vc-highlight vc-highlight-bg-${c.fillMode}`, c.class],
      contentClass: [
        `vc-attr vc-highlight-content-${c.fillMode} vc-${c.color}`,
        c.contentClass
      ]
    })) : n ? (o.push({
      ...l,
      key: `${a}-base`,
      wrapperClass: `vc-day-layer vc-day-box-left-center vc-attr vc-${l.color}`,
      class: [
        `vc-highlight vc-highlight-base-end vc-highlight-bg-${l.fillMode}`,
        l.class
      ]
    }), o.push({
      ...u,
      key: a,
      wrapperClass: `vc-day-layer vc-day-box-center-center vc-attr vc-${u.color}`,
      class: [`vc-highlight vc-highlight-bg-${u.fillMode}`, u.class],
      contentClass: [
        `vc-attr vc-highlight-content-${u.fillMode} vc-${u.color}`,
        u.contentClass
      ]
    })) : o.push({
      ...l,
      key: `${a}-middle`,
      wrapperClass: `vc-day-layer vc-day-box-center-center vc-attr vc-${l.color}`,
      class: [
        `vc-highlight vc-highlight-base-middle vc-highlight-bg-${l.fillMode}`,
        l.class
      ],
      contentClass: [
        `vc-attr vc-highlight-content-${l.fillMode} vc-${l.color}`,
        l.contentClass
      ]
    });
  }
}
class _0 {
  constructor(t, r) {
    re(this, "type", ""), re(this, "collectionType", ""), this.type = t, this.collectionType = r;
  }
  normalizeConfig(t, r) {
    return b0(t, r);
  }
  prepareRender(t) {
    t[this.collectionType] = [];
  }
  render({ data: t, onStart: r, onEnd: n }, i) {
    const { key: a } = t, s = t[this.type];
    if (!a || !s)
      return;
    const o = i[this.collectionType], { base: l, start: c, end: u } = s;
    r ? o.push({
      ...c,
      key: a,
      class: [
        `vc-${this.type} vc-${this.type}-start vc-${c.color} vc-attr`,
        c.class
      ]
    }) : n ? o.push({
      ...u,
      key: a,
      class: [
        `vc-${this.type} vc-${this.type}-end vc-${u.color} vc-attr`,
        u.class
      ]
    }) : o.push({
      ...l,
      key: a,
      class: [
        `vc-${this.type} vc-${this.type}-base vc-${l.color} vc-attr`,
        l.class
      ]
    });
  }
}
class E3 extends _0 {
  constructor() {
    super("content", "content");
  }
  normalizeConfig(t, r) {
    return b0("base", r);
  }
}
class A3 extends _0 {
  constructor() {
    super("dot", "dots");
  }
}
class C3 extends _0 {
  constructor() {
    super("bar", "bars");
  }
}
class S3 {
  constructor(t) {
    re(this, "color"), re(this, "renderers", [
      new E3(),
      new D3(),
      new A3(),
      new C3()
    ]), this.color = t;
  }
  normalizeGlyphs(t) {
    this.renderers.forEach((r) => {
      const n = r.type;
      t[n] != null && (t[n] = r.normalizeConfig(this.color, t[n]));
    });
  }
  prepareRender(t = {}) {
    return this.renderers.forEach((r) => {
      r.prepareRender(t);
    }), t;
  }
  render(t, r) {
    this.renderers.forEach((n) => {
      n.render(t, r);
    });
  }
}
const k3 = 300, O3 = 60, F3 = 80, T3 = {
  maxSwipeTime: k3,
  minHorizontalSwipeDistance: O3,
  maxVerticalSwipeDistance: F3
}, M3 = "MMMM YYYY", P3 = "W", B3 = "MMM", I3 = "h A", R3 = [
  "L",
  "YYYY-MM-DD",
  "YYYY/MM/DD"
], N3 = [
  "L h:mm A",
  "YYYY-MM-DD h:mm A",
  "YYYY/MM/DD h:mm A"
], L3 = [
  "L HH:mm",
  "YYYY-MM-DD HH:mm",
  "YYYY/MM/DD HH:mm"
], j3 = [
  "h:mm A"
], z3 = [
  "HH:mm"
], H3 = "WWW, MMM D, YYYY", V3 = [
  "L",
  "YYYY-MM-DD",
  "YYYY/MM/DD"
], Y3 = "iso", W3 = "YYYY-MM-DDTHH:mm:ss.SSSZ", U3 = {
  title: M3,
  weekdays: P3,
  navMonths: B3,
  hours: I3,
  input: R3,
  inputDateTime: N3,
  inputDateTime24hr: L3,
  inputTime: j3,
  inputTime24hr: z3,
  dayPopover: H3,
  data: V3,
  model: Y3,
  iso: W3
}, Ir = {
  // Arabic
  ar: { dow: 7, L: "D/‏M/‏YYYY" },
  // Bulgarian
  bg: { dow: 2, L: "D.MM.YYYY" },
  // Catalan
  ca: { dow: 2, L: "DD/MM/YYYY" },
  // Chinese (China)
  "zh-CN": { dow: 2, L: "YYYY/MM/DD" },
  // Chinese (Taiwan)
  "zh-TW": { dow: 1, L: "YYYY/MM/DD" },
  // Croatian
  hr: { dow: 2, L: "DD.MM.YYYY" },
  // Czech
  cs: { dow: 2, L: "DD.MM.YYYY" },
  // Danish
  da: { dow: 2, L: "DD.MM.YYYY" },
  // Dutch
  nl: { dow: 2, L: "DD-MM-YYYY" },
  // English (US)
  "en-US": { dow: 1, L: "MM/DD/YYYY" },
  // English (Australia)
  "en-AU": { dow: 2, L: "DD/MM/YYYY" },
  // English (Canada)
  "en-CA": { dow: 1, L: "YYYY-MM-DD" },
  // English (Great Britain)
  "en-GB": { dow: 2, L: "DD/MM/YYYY" },
  // English (Ireland)
  "en-IE": { dow: 2, L: "DD-MM-YYYY" },
  // English (New Zealand)
  "en-NZ": { dow: 2, L: "DD/MM/YYYY" },
  // English (South Africa)
  "en-ZA": { dow: 1, L: "YYYY/MM/DD" },
  // Esperanto
  eo: { dow: 2, L: "YYYY-MM-DD" },
  // Estonian
  et: { dow: 2, L: "DD.MM.YYYY" },
  // Finnish
  fi: { dow: 2, L: "DD.MM.YYYY" },
  // French
  fr: { dow: 2, L: "DD/MM/YYYY" },
  // French (Canada)
  "fr-CA": { dow: 1, L: "YYYY-MM-DD" },
  // French (Switzerland)
  "fr-CH": { dow: 2, L: "DD.MM.YYYY" },
  // German
  de: { dow: 2, L: "DD.MM.YYYY" },
  // Hebrew
  he: { dow: 1, L: "DD.MM.YYYY" },
  // Indonesian
  id: { dow: 2, L: "DD/MM/YYYY" },
  // Italian
  it: { dow: 2, L: "DD/MM/YYYY" },
  // Japanese
  ja: { dow: 1, L: "YYYY年M月D日" },
  // Korean
  ko: { dow: 1, L: "YYYY.MM.DD" },
  // Latvian
  lv: { dow: 2, L: "DD.MM.YYYY" },
  // Lithuanian
  lt: { dow: 2, L: "DD.MM.YYYY" },
  // Macedonian
  mk: { dow: 2, L: "D.MM.YYYY" },
  // Norwegian
  nb: { dow: 2, L: "D. MMMM YYYY" },
  nn: { dow: 2, L: "D. MMMM YYYY" },
  // Polish
  pl: { dow: 2, L: "DD.MM.YYYY" },
  // Portuguese
  pt: { dow: 2, L: "DD/MM/YYYY" },
  // Romanian
  ro: { dow: 2, L: "DD.MM.YYYY" },
  // Russian
  ru: { dow: 2, L: "DD.MM.YYYY" },
  // Slovak
  sk: { dow: 2, L: "DD.MM.YYYY" },
  // Spanish (Spain)
  "es-ES": { dow: 2, L: "DD/MM/YYYY" },
  // Spanish (Mexico)
  "es-MX": { dow: 2, L: "DD/MM/YYYY" },
  // Swedish
  sv: { dow: 2, L: "YYYY-MM-DD" },
  // Thai
  th: { dow: 1, L: "DD/MM/YYYY" },
  // Turkish
  tr: { dow: 2, L: "DD.MM.YYYY" },
  // Ukrainian
  uk: { dow: 2, L: "DD.MM.YYYY" },
  // Vietnam
  vi: { dow: 2, L: "DD/MM/YYYY" }
};
Ir.en = Ir["en-US"];
Ir.es = Ir["es-ES"];
Ir.no = Ir.nb;
Ir.zh = Ir["zh-CN"];
const q3 = Object.entries(Ir).reduce(
  (e, [t, { dow: r, L: n }]) => (e[t] = {
    id: t,
    firstDayOfWeek: r,
    masks: { L: n }
  }, e),
  {}
), G3 = {
  componentPrefix: "V",
  color: "blue",
  isDark: !1,
  navVisibility: "click",
  titlePosition: "center",
  transition: "slide-h",
  touch: T3,
  masks: U3,
  locales: q3,
  datePicker: {
    updateOnInput: !0,
    inputDebounce: 1e3,
    popover: {
      visibility: "hover-focus",
      placement: "bottom-start",
      isInteractive: !0
    }
  }
}, Yu = Ce(G3), K3 = M(() => SF(Yu.locales, (e) => (e.masks = Ga(e.masks, Yu.masks), e))), fn = (e) => typeof window < "u" && y0(window.__vcalendar__, e) ? Fn(window.__vcalendar__, e) : Fn(Yu, e);
var Po = {}, Z3 = {
  get exports() {
    return Po;
  },
  set exports(e) {
    Po = e;
  }
}, Bo = {}, X3 = {
  get exports() {
    return Bo;
  },
  set exports(e) {
    Bo = e;
  }
};
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = r;
  function r(n) {
    if (n === null || n === !0 || n === !1)
      return NaN;
    var i = Number(n);
    return isNaN(i) ? i : i < 0 ? Math.ceil(i) : Math.floor(i);
  }
  e.exports = t.default;
})(X3, Bo);
var Io = {}, J3 = {
  get exports() {
    return Io;
  },
  set exports(e) {
    Io = e;
  }
};
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = r;
  function r(n) {
    var i = new Date(Date.UTC(n.getFullYear(), n.getMonth(), n.getDate(), n.getHours(), n.getMinutes(), n.getSeconds(), n.getMilliseconds()));
    return i.setUTCFullYear(n.getFullYear()), n.getTime() - i.getTime();
  }
  e.exports = t.default;
})(J3, Io);
var Ro = {}, Q3 = {
  get exports() {
    return Ro;
  },
  set exports(e) {
    Ro = e;
  }
}, No = {}, eM = {
  get exports() {
    return No;
  },
  set exports(e) {
    No = e;
  }
};
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = r;
  function r(l, c) {
    var u = o(c);
    return u.formatToParts ? i(u, l) : a(u, l);
  }
  var n = {
    year: 0,
    month: 1,
    day: 2,
    hour: 3,
    minute: 4,
    second: 5
  };
  function i(l, c) {
    try {
      for (var u = l.formatToParts(c), f = [], d = 0; d < u.length; d++) {
        var h = n[u[d].type];
        h >= 0 && (f[h] = parseInt(u[d].value, 10));
      }
      return f;
    } catch (p) {
      if (p instanceof RangeError)
        return [NaN];
      throw p;
    }
  }
  function a(l, c) {
    var u = l.format(c).replace(/\u200E/g, ""), f = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(u);
    return [f[3], f[1], f[2], f[4], f[5], f[6]];
  }
  var s = {};
  function o(l) {
    if (!s[l]) {
      var c = new Intl.DateTimeFormat("en-US", {
        hour12: !1,
        timeZone: "America/New_York",
        year: "numeric",
        month: "numeric",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
      }).format(/* @__PURE__ */ new Date("2014-06-25T04:00:00.123Z")), u = c === "06/25/2014, 00:00:00" || c === "‎06‎/‎25‎/‎2014‎ ‎00‎:‎00‎:‎00";
      s[l] = u ? new Intl.DateTimeFormat("en-US", {
        hour12: !1,
        timeZone: l,
        year: "numeric",
        month: "numeric",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
      }) : new Intl.DateTimeFormat("en-US", {
        hourCycle: "h23",
        timeZone: l,
        year: "numeric",
        month: "numeric",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
      });
    }
    return s[l];
  }
  e.exports = t.default;
})(eM, No);
var Lo = {}, tM = {
  get exports() {
    return Lo;
  },
  set exports(e) {
    Lo = e;
  }
};
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = r;
  function r(n, i, a, s, o, l, c) {
    var u = /* @__PURE__ */ new Date(0);
    return u.setUTCFullYear(n, i, a), u.setUTCHours(s, o, l, c), u;
  }
  e.exports = t.default;
})(tM, Lo);
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = l;
  var r = i(No), n = i(Lo);
  function i(v) {
    return v && v.__esModule ? v : { default: v };
  }
  var a = 36e5, s = 6e4, o = {
    timezone: /([Z+-].*)$/,
    timezoneZ: /^(Z)$/,
    timezoneHH: /^([+-]\d{2})$/,
    timezoneHHMM: /^([+-]\d{2}):?(\d{2})$/
  };
  function l(v, g, m) {
    var y, _;
    if (!v || (y = o.timezoneZ.exec(v), y))
      return 0;
    var x;
    if (y = o.timezoneHH.exec(v), y)
      return x = parseInt(y[1], 10), d(x) ? -(x * a) : NaN;
    if (y = o.timezoneHHMM.exec(v), y) {
      x = parseInt(y[1], 10);
      var b = parseInt(y[2], 10);
      return d(x, b) ? (_ = Math.abs(x) * a + b * s, x > 0 ? -_ : _) : NaN;
    }
    if (p(v)) {
      g = new Date(g || Date.now());
      var w = m ? g : c(g), E = u(w, v), $ = m ? E : f(g, E, v);
      return -$;
    }
    return NaN;
  }
  function c(v) {
    return (0, n.default)(v.getFullYear(), v.getMonth(), v.getDate(), v.getHours(), v.getMinutes(), v.getSeconds(), v.getMilliseconds());
  }
  function u(v, g) {
    var m = (0, r.default)(v, g), y = (0, n.default)(m[0], m[1] - 1, m[2], m[3] % 24, m[4], m[5], 0).getTime(), _ = v.getTime(), x = _ % 1e3;
    return _ -= x >= 0 ? x : 1e3 + x, y - _;
  }
  function f(v, g, m) {
    var y = v.getTime(), _ = y - g, x = u(new Date(_), m);
    if (g === x)
      return g;
    _ -= x - g;
    var b = u(new Date(_), m);
    return x === b ? x : Math.max(x, b);
  }
  function d(v, g) {
    return -23 <= v && v <= 23 && (g == null || 0 <= g && g <= 59);
  }
  var h = {};
  function p(v) {
    if (h[v])
      return !0;
    try {
      return new Intl.DateTimeFormat(void 0, {
        timeZone: v
      }), h[v] = !0, !0;
    } catch {
      return !1;
    }
  }
  e.exports = t.default;
})(Q3, Ro);
var jo = {}, rM = {
  get exports() {
    return jo;
  },
  set exports(e) {
    jo = e;
  }
};
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = void 0;
  var r = /(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/, n = r;
  t.default = n, e.exports = t.default;
})(rM, jo);
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = f;
  var r = s(Bo), n = s(Io), i = s(Ro), a = s(jo);
  function s($) {
    return $ && $.__esModule ? $ : { default: $ };
  }
  var o = 36e5, l = 6e4, c = 2, u = {
    dateTimePattern: /^([0-9W+-]+)(T| )(.*)/,
    datePattern: /^([0-9W+-]+)(.*)/,
    plainTime: /:/,
    // year tokens
    YY: /^(\d{2})$/,
    YYY: [
      /^([+-]\d{2})$/,
      // 0 additional digits
      /^([+-]\d{3})$/,
      // 1 additional digit
      /^([+-]\d{4})$/
      // 2 additional digits
    ],
    YYYY: /^(\d{4})/,
    YYYYY: [
      /^([+-]\d{4})/,
      // 0 additional digits
      /^([+-]\d{5})/,
      // 1 additional digit
      /^([+-]\d{6})/
      // 2 additional digits
    ],
    // date tokens
    MM: /^-(\d{2})$/,
    DDD: /^-?(\d{3})$/,
    MMDD: /^-?(\d{2})-?(\d{2})$/,
    Www: /^-?W(\d{2})$/,
    WwwD: /^-?W(\d{2})-?(\d{1})$/,
    HH: /^(\d{2}([.,]\d*)?)$/,
    HHMM: /^(\d{2}):?(\d{2}([.,]\d*)?)$/,
    HHMMSS: /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,
    // time zone tokens (to identify the presence of a tz)
    timeZone: a.default
  };
  function f($, C) {
    if (arguments.length < 1)
      throw new TypeError("1 argument required, but only " + arguments.length + " present");
    if ($ === null)
      return /* @__PURE__ */ new Date(NaN);
    var D = C || {}, A = D.additionalDigits == null ? c : (0, r.default)(D.additionalDigits);
    if (A !== 2 && A !== 1 && A !== 0)
      throw new RangeError("additionalDigits must be 0, 1 or 2");
    if ($ instanceof Date || typeof $ == "object" && Object.prototype.toString.call($) === "[object Date]")
      return new Date($.getTime());
    if (typeof $ == "number" || Object.prototype.toString.call($) === "[object Number]")
      return new Date($);
    if (!(typeof $ == "string" || Object.prototype.toString.call($) === "[object String]"))
      return /* @__PURE__ */ new Date(NaN);
    var S = d($), k = h(S.date, A), j = k.year, P = k.restDateString, H = p(P, j);
    if (isNaN(H))
      return /* @__PURE__ */ new Date(NaN);
    if (H) {
      var K = H.getTime(), X = 0, Z;
      if (S.time && (X = v(S.time), isNaN(X)))
        return /* @__PURE__ */ new Date(NaN);
      if (S.timeZone || D.timeZone) {
        if (Z = (0, i.default)(S.timeZone || D.timeZone, new Date(K + X)), isNaN(Z))
          return /* @__PURE__ */ new Date(NaN);
      } else
        Z = (0, n.default)(new Date(K + X)), Z = (0, n.default)(new Date(K + X + Z));
      return new Date(K + X + Z);
    } else
      return /* @__PURE__ */ new Date(NaN);
  }
  function d($) {
    var C = {}, D = u.dateTimePattern.exec($), A;
    if (D ? (C.date = D[1], A = D[3]) : (D = u.datePattern.exec($), D ? (C.date = D[1], A = D[2]) : (C.date = null, A = $)), A) {
      var S = u.timeZone.exec(A);
      S ? (C.time = A.replace(S[1], ""), C.timeZone = S[1].trim()) : C.time = A;
    }
    return C;
  }
  function h($, C) {
    var D = u.YYY[C], A = u.YYYYY[C], S;
    if (S = u.YYYY.exec($) || A.exec($), S) {
      var k = S[1];
      return {
        year: parseInt(k, 10),
        restDateString: $.slice(k.length)
      };
    }
    if (S = u.YY.exec($) || D.exec($), S) {
      var j = S[1];
      return {
        year: parseInt(j, 10) * 100,
        restDateString: $.slice(j.length)
      };
    }
    return {
      year: null
    };
  }
  function p($, C) {
    if (C === null)
      return null;
    var D, A, S, k;
    if ($.length === 0)
      return A = /* @__PURE__ */ new Date(0), A.setUTCFullYear(C), A;
    if (D = u.MM.exec($), D)
      return A = /* @__PURE__ */ new Date(0), S = parseInt(D[1], 10) - 1, x(C, S) ? (A.setUTCFullYear(C, S), A) : /* @__PURE__ */ new Date(NaN);
    if (D = u.DDD.exec($), D) {
      A = /* @__PURE__ */ new Date(0);
      var j = parseInt(D[1], 10);
      return b(C, j) ? (A.setUTCFullYear(C, 0, j), A) : /* @__PURE__ */ new Date(NaN);
    }
    if (D = u.MMDD.exec($), D) {
      A = /* @__PURE__ */ new Date(0), S = parseInt(D[1], 10) - 1;
      var P = parseInt(D[2], 10);
      return x(C, S, P) ? (A.setUTCFullYear(C, S, P), A) : /* @__PURE__ */ new Date(NaN);
    }
    if (D = u.Www.exec($), D)
      return k = parseInt(D[1], 10) - 1, w(C, k) ? g(C, k) : /* @__PURE__ */ new Date(NaN);
    if (D = u.WwwD.exec($), D) {
      k = parseInt(D[1], 10) - 1;
      var H = parseInt(D[2], 10) - 1;
      return w(C, k, H) ? g(C, k, H) : /* @__PURE__ */ new Date(NaN);
    }
    return null;
  }
  function v($) {
    var C, D, A;
    if (C = u.HH.exec($), C)
      return D = parseFloat(C[1].replace(",", ".")), E(D) ? D % 24 * o : NaN;
    if (C = u.HHMM.exec($), C)
      return D = parseInt(C[1], 10), A = parseFloat(C[2].replace(",", ".")), E(D, A) ? D % 24 * o + A * l : NaN;
    if (C = u.HHMMSS.exec($), C) {
      D = parseInt(C[1], 10), A = parseInt(C[2], 10);
      var S = parseFloat(C[3].replace(",", "."));
      return E(D, A, S) ? D % 24 * o + A * l + S * 1e3 : NaN;
    }
    return null;
  }
  function g($, C, D) {
    C = C || 0, D = D || 0;
    var A = /* @__PURE__ */ new Date(0);
    A.setUTCFullYear($, 0, 4);
    var S = A.getUTCDay() || 7, k = C * 7 + D + 1 - S;
    return A.setUTCDate(A.getUTCDate() + k), A;
  }
  var m = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], y = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  function _($) {
    return $ % 400 === 0 || $ % 4 === 0 && $ % 100 !== 0;
  }
  function x($, C, D) {
    if (C < 0 || C > 11)
      return !1;
    if (D != null) {
      if (D < 1)
        return !1;
      var A = _($);
      if (A && D > y[C] || !A && D > m[C])
        return !1;
    }
    return !0;
  }
  function b($, C) {
    if (C < 1)
      return !1;
    var D = _($);
    return !(D && C > 366 || !D && C > 365);
  }
  function w($, C, D) {
    return !(C < 0 || C > 52 || D != null && (D < 0 || D > 6));
  }
  function E($, C, D) {
    return !($ != null && ($ < 0 || $ >= 25) || C != null && (C < 0 || C >= 60) || D != null && (D < 0 || D >= 60));
  }
  e.exports = t.default;
})(Z3, Po);
const nM = /* @__PURE__ */ O$(Po);
function yt(e, t) {
  if (t.length < e)
    throw new TypeError(e + " argument" + (e > 1 ? "s" : "") + " required, but only " + t.length + " present");
}
function ao(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? ao = function(r) {
    return typeof r;
  } : ao = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, ao(e);
}
function jr(e) {
  yt(1, arguments);
  var t = Object.prototype.toString.call(e);
  return e instanceof Date || ao(e) === "object" && t === "[object Date]" ? new Date(e.getTime()) : typeof e == "number" || t === "[object Number]" ? new Date(e) : ((typeof e == "string" || t === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), /* @__PURE__ */ new Date(NaN));
}
function Ki(e) {
  if (e === null || e === !0 || e === !1)
    return NaN;
  var t = Number(e);
  return isNaN(t) ? t : t < 0 ? Math.ceil(t) : Math.floor(t);
}
var iM = {};
function w0() {
  return iM;
}
function Ln(e, t) {
  var r, n, i, a, s, o, l, c;
  yt(1, arguments);
  var u = w0(), f = Ki((r = (n = (i = (a = t == null ? void 0 : t.weekStartsOn) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (o = s.options) === null || o === void 0 ? void 0 : o.weekStartsOn) !== null && i !== void 0 ? i : u.weekStartsOn) !== null && n !== void 0 ? n : (l = u.locale) === null || l === void 0 || (c = l.options) === null || c === void 0 ? void 0 : c.weekStartsOn) !== null && r !== void 0 ? r : 0);
  if (!(f >= 0 && f <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var d = jr(e), h = d.getDay(), p = (h < f ? 7 : 0) + h - f;
  return d.setDate(d.getDate() - p), d.setHours(0, 0, 0, 0), d;
}
function Ih(e) {
  var t = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  return t.setUTCFullYear(e.getFullYear()), e.getTime() - t.getTime();
}
var aM = 6048e5;
function sM(e, t, r) {
  yt(2, arguments);
  var n = Ln(e, r), i = Ln(t, r), a = n.getTime() - Ih(n), s = i.getTime() - Ih(i);
  return Math.round((a - s) / aM);
}
function oM(e) {
  yt(1, arguments);
  var t = jr(e), r = t.getMonth();
  return t.setFullYear(t.getFullYear(), r + 1, 0), t.setHours(0, 0, 0, 0), t;
}
function lM(e) {
  yt(1, arguments);
  var t = jr(e);
  return t.setDate(1), t.setHours(0, 0, 0, 0), t;
}
function cM(e, t) {
  return yt(1, arguments), sM(oM(e), lM(e), t) + 1;
}
function uM(e, t) {
  var r, n, i, a, s, o, l, c;
  yt(1, arguments);
  var u = jr(e), f = u.getFullYear(), d = w0(), h = Ki((r = (n = (i = (a = t == null ? void 0 : t.firstWeekContainsDate) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (o = s.options) === null || o === void 0 ? void 0 : o.firstWeekContainsDate) !== null && i !== void 0 ? i : d.firstWeekContainsDate) !== null && n !== void 0 ? n : (l = d.locale) === null || l === void 0 || (c = l.options) === null || c === void 0 ? void 0 : c.firstWeekContainsDate) !== null && r !== void 0 ? r : 1);
  if (!(h >= 1 && h <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var p = /* @__PURE__ */ new Date(0);
  p.setFullYear(f + 1, 0, h), p.setHours(0, 0, 0, 0);
  var v = Ln(p, t), g = /* @__PURE__ */ new Date(0);
  g.setFullYear(f, 0, h), g.setHours(0, 0, 0, 0);
  var m = Ln(g, t);
  return u.getTime() >= v.getTime() ? f + 1 : u.getTime() >= m.getTime() ? f : f - 1;
}
function fM(e, t) {
  var r, n, i, a, s, o, l, c;
  yt(1, arguments);
  var u = w0(), f = Ki((r = (n = (i = (a = t == null ? void 0 : t.firstWeekContainsDate) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (o = s.options) === null || o === void 0 ? void 0 : o.firstWeekContainsDate) !== null && i !== void 0 ? i : u.firstWeekContainsDate) !== null && n !== void 0 ? n : (l = u.locale) === null || l === void 0 || (c = l.options) === null || c === void 0 ? void 0 : c.firstWeekContainsDate) !== null && r !== void 0 ? r : 1), d = uM(e, t), h = /* @__PURE__ */ new Date(0);
  h.setFullYear(d, 0, f), h.setHours(0, 0, 0, 0);
  var p = Ln(h, t);
  return p;
}
var dM = 6048e5;
function hM(e, t) {
  yt(1, arguments);
  var r = jr(e), n = Ln(r, t).getTime() - fM(r, t).getTime();
  return Math.round(n / dM) + 1;
}
function zo(e) {
  return yt(1, arguments), Ln(e, {
    weekStartsOn: 1
  });
}
function pM(e) {
  yt(1, arguments);
  var t = jr(e), r = t.getFullYear(), n = /* @__PURE__ */ new Date(0);
  n.setFullYear(r + 1, 0, 4), n.setHours(0, 0, 0, 0);
  var i = zo(n), a = /* @__PURE__ */ new Date(0);
  a.setFullYear(r, 0, 4), a.setHours(0, 0, 0, 0);
  var s = zo(a);
  return t.getTime() >= i.getTime() ? r + 1 : t.getTime() >= s.getTime() ? r : r - 1;
}
function vM(e) {
  yt(1, arguments);
  var t = pM(e), r = /* @__PURE__ */ new Date(0);
  r.setFullYear(t, 0, 4), r.setHours(0, 0, 0, 0);
  var n = zo(r);
  return n;
}
var gM = 6048e5;
function mM(e) {
  yt(1, arguments);
  var t = jr(e), r = zo(t).getTime() - vM(t).getTime();
  return Math.round(r / gM) + 1;
}
function $t(e, t) {
  yt(2, arguments);
  var r = jr(e), n = Ki(t);
  return isNaN(n) ? /* @__PURE__ */ new Date(NaN) : (n && r.setDate(r.getDate() + n), r);
}
function Ho(e, t) {
  yt(2, arguments);
  var r = jr(e), n = Ki(t);
  if (isNaN(n))
    return /* @__PURE__ */ new Date(NaN);
  if (!n)
    return r;
  var i = r.getDate(), a = new Date(r.getTime());
  a.setMonth(r.getMonth() + n + 1, 0);
  var s = a.getDate();
  return i >= s ? a : (r.setFullYear(a.getFullYear(), a.getMonth(), i), r);
}
function Rh(e, t) {
  yt(2, arguments);
  var r = Ki(t);
  return Ho(e, r * 12);
}
var fi = /* @__PURE__ */ ((e) => (e.Any = "any", e.All = "all", e))(fi || {}), g1 = /* @__PURE__ */ ((e) => (e.Days = "days", e.Weeks = "weeks", e.Months = "months", e.Years = "years", e))(g1 || {}), m1 = /* @__PURE__ */ ((e) => (e.Days = "days", e.Weekdays = "weekdays", e.Weeks = "weeks", e.Months = "months", e.Years = "years", e))(m1 || {}), x1 = /* @__PURE__ */ ((e) => (e.OrdinalWeekdays = "ordinalWeekdays", e))(x1 || {});
class xM {
  constructor(t, r, n) {
    re(this, "validated", !0), this.type = t, this.interval = r, this.from = n, this.from || (console.error(
      'A valid "from" date is required for date interval rule. This rule will be skipped.'
    ), this.validated = !1);
  }
  passes(t) {
    if (!this.validated)
      return !0;
    const { date: r } = t;
    switch (this.type) {
      case "days":
        return $0(this.from.date, r) % this.interval === 0;
      case "weeks":
        return IM(this.from.date, r) % this.interval === 0;
      case "months":
        return RM(this.from.date, r) % this.interval === 0;
      case "years":
        return A1(this.from.date, r) % this.interval === 0;
      default:
        return !1;
    }
  }
}
class Zi {
  constructor(t, r, n, i) {
    re(this, "components", []), this.type = t, this.validator = n, this.getter = i, this.components = this.normalizeComponents(r);
  }
  static create(t, r) {
    switch (t) {
      case "days":
        return new yM(r);
      case "weekdays":
        return new bM(r);
      case "weeks":
        return new _M(r);
      case "months":
        return new wM(r);
      case "years":
        return new $M(r);
    }
  }
  normalizeComponents(t) {
    if (this.validator(t))
      return [t];
    if (!Wt(t))
      return [];
    const r = [];
    return t.forEach((n) => {
      if (!this.validator(n)) {
        console.error(
          `Component value ${n} in invalid for "${this.type}" rule. This rule will be skipped.`
        );
        return;
      }
      r.push(n);
    }), r;
  }
  passes(t) {
    return this.getter(t).some((i) => this.components.includes(i));
  }
}
class yM extends Zi {
  constructor(t) {
    super(
      "days",
      t,
      AM,
      ({ day: r, dayFromEnd: n }) => [r, -n]
    );
  }
}
class bM extends Zi {
  constructor(t) {
    super(
      "weekdays",
      t,
      Wu,
      ({ weekday: r }) => [r]
    );
  }
}
class _M extends Zi {
  constructor(t) {
    super(
      "weeks",
      t,
      CM,
      ({ week: r, weekFromEnd: n }) => [r, -n]
    );
  }
}
class wM extends Zi {
  constructor(t) {
    super("months", t, SM, ({ month: r }) => [
      r
    ]);
  }
}
class $M extends Zi {
  constructor(t) {
    super("years", t, nr, ({ year: r }) => [r]);
  }
}
class DM {
  constructor(t, r) {
    re(this, "components"), this.type = t, this.components = this.normalizeComponents(r);
  }
  normalizeArrayConfig(t) {
    const r = [];
    return t.forEach((n, i) => {
      if (nr(n)) {
        if (i === 0)
          return;
        if (!Nh(t[0])) {
          console.error(
            `Ordinal range for "${this.type}" rule is from -5 to -1 or 1 to 5. This rule will be skipped.`
          );
          return;
        }
        if (!Wu(n)) {
          console.error(
            `Acceptable range for "${this.type}" rule is from 1 to 5. This rule will be skipped`
          );
          return;
        }
        r.push([t[0], n]);
      } else
        Wt(n) && r.push(...this.normalizeArrayConfig(n));
    }), r;
  }
  normalizeComponents(t) {
    const r = [];
    return t.forEach((n, i) => {
      if (nr(n)) {
        if (i === 0)
          return;
        if (!Nh(t[0])) {
          console.error(
            `Ordinal range for "${this.type}" rule is from -5 to -1 or 1 to 5. This rule will be skipped.`
          );
          return;
        }
        if (!Wu(n)) {
          console.error(
            `Acceptable range for "${this.type}" rule is from 1 to 5. This rule will be skipped`
          );
          return;
        }
        r.push([t[0], n]);
      } else
        Wt(n) && r.push(...this.normalizeArrayConfig(n));
    }), r;
  }
  passes(t) {
    const { weekday: r, weekdayOrdinal: n, weekdayOrdinalFromEnd: i } = t;
    return this.components.some(
      ([a, s]) => (a === n || a === -i) && r === s
    );
  }
}
class EM {
  constructor(t) {
    re(this, "type", "function"), re(this, "validated", !0), this.fn = t, Yn(t) || (console.error(
      "The function rule requires a valid function. This rule will be skipped."
    ), this.validated = !1);
  }
  passes(t) {
    return this.validated ? this.fn(t) : !0;
  }
}
class Vo {
  constructor(t, r = {}, n) {
    re(this, "validated", !0), re(this, "config"), re(this, "type", fi.Any), re(this, "from"), re(this, "until"), re(this, "rules", []), re(this, "locale", new Wo()), this.parent = n, r.locale && (this.locale = r.locale), this.config = t, Yn(t) ? (this.type = fi.All, this.rules = [new EM(t)]) : Wt(t) ? (this.type = fi.Any, this.rules = t.map((i) => new Vo(i, r, this))) : Br(t) ? (this.type = fi.All, this.from = t.from ? this.locale.getDateParts(t.from) : n == null ? void 0 : n.from, this.until = t.until ? this.locale.getDateParts(t.until) : n == null ? void 0 : n.until, this.rules = this.getObjectRules(t)) : (console.error("Rule group configuration must be an object or an array."), this.validated = !1);
  }
  getObjectRules(t) {
    const r = [];
    if (t.every && (dr(t.every) && (t.every = [1, `${t.every}s`]), Wt(t.every))) {
      const [n = 1, i = g1.Days] = t.every;
      r.push(new xM(i, n, this.from));
    }
    return Object.values(m1).forEach((n) => {
      n in t && r.push(Zi.create(n, t[n]));
    }), Object.values(x1).forEach((n) => {
      n in t && r.push(new DM(n, t[n]));
    }), t.on != null && (Wt(t.on) || (t.on = [t.on]), r.push(
      new Vo(t.on, { locale: this.locale }, this.parent)
    )), r;
  }
  passes(t) {
    return this.validated ? this.from && t.dayIndex <= this.from.dayIndex || this.until && t.dayIndex >= this.until.dayIndex ? !1 : this.type === fi.Any ? this.rules.some((r) => r.passes(t)) : this.rules.every((r) => r.passes(t)) : !0;
  }
}
function AM(e) {
  return nr(e) ? e >= 1 && e <= 31 : !1;
}
function Wu(e) {
  return nr(e) ? e >= 1 && e <= 7 : !1;
}
function CM(e) {
  return nr(e) ? e >= -6 && e <= -1 || e >= 1 && e <= 6 : !1;
}
function SM(e) {
  return nr(e) ? e >= 1 && e <= 12 : !1;
}
function Nh(e) {
  return !(!nr(e) || e < -5 || e > 5 || e === 0);
}
const kM = {
  dateTime: [
    "year",
    "month",
    "day",
    "hours",
    "minutes",
    "seconds",
    "milliseconds"
  ],
  date: ["year", "month", "day"],
  time: ["hours", "minutes", "seconds", "milliseconds"]
}, vt = 7, OM = 6, y1 = 1e3, b1 = y1 * 60, _1 = b1 * 60, so = _1 * 24, FM = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], TM = ["L", "iso"], Ea = {
  milliseconds: [0, 999, 3],
  seconds: [0, 59, 2],
  minutes: [0, 59, 2],
  hours: [0, 23, 2]
}, w1 = /d{1,2}|W{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|Z{1,4}|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g, MM = /\[([^]*?)\]/gm, Lh = {
  D(e) {
    return e.day;
  },
  DD(e) {
    return Se(e.day, 2);
  },
  // Do(d: DateParts, l: Locale) {
  //   return l.DoFn(d.day);
  // },
  d(e) {
    return e.weekday - 1;
  },
  dd(e) {
    return Se(e.weekday - 1, 2);
  },
  W(e, t) {
    return t.dayNamesNarrow[e.weekday - 1];
  },
  WW(e, t) {
    return t.dayNamesShorter[e.weekday - 1];
  },
  WWW(e, t) {
    return t.dayNamesShort[e.weekday - 1];
  },
  WWWW(e, t) {
    return t.dayNames[e.weekday - 1];
  },
  M(e) {
    return e.month;
  },
  MM(e) {
    return Se(e.month, 2);
  },
  MMM(e, t) {
    return t.monthNamesShort[e.month - 1];
  },
  MMMM(e, t) {
    return t.monthNames[e.month - 1];
  },
  YY(e) {
    return String(e.year).substr(2);
  },
  YYYY(e) {
    return Se(e.year, 4);
  },
  h(e) {
    return e.hours % 12 || 12;
  },
  hh(e) {
    return Se(e.hours % 12 || 12, 2);
  },
  H(e) {
    return e.hours;
  },
  HH(e) {
    return Se(e.hours, 2);
  },
  m(e) {
    return e.minutes;
  },
  mm(e) {
    return Se(e.minutes, 2);
  },
  s(e) {
    return e.seconds;
  },
  ss(e) {
    return Se(e.seconds, 2);
  },
  S(e) {
    return Math.round(e.milliseconds / 100);
  },
  SS(e) {
    return Se(Math.round(e.milliseconds / 10), 2);
  },
  SSS(e) {
    return Se(e.milliseconds, 3);
  },
  a(e, t) {
    return e.hours < 12 ? t.amPm[0] : t.amPm[1];
  },
  A(e, t) {
    return e.hours < 12 ? t.amPm[0].toUpperCase() : t.amPm[1].toUpperCase();
  },
  Z() {
    return "Z";
  },
  ZZ(e) {
    const t = e.timezoneOffset;
    return `${t > 0 ? "-" : "+"}${Se(Math.floor(Math.abs(t) / 60), 2)}`;
  },
  ZZZ(e) {
    const t = e.timezoneOffset;
    return `${t > 0 ? "-" : "+"}${Se(
      Math.floor(Math.abs(t) / 60) * 100 + Math.abs(t) % 60,
      4
    )}`;
  },
  ZZZZ(e) {
    const t = e.timezoneOffset;
    return `${t > 0 ? "-" : "+"}${Se(Math.floor(Math.abs(t) / 60), 2)}:${Se(
      Math.abs(t) % 60,
      2
    )}`;
  }
}, Kr = /\d\d?/, PM = /\d{3}/, BM = /\d{4}/, ha = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF/]+(\s*?[\u0600-\u06FF]+){1,2}/i, jh = () => {
}, zh = (e) => (t, r, n) => {
  const i = n[e].indexOf(
    r.charAt(0).toUpperCase() + r.substr(1).toLowerCase()
  );
  ~i && (t.month = i);
}, Oe = {
  D: [
    Kr,
    (e, t) => {
      e.day = t;
    }
  ],
  Do: [
    new RegExp(Kr.source + ha.source),
    (e, t) => {
      e.day = parseInt(t, 10);
    }
  ],
  d: [Kr, jh],
  W: [ha, jh],
  M: [
    Kr,
    (e, t) => {
      e.month = t - 1;
    }
  ],
  MMM: [ha, zh("monthNamesShort")],
  MMMM: [ha, zh("monthNames")],
  YY: [
    Kr,
    (e, t) => {
      const n = +(/* @__PURE__ */ new Date()).getFullYear().toString().substr(0, 2);
      e.year = +`${t > 68 ? n - 1 : n}${t}`;
    }
  ],
  YYYY: [
    BM,
    (e, t) => {
      e.year = t;
    }
  ],
  S: [
    /\d/,
    (e, t) => {
      e.milliseconds = t * 100;
    }
  ],
  SS: [
    /\d{2}/,
    (e, t) => {
      e.milliseconds = t * 10;
    }
  ],
  SSS: [
    PM,
    (e, t) => {
      e.milliseconds = t;
    }
  ],
  h: [
    Kr,
    (e, t) => {
      e.hours = t;
    }
  ],
  m: [
    Kr,
    (e, t) => {
      e.minutes = t;
    }
  ],
  s: [
    Kr,
    (e, t) => {
      e.seconds = t;
    }
  ],
  a: [
    ha,
    (e, t, r) => {
      const n = t.toLowerCase();
      n === r.amPm[0] ? e.isPm = !1 : n === r.amPm[1] && (e.isPm = !0);
    }
  ],
  Z: [
    /[^\s]*?[+-]\d\d:?\d\d|[^\s]*?Z?/,
    (e, t) => {
      t === "Z" && (t = "+00:00");
      const r = `${t}`.match(/([+-]|\d\d)/gi);
      if (r) {
        const n = +r[1] * 60 + parseInt(r[2], 10);
        e.timezoneOffset = r[0] === "+" ? n : -n;
      }
    }
  ]
};
Oe.DD = Oe.D;
Oe.dd = Oe.d;
Oe.WWWW = Oe.WWW = Oe.WW = Oe.W;
Oe.MM = Oe.M;
Oe.mm = Oe.m;
Oe.hh = Oe.H = Oe.HH = Oe.h;
Oe.ss = Oe.s;
Oe.A = Oe.a;
Oe.ZZZZ = Oe.ZZZ = Oe.ZZ = Oe.Z;
function $1(e, t) {
  return (Sr(e) && e || [
    dr(e) && e || "YYYY-MM-DD"
  ]).map(
    (r) => TM.reduce(
      (n, i) => n.replace(i, t.masks[i] || ""),
      r
    )
  );
}
function D1(e) {
  return Br(e) && "year" in e && "month" in e && "day" in e;
}
function Hh(e, t = 1) {
  const r = e.getDay() + 1, n = r >= t ? t - r : -(7 - (t - r));
  return $t(e, n);
}
function E1(e, t, r) {
  const n = Date.UTC(e, t - 1, r);
  return $0(/* @__PURE__ */ new Date(0), new Date(n));
}
function $0(e, t) {
  return Math.round((t.getTime() - e.getTime()) / so);
}
function IM(e, t) {
  return Math.ceil($0(Hh(e), Hh(t)) / 7);
}
function A1(e, t) {
  return t.getUTCFullYear() - e.getUTCFullYear();
}
function RM(e, t) {
  return A1(e, t) * 12 + (t.getMonth() - e.getMonth());
}
function C1(e, t = "") {
  const r = /* @__PURE__ */ new Date(), {
    year: n = r.getFullYear(),
    month: i = r.getMonth() + 1,
    day: a = r.getDate(),
    hours: s = 0,
    minutes: o = 0,
    seconds: l = 0,
    milliseconds: c = 0
  } = e;
  if (t) {
    const u = `${Se(n, 4)}-${Se(i, 2)}-${Se(a, 2)}T${Se(
      s,
      2
    )}:${Se(o, 2)}:${Se(l, 2)}.${Se(c, 3)}`;
    return nM(u, { timeZone: t });
  }
  return new Date(n, i - 1, a, s, o, l, c);
}
function NM(e, t) {
  let r = new Date(e.getTime());
  t.timezone && (r = new Date(
    e.toLocaleString("en-US", { timeZone: t.timezone })
  ), r.setMilliseconds(e.getMilliseconds()));
  const n = r.getMilliseconds(), i = r.getSeconds(), a = r.getMinutes(), s = r.getHours(), o = n + i * y1 + a * b1 + s * _1, l = r.getMonth() + 1, c = r.getFullYear(), u = t.getMonthParts(l, c), f = r.getDate(), d = u.numDays - f + 1, h = r.getDay() + 1, p = Math.floor((f - 1) / 7 + 1), v = Math.floor((u.numDays - f) / 7 + 1), g = Math.ceil(
    (f + Math.abs(u.firstWeekday - u.firstDayOfWeek)) / 7
  ), m = u.numWeeks - g + 1, y = u.weeknumbers[g], _ = E1(c, l, f);
  return {
    milliseconds: n,
    seconds: i,
    minutes: a,
    hours: s,
    time: o,
    day: f,
    dayFromEnd: d,
    weekday: h,
    weekdayOrdinal: p,
    weekdayOrdinalFromEnd: v,
    week: g,
    weekFromEnd: m,
    weeknumber: y,
    month: l,
    year: c,
    date: r,
    dateTime: r.getTime(),
    dayIndex: _,
    timezoneOffset: 0,
    isValid: !0
  };
}
function LM(e, t, r) {
  return `${t}-${e}-${r}`;
}
function jM(e, t, r) {
  const n = t % 4 === 0 && t % 100 !== 0 || t % 400 === 0, i = new Date(t, e - 1, 1), a = i.getDay() + 1, s = e === 2 && n ? 29 : FM[e - 1], o = r - 1, l = cM(i, {
    weekStartsOn: o
  }), c = [], u = [];
  for (let f = 0; f < l; f++) {
    const d = $t(i, f * 7);
    c.push(hM(d, { weekStartsOn: o })), u.push(mM(d));
  }
  return {
    firstDayOfWeek: r,
    firstDayOfMonth: i,
    inLeapYear: n,
    firstWeekday: a,
    numDays: s,
    numWeeks: l,
    month: e,
    year: t,
    weeknumbers: c,
    isoWeeknumbers: u
  };
}
function zM() {
  const e = [];
  for (let i = 0; i < vt; i++)
    e.push(
      C1({
        year: 2020,
        month: 1,
        day: 5 + i,
        hours: 12
      })
    );
  return e;
}
function uc(e, t = void 0) {
  const r = new Intl.DateTimeFormat(t, {
    weekday: e
  });
  return zM().map((n) => r.format(n));
}
function HM() {
  const e = [];
  for (let t = 0; t <= 24; t++)
    e.push(new Date(2e3, 0, 1, t));
  return e;
}
function VM(e = void 0) {
  const t = [
    "second",
    "minute",
    "hour",
    "day",
    "week",
    "month",
    "quarter",
    "year"
  ], r = new Intl.RelativeTimeFormat(e);
  return t.reduce((n, i) => {
    const a = r.formatToParts(100, i);
    return n[i] = a[1].unit, n;
  }, {});
}
function S1() {
  const e = [];
  for (let t = 0; t < 12; t++)
    e.push(new Date(2e3, t, 15));
  return e;
}
function Vh(e, t = void 0) {
  const r = new Intl.DateTimeFormat(t, {
    month: e,
    timeZone: "UTC"
  });
  return S1().map((n) => r.format(n));
}
function YM(e, t, r) {
  return nr(t) ? t === e : Wt(t) ? t.includes(e) : Yn(t) ? t(e, r) : !(t.min != null && t.min > e || t.max != null && t.max < e || t.interval != null && e % t.interval !== 0);
}
function Aa(e, t, r) {
  const n = [], [i, a, s] = t;
  for (let o = i; o <= a; o++)
    (r == null || YM(o, r, e)) && n.push({
      value: o,
      label: Se(o, s)
    });
  return n;
}
function WM(e, t) {
  return {
    milliseconds: Aa(
      e,
      Ea.milliseconds,
      t.milliseconds
    ),
    seconds: Aa(e, Ea.seconds, t.seconds),
    minutes: Aa(e, Ea.minutes, t.minutes),
    hours: Aa(e, Ea.hours, t.hours)
  };
}
function UM(e, t, r, n) {
  const a = Aa(e, t, n).reduce((s, o) => {
    if (o.disabled)
      return s;
    if (isNaN(s))
      return o.value;
    const l = Math.abs(s - r);
    return Math.abs(o.value - r) < l ? o.value : s;
  }, NaN);
  return isNaN(a) ? r : a;
}
function qM(e, t) {
  const r = { ...e };
  return Object.entries(t).forEach(([n, i]) => {
    const a = Ea[n], s = e[n];
    r[n] = UM(
      e,
      a,
      s,
      i
    );
  }), r;
}
function Yh(e, t, r) {
  return $1(t, r).map((i) => {
    if (typeof i != "string")
      throw new Error("Invalid mask");
    let a = e;
    if (a.length > 1e3)
      return !1;
    let s = !0;
    const o = {};
    if (i.replace(w1, (u) => {
      if (Oe[u]) {
        const f = Oe[u], d = a.search(f[0]);
        ~d ? a.replace(f[0], (h) => (f[1](o, h, r), a = a.substr(d + h.length), h)) : s = !1;
      }
      return Oe[u] ? "" : u.slice(1, u.length - 1);
    }), !s)
      return !1;
    const l = /* @__PURE__ */ new Date();
    o.hours != null && (o.isPm === !0 && +o.hours != 12 ? o.hours = +o.hours + 12 : o.isPm === !1 && +o.hours == 12 && (o.hours = 0));
    let c;
    return o.timezoneOffset != null ? (o.minutes = +(o.minutes || 0) - +o.timezoneOffset, c = new Date(
      Date.UTC(
        o.year || l.getFullYear(),
        o.month || 0,
        o.day || 1,
        o.hours || 0,
        o.minutes || 0,
        o.seconds || 0,
        o.milliseconds || 0
      )
    )) : c = r.getDateFromParts({
      year: o.year || l.getFullYear(),
      month: (o.month || 0) + 1,
      day: o.day || 1,
      hours: o.hours || 0,
      minutes: o.minutes || 0,
      seconds: o.seconds || 0,
      milliseconds: o.milliseconds || 0
    }), c;
  }).find((i) => i) || new Date(e);
}
function GM(e, t, r) {
  if (e == null)
    return "";
  let n = $1(t, r)[0];
  /Z$/.test(n) && (r.timezone = "utc");
  const i = [];
  n = n.replace(MM, (s, o) => (i.push(o), "??"));
  const a = r.getDateParts(e);
  return n = n.replace(
    w1,
    (s) => s in Lh ? Lh[s](a, r) : s.slice(1, s.length - 1)
  ), n.replace(/\?\?/g, () => i.shift());
}
const KM = {
  daily: ["year", "month", "day"],
  weekly: ["year", "month", "week"],
  monthly: ["year", "month"]
};
function ZM({
  monthComps: e,
  prevMonthComps: t,
  nextMonthComps: r
}, n) {
  const i = [], {
    firstDayOfWeek: a,
    firstWeekday: s,
    isoWeeknumbers: o,
    weeknumbers: l,
    numDays: c,
    numWeeks: u
  } = e, f = s + (s < a ? vt : 0) - a;
  let d = !0, h = !1, p = !1, v = 0;
  const g = new Intl.DateTimeFormat(n.id, {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric"
  });
  let m = t.numDays - f + 1, y = t.numDays - m + 1, _ = Math.floor((m - 1) / vt + 1), x = 1, b = t.numWeeks, w = 1, E = t.month, $ = t.year;
  const C = /* @__PURE__ */ new Date(), D = C.getDate(), A = C.getMonth() + 1, S = C.getFullYear();
  for (let k = 1; k <= OM; k++) {
    for (let j = 1, P = a; j <= vt; j++, P += P === vt ? 1 - vt : 1) {
      d && P === s && (m = 1, y = e.numDays, _ = Math.floor((m - 1) / vt + 1), x = Math.floor((c - m) / vt + 1), b = 1, w = u, E = e.month, $ = e.year, d = !1, h = !0);
      const H = n.getDateFromParams($, E, m, 0, 0, 0, 0), K = n.getDateFromParams($, E, m, 12, 0, 0, 0), X = n.getDateFromParams(
        $,
        E,
        m,
        23,
        59,
        59,
        999
      ), Z = H, B = `${Se($, 4)}-${Se(E, 2)}-${Se(m, 2)}`, T = j, R = vt - j, N = l[k - 1], F = o[k - 1], te = m === D && E === A && $ === S, J = h && m === 1, be = h && m === c, ee = k === 1, _e = k === u, Xe = j === 1, Qe = j === vt, tt = E1($, E, m);
      i.push({
        locale: n,
        id: B,
        position: ++v,
        label: m.toString(),
        ariaLabel: g.format(new Date($, E - 1, m)),
        day: m,
        dayFromEnd: y,
        weekday: P,
        weekdayPosition: T,
        weekdayPositionFromEnd: R,
        weekdayOrdinal: _,
        weekdayOrdinalFromEnd: x,
        week: b,
        weekFromEnd: w,
        weekPosition: k,
        weeknumber: N,
        isoWeeknumber: F,
        month: E,
        year: $,
        date: Z,
        startDate: H,
        endDate: X,
        noonDate: K,
        dayIndex: tt,
        isToday: te,
        isFirstDay: J,
        isLastDay: be,
        isDisabled: !h,
        isFocusable: !h,
        isFocused: !1,
        inMonth: h,
        inPrevMonth: d,
        inNextMonth: p,
        onTop: ee,
        onBottom: _e,
        onLeft: Xe,
        onRight: Qe,
        classes: [
          `id-${B}`,
          `day-${m}`,
          `day-from-end-${y}`,
          `weekday-${P}`,
          `weekday-position-${T}`,
          `weekday-ordinal-${_}`,
          `weekday-ordinal-from-end-${x}`,
          `week-${b}`,
          `week-from-end-${w}`,
          {
            "is-today": te,
            "is-first-day": J,
            "is-last-day": be,
            "in-month": h,
            "in-prev-month": d,
            "in-next-month": p,
            "on-top": ee,
            "on-bottom": _e,
            "on-left": Xe,
            "on-right": Qe
          }
        ]
      }), h && be ? (h = !1, p = !0, m = 1, y = c, _ = 1, x = Math.floor((c - m) / vt + 1), b = 1, w = r.numWeeks, E = r.month, $ = r.year) : (m++, y--, _ = Math.floor((m - 1) / vt + 1), x = Math.floor((c - m) / vt + 1));
    }
    b++, w--;
  }
  return i;
}
function XM(e, t, r, n) {
  const i = e.reduce((a, s, o) => {
    const l = Math.floor(o / 7);
    let c = a[l];
    return c || (c = {
      id: `week-${l + 1}`,
      title: "",
      week: s.week,
      weekPosition: s.weekPosition,
      weeknumber: s.weeknumber,
      isoWeeknumber: s.isoWeeknumber,
      weeknumberDisplay: t ? s.weeknumber : r ? s.isoWeeknumber : void 0,
      days: []
    }, a[l] = c), c.days.push(s), a;
  }, Array(e.length / vt));
  return i.forEach((a) => {
    const s = a.days[0], o = a.days[a.days.length - 1];
    s.month === o.month ? a.title = `${n.formatDate(s.date, "MMMM YYYY")}` : s.year === o.year ? a.title = `${n.formatDate(
      s.date,
      "MMM"
    )} - ${n.formatDate(o.date, "MMM YYYY")}` : a.title = `${n.formatDate(
      s.date,
      "MMM YYYY"
    )} - ${n.formatDate(o.date, "MMM YYYY")}`;
  }), i;
}
function JM(e, t) {
  return e.days.map((r) => ({
    label: t.formatDate(r.date, t.masks.weekdays),
    weekday: r.weekday
  }));
}
function k1(e, t, r) {
  return v1(
    r.getDateParts(r.toDate(e)),
    KM[t]
  );
}
function O1({ day: e, week: t, month: r, year: n }, i, a, s) {
  if (a === "daily" && e) {
    const o = new Date(n, r - 1, e), l = $t(o, i);
    return {
      day: l.getDate(),
      month: l.getMonth() + 1,
      year: l.getFullYear()
    };
  } else if (a === "weekly" && t) {
    const l = s.getMonthParts(r, n).firstDayOfMonth, c = $t(l, (t - 1 + i) * 7), u = s.getDateParts(c);
    return {
      week: u.week,
      month: u.month,
      year: u.year
    };
  } else {
    const o = new Date(n, r - 1, 1), l = Ho(o, i);
    return {
      month: l.getMonth() + 1,
      year: l.getFullYear()
    };
  }
}
function hr(e) {
  return e != null && e.month != null && e.year != null;
}
function Uu(e, t) {
  return !hr(e) || !hr(t) ? !1 : (e = e, t = t, e.year !== t.year ? e.year < t.year : e.month && t.month && e.month !== t.month ? e.month < t.month : e.week && t.week && e.week !== t.week ? e.week < t.week : e.day && t.day && e.day !== t.day ? e.day < t.day : !1);
}
function Yo(e, t) {
  return !hr(e) || !hr(t) ? !1 : (e = e, t = t, e.year !== t.year ? e.year > t.year : e.month && t.month && e.month !== t.month ? e.month > t.month : e.week && t.week && e.week !== t.week ? e.week > t.week : e.day && t.day && e.day !== t.day ? e.day > t.day : !1);
}
function F1(e, t, r) {
  return (e || !1) && !Uu(e, t) && !Yo(e, r);
}
function QM(e, t) {
  return !e && t || e && !t ? !1 : !e && !t ? !0 : (e = e, t = t, e.year === t.year && e.month === t.month && e.week === t.week && e.day === t.day);
}
function eP(e, t, r, n) {
  if (!hr(e) || !hr(t))
    return [];
  const i = [];
  for (; !Yo(e, t); )
    i.push(e), e = O1(e, 1, r, n);
  return i;
}
function T1(e) {
  const { day: t, week: r, month: n, year: i } = e;
  let a = `${i}-${Se(n, 2)}`;
  return r && (a = `${a}-w${r}`), t && (a = `${a}-${Se(t, 2)}`), a;
}
function tP(e, t) {
  const { month: r, year: n, showWeeknumbers: i, showIsoWeeknumbers: a } = e, s = new Date(n, r - 1, 15), o = t.getMonthParts(r, n), l = t.getPrevMonthParts(r, n), c = t.getNextMonthParts(r, n), u = ZM({ monthComps: o, prevMonthComps: l, nextMonthComps: c }, t), f = XM(u, i, a, t), d = JM(f[0], t);
  return {
    id: T1(e),
    month: r,
    year: n,
    monthTitle: t.formatDate(s, t.masks.title),
    shortMonthLabel: t.formatDate(s, "MMM"),
    monthLabel: t.formatDate(s, "MMMM"),
    shortYearLabel: n.toString().substring(2),
    yearLabel: n.toString(),
    monthComps: o,
    prevMonthComps: l,
    nextMonthComps: c,
    days: u,
    weeks: f,
    weekdays: d
  };
}
function rP(e, t) {
  const { day: r, week: n, view: i, trimWeeks: a } = e, s = {
    ...t,
    ...e,
    title: "",
    viewDays: [],
    viewWeeks: []
  };
  switch (i) {
    case "daily": {
      let o = s.days.find((c) => c.inMonth);
      r ? o = s.days.find((c) => c.day === r && c.inMonth) || o : n && (o = s.days.find((c) => c.week === n && c.inMonth));
      const l = s.weeks[o.week - 1];
      s.viewWeeks = [l], s.viewDays = [o], s.week = o.week, s.weekTitle = l.title, s.day = o.day, s.dayTitle = o.ariaLabel, s.title = s.dayTitle;
      break;
    }
    case "weekly": {
      s.week = n || 1;
      const o = s.weeks[s.week - 1];
      s.viewWeeks = [o], s.viewDays = o.days, s.weekTitle = o.title, s.title = s.weekTitle;
      break;
    }
    default: {
      s.title = s.monthTitle, s.viewWeeks = s.weeks.slice(
        0,
        a ? s.monthComps.numWeeks : void 0
      ), s.viewDays = s.days;
      break;
    }
  }
  return s;
}
let Wh = class {
  constructor(t, r, n) {
    re(this, "keys", []), re(this, "store", {}), this.size = t, this.createKey = r, this.createItem = n;
  }
  get(...t) {
    const r = this.createKey(...t);
    return this.store[r];
  }
  getOrSet(...t) {
    const r = this.createKey(...t);
    if (this.store[r])
      return this.store[r];
    const n = this.createItem(...t);
    if (this.keys.length >= this.size) {
      const i = this.keys.shift();
      i != null && delete this.store[i];
    }
    return this.keys.push(r), this.store[r] = n, n;
  }
};
class bi {
  constructor(t, r = new Wo()) {
    re(this, "order"), re(this, "locale"), re(this, "start", null), re(this, "end", null), re(this, "repeat", null);
    var n;
    this.locale = r;
    const { start: i, end: a, span: s, order: o, repeat: l } = t;
    yi(i) && (this.start = r.getDateParts(i)), yi(a) ? this.end = r.getDateParts(a) : this.start != null && s && (this.end = r.getDateParts($t(this.start.date, s - 1))), this.order = o ?? 0, l && (this.repeat = new Vo(
      {
        from: (n = this.start) == null ? void 0 : n.date,
        ...l
      },
      {
        locale: this.locale
      }
    ));
  }
  static fromMany(t, r) {
    return (Wt(t) ? t : [t]).filter((n) => n).map((n) => bi.from(n, r));
  }
  static from(t, r) {
    if (t instanceof bi)
      return t;
    const n = {
      start: null,
      end: null
    };
    return t != null && (Wt(t) ? (n.start = t[0] ?? null, n.end = t[1] ?? null) : Br(t) ? Object.assign(n, t) : (n.start = t, n.end = t)), n.start != null && (n.start = new Date(n.start)), n.end != null && (n.end = new Date(n.end)), new bi(n, r);
  }
  get opts() {
    const { order: t, locale: r } = this;
    return { order: t, locale: r };
  }
  get hasRepeat() {
    return !!this.repeat;
  }
  get isSingleDay() {
    const { start: t, end: r } = this;
    return t && r && t.year === r.year && t.month === r.month && t.day === r.day;
  }
  get isMultiDay() {
    return !this.isSingleDay;
  }
  get daySpan() {
    return this.start == null || this.end == null ? this.hasRepeat ? 1 : 1 / 0 : this.end.dayIndex - this.start.dayIndex;
  }
  startsOnDay(t) {
    var r, n;
    return ((r = this.start) == null ? void 0 : r.dayIndex) === t.dayIndex || !!((n = this.repeat) != null && n.passes(t));
  }
  intersectsDay(t) {
    return this.intersectsDayRange(t, t);
  }
  intersectsRange(t) {
    var r, n;
    return this.intersectsDayRange(
      ((r = t.start) == null ? void 0 : r.dayIndex) ?? -1 / 0,
      ((n = t.end) == null ? void 0 : n.dayIndex) ?? 1 / 0
    );
  }
  intersectsDayRange(t, r) {
    return !(this.start && this.start.dayIndex > r || this.end && this.end.dayIndex < t);
  }
}
class nP {
  constructor() {
    re(this, "records", {});
  }
  render(t, r, n) {
    var i, a, s, o;
    let l = null;
    const c = n[0].dayIndex, u = n[n.length - 1].dayIndex;
    return r.hasRepeat ? n.forEach((f) => {
      var d, h;
      if (r.startsOnDay(f)) {
        const p = r.daySpan < 1 / 0 ? r.daySpan : 1;
        l = {
          startDay: f.dayIndex,
          startTime: ((d = r.start) == null ? void 0 : d.time) ?? 0,
          endDay: f.dayIndex + p - 1,
          endTime: ((h = r.end) == null ? void 0 : h.time) ?? so
        }, this.getRangeRecords(t).push(l);
      }
    }) : r.intersectsDayRange(c, u) && (l = {
      startDay: ((i = r.start) == null ? void 0 : i.dayIndex) ?? -1 / 0,
      startTime: ((a = r.start) == null ? void 0 : a.time) ?? -1 / 0,
      endDay: ((s = r.end) == null ? void 0 : s.dayIndex) ?? 1 / 0,
      endTime: ((o = r.end) == null ? void 0 : o.time) ?? 1 / 0
    }, this.getRangeRecords(t).push(l)), l;
  }
  getRangeRecords(t) {
    let r = this.records[t.key];
    return r || (r = {
      ranges: [],
      data: t
    }, this.records[t.key] = r), r.ranges;
  }
  getCell(t, r) {
    return this.getCells(r).find((a) => a.data.key === t);
  }
  cellExists(t, r) {
    const n = this.records[t];
    return n == null ? !1 : n.ranges.some(
      (i) => i.startDay <= r && i.endDay >= r
    );
  }
  getCells(t) {
    const r = Object.values(this.records), n = [], { dayIndex: i } = t;
    return r.forEach(({ data: a, ranges: s }) => {
      s.filter((o) => o.startDay <= i && o.endDay >= i).forEach((o) => {
        const l = i === o.startDay, c = i === o.endDay, u = l ? o.startTime : 0, f = new Date(t.startDate.getTime() + u), d = c ? o.endTime : so, h = new Date(t.endDate.getTime() + d), p = u === 0 && d === so, v = a.order || 0;
        n.push({
          ...o,
          data: a,
          onStart: l,
          onEnd: c,
          startTime: u,
          startDate: f,
          endTime: d,
          endDate: h,
          allDay: p,
          order: v
        });
      });
    }), n.sort((a, s) => a.order - s.order), n;
  }
}
const iP = 12, aP = 5;
function sP(e, t) {
  const r = new Intl.DateTimeFormat().resolvedOptions().locale;
  let n;
  dr(e) ? n = e : y0(e, "id") && (n = e.id), n = (n || r).toLowerCase();
  const i = Object.keys(t), a = (l) => i.find((c) => c.toLowerCase() === l);
  n = a(n) || a(n.substring(0, 2)) || r;
  const s = {
    ...t["en-IE"],
    ...t[n],
    id: n,
    monthCacheSize: iP,
    pageCacheSize: aP
  };
  return Br(e) ? Ga(e, s) : s;
}
class Wo {
  constructor(t = void 0, r) {
    re(this, "id"), re(this, "daysInWeek"), re(this, "firstDayOfWeek"), re(this, "masks"), re(this, "timezone"), re(this, "hourLabels"), re(this, "dayNames"), re(this, "dayNamesShort"), re(this, "dayNamesShorter"), re(this, "dayNamesNarrow"), re(this, "monthNames"), re(this, "monthNamesShort"), re(this, "relativeTimeNames"), re(this, "amPm", ["am", "pm"]), re(this, "monthCache"), re(this, "pageCache");
    const { id: n, firstDayOfWeek: i, masks: a, monthCacheSize: s, pageCacheSize: o } = sP(t, K3.value);
    this.monthCache = new Wh(
      s,
      LM,
      jM
    ), this.pageCache = new Wh(o, T1, tP), this.id = n, this.daysInWeek = vt, this.firstDayOfWeek = b3(i, 1, vt), this.masks = a, this.timezone = r || void 0, this.hourLabels = this.getHourLabels(), this.dayNames = uc("long", this.id), this.dayNamesShort = uc("short", this.id), this.dayNamesShorter = this.dayNamesShort.map((l) => l.substring(0, 2)), this.dayNamesNarrow = uc("narrow", this.id), this.monthNames = Vh("long", this.id), this.monthNamesShort = Vh("short", this.id), this.relativeTimeNames = VM(this.id);
  }
  formatDate(t, r) {
    return GM(t, r, this);
  }
  parseDate(t, r) {
    return Yh(t, r, this);
  }
  toDate(t, r = {}) {
    const n = /* @__PURE__ */ new Date(NaN);
    let i = n;
    const { fillDate: a, mask: s, patch: o, rules: l } = r;
    if (nr(t) ? (r.type = "number", i = /* @__PURE__ */ new Date(+t)) : dr(t) ? (r.type = "string", i = t ? Yh(t, s || "iso", this) : n) : yi(t) ? (r.type = "date", i = new Date(t.getTime())) : D1(t) && (r.type = "object", i = this.getDateFromParts(t)), i && (o || l)) {
      let c = this.getDateParts(i);
      if (o && a != null) {
        const u = this.getDateParts(this.toDate(a));
        c = this.getDateParts(
          this.toDate({ ...u, ...v1(c, kM[o]) })
        );
      }
      l && (c = qM(c, l)), i = this.getDateFromParts(c);
    }
    return i || n;
  }
  toDateOrNull(t, r = {}) {
    const n = this.toDate(t, r);
    return isNaN(n.getTime()) ? null : n;
  }
  fromDate(t, { type: r, mask: n } = {}) {
    switch (r) {
      case "number":
        return t ? t.getTime() : NaN;
      case "string":
        return t ? this.formatDate(t, n || "iso") : "";
      case "object":
        return t ? this.getDateParts(t) : null;
      default:
        return t ? new Date(t) : null;
    }
  }
  range(t) {
    return bi.from(t, this);
  }
  ranges(t) {
    return bi.fromMany(t, this);
  }
  getDateParts(t) {
    return NM(t, this);
  }
  getDateFromParts(t) {
    return C1(t, this.timezone);
  }
  getDateFromParams(t, r, n, i, a, s, o) {
    return this.getDateFromParts({
      year: t,
      month: r,
      day: n,
      hours: i,
      minutes: a,
      seconds: s,
      milliseconds: o
    });
  }
  getPage(t) {
    const r = this.pageCache.getOrSet(t, this);
    return rP(t, r);
  }
  getMonthParts(t, r) {
    const { firstDayOfWeek: n } = this;
    return this.monthCache.getOrSet(t, r, n);
  }
  getThisMonthParts() {
    const t = /* @__PURE__ */ new Date();
    return this.getMonthParts(
      t.getMonth() + 1,
      t.getFullYear()
    );
  }
  getPrevMonthParts(t, r) {
    return t === 1 ? this.getMonthParts(12, r - 1) : this.getMonthParts(t - 1, r);
  }
  getNextMonthParts(t, r) {
    return t === 12 ? this.getMonthParts(1, r + 1) : this.getMonthParts(t + 1, r);
  }
  getHourLabels() {
    return HM().map((t) => this.formatDate(t, this.masks.hours));
  }
  getDayId(t) {
    return this.formatDate(t, "YYYY-MM-DD");
  }
}
class M1 {
  constructor(t, r, n) {
    re(this, "key", ""), re(this, "hashcode", ""), re(this, "highlight", null), re(this, "content", null), re(this, "dot", null), re(this, "bar", null), re(this, "event", null), re(this, "popover", null), re(this, "customData", null), re(this, "ranges"), re(this, "hasRanges", !1), re(this, "order", 0), re(this, "pinPage", !1), re(this, "maxRepeatSpan", 0), re(this, "locale");
    const { dates: i } = Object.assign(
      this,
      { hashcode: "", order: 0, pinPage: !1 },
      t
    );
    this.key || (this.key = Mo()), this.locale = n, r.normalizeGlyphs(this), this.ranges = n.ranges(i ?? []), this.hasRanges = !!Sr(this.ranges), this.maxRepeatSpan = this.ranges.filter((a) => a.hasRepeat).map((a) => a.daySpan).reduce((a, s) => Math.max(a, s), 0);
  }
  intersectsRange({ start: t, end: r }) {
    if (t == null || r == null)
      return !1;
    const n = this.ranges.filter((s) => !s.hasRepeat);
    for (const s of n)
      if (s.intersectsDayRange(t.dayIndex, r.dayIndex))
        return !0;
    const i = this.ranges.filter((s) => s.hasRepeat);
    if (!i.length)
      return !1;
    let a = t;
    for (this.maxRepeatSpan > 1 && (a = this.locale.getDateParts($t(a.date, -this.maxRepeatSpan))); a.dayIndex <= r.dayIndex; ) {
      for (const s of i)
        if (s.startsOnDay(a))
          return !0;
      a = this.locale.getDateParts($t(a.date, 1));
    }
    return !1;
  }
}
const P1 = "__vc_base_context__", B1 = {
  color: {
    type: String,
    default: () => fn("color")
  },
  isDark: {
    type: [Boolean, String, Object],
    default: () => fn("isDark")
  },
  firstDayOfWeek: Number,
  masks: Object,
  locale: [String, Object],
  timezone: String,
  minDate: null,
  maxDate: null,
  disabledDates: null
};
function I1(e) {
  const t = M(() => e.color ?? ""), r = M(() => e.isDark ?? !1), { displayMode: n } = k$(r), i = M(() => new S3(t.value)), a = M(() => {
    if (e.locale instanceof Wo)
      return e.locale;
    const u = Br(e.locale) ? e.locale : {
      id: e.locale,
      firstDayOfWeek: e.firstDayOfWeek,
      masks: e.masks
    };
    return new Wo(u, e.timezone);
  }), s = M(() => a.value.masks), o = M(() => {
    const u = e.disabledDates ?? [];
    return e.minDate != null && u.push({
      start: null,
      end: $t(a.value.toDate(e.minDate), -1)
    }), e.maxDate != null && u.push({
      start: $t(a.value.toDate(e.maxDate), 1),
      end: null
    }), a.value.ranges(u);
  }), l = M(() => new M1(
    {
      key: "disabled",
      dates: o.value,
      order: 100
    },
    i.value,
    a.value
  )), c = {
    color: t,
    isDark: r,
    displayMode: n,
    theme: i,
    locale: a,
    masks: s,
    disabledDates: o,
    disabledAttribute: l
  };
  return zi(P1, c), c;
}
function oP(e) {
  return Dl(P1, I1(e));
}
const lP = (e, t, {
  maxSwipeTime: r,
  minHorizontalSwipeDistance: n,
  maxVerticalSwipeDistance: i
}) => {
  if (!e || !e.addEventListener || !Yn(t))
    return null;
  let a = 0, s = 0, o = null, l = !1;
  function c(f) {
    const d = f.changedTouches[0];
    a = d.screenX, s = d.screenY, o = (/* @__PURE__ */ new Date()).getTime(), l = !0;
  }
  function u(f) {
    if (!l || !o)
      return;
    l = !1;
    const d = f.changedTouches[0], h = d.screenX - a, p = d.screenY - s;
    if ((/* @__PURE__ */ new Date()).getTime() - o < r && Math.abs(h) >= n && Math.abs(p) <= i) {
      const g = { toLeft: !1, toRight: !1 };
      h < 0 ? g.toLeft = !0 : g.toRight = !0, t(g);
    }
  }
  return rn(e, "touchstart", c, { passive: !0 }), rn(e, "touchend", u, { passive: !0 }), () => {
    tn(e, "touchstart", c), tn(e, "touchend", u);
  };
}, oo = {}, cP = (e, t = 10) => {
  oo[e] = Date.now() + t;
}, uP = (e, t) => {
  if (e in oo) {
    const r = oo[e];
    if (Date.now() < r)
      return;
    delete oo[e];
  }
  t();
}, fP = {
  ...B1,
  view: {
    type: String,
    default: "monthly",
    validator(e) {
      return ["daily", "weekly", "monthly"].includes(e);
    }
  },
  rows: {
    type: Number,
    default: 1
  },
  columns: {
    type: Number,
    default: 1
  },
  step: Number,
  titlePosition: {
    type: String,
    default: () => fn("titlePosition")
  },
  navVisibility: {
    type: String,
    default: () => fn("navVisibility")
  },
  showWeeknumbers: [Boolean, String],
  showIsoWeeknumbers: [Boolean, String],
  expanded: Boolean,
  borderless: Boolean,
  transparent: Boolean,
  initialPage: Object,
  initialPagePosition: { type: Number, default: 1 },
  minPage: Object,
  maxPage: Object,
  transition: String,
  attributes: Array,
  trimWeeks: Boolean,
  disablePageSwipe: Boolean
}, dP = [
  "dayclick",
  "daymouseenter",
  "daymouseleave",
  "dayfocusin",
  "dayfocusout",
  "daykeydown",
  "weeknumberclick",
  "transition-start",
  "transition-end",
  "did-move",
  "update:view",
  "update:pages"
], R1 = "__vc_calendar_context__";
function hP(e, { emit: t, slots: r }) {
  const n = ce(null), i = ce(null), a = ce(null), s = ce((/* @__PURE__ */ new Date()).getDate()), o = ce(!1), l = ce(Mo()), c = ce(Mo()), u = ce(e.view), f = ce([]), d = ce("");
  let h = null, p = null;
  const {
    theme: v,
    color: g,
    displayMode: m,
    locale: y,
    masks: _,
    disabledAttribute: x,
    disabledDates: b
  } = oP(e), w = M(() => e.rows * e.columns), E = M(() => e.step || w.value), $ = M(() => h1(f.value) ?? null), C = M(() => vi(f.value) ?? null), D = M(
    () => e.minPage || (e.minDate ? T(e.minDate) : null)
  ), A = M(
    () => e.maxPage || (e.maxDate ? T(e.maxDate) : null)
  ), S = M(() => e.navVisibility), k = M(() => !!e.showWeeknumbers), j = M(() => !!e.showIsoWeeknumbers), P = M(() => u.value === "monthly"), H = M(() => u.value === "weekly"), K = M(() => u.value === "daily"), X = () => {
    o.value = !0, t("transition-start");
  }, Z = () => {
    o.value = !1, t("transition-end"), h && (h.resolve(!0), h = null);
  }, B = (V, q, se = u.value) => O1(V, q, se, y.value), T = (V) => k1(V, u.value, y.value), R = (V) => {
    !x.value || !ee.value || (V.isDisabled = ee.value.cellExists(
      x.value.key,
      V.dayIndex
    ));
  }, N = (V) => {
    V.isFocusable = V.inMonth && V.day === s.value;
  }, F = (V, q) => {
    for (const se of V)
      for (const O of se.days)
        if (q(O) === !1)
          return;
  }, te = M(
    () => f.value.reduce((V, q) => (V.push(...q.viewDays), V), [])
  ), J = M(() => {
    const V = [];
    return (e.attributes || []).forEach((q, se) => {
      if (!q || !q.dates)
        return;
      const O = y0(q, "key") ? q.key : se, U = q.order || 0;
      V.push(
        new M1(
          {
            ...q,
            key: O,
            order: U
          },
          v.value,
          y.value
        )
      );
    }), x.value && V.push(x.value), V;
  }), be = M(() => Sr(J.value)), ee = M(() => {
    const V = new nP();
    return J.value.forEach((q) => {
      q.ranges.forEach((se) => {
        V.render(q, se, te.value);
      });
    }), V;
  }), _e = M(() => te.value.reduce((V, q) => (V[q.dayIndex] = { day: q, cells: [] }, V[q.dayIndex].cells.push(...ee.value.getCells(q)), V), {})), Xe = (V, q) => {
    const se = e.showWeeknumbers || e.showIsoWeeknumbers;
    return se == null ? "" : vD(se) ? se ? "left" : "" : se.startsWith("right") ? q > 1 ? "right" : se : V > 1 ? "left" : se;
  }, Qe = () => {
    var V, q;
    if (!be.value)
      return null;
    const se = J.value.find((ne) => ne.pinPage) || J.value[0];
    if (!se || !se.hasRanges)
      return null;
    const [O] = se.ranges, U = ((V = O.start) == null ? void 0 : V.date) || ((q = O.end) == null ? void 0 : q.date);
    return U ? T(U) : null;
  }, tt = () => {
    if (hr($.value))
      return $.value;
    const V = Qe();
    return hr(V) ? V : T(/* @__PURE__ */ new Date());
  }, Ie = (V, q = {}) => {
    const { view: se = u.value, position: O = 1, force: U } = q, ne = O > 0 ? 1 - O : -(w.value + O);
    let fe = B(V, ne, se), He = B(fe, w.value - 1, se);
    return U || (Uu(fe, D.value) ? fe = D.value : Yo(He, A.value) && (fe = B(A.value, 1 - w.value)), He = B(fe, w.value - 1)), { fromPage: fe, toPage: He };
  }, We = (V, q, se = "") => {
    if (se === "none" || se === "fade")
      return se;
    if ((V == null ? void 0 : V.view) !== (q == null ? void 0 : q.view))
      return "fade";
    const O = Yo(q, V), U = Uu(q, V);
    return !O && !U ? "fade" : se === "slide-v" ? U ? "slide-down" : "slide-up" : U ? "slide-right" : "slide-left";
  }, bt = (V = {}) => new Promise((q, se) => {
    const { position: O = 1, force: U = !1, transition: ne } = V, fe = hr(V.page) ? V.page : tt(), { fromPage: He } = Ie(fe, {
      position: O,
      force: U
    }), Pt = [];
    for (let ht = 0; ht < w.value; ht++) {
      const wr = B(He, ht), _n = ht + 1, ni = Math.ceil(_n / e.columns), _t = e.rows - ni + 1, ii = _n % e.columns || e.columns, Gr = e.columns - ii + 1, ut = Xe(ii, Gr);
      Pt.push(
        y.value.getPage({
          ...wr,
          view: u.value,
          titlePosition: e.titlePosition,
          trimWeeks: e.trimWeeks,
          position: _n,
          row: ni,
          rowFromEnd: _t,
          column: ii,
          columnFromEnd: Gr,
          showWeeknumbers: k.value,
          showIsoWeeknumbers: j.value,
          weeknumberPosition: ut
        })
      );
    }
    d.value = We(
      f.value[0],
      Pt[0],
      ne
    ), f.value = Pt, d.value && d.value !== "none" ? h = {
      resolve: q,
      reject: se
    } : q(!0);
  }), Ot = (V) => {
    const q = $.value ?? T(/* @__PURE__ */ new Date());
    return B(q, V);
  }, Ft = (V, q = {}) => {
    const se = hr(V) ? V : T(V);
    return Object.assign(
      q,
      Ie(se, {
        ...q,
        force: !0
      })
    ), eP(
      q.fromPage,
      q.toPage,
      u.value,
      y.value
    ).map((U) => F1(U, D.value, A.value)).every((U) => U);
  }, Tt = (V, q = {}) => Ft(Ot(V), q), _r = M(() => Tt(-E.value)), ct = M(() => Tt(E.value)), ze = async (V, q = {}) => !q.force && !Ft(V, q) ? !1 : (q.fromPage && !QM(q.fromPage, $.value) && (i.value && i.value.hide({ hideDelay: 0 }), q.view && (cP("view", 10), u.value = q.view), await bt({
    ...q,
    page: q.fromPage,
    position: 1,
    force: !0
  }), t("did-move", f.value)), !0), Ue = (V, q = {}) => ze(Ot(V), q), dt = () => Ue(-E.value), Mt = () => Ue(E.value), Nt = (V) => {
    const q = P.value ? ".in-month" : "", se = `.id-${y.value.getDayId(V)}${q}`, O = `${se}.vc-focusable, ${se} .vc-focusable`, U = n.value;
    if (U) {
      const ne = U.querySelector(O);
      if (ne)
        return ne.focus(), !0;
    }
    return !1;
  }, At = async (V, q = {}) => Nt(V) ? !0 : (await ze(V, q), Nt(V)), Lt = (V, q) => {
    s.value = V.day, t("dayclick", V, q);
  }, Ur = (V, q) => {
    t("daymouseenter", V, q);
  }, ti = (V, q) => {
    t("daymouseleave", V, q);
  }, qr = (V, q) => {
    s.value = V.day, a.value = V, V.isFocused = !0, t("dayfocusin", V, q);
  }, or = (V, q) => {
    a.value = null, V.isFocused = !1, t("dayfocusout", V, q);
  }, Zt = (V, q) => {
    t("daykeydown", V, q);
    const se = V.noonDate;
    let O = null;
    switch (q.key) {
      case "ArrowLeft": {
        O = $t(se, -1);
        break;
      }
      case "ArrowRight": {
        O = $t(se, 1);
        break;
      }
      case "ArrowUp": {
        O = $t(se, -7);
        break;
      }
      case "ArrowDown": {
        O = $t(se, 7);
        break;
      }
      case "Home": {
        O = $t(se, -V.weekdayPosition + 1);
        break;
      }
      case "End": {
        O = $t(se, V.weekdayPositionFromEnd);
        break;
      }
      case "PageUp": {
        q.altKey ? O = Rh(se, -1) : O = Ho(se, -1);
        break;
      }
      case "PageDown": {
        q.altKey ? O = Rh(se, 1) : O = Ho(se, 1);
        break;
      }
    }
    O && (q.preventDefault(), At(O).catch());
  }, ca = (V) => {
    const q = a.value;
    q != null && Zt(q, V);
  }, ri = (V, q) => {
    t("weeknumberclick", V, q);
  };
  bt({
    page: e.initialPage,
    position: e.initialPagePosition
  }), ot(() => {
    !e.disablePageSwipe && n.value && (p = lP(
      n.value,
      ({ toLeft: V = !1, toRight: q = !1 }) => {
        V ? Mt() : q && dt();
      },
      fn("touch")
    ));
  }), Et(() => {
    f.value = [], p && p();
  }), pe(
    () => y.value,
    () => {
      bt();
    }
  ), pe(
    () => w.value,
    () => bt()
  ), pe(
    () => e.view,
    () => u.value = e.view
  ), pe(
    () => u.value,
    () => {
      uP("view", () => {
        bt();
      }), t("update:view", u.value);
    }
  ), pe(
    () => s.value,
    () => {
      F(f.value, (V) => N(V));
    }
  ), hx(() => {
    t("update:pages", f.value), F(f.value, (V) => {
      R(V), N(V);
    });
  });
  const bn = {
    emit: t,
    slots: r,
    containerRef: n,
    navPopoverRef: i,
    focusedDay: a,
    inTransition: o,
    navPopoverId: l,
    dayPopoverId: c,
    view: u,
    pages: f,
    transitionName: d,
    theme: v,
    color: g,
    displayMode: m,
    locale: y,
    masks: _,
    attributes: J,
    disabledAttribute: x,
    disabledDates: b,
    attributeContext: ee,
    days: te,
    dayCells: _e,
    count: w,
    step: E,
    firstPage: $,
    lastPage: C,
    canMovePrev: _r,
    canMoveNext: ct,
    minPage: D,
    maxPage: A,
    isMonthly: P,
    isWeekly: H,
    isDaily: K,
    navVisibility: S,
    showWeeknumbers: k,
    showIsoWeeknumbers: j,
    getDateAddress: T,
    canMove: Ft,
    canMoveBy: Tt,
    move: ze,
    moveBy: Ue,
    movePrev: dt,
    moveNext: Mt,
    onTransitionBeforeEnter: X,
    onTransitionAfterEnter: Z,
    tryFocusDate: Nt,
    focusDate: At,
    onKeydown: ca,
    onDayKeydown: Zt,
    onDayClick: Lt,
    onDayMouseenter: Ur,
    onDayMouseleave: ti,
    onDayFocusin: qr,
    onDayFocusout: or,
    onWeeknumberClick: ri
  };
  return zi(R1, bn), bn;
}
function Un() {
  const e = Dl(R1);
  if (e)
    return e;
  throw new Error(
    "Calendar context missing. Please verify this component is nested within a valid context provider."
  );
}
const pP = {
  inheritAttrs: !1
}, _i = /* @__PURE__ */ he({
  ...pP,
  __name: "CalendarSlot",
  props: {
    name: null
  },
  setup(e) {
    const { slots: t } = Un();
    return (r, n) => Y(t)[e.name] ? (I(), $e(px(Y(t)[e.name]), Eo(Rn({ key: 0 }, r.$attrs)), null, 16)) : xe(r.$slots, "default", { key: 1 });
  }
});
function qu(e) {
  document && document.dispatchEvent(
    new CustomEvent("show-popover", {
      detail: e
    })
  );
}
function Uo(e) {
  document && document.dispatchEvent(
    new CustomEvent("hide-popover", {
      detail: e
    })
  );
}
function N1(e) {
  document && document.dispatchEvent(
    new CustomEvent("toggle-popover", {
      detail: e
    })
  );
}
function L1(e) {
  const { visibility: t } = e, r = t === "click", n = t === "hover", i = t === "hover-focus", a = t === "focus";
  e.autoHide = !r;
  let s = !1, o = !1;
  const l = (p) => {
    r && (N1({
      ...e,
      target: e.target || p.currentTarget
    }), p.stopPropagation());
  }, c = (p) => {
    s || (s = !0, (n || i) && qu({
      ...e,
      target: e.target || p.currentTarget
    }));
  }, u = () => {
    s && (s = !1, (n || i && !o) && Uo(e));
  }, f = (p) => {
    o || (o = !0, (a || i) && qu({
      ...e,
      target: e.target || p.currentTarget
    }));
  }, d = (p) => {
    o && !io(p.currentTarget, p.relatedTarget) && (o = !1, (a || i && !s) && Uo(e));
  }, h = {};
  switch (e.visibility) {
    case "click":
      h.click = l;
      break;
    case "hover":
      h.mousemove = c, h.mouseleave = u;
      break;
    case "focus":
      h.focusin = f, h.focusout = d;
      break;
    case "hover-focus":
      h.mousemove = c, h.mouseleave = u, h.focusin = f, h.focusout = d;
      break;
  }
  return h;
}
const Uh = (e) => {
  const t = To(e);
  if (t == null)
    return;
  const r = t.popoverHandlers;
  !r || !r.length || (r.forEach((n) => n()), delete t.popoverHandlers);
}, qh = (e, t) => {
  const r = To(e);
  if (r == null)
    return;
  const n = [], i = L1(t);
  Object.entries(i).forEach(([a, s]) => {
    n.push(rn(r, a, s));
  }), r.popoverHandlers = n;
}, j1 = {
  mounted(e, t) {
    const { value: r } = t;
    r && qh(e, r);
  },
  updated(e, t) {
    const { oldValue: r, value: n } = t, i = r == null ? void 0 : r.visibility, a = n == null ? void 0 : n.visibility;
    i !== a && (i && (Uh(e), a || Uo(r)), a && qh(e, n));
  },
  unmounted(e) {
    Uh(e);
  }
}, vP = ["disabled"], gP = {
  key: 1,
  type: "button",
  class: "vc-title"
}, mP = ["disabled"], z1 = /* @__PURE__ */ he({
  __name: "CalendarHeader",
  props: {
    page: { type: Object, required: !0 },
    layout: String,
    isLg: Boolean,
    isXl: Boolean,
    is2xl: Boolean,
    hideTitle: Boolean,
    hideArrows: Boolean
  },
  setup(e) {
    const t = e, {
      navPopoverId: r,
      navVisibility: n,
      canMovePrev: i,
      movePrev: a,
      canMoveNext: s,
      moveNext: o
    } = Un(), l = M(() => {
      switch (t.page.titlePosition) {
        case "left":
          return "bottom-start";
        case "right":
          return "bottom-end";
        default:
          return "bottom";
      }
    }), c = M(() => {
      const { page: v } = t;
      return {
        id: r.value,
        visibility: n.value,
        placement: l.value,
        modifiers: [{ name: "flip", options: { fallbackPlacements: ["bottom"] } }],
        data: { page: v },
        isInteractive: !0
      };
    }), u = M(() => t.page.titlePosition.includes("left")), f = M(() => t.page.titlePosition.includes("right")), d = M(() => t.layout ? t.layout : u.value ? "tu-pn" : f.value ? "pn-tu" : "p-tu-n;"), h = M(() => ({
      prev: d.value.includes("p") && !t.hideArrows,
      title: d.value.includes("t") && !t.hideTitle,
      next: d.value.includes("n") && !t.hideArrows
    })), p = M(() => ({ gridTemplateColumns: d.value.split("").map((g) => {
      switch (g) {
        case "p":
          return "[prev] auto";
        case "n":
          return "[next] auto";
        case "t":
          return "[title] auto";
        case "-":
          return "1fr";
        default:
          return "";
      }
    }).join(" ") }));
    return (v, g) => (I(), W("div", {
      class: Ae(["vc-header", { "is-lg": e.isLg, "is-xl": e.isXl, "is-2xl": e.is2xl }]),
      style: Ne(Y(p))
    }, [
      Y(h).prev ? (I(), W("button", {
        key: 0,
        type: "button",
        class: "vc-arrow vc-prev vc-focus",
        disabled: !Y(i),
        onClick: g[0] || (g[0] = //@ts-ignore
        (...m) => Y(a) && Y(a)(...m)),
        onKeydown: g[1] || (g[1] = Rd(
          //@ts-ignore
          (...m) => Y(a) && Y(a)(...m),
          ["space", "enter"]
        ))
      }, [
        ae(_i, {
          name: "header-prev-button",
          disabled: !Y(i)
        }, {
          default: de(() => [
            ae(Si, {
              name: "ChevronLeft",
              size: "24"
            })
          ]),
          _: 1
        }, 8, ["disabled"])
      ], 40, vP)) : ve("", !0),
      Y(h).title ? vx((I(), W("button", gP, [
        ae(_i, {
          name: "header-title",
          title: e.page.title
        }, {
          default: de(() => [
            oe("span", null, ke(e.page.title), 1)
          ]),
          _: 1
        }, 8, ["title"])
      ])), [
        [Y(j1), Y(c)]
      ]) : ve("", !0),
      Y(h).next ? (I(), W("button", {
        key: 2,
        type: "button",
        class: "vc-arrow vc-next vc-focus",
        disabled: !Y(s),
        onClick: g[2] || (g[2] = //@ts-ignore
        (...m) => Y(o) && Y(o)(...m)),
        onKeydown: g[3] || (g[3] = Rd(
          //@ts-ignore
          (...m) => Y(o) && Y(o)(...m),
          ["space", "enter"]
        ))
      }, [
        ae(_i, {
          name: "header-next-button",
          disabled: !Y(s)
        }, {
          default: de(() => [
            ae(Si, {
              name: "ChevronRight",
              size: "24"
            })
          ]),
          _: 1
        }, 8, ["disabled"])
      ], 40, mP)) : ve("", !0)
    ], 6));
  }
}), xP = he({
  directives: { popover: j1 },
  components: { CalendarSlot: _i },
  props: {
    day: { type: Object, required: !0 }
  },
  setup(e) {
    const {
      locale: t,
      theme: r,
      attributeContext: n,
      dayPopoverId: i,
      slots: a,
      onDayClick: s,
      onDayMouseenter: o,
      onDayMouseleave: l,
      onDayFocusin: c,
      onDayFocusout: u,
      onDayKeydown: f
    } = Un(), d = M(() => e.day), h = M(() => n.value.getCells(d.value)), p = M(
      () => h.value.map((P) => P.data)
    ), v = M(() => ({
      ...d.value,
      attributes: p.value,
      attributeCells: h.value
    }));
    function g({ data: P }, { popovers: H }) {
      const { key: K, customData: X, popover: Z } = P;
      if (!Z)
        return;
      const B = Ch(
        {
          key: K,
          customData: X,
          attribute: P
        },
        { ...Z },
        {
          visibility: Z.label ? "hover" : "click",
          placement: "bottom",
          isInteractive: !Z.label
        }
      );
      H.splice(0, 0, B);
    }
    const m = M(() => {
      const P = {
        ...r.value.prepareRender({}),
        popovers: []
      };
      return h.value.forEach((H) => {
        r.value.render(H, P), g(H, P);
      }), P;
    }), y = M(() => m.value.highlights), _ = M(() => !!Sr(y.value)), x = M(() => m.value.content), b = M(() => m.value.dots), w = M(() => !!Sr(b.value)), E = M(() => m.value.bars), $ = M(() => !!Sr(E.value)), C = M(() => m.value.popovers), D = M(
      () => C.value.map((P) => P.attribute)
    ), A = M(() => [
      "vc-day",
      ...d.value.classes,
      { "vc-day-box-center-center": !a["day-content"] },
      { "is-not-in-month": !e.day.inMonth }
    ]), S = M(() => {
      let P;
      d.value.isFocusable ? P = "0" : P = "-1";
      const H = [
        "vc-day-content vc-focusable vc-focus vc-attr",
        { "vc-disabled": d.value.isDisabled },
        Fn(vi(y.value), "contentClass"),
        Fn(vi(x.value), "class") || ""
      ], K = {
        ...Fn(vi(y.value), "contentStyle"),
        ...Fn(vi(x.value), "style")
      };
      return {
        class: H,
        style: K,
        tabindex: P,
        "aria-label": d.value.ariaLabel,
        "aria-disabled": !!d.value.isDisabled,
        role: "button"
      };
    }), k = M(() => ({
      click(P) {
        s(v.value, P);
      },
      mouseenter(P) {
        o(v.value, P);
      },
      mouseleave(P) {
        l(v.value, P);
      },
      focusin(P) {
        c(v.value, P);
      },
      focusout(P) {
        u(v.value, P);
      },
      keydown(P) {
        f(v.value, P);
      }
    })), j = M(() => Sr(C.value) ? Ch(
      {
        id: i.value,
        data: { day: d, attributes: D.value }
      },
      ...C.value
    ) : null);
    return {
      attributes: p,
      attributeCells: h,
      bars: E,
      dayClasses: A,
      dayContentProps: S,
      dayContentEvents: k,
      dayPopover: j,
      glyphs: m,
      dots: b,
      hasDots: w,
      hasBars: $,
      highlights: y,
      hasHighlights: _,
      locale: t,
      popovers: C
    };
  }
}), yP = {
  key: 0,
  class: "vc-highlights vc-day-layer"
}, bP = {
  key: 1,
  class: "vc-day-layer vc-day-box-center-bottom"
}, _P = { class: "vc-dots" }, wP = {
  key: 2,
  class: "vc-day-layer vc-day-box-center-bottom"
}, $P = { class: "vc-bars" };
function DP(e, t, r, n, i, a) {
  const s = ue("CalendarSlot"), o = O2("popover");
  return I(), W("div", {
    class: Ae(e.dayClasses)
  }, [
    e.hasHighlights ? (I(), W("div", yP, [
      (I(!0), W(Be, null, et(e.highlights, ({ key: l, wrapperClass: c, class: u, style: f }) => (I(), W("div", {
        key: l,
        class: Ae(c)
      }, [
        oe("div", {
          class: Ae(u),
          style: Ne(f)
        }, null, 6)
      ], 2))), 128))
    ])) : ve("", !0),
    ae(s, {
      name: "day-content",
      day: e.day,
      attributes: e.attributes,
      "attribute-cells": e.attributeCells,
      dayProps: e.dayContentProps,
      dayEvents: e.dayContentEvents,
      locale: e.locale
    }, {
      default: de(() => [
        vx((I(), W("div", Rn(e.dayContentProps, F2(e.dayContentEvents, !0)), [
          kr(ke(e.day.label), 1)
        ], 16)), [
          [o, e.dayPopover]
        ])
      ]),
      _: 1
    }, 8, ["day", "attributes", "attribute-cells", "dayProps", "dayEvents", "locale"]),
    e.hasDots ? (I(), W("div", bP, [
      oe("div", _P, [
        (I(!0), W(Be, null, et(e.dots, ({ key: l, class: c, style: u }) => (I(), W("span", {
          key: l,
          class: Ae(c),
          style: Ne(u)
        }, null, 6))), 128))
      ])
    ])) : ve("", !0),
    e.hasBars ? (I(), W("div", wP, [
      oe("div", $P, [
        (I(!0), W(Be, null, et(e.bars, ({ key: l, class: c, style: u }) => (I(), W("span", {
          key: l,
          class: Ae(c),
          style: Ne(u)
        }, null, 6))), 128))
      ])
    ])) : ve("", !0)
  ], 2);
}
const EP = /* @__PURE__ */ Nr(xP, [["render", DP]]), AP = {
  name: "CalendarPane",
  inheritAttrs: !1,
  components: { CalendarHeader: z1, CalendarDay: EP },
  props: {
    page: { type: Object, required: !0 }
  },
  setup() {
    const { onWeeknumberClick: e } = Un();
    return {
      onWeeknumberClick: e
    };
  }
}, CP = { class: "vc-weekdays" }, SP = ["onClick"];
function kP(e, t, r, n, i, a) {
  const s = ue("CalendarHeader"), o = ue("CalendarDay");
  return I(), W("div", {
    class: Ae([
      "vc-pane",
      `row-${r.page.row}`,
      `row-from-end-${r.page.rowFromEnd}`,
      `column-${r.page.column}`,
      `column-from-end-${r.page.columnFromEnd}`
    ]),
    ref: "pane"
  }, [
    ae(s, {
      page: r.page,
      "is-lg": "",
      "hide-arrows": ""
    }, null, 8, ["page"]),
    oe("div", {
      class: Ae(["vc-weeks", {
        [`vc-show-weeknumbers-${r.page.weeknumberPosition}`]: r.page.weeknumberPosition
      }])
    }, [
      oe("div", CP, [
        (I(!0), W(Be, null, et(r.page.weekdays, ({ weekday: l, label: c }, u) => (I(), W("div", {
          key: u,
          class: Ae(`vc-weekday vc-weekday-${l}`)
        }, ke(c), 3))), 128))
      ]),
      (I(!0), W(Be, null, et(r.page.viewWeeks, (l) => (I(), W("div", {
        key: `weeknumber-${l.weeknumber}`,
        class: "vc-week"
      }, [
        r.page.weeknumberPosition ? (I(), W("div", {
          key: 0,
          class: Ae(["vc-weeknumber", `is-${r.page.weeknumberPosition}`])
        }, [
          oe("span", {
            class: Ae(["vc-weeknumber-content"]),
            onClick: (c) => n.onWeeknumberClick(l, c)
          }, ke(l.weeknumberDisplay), 9, SP)
        ], 2)) : ve("", !0),
        (I(!0), W(Be, null, et(l.days, (c) => (I(), $e(o, {
          key: c.id,
          day: c
        }, null, 8, ["day"]))), 128))
      ]))), 128))
    ], 2)
  ], 2);
}
const OP = /* @__PURE__ */ Nr(AP, [["render", kP]]), FP = he({
  name: "Popover",
  inheritAttrs: !1,
  emits: ["before-show", "after-show", "before-hide", "after-hide"],
  props: {
    id: { type: String, required: !0 },
    showDelay: { type: Number, default: 0 },
    hideDelay: { type: Number, default: 110 },
    boundarySelector: { type: String }
  },
  setup(e, { emit: t }) {
    let r;
    const n = ce();
    let i = null, a = null;
    const s = Ce({
      isVisible: !1,
      target: null,
      data: null,
      transition: "slide-fade",
      placement: "bottom",
      direction: "",
      positionFixed: !1,
      modifiers: [],
      isInteractive: !0,
      visibility: "click",
      isHovered: !1,
      isFocused: !1,
      autoHide: !1,
      force: !1
    });
    function o(B) {
      B && (s.direction = B.split("-")[0]);
    }
    function l({ placement: B, options: T }) {
      o(B || (T == null ? void 0 : T.placement));
    }
    const c = M(() => ({
      placement: s.placement,
      strategy: s.positionFixed ? "fixed" : "absolute",
      boundary: "",
      modifiers: [
        {
          name: "onUpdate",
          enabled: !0,
          phase: "afterWrite",
          fn: l
        },
        ...s.modifiers || []
      ],
      onFirstUpdate: l
    })), u = M(() => {
      const B = s.direction === "left" || s.direction === "right";
      let T = "";
      if (s.placement) {
        const R = s.placement.split("-");
        R.length > 1 && (T = R[1]);
      }
      return ["start", "top", "left"].includes(T) ? B ? "top" : "left" : ["end", "bottom", "right"].includes(T) ? B ? "bottom" : "right" : B ? "middle" : "center";
    });
    function f() {
      a && (a.destroy(), a = null);
    }
    function d() {
      nn(() => {
        const B = To(s.target);
        !B || !n.value || (a && a.state.elements.reference !== B && f(), a ? a.update() : a = e$(
          B,
          n.value,
          c.value
        ));
      });
    }
    function h(B) {
      Object.assign(s, p1(B, "force"));
    }
    function p(B, T) {
      clearTimeout(r), B > 0 ? r = setTimeout(T, B) : T();
    }
    function v(B) {
      return !B || !a ? !1 : To(B) === a.state.elements.reference;
    }
    async function g(B = {}) {
      s.force || (B.force && (s.force = !0), p(B.showDelay ?? e.showDelay, () => {
        s.isVisible && (s.force = !1, t("after-show")), h({
          ...B,
          isVisible: !0
        }), d();
      }));
    }
    function m(B = {}) {
      a && (B.target && !v(B.target) || s.force || (B.force && (s.force = !0), p(B.hideDelay ?? e.hideDelay, () => {
        s.isVisible || (s.force = !1), s.isVisible = !1;
      })));
    }
    function y(B = {}) {
      B.target != null && (s.isVisible && v(B.target) ? m(B) : g(B));
    }
    function _(B) {
      if (!a)
        return;
      const T = a.state.elements.reference;
      if (!n.value || !T)
        return;
      const R = B.target;
      io(n.value, R) || io(T, R) || m({ force: !0 });
    }
    function x(B) {
      (B.key === "Esc" || B.key === "Escape") && m();
    }
    function b({ detail: B }) {
      !B.id || B.id !== e.id || g(B);
    }
    function w({ detail: B }) {
      !B.id || B.id !== e.id || m(B);
    }
    function E({ detail: B }) {
      !B.id || B.id !== e.id || y(B);
    }
    function $() {
      rn(document, "keydown", x), rn(document, "click", _), rn(document, "show-popover", b), rn(document, "hide-popover", w), rn(document, "toggle-popover", E);
    }
    function C() {
      tn(document, "keydown", x), tn(document, "click", _), tn(document, "show-popover", b), tn(document, "hide-popover", w), tn(document, "toggle-popover", E);
    }
    function D(B) {
      t("before-show", B);
    }
    function A(B) {
      s.force = !1, t("after-show", B);
    }
    function S(B) {
      t("before-hide", B);
    }
    function k(B) {
      s.force = !1, f(), t("after-hide", B);
    }
    function j(B) {
      B.stopPropagation();
    }
    function P() {
      s.isHovered = !0, s.isInteractive && ["hover", "hover-focus"].includes(s.visibility) && g();
    }
    function H() {
      if (s.isHovered = !1, !a)
        return;
      const B = a.state.elements.reference;
      s.autoHide && !s.isFocused && (!B || B !== document.activeElement) && ["hover", "hover-focus"].includes(s.visibility) && m();
    }
    function K() {
      s.isFocused = !0, s.isInteractive && ["focus", "hover-focus"].includes(s.visibility) && g();
    }
    function X(B) {
      ["focus", "hover-focus"].includes(s.visibility) && (!B.relatedTarget || !io(n.value, B.relatedTarget)) && (s.isFocused = !1, !s.isHovered && s.autoHide && m());
    }
    function Z() {
      i != null && (i.disconnect(), i = null);
    }
    return pe(
      () => n.value,
      (B) => {
        Z(), B && (i = new ResizeObserver(() => {
          a && a.update();
        }), i.observe(B));
      }
    ), pe(() => s.placement, o, {
      immediate: !0
    }), ot(() => {
      $();
    }), Et(() => {
      f(), Z(), C();
    }), {
      ...S2(s),
      popoverRef: n,
      alignment: u,
      hide: m,
      setupPopper: d,
      beforeEnter: D,
      afterEnter: A,
      beforeLeave: S,
      afterLeave: k,
      onClick: j,
      onMouseOver: P,
      onMouseLeave: H,
      onFocusIn: K,
      onFocusOut: X
    };
  }
});
function TP(e, t, r, n, i, a) {
  return I(), W("div", {
    class: Ae(["vc-popover-content-wrapper", { "is-interactive": e.isInteractive }]),
    ref: "popoverRef",
    onClick: t[0] || (t[0] = (...s) => e.onClick && e.onClick(...s)),
    onMouseover: t[1] || (t[1] = (...s) => e.onMouseOver && e.onMouseOver(...s)),
    onMouseleave: t[2] || (t[2] = (...s) => e.onMouseLeave && e.onMouseLeave(...s)),
    onFocusin: t[3] || (t[3] = (...s) => e.onFocusIn && e.onFocusIn(...s)),
    onFocusout: t[4] || (t[4] = (...s) => e.onFocusOut && e.onFocusOut(...s))
  }, [
    ae(gx, {
      name: `vc-${e.transition}`,
      appear: "",
      onBeforeEnter: e.beforeEnter,
      onAfterEnter: e.afterEnter,
      onBeforeLeave: e.beforeLeave,
      onAfterLeave: e.afterLeave
    }, {
      default: de(() => [
        e.isVisible ? (I(), W("div", Rn({
          key: 0,
          tabindex: "-1",
          class: `vc-popover-content direction-${e.direction}`
        }, e.$attrs), [
          xe(e.$slots, "default", {
            direction: e.direction,
            alignment: e.alignment,
            data: e.data,
            hide: e.hide
          }, () => [
            kr(ke(e.data), 1)
          ]),
          oe("span", {
            class: Ae([
              "vc-popover-caret",
              `direction-${e.direction}`,
              `align-${e.alignment}`
            ])
          }, null, 2)
        ], 16)) : ve("", !0)
      ]),
      _: 3
    }, 8, ["name", "onBeforeEnter", "onAfterEnter", "onBeforeLeave", "onAfterLeave"])
  ], 34);
}
const D0 = /* @__PURE__ */ Nr(FP, [["render", TP]]), MP = {
  value: { type: Object, required: !0 }
}, PP = ["input"], BP = "__vc_calendar_nav_context__";
function IP(e, { emit: t }) {
  const r = ce(!0), n = ce(0), i = ce(0), a = 12, s = ce(null), { locale: o, masks: l, canMove: c, getDateAddress: u } = Un();
  function f() {
    setTimeout(() => {
      if (s.value == null)
        return;
      const F = s.value.querySelector(
        ".vc-nav-item:not(:disabled)"
      );
      F && F.focus();
    }, 10);
  }
  function d(F, te) {
    t("input", { month: F, year: te }, { position: D.value });
  }
  function h(F) {
    n.value = F, r.value = !0, f();
  }
  function p(F) {
    const { year: te } = u(/* @__PURE__ */ new Date()), J = F * a, be = J + a, ee = [];
    for (let _e = J; _e < be; _e += 1) {
      let Xe = !1;
      for (let Qe = 1; Qe < 12 && (Xe = c({ month: Qe, year: _e }, { position: D.value }), !Xe); Qe++)
        ;
      ee.push({
        year: _e,
        id: _e.toString(),
        label: _e.toString(),
        ariaLabel: _e.toString(),
        isActive: _e === C.value,
        isCurrent: _e === te,
        isDisabled: !Xe,
        click: () => h(_e)
      });
    }
    return ee;
  }
  function v(F) {
    const { month: te, year: J } = u(/* @__PURE__ */ new Date());
    return S1().map((be, ee) => {
      const _e = ee + 1;
      return {
        month: _e,
        year: F,
        id: `${F}.${Se(_e, 2)}`,
        label: o.value.formatDate(be, l.value.navMonths),
        ariaLabel: o.value.formatDate(be, "MMMM YYYY"),
        isActive: _e === $.value && F === C.value,
        isCurrent: _e === te && F === J,
        isDisabled: !c(
          { month: _e, year: F },
          { position: D.value }
        ),
        click: () => d(_e, F)
      };
    });
  }
  function g(F) {
    return Math.floor(F / a);
  }
  function m() {
    r.value = !r.value;
  }
  function y() {
    X.value && (r.value && x(), w());
  }
  function _() {
    T.value && (r.value && b(), E());
  }
  function x() {
    n.value--;
  }
  function b() {
    n.value++;
  }
  function w() {
    i.value--;
  }
  function E() {
    i.value++;
  }
  const $ = M(() => {
    var F;
    return ((F = e.value) == null ? void 0 : F.month) || 0;
  }), C = M(() => {
    var F;
    return ((F = e.value) == null ? void 0 : F.year) || 0;
  }), D = M(() => {
    var F;
    return ((F = e.value) == null ? void 0 : F.position) || 1;
  }), A = M(() => v(n.value)), S = M(() => p(i.value)), k = M(() => h1(S.value.map((F) => F.year))), j = M(() => vi(S.value.map((F) => F.year))), P = M(() => r.value ? n.value : `${k.value} - ${j.value}`), H = M(
    () => v(n.value - 1).some((F) => !F.isDisabled)
  ), K = M(
    () => p(i.value - 1).some((F) => !F.isDisabled)
  ), X = M(
    () => r.value ? H.value : K.value
  ), Z = M(
    () => v(n.value + 1).some((F) => !F.isDisabled)
  ), B = M(
    () => p(i.value + 1).some((F) => !F.isDisabled)
  ), T = M(
    () => r.value ? Z.value : B.value
  ), R = M(
    () => r.value ? A.value : S.value
  );
  pe(
    () => C.value,
    () => {
      n.value = C.value;
    }
  ), pe(
    () => n.value,
    (F) => {
      i.value = g(F);
    }
  ), n.value = C.value, ot(() => f());
  const N = {
    navContainer: s,
    title: P,
    monthMode: r,
    currentMonth: $,
    currentYear: C,
    activeItems: R,
    prevItemsEnabled: X,
    nextItemsEnabled: T,
    toggleMode: m,
    movePrev: y,
    moveNext: _,
    movePrevYear: x,
    moveNextYear: b,
    movePrevYearGroup: w,
    moveNextYearGroup: E
  };
  return zi(BP, N), N;
}
const RP = { class: "vc-nav-header" }, NP = ["disabled"], LP = ["disabled"], jP = { class: "vc-nav-items" }, zP = ["data-id", "aria-label", "disabled", "onClick", "onKeydown"], HP = /* @__PURE__ */ he({
  __name: "CalendarNav",
  props: MP,
  emits: PP,
  setup(e, { emit: t }) {
    const r = e, {
      navContainer: n,
      title: i,
      prevItemsEnabled: a,
      nextItemsEnabled: s,
      activeItems: o,
      toggleMode: l,
      movePrev: c,
      moveNext: u
    } = IP(r, { emit: t });
    return (f, d) => (I(), W("div", {
      class: "vc-nav-container",
      ref_key: "navContainer",
      ref: n
    }, [
      oe("div", RP, [
        oe("button", {
          type: "button",
          class: "vc-nav-arrow is-left vc-focus",
          disabled: !Y(a),
          onClick: d[0] || (d[0] = //@ts-ignore
          (...h) => Y(c) && Y(c)(...h)),
          onKeydown: d[1] || (d[1] = (h) => Y(Os)(h, Y(c)))
        }, [
          ae(_i, {
            name: "nav-prev-button",
            move: Y(c),
            disabled: !Y(a)
          }, {
            default: de(() => [
              ae(Si, {
                name: "ChevronLeft",
                width: "22px",
                height: "24px"
              })
            ]),
            _: 1
          }, 8, ["move", "disabled"])
        ], 40, NP),
        oe("button", {
          type: "button",
          class: "vc-nav-title vc-focus",
          onClick: d[2] || (d[2] = //@ts-ignore
          (...h) => Y(l) && Y(l)(...h)),
          onKeydown: d[3] || (d[3] = (h) => Y(Os)(h, Y(l)))
        }, ke(Y(i)), 33),
        oe("button", {
          type: "button",
          class: "vc-nav-arrow is-right vc-focus",
          disabled: !Y(s),
          onClick: d[4] || (d[4] = //@ts-ignore
          (...h) => Y(u) && Y(u)(...h)),
          onKeydown: d[5] || (d[5] = (h) => Y(Os)(h, Y(u)))
        }, [
          ae(_i, {
            name: "nav-next-button",
            move: Y(u),
            disabled: !Y(s)
          }, {
            default: de(() => [
              ae(Si, {
                name: "ChevronRight",
                width: "22px",
                height: "24px"
              })
            ]),
            _: 1
          }, 8, ["move", "disabled"])
        ], 40, LP)
      ]),
      oe("div", jP, [
        (I(!0), W(Be, null, et(Y(o), (h) => (I(), W("button", {
          key: h.label,
          type: "button",
          "data-id": h.id,
          "aria-label": h.ariaLabel,
          class: Ae(["vc-nav-item vc-focus", [
            h.isActive ? "is-active" : h.isCurrent ? "is-current" : ""
          ]]),
          disabled: h.isDisabled,
          onClick: h.click,
          onKeydown: (p) => Y(Os)(p, h.click)
        }, ke(h.label), 43, zP))), 128))
      ])
    ], 512));
  }
}), VP = {
  __name: "CalendarNavPopover",
  setup(e) {
    const { navPopoverId: t, color: r, displayMode: n, navPopoverRef: i, move: a } = Un();
    return (s, o) => (I(), $e(D0, {
      id: Y(t),
      class: Ae(["vc-nav-popover-container", `vc-${Y(r)}`, `vc-${Y(n)}`]),
      ref_key: "navPopoverRef",
      ref: i
    }, {
      default: de(({ data: l }) => [
        ae(HP, {
          value: l.page,
          onInput: Y(a)
        }, null, 8, ["value", "onInput"])
      ]),
      _: 1
    }, 8, ["id", "class"]));
  }
}, YP = he({
  name: "PopoverRow",
  props: {
    attribute: { type: Object, required: !0 }
  },
  setup(e) {
    return {
      indicator: M(() => {
        const { content: r, highlight: n, dot: i, bar: a, popover: s } = e.attribute;
        return s && s.hideIndicator ? null : r ? {
          class: `vc-bar vc-day-popover-row-bar vc-attr vc-${r.base.color}`
        } : n ? {
          class: `vc-highlight-bg-solid vc-day-popover-row-highlight vc-attr vc-${n.base.color}`
        } : i ? {
          class: `vc-dot vc-attr vc-${i.base.color}`
        } : a ? {
          class: `vc-bar vc-day-popover-row-bar vc-attr vc-${a.base.color}`
        } : null;
      })
    };
  }
}), WP = { class: "vc-day-popover-row" }, UP = {
  key: 0,
  class: "vc-day-popover-row-indicator"
}, qP = { class: "vc-day-popover-row-label" };
function GP(e, t, r, n, i, a) {
  return I(), W("div", WP, [
    e.indicator ? (I(), W("div", UP, [
      oe("span", {
        class: Ae(e.indicator.class)
      }, null, 2)
    ])) : ve("", !0),
    oe("div", qP, [
      xe(e.$slots, "default", {}, () => [
        kr(ke(e.attribute.popover ? e.attribute.popover.label : "No content provided"), 1)
      ])
    ])
  ]);
}
const KP = /* @__PURE__ */ Nr(YP, [["render", GP]]), ZP = { class: "vc-day-popover-container" }, XP = {
  key: 0,
  class: "vc-day-popover-header"
}, JP = /* @__PURE__ */ he({
  __name: "CalendarDayPopover",
  setup(e) {
    const { dayPopoverId: t, displayMode: r, color: n, masks: i, locale: a } = Un();
    function s(l, c) {
      return a.value.formatDate(l, c);
    }
    function o(l) {
      return a.value.formatDate(l.date, i.value.dayPopover);
    }
    return (l, c) => (I(), $e(D0, {
      id: Y(t),
      class: Ae([`vc-${Y(n)}`, `vc-${Y(r)}`])
    }, {
      default: de(({ data: { day: u, attributes: f }, hide: d }) => [
        xe(l.$slots, "default", {
          day: u,
          dayTitle: o(u),
          attributes: f,
          format: s,
          masks: Y(i),
          hide: d
        }, () => [
          oe("div", ZP, [
            Y(i).dayPopover ? (I(), W("div", XP, ke(o(u)), 1)) : ve("", !0),
            (I(!0), W(Be, null, et(f, (h) => (I(), $e(KP, {
              key: h.key,
              attribute: h
            }, null, 8, ["attribute"]))), 128))
          ])
        ])
      ]),
      _: 3
    }, 8, ["id", "class"]));
  }
}), QP = he({
  name: "Calendar",
  components: {
    CalendarHeader: z1,
    CalendarPane: OP,
    CalendarNavPopover: VP,
    CalendarDayPopover: JP
  },
  emits: dP,
  props: fP,
  setup(e, { emit: t, slots: r }) {
    return hP(e, { emit: t, slots: r });
  }
}), e6 = { class: "vc-pane-header-wrapper" };
function t6(e, t, r, n, i, a) {
  const s = ue("CalendarHeader"), o = ue("CalendarPane"), l = ue("CalendarDayPopover"), c = ue("CalendarNavPopover");
  return I(), W(Be, null, [
    oe("div", Rn({ "data-helptext": "Press the arrow keys to navigate by day, Home and End to navigate to week ends, PageUp and PageDown to navigate by month, Alt+PageUp and Alt+PageDown to navigate by year" }, e.$attrs, {
      class: [
        "vc-container",
        `vc-${e.view}`,
        `vc-${e.color}`,
        `vc-${e.displayMode}`,
        {
          "vc-expanded": e.expanded,
          "vc-bordered": !e.borderless,
          "vc-transparent": e.transparent
        }
      ],
      onMouseup: t[0] || (t[0] = qf(() => {
      }, ["prevent"])),
      ref: "containerRef"
    }), [
      oe("div", {
        class: Ae(["vc-pane-container", { "in-transition": e.inTransition }])
      }, [
        oe("div", e6, [
          e.firstPage ? (I(), $e(s, {
            key: 0,
            page: e.firstPage,
            "is-lg": "",
            "hide-title": ""
          }, null, 8, ["page"])) : ve("", !0)
        ]),
        ae(gx, {
          name: `vc-${e.transitionName}`,
          onBeforeEnter: e.onTransitionBeforeEnter,
          onAfterEnter: e.onTransitionAfterEnter
        }, {
          default: de(() => [
            (I(), W("div", {
              key: e.pages[0].id,
              class: "vc-pane-layout",
              style: Ne({
                gridTemplateColumns: `repeat(${e.columns}, 1fr)`
              })
            }, [
              (I(!0), W(Be, null, et(e.pages, (u) => (I(), $e(o, {
                key: u.id,
                page: u
              }, null, 8, ["page"]))), 128))
            ], 4))
          ]),
          _: 1
        }, 8, ["name", "onBeforeEnter", "onAfterEnter"]),
        xe(e.$slots, "footer")
      ], 2)
    ], 16),
    ae(l, null, {
      default: de((u) => [
        xe(e.$slots, "day-popover", Eo(k2(u)))
      ]),
      _: 3
    }),
    ae(c)
  ], 64);
}
const r6 = /* @__PURE__ */ Nr(QP, [["render", t6]]), n6 = { class: "vc-base-select" }, i6 = ["value"], a6 = ["value", "disabled"], s6 = {
  inheritAttrs: !1
}, pa = /* @__PURE__ */ Object.assign(s6, {
  __name: "BaseSelect",
  props: {
    options: Array,
    modelValue: null,
    alignRight: Boolean,
    alignLeft: Boolean,
    showIcon: Boolean,
    small: Boolean
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (t, r) => (I(), W("div", n6, [
      e.showIcon ? (I(), $e(Si, {
        key: 0,
        name: "ChevronDown",
        size: e.small ? "16" : "18"
      }, null, 8, ["size"])) : ve("", !0),
      oe("select", Rn(t.$attrs, {
        value: e.modelValue,
        class: ["vc-focus", {
          "vc-has-icon": e.showIcon,
          "vc-align-right": e.alignRight,
          "vc-align-left": e.alignLeft,
          "vc-small": e.small
        }],
        onChange: r[0] || (r[0] = (n) => t.$emit("update:modelValue", n.target.value))
      }), [
        (I(!0), W(Be, null, et(e.options, (n) => (I(), W("option", {
          key: n.value,
          value: n.value,
          disabled: n.disabled
        }, ke(n.label), 9, a6))), 128))
      ], 16, i6)
    ]));
  }
}), H1 = "__vc_date_picker_context__", o6 = {
  ...B1,
  mode: { type: String, default: "date" },
  modelValue: {
    type: [Number, String, Date, Object]
  },
  modelModifiers: {
    type: Object,
    default: () => ({})
  },
  rules: [String, Object],
  is24hr: Boolean,
  hideTimeHeader: Boolean,
  timeAccuracy: { type: Number, default: 2 },
  isRequired: Boolean,
  isRange: Boolean,
  updateOnInput: {
    type: Boolean,
    default: () => fn("datePicker.updateOnInput")
  },
  inputDebounce: {
    type: Number,
    default: () => fn("datePicker.inputDebounce")
  },
  popover: {
    type: [Boolean, Object],
    default: !0
  },
  dragAttribute: Object,
  selectAttribute: Object,
  attributes: [Object, Array]
}, l6 = [
  "update:modelValue",
  "drag",
  "dayclick",
  "daykeydown",
  "popover-will-show",
  "popover-did-show",
  "popover-will-hide",
  "popover-did-hide"
];
function c6(e, t) {
  const r = I1(e), { locale: n, masks: i, disabledAttribute: a } = r, { emit: s } = t, o = ce(!1), l = ce(Mo()), c = ce(null), u = ce(null), f = ce(["", ""]), d = ce(null), h = ce(null);
  let p, v, g = !0;
  const m = M(() => e.isRange || e.modelModifiers.range === !0), y = M(
    () => m.value && c.value != null ? c.value.start : null
  ), _ = M(
    () => m.value && c.value != null ? c.value.end : null
  ), x = M(() => e.mode.toLowerCase() === "date"), b = M(
    () => e.mode.toLowerCase() === "datetime"
  ), w = M(() => e.mode.toLowerCase() === "time"), E = M(() => !!u.value), $ = M(() => {
    let O = "date";
    e.modelModifiers.number && (O = "number"), e.modelModifiers.string && (O = "string");
    const U = i.value.modelValue || "iso";
    return N({ type: O, mask: U });
  }), C = M(
    () => _r(u.value ?? c.value)
  ), D = M(() => w.value ? e.is24hr ? i.value.inputTime24hr : i.value.inputTime : b.value ? e.is24hr ? i.value.inputDateTime24hr : i.value.inputDateTime : i.value.input), A = M(() => /[Hh]/g.test(D.value)), S = M(
    () => /[dD]{1,2}|Do|W{1,4}|M{1,4}|YY(?:YY)?/g.test(D.value)
  ), k = M(() => {
    if (A.value && S.value)
      return "dateTime";
    if (S.value)
      return "date";
    if (A.value)
      return "time";
  }), j = M(() => {
    var O;
    const U = ((O = d.value) == null ? void 0 : O.$el.previousElementSibling) ?? void 0;
    return Ga({}, e.popover, fn("datePicker.popover"), {
      target: U
    });
  }), P = M(
    () => L1({
      ...j.value,
      id: l.value
    })
  ), H = M(() => m.value ? {
    start: f.value[0],
    end: f.value[1]
  } : f.value[0]), K = M(() => {
    const O = ["start", "end"].map((U) => ({
      input: Ot(U),
      change: Ft(U),
      keyup: Tt,
      ...e.popover && P.value
    }));
    return m.value ? {
      start: O[0],
      end: O[1]
    } : O[0];
  }), X = M(() => {
    if (!J(c.value))
      return null;
    const O = {
      key: "select-drag",
      ...e.selectAttribute,
      dates: c.value,
      pinPage: !0
    }, { dot: U, bar: ne, highlight: fe, content: He } = O;
    return !U && !ne && !fe && !He && (O.highlight = !0), O;
  }), Z = M(() => {
    if (!m.value || !J(u.value))
      return null;
    const O = {
      key: "select-drag",
      ...e.dragAttribute,
      dates: u.value
    }, { dot: U, bar: ne, highlight: fe, content: He } = O;
    return !U && !ne && !fe && !He && (O.highlight = {
      startEnd: {
        fillMode: "outline"
      }
    }), O;
  }), B = M(() => {
    const O = Wt(e.attributes) ? [...e.attributes] : [];
    return Z.value ? O.unshift(Z.value) : X.value && O.unshift(X.value), O;
  }), T = M(() => N(
    e.rules === "auto" ? R() : e.rules ?? {}
  ));
  function R() {
    const O = {
      ms: [0, 999],
      sec: [0, 59],
      min: [0, 59],
      hr: [0, 23]
    }, U = x.value ? 0 : e.timeAccuracy;
    return [0, 1].map((ne) => {
      switch (U) {
        case 0:
          return {
            hours: O.hr[ne],
            minutes: O.min[ne],
            seconds: O.sec[ne],
            milliseconds: O.ms[ne]
          };
        case 1:
          return {
            minutes: O.min[ne],
            seconds: O.sec[ne],
            milliseconds: O.ms[ne]
          };
        case 3:
          return { milliseconds: O.ms[ne] };
        case 4:
          return {};
        default:
          return { seconds: O.sec[ne], milliseconds: O.ms[ne] };
      }
    });
  }
  function N(O) {
    return Wt(O) ? O.length === 1 ? [O[0], O[0]] : O : [O, O];
  }
  function F(O) {
    return N(O).map(
      (U, ne) => ({
        ...U,
        rules: T.value[ne]
      })
    );
  }
  function te(O) {
    return nr(O) ? !isNaN(O) : yi(O) ? !isNaN(O.getTime()) : dr(O) ? O !== "" : O != null;
  }
  function J(O) {
    return m.value ? Br(O) && te(O.start) && te(O.end) : te(O);
  }
  function be(O, U) {
    const ne = yi(O), fe = yi(U);
    return !ne && !fe ? !0 : ne !== fe ? !1 : O.getTime() === U.getTime();
  }
  function ee(O, U) {
    if (m.value) {
      const ne = J(O), fe = J(U);
      return !ne && !fe ? !0 : ne !== fe ? !1 : be(O.start, U.start) && be(O.end, U.end);
    }
    return be(O, U);
  }
  function _e(O) {
    return !J(O) || !a.value ? !1 : a.value.intersectsRange(n.value.range(O));
  }
  function Xe(O, U, ne, fe) {
    if (!J(O))
      return null;
    if (m.value) {
      const He = n.value.toDate(O.start, {
        ...U[0],
        fillDate: y.value ?? void 0,
        patch: ne
      }), Pt = n.value.toDate(O.end, {
        ...U[1],
        fillDate: _.value ?? void 0,
        patch: ne
      });
      return Zt({ start: He, end: Pt }, fe);
    }
    return n.value.toDateOrNull(O, {
      ...U[0],
      fillDate: c.value,
      patch: ne
    });
  }
  function Qe(O, U) {
    return m.value ? J(O) ? {
      start: n.value.fromDate(O.start, U[0]),
      end: n.value.fromDate(O.end, U[1])
    } : null : n.value.fromDate(O, U[0]);
  }
  function tt(O, U = {}) {
    return clearTimeout(p), new Promise((ne) => {
      const { debounce: fe = 0, ...He } = U;
      fe > 0 ? p = window.setTimeout(() => {
        ne(Ie(O, He));
      }, fe) : ne(Ie(O, He));
    });
  }
  function Ie(O, {
    config: U = $.value,
    patch: ne = "dateTime",
    clearIfEqual: fe = !1,
    formatInput: He = !0,
    hidePopover: Pt = !1,
    dragging: ht = E.value,
    targetPriority: wr,
    moveToValue: _n = !1
  } = {}) {
    const ni = F(U);
    let _t = Xe(
      O,
      ni,
      ne,
      wr
    );
    if (_e(_t)) {
      if (ht)
        return null;
      _t = c.value, Pt = !1;
    } else
      _t == null && e.isRequired ? _t = c.value : (
        // Clear value if same value was passed
        _t != null && ee(c.value, _t) && fe && (_t = null)
      );
    const Gr = ht ? u : c, ut = !ee(Gr.value, _t);
    Gr.value = _t, ht || (u.value = null);
    const Xt = Qe(
      _t,
      $.value
    );
    return ut && (g = !1, s(ht ? "drag" : "update:modelValue", Xt), nn(() => g = !0)), Pt && !ht && qr(), He && We(), _n && nn(() => V(wr ?? "start")), Xt;
  }
  function We() {
    nn(() => {
      const O = F({
        type: "string",
        mask: D.value
      }), U = Qe(
        u.value || c.value,
        O
      );
      m.value ? f.value = [U && U.start, U && U.end] : f.value = [U, ""];
    });
  }
  function bt(O, U, ne) {
    f.value.splice(U === "start" ? 0 : 1, 1, O);
    const fe = m.value ? {
      start: f.value[0],
      end: f.value[1] || f.value[0]
    } : O, He = {
      type: "string",
      mask: D.value
    };
    tt(fe, {
      ...ne,
      config: He,
      patch: k.value,
      targetPriority: U,
      moveToValue: !0
    });
  }
  function Ot(O) {
    return (U) => {
      e.updateOnInput && bt(U.currentTarget.value, O, {
        formatInput: !1,
        hidePopover: !1,
        debounce: e.inputDebounce
      });
    };
  }
  function Ft(O) {
    return (U) => {
      bt(U.currentTarget.value, O, {
        formatInput: !0,
        hidePopover: !1
      });
    };
  }
  function Tt(O) {
    O.key === "Escape" && tt(c.value, {
      formatInput: !0,
      hidePopover: !0
    });
  }
  function _r(O) {
    return m.value ? [
      O && O.start ? n.value.getDateParts(O.start) : null,
      O && O.end ? n.value.getDateParts(O.end) : null
    ] : [O ? n.value.getDateParts(O) : null];
  }
  function ct() {
    u.value = null, We();
  }
  function ze(O) {
    s("popover-will-show", O);
  }
  function Ue(O) {
    s("popover-did-show", O);
  }
  function dt(O) {
    ct(), s("popover-will-hide", O);
  }
  function Mt(O) {
    s("popover-did-hide", O);
  }
  function Nt(O) {
    const U = {
      patch: "date",
      formatInput: !0,
      hidePopover: !0
    };
    if (m.value) {
      const ne = !E.value;
      ne ? v = { start: O.startDate, end: O.endDate } : v != null && (v.end = O.date), tt(v, {
        ...U,
        dragging: ne
      });
    } else
      tt(O.date, {
        ...U,
        clearIfEqual: !e.isRequired
      });
  }
  function At(O, U) {
    Nt(O), s("dayclick", O, U);
  }
  function Lt(O, U) {
    switch (U.key) {
      case " ":
      case "Enter": {
        Nt(O), U.preventDefault();
        break;
      }
      case "Escape":
        qr();
    }
    s("daykeydown", O, U);
  }
  function Ur(O, U) {
    !E.value || v == null || (v.end = O.date, tt(Zt(v), {
      patch: "date",
      formatInput: !0
    }));
  }
  function ti(O = {}) {
    qu({
      ...j.value,
      ...O,
      isInteractive: !0,
      id: l.value
    });
  }
  function qr(O = {}) {
    Uo({
      hideDelay: 10,
      force: !0,
      ...j.value,
      ...O,
      id: l.value
    });
  }
  function or(O) {
    N1({
      ...j.value,
      ...O,
      isInteractive: !0,
      id: l.value
    });
  }
  function Zt(O, U) {
    const { start: ne, end: fe } = O;
    if (ne > fe)
      switch (U) {
        case "start":
          return { start: ne, end: ne };
        case "end":
          return { start: fe, end: fe };
        default:
          return { start: fe, end: ne };
      }
    return { start: ne, end: fe };
  }
  function ca(O) {
    if (J(c.value)) {
      const U = m.value ? O ? y.value : _.value : c.value;
      return k1(U, "monthly", n.value);
    }
    return null;
  }
  async function ri(O, U = {}) {
    return h.value == null ? !1 : h.value.move(O, U);
  }
  async function bn(O, U = {}) {
    return h.value == null ? !1 : h.value.moveBy(O, U);
  }
  async function V(O, U = {}) {
    if (h.value == null)
      return !1;
    const { firstPage: ne, lastPage: fe, move: He } = h.value, Pt = O !== "end", ht = ca(Pt), wr = Pt ? 1 : -1;
    return !ht || F1(ht, ne, fe) ? !1 : He(ht, {
      position: wr,
      ...U
    });
  }
  pe(
    () => e.isRange,
    (O) => {
      O && console.warn(
        "The `is-range` prop will be deprecated in future releases. Please use the `range` modifier."
      );
    },
    { immediate: !0 }
  ), pe(
    () => D.value,
    () => We()
  ), pe(
    () => e.modelValue,
    (O) => {
      g && Ie(O, {
        formatInput: !0,
        hidePopover: !1
      });
    }
  ), pe(
    () => T.value,
    () => {
      Br(e.rules) && Ie(e.modelValue, {
        formatInput: !0,
        hidePopover: !1
      });
    }
  ), pe(
    () => e.timezone,
    () => {
      Ie(c.value, { formatInput: !0 });
    }
  );
  const q = N($.value);
  c.value = Xe(e.modelValue, q, "dateTime"), ot(() => {
    Ie(e.modelValue, {
      formatInput: !0,
      hidePopover: !1
    });
  }), nn(() => o.value = !0);
  const se = {
    ...r,
    showCalendar: o,
    datePickerPopoverId: l,
    popoverRef: d,
    popoverEvents: P,
    calendarRef: h,
    isRange: m,
    isTimeMode: w,
    isDateTimeMode: b,
    is24hr: to(e, "is24hr"),
    hideTimeHeader: to(e, "hideTimeHeader"),
    timeAccuracy: to(e, "timeAccuracy"),
    isDragging: E,
    inputValue: H,
    inputEvents: K,
    dateParts: C,
    attributes: B,
    rules: T,
    move: ri,
    moveBy: bn,
    moveToValue: V,
    updateValue: tt,
    showPopover: ti,
    hidePopover: qr,
    togglePopover: or,
    onDayClick: At,
    onDayKeydown: Lt,
    onDayMouseEnter: Ur,
    onPopoverBeforeShow: ze,
    onPopoverAfterShow: Ue,
    onPopoverBeforeHide: dt,
    onPopoverAfterHide: Mt
  };
  return zi(H1, se), se;
}
function u6() {
  const e = Dl(H1);
  if (e)
    return e;
  throw new Error(
    "DatePicker context missing. Please verify this component is nested within a valid context provider."
  );
}
const f6 = [
  { value: 0, label: "12" },
  { value: 1, label: "1" },
  { value: 2, label: "2" },
  { value: 3, label: "3" },
  { value: 4, label: "4" },
  { value: 5, label: "5" },
  { value: 6, label: "6" },
  { value: 7, label: "7" },
  { value: 8, label: "8" },
  { value: 9, label: "9" },
  { value: 10, label: "10" },
  { value: 11, label: "11" }
], d6 = [
  { value: 12, label: "12" },
  { value: 13, label: "1" },
  { value: 14, label: "2" },
  { value: 15, label: "3" },
  { value: 16, label: "4" },
  { value: 17, label: "5" },
  { value: 18, label: "6" },
  { value: 19, label: "7" },
  { value: 20, label: "8" },
  { value: 21, label: "9" },
  { value: 22, label: "10" },
  { value: 23, label: "11" }
];
function h6(e) {
  const t = u6(), {
    locale: r,
    isRange: n,
    isTimeMode: i,
    dateParts: a,
    rules: s,
    is24hr: o,
    hideTimeHeader: l,
    timeAccuracy: c,
    updateValue: u
  } = t;
  function f(S) {
    S = Object.assign(h.value, S);
    let k = null;
    if (n.value) {
      const j = d.value ? S : a.value[0], P = d.value ? a.value[1] : S;
      k = { start: j, end: P };
    } else
      k = S;
    u(k, {
      patch: "time",
      targetPriority: d.value ? "start" : "end",
      moveToValue: !0
    });
  }
  const d = M(() => e.position === 0), h = M(
    () => a.value[e.position] || { isValid: !1 }
  ), p = M(() => D1(h.value)), v = M(() => !!h.value.isValid), g = M(() => !l.value && v.value), m = M(() => {
    if (!p.value)
      return null;
    let S = r.value.toDate(h.value);
    return h.value.hours === 24 && (S = new Date(S.getTime() - 1)), S;
  }), y = M({
    get() {
      return h.value.hours;
    },
    set(S) {
      f({ hours: S });
    }
  }), _ = M({
    get() {
      return h.value.minutes;
    },
    set(S) {
      f({ minutes: S });
    }
  }), x = M({
    get() {
      return h.value.seconds;
    },
    set(S) {
      f({ seconds: S });
    }
  }), b = M({
    get() {
      return h.value.milliseconds;
    },
    set(S) {
      f({ milliseconds: S });
    }
  }), w = M({
    get() {
      return h.value.hours < 12;
    },
    set(S) {
      S = String(S).toLowerCase() == "true";
      let k = y.value;
      S && k >= 12 ? k -= 12 : !S && k < 12 && (k += 12), f({ hours: k });
    }
  }), E = M(
    () => WM(h.value, s.value[e.position])
  ), $ = M(() => f6.filter(
    (S) => E.value.hours.some((k) => k.value === S.value)
  )), C = M(() => d6.filter(
    (S) => E.value.hours.some((k) => k.value === S.value)
  )), D = M(() => o.value ? E.value.hours : w.value ? $.value : C.value), A = M(() => {
    const S = [];
    return Sr($.value) && S.push({ value: !0, label: "AM" }), Sr(C.value) && S.push({ value: !1, label: "PM" }), S;
  });
  return {
    ...t,
    showHeader: g,
    timeAccuracy: c,
    parts: h,
    isValid: v,
    date: m,
    hours: y,
    minutes: _,
    seconds: x,
    milliseconds: b,
    options: E,
    hourOptions: D,
    isAM: w,
    isAMOptions: A,
    is24hr: o
  };
}
const p6 = {
  key: 0,
  class: "vc-time-header"
}, v6 = { class: "vc-time-weekday" }, g6 = { class: "vc-time-month" }, m6 = { class: "vc-time-day" }, x6 = { class: "vc-time-year" }, y6 = { class: "vc-time-select-group" }, b6 = /* @__PURE__ */ oe("span", { class: "vc-time-colon" }, ":", -1), _6 = /* @__PURE__ */ oe("span", { class: "vc-time-colon" }, ":", -1), w6 = /* @__PURE__ */ oe("span", { class: "vc-time-decimal" }, ".", -1), $6 = /* @__PURE__ */ he({
  __name: "TimePicker",
  props: {
    position: null
  },
  setup(e, { expose: t }) {
    const n = h6(e);
    t(n);
    const {
      locale: i,
      isValid: a,
      date: s,
      hours: o,
      minutes: l,
      seconds: c,
      milliseconds: u,
      options: f,
      hourOptions: d,
      isTimeMode: h,
      isAM: p,
      isAMOptions: v,
      is24hr: g,
      showHeader: m,
      timeAccuracy: y
    } = n;
    return (_, x) => (I(), W("div", {
      class: Ae(["vc-time-picker", [{ "vc-invalid": !Y(a), "vc-attached": !Y(h) }]])
    }, [
      xe(_.$slots, "time-header", {}, () => [
        Y(m) && Y(s) ? (I(), W("div", p6, [
          oe("span", v6, ke(Y(i).formatDate(Y(s), "WWW")), 1),
          oe("span", g6, ke(Y(i).formatDate(Y(s), "MMM")), 1),
          oe("span", m6, ke(Y(i).formatDate(Y(s), "D")), 1),
          oe("span", x6, ke(Y(i).formatDate(Y(s), "YYYY")), 1)
        ])) : ve("", !0)
      ]),
      oe("div", y6, [
        ae(Si, {
          name: "Clock",
          size: "17"
        }),
        ae(pa, {
          modelValue: Y(o),
          "onUpdate:modelValue": x[0] || (x[0] = (b) => ua(o) ? o.value = b : null),
          modelModifiers: { number: !0 },
          options: Y(d),
          "align-right": ""
        }, null, 8, ["modelValue", "options"]),
        Y(y) > 1 ? (I(), W(Be, { key: 0 }, [
          b6,
          ae(pa, {
            modelValue: Y(l),
            "onUpdate:modelValue": x[1] || (x[1] = (b) => ua(l) ? l.value = b : null),
            modelModifiers: { number: !0 },
            options: Y(f).minutes,
            "align-left": Y(y) === 2
          }, null, 8, ["modelValue", "options", "align-left"])
        ], 64)) : ve("", !0),
        Y(y) > 2 ? (I(), W(Be, { key: 1 }, [
          _6,
          ae(pa, {
            modelValue: Y(c),
            "onUpdate:modelValue": x[2] || (x[2] = (b) => ua(c) ? c.value = b : null),
            modelModifiers: { number: !0 },
            options: Y(f).seconds,
            "align-left": Y(y) === 3
          }, null, 8, ["modelValue", "options", "align-left"])
        ], 64)) : ve("", !0),
        Y(y) > 3 ? (I(), W(Be, { key: 2 }, [
          w6,
          ae(pa, {
            modelValue: Y(u),
            "onUpdate:modelValue": x[3] || (x[3] = (b) => ua(u) ? u.value = b : null),
            modelModifiers: { number: !0 },
            options: Y(f).milliseconds,
            "align-left": ""
          }, null, 8, ["modelValue", "options"])
        ], 64)) : ve("", !0),
        Y(g) ? ve("", !0) : (I(), $e(pa, {
          key: 3,
          modelValue: Y(p),
          "onUpdate:modelValue": x[4] || (x[4] = (b) => ua(p) ? p.value = b : null),
          options: Y(v)
        }, null, 8, ["modelValue", "options"]))
      ])
    ], 2));
  }
}), V1 = he({
  name: "DatePicker",
  inheritAttrs: !1,
  emits: l6,
  props: o6,
  setup(e, t) {
    const r = c6(e, t), { slots: n, attrs: i } = t, {
      isTimeMode: a,
      isRange: s,
      isDateTimeMode: o,
      color: l,
      displayMode: c,
      dateParts: u,
      datePickerPopoverId: f,
      attributes: d,
      calendarRef: h,
      popoverRef: p,
      showCalendar: v,
      onDayClick: g,
      onDayMouseEnter: m,
      onDayKeydown: y,
      onPopoverBeforeShow: _,
      onPopoverAfterShow: x,
      onPopoverBeforeHide: b,
      onPopoverAfterHide: w
    } = r;
    t.expose(r);
    const E = Ce(p1(r, "calendarRef", "popoverRef")), $ = () => (s.value ? [0, 1] : [0]).map((S) => pi($6, { position: S })), C = () => {
      if (!u.value)
        return null;
      const A = o.value ? { ...n, footer: $ } : n;
      return pi(
        r6,
        {
          ...i,
          attributes: d.value,
          ref: h,
          onDayclick: g,
          onDaymouseenter: m,
          onDaykeydown: y
        },
        A
      );
    }, D = () => {
      if (a.value)
        return pi(
          "div",
          {
            class: `vc-container vc-bordered vc-${l.value} vc-${c.value}`
          },
          [$()]
        );
      if (v.value)
        return C();
    };
    return n.default ? () => [
      // Popover trigger
      n.default(E),
      // Popover content
      pi(
        D0,
        {
          id: f.value,
          placement: "bottom-start",
          class: `vc-date-picker-content vc-${l.value} vc-${c.value}`,
          ref: p,
          "onBefore-show": _,
          "onAfter-show": x,
          "onBefore-hide": b,
          "onAfter-hide": w
        },
        {
          default: D
        }
      )
    ] : D;
  }
}), D6 = /* @__PURE__ */ he({
  __name: "date-picker",
  props: {
    modelValue: {
      type: Number,
      required: !1,
      default: () => Date.now()
    }
  },
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, { emit: t }) {
    const r = e, n = t, i = ce();
    ot(() => {
      nn(() => {
        i.value.refreshDateParts();
      });
    });
    const a = M({
      get: () => r.modelValue,
      set: (s) => n("update:modelValue", s)
    });
    return (s, o) => (I(), $e(Y(V1), {
      ref_key: "picker",
      ref: i,
      modelValue: a.value,
      "onUpdate:modelValue": o[0] || (o[0] = (l) => a.value = l),
      modelModifiers: { number: !0 },
      mode: "dateTime",
      is24hr: "",
      "is-required": ""
    }, null, 8, ["modelValue"]));
  }
}), E6 = /* @__PURE__ */ he({
  __name: "date-range-picker",
  props: {
    mode: {
      type: String,
      required: !1,
      default: () => "date"
    },
    modelValue: {
      type: Array,
      required: !1,
      default: () => [Date.now(), Date.now()]
    }
  },
  emits: {
    "update:modelValue": (e) => !0,
    selected: () => !0
  },
  setup(e, { emit: t }) {
    const r = e, n = t, i = ce();
    ot(() => {
      nn(() => {
        i.value.refreshDateParts();
      });
    });
    const a = M({
      get: () => ({
        start: r.modelValue[0],
        end: r.modelValue[1]
      }),
      set: (s) => n("update:modelValue", [s.start, s.end])
    });
    return pe(() => a.value, () => {
      a.value.end && a.value.start && n("selected");
    }, { deep: !0 }), (s, o) => (I(), $e(Y(V1), {
      ref_key: "picker",
      ref: i,
      modelValue: a.value,
      "onUpdate:modelValue": o[0] || (o[0] = (l) => a.value = l),
      modelModifiers: { number: !0 },
      "is-range": "",
      "is-required": "",
      mode: e.mode
    }, null, 8, ["modelValue", "mode"]));
  }
}), Oi = /* @__PURE__ */ he({
  __name: "overlay-loading",
  props: {
    full: {
      type: Boolean,
      required: !1,
      default: () => !1
    },
    zIndex: {
      type: Number,
      required: !1,
      default: () => 100
    },
    modelValue: {
      type: Boolean,
      required: !1,
      default: () => !0
    }
  },
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, { emit: t }) {
    const r = e, n = t, i = M({
      get: () => r.modelValue,
      set: (a) => n("update:modelValue", a)
    });
    return (a, s) => {
      const o = ue("v-progress-circular"), l = ue("v-overlay");
      return I(), $e(l, {
        modelValue: i.value,
        "onUpdate:modelValue": s[0] || (s[0] = (c) => i.value = c),
        class: "align-center justify-center",
        persistent: "",
        contained: !e.full,
        style: Ne(`z-index: ${e.zIndex};`),
        opacity: 0.5,
        "close-on-back": !1
      }, {
        default: de(() => [
          ae(o, {
            class: "mx-auto",
            color: "white",
            indeterminate: "",
            size: "32"
          })
        ]),
        _: 1
      }, 8, ["modelValue", "contained", "style"]);
    };
  }
}), Y1 = (e) => {
  let t = e.replace(/-([a-z])/g, (r, n) => n.toUpperCase());
  return t.length >= 1 && (t = `${t[0].toUpperCase()}${t.slice(1)}`), t;
}, hs = () => {
  const e = T2(), t = M2(), r = Iu ? Iu() : null;
  return {
    hasSlot(n = "default") {
      return !!e[n];
    },
    forceUpdate() {
      var n;
      (n = r == null ? void 0 : r.proxy) == null || n.$forceUpdate();
    },
    hasListener(n) {
      return !!t[`on${Y1(n)}`];
    },
    nextTick(n) {
      var i;
      (i = r == null ? void 0 : r.proxy) == null || i.$nextTick(n);
    }
  };
}, A6 = { key: 0 }, C6 = { class: "pa-3" }, W1 = /* @__PURE__ */ he({
  __name: "dialog",
  props: {
    fullscreen: {
      type: Boolean,
      required: !1,
      default: () => !1
    },
    persistent: {
      type: Boolean,
      required: !1,
      default: () => !1
    },
    maxWidth: {
      type: String,
      required: !1,
      default: () => "480px"
    },
    hideHeader: {
      type: Boolean,
      required: !1,
      default: () => !1
    },
    title: {
      type: String,
      required: !1,
      default: () => null
    },
    modelValue: {
      type: Boolean,
      required: !1,
      default: () => null
    },
    hideClose: {
      type: Boolean,
      required: !1,
      default: () => !1
    },
    loading: {
      type: Boolean,
      required: !1,
      default: () => !1
    }
  },
  emits: {
    open: () => !0,
    close: () => !0,
    "update:modelValue": (e) => !0
  },
  setup(e, { emit: t }) {
    const r = hs(), n = e, i = t, a = Ce({
      show: !1
    });
    pe(() => a.show, () => {
      a.show !== n.modelValue && (i("update:modelValue", a.show), s());
    }), pe(() => n.modelValue, () => {
      a.show !== n.modelValue && (a.show = !!n.modelValue, s());
    }), ot(() => {
      a.show = !!n.modelValue;
    });
    const s = () => {
      a.show ? i("open") : i("close");
    }, o = () => {
      a.show = !a.show;
    };
    return (l, c) => {
      const u = ue("v-spacer"), f = ue("v-btn"), d = ue("v-row"), h = ue("v-divider"), p = ue("v-card"), v = ue("v-dialog");
      return I(), W("div", null, [
        xe(l.$slots, "active", { switchShow: o }),
        ae(v, {
          modelValue: a.show,
          "onUpdate:modelValue": c[1] || (c[1] = (g) => a.show = g),
          width: e.fullscreen ? void 0 : "90vw",
          "max-width": e.fullscreen ? void 0 : e.maxWidth,
          persistent: e.loading || e.persistent,
          fullscreen: e.fullscreen
        }, {
          default: de(() => [
            a.show ? (I(), $e(p, { key: 0 }, {
              default: de(() => [
                ae(Oi, {
                  "z-index": 502,
                  "model-value": e.loading
                }, null, 8, ["model-value"]),
                (I(), W(Be, null, et(2, (g) => oe("div", {
                  key: g,
                  class: Ae(["w-100", {
                    "ng-component-dialog": g === 1,
                    "ng-component-dialog-fake": g === 2
                  }]),
                  style: { background: "rgb(var(--v-theme-surface))" }
                }, [
                  e.hideHeader ? ve("", !0) : (I(), $e(d, {
                    key: 0,
                    class: "px-3 py-1",
                    style: { "min-height": "56px" },
                    "no-gutters": "",
                    align: "center"
                  }, {
                    default: de(() => [
                      e.title ? (I(), W("h3", A6, ke(e.title), 1)) : ve("", !0),
                      ae(u),
                      !e.hideClose && !Y(r).hasSlot("actions") ? (I(), $e(f, {
                        key: 1,
                        variant: "plain",
                        icon: "mdi-close",
                        disabled: e.loading,
                        onClick: c[0] || (c[0] = (m) => a.show = !1)
                      }, null, 8, ["disabled"])) : ve("", !0),
                      xe(l.$slots, "actions", { switchShow: o })
                    ]),
                    _: 3
                  })),
                  e.hideHeader ? ve("", !0) : (I(), $e(h, { key: 1 }))
                ], 2)), 64)),
                oe("div", C6, [
                  xe(l.$slots, "default", { switchShow: o })
                ]),
                xe(l.$slots, "footer")
              ]),
              _: 3
            })) : ve("", !0)
          ]),
          _: 3
        }, 8, ["modelValue", "width", "max-width", "persistent", "fullscreen"])
      ]);
    };
  }
}), S6 = /* @__PURE__ */ he({
  __name: "fixed-bar",
  props: {
    app: {
      type: Boolean,
      required: !1,
      default: () => !1
    },
    dark: {
      type: Boolean,
      required: !1,
      default: () => !1
    },
    color: {
      type: String,
      required: !1,
      default: () => {
      }
    },
    elevation: {
      type: Number,
      required: !1,
      default: () => {
      }
    },
    hideSpace: {
      type: Boolean,
      required: !1,
      default: () => !1
    },
    position: {
      type: String,
      required: !1,
      default: () => "bottom"
    }
  },
  setup(e) {
    const t = ce(), r = new ResizeObserver(() => s()), n = e, i = Ce({
      style: "",
      contentHeight: 0
    }), a = M(() => {
      let o = [];
      return n.app && (o.push("lib-component-fixed-bar-app"), n.position === "top" ? o.push("lib-component-fixed-bar-app-top") : o.push("lib-component-fixed-bar-app-bottom")), o.join(" ");
    });
    ot(() => {
      t.value && r.observe(t.value.$el), s();
    }), Et(() => {
      r.disconnect();
    });
    const s = () => {
      t.value && (i.contentHeight = t.value.$el.clientHeight);
    };
    return (o, l) => {
      const c = ue("v-toolbar");
      return I(), W("div", null, [
        e.hideSpace ? ve("", !0) : (I(), W("div", {
          key: 0,
          style: Ne(`height: ${i.contentHeight}px`)
        }, null, 4)),
        ae(c, {
          ref_key: "content",
          ref: t,
          class: Ae(["lib-component-fixed-bar", a.value]),
          height: "auto",
          elevation: e.elevation,
          dark: e.dark,
          color: e.color
        }, {
          default: de(() => [
            xe(o.$slots, "default", {}, void 0, !0)
          ]),
          _: 3
        }, 8, ["elevation", "dark", "color", "class"])
      ]);
    };
  }
}), zr = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [n, i] of t)
    r[n] = i;
  return r;
}, k6 = /* @__PURE__ */ zr(S6, [["__scopeId", "data-v-ae397624"]]);
function Bl(e, t) {
  return (r) => Object.keys(e).reduce((n, i) => {
    const s = typeof e[i] == "object" && e[i] != null && !Array.isArray(e[i]) ? e[i] : {
      type: e[i]
    };
    return r && i in r ? n[i] = {
      ...s,
      default: r[i]
    } : n[i] = s, t && !n[i].source && (n[i].source = t), n;
  }, {});
}
const O6 = Bl({
  class: [String, Array],
  style: {
    type: [String, Array, Object],
    default: null
  }
}, "component");
function Gh(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function F6(e, t) {
  const r = {}, n = new Set(Object.keys(e));
  for (const i of t)
    n.has(i) && (r[i] = e[i]);
  return r;
}
function U1() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 ? arguments[2] : void 0;
  const n = {};
  for (const i in e)
    n[i] = e[i];
  for (const i in t) {
    const a = e[i], s = t[i];
    if (Gh(a) && Gh(s)) {
      n[i] = U1(a, s, r);
      continue;
    }
    if (Array.isArray(a) && Array.isArray(s) && r) {
      n[i] = r(a, s);
      continue;
    }
    n[i] = s;
  }
  return n;
}
function wi() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  if (wi.cache.has(e))
    return wi.cache.get(e);
  const t = e.replace(/[^a-z]/gi, "-").replace(/\B([A-Z])/g, "-$1").toLowerCase();
  return wi.cache.set(e, t), t;
}
wi.cache = /* @__PURE__ */ new Map();
function q1(e) {
  P2(`Vuetify: ${e}`);
}
const Gu = Symbol.for("vuetify:defaults");
function G1() {
  const e = Dl(Gu);
  if (!e)
    throw new Error("[Vuetify] Could not find defaults instance");
  return e;
}
function T6(e, t) {
  var r, n;
  return typeof ((r = e.props) == null ? void 0 : r[t]) < "u" || typeof ((n = e.props) == null ? void 0 : n[wi(t)]) < "u";
}
function M6() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : G1();
  const n = Il("useDefaults");
  if (t = t ?? n.type.name ?? n.type.__name, !t)
    throw new Error("[Vuetify] Could not determine component name");
  const i = M(() => {
    var l;
    return (l = r.value) == null ? void 0 : l[e._as ?? t];
  }), a = new Proxy(e, {
    get(l, c) {
      var f, d, h, p;
      const u = Reflect.get(l, c);
      return c === "class" || c === "style" ? [(f = i.value) == null ? void 0 : f[c], u].filter((v) => v != null) : typeof c == "string" && !T6(n.vnode, c) ? ((d = i.value) == null ? void 0 : d[c]) ?? ((p = (h = r.value) == null ? void 0 : h.global) == null ? void 0 : p[c]) ?? u : u;
    }
  }), s = Gf();
  hx(() => {
    if (i.value) {
      const l = Object.entries(i.value).filter((c) => {
        let [u] = c;
        return u.startsWith(u[0].toUpperCase());
      });
      s.value = l.length ? Object.fromEntries(l) : void 0;
    } else
      s.value = void 0;
  });
  function o() {
    const l = I6(Gu, n);
    zi(Gu, M(() => s.value ? U1((l == null ? void 0 : l.value) ?? {}, s.value) : l == null ? void 0 : l.value));
  }
  return {
    props: a,
    provideSubDefaults: o
  };
}
function P6(e) {
  if (e._setup = e._setup ?? e.setup, !e.name)
    return q1("The component is missing an explicit name, unable to generate default prop value"), e;
  if (e._setup) {
    e.props = Bl(e.props ?? {}, e.name)();
    const t = Object.keys(e.props).filter((r) => r !== "class" && r !== "style");
    e.filterProps = function(n) {
      return F6(n, t);
    }, e.props._as = String, e.setup = function(n, i) {
      const a = G1();
      if (!a.value)
        return e._setup(n, i);
      const {
        props: s,
        provideSubDefaults: o
      } = M6(n, n._as ?? e.name, a), l = e._setup(s, i);
      return o(), l;
    };
  }
  return e;
}
function B6() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
  return (t) => (e ? P6 : he)(t);
}
function Il(e, t) {
  const r = Iu();
  if (!r)
    throw new Error(`[Vuetify] ${e} ${t || "must be called from inside a setup function"}`);
  return r;
}
function I6(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Il("injectSelf");
  const {
    provides: r
  } = t;
  if (r && e in r)
    return r[e];
}
function R6(e) {
  const t = Il("useRender");
  t.render = e;
}
function N6(e, t) {
  let r;
  function n() {
    r = I2(), r.run(() => t.length ? t(() => {
      r == null || r.stop(), n();
    }) : t());
  }
  pe(e, (i) => {
    i && !r ? n() : i || (r == null || r.stop(), r = void 0);
  }, {
    immediate: !0
  }), B2(() => {
    r == null || r.stop();
  });
}
function L6(e, t, r) {
  let n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : (f) => f, i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : (f) => f;
  const a = Il("useProxiedModel"), s = ce(e[t] !== void 0 ? e[t] : r), o = wi(t), c = o !== t ? M(() => {
    var f, d, h, p;
    return e[t], !!(((f = a.vnode.props) != null && f.hasOwnProperty(t) || (d = a.vnode.props) != null && d.hasOwnProperty(o)) && ((h = a.vnode.props) != null && h.hasOwnProperty(`onUpdate:${t}`) || (p = a.vnode.props) != null && p.hasOwnProperty(`onUpdate:${o}`)));
  }) : M(() => {
    var f, d;
    return e[t], !!((f = a.vnode.props) != null && f.hasOwnProperty(t) && ((d = a.vnode.props) != null && d.hasOwnProperty(`onUpdate:${t}`)));
  });
  N6(() => !c.value, () => {
    pe(() => e[t], (f) => {
      s.value = f;
    });
  });
  const u = M({
    get() {
      const f = e[t];
      return n(c.value ? f : s.value);
    },
    set(f) {
      const d = i(f), h = R2(c.value ? e[t] : s.value);
      h === d || n(h) === f || (s.value = d, a == null || a.emit(`update:${t}`, d));
    }
  });
  return Object.defineProperty(u, "externalValue", {
    get: () => c.value ? e[t] : s.value
  }), u;
}
const j6 = Symbol.for("vuetify:form"), z6 = Bl({
  disabled: Boolean,
  fastFail: Boolean,
  readonly: Boolean,
  modelValue: {
    type: Boolean,
    default: null
  },
  validateOn: {
    type: String,
    default: "input"
  }
}, "form");
function H6(e) {
  const t = L6(e, "modelValue"), r = M(() => e.disabled), n = M(() => e.readonly), i = Gf(!1), a = ce([]), s = ce([]);
  async function o() {
    const u = [];
    let f = !0;
    s.value = [], i.value = !0;
    for (const d of a.value) {
      const h = await d.validate();
      if (h.length > 0 && (f = !1, u.push({
        id: d.id,
        errorMessages: h
      })), !f && e.fastFail)
        break;
    }
    return s.value = u, i.value = !1, {
      valid: f,
      errors: s.value
    };
  }
  function l() {
    a.value.forEach((u) => u.reset());
  }
  function c() {
    a.value.forEach((u) => u.resetValidation());
  }
  return pe(a, () => {
    let u = 0, f = 0;
    const d = [];
    for (const h of a.value)
      h.isValid === !1 ? (f++, d.push({
        id: h.id,
        errorMessages: h.errorMessages
      })) : h.isValid === !0 && u++;
    s.value = d, t.value = f > 0 ? !1 : u === a.value.length ? !0 : null;
  }, {
    deep: !0
  }), zi(j6, {
    register: (u) => {
      let {
        id: f,
        validate: d,
        reset: h,
        resetValidation: p
      } = u;
      a.value.some((v) => v.id === f) && q1(`Duplicate input name "${f}"`), a.value.push({
        id: f,
        validate: d,
        reset: h,
        resetValidation: p,
        isValid: null,
        errorMessages: []
      });
    },
    unregister: (u) => {
      a.value = a.value.filter((f) => f.id !== u);
    },
    update: (u, f, d) => {
      const h = a.value.find((p) => p.id === u);
      h && (h.isValid = f, h.errorMessages = d);
    },
    isDisabled: r,
    isReadonly: n,
    isValidating: i,
    isValid: t,
    items: a,
    validateOn: to(e, "validateOn")
  }), {
    errors: s,
    isDisabled: r,
    isReadonly: n,
    isValidating: i,
    isValid: t,
    items: a,
    validate: o,
    reset: l,
    resetValidation: c
  };
}
const fc = Symbol("Forwarded refs");
function dc(e, t) {
  let r = e;
  for (; r; ) {
    const n = Reflect.getOwnPropertyDescriptor(r, t);
    if (n)
      return n;
    r = Object.getPrototypeOf(r);
  }
}
function V6(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  return e[fc] = r, new Proxy(e, {
    get(i, a) {
      if (Reflect.has(i, a))
        return Reflect.get(i, a);
      if (!(typeof a == "symbol" || a.startsWith("$") || a.startsWith("__"))) {
        for (const s of r)
          if (s.value && Reflect.has(s.value, a)) {
            const o = Reflect.get(s.value, a);
            return typeof o == "function" ? o.bind(s.value) : o;
          }
      }
    },
    has(i, a) {
      if (Reflect.has(i, a))
        return !0;
      if (typeof a == "symbol" || a.startsWith("$") || a.startsWith("__"))
        return !1;
      for (const s of r)
        if (s.value && Reflect.has(s.value, a))
          return !0;
      return !1;
    },
    set(i, a, s) {
      if (Reflect.has(i, a))
        return Reflect.set(i, a, s);
      if (typeof a == "symbol" || a.startsWith("$") || a.startsWith("__"))
        return !1;
      for (const o of r)
        if (o.value && Reflect.has(o.value, a))
          return Reflect.set(o.value, a, s);
      return !1;
    },
    getOwnPropertyDescriptor(i, a) {
      var o;
      const s = Reflect.getOwnPropertyDescriptor(i, a);
      if (s)
        return s;
      if (!(typeof a == "symbol" || a.startsWith("$") || a.startsWith("__"))) {
        for (const l of r) {
          if (!l.value)
            continue;
          const c = dc(l.value, a) ?? ("_" in l.value ? dc((o = l.value._) == null ? void 0 : o.setupState, a) : void 0);
          if (c)
            return c;
        }
        for (const l of r) {
          const c = l.value && l.value[fc];
          if (!c)
            continue;
          const u = c.slice();
          for (; u.length; ) {
            const f = u.shift(), d = dc(f.value, a);
            if (d)
              return d;
            const h = f.value && f.value[fc];
            h && u.push(...h);
          }
        }
      }
    }
  });
}
const Y6 = Bl({
  ...O6(),
  ...z6()
}, "VForm"), W6 = B6()({
  name: "VForm",
  props: Y6(),
  emits: {
    "update:modelValue": (e) => !0,
    submit: (e) => !0
  },
  setup(e, t) {
    let {
      slots: r,
      emit: n
    } = t;
    const i = H6(e), a = ce();
    function s(l) {
      l.preventDefault(), i.reset();
    }
    function o(l) {
      const c = l, u = i.validate();
      c.then = u.then.bind(u), c.catch = u.catch.bind(u), c.finally = u.finally.bind(u), n("submit", c), c.defaultPrevented || u.then((f) => {
        var h;
        let {
          valid: d
        } = f;
        d && ((h = a.value) == null || h.submit());
      }), c.preventDefault();
    }
    return R6(() => {
      var l;
      return ae("form", {
        ref: a,
        class: ["v-form", e.class],
        style: e.style,
        novalidate: !0,
        onReset: s,
        onSubmit: o
      }, [(l = r.default) == null ? void 0 : l.call(r, i)]);
    }), V6(i, a);
  }
}), U6 = /* @__PURE__ */ he({
  __name: "form",
  props: {
    modelValue: {
      type: Boolean,
      required: !1,
      default: !1
    },
    loading: {
      type: Boolean,
      required: !1,
      default: !1
    },
    readonly: {
      type: Boolean,
      required: !1,
      default: !1
    },
    disabled: {
      type: Boolean,
      required: !1,
      default: !1
    },
    lazyValidation: {
      type: Boolean,
      required: !1,
      default: !1
    }
  },
  emits: {
    "update:modelValue": (e) => !0,
    submit: () => !0
  },
  setup(e, { expose: t, emit: r }) {
    const n = e, i = r;
    t({
      valid: M(() => s.valid),
      validate: (...u) => c(...u)
    });
    const a = ce(), s = Ce({
      valid: n.lazyValidation
    });
    ot(() => {
      nn(() => {
        n.lazyValidation && o(!0);
      });
    });
    const o = (u) => {
      s.valid = u !== !1, i("update:modelValue", s.valid);
    }, l = async () => {
      var f;
      let u = await ((f = a.value) == null ? void 0 : f.validate());
      u && u.valid && i("submit");
    }, c = async (u, f) => {
      var h;
      let d = await ((h = a.value) == null ? void 0 : h.validate());
      d && (d.valid ? u() : f && f(d.errors));
    };
    return (u, f) => (I(), W("div", {
      style: Ne([{ transition: ".25s" }, `opacity: ${e.loading ? 0.5 : 1}`])
    }, [
      ae(Y(W6), {
        ref_key: "checkform",
        ref: a,
        readonly: e.readonly,
        disabled: e.disabled || e.loading,
        "onUpdate:modelValue": o,
        onSubmit: qf(l, ["stop", "prevent"])
      }, {
        default: de(() => [
          xe(u.$slots, "default", {
            valid: s.valid,
            validate: c
          })
        ]),
        _: 3
      }, 8, ["readonly", "disabled"])
    ], 4));
  }
}), q6 = /* @__PURE__ */ he({
  __name: "skeleton",
  props: {
    width: {
      type: String,
      required: !1,
      default: () => "100%"
    },
    height: {
      type: String,
      required: !1,
      default: () => "100%"
    },
    avatar: {
      type: Boolean,
      default: () => !1
    }
  },
  setup(e) {
    const t = e, r = M(() => {
      const n = new Va();
      return n.set("borderRadius", t.avatar ? "100em" : "8px"), n.set("width", t.width), n.set("height", t.height), n.join();
    });
    return (n, i) => (I(), W("div", {
      class: "component-skeleton",
      style: Ne(r.value)
    }, null, 4));
  }
}), E0 = /* @__PURE__ */ zr(q6, [["__scopeId", "data-v-085bd51c"]]), G6 = /* @__PURE__ */ he({
  __name: "img",
  props: {
    skeleton: {
      type: String,
      required: !1,
      default: () => "auto"
    },
    width: {
      type: String,
      required: !1,
      default: () => null
    },
    loading: {
      type: Boolean,
      required: !1,
      default: () => !1
    },
    minWidth: {
      type: String,
      required: !1,
      default: () => null
    },
    maxWidth: {
      type: String,
      required: !1,
      default: () => null
    },
    height: {
      type: String,
      required: !1,
      default: () => null
    },
    minHeight: {
      type: String,
      required: !1,
      default: () => null
    },
    maxHeight: {
      type: String,
      required: !1,
      default: () => null
    },
    radius: {
      type: String,
      required: !1,
      default: () => null
    },
    avatar: {
      type: Boolean,
      default: () => !1
    },
    cover: {
      type: Boolean,
      default: () => !0
    },
    src: {
      type: null,
      required: !1,
      default: () => ""
    },
    block: {
      type: Boolean,
      required: !1,
      default: () => !1
    },
    ratio: {
      type: Boolean,
      required: !1,
      default: () => !1
    },
    square: {
      type: Boolean,
      required: !1,
      default: () => !1
    }
  },
  emits: {
    onClick: () => !0
  },
  setup(e, { emit: t }) {
    const { notFoundImage: r, staticUrl: n } = Jae(), i = hs(), a = new El({
      concurrentExecutions: 1
    }), s = new Al({
      delay: 100
    }), o = new j2({
      def: (b) => `${n}/${b}`
    }), l = o.url(typeof r == "function" ? r() : r), c = e, u = t, f = ce(), d = ce(), h = ce(), p = Ce({
      src: "",
      style: "",
      image: null,
      loading: !0,
      elementListenerGroup: null
    }), v = M(() => {
      let b = new Va();
      return b.set("width", c.width, "100%"), b.set("height", c.square ? c.width : c.height, "200px"), b.set("maxWidth", c.maxWidth), b.set("maxHeight", c.maxHeight), b.set("overflow", "hidden"), b.set("borderRadius", c.radius), b.set("display", c.block ? "block" : "inline-block"), b.join();
    });
    pe(() => c.src, () => y());
    const g = [];
    for (let b = 0; b < 3; b++) {
      const E = wx([f, d, h][b], ([{ isIntersecting: $ }]) => {
        $ && (y(), g.forEach((C) => C.stop()));
      }, {
        immediate: !0
      });
      g.push(E);
    }
    ot(() => {
      p.elementListenerGroup = new Kf(window), p.elementListenerGroup.add("resize", () => s.input("")), s.on("trigger", () => {
        var b, w;
        _((b = p.image) == null ? void 0 : b.width, (w = p.image) == null ? void 0 : w.height);
      });
    }), Et(() => {
      s.close(), p.elementListenerGroup && p.elementListenerGroup.clear();
    });
    const m = () => {
      u("onClick");
    }, y = () => {
      a.push("update", () => new Promise((b) => {
        p.image = new Image();
        let w = c.src ? o.url(c.src) : l;
        p.image.addEventListener("error", () => {
          p.src = l, p.loading = !1, _(300, 200), b(null);
        }), p.image.addEventListener("load", () => {
          var E, $;
          p.src = w, p.loading = !1, _((E = p.image) == null ? void 0 : E.width, ($ = p.image) == null ? void 0 : $.height), b(null);
        }), p.image.src = w;
      }));
    }, _ = (b, w) => {
      let E = new Va();
      E.set("width", c.width, `${b}px`), E.set("maxWidth", c.maxWidth), E.set("minWidth", c.minWidth), E.set("height", c.height), E.set("maxHeight", c.maxHeight), E.set("minHeight", c.minHeight), E.set("borderRadius", c.radius), c.cover && E.set("backgroundSize", "cover"), c.height == null && E.set("height", `${w}px`), c.avatar && E.set("borderRadius", "1000em"), c.block && E.set("display", "block"), p.src && E.set("backgroundImage", `url('${p.src}')`), p.style = E.join(), c.square && i.nextTick(() => {
        let $ = x();
        $ && (E.set("height", `${$}px`), p.style = E.join());
      }), c.ratio && i.nextTick(() => {
        let $ = x();
        if (w && b) {
          let C = $ / b;
          E.set("height", `${w * C}px`), p.style = E.join();
        }
      });
    }, x = () => {
      var b, w;
      return ((b = d.value) == null ? void 0 : b.clientWidth) || ((w = f.value) == null ? void 0 : w.clientWidth) || 0;
    };
    return (b, w) => e.skeleton === "always" || p.loading ? (I(), W("div", {
      key: 0,
      ref_key: "wrapper3",
      ref: h,
      style: Ne(v.value)
    }, [
      e.skeleton !== "hide" ? (I(), $e(E0, {
        key: 0,
        avatar: e.avatar
      }, null, 8, ["avatar"])) : ve("", !0)
    ], 4)) : Y(i).hasListener("click") ? (I(), W("div", {
      key: 1,
      ref_key: "wrapper",
      ref: f,
      style: Ne([{ cursor: "pointer" }, p.style]),
      class: "component-img-basic",
      onClick: m
    }, [
      xe(b.$slots, "default", {}, void 0, !0),
      ae(Oi, { "model-value": e.loading }, null, 8, ["model-value"])
    ], 4)) : (I(), W("div", {
      key: 2,
      ref_key: "wrapper2",
      ref: d,
      class: "component-img-basic",
      style: Ne(p.style)
    }, [
      xe(b.$slots, "default", {}, void 0, !0),
      ae(Oi, { "model-value": e.loading }, null, 8, ["model-value"])
    ], 4));
  }
}), K6 = /* @__PURE__ */ zr(G6, [["__scopeId", "data-v-f2bfbc93"]]), Z6 = /* @__PURE__ */ he({
  __name: "link",
  props: {
    to: {
      type: null,
      required: !0
    },
    target: {
      type: String,
      required: !1,
      default: () => "_self"
    },
    inline: {
      type: Boolean,
      default: !1
    },
    useClick: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const r = e, n = t, i = M(() => typeof r.to == "string" ? Ya.headMatch(r.to, "http") : !1), a = M(() => !(r.disabled || r.useClick || i.value)), s = M(() => {
      const o = {
        style: {
          color: "rgba(var(--v-theme-on-surface), var(--v-high-emphasis-opacity))"
        },
        target: r.target,
        class: {
          "ng-link": !0,
          "d-block": !r.inline,
          "d-inline": r.inline
        }
      };
      return r.disabled ? o : (o.onClick = (l) => {
        l.stopPropagation();
      }, r.useClick ? (o.onClick = (l) => {
        l.stopPropagation(), n("click");
      }, o) : i.value ? (o.href = r.to, o) : (o.to = r.to, o));
    });
    return (o, l) => {
      const c = ue("RouterLink");
      return a.value ? (I(), $e(c, Eo(Rn({ key: 0 }, s.value)), {
        default: de(() => [
          xe(o.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 16)) : (I(), W("a", Eo(Rn({ key: 1 }, s.value)), [
        xe(o.$slots, "default", {}, void 0, !0)
      ], 16));
    };
  }
}), X6 = /* @__PURE__ */ zr(Z6, [["__scopeId", "data-v-a4e972e6"]]), J6 = /* @__PURE__ */ he({
  __name: "loaders",
  props: {
    autoStart: {
      required: !1,
      type: Boolean,
      default: () => !0
    },
    items: {
      required: !0,
      type: Array
    }
  },
  setup(e) {
    const t = e, r = Ce({
      int: null,
      error: void 0,
      errorName: "",
      called: !1,
      loading: !0,
      started: !1
    });
    ot(() => {
      setTimeout(() => i(), 10), r.int = setInterval(() => i(), 500), t.autoStart && n();
    }), Et(() => {
      r.int && clearInterval(r.int);
    });
    const n = async () => {
      for (let a of t.items)
        a.called === !1 && await a.start({});
    }, i = () => {
      let a, s = "", o = !1, l = !1, c = t.items || [];
      for (let u of c)
        if (u.called) {
          o = !0;
          break;
        }
      for (let u of c)
        if (u.loading) {
          l = !0;
          break;
        }
      for (let u of c)
        if (u.fail) {
          a = u.fail.error, s = `Loader: ${u.fail.name}`;
          break;
        }
      r.error = a, r.called = o, r.loading = l, r.errorName = s, r.started = !0;
    };
    return (a, s) => (I(), W("div", null, [
      xe(a.$slots, "default", {
        errorName: r.errorName,
        loading: r.loading,
        error: r.error
      })
    ]));
  }
});
class K1 extends mt {
  constructor(r, n) {
    var i, a, s;
    super();
    G(this, "id");
    G(this, "icon");
    G(this, "aMap");
    G(this, "aMapMarker");
    G(this, "googleMap");
    G(this, "googleMarker");
    G(this, "googleInfowindow");
    this.id = n.id || pn.createUuid(), this.icon = n.icon, r instanceof Ka && (this.googleMap = r, this.googleInfowindow = new google.maps.InfoWindow({
      content: n.content
    }), this.googleMarker = new google.maps.Marker({
      map: this.googleMap.map,
      icon: this.icon,
      animation: google.maps.Animation.DROP,
      position: n.position
    }), this.googleMarker.addListener("click", () => {
      this.emit("click", this.getPosition());
    }), n.content && ((a = this.googleInfowindow) == null || a.open({
      map: (i = this.googleMap) == null ? void 0 : i.map,
      anchor: this.googleMarker
    }))), r instanceof Rl && (this.aMap = r, this.aMap.map && (this.aMapMarker = new AMap.Marker({
      icon: this.icon || "https://a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png",
      anchor: "bottom-center",
      position: new AMap.LngLat(n.position.lng, n.position.lat)
    }), n.content && this.aMapMarker.setLabel({
      content: n.content,
      offset: new AMap.Pixel(0, 42),
      direction: "center"
    }), this.aMapMarker.setMap(this.aMap.map), this.aMapMarker.on("click", () => {
      this.emit("click", this.getPosition());
    }))), (s = n.onload) == null || s.call(n, this);
  }
  getInMapMarkers() {
    return this.googleMap ? this.googleMap.markers.slice() : this.aMap ? this.aMap.markers.slice() : [];
  }
  hideLabel() {
    this.googleInfowindow && this.googleInfowindow.close(), this.aMapMarker && this.aMapMarker.setLabel({
      content: "",
      offset: new AMap.Pixel(0, 0),
      direction: "center"
    });
  }
  hasLabel() {
    return this.googleInfowindow ? !!this.googleInfowindow.getAnchor() : this.aMapMarker ? !!this.aMapMarker.getLabel().content : !1;
  }
  setLabel(r) {
    var n, i, a;
    this.googleMarker && ((i = this.googleInfowindow) == null || i.open((n = this.googleMap) == null ? void 0 : n.map, this.googleMarker), (a = this.googleInfowindow) == null || a.setContent(r)), this.aMapMarker && this.aMapMarker.setLabel({
      content: r,
      offset: new AMap.Pixel(0, 42),
      direction: "center"
    });
  }
  remove() {
    this.googleMarker && (this.googleMarker.setMap(null), this.googleMap && (this.googleMap.markers = this.googleMap.markers.filter((r) => r.id !== this.id))), this.aMapMarker && (this.aMapMarker.setMap(null), this.aMap && (this.aMap.markers = this.aMap.markers.filter((r) => r.id !== this.id)));
  }
  moveTo(r) {
    this.googleMarker && this.googleMarker.setPosition(r), this.aMapMarker && this.aMapMarker.setPosition([
      r.lng,
      r.lat
    ]);
  }
  getPosition() {
    const r = {
      lat: 0,
      lng: 0
    };
    if (this.googleMarker) {
      let n = this.googleMarker.getPosition();
      n && (r.lat = n.lat(), r.lng = n.lng());
    }
    if (this.aMapMarker) {
      let n = this.aMapMarker.getPosition();
      n && (r.lat = n.getLat(), r.lng = n.getLng());
    }
    return r;
  }
}
const Q6 = {
  libName: "nextgen-front-lib"
}, Kt = new z2(Q6.libName), e5 = Kt.checkout("GoogleMap");
function t5() {
  var e;
  if (!((e = window.__ng_state.gmap) != null && e.installed))
    throw e5.create("google map not installed.");
}
class Ka extends mt {
  constructor() {
    super();
    G(this, "map");
    G(this, "routes", []);
    G(this, "markers", []);
    t5();
  }
  static getNavigationUrl(r) {
    let { startName: n, startLng: i, startLat: a, endName: s, endLng: o, endLat: l } = r, c = `https://www.google.com/maps/dir/?api=1&origin=${a},${i}&destination=${l},${o}&travelmode=driving`;
    return n && (c += `&origin_place_id=${encodeURIComponent(n)}`), s && (c += `&destination_place_id=${encodeURIComponent(s)}`), c;
  }
  static async install(r) {
    window.__ng_state.gmap == null && (window.__ng_state.gmap = {
      installed: !1
    }), window.__ng_state.gmap.installed === !1 && (window.__ng_state.gmap.installed = !0, await new Promise((n, i) => {
      window.initGoogleMap = () => n(null), Hi.importScript(`https://maps.googleapis.com/maps/api/js?key=${r.apiKey}&callback=initGoogleMap`).catch(i);
    }));
  }
  static isInstalled() {
    var r;
    return !!((r = window.__ng_state.gmap) != null && r.installed);
  }
  start(r, n) {
    this.map == null && (this.map = new google.maps.Map(r, {
      zoom: n.zoom || 15,
      center: n.center || { lat: 0, lng: 0 }
    }), this.map.setOptions({
      disableDefaultUI: !0
    }), this.map.addListener("click", (i) => {
      var a, s;
      this.emit("click", {
        lat: ((a = i.latLng) == null ? void 0 : a.lat()) || 0,
        lng: ((s = i.latLng) == null ? void 0 : s.lng()) || 0
      });
    }), this.map.addListener("center_changed", () => {
      var i, a;
      this.map && this.emit("move", {
        lat: ((i = this.map.getCenter()) == null ? void 0 : i.lat()) || 0,
        lng: ((a = this.map.getCenter()) == null ? void 0 : a.lng()) || 0
      });
    }));
  }
  moveTo(r) {
    var n;
    (n = this.map) == null || n.moveCamera({
      center: r,
      zoom: this.map.getZoom()
    });
  }
  zoomTo(r) {
    var n;
    (n = this.map) == null || n.moveCamera({
      zoom: r
    });
  }
  close() {
    this.removeAllRoute(), this.removeAllMarker(), this.map && (this.map = void 0);
  }
  fitView() {
    if (this.map) {
      const r = new google.maps.LatLngBounds();
      for (let n of this.markers)
        r.extend(n.getPosition());
      this.map.fitBounds(r);
    }
  }
  // =================
  //
  // Marker
  //
  addMarker(r) {
    const n = new K1(this, r);
    return this.markers.push(n), n.on("click", () => {
      this.emit("clickMarker", n);
    }), n;
  }
  removeAllMarker() {
    this.markers.forEach((r) => r.remove()), this.markers = [];
  }
  reloadMarkers(r) {
    this.markers.filter((n) => !r.find((i) => i.id === n.id)).forEach((n) => n.remove()), r.forEach((n) => {
      const i = this.markers.find((a) => a.id === n.id);
      i ? i.moveTo(n.position) : this.addMarker(n);
    });
  }
  // =================
  //
  // Route
  //
  addRoute(r) {
    const n = new Z1(this, r);
    return this.routes.push(n), n;
  }
  removeAllRoute() {
    this.routes.forEach((r) => r.remove()), this.routes = [];
  }
  reloadRoutes(r) {
    this.routes.filter((n) => !r.find((i) => i.id === n.id)).forEach((n) => n.remove()), r.forEach((n) => {
      let i = this.routes.find((a) => a.id === n.id);
      i ? i.update(n) : this.addRoute(n);
    });
  }
}
class Z1 extends mt {
  constructor(r, n) {
    super();
    G(this, "id");
    G(this, "aMap");
    G(this, "aMapDriving");
    G(this, "googleMap");
    G(this, "googleDirectionsService");
    G(this, "googleDirectionsRenderer");
    this.id = n.id || pn.createUuid(), r instanceof Ka && (this.googleMap = r, this.googleDirectionsService = new google.maps.DirectionsService(), this.update(n)), r instanceof Rl && (this.aMap = r, this.aMap.map && this.update(n));
  }
  /**
   * @zh 刪除路線
   * @en Remove route
   */
  remove() {
    this.clearRenderer(), this.googleMap && (this.googleMap.routes = this.googleMap.routes.filter((r) => r.id !== this.id)), this.aMap && (this.aMap.routes = this.aMap.routes.filter((r) => r.id !== this.id));
  }
  clearRenderer() {
    if (this.googleDirectionsRenderer && (this.googleDirectionsRenderer.setDirections(null), this.googleDirectionsRenderer.setMap(null), this.googleDirectionsRenderer = void 0), this.aMap) {
      const r = window.AMap, n = r.Driving;
      this.aMapDriving && this.aMapDriving.clear(), this.aMapDriving = new n({
        map: this.aMap.map,
        policy: r.DrivingPolicy.LEAST_TIME
      });
    }
  }
  update(r) {
    if (this.clearRenderer(), this.googleMap && this.googleMap.map && this.googleDirectionsService) {
      const n = {
        origin: r.origin,
        destination: r.destination,
        travelMode: google.maps.TravelMode[r.travelMode]
      };
      this.googleDirectionsRenderer = new google.maps.DirectionsRenderer({
        markerOptions: {
          visible: !1
        }
      }), this.googleDirectionsRenderer.setMap(this.googleMap.map), this.googleDirectionsService.route(n, (i, a) => {
        a == google.maps.DirectionsStatus.OK ? this.googleDirectionsRenderer && this.googleDirectionsRenderer.setDirections(i) : this.emit("failed", {
          status: a
        });
      });
    }
    if (this.aMap && this.aMap.map) {
      const n = [r.origin.lng, r.origin.lat], i = [r.destination.lng, r.destination.lat];
      this.aMapDriving.search(n, i, (a, s) => {
        a === "complete" || console.log("获取驾车数据失败：" + s);
      });
    }
  }
}
const r5 = Kt.checkout("AMap");
function n5() {
  var e;
  if (!((e = window.__ng_state.amap) != null && e.installed))
    throw r5.create("amap not installed.");
}
class Rl extends mt {
  constructor() {
    super();
    G(this, "map");
    G(this, "routes", []);
    G(this, "markers", []);
    n5();
  }
  static getNavigationUrl(r) {
    const { startName: n, startLng: i, startLat: a, endName: s, endLng: o, endLat: l } = r, c = new URL("https://uri.amap.com/navigation");
    return c.searchParams.set("from", `${i},${a},${n}`), c.searchParams.set("to", `${o},${l},${s}`), c.searchParams.set("mode", "car"), c.searchParams.set("policy", "1"), c.searchParams.set("src", "mypage"), c.searchParams.set("coordinate", "gaode"), c.searchParams.set("callnative", "1"), c.href;
  }
  static async install(r) {
    window.__ng_state.amap == null && (window.__ng_state.amap = {
      installed: !1
    }), window.__ng_state.amap.installed === !1 && (window.__ng_state.amap.installed = !0, window._AMapSecurityConfig = {
      serviceHost: r.serviceHost,
      securityJsCode: r.securityJsCode
    }, await Hi.importScript(`https://webapi.amap.com/maps?v=2.0&key=${r.apiKey}&plugin=AMap.Driving`));
  }
  static isInstalled() {
    var r;
    return !!((r = window.__ng_state.amap) != null && r.installed);
  }
  start(r, n) {
    this.map == null && (this.map = new window.AMap.Map(r, {
      zoom: n.zoom ?? 10,
      center: n.center ? [n.center.lng, n.center.lat] : void 0
    }), this.map.on("click", (i) => {
      this.emit("click", {
        lat: i.lnglat.lat,
        lng: i.lnglat.lng
      });
    }), this.map.on("mapmove", () => {
      this.map && this.emit("move", {
        lat: this.map.getCenter().lat,
        lng: this.map.getCenter().lng
      });
    }));
  }
  moveTo(r) {
    var n;
    (n = this.map) == null || n.setCenter([
      r.lng,
      r.lat
    ]);
  }
  zoomTo(r) {
    var n;
    (n = this.map) == null || n.setZoom(r);
  }
  close() {
    this.removeAllRoute(), this.removeAllMarker(), this.map && (this.map = void 0);
  }
  fitView() {
    this.map && this.map.setFitView();
  }
  // =================
  //
  // Marker
  //
  addMarker(r) {
    const n = new K1(this, r);
    return this.markers.push(n), n.on("click", () => {
      this.emit("clickMarker", n);
    }), n;
  }
  removeAllMarker() {
    this.markers.forEach((r) => r.remove()), this.markers = [];
  }
  reloadMarkers(r) {
    this.markers.filter((n) => !r.find((i) => i.id === n.id)).forEach((n) => n.remove()), r.forEach((n) => {
      const i = this.markers.find((a) => a.id === n.id);
      i ? i.moveTo(n.position) : this.addMarker(n);
    });
  }
  // =================
  //
  // Route
  //
  addRoute(r) {
    const n = new Z1(this, r);
    return this.routes.push(n), n;
  }
  removeAllRoute() {
    this.routes.forEach((r) => r.remove()), this.routes = [];
  }
  reloadRoutes(r) {
    this.routes.filter((n) => !r.find((i) => i.id === n.id)).forEach((n) => n.remove()), r.forEach((n) => {
      let i = this.routes.find((a) => a.id === n.id);
      i ? i.update(n) : this.addRoute(n);
    });
  }
}
const i5 = /* @__PURE__ */ he({
  __name: "map",
  props: {
    height: {
      type: String,
      required: !1,
      default: "400px"
    },
    /** 可以指定使用哪個地圖，如果不指定系統會從環境判定 */
    mode: {
      type: String,
      required: !1,
      default: () => Ka.isInstalled() ? "google" : "amap"
    },
    zoom: {
      type: Number,
      required: !1,
      default: 8
    },
    center: {
      type: Object,
      required: !0
    },
    markers: {
      type: Array,
      required: !1,
      default: () => []
    },
    routes: {
      type: Array,
      required: !1,
      default: () => []
    }
  },
  emits: {
    move: (e) => !0,
    click: (e) => !0,
    clickMarker: (e) => !0
  },
  setup(e, { expose: t, emit: r }) {
    const n = e, i = r;
    t({
      fitView: () => a.fitView()
    });
    const a = n.mode === "google" ? new Ka() : new Rl(), s = ce();
    return ot(() => {
      a && s.value && (a.start(s.value, {
        zoom: n.zoom,
        center: n.center
      }), a.reloadRoutes(n.routes), a.reloadMarkers(n.markers), a.on("move", (o) => i("move", o)), a.on("click", (o) => i("click", o)), a.on("clickMarker", (o) => i("clickMarker", o)));
    }), Et(() => {
      a && a.close();
    }), pe(() => n.zoom, () => a == null ? void 0 : a.zoomTo(n.zoom)), pe(() => n.center, () => a == null ? void 0 : a.moveTo(n.center), {
      deep: !0
    }), pe(() => n.routes, () => a == null ? void 0 : a.reloadRoutes(n.routes), {
      deep: !0
    }), pe(() => n.markers, () => a == null ? void 0 : a.reloadMarkers(n.markers), {
      deep: !0
    }), (o, l) => (I(), W("div", {
      ref_key: "main",
      ref: s,
      style: Ne({
        height: e.height
      })
    }, null, 4));
  }
}), a5 = {
  key: 0,
  class: "component-outline-text py-2"
}, s5 = { class: "w-100 opacity-0" }, o5 = { key: 1 }, l5 = /* @__PURE__ */ he({
  __name: "outline-text",
  props: {
    text: {
      type: String,
      required: !0
    },
    disabled: {
      type: Boolean,
      required: !1,
      default: () => !1
    },
    fontColor: {
      type: String,
      required: !1,
      default: () => "white"
    },
    outlineColor: {
      type: String,
      required: !1,
      default: () => "cas-primary"
    },
    outlineWeight: {
      type: Number,
      required: !1,
      default: () => 2
    }
  },
  setup(e) {
    const t = e, r = M(() => t.outlineColor === "cas-primary" ? "#005A8E" : t.outlineColor === "cas-secondary" ? "#5E3013" : Ya.headMatch(t.outlineColor, "--") ? `var(${t.outlineColor})` : t.outlineColor);
    return (n, i) => e.disabled === !1 ? (I(), W("div", a5, [
      oe("div", {
        class: "w-100 component-outline-text-stroke",
        style: Ne(`-webkit-text-stroke: ${e.outlineWeight}px ${r.value}`)
      }, ke(e.text), 5),
      oe("div", {
        class: "w-100 component-outline-text-no-stroke",
        style: Ne({ color: e.fontColor })
      }, ke(e.text), 5),
      oe("div", s5, ke(e.text), 1)
    ])) : (I(), W("div", o5, [
      oe("div", null, ke(e.text), 1)
    ]));
  }
}), c5 = /* @__PURE__ */ zr(l5, [["__scopeId", "data-v-5c33c662"]]), u5 = /* @__PURE__ */ he({
  __name: "pagination",
  props: {
    alwaysShow: {
      type: Boolean,
      required: !1,
      default: () => !1
    },
    totalVisible: {
      type: Number,
      required: !1,
      default: () => null
    },
    color: {
      type: String,
      required: !1,
      default: () => "primary"
    },
    total: {
      type: Number,
      required: !1,
      default: () => 1
    },
    prePage: {
      type: Number,
      required: !1,
      default: () => 1
    },
    modelValue: {
      type: Number,
      required: !1,
      default: () => 1
    },
    loading: {
      type: Boolean,
      required: !1,
      default: () => !1
    },
    scrollTo: {
      type: null,
      required: !1,
      default: () => null
    }
  },
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, { emit: t }) {
    const r = new Ao({
      defCheckValue: () => {
        var c;
        return ((c = n.value) == null ? void 0 : c.clientWidth) || 0;
      },
      points: Ao.bootstrapBreakpoints
    }), n = ce(), i = e, a = t, s = M(() => !!(i.alwaysShow || l.value > 1)), o = M({
      get: () => i.modelValue,
      set: (c) => a("update:modelValue", c || 1)
    }), l = M(() => {
      let c = Math.ceil(i.total / i.prePage);
      return isNaN(c) ? 1 : c || 1;
    });
    return pe(() => o.value, () => {
      if (i.scrollTo)
        if (i.scrollTo === "top")
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
          });
        else {
          const u = i.scrollTo.getBoundingClientRect().top + window.pageYOffset + -100;
          window.scrollTo({
            top: u,
            behavior: "smooth"
          });
        }
    }), (c, u) => {
      const f = ue("v-pagination"), d = ue("v-progress-linear");
      return I(), W("div", {
        ref_key: "wrapper",
        ref: n,
        class: "mt-4"
      }, [
        s.value ? (I(), $e(f, {
          key: 0,
          modelValue: o.value,
          "onUpdate:modelValue": u[0] || (u[0] = (h) => o.value = h),
          color: e.color,
          length: l.value,
          disabled: e.loading,
          size: Y(r).in("sm-and-down") ? "small" : "default",
          "total-visible": e.totalVisible ? e.totalVisible : Y(r).in("sm-and-down") ? 4 : 7
        }, null, 8, ["modelValue", "color", "length", "disabled", "size", "total-visible"])) : ve("", !0),
        s.value && e.loading ? (I(), $e(d, {
          key: 1,
          "buffer-value": "0",
          indeterminate: "",
          style: { "max-width": "200px" },
          color: e.color
        }, null, 8, ["color"])) : ve("", !0)
      ], 512);
    };
  }
}), X1 = (e, t = 100, r = 100) => {
  const n = new Al({
    delay: t,
    maxValueLength: r
  });
  return ot(() => {
    n.on("trigger", e);
  }), Et(() => {
    n.close();
  }), n;
}, f5 = { class: "lib-component-search-bar" }, d5 = { class: "text-center" }, h5 = /* @__PURE__ */ he({
  __name: "search",
  props: {
    searchValue: {
      type: String,
      required: !0
    },
    items: {
      type: Array,
      required: !1,
      default: () => []
    },
    loading: {
      type: Boolean,
      required: !1,
      default: () => !1
    },
    itemTitle: {
      type: String,
      required: !1,
      default: () => "title"
    }
  },
  emits: {
    closed: () => !0,
    changed: () => !0,
    selected: (e) => !0
  },
  setup(e, { emit: t }) {
    const r = e, n = t, i = X1(() => a(), 100, 5);
    pe(() => r.searchValue, () => {
      i.input("");
    });
    const a = () => {
      r.searchValue ? n("changed") : n("closed");
    }, s = (o) => {
      n("selected", o), n("closed");
    };
    return (o, l) => {
      const c = ue("v-progress-circular"), u = ue("VList"), f = ue("v-list-item");
      return I(), W("div", f5, [
        xe(o.$slots, "default", {}, void 0, !0),
        e.loading ? (I(), $e(u, {
          key: 0,
          class: "lib-component-search-list rounded elevation-3"
        }, {
          default: de(() => [
            xe(o.$slots, "loading", {}, () => [
              oe("div", d5, [
                ae(c, {
                  color: "primary",
                  indeterminate: ""
                })
              ])
            ], !0)
          ]),
          _: 3
        })) : e.items.length ? (I(), $e(u, {
          key: 1,
          class: "lib-component-search-list rounded elevation-3"
        }, {
          default: de(() => [
            xe(o.$slots, "list", {}, () => [
              (I(!0), W(Be, null, et(e.items, (d) => (I(), $e(f, {
                key: typeof d == "string" ? d : d[e.itemTitle],
                title: typeof d == "string" ? d : d[e.itemTitle],
                onClick: (h) => s(d)
              }, null, 8, ["title", "onClick"]))), 128))
            ], !0)
          ]),
          _: 3
        })) : ve("", !0)
      ]);
    };
  }
}), p5 = /* @__PURE__ */ zr(h5, [["__scopeId", "data-v-a83e4c70"]]), v5 = /* @__PURE__ */ he({
  __name: "skeleton-group",
  props: {
    mobile: {
      type: Array,
      required: !1,
      default: () => null
    },
    desktop: {
      type: Array,
      required: !0,
      default: () => []
    },
    height: {
      type: Number,
      required: !1,
      default: () => 300
    }
  },
  setup(e) {
    const t = new Ao({
      defCheckValue: () => {
        var a;
        return ((a = r.value) == null ? void 0 : a.clientWidth) || 0;
      },
      points: Ao.bootstrapBreakpoints
    }), r = ce(), n = e, i = M(() => n.mobile && t.in("sm-and-down") ? n.mobile : n.desktop);
    return (a, s) => {
      const o = ue("v-col"), l = ue("v-row");
      return I(), W("div", {
        ref_key: "wrapper",
        ref: r,
        style: Ne({ height: `${e.height}px` })
      }, [
        ae(l, {
          "no-gutters": "",
          class: "my-n2 w-100 h-100 flex-nowrap"
        }, {
          default: de(() => [
            (I(!0), W(Be, null, et(i.value, (c, u) => (I(), $e(o, {
              key: u,
              cols: c[0]
            }, {
              default: de(() => [
                (I(!0), W(Be, null, et(c[1], (f) => (I(), W("div", {
                  key: f,
                  style: Ne({
                    height: `${e.height / c[1]}px`
                  }),
                  class: "pa-2"
                }, [
                  ae(E0)
                ], 4))), 128))
              ]),
              _: 2
            }, 1032, ["cols"]))), 128))
          ]),
          _: 1
        })
      ], 4);
    };
  }
}), g5 = () => {
  const { service: e, stage: t, version: r } = As(), n = new mx(`lib-${e}-${t}`, {
    intercept: {
      get(i, a, { isDefault: s, defaultValue: o }) {
        return s ? a : a.version !== r ? (n.remove(i), o()) : a.data;
      },
      set(i, a) {
        return {
          data: a,
          version: r,
          createdAt: Date.now()
        };
      }
    },
    defaultColumns: {
      tablefilterMemories: () => ({})
    }
  });
  return n;
}, Kh = () => {
  const { service: e, stage: t, version: r } = As(), n = new mx(`lib-pd-${e}-${t}`, {
    storageSystem: sessionStorage,
    intercept: {
      get(i, a, { isDefault: s, defaultValue: o }) {
        return s ? a : a.version !== r ? (n.remove(i), o()) : a.data;
      },
      set(i, a) {
        return {
          data: a,
          version: r,
          createdAt: Date.now()
        };
      }
    },
    defaultColumns: {}
  });
  return n;
}, m5 = ["onClick"], x5 = {
  colspan: "100%",
  class: "component-twr-detail"
}, y5 = { key: 0 }, b5 = /* @__PURE__ */ he({
  __name: "table",
  props: {
    height: {
      type: String,
      required: !1,
      default: () => {
      }
    },
    sorts: {
      type: Object,
      required: !1,
      default: () => ({})
    },
    sortUpValue: {
      type: null,
      required: !1,
      default: () => !0
    },
    sortDownValue: {
      type: null,
      required: !1,
      default: () => !1
    },
    elevation: {
      type: Number,
      required: !1,
      default: () => 1
    },
    fixedHeader: {
      type: Boolean,
      required: !1,
      default: () => !1
    },
    headerColor: {
      type: String,
      required: !1,
      default: () => "secondary"
    },
    textNowrap: {
      type: String,
      required: !1,
      default: () => "none"
    },
    rowStyle: {
      type: Function,
      required: !1,
      default: () => () => ""
    },
    filterMemory: {
      type: String,
      required: !1,
      default: () => ""
    },
    filterShow: {
      type: Boolean,
      required: !1,
      default: () => !1
    },
    filterTitle: {
      type: String,
      required: !1,
      default: () => "Filter"
    },
    fields: {
      required: !0,
      type: Array
    },
    items: {
      required: !0,
      type: Array
    },
    loading: {
      type: Boolean,
      required: !1,
      default: () => !1
    }
  },
  emits: {
    "click-item": (e) => !0,
    "click-sort": (e, t) => !0,
    "update:sorts": (e) => !0
  },
  setup(e, { emit: t }) {
    const r = hs(), n = Co.peel, i = g5(), a = new Kf(), s = e, o = t, l = ce(), c = Ce({
      reloaded: !0,
      modalShow: !1,
      isOverflow: !1,
      showShadow: !1,
      showFields: []
    }), u = M({
      get: () => s.sorts,
      set: (b) => o("update:sorts", b)
    }), f = M(() => r.hasListener("click-item")), d = M(() => {
      if (s.items.length === 0 || s.filterShow === !1)
        return !1;
      for (let b of s.fields)
        if (b.optionShow)
          return !0;
      return !1;
    }), h = M(() => s.fields.filter((b) => c.showFields.includes(b.key))), p = M(() => s.fields.map((w) => w.key).filter((w) => !c.showFields.includes(w)));
    q2(l, () => {
      var w;
      let b = (w = l.value) == null ? void 0 : w.$el;
      if (b) {
        let E = b.getElementsByTagName("table")[0];
        E && (c.isOverflow = E.clientWidth > b.clientWidth, c.showShadow = c.isOverflow);
      }
    });
    const v = new Al({
      delay: 50
    });
    v.on("trigger", () => {
      c.reloaded = !1, setTimeout(() => {
        c.reloaded = !0;
      }, 10);
    }), pe(() => c.showFields, () => {
      g(), v.input("");
    }, { deep: !0 }), ot(() => {
      c.showFields = s.fields.map((E) => E.key);
      let b = s.filterMemory;
      if (b) {
        let E = i.get("tablefilterMemories");
        E[b] && (c.showFields = c.showFields.filter(($) => !E[b].includes($)));
      }
      let w = l.value.$el.getElementsByClassName("v-table__wrapper")[0];
      w && (a.observe(w), a.add("scroll", () => {
        c.isOverflow && (c.showShadow = w.scrollLeft === 0);
      }));
    }), Et(() => {
      v.close(), a.clear();
    });
    const g = () => {
      let b = s.filterMemory;
      if (b) {
        let w = i.get("tablefilterMemories");
        w[b] ? w[b] = p.value : w[b] = [], i.set("tablefilterMemories", w);
      }
    }, m = (b) => {
      o("click-item", b);
    }, y = (b, w, E) => {
      let $ = n(w, b.key);
      return b.formatter == null ? $ : b.formatter($, b.key, w, E);
    }, _ = () => {
      c.modalShow = !0;
    }, x = (b) => {
      u.value[b] = u.value[b] === s.sortDownValue ? s.sortUpValue : s.sortDownValue, o("click-sort", b, u.value[b]);
    };
    return (b, w) => {
      const E = ue("v-icon"), $ = ue("v-table"), C = ue("v-checkbox"), D = ue("v-badge");
      return I(), W("div", {
        style: { position: "relative" },
        class: Ae(`elevation-${e.elevation}`)
      }, [
        ae($, {
          ref_key: "table",
          ref: l,
          height: e.height,
          "fixed-header": e.fixedHeader,
          class: Ae({
            "component-shadow-right": c.showShadow
          })
        }, {
          default: de(() => [
            oe("thead", null, [
              oe("tr", null, [
                (I(!0), W(Be, null, et(h.value, (A, S) => (I(), W("th", {
                  key: S + "ff",
                  class: Ae({
                    [`bg-${e.headerColor}`]: !0,
                    "text-start": A.textAlign === "start",
                    "text-center": A.textAlign === "center",
                    "text-end": A.textAlign === "end",
                    "component-text-nowrap": ["head", "all"].includes(e.textNowrap)
                  })
                }, [
                  xe(b.$slots, "h-" + A.key, {
                    field: A,
                    item: null,
                    value: A.label()
                  }, () => [
                    oe("span", null, ke(A.label()), 1)
                  ], !0),
                  A.sortBtn ? (I(), $e(E, {
                    key: 0,
                    size: "small",
                    class: Ae(["mx-1 component-table-sort-btn", {
                      "component-table-sort-btn-actived": u.value[A.key] === e.sortUpValue
                    }]),
                    color: u.value[A.key] === e.sortUpValue ? "primary" : "grey",
                    onClick: (k) => x(A.key)
                  }, {
                    default: de(() => [
                      kr(" mdi-arrow-down-thin ")
                    ]),
                    _: 2
                  }, 1032, ["color", "class", "onClick"])) : ve("", !0)
                ], 2))), 128))
              ])
            ]),
            oe("tbody", null, [
              (I(!0), W(Be, null, et(e.items, (A, S) => (I(), W(Be, {
                key: A.key
              }, [
                oe("tr", {
                  style: Ne(e.rowStyle(A, S)),
                  class: Ae({
                    "component-twr-is-btn": f.value
                  }),
                  onClick: (k) => m(A)
                }, [
                  (I(!0), W(Be, null, et(h.value, (k) => (I(), W("td", {
                    key: k.key,
                    class: Ae({
                      "text-start": k.textAlign === "start",
                      "text-center": k.textAlign === "center",
                      "text-end": k.textAlign === "end",
                      "component-text-nowrap": ["body", "all"].includes(e.textNowrap)
                    }),
                    style: Ne(k.style(y(k, A, S), k.key, A, S))
                  }, [
                    xe(b.$slots, "t-" + k.key.replace(/\./g, "-"), {
                      item: A,
                      field: k,
                      value: y(k, A, S)
                    }, () => [
                      oe("div", null, ke(y(k, A, S)), 1)
                    ], !0)
                  ], 6))), 128))
                ], 14, m5),
                Y(r).hasSlot("details") ? (I(), W("tr", {
                  key: S + "iddi"
                }, [
                  oe("td", x5, [
                    xe(b.$slots, "details", {
                      class: "w-100",
                      item: A
                    }, void 0, !0)
                  ])
                ])) : ve("", !0)
              ], 64))), 128))
            ]),
            xe(b.$slots, "end", {}, void 0, !0)
          ]),
          _: 3
        }, 8, ["height", "fixed-header", "class"]),
        e.items.length === 0 ? (I(), W("div", y5, [
          xe(b.$slots, "no-data", {}, void 0, !0)
        ])) : ve("", !0),
        ae(Oi, { "model-value": e.loading }, null, 8, ["model-value"]),
        ae(W1, {
          modelValue: c.modalShow,
          "onUpdate:modelValue": w[1] || (w[1] = (A) => c.modalShow = A),
          title: e.filterTitle
        }, {
          default: de(() => [
            (I(!0), W(Be, null, et(e.fields, (A) => (I(), W(Be, {
              key: A.key + "da"
            }, [
              A.optionShow ? (I(), $e(C, {
                key: 0,
                "hide-details": "",
                multiple: "",
                value: A.key,
                label: A.label(),
                "model-value": c.showFields,
                "onUpdate:modelValue": w[0] || (w[0] = (S) => c.showFields = S)
              }, null, 8, ["value", "label", "model-value"])) : ve("", !0)
            ], 64))), 128))
          ]),
          _: 1
        }, 8, ["modelValue", "title"]),
        d.value ? (I(), W("div", {
          key: 1,
          class: "print-no-show component-twr-filter",
          onClick: _
        }, [
          ae(D, {
            color: "red",
            "offset-x": "0",
            "offset-y": "0",
            dot: "",
            bordered: "",
            "model-value": p.value.length > 0
          }, {
            default: de(() => [
              ae(E, { size: "small" }, {
                default: de(() => [
                  kr("mdi-filter")
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["model-value"])
        ])) : ve("", !0)
      ], 2);
    };
  }
}), _5 = /* @__PURE__ */ zr(b5, [["__scopeId", "data-v-f23594ef"]]), w5 = /* @__PURE__ */ he({
  __name: "toolbar",
  props: {
    height: {
      type: String,
      required: !1,
      default: () => "48px"
    }
  },
  setup(e) {
    const t = hs(), r = e, n = Ce({
      headerStyleString: ""
    });
    ot(() => {
      let a = new Va();
      a.set("height", r.height), n.headerStyleString = a.join();
    });
    const i = M(() => {
      let a = "50%";
      return t.hasSlot("center") && (a = "33.33333%"), `height: fit-content; width: ${a};`;
    });
    return (a, s) => {
      const o = ue("v-row");
      return I(), W("div", {
        style: Ne(n.headerStyleString)
      }, [
        ae(o, {
          class: "component-toolbar-wrapper h-100",
          "no-gutters": "",
          align: "center"
        }, {
          default: de(() => [
            oe("div", {
              style: Ne(i.value)
            }, [
              xe(a.$slots, "default", {}, void 0, !0)
            ], 4),
            Y(t).hasSlot("center") ? (I(), W("div", {
              key: 0,
              class: "text-center",
              style: Ne(i.value)
            }, [
              xe(a.$slots, "center", {}, void 0, !0)
            ], 4)) : ve("", !0),
            oe("div", {
              class: "text-right",
              style: Ne(i.value)
            }, [
              xe(a.$slots, "right", {}, void 0, !0)
            ], 4)
          ]),
          _: 3
        })
      ], 4);
    };
  }
}), $5 = /* @__PURE__ */ zr(w5, [["__scopeId", "data-v-df86c481"]]), D5 = ["accept", "disabled"], E5 = ["accept", "disabled"], A5 = /* @__PURE__ */ he({
  __name: "upload",
  props: {
    loading: {
      type: Boolean,
      required: !1,
      default: () => !1
    },
    multiple: {
      type: Boolean,
      required: !1,
      default: () => !1
    },
    fileType: {
      type: String,
      required: !1,
      default: () => "*/*"
    },
    preupload: {
      type: Function,
      required: !1,
      default: null
    }
  },
  emits: ["error", "uploaded"],
  setup(e, { emit: t }) {
    const r = e, n = t, i = ce(), a = Ce({
      reading: !1
    }), s = () => {
      var l;
      (l = i.value) == null || l.click();
    }, o = async () => {
      var c;
      let l = (c = i.value) == null ? void 0 : c.files;
      if (l && l[0]) {
        let u = [], f = new xx(), d = new El({
          concurrentExecutions: 1
        });
        for (let h = 0; h < l.length; h++) {
          let p = l[h];
          r.preupload && (p = await r.preupload(p)), f.push(`file: ${h}`, () => d.pushAndWait(`file: ${h}`, () => new Promise((v, g) => {
            let m = new FileReader();
            m.readAsDataURL(p), m.onerror = g, m.onload = (y) => {
              y.target && u.push({
                url: y.target.result,
                file: p
              }), v(null);
            };
          })));
        }
        a.reading = !0, await f.start({}), a.reading = !1, n("uploaded", {
          files: u
        });
      }
    };
    return (l, c) => (I(), W("div", {
      style: { width: "fit-content", height: "fit-content", position: "relative" },
      onClick: s
    }, [
      xe(l.$slots, "default"),
      e.multiple ? (I(), W("input", {
        key: 0,
        ref_key: "fileInput",
        ref: i,
        hidden: "",
        type: "file",
        multiple: "",
        accept: e.fileType,
        disabled: a.reading || e.loading,
        onChange: o
      }, null, 40, D5)) : (I(), W("input", {
        key: 1,
        ref_key: "fileInput",
        ref: i,
        hidden: "",
        type: "file",
        accept: e.fileType,
        disabled: a.reading || e.loading,
        onChange: o
      }, null, 40, E5)),
      ae(Oi, {
        "model-value": e.loading || a.reading
      }, null, 8, ["model-value"])
    ]));
  }
}), A0 = (e, t) => {
  var n, i, a, s, o, l, c, u, f, d, h, p, v, g, m, y, _, x, b, w, E;
  if (typeof e == "string")
    return e;
  if (e.name === "AxiosError") {
    if (typeof ((n = e.response) == null ? void 0 : n.data) == "string" && e.response.data)
      return e.response.data;
    if ((a = (i = e.response) == null ? void 0 : i.data) != null && a.msg)
      return ((o = (s = e.response) == null ? void 0 : s.data) == null ? void 0 : o.msg) || t;
    if ((u = (c = (l = e.response) == null ? void 0 : l.data) == null ? void 0 : c.data) != null && u.msg)
      return ((h = (d = (f = e.response) == null ? void 0 : f.data) == null ? void 0 : d.data) == null ? void 0 : h.msg) || t;
    if ((v = (p = e.response) == null ? void 0 : p.data) != null && v.errors) {
      let $ = (m = (g = e.response) == null ? void 0 : g.data) == null ? void 0 : m.errors;
      if (Array.isArray($))
        return $[0] || t;
      {
        let [C] = Object.values($);
        return C || t;
      }
    }
    if ((x = (_ = (y = e.response) == null ? void 0 : y.data) == null ? void 0 : _.error) != null && x.message) {
      let $ = e.response.data.error.message, C = (E = (w = (b = e.response) == null ? void 0 : b.data) == null ? void 0 : w.error) == null ? void 0 : E.details;
      return typeof C == "string" && C ? `${$} => ${C}` : $;
    }
  }
  let r = e.message;
  return r && typeof r == "string" && r ? r : t || "unknown error";
}, C5 = { key: 0 }, S5 = {
  key: 1,
  class: "text-center"
}, k5 = { key: 1 }, O5 = {
  key: 1,
  class: "text-error text-center py-2"
}, F5 = {
  key: 2,
  style: { height: "32px" }
}, T5 = /* @__PURE__ */ he({
  __name: "visible-load",
  props: {
    disabled: {
      type: Boolean,
      required: !1,
      default: () => !1
    }
  },
  emits: {
    inited: (e) => !0,
    error: (e) => !0
  },
  setup(e, { expose: t, emit: r }) {
    const n = hs(), i = ce(), a = new yx(), s = (d) => {
      a.attach("trigger", d);
    }, o = e, l = r;
    t({
      hook: s
    }), wx(i, ([{ isIntersecting: d }]) => {
      c.inited === !1 && l("inited", s), c.inited = !0, c.isIntersecting = d;
    });
    const c = Ce({
      inited: !1,
      error: null,
      ticker: new bx(500),
      loading: !1,
      errorMessage: "",
      isIntersecting: !1
    }), u = M(() => !(c.inited === !1 || o.disabled || c.loading || c.error));
    ot(() => {
      c.ticker.on("next", () => {
        c.isIntersecting && f();
      });
    }), Et(() => {
      c.ticker.close();
    });
    const f = async () => {
      if (u.value === !1)
        return null;
      try {
        c.loading = !0, await a.notify("trigger", null);
      } catch (d) {
        c.error = d, c.errorMessage = A0(d, "unknown error"), l("error", {
          error: c.error,
          message: c.errorMessage
        });
      } finally {
        c.loading = !1;
      }
    };
    return (d, h) => {
      const p = ue("v-progress-circular");
      return I(), W("div", {
        ref_key: "target",
        ref: i
      }, [
        c.loading ? (I(), W("div", C5, [
          Y(n).hasSlot("loading") ? xe(d.$slots, "loading", { key: 0 }) : (I(), W("div", S5, [
            ae(p, {
              indeterminate: "",
              color: "primary"
            })
          ]))
        ])) : ve("", !0),
        c.error ? (I(), W("div", k5, [
          Y(n).hasSlot("error") ? xe(d.$slots, "error", {
            key: 0,
            error: c.error,
            message: c.errorMessage
          }) : (I(), W("div", O5, ke(c.errorMessage), 1))
        ])) : ve("", !0),
        !Y(n).hasSlot("default") && !c.loading && !c.error ? (I(), W("div", F5)) : ve("", !0),
        xe(d.$slots, "default", {
          loading: c.loading,
          error: c.error,
          message: c.errorMessage
        })
      ], 512);
    };
  }
});
/*!
 * @kurkle/color v0.3.2
 * https://github.com/kurkle/color#readme
 * (c) 2023 Jukka Kurkela
 * Released under the MIT License
 */
function ps(e) {
  return e + 0.5 | 0;
}
const an = (e, t, r) => Math.max(Math.min(e, r), t);
function Ca(e) {
  return an(ps(e * 2.55), 0, 255);
}
function cn(e) {
  return an(ps(e * 255), 0, 255);
}
function Er(e) {
  return an(ps(e / 2.55) / 100, 0, 1);
}
function Zh(e) {
  return an(ps(e * 100), 0, 100);
}
const jt = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, A: 10, B: 11, C: 12, D: 13, E: 14, F: 15, a: 10, b: 11, c: 12, d: 13, e: 14, f: 15 }, Ku = [..."0123456789ABCDEF"], M5 = (e) => Ku[e & 15], P5 = (e) => Ku[(e & 240) >> 4] + Ku[e & 15], Fs = (e) => (e & 240) >> 4 === (e & 15), B5 = (e) => Fs(e.r) && Fs(e.g) && Fs(e.b) && Fs(e.a);
function I5(e) {
  var t = e.length, r;
  return e[0] === "#" && (t === 4 || t === 5 ? r = {
    r: 255 & jt[e[1]] * 17,
    g: 255 & jt[e[2]] * 17,
    b: 255 & jt[e[3]] * 17,
    a: t === 5 ? jt[e[4]] * 17 : 255
  } : (t === 7 || t === 9) && (r = {
    r: jt[e[1]] << 4 | jt[e[2]],
    g: jt[e[3]] << 4 | jt[e[4]],
    b: jt[e[5]] << 4 | jt[e[6]],
    a: t === 9 ? jt[e[7]] << 4 | jt[e[8]] : 255
  })), r;
}
const R5 = (e, t) => e < 255 ? t(e) : "";
function N5(e) {
  var t = B5(e) ? M5 : P5;
  return e ? "#" + t(e.r) + t(e.g) + t(e.b) + R5(e.a, t) : void 0;
}
const L5 = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
function J1(e, t, r) {
  const n = t * Math.min(r, 1 - r), i = (a, s = (a + e / 30) % 12) => r - n * Math.max(Math.min(s - 3, 9 - s, 1), -1);
  return [i(0), i(8), i(4)];
}
function j5(e, t, r) {
  const n = (i, a = (i + e / 60) % 6) => r - r * t * Math.max(Math.min(a, 4 - a, 1), 0);
  return [n(5), n(3), n(1)];
}
function z5(e, t, r) {
  const n = J1(e, 1, 0.5);
  let i;
  for (t + r > 1 && (i = 1 / (t + r), t *= i, r *= i), i = 0; i < 3; i++)
    n[i] *= 1 - t - r, n[i] += t;
  return n;
}
function H5(e, t, r, n, i) {
  return e === i ? (t - r) / n + (t < r ? 6 : 0) : t === i ? (r - e) / n + 2 : (e - t) / n + 4;
}
function C0(e) {
  const r = e.r / 255, n = e.g / 255, i = e.b / 255, a = Math.max(r, n, i), s = Math.min(r, n, i), o = (a + s) / 2;
  let l, c, u;
  return a !== s && (u = a - s, c = o > 0.5 ? u / (2 - a - s) : u / (a + s), l = H5(r, n, i, u, a), l = l * 60 + 0.5), [l | 0, c || 0, o];
}
function S0(e, t, r, n) {
  return (Array.isArray(t) ? e(t[0], t[1], t[2]) : e(t, r, n)).map(cn);
}
function k0(e, t, r) {
  return S0(J1, e, t, r);
}
function V5(e, t, r) {
  return S0(z5, e, t, r);
}
function Y5(e, t, r) {
  return S0(j5, e, t, r);
}
function Q1(e) {
  return (e % 360 + 360) % 360;
}
function W5(e) {
  const t = L5.exec(e);
  let r = 255, n;
  if (!t)
    return;
  t[5] !== n && (r = t[6] ? Ca(+t[5]) : cn(+t[5]));
  const i = Q1(+t[2]), a = +t[3] / 100, s = +t[4] / 100;
  return t[1] === "hwb" ? n = V5(i, a, s) : t[1] === "hsv" ? n = Y5(i, a, s) : n = k0(i, a, s), {
    r: n[0],
    g: n[1],
    b: n[2],
    a: r
  };
}
function U5(e, t) {
  var r = C0(e);
  r[0] = Q1(r[0] + t), r = k0(r), e.r = r[0], e.g = r[1], e.b = r[2];
}
function q5(e) {
  if (!e)
    return;
  const t = C0(e), r = t[0], n = Zh(t[1]), i = Zh(t[2]);
  return e.a < 255 ? `hsla(${r}, ${n}%, ${i}%, ${Er(e.a)})` : `hsl(${r}, ${n}%, ${i}%)`;
}
const Xh = {
  x: "dark",
  Z: "light",
  Y: "re",
  X: "blu",
  W: "gr",
  V: "medium",
  U: "slate",
  A: "ee",
  T: "ol",
  S: "or",
  B: "ra",
  C: "lateg",
  D: "ights",
  R: "in",
  Q: "turquois",
  E: "hi",
  P: "ro",
  O: "al",
  N: "le",
  M: "de",
  L: "yello",
  F: "en",
  K: "ch",
  G: "arks",
  H: "ea",
  I: "ightg",
  J: "wh"
}, Jh = {
  OiceXe: "f0f8ff",
  antiquewEte: "faebd7",
  aqua: "ffff",
  aquamarRe: "7fffd4",
  azuY: "f0ffff",
  beige: "f5f5dc",
  bisque: "ffe4c4",
  black: "0",
  blanKedOmond: "ffebcd",
  Xe: "ff",
  XeviTet: "8a2be2",
  bPwn: "a52a2a",
  burlywood: "deb887",
  caMtXe: "5f9ea0",
  KartYuse: "7fff00",
  KocTate: "d2691e",
  cSO: "ff7f50",
  cSnflowerXe: "6495ed",
  cSnsilk: "fff8dc",
  crimson: "dc143c",
  cyan: "ffff",
  xXe: "8b",
  xcyan: "8b8b",
  xgTMnPd: "b8860b",
  xWay: "a9a9a9",
  xgYF: "6400",
  xgYy: "a9a9a9",
  xkhaki: "bdb76b",
  xmagFta: "8b008b",
  xTivegYF: "556b2f",
  xSange: "ff8c00",
  xScEd: "9932cc",
  xYd: "8b0000",
  xsOmon: "e9967a",
  xsHgYF: "8fbc8f",
  xUXe: "483d8b",
  xUWay: "2f4f4f",
  xUgYy: "2f4f4f",
  xQe: "ced1",
  xviTet: "9400d3",
  dAppRk: "ff1493",
  dApskyXe: "bfff",
  dimWay: "696969",
  dimgYy: "696969",
  dodgerXe: "1e90ff",
  fiYbrick: "b22222",
  flSOwEte: "fffaf0",
  foYstWAn: "228b22",
  fuKsia: "ff00ff",
  gaRsbSo: "dcdcdc",
  ghostwEte: "f8f8ff",
  gTd: "ffd700",
  gTMnPd: "daa520",
  Way: "808080",
  gYF: "8000",
  gYFLw: "adff2f",
  gYy: "808080",
  honeyMw: "f0fff0",
  hotpRk: "ff69b4",
  RdianYd: "cd5c5c",
  Rdigo: "4b0082",
  ivSy: "fffff0",
  khaki: "f0e68c",
  lavFMr: "e6e6fa",
  lavFMrXsh: "fff0f5",
  lawngYF: "7cfc00",
  NmoncEffon: "fffacd",
  ZXe: "add8e6",
  ZcSO: "f08080",
  Zcyan: "e0ffff",
  ZgTMnPdLw: "fafad2",
  ZWay: "d3d3d3",
  ZgYF: "90ee90",
  ZgYy: "d3d3d3",
  ZpRk: "ffb6c1",
  ZsOmon: "ffa07a",
  ZsHgYF: "20b2aa",
  ZskyXe: "87cefa",
  ZUWay: "778899",
  ZUgYy: "778899",
  ZstAlXe: "b0c4de",
  ZLw: "ffffe0",
  lime: "ff00",
  limegYF: "32cd32",
  lRF: "faf0e6",
  magFta: "ff00ff",
  maPon: "800000",
  VaquamarRe: "66cdaa",
  VXe: "cd",
  VScEd: "ba55d3",
  VpurpN: "9370db",
  VsHgYF: "3cb371",
  VUXe: "7b68ee",
  VsprRggYF: "fa9a",
  VQe: "48d1cc",
  VviTetYd: "c71585",
  midnightXe: "191970",
  mRtcYam: "f5fffa",
  mistyPse: "ffe4e1",
  moccasR: "ffe4b5",
  navajowEte: "ffdead",
  navy: "80",
  Tdlace: "fdf5e6",
  Tive: "808000",
  TivedBb: "6b8e23",
  Sange: "ffa500",
  SangeYd: "ff4500",
  ScEd: "da70d6",
  pOegTMnPd: "eee8aa",
  pOegYF: "98fb98",
  pOeQe: "afeeee",
  pOeviTetYd: "db7093",
  papayawEp: "ffefd5",
  pHKpuff: "ffdab9",
  peru: "cd853f",
  pRk: "ffc0cb",
  plum: "dda0dd",
  powMrXe: "b0e0e6",
  purpN: "800080",
  YbeccapurpN: "663399",
  Yd: "ff0000",
  Psybrown: "bc8f8f",
  PyOXe: "4169e1",
  saddNbPwn: "8b4513",
  sOmon: "fa8072",
  sandybPwn: "f4a460",
  sHgYF: "2e8b57",
  sHshell: "fff5ee",
  siFna: "a0522d",
  silver: "c0c0c0",
  skyXe: "87ceeb",
  UXe: "6a5acd",
  UWay: "708090",
  UgYy: "708090",
  snow: "fffafa",
  sprRggYF: "ff7f",
  stAlXe: "4682b4",
  tan: "d2b48c",
  teO: "8080",
  tEstN: "d8bfd8",
  tomato: "ff6347",
  Qe: "40e0d0",
  viTet: "ee82ee",
  JHt: "f5deb3",
  wEte: "ffffff",
  wEtesmoke: "f5f5f5",
  Lw: "ffff00",
  LwgYF: "9acd32"
};
function G5() {
  const e = {}, t = Object.keys(Jh), r = Object.keys(Xh);
  let n, i, a, s, o;
  for (n = 0; n < t.length; n++) {
    for (s = o = t[n], i = 0; i < r.length; i++)
      a = r[i], o = o.replace(a, Xh[a]);
    a = parseInt(Jh[s], 16), e[o] = [a >> 16 & 255, a >> 8 & 255, a & 255];
  }
  return e;
}
let Ts;
function K5(e) {
  Ts || (Ts = G5(), Ts.transparent = [0, 0, 0, 0]);
  const t = Ts[e.toLowerCase()];
  return t && {
    r: t[0],
    g: t[1],
    b: t[2],
    a: t.length === 4 ? t[3] : 255
  };
}
const Z5 = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
function X5(e) {
  const t = Z5.exec(e);
  let r = 255, n, i, a;
  if (t) {
    if (t[7] !== n) {
      const s = +t[7];
      r = t[8] ? Ca(s) : an(s * 255, 0, 255);
    }
    return n = +t[1], i = +t[3], a = +t[5], n = 255 & (t[2] ? Ca(n) : an(n, 0, 255)), i = 255 & (t[4] ? Ca(i) : an(i, 0, 255)), a = 255 & (t[6] ? Ca(a) : an(a, 0, 255)), {
      r: n,
      g: i,
      b: a,
      a: r
    };
  }
}
function J5(e) {
  return e && (e.a < 255 ? `rgba(${e.r}, ${e.g}, ${e.b}, ${Er(e.a)})` : `rgb(${e.r}, ${e.g}, ${e.b})`);
}
const hc = (e) => e <= 31308e-7 ? e * 12.92 : Math.pow(e, 1 / 2.4) * 1.055 - 0.055, ai = (e) => e <= 0.04045 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4);
function Q5(e, t, r) {
  const n = ai(Er(e.r)), i = ai(Er(e.g)), a = ai(Er(e.b));
  return {
    r: cn(hc(n + r * (ai(Er(t.r)) - n))),
    g: cn(hc(i + r * (ai(Er(t.g)) - i))),
    b: cn(hc(a + r * (ai(Er(t.b)) - a))),
    a: e.a + r * (t.a - e.a)
  };
}
function Ms(e, t, r) {
  if (e) {
    let n = C0(e);
    n[t] = Math.max(0, Math.min(n[t] + n[t] * r, t === 0 ? 360 : 1)), n = k0(n), e.r = n[0], e.g = n[1], e.b = n[2];
  }
}
function ey(e, t) {
  return e && Object.assign(t || {}, e);
}
function Qh(e) {
  var t = { r: 0, g: 0, b: 0, a: 255 };
  return Array.isArray(e) ? e.length >= 3 && (t = { r: e[0], g: e[1], b: e[2], a: 255 }, e.length > 3 && (t.a = cn(e[3]))) : (t = ey(e, { r: 0, g: 0, b: 0, a: 1 }), t.a = cn(t.a)), t;
}
function eB(e) {
  return e.charAt(0) === "r" ? X5(e) : W5(e);
}
class Za {
  constructor(t) {
    if (t instanceof Za)
      return t;
    const r = typeof t;
    let n;
    r === "object" ? n = Qh(t) : r === "string" && (n = I5(t) || K5(t) || eB(t)), this._rgb = n, this._valid = !!n;
  }
  get valid() {
    return this._valid;
  }
  get rgb() {
    var t = ey(this._rgb);
    return t && (t.a = Er(t.a)), t;
  }
  set rgb(t) {
    this._rgb = Qh(t);
  }
  rgbString() {
    return this._valid ? J5(this._rgb) : void 0;
  }
  hexString() {
    return this._valid ? N5(this._rgb) : void 0;
  }
  hslString() {
    return this._valid ? q5(this._rgb) : void 0;
  }
  mix(t, r) {
    if (t) {
      const n = this.rgb, i = t.rgb;
      let a;
      const s = r === a ? 0.5 : r, o = 2 * s - 1, l = n.a - i.a, c = ((o * l === -1 ? o : (o + l) / (1 + o * l)) + 1) / 2;
      a = 1 - c, n.r = 255 & c * n.r + a * i.r + 0.5, n.g = 255 & c * n.g + a * i.g + 0.5, n.b = 255 & c * n.b + a * i.b + 0.5, n.a = s * n.a + (1 - s) * i.a, this.rgb = n;
    }
    return this;
  }
  interpolate(t, r) {
    return t && (this._rgb = Q5(this._rgb, t._rgb, r)), this;
  }
  clone() {
    return new Za(this.rgb);
  }
  alpha(t) {
    return this._rgb.a = cn(t), this;
  }
  clearer(t) {
    const r = this._rgb;
    return r.a *= 1 - t, this;
  }
  greyscale() {
    const t = this._rgb, r = ps(t.r * 0.3 + t.g * 0.59 + t.b * 0.11);
    return t.r = t.g = t.b = r, this;
  }
  opaquer(t) {
    const r = this._rgb;
    return r.a *= 1 + t, this;
  }
  negate() {
    const t = this._rgb;
    return t.r = 255 - t.r, t.g = 255 - t.g, t.b = 255 - t.b, this;
  }
  lighten(t) {
    return Ms(this._rgb, 2, t), this;
  }
  darken(t) {
    return Ms(this._rgb, 2, -t), this;
  }
  saturate(t) {
    return Ms(this._rgb, 1, t), this;
  }
  desaturate(t) {
    return Ms(this._rgb, 1, -t), this;
  }
  rotate(t) {
    return U5(this._rgb, t), this;
  }
}
/*!
 * Chart.js v4.4.1
 * https://www.chartjs.org
 * (c) 2023 Chart.js Contributors
 * Released under the MIT License
 */
const tB = /* @__PURE__ */ (() => {
  let e = 0;
  return () => e++;
})();
function Ye(e) {
  return e === null || typeof e > "u";
}
function Ge(e) {
  if (Array.isArray && Array.isArray(e))
    return !0;
  const t = Object.prototype.toString.call(e);
  return t.slice(0, 7) === "[object" && t.slice(-6) === "Array]";
}
function Ee(e) {
  return e !== null && Object.prototype.toString.call(e) === "[object Object]";
}
function it(e) {
  return (typeof e == "number" || e instanceof Number) && isFinite(+e);
}
function It(e, t) {
  return it(e) ? e : t;
}
function Ke(e, t) {
  return typeof e > "u" ? t : e;
}
const rB = (e, t) => typeof e == "string" && e.endsWith("%") ? parseFloat(e) / 100 * t : +e;
function Ve(e, t, r) {
  if (e && typeof e.call == "function")
    return e.apply(r, t);
}
function gt(e, t, r, n) {
  let i, a, s;
  if (Ge(e))
    if (a = e.length, n)
      for (i = a - 1; i >= 0; i--)
        t.call(r, e[i], i);
    else
      for (i = 0; i < a; i++)
        t.call(r, e[i], i);
  else if (Ee(e))
    for (s = Object.keys(e), a = s.length, i = 0; i < a; i++)
      t.call(r, e[s[i]], s[i]);
}
function ep(e, t) {
  let r, n, i, a;
  if (!e || !t || e.length !== t.length)
    return !1;
  for (r = 0, n = e.length; r < n; ++r)
    if (i = e[r], a = t[r], i.datasetIndex !== a.datasetIndex || i.index !== a.index)
      return !1;
  return !0;
}
function qo(e) {
  if (Ge(e))
    return e.map(qo);
  if (Ee(e)) {
    const t = /* @__PURE__ */ Object.create(null), r = Object.keys(e), n = r.length;
    let i = 0;
    for (; i < n; ++i)
      t[r[i]] = qo(e[r[i]]);
    return t;
  }
  return e;
}
function ty(e) {
  return [
    "__proto__",
    "prototype",
    "constructor"
  ].indexOf(e) === -1;
}
function nB(e, t, r, n) {
  if (!ty(e))
    return;
  const i = t[e], a = r[e];
  Ee(i) && Ee(a) ? Xa(i, a, n) : t[e] = qo(a);
}
function Xa(e, t, r) {
  const n = Ge(t) ? t : [
    t
  ], i = n.length;
  if (!Ee(e))
    return e;
  r = r || {};
  const a = r.merger || nB;
  let s;
  for (let o = 0; o < i; ++o) {
    if (s = n[o], !Ee(s))
      continue;
    const l = Object.keys(s);
    for (let c = 0, u = l.length; c < u; ++c)
      a(l[c], e, s, r);
  }
  return e;
}
function Ma(e, t) {
  return Xa(e, t, {
    merger: iB
  });
}
function iB(e, t, r) {
  if (!ty(e))
    return;
  const n = t[e], i = r[e];
  Ee(n) && Ee(i) ? Ma(n, i) : Object.prototype.hasOwnProperty.call(t, e) || (t[e] = qo(i));
}
const tp = {
  // Chart.helpers.core resolveObjectKey should resolve empty key to root object
  "": (e) => e,
  // default resolvers
  x: (e) => e.x,
  y: (e) => e.y
};
function aB(e) {
  const t = e.split("."), r = [];
  let n = "";
  for (const i of t)
    n += i, n.endsWith("\\") ? n = n.slice(0, -1) + "." : (r.push(n), n = "");
  return r;
}
function sB(e) {
  const t = aB(e);
  return (r) => {
    for (const n of t) {
      if (n === "")
        break;
      r = r && r[n];
    }
    return r;
  };
}
function Go(e, t) {
  return (tp[t] || (tp[t] = sB(t)))(e);
}
function O0(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
const Ko = (e) => typeof e < "u", dn = (e) => typeof e == "function", rp = (e, t) => {
  if (e.size !== t.size)
    return !1;
  for (const r of e)
    if (!t.has(r))
      return !1;
  return !0;
};
function oB(e) {
  return e.type === "mouseup" || e.type === "click" || e.type === "contextmenu";
}
const tr = Math.PI, un = 2 * tr, Zo = Number.POSITIVE_INFINITY, Or = tr / 2, sn = Math.log10, Xo = Math.sign;
function lo(e, t, r) {
  return Math.abs(e - t) < r;
}
function np(e) {
  const t = Math.round(e);
  e = lo(e, t, e / 1e3) ? t : e;
  const r = Math.pow(10, Math.floor(sn(e))), n = e / r;
  return (n <= 1 ? 1 : n <= 2 ? 2 : n <= 5 ? 5 : 10) * r;
}
function lB(e) {
  const t = [], r = Math.sqrt(e);
  let n;
  for (n = 1; n < r; n++)
    e % n === 0 && (t.push(n), t.push(e / n));
  return r === (r | 0) && t.push(r), t.sort((i, a) => i - a).pop(), t;
}
function Jo(e) {
  return !isNaN(parseFloat(e)) && isFinite(e);
}
function cB(e, t) {
  const r = Math.round(e);
  return r - t <= e && r + t >= e;
}
function ry(e, t, r) {
  let n, i, a;
  for (n = 0, i = e.length; n < i; n++)
    a = e[n][r], isNaN(a) || (t.min = Math.min(t.min, a), t.max = Math.max(t.max, a));
}
function on(e) {
  return e * (tr / 180);
}
function F0(e) {
  return e * (180 / tr);
}
function ip(e) {
  if (!it(e))
    return;
  let t = 1, r = 0;
  for (; Math.round(e * t) / t !== e; )
    t *= 10, r++;
  return r;
}
function uB(e, t) {
  const r = t.x - e.x, n = t.y - e.y, i = Math.sqrt(r * r + n * n);
  let a = Math.atan2(n, r);
  return a < -0.5 * tr && (a += un), {
    angle: a,
    distance: i
  };
}
function ur(e) {
  return (e % un + un) % un;
}
function fB(e, t, r, n) {
  const i = ur(e), a = ur(t), s = ur(r), o = ur(a - i), l = ur(s - i), c = ur(i - a), u = ur(i - s);
  return i === a || i === s || n && a === s || o > l && c < u;
}
function Tn(e, t, r) {
  return Math.max(t, Math.min(r, e));
}
function dB(e) {
  return Tn(e, -32768, 32767);
}
function T0(e, t, r) {
  r = r || ((s) => e[s] < t);
  let n = e.length - 1, i = 0, a;
  for (; n - i > 1; )
    a = i + n >> 1, r(a) ? i = a : n = a;
  return {
    lo: i,
    hi: n
  };
}
const Zu = (e, t, r, n) => T0(e, r, n ? (i) => {
  const a = e[i][t];
  return a < r || a === r && e[i + 1][t] === r;
} : (i) => e[i][t] < r), hB = (e, t, r) => T0(e, r, (n) => e[n][t] >= r);
function pB(e, t, r) {
  let n = 0, i = e.length;
  for (; n < i && e[n] < t; )
    n++;
  for (; i > n && e[i - 1] > r; )
    i--;
  return n > 0 || i < e.length ? e.slice(n, i) : e;
}
const ny = [
  "push",
  "pop",
  "shift",
  "splice",
  "unshift"
];
function vB(e, t) {
  if (e._chartjs) {
    e._chartjs.listeners.push(t);
    return;
  }
  Object.defineProperty(e, "_chartjs", {
    configurable: !0,
    enumerable: !1,
    value: {
      listeners: [
        t
      ]
    }
  }), ny.forEach((r) => {
    const n = "_onData" + O0(r), i = e[r];
    Object.defineProperty(e, r, {
      configurable: !0,
      enumerable: !1,
      value(...a) {
        const s = i.apply(this, a);
        return e._chartjs.listeners.forEach((o) => {
          typeof o[n] == "function" && o[n](...a);
        }), s;
      }
    });
  });
}
function ap(e, t) {
  const r = e._chartjs;
  if (!r)
    return;
  const n = r.listeners, i = n.indexOf(t);
  i !== -1 && n.splice(i, 1), !(n.length > 0) && (ny.forEach((a) => {
    delete e[a];
  }), delete e._chartjs);
}
function gB(e) {
  const t = new Set(e);
  return t.size === e.length ? e : Array.from(t);
}
const iy = function() {
  return typeof window > "u" ? function(e) {
    return e();
  } : window.requestAnimationFrame;
}();
function ay(e, t) {
  let r = [], n = !1;
  return function(...i) {
    r = i, n || (n = !0, iy.call(window, () => {
      n = !1, e.apply(t, r);
    }));
  };
}
function mB(e, t) {
  let r;
  return function(...n) {
    return t ? (clearTimeout(r), r = setTimeout(e, t, n)) : e.apply(this, n), t;
  };
}
const xB = (e) => e === "start" ? "left" : e === "end" ? "right" : "center", sp = (e, t, r) => e === "start" ? t : e === "end" ? r : (t + r) / 2, Ps = (e) => e === 0 || e === 1, op = (e, t, r) => -(Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * un / r)), lp = (e, t, r) => Math.pow(2, -10 * e) * Math.sin((e - t) * un / r) + 1, Pa = {
  linear: (e) => e,
  easeInQuad: (e) => e * e,
  easeOutQuad: (e) => -e * (e - 2),
  easeInOutQuad: (e) => (e /= 0.5) < 1 ? 0.5 * e * e : -0.5 * (--e * (e - 2) - 1),
  easeInCubic: (e) => e * e * e,
  easeOutCubic: (e) => (e -= 1) * e * e + 1,
  easeInOutCubic: (e) => (e /= 0.5) < 1 ? 0.5 * e * e * e : 0.5 * ((e -= 2) * e * e + 2),
  easeInQuart: (e) => e * e * e * e,
  easeOutQuart: (e) => -((e -= 1) * e * e * e - 1),
  easeInOutQuart: (e) => (e /= 0.5) < 1 ? 0.5 * e * e * e * e : -0.5 * ((e -= 2) * e * e * e - 2),
  easeInQuint: (e) => e * e * e * e * e,
  easeOutQuint: (e) => (e -= 1) * e * e * e * e + 1,
  easeInOutQuint: (e) => (e /= 0.5) < 1 ? 0.5 * e * e * e * e * e : 0.5 * ((e -= 2) * e * e * e * e + 2),
  easeInSine: (e) => -Math.cos(e * Or) + 1,
  easeOutSine: (e) => Math.sin(e * Or),
  easeInOutSine: (e) => -0.5 * (Math.cos(tr * e) - 1),
  easeInExpo: (e) => e === 0 ? 0 : Math.pow(2, 10 * (e - 1)),
  easeOutExpo: (e) => e === 1 ? 1 : -Math.pow(2, -10 * e) + 1,
  easeInOutExpo: (e) => Ps(e) ? e : e < 0.5 ? 0.5 * Math.pow(2, 10 * (e * 2 - 1)) : 0.5 * (-Math.pow(2, -10 * (e * 2 - 1)) + 2),
  easeInCirc: (e) => e >= 1 ? e : -(Math.sqrt(1 - e * e) - 1),
  easeOutCirc: (e) => Math.sqrt(1 - (e -= 1) * e),
  easeInOutCirc: (e) => (e /= 0.5) < 1 ? -0.5 * (Math.sqrt(1 - e * e) - 1) : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1),
  easeInElastic: (e) => Ps(e) ? e : op(e, 0.075, 0.3),
  easeOutElastic: (e) => Ps(e) ? e : lp(e, 0.075, 0.3),
  easeInOutElastic(e) {
    return Ps(e) ? e : e < 0.5 ? 0.5 * op(e * 2, 0.1125, 0.45) : 0.5 + 0.5 * lp(e * 2 - 1, 0.1125, 0.45);
  },
  easeInBack(e) {
    return e * e * ((1.70158 + 1) * e - 1.70158);
  },
  easeOutBack(e) {
    return (e -= 1) * e * ((1.70158 + 1) * e + 1.70158) + 1;
  },
  easeInOutBack(e) {
    let t = 1.70158;
    return (e /= 0.5) < 1 ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t)) : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
  },
  easeInBounce: (e) => 1 - Pa.easeOutBounce(1 - e),
  easeOutBounce(e) {
    return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375 : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
  },
  easeInOutBounce: (e) => e < 0.5 ? Pa.easeInBounce(e * 2) * 0.5 : Pa.easeOutBounce(e * 2 - 1) * 0.5 + 0.5
};
function sy(e) {
  if (e && typeof e == "object") {
    const t = e.toString();
    return t === "[object CanvasPattern]" || t === "[object CanvasGradient]";
  }
  return !1;
}
function cp(e) {
  return sy(e) ? e : new Za(e);
}
function pc(e) {
  return sy(e) ? e : new Za(e).saturate(0.5).darken(0.1).hexString();
}
const yB = [
  "x",
  "y",
  "borderWidth",
  "radius",
  "tension"
], bB = [
  "color",
  "borderColor",
  "backgroundColor"
];
function _B(e) {
  e.set("animation", {
    delay: void 0,
    duration: 1e3,
    easing: "easeOutQuart",
    fn: void 0,
    from: void 0,
    loop: void 0,
    to: void 0,
    type: void 0
  }), e.describe("animation", {
    _fallback: !1,
    _indexable: !1,
    _scriptable: (t) => t !== "onProgress" && t !== "onComplete" && t !== "fn"
  }), e.set("animations", {
    colors: {
      type: "color",
      properties: bB
    },
    numbers: {
      type: "number",
      properties: yB
    }
  }), e.describe("animations", {
    _fallback: "animation"
  }), e.set("transitions", {
    active: {
      animation: {
        duration: 400
      }
    },
    resize: {
      animation: {
        duration: 0
      }
    },
    show: {
      animations: {
        colors: {
          from: "transparent"
        },
        visible: {
          type: "boolean",
          duration: 0
        }
      }
    },
    hide: {
      animations: {
        colors: {
          to: "transparent"
        },
        visible: {
          type: "boolean",
          easing: "linear",
          fn: (t) => t | 0
        }
      }
    }
  });
}
function wB(e) {
  e.set("layout", {
    autoPadding: !0,
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  });
}
const up = /* @__PURE__ */ new Map();
function $B(e, t) {
  t = t || {};
  const r = e + JSON.stringify(t);
  let n = up.get(r);
  return n || (n = new Intl.NumberFormat(e, t), up.set(r, n)), n;
}
function M0(e, t, r) {
  return $B(t, r).format(e);
}
const oy = {
  values(e) {
    return Ge(e) ? e : "" + e;
  },
  numeric(e, t, r) {
    if (e === 0)
      return "0";
    const n = this.chart.options.locale;
    let i, a = e;
    if (r.length > 1) {
      const c = Math.max(Math.abs(r[0].value), Math.abs(r[r.length - 1].value));
      (c < 1e-4 || c > 1e15) && (i = "scientific"), a = DB(e, r);
    }
    const s = sn(Math.abs(a)), o = isNaN(s) ? 1 : Math.max(Math.min(-1 * Math.floor(s), 20), 0), l = {
      notation: i,
      minimumFractionDigits: o,
      maximumFractionDigits: o
    };
    return Object.assign(l, this.options.ticks.format), M0(e, n, l);
  },
  logarithmic(e, t, r) {
    if (e === 0)
      return "0";
    const n = r[t].significand || e / Math.pow(10, Math.floor(sn(e)));
    return [
      1,
      2,
      3,
      5,
      10,
      15
    ].includes(n) || t > 0.8 * r.length ? oy.numeric.call(this, e, t, r) : "";
  }
};
function DB(e, t) {
  let r = t.length > 3 ? t[2].value - t[1].value : t[1].value - t[0].value;
  return Math.abs(r) >= 1 && e !== Math.floor(e) && (r = e - Math.floor(e)), r;
}
var Nl = {
  formatters: oy
};
function EB(e) {
  e.set("scale", {
    display: !0,
    offset: !1,
    reverse: !1,
    beginAtZero: !1,
    bounds: "ticks",
    clip: !0,
    grace: 0,
    grid: {
      display: !0,
      lineWidth: 1,
      drawOnChartArea: !0,
      drawTicks: !0,
      tickLength: 8,
      tickWidth: (t, r) => r.lineWidth,
      tickColor: (t, r) => r.color,
      offset: !1
    },
    border: {
      display: !0,
      dash: [],
      dashOffset: 0,
      width: 1
    },
    title: {
      display: !1,
      text: "",
      padding: {
        top: 4,
        bottom: 4
      }
    },
    ticks: {
      minRotation: 0,
      maxRotation: 50,
      mirror: !1,
      textStrokeWidth: 0,
      textStrokeColor: "",
      padding: 3,
      display: !0,
      autoSkip: !0,
      autoSkipPadding: 3,
      labelOffset: 0,
      callback: Nl.formatters.values,
      minor: {},
      major: {},
      align: "center",
      crossAlign: "near",
      showLabelBackdrop: !1,
      backdropColor: "rgba(255, 255, 255, 0.75)",
      backdropPadding: 2
    }
  }), e.route("scale.ticks", "color", "", "color"), e.route("scale.grid", "color", "", "borderColor"), e.route("scale.border", "color", "", "borderColor"), e.route("scale.title", "color", "", "color"), e.describe("scale", {
    _fallback: !1,
    _scriptable: (t) => !t.startsWith("before") && !t.startsWith("after") && t !== "callback" && t !== "parser",
    _indexable: (t) => t !== "borderDash" && t !== "tickBorderDash" && t !== "dash"
  }), e.describe("scales", {
    _fallback: "scale"
  }), e.describe("scale.ticks", {
    _scriptable: (t) => t !== "backdropPadding" && t !== "callback",
    _indexable: (t) => t !== "backdropPadding"
  });
}
const jn = /* @__PURE__ */ Object.create(null), Xu = /* @__PURE__ */ Object.create(null);
function Ba(e, t) {
  if (!t)
    return e;
  const r = t.split(".");
  for (let n = 0, i = r.length; n < i; ++n) {
    const a = r[n];
    e = e[a] || (e[a] = /* @__PURE__ */ Object.create(null));
  }
  return e;
}
function vc(e, t, r) {
  return typeof t == "string" ? Xa(Ba(e, t), r) : Xa(Ba(e, ""), t);
}
class AB {
  constructor(t, r) {
    this.animation = void 0, this.backgroundColor = "rgba(0,0,0,0.1)", this.borderColor = "rgba(0,0,0,0.1)", this.color = "#666", this.datasets = {}, this.devicePixelRatio = (n) => n.chart.platform.getDevicePixelRatio(), this.elements = {}, this.events = [
      "mousemove",
      "mouseout",
      "click",
      "touchstart",
      "touchmove"
    ], this.font = {
      family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
      size: 12,
      style: "normal",
      lineHeight: 1.2,
      weight: null
    }, this.hover = {}, this.hoverBackgroundColor = (n, i) => pc(i.backgroundColor), this.hoverBorderColor = (n, i) => pc(i.borderColor), this.hoverColor = (n, i) => pc(i.color), this.indexAxis = "x", this.interaction = {
      mode: "nearest",
      intersect: !0,
      includeInvisible: !1
    }, this.maintainAspectRatio = !0, this.onHover = null, this.onClick = null, this.parsing = !0, this.plugins = {}, this.responsive = !0, this.scale = void 0, this.scales = {}, this.showLine = !0, this.drawActiveElementsOnTop = !0, this.describe(t), this.apply(r);
  }
  set(t, r) {
    return vc(this, t, r);
  }
  get(t) {
    return Ba(this, t);
  }
  describe(t, r) {
    return vc(Xu, t, r);
  }
  override(t, r) {
    return vc(jn, t, r);
  }
  route(t, r, n, i) {
    const a = Ba(this, t), s = Ba(this, n), o = "_" + r;
    Object.defineProperties(a, {
      [o]: {
        value: a[r],
        writable: !0
      },
      [r]: {
        enumerable: !0,
        get() {
          const l = this[o], c = s[i];
          return Ee(l) ? Object.assign({}, c, l) : Ke(l, c);
        },
        set(l) {
          this[o] = l;
        }
      }
    });
  }
  apply(t) {
    t.forEach((r) => r(this));
  }
}
var Ze = /* @__PURE__ */ new AB({
  _scriptable: (e) => !e.startsWith("on"),
  _indexable: (e) => e !== "events",
  hover: {
    _fallback: "interaction"
  },
  interaction: {
    _scriptable: !1,
    _indexable: !1
  }
}, [
  _B,
  wB,
  EB
]);
function CB(e) {
  return !e || Ye(e.size) || Ye(e.family) ? null : (e.style ? e.style + " " : "") + (e.weight ? e.weight + " " : "") + e.size + "px " + e.family;
}
function Qo(e, t, r, n, i) {
  let a = t[i];
  return a || (a = t[i] = e.measureText(i).width, r.push(i)), a > n && (n = a), n;
}
function SB(e, t, r, n) {
  n = n || {};
  let i = n.data = n.data || {}, a = n.garbageCollect = n.garbageCollect || [];
  n.font !== t && (i = n.data = {}, a = n.garbageCollect = [], n.font = t), e.save(), e.font = t;
  let s = 0;
  const o = r.length;
  let l, c, u, f, d;
  for (l = 0; l < o; l++)
    if (f = r[l], f != null && !Ge(f))
      s = Qo(e, i, a, s, f);
    else if (Ge(f))
      for (c = 0, u = f.length; c < u; c++)
        d = f[c], d != null && !Ge(d) && (s = Qo(e, i, a, s, d));
  e.restore();
  const h = a.length / 2;
  if (h > r.length) {
    for (l = 0; l < h; l++)
      delete i[a[l]];
    a.splice(0, h);
  }
  return s;
}
function wn(e, t, r) {
  const n = e.currentDevicePixelRatio, i = r !== 0 ? Math.max(r / 2, 0.5) : 0;
  return Math.round((t - i) * n) / n + i;
}
function fp(e, t) {
  t = t || e.getContext("2d"), t.save(), t.resetTransform(), t.clearRect(0, 0, e.width, e.height), t.restore();
}
function gi(e, t, r) {
  return r = r || 0.5, !t || e && e.x > t.left - r && e.x < t.right + r && e.y > t.top - r && e.y < t.bottom + r;
}
function ly(e, t) {
  e.save(), e.beginPath(), e.rect(t.left, t.top, t.right - t.left, t.bottom - t.top), e.clip();
}
function cy(e) {
  e.restore();
}
function kB(e, t) {
  t.translation && e.translate(t.translation[0], t.translation[1]), Ye(t.rotation) || e.rotate(t.rotation), t.color && (e.fillStyle = t.color), t.textAlign && (e.textAlign = t.textAlign), t.textBaseline && (e.textBaseline = t.textBaseline);
}
function OB(e, t, r, n, i) {
  if (i.strikethrough || i.underline) {
    const a = e.measureText(n), s = t - a.actualBoundingBoxLeft, o = t + a.actualBoundingBoxRight, l = r - a.actualBoundingBoxAscent, c = r + a.actualBoundingBoxDescent, u = i.strikethrough ? (l + c) / 2 : c;
    e.strokeStyle = e.fillStyle, e.beginPath(), e.lineWidth = i.decorationWidth || 2, e.moveTo(s, u), e.lineTo(o, u), e.stroke();
  }
}
function TB(e, t) {
  const r = e.fillStyle;
  e.fillStyle = t.color, e.fillRect(t.left, t.top, t.width, t.height), e.fillStyle = r;
}
function el(e, t, r, n, i, a = {}) {
  const s = Ge(t) ? t : [
    t
  ], o = a.strokeWidth > 0 && a.strokeColor !== "";
  let l, c;
  for (e.save(), e.font = i.string, kB(e, a), l = 0; l < s.length; ++l)
    c = s[l], a.backdrop && TB(e, a.backdrop), o && (a.strokeColor && (e.strokeStyle = a.strokeColor), Ye(a.strokeWidth) || (e.lineWidth = a.strokeWidth), e.strokeText(c, r, n, a.maxWidth)), e.fillText(c, r, n, a.maxWidth), OB(e, r, n, c, a), n += Number(i.lineHeight);
  e.restore();
}
function MB(e, t) {
  const { x: r, y: n, w: i, h: a, radius: s } = t;
  e.arc(r + s.topLeft, n + s.topLeft, s.topLeft, 1.5 * tr, tr, !0), e.lineTo(r, n + a - s.bottomLeft), e.arc(r + s.bottomLeft, n + a - s.bottomLeft, s.bottomLeft, tr, Or, !0), e.lineTo(r + i - s.bottomRight, n + a), e.arc(r + i - s.bottomRight, n + a - s.bottomRight, s.bottomRight, Or, 0, !0), e.lineTo(r + i, n + s.topRight), e.arc(r + i - s.topRight, n + s.topRight, s.topRight, 0, -Or, !0), e.lineTo(r + s.topLeft, n);
}
const PB = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/, BB = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
function IB(e, t) {
  const r = ("" + e).match(PB);
  if (!r || r[1] === "normal")
    return t * 1.2;
  switch (e = +r[2], r[3]) {
    case "px":
      return e;
    case "%":
      e /= 100;
      break;
  }
  return t * e;
}
const RB = (e) => +e || 0;
function uy(e, t) {
  const r = {}, n = Ee(t), i = n ? Object.keys(t) : t, a = Ee(e) ? n ? (s) => Ke(e[s], e[t[s]]) : (s) => e[s] : () => e;
  for (const s of i)
    r[s] = RB(a(s));
  return r;
}
function NB(e) {
  return uy(e, {
    top: "y",
    right: "x",
    bottom: "y",
    left: "x"
  });
}
function LB(e) {
  return uy(e, [
    "topLeft",
    "topRight",
    "bottomLeft",
    "bottomRight"
  ]);
}
function Rr(e) {
  const t = NB(e);
  return t.width = t.left + t.right, t.height = t.top + t.bottom, t;
}
function Fi(e, t) {
  e = e || {}, t = t || Ze.font;
  let r = Ke(e.size, t.size);
  typeof r == "string" && (r = parseInt(r, 10));
  let n = Ke(e.style, t.style);
  n && !("" + n).match(BB) && (console.warn('Invalid font style specified: "' + n + '"'), n = void 0);
  const i = {
    family: Ke(e.family, t.family),
    lineHeight: IB(Ke(e.lineHeight, t.lineHeight), r),
    size: r,
    style: n,
    weight: Ke(e.weight, t.weight),
    string: ""
  };
  return i.string = CB(i), i;
}
function Bs(e, t, r, n) {
  let i = !0, a, s, o;
  for (a = 0, s = e.length; a < s; ++a)
    if (o = e[a], o !== void 0 && (t !== void 0 && typeof o == "function" && (o = o(t), i = !1), r !== void 0 && Ge(o) && (o = o[r % o.length], i = !1), o !== void 0))
      return n && !i && (n.cacheable = !1), o;
}
function jB(e, t, r) {
  const { min: n, max: i } = e, a = rB(t, (i - n) / 2), s = (o, l) => r && o === 0 ? 0 : o + l;
  return {
    min: s(n, -Math.abs(a)),
    max: s(i, a)
  };
}
function Xi(e, t) {
  return Object.assign(Object.create(e), t);
}
function P0(e, t = [
  ""
], r, n, i = () => e[0]) {
  const a = r || e;
  typeof n > "u" && (n = py("_fallback", e));
  const s = {
    [Symbol.toStringTag]: "Object",
    _cacheable: !0,
    _scopes: e,
    _rootScopes: a,
    _fallback: n,
    _getTarget: i,
    override: (o) => P0([
      o,
      ...e
    ], t, a, n)
  };
  return new Proxy(s, {
    /**
    * A trap for the delete operator.
    */
    deleteProperty(o, l) {
      return delete o[l], delete o._keys, delete e[0][l], !0;
    },
    /**
    * A trap for getting property values.
    */
    get(o, l) {
      return dy(o, l, () => GB(l, t, e, o));
    },
    /**
    * A trap for Object.getOwnPropertyDescriptor.
    * Also used by Object.hasOwnProperty.
    */
    getOwnPropertyDescriptor(o, l) {
      return Reflect.getOwnPropertyDescriptor(o._scopes[0], l);
    },
    /**
    * A trap for Object.getPrototypeOf.
    */
    getPrototypeOf() {
      return Reflect.getPrototypeOf(e[0]);
    },
    /**
    * A trap for the in operator.
    */
    has(o, l) {
      return hp(o).includes(l);
    },
    /**
    * A trap for Object.getOwnPropertyNames and Object.getOwnPropertySymbols.
    */
    ownKeys(o) {
      return hp(o);
    },
    /**
    * A trap for setting property values.
    */
    set(o, l, c) {
      const u = o._storage || (o._storage = i());
      return o[l] = u[l] = c, delete o._keys, !0;
    }
  });
}
function Ti(e, t, r, n) {
  const i = {
    _cacheable: !1,
    _proxy: e,
    _context: t,
    _subProxy: r,
    _stack: /* @__PURE__ */ new Set(),
    _descriptors: fy(e, n),
    setContext: (a) => Ti(e, a, r, n),
    override: (a) => Ti(e.override(a), t, r, n)
  };
  return new Proxy(i, {
    /**
    * A trap for the delete operator.
    */
    deleteProperty(a, s) {
      return delete a[s], delete e[s], !0;
    },
    /**
    * A trap for getting property values.
    */
    get(a, s, o) {
      return dy(a, s, () => HB(a, s, o));
    },
    /**
    * A trap for Object.getOwnPropertyDescriptor.
    * Also used by Object.hasOwnProperty.
    */
    getOwnPropertyDescriptor(a, s) {
      return a._descriptors.allKeys ? Reflect.has(e, s) ? {
        enumerable: !0,
        configurable: !0
      } : void 0 : Reflect.getOwnPropertyDescriptor(e, s);
    },
    /**
    * A trap for Object.getPrototypeOf.
    */
    getPrototypeOf() {
      return Reflect.getPrototypeOf(e);
    },
    /**
    * A trap for the in operator.
    */
    has(a, s) {
      return Reflect.has(e, s);
    },
    /**
    * A trap for Object.getOwnPropertyNames and Object.getOwnPropertySymbols.
    */
    ownKeys() {
      return Reflect.ownKeys(e);
    },
    /**
    * A trap for setting property values.
    */
    set(a, s, o) {
      return e[s] = o, delete a[s], !0;
    }
  });
}
function fy(e, t = {
  scriptable: !0,
  indexable: !0
}) {
  const { _scriptable: r = t.scriptable, _indexable: n = t.indexable, _allKeys: i = t.allKeys } = e;
  return {
    allKeys: i,
    scriptable: r,
    indexable: n,
    isScriptable: dn(r) ? r : () => r,
    isIndexable: dn(n) ? n : () => n
  };
}
const zB = (e, t) => e ? e + O0(t) : t, B0 = (e, t) => Ee(t) && e !== "adapters" && (Object.getPrototypeOf(t) === null || t.constructor === Object);
function dy(e, t, r) {
  if (Object.prototype.hasOwnProperty.call(e, t))
    return e[t];
  const n = r();
  return e[t] = n, n;
}
function HB(e, t, r) {
  const { _proxy: n, _context: i, _subProxy: a, _descriptors: s } = e;
  let o = n[t];
  return dn(o) && s.isScriptable(t) && (o = VB(t, o, e, r)), Ge(o) && o.length && (o = YB(t, o, e, s.isIndexable)), B0(t, o) && (o = Ti(o, i, a && a[t], s)), o;
}
function VB(e, t, r, n) {
  const { _proxy: i, _context: a, _subProxy: s, _stack: o } = r;
  if (o.has(e))
    throw new Error("Recursion detected: " + Array.from(o).join("->") + "->" + e);
  o.add(e);
  let l = t(a, s || n);
  return o.delete(e), B0(e, l) && (l = I0(i._scopes, i, e, l)), l;
}
function YB(e, t, r, n) {
  const { _proxy: i, _context: a, _subProxy: s, _descriptors: o } = r;
  if (typeof a.index < "u" && n(e))
    return t[a.index % t.length];
  if (Ee(t[0])) {
    const l = t, c = i._scopes.filter((u) => u !== l);
    t = [];
    for (const u of l) {
      const f = I0(c, i, e, u);
      t.push(Ti(f, a, s && s[e], o));
    }
  }
  return t;
}
function hy(e, t, r) {
  return dn(e) ? e(t, r) : e;
}
const WB = (e, t) => e === !0 ? t : typeof e == "string" ? Go(t, e) : void 0;
function UB(e, t, r, n, i) {
  for (const a of t) {
    const s = WB(r, a);
    if (s) {
      e.add(s);
      const o = hy(s._fallback, r, i);
      if (typeof o < "u" && o !== r && o !== n)
        return o;
    } else if (s === !1 && typeof n < "u" && r !== n)
      return null;
  }
  return !1;
}
function I0(e, t, r, n) {
  const i = t._rootScopes, a = hy(t._fallback, r, n), s = [
    ...e,
    ...i
  ], o = /* @__PURE__ */ new Set();
  o.add(n);
  let l = dp(o, s, r, a || r, n);
  return l === null || typeof a < "u" && a !== r && (l = dp(o, s, a, l, n), l === null) ? !1 : P0(Array.from(o), [
    ""
  ], i, a, () => qB(t, r, n));
}
function dp(e, t, r, n, i) {
  for (; r; )
    r = UB(e, t, r, n, i);
  return r;
}
function qB(e, t, r) {
  const n = e._getTarget();
  t in n || (n[t] = {});
  const i = n[t];
  return Ge(i) && Ee(r) ? r : i || {};
}
function GB(e, t, r, n) {
  let i;
  for (const a of t)
    if (i = py(zB(a, e), r), typeof i < "u")
      return B0(e, i) ? I0(r, n, e, i) : i;
}
function py(e, t) {
  for (const r of t) {
    if (!r)
      continue;
    const n = r[e];
    if (typeof n < "u")
      return n;
  }
}
function hp(e) {
  let t = e._keys;
  return t || (t = e._keys = KB(e._scopes)), t;
}
function KB(e) {
  const t = /* @__PURE__ */ new Set();
  for (const r of e)
    for (const n of Object.keys(r).filter((i) => !i.startsWith("_")))
      t.add(n);
  return Array.from(t);
}
function R0() {
  return typeof window < "u" && typeof document < "u";
}
function N0(e) {
  let t = e.parentNode;
  return t && t.toString() === "[object ShadowRoot]" && (t = t.host), t;
}
function tl(e, t, r) {
  let n;
  return typeof e == "string" ? (n = parseInt(e, 10), e.indexOf("%") !== -1 && (n = n / 100 * t.parentNode[r])) : n = e, n;
}
const Ll = (e) => e.ownerDocument.defaultView.getComputedStyle(e, null);
function ZB(e, t) {
  return Ll(e).getPropertyValue(t);
}
const XB = [
  "top",
  "right",
  "bottom",
  "left"
];
function Pn(e, t, r) {
  const n = {};
  r = r ? "-" + r : "";
  for (let i = 0; i < 4; i++) {
    const a = XB[i];
    n[a] = parseFloat(e[t + "-" + a + r]) || 0;
  }
  return n.width = n.left + n.right, n.height = n.top + n.bottom, n;
}
const JB = (e, t, r) => (e > 0 || t > 0) && (!r || !r.shadowRoot);
function QB(e, t) {
  const r = e.touches, n = r && r.length ? r[0] : e, { offsetX: i, offsetY: a } = n;
  let s = !1, o, l;
  if (JB(i, a, e.target))
    o = i, l = a;
  else {
    const c = t.getBoundingClientRect();
    o = n.clientX - c.left, l = n.clientY - c.top, s = !0;
  }
  return {
    x: o,
    y: l,
    box: s
  };
}
function An(e, t) {
  if ("native" in e)
    return e;
  const { canvas: r, currentDevicePixelRatio: n } = t, i = Ll(r), a = i.boxSizing === "border-box", s = Pn(i, "padding"), o = Pn(i, "border", "width"), { x: l, y: c, box: u } = QB(e, r), f = s.left + (u && o.left), d = s.top + (u && o.top);
  let { width: h, height: p } = t;
  return a && (h -= s.width + o.width, p -= s.height + o.height), {
    x: Math.round((l - f) / h * r.width / n),
    y: Math.round((c - d) / p * r.height / n)
  };
}
function eI(e, t, r) {
  let n, i;
  if (t === void 0 || r === void 0) {
    const a = N0(e);
    if (!a)
      t = e.clientWidth, r = e.clientHeight;
    else {
      const s = a.getBoundingClientRect(), o = Ll(a), l = Pn(o, "border", "width"), c = Pn(o, "padding");
      t = s.width - c.width - l.width, r = s.height - c.height - l.height, n = tl(o.maxWidth, a, "clientWidth"), i = tl(o.maxHeight, a, "clientHeight");
    }
  }
  return {
    width: t,
    height: r,
    maxWidth: n || Zo,
    maxHeight: i || Zo
  };
}
const Is = (e) => Math.round(e * 10) / 10;
function tI(e, t, r, n) {
  const i = Ll(e), a = Pn(i, "margin"), s = tl(i.maxWidth, e, "clientWidth") || Zo, o = tl(i.maxHeight, e, "clientHeight") || Zo, l = eI(e, t, r);
  let { width: c, height: u } = l;
  if (i.boxSizing === "content-box") {
    const d = Pn(i, "border", "width"), h = Pn(i, "padding");
    c -= h.width + d.width, u -= h.height + d.height;
  }
  return c = Math.max(0, c - a.width), u = Math.max(0, n ? c / n : u - a.height), c = Is(Math.min(c, s, l.maxWidth)), u = Is(Math.min(u, o, l.maxHeight)), c && !u && (u = Is(c / 2)), (t !== void 0 || r !== void 0) && n && l.height && u > l.height && (u = l.height, c = Is(Math.floor(u * n))), {
    width: c,
    height: u
  };
}
function pp(e, t, r) {
  const n = t || 1, i = Math.floor(e.height * n), a = Math.floor(e.width * n);
  e.height = Math.floor(e.height), e.width = Math.floor(e.width);
  const s = e.canvas;
  return s.style && (r || !s.style.height && !s.style.width) && (s.style.height = `${e.height}px`, s.style.width = `${e.width}px`), e.currentDevicePixelRatio !== n || s.height !== i || s.width !== a ? (e.currentDevicePixelRatio = n, s.height = i, s.width = a, e.ctx.setTransform(n, 0, 0, n, 0, 0), !0) : !1;
}
const rI = function() {
  let e = !1;
  try {
    const t = {
      get passive() {
        return e = !0, !1;
      }
    };
    R0() && (window.addEventListener("test", null, t), window.removeEventListener("test", null, t));
  } catch {
  }
  return e;
}();
function vp(e, t) {
  const r = ZB(e, t), n = r && r.match(/^(\d+)(\.\d+)?px$/);
  return n ? +n[1] : void 0;
}
/*!
 * Chart.js v4.4.1
 * https://www.chartjs.org
 * (c) 2023 Chart.js Contributors
 * Released under the MIT License
 */
class nI {
  constructor() {
    this._request = null, this._charts = /* @__PURE__ */ new Map(), this._running = !1, this._lastDate = void 0;
  }
  _notify(t, r, n, i) {
    const a = r.listeners[i], s = r.duration;
    a.forEach((o) => o({
      chart: t,
      initial: r.initial,
      numSteps: s,
      currentStep: Math.min(n - r.start, s)
    }));
  }
  _refresh() {
    this._request || (this._running = !0, this._request = iy.call(window, () => {
      this._update(), this._request = null, this._running && this._refresh();
    }));
  }
  _update(t = Date.now()) {
    let r = 0;
    this._charts.forEach((n, i) => {
      if (!n.running || !n.items.length)
        return;
      const a = n.items;
      let s = a.length - 1, o = !1, l;
      for (; s >= 0; --s)
        l = a[s], l._active ? (l._total > n.duration && (n.duration = l._total), l.tick(t), o = !0) : (a[s] = a[a.length - 1], a.pop());
      o && (i.draw(), this._notify(i, n, t, "progress")), a.length || (n.running = !1, this._notify(i, n, t, "complete"), n.initial = !1), r += a.length;
    }), this._lastDate = t, r === 0 && (this._running = !1);
  }
  _getAnims(t) {
    const r = this._charts;
    let n = r.get(t);
    return n || (n = {
      running: !1,
      initial: !0,
      items: [],
      listeners: {
        complete: [],
        progress: []
      }
    }, r.set(t, n)), n;
  }
  listen(t, r, n) {
    this._getAnims(t).listeners[r].push(n);
  }
  add(t, r) {
    !r || !r.length || this._getAnims(t).items.push(...r);
  }
  has(t) {
    return this._getAnims(t).items.length > 0;
  }
  start(t) {
    const r = this._charts.get(t);
    r && (r.running = !0, r.start = Date.now(), r.duration = r.items.reduce((n, i) => Math.max(n, i._duration), 0), this._refresh());
  }
  running(t) {
    if (!this._running)
      return !1;
    const r = this._charts.get(t);
    return !(!r || !r.running || !r.items.length);
  }
  stop(t) {
    const r = this._charts.get(t);
    if (!r || !r.items.length)
      return;
    const n = r.items;
    let i = n.length - 1;
    for (; i >= 0; --i)
      n[i].cancel();
    r.items = [], this._notify(t, r, Date.now(), "complete");
  }
  remove(t) {
    return this._charts.delete(t);
  }
}
var Dr = /* @__PURE__ */ new nI();
const gp = "transparent", iI = {
  boolean(e, t, r) {
    return r > 0.5 ? t : e;
  },
  color(e, t, r) {
    const n = cp(e || gp), i = n.valid && cp(t || gp);
    return i && i.valid ? i.mix(n, r).hexString() : t;
  },
  number(e, t, r) {
    return e + (t - e) * r;
  }
};
class aI {
  constructor(t, r, n, i) {
    const a = r[n];
    i = Bs([
      t.to,
      i,
      a,
      t.from
    ]);
    const s = Bs([
      t.from,
      a,
      i
    ]);
    this._active = !0, this._fn = t.fn || iI[t.type || typeof s], this._easing = Pa[t.easing] || Pa.linear, this._start = Math.floor(Date.now() + (t.delay || 0)), this._duration = this._total = Math.floor(t.duration), this._loop = !!t.loop, this._target = r, this._prop = n, this._from = s, this._to = i, this._promises = void 0;
  }
  active() {
    return this._active;
  }
  update(t, r, n) {
    if (this._active) {
      this._notify(!1);
      const i = this._target[this._prop], a = n - this._start, s = this._duration - a;
      this._start = n, this._duration = Math.floor(Math.max(s, t.duration)), this._total += a, this._loop = !!t.loop, this._to = Bs([
        t.to,
        r,
        i,
        t.from
      ]), this._from = Bs([
        t.from,
        i,
        r
      ]);
    }
  }
  cancel() {
    this._active && (this.tick(Date.now()), this._active = !1, this._notify(!1));
  }
  tick(t) {
    const r = t - this._start, n = this._duration, i = this._prop, a = this._from, s = this._loop, o = this._to;
    let l;
    if (this._active = a !== o && (s || r < n), !this._active) {
      this._target[i] = o, this._notify(!0);
      return;
    }
    if (r < 0) {
      this._target[i] = a;
      return;
    }
    l = r / n % 2, l = s && l > 1 ? 2 - l : l, l = this._easing(Math.min(1, Math.max(0, l))), this._target[i] = this._fn(a, o, l);
  }
  wait() {
    const t = this._promises || (this._promises = []);
    return new Promise((r, n) => {
      t.push({
        res: r,
        rej: n
      });
    });
  }
  _notify(t) {
    const r = t ? "res" : "rej", n = this._promises || [];
    for (let i = 0; i < n.length; i++)
      n[i][r]();
  }
}
class sI {
  constructor(t, r) {
    this._chart = t, this._properties = /* @__PURE__ */ new Map(), this.configure(r);
  }
  configure(t) {
    if (!Ee(t))
      return;
    const r = Object.keys(Ze.animation), n = this._properties;
    Object.getOwnPropertyNames(t).forEach((i) => {
      const a = t[i];
      if (!Ee(a))
        return;
      const s = {};
      for (const o of r)
        s[o] = a[o];
      (Ge(a.properties) && a.properties || [
        i
      ]).forEach((o) => {
        (o === i || !n.has(o)) && n.set(o, s);
      });
    });
  }
  _animateOptions(t, r) {
    const n = r.options, i = lI(t, n);
    if (!i)
      return [];
    const a = this._createAnimations(i, n);
    return n.$shared && oI(t.options.$animations, n).then(() => {
      t.options = n;
    }, () => {
    }), a;
  }
  _createAnimations(t, r) {
    const n = this._properties, i = [], a = t.$animations || (t.$animations = {}), s = Object.keys(r), o = Date.now();
    let l;
    for (l = s.length - 1; l >= 0; --l) {
      const c = s[l];
      if (c.charAt(0) === "$")
        continue;
      if (c === "options") {
        i.push(...this._animateOptions(t, r));
        continue;
      }
      const u = r[c];
      let f = a[c];
      const d = n.get(c);
      if (f)
        if (d && f.active()) {
          f.update(d, u, o);
          continue;
        } else
          f.cancel();
      if (!d || !d.duration) {
        t[c] = u;
        continue;
      }
      a[c] = f = new aI(d, t, c, u), i.push(f);
    }
    return i;
  }
  update(t, r) {
    if (this._properties.size === 0) {
      Object.assign(t, r);
      return;
    }
    const n = this._createAnimations(t, r);
    if (n.length)
      return Dr.add(this._chart, n), !0;
  }
}
function oI(e, t) {
  const r = [], n = Object.keys(t);
  for (let i = 0; i < n.length; i++) {
    const a = e[n[i]];
    a && a.active() && r.push(a.wait());
  }
  return Promise.all(r);
}
function lI(e, t) {
  if (!t)
    return;
  let r = e.options;
  if (!r) {
    e.options = t;
    return;
  }
  return r.$shared && (e.options = r = Object.assign({}, r, {
    $shared: !1,
    $animations: {}
  })), r;
}
function mp(e, t) {
  const r = e && e.options || {}, n = r.reverse, i = r.min === void 0 ? t : 0, a = r.max === void 0 ? t : 0;
  return {
    start: n ? a : i,
    end: n ? i : a
  };
}
function cI(e, t, r) {
  if (r === !1)
    return !1;
  const n = mp(e, r), i = mp(t, r);
  return {
    top: i.end,
    right: n.end,
    bottom: i.start,
    left: n.start
  };
}
function uI(e) {
  let t, r, n, i;
  return Ee(e) ? (t = e.top, r = e.right, n = e.bottom, i = e.left) : t = r = n = i = e, {
    top: t,
    right: r,
    bottom: n,
    left: i,
    disabled: e === !1
  };
}
function vy(e, t) {
  const r = [], n = e._getSortedDatasetMetas(t);
  let i, a;
  for (i = 0, a = n.length; i < a; ++i)
    r.push(n[i].index);
  return r;
}
function xp(e, t, r, n = {}) {
  const i = e.keys, a = n.mode === "single";
  let s, o, l, c;
  if (t !== null) {
    for (s = 0, o = i.length; s < o; ++s) {
      if (l = +i[s], l === r) {
        if (n.all)
          continue;
        break;
      }
      c = e.values[l], it(c) && (a || t === 0 || Xo(t) === Xo(c)) && (t += c);
    }
    return t;
  }
}
function fI(e) {
  const t = Object.keys(e), r = new Array(t.length);
  let n, i, a;
  for (n = 0, i = t.length; n < i; ++n)
    a = t[n], r[n] = {
      x: a,
      y: e[a]
    };
  return r;
}
function yp(e, t) {
  const r = e && e.options.stacked;
  return r || r === void 0 && t.stack !== void 0;
}
function dI(e, t, r) {
  return `${e.id}.${t.id}.${r.stack || r.type}`;
}
function hI(e) {
  const { min: t, max: r, minDefined: n, maxDefined: i } = e.getUserBounds();
  return {
    min: n ? t : Number.NEGATIVE_INFINITY,
    max: i ? r : Number.POSITIVE_INFINITY
  };
}
function pI(e, t, r) {
  const n = e[t] || (e[t] = {});
  return n[r] || (n[r] = {});
}
function bp(e, t, r, n) {
  for (const i of t.getMatchingVisibleMetas(n).reverse()) {
    const a = e[i.index];
    if (r && a > 0 || !r && a < 0)
      return i.index;
  }
  return null;
}
function _p(e, t) {
  const { chart: r, _cachedMeta: n } = e, i = r._stacks || (r._stacks = {}), { iScale: a, vScale: s, index: o } = n, l = a.axis, c = s.axis, u = dI(a, s, n), f = t.length;
  let d;
  for (let h = 0; h < f; ++h) {
    const p = t[h], { [l]: v, [c]: g } = p, m = p._stacks || (p._stacks = {});
    d = m[c] = pI(i, u, v), d[o] = g, d._top = bp(d, s, !0, n.type), d._bottom = bp(d, s, !1, n.type);
    const y = d._visualValues || (d._visualValues = {});
    y[o] = g;
  }
}
function gc(e, t) {
  const r = e.scales;
  return Object.keys(r).filter((n) => r[n].axis === t).shift();
}
function vI(e, t) {
  return Xi(e, {
    active: !1,
    dataset: void 0,
    datasetIndex: t,
    index: t,
    mode: "default",
    type: "dataset"
  });
}
function gI(e, t, r) {
  return Xi(e, {
    active: !1,
    dataIndex: t,
    parsed: void 0,
    raw: void 0,
    element: r,
    index: t,
    mode: "default",
    type: "data"
  });
}
function va(e, t) {
  const r = e.controller.index, n = e.vScale && e.vScale.axis;
  if (n) {
    t = t || e._parsed;
    for (const i of t) {
      const a = i._stacks;
      if (!a || a[n] === void 0 || a[n][r] === void 0)
        return;
      delete a[n][r], a[n]._visualValues !== void 0 && a[n]._visualValues[r] !== void 0 && delete a[n]._visualValues[r];
    }
  }
}
const mc = (e) => e === "reset" || e === "none", wp = (e, t) => t ? e : Object.assign({}, e), mI = (e, t, r) => e && !t.hidden && t._stacked && {
  keys: vy(r, !0),
  values: null
};
class co {
  constructor(t, r) {
    this.chart = t, this._ctx = t.ctx, this.index = r, this._cachedDataOpts = {}, this._cachedMeta = this.getMeta(), this._type = this._cachedMeta.type, this.options = void 0, this._parsing = !1, this._data = void 0, this._objectData = void 0, this._sharedOptions = void 0, this._drawStart = void 0, this._drawCount = void 0, this.enableOptionSharing = !1, this.supportsDecimation = !1, this.$context = void 0, this._syncList = [], this.datasetElementType = new.target.datasetElementType, this.dataElementType = new.target.dataElementType, this.initialize();
  }
  initialize() {
    const t = this._cachedMeta;
    this.configure(), this.linkScales(), t._stacked = yp(t.vScale, t), this.addElements(), this.options.fill && !this.chart.isPluginEnabled("filler") && console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options");
  }
  updateIndex(t) {
    this.index !== t && va(this._cachedMeta), this.index = t;
  }
  linkScales() {
    const t = this.chart, r = this._cachedMeta, n = this.getDataset(), i = (f, d, h, p) => f === "x" ? d : f === "r" ? p : h, a = r.xAxisID = Ke(n.xAxisID, gc(t, "x")), s = r.yAxisID = Ke(n.yAxisID, gc(t, "y")), o = r.rAxisID = Ke(n.rAxisID, gc(t, "r")), l = r.indexAxis, c = r.iAxisID = i(l, a, s, o), u = r.vAxisID = i(l, s, a, o);
    r.xScale = this.getScaleForId(a), r.yScale = this.getScaleForId(s), r.rScale = this.getScaleForId(o), r.iScale = this.getScaleForId(c), r.vScale = this.getScaleForId(u);
  }
  getDataset() {
    return this.chart.data.datasets[this.index];
  }
  getMeta() {
    return this.chart.getDatasetMeta(this.index);
  }
  getScaleForId(t) {
    return this.chart.scales[t];
  }
  _getOtherScale(t) {
    const r = this._cachedMeta;
    return t === r.iScale ? r.vScale : r.iScale;
  }
  reset() {
    this._update("reset");
  }
  _destroy() {
    const t = this._cachedMeta;
    this._data && ap(this._data, this), t._stacked && va(t);
  }
  _dataCheck() {
    const t = this.getDataset(), r = t.data || (t.data = []), n = this._data;
    if (Ee(r))
      this._data = fI(r);
    else if (n !== r) {
      if (n) {
        ap(n, this);
        const i = this._cachedMeta;
        va(i), i._parsed = [];
      }
      r && Object.isExtensible(r) && vB(r, this), this._syncList = [], this._data = r;
    }
  }
  addElements() {
    const t = this._cachedMeta;
    this._dataCheck(), this.datasetElementType && (t.dataset = new this.datasetElementType());
  }
  buildOrUpdateElements(t) {
    const r = this._cachedMeta, n = this.getDataset();
    let i = !1;
    this._dataCheck();
    const a = r._stacked;
    r._stacked = yp(r.vScale, r), r.stack !== n.stack && (i = !0, va(r), r.stack = n.stack), this._resyncElements(t), (i || a !== r._stacked) && _p(this, r._parsed);
  }
  configure() {
    const t = this.chart.config, r = t.datasetScopeKeys(this._type), n = t.getOptionScopes(this.getDataset(), r, !0);
    this.options = t.createResolver(n, this.getContext()), this._parsing = this.options.parsing, this._cachedDataOpts = {};
  }
  parse(t, r) {
    const { _cachedMeta: n, _data: i } = this, { iScale: a, _stacked: s } = n, o = a.axis;
    let l = t === 0 && r === i.length ? !0 : n._sorted, c = t > 0 && n._parsed[t - 1], u, f, d;
    if (this._parsing === !1)
      n._parsed = i, n._sorted = !0, d = i;
    else {
      Ge(i[t]) ? d = this.parseArrayData(n, i, t, r) : Ee(i[t]) ? d = this.parseObjectData(n, i, t, r) : d = this.parsePrimitiveData(n, i, t, r);
      const h = () => f[o] === null || c && f[o] < c[o];
      for (u = 0; u < r; ++u)
        n._parsed[u + t] = f = d[u], l && (h() && (l = !1), c = f);
      n._sorted = l;
    }
    s && _p(this, d);
  }
  parsePrimitiveData(t, r, n, i) {
    const { iScale: a, vScale: s } = t, o = a.axis, l = s.axis, c = a.getLabels(), u = a === s, f = new Array(i);
    let d, h, p;
    for (d = 0, h = i; d < h; ++d)
      p = d + n, f[d] = {
        [o]: u || a.parse(c[p], p),
        [l]: s.parse(r[p], p)
      };
    return f;
  }
  parseArrayData(t, r, n, i) {
    const { xScale: a, yScale: s } = t, o = new Array(i);
    let l, c, u, f;
    for (l = 0, c = i; l < c; ++l)
      u = l + n, f = r[u], o[l] = {
        x: a.parse(f[0], u),
        y: s.parse(f[1], u)
      };
    return o;
  }
  parseObjectData(t, r, n, i) {
    const { xScale: a, yScale: s } = t, { xAxisKey: o = "x", yAxisKey: l = "y" } = this._parsing, c = new Array(i);
    let u, f, d, h;
    for (u = 0, f = i; u < f; ++u)
      d = u + n, h = r[d], c[u] = {
        x: a.parse(Go(h, o), d),
        y: s.parse(Go(h, l), d)
      };
    return c;
  }
  getParsed(t) {
    return this._cachedMeta._parsed[t];
  }
  getDataElement(t) {
    return this._cachedMeta.data[t];
  }
  applyStack(t, r, n) {
    const i = this.chart, a = this._cachedMeta, s = r[t.axis], o = {
      keys: vy(i, !0),
      values: r._stacks[t.axis]._visualValues
    };
    return xp(o, s, a.index, {
      mode: n
    });
  }
  updateRangeFromParsed(t, r, n, i) {
    const a = n[r.axis];
    let s = a === null ? NaN : a;
    const o = i && n._stacks[r.axis];
    i && o && (i.values = o, s = xp(i, a, this._cachedMeta.index)), t.min = Math.min(t.min, s), t.max = Math.max(t.max, s);
  }
  getMinMax(t, r) {
    const n = this._cachedMeta, i = n._parsed, a = n._sorted && t === n.iScale, s = i.length, o = this._getOtherScale(t), l = mI(r, n, this.chart), c = {
      min: Number.POSITIVE_INFINITY,
      max: Number.NEGATIVE_INFINITY
    }, { min: u, max: f } = hI(o);
    let d, h;
    function p() {
      h = i[d];
      const v = h[o.axis];
      return !it(h[t.axis]) || u > v || f < v;
    }
    for (d = 0; d < s && !(!p() && (this.updateRangeFromParsed(c, t, h, l), a)); ++d)
      ;
    if (a) {
      for (d = s - 1; d >= 0; --d)
        if (!p()) {
          this.updateRangeFromParsed(c, t, h, l);
          break;
        }
    }
    return c;
  }
  getAllParsedValues(t) {
    const r = this._cachedMeta._parsed, n = [];
    let i, a, s;
    for (i = 0, a = r.length; i < a; ++i)
      s = r[i][t.axis], it(s) && n.push(s);
    return n;
  }
  getMaxOverflow() {
    return !1;
  }
  getLabelAndValue(t) {
    const r = this._cachedMeta, n = r.iScale, i = r.vScale, a = this.getParsed(t);
    return {
      label: n ? "" + n.getLabelForValue(a[n.axis]) : "",
      value: i ? "" + i.getLabelForValue(a[i.axis]) : ""
    };
  }
  _update(t) {
    const r = this._cachedMeta;
    this.update(t || "default"), r._clip = uI(Ke(this.options.clip, cI(r.xScale, r.yScale, this.getMaxOverflow())));
  }
  update(t) {
  }
  draw() {
    const t = this._ctx, r = this.chart, n = this._cachedMeta, i = n.data || [], a = r.chartArea, s = [], o = this._drawStart || 0, l = this._drawCount || i.length - o, c = this.options.drawActiveElementsOnTop;
    let u;
    for (n.dataset && n.dataset.draw(t, a, o, l), u = o; u < o + l; ++u) {
      const f = i[u];
      f.hidden || (f.active && c ? s.push(f) : f.draw(t, a));
    }
    for (u = 0; u < s.length; ++u)
      s[u].draw(t, a);
  }
  getStyle(t, r) {
    const n = r ? "active" : "default";
    return t === void 0 && this._cachedMeta.dataset ? this.resolveDatasetElementOptions(n) : this.resolveDataElementOptions(t || 0, n);
  }
  getContext(t, r, n) {
    const i = this.getDataset();
    let a;
    if (t >= 0 && t < this._cachedMeta.data.length) {
      const s = this._cachedMeta.data[t];
      a = s.$context || (s.$context = gI(this.getContext(), t, s)), a.parsed = this.getParsed(t), a.raw = i.data[t], a.index = a.dataIndex = t;
    } else
      a = this.$context || (this.$context = vI(this.chart.getContext(), this.index)), a.dataset = i, a.index = a.datasetIndex = this.index;
    return a.active = !!r, a.mode = n, a;
  }
  resolveDatasetElementOptions(t) {
    return this._resolveElementOptions(this.datasetElementType.id, t);
  }
  resolveDataElementOptions(t, r) {
    return this._resolveElementOptions(this.dataElementType.id, r, t);
  }
  _resolveElementOptions(t, r = "default", n) {
    const i = r === "active", a = this._cachedDataOpts, s = t + "-" + r, o = a[s], l = this.enableOptionSharing && Ko(n);
    if (o)
      return wp(o, l);
    const c = this.chart.config, u = c.datasetElementScopeKeys(this._type, t), f = i ? [
      `${t}Hover`,
      "hover",
      t,
      ""
    ] : [
      t,
      ""
    ], d = c.getOptionScopes(this.getDataset(), u), h = Object.keys(Ze.elements[t]), p = () => this.getContext(n, i, r), v = c.resolveNamedOptions(d, h, p, f);
    return v.$shared && (v.$shared = l, a[s] = Object.freeze(wp(v, l))), v;
  }
  _resolveAnimations(t, r, n) {
    const i = this.chart, a = this._cachedDataOpts, s = `animation-${r}`, o = a[s];
    if (o)
      return o;
    let l;
    if (i.options.animation !== !1) {
      const u = this.chart.config, f = u.datasetAnimationScopeKeys(this._type, r), d = u.getOptionScopes(this.getDataset(), f);
      l = u.createResolver(d, this.getContext(t, n, r));
    }
    const c = new sI(i, l && l.animations);
    return l && l._cacheable && (a[s] = Object.freeze(c)), c;
  }
  getSharedOptions(t) {
    if (t.$shared)
      return this._sharedOptions || (this._sharedOptions = Object.assign({}, t));
  }
  includeOptions(t, r) {
    return !r || mc(t) || this.chart._animationsDisabled;
  }
  _getSharedOptions(t, r) {
    const n = this.resolveDataElementOptions(t, r), i = this._sharedOptions, a = this.getSharedOptions(n), s = this.includeOptions(r, a) || a !== i;
    return this.updateSharedOptions(a, r, n), {
      sharedOptions: a,
      includeOptions: s
    };
  }
  updateElement(t, r, n, i) {
    mc(i) ? Object.assign(t, n) : this._resolveAnimations(r, i).update(t, n);
  }
  updateSharedOptions(t, r, n) {
    t && !mc(r) && this._resolveAnimations(void 0, r).update(t, n);
  }
  _setStyle(t, r, n, i) {
    t.active = i;
    const a = this.getStyle(r, i);
    this._resolveAnimations(r, n, i).update(t, {
      options: !i && this.getSharedOptions(a) || a
    });
  }
  removeHoverStyle(t, r, n) {
    this._setStyle(t, n, "active", !1);
  }
  setHoverStyle(t, r, n) {
    this._setStyle(t, n, "active", !0);
  }
  _removeDatasetHoverStyle() {
    const t = this._cachedMeta.dataset;
    t && this._setStyle(t, void 0, "active", !1);
  }
  _setDatasetHoverStyle() {
    const t = this._cachedMeta.dataset;
    t && this._setStyle(t, void 0, "active", !0);
  }
  _resyncElements(t) {
    const r = this._data, n = this._cachedMeta.data;
    for (const [o, l, c] of this._syncList)
      this[o](l, c);
    this._syncList = [];
    const i = n.length, a = r.length, s = Math.min(a, i);
    s && this.parse(0, s), a > i ? this._insertElements(i, a - i, t) : a < i && this._removeElements(a, i - a);
  }
  _insertElements(t, r, n = !0) {
    const i = this._cachedMeta, a = i.data, s = t + r;
    let o;
    const l = (c) => {
      for (c.length += r, o = c.length - 1; o >= s; o--)
        c[o] = c[o - r];
    };
    for (l(a), o = t; o < s; ++o)
      a[o] = new this.dataElementType();
    this._parsing && l(i._parsed), this.parse(t, r), n && this.updateElements(a, t, r, "reset");
  }
  updateElements(t, r, n, i) {
  }
  _removeElements(t, r) {
    const n = this._cachedMeta;
    if (this._parsing) {
      const i = n._parsed.splice(t, r);
      n._stacked && va(n, i);
    }
    n.data.splice(t, r);
  }
  _sync(t) {
    if (this._parsing)
      this._syncList.push(t);
    else {
      const [r, n, i] = t;
      this[r](n, i);
    }
    this.chart._dataChanges.push([
      this.index,
      ...t
    ]);
  }
  _onDataPush() {
    const t = arguments.length;
    this._sync([
      "_insertElements",
      this.getDataset().data.length - t,
      t
    ]);
  }
  _onDataPop() {
    this._sync([
      "_removeElements",
      this._cachedMeta.data.length - 1,
      1
    ]);
  }
  _onDataShift() {
    this._sync([
      "_removeElements",
      0,
      1
    ]);
  }
  _onDataSplice(t, r) {
    r && this._sync([
      "_removeElements",
      t,
      r
    ]);
    const n = arguments.length - 2;
    n && this._sync([
      "_insertElements",
      t,
      n
    ]);
  }
  _onDataUnshift() {
    this._sync([
      "_insertElements",
      0,
      arguments.length
    ]);
  }
}
G(co, "defaults", {}), G(co, "datasetElementType", null), G(co, "dataElementType", null);
function $n() {
  throw new Error("This method is not implemented: Check that a complete date adapter is provided.");
}
class L0 {
  constructor(t) {
    G(this, "options");
    this.options = t || {};
  }
  /**
  * Override default date adapter methods.
  * Accepts type parameter to define options type.
  * @example
  * Chart._adapters._date.override<{myAdapterOption: string}>({
  *   init() {
  *     console.log(this.options.myAdapterOption);
  *   }
  * })
  */
  static override(t) {
    Object.assign(L0.prototype, t);
  }
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  init() {
  }
  formats() {
    return $n();
  }
  parse() {
    return $n();
  }
  format() {
    return $n();
  }
  add() {
    return $n();
  }
  diff() {
    return $n();
  }
  startOf() {
    return $n();
  }
  endOf() {
    return $n();
  }
}
var xI = {
  _date: L0
};
function yI(e, t, r, n) {
  const { controller: i, data: a, _sorted: s } = e, o = i._cachedMeta.iScale;
  if (o && t === o.axis && t !== "r" && s && a.length) {
    const l = o._reversePixels ? hB : Zu;
    if (n) {
      if (i._sharedOptions) {
        const c = a[0], u = typeof c.getRange == "function" && c.getRange(t);
        if (u) {
          const f = l(a, t, r - u), d = l(a, t, r + u);
          return {
            lo: f.lo,
            hi: d.hi
          };
        }
      }
    } else
      return l(a, t, r);
  }
  return {
    lo: 0,
    hi: a.length - 1
  };
}
function vs(e, t, r, n, i) {
  const a = e.getSortedVisibleDatasetMetas(), s = r[t];
  for (let o = 0, l = a.length; o < l; ++o) {
    const { index: c, data: u } = a[o], { lo: f, hi: d } = yI(a[o], t, s, i);
    for (let h = f; h <= d; ++h) {
      const p = u[h];
      p.skip || n(p, c, h);
    }
  }
}
function bI(e) {
  const t = e.indexOf("x") !== -1, r = e.indexOf("y") !== -1;
  return function(n, i) {
    const a = t ? Math.abs(n.x - i.x) : 0, s = r ? Math.abs(n.y - i.y) : 0;
    return Math.sqrt(Math.pow(a, 2) + Math.pow(s, 2));
  };
}
function xc(e, t, r, n, i) {
  const a = [];
  return !i && !e.isPointInArea(t) || vs(e, r, t, function(o, l, c) {
    !i && !gi(o, e.chartArea, 0) || o.inRange(t.x, t.y, n) && a.push({
      element: o,
      datasetIndex: l,
      index: c
    });
  }, !0), a;
}
function _I(e, t, r, n) {
  let i = [];
  function a(s, o, l) {
    const { startAngle: c, endAngle: u } = s.getProps([
      "startAngle",
      "endAngle"
    ], n), { angle: f } = uB(s, {
      x: t.x,
      y: t.y
    });
    fB(f, c, u) && i.push({
      element: s,
      datasetIndex: o,
      index: l
    });
  }
  return vs(e, r, t, a), i;
}
function wI(e, t, r, n, i, a) {
  let s = [];
  const o = bI(r);
  let l = Number.POSITIVE_INFINITY;
  function c(u, f, d) {
    const h = u.inRange(t.x, t.y, i);
    if (n && !h)
      return;
    const p = u.getCenterPoint(i);
    if (!(!!a || e.isPointInArea(p)) && !h)
      return;
    const g = o(t, p);
    g < l ? (s = [
      {
        element: u,
        datasetIndex: f,
        index: d
      }
    ], l = g) : g === l && s.push({
      element: u,
      datasetIndex: f,
      index: d
    });
  }
  return vs(e, r, t, c), s;
}
function yc(e, t, r, n, i, a) {
  return !a && !e.isPointInArea(t) ? [] : r === "r" && !n ? _I(e, t, r, i) : wI(e, t, r, n, i, a);
}
function $p(e, t, r, n, i) {
  const a = [], s = r === "x" ? "inXRange" : "inYRange";
  let o = !1;
  return vs(e, r, t, (l, c, u) => {
    l[s](t[r], i) && (a.push({
      element: l,
      datasetIndex: c,
      index: u
    }), o = o || l.inRange(t.x, t.y, i));
  }), n && !o ? [] : a;
}
var $I = {
  evaluateInteractionItems: vs,
  modes: {
    index(e, t, r, n) {
      const i = An(t, e), a = r.axis || "x", s = r.includeInvisible || !1, o = r.intersect ? xc(e, i, a, n, s) : yc(e, i, a, !1, n, s), l = [];
      return o.length ? (e.getSortedVisibleDatasetMetas().forEach((c) => {
        const u = o[0].index, f = c.data[u];
        f && !f.skip && l.push({
          element: f,
          datasetIndex: c.index,
          index: u
        });
      }), l) : [];
    },
    dataset(e, t, r, n) {
      const i = An(t, e), a = r.axis || "xy", s = r.includeInvisible || !1;
      let o = r.intersect ? xc(e, i, a, n, s) : yc(e, i, a, !1, n, s);
      if (o.length > 0) {
        const l = o[0].datasetIndex, c = e.getDatasetMeta(l).data;
        o = [];
        for (let u = 0; u < c.length; ++u)
          o.push({
            element: c[u],
            datasetIndex: l,
            index: u
          });
      }
      return o;
    },
    point(e, t, r, n) {
      const i = An(t, e), a = r.axis || "xy", s = r.includeInvisible || !1;
      return xc(e, i, a, n, s);
    },
    nearest(e, t, r, n) {
      const i = An(t, e), a = r.axis || "xy", s = r.includeInvisible || !1;
      return yc(e, i, a, r.intersect, n, s);
    },
    x(e, t, r, n) {
      const i = An(t, e);
      return $p(e, i, "x", r.intersect, n);
    },
    y(e, t, r, n) {
      const i = An(t, e);
      return $p(e, i, "y", r.intersect, n);
    }
  }
};
const gy = [
  "left",
  "top",
  "right",
  "bottom"
];
function ga(e, t) {
  return e.filter((r) => r.pos === t);
}
function Dp(e, t) {
  return e.filter((r) => gy.indexOf(r.pos) === -1 && r.box.axis === t);
}
function ma(e, t) {
  return e.sort((r, n) => {
    const i = t ? n : r, a = t ? r : n;
    return i.weight === a.weight ? i.index - a.index : i.weight - a.weight;
  });
}
function DI(e) {
  const t = [];
  let r, n, i, a, s, o;
  for (r = 0, n = (e || []).length; r < n; ++r)
    i = e[r], { position: a, options: { stack: s, stackWeight: o = 1 } } = i, t.push({
      index: r,
      box: i,
      pos: a,
      horizontal: i.isHorizontal(),
      weight: i.weight,
      stack: s && a + s,
      stackWeight: o
    });
  return t;
}
function EI(e) {
  const t = {};
  for (const r of e) {
    const { stack: n, pos: i, stackWeight: a } = r;
    if (!n || !gy.includes(i))
      continue;
    const s = t[n] || (t[n] = {
      count: 0,
      placed: 0,
      weight: 0,
      size: 0
    });
    s.count++, s.weight += a;
  }
  return t;
}
function AI(e, t) {
  const r = EI(e), { vBoxMaxWidth: n, hBoxMaxHeight: i } = t;
  let a, s, o;
  for (a = 0, s = e.length; a < s; ++a) {
    o = e[a];
    const { fullSize: l } = o.box, c = r[o.stack], u = c && o.stackWeight / c.weight;
    o.horizontal ? (o.width = u ? u * n : l && t.availableWidth, o.height = i) : (o.width = n, o.height = u ? u * i : l && t.availableHeight);
  }
  return r;
}
function CI(e) {
  const t = DI(e), r = ma(t.filter((c) => c.box.fullSize), !0), n = ma(ga(t, "left"), !0), i = ma(ga(t, "right")), a = ma(ga(t, "top"), !0), s = ma(ga(t, "bottom")), o = Dp(t, "x"), l = Dp(t, "y");
  return {
    fullSize: r,
    leftAndTop: n.concat(a),
    rightAndBottom: i.concat(l).concat(s).concat(o),
    chartArea: ga(t, "chartArea"),
    vertical: n.concat(i).concat(l),
    horizontal: a.concat(s).concat(o)
  };
}
function Ep(e, t, r, n) {
  return Math.max(e[r], t[r]) + Math.max(e[n], t[n]);
}
function my(e, t) {
  e.top = Math.max(e.top, t.top), e.left = Math.max(e.left, t.left), e.bottom = Math.max(e.bottom, t.bottom), e.right = Math.max(e.right, t.right);
}
function SI(e, t, r, n) {
  const { pos: i, box: a } = r, s = e.maxPadding;
  if (!Ee(i)) {
    r.size && (e[i] -= r.size);
    const f = n[r.stack] || {
      size: 0,
      count: 1
    };
    f.size = Math.max(f.size, r.horizontal ? a.height : a.width), r.size = f.size / f.count, e[i] += r.size;
  }
  a.getPadding && my(s, a.getPadding());
  const o = Math.max(0, t.outerWidth - Ep(s, e, "left", "right")), l = Math.max(0, t.outerHeight - Ep(s, e, "top", "bottom")), c = o !== e.w, u = l !== e.h;
  return e.w = o, e.h = l, r.horizontal ? {
    same: c,
    other: u
  } : {
    same: u,
    other: c
  };
}
function kI(e) {
  const t = e.maxPadding;
  function r(n) {
    const i = Math.max(t[n] - e[n], 0);
    return e[n] += i, i;
  }
  e.y += r("top"), e.x += r("left"), r("right"), r("bottom");
}
function OI(e, t) {
  const r = t.maxPadding;
  function n(i) {
    const a = {
      left: 0,
      top: 0,
      right: 0,
      bottom: 0
    };
    return i.forEach((s) => {
      a[s] = Math.max(t[s], r[s]);
    }), a;
  }
  return n(e ? [
    "left",
    "right"
  ] : [
    "top",
    "bottom"
  ]);
}
function Sa(e, t, r, n) {
  const i = [];
  let a, s, o, l, c, u;
  for (a = 0, s = e.length, c = 0; a < s; ++a) {
    o = e[a], l = o.box, l.update(o.width || t.w, o.height || t.h, OI(o.horizontal, t));
    const { same: f, other: d } = SI(t, r, o, n);
    c |= f && i.length, u = u || d, l.fullSize || i.push(o);
  }
  return c && Sa(i, t, r, n) || u;
}
function Rs(e, t, r, n, i) {
  e.top = r, e.left = t, e.right = t + n, e.bottom = r + i, e.width = n, e.height = i;
}
function Ap(e, t, r, n) {
  const i = r.padding;
  let { x: a, y: s } = t;
  for (const o of e) {
    const l = o.box, c = n[o.stack] || {
      count: 1,
      placed: 0,
      weight: 1
    }, u = o.stackWeight / c.weight || 1;
    if (o.horizontal) {
      const f = t.w * u, d = c.size || l.height;
      Ko(c.start) && (s = c.start), l.fullSize ? Rs(l, i.left, s, r.outerWidth - i.right - i.left, d) : Rs(l, t.left + c.placed, s, f, d), c.start = s, c.placed += f, s = l.bottom;
    } else {
      const f = t.h * u, d = c.size || l.width;
      Ko(c.start) && (a = c.start), l.fullSize ? Rs(l, a, i.top, d, r.outerHeight - i.bottom - i.top) : Rs(l, a, t.top + c.placed, d, f), c.start = a, c.placed += f, a = l.right;
    }
  }
  t.x = a, t.y = s;
}
var Ns = {
  addBox(e, t) {
    e.boxes || (e.boxes = []), t.fullSize = t.fullSize || !1, t.position = t.position || "top", t.weight = t.weight || 0, t._layers = t._layers || function() {
      return [
        {
          z: 0,
          draw(r) {
            t.draw(r);
          }
        }
      ];
    }, e.boxes.push(t);
  },
  removeBox(e, t) {
    const r = e.boxes ? e.boxes.indexOf(t) : -1;
    r !== -1 && e.boxes.splice(r, 1);
  },
  configure(e, t, r) {
    t.fullSize = r.fullSize, t.position = r.position, t.weight = r.weight;
  },
  update(e, t, r, n) {
    if (!e)
      return;
    const i = Rr(e.options.layout.padding), a = Math.max(t - i.width, 0), s = Math.max(r - i.height, 0), o = CI(e.boxes), l = o.vertical, c = o.horizontal;
    gt(e.boxes, (v) => {
      typeof v.beforeLayout == "function" && v.beforeLayout();
    });
    const u = l.reduce((v, g) => g.box.options && g.box.options.display === !1 ? v : v + 1, 0) || 1, f = Object.freeze({
      outerWidth: t,
      outerHeight: r,
      padding: i,
      availableWidth: a,
      availableHeight: s,
      vBoxMaxWidth: a / 2 / u,
      hBoxMaxHeight: s / 2
    }), d = Object.assign({}, i);
    my(d, Rr(n));
    const h = Object.assign({
      maxPadding: d,
      w: a,
      h: s,
      x: i.left,
      y: i.top
    }, i), p = AI(l.concat(c), f);
    Sa(o.fullSize, h, f, p), Sa(l, h, f, p), Sa(c, h, f, p) && Sa(l, h, f, p), kI(h), Ap(o.leftAndTop, h, f, p), h.x += h.w, h.y += h.h, Ap(o.rightAndBottom, h, f, p), e.chartArea = {
      left: h.left,
      top: h.top,
      right: h.left + h.w,
      bottom: h.top + h.h,
      height: h.h,
      width: h.w
    }, gt(o.chartArea, (v) => {
      const g = v.box;
      Object.assign(g, e.chartArea), g.update(h.w, h.h, {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
      });
    });
  }
};
class xy {
  acquireContext(t, r) {
  }
  releaseContext(t) {
    return !1;
  }
  addEventListener(t, r, n) {
  }
  removeEventListener(t, r, n) {
  }
  getDevicePixelRatio() {
    return 1;
  }
  getMaximumSize(t, r, n, i) {
    return r = Math.max(0, r || t.width), n = n || t.height, {
      width: r,
      height: Math.max(0, i ? Math.floor(r / i) : n)
    };
  }
  isAttached(t) {
    return !0;
  }
  updateConfig(t) {
  }
}
class FI extends xy {
  acquireContext(t) {
    return t && t.getContext && t.getContext("2d") || null;
  }
  updateConfig(t) {
    t.options.animation = !1;
  }
}
const uo = "$chartjs", TI = {
  touchstart: "mousedown",
  touchmove: "mousemove",
  touchend: "mouseup",
  pointerenter: "mouseenter",
  pointerdown: "mousedown",
  pointermove: "mousemove",
  pointerup: "mouseup",
  pointerleave: "mouseout",
  pointerout: "mouseout"
}, Cp = (e) => e === null || e === "";
function MI(e, t) {
  const r = e.style, n = e.getAttribute("height"), i = e.getAttribute("width");
  if (e[uo] = {
    initial: {
      height: n,
      width: i,
      style: {
        display: r.display,
        height: r.height,
        width: r.width
      }
    }
  }, r.display = r.display || "block", r.boxSizing = r.boxSizing || "border-box", Cp(i)) {
    const a = vp(e, "width");
    a !== void 0 && (e.width = a);
  }
  if (Cp(n))
    if (e.style.height === "")
      e.height = e.width / (t || 2);
    else {
      const a = vp(e, "height");
      a !== void 0 && (e.height = a);
    }
  return e;
}
const yy = rI ? {
  passive: !0
} : !1;
function PI(e, t, r) {
  e.addEventListener(t, r, yy);
}
function BI(e, t, r) {
  e.canvas.removeEventListener(t, r, yy);
}
function II(e, t) {
  const r = TI[e.type] || e.type, { x: n, y: i } = An(e, t);
  return {
    type: r,
    chart: t,
    native: e,
    x: n !== void 0 ? n : null,
    y: i !== void 0 ? i : null
  };
}
function rl(e, t) {
  for (const r of e)
    if (r === t || r.contains(t))
      return !0;
}
function RI(e, t, r) {
  const n = e.canvas, i = new MutationObserver((a) => {
    let s = !1;
    for (const o of a)
      s = s || rl(o.addedNodes, n), s = s && !rl(o.removedNodes, n);
    s && r();
  });
  return i.observe(document, {
    childList: !0,
    subtree: !0
  }), i;
}
function NI(e, t, r) {
  const n = e.canvas, i = new MutationObserver((a) => {
    let s = !1;
    for (const o of a)
      s = s || rl(o.removedNodes, n), s = s && !rl(o.addedNodes, n);
    s && r();
  });
  return i.observe(document, {
    childList: !0,
    subtree: !0
  }), i;
}
const Ja = /* @__PURE__ */ new Map();
let Sp = 0;
function by() {
  const e = window.devicePixelRatio;
  e !== Sp && (Sp = e, Ja.forEach((t, r) => {
    r.currentDevicePixelRatio !== e && t();
  }));
}
function LI(e, t) {
  Ja.size || window.addEventListener("resize", by), Ja.set(e, t);
}
function jI(e) {
  Ja.delete(e), Ja.size || window.removeEventListener("resize", by);
}
function zI(e, t, r) {
  const n = e.canvas, i = n && N0(n);
  if (!i)
    return;
  const a = ay((o, l) => {
    const c = i.clientWidth;
    r(o, l), c < i.clientWidth && r();
  }, window), s = new ResizeObserver((o) => {
    const l = o[0], c = l.contentRect.width, u = l.contentRect.height;
    c === 0 && u === 0 || a(c, u);
  });
  return s.observe(i), LI(e, a), s;
}
function bc(e, t, r) {
  r && r.disconnect(), t === "resize" && jI(e);
}
function HI(e, t, r) {
  const n = e.canvas, i = ay((a) => {
    e.ctx !== null && r(II(a, e));
  }, e);
  return PI(n, t, i), i;
}
class VI extends xy {
  acquireContext(t, r) {
    const n = t && t.getContext && t.getContext("2d");
    return n && n.canvas === t ? (MI(t, r), n) : null;
  }
  releaseContext(t) {
    const r = t.canvas;
    if (!r[uo])
      return !1;
    const n = r[uo].initial;
    [
      "height",
      "width"
    ].forEach((a) => {
      const s = n[a];
      Ye(s) ? r.removeAttribute(a) : r.setAttribute(a, s);
    });
    const i = n.style || {};
    return Object.keys(i).forEach((a) => {
      r.style[a] = i[a];
    }), r.width = r.width, delete r[uo], !0;
  }
  addEventListener(t, r, n) {
    this.removeEventListener(t, r);
    const i = t.$proxies || (t.$proxies = {}), s = {
      attach: RI,
      detach: NI,
      resize: zI
    }[r] || HI;
    i[r] = s(t, r, n);
  }
  removeEventListener(t, r) {
    const n = t.$proxies || (t.$proxies = {}), i = n[r];
    if (!i)
      return;
    ({
      attach: bc,
      detach: bc,
      resize: bc
    }[r] || BI)(t, r, i), n[r] = void 0;
  }
  getDevicePixelRatio() {
    return window.devicePixelRatio;
  }
  getMaximumSize(t, r, n, i) {
    return tI(t, r, n, i);
  }
  isAttached(t) {
    const r = N0(t);
    return !!(r && r.isConnected);
  }
}
function YI(e) {
  return !R0() || typeof OffscreenCanvas < "u" && e instanceof OffscreenCanvas ? FI : VI;
}
var eo;
let _y = (eo = class {
  constructor() {
    G(this, "x");
    G(this, "y");
    G(this, "active", !1);
    G(this, "options");
    G(this, "$animations");
  }
  tooltipPosition(t) {
    const { x: r, y: n } = this.getProps([
      "x",
      "y"
    ], t);
    return {
      x: r,
      y: n
    };
  }
  hasValue() {
    return Jo(this.x) && Jo(this.y);
  }
  getProps(t, r) {
    const n = this.$animations;
    if (!r || !n)
      return this;
    const i = {};
    return t.forEach((a) => {
      i[a] = n[a] && n[a].active() ? n[a]._to : this[a];
    }), i;
  }
}, G(eo, "defaults", {}), G(eo, "defaultRoutes"), eo);
function WI(e, t) {
  const r = e.options.ticks, n = UI(e), i = Math.min(r.maxTicksLimit || n, n), a = r.major.enabled ? GI(t) : [], s = a.length, o = a[0], l = a[s - 1], c = [];
  if (s > i)
    return KI(t, c, a, s / i), c;
  const u = qI(a, t, i);
  if (s > 0) {
    let f, d;
    const h = s > 1 ? Math.round((l - o) / (s - 1)) : null;
    for (Ls(t, c, u, Ye(h) ? 0 : o - h, o), f = 0, d = s - 1; f < d; f++)
      Ls(t, c, u, a[f], a[f + 1]);
    return Ls(t, c, u, l, Ye(h) ? t.length : l + h), c;
  }
  return Ls(t, c, u), c;
}
function UI(e) {
  const t = e.options.offset, r = e._tickSize(), n = e._length / r + (t ? 0 : 1), i = e._maxLength / r;
  return Math.floor(Math.min(n, i));
}
function qI(e, t, r) {
  const n = ZI(e), i = t.length / r;
  if (!n)
    return Math.max(i, 1);
  const a = lB(n);
  for (let s = 0, o = a.length - 1; s < o; s++) {
    const l = a[s];
    if (l > i)
      return l;
  }
  return Math.max(i, 1);
}
function GI(e) {
  const t = [];
  let r, n;
  for (r = 0, n = e.length; r < n; r++)
    e[r].major && t.push(r);
  return t;
}
function KI(e, t, r, n) {
  let i = 0, a = r[0], s;
  for (n = Math.ceil(n), s = 0; s < e.length; s++)
    s === a && (t.push(e[s]), i++, a = r[i * n]);
}
function Ls(e, t, r, n, i) {
  const a = Ke(n, 0), s = Math.min(Ke(i, e.length), e.length);
  let o = 0, l, c, u;
  for (r = Math.ceil(r), i && (l = i - n, r = l / Math.floor(l / r)), u = a; u < 0; )
    o++, u = Math.round(a + o * r);
  for (c = Math.max(a, 0); c < s; c++)
    c === u && (t.push(e[c]), o++, u = Math.round(a + o * r));
}
function ZI(e) {
  const t = e.length;
  let r, n;
  if (t < 2)
    return !1;
  for (n = e[0], r = 1; r < t; ++r)
    if (e[r] - e[r - 1] !== n)
      return !1;
  return n;
}
const XI = (e) => e === "left" ? "right" : e === "right" ? "left" : e, kp = (e, t, r) => t === "top" || t === "left" ? e[t] + r : e[t] - r, Op = (e, t) => Math.min(t || e, e);
function Fp(e, t) {
  const r = [], n = e.length / t, i = e.length;
  let a = 0;
  for (; a < i; a += n)
    r.push(e[Math.floor(a)]);
  return r;
}
function JI(e, t, r) {
  const n = e.ticks.length, i = Math.min(t, n - 1), a = e._startPixel, s = e._endPixel, o = 1e-6;
  let l = e.getPixelForTick(i), c;
  if (!(r && (n === 1 ? c = Math.max(l - a, s - l) : t === 0 ? c = (e.getPixelForTick(1) - l) / 2 : c = (l - e.getPixelForTick(i - 1)) / 2, l += i < t ? c : -c, l < a - o || l > s + o)))
    return l;
}
function QI(e, t) {
  gt(e, (r) => {
    const n = r.gc, i = n.length / 2;
    let a;
    if (i > t) {
      for (a = 0; a < i; ++a)
        delete r.data[n[a]];
      n.splice(0, i);
    }
  });
}
function xa(e) {
  return e.drawTicks ? e.tickLength : 0;
}
function Tp(e, t) {
  if (!e.display)
    return 0;
  const r = Fi(e.font, t), n = Rr(e.padding);
  return (Ge(e.text) ? e.text.length : 1) * r.lineHeight + n.height;
}
function eR(e, t) {
  return Xi(e, {
    scale: t,
    type: "scale"
  });
}
function tR(e, t, r) {
  return Xi(e, {
    tick: r,
    index: t,
    type: "tick"
  });
}
function rR(e, t, r) {
  let n = xB(e);
  return (r && t !== "right" || !r && t === "right") && (n = XI(n)), n;
}
function nR(e, t, r, n) {
  const { top: i, left: a, bottom: s, right: o, chart: l } = e, { chartArea: c, scales: u } = l;
  let f = 0, d, h, p;
  const v = s - i, g = o - a;
  if (e.isHorizontal()) {
    if (h = sp(n, a, o), Ee(r)) {
      const m = Object.keys(r)[0], y = r[m];
      p = u[m].getPixelForValue(y) + v - t;
    } else
      r === "center" ? p = (c.bottom + c.top) / 2 + v - t : p = kp(e, r, t);
    d = o - a;
  } else {
    if (Ee(r)) {
      const m = Object.keys(r)[0], y = r[m];
      h = u[m].getPixelForValue(y) - g + t;
    } else
      r === "center" ? h = (c.left + c.right) / 2 - g + t : h = kp(e, r, t);
    p = sp(n, s, i), f = r === "left" ? -Or : Or;
  }
  return {
    titleX: h,
    titleY: p,
    maxWidth: d,
    rotation: f
  };
}
class Ji extends _y {
  constructor(t) {
    super(), this.id = t.id, this.type = t.type, this.options = void 0, this.ctx = t.ctx, this.chart = t.chart, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.width = void 0, this.height = void 0, this._margins = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }, this.maxWidth = void 0, this.maxHeight = void 0, this.paddingTop = void 0, this.paddingBottom = void 0, this.paddingLeft = void 0, this.paddingRight = void 0, this.axis = void 0, this.labelRotation = void 0, this.min = void 0, this.max = void 0, this._range = void 0, this.ticks = [], this._gridLineItems = null, this._labelItems = null, this._labelSizes = null, this._length = 0, this._maxLength = 0, this._longestTextCache = {}, this._startPixel = void 0, this._endPixel = void 0, this._reversePixels = !1, this._userMax = void 0, this._userMin = void 0, this._suggestedMax = void 0, this._suggestedMin = void 0, this._ticksLength = 0, this._borderValue = 0, this._cache = {}, this._dataLimitsCached = !1, this.$context = void 0;
  }
  init(t) {
    this.options = t.setContext(this.getContext()), this.axis = t.axis, this._userMin = this.parse(t.min), this._userMax = this.parse(t.max), this._suggestedMin = this.parse(t.suggestedMin), this._suggestedMax = this.parse(t.suggestedMax);
  }
  parse(t, r) {
    return t;
  }
  getUserBounds() {
    let { _userMin: t, _userMax: r, _suggestedMin: n, _suggestedMax: i } = this;
    return t = It(t, Number.POSITIVE_INFINITY), r = It(r, Number.NEGATIVE_INFINITY), n = It(n, Number.POSITIVE_INFINITY), i = It(i, Number.NEGATIVE_INFINITY), {
      min: It(t, n),
      max: It(r, i),
      minDefined: it(t),
      maxDefined: it(r)
    };
  }
  getMinMax(t) {
    let { min: r, max: n, minDefined: i, maxDefined: a } = this.getUserBounds(), s;
    if (i && a)
      return {
        min: r,
        max: n
      };
    const o = this.getMatchingVisibleMetas();
    for (let l = 0, c = o.length; l < c; ++l)
      s = o[l].controller.getMinMax(this, t), i || (r = Math.min(r, s.min)), a || (n = Math.max(n, s.max));
    return r = a && r > n ? n : r, n = i && r > n ? r : n, {
      min: It(r, It(n, r)),
      max: It(n, It(r, n))
    };
  }
  getPadding() {
    return {
      left: this.paddingLeft || 0,
      top: this.paddingTop || 0,
      right: this.paddingRight || 0,
      bottom: this.paddingBottom || 0
    };
  }
  getTicks() {
    return this.ticks;
  }
  getLabels() {
    const t = this.chart.data;
    return this.options.labels || (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels || [];
  }
  getLabelItems(t = this.chart.chartArea) {
    return this._labelItems || (this._labelItems = this._computeLabelItems(t));
  }
  beforeLayout() {
    this._cache = {}, this._dataLimitsCached = !1;
  }
  beforeUpdate() {
    Ve(this.options.beforeUpdate, [
      this
    ]);
  }
  update(t, r, n) {
    const { beginAtZero: i, grace: a, ticks: s } = this.options, o = s.sampleSize;
    this.beforeUpdate(), this.maxWidth = t, this.maxHeight = r, this._margins = n = Object.assign({
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }, n), this.ticks = null, this._labelSizes = null, this._gridLineItems = null, this._labelItems = null, this.beforeSetDimensions(), this.setDimensions(), this.afterSetDimensions(), this._maxLength = this.isHorizontal() ? this.width + n.left + n.right : this.height + n.top + n.bottom, this._dataLimitsCached || (this.beforeDataLimits(), this.determineDataLimits(), this.afterDataLimits(), this._range = jB(this, a, i), this._dataLimitsCached = !0), this.beforeBuildTicks(), this.ticks = this.buildTicks() || [], this.afterBuildTicks();
    const l = o < this.ticks.length;
    this._convertTicksToLabels(l ? Fp(this.ticks, o) : this.ticks), this.configure(), this.beforeCalculateLabelRotation(), this.calculateLabelRotation(), this.afterCalculateLabelRotation(), s.display && (s.autoSkip || s.source === "auto") && (this.ticks = WI(this, this.ticks), this._labelSizes = null, this.afterAutoSkip()), l && this._convertTicksToLabels(this.ticks), this.beforeFit(), this.fit(), this.afterFit(), this.afterUpdate();
  }
  configure() {
    let t = this.options.reverse, r, n;
    this.isHorizontal() ? (r = this.left, n = this.right) : (r = this.top, n = this.bottom, t = !t), this._startPixel = r, this._endPixel = n, this._reversePixels = t, this._length = n - r, this._alignToPixels = this.options.alignToPixels;
  }
  afterUpdate() {
    Ve(this.options.afterUpdate, [
      this
    ]);
  }
  beforeSetDimensions() {
    Ve(this.options.beforeSetDimensions, [
      this
    ]);
  }
  setDimensions() {
    this.isHorizontal() ? (this.width = this.maxWidth, this.left = 0, this.right = this.width) : (this.height = this.maxHeight, this.top = 0, this.bottom = this.height), this.paddingLeft = 0, this.paddingTop = 0, this.paddingRight = 0, this.paddingBottom = 0;
  }
  afterSetDimensions() {
    Ve(this.options.afterSetDimensions, [
      this
    ]);
  }
  _callHooks(t) {
    this.chart.notifyPlugins(t, this.getContext()), Ve(this.options[t], [
      this
    ]);
  }
  beforeDataLimits() {
    this._callHooks("beforeDataLimits");
  }
  determineDataLimits() {
  }
  afterDataLimits() {
    this._callHooks("afterDataLimits");
  }
  beforeBuildTicks() {
    this._callHooks("beforeBuildTicks");
  }
  buildTicks() {
    return [];
  }
  afterBuildTicks() {
    this._callHooks("afterBuildTicks");
  }
  beforeTickToLabelConversion() {
    Ve(this.options.beforeTickToLabelConversion, [
      this
    ]);
  }
  generateTickLabels(t) {
    const r = this.options.ticks;
    let n, i, a;
    for (n = 0, i = t.length; n < i; n++)
      a = t[n], a.label = Ve(r.callback, [
        a.value,
        n,
        t
      ], this);
  }
  afterTickToLabelConversion() {
    Ve(this.options.afterTickToLabelConversion, [
      this
    ]);
  }
  beforeCalculateLabelRotation() {
    Ve(this.options.beforeCalculateLabelRotation, [
      this
    ]);
  }
  calculateLabelRotation() {
    const t = this.options, r = t.ticks, n = Op(this.ticks.length, t.ticks.maxTicksLimit), i = r.minRotation || 0, a = r.maxRotation;
    let s = i, o, l, c;
    if (!this._isVisible() || !r.display || i >= a || n <= 1 || !this.isHorizontal()) {
      this.labelRotation = i;
      return;
    }
    const u = this._getLabelSizes(), f = u.widest.width, d = u.highest.height, h = Tn(this.chart.width - f, 0, this.maxWidth);
    o = t.offset ? this.maxWidth / n : h / (n - 1), f + 6 > o && (o = h / (n - (t.offset ? 0.5 : 1)), l = this.maxHeight - xa(t.grid) - r.padding - Tp(t.title, this.chart.options.font), c = Math.sqrt(f * f + d * d), s = F0(Math.min(Math.asin(Tn((u.highest.height + 6) / o, -1, 1)), Math.asin(Tn(l / c, -1, 1)) - Math.asin(Tn(d / c, -1, 1)))), s = Math.max(i, Math.min(a, s))), this.labelRotation = s;
  }
  afterCalculateLabelRotation() {
    Ve(this.options.afterCalculateLabelRotation, [
      this
    ]);
  }
  afterAutoSkip() {
  }
  beforeFit() {
    Ve(this.options.beforeFit, [
      this
    ]);
  }
  fit() {
    const t = {
      width: 0,
      height: 0
    }, { chart: r, options: { ticks: n, title: i, grid: a } } = this, s = this._isVisible(), o = this.isHorizontal();
    if (s) {
      const l = Tp(i, r.options.font);
      if (o ? (t.width = this.maxWidth, t.height = xa(a) + l) : (t.height = this.maxHeight, t.width = xa(a) + l), n.display && this.ticks.length) {
        const { first: c, last: u, widest: f, highest: d } = this._getLabelSizes(), h = n.padding * 2, p = on(this.labelRotation), v = Math.cos(p), g = Math.sin(p);
        if (o) {
          const m = n.mirror ? 0 : g * f.width + v * d.height;
          t.height = Math.min(this.maxHeight, t.height + m + h);
        } else {
          const m = n.mirror ? 0 : v * f.width + g * d.height;
          t.width = Math.min(this.maxWidth, t.width + m + h);
        }
        this._calculatePadding(c, u, g, v);
      }
    }
    this._handleMargins(), o ? (this.width = this._length = r.width - this._margins.left - this._margins.right, this.height = t.height) : (this.width = t.width, this.height = this._length = r.height - this._margins.top - this._margins.bottom);
  }
  _calculatePadding(t, r, n, i) {
    const { ticks: { align: a, padding: s }, position: o } = this.options, l = this.labelRotation !== 0, c = o !== "top" && this.axis === "x";
    if (this.isHorizontal()) {
      const u = this.getPixelForTick(0) - this.left, f = this.right - this.getPixelForTick(this.ticks.length - 1);
      let d = 0, h = 0;
      l ? c ? (d = i * t.width, h = n * r.height) : (d = n * t.height, h = i * r.width) : a === "start" ? h = r.width : a === "end" ? d = t.width : a !== "inner" && (d = t.width / 2, h = r.width / 2), this.paddingLeft = Math.max((d - u + s) * this.width / (this.width - u), 0), this.paddingRight = Math.max((h - f + s) * this.width / (this.width - f), 0);
    } else {
      let u = r.height / 2, f = t.height / 2;
      a === "start" ? (u = 0, f = t.height) : a === "end" && (u = r.height, f = 0), this.paddingTop = u + s, this.paddingBottom = f + s;
    }
  }
  _handleMargins() {
    this._margins && (this._margins.left = Math.max(this.paddingLeft, this._margins.left), this._margins.top = Math.max(this.paddingTop, this._margins.top), this._margins.right = Math.max(this.paddingRight, this._margins.right), this._margins.bottom = Math.max(this.paddingBottom, this._margins.bottom));
  }
  afterFit() {
    Ve(this.options.afterFit, [
      this
    ]);
  }
  isHorizontal() {
    const { axis: t, position: r } = this.options;
    return r === "top" || r === "bottom" || t === "x";
  }
  isFullSize() {
    return this.options.fullSize;
  }
  _convertTicksToLabels(t) {
    this.beforeTickToLabelConversion(), this.generateTickLabels(t);
    let r, n;
    for (r = 0, n = t.length; r < n; r++)
      Ye(t[r].label) && (t.splice(r, 1), n--, r--);
    this.afterTickToLabelConversion();
  }
  _getLabelSizes() {
    let t = this._labelSizes;
    if (!t) {
      const r = this.options.ticks.sampleSize;
      let n = this.ticks;
      r < n.length && (n = Fp(n, r)), this._labelSizes = t = this._computeLabelSizes(n, n.length, this.options.ticks.maxTicksLimit);
    }
    return t;
  }
  _computeLabelSizes(t, r, n) {
    const { ctx: i, _longestTextCache: a } = this, s = [], o = [], l = Math.floor(r / Op(r, n));
    let c = 0, u = 0, f, d, h, p, v, g, m, y, _, x, b;
    for (f = 0; f < r; f += l) {
      if (p = t[f].label, v = this._resolveTickFontOptions(f), i.font = g = v.string, m = a[g] = a[g] || {
        data: {},
        gc: []
      }, y = v.lineHeight, _ = x = 0, !Ye(p) && !Ge(p))
        _ = Qo(i, m.data, m.gc, _, p), x = y;
      else if (Ge(p))
        for (d = 0, h = p.length; d < h; ++d)
          b = p[d], !Ye(b) && !Ge(b) && (_ = Qo(i, m.data, m.gc, _, b), x += y);
      s.push(_), o.push(x), c = Math.max(_, c), u = Math.max(x, u);
    }
    QI(a, r);
    const w = s.indexOf(c), E = o.indexOf(u), $ = (C) => ({
      width: s[C] || 0,
      height: o[C] || 0
    });
    return {
      first: $(0),
      last: $(r - 1),
      widest: $(w),
      highest: $(E),
      widths: s,
      heights: o
    };
  }
  getLabelForValue(t) {
    return t;
  }
  getPixelForValue(t, r) {
    return NaN;
  }
  getValueForPixel(t) {
  }
  getPixelForTick(t) {
    const r = this.ticks;
    return t < 0 || t > r.length - 1 ? null : this.getPixelForValue(r[t].value);
  }
  getPixelForDecimal(t) {
    this._reversePixels && (t = 1 - t);
    const r = this._startPixel + t * this._length;
    return dB(this._alignToPixels ? wn(this.chart, r, 0) : r);
  }
  getDecimalForPixel(t) {
    const r = (t - this._startPixel) / this._length;
    return this._reversePixels ? 1 - r : r;
  }
  getBasePixel() {
    return this.getPixelForValue(this.getBaseValue());
  }
  getBaseValue() {
    const { min: t, max: r } = this;
    return t < 0 && r < 0 ? r : t > 0 && r > 0 ? t : 0;
  }
  getContext(t) {
    const r = this.ticks || [];
    if (t >= 0 && t < r.length) {
      const n = r[t];
      return n.$context || (n.$context = tR(this.getContext(), t, n));
    }
    return this.$context || (this.$context = eR(this.chart.getContext(), this));
  }
  _tickSize() {
    const t = this.options.ticks, r = on(this.labelRotation), n = Math.abs(Math.cos(r)), i = Math.abs(Math.sin(r)), a = this._getLabelSizes(), s = t.autoSkipPadding || 0, o = a ? a.widest.width + s : 0, l = a ? a.highest.height + s : 0;
    return this.isHorizontal() ? l * n > o * i ? o / n : l / i : l * i < o * n ? l / n : o / i;
  }
  _isVisible() {
    const t = this.options.display;
    return t !== "auto" ? !!t : this.getMatchingVisibleMetas().length > 0;
  }
  _computeGridLineItems(t) {
    const r = this.axis, n = this.chart, i = this.options, { grid: a, position: s, border: o } = i, l = a.offset, c = this.isHorizontal(), f = this.ticks.length + (l ? 1 : 0), d = xa(a), h = [], p = o.setContext(this.getContext()), v = p.display ? p.width : 0, g = v / 2, m = function(H) {
      return wn(n, H, v);
    };
    let y, _, x, b, w, E, $, C, D, A, S, k;
    if (s === "top")
      y = m(this.bottom), E = this.bottom - d, C = y - g, A = m(t.top) + g, k = t.bottom;
    else if (s === "bottom")
      y = m(this.top), A = t.top, k = m(t.bottom) - g, E = y + g, C = this.top + d;
    else if (s === "left")
      y = m(this.right), w = this.right - d, $ = y - g, D = m(t.left) + g, S = t.right;
    else if (s === "right")
      y = m(this.left), D = t.left, S = m(t.right) - g, w = y + g, $ = this.left + d;
    else if (r === "x") {
      if (s === "center")
        y = m((t.top + t.bottom) / 2 + 0.5);
      else if (Ee(s)) {
        const H = Object.keys(s)[0], K = s[H];
        y = m(this.chart.scales[H].getPixelForValue(K));
      }
      A = t.top, k = t.bottom, E = y + g, C = E + d;
    } else if (r === "y") {
      if (s === "center")
        y = m((t.left + t.right) / 2);
      else if (Ee(s)) {
        const H = Object.keys(s)[0], K = s[H];
        y = m(this.chart.scales[H].getPixelForValue(K));
      }
      w = y - g, $ = w - d, D = t.left, S = t.right;
    }
    const j = Ke(i.ticks.maxTicksLimit, f), P = Math.max(1, Math.ceil(f / j));
    for (_ = 0; _ < f; _ += P) {
      const H = this.getContext(_), K = a.setContext(H), X = o.setContext(H), Z = K.lineWidth, B = K.color, T = X.dash || [], R = X.dashOffset, N = K.tickWidth, F = K.tickColor, te = K.tickBorderDash || [], J = K.tickBorderDashOffset;
      x = JI(this, _, l), x !== void 0 && (b = wn(n, x, Z), c ? w = $ = D = S = b : E = C = A = k = b, h.push({
        tx1: w,
        ty1: E,
        tx2: $,
        ty2: C,
        x1: D,
        y1: A,
        x2: S,
        y2: k,
        width: Z,
        color: B,
        borderDash: T,
        borderDashOffset: R,
        tickWidth: N,
        tickColor: F,
        tickBorderDash: te,
        tickBorderDashOffset: J
      }));
    }
    return this._ticksLength = f, this._borderValue = y, h;
  }
  _computeLabelItems(t) {
    const r = this.axis, n = this.options, { position: i, ticks: a } = n, s = this.isHorizontal(), o = this.ticks, { align: l, crossAlign: c, padding: u, mirror: f } = a, d = xa(n.grid), h = d + u, p = f ? -u : h, v = -on(this.labelRotation), g = [];
    let m, y, _, x, b, w, E, $, C, D, A, S, k = "middle";
    if (i === "top")
      w = this.bottom - p, E = this._getXAxisLabelAlignment();
    else if (i === "bottom")
      w = this.top + p, E = this._getXAxisLabelAlignment();
    else if (i === "left") {
      const P = this._getYAxisLabelAlignment(d);
      E = P.textAlign, b = P.x;
    } else if (i === "right") {
      const P = this._getYAxisLabelAlignment(d);
      E = P.textAlign, b = P.x;
    } else if (r === "x") {
      if (i === "center")
        w = (t.top + t.bottom) / 2 + h;
      else if (Ee(i)) {
        const P = Object.keys(i)[0], H = i[P];
        w = this.chart.scales[P].getPixelForValue(H) + h;
      }
      E = this._getXAxisLabelAlignment();
    } else if (r === "y") {
      if (i === "center")
        b = (t.left + t.right) / 2 - h;
      else if (Ee(i)) {
        const P = Object.keys(i)[0], H = i[P];
        b = this.chart.scales[P].getPixelForValue(H);
      }
      E = this._getYAxisLabelAlignment(d).textAlign;
    }
    r === "y" && (l === "start" ? k = "top" : l === "end" && (k = "bottom"));
    const j = this._getLabelSizes();
    for (m = 0, y = o.length; m < y; ++m) {
      _ = o[m], x = _.label;
      const P = a.setContext(this.getContext(m));
      $ = this.getPixelForTick(m) + a.labelOffset, C = this._resolveTickFontOptions(m), D = C.lineHeight, A = Ge(x) ? x.length : 1;
      const H = A / 2, K = P.color, X = P.textStrokeColor, Z = P.textStrokeWidth;
      let B = E;
      s ? (b = $, E === "inner" && (m === y - 1 ? B = this.options.reverse ? "left" : "right" : m === 0 ? B = this.options.reverse ? "right" : "left" : B = "center"), i === "top" ? c === "near" || v !== 0 ? S = -A * D + D / 2 : c === "center" ? S = -j.highest.height / 2 - H * D + D : S = -j.highest.height + D / 2 : c === "near" || v !== 0 ? S = D / 2 : c === "center" ? S = j.highest.height / 2 - H * D : S = j.highest.height - A * D, f && (S *= -1), v !== 0 && !P.showLabelBackdrop && (b += D / 2 * Math.sin(v))) : (w = $, S = (1 - A) * D / 2);
      let T;
      if (P.showLabelBackdrop) {
        const R = Rr(P.backdropPadding), N = j.heights[m], F = j.widths[m];
        let te = S - R.top, J = 0 - R.left;
        switch (k) {
          case "middle":
            te -= N / 2;
            break;
          case "bottom":
            te -= N;
            break;
        }
        switch (E) {
          case "center":
            J -= F / 2;
            break;
          case "right":
            J -= F;
            break;
          case "inner":
            m === y - 1 ? J -= F : m > 0 && (J -= F / 2);
            break;
        }
        T = {
          left: J,
          top: te,
          width: F + R.width,
          height: N + R.height,
          color: P.backdropColor
        };
      }
      g.push({
        label: x,
        font: C,
        textOffset: S,
        options: {
          rotation: v,
          color: K,
          strokeColor: X,
          strokeWidth: Z,
          textAlign: B,
          textBaseline: k,
          translation: [
            b,
            w
          ],
          backdrop: T
        }
      });
    }
    return g;
  }
  _getXAxisLabelAlignment() {
    const { position: t, ticks: r } = this.options;
    if (-on(this.labelRotation))
      return t === "top" ? "left" : "right";
    let i = "center";
    return r.align === "start" ? i = "left" : r.align === "end" ? i = "right" : r.align === "inner" && (i = "inner"), i;
  }
  _getYAxisLabelAlignment(t) {
    const { position: r, ticks: { crossAlign: n, mirror: i, padding: a } } = this.options, s = this._getLabelSizes(), o = t + a, l = s.widest.width;
    let c, u;
    return r === "left" ? i ? (u = this.right + a, n === "near" ? c = "left" : n === "center" ? (c = "center", u += l / 2) : (c = "right", u += l)) : (u = this.right - o, n === "near" ? c = "right" : n === "center" ? (c = "center", u -= l / 2) : (c = "left", u = this.left)) : r === "right" ? i ? (u = this.left + a, n === "near" ? c = "right" : n === "center" ? (c = "center", u -= l / 2) : (c = "left", u -= l)) : (u = this.left + o, n === "near" ? c = "left" : n === "center" ? (c = "center", u += l / 2) : (c = "right", u = this.right)) : c = "right", {
      textAlign: c,
      x: u
    };
  }
  _computeLabelArea() {
    if (this.options.ticks.mirror)
      return;
    const t = this.chart, r = this.options.position;
    if (r === "left" || r === "right")
      return {
        top: 0,
        left: this.left,
        bottom: t.height,
        right: this.right
      };
    if (r === "top" || r === "bottom")
      return {
        top: this.top,
        left: 0,
        bottom: this.bottom,
        right: t.width
      };
  }
  drawBackground() {
    const { ctx: t, options: { backgroundColor: r }, left: n, top: i, width: a, height: s } = this;
    r && (t.save(), t.fillStyle = r, t.fillRect(n, i, a, s), t.restore());
  }
  getLineWidthForValue(t) {
    const r = this.options.grid;
    if (!this._isVisible() || !r.display)
      return 0;
    const i = this.ticks.findIndex((a) => a.value === t);
    return i >= 0 ? r.setContext(this.getContext(i)).lineWidth : 0;
  }
  drawGrid(t) {
    const r = this.options.grid, n = this.ctx, i = this._gridLineItems || (this._gridLineItems = this._computeGridLineItems(t));
    let a, s;
    const o = (l, c, u) => {
      !u.width || !u.color || (n.save(), n.lineWidth = u.width, n.strokeStyle = u.color, n.setLineDash(u.borderDash || []), n.lineDashOffset = u.borderDashOffset, n.beginPath(), n.moveTo(l.x, l.y), n.lineTo(c.x, c.y), n.stroke(), n.restore());
    };
    if (r.display)
      for (a = 0, s = i.length; a < s; ++a) {
        const l = i[a];
        r.drawOnChartArea && o({
          x: l.x1,
          y: l.y1
        }, {
          x: l.x2,
          y: l.y2
        }, l), r.drawTicks && o({
          x: l.tx1,
          y: l.ty1
        }, {
          x: l.tx2,
          y: l.ty2
        }, {
          color: l.tickColor,
          width: l.tickWidth,
          borderDash: l.tickBorderDash,
          borderDashOffset: l.tickBorderDashOffset
        });
      }
  }
  drawBorder() {
    const { chart: t, ctx: r, options: { border: n, grid: i } } = this, a = n.setContext(this.getContext()), s = n.display ? a.width : 0;
    if (!s)
      return;
    const o = i.setContext(this.getContext(0)).lineWidth, l = this._borderValue;
    let c, u, f, d;
    this.isHorizontal() ? (c = wn(t, this.left, s) - s / 2, u = wn(t, this.right, o) + o / 2, f = d = l) : (f = wn(t, this.top, s) - s / 2, d = wn(t, this.bottom, o) + o / 2, c = u = l), r.save(), r.lineWidth = a.width, r.strokeStyle = a.color, r.beginPath(), r.moveTo(c, f), r.lineTo(u, d), r.stroke(), r.restore();
  }
  drawLabels(t) {
    if (!this.options.ticks.display)
      return;
    const n = this.ctx, i = this._computeLabelArea();
    i && ly(n, i);
    const a = this.getLabelItems(t);
    for (const s of a) {
      const o = s.options, l = s.font, c = s.label, u = s.textOffset;
      el(n, c, 0, u, l, o);
    }
    i && cy(n);
  }
  drawTitle() {
    const { ctx: t, options: { position: r, title: n, reverse: i } } = this;
    if (!n.display)
      return;
    const a = Fi(n.font), s = Rr(n.padding), o = n.align;
    let l = a.lineHeight / 2;
    r === "bottom" || r === "center" || Ee(r) ? (l += s.bottom, Ge(n.text) && (l += a.lineHeight * (n.text.length - 1))) : l += s.top;
    const { titleX: c, titleY: u, maxWidth: f, rotation: d } = nR(this, l, r, o);
    el(t, n.text, 0, 0, a, {
      color: n.color,
      maxWidth: f,
      rotation: d,
      textAlign: rR(o, r, i),
      textBaseline: "middle",
      translation: [
        c,
        u
      ]
    });
  }
  draw(t) {
    this._isVisible() && (this.drawBackground(), this.drawGrid(t), this.drawBorder(), this.drawTitle(), this.drawLabels(t));
  }
  _layers() {
    const t = this.options, r = t.ticks && t.ticks.z || 0, n = Ke(t.grid && t.grid.z, -1), i = Ke(t.border && t.border.z, 0);
    return !this._isVisible() || this.draw !== Ji.prototype.draw ? [
      {
        z: r,
        draw: (a) => {
          this.draw(a);
        }
      }
    ] : [
      {
        z: n,
        draw: (a) => {
          this.drawBackground(), this.drawGrid(a), this.drawTitle();
        }
      },
      {
        z: i,
        draw: () => {
          this.drawBorder();
        }
      },
      {
        z: r,
        draw: (a) => {
          this.drawLabels(a);
        }
      }
    ];
  }
  getMatchingVisibleMetas(t) {
    const r = this.chart.getSortedVisibleDatasetMetas(), n = this.axis + "AxisID", i = [];
    let a, s;
    for (a = 0, s = r.length; a < s; ++a) {
      const o = r[a];
      o[n] === this.id && (!t || o.type === t) && i.push(o);
    }
    return i;
  }
  _resolveTickFontOptions(t) {
    const r = this.options.ticks.setContext(this.getContext(t));
    return Fi(r.font);
  }
  _maxDigits() {
    const t = this._resolveTickFontOptions(0).lineHeight;
    return (this.isHorizontal() ? this.width : this.height) / t;
  }
}
class js {
  constructor(t, r, n) {
    this.type = t, this.scope = r, this.override = n, this.items = /* @__PURE__ */ Object.create(null);
  }
  isForType(t) {
    return Object.prototype.isPrototypeOf.call(this.type.prototype, t.prototype);
  }
  register(t) {
    const r = Object.getPrototypeOf(t);
    let n;
    sR(r) && (n = this.register(r));
    const i = this.items, a = t.id, s = this.scope + "." + a;
    if (!a)
      throw new Error("class does not have id: " + t);
    return a in i || (i[a] = t, iR(t, s, n), this.override && Ze.override(t.id, t.overrides)), s;
  }
  get(t) {
    return this.items[t];
  }
  unregister(t) {
    const r = this.items, n = t.id, i = this.scope;
    n in r && delete r[n], i && n in Ze[i] && (delete Ze[i][n], this.override && delete jn[n]);
  }
}
function iR(e, t, r) {
  const n = Xa(/* @__PURE__ */ Object.create(null), [
    r ? Ze.get(r) : {},
    Ze.get(t),
    e.defaults
  ]);
  Ze.set(t, n), e.defaultRoutes && aR(t, e.defaultRoutes), e.descriptors && Ze.describe(t, e.descriptors);
}
function aR(e, t) {
  Object.keys(t).forEach((r) => {
    const n = r.split("."), i = n.pop(), a = [
      e
    ].concat(n).join("."), s = t[r].split("."), o = s.pop(), l = s.join(".");
    Ze.route(a, i, l, o);
  });
}
function sR(e) {
  return "id" in e && "defaults" in e;
}
class oR {
  constructor() {
    this.controllers = new js(co, "datasets", !0), this.elements = new js(_y, "elements"), this.plugins = new js(Object, "plugins"), this.scales = new js(Ji, "scales"), this._typedRegistries = [
      this.controllers,
      this.scales,
      this.elements
    ];
  }
  add(...t) {
    this._each("register", t);
  }
  remove(...t) {
    this._each("unregister", t);
  }
  addControllers(...t) {
    this._each("register", t, this.controllers);
  }
  addElements(...t) {
    this._each("register", t, this.elements);
  }
  addPlugins(...t) {
    this._each("register", t, this.plugins);
  }
  addScales(...t) {
    this._each("register", t, this.scales);
  }
  getController(t) {
    return this._get(t, this.controllers, "controller");
  }
  getElement(t) {
    return this._get(t, this.elements, "element");
  }
  getPlugin(t) {
    return this._get(t, this.plugins, "plugin");
  }
  getScale(t) {
    return this._get(t, this.scales, "scale");
  }
  removeControllers(...t) {
    this._each("unregister", t, this.controllers);
  }
  removeElements(...t) {
    this._each("unregister", t, this.elements);
  }
  removePlugins(...t) {
    this._each("unregister", t, this.plugins);
  }
  removeScales(...t) {
    this._each("unregister", t, this.scales);
  }
  _each(t, r, n) {
    [
      ...r
    ].forEach((i) => {
      const a = n || this._getRegistryForType(i);
      n || a.isForType(i) || a === this.plugins && i.id ? this._exec(t, a, i) : gt(i, (s) => {
        const o = n || this._getRegistryForType(s);
        this._exec(t, o, s);
      });
    });
  }
  _exec(t, r, n) {
    const i = O0(t);
    Ve(n["before" + i], [], n), r[t](n), Ve(n["after" + i], [], n);
  }
  _getRegistryForType(t) {
    for (let r = 0; r < this._typedRegistries.length; r++) {
      const n = this._typedRegistries[r];
      if (n.isForType(t))
        return n;
    }
    return this.plugins;
  }
  _get(t, r, n) {
    const i = r.get(t);
    if (i === void 0)
      throw new Error('"' + t + '" is not a registered ' + n + ".");
    return i;
  }
}
var cr = /* @__PURE__ */ new oR();
class lR {
  constructor() {
    this._init = [];
  }
  notify(t, r, n, i) {
    r === "beforeInit" && (this._init = this._createDescriptors(t, !0), this._notify(this._init, t, "install"));
    const a = i ? this._descriptors(t).filter(i) : this._descriptors(t), s = this._notify(a, t, r, n);
    return r === "afterDestroy" && (this._notify(a, t, "stop"), this._notify(this._init, t, "uninstall")), s;
  }
  _notify(t, r, n, i) {
    i = i || {};
    for (const a of t) {
      const s = a.plugin, o = s[n], l = [
        r,
        i,
        a.options
      ];
      if (Ve(o, l, s) === !1 && i.cancelable)
        return !1;
    }
    return !0;
  }
  invalidate() {
    Ye(this._cache) || (this._oldCache = this._cache, this._cache = void 0);
  }
  _descriptors(t) {
    if (this._cache)
      return this._cache;
    const r = this._cache = this._createDescriptors(t);
    return this._notifyStateChanges(t), r;
  }
  _createDescriptors(t, r) {
    const n = t && t.config, i = Ke(n.options && n.options.plugins, {}), a = cR(n);
    return i === !1 && !r ? [] : fR(t, a, i, r);
  }
  _notifyStateChanges(t) {
    const r = this._oldCache || [], n = this._cache, i = (a, s) => a.filter((o) => !s.some((l) => o.plugin.id === l.plugin.id));
    this._notify(i(r, n), t, "stop"), this._notify(i(n, r), t, "start");
  }
}
function cR(e) {
  const t = {}, r = [], n = Object.keys(cr.plugins.items);
  for (let a = 0; a < n.length; a++)
    r.push(cr.getPlugin(n[a]));
  const i = e.plugins || [];
  for (let a = 0; a < i.length; a++) {
    const s = i[a];
    r.indexOf(s) === -1 && (r.push(s), t[s.id] = !0);
  }
  return {
    plugins: r,
    localIds: t
  };
}
function uR(e, t) {
  return !t && e === !1 ? null : e === !0 ? {} : e;
}
function fR(e, { plugins: t, localIds: r }, n, i) {
  const a = [], s = e.getContext();
  for (const o of t) {
    const l = o.id, c = uR(n[l], i);
    c !== null && a.push({
      plugin: o,
      options: dR(e.config, {
        plugin: o,
        local: r[l]
      }, c, s)
    });
  }
  return a;
}
function dR(e, { plugin: t, local: r }, n, i) {
  const a = e.pluginScopeKeys(t), s = e.getOptionScopes(n, a);
  return r && t.defaults && s.push(t.defaults), e.createResolver(s, i, [
    ""
  ], {
    scriptable: !1,
    indexable: !1,
    allKeys: !0
  });
}
function Ju(e, t) {
  const r = Ze.datasets[e] || {};
  return ((t.datasets || {})[e] || {}).indexAxis || t.indexAxis || r.indexAxis || "x";
}
function hR(e, t) {
  let r = e;
  return e === "_index_" ? r = t : e === "_value_" && (r = t === "x" ? "y" : "x"), r;
}
function pR(e, t) {
  return e === t ? "_index_" : "_value_";
}
function Mp(e) {
  if (e === "x" || e === "y" || e === "r")
    return e;
}
function vR(e) {
  if (e === "top" || e === "bottom")
    return "x";
  if (e === "left" || e === "right")
    return "y";
}
function Qu(e, ...t) {
  if (Mp(e))
    return e;
  for (const r of t) {
    const n = r.axis || vR(r.position) || e.length > 1 && Mp(e[0].toLowerCase());
    if (n)
      return n;
  }
  throw new Error(`Cannot determine type of '${e}' axis. Please provide 'axis' or 'position' option.`);
}
function Pp(e, t, r) {
  if (r[t + "AxisID"] === e)
    return {
      axis: t
    };
}
function gR(e, t) {
  if (t.data && t.data.datasets) {
    const r = t.data.datasets.filter((n) => n.xAxisID === e || n.yAxisID === e);
    if (r.length)
      return Pp(e, "x", r[0]) || Pp(e, "y", r[0]);
  }
  return {};
}
function mR(e, t) {
  const r = jn[e.type] || {
    scales: {}
  }, n = t.scales || {}, i = Ju(e.type, t), a = /* @__PURE__ */ Object.create(null);
  return Object.keys(n).forEach((s) => {
    const o = n[s];
    if (!Ee(o))
      return console.error(`Invalid scale configuration for scale: ${s}`);
    if (o._proxy)
      return console.warn(`Ignoring resolver passed as options for scale: ${s}`);
    const l = Qu(s, o, gR(s, e), Ze.scales[o.type]), c = pR(l, i), u = r.scales || {};
    a[s] = Ma(/* @__PURE__ */ Object.create(null), [
      {
        axis: l
      },
      o,
      u[l],
      u[c]
    ]);
  }), e.data.datasets.forEach((s) => {
    const o = s.type || e.type, l = s.indexAxis || Ju(o, t), u = (jn[o] || {}).scales || {};
    Object.keys(u).forEach((f) => {
      const d = hR(f, l), h = s[d + "AxisID"] || d;
      a[h] = a[h] || /* @__PURE__ */ Object.create(null), Ma(a[h], [
        {
          axis: d
        },
        n[h],
        u[f]
      ]);
    });
  }), Object.keys(a).forEach((s) => {
    const o = a[s];
    Ma(o, [
      Ze.scales[o.type],
      Ze.scale
    ]);
  }), a;
}
function wy(e) {
  const t = e.options || (e.options = {});
  t.plugins = Ke(t.plugins, {}), t.scales = mR(e, t);
}
function $y(e) {
  return e = e || {}, e.datasets = e.datasets || [], e.labels = e.labels || [], e;
}
function xR(e) {
  return e = e || {}, e.data = $y(e.data), wy(e), e;
}
const Bp = /* @__PURE__ */ new Map(), Dy = /* @__PURE__ */ new Set();
function zs(e, t) {
  let r = Bp.get(e);
  return r || (r = t(), Bp.set(e, r), Dy.add(r)), r;
}
const ya = (e, t, r) => {
  const n = Go(t, r);
  n !== void 0 && e.add(n);
};
class yR {
  constructor(t) {
    this._config = xR(t), this._scopeCache = /* @__PURE__ */ new Map(), this._resolverCache = /* @__PURE__ */ new Map();
  }
  get platform() {
    return this._config.platform;
  }
  get type() {
    return this._config.type;
  }
  set type(t) {
    this._config.type = t;
  }
  get data() {
    return this._config.data;
  }
  set data(t) {
    this._config.data = $y(t);
  }
  get options() {
    return this._config.options;
  }
  set options(t) {
    this._config.options = t;
  }
  get plugins() {
    return this._config.plugins;
  }
  update() {
    const t = this._config;
    this.clearCache(), wy(t);
  }
  clearCache() {
    this._scopeCache.clear(), this._resolverCache.clear();
  }
  datasetScopeKeys(t) {
    return zs(t, () => [
      [
        `datasets.${t}`,
        ""
      ]
    ]);
  }
  datasetAnimationScopeKeys(t, r) {
    return zs(`${t}.transition.${r}`, () => [
      [
        `datasets.${t}.transitions.${r}`,
        `transitions.${r}`
      ],
      [
        `datasets.${t}`,
        ""
      ]
    ]);
  }
  datasetElementScopeKeys(t, r) {
    return zs(`${t}-${r}`, () => [
      [
        `datasets.${t}.elements.${r}`,
        `datasets.${t}`,
        `elements.${r}`,
        ""
      ]
    ]);
  }
  pluginScopeKeys(t) {
    const r = t.id, n = this.type;
    return zs(`${n}-plugin-${r}`, () => [
      [
        `plugins.${r}`,
        ...t.additionalOptionScopes || []
      ]
    ]);
  }
  _cachedScopes(t, r) {
    const n = this._scopeCache;
    let i = n.get(t);
    return (!i || r) && (i = /* @__PURE__ */ new Map(), n.set(t, i)), i;
  }
  getOptionScopes(t, r, n) {
    const { options: i, type: a } = this, s = this._cachedScopes(t, n), o = s.get(r);
    if (o)
      return o;
    const l = /* @__PURE__ */ new Set();
    r.forEach((u) => {
      t && (l.add(t), u.forEach((f) => ya(l, t, f))), u.forEach((f) => ya(l, i, f)), u.forEach((f) => ya(l, jn[a] || {}, f)), u.forEach((f) => ya(l, Ze, f)), u.forEach((f) => ya(l, Xu, f));
    });
    const c = Array.from(l);
    return c.length === 0 && c.push(/* @__PURE__ */ Object.create(null)), Dy.has(r) && s.set(r, c), c;
  }
  chartOptionScopes() {
    const { options: t, type: r } = this;
    return [
      t,
      jn[r] || {},
      Ze.datasets[r] || {},
      {
        type: r
      },
      Ze,
      Xu
    ];
  }
  resolveNamedOptions(t, r, n, i = [
    ""
  ]) {
    const a = {
      $shared: !0
    }, { resolver: s, subPrefixes: o } = Ip(this._resolverCache, t, i);
    let l = s;
    if (_R(s, r)) {
      a.$shared = !1, n = dn(n) ? n() : n;
      const c = this.createResolver(t, n, o);
      l = Ti(s, n, c);
    }
    for (const c of r)
      a[c] = l[c];
    return a;
  }
  createResolver(t, r, n = [
    ""
  ], i) {
    const { resolver: a } = Ip(this._resolverCache, t, n);
    return Ee(r) ? Ti(a, r, void 0, i) : a;
  }
}
function Ip(e, t, r) {
  let n = e.get(t);
  n || (n = /* @__PURE__ */ new Map(), e.set(t, n));
  const i = r.join();
  let a = n.get(i);
  return a || (a = {
    resolver: P0(t, r),
    subPrefixes: r.filter((o) => !o.toLowerCase().includes("hover"))
  }, n.set(i, a)), a;
}
const bR = (e) => Ee(e) && Object.getOwnPropertyNames(e).some((t) => dn(e[t]));
function _R(e, t) {
  const { isScriptable: r, isIndexable: n } = fy(e);
  for (const i of t) {
    const a = r(i), s = n(i), o = (s || a) && e[i];
    if (a && (dn(o) || bR(o)) || s && Ge(o))
      return !0;
  }
  return !1;
}
var wR = "4.4.1";
const $R = [
  "top",
  "bottom",
  "left",
  "right",
  "chartArea"
];
function Rp(e, t) {
  return e === "top" || e === "bottom" || $R.indexOf(e) === -1 && t === "x";
}
function Np(e, t) {
  return function(r, n) {
    return r[e] === n[e] ? r[t] - n[t] : r[e] - n[e];
  };
}
function Lp(e) {
  const t = e.chart, r = t.options.animation;
  t.notifyPlugins("afterRender"), Ve(r && r.onComplete, [
    e
  ], t);
}
function DR(e) {
  const t = e.chart, r = t.options.animation;
  Ve(r && r.onProgress, [
    e
  ], t);
}
function Ey(e) {
  return R0() && typeof e == "string" ? e = document.getElementById(e) : e && e.length && (e = e[0]), e && e.canvas && (e = e.canvas), e;
}
const fo = {}, jp = (e) => {
  const t = Ey(e);
  return Object.values(fo).filter((r) => r.canvas === t).pop();
};
function ER(e, t, r) {
  const n = Object.keys(e);
  for (const i of n) {
    const a = +i;
    if (a >= t) {
      const s = e[i];
      delete e[i], (r > 0 || a > t) && (e[a + r] = s);
    }
  }
}
function AR(e, t, r, n) {
  return !r || e.type === "mouseout" ? null : n ? t : e;
}
function Hs(e, t, r) {
  return e.options.clip ? e[r] : t[r];
}
function CR(e, t) {
  const { xScale: r, yScale: n } = e;
  return r && n ? {
    left: Hs(r, t, "left"),
    right: Hs(r, t, "right"),
    top: Hs(n, t, "top"),
    bottom: Hs(n, t, "bottom")
  } : t;
}
class Qr {
  static register(...t) {
    cr.add(...t), zp();
  }
  static unregister(...t) {
    cr.remove(...t), zp();
  }
  constructor(t, r) {
    const n = this.config = new yR(r), i = Ey(t), a = jp(i);
    if (a)
      throw new Error("Canvas is already in use. Chart with ID '" + a.id + "' must be destroyed before the canvas with ID '" + a.canvas.id + "' can be reused.");
    const s = n.createResolver(n.chartOptionScopes(), this.getContext());
    this.platform = new (n.platform || YI(i))(), this.platform.updateConfig(n);
    const o = this.platform.acquireContext(i, s.aspectRatio), l = o && o.canvas, c = l && l.height, u = l && l.width;
    if (this.id = tB(), this.ctx = o, this.canvas = l, this.width = u, this.height = c, this._options = s, this._aspectRatio = this.aspectRatio, this._layers = [], this._metasets = [], this._stacks = void 0, this.boxes = [], this.currentDevicePixelRatio = void 0, this.chartArea = void 0, this._active = [], this._lastEvent = void 0, this._listeners = {}, this._responsiveListeners = void 0, this._sortedMetasets = [], this.scales = {}, this._plugins = new lR(), this.$proxies = {}, this._hiddenIndices = {}, this.attached = !1, this._animationsDisabled = void 0, this.$context = void 0, this._doResize = mB((f) => this.update(f), s.resizeDelay || 0), this._dataChanges = [], fo[this.id] = this, !o || !l) {
      console.error("Failed to create chart: can't acquire context from the given item");
      return;
    }
    Dr.listen(this, "complete", Lp), Dr.listen(this, "progress", DR), this._initialize(), this.attached && this.update();
  }
  get aspectRatio() {
    const { options: { aspectRatio: t, maintainAspectRatio: r }, width: n, height: i, _aspectRatio: a } = this;
    return Ye(t) ? r && a ? a : i ? n / i : null : t;
  }
  get data() {
    return this.config.data;
  }
  set data(t) {
    this.config.data = t;
  }
  get options() {
    return this._options;
  }
  set options(t) {
    this.config.options = t;
  }
  get registry() {
    return cr;
  }
  _initialize() {
    return this.notifyPlugins("beforeInit"), this.options.responsive ? this.resize() : pp(this, this.options.devicePixelRatio), this.bindEvents(), this.notifyPlugins("afterInit"), this;
  }
  clear() {
    return fp(this.canvas, this.ctx), this;
  }
  stop() {
    return Dr.stop(this), this;
  }
  resize(t, r) {
    Dr.running(this) ? this._resizeBeforeDraw = {
      width: t,
      height: r
    } : this._resize(t, r);
  }
  _resize(t, r) {
    const n = this.options, i = this.canvas, a = n.maintainAspectRatio && this.aspectRatio, s = this.platform.getMaximumSize(i, t, r, a), o = n.devicePixelRatio || this.platform.getDevicePixelRatio(), l = this.width ? "resize" : "attach";
    this.width = s.width, this.height = s.height, this._aspectRatio = this.aspectRatio, pp(this, o, !0) && (this.notifyPlugins("resize", {
      size: s
    }), Ve(n.onResize, [
      this,
      s
    ], this), this.attached && this._doResize(l) && this.render());
  }
  ensureScalesHaveIDs() {
    const r = this.options.scales || {};
    gt(r, (n, i) => {
      n.id = i;
    });
  }
  buildOrUpdateScales() {
    const t = this.options, r = t.scales, n = this.scales, i = Object.keys(n).reduce((s, o) => (s[o] = !1, s), {});
    let a = [];
    r && (a = a.concat(Object.keys(r).map((s) => {
      const o = r[s], l = Qu(s, o), c = l === "r", u = l === "x";
      return {
        options: o,
        dposition: c ? "chartArea" : u ? "bottom" : "left",
        dtype: c ? "radialLinear" : u ? "category" : "linear"
      };
    }))), gt(a, (s) => {
      const o = s.options, l = o.id, c = Qu(l, o), u = Ke(o.type, s.dtype);
      (o.position === void 0 || Rp(o.position, c) !== Rp(s.dposition)) && (o.position = s.dposition), i[l] = !0;
      let f = null;
      if (l in n && n[l].type === u)
        f = n[l];
      else {
        const d = cr.getScale(u);
        f = new d({
          id: l,
          type: u,
          ctx: this.ctx,
          chart: this
        }), n[f.id] = f;
      }
      f.init(o, t);
    }), gt(i, (s, o) => {
      s || delete n[o];
    }), gt(n, (s) => {
      Ns.configure(this, s, s.options), Ns.addBox(this, s);
    });
  }
  _updateMetasets() {
    const t = this._metasets, r = this.data.datasets.length, n = t.length;
    if (t.sort((i, a) => i.index - a.index), n > r) {
      for (let i = r; i < n; ++i)
        this._destroyDatasetMeta(i);
      t.splice(r, n - r);
    }
    this._sortedMetasets = t.slice(0).sort(Np("order", "index"));
  }
  _removeUnreferencedMetasets() {
    const { _metasets: t, data: { datasets: r } } = this;
    t.length > r.length && delete this._stacks, t.forEach((n, i) => {
      r.filter((a) => a === n._dataset).length === 0 && this._destroyDatasetMeta(i);
    });
  }
  buildOrUpdateControllers() {
    const t = [], r = this.data.datasets;
    let n, i;
    for (this._removeUnreferencedMetasets(), n = 0, i = r.length; n < i; n++) {
      const a = r[n];
      let s = this.getDatasetMeta(n);
      const o = a.type || this.config.type;
      if (s.type && s.type !== o && (this._destroyDatasetMeta(n), s = this.getDatasetMeta(n)), s.type = o, s.indexAxis = a.indexAxis || Ju(o, this.options), s.order = a.order || 0, s.index = n, s.label = "" + a.label, s.visible = this.isDatasetVisible(n), s.controller)
        s.controller.updateIndex(n), s.controller.linkScales();
      else {
        const l = cr.getController(o), { datasetElementType: c, dataElementType: u } = Ze.datasets[o];
        Object.assign(l, {
          dataElementType: cr.getElement(u),
          datasetElementType: c && cr.getElement(c)
        }), s.controller = new l(this, n), t.push(s.controller);
      }
    }
    return this._updateMetasets(), t;
  }
  _resetElements() {
    gt(this.data.datasets, (t, r) => {
      this.getDatasetMeta(r).controller.reset();
    }, this);
  }
  reset() {
    this._resetElements(), this.notifyPlugins("reset");
  }
  update(t) {
    const r = this.config;
    r.update();
    const n = this._options = r.createResolver(r.chartOptionScopes(), this.getContext()), i = this._animationsDisabled = !n.animation;
    if (this._updateScales(), this._checkEventBindings(), this._updateHiddenIndices(), this._plugins.invalidate(), this.notifyPlugins("beforeUpdate", {
      mode: t,
      cancelable: !0
    }) === !1)
      return;
    const a = this.buildOrUpdateControllers();
    this.notifyPlugins("beforeElementsUpdate");
    let s = 0;
    for (let c = 0, u = this.data.datasets.length; c < u; c++) {
      const { controller: f } = this.getDatasetMeta(c), d = !i && a.indexOf(f) === -1;
      f.buildOrUpdateElements(d), s = Math.max(+f.getMaxOverflow(), s);
    }
    s = this._minPadding = n.layout.autoPadding ? s : 0, this._updateLayout(s), i || gt(a, (c) => {
      c.reset();
    }), this._updateDatasets(t), this.notifyPlugins("afterUpdate", {
      mode: t
    }), this._layers.sort(Np("z", "_idx"));
    const { _active: o, _lastEvent: l } = this;
    l ? this._eventHandler(l, !0) : o.length && this._updateHoverStyles(o, o, !0), this.render();
  }
  _updateScales() {
    gt(this.scales, (t) => {
      Ns.removeBox(this, t);
    }), this.ensureScalesHaveIDs(), this.buildOrUpdateScales();
  }
  _checkEventBindings() {
    const t = this.options, r = new Set(Object.keys(this._listeners)), n = new Set(t.events);
    (!rp(r, n) || !!this._responsiveListeners !== t.responsive) && (this.unbindEvents(), this.bindEvents());
  }
  _updateHiddenIndices() {
    const { _hiddenIndices: t } = this, r = this._getUniformDataChanges() || [];
    for (const { method: n, start: i, count: a } of r) {
      const s = n === "_removeElements" ? -a : a;
      ER(t, i, s);
    }
  }
  _getUniformDataChanges() {
    const t = this._dataChanges;
    if (!t || !t.length)
      return;
    this._dataChanges = [];
    const r = this.data.datasets.length, n = (a) => new Set(t.filter((s) => s[0] === a).map((s, o) => o + "," + s.splice(1).join(","))), i = n(0);
    for (let a = 1; a < r; a++)
      if (!rp(i, n(a)))
        return;
    return Array.from(i).map((a) => a.split(",")).map((a) => ({
      method: a[1],
      start: +a[2],
      count: +a[3]
    }));
  }
  _updateLayout(t) {
    if (this.notifyPlugins("beforeLayout", {
      cancelable: !0
    }) === !1)
      return;
    Ns.update(this, this.width, this.height, t);
    const r = this.chartArea, n = r.width <= 0 || r.height <= 0;
    this._layers = [], gt(this.boxes, (i) => {
      n && i.position === "chartArea" || (i.configure && i.configure(), this._layers.push(...i._layers()));
    }, this), this._layers.forEach((i, a) => {
      i._idx = a;
    }), this.notifyPlugins("afterLayout");
  }
  _updateDatasets(t) {
    if (this.notifyPlugins("beforeDatasetsUpdate", {
      mode: t,
      cancelable: !0
    }) !== !1) {
      for (let r = 0, n = this.data.datasets.length; r < n; ++r)
        this.getDatasetMeta(r).controller.configure();
      for (let r = 0, n = this.data.datasets.length; r < n; ++r)
        this._updateDataset(r, dn(t) ? t({
          datasetIndex: r
        }) : t);
      this.notifyPlugins("afterDatasetsUpdate", {
        mode: t
      });
    }
  }
  _updateDataset(t, r) {
    const n = this.getDatasetMeta(t), i = {
      meta: n,
      index: t,
      mode: r,
      cancelable: !0
    };
    this.notifyPlugins("beforeDatasetUpdate", i) !== !1 && (n.controller._update(r), i.cancelable = !1, this.notifyPlugins("afterDatasetUpdate", i));
  }
  render() {
    this.notifyPlugins("beforeRender", {
      cancelable: !0
    }) !== !1 && (Dr.has(this) ? this.attached && !Dr.running(this) && Dr.start(this) : (this.draw(), Lp({
      chart: this
    })));
  }
  draw() {
    let t;
    if (this._resizeBeforeDraw) {
      const { width: n, height: i } = this._resizeBeforeDraw;
      this._resize(n, i), this._resizeBeforeDraw = null;
    }
    if (this.clear(), this.width <= 0 || this.height <= 0 || this.notifyPlugins("beforeDraw", {
      cancelable: !0
    }) === !1)
      return;
    const r = this._layers;
    for (t = 0; t < r.length && r[t].z <= 0; ++t)
      r[t].draw(this.chartArea);
    for (this._drawDatasets(); t < r.length; ++t)
      r[t].draw(this.chartArea);
    this.notifyPlugins("afterDraw");
  }
  _getSortedDatasetMetas(t) {
    const r = this._sortedMetasets, n = [];
    let i, a;
    for (i = 0, a = r.length; i < a; ++i) {
      const s = r[i];
      (!t || s.visible) && n.push(s);
    }
    return n;
  }
  getSortedVisibleDatasetMetas() {
    return this._getSortedDatasetMetas(!0);
  }
  _drawDatasets() {
    if (this.notifyPlugins("beforeDatasetsDraw", {
      cancelable: !0
    }) === !1)
      return;
    const t = this.getSortedVisibleDatasetMetas();
    for (let r = t.length - 1; r >= 0; --r)
      this._drawDataset(t[r]);
    this.notifyPlugins("afterDatasetsDraw");
  }
  _drawDataset(t) {
    const r = this.ctx, n = t._clip, i = !n.disabled, a = CR(t, this.chartArea), s = {
      meta: t,
      index: t.index,
      cancelable: !0
    };
    this.notifyPlugins("beforeDatasetDraw", s) !== !1 && (i && ly(r, {
      left: n.left === !1 ? 0 : a.left - n.left,
      right: n.right === !1 ? this.width : a.right + n.right,
      top: n.top === !1 ? 0 : a.top - n.top,
      bottom: n.bottom === !1 ? this.height : a.bottom + n.bottom
    }), t.controller.draw(), i && cy(r), s.cancelable = !1, this.notifyPlugins("afterDatasetDraw", s));
  }
  isPointInArea(t) {
    return gi(t, this.chartArea, this._minPadding);
  }
  getElementsAtEventForMode(t, r, n, i) {
    const a = $I.modes[r];
    return typeof a == "function" ? a(this, t, n, i) : [];
  }
  getDatasetMeta(t) {
    const r = this.data.datasets[t], n = this._metasets;
    let i = n.filter((a) => a && a._dataset === r).pop();
    return i || (i = {
      type: null,
      data: [],
      dataset: null,
      controller: null,
      hidden: null,
      xAxisID: null,
      yAxisID: null,
      order: r && r.order || 0,
      index: t,
      _dataset: r,
      _parsed: [],
      _sorted: !1
    }, n.push(i)), i;
  }
  getContext() {
    return this.$context || (this.$context = Xi(null, {
      chart: this,
      type: "chart"
    }));
  }
  getVisibleDatasetCount() {
    return this.getSortedVisibleDatasetMetas().length;
  }
  isDatasetVisible(t) {
    const r = this.data.datasets[t];
    if (!r)
      return !1;
    const n = this.getDatasetMeta(t);
    return typeof n.hidden == "boolean" ? !n.hidden : !r.hidden;
  }
  setDatasetVisibility(t, r) {
    const n = this.getDatasetMeta(t);
    n.hidden = !r;
  }
  toggleDataVisibility(t) {
    this._hiddenIndices[t] = !this._hiddenIndices[t];
  }
  getDataVisibility(t) {
    return !this._hiddenIndices[t];
  }
  _updateVisibility(t, r, n) {
    const i = n ? "show" : "hide", a = this.getDatasetMeta(t), s = a.controller._resolveAnimations(void 0, i);
    Ko(r) ? (a.data[r].hidden = !n, this.update()) : (this.setDatasetVisibility(t, n), s.update(a, {
      visible: n
    }), this.update((o) => o.datasetIndex === t ? i : void 0));
  }
  hide(t, r) {
    this._updateVisibility(t, r, !1);
  }
  show(t, r) {
    this._updateVisibility(t, r, !0);
  }
  _destroyDatasetMeta(t) {
    const r = this._metasets[t];
    r && r.controller && r.controller._destroy(), delete this._metasets[t];
  }
  _stop() {
    let t, r;
    for (this.stop(), Dr.remove(this), t = 0, r = this.data.datasets.length; t < r; ++t)
      this._destroyDatasetMeta(t);
  }
  destroy() {
    this.notifyPlugins("beforeDestroy");
    const { canvas: t, ctx: r } = this;
    this._stop(), this.config.clearCache(), t && (this.unbindEvents(), fp(t, r), this.platform.releaseContext(r), this.canvas = null, this.ctx = null), delete fo[this.id], this.notifyPlugins("afterDestroy");
  }
  toBase64Image(...t) {
    return this.canvas.toDataURL(...t);
  }
  bindEvents() {
    this.bindUserEvents(), this.options.responsive ? this.bindResponsiveEvents() : this.attached = !0;
  }
  bindUserEvents() {
    const t = this._listeners, r = this.platform, n = (a, s) => {
      r.addEventListener(this, a, s), t[a] = s;
    }, i = (a, s, o) => {
      a.offsetX = s, a.offsetY = o, this._eventHandler(a);
    };
    gt(this.options.events, (a) => n(a, i));
  }
  bindResponsiveEvents() {
    this._responsiveListeners || (this._responsiveListeners = {});
    const t = this._responsiveListeners, r = this.platform, n = (l, c) => {
      r.addEventListener(this, l, c), t[l] = c;
    }, i = (l, c) => {
      t[l] && (r.removeEventListener(this, l, c), delete t[l]);
    }, a = (l, c) => {
      this.canvas && this.resize(l, c);
    };
    let s;
    const o = () => {
      i("attach", o), this.attached = !0, this.resize(), n("resize", a), n("detach", s);
    };
    s = () => {
      this.attached = !1, i("resize", a), this._stop(), this._resize(0, 0), n("attach", o);
    }, r.isAttached(this.canvas) ? o() : s();
  }
  unbindEvents() {
    gt(this._listeners, (t, r) => {
      this.platform.removeEventListener(this, r, t);
    }), this._listeners = {}, gt(this._responsiveListeners, (t, r) => {
      this.platform.removeEventListener(this, r, t);
    }), this._responsiveListeners = void 0;
  }
  updateHoverStyle(t, r, n) {
    const i = n ? "set" : "remove";
    let a, s, o, l;
    for (r === "dataset" && (a = this.getDatasetMeta(t[0].datasetIndex), a.controller["_" + i + "DatasetHoverStyle"]()), o = 0, l = t.length; o < l; ++o) {
      s = t[o];
      const c = s && this.getDatasetMeta(s.datasetIndex).controller;
      c && c[i + "HoverStyle"](s.element, s.datasetIndex, s.index);
    }
  }
  getActiveElements() {
    return this._active || [];
  }
  setActiveElements(t) {
    const r = this._active || [], n = t.map(({ datasetIndex: a, index: s }) => {
      const o = this.getDatasetMeta(a);
      if (!o)
        throw new Error("No dataset found at index " + a);
      return {
        datasetIndex: a,
        element: o.data[s],
        index: s
      };
    });
    !ep(n, r) && (this._active = n, this._lastEvent = null, this._updateHoverStyles(n, r));
  }
  notifyPlugins(t, r, n) {
    return this._plugins.notify(this, t, r, n);
  }
  isPluginEnabled(t) {
    return this._plugins._cache.filter((r) => r.plugin.id === t).length === 1;
  }
  _updateHoverStyles(t, r, n) {
    const i = this.options.hover, a = (l, c) => l.filter((u) => !c.some((f) => u.datasetIndex === f.datasetIndex && u.index === f.index)), s = a(r, t), o = n ? t : a(t, r);
    s.length && this.updateHoverStyle(s, i.mode, !1), o.length && i.mode && this.updateHoverStyle(o, i.mode, !0);
  }
  _eventHandler(t, r) {
    const n = {
      event: t,
      replay: r,
      cancelable: !0,
      inChartArea: this.isPointInArea(t)
    }, i = (s) => (s.options.events || this.options.events).includes(t.native.type);
    if (this.notifyPlugins("beforeEvent", n, i) === !1)
      return;
    const a = this._handleEvent(t, r, n.inChartArea);
    return n.cancelable = !1, this.notifyPlugins("afterEvent", n, i), (a || n.changed) && this.render(), this;
  }
  _handleEvent(t, r, n) {
    const { _active: i = [], options: a } = this, s = r, o = this._getActiveElements(t, i, n, s), l = oB(t), c = AR(t, this._lastEvent, n, l);
    n && (this._lastEvent = null, Ve(a.onHover, [
      t,
      o,
      this
    ], this), l && Ve(a.onClick, [
      t,
      o,
      this
    ], this));
    const u = !ep(o, i);
    return (u || r) && (this._active = o, this._updateHoverStyles(o, i, r)), this._lastEvent = c, u;
  }
  _getActiveElements(t, r, n, i) {
    if (t.type === "mouseout")
      return [];
    if (!n)
      return r;
    const a = this.options.hover;
    return this.getElementsAtEventForMode(t, a.mode, a, i);
  }
}
G(Qr, "defaults", Ze), G(Qr, "instances", fo), G(Qr, "overrides", jn), G(Qr, "registry", cr), G(Qr, "version", wR), G(Qr, "getChart", jp);
function zp() {
  return gt(Qr.instances, (e) => e._plugins.invalidate());
}
function SR(e, t) {
  const r = [], { bounds: i, step: a, min: s, max: o, precision: l, count: c, maxTicks: u, maxDigits: f, includeBounds: d } = e, h = a || 1, p = u - 1, { min: v, max: g } = t, m = !Ye(s), y = !Ye(o), _ = !Ye(c), x = (g - v) / (f + 1);
  let b = np((g - v) / p / h) * h, w, E, $, C;
  if (b < 1e-14 && !m && !y)
    return [
      {
        value: v
      },
      {
        value: g
      }
    ];
  C = Math.ceil(g / b) - Math.floor(v / b), C > p && (b = np(C * b / p / h) * h), Ye(l) || (w = Math.pow(10, l), b = Math.ceil(b * w) / w), i === "ticks" ? (E = Math.floor(v / b) * b, $ = Math.ceil(g / b) * b) : (E = v, $ = g), m && y && a && cB((o - s) / a, b / 1e3) ? (C = Math.round(Math.min((o - s) / b, u)), b = (o - s) / C, E = s, $ = o) : _ ? (E = m ? s : E, $ = y ? o : $, C = c - 1, b = ($ - E) / C) : (C = ($ - E) / b, lo(C, Math.round(C), b / 1e3) ? C = Math.round(C) : C = Math.ceil(C));
  const D = Math.max(ip(b), ip(E));
  w = Math.pow(10, Ye(l) ? D : l), E = Math.round(E * w) / w, $ = Math.round($ * w) / w;
  let A = 0;
  for (m && (d && E !== s ? (r.push({
    value: s
  }), E < s && A++, lo(Math.round((E + A * b) * w) / w, s, Hp(s, x, e)) && A++) : E < s && A++); A < C; ++A) {
    const S = Math.round((E + A * b) * w) / w;
    if (y && S > o)
      break;
    r.push({
      value: S
    });
  }
  return y && d && $ !== o ? r.length && lo(r[r.length - 1].value, o, Hp(o, x, e)) ? r[r.length - 1].value = o : r.push({
    value: o
  }) : (!y || $ === o) && r.push({
    value: $
  }), r;
}
function Hp(e, t, { horizontal: r, minRotation: n }) {
  const i = on(n), a = (r ? Math.sin(i) : Math.cos(i)) || 1e-3, s = 0.75 * t * ("" + e).length;
  return Math.min(t / a, s);
}
class nl extends Ji {
  constructor(t) {
    super(t), this.start = void 0, this.end = void 0, this._startValue = void 0, this._endValue = void 0, this._valueRange = 0;
  }
  parse(t, r) {
    return Ye(t) || (typeof t == "number" || t instanceof Number) && !isFinite(+t) ? null : +t;
  }
  handleTickRangeOptions() {
    const { beginAtZero: t } = this.options, { minDefined: r, maxDefined: n } = this.getUserBounds();
    let { min: i, max: a } = this;
    const s = (l) => i = r ? i : l, o = (l) => a = n ? a : l;
    if (t) {
      const l = Xo(i), c = Xo(a);
      l < 0 && c < 0 ? o(0) : l > 0 && c > 0 && s(0);
    }
    if (i === a) {
      let l = a === 0 ? 1 : Math.abs(a * 0.05);
      o(a + l), t || s(i - l);
    }
    this.min = i, this.max = a;
  }
  getTickLimit() {
    const t = this.options.ticks;
    let { maxTicksLimit: r, stepSize: n } = t, i;
    return n ? (i = Math.ceil(this.max / n) - Math.floor(this.min / n) + 1, i > 1e3 && (console.warn(`scales.${this.id}.ticks.stepSize: ${n} would result generating up to ${i} ticks. Limiting to 1000.`), i = 1e3)) : (i = this.computeTickLimit(), r = r || 11), r && (i = Math.min(r, i)), i;
  }
  computeTickLimit() {
    return Number.POSITIVE_INFINITY;
  }
  buildTicks() {
    const t = this.options, r = t.ticks;
    let n = this.getTickLimit();
    n = Math.max(2, n);
    const i = {
      maxTicks: n,
      bounds: t.bounds,
      min: t.min,
      max: t.max,
      precision: r.precision,
      step: r.stepSize,
      count: r.count,
      maxDigits: this._maxDigits(),
      horizontal: this.isHorizontal(),
      minRotation: r.minRotation || 0,
      includeBounds: r.includeBounds !== !1
    }, a = this._range || this, s = SR(i, a);
    return t.bounds === "ticks" && ry(s, this, "value"), t.reverse ? (s.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), s;
  }
  configure() {
    const t = this.ticks;
    let r = this.min, n = this.max;
    if (super.configure(), this.options.offset && t.length) {
      const i = (n - r) / Math.max(t.length - 1, 1) / 2;
      r -= i, n += i;
    }
    this._startValue = r, this._endValue = n, this._valueRange = n - r;
  }
  getLabelForValue(t) {
    return M0(t, this.chart.options.locale, this.options.ticks.format);
  }
}
class Vp extends nl {
  determineDataLimits() {
    const { min: t, max: r } = this.getMinMax(!0);
    this.min = it(t) ? t : 0, this.max = it(r) ? r : 1, this.handleTickRangeOptions();
  }
  computeTickLimit() {
    const t = this.isHorizontal(), r = t ? this.width : this.height, n = on(this.options.ticks.minRotation), i = (t ? Math.sin(n) : Math.cos(n)) || 1e-3, a = this._resolveTickFontOptions(0);
    return Math.ceil(r / Math.min(40, a.lineHeight / i));
  }
  getPixelForValue(t) {
    return t === null ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange);
  }
  getValueForPixel(t) {
    return this._startValue + this.getDecimalForPixel(t) * this._valueRange;
  }
}
G(Vp, "id", "linear"), G(Vp, "defaults", {
  ticks: {
    callback: Nl.formatters.numeric
  }
});
const Qa = (e) => Math.floor(sn(e)), Dn = (e, t) => Math.pow(10, Qa(e) + t);
function Yp(e) {
  return e / Math.pow(10, Qa(e)) === 1;
}
function Wp(e, t, r) {
  const n = Math.pow(10, r), i = Math.floor(e / n);
  return Math.ceil(t / n) - i;
}
function kR(e, t) {
  const r = t - e;
  let n = Qa(r);
  for (; Wp(e, t, n) > 10; )
    n++;
  for (; Wp(e, t, n) < 10; )
    n--;
  return Math.min(n, Qa(e));
}
function OR(e, { min: t, max: r }) {
  t = It(e.min, t);
  const n = [], i = Qa(t);
  let a = kR(t, r), s = a < 0 ? Math.pow(10, Math.abs(a)) : 1;
  const o = Math.pow(10, a), l = i > a ? Math.pow(10, i) : 0, c = Math.round((t - l) * s) / s, u = Math.floor((t - l) / o / 10) * o * 10;
  let f = Math.floor((c - u) / Math.pow(10, a)), d = It(e.min, Math.round((l + u + f * Math.pow(10, a)) * s) / s);
  for (; d < r; )
    n.push({
      value: d,
      major: Yp(d),
      significand: f
    }), f >= 10 ? f = f < 15 ? 15 : 20 : f++, f >= 20 && (a++, f = 2, s = a >= 0 ? 1 : s), d = Math.round((l + u + f * Math.pow(10, a)) * s) / s;
  const h = It(e.max, d);
  return n.push({
    value: h,
    major: Yp(h),
    significand: f
  }), n;
}
class Up extends Ji {
  constructor(t) {
    super(t), this.start = void 0, this.end = void 0, this._startValue = void 0, this._valueRange = 0;
  }
  parse(t, r) {
    const n = nl.prototype.parse.apply(this, [
      t,
      r
    ]);
    if (n === 0) {
      this._zero = !0;
      return;
    }
    return it(n) && n > 0 ? n : null;
  }
  determineDataLimits() {
    const { min: t, max: r } = this.getMinMax(!0);
    this.min = it(t) ? Math.max(0, t) : null, this.max = it(r) ? Math.max(0, r) : null, this.options.beginAtZero && (this._zero = !0), this._zero && this.min !== this._suggestedMin && !it(this._userMin) && (this.min = t === Dn(this.min, 0) ? Dn(this.min, -1) : Dn(this.min, 0)), this.handleTickRangeOptions();
  }
  handleTickRangeOptions() {
    const { minDefined: t, maxDefined: r } = this.getUserBounds();
    let n = this.min, i = this.max;
    const a = (o) => n = t ? n : o, s = (o) => i = r ? i : o;
    n === i && (n <= 0 ? (a(1), s(10)) : (a(Dn(n, -1)), s(Dn(i, 1)))), n <= 0 && a(Dn(i, -1)), i <= 0 && s(Dn(n, 1)), this.min = n, this.max = i;
  }
  buildTicks() {
    const t = this.options, r = {
      min: this._userMin,
      max: this._userMax
    }, n = OR(r, this);
    return t.bounds === "ticks" && ry(n, this, "value"), t.reverse ? (n.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), n;
  }
  getLabelForValue(t) {
    return t === void 0 ? "0" : M0(t, this.chart.options.locale, this.options.ticks.format);
  }
  configure() {
    const t = this.min;
    super.configure(), this._startValue = sn(t), this._valueRange = sn(this.max) - sn(t);
  }
  getPixelForValue(t) {
    return (t === void 0 || t === 0) && (t = this.min), t === null || isNaN(t) ? NaN : this.getPixelForDecimal(t === this.min ? 0 : (sn(t) - this._startValue) / this._valueRange);
  }
  getValueForPixel(t) {
    const r = this.getDecimalForPixel(t);
    return Math.pow(10, this._startValue + r * this._valueRange);
  }
}
G(Up, "id", "logarithmic"), G(Up, "defaults", {
  ticks: {
    callback: Nl.formatters.logarithmic,
    major: {
      enabled: !0
    }
  }
});
function ef(e) {
  const t = e.ticks;
  if (t.display && e.display) {
    const r = Rr(t.backdropPadding);
    return Ke(t.font && t.font.size, Ze.font.size) + r.height;
  }
  return 0;
}
function FR(e, t, r) {
  return r = Ge(r) ? r : [
    r
  ], {
    w: SB(e, t.string, r),
    h: r.length * t.lineHeight
  };
}
function qp(e, t, r, n, i) {
  return e === n || e === i ? {
    start: t - r / 2,
    end: t + r / 2
  } : e < n || e > i ? {
    start: t - r,
    end: t
  } : {
    start: t,
    end: t + r
  };
}
function TR(e) {
  const t = {
    l: e.left + e._padding.left,
    r: e.right - e._padding.right,
    t: e.top + e._padding.top,
    b: e.bottom - e._padding.bottom
  }, r = Object.assign({}, t), n = [], i = [], a = e._pointLabels.length, s = e.options.pointLabels, o = s.centerPointLabels ? tr / a : 0;
  for (let l = 0; l < a; l++) {
    const c = s.setContext(e.getPointLabelContext(l));
    i[l] = c.padding;
    const u = e.getPointPosition(l, e.drawingArea + i[l], o), f = Fi(c.font), d = FR(e.ctx, f, e._pointLabels[l]);
    n[l] = d;
    const h = ur(e.getIndexAngle(l) + o), p = Math.round(F0(h)), v = qp(p, u.x, d.w, 0, 180), g = qp(p, u.y, d.h, 90, 270);
    MR(r, t, h, v, g);
  }
  e.setCenterPoint(t.l - r.l, r.r - t.r, t.t - r.t, r.b - t.b), e._pointLabelItems = IR(e, n, i);
}
function MR(e, t, r, n, i) {
  const a = Math.abs(Math.sin(r)), s = Math.abs(Math.cos(r));
  let o = 0, l = 0;
  n.start < t.l ? (o = (t.l - n.start) / a, e.l = Math.min(e.l, t.l - o)) : n.end > t.r && (o = (n.end - t.r) / a, e.r = Math.max(e.r, t.r + o)), i.start < t.t ? (l = (t.t - i.start) / s, e.t = Math.min(e.t, t.t - l)) : i.end > t.b && (l = (i.end - t.b) / s, e.b = Math.max(e.b, t.b + l));
}
function PR(e, t, r) {
  const n = e.drawingArea, { extra: i, additionalAngle: a, padding: s, size: o } = r, l = e.getPointPosition(t, n + i + s, a), c = Math.round(F0(ur(l.angle + Or))), u = LR(l.y, o.h, c), f = RR(c), d = NR(l.x, o.w, f);
  return {
    visible: !0,
    x: l.x,
    y: u,
    textAlign: f,
    left: d,
    top: u,
    right: d + o.w,
    bottom: u + o.h
  };
}
function BR(e, t) {
  if (!t)
    return !0;
  const { left: r, top: n, right: i, bottom: a } = e;
  return !(gi({
    x: r,
    y: n
  }, t) || gi({
    x: r,
    y: a
  }, t) || gi({
    x: i,
    y: n
  }, t) || gi({
    x: i,
    y: a
  }, t));
}
function IR(e, t, r) {
  const n = [], i = e._pointLabels.length, a = e.options, { centerPointLabels: s, display: o } = a.pointLabels, l = {
    extra: ef(a) / 2,
    additionalAngle: s ? tr / i : 0
  };
  let c;
  for (let u = 0; u < i; u++) {
    l.padding = r[u], l.size = t[u];
    const f = PR(e, u, l);
    n.push(f), o === "auto" && (f.visible = BR(f, c), f.visible && (c = f));
  }
  return n;
}
function RR(e) {
  return e === 0 || e === 180 ? "center" : e < 180 ? "left" : "right";
}
function NR(e, t, r) {
  return r === "right" ? e -= t : r === "center" && (e -= t / 2), e;
}
function LR(e, t, r) {
  return r === 90 || r === 270 ? e -= t / 2 : (r > 270 || r < 90) && (e -= t), e;
}
function jR(e, t, r) {
  const { left: n, top: i, right: a, bottom: s } = r, { backdropColor: o } = t;
  if (!Ye(o)) {
    const l = LB(t.borderRadius), c = Rr(t.backdropPadding);
    e.fillStyle = o;
    const u = n - c.left, f = i - c.top, d = a - n + c.width, h = s - i + c.height;
    Object.values(l).some((p) => p !== 0) ? (e.beginPath(), MB(e, {
      x: u,
      y: f,
      w: d,
      h,
      radius: l
    }), e.fill()) : e.fillRect(u, f, d, h);
  }
}
function zR(e, t) {
  const { ctx: r, options: { pointLabels: n } } = e;
  for (let i = t - 1; i >= 0; i--) {
    const a = e._pointLabelItems[i];
    if (!a.visible)
      continue;
    const s = n.setContext(e.getPointLabelContext(i));
    jR(r, s, a);
    const o = Fi(s.font), { x: l, y: c, textAlign: u } = a;
    el(r, e._pointLabels[i], l, c + o.lineHeight / 2, o, {
      color: s.color,
      textAlign: u,
      textBaseline: "middle"
    });
  }
}
function Ay(e, t, r, n) {
  const { ctx: i } = e;
  if (r)
    i.arc(e.xCenter, e.yCenter, t, 0, un);
  else {
    let a = e.getPointPosition(0, t);
    i.moveTo(a.x, a.y);
    for (let s = 1; s < n; s++)
      a = e.getPointPosition(s, t), i.lineTo(a.x, a.y);
  }
}
function HR(e, t, r, n, i) {
  const a = e.ctx, s = t.circular, { color: o, lineWidth: l } = t;
  !s && !n || !o || !l || r < 0 || (a.save(), a.strokeStyle = o, a.lineWidth = l, a.setLineDash(i.dash), a.lineDashOffset = i.dashOffset, a.beginPath(), Ay(e, r, s, n), a.closePath(), a.stroke(), a.restore());
}
function VR(e, t, r) {
  return Xi(e, {
    label: r,
    index: t,
    type: "pointLabel"
  });
}
class Vs extends nl {
  constructor(t) {
    super(t), this.xCenter = void 0, this.yCenter = void 0, this.drawingArea = void 0, this._pointLabels = [], this._pointLabelItems = [];
  }
  setDimensions() {
    const t = this._padding = Rr(ef(this.options) / 2), r = this.width = this.maxWidth - t.width, n = this.height = this.maxHeight - t.height;
    this.xCenter = Math.floor(this.left + r / 2 + t.left), this.yCenter = Math.floor(this.top + n / 2 + t.top), this.drawingArea = Math.floor(Math.min(r, n) / 2);
  }
  determineDataLimits() {
    const { min: t, max: r } = this.getMinMax(!1);
    this.min = it(t) && !isNaN(t) ? t : 0, this.max = it(r) && !isNaN(r) ? r : 0, this.handleTickRangeOptions();
  }
  computeTickLimit() {
    return Math.ceil(this.drawingArea / ef(this.options));
  }
  generateTickLabels(t) {
    nl.prototype.generateTickLabels.call(this, t), this._pointLabels = this.getLabels().map((r, n) => {
      const i = Ve(this.options.pointLabels.callback, [
        r,
        n
      ], this);
      return i || i === 0 ? i : "";
    }).filter((r, n) => this.chart.getDataVisibility(n));
  }
  fit() {
    const t = this.options;
    t.display && t.pointLabels.display ? TR(this) : this.setCenterPoint(0, 0, 0, 0);
  }
  setCenterPoint(t, r, n, i) {
    this.xCenter += Math.floor((t - r) / 2), this.yCenter += Math.floor((n - i) / 2), this.drawingArea -= Math.min(this.drawingArea / 2, Math.max(t, r, n, i));
  }
  getIndexAngle(t) {
    const r = un / (this._pointLabels.length || 1), n = this.options.startAngle || 0;
    return ur(t * r + on(n));
  }
  getDistanceFromCenterForValue(t) {
    if (Ye(t))
      return NaN;
    const r = this.drawingArea / (this.max - this.min);
    return this.options.reverse ? (this.max - t) * r : (t - this.min) * r;
  }
  getValueForDistanceFromCenter(t) {
    if (Ye(t))
      return NaN;
    const r = t / (this.drawingArea / (this.max - this.min));
    return this.options.reverse ? this.max - r : this.min + r;
  }
  getPointLabelContext(t) {
    const r = this._pointLabels || [];
    if (t >= 0 && t < r.length) {
      const n = r[t];
      return VR(this.getContext(), t, n);
    }
  }
  getPointPosition(t, r, n = 0) {
    const i = this.getIndexAngle(t) - Or + n;
    return {
      x: Math.cos(i) * r + this.xCenter,
      y: Math.sin(i) * r + this.yCenter,
      angle: i
    };
  }
  getPointPositionForValue(t, r) {
    return this.getPointPosition(t, this.getDistanceFromCenterForValue(r));
  }
  getBasePosition(t) {
    return this.getPointPositionForValue(t || 0, this.getBaseValue());
  }
  getPointLabelPosition(t) {
    const { left: r, top: n, right: i, bottom: a } = this._pointLabelItems[t];
    return {
      left: r,
      top: n,
      right: i,
      bottom: a
    };
  }
  drawBackground() {
    const { backgroundColor: t, grid: { circular: r } } = this.options;
    if (t) {
      const n = this.ctx;
      n.save(), n.beginPath(), Ay(this, this.getDistanceFromCenterForValue(this._endValue), r, this._pointLabels.length), n.closePath(), n.fillStyle = t, n.fill(), n.restore();
    }
  }
  drawGrid() {
    const t = this.ctx, r = this.options, { angleLines: n, grid: i, border: a } = r, s = this._pointLabels.length;
    let o, l, c;
    if (r.pointLabels.display && zR(this, s), i.display && this.ticks.forEach((u, f) => {
      if (f !== 0) {
        l = this.getDistanceFromCenterForValue(u.value);
        const d = this.getContext(f), h = i.setContext(d), p = a.setContext(d);
        HR(this, h, l, s, p);
      }
    }), n.display) {
      for (t.save(), o = s - 1; o >= 0; o--) {
        const u = n.setContext(this.getPointLabelContext(o)), { color: f, lineWidth: d } = u;
        !d || !f || (t.lineWidth = d, t.strokeStyle = f, t.setLineDash(u.borderDash), t.lineDashOffset = u.borderDashOffset, l = this.getDistanceFromCenterForValue(r.ticks.reverse ? this.min : this.max), c = this.getPointPosition(o, l), t.beginPath(), t.moveTo(this.xCenter, this.yCenter), t.lineTo(c.x, c.y), t.stroke());
      }
      t.restore();
    }
  }
  drawBorder() {
  }
  drawLabels() {
    const t = this.ctx, r = this.options, n = r.ticks;
    if (!n.display)
      return;
    const i = this.getIndexAngle(0);
    let a, s;
    t.save(), t.translate(this.xCenter, this.yCenter), t.rotate(i), t.textAlign = "center", t.textBaseline = "middle", this.ticks.forEach((o, l) => {
      if (l === 0 && !r.reverse)
        return;
      const c = n.setContext(this.getContext(l)), u = Fi(c.font);
      if (a = this.getDistanceFromCenterForValue(this.ticks[l].value), c.showLabelBackdrop) {
        t.font = u.string, s = t.measureText(o.label).width, t.fillStyle = c.backdropColor;
        const f = Rr(c.backdropPadding);
        t.fillRect(-s / 2 - f.left, -a - u.size / 2 - f.top, s + f.width, u.size + f.height);
      }
      el(t, o.label, 0, -a, u, {
        color: c.color,
        strokeColor: c.textStrokeColor,
        strokeWidth: c.textStrokeWidth
      });
    }), t.restore();
  }
  drawTitle() {
  }
}
G(Vs, "id", "radialLinear"), G(Vs, "defaults", {
  display: !0,
  animate: !0,
  position: "chartArea",
  angleLines: {
    display: !0,
    lineWidth: 1,
    borderDash: [],
    borderDashOffset: 0
  },
  grid: {
    circular: !1
  },
  startAngle: 0,
  ticks: {
    showLabelBackdrop: !0,
    callback: Nl.formatters.numeric
  },
  pointLabels: {
    backdropColor: void 0,
    backdropPadding: 2,
    display: !0,
    font: {
      size: 10
    },
    callback(t) {
      return t;
    },
    padding: 5,
    centerPointLabels: !1
  }
}), G(Vs, "defaultRoutes", {
  "angleLines.color": "borderColor",
  "pointLabels.color": "color",
  "ticks.color": "color"
}), G(Vs, "descriptors", {
  angleLines: {
    _fallback: "grid"
  }
});
const jl = {
  millisecond: {
    common: !0,
    size: 1,
    steps: 1e3
  },
  second: {
    common: !0,
    size: 1e3,
    steps: 60
  },
  minute: {
    common: !0,
    size: 6e4,
    steps: 60
  },
  hour: {
    common: !0,
    size: 36e5,
    steps: 24
  },
  day: {
    common: !0,
    size: 864e5,
    steps: 30
  },
  week: {
    common: !1,
    size: 6048e5,
    steps: 4
  },
  month: {
    common: !0,
    size: 2628e6,
    steps: 12
  },
  quarter: {
    common: !1,
    size: 7884e6,
    steps: 4
  },
  year: {
    common: !0,
    size: 3154e7
  }
}, Ct = /* @__PURE__ */ Object.keys(jl);
function Gp(e, t) {
  return e - t;
}
function Kp(e, t) {
  if (Ye(t))
    return null;
  const r = e._adapter, { parser: n, round: i, isoWeekday: a } = e._parseOpts;
  let s = t;
  return typeof n == "function" && (s = n(s)), it(s) || (s = typeof n == "string" ? r.parse(s, n) : r.parse(s)), s === null ? null : (i && (s = i === "week" && (Jo(a) || a === !0) ? r.startOf(s, "isoWeek", a) : r.startOf(s, i)), +s);
}
function Zp(e, t, r, n) {
  const i = Ct.length;
  for (let a = Ct.indexOf(e); a < i - 1; ++a) {
    const s = jl[Ct[a]], o = s.steps ? s.steps : Number.MAX_SAFE_INTEGER;
    if (s.common && Math.ceil((r - t) / (o * s.size)) <= n)
      return Ct[a];
  }
  return Ct[i - 1];
}
function YR(e, t, r, n, i) {
  for (let a = Ct.length - 1; a >= Ct.indexOf(r); a--) {
    const s = Ct[a];
    if (jl[s].common && e._adapter.diff(i, n, s) >= t - 1)
      return s;
  }
  return Ct[r ? Ct.indexOf(r) : 0];
}
function WR(e) {
  for (let t = Ct.indexOf(e) + 1, r = Ct.length; t < r; ++t)
    if (jl[Ct[t]].common)
      return Ct[t];
}
function Xp(e, t, r) {
  if (!r)
    e[t] = !0;
  else if (r.length) {
    const { lo: n, hi: i } = T0(r, t), a = r[n] >= t ? r[n] : r[i];
    e[a] = !0;
  }
}
function UR(e, t, r, n) {
  const i = e._adapter, a = +i.startOf(t[0].value, n), s = t[t.length - 1].value;
  let o, l;
  for (o = a; o <= s; o = +i.add(o, 1, n))
    l = r[o], l >= 0 && (t[l].major = !0);
  return t;
}
function Jp(e, t, r) {
  const n = [], i = {}, a = t.length;
  let s, o;
  for (s = 0; s < a; ++s)
    o = t[s], i[o] = s, n.push({
      value: o,
      major: !1
    });
  return a === 0 || !r ? n : UR(e, n, i, r);
}
class il extends Ji {
  constructor(t) {
    super(t), this._cache = {
      data: [],
      labels: [],
      all: []
    }, this._unit = "day", this._majorUnit = void 0, this._offsets = {}, this._normalized = !1, this._parseOpts = void 0;
  }
  init(t, r = {}) {
    const n = t.time || (t.time = {}), i = this._adapter = new xI._date(t.adapters.date);
    i.init(r), Ma(n.displayFormats, i.formats()), this._parseOpts = {
      parser: n.parser,
      round: n.round,
      isoWeekday: n.isoWeekday
    }, super.init(t), this._normalized = r.normalized;
  }
  parse(t, r) {
    return t === void 0 ? null : Kp(this, t);
  }
  beforeLayout() {
    super.beforeLayout(), this._cache = {
      data: [],
      labels: [],
      all: []
    };
  }
  determineDataLimits() {
    const t = this.options, r = this._adapter, n = t.time.unit || "day";
    let { min: i, max: a, minDefined: s, maxDefined: o } = this.getUserBounds();
    function l(c) {
      !s && !isNaN(c.min) && (i = Math.min(i, c.min)), !o && !isNaN(c.max) && (a = Math.max(a, c.max));
    }
    (!s || !o) && (l(this._getLabelBounds()), (t.bounds !== "ticks" || t.ticks.source !== "labels") && l(this.getMinMax(!1))), i = it(i) && !isNaN(i) ? i : +r.startOf(Date.now(), n), a = it(a) && !isNaN(a) ? a : +r.endOf(Date.now(), n) + 1, this.min = Math.min(i, a - 1), this.max = Math.max(i + 1, a);
  }
  _getLabelBounds() {
    const t = this.getLabelTimestamps();
    let r = Number.POSITIVE_INFINITY, n = Number.NEGATIVE_INFINITY;
    return t.length && (r = t[0], n = t[t.length - 1]), {
      min: r,
      max: n
    };
  }
  buildTicks() {
    const t = this.options, r = t.time, n = t.ticks, i = n.source === "labels" ? this.getLabelTimestamps() : this._generate();
    t.bounds === "ticks" && i.length && (this.min = this._userMin || i[0], this.max = this._userMax || i[i.length - 1]);
    const a = this.min, s = this.max, o = pB(i, a, s);
    return this._unit = r.unit || (n.autoSkip ? Zp(r.minUnit, this.min, this.max, this._getLabelCapacity(a)) : YR(this, o.length, r.minUnit, this.min, this.max)), this._majorUnit = !n.major.enabled || this._unit === "year" ? void 0 : WR(this._unit), this.initOffsets(i), t.reverse && o.reverse(), Jp(this, o, this._majorUnit);
  }
  afterAutoSkip() {
    this.options.offsetAfterAutoskip && this.initOffsets(this.ticks.map((t) => +t.value));
  }
  initOffsets(t = []) {
    let r = 0, n = 0, i, a;
    this.options.offset && t.length && (i = this.getDecimalForValue(t[0]), t.length === 1 ? r = 1 - i : r = (this.getDecimalForValue(t[1]) - i) / 2, a = this.getDecimalForValue(t[t.length - 1]), t.length === 1 ? n = a : n = (a - this.getDecimalForValue(t[t.length - 2])) / 2);
    const s = t.length < 3 ? 0.5 : 0.25;
    r = Tn(r, 0, s), n = Tn(n, 0, s), this._offsets = {
      start: r,
      end: n,
      factor: 1 / (r + 1 + n)
    };
  }
  _generate() {
    const t = this._adapter, r = this.min, n = this.max, i = this.options, a = i.time, s = a.unit || Zp(a.minUnit, r, n, this._getLabelCapacity(r)), o = Ke(i.ticks.stepSize, 1), l = s === "week" ? a.isoWeekday : !1, c = Jo(l) || l === !0, u = {};
    let f = r, d, h;
    if (c && (f = +t.startOf(f, "isoWeek", l)), f = +t.startOf(f, c ? "day" : s), t.diff(n, r, s) > 1e5 * o)
      throw new Error(r + " and " + n + " are too far apart with stepSize of " + o + " " + s);
    const p = i.ticks.source === "data" && this.getDataTimestamps();
    for (d = f, h = 0; d < n; d = +t.add(d, o, s), h++)
      Xp(u, d, p);
    return (d === n || i.bounds === "ticks" || h === 1) && Xp(u, d, p), Object.keys(u).sort(Gp).map((v) => +v);
  }
  getLabelForValue(t) {
    const r = this._adapter, n = this.options.time;
    return n.tooltipFormat ? r.format(t, n.tooltipFormat) : r.format(t, n.displayFormats.datetime);
  }
  format(t, r) {
    const i = this.options.time.displayFormats, a = this._unit, s = r || i[a];
    return this._adapter.format(t, s);
  }
  _tickFormatFunction(t, r, n, i) {
    const a = this.options, s = a.ticks.callback;
    if (s)
      return Ve(s, [
        t,
        r,
        n
      ], this);
    const o = a.time.displayFormats, l = this._unit, c = this._majorUnit, u = l && o[l], f = c && o[c], d = n[r], h = c && f && d && d.major;
    return this._adapter.format(t, i || (h ? f : u));
  }
  generateTickLabels(t) {
    let r, n, i;
    for (r = 0, n = t.length; r < n; ++r)
      i = t[r], i.label = this._tickFormatFunction(i.value, r, t);
  }
  getDecimalForValue(t) {
    return t === null ? NaN : (t - this.min) / (this.max - this.min);
  }
  getPixelForValue(t) {
    const r = this._offsets, n = this.getDecimalForValue(t);
    return this.getPixelForDecimal((r.start + n) * r.factor);
  }
  getValueForPixel(t) {
    const r = this._offsets, n = this.getDecimalForPixel(t) / r.factor - r.end;
    return this.min + n * (this.max - this.min);
  }
  _getLabelSize(t) {
    const r = this.options.ticks, n = this.ctx.measureText(t).width, i = on(this.isHorizontal() ? r.maxRotation : r.minRotation), a = Math.cos(i), s = Math.sin(i), o = this._resolveTickFontOptions(0).size;
    return {
      w: n * a + o * s,
      h: n * s + o * a
    };
  }
  _getLabelCapacity(t) {
    const r = this.options.time, n = r.displayFormats, i = n[r.unit] || n.millisecond, a = this._tickFormatFunction(t, 0, Jp(this, [
      t
    ], this._majorUnit), i), s = this._getLabelSize(a), o = Math.floor(this.isHorizontal() ? this.width / s.w : this.height / s.h) - 1;
    return o > 0 ? o : 1;
  }
  getDataTimestamps() {
    let t = this._cache.data || [], r, n;
    if (t.length)
      return t;
    const i = this.getMatchingVisibleMetas();
    if (this._normalized && i.length)
      return this._cache.data = i[0].controller.getAllParsedValues(this);
    for (r = 0, n = i.length; r < n; ++r)
      t = t.concat(i[r].controller.getAllParsedValues(this));
    return this._cache.data = this.normalize(t);
  }
  getLabelTimestamps() {
    const t = this._cache.labels || [];
    let r, n;
    if (t.length)
      return t;
    const i = this.getLabels();
    for (r = 0, n = i.length; r < n; ++r)
      t.push(Kp(this, i[r]));
    return this._cache.labels = this._normalized ? t : this.normalize(t);
  }
  normalize(t) {
    return gB(t.sort(Gp));
  }
}
G(il, "id", "time"), G(il, "defaults", {
  bounds: "data",
  adapters: {},
  time: {
    parser: !1,
    unit: !1,
    round: !1,
    isoWeekday: !1,
    minUnit: "millisecond",
    displayFormats: {}
  },
  ticks: {
    source: "auto",
    callback: !1,
    major: {
      enabled: !1
    }
  }
});
function Ys(e, t, r) {
  let n = 0, i = e.length - 1, a, s, o, l;
  r ? (t >= e[n].pos && t <= e[i].pos && ({ lo: n, hi: i } = Zu(e, "pos", t)), { pos: a, time: o } = e[n], { pos: s, time: l } = e[i]) : (t >= e[n].time && t <= e[i].time && ({ lo: n, hi: i } = Zu(e, "time", t)), { time: a, pos: o } = e[n], { time: s, pos: l } = e[i]);
  const c = s - a;
  return c ? o + (l - o) * (t - a) / c : o;
}
class Qp extends il {
  constructor(t) {
    super(t), this._table = [], this._minPos = void 0, this._tableRange = void 0;
  }
  initOffsets() {
    const t = this._getTimestampsForTable(), r = this._table = this.buildLookupTable(t);
    this._minPos = Ys(r, this.min), this._tableRange = Ys(r, this.max) - this._minPos, super.initOffsets(t);
  }
  buildLookupTable(t) {
    const { min: r, max: n } = this, i = [], a = [];
    let s, o, l, c, u;
    for (s = 0, o = t.length; s < o; ++s)
      c = t[s], c >= r && c <= n && i.push(c);
    if (i.length < 2)
      return [
        {
          time: r,
          pos: 0
        },
        {
          time: n,
          pos: 1
        }
      ];
    for (s = 0, o = i.length; s < o; ++s)
      u = i[s + 1], l = i[s - 1], c = i[s], Math.round((u + l) / 2) !== c && a.push({
        time: c,
        pos: s / (o - 1)
      });
    return a;
  }
  _generate() {
    const t = this.min, r = this.max;
    let n = super.getDataTimestamps();
    return (!n.includes(t) || !n.length) && n.splice(0, 0, t), (!n.includes(r) || n.length === 1) && n.push(r), n.sort((i, a) => i - a);
  }
  _getTimestampsForTable() {
    let t = this._cache.all || [];
    if (t.length)
      return t;
    const r = this.getDataTimestamps(), n = this.getLabelTimestamps();
    return r.length && n.length ? t = this.normalize(r.concat(n)) : t = r.length ? r : n, t = this._cache.all = t, t;
  }
  getDecimalForValue(t) {
    return (Ys(this._table, t) - this._minPos) / this._tableRange;
  }
  getValueForPixel(t) {
    const r = this._offsets, n = this.getDecimalForPixel(t) / r.factor - r.end;
    return Ys(this._table, n * this._tableRange + this._minPos, !0);
  }
}
G(Qp, "id", "timeseries"), G(Qp, "defaults", il.defaults);
var Cy = typeof global == "object" && global && global.Object === Object && global, qR = typeof self == "object" && self && self.Object === Object && self, yr = Cy || qR || Function("return this")(), hn = yr.Symbol, Sy = Object.prototype, GR = Sy.hasOwnProperty, KR = Sy.toString, ba = hn ? hn.toStringTag : void 0;
function ZR(e) {
  var t = GR.call(e, ba), r = e[ba];
  try {
    e[ba] = void 0;
    var n = !0;
  } catch {
  }
  var i = KR.call(e);
  return n && (t ? e[ba] = r : delete e[ba]), i;
}
var XR = Object.prototype, JR = XR.toString;
function QR(e) {
  return JR.call(e);
}
var eN = "[object Null]", tN = "[object Undefined]", ev = hn ? hn.toStringTag : void 0;
function gs(e) {
  return e == null ? e === void 0 ? tN : eN : ev && ev in Object(e) ? ZR(e) : QR(e);
}
function zn(e) {
  return e != null && typeof e == "object";
}
var Mi = Array.isArray;
function ms(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var rN = "[object AsyncFunction]", nN = "[object Function]", iN = "[object GeneratorFunction]", aN = "[object Proxy]";
function ky(e) {
  if (!ms(e))
    return !1;
  var t = gs(e);
  return t == nN || t == iN || t == rN || t == aN;
}
var _c = yr["__core-js_shared__"], tv = function() {
  var e = /[^.]+$/.exec(_c && _c.keys && _c.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function sN(e) {
  return !!tv && tv in e;
}
var oN = Function.prototype, lN = oN.toString;
function qn(e) {
  if (e != null) {
    try {
      return lN.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var cN = /[\\^$.*+?()[\]{}|]/g, uN = /^\[object .+?Constructor\]$/, fN = Function.prototype, dN = Object.prototype, hN = fN.toString, pN = dN.hasOwnProperty, vN = RegExp(
  "^" + hN.call(pN).replace(cN, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function gN(e) {
  if (!ms(e) || sN(e))
    return !1;
  var t = ky(e) ? vN : uN;
  return t.test(qn(e));
}
function mN(e, t) {
  return e == null ? void 0 : e[t];
}
function Gn(e, t) {
  var r = mN(e, t);
  return gN(r) ? r : void 0;
}
var tf = Gn(yr, "WeakMap"), rv = Object.create, xN = /* @__PURE__ */ function() {
  function e() {
  }
  return function(t) {
    if (!ms(t))
      return {};
    if (rv)
      return rv(t);
    e.prototype = t;
    var r = new e();
    return e.prototype = void 0, r;
  };
}();
function yN(e, t) {
  var r = -1, n = e.length;
  for (t || (t = Array(n)); ++r < n; )
    t[r] = e[r];
  return t;
}
var nv = function() {
  try {
    var e = Gn(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
function bN(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1; )
    ;
  return e;
}
var _N = 9007199254740991, wN = /^(?:0|[1-9]\d*)$/;
function $N(e, t) {
  var r = typeof e;
  return t = t ?? _N, !!t && (r == "number" || r != "symbol" && wN.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function Oy(e, t, r) {
  t == "__proto__" && nv ? nv(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
function j0(e, t) {
  return e === t || e !== e && t !== t;
}
var DN = Object.prototype, EN = DN.hasOwnProperty;
function Fy(e, t, r) {
  var n = e[t];
  (!(EN.call(e, t) && j0(n, r)) || r === void 0 && !(t in e)) && Oy(e, t, r);
}
function zl(e, t, r, n) {
  var i = !r;
  r || (r = {});
  for (var a = -1, s = t.length; ++a < s; ) {
    var o = t[a], l = n ? n(r[o], e[o], o, r, e) : void 0;
    l === void 0 && (l = e[o]), i ? Oy(r, o, l) : Fy(r, o, l);
  }
  return r;
}
var AN = 9007199254740991;
function Ty(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= AN;
}
function z0(e) {
  return e != null && Ty(e.length) && !ky(e);
}
var CN = Object.prototype;
function Hl(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || CN;
  return e === r;
}
function SN(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var kN = "[object Arguments]";
function iv(e) {
  return zn(e) && gs(e) == kN;
}
var My = Object.prototype, ON = My.hasOwnProperty, FN = My.propertyIsEnumerable, TN = iv(/* @__PURE__ */ function() {
  return arguments;
}()) ? iv : function(e) {
  return zn(e) && ON.call(e, "callee") && !FN.call(e, "callee");
};
const Py = TN;
function MN() {
  return !1;
}
var By = typeof exports == "object" && exports && !exports.nodeType && exports, av = By && typeof module == "object" && module && !module.nodeType && module, PN = av && av.exports === By, sv = PN ? yr.Buffer : void 0, BN = sv ? sv.isBuffer : void 0, IN = BN || MN;
const es = IN;
var RN = "[object Arguments]", NN = "[object Array]", LN = "[object Boolean]", jN = "[object Date]", zN = "[object Error]", HN = "[object Function]", VN = "[object Map]", YN = "[object Number]", WN = "[object Object]", UN = "[object RegExp]", qN = "[object Set]", GN = "[object String]", KN = "[object WeakMap]", ZN = "[object ArrayBuffer]", XN = "[object DataView]", JN = "[object Float32Array]", QN = "[object Float64Array]", eL = "[object Int8Array]", tL = "[object Int16Array]", rL = "[object Int32Array]", nL = "[object Uint8Array]", iL = "[object Uint8ClampedArray]", aL = "[object Uint16Array]", sL = "[object Uint32Array]", Me = {};
Me[JN] = Me[QN] = Me[eL] = Me[tL] = Me[rL] = Me[nL] = Me[iL] = Me[aL] = Me[sL] = !0;
Me[RN] = Me[NN] = Me[ZN] = Me[LN] = Me[XN] = Me[jN] = Me[zN] = Me[HN] = Me[VN] = Me[YN] = Me[WN] = Me[UN] = Me[qN] = Me[GN] = Me[KN] = !1;
function oL(e) {
  return zn(e) && Ty(e.length) && !!Me[gs(e)];
}
function H0(e) {
  return function(t) {
    return e(t);
  };
}
var Iy = typeof exports == "object" && exports && !exports.nodeType && exports, Ia = Iy && typeof module == "object" && module && !module.nodeType && module, lL = Ia && Ia.exports === Iy, wc = lL && Cy.process, Pi = function() {
  try {
    var e = Ia && Ia.require && Ia.require("util").types;
    return e || wc && wc.binding && wc.binding("util");
  } catch {
  }
}(), ov = Pi && Pi.isTypedArray, cL = ov ? H0(ov) : oL;
const V0 = cL;
var uL = Object.prototype, fL = uL.hasOwnProperty;
function Ry(e, t) {
  var r = Mi(e), n = !r && Py(e), i = !r && !n && es(e), a = !r && !n && !i && V0(e), s = r || n || i || a, o = s ? SN(e.length, String) : [], l = o.length;
  for (var c in e)
    (t || fL.call(e, c)) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    $N(c, l))) && o.push(c);
  return o;
}
function Ny(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var dL = Ny(Object.keys, Object), hL = Object.prototype, pL = hL.hasOwnProperty;
function Ly(e) {
  if (!Hl(e))
    return dL(e);
  var t = [];
  for (var r in Object(e))
    pL.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
function Y0(e) {
  return z0(e) ? Ry(e) : Ly(e);
}
function vL(e) {
  var t = [];
  if (e != null)
    for (var r in Object(e))
      t.push(r);
  return t;
}
var gL = Object.prototype, mL = gL.hasOwnProperty;
function xL(e) {
  if (!ms(e))
    return vL(e);
  var t = Hl(e), r = [];
  for (var n in e)
    n == "constructor" && (t || !mL.call(e, n)) || r.push(n);
  return r;
}
function W0(e) {
  return z0(e) ? Ry(e, !0) : xL(e);
}
var ts = Gn(Object, "create");
function yL() {
  this.__data__ = ts ? ts(null) : {}, this.size = 0;
}
function bL(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var _L = "__lodash_hash_undefined__", wL = Object.prototype, $L = wL.hasOwnProperty;
function DL(e) {
  var t = this.__data__;
  if (ts) {
    var r = t[e];
    return r === _L ? void 0 : r;
  }
  return $L.call(t, e) ? t[e] : void 0;
}
var EL = Object.prototype, AL = EL.hasOwnProperty;
function CL(e) {
  var t = this.__data__;
  return ts ? t[e] !== void 0 : AL.call(t, e);
}
var SL = "__lodash_hash_undefined__";
function kL(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = ts && t === void 0 ? SL : t, this;
}
function Hn(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Hn.prototype.clear = yL;
Hn.prototype.delete = bL;
Hn.prototype.get = DL;
Hn.prototype.has = CL;
Hn.prototype.set = kL;
function OL() {
  this.__data__ = [], this.size = 0;
}
function Vl(e, t) {
  for (var r = e.length; r--; )
    if (j0(e[r][0], t))
      return r;
  return -1;
}
var FL = Array.prototype, TL = FL.splice;
function ML(e) {
  var t = this.__data__, r = Vl(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : TL.call(t, r, 1), --this.size, !0;
}
function PL(e) {
  var t = this.__data__, r = Vl(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function BL(e) {
  return Vl(this.__data__, e) > -1;
}
function IL(e, t) {
  var r = this.__data__, n = Vl(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
function Hr(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Hr.prototype.clear = OL;
Hr.prototype.delete = ML;
Hr.prototype.get = PL;
Hr.prototype.has = BL;
Hr.prototype.set = IL;
var rs = Gn(yr, "Map");
function RL() {
  this.size = 0, this.__data__ = {
    hash: new Hn(),
    map: new (rs || Hr)(),
    string: new Hn()
  };
}
function NL(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Yl(e, t) {
  var r = e.__data__;
  return NL(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function LL(e) {
  var t = Yl(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function jL(e) {
  return Yl(this, e).get(e);
}
function zL(e) {
  return Yl(this, e).has(e);
}
function HL(e, t) {
  var r = Yl(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
function Kn(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Kn.prototype.clear = RL;
Kn.prototype.delete = LL;
Kn.prototype.get = jL;
Kn.prototype.has = zL;
Kn.prototype.set = HL;
function jy(e, t) {
  for (var r = -1, n = t.length, i = e.length; ++r < n; )
    e[i + r] = t[r];
  return e;
}
var VL = Ny(Object.getPrototypeOf, Object);
const zy = VL;
function YL() {
  this.__data__ = new Hr(), this.size = 0;
}
function WL(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
function UL(e) {
  return this.__data__.get(e);
}
function qL(e) {
  return this.__data__.has(e);
}
var GL = 200;
function KL(e, t) {
  var r = this.__data__;
  if (r instanceof Hr) {
    var n = r.__data__;
    if (!rs || n.length < GL - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new Kn(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
function Fr(e) {
  var t = this.__data__ = new Hr(e);
  this.size = t.size;
}
Fr.prototype.clear = YL;
Fr.prototype.delete = WL;
Fr.prototype.get = UL;
Fr.prototype.has = qL;
Fr.prototype.set = KL;
function ZL(e, t) {
  return e && zl(t, Y0(t), e);
}
function XL(e, t) {
  return e && zl(t, W0(t), e);
}
var Hy = typeof exports == "object" && exports && !exports.nodeType && exports, lv = Hy && typeof module == "object" && module && !module.nodeType && module, JL = lv && lv.exports === Hy, cv = JL ? yr.Buffer : void 0, uv = cv ? cv.allocUnsafe : void 0;
function QL(e, t) {
  if (t)
    return e.slice();
  var r = e.length, n = uv ? uv(r) : new e.constructor(r);
  return e.copy(n), n;
}
function e9(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = 0, a = []; ++r < n; ) {
    var s = e[r];
    t(s, r, e) && (a[i++] = s);
  }
  return a;
}
function Vy() {
  return [];
}
var t9 = Object.prototype, r9 = t9.propertyIsEnumerable, fv = Object.getOwnPropertySymbols, U0 = fv ? function(e) {
  return e == null ? [] : (e = Object(e), e9(fv(e), function(t) {
    return r9.call(e, t);
  }));
} : Vy;
function n9(e, t) {
  return zl(e, U0(e), t);
}
var i9 = Object.getOwnPropertySymbols, Yy = i9 ? function(e) {
  for (var t = []; e; )
    jy(t, U0(e)), e = zy(e);
  return t;
} : Vy;
function a9(e, t) {
  return zl(e, Yy(e), t);
}
function Wy(e, t, r) {
  var n = t(e);
  return Mi(e) ? n : jy(n, r(e));
}
function rf(e) {
  return Wy(e, Y0, U0);
}
function s9(e) {
  return Wy(e, W0, Yy);
}
var nf = Gn(yr, "DataView"), af = Gn(yr, "Promise"), sf = Gn(yr, "Set"), dv = "[object Map]", o9 = "[object Object]", hv = "[object Promise]", pv = "[object Set]", vv = "[object WeakMap]", gv = "[object DataView]", l9 = qn(nf), c9 = qn(rs), u9 = qn(af), f9 = qn(sf), d9 = qn(tf), Cn = gs;
(nf && Cn(new nf(new ArrayBuffer(1))) != gv || rs && Cn(new rs()) != dv || af && Cn(af.resolve()) != hv || sf && Cn(new sf()) != pv || tf && Cn(new tf()) != vv) && (Cn = function(e) {
  var t = gs(e), r = t == o9 ? e.constructor : void 0, n = r ? qn(r) : "";
  if (n)
    switch (n) {
      case l9:
        return gv;
      case c9:
        return dv;
      case u9:
        return hv;
      case f9:
        return pv;
      case d9:
        return vv;
    }
  return t;
});
const Bi = Cn;
var h9 = Object.prototype, p9 = h9.hasOwnProperty;
function v9(e) {
  var t = e.length, r = new e.constructor(t);
  return t && typeof e[0] == "string" && p9.call(e, "index") && (r.index = e.index, r.input = e.input), r;
}
var al = yr.Uint8Array;
function q0(e) {
  var t = new e.constructor(e.byteLength);
  return new al(t).set(new al(e)), t;
}
function g9(e, t) {
  var r = t ? q0(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.byteLength);
}
var m9 = /\w*$/;
function x9(e) {
  var t = new e.constructor(e.source, m9.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var mv = hn ? hn.prototype : void 0, xv = mv ? mv.valueOf : void 0;
function y9(e) {
  return xv ? Object(xv.call(e)) : {};
}
function b9(e, t) {
  var r = t ? q0(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.length);
}
var _9 = "[object Boolean]", w9 = "[object Date]", $9 = "[object Map]", D9 = "[object Number]", E9 = "[object RegExp]", A9 = "[object Set]", C9 = "[object String]", S9 = "[object Symbol]", k9 = "[object ArrayBuffer]", O9 = "[object DataView]", F9 = "[object Float32Array]", T9 = "[object Float64Array]", M9 = "[object Int8Array]", P9 = "[object Int16Array]", B9 = "[object Int32Array]", I9 = "[object Uint8Array]", R9 = "[object Uint8ClampedArray]", N9 = "[object Uint16Array]", L9 = "[object Uint32Array]";
function j9(e, t, r) {
  var n = e.constructor;
  switch (t) {
    case k9:
      return q0(e);
    case _9:
    case w9:
      return new n(+e);
    case O9:
      return g9(e, r);
    case F9:
    case T9:
    case M9:
    case P9:
    case B9:
    case I9:
    case R9:
    case N9:
    case L9:
      return b9(e, r);
    case $9:
      return new n();
    case D9:
    case C9:
      return new n(e);
    case E9:
      return x9(e);
    case A9:
      return new n();
    case S9:
      return y9(e);
  }
}
function z9(e) {
  return typeof e.constructor == "function" && !Hl(e) ? xN(zy(e)) : {};
}
var H9 = "[object Map]";
function V9(e) {
  return zn(e) && Bi(e) == H9;
}
var yv = Pi && Pi.isMap, Y9 = yv ? H0(yv) : V9, W9 = "[object Set]";
function U9(e) {
  return zn(e) && Bi(e) == W9;
}
var bv = Pi && Pi.isSet, q9 = bv ? H0(bv) : U9, G9 = 1, K9 = 2, Z9 = 4, Uy = "[object Arguments]", X9 = "[object Array]", J9 = "[object Boolean]", Q9 = "[object Date]", e7 = "[object Error]", qy = "[object Function]", t7 = "[object GeneratorFunction]", r7 = "[object Map]", n7 = "[object Number]", Gy = "[object Object]", i7 = "[object RegExp]", a7 = "[object Set]", s7 = "[object String]", o7 = "[object Symbol]", l7 = "[object WeakMap]", c7 = "[object ArrayBuffer]", u7 = "[object DataView]", f7 = "[object Float32Array]", d7 = "[object Float64Array]", h7 = "[object Int8Array]", p7 = "[object Int16Array]", v7 = "[object Int32Array]", g7 = "[object Uint8Array]", m7 = "[object Uint8ClampedArray]", x7 = "[object Uint16Array]", y7 = "[object Uint32Array]", Fe = {};
Fe[Uy] = Fe[X9] = Fe[c7] = Fe[u7] = Fe[J9] = Fe[Q9] = Fe[f7] = Fe[d7] = Fe[h7] = Fe[p7] = Fe[v7] = Fe[r7] = Fe[n7] = Fe[Gy] = Fe[i7] = Fe[a7] = Fe[s7] = Fe[o7] = Fe[g7] = Fe[m7] = Fe[x7] = Fe[y7] = !0;
Fe[e7] = Fe[qy] = Fe[l7] = !1;
function ho(e, t, r, n, i, a) {
  var s, o = t & G9, l = t & K9, c = t & Z9;
  if (r && (s = i ? r(e, n, i, a) : r(e)), s !== void 0)
    return s;
  if (!ms(e))
    return e;
  var u = Mi(e);
  if (u) {
    if (s = v9(e), !o)
      return yN(e, s);
  } else {
    var f = Bi(e), d = f == qy || f == t7;
    if (es(e))
      return QL(e, o);
    if (f == Gy || f == Uy || d && !i) {
      if (s = l || d ? {} : z9(e), !o)
        return l ? a9(e, XL(s, e)) : n9(e, ZL(s, e));
    } else {
      if (!Fe[f])
        return i ? e : {};
      s = j9(e, f, o);
    }
  }
  a || (a = new Fr());
  var h = a.get(e);
  if (h)
    return h;
  a.set(e, s), q9(e) ? e.forEach(function(g) {
    s.add(ho(g, t, r, g, e, a));
  }) : Y9(e) && e.forEach(function(g, m) {
    s.set(m, ho(g, t, r, m, e, a));
  });
  var p = c ? l ? s9 : rf : l ? W0 : Y0, v = u ? void 0 : p(e);
  return bN(v || e, function(g, m) {
    v && (m = g, g = e[m]), Fy(s, m, ho(g, t, r, m, e, a));
  }), s;
}
var b7 = 1, _7 = 4;
function _a(e) {
  return ho(e, b7 | _7);
}
var w7 = "__lodash_hash_undefined__";
function $7(e) {
  return this.__data__.set(e, w7), this;
}
function D7(e) {
  return this.__data__.has(e);
}
function sl(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new Kn(); ++t < r; )
    this.add(e[t]);
}
sl.prototype.add = sl.prototype.push = $7;
sl.prototype.has = D7;
function E7(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
function A7(e, t) {
  return e.has(t);
}
var C7 = 1, S7 = 2;
function Ky(e, t, r, n, i, a) {
  var s = r & C7, o = e.length, l = t.length;
  if (o != l && !(s && l > o))
    return !1;
  var c = a.get(e), u = a.get(t);
  if (c && u)
    return c == t && u == e;
  var f = -1, d = !0, h = r & S7 ? new sl() : void 0;
  for (a.set(e, t), a.set(t, e); ++f < o; ) {
    var p = e[f], v = t[f];
    if (n)
      var g = s ? n(v, p, f, t, e, a) : n(p, v, f, e, t, a);
    if (g !== void 0) {
      if (g)
        continue;
      d = !1;
      break;
    }
    if (h) {
      if (!E7(t, function(m, y) {
        if (!A7(h, y) && (p === m || i(p, m, r, n, a)))
          return h.push(y);
      })) {
        d = !1;
        break;
      }
    } else if (!(p === v || i(p, v, r, n, a))) {
      d = !1;
      break;
    }
  }
  return a.delete(e), a.delete(t), d;
}
function k7(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n, i) {
    r[++t] = [i, n];
  }), r;
}
function O7(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n) {
    r[++t] = n;
  }), r;
}
var F7 = 1, T7 = 2, M7 = "[object Boolean]", P7 = "[object Date]", B7 = "[object Error]", I7 = "[object Map]", R7 = "[object Number]", N7 = "[object RegExp]", L7 = "[object Set]", j7 = "[object String]", z7 = "[object Symbol]", H7 = "[object ArrayBuffer]", V7 = "[object DataView]", _v = hn ? hn.prototype : void 0, $c = _v ? _v.valueOf : void 0;
function Y7(e, t, r, n, i, a, s) {
  switch (r) {
    case V7:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case H7:
      return !(e.byteLength != t.byteLength || !a(new al(e), new al(t)));
    case M7:
    case P7:
    case R7:
      return j0(+e, +t);
    case B7:
      return e.name == t.name && e.message == t.message;
    case N7:
    case j7:
      return e == t + "";
    case I7:
      var o = k7;
    case L7:
      var l = n & F7;
      if (o || (o = O7), e.size != t.size && !l)
        return !1;
      var c = s.get(e);
      if (c)
        return c == t;
      n |= T7, s.set(e, t);
      var u = Ky(o(e), o(t), n, i, a, s);
      return s.delete(e), u;
    case z7:
      if ($c)
        return $c.call(e) == $c.call(t);
  }
  return !1;
}
var W7 = 1, U7 = Object.prototype, q7 = U7.hasOwnProperty;
function G7(e, t, r, n, i, a) {
  var s = r & W7, o = rf(e), l = o.length, c = rf(t), u = c.length;
  if (l != u && !s)
    return !1;
  for (var f = l; f--; ) {
    var d = o[f];
    if (!(s ? d in t : q7.call(t, d)))
      return !1;
  }
  var h = a.get(e), p = a.get(t);
  if (h && p)
    return h == t && p == e;
  var v = !0;
  a.set(e, t), a.set(t, e);
  for (var g = s; ++f < l; ) {
    d = o[f];
    var m = e[d], y = t[d];
    if (n)
      var _ = s ? n(y, m, d, t, e, a) : n(m, y, d, e, t, a);
    if (!(_ === void 0 ? m === y || i(m, y, r, n, a) : _)) {
      v = !1;
      break;
    }
    g || (g = d == "constructor");
  }
  if (v && !g) {
    var x = e.constructor, b = t.constructor;
    x != b && "constructor" in e && "constructor" in t && !(typeof x == "function" && x instanceof x && typeof b == "function" && b instanceof b) && (v = !1);
  }
  return a.delete(e), a.delete(t), v;
}
var K7 = 1, wv = "[object Arguments]", $v = "[object Array]", Ws = "[object Object]", Z7 = Object.prototype, Dv = Z7.hasOwnProperty;
function X7(e, t, r, n, i, a) {
  var s = Mi(e), o = Mi(t), l = s ? $v : Bi(e), c = o ? $v : Bi(t);
  l = l == wv ? Ws : l, c = c == wv ? Ws : c;
  var u = l == Ws, f = c == Ws, d = l == c;
  if (d && es(e)) {
    if (!es(t))
      return !1;
    s = !0, u = !1;
  }
  if (d && !u)
    return a || (a = new Fr()), s || V0(e) ? Ky(e, t, r, n, i, a) : Y7(e, t, l, r, n, i, a);
  if (!(r & K7)) {
    var h = u && Dv.call(e, "__wrapped__"), p = f && Dv.call(t, "__wrapped__");
    if (h || p) {
      var v = h ? e.value() : e, g = p ? t.value() : t;
      return a || (a = new Fr()), i(v, g, r, n, a);
    }
  }
  return d ? (a || (a = new Fr()), G7(e, t, r, n, i, a)) : !1;
}
function Zy(e, t, r, n, i) {
  return e === t ? !0 : e == null || t == null || !zn(e) && !zn(t) ? e !== e && t !== t : X7(e, t, r, n, Zy, i);
}
var J7 = "[object Map]", Q7 = "[object Set]", ej = Object.prototype, tj = ej.hasOwnProperty;
function rj(e) {
  if (e == null)
    return !0;
  if (z0(e) && (Mi(e) || typeof e == "string" || typeof e.splice == "function" || es(e) || V0(e) || Py(e)))
    return !e.length;
  var t = Bi(e);
  if (t == J7 || t == Q7)
    return !e.size;
  if (Hl(e))
    return !Ly(e).length;
  for (var r in e)
    if (tj.call(e, r))
      return !1;
  return !0;
}
function Ev(e, t) {
  return Zy(e, t);
}
var nj = Object.defineProperty, ij = Object.defineProperties, aj = Object.getOwnPropertyDescriptors, Av = Object.getOwnPropertySymbols, sj = Object.prototype.hasOwnProperty, oj = Object.prototype.propertyIsEnumerable, Cv = (e, t, r) => t in e ? nj(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, lj = (e, t) => {
  for (var r in t || (t = {}))
    sj.call(t, r) && Cv(e, r, t[r]);
  if (Av)
    for (var r of Av(t))
      oj.call(t, r) && Cv(e, r, t[r]);
  return e;
}, cj = (e, t) => ij(e, aj(t));
function uj(e) {
  return (e.match(/[a-zA-Z0-9]+/g) || []).map((t) => `${t.charAt(0).toUpperCase()}${t.slice(1)}`).join("");
}
var gn = (e, t) => {
  const r = {
    chartData: { type: Object, required: !0 },
    options: { type: Object, required: !1 },
    chartId: { default: e, type: String },
    width: { default: 400, type: Number },
    height: { default: 400, type: Number },
    cssClasses: { type: String, default: "" },
    styles: { type: Object },
    plugins: { type: Array, default: () => [] },
    onLabelsUpdate: { type: Function },
    onChartUpdate: { type: Function },
    onChartDestroy: { type: Function },
    onChartRender: { type: Function }
  }, n = uj(e);
  return he({
    name: n,
    props: r,
    emits: {
      "labels:update": () => !0,
      "chart:update": (i) => !0,
      "chart:destroy": () => !0,
      "chart:render": (i) => !0
    },
    setup(i, { emit: a, expose: s }) {
      const o = ce(null), l = `${i.chartId}`;
      let c = Gf(null);
      pe(() => i.chartData, u, { deep: !0 }), pe(() => i.options, (g) => {
        c.value && g && (c.value.options = _a(g), p());
      }, { deep: !0 });
      function u(g) {
        if (c.value) {
          let m = c.value;
          Ev(g.labels, c.value.data.labels) || (m.data.labels = g.labels, d()), Ev(g.datasets, c.value.data.datasets) || g.datasets.forEach((y, _) => {
            var x, b;
            if (rj(y))
              m.data.datasets = [];
            else {
              const w = _a(m.data), E = Object.keys((b = (x = w.datasets) == null ? void 0 : x[_]) != null ? b : {}), $ = Object.keys(y);
              E.filter((D) => D !== "_meta" && $.indexOf(D) === -1).forEach((D) => {
                m.data.datasets[_] && delete m.data.datasets[_][D];
              });
              for (const D in y) {
                const A = _a(y[D]);
                m.data.datasets[_] || (m.data.datasets[_] = {}), y.hasOwnProperty(D) && A != null && m && (m.data.datasets[_][D] = A);
              }
            }
          }), p();
        } else
          c.value && v(), f();
      }
      function f() {
        o.value ? (c.value = new Qr(o.value, {
          data: _a(i.chartData),
          type: t,
          options: _a(i.options),
          plugins: i.plugins
        }), h()) : console.error(`Error on component ${n}, canvas cannot be rendered. Check if the render appends server-side`);
      }
      function d() {
        a("labels:update"), i.onLabelsUpdate && i.onLabelsUpdate();
      }
      function h() {
        c.value && (a("chart:render", c.value), i.onChartRender && i.onChartRender(c.value));
      }
      function p() {
        c.value && (c.value.update(), a("chart:update", c.value), i.onChartUpdate && i.onChartUpdate(c.value));
      }
      function v() {
        c.value && c.value.destroy(), a("chart:destroy"), i.onChartDestroy && i.onChartDestroy();
      }
      return ot(f), N2(() => {
        c.value && c.value.destroy();
      }), s({
        canvasRef: o,
        renderChart: f,
        chartInstance: c,
        canvasId: l,
        update: p
      }), () => pi("div", {
        style: cj(lj({
          maxWidth: "100%"
        }, i.styles), {
          position: "relative"
        }),
        class: i.cssClasses
      }, [
        pi("canvas", {
          style: {
            maxWidth: "100%",
            maxHeight: "100%"
          },
          id: l,
          width: i.width,
          height: i.height,
          ref: o
        })
      ]);
    }
  });
};
gn("bar-chart", "bar");
var fj = gn("doughnut-chart", "doughnut"), dj = gn("line-chart", "line"), hj = gn("pie-chart", "pie");
gn("polar-chart", "polarArea");
gn("radar-chart", "radar");
gn("bubble-chart", "bubble");
gn("scatter-chart", "scatter");
const pj = /* @__PURE__ */ he({
  __name: "doughnut",
  props: {
    items: {
      required: !0,
      type: Array
    },
    width: {
      type: Number,
      default: 600
    },
    height: {
      type: Number,
      default: 300
    }
  },
  setup(e) {
    const t = e, r = Ce({
      labels: t.items.map((i) => i.label()),
      datasets: [
        {
          backgroundColor: [
            "#FF595E",
            "#36949D",
            "#FF924C",
            "#1982C4",
            "#FFCA3A",
            "#4267AC",
            "#C5CA30",
            "#565AA0",
            "#8AC926",
            "#6A4C93",
            "#001219",
            "#EE9B00",
            "#CA6702",
            "#0A9396",
            "#BB3E03",
            "#94D2BD",
            "#AE2012",
            "#E9D8A6",
            "#9B2226"
          ],
          data: t.items.map((i) => i.value)
        }
      ]
    }), n = Ce({
      responsive: !0,
      maintainAspectRatio: !1,
      plugins: {
        tooltip: {
          enabled: !1
        },
        legend: {
          position: "right",
          labels: {
            padding: 20
          }
        }
      }
    });
    return (i, a) => (I(), $e(Y(fj), {
      "chart-options": n,
      "chart-data": r,
      width: e.width,
      height: e.height
    }, null, 8, ["chart-options", "chart-data", "width", "height"]));
  }
}), vj = /* @__PURE__ */ he({
  __name: "line",
  props: {
    labels: {
      required: !0,
      type: Array
    },
    items: {
      required: !0,
      type: Array
    },
    width: {
      type: Number,
      default: 600
    },
    height: {
      type: Number,
      default: 300
    }
  },
  setup(e) {
    const t = e, r = Ce({
      labels: t.labels,
      datasets: t.items.map((i) => ({
        label: i.label(),
        backgroundColor: i.color || void 0,
        borderColor: i.color || void 0,
        data: i.values
      }))
    }), n = Ce({
      responsive: !0,
      maintainAspectRatio: !1,
      plugins: {
        tooltip: {
          enabled: !1
        },
        legend: {
          position: "right",
          labels: {
            padding: 20
          }
        }
      }
    });
    return (i, a) => (I(), $e(Y(dj), {
      "chart-options": n,
      "chart-data": r,
      width: e.width,
      height: e.height
    }, null, 8, ["chart-options", "chart-data", "width", "height"]));
  }
}), gj = /* @__PURE__ */ he({
  __name: "pie",
  props: {
    items: {
      required: !0,
      type: Array
    },
    colors: {
      required: !1,
      type: Array,
      default: null
    },
    width: {
      type: Number,
      default: 600
    },
    height: {
      type: Number,
      default: 300
    }
  },
  setup(e) {
    const t = e, r = Ce({
      labels: t.items.map((i) => i.label()),
      datasets: [
        {
          backgroundColor: t.colors ? t.colors : [
            "#FF595E",
            "#36949D",
            "#FF924C",
            "#1982C4",
            "#FFCA3A",
            "#4267AC",
            "#C5CA30",
            "#565AA0",
            "#8AC926",
            "#6A4C93",
            "#001219",
            "#EE9B00",
            "#CA6702",
            "#0A9396",
            "#BB3E03",
            "#94D2BD",
            "#AE2012",
            "#E9D8A6",
            "#9B2226"
          ],
          data: t.items.map((i) => i.value)
        }
      ]
    }), n = Ce({
      responsive: !0,
      maintainAspectRatio: !1,
      plugins: {
        tooltip: {
          enabled: !1
        },
        legend: {
          position: "right",
          labels: {
            padding: 20
          }
        }
      }
    });
    return (i, a) => (I(), $e(Y(hj), {
      "chart-options": n,
      "chart-data": r,
      width: e.width,
      height: e.height
    }, null, 8, ["chart-options", "chart-data", "width", "height"]));
  }
}), Sv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  NgAni: G2,
  NgDatePicker: D6,
  NgDateRangePicker: E6,
  NgDialog: W1,
  NgDoughnutChart: pj,
  NgFixedBar: k6,
  NgForm: U6,
  NgImg: K6,
  NgLineChart: vj,
  NgLink: X6,
  NgLoaders: J6,
  NgMap: i5,
  NgOutlineText: c5,
  NgOverlayLoading: Oi,
  NgPagination: u5,
  NgPieChart: gj,
  NgSearch: p5,
  NgSkeleton: E0,
  NgSkeletonGroup: v5,
  NgTable: _5,
  NgToolbar: $5,
  NgUpload: A5,
  NgVisibleLoad: T5
}, Symbol.toStringTag, { value: "Module" })), mj = /* @__PURE__ */ he({
  __name: "confirm",
  props: {
    title: {
      type: String,
      required: !0
    },
    message: {
      type: String,
      required: !0
    },
    cancelText: {
      type: String,
      required: !0
    },
    confirmText: {
      type: String,
      required: !0
    },
    isOpen: {
      type: Boolean,
      required: !0
    },
    clickCancel: {
      type: Function,
      required: !0
    },
    clickConfirm: {
      type: Function,
      required: !0
    }
  },
  setup(e) {
    const t = e, r = Ce({
      dialog: !1,
      loading: !1,
      doubleCheckText: ""
    }), n = M(() => t.isOpen);
    pe(() => n.value, () => {
      r.dialog = n.value, r.doubleCheckText = "";
    });
    const i = (s = !0) => {
      s && t.clickCancel(), setTimeout(() => {
        r.loading = !1;
      }, 200);
    }, a = async () => {
      r.loading = !0, t.clickConfirm(i);
    };
    return (s, o) => {
      const l = ue("v-card-title"), c = ue("v-spacer"), u = ue("v-btn"), f = ue("v-card-actions"), d = ue("v-card"), h = ue("v-dialog");
      return I(), W("div", null, [
        ae(h, {
          modelValue: r.dialog,
          "onUpdate:modelValue": o[0] || (o[0] = (p) => r.dialog = p),
          persistent: "",
          "max-width": "360px"
        }, {
          default: de(() => [
            ae(d, null, {
              default: de(() => [
                ae(l, null, {
                  default: de(() => [
                    kr(ke(e.title), 1)
                  ]),
                  _: 1
                }),
                ae(f, { class: "pb-4 px-4" }, {
                  default: de(() => [
                    ae(c),
                    ae(u, {
                      name: "ng-confirm-close",
                      variant: "text",
                      rounded: "pill",
                      disabled: r.loading,
                      onClick: e.clickCancel
                    }, {
                      default: de(() => [
                        kr(ke(e.cancelText), 1)
                      ]),
                      _: 1
                    }, 8, ["disabled", "onClick"]),
                    ae(u, {
                      name: "ng-confirm-confirm",
                      color: "primary",
                      rounded: "pill",
                      loading: r.loading,
                      onClick: a
                    }, {
                      default: de(() => [
                        kr(ke(e.confirmText), 1)
                      ]),
                      _: 1
                    }, 8, ["loading"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["modelValue"])
      ]);
    };
  }
}), xj = { class: "lib-notification" }, yj = {
  class: "ml-3",
  style: { overflow: "auto" }
}, bj = /* @__PURE__ */ he({
  __name: "notification",
  props: {
    onclear: {
      type: Function,
      required: !0
    },
    messages: {
      type: Array,
      required: !0
    }
  },
  setup(e) {
    const t = e, r = Ce({
      dialog: !1,
      ticker: new bx(100)
    }), n = M(() => t.messages.slice(0, 4));
    ot(() => {
      r.ticker.on("next", () => {
        let l = !1;
        n.value.forEach((c) => {
          c.clicked === !1 && (c.duration += 10, c.duration >= 100 && (l = !0));
        }), l && t.onclear();
      });
    }), Et(() => {
      r.ticker.close();
    });
    const i = (l) => {
      if (l === "danger")
        return "error";
      if (l === "info")
        return "info";
      if (l === "success")
        return "success";
      if (l === "warning")
        return "warning";
    }, a = (l) => {
      if (l === "danger")
        return "mdi-alert-circle";
      if (l === "info")
        return "mdi-email";
      if (l === "success")
        return "mdi-check";
      if (l === "warning")
        return "mdi-comment-alert";
    }, s = (l) => {
      l.clicked = !0;
    }, o = (l) => {
      setTimeout(() => {
        l.duration = 120, t.onclear();
      }, 100);
    };
    return (l, c) => {
      const u = ue("v-progress-linear"), f = ue("v-icon"), d = ue("v-spacer"), h = ue("v-btn"), p = ue("v-row"), v = ue("v-card");
      return I(), W("div", xj, [
        ae(L2, { name: "lib-notification-list" }, {
          default: de(() => [
            (I(!0), W(Be, null, et(n.value, (g) => (I(), W("div", {
              key: g.id,
              class: "lib-notification-block mt-2 mr-2"
            }, [
              xe(l.$slots, "default", {
                message: g,
                color: i(g.type),
                close: () => o(g),
                stop: () => s(g)
              }, () => [
                ae(v, {
                  rounded: "lg",
                  outlined: "",
                  onClick: (m) => s(g)
                }, {
                  default: de(() => [
                    g.clicked === !1 ? (I(), $e(u, {
                      key: 0,
                      height: "2",
                      color: i(g.type),
                      "model-value": 100 - g.duration
                    }, null, 8, ["color", "model-value"])) : ve("", !0),
                    ae(p, {
                      class: Ae(["pa-3 flex-nowrap", `${i(g.type)}--text`]),
                      "no-gutters": "",
                      align: "center"
                    }, {
                      default: de(() => [
                        ae(f, {
                          color: i(g.type)
                        }, {
                          default: de(() => [
                            kr(ke(a(g.type)), 1)
                          ]),
                          _: 2
                        }, 1032, ["color"]),
                        oe("div", yj, ke(g.content), 1),
                        ae(d),
                        ae(h, {
                          variant: "plain",
                          icon: "mdi-close",
                          color: i(g.type),
                          onClick: qf((m) => o(g), ["stop"])
                        }, null, 8, ["color", "onClick"])
                      ]),
                      _: 2
                    }, 1032, ["class"])
                  ]),
                  _: 2
                }, 1032, ["onClick"])
              ], !0)
            ]))), 128))
          ]),
          _: 3
        })
      ]);
    };
  }
}), _j = /* @__PURE__ */ zr(bj, [["__scopeId", "data-v-73977251"]]), kv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  NgConfirmLayout: mj,
  NgNotificationLayout: _j
}, Symbol.toStringTag, { value: "Module" })), Ov = Kt.checkout("listener-group"), ase = () => {
  let e = !1, t = [], r = () => {
    if (e === !1)
      e = !0, t.forEach((n) => n == null ? void 0 : n.off());
    else
      throw Ov.create("offAll() is failed, because already called.");
  };
  return Et(() => {
    e === !1 && r();
  }), {
    off: () => r(),
    push: (n) => {
      if (e === !1)
        t.push(...n);
      else
        throw Ov.create("push() is failed, because already called offAll().");
    }
  };
}, sse = () => {
  const e = Ce(new xx());
  return Et(() => {
    e.clear();
  }), e;
}, ose = (e) => ce(), lse = (e) => Ce(e), wj = () => {
  const e = [];
  return {
    reset: () => {
      for (let { cb: n, data: i } of e)
        Object.assign(i, n());
    },
    create: (n) => {
      const i = Ce(n());
      return e.push({
        cb: n,
        data: i
      }), i;
    }
  };
};
class ol extends mt {
  constructor() {
    super(...arguments);
    G(this, "canvas", document.createElement("canvas"));
    G(this, "video");
    G(this, "stream");
    G(this, "mediaRecorder");
    G(this, "options");
  }
  static stopAndRemoveTracks(r) {
    r.getTracks().forEach((n) => n.stop()), r.getAudioTracks().forEach((n) => r.removeTrack(n)), r.getVideoTracks().forEach((n) => r.removeTrack(n));
  }
  /**
   * 如果透過 navigator.permissions.query({ name: 'camera' }) 驗證會出現 Firefox 不支援的問題。
   */
  static async requestPermission() {
    try {
      const r = await navigator.mediaDevices.getUserMedia({
        audio: !0,
        video: !0
      });
      return ol.stopAndRemoveTracks(r), !0;
    } catch {
      return !1;
    }
  }
  install(r, n) {
    return this.options = {
      record: Co.ifEmpty(n == null ? void 0 : n.record, !1),
      useRearLens: Co.ifEmpty(n == null ? void 0 : n.useRearLens, !1)
    }, new Promise(async (i, a) => {
      var o, l;
      const s = () => {
        var c;
        i(null), (c = this.video) == null || c.removeEventListener("loadedmetadata", s);
      };
      try {
        if (this.video = r, this.stream = await navigator.mediaDevices.getUserMedia({
          audio: !0,
          video: {
            width: r.width,
            height: r.height,
            facingMode: ((o = this.options) == null ? void 0 : o.useRearLens) === !1 ? void 0 : {
              exact: "environment"
            }
          }
        }), this.video.srcObject = this.stream, this.video.addEventListener("loadedmetadata", s), (l = this.options) != null && l.record) {
          let c = [
            "video/webm",
            "video/mp4,",
            "video/quicktime",
            "video/x-m4v",
            "video/3gpp",
            "video/3gpp2"
          ], u;
          for (let f of c)
            if (MediaRecorder.isTypeSupported(f)) {
              u = f;
              break;
            }
          this.mediaRecorder = new MediaRecorder(this.stream, {
            mimeType: u
          }), this.mediaRecorder.addEventListener("dataavailable", (f) => {
            this.emit("dataavailable", { event: f });
          });
        }
      } catch (c) {
        a(c);
      }
    });
  }
  async reload() {
    this.close(), this.video && await this.install(this.video, this.options);
  }
  play() {
    this.mediaRecorder && this.mediaRecorder.start(1e3 / 24), this.video && this.video.play();
  }
  /** 獲得一個 base64 截圖 */
  toImage() {
    if (this.video) {
      this.canvas.width = this.video.width, this.canvas.height = this.video.height;
      let r = this.canvas.getContext("2d");
      r && (r.clearRect(0, 0, this.canvas.width, this.canvas.height), r.drawImage(this.video, 0, 0));
    }
    return this.canvas.toDataURL();
  }
  close() {
    this.stream && ol.stopAndRemoveTracks(this.stream), this.mediaRecorder && this.mediaRecorder.state !== "inactive" && this.mediaRecorder.stop();
  }
}
function po(e, t) {
  if (!!!e)
    throw new Error(t);
}
const $j = 10, Xy = 2;
function G0(e) {
  return Wl(e, []);
}
function Wl(e, t) {
  switch (typeof e) {
    case "string":
      return JSON.stringify(e);
    case "function":
      return e.name ? `[function ${e.name}]` : "[function]";
    case "object":
      return Dj(e, t);
    default:
      return String(e);
  }
}
function Dj(e, t) {
  if (e === null)
    return "null";
  if (t.includes(e))
    return "[Circular]";
  const r = [...t, e];
  if (Ej(e)) {
    const n = e.toJSON();
    if (n !== e)
      return typeof n == "string" ? n : Wl(n, r);
  } else if (Array.isArray(e))
    return Cj(e, r);
  return Aj(e, r);
}
function Ej(e) {
  return typeof e.toJSON == "function";
}
function Aj(e, t) {
  const r = Object.entries(e);
  return r.length === 0 ? "{}" : t.length > Xy ? "[" + Sj(e) + "]" : "{ " + r.map(
    ([i, a]) => i + ": " + Wl(a, t)
  ).join(", ") + " }";
}
function Cj(e, t) {
  if (e.length === 0)
    return "[]";
  if (t.length > Xy)
    return "[Array]";
  const r = Math.min($j, e.length), n = e.length - r, i = [];
  for (let a = 0; a < r; ++a)
    i.push(Wl(e[a], t));
  return n === 1 ? i.push("... 1 more item") : n > 1 && i.push(`... ${n} more items`), "[" + i.join(", ") + "]";
}
function Sj(e) {
  const t = Object.prototype.toString.call(e).replace(/^\[object /, "").replace(/]$/, "");
  if (t === "Object" && typeof e.constructor == "function") {
    const r = e.constructor.name;
    if (typeof r == "string" && r !== "")
      return r;
  }
  return t;
}
class kj {
  /**
   * The character offset at which this Node begins.
   */
  /**
   * The character offset at which this Node ends.
   */
  /**
   * The Token at which this Node begins.
   */
  /**
   * The Token at which this Node ends.
   */
  /**
   * The Source document the AST represents.
   */
  constructor(t, r, n) {
    this.start = t.start, this.end = r.end, this.startToken = t, this.endToken = r, this.source = n;
  }
  get [Symbol.toStringTag]() {
    return "Location";
  }
  toJSON() {
    return {
      start: this.start,
      end: this.end
    };
  }
}
class Jy {
  /**
   * The kind of Token.
   */
  /**
   * The character offset at which this Node begins.
   */
  /**
   * The character offset at which this Node ends.
   */
  /**
   * The 1-indexed line number on which this Token appears.
   */
  /**
   * The 1-indexed column number at which this Token begins.
   */
  /**
   * For non-punctuation tokens, represents the interpreted value of the token.
   *
   * Note: is undefined for punctuation tokens, but typed as string for
   * convenience in the parser.
   */
  /**
   * Tokens exist as nodes in a double-linked-list amongst all tokens
   * including ignored tokens. <SOF> is always the first node and <EOF>
   * the last.
   */
  constructor(t, r, n, i, a, s) {
    this.kind = t, this.start = r, this.end = n, this.line = i, this.column = a, this.value = s, this.prev = null, this.next = null;
  }
  get [Symbol.toStringTag]() {
    return "Token";
  }
  toJSON() {
    return {
      kind: this.kind,
      value: this.value,
      line: this.line,
      column: this.column
    };
  }
}
const Qy = {
  Name: [],
  Document: ["definitions"],
  OperationDefinition: [
    "name",
    "variableDefinitions",
    "directives",
    "selectionSet"
  ],
  VariableDefinition: ["variable", "type", "defaultValue", "directives"],
  Variable: ["name"],
  SelectionSet: ["selections"],
  Field: ["alias", "name", "arguments", "directives", "selectionSet"],
  Argument: ["name", "value"],
  FragmentSpread: ["name", "directives"],
  InlineFragment: ["typeCondition", "directives", "selectionSet"],
  FragmentDefinition: [
    "name",
    // Note: fragment variable definitions are deprecated and will removed in v17.0.0
    "variableDefinitions",
    "typeCondition",
    "directives",
    "selectionSet"
  ],
  IntValue: [],
  FloatValue: [],
  StringValue: [],
  BooleanValue: [],
  NullValue: [],
  EnumValue: [],
  ListValue: ["values"],
  ObjectValue: ["fields"],
  ObjectField: ["name", "value"],
  Directive: ["name", "arguments"],
  NamedType: ["name"],
  ListType: ["type"],
  NonNullType: ["type"],
  SchemaDefinition: ["description", "directives", "operationTypes"],
  OperationTypeDefinition: ["type"],
  ScalarTypeDefinition: ["description", "name", "directives"],
  ObjectTypeDefinition: [
    "description",
    "name",
    "interfaces",
    "directives",
    "fields"
  ],
  FieldDefinition: ["description", "name", "arguments", "type", "directives"],
  InputValueDefinition: [
    "description",
    "name",
    "type",
    "defaultValue",
    "directives"
  ],
  InterfaceTypeDefinition: [
    "description",
    "name",
    "interfaces",
    "directives",
    "fields"
  ],
  UnionTypeDefinition: ["description", "name", "directives", "types"],
  EnumTypeDefinition: ["description", "name", "directives", "values"],
  EnumValueDefinition: ["description", "name", "directives"],
  InputObjectTypeDefinition: ["description", "name", "directives", "fields"],
  DirectiveDefinition: ["description", "name", "arguments", "locations"],
  SchemaExtension: ["directives", "operationTypes"],
  ScalarTypeExtension: ["name", "directives"],
  ObjectTypeExtension: ["name", "interfaces", "directives", "fields"],
  InterfaceTypeExtension: ["name", "interfaces", "directives", "fields"],
  UnionTypeExtension: ["name", "directives", "types"],
  EnumTypeExtension: ["name", "directives", "values"],
  InputObjectTypeExtension: ["name", "directives", "fields"]
}, Oj = new Set(Object.keys(Qy));
function Fv(e) {
  const t = e == null ? void 0 : e.kind;
  return typeof t == "string" && Oj.has(t);
}
let mi;
(function(e) {
  e.QUERY = "query", e.MUTATION = "mutation", e.SUBSCRIPTION = "subscription";
})(mi || (mi = {}));
let ie;
(function(e) {
  e.NAME = "Name", e.DOCUMENT = "Document", e.OPERATION_DEFINITION = "OperationDefinition", e.VARIABLE_DEFINITION = "VariableDefinition", e.SELECTION_SET = "SelectionSet", e.FIELD = "Field", e.ARGUMENT = "Argument", e.FRAGMENT_SPREAD = "FragmentSpread", e.INLINE_FRAGMENT = "InlineFragment", e.FRAGMENT_DEFINITION = "FragmentDefinition", e.VARIABLE = "Variable", e.INT = "IntValue", e.FLOAT = "FloatValue", e.STRING = "StringValue", e.BOOLEAN = "BooleanValue", e.NULL = "NullValue", e.ENUM = "EnumValue", e.LIST = "ListValue", e.OBJECT = "ObjectValue", e.OBJECT_FIELD = "ObjectField", e.DIRECTIVE = "Directive", e.NAMED_TYPE = "NamedType", e.LIST_TYPE = "ListType", e.NON_NULL_TYPE = "NonNullType", e.SCHEMA_DEFINITION = "SchemaDefinition", e.OPERATION_TYPE_DEFINITION = "OperationTypeDefinition", e.SCALAR_TYPE_DEFINITION = "ScalarTypeDefinition", e.OBJECT_TYPE_DEFINITION = "ObjectTypeDefinition", e.FIELD_DEFINITION = "FieldDefinition", e.INPUT_VALUE_DEFINITION = "InputValueDefinition", e.INTERFACE_TYPE_DEFINITION = "InterfaceTypeDefinition", e.UNION_TYPE_DEFINITION = "UnionTypeDefinition", e.ENUM_TYPE_DEFINITION = "EnumTypeDefinition", e.ENUM_VALUE_DEFINITION = "EnumValueDefinition", e.INPUT_OBJECT_TYPE_DEFINITION = "InputObjectTypeDefinition", e.DIRECTIVE_DEFINITION = "DirectiveDefinition", e.SCHEMA_EXTENSION = "SchemaExtension", e.SCALAR_TYPE_EXTENSION = "ScalarTypeExtension", e.OBJECT_TYPE_EXTENSION = "ObjectTypeExtension", e.INTERFACE_TYPE_EXTENSION = "InterfaceTypeExtension", e.UNION_TYPE_EXTENSION = "UnionTypeExtension", e.ENUM_TYPE_EXTENSION = "EnumTypeExtension", e.INPUT_OBJECT_TYPE_EXTENSION = "InputObjectTypeExtension";
})(ie || (ie = {}));
const Fj = Object.freeze({});
function eb(e, t, r = Qy) {
  const n = /* @__PURE__ */ new Map();
  for (const m of Object.values(ie))
    n.set(m, Tj(t, m));
  let i, a = Array.isArray(e), s = [e], o = -1, l = [], c = e, u, f;
  const d = [], h = [];
  do {
    o++;
    const m = o === s.length, y = m && l.length !== 0;
    if (m) {
      if (u = h.length === 0 ? void 0 : d[d.length - 1], c = f, f = h.pop(), y)
        if (a) {
          c = c.slice();
          let x = 0;
          for (const [b, w] of l) {
            const E = b - x;
            w === null ? (c.splice(E, 1), x++) : c[E] = w;
          }
        } else {
          c = Object.defineProperties(
            {},
            Object.getOwnPropertyDescriptors(c)
          );
          for (const [x, b] of l)
            c[x] = b;
        }
      o = i.index, s = i.keys, l = i.edits, a = i.inArray, i = i.prev;
    } else if (f) {
      if (u = a ? o : s[o], c = f[u], c == null)
        continue;
      d.push(u);
    }
    let _;
    if (!Array.isArray(c)) {
      var p, v;
      Fv(c) || po(!1, `Invalid AST Node: ${G0(c)}.`);
      const x = m ? (p = n.get(c.kind)) === null || p === void 0 ? void 0 : p.leave : (v = n.get(c.kind)) === null || v === void 0 ? void 0 : v.enter;
      if (_ = x == null ? void 0 : x.call(t, c, u, f, d, h), _ === Fj)
        break;
      if (_ === !1) {
        if (!m) {
          d.pop();
          continue;
        }
      } else if (_ !== void 0 && (l.push([u, _]), !m))
        if (Fv(_))
          c = _;
        else {
          d.pop();
          continue;
        }
    }
    if (_ === void 0 && y && l.push([u, c]), m)
      d.pop();
    else {
      var g;
      i = {
        inArray: a,
        index: o,
        keys: s,
        edits: l,
        prev: i
      }, a = Array.isArray(c), s = a ? c : (g = r[c.kind]) !== null && g !== void 0 ? g : [], o = -1, l = [], f && h.push(f), f = c;
    }
  } while (i !== void 0);
  return l.length !== 0 ? l[l.length - 1][1] : e;
}
function Tj(e, t) {
  const r = e[t];
  return typeof r == "object" ? r : typeof r == "function" ? {
    enter: r,
    leave: void 0
  } : {
    enter: e.enter,
    leave: e.leave
  };
}
function of(e) {
  return e === 9 || e === 32;
}
function ns(e) {
  return e >= 48 && e <= 57;
}
function tb(e) {
  return e >= 97 && e <= 122 || // A-Z
  e >= 65 && e <= 90;
}
function rb(e) {
  return tb(e) || e === 95;
}
function Mj(e) {
  return tb(e) || ns(e) || e === 95;
}
function Pj(e) {
  var t;
  let r = Number.MAX_SAFE_INTEGER, n = null, i = -1;
  for (let s = 0; s < e.length; ++s) {
    var a;
    const o = e[s], l = Bj(o);
    l !== o.length && (n = (a = n) !== null && a !== void 0 ? a : s, i = s, s !== 0 && l < r && (r = l));
  }
  return e.map((s, o) => o === 0 ? s : s.slice(r)).slice(
    (t = n) !== null && t !== void 0 ? t : 0,
    i + 1
  );
}
function Bj(e) {
  let t = 0;
  for (; t < e.length && of(e.charCodeAt(t)); )
    ++t;
  return t;
}
function Ij(e, t) {
  const r = e.replace(/"""/g, '\\"""'), n = r.split(/\r\n|[\n\r]/g), i = n.length === 1, a = n.length > 1 && n.slice(1).every((h) => h.length === 0 || of(h.charCodeAt(0))), s = r.endsWith('\\"""'), o = e.endsWith('"') && !s, l = e.endsWith("\\"), c = o || l, u = !(t != null && t.minimize) && // add leading and trailing new lines only if it improves readability
  (!i || e.length > 70 || c || a || s);
  let f = "";
  const d = i && of(e.charCodeAt(0));
  return (u && !d || a) && (f += `
`), f += r, (u || c) && (f += `
`), '"""' + f + '"""';
}
function Rj(e) {
  return `"${e.replace(Nj, Lj)}"`;
}
const Nj = /[\x00-\x1f\x22\x5c\x7f-\x9f]/g;
function Lj(e) {
  return jj[e.charCodeAt(0)];
}
const jj = [
  "\\u0000",
  "\\u0001",
  "\\u0002",
  "\\u0003",
  "\\u0004",
  "\\u0005",
  "\\u0006",
  "\\u0007",
  "\\b",
  "\\t",
  "\\n",
  "\\u000B",
  "\\f",
  "\\r",
  "\\u000E",
  "\\u000F",
  "\\u0010",
  "\\u0011",
  "\\u0012",
  "\\u0013",
  "\\u0014",
  "\\u0015",
  "\\u0016",
  "\\u0017",
  "\\u0018",
  "\\u0019",
  "\\u001A",
  "\\u001B",
  "\\u001C",
  "\\u001D",
  "\\u001E",
  "\\u001F",
  "",
  "",
  '\\"',
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  // 2F
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  // 3F
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  // 4F
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "\\\\",
  "",
  "",
  "",
  // 5F
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  // 6F
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "\\u007F",
  "\\u0080",
  "\\u0081",
  "\\u0082",
  "\\u0083",
  "\\u0084",
  "\\u0085",
  "\\u0086",
  "\\u0087",
  "\\u0088",
  "\\u0089",
  "\\u008A",
  "\\u008B",
  "\\u008C",
  "\\u008D",
  "\\u008E",
  "\\u008F",
  "\\u0090",
  "\\u0091",
  "\\u0092",
  "\\u0093",
  "\\u0094",
  "\\u0095",
  "\\u0096",
  "\\u0097",
  "\\u0098",
  "\\u0099",
  "\\u009A",
  "\\u009B",
  "\\u009C",
  "\\u009D",
  "\\u009E",
  "\\u009F"
];
function nb(e) {
  return eb(e, Hj);
}
const zj = 80, Hj = {
  Name: {
    leave: (e) => e.value
  },
  Variable: {
    leave: (e) => "$" + e.name
  },
  // Document
  Document: {
    leave: (e) => Q(e.definitions, `

`)
  },
  OperationDefinition: {
    leave(e) {
      const t = ge("(", Q(e.variableDefinitions, ", "), ")"), r = Q(
        [
          e.operation,
          Q([e.name, t]),
          Q(e.directives, " ")
        ],
        " "
      );
      return (r === "query" ? "" : r + " ") + e.selectionSet;
    }
  },
  VariableDefinition: {
    leave: ({ variable: e, type: t, defaultValue: r, directives: n }) => e + ": " + t + ge(" = ", r) + ge(" ", Q(n, " "))
  },
  SelectionSet: {
    leave: ({ selections: e }) => Jt(e)
  },
  Field: {
    leave({ alias: e, name: t, arguments: r, directives: n, selectionSet: i }) {
      const a = ge("", e, ": ") + t;
      let s = a + ge("(", Q(r, ", "), ")");
      return s.length > zj && (s = a + ge(`(
`, vo(Q(r, `
`)), `
)`)), Q([s, Q(n, " "), i], " ");
    }
  },
  Argument: {
    leave: ({ name: e, value: t }) => e + ": " + t
  },
  // Fragments
  FragmentSpread: {
    leave: ({ name: e, directives: t }) => "..." + e + ge(" ", Q(t, " "))
  },
  InlineFragment: {
    leave: ({ typeCondition: e, directives: t, selectionSet: r }) => Q(
      [
        "...",
        ge("on ", e),
        Q(t, " "),
        r
      ],
      " "
    )
  },
  FragmentDefinition: {
    leave: ({ name: e, typeCondition: t, variableDefinitions: r, directives: n, selectionSet: i }) => (
      // or removed in the future.
      `fragment ${e}${ge("(", Q(r, ", "), ")")} on ${t} ${ge("", Q(n, " "), " ")}` + i
    )
  },
  // Value
  IntValue: {
    leave: ({ value: e }) => e
  },
  FloatValue: {
    leave: ({ value: e }) => e
  },
  StringValue: {
    leave: ({ value: e, block: t }) => t ? Ij(e) : Rj(e)
  },
  BooleanValue: {
    leave: ({ value: e }) => e ? "true" : "false"
  },
  NullValue: {
    leave: () => "null"
  },
  EnumValue: {
    leave: ({ value: e }) => e
  },
  ListValue: {
    leave: ({ values: e }) => "[" + Q(e, ", ") + "]"
  },
  ObjectValue: {
    leave: ({ fields: e }) => "{" + Q(e, ", ") + "}"
  },
  ObjectField: {
    leave: ({ name: e, value: t }) => e + ": " + t
  },
  // Directive
  Directive: {
    leave: ({ name: e, arguments: t }) => "@" + e + ge("(", Q(t, ", "), ")")
  },
  // Type
  NamedType: {
    leave: ({ name: e }) => e
  },
  ListType: {
    leave: ({ type: e }) => "[" + e + "]"
  },
  NonNullType: {
    leave: ({ type: e }) => e + "!"
  },
  // Type System Definitions
  SchemaDefinition: {
    leave: ({ description: e, directives: t, operationTypes: r }) => ge("", e, `
`) + Q(["schema", Q(t, " "), Jt(r)], " ")
  },
  OperationTypeDefinition: {
    leave: ({ operation: e, type: t }) => e + ": " + t
  },
  ScalarTypeDefinition: {
    leave: ({ description: e, name: t, directives: r }) => ge("", e, `
`) + Q(["scalar", t, Q(r, " ")], " ")
  },
  ObjectTypeDefinition: {
    leave: ({ description: e, name: t, interfaces: r, directives: n, fields: i }) => ge("", e, `
`) + Q(
      [
        "type",
        t,
        ge("implements ", Q(r, " & ")),
        Q(n, " "),
        Jt(i)
      ],
      " "
    )
  },
  FieldDefinition: {
    leave: ({ description: e, name: t, arguments: r, type: n, directives: i }) => ge("", e, `
`) + t + (Tv(r) ? ge(`(
`, vo(Q(r, `
`)), `
)`) : ge("(", Q(r, ", "), ")")) + ": " + n + ge(" ", Q(i, " "))
  },
  InputValueDefinition: {
    leave: ({ description: e, name: t, type: r, defaultValue: n, directives: i }) => ge("", e, `
`) + Q(
      [t + ": " + r, ge("= ", n), Q(i, " ")],
      " "
    )
  },
  InterfaceTypeDefinition: {
    leave: ({ description: e, name: t, interfaces: r, directives: n, fields: i }) => ge("", e, `
`) + Q(
      [
        "interface",
        t,
        ge("implements ", Q(r, " & ")),
        Q(n, " "),
        Jt(i)
      ],
      " "
    )
  },
  UnionTypeDefinition: {
    leave: ({ description: e, name: t, directives: r, types: n }) => ge("", e, `
`) + Q(
      ["union", t, Q(r, " "), ge("= ", Q(n, " | "))],
      " "
    )
  },
  EnumTypeDefinition: {
    leave: ({ description: e, name: t, directives: r, values: n }) => ge("", e, `
`) + Q(["enum", t, Q(r, " "), Jt(n)], " ")
  },
  EnumValueDefinition: {
    leave: ({ description: e, name: t, directives: r }) => ge("", e, `
`) + Q([t, Q(r, " ")], " ")
  },
  InputObjectTypeDefinition: {
    leave: ({ description: e, name: t, directives: r, fields: n }) => ge("", e, `
`) + Q(["input", t, Q(r, " "), Jt(n)], " ")
  },
  DirectiveDefinition: {
    leave: ({ description: e, name: t, arguments: r, repeatable: n, locations: i }) => ge("", e, `
`) + "directive @" + t + (Tv(r) ? ge(`(
`, vo(Q(r, `
`)), `
)`) : ge("(", Q(r, ", "), ")")) + (n ? " repeatable" : "") + " on " + Q(i, " | ")
  },
  SchemaExtension: {
    leave: ({ directives: e, operationTypes: t }) => Q(
      ["extend schema", Q(e, " "), Jt(t)],
      " "
    )
  },
  ScalarTypeExtension: {
    leave: ({ name: e, directives: t }) => Q(["extend scalar", e, Q(t, " ")], " ")
  },
  ObjectTypeExtension: {
    leave: ({ name: e, interfaces: t, directives: r, fields: n }) => Q(
      [
        "extend type",
        e,
        ge("implements ", Q(t, " & ")),
        Q(r, " "),
        Jt(n)
      ],
      " "
    )
  },
  InterfaceTypeExtension: {
    leave: ({ name: e, interfaces: t, directives: r, fields: n }) => Q(
      [
        "extend interface",
        e,
        ge("implements ", Q(t, " & ")),
        Q(r, " "),
        Jt(n)
      ],
      " "
    )
  },
  UnionTypeExtension: {
    leave: ({ name: e, directives: t, types: r }) => Q(
      [
        "extend union",
        e,
        Q(t, " "),
        ge("= ", Q(r, " | "))
      ],
      " "
    )
  },
  EnumTypeExtension: {
    leave: ({ name: e, directives: t, values: r }) => Q(["extend enum", e, Q(t, " "), Jt(r)], " ")
  },
  InputObjectTypeExtension: {
    leave: ({ name: e, directives: t, fields: r }) => Q(["extend input", e, Q(t, " "), Jt(r)], " ")
  }
};
function Q(e, t = "") {
  var r;
  return (r = e == null ? void 0 : e.filter((n) => n).join(t)) !== null && r !== void 0 ? r : "";
}
function Jt(e) {
  return ge(`{
`, vo(Q(e, `
`)), `
}`);
}
function ge(e, t, r = "") {
  return t != null && t !== "" ? e + t + r : "";
}
function vo(e) {
  return ge("  ", e.replace(/\n/g, `
  `));
}
function Tv(e) {
  var t;
  return (t = e == null ? void 0 : e.some((r) => r.includes(`
`))) !== null && t !== void 0 ? t : !1;
}
function Vj(e) {
  return typeof e == "object" && e !== null;
}
function Yj(e, t) {
  if (!!!e)
    throw new Error(
      t ?? "Unexpected invariant triggered."
    );
}
const Wj = /\r\n|[\n\r]/g;
function lf(e, t) {
  let r = 0, n = 1;
  for (const i of e.body.matchAll(Wj)) {
    if (typeof i.index == "number" || Yj(!1), i.index >= t)
      break;
    r = i.index + i[0].length, n += 1;
  }
  return {
    line: n,
    column: t + 1 - r
  };
}
function Uj(e) {
  return ib(
    e.source,
    lf(e.source, e.start)
  );
}
function ib(e, t) {
  const r = e.locationOffset.column - 1, n = "".padStart(r) + e.body, i = t.line - 1, a = e.locationOffset.line - 1, s = t.line + a, o = t.line === 1 ? r : 0, l = t.column + o, c = `${e.name}:${s}:${l}
`, u = n.split(/\r\n|[\n\r]/g), f = u[i];
  if (f.length > 120) {
    const d = Math.floor(l / 80), h = l % 80, p = [];
    for (let v = 0; v < f.length; v += 80)
      p.push(f.slice(v, v + 80));
    return c + Mv([
      [`${s} |`, p[0]],
      ...p.slice(1, d + 1).map((v) => ["|", v]),
      ["|", "^".padStart(h)],
      ["|", p[d + 1]]
    ]);
  }
  return c + Mv([
    // Lines specified like this: ["prefix", "string"],
    [`${s - 1} |`, u[i - 1]],
    [`${s} |`, f],
    ["|", "^".padStart(l)],
    [`${s + 1} |`, u[i + 1]]
  ]);
}
function Mv(e) {
  const t = e.filter(([n, i]) => i !== void 0), r = Math.max(...t.map(([n]) => n.length));
  return t.map(([n, i]) => n.padStart(r) + (i ? " " + i : "")).join(`
`);
}
function qj(e) {
  const t = e[0];
  return t == null || "kind" in t || "length" in t ? {
    nodes: t,
    source: e[1],
    positions: e[2],
    path: e[3],
    originalError: e[4],
    extensions: e[5]
  } : t;
}
class is extends Error {
  /**
   * An array of `{ line, column }` locations within the source GraphQL document
   * which correspond to this error.
   *
   * Errors during validation often contain multiple locations, for example to
   * point out two things with the same name. Errors during execution include a
   * single location, the field which produced the error.
   *
   * Enumerable, and appears in the result of JSON.stringify().
   */
  /**
   * An array describing the JSON-path into the execution response which
   * corresponds to this error. Only included for errors during execution.
   *
   * Enumerable, and appears in the result of JSON.stringify().
   */
  /**
   * An array of GraphQL AST Nodes corresponding to this error.
   */
  /**
   * The source GraphQL document for the first location of this error.
   *
   * Note that if this Error represents more than one node, the source may not
   * represent nodes after the first node.
   */
  /**
   * An array of character offsets within the source GraphQL document
   * which correspond to this error.
   */
  /**
   * The original error thrown from a field resolver during execution.
   */
  /**
   * Extension fields to add to the formatted error.
   */
  /**
   * @deprecated Please use the `GraphQLErrorOptions` constructor overload instead.
   */
  constructor(t, ...r) {
    var n, i, a;
    const { nodes: s, source: o, positions: l, path: c, originalError: u, extensions: f } = qj(r);
    super(t), this.name = "GraphQLError", this.path = c ?? void 0, this.originalError = u ?? void 0, this.nodes = Pv(
      Array.isArray(s) ? s : s ? [s] : void 0
    );
    const d = Pv(
      (n = this.nodes) === null || n === void 0 ? void 0 : n.map((p) => p.loc).filter((p) => p != null)
    );
    this.source = o ?? (d == null || (i = d[0]) === null || i === void 0 ? void 0 : i.source), this.positions = l ?? (d == null ? void 0 : d.map((p) => p.start)), this.locations = l && o ? l.map((p) => lf(o, p)) : d == null ? void 0 : d.map((p) => lf(p.source, p.start));
    const h = Vj(
      u == null ? void 0 : u.extensions
    ) ? u == null ? void 0 : u.extensions : void 0;
    this.extensions = (a = f ?? h) !== null && a !== void 0 ? a : /* @__PURE__ */ Object.create(null), Object.defineProperties(this, {
      message: {
        writable: !0,
        enumerable: !0
      },
      name: {
        enumerable: !1
      },
      nodes: {
        enumerable: !1
      },
      source: {
        enumerable: !1
      },
      positions: {
        enumerable: !1
      },
      originalError: {
        enumerable: !1
      }
    }), u != null && u.stack ? Object.defineProperty(this, "stack", {
      value: u.stack,
      writable: !0,
      configurable: !0
    }) : Error.captureStackTrace ? Error.captureStackTrace(this, is) : Object.defineProperty(this, "stack", {
      value: Error().stack,
      writable: !0,
      configurable: !0
    });
  }
  get [Symbol.toStringTag]() {
    return "GraphQLError";
  }
  toString() {
    let t = this.message;
    if (this.nodes)
      for (const r of this.nodes)
        r.loc && (t += `

` + Uj(r.loc));
    else if (this.source && this.locations)
      for (const r of this.locations)
        t += `

` + ib(this.source, r);
    return t;
  }
  toJSON() {
    const t = {
      message: this.message
    };
    return this.locations != null && (t.locations = this.locations), this.path != null && (t.path = this.path), this.extensions != null && Object.keys(this.extensions).length > 0 && (t.extensions = this.extensions), t;
  }
}
function Pv(e) {
  return e === void 0 || e.length === 0 ? void 0 : e;
}
function ft(e, t, r) {
  return new is(`Syntax Error: ${r}`, {
    source: e,
    positions: [t]
  });
}
let cf;
(function(e) {
  e.QUERY = "QUERY", e.MUTATION = "MUTATION", e.SUBSCRIPTION = "SUBSCRIPTION", e.FIELD = "FIELD", e.FRAGMENT_DEFINITION = "FRAGMENT_DEFINITION", e.FRAGMENT_SPREAD = "FRAGMENT_SPREAD", e.INLINE_FRAGMENT = "INLINE_FRAGMENT", e.VARIABLE_DEFINITION = "VARIABLE_DEFINITION", e.SCHEMA = "SCHEMA", e.SCALAR = "SCALAR", e.OBJECT = "OBJECT", e.FIELD_DEFINITION = "FIELD_DEFINITION", e.ARGUMENT_DEFINITION = "ARGUMENT_DEFINITION", e.INTERFACE = "INTERFACE", e.UNION = "UNION", e.ENUM = "ENUM", e.ENUM_VALUE = "ENUM_VALUE", e.INPUT_OBJECT = "INPUT_OBJECT", e.INPUT_FIELD_DEFINITION = "INPUT_FIELD_DEFINITION";
})(cf || (cf = {}));
let z;
(function(e) {
  e.SOF = "<SOF>", e.EOF = "<EOF>", e.BANG = "!", e.DOLLAR = "$", e.AMP = "&", e.PAREN_L = "(", e.PAREN_R = ")", e.SPREAD = "...", e.COLON = ":", e.EQUALS = "=", e.AT = "@", e.BRACKET_L = "[", e.BRACKET_R = "]", e.BRACE_L = "{", e.PIPE = "|", e.BRACE_R = "}", e.NAME = "Name", e.INT = "Int", e.FLOAT = "Float", e.STRING = "String", e.BLOCK_STRING = "BlockString", e.COMMENT = "Comment";
})(z || (z = {}));
class Gj {
  /**
   * The previously focused non-ignored token.
   */
  /**
   * The currently focused non-ignored token.
   */
  /**
   * The (1-indexed) line containing the current token.
   */
  /**
   * The character offset at which the current line begins.
   */
  constructor(t) {
    const r = new Jy(z.SOF, 0, 0, 0, 0);
    this.source = t, this.lastToken = r, this.token = r, this.line = 1, this.lineStart = 0;
  }
  get [Symbol.toStringTag]() {
    return "Lexer";
  }
  /**
   * Advances the token stream to the next non-ignored token.
   */
  advance() {
    return this.lastToken = this.token, this.token = this.lookahead();
  }
  /**
   * Looks ahead and returns the next non-ignored token, but does not change
   * the state of Lexer.
   */
  lookahead() {
    let t = this.token;
    if (t.kind !== z.EOF)
      do
        if (t.next)
          t = t.next;
        else {
          const r = Zj(this, t.end);
          t.next = r, r.prev = t, t = r;
        }
      while (t.kind === z.COMMENT);
    return t;
  }
}
function Kj(e) {
  return e === z.BANG || e === z.DOLLAR || e === z.AMP || e === z.PAREN_L || e === z.PAREN_R || e === z.SPREAD || e === z.COLON || e === z.EQUALS || e === z.AT || e === z.BRACKET_L || e === z.BRACKET_R || e === z.BRACE_L || e === z.PIPE || e === z.BRACE_R;
}
function Qi(e) {
  return e >= 0 && e <= 55295 || e >= 57344 && e <= 1114111;
}
function Ul(e, t) {
  return ab(e.charCodeAt(t)) && sb(e.charCodeAt(t + 1));
}
function ab(e) {
  return e >= 55296 && e <= 56319;
}
function sb(e) {
  return e >= 56320 && e <= 57343;
}
function Vn(e, t) {
  const r = e.source.body.codePointAt(t);
  if (r === void 0)
    return z.EOF;
  if (r >= 32 && r <= 126) {
    const n = String.fromCodePoint(r);
    return n === '"' ? `'"'` : `"${n}"`;
  }
  return "U+" + r.toString(16).toUpperCase().padStart(4, "0");
}
function Je(e, t, r, n, i) {
  const a = e.line, s = 1 + r - e.lineStart;
  return new Jy(t, r, n, a, s, i);
}
function Zj(e, t) {
  const r = e.source.body, n = r.length;
  let i = t;
  for (; i < n; ) {
    const a = r.charCodeAt(i);
    switch (a) {
      case 65279:
      case 9:
      case 32:
      case 44:
        ++i;
        continue;
      case 10:
        ++i, ++e.line, e.lineStart = i;
        continue;
      case 13:
        r.charCodeAt(i + 1) === 10 ? i += 2 : ++i, ++e.line, e.lineStart = i;
        continue;
      case 35:
        return Xj(e, i);
      case 33:
        return Je(e, z.BANG, i, i + 1);
      case 36:
        return Je(e, z.DOLLAR, i, i + 1);
      case 38:
        return Je(e, z.AMP, i, i + 1);
      case 40:
        return Je(e, z.PAREN_L, i, i + 1);
      case 41:
        return Je(e, z.PAREN_R, i, i + 1);
      case 46:
        if (r.charCodeAt(i + 1) === 46 && r.charCodeAt(i + 2) === 46)
          return Je(e, z.SPREAD, i, i + 3);
        break;
      case 58:
        return Je(e, z.COLON, i, i + 1);
      case 61:
        return Je(e, z.EQUALS, i, i + 1);
      case 64:
        return Je(e, z.AT, i, i + 1);
      case 91:
        return Je(e, z.BRACKET_L, i, i + 1);
      case 93:
        return Je(e, z.BRACKET_R, i, i + 1);
      case 123:
        return Je(e, z.BRACE_L, i, i + 1);
      case 124:
        return Je(e, z.PIPE, i, i + 1);
      case 125:
        return Je(e, z.BRACE_R, i, i + 1);
      case 34:
        return r.charCodeAt(i + 1) === 34 && r.charCodeAt(i + 2) === 34 ? nz(e, i) : Qj(e, i);
    }
    if (ns(a) || a === 45)
      return Jj(e, i, a);
    if (rb(a))
      return iz(e, i);
    throw ft(
      e.source,
      i,
      a === 39 ? `Unexpected single quote character ('), did you mean to use a double quote (")?` : Qi(a) || Ul(r, i) ? `Unexpected character: ${Vn(e, i)}.` : `Invalid character: ${Vn(e, i)}.`
    );
  }
  return Je(e, z.EOF, n, n);
}
function Xj(e, t) {
  const r = e.source.body, n = r.length;
  let i = t + 1;
  for (; i < n; ) {
    const a = r.charCodeAt(i);
    if (a === 10 || a === 13)
      break;
    if (Qi(a))
      ++i;
    else if (Ul(r, i))
      i += 2;
    else
      break;
  }
  return Je(
    e,
    z.COMMENT,
    t,
    i,
    r.slice(t + 1, i)
  );
}
function Jj(e, t, r) {
  const n = e.source.body;
  let i = t, a = r, s = !1;
  if (a === 45 && (a = n.charCodeAt(++i)), a === 48) {
    if (a = n.charCodeAt(++i), ns(a))
      throw ft(
        e.source,
        i,
        `Invalid number, unexpected digit after 0: ${Vn(
          e,
          i
        )}.`
      );
  } else
    i = Dc(e, i, a), a = n.charCodeAt(i);
  if (a === 46 && (s = !0, a = n.charCodeAt(++i), i = Dc(e, i, a), a = n.charCodeAt(i)), (a === 69 || a === 101) && (s = !0, a = n.charCodeAt(++i), (a === 43 || a === 45) && (a = n.charCodeAt(++i)), i = Dc(e, i, a), a = n.charCodeAt(i)), a === 46 || rb(a))
    throw ft(
      e.source,
      i,
      `Invalid number, expected digit but got: ${Vn(
        e,
        i
      )}.`
    );
  return Je(
    e,
    s ? z.FLOAT : z.INT,
    t,
    i,
    n.slice(t, i)
  );
}
function Dc(e, t, r) {
  if (!ns(r))
    throw ft(
      e.source,
      t,
      `Invalid number, expected digit but got: ${Vn(
        e,
        t
      )}.`
    );
  const n = e.source.body;
  let i = t + 1;
  for (; ns(n.charCodeAt(i)); )
    ++i;
  return i;
}
function Qj(e, t) {
  const r = e.source.body, n = r.length;
  let i = t + 1, a = i, s = "";
  for (; i < n; ) {
    const o = r.charCodeAt(i);
    if (o === 34)
      return s += r.slice(a, i), Je(e, z.STRING, t, i + 1, s);
    if (o === 92) {
      s += r.slice(a, i);
      const l = r.charCodeAt(i + 1) === 117 ? r.charCodeAt(i + 2) === 123 ? ez(e, i) : tz(e, i) : rz(e, i);
      s += l.value, i += l.size, a = i;
      continue;
    }
    if (o === 10 || o === 13)
      break;
    if (Qi(o))
      ++i;
    else if (Ul(r, i))
      i += 2;
    else
      throw ft(
        e.source,
        i,
        `Invalid character within String: ${Vn(
          e,
          i
        )}.`
      );
  }
  throw ft(e.source, i, "Unterminated string.");
}
function ez(e, t) {
  const r = e.source.body;
  let n = 0, i = 3;
  for (; i < 12; ) {
    const a = r.charCodeAt(t + i++);
    if (a === 125) {
      if (i < 5 || !Qi(n))
        break;
      return {
        value: String.fromCodePoint(n),
        size: i
      };
    }
    if (n = n << 4 | ka(a), n < 0)
      break;
  }
  throw ft(
    e.source,
    t,
    `Invalid Unicode escape sequence: "${r.slice(
      t,
      t + i
    )}".`
  );
}
function tz(e, t) {
  const r = e.source.body, n = Bv(r, t + 2);
  if (Qi(n))
    return {
      value: String.fromCodePoint(n),
      size: 6
    };
  if (ab(n) && r.charCodeAt(t + 6) === 92 && r.charCodeAt(t + 7) === 117) {
    const i = Bv(r, t + 8);
    if (sb(i))
      return {
        value: String.fromCodePoint(n, i),
        size: 12
      };
  }
  throw ft(
    e.source,
    t,
    `Invalid Unicode escape sequence: "${r.slice(t, t + 6)}".`
  );
}
function Bv(e, t) {
  return ka(e.charCodeAt(t)) << 12 | ka(e.charCodeAt(t + 1)) << 8 | ka(e.charCodeAt(t + 2)) << 4 | ka(e.charCodeAt(t + 3));
}
function ka(e) {
  return e >= 48 && e <= 57 ? e - 48 : e >= 65 && e <= 70 ? e - 55 : e >= 97 && e <= 102 ? e - 87 : -1;
}
function rz(e, t) {
  const r = e.source.body;
  switch (r.charCodeAt(t + 1)) {
    case 34:
      return {
        value: '"',
        size: 2
      };
    case 92:
      return {
        value: "\\",
        size: 2
      };
    case 47:
      return {
        value: "/",
        size: 2
      };
    case 98:
      return {
        value: "\b",
        size: 2
      };
    case 102:
      return {
        value: "\f",
        size: 2
      };
    case 110:
      return {
        value: `
`,
        size: 2
      };
    case 114:
      return {
        value: "\r",
        size: 2
      };
    case 116:
      return {
        value: "	",
        size: 2
      };
  }
  throw ft(
    e.source,
    t,
    `Invalid character escape sequence: "${r.slice(
      t,
      t + 2
    )}".`
  );
}
function nz(e, t) {
  const r = e.source.body, n = r.length;
  let i = e.lineStart, a = t + 3, s = a, o = "";
  const l = [];
  for (; a < n; ) {
    const c = r.charCodeAt(a);
    if (c === 34 && r.charCodeAt(a + 1) === 34 && r.charCodeAt(a + 2) === 34) {
      o += r.slice(s, a), l.push(o);
      const u = Je(
        e,
        z.BLOCK_STRING,
        t,
        a + 3,
        // Return a string of the lines joined with U+000A.
        Pj(l).join(`
`)
      );
      return e.line += l.length - 1, e.lineStart = i, u;
    }
    if (c === 92 && r.charCodeAt(a + 1) === 34 && r.charCodeAt(a + 2) === 34 && r.charCodeAt(a + 3) === 34) {
      o += r.slice(s, a), s = a + 1, a += 4;
      continue;
    }
    if (c === 10 || c === 13) {
      o += r.slice(s, a), l.push(o), c === 13 && r.charCodeAt(a + 1) === 10 ? a += 2 : ++a, o = "", s = a, i = a;
      continue;
    }
    if (Qi(c))
      ++a;
    else if (Ul(r, a))
      a += 2;
    else
      throw ft(
        e.source,
        a,
        `Invalid character within String: ${Vn(
          e,
          a
        )}.`
      );
  }
  throw ft(e.source, a, "Unterminated string.");
}
function iz(e, t) {
  const r = e.source.body, n = r.length;
  let i = t + 1;
  for (; i < n; ) {
    const a = r.charCodeAt(i);
    if (Mj(a))
      ++i;
    else
      break;
  }
  return Je(
    e,
    z.NAME,
    t,
    i,
    r.slice(t, i)
  );
}
const az = (
  /* c8 ignore next 6 */
  // FIXME: https://github.com/graphql/graphql-js/issues/2317
  // eslint-disable-next-line no-undef
  process.env.NODE_ENV === "production" ? function(t, r) {
    return t instanceof r;
  } : function(t, r) {
    if (t instanceof r)
      return !0;
    if (typeof t == "object" && t !== null) {
      var n;
      const i = r.prototype[Symbol.toStringTag], a = (
        // We still need to support constructor's name to detect conflicts with older versions of this library.
        Symbol.toStringTag in t ? t[Symbol.toStringTag] : (n = t.constructor) === null || n === void 0 ? void 0 : n.name
      );
      if (i === a) {
        const s = G0(t);
        throw new Error(`Cannot use ${i} "${s}" from another module or realm.

Ensure that there is only one instance of "graphql" in the node_modules
directory. If different versions of "graphql" are the dependencies of other
relied on modules, use "resolutions" to ensure only one version is installed.

https://yarnpkg.com/en/docs/selective-version-resolutions

Duplicate "graphql" modules cannot be used at the same time since different
versions may have different capabilities and behavior. The data from one
version used in the function from another could produce confusing and
spurious results.`);
      }
    }
    return !1;
  }
);
class ob {
  constructor(t, r = "GraphQL request", n = {
    line: 1,
    column: 1
  }) {
    typeof t == "string" || po(!1, `Body must be a string. Received: ${G0(t)}.`), this.body = t, this.name = r, this.locationOffset = n, this.locationOffset.line > 0 || po(
      !1,
      "line in locationOffset is 1-indexed and must be positive."
    ), this.locationOffset.column > 0 || po(
      !1,
      "column in locationOffset is 1-indexed and must be positive."
    );
  }
  get [Symbol.toStringTag]() {
    return "Source";
  }
}
function sz(e) {
  return az(e, ob);
}
function oz(e, t) {
  return new lz(e, t).parseDocument();
}
class lz {
  constructor(t, r) {
    const n = sz(t) ? t : new ob(t);
    this._lexer = new Gj(n), this._options = r;
  }
  /**
   * Converts a name lex token into a name parse node.
   */
  parseName() {
    const t = this.expectToken(z.NAME);
    return this.node(t, {
      kind: ie.NAME,
      value: t.value
    });
  }
  // Implements the parsing rules in the Document section.
  /**
   * Document : Definition+
   */
  parseDocument() {
    return this.node(this._lexer.token, {
      kind: ie.DOCUMENT,
      definitions: this.many(
        z.SOF,
        this.parseDefinition,
        z.EOF
      )
    });
  }
  /**
   * Definition :
   *   - ExecutableDefinition
   *   - TypeSystemDefinition
   *   - TypeSystemExtension
   *
   * ExecutableDefinition :
   *   - OperationDefinition
   *   - FragmentDefinition
   *
   * TypeSystemDefinition :
   *   - SchemaDefinition
   *   - TypeDefinition
   *   - DirectiveDefinition
   *
   * TypeDefinition :
   *   - ScalarTypeDefinition
   *   - ObjectTypeDefinition
   *   - InterfaceTypeDefinition
   *   - UnionTypeDefinition
   *   - EnumTypeDefinition
   *   - InputObjectTypeDefinition
   */
  parseDefinition() {
    if (this.peek(z.BRACE_L))
      return this.parseOperationDefinition();
    const t = this.peekDescription(), r = t ? this._lexer.lookahead() : this._lexer.token;
    if (r.kind === z.NAME) {
      switch (r.value) {
        case "schema":
          return this.parseSchemaDefinition();
        case "scalar":
          return this.parseScalarTypeDefinition();
        case "type":
          return this.parseObjectTypeDefinition();
        case "interface":
          return this.parseInterfaceTypeDefinition();
        case "union":
          return this.parseUnionTypeDefinition();
        case "enum":
          return this.parseEnumTypeDefinition();
        case "input":
          return this.parseInputObjectTypeDefinition();
        case "directive":
          return this.parseDirectiveDefinition();
      }
      if (t)
        throw ft(
          this._lexer.source,
          this._lexer.token.start,
          "Unexpected description, descriptions are supported only on type definitions."
        );
      switch (r.value) {
        case "query":
        case "mutation":
        case "subscription":
          return this.parseOperationDefinition();
        case "fragment":
          return this.parseFragmentDefinition();
        case "extend":
          return this.parseTypeSystemExtension();
      }
    }
    throw this.unexpected(r);
  }
  // Implements the parsing rules in the Operations section.
  /**
   * OperationDefinition :
   *  - SelectionSet
   *  - OperationType Name? VariableDefinitions? Directives? SelectionSet
   */
  parseOperationDefinition() {
    const t = this._lexer.token;
    if (this.peek(z.BRACE_L))
      return this.node(t, {
        kind: ie.OPERATION_DEFINITION,
        operation: mi.QUERY,
        name: void 0,
        variableDefinitions: [],
        directives: [],
        selectionSet: this.parseSelectionSet()
      });
    const r = this.parseOperationType();
    let n;
    return this.peek(z.NAME) && (n = this.parseName()), this.node(t, {
      kind: ie.OPERATION_DEFINITION,
      operation: r,
      name: n,
      variableDefinitions: this.parseVariableDefinitions(),
      directives: this.parseDirectives(!1),
      selectionSet: this.parseSelectionSet()
    });
  }
  /**
   * OperationType : one of query mutation subscription
   */
  parseOperationType() {
    const t = this.expectToken(z.NAME);
    switch (t.value) {
      case "query":
        return mi.QUERY;
      case "mutation":
        return mi.MUTATION;
      case "subscription":
        return mi.SUBSCRIPTION;
    }
    throw this.unexpected(t);
  }
  /**
   * VariableDefinitions : ( VariableDefinition+ )
   */
  parseVariableDefinitions() {
    return this.optionalMany(
      z.PAREN_L,
      this.parseVariableDefinition,
      z.PAREN_R
    );
  }
  /**
   * VariableDefinition : Variable : Type DefaultValue? Directives[Const]?
   */
  parseVariableDefinition() {
    return this.node(this._lexer.token, {
      kind: ie.VARIABLE_DEFINITION,
      variable: this.parseVariable(),
      type: (this.expectToken(z.COLON), this.parseTypeReference()),
      defaultValue: this.expectOptionalToken(z.EQUALS) ? this.parseConstValueLiteral() : void 0,
      directives: this.parseConstDirectives()
    });
  }
  /**
   * Variable : $ Name
   */
  parseVariable() {
    const t = this._lexer.token;
    return this.expectToken(z.DOLLAR), this.node(t, {
      kind: ie.VARIABLE,
      name: this.parseName()
    });
  }
  /**
   * ```
   * SelectionSet : { Selection+ }
   * ```
   */
  parseSelectionSet() {
    return this.node(this._lexer.token, {
      kind: ie.SELECTION_SET,
      selections: this.many(
        z.BRACE_L,
        this.parseSelection,
        z.BRACE_R
      )
    });
  }
  /**
   * Selection :
   *   - Field
   *   - FragmentSpread
   *   - InlineFragment
   */
  parseSelection() {
    return this.peek(z.SPREAD) ? this.parseFragment() : this.parseField();
  }
  /**
   * Field : Alias? Name Arguments? Directives? SelectionSet?
   *
   * Alias : Name :
   */
  parseField() {
    const t = this._lexer.token, r = this.parseName();
    let n, i;
    return this.expectOptionalToken(z.COLON) ? (n = r, i = this.parseName()) : i = r, this.node(t, {
      kind: ie.FIELD,
      alias: n,
      name: i,
      arguments: this.parseArguments(!1),
      directives: this.parseDirectives(!1),
      selectionSet: this.peek(z.BRACE_L) ? this.parseSelectionSet() : void 0
    });
  }
  /**
   * Arguments[Const] : ( Argument[?Const]+ )
   */
  parseArguments(t) {
    const r = t ? this.parseConstArgument : this.parseArgument;
    return this.optionalMany(z.PAREN_L, r, z.PAREN_R);
  }
  /**
   * Argument[Const] : Name : Value[?Const]
   */
  parseArgument(t = !1) {
    const r = this._lexer.token, n = this.parseName();
    return this.expectToken(z.COLON), this.node(r, {
      kind: ie.ARGUMENT,
      name: n,
      value: this.parseValueLiteral(t)
    });
  }
  parseConstArgument() {
    return this.parseArgument(!0);
  }
  // Implements the parsing rules in the Fragments section.
  /**
   * Corresponds to both FragmentSpread and InlineFragment in the spec.
   *
   * FragmentSpread : ... FragmentName Directives?
   *
   * InlineFragment : ... TypeCondition? Directives? SelectionSet
   */
  parseFragment() {
    const t = this._lexer.token;
    this.expectToken(z.SPREAD);
    const r = this.expectOptionalKeyword("on");
    return !r && this.peek(z.NAME) ? this.node(t, {
      kind: ie.FRAGMENT_SPREAD,
      name: this.parseFragmentName(),
      directives: this.parseDirectives(!1)
    }) : this.node(t, {
      kind: ie.INLINE_FRAGMENT,
      typeCondition: r ? this.parseNamedType() : void 0,
      directives: this.parseDirectives(!1),
      selectionSet: this.parseSelectionSet()
    });
  }
  /**
   * FragmentDefinition :
   *   - fragment FragmentName on TypeCondition Directives? SelectionSet
   *
   * TypeCondition : NamedType
   */
  parseFragmentDefinition() {
    var t;
    const r = this._lexer.token;
    return this.expectKeyword("fragment"), ((t = this._options) === null || t === void 0 ? void 0 : t.allowLegacyFragmentVariables) === !0 ? this.node(r, {
      kind: ie.FRAGMENT_DEFINITION,
      name: this.parseFragmentName(),
      variableDefinitions: this.parseVariableDefinitions(),
      typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
      directives: this.parseDirectives(!1),
      selectionSet: this.parseSelectionSet()
    }) : this.node(r, {
      kind: ie.FRAGMENT_DEFINITION,
      name: this.parseFragmentName(),
      typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
      directives: this.parseDirectives(!1),
      selectionSet: this.parseSelectionSet()
    });
  }
  /**
   * FragmentName : Name but not `on`
   */
  parseFragmentName() {
    if (this._lexer.token.value === "on")
      throw this.unexpected();
    return this.parseName();
  }
  // Implements the parsing rules in the Values section.
  /**
   * Value[Const] :
   *   - [~Const] Variable
   *   - IntValue
   *   - FloatValue
   *   - StringValue
   *   - BooleanValue
   *   - NullValue
   *   - EnumValue
   *   - ListValue[?Const]
   *   - ObjectValue[?Const]
   *
   * BooleanValue : one of `true` `false`
   *
   * NullValue : `null`
   *
   * EnumValue : Name but not `true`, `false` or `null`
   */
  parseValueLiteral(t) {
    const r = this._lexer.token;
    switch (r.kind) {
      case z.BRACKET_L:
        return this.parseList(t);
      case z.BRACE_L:
        return this.parseObject(t);
      case z.INT:
        return this._lexer.advance(), this.node(r, {
          kind: ie.INT,
          value: r.value
        });
      case z.FLOAT:
        return this._lexer.advance(), this.node(r, {
          kind: ie.FLOAT,
          value: r.value
        });
      case z.STRING:
      case z.BLOCK_STRING:
        return this.parseStringLiteral();
      case z.NAME:
        switch (this._lexer.advance(), r.value) {
          case "true":
            return this.node(r, {
              kind: ie.BOOLEAN,
              value: !0
            });
          case "false":
            return this.node(r, {
              kind: ie.BOOLEAN,
              value: !1
            });
          case "null":
            return this.node(r, {
              kind: ie.NULL
            });
          default:
            return this.node(r, {
              kind: ie.ENUM,
              value: r.value
            });
        }
      case z.DOLLAR:
        if (t)
          if (this.expectToken(z.DOLLAR), this._lexer.token.kind === z.NAME) {
            const n = this._lexer.token.value;
            throw ft(
              this._lexer.source,
              r.start,
              `Unexpected variable "$${n}" in constant value.`
            );
          } else
            throw this.unexpected(r);
        return this.parseVariable();
      default:
        throw this.unexpected();
    }
  }
  parseConstValueLiteral() {
    return this.parseValueLiteral(!0);
  }
  parseStringLiteral() {
    const t = this._lexer.token;
    return this._lexer.advance(), this.node(t, {
      kind: ie.STRING,
      value: t.value,
      block: t.kind === z.BLOCK_STRING
    });
  }
  /**
   * ListValue[Const] :
   *   - [ ]
   *   - [ Value[?Const]+ ]
   */
  parseList(t) {
    const r = () => this.parseValueLiteral(t);
    return this.node(this._lexer.token, {
      kind: ie.LIST,
      values: this.any(z.BRACKET_L, r, z.BRACKET_R)
    });
  }
  /**
   * ```
   * ObjectValue[Const] :
   *   - { }
   *   - { ObjectField[?Const]+ }
   * ```
   */
  parseObject(t) {
    const r = () => this.parseObjectField(t);
    return this.node(this._lexer.token, {
      kind: ie.OBJECT,
      fields: this.any(z.BRACE_L, r, z.BRACE_R)
    });
  }
  /**
   * ObjectField[Const] : Name : Value[?Const]
   */
  parseObjectField(t) {
    const r = this._lexer.token, n = this.parseName();
    return this.expectToken(z.COLON), this.node(r, {
      kind: ie.OBJECT_FIELD,
      name: n,
      value: this.parseValueLiteral(t)
    });
  }
  // Implements the parsing rules in the Directives section.
  /**
   * Directives[Const] : Directive[?Const]+
   */
  parseDirectives(t) {
    const r = [];
    for (; this.peek(z.AT); )
      r.push(this.parseDirective(t));
    return r;
  }
  parseConstDirectives() {
    return this.parseDirectives(!0);
  }
  /**
   * ```
   * Directive[Const] : @ Name Arguments[?Const]?
   * ```
   */
  parseDirective(t) {
    const r = this._lexer.token;
    return this.expectToken(z.AT), this.node(r, {
      kind: ie.DIRECTIVE,
      name: this.parseName(),
      arguments: this.parseArguments(t)
    });
  }
  // Implements the parsing rules in the Types section.
  /**
   * Type :
   *   - NamedType
   *   - ListType
   *   - NonNullType
   */
  parseTypeReference() {
    const t = this._lexer.token;
    let r;
    if (this.expectOptionalToken(z.BRACKET_L)) {
      const n = this.parseTypeReference();
      this.expectToken(z.BRACKET_R), r = this.node(t, {
        kind: ie.LIST_TYPE,
        type: n
      });
    } else
      r = this.parseNamedType();
    return this.expectOptionalToken(z.BANG) ? this.node(t, {
      kind: ie.NON_NULL_TYPE,
      type: r
    }) : r;
  }
  /**
   * NamedType : Name
   */
  parseNamedType() {
    return this.node(this._lexer.token, {
      kind: ie.NAMED_TYPE,
      name: this.parseName()
    });
  }
  // Implements the parsing rules in the Type Definition section.
  peekDescription() {
    return this.peek(z.STRING) || this.peek(z.BLOCK_STRING);
  }
  /**
   * Description : StringValue
   */
  parseDescription() {
    if (this.peekDescription())
      return this.parseStringLiteral();
  }
  /**
   * ```
   * SchemaDefinition : Description? schema Directives[Const]? { OperationTypeDefinition+ }
   * ```
   */
  parseSchemaDefinition() {
    const t = this._lexer.token, r = this.parseDescription();
    this.expectKeyword("schema");
    const n = this.parseConstDirectives(), i = this.many(
      z.BRACE_L,
      this.parseOperationTypeDefinition,
      z.BRACE_R
    );
    return this.node(t, {
      kind: ie.SCHEMA_DEFINITION,
      description: r,
      directives: n,
      operationTypes: i
    });
  }
  /**
   * OperationTypeDefinition : OperationType : NamedType
   */
  parseOperationTypeDefinition() {
    const t = this._lexer.token, r = this.parseOperationType();
    this.expectToken(z.COLON);
    const n = this.parseNamedType();
    return this.node(t, {
      kind: ie.OPERATION_TYPE_DEFINITION,
      operation: r,
      type: n
    });
  }
  /**
   * ScalarTypeDefinition : Description? scalar Name Directives[Const]?
   */
  parseScalarTypeDefinition() {
    const t = this._lexer.token, r = this.parseDescription();
    this.expectKeyword("scalar");
    const n = this.parseName(), i = this.parseConstDirectives();
    return this.node(t, {
      kind: ie.SCALAR_TYPE_DEFINITION,
      description: r,
      name: n,
      directives: i
    });
  }
  /**
   * ObjectTypeDefinition :
   *   Description?
   *   type Name ImplementsInterfaces? Directives[Const]? FieldsDefinition?
   */
  parseObjectTypeDefinition() {
    const t = this._lexer.token, r = this.parseDescription();
    this.expectKeyword("type");
    const n = this.parseName(), i = this.parseImplementsInterfaces(), a = this.parseConstDirectives(), s = this.parseFieldsDefinition();
    return this.node(t, {
      kind: ie.OBJECT_TYPE_DEFINITION,
      description: r,
      name: n,
      interfaces: i,
      directives: a,
      fields: s
    });
  }
  /**
   * ImplementsInterfaces :
   *   - implements `&`? NamedType
   *   - ImplementsInterfaces & NamedType
   */
  parseImplementsInterfaces() {
    return this.expectOptionalKeyword("implements") ? this.delimitedMany(z.AMP, this.parseNamedType) : [];
  }
  /**
   * ```
   * FieldsDefinition : { FieldDefinition+ }
   * ```
   */
  parseFieldsDefinition() {
    return this.optionalMany(
      z.BRACE_L,
      this.parseFieldDefinition,
      z.BRACE_R
    );
  }
  /**
   * FieldDefinition :
   *   - Description? Name ArgumentsDefinition? : Type Directives[Const]?
   */
  parseFieldDefinition() {
    const t = this._lexer.token, r = this.parseDescription(), n = this.parseName(), i = this.parseArgumentDefs();
    this.expectToken(z.COLON);
    const a = this.parseTypeReference(), s = this.parseConstDirectives();
    return this.node(t, {
      kind: ie.FIELD_DEFINITION,
      description: r,
      name: n,
      arguments: i,
      type: a,
      directives: s
    });
  }
  /**
   * ArgumentsDefinition : ( InputValueDefinition+ )
   */
  parseArgumentDefs() {
    return this.optionalMany(
      z.PAREN_L,
      this.parseInputValueDef,
      z.PAREN_R
    );
  }
  /**
   * InputValueDefinition :
   *   - Description? Name : Type DefaultValue? Directives[Const]?
   */
  parseInputValueDef() {
    const t = this._lexer.token, r = this.parseDescription(), n = this.parseName();
    this.expectToken(z.COLON);
    const i = this.parseTypeReference();
    let a;
    this.expectOptionalToken(z.EQUALS) && (a = this.parseConstValueLiteral());
    const s = this.parseConstDirectives();
    return this.node(t, {
      kind: ie.INPUT_VALUE_DEFINITION,
      description: r,
      name: n,
      type: i,
      defaultValue: a,
      directives: s
    });
  }
  /**
   * InterfaceTypeDefinition :
   *   - Description? interface Name Directives[Const]? FieldsDefinition?
   */
  parseInterfaceTypeDefinition() {
    const t = this._lexer.token, r = this.parseDescription();
    this.expectKeyword("interface");
    const n = this.parseName(), i = this.parseImplementsInterfaces(), a = this.parseConstDirectives(), s = this.parseFieldsDefinition();
    return this.node(t, {
      kind: ie.INTERFACE_TYPE_DEFINITION,
      description: r,
      name: n,
      interfaces: i,
      directives: a,
      fields: s
    });
  }
  /**
   * UnionTypeDefinition :
   *   - Description? union Name Directives[Const]? UnionMemberTypes?
   */
  parseUnionTypeDefinition() {
    const t = this._lexer.token, r = this.parseDescription();
    this.expectKeyword("union");
    const n = this.parseName(), i = this.parseConstDirectives(), a = this.parseUnionMemberTypes();
    return this.node(t, {
      kind: ie.UNION_TYPE_DEFINITION,
      description: r,
      name: n,
      directives: i,
      types: a
    });
  }
  /**
   * UnionMemberTypes :
   *   - = `|`? NamedType
   *   - UnionMemberTypes | NamedType
   */
  parseUnionMemberTypes() {
    return this.expectOptionalToken(z.EQUALS) ? this.delimitedMany(z.PIPE, this.parseNamedType) : [];
  }
  /**
   * EnumTypeDefinition :
   *   - Description? enum Name Directives[Const]? EnumValuesDefinition?
   */
  parseEnumTypeDefinition() {
    const t = this._lexer.token, r = this.parseDescription();
    this.expectKeyword("enum");
    const n = this.parseName(), i = this.parseConstDirectives(), a = this.parseEnumValuesDefinition();
    return this.node(t, {
      kind: ie.ENUM_TYPE_DEFINITION,
      description: r,
      name: n,
      directives: i,
      values: a
    });
  }
  /**
   * ```
   * EnumValuesDefinition : { EnumValueDefinition+ }
   * ```
   */
  parseEnumValuesDefinition() {
    return this.optionalMany(
      z.BRACE_L,
      this.parseEnumValueDefinition,
      z.BRACE_R
    );
  }
  /**
   * EnumValueDefinition : Description? EnumValue Directives[Const]?
   */
  parseEnumValueDefinition() {
    const t = this._lexer.token, r = this.parseDescription(), n = this.parseEnumValueName(), i = this.parseConstDirectives();
    return this.node(t, {
      kind: ie.ENUM_VALUE_DEFINITION,
      description: r,
      name: n,
      directives: i
    });
  }
  /**
   * EnumValue : Name but not `true`, `false` or `null`
   */
  parseEnumValueName() {
    if (this._lexer.token.value === "true" || this._lexer.token.value === "false" || this._lexer.token.value === "null")
      throw ft(
        this._lexer.source,
        this._lexer.token.start,
        `${Us(
          this._lexer.token
        )} is reserved and cannot be used for an enum value.`
      );
    return this.parseName();
  }
  /**
   * InputObjectTypeDefinition :
   *   - Description? input Name Directives[Const]? InputFieldsDefinition?
   */
  parseInputObjectTypeDefinition() {
    const t = this._lexer.token, r = this.parseDescription();
    this.expectKeyword("input");
    const n = this.parseName(), i = this.parseConstDirectives(), a = this.parseInputFieldsDefinition();
    return this.node(t, {
      kind: ie.INPUT_OBJECT_TYPE_DEFINITION,
      description: r,
      name: n,
      directives: i,
      fields: a
    });
  }
  /**
   * ```
   * InputFieldsDefinition : { InputValueDefinition+ }
   * ```
   */
  parseInputFieldsDefinition() {
    return this.optionalMany(
      z.BRACE_L,
      this.parseInputValueDef,
      z.BRACE_R
    );
  }
  /**
   * TypeSystemExtension :
   *   - SchemaExtension
   *   - TypeExtension
   *
   * TypeExtension :
   *   - ScalarTypeExtension
   *   - ObjectTypeExtension
   *   - InterfaceTypeExtension
   *   - UnionTypeExtension
   *   - EnumTypeExtension
   *   - InputObjectTypeDefinition
   */
  parseTypeSystemExtension() {
    const t = this._lexer.lookahead();
    if (t.kind === z.NAME)
      switch (t.value) {
        case "schema":
          return this.parseSchemaExtension();
        case "scalar":
          return this.parseScalarTypeExtension();
        case "type":
          return this.parseObjectTypeExtension();
        case "interface":
          return this.parseInterfaceTypeExtension();
        case "union":
          return this.parseUnionTypeExtension();
        case "enum":
          return this.parseEnumTypeExtension();
        case "input":
          return this.parseInputObjectTypeExtension();
      }
    throw this.unexpected(t);
  }
  /**
   * ```
   * SchemaExtension :
   *  - extend schema Directives[Const]? { OperationTypeDefinition+ }
   *  - extend schema Directives[Const]
   * ```
   */
  parseSchemaExtension() {
    const t = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("schema");
    const r = this.parseConstDirectives(), n = this.optionalMany(
      z.BRACE_L,
      this.parseOperationTypeDefinition,
      z.BRACE_R
    );
    if (r.length === 0 && n.length === 0)
      throw this.unexpected();
    return this.node(t, {
      kind: ie.SCHEMA_EXTENSION,
      directives: r,
      operationTypes: n
    });
  }
  /**
   * ScalarTypeExtension :
   *   - extend scalar Name Directives[Const]
   */
  parseScalarTypeExtension() {
    const t = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("scalar");
    const r = this.parseName(), n = this.parseConstDirectives();
    if (n.length === 0)
      throw this.unexpected();
    return this.node(t, {
      kind: ie.SCALAR_TYPE_EXTENSION,
      name: r,
      directives: n
    });
  }
  /**
   * ObjectTypeExtension :
   *  - extend type Name ImplementsInterfaces? Directives[Const]? FieldsDefinition
   *  - extend type Name ImplementsInterfaces? Directives[Const]
   *  - extend type Name ImplementsInterfaces
   */
  parseObjectTypeExtension() {
    const t = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("type");
    const r = this.parseName(), n = this.parseImplementsInterfaces(), i = this.parseConstDirectives(), a = this.parseFieldsDefinition();
    if (n.length === 0 && i.length === 0 && a.length === 0)
      throw this.unexpected();
    return this.node(t, {
      kind: ie.OBJECT_TYPE_EXTENSION,
      name: r,
      interfaces: n,
      directives: i,
      fields: a
    });
  }
  /**
   * InterfaceTypeExtension :
   *  - extend interface Name ImplementsInterfaces? Directives[Const]? FieldsDefinition
   *  - extend interface Name ImplementsInterfaces? Directives[Const]
   *  - extend interface Name ImplementsInterfaces
   */
  parseInterfaceTypeExtension() {
    const t = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("interface");
    const r = this.parseName(), n = this.parseImplementsInterfaces(), i = this.parseConstDirectives(), a = this.parseFieldsDefinition();
    if (n.length === 0 && i.length === 0 && a.length === 0)
      throw this.unexpected();
    return this.node(t, {
      kind: ie.INTERFACE_TYPE_EXTENSION,
      name: r,
      interfaces: n,
      directives: i,
      fields: a
    });
  }
  /**
   * UnionTypeExtension :
   *   - extend union Name Directives[Const]? UnionMemberTypes
   *   - extend union Name Directives[Const]
   */
  parseUnionTypeExtension() {
    const t = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("union");
    const r = this.parseName(), n = this.parseConstDirectives(), i = this.parseUnionMemberTypes();
    if (n.length === 0 && i.length === 0)
      throw this.unexpected();
    return this.node(t, {
      kind: ie.UNION_TYPE_EXTENSION,
      name: r,
      directives: n,
      types: i
    });
  }
  /**
   * EnumTypeExtension :
   *   - extend enum Name Directives[Const]? EnumValuesDefinition
   *   - extend enum Name Directives[Const]
   */
  parseEnumTypeExtension() {
    const t = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("enum");
    const r = this.parseName(), n = this.parseConstDirectives(), i = this.parseEnumValuesDefinition();
    if (n.length === 0 && i.length === 0)
      throw this.unexpected();
    return this.node(t, {
      kind: ie.ENUM_TYPE_EXTENSION,
      name: r,
      directives: n,
      values: i
    });
  }
  /**
   * InputObjectTypeExtension :
   *   - extend input Name Directives[Const]? InputFieldsDefinition
   *   - extend input Name Directives[Const]
   */
  parseInputObjectTypeExtension() {
    const t = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("input");
    const r = this.parseName(), n = this.parseConstDirectives(), i = this.parseInputFieldsDefinition();
    if (n.length === 0 && i.length === 0)
      throw this.unexpected();
    return this.node(t, {
      kind: ie.INPUT_OBJECT_TYPE_EXTENSION,
      name: r,
      directives: n,
      fields: i
    });
  }
  /**
   * ```
   * DirectiveDefinition :
   *   - Description? directive @ Name ArgumentsDefinition? `repeatable`? on DirectiveLocations
   * ```
   */
  parseDirectiveDefinition() {
    const t = this._lexer.token, r = this.parseDescription();
    this.expectKeyword("directive"), this.expectToken(z.AT);
    const n = this.parseName(), i = this.parseArgumentDefs(), a = this.expectOptionalKeyword("repeatable");
    this.expectKeyword("on");
    const s = this.parseDirectiveLocations();
    return this.node(t, {
      kind: ie.DIRECTIVE_DEFINITION,
      description: r,
      name: n,
      arguments: i,
      repeatable: a,
      locations: s
    });
  }
  /**
   * DirectiveLocations :
   *   - `|`? DirectiveLocation
   *   - DirectiveLocations | DirectiveLocation
   */
  parseDirectiveLocations() {
    return this.delimitedMany(z.PIPE, this.parseDirectiveLocation);
  }
  /*
   * DirectiveLocation :
   *   - ExecutableDirectiveLocation
   *   - TypeSystemDirectiveLocation
   *
   * ExecutableDirectiveLocation : one of
   *   `QUERY`
   *   `MUTATION`
   *   `SUBSCRIPTION`
   *   `FIELD`
   *   `FRAGMENT_DEFINITION`
   *   `FRAGMENT_SPREAD`
   *   `INLINE_FRAGMENT`
   *
   * TypeSystemDirectiveLocation : one of
   *   `SCHEMA`
   *   `SCALAR`
   *   `OBJECT`
   *   `FIELD_DEFINITION`
   *   `ARGUMENT_DEFINITION`
   *   `INTERFACE`
   *   `UNION`
   *   `ENUM`
   *   `ENUM_VALUE`
   *   `INPUT_OBJECT`
   *   `INPUT_FIELD_DEFINITION`
   */
  parseDirectiveLocation() {
    const t = this._lexer.token, r = this.parseName();
    if (Object.prototype.hasOwnProperty.call(cf, r.value))
      return r;
    throw this.unexpected(t);
  }
  // Core parsing utility functions
  /**
   * Returns a node that, if configured to do so, sets a "loc" field as a
   * location object, used to identify the place in the source that created a
   * given parsed object.
   */
  node(t, r) {
    var n;
    return ((n = this._options) === null || n === void 0 ? void 0 : n.noLocation) !== !0 && (r.loc = new kj(
      t,
      this._lexer.lastToken,
      this._lexer.source
    )), r;
  }
  /**
   * Determines if the next token is of a given kind
   */
  peek(t) {
    return this._lexer.token.kind === t;
  }
  /**
   * If the next token is of the given kind, return that token after advancing the lexer.
   * Otherwise, do not change the parser state and throw an error.
   */
  expectToken(t) {
    const r = this._lexer.token;
    if (r.kind === t)
      return this._lexer.advance(), r;
    throw ft(
      this._lexer.source,
      r.start,
      `Expected ${lb(t)}, found ${Us(r)}.`
    );
  }
  /**
   * If the next token is of the given kind, return "true" after advancing the lexer.
   * Otherwise, do not change the parser state and return "false".
   */
  expectOptionalToken(t) {
    return this._lexer.token.kind === t ? (this._lexer.advance(), !0) : !1;
  }
  /**
   * If the next token is a given keyword, advance the lexer.
   * Otherwise, do not change the parser state and throw an error.
   */
  expectKeyword(t) {
    const r = this._lexer.token;
    if (r.kind === z.NAME && r.value === t)
      this._lexer.advance();
    else
      throw ft(
        this._lexer.source,
        r.start,
        `Expected "${t}", found ${Us(r)}.`
      );
  }
  /**
   * If the next token is a given keyword, return "true" after advancing the lexer.
   * Otherwise, do not change the parser state and return "false".
   */
  expectOptionalKeyword(t) {
    const r = this._lexer.token;
    return r.kind === z.NAME && r.value === t ? (this._lexer.advance(), !0) : !1;
  }
  /**
   * Helper function for creating an error when an unexpected lexed token is encountered.
   */
  unexpected(t) {
    const r = t ?? this._lexer.token;
    return ft(
      this._lexer.source,
      r.start,
      `Unexpected ${Us(r)}.`
    );
  }
  /**
   * Returns a possibly empty list of parse nodes, determined by the parseFn.
   * This list begins with a lex token of openKind and ends with a lex token of closeKind.
   * Advances the parser to the next lex token after the closing token.
   */
  any(t, r, n) {
    this.expectToken(t);
    const i = [];
    for (; !this.expectOptionalToken(n); )
      i.push(r.call(this));
    return i;
  }
  /**
   * Returns a list of parse nodes, determined by the parseFn.
   * It can be empty only if open token is missing otherwise it will always return non-empty list
   * that begins with a lex token of openKind and ends with a lex token of closeKind.
   * Advances the parser to the next lex token after the closing token.
   */
  optionalMany(t, r, n) {
    if (this.expectOptionalToken(t)) {
      const i = [];
      do
        i.push(r.call(this));
      while (!this.expectOptionalToken(n));
      return i;
    }
    return [];
  }
  /**
   * Returns a non-empty list of parse nodes, determined by the parseFn.
   * This list begins with a lex token of openKind and ends with a lex token of closeKind.
   * Advances the parser to the next lex token after the closing token.
   */
  many(t, r, n) {
    this.expectToken(t);
    const i = [];
    do
      i.push(r.call(this));
    while (!this.expectOptionalToken(n));
    return i;
  }
  /**
   * Returns a non-empty list of parse nodes, determined by the parseFn.
   * This list may begin with a lex token of delimiterKind followed by items separated by lex tokens of tokenKind.
   * Advances the parser to the next lex token after last item in the list.
   */
  delimitedMany(t, r) {
    this.expectOptionalToken(t);
    const n = [];
    do
      n.push(r.call(this));
    while (this.expectOptionalToken(t));
    return n;
  }
}
function Us(e) {
  const t = e.value;
  return lb(e.kind) + (t != null ? ` "${t}"` : "");
}
function lb(e) {
  return Kj(e) ? `"${e}"` : e;
}
function st(e, t) {
  return t.tag = e, t;
}
function rr() {
}
function cz(e) {
  return function(t) {
    var r = e.length;
    let n = !1, i = !1, a = !1, s = 0;
    t(
      st(0, [
        function(o) {
          if (o)
            n = !0;
          else if (i)
            a = !0;
          else {
            for (i = a = !0; a && !n; )
              s < r ? (o = e[s], s = s + 1 | 0, a = !1, t(st(1, [o]))) : (n = !0, t(0));
            i = !1;
          }
        }
      ])
    );
  };
}
function uz() {
}
function fz(e) {
  e(0);
}
function dz(e) {
  return e(0);
}
function cb(e) {
  return function(t) {
    return function(r) {
      let n = rr, i = !1, a = [], s = !1;
      t(function(o) {
        typeof o == "number" ? s || (s = !0, a.length === 0 && r(0)) : o.tag ? s || (i = !1, function(l) {
          function c(d) {
            typeof d == "number" ? a.length !== 0 && (a = a.filter(u), d = a.length === 0, s && d ? r(0) : !i && d && (i = !0, n(0))) : d.tag ? a.length !== 0 && (r(st(1, [d[0]])), f(0)) : (f = d = d[0], a = a.concat(d), d(0));
          }
          function u(d) {
            return d !== f;
          }
          let f = rr;
          l.length === 1 ? l(c) : l.bind(null, c);
        }(e(o[0])), i || (i = !0, n(0))) : n = o[0];
      }), r(
        st(0, [
          function(o) {
            o ? (s || (s = !0, n(o)), a.forEach(function(l) {
              return l(o);
            }), a = []) : (i || s ? i = !1 : (i = !0, n(0)), a.forEach(dz));
          }
        ])
      );
    };
  };
}
function hz(e) {
  return e;
}
function xs(e) {
  return function(t) {
    return function(r) {
      let n = !1;
      return t(function(i) {
        if (typeof i == "number")
          n || (n = !0, r(i));
        else if (i.tag)
          n || (e(i[0]), r(i));
        else {
          var a = i[0];
          r(
            st(0, [
              function(s) {
                if (!n)
                  return s && (n = !0), a(s);
              }
            ])
          );
        }
      });
    };
  };
}
function pz(e) {
  e(0);
}
function vz(e) {
  return function(t) {
    return function(r) {
      function n(u) {
        o && (typeof u == "number" ? (o = !1, c ? r(u) : a || (a = !0, i(0))) : u.tag ? (r(u), l ? l = !1 : s(0)) : (s = u = u[0], l = !1, u(0)));
      }
      let i = rr, a = !1, s = rr, o = !1, l = !1, c = !1;
      t(function(u) {
        typeof u == "number" ? c || (c = !0, o || r(0)) : u.tag ? c || (o && (s(1), s = rr), a ? a = !1 : (a = !0, i(0)), u = e(u[0]), o = !0, u(n)) : i = u[0];
      }), r(
        st(0, [
          function(u) {
            if (u) {
              if (c || (c = !0, i(1)), o)
                return o = !1, s(1);
            } else
              c || a || (a = !0, i(0)), o && !l && (l = !0, s(0));
          }
        ])
      );
    };
  };
}
function Ra(e) {
  return function(t) {
    let r = rr, n = !1;
    return t(function(i) {
      typeof i == "number" ? n = !0 : i.tag ? n || (e(i[0]), r(0)) : (r = i = i[0], i(0));
    }), {
      unsubscribe: function() {
        if (!n)
          return n = !0, r(1);
      }
    };
  };
}
function gz() {
}
function Vt(e) {
  return function(t) {
    return function(r) {
      let n = rr;
      return t(function(i) {
        typeof i == "number" ? r(i) : i.tag ? e(i[0]) ? r(i) : n(0) : (n = i[0], r(i));
      });
    };
  };
}
function Iv(e) {
  return function(t) {
    let r = !1;
    t(
      st(0, [
        function(n) {
          n ? r = !0 : r || (r = !0, t(st(1, [e])), t(0));
        }
      ])
    );
  };
}
function ub(e) {
  return function(t) {
    let r = uz, n = !1;
    r = e({
      next: function(i) {
        n || t(st(1, [i]));
      },
      complete: function() {
        n || (n = !0, t(0));
      }
    }), t(
      st(0, [
        function(i) {
          if (i && !n)
            return n = !0, r();
        }
      ])
    );
  };
}
function Rv() {
  let e = [], t = !1;
  return {
    source: function(r) {
      function n(i) {
        return i !== r;
      }
      e = e.concat(r), r(
        st(0, [
          function(i) {
            i && (e = e.filter(n));
          }
        ])
      );
    },
    next: function(r) {
      t || e.forEach(function(n) {
        n(st(1, [r]));
      });
    },
    complete: function() {
      t || (t = !0, e.forEach(fz));
    }
  };
}
function Na(e) {
  return function(t) {
    return function(r) {
      return t(function(n) {
        n = typeof n == "number" ? 0 : n.tag ? st(1, [e(n[0])]) : st(0, [n[0]]), r(n);
      });
    };
  };
}
function ll(e) {
  return cb(hz)(cz(e));
}
function Nv(e) {
  return function(t) {
    return function(r) {
      let n = !1;
      return t(function(i) {
        if (typeof i == "number")
          return n ? void 0 : (n = !0, r(i), e());
        if (i.tag)
          n || r(i);
        else {
          var a = i[0];
          r(
            st(0, [
              function(s) {
                if (!n)
                  return s ? (n = !0, a(s), e()) : a(s);
              }
            ])
          );
        }
      });
    };
  };
}
function Lv(e) {
  return function(t) {
    return function(r) {
      return t(function(n) {
        typeof n == "number" || n.tag ? r(n) : (r(n), e());
      });
    };
  };
}
function mz(e) {
  return Ra(gz)(e);
}
function cl(e) {
  function t(a) {
    typeof a == "number" ? (r.forEach(pz), r = []) : a.tag ? (i = !1, r.forEach(function(s) {
      s(a);
    })) : n = a[0];
  }
  let r = [], n = rr, i = !1;
  return function(a) {
    function s(o) {
      return o !== a;
    }
    r = r.concat(a), r.length === 1 && e(t), a(
      st(0, [
        function(o) {
          if (o) {
            if (r = r.filter(s), r.length === 0)
              return n(1);
          } else
            i || (i = !0, n(o));
        }
      ])
    );
  };
}
function jv(e) {
  return function(t) {
    return function(r) {
      let n = !1, i = 0, a = rr;
      t(function(s) {
        typeof s == "number" ? n || (n = !0, r(0)) : s.tag ? i < e && !n && (i = i + 1 | 0, r(s), !n && i >= e && (n = !0, r(0), a(1))) : (s = s[0], 0 >= e ? (n = !0, r(0), s(1)) : a = s);
      }), r(
        st(0, [
          function(s) {
            if (!n) {
              if (s)
                return n = !0, a(1);
              if (i < e)
                return a(0);
            }
          }
        ])
      );
    };
  };
}
function fb(e) {
  return function(t) {
    return function(r) {
      function n(o) {
        typeof o != "number" && (o.tag ? (i = !0, a(1), r(0)) : (s = o = o[0], o(0)));
      }
      let i = !1, a = rr, s = rr;
      t(function(o) {
        typeof o == "number" ? i || (i = !0, s(1), r(0)) : o.tag ? i || r(o) : (a = o[0], e(n));
      }), r(
        st(0, [
          function(o) {
            if (!i)
              return o ? (i = !0, a(1), s(1)) : a(0);
          }
        ])
      );
    };
  };
}
typeof Symbol == "function" && (Symbol.observable || (Symbol.observable = Symbol("observable")));
function xz(e) {
  return typeof e == "string" ? new is(e) : typeof e == "object" && e.message ? new is(e.message, e.nodes, e.source, e.positions, e.path, e, e.extensions || {}) : e;
}
var K0 = function(e) {
  function t(r) {
    var n = r.networkError, i = r.response, a = (r.graphQLErrors || []).map(xz), s = function(l, c) {
      var u = "";
      return l !== void 0 ? u = "[Network] " + l.message : (c !== void 0 && c.forEach(function(f) {
        u += "[GraphQL] " + f.message + `
`;
      }), u.trim());
    }(n, a);
    e.call(this, s), this.name = "CombinedError", this.message = s, this.graphQLErrors = a, this.networkError = n, this.response = i;
  }
  return e && (t.__proto__ = e), (t.prototype = Object.create(e && e.prototype)).constructor = t, t.prototype.toString = function() {
    return this.message;
  }, t;
}(Error);
function db(e, t) {
  e |= 0;
  for (var r = 0, n = 0 | t.length; r < n; r++)
    e = (e << 5) + e + t.charCodeAt(r);
  return e;
}
function zv(e) {
  return db(5381, e) >>> 0;
}
var go = /* @__PURE__ */ new Set(), Hv = /* @__PURE__ */ new WeakMap();
function Oa(e) {
  if (e === null || go.has(e))
    return "null";
  if (typeof e != "object")
    return JSON.stringify(e) || "";
  if (e.toJSON)
    return Oa(e.toJSON());
  if (Array.isArray(e)) {
    for (var t = "[", r = 0, n = e.length; r < n; r++) {
      r > 0 && (t += ",");
      var i = Oa(e[r]);
      t += i.length > 0 ? i : "null";
    }
    return t += "]";
  }
  var a = Object.keys(e).sort();
  if (!a.length && e.constructor && e.constructor !== Object) {
    var s = Hv.get(e) || Math.random().toString(36).slice(2);
    return Hv.set(e, s), '{"__key":"' + s + '"}';
  }
  go.add(e);
  for (var o = "{", l = 0, c = a.length; l < c; l++) {
    var u = a[l], f = Oa(e[u]);
    f && (o.length > 1 && (o += ","), o += Oa(u) + ":" + f);
  }
  return go.delete(e), o += "}";
}
function uf(e) {
  return go.clear(), Oa(e);
}
var yz = /("{3}[\s\S]*"{3}|"(?:\\.|[^"])*")/g, bz = /([\s,]|#[^\n\r]+)+/g;
function _z(e, t) {
  return t % 2 == 0 ? e.replace(bz, " ").trim() : e;
}
function Ec(e) {
  var t = (typeof e != "string" ? e.loc && e.loc.source.body || nb(e) : e).split(yz).map(_z).join("");
  if (typeof e != "string") {
    var r = "definitions" in e && pb(e);
    r && (t = "# " + r + `
` + t), e.loc || (e.loc = {
      start: 0,
      end: t.length,
      source: {
        body: t,
        name: "gql",
        locationOffset: {
          line: 1,
          column: 1
        }
      }
    });
  }
  return t;
}
var Ac = /* @__PURE__ */ new Map();
function hb(e) {
  var t, r;
  return typeof e == "string" ? (t = zv(Ec(e)), r = Ac.get(t) || oz(e, {
    noLocation: !0
  })) : (t = e.__key || zv(Ec(e)), r = Ac.get(t) || e), r.loc || Ec(r), r.__key = t, Ac.set(t, r), r;
}
function Cc(e, t) {
  t || (t = {});
  var r = hb(e);
  return {
    key: db(r.__key, uf(t)) >>> 0,
    query: r,
    variables: t
  };
}
function pb(e) {
  for (var t = 0, r = e.definitions.length; t < r; t++) {
    var n = e.definitions[t];
    if (n.kind === ie.OPERATION_DEFINITION && n.name)
      return n.name.value;
  }
}
function wz(e) {
  for (var t = 0, r = e.definitions.length; t < r; t++) {
    var n = e.definitions[t];
    if (n.kind === ie.OPERATION_DEFINITION)
      return n.operation;
  }
}
function qe() {
  return qe = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, qe.apply(this, arguments);
}
function Sc(e, t, r) {
  if (!("data" in t) && !("errors" in t) || "path" in t)
    throw new Error("No Content");
  return {
    operation: e,
    data: t.data,
    error: Array.isArray(t.errors) ? new K0({
      graphQLErrors: t.errors,
      response: r
    }) : void 0,
    extensions: typeof t.extensions == "object" && t.extensions || void 0,
    hasNext: !!t.hasNext
  };
}
function $z(e, t, r) {
  var n = qe({}, e);
  if (n.hasNext = !!t.hasNext, !("path" in t))
    return "data" in t && (n.data = t.data), n;
  Array.isArray(t.errors) && (n.error = new K0({
    graphQLErrors: n.error ? n.error.graphQLErrors.concat(t.errors) : t.errors,
    response: r
  }));
  for (var i = n.data = qe({}, n.data), a = 0, s; a < t.path.length; )
    i = i[s = t.path[a++]] = Array.isArray(i[s]) ? [].concat(i[s]) : qe({}, i[s]);
  return qe(i, t.data), n;
}
function Vv(e, t, r) {
  return {
    operation: e,
    data: void 0,
    error: new K0({
      networkError: t,
      response: r
    }),
    extensions: void 0
  };
}
function vb(e) {
  return e.kind === "query" && !!e.context.preferGetMethod;
}
function Dz(e) {
  return {
    query: nb(e.query),
    operationName: pb(e.query),
    variables: e.variables || void 0,
    extensions: void 0
  };
}
function Ez(e, t) {
  var r = vb(e), n = e.context.url;
  if (!r || !t)
    return n;
  var i = [];
  t.operationName && i.push("operationName=" + encodeURIComponent(t.operationName)), t.query && i.push("query=" + encodeURIComponent(t.query.replace(/#[^\n\r]+/g, " ").trim())), t.variables && i.push("variables=" + encodeURIComponent(uf(t.variables))), t.extensions && i.push("extensions=" + encodeURIComponent(uf(t.extensions)));
  var a = n + "?" + i.join("&");
  return a.length > 2047 ? (e.context.preferGetMethod = !1, n) : a;
}
function Az(e, t) {
  var r = vb(e), n = {
    accept: "application/graphql+json, application/json"
  };
  r || (n["content-type"] = "application/json");
  var i = (typeof e.context.fetchOptions == "function" ? e.context.fetchOptions() : e.context.fetchOptions) || {};
  if (i.headers)
    for (var a in i.headers)
      n[a.toLowerCase()] = i.headers[a];
  return qe({}, i, {
    body: !r && t ? JSON.stringify(t) : void 0,
    method: r ? "GET" : "POST",
    headers: n
  });
}
var kc = typeof Symbol < "u" ? Symbol.asyncIterator : null, Cz = typeof TextDecoder < "u" ? new TextDecoder() : null, Sz = /content-type:[^\r\n]*application\/json/i, kz = /boundary="?([^=";]+)"?/i;
function Oz(e, t, r) {
  var n = r.redirect === "manual" ? 400 : 300, i = e.context.fetch;
  return ub(function(a) {
    var s = a.next, o = a.complete, l = typeof AbortController < "u" ? new AbortController() : null;
    l && (r.signal = l.signal);
    var c = !1;
    function u(p, v, g) {
      var m = g.headers && g.headers.get("Content-Type") || "";
      if (/text\//i.test(m))
        return g.text().then(function(S) {
          p(Vv(v, new Error(S), g));
        });
      if (!/multipart\/mixed/i.test(m))
        return g.text().then(function(S) {
          p(Sc(v, JSON.parse(S), g));
        });
      var y = "---", _ = m.match(kz);
      _ && (y = "--" + _[1]);
      var x, b = function() {
      };
      if (kc && g[kc]) {
        var w = g[kc]();
        x = w.next.bind(w);
      } else if ("body" in g && g.body) {
        var E = g.body.getReader();
        b = E.cancel.bind(E), x = E.read.bind(E);
      } else
        throw new TypeError("Streaming requests unsupported");
      var $ = "", C = !0, D = null, A = null;
      return x().then(function S(k) {
        if (k.done)
          c = !0;
        else {
          var j = function(N) {
            return N.constructor.name === "Buffer" ? N.toString() : Cz.decode(N);
          }(k.value), P = j.indexOf(y);
          for (P > -1 ? P += $.length : P = $.indexOf(y), $ += j; P > -1; ) {
            var H = $.slice(0, P), K = $.slice(P + y.length);
            if (C)
              C = !1;
            else {
              var X = H.indexOf(`\r
\r
`) + 4, Z = H.slice(0, X), B = H.slice(X, H.lastIndexOf(`\r
`)), T = void 0;
              if (Sz.test(Z))
                try {
                  T = JSON.parse(B), D = A = A ? $z(A, T, g) : Sc(v, T, g);
                } catch {
                }
              if (K.slice(0, 2) === "--" || T && !T.hasNext) {
                if (!A)
                  return p(Sc(v, {}, g));
                break;
              }
            }
            P = ($ = K).indexOf(y);
          }
        }
        if (D && (p(D), D = null), !k.done && (!A || A.hasNext))
          return x().then(S);
      }).finally(b);
    }
    var f = !1, d = !1, h;
    return Promise.resolve().then(function() {
      if (!f)
        return (i || fetch)(t, r);
    }).then(function(p) {
      if (p)
        return d = (h = p).status < 200 || h.status >= n, u(s, e, h);
    }).then(o).catch(function(p) {
      if (c)
        throw p;
      var v = Vv(e, d && h.statusText ? new Error(h.statusText) : p, h);
      s(v), o();
    }), function() {
      f = !0, l && l.abort();
    };
  });
}
function ff(e, t) {
  if (Array.isArray(e))
    for (var r = 0; r < e.length; r++)
      ff(e[r], t);
  else if (typeof e == "object" && e !== null)
    for (var n in e)
      n === "__typename" && typeof e[n] == "string" ? t[e[n]] = 0 : ff(e[n], t);
  return t;
}
function Fz(e) {
  return Object.keys(ff(e, {}));
}
var Yv = function(e) {
  if (e.selectionSet && !e.selectionSet.selections.some(function(t) {
    return t.kind === ie.FIELD && t.name.value === "__typename" && !t.alias;
  }))
    return qe({}, e, {
      selectionSet: qe({}, e.selectionSet, {
        selections: e.selectionSet.selections.concat([{
          kind: ie.FIELD,
          name: {
            kind: ie.NAME,
            value: "__typename"
          }
        }])
      })
    });
}, Wv = /* @__PURE__ */ new Map();
function Tz(e) {
  var t = hb(e), r = Wv.get(t.__key);
  return r || (r = eb(t, {
    Field: Yv,
    InlineFragment: Yv
  }), Object.defineProperty(r, "__key", {
    value: t.__key,
    enumerable: !1
  }), Wv.set(t.__key, r)), r;
}
function df(e) {
  return !e || typeof e != "object" ? e : Object.keys(e).reduce(function(t, r) {
    var n = e[r];
    return r === "__typename" ? Object.defineProperty(t, "__typename", {
      enumerable: !1,
      value: n
    }) : Array.isArray(n) ? t[r] = n.map(df) : n && typeof n == "object" && "__typename" in n ? t[r] = df(n) : t[r] = n, t;
  }, Array.isArray(e) ? [] : {});
}
function Uv(e) {
  return e.toPromise = function() {
    return new Promise(function(t) {
      var r = Ra(function(n) {
        !n.stale && !n.hasNext && Promise.resolve().then(function() {
          r.unsubscribe(), t(n);
        });
      })(e);
    });
  }, e;
}
function as(e, t, r) {
  return r || (r = t.context), {
    key: t.key,
    query: t.query,
    variables: t.variables,
    kind: e,
    context: r
  };
}
function qv(e, t) {
  return as(e.kind, e, qe({}, e.context, {
    meta: qe({}, e.context.meta, t)
  }));
}
function gb() {
}
function Oc(e) {
  var t = e.kind;
  return t !== "mutation" && t !== "query";
}
function Mz(e) {
  var t = e.forward, r = e.client, n = e.dispatchDebug, i = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ Object.create(null);
  function s(l) {
    var c = as(l.kind, l);
    return c.query = Tz(l.query), c;
  }
  function o(l) {
    var c = l.context.requestPolicy;
    return l.kind === "query" && c !== "network-only" && (c === "cache-only" || i.has(l.key));
  }
  return function(l) {
    var c = cl(l), u = Na(function(d) {
      var h = i.get(d.key);
      process.env.NODE_ENV !== "production" && n(qe({}, {
        operation: d
      }, h ? {
        type: "cacheHit",
        message: "The result was successfully retried from the cache"
      } : {
        type: "cacheMiss",
        message: "The result could not be retrieved from the cache"
      }));
      var p = qe({}, h, {
        operation: qv(d, {
          cacheOutcome: h ? "hit" : "miss"
        })
      });
      return d.context.requestPolicy === "cache-and-network" && (p.stale = !0, Gv(r, d)), p;
    })(Vt(function(d) {
      return !Oc(d) && o(d);
    })(c)), f = xs(function(d) {
      var h = d.operation;
      if (h) {
        var p = Fz(d.data).concat(h.context.additionalTypenames || []);
        if (d.operation.kind === "mutation") {
          var v = /* @__PURE__ */ new Set();
          process.env.NODE_ENV !== "production" && n({
            type: "cacheInvalidation",
            message: "The following typenames have been invalidated: " + p,
            operation: h,
            data: {
              typenames: p,
              response: d
            },
            source: "cacheExchange"
          });
          for (var g = 0; g < p.length; g++) {
            var m = p[g], y = a[m] || (a[m] = /* @__PURE__ */ new Set());
            y.forEach(function(b) {
              v.add(b);
            }), y.clear();
          }
          v.forEach(function(b) {
            i.has(b) && (h = i.get(b).operation, i.delete(b), Gv(r, h));
          });
        } else if (h.kind === "query" && d.data) {
          i.set(h.key, d);
          for (var _ = 0; _ < p.length; _++) {
            var x = p[_];
            (a[x] || (a[x] = /* @__PURE__ */ new Set())).add(h.key);
          }
        }
      }
    })(t(Vt(function(d) {
      return d.kind !== "query" || d.context.requestPolicy !== "cache-only";
    })(Na(function(d) {
      return qv(d, {
        cacheOutcome: "miss"
      });
    })(ll([Na(s)(Vt(function(d) {
      return !Oc(d) && !o(d);
    })(c)), Vt(function(d) {
      return Oc(d);
    })(c)])))));
    return ll([u, f]);
  };
}
function Gv(e, t) {
  return e.reexecuteOperation(as(t.kind, t, qe({}, t.context, {
    requestPolicy: "network-only"
  })));
}
function Pz(e) {
  var t = e.forward, r = e.dispatchDebug, n = /* @__PURE__ */ new Set();
  function i(s) {
    var o = s.key, l = s.kind;
    if (l === "teardown")
      return n.delete(o), !0;
    if (l !== "query" && l !== "subscription")
      return !0;
    var c = n.has(o);
    return n.add(o), c && process.env.NODE_ENV !== "production" && r({
      type: "dedup",
      message: "An operation has been deduped.",
      operation: s,
      source: "dedupExchange"
    }), !c;
  }
  function a(s) {
    s.hasNext || n.delete(s.operation.key);
  }
  return function(s) {
    var o = Vt(i)(s);
    return xs(a)(t(o));
  };
}
function Bz(e) {
  var t = e.forward, r = e.dispatchDebug;
  return function(n) {
    var i = cl(n), a = cb(function(o) {
      var l = o.key, c = Vt(function(h) {
        return h.kind === "teardown" && h.key === l;
      })(i), u = Dz(o), f = Ez(o, u), d = Az(o, u);
      return process.env.NODE_ENV !== "production" && r({
        type: "fetchRequest",
        message: "A fetch request is being executed.",
        operation: o,
        data: {
          url: f,
          fetchOptions: d
        },
        source: "fetchExchange"
      }), xs(function(h) {
        var p = h.data ? void 0 : h.error;
        process.env.NODE_ENV !== "production" && r({
          type: p ? "fetchError" : "fetchSuccess",
          message: "A " + (p ? "failed" : "successful") + " fetch response has been returned.",
          operation: o,
          data: {
            url: f,
            fetchOptions: d,
            value: p || h
          },
          source: "fetchExchange"
        });
      })(fb(c)(Oz(o, f, d)));
    })(Vt(function(o) {
      return o.kind === "query" || o.kind === "mutation";
    })(i)), s = t(Vt(function(o) {
      return o.kind !== "query" && o.kind !== "mutation";
    })(i));
    return ll([a, s]);
  };
}
function mb(e) {
  var t = e.dispatchDebug;
  return function(r) {
    return Vt(function() {
      return !1;
    })(xs(function(n) {
      if (n.kind !== "teardown" && process.env.NODE_ENV !== "production") {
        var i = 'No exchange has handled operations of kind "' + n.kind + `". Check whether you've added an exchange responsible for these operations.`;
        process.env.NODE_ENV !== "production" && t({
          type: "fallbackCatch",
          message: i,
          operation: n,
          source: "fallbackExchange"
        }), console.warn(i);
      }
    })(r));
  };
}
mb({
  dispatchDebug: gb
});
function Iz(e) {
  return function(t) {
    var r = t.client, n = t.dispatchDebug;
    return e.reduceRight(function(i, a) {
      return a({
        client: r,
        forward: i,
        dispatchDebug: function(o) {
          process.env.NODE_ENV !== "production" && n(qe({}, {
            timestamp: Date.now(),
            source: a.name
          }, o));
        }
      });
    }, t.forward);
  };
}
var Rz = [Pz, Mz, Bz], Nz = function e(t) {
  if (process.env.NODE_ENV !== "production" && !t.url)
    throw new Error("You are creating an urql-client without a url.");
  var r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), i = [], a = Rv(), s = a.source, o = a.next, l = !1;
  function c(_) {
    if (_ && o(_), !l) {
      for (l = !0; l && (_ = i.shift()); )
        o(_);
      l = !1;
    }
  }
  function u(_) {
    var x = Vt(function(b) {
      return b.operation.kind === _.kind && b.operation.key === _.key && (!b.operation.context._instance || b.operation.context._instance === _.context._instance);
    })(y);
    return d.maskTypename && (x = Na(function(b) {
      return qe({}, b, {
        data: df(b.data)
      });
    })(x)), _.kind === "mutation" ? jv(1)(Lv(function() {
      return o(_);
    })(x)) : cl(Nv(function() {
      r.delete(_.key), n.delete(_.key);
      for (var b = i.length - 1; b >= 0; b--)
        i[b].key === _.key && i.splice(b, 1);
      o(as("teardown", _, _.context));
    })(xs(function(b) {
      r.set(_.key, b);
    })(vz(function(b) {
      return _.kind !== "query" || b.stale ? Iv(b) : ll([Iv(b), Na(function() {
        return qe({}, b, {
          stale: !0
        });
      })(jv(1)(Vt(function(w) {
        return w.kind === "query" && w.key === _.key && w.context.requestPolicy !== "cache-only";
      })(s)))]);
    })(fb(Vt(function(b) {
      return b.kind === "teardown" && b.key === _.key;
    })(s))(x)))));
  }
  var f = this instanceof e ? this : Object.create(e.prototype), d = qe(f, {
    url: t.url,
    fetchOptions: t.fetchOptions,
    fetch: t.fetch,
    suspense: !!t.suspense,
    requestPolicy: t.requestPolicy || "cache-first",
    preferGetMethod: !!t.preferGetMethod,
    maskTypename: !!t.maskTypename,
    operations$: s,
    reexecuteOperation: function(x) {
      (x.kind === "mutation" || n.has(x.key)) && (i.push(x), Promise.resolve().then(c));
    },
    createOperationContext: function(x) {
      return x || (x = {}), qe({}, {
        _instance: void 0,
        url: d.url,
        fetchOptions: d.fetchOptions,
        fetch: d.fetch,
        preferGetMethod: d.preferGetMethod
      }, x, {
        suspense: x.suspense || x.suspense !== !1 && d.suspense,
        requestPolicy: x.requestPolicy || d.requestPolicy
      });
    },
    createRequestOperation: function(x, b, w) {
      var E = wz(b.query);
      if (process.env.NODE_ENV !== "production" && x !== "teardown" && E !== x)
        throw new Error('Expected operation of type "' + x + '" but found "' + E + '"');
      var $ = d.createOperationContext(w);
      return x === "mutation" && ($._instance = []), as(x, b, $);
    },
    executeRequestOperation: function(x) {
      return x.kind === "mutation" ? u(x) : ub(function(b) {
        var w = n.get(x.key);
        w || n.set(x.key, w = u(x));
        var E = x.context.requestPolicy === "cache-and-network" || x.context.requestPolicy === "network-only";
        return Ra(b.next)(Nv(function() {
          l = !1, b.complete();
        })(Lv(function() {
          var $ = r.get(x.key);
          if (x.kind === "subscription")
            return c(x);
          E && c(x), $ != null && $ === r.get(x.key) ? b.next(E ? qe({}, $, {
            stale: !0
          }) : $) : E || c(x);
        })(w))).unsubscribe;
      });
    },
    executeQuery: function(x, b) {
      var w = d.createRequestOperation("query", x, b);
      return d.executeRequestOperation(w);
    },
    executeSubscription: function(x, b) {
      var w = d.createRequestOperation("subscription", x, b);
      return d.executeRequestOperation(w);
    },
    executeMutation: function(x, b) {
      var w = d.createRequestOperation("mutation", x, b);
      return d.executeRequestOperation(w);
    },
    query: function(x, b, w) {
      return (!w || typeof w.suspense != "boolean") && (w = qe({}, w, {
        suspense: !1
      })), Uv(d.executeQuery(Cc(x, b), w));
    },
    readQuery: function(x, b, w) {
      var E = null;
      return Ra(function($) {
        E = $;
      })(d.query(x, b, w)).unsubscribe(), E;
    },
    subscription: function(x, b, w) {
      return d.executeSubscription(Cc(x, b), w);
    },
    mutation: function(x, b, w) {
      return Uv(d.executeMutation(Cc(x, b), w));
    }
  }), h = gb;
  if (process.env.NODE_ENV !== "production") {
    var p = Rv(), v = p.next, g = p.source;
    d.subscribeToDebugTarget = function(_) {
      return Ra(_)(g);
    }, h = v;
  }
  var m = Iz(t.exchanges !== void 0 ? t.exchanges : Rz), y = cl(m({
    client: d,
    dispatchDebug: h,
    forward: mb({
      dispatchDebug: h
    })
  })(s));
  return mz(y), d;
}, Lz = Nz, le = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ea(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function jz(e) {
  if (e.__esModule)
    return e;
  var t = e.default;
  if (typeof t == "function") {
    var r = function n() {
      return this instanceof n ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    r.prototype = t.prototype;
  } else
    r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(e).forEach(function(n) {
    var i = Object.getOwnPropertyDescriptor(e, n);
    Object.defineProperty(r, n, i.get ? i : {
      enumerable: !0,
      get: function() {
        return e[n];
      }
    });
  }), r;
}
class zz {
  constructor(t, r) {
    G(this, "_resultType", null);
    G(this, "hooks", new yx());
    G(this, "client");
    G(this, "documents");
    this.documents = r, this.client = Lz({
      url: t
    });
  }
  interceptorRequest(t) {
    this.hooks.attach("request", t);
  }
  interceptorResponse(t) {
    this.hooks.attach("response", t);
  }
  async query(t, r) {
    let n = (o) => {
      if (Co.getType(o) === "object") {
        let l = {};
        for (let c in o)
          o[c] != null && (l[c] = o[c]);
        return l;
      } else
        return {};
    }, i = {};
    await this.hooks.notify("request", {
      name: t,
      context: i
    });
    let a = await this.client.query(this.documents[t], n(r), i).toPromise(), s = a.data;
    return await this.hooks.notify("response", {
      name: t,
      context: i,
      result: a
    }), s;
  }
}
var Hz = function() {
  if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
    return !1;
  if (typeof Symbol.iterator == "symbol")
    return !0;
  var t = {}, r = Symbol("test"), n = Object(r);
  if (typeof r == "string" || Object.prototype.toString.call(r) !== "[object Symbol]" || Object.prototype.toString.call(n) !== "[object Symbol]")
    return !1;
  var i = 42;
  t[r] = i;
  for (r in t)
    return !1;
  if (typeof Object.keys == "function" && Object.keys(t).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(t).length !== 0)
    return !1;
  var a = Object.getOwnPropertySymbols(t);
  if (a.length !== 1 || a[0] !== r || !Object.prototype.propertyIsEnumerable.call(t, r))
    return !1;
  if (typeof Object.getOwnPropertyDescriptor == "function") {
    var s = Object.getOwnPropertyDescriptor(t, r);
    if (s.value !== i || s.enumerable !== !0)
      return !1;
  }
  return !0;
}, Kv = typeof Symbol < "u" && Symbol, Vz = Hz, Yz = function() {
  return typeof Kv != "function" || typeof Symbol != "function" || typeof Kv("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : Vz();
}, Zv = {
  foo: {}
}, Wz = Object, Uz = function() {
  return { __proto__: Zv }.foo === Zv.foo && !({ __proto__: null } instanceof Wz);
}, qz = "Function.prototype.bind called on incompatible ", Gz = Object.prototype.toString, Kz = Math.max, Zz = "[object Function]", Xv = function(t, r) {
  for (var n = [], i = 0; i < t.length; i += 1)
    n[i] = t[i];
  for (var a = 0; a < r.length; a += 1)
    n[a + t.length] = r[a];
  return n;
}, Xz = function(t, r) {
  for (var n = [], i = r || 0, a = 0; i < t.length; i += 1, a += 1)
    n[a] = t[i];
  return n;
}, Jz = function(e, t) {
  for (var r = "", n = 0; n < e.length; n += 1)
    r += e[n], n + 1 < e.length && (r += t);
  return r;
}, Qz = function(t) {
  var r = this;
  if (typeof r != "function" || Gz.apply(r) !== Zz)
    throw new TypeError(qz + r);
  for (var n = Xz(arguments, 1), i, a = function() {
    if (this instanceof i) {
      var u = r.apply(
        this,
        Xv(n, arguments)
      );
      return Object(u) === u ? u : this;
    }
    return r.apply(
      t,
      Xv(n, arguments)
    );
  }, s = Kz(0, r.length - n.length), o = [], l = 0; l < s; l++)
    o[l] = "$" + l;
  if (i = Function("binder", "return function (" + Jz(o, ",") + "){ return binder.apply(this,arguments); }")(a), r.prototype) {
    var c = function() {
    };
    c.prototype = r.prototype, i.prototype = new c(), c.prototype = null;
  }
  return i;
}, eH = Qz, Z0 = Function.prototype.bind || eH, tH = Function.prototype.call, rH = Object.prototype.hasOwnProperty, nH = Z0, iH = nH.call(tH, rH), me, Ii = SyntaxError, xb = Function, $i = TypeError, Fc = function(e) {
  try {
    return xb('"use strict"; return (' + e + ").constructor;")();
  } catch {
  }
}, Bn = Object.getOwnPropertyDescriptor;
if (Bn)
  try {
    Bn({}, "");
  } catch {
    Bn = null;
  }
var Tc = function() {
  throw new $i();
}, aH = Bn ? function() {
  try {
    return arguments.callee, Tc;
  } catch {
    try {
      return Bn(arguments, "callee").get;
    } catch {
      return Tc;
    }
  }
}() : Tc, si = Yz(), sH = Uz(), nt = Object.getPrototypeOf || (sH ? function(e) {
  return e.__proto__;
} : null), di = {}, oH = typeof Uint8Array > "u" || !nt ? me : nt(Uint8Array), In = {
  "%AggregateError%": typeof AggregateError > "u" ? me : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer > "u" ? me : ArrayBuffer,
  "%ArrayIteratorPrototype%": si && nt ? nt([][Symbol.iterator]()) : me,
  "%AsyncFromSyncIteratorPrototype%": me,
  "%AsyncFunction%": di,
  "%AsyncGenerator%": di,
  "%AsyncGeneratorFunction%": di,
  "%AsyncIteratorPrototype%": di,
  "%Atomics%": typeof Atomics > "u" ? me : Atomics,
  "%BigInt%": typeof BigInt > "u" ? me : BigInt,
  "%BigInt64Array%": typeof BigInt64Array > "u" ? me : BigInt64Array,
  "%BigUint64Array%": typeof BigUint64Array > "u" ? me : BigUint64Array,
  "%Boolean%": Boolean,
  "%DataView%": typeof DataView > "u" ? me : DataView,
  "%Date%": Date,
  "%decodeURI%": decodeURI,
  "%decodeURIComponent%": decodeURIComponent,
  "%encodeURI%": encodeURI,
  "%encodeURIComponent%": encodeURIComponent,
  "%Error%": Error,
  "%eval%": eval,
  // eslint-disable-line no-eval
  "%EvalError%": EvalError,
  "%Float32Array%": typeof Float32Array > "u" ? me : Float32Array,
  "%Float64Array%": typeof Float64Array > "u" ? me : Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? me : FinalizationRegistry,
  "%Function%": xb,
  "%GeneratorFunction%": di,
  "%Int8Array%": typeof Int8Array > "u" ? me : Int8Array,
  "%Int16Array%": typeof Int16Array > "u" ? me : Int16Array,
  "%Int32Array%": typeof Int32Array > "u" ? me : Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": si && nt ? nt(nt([][Symbol.iterator]())) : me,
  "%JSON%": typeof JSON == "object" ? JSON : me,
  "%Map%": typeof Map > "u" ? me : Map,
  "%MapIteratorPrototype%": typeof Map > "u" || !si || !nt ? me : nt((/* @__PURE__ */ new Map())[Symbol.iterator]()),
  "%Math%": Math,
  "%Number%": Number,
  "%Object%": Object,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise > "u" ? me : Promise,
  "%Proxy%": typeof Proxy > "u" ? me : Proxy,
  "%RangeError%": RangeError,
  "%ReferenceError%": ReferenceError,
  "%Reflect%": typeof Reflect > "u" ? me : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set > "u" ? me : Set,
  "%SetIteratorPrototype%": typeof Set > "u" || !si || !nt ? me : nt((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? me : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": si && nt ? nt(""[Symbol.iterator]()) : me,
  "%Symbol%": si ? Symbol : me,
  "%SyntaxError%": Ii,
  "%ThrowTypeError%": aH,
  "%TypedArray%": oH,
  "%TypeError%": $i,
  "%Uint8Array%": typeof Uint8Array > "u" ? me : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? me : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array > "u" ? me : Uint16Array,
  "%Uint32Array%": typeof Uint32Array > "u" ? me : Uint32Array,
  "%URIError%": URIError,
  "%WeakMap%": typeof WeakMap > "u" ? me : WeakMap,
  "%WeakRef%": typeof WeakRef > "u" ? me : WeakRef,
  "%WeakSet%": typeof WeakSet > "u" ? me : WeakSet
};
if (nt)
  try {
    null.error;
  } catch (e) {
    var lH = nt(nt(e));
    In["%Error.prototype%"] = lH;
  }
var cH = function e(t) {
  var r;
  if (t === "%AsyncFunction%")
    r = Fc("async function () {}");
  else if (t === "%GeneratorFunction%")
    r = Fc("function* () {}");
  else if (t === "%AsyncGeneratorFunction%")
    r = Fc("async function* () {}");
  else if (t === "%AsyncGenerator%") {
    var n = e("%AsyncGeneratorFunction%");
    n && (r = n.prototype);
  } else if (t === "%AsyncIteratorPrototype%") {
    var i = e("%AsyncGenerator%");
    i && nt && (r = nt(i.prototype));
  }
  return In[t] = r, r;
}, Jv = {
  "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
  "%ArrayPrototype%": ["Array", "prototype"],
  "%ArrayProto_entries%": ["Array", "prototype", "entries"],
  "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
  "%ArrayProto_keys%": ["Array", "prototype", "keys"],
  "%ArrayProto_values%": ["Array", "prototype", "values"],
  "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
  "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
  "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
  "%BooleanPrototype%": ["Boolean", "prototype"],
  "%DataViewPrototype%": ["DataView", "prototype"],
  "%DatePrototype%": ["Date", "prototype"],
  "%ErrorPrototype%": ["Error", "prototype"],
  "%EvalErrorPrototype%": ["EvalError", "prototype"],
  "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
  "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
  "%FunctionPrototype%": ["Function", "prototype"],
  "%Generator%": ["GeneratorFunction", "prototype"],
  "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
  "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
  "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
  "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
  "%JSONParse%": ["JSON", "parse"],
  "%JSONStringify%": ["JSON", "stringify"],
  "%MapPrototype%": ["Map", "prototype"],
  "%NumberPrototype%": ["Number", "prototype"],
  "%ObjectPrototype%": ["Object", "prototype"],
  "%ObjProto_toString%": ["Object", "prototype", "toString"],
  "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
  "%PromisePrototype%": ["Promise", "prototype"],
  "%PromiseProto_then%": ["Promise", "prototype", "then"],
  "%Promise_all%": ["Promise", "all"],
  "%Promise_reject%": ["Promise", "reject"],
  "%Promise_resolve%": ["Promise", "resolve"],
  "%RangeErrorPrototype%": ["RangeError", "prototype"],
  "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
  "%RegExpPrototype%": ["RegExp", "prototype"],
  "%SetPrototype%": ["Set", "prototype"],
  "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
  "%StringPrototype%": ["String", "prototype"],
  "%SymbolPrototype%": ["Symbol", "prototype"],
  "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
  "%TypedArrayPrototype%": ["TypedArray", "prototype"],
  "%TypeErrorPrototype%": ["TypeError", "prototype"],
  "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
  "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
  "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
  "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
  "%URIErrorPrototype%": ["URIError", "prototype"],
  "%WeakMapPrototype%": ["WeakMap", "prototype"],
  "%WeakSetPrototype%": ["WeakSet", "prototype"]
}, ys = Z0, ul = iH, uH = ys.call(Function.call, Array.prototype.concat), fH = ys.call(Function.apply, Array.prototype.splice), Qv = ys.call(Function.call, String.prototype.replace), fl = ys.call(Function.call, String.prototype.slice), dH = ys.call(Function.call, RegExp.prototype.exec), hH = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, pH = /\\(\\)?/g, vH = function(t) {
  var r = fl(t, 0, 1), n = fl(t, -1);
  if (r === "%" && n !== "%")
    throw new Ii("invalid intrinsic syntax, expected closing `%`");
  if (n === "%" && r !== "%")
    throw new Ii("invalid intrinsic syntax, expected opening `%`");
  var i = [];
  return Qv(t, hH, function(a, s, o, l) {
    i[i.length] = o ? Qv(l, pH, "$1") : s || a;
  }), i;
}, gH = function(t, r) {
  var n = t, i;
  if (ul(Jv, n) && (i = Jv[n], n = "%" + i[0] + "%"), ul(In, n)) {
    var a = In[n];
    if (a === di && (a = cH(n)), typeof a > "u" && !r)
      throw new $i("intrinsic " + t + " exists, but is not available. Please file an issue!");
    return {
      alias: i,
      name: n,
      value: a
    };
  }
  throw new Ii("intrinsic " + t + " does not exist!");
}, Zn = function(t, r) {
  if (typeof t != "string" || t.length === 0)
    throw new $i("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && typeof r != "boolean")
    throw new $i('"allowMissing" argument must be a boolean');
  if (dH(/^%?[^%]*%?$/, t) === null)
    throw new Ii("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var n = vH(t), i = n.length > 0 ? n[0] : "", a = gH("%" + i + "%", r), s = a.name, o = a.value, l = !1, c = a.alias;
  c && (i = c[0], fH(n, uH([0, 1], c)));
  for (var u = 1, f = !0; u < n.length; u += 1) {
    var d = n[u], h = fl(d, 0, 1), p = fl(d, -1);
    if ((h === '"' || h === "'" || h === "`" || p === '"' || p === "'" || p === "`") && h !== p)
      throw new Ii("property names with quotes must have matching quotes");
    if ((d === "constructor" || !f) && (l = !0), i += "." + d, s = "%" + i + "%", ul(In, s))
      o = In[s];
    else if (o != null) {
      if (!(d in o)) {
        if (!r)
          throw new $i("base intrinsic for " + t + " exists, but the property is not available.");
        return;
      }
      if (Bn && u + 1 >= n.length) {
        var v = Bn(o, d);
        f = !!v, f && "get" in v && !("originalValue" in v.get) ? o = v.get : o = o[d];
      } else
        f = ul(o, d), o = o[d];
      f && !l && (In[s] = o);
    }
  }
  return o;
}, yb = { exports: {} }, mH = Zn, hf = mH("%Object.defineProperty%", !0), pf = function() {
  if (hf)
    try {
      return hf({}, "a", { value: 1 }), !0;
    } catch {
      return !1;
    }
  return !1;
};
pf.hasArrayLengthDefineBug = function() {
  if (!pf())
    return null;
  try {
    return hf([], "length", { value: 1 }).length !== 1;
  } catch {
    return !0;
  }
};
var bb = pf, xH = Zn, mo = xH("%Object.getOwnPropertyDescriptor%", !0);
if (mo)
  try {
    mo([], "length");
  } catch {
    mo = null;
  }
var _b = mo, yH = bb(), X0 = Zn, La = yH && X0("%Object.defineProperty%", !0);
if (La)
  try {
    La({}, "a", { value: 1 });
  } catch {
    La = !1;
  }
var bH = X0("%SyntaxError%"), oi = X0("%TypeError%"), eg = _b, _H = function(t, r, n) {
  if (!t || typeof t != "object" && typeof t != "function")
    throw new oi("`obj` must be an object or a function`");
  if (typeof r != "string" && typeof r != "symbol")
    throw new oi("`property` must be a string or a symbol`");
  if (arguments.length > 3 && typeof arguments[3] != "boolean" && arguments[3] !== null)
    throw new oi("`nonEnumerable`, if provided, must be a boolean or null");
  if (arguments.length > 4 && typeof arguments[4] != "boolean" && arguments[4] !== null)
    throw new oi("`nonWritable`, if provided, must be a boolean or null");
  if (arguments.length > 5 && typeof arguments[5] != "boolean" && arguments[5] !== null)
    throw new oi("`nonConfigurable`, if provided, must be a boolean or null");
  if (arguments.length > 6 && typeof arguments[6] != "boolean")
    throw new oi("`loose`, if provided, must be a boolean");
  var i = arguments.length > 3 ? arguments[3] : null, a = arguments.length > 4 ? arguments[4] : null, s = arguments.length > 5 ? arguments[5] : null, o = arguments.length > 6 ? arguments[6] : !1, l = !!eg && eg(t, r);
  if (La)
    La(t, r, {
      configurable: s === null && l ? l.configurable : !s,
      enumerable: i === null && l ? l.enumerable : !i,
      value: n,
      writable: a === null && l ? l.writable : !a
    });
  else if (o || !i && !a && !s)
    t[r] = n;
  else
    throw new bH("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
}, wb = Zn, tg = _H, wH = bb(), rg = _b, ng = wb("%TypeError%"), $H = wb("%Math.floor%"), DH = function(t, r) {
  if (typeof t != "function")
    throw new ng("`fn` is not a function");
  if (typeof r != "number" || r < 0 || r > 4294967295 || $H(r) !== r)
    throw new ng("`length` must be a positive 32-bit integer");
  var n = arguments.length > 2 && !!arguments[2], i = !0, a = !0;
  if ("length" in t && rg) {
    var s = rg(t, "length");
    s && !s.configurable && (i = !1), s && !s.writable && (a = !1);
  }
  return (i || a || !n) && (wH ? tg(
    /** @type {Parameters<define>[0]} */
    t,
    "length",
    r,
    !0,
    !0
  ) : tg(
    /** @type {Parameters<define>[0]} */
    t,
    "length",
    r
  )), t;
};
(function(e) {
  var t = Z0, r = Zn, n = DH, i = r("%TypeError%"), a = r("%Function.prototype.apply%"), s = r("%Function.prototype.call%"), o = r("%Reflect.apply%", !0) || t.call(s, a), l = r("%Object.defineProperty%", !0), c = r("%Math.max%");
  if (l)
    try {
      l({}, "a", { value: 1 });
    } catch {
      l = null;
    }
  e.exports = function(d) {
    if (typeof d != "function")
      throw new i("a function is required");
    var h = o(t, s, arguments);
    return n(
      h,
      1 + c(0, d.length - (arguments.length - 1)),
      !0
    );
  };
  var u = function() {
    return o(t, a, arguments);
  };
  l ? l(e.exports, "apply", { value: u }) : e.exports.apply = u;
})(yb);
var EH = yb.exports, $b = Zn, Db = EH, AH = Db($b("String.prototype.indexOf")), CH = function(t, r) {
  var n = $b(t, !!r);
  return typeof n == "function" && AH(t, ".prototype.") > -1 ? Db(n) : n;
};
const SH = {}, kH = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: SH
}, Symbol.toStringTag, { value: "Module" })), Eb = /* @__PURE__ */ jz(kH);
var J0 = typeof Map == "function" && Map.prototype, Mc = Object.getOwnPropertyDescriptor && J0 ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, dl = J0 && Mc && typeof Mc.get == "function" ? Mc.get : null, ig = J0 && Map.prototype.forEach, Q0 = typeof Set == "function" && Set.prototype, Pc = Object.getOwnPropertyDescriptor && Q0 ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, hl = Q0 && Pc && typeof Pc.get == "function" ? Pc.get : null, ag = Q0 && Set.prototype.forEach, OH = typeof WeakMap == "function" && WeakMap.prototype, ja = OH ? WeakMap.prototype.has : null, FH = typeof WeakSet == "function" && WeakSet.prototype, za = FH ? WeakSet.prototype.has : null, TH = typeof WeakRef == "function" && WeakRef.prototype, sg = TH ? WeakRef.prototype.deref : null, MH = Boolean.prototype.valueOf, PH = Object.prototype.toString, BH = Function.prototype.toString, IH = String.prototype.match, ed = String.prototype.slice, ln = String.prototype.replace, RH = String.prototype.toUpperCase, og = String.prototype.toLowerCase, Ab = RegExp.prototype.test, lg = Array.prototype.concat, fr = Array.prototype.join, NH = Array.prototype.slice, cg = Math.floor, vf = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, Bc = Object.getOwnPropertySymbols, gf = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, Ri = typeof Symbol == "function" && typeof Symbol.iterator == "object", xt = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === Ri || !0) ? Symbol.toStringTag : null, Cb = Object.prototype.propertyIsEnumerable, ug = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(e) {
  return e.__proto__;
} : null);
function fg(e, t) {
  if (e === 1 / 0 || e === -1 / 0 || e !== e || e && e > -1e3 && e < 1e3 || Ab.call(/e/, t))
    return t;
  var r = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
  if (typeof e == "number") {
    var n = e < 0 ? -cg(-e) : cg(e);
    if (n !== e) {
      var i = String(n), a = ed.call(t, i.length + 1);
      return ln.call(i, r, "$&_") + "." + ln.call(ln.call(a, /([0-9]{3})/g, "$&_"), /_$/, "");
    }
  }
  return ln.call(t, r, "$&_");
}
var mf = Eb, dg = mf.custom, hg = kb(dg) ? dg : null, LH = function e(t, r, n, i) {
  var a = r || {};
  if (en(a, "quoteStyle") && a.quoteStyle !== "single" && a.quoteStyle !== "double")
    throw new TypeError('option "quoteStyle" must be "single" or "double"');
  if (en(a, "maxStringLength") && (typeof a.maxStringLength == "number" ? a.maxStringLength < 0 && a.maxStringLength !== 1 / 0 : a.maxStringLength !== null))
    throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
  var s = en(a, "customInspect") ? a.customInspect : !0;
  if (typeof s != "boolean" && s !== "symbol")
    throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
  if (en(a, "indent") && a.indent !== null && a.indent !== "	" && !(parseInt(a.indent, 10) === a.indent && a.indent > 0))
    throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
  if (en(a, "numericSeparator") && typeof a.numericSeparator != "boolean")
    throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
  var o = a.numericSeparator;
  if (typeof t > "u")
    return "undefined";
  if (t === null)
    return "null";
  if (typeof t == "boolean")
    return t ? "true" : "false";
  if (typeof t == "string")
    return Fb(t, a);
  if (typeof t == "number") {
    if (t === 0)
      return 1 / 0 / t > 0 ? "0" : "-0";
    var l = String(t);
    return o ? fg(t, l) : l;
  }
  if (typeof t == "bigint") {
    var c = String(t) + "n";
    return o ? fg(t, c) : c;
  }
  var u = typeof a.depth > "u" ? 5 : a.depth;
  if (typeof n > "u" && (n = 0), n >= u && u > 0 && typeof t == "object")
    return xf(t) ? "[Array]" : "[Object]";
  var f = nV(a, n);
  if (typeof i > "u")
    i = [];
  else if (Ob(i, t) >= 0)
    return "[Circular]";
  function d(k, j, P) {
    if (j && (i = NH.call(i), i.push(j)), P) {
      var H = {
        depth: a.depth
      };
      return en(a, "quoteStyle") && (H.quoteStyle = a.quoteStyle), e(k, H, n + 1, i);
    }
    return e(k, a, n + 1, i);
  }
  if (typeof t == "function" && !pg(t)) {
    var h = GH(t), p = qs(t, d);
    return "[Function" + (h ? ": " + h : " (anonymous)") + "]" + (p.length > 0 ? " { " + fr.call(p, ", ") + " }" : "");
  }
  if (kb(t)) {
    var v = Ri ? ln.call(String(t), /^(Symbol\(.*\))_[^)]*$/, "$1") : gf.call(t);
    return typeof t == "object" && !Ri ? wa(v) : v;
  }
  if (eV(t)) {
    for (var g = "<" + og.call(String(t.nodeName)), m = t.attributes || [], y = 0; y < m.length; y++)
      g += " " + m[y].name + "=" + Sb(jH(m[y].value), "double", a);
    return g += ">", t.childNodes && t.childNodes.length && (g += "..."), g += "</" + og.call(String(t.nodeName)) + ">", g;
  }
  if (xf(t)) {
    if (t.length === 0)
      return "[]";
    var _ = qs(t, d);
    return f && !rV(_) ? "[" + yf(_, f) + "]" : "[ " + fr.call(_, ", ") + " ]";
  }
  if (HH(t)) {
    var x = qs(t, d);
    return !("cause" in Error.prototype) && "cause" in t && !Cb.call(t, "cause") ? "{ [" + String(t) + "] " + fr.call(lg.call("[cause]: " + d(t.cause), x), ", ") + " }" : x.length === 0 ? "[" + String(t) + "]" : "{ [" + String(t) + "] " + fr.call(x, ", ") + " }";
  }
  if (typeof t == "object" && s) {
    if (hg && typeof t[hg] == "function" && mf)
      return mf(t, { depth: u - n });
    if (s !== "symbol" && typeof t.inspect == "function")
      return t.inspect();
  }
  if (KH(t)) {
    var b = [];
    return ig && ig.call(t, function(k, j) {
      b.push(d(j, t, !0) + " => " + d(k, t));
    }), vg("Map", dl.call(t), b, f);
  }
  if (JH(t)) {
    var w = [];
    return ag && ag.call(t, function(k) {
      w.push(d(k, t));
    }), vg("Set", hl.call(t), w, f);
  }
  if (ZH(t))
    return Ic("WeakMap");
  if (QH(t))
    return Ic("WeakSet");
  if (XH(t))
    return Ic("WeakRef");
  if (YH(t))
    return wa(d(Number(t)));
  if (UH(t))
    return wa(d(vf.call(t)));
  if (WH(t))
    return wa(MH.call(t));
  if (VH(t))
    return wa(d(String(t)));
  if (typeof window < "u" && t === window)
    return "{ [object Window] }";
  if (t === le)
    return "{ [object globalThis] }";
  if (!zH(t) && !pg(t)) {
    var E = qs(t, d), $ = ug ? ug(t) === Object.prototype : t instanceof Object || t.constructor === Object, C = t instanceof Object ? "" : "null prototype", D = !$ && xt && Object(t) === t && xt in t ? ed.call(mn(t), 8, -1) : C ? "Object" : "", A = $ || typeof t.constructor != "function" ? "" : t.constructor.name ? t.constructor.name + " " : "", S = A + (D || C ? "[" + fr.call(lg.call([], D || [], C || []), ": ") + "] " : "");
    return E.length === 0 ? S + "{}" : f ? S + "{" + yf(E, f) + "}" : S + "{ " + fr.call(E, ", ") + " }";
  }
  return String(t);
};
function Sb(e, t, r) {
  var n = (r.quoteStyle || t) === "double" ? '"' : "'";
  return n + e + n;
}
function jH(e) {
  return ln.call(String(e), /"/g, "&quot;");
}
function xf(e) {
  return mn(e) === "[object Array]" && (!xt || !(typeof e == "object" && xt in e));
}
function zH(e) {
  return mn(e) === "[object Date]" && (!xt || !(typeof e == "object" && xt in e));
}
function pg(e) {
  return mn(e) === "[object RegExp]" && (!xt || !(typeof e == "object" && xt in e));
}
function HH(e) {
  return mn(e) === "[object Error]" && (!xt || !(typeof e == "object" && xt in e));
}
function VH(e) {
  return mn(e) === "[object String]" && (!xt || !(typeof e == "object" && xt in e));
}
function YH(e) {
  return mn(e) === "[object Number]" && (!xt || !(typeof e == "object" && xt in e));
}
function WH(e) {
  return mn(e) === "[object Boolean]" && (!xt || !(typeof e == "object" && xt in e));
}
function kb(e) {
  if (Ri)
    return e && typeof e == "object" && e instanceof Symbol;
  if (typeof e == "symbol")
    return !0;
  if (!e || typeof e != "object" || !gf)
    return !1;
  try {
    return gf.call(e), !0;
  } catch {
  }
  return !1;
}
function UH(e) {
  if (!e || typeof e != "object" || !vf)
    return !1;
  try {
    return vf.call(e), !0;
  } catch {
  }
  return !1;
}
var qH = Object.prototype.hasOwnProperty || function(e) {
  return e in this;
};
function en(e, t) {
  return qH.call(e, t);
}
function mn(e) {
  return PH.call(e);
}
function GH(e) {
  if (e.name)
    return e.name;
  var t = IH.call(BH.call(e), /^function\s*([\w$]+)/);
  return t ? t[1] : null;
}
function Ob(e, t) {
  if (e.indexOf)
    return e.indexOf(t);
  for (var r = 0, n = e.length; r < n; r++)
    if (e[r] === t)
      return r;
  return -1;
}
function KH(e) {
  if (!dl || !e || typeof e != "object")
    return !1;
  try {
    dl.call(e);
    try {
      hl.call(e);
    } catch {
      return !0;
    }
    return e instanceof Map;
  } catch {
  }
  return !1;
}
function ZH(e) {
  if (!ja || !e || typeof e != "object")
    return !1;
  try {
    ja.call(e, ja);
    try {
      za.call(e, za);
    } catch {
      return !0;
    }
    return e instanceof WeakMap;
  } catch {
  }
  return !1;
}
function XH(e) {
  if (!sg || !e || typeof e != "object")
    return !1;
  try {
    return sg.call(e), !0;
  } catch {
  }
  return !1;
}
function JH(e) {
  if (!hl || !e || typeof e != "object")
    return !1;
  try {
    hl.call(e);
    try {
      dl.call(e);
    } catch {
      return !0;
    }
    return e instanceof Set;
  } catch {
  }
  return !1;
}
function QH(e) {
  if (!za || !e || typeof e != "object")
    return !1;
  try {
    za.call(e, za);
    try {
      ja.call(e, ja);
    } catch {
      return !0;
    }
    return e instanceof WeakSet;
  } catch {
  }
  return !1;
}
function eV(e) {
  return !e || typeof e != "object" ? !1 : typeof HTMLElement < "u" && e instanceof HTMLElement ? !0 : typeof e.nodeName == "string" && typeof e.getAttribute == "function";
}
function Fb(e, t) {
  if (e.length > t.maxStringLength) {
    var r = e.length - t.maxStringLength, n = "... " + r + " more character" + (r > 1 ? "s" : "");
    return Fb(ed.call(e, 0, t.maxStringLength), t) + n;
  }
  var i = ln.call(ln.call(e, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, tV);
  return Sb(i, "single", t);
}
function tV(e) {
  var t = e.charCodeAt(0), r = {
    8: "b",
    9: "t",
    10: "n",
    12: "f",
    13: "r"
  }[t];
  return r ? "\\" + r : "\\x" + (t < 16 ? "0" : "") + RH.call(t.toString(16));
}
function wa(e) {
  return "Object(" + e + ")";
}
function Ic(e) {
  return e + " { ? }";
}
function vg(e, t, r, n) {
  var i = n ? yf(r, n) : fr.call(r, ", ");
  return e + " (" + t + ") {" + i + "}";
}
function rV(e) {
  for (var t = 0; t < e.length; t++)
    if (Ob(e[t], `
`) >= 0)
      return !1;
  return !0;
}
function nV(e, t) {
  var r;
  if (e.indent === "	")
    r = "	";
  else if (typeof e.indent == "number" && e.indent > 0)
    r = fr.call(Array(e.indent + 1), " ");
  else
    return null;
  return {
    base: r,
    prev: fr.call(Array(t + 1), r)
  };
}
function yf(e, t) {
  if (e.length === 0)
    return "";
  var r = `
` + t.prev + t.base;
  return r + fr.call(e, "," + r) + `
` + t.prev;
}
function qs(e, t) {
  var r = xf(e), n = [];
  if (r) {
    n.length = e.length;
    for (var i = 0; i < e.length; i++)
      n[i] = en(e, i) ? t(e[i], e) : "";
  }
  var a = typeof Bc == "function" ? Bc(e) : [], s;
  if (Ri) {
    s = {};
    for (var o = 0; o < a.length; o++)
      s["$" + a[o]] = a[o];
  }
  for (var l in e)
    en(e, l) && (r && String(Number(l)) === l && l < e.length || Ri && s["$" + l] instanceof Symbol || (Ab.call(/[^\w$]/, l) ? n.push(t(l, e) + ": " + t(e[l], e)) : n.push(l + ": " + t(e[l], e))));
  if (typeof Bc == "function")
    for (var c = 0; c < a.length; c++)
      Cb.call(e, a[c]) && n.push("[" + t(a[c]) + "]: " + t(e[a[c]], e));
  return n;
}
var td = Zn, ta = CH, iV = LH, aV = td("%TypeError%"), Gs = td("%WeakMap%", !0), Ks = td("%Map%", !0), sV = ta("WeakMap.prototype.get", !0), oV = ta("WeakMap.prototype.set", !0), lV = ta("WeakMap.prototype.has", !0), cV = ta("Map.prototype.get", !0), uV = ta("Map.prototype.set", !0), fV = ta("Map.prototype.has", !0), rd = function(e, t) {
  for (var r = e, n; (n = r.next) !== null; r = n)
    if (n.key === t)
      return r.next = n.next, n.next = e.next, e.next = n, n;
}, dV = function(e, t) {
  var r = rd(e, t);
  return r && r.value;
}, hV = function(e, t, r) {
  var n = rd(e, t);
  n ? n.value = r : e.next = {
    // eslint-disable-line no-param-reassign
    key: t,
    next: e.next,
    value: r
  };
}, pV = function(e, t) {
  return !!rd(e, t);
}, vV = function() {
  var t, r, n, i = {
    assert: function(a) {
      if (!i.has(a))
        throw new aV("Side channel does not contain " + iV(a));
    },
    get: function(a) {
      if (Gs && a && (typeof a == "object" || typeof a == "function")) {
        if (t)
          return sV(t, a);
      } else if (Ks) {
        if (r)
          return cV(r, a);
      } else if (n)
        return dV(n, a);
    },
    has: function(a) {
      if (Gs && a && (typeof a == "object" || typeof a == "function")) {
        if (t)
          return lV(t, a);
      } else if (Ks) {
        if (r)
          return fV(r, a);
      } else if (n)
        return pV(n, a);
      return !1;
    },
    set: function(a, s) {
      Gs && a && (typeof a == "object" || typeof a == "function") ? (t || (t = new Gs()), oV(t, a, s)) : Ks ? (r || (r = new Ks()), uV(r, a, s)) : (n || (n = { key: {}, next: null }), hV(n, a, s));
    }
  };
  return i;
}, gV = String.prototype.replace, mV = /%20/g, Rc = {
  RFC1738: "RFC1738",
  RFC3986: "RFC3986"
}, nd = {
  default: Rc.RFC3986,
  formatters: {
    RFC1738: function(e) {
      return gV.call(e, mV, "+");
    },
    RFC3986: function(e) {
      return String(e);
    }
  },
  RFC1738: Rc.RFC1738,
  RFC3986: Rc.RFC3986
}, xV = nd, Nc = Object.prototype.hasOwnProperty, On = Array.isArray, lr = function() {
  for (var e = [], t = 0; t < 256; ++t)
    e.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase());
  return e;
}(), yV = function(t) {
  for (; t.length > 1; ) {
    var r = t.pop(), n = r.obj[r.prop];
    if (On(n)) {
      for (var i = [], a = 0; a < n.length; ++a)
        typeof n[a] < "u" && i.push(n[a]);
      r.obj[r.prop] = i;
    }
  }
}, Tb = function(t, r) {
  for (var n = r && r.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, i = 0; i < t.length; ++i)
    typeof t[i] < "u" && (n[i] = t[i]);
  return n;
}, bV = function e(t, r, n) {
  if (!r)
    return t;
  if (typeof r != "object") {
    if (On(t))
      t.push(r);
    else if (t && typeof t == "object")
      (n && (n.plainObjects || n.allowPrototypes) || !Nc.call(Object.prototype, r)) && (t[r] = !0);
    else
      return [t, r];
    return t;
  }
  if (!t || typeof t != "object")
    return [t].concat(r);
  var i = t;
  return On(t) && !On(r) && (i = Tb(t, n)), On(t) && On(r) ? (r.forEach(function(a, s) {
    if (Nc.call(t, s)) {
      var o = t[s];
      o && typeof o == "object" && a && typeof a == "object" ? t[s] = e(o, a, n) : t.push(a);
    } else
      t[s] = a;
  }), t) : Object.keys(r).reduce(function(a, s) {
    var o = r[s];
    return Nc.call(a, s) ? a[s] = e(a[s], o, n) : a[s] = o, a;
  }, i);
}, _V = function(t, r) {
  return Object.keys(r).reduce(function(n, i) {
    return n[i] = r[i], n;
  }, t);
}, wV = function(e, t, r) {
  var n = e.replace(/\+/g, " ");
  if (r === "iso-8859-1")
    return n.replace(/%[0-9a-f]{2}/gi, unescape);
  try {
    return decodeURIComponent(n);
  } catch {
    return n;
  }
}, $V = function(t, r, n, i, a) {
  if (t.length === 0)
    return t;
  var s = t;
  if (typeof t == "symbol" ? s = Symbol.prototype.toString.call(t) : typeof t != "string" && (s = String(t)), n === "iso-8859-1")
    return escape(s).replace(/%u[0-9a-f]{4}/gi, function(u) {
      return "%26%23" + parseInt(u.slice(2), 16) + "%3B";
    });
  for (var o = "", l = 0; l < s.length; ++l) {
    var c = s.charCodeAt(l);
    if (c === 45 || c === 46 || c === 95 || c === 126 || c >= 48 && c <= 57 || c >= 65 && c <= 90 || c >= 97 && c <= 122 || a === xV.RFC1738 && (c === 40 || c === 41)) {
      o += s.charAt(l);
      continue;
    }
    if (c < 128) {
      o = o + lr[c];
      continue;
    }
    if (c < 2048) {
      o = o + (lr[192 | c >> 6] + lr[128 | c & 63]);
      continue;
    }
    if (c < 55296 || c >= 57344) {
      o = o + (lr[224 | c >> 12] + lr[128 | c >> 6 & 63] + lr[128 | c & 63]);
      continue;
    }
    l += 1, c = 65536 + ((c & 1023) << 10 | s.charCodeAt(l) & 1023), o += lr[240 | c >> 18] + lr[128 | c >> 12 & 63] + lr[128 | c >> 6 & 63] + lr[128 | c & 63];
  }
  return o;
}, DV = function(t) {
  for (var r = [{ obj: { o: t }, prop: "o" }], n = [], i = 0; i < r.length; ++i)
    for (var a = r[i], s = a.obj[a.prop], o = Object.keys(s), l = 0; l < o.length; ++l) {
      var c = o[l], u = s[c];
      typeof u == "object" && u !== null && n.indexOf(u) === -1 && (r.push({ obj: s, prop: c }), n.push(u));
    }
  return yV(r), t;
}, EV = function(t) {
  return Object.prototype.toString.call(t) === "[object RegExp]";
}, AV = function(t) {
  return !t || typeof t != "object" ? !1 : !!(t.constructor && t.constructor.isBuffer && t.constructor.isBuffer(t));
}, CV = function(t, r) {
  return [].concat(t, r);
}, SV = function(t, r) {
  if (On(t)) {
    for (var n = [], i = 0; i < t.length; i += 1)
      n.push(r(t[i]));
    return n;
  }
  return r(t);
}, Mb = {
  arrayToObject: Tb,
  assign: _V,
  combine: CV,
  compact: DV,
  decode: wV,
  encode: $V,
  isBuffer: AV,
  isRegExp: EV,
  maybeMap: SV,
  merge: bV
}, Pb = vV, xo = Mb, Ha = nd, kV = Object.prototype.hasOwnProperty, gg = {
  brackets: function(t) {
    return t + "[]";
  },
  comma: "comma",
  indices: function(t, r) {
    return t + "[" + r + "]";
  },
  repeat: function(t) {
    return t;
  }
}, Ar = Array.isArray, OV = Array.prototype.push, Bb = function(e, t) {
  OV.apply(e, Ar(t) ? t : [t]);
}, FV = Date.prototype.toISOString, mg = Ha.default, pt = {
  addQueryPrefix: !1,
  allowDots: !1,
  charset: "utf-8",
  charsetSentinel: !1,
  delimiter: "&",
  encode: !0,
  encoder: xo.encode,
  encodeValuesOnly: !1,
  format: mg,
  formatter: Ha.formatters[mg],
  // deprecated
  indices: !1,
  serializeDate: function(t) {
    return FV.call(t);
  },
  skipNulls: !1,
  strictNullHandling: !1
}, TV = function(t) {
  return typeof t == "string" || typeof t == "number" || typeof t == "boolean" || typeof t == "symbol" || typeof t == "bigint";
}, Lc = {}, MV = function e(t, r, n, i, a, s, o, l, c, u, f, d, h, p, v, g) {
  for (var m = t, y = g, _ = 0, x = !1; (y = y.get(Lc)) !== void 0 && !x; ) {
    var b = y.get(t);
    if (_ += 1, typeof b < "u") {
      if (b === _)
        throw new RangeError("Cyclic object value");
      x = !0;
    }
    typeof y.get(Lc) > "u" && (_ = 0);
  }
  if (typeof l == "function" ? m = l(r, m) : m instanceof Date ? m = f(m) : n === "comma" && Ar(m) && (m = xo.maybeMap(m, function(H) {
    return H instanceof Date ? f(H) : H;
  })), m === null) {
    if (a)
      return o && !p ? o(r, pt.encoder, v, "key", d) : r;
    m = "";
  }
  if (TV(m) || xo.isBuffer(m)) {
    if (o) {
      var w = p ? r : o(r, pt.encoder, v, "key", d);
      return [h(w) + "=" + h(o(m, pt.encoder, v, "value", d))];
    }
    return [h(r) + "=" + h(String(m))];
  }
  var E = [];
  if (typeof m > "u")
    return E;
  var $;
  if (n === "comma" && Ar(m))
    p && o && (m = xo.maybeMap(m, o)), $ = [{ value: m.length > 0 ? m.join(",") || null : void 0 }];
  else if (Ar(l))
    $ = l;
  else {
    var C = Object.keys(m);
    $ = c ? C.sort(c) : C;
  }
  for (var D = i && Ar(m) && m.length === 1 ? r + "[]" : r, A = 0; A < $.length; ++A) {
    var S = $[A], k = typeof S == "object" && typeof S.value < "u" ? S.value : m[S];
    if (!(s && k === null)) {
      var j = Ar(m) ? typeof n == "function" ? n(D, S) : D : D + (u ? "." + S : "[" + S + "]");
      g.set(t, _);
      var P = Pb();
      P.set(Lc, g), Bb(E, e(
        k,
        j,
        n,
        i,
        a,
        s,
        n === "comma" && p && Ar(m) ? null : o,
        l,
        c,
        u,
        f,
        d,
        h,
        p,
        v,
        P
      ));
    }
  }
  return E;
}, PV = function(t) {
  if (!t)
    return pt;
  if (t.encoder !== null && typeof t.encoder < "u" && typeof t.encoder != "function")
    throw new TypeError("Encoder has to be a function.");
  var r = t.charset || pt.charset;
  if (typeof t.charset < "u" && t.charset !== "utf-8" && t.charset !== "iso-8859-1")
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  var n = Ha.default;
  if (typeof t.format < "u") {
    if (!kV.call(Ha.formatters, t.format))
      throw new TypeError("Unknown format option provided.");
    n = t.format;
  }
  var i = Ha.formatters[n], a = pt.filter;
  return (typeof t.filter == "function" || Ar(t.filter)) && (a = t.filter), {
    addQueryPrefix: typeof t.addQueryPrefix == "boolean" ? t.addQueryPrefix : pt.addQueryPrefix,
    allowDots: typeof t.allowDots > "u" ? pt.allowDots : !!t.allowDots,
    charset: r,
    charsetSentinel: typeof t.charsetSentinel == "boolean" ? t.charsetSentinel : pt.charsetSentinel,
    delimiter: typeof t.delimiter > "u" ? pt.delimiter : t.delimiter,
    encode: typeof t.encode == "boolean" ? t.encode : pt.encode,
    encoder: typeof t.encoder == "function" ? t.encoder : pt.encoder,
    encodeValuesOnly: typeof t.encodeValuesOnly == "boolean" ? t.encodeValuesOnly : pt.encodeValuesOnly,
    filter: a,
    format: n,
    formatter: i,
    serializeDate: typeof t.serializeDate == "function" ? t.serializeDate : pt.serializeDate,
    skipNulls: typeof t.skipNulls == "boolean" ? t.skipNulls : pt.skipNulls,
    sort: typeof t.sort == "function" ? t.sort : null,
    strictNullHandling: typeof t.strictNullHandling == "boolean" ? t.strictNullHandling : pt.strictNullHandling
  };
}, BV = function(e, t) {
  var r = e, n = PV(t), i, a;
  typeof n.filter == "function" ? (a = n.filter, r = a("", r)) : Ar(n.filter) && (a = n.filter, i = a);
  var s = [];
  if (typeof r != "object" || r === null)
    return "";
  var o;
  t && t.arrayFormat in gg ? o = t.arrayFormat : t && "indices" in t ? o = t.indices ? "indices" : "repeat" : o = "indices";
  var l = gg[o];
  if (t && "commaRoundTrip" in t && typeof t.commaRoundTrip != "boolean")
    throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
  var c = l === "comma" && t && t.commaRoundTrip;
  i || (i = Object.keys(r)), n.sort && i.sort(n.sort);
  for (var u = Pb(), f = 0; f < i.length; ++f) {
    var d = i[f];
    n.skipNulls && r[d] === null || Bb(s, MV(
      r[d],
      d,
      l,
      c,
      n.strictNullHandling,
      n.skipNulls,
      n.encode ? n.encoder : null,
      n.filter,
      n.sort,
      n.allowDots,
      n.serializeDate,
      n.format,
      n.formatter,
      n.encodeValuesOnly,
      n.charset,
      u
    ));
  }
  var h = s.join(n.delimiter), p = n.addQueryPrefix === !0 ? "?" : "";
  return n.charsetSentinel && (n.charset === "iso-8859-1" ? p += "utf8=%26%2310003%3B&" : p += "utf8=%E2%9C%93&"), h.length > 0 ? p + h : "";
}, Ni = Mb, bf = Object.prototype.hasOwnProperty, IV = Array.isArray, rt = {
  allowDots: !1,
  allowPrototypes: !1,
  allowSparse: !1,
  arrayLimit: 20,
  charset: "utf-8",
  charsetSentinel: !1,
  comma: !1,
  decoder: Ni.decode,
  delimiter: "&",
  depth: 5,
  ignoreQueryPrefix: !1,
  interpretNumericEntities: !1,
  parameterLimit: 1e3,
  parseArrays: !0,
  plainObjects: !1,
  strictNullHandling: !1
}, RV = function(e) {
  return e.replace(/&#(\d+);/g, function(t, r) {
    return String.fromCharCode(parseInt(r, 10));
  });
}, Ib = function(e, t) {
  return e && typeof e == "string" && t.comma && e.indexOf(",") > -1 ? e.split(",") : e;
}, NV = "utf8=%26%2310003%3B", LV = "utf8=%E2%9C%93", jV = function(t, r) {
  var n = { __proto__: null }, i = r.ignoreQueryPrefix ? t.replace(/^\?/, "") : t, a = r.parameterLimit === 1 / 0 ? void 0 : r.parameterLimit, s = i.split(r.delimiter, a), o = -1, l, c = r.charset;
  if (r.charsetSentinel)
    for (l = 0; l < s.length; ++l)
      s[l].indexOf("utf8=") === 0 && (s[l] === LV ? c = "utf-8" : s[l] === NV && (c = "iso-8859-1"), o = l, l = s.length);
  for (l = 0; l < s.length; ++l)
    if (l !== o) {
      var u = s[l], f = u.indexOf("]="), d = f === -1 ? u.indexOf("=") : f + 1, h, p;
      d === -1 ? (h = r.decoder(u, rt.decoder, c, "key"), p = r.strictNullHandling ? null : "") : (h = r.decoder(u.slice(0, d), rt.decoder, c, "key"), p = Ni.maybeMap(
        Ib(u.slice(d + 1), r),
        function(v) {
          return r.decoder(v, rt.decoder, c, "value");
        }
      )), p && r.interpretNumericEntities && c === "iso-8859-1" && (p = RV(p)), u.indexOf("[]=") > -1 && (p = IV(p) ? [p] : p), bf.call(n, h) ? n[h] = Ni.combine(n[h], p) : n[h] = p;
    }
  return n;
}, zV = function(e, t, r, n) {
  for (var i = n ? t : Ib(t, r), a = e.length - 1; a >= 0; --a) {
    var s, o = e[a];
    if (o === "[]" && r.parseArrays)
      s = [].concat(i);
    else {
      s = r.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
      var l = o.charAt(0) === "[" && o.charAt(o.length - 1) === "]" ? o.slice(1, -1) : o, c = parseInt(l, 10);
      !r.parseArrays && l === "" ? s = { 0: i } : !isNaN(c) && o !== l && String(c) === l && c >= 0 && r.parseArrays && c <= r.arrayLimit ? (s = [], s[c] = i) : l !== "__proto__" && (s[l] = i);
    }
    i = s;
  }
  return i;
}, HV = function(t, r, n, i) {
  if (t) {
    var a = n.allowDots ? t.replace(/\.([^.[]+)/g, "[$1]") : t, s = /(\[[^[\]]*])/, o = /(\[[^[\]]*])/g, l = n.depth > 0 && s.exec(a), c = l ? a.slice(0, l.index) : a, u = [];
    if (c) {
      if (!n.plainObjects && bf.call(Object.prototype, c) && !n.allowPrototypes)
        return;
      u.push(c);
    }
    for (var f = 0; n.depth > 0 && (l = o.exec(a)) !== null && f < n.depth; ) {
      if (f += 1, !n.plainObjects && bf.call(Object.prototype, l[1].slice(1, -1)) && !n.allowPrototypes)
        return;
      u.push(l[1]);
    }
    return l && u.push("[" + a.slice(l.index) + "]"), zV(u, r, n, i);
  }
}, VV = function(t) {
  if (!t)
    return rt;
  if (t.decoder !== null && t.decoder !== void 0 && typeof t.decoder != "function")
    throw new TypeError("Decoder has to be a function.");
  if (typeof t.charset < "u" && t.charset !== "utf-8" && t.charset !== "iso-8859-1")
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  var r = typeof t.charset > "u" ? rt.charset : t.charset;
  return {
    allowDots: typeof t.allowDots > "u" ? rt.allowDots : !!t.allowDots,
    allowPrototypes: typeof t.allowPrototypes == "boolean" ? t.allowPrototypes : rt.allowPrototypes,
    allowSparse: typeof t.allowSparse == "boolean" ? t.allowSparse : rt.allowSparse,
    arrayLimit: typeof t.arrayLimit == "number" ? t.arrayLimit : rt.arrayLimit,
    charset: r,
    charsetSentinel: typeof t.charsetSentinel == "boolean" ? t.charsetSentinel : rt.charsetSentinel,
    comma: typeof t.comma == "boolean" ? t.comma : rt.comma,
    decoder: typeof t.decoder == "function" ? t.decoder : rt.decoder,
    delimiter: typeof t.delimiter == "string" || Ni.isRegExp(t.delimiter) ? t.delimiter : rt.delimiter,
    // eslint-disable-next-line no-implicit-coercion, no-extra-parens
    depth: typeof t.depth == "number" || t.depth === !1 ? +t.depth : rt.depth,
    ignoreQueryPrefix: t.ignoreQueryPrefix === !0,
    interpretNumericEntities: typeof t.interpretNumericEntities == "boolean" ? t.interpretNumericEntities : rt.interpretNumericEntities,
    parameterLimit: typeof t.parameterLimit == "number" ? t.parameterLimit : rt.parameterLimit,
    parseArrays: t.parseArrays !== !1,
    plainObjects: typeof t.plainObjects == "boolean" ? t.plainObjects : rt.plainObjects,
    strictNullHandling: typeof t.strictNullHandling == "boolean" ? t.strictNullHandling : rt.strictNullHandling
  };
}, YV = function(e, t) {
  var r = VV(t);
  if (e === "" || e === null || typeof e > "u")
    return r.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
  for (var n = typeof e == "string" ? jV(e, r) : e, i = r.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, a = Object.keys(n), s = 0; s < a.length; ++s) {
    var o = a[s], l = HV(o, n[o], r, typeof e == "string");
    i = Ni.merge(i, l, r);
  }
  return r.allowSparse === !0 ? i : Ni.compact(i);
}, WV = BV, UV = YV, qV = nd, GV = {
  formats: qV,
  parse: UV,
  stringify: WV
};
const KV = Kt.checkout("request");
class ZV extends mt {
  constructor(r) {
    super();
    G(this, "__names", null);
    G(this, "state", {});
    G(this, "cache", new _x({
      key: (r) => JSON.stringify(r),
      pick: async (r) => await this.http(r.path, r.data)
    }));
    G(this, "mocks", {});
    G(this, "params");
    G(this, "installed", !1);
    this.params = r;
  }
  get name() {
    return this.params.name;
  }
  static parseLaravelResourcePaginateResponse(r) {
    return Array.isArray(r.data) && r.meta && r.links, r;
  }
  static fakeLaravelPaginateResult(r) {
    return {
      data: r,
      total: 1,
      per_page: 1,
      current_page: 1,
      last_page: 1,
      from: 1,
      to: 1
    };
  }
  static fakeLaravelResourcePaginateResult(r) {
    return {
      data: r,
      links: {
        first: "",
        last: "",
        prev: "",
        next: ""
      },
      meta: {
        current_page: 1,
        from: "",
        path: "",
        last_page: 1,
        to: 1,
        per_page: 10,
        total: 1
      }
    };
  }
  static async AxiosRequest(r) {
    let { axios: n, context: i } = r, { method: a, path: s, query: o, headers: l, responseType: c, body: u } = i, f = null;
    return (a === "get" || a === "delete") && (f = await n[a](s, {
      params: o,
      headers: l,
      responseType: c
    })), (a === "post" || a === "put" || a === "patch") && (f = await n[a](s, u, {
      params: o,
      headers: l,
      responseType: c
    })), f;
  }
  parseUrl(r, n) {
    let i = r.split("@"), a = i[0], s = i.slice(1).join("@");
    if (n)
      for (let o in n) {
        if (n[o] == null)
          throw KV.create(`Url ${r} param ${o} is null.`);
        s = s.replace(":" + o, n[o].toString());
      }
    return {
      path: s.split("#")[0],
      method: a
    };
  }
  mock(r, n) {
    this.mocks[r] = n;
  }
  export() {
    return this.http.bind(this);
  }
  exportKeep() {
    return this.httpKeepAlive.bind(this);
  }
  async httpKeepAlive(r, n) {
    return await this.cache.get({
      data: n,
      path: r
    });
  }
  async http(r, n) {
    this.installed === !1 && this.params.install && this.params.install(this), this.installed = !0;
    let i = this.parseUrl(r, n.params), a = n.headers || {}, s = {
      name: r,
      path: i.path,
      form: document.createElement("form"),
      body: n.body || {},
      query: n.query || {},
      state: this.state,
      headers: a,
      contentType: n.contentType || "application/json",
      responseType: n.responseType,
      method: i.method
    };
    if (s.contentType === "x-www-form-urlencoded") {
      let l = {};
      for (let [c, u] of Object.entries(s.body))
        Ya.lastMatch(c, "[]") ? l[c.slice(0, -2)] = u : l[c] = u;
      s.body = GV.stringify(l, {
        arrayFormat: "brackets"
      }), a.contentType = "application/x-www-form-urlencoded";
    }
    if (s.contentType === "multipart/form-data") {
      let l = new FormData();
      for (let c in s.body)
        l.append(c, s.body[c]);
      s.body = l, a.contentType = "multipart/form-data";
    }
    if (s.contentType === "multipart/form-data#json") {
      let l = new FormData();
      for (let c in s.body)
        l.append(c, s.body[c]);
      s.body = l;
    }
    if (s.contentType === "form") {
      s.form.setAttribute("method", s.method.toUpperCase());
      for (let l in s.body) {
        const c = s.body[l], u = document.createElement("input");
        u.setAttribute("type", "hidden"), u.setAttribute("name", l), u.setAttribute("value", typeof c == "string" ? c : JSON.stringify(c)), s.form.appendChild(u);
      }
      s.form.style.opacity = "0", s.form.style.position = "fixed", document.body.appendChild(s.form);
    }
    let o = null;
    return this.mocks && this.mocks[r] ? (await pn.sleep(500), o = this.mocks[r](s), this.emit("useMockAfter", {
      context: s,
      response: o
    })) : o = await this.params.http(s), s.contentType === "form" && s.form.remove(), o;
  }
}
var Rb = { exports: {} };
function XV(e) {
  throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var jc = { exports: {} }, xg;
function ye() {
  return xg || (xg = 1, function(e, t) {
    (function(r, n) {
      e.exports = n();
    })(le, function() {
      var r = r || function(n, i) {
        var a;
        if (typeof window < "u" && window.crypto && (a = window.crypto), typeof self < "u" && self.crypto && (a = self.crypto), typeof globalThis < "u" && globalThis.crypto && (a = globalThis.crypto), !a && typeof window < "u" && window.msCrypto && (a = window.msCrypto), !a && typeof le < "u" && le.crypto && (a = le.crypto), !a && typeof XV == "function")
          try {
            a = Eb;
          } catch {
          }
        var s = function() {
          if (a) {
            if (typeof a.getRandomValues == "function")
              try {
                return a.getRandomValues(new Uint32Array(1))[0];
              } catch {
              }
            if (typeof a.randomBytes == "function")
              try {
                return a.randomBytes(4).readInt32LE();
              } catch {
              }
          }
          throw new Error("Native crypto module could not be used to get secure random number.");
        }, o = Object.create || /* @__PURE__ */ function() {
          function y() {
          }
          return function(_) {
            var x;
            return y.prototype = _, x = new y(), y.prototype = null, x;
          };
        }(), l = {}, c = l.lib = {}, u = c.Base = /* @__PURE__ */ function() {
          return {
            /**
             * Creates a new object that inherits from this object.
             *
             * @param {Object} overrides Properties to copy into the new object.
             *
             * @return {Object} The new object.
             *
             * @static
             *
             * @example
             *
             *     var MyType = CryptoJS.lib.Base.extend({
             *         field: 'value',
             *
             *         method: function () {
             *         }
             *     });
             */
            extend: function(y) {
              var _ = o(this);
              return y && _.mixIn(y), (!_.hasOwnProperty("init") || this.init === _.init) && (_.init = function() {
                _.$super.init.apply(this, arguments);
              }), _.init.prototype = _, _.$super = this, _;
            },
            /**
             * Extends this object and runs the init method.
             * Arguments to create() will be passed to init().
             *
             * @return {Object} The new object.
             *
             * @static
             *
             * @example
             *
             *     var instance = MyType.create();
             */
            create: function() {
              var y = this.extend();
              return y.init.apply(y, arguments), y;
            },
            /**
             * Initializes a newly created object.
             * Override this method to add some logic when your objects are created.
             *
             * @example
             *
             *     var MyType = CryptoJS.lib.Base.extend({
             *         init: function () {
             *             // ...
             *         }
             *     });
             */
            init: function() {
            },
            /**
             * Copies properties into this object.
             *
             * @param {Object} properties The properties to mix in.
             *
             * @example
             *
             *     MyType.mixIn({
             *         field: 'value'
             *     });
             */
            mixIn: function(y) {
              for (var _ in y)
                y.hasOwnProperty(_) && (this[_] = y[_]);
              y.hasOwnProperty("toString") && (this.toString = y.toString);
            },
            /**
             * Creates a copy of this object.
             *
             * @return {Object} The clone.
             *
             * @example
             *
             *     var clone = instance.clone();
             */
            clone: function() {
              return this.init.prototype.extend(this);
            }
          };
        }(), f = c.WordArray = u.extend({
          /**
           * Initializes a newly created word array.
           *
           * @param {Array} words (Optional) An array of 32-bit words.
           * @param {number} sigBytes (Optional) The number of significant bytes in the words.
           *
           * @example
           *
           *     var wordArray = CryptoJS.lib.WordArray.create();
           *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607]);
           *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607], 6);
           */
          init: function(y, _) {
            y = this.words = y || [], _ != i ? this.sigBytes = _ : this.sigBytes = y.length * 4;
          },
          /**
           * Converts this word array to a string.
           *
           * @param {Encoder} encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex
           *
           * @return {string} The stringified word array.
           *
           * @example
           *
           *     var string = wordArray + '';
           *     var string = wordArray.toString();
           *     var string = wordArray.toString(CryptoJS.enc.Utf8);
           */
          toString: function(y) {
            return (y || h).stringify(this);
          },
          /**
           * Concatenates a word array to this word array.
           *
           * @param {WordArray} wordArray The word array to append.
           *
           * @return {WordArray} This word array.
           *
           * @example
           *
           *     wordArray1.concat(wordArray2);
           */
          concat: function(y) {
            var _ = this.words, x = y.words, b = this.sigBytes, w = y.sigBytes;
            if (this.clamp(), b % 4)
              for (var E = 0; E < w; E++) {
                var $ = x[E >>> 2] >>> 24 - E % 4 * 8 & 255;
                _[b + E >>> 2] |= $ << 24 - (b + E) % 4 * 8;
              }
            else
              for (var C = 0; C < w; C += 4)
                _[b + C >>> 2] = x[C >>> 2];
            return this.sigBytes += w, this;
          },
          /**
           * Removes insignificant bits.
           *
           * @example
           *
           *     wordArray.clamp();
           */
          clamp: function() {
            var y = this.words, _ = this.sigBytes;
            y[_ >>> 2] &= 4294967295 << 32 - _ % 4 * 8, y.length = n.ceil(_ / 4);
          },
          /**
           * Creates a copy of this word array.
           *
           * @return {WordArray} The clone.
           *
           * @example
           *
           *     var clone = wordArray.clone();
           */
          clone: function() {
            var y = u.clone.call(this);
            return y.words = this.words.slice(0), y;
          },
          /**
           * Creates a word array filled with random bytes.
           *
           * @param {number} nBytes The number of random bytes to generate.
           *
           * @return {WordArray} The random word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.lib.WordArray.random(16);
           */
          random: function(y) {
            for (var _ = [], x = 0; x < y; x += 4)
              _.push(s());
            return new f.init(_, y);
          }
        }), d = l.enc = {}, h = d.Hex = {
          /**
           * Converts a word array to a hex string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The hex string.
           *
           * @static
           *
           * @example
           *
           *     var hexString = CryptoJS.enc.Hex.stringify(wordArray);
           */
          stringify: function(y) {
            for (var _ = y.words, x = y.sigBytes, b = [], w = 0; w < x; w++) {
              var E = _[w >>> 2] >>> 24 - w % 4 * 8 & 255;
              b.push((E >>> 4).toString(16)), b.push((E & 15).toString(16));
            }
            return b.join("");
          },
          /**
           * Converts a hex string to a word array.
           *
           * @param {string} hexStr The hex string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Hex.parse(hexString);
           */
          parse: function(y) {
            for (var _ = y.length, x = [], b = 0; b < _; b += 2)
              x[b >>> 3] |= parseInt(y.substr(b, 2), 16) << 24 - b % 8 * 4;
            return new f.init(x, _ / 2);
          }
        }, p = d.Latin1 = {
          /**
           * Converts a word array to a Latin1 string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The Latin1 string.
           *
           * @static
           *
           * @example
           *
           *     var latin1String = CryptoJS.enc.Latin1.stringify(wordArray);
           */
          stringify: function(y) {
            for (var _ = y.words, x = y.sigBytes, b = [], w = 0; w < x; w++) {
              var E = _[w >>> 2] >>> 24 - w % 4 * 8 & 255;
              b.push(String.fromCharCode(E));
            }
            return b.join("");
          },
          /**
           * Converts a Latin1 string to a word array.
           *
           * @param {string} latin1Str The Latin1 string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Latin1.parse(latin1String);
           */
          parse: function(y) {
            for (var _ = y.length, x = [], b = 0; b < _; b++)
              x[b >>> 2] |= (y.charCodeAt(b) & 255) << 24 - b % 4 * 8;
            return new f.init(x, _);
          }
        }, v = d.Utf8 = {
          /**
           * Converts a word array to a UTF-8 string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The UTF-8 string.
           *
           * @static
           *
           * @example
           *
           *     var utf8String = CryptoJS.enc.Utf8.stringify(wordArray);
           */
          stringify: function(y) {
            try {
              return decodeURIComponent(escape(p.stringify(y)));
            } catch {
              throw new Error("Malformed UTF-8 data");
            }
          },
          /**
           * Converts a UTF-8 string to a word array.
           *
           * @param {string} utf8Str The UTF-8 string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Utf8.parse(utf8String);
           */
          parse: function(y) {
            return p.parse(unescape(encodeURIComponent(y)));
          }
        }, g = c.BufferedBlockAlgorithm = u.extend({
          /**
           * Resets this block algorithm's data buffer to its initial state.
           *
           * @example
           *
           *     bufferedBlockAlgorithm.reset();
           */
          reset: function() {
            this._data = new f.init(), this._nDataBytes = 0;
          },
          /**
           * Adds new data to this block algorithm's buffer.
           *
           * @param {WordArray|string} data The data to append. Strings are converted to a WordArray using UTF-8.
           *
           * @example
           *
           *     bufferedBlockAlgorithm._append('data');
           *     bufferedBlockAlgorithm._append(wordArray);
           */
          _append: function(y) {
            typeof y == "string" && (y = v.parse(y)), this._data.concat(y), this._nDataBytes += y.sigBytes;
          },
          /**
           * Processes available data blocks.
           *
           * This method invokes _doProcessBlock(offset), which must be implemented by a concrete subtype.
           *
           * @param {boolean} doFlush Whether all blocks and partial blocks should be processed.
           *
           * @return {WordArray} The processed data.
           *
           * @example
           *
           *     var processedData = bufferedBlockAlgorithm._process();
           *     var processedData = bufferedBlockAlgorithm._process(!!'flush');
           */
          _process: function(y) {
            var _, x = this._data, b = x.words, w = x.sigBytes, E = this.blockSize, $ = E * 4, C = w / $;
            y ? C = n.ceil(C) : C = n.max((C | 0) - this._minBufferSize, 0);
            var D = C * E, A = n.min(D * 4, w);
            if (D) {
              for (var S = 0; S < D; S += E)
                this._doProcessBlock(b, S);
              _ = b.splice(0, D), x.sigBytes -= A;
            }
            return new f.init(_, A);
          },
          /**
           * Creates a copy of this object.
           *
           * @return {Object} The clone.
           *
           * @example
           *
           *     var clone = bufferedBlockAlgorithm.clone();
           */
          clone: function() {
            var y = u.clone.call(this);
            return y._data = this._data.clone(), y;
          },
          _minBufferSize: 0
        });
        c.Hasher = g.extend({
          /**
           * Configuration options.
           */
          cfg: u.extend(),
          /**
           * Initializes a newly created hasher.
           *
           * @param {Object} cfg (Optional) The configuration options to use for this hash computation.
           *
           * @example
           *
           *     var hasher = CryptoJS.algo.SHA256.create();
           */
          init: function(y) {
            this.cfg = this.cfg.extend(y), this.reset();
          },
          /**
           * Resets this hasher to its initial state.
           *
           * @example
           *
           *     hasher.reset();
           */
          reset: function() {
            g.reset.call(this), this._doReset();
          },
          /**
           * Updates this hasher with a message.
           *
           * @param {WordArray|string} messageUpdate The message to append.
           *
           * @return {Hasher} This hasher.
           *
           * @example
           *
           *     hasher.update('message');
           *     hasher.update(wordArray);
           */
          update: function(y) {
            return this._append(y), this._process(), this;
          },
          /**
           * Finalizes the hash computation.
           * Note that the finalize operation is effectively a destructive, read-once operation.
           *
           * @param {WordArray|string} messageUpdate (Optional) A final message update.
           *
           * @return {WordArray} The hash.
           *
           * @example
           *
           *     var hash = hasher.finalize();
           *     var hash = hasher.finalize('message');
           *     var hash = hasher.finalize(wordArray);
           */
          finalize: function(y) {
            y && this._append(y);
            var _ = this._doFinalize();
            return _;
          },
          blockSize: 16,
          /**
           * Creates a shortcut function to a hasher's object interface.
           *
           * @param {Hasher} hasher The hasher to create a helper for.
           *
           * @return {Function} The shortcut function.
           *
           * @static
           *
           * @example
           *
           *     var SHA256 = CryptoJS.lib.Hasher._createHelper(CryptoJS.algo.SHA256);
           */
          _createHelper: function(y) {
            return function(_, x) {
              return new y.init(x).finalize(_);
            };
          },
          /**
           * Creates a shortcut function to the HMAC's object interface.
           *
           * @param {Hasher} hasher The hasher to use in this HMAC helper.
           *
           * @return {Function} The shortcut function.
           *
           * @static
           *
           * @example
           *
           *     var HmacSHA256 = CryptoJS.lib.Hasher._createHmacHelper(CryptoJS.algo.SHA256);
           */
          _createHmacHelper: function(y) {
            return function(_, x) {
              return new m.HMAC.init(y, x).finalize(_);
            };
          }
        });
        var m = l.algo = {};
        return l;
      }(Math);
      return r;
    });
  }(jc)), jc.exports;
}
var zc = { exports: {} }, yg;
function ql() {
  return yg || (yg = 1, function(e, t) {
    (function(r, n) {
      e.exports = n(ye());
    })(le, function(r) {
      return function(n) {
        var i = r, a = i.lib, s = a.Base, o = a.WordArray, l = i.x64 = {};
        l.Word = s.extend({
          /**
           * Initializes a newly created 64-bit word.
           *
           * @param {number} high The high 32 bits.
           * @param {number} low The low 32 bits.
           *
           * @example
           *
           *     var x64Word = CryptoJS.x64.Word.create(0x00010203, 0x04050607);
           */
          init: function(c, u) {
            this.high = c, this.low = u;
          }
          /**
           * Bitwise NOTs this word.
           *
           * @return {X64Word} A new x64-Word object after negating.
           *
           * @example
           *
           *     var negated = x64Word.not();
           */
          // not: function () {
          // var high = ~this.high;
          // var low = ~this.low;
          // return X64Word.create(high, low);
          // },
          /**
           * Bitwise ANDs this word with the passed word.
           *
           * @param {X64Word} word The x64-Word to AND with this word.
           *
           * @return {X64Word} A new x64-Word object after ANDing.
           *
           * @example
           *
           *     var anded = x64Word.and(anotherX64Word);
           */
          // and: function (word) {
          // var high = this.high & word.high;
          // var low = this.low & word.low;
          // return X64Word.create(high, low);
          // },
          /**
           * Bitwise ORs this word with the passed word.
           *
           * @param {X64Word} word The x64-Word to OR with this word.
           *
           * @return {X64Word} A new x64-Word object after ORing.
           *
           * @example
           *
           *     var ored = x64Word.or(anotherX64Word);
           */
          // or: function (word) {
          // var high = this.high | word.high;
          // var low = this.low | word.low;
          // return X64Word.create(high, low);
          // },
          /**
           * Bitwise XORs this word with the passed word.
           *
           * @param {X64Word} word The x64-Word to XOR with this word.
           *
           * @return {X64Word} A new x64-Word object after XORing.
           *
           * @example
           *
           *     var xored = x64Word.xor(anotherX64Word);
           */
          // xor: function (word) {
          // var high = this.high ^ word.high;
          // var low = this.low ^ word.low;
          // return X64Word.create(high, low);
          // },
          /**
           * Shifts this word n bits to the left.
           *
           * @param {number} n The number of bits to shift.
           *
           * @return {X64Word} A new x64-Word object after shifting.
           *
           * @example
           *
           *     var shifted = x64Word.shiftL(25);
           */
          // shiftL: function (n) {
          // if (n < 32) {
          // var high = (this.high << n) | (this.low >>> (32 - n));
          // var low = this.low << n;
          // } else {
          // var high = this.low << (n - 32);
          // var low = 0;
          // }
          // return X64Word.create(high, low);
          // },
          /**
           * Shifts this word n bits to the right.
           *
           * @param {number} n The number of bits to shift.
           *
           * @return {X64Word} A new x64-Word object after shifting.
           *
           * @example
           *
           *     var shifted = x64Word.shiftR(7);
           */
          // shiftR: function (n) {
          // if (n < 32) {
          // var low = (this.low >>> n) | (this.high << (32 - n));
          // var high = this.high >>> n;
          // } else {
          // var low = this.high >>> (n - 32);
          // var high = 0;
          // }
          // return X64Word.create(high, low);
          // },
          /**
           * Rotates this word n bits to the left.
           *
           * @param {number} n The number of bits to rotate.
           *
           * @return {X64Word} A new x64-Word object after rotating.
           *
           * @example
           *
           *     var rotated = x64Word.rotL(25);
           */
          // rotL: function (n) {
          // return this.shiftL(n).or(this.shiftR(64 - n));
          // },
          /**
           * Rotates this word n bits to the right.
           *
           * @param {number} n The number of bits to rotate.
           *
           * @return {X64Word} A new x64-Word object after rotating.
           *
           * @example
           *
           *     var rotated = x64Word.rotR(7);
           */
          // rotR: function (n) {
          // return this.shiftR(n).or(this.shiftL(64 - n));
          // },
          /**
           * Adds this word with the passed word.
           *
           * @param {X64Word} word The x64-Word to add with this word.
           *
           * @return {X64Word} A new x64-Word object after adding.
           *
           * @example
           *
           *     var added = x64Word.add(anotherX64Word);
           */
          // add: function (word) {
          // var low = (this.low + word.low) | 0;
          // var carry = (low >>> 0) < (this.low >>> 0) ? 1 : 0;
          // var high = (this.high + word.high + carry) | 0;
          // return X64Word.create(high, low);
          // }
        }), l.WordArray = s.extend({
          /**
           * Initializes a newly created word array.
           *
           * @param {Array} words (Optional) An array of CryptoJS.x64.Word objects.
           * @param {number} sigBytes (Optional) The number of significant bytes in the words.
           *
           * @example
           *
           *     var wordArray = CryptoJS.x64.WordArray.create();
           *
           *     var wordArray = CryptoJS.x64.WordArray.create([
           *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
           *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
           *     ]);
           *
           *     var wordArray = CryptoJS.x64.WordArray.create([
           *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
           *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
           *     ], 10);
           */
          init: function(c, u) {
            c = this.words = c || [], u != n ? this.sigBytes = u : this.sigBytes = c.length * 8;
          },
          /**
           * Converts this 64-bit word array to a 32-bit word array.
           *
           * @return {CryptoJS.lib.WordArray} This word array's data as a 32-bit word array.
           *
           * @example
           *
           *     var x32WordArray = x64WordArray.toX32();
           */
          toX32: function() {
            for (var c = this.words, u = c.length, f = [], d = 0; d < u; d++) {
              var h = c[d];
              f.push(h.high), f.push(h.low);
            }
            return o.create(f, this.sigBytes);
          },
          /**
           * Creates a copy of this word array.
           *
           * @return {X64WordArray} The clone.
           *
           * @example
           *
           *     var clone = x64WordArray.clone();
           */
          clone: function() {
            for (var c = s.clone.call(this), u = c.words = this.words.slice(0), f = u.length, d = 0; d < f; d++)
              u[d] = u[d].clone();
            return c;
          }
        });
      }(), r;
    });
  }(zc)), zc.exports;
}
var Hc = { exports: {} }, bg;
function JV() {
  return bg || (bg = 1, function(e, t) {
    (function(r, n) {
      e.exports = n(ye());
    })(le, function(r) {
      return function() {
        if (typeof ArrayBuffer == "function") {
          var n = r, i = n.lib, a = i.WordArray, s = a.init, o = a.init = function(l) {
            if (l instanceof ArrayBuffer && (l = new Uint8Array(l)), (l instanceof Int8Array || typeof Uint8ClampedArray < "u" && l instanceof Uint8ClampedArray || l instanceof Int16Array || l instanceof Uint16Array || l instanceof Int32Array || l instanceof Uint32Array || l instanceof Float32Array || l instanceof Float64Array) && (l = new Uint8Array(l.buffer, l.byteOffset, l.byteLength)), l instanceof Uint8Array) {
              for (var c = l.byteLength, u = [], f = 0; f < c; f++)
                u[f >>> 2] |= l[f] << 24 - f % 4 * 8;
              s.call(this, u, c);
            } else
              s.apply(this, arguments);
          };
          o.prototype = a;
        }
      }(), r.lib.WordArray;
    });
  }(Hc)), Hc.exports;
}
var Vc = { exports: {} }, _g;
function QV() {
  return _g || (_g = 1, function(e, t) {
    (function(r, n) {
      e.exports = n(ye());
    })(le, function(r) {
      return function() {
        var n = r, i = n.lib, a = i.WordArray, s = n.enc;
        s.Utf16 = s.Utf16BE = {
          /**
           * Converts a word array to a UTF-16 BE string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The UTF-16 BE string.
           *
           * @static
           *
           * @example
           *
           *     var utf16String = CryptoJS.enc.Utf16.stringify(wordArray);
           */
          stringify: function(l) {
            for (var c = l.words, u = l.sigBytes, f = [], d = 0; d < u; d += 2) {
              var h = c[d >>> 2] >>> 16 - d % 4 * 8 & 65535;
              f.push(String.fromCharCode(h));
            }
            return f.join("");
          },
          /**
           * Converts a UTF-16 BE string to a word array.
           *
           * @param {string} utf16Str The UTF-16 BE string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Utf16.parse(utf16String);
           */
          parse: function(l) {
            for (var c = l.length, u = [], f = 0; f < c; f++)
              u[f >>> 1] |= l.charCodeAt(f) << 16 - f % 2 * 16;
            return a.create(u, c * 2);
          }
        }, s.Utf16LE = {
          /**
           * Converts a word array to a UTF-16 LE string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The UTF-16 LE string.
           *
           * @static
           *
           * @example
           *
           *     var utf16Str = CryptoJS.enc.Utf16LE.stringify(wordArray);
           */
          stringify: function(l) {
            for (var c = l.words, u = l.sigBytes, f = [], d = 0; d < u; d += 2) {
              var h = o(c[d >>> 2] >>> 16 - d % 4 * 8 & 65535);
              f.push(String.fromCharCode(h));
            }
            return f.join("");
          },
          /**
           * Converts a UTF-16 LE string to a word array.
           *
           * @param {string} utf16Str The UTF-16 LE string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Utf16LE.parse(utf16Str);
           */
          parse: function(l) {
            for (var c = l.length, u = [], f = 0; f < c; f++)
              u[f >>> 1] |= o(l.charCodeAt(f) << 16 - f % 2 * 16);
            return a.create(u, c * 2);
          }
        };
        function o(l) {
          return l << 8 & 4278255360 | l >>> 8 & 16711935;
        }
      }(), r.enc.Utf16;
    });
  }(Vc)), Vc.exports;
}
var Yc = { exports: {} }, wg;
function Xn() {
  return wg || (wg = 1, function(e, t) {
    (function(r, n) {
      e.exports = n(ye());
    })(le, function(r) {
      return function() {
        var n = r, i = n.lib, a = i.WordArray, s = n.enc;
        s.Base64 = {
          /**
           * Converts a word array to a Base64 string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The Base64 string.
           *
           * @static
           *
           * @example
           *
           *     var base64String = CryptoJS.enc.Base64.stringify(wordArray);
           */
          stringify: function(l) {
            var c = l.words, u = l.sigBytes, f = this._map;
            l.clamp();
            for (var d = [], h = 0; h < u; h += 3)
              for (var p = c[h >>> 2] >>> 24 - h % 4 * 8 & 255, v = c[h + 1 >>> 2] >>> 24 - (h + 1) % 4 * 8 & 255, g = c[h + 2 >>> 2] >>> 24 - (h + 2) % 4 * 8 & 255, m = p << 16 | v << 8 | g, y = 0; y < 4 && h + y * 0.75 < u; y++)
                d.push(f.charAt(m >>> 6 * (3 - y) & 63));
            var _ = f.charAt(64);
            if (_)
              for (; d.length % 4; )
                d.push(_);
            return d.join("");
          },
          /**
           * Converts a Base64 string to a word array.
           *
           * @param {string} base64Str The Base64 string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Base64.parse(base64String);
           */
          parse: function(l) {
            var c = l.length, u = this._map, f = this._reverseMap;
            if (!f) {
              f = this._reverseMap = [];
              for (var d = 0; d < u.length; d++)
                f[u.charCodeAt(d)] = d;
            }
            var h = u.charAt(64);
            if (h) {
              var p = l.indexOf(h);
              p !== -1 && (c = p);
            }
            return o(l, c, f);
          },
          _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
        };
        function o(l, c, u) {
          for (var f = [], d = 0, h = 0; h < c; h++)
            if (h % 4) {
              var p = u[l.charCodeAt(h - 1)] << h % 4 * 2, v = u[l.charCodeAt(h)] >>> 6 - h % 4 * 2, g = p | v;
              f[d >>> 2] |= g << 24 - d % 4 * 8, d++;
            }
          return a.create(f, d);
        }
      }(), r.enc.Base64;
    });
  }(Yc)), Yc.exports;
}
var Wc = { exports: {} }, $g;
function eY() {
  return $g || ($g = 1, function(e, t) {
    (function(r, n) {
      e.exports = n(ye());
    })(le, function(r) {
      return function() {
        var n = r, i = n.lib, a = i.WordArray, s = n.enc;
        s.Base64url = {
          /**
           * Converts a word array to a Base64url string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @param {boolean} urlSafe Whether to use url safe
           *
           * @return {string} The Base64url string.
           *
           * @static
           *
           * @example
           *
           *     var base64String = CryptoJS.enc.Base64url.stringify(wordArray);
           */
          stringify: function(l, c) {
            c === void 0 && (c = !0);
            var u = l.words, f = l.sigBytes, d = c ? this._safe_map : this._map;
            l.clamp();
            for (var h = [], p = 0; p < f; p += 3)
              for (var v = u[p >>> 2] >>> 24 - p % 4 * 8 & 255, g = u[p + 1 >>> 2] >>> 24 - (p + 1) % 4 * 8 & 255, m = u[p + 2 >>> 2] >>> 24 - (p + 2) % 4 * 8 & 255, y = v << 16 | g << 8 | m, _ = 0; _ < 4 && p + _ * 0.75 < f; _++)
                h.push(d.charAt(y >>> 6 * (3 - _) & 63));
            var x = d.charAt(64);
            if (x)
              for (; h.length % 4; )
                h.push(x);
            return h.join("");
          },
          /**
           * Converts a Base64url string to a word array.
           *
           * @param {string} base64Str The Base64url string.
           *
           * @param {boolean} urlSafe Whether to use url safe
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Base64url.parse(base64String);
           */
          parse: function(l, c) {
            c === void 0 && (c = !0);
            var u = l.length, f = c ? this._safe_map : this._map, d = this._reverseMap;
            if (!d) {
              d = this._reverseMap = [];
              for (var h = 0; h < f.length; h++)
                d[f.charCodeAt(h)] = h;
            }
            var p = f.charAt(64);
            if (p) {
              var v = l.indexOf(p);
              v !== -1 && (u = v);
            }
            return o(l, u, d);
          },
          _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
          _safe_map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"
        };
        function o(l, c, u) {
          for (var f = [], d = 0, h = 0; h < c; h++)
            if (h % 4) {
              var p = u[l.charCodeAt(h - 1)] << h % 4 * 2, v = u[l.charCodeAt(h)] >>> 6 - h % 4 * 2, g = p | v;
              f[d >>> 2] |= g << 24 - d % 4 * 8, d++;
            }
          return a.create(f, d);
        }
      }(), r.enc.Base64url;
    });
  }(Wc)), Wc.exports;
}
var Uc = { exports: {} }, Dg;
function Jn() {
  return Dg || (Dg = 1, function(e, t) {
    (function(r, n) {
      e.exports = n(ye());
    })(le, function(r) {
      return function(n) {
        var i = r, a = i.lib, s = a.WordArray, o = a.Hasher, l = i.algo, c = [];
        (function() {
          for (var v = 0; v < 64; v++)
            c[v] = n.abs(n.sin(v + 1)) * 4294967296 | 0;
        })();
        var u = l.MD5 = o.extend({
          _doReset: function() {
            this._hash = new s.init([
              1732584193,
              4023233417,
              2562383102,
              271733878
            ]);
          },
          _doProcessBlock: function(v, g) {
            for (var m = 0; m < 16; m++) {
              var y = g + m, _ = v[y];
              v[y] = (_ << 8 | _ >>> 24) & 16711935 | (_ << 24 | _ >>> 8) & 4278255360;
            }
            var x = this._hash.words, b = v[g + 0], w = v[g + 1], E = v[g + 2], $ = v[g + 3], C = v[g + 4], D = v[g + 5], A = v[g + 6], S = v[g + 7], k = v[g + 8], j = v[g + 9], P = v[g + 10], H = v[g + 11], K = v[g + 12], X = v[g + 13], Z = v[g + 14], B = v[g + 15], T = x[0], R = x[1], N = x[2], F = x[3];
            T = f(T, R, N, F, b, 7, c[0]), F = f(F, T, R, N, w, 12, c[1]), N = f(N, F, T, R, E, 17, c[2]), R = f(R, N, F, T, $, 22, c[3]), T = f(T, R, N, F, C, 7, c[4]), F = f(F, T, R, N, D, 12, c[5]), N = f(N, F, T, R, A, 17, c[6]), R = f(R, N, F, T, S, 22, c[7]), T = f(T, R, N, F, k, 7, c[8]), F = f(F, T, R, N, j, 12, c[9]), N = f(N, F, T, R, P, 17, c[10]), R = f(R, N, F, T, H, 22, c[11]), T = f(T, R, N, F, K, 7, c[12]), F = f(F, T, R, N, X, 12, c[13]), N = f(N, F, T, R, Z, 17, c[14]), R = f(R, N, F, T, B, 22, c[15]), T = d(T, R, N, F, w, 5, c[16]), F = d(F, T, R, N, A, 9, c[17]), N = d(N, F, T, R, H, 14, c[18]), R = d(R, N, F, T, b, 20, c[19]), T = d(T, R, N, F, D, 5, c[20]), F = d(F, T, R, N, P, 9, c[21]), N = d(N, F, T, R, B, 14, c[22]), R = d(R, N, F, T, C, 20, c[23]), T = d(T, R, N, F, j, 5, c[24]), F = d(F, T, R, N, Z, 9, c[25]), N = d(N, F, T, R, $, 14, c[26]), R = d(R, N, F, T, k, 20, c[27]), T = d(T, R, N, F, X, 5, c[28]), F = d(F, T, R, N, E, 9, c[29]), N = d(N, F, T, R, S, 14, c[30]), R = d(R, N, F, T, K, 20, c[31]), T = h(T, R, N, F, D, 4, c[32]), F = h(F, T, R, N, k, 11, c[33]), N = h(N, F, T, R, H, 16, c[34]), R = h(R, N, F, T, Z, 23, c[35]), T = h(T, R, N, F, w, 4, c[36]), F = h(F, T, R, N, C, 11, c[37]), N = h(N, F, T, R, S, 16, c[38]), R = h(R, N, F, T, P, 23, c[39]), T = h(T, R, N, F, X, 4, c[40]), F = h(F, T, R, N, b, 11, c[41]), N = h(N, F, T, R, $, 16, c[42]), R = h(R, N, F, T, A, 23, c[43]), T = h(T, R, N, F, j, 4, c[44]), F = h(F, T, R, N, K, 11, c[45]), N = h(N, F, T, R, B, 16, c[46]), R = h(R, N, F, T, E, 23, c[47]), T = p(T, R, N, F, b, 6, c[48]), F = p(F, T, R, N, S, 10, c[49]), N = p(N, F, T, R, Z, 15, c[50]), R = p(R, N, F, T, D, 21, c[51]), T = p(T, R, N, F, K, 6, c[52]), F = p(F, T, R, N, $, 10, c[53]), N = p(N, F, T, R, P, 15, c[54]), R = p(R, N, F, T, w, 21, c[55]), T = p(T, R, N, F, k, 6, c[56]), F = p(F, T, R, N, B, 10, c[57]), N = p(N, F, T, R, A, 15, c[58]), R = p(R, N, F, T, X, 21, c[59]), T = p(T, R, N, F, C, 6, c[60]), F = p(F, T, R, N, H, 10, c[61]), N = p(N, F, T, R, E, 15, c[62]), R = p(R, N, F, T, j, 21, c[63]), x[0] = x[0] + T | 0, x[1] = x[1] + R | 0, x[2] = x[2] + N | 0, x[3] = x[3] + F | 0;
          },
          _doFinalize: function() {
            var v = this._data, g = v.words, m = this._nDataBytes * 8, y = v.sigBytes * 8;
            g[y >>> 5] |= 128 << 24 - y % 32;
            var _ = n.floor(m / 4294967296), x = m;
            g[(y + 64 >>> 9 << 4) + 15] = (_ << 8 | _ >>> 24) & 16711935 | (_ << 24 | _ >>> 8) & 4278255360, g[(y + 64 >>> 9 << 4) + 14] = (x << 8 | x >>> 24) & 16711935 | (x << 24 | x >>> 8) & 4278255360, v.sigBytes = (g.length + 1) * 4, this._process();
            for (var b = this._hash, w = b.words, E = 0; E < 4; E++) {
              var $ = w[E];
              w[E] = ($ << 8 | $ >>> 24) & 16711935 | ($ << 24 | $ >>> 8) & 4278255360;
            }
            return b;
          },
          clone: function() {
            var v = o.clone.call(this);
            return v._hash = this._hash.clone(), v;
          }
        });
        function f(v, g, m, y, _, x, b) {
          var w = v + (g & m | ~g & y) + _ + b;
          return (w << x | w >>> 32 - x) + g;
        }
        function d(v, g, m, y, _, x, b) {
          var w = v + (g & y | m & ~y) + _ + b;
          return (w << x | w >>> 32 - x) + g;
        }
        function h(v, g, m, y, _, x, b) {
          var w = v + (g ^ m ^ y) + _ + b;
          return (w << x | w >>> 32 - x) + g;
        }
        function p(v, g, m, y, _, x, b) {
          var w = v + (m ^ (g | ~y)) + _ + b;
          return (w << x | w >>> 32 - x) + g;
        }
        i.MD5 = o._createHelper(u), i.HmacMD5 = o._createHmacHelper(u);
      }(Math), r.MD5;
    });
  }(Uc)), Uc.exports;
}
var qc = { exports: {} }, Eg;
function Nb() {
  return Eg || (Eg = 1, function(e, t) {
    (function(r, n) {
      e.exports = n(ye());
    })(le, function(r) {
      return function() {
        var n = r, i = n.lib, a = i.WordArray, s = i.Hasher, o = n.algo, l = [], c = o.SHA1 = s.extend({
          _doReset: function() {
            this._hash = new a.init([
              1732584193,
              4023233417,
              2562383102,
              271733878,
              3285377520
            ]);
          },
          _doProcessBlock: function(u, f) {
            for (var d = this._hash.words, h = d[0], p = d[1], v = d[2], g = d[3], m = d[4], y = 0; y < 80; y++) {
              if (y < 16)
                l[y] = u[f + y] | 0;
              else {
                var _ = l[y - 3] ^ l[y - 8] ^ l[y - 14] ^ l[y - 16];
                l[y] = _ << 1 | _ >>> 31;
              }
              var x = (h << 5 | h >>> 27) + m + l[y];
              y < 20 ? x += (p & v | ~p & g) + 1518500249 : y < 40 ? x += (p ^ v ^ g) + 1859775393 : y < 60 ? x += (p & v | p & g | v & g) - 1894007588 : x += (p ^ v ^ g) - 899497514, m = g, g = v, v = p << 30 | p >>> 2, p = h, h = x;
            }
            d[0] = d[0] + h | 0, d[1] = d[1] + p | 0, d[2] = d[2] + v | 0, d[3] = d[3] + g | 0, d[4] = d[4] + m | 0;
          },
          _doFinalize: function() {
            var u = this._data, f = u.words, d = this._nDataBytes * 8, h = u.sigBytes * 8;
            return f[h >>> 5] |= 128 << 24 - h % 32, f[(h + 64 >>> 9 << 4) + 14] = Math.floor(d / 4294967296), f[(h + 64 >>> 9 << 4) + 15] = d, u.sigBytes = f.length * 4, this._process(), this._hash;
          },
          clone: function() {
            var u = s.clone.call(this);
            return u._hash = this._hash.clone(), u;
          }
        });
        n.SHA1 = s._createHelper(c), n.HmacSHA1 = s._createHmacHelper(c);
      }(), r.SHA1;
    });
  }(qc)), qc.exports;
}
var Gc = { exports: {} }, Ag;
function id() {
  return Ag || (Ag = 1, function(e, t) {
    (function(r, n) {
      e.exports = n(ye());
    })(le, function(r) {
      return function(n) {
        var i = r, a = i.lib, s = a.WordArray, o = a.Hasher, l = i.algo, c = [], u = [];
        (function() {
          function h(m) {
            for (var y = n.sqrt(m), _ = 2; _ <= y; _++)
              if (!(m % _))
                return !1;
            return !0;
          }
          function p(m) {
            return (m - (m | 0)) * 4294967296 | 0;
          }
          for (var v = 2, g = 0; g < 64; )
            h(v) && (g < 8 && (c[g] = p(n.pow(v, 1 / 2))), u[g] = p(n.pow(v, 1 / 3)), g++), v++;
        })();
        var f = [], d = l.SHA256 = o.extend({
          _doReset: function() {
            this._hash = new s.init(c.slice(0));
          },
          _doProcessBlock: function(h, p) {
            for (var v = this._hash.words, g = v[0], m = v[1], y = v[2], _ = v[3], x = v[4], b = v[5], w = v[6], E = v[7], $ = 0; $ < 64; $++) {
              if ($ < 16)
                f[$] = h[p + $] | 0;
              else {
                var C = f[$ - 15], D = (C << 25 | C >>> 7) ^ (C << 14 | C >>> 18) ^ C >>> 3, A = f[$ - 2], S = (A << 15 | A >>> 17) ^ (A << 13 | A >>> 19) ^ A >>> 10;
                f[$] = D + f[$ - 7] + S + f[$ - 16];
              }
              var k = x & b ^ ~x & w, j = g & m ^ g & y ^ m & y, P = (g << 30 | g >>> 2) ^ (g << 19 | g >>> 13) ^ (g << 10 | g >>> 22), H = (x << 26 | x >>> 6) ^ (x << 21 | x >>> 11) ^ (x << 7 | x >>> 25), K = E + H + k + u[$] + f[$], X = P + j;
              E = w, w = b, b = x, x = _ + K | 0, _ = y, y = m, m = g, g = K + X | 0;
            }
            v[0] = v[0] + g | 0, v[1] = v[1] + m | 0, v[2] = v[2] + y | 0, v[3] = v[3] + _ | 0, v[4] = v[4] + x | 0, v[5] = v[5] + b | 0, v[6] = v[6] + w | 0, v[7] = v[7] + E | 0;
          },
          _doFinalize: function() {
            var h = this._data, p = h.words, v = this._nDataBytes * 8, g = h.sigBytes * 8;
            return p[g >>> 5] |= 128 << 24 - g % 32, p[(g + 64 >>> 9 << 4) + 14] = n.floor(v / 4294967296), p[(g + 64 >>> 9 << 4) + 15] = v, h.sigBytes = p.length * 4, this._process(), this._hash;
          },
          clone: function() {
            var h = o.clone.call(this);
            return h._hash = this._hash.clone(), h;
          }
        });
        i.SHA256 = o._createHelper(d), i.HmacSHA256 = o._createHmacHelper(d);
      }(Math), r.SHA256;
    });
  }(Gc)), Gc.exports;
}
var Kc = { exports: {} }, Cg;
function tY() {
  return Cg || (Cg = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(ye(), id());
    })(le, function(r) {
      return function() {
        var n = r, i = n.lib, a = i.WordArray, s = n.algo, o = s.SHA256, l = s.SHA224 = o.extend({
          _doReset: function() {
            this._hash = new a.init([
              3238371032,
              914150663,
              812702999,
              4144912697,
              4290775857,
              1750603025,
              1694076839,
              3204075428
            ]);
          },
          _doFinalize: function() {
            var c = o._doFinalize.call(this);
            return c.sigBytes -= 4, c;
          }
        });
        n.SHA224 = o._createHelper(l), n.HmacSHA224 = o._createHmacHelper(l);
      }(), r.SHA224;
    });
  }(Kc)), Kc.exports;
}
var Zc = { exports: {} }, Sg;
function Lb() {
  return Sg || (Sg = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(ye(), ql());
    })(le, function(r) {
      return function() {
        var n = r, i = n.lib, a = i.Hasher, s = n.x64, o = s.Word, l = s.WordArray, c = n.algo;
        function u() {
          return o.create.apply(o, arguments);
        }
        var f = [
          u(1116352408, 3609767458),
          u(1899447441, 602891725),
          u(3049323471, 3964484399),
          u(3921009573, 2173295548),
          u(961987163, 4081628472),
          u(1508970993, 3053834265),
          u(2453635748, 2937671579),
          u(2870763221, 3664609560),
          u(3624381080, 2734883394),
          u(310598401, 1164996542),
          u(607225278, 1323610764),
          u(1426881987, 3590304994),
          u(1925078388, 4068182383),
          u(2162078206, 991336113),
          u(2614888103, 633803317),
          u(3248222580, 3479774868),
          u(3835390401, 2666613458),
          u(4022224774, 944711139),
          u(264347078, 2341262773),
          u(604807628, 2007800933),
          u(770255983, 1495990901),
          u(1249150122, 1856431235),
          u(1555081692, 3175218132),
          u(1996064986, 2198950837),
          u(2554220882, 3999719339),
          u(2821834349, 766784016),
          u(2952996808, 2566594879),
          u(3210313671, 3203337956),
          u(3336571891, 1034457026),
          u(3584528711, 2466948901),
          u(113926993, 3758326383),
          u(338241895, 168717936),
          u(666307205, 1188179964),
          u(773529912, 1546045734),
          u(1294757372, 1522805485),
          u(1396182291, 2643833823),
          u(1695183700, 2343527390),
          u(1986661051, 1014477480),
          u(2177026350, 1206759142),
          u(2456956037, 344077627),
          u(2730485921, 1290863460),
          u(2820302411, 3158454273),
          u(3259730800, 3505952657),
          u(3345764771, 106217008),
          u(3516065817, 3606008344),
          u(3600352804, 1432725776),
          u(4094571909, 1467031594),
          u(275423344, 851169720),
          u(430227734, 3100823752),
          u(506948616, 1363258195),
          u(659060556, 3750685593),
          u(883997877, 3785050280),
          u(958139571, 3318307427),
          u(1322822218, 3812723403),
          u(1537002063, 2003034995),
          u(1747873779, 3602036899),
          u(1955562222, 1575990012),
          u(2024104815, 1125592928),
          u(2227730452, 2716904306),
          u(2361852424, 442776044),
          u(2428436474, 593698344),
          u(2756734187, 3733110249),
          u(3204031479, 2999351573),
          u(3329325298, 3815920427),
          u(3391569614, 3928383900),
          u(3515267271, 566280711),
          u(3940187606, 3454069534),
          u(4118630271, 4000239992),
          u(116418474, 1914138554),
          u(174292421, 2731055270),
          u(289380356, 3203993006),
          u(460393269, 320620315),
          u(685471733, 587496836),
          u(852142971, 1086792851),
          u(1017036298, 365543100),
          u(1126000580, 2618297676),
          u(1288033470, 3409855158),
          u(1501505948, 4234509866),
          u(1607167915, 987167468),
          u(1816402316, 1246189591)
        ], d = [];
        (function() {
          for (var p = 0; p < 80; p++)
            d[p] = u();
        })();
        var h = c.SHA512 = a.extend({
          _doReset: function() {
            this._hash = new l.init([
              new o.init(1779033703, 4089235720),
              new o.init(3144134277, 2227873595),
              new o.init(1013904242, 4271175723),
              new o.init(2773480762, 1595750129),
              new o.init(1359893119, 2917565137),
              new o.init(2600822924, 725511199),
              new o.init(528734635, 4215389547),
              new o.init(1541459225, 327033209)
            ]);
          },
          _doProcessBlock: function(p, v) {
            for (var g = this._hash.words, m = g[0], y = g[1], _ = g[2], x = g[3], b = g[4], w = g[5], E = g[6], $ = g[7], C = m.high, D = m.low, A = y.high, S = y.low, k = _.high, j = _.low, P = x.high, H = x.low, K = b.high, X = b.low, Z = w.high, B = w.low, T = E.high, R = E.low, N = $.high, F = $.low, te = C, J = D, be = A, ee = S, _e = k, Xe = j, Qe = P, tt = H, Ie = K, We = X, bt = Z, Ot = B, Ft = T, Tt = R, _r = N, ct = F, ze = 0; ze < 80; ze++) {
              var Ue, dt, Mt = d[ze];
              if (ze < 16)
                dt = Mt.high = p[v + ze * 2] | 0, Ue = Mt.low = p[v + ze * 2 + 1] | 0;
              else {
                var Nt = d[ze - 15], At = Nt.high, Lt = Nt.low, Ur = (At >>> 1 | Lt << 31) ^ (At >>> 8 | Lt << 24) ^ At >>> 7, ti = (Lt >>> 1 | At << 31) ^ (Lt >>> 8 | At << 24) ^ (Lt >>> 7 | At << 25), qr = d[ze - 2], or = qr.high, Zt = qr.low, ca = (or >>> 19 | Zt << 13) ^ (or << 3 | Zt >>> 29) ^ or >>> 6, ri = (Zt >>> 19 | or << 13) ^ (Zt << 3 | or >>> 29) ^ (Zt >>> 6 | or << 26), bn = d[ze - 7], V = bn.high, q = bn.low, se = d[ze - 16], O = se.high, U = se.low;
                Ue = ti + q, dt = Ur + V + (Ue >>> 0 < ti >>> 0 ? 1 : 0), Ue = Ue + ri, dt = dt + ca + (Ue >>> 0 < ri >>> 0 ? 1 : 0), Ue = Ue + U, dt = dt + O + (Ue >>> 0 < U >>> 0 ? 1 : 0), Mt.high = dt, Mt.low = Ue;
              }
              var ne = Ie & bt ^ ~Ie & Ft, fe = We & Ot ^ ~We & Tt, He = te & be ^ te & _e ^ be & _e, Pt = J & ee ^ J & Xe ^ ee & Xe, ht = (te >>> 28 | J << 4) ^ (te << 30 | J >>> 2) ^ (te << 25 | J >>> 7), wr = (J >>> 28 | te << 4) ^ (J << 30 | te >>> 2) ^ (J << 25 | te >>> 7), _n = (Ie >>> 14 | We << 18) ^ (Ie >>> 18 | We << 14) ^ (Ie << 23 | We >>> 9), ni = (We >>> 14 | Ie << 18) ^ (We >>> 18 | Ie << 14) ^ (We << 23 | Ie >>> 9), _t = f[ze], ii = _t.high, Gr = _t.low, ut = ct + ni, Xt = _r + _n + (ut >>> 0 < ct >>> 0 ? 1 : 0), ut = ut + fe, Xt = Xt + ne + (ut >>> 0 < fe >>> 0 ? 1 : 0), ut = ut + Gr, Xt = Xt + ii + (ut >>> 0 < Gr >>> 0 ? 1 : 0), ut = ut + Ue, Xt = Xt + dt + (ut >>> 0 < Ue >>> 0 ? 1 : 0), Id = wr + Pt, E2 = ht + He + (Id >>> 0 < wr >>> 0 ? 1 : 0);
              _r = Ft, ct = Tt, Ft = bt, Tt = Ot, bt = Ie, Ot = We, We = tt + ut | 0, Ie = Qe + Xt + (We >>> 0 < tt >>> 0 ? 1 : 0) | 0, Qe = _e, tt = Xe, _e = be, Xe = ee, be = te, ee = J, J = ut + Id | 0, te = Xt + E2 + (J >>> 0 < ut >>> 0 ? 1 : 0) | 0;
            }
            D = m.low = D + J, m.high = C + te + (D >>> 0 < J >>> 0 ? 1 : 0), S = y.low = S + ee, y.high = A + be + (S >>> 0 < ee >>> 0 ? 1 : 0), j = _.low = j + Xe, _.high = k + _e + (j >>> 0 < Xe >>> 0 ? 1 : 0), H = x.low = H + tt, x.high = P + Qe + (H >>> 0 < tt >>> 0 ? 1 : 0), X = b.low = X + We, b.high = K + Ie + (X >>> 0 < We >>> 0 ? 1 : 0), B = w.low = B + Ot, w.high = Z + bt + (B >>> 0 < Ot >>> 0 ? 1 : 0), R = E.low = R + Tt, E.high = T + Ft + (R >>> 0 < Tt >>> 0 ? 1 : 0), F = $.low = F + ct, $.high = N + _r + (F >>> 0 < ct >>> 0 ? 1 : 0);
          },
          _doFinalize: function() {
            var p = this._data, v = p.words, g = this._nDataBytes * 8, m = p.sigBytes * 8;
            v[m >>> 5] |= 128 << 24 - m % 32, v[(m + 128 >>> 10 << 5) + 30] = Math.floor(g / 4294967296), v[(m + 128 >>> 10 << 5) + 31] = g, p.sigBytes = v.length * 4, this._process();
            var y = this._hash.toX32();
            return y;
          },
          clone: function() {
            var p = a.clone.call(this);
            return p._hash = this._hash.clone(), p;
          },
          blockSize: 1024 / 32
        });
        n.SHA512 = a._createHelper(h), n.HmacSHA512 = a._createHmacHelper(h);
      }(), r.SHA512;
    });
  }(Zc)), Zc.exports;
}
var Xc = { exports: {} }, kg;
function rY() {
  return kg || (kg = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(ye(), ql(), Lb());
    })(le, function(r) {
      return function() {
        var n = r, i = n.x64, a = i.Word, s = i.WordArray, o = n.algo, l = o.SHA512, c = o.SHA384 = l.extend({
          _doReset: function() {
            this._hash = new s.init([
              new a.init(3418070365, 3238371032),
              new a.init(1654270250, 914150663),
              new a.init(2438529370, 812702999),
              new a.init(355462360, 4144912697),
              new a.init(1731405415, 4290775857),
              new a.init(2394180231, 1750603025),
              new a.init(3675008525, 1694076839),
              new a.init(1203062813, 3204075428)
            ]);
          },
          _doFinalize: function() {
            var u = l._doFinalize.call(this);
            return u.sigBytes -= 16, u;
          }
        });
        n.SHA384 = l._createHelper(c), n.HmacSHA384 = l._createHmacHelper(c);
      }(), r.SHA384;
    });
  }(Xc)), Xc.exports;
}
var Jc = { exports: {} }, Og;
function nY() {
  return Og || (Og = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(ye(), ql());
    })(le, function(r) {
      return function(n) {
        var i = r, a = i.lib, s = a.WordArray, o = a.Hasher, l = i.x64, c = l.Word, u = i.algo, f = [], d = [], h = [];
        (function() {
          for (var g = 1, m = 0, y = 0; y < 24; y++) {
            f[g + 5 * m] = (y + 1) * (y + 2) / 2 % 64;
            var _ = m % 5, x = (2 * g + 3 * m) % 5;
            g = _, m = x;
          }
          for (var g = 0; g < 5; g++)
            for (var m = 0; m < 5; m++)
              d[g + 5 * m] = m + (2 * g + 3 * m) % 5 * 5;
          for (var b = 1, w = 0; w < 24; w++) {
            for (var E = 0, $ = 0, C = 0; C < 7; C++) {
              if (b & 1) {
                var D = (1 << C) - 1;
                D < 32 ? $ ^= 1 << D : E ^= 1 << D - 32;
              }
              b & 128 ? b = b << 1 ^ 113 : b <<= 1;
            }
            h[w] = c.create(E, $);
          }
        })();
        var p = [];
        (function() {
          for (var g = 0; g < 25; g++)
            p[g] = c.create();
        })();
        var v = u.SHA3 = o.extend({
          /**
           * Configuration options.
           *
           * @property {number} outputLength
           *   The desired number of bits in the output hash.
           *   Only values permitted are: 224, 256, 384, 512.
           *   Default: 512
           */
          cfg: o.cfg.extend({
            outputLength: 512
          }),
          _doReset: function() {
            for (var g = this._state = [], m = 0; m < 25; m++)
              g[m] = new c.init();
            this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
          },
          _doProcessBlock: function(g, m) {
            for (var y = this._state, _ = this.blockSize / 2, x = 0; x < _; x++) {
              var b = g[m + 2 * x], w = g[m + 2 * x + 1];
              b = (b << 8 | b >>> 24) & 16711935 | (b << 24 | b >>> 8) & 4278255360, w = (w << 8 | w >>> 24) & 16711935 | (w << 24 | w >>> 8) & 4278255360;
              var E = y[x];
              E.high ^= w, E.low ^= b;
            }
            for (var $ = 0; $ < 24; $++) {
              for (var C = 0; C < 5; C++) {
                for (var D = 0, A = 0, S = 0; S < 5; S++) {
                  var E = y[C + 5 * S];
                  D ^= E.high, A ^= E.low;
                }
                var k = p[C];
                k.high = D, k.low = A;
              }
              for (var C = 0; C < 5; C++)
                for (var j = p[(C + 4) % 5], P = p[(C + 1) % 5], H = P.high, K = P.low, D = j.high ^ (H << 1 | K >>> 31), A = j.low ^ (K << 1 | H >>> 31), S = 0; S < 5; S++) {
                  var E = y[C + 5 * S];
                  E.high ^= D, E.low ^= A;
                }
              for (var X = 1; X < 25; X++) {
                var D, A, E = y[X], Z = E.high, B = E.low, T = f[X];
                T < 32 ? (D = Z << T | B >>> 32 - T, A = B << T | Z >>> 32 - T) : (D = B << T - 32 | Z >>> 64 - T, A = Z << T - 32 | B >>> 64 - T);
                var R = p[d[X]];
                R.high = D, R.low = A;
              }
              var N = p[0], F = y[0];
              N.high = F.high, N.low = F.low;
              for (var C = 0; C < 5; C++)
                for (var S = 0; S < 5; S++) {
                  var X = C + 5 * S, E = y[X], te = p[X], J = p[(C + 1) % 5 + 5 * S], be = p[(C + 2) % 5 + 5 * S];
                  E.high = te.high ^ ~J.high & be.high, E.low = te.low ^ ~J.low & be.low;
                }
              var E = y[0], ee = h[$];
              E.high ^= ee.high, E.low ^= ee.low;
            }
          },
          _doFinalize: function() {
            var g = this._data, m = g.words;
            this._nDataBytes * 8;
            var y = g.sigBytes * 8, _ = this.blockSize * 32;
            m[y >>> 5] |= 1 << 24 - y % 32, m[(n.ceil((y + 1) / _) * _ >>> 5) - 1] |= 128, g.sigBytes = m.length * 4, this._process();
            for (var x = this._state, b = this.cfg.outputLength / 8, w = b / 8, E = [], $ = 0; $ < w; $++) {
              var C = x[$], D = C.high, A = C.low;
              D = (D << 8 | D >>> 24) & 16711935 | (D << 24 | D >>> 8) & 4278255360, A = (A << 8 | A >>> 24) & 16711935 | (A << 24 | A >>> 8) & 4278255360, E.push(A), E.push(D);
            }
            return new s.init(E, b);
          },
          clone: function() {
            for (var g = o.clone.call(this), m = g._state = this._state.slice(0), y = 0; y < 25; y++)
              m[y] = m[y].clone();
            return g;
          }
        });
        i.SHA3 = o._createHelper(v), i.HmacSHA3 = o._createHmacHelper(v);
      }(Math), r.SHA3;
    });
  }(Jc)), Jc.exports;
}
var Qc = { exports: {} }, Fg;
function iY() {
  return Fg || (Fg = 1, function(e, t) {
    (function(r, n) {
      e.exports = n(ye());
    })(le, function(r) {
      /** @preserve
      			(c) 2012 by Cédric Mesnil. All rights reserved.
      
      			Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
      
      			    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
      			    - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
      
      			THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
      			*/
      return function(n) {
        var i = r, a = i.lib, s = a.WordArray, o = a.Hasher, l = i.algo, c = s.create([
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          7,
          4,
          13,
          1,
          10,
          6,
          15,
          3,
          12,
          0,
          9,
          5,
          2,
          14,
          11,
          8,
          3,
          10,
          14,
          4,
          9,
          15,
          8,
          1,
          2,
          7,
          0,
          6,
          13,
          11,
          5,
          12,
          1,
          9,
          11,
          10,
          0,
          8,
          12,
          4,
          13,
          3,
          7,
          15,
          14,
          5,
          6,
          2,
          4,
          0,
          5,
          9,
          7,
          12,
          2,
          10,
          14,
          1,
          3,
          8,
          11,
          6,
          15,
          13
        ]), u = s.create([
          5,
          14,
          7,
          0,
          9,
          2,
          11,
          4,
          13,
          6,
          15,
          8,
          1,
          10,
          3,
          12,
          6,
          11,
          3,
          7,
          0,
          13,
          5,
          10,
          14,
          15,
          8,
          12,
          4,
          9,
          1,
          2,
          15,
          5,
          1,
          3,
          7,
          14,
          6,
          9,
          11,
          8,
          12,
          2,
          10,
          0,
          4,
          13,
          8,
          6,
          4,
          1,
          3,
          11,
          15,
          0,
          5,
          12,
          2,
          13,
          9,
          7,
          10,
          14,
          12,
          15,
          10,
          4,
          1,
          5,
          8,
          7,
          6,
          2,
          13,
          14,
          0,
          3,
          9,
          11
        ]), f = s.create([
          11,
          14,
          15,
          12,
          5,
          8,
          7,
          9,
          11,
          13,
          14,
          15,
          6,
          7,
          9,
          8,
          7,
          6,
          8,
          13,
          11,
          9,
          7,
          15,
          7,
          12,
          15,
          9,
          11,
          7,
          13,
          12,
          11,
          13,
          6,
          7,
          14,
          9,
          13,
          15,
          14,
          8,
          13,
          6,
          5,
          12,
          7,
          5,
          11,
          12,
          14,
          15,
          14,
          15,
          9,
          8,
          9,
          14,
          5,
          6,
          8,
          6,
          5,
          12,
          9,
          15,
          5,
          11,
          6,
          8,
          13,
          12,
          5,
          12,
          13,
          14,
          11,
          8,
          5,
          6
        ]), d = s.create([
          8,
          9,
          9,
          11,
          13,
          15,
          15,
          5,
          7,
          7,
          8,
          11,
          14,
          14,
          12,
          6,
          9,
          13,
          15,
          7,
          12,
          8,
          9,
          11,
          7,
          7,
          12,
          7,
          6,
          15,
          13,
          11,
          9,
          7,
          15,
          11,
          8,
          6,
          6,
          14,
          12,
          13,
          5,
          14,
          13,
          13,
          7,
          5,
          15,
          5,
          8,
          11,
          14,
          14,
          6,
          14,
          6,
          9,
          12,
          9,
          12,
          5,
          15,
          8,
          8,
          5,
          12,
          9,
          12,
          5,
          14,
          6,
          8,
          13,
          6,
          5,
          15,
          13,
          11,
          11
        ]), h = s.create([0, 1518500249, 1859775393, 2400959708, 2840853838]), p = s.create([1352829926, 1548603684, 1836072691, 2053994217, 0]), v = l.RIPEMD160 = o.extend({
          _doReset: function() {
            this._hash = s.create([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
          },
          _doProcessBlock: function(w, E) {
            for (var $ = 0; $ < 16; $++) {
              var C = E + $, D = w[C];
              w[C] = (D << 8 | D >>> 24) & 16711935 | (D << 24 | D >>> 8) & 4278255360;
            }
            var A = this._hash.words, S = h.words, k = p.words, j = c.words, P = u.words, H = f.words, K = d.words, X, Z, B, T, R, N, F, te, J, be;
            N = X = A[0], F = Z = A[1], te = B = A[2], J = T = A[3], be = R = A[4];
            for (var ee, $ = 0; $ < 80; $ += 1)
              ee = X + w[E + j[$]] | 0, $ < 16 ? ee += g(Z, B, T) + S[0] : $ < 32 ? ee += m(Z, B, T) + S[1] : $ < 48 ? ee += y(Z, B, T) + S[2] : $ < 64 ? ee += _(Z, B, T) + S[3] : ee += x(Z, B, T) + S[4], ee = ee | 0, ee = b(ee, H[$]), ee = ee + R | 0, X = R, R = T, T = b(B, 10), B = Z, Z = ee, ee = N + w[E + P[$]] | 0, $ < 16 ? ee += x(F, te, J) + k[0] : $ < 32 ? ee += _(F, te, J) + k[1] : $ < 48 ? ee += y(F, te, J) + k[2] : $ < 64 ? ee += m(F, te, J) + k[3] : ee += g(F, te, J) + k[4], ee = ee | 0, ee = b(ee, K[$]), ee = ee + be | 0, N = be, be = J, J = b(te, 10), te = F, F = ee;
            ee = A[1] + B + J | 0, A[1] = A[2] + T + be | 0, A[2] = A[3] + R + N | 0, A[3] = A[4] + X + F | 0, A[4] = A[0] + Z + te | 0, A[0] = ee;
          },
          _doFinalize: function() {
            var w = this._data, E = w.words, $ = this._nDataBytes * 8, C = w.sigBytes * 8;
            E[C >>> 5] |= 128 << 24 - C % 32, E[(C + 64 >>> 9 << 4) + 14] = ($ << 8 | $ >>> 24) & 16711935 | ($ << 24 | $ >>> 8) & 4278255360, w.sigBytes = (E.length + 1) * 4, this._process();
            for (var D = this._hash, A = D.words, S = 0; S < 5; S++) {
              var k = A[S];
              A[S] = (k << 8 | k >>> 24) & 16711935 | (k << 24 | k >>> 8) & 4278255360;
            }
            return D;
          },
          clone: function() {
            var w = o.clone.call(this);
            return w._hash = this._hash.clone(), w;
          }
        });
        function g(w, E, $) {
          return w ^ E ^ $;
        }
        function m(w, E, $) {
          return w & E | ~w & $;
        }
        function y(w, E, $) {
          return (w | ~E) ^ $;
        }
        function _(w, E, $) {
          return w & $ | E & ~$;
        }
        function x(w, E, $) {
          return w ^ (E | ~$);
        }
        function b(w, E) {
          return w << E | w >>> 32 - E;
        }
        i.RIPEMD160 = o._createHelper(v), i.HmacRIPEMD160 = o._createHmacHelper(v);
      }(), r.RIPEMD160;
    });
  }(Qc)), Qc.exports;
}
var eu = { exports: {} }, Tg;
function ad() {
  return Tg || (Tg = 1, function(e, t) {
    (function(r, n) {
      e.exports = n(ye());
    })(le, function(r) {
      (function() {
        var n = r, i = n.lib, a = i.Base, s = n.enc, o = s.Utf8, l = n.algo;
        l.HMAC = a.extend({
          /**
           * Initializes a newly created HMAC.
           *
           * @param {Hasher} hasher The hash algorithm to use.
           * @param {WordArray|string} key The secret key.
           *
           * @example
           *
           *     var hmacHasher = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, key);
           */
          init: function(c, u) {
            c = this._hasher = new c.init(), typeof u == "string" && (u = o.parse(u));
            var f = c.blockSize, d = f * 4;
            u.sigBytes > d && (u = c.finalize(u)), u.clamp();
            for (var h = this._oKey = u.clone(), p = this._iKey = u.clone(), v = h.words, g = p.words, m = 0; m < f; m++)
              v[m] ^= 1549556828, g[m] ^= 909522486;
            h.sigBytes = p.sigBytes = d, this.reset();
          },
          /**
           * Resets this HMAC to its initial state.
           *
           * @example
           *
           *     hmacHasher.reset();
           */
          reset: function() {
            var c = this._hasher;
            c.reset(), c.update(this._iKey);
          },
          /**
           * Updates this HMAC with a message.
           *
           * @param {WordArray|string} messageUpdate The message to append.
           *
           * @return {HMAC} This HMAC instance.
           *
           * @example
           *
           *     hmacHasher.update('message');
           *     hmacHasher.update(wordArray);
           */
          update: function(c) {
            return this._hasher.update(c), this;
          },
          /**
           * Finalizes the HMAC computation.
           * Note that the finalize operation is effectively a destructive, read-once operation.
           *
           * @param {WordArray|string} messageUpdate (Optional) A final message update.
           *
           * @return {WordArray} The HMAC.
           *
           * @example
           *
           *     var hmac = hmacHasher.finalize();
           *     var hmac = hmacHasher.finalize('message');
           *     var hmac = hmacHasher.finalize(wordArray);
           */
          finalize: function(c) {
            var u = this._hasher, f = u.finalize(c);
            u.reset();
            var d = u.finalize(this._oKey.clone().concat(f));
            return d;
          }
        });
      })();
    });
  }(eu)), eu.exports;
}
var tu = { exports: {} }, Mg;
function aY() {
  return Mg || (Mg = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(ye(), id(), ad());
    })(le, function(r) {
      return function() {
        var n = r, i = n.lib, a = i.Base, s = i.WordArray, o = n.algo, l = o.SHA256, c = o.HMAC, u = o.PBKDF2 = a.extend({
          /**
           * Configuration options.
           *
           * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
           * @property {Hasher} hasher The hasher to use. Default: SHA256
           * @property {number} iterations The number of iterations to perform. Default: 250000
           */
          cfg: a.extend({
            keySize: 128 / 32,
            hasher: l,
            iterations: 25e4
          }),
          /**
           * Initializes a newly created key derivation function.
           *
           * @param {Object} cfg (Optional) The configuration options to use for the derivation.
           *
           * @example
           *
           *     var kdf = CryptoJS.algo.PBKDF2.create();
           *     var kdf = CryptoJS.algo.PBKDF2.create({ keySize: 8 });
           *     var kdf = CryptoJS.algo.PBKDF2.create({ keySize: 8, iterations: 1000 });
           */
          init: function(f) {
            this.cfg = this.cfg.extend(f);
          },
          /**
           * Computes the Password-Based Key Derivation Function 2.
           *
           * @param {WordArray|string} password The password.
           * @param {WordArray|string} salt A salt.
           *
           * @return {WordArray} The derived key.
           *
           * @example
           *
           *     var key = kdf.compute(password, salt);
           */
          compute: function(f, d) {
            for (var h = this.cfg, p = c.create(h.hasher, f), v = s.create(), g = s.create([1]), m = v.words, y = g.words, _ = h.keySize, x = h.iterations; m.length < _; ) {
              var b = p.update(d).finalize(g);
              p.reset();
              for (var w = b.words, E = w.length, $ = b, C = 1; C < x; C++) {
                $ = p.finalize($), p.reset();
                for (var D = $.words, A = 0; A < E; A++)
                  w[A] ^= D[A];
              }
              v.concat(b), y[0]++;
            }
            return v.sigBytes = _ * 4, v;
          }
        });
        n.PBKDF2 = function(f, d, h) {
          return u.create(h).compute(f, d);
        };
      }(), r.PBKDF2;
    });
  }(tu)), tu.exports;
}
var ru = { exports: {} }, Pg;
function xn() {
  return Pg || (Pg = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(ye(), Nb(), ad());
    })(le, function(r) {
      return function() {
        var n = r, i = n.lib, a = i.Base, s = i.WordArray, o = n.algo, l = o.MD5, c = o.EvpKDF = a.extend({
          /**
           * Configuration options.
           *
           * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
           * @property {Hasher} hasher The hash algorithm to use. Default: MD5
           * @property {number} iterations The number of iterations to perform. Default: 1
           */
          cfg: a.extend({
            keySize: 128 / 32,
            hasher: l,
            iterations: 1
          }),
          /**
           * Initializes a newly created key derivation function.
           *
           * @param {Object} cfg (Optional) The configuration options to use for the derivation.
           *
           * @example
           *
           *     var kdf = CryptoJS.algo.EvpKDF.create();
           *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8 });
           *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8, iterations: 1000 });
           */
          init: function(u) {
            this.cfg = this.cfg.extend(u);
          },
          /**
           * Derives a key from a password.
           *
           * @param {WordArray|string} password The password.
           * @param {WordArray|string} salt A salt.
           *
           * @return {WordArray} The derived key.
           *
           * @example
           *
           *     var key = kdf.compute(password, salt);
           */
          compute: function(u, f) {
            for (var d, h = this.cfg, p = h.hasher.create(), v = s.create(), g = v.words, m = h.keySize, y = h.iterations; g.length < m; ) {
              d && p.update(d), d = p.update(u).finalize(f), p.reset();
              for (var _ = 1; _ < y; _++)
                d = p.finalize(d), p.reset();
              v.concat(d);
            }
            return v.sigBytes = m * 4, v;
          }
        });
        n.EvpKDF = function(u, f, d) {
          return c.create(d).compute(u, f);
        };
      }(), r.EvpKDF;
    });
  }(ru)), ru.exports;
}
var nu = { exports: {} }, Bg;
function lt() {
  return Bg || (Bg = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(ye(), xn());
    })(le, function(r) {
      r.lib.Cipher || function(n) {
        var i = r, a = i.lib, s = a.Base, o = a.WordArray, l = a.BufferedBlockAlgorithm, c = i.enc;
        c.Utf8;
        var u = c.Base64, f = i.algo, d = f.EvpKDF, h = a.Cipher = l.extend({
          /**
           * Configuration options.
           *
           * @property {WordArray} iv The IV to use for this operation.
           */
          cfg: s.extend(),
          /**
           * Creates this cipher in encryption mode.
           *
           * @param {WordArray} key The key.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @return {Cipher} A cipher instance.
           *
           * @static
           *
           * @example
           *
           *     var cipher = CryptoJS.algo.AES.createEncryptor(keyWordArray, { iv: ivWordArray });
           */
          createEncryptor: function(D, A) {
            return this.create(this._ENC_XFORM_MODE, D, A);
          },
          /**
           * Creates this cipher in decryption mode.
           *
           * @param {WordArray} key The key.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @return {Cipher} A cipher instance.
           *
           * @static
           *
           * @example
           *
           *     var cipher = CryptoJS.algo.AES.createDecryptor(keyWordArray, { iv: ivWordArray });
           */
          createDecryptor: function(D, A) {
            return this.create(this._DEC_XFORM_MODE, D, A);
          },
          /**
           * Initializes a newly created cipher.
           *
           * @param {number} xformMode Either the encryption or decryption transormation mode constant.
           * @param {WordArray} key The key.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @example
           *
           *     var cipher = CryptoJS.algo.AES.create(CryptoJS.algo.AES._ENC_XFORM_MODE, keyWordArray, { iv: ivWordArray });
           */
          init: function(D, A, S) {
            this.cfg = this.cfg.extend(S), this._xformMode = D, this._key = A, this.reset();
          },
          /**
           * Resets this cipher to its initial state.
           *
           * @example
           *
           *     cipher.reset();
           */
          reset: function() {
            l.reset.call(this), this._doReset();
          },
          /**
           * Adds data to be encrypted or decrypted.
           *
           * @param {WordArray|string} dataUpdate The data to encrypt or decrypt.
           *
           * @return {WordArray} The data after processing.
           *
           * @example
           *
           *     var encrypted = cipher.process('data');
           *     var encrypted = cipher.process(wordArray);
           */
          process: function(D) {
            return this._append(D), this._process();
          },
          /**
           * Finalizes the encryption or decryption process.
           * Note that the finalize operation is effectively a destructive, read-once operation.
           *
           * @param {WordArray|string} dataUpdate The final data to encrypt or decrypt.
           *
           * @return {WordArray} The data after final processing.
           *
           * @example
           *
           *     var encrypted = cipher.finalize();
           *     var encrypted = cipher.finalize('data');
           *     var encrypted = cipher.finalize(wordArray);
           */
          finalize: function(D) {
            D && this._append(D);
            var A = this._doFinalize();
            return A;
          },
          keySize: 128 / 32,
          ivSize: 128 / 32,
          _ENC_XFORM_MODE: 1,
          _DEC_XFORM_MODE: 2,
          /**
           * Creates shortcut functions to a cipher's object interface.
           *
           * @param {Cipher} cipher The cipher to create a helper for.
           *
           * @return {Object} An object with encrypt and decrypt shortcut functions.
           *
           * @static
           *
           * @example
           *
           *     var AES = CryptoJS.lib.Cipher._createHelper(CryptoJS.algo.AES);
           */
          _createHelper: /* @__PURE__ */ function() {
            function D(A) {
              return typeof A == "string" ? C : w;
            }
            return function(A) {
              return {
                encrypt: function(S, k, j) {
                  return D(k).encrypt(A, S, k, j);
                },
                decrypt: function(S, k, j) {
                  return D(k).decrypt(A, S, k, j);
                }
              };
            };
          }()
        });
        a.StreamCipher = h.extend({
          _doFinalize: function() {
            var D = this._process(!0);
            return D;
          },
          blockSize: 1
        });
        var p = i.mode = {}, v = a.BlockCipherMode = s.extend({
          /**
           * Creates this mode for encryption.
           *
           * @param {Cipher} cipher A block cipher instance.
           * @param {Array} iv The IV words.
           *
           * @static
           *
           * @example
           *
           *     var mode = CryptoJS.mode.CBC.createEncryptor(cipher, iv.words);
           */
          createEncryptor: function(D, A) {
            return this.Encryptor.create(D, A);
          },
          /**
           * Creates this mode for decryption.
           *
           * @param {Cipher} cipher A block cipher instance.
           * @param {Array} iv The IV words.
           *
           * @static
           *
           * @example
           *
           *     var mode = CryptoJS.mode.CBC.createDecryptor(cipher, iv.words);
           */
          createDecryptor: function(D, A) {
            return this.Decryptor.create(D, A);
          },
          /**
           * Initializes a newly created mode.
           *
           * @param {Cipher} cipher A block cipher instance.
           * @param {Array} iv The IV words.
           *
           * @example
           *
           *     var mode = CryptoJS.mode.CBC.Encryptor.create(cipher, iv.words);
           */
          init: function(D, A) {
            this._cipher = D, this._iv = A;
          }
        }), g = p.CBC = function() {
          var D = v.extend();
          D.Encryptor = D.extend({
            /**
             * Processes the data block at offset.
             *
             * @param {Array} words The data words to operate on.
             * @param {number} offset The offset where the block starts.
             *
             * @example
             *
             *     mode.processBlock(data.words, offset);
             */
            processBlock: function(S, k) {
              var j = this._cipher, P = j.blockSize;
              A.call(this, S, k, P), j.encryptBlock(S, k), this._prevBlock = S.slice(k, k + P);
            }
          }), D.Decryptor = D.extend({
            /**
             * Processes the data block at offset.
             *
             * @param {Array} words The data words to operate on.
             * @param {number} offset The offset where the block starts.
             *
             * @example
             *
             *     mode.processBlock(data.words, offset);
             */
            processBlock: function(S, k) {
              var j = this._cipher, P = j.blockSize, H = S.slice(k, k + P);
              j.decryptBlock(S, k), A.call(this, S, k, P), this._prevBlock = H;
            }
          });
          function A(S, k, j) {
            var P, H = this._iv;
            H ? (P = H, this._iv = n) : P = this._prevBlock;
            for (var K = 0; K < j; K++)
              S[k + K] ^= P[K];
          }
          return D;
        }(), m = i.pad = {}, y = m.Pkcs7 = {
          /**
           * Pads data using the algorithm defined in PKCS #5/7.
           *
           * @param {WordArray} data The data to pad.
           * @param {number} blockSize The multiple that the data should be padded to.
           *
           * @static
           *
           * @example
           *
           *     CryptoJS.pad.Pkcs7.pad(wordArray, 4);
           */
          pad: function(D, A) {
            for (var S = A * 4, k = S - D.sigBytes % S, j = k << 24 | k << 16 | k << 8 | k, P = [], H = 0; H < k; H += 4)
              P.push(j);
            var K = o.create(P, k);
            D.concat(K);
          },
          /**
           * Unpads data that had been padded using the algorithm defined in PKCS #5/7.
           *
           * @param {WordArray} data The data to unpad.
           *
           * @static
           *
           * @example
           *
           *     CryptoJS.pad.Pkcs7.unpad(wordArray);
           */
          unpad: function(D) {
            var A = D.words[D.sigBytes - 1 >>> 2] & 255;
            D.sigBytes -= A;
          }
        };
        a.BlockCipher = h.extend({
          /**
           * Configuration options.
           *
           * @property {Mode} mode The block mode to use. Default: CBC
           * @property {Padding} padding The padding strategy to use. Default: Pkcs7
           */
          cfg: h.cfg.extend({
            mode: g,
            padding: y
          }),
          reset: function() {
            var D;
            h.reset.call(this);
            var A = this.cfg, S = A.iv, k = A.mode;
            this._xformMode == this._ENC_XFORM_MODE ? D = k.createEncryptor : (D = k.createDecryptor, this._minBufferSize = 1), this._mode && this._mode.__creator == D ? this._mode.init(this, S && S.words) : (this._mode = D.call(k, this, S && S.words), this._mode.__creator = D);
          },
          _doProcessBlock: function(D, A) {
            this._mode.processBlock(D, A);
          },
          _doFinalize: function() {
            var D, A = this.cfg.padding;
            return this._xformMode == this._ENC_XFORM_MODE ? (A.pad(this._data, this.blockSize), D = this._process(!0)) : (D = this._process(!0), A.unpad(D)), D;
          },
          blockSize: 128 / 32
        });
        var _ = a.CipherParams = s.extend({
          /**
           * Initializes a newly created cipher params object.
           *
           * @param {Object} cipherParams An object with any of the possible cipher parameters.
           *
           * @example
           *
           *     var cipherParams = CryptoJS.lib.CipherParams.create({
           *         ciphertext: ciphertextWordArray,
           *         key: keyWordArray,
           *         iv: ivWordArray,
           *         salt: saltWordArray,
           *         algorithm: CryptoJS.algo.AES,
           *         mode: CryptoJS.mode.CBC,
           *         padding: CryptoJS.pad.PKCS7,
           *         blockSize: 4,
           *         formatter: CryptoJS.format.OpenSSL
           *     });
           */
          init: function(D) {
            this.mixIn(D);
          },
          /**
           * Converts this cipher params object to a string.
           *
           * @param {Format} formatter (Optional) The formatting strategy to use.
           *
           * @return {string} The stringified cipher params.
           *
           * @throws Error If neither the formatter nor the default formatter is set.
           *
           * @example
           *
           *     var string = cipherParams + '';
           *     var string = cipherParams.toString();
           *     var string = cipherParams.toString(CryptoJS.format.OpenSSL);
           */
          toString: function(D) {
            return (D || this.formatter).stringify(this);
          }
        }), x = i.format = {}, b = x.OpenSSL = {
          /**
           * Converts a cipher params object to an OpenSSL-compatible string.
           *
           * @param {CipherParams} cipherParams The cipher params object.
           *
           * @return {string} The OpenSSL-compatible string.
           *
           * @static
           *
           * @example
           *
           *     var openSSLString = CryptoJS.format.OpenSSL.stringify(cipherParams);
           */
          stringify: function(D) {
            var A, S = D.ciphertext, k = D.salt;
            return k ? A = o.create([1398893684, 1701076831]).concat(k).concat(S) : A = S, A.toString(u);
          },
          /**
           * Converts an OpenSSL-compatible string to a cipher params object.
           *
           * @param {string} openSSLStr The OpenSSL-compatible string.
           *
           * @return {CipherParams} The cipher params object.
           *
           * @static
           *
           * @example
           *
           *     var cipherParams = CryptoJS.format.OpenSSL.parse(openSSLString);
           */
          parse: function(D) {
            var A, S = u.parse(D), k = S.words;
            return k[0] == 1398893684 && k[1] == 1701076831 && (A = o.create(k.slice(2, 4)), k.splice(0, 4), S.sigBytes -= 16), _.create({ ciphertext: S, salt: A });
          }
        }, w = a.SerializableCipher = s.extend({
          /**
           * Configuration options.
           *
           * @property {Formatter} format The formatting strategy to convert cipher param objects to and from a string. Default: OpenSSL
           */
          cfg: s.extend({
            format: b
          }),
          /**
           * Encrypts a message.
           *
           * @param {Cipher} cipher The cipher algorithm to use.
           * @param {WordArray|string} message The message to encrypt.
           * @param {WordArray} key The key.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @return {CipherParams} A cipher params object.
           *
           * @static
           *
           * @example
           *
           *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key);
           *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv });
           *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv, format: CryptoJS.format.OpenSSL });
           */
          encrypt: function(D, A, S, k) {
            k = this.cfg.extend(k);
            var j = D.createEncryptor(S, k), P = j.finalize(A), H = j.cfg;
            return _.create({
              ciphertext: P,
              key: S,
              iv: H.iv,
              algorithm: D,
              mode: H.mode,
              padding: H.padding,
              blockSize: D.blockSize,
              formatter: k.format
            });
          },
          /**
           * Decrypts serialized ciphertext.
           *
           * @param {Cipher} cipher The cipher algorithm to use.
           * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
           * @param {WordArray} key The key.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @return {WordArray} The plaintext.
           *
           * @static
           *
           * @example
           *
           *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, key, { iv: iv, format: CryptoJS.format.OpenSSL });
           *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, key, { iv: iv, format: CryptoJS.format.OpenSSL });
           */
          decrypt: function(D, A, S, k) {
            k = this.cfg.extend(k), A = this._parse(A, k.format);
            var j = D.createDecryptor(S, k).finalize(A.ciphertext);
            return j;
          },
          /**
           * Converts serialized ciphertext to CipherParams,
           * else assumed CipherParams already and returns ciphertext unchanged.
           *
           * @param {CipherParams|string} ciphertext The ciphertext.
           * @param {Formatter} format The formatting strategy to use to parse serialized ciphertext.
           *
           * @return {CipherParams} The unserialized ciphertext.
           *
           * @static
           *
           * @example
           *
           *     var ciphertextParams = CryptoJS.lib.SerializableCipher._parse(ciphertextStringOrParams, format);
           */
          _parse: function(D, A) {
            return typeof D == "string" ? A.parse(D, this) : D;
          }
        }), E = i.kdf = {}, $ = E.OpenSSL = {
          /**
           * Derives a key and IV from a password.
           *
           * @param {string} password The password to derive from.
           * @param {number} keySize The size in words of the key to generate.
           * @param {number} ivSize The size in words of the IV to generate.
           * @param {WordArray|string} salt (Optional) A 64-bit salt to use. If omitted, a salt will be generated randomly.
           *
           * @return {CipherParams} A cipher params object with the key, IV, and salt.
           *
           * @static
           *
           * @example
           *
           *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32);
           *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32, 'saltsalt');
           */
          execute: function(D, A, S, k, j) {
            if (k || (k = o.random(64 / 8)), j)
              var P = d.create({ keySize: A + S, hasher: j }).compute(D, k);
            else
              var P = d.create({ keySize: A + S }).compute(D, k);
            var H = o.create(P.words.slice(A), S * 4);
            return P.sigBytes = A * 4, _.create({ key: P, iv: H, salt: k });
          }
        }, C = a.PasswordBasedCipher = w.extend({
          /**
           * Configuration options.
           *
           * @property {KDF} kdf The key derivation function to use to generate a key and IV from a password. Default: OpenSSL
           */
          cfg: w.cfg.extend({
            kdf: $
          }),
          /**
           * Encrypts a message using a password.
           *
           * @param {Cipher} cipher The cipher algorithm to use.
           * @param {WordArray|string} message The message to encrypt.
           * @param {string} password The password.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @return {CipherParams} A cipher params object.
           *
           * @static
           *
           * @example
           *
           *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password');
           *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password', { format: CryptoJS.format.OpenSSL });
           */
          encrypt: function(D, A, S, k) {
            k = this.cfg.extend(k);
            var j = k.kdf.execute(S, D.keySize, D.ivSize, k.salt, k.hasher);
            k.iv = j.iv;
            var P = w.encrypt.call(this, D, A, j.key, k);
            return P.mixIn(j), P;
          },
          /**
           * Decrypts serialized ciphertext using a password.
           *
           * @param {Cipher} cipher The cipher algorithm to use.
           * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
           * @param {string} password The password.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @return {WordArray} The plaintext.
           *
           * @static
           *
           * @example
           *
           *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, 'password', { format: CryptoJS.format.OpenSSL });
           *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, 'password', { format: CryptoJS.format.OpenSSL });
           */
          decrypt: function(D, A, S, k) {
            k = this.cfg.extend(k), A = this._parse(A, k.format);
            var j = k.kdf.execute(S, D.keySize, D.ivSize, A.salt, k.hasher);
            k.iv = j.iv;
            var P = w.decrypt.call(this, D, A, j.key, k);
            return P;
          }
        });
      }();
    });
  }(nu)), nu.exports;
}
var iu = { exports: {} }, Ig;
function sY() {
  return Ig || (Ig = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(ye(), lt());
    })(le, function(r) {
      return r.mode.CFB = function() {
        var n = r.lib.BlockCipherMode.extend();
        n.Encryptor = n.extend({
          processBlock: function(a, s) {
            var o = this._cipher, l = o.blockSize;
            i.call(this, a, s, l, o), this._prevBlock = a.slice(s, s + l);
          }
        }), n.Decryptor = n.extend({
          processBlock: function(a, s) {
            var o = this._cipher, l = o.blockSize, c = a.slice(s, s + l);
            i.call(this, a, s, l, o), this._prevBlock = c;
          }
        });
        function i(a, s, o, l) {
          var c, u = this._iv;
          u ? (c = u.slice(0), this._iv = void 0) : c = this._prevBlock, l.encryptBlock(c, 0);
          for (var f = 0; f < o; f++)
            a[s + f] ^= c[f];
        }
        return n;
      }(), r.mode.CFB;
    });
  }(iu)), iu.exports;
}
var au = { exports: {} }, Rg;
function oY() {
  return Rg || (Rg = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(ye(), lt());
    })(le, function(r) {
      return r.mode.CTR = function() {
        var n = r.lib.BlockCipherMode.extend(), i = n.Encryptor = n.extend({
          processBlock: function(a, s) {
            var o = this._cipher, l = o.blockSize, c = this._iv, u = this._counter;
            c && (u = this._counter = c.slice(0), this._iv = void 0);
            var f = u.slice(0);
            o.encryptBlock(f, 0), u[l - 1] = u[l - 1] + 1 | 0;
            for (var d = 0; d < l; d++)
              a[s + d] ^= f[d];
          }
        });
        return n.Decryptor = i, n;
      }(), r.mode.CTR;
    });
  }(au)), au.exports;
}
var su = { exports: {} }, Ng;
function lY() {
  return Ng || (Ng = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(ye(), lt());
    })(le, function(r) {
      /** @preserve
       * Counter block mode compatible with  Dr Brian Gladman fileenc.c
       * derived from CryptoJS.mode.CTR
       * Jan Hruby jhruby.web@gmail.com
       */
      return r.mode.CTRGladman = function() {
        var n = r.lib.BlockCipherMode.extend();
        function i(o) {
          if ((o >> 24 & 255) === 255) {
            var l = o >> 16 & 255, c = o >> 8 & 255, u = o & 255;
            l === 255 ? (l = 0, c === 255 ? (c = 0, u === 255 ? u = 0 : ++u) : ++c) : ++l, o = 0, o += l << 16, o += c << 8, o += u;
          } else
            o += 1 << 24;
          return o;
        }
        function a(o) {
          return (o[0] = i(o[0])) === 0 && (o[1] = i(o[1])), o;
        }
        var s = n.Encryptor = n.extend({
          processBlock: function(o, l) {
            var c = this._cipher, u = c.blockSize, f = this._iv, d = this._counter;
            f && (d = this._counter = f.slice(0), this._iv = void 0), a(d);
            var h = d.slice(0);
            c.encryptBlock(h, 0);
            for (var p = 0; p < u; p++)
              o[l + p] ^= h[p];
          }
        });
        return n.Decryptor = s, n;
      }(), r.mode.CTRGladman;
    });
  }(su)), su.exports;
}
var ou = { exports: {} }, Lg;
function cY() {
  return Lg || (Lg = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(ye(), lt());
    })(le, function(r) {
      return r.mode.OFB = function() {
        var n = r.lib.BlockCipherMode.extend(), i = n.Encryptor = n.extend({
          processBlock: function(a, s) {
            var o = this._cipher, l = o.blockSize, c = this._iv, u = this._keystream;
            c && (u = this._keystream = c.slice(0), this._iv = void 0), o.encryptBlock(u, 0);
            for (var f = 0; f < l; f++)
              a[s + f] ^= u[f];
          }
        });
        return n.Decryptor = i, n;
      }(), r.mode.OFB;
    });
  }(ou)), ou.exports;
}
var lu = { exports: {} }, jg;
function uY() {
  return jg || (jg = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(ye(), lt());
    })(le, function(r) {
      return r.mode.ECB = function() {
        var n = r.lib.BlockCipherMode.extend();
        return n.Encryptor = n.extend({
          processBlock: function(i, a) {
            this._cipher.encryptBlock(i, a);
          }
        }), n.Decryptor = n.extend({
          processBlock: function(i, a) {
            this._cipher.decryptBlock(i, a);
          }
        }), n;
      }(), r.mode.ECB;
    });
  }(lu)), lu.exports;
}
var cu = { exports: {} }, zg;
function fY() {
  return zg || (zg = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(ye(), lt());
    })(le, function(r) {
      return r.pad.AnsiX923 = {
        pad: function(n, i) {
          var a = n.sigBytes, s = i * 4, o = s - a % s, l = a + o - 1;
          n.clamp(), n.words[l >>> 2] |= o << 24 - l % 4 * 8, n.sigBytes += o;
        },
        unpad: function(n) {
          var i = n.words[n.sigBytes - 1 >>> 2] & 255;
          n.sigBytes -= i;
        }
      }, r.pad.Ansix923;
    });
  }(cu)), cu.exports;
}
var uu = { exports: {} }, Hg;
function dY() {
  return Hg || (Hg = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(ye(), lt());
    })(le, function(r) {
      return r.pad.Iso10126 = {
        pad: function(n, i) {
          var a = i * 4, s = a - n.sigBytes % a;
          n.concat(r.lib.WordArray.random(s - 1)).concat(r.lib.WordArray.create([s << 24], 1));
        },
        unpad: function(n) {
          var i = n.words[n.sigBytes - 1 >>> 2] & 255;
          n.sigBytes -= i;
        }
      }, r.pad.Iso10126;
    });
  }(uu)), uu.exports;
}
var fu = { exports: {} }, Vg;
function hY() {
  return Vg || (Vg = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(ye(), lt());
    })(le, function(r) {
      return r.pad.Iso97971 = {
        pad: function(n, i) {
          n.concat(r.lib.WordArray.create([2147483648], 1)), r.pad.ZeroPadding.pad(n, i);
        },
        unpad: function(n) {
          r.pad.ZeroPadding.unpad(n), n.sigBytes--;
        }
      }, r.pad.Iso97971;
    });
  }(fu)), fu.exports;
}
var du = { exports: {} }, Yg;
function pY() {
  return Yg || (Yg = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(ye(), lt());
    })(le, function(r) {
      return r.pad.ZeroPadding = {
        pad: function(n, i) {
          var a = i * 4;
          n.clamp(), n.sigBytes += a - (n.sigBytes % a || a);
        },
        unpad: function(n) {
          for (var i = n.words, a = n.sigBytes - 1, a = n.sigBytes - 1; a >= 0; a--)
            if (i[a >>> 2] >>> 24 - a % 4 * 8 & 255) {
              n.sigBytes = a + 1;
              break;
            }
        }
      }, r.pad.ZeroPadding;
    });
  }(du)), du.exports;
}
var hu = { exports: {} }, Wg;
function vY() {
  return Wg || (Wg = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(ye(), lt());
    })(le, function(r) {
      return r.pad.NoPadding = {
        pad: function() {
        },
        unpad: function() {
        }
      }, r.pad.NoPadding;
    });
  }(hu)), hu.exports;
}
var pu = { exports: {} }, Ug;
function gY() {
  return Ug || (Ug = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(ye(), lt());
    })(le, function(r) {
      return function(n) {
        var i = r, a = i.lib, s = a.CipherParams, o = i.enc, l = o.Hex, c = i.format;
        c.Hex = {
          /**
           * Converts the ciphertext of a cipher params object to a hexadecimally encoded string.
           *
           * @param {CipherParams} cipherParams The cipher params object.
           *
           * @return {string} The hexadecimally encoded string.
           *
           * @static
           *
           * @example
           *
           *     var hexString = CryptoJS.format.Hex.stringify(cipherParams);
           */
          stringify: function(u) {
            return u.ciphertext.toString(l);
          },
          /**
           * Converts a hexadecimally encoded ciphertext string to a cipher params object.
           *
           * @param {string} input The hexadecimally encoded string.
           *
           * @return {CipherParams} The cipher params object.
           *
           * @static
           *
           * @example
           *
           *     var cipherParams = CryptoJS.format.Hex.parse(hexString);
           */
          parse: function(u) {
            var f = l.parse(u);
            return s.create({ ciphertext: f });
          }
        };
      }(), r.format.Hex;
    });
  }(pu)), pu.exports;
}
var vu = { exports: {} }, qg;
function mY() {
  return qg || (qg = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(ye(), Xn(), Jn(), xn(), lt());
    })(le, function(r) {
      return function() {
        var n = r, i = n.lib, a = i.BlockCipher, s = n.algo, o = [], l = [], c = [], u = [], f = [], d = [], h = [], p = [], v = [], g = [];
        (function() {
          for (var _ = [], x = 0; x < 256; x++)
            x < 128 ? _[x] = x << 1 : _[x] = x << 1 ^ 283;
          for (var b = 0, w = 0, x = 0; x < 256; x++) {
            var E = w ^ w << 1 ^ w << 2 ^ w << 3 ^ w << 4;
            E = E >>> 8 ^ E & 255 ^ 99, o[b] = E, l[E] = b;
            var $ = _[b], C = _[$], D = _[C], A = _[E] * 257 ^ E * 16843008;
            c[b] = A << 24 | A >>> 8, u[b] = A << 16 | A >>> 16, f[b] = A << 8 | A >>> 24, d[b] = A;
            var A = D * 16843009 ^ C * 65537 ^ $ * 257 ^ b * 16843008;
            h[E] = A << 24 | A >>> 8, p[E] = A << 16 | A >>> 16, v[E] = A << 8 | A >>> 24, g[E] = A, b ? (b = $ ^ _[_[_[D ^ $]]], w ^= _[_[w]]) : b = w = 1;
          }
        })();
        var m = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54], y = s.AES = a.extend({
          _doReset: function() {
            var _;
            if (!(this._nRounds && this._keyPriorReset === this._key)) {
              for (var x = this._keyPriorReset = this._key, b = x.words, w = x.sigBytes / 4, E = this._nRounds = w + 6, $ = (E + 1) * 4, C = this._keySchedule = [], D = 0; D < $; D++)
                D < w ? C[D] = b[D] : (_ = C[D - 1], D % w ? w > 6 && D % w == 4 && (_ = o[_ >>> 24] << 24 | o[_ >>> 16 & 255] << 16 | o[_ >>> 8 & 255] << 8 | o[_ & 255]) : (_ = _ << 8 | _ >>> 24, _ = o[_ >>> 24] << 24 | o[_ >>> 16 & 255] << 16 | o[_ >>> 8 & 255] << 8 | o[_ & 255], _ ^= m[D / w | 0] << 24), C[D] = C[D - w] ^ _);
              for (var A = this._invKeySchedule = [], S = 0; S < $; S++) {
                var D = $ - S;
                if (S % 4)
                  var _ = C[D];
                else
                  var _ = C[D - 4];
                S < 4 || D <= 4 ? A[S] = _ : A[S] = h[o[_ >>> 24]] ^ p[o[_ >>> 16 & 255]] ^ v[o[_ >>> 8 & 255]] ^ g[o[_ & 255]];
              }
            }
          },
          encryptBlock: function(_, x) {
            this._doCryptBlock(_, x, this._keySchedule, c, u, f, d, o);
          },
          decryptBlock: function(_, x) {
            var b = _[x + 1];
            _[x + 1] = _[x + 3], _[x + 3] = b, this._doCryptBlock(_, x, this._invKeySchedule, h, p, v, g, l);
            var b = _[x + 1];
            _[x + 1] = _[x + 3], _[x + 3] = b;
          },
          _doCryptBlock: function(_, x, b, w, E, $, C, D) {
            for (var A = this._nRounds, S = _[x] ^ b[0], k = _[x + 1] ^ b[1], j = _[x + 2] ^ b[2], P = _[x + 3] ^ b[3], H = 4, K = 1; K < A; K++) {
              var X = w[S >>> 24] ^ E[k >>> 16 & 255] ^ $[j >>> 8 & 255] ^ C[P & 255] ^ b[H++], Z = w[k >>> 24] ^ E[j >>> 16 & 255] ^ $[P >>> 8 & 255] ^ C[S & 255] ^ b[H++], B = w[j >>> 24] ^ E[P >>> 16 & 255] ^ $[S >>> 8 & 255] ^ C[k & 255] ^ b[H++], T = w[P >>> 24] ^ E[S >>> 16 & 255] ^ $[k >>> 8 & 255] ^ C[j & 255] ^ b[H++];
              S = X, k = Z, j = B, P = T;
            }
            var X = (D[S >>> 24] << 24 | D[k >>> 16 & 255] << 16 | D[j >>> 8 & 255] << 8 | D[P & 255]) ^ b[H++], Z = (D[k >>> 24] << 24 | D[j >>> 16 & 255] << 16 | D[P >>> 8 & 255] << 8 | D[S & 255]) ^ b[H++], B = (D[j >>> 24] << 24 | D[P >>> 16 & 255] << 16 | D[S >>> 8 & 255] << 8 | D[k & 255]) ^ b[H++], T = (D[P >>> 24] << 24 | D[S >>> 16 & 255] << 16 | D[k >>> 8 & 255] << 8 | D[j & 255]) ^ b[H++];
            _[x] = X, _[x + 1] = Z, _[x + 2] = B, _[x + 3] = T;
          },
          keySize: 256 / 32
        });
        n.AES = a._createHelper(y);
      }(), r.AES;
    });
  }(vu)), vu.exports;
}
var gu = { exports: {} }, Gg;
function xY() {
  return Gg || (Gg = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(ye(), Xn(), Jn(), xn(), lt());
    })(le, function(r) {
      return function() {
        var n = r, i = n.lib, a = i.WordArray, s = i.BlockCipher, o = n.algo, l = [
          57,
          49,
          41,
          33,
          25,
          17,
          9,
          1,
          58,
          50,
          42,
          34,
          26,
          18,
          10,
          2,
          59,
          51,
          43,
          35,
          27,
          19,
          11,
          3,
          60,
          52,
          44,
          36,
          63,
          55,
          47,
          39,
          31,
          23,
          15,
          7,
          62,
          54,
          46,
          38,
          30,
          22,
          14,
          6,
          61,
          53,
          45,
          37,
          29,
          21,
          13,
          5,
          28,
          20,
          12,
          4
        ], c = [
          14,
          17,
          11,
          24,
          1,
          5,
          3,
          28,
          15,
          6,
          21,
          10,
          23,
          19,
          12,
          4,
          26,
          8,
          16,
          7,
          27,
          20,
          13,
          2,
          41,
          52,
          31,
          37,
          47,
          55,
          30,
          40,
          51,
          45,
          33,
          48,
          44,
          49,
          39,
          56,
          34,
          53,
          46,
          42,
          50,
          36,
          29,
          32
        ], u = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28], f = [
          {
            0: 8421888,
            268435456: 32768,
            536870912: 8421378,
            805306368: 2,
            1073741824: 512,
            1342177280: 8421890,
            1610612736: 8389122,
            1879048192: 8388608,
            2147483648: 514,
            2415919104: 8389120,
            2684354560: 33280,
            2952790016: 8421376,
            3221225472: 32770,
            3489660928: 8388610,
            3758096384: 0,
            4026531840: 33282,
            134217728: 0,
            402653184: 8421890,
            671088640: 33282,
            939524096: 32768,
            1207959552: 8421888,
            1476395008: 512,
            1744830464: 8421378,
            2013265920: 2,
            2281701376: 8389120,
            2550136832: 33280,
            2818572288: 8421376,
            3087007744: 8389122,
            3355443200: 8388610,
            3623878656: 32770,
            3892314112: 514,
            4160749568: 8388608,
            1: 32768,
            268435457: 2,
            536870913: 8421888,
            805306369: 8388608,
            1073741825: 8421378,
            1342177281: 33280,
            1610612737: 512,
            1879048193: 8389122,
            2147483649: 8421890,
            2415919105: 8421376,
            2684354561: 8388610,
            2952790017: 33282,
            3221225473: 514,
            3489660929: 8389120,
            3758096385: 32770,
            4026531841: 0,
            134217729: 8421890,
            402653185: 8421376,
            671088641: 8388608,
            939524097: 512,
            1207959553: 32768,
            1476395009: 8388610,
            1744830465: 2,
            2013265921: 33282,
            2281701377: 32770,
            2550136833: 8389122,
            2818572289: 514,
            3087007745: 8421888,
            3355443201: 8389120,
            3623878657: 0,
            3892314113: 33280,
            4160749569: 8421378
          },
          {
            0: 1074282512,
            16777216: 16384,
            33554432: 524288,
            50331648: 1074266128,
            67108864: 1073741840,
            83886080: 1074282496,
            100663296: 1073758208,
            117440512: 16,
            134217728: 540672,
            150994944: 1073758224,
            167772160: 1073741824,
            184549376: 540688,
            201326592: 524304,
            218103808: 0,
            234881024: 16400,
            251658240: 1074266112,
            8388608: 1073758208,
            25165824: 540688,
            41943040: 16,
            58720256: 1073758224,
            75497472: 1074282512,
            92274688: 1073741824,
            109051904: 524288,
            125829120: 1074266128,
            142606336: 524304,
            159383552: 0,
            176160768: 16384,
            192937984: 1074266112,
            209715200: 1073741840,
            226492416: 540672,
            243269632: 1074282496,
            260046848: 16400,
            268435456: 0,
            285212672: 1074266128,
            301989888: 1073758224,
            318767104: 1074282496,
            335544320: 1074266112,
            352321536: 16,
            369098752: 540688,
            385875968: 16384,
            402653184: 16400,
            419430400: 524288,
            436207616: 524304,
            452984832: 1073741840,
            469762048: 540672,
            486539264: 1073758208,
            503316480: 1073741824,
            520093696: 1074282512,
            276824064: 540688,
            293601280: 524288,
            310378496: 1074266112,
            327155712: 16384,
            343932928: 1073758208,
            360710144: 1074282512,
            377487360: 16,
            394264576: 1073741824,
            411041792: 1074282496,
            427819008: 1073741840,
            444596224: 1073758224,
            461373440: 524304,
            478150656: 0,
            494927872: 16400,
            511705088: 1074266128,
            528482304: 540672
          },
          {
            0: 260,
            1048576: 0,
            2097152: 67109120,
            3145728: 65796,
            4194304: 65540,
            5242880: 67108868,
            6291456: 67174660,
            7340032: 67174400,
            8388608: 67108864,
            9437184: 67174656,
            10485760: 65792,
            11534336: 67174404,
            12582912: 67109124,
            13631488: 65536,
            14680064: 4,
            15728640: 256,
            524288: 67174656,
            1572864: 67174404,
            2621440: 0,
            3670016: 67109120,
            4718592: 67108868,
            5767168: 65536,
            6815744: 65540,
            7864320: 260,
            8912896: 4,
            9961472: 256,
            11010048: 67174400,
            12058624: 65796,
            13107200: 65792,
            14155776: 67109124,
            15204352: 67174660,
            16252928: 67108864,
            16777216: 67174656,
            17825792: 65540,
            18874368: 65536,
            19922944: 67109120,
            20971520: 256,
            22020096: 67174660,
            23068672: 67108868,
            24117248: 0,
            25165824: 67109124,
            26214400: 67108864,
            27262976: 4,
            28311552: 65792,
            29360128: 67174400,
            30408704: 260,
            31457280: 65796,
            32505856: 67174404,
            17301504: 67108864,
            18350080: 260,
            19398656: 67174656,
            20447232: 0,
            21495808: 65540,
            22544384: 67109120,
            23592960: 256,
            24641536: 67174404,
            25690112: 65536,
            26738688: 67174660,
            27787264: 65796,
            28835840: 67108868,
            29884416: 67109124,
            30932992: 67174400,
            31981568: 4,
            33030144: 65792
          },
          {
            0: 2151682048,
            65536: 2147487808,
            131072: 4198464,
            196608: 2151677952,
            262144: 0,
            327680: 4198400,
            393216: 2147483712,
            458752: 4194368,
            524288: 2147483648,
            589824: 4194304,
            655360: 64,
            720896: 2147487744,
            786432: 2151678016,
            851968: 4160,
            917504: 4096,
            983040: 2151682112,
            32768: 2147487808,
            98304: 64,
            163840: 2151678016,
            229376: 2147487744,
            294912: 4198400,
            360448: 2151682112,
            425984: 0,
            491520: 2151677952,
            557056: 4096,
            622592: 2151682048,
            688128: 4194304,
            753664: 4160,
            819200: 2147483648,
            884736: 4194368,
            950272: 4198464,
            1015808: 2147483712,
            1048576: 4194368,
            1114112: 4198400,
            1179648: 2147483712,
            1245184: 0,
            1310720: 4160,
            1376256: 2151678016,
            1441792: 2151682048,
            1507328: 2147487808,
            1572864: 2151682112,
            1638400: 2147483648,
            1703936: 2151677952,
            1769472: 4198464,
            1835008: 2147487744,
            1900544: 4194304,
            1966080: 64,
            2031616: 4096,
            1081344: 2151677952,
            1146880: 2151682112,
            1212416: 0,
            1277952: 4198400,
            1343488: 4194368,
            1409024: 2147483648,
            1474560: 2147487808,
            1540096: 64,
            1605632: 2147483712,
            1671168: 4096,
            1736704: 2147487744,
            1802240: 2151678016,
            1867776: 4160,
            1933312: 2151682048,
            1998848: 4194304,
            2064384: 4198464
          },
          {
            0: 128,
            4096: 17039360,
            8192: 262144,
            12288: 536870912,
            16384: 537133184,
            20480: 16777344,
            24576: 553648256,
            28672: 262272,
            32768: 16777216,
            36864: 537133056,
            40960: 536871040,
            45056: 553910400,
            49152: 553910272,
            53248: 0,
            57344: 17039488,
            61440: 553648128,
            2048: 17039488,
            6144: 553648256,
            10240: 128,
            14336: 17039360,
            18432: 262144,
            22528: 537133184,
            26624: 553910272,
            30720: 536870912,
            34816: 537133056,
            38912: 0,
            43008: 553910400,
            47104: 16777344,
            51200: 536871040,
            55296: 553648128,
            59392: 16777216,
            63488: 262272,
            65536: 262144,
            69632: 128,
            73728: 536870912,
            77824: 553648256,
            81920: 16777344,
            86016: 553910272,
            90112: 537133184,
            94208: 16777216,
            98304: 553910400,
            102400: 553648128,
            106496: 17039360,
            110592: 537133056,
            114688: 262272,
            118784: 536871040,
            122880: 0,
            126976: 17039488,
            67584: 553648256,
            71680: 16777216,
            75776: 17039360,
            79872: 537133184,
            83968: 536870912,
            88064: 17039488,
            92160: 128,
            96256: 553910272,
            100352: 262272,
            104448: 553910400,
            108544: 0,
            112640: 553648128,
            116736: 16777344,
            120832: 262144,
            124928: 537133056,
            129024: 536871040
          },
          {
            0: 268435464,
            256: 8192,
            512: 270532608,
            768: 270540808,
            1024: 268443648,
            1280: 2097152,
            1536: 2097160,
            1792: 268435456,
            2048: 0,
            2304: 268443656,
            2560: 2105344,
            2816: 8,
            3072: 270532616,
            3328: 2105352,
            3584: 8200,
            3840: 270540800,
            128: 270532608,
            384: 270540808,
            640: 8,
            896: 2097152,
            1152: 2105352,
            1408: 268435464,
            1664: 268443648,
            1920: 8200,
            2176: 2097160,
            2432: 8192,
            2688: 268443656,
            2944: 270532616,
            3200: 0,
            3456: 270540800,
            3712: 2105344,
            3968: 268435456,
            4096: 268443648,
            4352: 270532616,
            4608: 270540808,
            4864: 8200,
            5120: 2097152,
            5376: 268435456,
            5632: 268435464,
            5888: 2105344,
            6144: 2105352,
            6400: 0,
            6656: 8,
            6912: 270532608,
            7168: 8192,
            7424: 268443656,
            7680: 270540800,
            7936: 2097160,
            4224: 8,
            4480: 2105344,
            4736: 2097152,
            4992: 268435464,
            5248: 268443648,
            5504: 8200,
            5760: 270540808,
            6016: 270532608,
            6272: 270540800,
            6528: 270532616,
            6784: 8192,
            7040: 2105352,
            7296: 2097160,
            7552: 0,
            7808: 268435456,
            8064: 268443656
          },
          {
            0: 1048576,
            16: 33555457,
            32: 1024,
            48: 1049601,
            64: 34604033,
            80: 0,
            96: 1,
            112: 34603009,
            128: 33555456,
            144: 1048577,
            160: 33554433,
            176: 34604032,
            192: 34603008,
            208: 1025,
            224: 1049600,
            240: 33554432,
            8: 34603009,
            24: 0,
            40: 33555457,
            56: 34604032,
            72: 1048576,
            88: 33554433,
            104: 33554432,
            120: 1025,
            136: 1049601,
            152: 33555456,
            168: 34603008,
            184: 1048577,
            200: 1024,
            216: 34604033,
            232: 1,
            248: 1049600,
            256: 33554432,
            272: 1048576,
            288: 33555457,
            304: 34603009,
            320: 1048577,
            336: 33555456,
            352: 34604032,
            368: 1049601,
            384: 1025,
            400: 34604033,
            416: 1049600,
            432: 1,
            448: 0,
            464: 34603008,
            480: 33554433,
            496: 1024,
            264: 1049600,
            280: 33555457,
            296: 34603009,
            312: 1,
            328: 33554432,
            344: 1048576,
            360: 1025,
            376: 34604032,
            392: 33554433,
            408: 34603008,
            424: 0,
            440: 34604033,
            456: 1049601,
            472: 1024,
            488: 33555456,
            504: 1048577
          },
          {
            0: 134219808,
            1: 131072,
            2: 134217728,
            3: 32,
            4: 131104,
            5: 134350880,
            6: 134350848,
            7: 2048,
            8: 134348800,
            9: 134219776,
            10: 133120,
            11: 134348832,
            12: 2080,
            13: 0,
            14: 134217760,
            15: 133152,
            2147483648: 2048,
            2147483649: 134350880,
            2147483650: 134219808,
            2147483651: 134217728,
            2147483652: 134348800,
            2147483653: 133120,
            2147483654: 133152,
            2147483655: 32,
            2147483656: 134217760,
            2147483657: 2080,
            2147483658: 131104,
            2147483659: 134350848,
            2147483660: 0,
            2147483661: 134348832,
            2147483662: 134219776,
            2147483663: 131072,
            16: 133152,
            17: 134350848,
            18: 32,
            19: 2048,
            20: 134219776,
            21: 134217760,
            22: 134348832,
            23: 131072,
            24: 0,
            25: 131104,
            26: 134348800,
            27: 134219808,
            28: 134350880,
            29: 133120,
            30: 2080,
            31: 134217728,
            2147483664: 131072,
            2147483665: 2048,
            2147483666: 134348832,
            2147483667: 133152,
            2147483668: 32,
            2147483669: 134348800,
            2147483670: 134217728,
            2147483671: 134219808,
            2147483672: 134350880,
            2147483673: 134217760,
            2147483674: 134219776,
            2147483675: 0,
            2147483676: 133120,
            2147483677: 2080,
            2147483678: 131104,
            2147483679: 134350848
          }
        ], d = [
          4160749569,
          528482304,
          33030144,
          2064384,
          129024,
          8064,
          504,
          2147483679
        ], h = o.DES = s.extend({
          _doReset: function() {
            for (var m = this._key, y = m.words, _ = [], x = 0; x < 56; x++) {
              var b = l[x] - 1;
              _[x] = y[b >>> 5] >>> 31 - b % 32 & 1;
            }
            for (var w = this._subKeys = [], E = 0; E < 16; E++) {
              for (var $ = w[E] = [], C = u[E], x = 0; x < 24; x++)
                $[x / 6 | 0] |= _[(c[x] - 1 + C) % 28] << 31 - x % 6, $[4 + (x / 6 | 0)] |= _[28 + (c[x + 24] - 1 + C) % 28] << 31 - x % 6;
              $[0] = $[0] << 1 | $[0] >>> 31;
              for (var x = 1; x < 7; x++)
                $[x] = $[x] >>> (x - 1) * 4 + 3;
              $[7] = $[7] << 5 | $[7] >>> 27;
            }
            for (var D = this._invSubKeys = [], x = 0; x < 16; x++)
              D[x] = w[15 - x];
          },
          encryptBlock: function(m, y) {
            this._doCryptBlock(m, y, this._subKeys);
          },
          decryptBlock: function(m, y) {
            this._doCryptBlock(m, y, this._invSubKeys);
          },
          _doCryptBlock: function(m, y, _) {
            this._lBlock = m[y], this._rBlock = m[y + 1], p.call(this, 4, 252645135), p.call(this, 16, 65535), v.call(this, 2, 858993459), v.call(this, 8, 16711935), p.call(this, 1, 1431655765);
            for (var x = 0; x < 16; x++) {
              for (var b = _[x], w = this._lBlock, E = this._rBlock, $ = 0, C = 0; C < 8; C++)
                $ |= f[C][((E ^ b[C]) & d[C]) >>> 0];
              this._lBlock = E, this._rBlock = w ^ $;
            }
            var D = this._lBlock;
            this._lBlock = this._rBlock, this._rBlock = D, p.call(this, 1, 1431655765), v.call(this, 8, 16711935), v.call(this, 2, 858993459), p.call(this, 16, 65535), p.call(this, 4, 252645135), m[y] = this._lBlock, m[y + 1] = this._rBlock;
          },
          keySize: 64 / 32,
          ivSize: 64 / 32,
          blockSize: 64 / 32
        });
        function p(m, y) {
          var _ = (this._lBlock >>> m ^ this._rBlock) & y;
          this._rBlock ^= _, this._lBlock ^= _ << m;
        }
        function v(m, y) {
          var _ = (this._rBlock >>> m ^ this._lBlock) & y;
          this._lBlock ^= _, this._rBlock ^= _ << m;
        }
        n.DES = s._createHelper(h);
        var g = o.TripleDES = s.extend({
          _doReset: function() {
            var m = this._key, y = m.words;
            if (y.length !== 2 && y.length !== 4 && y.length < 6)
              throw new Error("Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.");
            var _ = y.slice(0, 2), x = y.length < 4 ? y.slice(0, 2) : y.slice(2, 4), b = y.length < 6 ? y.slice(0, 2) : y.slice(4, 6);
            this._des1 = h.createEncryptor(a.create(_)), this._des2 = h.createEncryptor(a.create(x)), this._des3 = h.createEncryptor(a.create(b));
          },
          encryptBlock: function(m, y) {
            this._des1.encryptBlock(m, y), this._des2.decryptBlock(m, y), this._des3.encryptBlock(m, y);
          },
          decryptBlock: function(m, y) {
            this._des3.decryptBlock(m, y), this._des2.encryptBlock(m, y), this._des1.decryptBlock(m, y);
          },
          keySize: 192 / 32,
          ivSize: 64 / 32,
          blockSize: 64 / 32
        });
        n.TripleDES = s._createHelper(g);
      }(), r.TripleDES;
    });
  }(gu)), gu.exports;
}
var mu = { exports: {} }, Kg;
function yY() {
  return Kg || (Kg = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(ye(), Xn(), Jn(), xn(), lt());
    })(le, function(r) {
      return function() {
        var n = r, i = n.lib, a = i.StreamCipher, s = n.algo, o = s.RC4 = a.extend({
          _doReset: function() {
            for (var u = this._key, f = u.words, d = u.sigBytes, h = this._S = [], p = 0; p < 256; p++)
              h[p] = p;
            for (var p = 0, v = 0; p < 256; p++) {
              var g = p % d, m = f[g >>> 2] >>> 24 - g % 4 * 8 & 255;
              v = (v + h[p] + m) % 256;
              var y = h[p];
              h[p] = h[v], h[v] = y;
            }
            this._i = this._j = 0;
          },
          _doProcessBlock: function(u, f) {
            u[f] ^= l.call(this);
          },
          keySize: 256 / 32,
          ivSize: 0
        });
        function l() {
          for (var u = this._S, f = this._i, d = this._j, h = 0, p = 0; p < 4; p++) {
            f = (f + 1) % 256, d = (d + u[f]) % 256;
            var v = u[f];
            u[f] = u[d], u[d] = v, h |= u[(u[f] + u[d]) % 256] << 24 - p * 8;
          }
          return this._i = f, this._j = d, h;
        }
        n.RC4 = a._createHelper(o);
        var c = s.RC4Drop = o.extend({
          /**
           * Configuration options.
           *
           * @property {number} drop The number of keystream words to drop. Default 192
           */
          cfg: o.cfg.extend({
            drop: 192
          }),
          _doReset: function() {
            o._doReset.call(this);
            for (var u = this.cfg.drop; u > 0; u--)
              l.call(this);
          }
        });
        n.RC4Drop = a._createHelper(c);
      }(), r.RC4;
    });
  }(mu)), mu.exports;
}
var xu = { exports: {} }, Zg;
function bY() {
  return Zg || (Zg = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(ye(), Xn(), Jn(), xn(), lt());
    })(le, function(r) {
      return function() {
        var n = r, i = n.lib, a = i.StreamCipher, s = n.algo, o = [], l = [], c = [], u = s.Rabbit = a.extend({
          _doReset: function() {
            for (var d = this._key.words, h = this.cfg.iv, p = 0; p < 4; p++)
              d[p] = (d[p] << 8 | d[p] >>> 24) & 16711935 | (d[p] << 24 | d[p] >>> 8) & 4278255360;
            var v = this._X = [
              d[0],
              d[3] << 16 | d[2] >>> 16,
              d[1],
              d[0] << 16 | d[3] >>> 16,
              d[2],
              d[1] << 16 | d[0] >>> 16,
              d[3],
              d[2] << 16 | d[1] >>> 16
            ], g = this._C = [
              d[2] << 16 | d[2] >>> 16,
              d[0] & 4294901760 | d[1] & 65535,
              d[3] << 16 | d[3] >>> 16,
              d[1] & 4294901760 | d[2] & 65535,
              d[0] << 16 | d[0] >>> 16,
              d[2] & 4294901760 | d[3] & 65535,
              d[1] << 16 | d[1] >>> 16,
              d[3] & 4294901760 | d[0] & 65535
            ];
            this._b = 0;
            for (var p = 0; p < 4; p++)
              f.call(this);
            for (var p = 0; p < 8; p++)
              g[p] ^= v[p + 4 & 7];
            if (h) {
              var m = h.words, y = m[0], _ = m[1], x = (y << 8 | y >>> 24) & 16711935 | (y << 24 | y >>> 8) & 4278255360, b = (_ << 8 | _ >>> 24) & 16711935 | (_ << 24 | _ >>> 8) & 4278255360, w = x >>> 16 | b & 4294901760, E = b << 16 | x & 65535;
              g[0] ^= x, g[1] ^= w, g[2] ^= b, g[3] ^= E, g[4] ^= x, g[5] ^= w, g[6] ^= b, g[7] ^= E;
              for (var p = 0; p < 4; p++)
                f.call(this);
            }
          },
          _doProcessBlock: function(d, h) {
            var p = this._X;
            f.call(this), o[0] = p[0] ^ p[5] >>> 16 ^ p[3] << 16, o[1] = p[2] ^ p[7] >>> 16 ^ p[5] << 16, o[2] = p[4] ^ p[1] >>> 16 ^ p[7] << 16, o[3] = p[6] ^ p[3] >>> 16 ^ p[1] << 16;
            for (var v = 0; v < 4; v++)
              o[v] = (o[v] << 8 | o[v] >>> 24) & 16711935 | (o[v] << 24 | o[v] >>> 8) & 4278255360, d[h + v] ^= o[v];
          },
          blockSize: 128 / 32,
          ivSize: 64 / 32
        });
        function f() {
          for (var d = this._X, h = this._C, p = 0; p < 8; p++)
            l[p] = h[p];
          h[0] = h[0] + 1295307597 + this._b | 0, h[1] = h[1] + 3545052371 + (h[0] >>> 0 < l[0] >>> 0 ? 1 : 0) | 0, h[2] = h[2] + 886263092 + (h[1] >>> 0 < l[1] >>> 0 ? 1 : 0) | 0, h[3] = h[3] + 1295307597 + (h[2] >>> 0 < l[2] >>> 0 ? 1 : 0) | 0, h[4] = h[4] + 3545052371 + (h[3] >>> 0 < l[3] >>> 0 ? 1 : 0) | 0, h[5] = h[5] + 886263092 + (h[4] >>> 0 < l[4] >>> 0 ? 1 : 0) | 0, h[6] = h[6] + 1295307597 + (h[5] >>> 0 < l[5] >>> 0 ? 1 : 0) | 0, h[7] = h[7] + 3545052371 + (h[6] >>> 0 < l[6] >>> 0 ? 1 : 0) | 0, this._b = h[7] >>> 0 < l[7] >>> 0 ? 1 : 0;
          for (var p = 0; p < 8; p++) {
            var v = d[p] + h[p], g = v & 65535, m = v >>> 16, y = ((g * g >>> 17) + g * m >>> 15) + m * m, _ = ((v & 4294901760) * v | 0) + ((v & 65535) * v | 0);
            c[p] = y ^ _;
          }
          d[0] = c[0] + (c[7] << 16 | c[7] >>> 16) + (c[6] << 16 | c[6] >>> 16) | 0, d[1] = c[1] + (c[0] << 8 | c[0] >>> 24) + c[7] | 0, d[2] = c[2] + (c[1] << 16 | c[1] >>> 16) + (c[0] << 16 | c[0] >>> 16) | 0, d[3] = c[3] + (c[2] << 8 | c[2] >>> 24) + c[1] | 0, d[4] = c[4] + (c[3] << 16 | c[3] >>> 16) + (c[2] << 16 | c[2] >>> 16) | 0, d[5] = c[5] + (c[4] << 8 | c[4] >>> 24) + c[3] | 0, d[6] = c[6] + (c[5] << 16 | c[5] >>> 16) + (c[4] << 16 | c[4] >>> 16) | 0, d[7] = c[7] + (c[6] << 8 | c[6] >>> 24) + c[5] | 0;
        }
        n.Rabbit = a._createHelper(u);
      }(), r.Rabbit;
    });
  }(xu)), xu.exports;
}
var yu = { exports: {} }, Xg;
function _Y() {
  return Xg || (Xg = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(ye(), Xn(), Jn(), xn(), lt());
    })(le, function(r) {
      return function() {
        var n = r, i = n.lib, a = i.StreamCipher, s = n.algo, o = [], l = [], c = [], u = s.RabbitLegacy = a.extend({
          _doReset: function() {
            var d = this._key.words, h = this.cfg.iv, p = this._X = [
              d[0],
              d[3] << 16 | d[2] >>> 16,
              d[1],
              d[0] << 16 | d[3] >>> 16,
              d[2],
              d[1] << 16 | d[0] >>> 16,
              d[3],
              d[2] << 16 | d[1] >>> 16
            ], v = this._C = [
              d[2] << 16 | d[2] >>> 16,
              d[0] & 4294901760 | d[1] & 65535,
              d[3] << 16 | d[3] >>> 16,
              d[1] & 4294901760 | d[2] & 65535,
              d[0] << 16 | d[0] >>> 16,
              d[2] & 4294901760 | d[3] & 65535,
              d[1] << 16 | d[1] >>> 16,
              d[3] & 4294901760 | d[0] & 65535
            ];
            this._b = 0;
            for (var g = 0; g < 4; g++)
              f.call(this);
            for (var g = 0; g < 8; g++)
              v[g] ^= p[g + 4 & 7];
            if (h) {
              var m = h.words, y = m[0], _ = m[1], x = (y << 8 | y >>> 24) & 16711935 | (y << 24 | y >>> 8) & 4278255360, b = (_ << 8 | _ >>> 24) & 16711935 | (_ << 24 | _ >>> 8) & 4278255360, w = x >>> 16 | b & 4294901760, E = b << 16 | x & 65535;
              v[0] ^= x, v[1] ^= w, v[2] ^= b, v[3] ^= E, v[4] ^= x, v[5] ^= w, v[6] ^= b, v[7] ^= E;
              for (var g = 0; g < 4; g++)
                f.call(this);
            }
          },
          _doProcessBlock: function(d, h) {
            var p = this._X;
            f.call(this), o[0] = p[0] ^ p[5] >>> 16 ^ p[3] << 16, o[1] = p[2] ^ p[7] >>> 16 ^ p[5] << 16, o[2] = p[4] ^ p[1] >>> 16 ^ p[7] << 16, o[3] = p[6] ^ p[3] >>> 16 ^ p[1] << 16;
            for (var v = 0; v < 4; v++)
              o[v] = (o[v] << 8 | o[v] >>> 24) & 16711935 | (o[v] << 24 | o[v] >>> 8) & 4278255360, d[h + v] ^= o[v];
          },
          blockSize: 128 / 32,
          ivSize: 64 / 32
        });
        function f() {
          for (var d = this._X, h = this._C, p = 0; p < 8; p++)
            l[p] = h[p];
          h[0] = h[0] + 1295307597 + this._b | 0, h[1] = h[1] + 3545052371 + (h[0] >>> 0 < l[0] >>> 0 ? 1 : 0) | 0, h[2] = h[2] + 886263092 + (h[1] >>> 0 < l[1] >>> 0 ? 1 : 0) | 0, h[3] = h[3] + 1295307597 + (h[2] >>> 0 < l[2] >>> 0 ? 1 : 0) | 0, h[4] = h[4] + 3545052371 + (h[3] >>> 0 < l[3] >>> 0 ? 1 : 0) | 0, h[5] = h[5] + 886263092 + (h[4] >>> 0 < l[4] >>> 0 ? 1 : 0) | 0, h[6] = h[6] + 1295307597 + (h[5] >>> 0 < l[5] >>> 0 ? 1 : 0) | 0, h[7] = h[7] + 3545052371 + (h[6] >>> 0 < l[6] >>> 0 ? 1 : 0) | 0, this._b = h[7] >>> 0 < l[7] >>> 0 ? 1 : 0;
          for (var p = 0; p < 8; p++) {
            var v = d[p] + h[p], g = v & 65535, m = v >>> 16, y = ((g * g >>> 17) + g * m >>> 15) + m * m, _ = ((v & 4294901760) * v | 0) + ((v & 65535) * v | 0);
            c[p] = y ^ _;
          }
          d[0] = c[0] + (c[7] << 16 | c[7] >>> 16) + (c[6] << 16 | c[6] >>> 16) | 0, d[1] = c[1] + (c[0] << 8 | c[0] >>> 24) + c[7] | 0, d[2] = c[2] + (c[1] << 16 | c[1] >>> 16) + (c[0] << 16 | c[0] >>> 16) | 0, d[3] = c[3] + (c[2] << 8 | c[2] >>> 24) + c[1] | 0, d[4] = c[4] + (c[3] << 16 | c[3] >>> 16) + (c[2] << 16 | c[2] >>> 16) | 0, d[5] = c[5] + (c[4] << 8 | c[4] >>> 24) + c[3] | 0, d[6] = c[6] + (c[5] << 16 | c[5] >>> 16) + (c[4] << 16 | c[4] >>> 16) | 0, d[7] = c[7] + (c[6] << 8 | c[6] >>> 24) + c[5] | 0;
        }
        n.RabbitLegacy = a._createHelper(u);
      }(), r.RabbitLegacy;
    });
  }(yu)), yu.exports;
}
var bu = { exports: {} }, Jg;
function wY() {
  return Jg || (Jg = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(ye(), Xn(), Jn(), xn(), lt());
    })(le, function(r) {
      return function() {
        var n = r, i = n.lib, a = i.BlockCipher, s = n.algo;
        const o = 16, l = [
          608135816,
          2242054355,
          320440878,
          57701188,
          2752067618,
          698298832,
          137296536,
          3964562569,
          1160258022,
          953160567,
          3193202383,
          887688300,
          3232508343,
          3380367581,
          1065670069,
          3041331479,
          2450970073,
          2306472731
        ], c = [
          [
            3509652390,
            2564797868,
            805139163,
            3491422135,
            3101798381,
            1780907670,
            3128725573,
            4046225305,
            614570311,
            3012652279,
            134345442,
            2240740374,
            1667834072,
            1901547113,
            2757295779,
            4103290238,
            227898511,
            1921955416,
            1904987480,
            2182433518,
            2069144605,
            3260701109,
            2620446009,
            720527379,
            3318853667,
            677414384,
            3393288472,
            3101374703,
            2390351024,
            1614419982,
            1822297739,
            2954791486,
            3608508353,
            3174124327,
            2024746970,
            1432378464,
            3864339955,
            2857741204,
            1464375394,
            1676153920,
            1439316330,
            715854006,
            3033291828,
            289532110,
            2706671279,
            2087905683,
            3018724369,
            1668267050,
            732546397,
            1947742710,
            3462151702,
            2609353502,
            2950085171,
            1814351708,
            2050118529,
            680887927,
            999245976,
            1800124847,
            3300911131,
            1713906067,
            1641548236,
            4213287313,
            1216130144,
            1575780402,
            4018429277,
            3917837745,
            3693486850,
            3949271944,
            596196993,
            3549867205,
            258830323,
            2213823033,
            772490370,
            2760122372,
            1774776394,
            2652871518,
            566650946,
            4142492826,
            1728879713,
            2882767088,
            1783734482,
            3629395816,
            2517608232,
            2874225571,
            1861159788,
            326777828,
            3124490320,
            2130389656,
            2716951837,
            967770486,
            1724537150,
            2185432712,
            2364442137,
            1164943284,
            2105845187,
            998989502,
            3765401048,
            2244026483,
            1075463327,
            1455516326,
            1322494562,
            910128902,
            469688178,
            1117454909,
            936433444,
            3490320968,
            3675253459,
            1240580251,
            122909385,
            2157517691,
            634681816,
            4142456567,
            3825094682,
            3061402683,
            2540495037,
            79693498,
            3249098678,
            1084186820,
            1583128258,
            426386531,
            1761308591,
            1047286709,
            322548459,
            995290223,
            1845252383,
            2603652396,
            3431023940,
            2942221577,
            3202600964,
            3727903485,
            1712269319,
            422464435,
            3234572375,
            1170764815,
            3523960633,
            3117677531,
            1434042557,
            442511882,
            3600875718,
            1076654713,
            1738483198,
            4213154764,
            2393238008,
            3677496056,
            1014306527,
            4251020053,
            793779912,
            2902807211,
            842905082,
            4246964064,
            1395751752,
            1040244610,
            2656851899,
            3396308128,
            445077038,
            3742853595,
            3577915638,
            679411651,
            2892444358,
            2354009459,
            1767581616,
            3150600392,
            3791627101,
            3102740896,
            284835224,
            4246832056,
            1258075500,
            768725851,
            2589189241,
            3069724005,
            3532540348,
            1274779536,
            3789419226,
            2764799539,
            1660621633,
            3471099624,
            4011903706,
            913787905,
            3497959166,
            737222580,
            2514213453,
            2928710040,
            3937242737,
            1804850592,
            3499020752,
            2949064160,
            2386320175,
            2390070455,
            2415321851,
            4061277028,
            2290661394,
            2416832540,
            1336762016,
            1754252060,
            3520065937,
            3014181293,
            791618072,
            3188594551,
            3933548030,
            2332172193,
            3852520463,
            3043980520,
            413987798,
            3465142937,
            3030929376,
            4245938359,
            2093235073,
            3534596313,
            375366246,
            2157278981,
            2479649556,
            555357303,
            3870105701,
            2008414854,
            3344188149,
            4221384143,
            3956125452,
            2067696032,
            3594591187,
            2921233993,
            2428461,
            544322398,
            577241275,
            1471733935,
            610547355,
            4027169054,
            1432588573,
            1507829418,
            2025931657,
            3646575487,
            545086370,
            48609733,
            2200306550,
            1653985193,
            298326376,
            1316178497,
            3007786442,
            2064951626,
            458293330,
            2589141269,
            3591329599,
            3164325604,
            727753846,
            2179363840,
            146436021,
            1461446943,
            4069977195,
            705550613,
            3059967265,
            3887724982,
            4281599278,
            3313849956,
            1404054877,
            2845806497,
            146425753,
            1854211946
          ],
          [
            1266315497,
            3048417604,
            3681880366,
            3289982499,
            290971e4,
            1235738493,
            2632868024,
            2414719590,
            3970600049,
            1771706367,
            1449415276,
            3266420449,
            422970021,
            1963543593,
            2690192192,
            3826793022,
            1062508698,
            1531092325,
            1804592342,
            2583117782,
            2714934279,
            4024971509,
            1294809318,
            4028980673,
            1289560198,
            2221992742,
            1669523910,
            35572830,
            157838143,
            1052438473,
            1016535060,
            1802137761,
            1753167236,
            1386275462,
            3080475397,
            2857371447,
            1040679964,
            2145300060,
            2390574316,
            1461121720,
            2956646967,
            4031777805,
            4028374788,
            33600511,
            2920084762,
            1018524850,
            629373528,
            3691585981,
            3515945977,
            2091462646,
            2486323059,
            586499841,
            988145025,
            935516892,
            3367335476,
            2599673255,
            2839830854,
            265290510,
            3972581182,
            2759138881,
            3795373465,
            1005194799,
            847297441,
            406762289,
            1314163512,
            1332590856,
            1866599683,
            4127851711,
            750260880,
            613907577,
            1450815602,
            3165620655,
            3734664991,
            3650291728,
            3012275730,
            3704569646,
            1427272223,
            778793252,
            1343938022,
            2676280711,
            2052605720,
            1946737175,
            3164576444,
            3914038668,
            3967478842,
            3682934266,
            1661551462,
            3294938066,
            4011595847,
            840292616,
            3712170807,
            616741398,
            312560963,
            711312465,
            1351876610,
            322626781,
            1910503582,
            271666773,
            2175563734,
            1594956187,
            70604529,
            3617834859,
            1007753275,
            1495573769,
            4069517037,
            2549218298,
            2663038764,
            504708206,
            2263041392,
            3941167025,
            2249088522,
            1514023603,
            1998579484,
            1312622330,
            694541497,
            2582060303,
            2151582166,
            1382467621,
            776784248,
            2618340202,
            3323268794,
            2497899128,
            2784771155,
            503983604,
            4076293799,
            907881277,
            423175695,
            432175456,
            1378068232,
            4145222326,
            3954048622,
            3938656102,
            3820766613,
            2793130115,
            2977904593,
            26017576,
            3274890735,
            3194772133,
            1700274565,
            1756076034,
            4006520079,
            3677328699,
            720338349,
            1533947780,
            354530856,
            688349552,
            3973924725,
            1637815568,
            332179504,
            3949051286,
            53804574,
            2852348879,
            3044236432,
            1282449977,
            3583942155,
            3416972820,
            4006381244,
            1617046695,
            2628476075,
            3002303598,
            1686838959,
            431878346,
            2686675385,
            1700445008,
            1080580658,
            1009431731,
            832498133,
            3223435511,
            2605976345,
            2271191193,
            2516031870,
            1648197032,
            4164389018,
            2548247927,
            300782431,
            375919233,
            238389289,
            3353747414,
            2531188641,
            2019080857,
            1475708069,
            455242339,
            2609103871,
            448939670,
            3451063019,
            1395535956,
            2413381860,
            1841049896,
            1491858159,
            885456874,
            4264095073,
            4001119347,
            1565136089,
            3898914787,
            1108368660,
            540939232,
            1173283510,
            2745871338,
            3681308437,
            4207628240,
            3343053890,
            4016749493,
            1699691293,
            1103962373,
            3625875870,
            2256883143,
            3830138730,
            1031889488,
            3479347698,
            1535977030,
            4236805024,
            3251091107,
            2132092099,
            1774941330,
            1199868427,
            1452454533,
            157007616,
            2904115357,
            342012276,
            595725824,
            1480756522,
            206960106,
            497939518,
            591360097,
            863170706,
            2375253569,
            3596610801,
            1814182875,
            2094937945,
            3421402208,
            1082520231,
            3463918190,
            2785509508,
            435703966,
            3908032597,
            1641649973,
            2842273706,
            3305899714,
            1510255612,
            2148256476,
            2655287854,
            3276092548,
            4258621189,
            236887753,
            3681803219,
            274041037,
            1734335097,
            3815195456,
            3317970021,
            1899903192,
            1026095262,
            4050517792,
            356393447,
            2410691914,
            3873677099,
            3682840055
          ],
          [
            3913112168,
            2491498743,
            4132185628,
            2489919796,
            1091903735,
            1979897079,
            3170134830,
            3567386728,
            3557303409,
            857797738,
            1136121015,
            1342202287,
            507115054,
            2535736646,
            337727348,
            3213592640,
            1301675037,
            2528481711,
            1895095763,
            1721773893,
            3216771564,
            62756741,
            2142006736,
            835421444,
            2531993523,
            1442658625,
            3659876326,
            2882144922,
            676362277,
            1392781812,
            170690266,
            3921047035,
            1759253602,
            3611846912,
            1745797284,
            664899054,
            1329594018,
            3901205900,
            3045908486,
            2062866102,
            2865634940,
            3543621612,
            3464012697,
            1080764994,
            553557557,
            3656615353,
            3996768171,
            991055499,
            499776247,
            1265440854,
            648242737,
            3940784050,
            980351604,
            3713745714,
            1749149687,
            3396870395,
            4211799374,
            3640570775,
            1161844396,
            3125318951,
            1431517754,
            545492359,
            4268468663,
            3499529547,
            1437099964,
            2702547544,
            3433638243,
            2581715763,
            2787789398,
            1060185593,
            1593081372,
            2418618748,
            4260947970,
            69676912,
            2159744348,
            86519011,
            2512459080,
            3838209314,
            1220612927,
            3339683548,
            133810670,
            1090789135,
            1078426020,
            1569222167,
            845107691,
            3583754449,
            4072456591,
            1091646820,
            628848692,
            1613405280,
            3757631651,
            526609435,
            236106946,
            48312990,
            2942717905,
            3402727701,
            1797494240,
            859738849,
            992217954,
            4005476642,
            2243076622,
            3870952857,
            3732016268,
            765654824,
            3490871365,
            2511836413,
            1685915746,
            3888969200,
            1414112111,
            2273134842,
            3281911079,
            4080962846,
            172450625,
            2569994100,
            980381355,
            4109958455,
            2819808352,
            2716589560,
            2568741196,
            3681446669,
            3329971472,
            1835478071,
            660984891,
            3704678404,
            4045999559,
            3422617507,
            3040415634,
            1762651403,
            1719377915,
            3470491036,
            2693910283,
            3642056355,
            3138596744,
            1364962596,
            2073328063,
            1983633131,
            926494387,
            3423689081,
            2150032023,
            4096667949,
            1749200295,
            3328846651,
            309677260,
            2016342300,
            1779581495,
            3079819751,
            111262694,
            1274766160,
            443224088,
            298511866,
            1025883608,
            3806446537,
            1145181785,
            168956806,
            3641502830,
            3584813610,
            1689216846,
            3666258015,
            3200248200,
            1692713982,
            2646376535,
            4042768518,
            1618508792,
            1610833997,
            3523052358,
            4130873264,
            2001055236,
            3610705100,
            2202168115,
            4028541809,
            2961195399,
            1006657119,
            2006996926,
            3186142756,
            1430667929,
            3210227297,
            1314452623,
            4074634658,
            4101304120,
            2273951170,
            1399257539,
            3367210612,
            3027628629,
            1190975929,
            2062231137,
            2333990788,
            2221543033,
            2438960610,
            1181637006,
            548689776,
            2362791313,
            3372408396,
            3104550113,
            3145860560,
            296247880,
            1970579870,
            3078560182,
            3769228297,
            1714227617,
            3291629107,
            3898220290,
            166772364,
            1251581989,
            493813264,
            448347421,
            195405023,
            2709975567,
            677966185,
            3703036547,
            1463355134,
            2715995803,
            1338867538,
            1343315457,
            2802222074,
            2684532164,
            233230375,
            2599980071,
            2000651841,
            3277868038,
            1638401717,
            4028070440,
            3237316320,
            6314154,
            819756386,
            300326615,
            590932579,
            1405279636,
            3267499572,
            3150704214,
            2428286686,
            3959192993,
            3461946742,
            1862657033,
            1266418056,
            963775037,
            2089974820,
            2263052895,
            1917689273,
            448879540,
            3550394620,
            3981727096,
            150775221,
            3627908307,
            1303187396,
            508620638,
            2975983352,
            2726630617,
            1817252668,
            1876281319,
            1457606340,
            908771278,
            3720792119,
            3617206836,
            2455994898,
            1729034894,
            1080033504
          ],
          [
            976866871,
            3556439503,
            2881648439,
            1522871579,
            1555064734,
            1336096578,
            3548522304,
            2579274686,
            3574697629,
            3205460757,
            3593280638,
            3338716283,
            3079412587,
            564236357,
            2993598910,
            1781952180,
            1464380207,
            3163844217,
            3332601554,
            1699332808,
            1393555694,
            1183702653,
            3581086237,
            1288719814,
            691649499,
            2847557200,
            2895455976,
            3193889540,
            2717570544,
            1781354906,
            1676643554,
            2592534050,
            3230253752,
            1126444790,
            2770207658,
            2633158820,
            2210423226,
            2615765581,
            2414155088,
            3127139286,
            673620729,
            2805611233,
            1269405062,
            4015350505,
            3341807571,
            4149409754,
            1057255273,
            2012875353,
            2162469141,
            2276492801,
            2601117357,
            993977747,
            3918593370,
            2654263191,
            753973209,
            36408145,
            2530585658,
            25011837,
            3520020182,
            2088578344,
            530523599,
            2918365339,
            1524020338,
            1518925132,
            3760827505,
            3759777254,
            1202760957,
            3985898139,
            3906192525,
            674977740,
            4174734889,
            2031300136,
            2019492241,
            3983892565,
            4153806404,
            3822280332,
            352677332,
            2297720250,
            60907813,
            90501309,
            3286998549,
            1016092578,
            2535922412,
            2839152426,
            457141659,
            509813237,
            4120667899,
            652014361,
            1966332200,
            2975202805,
            55981186,
            2327461051,
            676427537,
            3255491064,
            2882294119,
            3433927263,
            1307055953,
            942726286,
            933058658,
            2468411793,
            3933900994,
            4215176142,
            1361170020,
            2001714738,
            2830558078,
            3274259782,
            1222529897,
            1679025792,
            2729314320,
            3714953764,
            1770335741,
            151462246,
            3013232138,
            1682292957,
            1483529935,
            471910574,
            1539241949,
            458788160,
            3436315007,
            1807016891,
            3718408830,
            978976581,
            1043663428,
            3165965781,
            1927990952,
            4200891579,
            2372276910,
            3208408903,
            3533431907,
            1412390302,
            2931980059,
            4132332400,
            1947078029,
            3881505623,
            4168226417,
            2941484381,
            1077988104,
            1320477388,
            886195818,
            18198404,
            3786409e3,
            2509781533,
            112762804,
            3463356488,
            1866414978,
            891333506,
            18488651,
            661792760,
            1628790961,
            3885187036,
            3141171499,
            876946877,
            2693282273,
            1372485963,
            791857591,
            2686433993,
            3759982718,
            3167212022,
            3472953795,
            2716379847,
            445679433,
            3561995674,
            3504004811,
            3574258232,
            54117162,
            3331405415,
            2381918588,
            3769707343,
            4154350007,
            1140177722,
            4074052095,
            668550556,
            3214352940,
            367459370,
            261225585,
            2610173221,
            4209349473,
            3468074219,
            3265815641,
            314222801,
            3066103646,
            3808782860,
            282218597,
            3406013506,
            3773591054,
            379116347,
            1285071038,
            846784868,
            2669647154,
            3771962079,
            3550491691,
            2305946142,
            453669953,
            1268987020,
            3317592352,
            3279303384,
            3744833421,
            2610507566,
            3859509063,
            266596637,
            3847019092,
            517658769,
            3462560207,
            3443424879,
            370717030,
            4247526661,
            2224018117,
            4143653529,
            4112773975,
            2788324899,
            2477274417,
            1456262402,
            2901442914,
            1517677493,
            1846949527,
            2295493580,
            3734397586,
            2176403920,
            1280348187,
            1908823572,
            3871786941,
            846861322,
            1172426758,
            3287448474,
            3383383037,
            1655181056,
            3139813346,
            901632758,
            1897031941,
            2986607138,
            3066810236,
            3447102507,
            1393639104,
            373351379,
            950779232,
            625454576,
            3124240540,
            4148612726,
            2007998917,
            544563296,
            2244738638,
            2330496472,
            2058025392,
            1291430526,
            424198748,
            50039436,
            29584100,
            3605783033,
            2429876329,
            2791104160,
            1057563949,
            3255363231,
            3075367218,
            3463963227,
            1469046755,
            985887462
          ]
        ];
        var u = {
          pbox: [],
          sbox: []
        };
        function f(g, m) {
          let y = m >> 24 & 255, _ = m >> 16 & 255, x = m >> 8 & 255, b = m & 255, w = g.sbox[0][y] + g.sbox[1][_];
          return w = w ^ g.sbox[2][x], w = w + g.sbox[3][b], w;
        }
        function d(g, m, y) {
          let _ = m, x = y, b;
          for (let w = 0; w < o; ++w)
            _ = _ ^ g.pbox[w], x = f(g, _) ^ x, b = _, _ = x, x = b;
          return b = _, _ = x, x = b, x = x ^ g.pbox[o], _ = _ ^ g.pbox[o + 1], { left: _, right: x };
        }
        function h(g, m, y) {
          let _ = m, x = y, b;
          for (let w = o + 1; w > 1; --w)
            _ = _ ^ g.pbox[w], x = f(g, _) ^ x, b = _, _ = x, x = b;
          return b = _, _ = x, x = b, x = x ^ g.pbox[1], _ = _ ^ g.pbox[0], { left: _, right: x };
        }
        function p(g, m, y) {
          for (let E = 0; E < 4; E++) {
            g.sbox[E] = [];
            for (let $ = 0; $ < 256; $++)
              g.sbox[E][$] = c[E][$];
          }
          let _ = 0;
          for (let E = 0; E < o + 2; E++)
            g.pbox[E] = l[E] ^ m[_], _++, _ >= y && (_ = 0);
          let x = 0, b = 0, w = 0;
          for (let E = 0; E < o + 2; E += 2)
            w = d(g, x, b), x = w.left, b = w.right, g.pbox[E] = x, g.pbox[E + 1] = b;
          for (let E = 0; E < 4; E++)
            for (let $ = 0; $ < 256; $ += 2)
              w = d(g, x, b), x = w.left, b = w.right, g.sbox[E][$] = x, g.sbox[E][$ + 1] = b;
          return !0;
        }
        var v = s.Blowfish = a.extend({
          _doReset: function() {
            if (this._keyPriorReset !== this._key) {
              var g = this._keyPriorReset = this._key, m = g.words, y = g.sigBytes / 4;
              p(u, m, y);
            }
          },
          encryptBlock: function(g, m) {
            var y = d(u, g[m], g[m + 1]);
            g[m] = y.left, g[m + 1] = y.right;
          },
          decryptBlock: function(g, m) {
            var y = h(u, g[m], g[m + 1]);
            g[m] = y.left, g[m + 1] = y.right;
          },
          blockSize: 64 / 32,
          keySize: 128 / 32,
          ivSize: 64 / 32
        });
        n.Blowfish = a._createHelper(v);
      }(), r.Blowfish;
    });
  }(bu)), bu.exports;
}
(function(e, t) {
  (function(r, n, i) {
    e.exports = n(ye(), ql(), JV(), QV(), Xn(), eY(), Jn(), Nb(), id(), tY(), Lb(), rY(), nY(), iY(), ad(), aY(), xn(), lt(), sY(), oY(), lY(), cY(), uY(), fY(), dY(), hY(), pY(), vY(), gY(), mY(), xY(), yY(), bY(), _Y(), wY());
  })(le, function(r) {
    return r;
  });
})(Rb);
var $r = Rb.exports;
const $Y = Kt.checkout("CryptoAES");
class ss {
  static decrypt(t, r, n) {
    if (t === "php-encryption") {
      let { iv: i, value: a } = JSON.parse($r.enc.Base64.parse(r).toString($r.enc.Utf8)), s = $r.enc.Base64.parse(i), o = $r.enc.Utf8.parse(n);
      return $r.AES.decrypt(a, o, { iv: s }).toString($r.enc.Utf8);
    } else
      return $r.AES.decrypt(r, n).toString($r.enc.Utf8);
  }
  static encrypt(t, r, n) {
    if (t === "php-encryption")
      throw $Y.create("CryptoAES encrypt not support php-encryption");
    return $r.AES.encrypt(r, n).toString();
  }
}
var _f;
try {
  _f = Map;
} catch {
}
var wf;
try {
  wf = Set;
} catch {
}
function jb(e, t, r) {
  if (!e || typeof e != "object" || typeof e == "function")
    return e;
  if (e.nodeType && "cloneNode" in e)
    return e.cloneNode(!0);
  if (e instanceof Date)
    return new Date(e.getTime());
  if (e instanceof RegExp)
    return new RegExp(e);
  if (Array.isArray(e))
    return e.map($f);
  if (_f && e instanceof _f)
    return new Map(Array.from(e.entries()));
  if (wf && e instanceof wf)
    return new Set(Array.from(e.values()));
  if (e instanceof Object) {
    t.push(e);
    var n = Object.create(e);
    r.push(n);
    for (var i in e) {
      var a = t.findIndex(function(s) {
        return s === e[i];
      });
      n[i] = a > -1 ? r[a] : jb(e[i], t, r);
    }
    return n;
  }
  return e;
}
function $f(e) {
  return jb(e, [], []);
}
const DY = Object.prototype.toString, EY = Error.prototype.toString, AY = RegExp.prototype.toString, CY = typeof Symbol < "u" ? Symbol.prototype.toString : () => "", SY = /^Symbol\((.*)\)(.*)$/;
function kY(e) {
  return e != +e ? "NaN" : e === 0 && 1 / e < 0 ? "-0" : "" + e;
}
function Qg(e, t = !1) {
  if (e == null || e === !0 || e === !1)
    return "" + e;
  const r = typeof e;
  if (r === "number")
    return kY(e);
  if (r === "string")
    return t ? `"${e}"` : e;
  if (r === "function")
    return "[Function " + (e.name || "anonymous") + "]";
  if (r === "symbol")
    return CY.call(e).replace(SY, "Symbol($1)");
  const n = DY.call(e).slice(8, -1);
  return n === "Date" ? isNaN(e.getTime()) ? "" + e : e.toISOString(e) : n === "Error" || e instanceof Error ? "[" + EY.call(e) + "]" : n === "RegExp" ? AY.call(e) : null;
}
function Li(e, t) {
  let r = Qg(e, t);
  return r !== null ? r : JSON.stringify(e, function(n, i) {
    let a = Qg(this[n], t);
    return a !== null ? a : i;
  }, 2);
}
let Sn = {
  default: "${path} is invalid",
  required: "${path} is a required field",
  oneOf: "${path} must be one of the following values: ${values}",
  notOneOf: "${path} must not be one of the following values: ${values}",
  notType: ({
    path: e,
    type: t,
    value: r,
    originalValue: n
  }) => {
    let i = n != null && n !== r, a = `${e} must be a \`${t}\` type, but the final value was: \`${Li(r, !0)}\`` + (i ? ` (cast from the value \`${Li(n, !0)}\`).` : ".");
    return r === null && (a += '\n If "null" is intended as an empty value be sure to mark the schema as `.nullable()`'), a;
  },
  defined: "${path} must be defined"
}, Qt = {
  length: "${path} must be exactly ${length} characters",
  min: "${path} must be at least ${min} characters",
  max: "${path} must be at most ${max} characters",
  matches: '${path} must match the following: "${regex}"',
  email: "${path} must be a valid email",
  url: "${path} must be a valid URL",
  uuid: "${path} must be a valid UUID",
  trim: "${path} must be a trimmed string",
  lowercase: "${path} must be a lowercase string",
  uppercase: "${path} must be a upper case string"
}, Jr = {
  min: "${path} must be greater than or equal to ${min}",
  max: "${path} must be less than or equal to ${max}",
  lessThan: "${path} must be less than ${less}",
  moreThan: "${path} must be greater than ${more}",
  positive: "${path} must be a positive number",
  negative: "${path} must be a negative number",
  integer: "${path} must be an integer"
}, Df = {
  min: "${path} field must be later than ${min}",
  max: "${path} field must be at earlier than ${max}"
}, Ef = {
  isValue: "${path} field must be ${value}"
}, Af = {
  noUnknown: "${path} field has unspecified keys: ${unknown}"
}, yo = {
  min: "${path} field must have at least ${min} items",
  max: "${path} field must have less than or equal to ${max} items",
  length: "${path} must have ${length} items"
};
const OY = Object.assign(/* @__PURE__ */ Object.create(null), {
  mixed: Sn,
  string: Qt,
  number: Jr,
  date: Df,
  object: Af,
  array: yo,
  boolean: Ef
});
var FY = Object.prototype, TY = FY.hasOwnProperty;
function MY(e, t) {
  return e != null && TY.call(e, t);
}
var PY = MY, BY = Array.isArray, yn = BY, IY = typeof le == "object" && le && le.Object === Object && le, zb = IY, RY = zb, NY = typeof self == "object" && self && self.Object === Object && self, LY = RY || NY || Function("return this")(), Vr = LY, jY = Vr, zY = jY.Symbol, Gl = zY, em = Gl, Hb = Object.prototype, HY = Hb.hasOwnProperty, VY = Hb.toString, $a = em ? em.toStringTag : void 0;
function YY(e) {
  var t = HY.call(e, $a), r = e[$a];
  try {
    e[$a] = void 0;
    var n = !0;
  } catch {
  }
  var i = VY.call(e);
  return n && (t ? e[$a] = r : delete e[$a]), i;
}
var WY = YY, UY = Object.prototype, qY = UY.toString;
function GY(e) {
  return qY.call(e);
}
var KY = GY, tm = Gl, ZY = WY, XY = KY, JY = "[object Null]", QY = "[object Undefined]", rm = tm ? tm.toStringTag : void 0;
function eW(e) {
  return e == null ? e === void 0 ? QY : JY : rm && rm in Object(e) ? ZY(e) : XY(e);
}
var bs = eW;
function tW(e) {
  return e != null && typeof e == "object";
}
var _s = tW, rW = bs, nW = _s, iW = "[object Symbol]";
function aW(e) {
  return typeof e == "symbol" || nW(e) && rW(e) == iW;
}
var sd = aW, sW = yn, oW = sd, lW = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, cW = /^\w*$/;
function uW(e, t) {
  if (sW(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || oW(e) ? !0 : cW.test(e) || !lW.test(e) || t != null && e in Object(t);
}
var od = uW;
function fW(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var ld = fW, dW = bs, hW = ld, pW = "[object AsyncFunction]", vW = "[object Function]", gW = "[object GeneratorFunction]", mW = "[object Proxy]";
function xW(e) {
  if (!hW(e))
    return !1;
  var t = dW(e);
  return t == vW || t == gW || t == pW || t == mW;
}
var Vb = xW, yW = Vr, bW = yW["__core-js_shared__"], _W = bW, _u = _W, nm = function() {
  var e = /[^.]+$/.exec(_u && _u.keys && _u.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function wW(e) {
  return !!nm && nm in e;
}
var $W = wW, DW = Function.prototype, EW = DW.toString;
function AW(e) {
  if (e != null) {
    try {
      return EW.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Yb = AW, CW = Vb, SW = $W, kW = ld, OW = Yb, FW = /[\\^$.*+?()[\]{}|]/g, TW = /^\[object .+?Constructor\]$/, MW = Function.prototype, PW = Object.prototype, BW = MW.toString, IW = PW.hasOwnProperty, RW = RegExp(
  "^" + BW.call(IW).replace(FW, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function NW(e) {
  if (!kW(e) || SW(e))
    return !1;
  var t = CW(e) ? RW : TW;
  return t.test(OW(e));
}
var LW = NW;
function jW(e, t) {
  return e == null ? void 0 : e[t];
}
var zW = jW, HW = LW, VW = zW;
function YW(e, t) {
  var r = VW(e, t);
  return HW(r) ? r : void 0;
}
var Qn = YW, WW = Qn, UW = WW(Object, "create"), Kl = UW, im = Kl;
function qW() {
  this.__data__ = im ? im(null) : {}, this.size = 0;
}
var GW = qW;
function KW(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var ZW = KW, XW = Kl, JW = "__lodash_hash_undefined__", QW = Object.prototype, eU = QW.hasOwnProperty;
function tU(e) {
  var t = this.__data__;
  if (XW) {
    var r = t[e];
    return r === JW ? void 0 : r;
  }
  return eU.call(t, e) ? t[e] : void 0;
}
var rU = tU, nU = Kl, iU = Object.prototype, aU = iU.hasOwnProperty;
function sU(e) {
  var t = this.__data__;
  return nU ? t[e] !== void 0 : aU.call(t, e);
}
var oU = sU, lU = Kl, cU = "__lodash_hash_undefined__";
function uU(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = lU && t === void 0 ? cU : t, this;
}
var fU = uU, dU = GW, hU = ZW, pU = rU, vU = oU, gU = fU;
function ra(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
ra.prototype.clear = dU;
ra.prototype.delete = hU;
ra.prototype.get = pU;
ra.prototype.has = vU;
ra.prototype.set = gU;
var mU = ra;
function xU() {
  this.__data__ = [], this.size = 0;
}
var yU = xU;
function bU(e, t) {
  return e === t || e !== e && t !== t;
}
var Wb = bU, _U = Wb;
function wU(e, t) {
  for (var r = e.length; r--; )
    if (_U(e[r][0], t))
      return r;
  return -1;
}
var Zl = wU, $U = Zl, DU = Array.prototype, EU = DU.splice;
function AU(e) {
  var t = this.__data__, r = $U(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : EU.call(t, r, 1), --this.size, !0;
}
var CU = AU, SU = Zl;
function kU(e) {
  var t = this.__data__, r = SU(t, e);
  return r < 0 ? void 0 : t[r][1];
}
var OU = kU, FU = Zl;
function TU(e) {
  return FU(this.__data__, e) > -1;
}
var MU = TU, PU = Zl;
function BU(e, t) {
  var r = this.__data__, n = PU(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
var IU = BU, RU = yU, NU = CU, LU = OU, jU = MU, zU = IU;
function na(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
na.prototype.clear = RU;
na.prototype.delete = NU;
na.prototype.get = LU;
na.prototype.has = jU;
na.prototype.set = zU;
var Xl = na, HU = Qn, VU = Vr, YU = HU(VU, "Map"), cd = YU, am = mU, WU = Xl, UU = cd;
function qU() {
  this.size = 0, this.__data__ = {
    hash: new am(),
    map: new (UU || WU)(),
    string: new am()
  };
}
var GU = qU;
function KU(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var ZU = KU, XU = ZU;
function JU(e, t) {
  var r = e.__data__;
  return XU(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
var Jl = JU, QU = Jl;
function eq(e) {
  var t = QU(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var tq = eq, rq = Jl;
function nq(e) {
  return rq(this, e).get(e);
}
var iq = nq, aq = Jl;
function sq(e) {
  return aq(this, e).has(e);
}
var oq = sq, lq = Jl;
function cq(e, t) {
  var r = lq(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
var uq = cq, fq = GU, dq = tq, hq = iq, pq = oq, vq = uq;
function ia(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
ia.prototype.clear = fq;
ia.prototype.delete = dq;
ia.prototype.get = hq;
ia.prototype.has = pq;
ia.prototype.set = vq;
var ud = ia, Ub = ud, gq = "Expected a function";
function fd(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(gq);
  var r = function() {
    var n = arguments, i = t ? t.apply(this, n) : n[0], a = r.cache;
    if (a.has(i))
      return a.get(i);
    var s = e.apply(this, n);
    return r.cache = a.set(i, s) || a, s;
  };
  return r.cache = new (fd.Cache || Ub)(), r;
}
fd.Cache = Ub;
var mq = fd, xq = mq, yq = 500;
function bq(e) {
  var t = xq(e, function(n) {
    return r.size === yq && r.clear(), n;
  }), r = t.cache;
  return t;
}
var _q = bq, wq = _q, $q = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Dq = /\\(\\)?/g, Eq = wq(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace($q, function(r, n, i, a) {
    t.push(i ? a.replace(Dq, "$1") : n || r);
  }), t;
}), Aq = Eq;
function Cq(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; )
    i[r] = t(e[r], r, e);
  return i;
}
var Sq = Cq, sm = Gl, kq = Sq, Oq = yn, Fq = sd, Tq = 1 / 0, om = sm ? sm.prototype : void 0, lm = om ? om.toString : void 0;
function qb(e) {
  if (typeof e == "string")
    return e;
  if (Oq(e))
    return kq(e, qb) + "";
  if (Fq(e))
    return lm ? lm.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -Tq ? "-0" : t;
}
var Mq = qb, Pq = Mq;
function Bq(e) {
  return e == null ? "" : Pq(e);
}
var ws = Bq, Iq = yn, Rq = od, Nq = Aq, Lq = ws;
function jq(e, t) {
  return Iq(e) ? e : Rq(e, t) ? [e] : Nq(Lq(e));
}
var Gb = jq, zq = bs, Hq = _s, Vq = "[object Arguments]";
function Yq(e) {
  return Hq(e) && zq(e) == Vq;
}
var Wq = Yq, cm = Wq, Uq = _s, Kb = Object.prototype, qq = Kb.hasOwnProperty, Gq = Kb.propertyIsEnumerable, Kq = cm(/* @__PURE__ */ function() {
  return arguments;
}()) ? cm : function(e) {
  return Uq(e) && qq.call(e, "callee") && !Gq.call(e, "callee");
}, Zb = Kq, Zq = 9007199254740991, Xq = /^(?:0|[1-9]\d*)$/;
function Jq(e, t) {
  var r = typeof e;
  return t = t ?? Zq, !!t && (r == "number" || r != "symbol" && Xq.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var Xb = Jq, Qq = 9007199254740991;
function eG(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Qq;
}
var dd = eG, tG = sd, rG = 1 / 0;
function nG(e) {
  if (typeof e == "string" || tG(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -rG ? "-0" : t;
}
var Ql = nG, iG = Gb, aG = Zb, sG = yn, oG = Xb, lG = dd, cG = Ql;
function uG(e, t, r) {
  t = iG(t, e);
  for (var n = -1, i = t.length, a = !1; ++n < i; ) {
    var s = cG(t[n]);
    if (!(a = e != null && r(e, s)))
      break;
    e = e[s];
  }
  return a || ++n != i ? a : (i = e == null ? 0 : e.length, !!i && lG(i) && oG(s, i) && (sG(e) || aG(e)));
}
var Jb = uG, fG = PY, dG = Jb;
function hG(e, t) {
  return e != null && dG(e, t, fG);
}
var pG = hG;
const pl = /* @__PURE__ */ ea(pG), aa = (e) => e && e.__isYupSchema__;
class vG {
  constructor(t, r) {
    if (this.fn = void 0, this.refs = t, this.refs = t, typeof r == "function") {
      this.fn = r;
      return;
    }
    if (!pl(r, "is"))
      throw new TypeError("`is:` is required for `when()` conditions");
    if (!r.then && !r.otherwise)
      throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");
    let {
      is: n,
      then: i,
      otherwise: a
    } = r, s = typeof n == "function" ? n : (...o) => o.every((l) => l === n);
    this.fn = function(...o) {
      let l = o.pop(), c = o.pop(), u = s(...o) ? i : a;
      if (u)
        return typeof u == "function" ? u(c) : c.concat(u.resolve(l));
    };
  }
  resolve(t, r) {
    let n = this.refs.map((a) => a.getValue(r == null ? void 0 : r.value, r == null ? void 0 : r.parent, r == null ? void 0 : r.context)), i = this.fn.apply(t, n.concat(t, r));
    if (i === void 0 || i === t)
      return t;
    if (!aa(i))
      throw new TypeError("conditions must return a schema object");
    return i.resolve(r);
  }
}
function Qb(e) {
  return e == null ? [] : [].concat(e);
}
function Cf() {
  return Cf = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Cf.apply(this, arguments);
}
let gG = /\$\{\s*(\w+)\s*\}/g;
class Dt extends Error {
  static formatError(t, r) {
    const n = r.label || r.path || "this";
    return n !== r.path && (r = Cf({}, r, {
      path: n
    })), typeof t == "string" ? t.replace(gG, (i, a) => Li(r[a])) : typeof t == "function" ? t(r) : t;
  }
  static isError(t) {
    return t && t.name === "ValidationError";
  }
  constructor(t, r, n, i) {
    super(), this.value = void 0, this.path = void 0, this.type = void 0, this.errors = void 0, this.params = void 0, this.inner = void 0, this.name = "ValidationError", this.value = r, this.path = n, this.type = i, this.errors = [], this.inner = [], Qb(t).forEach((a) => {
      Dt.isError(a) ? (this.errors.push(...a.errors), this.inner = this.inner.concat(a.inner.length ? a.inner : a)) : this.errors.push(a);
    }), this.message = this.errors.length > 1 ? `${this.errors.length} errors occurred` : this.errors[0], Error.captureStackTrace && Error.captureStackTrace(this, Dt);
  }
}
const mG = (e) => {
  let t = !1;
  return (...r) => {
    t || (t = !0, e(...r));
  };
};
function vl(e, t) {
  let {
    endEarly: r,
    tests: n,
    args: i,
    value: a,
    errors: s,
    sort: o,
    path: l
  } = e, c = mG(t), u = n.length;
  const f = [];
  if (s = s || [], !u)
    return s.length ? c(new Dt(s, a, l)) : c(null, a);
  for (let d = 0; d < n.length; d++) {
    const h = n[d];
    h(i, function(v) {
      if (v) {
        if (!Dt.isError(v))
          return c(v, a);
        if (r)
          return v.value = a, c(v, a);
        f.push(v);
      }
      if (--u <= 0) {
        if (f.length && (o && f.sort(o), s.length && f.push(...s), s = f), s.length) {
          c(new Dt(s, a, l), a);
          return;
        }
        c(null, a);
      }
    });
  }
}
var xG = Qn, yG = function() {
  try {
    var e = xG(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), bG = yG, um = bG;
function _G(e, t, r) {
  t == "__proto__" && um ? um(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
var e_ = _G;
function wG(e) {
  return function(t, r, n) {
    for (var i = -1, a = Object(t), s = n(t), o = s.length; o--; ) {
      var l = s[e ? o : ++i];
      if (r(a[l], l, a) === !1)
        break;
    }
    return t;
  };
}
var $G = wG, DG = $G, EG = DG(), AG = EG;
function CG(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var SG = CG, gl = { exports: {} };
function kG() {
  return !1;
}
var OG = kG;
gl.exports;
(function(e, t) {
  var r = Vr, n = OG, i = t && !t.nodeType && t, a = i && !0 && e && !e.nodeType && e, s = a && a.exports === i, o = s ? r.Buffer : void 0, l = o ? o.isBuffer : void 0, c = l || n;
  e.exports = c;
})(gl, gl.exports);
var t_ = gl.exports, FG = bs, TG = dd, MG = _s, PG = "[object Arguments]", BG = "[object Array]", IG = "[object Boolean]", RG = "[object Date]", NG = "[object Error]", LG = "[object Function]", jG = "[object Map]", zG = "[object Number]", HG = "[object Object]", VG = "[object RegExp]", YG = "[object Set]", WG = "[object String]", UG = "[object WeakMap]", qG = "[object ArrayBuffer]", GG = "[object DataView]", KG = "[object Float32Array]", ZG = "[object Float64Array]", XG = "[object Int8Array]", JG = "[object Int16Array]", QG = "[object Int32Array]", eK = "[object Uint8Array]", tK = "[object Uint8ClampedArray]", rK = "[object Uint16Array]", nK = "[object Uint32Array]", Pe = {};
Pe[KG] = Pe[ZG] = Pe[XG] = Pe[JG] = Pe[QG] = Pe[eK] = Pe[tK] = Pe[rK] = Pe[nK] = !0;
Pe[PG] = Pe[BG] = Pe[qG] = Pe[IG] = Pe[GG] = Pe[RG] = Pe[NG] = Pe[LG] = Pe[jG] = Pe[zG] = Pe[HG] = Pe[VG] = Pe[YG] = Pe[WG] = Pe[UG] = !1;
function iK(e) {
  return MG(e) && TG(e.length) && !!Pe[FG(e)];
}
var aK = iK;
function sK(e) {
  return function(t) {
    return e(t);
  };
}
var oK = sK, ml = { exports: {} };
ml.exports;
(function(e, t) {
  var r = zb, n = t && !t.nodeType && t, i = n && !0 && e && !e.nodeType && e, a = i && i.exports === n, s = a && r.process, o = function() {
    try {
      var l = i && i.require && i.require("util").types;
      return l || s && s.binding && s.binding("util");
    } catch {
    }
  }();
  e.exports = o;
})(ml, ml.exports);
var lK = ml.exports, cK = aK, uK = oK, fm = lK, dm = fm && fm.isTypedArray, fK = dm ? uK(dm) : cK, r_ = fK, dK = SG, hK = Zb, pK = yn, vK = t_, gK = Xb, mK = r_, xK = Object.prototype, yK = xK.hasOwnProperty;
function bK(e, t) {
  var r = pK(e), n = !r && hK(e), i = !r && !n && vK(e), a = !r && !n && !i && mK(e), s = r || n || i || a, o = s ? dK(e.length, String) : [], l = o.length;
  for (var c in e)
    (t || yK.call(e, c)) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    gK(c, l))) && o.push(c);
  return o;
}
var _K = bK, wK = Object.prototype;
function $K(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || wK;
  return e === r;
}
var DK = $K;
function EK(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var AK = EK, CK = AK, SK = CK(Object.keys, Object), kK = SK, OK = DK, FK = kK, TK = Object.prototype, MK = TK.hasOwnProperty;
function PK(e) {
  if (!OK(e))
    return FK(e);
  var t = [];
  for (var r in Object(e))
    MK.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
var BK = PK, IK = Vb, RK = dd;
function NK(e) {
  return e != null && RK(e.length) && !IK(e);
}
var LK = NK, jK = _K, zK = BK, HK = LK;
function VK(e) {
  return HK(e) ? jK(e) : zK(e);
}
var hd = VK, YK = AG, WK = hd;
function UK(e, t) {
  return e && YK(e, t, WK);
}
var n_ = UK, qK = Xl;
function GK() {
  this.__data__ = new qK(), this.size = 0;
}
var KK = GK;
function ZK(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
var XK = ZK;
function JK(e) {
  return this.__data__.get(e);
}
var QK = JK;
function eZ(e) {
  return this.__data__.has(e);
}
var tZ = eZ, rZ = Xl, nZ = cd, iZ = ud, aZ = 200;
function sZ(e, t) {
  var r = this.__data__;
  if (r instanceof rZ) {
    var n = r.__data__;
    if (!nZ || n.length < aZ - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new iZ(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
var oZ = sZ, lZ = Xl, cZ = KK, uZ = XK, fZ = QK, dZ = tZ, hZ = oZ;
function sa(e) {
  var t = this.__data__ = new lZ(e);
  this.size = t.size;
}
sa.prototype.clear = cZ;
sa.prototype.delete = uZ;
sa.prototype.get = fZ;
sa.prototype.has = dZ;
sa.prototype.set = hZ;
var i_ = sa, pZ = "__lodash_hash_undefined__";
function vZ(e) {
  return this.__data__.set(e, pZ), this;
}
var gZ = vZ;
function mZ(e) {
  return this.__data__.has(e);
}
var xZ = mZ, yZ = ud, bZ = gZ, _Z = xZ;
function xl(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new yZ(); ++t < r; )
    this.add(e[t]);
}
xl.prototype.add = xl.prototype.push = bZ;
xl.prototype.has = _Z;
var wZ = xl;
function $Z(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
var DZ = $Z;
function EZ(e, t) {
  return e.has(t);
}
var AZ = EZ, CZ = wZ, SZ = DZ, kZ = AZ, OZ = 1, FZ = 2;
function TZ(e, t, r, n, i, a) {
  var s = r & OZ, o = e.length, l = t.length;
  if (o != l && !(s && l > o))
    return !1;
  var c = a.get(e), u = a.get(t);
  if (c && u)
    return c == t && u == e;
  var f = -1, d = !0, h = r & FZ ? new CZ() : void 0;
  for (a.set(e, t), a.set(t, e); ++f < o; ) {
    var p = e[f], v = t[f];
    if (n)
      var g = s ? n(v, p, f, t, e, a) : n(p, v, f, e, t, a);
    if (g !== void 0) {
      if (g)
        continue;
      d = !1;
      break;
    }
    if (h) {
      if (!SZ(t, function(m, y) {
        if (!kZ(h, y) && (p === m || i(p, m, r, n, a)))
          return h.push(y);
      })) {
        d = !1;
        break;
      }
    } else if (!(p === v || i(p, v, r, n, a))) {
      d = !1;
      break;
    }
  }
  return a.delete(e), a.delete(t), d;
}
var a_ = TZ, MZ = Vr, PZ = MZ.Uint8Array, BZ = PZ;
function IZ(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n, i) {
    r[++t] = [i, n];
  }), r;
}
var RZ = IZ;
function NZ(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n) {
    r[++t] = n;
  }), r;
}
var LZ = NZ, hm = Gl, pm = BZ, jZ = Wb, zZ = a_, HZ = RZ, VZ = LZ, YZ = 1, WZ = 2, UZ = "[object Boolean]", qZ = "[object Date]", GZ = "[object Error]", KZ = "[object Map]", ZZ = "[object Number]", XZ = "[object RegExp]", JZ = "[object Set]", QZ = "[object String]", eX = "[object Symbol]", tX = "[object ArrayBuffer]", rX = "[object DataView]", vm = hm ? hm.prototype : void 0, wu = vm ? vm.valueOf : void 0;
function nX(e, t, r, n, i, a, s) {
  switch (r) {
    case rX:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case tX:
      return !(e.byteLength != t.byteLength || !a(new pm(e), new pm(t)));
    case UZ:
    case qZ:
    case ZZ:
      return jZ(+e, +t);
    case GZ:
      return e.name == t.name && e.message == t.message;
    case XZ:
    case QZ:
      return e == t + "";
    case KZ:
      var o = HZ;
    case JZ:
      var l = n & YZ;
      if (o || (o = VZ), e.size != t.size && !l)
        return !1;
      var c = s.get(e);
      if (c)
        return c == t;
      n |= WZ, s.set(e, t);
      var u = zZ(o(e), o(t), n, i, a, s);
      return s.delete(e), u;
    case eX:
      if (wu)
        return wu.call(e) == wu.call(t);
  }
  return !1;
}
var iX = nX;
function aX(e, t) {
  for (var r = -1, n = t.length, i = e.length; ++r < n; )
    e[i + r] = t[r];
  return e;
}
var sX = aX, oX = sX, lX = yn;
function cX(e, t, r) {
  var n = t(e);
  return lX(e) ? n : oX(n, r(e));
}
var uX = cX;
function fX(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = 0, a = []; ++r < n; ) {
    var s = e[r];
    t(s, r, e) && (a[i++] = s);
  }
  return a;
}
var dX = fX;
function hX() {
  return [];
}
var pX = hX, vX = dX, gX = pX, mX = Object.prototype, xX = mX.propertyIsEnumerable, gm = Object.getOwnPropertySymbols, yX = gm ? function(e) {
  return e == null ? [] : (e = Object(e), vX(gm(e), function(t) {
    return xX.call(e, t);
  }));
} : gX, bX = yX, _X = uX, wX = bX, $X = hd;
function DX(e) {
  return _X(e, $X, wX);
}
var EX = DX, mm = EX, AX = 1, CX = Object.prototype, SX = CX.hasOwnProperty;
function kX(e, t, r, n, i, a) {
  var s = r & AX, o = mm(e), l = o.length, c = mm(t), u = c.length;
  if (l != u && !s)
    return !1;
  for (var f = l; f--; ) {
    var d = o[f];
    if (!(s ? d in t : SX.call(t, d)))
      return !1;
  }
  var h = a.get(e), p = a.get(t);
  if (h && p)
    return h == t && p == e;
  var v = !0;
  a.set(e, t), a.set(t, e);
  for (var g = s; ++f < l; ) {
    d = o[f];
    var m = e[d], y = t[d];
    if (n)
      var _ = s ? n(y, m, d, t, e, a) : n(m, y, d, e, t, a);
    if (!(_ === void 0 ? m === y || i(m, y, r, n, a) : _)) {
      v = !1;
      break;
    }
    g || (g = d == "constructor");
  }
  if (v && !g) {
    var x = e.constructor, b = t.constructor;
    x != b && "constructor" in e && "constructor" in t && !(typeof x == "function" && x instanceof x && typeof b == "function" && b instanceof b) && (v = !1);
  }
  return a.delete(e), a.delete(t), v;
}
var OX = kX, FX = Qn, TX = Vr, MX = FX(TX, "DataView"), PX = MX, BX = Qn, IX = Vr, RX = BX(IX, "Promise"), NX = RX, LX = Qn, jX = Vr, zX = LX(jX, "Set"), HX = zX, VX = Qn, YX = Vr, WX = VX(YX, "WeakMap"), UX = WX, Sf = PX, kf = cd, Of = NX, Ff = HX, Tf = UX, s_ = bs, oa = Yb, xm = "[object Map]", qX = "[object Object]", ym = "[object Promise]", bm = "[object Set]", _m = "[object WeakMap]", wm = "[object DataView]", GX = oa(Sf), KX = oa(kf), ZX = oa(Of), XX = oa(Ff), JX = oa(Tf), kn = s_;
(Sf && kn(new Sf(new ArrayBuffer(1))) != wm || kf && kn(new kf()) != xm || Of && kn(Of.resolve()) != ym || Ff && kn(new Ff()) != bm || Tf && kn(new Tf()) != _m) && (kn = function(e) {
  var t = s_(e), r = t == qX ? e.constructor : void 0, n = r ? oa(r) : "";
  if (n)
    switch (n) {
      case GX:
        return wm;
      case KX:
        return xm;
      case ZX:
        return ym;
      case XX:
        return bm;
      case JX:
        return _m;
    }
  return t;
});
var QX = kn, $u = i_, eJ = a_, tJ = iX, rJ = OX, $m = QX, Dm = yn, Em = t_, nJ = r_, iJ = 1, Am = "[object Arguments]", Cm = "[object Array]", Zs = "[object Object]", aJ = Object.prototype, Sm = aJ.hasOwnProperty;
function sJ(e, t, r, n, i, a) {
  var s = Dm(e), o = Dm(t), l = s ? Cm : $m(e), c = o ? Cm : $m(t);
  l = l == Am ? Zs : l, c = c == Am ? Zs : c;
  var u = l == Zs, f = c == Zs, d = l == c;
  if (d && Em(e)) {
    if (!Em(t))
      return !1;
    s = !0, u = !1;
  }
  if (d && !u)
    return a || (a = new $u()), s || nJ(e) ? eJ(e, t, r, n, i, a) : tJ(e, t, l, r, n, i, a);
  if (!(r & iJ)) {
    var h = u && Sm.call(e, "__wrapped__"), p = f && Sm.call(t, "__wrapped__");
    if (h || p) {
      var v = h ? e.value() : e, g = p ? t.value() : t;
      return a || (a = new $u()), i(v, g, r, n, a);
    }
  }
  return d ? (a || (a = new $u()), rJ(e, t, r, n, i, a)) : !1;
}
var oJ = sJ, lJ = oJ, km = _s;
function o_(e, t, r, n, i) {
  return e === t ? !0 : e == null || t == null || !km(e) && !km(t) ? e !== e && t !== t : lJ(e, t, r, n, o_, i);
}
var l_ = o_, cJ = i_, uJ = l_, fJ = 1, dJ = 2;
function hJ(e, t, r, n) {
  var i = r.length, a = i, s = !n;
  if (e == null)
    return !a;
  for (e = Object(e); i--; ) {
    var o = r[i];
    if (s && o[2] ? o[1] !== e[o[0]] : !(o[0] in e))
      return !1;
  }
  for (; ++i < a; ) {
    o = r[i];
    var l = o[0], c = e[l], u = o[1];
    if (s && o[2]) {
      if (c === void 0 && !(l in e))
        return !1;
    } else {
      var f = new cJ();
      if (n)
        var d = n(c, u, l, e, t, f);
      if (!(d === void 0 ? uJ(u, c, fJ | dJ, n, f) : d))
        return !1;
    }
  }
  return !0;
}
var pJ = hJ, vJ = ld;
function gJ(e) {
  return e === e && !vJ(e);
}
var c_ = gJ, mJ = c_, xJ = hd;
function yJ(e) {
  for (var t = xJ(e), r = t.length; r--; ) {
    var n = t[r], i = e[n];
    t[r] = [n, i, mJ(i)];
  }
  return t;
}
var bJ = yJ;
function _J(e, t) {
  return function(r) {
    return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
  };
}
var u_ = _J, wJ = pJ, $J = bJ, DJ = u_;
function EJ(e) {
  var t = $J(e);
  return t.length == 1 && t[0][2] ? DJ(t[0][0], t[0][1]) : function(r) {
    return r === e || wJ(r, e, t);
  };
}
var AJ = EJ, CJ = Gb, SJ = Ql;
function kJ(e, t) {
  t = CJ(t, e);
  for (var r = 0, n = t.length; e != null && r < n; )
    e = e[SJ(t[r++])];
  return r && r == n ? e : void 0;
}
var f_ = kJ, OJ = f_;
function FJ(e, t, r) {
  var n = e == null ? void 0 : OJ(e, t);
  return n === void 0 ? r : n;
}
var TJ = FJ;
function MJ(e, t) {
  return e != null && t in Object(e);
}
var PJ = MJ, BJ = PJ, IJ = Jb;
function RJ(e, t) {
  return e != null && IJ(e, t, BJ);
}
var NJ = RJ, LJ = l_, jJ = TJ, zJ = NJ, HJ = od, VJ = c_, YJ = u_, WJ = Ql, UJ = 1, qJ = 2;
function GJ(e, t) {
  return HJ(e) && VJ(t) ? YJ(WJ(e), t) : function(r) {
    var n = jJ(r, e);
    return n === void 0 && n === t ? zJ(r, e) : LJ(t, n, UJ | qJ);
  };
}
var KJ = GJ;
function ZJ(e) {
  return e;
}
var XJ = ZJ;
function JJ(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
var QJ = JJ, eQ = f_;
function tQ(e) {
  return function(t) {
    return eQ(t, e);
  };
}
var rQ = tQ, nQ = QJ, iQ = rQ, aQ = od, sQ = Ql;
function oQ(e) {
  return aQ(e) ? nQ(sQ(e)) : iQ(e);
}
var lQ = oQ, cQ = AJ, uQ = KJ, fQ = XJ, dQ = yn, hQ = lQ;
function pQ(e) {
  return typeof e == "function" ? e : e == null ? fQ : typeof e == "object" ? dQ(e) ? uQ(e[0], e[1]) : cQ(e) : hQ(e);
}
var d_ = pQ, vQ = e_, gQ = n_, mQ = d_;
function xQ(e, t) {
  var r = {};
  return t = mQ(t), gQ(e, function(n, i, a) {
    vQ(r, i, t(n, i, a));
  }), r;
}
var yQ = xQ;
const h_ = /* @__PURE__ */ ea(yQ);
function ei(e) {
  this._maxSize = e, this.clear();
}
ei.prototype.clear = function() {
  this._size = 0, this._values = /* @__PURE__ */ Object.create(null);
};
ei.prototype.get = function(e) {
  return this._values[e];
};
ei.prototype.set = function(e, t) {
  return this._size >= this._maxSize && this.clear(), e in this._values || this._size++, this._values[e] = t;
};
var bQ = /[^.^\]^[]+|(?=\[\]|\.\.)/g, p_ = /^\d+$/, _Q = /^\d/, wQ = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g, $Q = /^\s*(['"]?)(.*?)(\1)\s*$/, pd = 512, Om = new ei(pd), Fm = new ei(pd), Tm = new ei(pd), ec = {
  Cache: ei,
  split: Mf,
  normalizePath: Du,
  setter: function(e) {
    var t = Du(e);
    return Fm.get(e) || Fm.set(e, function(n, i) {
      for (var a = 0, s = t.length, o = n; a < s - 1; ) {
        var l = t[a];
        if (l === "__proto__" || l === "constructor" || l === "prototype")
          return n;
        o = o[t[a++]];
      }
      o[t[a]] = i;
    });
  },
  getter: function(e, t) {
    var r = Du(e);
    return Tm.get(e) || Tm.set(e, function(i) {
      for (var a = 0, s = r.length; a < s; )
        if (i != null || !t)
          i = i[r[a++]];
        else
          return;
      return i;
    });
  },
  join: function(e) {
    return e.reduce(function(t, r) {
      return t + (vd(r) || p_.test(r) ? "[" + r + "]" : (t ? "." : "") + r);
    }, "");
  },
  forEach: function(e, t, r) {
    DQ(Array.isArray(e) ? e : Mf(e), t, r);
  }
};
function Du(e) {
  return Om.get(e) || Om.set(
    e,
    Mf(e).map(function(t) {
      return t.replace($Q, "$2");
    })
  );
}
function Mf(e) {
  return e.match(bQ) || [""];
}
function DQ(e, t, r) {
  var n = e.length, i, a, s, o;
  for (a = 0; a < n; a++)
    i = e[a], i && (CQ(i) && (i = '"' + i + '"'), o = vd(i), s = !o && /^\d+$/.test(i), t.call(r, i, o, s, a, e));
}
function vd(e) {
  return typeof e == "string" && e && ["'", '"'].indexOf(e.charAt(0)) !== -1;
}
function EQ(e) {
  return e.match(_Q) && !e.match(p_);
}
function AQ(e) {
  return wQ.test(e);
}
function CQ(e) {
  return !vd(e) && (EQ(e) || AQ(e));
}
const Xs = {
  context: "$",
  value: "."
};
function SQ(e, t) {
  return new Tr(e, t);
}
class Tr {
  constructor(t, r = {}) {
    if (this.key = void 0, this.isContext = void 0, this.isValue = void 0, this.isSibling = void 0, this.path = void 0, this.getter = void 0, this.map = void 0, typeof t != "string")
      throw new TypeError("ref must be a string, got: " + t);
    if (this.key = t.trim(), t === "")
      throw new TypeError("ref must be a non-empty string");
    this.isContext = this.key[0] === Xs.context, this.isValue = this.key[0] === Xs.value, this.isSibling = !this.isContext && !this.isValue;
    let n = this.isContext ? Xs.context : this.isValue ? Xs.value : "";
    this.path = this.key.slice(n.length), this.getter = this.path && ec.getter(this.path, !0), this.map = r.map;
  }
  getValue(t, r, n) {
    let i = this.isContext ? n : this.isValue ? t : r;
    return this.getter && (i = this.getter(i || {})), this.map && (i = this.map(i)), i;
  }
  /**
   *
   * @param {*} value
   * @param {Object} options
   * @param {Object=} options.context
   * @param {Object=} options.parent
   */
  cast(t, r) {
    return this.getValue(t, r == null ? void 0 : r.parent, r == null ? void 0 : r.context);
  }
  resolve() {
    return this;
  }
  describe() {
    return {
      type: "ref",
      key: this.key
    };
  }
  toString() {
    return `Ref(${this.key})`;
  }
  static isRef(t) {
    return t && t.__isYupRef;
  }
}
Tr.prototype.__isYupRef = !0;
function yl() {
  return yl = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, yl.apply(this, arguments);
}
function kQ(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function Js(e) {
  function t(r, n) {
    let {
      value: i,
      path: a = "",
      label: s,
      options: o,
      originalValue: l,
      sync: c
    } = r, u = kQ(r, ["value", "path", "label", "options", "originalValue", "sync"]);
    const {
      name: f,
      test: d,
      params: h,
      message: p
    } = e;
    let {
      parent: v,
      context: g
    } = o;
    function m(w) {
      return Tr.isRef(w) ? w.getValue(i, v, g) : w;
    }
    function y(w = {}) {
      const E = h_(yl({
        value: i,
        originalValue: l,
        label: s,
        path: w.path || a
      }, h, w.params), m), $ = new Dt(Dt.formatError(w.message || p, E), i, E.path, w.type || f);
      return $.params = E, $;
    }
    let _ = yl({
      path: a,
      parent: v,
      type: f,
      createError: y,
      resolve: m,
      options: o,
      originalValue: l
    }, u);
    if (!c) {
      try {
        Promise.resolve(d.call(_, i, _)).then((w) => {
          Dt.isError(w) ? n(w) : w ? n(null, w) : n(y());
        }).catch(n);
      } catch (w) {
        n(w);
      }
      return;
    }
    let x;
    try {
      var b;
      if (x = d.call(_, i, _), typeof ((b = x) == null ? void 0 : b.then) == "function")
        throw new Error(`Validation test of type: "${_.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);
    } catch (w) {
      n(w);
      return;
    }
    Dt.isError(x) ? n(x) : x ? n(null, x) : n(y());
  }
  return t.OPTIONS = e, t;
}
let OQ = (e) => e.substr(0, e.length - 1).substr(1);
function v_(e, t, r, n = r) {
  let i, a, s;
  return t ? (ec.forEach(t, (o, l, c) => {
    let u = l ? OQ(o) : o;
    if (e = e.resolve({
      context: n,
      parent: i,
      value: r
    }), e.innerType) {
      let f = c ? parseInt(u, 10) : 0;
      if (r && f >= r.length)
        throw new Error(`Yup.reach cannot resolve an array item at index: ${o}, in the path: ${t}. because there is no value at that index. `);
      i = r, r = r && r[f], e = e.innerType;
    }
    if (!c) {
      if (!e.fields || !e.fields[u])
        throw new Error(`The schema does not contain the path: ${t}. (failed at: ${s} which is a type: "${e._type}")`);
      i = r, r = r && r[u], e = e.fields[u];
    }
    a = u, s = l ? "[" + o + "]" : "." + o;
  }), {
    schema: e,
    parent: i,
    parentPath: a
  }) : {
    parent: i,
    parentPath: t,
    schema: e
  };
}
const FQ = (e, t, r, n) => v_(e, t, r, n).schema;
class bl {
  constructor() {
    this.list = void 0, this.refs = void 0, this.list = /* @__PURE__ */ new Set(), this.refs = /* @__PURE__ */ new Map();
  }
  get size() {
    return this.list.size + this.refs.size;
  }
  describe() {
    const t = [];
    for (const r of this.list)
      t.push(r);
    for (const [, r] of this.refs)
      t.push(r.describe());
    return t;
  }
  toArray() {
    return Array.from(this.list).concat(Array.from(this.refs.values()));
  }
  resolveAll(t) {
    return this.toArray().reduce((r, n) => r.concat(Tr.isRef(n) ? t(n) : n), []);
  }
  add(t) {
    Tr.isRef(t) ? this.refs.set(t.key, t) : this.list.add(t);
  }
  delete(t) {
    Tr.isRef(t) ? this.refs.delete(t.key) : this.list.delete(t);
  }
  clone() {
    const t = new bl();
    return t.list = new Set(this.list), t.refs = new Map(this.refs), t;
  }
  merge(t, r) {
    const n = this.clone();
    return t.list.forEach((i) => n.add(i)), t.refs.forEach((i) => n.add(i)), r.list.forEach((i) => n.delete(i)), r.refs.forEach((i) => n.delete(i)), n;
  }
}
function Ht() {
  return Ht = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ht.apply(this, arguments);
}
class at {
  constructor(t) {
    this.deps = [], this.tests = void 0, this.transforms = void 0, this.conditions = [], this._mutate = void 0, this._typeError = void 0, this._whitelist = new bl(), this._blacklist = new bl(), this.exclusiveTests = /* @__PURE__ */ Object.create(null), this.spec = void 0, this.tests = [], this.transforms = [], this.withMutation(() => {
      this.typeError(Sn.notType);
    }), this.type = (t == null ? void 0 : t.type) || "mixed", this.spec = Ht({
      strip: !1,
      strict: !1,
      abortEarly: !0,
      recursive: !0,
      nullable: !1,
      presence: "optional"
    }, t == null ? void 0 : t.spec);
  }
  // TODO: remove
  get _type() {
    return this.type;
  }
  _typeCheck(t) {
    return !0;
  }
  clone(t) {
    if (this._mutate)
      return t && Object.assign(this.spec, t), this;
    const r = Object.create(Object.getPrototypeOf(this));
    return r.type = this.type, r._typeError = this._typeError, r._whitelistError = this._whitelistError, r._blacklistError = this._blacklistError, r._whitelist = this._whitelist.clone(), r._blacklist = this._blacklist.clone(), r.exclusiveTests = Ht({}, this.exclusiveTests), r.deps = [...this.deps], r.conditions = [...this.conditions], r.tests = [...this.tests], r.transforms = [...this.transforms], r.spec = $f(Ht({}, this.spec, t)), r;
  }
  label(t) {
    let r = this.clone();
    return r.spec.label = t, r;
  }
  meta(...t) {
    if (t.length === 0)
      return this.spec.meta;
    let r = this.clone();
    return r.spec.meta = Object.assign(r.spec.meta || {}, t[0]), r;
  }
  // withContext<TContext extends AnyObject>(): BaseSchema<
  //   TCast,
  //   TContext,
  //   TOutput
  // > {
  //   return this as any;
  // }
  withMutation(t) {
    let r = this._mutate;
    this._mutate = !0;
    let n = t(this);
    return this._mutate = r, n;
  }
  concat(t) {
    if (!t || t === this)
      return this;
    if (t.type !== this.type && this.type !== "mixed")
      throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${t.type}`);
    let r = this, n = t.clone();
    const i = Ht({}, r.spec, n.spec);
    return n.spec = i, n._typeError || (n._typeError = r._typeError), n._whitelistError || (n._whitelistError = r._whitelistError), n._blacklistError || (n._blacklistError = r._blacklistError), n._whitelist = r._whitelist.merge(t._whitelist, t._blacklist), n._blacklist = r._blacklist.merge(t._blacklist, t._whitelist), n.tests = r.tests, n.exclusiveTests = r.exclusiveTests, n.withMutation((a) => {
      t.tests.forEach((s) => {
        a.test(s.OPTIONS);
      });
    }), n.transforms = [...r.transforms, ...n.transforms], n;
  }
  isType(t) {
    return this.spec.nullable && t === null ? !0 : this._typeCheck(t);
  }
  resolve(t) {
    let r = this;
    if (r.conditions.length) {
      let n = r.conditions;
      r = r.clone(), r.conditions = [], r = n.reduce((i, a) => a.resolve(i, t), r), r = r.resolve(t);
    }
    return r;
  }
  /**
   *
   * @param {*} value
   * @param {Object} options
   * @param {*=} options.parent
   * @param {*=} options.context
   */
  cast(t, r = {}) {
    let n = this.resolve(Ht({
      value: t
    }, r)), i = n._cast(t, r);
    if (t !== void 0 && r.assert !== !1 && n.isType(i) !== !0) {
      let a = Li(t), s = Li(i);
      throw new TypeError(`The value of ${r.path || "field"} could not be cast to a value that satisfies the schema type: "${n._type}". 

attempted value: ${a} 
` + (s !== a ? `result of cast: ${s}` : ""));
    }
    return i;
  }
  _cast(t, r) {
    let n = t === void 0 ? t : this.transforms.reduce((i, a) => a.call(this, i, t, this), t);
    return n === void 0 && (n = this.getDefault()), n;
  }
  _validate(t, r = {}, n) {
    let {
      sync: i,
      path: a,
      from: s = [],
      originalValue: o = t,
      strict: l = this.spec.strict,
      abortEarly: c = this.spec.abortEarly
    } = r, u = t;
    l || (u = this._cast(u, Ht({
      assert: !1
    }, r)));
    let f = {
      value: u,
      path: a,
      options: r,
      originalValue: o,
      schema: this,
      label: this.spec.label,
      sync: i,
      from: s
    }, d = [];
    this._typeError && d.push(this._typeError);
    let h = [];
    this._whitelistError && h.push(this._whitelistError), this._blacklistError && h.push(this._blacklistError), vl({
      args: f,
      value: u,
      path: a,
      sync: i,
      tests: d,
      endEarly: c
    }, (p) => {
      if (p)
        return void n(p, u);
      vl({
        tests: this.tests.concat(h),
        args: f,
        path: a,
        sync: i,
        value: u,
        endEarly: c
      }, n);
    });
  }
  validate(t, r, n) {
    let i = this.resolve(Ht({}, r, {
      value: t
    }));
    return typeof n == "function" ? i._validate(t, r, n) : new Promise((a, s) => i._validate(t, r, (o, l) => {
      o ? s(o) : a(l);
    }));
  }
  validateSync(t, r) {
    let n = this.resolve(Ht({}, r, {
      value: t
    })), i;
    return n._validate(t, Ht({}, r, {
      sync: !0
    }), (a, s) => {
      if (a)
        throw a;
      i = s;
    }), i;
  }
  isValid(t, r) {
    return this.validate(t, r).then(() => !0, (n) => {
      if (Dt.isError(n))
        return !1;
      throw n;
    });
  }
  isValidSync(t, r) {
    try {
      return this.validateSync(t, r), !0;
    } catch (n) {
      if (Dt.isError(n))
        return !1;
      throw n;
    }
  }
  _getDefault() {
    let t = this.spec.default;
    return t == null ? t : typeof t == "function" ? t.call(this) : $f(t);
  }
  getDefault(t) {
    return this.resolve(t || {})._getDefault();
  }
  default(t) {
    return arguments.length === 0 ? this._getDefault() : this.clone({
      default: t
    });
  }
  strict(t = !0) {
    let r = this.clone();
    return r.spec.strict = t, r;
  }
  _isPresent(t) {
    return t != null;
  }
  defined(t = Sn.defined) {
    return this.test({
      message: t,
      name: "defined",
      exclusive: !0,
      test(r) {
        return r !== void 0;
      }
    });
  }
  required(t = Sn.required) {
    return this.clone({
      presence: "required"
    }).withMutation((r) => r.test({
      message: t,
      name: "required",
      exclusive: !0,
      test(n) {
        return this.schema._isPresent(n);
      }
    }));
  }
  notRequired() {
    let t = this.clone({
      presence: "optional"
    });
    return t.tests = t.tests.filter((r) => r.OPTIONS.name !== "required"), t;
  }
  nullable(t = !0) {
    return this.clone({
      nullable: t !== !1
    });
  }
  transform(t) {
    let r = this.clone();
    return r.transforms.push(t), r;
  }
  /**
   * Adds a test function to the schema's queue of tests.
   * tests can be exclusive or non-exclusive.
   *
   * - exclusive tests, will replace any existing tests of the same name.
   * - non-exclusive: can be stacked
   *
   * If a non-exclusive test is added to a schema with an exclusive test of the same name
   * the exclusive test is removed and further tests of the same name will be stacked.
   *
   * If an exclusive test is added to a schema with non-exclusive tests of the same name
   * the previous tests are removed and further tests of the same name will replace each other.
   */
  test(...t) {
    let r;
    if (t.length === 1 ? typeof t[0] == "function" ? r = {
      test: t[0]
    } : r = t[0] : t.length === 2 ? r = {
      name: t[0],
      test: t[1]
    } : r = {
      name: t[0],
      message: t[1],
      test: t[2]
    }, r.message === void 0 && (r.message = Sn.default), typeof r.test != "function")
      throw new TypeError("`test` is a required parameters");
    let n = this.clone(), i = Js(r), a = r.exclusive || r.name && n.exclusiveTests[r.name] === !0;
    if (r.exclusive && !r.name)
      throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");
    return r.name && (n.exclusiveTests[r.name] = !!r.exclusive), n.tests = n.tests.filter((s) => !(s.OPTIONS.name === r.name && (a || s.OPTIONS.test === i.OPTIONS.test))), n.tests.push(i), n;
  }
  when(t, r) {
    !Array.isArray(t) && typeof t != "string" && (r = t, t = ".");
    let n = this.clone(), i = Qb(t).map((a) => new Tr(a));
    return i.forEach((a) => {
      a.isSibling && n.deps.push(a.key);
    }), n.conditions.push(new vG(i, r)), n;
  }
  typeError(t) {
    let r = this.clone();
    return r._typeError = Js({
      message: t,
      name: "typeError",
      test(n) {
        return n !== void 0 && !this.schema.isType(n) ? this.createError({
          params: {
            type: this.schema._type
          }
        }) : !0;
      }
    }), r;
  }
  oneOf(t, r = Sn.oneOf) {
    let n = this.clone();
    return t.forEach((i) => {
      n._whitelist.add(i), n._blacklist.delete(i);
    }), n._whitelistError = Js({
      message: r,
      name: "oneOf",
      test(i) {
        if (i === void 0)
          return !0;
        let a = this.schema._whitelist, s = a.resolveAll(this.resolve);
        return s.includes(i) ? !0 : this.createError({
          params: {
            values: a.toArray().join(", "),
            resolved: s
          }
        });
      }
    }), n;
  }
  notOneOf(t, r = Sn.notOneOf) {
    let n = this.clone();
    return t.forEach((i) => {
      n._blacklist.add(i), n._whitelist.delete(i);
    }), n._blacklistError = Js({
      message: r,
      name: "notOneOf",
      test(i) {
        let a = this.schema._blacklist, s = a.resolveAll(this.resolve);
        return s.includes(i) ? this.createError({
          params: {
            values: a.toArray().join(", "),
            resolved: s
          }
        }) : !0;
      }
    }), n;
  }
  strip(t = !0) {
    let r = this.clone();
    return r.spec.strip = t, r;
  }
  describe() {
    const t = this.clone(), {
      label: r,
      meta: n
    } = t.spec;
    return {
      meta: n,
      label: r,
      type: t.type,
      oneOf: t._whitelist.describe(),
      notOneOf: t._blacklist.describe(),
      tests: t.tests.map((a) => ({
        name: a.OPTIONS.name,
        params: a.OPTIONS.params
      })).filter((a, s, o) => o.findIndex((l) => l.name === a.name) === s)
    };
  }
}
at.prototype.__isYupSchema__ = !0;
for (const e of ["validate", "validateSync"])
  at.prototype[`${e}At`] = function(t, r, n = {}) {
    const {
      parent: i,
      parentPath: a,
      schema: s
    } = v_(this, t, r, n.context);
    return s[e](i && i[a], Ht({}, n, {
      parent: i,
      path: t
    }));
  };
for (const e of ["equals", "is"])
  at.prototype[e] = at.prototype.oneOf;
for (const e of ["not", "nope"])
  at.prototype[e] = at.prototype.notOneOf;
at.prototype.optional = at.prototype.notRequired;
const gd = at;
function g_() {
  return new gd();
}
g_.prototype = gd.prototype;
const Le = (e) => e == null;
function Pf() {
  return new md();
}
class md extends at {
  constructor() {
    super({
      type: "boolean"
    }), this.withMutation(() => {
      this.transform(function(t) {
        if (!this.isType(t)) {
          if (/^(true|1)$/i.test(String(t)))
            return !0;
          if (/^(false|0)$/i.test(String(t)))
            return !1;
        }
        return t;
      });
    });
  }
  _typeCheck(t) {
    return t instanceof Boolean && (t = t.valueOf()), typeof t == "boolean";
  }
  isTrue(t = Ef.isValue) {
    return this.test({
      message: t,
      name: "is-value",
      exclusive: !0,
      params: {
        value: "true"
      },
      test(r) {
        return Le(r) || r === !0;
      }
    });
  }
  isFalse(t = Ef.isValue) {
    return this.test({
      message: t,
      name: "is-value",
      exclusive: !0,
      params: {
        value: "false"
      },
      test(r) {
        return Le(r) || r === !1;
      }
    });
  }
}
Pf.prototype = md.prototype;
let TQ = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i, MQ = /^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i, PQ = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i, BQ = (e) => Le(e) || e === e.trim(), IQ = {}.toString();
function m_() {
  return new xd();
}
class xd extends at {
  constructor() {
    super({
      type: "string"
    }), this.withMutation(() => {
      this.transform(function(t) {
        if (this.isType(t) || Array.isArray(t))
          return t;
        const r = t != null && t.toString ? t.toString() : t;
        return r === IQ ? t : r;
      });
    });
  }
  _typeCheck(t) {
    return t instanceof String && (t = t.valueOf()), typeof t == "string";
  }
  _isPresent(t) {
    return super._isPresent(t) && !!t.length;
  }
  length(t, r = Qt.length) {
    return this.test({
      message: r,
      name: "length",
      exclusive: !0,
      params: {
        length: t
      },
      test(n) {
        return Le(n) || n.length === this.resolve(t);
      }
    });
  }
  min(t, r = Qt.min) {
    return this.test({
      message: r,
      name: "min",
      exclusive: !0,
      params: {
        min: t
      },
      test(n) {
        return Le(n) || n.length >= this.resolve(t);
      }
    });
  }
  max(t, r = Qt.max) {
    return this.test({
      name: "max",
      exclusive: !0,
      message: r,
      params: {
        max: t
      },
      test(n) {
        return Le(n) || n.length <= this.resolve(t);
      }
    });
  }
  matches(t, r) {
    let n = !1, i, a;
    return r && (typeof r == "object" ? {
      excludeEmptyString: n = !1,
      message: i,
      name: a
    } = r : i = r), this.test({
      name: a || "matches",
      message: i || Qt.matches,
      params: {
        regex: t
      },
      test: (s) => Le(s) || s === "" && n || s.search(t) !== -1
    });
  }
  email(t = Qt.email) {
    return this.matches(TQ, {
      name: "email",
      message: t,
      excludeEmptyString: !0
    });
  }
  url(t = Qt.url) {
    return this.matches(MQ, {
      name: "url",
      message: t,
      excludeEmptyString: !0
    });
  }
  uuid(t = Qt.uuid) {
    return this.matches(PQ, {
      name: "uuid",
      message: t,
      excludeEmptyString: !1
    });
  }
  //-- transforms --
  ensure() {
    return this.default("").transform((t) => t === null ? "" : t);
  }
  trim(t = Qt.trim) {
    return this.transform((r) => r != null ? r.trim() : r).test({
      message: t,
      name: "trim",
      test: BQ
    });
  }
  lowercase(t = Qt.lowercase) {
    return this.transform((r) => Le(r) ? r : r.toLowerCase()).test({
      message: t,
      name: "string_case",
      exclusive: !0,
      test: (r) => Le(r) || r === r.toLowerCase()
    });
  }
  uppercase(t = Qt.uppercase) {
    return this.transform((r) => Le(r) ? r : r.toUpperCase()).test({
      message: t,
      name: "string_case",
      exclusive: !0,
      test: (r) => Le(r) || r === r.toUpperCase()
    });
  }
}
m_.prototype = xd.prototype;
let RQ = (e) => e != +e;
function x_() {
  return new yd();
}
class yd extends at {
  constructor() {
    super({
      type: "number"
    }), this.withMutation(() => {
      this.transform(function(t) {
        let r = t;
        if (typeof r == "string") {
          if (r = r.replace(/\s/g, ""), r === "")
            return NaN;
          r = +r;
        }
        return this.isType(r) ? r : parseFloat(r);
      });
    });
  }
  _typeCheck(t) {
    return t instanceof Number && (t = t.valueOf()), typeof t == "number" && !RQ(t);
  }
  min(t, r = Jr.min) {
    return this.test({
      message: r,
      name: "min",
      exclusive: !0,
      params: {
        min: t
      },
      test(n) {
        return Le(n) || n >= this.resolve(t);
      }
    });
  }
  max(t, r = Jr.max) {
    return this.test({
      message: r,
      name: "max",
      exclusive: !0,
      params: {
        max: t
      },
      test(n) {
        return Le(n) || n <= this.resolve(t);
      }
    });
  }
  lessThan(t, r = Jr.lessThan) {
    return this.test({
      message: r,
      name: "max",
      exclusive: !0,
      params: {
        less: t
      },
      test(n) {
        return Le(n) || n < this.resolve(t);
      }
    });
  }
  moreThan(t, r = Jr.moreThan) {
    return this.test({
      message: r,
      name: "min",
      exclusive: !0,
      params: {
        more: t
      },
      test(n) {
        return Le(n) || n > this.resolve(t);
      }
    });
  }
  positive(t = Jr.positive) {
    return this.moreThan(0, t);
  }
  negative(t = Jr.negative) {
    return this.lessThan(0, t);
  }
  integer(t = Jr.integer) {
    return this.test({
      name: "integer",
      message: t,
      test: (r) => Le(r) || Number.isInteger(r)
    });
  }
  truncate() {
    return this.transform((t) => Le(t) ? t : t | 0);
  }
  round(t) {
    var r;
    let n = ["ceil", "floor", "round", "trunc"];
    if (t = ((r = t) == null ? void 0 : r.toLowerCase()) || "round", t === "trunc")
      return this.truncate();
    if (n.indexOf(t.toLowerCase()) === -1)
      throw new TypeError("Only valid options for round() are: " + n.join(", "));
    return this.transform((i) => Le(i) ? i : Math[t](i));
  }
}
x_.prototype = yd.prototype;
var NQ = /^(\d{4}|[+\-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,\.](\d{1,}))?)?(?:(Z)|([+\-])(\d{2})(?::?(\d{2}))?)?)?$/;
function LQ(e) {
  var t = [1, 4, 5, 6, 7, 10, 11], r = 0, n, i;
  if (i = NQ.exec(e)) {
    for (var a = 0, s; s = t[a]; ++a)
      i[s] = +i[s] || 0;
    i[2] = (+i[2] || 1) - 1, i[3] = +i[3] || 1, i[7] = i[7] ? String(i[7]).substr(0, 3) : 0, (i[8] === void 0 || i[8] === "") && (i[9] === void 0 || i[9] === "") ? n = +new Date(i[1], i[2], i[3], i[4], i[5], i[6], i[7]) : (i[8] !== "Z" && i[9] !== void 0 && (r = i[10] * 60 + i[11], i[9] === "+" && (r = 0 - r)), n = Date.UTC(i[1], i[2], i[3], i[4], i[5] + r, i[6], i[7]));
  } else
    n = Date.parse ? Date.parse(e) : NaN;
  return n;
}
let bd = /* @__PURE__ */ new Date(""), jQ = (e) => Object.prototype.toString.call(e) === "[object Date]";
function _d() {
  return new tc();
}
class tc extends at {
  constructor() {
    super({
      type: "date"
    }), this.withMutation(() => {
      this.transform(function(t) {
        return this.isType(t) ? t : (t = LQ(t), isNaN(t) ? bd : new Date(t));
      });
    });
  }
  _typeCheck(t) {
    return jQ(t) && !isNaN(t.getTime());
  }
  prepareParam(t, r) {
    let n;
    if (Tr.isRef(t))
      n = t;
    else {
      let i = this.cast(t);
      if (!this._typeCheck(i))
        throw new TypeError(`\`${r}\` must be a Date or a value that can be \`cast()\` to a Date`);
      n = i;
    }
    return n;
  }
  min(t, r = Df.min) {
    let n = this.prepareParam(t, "min");
    return this.test({
      message: r,
      name: "min",
      exclusive: !0,
      params: {
        min: t
      },
      test(i) {
        return Le(i) || i >= this.resolve(n);
      }
    });
  }
  max(t, r = Df.max) {
    let n = this.prepareParam(t, "max");
    return this.test({
      message: r,
      name: "max",
      exclusive: !0,
      params: {
        max: t
      },
      test(i) {
        return Le(i) || i <= this.resolve(n);
      }
    });
  }
}
tc.INVALID_DATE = bd;
_d.prototype = tc.prototype;
_d.INVALID_DATE = bd;
function zQ(e, t, r, n) {
  var i = -1, a = e == null ? 0 : e.length;
  for (n && a && (r = e[++i]); ++i < a; )
    r = t(r, e[i], i, e);
  return r;
}
var HQ = zQ;
function VQ(e) {
  return function(t) {
    return e == null ? void 0 : e[t];
  };
}
var YQ = VQ, WQ = YQ, UQ = {
  // Latin-1 Supplement block.
  À: "A",
  Á: "A",
  Â: "A",
  Ã: "A",
  Ä: "A",
  Å: "A",
  à: "a",
  á: "a",
  â: "a",
  ã: "a",
  ä: "a",
  å: "a",
  Ç: "C",
  ç: "c",
  Ð: "D",
  ð: "d",
  È: "E",
  É: "E",
  Ê: "E",
  Ë: "E",
  è: "e",
  é: "e",
  ê: "e",
  ë: "e",
  Ì: "I",
  Í: "I",
  Î: "I",
  Ï: "I",
  ì: "i",
  í: "i",
  î: "i",
  ï: "i",
  Ñ: "N",
  ñ: "n",
  Ò: "O",
  Ó: "O",
  Ô: "O",
  Õ: "O",
  Ö: "O",
  Ø: "O",
  ò: "o",
  ó: "o",
  ô: "o",
  õ: "o",
  ö: "o",
  ø: "o",
  Ù: "U",
  Ú: "U",
  Û: "U",
  Ü: "U",
  ù: "u",
  ú: "u",
  û: "u",
  ü: "u",
  Ý: "Y",
  ý: "y",
  ÿ: "y",
  Æ: "Ae",
  æ: "ae",
  Þ: "Th",
  þ: "th",
  ß: "ss",
  // Latin Extended-A block.
  Ā: "A",
  Ă: "A",
  Ą: "A",
  ā: "a",
  ă: "a",
  ą: "a",
  Ć: "C",
  Ĉ: "C",
  Ċ: "C",
  Č: "C",
  ć: "c",
  ĉ: "c",
  ċ: "c",
  č: "c",
  Ď: "D",
  Đ: "D",
  ď: "d",
  đ: "d",
  Ē: "E",
  Ĕ: "E",
  Ė: "E",
  Ę: "E",
  Ě: "E",
  ē: "e",
  ĕ: "e",
  ė: "e",
  ę: "e",
  ě: "e",
  Ĝ: "G",
  Ğ: "G",
  Ġ: "G",
  Ģ: "G",
  ĝ: "g",
  ğ: "g",
  ġ: "g",
  ģ: "g",
  Ĥ: "H",
  Ħ: "H",
  ĥ: "h",
  ħ: "h",
  Ĩ: "I",
  Ī: "I",
  Ĭ: "I",
  Į: "I",
  İ: "I",
  ĩ: "i",
  ī: "i",
  ĭ: "i",
  į: "i",
  ı: "i",
  Ĵ: "J",
  ĵ: "j",
  Ķ: "K",
  ķ: "k",
  ĸ: "k",
  Ĺ: "L",
  Ļ: "L",
  Ľ: "L",
  Ŀ: "L",
  Ł: "L",
  ĺ: "l",
  ļ: "l",
  ľ: "l",
  ŀ: "l",
  ł: "l",
  Ń: "N",
  Ņ: "N",
  Ň: "N",
  Ŋ: "N",
  ń: "n",
  ņ: "n",
  ň: "n",
  ŋ: "n",
  Ō: "O",
  Ŏ: "O",
  Ő: "O",
  ō: "o",
  ŏ: "o",
  ő: "o",
  Ŕ: "R",
  Ŗ: "R",
  Ř: "R",
  ŕ: "r",
  ŗ: "r",
  ř: "r",
  Ś: "S",
  Ŝ: "S",
  Ş: "S",
  Š: "S",
  ś: "s",
  ŝ: "s",
  ş: "s",
  š: "s",
  Ţ: "T",
  Ť: "T",
  Ŧ: "T",
  ţ: "t",
  ť: "t",
  ŧ: "t",
  Ũ: "U",
  Ū: "U",
  Ŭ: "U",
  Ů: "U",
  Ű: "U",
  Ų: "U",
  ũ: "u",
  ū: "u",
  ŭ: "u",
  ů: "u",
  ű: "u",
  ų: "u",
  Ŵ: "W",
  ŵ: "w",
  Ŷ: "Y",
  ŷ: "y",
  Ÿ: "Y",
  Ź: "Z",
  Ż: "Z",
  Ž: "Z",
  ź: "z",
  ż: "z",
  ž: "z",
  Ĳ: "IJ",
  ĳ: "ij",
  Œ: "Oe",
  œ: "oe",
  ŉ: "'n",
  ſ: "s"
}, qQ = WQ(UQ), GQ = qQ, KQ = GQ, ZQ = ws, XQ = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, JQ = "\\u0300-\\u036f", QQ = "\\ufe20-\\ufe2f", eee = "\\u20d0-\\u20ff", tee = JQ + QQ + eee, ree = "[" + tee + "]", nee = RegExp(ree, "g");
function iee(e) {
  return e = ZQ(e), e && e.replace(XQ, KQ).replace(nee, "");
}
var aee = iee, see = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
function oee(e) {
  return e.match(see) || [];
}
var lee = oee, cee = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
function uee(e) {
  return cee.test(e);
}
var fee = uee, y_ = "\\ud800-\\udfff", dee = "\\u0300-\\u036f", hee = "\\ufe20-\\ufe2f", pee = "\\u20d0-\\u20ff", vee = dee + hee + pee, b_ = "\\u2700-\\u27bf", __ = "a-z\\xdf-\\xf6\\xf8-\\xff", gee = "\\xac\\xb1\\xd7\\xf7", mee = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", xee = "\\u2000-\\u206f", yee = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", w_ = "A-Z\\xc0-\\xd6\\xd8-\\xde", bee = "\\ufe0e\\ufe0f", $_ = gee + mee + xee + yee, D_ = "['’]", Mm = "[" + $_ + "]", _ee = "[" + vee + "]", E_ = "\\d+", wee = "[" + b_ + "]", A_ = "[" + __ + "]", C_ = "[^" + y_ + $_ + E_ + b_ + __ + w_ + "]", $ee = "\\ud83c[\\udffb-\\udfff]", Dee = "(?:" + _ee + "|" + $ee + ")", Eee = "[^" + y_ + "]", S_ = "(?:\\ud83c[\\udde6-\\uddff]){2}", k_ = "[\\ud800-\\udbff][\\udc00-\\udfff]", hi = "[" + w_ + "]", Aee = "\\u200d", Pm = "(?:" + A_ + "|" + C_ + ")", Cee = "(?:" + hi + "|" + C_ + ")", Bm = "(?:" + D_ + "(?:d|ll|m|re|s|t|ve))?", Im = "(?:" + D_ + "(?:D|LL|M|RE|S|T|VE))?", O_ = Dee + "?", F_ = "[" + bee + "]?", See = "(?:" + Aee + "(?:" + [Eee, S_, k_].join("|") + ")" + F_ + O_ + ")*", kee = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Oee = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Fee = F_ + O_ + See, Tee = "(?:" + [wee, S_, k_].join("|") + ")" + Fee, Mee = RegExp([
  hi + "?" + A_ + "+" + Bm + "(?=" + [Mm, hi, "$"].join("|") + ")",
  Cee + "+" + Im + "(?=" + [Mm, hi + Pm, "$"].join("|") + ")",
  hi + "?" + Pm + "+" + Bm,
  hi + "+" + Im,
  Oee,
  kee,
  E_,
  Tee
].join("|"), "g");
function Pee(e) {
  return e.match(Mee) || [];
}
var Bee = Pee, Iee = lee, Ree = fee, Nee = ws, Lee = Bee;
function jee(e, t, r) {
  return e = Nee(e), t = r ? void 0 : t, t === void 0 ? Ree(e) ? Lee(e) : Iee(e) : e.match(t) || [];
}
var zee = jee, Hee = HQ, Vee = aee, Yee = zee, Wee = "['’]", Uee = RegExp(Wee, "g");
function qee(e) {
  return function(t) {
    return Hee(Yee(Vee(t).replace(Uee, "")), e, "");
  };
}
var T_ = qee, Gee = T_, Kee = Gee(function(e, t, r) {
  return e + (r ? "_" : "") + t.toLowerCase();
}), Zee = Kee;
const Rm = /* @__PURE__ */ ea(Zee);
function Xee(e, t, r) {
  var n = -1, i = e.length;
  t < 0 && (t = -t > i ? 0 : i + t), r = r > i ? i : r, r < 0 && (r += i), i = t > r ? 0 : r - t >>> 0, t >>>= 0;
  for (var a = Array(i); ++n < i; )
    a[n] = e[n + t];
  return a;
}
var Jee = Xee, Qee = Jee;
function ete(e, t, r) {
  var n = e.length;
  return r = r === void 0 ? n : r, !t && r >= n ? e : Qee(e, t, r);
}
var tte = ete, rte = "\\ud800-\\udfff", nte = "\\u0300-\\u036f", ite = "\\ufe20-\\ufe2f", ate = "\\u20d0-\\u20ff", ste = nte + ite + ate, ote = "\\ufe0e\\ufe0f", lte = "\\u200d", cte = RegExp("[" + lte + rte + ste + ote + "]");
function ute(e) {
  return cte.test(e);
}
var M_ = ute;
function fte(e) {
  return e.split("");
}
var dte = fte, P_ = "\\ud800-\\udfff", hte = "\\u0300-\\u036f", pte = "\\ufe20-\\ufe2f", vte = "\\u20d0-\\u20ff", gte = hte + pte + vte, mte = "\\ufe0e\\ufe0f", xte = "[" + P_ + "]", Bf = "[" + gte + "]", If = "\\ud83c[\\udffb-\\udfff]", yte = "(?:" + Bf + "|" + If + ")", B_ = "[^" + P_ + "]", I_ = "(?:\\ud83c[\\udde6-\\uddff]){2}", R_ = "[\\ud800-\\udbff][\\udc00-\\udfff]", bte = "\\u200d", N_ = yte + "?", L_ = "[" + mte + "]?", _te = "(?:" + bte + "(?:" + [B_, I_, R_].join("|") + ")" + L_ + N_ + ")*", wte = L_ + N_ + _te, $te = "(?:" + [B_ + Bf + "?", Bf, I_, R_, xte].join("|") + ")", Dte = RegExp(If + "(?=" + If + ")|" + $te + wte, "g");
function Ete(e) {
  return e.match(Dte) || [];
}
var Ate = Ete, Cte = dte, Ste = M_, kte = Ate;
function Ote(e) {
  return Ste(e) ? kte(e) : Cte(e);
}
var Fte = Ote, Tte = tte, Mte = M_, Pte = Fte, Bte = ws;
function Ite(e) {
  return function(t) {
    t = Bte(t);
    var r = Mte(t) ? Pte(t) : void 0, n = r ? r[0] : t.charAt(0), i = r ? Tte(r, 1).join("") : t.slice(1);
    return n[e]() + i;
  };
}
var Rte = Ite, Nte = Rte, Lte = Nte("toUpperCase"), jte = Lte, zte = ws, Hte = jte;
function Vte(e) {
  return Hte(zte(e).toLowerCase());
}
var Yte = Vte, Wte = Yte, Ute = T_, qte = Ute(function(e, t, r) {
  return t = t.toLowerCase(), e + (r ? Wte(t) : t);
}), Gte = qte;
const Kte = /* @__PURE__ */ ea(Gte);
var Zte = e_, Xte = n_, Jte = d_;
function Qte(e, t) {
  var r = {};
  return t = Jte(t), Xte(e, function(n, i, a) {
    Zte(r, t(n, i, a), n);
  }), r;
}
var ere = Qte;
const tre = /* @__PURE__ */ ea(ere);
var wd = { exports: {} };
wd.exports = function(e) {
  return j_(rre(e), e);
};
wd.exports.array = j_;
function j_(e, t) {
  var r = e.length, n = new Array(r), i = {}, a = r, s = nre(t), o = ire(e);
  for (t.forEach(function(c) {
    if (!o.has(c[0]) || !o.has(c[1]))
      throw new Error("Unknown node. There is an unknown node in the supplied edges.");
  }); a--; )
    i[a] || l(e[a], a, /* @__PURE__ */ new Set());
  return n;
  function l(c, u, f) {
    if (f.has(c)) {
      var d;
      try {
        d = ", node was:" + JSON.stringify(c);
      } catch {
        d = "";
      }
      throw new Error("Cyclic dependency" + d);
    }
    if (!o.has(c))
      throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: " + JSON.stringify(c));
    if (!i[u]) {
      i[u] = !0;
      var h = s.get(c) || /* @__PURE__ */ new Set();
      if (h = Array.from(h), u = h.length) {
        f.add(c);
        do {
          var p = h[--u];
          l(p, o.get(p), f);
        } while (u);
        f.delete(c);
      }
      n[--r] = c;
    }
  }
}
function rre(e) {
  for (var t = /* @__PURE__ */ new Set(), r = 0, n = e.length; r < n; r++) {
    var i = e[r];
    t.add(i[0]), t.add(i[1]);
  }
  return Array.from(t);
}
function nre(e) {
  for (var t = /* @__PURE__ */ new Map(), r = 0, n = e.length; r < n; r++) {
    var i = e[r];
    t.has(i[0]) || t.set(i[0], /* @__PURE__ */ new Set()), t.has(i[1]) || t.set(i[1], /* @__PURE__ */ new Set()), t.get(i[0]).add(i[1]);
  }
  return t;
}
function ire(e) {
  for (var t = /* @__PURE__ */ new Map(), r = 0, n = e.length; r < n; r++)
    t.set(e[r], r);
  return t;
}
var are = wd.exports;
const sre = /* @__PURE__ */ ea(are);
function ore(e, t = []) {
  let r = [], n = /* @__PURE__ */ new Set(), i = new Set(t.map(([s, o]) => `${s}-${o}`));
  function a(s, o) {
    let l = ec.split(s)[0];
    n.add(l), i.has(`${o}-${l}`) || r.push([o, l]);
  }
  for (const s in e)
    if (pl(e, s)) {
      let o = e[s];
      n.add(s), Tr.isRef(o) && o.isSibling ? a(o.path, s) : aa(o) && "deps" in o && o.deps.forEach((l) => a(l, s));
    }
  return sre.array(Array.from(n), r).reverse();
}
function Nm(e, t) {
  let r = 1 / 0;
  return e.some((n, i) => {
    var a;
    if (((a = t.path) == null ? void 0 : a.indexOf(n)) !== -1)
      return r = i, !0;
  }), r;
}
function z_(e) {
  return (t, r) => Nm(e, t) - Nm(e, r);
}
function xi() {
  return xi = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, xi.apply(this, arguments);
}
let Lm = (e) => Object.prototype.toString.call(e) === "[object Object]";
function lre(e, t) {
  let r = Object.keys(e.fields);
  return Object.keys(t).filter((n) => r.indexOf(n) === -1);
}
const cre = z_([]);
class $d extends at {
  constructor(t) {
    super({
      type: "object"
    }), this.fields = /* @__PURE__ */ Object.create(null), this._sortErrors = cre, this._nodes = [], this._excludedEdges = [], this.withMutation(() => {
      this.transform(function(n) {
        if (typeof n == "string")
          try {
            n = JSON.parse(n);
          } catch {
            n = null;
          }
        return this.isType(n) ? n : null;
      }), t && this.shape(t);
    });
  }
  _typeCheck(t) {
    return Lm(t) || typeof t == "function";
  }
  _cast(t, r = {}) {
    var n;
    let i = super._cast(t, r);
    if (i === void 0)
      return this.getDefault();
    if (!this._typeCheck(i))
      return i;
    let a = this.fields, s = (n = r.stripUnknown) != null ? n : this.spec.noUnknown, o = this._nodes.concat(Object.keys(i).filter((f) => this._nodes.indexOf(f) === -1)), l = {}, c = xi({}, r, {
      parent: l,
      __validating: r.__validating || !1
    }), u = !1;
    for (const f of o) {
      let d = a[f], h = pl(i, f);
      if (d) {
        let p, v = i[f];
        c.path = (r.path ? `${r.path}.` : "") + f, d = d.resolve({
          value: v,
          context: r.context,
          parent: l
        });
        let g = "spec" in d ? d.spec : void 0, m = g == null ? void 0 : g.strict;
        if (g != null && g.strip) {
          u = u || f in i;
          continue;
        }
        p = !r.__validating || !m ? (
          // TODO: use _cast, this is double resolving
          d.cast(i[f], c)
        ) : i[f], p !== void 0 && (l[f] = p);
      } else
        h && !s && (l[f] = i[f]);
      l[f] !== i[f] && (u = !0);
    }
    return u ? l : i;
  }
  _validate(t, r = {}, n) {
    let i = [], {
      sync: a,
      from: s = [],
      originalValue: o = t,
      abortEarly: l = this.spec.abortEarly,
      recursive: c = this.spec.recursive
    } = r;
    s = [{
      schema: this,
      value: o
    }, ...s], r.__validating = !0, r.originalValue = o, r.from = s, super._validate(t, r, (u, f) => {
      if (u) {
        if (!Dt.isError(u) || l)
          return void n(u, f);
        i.push(u);
      }
      if (!c || !Lm(f)) {
        n(i[0] || null, f);
        return;
      }
      o = o || f;
      let d = this._nodes.map((h) => (p, v) => {
        let g = h.indexOf(".") === -1 ? (r.path ? `${r.path}.` : "") + h : `${r.path || ""}["${h}"]`, m = this.fields[h];
        if (m && "validate" in m) {
          m.validate(f[h], xi({}, r, {
            // @ts-ignore
            path: g,
            from: s,
            // inner fields are always strict:
            // 1. this isn't strict so the casting will also have cast inner values
            // 2. this is strict in which case the nested values weren't cast either
            strict: !0,
            parent: f,
            originalValue: o[h]
          }), v);
          return;
        }
        v(null);
      });
      vl({
        sync: a,
        tests: d,
        value: f,
        errors: i,
        endEarly: l,
        sort: this._sortErrors,
        path: r.path
      }, n);
    });
  }
  clone(t) {
    const r = super.clone(t);
    return r.fields = xi({}, this.fields), r._nodes = this._nodes, r._excludedEdges = this._excludedEdges, r._sortErrors = this._sortErrors, r;
  }
  concat(t) {
    let r = super.concat(t), n = r.fields;
    for (let [i, a] of Object.entries(this.fields)) {
      const s = n[i];
      s === void 0 ? n[i] = a : s instanceof at && a instanceof at && (n[i] = a.concat(s));
    }
    return r.withMutation(() => r.shape(n, this._excludedEdges));
  }
  getDefaultFromShape() {
    let t = {};
    return this._nodes.forEach((r) => {
      const n = this.fields[r];
      t[r] = "default" in n ? n.getDefault() : void 0;
    }), t;
  }
  _getDefault() {
    if ("default" in this.spec)
      return super._getDefault();
    if (this._nodes.length)
      return this.getDefaultFromShape();
  }
  shape(t, r = []) {
    let n = this.clone(), i = Object.assign(n.fields, t);
    return n.fields = i, n._sortErrors = z_(Object.keys(i)), r.length && (Array.isArray(r[0]) || (r = [r]), n._excludedEdges = [...n._excludedEdges, ...r]), n._nodes = ore(i, n._excludedEdges), n;
  }
  pick(t) {
    const r = {};
    for (const n of t)
      this.fields[n] && (r[n] = this.fields[n]);
    return this.clone().withMutation((n) => (n.fields = {}, n.shape(r)));
  }
  omit(t) {
    const r = this.clone(), n = r.fields;
    r.fields = {};
    for (const i of t)
      delete n[i];
    return r.withMutation(() => r.shape(n));
  }
  from(t, r, n) {
    let i = ec.getter(t, !0);
    return this.transform((a) => {
      if (a == null)
        return a;
      let s = a;
      return pl(a, t) && (s = xi({}, a), n || delete s[t], s[r] = i(a)), s;
    });
  }
  noUnknown(t = !0, r = Af.noUnknown) {
    typeof t == "string" && (r = t, t = !0);
    let n = this.test({
      name: "noUnknown",
      exclusive: !0,
      message: r,
      test(i) {
        if (i == null)
          return !0;
        const a = lre(this.schema, i);
        return !t || a.length === 0 || this.createError({
          params: {
            unknown: a.join(", ")
          }
        });
      }
    });
    return n.spec.noUnknown = t, n;
  }
  unknown(t = !0, r = Af.noUnknown) {
    return this.noUnknown(!t, r);
  }
  transformKeys(t) {
    return this.transform((r) => r && tre(r, (n, i) => t(i)));
  }
  camelCase() {
    return this.transformKeys(Kte);
  }
  snakeCase() {
    return this.transformKeys(Rm);
  }
  constantCase() {
    return this.transformKeys((t) => Rm(t).toUpperCase());
  }
  describe() {
    let t = super.describe();
    return t.fields = h_(this.fields, (r) => r.describe()), t;
  }
}
function H_(e) {
  return new $d(e);
}
H_.prototype = $d.prototype;
function _l() {
  return _l = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, _l.apply(this, arguments);
}
function V_(e) {
  return new Dd(e);
}
class Dd extends at {
  constructor(t) {
    super({
      type: "array"
    }), this.innerType = void 0, this.innerType = t, this.withMutation(() => {
      this.transform(function(r) {
        if (typeof r == "string")
          try {
            r = JSON.parse(r);
          } catch {
            r = null;
          }
        return this.isType(r) ? r : null;
      });
    });
  }
  _typeCheck(t) {
    return Array.isArray(t);
  }
  get _subType() {
    return this.innerType;
  }
  _cast(t, r) {
    const n = super._cast(t, r);
    if (!this._typeCheck(n) || !this.innerType)
      return n;
    let i = !1;
    const a = n.map((s, o) => {
      const l = this.innerType.cast(s, _l({}, r, {
        path: `${r.path || ""}[${o}]`
      }));
      return l !== s && (i = !0), l;
    });
    return i ? a : n;
  }
  _validate(t, r = {}, n) {
    var i, a;
    let s = [], o = r.sync, l = r.path, c = this.innerType, u = (i = r.abortEarly) != null ? i : this.spec.abortEarly, f = (a = r.recursive) != null ? a : this.spec.recursive, d = r.originalValue != null ? r.originalValue : t;
    super._validate(t, r, (h, p) => {
      if (h) {
        if (!Dt.isError(h) || u)
          return void n(h, p);
        s.push(h);
      }
      if (!f || !c || !this._typeCheck(p)) {
        n(s[0] || null, p);
        return;
      }
      d = d || p;
      let v = new Array(p.length);
      for (let g = 0; g < p.length; g++) {
        let m = p[g], y = `${r.path || ""}[${g}]`, _ = _l({}, r, {
          path: y,
          strict: !0,
          parent: p,
          index: g,
          originalValue: d[g]
        });
        v[g] = (x, b) => c.validate(m, _, b);
      }
      vl({
        sync: o,
        path: l,
        value: p,
        errors: s,
        endEarly: u,
        tests: v
      }, n);
    });
  }
  clone(t) {
    const r = super.clone(t);
    return r.innerType = this.innerType, r;
  }
  concat(t) {
    let r = super.concat(t);
    return r.innerType = this.innerType, t.innerType && (r.innerType = r.innerType ? (
      // @ts-expect-error Lazy doesn't have concat()
      r.innerType.concat(t.innerType)
    ) : t.innerType), r;
  }
  of(t) {
    let r = this.clone();
    if (!aa(t))
      throw new TypeError("`array.of()` sub-schema must be a valid yup schema not: " + Li(t));
    return r.innerType = t, r;
  }
  length(t, r = yo.length) {
    return this.test({
      message: r,
      name: "length",
      exclusive: !0,
      params: {
        length: t
      },
      test(n) {
        return Le(n) || n.length === this.resolve(t);
      }
    });
  }
  min(t, r) {
    return r = r || yo.min, this.test({
      message: r,
      name: "min",
      exclusive: !0,
      params: {
        min: t
      },
      // FIXME(ts): Array<typeof T>
      test(n) {
        return Le(n) || n.length >= this.resolve(t);
      }
    });
  }
  max(t, r) {
    return r = r || yo.max, this.test({
      message: r,
      name: "max",
      exclusive: !0,
      params: {
        max: t
      },
      test(n) {
        return Le(n) || n.length <= this.resolve(t);
      }
    });
  }
  ensure() {
    return this.default(() => []).transform((t, r) => this._typeCheck(t) ? t : r == null ? [] : [].concat(r));
  }
  compact(t) {
    let r = t ? (n, i, a) => !t(n, i, a) : (n) => !!n;
    return this.transform((n) => n != null ? n.filter(r) : n);
  }
  describe() {
    let t = super.describe();
    return this.innerType && (t.innerType = this.innerType.describe()), t;
  }
  nullable(t = !0) {
    return super.nullable(t);
  }
  defined() {
    return super.defined();
  }
  required(t) {
    return super.required(t);
  }
}
V_.prototype = Dd.prototype;
function ure(e) {
  return new fre(e);
}
class fre {
  constructor(t) {
    this.type = "lazy", this.__isYupSchema__ = !0, this.__inputType = void 0, this.__outputType = void 0, this._resolve = (r, n = {}) => {
      let i = this.builder(r, n);
      if (!aa(i))
        throw new TypeError("lazy() functions must return a valid schema");
      return i.resolve(n);
    }, this.builder = t;
  }
  resolve(t) {
    return this._resolve(t.value, t);
  }
  cast(t, r) {
    return this._resolve(t, r).cast(t, r);
  }
  validate(t, r, n) {
    return this._resolve(t, r).validate(t, r, n);
  }
  validateSync(t, r) {
    return this._resolve(t, r).validateSync(t, r);
  }
  validateAt(t, r, n) {
    return this._resolve(r, n).validateAt(t, r, n);
  }
  validateSyncAt(t, r, n) {
    return this._resolve(r, n).validateSyncAt(t, r, n);
  }
  describe() {
    return null;
  }
  isValid(t, r) {
    return this._resolve(t, r).isValid(t, r);
  }
  isValidSync(t, r) {
    return this._resolve(t, r).isValidSync(t, r);
  }
}
function dre(e) {
  Object.keys(e).forEach((t) => {
    Object.keys(e[t]).forEach((r) => {
      OY[t][r] = e[t][r];
    });
  });
}
function hre(e, t, r) {
  if (!e || !aa(e.prototype))
    throw new TypeError("You must provide a yup schema constructor function");
  if (typeof t != "string")
    throw new TypeError("A Method name must be provided");
  if (typeof r != "function")
    throw new TypeError("Method function must be provided");
  e.prototype[t] = r;
}
const pre = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ArraySchema: Dd,
  BaseSchema: at,
  BooleanSchema: md,
  DateSchema: tc,
  MixedSchema: gd,
  NumberSchema: yd,
  ObjectSchema: $d,
  StringSchema: xd,
  ValidationError: Dt,
  addMethod: hre,
  array: V_,
  bool: Pf,
  boolean: Pf,
  date: _d,
  isSchema: aa,
  lazy: ure,
  mixed: g_,
  number: x_,
  object: H_,
  reach: FQ,
  ref: SQ,
  setLocale: dre,
  string: m_
}, Symbol.toStringTag, { value: "Module" })), vre = {
  只能為英文: "只能為英文",
  必須為數字: "必須為數字",
  必須為網址: "必須為網址",
  不能含特殊字元: "不能含特殊字元",
  必須為電子郵件: "必須為電子郵件"
}, gre = new H2({
  def: "zh-TW",
  locales: {
    "zh-TW": vre,
    "zh-CN": {
      只能為英文: "只能为英文",
      必須為數字: "必须为数字",
      必須為網址: "必须为网址",
      不能含特殊字元: "不能含特殊字元",
      必須為電子郵件: "必须为电子邮件"
    },
    "en-US": {
      只能為英文: "Only English",
      必須為數字: "Must be a number",
      必須為網址: "Must be a URL",
      不能含特殊字元: "Cannot contain special characters",
      必須為電子郵件: "Must be an email"
    }
  }
}), mre = (e) => {
  const t = (r) => gre.key(r).get(e);
  return {
    text: {
      handler: (r, n) => {
        let i = r.string();
        return n && n.min != null && (i = i.min(n.min)), n && n.max != null && (i = i.max(n.max)), i;
      }
    },
    number: {
      handler: (r, n) => {
        let i = r.number();
        return n && n.min != null && (i = i.min(n.min)), n && n.max != null && (i = i.max(n.max)), i.typeError(t("必須為數字"));
      }
    },
    enum: {
      handler: (r, n) => r.string().oneOf((n == null ? void 0 : n.keys) || [])
    },
    email: {
      handler: (r) => r.string().trim().email(t("必須為電子郵件"))
    },
    url: {
      handler: (r) => r.string().trim().url(t("必須為網址"))
    },
    english: {
      handler: (r) => r.string().trim().matches(/^[^\u4e00-\u9eff]+$/, t("只能為英文"))
    },
    excludeSpecialChars: {
      handler: (r) => r.string().matches(/^[^()[\]{}<>+*/?"_\\|~`!@#$%^&=]*$/, t("不能含特殊字元"))
    }
  };
}, xre = Kt.checkout("validate");
class yre {
  constructor(t, r) {
    G(this, "provider");
    G(this, "properties");
    this.provider = t, this.properties = r;
  }
  get(t, r = {}) {
    return this.properties[t].handler.bind(this.provider, r);
  }
  isRequire(t) {
    return this.properties[t].required;
  }
  verify(t) {
    for (let r in this.properties) {
      let n = this.get(r)(t[r]);
      if (n !== !0)
        return n;
    }
    return !0;
  }
  verifyBy(t, r) {
    return this.get(t)(r);
  }
}
const jm = (e) => typeof e == "string" && e.trim() === "" || e == null, zm = ({ rule: e, required: t, requireMessage: r, meta: n }) => ({
  required: t,
  handler: (i, a) => {
    let s = i.required == null ? t : i.required;
    if (s && jm(a))
      return e.requireMessage ? e.requireMessage() : r();
    if (s === !1 && jm(a))
      return !0;
    try {
      e.handler(pre, n[0]).notRequired().validateSync(a);
    } catch (o) {
      return typeof o == "string" ? o : o.errors[0];
    }
    return !0;
  }
});
class bre {
  constructor(t) {
    G(this, "options", {
      rules: {},
      requireMessage: () => "required"
    });
    t && Object.assign(this.options, t);
  }
  static getBasicRules(t = "zh-TW") {
    return mre(t);
  }
  getRule(t, r, ...n) {
    let i = this.options.rules[t];
    if (i == null)
      throw xre.create(`Rule ${t} not found.`);
    return zm({
      meta: n,
      required: r,
      requireMessage: this.options.requireMessage,
      rule: i
    });
  }
  customize(t) {
    return zm({
      meta: [],
      required: t.required,
      requireMessage: this.options.requireMessage,
      rule: t
    });
  }
  defineValidation(t) {
    return new yre(this, t(this.getRule.bind(this), this.customize.bind(this)));
  }
}
class Ed {
  static inWorker() {
    return typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope;
  }
  static define(t) {
    if (Ed.inWorker()) {
      const r = new El({
        concurrentExecutions: 1
      }), n = new mt(), i = t(n);
      n.on("*", ({ data: a, event: s }) => {
        self.postMessage({
          name: s,
          type: "event",
          data: a
        });
      }), self.addEventListener("message", (a) => {
        const { id: s, type: o, name: l, data: c } = a.data;
        o === "method" && i[l] ? r.push("", async () => {
          try {
            const u = await i[l](...c);
            self.postMessage({
              id: s,
              name: l,
              type: o,
              data: u
            });
          } catch (u) {
            self.postMessage({
              id: s,
              name: l,
              type: o,
              error: u
            });
          }
        }) : self.postMessage({
          id: s,
          name: l,
          type: o,
          error: new Error(`Method ${l} not found`)
        });
      });
    }
    return {
      _event: null,
      _methods: null,
      createInMainProcess: () => {
        const r = new mt(), n = t(r), i = {
          isClosed: !1
        };
        return {
          on: r.on.bind(r),
          methods: n,
          terminate: () => {
            i.isClosed === !1 && (i.isClosed = !0, r.listeners.clear());
          }
        };
      }
    };
  }
  static from(t) {
    const r = {
      isClosed: !1
    }, n = typeof t == "function" ? new t() : t, i = new mt(), a = new mt(), s = new Kf(n);
    s.add("message", (l) => {
      let { id: c, type: u, name: f, data: d } = l.data;
      u === "event" && i.emit(f, d), u === "method" && a.emit(c, l.data);
    });
    const o = new Proxy({}, {
      get(l, c) {
        return (...u) => r.isClosed ? Promise.reject(new Error("Worker is closed")) : new Promise((f, d) => {
          const h = pn.createUuid();
          a.on(h, (p, { off: v }) => {
            v(), p.error ? d(p.error) : f(p.data);
          }), n.postMessage({
            id: h,
            type: "method",
            name: c,
            data: u
          });
        });
      }
    });
    return {
      on: i.on.bind(i),
      methods: o,
      terminate: () => {
        r.isClosed === !1 && (r.isClosed = !0, s.clear(), i.listeners.clear(), a.listeners.clear(), n.terminate());
      }
    };
  }
}
class _re extends V2 {
  constructor() {
    super({
      name: "root",
      interceptorMessage(r) {
        return A0(r, "Error!");
      }
    });
    const t = () => {
      As().stage !== "prod" && (console.log("interaction fail:"), console.log(this), this.each((n) => {
        const i = new Date(n.createdAt).toISOString();
        console.log(`[${i}]${n.checkoutAt} => ${n.type}: ${n.message}`);
      }));
    };
    this.on("action", (r) => {
      r.type === "wrong" && t(), r.type === "notify" && r.level === "danger" && t();
    });
  }
  use(t = "") {
    return this.checkout(t);
  }
}
class Y_ {
  constructor(t) {
    G(this, "params");
    G(this, "aliveMap", /* @__PURE__ */ new Map());
    this.params = t;
  }
  toKey(t) {
    return this.params.ns() + "/" + t;
  }
  create(t, r) {
    const n = Kh(), i = this.toKey(t);
    if (this.aliveMap.has(i))
      return this.aliveMap.get(i);
    let a;
    try {
      a = n.get(i);
    } catch {
      a = r;
    }
    const s = Ce(So.setMapValue(r, a));
    return pe(() => s, () => n.set(i, s), {
      deep: !0
    }), this.aliveMap.set(i, s), s;
  }
  remove(t) {
    Kh().remove(this.toKey(t));
  }
}
const wre = new Y_({
  ns: () => {
    const e = As();
    return `lib-query-sync-${e.service}-${e.stage}`;
  }
});
class W_ {
}
G(W_, "define", (t) => {
  const r = t.ns(), n = t.defs(), i = t.persist ? wre.create(r, t.defs()) : Ce(t.defs()), a = {
    installed: !1
  };
  return () => {
    const s = t.router(), o = (y) => `l-${r}-${y}`, l = new mt(), c = X1(() => {
      let y = s.getCurrentRoute();
      y.query && d(y.query);
    }, 25), u = new Al({
      delay: 100,
      maxValueLength: 100
    });
    u.on("trigger", ({ values: y }) => {
      l.emit("change", {
        keys: Y2.unique(y)
      });
    });
    const f = () => {
      const y = t.defs(), _ = {};
      for (let x in y) {
        _[o(x)] = void 0;
        let b = i[x];
        b != null && b !== y[x] && (Array.isArray(b) && Array.isArray(y[x]) && b.join(",") === y[x].join(",") || (_[o(x)] = b));
      }
      s.pushQuery(_);
    }, d = (y) => {
      const _ = t.defs();
      for (let x in _) {
        let b = y[o(x)];
        if (b) {
          if (Array.isArray(_[x])) {
            Array.isArray(b) ? i[x] && b.toString() !== i[x].toString() && (i[x] = b) : i[x] && b.toString() !== i[x].toString() && (i[x] = [b]);
            continue;
          }
          if (typeof _[x] == "string") {
            b !== i[x] && (i[x] = b);
            continue;
          }
        } else
          i[x] !== _[x] && (i[x] = _[x]);
      }
    };
    d(s.getCurrentRoute().query);
    const h = s.on("after", () => c.input(""));
    Et(() => {
      h.off(), u.close();
    });
    for (let y in i)
      pe(() => i[y], () => {
        f(), l.emit("input", { key: y }), u.input(y);
      }, {
        deep: !0
      });
    const m = {
      state: i,
      reset: () => {
        Object.assign(i, t.defs());
      },
      event: l,
      isChange: () => So.simpleCheckDeepDiff(n, i),
      stateToQuery: f,
      paramsToQuery: (y) => {
        const _ = {};
        for (let x in y)
          _[o(x)] = y[x];
        return _;
      }
    };
    return a.installed === !1 && (a.installed = !0, t.install && t.install(m)), m;
  };
});
const Ad = async (e) => {
  let t = 1, r = [], n = 100;
  for (; n > 0; ) {
    let i = await e.fetch(t);
    if (r.push(...e.pick(i)), t += 1, n -= 1, e.done(i))
      break;
  }
  return r;
}, $re = async (e) => await Ad({
  done: (r) => r.meta.pagination.total <= r.meta.pagination.page * r.meta.pagination.pageSize,
  pick: (r) => r.data,
  fetch: async (r) => await e(r)
}), Dre = async (e) => await Ad({
  pick: (r) => r.data,
  done: (r) => !r.links.next,
  fetch: async (r) => await e(r)
});
function U_(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Ere } = Object.prototype, { getPrototypeOf: Cd } = Object, rc = /* @__PURE__ */ ((e) => (t) => {
  const r = Ere.call(t);
  return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), br = (e) => (e = e.toLowerCase(), (t) => rc(t) === e), nc = (e) => (t) => typeof t === e, { isArray: la } = Array, os = nc("undefined");
function Are(e) {
  return e !== null && !os(e) && e.constructor !== null && !os(e.constructor) && Ut(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const q_ = br("ArrayBuffer");
function Cre(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && q_(e.buffer), t;
}
const Sre = nc("string"), Ut = nc("function"), G_ = nc("number"), ic = (e) => e !== null && typeof e == "object", kre = (e) => e === !0 || e === !1, bo = (e) => {
  if (rc(e) !== "object")
    return !1;
  const t = Cd(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, Ore = br("Date"), Fre = br("File"), Tre = br("Blob"), Mre = br("FileList"), Pre = (e) => ic(e) && Ut(e.pipe), Bre = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || Ut(e.append) && ((t = rc(e)) === "formdata" || // detect form-data instance
  t === "object" && Ut(e.toString) && e.toString() === "[object FormData]"));
}, Ire = br("URLSearchParams"), Rre = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function $s(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let n, i;
  if (typeof e != "object" && (e = [e]), la(e))
    for (n = 0, i = e.length; n < i; n++)
      t.call(null, e[n], n, e);
  else {
    const a = r ? Object.getOwnPropertyNames(e) : Object.keys(e), s = a.length;
    let o;
    for (n = 0; n < s; n++)
      o = a[n], t.call(null, e[o], o, e);
  }
}
function K_(e, t) {
  t = t.toLowerCase();
  const r = Object.keys(e);
  let n = r.length, i;
  for (; n-- > 0; )
    if (i = r[n], t === i.toLowerCase())
      return i;
  return null;
}
const Z_ = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, X_ = (e) => !os(e) && e !== Z_;
function Rf() {
  const { caseless: e } = X_(this) && this || {}, t = {}, r = (n, i) => {
    const a = e && K_(t, i) || i;
    bo(t[a]) && bo(n) ? t[a] = Rf(t[a], n) : bo(n) ? t[a] = Rf({}, n) : la(n) ? t[a] = n.slice() : t[a] = n;
  };
  for (let n = 0, i = arguments.length; n < i; n++)
    arguments[n] && $s(arguments[n], r);
  return t;
}
const Nre = (e, t, r, { allOwnKeys: n } = {}) => ($s(t, (i, a) => {
  r && Ut(i) ? e[a] = U_(i, r) : e[a] = i;
}, { allOwnKeys: n }), e), Lre = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), jre = (e, t, r, n) => {
  e.prototype = Object.create(t.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), r && Object.assign(e.prototype, r);
}, zre = (e, t, r, n) => {
  let i, a, s;
  const o = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (i = Object.getOwnPropertyNames(e), a = i.length; a-- > 0; )
      s = i[a], (!n || n(s, e, t)) && !o[s] && (t[s] = e[s], o[s] = !0);
    e = r !== !1 && Cd(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}, Hre = (e, t, r) => {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  const n = e.indexOf(t, r);
  return n !== -1 && n === r;
}, Vre = (e) => {
  if (!e)
    return null;
  if (la(e))
    return e;
  let t = e.length;
  if (!G_(t))
    return null;
  const r = new Array(t);
  for (; t-- > 0; )
    r[t] = e[t];
  return r;
}, Yre = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Cd(Uint8Array)), Wre = (e, t) => {
  const n = (e && e[Symbol.iterator]).call(e);
  let i;
  for (; (i = n.next()) && !i.done; ) {
    const a = i.value;
    t.call(e, a[0], a[1]);
  }
}, Ure = (e, t) => {
  let r;
  const n = [];
  for (; (r = e.exec(t)) !== null; )
    n.push(r);
  return n;
}, qre = br("HTMLFormElement"), Gre = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, n, i) {
    return n.toUpperCase() + i;
  }
), Hm = (({ hasOwnProperty: e }) => (t, r) => e.call(t, r))(Object.prototype), Kre = br("RegExp"), J_ = (e, t) => {
  const r = Object.getOwnPropertyDescriptors(e), n = {};
  $s(r, (i, a) => {
    let s;
    (s = t(i, a, e)) !== !1 && (n[a] = s || i);
  }), Object.defineProperties(e, n);
}, Zre = (e) => {
  J_(e, (t, r) => {
    if (Ut(e) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const n = e[r];
    if (Ut(n)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, Xre = (e, t) => {
  const r = {}, n = (i) => {
    i.forEach((a) => {
      r[a] = !0;
    });
  };
  return la(e) ? n(e) : n(String(e).split(t)), r;
}, Jre = () => {
}, Qre = (e, t) => (e = +e, Number.isFinite(e) ? e : t), Eu = "abcdefghijklmnopqrstuvwxyz", Vm = "0123456789", Q_ = {
  DIGIT: Vm,
  ALPHA: Eu,
  ALPHA_DIGIT: Eu + Eu.toUpperCase() + Vm
}, ene = (e = 16, t = Q_.ALPHA_DIGIT) => {
  let r = "";
  const { length: n } = t;
  for (; e--; )
    r += t[Math.random() * n | 0];
  return r;
};
function tne(e) {
  return !!(e && Ut(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const rne = (e) => {
  const t = new Array(10), r = (n, i) => {
    if (ic(n)) {
      if (t.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        t[i] = n;
        const a = la(n) ? [] : {};
        return $s(n, (s, o) => {
          const l = r(s, i + 1);
          !os(l) && (a[o] = l);
        }), t[i] = void 0, a;
      }
    }
    return n;
  };
  return r(e, 0);
}, nne = br("AsyncFunction"), ine = (e) => e && (ic(e) || Ut(e)) && Ut(e.then) && Ut(e.catch), L = {
  isArray: la,
  isArrayBuffer: q_,
  isBuffer: Are,
  isFormData: Bre,
  isArrayBufferView: Cre,
  isString: Sre,
  isNumber: G_,
  isBoolean: kre,
  isObject: ic,
  isPlainObject: bo,
  isUndefined: os,
  isDate: Ore,
  isFile: Fre,
  isBlob: Tre,
  isRegExp: Kre,
  isFunction: Ut,
  isStream: Pre,
  isURLSearchParams: Ire,
  isTypedArray: Yre,
  isFileList: Mre,
  forEach: $s,
  merge: Rf,
  extend: Nre,
  trim: Rre,
  stripBOM: Lre,
  inherits: jre,
  toFlatObject: zre,
  kindOf: rc,
  kindOfTest: br,
  endsWith: Hre,
  toArray: Vre,
  forEachEntry: Wre,
  matchAll: Ure,
  isHTMLForm: qre,
  hasOwnProperty: Hm,
  hasOwnProp: Hm,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: J_,
  freezeMethods: Zre,
  toObjectSet: Xre,
  toCamelCase: Gre,
  noop: Jre,
  toFiniteNumber: Qre,
  findKey: K_,
  global: Z_,
  isContextDefined: X_,
  ALPHABET: Q_,
  generateString: ene,
  isSpecCompliantForm: tne,
  toJSONObject: rne,
  isAsyncFn: nne,
  isThenable: ine
};
function we(e, t, r, n, i) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), r && (this.config = r), n && (this.request = n), i && (this.response = i);
}
L.inherits(we, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: L.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const e2 = we.prototype, t2 = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  t2[e] = { value: e };
});
Object.defineProperties(we, t2);
Object.defineProperty(e2, "isAxiosError", { value: !0 });
we.from = (e, t, r, n, i, a) => {
  const s = Object.create(e2);
  return L.toFlatObject(e, s, function(l) {
    return l !== Error.prototype;
  }, (o) => o !== "isAxiosError"), we.call(s, e.message, t, r, n, i), s.cause = e, s.name = e.name, a && Object.assign(s, a), s;
};
const ane = null;
function Nf(e) {
  return L.isPlainObject(e) || L.isArray(e);
}
function r2(e) {
  return L.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Ym(e, t, r) {
  return e ? e.concat(t).map(function(i, a) {
    return i = r2(i), !r && a ? "[" + i + "]" : i;
  }).join(r ? "." : "") : t;
}
function sne(e) {
  return L.isArray(e) && !e.some(Nf);
}
const one = L.toFlatObject(L, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function ac(e, t, r) {
  if (!L.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), r = L.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(v, g) {
    return !L.isUndefined(g[v]);
  });
  const n = r.metaTokens, i = r.visitor || u, a = r.dots, s = r.indexes, l = (r.Blob || typeof Blob < "u" && Blob) && L.isSpecCompliantForm(t);
  if (!L.isFunction(i))
    throw new TypeError("visitor must be a function");
  function c(p) {
    if (p === null)
      return "";
    if (L.isDate(p))
      return p.toISOString();
    if (!l && L.isBlob(p))
      throw new we("Blob is not supported. Use a Buffer instead.");
    return L.isArrayBuffer(p) || L.isTypedArray(p) ? l && typeof Blob == "function" ? new Blob([p]) : Buffer.from(p) : p;
  }
  function u(p, v, g) {
    let m = p;
    if (p && !g && typeof p == "object") {
      if (L.endsWith(v, "{}"))
        v = n ? v : v.slice(0, -2), p = JSON.stringify(p);
      else if (L.isArray(p) && sne(p) || (L.isFileList(p) || L.endsWith(v, "[]")) && (m = L.toArray(p)))
        return v = r2(v), m.forEach(function(_, x) {
          !(L.isUndefined(_) || _ === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            s === !0 ? Ym([v], x, a) : s === null ? v : v + "[]",
            c(_)
          );
        }), !1;
    }
    return Nf(p) ? !0 : (t.append(Ym(g, v, a), c(p)), !1);
  }
  const f = [], d = Object.assign(one, {
    defaultVisitor: u,
    convertValue: c,
    isVisitable: Nf
  });
  function h(p, v) {
    if (!L.isUndefined(p)) {
      if (f.indexOf(p) !== -1)
        throw Error("Circular reference detected in " + v.join("."));
      f.push(p), L.forEach(p, function(m, y) {
        (!(L.isUndefined(m) || m === null) && i.call(
          t,
          m,
          L.isString(y) ? y.trim() : y,
          v,
          d
        )) === !0 && h(m, v ? v.concat(y) : [y]);
      }), f.pop();
    }
  }
  if (!L.isObject(e))
    throw new TypeError("data must be an object");
  return h(e), t;
}
function Wm(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(n) {
    return t[n];
  });
}
function Sd(e, t) {
  this._pairs = [], e && ac(e, this, t);
}
const n2 = Sd.prototype;
n2.append = function(t, r) {
  this._pairs.push([t, r]);
};
n2.toString = function(t) {
  const r = t ? function(n) {
    return t.call(this, n, Wm);
  } : Wm;
  return this._pairs.map(function(i) {
    return r(i[0]) + "=" + r(i[1]);
  }, "").join("&");
};
function lne(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function i2(e, t, r) {
  if (!t)
    return e;
  const n = r && r.encode || lne, i = r && r.serialize;
  let a;
  if (i ? a = i(t, r) : a = L.isURLSearchParams(t) ? t.toString() : new Sd(t, r).toString(n), a) {
    const s = e.indexOf("#");
    s !== -1 && (e = e.slice(0, s)), e += (e.indexOf("?") === -1 ? "?" : "&") + a;
  }
  return e;
}
class Um {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, r, n) {
    return this.handlers.push({
      fulfilled: t,
      rejected: r,
      synchronous: n ? n.synchronous : !1,
      runWhen: n ? n.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    L.forEach(this.handlers, function(n) {
      n !== null && t(n);
    });
  }
}
const a2 = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, cne = typeof URLSearchParams < "u" ? URLSearchParams : Sd, une = typeof FormData < "u" ? FormData : null, fne = typeof Blob < "u" ? Blob : null, dne = {
  isBrowser: !0,
  classes: {
    URLSearchParams: cne,
    FormData: une,
    Blob: fne
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, s2 = typeof window < "u" && typeof document < "u", hne = ((e) => s2 && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(typeof navigator < "u" && navigator.product), pne = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", vne = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: s2,
  hasStandardBrowserEnv: hne,
  hasStandardBrowserWebWorkerEnv: pne
}, Symbol.toStringTag, { value: "Module" })), pr = {
  ...vne,
  ...dne
};
function gne(e, t) {
  return ac(e, new pr.classes.URLSearchParams(), Object.assign({
    visitor: function(r, n, i, a) {
      return pr.isNode && L.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : a.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function mne(e) {
  return L.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function xne(e) {
  const t = {}, r = Object.keys(e);
  let n;
  const i = r.length;
  let a;
  for (n = 0; n < i; n++)
    a = r[n], t[a] = e[a];
  return t;
}
function o2(e) {
  function t(r, n, i, a) {
    let s = r[a++];
    if (s === "__proto__")
      return !0;
    const o = Number.isFinite(+s), l = a >= r.length;
    return s = !s && L.isArray(i) ? i.length : s, l ? (L.hasOwnProp(i, s) ? i[s] = [i[s], n] : i[s] = n, !o) : ((!i[s] || !L.isObject(i[s])) && (i[s] = []), t(r, n, i[s], a) && L.isArray(i[s]) && (i[s] = xne(i[s])), !o);
  }
  if (L.isFormData(e) && L.isFunction(e.entries)) {
    const r = {};
    return L.forEachEntry(e, (n, i) => {
      t(mne(n), i, r, 0);
    }), r;
  }
  return null;
}
function yne(e, t, r) {
  if (L.isString(e))
    try {
      return (t || JSON.parse)(e), L.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (r || JSON.stringify)(e);
}
const kd = {
  transitional: a2,
  adapter: ["xhr", "http"],
  transformRequest: [function(t, r) {
    const n = r.getContentType() || "", i = n.indexOf("application/json") > -1, a = L.isObject(t);
    if (a && L.isHTMLForm(t) && (t = new FormData(t)), L.isFormData(t))
      return i && i ? JSON.stringify(o2(t)) : t;
    if (L.isArrayBuffer(t) || L.isBuffer(t) || L.isStream(t) || L.isFile(t) || L.isBlob(t))
      return t;
    if (L.isArrayBufferView(t))
      return t.buffer;
    if (L.isURLSearchParams(t))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let o;
    if (a) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return gne(t, this.formSerializer).toString();
      if ((o = L.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
        const l = this.env && this.env.FormData;
        return ac(
          o ? { "files[]": t } : t,
          l && new l(),
          this.formSerializer
        );
      }
    }
    return a || i ? (r.setContentType("application/json", !1), yne(t)) : t;
  }],
  transformResponse: [function(t) {
    const r = this.transitional || kd.transitional, n = r && r.forcedJSONParsing, i = this.responseType === "json";
    if (t && L.isString(t) && (n && !this.responseType || i)) {
      const s = !(r && r.silentJSONParsing) && i;
      try {
        return JSON.parse(t);
      } catch (o) {
        if (s)
          throw o.name === "SyntaxError" ? we.from(o, we.ERR_BAD_RESPONSE, this, null, this.response) : o;
      }
    }
    return t;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: pr.classes.FormData,
    Blob: pr.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
L.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  kd.headers[e] = {};
});
const Od = kd, bne = L.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), _ne = (e) => {
  const t = {};
  let r, n, i;
  return e && e.split(`
`).forEach(function(s) {
    i = s.indexOf(":"), r = s.substring(0, i).trim().toLowerCase(), n = s.substring(i + 1).trim(), !(!r || t[r] && bne[r]) && (r === "set-cookie" ? t[r] ? t[r].push(n) : t[r] = [n] : t[r] = t[r] ? t[r] + ", " + n : n);
  }), t;
}, qm = Symbol("internals");
function Da(e) {
  return e && String(e).trim().toLowerCase();
}
function _o(e) {
  return e === !1 || e == null ? e : L.isArray(e) ? e.map(_o) : String(e);
}
function wne(e) {
  const t = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(e); )
    t[n[1]] = n[2];
  return t;
}
const $ne = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Au(e, t, r, n, i) {
  if (L.isFunction(n))
    return n.call(this, t, r);
  if (i && (t = r), !!L.isString(t)) {
    if (L.isString(n))
      return t.indexOf(n) !== -1;
    if (L.isRegExp(n))
      return n.test(t);
  }
}
function Dne(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, r, n) => r.toUpperCase() + n);
}
function Ene(e, t) {
  const r = L.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(e, n + r, {
      value: function(i, a, s) {
        return this[n].call(this, t, i, a, s);
      },
      configurable: !0
    });
  });
}
class sc {
  constructor(t) {
    t && this.set(t);
  }
  set(t, r, n) {
    const i = this;
    function a(o, l, c) {
      const u = Da(l);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const f = L.findKey(i, u);
      (!f || i[f] === void 0 || c === !0 || c === void 0 && i[f] !== !1) && (i[f || l] = _o(o));
    }
    const s = (o, l) => L.forEach(o, (c, u) => a(c, u, l));
    return L.isPlainObject(t) || t instanceof this.constructor ? s(t, r) : L.isString(t) && (t = t.trim()) && !$ne(t) ? s(_ne(t), r) : t != null && a(r, t, n), this;
  }
  get(t, r) {
    if (t = Da(t), t) {
      const n = L.findKey(this, t);
      if (n) {
        const i = this[n];
        if (!r)
          return i;
        if (r === !0)
          return wne(i);
        if (L.isFunction(r))
          return r.call(this, i, n);
        if (L.isRegExp(r))
          return r.exec(i);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, r) {
    if (t = Da(t), t) {
      const n = L.findKey(this, t);
      return !!(n && this[n] !== void 0 && (!r || Au(this, this[n], n, r)));
    }
    return !1;
  }
  delete(t, r) {
    const n = this;
    let i = !1;
    function a(s) {
      if (s = Da(s), s) {
        const o = L.findKey(n, s);
        o && (!r || Au(n, n[o], o, r)) && (delete n[o], i = !0);
      }
    }
    return L.isArray(t) ? t.forEach(a) : a(t), i;
  }
  clear(t) {
    const r = Object.keys(this);
    let n = r.length, i = !1;
    for (; n--; ) {
      const a = r[n];
      (!t || Au(this, this[a], a, t, !0)) && (delete this[a], i = !0);
    }
    return i;
  }
  normalize(t) {
    const r = this, n = {};
    return L.forEach(this, (i, a) => {
      const s = L.findKey(n, a);
      if (s) {
        r[s] = _o(i), delete r[a];
        return;
      }
      const o = t ? Dne(a) : String(a).trim();
      o !== a && delete r[a], r[o] = _o(i), n[o] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const r = /* @__PURE__ */ Object.create(null);
    return L.forEach(this, (n, i) => {
      n != null && n !== !1 && (r[i] = t && L.isArray(n) ? n.join(", ") : n);
    }), r;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, r]) => t + ": " + r).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...r) {
    const n = new this(t);
    return r.forEach((i) => n.set(i)), n;
  }
  static accessor(t) {
    const n = (this[qm] = this[qm] = {
      accessors: {}
    }).accessors, i = this.prototype;
    function a(s) {
      const o = Da(s);
      n[o] || (Ene(i, s), n[o] = !0);
    }
    return L.isArray(t) ? t.forEach(a) : a(t), this;
  }
}
sc.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
L.reduceDescriptors(sc.prototype, ({ value: e }, t) => {
  let r = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(n) {
      this[r] = n;
    }
  };
});
L.freezeMethods(sc);
const Mr = sc;
function Cu(e, t) {
  const r = this || Od, n = t || r, i = Mr.from(n.headers);
  let a = n.data;
  return L.forEach(e, function(o) {
    a = o.call(r, a, i.normalize(), t ? t.status : void 0);
  }), i.normalize(), a;
}
function l2(e) {
  return !!(e && e.__CANCEL__);
}
function Ds(e, t, r) {
  we.call(this, e ?? "canceled", we.ERR_CANCELED, t, r), this.name = "CanceledError";
}
L.inherits(Ds, we, {
  __CANCEL__: !0
});
function Ane(e, t, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? e(r) : t(new we(
    "Request failed with status code " + r.status,
    [we.ERR_BAD_REQUEST, we.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
const Cne = pr.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, r, n, i, a) {
      const s = [e + "=" + encodeURIComponent(t)];
      L.isNumber(r) && s.push("expires=" + new Date(r).toGMTString()), L.isString(n) && s.push("path=" + n), L.isString(i) && s.push("domain=" + i), a === !0 && s.push("secure"), document.cookie = s.join("; ");
    },
    read(e) {
      const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
      return t ? decodeURIComponent(t[3]) : null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function Sne(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function kne(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function c2(e, t) {
  return e && !Sne(t) ? kne(e, t) : t;
}
const One = pr.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const t = /(msie|trident)/i.test(navigator.userAgent), r = document.createElement("a");
    let n;
    function i(a) {
      let s = a;
      return t && (r.setAttribute("href", s), s = r.href), r.setAttribute("href", s), {
        href: r.href,
        protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
        host: r.host,
        search: r.search ? r.search.replace(/^\?/, "") : "",
        hash: r.hash ? r.hash.replace(/^#/, "") : "",
        hostname: r.hostname,
        port: r.port,
        pathname: r.pathname.charAt(0) === "/" ? r.pathname : "/" + r.pathname
      };
    }
    return n = i(window.location.href), function(s) {
      const o = L.isString(s) ? i(s) : s;
      return o.protocol === n.protocol && o.host === n.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  /* @__PURE__ */ function() {
    return function() {
      return !0;
    };
  }()
);
function Fne(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Tne(e, t) {
  e = e || 10;
  const r = new Array(e), n = new Array(e);
  let i = 0, a = 0, s;
  return t = t !== void 0 ? t : 1e3, function(l) {
    const c = Date.now(), u = n[a];
    s || (s = c), r[i] = l, n[i] = c;
    let f = a, d = 0;
    for (; f !== i; )
      d += r[f++], f = f % e;
    if (i = (i + 1) % e, i === a && (a = (a + 1) % e), c - s < t)
      return;
    const h = u && c - u;
    return h ? Math.round(d * 1e3 / h) : void 0;
  };
}
function Gm(e, t) {
  let r = 0;
  const n = Tne(50, 250);
  return (i) => {
    const a = i.loaded, s = i.lengthComputable ? i.total : void 0, o = a - r, l = n(o), c = a <= s;
    r = a;
    const u = {
      loaded: a,
      total: s,
      progress: s ? a / s : void 0,
      bytes: o,
      rate: l || void 0,
      estimated: l && s && c ? (s - a) / l : void 0,
      event: i
    };
    u[t ? "download" : "upload"] = !0, e(u);
  };
}
const Mne = typeof XMLHttpRequest < "u", Pne = Mne && function(e) {
  return new Promise(function(r, n) {
    let i = e.data;
    const a = Mr.from(e.headers).normalize();
    let { responseType: s, withXSRFToken: o } = e, l;
    function c() {
      e.cancelToken && e.cancelToken.unsubscribe(l), e.signal && e.signal.removeEventListener("abort", l);
    }
    let u;
    if (L.isFormData(i)) {
      if (pr.hasStandardBrowserEnv || pr.hasStandardBrowserWebWorkerEnv)
        a.setContentType(!1);
      else if ((u = a.getContentType()) !== !1) {
        const [v, ...g] = u ? u.split(";").map((m) => m.trim()).filter(Boolean) : [];
        a.setContentType([v || "multipart/form-data", ...g].join("; "));
      }
    }
    let f = new XMLHttpRequest();
    if (e.auth) {
      const v = e.auth.username || "", g = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      a.set("Authorization", "Basic " + btoa(v + ":" + g));
    }
    const d = c2(e.baseURL, e.url);
    f.open(e.method.toUpperCase(), i2(d, e.params, e.paramsSerializer), !0), f.timeout = e.timeout;
    function h() {
      if (!f)
        return;
      const v = Mr.from(
        "getAllResponseHeaders" in f && f.getAllResponseHeaders()
      ), m = {
        data: !s || s === "text" || s === "json" ? f.responseText : f.response,
        status: f.status,
        statusText: f.statusText,
        headers: v,
        config: e,
        request: f
      };
      Ane(function(_) {
        r(_), c();
      }, function(_) {
        n(_), c();
      }, m), f = null;
    }
    if ("onloadend" in f ? f.onloadend = h : f.onreadystatechange = function() {
      !f || f.readyState !== 4 || f.status === 0 && !(f.responseURL && f.responseURL.indexOf("file:") === 0) || setTimeout(h);
    }, f.onabort = function() {
      f && (n(new we("Request aborted", we.ECONNABORTED, e, f)), f = null);
    }, f.onerror = function() {
      n(new we("Network Error", we.ERR_NETWORK, e, f)), f = null;
    }, f.ontimeout = function() {
      let g = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const m = e.transitional || a2;
      e.timeoutErrorMessage && (g = e.timeoutErrorMessage), n(new we(
        g,
        m.clarifyTimeoutError ? we.ETIMEDOUT : we.ECONNABORTED,
        e,
        f
      )), f = null;
    }, pr.hasStandardBrowserEnv && (o && L.isFunction(o) && (o = o(e)), o || o !== !1 && One(d))) {
      const v = e.xsrfHeaderName && e.xsrfCookieName && Cne.read(e.xsrfCookieName);
      v && a.set(e.xsrfHeaderName, v);
    }
    i === void 0 && a.setContentType(null), "setRequestHeader" in f && L.forEach(a.toJSON(), function(g, m) {
      f.setRequestHeader(m, g);
    }), L.isUndefined(e.withCredentials) || (f.withCredentials = !!e.withCredentials), s && s !== "json" && (f.responseType = e.responseType), typeof e.onDownloadProgress == "function" && f.addEventListener("progress", Gm(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && f.upload && f.upload.addEventListener("progress", Gm(e.onUploadProgress)), (e.cancelToken || e.signal) && (l = (v) => {
      f && (n(!v || v.type ? new Ds(null, e, f) : v), f.abort(), f = null);
    }, e.cancelToken && e.cancelToken.subscribe(l), e.signal && (e.signal.aborted ? l() : e.signal.addEventListener("abort", l)));
    const p = Fne(d);
    if (p && pr.protocols.indexOf(p) === -1) {
      n(new we("Unsupported protocol " + p + ":", we.ERR_BAD_REQUEST, e));
      return;
    }
    f.send(i || null);
  });
}, Lf = {
  http: ane,
  xhr: Pne
};
L.forEach(Lf, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Km = (e) => `- ${e}`, Bne = (e) => L.isFunction(e) || e === null || e === !1, u2 = {
  getAdapter: (e) => {
    e = L.isArray(e) ? e : [e];
    const { length: t } = e;
    let r, n;
    const i = {};
    for (let a = 0; a < t; a++) {
      r = e[a];
      let s;
      if (n = r, !Bne(r) && (n = Lf[(s = String(r)).toLowerCase()], n === void 0))
        throw new we(`Unknown adapter '${s}'`);
      if (n)
        break;
      i[s || "#" + a] = n;
    }
    if (!n) {
      const a = Object.entries(i).map(
        ([o, l]) => `adapter ${o} ` + (l === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let s = t ? a.length > 1 ? `since :
` + a.map(Km).join(`
`) : " " + Km(a[0]) : "as no adapter specified";
      throw new we(
        "There is no suitable adapter to dispatch the request " + s,
        "ERR_NOT_SUPPORT"
      );
    }
    return n;
  },
  adapters: Lf
};
function Su(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Ds(null, e);
}
function Zm(e) {
  return Su(e), e.headers = Mr.from(e.headers), e.data = Cu.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), u2.getAdapter(e.adapter || Od.adapter)(e).then(function(n) {
    return Su(e), n.data = Cu.call(
      e,
      e.transformResponse,
      n
    ), n.headers = Mr.from(n.headers), n;
  }, function(n) {
    return l2(n) || (Su(e), n && n.response && (n.response.data = Cu.call(
      e,
      e.transformResponse,
      n.response
    ), n.response.headers = Mr.from(n.response.headers))), Promise.reject(n);
  });
}
const Xm = (e) => e instanceof Mr ? e.toJSON() : e;
function ji(e, t) {
  t = t || {};
  const r = {};
  function n(c, u, f) {
    return L.isPlainObject(c) && L.isPlainObject(u) ? L.merge.call({ caseless: f }, c, u) : L.isPlainObject(u) ? L.merge({}, u) : L.isArray(u) ? u.slice() : u;
  }
  function i(c, u, f) {
    if (L.isUndefined(u)) {
      if (!L.isUndefined(c))
        return n(void 0, c, f);
    } else
      return n(c, u, f);
  }
  function a(c, u) {
    if (!L.isUndefined(u))
      return n(void 0, u);
  }
  function s(c, u) {
    if (L.isUndefined(u)) {
      if (!L.isUndefined(c))
        return n(void 0, c);
    } else
      return n(void 0, u);
  }
  function o(c, u, f) {
    if (f in t)
      return n(c, u);
    if (f in e)
      return n(void 0, c);
  }
  const l = {
    url: a,
    method: a,
    data: a,
    baseURL: s,
    transformRequest: s,
    transformResponse: s,
    paramsSerializer: s,
    timeout: s,
    timeoutMessage: s,
    withCredentials: s,
    withXSRFToken: s,
    adapter: s,
    responseType: s,
    xsrfCookieName: s,
    xsrfHeaderName: s,
    onUploadProgress: s,
    onDownloadProgress: s,
    decompress: s,
    maxContentLength: s,
    maxBodyLength: s,
    beforeRedirect: s,
    transport: s,
    httpAgent: s,
    httpsAgent: s,
    cancelToken: s,
    socketPath: s,
    responseEncoding: s,
    validateStatus: o,
    headers: (c, u) => i(Xm(c), Xm(u), !0)
  };
  return L.forEach(Object.keys(Object.assign({}, e, t)), function(u) {
    const f = l[u] || i, d = f(e[u], t[u], u);
    L.isUndefined(d) && f !== o || (r[u] = d);
  }), r;
}
const f2 = "1.6.5", Fd = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Fd[e] = function(n) {
    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Jm = {};
Fd.transitional = function(t, r, n) {
  function i(a, s) {
    return "[Axios v" + f2 + "] Transitional option '" + a + "'" + s + (n ? ". " + n : "");
  }
  return (a, s, o) => {
    if (t === !1)
      throw new we(
        i(s, " has been removed" + (r ? " in " + r : "")),
        we.ERR_DEPRECATED
      );
    return r && !Jm[s] && (Jm[s] = !0, console.warn(
      i(
        s,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), t ? t(a, s, o) : !0;
  };
};
function Ine(e, t, r) {
  if (typeof e != "object")
    throw new we("options must be an object", we.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let i = n.length;
  for (; i-- > 0; ) {
    const a = n[i], s = t[a];
    if (s) {
      const o = e[a], l = o === void 0 || s(o, a, e);
      if (l !== !0)
        throw new we("option " + a + " must be " + l, we.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new we("Unknown option " + a, we.ERR_BAD_OPTION);
  }
}
const jf = {
  assertOptions: Ine,
  validators: Fd
}, Zr = jf.validators;
class wl {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new Um(),
      response: new Um()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  request(t, r) {
    typeof t == "string" ? (r = r || {}, r.url = t) : r = t || {}, r = ji(this.defaults, r);
    const { transitional: n, paramsSerializer: i, headers: a } = r;
    n !== void 0 && jf.assertOptions(n, {
      silentJSONParsing: Zr.transitional(Zr.boolean),
      forcedJSONParsing: Zr.transitional(Zr.boolean),
      clarifyTimeoutError: Zr.transitional(Zr.boolean)
    }, !1), i != null && (L.isFunction(i) ? r.paramsSerializer = {
      serialize: i
    } : jf.assertOptions(i, {
      encode: Zr.function,
      serialize: Zr.function
    }, !0)), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let s = a && L.merge(
      a.common,
      a[r.method]
    );
    a && L.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (p) => {
        delete a[p];
      }
    ), r.headers = Mr.concat(s, a);
    const o = [];
    let l = !0;
    this.interceptors.request.forEach(function(v) {
      typeof v.runWhen == "function" && v.runWhen(r) === !1 || (l = l && v.synchronous, o.unshift(v.fulfilled, v.rejected));
    });
    const c = [];
    this.interceptors.response.forEach(function(v) {
      c.push(v.fulfilled, v.rejected);
    });
    let u, f = 0, d;
    if (!l) {
      const p = [Zm.bind(this), void 0];
      for (p.unshift.apply(p, o), p.push.apply(p, c), d = p.length, u = Promise.resolve(r); f < d; )
        u = u.then(p[f++], p[f++]);
      return u;
    }
    d = o.length;
    let h = r;
    for (f = 0; f < d; ) {
      const p = o[f++], v = o[f++];
      try {
        h = p(h);
      } catch (g) {
        v.call(this, g);
        break;
      }
    }
    try {
      u = Zm.call(this, h);
    } catch (p) {
      return Promise.reject(p);
    }
    for (f = 0, d = c.length; f < d; )
      u = u.then(c[f++], c[f++]);
    return u;
  }
  getUri(t) {
    t = ji(this.defaults, t);
    const r = c2(t.baseURL, t.url);
    return i2(r, t.params, t.paramsSerializer);
  }
}
L.forEach(["delete", "get", "head", "options"], function(t) {
  wl.prototype[t] = function(r, n) {
    return this.request(ji(n || {}, {
      method: t,
      url: r,
      data: (n || {}).data
    }));
  };
});
L.forEach(["post", "put", "patch"], function(t) {
  function r(n) {
    return function(a, s, o) {
      return this.request(ji(o || {}, {
        method: t,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: a,
        data: s
      }));
    };
  }
  wl.prototype[t] = r(), wl.prototype[t + "Form"] = r(!0);
});
const wo = wl;
class Td {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function(a) {
      r = a;
    });
    const n = this;
    this.promise.then((i) => {
      if (!n._listeners)
        return;
      let a = n._listeners.length;
      for (; a-- > 0; )
        n._listeners[a](i);
      n._listeners = null;
    }), this.promise.then = (i) => {
      let a;
      const s = new Promise((o) => {
        n.subscribe(o), a = o;
      }).then(i);
      return s.cancel = function() {
        n.unsubscribe(a);
      }, s;
    }, t(function(a, s, o) {
      n.reason || (n.reason = new Ds(a, s, o), r(n.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const r = this._listeners.indexOf(t);
    r !== -1 && this._listeners.splice(r, 1);
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new Td(function(i) {
        t = i;
      }),
      cancel: t
    };
  }
}
const Rne = Td;
function Nne(e) {
  return function(r) {
    return e.apply(null, r);
  };
}
function Lne(e) {
  return L.isObject(e) && e.isAxiosError === !0;
}
const zf = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(zf).forEach(([e, t]) => {
  zf[t] = e;
});
const jne = zf;
function d2(e) {
  const t = new wo(e), r = U_(wo.prototype.request, t);
  return L.extend(r, wo.prototype, t, { allOwnKeys: !0 }), L.extend(r, t, null, { allOwnKeys: !0 }), r.create = function(i) {
    return d2(ji(e, i));
  }, r;
}
const je = d2(Od);
je.Axios = wo;
je.CanceledError = Ds;
je.CancelToken = Rne;
je.isCancel = l2;
je.VERSION = f2;
je.toFormData = ac;
je.AxiosError = we;
je.Cancel = je.CanceledError;
je.all = function(t) {
  return Promise.all(t);
};
je.spread = Nne;
je.isAxiosError = Lne;
je.mergeConfig = ji;
je.AxiosHeaders = Mr;
je.formToJSON = (e) => o2(L.isHTMLForm(e) ? new FormData(e) : e);
je.getAdapter = u2.getAdapter;
je.HttpStatusCode = jne;
je.default = je;
const h2 = new _x({
  key: () => "cache",
  keepAlive: W2.toMs("h", 1),
  pick: async () => {
    try {
      const { data: e } = await je.get("https://ipapi.co/json/");
      return {
        countryCode: e.country_code,
        lat: e.latitude,
        lng: e.longitude
      };
    } catch {
    }
    try {
      const { data: e } = await je.get("http://ip-api.com/json");
      return {
        countryCode: e.country,
        lat: e.lat,
        lng: e.lon
      };
    } catch {
    }
    return {
      countryCode: "",
      lat: 0,
      lng: 0
    };
  }
}), zne = async () => {
  try {
    return (await h2.get("")).countryCode === "CN";
  } catch {
  }
  try {
    return await je.get("https://google.com/generate_204"), !1;
  } catch {
  }
  return !0;
}, Hne = async () => {
  const e = await h2.get("");
  return {
    countryCode: e.countryCode,
    lat: e.lat,
    lng: e.lng
  };
}, Vne = () => ({
  total: 1,
  per_page: 1,
  current_page: 1,
  last_page: 1,
  from: 1,
  to: 1,
  data: []
}), Yne = () => ({
  msg: "",
  data: [],
  pagination: {
    page: 1,
    pageSize: 10,
    pageCount: 0,
    total: 0
  }
}), Wne = () => ({
  data: [],
  links: {
    first: "",
    last: "",
    prev: "",
    next: ""
  },
  meta: {
    current_page: 1,
    last_page: 0,
    total: 0,
    from: 0,
    path: "",
    per_page: 10,
    to: 0
  }
}), Une = () => ({
  data: [],
  meta: {
    pagination: {
      page: 1,
      pageSize: 10,
      pageCount: 0,
      total: 0
    }
  }
}), qne = (e, t) => {
  const r = "lib-v3", n = Object.assign({
    version: 1,
    ttl: {}
  }, t || {});
  return {
    get(i, a, { storage: s, isDefault: o, defaultValue: l }) {
      if (o)
        return a;
      const c = Date.now(), u = () => ss.decrypt("crypto-js", a.hash, `${e}/${r}`) !== JSON.stringify(a.data) || a.version !== n.version || a.expiredAt !== -1 && c > a.expiredAt;
      try {
        if (u()) {
          const f = l();
          return s.remove(i), f;
        } else
          return a.data;
      } catch {
        return s.remove(i), l();
      }
    },
    set(i, a) {
      let s = Date.now();
      return {
        hash: ss.encrypt("crypto-js", JSON.stringify(a), `${e}/${r}`),
        data: a,
        version: n.version,
        expiredAt: n.ttl[i] ? s + n.ttl[i] : -1,
        createdAt: s
      };
    }
  };
}, Gne = (e, t) => {
  const r = "lib-v3-a", n = Object.assign({
    version: 1,
    ttl: {}
  }, t || {});
  return {
    async get(i, a, { storage: s, isDefault: o, defaultValue: l }) {
      if (o)
        return a;
      const c = Date.now(), u = () => ss.decrypt("crypto-js", a.hash, `${e}/${r}`) !== JSON.stringify(a.data) || a.version !== n.version || a.expiredAt !== -1 && c > a.expiredAt;
      try {
        if (u()) {
          const f = await l();
          return await s.remove(i), f;
        } else
          return a.data;
      } catch {
        return await s.remove(i), await l();
      }
    },
    async set(i, a) {
      const s = Date.now();
      return {
        hash: ss.encrypt("crypto-js", JSON.stringify(a), `${e}/${r}`),
        data: a,
        version: n.version,
        expiredAt: n.ttl[i] ? s + n.ttl[i] : -1,
        createdAt: s
      };
    }
  };
}, Kne = (e) => e.map((t) => ({
  key: t.key == null ? pn.createUuid() : t.key,
  label: typeof t.label == "string" ? () => t.label : t.label,
  style: t.style == null ? () => "" : t.style,
  sortBtn: !!t.sortBtn,
  textAlign: t.textAlign || "center",
  formatter: t.formatter == null ? (r) => r : t.formatter,
  optionShow: t.optionShow == null ? !1 : t.optionShow
})), Zne = (e) => e, Xne = (e) => {
  const t = () => {
    const n = Ce(e.schema()), i = e.schema(), a = wj(), s = new mt();
    pe(() => n, () => s.emit("update", {}), {
      deep: !0
    });
    const o = () => {
      Object.assign(n, e.schema());
    }, l = () => {
      Object.assign(n, ro.jpjs(i));
    }, c = (m) => {
      Object.assign(n, So.setMapValue(n, m));
    }, u = (m) => {
      c(m), Object.assign(i, ro.jpjs(n));
    }, f = (m) => So.simpleCheckDeepDiff(n, m), v = {
      raw: () => ro.jpjs(n),
      diff: f,
      clear: o,
      reset: l,
      commit: u,
      assign: c,
      rebuild: () => {
        a.reset(), o(), Object.assign(i, e.schema()), s.emit("rebuild", {});
      },
      isModified: () => f(i)
    }, g = e.mixin({
      data: n,
      commit: u,
      stateManager: a
    });
    return {
      d: n,
      m: v,
      e: s,
      ...g
    };
  }, r = (n) => {
    let i = t();
    return n && i.commit(n), i;
  };
  return {
    _ModelType: null,
    _SchemaType: null,
    gen: t,
    from: r,
    /** 只獲取 schema */
    raw: () => e.schema(),
    /** 同步監聽資料變化 */
    sync: (n, i) => {
      const a = r(n);
      return pe(() => n, () => {
        a.m.diff(n) && a.m.assign(n);
      }, {
        deep: !0
      }), pe(() => a.d, () => {
        i && i(a.d);
      }, {
        deep: !0
      }), a;
    }
  };
};
class Jne {
  constructor(t) {
    G(this, "vueI18n");
    G(this, "namespace");
    this.vueI18n = t.vueI18n, this.namespace = t.namespace;
  }
  get t() {
    return this.vueI18n.global.t;
  }
  tt(t, ...r) {
    return t.slice(0, 2) === "##" ? Ya.replaceVar({
      end: "}",
      start: "{",
      text: t.slice(2).trim(),
      vars: r[0] || {}
    }) : this.vueI18n ? this.t(`${this.namespace}.${t}`, r[0]) : t;
  }
  path(t) {
    return `${this.namespace}.${t}`;
  }
  export(t) {
    return (r, ...n) => r.slice(0, 2) === "##" ? Ya.replaceVar({
      end: "}",
      start: "{",
      text: r.slice(2).trim(),
      vars: n[0] || {}
    }) : this.vueI18n ? this.t(`${this.namespace}.${r}`, t, n[0]).toString() : r;
  }
}
const p2 = (e) => {
  let t = [];
  if (e)
    for (let r of e)
      r && r.name && t.push(r.name.toString()), r.children && (t = t.concat(p2(r.children)));
  return t;
};
class Qne extends mt {
  constructor(r) {
    super();
    G(this, "params");
    G(this, "vueRouter");
    G(this, "interceptLeaves", /* @__PURE__ */ new Map());
    this.params = r, this.vueRouter = r.vueRouter, this.vueRouter.afterEach((n, i) => {
      this.emit("after", {
        to: n,
        from: i
      });
    }), this.vueRouter.beforeEach((n, i, a) => {
      this.emit("before", {
        to: n,
        from: i
      }), a();
    }), this.vueRouter.beforeEach(async () => {
      for (let [n, i] of this.interceptLeaves)
        try {
          await i(), this.interceptLeaves.delete(n);
        } catch {
          return !1;
        }
      return !0;
    });
  }
  get routeMap() {
    return new Set(p2(window.__ng_state.routerOptions.routes));
  }
  toHome() {
    this.vueRouter && (this.params.home ? this.to(this.params.home(), {}) : this.vueRouter.push("/"));
  }
  to(r, n, i) {
    this.vueRouter && (this.routeMap.has(r) ? this.vueRouter.push({
      name: r,
      params: n,
      query: i == null ? void 0 : i.query
    }) : this.toHome());
  }
  resolve(r, n, i) {
    if (this.vueRouter) {
      if (this.routeMap.has(r))
        return this.vueRouter.resolve({
          name: r,
          params: n,
          query: i == null ? void 0 : i.query
        });
      throw Kt.create(`Router ${r} not found.`);
    } else
      throw Kt.create("Router Plus not installed.");
  }
  hrefTo(r, n, i) {
    const { href: a } = this.resolve(r, n, i);
    location.href = a;
  }
  back(r = 1) {
    this.vueRouter && this.vueRouter.go(r * -1);
  }
  blank(r, n, i) {
    const { href: a } = this.resolve(r, n, i);
    window.open(a);
  }
  getCurrentRoute(r) {
    return this.vueRouter ? this.vueRouter.currentRoute.value : {
      name: "",
      query: {},
      params: {}
    };
  }
  interceptLeave(r) {
    const n = pn.createUuid();
    return this.interceptLeaves.set(n, r), {
      close: () => {
        this.interceptLeaves.delete(n);
      }
    };
  }
  defineTo(r, n, i) {
    return {
      name: r,
      params: n || {},
      ...i || {}
    };
  }
  async pushQuery(r) {
    if (this.vueRouter) {
      const n = this.getCurrentRoute(), i = {
        ...ro.jpjs(n.query),
        ...r
      };
      for (let a in i)
        if (i[a] == null) {
          delete i[a];
          continue;
        }
      await this.vueRouter.push({
        query: i
      });
    }
  }
}
const cse = ({ store: e, pinia: t }) => {
  e.$build = () => (Et(() => {
    e.$destroy();
  }), async () => {
    await e.$install();
  }), e.$install = async () => {
    e.__runInstall && await e.__runInstall();
  }, e.$destroy = () => {
    e.__runDestroy && e.__runDestroy(), e.$dispose(), delete t.state.value[e.$id];
  };
}, use = () => {
  const e = Ce({
    isDestroyed: !1,
    installStack: [],
    destroyStack: []
  });
  return {
    onInstall: (t) => {
      e.installStack.push(t);
    },
    onDestroy: (t) => {
      e.destroyStack.push(t);
    },
    isAlive: () => !e.isDestroyed,
    isDestroyed: () => e.isDestroyed,
    getOutput: (t) => Object.assign(t, {
      __runInstall: async () => {
        await Promise.all(e.installStack.map((r) => r()));
      },
      __runDestroy: () => {
        e.isDestroyed = !0;
        for (const r of e.destroyStack)
          r();
      },
      __lifrCycleState: e
    })
  };
}, eie = Kt.checkout("AppleAuth"), tie = "name email", ku = new mt();
function rie() {
  var e;
  if (!((e = window.__ng_state.aapple) != null && e.installed))
    throw eie.create("apple login not installed.");
}
class nie {
  static async install(t) {
    window.__ng_state.aapple == null && (window.__ng_state.aapple = {
      installed: !1
    }), window.__ng_state.aapple.installed === !1 && (await Hi.importScript("https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js"), window.AppleID.auth.init({
      clientId: t.clientId,
      redirectURI: "https//demo.com",
      scope: tie,
      state: "",
      usePopup: !1
    }), window.__ng_state.aapple.installed = !0);
  }
  static installed() {
    var t;
    return ((t = window.__ng_state.aapple) == null ? void 0 : t.installed) ?? !1;
  }
  static get on() {
    return ku.on.bind(ku);
  }
  /**
   * 如果是使用者自己關閉，則回傳 no-action
   */
  static async signIn(t) {
    rie();
    let r = await window.AppleID.auth.signIn({
      state: (t == null ? void 0 : t.state) ?? "",
      usePopup: (t == null ? void 0 : t.popup) ?? !0,
      redirectURI: t.redirectURI
    });
    return r.authorization.code && r.authorization.id_token ? (ku.emit("login", {
      token: r.authorization.id_token,
      user: r.user
    }), {
      status: "pass",
      response: r
    }) : {
      status: "no-action",
      response: null
    };
  }
}
/*! js-cookie v3.0.5 | MIT */
function Qs(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t];
    for (var n in r)
      e[n] = r[n];
  }
  return e;
}
var iie = {
  read: function(e) {
    return e[0] === '"' && (e = e.slice(1, -1)), e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
  },
  write: function(e) {
    return encodeURIComponent(e).replace(
      /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
      decodeURIComponent
    );
  }
};
function Hf(e, t) {
  function r(i, a, s) {
    if (!(typeof document > "u")) {
      s = Qs({}, t, s), typeof s.expires == "number" && (s.expires = new Date(Date.now() + s.expires * 864e5)), s.expires && (s.expires = s.expires.toUTCString()), i = encodeURIComponent(i).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
      var o = "";
      for (var l in s)
        s[l] && (o += "; " + l, s[l] !== !0 && (o += "=" + s[l].split(";")[0]));
      return document.cookie = i + "=" + e.write(a, i) + o;
    }
  }
  function n(i) {
    if (!(typeof document > "u" || arguments.length && !i)) {
      for (var a = document.cookie ? document.cookie.split("; ") : [], s = {}, o = 0; o < a.length; o++) {
        var l = a[o].split("="), c = l.slice(1).join("=");
        try {
          var u = decodeURIComponent(l[0]);
          if (s[u] = e.read(c, u), i === u)
            break;
        } catch {
        }
      }
      return i ? s[i] : s;
    }
  }
  return Object.create(
    {
      set: r,
      get: n,
      remove: function(i, a) {
        r(
          i,
          "",
          Qs({}, a, {
            expires: -1
          })
        );
      },
      withAttributes: function(i) {
        return Hf(this.converter, Qs({}, this.attributes, i));
      },
      withConverter: function(i) {
        return Hf(Qs({}, this.converter, i), this.attributes);
      }
    },
    {
      attributes: { value: Object.freeze(t) },
      converter: { value: Object.freeze(e) }
    }
  );
}
var aie = Hf(iie, { path: "/" });
function Vf(e) {
  this.message = e;
}
Vf.prototype = new Error(), Vf.prototype.name = "InvalidCharacterError";
var Qm = typeof window < "u" && window.atob && window.atob.bind(window) || function(e) {
  var t = String(e).replace(/=+$/, "");
  if (t.length % 4 == 1)
    throw new Vf("'atob' failed: The string to be decoded is not correctly encoded.");
  for (var r, n, i = 0, a = 0, s = ""; n = t.charAt(a++); ~n && (r = i % 4 ? 64 * r + n : n, i++ % 4) ? s += String.fromCharCode(255 & r >> (-2 * i & 6)) : 0)
    n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(n);
  return s;
};
function sie(e) {
  var t = e.replace(/-/g, "+").replace(/_/g, "/");
  switch (t.length % 4) {
    case 0:
      break;
    case 2:
      t += "==";
      break;
    case 3:
      t += "=";
      break;
    default:
      throw "Illegal base64url string!";
  }
  try {
    return function(r) {
      return decodeURIComponent(Qm(r).replace(/(.)/g, function(n, i) {
        var a = i.charCodeAt(0).toString(16).toUpperCase();
        return a.length < 2 && (a = "0" + a), "%" + a;
      }));
    }(t);
  } catch {
    return Qm(t);
  }
}
function $l(e) {
  this.message = e;
}
function oie(e, t) {
  if (typeof e != "string")
    throw new $l("Invalid token specified");
  var r = (t = t || {}).header === !0 ? 0 : 1;
  try {
    return JSON.parse(sie(e.split(".")[r]));
  } catch (n) {
    throw new $l("Invalid token specified: " + n.message);
  }
}
$l.prototype = new Error(), $l.prototype.name = "InvalidTokenError";
const $o = Kt.checkout("GoogleAuth"), Ou = new mt();
function ex() {
  var e;
  if (!((e = window.__ng_state.agoogle) != null && e.installed))
    throw $o.create("gsi not installed.");
}
class lie {
  static async install(t) {
    window.__ng_state.agoogle == null && (window.__ng_state.agoogle = {
      installed: !1
    }), window.__ng_state.agoogle.installed === !1 && (await Hi.importScript("https://accounts.google.com/gsi/client"), google.accounts.id.initialize({
      ux_mode: t.uxMode,
      client_id: t.clientId,
      login_uri: t.loginUri,
      auto_select: !1,
      callback: (r) => {
        Ou.emit("login", {
          token: r.credential,
          payload: oie(r.credential)
        });
      }
    }), window.__ng_state.agoogle.installed = !0);
  }
  static installed() {
    var t;
    return ((t = window.__ng_state.agoogle) == null ? void 0 : t.installed) ?? !1;
  }
  static get on() {
    return Ou.on.bind(Ou);
  }
  /** 渲染出登入按鈕 */
  static renderButton(t, r) {
    ex(), google.accounts.id.renderButton(t, r);
  }
  /**
   * 如果瀏覽器從未登入過 google 帳號，會打不開，並回傳 no-logged
   * 如果是使用者自己關閉，則回傳 no-action
   */
  static oneTap() {
    if (U2.inAppBrowser())
      throw $o.create("noSupportBrowser");
    return ex(), new Promise((t, r) => {
      aie.remove("g_state"), google.accounts.id.prompt((n) => {
        if (n.isNotDisplayed()) {
          let i = n.getNotDisplayedReason();
          i === "opt_out_or_no_session" ? t({
            status: "no-logged"
          }) : r($o.create(i));
        } else if (n.isSkippedMoment()) {
          let i = ["tap_outside", "user_cancel"], a = n.getSkippedReason();
          i.includes(a) ? t({
            status: "no-action"
          }) : r($o.create(a));
        } else
          n.getDismissedReason() === "credential_returned" && t({
            status: "pass"
          });
      });
    });
  }
}
const tx = "public_profile,email", v2 = Kt.checkout("FacebookAuth"), Fu = new mt();
function Tu() {
  var e;
  if (!((e = window.__ng_state.afb) != null && e.installed))
    throw v2.create("facebook sdk not installed.");
}
class cie {
  static async install(t) {
    window.__ng_state.afb == null && (window.__ng_state.afb = {
      installed: !1,
      clientId: ""
    }), window.__ng_state.afb.installed === !1 && (window.__ng_state.clientId = t.clientId, window.fbAsyncInit = () => {
      FB.init({
        appId: t.clientId,
        xfbml: !0,
        version: "v15.0"
      });
    }, await Hi.importScript("https://connect.facebook.net/en_US/sdk.js"), window.__ng_state.afb.installed = !0);
  }
  static installed() {
    var t;
    return ((t = window.__ng_state.afb) == null ? void 0 : t.installed) ?? !1;
  }
  static get on() {
    return Fu.on.bind(Fu);
  }
  /**
   * 如果是使用者自己關閉，則回傳 no-action
   */
  static signIn() {
    return Tu(), new Promise((t, r) => {
      FB.login((n) => {
        n.status === "connected" ? (Fu.emit("login", {
          token: n.authResponse.accessToken || ""
        }), t({
          status: "pass",
          response: n.authResponse
        })) : n.status === "unknown" ? t({
          status: "no-action",
          response: null
        }) : r(v2.create(n.status));
      }, {
        scope: tx
      });
    });
  }
  static signOut() {
    return Tu(), new Promise((t) => {
      FB.getLoginStatus((r) => {
        r.status === "connected" ? FB.logout((n) => {
          t(n);
        }) : t(null);
      });
    });
  }
  static getLoginUrl(t) {
    Tu();
    let r = new URL("https://www.facebook.com/v15.0/dialog/oauth");
    return r.searchParams.set("scope", tx), r.searchParams.set("client_id", window.__ng_state.clientId), r.searchParams.set("redirect_uri", t.redirectUri), r.searchParams.set("state", (t == null ? void 0 : t.state) ?? ""), r.href;
  }
  // TODO: app 內實作
  static async share(t) {
    return new Promise((r, n) => {
      FB.ui({
        display: "popup",
        method: "share",
        href: t.href
      }, (i) => {
        i.error_message ? n(i.error_message) : r(i);
      });
    });
  }
}
const uie = Kt.checkout("WechatAuth");
function fie() {
  var e;
  if (!((e = window.__ng_state.awechat) != null && e.installed))
    throw uie.create("gsi not installed.");
}
class die {
  static async install(t) {
    window.__ng_state.awechat == null && (window.__ng_state.awechat = {
      config: t,
      installed: !1
    }), window.__ng_state.awechat.installed === !1 && (await Hi.importScript("https://res.wx.qq.com/connect/zh_CN/htmledition/js/wxLogin.js"), window.__ng_state.awechat.installed = !0);
  }
  static installed() {
    var t;
    return ((t = window.__ng_state.awechat) == null ? void 0 : t.installed) ?? !1;
  }
  static isWeixinBrowser() {
    const t = navigator.userAgent.toLowerCase();
    return !!/micromessenger/.test(t);
  }
  /**
   * 網頁應用要用 qrcode 登入
   */
  static renderQrcode(t) {
    fie();
    const r = window.__ng_state.awechat.config;
    new window.WxLogin({
      id: t.containerId,
      appid: r.webAppId,
      scope: "snsapi_login",
      redirect_uri: encodeURIComponent(t.redirectUri),
      state: t.state ?? "",
      response_type: "code"
    });
  }
  /**
   * 獲取登入網址，這只能在微信 app 裡面使用，且要加入申請的微信公眾號
   */
  static getLoginUrl(t) {
    const r = new URL("https://open.weixin.qq.com/connect/oauth2/authorize"), n = window.__ng_state.awechat.config;
    return r.searchParams.set("appid", n.appId), r.searchParams.set("redirect_uri", t.redirectUri), r.searchParams.set("response_type", "code"), r.searchParams.set("scope", "snsapi_userinfo"), r.searchParams.set("state", (t == null ? void 0 : t.state) ?? ""), r.toString() + "#wechat_redirect";
  }
}
var Yf = function() {
  return Yf = Object.assign || function(t) {
    for (var r, n = 1, i = arguments.length; n < i; n++) {
      r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (t[a] = r[a]);
    }
    return t;
  }, Yf.apply(this, arguments);
};
function Yr(e, t, r, n) {
  function i(a) {
    return a instanceof r ? a : new r(function(s) {
      s(a);
    });
  }
  return new (r || (r = Promise))(function(a, s) {
    function o(u) {
      try {
        c(n.next(u));
      } catch (f) {
        s(f);
      }
    }
    function l(u) {
      try {
        c(n.throw(u));
      } catch (f) {
        s(f);
      }
    }
    function c(u) {
      u.done ? a(u.value) : i(u.value).then(o, l);
    }
    c((n = n.apply(e, t || [])).next());
  });
}
function Wr(e, t) {
  var r = { label: 0, sent: function() {
    if (a[0] & 1)
      throw a[1];
    return a[1];
  }, trys: [], ops: [] }, n, i, a, s;
  return s = { next: o(0), throw: o(1), return: o(2) }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function o(c) {
    return function(u) {
      return l([c, u]);
    };
  }
  function l(c) {
    if (n)
      throw new TypeError("Generator is already executing.");
    for (; s && (s = 0, c[0] && (r = 0)), r; )
      try {
        if (n = 1, i && (a = c[0] & 2 ? i.return : c[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, c[1])).done)
          return a;
        switch (i = 0, a && (c = [c[0] & 2, a.value]), c[0]) {
          case 0:
          case 1:
            a = c;
            break;
          case 4:
            return r.label++, { value: c[1], done: !1 };
          case 5:
            r.label++, i = c[1], c = [0];
            continue;
          case 7:
            c = r.ops.pop(), r.trys.pop();
            continue;
          default:
            if (a = r.trys, !(a = a.length > 0 && a[a.length - 1]) && (c[0] === 6 || c[0] === 2)) {
              r = 0;
              continue;
            }
            if (c[0] === 3 && (!a || c[1] > a[0] && c[1] < a[3])) {
              r.label = c[1];
              break;
            }
            if (c[0] === 6 && r.label < a[1]) {
              r.label = a[1], a = c;
              break;
            }
            if (a && r.label < a[2]) {
              r.label = a[2], r.ops.push(c);
              break;
            }
            a[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        c = t.call(e, r);
      } catch (u) {
        c = [6, u], i = 0;
      } finally {
        n = a = 0;
      }
    if (c[0] & 5)
      throw c[1];
    return { value: c[0] ? c[1] : void 0, done: !0 };
  }
}
function g2(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, i = t.length, a; n < i; n++)
      (a || !(n in t)) && (a || (a = Array.prototype.slice.call(t, 0, n)), a[n] = t[n]);
  return e.concat(a || Array.prototype.slice.call(t));
}
var m2 = "3.4.2";
function ls(e, t) {
  return new Promise(function(r) {
    return setTimeout(r, e, t);
  });
}
function hie(e, t) {
  t === void 0 && (t = 1 / 0);
  var r = window.requestIdleCallback;
  return r ? new Promise(function(n) {
    return r.call(window, function() {
      return n();
    }, { timeout: t });
  }) : ls(Math.min(e, t));
}
function x2(e) {
  return !!e && typeof e.then == "function";
}
function rx(e, t) {
  try {
    var r = e();
    x2(r) ? r.then(function(n) {
      return t(!0, n);
    }, function(n) {
      return t(!1, n);
    }) : t(!0, r);
  } catch (n) {
    t(!1, n);
  }
}
function nx(e, t, r) {
  return r === void 0 && (r = 16), Yr(this, void 0, void 0, function() {
    var n, i, a, s;
    return Wr(this, function(o) {
      switch (o.label) {
        case 0:
          n = Array(e.length), i = Date.now(), a = 0, o.label = 1;
        case 1:
          return a < e.length ? (n[a] = t(e[a], a), s = Date.now(), s >= i + r ? (i = s, [4, ls(0)]) : [3, 3]) : [3, 4];
        case 2:
          o.sent(), o.label = 3;
        case 3:
          return ++a, [3, 1];
        case 4:
          return [2, n];
      }
    });
  });
}
function cs(e) {
  e.then(void 0, function() {
  });
}
function Xr(e, t) {
  e = [e[0] >>> 16, e[0] & 65535, e[1] >>> 16, e[1] & 65535], t = [t[0] >>> 16, t[0] & 65535, t[1] >>> 16, t[1] & 65535];
  var r = [0, 0, 0, 0];
  return r[3] += e[3] + t[3], r[2] += r[3] >>> 16, r[3] &= 65535, r[2] += e[2] + t[2], r[1] += r[2] >>> 16, r[2] &= 65535, r[1] += e[1] + t[1], r[0] += r[1] >>> 16, r[1] &= 65535, r[0] += e[0] + t[0], r[0] &= 65535, [r[0] << 16 | r[1], r[2] << 16 | r[3]];
}
function zt(e, t) {
  e = [e[0] >>> 16, e[0] & 65535, e[1] >>> 16, e[1] & 65535], t = [t[0] >>> 16, t[0] & 65535, t[1] >>> 16, t[1] & 65535];
  var r = [0, 0, 0, 0];
  return r[3] += e[3] * t[3], r[2] += r[3] >>> 16, r[3] &= 65535, r[2] += e[2] * t[3], r[1] += r[2] >>> 16, r[2] &= 65535, r[2] += e[3] * t[2], r[1] += r[2] >>> 16, r[2] &= 65535, r[1] += e[1] * t[3], r[0] += r[1] >>> 16, r[1] &= 65535, r[1] += e[2] * t[2], r[0] += r[1] >>> 16, r[1] &= 65535, r[1] += e[3] * t[1], r[0] += r[1] >>> 16, r[1] &= 65535, r[0] += e[0] * t[3] + e[1] * t[2] + e[2] * t[1] + e[3] * t[0], r[0] &= 65535, [r[0] << 16 | r[1], r[2] << 16 | r[3]];
}
function li(e, t) {
  return t %= 64, t === 32 ? [e[1], e[0]] : t < 32 ? [e[0] << t | e[1] >>> 32 - t, e[1] << t | e[0] >>> 32 - t] : (t -= 32, [e[1] << t | e[0] >>> 32 - t, e[0] << t | e[1] >>> 32 - t]);
}
function Bt(e, t) {
  return t %= 64, t === 0 ? e : t < 32 ? [e[0] << t | e[1] >>> 32 - t, e[1] << t] : [e[1] << t - 32, 0];
}
function Re(e, t) {
  return [e[0] ^ t[0], e[1] ^ t[1]];
}
function ix(e) {
  return e = Re(e, [0, e[0] >>> 1]), e = zt(e, [4283543511, 3981806797]), e = Re(e, [0, e[0] >>> 1]), e = zt(e, [3301882366, 444984403]), e = Re(e, [0, e[0] >>> 1]), e;
}
function pie(e, t) {
  e = e || "", t = t || 0;
  var r = e.length % 16, n = e.length - r, i = [0, t], a = [0, t], s = [0, 0], o = [0, 0], l = [2277735313, 289559509], c = [1291169091, 658871167], u;
  for (u = 0; u < n; u = u + 16)
    s = [
      e.charCodeAt(u + 4) & 255 | (e.charCodeAt(u + 5) & 255) << 8 | (e.charCodeAt(u + 6) & 255) << 16 | (e.charCodeAt(u + 7) & 255) << 24,
      e.charCodeAt(u) & 255 | (e.charCodeAt(u + 1) & 255) << 8 | (e.charCodeAt(u + 2) & 255) << 16 | (e.charCodeAt(u + 3) & 255) << 24
    ], o = [
      e.charCodeAt(u + 12) & 255 | (e.charCodeAt(u + 13) & 255) << 8 | (e.charCodeAt(u + 14) & 255) << 16 | (e.charCodeAt(u + 15) & 255) << 24,
      e.charCodeAt(u + 8) & 255 | (e.charCodeAt(u + 9) & 255) << 8 | (e.charCodeAt(u + 10) & 255) << 16 | (e.charCodeAt(u + 11) & 255) << 24
    ], s = zt(s, l), s = li(s, 31), s = zt(s, c), i = Re(i, s), i = li(i, 27), i = Xr(i, a), i = Xr(zt(i, [0, 5]), [0, 1390208809]), o = zt(o, c), o = li(o, 33), o = zt(o, l), a = Re(a, o), a = li(a, 31), a = Xr(a, i), a = Xr(zt(a, [0, 5]), [0, 944331445]);
  switch (s = [0, 0], o = [0, 0], r) {
    case 15:
      o = Re(o, Bt([0, e.charCodeAt(u + 14)], 48));
    case 14:
      o = Re(o, Bt([0, e.charCodeAt(u + 13)], 40));
    case 13:
      o = Re(o, Bt([0, e.charCodeAt(u + 12)], 32));
    case 12:
      o = Re(o, Bt([0, e.charCodeAt(u + 11)], 24));
    case 11:
      o = Re(o, Bt([0, e.charCodeAt(u + 10)], 16));
    case 10:
      o = Re(o, Bt([0, e.charCodeAt(u + 9)], 8));
    case 9:
      o = Re(o, [0, e.charCodeAt(u + 8)]), o = zt(o, c), o = li(o, 33), o = zt(o, l), a = Re(a, o);
    case 8:
      s = Re(s, Bt([0, e.charCodeAt(u + 7)], 56));
    case 7:
      s = Re(s, Bt([0, e.charCodeAt(u + 6)], 48));
    case 6:
      s = Re(s, Bt([0, e.charCodeAt(u + 5)], 40));
    case 5:
      s = Re(s, Bt([0, e.charCodeAt(u + 4)], 32));
    case 4:
      s = Re(s, Bt([0, e.charCodeAt(u + 3)], 24));
    case 3:
      s = Re(s, Bt([0, e.charCodeAt(u + 2)], 16));
    case 2:
      s = Re(s, Bt([0, e.charCodeAt(u + 1)], 8));
    case 1:
      s = Re(s, [0, e.charCodeAt(u)]), s = zt(s, l), s = li(s, 31), s = zt(s, c), i = Re(i, s);
  }
  return i = Re(i, [0, e.length]), a = Re(a, [0, e.length]), i = Xr(i, a), a = Xr(a, i), i = ix(i), a = ix(a), i = Xr(i, a), a = Xr(a, i), ("00000000" + (i[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (i[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (a[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (a[1] >>> 0).toString(16)).slice(-8);
}
function vie(e) {
  var t;
  return Yf({ name: e.name, message: e.message, stack: (t = e.stack) === null || t === void 0 ? void 0 : t.split(`
`) }, e);
}
function gie(e, t) {
  for (var r = 0, n = e.length; r < n; ++r)
    if (e[r] === t)
      return !0;
  return !1;
}
function mie(e, t) {
  return !gie(e, t);
}
function Md(e) {
  return parseInt(e);
}
function er(e) {
  return parseFloat(e);
}
function Cr(e, t) {
  return typeof e == "number" && isNaN(e) ? t : e;
}
function sr(e) {
  return e.reduce(function(t, r) {
    return t + (r ? 1 : 0);
  }, 0);
}
function y2(e, t) {
  if (t === void 0 && (t = 1), Math.abs(t) >= 1)
    return Math.round(e / t) * t;
  var r = 1 / t;
  return Math.round(e * r) / r;
}
function xie(e) {
  for (var t, r, n = "Unexpected syntax '".concat(e, "'"), i = /^\s*([a-z-]*)(.*)$/i.exec(e), a = i[1] || void 0, s = {}, o = /([.:#][\w-]+|\[.+?\])/gi, l = function(d, h) {
    s[d] = s[d] || [], s[d].push(h);
  }; ; ) {
    var c = o.exec(i[2]);
    if (!c)
      break;
    var u = c[0];
    switch (u[0]) {
      case ".":
        l("class", u.slice(1));
        break;
      case "#":
        l("id", u.slice(1));
        break;
      case "[": {
        var f = /^\[([\w-]+)([~|^$*]?=("(.*?)"|([\w-]+)))?(\s+[is])?\]$/.exec(u);
        if (f)
          l(f[1], (r = (t = f[4]) !== null && t !== void 0 ? t : f[5]) !== null && r !== void 0 ? r : "");
        else
          throw new Error(n);
        break;
      }
      default:
        throw new Error(n);
    }
  }
  return [a, s];
}
function ax(e) {
  return e && typeof e == "object" && "message" in e ? e : { message: e };
}
function yie(e) {
  return typeof e != "function";
}
function bie(e, t) {
  var r = new Promise(function(n) {
    var i = Date.now();
    rx(e.bind(null, t), function() {
      for (var a = [], s = 0; s < arguments.length; s++)
        a[s] = arguments[s];
      var o = Date.now() - i;
      if (!a[0])
        return n(function() {
          return { error: ax(a[1]), duration: o };
        });
      var l = a[1];
      if (yie(l))
        return n(function() {
          return { value: l, duration: o };
        });
      n(function() {
        return new Promise(function(c) {
          var u = Date.now();
          rx(l, function() {
            for (var f = [], d = 0; d < arguments.length; d++)
              f[d] = arguments[d];
            var h = o + Date.now() - u;
            if (!f[0])
              return c({ error: ax(f[1]), duration: h });
            c({ value: f[1], duration: h });
          });
        });
      });
    });
  });
  return cs(r), function() {
    return r.then(function(i) {
      return i();
    });
  };
}
function _ie(e, t, r) {
  var n = Object.keys(e).filter(function(a) {
    return mie(r, a);
  }), i = nx(n, function(a) {
    return bie(e[a], t);
  });
  return cs(i), function() {
    return Yr(this, void 0, void 0, function() {
      var s, o, l, c, u;
      return Wr(this, function(f) {
        switch (f.label) {
          case 0:
            return [4, i];
          case 1:
            return s = f.sent(), [4, nx(s, function(d) {
              var h = d();
              return cs(h), h;
            })];
          case 2:
            return o = f.sent(), [
              4,
              Promise.all(o)
              // Keeping the component keys order the same as the source keys order
            ];
          case 3:
            for (l = f.sent(), c = {}, u = 0; u < n.length; ++u)
              c[n[u]] = l[u];
            return [2, c];
        }
      });
    });
  };
}
function b2() {
  var e = window, t = navigator;
  return sr([
    "MSCSSMatrix" in e,
    "msSetImmediate" in e,
    "msIndexedDB" in e,
    "msMaxTouchPoints" in t,
    "msPointerEnabled" in t
  ]) >= 4;
}
function wie() {
  var e = window, t = navigator;
  return sr(["msWriteProfilerMark" in e, "MSStream" in e, "msLaunchUri" in t, "msSaveBlob" in t]) >= 3 && !b2();
}
function Pd() {
  var e = window, t = navigator;
  return sr([
    "webkitPersistentStorage" in t,
    "webkitTemporaryStorage" in t,
    t.vendor.indexOf("Google") === 0,
    "webkitResolveLocalFileSystemURL" in e,
    "BatteryManager" in e,
    "webkitMediaStream" in e,
    "webkitSpeechGrammar" in e
  ]) >= 5;
}
function Es() {
  var e = window, t = navigator;
  return sr([
    "ApplePayError" in e,
    "CSSPrimitiveValue" in e,
    "Counter" in e,
    t.vendor.indexOf("Apple") === 0,
    "getStorageUpdates" in t,
    "WebKitMediaKeys" in e
  ]) >= 4;
}
function Bd() {
  var e = window;
  return sr([
    "safari" in e,
    !("DeviceMotionEvent" in e),
    !("ongestureend" in e),
    !("standalone" in navigator)
  ]) >= 3;
}
function $ie() {
  var e, t, r = window;
  return sr([
    "buildID" in navigator,
    "MozAppearance" in ((t = (e = document.documentElement) === null || e === void 0 ? void 0 : e.style) !== null && t !== void 0 ? t : {}),
    "onmozfullscreenchange" in r,
    "mozInnerScreenX" in r,
    "CSSMozDocumentRule" in r,
    "CanvasCaptureMediaStream" in r
  ]) >= 4;
}
function Die() {
  var e = window;
  return sr([
    !("MediaSettingsRange" in e),
    "RTCEncodedAudioFrame" in e,
    "" + e.Intl == "[object Intl]",
    "" + e.Reflect == "[object Reflect]"
  ]) >= 3;
}
function Eie() {
  var e = window;
  return sr([
    "DOMRectList" in e,
    "RTCPeerConnectionIceEvent" in e,
    "SVGGeometryElement" in e,
    "ontransitioncancel" in e
  ]) >= 3;
}
function Aie() {
  if (navigator.platform === "iPad")
    return !0;
  var e = screen, t = e.width / e.height;
  return sr([
    "MediaSource" in window,
    !!Element.prototype.webkitRequestFullscreen,
    // iPhone 4S that runs iOS 9 matches this. But it won't match the criteria above, so it won't be detected as iPad.
    t > 0.65 && t < 1.53
  ]) >= 2;
}
function Cie() {
  var e = document;
  return e.fullscreenElement || e.msFullscreenElement || e.mozFullScreenElement || e.webkitFullscreenElement || null;
}
function Sie() {
  var e = document;
  return (e.exitFullscreen || e.msExitFullscreen || e.mozCancelFullScreen || e.webkitExitFullscreen).call(e);
}
function _2() {
  var e = Pd(), t = $ie();
  if (!e && !t)
    return !1;
  var r = window;
  return sr([
    "onorientationchange" in r,
    "orientation" in r,
    e && !("SharedWorker" in r),
    t && /android/i.test(navigator.appVersion)
  ]) >= 2;
}
function kie() {
  var e = window, t = e.OfflineAudioContext || e.webkitOfflineAudioContext;
  if (!t)
    return -2;
  if (Oie())
    return -1;
  var r = 4500, n = 5e3, i = new t(1, n, 44100), a = i.createOscillator();
  a.type = "triangle", a.frequency.value = 1e4;
  var s = i.createDynamicsCompressor();
  s.threshold.value = -50, s.knee.value = 40, s.ratio.value = 12, s.attack.value = 0, s.release.value = 0.25, a.connect(s), s.connect(i.destination), a.start(0);
  var o = Fie(i), l = o[0], c = o[1], u = l.then(function(f) {
    return Tie(f.getChannelData(0).subarray(r));
  }, function(f) {
    if (f.name === "timeout" || f.name === "suspended")
      return -3;
    throw f;
  });
  return cs(u), function() {
    return c(), u;
  };
}
function Oie() {
  return Es() && !Bd() && !Eie();
}
function Fie(e) {
  var t = 3, r = 500, n = 500, i = 5e3, a = function() {
  }, s = new Promise(function(o, l) {
    var c = !1, u = 0, f = 0;
    e.oncomplete = function(p) {
      return o(p.renderedBuffer);
    };
    var d = function() {
      setTimeout(function() {
        return l(sx(
          "timeout"
          /* InnerErrorName.Timeout */
        ));
      }, Math.min(n, f + i - Date.now()));
    }, h = function() {
      try {
        var p = e.startRendering();
        switch (x2(p) && cs(p), e.state) {
          case "running":
            f = Date.now(), c && d();
            break;
          case "suspended":
            document.hidden || u++, c && u >= t ? l(sx(
              "suspended"
              /* InnerErrorName.Suspended */
            )) : setTimeout(h, r);
            break;
        }
      } catch (v) {
        l(v);
      }
    };
    h(), a = function() {
      c || (c = !0, f > 0 && d());
    };
  });
  return [s, a];
}
function Tie(e) {
  for (var t = 0, r = 0; r < e.length; ++r)
    t += Math.abs(e[r]);
  return t;
}
function sx(e) {
  var t = new Error(e);
  return t.name = e, t;
}
function w2(e, t, r) {
  var n, i, a;
  return r === void 0 && (r = 50), Yr(this, void 0, void 0, function() {
    var s, o;
    return Wr(this, function(l) {
      switch (l.label) {
        case 0:
          s = document, l.label = 1;
        case 1:
          return s.body ? [3, 3] : [4, ls(r)];
        case 2:
          return l.sent(), [3, 1];
        case 3:
          o = s.createElement("iframe"), l.label = 4;
        case 4:
          return l.trys.push([4, , 10, 11]), [4, new Promise(function(c, u) {
            var f = !1, d = function() {
              f = !0, c();
            }, h = function(g) {
              f = !0, u(g);
            };
            o.onload = d, o.onerror = h;
            var p = o.style;
            p.setProperty("display", "block", "important"), p.position = "absolute", p.top = "0", p.left = "0", p.visibility = "hidden", t && "srcdoc" in o ? o.srcdoc = t : o.src = "about:blank", s.body.appendChild(o);
            var v = function() {
              var g, m;
              f || (((m = (g = o.contentWindow) === null || g === void 0 ? void 0 : g.document) === null || m === void 0 ? void 0 : m.readyState) === "complete" ? d() : setTimeout(v, 10));
            };
            v();
          })];
        case 5:
          l.sent(), l.label = 6;
        case 6:
          return !((i = (n = o.contentWindow) === null || n === void 0 ? void 0 : n.document) === null || i === void 0) && i.body ? [3, 8] : [4, ls(r)];
        case 7:
          return l.sent(), [3, 6];
        case 8:
          return [4, e(o, o.contentWindow)];
        case 9:
          return [2, l.sent()];
        case 10:
          return (a = o.parentNode) === null || a === void 0 || a.removeChild(o), [
            7
            /*endfinally*/
          ];
        case 11:
          return [
            2
            /*return*/
          ];
      }
    });
  });
}
function Mie(e) {
  for (var t = xie(e), r = t[0], n = t[1], i = document.createElement(r ?? "div"), a = 0, s = Object.keys(n); a < s.length; a++) {
    var o = s[a], l = n[o].join(" ");
    o === "style" ? Pie(i.style, l) : i.setAttribute(o, l);
  }
  return i;
}
function Pie(e, t) {
  for (var r = 0, n = t.split(";"); r < n.length; r++) {
    var i = n[r], a = /^\s*([\w-]+)\s*:\s*(.+?)(\s*!([\w-]+))?\s*$/.exec(i);
    if (a) {
      var s = a[1], o = a[2], l = a[4];
      e.setProperty(s, o, l || "");
    }
  }
}
var Bie = "mmMwWLliI0O&1", Iie = "48px", ci = ["monospace", "sans-serif", "serif"], ox = [
  // This is android-specific font from "Roboto" family
  "sans-serif-thin",
  "ARNO PRO",
  "Agency FB",
  "Arabic Typesetting",
  "Arial Unicode MS",
  "AvantGarde Bk BT",
  "BankGothic Md BT",
  "Batang",
  "Bitstream Vera Sans Mono",
  "Calibri",
  "Century",
  "Century Gothic",
  "Clarendon",
  "EUROSTILE",
  "Franklin Gothic",
  "Futura Bk BT",
  "Futura Md BT",
  "GOTHAM",
  "Gill Sans",
  "HELV",
  "Haettenschweiler",
  "Helvetica Neue",
  "Humanst521 BT",
  "Leelawadee",
  "Letter Gothic",
  "Levenim MT",
  "Lucida Bright",
  "Lucida Sans",
  "Menlo",
  "MS Mincho",
  "MS Outlook",
  "MS Reference Specialty",
  "MS UI Gothic",
  "MT Extra",
  "MYRIAD PRO",
  "Marlett",
  "Meiryo UI",
  "Microsoft Uighur",
  "Minion Pro",
  "Monotype Corsiva",
  "PMingLiU",
  "Pristina",
  "SCRIPTINA",
  "Segoe UI Light",
  "Serifa",
  "SimHei",
  "Small Fonts",
  "Staccato222 BT",
  "TRAJAN PRO",
  "Univers CE 55 Medium",
  "Vrinda",
  "ZWAdobeF"
];
function Rie() {
  return w2(function(e, t) {
    var r = t.document, n = r.body;
    n.style.fontSize = Iie;
    var i = r.createElement("div"), a = {}, s = {}, o = function(v) {
      var g = r.createElement("span"), m = g.style;
      return m.position = "absolute", m.top = "0", m.left = "0", m.fontFamily = v, g.textContent = Bie, i.appendChild(g), g;
    }, l = function(v, g) {
      return o("'".concat(v, "',").concat(g));
    }, c = function() {
      return ci.map(o);
    }, u = function() {
      for (var v = {}, g = function(x) {
        v[x] = ci.map(function(b) {
          return l(x, b);
        });
      }, m = 0, y = ox; m < y.length; m++) {
        var _ = y[m];
        g(_);
      }
      return v;
    }, f = function(v) {
      return ci.some(function(g, m) {
        return v[m].offsetWidth !== a[g] || v[m].offsetHeight !== s[g];
      });
    }, d = c(), h = u();
    n.appendChild(i);
    for (var p = 0; p < ci.length; p++)
      a[ci[p]] = d[p].offsetWidth, s[ci[p]] = d[p].offsetHeight;
    return ox.filter(function(v) {
      return f(h[v]);
    });
  });
}
function Nie() {
  var e = navigator.plugins;
  if (e) {
    for (var t = [], r = 0; r < e.length; ++r) {
      var n = e[r];
      if (n) {
        for (var i = [], a = 0; a < n.length; ++a) {
          var s = n[a];
          i.push({
            type: s.type,
            suffixes: s.suffixes
          });
        }
        t.push({
          name: n.name,
          description: n.description,
          mimeTypes: i
        });
      }
    }
    return t;
  }
}
function Lie() {
  var e = !1, t, r, n = jie(), i = n[0], a = n[1];
  if (!zie(i, a))
    t = r = "";
  else {
    e = Hie(a), Vie(i, a);
    var s = Mu(i), o = Mu(i);
    s !== o ? t = r = "unstable" : (r = s, Yie(i, a), t = Mu(i));
  }
  return { winding: e, geometry: t, text: r };
}
function jie() {
  var e = document.createElement("canvas");
  return e.width = 1, e.height = 1, [e, e.getContext("2d")];
}
function zie(e, t) {
  return !!(t && e.toDataURL);
}
function Hie(e) {
  return e.rect(0, 0, 10, 10), e.rect(2, 2, 6, 6), !e.isPointInPath(5, 5, "evenodd");
}
function Vie(e, t) {
  e.width = 240, e.height = 60, t.textBaseline = "alphabetic", t.fillStyle = "#f60", t.fillRect(100, 1, 62, 20), t.fillStyle = "#069", t.font = '11pt "Times New Roman"';
  var r = "Cwm fjordbank gly ".concat(
    "😃"
    /* 😃 */
  );
  t.fillText(r, 2, 15), t.fillStyle = "rgba(102, 204, 0, 0.2)", t.font = "18pt Arial", t.fillText(r, 4, 45);
}
function Yie(e, t) {
  e.width = 122, e.height = 110, t.globalCompositeOperation = "multiply";
  for (var r = 0, n = [
    ["#f2f", 40, 40],
    ["#2ff", 80, 40],
    ["#ff2", 60, 80]
  ]; r < n.length; r++) {
    var i = n[r], a = i[0], s = i[1], o = i[2];
    t.fillStyle = a, t.beginPath(), t.arc(s, o, 40, 0, Math.PI * 2, !0), t.closePath(), t.fill();
  }
  t.fillStyle = "#f9c", t.arc(60, 60, 60, 0, Math.PI * 2, !0), t.arc(60, 60, 20, 0, Math.PI * 2, !0), t.fill("evenodd");
}
function Mu(e) {
  return e.toDataURL();
}
function Wie() {
  var e = navigator, t = 0, r;
  e.maxTouchPoints !== void 0 ? t = Md(e.maxTouchPoints) : e.msMaxTouchPoints !== void 0 && (t = e.msMaxTouchPoints);
  try {
    document.createEvent("TouchEvent"), r = !0;
  } catch {
    r = !1;
  }
  var n = "ontouchstart" in window;
  return {
    maxTouchPoints: t,
    touchEvent: r,
    touchStart: n
  };
}
function Uie() {
  return navigator.oscpu;
}
function qie() {
  var e = navigator, t = [], r = e.language || e.userLanguage || e.browserLanguage || e.systemLanguage;
  if (r !== void 0 && t.push([r]), Array.isArray(e.languages))
    Pd() && Die() || t.push(e.languages);
  else if (typeof e.languages == "string") {
    var n = e.languages;
    n && t.push(n.split(","));
  }
  return t;
}
function Gie() {
  return window.screen.colorDepth;
}
function Kie() {
  return Cr(er(navigator.deviceMemory), void 0);
}
function Zie() {
  var e = screen, t = function(n) {
    return Cr(Md(n), null);
  }, r = [t(e.width), t(e.height)];
  return r.sort().reverse(), r;
}
var Xie = 2500, Jie = 10, Do, Pu;
function Qie() {
  if (Pu === void 0) {
    var e = function() {
      var t = Wf();
      Uf(t) ? Pu = setTimeout(e, Xie) : (Do = t, Pu = void 0);
    };
    e();
  }
}
function eae() {
  var e = this;
  return Qie(), function() {
    return Yr(e, void 0, void 0, function() {
      var t;
      return Wr(this, function(r) {
        switch (r.label) {
          case 0:
            return t = Wf(), Uf(t) ? Do ? [2, g2([], Do, !0)] : Cie() ? [4, Sie()] : [3, 2] : [3, 2];
          case 1:
            r.sent(), t = Wf(), r.label = 2;
          case 2:
            return Uf(t) || (Do = t), [2, t];
        }
      });
    });
  };
}
function tae() {
  var e = this, t = eae();
  return function() {
    return Yr(e, void 0, void 0, function() {
      var r, n;
      return Wr(this, function(i) {
        switch (i.label) {
          case 0:
            return [4, t()];
          case 1:
            return r = i.sent(), n = function(a) {
              return a === null ? null : y2(a, Jie);
            }, [2, [n(r[0]), n(r[1]), n(r[2]), n(r[3])]];
        }
      });
    });
  };
}
function Wf() {
  var e = screen;
  return [
    Cr(er(e.availTop), null),
    Cr(er(e.width) - er(e.availWidth) - Cr(er(e.availLeft), 0), null),
    Cr(er(e.height) - er(e.availHeight) - Cr(er(e.availTop), 0), null),
    Cr(er(e.availLeft), null)
  ];
}
function Uf(e) {
  for (var t = 0; t < 4; ++t)
    if (e[t])
      return !1;
  return !0;
}
function rae() {
  return Cr(Md(navigator.hardwareConcurrency), void 0);
}
function nae() {
  var e, t = (e = window.Intl) === null || e === void 0 ? void 0 : e.DateTimeFormat;
  if (t) {
    var r = new t().resolvedOptions().timeZone;
    if (r)
      return r;
  }
  var n = -iae();
  return "UTC".concat(n >= 0 ? "+" : "").concat(Math.abs(n));
}
function iae() {
  var e = (/* @__PURE__ */ new Date()).getFullYear();
  return Math.max(
    // `getTimezoneOffset` returns a number as a string in some unidentified cases
    er(new Date(e, 0, 1).getTimezoneOffset()),
    er(new Date(e, 6, 1).getTimezoneOffset())
  );
}
function aae() {
  try {
    return !!window.sessionStorage;
  } catch {
    return !0;
  }
}
function sae() {
  try {
    return !!window.localStorage;
  } catch {
    return !0;
  }
}
function oae() {
  if (!(b2() || wie()))
    try {
      return !!window.indexedDB;
    } catch {
      return !0;
    }
}
function lae() {
  return !!window.openDatabase;
}
function cae() {
  return navigator.cpuClass;
}
function uae() {
  var e = navigator.platform;
  return e === "MacIntel" && Es() && !Bd() ? Aie() ? "iPad" : "iPhone" : e;
}
function fae() {
  return navigator.vendor || "";
}
function dae() {
  for (var e = [], t = 0, r = [
    // Blink and some browsers on iOS
    "chrome",
    // Safari on macOS
    "safari",
    // Chrome on iOS (checked in 85 on 13 and 87 on 14)
    "__crWeb",
    "__gCrWeb",
    // Yandex Browser on iOS, macOS and Android (checked in 21.2 on iOS 14, macOS and Android)
    "yandex",
    // Yandex Browser on iOS (checked in 21.2 on 14)
    "__yb",
    "__ybro",
    // Firefox on iOS (checked in 32 on 14)
    "__firefox__",
    // Edge on iOS (checked in 46 on 14)
    "__edgeTrackingPreventionStatistics",
    "webkit",
    // Opera Touch on iOS (checked in 2.6 on 14)
    "oprt",
    // Samsung Internet on Android (checked in 11.1)
    "samsungAr",
    // UC Browser on Android (checked in 12.10 and 13.0)
    "ucweb",
    "UCShellJava",
    // Puffin on Android (checked in 9.0)
    "puffinDevice"
    // UC on iOS and Opera on Android have no specific global variables
    // Edge for Android isn't checked
  ]; t < r.length; t++) {
    var n = r[t], i = window[n];
    i && typeof i == "object" && e.push(n);
  }
  return e.sort();
}
function hae() {
  var e = document;
  try {
    e.cookie = "cookietest=1; SameSite=Strict;";
    var t = e.cookie.indexOf("cookietest=") !== -1;
    return e.cookie = "cookietest=1; SameSite=Strict; expires=Thu, 01-Jan-1970 00:00:01 GMT", t;
  } catch {
    return !1;
  }
}
function pae() {
  var e = atob;
  return {
    abpIndo: [
      "#Iklan-Melayang",
      "#Kolom-Iklan-728",
      "#SidebarIklan-wrapper",
      '[title="ALIENBOLA" i]',
      e("I0JveC1CYW5uZXItYWRz")
    ],
    abpvn: [".quangcao", "#mobileCatfish", e("LmNsb3NlLWFkcw=="), '[id^="bn_bottom_fixed_"]', "#pmadv"],
    adBlockFinland: [
      ".mainostila",
      e("LnNwb25zb3JpdA=="),
      ".ylamainos",
      e("YVtocmVmKj0iL2NsaWNrdGhyZ2guYXNwPyJd"),
      e("YVtocmVmXj0iaHR0cHM6Ly9hcHAucmVhZHBlYWsuY29tL2FkcyJd")
    ],
    adBlockPersian: [
      "#navbar_notice_50",
      ".kadr",
      'TABLE[width="140px"]',
      "#divAgahi",
      e("YVtocmVmXj0iaHR0cDovL2cxLnYuZndtcm0ubmV0L2FkLyJd")
    ],
    adBlockWarningRemoval: [
      "#adblock-honeypot",
      ".adblocker-root",
      ".wp_adblock_detect",
      e("LmhlYWRlci1ibG9ja2VkLWFk"),
      e("I2FkX2Jsb2NrZXI=")
    ],
    adGuardAnnoyances: [
      ".hs-sosyal",
      "#cookieconsentdiv",
      'div[class^="app_gdpr"]',
      ".as-oil",
      '[data-cypress="soft-push-notification-modal"]'
    ],
    adGuardBase: [
      ".BetterJsPopOverlay",
      e("I2FkXzMwMFgyNTA="),
      e("I2Jhbm5lcmZsb2F0MjI="),
      e("I2NhbXBhaWduLWJhbm5lcg=="),
      e("I0FkLUNvbnRlbnQ=")
    ],
    adGuardChinese: [
      e("LlppX2FkX2FfSA=="),
      e("YVtocmVmKj0iLmh0aGJldDM0LmNvbSJd"),
      "#widget-quan",
      e("YVtocmVmKj0iLzg0OTkyMDIwLnh5eiJd"),
      e("YVtocmVmKj0iLjE5NTZobC5jb20vIl0=")
    ],
    adGuardFrench: [
      "#pavePub",
      e("LmFkLWRlc2t0b3AtcmVjdGFuZ2xl"),
      ".mobile_adhesion",
      ".widgetadv",
      e("LmFkc19iYW4=")
    ],
    adGuardGerman: ['aside[data-portal-id="leaderboard"]'],
    adGuardJapanese: [
      "#kauli_yad_1",
      e("YVtocmVmXj0iaHR0cDovL2FkMi50cmFmZmljZ2F0ZS5uZXQvIl0="),
      e("Ll9wb3BJbl9pbmZpbml0ZV9hZA=="),
      e("LmFkZ29vZ2xl"),
      e("Ll9faXNib29zdFJldHVybkFk")
    ],
    adGuardMobile: [
      e("YW1wLWF1dG8tYWRz"),
      e("LmFtcF9hZA=="),
      'amp-embed[type="24smi"]',
      "#mgid_iframe1",
      e("I2FkX2ludmlld19hcmVh")
    ],
    adGuardRussian: [
      e("YVtocmVmXj0iaHR0cHM6Ly9hZC5sZXRtZWFkcy5jb20vIl0="),
      e("LnJlY2xhbWE="),
      'div[id^="smi2adblock"]',
      e("ZGl2W2lkXj0iQWRGb3hfYmFubmVyXyJd"),
      "#psyduckpockeball"
    ],
    adGuardSocial: [
      e("YVtocmVmXj0iLy93d3cuc3R1bWJsZXVwb24uY29tL3N1Ym1pdD91cmw9Il0="),
      e("YVtocmVmXj0iLy90ZWxlZ3JhbS5tZS9zaGFyZS91cmw/Il0="),
      ".etsy-tweet",
      "#inlineShare",
      ".popup-social"
    ],
    adGuardSpanishPortuguese: ["#barraPublicidade", "#Publicidade", "#publiEspecial", "#queTooltip", ".cnt-publi"],
    adGuardTrackingProtection: [
      "#qoo-counter",
      e("YVtocmVmXj0iaHR0cDovL2NsaWNrLmhvdGxvZy5ydS8iXQ=="),
      e("YVtocmVmXj0iaHR0cDovL2hpdGNvdW50ZXIucnUvdG9wL3N0YXQucGhwIl0="),
      e("YVtocmVmXj0iaHR0cDovL3RvcC5tYWlsLnJ1L2p1bXAiXQ=="),
      "#top100counter"
    ],
    adGuardTurkish: [
      "#backkapat",
      e("I3Jla2xhbWk="),
      e("YVtocmVmXj0iaHR0cDovL2Fkc2Vydi5vbnRlay5jb20udHIvIl0="),
      e("YVtocmVmXj0iaHR0cDovL2l6bGVuemkuY29tL2NhbXBhaWduLyJd"),
      e("YVtocmVmXj0iaHR0cDovL3d3dy5pbnN0YWxsYWRzLm5ldC8iXQ==")
    ],
    bulgarian: [e("dGQjZnJlZW5ldF90YWJsZV9hZHM="), "#ea_intext_div", ".lapni-pop-over", "#xenium_hot_offers"],
    easyList: [
      ".yb-floorad",
      e("LndpZGdldF9wb19hZHNfd2lkZ2V0"),
      e("LnRyYWZmaWNqdW5reS1hZA=="),
      ".textad_headline",
      e("LnNwb25zb3JlZC10ZXh0LWxpbmtz")
    ],
    easyListChina: [
      e("LmFwcGd1aWRlLXdyYXBbb25jbGljayo9ImJjZWJvcy5jb20iXQ=="),
      e("LmZyb250cGFnZUFkdk0="),
      "#taotaole",
      "#aafoot.top_box",
      ".cfa_popup"
    ],
    easyListCookie: [
      ".ezmob-footer",
      ".cc-CookieWarning",
      "[data-cookie-number]",
      e("LmF3LWNvb2tpZS1iYW5uZXI="),
      ".sygnal24-gdpr-modal-wrap"
    ],
    easyListCzechSlovak: [
      "#onlajny-stickers",
      e("I3Jla2xhbW5pLWJveA=="),
      e("LnJla2xhbWEtbWVnYWJvYXJk"),
      ".sklik",
      e("W2lkXj0ic2tsaWtSZWtsYW1hIl0=")
    ],
    easyListDutch: [
      e("I2FkdmVydGVudGll"),
      e("I3ZpcEFkbWFya3RCYW5uZXJCbG9jaw=="),
      ".adstekst",
      e("YVtocmVmXj0iaHR0cHM6Ly94bHR1YmUubmwvY2xpY2svIl0="),
      "#semilo-lrectangle"
    ],
    easyListGermany: [
      "#SSpotIMPopSlider",
      e("LnNwb25zb3JsaW5rZ3J1ZW4="),
      e("I3dlcmJ1bmdza3k="),
      e("I3Jla2xhbWUtcmVjaHRzLW1pdHRl"),
      e("YVtocmVmXj0iaHR0cHM6Ly9iZDc0Mi5jb20vIl0=")
    ],
    easyListItaly: [
      e("LmJveF9hZHZfYW5udW5jaQ=="),
      ".sb-box-pubbliredazionale",
      e("YVtocmVmXj0iaHR0cDovL2FmZmlsaWF6aW9uaWFkcy5zbmFpLml0LyJd"),
      e("YVtocmVmXj0iaHR0cHM6Ly9hZHNlcnZlci5odG1sLml0LyJd"),
      e("YVtocmVmXj0iaHR0cHM6Ly9hZmZpbGlhemlvbmlhZHMuc25haS5pdC8iXQ==")
    ],
    easyListLithuania: [
      e("LnJla2xhbW9zX3RhcnBhcw=="),
      e("LnJla2xhbW9zX251b3JvZG9z"),
      e("aW1nW2FsdD0iUmVrbGFtaW5pcyBza3lkZWxpcyJd"),
      e("aW1nW2FsdD0iRGVkaWt1b3RpLmx0IHNlcnZlcmlhaSJd"),
      e("aW1nW2FsdD0iSG9zdGluZ2FzIFNlcnZlcmlhaS5sdCJd")
    ],
    estonian: [e("QVtocmVmKj0iaHR0cDovL3BheTRyZXN1bHRzMjQuZXUiXQ==")],
    fanboyAnnoyances: ["#ac-lre-player", ".navigate-to-top", "#subscribe_popup", ".newsletter_holder", "#back-top"],
    fanboyAntiFacebook: [".util-bar-module-firefly-visible"],
    fanboyEnhancedTrackers: [
      ".open.pushModal",
      "#issuem-leaky-paywall-articles-zero-remaining-nag",
      "#sovrn_container",
      'div[class$="-hide"][zoompage-fontsize][style="display: block;"]',
      ".BlockNag__Card"
    ],
    fanboySocial: ["#FollowUs", "#meteored_share", "#social_follow", ".article-sharer", ".community__social-desc"],
    frellwitSwedish: [
      e("YVtocmVmKj0iY2FzaW5vcHJvLnNlIl1bdGFyZ2V0PSJfYmxhbmsiXQ=="),
      e("YVtocmVmKj0iZG9rdG9yLXNlLm9uZWxpbmsubWUiXQ=="),
      "article.category-samarbete",
      e("ZGl2LmhvbGlkQWRz"),
      "ul.adsmodern"
    ],
    greekAdBlock: [
      e("QVtocmVmKj0iYWRtYW4ub3RlbmV0LmdyL2NsaWNrPyJd"),
      e("QVtocmVmKj0iaHR0cDovL2F4aWFiYW5uZXJzLmV4b2R1cy5nci8iXQ=="),
      e("QVtocmVmKj0iaHR0cDovL2ludGVyYWN0aXZlLmZvcnRobmV0LmdyL2NsaWNrPyJd"),
      "DIV.agores300",
      "TABLE.advright"
    ],
    hungarian: [
      "#cemp_doboz",
      ".optimonk-iframe-container",
      e("LmFkX19tYWlu"),
      e("W2NsYXNzKj0iR29vZ2xlQWRzIl0="),
      "#hirdetesek_box"
    ],
    iDontCareAboutCookies: [
      '.alert-info[data-block-track*="CookieNotice"]',
      ".ModuleTemplateCookieIndicator",
      ".o--cookies--container",
      "#cookies-policy-sticky",
      "#stickyCookieBar"
    ],
    icelandicAbp: [e("QVtocmVmXj0iL2ZyYW1ld29yay9yZXNvdXJjZXMvZm9ybXMvYWRzLmFzcHgiXQ==")],
    latvian: [
      e("YVtocmVmPSJodHRwOi8vd3d3LnNhbGlkemluaS5sdi8iXVtzdHlsZT0iZGlzcGxheTogYmxvY2s7IHdpZHRoOiAxMjBweDsgaGVpZ2h0OiA0MHB4OyBvdmVyZmxvdzogaGlkZGVuOyBwb3NpdGlvbjogcmVsYXRpdmU7Il0="),
      e("YVtocmVmPSJodHRwOi8vd3d3LnNhbGlkemluaS5sdi8iXVtzdHlsZT0iZGlzcGxheTogYmxvY2s7IHdpZHRoOiA4OHB4OyBoZWlnaHQ6IDMxcHg7IG92ZXJmbG93OiBoaWRkZW47IHBvc2l0aW9uOiByZWxhdGl2ZTsiXQ==")
    ],
    listKr: [
      e("YVtocmVmKj0iLy9hZC5wbGFuYnBsdXMuY28ua3IvIl0="),
      e("I2xpdmVyZUFkV3JhcHBlcg=="),
      e("YVtocmVmKj0iLy9hZHYuaW1hZHJlcC5jby5rci8iXQ=="),
      e("aW5zLmZhc3R2aWV3LWFk"),
      ".revenue_unit_item.dable"
    ],
    listeAr: [
      e("LmdlbWluaUxCMUFk"),
      ".right-and-left-sponsers",
      e("YVtocmVmKj0iLmFmbGFtLmluZm8iXQ=="),
      e("YVtocmVmKj0iYm9vcmFxLm9yZyJd"),
      e("YVtocmVmKj0iZHViaXp6bGUuY29tL2FyLz91dG1fc291cmNlPSJd")
    ],
    listeFr: [
      e("YVtocmVmXj0iaHR0cDovL3Byb21vLnZhZG9yLmNvbS8iXQ=="),
      e("I2FkY29udGFpbmVyX3JlY2hlcmNoZQ=="),
      e("YVtocmVmKj0id2Vib3JhbWEuZnIvZmNnaS1iaW4vIl0="),
      ".site-pub-interstitiel",
      'div[id^="crt-"][data-criteo-id]'
    ],
    officialPolish: [
      "#ceneo-placeholder-ceneo-12",
      e("W2hyZWZePSJodHRwczovL2FmZi5zZW5kaHViLnBsLyJd"),
      e("YVtocmVmXj0iaHR0cDovL2Fkdm1hbmFnZXIudGVjaGZ1bi5wbC9yZWRpcmVjdC8iXQ=="),
      e("YVtocmVmXj0iaHR0cDovL3d3dy50cml6ZXIucGwvP3V0bV9zb3VyY2UiXQ=="),
      e("ZGl2I3NrYXBpZWNfYWQ=")
    ],
    ro: [
      e("YVtocmVmXj0iLy9hZmZ0cmsuYWx0ZXgucm8vQ291bnRlci9DbGljayJd"),
      e("YVtocmVmXj0iaHR0cHM6Ly9ibGFja2ZyaWRheXNhbGVzLnJvL3Ryay9zaG9wLyJd"),
      e("YVtocmVmXj0iaHR0cHM6Ly9ldmVudC4ycGVyZm9ybWFudC5jb20vZXZlbnRzL2NsaWNrIl0="),
      e("YVtocmVmXj0iaHR0cHM6Ly9sLnByb2ZpdHNoYXJlLnJvLyJd"),
      'a[href^="/url/"]'
    ],
    ruAd: [
      e("YVtocmVmKj0iLy9mZWJyYXJlLnJ1LyJd"),
      e("YVtocmVmKj0iLy91dGltZy5ydS8iXQ=="),
      e("YVtocmVmKj0iOi8vY2hpa2lkaWtpLnJ1Il0="),
      "#pgeldiz",
      ".yandex-rtb-block"
    ],
    thaiAds: [
      "a[href*=macau-uta-popup]",
      e("I2Fkcy1nb29nbGUtbWlkZGxlX3JlY3RhbmdsZS1ncm91cA=="),
      e("LmFkczMwMHM="),
      ".bumq",
      ".img-kosana"
    ],
    webAnnoyancesUltralist: [
      "#mod-social-share-2",
      "#social-tools",
      e("LmN0cGwtZnVsbGJhbm5lcg=="),
      ".zergnet-recommend",
      ".yt.btn-link.btn-md.btn"
    ]
  };
}
function vae(e) {
  var t = e === void 0 ? {} : e, r = t.debug;
  return Yr(this, void 0, void 0, function() {
    var n, i, a, s, o, l;
    return Wr(this, function(c) {
      switch (c.label) {
        case 0:
          return gae() ? (n = pae(), i = Object.keys(n), a = (l = []).concat.apply(l, i.map(function(u) {
            return n[u];
          })), [4, mae(a)]) : [2, void 0];
        case 1:
          return s = c.sent(), r && xae(n, s), o = i.filter(function(u) {
            var f = n[u], d = sr(f.map(function(h) {
              return s[h];
            }));
            return d > f.length * 0.6;
          }), o.sort(), [2, o];
      }
    });
  });
}
function gae() {
  return Es() || _2();
}
function mae(e) {
  var t;
  return Yr(this, void 0, void 0, function() {
    var r, n, i, a, l, s, o, l;
    return Wr(this, function(c) {
      switch (c.label) {
        case 0:
          for (r = document, n = r.createElement("div"), i = new Array(e.length), a = {}, lx(n), l = 0; l < e.length; ++l)
            s = Mie(e[l]), s.tagName === "DIALOG" && s.show(), o = r.createElement("div"), lx(o), o.appendChild(s), n.appendChild(o), i[l] = s;
          c.label = 1;
        case 1:
          return r.body ? [3, 3] : [4, ls(50)];
        case 2:
          return c.sent(), [3, 1];
        case 3:
          r.body.appendChild(n);
          try {
            for (l = 0; l < e.length; ++l)
              i[l].offsetParent || (a[e[l]] = !0);
          } finally {
            (t = n.parentNode) === null || t === void 0 || t.removeChild(n);
          }
          return [2, a];
      }
    });
  });
}
function lx(e) {
  e.style.setProperty("display", "block", "important");
}
function xae(e, t) {
  for (var r = "DOM blockers debug:\n```", n = 0, i = Object.keys(e); n < i.length; n++) {
    var a = i[n];
    r += `
`.concat(a, ":");
    for (var s = 0, o = e[a]; s < o.length; s++) {
      var l = o[s];
      r += `
  `.concat(t[l] ? "🚫" : "➡️", " ").concat(l);
    }
  }
  console.log("".concat(r, "\n```"));
}
function yae() {
  for (var e = 0, t = ["rec2020", "p3", "srgb"]; e < t.length; e++) {
    var r = t[e];
    if (matchMedia("(color-gamut: ".concat(r, ")")).matches)
      return r;
  }
}
function bae() {
  if (cx("inverted"))
    return !0;
  if (cx("none"))
    return !1;
}
function cx(e) {
  return matchMedia("(inverted-colors: ".concat(e, ")")).matches;
}
function _ae() {
  if (ux("active"))
    return !0;
  if (ux("none"))
    return !1;
}
function ux(e) {
  return matchMedia("(forced-colors: ".concat(e, ")")).matches;
}
var wae = 100;
function $ae() {
  if (matchMedia("(min-monochrome: 0)").matches) {
    for (var e = 0; e <= wae; ++e)
      if (matchMedia("(max-monochrome: ".concat(e, ")")).matches)
        return e;
    throw new Error("Too high value");
  }
}
function Dae() {
  if (ui("no-preference"))
    return 0;
  if (ui("high") || ui("more"))
    return 1;
  if (ui("low") || ui("less"))
    return -1;
  if (ui("forced"))
    return 10;
}
function ui(e) {
  return matchMedia("(prefers-contrast: ".concat(e, ")")).matches;
}
function Eae() {
  if (fx("reduce"))
    return !0;
  if (fx("no-preference"))
    return !1;
}
function fx(e) {
  return matchMedia("(prefers-reduced-motion: ".concat(e, ")")).matches;
}
function Aae() {
  if (dx("high"))
    return !0;
  if (dx("standard"))
    return !1;
}
function dx(e) {
  return matchMedia("(dynamic-range: ".concat(e, ")")).matches;
}
var De = Math, wt = function() {
  return 0;
};
function Cae() {
  var e = De.acos || wt, t = De.acosh || wt, r = De.asin || wt, n = De.asinh || wt, i = De.atanh || wt, a = De.atan || wt, s = De.sin || wt, o = De.sinh || wt, l = De.cos || wt, c = De.cosh || wt, u = De.tan || wt, f = De.tanh || wt, d = De.exp || wt, h = De.expm1 || wt, p = De.log1p || wt, v = function($) {
    return De.pow(De.PI, $);
  }, g = function($) {
    return De.log($ + De.sqrt($ * $ - 1));
  }, m = function($) {
    return De.log($ + De.sqrt($ * $ + 1));
  }, y = function($) {
    return De.log((1 + $) / (1 - $)) / 2;
  }, _ = function($) {
    return De.exp($) - 1 / De.exp($) / 2;
  }, x = function($) {
    return (De.exp($) + 1 / De.exp($)) / 2;
  }, b = function($) {
    return De.exp($) - 1;
  }, w = function($) {
    return (De.exp(2 * $) - 1) / (De.exp(2 * $) + 1);
  }, E = function($) {
    return De.log(1 + $);
  };
  return {
    acos: e(0.12312423423423424),
    acosh: t(1e308),
    acoshPf: g(1e154),
    asin: r(0.12312423423423424),
    asinh: n(1),
    asinhPf: m(1),
    atanh: i(0.5),
    atanhPf: y(0.5),
    atan: a(0.5),
    sin: s(-1e300),
    sinh: o(1),
    sinhPf: _(1),
    cos: l(10.000000000123),
    cosh: c(1),
    coshPf: x(1),
    tan: u(-1e300),
    tanh: f(1),
    tanhPf: w(1),
    exp: d(1),
    expm1: h(1),
    expm1Pf: b(1),
    log1p: p(10),
    log1pPf: E(10),
    powPI: v(-100)
  };
}
var Sae = "mmMwWLliI0fiflO&1", Bu = {
  /**
   * The default font. User can change it in desktop Chrome, desktop Firefox, IE 11,
   * Android Chrome (but only when the size is ≥ than the default) and Android Firefox.
   */
  default: [],
  /** OS font on macOS. User can change its size and weight. Applies after Safari restart. */
  apple: [{ font: "-apple-system-body" }],
  /** User can change it in desktop Chrome and desktop Firefox. */
  serif: [{ fontFamily: "serif" }],
  /** User can change it in desktop Chrome and desktop Firefox. */
  sans: [{ fontFamily: "sans-serif" }],
  /** User can change it in desktop Chrome and desktop Firefox. */
  mono: [{ fontFamily: "monospace" }],
  /**
   * Check the smallest allowed font size. User can change it in desktop Chrome, desktop Firefox and desktop Safari.
   * The height can be 0 in Chrome on a retina display.
   */
  min: [{ fontSize: "1px" }],
  /** Tells one OS from another in desktop Chrome. */
  system: [{ fontFamily: "system-ui" }]
};
function kae() {
  return Oae(function(e, t) {
    for (var r = {}, n = {}, i = 0, a = Object.keys(Bu); i < a.length; i++) {
      var s = a[i], o = Bu[s], l = o[0], c = l === void 0 ? {} : l, u = o[1], f = u === void 0 ? Sae : u, d = e.createElement("span");
      d.textContent = f, d.style.whiteSpace = "nowrap";
      for (var h = 0, p = Object.keys(c); h < p.length; h++) {
        var v = p[h], g = c[v];
        g !== void 0 && (d.style[v] = g);
      }
      r[s] = d, t.appendChild(e.createElement("br")), t.appendChild(d);
    }
    for (var m = 0, y = Object.keys(Bu); m < y.length; m++) {
      var s = y[m];
      n[s] = r[s].getBoundingClientRect().width;
    }
    return n;
  });
}
function Oae(e, t) {
  return t === void 0 && (t = 4e3), w2(function(r, n) {
    var i = n.document, a = i.body, s = a.style;
    s.width = "".concat(t, "px"), s.webkitTextSizeAdjust = s.textSizeAdjust = "none", Pd() ? a.style.zoom = "".concat(1 / n.devicePixelRatio) : Es() && (a.style.zoom = "reset");
    var o = i.createElement("div");
    return o.textContent = g2([], Array(t / 20 << 0), !0).map(function() {
      return "word";
    }).join(" "), a.appendChild(o), e(i, a);
  }, '<!doctype html><html><head><meta name="viewport" content="width=device-width, initial-scale=1">');
}
function Fae() {
  var e, t = document.createElement("canvas"), r = (e = t.getContext("webgl")) !== null && e !== void 0 ? e : t.getContext("experimental-webgl");
  if (r && "getExtension" in r) {
    var n = r.getExtension("WEBGL_debug_renderer_info");
    if (n)
      return {
        vendor: (r.getParameter(n.UNMASKED_VENDOR_WEBGL) || "").toString(),
        renderer: (r.getParameter(n.UNMASKED_RENDERER_WEBGL) || "").toString()
      };
  }
}
function Tae() {
  return navigator.pdfViewerEnabled;
}
function Mae() {
  var e = new Float32Array(1), t = new Uint8Array(e.buffer);
  return e[0] = 1 / 0, e[0] = e[0] - e[0], t[3];
}
var Pae = {
  // READ FIRST:
  // See https://github.com/fingerprintjs/fingerprintjs/blob/master/contributing.md#how-to-make-an-entropy-source
  // to learn how entropy source works and how to make your own.
  // The sources run in this exact order.
  // The asynchronous sources are at the start to run in parallel with other sources.
  fonts: Rie,
  domBlockers: vae,
  fontPreferences: kae,
  audio: kie,
  screenFrame: tae,
  osCpu: Uie,
  languages: qie,
  colorDepth: Gie,
  deviceMemory: Kie,
  screenResolution: Zie,
  hardwareConcurrency: rae,
  timezone: nae,
  sessionStorage: aae,
  localStorage: sae,
  indexedDB: oae,
  openDatabase: lae,
  cpuClass: cae,
  platform: uae,
  plugins: Nie,
  canvas: Lie,
  touchSupport: Wie,
  vendor: fae,
  vendorFlavors: dae,
  cookiesEnabled: hae,
  colorGamut: yae,
  invertedColors: bae,
  forcedColors: _ae,
  monochrome: $ae,
  contrast: Dae,
  reducedMotion: Eae,
  hdr: Aae,
  math: Cae,
  videoCard: Fae,
  pdfViewerEnabled: Tae,
  architecture: Mae
};
function Bae(e) {
  return _ie(Pae, e, []);
}
var Iae = "$ if upgrade to Pro: https://fpjs.dev/pro";
function Rae(e) {
  var t = Nae(e), r = Lae(t);
  return { score: t, comment: Iae.replace(/\$/g, "".concat(r)) };
}
function Nae(e) {
  if (_2())
    return 0.4;
  if (Es())
    return Bd() ? 0.5 : 0.3;
  var t = e.platform.value || "";
  return /^Win/.test(t) ? 0.6 : /^Mac/.test(t) ? 0.5 : 0.7;
}
function Lae(e) {
  return y2(0.99 + 0.01 * e, 1e-4);
}
function jae(e) {
  for (var t = "", r = 0, n = Object.keys(e).sort(); r < n.length; r++) {
    var i = n[r], a = e[i], s = a.error ? "error" : JSON.stringify(a.value);
    t += "".concat(t ? "|" : "").concat(i.replace(/([:|\\])/g, "\\$1"), ":").concat(s);
  }
  return t;
}
function $2(e) {
  return JSON.stringify(e, function(t, r) {
    return r instanceof Error ? vie(r) : r;
  }, 2);
}
function D2(e) {
  return pie(jae(e));
}
function zae(e) {
  var t, r = Rae(e);
  return {
    get visitorId() {
      return t === void 0 && (t = D2(this.components)), t;
    },
    set visitorId(n) {
      t = n;
    },
    confidence: r,
    components: e,
    version: m2
  };
}
function Hae(e) {
  return e === void 0 && (e = 50), hie(e, e * 2);
}
function Vae(e, t) {
  var r = Date.now();
  return {
    get: function(n) {
      return Yr(this, void 0, void 0, function() {
        var i, a, s;
        return Wr(this, function(o) {
          switch (o.label) {
            case 0:
              return i = Date.now(), [4, e()];
            case 1:
              return a = o.sent(), s = zae(a), (t || n != null && n.debug) && console.log("Copy the text below to get the debug data:\n\n```\nversion: ".concat(s.version, `
userAgent: `).concat(navigator.userAgent, `
timeBetweenLoadAndGet: `).concat(i - r, `
visitorId: `).concat(s.visitorId, `
components: `).concat($2(a), "\n```")), [2, s];
          }
        });
      });
    }
  };
}
function Yae() {
  if (!(window.__fpjs_d_m || Math.random() >= 1e-3))
    try {
      var e = new XMLHttpRequest();
      e.open("get", "https://m1.openfpcdn.io/fingerprintjs/v".concat(m2, "/npm-monitoring"), !0), e.send();
    } catch (t) {
      console.error(t);
    }
}
function Wae(e) {
  var t = e === void 0 ? {} : e, r = t.delayFallback, n = t.debug, i = t.monitoring, a = i === void 0 ? !0 : i;
  return Yr(this, void 0, void 0, function() {
    var s;
    return Wr(this, function(o) {
      switch (o.label) {
        case 0:
          return a && Yae(), [4, Hae(r)];
        case 1:
          return o.sent(), s = Bae({ debug: n }), [2, Vae(s, n)];
      }
    });
  });
}
var Uae = { load: Wae, hashComponents: D2, componentsToDebugString: $2 };
class qae {
  constructor(t) {
    G(this, "params");
    G(this, "messages", []);
    G(this, "fingerId", "");
    G(this, "visitorId", pn.createUuid());
    G(this, "jobsQueue", new El({
      concurrentExecutions: 1
    }));
    this.params = t;
  }
  get size() {
    return this.messages.length;
  }
  clearMessages() {
    const t = this.messages.slice(-this.params.limitSize);
    return this.messages = [], t;
  }
  collect(t) {
    this.messages.push({
      ...t,
      url: window.location.href,
      time: Date.now()
    });
  }
  send() {
    this.jobsQueue.push("send", async () => {
      if (this.fingerId === "") {
        const a = await (await Uae.load()).get();
        this.fingerId = a.visitorId;
      }
      const t = As(), r = this.clearMessages(), n = {
        fingerId: this.fingerId,
        clientId: this.params.clientId(),
        visitorId: this.visitorId,
        service: t.service,
        stage: t.stage,
        messages: r
      };
      r.length !== 0 && await je.post(this.params.serverUrl(), n);
    });
  }
}
const Gae = (e) => () => {
  const t = Ce({
    title: e.title(),
    confirmText: e.confirmText(),
    cancelText: e.cancelText(),
    isOpen: !1,
    message: "",
    handler: null,
    onReject: void 0
  }), r = ({ message: s, handler: o, onReject: l }) => {
    t.isOpen = !0, t.message = s, t.handler = o, t.onReject = l;
  }, n = () => {
    t.isOpen = !1, t.onReject = void 0;
  }, i = M(() => t.isOpen), a = M(() => ({
    title: t.title,
    confirmText: t.confirmText,
    cancelText: t.cancelText,
    message: t.message,
    isOpen: t.isOpen,
    clickCancel: n,
    clickConfirm: (s) => {
      t.handler(s);
    }
  }));
  return {
    open: r,
    isOpen: i,
    props: a,
    state: t,
    cancel: n
  };
}, Kae = (e) => ({
  openConfirmPlus: (t) => {
    e().open(t);
  },
  openConfirm: (t, r, n) => {
    e().open({
      message: t,
      handler: r,
      onReject: n
    });
  },
  isCheckingConfirm: () => e().isOpen,
  cancelConfirm: () => {
    e().cancel();
  }
}), Zae = () => () => {
  const e = Ce({
    messages: []
  }), t = (a) => {
    e.messages.push({
      ...a,
      id: pn.createUuid(),
      duration: 0,
      stopped: a.type === "danger"
    });
  }, r = () => {
    e.messages = e.messages.filter((a) => a.duration <= 100);
  }, n = M(() => e.messages), i = M(() => ({
    onclear: r,
    messages: e.messages
  }));
  return {
    push: t,
    props: i,
    clear: r,
    state: e,
    messages: n
  };
}, Xae = (e) => ({
  showToast: (t, r) => {
    e().push({
      type: t,
      content: r
    });
  },
  pushNotification: (t) => {
    e().push({
      ...t,
      onClick: t.onClick || (() => null)
    });
  }
}), fse = {
  Camera: ol,
  CryptoAES: ss,
  Graphql: zz,
  Request: ZV,
  RuleProvider: bre,
  PersistState: Y_,
  NextGenWorker: Ed,
  NextInteraction: _re,
  QuerySync: W_
}, dse = {
  fetch: {
    fetchAll: Ad,
    fetchAllForLaravelPaginate: Dre,
    fetchAllForStrapi: $re
  },
  ip: {
    getGeoLocation: Hne,
    inChina: zne
  },
  message: {
    parseMessage: A0
  },
  serverData: {
    createLaravelPaginate: Vne,
    createLaravelResourcePaginate: Wne,
    createStrapiList: Yne,
    createStrapiListResource: Une
  },
  storage: {
    asyncLoaclStroageIntercept: Gne,
    loaclStroageIntercept: qne
  },
  table: {
    defineFields: Kne
  },
  text: {
    toHump: Y1
  }
}, hse = {
  defineModel: Xne,
  defineSchema: Zne
}, pse = {
  I18nPlus: Jne,
  RouterPlus: Qne
}, vse = {
  NgAMap: Rl,
  GoogleMap: Ka,
  AppleAuth: nie,
  GoogleAuth: lie,
  FacebookService: cie,
  WechatService: die,
  NextgenMessageTrace: qae
}, gse = {
  createConfirmStore: Gae,
  createNotificationStore: Zae,
  confirmStoreToActions: Kae,
  notificationStoreToActions: Xae
};
window.__ng_state = {};
window.__ng_config = {
  libOptions: {
    staticUrl: "",
    notFoundImage: ""
  },
  libEnv: {
    version: 3,
    stage: "",
    service: ""
  }
};
const Jae = () => window.__ng_config.libOptions, As = () => window.__ng_config.libEnv, mse = {
  setOptions: (e) => {
    for (let t in e)
      window.__ng_config.libOptions[t] = e[t];
  },
  install(e, t) {
    for (let r in t.options)
      window.__ng_config.libOptions[r] = t.options[r];
    for (let r in t.env)
      window.__ng_config.libEnv[r] = t.env[r];
    for (const r in Sv)
      e.component(r, Sv[r]);
    for (const r in kv)
      e.component(r, kv[r]);
  }
};
export {
  gse as LibStores,
  vse as Libraries,
  hse as Model,
  fse as Modules,
  mse as NextgenLib,
  cse as NextgenPiniaPlugin,
  Sv as NgComponents,
  kv as NgLayoutComponents,
  dse as Utils,
  pse as VueExtends,
  use as createStoreLifeCycle,
  lse as genData,
  ose as genRef,
  wj as genStateManager,
  As as getLibEnv,
  Jae as getLibOptions,
  X1 as useDebounce,
  ase as useListenerGroup,
  sse as useLoader,
  hs as useSelf
};
//# sourceMappingURL=index.js.map
