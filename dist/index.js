var O2 = Object.defineProperty;
var F2 = (e, t, r) => t in e ? O2(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var G = (e, t, r) => (F2(e, typeof t != "symbol" ? t + "" : t, r), r);
import { defineComponent as he, computed as M, openBlock as I, createElementBlock as W, normalizeClass as Ae, normalizeStyle as Ne, renderSlot as xe, reactive as Ce, ref as ce, watch as me, onMounted as ot, onUnmounted as Et, toRefs as T2, h as pi, watchEffect as gx, provide as zi, inject as Dl, unref as Y, createBlock as $e, resolveDynamicComponent as mx, normalizeProps as Do, mergeProps as Rn, withKeys as jd, createVNode as ae, withCtx as de, createCommentVNode as pe, withDirectives as xx, createElementVNode as oe, toDisplayString as ke, nextTick as nn, Fragment as Be, renderList as et, toRef as to, resolveComponent as ue, Transition as yx, createTextVNode as kr, isRef as ua, withModifiers as Kf, guardReactiveProps as M2, resolveDirective as P2, toHandlers as B2, useSlots as I2, useAttrs as R2, getCurrentInstance as Ru, warn as N2, shallowRef as Zf, onScopeDispose as L2, effectScope as j2, toRaw as z2, onBeforeUnmount as H2, TransitionGroup as V2 } from "vue";
import { I18n as bx, StyleString as Ya, JobsQueue as El, Debounce as Al, Resource as Y2, ElementListenerGroup as Xf, text as Wa, Event as mt, flow as pn, Exception as W2, element as Hi, Breakpoint as Eo, LocalStorage as _x, pick as Ao, Loader as wx, Hook as $x, Ticker as Dx, Cache as Ex, Interaction as U2, record as Co, array as q2, calc as G2, json as Nu, detect as K2 } from "power-helper";
import { useIntersectionObserver as Ax, useResizeObserver as Z2 } from "@vueuse/core";
const sc = {
  "zh-TW": {
    confirmTitleText: "提醒",
    confirmCancelText: "取消",
    confirmConfirmText: "確定",
    "confirmDoubleCheckText{N}": "請再次輸入 {N}"
  },
  "zh-CN": {
    confirmTitleText: "提醒",
    confirmCancelText: "取消",
    confirmConfirmText: "确定",
    "confirmDoubleCheckText{N}": "请再次输入 {N}"
  },
  "en-US": {
    confirmTitleText: "Warning",
    confirmCancelText: "Cancel",
    confirmConfirmText: "Confirm",
    "confirmDoubleCheckText{N}": "Please enter {N} again"
  }
}, oc = (e) => {
  let t = {};
  for (let r in e)
    t[`ng.${r}`] = e[r];
  return t;
}, X2 = new bx({
  def: "en-US",
  locales: {
    "en-US": oc(sc["en-US"]),
    "zh-TW": oc(sc["zh-TW"]),
    "zh-CN": oc(sc["zh-CN"])
  }
}), J2 = /* @__PURE__ */ he({
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
      let i = new Ya();
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
var St = "top", qt = "bottom", Gt = "right", kt = "left", Jf = "auto", us = [St, qt, Gt, kt], Di = "start", Ua = "end", Q2 = "clippingParents", Cx = "viewport", fa = "popper", ew = "reference", zd = /* @__PURE__ */ us.reduce(function(e, t) {
  return e.concat([t + "-" + Di, t + "-" + Ua]);
}, []), Sx = /* @__PURE__ */ [].concat(us, [Jf]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Di, t + "-" + Ua]);
}, []), tw = "beforeRead", rw = "read", nw = "afterRead", iw = "beforeMain", aw = "main", sw = "afterMain", ow = "beforeWrite", lw = "write", cw = "afterWrite", uw = [tw, rw, nw, iw, aw, sw, ow, lw, cw];
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
function Qf(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = Rt(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function fw(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(r) {
    var n = t.styles[r] || {}, i = t.attributes[r] || {}, a = t.elements[r];
    !Yt(a) || !gr(a) || (Object.assign(a.style, n), Object.keys(i).forEach(function(s) {
      var o = i[s];
      o === !1 ? a.removeAttribute(s) : a.setAttribute(s, o === !0 ? "" : o);
    }));
  });
}
function dw(e) {
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
const hw = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: fw,
  effect: dw,
  requires: ["computeStyles"]
};
function vr(e) {
  return e.split("-")[0];
}
var Mn = Math.max, So = Math.min, Ei = Math.round;
function Lu() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function kx() {
  return !/^((?!chrome|android).)*safari/i.test(Lu());
}
function Ai(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  var n = e.getBoundingClientRect(), i = 1, a = 1;
  t && Yt(e) && (i = e.offsetWidth > 0 && Ei(n.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && Ei(n.height) / e.offsetHeight || 1);
  var s = Nn(e) ? Rt(e) : window, o = s.visualViewport, l = !kx() && r, c = (n.left + (l && o ? o.offsetLeft : 0)) / i, u = (n.top + (l && o ? o.offsetTop : 0)) / a, f = n.width / i, d = n.height / a;
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
function e0(e) {
  var t = Ai(e), r = e.offsetWidth, n = e.offsetHeight;
  return Math.abs(t.width - r) <= 1 && (r = t.width), Math.abs(t.height - n) <= 1 && (n = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: n
  };
}
function Ox(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (r && Qf(r)) {
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
function pw(e) {
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
    (Qf(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    vn(e)
  );
}
function Hd(e) {
  return !Yt(e) || // https://github.com/popperjs/popper-core/issues/837
  Pr(e).position === "fixed" ? null : e.offsetParent;
}
function vw(e) {
  var t = /firefox/i.test(Lu()), r = /Trident/i.test(Lu());
  if (r && Yt(e)) {
    var n = Pr(e);
    if (n.position === "fixed")
      return null;
  }
  var i = Cl(e);
  for (Qf(i) && (i = i.host); Yt(i) && ["html", "body"].indexOf(gr(i)) < 0; ) {
    var a = Pr(i);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function fs(e) {
  for (var t = Rt(e), r = Hd(e); r && pw(r) && Pr(r).position === "static"; )
    r = Hd(r);
  return r && (gr(r) === "html" || gr(r) === "body" && Pr(r).position === "static") ? t : r || vw(e) || t;
}
function t0(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Ta(e, t, r) {
  return Mn(e, So(t, r));
}
function gw(e, t, r) {
  var n = Ta(e, t, r);
  return n > r ? r : n;
}
function Fx() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Tx(e) {
  return Object.assign({}, Fx(), e);
}
function Mx(e, t) {
  return t.reduce(function(r, n) {
    return r[n] = e, r;
  }, {});
}
var mw = function(t, r) {
  return t = typeof t == "function" ? t(Object.assign({}, r.rects, {
    placement: r.placement
  })) : t, Tx(typeof t != "number" ? t : Mx(t, us));
};
function xw(e) {
  var t, r = e.state, n = e.name, i = e.options, a = r.elements.arrow, s = r.modifiersData.popperOffsets, o = vr(r.placement), l = t0(o), c = [kt, Gt].indexOf(o) >= 0, u = c ? "height" : "width";
  if (!(!a || !s)) {
    var f = mw(i.padding, r), d = e0(a), h = l === "y" ? St : kt, p = l === "y" ? qt : Gt, v = r.rects.reference[u] + r.rects.reference[l] - s[l] - r.rects.popper[u], g = s[l] - r.rects.reference[l], m = fs(a), y = m ? l === "y" ? m.clientHeight || 0 : m.clientWidth || 0 : 0, _ = v / 2 - g / 2, x = f[h], b = y - d[u] - f[p], w = y / 2 - d[u] / 2 + _, E = Ta(x, w, b), $ = l;
    r.modifiersData[n] = (t = {}, t[$] = E, t.centerOffset = E - w, t);
  }
}
function yw(e) {
  var t = e.state, r = e.options, n = r.element, i = n === void 0 ? "[data-popper-arrow]" : n;
  i != null && (typeof i == "string" && (i = t.elements.popper.querySelector(i), !i) || Ox(t.elements.popper, i) && (t.elements.arrow = i));
}
const bw = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: xw,
  effect: yw,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Ci(e) {
  return e.split("-")[1];
}
var _w = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function ww(e, t) {
  var r = e.x, n = e.y, i = t.devicePixelRatio || 1;
  return {
    x: Ei(r * i) / i || 0,
    y: Ei(n * i) / i || 0
  };
}
function Vd(e) {
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
    if (w === Rt(r) && (w = vn(r), Pr(w).position !== "static" && o === "absolute" && (E = "scrollHeight", $ = "scrollWidth")), w = w, i === St || (i === kt || i === Gt) && a === Ua) {
      x = qt;
      var C = f && w === b && b.visualViewport ? b.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        w[E]
      );
      v -= C - n.height, v *= l ? 1 : -1;
    }
    if (i === kt || (i === St || i === qt) && a === Ua) {
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
  }, c && _w), S = u === !0 ? ww({
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
function $w(e) {
  var t = e.state, r = e.options, n = r.gpuAcceleration, i = n === void 0 ? !0 : n, a = r.adaptive, s = a === void 0 ? !0 : a, o = r.roundOffsets, l = o === void 0 ? !0 : o, c = {
    placement: vr(t.placement),
    variation: Ci(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: i,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Vd(Object.assign({}, c, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: s,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Vd(Object.assign({}, c, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const Dw = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: $w,
  data: {}
};
var Cs = {
  passive: !0
};
function Ew(e) {
  var t = e.state, r = e.instance, n = e.options, i = n.scroll, a = i === void 0 ? !0 : i, s = n.resize, o = s === void 0 ? !0 : s, l = Rt(t.elements.popper), c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && c.forEach(function(u) {
    u.addEventListener("scroll", r.update, Cs);
  }), o && l.addEventListener("resize", r.update, Cs), function() {
    a && c.forEach(function(u) {
      u.removeEventListener("scroll", r.update, Cs);
    }), o && l.removeEventListener("resize", r.update, Cs);
  };
}
const Aw = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Ew,
  data: {}
};
var Cw = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function ro(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return Cw[t];
  });
}
var Sw = {
  start: "end",
  end: "start"
};
function Yd(e) {
  return e.replace(/start|end/g, function(t) {
    return Sw[t];
  });
}
function r0(e) {
  var t = Rt(e), r = t.pageXOffset, n = t.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: n
  };
}
function n0(e) {
  return Ai(vn(e)).left + r0(e).scrollLeft;
}
function kw(e, t) {
  var r = Rt(e), n = vn(e), i = r.visualViewport, a = n.clientWidth, s = n.clientHeight, o = 0, l = 0;
  if (i) {
    a = i.width, s = i.height;
    var c = kx();
    (c || !c && t === "fixed") && (o = i.offsetLeft, l = i.offsetTop);
  }
  return {
    width: a,
    height: s,
    x: o + n0(e),
    y: l
  };
}
function Ow(e) {
  var t, r = vn(e), n = r0(e), i = (t = e.ownerDocument) == null ? void 0 : t.body, a = Mn(r.scrollWidth, r.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), s = Mn(r.scrollHeight, r.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), o = -n.scrollLeft + n0(e), l = -n.scrollTop;
  return Pr(i || r).direction === "rtl" && (o += Mn(r.clientWidth, i ? i.clientWidth : 0) - a), {
    width: a,
    height: s,
    x: o,
    y: l
  };
}
function i0(e) {
  var t = Pr(e), r = t.overflow, n = t.overflowX, i = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + i + n);
}
function Px(e) {
  return ["html", "body", "#document"].indexOf(gr(e)) >= 0 ? e.ownerDocument.body : Yt(e) && i0(e) ? e : Px(Cl(e));
}
function Ma(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = Px(e), i = n === ((r = e.ownerDocument) == null ? void 0 : r.body), a = Rt(n), s = i ? [a].concat(a.visualViewport || [], i0(n) ? n : []) : n, o = t.concat(s);
  return i ? o : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    o.concat(Ma(Cl(s)))
  );
}
function ju(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function Fw(e, t) {
  var r = Ai(e, !1, t === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function Wd(e, t, r) {
  return t === Cx ? ju(kw(e, r)) : Nn(t) ? Fw(t, r) : ju(Ow(vn(e)));
}
function Tw(e) {
  var t = Ma(Cl(e)), r = ["absolute", "fixed"].indexOf(Pr(e).position) >= 0, n = r && Yt(e) ? fs(e) : e;
  return Nn(n) ? t.filter(function(i) {
    return Nn(i) && Ox(i, n) && gr(i) !== "body";
  }) : [];
}
function Mw(e, t, r, n) {
  var i = t === "clippingParents" ? Tw(e) : [].concat(t), a = [].concat(i, [r]), s = a[0], o = a.reduce(function(l, c) {
    var u = Wd(e, c, n);
    return l.top = Mn(u.top, l.top), l.right = So(u.right, l.right), l.bottom = So(u.bottom, l.bottom), l.left = Mn(u.left, l.left), l;
  }, Wd(e, s, n));
  return o.width = o.right - o.left, o.height = o.bottom - o.top, o.x = o.left, o.y = o.top, o;
}
function Bx(e) {
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
  var c = i ? t0(i) : null;
  if (c != null) {
    var u = c === "y" ? "height" : "width";
    switch (a) {
      case Di:
        l[c] = l[c] - (t[u] / 2 - r[u] / 2);
        break;
      case Ua:
        l[c] = l[c] + (t[u] / 2 - r[u] / 2);
        break;
    }
  }
  return l;
}
function qa(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, i = n === void 0 ? e.placement : n, a = r.strategy, s = a === void 0 ? e.strategy : a, o = r.boundary, l = o === void 0 ? Q2 : o, c = r.rootBoundary, u = c === void 0 ? Cx : c, f = r.elementContext, d = f === void 0 ? fa : f, h = r.altBoundary, p = h === void 0 ? !1 : h, v = r.padding, g = v === void 0 ? 0 : v, m = Tx(typeof g != "number" ? g : Mx(g, us)), y = d === fa ? ew : fa, _ = e.rects.popper, x = e.elements[p ? y : d], b = Mw(Nn(x) ? x : x.contextElement || vn(e.elements.popper), l, u, s), w = Ai(e.elements.reference), E = Bx({
    reference: w,
    element: _,
    strategy: "absolute",
    placement: i
  }), $ = ju(Object.assign({}, _, E)), C = d === fa ? $ : w, D = {
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
function Pw(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, i = r.boundary, a = r.rootBoundary, s = r.padding, o = r.flipVariations, l = r.allowedAutoPlacements, c = l === void 0 ? Sx : l, u = Ci(n), f = u ? o ? zd : zd.filter(function(p) {
    return Ci(p) === u;
  }) : us, d = f.filter(function(p) {
    return c.indexOf(p) >= 0;
  });
  d.length === 0 && (d = f);
  var h = d.reduce(function(p, v) {
    return p[v] = qa(e, {
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
function Bw(e) {
  if (vr(e) === Jf)
    return [];
  var t = ro(e);
  return [Yd(e), t, Yd(t)];
}
function Iw(e) {
  var t = e.state, r = e.options, n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (var i = r.mainAxis, a = i === void 0 ? !0 : i, s = r.altAxis, o = s === void 0 ? !0 : s, l = r.fallbackPlacements, c = r.padding, u = r.boundary, f = r.rootBoundary, d = r.altBoundary, h = r.flipVariations, p = h === void 0 ? !0 : h, v = r.allowedAutoPlacements, g = t.options.placement, m = vr(g), y = m === g, _ = l || (y || !p ? [ro(g)] : Bw(g)), x = [g].concat(_).reduce(function(F, te) {
      return F.concat(vr(te) === Jf ? Pw(t, {
        placement: te,
        boundary: u,
        rootBoundary: f,
        padding: c,
        flipVariations: p,
        allowedAutoPlacements: v
      }) : te);
    }, []), b = t.rects.reference, w = t.rects.popper, E = /* @__PURE__ */ new Map(), $ = !0, C = x[0], D = 0; D < x.length; D++) {
      var A = x[D], S = vr(A), k = Ci(A) === Di, j = [St, qt].indexOf(S) >= 0, P = j ? "width" : "height", H = qa(t, {
        placement: A,
        boundary: u,
        rootBoundary: f,
        altBoundary: d,
        padding: c
      }), K = j ? k ? Gt : kt : k ? qt : St;
      b[P] > w[P] && (K = ro(K));
      var X = ro(K), Z = [];
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
const Rw = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Iw,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Ud(e, t, r) {
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
function qd(e) {
  return [St, Gt, qt, kt].some(function(t) {
    return e[t] >= 0;
  });
}
function Nw(e) {
  var t = e.state, r = e.name, n = t.rects.reference, i = t.rects.popper, a = t.modifiersData.preventOverflow, s = qa(t, {
    elementContext: "reference"
  }), o = qa(t, {
    altBoundary: !0
  }), l = Ud(s, n), c = Ud(o, i, a), u = qd(l), f = qd(c);
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
const Lw = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: Nw
};
function jw(e, t, r) {
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
function zw(e) {
  var t = e.state, r = e.options, n = e.name, i = r.offset, a = i === void 0 ? [0, 0] : i, s = Sx.reduce(function(u, f) {
    return u[f] = jw(f, t.rects, a), u;
  }, {}), o = s[t.placement], l = o.x, c = o.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += c), t.modifiersData[n] = s;
}
const Hw = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: zw
};
function Vw(e) {
  var t = e.state, r = e.name;
  t.modifiersData[r] = Bx({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const Yw = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Vw,
  data: {}
};
function Ww(e) {
  return e === "x" ? "y" : "x";
}
function Uw(e) {
  var t = e.state, r = e.options, n = e.name, i = r.mainAxis, a = i === void 0 ? !0 : i, s = r.altAxis, o = s === void 0 ? !1 : s, l = r.boundary, c = r.rootBoundary, u = r.altBoundary, f = r.padding, d = r.tether, h = d === void 0 ? !0 : d, p = r.tetherOffset, v = p === void 0 ? 0 : p, g = qa(t, {
    boundary: l,
    rootBoundary: c,
    padding: f,
    altBoundary: u
  }), m = vr(t.placement), y = Ci(t.placement), _ = !y, x = t0(m), b = Ww(x), w = t.modifiersData.popperOffsets, E = t.rects.reference, $ = t.rects.popper, C = typeof v == "function" ? v(Object.assign({}, t.rects, {
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
      var k, j = x === "y" ? St : kt, P = x === "y" ? qt : Gt, H = x === "y" ? "height" : "width", K = w[x], X = K + g[j], Z = K - g[P], B = h ? -$[H] / 2 : 0, T = y === Di ? E[H] : $[H], R = y === Di ? -$[H] : -E[H], N = t.elements.arrow, F = h && N ? e0(N) : {
        width: 0,
        height: 0
      }, te = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Fx(), J = te[j], be = te[P], ee = Ta(0, E[H], F[H]), _e = _ ? E[H] / 2 - B - ee - J - D.mainAxis : T - ee - J - D.mainAxis, Xe = _ ? -E[H] / 2 + B + ee + be + D.mainAxis : R + ee + be + D.mainAxis, Qe = t.elements.arrow && fs(t.elements.arrow), tt = Qe ? x === "y" ? Qe.clientTop || 0 : Qe.clientLeft || 0 : 0, Ie = (k = A == null ? void 0 : A[x]) != null ? k : 0, We = K + _e - Ie - tt, bt = K + Xe - Ie, Ot = Ta(h ? So(X, We) : X, K, h ? Mn(Z, bt) : Z);
      w[x] = Ot, S[x] = Ot - K;
    }
    if (o) {
      var Ft, Tt = x === "x" ? St : kt, _r = x === "x" ? qt : Gt, ct = w[b], ze = b === "y" ? "height" : "width", Ue = ct + g[Tt], dt = ct - g[_r], Mt = [St, kt].indexOf(m) !== -1, Nt = (Ft = A == null ? void 0 : A[b]) != null ? Ft : 0, At = Mt ? Ue : ct - E[ze] - $[ze] - Nt + D.altAxis, Lt = Mt ? ct + E[ze] + $[ze] - Nt - D.altAxis : dt, Ur = h && Mt ? gw(At, ct, Lt) : Ta(h ? At : Ue, ct, h ? Lt : dt);
      w[b] = Ur, S[b] = Ur - ct;
    }
    t.modifiersData[n] = S;
  }
}
const qw = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Uw,
  requiresIfExists: ["offset"]
};
function Gw(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Kw(e) {
  return e === Rt(e) || !Yt(e) ? r0(e) : Gw(e);
}
function Zw(e) {
  var t = e.getBoundingClientRect(), r = Ei(t.width) / e.offsetWidth || 1, n = Ei(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function Xw(e, t, r) {
  r === void 0 && (r = !1);
  var n = Yt(t), i = Yt(t) && Zw(t), a = vn(t), s = Ai(e, i, r), o = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (n || !n && !r) && ((gr(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  i0(a)) && (o = Kw(t)), Yt(t) ? (l = Ai(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : a && (l.x = n0(a))), {
    x: s.left + o.scrollLeft - l.x,
    y: s.top + o.scrollTop - l.y,
    width: s.width,
    height: s.height
  };
}
function Jw(e) {
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
function Qw(e) {
  var t = Jw(e);
  return uw.reduce(function(r, n) {
    return r.concat(t.filter(function(i) {
      return i.phase === n;
    }));
  }, []);
}
function e$(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(r) {
      Promise.resolve().then(function() {
        t = void 0, r(e());
      });
    })), t;
  };
}
function t$(e) {
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
var Gd = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Kd() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return !t.some(function(n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function r$(e) {
  e === void 0 && (e = {});
  var t = e, r = t.defaultModifiers, n = r === void 0 ? [] : r, i = t.defaultOptions, a = i === void 0 ? Gd : i;
  return function(o, l, c) {
    c === void 0 && (c = a);
    var u = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Gd, a),
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
          reference: Nn(o) ? Ma(o) : o.contextElement ? Ma(o.contextElement) : [],
          popper: Ma(l)
        };
        var _ = Qw(t$([].concat(n, u.options.modifiers)));
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
          if (Kd(y, _)) {
            u.rects = {
              reference: Xw(y, fs(_), u.options.strategy === "fixed"),
              popper: e0(_)
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
      update: e$(function() {
        return new Promise(function(g) {
          h.forceUpdate(), g(u);
        });
      }),
      destroy: function() {
        v(), d = !0;
      }
    };
    if (!Kd(o, l))
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
var n$ = [Aw, Yw, Dw, hw, Hw, Rw, qw, bw, Lw], i$ = /* @__PURE__ */ r$({
  defaultModifiers: n$
}), a$ = Object.defineProperty, s$ = (e, t, r) => t in e ? a$(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, re = (e, t, r) => (s$(e, typeof t != "symbol" ? t + "" : t, r), r);
const Nr = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [n, i] of t)
    r[n] = i;
  return r;
}, o$ = {}, l$ = {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  viewBox: "0 0 24 24"
}, c$ = /* @__PURE__ */ oe("polyline", { points: "9 18 15 12 9 6" }, null, -1), u$ = [
  c$
];
function f$(e, t) {
  return I(), W("svg", l$, u$);
}
const d$ = /* @__PURE__ */ Nr(o$, [["render", f$]]), h$ = {}, p$ = {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  viewBox: "0 0 24 24"
}, v$ = /* @__PURE__ */ oe("polyline", { points: "15 18 9 12 15 6" }, null, -1), g$ = [
  v$
];
function m$(e, t) {
  return I(), W("svg", p$, g$);
}
const x$ = /* @__PURE__ */ Nr(h$, [["render", m$]]), y$ = {}, b$ = {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  viewBox: "0 0 24 24"
}, _$ = /* @__PURE__ */ oe("polyline", { points: "6 9 12 15 18 9" }, null, -1), w$ = [
  _$
];
function $$(e, t) {
  return I(), W("svg", b$, w$);
}
const D$ = /* @__PURE__ */ Nr(y$, [["render", $$]]), E$ = {}, A$ = {
  fill: "none",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  viewBox: "0 0 24 24"
}, C$ = /* @__PURE__ */ oe("path", { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" }, null, -1), S$ = [
  C$
];
function k$(e, t) {
  return I(), W("svg", A$, S$);
}
const O$ = /* @__PURE__ */ Nr(E$, [["render", k$]]), F$ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  IconChevronDown: D$,
  IconChevronLeft: x$,
  IconChevronRight: d$,
  IconClock: O$
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
    const t = e, r = M(() => t.width || t.size), n = M(() => t.height || t.size), i = M(() => F$[`Icon${t.name}`]);
    return (a, s) => (I(), $e(mx(Y(i)), {
      width: Y(r),
      height: Y(n),
      class: "vc-base-icon"
    }, null, 8, ["width", "height"]));
  }
});
function Ix() {
  return typeof window < "u";
}
function T$(e) {
  return Ix() && e in window;
}
function M$(e) {
  const t = ce(!1), r = M(() => t.value ? "dark" : "light");
  let n, i;
  function a(h) {
    t.value = h.matches;
  }
  function s() {
    T$("matchMedia") && (n = window.matchMedia("(prefers-color-scheme: dark)"), n.addEventListener("change", a), t.value = n.matches);
  }
  function o() {
    const { selector: h = ":root", darkClass: p = "dark" } = e.value, v = document.querySelector(h);
    t.value = v.classList.contains(p);
  }
  function l(h) {
    const { selector: p = ":root", darkClass: v = "dark" } = h;
    if (Ix() && p && v) {
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
  const u = me(() => e.value, () => c(), {
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
function P$(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var B$ = typeof Ss == "object" && Ss && Ss.Object === Object && Ss, Rx = B$, I$ = Rx, R$ = typeof self == "object" && self && self.Object === Object && self, N$ = I$ || R$ || Function("return this")(), mr = N$, L$ = mr, j$ = L$.Symbol, Sl = j$, Zd = Sl, Nx = Object.prototype, z$ = Nx.hasOwnProperty, H$ = Nx.toString, da = Zd ? Zd.toStringTag : void 0;
function V$(e) {
  var t = z$.call(e, da), r = e[da];
  try {
    e[da] = void 0;
    var n = !0;
  } catch {
  }
  var i = H$.call(e);
  return n && (t ? e[da] = r : delete e[da]), i;
}
var Y$ = V$, W$ = Object.prototype, U$ = W$.toString;
function q$(e) {
  return U$.call(e);
}
var G$ = q$, Xd = Sl, K$ = Y$, Z$ = G$, X$ = "[object Null]", J$ = "[object Undefined]", Jd = Xd ? Xd.toStringTag : void 0;
function Q$(e) {
  return e == null ? e === void 0 ? J$ : X$ : Jd && Jd in Object(e) ? K$(e) : Z$(e);
}
var xr = Q$;
function eD(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Lr = eD, tD = xr, rD = Lr, nD = "[object AsyncFunction]", iD = "[object Function]", aD = "[object GeneratorFunction]", sD = "[object Proxy]";
function oD(e) {
  if (!rD(e))
    return !1;
  var t = tD(e);
  return t == iD || t == aD || t == nD || t == sD;
}
var Yn = oD, lD = Array.isArray, ir = lD;
function cD(e) {
  return e != null && typeof e == "object";
}
var ar = cD, uD = xr, fD = ir, dD = ar, hD = "[object String]";
function pD(e) {
  return typeof e == "string" || !fD(e) && dD(e) && uD(e) == hD;
}
var dr = pD, vD = xr, gD = ar, mD = "[object Boolean]";
function xD(e) {
  return e === !0 || e === !1 || gD(e) && vD(e) == mD;
}
var yD = xD, bD = xr, _D = ar, wD = "[object Number]";
function $D(e) {
  return typeof e == "number" || _D(e) && bD(e) == wD;
}
var nr = $D, DD = xr, ED = ar, AD = "[object Date]";
function CD(e) {
  return ED(e) && DD(e) == AD;
}
var SD = CD;
function kD(e) {
  return function(t) {
    return e(t);
  };
}
var Lx = kD, Ga = {}, OD = {
  get exports() {
    return Ga;
  },
  set exports(e) {
    Ga = e;
  }
};
(function(e, t) {
  var r = Rx, n = t && !t.nodeType && t, i = n && !0 && e && !e.nodeType && e, a = i && i.exports === n, s = a && r.process, o = function() {
    try {
      var l = i && i.require && i.require("util").types;
      return l || s && s.binding && s.binding("util");
    } catch {
    }
  }();
  e.exports = o;
})(OD, Ga);
var FD = SD, TD = Lx, Qd = Ga, eh = Qd && Qd.isDate, MD = eh ? TD(eh) : FD, PD = MD, BD = xr, ID = ar, RD = "[object Symbol]";
function ND(e) {
  return typeof e == "symbol" || ID(e) && BD(e) == RD;
}
var a0 = ND, LD = ir, jD = a0, zD = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, HD = /^\w*$/;
function VD(e, t) {
  if (LD(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || jD(e) ? !0 : HD.test(e) || !zD.test(e) || t != null && e in Object(t);
}
var s0 = VD, YD = mr, WD = YD["__core-js_shared__"], UD = WD, lc = UD, th = function() {
  var e = /[^.]+$/.exec(lc && lc.keys && lc.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function qD(e) {
  return !!th && th in e;
}
var GD = qD, KD = Function.prototype, ZD = KD.toString;
function XD(e) {
  if (e != null) {
    try {
      return ZD.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var jx = XD, JD = Yn, QD = GD, eE = Lr, tE = jx, rE = /[\\^$.*+?()[\]{}|]/g, nE = /^\[object .+?Constructor\]$/, iE = Function.prototype, aE = Object.prototype, sE = iE.toString, oE = aE.hasOwnProperty, lE = RegExp(
  "^" + sE.call(oE).replace(rE, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function cE(e) {
  if (!eE(e) || QD(e))
    return !1;
  var t = JD(e) ? lE : nE;
  return t.test(tE(e));
}
var uE = cE;
function fE(e, t) {
  return e == null ? void 0 : e[t];
}
var dE = fE, hE = uE, pE = dE;
function vE(e, t) {
  var r = pE(e, t);
  return hE(r) ? r : void 0;
}
var Wn = vE, gE = Wn, mE = gE(Object, "create"), kl = mE, rh = kl;
function xE() {
  this.__data__ = rh ? rh(null) : {}, this.size = 0;
}
var yE = xE;
function bE(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var _E = bE, wE = kl, $E = "__lodash_hash_undefined__", DE = Object.prototype, EE = DE.hasOwnProperty;
function AE(e) {
  var t = this.__data__;
  if (wE) {
    var r = t[e];
    return r === $E ? void 0 : r;
  }
  return EE.call(t, e) ? t[e] : void 0;
}
var CE = AE, SE = kl, kE = Object.prototype, OE = kE.hasOwnProperty;
function FE(e) {
  var t = this.__data__;
  return SE ? t[e] !== void 0 : OE.call(t, e);
}
var TE = FE, ME = kl, PE = "__lodash_hash_undefined__";
function BE(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = ME && t === void 0 ? PE : t, this;
}
var IE = BE, RE = yE, NE = _E, LE = CE, jE = TE, zE = IE;
function Vi(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Vi.prototype.clear = RE;
Vi.prototype.delete = NE;
Vi.prototype.get = LE;
Vi.prototype.has = jE;
Vi.prototype.set = zE;
var HE = Vi;
function VE() {
  this.__data__ = [], this.size = 0;
}
var YE = VE;
function WE(e, t) {
  return e === t || e !== e && t !== t;
}
var Yi = WE, UE = Yi;
function qE(e, t) {
  for (var r = e.length; r--; )
    if (UE(e[r][0], t))
      return r;
  return -1;
}
var Ol = qE, GE = Ol, KE = Array.prototype, ZE = KE.splice;
function XE(e) {
  var t = this.__data__, r = GE(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : ZE.call(t, r, 1), --this.size, !0;
}
var JE = XE, QE = Ol;
function eA(e) {
  var t = this.__data__, r = QE(t, e);
  return r < 0 ? void 0 : t[r][1];
}
var tA = eA, rA = Ol;
function nA(e) {
  return rA(this.__data__, e) > -1;
}
var iA = nA, aA = Ol;
function sA(e, t) {
  var r = this.__data__, n = aA(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
var oA = sA, lA = YE, cA = JE, uA = tA, fA = iA, dA = oA;
function Wi(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Wi.prototype.clear = lA;
Wi.prototype.delete = cA;
Wi.prototype.get = uA;
Wi.prototype.has = fA;
Wi.prototype.set = dA;
var Fl = Wi, hA = Wn, pA = mr, vA = hA(pA, "Map"), o0 = vA, nh = HE, gA = Fl, mA = o0;
function xA() {
  this.size = 0, this.__data__ = {
    hash: new nh(),
    map: new (mA || gA)(),
    string: new nh()
  };
}
var yA = xA;
function bA(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var _A = bA, wA = _A;
function $A(e, t) {
  var r = e.__data__;
  return wA(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
var Tl = $A, DA = Tl;
function EA(e) {
  var t = DA(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var AA = EA, CA = Tl;
function SA(e) {
  return CA(this, e).get(e);
}
var kA = SA, OA = Tl;
function FA(e) {
  return OA(this, e).has(e);
}
var TA = FA, MA = Tl;
function PA(e, t) {
  var r = MA(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
var BA = PA, IA = yA, RA = AA, NA = kA, LA = TA, jA = BA;
function Ui(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Ui.prototype.clear = IA;
Ui.prototype.delete = RA;
Ui.prototype.get = NA;
Ui.prototype.has = LA;
Ui.prototype.set = jA;
var l0 = Ui, zx = l0, zA = "Expected a function";
function c0(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(zA);
  var r = function() {
    var n = arguments, i = t ? t.apply(this, n) : n[0], a = r.cache;
    if (a.has(i))
      return a.get(i);
    var s = e.apply(this, n);
    return r.cache = a.set(i, s) || a, s;
  };
  return r.cache = new (c0.Cache || zx)(), r;
}
c0.Cache = zx;
var HA = c0, VA = HA, YA = 500;
function WA(e) {
  var t = VA(e, function(n) {
    return r.size === YA && r.clear(), n;
  }), r = t.cache;
  return t;
}
var UA = WA, qA = UA, GA = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, KA = /\\(\\)?/g, ZA = qA(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(GA, function(r, n, i, a) {
    t.push(i ? a.replace(KA, "$1") : n || r);
  }), t;
}), XA = ZA;
function JA(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; )
    i[r] = t(e[r], r, e);
  return i;
}
var QA = JA, ih = Sl, eC = QA, tC = ir, rC = a0, nC = 1 / 0, ah = ih ? ih.prototype : void 0, sh = ah ? ah.toString : void 0;
function Hx(e) {
  if (typeof e == "string")
    return e;
  if (tC(e))
    return eC(e, Hx) + "";
  if (rC(e))
    return sh ? sh.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -nC ? "-0" : t;
}
var iC = Hx, aC = iC;
function sC(e) {
  return e == null ? "" : aC(e);
}
var oC = sC, lC = ir, cC = s0, uC = XA, fC = oC;
function dC(e, t) {
  return lC(e) ? e : cC(e, t) ? [e] : uC(fC(e));
}
var Vx = dC, hC = a0, pC = 1 / 0;
function vC(e) {
  if (typeof e == "string" || hC(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -pC ? "-0" : t;
}
var Ml = vC, gC = Vx, mC = Ml;
function xC(e, t) {
  t = gC(t, e);
  for (var r = 0, n = t.length; e != null && r < n; )
    e = e[mC(t[r++])];
  return r && r == n ? e : void 0;
}
var Yx = xC, yC = Yx;
function bC(e, t, r) {
  var n = e == null ? void 0 : yC(e, t);
  return n === void 0 ? r : n;
}
var Fn = bC, _C = Wn, wC = function() {
  try {
    var e = _C(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), Wx = wC, oh = Wx;
function $C(e, t, r) {
  t == "__proto__" && oh ? oh(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
var Pl = $C, DC = Pl, EC = Yi, AC = Object.prototype, CC = AC.hasOwnProperty;
function SC(e, t, r) {
  var n = e[t];
  (!(CC.call(e, t) && EC(n, r)) || r === void 0 && !(t in e)) && DC(e, t, r);
}
var kC = SC, OC = 9007199254740991, FC = /^(?:0|[1-9]\d*)$/;
function TC(e, t) {
  var r = typeof e;
  return t = t ?? OC, !!t && (r == "number" || r != "symbol" && FC.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var u0 = TC;
function MC(e) {
  return function(t, r, n) {
    for (var i = -1, a = Object(t), s = n(t), o = s.length; o--; ) {
      var l = s[e ? o : ++i];
      if (r(a[l], l, a) === !1)
        break;
    }
    return t;
  };
}
var PC = MC, BC = PC, IC = BC(), Ux = IC;
function RC(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var NC = RC, LC = xr, jC = ar, zC = "[object Arguments]";
function HC(e) {
  return jC(e) && LC(e) == zC;
}
var VC = HC, lh = VC, YC = ar, qx = Object.prototype, WC = qx.hasOwnProperty, UC = qx.propertyIsEnumerable, qC = lh(/* @__PURE__ */ function() {
  return arguments;
}()) ? lh : function(e) {
  return YC(e) && WC.call(e, "callee") && !UC.call(e, "callee");
}, f0 = qC, ki = {}, GC = {
  get exports() {
    return ki;
  },
  set exports(e) {
    ki = e;
  }
};
function KC() {
  return !1;
}
var ZC = KC;
(function(e, t) {
  var r = mr, n = ZC, i = t && !t.nodeType && t, a = i && !0 && e && !e.nodeType && e, s = a && a.exports === i, o = s ? r.Buffer : void 0, l = o ? o.isBuffer : void 0, c = l || n;
  e.exports = c;
})(GC, ki);
var XC = 9007199254740991;
function JC(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= XC;
}
var d0 = JC, QC = xr, eS = d0, tS = ar, rS = "[object Arguments]", nS = "[object Array]", iS = "[object Boolean]", aS = "[object Date]", sS = "[object Error]", oS = "[object Function]", lS = "[object Map]", cS = "[object Number]", uS = "[object Object]", fS = "[object RegExp]", dS = "[object Set]", hS = "[object String]", pS = "[object WeakMap]", vS = "[object ArrayBuffer]", gS = "[object DataView]", mS = "[object Float32Array]", xS = "[object Float64Array]", yS = "[object Int8Array]", bS = "[object Int16Array]", _S = "[object Int32Array]", wS = "[object Uint8Array]", $S = "[object Uint8ClampedArray]", DS = "[object Uint16Array]", ES = "[object Uint32Array]", Te = {};
Te[mS] = Te[xS] = Te[yS] = Te[bS] = Te[_S] = Te[wS] = Te[$S] = Te[DS] = Te[ES] = !0;
Te[rS] = Te[nS] = Te[vS] = Te[iS] = Te[gS] = Te[aS] = Te[sS] = Te[oS] = Te[lS] = Te[cS] = Te[uS] = Te[fS] = Te[dS] = Te[hS] = Te[pS] = !1;
function AS(e) {
  return tS(e) && eS(e.length) && !!Te[QC(e)];
}
var CS = AS, SS = CS, kS = Lx, ch = Ga, uh = ch && ch.isTypedArray, OS = uh ? kS(uh) : SS, h0 = OS, FS = NC, TS = f0, MS = ir, PS = ki, BS = u0, IS = h0, RS = Object.prototype, NS = RS.hasOwnProperty;
function LS(e, t) {
  var r = MS(e), n = !r && TS(e), i = !r && !n && PS(e), a = !r && !n && !i && IS(e), s = r || n || i || a, o = s ? FS(e.length, String) : [], l = o.length;
  for (var c in e)
    (t || NS.call(e, c)) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    BS(c, l))) && o.push(c);
  return o;
}
var Gx = LS, jS = Object.prototype;
function zS(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || jS;
  return e === r;
}
var p0 = zS;
function HS(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var Kx = HS, VS = Kx, YS = VS(Object.keys, Object), WS = YS, US = p0, qS = WS, GS = Object.prototype, KS = GS.hasOwnProperty;
function ZS(e) {
  if (!US(e))
    return qS(e);
  var t = [];
  for (var r in Object(e))
    KS.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
var XS = ZS, JS = Yn, QS = d0;
function ek(e) {
  return e != null && QS(e.length) && !JS(e);
}
var ds = ek, tk = Gx, rk = XS, nk = ds;
function ik(e) {
  return nk(e) ? tk(e) : rk(e);
}
var v0 = ik, ak = Ux, sk = v0;
function ok(e, t) {
  return e && ak(e, t, sk);
}
var Zx = ok, lk = Fl;
function ck() {
  this.__data__ = new lk(), this.size = 0;
}
var uk = ck;
function fk(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
var dk = fk;
function hk(e) {
  return this.__data__.get(e);
}
var pk = hk;
function vk(e) {
  return this.__data__.has(e);
}
var gk = vk, mk = Fl, xk = o0, yk = l0, bk = 200;
function _k(e, t) {
  var r = this.__data__;
  if (r instanceof mk) {
    var n = r.__data__;
    if (!xk || n.length < bk - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new yk(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
var wk = _k, $k = Fl, Dk = uk, Ek = dk, Ak = pk, Ck = gk, Sk = wk;
function qi(e) {
  var t = this.__data__ = new $k(e);
  this.size = t.size;
}
qi.prototype.clear = Dk;
qi.prototype.delete = Ek;
qi.prototype.get = Ak;
qi.prototype.has = Ck;
qi.prototype.set = Sk;
var g0 = qi, kk = "__lodash_hash_undefined__";
function Ok(e) {
  return this.__data__.set(e, kk), this;
}
var Fk = Ok;
function Tk(e) {
  return this.__data__.has(e);
}
var Mk = Tk, Pk = l0, Bk = Fk, Ik = Mk;
function ko(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new Pk(); ++t < r; )
    this.add(e[t]);
}
ko.prototype.add = ko.prototype.push = Bk;
ko.prototype.has = Ik;
var Rk = ko;
function Nk(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
var Xx = Nk;
function Lk(e, t) {
  return e.has(t);
}
var jk = Lk, zk = Rk, Hk = Xx, Vk = jk, Yk = 1, Wk = 2;
function Uk(e, t, r, n, i, a) {
  var s = r & Yk, o = e.length, l = t.length;
  if (o != l && !(s && l > o))
    return !1;
  var c = a.get(e), u = a.get(t);
  if (c && u)
    return c == t && u == e;
  var f = -1, d = !0, h = r & Wk ? new zk() : void 0;
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
      if (!Hk(t, function(m, y) {
        if (!Vk(h, y) && (p === m || i(p, m, r, n, a)))
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
var Jx = Uk, qk = mr, Gk = qk.Uint8Array, Qx = Gk;
function Kk(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n, i) {
    r[++t] = [i, n];
  }), r;
}
var Zk = Kk;
function Xk(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n) {
    r[++t] = n;
  }), r;
}
var Jk = Xk, fh = Sl, dh = Qx, Qk = Yi, eO = Jx, tO = Zk, rO = Jk, nO = 1, iO = 2, aO = "[object Boolean]", sO = "[object Date]", oO = "[object Error]", lO = "[object Map]", cO = "[object Number]", uO = "[object RegExp]", fO = "[object Set]", dO = "[object String]", hO = "[object Symbol]", pO = "[object ArrayBuffer]", vO = "[object DataView]", hh = fh ? fh.prototype : void 0, cc = hh ? hh.valueOf : void 0;
function gO(e, t, r, n, i, a, s) {
  switch (r) {
    case vO:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case pO:
      return !(e.byteLength != t.byteLength || !a(new dh(e), new dh(t)));
    case aO:
    case sO:
    case cO:
      return Qk(+e, +t);
    case oO:
      return e.name == t.name && e.message == t.message;
    case uO:
    case dO:
      return e == t + "";
    case lO:
      var o = tO;
    case fO:
      var l = n & nO;
      if (o || (o = rO), e.size != t.size && !l)
        return !1;
      var c = s.get(e);
      if (c)
        return c == t;
      n |= iO, s.set(e, t);
      var u = eO(o(e), o(t), n, i, a, s);
      return s.delete(e), u;
    case hO:
      if (cc)
        return cc.call(e) == cc.call(t);
  }
  return !1;
}
var mO = gO;
function xO(e, t) {
  for (var r = -1, n = t.length, i = e.length; ++r < n; )
    e[i + r] = t[r];
  return e;
}
var yO = xO, bO = yO, _O = ir;
function wO(e, t, r) {
  var n = t(e);
  return _O(e) ? n : bO(n, r(e));
}
var $O = wO;
function DO(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = 0, a = []; ++r < n; ) {
    var s = e[r];
    t(s, r, e) && (a[i++] = s);
  }
  return a;
}
var EO = DO;
function AO() {
  return [];
}
var CO = AO, SO = EO, kO = CO, OO = Object.prototype, FO = OO.propertyIsEnumerable, ph = Object.getOwnPropertySymbols, TO = ph ? function(e) {
  return e == null ? [] : (e = Object(e), SO(ph(e), function(t) {
    return FO.call(e, t);
  }));
} : kO, MO = TO, PO = $O, BO = MO, IO = v0;
function RO(e) {
  return PO(e, IO, BO);
}
var NO = RO, vh = NO, LO = 1, jO = Object.prototype, zO = jO.hasOwnProperty;
function HO(e, t, r, n, i, a) {
  var s = r & LO, o = vh(e), l = o.length, c = vh(t), u = c.length;
  if (l != u && !s)
    return !1;
  for (var f = l; f--; ) {
    var d = o[f];
    if (!(s ? d in t : zO.call(t, d)))
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
var VO = HO, YO = Wn, WO = mr, UO = YO(WO, "DataView"), qO = UO, GO = Wn, KO = mr, ZO = GO(KO, "Promise"), XO = ZO, JO = Wn, QO = mr, e4 = JO(QO, "Set"), t4 = e4, r4 = Wn, n4 = mr, i4 = r4(n4, "WeakMap"), a4 = i4, zu = qO, Hu = o0, Vu = XO, Yu = t4, Wu = a4, e1 = xr, Gi = jx, gh = "[object Map]", s4 = "[object Object]", mh = "[object Promise]", xh = "[object Set]", yh = "[object WeakMap]", bh = "[object DataView]", o4 = Gi(zu), l4 = Gi(Hu), c4 = Gi(Vu), u4 = Gi(Yu), f4 = Gi(Wu), En = e1;
(zu && En(new zu(new ArrayBuffer(1))) != bh || Hu && En(new Hu()) != gh || Vu && En(Vu.resolve()) != mh || Yu && En(new Yu()) != xh || Wu && En(new Wu()) != yh) && (En = function(e) {
  var t = e1(e), r = t == s4 ? e.constructor : void 0, n = r ? Gi(r) : "";
  if (n)
    switch (n) {
      case o4:
        return bh;
      case l4:
        return gh;
      case c4:
        return mh;
      case u4:
        return xh;
      case f4:
        return yh;
    }
  return t;
});
var d4 = En, uc = g0, h4 = Jx, p4 = mO, v4 = VO, _h = d4, wh = ir, $h = ki, g4 = h0, m4 = 1, Dh = "[object Arguments]", Eh = "[object Array]", ks = "[object Object]", x4 = Object.prototype, Ah = x4.hasOwnProperty;
function y4(e, t, r, n, i, a) {
  var s = wh(e), o = wh(t), l = s ? Eh : _h(e), c = o ? Eh : _h(t);
  l = l == Dh ? ks : l, c = c == Dh ? ks : c;
  var u = l == ks, f = c == ks, d = l == c;
  if (d && $h(e)) {
    if (!$h(t))
      return !1;
    s = !0, u = !1;
  }
  if (d && !u)
    return a || (a = new uc()), s || g4(e) ? h4(e, t, r, n, i, a) : p4(e, t, l, r, n, i, a);
  if (!(r & m4)) {
    var h = u && Ah.call(e, "__wrapped__"), p = f && Ah.call(t, "__wrapped__");
    if (h || p) {
      var v = h ? e.value() : e, g = p ? t.value() : t;
      return a || (a = new uc()), i(v, g, r, n, a);
    }
  }
  return d ? (a || (a = new uc()), v4(e, t, r, n, i, a)) : !1;
}
var b4 = y4, _4 = b4, Ch = ar;
function t1(e, t, r, n, i) {
  return e === t ? !0 : e == null || t == null || !Ch(e) && !Ch(t) ? e !== e && t !== t : _4(e, t, r, n, t1, i);
}
var r1 = t1, w4 = g0, $4 = r1, D4 = 1, E4 = 2;
function A4(e, t, r, n) {
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
      var f = new w4();
      if (n)
        var d = n(c, u, l, e, t, f);
      if (!(d === void 0 ? $4(u, c, D4 | E4, n, f) : d))
        return !1;
    }
  }
  return !0;
}
var C4 = A4, S4 = Lr;
function k4(e) {
  return e === e && !S4(e);
}
var n1 = k4, O4 = n1, F4 = v0;
function T4(e) {
  for (var t = F4(e), r = t.length; r--; ) {
    var n = t[r], i = e[n];
    t[r] = [n, i, O4(i)];
  }
  return t;
}
var M4 = T4;
function P4(e, t) {
  return function(r) {
    return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
  };
}
var i1 = P4, B4 = C4, I4 = M4, R4 = i1;
function N4(e) {
  var t = I4(e);
  return t.length == 1 && t[0][2] ? R4(t[0][0], t[0][1]) : function(r) {
    return r === e || B4(r, e, t);
  };
}
var L4 = N4;
function j4(e, t) {
  return e != null && t in Object(e);
}
var z4 = j4, H4 = Vx, V4 = f0, Y4 = ir, W4 = u0, U4 = d0, q4 = Ml;
function G4(e, t, r) {
  t = H4(t, e);
  for (var n = -1, i = t.length, a = !1; ++n < i; ) {
    var s = q4(t[n]);
    if (!(a = e != null && r(e, s)))
      break;
    e = e[s];
  }
  return a || ++n != i ? a : (i = e == null ? 0 : e.length, !!i && U4(i) && W4(s, i) && (Y4(e) || V4(e)));
}
var a1 = G4, K4 = z4, Z4 = a1;
function X4(e, t) {
  return e != null && Z4(e, t, K4);
}
var J4 = X4, Q4 = r1, eF = Fn, tF = J4, rF = s0, nF = n1, iF = i1, aF = Ml, sF = 1, oF = 2;
function lF(e, t) {
  return rF(e) && nF(t) ? iF(aF(e), t) : function(r) {
    var n = eF(r, e);
    return n === void 0 && n === t ? tF(r, e) : Q4(t, n, sF | oF);
  };
}
var cF = lF;
function uF(e) {
  return e;
}
var m0 = uF;
function fF(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
var dF = fF, hF = Yx;
function pF(e) {
  return function(t) {
    return hF(t, e);
  };
}
var vF = pF, gF = dF, mF = vF, xF = s0, yF = Ml;
function bF(e) {
  return xF(e) ? gF(yF(e)) : mF(e);
}
var _F = bF, wF = L4, $F = cF, DF = m0, EF = ir, AF = _F;
function CF(e) {
  return typeof e == "function" ? e : e == null ? DF : typeof e == "object" ? EF(e) ? $F(e[0], e[1]) : wF(e) : AF(e);
}
var s1 = CF, SF = Pl, kF = Zx, OF = s1;
function FF(e, t) {
  var r = {};
  return t = OF(t), kF(e, function(n, i, a) {
    SF(r, i, t(n, i, a));
  }), r;
}
var TF = FF;
function MF(e, t, r) {
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
var o1 = MF, PF = o1, Sh = Math.max;
function BF(e, t, r) {
  return t = Sh(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var n = arguments, i = -1, a = Sh(n.length - t, 0), s = Array(a); ++i < a; )
      s[i] = n[t + i];
    i = -1;
    for (var o = Array(t + 1); ++i < t; )
      o[i] = n[i];
    return o[t] = r(s), PF(e, this, o);
  };
}
var IF = BF;
function RF(e) {
  return function() {
    return e;
  };
}
var NF = RF, LF = NF, kh = Wx, jF = m0, zF = kh ? function(e, t) {
  return kh(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: LF(t),
    writable: !0
  });
} : jF, HF = zF, VF = 800, YF = 16, WF = Date.now;
function UF(e) {
  var t = 0, r = 0;
  return function() {
    var n = WF(), i = YF - (n - r);
    if (r = n, i > 0) {
      if (++t >= VF)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
var qF = UF, GF = HF, KF = qF, ZF = KF(GF), XF = ZF, JF = m0, QF = IF, e8 = XF;
function t8(e, t) {
  return e8(QF(e, t, JF), e + "");
}
var x0 = t8, r8 = Yi, n8 = ds, i8 = u0, a8 = Lr;
function s8(e, t, r) {
  if (!a8(r))
    return !1;
  var n = typeof t;
  return (n == "number" ? n8(r) && i8(t, r.length) : n == "string" && t in r) ? r8(r[t], e) : !1;
}
var y0 = s8;
function o8(e) {
  var t = [];
  if (e != null)
    for (var r in Object(e))
      t.push(r);
  return t;
}
var l8 = o8, c8 = Lr, u8 = p0, f8 = l8, d8 = Object.prototype, h8 = d8.hasOwnProperty;
function p8(e) {
  if (!c8(e))
    return f8(e);
  var t = u8(e), r = [];
  for (var n in e)
    n == "constructor" && (t || !h8.call(e, n)) || r.push(n);
  return r;
}
var v8 = p8, g8 = Gx, m8 = v8, x8 = ds;
function y8(e) {
  return x8(e) ? g8(e, !0) : m8(e);
}
var b0 = y8, b8 = x0, _8 = Yi, w8 = y0, $8 = b0, l1 = Object.prototype, D8 = l1.hasOwnProperty, E8 = b8(function(e, t) {
  e = Object(e);
  var r = -1, n = t.length, i = n > 2 ? t[2] : void 0;
  for (i && w8(t[0], t[1], i) && (n = 1); ++r < n; )
    for (var a = t[r], s = $8(a), o = -1, l = s.length; ++o < l; ) {
      var c = s[o], u = e[c];
      (u === void 0 || _8(u, l1[c]) && !D8.call(e, c)) && (e[c] = a[c]);
    }
  return e;
}), Oh = E8, A8 = Pl, C8 = Yi;
function S8(e, t, r) {
  (r !== void 0 && !C8(e[t], r) || r === void 0 && !(t in e)) && A8(e, t, r);
}
var c1 = S8, Oo = {}, k8 = {
  get exports() {
    return Oo;
  },
  set exports(e) {
    Oo = e;
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
})(k8, Oo);
var Fh = Qx;
function O8(e) {
  var t = new e.constructor(e.byteLength);
  return new Fh(t).set(new Fh(e)), t;
}
var F8 = O8, T8 = F8;
function M8(e, t) {
  var r = t ? T8(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.length);
}
var P8 = M8;
function B8(e, t) {
  var r = -1, n = e.length;
  for (t || (t = Array(n)); ++r < n; )
    t[r] = e[r];
  return t;
}
var I8 = B8, R8 = Lr, Th = Object.create, N8 = /* @__PURE__ */ function() {
  function e() {
  }
  return function(t) {
    if (!R8(t))
      return {};
    if (Th)
      return Th(t);
    e.prototype = t;
    var r = new e();
    return e.prototype = void 0, r;
  };
}(), L8 = N8, j8 = Kx, z8 = j8(Object.getPrototypeOf, Object), u1 = z8, H8 = L8, V8 = u1, Y8 = p0;
function W8(e) {
  return typeof e.constructor == "function" && !Y8(e) ? H8(V8(e)) : {};
}
var U8 = W8, q8 = ds, G8 = ar;
function K8(e) {
  return G8(e) && q8(e);
}
var Z8 = K8, X8 = xr, J8 = u1, Q8 = ar, eT = "[object Object]", tT = Function.prototype, rT = Object.prototype, f1 = tT.toString, nT = rT.hasOwnProperty, iT = f1.call(Object);
function aT(e) {
  if (!Q8(e) || X8(e) != eT)
    return !1;
  var t = J8(e);
  if (t === null)
    return !0;
  var r = nT.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r instanceof r && f1.call(r) == iT;
}
var sT = aT;
function oT(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
    return e[t];
}
var d1 = oT, lT = kC, cT = Pl;
function uT(e, t, r, n) {
  var i = !r;
  r || (r = {});
  for (var a = -1, s = t.length; ++a < s; ) {
    var o = t[a], l = n ? n(r[o], e[o], o, r, e) : void 0;
    l === void 0 && (l = e[o]), i ? cT(r, o, l) : lT(r, o, l);
  }
  return r;
}
var fT = uT, dT = fT, hT = b0;
function pT(e) {
  return dT(e, hT(e));
}
var vT = pT, Mh = c1, gT = Oo, mT = P8, xT = I8, yT = U8, Ph = f0, Bh = ir, bT = Z8, _T = ki, wT = Yn, $T = Lr, DT = sT, ET = h0, Ih = d1, AT = vT;
function CT(e, t, r, n, i, a, s) {
  var o = Ih(e, r), l = Ih(t, r), c = s.get(l);
  if (c) {
    Mh(e, r, c);
    return;
  }
  var u = a ? a(o, l, r + "", e, t, s) : void 0, f = u === void 0;
  if (f) {
    var d = Bh(l), h = !d && _T(l), p = !d && !h && ET(l);
    u = l, d || h || p ? Bh(o) ? u = o : bT(o) ? u = xT(o) : h ? (f = !1, u = gT(l, !0)) : p ? (f = !1, u = mT(l, !0)) : u = [] : DT(l) || Ph(l) ? (u = o, Ph(o) ? u = AT(o) : (!$T(o) || wT(o)) && (u = yT(l))) : f = !1;
  }
  f && (s.set(l, u), i(u, l, n, a, s), s.delete(l)), Mh(e, r, u);
}
var ST = CT, kT = g0, OT = c1, FT = Ux, TT = ST, MT = Lr, PT = b0, BT = d1;
function h1(e, t, r, n, i) {
  e !== t && FT(t, function(a, s) {
    if (i || (i = new kT()), MT(a))
      TT(e, t, s, r, h1, n, i);
    else {
      var o = n ? n(BT(e, s), a, s + "", e, t, i) : void 0;
      o === void 0 && (o = a), OT(e, s, o);
    }
  }, PT);
}
var p1 = h1, IT = p1, Rh = Lr;
function v1(e, t, r, n, i, a) {
  return Rh(e) && Rh(t) && (a.set(t, e), IT(e, t, void 0, v1, a), a.delete(t)), e;
}
var RT = v1, NT = x0, LT = y0;
function jT(e) {
  return NT(function(t, r) {
    var n = -1, i = r.length, a = i > 1 ? r[i - 1] : void 0, s = i > 2 ? r[2] : void 0;
    for (a = e.length > 3 && typeof a == "function" ? (i--, a) : void 0, s && LT(r[0], r[1], s) && (a = i < 3 ? void 0 : a, i = 1), t = Object(t); ++n < i; ) {
      var o = r[n];
      o && e(t, o, n, a);
    }
    return t;
  });
}
var zT = jT, HT = p1, VT = zT, YT = VT(function(e, t, r, n) {
  HT(e, t, r, n);
}), WT = YT, UT = o1, qT = x0, GT = RT, KT = WT, ZT = qT(function(e) {
  return e.push(void 0, GT), UT(KT, void 0, e);
}), Ka = ZT, XT = Object.prototype, JT = XT.hasOwnProperty;
function QT(e, t) {
  return e != null && JT.call(e, t);
}
var e3 = QT, t3 = e3, r3 = a1;
function n3(e, t) {
  return e != null && r3(e, t, t3);
}
var g1 = n3, i3 = ds;
function a3(e, t) {
  return function(r, n) {
    if (r == null)
      return r;
    if (!i3(r))
      return e(r, n);
    for (var i = r.length, a = t ? i : -1, s = Object(r); (t ? a-- : ++a < i) && n(s[a], a, s) !== !1; )
      ;
    return r;
  };
}
var s3 = a3, o3 = Zx, l3 = s3, c3 = l3(o3), u3 = c3;
function f3(e) {
  return e && e.length ? e[0] : void 0;
}
var m1 = f3;
function d3(e) {
  var t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
var vi = d3, h3 = u3;
function p3(e, t) {
  var r;
  return h3(e, function(n, i, a) {
    return r = t(n, i, a), !r;
  }), !!r;
}
var v3 = p3, g3 = Xx, m3 = s1, x3 = v3, y3 = ir, b3 = y0;
function _3(e, t, r) {
  var n = y3(e) ? g3 : x3;
  return r && b3(e, t, r) && (t = void 0), n(e, m3(t));
}
var w3 = _3;
const $3 = (e) => Object.prototype.toString.call(e).slice(8, -1), yi = (e) => PD(e) && !isNaN(e.getTime()), Br = (e) => $3(e) === "Object", _0 = g1, Nh = (e, t) => w3(t, (r) => g1(e, r)), Se = (e, t, r = "0") => {
  for (e = e != null ? String(e) : "", t = t || 2; e.length < t; )
    e = `${r}${e}`;
  return e;
}, Wt = (e) => Array.isArray(e), Sr = (e) => Wt(e) && e.length > 0, Fo = (e) => e == null ? e ?? null : document && dr(e) ? document.querySelector(e) : e.$el ?? e, tn = (e, t, r, n = void 0) => {
  e.removeEventListener(t, r, n);
}, rn = (e, t, r, n = void 0) => (e.addEventListener(t, r, n), () => tn(e, t, r, n)), no = (e, t) => !!e && !!t && (e === t || e.contains(t)), Os = (e, t) => {
  (e.key === " " || e.key === "Enter") && (t(e), e.preventDefault());
}, x1 = (e, ...t) => {
  const r = {};
  let n;
  for (n in e)
    t.includes(n) || (r[n] = e[n]);
  return r;
}, y1 = (e, t) => {
  const r = {};
  return t.forEach((n) => {
    n in e && (r[n] = e[n]);
  }), r;
};
function D3(e, t, r) {
  return Math.min(Math.max(e, t), r);
}
const To = () => {
  function e() {
    return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
  }
  return `${e() + e()}-${e()}-${e()}-${e()}-${e()}${e()}${e()}`;
}, E3 = ["base", "start", "end", "startEnd"], A3 = [
  "class",
  "wrapperClass",
  "contentClass",
  "style",
  "contentStyle",
  "color",
  "fillMode"
], C3 = { base: {}, start: {}, end: {} };
function w0(e, t, r = C3) {
  let n = e, i = {};
  t === !0 || dr(t) ? (n = dr(t) ? t : n, i = { ...r }) : Br(t) && (Nh(t, E3) ? i = { ...t } : i = {
    base: { ...t },
    start: { ...t },
    end: { ...t }
  });
  const a = Ka(
    i,
    { start: i.startEnd, end: i.startEnd },
    r
  );
  return Object.entries(a).forEach(([s, o]) => {
    let l = n;
    o === !0 || dr(o) ? (l = dr(o) ? o : l, a[s] = { color: l }) : Br(o) && (Nh(o, A3) ? a[s] = { ...o } : a[s] = {}), Ka(a[s], { color: l });
  }), a;
}
class S3 {
  constructor() {
    re(this, "type", "highlight");
  }
  normalizeConfig(t, r) {
    return w0(t, r, {
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
class $0 {
  constructor(t, r) {
    re(this, "type", ""), re(this, "collectionType", ""), this.type = t, this.collectionType = r;
  }
  normalizeConfig(t, r) {
    return w0(t, r);
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
class k3 extends $0 {
  constructor() {
    super("content", "content");
  }
  normalizeConfig(t, r) {
    return w0("base", r);
  }
}
class O3 extends $0 {
  constructor() {
    super("dot", "dots");
  }
}
class F3 extends $0 {
  constructor() {
    super("bar", "bars");
  }
}
class T3 {
  constructor(t) {
    re(this, "color"), re(this, "renderers", [
      new k3(),
      new S3(),
      new O3(),
      new F3()
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
const M3 = 300, P3 = 60, B3 = 80, I3 = {
  maxSwipeTime: M3,
  minHorizontalSwipeDistance: P3,
  maxVerticalSwipeDistance: B3
}, R3 = "MMMM YYYY", N3 = "W", L3 = "MMM", j3 = "h A", z3 = [
  "L",
  "YYYY-MM-DD",
  "YYYY/MM/DD"
], H3 = [
  "L h:mm A",
  "YYYY-MM-DD h:mm A",
  "YYYY/MM/DD h:mm A"
], V3 = [
  "L HH:mm",
  "YYYY-MM-DD HH:mm",
  "YYYY/MM/DD HH:mm"
], Y3 = [
  "h:mm A"
], W3 = [
  "HH:mm"
], U3 = "WWW, MMM D, YYYY", q3 = [
  "L",
  "YYYY-MM-DD",
  "YYYY/MM/DD"
], G3 = "iso", K3 = "YYYY-MM-DDTHH:mm:ss.SSSZ", Z3 = {
  title: R3,
  weekdays: N3,
  navMonths: L3,
  hours: j3,
  input: z3,
  inputDateTime: H3,
  inputDateTime24hr: V3,
  inputTime: Y3,
  inputTime24hr: W3,
  dayPopover: U3,
  data: q3,
  model: G3,
  iso: K3
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
const X3 = Object.entries(Ir).reduce(
  (e, [t, { dow: r, L: n }]) => (e[t] = {
    id: t,
    firstDayOfWeek: r,
    masks: { L: n }
  }, e),
  {}
), J3 = {
  componentPrefix: "V",
  color: "blue",
  isDark: !1,
  navVisibility: "click",
  titlePosition: "center",
  transition: "slide-h",
  touch: I3,
  masks: Z3,
  locales: X3,
  datePicker: {
    updateOnInput: !0,
    inputDebounce: 1e3,
    popover: {
      visibility: "hover-focus",
      placement: "bottom-start",
      isInteractive: !0
    }
  }
}, Uu = Ce(J3), Q3 = M(() => TF(Uu.locales, (e) => (e.masks = Ka(e.masks, Uu.masks), e))), fn = (e) => typeof window < "u" && _0(window.__vcalendar__, e) ? Fn(window.__vcalendar__, e) : Fn(Uu, e);
var Mo = {}, eM = {
  get exports() {
    return Mo;
  },
  set exports(e) {
    Mo = e;
  }
}, Po = {}, tM = {
  get exports() {
    return Po;
  },
  set exports(e) {
    Po = e;
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
})(tM, Po);
var Bo = {}, rM = {
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
    var i = new Date(Date.UTC(n.getFullYear(), n.getMonth(), n.getDate(), n.getHours(), n.getMinutes(), n.getSeconds(), n.getMilliseconds()));
    return i.setUTCFullYear(n.getFullYear()), n.getTime() - i.getTime();
  }
  e.exports = t.default;
})(rM, Bo);
var Io = {}, nM = {
  get exports() {
    return Io;
  },
  set exports(e) {
    Io = e;
  }
}, Ro = {}, iM = {
  get exports() {
    return Ro;
  },
  set exports(e) {
    Ro = e;
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
})(iM, Ro);
var No = {}, aM = {
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
  function r(n, i, a, s, o, l, c) {
    var u = /* @__PURE__ */ new Date(0);
    return u.setUTCFullYear(n, i, a), u.setUTCHours(s, o, l, c), u;
  }
  e.exports = t.default;
})(aM, No);
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = l;
  var r = i(Ro), n = i(No);
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
})(nM, Io);
var Lo = {}, sM = {
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
  }), t.default = void 0;
  var r = /(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/, n = r;
  t.default = n, e.exports = t.default;
})(sM, Lo);
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = f;
  var r = s(Po), n = s(Bo), i = s(Io), a = s(Lo);
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
})(eM, Mo);
const oM = /* @__PURE__ */ P$(Mo);
function yt(e, t) {
  if (t.length < e)
    throw new TypeError(e + " argument" + (e > 1 ? "s" : "") + " required, but only " + t.length + " present");
}
function io(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? io = function(r) {
    return typeof r;
  } : io = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, io(e);
}
function jr(e) {
  yt(1, arguments);
  var t = Object.prototype.toString.call(e);
  return e instanceof Date || io(e) === "object" && t === "[object Date]" ? new Date(e.getTime()) : typeof e == "number" || t === "[object Number]" ? new Date(e) : ((typeof e == "string" || t === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), /* @__PURE__ */ new Date(NaN));
}
function Ki(e) {
  if (e === null || e === !0 || e === !1)
    return NaN;
  var t = Number(e);
  return isNaN(t) ? t : t < 0 ? Math.ceil(t) : Math.floor(t);
}
var lM = {};
function D0() {
  return lM;
}
function Ln(e, t) {
  var r, n, i, a, s, o, l, c;
  yt(1, arguments);
  var u = D0(), f = Ki((r = (n = (i = (a = t == null ? void 0 : t.weekStartsOn) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (o = s.options) === null || o === void 0 ? void 0 : o.weekStartsOn) !== null && i !== void 0 ? i : u.weekStartsOn) !== null && n !== void 0 ? n : (l = u.locale) === null || l === void 0 || (c = l.options) === null || c === void 0 ? void 0 : c.weekStartsOn) !== null && r !== void 0 ? r : 0);
  if (!(f >= 0 && f <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var d = jr(e), h = d.getDay(), p = (h < f ? 7 : 0) + h - f;
  return d.setDate(d.getDate() - p), d.setHours(0, 0, 0, 0), d;
}
function Lh(e) {
  var t = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  return t.setUTCFullYear(e.getFullYear()), e.getTime() - t.getTime();
}
var cM = 6048e5;
function uM(e, t, r) {
  yt(2, arguments);
  var n = Ln(e, r), i = Ln(t, r), a = n.getTime() - Lh(n), s = i.getTime() - Lh(i);
  return Math.round((a - s) / cM);
}
function fM(e) {
  yt(1, arguments);
  var t = jr(e), r = t.getMonth();
  return t.setFullYear(t.getFullYear(), r + 1, 0), t.setHours(0, 0, 0, 0), t;
}
function dM(e) {
  yt(1, arguments);
  var t = jr(e);
  return t.setDate(1), t.setHours(0, 0, 0, 0), t;
}
function hM(e, t) {
  return yt(1, arguments), uM(fM(e), dM(e), t) + 1;
}
function pM(e, t) {
  var r, n, i, a, s, o, l, c;
  yt(1, arguments);
  var u = jr(e), f = u.getFullYear(), d = D0(), h = Ki((r = (n = (i = (a = t == null ? void 0 : t.firstWeekContainsDate) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (o = s.options) === null || o === void 0 ? void 0 : o.firstWeekContainsDate) !== null && i !== void 0 ? i : d.firstWeekContainsDate) !== null && n !== void 0 ? n : (l = d.locale) === null || l === void 0 || (c = l.options) === null || c === void 0 ? void 0 : c.firstWeekContainsDate) !== null && r !== void 0 ? r : 1);
  if (!(h >= 1 && h <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var p = /* @__PURE__ */ new Date(0);
  p.setFullYear(f + 1, 0, h), p.setHours(0, 0, 0, 0);
  var v = Ln(p, t), g = /* @__PURE__ */ new Date(0);
  g.setFullYear(f, 0, h), g.setHours(0, 0, 0, 0);
  var m = Ln(g, t);
  return u.getTime() >= v.getTime() ? f + 1 : u.getTime() >= m.getTime() ? f : f - 1;
}
function vM(e, t) {
  var r, n, i, a, s, o, l, c;
  yt(1, arguments);
  var u = D0(), f = Ki((r = (n = (i = (a = t == null ? void 0 : t.firstWeekContainsDate) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (o = s.options) === null || o === void 0 ? void 0 : o.firstWeekContainsDate) !== null && i !== void 0 ? i : u.firstWeekContainsDate) !== null && n !== void 0 ? n : (l = u.locale) === null || l === void 0 || (c = l.options) === null || c === void 0 ? void 0 : c.firstWeekContainsDate) !== null && r !== void 0 ? r : 1), d = pM(e, t), h = /* @__PURE__ */ new Date(0);
  h.setFullYear(d, 0, f), h.setHours(0, 0, 0, 0);
  var p = Ln(h, t);
  return p;
}
var gM = 6048e5;
function mM(e, t) {
  yt(1, arguments);
  var r = jr(e), n = Ln(r, t).getTime() - vM(r, t).getTime();
  return Math.round(n / gM) + 1;
}
function jo(e) {
  return yt(1, arguments), Ln(e, {
    weekStartsOn: 1
  });
}
function xM(e) {
  yt(1, arguments);
  var t = jr(e), r = t.getFullYear(), n = /* @__PURE__ */ new Date(0);
  n.setFullYear(r + 1, 0, 4), n.setHours(0, 0, 0, 0);
  var i = jo(n), a = /* @__PURE__ */ new Date(0);
  a.setFullYear(r, 0, 4), a.setHours(0, 0, 0, 0);
  var s = jo(a);
  return t.getTime() >= i.getTime() ? r + 1 : t.getTime() >= s.getTime() ? r : r - 1;
}
function yM(e) {
  yt(1, arguments);
  var t = xM(e), r = /* @__PURE__ */ new Date(0);
  r.setFullYear(t, 0, 4), r.setHours(0, 0, 0, 0);
  var n = jo(r);
  return n;
}
var bM = 6048e5;
function _M(e) {
  yt(1, arguments);
  var t = jr(e), r = jo(t).getTime() - yM(t).getTime();
  return Math.round(r / bM) + 1;
}
function $t(e, t) {
  yt(2, arguments);
  var r = jr(e), n = Ki(t);
  return isNaN(n) ? /* @__PURE__ */ new Date(NaN) : (n && r.setDate(r.getDate() + n), r);
}
function zo(e, t) {
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
function jh(e, t) {
  yt(2, arguments);
  var r = Ki(t);
  return zo(e, r * 12);
}
var fi = /* @__PURE__ */ ((e) => (e.Any = "any", e.All = "all", e))(fi || {}), b1 = /* @__PURE__ */ ((e) => (e.Days = "days", e.Weeks = "weeks", e.Months = "months", e.Years = "years", e))(b1 || {}), _1 = /* @__PURE__ */ ((e) => (e.Days = "days", e.Weekdays = "weekdays", e.Weeks = "weeks", e.Months = "months", e.Years = "years", e))(_1 || {}), w1 = /* @__PURE__ */ ((e) => (e.OrdinalWeekdays = "ordinalWeekdays", e))(w1 || {});
class wM {
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
        return E0(this.from.date, r) % this.interval === 0;
      case "weeks":
        return jM(this.from.date, r) % this.interval === 0;
      case "months":
        return zM(this.from.date, r) % this.interval === 0;
      case "years":
        return O1(this.from.date, r) % this.interval === 0;
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
        return new $M(r);
      case "weekdays":
        return new DM(r);
      case "weeks":
        return new EM(r);
      case "months":
        return new AM(r);
      case "years":
        return new CM(r);
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
class $M extends Zi {
  constructor(t) {
    super(
      "days",
      t,
      OM,
      ({ day: r, dayFromEnd: n }) => [r, -n]
    );
  }
}
class DM extends Zi {
  constructor(t) {
    super(
      "weekdays",
      t,
      qu,
      ({ weekday: r }) => [r]
    );
  }
}
class EM extends Zi {
  constructor(t) {
    super(
      "weeks",
      t,
      FM,
      ({ week: r, weekFromEnd: n }) => [r, -n]
    );
  }
}
class AM extends Zi {
  constructor(t) {
    super("months", t, TM, ({ month: r }) => [
      r
    ]);
  }
}
class CM extends Zi {
  constructor(t) {
    super("years", t, nr, ({ year: r }) => [r]);
  }
}
class SM {
  constructor(t, r) {
    re(this, "components"), this.type = t, this.components = this.normalizeComponents(r);
  }
  normalizeArrayConfig(t) {
    const r = [];
    return t.forEach((n, i) => {
      if (nr(n)) {
        if (i === 0)
          return;
        if (!zh(t[0])) {
          console.error(
            `Ordinal range for "${this.type}" rule is from -5 to -1 or 1 to 5. This rule will be skipped.`
          );
          return;
        }
        if (!qu(n)) {
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
        if (!zh(t[0])) {
          console.error(
            `Ordinal range for "${this.type}" rule is from -5 to -1 or 1 to 5. This rule will be skipped.`
          );
          return;
        }
        if (!qu(n)) {
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
class kM {
  constructor(t) {
    re(this, "type", "function"), re(this, "validated", !0), this.fn = t, Yn(t) || (console.error(
      "The function rule requires a valid function. This rule will be skipped."
    ), this.validated = !1);
  }
  passes(t) {
    return this.validated ? this.fn(t) : !0;
  }
}
class Ho {
  constructor(t, r = {}, n) {
    re(this, "validated", !0), re(this, "config"), re(this, "type", fi.Any), re(this, "from"), re(this, "until"), re(this, "rules", []), re(this, "locale", new Yo()), this.parent = n, r.locale && (this.locale = r.locale), this.config = t, Yn(t) ? (this.type = fi.All, this.rules = [new kM(t)]) : Wt(t) ? (this.type = fi.Any, this.rules = t.map((i) => new Ho(i, r, this))) : Br(t) ? (this.type = fi.All, this.from = t.from ? this.locale.getDateParts(t.from) : n == null ? void 0 : n.from, this.until = t.until ? this.locale.getDateParts(t.until) : n == null ? void 0 : n.until, this.rules = this.getObjectRules(t)) : (console.error("Rule group configuration must be an object or an array."), this.validated = !1);
  }
  getObjectRules(t) {
    const r = [];
    if (t.every && (dr(t.every) && (t.every = [1, `${t.every}s`]), Wt(t.every))) {
      const [n = 1, i = b1.Days] = t.every;
      r.push(new wM(i, n, this.from));
    }
    return Object.values(_1).forEach((n) => {
      n in t && r.push(Zi.create(n, t[n]));
    }), Object.values(w1).forEach((n) => {
      n in t && r.push(new SM(n, t[n]));
    }), t.on != null && (Wt(t.on) || (t.on = [t.on]), r.push(
      new Ho(t.on, { locale: this.locale }, this.parent)
    )), r;
  }
  passes(t) {
    return this.validated ? this.from && t.dayIndex <= this.from.dayIndex || this.until && t.dayIndex >= this.until.dayIndex ? !1 : this.type === fi.Any ? this.rules.some((r) => r.passes(t)) : this.rules.every((r) => r.passes(t)) : !0;
  }
}
function OM(e) {
  return nr(e) ? e >= 1 && e <= 31 : !1;
}
function qu(e) {
  return nr(e) ? e >= 1 && e <= 7 : !1;
}
function FM(e) {
  return nr(e) ? e >= -6 && e <= -1 || e >= 1 && e <= 6 : !1;
}
function TM(e) {
  return nr(e) ? e >= 1 && e <= 12 : !1;
}
function zh(e) {
  return !(!nr(e) || e < -5 || e > 5 || e === 0);
}
const MM = {
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
}, vt = 7, PM = 6, $1 = 1e3, D1 = $1 * 60, E1 = D1 * 60, ao = E1 * 24, BM = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], IM = ["L", "iso"], Aa = {
  milliseconds: [0, 999, 3],
  seconds: [0, 59, 2],
  minutes: [0, 59, 2],
  hours: [0, 23, 2]
}, A1 = /d{1,2}|W{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|Z{1,4}|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g, RM = /\[([^]*?)\]/gm, Hh = {
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
}, Kr = /\d\d?/, NM = /\d{3}/, LM = /\d{4}/, ha = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF/]+(\s*?[\u0600-\u06FF]+){1,2}/i, Vh = () => {
}, Yh = (e) => (t, r, n) => {
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
  d: [Kr, Vh],
  W: [ha, Vh],
  M: [
    Kr,
    (e, t) => {
      e.month = t - 1;
    }
  ],
  MMM: [ha, Yh("monthNamesShort")],
  MMMM: [ha, Yh("monthNames")],
  YY: [
    Kr,
    (e, t) => {
      const n = +(/* @__PURE__ */ new Date()).getFullYear().toString().substr(0, 2);
      e.year = +`${t > 68 ? n - 1 : n}${t}`;
    }
  ],
  YYYY: [
    LM,
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
    NM,
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
function C1(e, t) {
  return (Sr(e) && e || [
    dr(e) && e || "YYYY-MM-DD"
  ]).map(
    (r) => IM.reduce(
      (n, i) => n.replace(i, t.masks[i] || ""),
      r
    )
  );
}
function S1(e) {
  return Br(e) && "year" in e && "month" in e && "day" in e;
}
function Wh(e, t = 1) {
  const r = e.getDay() + 1, n = r >= t ? t - r : -(7 - (t - r));
  return $t(e, n);
}
function k1(e, t, r) {
  const n = Date.UTC(e, t - 1, r);
  return E0(/* @__PURE__ */ new Date(0), new Date(n));
}
function E0(e, t) {
  return Math.round((t.getTime() - e.getTime()) / ao);
}
function jM(e, t) {
  return Math.ceil(E0(Wh(e), Wh(t)) / 7);
}
function O1(e, t) {
  return t.getUTCFullYear() - e.getUTCFullYear();
}
function zM(e, t) {
  return O1(e, t) * 12 + (t.getMonth() - e.getMonth());
}
function F1(e, t = "") {
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
    return oM(u, { timeZone: t });
  }
  return new Date(n, i - 1, a, s, o, l, c);
}
function HM(e, t) {
  let r = new Date(e.getTime());
  t.timezone && (r = new Date(
    e.toLocaleString("en-US", { timeZone: t.timezone })
  ), r.setMilliseconds(e.getMilliseconds()));
  const n = r.getMilliseconds(), i = r.getSeconds(), a = r.getMinutes(), s = r.getHours(), o = n + i * $1 + a * D1 + s * E1, l = r.getMonth() + 1, c = r.getFullYear(), u = t.getMonthParts(l, c), f = r.getDate(), d = u.numDays - f + 1, h = r.getDay() + 1, p = Math.floor((f - 1) / 7 + 1), v = Math.floor((u.numDays - f) / 7 + 1), g = Math.ceil(
    (f + Math.abs(u.firstWeekday - u.firstDayOfWeek)) / 7
  ), m = u.numWeeks - g + 1, y = u.weeknumbers[g], _ = k1(c, l, f);
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
function VM(e, t, r) {
  return `${t}-${e}-${r}`;
}
function YM(e, t, r) {
  const n = t % 4 === 0 && t % 100 !== 0 || t % 400 === 0, i = new Date(t, e - 1, 1), a = i.getDay() + 1, s = e === 2 && n ? 29 : BM[e - 1], o = r - 1, l = hM(i, {
    weekStartsOn: o
  }), c = [], u = [];
  for (let f = 0; f < l; f++) {
    const d = $t(i, f * 7);
    c.push(mM(d, { weekStartsOn: o })), u.push(_M(d));
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
function WM() {
  const e = [];
  for (let i = 0; i < vt; i++)
    e.push(
      F1({
        year: 2020,
        month: 1,
        day: 5 + i,
        hours: 12
      })
    );
  return e;
}
function fc(e, t = void 0) {
  const r = new Intl.DateTimeFormat(t, {
    weekday: e
  });
  return WM().map((n) => r.format(n));
}
function UM() {
  const e = [];
  for (let t = 0; t <= 24; t++)
    e.push(new Date(2e3, 0, 1, t));
  return e;
}
function qM(e = void 0) {
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
function T1() {
  const e = [];
  for (let t = 0; t < 12; t++)
    e.push(new Date(2e3, t, 15));
  return e;
}
function Uh(e, t = void 0) {
  const r = new Intl.DateTimeFormat(t, {
    month: e,
    timeZone: "UTC"
  });
  return T1().map((n) => r.format(n));
}
function GM(e, t, r) {
  return nr(t) ? t === e : Wt(t) ? t.includes(e) : Yn(t) ? t(e, r) : !(t.min != null && t.min > e || t.max != null && t.max < e || t.interval != null && e % t.interval !== 0);
}
function Ca(e, t, r) {
  const n = [], [i, a, s] = t;
  for (let o = i; o <= a; o++)
    (r == null || GM(o, r, e)) && n.push({
      value: o,
      label: Se(o, s)
    });
  return n;
}
function KM(e, t) {
  return {
    milliseconds: Ca(
      e,
      Aa.milliseconds,
      t.milliseconds
    ),
    seconds: Ca(e, Aa.seconds, t.seconds),
    minutes: Ca(e, Aa.minutes, t.minutes),
    hours: Ca(e, Aa.hours, t.hours)
  };
}
function ZM(e, t, r, n) {
  const a = Ca(e, t, n).reduce((s, o) => {
    if (o.disabled)
      return s;
    if (isNaN(s))
      return o.value;
    const l = Math.abs(s - r);
    return Math.abs(o.value - r) < l ? o.value : s;
  }, NaN);
  return isNaN(a) ? r : a;
}
function XM(e, t) {
  const r = { ...e };
  return Object.entries(t).forEach(([n, i]) => {
    const a = Aa[n], s = e[n];
    r[n] = ZM(
      e,
      a,
      s,
      i
    );
  }), r;
}
function qh(e, t, r) {
  return C1(t, r).map((i) => {
    if (typeof i != "string")
      throw new Error("Invalid mask");
    let a = e;
    if (a.length > 1e3)
      return !1;
    let s = !0;
    const o = {};
    if (i.replace(A1, (u) => {
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
function JM(e, t, r) {
  if (e == null)
    return "";
  let n = C1(t, r)[0];
  /Z$/.test(n) && (r.timezone = "utc");
  const i = [];
  n = n.replace(RM, (s, o) => (i.push(o), "??"));
  const a = r.getDateParts(e);
  return n = n.replace(
    A1,
    (s) => s in Hh ? Hh[s](a, r) : s.slice(1, s.length - 1)
  ), n.replace(/\?\?/g, () => i.shift());
}
const QM = {
  daily: ["year", "month", "day"],
  weekly: ["year", "month", "week"],
  monthly: ["year", "month"]
};
function eP({
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
  for (let k = 1; k <= PM; k++) {
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
      ), Z = H, B = `${Se($, 4)}-${Se(E, 2)}-${Se(m, 2)}`, T = j, R = vt - j, N = l[k - 1], F = o[k - 1], te = m === D && E === A && $ === S, J = h && m === 1, be = h && m === c, ee = k === 1, _e = k === u, Xe = j === 1, Qe = j === vt, tt = k1($, E, m);
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
function tP(e, t, r, n) {
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
function rP(e, t) {
  return e.days.map((r) => ({
    label: t.formatDate(r.date, t.masks.weekdays),
    weekday: r.weekday
  }));
}
function M1(e, t, r) {
  return y1(
    r.getDateParts(r.toDate(e)),
    QM[t]
  );
}
function P1({ day: e, week: t, month: r, year: n }, i, a, s) {
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
    const o = new Date(n, r - 1, 1), l = zo(o, i);
    return {
      month: l.getMonth() + 1,
      year: l.getFullYear()
    };
  }
}
function hr(e) {
  return e != null && e.month != null && e.year != null;
}
function Gu(e, t) {
  return !hr(e) || !hr(t) ? !1 : (e = e, t = t, e.year !== t.year ? e.year < t.year : e.month && t.month && e.month !== t.month ? e.month < t.month : e.week && t.week && e.week !== t.week ? e.week < t.week : e.day && t.day && e.day !== t.day ? e.day < t.day : !1);
}
function Vo(e, t) {
  return !hr(e) || !hr(t) ? !1 : (e = e, t = t, e.year !== t.year ? e.year > t.year : e.month && t.month && e.month !== t.month ? e.month > t.month : e.week && t.week && e.week !== t.week ? e.week > t.week : e.day && t.day && e.day !== t.day ? e.day > t.day : !1);
}
function B1(e, t, r) {
  return (e || !1) && !Gu(e, t) && !Vo(e, r);
}
function nP(e, t) {
  return !e && t || e && !t ? !1 : !e && !t ? !0 : (e = e, t = t, e.year === t.year && e.month === t.month && e.week === t.week && e.day === t.day);
}
function iP(e, t, r, n) {
  if (!hr(e) || !hr(t))
    return [];
  const i = [];
  for (; !Vo(e, t); )
    i.push(e), e = P1(e, 1, r, n);
  return i;
}
function I1(e) {
  const { day: t, week: r, month: n, year: i } = e;
  let a = `${i}-${Se(n, 2)}`;
  return r && (a = `${a}-w${r}`), t && (a = `${a}-${Se(t, 2)}`), a;
}
function aP(e, t) {
  const { month: r, year: n, showWeeknumbers: i, showIsoWeeknumbers: a } = e, s = new Date(n, r - 1, 15), o = t.getMonthParts(r, n), l = t.getPrevMonthParts(r, n), c = t.getNextMonthParts(r, n), u = eP({ monthComps: o, prevMonthComps: l, nextMonthComps: c }, t), f = tP(u, i, a, t), d = rP(f[0], t);
  return {
    id: I1(e),
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
function sP(e, t) {
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
let Gh = class {
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
  constructor(t, r = new Yo()) {
    re(this, "order"), re(this, "locale"), re(this, "start", null), re(this, "end", null), re(this, "repeat", null);
    var n;
    this.locale = r;
    const { start: i, end: a, span: s, order: o, repeat: l } = t;
    yi(i) && (this.start = r.getDateParts(i)), yi(a) ? this.end = r.getDateParts(a) : this.start != null && s && (this.end = r.getDateParts($t(this.start.date, s - 1))), this.order = o ?? 0, l && (this.repeat = new Ho(
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
class oP {
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
          endTime: ((h = r.end) == null ? void 0 : h.time) ?? ao
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
        const l = i === o.startDay, c = i === o.endDay, u = l ? o.startTime : 0, f = new Date(t.startDate.getTime() + u), d = c ? o.endTime : ao, h = new Date(t.endDate.getTime() + d), p = u === 0 && d === ao, v = a.order || 0;
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
const lP = 12, cP = 5;
function uP(e, t) {
  const r = new Intl.DateTimeFormat().resolvedOptions().locale;
  let n;
  dr(e) ? n = e : _0(e, "id") && (n = e.id), n = (n || r).toLowerCase();
  const i = Object.keys(t), a = (l) => i.find((c) => c.toLowerCase() === l);
  n = a(n) || a(n.substring(0, 2)) || r;
  const s = {
    ...t["en-IE"],
    ...t[n],
    id: n,
    monthCacheSize: lP,
    pageCacheSize: cP
  };
  return Br(e) ? Ka(e, s) : s;
}
class Yo {
  constructor(t = void 0, r) {
    re(this, "id"), re(this, "daysInWeek"), re(this, "firstDayOfWeek"), re(this, "masks"), re(this, "timezone"), re(this, "hourLabels"), re(this, "dayNames"), re(this, "dayNamesShort"), re(this, "dayNamesShorter"), re(this, "dayNamesNarrow"), re(this, "monthNames"), re(this, "monthNamesShort"), re(this, "relativeTimeNames"), re(this, "amPm", ["am", "pm"]), re(this, "monthCache"), re(this, "pageCache");
    const { id: n, firstDayOfWeek: i, masks: a, monthCacheSize: s, pageCacheSize: o } = uP(t, Q3.value);
    this.monthCache = new Gh(
      s,
      VM,
      YM
    ), this.pageCache = new Gh(o, I1, aP), this.id = n, this.daysInWeek = vt, this.firstDayOfWeek = D3(i, 1, vt), this.masks = a, this.timezone = r || void 0, this.hourLabels = this.getHourLabels(), this.dayNames = fc("long", this.id), this.dayNamesShort = fc("short", this.id), this.dayNamesShorter = this.dayNamesShort.map((l) => l.substring(0, 2)), this.dayNamesNarrow = fc("narrow", this.id), this.monthNames = Uh("long", this.id), this.monthNamesShort = Uh("short", this.id), this.relativeTimeNames = qM(this.id);
  }
  formatDate(t, r) {
    return JM(t, r, this);
  }
  parseDate(t, r) {
    return qh(t, r, this);
  }
  toDate(t, r = {}) {
    const n = /* @__PURE__ */ new Date(NaN);
    let i = n;
    const { fillDate: a, mask: s, patch: o, rules: l } = r;
    if (nr(t) ? (r.type = "number", i = /* @__PURE__ */ new Date(+t)) : dr(t) ? (r.type = "string", i = t ? qh(t, s || "iso", this) : n) : yi(t) ? (r.type = "date", i = new Date(t.getTime())) : S1(t) && (r.type = "object", i = this.getDateFromParts(t)), i && (o || l)) {
      let c = this.getDateParts(i);
      if (o && a != null) {
        const u = this.getDateParts(this.toDate(a));
        c = this.getDateParts(
          this.toDate({ ...u, ...y1(c, MM[o]) })
        );
      }
      l && (c = XM(c, l)), i = this.getDateFromParts(c);
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
    return HM(t, this);
  }
  getDateFromParts(t) {
    return F1(t, this.timezone);
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
    return sP(t, r);
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
    return UM().map((t) => this.formatDate(t, this.masks.hours));
  }
  getDayId(t) {
    return this.formatDate(t, "YYYY-MM-DD");
  }
}
class R1 {
  constructor(t, r, n) {
    re(this, "key", ""), re(this, "hashcode", ""), re(this, "highlight", null), re(this, "content", null), re(this, "dot", null), re(this, "bar", null), re(this, "event", null), re(this, "popover", null), re(this, "customData", null), re(this, "ranges"), re(this, "hasRanges", !1), re(this, "order", 0), re(this, "pinPage", !1), re(this, "maxRepeatSpan", 0), re(this, "locale");
    const { dates: i } = Object.assign(
      this,
      { hashcode: "", order: 0, pinPage: !1 },
      t
    );
    this.key || (this.key = To()), this.locale = n, r.normalizeGlyphs(this), this.ranges = n.ranges(i ?? []), this.hasRanges = !!Sr(this.ranges), this.maxRepeatSpan = this.ranges.filter((a) => a.hasRepeat).map((a) => a.daySpan).reduce((a, s) => Math.max(a, s), 0);
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
const N1 = "__vc_base_context__", L1 = {
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
function j1(e) {
  const t = M(() => e.color ?? ""), r = M(() => e.isDark ?? !1), { displayMode: n } = M$(r), i = M(() => new T3(t.value)), a = M(() => {
    if (e.locale instanceof Yo)
      return e.locale;
    const u = Br(e.locale) ? e.locale : {
      id: e.locale,
      firstDayOfWeek: e.firstDayOfWeek,
      masks: e.masks
    };
    return new Yo(u, e.timezone);
  }), s = M(() => a.value.masks), o = M(() => {
    const u = e.disabledDates ?? [];
    return e.minDate != null && u.push({
      start: null,
      end: $t(a.value.toDate(e.minDate), -1)
    }), e.maxDate != null && u.push({
      start: $t(a.value.toDate(e.maxDate), 1),
      end: null
    }), a.value.ranges(u);
  }), l = M(() => new R1(
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
  return zi(N1, c), c;
}
function fP(e) {
  return Dl(N1, j1(e));
}
const dP = (e, t, {
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
}, so = {}, hP = (e, t = 10) => {
  so[e] = Date.now() + t;
}, pP = (e, t) => {
  if (e in so) {
    const r = so[e];
    if (Date.now() < r)
      return;
    delete so[e];
  }
  t();
}, vP = {
  ...L1,
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
}, gP = [
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
], z1 = "__vc_calendar_context__";
function mP(e, { emit: t, slots: r }) {
  const n = ce(null), i = ce(null), a = ce(null), s = ce((/* @__PURE__ */ new Date()).getDate()), o = ce(!1), l = ce(To()), c = ce(To()), u = ce(e.view), f = ce([]), d = ce("");
  let h = null, p = null;
  const {
    theme: v,
    color: g,
    displayMode: m,
    locale: y,
    masks: _,
    disabledAttribute: x,
    disabledDates: b
  } = fP(e), w = M(() => e.rows * e.columns), E = M(() => e.step || w.value), $ = M(() => m1(f.value) ?? null), C = M(() => vi(f.value) ?? null), D = M(
    () => e.minPage || (e.minDate ? T(e.minDate) : null)
  ), A = M(
    () => e.maxPage || (e.maxDate ? T(e.maxDate) : null)
  ), S = M(() => e.navVisibility), k = M(() => !!e.showWeeknumbers), j = M(() => !!e.showIsoWeeknumbers), P = M(() => u.value === "monthly"), H = M(() => u.value === "weekly"), K = M(() => u.value === "daily"), X = () => {
    o.value = !0, t("transition-start");
  }, Z = () => {
    o.value = !1, t("transition-end"), h && (h.resolve(!0), h = null);
  }, B = (V, q, se = u.value) => P1(V, q, se, y.value), T = (V) => M1(V, u.value, y.value), R = (V) => {
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
      const O = _0(q, "key") ? q.key : se, U = q.order || 0;
      V.push(
        new R1(
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
    const V = new oP();
    return J.value.forEach((q) => {
      q.ranges.forEach((se) => {
        V.render(q, se, te.value);
      });
    }), V;
  }), _e = M(() => te.value.reduce((V, q) => (V[q.dayIndex] = { day: q, cells: [] }, V[q.dayIndex].cells.push(...ee.value.getCells(q)), V), {})), Xe = (V, q) => {
    const se = e.showWeeknumbers || e.showIsoWeeknumbers;
    return se == null ? "" : yD(se) ? se ? "left" : "" : se.startsWith("right") ? q > 1 ? "right" : se : V > 1 ? "left" : se;
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
    return U || (Gu(fe, D.value) ? fe = D.value : Vo(He, A.value) && (fe = B(A.value, 1 - w.value)), He = B(fe, w.value - 1)), { fromPage: fe, toPage: He };
  }, We = (V, q, se = "") => {
    if (se === "none" || se === "fade")
      return se;
    if ((V == null ? void 0 : V.view) !== (q == null ? void 0 : q.view))
      return "fade";
    const O = Vo(q, V), U = Gu(q, V);
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
    ), iP(
      q.fromPage,
      q.toPage,
      u.value,
      y.value
    ).map((U) => B1(U, D.value, A.value)).every((U) => U);
  }, Tt = (V, q = {}) => Ft(Ot(V), q), _r = M(() => Tt(-E.value)), ct = M(() => Tt(E.value)), ze = async (V, q = {}) => !q.force && !Ft(V, q) ? !1 : (q.fromPage && !nP(q.fromPage, $.value) && (i.value && i.value.hide({ hideDelay: 0 }), q.view && (hP("view", 10), u.value = q.view), await bt({
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
        q.altKey ? O = jh(se, -1) : O = zo(se, -1);
        break;
      }
      case "PageDown": {
        q.altKey ? O = jh(se, 1) : O = zo(se, 1);
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
    !e.disablePageSwipe && n.value && (p = dP(
      n.value,
      ({ toLeft: V = !1, toRight: q = !1 }) => {
        V ? Mt() : q && dt();
      },
      fn("touch")
    ));
  }), Et(() => {
    f.value = [], p && p();
  }), me(
    () => y.value,
    () => {
      bt();
    }
  ), me(
    () => w.value,
    () => bt()
  ), me(
    () => e.view,
    () => u.value = e.view
  ), me(
    () => u.value,
    () => {
      pP("view", () => {
        bt();
      }), t("update:view", u.value);
    }
  ), me(
    () => s.value,
    () => {
      F(f.value, (V) => N(V));
    }
  ), gx(() => {
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
  return zi(z1, bn), bn;
}
function Un() {
  const e = Dl(z1);
  if (e)
    return e;
  throw new Error(
    "Calendar context missing. Please verify this component is nested within a valid context provider."
  );
}
const xP = {
  inheritAttrs: !1
}, _i = /* @__PURE__ */ he({
  ...xP,
  __name: "CalendarSlot",
  props: {
    name: null
  },
  setup(e) {
    const { slots: t } = Un();
    return (r, n) => Y(t)[e.name] ? (I(), $e(mx(Y(t)[e.name]), Do(Rn({ key: 0 }, r.$attrs)), null, 16)) : xe(r.$slots, "default", { key: 1 });
  }
});
function Ku(e) {
  document && document.dispatchEvent(
    new CustomEvent("show-popover", {
      detail: e
    })
  );
}
function Wo(e) {
  document && document.dispatchEvent(
    new CustomEvent("hide-popover", {
      detail: e
    })
  );
}
function H1(e) {
  document && document.dispatchEvent(
    new CustomEvent("toggle-popover", {
      detail: e
    })
  );
}
function V1(e) {
  const { visibility: t } = e, r = t === "click", n = t === "hover", i = t === "hover-focus", a = t === "focus";
  e.autoHide = !r;
  let s = !1, o = !1;
  const l = (p) => {
    r && (H1({
      ...e,
      target: e.target || p.currentTarget
    }), p.stopPropagation());
  }, c = (p) => {
    s || (s = !0, (n || i) && Ku({
      ...e,
      target: e.target || p.currentTarget
    }));
  }, u = () => {
    s && (s = !1, (n || i && !o) && Wo(e));
  }, f = (p) => {
    o || (o = !0, (a || i) && Ku({
      ...e,
      target: e.target || p.currentTarget
    }));
  }, d = (p) => {
    o && !no(p.currentTarget, p.relatedTarget) && (o = !1, (a || i && !s) && Wo(e));
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
const Kh = (e) => {
  const t = Fo(e);
  if (t == null)
    return;
  const r = t.popoverHandlers;
  !r || !r.length || (r.forEach((n) => n()), delete t.popoverHandlers);
}, Zh = (e, t) => {
  const r = Fo(e);
  if (r == null)
    return;
  const n = [], i = V1(t);
  Object.entries(i).forEach(([a, s]) => {
    n.push(rn(r, a, s));
  }), r.popoverHandlers = n;
}, Y1 = {
  mounted(e, t) {
    const { value: r } = t;
    r && Zh(e, r);
  },
  updated(e, t) {
    const { oldValue: r, value: n } = t, i = r == null ? void 0 : r.visibility, a = n == null ? void 0 : n.visibility;
    i !== a && (i && (Kh(e), a || Wo(r)), a && Zh(e, n));
  },
  unmounted(e) {
    Kh(e);
  }
}, yP = ["disabled"], bP = {
  key: 1,
  type: "button",
  class: "vc-title"
}, _P = ["disabled"], W1 = /* @__PURE__ */ he({
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
        onKeydown: g[1] || (g[1] = jd(
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
      ], 40, yP)) : pe("", !0),
      Y(h).title ? xx((I(), W("button", bP, [
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
        [Y(Y1), Y(c)]
      ]) : pe("", !0),
      Y(h).next ? (I(), W("button", {
        key: 2,
        type: "button",
        class: "vc-arrow vc-next vc-focus",
        disabled: !Y(s),
        onClick: g[2] || (g[2] = //@ts-ignore
        (...m) => Y(o) && Y(o)(...m)),
        onKeydown: g[3] || (g[3] = jd(
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
      ], 40, _P)) : pe("", !0)
    ], 6));
  }
}), wP = he({
  directives: { popover: Y1 },
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
      const B = Oh(
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
    })), j = M(() => Sr(C.value) ? Oh(
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
}), $P = {
  key: 0,
  class: "vc-highlights vc-day-layer"
}, DP = {
  key: 1,
  class: "vc-day-layer vc-day-box-center-bottom"
}, EP = { class: "vc-dots" }, AP = {
  key: 2,
  class: "vc-day-layer vc-day-box-center-bottom"
}, CP = { class: "vc-bars" };
function SP(e, t, r, n, i, a) {
  const s = ue("CalendarSlot"), o = P2("popover");
  return I(), W("div", {
    class: Ae(e.dayClasses)
  }, [
    e.hasHighlights ? (I(), W("div", $P, [
      (I(!0), W(Be, null, et(e.highlights, ({ key: l, wrapperClass: c, class: u, style: f }) => (I(), W("div", {
        key: l,
        class: Ae(c)
      }, [
        oe("div", {
          class: Ae(u),
          style: Ne(f)
        }, null, 6)
      ], 2))), 128))
    ])) : pe("", !0),
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
        xx((I(), W("div", Rn(e.dayContentProps, B2(e.dayContentEvents, !0)), [
          kr(ke(e.day.label), 1)
        ], 16)), [
          [o, e.dayPopover]
        ])
      ]),
      _: 1
    }, 8, ["day", "attributes", "attribute-cells", "dayProps", "dayEvents", "locale"]),
    e.hasDots ? (I(), W("div", DP, [
      oe("div", EP, [
        (I(!0), W(Be, null, et(e.dots, ({ key: l, class: c, style: u }) => (I(), W("span", {
          key: l,
          class: Ae(c),
          style: Ne(u)
        }, null, 6))), 128))
      ])
    ])) : pe("", !0),
    e.hasBars ? (I(), W("div", AP, [
      oe("div", CP, [
        (I(!0), W(Be, null, et(e.bars, ({ key: l, class: c, style: u }) => (I(), W("span", {
          key: l,
          class: Ae(c),
          style: Ne(u)
        }, null, 6))), 128))
      ])
    ])) : pe("", !0)
  ], 2);
}
const kP = /* @__PURE__ */ Nr(wP, [["render", SP]]), OP = {
  name: "CalendarPane",
  inheritAttrs: !1,
  components: { CalendarHeader: W1, CalendarDay: kP },
  props: {
    page: { type: Object, required: !0 }
  },
  setup() {
    const { onWeeknumberClick: e } = Un();
    return {
      onWeeknumberClick: e
    };
  }
}, FP = { class: "vc-weekdays" }, TP = ["onClick"];
function MP(e, t, r, n, i, a) {
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
      oe("div", FP, [
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
          }, ke(l.weeknumberDisplay), 9, TP)
        ], 2)) : pe("", !0),
        (I(!0), W(Be, null, et(l.days, (c) => (I(), $e(o, {
          key: c.id,
          day: c
        }, null, 8, ["day"]))), 128))
      ]))), 128))
    ], 2)
  ], 2);
}
const PP = /* @__PURE__ */ Nr(OP, [["render", MP]]), BP = he({
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
        const B = Fo(s.target);
        !B || !n.value || (a && a.state.elements.reference !== B && f(), a ? a.update() : a = i$(
          B,
          n.value,
          c.value
        ));
      });
    }
    function h(B) {
      Object.assign(s, x1(B, "force"));
    }
    function p(B, T) {
      clearTimeout(r), B > 0 ? r = setTimeout(T, B) : T();
    }
    function v(B) {
      return !B || !a ? !1 : Fo(B) === a.state.elements.reference;
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
      no(n.value, R) || no(T, R) || m({ force: !0 });
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
      ["focus", "hover-focus"].includes(s.visibility) && (!B.relatedTarget || !no(n.value, B.relatedTarget)) && (s.isFocused = !1, !s.isHovered && s.autoHide && m());
    }
    function Z() {
      i != null && (i.disconnect(), i = null);
    }
    return me(
      () => n.value,
      (B) => {
        Z(), B && (i = new ResizeObserver(() => {
          a && a.update();
        }), i.observe(B));
      }
    ), me(() => s.placement, o, {
      immediate: !0
    }), ot(() => {
      $();
    }), Et(() => {
      f(), Z(), C();
    }), {
      ...T2(s),
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
function IP(e, t, r, n, i, a) {
  return I(), W("div", {
    class: Ae(["vc-popover-content-wrapper", { "is-interactive": e.isInteractive }]),
    ref: "popoverRef",
    onClick: t[0] || (t[0] = (...s) => e.onClick && e.onClick(...s)),
    onMouseover: t[1] || (t[1] = (...s) => e.onMouseOver && e.onMouseOver(...s)),
    onMouseleave: t[2] || (t[2] = (...s) => e.onMouseLeave && e.onMouseLeave(...s)),
    onFocusin: t[3] || (t[3] = (...s) => e.onFocusIn && e.onFocusIn(...s)),
    onFocusout: t[4] || (t[4] = (...s) => e.onFocusOut && e.onFocusOut(...s))
  }, [
    ae(yx, {
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
        ], 16)) : pe("", !0)
      ]),
      _: 3
    }, 8, ["name", "onBeforeEnter", "onAfterEnter", "onBeforeLeave", "onAfterLeave"])
  ], 34);
}
const A0 = /* @__PURE__ */ Nr(BP, [["render", IP]]), RP = {
  value: { type: Object, required: !0 }
}, NP = ["input"], LP = "__vc_calendar_nav_context__";
function jP(e, { emit: t }) {
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
    return T1().map((be, ee) => {
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
  }), A = M(() => v(n.value)), S = M(() => p(i.value)), k = M(() => m1(S.value.map((F) => F.year))), j = M(() => vi(S.value.map((F) => F.year))), P = M(() => r.value ? n.value : `${k.value} - ${j.value}`), H = M(
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
  me(
    () => C.value,
    () => {
      n.value = C.value;
    }
  ), me(
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
  return zi(LP, N), N;
}
const zP = { class: "vc-nav-header" }, HP = ["disabled"], VP = ["disabled"], YP = { class: "vc-nav-items" }, WP = ["data-id", "aria-label", "disabled", "onClick", "onKeydown"], UP = /* @__PURE__ */ he({
  __name: "CalendarNav",
  props: RP,
  emits: NP,
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
    } = jP(r, { emit: t });
    return (f, d) => (I(), W("div", {
      class: "vc-nav-container",
      ref_key: "navContainer",
      ref: n
    }, [
      oe("div", zP, [
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
        ], 40, HP),
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
        ], 40, VP)
      ]),
      oe("div", YP, [
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
        }, ke(h.label), 43, WP))), 128))
      ])
    ], 512));
  }
}), qP = {
  __name: "CalendarNavPopover",
  setup(e) {
    const { navPopoverId: t, color: r, displayMode: n, navPopoverRef: i, move: a } = Un();
    return (s, o) => (I(), $e(A0, {
      id: Y(t),
      class: Ae(["vc-nav-popover-container", `vc-${Y(r)}`, `vc-${Y(n)}`]),
      ref_key: "navPopoverRef",
      ref: i
    }, {
      default: de(({ data: l }) => [
        ae(UP, {
          value: l.page,
          onInput: Y(a)
        }, null, 8, ["value", "onInput"])
      ]),
      _: 1
    }, 8, ["id", "class"]));
  }
}, GP = he({
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
}), KP = { class: "vc-day-popover-row" }, ZP = {
  key: 0,
  class: "vc-day-popover-row-indicator"
}, XP = { class: "vc-day-popover-row-label" };
function JP(e, t, r, n, i, a) {
  return I(), W("div", KP, [
    e.indicator ? (I(), W("div", ZP, [
      oe("span", {
        class: Ae(e.indicator.class)
      }, null, 2)
    ])) : pe("", !0),
    oe("div", XP, [
      xe(e.$slots, "default", {}, () => [
        kr(ke(e.attribute.popover ? e.attribute.popover.label : "No content provided"), 1)
      ])
    ])
  ]);
}
const QP = /* @__PURE__ */ Nr(GP, [["render", JP]]), e6 = { class: "vc-day-popover-container" }, t6 = {
  key: 0,
  class: "vc-day-popover-header"
}, r6 = /* @__PURE__ */ he({
  __name: "CalendarDayPopover",
  setup(e) {
    const { dayPopoverId: t, displayMode: r, color: n, masks: i, locale: a } = Un();
    function s(l, c) {
      return a.value.formatDate(l, c);
    }
    function o(l) {
      return a.value.formatDate(l.date, i.value.dayPopover);
    }
    return (l, c) => (I(), $e(A0, {
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
          oe("div", e6, [
            Y(i).dayPopover ? (I(), W("div", t6, ke(o(u)), 1)) : pe("", !0),
            (I(!0), W(Be, null, et(f, (h) => (I(), $e(QP, {
              key: h.key,
              attribute: h
            }, null, 8, ["attribute"]))), 128))
          ])
        ])
      ]),
      _: 3
    }, 8, ["id", "class"]));
  }
}), n6 = he({
  name: "Calendar",
  components: {
    CalendarHeader: W1,
    CalendarPane: PP,
    CalendarNavPopover: qP,
    CalendarDayPopover: r6
  },
  emits: gP,
  props: vP,
  setup(e, { emit: t, slots: r }) {
    return mP(e, { emit: t, slots: r });
  }
}), i6 = { class: "vc-pane-header-wrapper" };
function a6(e, t, r, n, i, a) {
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
      onMouseup: t[0] || (t[0] = Kf(() => {
      }, ["prevent"])),
      ref: "containerRef"
    }), [
      oe("div", {
        class: Ae(["vc-pane-container", { "in-transition": e.inTransition }])
      }, [
        oe("div", i6, [
          e.firstPage ? (I(), $e(s, {
            key: 0,
            page: e.firstPage,
            "is-lg": "",
            "hide-title": ""
          }, null, 8, ["page"])) : pe("", !0)
        ]),
        ae(yx, {
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
        xe(e.$slots, "day-popover", Do(M2(u)))
      ]),
      _: 3
    }),
    ae(c)
  ], 64);
}
const s6 = /* @__PURE__ */ Nr(n6, [["render", a6]]), o6 = { class: "vc-base-select" }, l6 = ["value"], c6 = ["value", "disabled"], u6 = {
  inheritAttrs: !1
}, pa = /* @__PURE__ */ Object.assign(u6, {
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
    return (t, r) => (I(), W("div", o6, [
      e.showIcon ? (I(), $e(Si, {
        key: 0,
        name: "ChevronDown",
        size: e.small ? "16" : "18"
      }, null, 8, ["size"])) : pe("", !0),
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
        }, ke(n.label), 9, c6))), 128))
      ], 16, l6)
    ]));
  }
}), U1 = "__vc_date_picker_context__", f6 = {
  ...L1,
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
}, d6 = [
  "update:modelValue",
  "drag",
  "dayclick",
  "daykeydown",
  "popover-will-show",
  "popover-did-show",
  "popover-will-hide",
  "popover-did-hide"
];
function h6(e, t) {
  const r = j1(e), { locale: n, masks: i, disabledAttribute: a } = r, { emit: s } = t, o = ce(!1), l = ce(To()), c = ce(null), u = ce(null), f = ce(["", ""]), d = ce(null), h = ce(null);
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
    return Ka({}, e.popover, fn("datePicker.popover"), {
      target: U
    });
  }), P = M(
    () => V1({
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
    Ku({
      ...j.value,
      ...O,
      isInteractive: !0,
      id: l.value
    });
  }
  function qr(O = {}) {
    Wo({
      hideDelay: 10,
      force: !0,
      ...j.value,
      ...O,
      id: l.value
    });
  }
  function or(O) {
    H1({
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
      return M1(U, "monthly", n.value);
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
    return !ht || B1(ht, ne, fe) ? !1 : He(ht, {
      position: wr,
      ...U
    });
  }
  me(
    () => e.isRange,
    (O) => {
      O && console.warn(
        "The `is-range` prop will be deprecated in future releases. Please use the `range` modifier."
      );
    },
    { immediate: !0 }
  ), me(
    () => D.value,
    () => We()
  ), me(
    () => e.modelValue,
    (O) => {
      g && Ie(O, {
        formatInput: !0,
        hidePopover: !1
      });
    }
  ), me(
    () => T.value,
    () => {
      Br(e.rules) && Ie(e.modelValue, {
        formatInput: !0,
        hidePopover: !1
      });
    }
  ), me(
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
  return zi(U1, se), se;
}
function p6() {
  const e = Dl(U1);
  if (e)
    return e;
  throw new Error(
    "DatePicker context missing. Please verify this component is nested within a valid context provider."
  );
}
const v6 = [
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
], g6 = [
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
function m6(e) {
  const t = p6(), {
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
  ), p = M(() => S1(h.value)), v = M(() => !!h.value.isValid), g = M(() => !l.value && v.value), m = M(() => {
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
    () => KM(h.value, s.value[e.position])
  ), $ = M(() => v6.filter(
    (S) => E.value.hours.some((k) => k.value === S.value)
  )), C = M(() => g6.filter(
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
const x6 = {
  key: 0,
  class: "vc-time-header"
}, y6 = { class: "vc-time-weekday" }, b6 = { class: "vc-time-month" }, _6 = { class: "vc-time-day" }, w6 = { class: "vc-time-year" }, $6 = { class: "vc-time-select-group" }, D6 = /* @__PURE__ */ oe("span", { class: "vc-time-colon" }, ":", -1), E6 = /* @__PURE__ */ oe("span", { class: "vc-time-colon" }, ":", -1), A6 = /* @__PURE__ */ oe("span", { class: "vc-time-decimal" }, ".", -1), C6 = /* @__PURE__ */ he({
  __name: "TimePicker",
  props: {
    position: null
  },
  setup(e, { expose: t }) {
    const n = m6(e);
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
        Y(m) && Y(s) ? (I(), W("div", x6, [
          oe("span", y6, ke(Y(i).formatDate(Y(s), "WWW")), 1),
          oe("span", b6, ke(Y(i).formatDate(Y(s), "MMM")), 1),
          oe("span", _6, ke(Y(i).formatDate(Y(s), "D")), 1),
          oe("span", w6, ke(Y(i).formatDate(Y(s), "YYYY")), 1)
        ])) : pe("", !0)
      ]),
      oe("div", $6, [
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
          D6,
          ae(pa, {
            modelValue: Y(l),
            "onUpdate:modelValue": x[1] || (x[1] = (b) => ua(l) ? l.value = b : null),
            modelModifiers: { number: !0 },
            options: Y(f).minutes,
            "align-left": Y(y) === 2
          }, null, 8, ["modelValue", "options", "align-left"])
        ], 64)) : pe("", !0),
        Y(y) > 2 ? (I(), W(Be, { key: 1 }, [
          E6,
          ae(pa, {
            modelValue: Y(c),
            "onUpdate:modelValue": x[2] || (x[2] = (b) => ua(c) ? c.value = b : null),
            modelModifiers: { number: !0 },
            options: Y(f).seconds,
            "align-left": Y(y) === 3
          }, null, 8, ["modelValue", "options", "align-left"])
        ], 64)) : pe("", !0),
        Y(y) > 3 ? (I(), W(Be, { key: 2 }, [
          A6,
          ae(pa, {
            modelValue: Y(u),
            "onUpdate:modelValue": x[3] || (x[3] = (b) => ua(u) ? u.value = b : null),
            modelModifiers: { number: !0 },
            options: Y(f).milliseconds,
            "align-left": ""
          }, null, 8, ["modelValue", "options"])
        ], 64)) : pe("", !0),
        Y(g) ? pe("", !0) : (I(), $e(pa, {
          key: 3,
          modelValue: Y(p),
          "onUpdate:modelValue": x[4] || (x[4] = (b) => ua(p) ? p.value = b : null),
          options: Y(v)
        }, null, 8, ["modelValue", "options"]))
      ])
    ], 2));
  }
}), q1 = he({
  name: "DatePicker",
  inheritAttrs: !1,
  emits: d6,
  props: f6,
  setup(e, t) {
    const r = h6(e, t), { slots: n, attrs: i } = t, {
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
    const E = Ce(x1(r, "calendarRef", "popoverRef")), $ = () => (s.value ? [0, 1] : [0]).map((S) => pi(C6, { position: S })), C = () => {
      if (!u.value)
        return null;
      const A = o.value ? { ...n, footer: $ } : n;
      return pi(
        s6,
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
        A0,
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
}), S6 = /* @__PURE__ */ he({
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
    return (s, o) => (I(), $e(Y(q1), {
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
}), k6 = /* @__PURE__ */ he({
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
    return me(() => a.value, () => {
      a.value.end && a.value.start && n("selected");
    }, { deep: !0 }), (s, o) => (I(), $e(Y(q1), {
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
}), G1 = (e) => {
  let t = e.replace(/-([a-z])/g, (r, n) => n.toUpperCase());
  return t.length >= 1 && (t = `${t[0].toUpperCase()}${t.slice(1)}`), t;
}, hs = () => {
  const e = I2(), t = R2(), r = Ru ? Ru() : null;
  return {
    hasSlot(n = "default") {
      return !!e[n];
    },
    forceUpdate() {
      var n;
      (n = r == null ? void 0 : r.proxy) == null || n.$forceUpdate();
    },
    hasListener(n) {
      return !!t[`on${G1(n)}`];
    },
    nextTick(n) {
      var i;
      (i = r == null ? void 0 : r.proxy) == null || i.$nextTick(n);
    }
  };
}, O6 = { key: 0 }, F6 = { class: "pa-3" }, K1 = /* @__PURE__ */ he({
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
    me(() => a.show, () => {
      a.show !== n.modelValue && (i("update:modelValue", a.show), s());
    }), me(() => n.modelValue, () => {
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
                  e.hideHeader ? pe("", !0) : (I(), $e(d, {
                    key: 0,
                    class: "px-3 py-1",
                    style: { "min-height": "56px" },
                    "no-gutters": "",
                    align: "center"
                  }, {
                    default: de(() => [
                      e.title ? (I(), W("h3", O6, ke(e.title), 1)) : pe("", !0),
                      ae(u),
                      !e.hideClose && !Y(r).hasSlot("actions") ? (I(), $e(f, {
                        key: 1,
                        variant: "plain",
                        icon: "mdi-close",
                        disabled: e.loading,
                        onClick: c[0] || (c[0] = (m) => a.show = !1)
                      }, null, 8, ["disabled"])) : pe("", !0),
                      xe(l.$slots, "actions", { switchShow: o })
                    ]),
                    _: 3
                  })),
                  e.hideHeader ? pe("", !0) : (I(), $e(h, { key: 1 }))
                ], 2)), 64)),
                oe("div", F6, [
                  xe(l.$slots, "default", { switchShow: o })
                ]),
                xe(l.$slots, "footer")
              ]),
              _: 3
            })) : pe("", !0)
          ]),
          _: 3
        }, 8, ["modelValue", "width", "max-width", "persistent", "fullscreen"])
      ]);
    };
  }
}), T6 = /* @__PURE__ */ he({
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
        e.hideSpace ? pe("", !0) : (I(), W("div", {
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
}, M6 = /* @__PURE__ */ zr(T6, [["__scopeId", "data-v-ae397624"]]);
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
const P6 = Bl({
  class: [String, Array],
  style: {
    type: [String, Array, Object],
    default: null
  }
}, "component");
function Xh(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function B6(e, t) {
  const r = {}, n = new Set(Object.keys(e));
  for (const i of t)
    n.has(i) && (r[i] = e[i]);
  return r;
}
function Z1() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 ? arguments[2] : void 0;
  const n = {};
  for (const i in e)
    n[i] = e[i];
  for (const i in t) {
    const a = e[i], s = t[i];
    if (Xh(a) && Xh(s)) {
      n[i] = Z1(a, s, r);
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
function X1(e) {
  N2(`Vuetify: ${e}`);
}
const Zu = Symbol.for("vuetify:defaults");
function J1() {
  const e = Dl(Zu);
  if (!e)
    throw new Error("[Vuetify] Could not find defaults instance");
  return e;
}
function I6(e, t) {
  var r, n;
  return typeof ((r = e.props) == null ? void 0 : r[t]) < "u" || typeof ((n = e.props) == null ? void 0 : n[wi(t)]) < "u";
}
function R6() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : J1();
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
      return c === "class" || c === "style" ? [(f = i.value) == null ? void 0 : f[c], u].filter((v) => v != null) : typeof c == "string" && !I6(n.vnode, c) ? ((d = i.value) == null ? void 0 : d[c]) ?? ((p = (h = r.value) == null ? void 0 : h.global) == null ? void 0 : p[c]) ?? u : u;
    }
  }), s = Zf();
  gx(() => {
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
    const l = j6(Zu, n);
    zi(Zu, M(() => s.value ? Z1((l == null ? void 0 : l.value) ?? {}, s.value) : l == null ? void 0 : l.value));
  }
  return {
    props: a,
    provideSubDefaults: o
  };
}
function N6(e) {
  if (e._setup = e._setup ?? e.setup, !e.name)
    return X1("The component is missing an explicit name, unable to generate default prop value"), e;
  if (e._setup) {
    e.props = Bl(e.props ?? {}, e.name)();
    const t = Object.keys(e.props).filter((r) => r !== "class" && r !== "style");
    e.filterProps = function(n) {
      return B6(n, t);
    }, e.props._as = String, e.setup = function(n, i) {
      const a = J1();
      if (!a.value)
        return e._setup(n, i);
      const {
        props: s,
        provideSubDefaults: o
      } = R6(n, n._as ?? e.name, a), l = e._setup(s, i);
      return o(), l;
    };
  }
  return e;
}
function L6() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
  return (t) => (e ? N6 : he)(t);
}
function Il(e, t) {
  const r = Ru();
  if (!r)
    throw new Error(`[Vuetify] ${e} ${t || "must be called from inside a setup function"}`);
  return r;
}
function j6(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Il("injectSelf");
  const {
    provides: r
  } = t;
  if (r && e in r)
    return r[e];
}
function z6(e) {
  const t = Il("useRender");
  t.render = e;
}
function H6(e, t) {
  let r;
  function n() {
    r = j2(), r.run(() => t.length ? t(() => {
      r == null || r.stop(), n();
    }) : t());
  }
  me(e, (i) => {
    i && !r ? n() : i || (r == null || r.stop(), r = void 0);
  }, {
    immediate: !0
  }), L2(() => {
    r == null || r.stop();
  });
}
function V6(e, t, r) {
  let n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : (f) => f, i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : (f) => f;
  const a = Il("useProxiedModel"), s = ce(e[t] !== void 0 ? e[t] : r), o = wi(t), c = o !== t ? M(() => {
    var f, d, h, p;
    return e[t], !!(((f = a.vnode.props) != null && f.hasOwnProperty(t) || (d = a.vnode.props) != null && d.hasOwnProperty(o)) && ((h = a.vnode.props) != null && h.hasOwnProperty(`onUpdate:${t}`) || (p = a.vnode.props) != null && p.hasOwnProperty(`onUpdate:${o}`)));
  }) : M(() => {
    var f, d;
    return e[t], !!((f = a.vnode.props) != null && f.hasOwnProperty(t) && ((d = a.vnode.props) != null && d.hasOwnProperty(`onUpdate:${t}`)));
  });
  H6(() => !c.value, () => {
    me(() => e[t], (f) => {
      s.value = f;
    });
  });
  const u = M({
    get() {
      const f = e[t];
      return n(c.value ? f : s.value);
    },
    set(f) {
      const d = i(f), h = z2(c.value ? e[t] : s.value);
      h === d || n(h) === f || (s.value = d, a == null || a.emit(`update:${t}`, d));
    }
  });
  return Object.defineProperty(u, "externalValue", {
    get: () => c.value ? e[t] : s.value
  }), u;
}
const Y6 = Symbol.for("vuetify:form"), W6 = Bl({
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
function U6(e) {
  const t = V6(e, "modelValue"), r = M(() => e.disabled), n = M(() => e.readonly), i = Zf(!1), a = ce([]), s = ce([]);
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
  return me(a, () => {
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
  }), zi(Y6, {
    register: (u) => {
      let {
        id: f,
        validate: d,
        reset: h,
        resetValidation: p
      } = u;
      a.value.some((v) => v.id === f) && X1(`Duplicate input name "${f}"`), a.value.push({
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
const dc = Symbol("Forwarded refs");
function hc(e, t) {
  let r = e;
  for (; r; ) {
    const n = Reflect.getOwnPropertyDescriptor(r, t);
    if (n)
      return n;
    r = Object.getPrototypeOf(r);
  }
}
function q6(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  return e[dc] = r, new Proxy(e, {
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
          const c = hc(l.value, a) ?? ("_" in l.value ? hc((o = l.value._) == null ? void 0 : o.setupState, a) : void 0);
          if (c)
            return c;
        }
        for (const l of r) {
          const c = l.value && l.value[dc];
          if (!c)
            continue;
          const u = c.slice();
          for (; u.length; ) {
            const f = u.shift(), d = hc(f.value, a);
            if (d)
              return d;
            const h = f.value && f.value[dc];
            h && u.push(...h);
          }
        }
      }
    }
  });
}
const G6 = Bl({
  ...P6(),
  ...W6()
}, "VForm"), K6 = L6()({
  name: "VForm",
  props: G6(),
  emits: {
    "update:modelValue": (e) => !0,
    submit: (e) => !0
  },
  setup(e, t) {
    let {
      slots: r,
      emit: n
    } = t;
    const i = U6(e), a = ce();
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
    return z6(() => {
      var l;
      return ae("form", {
        ref: a,
        class: ["v-form", e.class],
        style: e.style,
        novalidate: !0,
        onReset: s,
        onSubmit: o
      }, [(l = r.default) == null ? void 0 : l.call(r, i)]);
    }), q6(i, a);
  }
}), Z6 = /* @__PURE__ */ he({
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
      ae(Y(K6), {
        ref_key: "checkform",
        ref: a,
        readonly: e.readonly,
        disabled: e.disabled || e.loading,
        "onUpdate:modelValue": o,
        onSubmit: Kf(l, ["stop", "prevent"])
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
}), X6 = /* @__PURE__ */ he({
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
      const n = new Ya();
      return n.set("borderRadius", t.avatar ? "100em" : "8px"), n.set("width", t.width), n.set("height", t.height), n.join();
    });
    return (n, i) => (I(), W("div", {
      class: "component-skeleton",
      style: Ne(r.value)
    }, null, 4));
  }
}), C0 = /* @__PURE__ */ zr(X6, [["__scopeId", "data-v-085bd51c"]]), J6 = /* @__PURE__ */ he({
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
    const { notFoundImage: r, staticUrl: n } = nse(), i = hs(), a = new El({
      concurrentExecutions: 1
    }), s = new Al({
      delay: 100
    }), o = new Y2({
      def: (b) => `${n}/${b}`
    }), l = o.url(typeof r == "function" ? r() : r), c = e, u = t, f = ce(), d = ce(), h = ce(), p = Ce({
      src: "",
      style: "",
      image: null,
      loading: !0,
      elementListenerGroup: null
    }), v = M(() => {
      let b = new Ya();
      return b.set("width", c.width, "100%"), b.set("height", c.square ? c.width : c.height, "200px"), b.set("maxWidth", c.maxWidth), b.set("maxHeight", c.maxHeight), b.set("overflow", "hidden"), b.set("borderRadius", c.radius), b.set("display", c.block ? "block" : "inline-block"), b.join();
    });
    me(() => c.src, () => y());
    const g = [];
    for (let b = 0; b < 3; b++) {
      const E = Ax([f, d, h][b], ([{ isIntersecting: $ }]) => {
        $ && (y(), g.forEach((C) => C.stop()));
      }, {
        immediate: !0
      });
      g.push(E);
    }
    ot(() => {
      p.elementListenerGroup = new Xf(window), p.elementListenerGroup.add("resize", () => s.input("")), s.on("trigger", () => {
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
      let E = new Ya();
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
      e.skeleton !== "hide" ? (I(), $e(C0, {
        key: 0,
        avatar: e.avatar
      }, null, 8, ["avatar"])) : pe("", !0)
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
}), Q6 = /* @__PURE__ */ zr(J6, [["__scopeId", "data-v-f2bfbc93"]]), e5 = /* @__PURE__ */ he({
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
    const r = e, n = t, i = M(() => typeof r.to == "string" ? Wa.headMatch(r.to, "http") : !1), a = M(() => !(r.disabled || r.useClick || i.value)), s = M(() => {
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
      return a.value ? (I(), $e(c, Do(Rn({ key: 0 }, s.value)), {
        default: de(() => [
          xe(o.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 16)) : (I(), W("a", Do(Rn({ key: 1 }, s.value)), [
        xe(o.$slots, "default", {}, void 0, !0)
      ], 16));
    };
  }
}), t5 = /* @__PURE__ */ zr(e5, [["__scopeId", "data-v-a4e972e6"]]), r5 = /* @__PURE__ */ he({
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
class Q1 extends mt {
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
    this.id = n.id || pn.createUuid(), this.icon = n.icon, r instanceof Uo && (this.googleMap = r, this.googleInfowindow = new google.maps.InfoWindow({
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
    }))), r instanceof S0 && (this.aMap = r, this.aMap.map && (this.aMapMarker = new AMap.Marker({
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
const n5 = {
  libName: "nextgen-front-lib"
}, Kt = new W2(n5.libName), i5 = Kt.checkout("GoogleMap");
function a5() {
  var e;
  if (!((e = window.__ng_state.gmap) != null && e.installed))
    throw i5.create("google map not installed.");
}
class Uo extends mt {
  constructor() {
    super();
    G(this, "map");
    G(this, "routes", []);
    G(this, "markers", []);
    a5();
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
    const n = new Q1(this, r);
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
    const n = new ey(this, r);
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
class ey extends mt {
  constructor(r, n) {
    super();
    G(this, "id");
    G(this, "aMap");
    G(this, "aMapDriving");
    G(this, "googleMap");
    G(this, "googleDirectionsService");
    G(this, "googleDirectionsRenderer");
    this.id = n.id || pn.createUuid(), r instanceof Uo && (this.googleMap = r, this.googleDirectionsService = new google.maps.DirectionsService(), this.update(n)), r instanceof S0 && (this.aMap = r, this.aMap.map && this.update(n));
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
const s5 = Kt.checkout("AMap");
function o5() {
  var e;
  if (!((e = window.__ng_state.amap) != null && e.installed))
    throw s5.create("amap not installed.");
}
class S0 extends mt {
  constructor() {
    super();
    G(this, "map");
    G(this, "routes", []);
    G(this, "markers", []);
    o5();
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
    const n = new Q1(this, r);
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
    const n = new ey(this, r);
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
const l5 = /* @__PURE__ */ he({
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
      default: () => Uo.isInstalled() ? "google" : "amap"
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
    const a = n.mode === "google" ? new Uo() : new S0(), s = ce();
    return ot(() => {
      a && s.value && (a.start(s.value, {
        zoom: n.zoom,
        center: n.center
      }), a.reloadRoutes(n.routes), a.reloadMarkers(n.markers), a.on("move", (o) => i("move", o)), a.on("click", (o) => i("click", o)), a.on("clickMarker", (o) => i("clickMarker", o)));
    }), Et(() => {
      a && a.close();
    }), me(() => n.zoom, () => a == null ? void 0 : a.zoomTo(n.zoom)), me(() => n.center, () => a == null ? void 0 : a.moveTo(n.center), {
      deep: !0
    }), me(() => n.routes, () => a == null ? void 0 : a.reloadRoutes(n.routes), {
      deep: !0
    }), me(() => n.markers, () => a == null ? void 0 : a.reloadMarkers(n.markers), {
      deep: !0
    }), (o, l) => (I(), W("div", {
      ref_key: "main",
      ref: s,
      style: Ne({
        height: e.height
      })
    }, null, 4));
  }
}), c5 = {
  key: 0,
  class: "component-outline-text py-2"
}, u5 = { class: "w-100 opacity-0" }, f5 = { key: 1 }, d5 = /* @__PURE__ */ he({
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
    const t = e, r = M(() => t.outlineColor === "cas-primary" ? "#005A8E" : t.outlineColor === "cas-secondary" ? "#5E3013" : Wa.headMatch(t.outlineColor, "--") ? `var(${t.outlineColor})` : t.outlineColor);
    return (n, i) => e.disabled === !1 ? (I(), W("div", c5, [
      oe("div", {
        class: "w-100 component-outline-text-stroke",
        style: Ne(`-webkit-text-stroke: ${e.outlineWeight}px ${r.value}`)
      }, ke(e.text), 5),
      oe("div", {
        class: "w-100 component-outline-text-no-stroke",
        style: Ne({ color: e.fontColor })
      }, ke(e.text), 5),
      oe("div", u5, ke(e.text), 1)
    ])) : (I(), W("div", f5, [
      oe("div", null, ke(e.text), 1)
    ]));
  }
}), h5 = /* @__PURE__ */ zr(d5, [["__scopeId", "data-v-5c33c662"]]), p5 = /* @__PURE__ */ he({
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
    const r = new Eo({
      defCheckValue: () => {
        var c;
        return ((c = n.value) == null ? void 0 : c.clientWidth) || 0;
      },
      points: Eo.bootstrapBreakpoints
    }), n = ce(), i = e, a = t, s = M(() => !!(i.alwaysShow || l.value > 1)), o = M({
      get: () => i.modelValue,
      set: (c) => a("update:modelValue", c || 1)
    }), l = M(() => {
      let c = Math.ceil(i.total / i.prePage);
      return isNaN(c) ? 1 : c || 1;
    });
    return me(() => o.value, () => {
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
        }, null, 8, ["modelValue", "color", "length", "disabled", "size", "total-visible"])) : pe("", !0),
        s.value && e.loading ? (I(), $e(d, {
          key: 1,
          "buffer-value": "0",
          indeterminate: "",
          style: { "max-width": "200px" },
          color: e.color
        }, null, 8, ["color"])) : pe("", !0)
      ], 512);
    };
  }
}), ty = (e, t = 100, r = 100) => {
  const n = new Al({
    delay: t,
    maxValueLength: r
  });
  return ot(() => {
    n.on("trigger", e);
  }), Et(() => {
    n.close();
  }), n;
}, v5 = { class: "lib-component-search-bar" }, g5 = { class: "text-center" }, m5 = /* @__PURE__ */ he({
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
    const r = e, n = t, i = ty(() => a(), 100, 5);
    me(() => r.searchValue, () => {
      i.input("");
    });
    const a = () => {
      r.searchValue ? n("changed") : n("closed");
    }, s = (o) => {
      n("selected", o), n("closed");
    };
    return (o, l) => {
      const c = ue("v-progress-circular"), u = ue("VList"), f = ue("v-list-item");
      return I(), W("div", v5, [
        xe(o.$slots, "default", {}, void 0, !0),
        e.loading ? (I(), $e(u, {
          key: 0,
          class: "lib-component-search-list rounded elevation-3"
        }, {
          default: de(() => [
            xe(o.$slots, "loading", {}, () => [
              oe("div", g5, [
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
        })) : pe("", !0)
      ]);
    };
  }
}), x5 = /* @__PURE__ */ zr(m5, [["__scopeId", "data-v-a83e4c70"]]), y5 = /* @__PURE__ */ he({
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
    const t = new Eo({
      defCheckValue: () => {
        var a;
        return ((a = r.value) == null ? void 0 : a.clientWidth) || 0;
      },
      points: Eo.bootstrapBreakpoints
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
                  ae(C0)
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
}), b5 = () => {
  const { service: e, stage: t, version: r } = As(), n = new _x(`lib-${e}-${t}`, {
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
}, Jh = () => {
  const { service: e, stage: t, version: r } = As(), n = new _x(`lib-pd-${e}-${t}`, {
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
}, _5 = ["onClick"], w5 = {
  colspan: "100%",
  class: "component-twr-detail"
}, $5 = { key: 0 }, D5 = /* @__PURE__ */ he({
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
    const r = hs(), n = Ao.peel, i = b5(), a = new Xf(), s = e, o = t, l = ce(), c = Ce({
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
    Z2(l, () => {
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
    }), me(() => c.showFields, () => {
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
                  }, 1032, ["color", "class", "onClick"])) : pe("", !0)
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
                ], 14, _5),
                Y(r).hasSlot("details") ? (I(), W("tr", {
                  key: S + "iddi"
                }, [
                  oe("td", w5, [
                    xe(b.$slots, "details", {
                      class: "w-100",
                      item: A
                    }, void 0, !0)
                  ])
                ])) : pe("", !0)
              ], 64))), 128))
            ]),
            xe(b.$slots, "end", {}, void 0, !0)
          ]),
          _: 3
        }, 8, ["height", "fixed-header", "class"]),
        e.items.length === 0 ? (I(), W("div", $5, [
          xe(b.$slots, "no-data", {}, void 0, !0)
        ])) : pe("", !0),
        ae(Oi, { "model-value": e.loading }, null, 8, ["model-value"]),
        ae(K1, {
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
              }, null, 8, ["value", "label", "model-value"])) : pe("", !0)
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
        ])) : pe("", !0)
      ], 2);
    };
  }
}), E5 = /* @__PURE__ */ zr(D5, [["__scopeId", "data-v-f23594ef"]]), A5 = /* @__PURE__ */ he({
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
      let a = new Ya();
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
            ], 4)) : pe("", !0),
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
}), C5 = /* @__PURE__ */ zr(A5, [["__scopeId", "data-v-df86c481"]]), S5 = ["accept", "disabled"], k5 = ["accept", "disabled"], O5 = /* @__PURE__ */ he({
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
        let u = [], f = new wx(), d = new El({
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
      }, null, 40, S5)) : (I(), W("input", {
        key: 1,
        ref_key: "fileInput",
        ref: i,
        hidden: "",
        type: "file",
        accept: e.fileType,
        disabled: a.reading || e.loading,
        onChange: o
      }, null, 40, k5)),
      ae(Oi, {
        "model-value": e.loading || a.reading
      }, null, 8, ["model-value"])
    ]));
  }
}), k0 = (e, t) => {
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
}, F5 = { key: 0 }, T5 = {
  key: 1,
  class: "text-center"
}, M5 = { key: 1 }, P5 = {
  key: 1,
  class: "text-error text-center py-2"
}, B5 = {
  key: 2,
  style: { height: "32px" }
}, I5 = /* @__PURE__ */ he({
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
    const n = hs(), i = ce(), a = new $x(), s = (d) => {
      a.attach("trigger", d);
    }, o = e, l = r;
    t({
      hook: s
    }), Ax(i, ([{ isIntersecting: d }]) => {
      c.inited === !1 && l("inited", s), c.inited = !0, c.isIntersecting = d;
    });
    const c = Ce({
      inited: !1,
      error: null,
      ticker: new Dx(500),
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
        c.error = d, c.errorMessage = k0(d, "unknown error"), l("error", {
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
        c.loading ? (I(), W("div", F5, [
          Y(n).hasSlot("loading") ? xe(d.$slots, "loading", { key: 0 }) : (I(), W("div", T5, [
            ae(p, {
              indeterminate: "",
              color: "primary"
            })
          ]))
        ])) : pe("", !0),
        c.error ? (I(), W("div", M5, [
          Y(n).hasSlot("error") ? xe(d.$slots, "error", {
            key: 0,
            error: c.error,
            message: c.errorMessage
          }) : (I(), W("div", P5, ke(c.errorMessage), 1))
        ])) : pe("", !0),
        !Y(n).hasSlot("default") && !c.loading && !c.error ? (I(), W("div", B5)) : pe("", !0),
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
function Sa(e) {
  return an(ps(e * 2.55), 0, 255);
}
function cn(e) {
  return an(ps(e * 255), 0, 255);
}
function Er(e) {
  return an(ps(e / 2.55) / 100, 0, 1);
}
function Qh(e) {
  return an(ps(e * 100), 0, 100);
}
const jt = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, A: 10, B: 11, C: 12, D: 13, E: 14, F: 15, a: 10, b: 11, c: 12, d: 13, e: 14, f: 15 }, Xu = [..."0123456789ABCDEF"], R5 = (e) => Xu[e & 15], N5 = (e) => Xu[(e & 240) >> 4] + Xu[e & 15], Fs = (e) => (e & 240) >> 4 === (e & 15), L5 = (e) => Fs(e.r) && Fs(e.g) && Fs(e.b) && Fs(e.a);
function j5(e) {
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
const z5 = (e, t) => e < 255 ? t(e) : "";
function H5(e) {
  var t = L5(e) ? R5 : N5;
  return e ? "#" + t(e.r) + t(e.g) + t(e.b) + z5(e.a, t) : void 0;
}
const V5 = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
function ry(e, t, r) {
  const n = t * Math.min(r, 1 - r), i = (a, s = (a + e / 30) % 12) => r - n * Math.max(Math.min(s - 3, 9 - s, 1), -1);
  return [i(0), i(8), i(4)];
}
function Y5(e, t, r) {
  const n = (i, a = (i + e / 60) % 6) => r - r * t * Math.max(Math.min(a, 4 - a, 1), 0);
  return [n(5), n(3), n(1)];
}
function W5(e, t, r) {
  const n = ry(e, 1, 0.5);
  let i;
  for (t + r > 1 && (i = 1 / (t + r), t *= i, r *= i), i = 0; i < 3; i++)
    n[i] *= 1 - t - r, n[i] += t;
  return n;
}
function U5(e, t, r, n, i) {
  return e === i ? (t - r) / n + (t < r ? 6 : 0) : t === i ? (r - e) / n + 2 : (e - t) / n + 4;
}
function O0(e) {
  const r = e.r / 255, n = e.g / 255, i = e.b / 255, a = Math.max(r, n, i), s = Math.min(r, n, i), o = (a + s) / 2;
  let l, c, u;
  return a !== s && (u = a - s, c = o > 0.5 ? u / (2 - a - s) : u / (a + s), l = U5(r, n, i, u, a), l = l * 60 + 0.5), [l | 0, c || 0, o];
}
function F0(e, t, r, n) {
  return (Array.isArray(t) ? e(t[0], t[1], t[2]) : e(t, r, n)).map(cn);
}
function T0(e, t, r) {
  return F0(ry, e, t, r);
}
function q5(e, t, r) {
  return F0(W5, e, t, r);
}
function G5(e, t, r) {
  return F0(Y5, e, t, r);
}
function ny(e) {
  return (e % 360 + 360) % 360;
}
function K5(e) {
  const t = V5.exec(e);
  let r = 255, n;
  if (!t)
    return;
  t[5] !== n && (r = t[6] ? Sa(+t[5]) : cn(+t[5]));
  const i = ny(+t[2]), a = +t[3] / 100, s = +t[4] / 100;
  return t[1] === "hwb" ? n = q5(i, a, s) : t[1] === "hsv" ? n = G5(i, a, s) : n = T0(i, a, s), {
    r: n[0],
    g: n[1],
    b: n[2],
    a: r
  };
}
function Z5(e, t) {
  var r = O0(e);
  r[0] = ny(r[0] + t), r = T0(r), e.r = r[0], e.g = r[1], e.b = r[2];
}
function X5(e) {
  if (!e)
    return;
  const t = O0(e), r = t[0], n = Qh(t[1]), i = Qh(t[2]);
  return e.a < 255 ? `hsla(${r}, ${n}%, ${i}%, ${Er(e.a)})` : `hsl(${r}, ${n}%, ${i}%)`;
}
const ep = {
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
}, tp = {
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
function J5() {
  const e = {}, t = Object.keys(tp), r = Object.keys(ep);
  let n, i, a, s, o;
  for (n = 0; n < t.length; n++) {
    for (s = o = t[n], i = 0; i < r.length; i++)
      a = r[i], o = o.replace(a, ep[a]);
    a = parseInt(tp[s], 16), e[o] = [a >> 16 & 255, a >> 8 & 255, a & 255];
  }
  return e;
}
let Ts;
function Q5(e) {
  Ts || (Ts = J5(), Ts.transparent = [0, 0, 0, 0]);
  const t = Ts[e.toLowerCase()];
  return t && {
    r: t[0],
    g: t[1],
    b: t[2],
    a: t.length === 4 ? t[3] : 255
  };
}
const eB = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
function tB(e) {
  const t = eB.exec(e);
  let r = 255, n, i, a;
  if (t) {
    if (t[7] !== n) {
      const s = +t[7];
      r = t[8] ? Sa(s) : an(s * 255, 0, 255);
    }
    return n = +t[1], i = +t[3], a = +t[5], n = 255 & (t[2] ? Sa(n) : an(n, 0, 255)), i = 255 & (t[4] ? Sa(i) : an(i, 0, 255)), a = 255 & (t[6] ? Sa(a) : an(a, 0, 255)), {
      r: n,
      g: i,
      b: a,
      a: r
    };
  }
}
function rB(e) {
  return e && (e.a < 255 ? `rgba(${e.r}, ${e.g}, ${e.b}, ${Er(e.a)})` : `rgb(${e.r}, ${e.g}, ${e.b})`);
}
const pc = (e) => e <= 31308e-7 ? e * 12.92 : Math.pow(e, 1 / 2.4) * 1.055 - 0.055, ai = (e) => e <= 0.04045 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4);
function nB(e, t, r) {
  const n = ai(Er(e.r)), i = ai(Er(e.g)), a = ai(Er(e.b));
  return {
    r: cn(pc(n + r * (ai(Er(t.r)) - n))),
    g: cn(pc(i + r * (ai(Er(t.g)) - i))),
    b: cn(pc(a + r * (ai(Er(t.b)) - a))),
    a: e.a + r * (t.a - e.a)
  };
}
function Ms(e, t, r) {
  if (e) {
    let n = O0(e);
    n[t] = Math.max(0, Math.min(n[t] + n[t] * r, t === 0 ? 360 : 1)), n = T0(n), e.r = n[0], e.g = n[1], e.b = n[2];
  }
}
function iy(e, t) {
  return e && Object.assign(t || {}, e);
}
function rp(e) {
  var t = { r: 0, g: 0, b: 0, a: 255 };
  return Array.isArray(e) ? e.length >= 3 && (t = { r: e[0], g: e[1], b: e[2], a: 255 }, e.length > 3 && (t.a = cn(e[3]))) : (t = iy(e, { r: 0, g: 0, b: 0, a: 1 }), t.a = cn(t.a)), t;
}
function iB(e) {
  return e.charAt(0) === "r" ? tB(e) : K5(e);
}
class Za {
  constructor(t) {
    if (t instanceof Za)
      return t;
    const r = typeof t;
    let n;
    r === "object" ? n = rp(t) : r === "string" && (n = j5(t) || Q5(t) || iB(t)), this._rgb = n, this._valid = !!n;
  }
  get valid() {
    return this._valid;
  }
  get rgb() {
    var t = iy(this._rgb);
    return t && (t.a = Er(t.a)), t;
  }
  set rgb(t) {
    this._rgb = rp(t);
  }
  rgbString() {
    return this._valid ? rB(this._rgb) : void 0;
  }
  hexString() {
    return this._valid ? H5(this._rgb) : void 0;
  }
  hslString() {
    return this._valid ? X5(this._rgb) : void 0;
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
    return t && (this._rgb = nB(this._rgb, t._rgb, r)), this;
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
    return Z5(this._rgb, t), this;
  }
}
/*!
 * Chart.js v4.4.1
 * https://www.chartjs.org
 * (c) 2023 Chart.js Contributors
 * Released under the MIT License
 */
const aB = /* @__PURE__ */ (() => {
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
const sB = (e, t) => typeof e == "string" && e.endsWith("%") ? parseFloat(e) / 100 * t : +e;
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
function np(e, t) {
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
function ay(e) {
  return [
    "__proto__",
    "prototype",
    "constructor"
  ].indexOf(e) === -1;
}
function oB(e, t, r, n) {
  if (!ay(e))
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
  const a = r.merger || oB;
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
function Pa(e, t) {
  return Xa(e, t, {
    merger: lB
  });
}
function lB(e, t, r) {
  if (!ay(e))
    return;
  const n = t[e], i = r[e];
  Ee(n) && Ee(i) ? Pa(n, i) : Object.prototype.hasOwnProperty.call(t, e) || (t[e] = qo(i));
}
const ip = {
  // Chart.helpers.core resolveObjectKey should resolve empty key to root object
  "": (e) => e,
  // default resolvers
  x: (e) => e.x,
  y: (e) => e.y
};
function cB(e) {
  const t = e.split("."), r = [];
  let n = "";
  for (const i of t)
    n += i, n.endsWith("\\") ? n = n.slice(0, -1) + "." : (r.push(n), n = "");
  return r;
}
function uB(e) {
  const t = cB(e);
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
  return (ip[t] || (ip[t] = uB(t)))(e);
}
function M0(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
const Ko = (e) => typeof e < "u", dn = (e) => typeof e == "function", ap = (e, t) => {
  if (e.size !== t.size)
    return !1;
  for (const r of e)
    if (!t.has(r))
      return !1;
  return !0;
};
function fB(e) {
  return e.type === "mouseup" || e.type === "click" || e.type === "contextmenu";
}
const tr = Math.PI, un = 2 * tr, Zo = Number.POSITIVE_INFINITY, Or = tr / 2, sn = Math.log10, Xo = Math.sign;
function oo(e, t, r) {
  return Math.abs(e - t) < r;
}
function sp(e) {
  const t = Math.round(e);
  e = oo(e, t, e / 1e3) ? t : e;
  const r = Math.pow(10, Math.floor(sn(e))), n = e / r;
  return (n <= 1 ? 1 : n <= 2 ? 2 : n <= 5 ? 5 : 10) * r;
}
function dB(e) {
  const t = [], r = Math.sqrt(e);
  let n;
  for (n = 1; n < r; n++)
    e % n === 0 && (t.push(n), t.push(e / n));
  return r === (r | 0) && t.push(r), t.sort((i, a) => i - a).pop(), t;
}
function Jo(e) {
  return !isNaN(parseFloat(e)) && isFinite(e);
}
function hB(e, t) {
  const r = Math.round(e);
  return r - t <= e && r + t >= e;
}
function sy(e, t, r) {
  let n, i, a;
  for (n = 0, i = e.length; n < i; n++)
    a = e[n][r], isNaN(a) || (t.min = Math.min(t.min, a), t.max = Math.max(t.max, a));
}
function on(e) {
  return e * (tr / 180);
}
function P0(e) {
  return e * (180 / tr);
}
function op(e) {
  if (!it(e))
    return;
  let t = 1, r = 0;
  for (; Math.round(e * t) / t !== e; )
    t *= 10, r++;
  return r;
}
function pB(e, t) {
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
function vB(e, t, r, n) {
  const i = ur(e), a = ur(t), s = ur(r), o = ur(a - i), l = ur(s - i), c = ur(i - a), u = ur(i - s);
  return i === a || i === s || n && a === s || o > l && c < u;
}
function Tn(e, t, r) {
  return Math.max(t, Math.min(r, e));
}
function gB(e) {
  return Tn(e, -32768, 32767);
}
function B0(e, t, r) {
  r = r || ((s) => e[s] < t);
  let n = e.length - 1, i = 0, a;
  for (; n - i > 1; )
    a = i + n >> 1, r(a) ? i = a : n = a;
  return {
    lo: i,
    hi: n
  };
}
const Ju = (e, t, r, n) => B0(e, r, n ? (i) => {
  const a = e[i][t];
  return a < r || a === r && e[i + 1][t] === r;
} : (i) => e[i][t] < r), mB = (e, t, r) => B0(e, r, (n) => e[n][t] >= r);
function xB(e, t, r) {
  let n = 0, i = e.length;
  for (; n < i && e[n] < t; )
    n++;
  for (; i > n && e[i - 1] > r; )
    i--;
  return n > 0 || i < e.length ? e.slice(n, i) : e;
}
const oy = [
  "push",
  "pop",
  "shift",
  "splice",
  "unshift"
];
function yB(e, t) {
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
  }), oy.forEach((r) => {
    const n = "_onData" + M0(r), i = e[r];
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
function lp(e, t) {
  const r = e._chartjs;
  if (!r)
    return;
  const n = r.listeners, i = n.indexOf(t);
  i !== -1 && n.splice(i, 1), !(n.length > 0) && (oy.forEach((a) => {
    delete e[a];
  }), delete e._chartjs);
}
function bB(e) {
  const t = new Set(e);
  return t.size === e.length ? e : Array.from(t);
}
const ly = function() {
  return typeof window > "u" ? function(e) {
    return e();
  } : window.requestAnimationFrame;
}();
function cy(e, t) {
  let r = [], n = !1;
  return function(...i) {
    r = i, n || (n = !0, ly.call(window, () => {
      n = !1, e.apply(t, r);
    }));
  };
}
function _B(e, t) {
  let r;
  return function(...n) {
    return t ? (clearTimeout(r), r = setTimeout(e, t, n)) : e.apply(this, n), t;
  };
}
const wB = (e) => e === "start" ? "left" : e === "end" ? "right" : "center", cp = (e, t, r) => e === "start" ? t : e === "end" ? r : (t + r) / 2, Ps = (e) => e === 0 || e === 1, up = (e, t, r) => -(Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * un / r)), fp = (e, t, r) => Math.pow(2, -10 * e) * Math.sin((e - t) * un / r) + 1, Ba = {
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
  easeInElastic: (e) => Ps(e) ? e : up(e, 0.075, 0.3),
  easeOutElastic: (e) => Ps(e) ? e : fp(e, 0.075, 0.3),
  easeInOutElastic(e) {
    return Ps(e) ? e : e < 0.5 ? 0.5 * up(e * 2, 0.1125, 0.45) : 0.5 + 0.5 * fp(e * 2 - 1, 0.1125, 0.45);
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
  easeInBounce: (e) => 1 - Ba.easeOutBounce(1 - e),
  easeOutBounce(e) {
    return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375 : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
  },
  easeInOutBounce: (e) => e < 0.5 ? Ba.easeInBounce(e * 2) * 0.5 : Ba.easeOutBounce(e * 2 - 1) * 0.5 + 0.5
};
function uy(e) {
  if (e && typeof e == "object") {
    const t = e.toString();
    return t === "[object CanvasPattern]" || t === "[object CanvasGradient]";
  }
  return !1;
}
function dp(e) {
  return uy(e) ? e : new Za(e);
}
function vc(e) {
  return uy(e) ? e : new Za(e).saturate(0.5).darken(0.1).hexString();
}
const $B = [
  "x",
  "y",
  "borderWidth",
  "radius",
  "tension"
], DB = [
  "color",
  "borderColor",
  "backgroundColor"
];
function EB(e) {
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
      properties: DB
    },
    numbers: {
      type: "number",
      properties: $B
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
function AB(e) {
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
const hp = /* @__PURE__ */ new Map();
function CB(e, t) {
  t = t || {};
  const r = e + JSON.stringify(t);
  let n = hp.get(r);
  return n || (n = new Intl.NumberFormat(e, t), hp.set(r, n)), n;
}
function I0(e, t, r) {
  return CB(t, r).format(e);
}
const fy = {
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
      (c < 1e-4 || c > 1e15) && (i = "scientific"), a = SB(e, r);
    }
    const s = sn(Math.abs(a)), o = isNaN(s) ? 1 : Math.max(Math.min(-1 * Math.floor(s), 20), 0), l = {
      notation: i,
      minimumFractionDigits: o,
      maximumFractionDigits: o
    };
    return Object.assign(l, this.options.ticks.format), I0(e, n, l);
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
    ].includes(n) || t > 0.8 * r.length ? fy.numeric.call(this, e, t, r) : "";
  }
};
function SB(e, t) {
  let r = t.length > 3 ? t[2].value - t[1].value : t[1].value - t[0].value;
  return Math.abs(r) >= 1 && e !== Math.floor(e) && (r = e - Math.floor(e)), r;
}
var Rl = {
  formatters: fy
};
function kB(e) {
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
      callback: Rl.formatters.values,
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
const jn = /* @__PURE__ */ Object.create(null), Qu = /* @__PURE__ */ Object.create(null);
function Ia(e, t) {
  if (!t)
    return e;
  const r = t.split(".");
  for (let n = 0, i = r.length; n < i; ++n) {
    const a = r[n];
    e = e[a] || (e[a] = /* @__PURE__ */ Object.create(null));
  }
  return e;
}
function gc(e, t, r) {
  return typeof t == "string" ? Xa(Ia(e, t), r) : Xa(Ia(e, ""), t);
}
class OB {
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
    }, this.hover = {}, this.hoverBackgroundColor = (n, i) => vc(i.backgroundColor), this.hoverBorderColor = (n, i) => vc(i.borderColor), this.hoverColor = (n, i) => vc(i.color), this.indexAxis = "x", this.interaction = {
      mode: "nearest",
      intersect: !0,
      includeInvisible: !1
    }, this.maintainAspectRatio = !0, this.onHover = null, this.onClick = null, this.parsing = !0, this.plugins = {}, this.responsive = !0, this.scale = void 0, this.scales = {}, this.showLine = !0, this.drawActiveElementsOnTop = !0, this.describe(t), this.apply(r);
  }
  set(t, r) {
    return gc(this, t, r);
  }
  get(t) {
    return Ia(this, t);
  }
  describe(t, r) {
    return gc(Qu, t, r);
  }
  override(t, r) {
    return gc(jn, t, r);
  }
  route(t, r, n, i) {
    const a = Ia(this, t), s = Ia(this, n), o = "_" + r;
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
var Ze = /* @__PURE__ */ new OB({
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
  EB,
  AB,
  kB
]);
function TB(e) {
  return !e || Ye(e.size) || Ye(e.family) ? null : (e.style ? e.style + " " : "") + (e.weight ? e.weight + " " : "") + e.size + "px " + e.family;
}
function Qo(e, t, r, n, i) {
  let a = t[i];
  return a || (a = t[i] = e.measureText(i).width, r.push(i)), a > n && (n = a), n;
}
function MB(e, t, r, n) {
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
function pp(e, t) {
  t = t || e.getContext("2d"), t.save(), t.resetTransform(), t.clearRect(0, 0, e.width, e.height), t.restore();
}
function gi(e, t, r) {
  return r = r || 0.5, !t || e && e.x > t.left - r && e.x < t.right + r && e.y > t.top - r && e.y < t.bottom + r;
}
function dy(e, t) {
  e.save(), e.beginPath(), e.rect(t.left, t.top, t.right - t.left, t.bottom - t.top), e.clip();
}
function hy(e) {
  e.restore();
}
function PB(e, t) {
  t.translation && e.translate(t.translation[0], t.translation[1]), Ye(t.rotation) || e.rotate(t.rotation), t.color && (e.fillStyle = t.color), t.textAlign && (e.textAlign = t.textAlign), t.textBaseline && (e.textBaseline = t.textBaseline);
}
function BB(e, t, r, n, i) {
  if (i.strikethrough || i.underline) {
    const a = e.measureText(n), s = t - a.actualBoundingBoxLeft, o = t + a.actualBoundingBoxRight, l = r - a.actualBoundingBoxAscent, c = r + a.actualBoundingBoxDescent, u = i.strikethrough ? (l + c) / 2 : c;
    e.strokeStyle = e.fillStyle, e.beginPath(), e.lineWidth = i.decorationWidth || 2, e.moveTo(s, u), e.lineTo(o, u), e.stroke();
  }
}
function IB(e, t) {
  const r = e.fillStyle;
  e.fillStyle = t.color, e.fillRect(t.left, t.top, t.width, t.height), e.fillStyle = r;
}
function el(e, t, r, n, i, a = {}) {
  const s = Ge(t) ? t : [
    t
  ], o = a.strokeWidth > 0 && a.strokeColor !== "";
  let l, c;
  for (e.save(), e.font = i.string, PB(e, a), l = 0; l < s.length; ++l)
    c = s[l], a.backdrop && IB(e, a.backdrop), o && (a.strokeColor && (e.strokeStyle = a.strokeColor), Ye(a.strokeWidth) || (e.lineWidth = a.strokeWidth), e.strokeText(c, r, n, a.maxWidth)), e.fillText(c, r, n, a.maxWidth), BB(e, r, n, c, a), n += Number(i.lineHeight);
  e.restore();
}
function RB(e, t) {
  const { x: r, y: n, w: i, h: a, radius: s } = t;
  e.arc(r + s.topLeft, n + s.topLeft, s.topLeft, 1.5 * tr, tr, !0), e.lineTo(r, n + a - s.bottomLeft), e.arc(r + s.bottomLeft, n + a - s.bottomLeft, s.bottomLeft, tr, Or, !0), e.lineTo(r + i - s.bottomRight, n + a), e.arc(r + i - s.bottomRight, n + a - s.bottomRight, s.bottomRight, Or, 0, !0), e.lineTo(r + i, n + s.topRight), e.arc(r + i - s.topRight, n + s.topRight, s.topRight, 0, -Or, !0), e.lineTo(r + s.topLeft, n);
}
const NB = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/, LB = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
function jB(e, t) {
  const r = ("" + e).match(NB);
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
const zB = (e) => +e || 0;
function py(e, t) {
  const r = {}, n = Ee(t), i = n ? Object.keys(t) : t, a = Ee(e) ? n ? (s) => Ke(e[s], e[t[s]]) : (s) => e[s] : () => e;
  for (const s of i)
    r[s] = zB(a(s));
  return r;
}
function HB(e) {
  return py(e, {
    top: "y",
    right: "x",
    bottom: "y",
    left: "x"
  });
}
function VB(e) {
  return py(e, [
    "topLeft",
    "topRight",
    "bottomLeft",
    "bottomRight"
  ]);
}
function Rr(e) {
  const t = HB(e);
  return t.width = t.left + t.right, t.height = t.top + t.bottom, t;
}
function Fi(e, t) {
  e = e || {}, t = t || Ze.font;
  let r = Ke(e.size, t.size);
  typeof r == "string" && (r = parseInt(r, 10));
  let n = Ke(e.style, t.style);
  n && !("" + n).match(LB) && (console.warn('Invalid font style specified: "' + n + '"'), n = void 0);
  const i = {
    family: Ke(e.family, t.family),
    lineHeight: jB(Ke(e.lineHeight, t.lineHeight), r),
    size: r,
    style: n,
    weight: Ke(e.weight, t.weight),
    string: ""
  };
  return i.string = TB(i), i;
}
function Bs(e, t, r, n) {
  let i = !0, a, s, o;
  for (a = 0, s = e.length; a < s; ++a)
    if (o = e[a], o !== void 0 && (t !== void 0 && typeof o == "function" && (o = o(t), i = !1), r !== void 0 && Ge(o) && (o = o[r % o.length], i = !1), o !== void 0))
      return n && !i && (n.cacheable = !1), o;
}
function YB(e, t, r) {
  const { min: n, max: i } = e, a = sB(t, (i - n) / 2), s = (o, l) => r && o === 0 ? 0 : o + l;
  return {
    min: s(n, -Math.abs(a)),
    max: s(i, a)
  };
}
function Xi(e, t) {
  return Object.assign(Object.create(e), t);
}
function R0(e, t = [
  ""
], r, n, i = () => e[0]) {
  const a = r || e;
  typeof n > "u" && (n = xy("_fallback", e));
  const s = {
    [Symbol.toStringTag]: "Object",
    _cacheable: !0,
    _scopes: e,
    _rootScopes: a,
    _fallback: n,
    _getTarget: i,
    override: (o) => R0([
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
      return gy(o, l, () => JB(l, t, e, o));
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
      return gp(o).includes(l);
    },
    /**
    * A trap for Object.getOwnPropertyNames and Object.getOwnPropertySymbols.
    */
    ownKeys(o) {
      return gp(o);
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
    _descriptors: vy(e, n),
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
      return gy(a, s, () => UB(a, s, o));
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
function vy(e, t = {
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
const WB = (e, t) => e ? e + M0(t) : t, N0 = (e, t) => Ee(t) && e !== "adapters" && (Object.getPrototypeOf(t) === null || t.constructor === Object);
function gy(e, t, r) {
  if (Object.prototype.hasOwnProperty.call(e, t))
    return e[t];
  const n = r();
  return e[t] = n, n;
}
function UB(e, t, r) {
  const { _proxy: n, _context: i, _subProxy: a, _descriptors: s } = e;
  let o = n[t];
  return dn(o) && s.isScriptable(t) && (o = qB(t, o, e, r)), Ge(o) && o.length && (o = GB(t, o, e, s.isIndexable)), N0(t, o) && (o = Ti(o, i, a && a[t], s)), o;
}
function qB(e, t, r, n) {
  const { _proxy: i, _context: a, _subProxy: s, _stack: o } = r;
  if (o.has(e))
    throw new Error("Recursion detected: " + Array.from(o).join("->") + "->" + e);
  o.add(e);
  let l = t(a, s || n);
  return o.delete(e), N0(e, l) && (l = L0(i._scopes, i, e, l)), l;
}
function GB(e, t, r, n) {
  const { _proxy: i, _context: a, _subProxy: s, _descriptors: o } = r;
  if (typeof a.index < "u" && n(e))
    return t[a.index % t.length];
  if (Ee(t[0])) {
    const l = t, c = i._scopes.filter((u) => u !== l);
    t = [];
    for (const u of l) {
      const f = L0(c, i, e, u);
      t.push(Ti(f, a, s && s[e], o));
    }
  }
  return t;
}
function my(e, t, r) {
  return dn(e) ? e(t, r) : e;
}
const KB = (e, t) => e === !0 ? t : typeof e == "string" ? Go(t, e) : void 0;
function ZB(e, t, r, n, i) {
  for (const a of t) {
    const s = KB(r, a);
    if (s) {
      e.add(s);
      const o = my(s._fallback, r, i);
      if (typeof o < "u" && o !== r && o !== n)
        return o;
    } else if (s === !1 && typeof n < "u" && r !== n)
      return null;
  }
  return !1;
}
function L0(e, t, r, n) {
  const i = t._rootScopes, a = my(t._fallback, r, n), s = [
    ...e,
    ...i
  ], o = /* @__PURE__ */ new Set();
  o.add(n);
  let l = vp(o, s, r, a || r, n);
  return l === null || typeof a < "u" && a !== r && (l = vp(o, s, a, l, n), l === null) ? !1 : R0(Array.from(o), [
    ""
  ], i, a, () => XB(t, r, n));
}
function vp(e, t, r, n, i) {
  for (; r; )
    r = ZB(e, t, r, n, i);
  return r;
}
function XB(e, t, r) {
  const n = e._getTarget();
  t in n || (n[t] = {});
  const i = n[t];
  return Ge(i) && Ee(r) ? r : i || {};
}
function JB(e, t, r, n) {
  let i;
  for (const a of t)
    if (i = xy(WB(a, e), r), typeof i < "u")
      return N0(e, i) ? L0(r, n, e, i) : i;
}
function xy(e, t) {
  for (const r of t) {
    if (!r)
      continue;
    const n = r[e];
    if (typeof n < "u")
      return n;
  }
}
function gp(e) {
  let t = e._keys;
  return t || (t = e._keys = QB(e._scopes)), t;
}
function QB(e) {
  const t = /* @__PURE__ */ new Set();
  for (const r of e)
    for (const n of Object.keys(r).filter((i) => !i.startsWith("_")))
      t.add(n);
  return Array.from(t);
}
function j0() {
  return typeof window < "u" && typeof document < "u";
}
function z0(e) {
  let t = e.parentNode;
  return t && t.toString() === "[object ShadowRoot]" && (t = t.host), t;
}
function tl(e, t, r) {
  let n;
  return typeof e == "string" ? (n = parseInt(e, 10), e.indexOf("%") !== -1 && (n = n / 100 * t.parentNode[r])) : n = e, n;
}
const Nl = (e) => e.ownerDocument.defaultView.getComputedStyle(e, null);
function eI(e, t) {
  return Nl(e).getPropertyValue(t);
}
const tI = [
  "top",
  "right",
  "bottom",
  "left"
];
function Pn(e, t, r) {
  const n = {};
  r = r ? "-" + r : "";
  for (let i = 0; i < 4; i++) {
    const a = tI[i];
    n[a] = parseFloat(e[t + "-" + a + r]) || 0;
  }
  return n.width = n.left + n.right, n.height = n.top + n.bottom, n;
}
const rI = (e, t, r) => (e > 0 || t > 0) && (!r || !r.shadowRoot);
function nI(e, t) {
  const r = e.touches, n = r && r.length ? r[0] : e, { offsetX: i, offsetY: a } = n;
  let s = !1, o, l;
  if (rI(i, a, e.target))
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
  const { canvas: r, currentDevicePixelRatio: n } = t, i = Nl(r), a = i.boxSizing === "border-box", s = Pn(i, "padding"), o = Pn(i, "border", "width"), { x: l, y: c, box: u } = nI(e, r), f = s.left + (u && o.left), d = s.top + (u && o.top);
  let { width: h, height: p } = t;
  return a && (h -= s.width + o.width, p -= s.height + o.height), {
    x: Math.round((l - f) / h * r.width / n),
    y: Math.round((c - d) / p * r.height / n)
  };
}
function iI(e, t, r) {
  let n, i;
  if (t === void 0 || r === void 0) {
    const a = z0(e);
    if (!a)
      t = e.clientWidth, r = e.clientHeight;
    else {
      const s = a.getBoundingClientRect(), o = Nl(a), l = Pn(o, "border", "width"), c = Pn(o, "padding");
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
function aI(e, t, r, n) {
  const i = Nl(e), a = Pn(i, "margin"), s = tl(i.maxWidth, e, "clientWidth") || Zo, o = tl(i.maxHeight, e, "clientHeight") || Zo, l = iI(e, t, r);
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
function mp(e, t, r) {
  const n = t || 1, i = Math.floor(e.height * n), a = Math.floor(e.width * n);
  e.height = Math.floor(e.height), e.width = Math.floor(e.width);
  const s = e.canvas;
  return s.style && (r || !s.style.height && !s.style.width) && (s.style.height = `${e.height}px`, s.style.width = `${e.width}px`), e.currentDevicePixelRatio !== n || s.height !== i || s.width !== a ? (e.currentDevicePixelRatio = n, s.height = i, s.width = a, e.ctx.setTransform(n, 0, 0, n, 0, 0), !0) : !1;
}
const sI = function() {
  let e = !1;
  try {
    const t = {
      get passive() {
        return e = !0, !1;
      }
    };
    j0() && (window.addEventListener("test", null, t), window.removeEventListener("test", null, t));
  } catch {
  }
  return e;
}();
function xp(e, t) {
  const r = eI(e, t), n = r && r.match(/^(\d+)(\.\d+)?px$/);
  return n ? +n[1] : void 0;
}
/*!
 * Chart.js v4.4.1
 * https://www.chartjs.org
 * (c) 2023 Chart.js Contributors
 * Released under the MIT License
 */
class oI {
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
    this._request || (this._running = !0, this._request = ly.call(window, () => {
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
var Dr = /* @__PURE__ */ new oI();
const yp = "transparent", lI = {
  boolean(e, t, r) {
    return r > 0.5 ? t : e;
  },
  color(e, t, r) {
    const n = dp(e || yp), i = n.valid && dp(t || yp);
    return i && i.valid ? i.mix(n, r).hexString() : t;
  },
  number(e, t, r) {
    return e + (t - e) * r;
  }
};
class cI {
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
    this._active = !0, this._fn = t.fn || lI[t.type || typeof s], this._easing = Ba[t.easing] || Ba.linear, this._start = Math.floor(Date.now() + (t.delay || 0)), this._duration = this._total = Math.floor(t.duration), this._loop = !!t.loop, this._target = r, this._prop = n, this._from = s, this._to = i, this._promises = void 0;
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
class uI {
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
    const n = r.options, i = dI(t, n);
    if (!i)
      return [];
    const a = this._createAnimations(i, n);
    return n.$shared && fI(t.options.$animations, n).then(() => {
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
      a[c] = f = new cI(d, t, c, u), i.push(f);
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
function fI(e, t) {
  const r = [], n = Object.keys(t);
  for (let i = 0; i < n.length; i++) {
    const a = e[n[i]];
    a && a.active() && r.push(a.wait());
  }
  return Promise.all(r);
}
function dI(e, t) {
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
function bp(e, t) {
  const r = e && e.options || {}, n = r.reverse, i = r.min === void 0 ? t : 0, a = r.max === void 0 ? t : 0;
  return {
    start: n ? a : i,
    end: n ? i : a
  };
}
function hI(e, t, r) {
  if (r === !1)
    return !1;
  const n = bp(e, r), i = bp(t, r);
  return {
    top: i.end,
    right: n.end,
    bottom: i.start,
    left: n.start
  };
}
function pI(e) {
  let t, r, n, i;
  return Ee(e) ? (t = e.top, r = e.right, n = e.bottom, i = e.left) : t = r = n = i = e, {
    top: t,
    right: r,
    bottom: n,
    left: i,
    disabled: e === !1
  };
}
function yy(e, t) {
  const r = [], n = e._getSortedDatasetMetas(t);
  let i, a;
  for (i = 0, a = n.length; i < a; ++i)
    r.push(n[i].index);
  return r;
}
function _p(e, t, r, n = {}) {
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
function vI(e) {
  const t = Object.keys(e), r = new Array(t.length);
  let n, i, a;
  for (n = 0, i = t.length; n < i; ++n)
    a = t[n], r[n] = {
      x: a,
      y: e[a]
    };
  return r;
}
function wp(e, t) {
  const r = e && e.options.stacked;
  return r || r === void 0 && t.stack !== void 0;
}
function gI(e, t, r) {
  return `${e.id}.${t.id}.${r.stack || r.type}`;
}
function mI(e) {
  const { min: t, max: r, minDefined: n, maxDefined: i } = e.getUserBounds();
  return {
    min: n ? t : Number.NEGATIVE_INFINITY,
    max: i ? r : Number.POSITIVE_INFINITY
  };
}
function xI(e, t, r) {
  const n = e[t] || (e[t] = {});
  return n[r] || (n[r] = {});
}
function $p(e, t, r, n) {
  for (const i of t.getMatchingVisibleMetas(n).reverse()) {
    const a = e[i.index];
    if (r && a > 0 || !r && a < 0)
      return i.index;
  }
  return null;
}
function Dp(e, t) {
  const { chart: r, _cachedMeta: n } = e, i = r._stacks || (r._stacks = {}), { iScale: a, vScale: s, index: o } = n, l = a.axis, c = s.axis, u = gI(a, s, n), f = t.length;
  let d;
  for (let h = 0; h < f; ++h) {
    const p = t[h], { [l]: v, [c]: g } = p, m = p._stacks || (p._stacks = {});
    d = m[c] = xI(i, u, v), d[o] = g, d._top = $p(d, s, !0, n.type), d._bottom = $p(d, s, !1, n.type);
    const y = d._visualValues || (d._visualValues = {});
    y[o] = g;
  }
}
function mc(e, t) {
  const r = e.scales;
  return Object.keys(r).filter((n) => r[n].axis === t).shift();
}
function yI(e, t) {
  return Xi(e, {
    active: !1,
    dataset: void 0,
    datasetIndex: t,
    index: t,
    mode: "default",
    type: "dataset"
  });
}
function bI(e, t, r) {
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
const xc = (e) => e === "reset" || e === "none", Ep = (e, t) => t ? e : Object.assign({}, e), _I = (e, t, r) => e && !t.hidden && t._stacked && {
  keys: yy(r, !0),
  values: null
};
class lo {
  constructor(t, r) {
    this.chart = t, this._ctx = t.ctx, this.index = r, this._cachedDataOpts = {}, this._cachedMeta = this.getMeta(), this._type = this._cachedMeta.type, this.options = void 0, this._parsing = !1, this._data = void 0, this._objectData = void 0, this._sharedOptions = void 0, this._drawStart = void 0, this._drawCount = void 0, this.enableOptionSharing = !1, this.supportsDecimation = !1, this.$context = void 0, this._syncList = [], this.datasetElementType = new.target.datasetElementType, this.dataElementType = new.target.dataElementType, this.initialize();
  }
  initialize() {
    const t = this._cachedMeta;
    this.configure(), this.linkScales(), t._stacked = wp(t.vScale, t), this.addElements(), this.options.fill && !this.chart.isPluginEnabled("filler") && console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options");
  }
  updateIndex(t) {
    this.index !== t && va(this._cachedMeta), this.index = t;
  }
  linkScales() {
    const t = this.chart, r = this._cachedMeta, n = this.getDataset(), i = (f, d, h, p) => f === "x" ? d : f === "r" ? p : h, a = r.xAxisID = Ke(n.xAxisID, mc(t, "x")), s = r.yAxisID = Ke(n.yAxisID, mc(t, "y")), o = r.rAxisID = Ke(n.rAxisID, mc(t, "r")), l = r.indexAxis, c = r.iAxisID = i(l, a, s, o), u = r.vAxisID = i(l, s, a, o);
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
    this._data && lp(this._data, this), t._stacked && va(t);
  }
  _dataCheck() {
    const t = this.getDataset(), r = t.data || (t.data = []), n = this._data;
    if (Ee(r))
      this._data = vI(r);
    else if (n !== r) {
      if (n) {
        lp(n, this);
        const i = this._cachedMeta;
        va(i), i._parsed = [];
      }
      r && Object.isExtensible(r) && yB(r, this), this._syncList = [], this._data = r;
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
    r._stacked = wp(r.vScale, r), r.stack !== n.stack && (i = !0, va(r), r.stack = n.stack), this._resyncElements(t), (i || a !== r._stacked) && Dp(this, r._parsed);
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
    s && Dp(this, d);
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
      keys: yy(i, !0),
      values: r._stacks[t.axis]._visualValues
    };
    return _p(o, s, a.index, {
      mode: n
    });
  }
  updateRangeFromParsed(t, r, n, i) {
    const a = n[r.axis];
    let s = a === null ? NaN : a;
    const o = i && n._stacks[r.axis];
    i && o && (i.values = o, s = _p(i, a, this._cachedMeta.index)), t.min = Math.min(t.min, s), t.max = Math.max(t.max, s);
  }
  getMinMax(t, r) {
    const n = this._cachedMeta, i = n._parsed, a = n._sorted && t === n.iScale, s = i.length, o = this._getOtherScale(t), l = _I(r, n, this.chart), c = {
      min: Number.POSITIVE_INFINITY,
      max: Number.NEGATIVE_INFINITY
    }, { min: u, max: f } = mI(o);
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
    this.update(t || "default"), r._clip = pI(Ke(this.options.clip, hI(r.xScale, r.yScale, this.getMaxOverflow())));
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
      a = s.$context || (s.$context = bI(this.getContext(), t, s)), a.parsed = this.getParsed(t), a.raw = i.data[t], a.index = a.dataIndex = t;
    } else
      a = this.$context || (this.$context = yI(this.chart.getContext(), this.index)), a.dataset = i, a.index = a.datasetIndex = this.index;
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
      return Ep(o, l);
    const c = this.chart.config, u = c.datasetElementScopeKeys(this._type, t), f = i ? [
      `${t}Hover`,
      "hover",
      t,
      ""
    ] : [
      t,
      ""
    ], d = c.getOptionScopes(this.getDataset(), u), h = Object.keys(Ze.elements[t]), p = () => this.getContext(n, i, r), v = c.resolveNamedOptions(d, h, p, f);
    return v.$shared && (v.$shared = l, a[s] = Object.freeze(Ep(v, l))), v;
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
    const c = new uI(i, l && l.animations);
    return l && l._cacheable && (a[s] = Object.freeze(c)), c;
  }
  getSharedOptions(t) {
    if (t.$shared)
      return this._sharedOptions || (this._sharedOptions = Object.assign({}, t));
  }
  includeOptions(t, r) {
    return !r || xc(t) || this.chart._animationsDisabled;
  }
  _getSharedOptions(t, r) {
    const n = this.resolveDataElementOptions(t, r), i = this._sharedOptions, a = this.getSharedOptions(n), s = this.includeOptions(r, a) || a !== i;
    return this.updateSharedOptions(a, r, n), {
      sharedOptions: a,
      includeOptions: s
    };
  }
  updateElement(t, r, n, i) {
    xc(i) ? Object.assign(t, n) : this._resolveAnimations(r, i).update(t, n);
  }
  updateSharedOptions(t, r, n) {
    t && !xc(r) && this._resolveAnimations(void 0, r).update(t, n);
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
G(lo, "defaults", {}), G(lo, "datasetElementType", null), G(lo, "dataElementType", null);
function $n() {
  throw new Error("This method is not implemented: Check that a complete date adapter is provided.");
}
class H0 {
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
    Object.assign(H0.prototype, t);
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
var wI = {
  _date: H0
};
function $I(e, t, r, n) {
  const { controller: i, data: a, _sorted: s } = e, o = i._cachedMeta.iScale;
  if (o && t === o.axis && t !== "r" && s && a.length) {
    const l = o._reversePixels ? mB : Ju;
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
    const { index: c, data: u } = a[o], { lo: f, hi: d } = $I(a[o], t, s, i);
    for (let h = f; h <= d; ++h) {
      const p = u[h];
      p.skip || n(p, c, h);
    }
  }
}
function DI(e) {
  const t = e.indexOf("x") !== -1, r = e.indexOf("y") !== -1;
  return function(n, i) {
    const a = t ? Math.abs(n.x - i.x) : 0, s = r ? Math.abs(n.y - i.y) : 0;
    return Math.sqrt(Math.pow(a, 2) + Math.pow(s, 2));
  };
}
function yc(e, t, r, n, i) {
  const a = [];
  return !i && !e.isPointInArea(t) || vs(e, r, t, function(o, l, c) {
    !i && !gi(o, e.chartArea, 0) || o.inRange(t.x, t.y, n) && a.push({
      element: o,
      datasetIndex: l,
      index: c
    });
  }, !0), a;
}
function EI(e, t, r, n) {
  let i = [];
  function a(s, o, l) {
    const { startAngle: c, endAngle: u } = s.getProps([
      "startAngle",
      "endAngle"
    ], n), { angle: f } = pB(s, {
      x: t.x,
      y: t.y
    });
    vB(f, c, u) && i.push({
      element: s,
      datasetIndex: o,
      index: l
    });
  }
  return vs(e, r, t, a), i;
}
function AI(e, t, r, n, i, a) {
  let s = [];
  const o = DI(r);
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
function bc(e, t, r, n, i, a) {
  return !a && !e.isPointInArea(t) ? [] : r === "r" && !n ? EI(e, t, r, i) : AI(e, t, r, n, i, a);
}
function Ap(e, t, r, n, i) {
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
var CI = {
  evaluateInteractionItems: vs,
  modes: {
    index(e, t, r, n) {
      const i = An(t, e), a = r.axis || "x", s = r.includeInvisible || !1, o = r.intersect ? yc(e, i, a, n, s) : bc(e, i, a, !1, n, s), l = [];
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
      let o = r.intersect ? yc(e, i, a, n, s) : bc(e, i, a, !1, n, s);
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
      return yc(e, i, a, n, s);
    },
    nearest(e, t, r, n) {
      const i = An(t, e), a = r.axis || "xy", s = r.includeInvisible || !1;
      return bc(e, i, a, r.intersect, n, s);
    },
    x(e, t, r, n) {
      const i = An(t, e);
      return Ap(e, i, "x", r.intersect, n);
    },
    y(e, t, r, n) {
      const i = An(t, e);
      return Ap(e, i, "y", r.intersect, n);
    }
  }
};
const by = [
  "left",
  "top",
  "right",
  "bottom"
];
function ga(e, t) {
  return e.filter((r) => r.pos === t);
}
function Cp(e, t) {
  return e.filter((r) => by.indexOf(r.pos) === -1 && r.box.axis === t);
}
function ma(e, t) {
  return e.sort((r, n) => {
    const i = t ? n : r, a = t ? r : n;
    return i.weight === a.weight ? i.index - a.index : i.weight - a.weight;
  });
}
function SI(e) {
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
function kI(e) {
  const t = {};
  for (const r of e) {
    const { stack: n, pos: i, stackWeight: a } = r;
    if (!n || !by.includes(i))
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
function OI(e, t) {
  const r = kI(e), { vBoxMaxWidth: n, hBoxMaxHeight: i } = t;
  let a, s, o;
  for (a = 0, s = e.length; a < s; ++a) {
    o = e[a];
    const { fullSize: l } = o.box, c = r[o.stack], u = c && o.stackWeight / c.weight;
    o.horizontal ? (o.width = u ? u * n : l && t.availableWidth, o.height = i) : (o.width = n, o.height = u ? u * i : l && t.availableHeight);
  }
  return r;
}
function FI(e) {
  const t = SI(e), r = ma(t.filter((c) => c.box.fullSize), !0), n = ma(ga(t, "left"), !0), i = ma(ga(t, "right")), a = ma(ga(t, "top"), !0), s = ma(ga(t, "bottom")), o = Cp(t, "x"), l = Cp(t, "y");
  return {
    fullSize: r,
    leftAndTop: n.concat(a),
    rightAndBottom: i.concat(l).concat(s).concat(o),
    chartArea: ga(t, "chartArea"),
    vertical: n.concat(i).concat(l),
    horizontal: a.concat(s).concat(o)
  };
}
function Sp(e, t, r, n) {
  return Math.max(e[r], t[r]) + Math.max(e[n], t[n]);
}
function _y(e, t) {
  e.top = Math.max(e.top, t.top), e.left = Math.max(e.left, t.left), e.bottom = Math.max(e.bottom, t.bottom), e.right = Math.max(e.right, t.right);
}
function TI(e, t, r, n) {
  const { pos: i, box: a } = r, s = e.maxPadding;
  if (!Ee(i)) {
    r.size && (e[i] -= r.size);
    const f = n[r.stack] || {
      size: 0,
      count: 1
    };
    f.size = Math.max(f.size, r.horizontal ? a.height : a.width), r.size = f.size / f.count, e[i] += r.size;
  }
  a.getPadding && _y(s, a.getPadding());
  const o = Math.max(0, t.outerWidth - Sp(s, e, "left", "right")), l = Math.max(0, t.outerHeight - Sp(s, e, "top", "bottom")), c = o !== e.w, u = l !== e.h;
  return e.w = o, e.h = l, r.horizontal ? {
    same: c,
    other: u
  } : {
    same: u,
    other: c
  };
}
function MI(e) {
  const t = e.maxPadding;
  function r(n) {
    const i = Math.max(t[n] - e[n], 0);
    return e[n] += i, i;
  }
  e.y += r("top"), e.x += r("left"), r("right"), r("bottom");
}
function PI(e, t) {
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
function ka(e, t, r, n) {
  const i = [];
  let a, s, o, l, c, u;
  for (a = 0, s = e.length, c = 0; a < s; ++a) {
    o = e[a], l = o.box, l.update(o.width || t.w, o.height || t.h, PI(o.horizontal, t));
    const { same: f, other: d } = TI(t, r, o, n);
    c |= f && i.length, u = u || d, l.fullSize || i.push(o);
  }
  return c && ka(i, t, r, n) || u;
}
function Rs(e, t, r, n, i) {
  e.top = r, e.left = t, e.right = t + n, e.bottom = r + i, e.width = n, e.height = i;
}
function kp(e, t, r, n) {
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
    const i = Rr(e.options.layout.padding), a = Math.max(t - i.width, 0), s = Math.max(r - i.height, 0), o = FI(e.boxes), l = o.vertical, c = o.horizontal;
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
    _y(d, Rr(n));
    const h = Object.assign({
      maxPadding: d,
      w: a,
      h: s,
      x: i.left,
      y: i.top
    }, i), p = OI(l.concat(c), f);
    ka(o.fullSize, h, f, p), ka(l, h, f, p), ka(c, h, f, p) && ka(l, h, f, p), MI(h), kp(o.leftAndTop, h, f, p), h.x += h.w, h.y += h.h, kp(o.rightAndBottom, h, f, p), e.chartArea = {
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
class wy {
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
class BI extends wy {
  acquireContext(t) {
    return t && t.getContext && t.getContext("2d") || null;
  }
  updateConfig(t) {
    t.options.animation = !1;
  }
}
const co = "$chartjs", II = {
  touchstart: "mousedown",
  touchmove: "mousemove",
  touchend: "mouseup",
  pointerenter: "mouseenter",
  pointerdown: "mousedown",
  pointermove: "mousemove",
  pointerup: "mouseup",
  pointerleave: "mouseout",
  pointerout: "mouseout"
}, Op = (e) => e === null || e === "";
function RI(e, t) {
  const r = e.style, n = e.getAttribute("height"), i = e.getAttribute("width");
  if (e[co] = {
    initial: {
      height: n,
      width: i,
      style: {
        display: r.display,
        height: r.height,
        width: r.width
      }
    }
  }, r.display = r.display || "block", r.boxSizing = r.boxSizing || "border-box", Op(i)) {
    const a = xp(e, "width");
    a !== void 0 && (e.width = a);
  }
  if (Op(n))
    if (e.style.height === "")
      e.height = e.width / (t || 2);
    else {
      const a = xp(e, "height");
      a !== void 0 && (e.height = a);
    }
  return e;
}
const $y = sI ? {
  passive: !0
} : !1;
function NI(e, t, r) {
  e.addEventListener(t, r, $y);
}
function LI(e, t, r) {
  e.canvas.removeEventListener(t, r, $y);
}
function jI(e, t) {
  const r = II[e.type] || e.type, { x: n, y: i } = An(e, t);
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
function zI(e, t, r) {
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
function HI(e, t, r) {
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
let Fp = 0;
function Dy() {
  const e = window.devicePixelRatio;
  e !== Fp && (Fp = e, Ja.forEach((t, r) => {
    r.currentDevicePixelRatio !== e && t();
  }));
}
function VI(e, t) {
  Ja.size || window.addEventListener("resize", Dy), Ja.set(e, t);
}
function YI(e) {
  Ja.delete(e), Ja.size || window.removeEventListener("resize", Dy);
}
function WI(e, t, r) {
  const n = e.canvas, i = n && z0(n);
  if (!i)
    return;
  const a = cy((o, l) => {
    const c = i.clientWidth;
    r(o, l), c < i.clientWidth && r();
  }, window), s = new ResizeObserver((o) => {
    const l = o[0], c = l.contentRect.width, u = l.contentRect.height;
    c === 0 && u === 0 || a(c, u);
  });
  return s.observe(i), VI(e, a), s;
}
function _c(e, t, r) {
  r && r.disconnect(), t === "resize" && YI(e);
}
function UI(e, t, r) {
  const n = e.canvas, i = cy((a) => {
    e.ctx !== null && r(jI(a, e));
  }, e);
  return NI(n, t, i), i;
}
class qI extends wy {
  acquireContext(t, r) {
    const n = t && t.getContext && t.getContext("2d");
    return n && n.canvas === t ? (RI(t, r), n) : null;
  }
  releaseContext(t) {
    const r = t.canvas;
    if (!r[co])
      return !1;
    const n = r[co].initial;
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
    }), r.width = r.width, delete r[co], !0;
  }
  addEventListener(t, r, n) {
    this.removeEventListener(t, r);
    const i = t.$proxies || (t.$proxies = {}), s = {
      attach: zI,
      detach: HI,
      resize: WI
    }[r] || UI;
    i[r] = s(t, r, n);
  }
  removeEventListener(t, r) {
    const n = t.$proxies || (t.$proxies = {}), i = n[r];
    if (!i)
      return;
    ({
      attach: _c,
      detach: _c,
      resize: _c
    }[r] || LI)(t, r, i), n[r] = void 0;
  }
  getDevicePixelRatio() {
    return window.devicePixelRatio;
  }
  getMaximumSize(t, r, n, i) {
    return aI(t, r, n, i);
  }
  isAttached(t) {
    const r = z0(t);
    return !!(r && r.isConnected);
  }
}
function GI(e) {
  return !j0() || typeof OffscreenCanvas < "u" && e instanceof OffscreenCanvas ? BI : qI;
}
var eo;
let Ey = (eo = class {
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
function KI(e, t) {
  const r = e.options.ticks, n = ZI(e), i = Math.min(r.maxTicksLimit || n, n), a = r.major.enabled ? JI(t) : [], s = a.length, o = a[0], l = a[s - 1], c = [];
  if (s > i)
    return QI(t, c, a, s / i), c;
  const u = XI(a, t, i);
  if (s > 0) {
    let f, d;
    const h = s > 1 ? Math.round((l - o) / (s - 1)) : null;
    for (Ls(t, c, u, Ye(h) ? 0 : o - h, o), f = 0, d = s - 1; f < d; f++)
      Ls(t, c, u, a[f], a[f + 1]);
    return Ls(t, c, u, l, Ye(h) ? t.length : l + h), c;
  }
  return Ls(t, c, u), c;
}
function ZI(e) {
  const t = e.options.offset, r = e._tickSize(), n = e._length / r + (t ? 0 : 1), i = e._maxLength / r;
  return Math.floor(Math.min(n, i));
}
function XI(e, t, r) {
  const n = eR(e), i = t.length / r;
  if (!n)
    return Math.max(i, 1);
  const a = dB(n);
  for (let s = 0, o = a.length - 1; s < o; s++) {
    const l = a[s];
    if (l > i)
      return l;
  }
  return Math.max(i, 1);
}
function JI(e) {
  const t = [];
  let r, n;
  for (r = 0, n = e.length; r < n; r++)
    e[r].major && t.push(r);
  return t;
}
function QI(e, t, r, n) {
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
function eR(e) {
  const t = e.length;
  let r, n;
  if (t < 2)
    return !1;
  for (n = e[0], r = 1; r < t; ++r)
    if (e[r] - e[r - 1] !== n)
      return !1;
  return n;
}
const tR = (e) => e === "left" ? "right" : e === "right" ? "left" : e, Tp = (e, t, r) => t === "top" || t === "left" ? e[t] + r : e[t] - r, Mp = (e, t) => Math.min(t || e, e);
function Pp(e, t) {
  const r = [], n = e.length / t, i = e.length;
  let a = 0;
  for (; a < i; a += n)
    r.push(e[Math.floor(a)]);
  return r;
}
function rR(e, t, r) {
  const n = e.ticks.length, i = Math.min(t, n - 1), a = e._startPixel, s = e._endPixel, o = 1e-6;
  let l = e.getPixelForTick(i), c;
  if (!(r && (n === 1 ? c = Math.max(l - a, s - l) : t === 0 ? c = (e.getPixelForTick(1) - l) / 2 : c = (l - e.getPixelForTick(i - 1)) / 2, l += i < t ? c : -c, l < a - o || l > s + o)))
    return l;
}
function nR(e, t) {
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
function Bp(e, t) {
  if (!e.display)
    return 0;
  const r = Fi(e.font, t), n = Rr(e.padding);
  return (Ge(e.text) ? e.text.length : 1) * r.lineHeight + n.height;
}
function iR(e, t) {
  return Xi(e, {
    scale: t,
    type: "scale"
  });
}
function aR(e, t, r) {
  return Xi(e, {
    tick: r,
    index: t,
    type: "tick"
  });
}
function sR(e, t, r) {
  let n = wB(e);
  return (r && t !== "right" || !r && t === "right") && (n = tR(n)), n;
}
function oR(e, t, r, n) {
  const { top: i, left: a, bottom: s, right: o, chart: l } = e, { chartArea: c, scales: u } = l;
  let f = 0, d, h, p;
  const v = s - i, g = o - a;
  if (e.isHorizontal()) {
    if (h = cp(n, a, o), Ee(r)) {
      const m = Object.keys(r)[0], y = r[m];
      p = u[m].getPixelForValue(y) + v - t;
    } else
      r === "center" ? p = (c.bottom + c.top) / 2 + v - t : p = Tp(e, r, t);
    d = o - a;
  } else {
    if (Ee(r)) {
      const m = Object.keys(r)[0], y = r[m];
      h = u[m].getPixelForValue(y) - g + t;
    } else
      r === "center" ? h = (c.left + c.right) / 2 - g + t : h = Tp(e, r, t);
    p = cp(n, s, i), f = r === "left" ? -Or : Or;
  }
  return {
    titleX: h,
    titleY: p,
    maxWidth: d,
    rotation: f
  };
}
class Ji extends Ey {
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
    }, n), this.ticks = null, this._labelSizes = null, this._gridLineItems = null, this._labelItems = null, this.beforeSetDimensions(), this.setDimensions(), this.afterSetDimensions(), this._maxLength = this.isHorizontal() ? this.width + n.left + n.right : this.height + n.top + n.bottom, this._dataLimitsCached || (this.beforeDataLimits(), this.determineDataLimits(), this.afterDataLimits(), this._range = YB(this, a, i), this._dataLimitsCached = !0), this.beforeBuildTicks(), this.ticks = this.buildTicks() || [], this.afterBuildTicks();
    const l = o < this.ticks.length;
    this._convertTicksToLabels(l ? Pp(this.ticks, o) : this.ticks), this.configure(), this.beforeCalculateLabelRotation(), this.calculateLabelRotation(), this.afterCalculateLabelRotation(), s.display && (s.autoSkip || s.source === "auto") && (this.ticks = KI(this, this.ticks), this._labelSizes = null, this.afterAutoSkip()), l && this._convertTicksToLabels(this.ticks), this.beforeFit(), this.fit(), this.afterFit(), this.afterUpdate();
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
    const t = this.options, r = t.ticks, n = Mp(this.ticks.length, t.ticks.maxTicksLimit), i = r.minRotation || 0, a = r.maxRotation;
    let s = i, o, l, c;
    if (!this._isVisible() || !r.display || i >= a || n <= 1 || !this.isHorizontal()) {
      this.labelRotation = i;
      return;
    }
    const u = this._getLabelSizes(), f = u.widest.width, d = u.highest.height, h = Tn(this.chart.width - f, 0, this.maxWidth);
    o = t.offset ? this.maxWidth / n : h / (n - 1), f + 6 > o && (o = h / (n - (t.offset ? 0.5 : 1)), l = this.maxHeight - xa(t.grid) - r.padding - Bp(t.title, this.chart.options.font), c = Math.sqrt(f * f + d * d), s = P0(Math.min(Math.asin(Tn((u.highest.height + 6) / o, -1, 1)), Math.asin(Tn(l / c, -1, 1)) - Math.asin(Tn(d / c, -1, 1)))), s = Math.max(i, Math.min(a, s))), this.labelRotation = s;
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
      const l = Bp(i, r.options.font);
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
      r < n.length && (n = Pp(n, r)), this._labelSizes = t = this._computeLabelSizes(n, n.length, this.options.ticks.maxTicksLimit);
    }
    return t;
  }
  _computeLabelSizes(t, r, n) {
    const { ctx: i, _longestTextCache: a } = this, s = [], o = [], l = Math.floor(r / Mp(r, n));
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
    nR(a, r);
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
    return gB(this._alignToPixels ? wn(this.chart, r, 0) : r);
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
      return n.$context || (n.$context = aR(this.getContext(), t, n));
    }
    return this.$context || (this.$context = iR(this.chart.getContext(), this));
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
      x = rR(this, _, l), x !== void 0 && (b = wn(n, x, Z), c ? w = $ = D = S = b : E = C = A = k = b, h.push({
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
    i && dy(n, i);
    const a = this.getLabelItems(t);
    for (const s of a) {
      const o = s.options, l = s.font, c = s.label, u = s.textOffset;
      el(n, c, 0, u, l, o);
    }
    i && hy(n);
  }
  drawTitle() {
    const { ctx: t, options: { position: r, title: n, reverse: i } } = this;
    if (!n.display)
      return;
    const a = Fi(n.font), s = Rr(n.padding), o = n.align;
    let l = a.lineHeight / 2;
    r === "bottom" || r === "center" || Ee(r) ? (l += s.bottom, Ge(n.text) && (l += a.lineHeight * (n.text.length - 1))) : l += s.top;
    const { titleX: c, titleY: u, maxWidth: f, rotation: d } = oR(this, l, r, o);
    el(t, n.text, 0, 0, a, {
      color: n.color,
      maxWidth: f,
      rotation: d,
      textAlign: sR(o, r, i),
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
    uR(r) && (n = this.register(r));
    const i = this.items, a = t.id, s = this.scope + "." + a;
    if (!a)
      throw new Error("class does not have id: " + t);
    return a in i || (i[a] = t, lR(t, s, n), this.override && Ze.override(t.id, t.overrides)), s;
  }
  get(t) {
    return this.items[t];
  }
  unregister(t) {
    const r = this.items, n = t.id, i = this.scope;
    n in r && delete r[n], i && n in Ze[i] && (delete Ze[i][n], this.override && delete jn[n]);
  }
}
function lR(e, t, r) {
  const n = Xa(/* @__PURE__ */ Object.create(null), [
    r ? Ze.get(r) : {},
    Ze.get(t),
    e.defaults
  ]);
  Ze.set(t, n), e.defaultRoutes && cR(t, e.defaultRoutes), e.descriptors && Ze.describe(t, e.descriptors);
}
function cR(e, t) {
  Object.keys(t).forEach((r) => {
    const n = r.split("."), i = n.pop(), a = [
      e
    ].concat(n).join("."), s = t[r].split("."), o = s.pop(), l = s.join(".");
    Ze.route(a, i, l, o);
  });
}
function uR(e) {
  return "id" in e && "defaults" in e;
}
class fR {
  constructor() {
    this.controllers = new js(lo, "datasets", !0), this.elements = new js(Ey, "elements"), this.plugins = new js(Object, "plugins"), this.scales = new js(Ji, "scales"), this._typedRegistries = [
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
    const i = M0(t);
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
var cr = /* @__PURE__ */ new fR();
class dR {
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
    const n = t && t.config, i = Ke(n.options && n.options.plugins, {}), a = hR(n);
    return i === !1 && !r ? [] : vR(t, a, i, r);
  }
  _notifyStateChanges(t) {
    const r = this._oldCache || [], n = this._cache, i = (a, s) => a.filter((o) => !s.some((l) => o.plugin.id === l.plugin.id));
    this._notify(i(r, n), t, "stop"), this._notify(i(n, r), t, "start");
  }
}
function hR(e) {
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
function pR(e, t) {
  return !t && e === !1 ? null : e === !0 ? {} : e;
}
function vR(e, { plugins: t, localIds: r }, n, i) {
  const a = [], s = e.getContext();
  for (const o of t) {
    const l = o.id, c = pR(n[l], i);
    c !== null && a.push({
      plugin: o,
      options: gR(e.config, {
        plugin: o,
        local: r[l]
      }, c, s)
    });
  }
  return a;
}
function gR(e, { plugin: t, local: r }, n, i) {
  const a = e.pluginScopeKeys(t), s = e.getOptionScopes(n, a);
  return r && t.defaults && s.push(t.defaults), e.createResolver(s, i, [
    ""
  ], {
    scriptable: !1,
    indexable: !1,
    allKeys: !0
  });
}
function ef(e, t) {
  const r = Ze.datasets[e] || {};
  return ((t.datasets || {})[e] || {}).indexAxis || t.indexAxis || r.indexAxis || "x";
}
function mR(e, t) {
  let r = e;
  return e === "_index_" ? r = t : e === "_value_" && (r = t === "x" ? "y" : "x"), r;
}
function xR(e, t) {
  return e === t ? "_index_" : "_value_";
}
function Ip(e) {
  if (e === "x" || e === "y" || e === "r")
    return e;
}
function yR(e) {
  if (e === "top" || e === "bottom")
    return "x";
  if (e === "left" || e === "right")
    return "y";
}
function tf(e, ...t) {
  if (Ip(e))
    return e;
  for (const r of t) {
    const n = r.axis || yR(r.position) || e.length > 1 && Ip(e[0].toLowerCase());
    if (n)
      return n;
  }
  throw new Error(`Cannot determine type of '${e}' axis. Please provide 'axis' or 'position' option.`);
}
function Rp(e, t, r) {
  if (r[t + "AxisID"] === e)
    return {
      axis: t
    };
}
function bR(e, t) {
  if (t.data && t.data.datasets) {
    const r = t.data.datasets.filter((n) => n.xAxisID === e || n.yAxisID === e);
    if (r.length)
      return Rp(e, "x", r[0]) || Rp(e, "y", r[0]);
  }
  return {};
}
function _R(e, t) {
  const r = jn[e.type] || {
    scales: {}
  }, n = t.scales || {}, i = ef(e.type, t), a = /* @__PURE__ */ Object.create(null);
  return Object.keys(n).forEach((s) => {
    const o = n[s];
    if (!Ee(o))
      return console.error(`Invalid scale configuration for scale: ${s}`);
    if (o._proxy)
      return console.warn(`Ignoring resolver passed as options for scale: ${s}`);
    const l = tf(s, o, bR(s, e), Ze.scales[o.type]), c = xR(l, i), u = r.scales || {};
    a[s] = Pa(/* @__PURE__ */ Object.create(null), [
      {
        axis: l
      },
      o,
      u[l],
      u[c]
    ]);
  }), e.data.datasets.forEach((s) => {
    const o = s.type || e.type, l = s.indexAxis || ef(o, t), u = (jn[o] || {}).scales || {};
    Object.keys(u).forEach((f) => {
      const d = mR(f, l), h = s[d + "AxisID"] || d;
      a[h] = a[h] || /* @__PURE__ */ Object.create(null), Pa(a[h], [
        {
          axis: d
        },
        n[h],
        u[f]
      ]);
    });
  }), Object.keys(a).forEach((s) => {
    const o = a[s];
    Pa(o, [
      Ze.scales[o.type],
      Ze.scale
    ]);
  }), a;
}
function Ay(e) {
  const t = e.options || (e.options = {});
  t.plugins = Ke(t.plugins, {}), t.scales = _R(e, t);
}
function Cy(e) {
  return e = e || {}, e.datasets = e.datasets || [], e.labels = e.labels || [], e;
}
function wR(e) {
  return e = e || {}, e.data = Cy(e.data), Ay(e), e;
}
const Np = /* @__PURE__ */ new Map(), Sy = /* @__PURE__ */ new Set();
function zs(e, t) {
  let r = Np.get(e);
  return r || (r = t(), Np.set(e, r), Sy.add(r)), r;
}
const ya = (e, t, r) => {
  const n = Go(t, r);
  n !== void 0 && e.add(n);
};
class $R {
  constructor(t) {
    this._config = wR(t), this._scopeCache = /* @__PURE__ */ new Map(), this._resolverCache = /* @__PURE__ */ new Map();
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
    this._config.data = Cy(t);
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
    this.clearCache(), Ay(t);
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
      t && (l.add(t), u.forEach((f) => ya(l, t, f))), u.forEach((f) => ya(l, i, f)), u.forEach((f) => ya(l, jn[a] || {}, f)), u.forEach((f) => ya(l, Ze, f)), u.forEach((f) => ya(l, Qu, f));
    });
    const c = Array.from(l);
    return c.length === 0 && c.push(/* @__PURE__ */ Object.create(null)), Sy.has(r) && s.set(r, c), c;
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
      Qu
    ];
  }
  resolveNamedOptions(t, r, n, i = [
    ""
  ]) {
    const a = {
      $shared: !0
    }, { resolver: s, subPrefixes: o } = Lp(this._resolverCache, t, i);
    let l = s;
    if (ER(s, r)) {
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
    const { resolver: a } = Lp(this._resolverCache, t, n);
    return Ee(r) ? Ti(a, r, void 0, i) : a;
  }
}
function Lp(e, t, r) {
  let n = e.get(t);
  n || (n = /* @__PURE__ */ new Map(), e.set(t, n));
  const i = r.join();
  let a = n.get(i);
  return a || (a = {
    resolver: R0(t, r),
    subPrefixes: r.filter((o) => !o.toLowerCase().includes("hover"))
  }, n.set(i, a)), a;
}
const DR = (e) => Ee(e) && Object.getOwnPropertyNames(e).some((t) => dn(e[t]));
function ER(e, t) {
  const { isScriptable: r, isIndexable: n } = vy(e);
  for (const i of t) {
    const a = r(i), s = n(i), o = (s || a) && e[i];
    if (a && (dn(o) || DR(o)) || s && Ge(o))
      return !0;
  }
  return !1;
}
var AR = "4.4.1";
const CR = [
  "top",
  "bottom",
  "left",
  "right",
  "chartArea"
];
function jp(e, t) {
  return e === "top" || e === "bottom" || CR.indexOf(e) === -1 && t === "x";
}
function zp(e, t) {
  return function(r, n) {
    return r[e] === n[e] ? r[t] - n[t] : r[e] - n[e];
  };
}
function Hp(e) {
  const t = e.chart, r = t.options.animation;
  t.notifyPlugins("afterRender"), Ve(r && r.onComplete, [
    e
  ], t);
}
function SR(e) {
  const t = e.chart, r = t.options.animation;
  Ve(r && r.onProgress, [
    e
  ], t);
}
function ky(e) {
  return j0() && typeof e == "string" ? e = document.getElementById(e) : e && e.length && (e = e[0]), e && e.canvas && (e = e.canvas), e;
}
const uo = {}, Vp = (e) => {
  const t = ky(e);
  return Object.values(uo).filter((r) => r.canvas === t).pop();
};
function kR(e, t, r) {
  const n = Object.keys(e);
  for (const i of n) {
    const a = +i;
    if (a >= t) {
      const s = e[i];
      delete e[i], (r > 0 || a > t) && (e[a + r] = s);
    }
  }
}
function OR(e, t, r, n) {
  return !r || e.type === "mouseout" ? null : n ? t : e;
}
function Hs(e, t, r) {
  return e.options.clip ? e[r] : t[r];
}
function FR(e, t) {
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
    cr.add(...t), Yp();
  }
  static unregister(...t) {
    cr.remove(...t), Yp();
  }
  constructor(t, r) {
    const n = this.config = new $R(r), i = ky(t), a = Vp(i);
    if (a)
      throw new Error("Canvas is already in use. Chart with ID '" + a.id + "' must be destroyed before the canvas with ID '" + a.canvas.id + "' can be reused.");
    const s = n.createResolver(n.chartOptionScopes(), this.getContext());
    this.platform = new (n.platform || GI(i))(), this.platform.updateConfig(n);
    const o = this.platform.acquireContext(i, s.aspectRatio), l = o && o.canvas, c = l && l.height, u = l && l.width;
    if (this.id = aB(), this.ctx = o, this.canvas = l, this.width = u, this.height = c, this._options = s, this._aspectRatio = this.aspectRatio, this._layers = [], this._metasets = [], this._stacks = void 0, this.boxes = [], this.currentDevicePixelRatio = void 0, this.chartArea = void 0, this._active = [], this._lastEvent = void 0, this._listeners = {}, this._responsiveListeners = void 0, this._sortedMetasets = [], this.scales = {}, this._plugins = new dR(), this.$proxies = {}, this._hiddenIndices = {}, this.attached = !1, this._animationsDisabled = void 0, this.$context = void 0, this._doResize = _B((f) => this.update(f), s.resizeDelay || 0), this._dataChanges = [], uo[this.id] = this, !o || !l) {
      console.error("Failed to create chart: can't acquire context from the given item");
      return;
    }
    Dr.listen(this, "complete", Hp), Dr.listen(this, "progress", SR), this._initialize(), this.attached && this.update();
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
    return this.notifyPlugins("beforeInit"), this.options.responsive ? this.resize() : mp(this, this.options.devicePixelRatio), this.bindEvents(), this.notifyPlugins("afterInit"), this;
  }
  clear() {
    return pp(this.canvas, this.ctx), this;
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
    this.width = s.width, this.height = s.height, this._aspectRatio = this.aspectRatio, mp(this, o, !0) && (this.notifyPlugins("resize", {
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
      const o = r[s], l = tf(s, o), c = l === "r", u = l === "x";
      return {
        options: o,
        dposition: c ? "chartArea" : u ? "bottom" : "left",
        dtype: c ? "radialLinear" : u ? "category" : "linear"
      };
    }))), gt(a, (s) => {
      const o = s.options, l = o.id, c = tf(l, o), u = Ke(o.type, s.dtype);
      (o.position === void 0 || jp(o.position, c) !== jp(s.dposition)) && (o.position = s.dposition), i[l] = !0;
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
    this._sortedMetasets = t.slice(0).sort(zp("order", "index"));
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
      if (s.type && s.type !== o && (this._destroyDatasetMeta(n), s = this.getDatasetMeta(n)), s.type = o, s.indexAxis = a.indexAxis || ef(o, this.options), s.order = a.order || 0, s.index = n, s.label = "" + a.label, s.visible = this.isDatasetVisible(n), s.controller)
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
    }), this._layers.sort(zp("z", "_idx"));
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
    (!ap(r, n) || !!this._responsiveListeners !== t.responsive) && (this.unbindEvents(), this.bindEvents());
  }
  _updateHiddenIndices() {
    const { _hiddenIndices: t } = this, r = this._getUniformDataChanges() || [];
    for (const { method: n, start: i, count: a } of r) {
      const s = n === "_removeElements" ? -a : a;
      kR(t, i, s);
    }
  }
  _getUniformDataChanges() {
    const t = this._dataChanges;
    if (!t || !t.length)
      return;
    this._dataChanges = [];
    const r = this.data.datasets.length, n = (a) => new Set(t.filter((s) => s[0] === a).map((s, o) => o + "," + s.splice(1).join(","))), i = n(0);
    for (let a = 1; a < r; a++)
      if (!ap(i, n(a)))
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
    }) !== !1 && (Dr.has(this) ? this.attached && !Dr.running(this) && Dr.start(this) : (this.draw(), Hp({
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
    const r = this.ctx, n = t._clip, i = !n.disabled, a = FR(t, this.chartArea), s = {
      meta: t,
      index: t.index,
      cancelable: !0
    };
    this.notifyPlugins("beforeDatasetDraw", s) !== !1 && (i && dy(r, {
      left: n.left === !1 ? 0 : a.left - n.left,
      right: n.right === !1 ? this.width : a.right + n.right,
      top: n.top === !1 ? 0 : a.top - n.top,
      bottom: n.bottom === !1 ? this.height : a.bottom + n.bottom
    }), t.controller.draw(), i && hy(r), s.cancelable = !1, this.notifyPlugins("afterDatasetDraw", s));
  }
  isPointInArea(t) {
    return gi(t, this.chartArea, this._minPadding);
  }
  getElementsAtEventForMode(t, r, n, i) {
    const a = CI.modes[r];
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
    this._stop(), this.config.clearCache(), t && (this.unbindEvents(), pp(t, r), this.platform.releaseContext(r), this.canvas = null, this.ctx = null), delete uo[this.id], this.notifyPlugins("afterDestroy");
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
    !np(n, r) && (this._active = n, this._lastEvent = null, this._updateHoverStyles(n, r));
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
    const { _active: i = [], options: a } = this, s = r, o = this._getActiveElements(t, i, n, s), l = fB(t), c = OR(t, this._lastEvent, n, l);
    n && (this._lastEvent = null, Ve(a.onHover, [
      t,
      o,
      this
    ], this), l && Ve(a.onClick, [
      t,
      o,
      this
    ], this));
    const u = !np(o, i);
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
G(Qr, "defaults", Ze), G(Qr, "instances", uo), G(Qr, "overrides", jn), G(Qr, "registry", cr), G(Qr, "version", AR), G(Qr, "getChart", Vp);
function Yp() {
  return gt(Qr.instances, (e) => e._plugins.invalidate());
}
function TR(e, t) {
  const r = [], { bounds: i, step: a, min: s, max: o, precision: l, count: c, maxTicks: u, maxDigits: f, includeBounds: d } = e, h = a || 1, p = u - 1, { min: v, max: g } = t, m = !Ye(s), y = !Ye(o), _ = !Ye(c), x = (g - v) / (f + 1);
  let b = sp((g - v) / p / h) * h, w, E, $, C;
  if (b < 1e-14 && !m && !y)
    return [
      {
        value: v
      },
      {
        value: g
      }
    ];
  C = Math.ceil(g / b) - Math.floor(v / b), C > p && (b = sp(C * b / p / h) * h), Ye(l) || (w = Math.pow(10, l), b = Math.ceil(b * w) / w), i === "ticks" ? (E = Math.floor(v / b) * b, $ = Math.ceil(g / b) * b) : (E = v, $ = g), m && y && a && hB((o - s) / a, b / 1e3) ? (C = Math.round(Math.min((o - s) / b, u)), b = (o - s) / C, E = s, $ = o) : _ ? (E = m ? s : E, $ = y ? o : $, C = c - 1, b = ($ - E) / C) : (C = ($ - E) / b, oo(C, Math.round(C), b / 1e3) ? C = Math.round(C) : C = Math.ceil(C));
  const D = Math.max(op(b), op(E));
  w = Math.pow(10, Ye(l) ? D : l), E = Math.round(E * w) / w, $ = Math.round($ * w) / w;
  let A = 0;
  for (m && (d && E !== s ? (r.push({
    value: s
  }), E < s && A++, oo(Math.round((E + A * b) * w) / w, s, Wp(s, x, e)) && A++) : E < s && A++); A < C; ++A) {
    const S = Math.round((E + A * b) * w) / w;
    if (y && S > o)
      break;
    r.push({
      value: S
    });
  }
  return y && d && $ !== o ? r.length && oo(r[r.length - 1].value, o, Wp(o, x, e)) ? r[r.length - 1].value = o : r.push({
    value: o
  }) : (!y || $ === o) && r.push({
    value: $
  }), r;
}
function Wp(e, t, { horizontal: r, minRotation: n }) {
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
    }, a = this._range || this, s = TR(i, a);
    return t.bounds === "ticks" && sy(s, this, "value"), t.reverse ? (s.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), s;
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
    return I0(t, this.chart.options.locale, this.options.ticks.format);
  }
}
class Up extends nl {
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
G(Up, "id", "linear"), G(Up, "defaults", {
  ticks: {
    callback: Rl.formatters.numeric
  }
});
const Qa = (e) => Math.floor(sn(e)), Dn = (e, t) => Math.pow(10, Qa(e) + t);
function qp(e) {
  return e / Math.pow(10, Qa(e)) === 1;
}
function Gp(e, t, r) {
  const n = Math.pow(10, r), i = Math.floor(e / n);
  return Math.ceil(t / n) - i;
}
function MR(e, t) {
  const r = t - e;
  let n = Qa(r);
  for (; Gp(e, t, n) > 10; )
    n++;
  for (; Gp(e, t, n) < 10; )
    n--;
  return Math.min(n, Qa(e));
}
function PR(e, { min: t, max: r }) {
  t = It(e.min, t);
  const n = [], i = Qa(t);
  let a = MR(t, r), s = a < 0 ? Math.pow(10, Math.abs(a)) : 1;
  const o = Math.pow(10, a), l = i > a ? Math.pow(10, i) : 0, c = Math.round((t - l) * s) / s, u = Math.floor((t - l) / o / 10) * o * 10;
  let f = Math.floor((c - u) / Math.pow(10, a)), d = It(e.min, Math.round((l + u + f * Math.pow(10, a)) * s) / s);
  for (; d < r; )
    n.push({
      value: d,
      major: qp(d),
      significand: f
    }), f >= 10 ? f = f < 15 ? 15 : 20 : f++, f >= 20 && (a++, f = 2, s = a >= 0 ? 1 : s), d = Math.round((l + u + f * Math.pow(10, a)) * s) / s;
  const h = It(e.max, d);
  return n.push({
    value: h,
    major: qp(h),
    significand: f
  }), n;
}
class Kp extends Ji {
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
    }, n = PR(r, this);
    return t.bounds === "ticks" && sy(n, this, "value"), t.reverse ? (n.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), n;
  }
  getLabelForValue(t) {
    return t === void 0 ? "0" : I0(t, this.chart.options.locale, this.options.ticks.format);
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
G(Kp, "id", "logarithmic"), G(Kp, "defaults", {
  ticks: {
    callback: Rl.formatters.logarithmic,
    major: {
      enabled: !0
    }
  }
});
function rf(e) {
  const t = e.ticks;
  if (t.display && e.display) {
    const r = Rr(t.backdropPadding);
    return Ke(t.font && t.font.size, Ze.font.size) + r.height;
  }
  return 0;
}
function BR(e, t, r) {
  return r = Ge(r) ? r : [
    r
  ], {
    w: MB(e, t.string, r),
    h: r.length * t.lineHeight
  };
}
function Zp(e, t, r, n, i) {
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
function IR(e) {
  const t = {
    l: e.left + e._padding.left,
    r: e.right - e._padding.right,
    t: e.top + e._padding.top,
    b: e.bottom - e._padding.bottom
  }, r = Object.assign({}, t), n = [], i = [], a = e._pointLabels.length, s = e.options.pointLabels, o = s.centerPointLabels ? tr / a : 0;
  for (let l = 0; l < a; l++) {
    const c = s.setContext(e.getPointLabelContext(l));
    i[l] = c.padding;
    const u = e.getPointPosition(l, e.drawingArea + i[l], o), f = Fi(c.font), d = BR(e.ctx, f, e._pointLabels[l]);
    n[l] = d;
    const h = ur(e.getIndexAngle(l) + o), p = Math.round(P0(h)), v = Zp(p, u.x, d.w, 0, 180), g = Zp(p, u.y, d.h, 90, 270);
    RR(r, t, h, v, g);
  }
  e.setCenterPoint(t.l - r.l, r.r - t.r, t.t - r.t, r.b - t.b), e._pointLabelItems = jR(e, n, i);
}
function RR(e, t, r, n, i) {
  const a = Math.abs(Math.sin(r)), s = Math.abs(Math.cos(r));
  let o = 0, l = 0;
  n.start < t.l ? (o = (t.l - n.start) / a, e.l = Math.min(e.l, t.l - o)) : n.end > t.r && (o = (n.end - t.r) / a, e.r = Math.max(e.r, t.r + o)), i.start < t.t ? (l = (t.t - i.start) / s, e.t = Math.min(e.t, t.t - l)) : i.end > t.b && (l = (i.end - t.b) / s, e.b = Math.max(e.b, t.b + l));
}
function NR(e, t, r) {
  const n = e.drawingArea, { extra: i, additionalAngle: a, padding: s, size: o } = r, l = e.getPointPosition(t, n + i + s, a), c = Math.round(P0(ur(l.angle + Or))), u = VR(l.y, o.h, c), f = zR(c), d = HR(l.x, o.w, f);
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
function LR(e, t) {
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
function jR(e, t, r) {
  const n = [], i = e._pointLabels.length, a = e.options, { centerPointLabels: s, display: o } = a.pointLabels, l = {
    extra: rf(a) / 2,
    additionalAngle: s ? tr / i : 0
  };
  let c;
  for (let u = 0; u < i; u++) {
    l.padding = r[u], l.size = t[u];
    const f = NR(e, u, l);
    n.push(f), o === "auto" && (f.visible = LR(f, c), f.visible && (c = f));
  }
  return n;
}
function zR(e) {
  return e === 0 || e === 180 ? "center" : e < 180 ? "left" : "right";
}
function HR(e, t, r) {
  return r === "right" ? e -= t : r === "center" && (e -= t / 2), e;
}
function VR(e, t, r) {
  return r === 90 || r === 270 ? e -= t / 2 : (r > 270 || r < 90) && (e -= t), e;
}
function YR(e, t, r) {
  const { left: n, top: i, right: a, bottom: s } = r, { backdropColor: o } = t;
  if (!Ye(o)) {
    const l = VB(t.borderRadius), c = Rr(t.backdropPadding);
    e.fillStyle = o;
    const u = n - c.left, f = i - c.top, d = a - n + c.width, h = s - i + c.height;
    Object.values(l).some((p) => p !== 0) ? (e.beginPath(), RB(e, {
      x: u,
      y: f,
      w: d,
      h,
      radius: l
    }), e.fill()) : e.fillRect(u, f, d, h);
  }
}
function WR(e, t) {
  const { ctx: r, options: { pointLabels: n } } = e;
  for (let i = t - 1; i >= 0; i--) {
    const a = e._pointLabelItems[i];
    if (!a.visible)
      continue;
    const s = n.setContext(e.getPointLabelContext(i));
    YR(r, s, a);
    const o = Fi(s.font), { x: l, y: c, textAlign: u } = a;
    el(r, e._pointLabels[i], l, c + o.lineHeight / 2, o, {
      color: s.color,
      textAlign: u,
      textBaseline: "middle"
    });
  }
}
function Oy(e, t, r, n) {
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
function UR(e, t, r, n, i) {
  const a = e.ctx, s = t.circular, { color: o, lineWidth: l } = t;
  !s && !n || !o || !l || r < 0 || (a.save(), a.strokeStyle = o, a.lineWidth = l, a.setLineDash(i.dash), a.lineDashOffset = i.dashOffset, a.beginPath(), Oy(e, r, s, n), a.closePath(), a.stroke(), a.restore());
}
function qR(e, t, r) {
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
    const t = this._padding = Rr(rf(this.options) / 2), r = this.width = this.maxWidth - t.width, n = this.height = this.maxHeight - t.height;
    this.xCenter = Math.floor(this.left + r / 2 + t.left), this.yCenter = Math.floor(this.top + n / 2 + t.top), this.drawingArea = Math.floor(Math.min(r, n) / 2);
  }
  determineDataLimits() {
    const { min: t, max: r } = this.getMinMax(!1);
    this.min = it(t) && !isNaN(t) ? t : 0, this.max = it(r) && !isNaN(r) ? r : 0, this.handleTickRangeOptions();
  }
  computeTickLimit() {
    return Math.ceil(this.drawingArea / rf(this.options));
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
    t.display && t.pointLabels.display ? IR(this) : this.setCenterPoint(0, 0, 0, 0);
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
      return qR(this.getContext(), t, n);
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
      n.save(), n.beginPath(), Oy(this, this.getDistanceFromCenterForValue(this._endValue), r, this._pointLabels.length), n.closePath(), n.fillStyle = t, n.fill(), n.restore();
    }
  }
  drawGrid() {
    const t = this.ctx, r = this.options, { angleLines: n, grid: i, border: a } = r, s = this._pointLabels.length;
    let o, l, c;
    if (r.pointLabels.display && WR(this, s), i.display && this.ticks.forEach((u, f) => {
      if (f !== 0) {
        l = this.getDistanceFromCenterForValue(u.value);
        const d = this.getContext(f), h = i.setContext(d), p = a.setContext(d);
        UR(this, h, l, s, p);
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
    callback: Rl.formatters.numeric
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
const Ll = {
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
}, Ct = /* @__PURE__ */ Object.keys(Ll);
function Xp(e, t) {
  return e - t;
}
function Jp(e, t) {
  if (Ye(t))
    return null;
  const r = e._adapter, { parser: n, round: i, isoWeekday: a } = e._parseOpts;
  let s = t;
  return typeof n == "function" && (s = n(s)), it(s) || (s = typeof n == "string" ? r.parse(s, n) : r.parse(s)), s === null ? null : (i && (s = i === "week" && (Jo(a) || a === !0) ? r.startOf(s, "isoWeek", a) : r.startOf(s, i)), +s);
}
function Qp(e, t, r, n) {
  const i = Ct.length;
  for (let a = Ct.indexOf(e); a < i - 1; ++a) {
    const s = Ll[Ct[a]], o = s.steps ? s.steps : Number.MAX_SAFE_INTEGER;
    if (s.common && Math.ceil((r - t) / (o * s.size)) <= n)
      return Ct[a];
  }
  return Ct[i - 1];
}
function GR(e, t, r, n, i) {
  for (let a = Ct.length - 1; a >= Ct.indexOf(r); a--) {
    const s = Ct[a];
    if (Ll[s].common && e._adapter.diff(i, n, s) >= t - 1)
      return s;
  }
  return Ct[r ? Ct.indexOf(r) : 0];
}
function KR(e) {
  for (let t = Ct.indexOf(e) + 1, r = Ct.length; t < r; ++t)
    if (Ll[Ct[t]].common)
      return Ct[t];
}
function ev(e, t, r) {
  if (!r)
    e[t] = !0;
  else if (r.length) {
    const { lo: n, hi: i } = B0(r, t), a = r[n] >= t ? r[n] : r[i];
    e[a] = !0;
  }
}
function ZR(e, t, r, n) {
  const i = e._adapter, a = +i.startOf(t[0].value, n), s = t[t.length - 1].value;
  let o, l;
  for (o = a; o <= s; o = +i.add(o, 1, n))
    l = r[o], l >= 0 && (t[l].major = !0);
  return t;
}
function tv(e, t, r) {
  const n = [], i = {}, a = t.length;
  let s, o;
  for (s = 0; s < a; ++s)
    o = t[s], i[o] = s, n.push({
      value: o,
      major: !1
    });
  return a === 0 || !r ? n : ZR(e, n, i, r);
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
    const n = t.time || (t.time = {}), i = this._adapter = new wI._date(t.adapters.date);
    i.init(r), Pa(n.displayFormats, i.formats()), this._parseOpts = {
      parser: n.parser,
      round: n.round,
      isoWeekday: n.isoWeekday
    }, super.init(t), this._normalized = r.normalized;
  }
  parse(t, r) {
    return t === void 0 ? null : Jp(this, t);
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
    const a = this.min, s = this.max, o = xB(i, a, s);
    return this._unit = r.unit || (n.autoSkip ? Qp(r.minUnit, this.min, this.max, this._getLabelCapacity(a)) : GR(this, o.length, r.minUnit, this.min, this.max)), this._majorUnit = !n.major.enabled || this._unit === "year" ? void 0 : KR(this._unit), this.initOffsets(i), t.reverse && o.reverse(), tv(this, o, this._majorUnit);
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
    const t = this._adapter, r = this.min, n = this.max, i = this.options, a = i.time, s = a.unit || Qp(a.minUnit, r, n, this._getLabelCapacity(r)), o = Ke(i.ticks.stepSize, 1), l = s === "week" ? a.isoWeekday : !1, c = Jo(l) || l === !0, u = {};
    let f = r, d, h;
    if (c && (f = +t.startOf(f, "isoWeek", l)), f = +t.startOf(f, c ? "day" : s), t.diff(n, r, s) > 1e5 * o)
      throw new Error(r + " and " + n + " are too far apart with stepSize of " + o + " " + s);
    const p = i.ticks.source === "data" && this.getDataTimestamps();
    for (d = f, h = 0; d < n; d = +t.add(d, o, s), h++)
      ev(u, d, p);
    return (d === n || i.bounds === "ticks" || h === 1) && ev(u, d, p), Object.keys(u).sort(Xp).map((v) => +v);
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
    const r = this.options.time, n = r.displayFormats, i = n[r.unit] || n.millisecond, a = this._tickFormatFunction(t, 0, tv(this, [
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
      t.push(Jp(this, i[r]));
    return this._cache.labels = this._normalized ? t : this.normalize(t);
  }
  normalize(t) {
    return bB(t.sort(Xp));
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
  r ? (t >= e[n].pos && t <= e[i].pos && ({ lo: n, hi: i } = Ju(e, "pos", t)), { pos: a, time: o } = e[n], { pos: s, time: l } = e[i]) : (t >= e[n].time && t <= e[i].time && ({ lo: n, hi: i } = Ju(e, "time", t)), { time: a, pos: o } = e[n], { time: s, pos: l } = e[i]);
  const c = s - a;
  return c ? o + (l - o) * (t - a) / c : o;
}
class rv extends il {
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
G(rv, "id", "timeseries"), G(rv, "defaults", il.defaults);
var Fy = typeof global == "object" && global && global.Object === Object && global, XR = typeof self == "object" && self && self.Object === Object && self, yr = Fy || XR || Function("return this")(), hn = yr.Symbol, Ty = Object.prototype, JR = Ty.hasOwnProperty, QR = Ty.toString, ba = hn ? hn.toStringTag : void 0;
function eN(e) {
  var t = JR.call(e, ba), r = e[ba];
  try {
    e[ba] = void 0;
    var n = !0;
  } catch {
  }
  var i = QR.call(e);
  return n && (t ? e[ba] = r : delete e[ba]), i;
}
var tN = Object.prototype, rN = tN.toString;
function nN(e) {
  return rN.call(e);
}
var iN = "[object Null]", aN = "[object Undefined]", nv = hn ? hn.toStringTag : void 0;
function gs(e) {
  return e == null ? e === void 0 ? aN : iN : nv && nv in Object(e) ? eN(e) : nN(e);
}
function zn(e) {
  return e != null && typeof e == "object";
}
var Mi = Array.isArray;
function ms(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var sN = "[object AsyncFunction]", oN = "[object Function]", lN = "[object GeneratorFunction]", cN = "[object Proxy]";
function My(e) {
  if (!ms(e))
    return !1;
  var t = gs(e);
  return t == oN || t == lN || t == sN || t == cN;
}
var wc = yr["__core-js_shared__"], iv = function() {
  var e = /[^.]+$/.exec(wc && wc.keys && wc.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function uN(e) {
  return !!iv && iv in e;
}
var fN = Function.prototype, dN = fN.toString;
function qn(e) {
  if (e != null) {
    try {
      return dN.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var hN = /[\\^$.*+?()[\]{}|]/g, pN = /^\[object .+?Constructor\]$/, vN = Function.prototype, gN = Object.prototype, mN = vN.toString, xN = gN.hasOwnProperty, yN = RegExp(
  "^" + mN.call(xN).replace(hN, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function bN(e) {
  if (!ms(e) || uN(e))
    return !1;
  var t = My(e) ? yN : pN;
  return t.test(qn(e));
}
function _N(e, t) {
  return e == null ? void 0 : e[t];
}
function Gn(e, t) {
  var r = _N(e, t);
  return bN(r) ? r : void 0;
}
var nf = Gn(yr, "WeakMap"), av = Object.create, wN = /* @__PURE__ */ function() {
  function e() {
  }
  return function(t) {
    if (!ms(t))
      return {};
    if (av)
      return av(t);
    e.prototype = t;
    var r = new e();
    return e.prototype = void 0, r;
  };
}();
function $N(e, t) {
  var r = -1, n = e.length;
  for (t || (t = Array(n)); ++r < n; )
    t[r] = e[r];
  return t;
}
var sv = function() {
  try {
    var e = Gn(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
function DN(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1; )
    ;
  return e;
}
var EN = 9007199254740991, AN = /^(?:0|[1-9]\d*)$/;
function CN(e, t) {
  var r = typeof e;
  return t = t ?? EN, !!t && (r == "number" || r != "symbol" && AN.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function Py(e, t, r) {
  t == "__proto__" && sv ? sv(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
function V0(e, t) {
  return e === t || e !== e && t !== t;
}
var SN = Object.prototype, kN = SN.hasOwnProperty;
function By(e, t, r) {
  var n = e[t];
  (!(kN.call(e, t) && V0(n, r)) || r === void 0 && !(t in e)) && Py(e, t, r);
}
function jl(e, t, r, n) {
  var i = !r;
  r || (r = {});
  for (var a = -1, s = t.length; ++a < s; ) {
    var o = t[a], l = n ? n(r[o], e[o], o, r, e) : void 0;
    l === void 0 && (l = e[o]), i ? Py(r, o, l) : By(r, o, l);
  }
  return r;
}
var ON = 9007199254740991;
function Iy(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= ON;
}
function Y0(e) {
  return e != null && Iy(e.length) && !My(e);
}
var FN = Object.prototype;
function zl(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || FN;
  return e === r;
}
function TN(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var MN = "[object Arguments]";
function ov(e) {
  return zn(e) && gs(e) == MN;
}
var Ry = Object.prototype, PN = Ry.hasOwnProperty, BN = Ry.propertyIsEnumerable, IN = ov(/* @__PURE__ */ function() {
  return arguments;
}()) ? ov : function(e) {
  return zn(e) && PN.call(e, "callee") && !BN.call(e, "callee");
};
const Ny = IN;
function RN() {
  return !1;
}
var Ly = typeof exports == "object" && exports && !exports.nodeType && exports, lv = Ly && typeof module == "object" && module && !module.nodeType && module, NN = lv && lv.exports === Ly, cv = NN ? yr.Buffer : void 0, LN = cv ? cv.isBuffer : void 0, jN = LN || RN;
const es = jN;
var zN = "[object Arguments]", HN = "[object Array]", VN = "[object Boolean]", YN = "[object Date]", WN = "[object Error]", UN = "[object Function]", qN = "[object Map]", GN = "[object Number]", KN = "[object Object]", ZN = "[object RegExp]", XN = "[object Set]", JN = "[object String]", QN = "[object WeakMap]", eL = "[object ArrayBuffer]", tL = "[object DataView]", rL = "[object Float32Array]", nL = "[object Float64Array]", iL = "[object Int8Array]", aL = "[object Int16Array]", sL = "[object Int32Array]", oL = "[object Uint8Array]", lL = "[object Uint8ClampedArray]", cL = "[object Uint16Array]", uL = "[object Uint32Array]", Me = {};
Me[rL] = Me[nL] = Me[iL] = Me[aL] = Me[sL] = Me[oL] = Me[lL] = Me[cL] = Me[uL] = !0;
Me[zN] = Me[HN] = Me[eL] = Me[VN] = Me[tL] = Me[YN] = Me[WN] = Me[UN] = Me[qN] = Me[GN] = Me[KN] = Me[ZN] = Me[XN] = Me[JN] = Me[QN] = !1;
function fL(e) {
  return zn(e) && Iy(e.length) && !!Me[gs(e)];
}
function W0(e) {
  return function(t) {
    return e(t);
  };
}
var jy = typeof exports == "object" && exports && !exports.nodeType && exports, Ra = jy && typeof module == "object" && module && !module.nodeType && module, dL = Ra && Ra.exports === jy, $c = dL && Fy.process, Pi = function() {
  try {
    var e = Ra && Ra.require && Ra.require("util").types;
    return e || $c && $c.binding && $c.binding("util");
  } catch {
  }
}(), uv = Pi && Pi.isTypedArray, hL = uv ? W0(uv) : fL;
const U0 = hL;
var pL = Object.prototype, vL = pL.hasOwnProperty;
function zy(e, t) {
  var r = Mi(e), n = !r && Ny(e), i = !r && !n && es(e), a = !r && !n && !i && U0(e), s = r || n || i || a, o = s ? TN(e.length, String) : [], l = o.length;
  for (var c in e)
    (t || vL.call(e, c)) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    CN(c, l))) && o.push(c);
  return o;
}
function Hy(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var gL = Hy(Object.keys, Object), mL = Object.prototype, xL = mL.hasOwnProperty;
function Vy(e) {
  if (!zl(e))
    return gL(e);
  var t = [];
  for (var r in Object(e))
    xL.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
function q0(e) {
  return Y0(e) ? zy(e) : Vy(e);
}
function yL(e) {
  var t = [];
  if (e != null)
    for (var r in Object(e))
      t.push(r);
  return t;
}
var bL = Object.prototype, _L = bL.hasOwnProperty;
function wL(e) {
  if (!ms(e))
    return yL(e);
  var t = zl(e), r = [];
  for (var n in e)
    n == "constructor" && (t || !_L.call(e, n)) || r.push(n);
  return r;
}
function G0(e) {
  return Y0(e) ? zy(e, !0) : wL(e);
}
var ts = Gn(Object, "create");
function $L() {
  this.__data__ = ts ? ts(null) : {}, this.size = 0;
}
function DL(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var EL = "__lodash_hash_undefined__", AL = Object.prototype, CL = AL.hasOwnProperty;
function SL(e) {
  var t = this.__data__;
  if (ts) {
    var r = t[e];
    return r === EL ? void 0 : r;
  }
  return CL.call(t, e) ? t[e] : void 0;
}
var kL = Object.prototype, OL = kL.hasOwnProperty;
function FL(e) {
  var t = this.__data__;
  return ts ? t[e] !== void 0 : OL.call(t, e);
}
var TL = "__lodash_hash_undefined__";
function ML(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = ts && t === void 0 ? TL : t, this;
}
function Hn(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Hn.prototype.clear = $L;
Hn.prototype.delete = DL;
Hn.prototype.get = SL;
Hn.prototype.has = FL;
Hn.prototype.set = ML;
function PL() {
  this.__data__ = [], this.size = 0;
}
function Hl(e, t) {
  for (var r = e.length; r--; )
    if (V0(e[r][0], t))
      return r;
  return -1;
}
var BL = Array.prototype, IL = BL.splice;
function RL(e) {
  var t = this.__data__, r = Hl(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : IL.call(t, r, 1), --this.size, !0;
}
function NL(e) {
  var t = this.__data__, r = Hl(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function LL(e) {
  return Hl(this.__data__, e) > -1;
}
function jL(e, t) {
  var r = this.__data__, n = Hl(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
function Hr(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Hr.prototype.clear = PL;
Hr.prototype.delete = RL;
Hr.prototype.get = NL;
Hr.prototype.has = LL;
Hr.prototype.set = jL;
var rs = Gn(yr, "Map");
function zL() {
  this.size = 0, this.__data__ = {
    hash: new Hn(),
    map: new (rs || Hr)(),
    string: new Hn()
  };
}
function HL(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Vl(e, t) {
  var r = e.__data__;
  return HL(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function VL(e) {
  var t = Vl(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function YL(e) {
  return Vl(this, e).get(e);
}
function WL(e) {
  return Vl(this, e).has(e);
}
function UL(e, t) {
  var r = Vl(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
function Kn(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Kn.prototype.clear = zL;
Kn.prototype.delete = VL;
Kn.prototype.get = YL;
Kn.prototype.has = WL;
Kn.prototype.set = UL;
function Yy(e, t) {
  for (var r = -1, n = t.length, i = e.length; ++r < n; )
    e[i + r] = t[r];
  return e;
}
var qL = Hy(Object.getPrototypeOf, Object);
const Wy = qL;
function GL() {
  this.__data__ = new Hr(), this.size = 0;
}
function KL(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
function ZL(e) {
  return this.__data__.get(e);
}
function XL(e) {
  return this.__data__.has(e);
}
var JL = 200;
function QL(e, t) {
  var r = this.__data__;
  if (r instanceof Hr) {
    var n = r.__data__;
    if (!rs || n.length < JL - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new Kn(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
function Fr(e) {
  var t = this.__data__ = new Hr(e);
  this.size = t.size;
}
Fr.prototype.clear = GL;
Fr.prototype.delete = KL;
Fr.prototype.get = ZL;
Fr.prototype.has = XL;
Fr.prototype.set = QL;
function e9(e, t) {
  return e && jl(t, q0(t), e);
}
function t9(e, t) {
  return e && jl(t, G0(t), e);
}
var Uy = typeof exports == "object" && exports && !exports.nodeType && exports, fv = Uy && typeof module == "object" && module && !module.nodeType && module, r9 = fv && fv.exports === Uy, dv = r9 ? yr.Buffer : void 0, hv = dv ? dv.allocUnsafe : void 0;
function n9(e, t) {
  if (t)
    return e.slice();
  var r = e.length, n = hv ? hv(r) : new e.constructor(r);
  return e.copy(n), n;
}
function i9(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = 0, a = []; ++r < n; ) {
    var s = e[r];
    t(s, r, e) && (a[i++] = s);
  }
  return a;
}
function qy() {
  return [];
}
var a9 = Object.prototype, s9 = a9.propertyIsEnumerable, pv = Object.getOwnPropertySymbols, K0 = pv ? function(e) {
  return e == null ? [] : (e = Object(e), i9(pv(e), function(t) {
    return s9.call(e, t);
  }));
} : qy;
function o9(e, t) {
  return jl(e, K0(e), t);
}
var l9 = Object.getOwnPropertySymbols, Gy = l9 ? function(e) {
  for (var t = []; e; )
    Yy(t, K0(e)), e = Wy(e);
  return t;
} : qy;
function c9(e, t) {
  return jl(e, Gy(e), t);
}
function Ky(e, t, r) {
  var n = t(e);
  return Mi(e) ? n : Yy(n, r(e));
}
function af(e) {
  return Ky(e, q0, K0);
}
function u9(e) {
  return Ky(e, G0, Gy);
}
var sf = Gn(yr, "DataView"), of = Gn(yr, "Promise"), lf = Gn(yr, "Set"), vv = "[object Map]", f9 = "[object Object]", gv = "[object Promise]", mv = "[object Set]", xv = "[object WeakMap]", yv = "[object DataView]", d9 = qn(sf), h9 = qn(rs), p9 = qn(of), v9 = qn(lf), g9 = qn(nf), Cn = gs;
(sf && Cn(new sf(new ArrayBuffer(1))) != yv || rs && Cn(new rs()) != vv || of && Cn(of.resolve()) != gv || lf && Cn(new lf()) != mv || nf && Cn(new nf()) != xv) && (Cn = function(e) {
  var t = gs(e), r = t == f9 ? e.constructor : void 0, n = r ? qn(r) : "";
  if (n)
    switch (n) {
      case d9:
        return yv;
      case h9:
        return vv;
      case p9:
        return gv;
      case v9:
        return mv;
      case g9:
        return xv;
    }
  return t;
});
const Bi = Cn;
var m9 = Object.prototype, x9 = m9.hasOwnProperty;
function y9(e) {
  var t = e.length, r = new e.constructor(t);
  return t && typeof e[0] == "string" && x9.call(e, "index") && (r.index = e.index, r.input = e.input), r;
}
var al = yr.Uint8Array;
function Z0(e) {
  var t = new e.constructor(e.byteLength);
  return new al(t).set(new al(e)), t;
}
function b9(e, t) {
  var r = t ? Z0(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.byteLength);
}
var _9 = /\w*$/;
function w9(e) {
  var t = new e.constructor(e.source, _9.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var bv = hn ? hn.prototype : void 0, _v = bv ? bv.valueOf : void 0;
function $9(e) {
  return _v ? Object(_v.call(e)) : {};
}
function D9(e, t) {
  var r = t ? Z0(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.length);
}
var E9 = "[object Boolean]", A9 = "[object Date]", C9 = "[object Map]", S9 = "[object Number]", k9 = "[object RegExp]", O9 = "[object Set]", F9 = "[object String]", T9 = "[object Symbol]", M9 = "[object ArrayBuffer]", P9 = "[object DataView]", B9 = "[object Float32Array]", I9 = "[object Float64Array]", R9 = "[object Int8Array]", N9 = "[object Int16Array]", L9 = "[object Int32Array]", j9 = "[object Uint8Array]", z9 = "[object Uint8ClampedArray]", H9 = "[object Uint16Array]", V9 = "[object Uint32Array]";
function Y9(e, t, r) {
  var n = e.constructor;
  switch (t) {
    case M9:
      return Z0(e);
    case E9:
    case A9:
      return new n(+e);
    case P9:
      return b9(e, r);
    case B9:
    case I9:
    case R9:
    case N9:
    case L9:
    case j9:
    case z9:
    case H9:
    case V9:
      return D9(e, r);
    case C9:
      return new n();
    case S9:
    case F9:
      return new n(e);
    case k9:
      return w9(e);
    case O9:
      return new n();
    case T9:
      return $9(e);
  }
}
function W9(e) {
  return typeof e.constructor == "function" && !zl(e) ? wN(Wy(e)) : {};
}
var U9 = "[object Map]";
function q9(e) {
  return zn(e) && Bi(e) == U9;
}
var wv = Pi && Pi.isMap, G9 = wv ? W0(wv) : q9, K9 = "[object Set]";
function Z9(e) {
  return zn(e) && Bi(e) == K9;
}
var $v = Pi && Pi.isSet, X9 = $v ? W0($v) : Z9, J9 = 1, Q9 = 2, e7 = 4, Zy = "[object Arguments]", t7 = "[object Array]", r7 = "[object Boolean]", n7 = "[object Date]", i7 = "[object Error]", Xy = "[object Function]", a7 = "[object GeneratorFunction]", s7 = "[object Map]", o7 = "[object Number]", Jy = "[object Object]", l7 = "[object RegExp]", c7 = "[object Set]", u7 = "[object String]", f7 = "[object Symbol]", d7 = "[object WeakMap]", h7 = "[object ArrayBuffer]", p7 = "[object DataView]", v7 = "[object Float32Array]", g7 = "[object Float64Array]", m7 = "[object Int8Array]", x7 = "[object Int16Array]", y7 = "[object Int32Array]", b7 = "[object Uint8Array]", _7 = "[object Uint8ClampedArray]", w7 = "[object Uint16Array]", $7 = "[object Uint32Array]", Fe = {};
Fe[Zy] = Fe[t7] = Fe[h7] = Fe[p7] = Fe[r7] = Fe[n7] = Fe[v7] = Fe[g7] = Fe[m7] = Fe[x7] = Fe[y7] = Fe[s7] = Fe[o7] = Fe[Jy] = Fe[l7] = Fe[c7] = Fe[u7] = Fe[f7] = Fe[b7] = Fe[_7] = Fe[w7] = Fe[$7] = !0;
Fe[i7] = Fe[Xy] = Fe[d7] = !1;
function fo(e, t, r, n, i, a) {
  var s, o = t & J9, l = t & Q9, c = t & e7;
  if (r && (s = i ? r(e, n, i, a) : r(e)), s !== void 0)
    return s;
  if (!ms(e))
    return e;
  var u = Mi(e);
  if (u) {
    if (s = y9(e), !o)
      return $N(e, s);
  } else {
    var f = Bi(e), d = f == Xy || f == a7;
    if (es(e))
      return n9(e, o);
    if (f == Jy || f == Zy || d && !i) {
      if (s = l || d ? {} : W9(e), !o)
        return l ? c9(e, t9(s, e)) : o9(e, e9(s, e));
    } else {
      if (!Fe[f])
        return i ? e : {};
      s = Y9(e, f, o);
    }
  }
  a || (a = new Fr());
  var h = a.get(e);
  if (h)
    return h;
  a.set(e, s), X9(e) ? e.forEach(function(g) {
    s.add(fo(g, t, r, g, e, a));
  }) : G9(e) && e.forEach(function(g, m) {
    s.set(m, fo(g, t, r, m, e, a));
  });
  var p = c ? l ? u9 : af : l ? G0 : q0, v = u ? void 0 : p(e);
  return DN(v || e, function(g, m) {
    v && (m = g, g = e[m]), By(s, m, fo(g, t, r, m, e, a));
  }), s;
}
var D7 = 1, E7 = 4;
function _a(e) {
  return fo(e, D7 | E7);
}
var A7 = "__lodash_hash_undefined__";
function C7(e) {
  return this.__data__.set(e, A7), this;
}
function S7(e) {
  return this.__data__.has(e);
}
function sl(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new Kn(); ++t < r; )
    this.add(e[t]);
}
sl.prototype.add = sl.prototype.push = C7;
sl.prototype.has = S7;
function k7(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
function O7(e, t) {
  return e.has(t);
}
var F7 = 1, T7 = 2;
function Qy(e, t, r, n, i, a) {
  var s = r & F7, o = e.length, l = t.length;
  if (o != l && !(s && l > o))
    return !1;
  var c = a.get(e), u = a.get(t);
  if (c && u)
    return c == t && u == e;
  var f = -1, d = !0, h = r & T7 ? new sl() : void 0;
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
      if (!k7(t, function(m, y) {
        if (!O7(h, y) && (p === m || i(p, m, r, n, a)))
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
function M7(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n, i) {
    r[++t] = [i, n];
  }), r;
}
function P7(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n) {
    r[++t] = n;
  }), r;
}
var B7 = 1, I7 = 2, R7 = "[object Boolean]", N7 = "[object Date]", L7 = "[object Error]", j7 = "[object Map]", z7 = "[object Number]", H7 = "[object RegExp]", V7 = "[object Set]", Y7 = "[object String]", W7 = "[object Symbol]", U7 = "[object ArrayBuffer]", q7 = "[object DataView]", Dv = hn ? hn.prototype : void 0, Dc = Dv ? Dv.valueOf : void 0;
function G7(e, t, r, n, i, a, s) {
  switch (r) {
    case q7:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case U7:
      return !(e.byteLength != t.byteLength || !a(new al(e), new al(t)));
    case R7:
    case N7:
    case z7:
      return V0(+e, +t);
    case L7:
      return e.name == t.name && e.message == t.message;
    case H7:
    case Y7:
      return e == t + "";
    case j7:
      var o = M7;
    case V7:
      var l = n & B7;
      if (o || (o = P7), e.size != t.size && !l)
        return !1;
      var c = s.get(e);
      if (c)
        return c == t;
      n |= I7, s.set(e, t);
      var u = Qy(o(e), o(t), n, i, a, s);
      return s.delete(e), u;
    case W7:
      if (Dc)
        return Dc.call(e) == Dc.call(t);
  }
  return !1;
}
var K7 = 1, Z7 = Object.prototype, X7 = Z7.hasOwnProperty;
function J7(e, t, r, n, i, a) {
  var s = r & K7, o = af(e), l = o.length, c = af(t), u = c.length;
  if (l != u && !s)
    return !1;
  for (var f = l; f--; ) {
    var d = o[f];
    if (!(s ? d in t : X7.call(t, d)))
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
var Q7 = 1, Ev = "[object Arguments]", Av = "[object Array]", Ws = "[object Object]", ej = Object.prototype, Cv = ej.hasOwnProperty;
function tj(e, t, r, n, i, a) {
  var s = Mi(e), o = Mi(t), l = s ? Av : Bi(e), c = o ? Av : Bi(t);
  l = l == Ev ? Ws : l, c = c == Ev ? Ws : c;
  var u = l == Ws, f = c == Ws, d = l == c;
  if (d && es(e)) {
    if (!es(t))
      return !1;
    s = !0, u = !1;
  }
  if (d && !u)
    return a || (a = new Fr()), s || U0(e) ? Qy(e, t, r, n, i, a) : G7(e, t, l, r, n, i, a);
  if (!(r & Q7)) {
    var h = u && Cv.call(e, "__wrapped__"), p = f && Cv.call(t, "__wrapped__");
    if (h || p) {
      var v = h ? e.value() : e, g = p ? t.value() : t;
      return a || (a = new Fr()), i(v, g, r, n, a);
    }
  }
  return d ? (a || (a = new Fr()), J7(e, t, r, n, i, a)) : !1;
}
function eb(e, t, r, n, i) {
  return e === t ? !0 : e == null || t == null || !zn(e) && !zn(t) ? e !== e && t !== t : tj(e, t, r, n, eb, i);
}
var rj = "[object Map]", nj = "[object Set]", ij = Object.prototype, aj = ij.hasOwnProperty;
function sj(e) {
  if (e == null)
    return !0;
  if (Y0(e) && (Mi(e) || typeof e == "string" || typeof e.splice == "function" || es(e) || U0(e) || Ny(e)))
    return !e.length;
  var t = Bi(e);
  if (t == rj || t == nj)
    return !e.size;
  if (zl(e))
    return !Vy(e).length;
  for (var r in e)
    if (aj.call(e, r))
      return !1;
  return !0;
}
function Sv(e, t) {
  return eb(e, t);
}
var oj = Object.defineProperty, lj = Object.defineProperties, cj = Object.getOwnPropertyDescriptors, kv = Object.getOwnPropertySymbols, uj = Object.prototype.hasOwnProperty, fj = Object.prototype.propertyIsEnumerable, Ov = (e, t, r) => t in e ? oj(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, dj = (e, t) => {
  for (var r in t || (t = {}))
    uj.call(t, r) && Ov(e, r, t[r]);
  if (kv)
    for (var r of kv(t))
      fj.call(t, r) && Ov(e, r, t[r]);
  return e;
}, hj = (e, t) => lj(e, cj(t));
function pj(e) {
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
  }, n = pj(e);
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
      let c = Zf(null);
      me(() => i.chartData, u, { deep: !0 }), me(() => i.options, (g) => {
        c.value && g && (c.value.options = _a(g), p());
      }, { deep: !0 });
      function u(g) {
        if (c.value) {
          let m = c.value;
          Sv(g.labels, c.value.data.labels) || (m.data.labels = g.labels, d()), Sv(g.datasets, c.value.data.datasets) || g.datasets.forEach((y, _) => {
            var x, b;
            if (sj(y))
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
      return ot(f), H2(() => {
        c.value && c.value.destroy();
      }), s({
        canvasRef: o,
        renderChart: f,
        chartInstance: c,
        canvasId: l,
        update: p
      }), () => pi("div", {
        style: hj(dj({
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
var vj = gn("doughnut-chart", "doughnut"), gj = gn("line-chart", "line"), mj = gn("pie-chart", "pie");
gn("polar-chart", "polarArea");
gn("radar-chart", "radar");
gn("bubble-chart", "bubble");
gn("scatter-chart", "scatter");
const xj = /* @__PURE__ */ he({
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
    return (i, a) => (I(), $e(Y(vj), {
      "chart-options": n,
      "chart-data": r,
      width: e.width,
      height: e.height
    }, null, 8, ["chart-options", "chart-data", "width", "height"]));
  }
}), yj = /* @__PURE__ */ he({
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
    return (i, a) => (I(), $e(Y(gj), {
      "chart-options": n,
      "chart-data": r,
      width: e.width,
      height: e.height
    }, null, 8, ["chart-options", "chart-data", "width", "height"]));
  }
}), bj = /* @__PURE__ */ he({
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
    return (i, a) => (I(), $e(Y(mj), {
      "chart-options": n,
      "chart-data": r,
      width: e.width,
      height: e.height
    }, null, 8, ["chart-options", "chart-data", "width", "height"]));
  }
}), Fv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  NgAni: J2,
  NgDatePicker: S6,
  NgDateRangePicker: k6,
  NgDialog: K1,
  NgDoughnutChart: xj,
  NgFixedBar: M6,
  NgForm: Z6,
  NgImg: Q6,
  NgLineChart: yj,
  NgLink: t5,
  NgLoaders: r5,
  NgMap: l5,
  NgOutlineText: h5,
  NgOverlayLoading: Oi,
  NgPagination: p5,
  NgPieChart: bj,
  NgSearch: x5,
  NgSkeleton: C0,
  NgSkeletonGroup: y5,
  NgTable: E5,
  NgToolbar: C5,
  NgUpload: O5,
  NgVisibleLoad: I5
}, Symbol.toStringTag, { value: "Module" })), _j = /* @__PURE__ */ he({
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
    me(() => n.value, () => {
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
}), wj = { class: "lib-notification" }, $j = {
  class: "ml-3",
  style: { overflow: "auto" }
}, Dj = /* @__PURE__ */ he({
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
      ticker: new Dx(100)
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
      return I(), W("div", wj, [
        ae(V2, { name: "lib-notification-list" }, {
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
                    }, null, 8, ["color", "model-value"])) : pe("", !0),
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
                        oe("div", $j, ke(g.content), 1),
                        ae(d),
                        ae(h, {
                          variant: "plain",
                          icon: "mdi-close",
                          color: i(g.type),
                          onClick: Kf((m) => o(g), ["stop"])
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
}), Ej = /* @__PURE__ */ zr(Dj, [["__scopeId", "data-v-73977251"]]), Tv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  NgConfirmLayout: _j,
  NgNotificationLayout: Ej
}, Symbol.toStringTag, { value: "Module" })), Mv = Kt.checkout("listener-group"), Aj = () => {
  let e = !1, t = [], r = () => {
    if (e === !1)
      e = !0, t.forEach((n) => n == null ? void 0 : n.off());
    else
      throw Mv.create("offAll() is failed, because already called.");
  };
  return Et(() => {
    e === !1 && r();
  }), {
    off: () => r(),
    push: (n) => {
      if (e === !1)
        t.push(...n);
      else
        throw Mv.create("push() is failed, because already called offAll().");
    }
  };
}, use = () => {
  const e = Ce(new wx());
  return Et(() => {
    e.clear();
  }), e;
}, fse = (e) => ce(), dse = (e) => Ce(e), Cj = () => {
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
      record: Ao.ifEmpty(n == null ? void 0 : n.record, !1),
      useRearLens: Ao.ifEmpty(n == null ? void 0 : n.useRearLens, !1)
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
function ho(e, t) {
  if (!!!e)
    throw new Error(t);
}
const Sj = 10, tb = 2;
function X0(e) {
  return Yl(e, []);
}
function Yl(e, t) {
  switch (typeof e) {
    case "string":
      return JSON.stringify(e);
    case "function":
      return e.name ? `[function ${e.name}]` : "[function]";
    case "object":
      return kj(e, t);
    default:
      return String(e);
  }
}
function kj(e, t) {
  if (e === null)
    return "null";
  if (t.includes(e))
    return "[Circular]";
  const r = [...t, e];
  if (Oj(e)) {
    const n = e.toJSON();
    if (n !== e)
      return typeof n == "string" ? n : Yl(n, r);
  } else if (Array.isArray(e))
    return Tj(e, r);
  return Fj(e, r);
}
function Oj(e) {
  return typeof e.toJSON == "function";
}
function Fj(e, t) {
  const r = Object.entries(e);
  return r.length === 0 ? "{}" : t.length > tb ? "[" + Mj(e) + "]" : "{ " + r.map(
    ([i, a]) => i + ": " + Yl(a, t)
  ).join(", ") + " }";
}
function Tj(e, t) {
  if (e.length === 0)
    return "[]";
  if (t.length > tb)
    return "[Array]";
  const r = Math.min(Sj, e.length), n = e.length - r, i = [];
  for (let a = 0; a < r; ++a)
    i.push(Yl(e[a], t));
  return n === 1 ? i.push("... 1 more item") : n > 1 && i.push(`... ${n} more items`), "[" + i.join(", ") + "]";
}
function Mj(e) {
  const t = Object.prototype.toString.call(e).replace(/^\[object /, "").replace(/]$/, "");
  if (t === "Object" && typeof e.constructor == "function") {
    const r = e.constructor.name;
    if (typeof r == "string" && r !== "")
      return r;
  }
  return t;
}
class Pj {
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
class rb {
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
const nb = {
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
}, Bj = new Set(Object.keys(nb));
function Pv(e) {
  const t = e == null ? void 0 : e.kind;
  return typeof t == "string" && Bj.has(t);
}
let mi;
(function(e) {
  e.QUERY = "query", e.MUTATION = "mutation", e.SUBSCRIPTION = "subscription";
})(mi || (mi = {}));
let ie;
(function(e) {
  e.NAME = "Name", e.DOCUMENT = "Document", e.OPERATION_DEFINITION = "OperationDefinition", e.VARIABLE_DEFINITION = "VariableDefinition", e.SELECTION_SET = "SelectionSet", e.FIELD = "Field", e.ARGUMENT = "Argument", e.FRAGMENT_SPREAD = "FragmentSpread", e.INLINE_FRAGMENT = "InlineFragment", e.FRAGMENT_DEFINITION = "FragmentDefinition", e.VARIABLE = "Variable", e.INT = "IntValue", e.FLOAT = "FloatValue", e.STRING = "StringValue", e.BOOLEAN = "BooleanValue", e.NULL = "NullValue", e.ENUM = "EnumValue", e.LIST = "ListValue", e.OBJECT = "ObjectValue", e.OBJECT_FIELD = "ObjectField", e.DIRECTIVE = "Directive", e.NAMED_TYPE = "NamedType", e.LIST_TYPE = "ListType", e.NON_NULL_TYPE = "NonNullType", e.SCHEMA_DEFINITION = "SchemaDefinition", e.OPERATION_TYPE_DEFINITION = "OperationTypeDefinition", e.SCALAR_TYPE_DEFINITION = "ScalarTypeDefinition", e.OBJECT_TYPE_DEFINITION = "ObjectTypeDefinition", e.FIELD_DEFINITION = "FieldDefinition", e.INPUT_VALUE_DEFINITION = "InputValueDefinition", e.INTERFACE_TYPE_DEFINITION = "InterfaceTypeDefinition", e.UNION_TYPE_DEFINITION = "UnionTypeDefinition", e.ENUM_TYPE_DEFINITION = "EnumTypeDefinition", e.ENUM_VALUE_DEFINITION = "EnumValueDefinition", e.INPUT_OBJECT_TYPE_DEFINITION = "InputObjectTypeDefinition", e.DIRECTIVE_DEFINITION = "DirectiveDefinition", e.SCHEMA_EXTENSION = "SchemaExtension", e.SCALAR_TYPE_EXTENSION = "ScalarTypeExtension", e.OBJECT_TYPE_EXTENSION = "ObjectTypeExtension", e.INTERFACE_TYPE_EXTENSION = "InterfaceTypeExtension", e.UNION_TYPE_EXTENSION = "UnionTypeExtension", e.ENUM_TYPE_EXTENSION = "EnumTypeExtension", e.INPUT_OBJECT_TYPE_EXTENSION = "InputObjectTypeExtension";
})(ie || (ie = {}));
const Ij = Object.freeze({});
function ib(e, t, r = nb) {
  const n = /* @__PURE__ */ new Map();
  for (const m of Object.values(ie))
    n.set(m, Rj(t, m));
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
      Pv(c) || ho(!1, `Invalid AST Node: ${X0(c)}.`);
      const x = m ? (p = n.get(c.kind)) === null || p === void 0 ? void 0 : p.leave : (v = n.get(c.kind)) === null || v === void 0 ? void 0 : v.enter;
      if (_ = x == null ? void 0 : x.call(t, c, u, f, d, h), _ === Ij)
        break;
      if (_ === !1) {
        if (!m) {
          d.pop();
          continue;
        }
      } else if (_ !== void 0 && (l.push([u, _]), !m))
        if (Pv(_))
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
function Rj(e, t) {
  const r = e[t];
  return typeof r == "object" ? r : typeof r == "function" ? {
    enter: r,
    leave: void 0
  } : {
    enter: e.enter,
    leave: e.leave
  };
}
function cf(e) {
  return e === 9 || e === 32;
}
function ns(e) {
  return e >= 48 && e <= 57;
}
function ab(e) {
  return e >= 97 && e <= 122 || // A-Z
  e >= 65 && e <= 90;
}
function sb(e) {
  return ab(e) || e === 95;
}
function Nj(e) {
  return ab(e) || ns(e) || e === 95;
}
function Lj(e) {
  var t;
  let r = Number.MAX_SAFE_INTEGER, n = null, i = -1;
  for (let s = 0; s < e.length; ++s) {
    var a;
    const o = e[s], l = jj(o);
    l !== o.length && (n = (a = n) !== null && a !== void 0 ? a : s, i = s, s !== 0 && l < r && (r = l));
  }
  return e.map((s, o) => o === 0 ? s : s.slice(r)).slice(
    (t = n) !== null && t !== void 0 ? t : 0,
    i + 1
  );
}
function jj(e) {
  let t = 0;
  for (; t < e.length && cf(e.charCodeAt(t)); )
    ++t;
  return t;
}
function zj(e, t) {
  const r = e.replace(/"""/g, '\\"""'), n = r.split(/\r\n|[\n\r]/g), i = n.length === 1, a = n.length > 1 && n.slice(1).every((h) => h.length === 0 || cf(h.charCodeAt(0))), s = r.endsWith('\\"""'), o = e.endsWith('"') && !s, l = e.endsWith("\\"), c = o || l, u = !(t != null && t.minimize) && // add leading and trailing new lines only if it improves readability
  (!i || e.length > 70 || c || a || s);
  let f = "";
  const d = i && cf(e.charCodeAt(0));
  return (u && !d || a) && (f += `
`), f += r, (u || c) && (f += `
`), '"""' + f + '"""';
}
function Hj(e) {
  return `"${e.replace(Vj, Yj)}"`;
}
const Vj = /[\x00-\x1f\x22\x5c\x7f-\x9f]/g;
function Yj(e) {
  return Wj[e.charCodeAt(0)];
}
const Wj = [
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
function ob(e) {
  return ib(e, qj);
}
const Uj = 80, qj = {
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
      const t = ve("(", Q(e.variableDefinitions, ", "), ")"), r = Q(
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
    leave: ({ variable: e, type: t, defaultValue: r, directives: n }) => e + ": " + t + ve(" = ", r) + ve(" ", Q(n, " "))
  },
  SelectionSet: {
    leave: ({ selections: e }) => Jt(e)
  },
  Field: {
    leave({ alias: e, name: t, arguments: r, directives: n, selectionSet: i }) {
      const a = ve("", e, ": ") + t;
      let s = a + ve("(", Q(r, ", "), ")");
      return s.length > Uj && (s = a + ve(`(
`, po(Q(r, `
`)), `
)`)), Q([s, Q(n, " "), i], " ");
    }
  },
  Argument: {
    leave: ({ name: e, value: t }) => e + ": " + t
  },
  // Fragments
  FragmentSpread: {
    leave: ({ name: e, directives: t }) => "..." + e + ve(" ", Q(t, " "))
  },
  InlineFragment: {
    leave: ({ typeCondition: e, directives: t, selectionSet: r }) => Q(
      [
        "...",
        ve("on ", e),
        Q(t, " "),
        r
      ],
      " "
    )
  },
  FragmentDefinition: {
    leave: ({ name: e, typeCondition: t, variableDefinitions: r, directives: n, selectionSet: i }) => (
      // or removed in the future.
      `fragment ${e}${ve("(", Q(r, ", "), ")")} on ${t} ${ve("", Q(n, " "), " ")}` + i
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
    leave: ({ value: e, block: t }) => t ? zj(e) : Hj(e)
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
    leave: ({ name: e, arguments: t }) => "@" + e + ve("(", Q(t, ", "), ")")
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
    leave: ({ description: e, directives: t, operationTypes: r }) => ve("", e, `
`) + Q(["schema", Q(t, " "), Jt(r)], " ")
  },
  OperationTypeDefinition: {
    leave: ({ operation: e, type: t }) => e + ": " + t
  },
  ScalarTypeDefinition: {
    leave: ({ description: e, name: t, directives: r }) => ve("", e, `
`) + Q(["scalar", t, Q(r, " ")], " ")
  },
  ObjectTypeDefinition: {
    leave: ({ description: e, name: t, interfaces: r, directives: n, fields: i }) => ve("", e, `
`) + Q(
      [
        "type",
        t,
        ve("implements ", Q(r, " & ")),
        Q(n, " "),
        Jt(i)
      ],
      " "
    )
  },
  FieldDefinition: {
    leave: ({ description: e, name: t, arguments: r, type: n, directives: i }) => ve("", e, `
`) + t + (Bv(r) ? ve(`(
`, po(Q(r, `
`)), `
)`) : ve("(", Q(r, ", "), ")")) + ": " + n + ve(" ", Q(i, " "))
  },
  InputValueDefinition: {
    leave: ({ description: e, name: t, type: r, defaultValue: n, directives: i }) => ve("", e, `
`) + Q(
      [t + ": " + r, ve("= ", n), Q(i, " ")],
      " "
    )
  },
  InterfaceTypeDefinition: {
    leave: ({ description: e, name: t, interfaces: r, directives: n, fields: i }) => ve("", e, `
`) + Q(
      [
        "interface",
        t,
        ve("implements ", Q(r, " & ")),
        Q(n, " "),
        Jt(i)
      ],
      " "
    )
  },
  UnionTypeDefinition: {
    leave: ({ description: e, name: t, directives: r, types: n }) => ve("", e, `
`) + Q(
      ["union", t, Q(r, " "), ve("= ", Q(n, " | "))],
      " "
    )
  },
  EnumTypeDefinition: {
    leave: ({ description: e, name: t, directives: r, values: n }) => ve("", e, `
`) + Q(["enum", t, Q(r, " "), Jt(n)], " ")
  },
  EnumValueDefinition: {
    leave: ({ description: e, name: t, directives: r }) => ve("", e, `
`) + Q([t, Q(r, " ")], " ")
  },
  InputObjectTypeDefinition: {
    leave: ({ description: e, name: t, directives: r, fields: n }) => ve("", e, `
`) + Q(["input", t, Q(r, " "), Jt(n)], " ")
  },
  DirectiveDefinition: {
    leave: ({ description: e, name: t, arguments: r, repeatable: n, locations: i }) => ve("", e, `
`) + "directive @" + t + (Bv(r) ? ve(`(
`, po(Q(r, `
`)), `
)`) : ve("(", Q(r, ", "), ")")) + (n ? " repeatable" : "") + " on " + Q(i, " | ")
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
        ve("implements ", Q(t, " & ")),
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
        ve("implements ", Q(t, " & ")),
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
        ve("= ", Q(r, " | "))
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
  return ve(`{
`, po(Q(e, `
`)), `
}`);
}
function ve(e, t, r = "") {
  return t != null && t !== "" ? e + t + r : "";
}
function po(e) {
  return ve("  ", e.replace(/\n/g, `
  `));
}
function Bv(e) {
  var t;
  return (t = e == null ? void 0 : e.some((r) => r.includes(`
`))) !== null && t !== void 0 ? t : !1;
}
function Gj(e) {
  return typeof e == "object" && e !== null;
}
function Kj(e, t) {
  if (!!!e)
    throw new Error(
      t ?? "Unexpected invariant triggered."
    );
}
const Zj = /\r\n|[\n\r]/g;
function uf(e, t) {
  let r = 0, n = 1;
  for (const i of e.body.matchAll(Zj)) {
    if (typeof i.index == "number" || Kj(!1), i.index >= t)
      break;
    r = i.index + i[0].length, n += 1;
  }
  return {
    line: n,
    column: t + 1 - r
  };
}
function Xj(e) {
  return lb(
    e.source,
    uf(e.source, e.start)
  );
}
function lb(e, t) {
  const r = e.locationOffset.column - 1, n = "".padStart(r) + e.body, i = t.line - 1, a = e.locationOffset.line - 1, s = t.line + a, o = t.line === 1 ? r : 0, l = t.column + o, c = `${e.name}:${s}:${l}
`, u = n.split(/\r\n|[\n\r]/g), f = u[i];
  if (f.length > 120) {
    const d = Math.floor(l / 80), h = l % 80, p = [];
    for (let v = 0; v < f.length; v += 80)
      p.push(f.slice(v, v + 80));
    return c + Iv([
      [`${s} |`, p[0]],
      ...p.slice(1, d + 1).map((v) => ["|", v]),
      ["|", "^".padStart(h)],
      ["|", p[d + 1]]
    ]);
  }
  return c + Iv([
    // Lines specified like this: ["prefix", "string"],
    [`${s - 1} |`, u[i - 1]],
    [`${s} |`, f],
    ["|", "^".padStart(l)],
    [`${s + 1} |`, u[i + 1]]
  ]);
}
function Iv(e) {
  const t = e.filter(([n, i]) => i !== void 0), r = Math.max(...t.map(([n]) => n.length));
  return t.map(([n, i]) => n.padStart(r) + (i ? " " + i : "")).join(`
`);
}
function Jj(e) {
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
    const { nodes: s, source: o, positions: l, path: c, originalError: u, extensions: f } = Jj(r);
    super(t), this.name = "GraphQLError", this.path = c ?? void 0, this.originalError = u ?? void 0, this.nodes = Rv(
      Array.isArray(s) ? s : s ? [s] : void 0
    );
    const d = Rv(
      (n = this.nodes) === null || n === void 0 ? void 0 : n.map((p) => p.loc).filter((p) => p != null)
    );
    this.source = o ?? (d == null || (i = d[0]) === null || i === void 0 ? void 0 : i.source), this.positions = l ?? (d == null ? void 0 : d.map((p) => p.start)), this.locations = l && o ? l.map((p) => uf(o, p)) : d == null ? void 0 : d.map((p) => uf(p.source, p.start));
    const h = Gj(
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

` + Xj(r.loc));
    else if (this.source && this.locations)
      for (const r of this.locations)
        t += `

` + lb(this.source, r);
    return t;
  }
  toJSON() {
    const t = {
      message: this.message
    };
    return this.locations != null && (t.locations = this.locations), this.path != null && (t.path = this.path), this.extensions != null && Object.keys(this.extensions).length > 0 && (t.extensions = this.extensions), t;
  }
}
function Rv(e) {
  return e === void 0 || e.length === 0 ? void 0 : e;
}
function ft(e, t, r) {
  return new is(`Syntax Error: ${r}`, {
    source: e,
    positions: [t]
  });
}
let ff;
(function(e) {
  e.QUERY = "QUERY", e.MUTATION = "MUTATION", e.SUBSCRIPTION = "SUBSCRIPTION", e.FIELD = "FIELD", e.FRAGMENT_DEFINITION = "FRAGMENT_DEFINITION", e.FRAGMENT_SPREAD = "FRAGMENT_SPREAD", e.INLINE_FRAGMENT = "INLINE_FRAGMENT", e.VARIABLE_DEFINITION = "VARIABLE_DEFINITION", e.SCHEMA = "SCHEMA", e.SCALAR = "SCALAR", e.OBJECT = "OBJECT", e.FIELD_DEFINITION = "FIELD_DEFINITION", e.ARGUMENT_DEFINITION = "ARGUMENT_DEFINITION", e.INTERFACE = "INTERFACE", e.UNION = "UNION", e.ENUM = "ENUM", e.ENUM_VALUE = "ENUM_VALUE", e.INPUT_OBJECT = "INPUT_OBJECT", e.INPUT_FIELD_DEFINITION = "INPUT_FIELD_DEFINITION";
})(ff || (ff = {}));
let z;
(function(e) {
  e.SOF = "<SOF>", e.EOF = "<EOF>", e.BANG = "!", e.DOLLAR = "$", e.AMP = "&", e.PAREN_L = "(", e.PAREN_R = ")", e.SPREAD = "...", e.COLON = ":", e.EQUALS = "=", e.AT = "@", e.BRACKET_L = "[", e.BRACKET_R = "]", e.BRACE_L = "{", e.PIPE = "|", e.BRACE_R = "}", e.NAME = "Name", e.INT = "Int", e.FLOAT = "Float", e.STRING = "String", e.BLOCK_STRING = "BlockString", e.COMMENT = "Comment";
})(z || (z = {}));
class Qj {
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
    const r = new rb(z.SOF, 0, 0, 0, 0);
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
          const r = tz(this, t.end);
          t.next = r, r.prev = t, t = r;
        }
      while (t.kind === z.COMMENT);
    return t;
  }
}
function ez(e) {
  return e === z.BANG || e === z.DOLLAR || e === z.AMP || e === z.PAREN_L || e === z.PAREN_R || e === z.SPREAD || e === z.COLON || e === z.EQUALS || e === z.AT || e === z.BRACKET_L || e === z.BRACKET_R || e === z.BRACE_L || e === z.PIPE || e === z.BRACE_R;
}
function Qi(e) {
  return e >= 0 && e <= 55295 || e >= 57344 && e <= 1114111;
}
function Wl(e, t) {
  return cb(e.charCodeAt(t)) && ub(e.charCodeAt(t + 1));
}
function cb(e) {
  return e >= 55296 && e <= 56319;
}
function ub(e) {
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
  return new rb(t, r, n, a, s, i);
}
function tz(e, t) {
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
        return rz(e, i);
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
        return r.charCodeAt(i + 1) === 34 && r.charCodeAt(i + 2) === 34 ? lz(e, i) : iz(e, i);
    }
    if (ns(a) || a === 45)
      return nz(e, i, a);
    if (sb(a))
      return cz(e, i);
    throw ft(
      e.source,
      i,
      a === 39 ? `Unexpected single quote character ('), did you mean to use a double quote (")?` : Qi(a) || Wl(r, i) ? `Unexpected character: ${Vn(e, i)}.` : `Invalid character: ${Vn(e, i)}.`
    );
  }
  return Je(e, z.EOF, n, n);
}
function rz(e, t) {
  const r = e.source.body, n = r.length;
  let i = t + 1;
  for (; i < n; ) {
    const a = r.charCodeAt(i);
    if (a === 10 || a === 13)
      break;
    if (Qi(a))
      ++i;
    else if (Wl(r, i))
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
function nz(e, t, r) {
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
    i = Ec(e, i, a), a = n.charCodeAt(i);
  if (a === 46 && (s = !0, a = n.charCodeAt(++i), i = Ec(e, i, a), a = n.charCodeAt(i)), (a === 69 || a === 101) && (s = !0, a = n.charCodeAt(++i), (a === 43 || a === 45) && (a = n.charCodeAt(++i)), i = Ec(e, i, a), a = n.charCodeAt(i)), a === 46 || sb(a))
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
function Ec(e, t, r) {
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
function iz(e, t) {
  const r = e.source.body, n = r.length;
  let i = t + 1, a = i, s = "";
  for (; i < n; ) {
    const o = r.charCodeAt(i);
    if (o === 34)
      return s += r.slice(a, i), Je(e, z.STRING, t, i + 1, s);
    if (o === 92) {
      s += r.slice(a, i);
      const l = r.charCodeAt(i + 1) === 117 ? r.charCodeAt(i + 2) === 123 ? az(e, i) : sz(e, i) : oz(e, i);
      s += l.value, i += l.size, a = i;
      continue;
    }
    if (o === 10 || o === 13)
      break;
    if (Qi(o))
      ++i;
    else if (Wl(r, i))
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
function az(e, t) {
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
    if (n = n << 4 | Oa(a), n < 0)
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
function sz(e, t) {
  const r = e.source.body, n = Nv(r, t + 2);
  if (Qi(n))
    return {
      value: String.fromCodePoint(n),
      size: 6
    };
  if (cb(n) && r.charCodeAt(t + 6) === 92 && r.charCodeAt(t + 7) === 117) {
    const i = Nv(r, t + 8);
    if (ub(i))
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
function Nv(e, t) {
  return Oa(e.charCodeAt(t)) << 12 | Oa(e.charCodeAt(t + 1)) << 8 | Oa(e.charCodeAt(t + 2)) << 4 | Oa(e.charCodeAt(t + 3));
}
function Oa(e) {
  return e >= 48 && e <= 57 ? e - 48 : e >= 65 && e <= 70 ? e - 55 : e >= 97 && e <= 102 ? e - 87 : -1;
}
function oz(e, t) {
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
function lz(e, t) {
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
        Lj(l).join(`
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
    else if (Wl(r, a))
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
function cz(e, t) {
  const r = e.source.body, n = r.length;
  let i = t + 1;
  for (; i < n; ) {
    const a = r.charCodeAt(i);
    if (Nj(a))
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
const uz = (
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
        const s = X0(t);
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
class fb {
  constructor(t, r = "GraphQL request", n = {
    line: 1,
    column: 1
  }) {
    typeof t == "string" || ho(!1, `Body must be a string. Received: ${X0(t)}.`), this.body = t, this.name = r, this.locationOffset = n, this.locationOffset.line > 0 || ho(
      !1,
      "line in locationOffset is 1-indexed and must be positive."
    ), this.locationOffset.column > 0 || ho(
      !1,
      "column in locationOffset is 1-indexed and must be positive."
    );
  }
  get [Symbol.toStringTag]() {
    return "Source";
  }
}
function fz(e) {
  return uz(e, fb);
}
function dz(e, t) {
  return new hz(e, t).parseDocument();
}
class hz {
  constructor(t, r) {
    const n = fz(t) ? t : new fb(t);
    this._lexer = new Qj(n), this._options = r;
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
    if (Object.prototype.hasOwnProperty.call(ff, r.value))
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
    return ((n = this._options) === null || n === void 0 ? void 0 : n.noLocation) !== !0 && (r.loc = new Pj(
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
      `Expected ${db(t)}, found ${Us(r)}.`
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
  return db(e.kind) + (t != null ? ` "${t}"` : "");
}
function db(e) {
  return ez(e) ? `"${e}"` : e;
}
function st(e, t) {
  return t.tag = e, t;
}
function rr() {
}
function pz(e) {
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
function vz() {
}
function gz(e) {
  e(0);
}
function mz(e) {
  return e(0);
}
function hb(e) {
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
            }), a = []) : (i || s ? i = !1 : (i = !0, n(0)), a.forEach(mz));
          }
        ])
      );
    };
  };
}
function xz(e) {
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
function yz(e) {
  e(0);
}
function bz(e) {
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
function Na(e) {
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
function _z() {
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
function Lv(e) {
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
function pb(e) {
  return function(t) {
    let r = vz, n = !1;
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
function jv() {
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
      t || (t = !0, e.forEach(gz));
    }
  };
}
function La(e) {
  return function(t) {
    return function(r) {
      return t(function(n) {
        n = typeof n == "number" ? 0 : n.tag ? st(1, [e(n[0])]) : st(0, [n[0]]), r(n);
      });
    };
  };
}
function ll(e) {
  return hb(xz)(pz(e));
}
function zv(e) {
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
function Hv(e) {
  return function(t) {
    return function(r) {
      return t(function(n) {
        typeof n == "number" || n.tag ? r(n) : (r(n), e());
      });
    };
  };
}
function wz(e) {
  return Na(_z)(e);
}
function cl(e) {
  function t(a) {
    typeof a == "number" ? (r.forEach(yz), r = []) : a.tag ? (i = !1, r.forEach(function(s) {
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
function Vv(e) {
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
function vb(e) {
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
function $z(e) {
  return typeof e == "string" ? new is(e) : typeof e == "object" && e.message ? new is(e.message, e.nodes, e.source, e.positions, e.path, e, e.extensions || {}) : e;
}
var J0 = function(e) {
  function t(r) {
    var n = r.networkError, i = r.response, a = (r.graphQLErrors || []).map($z), s = function(l, c) {
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
function gb(e, t) {
  e |= 0;
  for (var r = 0, n = 0 | t.length; r < n; r++)
    e = (e << 5) + e + t.charCodeAt(r);
  return e;
}
function Yv(e) {
  return gb(5381, e) >>> 0;
}
var vo = /* @__PURE__ */ new Set(), Wv = /* @__PURE__ */ new WeakMap();
function Fa(e) {
  if (e === null || vo.has(e))
    return "null";
  if (typeof e != "object")
    return JSON.stringify(e) || "";
  if (e.toJSON)
    return Fa(e.toJSON());
  if (Array.isArray(e)) {
    for (var t = "[", r = 0, n = e.length; r < n; r++) {
      r > 0 && (t += ",");
      var i = Fa(e[r]);
      t += i.length > 0 ? i : "null";
    }
    return t += "]";
  }
  var a = Object.keys(e).sort();
  if (!a.length && e.constructor && e.constructor !== Object) {
    var s = Wv.get(e) || Math.random().toString(36).slice(2);
    return Wv.set(e, s), '{"__key":"' + s + '"}';
  }
  vo.add(e);
  for (var o = "{", l = 0, c = a.length; l < c; l++) {
    var u = a[l], f = Fa(e[u]);
    f && (o.length > 1 && (o += ","), o += Fa(u) + ":" + f);
  }
  return vo.delete(e), o += "}";
}
function df(e) {
  return vo.clear(), Fa(e);
}
var Dz = /("{3}[\s\S]*"{3}|"(?:\\.|[^"])*")/g, Ez = /([\s,]|#[^\n\r]+)+/g;
function Az(e, t) {
  return t % 2 == 0 ? e.replace(Ez, " ").trim() : e;
}
function Ac(e) {
  var t = (typeof e != "string" ? e.loc && e.loc.source.body || ob(e) : e).split(Dz).map(Az).join("");
  if (typeof e != "string") {
    var r = "definitions" in e && xb(e);
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
var Cc = /* @__PURE__ */ new Map();
function mb(e) {
  var t, r;
  return typeof e == "string" ? (t = Yv(Ac(e)), r = Cc.get(t) || dz(e, {
    noLocation: !0
  })) : (t = e.__key || Yv(Ac(e)), r = Cc.get(t) || e), r.loc || Ac(r), r.__key = t, Cc.set(t, r), r;
}
function Sc(e, t) {
  t || (t = {});
  var r = mb(e);
  return {
    key: gb(r.__key, df(t)) >>> 0,
    query: r,
    variables: t
  };
}
function xb(e) {
  for (var t = 0, r = e.definitions.length; t < r; t++) {
    var n = e.definitions[t];
    if (n.kind === ie.OPERATION_DEFINITION && n.name)
      return n.name.value;
  }
}
function Cz(e) {
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
function kc(e, t, r) {
  if (!("data" in t) && !("errors" in t) || "path" in t)
    throw new Error("No Content");
  return {
    operation: e,
    data: t.data,
    error: Array.isArray(t.errors) ? new J0({
      graphQLErrors: t.errors,
      response: r
    }) : void 0,
    extensions: typeof t.extensions == "object" && t.extensions || void 0,
    hasNext: !!t.hasNext
  };
}
function Sz(e, t, r) {
  var n = qe({}, e);
  if (n.hasNext = !!t.hasNext, !("path" in t))
    return "data" in t && (n.data = t.data), n;
  Array.isArray(t.errors) && (n.error = new J0({
    graphQLErrors: n.error ? n.error.graphQLErrors.concat(t.errors) : t.errors,
    response: r
  }));
  for (var i = n.data = qe({}, n.data), a = 0, s; a < t.path.length; )
    i = i[s = t.path[a++]] = Array.isArray(i[s]) ? [].concat(i[s]) : qe({}, i[s]);
  return qe(i, t.data), n;
}
function Uv(e, t, r) {
  return {
    operation: e,
    data: void 0,
    error: new J0({
      networkError: t,
      response: r
    }),
    extensions: void 0
  };
}
function yb(e) {
  return e.kind === "query" && !!e.context.preferGetMethod;
}
function kz(e) {
  return {
    query: ob(e.query),
    operationName: xb(e.query),
    variables: e.variables || void 0,
    extensions: void 0
  };
}
function Oz(e, t) {
  var r = yb(e), n = e.context.url;
  if (!r || !t)
    return n;
  var i = [];
  t.operationName && i.push("operationName=" + encodeURIComponent(t.operationName)), t.query && i.push("query=" + encodeURIComponent(t.query.replace(/#[^\n\r]+/g, " ").trim())), t.variables && i.push("variables=" + encodeURIComponent(df(t.variables))), t.extensions && i.push("extensions=" + encodeURIComponent(df(t.extensions)));
  var a = n + "?" + i.join("&");
  return a.length > 2047 ? (e.context.preferGetMethod = !1, n) : a;
}
function Fz(e, t) {
  var r = yb(e), n = {
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
var Oc = typeof Symbol < "u" ? Symbol.asyncIterator : null, Tz = typeof TextDecoder < "u" ? new TextDecoder() : null, Mz = /content-type:[^\r\n]*application\/json/i, Pz = /boundary="?([^=";]+)"?/i;
function Bz(e, t, r) {
  var n = r.redirect === "manual" ? 400 : 300, i = e.context.fetch;
  return pb(function(a) {
    var s = a.next, o = a.complete, l = typeof AbortController < "u" ? new AbortController() : null;
    l && (r.signal = l.signal);
    var c = !1;
    function u(p, v, g) {
      var m = g.headers && g.headers.get("Content-Type") || "";
      if (/text\//i.test(m))
        return g.text().then(function(S) {
          p(Uv(v, new Error(S), g));
        });
      if (!/multipart\/mixed/i.test(m))
        return g.text().then(function(S) {
          p(kc(v, JSON.parse(S), g));
        });
      var y = "---", _ = m.match(Pz);
      _ && (y = "--" + _[1]);
      var x, b = function() {
      };
      if (Oc && g[Oc]) {
        var w = g[Oc]();
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
            return N.constructor.name === "Buffer" ? N.toString() : Tz.decode(N);
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
              if (Mz.test(Z))
                try {
                  T = JSON.parse(B), D = A = A ? Sz(A, T, g) : kc(v, T, g);
                } catch {
                }
              if (K.slice(0, 2) === "--" || T && !T.hasNext) {
                if (!A)
                  return p(kc(v, {}, g));
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
      var v = Uv(e, d && h.statusText ? new Error(h.statusText) : p, h);
      s(v), o();
    }), function() {
      f = !0, l && l.abort();
    };
  });
}
function hf(e, t) {
  if (Array.isArray(e))
    for (var r = 0; r < e.length; r++)
      hf(e[r], t);
  else if (typeof e == "object" && e !== null)
    for (var n in e)
      n === "__typename" && typeof e[n] == "string" ? t[e[n]] = 0 : hf(e[n], t);
  return t;
}
function Iz(e) {
  return Object.keys(hf(e, {}));
}
var qv = function(e) {
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
}, Gv = /* @__PURE__ */ new Map();
function Rz(e) {
  var t = mb(e), r = Gv.get(t.__key);
  return r || (r = ib(t, {
    Field: qv,
    InlineFragment: qv
  }), Object.defineProperty(r, "__key", {
    value: t.__key,
    enumerable: !1
  }), Gv.set(t.__key, r)), r;
}
function pf(e) {
  return !e || typeof e != "object" ? e : Object.keys(e).reduce(function(t, r) {
    var n = e[r];
    return r === "__typename" ? Object.defineProperty(t, "__typename", {
      enumerable: !1,
      value: n
    }) : Array.isArray(n) ? t[r] = n.map(pf) : n && typeof n == "object" && "__typename" in n ? t[r] = pf(n) : t[r] = n, t;
  }, Array.isArray(e) ? [] : {});
}
function Kv(e) {
  return e.toPromise = function() {
    return new Promise(function(t) {
      var r = Na(function(n) {
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
function Zv(e, t) {
  return as(e.kind, e, qe({}, e.context, {
    meta: qe({}, e.context.meta, t)
  }));
}
function bb() {
}
function Fc(e) {
  var t = e.kind;
  return t !== "mutation" && t !== "query";
}
function Nz(e) {
  var t = e.forward, r = e.client, n = e.dispatchDebug, i = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ Object.create(null);
  function s(l) {
    var c = as(l.kind, l);
    return c.query = Rz(l.query), c;
  }
  function o(l) {
    var c = l.context.requestPolicy;
    return l.kind === "query" && c !== "network-only" && (c === "cache-only" || i.has(l.key));
  }
  return function(l) {
    var c = cl(l), u = La(function(d) {
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
        operation: Zv(d, {
          cacheOutcome: h ? "hit" : "miss"
        })
      });
      return d.context.requestPolicy === "cache-and-network" && (p.stale = !0, Xv(r, d)), p;
    })(Vt(function(d) {
      return !Fc(d) && o(d);
    })(c)), f = xs(function(d) {
      var h = d.operation;
      if (h) {
        var p = Iz(d.data).concat(h.context.additionalTypenames || []);
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
            i.has(b) && (h = i.get(b).operation, i.delete(b), Xv(r, h));
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
    })(La(function(d) {
      return Zv(d, {
        cacheOutcome: "miss"
      });
    })(ll([La(s)(Vt(function(d) {
      return !Fc(d) && !o(d);
    })(c)), Vt(function(d) {
      return Fc(d);
    })(c)])))));
    return ll([u, f]);
  };
}
function Xv(e, t) {
  return e.reexecuteOperation(as(t.kind, t, qe({}, t.context, {
    requestPolicy: "network-only"
  })));
}
function Lz(e) {
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
function jz(e) {
  var t = e.forward, r = e.dispatchDebug;
  return function(n) {
    var i = cl(n), a = hb(function(o) {
      var l = o.key, c = Vt(function(h) {
        return h.kind === "teardown" && h.key === l;
      })(i), u = kz(o), f = Oz(o, u), d = Fz(o, u);
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
      })(vb(c)(Bz(o, f, d)));
    })(Vt(function(o) {
      return o.kind === "query" || o.kind === "mutation";
    })(i)), s = t(Vt(function(o) {
      return o.kind !== "query" && o.kind !== "mutation";
    })(i));
    return ll([a, s]);
  };
}
function _b(e) {
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
_b({
  dispatchDebug: bb
});
function zz(e) {
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
var Hz = [Lz, Nz, jz], Vz = function e(t) {
  if (process.env.NODE_ENV !== "production" && !t.url)
    throw new Error("You are creating an urql-client without a url.");
  var r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), i = [], a = jv(), s = a.source, o = a.next, l = !1;
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
    return d.maskTypename && (x = La(function(b) {
      return qe({}, b, {
        data: pf(b.data)
      });
    })(x)), _.kind === "mutation" ? Vv(1)(Hv(function() {
      return o(_);
    })(x)) : cl(zv(function() {
      r.delete(_.key), n.delete(_.key);
      for (var b = i.length - 1; b >= 0; b--)
        i[b].key === _.key && i.splice(b, 1);
      o(as("teardown", _, _.context));
    })(xs(function(b) {
      r.set(_.key, b);
    })(bz(function(b) {
      return _.kind !== "query" || b.stale ? Lv(b) : ll([Lv(b), La(function() {
        return qe({}, b, {
          stale: !0
        });
      })(Vv(1)(Vt(function(w) {
        return w.kind === "query" && w.key === _.key && w.context.requestPolicy !== "cache-only";
      })(s)))]);
    })(vb(Vt(function(b) {
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
      var E = Cz(b.query);
      if (process.env.NODE_ENV !== "production" && x !== "teardown" && E !== x)
        throw new Error('Expected operation of type "' + x + '" but found "' + E + '"');
      var $ = d.createOperationContext(w);
      return x === "mutation" && ($._instance = []), as(x, b, $);
    },
    executeRequestOperation: function(x) {
      return x.kind === "mutation" ? u(x) : pb(function(b) {
        var w = n.get(x.key);
        w || n.set(x.key, w = u(x));
        var E = x.context.requestPolicy === "cache-and-network" || x.context.requestPolicy === "network-only";
        return Na(b.next)(zv(function() {
          l = !1, b.complete();
        })(Hv(function() {
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
      })), Kv(d.executeQuery(Sc(x, b), w));
    },
    readQuery: function(x, b, w) {
      var E = null;
      return Na(function($) {
        E = $;
      })(d.query(x, b, w)).unsubscribe(), E;
    },
    subscription: function(x, b, w) {
      return d.executeSubscription(Sc(x, b), w);
    },
    mutation: function(x, b, w) {
      return Kv(d.executeMutation(Sc(x, b), w));
    }
  }), h = bb;
  if (process.env.NODE_ENV !== "production") {
    var p = jv(), v = p.next, g = p.source;
    d.subscribeToDebugTarget = function(_) {
      return Na(_)(g);
    }, h = v;
  }
  var m = zz(t.exchanges !== void 0 ? t.exchanges : Hz), y = cl(m({
    client: d,
    dispatchDebug: h,
    forward: _b({
      dispatchDebug: h
    })
  })(s));
  return wz(y), d;
}, Yz = Vz, le = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ea(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Wz(e) {
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
class Uz {
  constructor(t, r) {
    G(this, "_resultType", null);
    G(this, "hooks", new $x());
    G(this, "client");
    G(this, "documents");
    this.documents = r, this.client = Yz({
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
      if (Ao.getType(o) === "object") {
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
var qz = function() {
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
}, Jv = typeof Symbol < "u" && Symbol, Gz = qz, Kz = function() {
  return typeof Jv != "function" || typeof Symbol != "function" || typeof Jv("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : Gz();
}, Qv = {
  foo: {}
}, Zz = Object, Xz = function() {
  return { __proto__: Qv }.foo === Qv.foo && !({ __proto__: null } instanceof Zz);
}, Jz = "Function.prototype.bind called on incompatible ", Qz = Object.prototype.toString, eH = Math.max, tH = "[object Function]", eg = function(t, r) {
  for (var n = [], i = 0; i < t.length; i += 1)
    n[i] = t[i];
  for (var a = 0; a < r.length; a += 1)
    n[a + t.length] = r[a];
  return n;
}, rH = function(t, r) {
  for (var n = [], i = r || 0, a = 0; i < t.length; i += 1, a += 1)
    n[a] = t[i];
  return n;
}, nH = function(e, t) {
  for (var r = "", n = 0; n < e.length; n += 1)
    r += e[n], n + 1 < e.length && (r += t);
  return r;
}, iH = function(t) {
  var r = this;
  if (typeof r != "function" || Qz.apply(r) !== tH)
    throw new TypeError(Jz + r);
  for (var n = rH(arguments, 1), i, a = function() {
    if (this instanceof i) {
      var u = r.apply(
        this,
        eg(n, arguments)
      );
      return Object(u) === u ? u : this;
    }
    return r.apply(
      t,
      eg(n, arguments)
    );
  }, s = eH(0, r.length - n.length), o = [], l = 0; l < s; l++)
    o[l] = "$" + l;
  if (i = Function("binder", "return function (" + nH(o, ",") + "){ return binder.apply(this,arguments); }")(a), r.prototype) {
    var c = function() {
    };
    c.prototype = r.prototype, i.prototype = new c(), c.prototype = null;
  }
  return i;
}, aH = iH, Q0 = Function.prototype.bind || aH, sH = Function.prototype.call, oH = Object.prototype.hasOwnProperty, lH = Q0, cH = lH.call(sH, oH), ge, Ii = SyntaxError, wb = Function, $i = TypeError, Tc = function(e) {
  try {
    return wb('"use strict"; return (' + e + ").constructor;")();
  } catch {
  }
}, Bn = Object.getOwnPropertyDescriptor;
if (Bn)
  try {
    Bn({}, "");
  } catch {
    Bn = null;
  }
var Mc = function() {
  throw new $i();
}, uH = Bn ? function() {
  try {
    return arguments.callee, Mc;
  } catch {
    try {
      return Bn(arguments, "callee").get;
    } catch {
      return Mc;
    }
  }
}() : Mc, si = Kz(), fH = Xz(), nt = Object.getPrototypeOf || (fH ? function(e) {
  return e.__proto__;
} : null), di = {}, dH = typeof Uint8Array > "u" || !nt ? ge : nt(Uint8Array), In = {
  "%AggregateError%": typeof AggregateError > "u" ? ge : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer > "u" ? ge : ArrayBuffer,
  "%ArrayIteratorPrototype%": si && nt ? nt([][Symbol.iterator]()) : ge,
  "%AsyncFromSyncIteratorPrototype%": ge,
  "%AsyncFunction%": di,
  "%AsyncGenerator%": di,
  "%AsyncGeneratorFunction%": di,
  "%AsyncIteratorPrototype%": di,
  "%Atomics%": typeof Atomics > "u" ? ge : Atomics,
  "%BigInt%": typeof BigInt > "u" ? ge : BigInt,
  "%BigInt64Array%": typeof BigInt64Array > "u" ? ge : BigInt64Array,
  "%BigUint64Array%": typeof BigUint64Array > "u" ? ge : BigUint64Array,
  "%Boolean%": Boolean,
  "%DataView%": typeof DataView > "u" ? ge : DataView,
  "%Date%": Date,
  "%decodeURI%": decodeURI,
  "%decodeURIComponent%": decodeURIComponent,
  "%encodeURI%": encodeURI,
  "%encodeURIComponent%": encodeURIComponent,
  "%Error%": Error,
  "%eval%": eval,
  // eslint-disable-line no-eval
  "%EvalError%": EvalError,
  "%Float32Array%": typeof Float32Array > "u" ? ge : Float32Array,
  "%Float64Array%": typeof Float64Array > "u" ? ge : Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? ge : FinalizationRegistry,
  "%Function%": wb,
  "%GeneratorFunction%": di,
  "%Int8Array%": typeof Int8Array > "u" ? ge : Int8Array,
  "%Int16Array%": typeof Int16Array > "u" ? ge : Int16Array,
  "%Int32Array%": typeof Int32Array > "u" ? ge : Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": si && nt ? nt(nt([][Symbol.iterator]())) : ge,
  "%JSON%": typeof JSON == "object" ? JSON : ge,
  "%Map%": typeof Map > "u" ? ge : Map,
  "%MapIteratorPrototype%": typeof Map > "u" || !si || !nt ? ge : nt((/* @__PURE__ */ new Map())[Symbol.iterator]()),
  "%Math%": Math,
  "%Number%": Number,
  "%Object%": Object,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise > "u" ? ge : Promise,
  "%Proxy%": typeof Proxy > "u" ? ge : Proxy,
  "%RangeError%": RangeError,
  "%ReferenceError%": ReferenceError,
  "%Reflect%": typeof Reflect > "u" ? ge : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set > "u" ? ge : Set,
  "%SetIteratorPrototype%": typeof Set > "u" || !si || !nt ? ge : nt((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? ge : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": si && nt ? nt(""[Symbol.iterator]()) : ge,
  "%Symbol%": si ? Symbol : ge,
  "%SyntaxError%": Ii,
  "%ThrowTypeError%": uH,
  "%TypedArray%": dH,
  "%TypeError%": $i,
  "%Uint8Array%": typeof Uint8Array > "u" ? ge : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? ge : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array > "u" ? ge : Uint16Array,
  "%Uint32Array%": typeof Uint32Array > "u" ? ge : Uint32Array,
  "%URIError%": URIError,
  "%WeakMap%": typeof WeakMap > "u" ? ge : WeakMap,
  "%WeakRef%": typeof WeakRef > "u" ? ge : WeakRef,
  "%WeakSet%": typeof WeakSet > "u" ? ge : WeakSet
};
if (nt)
  try {
    null.error;
  } catch (e) {
    var hH = nt(nt(e));
    In["%Error.prototype%"] = hH;
  }
var pH = function e(t) {
  var r;
  if (t === "%AsyncFunction%")
    r = Tc("async function () {}");
  else if (t === "%GeneratorFunction%")
    r = Tc("function* () {}");
  else if (t === "%AsyncGeneratorFunction%")
    r = Tc("async function* () {}");
  else if (t === "%AsyncGenerator%") {
    var n = e("%AsyncGeneratorFunction%");
    n && (r = n.prototype);
  } else if (t === "%AsyncIteratorPrototype%") {
    var i = e("%AsyncGenerator%");
    i && nt && (r = nt(i.prototype));
  }
  return In[t] = r, r;
}, tg = {
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
}, ys = Q0, ul = cH, vH = ys.call(Function.call, Array.prototype.concat), gH = ys.call(Function.apply, Array.prototype.splice), rg = ys.call(Function.call, String.prototype.replace), fl = ys.call(Function.call, String.prototype.slice), mH = ys.call(Function.call, RegExp.prototype.exec), xH = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, yH = /\\(\\)?/g, bH = function(t) {
  var r = fl(t, 0, 1), n = fl(t, -1);
  if (r === "%" && n !== "%")
    throw new Ii("invalid intrinsic syntax, expected closing `%`");
  if (n === "%" && r !== "%")
    throw new Ii("invalid intrinsic syntax, expected opening `%`");
  var i = [];
  return rg(t, xH, function(a, s, o, l) {
    i[i.length] = o ? rg(l, yH, "$1") : s || a;
  }), i;
}, _H = function(t, r) {
  var n = t, i;
  if (ul(tg, n) && (i = tg[n], n = "%" + i[0] + "%"), ul(In, n)) {
    var a = In[n];
    if (a === di && (a = pH(n)), typeof a > "u" && !r)
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
  if (mH(/^%?[^%]*%?$/, t) === null)
    throw new Ii("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var n = bH(t), i = n.length > 0 ? n[0] : "", a = _H("%" + i + "%", r), s = a.name, o = a.value, l = !1, c = a.alias;
  c && (i = c[0], gH(n, vH([0, 1], c)));
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
}, $b = { exports: {} }, wH = Zn, vf = wH("%Object.defineProperty%", !0), gf = function() {
  if (vf)
    try {
      return vf({}, "a", { value: 1 }), !0;
    } catch {
      return !1;
    }
  return !1;
};
gf.hasArrayLengthDefineBug = function() {
  if (!gf())
    return null;
  try {
    return vf([], "length", { value: 1 }).length !== 1;
  } catch {
    return !0;
  }
};
var Db = gf, $H = Zn, go = $H("%Object.getOwnPropertyDescriptor%", !0);
if (go)
  try {
    go([], "length");
  } catch {
    go = null;
  }
var Eb = go, DH = Db(), ed = Zn, ja = DH && ed("%Object.defineProperty%", !0);
if (ja)
  try {
    ja({}, "a", { value: 1 });
  } catch {
    ja = !1;
  }
var EH = ed("%SyntaxError%"), oi = ed("%TypeError%"), ng = Eb, AH = function(t, r, n) {
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
  var i = arguments.length > 3 ? arguments[3] : null, a = arguments.length > 4 ? arguments[4] : null, s = arguments.length > 5 ? arguments[5] : null, o = arguments.length > 6 ? arguments[6] : !1, l = !!ng && ng(t, r);
  if (ja)
    ja(t, r, {
      configurable: s === null && l ? l.configurable : !s,
      enumerable: i === null && l ? l.enumerable : !i,
      value: n,
      writable: a === null && l ? l.writable : !a
    });
  else if (o || !i && !a && !s)
    t[r] = n;
  else
    throw new EH("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
}, Ab = Zn, ig = AH, CH = Db(), ag = Eb, sg = Ab("%TypeError%"), SH = Ab("%Math.floor%"), kH = function(t, r) {
  if (typeof t != "function")
    throw new sg("`fn` is not a function");
  if (typeof r != "number" || r < 0 || r > 4294967295 || SH(r) !== r)
    throw new sg("`length` must be a positive 32-bit integer");
  var n = arguments.length > 2 && !!arguments[2], i = !0, a = !0;
  if ("length" in t && ag) {
    var s = ag(t, "length");
    s && !s.configurable && (i = !1), s && !s.writable && (a = !1);
  }
  return (i || a || !n) && (CH ? ig(
    /** @type {Parameters<define>[0]} */
    t,
    "length",
    r,
    !0,
    !0
  ) : ig(
    /** @type {Parameters<define>[0]} */
    t,
    "length",
    r
  )), t;
};
(function(e) {
  var t = Q0, r = Zn, n = kH, i = r("%TypeError%"), a = r("%Function.prototype.apply%"), s = r("%Function.prototype.call%"), o = r("%Reflect.apply%", !0) || t.call(s, a), l = r("%Object.defineProperty%", !0), c = r("%Math.max%");
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
})($b);
var OH = $b.exports, Cb = Zn, Sb = OH, FH = Sb(Cb("String.prototype.indexOf")), TH = function(t, r) {
  var n = Cb(t, !!r);
  return typeof n == "function" && FH(t, ".prototype.") > -1 ? Sb(n) : n;
};
const MH = {}, PH = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: MH
}, Symbol.toStringTag, { value: "Module" })), kb = /* @__PURE__ */ Wz(PH);
var td = typeof Map == "function" && Map.prototype, Pc = Object.getOwnPropertyDescriptor && td ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, dl = td && Pc && typeof Pc.get == "function" ? Pc.get : null, og = td && Map.prototype.forEach, rd = typeof Set == "function" && Set.prototype, Bc = Object.getOwnPropertyDescriptor && rd ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, hl = rd && Bc && typeof Bc.get == "function" ? Bc.get : null, lg = rd && Set.prototype.forEach, BH = typeof WeakMap == "function" && WeakMap.prototype, za = BH ? WeakMap.prototype.has : null, IH = typeof WeakSet == "function" && WeakSet.prototype, Ha = IH ? WeakSet.prototype.has : null, RH = typeof WeakRef == "function" && WeakRef.prototype, cg = RH ? WeakRef.prototype.deref : null, NH = Boolean.prototype.valueOf, LH = Object.prototype.toString, jH = Function.prototype.toString, zH = String.prototype.match, nd = String.prototype.slice, ln = String.prototype.replace, HH = String.prototype.toUpperCase, ug = String.prototype.toLowerCase, Ob = RegExp.prototype.test, fg = Array.prototype.concat, fr = Array.prototype.join, VH = Array.prototype.slice, dg = Math.floor, mf = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, Ic = Object.getOwnPropertySymbols, xf = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, Ri = typeof Symbol == "function" && typeof Symbol.iterator == "object", xt = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === Ri || !0) ? Symbol.toStringTag : null, Fb = Object.prototype.propertyIsEnumerable, hg = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(e) {
  return e.__proto__;
} : null);
function pg(e, t) {
  if (e === 1 / 0 || e === -1 / 0 || e !== e || e && e > -1e3 && e < 1e3 || Ob.call(/e/, t))
    return t;
  var r = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
  if (typeof e == "number") {
    var n = e < 0 ? -dg(-e) : dg(e);
    if (n !== e) {
      var i = String(n), a = nd.call(t, i.length + 1);
      return ln.call(i, r, "$&_") + "." + ln.call(ln.call(a, /([0-9]{3})/g, "$&_"), /_$/, "");
    }
  }
  return ln.call(t, r, "$&_");
}
var yf = kb, vg = yf.custom, gg = Mb(vg) ? vg : null, YH = function e(t, r, n, i) {
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
    return Bb(t, a);
  if (typeof t == "number") {
    if (t === 0)
      return 1 / 0 / t > 0 ? "0" : "-0";
    var l = String(t);
    return o ? pg(t, l) : l;
  }
  if (typeof t == "bigint") {
    var c = String(t) + "n";
    return o ? pg(t, c) : c;
  }
  var u = typeof a.depth > "u" ? 5 : a.depth;
  if (typeof n > "u" && (n = 0), n >= u && u > 0 && typeof t == "object")
    return bf(t) ? "[Array]" : "[Object]";
  var f = lV(a, n);
  if (typeof i > "u")
    i = [];
  else if (Pb(i, t) >= 0)
    return "[Circular]";
  function d(k, j, P) {
    if (j && (i = VH.call(i), i.push(j)), P) {
      var H = {
        depth: a.depth
      };
      return en(a, "quoteStyle") && (H.quoteStyle = a.quoteStyle), e(k, H, n + 1, i);
    }
    return e(k, a, n + 1, i);
  }
  if (typeof t == "function" && !mg(t)) {
    var h = QH(t), p = qs(t, d);
    return "[Function" + (h ? ": " + h : " (anonymous)") + "]" + (p.length > 0 ? " { " + fr.call(p, ", ") + " }" : "");
  }
  if (Mb(t)) {
    var v = Ri ? ln.call(String(t), /^(Symbol\(.*\))_[^)]*$/, "$1") : xf.call(t);
    return typeof t == "object" && !Ri ? wa(v) : v;
  }
  if (aV(t)) {
    for (var g = "<" + ug.call(String(t.nodeName)), m = t.attributes || [], y = 0; y < m.length; y++)
      g += " " + m[y].name + "=" + Tb(WH(m[y].value), "double", a);
    return g += ">", t.childNodes && t.childNodes.length && (g += "..."), g += "</" + ug.call(String(t.nodeName)) + ">", g;
  }
  if (bf(t)) {
    if (t.length === 0)
      return "[]";
    var _ = qs(t, d);
    return f && !oV(_) ? "[" + _f(_, f) + "]" : "[ " + fr.call(_, ", ") + " ]";
  }
  if (qH(t)) {
    var x = qs(t, d);
    return !("cause" in Error.prototype) && "cause" in t && !Fb.call(t, "cause") ? "{ [" + String(t) + "] " + fr.call(fg.call("[cause]: " + d(t.cause), x), ", ") + " }" : x.length === 0 ? "[" + String(t) + "]" : "{ [" + String(t) + "] " + fr.call(x, ", ") + " }";
  }
  if (typeof t == "object" && s) {
    if (gg && typeof t[gg] == "function" && yf)
      return yf(t, { depth: u - n });
    if (s !== "symbol" && typeof t.inspect == "function")
      return t.inspect();
  }
  if (eV(t)) {
    var b = [];
    return og && og.call(t, function(k, j) {
      b.push(d(j, t, !0) + " => " + d(k, t));
    }), xg("Map", dl.call(t), b, f);
  }
  if (nV(t)) {
    var w = [];
    return lg && lg.call(t, function(k) {
      w.push(d(k, t));
    }), xg("Set", hl.call(t), w, f);
  }
  if (tV(t))
    return Rc("WeakMap");
  if (iV(t))
    return Rc("WeakSet");
  if (rV(t))
    return Rc("WeakRef");
  if (KH(t))
    return wa(d(Number(t)));
  if (XH(t))
    return wa(d(mf.call(t)));
  if (ZH(t))
    return wa(NH.call(t));
  if (GH(t))
    return wa(d(String(t)));
  if (typeof window < "u" && t === window)
    return "{ [object Window] }";
  if (t === le)
    return "{ [object globalThis] }";
  if (!UH(t) && !mg(t)) {
    var E = qs(t, d), $ = hg ? hg(t) === Object.prototype : t instanceof Object || t.constructor === Object, C = t instanceof Object ? "" : "null prototype", D = !$ && xt && Object(t) === t && xt in t ? nd.call(mn(t), 8, -1) : C ? "Object" : "", A = $ || typeof t.constructor != "function" ? "" : t.constructor.name ? t.constructor.name + " " : "", S = A + (D || C ? "[" + fr.call(fg.call([], D || [], C || []), ": ") + "] " : "");
    return E.length === 0 ? S + "{}" : f ? S + "{" + _f(E, f) + "}" : S + "{ " + fr.call(E, ", ") + " }";
  }
  return String(t);
};
function Tb(e, t, r) {
  var n = (r.quoteStyle || t) === "double" ? '"' : "'";
  return n + e + n;
}
function WH(e) {
  return ln.call(String(e), /"/g, "&quot;");
}
function bf(e) {
  return mn(e) === "[object Array]" && (!xt || !(typeof e == "object" && xt in e));
}
function UH(e) {
  return mn(e) === "[object Date]" && (!xt || !(typeof e == "object" && xt in e));
}
function mg(e) {
  return mn(e) === "[object RegExp]" && (!xt || !(typeof e == "object" && xt in e));
}
function qH(e) {
  return mn(e) === "[object Error]" && (!xt || !(typeof e == "object" && xt in e));
}
function GH(e) {
  return mn(e) === "[object String]" && (!xt || !(typeof e == "object" && xt in e));
}
function KH(e) {
  return mn(e) === "[object Number]" && (!xt || !(typeof e == "object" && xt in e));
}
function ZH(e) {
  return mn(e) === "[object Boolean]" && (!xt || !(typeof e == "object" && xt in e));
}
function Mb(e) {
  if (Ri)
    return e && typeof e == "object" && e instanceof Symbol;
  if (typeof e == "symbol")
    return !0;
  if (!e || typeof e != "object" || !xf)
    return !1;
  try {
    return xf.call(e), !0;
  } catch {
  }
  return !1;
}
function XH(e) {
  if (!e || typeof e != "object" || !mf)
    return !1;
  try {
    return mf.call(e), !0;
  } catch {
  }
  return !1;
}
var JH = Object.prototype.hasOwnProperty || function(e) {
  return e in this;
};
function en(e, t) {
  return JH.call(e, t);
}
function mn(e) {
  return LH.call(e);
}
function QH(e) {
  if (e.name)
    return e.name;
  var t = zH.call(jH.call(e), /^function\s*([\w$]+)/);
  return t ? t[1] : null;
}
function Pb(e, t) {
  if (e.indexOf)
    return e.indexOf(t);
  for (var r = 0, n = e.length; r < n; r++)
    if (e[r] === t)
      return r;
  return -1;
}
function eV(e) {
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
function tV(e) {
  if (!za || !e || typeof e != "object")
    return !1;
  try {
    za.call(e, za);
    try {
      Ha.call(e, Ha);
    } catch {
      return !0;
    }
    return e instanceof WeakMap;
  } catch {
  }
  return !1;
}
function rV(e) {
  if (!cg || !e || typeof e != "object")
    return !1;
  try {
    return cg.call(e), !0;
  } catch {
  }
  return !1;
}
function nV(e) {
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
function iV(e) {
  if (!Ha || !e || typeof e != "object")
    return !1;
  try {
    Ha.call(e, Ha);
    try {
      za.call(e, za);
    } catch {
      return !0;
    }
    return e instanceof WeakSet;
  } catch {
  }
  return !1;
}
function aV(e) {
  return !e || typeof e != "object" ? !1 : typeof HTMLElement < "u" && e instanceof HTMLElement ? !0 : typeof e.nodeName == "string" && typeof e.getAttribute == "function";
}
function Bb(e, t) {
  if (e.length > t.maxStringLength) {
    var r = e.length - t.maxStringLength, n = "... " + r + " more character" + (r > 1 ? "s" : "");
    return Bb(nd.call(e, 0, t.maxStringLength), t) + n;
  }
  var i = ln.call(ln.call(e, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, sV);
  return Tb(i, "single", t);
}
function sV(e) {
  var t = e.charCodeAt(0), r = {
    8: "b",
    9: "t",
    10: "n",
    12: "f",
    13: "r"
  }[t];
  return r ? "\\" + r : "\\x" + (t < 16 ? "0" : "") + HH.call(t.toString(16));
}
function wa(e) {
  return "Object(" + e + ")";
}
function Rc(e) {
  return e + " { ? }";
}
function xg(e, t, r, n) {
  var i = n ? _f(r, n) : fr.call(r, ", ");
  return e + " (" + t + ") {" + i + "}";
}
function oV(e) {
  for (var t = 0; t < e.length; t++)
    if (Pb(e[t], `
`) >= 0)
      return !1;
  return !0;
}
function lV(e, t) {
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
function _f(e, t) {
  if (e.length === 0)
    return "";
  var r = `
` + t.prev + t.base;
  return r + fr.call(e, "," + r) + `
` + t.prev;
}
function qs(e, t) {
  var r = bf(e), n = [];
  if (r) {
    n.length = e.length;
    for (var i = 0; i < e.length; i++)
      n[i] = en(e, i) ? t(e[i], e) : "";
  }
  var a = typeof Ic == "function" ? Ic(e) : [], s;
  if (Ri) {
    s = {};
    for (var o = 0; o < a.length; o++)
      s["$" + a[o]] = a[o];
  }
  for (var l in e)
    en(e, l) && (r && String(Number(l)) === l && l < e.length || Ri && s["$" + l] instanceof Symbol || (Ob.call(/[^\w$]/, l) ? n.push(t(l, e) + ": " + t(e[l], e)) : n.push(l + ": " + t(e[l], e))));
  if (typeof Ic == "function")
    for (var c = 0; c < a.length; c++)
      Fb.call(e, a[c]) && n.push("[" + t(a[c]) + "]: " + t(e[a[c]], e));
  return n;
}
var id = Zn, ta = TH, cV = YH, uV = id("%TypeError%"), Gs = id("%WeakMap%", !0), Ks = id("%Map%", !0), fV = ta("WeakMap.prototype.get", !0), dV = ta("WeakMap.prototype.set", !0), hV = ta("WeakMap.prototype.has", !0), pV = ta("Map.prototype.get", !0), vV = ta("Map.prototype.set", !0), gV = ta("Map.prototype.has", !0), ad = function(e, t) {
  for (var r = e, n; (n = r.next) !== null; r = n)
    if (n.key === t)
      return r.next = n.next, n.next = e.next, e.next = n, n;
}, mV = function(e, t) {
  var r = ad(e, t);
  return r && r.value;
}, xV = function(e, t, r) {
  var n = ad(e, t);
  n ? n.value = r : e.next = {
    // eslint-disable-line no-param-reassign
    key: t,
    next: e.next,
    value: r
  };
}, yV = function(e, t) {
  return !!ad(e, t);
}, bV = function() {
  var t, r, n, i = {
    assert: function(a) {
      if (!i.has(a))
        throw new uV("Side channel does not contain " + cV(a));
    },
    get: function(a) {
      if (Gs && a && (typeof a == "object" || typeof a == "function")) {
        if (t)
          return fV(t, a);
      } else if (Ks) {
        if (r)
          return pV(r, a);
      } else if (n)
        return mV(n, a);
    },
    has: function(a) {
      if (Gs && a && (typeof a == "object" || typeof a == "function")) {
        if (t)
          return hV(t, a);
      } else if (Ks) {
        if (r)
          return gV(r, a);
      } else if (n)
        return yV(n, a);
      return !1;
    },
    set: function(a, s) {
      Gs && a && (typeof a == "object" || typeof a == "function") ? (t || (t = new Gs()), dV(t, a, s)) : Ks ? (r || (r = new Ks()), vV(r, a, s)) : (n || (n = { key: {}, next: null }), xV(n, a, s));
    }
  };
  return i;
}, _V = String.prototype.replace, wV = /%20/g, Nc = {
  RFC1738: "RFC1738",
  RFC3986: "RFC3986"
}, sd = {
  default: Nc.RFC3986,
  formatters: {
    RFC1738: function(e) {
      return _V.call(e, wV, "+");
    },
    RFC3986: function(e) {
      return String(e);
    }
  },
  RFC1738: Nc.RFC1738,
  RFC3986: Nc.RFC3986
}, $V = sd, Lc = Object.prototype.hasOwnProperty, On = Array.isArray, lr = function() {
  for (var e = [], t = 0; t < 256; ++t)
    e.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase());
  return e;
}(), DV = function(t) {
  for (; t.length > 1; ) {
    var r = t.pop(), n = r.obj[r.prop];
    if (On(n)) {
      for (var i = [], a = 0; a < n.length; ++a)
        typeof n[a] < "u" && i.push(n[a]);
      r.obj[r.prop] = i;
    }
  }
}, Ib = function(t, r) {
  for (var n = r && r.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, i = 0; i < t.length; ++i)
    typeof t[i] < "u" && (n[i] = t[i]);
  return n;
}, EV = function e(t, r, n) {
  if (!r)
    return t;
  if (typeof r != "object") {
    if (On(t))
      t.push(r);
    else if (t && typeof t == "object")
      (n && (n.plainObjects || n.allowPrototypes) || !Lc.call(Object.prototype, r)) && (t[r] = !0);
    else
      return [t, r];
    return t;
  }
  if (!t || typeof t != "object")
    return [t].concat(r);
  var i = t;
  return On(t) && !On(r) && (i = Ib(t, n)), On(t) && On(r) ? (r.forEach(function(a, s) {
    if (Lc.call(t, s)) {
      var o = t[s];
      o && typeof o == "object" && a && typeof a == "object" ? t[s] = e(o, a, n) : t.push(a);
    } else
      t[s] = a;
  }), t) : Object.keys(r).reduce(function(a, s) {
    var o = r[s];
    return Lc.call(a, s) ? a[s] = e(a[s], o, n) : a[s] = o, a;
  }, i);
}, AV = function(t, r) {
  return Object.keys(r).reduce(function(n, i) {
    return n[i] = r[i], n;
  }, t);
}, CV = function(e, t, r) {
  var n = e.replace(/\+/g, " ");
  if (r === "iso-8859-1")
    return n.replace(/%[0-9a-f]{2}/gi, unescape);
  try {
    return decodeURIComponent(n);
  } catch {
    return n;
  }
}, SV = function(t, r, n, i, a) {
  if (t.length === 0)
    return t;
  var s = t;
  if (typeof t == "symbol" ? s = Symbol.prototype.toString.call(t) : typeof t != "string" && (s = String(t)), n === "iso-8859-1")
    return escape(s).replace(/%u[0-9a-f]{4}/gi, function(u) {
      return "%26%23" + parseInt(u.slice(2), 16) + "%3B";
    });
  for (var o = "", l = 0; l < s.length; ++l) {
    var c = s.charCodeAt(l);
    if (c === 45 || c === 46 || c === 95 || c === 126 || c >= 48 && c <= 57 || c >= 65 && c <= 90 || c >= 97 && c <= 122 || a === $V.RFC1738 && (c === 40 || c === 41)) {
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
}, kV = function(t) {
  for (var r = [{ obj: { o: t }, prop: "o" }], n = [], i = 0; i < r.length; ++i)
    for (var a = r[i], s = a.obj[a.prop], o = Object.keys(s), l = 0; l < o.length; ++l) {
      var c = o[l], u = s[c];
      typeof u == "object" && u !== null && n.indexOf(u) === -1 && (r.push({ obj: s, prop: c }), n.push(u));
    }
  return DV(r), t;
}, OV = function(t) {
  return Object.prototype.toString.call(t) === "[object RegExp]";
}, FV = function(t) {
  return !t || typeof t != "object" ? !1 : !!(t.constructor && t.constructor.isBuffer && t.constructor.isBuffer(t));
}, TV = function(t, r) {
  return [].concat(t, r);
}, MV = function(t, r) {
  if (On(t)) {
    for (var n = [], i = 0; i < t.length; i += 1)
      n.push(r(t[i]));
    return n;
  }
  return r(t);
}, Rb = {
  arrayToObject: Ib,
  assign: AV,
  combine: TV,
  compact: kV,
  decode: CV,
  encode: SV,
  isBuffer: FV,
  isRegExp: OV,
  maybeMap: MV,
  merge: EV
}, Nb = bV, mo = Rb, Va = sd, PV = Object.prototype.hasOwnProperty, yg = {
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
}, Ar = Array.isArray, BV = Array.prototype.push, Lb = function(e, t) {
  BV.apply(e, Ar(t) ? t : [t]);
}, IV = Date.prototype.toISOString, bg = Va.default, pt = {
  addQueryPrefix: !1,
  allowDots: !1,
  charset: "utf-8",
  charsetSentinel: !1,
  delimiter: "&",
  encode: !0,
  encoder: mo.encode,
  encodeValuesOnly: !1,
  format: bg,
  formatter: Va.formatters[bg],
  // deprecated
  indices: !1,
  serializeDate: function(t) {
    return IV.call(t);
  },
  skipNulls: !1,
  strictNullHandling: !1
}, RV = function(t) {
  return typeof t == "string" || typeof t == "number" || typeof t == "boolean" || typeof t == "symbol" || typeof t == "bigint";
}, jc = {}, NV = function e(t, r, n, i, a, s, o, l, c, u, f, d, h, p, v, g) {
  for (var m = t, y = g, _ = 0, x = !1; (y = y.get(jc)) !== void 0 && !x; ) {
    var b = y.get(t);
    if (_ += 1, typeof b < "u") {
      if (b === _)
        throw new RangeError("Cyclic object value");
      x = !0;
    }
    typeof y.get(jc) > "u" && (_ = 0);
  }
  if (typeof l == "function" ? m = l(r, m) : m instanceof Date ? m = f(m) : n === "comma" && Ar(m) && (m = mo.maybeMap(m, function(H) {
    return H instanceof Date ? f(H) : H;
  })), m === null) {
    if (a)
      return o && !p ? o(r, pt.encoder, v, "key", d) : r;
    m = "";
  }
  if (RV(m) || mo.isBuffer(m)) {
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
    p && o && (m = mo.maybeMap(m, o)), $ = [{ value: m.length > 0 ? m.join(",") || null : void 0 }];
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
      var P = Nb();
      P.set(jc, g), Lb(E, e(
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
}, LV = function(t) {
  if (!t)
    return pt;
  if (t.encoder !== null && typeof t.encoder < "u" && typeof t.encoder != "function")
    throw new TypeError("Encoder has to be a function.");
  var r = t.charset || pt.charset;
  if (typeof t.charset < "u" && t.charset !== "utf-8" && t.charset !== "iso-8859-1")
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  var n = Va.default;
  if (typeof t.format < "u") {
    if (!PV.call(Va.formatters, t.format))
      throw new TypeError("Unknown format option provided.");
    n = t.format;
  }
  var i = Va.formatters[n], a = pt.filter;
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
}, jV = function(e, t) {
  var r = e, n = LV(t), i, a;
  typeof n.filter == "function" ? (a = n.filter, r = a("", r)) : Ar(n.filter) && (a = n.filter, i = a);
  var s = [];
  if (typeof r != "object" || r === null)
    return "";
  var o;
  t && t.arrayFormat in yg ? o = t.arrayFormat : t && "indices" in t ? o = t.indices ? "indices" : "repeat" : o = "indices";
  var l = yg[o];
  if (t && "commaRoundTrip" in t && typeof t.commaRoundTrip != "boolean")
    throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
  var c = l === "comma" && t && t.commaRoundTrip;
  i || (i = Object.keys(r)), n.sort && i.sort(n.sort);
  for (var u = Nb(), f = 0; f < i.length; ++f) {
    var d = i[f];
    n.skipNulls && r[d] === null || Lb(s, NV(
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
}, Ni = Rb, wf = Object.prototype.hasOwnProperty, zV = Array.isArray, rt = {
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
}, HV = function(e) {
  return e.replace(/&#(\d+);/g, function(t, r) {
    return String.fromCharCode(parseInt(r, 10));
  });
}, jb = function(e, t) {
  return e && typeof e == "string" && t.comma && e.indexOf(",") > -1 ? e.split(",") : e;
}, VV = "utf8=%26%2310003%3B", YV = "utf8=%E2%9C%93", WV = function(t, r) {
  var n = { __proto__: null }, i = r.ignoreQueryPrefix ? t.replace(/^\?/, "") : t, a = r.parameterLimit === 1 / 0 ? void 0 : r.parameterLimit, s = i.split(r.delimiter, a), o = -1, l, c = r.charset;
  if (r.charsetSentinel)
    for (l = 0; l < s.length; ++l)
      s[l].indexOf("utf8=") === 0 && (s[l] === YV ? c = "utf-8" : s[l] === VV && (c = "iso-8859-1"), o = l, l = s.length);
  for (l = 0; l < s.length; ++l)
    if (l !== o) {
      var u = s[l], f = u.indexOf("]="), d = f === -1 ? u.indexOf("=") : f + 1, h, p;
      d === -1 ? (h = r.decoder(u, rt.decoder, c, "key"), p = r.strictNullHandling ? null : "") : (h = r.decoder(u.slice(0, d), rt.decoder, c, "key"), p = Ni.maybeMap(
        jb(u.slice(d + 1), r),
        function(v) {
          return r.decoder(v, rt.decoder, c, "value");
        }
      )), p && r.interpretNumericEntities && c === "iso-8859-1" && (p = HV(p)), u.indexOf("[]=") > -1 && (p = zV(p) ? [p] : p), wf.call(n, h) ? n[h] = Ni.combine(n[h], p) : n[h] = p;
    }
  return n;
}, UV = function(e, t, r, n) {
  for (var i = n ? t : jb(t, r), a = e.length - 1; a >= 0; --a) {
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
}, qV = function(t, r, n, i) {
  if (t) {
    var a = n.allowDots ? t.replace(/\.([^.[]+)/g, "[$1]") : t, s = /(\[[^[\]]*])/, o = /(\[[^[\]]*])/g, l = n.depth > 0 && s.exec(a), c = l ? a.slice(0, l.index) : a, u = [];
    if (c) {
      if (!n.plainObjects && wf.call(Object.prototype, c) && !n.allowPrototypes)
        return;
      u.push(c);
    }
    for (var f = 0; n.depth > 0 && (l = o.exec(a)) !== null && f < n.depth; ) {
      if (f += 1, !n.plainObjects && wf.call(Object.prototype, l[1].slice(1, -1)) && !n.allowPrototypes)
        return;
      u.push(l[1]);
    }
    return l && u.push("[" + a.slice(l.index) + "]"), UV(u, r, n, i);
  }
}, GV = function(t) {
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
}, KV = function(e, t) {
  var r = GV(t);
  if (e === "" || e === null || typeof e > "u")
    return r.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
  for (var n = typeof e == "string" ? WV(e, r) : e, i = r.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, a = Object.keys(n), s = 0; s < a.length; ++s) {
    var o = a[s], l = qV(o, n[o], r, typeof e == "string");
    i = Ni.merge(i, l, r);
  }
  return r.allowSparse === !0 ? i : Ni.compact(i);
}, ZV = jV, XV = KV, JV = sd, QV = {
  formats: JV,
  parse: XV,
  stringify: ZV
};
const eY = Kt.checkout("request");
class tY extends mt {
  constructor(r) {
    super();
    G(this, "__names", null);
    G(this, "state", {});
    G(this, "cache", new Ex({
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
          throw eY.create(`Url ${r} param ${o} is null.`);
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
        Wa.lastMatch(c, "[]") ? l[c.slice(0, -2)] = u : l[c] = u;
      s.body = QV.stringify(l, {
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
var zb = { exports: {} };
function rY(e) {
  throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var zc = { exports: {} }, _g;
function ye() {
  return _g || (_g = 1, function(e, t) {
    (function(r, n) {
      e.exports = n();
    })(le, function() {
      var r = r || function(n, i) {
        var a;
        if (typeof window < "u" && window.crypto && (a = window.crypto), typeof self < "u" && self.crypto && (a = self.crypto), typeof globalThis < "u" && globalThis.crypto && (a = globalThis.crypto), !a && typeof window < "u" && window.msCrypto && (a = window.msCrypto), !a && typeof le < "u" && le.crypto && (a = le.crypto), !a && typeof rY == "function")
          try {
            a = kb;
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
  }(zc)), zc.exports;
}
var Hc = { exports: {} }, wg;
function Ul() {
  return wg || (wg = 1, function(e, t) {
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
  }(Hc)), Hc.exports;
}
var Vc = { exports: {} }, $g;
function nY() {
  return $g || ($g = 1, function(e, t) {
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
  }(Vc)), Vc.exports;
}
var Yc = { exports: {} }, Dg;
function iY() {
  return Dg || (Dg = 1, function(e, t) {
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
  }(Yc)), Yc.exports;
}
var Wc = { exports: {} }, Eg;
function Xn() {
  return Eg || (Eg = 1, function(e, t) {
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
  }(Wc)), Wc.exports;
}
var Uc = { exports: {} }, Ag;
function aY() {
  return Ag || (Ag = 1, function(e, t) {
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
  }(Uc)), Uc.exports;
}
var qc = { exports: {} }, Cg;
function Jn() {
  return Cg || (Cg = 1, function(e, t) {
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
  }(qc)), qc.exports;
}
var Gc = { exports: {} }, Sg;
function Hb() {
  return Sg || (Sg = 1, function(e, t) {
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
  }(Gc)), Gc.exports;
}
var Kc = { exports: {} }, kg;
function od() {
  return kg || (kg = 1, function(e, t) {
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
  }(Kc)), Kc.exports;
}
var Zc = { exports: {} }, Og;
function sY() {
  return Og || (Og = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(ye(), od());
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
  }(Zc)), Zc.exports;
}
var Xc = { exports: {} }, Fg;
function Vb() {
  return Fg || (Fg = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(ye(), Ul());
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
              var ne = Ie & bt ^ ~Ie & Ft, fe = We & Ot ^ ~We & Tt, He = te & be ^ te & _e ^ be & _e, Pt = J & ee ^ J & Xe ^ ee & Xe, ht = (te >>> 28 | J << 4) ^ (te << 30 | J >>> 2) ^ (te << 25 | J >>> 7), wr = (J >>> 28 | te << 4) ^ (J << 30 | te >>> 2) ^ (J << 25 | te >>> 7), _n = (Ie >>> 14 | We << 18) ^ (Ie >>> 18 | We << 14) ^ (Ie << 23 | We >>> 9), ni = (We >>> 14 | Ie << 18) ^ (We >>> 18 | Ie << 14) ^ (We << 23 | Ie >>> 9), _t = f[ze], ii = _t.high, Gr = _t.low, ut = ct + ni, Xt = _r + _n + (ut >>> 0 < ct >>> 0 ? 1 : 0), ut = ut + fe, Xt = Xt + ne + (ut >>> 0 < fe >>> 0 ? 1 : 0), ut = ut + Gr, Xt = Xt + ii + (ut >>> 0 < Gr >>> 0 ? 1 : 0), ut = ut + Ue, Xt = Xt + dt + (ut >>> 0 < Ue >>> 0 ? 1 : 0), Ld = wr + Pt, k2 = ht + He + (Ld >>> 0 < wr >>> 0 ? 1 : 0);
              _r = Ft, ct = Tt, Ft = bt, Tt = Ot, bt = Ie, Ot = We, We = tt + ut | 0, Ie = Qe + Xt + (We >>> 0 < tt >>> 0 ? 1 : 0) | 0, Qe = _e, tt = Xe, _e = be, Xe = ee, be = te, ee = J, J = ut + Ld | 0, te = Xt + k2 + (J >>> 0 < ut >>> 0 ? 1 : 0) | 0;
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
  }(Xc)), Xc.exports;
}
var Jc = { exports: {} }, Tg;
function oY() {
  return Tg || (Tg = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(ye(), Ul(), Vb());
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
  }(Jc)), Jc.exports;
}
var Qc = { exports: {} }, Mg;
function lY() {
  return Mg || (Mg = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(ye(), Ul());
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
  }(Qc)), Qc.exports;
}
var eu = { exports: {} }, Pg;
function cY() {
  return Pg || (Pg = 1, function(e, t) {
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
  }(eu)), eu.exports;
}
var tu = { exports: {} }, Bg;
function ld() {
  return Bg || (Bg = 1, function(e, t) {
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
  }(tu)), tu.exports;
}
var ru = { exports: {} }, Ig;
function uY() {
  return Ig || (Ig = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(ye(), od(), ld());
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
  }(ru)), ru.exports;
}
var nu = { exports: {} }, Rg;
function xn() {
  return Rg || (Rg = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(ye(), Hb(), ld());
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
  }(nu)), nu.exports;
}
var iu = { exports: {} }, Ng;
function lt() {
  return Ng || (Ng = 1, function(e, t) {
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
  }(iu)), iu.exports;
}
var au = { exports: {} }, Lg;
function fY() {
  return Lg || (Lg = 1, function(e, t) {
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
  }(au)), au.exports;
}
var su = { exports: {} }, jg;
function dY() {
  return jg || (jg = 1, function(e, t) {
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
  }(su)), su.exports;
}
var ou = { exports: {} }, zg;
function hY() {
  return zg || (zg = 1, function(e, t) {
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
  }(ou)), ou.exports;
}
var lu = { exports: {} }, Hg;
function pY() {
  return Hg || (Hg = 1, function(e, t) {
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
  }(lu)), lu.exports;
}
var cu = { exports: {} }, Vg;
function vY() {
  return Vg || (Vg = 1, function(e, t) {
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
  }(cu)), cu.exports;
}
var uu = { exports: {} }, Yg;
function gY() {
  return Yg || (Yg = 1, function(e, t) {
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
  }(uu)), uu.exports;
}
var fu = { exports: {} }, Wg;
function mY() {
  return Wg || (Wg = 1, function(e, t) {
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
  }(fu)), fu.exports;
}
var du = { exports: {} }, Ug;
function xY() {
  return Ug || (Ug = 1, function(e, t) {
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
  }(du)), du.exports;
}
var hu = { exports: {} }, qg;
function yY() {
  return qg || (qg = 1, function(e, t) {
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
  }(hu)), hu.exports;
}
var pu = { exports: {} }, Gg;
function bY() {
  return Gg || (Gg = 1, function(e, t) {
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
  }(pu)), pu.exports;
}
var vu = { exports: {} }, Kg;
function _Y() {
  return Kg || (Kg = 1, function(e, t) {
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
  }(vu)), vu.exports;
}
var gu = { exports: {} }, Zg;
function wY() {
  return Zg || (Zg = 1, function(e, t) {
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
  }(gu)), gu.exports;
}
var mu = { exports: {} }, Xg;
function $Y() {
  return Xg || (Xg = 1, function(e, t) {
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
  }(mu)), mu.exports;
}
var xu = { exports: {} }, Jg;
function DY() {
  return Jg || (Jg = 1, function(e, t) {
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
  }(xu)), xu.exports;
}
var yu = { exports: {} }, Qg;
function EY() {
  return Qg || (Qg = 1, function(e, t) {
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
  }(yu)), yu.exports;
}
var bu = { exports: {} }, em;
function AY() {
  return em || (em = 1, function(e, t) {
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
  }(bu)), bu.exports;
}
var _u = { exports: {} }, tm;
function CY() {
  return tm || (tm = 1, function(e, t) {
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
  }(_u)), _u.exports;
}
(function(e, t) {
  (function(r, n, i) {
    e.exports = n(ye(), Ul(), nY(), iY(), Xn(), aY(), Jn(), Hb(), od(), sY(), Vb(), oY(), lY(), cY(), ld(), uY(), xn(), lt(), fY(), dY(), hY(), pY(), vY(), gY(), mY(), xY(), yY(), bY(), _Y(), wY(), $Y(), DY(), EY(), AY(), CY());
  })(le, function(r) {
    return r;
  });
})(zb);
var $r = zb.exports;
const SY = Kt.checkout("CryptoAES");
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
      throw SY.create("CryptoAES encrypt not support php-encryption");
    return $r.AES.encrypt(r, n).toString();
  }
}
var $f;
try {
  $f = Map;
} catch {
}
var Df;
try {
  Df = Set;
} catch {
}
function Yb(e, t, r) {
  if (!e || typeof e != "object" || typeof e == "function")
    return e;
  if (e.nodeType && "cloneNode" in e)
    return e.cloneNode(!0);
  if (e instanceof Date)
    return new Date(e.getTime());
  if (e instanceof RegExp)
    return new RegExp(e);
  if (Array.isArray(e))
    return e.map(Ef);
  if ($f && e instanceof $f)
    return new Map(Array.from(e.entries()));
  if (Df && e instanceof Df)
    return new Set(Array.from(e.values()));
  if (e instanceof Object) {
    t.push(e);
    var n = Object.create(e);
    r.push(n);
    for (var i in e) {
      var a = t.findIndex(function(s) {
        return s === e[i];
      });
      n[i] = a > -1 ? r[a] : Yb(e[i], t, r);
    }
    return n;
  }
  return e;
}
function Ef(e) {
  return Yb(e, [], []);
}
const kY = Object.prototype.toString, OY = Error.prototype.toString, FY = RegExp.prototype.toString, TY = typeof Symbol < "u" ? Symbol.prototype.toString : () => "", MY = /^Symbol\((.*)\)(.*)$/;
function PY(e) {
  return e != +e ? "NaN" : e === 0 && 1 / e < 0 ? "-0" : "" + e;
}
function rm(e, t = !1) {
  if (e == null || e === !0 || e === !1)
    return "" + e;
  const r = typeof e;
  if (r === "number")
    return PY(e);
  if (r === "string")
    return t ? `"${e}"` : e;
  if (r === "function")
    return "[Function " + (e.name || "anonymous") + "]";
  if (r === "symbol")
    return TY.call(e).replace(MY, "Symbol($1)");
  const n = kY.call(e).slice(8, -1);
  return n === "Date" ? isNaN(e.getTime()) ? "" + e : e.toISOString(e) : n === "Error" || e instanceof Error ? "[" + OY.call(e) + "]" : n === "RegExp" ? FY.call(e) : null;
}
function Li(e, t) {
  let r = rm(e, t);
  return r !== null ? r : JSON.stringify(e, function(n, i) {
    let a = rm(this[n], t);
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
}, Af = {
  min: "${path} field must be later than ${min}",
  max: "${path} field must be at earlier than ${max}"
}, Cf = {
  isValue: "${path} field must be ${value}"
}, Sf = {
  noUnknown: "${path} field has unspecified keys: ${unknown}"
}, xo = {
  min: "${path} field must have at least ${min} items",
  max: "${path} field must have less than or equal to ${max} items",
  length: "${path} must have ${length} items"
};
const BY = Object.assign(/* @__PURE__ */ Object.create(null), {
  mixed: Sn,
  string: Qt,
  number: Jr,
  date: Af,
  object: Sf,
  array: xo,
  boolean: Cf
});
var IY = Object.prototype, RY = IY.hasOwnProperty;
function NY(e, t) {
  return e != null && RY.call(e, t);
}
var LY = NY, jY = Array.isArray, yn = jY, zY = typeof le == "object" && le && le.Object === Object && le, Wb = zY, HY = Wb, VY = typeof self == "object" && self && self.Object === Object && self, YY = HY || VY || Function("return this")(), Vr = YY, WY = Vr, UY = WY.Symbol, ql = UY, nm = ql, Ub = Object.prototype, qY = Ub.hasOwnProperty, GY = Ub.toString, $a = nm ? nm.toStringTag : void 0;
function KY(e) {
  var t = qY.call(e, $a), r = e[$a];
  try {
    e[$a] = void 0;
    var n = !0;
  } catch {
  }
  var i = GY.call(e);
  return n && (t ? e[$a] = r : delete e[$a]), i;
}
var ZY = KY, XY = Object.prototype, JY = XY.toString;
function QY(e) {
  return JY.call(e);
}
var eW = QY, im = ql, tW = ZY, rW = eW, nW = "[object Null]", iW = "[object Undefined]", am = im ? im.toStringTag : void 0;
function aW(e) {
  return e == null ? e === void 0 ? iW : nW : am && am in Object(e) ? tW(e) : rW(e);
}
var bs = aW;
function sW(e) {
  return e != null && typeof e == "object";
}
var _s = sW, oW = bs, lW = _s, cW = "[object Symbol]";
function uW(e) {
  return typeof e == "symbol" || lW(e) && oW(e) == cW;
}
var cd = uW, fW = yn, dW = cd, hW = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, pW = /^\w*$/;
function vW(e, t) {
  if (fW(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || dW(e) ? !0 : pW.test(e) || !hW.test(e) || t != null && e in Object(t);
}
var ud = vW;
function gW(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var fd = gW, mW = bs, xW = fd, yW = "[object AsyncFunction]", bW = "[object Function]", _W = "[object GeneratorFunction]", wW = "[object Proxy]";
function $W(e) {
  if (!xW(e))
    return !1;
  var t = mW(e);
  return t == bW || t == _W || t == yW || t == wW;
}
var qb = $W, DW = Vr, EW = DW["__core-js_shared__"], AW = EW, wu = AW, sm = function() {
  var e = /[^.]+$/.exec(wu && wu.keys && wu.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function CW(e) {
  return !!sm && sm in e;
}
var SW = CW, kW = Function.prototype, OW = kW.toString;
function FW(e) {
  if (e != null) {
    try {
      return OW.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Gb = FW, TW = qb, MW = SW, PW = fd, BW = Gb, IW = /[\\^$.*+?()[\]{}|]/g, RW = /^\[object .+?Constructor\]$/, NW = Function.prototype, LW = Object.prototype, jW = NW.toString, zW = LW.hasOwnProperty, HW = RegExp(
  "^" + jW.call(zW).replace(IW, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function VW(e) {
  if (!PW(e) || MW(e))
    return !1;
  var t = TW(e) ? HW : RW;
  return t.test(BW(e));
}
var YW = VW;
function WW(e, t) {
  return e == null ? void 0 : e[t];
}
var UW = WW, qW = YW, GW = UW;
function KW(e, t) {
  var r = GW(e, t);
  return qW(r) ? r : void 0;
}
var Qn = KW, ZW = Qn, XW = ZW(Object, "create"), Gl = XW, om = Gl;
function JW() {
  this.__data__ = om ? om(null) : {}, this.size = 0;
}
var QW = JW;
function eU(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var tU = eU, rU = Gl, nU = "__lodash_hash_undefined__", iU = Object.prototype, aU = iU.hasOwnProperty;
function sU(e) {
  var t = this.__data__;
  if (rU) {
    var r = t[e];
    return r === nU ? void 0 : r;
  }
  return aU.call(t, e) ? t[e] : void 0;
}
var oU = sU, lU = Gl, cU = Object.prototype, uU = cU.hasOwnProperty;
function fU(e) {
  var t = this.__data__;
  return lU ? t[e] !== void 0 : uU.call(t, e);
}
var dU = fU, hU = Gl, pU = "__lodash_hash_undefined__";
function vU(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = hU && t === void 0 ? pU : t, this;
}
var gU = vU, mU = QW, xU = tU, yU = oU, bU = dU, _U = gU;
function ra(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
ra.prototype.clear = mU;
ra.prototype.delete = xU;
ra.prototype.get = yU;
ra.prototype.has = bU;
ra.prototype.set = _U;
var wU = ra;
function $U() {
  this.__data__ = [], this.size = 0;
}
var DU = $U;
function EU(e, t) {
  return e === t || e !== e && t !== t;
}
var Kb = EU, AU = Kb;
function CU(e, t) {
  for (var r = e.length; r--; )
    if (AU(e[r][0], t))
      return r;
  return -1;
}
var Kl = CU, SU = Kl, kU = Array.prototype, OU = kU.splice;
function FU(e) {
  var t = this.__data__, r = SU(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : OU.call(t, r, 1), --this.size, !0;
}
var TU = FU, MU = Kl;
function PU(e) {
  var t = this.__data__, r = MU(t, e);
  return r < 0 ? void 0 : t[r][1];
}
var BU = PU, IU = Kl;
function RU(e) {
  return IU(this.__data__, e) > -1;
}
var NU = RU, LU = Kl;
function jU(e, t) {
  var r = this.__data__, n = LU(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
var zU = jU, HU = DU, VU = TU, YU = BU, WU = NU, UU = zU;
function na(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
na.prototype.clear = HU;
na.prototype.delete = VU;
na.prototype.get = YU;
na.prototype.has = WU;
na.prototype.set = UU;
var Zl = na, qU = Qn, GU = Vr, KU = qU(GU, "Map"), dd = KU, lm = wU, ZU = Zl, XU = dd;
function JU() {
  this.size = 0, this.__data__ = {
    hash: new lm(),
    map: new (XU || ZU)(),
    string: new lm()
  };
}
var QU = JU;
function eq(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var tq = eq, rq = tq;
function nq(e, t) {
  var r = e.__data__;
  return rq(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
var Xl = nq, iq = Xl;
function aq(e) {
  var t = iq(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var sq = aq, oq = Xl;
function lq(e) {
  return oq(this, e).get(e);
}
var cq = lq, uq = Xl;
function fq(e) {
  return uq(this, e).has(e);
}
var dq = fq, hq = Xl;
function pq(e, t) {
  var r = hq(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
var vq = pq, gq = QU, mq = sq, xq = cq, yq = dq, bq = vq;
function ia(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
ia.prototype.clear = gq;
ia.prototype.delete = mq;
ia.prototype.get = xq;
ia.prototype.has = yq;
ia.prototype.set = bq;
var hd = ia, Zb = hd, _q = "Expected a function";
function pd(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(_q);
  var r = function() {
    var n = arguments, i = t ? t.apply(this, n) : n[0], a = r.cache;
    if (a.has(i))
      return a.get(i);
    var s = e.apply(this, n);
    return r.cache = a.set(i, s) || a, s;
  };
  return r.cache = new (pd.Cache || Zb)(), r;
}
pd.Cache = Zb;
var wq = pd, $q = wq, Dq = 500;
function Eq(e) {
  var t = $q(e, function(n) {
    return r.size === Dq && r.clear(), n;
  }), r = t.cache;
  return t;
}
var Aq = Eq, Cq = Aq, Sq = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, kq = /\\(\\)?/g, Oq = Cq(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Sq, function(r, n, i, a) {
    t.push(i ? a.replace(kq, "$1") : n || r);
  }), t;
}), Fq = Oq;
function Tq(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; )
    i[r] = t(e[r], r, e);
  return i;
}
var Mq = Tq, cm = ql, Pq = Mq, Bq = yn, Iq = cd, Rq = 1 / 0, um = cm ? cm.prototype : void 0, fm = um ? um.toString : void 0;
function Xb(e) {
  if (typeof e == "string")
    return e;
  if (Bq(e))
    return Pq(e, Xb) + "";
  if (Iq(e))
    return fm ? fm.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -Rq ? "-0" : t;
}
var Nq = Xb, Lq = Nq;
function jq(e) {
  return e == null ? "" : Lq(e);
}
var ws = jq, zq = yn, Hq = ud, Vq = Fq, Yq = ws;
function Wq(e, t) {
  return zq(e) ? e : Hq(e, t) ? [e] : Vq(Yq(e));
}
var Jb = Wq, Uq = bs, qq = _s, Gq = "[object Arguments]";
function Kq(e) {
  return qq(e) && Uq(e) == Gq;
}
var Zq = Kq, dm = Zq, Xq = _s, Qb = Object.prototype, Jq = Qb.hasOwnProperty, Qq = Qb.propertyIsEnumerable, eG = dm(/* @__PURE__ */ function() {
  return arguments;
}()) ? dm : function(e) {
  return Xq(e) && Jq.call(e, "callee") && !Qq.call(e, "callee");
}, e_ = eG, tG = 9007199254740991, rG = /^(?:0|[1-9]\d*)$/;
function nG(e, t) {
  var r = typeof e;
  return t = t ?? tG, !!t && (r == "number" || r != "symbol" && rG.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var t_ = nG, iG = 9007199254740991;
function aG(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= iG;
}
var vd = aG, sG = cd, oG = 1 / 0;
function lG(e) {
  if (typeof e == "string" || sG(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -oG ? "-0" : t;
}
var Jl = lG, cG = Jb, uG = e_, fG = yn, dG = t_, hG = vd, pG = Jl;
function vG(e, t, r) {
  t = cG(t, e);
  for (var n = -1, i = t.length, a = !1; ++n < i; ) {
    var s = pG(t[n]);
    if (!(a = e != null && r(e, s)))
      break;
    e = e[s];
  }
  return a || ++n != i ? a : (i = e == null ? 0 : e.length, !!i && hG(i) && dG(s, i) && (fG(e) || uG(e)));
}
var r_ = vG, gG = LY, mG = r_;
function xG(e, t) {
  return e != null && mG(e, t, gG);
}
var yG = xG;
const pl = /* @__PURE__ */ ea(yG), aa = (e) => e && e.__isYupSchema__;
class bG {
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
function n_(e) {
  return e == null ? [] : [].concat(e);
}
function kf() {
  return kf = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, kf.apply(this, arguments);
}
let _G = /\$\{\s*(\w+)\s*\}/g;
class Dt extends Error {
  static formatError(t, r) {
    const n = r.label || r.path || "this";
    return n !== r.path && (r = kf({}, r, {
      path: n
    })), typeof t == "string" ? t.replace(_G, (i, a) => Li(r[a])) : typeof t == "function" ? t(r) : t;
  }
  static isError(t) {
    return t && t.name === "ValidationError";
  }
  constructor(t, r, n, i) {
    super(), this.value = void 0, this.path = void 0, this.type = void 0, this.errors = void 0, this.params = void 0, this.inner = void 0, this.name = "ValidationError", this.value = r, this.path = n, this.type = i, this.errors = [], this.inner = [], n_(t).forEach((a) => {
      Dt.isError(a) ? (this.errors.push(...a.errors), this.inner = this.inner.concat(a.inner.length ? a.inner : a)) : this.errors.push(a);
    }), this.message = this.errors.length > 1 ? `${this.errors.length} errors occurred` : this.errors[0], Error.captureStackTrace && Error.captureStackTrace(this, Dt);
  }
}
const wG = (e) => {
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
  } = e, c = wG(t), u = n.length;
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
var $G = Qn, DG = function() {
  try {
    var e = $G(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), EG = DG, hm = EG;
function AG(e, t, r) {
  t == "__proto__" && hm ? hm(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
var i_ = AG;
function CG(e) {
  return function(t, r, n) {
    for (var i = -1, a = Object(t), s = n(t), o = s.length; o--; ) {
      var l = s[e ? o : ++i];
      if (r(a[l], l, a) === !1)
        break;
    }
    return t;
  };
}
var SG = CG, kG = SG, OG = kG(), FG = OG;
function TG(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var MG = TG, gl = { exports: {} };
function PG() {
  return !1;
}
var BG = PG;
gl.exports;
(function(e, t) {
  var r = Vr, n = BG, i = t && !t.nodeType && t, a = i && !0 && e && !e.nodeType && e, s = a && a.exports === i, o = s ? r.Buffer : void 0, l = o ? o.isBuffer : void 0, c = l || n;
  e.exports = c;
})(gl, gl.exports);
var a_ = gl.exports, IG = bs, RG = vd, NG = _s, LG = "[object Arguments]", jG = "[object Array]", zG = "[object Boolean]", HG = "[object Date]", VG = "[object Error]", YG = "[object Function]", WG = "[object Map]", UG = "[object Number]", qG = "[object Object]", GG = "[object RegExp]", KG = "[object Set]", ZG = "[object String]", XG = "[object WeakMap]", JG = "[object ArrayBuffer]", QG = "[object DataView]", eK = "[object Float32Array]", tK = "[object Float64Array]", rK = "[object Int8Array]", nK = "[object Int16Array]", iK = "[object Int32Array]", aK = "[object Uint8Array]", sK = "[object Uint8ClampedArray]", oK = "[object Uint16Array]", lK = "[object Uint32Array]", Pe = {};
Pe[eK] = Pe[tK] = Pe[rK] = Pe[nK] = Pe[iK] = Pe[aK] = Pe[sK] = Pe[oK] = Pe[lK] = !0;
Pe[LG] = Pe[jG] = Pe[JG] = Pe[zG] = Pe[QG] = Pe[HG] = Pe[VG] = Pe[YG] = Pe[WG] = Pe[UG] = Pe[qG] = Pe[GG] = Pe[KG] = Pe[ZG] = Pe[XG] = !1;
function cK(e) {
  return NG(e) && RG(e.length) && !!Pe[IG(e)];
}
var uK = cK;
function fK(e) {
  return function(t) {
    return e(t);
  };
}
var dK = fK, ml = { exports: {} };
ml.exports;
(function(e, t) {
  var r = Wb, n = t && !t.nodeType && t, i = n && !0 && e && !e.nodeType && e, a = i && i.exports === n, s = a && r.process, o = function() {
    try {
      var l = i && i.require && i.require("util").types;
      return l || s && s.binding && s.binding("util");
    } catch {
    }
  }();
  e.exports = o;
})(ml, ml.exports);
var hK = ml.exports, pK = uK, vK = dK, pm = hK, vm = pm && pm.isTypedArray, gK = vm ? vK(vm) : pK, s_ = gK, mK = MG, xK = e_, yK = yn, bK = a_, _K = t_, wK = s_, $K = Object.prototype, DK = $K.hasOwnProperty;
function EK(e, t) {
  var r = yK(e), n = !r && xK(e), i = !r && !n && bK(e), a = !r && !n && !i && wK(e), s = r || n || i || a, o = s ? mK(e.length, String) : [], l = o.length;
  for (var c in e)
    (t || DK.call(e, c)) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    _K(c, l))) && o.push(c);
  return o;
}
var AK = EK, CK = Object.prototype;
function SK(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || CK;
  return e === r;
}
var kK = SK;
function OK(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var FK = OK, TK = FK, MK = TK(Object.keys, Object), PK = MK, BK = kK, IK = PK, RK = Object.prototype, NK = RK.hasOwnProperty;
function LK(e) {
  if (!BK(e))
    return IK(e);
  var t = [];
  for (var r in Object(e))
    NK.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
var jK = LK, zK = qb, HK = vd;
function VK(e) {
  return e != null && HK(e.length) && !zK(e);
}
var YK = VK, WK = AK, UK = jK, qK = YK;
function GK(e) {
  return qK(e) ? WK(e) : UK(e);
}
var gd = GK, KK = FG, ZK = gd;
function XK(e, t) {
  return e && KK(e, t, ZK);
}
var o_ = XK, JK = Zl;
function QK() {
  this.__data__ = new JK(), this.size = 0;
}
var eZ = QK;
function tZ(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
var rZ = tZ;
function nZ(e) {
  return this.__data__.get(e);
}
var iZ = nZ;
function aZ(e) {
  return this.__data__.has(e);
}
var sZ = aZ, oZ = Zl, lZ = dd, cZ = hd, uZ = 200;
function fZ(e, t) {
  var r = this.__data__;
  if (r instanceof oZ) {
    var n = r.__data__;
    if (!lZ || n.length < uZ - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new cZ(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
var dZ = fZ, hZ = Zl, pZ = eZ, vZ = rZ, gZ = iZ, mZ = sZ, xZ = dZ;
function sa(e) {
  var t = this.__data__ = new hZ(e);
  this.size = t.size;
}
sa.prototype.clear = pZ;
sa.prototype.delete = vZ;
sa.prototype.get = gZ;
sa.prototype.has = mZ;
sa.prototype.set = xZ;
var l_ = sa, yZ = "__lodash_hash_undefined__";
function bZ(e) {
  return this.__data__.set(e, yZ), this;
}
var _Z = bZ;
function wZ(e) {
  return this.__data__.has(e);
}
var $Z = wZ, DZ = hd, EZ = _Z, AZ = $Z;
function xl(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new DZ(); ++t < r; )
    this.add(e[t]);
}
xl.prototype.add = xl.prototype.push = EZ;
xl.prototype.has = AZ;
var CZ = xl;
function SZ(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
var kZ = SZ;
function OZ(e, t) {
  return e.has(t);
}
var FZ = OZ, TZ = CZ, MZ = kZ, PZ = FZ, BZ = 1, IZ = 2;
function RZ(e, t, r, n, i, a) {
  var s = r & BZ, o = e.length, l = t.length;
  if (o != l && !(s && l > o))
    return !1;
  var c = a.get(e), u = a.get(t);
  if (c && u)
    return c == t && u == e;
  var f = -1, d = !0, h = r & IZ ? new TZ() : void 0;
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
      if (!MZ(t, function(m, y) {
        if (!PZ(h, y) && (p === m || i(p, m, r, n, a)))
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
var c_ = RZ, NZ = Vr, LZ = NZ.Uint8Array, jZ = LZ;
function zZ(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n, i) {
    r[++t] = [i, n];
  }), r;
}
var HZ = zZ;
function VZ(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n) {
    r[++t] = n;
  }), r;
}
var YZ = VZ, gm = ql, mm = jZ, WZ = Kb, UZ = c_, qZ = HZ, GZ = YZ, KZ = 1, ZZ = 2, XZ = "[object Boolean]", JZ = "[object Date]", QZ = "[object Error]", eX = "[object Map]", tX = "[object Number]", rX = "[object RegExp]", nX = "[object Set]", iX = "[object String]", aX = "[object Symbol]", sX = "[object ArrayBuffer]", oX = "[object DataView]", xm = gm ? gm.prototype : void 0, $u = xm ? xm.valueOf : void 0;
function lX(e, t, r, n, i, a, s) {
  switch (r) {
    case oX:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case sX:
      return !(e.byteLength != t.byteLength || !a(new mm(e), new mm(t)));
    case XZ:
    case JZ:
    case tX:
      return WZ(+e, +t);
    case QZ:
      return e.name == t.name && e.message == t.message;
    case rX:
    case iX:
      return e == t + "";
    case eX:
      var o = qZ;
    case nX:
      var l = n & KZ;
      if (o || (o = GZ), e.size != t.size && !l)
        return !1;
      var c = s.get(e);
      if (c)
        return c == t;
      n |= ZZ, s.set(e, t);
      var u = UZ(o(e), o(t), n, i, a, s);
      return s.delete(e), u;
    case aX:
      if ($u)
        return $u.call(e) == $u.call(t);
  }
  return !1;
}
var cX = lX;
function uX(e, t) {
  for (var r = -1, n = t.length, i = e.length; ++r < n; )
    e[i + r] = t[r];
  return e;
}
var fX = uX, dX = fX, hX = yn;
function pX(e, t, r) {
  var n = t(e);
  return hX(e) ? n : dX(n, r(e));
}
var vX = pX;
function gX(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = 0, a = []; ++r < n; ) {
    var s = e[r];
    t(s, r, e) && (a[i++] = s);
  }
  return a;
}
var mX = gX;
function xX() {
  return [];
}
var yX = xX, bX = mX, _X = yX, wX = Object.prototype, $X = wX.propertyIsEnumerable, ym = Object.getOwnPropertySymbols, DX = ym ? function(e) {
  return e == null ? [] : (e = Object(e), bX(ym(e), function(t) {
    return $X.call(e, t);
  }));
} : _X, EX = DX, AX = vX, CX = EX, SX = gd;
function kX(e) {
  return AX(e, SX, CX);
}
var OX = kX, bm = OX, FX = 1, TX = Object.prototype, MX = TX.hasOwnProperty;
function PX(e, t, r, n, i, a) {
  var s = r & FX, o = bm(e), l = o.length, c = bm(t), u = c.length;
  if (l != u && !s)
    return !1;
  for (var f = l; f--; ) {
    var d = o[f];
    if (!(s ? d in t : MX.call(t, d)))
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
var BX = PX, IX = Qn, RX = Vr, NX = IX(RX, "DataView"), LX = NX, jX = Qn, zX = Vr, HX = jX(zX, "Promise"), VX = HX, YX = Qn, WX = Vr, UX = YX(WX, "Set"), qX = UX, GX = Qn, KX = Vr, ZX = GX(KX, "WeakMap"), XX = ZX, Of = LX, Ff = dd, Tf = VX, Mf = qX, Pf = XX, u_ = bs, oa = Gb, _m = "[object Map]", JX = "[object Object]", wm = "[object Promise]", $m = "[object Set]", Dm = "[object WeakMap]", Em = "[object DataView]", QX = oa(Of), eJ = oa(Ff), tJ = oa(Tf), rJ = oa(Mf), nJ = oa(Pf), kn = u_;
(Of && kn(new Of(new ArrayBuffer(1))) != Em || Ff && kn(new Ff()) != _m || Tf && kn(Tf.resolve()) != wm || Mf && kn(new Mf()) != $m || Pf && kn(new Pf()) != Dm) && (kn = function(e) {
  var t = u_(e), r = t == JX ? e.constructor : void 0, n = r ? oa(r) : "";
  if (n)
    switch (n) {
      case QX:
        return Em;
      case eJ:
        return _m;
      case tJ:
        return wm;
      case rJ:
        return $m;
      case nJ:
        return Dm;
    }
  return t;
});
var iJ = kn, Du = l_, aJ = c_, sJ = cX, oJ = BX, Am = iJ, Cm = yn, Sm = a_, lJ = s_, cJ = 1, km = "[object Arguments]", Om = "[object Array]", Zs = "[object Object]", uJ = Object.prototype, Fm = uJ.hasOwnProperty;
function fJ(e, t, r, n, i, a) {
  var s = Cm(e), o = Cm(t), l = s ? Om : Am(e), c = o ? Om : Am(t);
  l = l == km ? Zs : l, c = c == km ? Zs : c;
  var u = l == Zs, f = c == Zs, d = l == c;
  if (d && Sm(e)) {
    if (!Sm(t))
      return !1;
    s = !0, u = !1;
  }
  if (d && !u)
    return a || (a = new Du()), s || lJ(e) ? aJ(e, t, r, n, i, a) : sJ(e, t, l, r, n, i, a);
  if (!(r & cJ)) {
    var h = u && Fm.call(e, "__wrapped__"), p = f && Fm.call(t, "__wrapped__");
    if (h || p) {
      var v = h ? e.value() : e, g = p ? t.value() : t;
      return a || (a = new Du()), i(v, g, r, n, a);
    }
  }
  return d ? (a || (a = new Du()), oJ(e, t, r, n, i, a)) : !1;
}
var dJ = fJ, hJ = dJ, Tm = _s;
function f_(e, t, r, n, i) {
  return e === t ? !0 : e == null || t == null || !Tm(e) && !Tm(t) ? e !== e && t !== t : hJ(e, t, r, n, f_, i);
}
var d_ = f_, pJ = l_, vJ = d_, gJ = 1, mJ = 2;
function xJ(e, t, r, n) {
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
      var f = new pJ();
      if (n)
        var d = n(c, u, l, e, t, f);
      if (!(d === void 0 ? vJ(u, c, gJ | mJ, n, f) : d))
        return !1;
    }
  }
  return !0;
}
var yJ = xJ, bJ = fd;
function _J(e) {
  return e === e && !bJ(e);
}
var h_ = _J, wJ = h_, $J = gd;
function DJ(e) {
  for (var t = $J(e), r = t.length; r--; ) {
    var n = t[r], i = e[n];
    t[r] = [n, i, wJ(i)];
  }
  return t;
}
var EJ = DJ;
function AJ(e, t) {
  return function(r) {
    return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
  };
}
var p_ = AJ, CJ = yJ, SJ = EJ, kJ = p_;
function OJ(e) {
  var t = SJ(e);
  return t.length == 1 && t[0][2] ? kJ(t[0][0], t[0][1]) : function(r) {
    return r === e || CJ(r, e, t);
  };
}
var FJ = OJ, TJ = Jb, MJ = Jl;
function PJ(e, t) {
  t = TJ(t, e);
  for (var r = 0, n = t.length; e != null && r < n; )
    e = e[MJ(t[r++])];
  return r && r == n ? e : void 0;
}
var v_ = PJ, BJ = v_;
function IJ(e, t, r) {
  var n = e == null ? void 0 : BJ(e, t);
  return n === void 0 ? r : n;
}
var RJ = IJ;
function NJ(e, t) {
  return e != null && t in Object(e);
}
var LJ = NJ, jJ = LJ, zJ = r_;
function HJ(e, t) {
  return e != null && zJ(e, t, jJ);
}
var VJ = HJ, YJ = d_, WJ = RJ, UJ = VJ, qJ = ud, GJ = h_, KJ = p_, ZJ = Jl, XJ = 1, JJ = 2;
function QJ(e, t) {
  return qJ(e) && GJ(t) ? KJ(ZJ(e), t) : function(r) {
    var n = WJ(r, e);
    return n === void 0 && n === t ? UJ(r, e) : YJ(t, n, XJ | JJ);
  };
}
var eQ = QJ;
function tQ(e) {
  return e;
}
var rQ = tQ;
function nQ(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
var iQ = nQ, aQ = v_;
function sQ(e) {
  return function(t) {
    return aQ(t, e);
  };
}
var oQ = sQ, lQ = iQ, cQ = oQ, uQ = ud, fQ = Jl;
function dQ(e) {
  return uQ(e) ? lQ(fQ(e)) : cQ(e);
}
var hQ = dQ, pQ = FJ, vQ = eQ, gQ = rQ, mQ = yn, xQ = hQ;
function yQ(e) {
  return typeof e == "function" ? e : e == null ? gQ : typeof e == "object" ? mQ(e) ? vQ(e[0], e[1]) : pQ(e) : xQ(e);
}
var g_ = yQ, bQ = i_, _Q = o_, wQ = g_;
function $Q(e, t) {
  var r = {};
  return t = wQ(t), _Q(e, function(n, i, a) {
    bQ(r, i, t(n, i, a));
  }), r;
}
var DQ = $Q;
const m_ = /* @__PURE__ */ ea(DQ);
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
var EQ = /[^.^\]^[]+|(?=\[\]|\.\.)/g, x_ = /^\d+$/, AQ = /^\d/, CQ = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g, SQ = /^\s*(['"]?)(.*?)(\1)\s*$/, md = 512, Mm = new ei(md), Pm = new ei(md), Bm = new ei(md), Ql = {
  Cache: ei,
  split: Bf,
  normalizePath: Eu,
  setter: function(e) {
    var t = Eu(e);
    return Pm.get(e) || Pm.set(e, function(n, i) {
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
    var r = Eu(e);
    return Bm.get(e) || Bm.set(e, function(i) {
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
      return t + (xd(r) || x_.test(r) ? "[" + r + "]" : (t ? "." : "") + r);
    }, "");
  },
  forEach: function(e, t, r) {
    kQ(Array.isArray(e) ? e : Bf(e), t, r);
  }
};
function Eu(e) {
  return Mm.get(e) || Mm.set(
    e,
    Bf(e).map(function(t) {
      return t.replace(SQ, "$2");
    })
  );
}
function Bf(e) {
  return e.match(EQ) || [""];
}
function kQ(e, t, r) {
  var n = e.length, i, a, s, o;
  for (a = 0; a < n; a++)
    i = e[a], i && (TQ(i) && (i = '"' + i + '"'), o = xd(i), s = !o && /^\d+$/.test(i), t.call(r, i, o, s, a, e));
}
function xd(e) {
  return typeof e == "string" && e && ["'", '"'].indexOf(e.charAt(0)) !== -1;
}
function OQ(e) {
  return e.match(AQ) && !e.match(x_);
}
function FQ(e) {
  return CQ.test(e);
}
function TQ(e) {
  return !xd(e) && (OQ(e) || FQ(e));
}
const Xs = {
  context: "$",
  value: "."
};
function MQ(e, t) {
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
    this.path = this.key.slice(n.length), this.getter = this.path && Ql.getter(this.path, !0), this.map = r.map;
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
function PQ(e, t) {
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
    } = r, u = PQ(r, ["value", "path", "label", "options", "originalValue", "sync"]);
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
      const E = m_(yl({
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
let BQ = (e) => e.substr(0, e.length - 1).substr(1);
function y_(e, t, r, n = r) {
  let i, a, s;
  return t ? (Ql.forEach(t, (o, l, c) => {
    let u = l ? BQ(o) : o;
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
const IQ = (e, t, r, n) => y_(e, t, r, n).schema;
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
    return r.type = this.type, r._typeError = this._typeError, r._whitelistError = this._whitelistError, r._blacklistError = this._blacklistError, r._whitelist = this._whitelist.clone(), r._blacklist = this._blacklist.clone(), r.exclusiveTests = Ht({}, this.exclusiveTests), r.deps = [...this.deps], r.conditions = [...this.conditions], r.tests = [...this.tests], r.transforms = [...this.transforms], r.spec = Ef(Ht({}, this.spec, t)), r;
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
    return t == null ? t : typeof t == "function" ? t.call(this) : Ef(t);
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
    let n = this.clone(), i = n_(t).map((a) => new Tr(a));
    return i.forEach((a) => {
      a.isSibling && n.deps.push(a.key);
    }), n.conditions.push(new bG(i, r)), n;
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
    } = y_(this, t, r, n.context);
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
const yd = at;
function b_() {
  return new yd();
}
b_.prototype = yd.prototype;
const Le = (e) => e == null;
function If() {
  return new bd();
}
class bd extends at {
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
  isTrue(t = Cf.isValue) {
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
  isFalse(t = Cf.isValue) {
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
If.prototype = bd.prototype;
let RQ = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i, NQ = /^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i, LQ = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i, jQ = (e) => Le(e) || e === e.trim(), zQ = {}.toString();
function __() {
  return new _d();
}
class _d extends at {
  constructor() {
    super({
      type: "string"
    }), this.withMutation(() => {
      this.transform(function(t) {
        if (this.isType(t) || Array.isArray(t))
          return t;
        const r = t != null && t.toString ? t.toString() : t;
        return r === zQ ? t : r;
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
    return this.matches(RQ, {
      name: "email",
      message: t,
      excludeEmptyString: !0
    });
  }
  url(t = Qt.url) {
    return this.matches(NQ, {
      name: "url",
      message: t,
      excludeEmptyString: !0
    });
  }
  uuid(t = Qt.uuid) {
    return this.matches(LQ, {
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
      test: jQ
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
__.prototype = _d.prototype;
let HQ = (e) => e != +e;
function w_() {
  return new wd();
}
class wd extends at {
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
    return t instanceof Number && (t = t.valueOf()), typeof t == "number" && !HQ(t);
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
w_.prototype = wd.prototype;
var VQ = /^(\d{4}|[+\-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,\.](\d{1,}))?)?(?:(Z)|([+\-])(\d{2})(?::?(\d{2}))?)?)?$/;
function YQ(e) {
  var t = [1, 4, 5, 6, 7, 10, 11], r = 0, n, i;
  if (i = VQ.exec(e)) {
    for (var a = 0, s; s = t[a]; ++a)
      i[s] = +i[s] || 0;
    i[2] = (+i[2] || 1) - 1, i[3] = +i[3] || 1, i[7] = i[7] ? String(i[7]).substr(0, 3) : 0, (i[8] === void 0 || i[8] === "") && (i[9] === void 0 || i[9] === "") ? n = +new Date(i[1], i[2], i[3], i[4], i[5], i[6], i[7]) : (i[8] !== "Z" && i[9] !== void 0 && (r = i[10] * 60 + i[11], i[9] === "+" && (r = 0 - r)), n = Date.UTC(i[1], i[2], i[3], i[4], i[5] + r, i[6], i[7]));
  } else
    n = Date.parse ? Date.parse(e) : NaN;
  return n;
}
let $d = /* @__PURE__ */ new Date(""), WQ = (e) => Object.prototype.toString.call(e) === "[object Date]";
function Dd() {
  return new ec();
}
class ec extends at {
  constructor() {
    super({
      type: "date"
    }), this.withMutation(() => {
      this.transform(function(t) {
        return this.isType(t) ? t : (t = YQ(t), isNaN(t) ? $d : new Date(t));
      });
    });
  }
  _typeCheck(t) {
    return WQ(t) && !isNaN(t.getTime());
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
  min(t, r = Af.min) {
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
  max(t, r = Af.max) {
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
ec.INVALID_DATE = $d;
Dd.prototype = ec.prototype;
Dd.INVALID_DATE = $d;
function UQ(e, t, r, n) {
  var i = -1, a = e == null ? 0 : e.length;
  for (n && a && (r = e[++i]); ++i < a; )
    r = t(r, e[i], i, e);
  return r;
}
var qQ = UQ;
function GQ(e) {
  return function(t) {
    return e == null ? void 0 : e[t];
  };
}
var KQ = GQ, ZQ = KQ, XQ = {
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
}, JQ = ZQ(XQ), QQ = JQ, eee = QQ, tee = ws, ree = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, nee = "\\u0300-\\u036f", iee = "\\ufe20-\\ufe2f", aee = "\\u20d0-\\u20ff", see = nee + iee + aee, oee = "[" + see + "]", lee = RegExp(oee, "g");
function cee(e) {
  return e = tee(e), e && e.replace(ree, eee).replace(lee, "");
}
var uee = cee, fee = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
function dee(e) {
  return e.match(fee) || [];
}
var hee = dee, pee = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
function vee(e) {
  return pee.test(e);
}
var gee = vee, $_ = "\\ud800-\\udfff", mee = "\\u0300-\\u036f", xee = "\\ufe20-\\ufe2f", yee = "\\u20d0-\\u20ff", bee = mee + xee + yee, D_ = "\\u2700-\\u27bf", E_ = "a-z\\xdf-\\xf6\\xf8-\\xff", _ee = "\\xac\\xb1\\xd7\\xf7", wee = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", $ee = "\\u2000-\\u206f", Dee = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", A_ = "A-Z\\xc0-\\xd6\\xd8-\\xde", Eee = "\\ufe0e\\ufe0f", C_ = _ee + wee + $ee + Dee, S_ = "['’]", Im = "[" + C_ + "]", Aee = "[" + bee + "]", k_ = "\\d+", Cee = "[" + D_ + "]", O_ = "[" + E_ + "]", F_ = "[^" + $_ + C_ + k_ + D_ + E_ + A_ + "]", See = "\\ud83c[\\udffb-\\udfff]", kee = "(?:" + Aee + "|" + See + ")", Oee = "[^" + $_ + "]", T_ = "(?:\\ud83c[\\udde6-\\uddff]){2}", M_ = "[\\ud800-\\udbff][\\udc00-\\udfff]", hi = "[" + A_ + "]", Fee = "\\u200d", Rm = "(?:" + O_ + "|" + F_ + ")", Tee = "(?:" + hi + "|" + F_ + ")", Nm = "(?:" + S_ + "(?:d|ll|m|re|s|t|ve))?", Lm = "(?:" + S_ + "(?:D|LL|M|RE|S|T|VE))?", P_ = kee + "?", B_ = "[" + Eee + "]?", Mee = "(?:" + Fee + "(?:" + [Oee, T_, M_].join("|") + ")" + B_ + P_ + ")*", Pee = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Bee = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Iee = B_ + P_ + Mee, Ree = "(?:" + [Cee, T_, M_].join("|") + ")" + Iee, Nee = RegExp([
  hi + "?" + O_ + "+" + Nm + "(?=" + [Im, hi, "$"].join("|") + ")",
  Tee + "+" + Lm + "(?=" + [Im, hi + Rm, "$"].join("|") + ")",
  hi + "?" + Rm + "+" + Nm,
  hi + "+" + Lm,
  Bee,
  Pee,
  k_,
  Ree
].join("|"), "g");
function Lee(e) {
  return e.match(Nee) || [];
}
var jee = Lee, zee = hee, Hee = gee, Vee = ws, Yee = jee;
function Wee(e, t, r) {
  return e = Vee(e), t = r ? void 0 : t, t === void 0 ? Hee(e) ? Yee(e) : zee(e) : e.match(t) || [];
}
var Uee = Wee, qee = qQ, Gee = uee, Kee = Uee, Zee = "['’]", Xee = RegExp(Zee, "g");
function Jee(e) {
  return function(t) {
    return qee(Kee(Gee(t).replace(Xee, "")), e, "");
  };
}
var I_ = Jee, Qee = I_, ete = Qee(function(e, t, r) {
  return e + (r ? "_" : "") + t.toLowerCase();
}), tte = ete;
const jm = /* @__PURE__ */ ea(tte);
function rte(e, t, r) {
  var n = -1, i = e.length;
  t < 0 && (t = -t > i ? 0 : i + t), r = r > i ? i : r, r < 0 && (r += i), i = t > r ? 0 : r - t >>> 0, t >>>= 0;
  for (var a = Array(i); ++n < i; )
    a[n] = e[n + t];
  return a;
}
var nte = rte, ite = nte;
function ate(e, t, r) {
  var n = e.length;
  return r = r === void 0 ? n : r, !t && r >= n ? e : ite(e, t, r);
}
var ste = ate, ote = "\\ud800-\\udfff", lte = "\\u0300-\\u036f", cte = "\\ufe20-\\ufe2f", ute = "\\u20d0-\\u20ff", fte = lte + cte + ute, dte = "\\ufe0e\\ufe0f", hte = "\\u200d", pte = RegExp("[" + hte + ote + fte + dte + "]");
function vte(e) {
  return pte.test(e);
}
var R_ = vte;
function gte(e) {
  return e.split("");
}
var mte = gte, N_ = "\\ud800-\\udfff", xte = "\\u0300-\\u036f", yte = "\\ufe20-\\ufe2f", bte = "\\u20d0-\\u20ff", _te = xte + yte + bte, wte = "\\ufe0e\\ufe0f", $te = "[" + N_ + "]", Rf = "[" + _te + "]", Nf = "\\ud83c[\\udffb-\\udfff]", Dte = "(?:" + Rf + "|" + Nf + ")", L_ = "[^" + N_ + "]", j_ = "(?:\\ud83c[\\udde6-\\uddff]){2}", z_ = "[\\ud800-\\udbff][\\udc00-\\udfff]", Ete = "\\u200d", H_ = Dte + "?", V_ = "[" + wte + "]?", Ate = "(?:" + Ete + "(?:" + [L_, j_, z_].join("|") + ")" + V_ + H_ + ")*", Cte = V_ + H_ + Ate, Ste = "(?:" + [L_ + Rf + "?", Rf, j_, z_, $te].join("|") + ")", kte = RegExp(Nf + "(?=" + Nf + ")|" + Ste + Cte, "g");
function Ote(e) {
  return e.match(kte) || [];
}
var Fte = Ote, Tte = mte, Mte = R_, Pte = Fte;
function Bte(e) {
  return Mte(e) ? Pte(e) : Tte(e);
}
var Ite = Bte, Rte = ste, Nte = R_, Lte = Ite, jte = ws;
function zte(e) {
  return function(t) {
    t = jte(t);
    var r = Nte(t) ? Lte(t) : void 0, n = r ? r[0] : t.charAt(0), i = r ? Rte(r, 1).join("") : t.slice(1);
    return n[e]() + i;
  };
}
var Hte = zte, Vte = Hte, Yte = Vte("toUpperCase"), Wte = Yte, Ute = ws, qte = Wte;
function Gte(e) {
  return qte(Ute(e).toLowerCase());
}
var Kte = Gte, Zte = Kte, Xte = I_, Jte = Xte(function(e, t, r) {
  return t = t.toLowerCase(), e + (r ? Zte(t) : t);
}), Qte = Jte;
const ere = /* @__PURE__ */ ea(Qte);
var tre = i_, rre = o_, nre = g_;
function ire(e, t) {
  var r = {};
  return t = nre(t), rre(e, function(n, i, a) {
    tre(r, t(n, i, a), n);
  }), r;
}
var are = ire;
const sre = /* @__PURE__ */ ea(are);
var Ed = { exports: {} };
Ed.exports = function(e) {
  return Y_(ore(e), e);
};
Ed.exports.array = Y_;
function Y_(e, t) {
  var r = e.length, n = new Array(r), i = {}, a = r, s = lre(t), o = cre(e);
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
function ore(e) {
  for (var t = /* @__PURE__ */ new Set(), r = 0, n = e.length; r < n; r++) {
    var i = e[r];
    t.add(i[0]), t.add(i[1]);
  }
  return Array.from(t);
}
function lre(e) {
  for (var t = /* @__PURE__ */ new Map(), r = 0, n = e.length; r < n; r++) {
    var i = e[r];
    t.has(i[0]) || t.set(i[0], /* @__PURE__ */ new Set()), t.has(i[1]) || t.set(i[1], /* @__PURE__ */ new Set()), t.get(i[0]).add(i[1]);
  }
  return t;
}
function cre(e) {
  for (var t = /* @__PURE__ */ new Map(), r = 0, n = e.length; r < n; r++)
    t.set(e[r], r);
  return t;
}
var ure = Ed.exports;
const fre = /* @__PURE__ */ ea(ure);
function dre(e, t = []) {
  let r = [], n = /* @__PURE__ */ new Set(), i = new Set(t.map(([s, o]) => `${s}-${o}`));
  function a(s, o) {
    let l = Ql.split(s)[0];
    n.add(l), i.has(`${o}-${l}`) || r.push([o, l]);
  }
  for (const s in e)
    if (pl(e, s)) {
      let o = e[s];
      n.add(s), Tr.isRef(o) && o.isSibling ? a(o.path, s) : aa(o) && "deps" in o && o.deps.forEach((l) => a(l, s));
    }
  return fre.array(Array.from(n), r).reverse();
}
function zm(e, t) {
  let r = 1 / 0;
  return e.some((n, i) => {
    var a;
    if (((a = t.path) == null ? void 0 : a.indexOf(n)) !== -1)
      return r = i, !0;
  }), r;
}
function W_(e) {
  return (t, r) => zm(e, t) - zm(e, r);
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
let Hm = (e) => Object.prototype.toString.call(e) === "[object Object]";
function hre(e, t) {
  let r = Object.keys(e.fields);
  return Object.keys(t).filter((n) => r.indexOf(n) === -1);
}
const pre = W_([]);
class Ad extends at {
  constructor(t) {
    super({
      type: "object"
    }), this.fields = /* @__PURE__ */ Object.create(null), this._sortErrors = pre, this._nodes = [], this._excludedEdges = [], this.withMutation(() => {
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
    return Hm(t) || typeof t == "function";
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
      if (!c || !Hm(f)) {
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
    return n.fields = i, n._sortErrors = W_(Object.keys(i)), r.length && (Array.isArray(r[0]) || (r = [r]), n._excludedEdges = [...n._excludedEdges, ...r]), n._nodes = dre(i, n._excludedEdges), n;
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
    let i = Ql.getter(t, !0);
    return this.transform((a) => {
      if (a == null)
        return a;
      let s = a;
      return pl(a, t) && (s = xi({}, a), n || delete s[t], s[r] = i(a)), s;
    });
  }
  noUnknown(t = !0, r = Sf.noUnknown) {
    typeof t == "string" && (r = t, t = !0);
    let n = this.test({
      name: "noUnknown",
      exclusive: !0,
      message: r,
      test(i) {
        if (i == null)
          return !0;
        const a = hre(this.schema, i);
        return !t || a.length === 0 || this.createError({
          params: {
            unknown: a.join(", ")
          }
        });
      }
    });
    return n.spec.noUnknown = t, n;
  }
  unknown(t = !0, r = Sf.noUnknown) {
    return this.noUnknown(!t, r);
  }
  transformKeys(t) {
    return this.transform((r) => r && sre(r, (n, i) => t(i)));
  }
  camelCase() {
    return this.transformKeys(ere);
  }
  snakeCase() {
    return this.transformKeys(jm);
  }
  constantCase() {
    return this.transformKeys((t) => jm(t).toUpperCase());
  }
  describe() {
    let t = super.describe();
    return t.fields = m_(this.fields, (r) => r.describe()), t;
  }
}
function U_(e) {
  return new Ad(e);
}
U_.prototype = Ad.prototype;
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
function q_(e) {
  return new Cd(e);
}
class Cd extends at {
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
  length(t, r = xo.length) {
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
    return r = r || xo.min, this.test({
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
    return r = r || xo.max, this.test({
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
q_.prototype = Cd.prototype;
function vre(e) {
  return new gre(e);
}
class gre {
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
function mre(e) {
  Object.keys(e).forEach((t) => {
    Object.keys(e[t]).forEach((r) => {
      BY[t][r] = e[t][r];
    });
  });
}
function xre(e, t, r) {
  if (!e || !aa(e.prototype))
    throw new TypeError("You must provide a yup schema constructor function");
  if (typeof t != "string")
    throw new TypeError("A Method name must be provided");
  if (typeof r != "function")
    throw new TypeError("Method function must be provided");
  e.prototype[t] = r;
}
const yre = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ArraySchema: Cd,
  BaseSchema: at,
  BooleanSchema: bd,
  DateSchema: ec,
  MixedSchema: yd,
  NumberSchema: wd,
  ObjectSchema: Ad,
  StringSchema: _d,
  ValidationError: Dt,
  addMethod: xre,
  array: q_,
  bool: If,
  boolean: If,
  date: Dd,
  isSchema: aa,
  lazy: vre,
  mixed: b_,
  number: w_,
  object: U_,
  reach: IQ,
  ref: MQ,
  setLocale: mre,
  string: __
}, Symbol.toStringTag, { value: "Module" })), bre = {
  只能為英文: "只能為英文",
  必須為數字: "必須為數字",
  必須為網址: "必須為網址",
  不能含特殊字元: "不能含特殊字元",
  必須為電子郵件: "必須為電子郵件"
}, _re = new bx({
  def: "zh-TW",
  locales: {
    "zh-TW": bre,
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
}), Da = (e) => _re.key(e).get(window.__ng_config.libOptions.lang), wre = {
  text: {
    handler: (e, t) => {
      let r = e.string();
      return t && t.min != null && (r = r.min(t.min)), t && t.max != null && (r = r.max(t.max)), r;
    }
  },
  number: {
    handler: (e, t) => {
      let r = e.number();
      return t && t.min != null && (r = r.min(t.min)), t && t.max != null && (r = r.max(t.max)), r.typeError(Da("必須為數字"));
    }
  },
  enum: {
    handler: (e, t) => e.string().oneOf((t == null ? void 0 : t.keys) || [])
  },
  email: {
    handler: (e) => e.string().trim().email(Da("必須為電子郵件"))
  },
  url: {
    handler: (e) => e.string().trim().url(Da("必須為網址"))
  },
  english: {
    handler: (e) => e.string().trim().matches(/^[^\u4e00-\u9eff]+$/, Da("只能為英文"))
  },
  excludeSpecialChars: {
    handler: (e) => e.string().matches(/^[^()[\]{}<>+*/?"_\\|~`!@#$%^&=]*$/, Da("不能含特殊字元"))
  }
}, $re = Kt.checkout("validate");
class Dre {
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
const Vm = (e) => typeof e == "string" && e.trim() === "" || e == null, Ym = ({ rule: e, required: t, requireMessage: r, meta: n }) => ({
  required: t,
  handler: (i, a) => {
    let s = i.required == null ? t : i.required;
    if (s && Vm(a))
      return e.requireMessage ? e.requireMessage() : r();
    if (s === !1 && Vm(a))
      return !0;
    try {
      e.handler(yre, n[0]).notRequired().validateSync(a);
    } catch (o) {
      return typeof o == "string" ? o : o.errors[0];
    }
    return !0;
  }
});
class Ere {
  constructor(t) {
    G(this, "options", {
      rules: {},
      requireMessage: () => "required"
    });
    t && Object.assign(this.options, t);
  }
  static getBasicRules() {
    return wre;
  }
  getRule(t, r, ...n) {
    let i = this.options.rules[t];
    if (i == null)
      throw $re.create(`Rule ${t} not found.`);
    return Ym({
      meta: n,
      required: r,
      requireMessage: this.options.requireMessage,
      rule: i
    });
  }
  customize(t) {
    return Ym({
      meta: [],
      required: t.required,
      requireMessage: this.options.requireMessage,
      rule: t
    });
  }
  defineValidation(t) {
    return new Dre(this, t(this.getRule.bind(this), this.customize.bind(this)));
  }
}
class Sd {
  static inWorker() {
    return typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope;
  }
  static define(t) {
    if (Sd.inWorker()) {
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
    }, n = typeof t == "function" ? new t() : t, i = new mt(), a = new mt(), s = new Xf(n);
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
class Are extends U2 {
  constructor() {
    super({
      name: "root",
      interceptorMessage(r) {
        return k0(r, "Error!");
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
class G_ {
  constructor(t) {
    G(this, "params");
    G(this, "aliveMap", /* @__PURE__ */ new Map());
    this.params = t;
  }
  toKey(t) {
    return this.params.ns() + "/" + t;
  }
  create(t, r) {
    const n = Jh(), i = this.toKey(t);
    if (this.aliveMap.has(i))
      return this.aliveMap.get(i);
    let a;
    try {
      a = n.get(i);
    } catch {
      a = r;
    }
    const s = Ce(Co.setMapValue(r, a));
    return me(() => s, () => n.set(i, s), {
      deep: !0
    }), this.aliveMap.set(i, s), s;
  }
  remove(t) {
    Jh().remove(this.toKey(t));
  }
}
const Cre = new G_({
  ns: () => {
    const e = As();
    return `lib-query-sync-${e.service}-${e.stage}`;
  }
});
class K_ {
}
G(K_, "define", (t) => {
  const r = t.ns(), n = t.defs(), i = t.persist ? Cre.create(r, t.defs()) : Ce(t.defs()), a = {
    installed: !1
  };
  return () => {
    const s = t.router(), o = (y) => `l-${r}-${y}`, l = new mt(), c = ty(() => {
      let y = s.getCurrentRoute();
      y.query && d(y.query);
    }, 25), u = new Al({
      delay: 100,
      maxValueLength: 100
    });
    u.on("trigger", ({ values: y }) => {
      l.emit("change", {
        keys: q2.unique(y)
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
      me(() => i[y], () => {
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
      isChange: () => Co.simpleCheckDeepDiff(n, i),
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
const kd = async (e) => {
  let t = 1, r = [], n = 100;
  for (; n > 0; ) {
    let i = await e.fetch(t);
    if (r.push(...e.pick(i)), t += 1, n -= 1, e.done(i))
      break;
  }
  return r;
}, Sre = async (e) => await kd({
  done: (r) => r.meta.pagination.total <= r.meta.pagination.page * r.meta.pagination.pageSize,
  pick: (r) => r.data,
  fetch: async (r) => await e(r)
}), kre = async (e) => await kd({
  pick: (r) => r.data,
  done: (r) => !r.links.next,
  fetch: async (r) => await e(r)
});
function Z_(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Ore } = Object.prototype, { getPrototypeOf: Od } = Object, tc = /* @__PURE__ */ ((e) => (t) => {
  const r = Ore.call(t);
  return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), br = (e) => (e = e.toLowerCase(), (t) => tc(t) === e), rc = (e) => (t) => typeof t === e, { isArray: la } = Array, os = rc("undefined");
function Fre(e) {
  return e !== null && !os(e) && e.constructor !== null && !os(e.constructor) && Ut(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const X_ = br("ArrayBuffer");
function Tre(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && X_(e.buffer), t;
}
const Mre = rc("string"), Ut = rc("function"), J_ = rc("number"), nc = (e) => e !== null && typeof e == "object", Pre = (e) => e === !0 || e === !1, yo = (e) => {
  if (tc(e) !== "object")
    return !1;
  const t = Od(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, Bre = br("Date"), Ire = br("File"), Rre = br("Blob"), Nre = br("FileList"), Lre = (e) => nc(e) && Ut(e.pipe), jre = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || Ut(e.append) && ((t = tc(e)) === "formdata" || // detect form-data instance
  t === "object" && Ut(e.toString) && e.toString() === "[object FormData]"));
}, zre = br("URLSearchParams"), Hre = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
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
function Q_(e, t) {
  t = t.toLowerCase();
  const r = Object.keys(e);
  let n = r.length, i;
  for (; n-- > 0; )
    if (i = r[n], t === i.toLowerCase())
      return i;
  return null;
}
const e2 = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, t2 = (e) => !os(e) && e !== e2;
function Lf() {
  const { caseless: e } = t2(this) && this || {}, t = {}, r = (n, i) => {
    const a = e && Q_(t, i) || i;
    yo(t[a]) && yo(n) ? t[a] = Lf(t[a], n) : yo(n) ? t[a] = Lf({}, n) : la(n) ? t[a] = n.slice() : t[a] = n;
  };
  for (let n = 0, i = arguments.length; n < i; n++)
    arguments[n] && $s(arguments[n], r);
  return t;
}
const Vre = (e, t, r, { allOwnKeys: n } = {}) => ($s(t, (i, a) => {
  r && Ut(i) ? e[a] = Z_(i, r) : e[a] = i;
}, { allOwnKeys: n }), e), Yre = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Wre = (e, t, r, n) => {
  e.prototype = Object.create(t.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), r && Object.assign(e.prototype, r);
}, Ure = (e, t, r, n) => {
  let i, a, s;
  const o = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (i = Object.getOwnPropertyNames(e), a = i.length; a-- > 0; )
      s = i[a], (!n || n(s, e, t)) && !o[s] && (t[s] = e[s], o[s] = !0);
    e = r !== !1 && Od(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}, qre = (e, t, r) => {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  const n = e.indexOf(t, r);
  return n !== -1 && n === r;
}, Gre = (e) => {
  if (!e)
    return null;
  if (la(e))
    return e;
  let t = e.length;
  if (!J_(t))
    return null;
  const r = new Array(t);
  for (; t-- > 0; )
    r[t] = e[t];
  return r;
}, Kre = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Od(Uint8Array)), Zre = (e, t) => {
  const n = (e && e[Symbol.iterator]).call(e);
  let i;
  for (; (i = n.next()) && !i.done; ) {
    const a = i.value;
    t.call(e, a[0], a[1]);
  }
}, Xre = (e, t) => {
  let r;
  const n = [];
  for (; (r = e.exec(t)) !== null; )
    n.push(r);
  return n;
}, Jre = br("HTMLFormElement"), Qre = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, n, i) {
    return n.toUpperCase() + i;
  }
), Wm = (({ hasOwnProperty: e }) => (t, r) => e.call(t, r))(Object.prototype), ene = br("RegExp"), r2 = (e, t) => {
  const r = Object.getOwnPropertyDescriptors(e), n = {};
  $s(r, (i, a) => {
    let s;
    (s = t(i, a, e)) !== !1 && (n[a] = s || i);
  }), Object.defineProperties(e, n);
}, tne = (e) => {
  r2(e, (t, r) => {
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
}, rne = (e, t) => {
  const r = {}, n = (i) => {
    i.forEach((a) => {
      r[a] = !0;
    });
  };
  return la(e) ? n(e) : n(String(e).split(t)), r;
}, nne = () => {
}, ine = (e, t) => (e = +e, Number.isFinite(e) ? e : t), Au = "abcdefghijklmnopqrstuvwxyz", Um = "0123456789", n2 = {
  DIGIT: Um,
  ALPHA: Au,
  ALPHA_DIGIT: Au + Au.toUpperCase() + Um
}, ane = (e = 16, t = n2.ALPHA_DIGIT) => {
  let r = "";
  const { length: n } = t;
  for (; e--; )
    r += t[Math.random() * n | 0];
  return r;
};
function sne(e) {
  return !!(e && Ut(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const one = (e) => {
  const t = new Array(10), r = (n, i) => {
    if (nc(n)) {
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
}, lne = br("AsyncFunction"), cne = (e) => e && (nc(e) || Ut(e)) && Ut(e.then) && Ut(e.catch), L = {
  isArray: la,
  isArrayBuffer: X_,
  isBuffer: Fre,
  isFormData: jre,
  isArrayBufferView: Tre,
  isString: Mre,
  isNumber: J_,
  isBoolean: Pre,
  isObject: nc,
  isPlainObject: yo,
  isUndefined: os,
  isDate: Bre,
  isFile: Ire,
  isBlob: Rre,
  isRegExp: ene,
  isFunction: Ut,
  isStream: Lre,
  isURLSearchParams: zre,
  isTypedArray: Kre,
  isFileList: Nre,
  forEach: $s,
  merge: Lf,
  extend: Vre,
  trim: Hre,
  stripBOM: Yre,
  inherits: Wre,
  toFlatObject: Ure,
  kindOf: tc,
  kindOfTest: br,
  endsWith: qre,
  toArray: Gre,
  forEachEntry: Zre,
  matchAll: Xre,
  isHTMLForm: Jre,
  hasOwnProperty: Wm,
  hasOwnProp: Wm,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: r2,
  freezeMethods: tne,
  toObjectSet: rne,
  toCamelCase: Qre,
  noop: nne,
  toFiniteNumber: ine,
  findKey: Q_,
  global: e2,
  isContextDefined: t2,
  ALPHABET: n2,
  generateString: ane,
  isSpecCompliantForm: sne,
  toJSONObject: one,
  isAsyncFn: lne,
  isThenable: cne
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
const i2 = we.prototype, a2 = {};
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
  a2[e] = { value: e };
});
Object.defineProperties(we, a2);
Object.defineProperty(i2, "isAxiosError", { value: !0 });
we.from = (e, t, r, n, i, a) => {
  const s = Object.create(i2);
  return L.toFlatObject(e, s, function(l) {
    return l !== Error.prototype;
  }, (o) => o !== "isAxiosError"), we.call(s, e.message, t, r, n, i), s.cause = e, s.name = e.name, a && Object.assign(s, a), s;
};
const une = null;
function jf(e) {
  return L.isPlainObject(e) || L.isArray(e);
}
function s2(e) {
  return L.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function qm(e, t, r) {
  return e ? e.concat(t).map(function(i, a) {
    return i = s2(i), !r && a ? "[" + i + "]" : i;
  }).join(r ? "." : "") : t;
}
function fne(e) {
  return L.isArray(e) && !e.some(jf);
}
const dne = L.toFlatObject(L, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function ic(e, t, r) {
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
      else if (L.isArray(p) && fne(p) || (L.isFileList(p) || L.endsWith(v, "[]")) && (m = L.toArray(p)))
        return v = s2(v), m.forEach(function(_, x) {
          !(L.isUndefined(_) || _ === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            s === !0 ? qm([v], x, a) : s === null ? v : v + "[]",
            c(_)
          );
        }), !1;
    }
    return jf(p) ? !0 : (t.append(qm(g, v, a), c(p)), !1);
  }
  const f = [], d = Object.assign(dne, {
    defaultVisitor: u,
    convertValue: c,
    isVisitable: jf
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
function Gm(e) {
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
function Fd(e, t) {
  this._pairs = [], e && ic(e, this, t);
}
const o2 = Fd.prototype;
o2.append = function(t, r) {
  this._pairs.push([t, r]);
};
o2.toString = function(t) {
  const r = t ? function(n) {
    return t.call(this, n, Gm);
  } : Gm;
  return this._pairs.map(function(i) {
    return r(i[0]) + "=" + r(i[1]);
  }, "").join("&");
};
function hne(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function l2(e, t, r) {
  if (!t)
    return e;
  const n = r && r.encode || hne, i = r && r.serialize;
  let a;
  if (i ? a = i(t, r) : a = L.isURLSearchParams(t) ? t.toString() : new Fd(t, r).toString(n), a) {
    const s = e.indexOf("#");
    s !== -1 && (e = e.slice(0, s)), e += (e.indexOf("?") === -1 ? "?" : "&") + a;
  }
  return e;
}
class Km {
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
const c2 = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, pne = typeof URLSearchParams < "u" ? URLSearchParams : Fd, vne = typeof FormData < "u" ? FormData : null, gne = typeof Blob < "u" ? Blob : null, mne = {
  isBrowser: !0,
  classes: {
    URLSearchParams: pne,
    FormData: vne,
    Blob: gne
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, u2 = typeof window < "u" && typeof document < "u", xne = ((e) => u2 && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(typeof navigator < "u" && navigator.product), yne = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", bne = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: u2,
  hasStandardBrowserEnv: xne,
  hasStandardBrowserWebWorkerEnv: yne
}, Symbol.toStringTag, { value: "Module" })), pr = {
  ...bne,
  ...mne
};
function _ne(e, t) {
  return ic(e, new pr.classes.URLSearchParams(), Object.assign({
    visitor: function(r, n, i, a) {
      return pr.isNode && L.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : a.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function wne(e) {
  return L.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function $ne(e) {
  const t = {}, r = Object.keys(e);
  let n;
  const i = r.length;
  let a;
  for (n = 0; n < i; n++)
    a = r[n], t[a] = e[a];
  return t;
}
function f2(e) {
  function t(r, n, i, a) {
    let s = r[a++];
    if (s === "__proto__")
      return !0;
    const o = Number.isFinite(+s), l = a >= r.length;
    return s = !s && L.isArray(i) ? i.length : s, l ? (L.hasOwnProp(i, s) ? i[s] = [i[s], n] : i[s] = n, !o) : ((!i[s] || !L.isObject(i[s])) && (i[s] = []), t(r, n, i[s], a) && L.isArray(i[s]) && (i[s] = $ne(i[s])), !o);
  }
  if (L.isFormData(e) && L.isFunction(e.entries)) {
    const r = {};
    return L.forEachEntry(e, (n, i) => {
      t(wne(n), i, r, 0);
    }), r;
  }
  return null;
}
function Dne(e, t, r) {
  if (L.isString(e))
    try {
      return (t || JSON.parse)(e), L.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (r || JSON.stringify)(e);
}
const Td = {
  transitional: c2,
  adapter: ["xhr", "http"],
  transformRequest: [function(t, r) {
    const n = r.getContentType() || "", i = n.indexOf("application/json") > -1, a = L.isObject(t);
    if (a && L.isHTMLForm(t) && (t = new FormData(t)), L.isFormData(t))
      return i && i ? JSON.stringify(f2(t)) : t;
    if (L.isArrayBuffer(t) || L.isBuffer(t) || L.isStream(t) || L.isFile(t) || L.isBlob(t))
      return t;
    if (L.isArrayBufferView(t))
      return t.buffer;
    if (L.isURLSearchParams(t))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let o;
    if (a) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return _ne(t, this.formSerializer).toString();
      if ((o = L.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
        const l = this.env && this.env.FormData;
        return ic(
          o ? { "files[]": t } : t,
          l && new l(),
          this.formSerializer
        );
      }
    }
    return a || i ? (r.setContentType("application/json", !1), Dne(t)) : t;
  }],
  transformResponse: [function(t) {
    const r = this.transitional || Td.transitional, n = r && r.forcedJSONParsing, i = this.responseType === "json";
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
  Td.headers[e] = {};
});
const Md = Td, Ene = L.toObjectSet([
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
]), Ane = (e) => {
  const t = {};
  let r, n, i;
  return e && e.split(`
`).forEach(function(s) {
    i = s.indexOf(":"), r = s.substring(0, i).trim().toLowerCase(), n = s.substring(i + 1).trim(), !(!r || t[r] && Ene[r]) && (r === "set-cookie" ? t[r] ? t[r].push(n) : t[r] = [n] : t[r] = t[r] ? t[r] + ", " + n : n);
  }), t;
}, Zm = Symbol("internals");
function Ea(e) {
  return e && String(e).trim().toLowerCase();
}
function bo(e) {
  return e === !1 || e == null ? e : L.isArray(e) ? e.map(bo) : String(e);
}
function Cne(e) {
  const t = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(e); )
    t[n[1]] = n[2];
  return t;
}
const Sne = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Cu(e, t, r, n, i) {
  if (L.isFunction(n))
    return n.call(this, t, r);
  if (i && (t = r), !!L.isString(t)) {
    if (L.isString(n))
      return t.indexOf(n) !== -1;
    if (L.isRegExp(n))
      return n.test(t);
  }
}
function kne(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, r, n) => r.toUpperCase() + n);
}
function One(e, t) {
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
class ac {
  constructor(t) {
    t && this.set(t);
  }
  set(t, r, n) {
    const i = this;
    function a(o, l, c) {
      const u = Ea(l);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const f = L.findKey(i, u);
      (!f || i[f] === void 0 || c === !0 || c === void 0 && i[f] !== !1) && (i[f || l] = bo(o));
    }
    const s = (o, l) => L.forEach(o, (c, u) => a(c, u, l));
    return L.isPlainObject(t) || t instanceof this.constructor ? s(t, r) : L.isString(t) && (t = t.trim()) && !Sne(t) ? s(Ane(t), r) : t != null && a(r, t, n), this;
  }
  get(t, r) {
    if (t = Ea(t), t) {
      const n = L.findKey(this, t);
      if (n) {
        const i = this[n];
        if (!r)
          return i;
        if (r === !0)
          return Cne(i);
        if (L.isFunction(r))
          return r.call(this, i, n);
        if (L.isRegExp(r))
          return r.exec(i);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, r) {
    if (t = Ea(t), t) {
      const n = L.findKey(this, t);
      return !!(n && this[n] !== void 0 && (!r || Cu(this, this[n], n, r)));
    }
    return !1;
  }
  delete(t, r) {
    const n = this;
    let i = !1;
    function a(s) {
      if (s = Ea(s), s) {
        const o = L.findKey(n, s);
        o && (!r || Cu(n, n[o], o, r)) && (delete n[o], i = !0);
      }
    }
    return L.isArray(t) ? t.forEach(a) : a(t), i;
  }
  clear(t) {
    const r = Object.keys(this);
    let n = r.length, i = !1;
    for (; n--; ) {
      const a = r[n];
      (!t || Cu(this, this[a], a, t, !0)) && (delete this[a], i = !0);
    }
    return i;
  }
  normalize(t) {
    const r = this, n = {};
    return L.forEach(this, (i, a) => {
      const s = L.findKey(n, a);
      if (s) {
        r[s] = bo(i), delete r[a];
        return;
      }
      const o = t ? kne(a) : String(a).trim();
      o !== a && delete r[a], r[o] = bo(i), n[o] = !0;
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
    const n = (this[Zm] = this[Zm] = {
      accessors: {}
    }).accessors, i = this.prototype;
    function a(s) {
      const o = Ea(s);
      n[o] || (One(i, s), n[o] = !0);
    }
    return L.isArray(t) ? t.forEach(a) : a(t), this;
  }
}
ac.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
L.reduceDescriptors(ac.prototype, ({ value: e }, t) => {
  let r = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(n) {
      this[r] = n;
    }
  };
});
L.freezeMethods(ac);
const Mr = ac;
function Su(e, t) {
  const r = this || Md, n = t || r, i = Mr.from(n.headers);
  let a = n.data;
  return L.forEach(e, function(o) {
    a = o.call(r, a, i.normalize(), t ? t.status : void 0);
  }), i.normalize(), a;
}
function d2(e) {
  return !!(e && e.__CANCEL__);
}
function Ds(e, t, r) {
  we.call(this, e ?? "canceled", we.ERR_CANCELED, t, r), this.name = "CanceledError";
}
L.inherits(Ds, we, {
  __CANCEL__: !0
});
function Fne(e, t, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? e(r) : t(new we(
    "Request failed with status code " + r.status,
    [we.ERR_BAD_REQUEST, we.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
const Tne = pr.hasStandardBrowserEnv ? (
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
function Mne(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Pne(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function h2(e, t) {
  return e && !Mne(t) ? Pne(e, t) : t;
}
const Bne = pr.hasStandardBrowserEnv ? (
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
function Ine(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Rne(e, t) {
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
function Xm(e, t) {
  let r = 0;
  const n = Rne(50, 250);
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
const Nne = typeof XMLHttpRequest < "u", Lne = Nne && function(e) {
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
    const d = h2(e.baseURL, e.url);
    f.open(e.method.toUpperCase(), l2(d, e.params, e.paramsSerializer), !0), f.timeout = e.timeout;
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
      Fne(function(_) {
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
      const m = e.transitional || c2;
      e.timeoutErrorMessage && (g = e.timeoutErrorMessage), n(new we(
        g,
        m.clarifyTimeoutError ? we.ETIMEDOUT : we.ECONNABORTED,
        e,
        f
      )), f = null;
    }, pr.hasStandardBrowserEnv && (o && L.isFunction(o) && (o = o(e)), o || o !== !1 && Bne(d))) {
      const v = e.xsrfHeaderName && e.xsrfCookieName && Tne.read(e.xsrfCookieName);
      v && a.set(e.xsrfHeaderName, v);
    }
    i === void 0 && a.setContentType(null), "setRequestHeader" in f && L.forEach(a.toJSON(), function(g, m) {
      f.setRequestHeader(m, g);
    }), L.isUndefined(e.withCredentials) || (f.withCredentials = !!e.withCredentials), s && s !== "json" && (f.responseType = e.responseType), typeof e.onDownloadProgress == "function" && f.addEventListener("progress", Xm(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && f.upload && f.upload.addEventListener("progress", Xm(e.onUploadProgress)), (e.cancelToken || e.signal) && (l = (v) => {
      f && (n(!v || v.type ? new Ds(null, e, f) : v), f.abort(), f = null);
    }, e.cancelToken && e.cancelToken.subscribe(l), e.signal && (e.signal.aborted ? l() : e.signal.addEventListener("abort", l)));
    const p = Ine(d);
    if (p && pr.protocols.indexOf(p) === -1) {
      n(new we("Unsupported protocol " + p + ":", we.ERR_BAD_REQUEST, e));
      return;
    }
    f.send(i || null);
  });
}, zf = {
  http: une,
  xhr: Lne
};
L.forEach(zf, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Jm = (e) => `- ${e}`, jne = (e) => L.isFunction(e) || e === null || e === !1, p2 = {
  getAdapter: (e) => {
    e = L.isArray(e) ? e : [e];
    const { length: t } = e;
    let r, n;
    const i = {};
    for (let a = 0; a < t; a++) {
      r = e[a];
      let s;
      if (n = r, !jne(r) && (n = zf[(s = String(r)).toLowerCase()], n === void 0))
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
` + a.map(Jm).join(`
`) : " " + Jm(a[0]) : "as no adapter specified";
      throw new we(
        "There is no suitable adapter to dispatch the request " + s,
        "ERR_NOT_SUPPORT"
      );
    }
    return n;
  },
  adapters: zf
};
function ku(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Ds(null, e);
}
function Qm(e) {
  return ku(e), e.headers = Mr.from(e.headers), e.data = Su.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), p2.getAdapter(e.adapter || Md.adapter)(e).then(function(n) {
    return ku(e), n.data = Su.call(
      e,
      e.transformResponse,
      n
    ), n.headers = Mr.from(n.headers), n;
  }, function(n) {
    return d2(n) || (ku(e), n && n.response && (n.response.data = Su.call(
      e,
      e.transformResponse,
      n.response
    ), n.response.headers = Mr.from(n.response.headers))), Promise.reject(n);
  });
}
const ex = (e) => e instanceof Mr ? e.toJSON() : e;
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
    headers: (c, u) => i(ex(c), ex(u), !0)
  };
  return L.forEach(Object.keys(Object.assign({}, e, t)), function(u) {
    const f = l[u] || i, d = f(e[u], t[u], u);
    L.isUndefined(d) && f !== o || (r[u] = d);
  }), r;
}
const v2 = "1.6.5", Pd = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Pd[e] = function(n) {
    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const tx = {};
Pd.transitional = function(t, r, n) {
  function i(a, s) {
    return "[Axios v" + v2 + "] Transitional option '" + a + "'" + s + (n ? ". " + n : "");
  }
  return (a, s, o) => {
    if (t === !1)
      throw new we(
        i(s, " has been removed" + (r ? " in " + r : "")),
        we.ERR_DEPRECATED
      );
    return r && !tx[s] && (tx[s] = !0, console.warn(
      i(
        s,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), t ? t(a, s, o) : !0;
  };
};
function zne(e, t, r) {
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
const Hf = {
  assertOptions: zne,
  validators: Pd
}, Zr = Hf.validators;
class wl {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new Km(),
      response: new Km()
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
    n !== void 0 && Hf.assertOptions(n, {
      silentJSONParsing: Zr.transitional(Zr.boolean),
      forcedJSONParsing: Zr.transitional(Zr.boolean),
      clarifyTimeoutError: Zr.transitional(Zr.boolean)
    }, !1), i != null && (L.isFunction(i) ? r.paramsSerializer = {
      serialize: i
    } : Hf.assertOptions(i, {
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
      const p = [Qm.bind(this), void 0];
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
      u = Qm.call(this, h);
    } catch (p) {
      return Promise.reject(p);
    }
    for (f = 0, d = c.length; f < d; )
      u = u.then(c[f++], c[f++]);
    return u;
  }
  getUri(t) {
    t = ji(this.defaults, t);
    const r = h2(t.baseURL, t.url);
    return l2(r, t.params, t.paramsSerializer);
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
const _o = wl;
class Bd {
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
      token: new Bd(function(i) {
        t = i;
      }),
      cancel: t
    };
  }
}
const Hne = Bd;
function Vne(e) {
  return function(r) {
    return e.apply(null, r);
  };
}
function Yne(e) {
  return L.isObject(e) && e.isAxiosError === !0;
}
const Vf = {
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
Object.entries(Vf).forEach(([e, t]) => {
  Vf[t] = e;
});
const Wne = Vf;
function g2(e) {
  const t = new _o(e), r = Z_(_o.prototype.request, t);
  return L.extend(r, _o.prototype, t, { allOwnKeys: !0 }), L.extend(r, t, null, { allOwnKeys: !0 }), r.create = function(i) {
    return g2(ji(e, i));
  }, r;
}
const je = g2(Md);
je.Axios = _o;
je.CanceledError = Ds;
je.CancelToken = Hne;
je.isCancel = d2;
je.VERSION = v2;
je.toFormData = ic;
je.AxiosError = we;
je.Cancel = je.CanceledError;
je.all = function(t) {
  return Promise.all(t);
};
je.spread = Vne;
je.isAxiosError = Yne;
je.mergeConfig = ji;
je.AxiosHeaders = Mr;
je.formToJSON = (e) => f2(L.isHTMLForm(e) ? new FormData(e) : e);
je.getAdapter = p2.getAdapter;
je.HttpStatusCode = Wne;
je.default = je;
const m2 = new Ex({
  key: () => "cache",
  keepAlive: G2.toMs("h", 1),
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
}), Une = async () => {
  try {
    return (await m2.get("")).countryCode === "CN";
  } catch {
  }
  try {
    return await je.get("https://google.com/generate_204"), !1;
  } catch {
  }
  return !0;
}, qne = async () => {
  const e = await m2.get("");
  return {
    countryCode: e.countryCode,
    lat: e.lat,
    lng: e.lng
  };
}, Gne = () => ({
  total: 1,
  per_page: 1,
  current_page: 1,
  last_page: 1,
  from: 1,
  to: 1,
  data: []
}), Kne = () => ({
  msg: "",
  data: [],
  pagination: {
    page: 1,
    pageSize: 10,
    pageCount: 0,
    total: 0
  }
}), Zne = () => ({
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
}), Xne = () => ({
  data: [],
  meta: {
    pagination: {
      page: 1,
      pageSize: 10,
      pageCount: 0,
      total: 0
    }
  }
}), Jne = (e, t) => {
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
}, Qne = (e, t) => {
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
}, eie = (e) => e.map((t) => ({
  key: t.key == null ? pn.createUuid() : t.key,
  label: typeof t.label == "string" ? () => t.label : t.label,
  style: t.style == null ? () => "" : t.style,
  sortBtn: !!t.sortBtn,
  textAlign: t.textAlign || "center",
  formatter: t.formatter == null ? (r) => r : t.formatter,
  optionShow: t.optionShow == null ? !1 : t.optionShow
})), tie = (e) => e, rie = (e) => {
  const t = () => {
    const n = Ce(e.schema()), i = e.schema(), a = Cj(), s = new mt();
    me(() => n, () => s.emit("update", {}), {
      deep: !0
    });
    const o = () => {
      Object.assign(n, e.schema());
    }, l = () => {
      Object.assign(n, Nu.jpjs(i));
    }, c = (v) => {
      Object.assign(n, Co.setMapValue(n, v));
    }, u = (v) => {
      c(v), Object.assign(i, Nu.jpjs(n));
    }, f = (v) => Co.simpleCheckDeepDiff(n, v), d = () => f(i), h = () => {
      a.reset(), o(), Object.assign(i, e.schema()), s.emit("rebuild", {});
    }, p = e.mixin({
      data: n,
      commit: u,
      stateManager: a
    });
    return {
      d: n,
      data: n,
      diff: f,
      clear: o,
      reset: l,
      event: s,
      commit: u,
      assign: c,
      rebuild: h,
      isModified: d,
      ...p
    };
  }, r = (n) => {
    let i = t();
    return n && i.commit(n), i;
  };
  return {
    _ModelType: null,
    _SchemaType: null,
    use: t,
    from: r,
    /** 只獲取 schema */
    raw: () => e.schema(),
    /** 同步監聽資料變化 */
    sync: (n, i) => {
      const a = r(n), s = Aj();
      return me(() => n, () => {
        a.diff(n) && a.assign(n);
      }, {
        deep: !0
      }), i && s.push([
        a.event.on("update", () => i(a.data))
      ]), a;
    }
  };
};
class nie {
  constructor(t) {
    G(this, "vueI18n");
    G(this, "namespace");
    this.vueI18n = t.vueI18n, this.namespace = t.namespace;
  }
  get t() {
    return this.vueI18n.global.t;
  }
  tt(t, ...r) {
    return t.slice(0, 2) === "##" ? Wa.replaceVar({
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
    return (r, ...n) => r.slice(0, 2) === "##" ? Wa.replaceVar({
      end: "}",
      start: "{",
      text: r.slice(2).trim(),
      vars: n[0] || {}
    }) : this.vueI18n ? this.t(`${this.namespace}.${r}`, t, n[0]).toString() : r;
  }
}
const x2 = (e) => {
  let t = [];
  if (e)
    for (let r of e)
      r && r.name && t.push(r.name.toString()), r.children && (t = t.concat(x2(r.children)));
  return t;
};
class iie extends mt {
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
    return new Set(x2(window.__ng_state.routerOptions.routes));
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
        ...Nu.jpjs(n.query),
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
const hse = ({ store: e, pinia: t }) => {
  e.$build = () => (Et(() => {
    e.$destroy();
  }), async () => {
    await e.$install();
  }), e.$install = async () => {
    e.__runInstall && await e.__runInstall();
  }, e.$destroy = () => {
    e.__runDestroy && e.__runDestroy(), e.$dispose(), delete t.state.value[e.$id];
  };
}, pse = () => {
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
}, aie = Kt.checkout("AppleAuth"), sie = "name email", Ou = new mt();
function oie() {
  var e;
  if (!((e = window.__ng_state.aapple) != null && e.installed))
    throw aie.create("apple login not installed.");
}
class lie {
  static async install(t) {
    window.__ng_state.aapple == null && (window.__ng_state.aapple = {
      installed: !1
    }), window.__ng_state.aapple.installed === !1 && (await Hi.importScript("https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js"), window.AppleID.auth.init({
      clientId: t.clientId,
      redirectURI: "https//demo.com",
      scope: sie,
      state: "",
      usePopup: !1
    }), window.__ng_state.aapple.installed = !0);
  }
  static installed() {
    var t;
    return ((t = window.__ng_state.aapple) == null ? void 0 : t.installed) ?? !1;
  }
  static get on() {
    return Ou.on.bind(Ou);
  }
  /**
   * 如果是使用者自己關閉，則回傳 no-action
   */
  static async signIn(t) {
    oie();
    let r = await window.AppleID.auth.signIn({
      state: (t == null ? void 0 : t.state) ?? "",
      usePopup: (t == null ? void 0 : t.popup) ?? !0,
      redirectURI: t.redirectURI
    });
    return r.authorization.code && r.authorization.id_token ? (Ou.emit("login", {
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
var cie = {
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
function Yf(e, t) {
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
        return Yf(this.converter, Qs({}, this.attributes, i));
      },
      withConverter: function(i) {
        return Yf(Qs({}, this.converter, i), this.attributes);
      }
    },
    {
      attributes: { value: Object.freeze(t) },
      converter: { value: Object.freeze(e) }
    }
  );
}
var uie = Yf(cie, { path: "/" });
function Wf(e) {
  this.message = e;
}
Wf.prototype = new Error(), Wf.prototype.name = "InvalidCharacterError";
var rx = typeof window < "u" && window.atob && window.atob.bind(window) || function(e) {
  var t = String(e).replace(/=+$/, "");
  if (t.length % 4 == 1)
    throw new Wf("'atob' failed: The string to be decoded is not correctly encoded.");
  for (var r, n, i = 0, a = 0, s = ""; n = t.charAt(a++); ~n && (r = i % 4 ? 64 * r + n : n, i++ % 4) ? s += String.fromCharCode(255 & r >> (-2 * i & 6)) : 0)
    n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(n);
  return s;
};
function fie(e) {
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
      return decodeURIComponent(rx(r).replace(/(.)/g, function(n, i) {
        var a = i.charCodeAt(0).toString(16).toUpperCase();
        return a.length < 2 && (a = "0" + a), "%" + a;
      }));
    }(t);
  } catch {
    return rx(t);
  }
}
function $l(e) {
  this.message = e;
}
function die(e, t) {
  if (typeof e != "string")
    throw new $l("Invalid token specified");
  var r = (t = t || {}).header === !0 ? 0 : 1;
  try {
    return JSON.parse(fie(e.split(".")[r]));
  } catch (n) {
    throw new $l("Invalid token specified: " + n.message);
  }
}
$l.prototype = new Error(), $l.prototype.name = "InvalidTokenError";
const wo = Kt.checkout("GoogleAuth"), Fu = new mt();
function nx() {
  var e;
  if (!((e = window.__ng_state.agoogle) != null && e.installed))
    throw wo.create("gsi not installed.");
}
class hie {
  static async install(t) {
    window.__ng_state.agoogle == null && (window.__ng_state.agoogle = {
      installed: !1
    }), window.__ng_state.agoogle.installed === !1 && (await Hi.importScript("https://accounts.google.com/gsi/client"), google.accounts.id.initialize({
      ux_mode: t.uxMode,
      client_id: t.clientId,
      login_uri: t.loginUri,
      auto_select: !1,
      callback: (r) => {
        Fu.emit("login", {
          token: r.credential,
          payload: die(r.credential)
        });
      }
    }), window.__ng_state.agoogle.installed = !0);
  }
  static installed() {
    var t;
    return ((t = window.__ng_state.agoogle) == null ? void 0 : t.installed) ?? !1;
  }
  static get on() {
    return Fu.on.bind(Fu);
  }
  /** 渲染出登入按鈕 */
  static renderButton(t, r) {
    nx(), google.accounts.id.renderButton(t, r);
  }
  /**
   * 如果瀏覽器從未登入過 google 帳號，會打不開，並回傳 no-logged
   * 如果是使用者自己關閉，則回傳 no-action
   */
  static oneTap() {
    if (K2.inAppBrowser())
      throw wo.create("noSupportBrowser");
    return nx(), new Promise((t, r) => {
      uie.remove("g_state"), google.accounts.id.prompt((n) => {
        if (n.isNotDisplayed()) {
          let i = n.getNotDisplayedReason();
          i === "opt_out_or_no_session" ? t({
            status: "no-logged"
          }) : r(wo.create(i));
        } else if (n.isSkippedMoment()) {
          let i = ["tap_outside", "user_cancel"], a = n.getSkippedReason();
          i.includes(a) ? t({
            status: "no-action"
          }) : r(wo.create(a));
        } else
          n.getDismissedReason() === "credential_returned" && t({
            status: "pass"
          });
      });
    });
  }
}
const ix = "public_profile,email", y2 = Kt.checkout("FacebookAuth"), Tu = new mt();
function Mu() {
  var e;
  if (!((e = window.__ng_state.afb) != null && e.installed))
    throw y2.create("facebook sdk not installed.");
}
class pie {
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
    return Tu.on.bind(Tu);
  }
  /**
   * 如果是使用者自己關閉，則回傳 no-action
   */
  static signIn() {
    return Mu(), new Promise((t, r) => {
      FB.login((n) => {
        n.status === "connected" ? (Tu.emit("login", {
          token: n.authResponse.accessToken || ""
        }), t({
          status: "pass",
          response: n.authResponse
        })) : n.status === "unknown" ? t({
          status: "no-action",
          response: null
        }) : r(y2.create(n.status));
      }, {
        scope: ix
      });
    });
  }
  static signOut() {
    return Mu(), new Promise((t) => {
      FB.getLoginStatus((r) => {
        r.status === "connected" ? FB.logout((n) => {
          t(n);
        }) : t(null);
      });
    });
  }
  static getLoginUrl(t) {
    Mu();
    let r = new URL("https://www.facebook.com/v15.0/dialog/oauth");
    return r.searchParams.set("scope", ix), r.searchParams.set("client_id", window.__ng_state.clientId), r.searchParams.set("redirect_uri", t.redirectUri), r.searchParams.set("state", (t == null ? void 0 : t.state) ?? ""), r.href;
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
const vie = Kt.checkout("WechatAuth");
function gie() {
  var e;
  if (!((e = window.__ng_state.awechat) != null && e.installed))
    throw vie.create("gsi not installed.");
}
class mie {
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
    gie();
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
var Uf = function() {
  return Uf = Object.assign || function(t) {
    for (var r, n = 1, i = arguments.length; n < i; n++) {
      r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (t[a] = r[a]);
    }
    return t;
  }, Uf.apply(this, arguments);
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
function b2(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, i = t.length, a; n < i; n++)
      (a || !(n in t)) && (a || (a = Array.prototype.slice.call(t, 0, n)), a[n] = t[n]);
  return e.concat(a || Array.prototype.slice.call(t));
}
var _2 = "3.4.2";
function ls(e, t) {
  return new Promise(function(r) {
    return setTimeout(r, e, t);
  });
}
function xie(e, t) {
  t === void 0 && (t = 1 / 0);
  var r = window.requestIdleCallback;
  return r ? new Promise(function(n) {
    return r.call(window, function() {
      return n();
    }, { timeout: t });
  }) : ls(Math.min(e, t));
}
function w2(e) {
  return !!e && typeof e.then == "function";
}
function ax(e, t) {
  try {
    var r = e();
    w2(r) ? r.then(function(n) {
      return t(!0, n);
    }, function(n) {
      return t(!1, n);
    }) : t(!0, r);
  } catch (n) {
    t(!1, n);
  }
}
function sx(e, t, r) {
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
function ox(e) {
  return e = Re(e, [0, e[0] >>> 1]), e = zt(e, [4283543511, 3981806797]), e = Re(e, [0, e[0] >>> 1]), e = zt(e, [3301882366, 444984403]), e = Re(e, [0, e[0] >>> 1]), e;
}
function yie(e, t) {
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
  return i = Re(i, [0, e.length]), a = Re(a, [0, e.length]), i = Xr(i, a), a = Xr(a, i), i = ox(i), a = ox(a), i = Xr(i, a), a = Xr(a, i), ("00000000" + (i[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (i[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (a[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (a[1] >>> 0).toString(16)).slice(-8);
}
function bie(e) {
  var t;
  return Uf({ name: e.name, message: e.message, stack: (t = e.stack) === null || t === void 0 ? void 0 : t.split(`
`) }, e);
}
function _ie(e, t) {
  for (var r = 0, n = e.length; r < n; ++r)
    if (e[r] === t)
      return !0;
  return !1;
}
function wie(e, t) {
  return !_ie(e, t);
}
function Id(e) {
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
function $2(e, t) {
  if (t === void 0 && (t = 1), Math.abs(t) >= 1)
    return Math.round(e / t) * t;
  var r = 1 / t;
  return Math.round(e * r) / r;
}
function $ie(e) {
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
function lx(e) {
  return e && typeof e == "object" && "message" in e ? e : { message: e };
}
function Die(e) {
  return typeof e != "function";
}
function Eie(e, t) {
  var r = new Promise(function(n) {
    var i = Date.now();
    ax(e.bind(null, t), function() {
      for (var a = [], s = 0; s < arguments.length; s++)
        a[s] = arguments[s];
      var o = Date.now() - i;
      if (!a[0])
        return n(function() {
          return { error: lx(a[1]), duration: o };
        });
      var l = a[1];
      if (Die(l))
        return n(function() {
          return { value: l, duration: o };
        });
      n(function() {
        return new Promise(function(c) {
          var u = Date.now();
          ax(l, function() {
            for (var f = [], d = 0; d < arguments.length; d++)
              f[d] = arguments[d];
            var h = o + Date.now() - u;
            if (!f[0])
              return c({ error: lx(f[1]), duration: h });
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
function Aie(e, t, r) {
  var n = Object.keys(e).filter(function(a) {
    return wie(r, a);
  }), i = sx(n, function(a) {
    return Eie(e[a], t);
  });
  return cs(i), function() {
    return Yr(this, void 0, void 0, function() {
      var s, o, l, c, u;
      return Wr(this, function(f) {
        switch (f.label) {
          case 0:
            return [4, i];
          case 1:
            return s = f.sent(), [4, sx(s, function(d) {
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
function D2() {
  var e = window, t = navigator;
  return sr([
    "MSCSSMatrix" in e,
    "msSetImmediate" in e,
    "msIndexedDB" in e,
    "msMaxTouchPoints" in t,
    "msPointerEnabled" in t
  ]) >= 4;
}
function Cie() {
  var e = window, t = navigator;
  return sr(["msWriteProfilerMark" in e, "MSStream" in e, "msLaunchUri" in t, "msSaveBlob" in t]) >= 3 && !D2();
}
function Rd() {
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
function Nd() {
  var e = window;
  return sr([
    "safari" in e,
    !("DeviceMotionEvent" in e),
    !("ongestureend" in e),
    !("standalone" in navigator)
  ]) >= 3;
}
function Sie() {
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
function kie() {
  var e = window;
  return sr([
    !("MediaSettingsRange" in e),
    "RTCEncodedAudioFrame" in e,
    "" + e.Intl == "[object Intl]",
    "" + e.Reflect == "[object Reflect]"
  ]) >= 3;
}
function Oie() {
  var e = window;
  return sr([
    "DOMRectList" in e,
    "RTCPeerConnectionIceEvent" in e,
    "SVGGeometryElement" in e,
    "ontransitioncancel" in e
  ]) >= 3;
}
function Fie() {
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
function Tie() {
  var e = document;
  return e.fullscreenElement || e.msFullscreenElement || e.mozFullScreenElement || e.webkitFullscreenElement || null;
}
function Mie() {
  var e = document;
  return (e.exitFullscreen || e.msExitFullscreen || e.mozCancelFullScreen || e.webkitExitFullscreen).call(e);
}
function E2() {
  var e = Rd(), t = Sie();
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
function Pie() {
  var e = window, t = e.OfflineAudioContext || e.webkitOfflineAudioContext;
  if (!t)
    return -2;
  if (Bie())
    return -1;
  var r = 4500, n = 5e3, i = new t(1, n, 44100), a = i.createOscillator();
  a.type = "triangle", a.frequency.value = 1e4;
  var s = i.createDynamicsCompressor();
  s.threshold.value = -50, s.knee.value = 40, s.ratio.value = 12, s.attack.value = 0, s.release.value = 0.25, a.connect(s), s.connect(i.destination), a.start(0);
  var o = Iie(i), l = o[0], c = o[1], u = l.then(function(f) {
    return Rie(f.getChannelData(0).subarray(r));
  }, function(f) {
    if (f.name === "timeout" || f.name === "suspended")
      return -3;
    throw f;
  });
  return cs(u), function() {
    return c(), u;
  };
}
function Bie() {
  return Es() && !Nd() && !Oie();
}
function Iie(e) {
  var t = 3, r = 500, n = 500, i = 5e3, a = function() {
  }, s = new Promise(function(o, l) {
    var c = !1, u = 0, f = 0;
    e.oncomplete = function(p) {
      return o(p.renderedBuffer);
    };
    var d = function() {
      setTimeout(function() {
        return l(cx(
          "timeout"
          /* InnerErrorName.Timeout */
        ));
      }, Math.min(n, f + i - Date.now()));
    }, h = function() {
      try {
        var p = e.startRendering();
        switch (w2(p) && cs(p), e.state) {
          case "running":
            f = Date.now(), c && d();
            break;
          case "suspended":
            document.hidden || u++, c && u >= t ? l(cx(
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
function Rie(e) {
  for (var t = 0, r = 0; r < e.length; ++r)
    t += Math.abs(e[r]);
  return t;
}
function cx(e) {
  var t = new Error(e);
  return t.name = e, t;
}
function A2(e, t, r) {
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
function Nie(e) {
  for (var t = $ie(e), r = t[0], n = t[1], i = document.createElement(r ?? "div"), a = 0, s = Object.keys(n); a < s.length; a++) {
    var o = s[a], l = n[o].join(" ");
    o === "style" ? Lie(i.style, l) : i.setAttribute(o, l);
  }
  return i;
}
function Lie(e, t) {
  for (var r = 0, n = t.split(";"); r < n.length; r++) {
    var i = n[r], a = /^\s*([\w-]+)\s*:\s*(.+?)(\s*!([\w-]+))?\s*$/.exec(i);
    if (a) {
      var s = a[1], o = a[2], l = a[4];
      e.setProperty(s, o, l || "");
    }
  }
}
var jie = "mmMwWLliI0O&1", zie = "48px", ci = ["monospace", "sans-serif", "serif"], ux = [
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
function Hie() {
  return A2(function(e, t) {
    var r = t.document, n = r.body;
    n.style.fontSize = zie;
    var i = r.createElement("div"), a = {}, s = {}, o = function(v) {
      var g = r.createElement("span"), m = g.style;
      return m.position = "absolute", m.top = "0", m.left = "0", m.fontFamily = v, g.textContent = jie, i.appendChild(g), g;
    }, l = function(v, g) {
      return o("'".concat(v, "',").concat(g));
    }, c = function() {
      return ci.map(o);
    }, u = function() {
      for (var v = {}, g = function(x) {
        v[x] = ci.map(function(b) {
          return l(x, b);
        });
      }, m = 0, y = ux; m < y.length; m++) {
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
    return ux.filter(function(v) {
      return f(h[v]);
    });
  });
}
function Vie() {
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
function Yie() {
  var e = !1, t, r, n = Wie(), i = n[0], a = n[1];
  if (!Uie(i, a))
    t = r = "";
  else {
    e = qie(a), Gie(i, a);
    var s = Pu(i), o = Pu(i);
    s !== o ? t = r = "unstable" : (r = s, Kie(i, a), t = Pu(i));
  }
  return { winding: e, geometry: t, text: r };
}
function Wie() {
  var e = document.createElement("canvas");
  return e.width = 1, e.height = 1, [e, e.getContext("2d")];
}
function Uie(e, t) {
  return !!(t && e.toDataURL);
}
function qie(e) {
  return e.rect(0, 0, 10, 10), e.rect(2, 2, 6, 6), !e.isPointInPath(5, 5, "evenodd");
}
function Gie(e, t) {
  e.width = 240, e.height = 60, t.textBaseline = "alphabetic", t.fillStyle = "#f60", t.fillRect(100, 1, 62, 20), t.fillStyle = "#069", t.font = '11pt "Times New Roman"';
  var r = "Cwm fjordbank gly ".concat(
    "😃"
    /* 😃 */
  );
  t.fillText(r, 2, 15), t.fillStyle = "rgba(102, 204, 0, 0.2)", t.font = "18pt Arial", t.fillText(r, 4, 45);
}
function Kie(e, t) {
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
function Pu(e) {
  return e.toDataURL();
}
function Zie() {
  var e = navigator, t = 0, r;
  e.maxTouchPoints !== void 0 ? t = Id(e.maxTouchPoints) : e.msMaxTouchPoints !== void 0 && (t = e.msMaxTouchPoints);
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
function Xie() {
  return navigator.oscpu;
}
function Jie() {
  var e = navigator, t = [], r = e.language || e.userLanguage || e.browserLanguage || e.systemLanguage;
  if (r !== void 0 && t.push([r]), Array.isArray(e.languages))
    Rd() && kie() || t.push(e.languages);
  else if (typeof e.languages == "string") {
    var n = e.languages;
    n && t.push(n.split(","));
  }
  return t;
}
function Qie() {
  return window.screen.colorDepth;
}
function eae() {
  return Cr(er(navigator.deviceMemory), void 0);
}
function tae() {
  var e = screen, t = function(n) {
    return Cr(Id(n), null);
  }, r = [t(e.width), t(e.height)];
  return r.sort().reverse(), r;
}
var rae = 2500, nae = 10, $o, Bu;
function iae() {
  if (Bu === void 0) {
    var e = function() {
      var t = qf();
      Gf(t) ? Bu = setTimeout(e, rae) : ($o = t, Bu = void 0);
    };
    e();
  }
}
function aae() {
  var e = this;
  return iae(), function() {
    return Yr(e, void 0, void 0, function() {
      var t;
      return Wr(this, function(r) {
        switch (r.label) {
          case 0:
            return t = qf(), Gf(t) ? $o ? [2, b2([], $o, !0)] : Tie() ? [4, Mie()] : [3, 2] : [3, 2];
          case 1:
            r.sent(), t = qf(), r.label = 2;
          case 2:
            return Gf(t) || ($o = t), [2, t];
        }
      });
    });
  };
}
function sae() {
  var e = this, t = aae();
  return function() {
    return Yr(e, void 0, void 0, function() {
      var r, n;
      return Wr(this, function(i) {
        switch (i.label) {
          case 0:
            return [4, t()];
          case 1:
            return r = i.sent(), n = function(a) {
              return a === null ? null : $2(a, nae);
            }, [2, [n(r[0]), n(r[1]), n(r[2]), n(r[3])]];
        }
      });
    });
  };
}
function qf() {
  var e = screen;
  return [
    Cr(er(e.availTop), null),
    Cr(er(e.width) - er(e.availWidth) - Cr(er(e.availLeft), 0), null),
    Cr(er(e.height) - er(e.availHeight) - Cr(er(e.availTop), 0), null),
    Cr(er(e.availLeft), null)
  ];
}
function Gf(e) {
  for (var t = 0; t < 4; ++t)
    if (e[t])
      return !1;
  return !0;
}
function oae() {
  return Cr(Id(navigator.hardwareConcurrency), void 0);
}
function lae() {
  var e, t = (e = window.Intl) === null || e === void 0 ? void 0 : e.DateTimeFormat;
  if (t) {
    var r = new t().resolvedOptions().timeZone;
    if (r)
      return r;
  }
  var n = -cae();
  return "UTC".concat(n >= 0 ? "+" : "").concat(Math.abs(n));
}
function cae() {
  var e = (/* @__PURE__ */ new Date()).getFullYear();
  return Math.max(
    // `getTimezoneOffset` returns a number as a string in some unidentified cases
    er(new Date(e, 0, 1).getTimezoneOffset()),
    er(new Date(e, 6, 1).getTimezoneOffset())
  );
}
function uae() {
  try {
    return !!window.sessionStorage;
  } catch {
    return !0;
  }
}
function fae() {
  try {
    return !!window.localStorage;
  } catch {
    return !0;
  }
}
function dae() {
  if (!(D2() || Cie()))
    try {
      return !!window.indexedDB;
    } catch {
      return !0;
    }
}
function hae() {
  return !!window.openDatabase;
}
function pae() {
  return navigator.cpuClass;
}
function vae() {
  var e = navigator.platform;
  return e === "MacIntel" && Es() && !Nd() ? Fie() ? "iPad" : "iPhone" : e;
}
function gae() {
  return navigator.vendor || "";
}
function mae() {
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
function xae() {
  var e = document;
  try {
    e.cookie = "cookietest=1; SameSite=Strict;";
    var t = e.cookie.indexOf("cookietest=") !== -1;
    return e.cookie = "cookietest=1; SameSite=Strict; expires=Thu, 01-Jan-1970 00:00:01 GMT", t;
  } catch {
    return !1;
  }
}
function yae() {
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
function bae(e) {
  var t = e === void 0 ? {} : e, r = t.debug;
  return Yr(this, void 0, void 0, function() {
    var n, i, a, s, o, l;
    return Wr(this, function(c) {
      switch (c.label) {
        case 0:
          return _ae() ? (n = yae(), i = Object.keys(n), a = (l = []).concat.apply(l, i.map(function(u) {
            return n[u];
          })), [4, wae(a)]) : [2, void 0];
        case 1:
          return s = c.sent(), r && $ae(n, s), o = i.filter(function(u) {
            var f = n[u], d = sr(f.map(function(h) {
              return s[h];
            }));
            return d > f.length * 0.6;
          }), o.sort(), [2, o];
      }
    });
  });
}
function _ae() {
  return Es() || E2();
}
function wae(e) {
  var t;
  return Yr(this, void 0, void 0, function() {
    var r, n, i, a, l, s, o, l;
    return Wr(this, function(c) {
      switch (c.label) {
        case 0:
          for (r = document, n = r.createElement("div"), i = new Array(e.length), a = {}, fx(n), l = 0; l < e.length; ++l)
            s = Nie(e[l]), s.tagName === "DIALOG" && s.show(), o = r.createElement("div"), fx(o), o.appendChild(s), n.appendChild(o), i[l] = s;
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
function fx(e) {
  e.style.setProperty("display", "block", "important");
}
function $ae(e, t) {
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
function Dae() {
  for (var e = 0, t = ["rec2020", "p3", "srgb"]; e < t.length; e++) {
    var r = t[e];
    if (matchMedia("(color-gamut: ".concat(r, ")")).matches)
      return r;
  }
}
function Eae() {
  if (dx("inverted"))
    return !0;
  if (dx("none"))
    return !1;
}
function dx(e) {
  return matchMedia("(inverted-colors: ".concat(e, ")")).matches;
}
function Aae() {
  if (hx("active"))
    return !0;
  if (hx("none"))
    return !1;
}
function hx(e) {
  return matchMedia("(forced-colors: ".concat(e, ")")).matches;
}
var Cae = 100;
function Sae() {
  if (matchMedia("(min-monochrome: 0)").matches) {
    for (var e = 0; e <= Cae; ++e)
      if (matchMedia("(max-monochrome: ".concat(e, ")")).matches)
        return e;
    throw new Error("Too high value");
  }
}
function kae() {
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
function Oae() {
  if (px("reduce"))
    return !0;
  if (px("no-preference"))
    return !1;
}
function px(e) {
  return matchMedia("(prefers-reduced-motion: ".concat(e, ")")).matches;
}
function Fae() {
  if (vx("high"))
    return !0;
  if (vx("standard"))
    return !1;
}
function vx(e) {
  return matchMedia("(dynamic-range: ".concat(e, ")")).matches;
}
var De = Math, wt = function() {
  return 0;
};
function Tae() {
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
var Mae = "mmMwWLliI0fiflO&1", Iu = {
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
function Pae() {
  return Bae(function(e, t) {
    for (var r = {}, n = {}, i = 0, a = Object.keys(Iu); i < a.length; i++) {
      var s = a[i], o = Iu[s], l = o[0], c = l === void 0 ? {} : l, u = o[1], f = u === void 0 ? Mae : u, d = e.createElement("span");
      d.textContent = f, d.style.whiteSpace = "nowrap";
      for (var h = 0, p = Object.keys(c); h < p.length; h++) {
        var v = p[h], g = c[v];
        g !== void 0 && (d.style[v] = g);
      }
      r[s] = d, t.appendChild(e.createElement("br")), t.appendChild(d);
    }
    for (var m = 0, y = Object.keys(Iu); m < y.length; m++) {
      var s = y[m];
      n[s] = r[s].getBoundingClientRect().width;
    }
    return n;
  });
}
function Bae(e, t) {
  return t === void 0 && (t = 4e3), A2(function(r, n) {
    var i = n.document, a = i.body, s = a.style;
    s.width = "".concat(t, "px"), s.webkitTextSizeAdjust = s.textSizeAdjust = "none", Rd() ? a.style.zoom = "".concat(1 / n.devicePixelRatio) : Es() && (a.style.zoom = "reset");
    var o = i.createElement("div");
    return o.textContent = b2([], Array(t / 20 << 0), !0).map(function() {
      return "word";
    }).join(" "), a.appendChild(o), e(i, a);
  }, '<!doctype html><html><head><meta name="viewport" content="width=device-width, initial-scale=1">');
}
function Iae() {
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
function Rae() {
  return navigator.pdfViewerEnabled;
}
function Nae() {
  var e = new Float32Array(1), t = new Uint8Array(e.buffer);
  return e[0] = 1 / 0, e[0] = e[0] - e[0], t[3];
}
var Lae = {
  // READ FIRST:
  // See https://github.com/fingerprintjs/fingerprintjs/blob/master/contributing.md#how-to-make-an-entropy-source
  // to learn how entropy source works and how to make your own.
  // The sources run in this exact order.
  // The asynchronous sources are at the start to run in parallel with other sources.
  fonts: Hie,
  domBlockers: bae,
  fontPreferences: Pae,
  audio: Pie,
  screenFrame: sae,
  osCpu: Xie,
  languages: Jie,
  colorDepth: Qie,
  deviceMemory: eae,
  screenResolution: tae,
  hardwareConcurrency: oae,
  timezone: lae,
  sessionStorage: uae,
  localStorage: fae,
  indexedDB: dae,
  openDatabase: hae,
  cpuClass: pae,
  platform: vae,
  plugins: Vie,
  canvas: Yie,
  touchSupport: Zie,
  vendor: gae,
  vendorFlavors: mae,
  cookiesEnabled: xae,
  colorGamut: Dae,
  invertedColors: Eae,
  forcedColors: Aae,
  monochrome: Sae,
  contrast: kae,
  reducedMotion: Oae,
  hdr: Fae,
  math: Tae,
  videoCard: Iae,
  pdfViewerEnabled: Rae,
  architecture: Nae
};
function jae(e) {
  return Aie(Lae, e, []);
}
var zae = "$ if upgrade to Pro: https://fpjs.dev/pro";
function Hae(e) {
  var t = Vae(e), r = Yae(t);
  return { score: t, comment: zae.replace(/\$/g, "".concat(r)) };
}
function Vae(e) {
  if (E2())
    return 0.4;
  if (Es())
    return Nd() ? 0.5 : 0.3;
  var t = e.platform.value || "";
  return /^Win/.test(t) ? 0.6 : /^Mac/.test(t) ? 0.5 : 0.7;
}
function Yae(e) {
  return $2(0.99 + 0.01 * e, 1e-4);
}
function Wae(e) {
  for (var t = "", r = 0, n = Object.keys(e).sort(); r < n.length; r++) {
    var i = n[r], a = e[i], s = a.error ? "error" : JSON.stringify(a.value);
    t += "".concat(t ? "|" : "").concat(i.replace(/([:|\\])/g, "\\$1"), ":").concat(s);
  }
  return t;
}
function C2(e) {
  return JSON.stringify(e, function(t, r) {
    return r instanceof Error ? bie(r) : r;
  }, 2);
}
function S2(e) {
  return yie(Wae(e));
}
function Uae(e) {
  var t, r = Hae(e);
  return {
    get visitorId() {
      return t === void 0 && (t = S2(this.components)), t;
    },
    set visitorId(n) {
      t = n;
    },
    confidence: r,
    components: e,
    version: _2
  };
}
function qae(e) {
  return e === void 0 && (e = 50), xie(e, e * 2);
}
function Gae(e, t) {
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
              return a = o.sent(), s = Uae(a), (t || n != null && n.debug) && console.log("Copy the text below to get the debug data:\n\n```\nversion: ".concat(s.version, `
userAgent: `).concat(navigator.userAgent, `
timeBetweenLoadAndGet: `).concat(i - r, `
visitorId: `).concat(s.visitorId, `
components: `).concat(C2(a), "\n```")), [2, s];
          }
        });
      });
    }
  };
}
function Kae() {
  if (!(window.__fpjs_d_m || Math.random() >= 1e-3))
    try {
      var e = new XMLHttpRequest();
      e.open("get", "https://m1.openfpcdn.io/fingerprintjs/v".concat(_2, "/npm-monitoring"), !0), e.send();
    } catch (t) {
      console.error(t);
    }
}
function Zae(e) {
  var t = e === void 0 ? {} : e, r = t.delayFallback, n = t.debug, i = t.monitoring, a = i === void 0 ? !0 : i;
  return Yr(this, void 0, void 0, function() {
    var s;
    return Wr(this, function(o) {
      switch (o.label) {
        case 0:
          return a && Kae(), [4, qae(r)];
        case 1:
          return o.sent(), s = jae({ debug: n }), [2, Gae(s, n)];
      }
    });
  });
}
var Xae = { load: Zae, hashComponents: S2, componentsToDebugString: C2 };
class Jae {
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
        const a = await (await Xae.load()).get();
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
const Qae = (e) => () => {
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
}, ese = (e) => ({
  openConfirmPlus: (t) => {
    e().open(t);
  },
  openConfirm: (t, r, n) => {
    e().open({
      message: t,
      handler: r,
      onReject: n
    });
  }
}), tse = () => () => {
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
}, rse = (e) => ({
  showToast: (t, r) => {
    e().push({
      type: t,
      content: r
    });
  }
}), vse = {
  Camera: ol,
  CryptoAES: ss,
  Graphql: Uz,
  Request: tY,
  RuleProvider: Ere,
  PersistState: G_,
  NextGenWorker: Sd,
  NextInteraction: Are,
  QuerySync: K_
}, gse = {
  fetch: {
    fetchAll: kd,
    fetchAllForLaravelPaginate: kre,
    fetchAllForStrapi: Sre
  },
  ip: {
    getGeoLocation: qne,
    inChina: Une
  },
  message: {
    parseMessage: k0
  },
  serverData: {
    createLaravelPaginate: Gne,
    createLaravelResourcePaginate: Zne,
    createStrapiList: Kne,
    createStrapiListResource: Xne
  },
  storage: {
    asyncLoaclStroageIntercept: Qne,
    loaclStroageIntercept: Jne
  },
  table: {
    defineFields: eie
  },
  text: {
    toHump: G1
  }
}, mse = {
  defineModel: rie,
  defineSchema: tie
}, xse = {
  I18nPlus: nie,
  RouterPlus: iie
}, yse = {
  AppleAuth: lie,
  GoogleAuth: hie,
  FacebookService: pie,
  WechatService: mie,
  NextgenMessageTrace: Jae
}, bse = {
  createConfirmStore: Qae,
  createNotificationStore: tse,
  confirmStoreToActions: ese,
  notificationStoreToActions: rse
};
window.__ng_state = {};
window.__ng_config = {
  libOptions: {
    lang: "en-US",
    staticUrl: "",
    notFoundImage: ""
  },
  libEnv: {
    version: 3,
    stage: "",
    service: ""
  }
};
const nse = () => window.__ng_config.libOptions, As = () => window.__ng_config.libEnv, _se = (e, t = {}) => X2.key(e, t).get(window.__ng_config.libOptions.lang), wse = {
  setOptions: (e) => {
    for (let t in e)
      window.__ng_config.libOptions[t] = e[t];
  },
  install(e, t) {
    for (let r in t.options)
      window.__ng_config.libOptions[r] = t.options[r];
    for (let r in t.env)
      window.__ng_config.libEnv[r] = t.env[r];
    for (const r in Fv)
      e.component(r, Fv[r]);
    for (const r in Tv)
      e.component(r, Tv[r]);
  }
};
export {
  bse as LibStores,
  yse as Libraries,
  mse as Model,
  vse as Modules,
  wse as NextgenLib,
  hse as NextgenPiniaPlugin,
  Fv as NgComponents,
  Tv as NgLayoutComponents,
  gse as Utils,
  xse as VueExtends,
  pse as createStoreLifeCycle,
  dse as genData,
  fse as genRef,
  Cj as genStateManager,
  As as getLibEnv,
  nse as getLibOptions,
  _se as t,
  ty as useDebounce,
  Aj as useListenerGroup,
  use as useLoader,
  hs as useSelf
};
//# sourceMappingURL=index.js.map
