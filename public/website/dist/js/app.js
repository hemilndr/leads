!(function (e) {
  var t = {};
  function n(i) {
      if (t[i]) return t[i].exports;
      var r = (t[i] = { i: i, l: !1, exports: {} });
      return e[i].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
  }
  (n.m = e),
      (n.c = t),
      (n.d = function (e, t, i) {
          n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: i });
      }),
      (n.r = function (e) {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
      }),
      (n.t = function (e, t) {
          if ((1 & t && (e = n(e)), 8 & t)) return e;
          if (4 & t && "object" == typeof e && e && e.__esModule) return e;
          var i = Object.create(null);
          if ((n.r(i), Object.defineProperty(i, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
              for (var r in e)
                  n.d(
                      i,
                      r,
                      function (t) {
                          return e[t];
                      }.bind(null, r)
                  );
          return i;
      }),
      (n.n = function (e) {
          var t =
              e && e.__esModule
                  ? function () {
                        return e.default;
                    }
                  : function () {
                        return e;
                    };
          return n.d(t, "a", t), t;
      }),
      (n.o = function (e, t) {
          return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (n.p = "./dist/"),
      n((n.s = 0));
})([
  function (e, t, n) {
      e.exports = n(3);
  },
  function (e, t, n) {
      (function (e) {
          e(document).ready(function () {
              e(".next01").on("click", function () {
                firstFormValidate();
              }),
                  e(".next02").on("click", function () {
                      e("#slide03").hide(), e("#slide04").show();
                  }),
                  e("#back02").on("click", function () {
                      e("#slide04").hide(), e("#slide03").show();
                  }),
                  e("#showadrs2").on("click", function () {
                      e("#postaddrs2").show(), e("#submitoradd01").hide();
                  }),
                  e("#showadrs3").on("click", function () {
                      e("#postaddrs3").show(), e("#submitoradd02").hide();
                  }),
                  e("#remove3").on("click", function () {
                      e("#submitoradd01").show(), e("#postaddrs2").hide();
                  }),
                  e("#remove4").on("click", function () {
                      e("#submitoradd02").show(), e("#postaddrs3").hide();
                  }),
                  e("#submit_claim").on("click", function () {
                      // window.location.href = "page02.html";
                      if(secondFormValidate()){
                        SubmitUserForm();
                      }
                  }),
                  e(".tothank").on("click", function () {
                      window.location.href = "thankyou.html";
                  });
          });
      }.call(this, n(13)));
  },
  function (e, t, n) {
      "use strict";
      n.r(t),
          n.d(t, "Alert", function () {
              return Ct;
          }),
          n.d(t, "Button", function () {
              return St;
          }),
          n.d(t, "Carousel", function () {
              return yn;
          }),
          n.d(t, "Collapse", function () {
              return $n;
          }),
          n.d(t, "Dropdown", function () {
              return gi;
          }),
          n.d(t, "Modal", function () {
              return rr;
          }),
          n.d(t, "Offcanvas", function () {
              return mr;
          }),
          n.d(t, "Popover", function () {
              return Kr;
          }),
          n.d(t, "ScrollSpy", function () {
              return go;
          }),
          n.d(t, "Tab", function () {
              return No;
          }),
          n.d(t, "Toast", function () {
              return Xo;
          }),
          n.d(t, "Tooltip", function () {
              return Br;
          });
      var i = {};
      n.r(i),
          n.d(i, "top", function () {
              return r;
          }),
          n.d(i, "bottom", function () {
              return o;
          }),
          n.d(i, "right", function () {
              return s;
          }),
          n.d(i, "left", function () {
              return a;
          }),
          n.d(i, "auto", function () {
              return l;
          }),
          n.d(i, "basePlacements", function () {
              return c;
          }),
          n.d(i, "start", function () {
              return u;
          }),
          n.d(i, "end", function () {
              return f;
          }),
          n.d(i, "clippingParents", function () {
              return d;
          }),
          n.d(i, "viewport", function () {
              return h;
          }),
          n.d(i, "popper", function () {
              return p;
          }),
          n.d(i, "reference", function () {
              return g;
          }),
          n.d(i, "variationPlacements", function () {
              return m;
          }),
          n.d(i, "placements", function () {
              return v;
          }),
          n.d(i, "beforeRead", function () {
              return y;
          }),
          n.d(i, "read", function () {
              return b;
          }),
          n.d(i, "afterRead", function () {
              return _;
          }),
          n.d(i, "beforeMain", function () {
              return w;
          }),
          n.d(i, "main", function () {
              return x;
          }),
          n.d(i, "afterMain", function () {
              return E;
          }),
          n.d(i, "beforeWrite", function () {
              return T;
          }),
          n.d(i, "write", function () {
              return C;
          }),
          n.d(i, "afterWrite", function () {
              return A;
          }),
          n.d(i, "modifierPhases", function () {
              return k;
          }),
          n.d(i, "applyStyles", function () {
              return j;
          }),
          n.d(i, "arrow", function () {
              return J;
          }),
          n.d(i, "computeStyles", function () {
              return ne;
          }),
          n.d(i, "eventListeners", function () {
              return re;
          }),
          n.d(i, "flip", function () {
              return ye;
          }),
          n.d(i, "hide", function () {
              return we;
          }),
          n.d(i, "offset", function () {
              return xe;
          }),
          n.d(i, "popperOffsets", function () {
              return Ee;
          }),
          n.d(i, "preventOverflow", function () {
              return Te;
          }),
          n.d(i, "popperGenerator", function () {
              return Oe;
          }),
          n.d(i, "detectOverflow", function () {
              return ve;
          }),
          n.d(i, "createPopperBase", function () {
              return De;
          }),
          n.d(i, "createPopper", function () {
              return Ne;
          }),
          n.d(i, "createPopperLite", function () {
              return Le;
          });
      var r = "top",
          o = "bottom",
          s = "right",
          a = "left",
          l = "auto",
          c = [r, o, s, a],
          u = "start",
          f = "end",
          d = "clippingParents",
          h = "viewport",
          p = "popper",
          g = "reference",
          m = c.reduce(function (e, t) {
              return e.concat([t + "-" + u, t + "-" + f]);
          }, []),
          v = [].concat(c, [l]).reduce(function (e, t) {
              return e.concat([t, t + "-" + u, t + "-" + f]);
          }, []),
          y = "beforeRead",
          b = "read",
          _ = "afterRead",
          w = "beforeMain",
          x = "main",
          E = "afterMain",
          T = "beforeWrite",
          C = "write",
          A = "afterWrite",
          k = [y, b, _, w, x, E, T, C, A];
      function S(e) {
          return e ? (e.nodeName || "").toLowerCase() : null;
      }
      function O(e) {
          if (null == e) return window;
          if ("[object Window]" !== e.toString()) {
              var t = e.ownerDocument;
              return (t && t.defaultView) || window;
          }
          return e;
      }
      function D(e) {
          return e instanceof O(e).Element || e instanceof Element;
      }
      function N(e) {
          return e instanceof O(e).HTMLElement || e instanceof HTMLElement;
      }
      function L(e) {
          return "undefined" != typeof ShadowRoot && (e instanceof O(e).ShadowRoot || e instanceof ShadowRoot);
      }
      var j = {
          name: "applyStyles",
          enabled: !0,
          phase: "write",
          fn: function (e) {
              var t = e.state;
              Object.keys(t.elements).forEach(function (e) {
                  var n = t.styles[e] || {},
                      i = t.attributes[e] || {},
                      r = t.elements[e];
                  N(r) &&
                      S(r) &&
                      (Object.assign(r.style, n),
                      Object.keys(i).forEach(function (e) {
                          var t = i[e];
                          !1 === t ? r.removeAttribute(e) : r.setAttribute(e, !0 === t ? "" : t);
                      }));
              });
          },
          effect: function (e) {
              var t = e.state,
                  n = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
              return (
                  Object.assign(t.elements.popper.style, n.popper),
                  (t.styles = n),
                  t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
                  function () {
                      Object.keys(t.elements).forEach(function (e) {
                          var i = t.elements[e],
                              r = t.attributes[e] || {},
                              o = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]).reduce(function (e, t) {
                                  return (e[t] = ""), e;
                              }, {});
                          N(i) &&
                              S(i) &&
                              (Object.assign(i.style, o),
                              Object.keys(r).forEach(function (e) {
                                  i.removeAttribute(e);
                              }));
                      });
                  }
              );
          },
          requires: ["computeStyles"],
      };
      function I(e) {
          return e.split("-")[0];
      }
      var P = Math.max,
          H = Math.min,
          M = Math.round;
      function q(e, t) {
          void 0 === t && (t = !1);
          var n = e.getBoundingClientRect(),
              i = 1,
              r = 1;
          if (N(e) && t) {
              var o = e.offsetHeight,
                  s = e.offsetWidth;
              s > 0 && (i = M(n.width) / s || 1), o > 0 && (r = M(n.height) / o || 1);
          }
          return { width: n.width / i, height: n.height / r, top: n.top / r, right: n.right / i, bottom: n.bottom / r, left: n.left / i, x: n.left / i, y: n.top / r };
      }
      function $(e) {
          var t = q(e),
              n = e.offsetWidth,
              i = e.offsetHeight;
          return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - i) <= 1 && (i = t.height), { x: e.offsetLeft, y: e.offsetTop, width: n, height: i };
      }
      function R(e, t) {
          var n = t.getRootNode && t.getRootNode();
          if (e.contains(t)) return !0;
          if (n && L(n)) {
              var i = t;
              do {
                  if (i && e.isSameNode(i)) return !0;
                  i = i.parentNode || i.host;
              } while (i);
          }
          return !1;
      }
      function B(e) {
          return O(e).getComputedStyle(e);
      }
      function W(e) {
          return ["table", "td", "th"].indexOf(S(e)) >= 0;
      }
      function F(e) {
          return ((D(e) ? e.ownerDocument : e.document) || window.document).documentElement;
      }
      function z(e) {
          return "html" === S(e) ? e : e.assignedSlot || e.parentNode || (L(e) ? e.host : null) || F(e);
      }
      function U(e) {
          return N(e) && "fixed" !== B(e).position ? e.offsetParent : null;
      }
      function V(e) {
          for (var t = O(e), n = U(e); n && W(n) && "static" === B(n).position; ) n = U(n);
          return n && ("html" === S(n) || ("body" === S(n) && "static" === B(n).position))
              ? t
              : n ||
                    (function (e) {
                        var t = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox");
                        if (-1 !== navigator.userAgent.indexOf("Trident") && N(e) && "fixed" === B(e).position) return null;
                        var n = z(e);
                        for (L(n) && (n = n.host); N(n) && ["html", "body"].indexOf(S(n)) < 0; ) {
                            var i = B(n);
                            if (
                                "none" !== i.transform ||
                                "none" !== i.perspective ||
                                "paint" === i.contain ||
                                -1 !== ["transform", "perspective"].indexOf(i.willChange) ||
                                (t && "filter" === i.willChange) ||
                                (t && i.filter && "none" !== i.filter)
                            )
                                return n;
                            n = n.parentNode;
                        }
                        return null;
                    })(e) ||
                    t;
      }
      function X(e) {
          return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
      }
      function Y(e, t, n) {
          return P(e, H(t, n));
      }
      function K(e) {
          return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, e);
      }
      function Q(e, t) {
          return t.reduce(function (t, n) {
              return (t[n] = e), t;
          }, {});
      }
      var G = function (e, t) {
          return K("number" != typeof (e = "function" == typeof e ? e(Object.assign({}, t.rects, { placement: t.placement })) : e) ? e : Q(e, c));
      };
      var J = {
          name: "arrow",
          enabled: !0,
          phase: "main",
          fn: function (e) {
              var t,
                  n = e.state,
                  i = e.name,
                  l = e.options,
                  c = n.elements.arrow,
                  u = n.modifiersData.popperOffsets,
                  f = I(n.placement),
                  d = X(f),
                  h = [a, s].indexOf(f) >= 0 ? "height" : "width";
              if (c && u) {
                  var p = G(l.padding, n),
                      g = $(c),
                      m = "y" === d ? r : a,
                      v = "y" === d ? o : s,
                      y = n.rects.reference[h] + n.rects.reference[d] - u[d] - n.rects.popper[h],
                      b = u[d] - n.rects.reference[d],
                      _ = V(c),
                      w = _ ? ("y" === d ? _.clientHeight || 0 : _.clientWidth || 0) : 0,
                      x = y / 2 - b / 2,
                      E = p[m],
                      T = w - g[h] - p[v],
                      C = w / 2 - g[h] / 2 + x,
                      A = Y(E, C, T),
                      k = d;
                  n.modifiersData[i] = (((t = {})[k] = A), (t.centerOffset = A - C), t);
              }
          },
          effect: function (e) {
              var t = e.state,
                  n = e.options.element,
                  i = void 0 === n ? "[data-popper-arrow]" : n;
              null != i && ("string" != typeof i || (i = t.elements.popper.querySelector(i))) && R(t.elements.popper, i) && (t.elements.arrow = i);
          },
          requires: ["popperOffsets"],
          requiresIfExists: ["preventOverflow"],
      };
      function Z(e) {
          return e.split("-")[1];
      }
      var ee = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
      function te(e) {
          var t,
              n = e.popper,
              i = e.popperRect,
              l = e.placement,
              c = e.variation,
              u = e.offsets,
              d = e.position,
              h = e.gpuAcceleration,
              p = e.adaptive,
              g = e.roundOffsets,
              m = e.isFixed,
              v = u.x,
              y = void 0 === v ? 0 : v,
              b = u.y,
              _ = void 0 === b ? 0 : b,
              w = "function" == typeof g ? g({ x: y, y: _ }) : { x: y, y: _ };
          (y = w.x), (_ = w.y);
          var x = u.hasOwnProperty("x"),
              E = u.hasOwnProperty("y"),
              T = a,
              C = r,
              A = window;
          if (p) {
              var k = V(n),
                  S = "clientHeight",
                  D = "clientWidth";
              if ((k === O(n) && "static" !== B((k = F(n))).position && "absolute" === d && ((S = "scrollHeight"), (D = "scrollWidth")), (k = k), l === r || ((l === a || l === s) && c === f)))
                  (C = o), (_ -= (m && k === A && A.visualViewport ? A.visualViewport.height : k[S]) - i.height), (_ *= h ? 1 : -1);
              if (l === a || ((l === r || l === o) && c === f)) (T = s), (y -= (m && k === A && A.visualViewport ? A.visualViewport.width : k[D]) - i.width), (y *= h ? 1 : -1);
          }
          var N,
              L = Object.assign({ position: d }, p && ee),
              j =
                  !0 === g
                      ? (function (e) {
                            var t = e.x,
                                n = e.y,
                                i = window.devicePixelRatio || 1;
                            return { x: M(t * i) / i || 0, y: M(n * i) / i || 0 };
                        })({ x: y, y: _ })
                      : { x: y, y: _ };
          return (
              (y = j.x),
              (_ = j.y),
              h
                  ? Object.assign({}, L, (((N = {})[C] = E ? "0" : ""), (N[T] = x ? "0" : ""), (N.transform = (A.devicePixelRatio || 1) <= 1 ? "translate(" + y + "px, " + _ + "px)" : "translate3d(" + y + "px, " + _ + "px, 0)"), N))
                  : Object.assign({}, L, (((t = {})[C] = E ? _ + "px" : ""), (t[T] = x ? y + "px" : ""), (t.transform = ""), t))
          );
      }
      var ne = {
              name: "computeStyles",
              enabled: !0,
              phase: "beforeWrite",
              fn: function (e) {
                  var t = e.state,
                      n = e.options,
                      i = n.gpuAcceleration,
                      r = void 0 === i || i,
                      o = n.adaptive,
                      s = void 0 === o || o,
                      a = n.roundOffsets,
                      l = void 0 === a || a,
                      c = { placement: I(t.placement), variation: Z(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: r, isFixed: "fixed" === t.options.strategy };
                  null != t.modifiersData.popperOffsets &&
                      (t.styles.popper = Object.assign({}, t.styles.popper, te(Object.assign({}, c, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: s, roundOffsets: l })))),
                      null != t.modifiersData.arrow && (t.styles.arrow = Object.assign({}, t.styles.arrow, te(Object.assign({}, c, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: l })))),
                      (t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement }));
              },
              data: {},
          },
          ie = { passive: !0 };
      var re = {
              name: "eventListeners",
              enabled: !0,
              phase: "write",
              fn: function () {},
              effect: function (e) {
                  var t = e.state,
                      n = e.instance,
                      i = e.options,
                      r = i.scroll,
                      o = void 0 === r || r,
                      s = i.resize,
                      a = void 0 === s || s,
                      l = O(t.elements.popper),
                      c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
                  return (
                      o &&
                          c.forEach(function (e) {
                              e.addEventListener("scroll", n.update, ie);
                          }),
                      a && l.addEventListener("resize", n.update, ie),
                      function () {
                          o &&
                              c.forEach(function (e) {
                                  e.removeEventListener("scroll", n.update, ie);
                              }),
                              a && l.removeEventListener("resize", n.update, ie);
                      }
                  );
              },
              data: {},
          },
          oe = { left: "right", right: "left", bottom: "top", top: "bottom" };
      function se(e) {
          return e.replace(/left|right|bottom|top/g, function (e) {
              return oe[e];
          });
      }
      var ae = { start: "end", end: "start" };
      function le(e) {
          return e.replace(/start|end/g, function (e) {
              return ae[e];
          });
      }
      function ce(e) {
          var t = O(e);
          return { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
      }
      function ue(e) {
          return q(F(e)).left + ce(e).scrollLeft;
      }
      function fe(e) {
          var t = B(e),
              n = t.overflow,
              i = t.overflowX,
              r = t.overflowY;
          return /auto|scroll|overlay|hidden/.test(n + r + i);
      }
      function de(e, t) {
          var n;
          void 0 === t && (t = []);
          var i = (function e(t) {
                  return ["html", "body", "#document"].indexOf(S(t)) >= 0 ? t.ownerDocument.body : N(t) && fe(t) ? t : e(z(t));
              })(e),
              r = i === (null == (n = e.ownerDocument) ? void 0 : n.body),
              o = O(i),
              s = r ? [o].concat(o.visualViewport || [], fe(i) ? i : []) : i,
              a = t.concat(s);
          return r ? a : a.concat(de(z(s)));
      }
      function he(e) {
          return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
      }
      function pe(e, t) {
          return t === h
              ? he(
                    (function (e) {
                        var t = O(e),
                            n = F(e),
                            i = t.visualViewport,
                            r = n.clientWidth,
                            o = n.clientHeight,
                            s = 0,
                            a = 0;
                        return i && ((r = i.width), (o = i.height), /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || ((s = i.offsetLeft), (a = i.offsetTop))), { width: r, height: o, x: s + ue(e), y: a };
                    })(e)
                )
              : D(t)
              ? (function (e) {
                    var t = q(e);
                    return (
                        (t.top = t.top + e.clientTop),
                        (t.left = t.left + e.clientLeft),
                        (t.bottom = t.top + e.clientHeight),
                        (t.right = t.left + e.clientWidth),
                        (t.width = e.clientWidth),
                        (t.height = e.clientHeight),
                        (t.x = t.left),
                        (t.y = t.top),
                        t
                    );
                })(t)
              : he(
                    (function (e) {
                        var t,
                            n = F(e),
                            i = ce(e),
                            r = null == (t = e.ownerDocument) ? void 0 : t.body,
                            o = P(n.scrollWidth, n.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0),
                            s = P(n.scrollHeight, n.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0),
                            a = -i.scrollLeft + ue(e),
                            l = -i.scrollTop;
                        return "rtl" === B(r || n).direction && (a += P(n.clientWidth, r ? r.clientWidth : 0) - o), { width: o, height: s, x: a, y: l };
                    })(F(e))
                );
      }
      function ge(e, t, n) {
          var i =
                  "clippingParents" === t
                      ? (function (e) {
                            var t = de(z(e)),
                                n = ["absolute", "fixed"].indexOf(B(e).position) >= 0 && N(e) ? V(e) : e;
                            return D(n)
                                ? t.filter(function (e) {
                                      return D(e) && R(e, n) && "body" !== S(e);
                                  })
                                : [];
                        })(e)
                      : [].concat(t),
              r = [].concat(i, [n]),
              o = r[0],
              s = r.reduce(function (t, n) {
                  var i = pe(e, n);
                  return (t.top = P(i.top, t.top)), (t.right = H(i.right, t.right)), (t.bottom = H(i.bottom, t.bottom)), (t.left = P(i.left, t.left)), t;
              }, pe(e, o));
          return (s.width = s.right - s.left), (s.height = s.bottom - s.top), (s.x = s.left), (s.y = s.top), s;
      }
      function me(e) {
          var t,
              n = e.reference,
              i = e.element,
              l = e.placement,
              c = l ? I(l) : null,
              d = l ? Z(l) : null,
              h = n.x + n.width / 2 - i.width / 2,
              p = n.y + n.height / 2 - i.height / 2;
          switch (c) {
              case r:
                  t = { x: h, y: n.y - i.height };
                  break;
              case o:
                  t = { x: h, y: n.y + n.height };
                  break;
              case s:
                  t = { x: n.x + n.width, y: p };
                  break;
              case a:
                  t = { x: n.x - i.width, y: p };
                  break;
              default:
                  t = { x: n.x, y: n.y };
          }
          var g = c ? X(c) : null;
          if (null != g) {
              var m = "y" === g ? "height" : "width";
              switch (d) {
                  case u:
                      t[g] = t[g] - (n[m] / 2 - i[m] / 2);
                      break;
                  case f:
                      t[g] = t[g] + (n[m] / 2 - i[m] / 2);
              }
          }
          return t;
      }
      function ve(e, t) {
          void 0 === t && (t = {});
          var n = t,
              i = n.placement,
              a = void 0 === i ? e.placement : i,
              l = n.boundary,
              u = void 0 === l ? d : l,
              f = n.rootBoundary,
              m = void 0 === f ? h : f,
              v = n.elementContext,
              y = void 0 === v ? p : v,
              b = n.altBoundary,
              _ = void 0 !== b && b,
              w = n.padding,
              x = void 0 === w ? 0 : w,
              E = K("number" != typeof x ? x : Q(x, c)),
              T = y === p ? g : p,
              C = e.rects.popper,
              A = e.elements[_ ? T : y],
              k = ge(D(A) ? A : A.contextElement || F(e.elements.popper), u, m),
              S = q(e.elements.reference),
              O = me({ reference: S, element: C, strategy: "absolute", placement: a }),
              N = he(Object.assign({}, C, O)),
              L = y === p ? N : S,
              j = { top: k.top - L.top + E.top, bottom: L.bottom - k.bottom + E.bottom, left: k.left - L.left + E.left, right: L.right - k.right + E.right },
              I = e.modifiersData.offset;
          if (y === p && I) {
              var P = I[a];
              Object.keys(j).forEach(function (e) {
                  var t = [s, o].indexOf(e) >= 0 ? 1 : -1,
                      n = [r, o].indexOf(e) >= 0 ? "y" : "x";
                  j[e] += P[n] * t;
              });
          }
          return j;
      }
      var ye = {
          name: "flip",
          enabled: !0,
          phase: "main",
          fn: function (e) {
              var t = e.state,
                  n = e.options,
                  i = e.name;
              if (!t.modifiersData[i]._skip) {
                  for (
                      var f = n.mainAxis,
                          d = void 0 === f || f,
                          h = n.altAxis,
                          p = void 0 === h || h,
                          g = n.fallbackPlacements,
                          y = n.padding,
                          b = n.boundary,
                          _ = n.rootBoundary,
                          w = n.altBoundary,
                          x = n.flipVariations,
                          E = void 0 === x || x,
                          T = n.allowedAutoPlacements,
                          C = t.options.placement,
                          A = I(C),
                          k =
                              g ||
                              (A !== C && E
                                  ? (function (e) {
                                        if (I(e) === l) return [];
                                        var t = se(e);
                                        return [le(e), t, le(t)];
                                    })(C)
                                  : [se(C)]),
                          S = [C].concat(k).reduce(function (e, n) {
                              return e.concat(
                                  I(n) === l
                                      ? (function (e, t) {
                                            void 0 === t && (t = {});
                                            var n = t,
                                                i = n.placement,
                                                r = n.boundary,
                                                o = n.rootBoundary,
                                                s = n.padding,
                                                a = n.flipVariations,
                                                l = n.allowedAutoPlacements,
                                                u = void 0 === l ? v : l,
                                                f = Z(i),
                                                d = f
                                                    ? a
                                                        ? m
                                                        : m.filter(function (e) {
                                                              return Z(e) === f;
                                                          })
                                                    : c,
                                                h = d.filter(function (e) {
                                                    return u.indexOf(e) >= 0;
                                                });
                                            0 === h.length && (h = d);
                                            var p = h.reduce(function (t, n) {
                                                return (t[n] = ve(e, { placement: n, boundary: r, rootBoundary: o, padding: s })[I(n)]), t;
                                            }, {});
                                            return Object.keys(p).sort(function (e, t) {
                                                return p[e] - p[t];
                                            });
                                        })(t, { placement: n, boundary: b, rootBoundary: _, padding: y, flipVariations: E, allowedAutoPlacements: T })
                                      : n
                              );
                          }, []),
                          O = t.rects.reference,
                          D = t.rects.popper,
                          N = new Map(),
                          L = !0,
                          j = S[0],
                          P = 0;
                      P < S.length;
                      P++
                  ) {
                      var H = S[P],
                          M = I(H),
                          q = Z(H) === u,
                          $ = [r, o].indexOf(M) >= 0,
                          R = $ ? "width" : "height",
                          B = ve(t, { placement: H, boundary: b, rootBoundary: _, altBoundary: w, padding: y }),
                          W = $ ? (q ? s : a) : q ? o : r;
                      O[R] > D[R] && (W = se(W));
                      var F = se(W),
                          z = [];
                      if (
                          (d && z.push(B[M] <= 0),
                          p && z.push(B[W] <= 0, B[F] <= 0),
                          z.every(function (e) {
                              return e;
                          }))
                      ) {
                          (j = H), (L = !1);
                          break;
                      }
                      N.set(H, z);
                  }
                  if (L)
                      for (
                          var U = function (e) {
                                  var t = S.find(function (t) {
                                      var n = N.get(t);
                                      if (n)
                                          return n.slice(0, e).every(function (e) {
                                              return e;
                                          });
                                  });
                                  if (t) return (j = t), "break";
                              },
                              V = E ? 3 : 1;
                          V > 0 && "break" !== U(V);
                          V--
                      );
                  t.placement !== j && ((t.modifiersData[i]._skip = !0), (t.placement = j), (t.reset = !0));
              }
          },
          requiresIfExists: ["offset"],
          data: { _skip: !1 },
      };
      function be(e, t, n) {
          return void 0 === n && (n = { x: 0, y: 0 }), { top: e.top - t.height - n.y, right: e.right - t.width + n.x, bottom: e.bottom - t.height + n.y, left: e.left - t.width - n.x };
      }
      function _e(e) {
          return [r, s, o, a].some(function (t) {
              return e[t] >= 0;
          });
      }
      var we = {
          name: "hide",
          enabled: !0,
          phase: "main",
          requiresIfExists: ["preventOverflow"],
          fn: function (e) {
              var t = e.state,
                  n = e.name,
                  i = t.rects.reference,
                  r = t.rects.popper,
                  o = t.modifiersData.preventOverflow,
                  s = ve(t, { elementContext: "reference" }),
                  a = ve(t, { altBoundary: !0 }),
                  l = be(s, i),
                  c = be(a, r, o),
                  u = _e(l),
                  f = _e(c);
              (t.modifiersData[n] = { referenceClippingOffsets: l, popperEscapeOffsets: c, isReferenceHidden: u, hasPopperEscaped: f }),
                  (t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": u, "data-popper-escaped": f }));
          },
      };
      var xe = {
          name: "offset",
          enabled: !0,
          phase: "main",
          requires: ["popperOffsets"],
          fn: function (e) {
              var t = e.state,
                  n = e.options,
                  i = e.name,
                  o = n.offset,
                  l = void 0 === o ? [0, 0] : o,
                  c = v.reduce(function (e, n) {
                      return (
                          (e[n] = (function (e, t, n) {
                              var i = I(e),
                                  o = [a, r].indexOf(i) >= 0 ? -1 : 1,
                                  l = "function" == typeof n ? n(Object.assign({}, t, { placement: e })) : n,
                                  c = l[0],
                                  u = l[1];
                              return (c = c || 0), (u = (u || 0) * o), [a, s].indexOf(i) >= 0 ? { x: u, y: c } : { x: c, y: u };
                          })(n, t.rects, l)),
                          e
                      );
                  }, {}),
                  u = c[t.placement],
                  f = u.x,
                  d = u.y;
              null != t.modifiersData.popperOffsets && ((t.modifiersData.popperOffsets.x += f), (t.modifiersData.popperOffsets.y += d)), (t.modifiersData[i] = c);
          },
      };
      var Ee = {
          name: "popperOffsets",
          enabled: !0,
          phase: "read",
          fn: function (e) {
              var t = e.state,
                  n = e.name;
              t.modifiersData[n] = me({ reference: t.rects.reference, element: t.rects.popper, strategy: "absolute", placement: t.placement });
          },
          data: {},
      };
      var Te = {
          name: "preventOverflow",
          enabled: !0,
          phase: "main",
          fn: function (e) {
              var t = e.state,
                  n = e.options,
                  i = e.name,
                  l = n.mainAxis,
                  c = void 0 === l || l,
                  f = n.altAxis,
                  d = void 0 !== f && f,
                  h = n.boundary,
                  p = n.rootBoundary,
                  g = n.altBoundary,
                  m = n.padding,
                  v = n.tether,
                  y = void 0 === v || v,
                  b = n.tetherOffset,
                  _ = void 0 === b ? 0 : b,
                  w = ve(t, { boundary: h, rootBoundary: p, padding: m, altBoundary: g }),
                  x = I(t.placement),
                  E = Z(t.placement),
                  T = !E,
                  C = X(x),
                  A = (function (e) {
                      return "x" === e ? "y" : "x";
                  })(C),
                  k = t.modifiersData.popperOffsets,
                  S = t.rects.reference,
                  O = t.rects.popper,
                  D = "function" == typeof _ ? _(Object.assign({}, t.rects, { placement: t.placement })) : _,
                  N = "number" == typeof D ? { mainAxis: D, altAxis: D } : Object.assign({ mainAxis: 0, altAxis: 0 }, D),
                  L = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
                  j = { x: 0, y: 0 };
              if (k) {
                  if (c) {
                      var M,
                          q = "y" === C ? r : a,
                          R = "y" === C ? o : s,
                          B = "y" === C ? "height" : "width",
                          W = k[C],
                          F = W + w[q],
                          z = W - w[R],
                          U = y ? -O[B] / 2 : 0,
                          K = E === u ? S[B] : O[B],
                          Q = E === u ? -O[B] : -S[B],
                          G = t.elements.arrow,
                          J = y && G ? $(G) : { width: 0, height: 0 },
                          ee = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : { top: 0, right: 0, bottom: 0, left: 0 },
                          te = ee[q],
                          ne = ee[R],
                          ie = Y(0, S[B], J[B]),
                          re = T ? S[B] / 2 - U - ie - te - N.mainAxis : K - ie - te - N.mainAxis,
                          oe = T ? -S[B] / 2 + U + ie + ne + N.mainAxis : Q + ie + ne + N.mainAxis,
                          se = t.elements.arrow && V(t.elements.arrow),
                          ae = se ? ("y" === C ? se.clientTop || 0 : se.clientLeft || 0) : 0,
                          le = null != (M = null == L ? void 0 : L[C]) ? M : 0,
                          ce = W + oe - le,
                          ue = Y(y ? H(F, W + re - le - ae) : F, W, y ? P(z, ce) : z);
                      (k[C] = ue), (j[C] = ue - W);
                  }
                  if (d) {
                      var fe,
                          de = "x" === C ? r : a,
                          he = "x" === C ? o : s,
                          pe = k[A],
                          ge = "y" === A ? "height" : "width",
                          me = pe + w[de],
                          ye = pe - w[he],
                          be = -1 !== [r, a].indexOf(x),
                          _e = null != (fe = null == L ? void 0 : L[A]) ? fe : 0,
                          we = be ? me : pe - S[ge] - O[ge] - _e + N.altAxis,
                          xe = be ? pe + S[ge] + O[ge] - _e - N.altAxis : ye,
                          Ee =
                              y && be
                                  ? (function (e, t, n) {
                                        var i = Y(e, t, n);
                                        return i > n ? n : i;
                                    })(we, pe, xe)
                                  : Y(y ? we : me, pe, y ? xe : ye);
                      (k[A] = Ee), (j[A] = Ee - pe);
                  }
                  t.modifiersData[i] = j;
              }
          },
          requiresIfExists: ["offset"],
      };
      function Ce(e, t, n) {
          void 0 === n && (n = !1);
          var i = N(t),
              r =
                  N(t) &&
                  (function (e) {
                      var t = e.getBoundingClientRect(),
                          n = M(t.width) / e.offsetWidth || 1,
                          i = M(t.height) / e.offsetHeight || 1;
                      return 1 !== n || 1 !== i;
                  })(t),
              o = F(t),
              s = q(e, r),
              a = { scrollLeft: 0, scrollTop: 0 },
              l = { x: 0, y: 0 };
          return (
              (i || (!i && !n)) &&
                  (("body" !== S(t) || fe(o)) &&
                      (a = (function (e) {
                          return e !== O(e) && N(e)
                              ? (function (e) {
                                    return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
                                })(e)
                              : ce(e);
                      })(t)),
                  N(t) ? (((l = q(t, !0)).x += t.clientLeft), (l.y += t.clientTop)) : o && (l.x = ue(o))),
              { x: s.left + a.scrollLeft - l.x, y: s.top + a.scrollTop - l.y, width: s.width, height: s.height }
          );
      }
      function Ae(e) {
          var t = new Map(),
              n = new Set(),
              i = [];
          return (
              e.forEach(function (e) {
                  t.set(e.name, e);
              }),
              e.forEach(function (e) {
                  n.has(e.name) ||
                      (function e(r) {
                          n.add(r.name),
                              [].concat(r.requires || [], r.requiresIfExists || []).forEach(function (i) {
                                  if (!n.has(i)) {
                                      var r = t.get(i);
                                      r && e(r);
                                  }
                              }),
                              i.push(r);
                      })(e);
              }),
              i
          );
      }
      var ke = { placement: "bottom", modifiers: [], strategy: "absolute" };
      function Se() {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
          return !t.some(function (e) {
              return !(e && "function" == typeof e.getBoundingClientRect);
          });
      }
      function Oe(e) {
          void 0 === e && (e = {});
          var t = e,
              n = t.defaultModifiers,
              i = void 0 === n ? [] : n,
              r = t.defaultOptions,
              o = void 0 === r ? ke : r;
          return function (e, t, n) {
              void 0 === n && (n = o);
              var r = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, ke, o), modifiersData: {}, elements: { reference: e, popper: t }, attributes: {}, styles: {} },
                  s = [],
                  a = !1,
                  l = {
                      state: r,
                      setOptions: function (n) {
                          var a = "function" == typeof n ? n(r.options) : n;
                          c(), (r.options = Object.assign({}, o, r.options, a)), (r.scrollParents = { reference: D(e) ? de(e) : e.contextElement ? de(e.contextElement) : [], popper: de(t) });
                          var u = (function (e) {
                              var t = Ae(e);
                              return k.reduce(function (e, n) {
                                  return e.concat(
                                      t.filter(function (e) {
                                          return e.phase === n;
                                      })
                                  );
                              }, []);
                          })(
                              (function (e) {
                                  var t = e.reduce(function (e, t) {
                                      var n = e[t.name];
                                      return (e[t.name] = n ? Object.assign({}, n, t, { options: Object.assign({}, n.options, t.options), data: Object.assign({}, n.data, t.data) }) : t), e;
                                  }, {});
                                  return Object.keys(t).map(function (e) {
                                      return t[e];
                                  });
                              })([].concat(i, r.options.modifiers))
                          );
                          return (
                              (r.orderedModifiers = u.filter(function (e) {
                                  return e.enabled;
                              })),
                              r.orderedModifiers.forEach(function (e) {
                                  var t = e.name,
                                      n = e.options,
                                      i = void 0 === n ? {} : n,
                                      o = e.effect;
                                  if ("function" == typeof o) {
                                      var a = o({ state: r, name: t, instance: l, options: i });
                                      s.push(a || function () {});
                                  }
                              }),
                              l.update()
                          );
                      },
                      forceUpdate: function () {
                          if (!a) {
                              var e = r.elements,
                                  t = e.reference,
                                  n = e.popper;
                              if (Se(t, n)) {
                                  (r.rects = { reference: Ce(t, V(n), "fixed" === r.options.strategy), popper: $(n) }),
                                      (r.reset = !1),
                                      (r.placement = r.options.placement),
                                      r.orderedModifiers.forEach(function (e) {
                                          return (r.modifiersData[e.name] = Object.assign({}, e.data));
                                      });
                                  for (var i = 0; i < r.orderedModifiers.length; i++)
                                      if (!0 !== r.reset) {
                                          var o = r.orderedModifiers[i],
                                              s = o.fn,
                                              c = o.options,
                                              u = void 0 === c ? {} : c,
                                              f = o.name;
                                          "function" == typeof s && (r = s({ state: r, options: u, name: f, instance: l }) || r);
                                      } else (r.reset = !1), (i = -1);
                              }
                          }
                      },
                      update: (function (e) {
                          var t;
                          return function () {
                              return (
                                  t ||
                                      (t = new Promise(function (n) {
                                          Promise.resolve().then(function () {
                                              (t = void 0), n(e());
                                          });
                                      })),
                                  t
                              );
                          };
                      })(function () {
                          return new Promise(function (e) {
                              l.forceUpdate(), e(r);
                          });
                      }),
                      destroy: function () {
                          c(), (a = !0);
                      },
                  };
              if (!Se(e, t)) return l;
              function c() {
                  s.forEach(function (e) {
                      return e();
                  }),
                      (s = []);
              }
              return (
                  l.setOptions(n).then(function (e) {
                      !a && n.onFirstUpdate && n.onFirstUpdate(e);
                  }),
                  l
              );
          };
      }
      var De = Oe(),
          Ne = Oe({ defaultModifiers: [re, Ee, ne, j, xe, ye, Te, J, we] }),
          Le = Oe({ defaultModifiers: [re, Ee, ne, j] });
      /*!
       * Bootstrap v5.1.3 (https://getbootstrap.com/)
       * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
       * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
       */
      const je = (e) => {
              do {
                  e += Math.floor(1e6 * Math.random());
              } while (document.getElementById(e));
              return e;
          },
          Ie = (e) => {
              let t = e.getAttribute("data-bs-target");
              if (!t || "#" === t) {
                  let n = e.getAttribute("href");
                  if (!n || (!n.includes("#") && !n.startsWith("."))) return null;
                  n.includes("#") && !n.startsWith("#") && (n = `#${n.split("#")[1]}`), (t = n && "#" !== n ? n.trim() : null);
              }
              return t;
          },
          Pe = (e) => {
              const t = Ie(e);
              return t && document.querySelector(t) ? t : null;
          },
          He = (e) => {
              const t = Ie(e);
              return t ? document.querySelector(t) : null;
          },
          Me = (e) => {
              e.dispatchEvent(new Event("transitionend"));
          },
          qe = (e) => !(!e || "object" != typeof e) && (void 0 !== e.jquery && (e = e[0]), void 0 !== e.nodeType),
          $e = (e) => (qe(e) ? (e.jquery ? e[0] : e) : "string" == typeof e && e.length > 0 ? document.querySelector(e) : null),
          Re = (e, t, n) => {
              Object.keys(n).forEach((i) => {
                  const r = n[i],
                      o = t[i],
                      s =
                          o && qe(o)
                              ? "element"
                              : ((e) =>
                                    null === e || void 0 === e
                                        ? `${e}`
                                        : {}.toString
                                              .call(e)
                                              .match(/\s([a-z]+)/i)[1]
                                              .toLowerCase())(o);
                  if (!new RegExp(r).test(s)) throw new TypeError(`${e.toUpperCase()}: Option "${i}" provided type "${s}" but expected type "${r}".`);
              });
          },
          Be = (e) => !(!qe(e) || 0 === e.getClientRects().length) && "visible" === getComputedStyle(e).getPropertyValue("visibility"),
          We = (e) => !e || e.nodeType !== Node.ELEMENT_NODE || !!e.classList.contains("disabled") || (void 0 !== e.disabled ? e.disabled : e.hasAttribute("disabled") && "false" !== e.getAttribute("disabled")),
          Fe = (e) => {
              if (!document.documentElement.attachShadow) return null;
              if ("function" == typeof e.getRootNode) {
                  const t = e.getRootNode();
                  return t instanceof ShadowRoot ? t : null;
              }
              return e instanceof ShadowRoot ? e : e.parentNode ? Fe(e.parentNode) : null;
          },
          ze = () => {},
          Ue = (e) => {
              e.offsetHeight;
          },
          Ve = () => {
              const { jQuery: e } = window;
              return e && !document.body.hasAttribute("data-bs-no-jquery") ? e : null;
          },
          Xe = [],
          Ye = () => "rtl" === document.documentElement.dir,
          Ke = (e) => {
              ((e) => {
                  "loading" === document.readyState
                      ? (Xe.length ||
                            document.addEventListener("DOMContentLoaded", () => {
                                Xe.forEach((e) => e());
                            }),
                        Xe.push(e))
                      : e();
              })(() => {
                  const t = Ve();
                  if (t) {
                      const n = e.NAME,
                          i = t.fn[n];
                      (t.fn[n] = e.jQueryInterface), (t.fn[n].Constructor = e), (t.fn[n].noConflict = () => ((t.fn[n] = i), e.jQueryInterface));
                  }
              });
          },
          Qe = (e) => {
              "function" == typeof e && e();
          },
          Ge = (e, t, n = !0) => {
              if (!n) return void Qe(e);
              const i =
                  ((e) => {
                      if (!e) return 0;
                      let { transitionDuration: t, transitionDelay: n } = window.getComputedStyle(e);
                      const i = Number.parseFloat(t),
                          r = Number.parseFloat(n);
                      return i || r ? ((t = t.split(",")[0]), (n = n.split(",")[0]), 1e3 * (Number.parseFloat(t) + Number.parseFloat(n))) : 0;
                  })(t) + 5;
              let r = !1;
              const o = ({ target: n }) => {
                  n === t && ((r = !0), t.removeEventListener("transitionend", o), Qe(e));
              };
              t.addEventListener("transitionend", o),
                  setTimeout(() => {
                      r || Me(t);
                  }, i);
          },
          Je = (e, t, n, i) => {
              let r = e.indexOf(t);
              if (-1 === r) return e[!n && i ? e.length - 1 : 0];
              const o = e.length;
              return (r += n ? 1 : -1), i && (r = (r + o) % o), e[Math.max(0, Math.min(r, o - 1))];
          },
          Ze = /[^.]*(?=\..*)\.|.*/,
          et = /\..*/,
          tt = /::\d+$/,
          nt = {};
      let it = 1;
      const rt = { mouseenter: "mouseover", mouseleave: "mouseout" },
          ot = /^(mouseenter|mouseleave)/i,
          st = new Set([
              "click",
              "dblclick",
              "mouseup",
              "mousedown",
              "contextmenu",
              "mousewheel",
              "DOMMouseScroll",
              "mouseover",
              "mouseout",
              "mousemove",
              "selectstart",
              "selectend",
              "keydown",
              "keypress",
              "keyup",
              "orientationchange",
              "touchstart",
              "touchmove",
              "touchend",
              "touchcancel",
              "pointerdown",
              "pointermove",
              "pointerup",
              "pointerleave",
              "pointercancel",
              "gesturestart",
              "gesturechange",
              "gestureend",
              "focus",
              "blur",
              "change",
              "reset",
              "select",
              "submit",
              "focusin",
              "focusout",
              "load",
              "unload",
              "beforeunload",
              "resize",
              "move",
              "DOMContentLoaded",
              "readystatechange",
              "error",
              "abort",
              "scroll",
          ]);
      function at(e, t) {
          return (t && `${t}::${it++}`) || e.uidEvent || it++;
      }
      function lt(e) {
          const t = at(e);
          return (e.uidEvent = t), (nt[t] = nt[t] || {}), nt[t];
      }
      function ct(e, t, n = null) {
          const i = Object.keys(e);
          for (let r = 0, o = i.length; r < o; r++) {
              const o = e[i[r]];
              if (o.originalHandler === t && o.delegationSelector === n) return o;
          }
          return null;
      }
      function ut(e, t, n) {
          const i = "string" == typeof t,
              r = i ? n : t;
          let o = ht(e);
          return st.has(o) || (o = e), [i, r, o];
      }
      function ft(e, t, n, i, r) {
          if ("string" != typeof t || !e) return;
          if ((n || ((n = i), (i = null)), ot.test(t))) {
              const e = (e) =>
                  function (t) {
                      if (!t.relatedTarget || (t.relatedTarget !== t.delegateTarget && !t.delegateTarget.contains(t.relatedTarget))) return e.call(this, t);
                  };
              i ? (i = e(i)) : (n = e(n));
          }
          const [o, s, a] = ut(t, n, i),
              l = lt(e),
              c = l[a] || (l[a] = {}),
              u = ct(c, s, o ? n : null);
          if (u) return void (u.oneOff = u.oneOff && r);
          const f = at(s, t.replace(Ze, "")),
              d = o
                  ? (function (e, t, n) {
                        return function i(r) {
                            const o = e.querySelectorAll(t);
                            for (let { target: s } = r; s && s !== this; s = s.parentNode) for (let a = o.length; a--; ) if (o[a] === s) return (r.delegateTarget = s), i.oneOff && pt.off(e, r.type, t, n), n.apply(s, [r]);
                            return null;
                        };
                    })(e, n, i)
                  : (function (e, t) {
                        return function n(i) {
                            return (i.delegateTarget = e), n.oneOff && pt.off(e, i.type, t), t.apply(e, [i]);
                        };
                    })(e, n);
          (d.delegationSelector = o ? n : null), (d.originalHandler = s), (d.oneOff = r), (d.uidEvent = f), (c[f] = d), e.addEventListener(a, d, o);
      }
      function dt(e, t, n, i, r) {
          const o = ct(t[n], i, r);
          o && (e.removeEventListener(n, o, Boolean(r)), delete t[n][o.uidEvent]);
      }
      function ht(e) {
          return (e = e.replace(et, "")), rt[e] || e;
      }
      const pt = {
              on(e, t, n, i) {
                  ft(e, t, n, i, !1);
              },
              one(e, t, n, i) {
                  ft(e, t, n, i, !0);
              },
              off(e, t, n, i) {
                  if ("string" != typeof t || !e) return;
                  const [r, o, s] = ut(t, n, i),
                      a = s !== t,
                      l = lt(e),
                      c = t.startsWith(".");
                  if (void 0 !== o) {
                      if (!l || !l[s]) return;
                      return void dt(e, l, s, o, r ? n : null);
                  }
                  c &&
                      Object.keys(l).forEach((n) => {
                          !(function (e, t, n, i) {
                              const r = t[n] || {};
                              Object.keys(r).forEach((o) => {
                                  if (o.includes(i)) {
                                      const i = r[o];
                                      dt(e, t, n, i.originalHandler, i.delegationSelector);
                                  }
                              });
                          })(e, l, n, t.slice(1));
                      });
                  const u = l[s] || {};
                  Object.keys(u).forEach((n) => {
                      const i = n.replace(tt, "");
                      if (!a || t.includes(i)) {
                          const t = u[n];
                          dt(e, l, s, t.originalHandler, t.delegationSelector);
                      }
                  });
              },
              trigger(e, t, n) {
                  if ("string" != typeof t || !e) return null;
                  const i = Ve(),
                      r = ht(t),
                      o = t !== r,
                      s = st.has(r);
                  let a,
                      l = !0,
                      c = !0,
                      u = !1,
                      f = null;
                  return (
                      o && i && ((a = i.Event(t, n)), i(e).trigger(a), (l = !a.isPropagationStopped()), (c = !a.isImmediatePropagationStopped()), (u = a.isDefaultPrevented())),
                      s ? (f = document.createEvent("HTMLEvents")).initEvent(r, l, !0) : (f = new CustomEvent(t, { bubbles: l, cancelable: !0 })),
                      void 0 !== n &&
                          Object.keys(n).forEach((e) => {
                              Object.defineProperty(f, e, { get: () => n[e] });
                          }),
                      u && f.preventDefault(),
                      c && e.dispatchEvent(f),
                      f.defaultPrevented && void 0 !== a && a.preventDefault(),
                      f
                  );
              },
          },
          gt = new Map(),
          mt = {
              set(e, t, n) {
                  gt.has(e) || gt.set(e, new Map());
                  const i = gt.get(e);
                  i.has(t) || 0 === i.size ? i.set(t, n) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(i.keys())[0]}.`);
              },
              get: (e, t) => (gt.has(e) && gt.get(e).get(t)) || null,
              remove(e, t) {
                  if (!gt.has(e)) return;
                  const n = gt.get(e);
                  n.delete(t), 0 === n.size && gt.delete(e);
              },
          },
          vt = "5.1.3";
      class yt {
          constructor(e) {
              (e = $e(e)) && ((this._element = e), mt.set(this._element, this.constructor.DATA_KEY, this));
          }
          dispose() {
              mt.remove(this._element, this.constructor.DATA_KEY),
                  pt.off(this._element, this.constructor.EVENT_KEY),
                  Object.getOwnPropertyNames(this).forEach((e) => {
                      this[e] = null;
                  });
          }
          _queueCallback(e, t, n = !0) {
              Ge(e, t, n);
          }
          static getInstance(e) {
              return mt.get($e(e), this.DATA_KEY);
          }
          static getOrCreateInstance(e, t = {}) {
              return this.getInstance(e) || new this(e, "object" == typeof t ? t : null);
          }
          static get VERSION() {
              return vt;
          }
          static get NAME() {
              throw new Error('You have to implement the static method "NAME", for each component!');
          }
          static get DATA_KEY() {
              return `bs.${this.NAME}`;
          }
          static get EVENT_KEY() {
              return `.${this.DATA_KEY}`;
          }
      }
      const bt = (e, t = "hide") => {
              const n = `click.dismiss${e.EVENT_KEY}`,
                  i = e.NAME;
              pt.on(document, n, `[data-bs-dismiss="${i}"]`, function (n) {
                  if ((["A", "AREA"].includes(this.tagName) && n.preventDefault(), We(this))) return;
                  const r = He(this) || this.closest(`.${i}`);
                  e.getOrCreateInstance(r)[t]();
              });
          },
          _t = "alert",
          wt = "close.bs.alert",
          xt = "closed.bs.alert",
          Et = "fade",
          Tt = "show";
      class Ct extends yt {
          static get NAME() {
              return _t;
          }
          close() {
              if (pt.trigger(this._element, wt).defaultPrevented) return;
              this._element.classList.remove(Tt);
              const e = this._element.classList.contains(Et);
              this._queueCallback(() => this._destroyElement(), this._element, e);
          }
          _destroyElement() {
              this._element.remove(), pt.trigger(this._element, xt), this.dispose();
          }
          static jQueryInterface(e) {
              return this.each(function () {
                  const t = Ct.getOrCreateInstance(this);
                  if ("string" == typeof e) {
                      if (void 0 === t[e] || e.startsWith("_") || "constructor" === e) throw new TypeError(`No method named "${e}"`);
                      t[e](this);
                  }
              });
          }
      }
      bt(Ct, "close"), Ke(Ct);
      const At = "button",
          kt = "active";
      class St extends yt {
          static get NAME() {
              return At;
          }
          toggle() {
              this._element.setAttribute("aria-pressed", this._element.classList.toggle(kt));
          }
          static jQueryInterface(e) {
              return this.each(function () {
                  const t = St.getOrCreateInstance(this);
                  "toggle" === e && t[e]();
              });
          }
      }
      function Ot(e) {
          return "true" === e || ("false" !== e && (e === Number(e).toString() ? Number(e) : "" === e || "null" === e ? null : e));
      }
      function Dt(e) {
          return e.replace(/[A-Z]/g, (e) => `-${e.toLowerCase()}`);
      }
      pt.on(document, "click.bs.button.data-api", '[data-bs-toggle="button"]', (e) => {
          e.preventDefault();
          const t = e.target.closest('[data-bs-toggle="button"]');
          St.getOrCreateInstance(t).toggle();
      }),
          Ke(St);
      const Nt = {
              setDataAttribute(e, t, n) {
                  e.setAttribute(`data-bs-${Dt(t)}`, n);
              },
              removeDataAttribute(e, t) {
                  e.removeAttribute(`data-bs-${Dt(t)}`);
              },
              getDataAttributes(e) {
                  if (!e) return {};
                  const t = {};
                  return (
                      Object.keys(e.dataset)
                          .filter((e) => e.startsWith("bs"))
                          .forEach((n) => {
                              let i = n.replace(/^bs/, "");
                              (i = i.charAt(0).toLowerCase() + i.slice(1, i.length)), (t[i] = Ot(e.dataset[n]));
                          }),
                      t
                  );
              },
              getDataAttribute: (e, t) => Ot(e.getAttribute(`data-bs-${Dt(t)}`)),
              offset(e) {
                  const t = e.getBoundingClientRect();
                  return { top: t.top + window.pageYOffset, left: t.left + window.pageXOffset };
              },
              position: (e) => ({ top: e.offsetTop, left: e.offsetLeft }),
          },
          Lt = {
              find: (e, t = document.documentElement) => [].concat(...Element.prototype.querySelectorAll.call(t, e)),
              findOne: (e, t = document.documentElement) => Element.prototype.querySelector.call(t, e),
              children: (e, t) => [].concat(...e.children).filter((e) => e.matches(t)),
              parents(e, t) {
                  const n = [];
                  let i = e.parentNode;
                  for (; i && i.nodeType === Node.ELEMENT_NODE && 3 !== i.nodeType; ) i.matches(t) && n.push(i), (i = i.parentNode);
                  return n;
              },
              prev(e, t) {
                  let n = e.previousElementSibling;
                  for (; n; ) {
                      if (n.matches(t)) return [n];
                      n = n.previousElementSibling;
                  }
                  return [];
              },
              next(e, t) {
                  let n = e.nextElementSibling;
                  for (; n; ) {
                      if (n.matches(t)) return [n];
                      n = n.nextElementSibling;
                  }
                  return [];
              },
              focusableChildren(e) {
                  const t = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map((e) => `${e}:not([tabindex^="-"])`).join(", ");
                  return this.find(t, e).filter((e) => !We(e) && Be(e));
              },
          },
          jt = "carousel",
          It = 500,
          Pt = 40,
          Ht = { interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0, touch: !0 },
          Mt = { interval: "(number|boolean)", keyboard: "boolean", slide: "(boolean|string)", pause: "(string|boolean)", wrap: "boolean", touch: "boolean" },
          qt = "next",
          $t = "prev",
          Rt = "left",
          Bt = "right",
          Wt = { ArrowLeft: Bt, ArrowRight: Rt },
          Ft = "slide.bs.carousel",
          zt = "slid.bs.carousel",
          Ut = "keydown.bs.carousel",
          Vt = "mouseenter.bs.carousel",
          Xt = "mouseleave.bs.carousel",
          Yt = "touchstart.bs.carousel",
          Kt = "touchmove.bs.carousel",
          Qt = "touchend.bs.carousel",
          Gt = "pointerdown.bs.carousel",
          Jt = "pointerup.bs.carousel",
          Zt = "dragstart.bs.carousel",
          en = "carousel",
          tn = "active",
          nn = "slide",
          rn = "carousel-item-end",
          on = "carousel-item-start",
          sn = "carousel-item-next",
          an = "carousel-item-prev",
          ln = "pointer-event",
          cn = ".active",
          un = ".active.carousel-item",
          fn = ".carousel-item",
          dn = ".carousel-item img",
          hn = ".carousel-item-next, .carousel-item-prev",
          pn = ".carousel-indicators",
          gn = "[data-bs-target]",
          mn = "touch",
          vn = "pen";
      class yn extends yt {
          constructor(e, t) {
              super(e),
                  (this._items = null),
                  (this._interval = null),
                  (this._activeElement = null),
                  (this._isPaused = !1),
                  (this._isSliding = !1),
                  (this.touchTimeout = null),
                  (this.touchStartX = 0),
                  (this.touchDeltaX = 0),
                  (this._config = this._getConfig(t)),
                  (this._indicatorsElement = Lt.findOne(pn, this._element)),
                  (this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0),
                  (this._pointerEvent = Boolean(window.PointerEvent)),
                  this._addEventListeners();
          }
          static get Default() {
              return Ht;
          }
          static get NAME() {
              return jt;
          }
          next() {
              this._slide(qt);
          }
          nextWhenVisible() {
              !document.hidden && Be(this._element) && this.next();
          }
          prev() {
              this._slide($t);
          }
          pause(e) {
              e || (this._isPaused = !0), Lt.findOne(hn, this._element) && (Me(this._element), this.cycle(!0)), clearInterval(this._interval), (this._interval = null);
          }
          cycle(e) {
              e || (this._isPaused = !1),
                  this._interval && (clearInterval(this._interval), (this._interval = null)),
                  this._config && this._config.interval && !this._isPaused && (this._updateInterval(), (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval)));
          }
          to(e) {
              this._activeElement = Lt.findOne(un, this._element);
              const t = this._getItemIndex(this._activeElement);
              if (e > this._items.length - 1 || e < 0) return;
              if (this._isSliding) return void pt.one(this._element, zt, () => this.to(e));
              if (t === e) return this.pause(), void this.cycle();
              const n = e > t ? qt : $t;
              this._slide(n, this._items[e]);
          }
          _getConfig(e) {
              return (e = { ...Ht, ...Nt.getDataAttributes(this._element), ...("object" == typeof e ? e : {}) }), Re(jt, e, Mt), e;
          }
          _handleSwipe() {
              const e = Math.abs(this.touchDeltaX);
              if (e <= Pt) return;
              const t = e / this.touchDeltaX;
              (this.touchDeltaX = 0), t && this._slide(t > 0 ? Bt : Rt);
          }
          _addEventListeners() {
              this._config.keyboard && pt.on(this._element, Ut, (e) => this._keydown(e)),
                  "hover" === this._config.pause && (pt.on(this._element, Vt, (e) => this.pause(e)), pt.on(this._element, Xt, (e) => this.cycle(e))),
                  this._config.touch && this._touchSupported && this._addTouchEventListeners();
          }
          _addTouchEventListeners() {
              const e = (e) => this._pointerEvent && (e.pointerType === vn || e.pointerType === mn),
                  t = (t) => {
                      e(t) ? (this.touchStartX = t.clientX) : this._pointerEvent || (this.touchStartX = t.touches[0].clientX);
                  },
                  n = (e) => {
                      this.touchDeltaX = e.touches && e.touches.length > 1 ? 0 : e.touches[0].clientX - this.touchStartX;
                  },
                  i = (t) => {
                      e(t) && (this.touchDeltaX = t.clientX - this.touchStartX),
                          this._handleSwipe(),
                          "hover" === this._config.pause && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), (this.touchTimeout = setTimeout((e) => this.cycle(e), It + this._config.interval)));
                  };
              Lt.find(dn, this._element).forEach((e) => {
                  pt.on(e, Zt, (e) => e.preventDefault());
              }),
                  this._pointerEvent
                      ? (pt.on(this._element, Gt, (e) => t(e)), pt.on(this._element, Jt, (e) => i(e)), this._element.classList.add(ln))
                      : (pt.on(this._element, Yt, (e) => t(e)), pt.on(this._element, Kt, (e) => n(e)), pt.on(this._element, Qt, (e) => i(e)));
          }
          _keydown(e) {
              if (/input|textarea/i.test(e.target.tagName)) return;
              const t = Wt[e.key];
              t && (e.preventDefault(), this._slide(t));
          }
          _getItemIndex(e) {
              return (this._items = e && e.parentNode ? Lt.find(fn, e.parentNode) : []), this._items.indexOf(e);
          }
          _getItemByOrder(e, t) {
              const n = e === qt;
              return Je(this._items, t, n, this._config.wrap);
          }
          _triggerSlideEvent(e, t) {
              const n = this._getItemIndex(e),
                  i = this._getItemIndex(Lt.findOne(un, this._element));
              return pt.trigger(this._element, Ft, { relatedTarget: e, direction: t, from: i, to: n });
          }
          _setActiveIndicatorElement(e) {
              if (this._indicatorsElement) {
                  const t = Lt.findOne(cn, this._indicatorsElement);
                  t.classList.remove(tn), t.removeAttribute("aria-current");
                  const n = Lt.find(gn, this._indicatorsElement);
                  for (let t = 0; t < n.length; t++)
                      if (Number.parseInt(n[t].getAttribute("data-bs-slide-to"), 10) === this._getItemIndex(e)) {
                          n[t].classList.add(tn), n[t].setAttribute("aria-current", "true");
                          break;
                      }
              }
          }
          _updateInterval() {
              const e = this._activeElement || Lt.findOne(un, this._element);
              if (!e) return;
              const t = Number.parseInt(e.getAttribute("data-bs-interval"), 10);
              t ? ((this._config.defaultInterval = this._config.defaultInterval || this._config.interval), (this._config.interval = t)) : (this._config.interval = this._config.defaultInterval || this._config.interval);
          }
          _slide(e, t) {
              const n = this._directionToOrder(e),
                  i = Lt.findOne(un, this._element),
                  r = this._getItemIndex(i),
                  o = t || this._getItemByOrder(n, i),
                  s = this._getItemIndex(o),
                  a = Boolean(this._interval),
                  l = n === qt,
                  c = l ? on : rn,
                  u = l ? sn : an,
                  f = this._orderToDirection(n);
              if (o && o.classList.contains(tn)) return void (this._isSliding = !1);
              if (this._isSliding) return;
              if (this._triggerSlideEvent(o, f).defaultPrevented) return;
              if (!i || !o) return;
              (this._isSliding = !0), a && this.pause(), this._setActiveIndicatorElement(o), (this._activeElement = o);
              const d = () => {
                  pt.trigger(this._element, zt, { relatedTarget: o, direction: f, from: r, to: s });
              };
              if (this._element.classList.contains(nn)) {
                  o.classList.add(u), Ue(o), i.classList.add(c), o.classList.add(c);
                  const e = () => {
                      o.classList.remove(c, u), o.classList.add(tn), i.classList.remove(tn, u, c), (this._isSliding = !1), setTimeout(d, 0);
                  };
                  this._queueCallback(e, i, !0);
              } else i.classList.remove(tn), o.classList.add(tn), (this._isSliding = !1), d();
              a && this.cycle();
          }
          _directionToOrder(e) {
              return [Bt, Rt].includes(e) ? (Ye() ? (e === Rt ? $t : qt) : e === Rt ? qt : $t) : e;
          }
          _orderToDirection(e) {
              return [qt, $t].includes(e) ? (Ye() ? (e === $t ? Rt : Bt) : e === $t ? Bt : Rt) : e;
          }
          static carouselInterface(e, t) {
              const n = yn.getOrCreateInstance(e, t);
              let { _config: i } = n;
              "object" == typeof t && (i = { ...i, ...t });
              const r = "string" == typeof t ? t : i.slide;
              if ("number" == typeof t) n.to(t);
              else if ("string" == typeof r) {
                  if (void 0 === n[r]) throw new TypeError(`No method named "${r}"`);
                  n[r]();
              } else i.interval && i.ride && (n.pause(), n.cycle());
          }
          static jQueryInterface(e) {
              return this.each(function () {
                  yn.carouselInterface(this, e);
              });
          }
          static dataApiClickHandler(e) {
              const t = He(this);
              if (!t || !t.classList.contains(en)) return;
              const n = { ...Nt.getDataAttributes(t), ...Nt.getDataAttributes(this) },
                  i = this.getAttribute("data-bs-slide-to");
              i && (n.interval = !1), yn.carouselInterface(t, n), i && yn.getInstance(t).to(i), e.preventDefault();
          }
      }
      pt.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", yn.dataApiClickHandler),
          pt.on(window, "load.bs.carousel.data-api", () => {
              const e = Lt.find('[data-bs-ride="carousel"]');
              for (let t = 0, n = e.length; t < n; t++) yn.carouselInterface(e[t], yn.getInstance(e[t]));
          }),
          Ke(yn);
      const bn = "collapse",
          _n = "bs.collapse",
          wn = `.${_n}`,
          xn = { toggle: !0, parent: null },
          En = { toggle: "boolean", parent: "(null|element)" },
          Tn = `show${wn}`,
          Cn = `shown${wn}`,
          An = `hide${wn}`,
          kn = `hidden${wn}`,
          Sn = `click${wn}.data-api`,
          On = "show",
          Dn = "collapse",
          Nn = "collapsing",
          Ln = "collapsed",
          jn = `:scope .${Dn} .${Dn}`,
          In = "collapse-horizontal",
          Pn = "width",
          Hn = "height",
          Mn = ".collapse.show, .collapse.collapsing",
          qn = '[data-bs-toggle="collapse"]';
      class $n extends yt {
          constructor(e, t) {
              super(e), (this._isTransitioning = !1), (this._config = this._getConfig(t)), (this._triggerArray = []);
              const n = Lt.find(qn);
              for (let e = 0, t = n.length; e < t; e++) {
                  const t = n[e],
                      i = Pe(t),
                      r = Lt.find(i).filter((e) => e === this._element);
                  null !== i && r.length && ((this._selector = i), this._triggerArray.push(t));
              }
              this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle();
          }
          static get Default() {
              return xn;
          }
          static get NAME() {
              return bn;
          }
          toggle() {
              this._isShown() ? this.hide() : this.show();
          }
          show() {
              if (this._isTransitioning || this._isShown()) return;
              let e,
                  t = [];
              if (this._config.parent) {
                  const e = Lt.find(jn, this._config.parent);
                  t = Lt.find(Mn, this._config.parent).filter((t) => !e.includes(t));
              }
              const n = Lt.findOne(this._selector);
              if (t.length) {
                  const i = t.find((e) => n !== e);
                  if ((e = i ? $n.getInstance(i) : null) && e._isTransitioning) return;
              }
              if (pt.trigger(this._element, Tn).defaultPrevented) return;
              t.forEach((t) => {
                  n !== t && $n.getOrCreateInstance(t, { toggle: !1 }).hide(), e || mt.set(t, _n, null);
              });
              const i = this._getDimension();
              this._element.classList.remove(Dn), this._element.classList.add(Nn), (this._element.style[i] = 0), this._addAriaAndCollapsedClass(this._triggerArray, !0), (this._isTransitioning = !0);
              const r = `scroll${i[0].toUpperCase() + i.slice(1)}`;
              this._queueCallback(
                  () => {
                      (this._isTransitioning = !1), this._element.classList.remove(Nn), this._element.classList.add(Dn, On), (this._element.style[i] = ""), pt.trigger(this._element, Cn);
                  },
                  this._element,
                  !0
              ),
                  (this._element.style[i] = `${this._element[r]}px`);
          }
          hide() {
              if (this._isTransitioning || !this._isShown()) return;
              if (pt.trigger(this._element, An).defaultPrevented) return;
              const e = this._getDimension();
              (this._element.style[e] = `${this._element.getBoundingClientRect()[e]}px`), Ue(this._element), this._element.classList.add(Nn), this._element.classList.remove(Dn, On);
              const t = this._triggerArray.length;
              for (let e = 0; e < t; e++) {
                  const t = this._triggerArray[e],
                      n = He(t);
                  n && !this._isShown(n) && this._addAriaAndCollapsedClass([t], !1);
              }
              this._isTransitioning = !0;
              (this._element.style[e] = ""),
                  this._queueCallback(
                      () => {
                          (this._isTransitioning = !1), this._element.classList.remove(Nn), this._element.classList.add(Dn), pt.trigger(this._element, kn);
                      },
                      this._element,
                      !0
                  );
          }
          _isShown(e = this._element) {
              return e.classList.contains(On);
          }
          _getConfig(e) {
              return ((e = { ...xn, ...Nt.getDataAttributes(this._element), ...e }).toggle = Boolean(e.toggle)), (e.parent = $e(e.parent)), Re(bn, e, En), e;
          }
          _getDimension() {
              return this._element.classList.contains(In) ? Pn : Hn;
          }
          _initializeChildren() {
              if (!this._config.parent) return;
              const e = Lt.find(jn, this._config.parent);
              Lt.find(qn, this._config.parent)
                  .filter((t) => !e.includes(t))
                  .forEach((e) => {
                      const t = He(e);
                      t && this._addAriaAndCollapsedClass([e], this._isShown(t));
                  });
          }
          _addAriaAndCollapsedClass(e, t) {
              e.length &&
                  e.forEach((e) => {
                      t ? e.classList.remove(Ln) : e.classList.add(Ln), e.setAttribute("aria-expanded", t);
                  });
          }
          static jQueryInterface(e) {
              return this.each(function () {
                  const t = {};
                  "string" == typeof e && /show|hide/.test(e) && (t.toggle = !1);
                  const n = $n.getOrCreateInstance(this, t);
                  if ("string" == typeof e) {
                      if (void 0 === n[e]) throw new TypeError(`No method named "${e}"`);
                      n[e]();
                  }
              });
          }
      }
      pt.on(document, Sn, qn, function (e) {
          ("A" === e.target.tagName || (e.delegateTarget && "A" === e.delegateTarget.tagName)) && e.preventDefault();
          const t = Pe(this);
          Lt.find(t).forEach((e) => {
              $n.getOrCreateInstance(e, { toggle: !1 }).toggle();
          });
      }),
          Ke($n);
      const Rn = "dropdown",
          Bn = "Escape",
          Wn = "Space",
          Fn = "Tab",
          zn = "ArrowUp",
          Un = "ArrowDown",
          Vn = 2,
          Xn = new RegExp(`${zn}|${Un}|${Bn}`),
          Yn = "hide.bs.dropdown",
          Kn = "hidden.bs.dropdown",
          Qn = "show.bs.dropdown",
          Gn = "shown.bs.dropdown",
          Jn = "show",
          Zn = "dropup",
          ei = "dropend",
          ti = "dropstart",
          ni = "navbar",
          ii = '[data-bs-toggle="dropdown"]',
          ri = ".dropdown-menu",
          oi = ".navbar-nav",
          si = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
          ai = Ye() ? "top-end" : "top-start",
          li = Ye() ? "top-start" : "top-end",
          ci = Ye() ? "bottom-end" : "bottom-start",
          ui = Ye() ? "bottom-start" : "bottom-end",
          fi = Ye() ? "left-start" : "right-start",
          di = Ye() ? "right-start" : "left-start",
          hi = { offset: [0, 2], boundary: "clippingParents", reference: "toggle", display: "dynamic", popperConfig: null, autoClose: !0 },
          pi = { offset: "(array|string|function)", boundary: "(string|element)", reference: "(string|element|object)", display: "string", popperConfig: "(null|object|function)", autoClose: "(boolean|string)" };
      class gi extends yt {
          constructor(e, t) {
              super(e), (this._popper = null), (this._config = this._getConfig(t)), (this._menu = this._getMenuElement()), (this._inNavbar = this._detectNavbar());
          }
          static get Default() {
              return hi;
          }
          static get DefaultType() {
              return pi;
          }
          static get NAME() {
              return Rn;
          }
          toggle() {
              return this._isShown() ? this.hide() : this.show();
          }
          show() {
              if (We(this._element) || this._isShown(this._menu)) return;
              const e = { relatedTarget: this._element };
              if (pt.trigger(this._element, Qn, e).defaultPrevented) return;
              const t = gi.getParentFromElement(this._element);
              this._inNavbar ? Nt.setDataAttribute(this._menu, "popper", "none") : this._createPopper(t),
                  "ontouchstart" in document.documentElement && !t.closest(oi) && [].concat(...document.body.children).forEach((e) => pt.on(e, "mouseover", ze)),
                  this._element.focus(),
                  this._element.setAttribute("aria-expanded", !0),
                  this._menu.classList.add(Jn),
                  this._element.classList.add(Jn),
                  pt.trigger(this._element, Gn, e);
          }
          hide() {
              if (We(this._element) || !this._isShown(this._menu)) return;
              const e = { relatedTarget: this._element };
              this._completeHide(e);
          }
          dispose() {
              this._popper && this._popper.destroy(), super.dispose();
          }
          update() {
              (this._inNavbar = this._detectNavbar()), this._popper && this._popper.update();
          }
          _completeHide(e) {
              pt.trigger(this._element, Yn, e).defaultPrevented ||
                  ("ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach((e) => pt.off(e, "mouseover", ze)),
                  this._popper && this._popper.destroy(),
                  this._menu.classList.remove(Jn),
                  this._element.classList.remove(Jn),
                  this._element.setAttribute("aria-expanded", "false"),
                  Nt.removeDataAttribute(this._menu, "popper"),
                  pt.trigger(this._element, Kn, e));
          }
          _getConfig(e) {
              if (
                  ((e = { ...this.constructor.Default, ...Nt.getDataAttributes(this._element), ...e }),
                  Re(Rn, e, this.constructor.DefaultType),
                  "object" == typeof e.reference && !qe(e.reference) && "function" != typeof e.reference.getBoundingClientRect)
              )
                  throw new TypeError(`${Rn.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
              return e;
          }
          _createPopper(e) {
              if (void 0 === i) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
              let t = this._element;
              "parent" === this._config.reference ? (t = e) : qe(this._config.reference) ? (t = $e(this._config.reference)) : "object" == typeof this._config.reference && (t = this._config.reference);
              const n = this._getPopperConfig(),
                  r = n.modifiers.find((e) => "applyStyles" === e.name && !1 === e.enabled);
              (this._popper = Ne(t, this._menu, n)), r && Nt.setDataAttribute(this._menu, "popper", "static");
          }
          _isShown(e = this._element) {
              return e.classList.contains(Jn);
          }
          _getMenuElement() {
              return Lt.next(this._element, ri)[0];
          }
          _getPlacement() {
              const e = this._element.parentNode;
              if (e.classList.contains(ei)) return fi;
              if (e.classList.contains(ti)) return di;
              const t = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
              return e.classList.contains(Zn) ? (t ? li : ai) : t ? ui : ci;
          }
          _detectNavbar() {
              return null !== this._element.closest(`.${ni}`);
          }
          _getOffset() {
              const { offset: e } = this._config;
              return "string" == typeof e ? e.split(",").map((e) => Number.parseInt(e, 10)) : "function" == typeof e ? (t) => e(t, this._element) : e;
          }
          _getPopperConfig() {
              const e = {
                  placement: this._getPlacement(),
                  modifiers: [
                      { name: "preventOverflow", options: { boundary: this._config.boundary } },
                      { name: "offset", options: { offset: this._getOffset() } },
                  ],
              };
              return "static" === this._config.display && (e.modifiers = [{ name: "applyStyles", enabled: !1 }]), { ...e, ...("function" == typeof this._config.popperConfig ? this._config.popperConfig(e) : this._config.popperConfig) };
          }
          _selectMenuItem({ key: e, target: t }) {
              const n = Lt.find(si, this._menu).filter(Be);
              n.length && Je(n, t, e === Un, !n.includes(t)).focus();
          }
          static jQueryInterface(e) {
              return this.each(function () {
                  const t = gi.getOrCreateInstance(this, e);
                  if ("string" == typeof e) {
                      if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);
                      t[e]();
                  }
              });
          }
          static clearMenus(e) {
              if (e && (e.button === Vn || ("keyup" === e.type && e.key !== Fn))) return;
              const t = Lt.find(ii);
              for (let n = 0, i = t.length; n < i; n++) {
                  const i = gi.getInstance(t[n]);
                  if (!i || !1 === i._config.autoClose) continue;
                  if (!i._isShown()) continue;
                  const r = { relatedTarget: i._element };
                  if (e) {
                      const t = e.composedPath(),
                          n = t.includes(i._menu);
                      if (t.includes(i._element) || ("inside" === i._config.autoClose && !n) || ("outside" === i._config.autoClose && n)) continue;
                      if (i._menu.contains(e.target) && (("keyup" === e.type && e.key === Fn) || /input|select|option|textarea|form/i.test(e.target.tagName))) continue;
                      "click" === e.type && (r.clickEvent = e);
                  }
                  i._completeHide(r);
              }
          }
          static getParentFromElement(e) {
              return He(e) || e.parentNode;
          }
          static dataApiKeydownHandler(e) {
              if (/input|textarea/i.test(e.target.tagName) ? e.key === Wn || (e.key !== Bn && ((e.key !== Un && e.key !== zn) || e.target.closest(ri))) : !Xn.test(e.key)) return;
              const t = this.classList.contains(Jn);
              if (!t && e.key === Bn) return;
              if ((e.preventDefault(), e.stopPropagation(), We(this))) return;
              const n = this.matches(ii) ? this : Lt.prev(this, ii)[0],
                  i = gi.getOrCreateInstance(n);
              if (e.key !== Bn) return e.key === zn || e.key === Un ? (t || i.show(), void i._selectMenuItem(e)) : void ((t && e.key !== Wn) || gi.clearMenus());
              i.hide();
          }
      }
      pt.on(document, "keydown.bs.dropdown.data-api", ii, gi.dataApiKeydownHandler),
          pt.on(document, "keydown.bs.dropdown.data-api", ri, gi.dataApiKeydownHandler),
          pt.on(document, "click.bs.dropdown.data-api", gi.clearMenus),
          pt.on(document, "keyup.bs.dropdown.data-api", gi.clearMenus),
          pt.on(document, "click.bs.dropdown.data-api", ii, function (e) {
              e.preventDefault(), gi.getOrCreateInstance(this).toggle();
          }),
          Ke(gi);
      const mi = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
          vi = ".sticky-top";
      class yi {
          constructor() {
              this._element = document.body;
          }
          getWidth() {
              const e = document.documentElement.clientWidth;
              return Math.abs(window.innerWidth - e);
          }
          hide() {
              const e = this.getWidth();
              this._disableOverFlow(), this._setElementAttributes(this._element, "paddingRight", (t) => t + e), this._setElementAttributes(mi, "paddingRight", (t) => t + e), this._setElementAttributes(vi, "marginRight", (t) => t - e);
          }
          _disableOverFlow() {
              this._saveInitialAttribute(this._element, "overflow"), (this._element.style.overflow = "hidden");
          }
          _setElementAttributes(e, t, n) {
              const i = this.getWidth();
              this._applyManipulationCallback(e, (e) => {
                  if (e !== this._element && window.innerWidth > e.clientWidth + i) return;
                  this._saveInitialAttribute(e, t);
                  const r = window.getComputedStyle(e)[t];
                  e.style[t] = `${n(Number.parseFloat(r))}px`;
              });
          }
          reset() {
              this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, "paddingRight"), this._resetElementAttributes(mi, "paddingRight"), this._resetElementAttributes(vi, "marginRight");
          }
          _saveInitialAttribute(e, t) {
              const n = e.style[t];
              n && Nt.setDataAttribute(e, t, n);
          }
          _resetElementAttributes(e, t) {
              this._applyManipulationCallback(e, (e) => {
                  const n = Nt.getDataAttribute(e, t);
                  void 0 === n ? e.style.removeProperty(t) : (Nt.removeDataAttribute(e, t), (e.style[t] = n));
              });
          }
          _applyManipulationCallback(e, t) {
              qe(e) ? t(e) : Lt.find(e, this._element).forEach(t);
          }
          isOverflowing() {
              return this.getWidth() > 0;
          }
      }
      const bi = { className: "modal-backdrop", isVisible: !0, isAnimated: !1, rootElement: "body", clickCallback: null },
          _i = { className: "string", isVisible: "boolean", isAnimated: "boolean", rootElement: "(element|string)", clickCallback: "(function|null)" },
          wi = "backdrop",
          xi = "fade",
          Ei = "show",
          Ti = `mousedown.bs.${wi}`;
      class Ci {
          constructor(e) {
              (this._config = this._getConfig(e)), (this._isAppended = !1), (this._element = null);
          }
          show(e) {
              this._config.isVisible
                  ? (this._append(),
                    this._config.isAnimated && Ue(this._getElement()),
                    this._getElement().classList.add(Ei),
                    this._emulateAnimation(() => {
                        Qe(e);
                    }))
                  : Qe(e);
          }
          hide(e) {
              this._config.isVisible
                  ? (this._getElement().classList.remove(Ei),
                    this._emulateAnimation(() => {
                        this.dispose(), Qe(e);
                    }))
                  : Qe(e);
          }
          _getElement() {
              if (!this._element) {
                  const e = document.createElement("div");
                  (e.className = this._config.className), this._config.isAnimated && e.classList.add(xi), (this._element = e);
              }
              return this._element;
          }
          _getConfig(e) {
              return ((e = { ...bi, ...("object" == typeof e ? e : {}) }).rootElement = $e(e.rootElement)), Re(wi, e, _i), e;
          }
          _append() {
              this._isAppended ||
                  (this._config.rootElement.append(this._getElement()),
                  pt.on(this._getElement(), Ti, () => {
                      Qe(this._config.clickCallback);
                  }),
                  (this._isAppended = !0));
          }
          dispose() {
              this._isAppended && (pt.off(this._element, Ti), this._element.remove(), (this._isAppended = !1));
          }
          _emulateAnimation(e) {
              Ge(e, this._getElement(), this._config.isAnimated);
          }
      }
      const Ai = { trapElement: null, autofocus: !0 },
          ki = { trapElement: "element", autofocus: "boolean" },
          Si = "focustrap",
          Oi = ".bs.focustrap",
          Di = `focusin${Oi}`,
          Ni = `keydown.tab${Oi}`,
          Li = "Tab",
          ji = "forward",
          Ii = "backward";
      class Pi {
          constructor(e) {
              (this._config = this._getConfig(e)), (this._isActive = !1), (this._lastTabNavDirection = null);
          }
          activate() {
              const { trapElement: e, autofocus: t } = this._config;
              this._isActive || (t && e.focus(), pt.off(document, Oi), pt.on(document, Di, (e) => this._handleFocusin(e)), pt.on(document, Ni, (e) => this._handleKeydown(e)), (this._isActive = !0));
          }
          deactivate() {
              this._isActive && ((this._isActive = !1), pt.off(document, Oi));
          }
          _handleFocusin(e) {
              const { target: t } = e,
                  { trapElement: n } = this._config;
              if (t === document || t === n || n.contains(t)) return;
              const i = Lt.focusableChildren(n);
              0 === i.length ? n.focus() : this._lastTabNavDirection === Ii ? i[i.length - 1].focus() : i[0].focus();
          }
          _handleKeydown(e) {
              e.key === Li && (this._lastTabNavDirection = e.shiftKey ? Ii : ji);
          }
          _getConfig(e) {
              return (e = { ...Ai, ...("object" == typeof e ? e : {}) }), Re(Si, e, ki), e;
          }
      }
      const Hi = "modal",
          Mi = ".bs.modal",
          qi = "Escape",
          $i = { backdrop: !0, keyboard: !0, focus: !0 },
          Ri = { backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean" },
          Bi = `hide${Mi}`,
          Wi = `hidePrevented${Mi}`,
          Fi = `hidden${Mi}`,
          zi = `show${Mi}`,
          Ui = `shown${Mi}`,
          Vi = `resize${Mi}`,
          Xi = `click.dismiss${Mi}`,
          Yi = `keydown.dismiss${Mi}`,
          Ki = `mouseup.dismiss${Mi}`,
          Qi = `mousedown.dismiss${Mi}`,
          Gi = `click${Mi}.data-api`,
          Ji = "modal-open",
          Zi = "fade",
          er = "show",
          tr = "modal-static",
          nr = ".modal-dialog",
          ir = ".modal-body";
      class rr extends yt {
          constructor(e, t) {
              super(e),
                  (this._config = this._getConfig(t)),
                  (this._dialog = Lt.findOne(nr, this._element)),
                  (this._backdrop = this._initializeBackDrop()),
                  (this._focustrap = this._initializeFocusTrap()),
                  (this._isShown = !1),
                  (this._ignoreBackdropClick = !1),
                  (this._isTransitioning = !1),
                  (this._scrollBar = new yi());
          }
          static get Default() {
              return $i;
          }
          static get NAME() {
              return Hi;
          }
          toggle(e) {
              return this._isShown ? this.hide() : this.show(e);
          }
          show(e) {
              if (this._isShown || this._isTransitioning) return;
              pt.trigger(this._element, zi, { relatedTarget: e }).defaultPrevented ||
                  ((this._isShown = !0),
                  this._isAnimated() && (this._isTransitioning = !0),
                  this._scrollBar.hide(),
                  document.body.classList.add(Ji),
                  this._adjustDialog(),
                  this._setEscapeEvent(),
                  this._setResizeEvent(),
                  pt.on(this._dialog, Qi, () => {
                      pt.one(this._element, Ki, (e) => {
                          e.target === this._element && (this._ignoreBackdropClick = !0);
                      });
                  }),
                  this._showBackdrop(() => this._showElement(e)));
          }
          hide() {
              if (!this._isShown || this._isTransitioning) return;
              if (pt.trigger(this._element, Bi).defaultPrevented) return;
              this._isShown = !1;
              const e = this._isAnimated();
              e && (this._isTransitioning = !0),
                  this._setEscapeEvent(),
                  this._setResizeEvent(),
                  this._focustrap.deactivate(),
                  this._element.classList.remove(er),
                  pt.off(this._element, Xi),
                  pt.off(this._dialog, Qi),
                  this._queueCallback(() => this._hideModal(), this._element, e);
          }
          dispose() {
              [window, this._dialog].forEach((e) => pt.off(e, Mi)), this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
          }
          handleUpdate() {
              this._adjustDialog();
          }
          _initializeBackDrop() {
              return new Ci({ isVisible: Boolean(this._config.backdrop), isAnimated: this._isAnimated() });
          }
          _initializeFocusTrap() {
              return new Pi({ trapElement: this._element });
          }
          _getConfig(e) {
              return (e = { ...$i, ...Nt.getDataAttributes(this._element), ...("object" == typeof e ? e : {}) }), Re(Hi, e, Ri), e;
          }
          _showElement(e) {
              const t = this._isAnimated(),
                  n = Lt.findOne(ir, this._dialog);
              (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE) || document.body.append(this._element),
                  (this._element.style.display = "block"),
                  this._element.removeAttribute("aria-hidden"),
                  this._element.setAttribute("aria-modal", !0),
                  this._element.setAttribute("role", "dialog"),
                  (this._element.scrollTop = 0),
                  n && (n.scrollTop = 0),
                  t && Ue(this._element),
                  this._element.classList.add(er);
              this._queueCallback(
                  () => {
                      this._config.focus && this._focustrap.activate(), (this._isTransitioning = !1), pt.trigger(this._element, Ui, { relatedTarget: e });
                  },
                  this._dialog,
                  t
              );
          }
          _setEscapeEvent() {
              this._isShown
                  ? pt.on(this._element, Yi, (e) => {
                        this._config.keyboard && e.key === qi ? (e.preventDefault(), this.hide()) : this._config.keyboard || e.key !== qi || this._triggerBackdropTransition();
                    })
                  : pt.off(this._element, Yi);
          }
          _setResizeEvent() {
              this._isShown ? pt.on(window, Vi, () => this._adjustDialog()) : pt.off(window, Vi);
          }
          _hideModal() {
              (this._element.style.display = "none"),
                  this._element.setAttribute("aria-hidden", !0),
                  this._element.removeAttribute("aria-modal"),
                  this._element.removeAttribute("role"),
                  (this._isTransitioning = !1),
                  this._backdrop.hide(() => {
                      document.body.classList.remove(Ji), this._resetAdjustments(), this._scrollBar.reset(), pt.trigger(this._element, Fi);
                  });
          }
          _showBackdrop(e) {
              pt.on(this._element, Xi, (e) => {
                  this._ignoreBackdropClick ? (this._ignoreBackdropClick = !1) : e.target === e.currentTarget && (!0 === this._config.backdrop ? this.hide() : "static" === this._config.backdrop && this._triggerBackdropTransition());
              }),
                  this._backdrop.show(e);
          }
          _isAnimated() {
              return this._element.classList.contains(Zi);
          }
          _triggerBackdropTransition() {
              if (pt.trigger(this._element, Wi).defaultPrevented) return;
              const { classList: e, scrollHeight: t, style: n } = this._element,
                  i = t > document.documentElement.clientHeight;
              (!i && "hidden" === n.overflowY) ||
                  e.contains(tr) ||
                  (i || (n.overflowY = "hidden"),
                  e.add(tr),
                  this._queueCallback(() => {
                      e.remove(tr),
                          i ||
                              this._queueCallback(() => {
                                  n.overflowY = "";
                              }, this._dialog);
                  }, this._dialog),
                  this._element.focus());
          }
          _adjustDialog() {
              const e = this._element.scrollHeight > document.documentElement.clientHeight,
                  t = this._scrollBar.getWidth(),
                  n = t > 0;
              ((!n && e && !Ye()) || (n && !e && Ye())) && (this._element.style.paddingLeft = `${t}px`), ((n && !e && !Ye()) || (!n && e && Ye())) && (this._element.style.paddingRight = `${t}px`);
          }
          _resetAdjustments() {
              (this._element.style.paddingLeft = ""), (this._element.style.paddingRight = "");
          }
          static jQueryInterface(e, t) {
              return this.each(function () {
                  const n = rr.getOrCreateInstance(this, e);
                  if ("string" == typeof e) {
                      if (void 0 === n[e]) throw new TypeError(`No method named "${e}"`);
                      n[e](t);
                  }
              });
          }
      }
      pt.on(document, Gi, '[data-bs-toggle="modal"]', function (e) {
          const t = He(this);
          ["A", "AREA"].includes(this.tagName) && e.preventDefault(),
              pt.one(t, zi, (e) => {
                  e.defaultPrevented ||
                      pt.one(t, Fi, () => {
                          Be(this) && this.focus();
                      });
              });
          const n = Lt.findOne(".modal.show");
          n && rr.getInstance(n).hide(), rr.getOrCreateInstance(t).toggle(this);
      }),
          bt(rr),
          Ke(rr);
      const or = "offcanvas",
          sr = "Escape",
          ar = { backdrop: !0, keyboard: !0, scroll: !1 },
          lr = { backdrop: "boolean", keyboard: "boolean", scroll: "boolean" },
          cr = "show",
          ur = "offcanvas-backdrop",
          fr = "show.bs.offcanvas",
          dr = "shown.bs.offcanvas",
          hr = "hide.bs.offcanvas",
          pr = "hidden.bs.offcanvas",
          gr = "keydown.dismiss.bs.offcanvas";
      class mr extends yt {
          constructor(e, t) {
              super(e), (this._config = this._getConfig(t)), (this._isShown = !1), (this._backdrop = this._initializeBackDrop()), (this._focustrap = this._initializeFocusTrap()), this._addEventListeners();
          }
          static get NAME() {
              return or;
          }
          static get Default() {
              return ar;
          }
          toggle(e) {
              return this._isShown ? this.hide() : this.show(e);
          }
          show(e) {
              if (this._isShown) return;
              if (pt.trigger(this._element, fr, { relatedTarget: e }).defaultPrevented) return;
              (this._isShown = !0),
                  (this._element.style.visibility = "visible"),
                  this._backdrop.show(),
                  this._config.scroll || new yi().hide(),
                  this._element.removeAttribute("aria-hidden"),
                  this._element.setAttribute("aria-modal", !0),
                  this._element.setAttribute("role", "dialog"),
                  this._element.classList.add(cr);
              this._queueCallback(
                  () => {
                      this._config.scroll || this._focustrap.activate(), pt.trigger(this._element, dr, { relatedTarget: e });
                  },
                  this._element,
                  !0
              );
          }
          hide() {
              if (!this._isShown) return;
              if (pt.trigger(this._element, hr).defaultPrevented) return;
              this._focustrap.deactivate(), this._element.blur(), (this._isShown = !1), this._element.classList.remove(cr), this._backdrop.hide();
              this._queueCallback(
                  () => {
                      this._element.setAttribute("aria-hidden", !0),
                          this._element.removeAttribute("aria-modal"),
                          this._element.removeAttribute("role"),
                          (this._element.style.visibility = "hidden"),
                          this._config.scroll || new yi().reset(),
                          pt.trigger(this._element, pr);
                  },
                  this._element,
                  !0
              );
          }
          dispose() {
              this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
          }
          _getConfig(e) {
              return (e = { ...ar, ...Nt.getDataAttributes(this._element), ...("object" == typeof e ? e : {}) }), Re(or, e, lr), e;
          }
          _initializeBackDrop() {
              return new Ci({ className: ur, isVisible: this._config.backdrop, isAnimated: !0, rootElement: this._element.parentNode, clickCallback: () => this.hide() });
          }
          _initializeFocusTrap() {
              return new Pi({ trapElement: this._element });
          }
          _addEventListeners() {
              pt.on(this._element, gr, (e) => {
                  this._config.keyboard && e.key === sr && this.hide();
              });
          }
          static jQueryInterface(e) {
              return this.each(function () {
                  const t = mr.getOrCreateInstance(this, e);
                  if ("string" == typeof e) {
                      if (void 0 === t[e] || e.startsWith("_") || "constructor" === e) throw new TypeError(`No method named "${e}"`);
                      t[e](this);
                  }
              });
          }
      }
      pt.on(document, "click.bs.offcanvas.data-api", '[data-bs-toggle="offcanvas"]', function (e) {
          const t = He(this);
          if ((["A", "AREA"].includes(this.tagName) && e.preventDefault(), We(this))) return;
          pt.one(t, pr, () => {
              Be(this) && this.focus();
          });
          const n = Lt.findOne(".offcanvas.show");
          n && n !== t && mr.getInstance(n).hide(), mr.getOrCreateInstance(t).toggle(this);
      }),
          pt.on(window, "load.bs.offcanvas.data-api", () => Lt.find(".offcanvas.show").forEach((e) => mr.getOrCreateInstance(e).show())),
          bt(mr),
          Ke(mr);
      const vr = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]),
          yr = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,
          br = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
          _r = (e, t) => {
              const n = e.nodeName.toLowerCase();
              if (t.includes(n)) return !vr.has(n) || Boolean(yr.test(e.nodeValue) || br.test(e.nodeValue));
              const i = t.filter((e) => e instanceof RegExp);
              for (let e = 0, t = i.length; e < t; e++) if (i[e].test(n)) return !0;
              return !1;
          },
          wr = {
              "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
              a: ["target", "href", "title", "rel"],
              area: [],
              b: [],
              br: [],
              col: [],
              code: [],
              div: [],
              em: [],
              hr: [],
              h1: [],
              h2: [],
              h3: [],
              h4: [],
              h5: [],
              h6: [],
              i: [],
              img: ["src", "srcset", "alt", "title", "width", "height"],
              li: [],
              ol: [],
              p: [],
              pre: [],
              s: [],
              small: [],
              span: [],
              sub: [],
              sup: [],
              strong: [],
              u: [],
              ul: [],
          };
      function xr(e, t, n) {
          if (!e.length) return e;
          if (n && "function" == typeof n) return n(e);
          const i = new window.DOMParser().parseFromString(e, "text/html"),
              r = [].concat(...i.body.querySelectorAll("*"));
          for (let e = 0, n = r.length; e < n; e++) {
              const n = r[e],
                  i = n.nodeName.toLowerCase();
              if (!Object.keys(t).includes(i)) {
                  n.remove();
                  continue;
              }
              const o = [].concat(...n.attributes),
                  s = [].concat(t["*"] || [], t[i] || []);
              o.forEach((e) => {
                  _r(e, s) || n.removeAttribute(e.nodeName);
              });
          }
          return i.body.innerHTML;
      }
      const Er = "tooltip",
          Tr = "bs-tooltip",
          Cr = new Set(["sanitize", "allowList", "sanitizeFn"]),
          Ar = {
              animation: "boolean",
              template: "string",
              title: "(string|element|function)",
              trigger: "string",
              delay: "(number|object)",
              html: "boolean",
              selector: "(string|boolean)",
              placement: "(string|function)",
              offset: "(array|string|function)",
              container: "(string|element|boolean)",
              fallbackPlacements: "array",
              boundary: "(string|element)",
              customClass: "(string|function)",
              sanitize: "boolean",
              sanitizeFn: "(null|function)",
              allowList: "object",
              popperConfig: "(null|object|function)",
          },
          kr = { AUTO: "auto", TOP: "top", RIGHT: Ye() ? "left" : "right", BOTTOM: "bottom", LEFT: Ye() ? "right" : "left" },
          Sr = {
              animation: !0,
              template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
              trigger: "hover focus",
              title: "",
              delay: 0,
              html: !1,
              selector: !1,
              placement: "top",
              offset: [0, 0],
              container: !1,
              fallbackPlacements: ["top", "right", "bottom", "left"],
              boundary: "clippingParents",
              customClass: "",
              sanitize: !0,
              sanitizeFn: null,
              allowList: wr,
              popperConfig: null,
          },
          Or = {
              HIDE: "hide.bs.tooltip",
              HIDDEN: "hidden.bs.tooltip",
              SHOW: "show.bs.tooltip",
              SHOWN: "shown.bs.tooltip",
              INSERTED: "inserted.bs.tooltip",
              CLICK: "click.bs.tooltip",
              FOCUSIN: "focusin.bs.tooltip",
              FOCUSOUT: "focusout.bs.tooltip",
              MOUSEENTER: "mouseenter.bs.tooltip",
              MOUSELEAVE: "mouseleave.bs.tooltip",
          },
          Dr = "fade",
          Nr = "show",
          Lr = "show",
          jr = "out",
          Ir = ".tooltip-inner",
          Pr = ".modal",
          Hr = "hide.bs.modal",
          Mr = "hover",
          qr = "focus",
          $r = "click",
          Rr = "manual";
      class Br extends yt {
          constructor(e, t) {
              if (void 0 === i) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
              super(e), (this._isEnabled = !0), (this._timeout = 0), (this._hoverState = ""), (this._activeTrigger = {}), (this._popper = null), (this._config = this._getConfig(t)), (this.tip = null), this._setListeners();
          }
          static get Default() {
              return Sr;
          }
          static get NAME() {
              return Er;
          }
          static get Event() {
              return Or;
          }
          static get DefaultType() {
              return Ar;
          }
          enable() {
              this._isEnabled = !0;
          }
          disable() {
              this._isEnabled = !1;
          }
          toggleEnabled() {
              this._isEnabled = !this._isEnabled;
          }
          toggle(e) {
              if (this._isEnabled)
                  if (e) {
                      const t = this._initializeOnDelegatedTarget(e);
                      (t._activeTrigger.click = !t._activeTrigger.click), t._isWithActiveTrigger() ? t._enter(null, t) : t._leave(null, t);
                  } else {
                      if (this.getTipElement().classList.contains(Nr)) return void this._leave(null, this);
                      this._enter(null, this);
                  }
          }
          dispose() {
              clearTimeout(this._timeout), pt.off(this._element.closest(Pr), Hr, this._hideModalHandler), this.tip && this.tip.remove(), this._disposePopper(), super.dispose();
          }
          show() {
              if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");
              if (!this.isWithContent() || !this._isEnabled) return;
              const e = pt.trigger(this._element, this.constructor.Event.SHOW),
                  t = Fe(this._element),
                  n = null === t ? this._element.ownerDocument.documentElement.contains(this._element) : t.contains(this._element);
              if (e.defaultPrevented || !n) return;
              "tooltip" === this.constructor.NAME && this.tip && this.getTitle() !== this.tip.querySelector(Ir).innerHTML && (this._disposePopper(), this.tip.remove(), (this.tip = null));
              const i = this.getTipElement(),
                  r = je(this.constructor.NAME);
              i.setAttribute("id", r), this._element.setAttribute("aria-describedby", r), this._config.animation && i.classList.add(Dr);
              const o = "function" == typeof this._config.placement ? this._config.placement.call(this, i, this._element) : this._config.placement,
                  s = this._getAttachment(o);
              this._addAttachmentClass(s);
              const { container: a } = this._config;
              mt.set(i, this.constructor.DATA_KEY, this),
                  this._element.ownerDocument.documentElement.contains(this.tip) || (a.append(i), pt.trigger(this._element, this.constructor.Event.INSERTED)),
                  this._popper ? this._popper.update() : (this._popper = Ne(this._element, i, this._getPopperConfig(s))),
                  i.classList.add(Nr);
              const l = this._resolvePossibleFunction(this._config.customClass);
              l && i.classList.add(...l.split(" ")),
                  "ontouchstart" in document.documentElement &&
                      [].concat(...document.body.children).forEach((e) => {
                          pt.on(e, "mouseover", ze);
                      });
              const c = this.tip.classList.contains(Dr);
              this._queueCallback(
                  () => {
                      const e = this._hoverState;
                      (this._hoverState = null), pt.trigger(this._element, this.constructor.Event.SHOWN), e === jr && this._leave(null, this);
                  },
                  this.tip,
                  c
              );
          }
          hide() {
              if (!this._popper) return;
              const e = this.getTipElement();
              if (pt.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented) return;
              e.classList.remove(Nr),
                  "ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach((e) => pt.off(e, "mouseover", ze)),
                  (this._activeTrigger[$r] = !1),
                  (this._activeTrigger[qr] = !1),
                  (this._activeTrigger[Mr] = !1);
              const t = this.tip.classList.contains(Dr);
              this._queueCallback(
                  () => {
                      this._isWithActiveTrigger() ||
                          (this._hoverState !== Lr && e.remove(), this._cleanTipClass(), this._element.removeAttribute("aria-describedby"), pt.trigger(this._element, this.constructor.Event.HIDDEN), this._disposePopper());
                  },
                  this.tip,
                  t
              ),
                  (this._hoverState = "");
          }
          update() {
              null !== this._popper && this._popper.update();
          }
          isWithContent() {
              return Boolean(this.getTitle());
          }
          getTipElement() {
              if (this.tip) return this.tip;
              const e = document.createElement("div");
              e.innerHTML = this._config.template;
              const t = e.children[0];
              return this.setContent(t), t.classList.remove(Dr, Nr), (this.tip = t), this.tip;
          }
          setContent(e) {
              this._sanitizeAndSetContent(e, this.getTitle(), Ir);
          }
          _sanitizeAndSetContent(e, t, n) {
              const i = Lt.findOne(n, e);
              t || !i ? this.setElementContent(i, t) : i.remove();
          }
          setElementContent(e, t) {
              if (null !== e)
                  return qe(t)
                      ? ((t = $e(t)), void (this._config.html ? t.parentNode !== e && ((e.innerHTML = ""), e.append(t)) : (e.textContent = t.textContent)))
                      : void (this._config.html ? (this._config.sanitize && (t = xr(t, this._config.allowList, this._config.sanitizeFn)), (e.innerHTML = t)) : (e.textContent = t));
          }
          getTitle() {
              const e = this._element.getAttribute("data-bs-original-title") || this._config.title;
              return this._resolvePossibleFunction(e);
          }
          updateAttachment(e) {
              return "right" === e ? "end" : "left" === e ? "start" : e;
          }
          _initializeOnDelegatedTarget(e, t) {
              return t || this.constructor.getOrCreateInstance(e.delegateTarget, this._getDelegateConfig());
          }
          _getOffset() {
              const { offset: e } = this._config;
              return "string" == typeof e ? e.split(",").map((e) => Number.parseInt(e, 10)) : "function" == typeof e ? (t) => e(t, this._element) : e;
          }
          _resolvePossibleFunction(e) {
              return "function" == typeof e ? e.call(this._element) : e;
          }
          _getPopperConfig(e) {
              const t = {
                  placement: e,
                  modifiers: [
                      { name: "flip", options: { fallbackPlacements: this._config.fallbackPlacements } },
                      { name: "offset", options: { offset: this._getOffset() } },
                      { name: "preventOverflow", options: { boundary: this._config.boundary } },
                      { name: "arrow", options: { element: `.${this.constructor.NAME}-arrow` } },
                      { name: "onChange", enabled: !0, phase: "afterWrite", fn: (e) => this._handlePopperPlacementChange(e) },
                  ],
                  onFirstUpdate: (e) => {
                      e.options.placement !== e.placement && this._handlePopperPlacementChange(e);
                  },
              };
              return { ...t, ...("function" == typeof this._config.popperConfig ? this._config.popperConfig(t) : this._config.popperConfig) };
          }
          _addAttachmentClass(e) {
              this.getTipElement().classList.add(`${this._getBasicClassPrefix()}-${this.updateAttachment(e)}`);
          }
          _getAttachment(e) {
              return kr[e.toUpperCase()];
          }
          _setListeners() {
              this._config.trigger.split(" ").forEach((e) => {
                  if ("click" === e) pt.on(this._element, this.constructor.Event.CLICK, this._config.selector, (e) => this.toggle(e));
                  else if (e !== Rr) {
                      const t = e === Mr ? this.constructor.Event.MOUSEENTER : this.constructor.Event.FOCUSIN,
                          n = e === Mr ? this.constructor.Event.MOUSELEAVE : this.constructor.Event.FOCUSOUT;
                      pt.on(this._element, t, this._config.selector, (e) => this._enter(e)), pt.on(this._element, n, this._config.selector, (e) => this._leave(e));
                  }
              }),
                  (this._hideModalHandler = () => {
                      this._element && this.hide();
                  }),
                  pt.on(this._element.closest(Pr), Hr, this._hideModalHandler),
                  this._config.selector ? (this._config = { ...this._config, trigger: "manual", selector: "" }) : this._fixTitle();
          }
          _fixTitle() {
              const e = this._element.getAttribute("title"),
                  t = typeof this._element.getAttribute("data-bs-original-title");
              (e || "string" !== t) &&
                  (this._element.setAttribute("data-bs-original-title", e || ""),
                  !e || this._element.getAttribute("aria-label") || this._element.textContent || this._element.setAttribute("aria-label", e),
                  this._element.setAttribute("title", ""));
          }
          _enter(e, t) {
              (t = this._initializeOnDelegatedTarget(e, t)),
                  e && (t._activeTrigger["focusin" === e.type ? qr : Mr] = !0),
                  t.getTipElement().classList.contains(Nr) || t._hoverState === Lr
                      ? (t._hoverState = Lr)
                      : (clearTimeout(t._timeout),
                        (t._hoverState = Lr),
                        t._config.delay && t._config.delay.show
                            ? (t._timeout = setTimeout(() => {
                                  t._hoverState === Lr && t.show();
                              }, t._config.delay.show))
                            : t.show());
          }
          _leave(e, t) {
              (t = this._initializeOnDelegatedTarget(e, t)),
                  e && (t._activeTrigger["focusout" === e.type ? qr : Mr] = t._element.contains(e.relatedTarget)),
                  t._isWithActiveTrigger() ||
                      (clearTimeout(t._timeout),
                      (t._hoverState = jr),
                      t._config.delay && t._config.delay.hide
                          ? (t._timeout = setTimeout(() => {
                                t._hoverState === jr && t.hide();
                            }, t._config.delay.hide))
                          : t.hide());
          }
          _isWithActiveTrigger() {
              for (const e in this._activeTrigger) if (this._activeTrigger[e]) return !0;
              return !1;
          }
          _getConfig(e) {
              const t = Nt.getDataAttributes(this._element);
              return (
                  Object.keys(t).forEach((e) => {
                      Cr.has(e) && delete t[e];
                  }),
                  ((e = { ...this.constructor.Default, ...t, ...("object" == typeof e && e ? e : {}) }).container = !1 === e.container ? document.body : $e(e.container)),
                  "number" == typeof e.delay && (e.delay = { show: e.delay, hide: e.delay }),
                  "number" == typeof e.title && (e.title = e.title.toString()),
                  "number" == typeof e.content && (e.content = e.content.toString()),
                  Re(Er, e, this.constructor.DefaultType),
                  e.sanitize && (e.template = xr(e.template, e.allowList, e.sanitizeFn)),
                  e
              );
          }
          _getDelegateConfig() {
              const e = {};
              for (const t in this._config) this.constructor.Default[t] !== this._config[t] && (e[t] = this._config[t]);
              return e;
          }
          _cleanTipClass() {
              const e = this.getTipElement(),
                  t = new RegExp(`(^|\\s)${this._getBasicClassPrefix()}\\S+`, "g"),
                  n = e.getAttribute("class").match(t);
              null !== n && n.length > 0 && n.map((e) => e.trim()).forEach((t) => e.classList.remove(t));
          }
          _getBasicClassPrefix() {
              return Tr;
          }
          _handlePopperPlacementChange(e) {
              const { state: t } = e;
              t && ((this.tip = t.elements.popper), this._cleanTipClass(), this._addAttachmentClass(this._getAttachment(t.placement)));
          }
          _disposePopper() {
              this._popper && (this._popper.destroy(), (this._popper = null));
          }
          static jQueryInterface(e) {
              return this.each(function () {
                  const t = Br.getOrCreateInstance(this, e);
                  if ("string" == typeof e) {
                      if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);
                      t[e]();
                  }
              });
          }
      }
      Ke(Br);
      const Wr = "popover",
          Fr = "bs-popover",
          zr = {
              ...Br.Default,
              placement: "right",
              offset: [0, 8],
              trigger: "click",
              content: "",
              template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
          },
          Ur = { ...Br.DefaultType, content: "(string|element|function)" },
          Vr = {
              HIDE: "hide.bs.popover",
              HIDDEN: "hidden.bs.popover",
              SHOW: "show.bs.popover",
              SHOWN: "shown.bs.popover",
              INSERTED: "inserted.bs.popover",
              CLICK: "click.bs.popover",
              FOCUSIN: "focusin.bs.popover",
              FOCUSOUT: "focusout.bs.popover",
              MOUSEENTER: "mouseenter.bs.popover",
              MOUSELEAVE: "mouseleave.bs.popover",
          },
          Xr = ".popover-header",
          Yr = ".popover-body";
      class Kr extends Br {
          static get Default() {
              return zr;
          }
          static get NAME() {
              return Wr;
          }
          static get Event() {
              return Vr;
          }
          static get DefaultType() {
              return Ur;
          }
          isWithContent() {
              return this.getTitle() || this._getContent();
          }
          setContent(e) {
              this._sanitizeAndSetContent(e, this.getTitle(), Xr), this._sanitizeAndSetContent(e, this._getContent(), Yr);
          }
          _getContent() {
              return this._resolvePossibleFunction(this._config.content);
          }
          _getBasicClassPrefix() {
              return Fr;
          }
          static jQueryInterface(e) {
              return this.each(function () {
                  const t = Kr.getOrCreateInstance(this, e);
                  if ("string" == typeof e) {
                      if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);
                      t[e]();
                  }
              });
          }
      }
      Ke(Kr);
      const Qr = "scrollspy",
          Gr = ".bs.scrollspy",
          Jr = { offset: 10, method: "auto", target: "" },
          Zr = { offset: "number", method: "string", target: "(string|element)" },
          eo = `activate${Gr}`,
          to = `scroll${Gr}`,
          no = `load${Gr}.data-api`,
          io = "dropdown-item",
          ro = "active",
          oo = ".nav, .list-group",
          so = ".nav-link",
          ao = ".nav-item",
          lo = ".list-group-item",
          co = `${so}, ${lo}, .${io}`,
          uo = ".dropdown",
          fo = ".dropdown-toggle",
          ho = "offset",
          po = "position";
      class go extends yt {
          constructor(e, t) {
              super(e),
                  (this._scrollElement = "BODY" === this._element.tagName ? window : this._element),
                  (this._config = this._getConfig(t)),
                  (this._offsets = []),
                  (this._targets = []),
                  (this._activeTarget = null),
                  (this._scrollHeight = 0),
                  pt.on(this._scrollElement, to, () => this._process()),
                  this.refresh(),
                  this._process();
          }
          static get Default() {
              return Jr;
          }
          static get NAME() {
              return Qr;
          }
          refresh() {
              const e = this._scrollElement === this._scrollElement.window ? ho : po,
                  t = "auto" === this._config.method ? e : this._config.method,
                  n = t === po ? this._getScrollTop() : 0;
              (this._offsets = []),
                  (this._targets = []),
                  (this._scrollHeight = this._getScrollHeight()),
                  Lt.find(co, this._config.target)
                      .map((e) => {
                          const i = Pe(e),
                              r = i ? Lt.findOne(i) : null;
                          if (r) {
                              const e = r.getBoundingClientRect();
                              if (e.width || e.height) return [Nt[t](r).top + n, i];
                          }
                          return null;
                      })
                      .filter((e) => e)
                      .sort((e, t) => e[0] - t[0])
                      .forEach((e) => {
                          this._offsets.push(e[0]), this._targets.push(e[1]);
                      });
          }
          dispose() {
              pt.off(this._scrollElement, Gr), super.dispose();
          }
          _getConfig(e) {
              return ((e = { ...Jr, ...Nt.getDataAttributes(this._element), ...("object" == typeof e && e ? e : {}) }).target = $e(e.target) || document.documentElement), Re(Qr, e, Zr), e;
          }
          _getScrollTop() {
              return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
          }
          _getScrollHeight() {
              return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
          }
          _getOffsetHeight() {
              return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
          }
          _process() {
              const e = this._getScrollTop() + this._config.offset,
                  t = this._getScrollHeight(),
                  n = this._config.offset + t - this._getOffsetHeight();
              if ((this._scrollHeight !== t && this.refresh(), e >= n)) {
                  const e = this._targets[this._targets.length - 1];
                  this._activeTarget !== e && this._activate(e);
              } else {
                  if (this._activeTarget && e < this._offsets[0] && this._offsets[0] > 0) return (this._activeTarget = null), void this._clear();
                  for (let t = this._offsets.length; t--; ) {
                      this._activeTarget !== this._targets[t] && e >= this._offsets[t] && (void 0 === this._offsets[t + 1] || e < this._offsets[t + 1]) && this._activate(this._targets[t]);
                  }
              }
          }
          _activate(e) {
              (this._activeTarget = e), this._clear();
              const t = co.split(",").map((t) => `${t}[data-bs-target="${e}"],${t}[href="${e}"]`),
                  n = Lt.findOne(t.join(","), this._config.target);
              n.classList.add(ro),
                  n.classList.contains(io)
                      ? Lt.findOne(fo, n.closest(uo)).classList.add(ro)
                      : Lt.parents(n, oo).forEach((e) => {
                            Lt.prev(e, `${so}, ${lo}`).forEach((e) => e.classList.add(ro)),
                                Lt.prev(e, ao).forEach((e) => {
                                    Lt.children(e, so).forEach((e) => e.classList.add(ro));
                                });
                        }),
                  pt.trigger(this._scrollElement, eo, { relatedTarget: e });
          }
          _clear() {
              Lt.find(co, this._config.target)
                  .filter((e) => e.classList.contains(ro))
                  .forEach((e) => e.classList.remove(ro));
          }
          static jQueryInterface(e) {
              return this.each(function () {
                  const t = go.getOrCreateInstance(this, e);
                  if ("string" == typeof e) {
                      if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);
                      t[e]();
                  }
              });
          }
      }
      pt.on(window, no, () => {
          Lt.find('[data-bs-spy="scroll"]').forEach((e) => new go(e));
      }),
          Ke(go);
      const mo = "tab",
          vo = "hide.bs.tab",
          yo = "hidden.bs.tab",
          bo = "show.bs.tab",
          _o = "shown.bs.tab",
          wo = "dropdown-menu",
          xo = "active",
          Eo = "fade",
          To = "show",
          Co = ".dropdown",
          Ao = ".nav, .list-group",
          ko = ".active",
          So = ":scope > li > .active",
          Oo = ".dropdown-toggle",
          Do = ":scope > .dropdown-menu .active";
      class No extends yt {
          static get NAME() {
              return mo;
          }
          show() {
              if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains(xo)) return;
              let e;
              const t = He(this._element),
                  n = this._element.closest(Ao);
              if (n) {
                  const t = "UL" === n.nodeName || "OL" === n.nodeName ? So : ko;
                  e = (e = Lt.find(t, n))[e.length - 1];
              }
              const i = e ? pt.trigger(e, vo, { relatedTarget: this._element }) : null;
              if (pt.trigger(this._element, bo, { relatedTarget: e }).defaultPrevented || (null !== i && i.defaultPrevented)) return;
              this._activate(this._element, n);
              const r = () => {
                  pt.trigger(e, yo, { relatedTarget: this._element }), pt.trigger(this._element, _o, { relatedTarget: e });
              };
              t ? this._activate(t, t.parentNode, r) : r();
          }
          _activate(e, t, n) {
              const i = (!t || ("UL" !== t.nodeName && "OL" !== t.nodeName) ? Lt.children(t, ko) : Lt.find(So, t))[0],
                  r = n && i && i.classList.contains(Eo),
                  o = () => this._transitionComplete(e, i, n);
              i && r ? (i.classList.remove(To), this._queueCallback(o, e, !0)) : o();
          }
          _transitionComplete(e, t, n) {
              if (t) {
                  t.classList.remove(xo);
                  const e = Lt.findOne(Do, t.parentNode);
                  e && e.classList.remove(xo), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !1);
              }
              e.classList.add(xo), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), Ue(e), e.classList.contains(Eo) && e.classList.add(To);
              let i = e.parentNode;
              if ((i && "LI" === i.nodeName && (i = i.parentNode), i && i.classList.contains(wo))) {
                  const t = e.closest(Co);
                  t && Lt.find(Oo, t).forEach((e) => e.classList.add(xo)), e.setAttribute("aria-expanded", !0);
              }
              n && n();
          }
          static jQueryInterface(e) {
              return this.each(function () {
                  const t = No.getOrCreateInstance(this);
                  if ("string" == typeof e) {
                      if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);
                      t[e]();
                  }
              });
          }
      }
      pt.on(document, "click.bs.tab.data-api", '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', function (e) {
          if ((["A", "AREA"].includes(this.tagName) && e.preventDefault(), We(this))) return;
          No.getOrCreateInstance(this).show();
      }),
          Ke(No);
      const Lo = "toast",
          jo = "mouseover.bs.toast",
          Io = "mouseout.bs.toast",
          Po = "focusin.bs.toast",
          Ho = "focusout.bs.toast",
          Mo = "hide.bs.toast",
          qo = "hidden.bs.toast",
          $o = "show.bs.toast",
          Ro = "shown.bs.toast",
          Bo = "fade",
          Wo = "hide",
          Fo = "show",
          zo = "showing",
          Uo = { animation: "boolean", autohide: "boolean", delay: "number" },
          Vo = { animation: !0, autohide: !0, delay: 5e3 };
      class Xo extends yt {
          constructor(e, t) {
              super(e), (this._config = this._getConfig(t)), (this._timeout = null), (this._hasMouseInteraction = !1), (this._hasKeyboardInteraction = !1), this._setListeners();
          }
          static get DefaultType() {
              return Uo;
          }
          static get Default() {
              return Vo;
          }
          static get NAME() {
              return Lo;
          }
          show() {
              if (pt.trigger(this._element, $o).defaultPrevented) return;
              this._clearTimeout(), this._config.animation && this._element.classList.add(Bo);
              this._element.classList.remove(Wo),
                  Ue(this._element),
                  this._element.classList.add(Fo),
                  this._element.classList.add(zo),
                  this._queueCallback(
                      () => {
                          this._element.classList.remove(zo), pt.trigger(this._element, Ro), this._maybeScheduleHide();
                      },
                      this._element,
                      this._config.animation
                  );
          }
          hide() {
              if (!this._element.classList.contains(Fo)) return;
              if (pt.trigger(this._element, Mo).defaultPrevented) return;
              this._element.classList.add(zo),
                  this._queueCallback(
                      () => {
                          this._element.classList.add(Wo), this._element.classList.remove(zo), this._element.classList.remove(Fo), pt.trigger(this._element, qo);
                      },
                      this._element,
                      this._config.animation
                  );
          }
          dispose() {
              this._clearTimeout(), this._element.classList.contains(Fo) && this._element.classList.remove(Fo), super.dispose();
          }
          _getConfig(e) {
              return (e = { ...Vo, ...Nt.getDataAttributes(this._element), ...("object" == typeof e && e ? e : {}) }), Re(Lo, e, this.constructor.DefaultType), e;
          }
          _maybeScheduleHide() {
              this._config.autohide &&
                  (this._hasMouseInteraction ||
                      this._hasKeyboardInteraction ||
                      (this._timeout = setTimeout(() => {
                          this.hide();
                      }, this._config.delay)));
          }
          _onInteraction(e, t) {
              switch (e.type) {
                  case "mouseover":
                  case "mouseout":
                      this._hasMouseInteraction = t;
                      break;
                  case "focusin":
                  case "focusout":
                      this._hasKeyboardInteraction = t;
              }
              if (t) return void this._clearTimeout();
              const n = e.relatedTarget;
              this._element === n || this._element.contains(n) || this._maybeScheduleHide();
          }
          _setListeners() {
              pt.on(this._element, jo, (e) => this._onInteraction(e, !0)),
                  pt.on(this._element, Io, (e) => this._onInteraction(e, !1)),
                  pt.on(this._element, Po, (e) => this._onInteraction(e, !0)),
                  pt.on(this._element, Ho, (e) => this._onInteraction(e, !1));
          }
          _clearTimeout() {
              clearTimeout(this._timeout), (this._timeout = null);
          }
          static jQueryInterface(e) {
              return this.each(function () {
                  const t = Xo.getOrCreateInstance(this, e);
                  if ("string" == typeof e) {
                      if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);
                      t[e](this);
                  }
              });
          }
      }
      bt(Xo), Ke(Xo);
  },
  function (e, t, n) {
      "use strict";
      n.r(t);
      n(7), n(1);
      n(2);
  },
  ,
  ,
  ,
  function (e, t) {},
  ,
  ,
  ,
  ,
  function (e, t) {
      var n;
      n = (function () {
          return this;
      })();
      try {
          n = n || new Function("return this")();
      } catch (e) {
          "object" == typeof window && (n = window);
      }
      e.exports = n;
  },
  function (e, t, n) {
      (function (t) {
          e.exports = t.jQuery = n(14);
      }.call(this, n(12)));
  },
  function (e, t, n) {
      (function (t) {
          e.exports = t.$ = n(15);
      }.call(this, n(12)));
  },
  function (e, t, n) {
      var i;
      /*!
       * jQuery JavaScript Library v3.6.0
       * https://jquery.com/
       *
       * Includes Sizzle.js
       * https://sizzlejs.com/
       *
       * Copyright OpenJS Foundation and other contributors
       * Released under the MIT license
       * https://jquery.org/license
       *
       * Date: 2021-03-02T17:08Z
       */
      /*!
       * jQuery JavaScript Library v3.6.0
       * https://jquery.com/
       *
       * Includes Sizzle.js
       * https://sizzlejs.com/
       *
       * Copyright OpenJS Foundation and other contributors
       * Released under the MIT license
       * https://jquery.org/license
       *
       * Date: 2021-03-02T17:08Z
       */
      !(function (t, n) {
          "use strict";
          "object" == typeof e.exports
              ? (e.exports = t.document
                    ? n(t, !0)
                    : function (e) {
                          if (!e.document) throw new Error("jQuery requires a window with a document");
                          return n(e);
                      })
              : n(t);
      })("undefined" != typeof window ? window : this, function (n, r) {
          "use strict";
          var o = [],
              s = Object.getPrototypeOf,
              a = o.slice,
              l = o.flat
                  ? function (e) {
                        return o.flat.call(e);
                    }
                  : function (e) {
                        return o.concat.apply([], e);
                    },
              c = o.push,
              u = o.indexOf,
              f = {},
              d = f.toString,
              h = f.hasOwnProperty,
              p = h.toString,
              g = p.call(Object),
              m = {},
              v = function (e) {
                  return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item;
              },
              y = function (e) {
                  return null != e && e === e.window;
              },
              b = n.document,
              _ = { type: !0, src: !0, nonce: !0, noModule: !0 };
          function w(e, t, n) {
              var i,
                  r,
                  o = (n = n || b).createElement("script");
              if (((o.text = e), t)) for (i in _) (r = t[i] || (t.getAttribute && t.getAttribute(i))) && o.setAttribute(i, r);
              n.head.appendChild(o).parentNode.removeChild(o);
          }
          function x(e) {
              return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? f[d.call(e)] || "object" : typeof e;
          }
          var E = function (e, t) {
              return new E.fn.init(e, t);
          };
          function T(e) {
              var t = !!e && "length" in e && e.length,
                  n = x(e);
              return !v(e) && !y(e) && ("array" === n || 0 === t || ("number" == typeof t && t > 0 && t - 1 in e));
          }
          (E.fn = E.prototype = {
              jquery: "3.6.0",
              constructor: E,
              length: 0,
              toArray: function () {
                  return a.call(this);
              },
              get: function (e) {
                  return null == e ? a.call(this) : e < 0 ? this[e + this.length] : this[e];
              },
              pushStack: function (e) {
                  var t = E.merge(this.constructor(), e);
                  return (t.prevObject = this), t;
              },
              each: function (e) {
                  return E.each(this, e);
              },
              map: function (e) {
                  return this.pushStack(
                      E.map(this, function (t, n) {
                          return e.call(t, n, t);
                      })
                  );
              },
              slice: function () {
                  return this.pushStack(a.apply(this, arguments));
              },
              first: function () {
                  return this.eq(0);
              },
              last: function () {
                  return this.eq(-1);
              },
              even: function () {
                  return this.pushStack(
                      E.grep(this, function (e, t) {
                          return (t + 1) % 2;
                      })
                  );
              },
              odd: function () {
                  return this.pushStack(
                      E.grep(this, function (e, t) {
                          return t % 2;
                      })
                  );
              },
              eq: function (e) {
                  var t = this.length,
                      n = +e + (e < 0 ? t : 0);
                  return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
              },
              end: function () {
                  return this.prevObject || this.constructor();
              },
              push: c,
              sort: o.sort,
              splice: o.splice,
          }),
              (E.extend = E.fn.extend = function () {
                  var e,
                      t,
                      n,
                      i,
                      r,
                      o,
                      s = arguments[0] || {},
                      a = 1,
                      l = arguments.length,
                      c = !1;
                  for ("boolean" == typeof s && ((c = s), (s = arguments[a] || {}), a++), "object" == typeof s || v(s) || (s = {}), a === l && ((s = this), a--); a < l; a++)
                      if (null != (e = arguments[a]))
                          for (t in e)
                              (i = e[t]),
                                  "__proto__" !== t &&
                                      s !== i &&
                                      (c && i && (E.isPlainObject(i) || (r = Array.isArray(i)))
                                          ? ((n = s[t]), (o = r && !Array.isArray(n) ? [] : r || E.isPlainObject(n) ? n : {}), (r = !1), (s[t] = E.extend(c, o, i)))
                                          : void 0 !== i && (s[t] = i));
                  return s;
              }),
              E.extend({
                  expando: "jQuery" + ("3.6.0" + Math.random()).replace(/\D/g, ""),
                  isReady: !0,
                  error: function (e) {
                      throw new Error(e);
                  },
                  noop: function () {},
                  isPlainObject: function (e) {
                      var t, n;
                      return !(!e || "[object Object]" !== d.call(e)) && (!(t = s(e)) || ("function" == typeof (n = h.call(t, "constructor") && t.constructor) && p.call(n) === g));
                  },
                  isEmptyObject: function (e) {
                      var t;
                      for (t in e) return !1;
                      return !0;
                  },
                  globalEval: function (e, t, n) {
                      w(e, { nonce: t && t.nonce }, n);
                  },
                  each: function (e, t) {
                      var n,
                          i = 0;
                      if (T(e)) for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
                      else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
                      return e;
                  },
                  makeArray: function (e, t) {
                      var n = t || [];
                      return null != e && (T(Object(e)) ? E.merge(n, "string" == typeof e ? [e] : e) : c.call(n, e)), n;
                  },
                  inArray: function (e, t, n) {
                      return null == t ? -1 : u.call(t, e, n);
                  },
                  merge: function (e, t) {
                      for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i];
                      return (e.length = r), e;
                  },
                  grep: function (e, t, n) {
                      for (var i = [], r = 0, o = e.length, s = !n; r < o; r++) !t(e[r], r) !== s && i.push(e[r]);
                      return i;
                  },
                  map: function (e, t, n) {
                      var i,
                          r,
                          o = 0,
                          s = [];
                      if (T(e)) for (i = e.length; o < i; o++) null != (r = t(e[o], o, n)) && s.push(r);
                      else for (o in e) null != (r = t(e[o], o, n)) && s.push(r);
                      return l(s);
                  },
                  guid: 1,
                  support: m,
              }),
              "function" == typeof Symbol && (E.fn[Symbol.iterator] = o[Symbol.iterator]),
              E.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
                  f["[object " + t + "]"] = t.toLowerCase();
              });
          var C =
              /*!
               * Sizzle CSS Selector Engine v2.3.6
               * https://sizzlejs.com/
               *
               * Copyright JS Foundation and other contributors
               * Released under the MIT license
               * https://js.foundation/
               *
               * Date: 2021-02-16
               */
              (function (e) {
                  var t,
                      n,
                      i,
                      r,
                      o,
                      s,
                      a,
                      l,
                      c,
                      u,
                      f,
                      d,
                      h,
                      p,
                      g,
                      m,
                      v,
                      y,
                      b,
                      _ = "sizzle" + 1 * new Date(),
                      w = e.document,
                      x = 0,
                      E = 0,
                      T = le(),
                      C = le(),
                      A = le(),
                      k = le(),
                      S = function (e, t) {
                          return e === t && (f = !0), 0;
                      },
                      O = {}.hasOwnProperty,
                      D = [],
                      N = D.pop,
                      L = D.push,
                      j = D.push,
                      I = D.slice,
                      P = function (e, t) {
                          for (var n = 0, i = e.length; n < i; n++) if (e[n] === t) return n;
                          return -1;
                      },
                      H = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                      M = "[\\x20\\t\\r\\n\\f]",
                      q = "(?:\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                      $ = "\\[" + M + "*(" + q + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + q + "))|)" + M + "*\\]",
                      R = ":(" + q + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + $ + ")*)|.*)\\)|)",
                      B = new RegExp(M + "+", "g"),
                      W = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
                      F = new RegExp("^" + M + "*," + M + "*"),
                      z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
                      U = new RegExp(M + "|>"),
                      V = new RegExp(R),
                      X = new RegExp("^" + q + "$"),
                      Y = {
                          ID: new RegExp("^#(" + q + ")"),
                          CLASS: new RegExp("^\\.(" + q + ")"),
                          TAG: new RegExp("^(" + q + "|[*])"),
                          ATTR: new RegExp("^" + $),
                          PSEUDO: new RegExp("^" + R),
                          CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
                          bool: new RegExp("^(?:" + H + ")$", "i"),
                          needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i"),
                      },
                      K = /HTML$/i,
                      Q = /^(?:input|select|textarea|button)$/i,
                      G = /^h\d$/i,
                      J = /^[^{]+\{\s*\[native \w/,
                      Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                      ee = /[+~]/,
                      te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])", "g"),
                      ne = function (e, t) {
                          var n = "0x" + e.slice(1) - 65536;
                          return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320));
                      },
                      ie = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                      re = function (e, t) {
                          return t ? ("\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " ") : "\\" + e;
                      },
                      oe = function () {
                          d();
                      },
                      se = _e(
                          function (e) {
                              return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
                          },
                          { dir: "parentNode", next: "legend" }
                      );
                  try {
                      j.apply((D = I.call(w.childNodes)), w.childNodes), D[w.childNodes.length].nodeType;
                  } catch (e) {
                      j = {
                          apply: D.length
                              ? function (e, t) {
                                    L.apply(e, I.call(t));
                                }
                              : function (e, t) {
                                    for (var n = e.length, i = 0; (e[n++] = t[i++]); );
                                    e.length = n - 1;
                                },
                      };
                  }
                  function ae(e, t, i, r) {
                      var o,
                          a,
                          c,
                          u,
                          f,
                          p,
                          v,
                          y = t && t.ownerDocument,
                          w = t ? t.nodeType : 9;
                      if (((i = i || []), "string" != typeof e || !e || (1 !== w && 9 !== w && 11 !== w))) return i;
                      if (!r && (d(t), (t = t || h), g)) {
                          if (11 !== w && (f = Z.exec(e)))
                              if ((o = f[1])) {
                                  if (9 === w) {
                                      if (!(c = t.getElementById(o))) return i;
                                      if (c.id === o) return i.push(c), i;
                                  } else if (y && (c = y.getElementById(o)) && b(t, c) && c.id === o) return i.push(c), i;
                              } else {
                                  if (f[2]) return j.apply(i, t.getElementsByTagName(e)), i;
                                  if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return j.apply(i, t.getElementsByClassName(o)), i;
                              }
                          if (n.qsa && !k[e + " "] && (!m || !m.test(e)) && (1 !== w || "object" !== t.nodeName.toLowerCase())) {
                              if (((v = e), (y = t), 1 === w && (U.test(e) || z.test(e)))) {
                                  for (((y = (ee.test(e) && ve(t.parentNode)) || t) === t && n.scope) || ((u = t.getAttribute("id")) ? (u = u.replace(ie, re)) : t.setAttribute("id", (u = _))), a = (p = s(e)).length; a--; )
                                      p[a] = (u ? "#" + u : ":scope") + " " + be(p[a]);
                                  v = p.join(",");
                              }
                              try {
                                  return j.apply(i, y.querySelectorAll(v)), i;
                              } catch (t) {
                                  k(e, !0);
                              } finally {
                                  u === _ && t.removeAttribute("id");
                              }
                          }
                      }
                      return l(e.replace(W, "$1"), t, i, r);
                  }
                  function le() {
                      var e = [];
                      return function t(n, r) {
                          return e.push(n + " ") > i.cacheLength && delete t[e.shift()], (t[n + " "] = r);
                      };
                  }
                  function ce(e) {
                      return (e[_] = !0), e;
                  }
                  function ue(e) {
                      var t = h.createElement("fieldset");
                      try {
                          return !!e(t);
                      } catch (e) {
                          return !1;
                      } finally {
                          t.parentNode && t.parentNode.removeChild(t), (t = null);
                      }
                  }
                  function fe(e, t) {
                      for (var n = e.split("|"), r = n.length; r--; ) i.attrHandle[n[r]] = t;
                  }
                  function de(e, t) {
                      var n = t && e,
                          i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                      if (i) return i;
                      if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
                      return e ? 1 : -1;
                  }
                  function he(e) {
                      return function (t) {
                          return "input" === t.nodeName.toLowerCase() && t.type === e;
                      };
                  }
                  function pe(e) {
                      return function (t) {
                          var n = t.nodeName.toLowerCase();
                          return ("input" === n || "button" === n) && t.type === e;
                      };
                  }
                  function ge(e) {
                      return function (t) {
                          return "form" in t
                              ? t.parentNode && !1 === t.disabled
                                  ? "label" in t
                                      ? "label" in t.parentNode
                                          ? t.parentNode.disabled === e
                                          : t.disabled === e
                                      : t.isDisabled === e || (t.isDisabled !== !e && se(t) === e)
                                  : t.disabled === e
                              : "label" in t && t.disabled === e;
                      };
                  }
                  function me(e) {
                      return ce(function (t) {
                          return (
                              (t = +t),
                              ce(function (n, i) {
                                  for (var r, o = e([], n.length, t), s = o.length; s--; ) n[(r = o[s])] && (n[r] = !(i[r] = n[r]));
                              })
                          );
                      });
                  }
                  function ve(e) {
                      return e && void 0 !== e.getElementsByTagName && e;
                  }
                  for (t in ((n = ae.support = {}),
                  (o = ae.isXML = function (e) {
                      var t = e && e.namespaceURI,
                          n = e && (e.ownerDocument || e).documentElement;
                      return !K.test(t || (n && n.nodeName) || "HTML");
                  }),
                  (d = ae.setDocument = function (e) {
                      var t,
                          r,
                          s = e ? e.ownerDocument || e : w;
                      return s != h && 9 === s.nodeType && s.documentElement
                          ? ((p = (h = s).documentElement),
                            (g = !o(h)),
                            w != h && (r = h.defaultView) && r.top !== r && (r.addEventListener ? r.addEventListener("unload", oe, !1) : r.attachEvent && r.attachEvent("onunload", oe)),
                            (n.scope = ue(function (e) {
                                return p.appendChild(e).appendChild(h.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length;
                            })),
                            (n.attributes = ue(function (e) {
                                return (e.className = "i"), !e.getAttribute("className");
                            })),
                            (n.getElementsByTagName = ue(function (e) {
                                return e.appendChild(h.createComment("")), !e.getElementsByTagName("*").length;
                            })),
                            (n.getElementsByClassName = J.test(h.getElementsByClassName)),
                            (n.getById = ue(function (e) {
                                return (p.appendChild(e).id = _), !h.getElementsByName || !h.getElementsByName(_).length;
                            })),
                            n.getById
                                ? ((i.filter.ID = function (e) {
                                      var t = e.replace(te, ne);
                                      return function (e) {
                                          return e.getAttribute("id") === t;
                                      };
                                  }),
                                  (i.find.ID = function (e, t) {
                                      if (void 0 !== t.getElementById && g) {
                                          var n = t.getElementById(e);
                                          return n ? [n] : [];
                                      }
                                  }))
                                : ((i.filter.ID = function (e) {
                                      var t = e.replace(te, ne);
                                      return function (e) {
                                          var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                                          return n && n.value === t;
                                      };
                                  }),
                                  (i.find.ID = function (e, t) {
                                      if (void 0 !== t.getElementById && g) {
                                          var n,
                                              i,
                                              r,
                                              o = t.getElementById(e);
                                          if (o) {
                                              if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                                              for (r = t.getElementsByName(e), i = 0; (o = r[i++]); ) if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                                          }
                                          return [];
                                      }
                                  })),
                            (i.find.TAG = n.getElementsByTagName
                                ? function (e, t) {
                                      return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0;
                                  }
                                : function (e, t) {
                                      var n,
                                          i = [],
                                          r = 0,
                                          o = t.getElementsByTagName(e);
                                      if ("*" === e) {
                                          for (; (n = o[r++]); ) 1 === n.nodeType && i.push(n);
                                          return i;
                                      }
                                      return o;
                                  }),
                            (i.find.CLASS =
                                n.getElementsByClassName &&
                                function (e, t) {
                                    if (void 0 !== t.getElementsByClassName && g) return t.getElementsByClassName(e);
                                }),
                            (v = []),
                            (m = []),
                            (n.qsa = J.test(h.querySelectorAll)) &&
                                (ue(function (e) {
                                    var t;
                                    (p.appendChild(e).innerHTML = "<a id='" + _ + "'></a><select id='" + _ + "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                                        e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + M + "*(?:''|\"\")"),
                                        e.querySelectorAll("[selected]").length || m.push("\\[" + M + "*(?:value|" + H + ")"),
                                        e.querySelectorAll("[id~=" + _ + "-]").length || m.push("~="),
                                        (t = h.createElement("input")).setAttribute("name", ""),
                                        e.appendChild(t),
                                        e.querySelectorAll("[name='']").length || m.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"),
                                        e.querySelectorAll(":checked").length || m.push(":checked"),
                                        e.querySelectorAll("a#" + _ + "+*").length || m.push(".#.+[+~]"),
                                        e.querySelectorAll("\\\f"),
                                        m.push("[\\r\\n\\f]");
                                }),
                                ue(function (e) {
                                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                                    var t = h.createElement("input");
                                    t.setAttribute("type", "hidden"),
                                        e.appendChild(t).setAttribute("name", "D"),
                                        e.querySelectorAll("[name=d]").length && m.push("name" + M + "*[*^$|!~]?="),
                                        2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"),
                                        (p.appendChild(e).disabled = !0),
                                        2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"),
                                        e.querySelectorAll("*,:x"),
                                        m.push(",.*:");
                                })),
                            (n.matchesSelector = J.test((y = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector))) &&
                                ue(function (e) {
                                    (n.disconnectedMatch = y.call(e, "*")), y.call(e, "[s!='']:x"), v.push("!=", R);
                                }),
                            (m = m.length && new RegExp(m.join("|"))),
                            (v = v.length && new RegExp(v.join("|"))),
                            (t = J.test(p.compareDocumentPosition)),
                            (b =
                                t || J.test(p.contains)
                                    ? function (e, t) {
                                          var n = 9 === e.nodeType ? e.documentElement : e,
                                              i = t && t.parentNode;
                                          return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)));
                                      }
                                    : function (e, t) {
                                          if (t) for (; (t = t.parentNode); ) if (t === e) return !0;
                                          return !1;
                                      }),
                            (S = t
                                ? function (e, t) {
                                      if (e === t) return (f = !0), 0;
                                      var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                                      return (
                                          i ||
                                          (1 & (i = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || (!n.sortDetached && t.compareDocumentPosition(e) === i)
                                              ? e == h || (e.ownerDocument == w && b(w, e))
                                                  ? -1
                                                  : t == h || (t.ownerDocument == w && b(w, t))
                                                  ? 1
                                                  : u
                                                  ? P(u, e) - P(u, t)
                                                  : 0
                                              : 4 & i
                                              ? -1
                                              : 1)
                                      );
                                  }
                                : function (e, t) {
                                      if (e === t) return (f = !0), 0;
                                      var n,
                                          i = 0,
                                          r = e.parentNode,
                                          o = t.parentNode,
                                          s = [e],
                                          a = [t];
                                      if (!r || !o) return e == h ? -1 : t == h ? 1 : r ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;
                                      if (r === o) return de(e, t);
                                      for (n = e; (n = n.parentNode); ) s.unshift(n);
                                      for (n = t; (n = n.parentNode); ) a.unshift(n);
                                      for (; s[i] === a[i]; ) i++;
                                      return i ? de(s[i], a[i]) : s[i] == w ? -1 : a[i] == w ? 1 : 0;
                                  }),
                            h)
                          : h;
                  }),
                  (ae.matches = function (e, t) {
                      return ae(e, null, null, t);
                  }),
                  (ae.matchesSelector = function (e, t) {
                      if ((d(e), n.matchesSelector && g && !k[t + " "] && (!v || !v.test(t)) && (!m || !m.test(t))))
                          try {
                              var i = y.call(e, t);
                              if (i || n.disconnectedMatch || (e.document && 11 !== e.document.nodeType)) return i;
                          } catch (e) {
                              k(t, !0);
                          }
                      return ae(t, h, null, [e]).length > 0;
                  }),
                  (ae.contains = function (e, t) {
                      return (e.ownerDocument || e) != h && d(e), b(e, t);
                  }),
                  (ae.attr = function (e, t) {
                      (e.ownerDocument || e) != h && d(e);
                      var r = i.attrHandle[t.toLowerCase()],
                          o = r && O.call(i.attrHandle, t.toLowerCase()) ? r(e, t, !g) : void 0;
                      return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null;
                  }),
                  (ae.escape = function (e) {
                      return (e + "").replace(ie, re);
                  }),
                  (ae.error = function (e) {
                      throw new Error("Syntax error, unrecognized expression: " + e);
                  }),
                  (ae.uniqueSort = function (e) {
                      var t,
                          i = [],
                          r = 0,
                          o = 0;
                      if (((f = !n.detectDuplicates), (u = !n.sortStable && e.slice(0)), e.sort(S), f)) {
                          for (; (t = e[o++]); ) t === e[o] && (r = i.push(o));
                          for (; r--; ) e.splice(i[r], 1);
                      }
                      return (u = null), e;
                  }),
                  (r = ae.getText = function (e) {
                      var t,
                          n = "",
                          i = 0,
                          o = e.nodeType;
                      if (o) {
                          if (1 === o || 9 === o || 11 === o) {
                              if ("string" == typeof e.textContent) return e.textContent;
                              for (e = e.firstChild; e; e = e.nextSibling) n += r(e);
                          } else if (3 === o || 4 === o) return e.nodeValue;
                      } else for (; (t = e[i++]); ) n += r(t);
                      return n;
                  }),
                  ((i = ae.selectors = {
                      cacheLength: 50,
                      createPseudo: ce,
                      match: Y,
                      attrHandle: {},
                      find: {},
                      relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
                      preFilter: {
                          ATTR: function (e) {
                              return (e[1] = e[1].replace(te, ne)), (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
                          },
                          CHILD: function (e) {
                              return (
                                  (e[1] = e[1].toLowerCase()),
                                  "nth" === e[1].slice(0, 3) ? (e[3] || ae.error(e[0]), (e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3]))), (e[5] = +(e[7] + e[8] || "odd" === e[3]))) : e[3] && ae.error(e[0]),
                                  e
                              );
                          },
                          PSEUDO: function (e) {
                              var t,
                                  n = !e[6] && e[2];
                              return Y.CHILD.test(e[0])
                                  ? null
                                  : (e[3] ? (e[2] = e[4] || e[5] || "") : n && V.test(n) && (t = s(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))), e.slice(0, 3));
                          },
                      },
                      filter: {
                          TAG: function (e) {
                              var t = e.replace(te, ne).toLowerCase();
                              return "*" === e
                                  ? function () {
                                        return !0;
                                    }
                                  : function (e) {
                                        return e.nodeName && e.nodeName.toLowerCase() === t;
                                    };
                          },
                          CLASS: function (e) {
                              var t = T[e + " "];
                              return (
                                  t ||
                                  ((t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) &&
                                      T(e, function (e) {
                                          return t.test(("string" == typeof e.className && e.className) || (void 0 !== e.getAttribute && e.getAttribute("class")) || "");
                                      }))
                              );
                          },
                          ATTR: function (e, t, n) {
                              return function (i) {
                                  var r = ae.attr(i, e);
                                  return null == r
                                      ? "!=" === t
                                      : !t ||
                                            ((r += ""),
                                            "=" === t
                                                ? r === n
                                                : "!=" === t
                                                ? r !== n
                                                : "^=" === t
                                                ? n && 0 === r.indexOf(n)
                                                : "*=" === t
                                                ? n && r.indexOf(n) > -1
                                                : "$=" === t
                                                ? n && r.slice(-n.length) === n
                                                : "~=" === t
                                                ? (" " + r.replace(B, " ") + " ").indexOf(n) > -1
                                                : "|=" === t && (r === n || r.slice(0, n.length + 1) === n + "-"));
                              };
                          },
                          CHILD: function (e, t, n, i, r) {
                              var o = "nth" !== e.slice(0, 3),
                                  s = "last" !== e.slice(-4),
                                  a = "of-type" === t;
                              return 1 === i && 0 === r
                                  ? function (e) {
                                        return !!e.parentNode;
                                    }
                                  : function (t, n, l) {
                                        var c,
                                            u,
                                            f,
                                            d,
                                            h,
                                            p,
                                            g = o !== s ? "nextSibling" : "previousSibling",
                                            m = t.parentNode,
                                            v = a && t.nodeName.toLowerCase(),
                                            y = !l && !a,
                                            b = !1;
                                        if (m) {
                                            if (o) {
                                                for (; g; ) {
                                                    for (d = t; (d = d[g]); ) if (a ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                                    p = g = "only" === e && !p && "nextSibling";
                                                }
                                                return !0;
                                            }
                                            if (((p = [s ? m.firstChild : m.lastChild]), s && y)) {
                                                for (
                                                    b = (h = (c = (u = (f = (d = m)[_] || (d[_] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === x && c[1]) && c[2], d = h && m.childNodes[h];
                                                    (d = (++h && d && d[g]) || (b = h = 0) || p.pop());

                                                )
                                                    if (1 === d.nodeType && ++b && d === t) {
                                                        u[e] = [x, h, b];
                                                        break;
                                                    }
                                            } else if ((y && (b = h = (c = (u = (f = (d = t)[_] || (d[_] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === x && c[1]), !1 === b))
                                                for (
                                                    ;
                                                    (d = (++h && d && d[g]) || (b = h = 0) || p.pop()) &&
                                                    ((a ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++b || (y && ((u = (f = d[_] || (d[_] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] = [x, b]), d !== t));

                                                );
                                            return (b -= r) === i || (b % i == 0 && b / i >= 0);
                                        }
                                    };
                          },
                          PSEUDO: function (e, t) {
                              var n,
                                  r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || ae.error("unsupported pseudo: " + e);
                              return r[_]
                                  ? r(t)
                                  : r.length > 1
                                  ? ((n = [e, e, "", t]),
                                    i.setFilters.hasOwnProperty(e.toLowerCase())
                                        ? ce(function (e, n) {
                                              for (var i, o = r(e, t), s = o.length; s--; ) e[(i = P(e, o[s]))] = !(n[i] = o[s]);
                                          })
                                        : function (e) {
                                              return r(e, 0, n);
                                          })
                                  : r;
                          },
                      },
                      pseudos: {
                          not: ce(function (e) {
                              var t = [],
                                  n = [],
                                  i = a(e.replace(W, "$1"));
                              return i[_]
                                  ? ce(function (e, t, n, r) {
                                        for (var o, s = i(e, null, r, []), a = e.length; a--; ) (o = s[a]) && (e[a] = !(t[a] = o));
                                    })
                                  : function (e, r, o) {
                                        return (t[0] = e), i(t, null, o, n), (t[0] = null), !n.pop();
                                    };
                          }),
                          has: ce(function (e) {
                              return function (t) {
                                  return ae(e, t).length > 0;
                              };
                          }),
                          contains: ce(function (e) {
                              return (
                                  (e = e.replace(te, ne)),
                                  function (t) {
                                      return (t.textContent || r(t)).indexOf(e) > -1;
                                  }
                              );
                          }),
                          lang: ce(function (e) {
                              return (
                                  X.test(e || "") || ae.error("unsupported lang: " + e),
                                  (e = e.replace(te, ne).toLowerCase()),
                                  function (t) {
                                      var n;
                                      do {
                                          if ((n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
                                      } while ((t = t.parentNode) && 1 === t.nodeType);
                                      return !1;
                                  }
                              );
                          }),
                          target: function (t) {
                              var n = e.location && e.location.hash;
                              return n && n.slice(1) === t.id;
                          },
                          root: function (e) {
                              return e === p;
                          },
                          focus: function (e) {
                              return e === h.activeElement && (!h.hasFocus || h.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                          },
                          enabled: ge(!1),
                          disabled: ge(!0),
                          checked: function (e) {
                              var t = e.nodeName.toLowerCase();
                              return ("input" === t && !!e.checked) || ("option" === t && !!e.selected);
                          },
                          selected: function (e) {
                              return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
                          },
                          empty: function (e) {
                              for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                              return !0;
                          },
                          parent: function (e) {
                              return !i.pseudos.empty(e);
                          },
                          header: function (e) {
                              return G.test(e.nodeName);
                          },
                          input: function (e) {
                              return Q.test(e.nodeName);
                          },
                          button: function (e) {
                              var t = e.nodeName.toLowerCase();
                              return ("input" === t && "button" === e.type) || "button" === t;
                          },
                          text: function (e) {
                              var t;
                              return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
                          },
                          first: me(function () {
                              return [0];
                          }),
                          last: me(function (e, t) {
                              return [t - 1];
                          }),
                          eq: me(function (e, t, n) {
                              return [n < 0 ? n + t : n];
                          }),
                          even: me(function (e, t) {
                              for (var n = 0; n < t; n += 2) e.push(n);
                              return e;
                          }),
                          odd: me(function (e, t) {
                              for (var n = 1; n < t; n += 2) e.push(n);
                              return e;
                          }),
                          lt: me(function (e, t, n) {
                              for (var i = n < 0 ? n + t : n > t ? t : n; --i >= 0; ) e.push(i);
                              return e;
                          }),
                          gt: me(function (e, t, n) {
                              for (var i = n < 0 ? n + t : n; ++i < t; ) e.push(i);
                              return e;
                          }),
                      },
                  }).pseudos.nth = i.pseudos.eq),
                  { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
                      i.pseudos[t] = he(t);
                  for (t in { submit: !0, reset: !0 }) i.pseudos[t] = pe(t);
                  function ye() {}
                  function be(e) {
                      for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
                      return i;
                  }
                  function _e(e, t, n) {
                      var i = t.dir,
                          r = t.next,
                          o = r || i,
                          s = n && "parentNode" === o,
                          a = E++;
                      return t.first
                          ? function (t, n, r) {
                                for (; (t = t[i]); ) if (1 === t.nodeType || s) return e(t, n, r);
                                return !1;
                            }
                          : function (t, n, l) {
                                var c,
                                    u,
                                    f,
                                    d = [x, a];
                                if (l) {
                                    for (; (t = t[i]); ) if ((1 === t.nodeType || s) && e(t, n, l)) return !0;
                                } else
                                    for (; (t = t[i]); )
                                        if (1 === t.nodeType || s)
                                            if (((u = (f = t[_] || (t[_] = {}))[t.uniqueID] || (f[t.uniqueID] = {})), r && r === t.nodeName.toLowerCase())) t = t[i] || t;
                                            else {
                                                if ((c = u[o]) && c[0] === x && c[1] === a) return (d[2] = c[2]);
                                                if (((u[o] = d), (d[2] = e(t, n, l)))) return !0;
                                            }
                                return !1;
                            };
                  }
                  function we(e) {
                      return e.length > 1
                          ? function (t, n, i) {
                                for (var r = e.length; r--; ) if (!e[r](t, n, i)) return !1;
                                return !0;
                            }
                          : e[0];
                  }
                  function xe(e, t, n, i, r) {
                      for (var o, s = [], a = 0, l = e.length, c = null != t; a < l; a++) (o = e[a]) && ((n && !n(o, i, r)) || (s.push(o), c && t.push(a)));
                      return s;
                  }
                  function Ee(e, t, n, i, r, o) {
                      return (
                          i && !i[_] && (i = Ee(i)),
                          r && !r[_] && (r = Ee(r, o)),
                          ce(function (o, s, a, l) {
                              var c,
                                  u,
                                  f,
                                  d = [],
                                  h = [],
                                  p = s.length,
                                  g =
                                      o ||
                                      (function (e, t, n) {
                                          for (var i = 0, r = t.length; i < r; i++) ae(e, t[i], n);
                                          return n;
                                      })(t || "*", a.nodeType ? [a] : a, []),
                                  m = !e || (!o && t) ? g : xe(g, d, e, a, l),
                                  v = n ? (r || (o ? e : p || i) ? [] : s) : m;
                              if ((n && n(m, v, a, l), i)) for (c = xe(v, h), i(c, [], a, l), u = c.length; u--; ) (f = c[u]) && (v[h[u]] = !(m[h[u]] = f));
                              if (o) {
                                  if (r || e) {
                                      if (r) {
                                          for (c = [], u = v.length; u--; ) (f = v[u]) && c.push((m[u] = f));
                                          r(null, (v = []), c, l);
                                      }
                                      for (u = v.length; u--; ) (f = v[u]) && (c = r ? P(o, f) : d[u]) > -1 && (o[c] = !(s[c] = f));
                                  }
                              } else (v = xe(v === s ? v.splice(p, v.length) : v)), r ? r(null, s, v, l) : j.apply(s, v);
                          })
                      );
                  }
                  function Te(e) {
                      for (
                          var t,
                              n,
                              r,
                              o = e.length,
                              s = i.relative[e[0].type],
                              a = s || i.relative[" "],
                              l = s ? 1 : 0,
                              u = _e(
                                  function (e) {
                                      return e === t;
                                  },
                                  a,
                                  !0
                              ),
                              f = _e(
                                  function (e) {
                                      return P(t, e) > -1;
                                  },
                                  a,
                                  !0
                              ),
                              d = [
                                  function (e, n, i) {
                                      var r = (!s && (i || n !== c)) || ((t = n).nodeType ? u(e, n, i) : f(e, n, i));
                                      return (t = null), r;
                                  },
                              ];
                          l < o;
                          l++
                      )
                          if ((n = i.relative[e[l].type])) d = [_e(we(d), n)];
                          else {
                              if ((n = i.filter[e[l].type].apply(null, e[l].matches))[_]) {
                                  for (r = ++l; r < o && !i.relative[e[r].type]; r++);
                                  return Ee(
                                      l > 1 && we(d),
                                      l > 1 && be(e.slice(0, l - 1).concat({ value: " " === e[l - 2].type ? "*" : "" })).replace(W, "$1"),
                                      n,
                                      l < r && Te(e.slice(l, r)),
                                      r < o && Te((e = e.slice(r))),
                                      r < o && be(e)
                                  );
                              }
                              d.push(n);
                          }
                      return we(d);
                  }
                  return (
                      (ye.prototype = i.filters = i.pseudos),
                      (i.setFilters = new ye()),
                      (s = ae.tokenize = function (e, t) {
                          var n,
                              r,
                              o,
                              s,
                              a,
                              l,
                              c,
                              u = C[e + " "];
                          if (u) return t ? 0 : u.slice(0);
                          for (a = e, l = [], c = i.preFilter; a; ) {
                              for (s in ((n && !(r = F.exec(a))) || (r && (a = a.slice(r[0].length) || a), l.push((o = []))),
                              (n = !1),
                              (r = z.exec(a)) && ((n = r.shift()), o.push({ value: n, type: r[0].replace(W, " ") }), (a = a.slice(n.length))),
                              i.filter))
                                  !(r = Y[s].exec(a)) || (c[s] && !(r = c[s](r))) || ((n = r.shift()), o.push({ value: n, type: s, matches: r }), (a = a.slice(n.length)));
                              if (!n) break;
                          }
                          return t ? a.length : a ? ae.error(e) : C(e, l).slice(0);
                      }),
                      (a = ae.compile = function (e, t) {
                          var n,
                              r = [],
                              o = [],
                              a = A[e + " "];
                          if (!a) {
                              for (t || (t = s(e)), n = t.length; n--; ) (a = Te(t[n]))[_] ? r.push(a) : o.push(a);
                              (a = A(
                                  e,
                                  (function (e, t) {
                                      var n = t.length > 0,
                                          r = e.length > 0,
                                          o = function (o, s, a, l, u) {
                                              var f,
                                                  p,
                                                  m,
                                                  v = 0,
                                                  y = "0",
                                                  b = o && [],
                                                  _ = [],
                                                  w = c,
                                                  E = o || (r && i.find.TAG("*", u)),
                                                  T = (x += null == w ? 1 : Math.random() || 0.1),
                                                  C = E.length;
                                              for (u && (c = s == h || s || u); y !== C && null != (f = E[y]); y++) {
                                                  if (r && f) {
                                                      for (p = 0, s || f.ownerDocument == h || (d(f), (a = !g)); (m = e[p++]); )
                                                          if (m(f, s || h, a)) {
                                                              l.push(f);
                                                              break;
                                                          }
                                                      u && (x = T);
                                                  }
                                                  n && ((f = !m && f) && v--, o && b.push(f));
                                              }
                                              if (((v += y), n && y !== v)) {
                                                  for (p = 0; (m = t[p++]); ) m(b, _, s, a);
                                                  if (o) {
                                                      if (v > 0) for (; y--; ) b[y] || _[y] || (_[y] = N.call(l));
                                                      _ = xe(_);
                                                  }
                                                  j.apply(l, _), u && !o && _.length > 0 && v + t.length > 1 && ae.uniqueSort(l);
                                              }
                                              return u && ((x = T), (c = w)), b;
                                          };
                                      return n ? ce(o) : o;
                                  })(o, r)
                              )).selector = e;
                          }
                          return a;
                      }),
                      (l = ae.select = function (e, t, n, r) {
                          var o,
                              l,
                              c,
                              u,
                              f,
                              d = "function" == typeof e && e,
                              h = !r && s((e = d.selector || e));
                          if (((n = n || []), 1 === h.length)) {
                              if ((l = h[0] = h[0].slice(0)).length > 2 && "ID" === (c = l[0]).type && 9 === t.nodeType && g && i.relative[l[1].type]) {
                                  if (!(t = (i.find.ID(c.matches[0].replace(te, ne), t) || [])[0])) return n;
                                  d && (t = t.parentNode), (e = e.slice(l.shift().value.length));
                              }
                              for (o = Y.needsContext.test(e) ? 0 : l.length; o-- && ((c = l[o]), !i.relative[(u = c.type)]); )
                                  if ((f = i.find[u]) && (r = f(c.matches[0].replace(te, ne), (ee.test(l[0].type) && ve(t.parentNode)) || t))) {
                                      if ((l.splice(o, 1), !(e = r.length && be(l)))) return j.apply(n, r), n;
                                      break;
                                  }
                          }
                          return (d || a(e, h))(r, t, !g, n, !t || (ee.test(e) && ve(t.parentNode)) || t), n;
                      }),
                      (n.sortStable = _.split("").sort(S).join("") === _),
                      (n.detectDuplicates = !!f),
                      d(),
                      (n.sortDetached = ue(function (e) {
                          return 1 & e.compareDocumentPosition(h.createElement("fieldset"));
                      })),
                      ue(function (e) {
                          return (e.innerHTML = "<a href='#'></a>"), "#" === e.firstChild.getAttribute("href");
                      }) ||
                          fe("type|href|height|width", function (e, t, n) {
                              if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
                          }),
                      (n.attributes &&
                          ue(function (e) {
                              return (e.innerHTML = "<input/>"), e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
                          })) ||
                          fe("value", function (e, t, n) {
                              if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
                          }),
                      ue(function (e) {
                          return null == e.getAttribute("disabled");
                      }) ||
                          fe(H, function (e, t, n) {
                              var i;
                              if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null;
                          }),
                      ae
                  );
              })(n);
          (E.find = C), (E.expr = C.selectors), (E.expr[":"] = E.expr.pseudos), (E.uniqueSort = E.unique = C.uniqueSort), (E.text = C.getText), (E.isXMLDoc = C.isXML), (E.contains = C.contains), (E.escapeSelector = C.escape);
          var A = function (e, t, n) {
                  for (var i = [], r = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
                      if (1 === e.nodeType) {
                          if (r && E(e).is(n)) break;
                          i.push(e);
                      }
                  return i;
              },
              k = function (e, t) {
                  for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                  return n;
              },
              S = E.expr.match.needsContext;
          function O(e, t) {
              return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
          }
          var D = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
          function N(e, t, n) {
              return v(t)
                  ? E.grep(e, function (e, i) {
                        return !!t.call(e, i, e) !== n;
                    })
                  : t.nodeType
                  ? E.grep(e, function (e) {
                        return (e === t) !== n;
                    })
                  : "string" != typeof t
                  ? E.grep(e, function (e) {
                        return u.call(t, e) > -1 !== n;
                    })
                  : E.filter(t, e, n);
          }
          (E.filter = function (e, t, n) {
              var i = t[0];
              return (
                  n && (e = ":not(" + e + ")"),
                  1 === t.length && 1 === i.nodeType
                      ? E.find.matchesSelector(i, e)
                          ? [i]
                          : []
                      : E.find.matches(
                            e,
                            E.grep(t, function (e) {
                                return 1 === e.nodeType;
                            })
                        )
              );
          }),
              E.fn.extend({
                  find: function (e) {
                      var t,
                          n,
                          i = this.length,
                          r = this;
                      if ("string" != typeof e)
                          return this.pushStack(
                              E(e).filter(function () {
                                  for (t = 0; t < i; t++) if (E.contains(r[t], this)) return !0;
                              })
                          );
                      for (n = this.pushStack([]), t = 0; t < i; t++) E.find(e, r[t], n);
                      return i > 1 ? E.uniqueSort(n) : n;
                  },
                  filter: function (e) {
                      return this.pushStack(N(this, e || [], !1));
                  },
                  not: function (e) {
                      return this.pushStack(N(this, e || [], !0));
                  },
                  is: function (e) {
                      return !!N(this, "string" == typeof e && S.test(e) ? E(e) : e || [], !1).length;
                  },
              });
          var L,
              j = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
          ((E.fn.init = function (e, t, n) {
              var i, r;
              if (!e) return this;
              if (((n = n || L), "string" == typeof e)) {
                  if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : j.exec(e)) || (!i[1] && t)) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                  if (i[1]) {
                      if (((t = t instanceof E ? t[0] : t), E.merge(this, E.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : b, !0)), D.test(i[1]) && E.isPlainObject(t)))
                          for (i in t) v(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                      return this;
                  }
                  return (r = b.getElementById(i[2])) && ((this[0] = r), (this.length = 1)), this;
              }
              return e.nodeType ? ((this[0] = e), (this.length = 1), this) : v(e) ? (void 0 !== n.ready ? n.ready(e) : e(E)) : E.makeArray(e, this);
          }).prototype = E.fn),
              (L = E(b));
          var I = /^(?:parents|prev(?:Until|All))/,
              P = { children: !0, contents: !0, next: !0, prev: !0 };
          function H(e, t) {
              for (; (e = e[t]) && 1 !== e.nodeType; );
              return e;
          }
          E.fn.extend({
              has: function (e) {
                  var t = E(e, this),
                      n = t.length;
                  return this.filter(function () {
                      for (var e = 0; e < n; e++) if (E.contains(this, t[e])) return !0;
                  });
              },
              closest: function (e, t) {
                  var n,
                      i = 0,
                      r = this.length,
                      o = [],
                      s = "string" != typeof e && E(e);
                  if (!S.test(e))
                      for (; i < r; i++)
                          for (n = this[i]; n && n !== t; n = n.parentNode)
                              if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && E.find.matchesSelector(n, e))) {
                                  o.push(n);
                                  break;
                              }
                  return this.pushStack(o.length > 1 ? E.uniqueSort(o) : o);
              },
              index: function (e) {
                  return e ? ("string" == typeof e ? u.call(E(e), this[0]) : u.call(this, e.jquery ? e[0] : e)) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
              },
              add: function (e, t) {
                  return this.pushStack(E.uniqueSort(E.merge(this.get(), E(e, t))));
              },
              addBack: function (e) {
                  return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
              },
          }),
              E.each(
                  {
                      parent: function (e) {
                          var t = e.parentNode;
                          return t && 11 !== t.nodeType ? t : null;
                      },
                      parents: function (e) {
                          return A(e, "parentNode");
                      },
                      parentsUntil: function (e, t, n) {
                          return A(e, "parentNode", n);
                      },
                      next: function (e) {
                          return H(e, "nextSibling");
                      },
                      prev: function (e) {
                          return H(e, "previousSibling");
                      },
                      nextAll: function (e) {
                          return A(e, "nextSibling");
                      },
                      prevAll: function (e) {
                          return A(e, "previousSibling");
                      },
                      nextUntil: function (e, t, n) {
                          return A(e, "nextSibling", n);
                      },
                      prevUntil: function (e, t, n) {
                          return A(e, "previousSibling", n);
                      },
                      siblings: function (e) {
                          return k((e.parentNode || {}).firstChild, e);
                      },
                      children: function (e) {
                          return k(e.firstChild);
                      },
                      contents: function (e) {
                          return null != e.contentDocument && s(e.contentDocument) ? e.contentDocument : (O(e, "template") && (e = e.content || e), E.merge([], e.childNodes));
                      },
                  },
                  function (e, t) {
                      E.fn[e] = function (n, i) {
                          var r = E.map(this, t, n);
                          return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = E.filter(i, r)), this.length > 1 && (P[e] || E.uniqueSort(r), I.test(e) && r.reverse()), this.pushStack(r);
                      };
                  }
              );
          var M = /[^\x20\t\r\n\f]+/g;
          function q(e) {
              return e;
          }
          function $(e) {
              throw e;
          }
          function R(e, t, n, i) {
              var r;
              try {
                  e && v((r = e.promise)) ? r.call(e).done(t).fail(n) : e && v((r = e.then)) ? r.call(e, t, n) : t.apply(void 0, [e].slice(i));
              } catch (e) {
                  n.apply(void 0, [e]);
              }
          }
          (E.Callbacks = function (e) {
              e =
                  "string" == typeof e
                      ? (function (e) {
                            var t = {};
                            return (
                                E.each(e.match(M) || [], function (e, n) {
                                    t[n] = !0;
                                }),
                                t
                            );
                        })(e)
                      : E.extend({}, e);
              var t,
                  n,
                  i,
                  r,
                  o = [],
                  s = [],
                  a = -1,
                  l = function () {
                      for (r = r || e.once, i = t = !0; s.length; a = -1) for (n = s.shift(); ++a < o.length; ) !1 === o[a].apply(n[0], n[1]) && e.stopOnFalse && ((a = o.length), (n = !1));
                      e.memory || (n = !1), (t = !1), r && (o = n ? [] : "");
                  },
                  c = {
                      add: function () {
                          return (
                              o &&
                                  (n && !t && ((a = o.length - 1), s.push(n)),
                                  (function t(n) {
                                      E.each(n, function (n, i) {
                                          v(i) ? (e.unique && c.has(i)) || o.push(i) : i && i.length && "string" !== x(i) && t(i);
                                      });
                                  })(arguments),
                                  n && !t && l()),
                              this
                          );
                      },
                      remove: function () {
                          return (
                              E.each(arguments, function (e, t) {
                                  for (var n; (n = E.inArray(t, o, n)) > -1; ) o.splice(n, 1), n <= a && a--;
                              }),
                              this
                          );
                      },
                      has: function (e) {
                          return e ? E.inArray(e, o) > -1 : o.length > 0;
                      },
                      empty: function () {
                          return o && (o = []), this;
                      },
                      disable: function () {
                          return (r = s = []), (o = n = ""), this;
                      },
                      disabled: function () {
                          return !o;
                      },
                      lock: function () {
                          return (r = s = []), n || t || (o = n = ""), this;
                      },
                      locked: function () {
                          return !!r;
                      },
                      fireWith: function (e, n) {
                          return r || ((n = [e, (n = n || []).slice ? n.slice() : n]), s.push(n), t || l()), this;
                      },
                      fire: function () {
                          return c.fireWith(this, arguments), this;
                      },
                      fired: function () {
                          return !!i;
                      },
                  };
              return c;
          }),
              E.extend({
                  Deferred: function (e) {
                      var t = [
                              ["notify", "progress", E.Callbacks("memory"), E.Callbacks("memory"), 2],
                              ["resolve", "done", E.Callbacks("once memory"), E.Callbacks("once memory"), 0, "resolved"],
                              ["reject", "fail", E.Callbacks("once memory"), E.Callbacks("once memory"), 1, "rejected"],
                          ],
                          i = "pending",
                          r = {
                              state: function () {
                                  return i;
                              },
                              always: function () {
                                  return o.done(arguments).fail(arguments), this;
                              },
                              catch: function (e) {
                                  return r.then(null, e);
                              },
                              pipe: function () {
                                  var e = arguments;
                                  return E.Deferred(function (n) {
                                      E.each(t, function (t, i) {
                                          var r = v(e[i[4]]) && e[i[4]];
                                          o[i[1]](function () {
                                              var e = r && r.apply(this, arguments);
                                              e && v(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[i[0] + "With"](this, r ? [e] : arguments);
                                          });
                                      }),
                                          (e = null);
                                  }).promise();
                              },
                              then: function (e, i, r) {
                                  var o = 0;
                                  function s(e, t, i, r) {
                                      return function () {
                                          var a = this,
                                              l = arguments,
                                              c = function () {
                                                  var n, c;
                                                  if (!(e < o)) {
                                                      if ((n = i.apply(a, l)) === t.promise()) throw new TypeError("Thenable self-resolution");
                                                      (c = n && ("object" == typeof n || "function" == typeof n) && n.then),
                                                          v(c)
                                                              ? r
                                                                  ? c.call(n, s(o, t, q, r), s(o, t, $, r))
                                                                  : (o++, c.call(n, s(o, t, q, r), s(o, t, $, r), s(o, t, q, t.notifyWith)))
                                                              : (i !== q && ((a = void 0), (l = [n])), (r || t.resolveWith)(a, l));
                                                  }
                                              },
                                              u = r
                                                  ? c
                                                  : function () {
                                                        try {
                                                            c();
                                                        } catch (n) {
                                                            E.Deferred.exceptionHook && E.Deferred.exceptionHook(n, u.stackTrace), e + 1 >= o && (i !== $ && ((a = void 0), (l = [n])), t.rejectWith(a, l));
                                                        }
                                                    };
                                          e ? u() : (E.Deferred.getStackHook && (u.stackTrace = E.Deferred.getStackHook()), n.setTimeout(u));
                                      };
                                  }
                                  return E.Deferred(function (n) {
                                      t[0][3].add(s(0, n, v(r) ? r : q, n.notifyWith)), t[1][3].add(s(0, n, v(e) ? e : q)), t[2][3].add(s(0, n, v(i) ? i : $));
                                  }).promise();
                              },
                              promise: function (e) {
                                  return null != e ? E.extend(e, r) : r;
                              },
                          },
                          o = {};
                      return (
                          E.each(t, function (e, n) {
                              var s = n[2],
                                  a = n[5];
                              (r[n[1]] = s.add),
                                  a &&
                                      s.add(
                                          function () {
                                              i = a;
                                          },
                                          t[3 - e][2].disable,
                                          t[3 - e][3].disable,
                                          t[0][2].lock,
                                          t[0][3].lock
                                      ),
                                  s.add(n[3].fire),
                                  (o[n[0]] = function () {
                                      return o[n[0] + "With"](this === o ? void 0 : this, arguments), this;
                                  }),
                                  (o[n[0] + "With"] = s.fireWith);
                          }),
                          r.promise(o),
                          e && e.call(o, o),
                          o
                      );
                  },
                  when: function (e) {
                      var t = arguments.length,
                          n = t,
                          i = Array(n),
                          r = a.call(arguments),
                          o = E.Deferred(),
                          s = function (e) {
                              return function (n) {
                                  (i[e] = this), (r[e] = arguments.length > 1 ? a.call(arguments) : n), --t || o.resolveWith(i, r);
                              };
                          };
                      if (t <= 1 && (R(e, o.done(s(n)).resolve, o.reject, !t), "pending" === o.state() || v(r[n] && r[n].then))) return o.then();
                      for (; n--; ) R(r[n], s(n), o.reject);
                      return o.promise();
                  },
              });
          var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
          (E.Deferred.exceptionHook = function (e, t) {
              n.console && n.console.warn && e && B.test(e.name) && n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
          }),
              (E.readyException = function (e) {
                  n.setTimeout(function () {
                      throw e;
                  });
              });
          var W = E.Deferred();
          function F() {
              b.removeEventListener("DOMContentLoaded", F), n.removeEventListener("load", F), E.ready();
          }
          (E.fn.ready = function (e) {
              return (
                  W.then(e).catch(function (e) {
                      E.readyException(e);
                  }),
                  this
              );
          }),
              E.extend({
                  isReady: !1,
                  readyWait: 1,
                  ready: function (e) {
                      (!0 === e ? --E.readyWait : E.isReady) || ((E.isReady = !0), (!0 !== e && --E.readyWait > 0) || W.resolveWith(b, [E]));
                  },
              }),
              (E.ready.then = W.then),
              "complete" === b.readyState || ("loading" !== b.readyState && !b.documentElement.doScroll) ? n.setTimeout(E.ready) : (b.addEventListener("DOMContentLoaded", F), n.addEventListener("load", F));
          var z = function (e, t, n, i, r, o, s) {
                  var a = 0,
                      l = e.length,
                      c = null == n;
                  if ("object" === x(n)) for (a in ((r = !0), n)) z(e, t, a, n[a], !0, o, s);
                  else if (
                      void 0 !== i &&
                      ((r = !0),
                      v(i) || (s = !0),
                      c &&
                          (s
                              ? (t.call(e, i), (t = null))
                              : ((c = t),
                                (t = function (e, t, n) {
                                    return c.call(E(e), n);
                                }))),
                      t)
                  )
                      for (; a < l; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
                  return r ? e : c ? t.call(e) : l ? t(e[0], n) : o;
              },
              U = /^-ms-/,
              V = /-([a-z])/g;
          function X(e, t) {
              return t.toUpperCase();
          }
          function Y(e) {
              return e.replace(U, "ms-").replace(V, X);
          }
          var K = function (e) {
              return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
          };
          function Q() {
              this.expando = E.expando + Q.uid++;
          }
          (Q.uid = 1),
              (Q.prototype = {
                  cache: function (e) {
                      var t = e[this.expando];
                      return t || ((t = {}), K(e) && (e.nodeType ? (e[this.expando] = t) : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t;
                  },
                  set: function (e, t, n) {
                      var i,
                          r = this.cache(e);
                      if ("string" == typeof t) r[Y(t)] = n;
                      else for (i in t) r[Y(i)] = t[i];
                      return r;
                  },
                  get: function (e, t) {
                      return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][Y(t)];
                  },
                  access: function (e, t, n) {
                      return void 0 === t || (t && "string" == typeof t && void 0 === n) ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
                  },
                  remove: function (e, t) {
                      var n,
                          i = e[this.expando];
                      if (void 0 !== i) {
                          if (void 0 !== t) {
                              n = (t = Array.isArray(t) ? t.map(Y) : (t = Y(t)) in i ? [t] : t.match(M) || []).length;
                              for (; n--; ) delete i[t[n]];
                          }
                          (void 0 === t || E.isEmptyObject(i)) && (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
                      }
                  },
                  hasData: function (e) {
                      var t = e[this.expando];
                      return void 0 !== t && !E.isEmptyObject(t);
                  },
              });
          var G = new Q(),
              J = new Q(),
              Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
              ee = /[A-Z]/g;
          function te(e, t, n) {
              var i;
              if (void 0 === n && 1 === e.nodeType)
                  if (((i = "data-" + t.replace(ee, "-$&").toLowerCase()), "string" == typeof (n = e.getAttribute(i)))) {
                      try {
                          n = (function (e) {
                              return "true" === e || ("false" !== e && ("null" === e ? null : e === +e + "" ? +e : Z.test(e) ? JSON.parse(e) : e));
                          })(n);
                      } catch (e) {}
                      J.set(e, t, n);
                  } else n = void 0;
              return n;
          }
          E.extend({
              hasData: function (e) {
                  return J.hasData(e) || G.hasData(e);
              },
              data: function (e, t, n) {
                  return J.access(e, t, n);
              },
              removeData: function (e, t) {
                  J.remove(e, t);
              },
              _data: function (e, t, n) {
                  return G.access(e, t, n);
              },
              _removeData: function (e, t) {
                  G.remove(e, t);
              },
          }),
              E.fn.extend({
                  data: function (e, t) {
                      var n,
                          i,
                          r,
                          o = this[0],
                          s = o && o.attributes;
                      if (void 0 === e) {
                          if (this.length && ((r = J.get(o)), 1 === o.nodeType && !G.get(o, "hasDataAttrs"))) {
                              for (n = s.length; n--; ) s[n] && 0 === (i = s[n].name).indexOf("data-") && ((i = Y(i.slice(5))), te(o, i, r[i]));
                              G.set(o, "hasDataAttrs", !0);
                          }
                          return r;
                      }
                      return "object" == typeof e
                          ? this.each(function () {
                                J.set(this, e);
                            })
                          : z(
                                this,
                                function (t) {
                                    var n;
                                    if (o && void 0 === t) return void 0 !== (n = J.get(o, e)) ? n : void 0 !== (n = te(o, e)) ? n : void 0;
                                    this.each(function () {
                                        J.set(this, e, t);
                                    });
                                },
                                null,
                                t,
                                arguments.length > 1,
                                null,
                                !0
                            );
                  },
                  removeData: function (e) {
                      return this.each(function () {
                          J.remove(this, e);
                      });
                  },
              }),
              E.extend({
                  queue: function (e, t, n) {
                      var i;
                      if (e) return (t = (t || "fx") + "queue"), (i = G.get(e, t)), n && (!i || Array.isArray(n) ? (i = G.access(e, t, E.makeArray(n))) : i.push(n)), i || [];
                  },
                  dequeue: function (e, t) {
                      t = t || "fx";
                      var n = E.queue(e, t),
                          i = n.length,
                          r = n.shift(),
                          o = E._queueHooks(e, t);
                      "inprogress" === r && ((r = n.shift()), i--),
                          r &&
                              ("fx" === t && n.unshift("inprogress"),
                              delete o.stop,
                              r.call(
                                  e,
                                  function () {
                                      E.dequeue(e, t);
                                  },
                                  o
                              )),
                          !i && o && o.empty.fire();
                  },
                  _queueHooks: function (e, t) {
                      var n = t + "queueHooks";
                      return (
                          G.get(e, n) ||
                          G.access(e, n, {
                              empty: E.Callbacks("once memory").add(function () {
                                  G.remove(e, [t + "queue", n]);
                              }),
                          })
                      );
                  },
              }),
              E.fn.extend({
                  queue: function (e, t) {
                      var n = 2;
                      return (
                          "string" != typeof e && ((t = e), (e = "fx"), n--),
                          arguments.length < n
                              ? E.queue(this[0], e)
                              : void 0 === t
                              ? this
                              : this.each(function () {
                                    var n = E.queue(this, e, t);
                                    E._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && E.dequeue(this, e);
                                })
                      );
                  },
                  dequeue: function (e) {
                      return this.each(function () {
                          E.dequeue(this, e);
                      });
                  },
                  clearQueue: function (e) {
                      return this.queue(e || "fx", []);
                  },
                  promise: function (e, t) {
                      var n,
                          i = 1,
                          r = E.Deferred(),
                          o = this,
                          s = this.length,
                          a = function () {
                              --i || r.resolveWith(o, [o]);
                          };
                      for ("string" != typeof e && ((t = e), (e = void 0)), e = e || "fx"; s--; ) (n = G.get(o[s], e + "queueHooks")) && n.empty && (i++, n.empty.add(a));
                      return a(), r.promise(t);
                  },
              });
          var ne = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
              ie = new RegExp("^(?:([+-])=|)(" + ne + ")([a-z%]*)$", "i"),
              re = ["Top", "Right", "Bottom", "Left"],
              oe = b.documentElement,
              se = function (e) {
                  return E.contains(e.ownerDocument, e);
              },
              ae = { composed: !0 };
          oe.getRootNode &&
              (se = function (e) {
                  return E.contains(e.ownerDocument, e) || e.getRootNode(ae) === e.ownerDocument;
              });
          var le = function (e, t) {
              return "none" === (e = t || e).style.display || ("" === e.style.display && se(e) && "none" === E.css(e, "display"));
          };
          function ce(e, t, n, i) {
              var r,
                  o,
                  s = 20,
                  a = i
                      ? function () {
                            return i.cur();
                        }
                      : function () {
                            return E.css(e, t, "");
                        },
                  l = a(),
                  c = (n && n[3]) || (E.cssNumber[t] ? "" : "px"),
                  u = e.nodeType && (E.cssNumber[t] || ("px" !== c && +l)) && ie.exec(E.css(e, t));
              if (u && u[3] !== c) {
                  for (l /= 2, c = c || u[3], u = +l || 1; s--; ) E.style(e, t, u + c), (1 - o) * (1 - (o = a() / l || 0.5)) <= 0 && (s = 0), (u /= o);
                  (u *= 2), E.style(e, t, u + c), (n = n || []);
              }
              return n && ((u = +u || +l || 0), (r = n[1] ? u + (n[1] + 1) * n[2] : +n[2]), i && ((i.unit = c), (i.start = u), (i.end = r))), r;
          }
          var ue = {};
          function fe(e) {
              var t,
                  n = e.ownerDocument,
                  i = e.nodeName,
                  r = ue[i];
              return r || ((t = n.body.appendChild(n.createElement(i))), (r = E.css(t, "display")), t.parentNode.removeChild(t), "none" === r && (r = "block"), (ue[i] = r), r);
          }
          function de(e, t) {
              for (var n, i, r = [], o = 0, s = e.length; o < s; o++)
                  (i = e[o]).style &&
                      ((n = i.style.display),
                      t ? ("none" === n && ((r[o] = G.get(i, "display") || null), r[o] || (i.style.display = "")), "" === i.style.display && le(i) && (r[o] = fe(i))) : "none" !== n && ((r[o] = "none"), G.set(i, "display", n)));
              for (o = 0; o < s; o++) null != r[o] && (e[o].style.display = r[o]);
              return e;
          }
          E.fn.extend({
              show: function () {
                  return de(this, !0);
              },
              hide: function () {
                  return de(this);
              },
              toggle: function (e) {
                  return "boolean" == typeof e
                      ? e
                          ? this.show()
                          : this.hide()
                      : this.each(function () {
                            le(this) ? E(this).show() : E(this).hide();
                        });
              },
          });
          var he = /^(?:checkbox|radio)$/i,
              pe = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
              ge = /^$|^module$|\/(?:java|ecma)script/i;
          !(function () {
              var e = b.createDocumentFragment().appendChild(b.createElement("div")),
                  t = b.createElement("input");
              t.setAttribute("type", "radio"),
                  t.setAttribute("checked", "checked"),
                  t.setAttribute("name", "t"),
                  e.appendChild(t),
                  (m.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked),
                  (e.innerHTML = "<textarea>x</textarea>"),
                  (m.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue),
                  (e.innerHTML = "<option></option>"),
                  (m.option = !!e.lastChild);
          })();
          var me = { thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };
          function ve(e, t) {
              var n;
              return (n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : []), void 0 === t || (t && O(e, t)) ? E.merge([e], n) : n;
          }
          function ye(e, t) {
              for (var n = 0, i = e.length; n < i; n++) G.set(e[n], "globalEval", !t || G.get(t[n], "globalEval"));
          }
          (me.tbody = me.tfoot = me.colgroup = me.caption = me.thead), (me.th = me.td), m.option || (me.optgroup = me.option = [1, "<select multiple='multiple'>", "</select>"]);
          var be = /<|&#?\w+;/;
          function _e(e, t, n, i, r) {
              for (var o, s, a, l, c, u, f = t.createDocumentFragment(), d = [], h = 0, p = e.length; h < p; h++)
                  if ((o = e[h]) || 0 === o)
                      if ("object" === x(o)) E.merge(d, o.nodeType ? [o] : o);
                      else if (be.test(o)) {
                          for (s = s || f.appendChild(t.createElement("div")), a = (pe.exec(o) || ["", ""])[1].toLowerCase(), l = me[a] || me._default, s.innerHTML = l[1] + E.htmlPrefilter(o) + l[2], u = l[0]; u--; ) s = s.lastChild;
                          E.merge(d, s.childNodes), ((s = f.firstChild).textContent = "");
                      } else d.push(t.createTextNode(o));
              for (f.textContent = "", h = 0; (o = d[h++]); )
                  if (i && E.inArray(o, i) > -1) r && r.push(o);
                  else if (((c = se(o)), (s = ve(f.appendChild(o), "script")), c && ye(s), n)) for (u = 0; (o = s[u++]); ) ge.test(o.type || "") && n.push(o);
              return f;
          }
          var we = /^([^.]*)(?:\.(.+)|)/;
          function xe() {
              return !0;
          }
          function Ee() {
              return !1;
          }
          function Te(e, t) {
              return (
                  (e ===
                      (function () {
                          try {
                              return b.activeElement;
                          } catch (e) {}
                      })()) ==
                  ("focus" === t)
              );
          }
          function Ce(e, t, n, i, r, o) {
              var s, a;
              if ("object" == typeof t) {
                  for (a in ("string" != typeof n && ((i = i || n), (n = void 0)), t)) Ce(e, a, n, i, t[a], o);
                  return e;
              }
              if ((null == i && null == r ? ((r = n), (i = n = void 0)) : null == r && ("string" == typeof n ? ((r = i), (i = void 0)) : ((r = i), (i = n), (n = void 0))), !1 === r)) r = Ee;
              else if (!r) return e;
              return (
                  1 === o &&
                      ((s = r),
                      ((r = function (e) {
                          return E().off(e), s.apply(this, arguments);
                      }).guid = s.guid || (s.guid = E.guid++))),
                  e.each(function () {
                      E.event.add(this, t, r, i, n);
                  })
              );
          }
          function Ae(e, t, n) {
              n
                  ? (G.set(e, t, !1),
                    E.event.add(e, t, {
                        namespace: !1,
                        handler: function (e) {
                            var i,
                                r,
                                o = G.get(this, t);
                            if (1 & e.isTrigger && this[t]) {
                                if (o.length) (E.event.special[t] || {}).delegateType && e.stopPropagation();
                                else if (((o = a.call(arguments)), G.set(this, t, o), (i = n(this, t)), this[t](), o !== (r = G.get(this, t)) || i ? G.set(this, t, !1) : (r = {}), o !== r))
                                    return e.stopImmediatePropagation(), e.preventDefault(), r && r.value;
                            } else o.length && (G.set(this, t, { value: E.event.trigger(E.extend(o[0], E.Event.prototype), o.slice(1), this) }), e.stopImmediatePropagation());
                        },
                    }))
                  : void 0 === G.get(e, t) && E.event.add(e, t, xe);
          }
          (E.event = {
              global: {},
              add: function (e, t, n, i, r) {
                  var o,
                      s,
                      a,
                      l,
                      c,
                      u,
                      f,
                      d,
                      h,
                      p,
                      g,
                      m = G.get(e);
                  if (K(e))
                      for (
                          n.handler && ((n = (o = n).handler), (r = o.selector)),
                              r && E.find.matchesSelector(oe, r),
                              n.guid || (n.guid = E.guid++),
                              (l = m.events) || (l = m.events = Object.create(null)),
                              (s = m.handle) ||
                                  (s = m.handle = function (t) {
                                      return void 0 !== E && E.event.triggered !== t.type ? E.event.dispatch.apply(e, arguments) : void 0;
                                  }),
                              c = (t = (t || "").match(M) || [""]).length;
                          c--;

                      )
                          (h = g = (a = we.exec(t[c]) || [])[1]),
                              (p = (a[2] || "").split(".").sort()),
                              h &&
                                  ((f = E.event.special[h] || {}),
                                  (h = (r ? f.delegateType : f.bindType) || h),
                                  (f = E.event.special[h] || {}),
                                  (u = E.extend({ type: h, origType: g, data: i, handler: n, guid: n.guid, selector: r, needsContext: r && E.expr.match.needsContext.test(r), namespace: p.join(".") }, o)),
                                  (d = l[h]) || (((d = l[h] = []).delegateCount = 0), (f.setup && !1 !== f.setup.call(e, i, p, s)) || (e.addEventListener && e.addEventListener(h, s))),
                                  f.add && (f.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)),
                                  r ? d.splice(d.delegateCount++, 0, u) : d.push(u),
                                  (E.event.global[h] = !0));
              },
              remove: function (e, t, n, i, r) {
                  var o,
                      s,
                      a,
                      l,
                      c,
                      u,
                      f,
                      d,
                      h,
                      p,
                      g,
                      m = G.hasData(e) && G.get(e);
                  if (m && (l = m.events)) {
                      for (c = (t = (t || "").match(M) || [""]).length; c--; )
                          if (((h = g = (a = we.exec(t[c]) || [])[1]), (p = (a[2] || "").split(".").sort()), h)) {
                              for (f = E.event.special[h] || {}, d = l[(h = (i ? f.delegateType : f.bindType) || h)] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = d.length; o--; )
                                  (u = d[o]),
                                      (!r && g !== u.origType) ||
                                          (n && n.guid !== u.guid) ||
                                          (a && !a.test(u.namespace)) ||
                                          (i && i !== u.selector && ("**" !== i || !u.selector)) ||
                                          (d.splice(o, 1), u.selector && d.delegateCount--, f.remove && f.remove.call(e, u));
                              s && !d.length && ((f.teardown && !1 !== f.teardown.call(e, p, m.handle)) || E.removeEvent(e, h, m.handle), delete l[h]);
                          } else for (h in l) E.event.remove(e, h + t[c], n, i, !0);
                      E.isEmptyObject(l) && G.remove(e, "handle events");
                  }
              },
              dispatch: function (e) {
                  var t,
                      n,
                      i,
                      r,
                      o,
                      s,
                      a = new Array(arguments.length),
                      l = E.event.fix(e),
                      c = (G.get(this, "events") || Object.create(null))[l.type] || [],
                      u = E.event.special[l.type] || {};
                  for (a[0] = l, t = 1; t < arguments.length; t++) a[t] = arguments[t];
                  if (((l.delegateTarget = this), !u.preDispatch || !1 !== u.preDispatch.call(this, l))) {
                      for (s = E.event.handlers.call(this, l, c), t = 0; (r = s[t++]) && !l.isPropagationStopped(); )
                          for (l.currentTarget = r.elem, n = 0; (o = r.handlers[n++]) && !l.isImmediatePropagationStopped(); )
                              (l.rnamespace && !1 !== o.namespace && !l.rnamespace.test(o.namespace)) ||
                                  ((l.handleObj = o), (l.data = o.data), void 0 !== (i = ((E.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, a)) && !1 === (l.result = i) && (l.preventDefault(), l.stopPropagation()));
                      return u.postDispatch && u.postDispatch.call(this, l), l.result;
                  }
              },
              handlers: function (e, t) {
                  var n,
                      i,
                      r,
                      o,
                      s,
                      a = [],
                      l = t.delegateCount,
                      c = e.target;
                  if (l && c.nodeType && !("click" === e.type && e.button >= 1))
                      for (; c !== this; c = c.parentNode || this)
                          if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                              for (o = [], s = {}, n = 0; n < l; n++) void 0 === s[(r = (i = t[n]).selector + " ")] && (s[r] = i.needsContext ? E(r, this).index(c) > -1 : E.find(r, this, null, [c]).length), s[r] && o.push(i);
                              o.length && a.push({ elem: c, handlers: o });
                          }
                  return (c = this), l < t.length && a.push({ elem: c, handlers: t.slice(l) }), a;
              },
              addProp: function (e, t) {
                  Object.defineProperty(E.Event.prototype, e, {
                      enumerable: !0,
                      configurable: !0,
                      get: v(t)
                          ? function () {
                                if (this.originalEvent) return t(this.originalEvent);
                            }
                          : function () {
                                if (this.originalEvent) return this.originalEvent[e];
                            },
                      set: function (t) {
                          Object.defineProperty(this, e, { enumerable: !0, configurable: !0, writable: !0, value: t });
                      },
                  });
              },
              fix: function (e) {
                  return e[E.expando] ? e : new E.Event(e);
              },
              special: {
                  load: { noBubble: !0 },
                  click: {
                      setup: function (e) {
                          var t = this || e;
                          return he.test(t.type) && t.click && O(t, "input") && Ae(t, "click", xe), !1;
                      },
                      trigger: function (e) {
                          var t = this || e;
                          return he.test(t.type) && t.click && O(t, "input") && Ae(t, "click"), !0;
                      },
                      _default: function (e) {
                          var t = e.target;
                          return (he.test(t.type) && t.click && O(t, "input") && G.get(t, "click")) || O(t, "a");
                      },
                  },
                  beforeunload: {
                      postDispatch: function (e) {
                          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
                      },
                  },
              },
          }),
              (E.removeEvent = function (e, t, n) {
                  e.removeEventListener && e.removeEventListener(t, n);
              }),
              (E.Event = function (e, t) {
                  if (!(this instanceof E.Event)) return new E.Event(e, t);
                  e && e.type
                      ? ((this.originalEvent = e),
                        (this.type = e.type),
                        (this.isDefaultPrevented = e.defaultPrevented || (void 0 === e.defaultPrevented && !1 === e.returnValue) ? xe : Ee),
                        (this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target),
                        (this.currentTarget = e.currentTarget),
                        (this.relatedTarget = e.relatedTarget))
                      : (this.type = e),
                      t && E.extend(this, t),
                      (this.timeStamp = (e && e.timeStamp) || Date.now()),
                      (this[E.expando] = !0);
              }),
              (E.Event.prototype = {
                  constructor: E.Event,
                  isDefaultPrevented: Ee,
                  isPropagationStopped: Ee,
                  isImmediatePropagationStopped: Ee,
                  isSimulated: !1,
                  preventDefault: function () {
                      var e = this.originalEvent;
                      (this.isDefaultPrevented = xe), e && !this.isSimulated && e.preventDefault();
                  },
                  stopPropagation: function () {
                      var e = this.originalEvent;
                      (this.isPropagationStopped = xe), e && !this.isSimulated && e.stopPropagation();
                  },
                  stopImmediatePropagation: function () {
                      var e = this.originalEvent;
                      (this.isImmediatePropagationStopped = xe), e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
                  },
              }),
              E.each(
                  {
                      altKey: !0,
                      bubbles: !0,
                      cancelable: !0,
                      changedTouches: !0,
                      ctrlKey: !0,
                      detail: !0,
                      eventPhase: !0,
                      metaKey: !0,
                      pageX: !0,
                      pageY: !0,
                      shiftKey: !0,
                      view: !0,
                      char: !0,
                      code: !0,
                      charCode: !0,
                      key: !0,
                      keyCode: !0,
                      button: !0,
                      buttons: !0,
                      clientX: !0,
                      clientY: !0,
                      offsetX: !0,
                      offsetY: !0,
                      pointerId: !0,
                      pointerType: !0,
                      screenX: !0,
                      screenY: !0,
                      targetTouches: !0,
                      toElement: !0,
                      touches: !0,
                      which: !0,
                  },
                  E.event.addProp
              ),
              E.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
                  E.event.special[e] = {
                      setup: function () {
                          return Ae(this, e, Te), !1;
                      },
                      trigger: function () {
                          return Ae(this, e), !0;
                      },
                      _default: function () {
                          return !0;
                      },
                      delegateType: t,
                  };
              }),
              E.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (e, t) {
                  E.event.special[e] = {
                      delegateType: t,
                      bindType: t,
                      handle: function (e) {
                          var n,
                              i = e.relatedTarget,
                              r = e.handleObj;
                          return (i && (i === this || E.contains(this, i))) || ((e.type = r.origType), (n = r.handler.apply(this, arguments)), (e.type = t)), n;
                      },
                  };
              }),
              E.fn.extend({
                  on: function (e, t, n, i) {
                      return Ce(this, e, t, n, i);
                  },
                  one: function (e, t, n, i) {
                      return Ce(this, e, t, n, i, 1);
                  },
                  off: function (e, t, n) {
                      var i, r;
                      if (e && e.preventDefault && e.handleObj) return (i = e.handleObj), E(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                      if ("object" == typeof e) {
                          for (r in e) this.off(r, t, e[r]);
                          return this;
                      }
                      return (
                          (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
                          !1 === n && (n = Ee),
                          this.each(function () {
                              E.event.remove(this, e, n, t);
                          })
                      );
                  },
              });
          var ke = /<script|<style|<link/i,
              Se = /checked\s*(?:[^=]|=\s*.checked.)/i,
              Oe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
          function De(e, t) {
              return (O(e, "table") && O(11 !== t.nodeType ? t : t.firstChild, "tr") && E(e).children("tbody")[0]) || e;
          }
          function Ne(e) {
              return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
          }
          function Le(e) {
              return "true/" === (e.type || "").slice(0, 5) ? (e.type = e.type.slice(5)) : e.removeAttribute("type"), e;
          }
          function je(e, t) {
              var n, i, r, o, s, a;
              if (1 === t.nodeType) {
                  if (G.hasData(e) && (a = G.get(e).events)) for (r in (G.remove(t, "handle events"), a)) for (n = 0, i = a[r].length; n < i; n++) E.event.add(t, r, a[r][n]);
                  J.hasData(e) && ((o = J.access(e)), (s = E.extend({}, o)), J.set(t, s));
              }
          }
          function Ie(e, t) {
              var n = t.nodeName.toLowerCase();
              "input" === n && he.test(e.type) ? (t.checked = e.checked) : ("input" !== n && "textarea" !== n) || (t.defaultValue = e.defaultValue);
          }
          function Pe(e, t, n, i) {
              t = l(t);
              var r,
                  o,
                  s,
                  a,
                  c,
                  u,
                  f = 0,
                  d = e.length,
                  h = d - 1,
                  p = t[0],
                  g = v(p);
              if (g || (d > 1 && "string" == typeof p && !m.checkClone && Se.test(p)))
                  return e.each(function (r) {
                      var o = e.eq(r);
                      g && (t[0] = p.call(this, r, o.html())), Pe(o, t, n, i);
                  });
              if (d && ((o = (r = _e(t, e[0].ownerDocument, !1, e, i)).firstChild), 1 === r.childNodes.length && (r = o), o || i)) {
                  for (a = (s = E.map(ve(r, "script"), Ne)).length; f < d; f++) (c = r), f !== h && ((c = E.clone(c, !0, !0)), a && E.merge(s, ve(c, "script"))), n.call(e[f], c, f);
                  if (a)
                      for (u = s[s.length - 1].ownerDocument, E.map(s, Le), f = 0; f < a; f++)
                          (c = s[f]),
                              ge.test(c.type || "") &&
                                  !G.access(c, "globalEval") &&
                                  E.contains(u, c) &&
                                  (c.src && "module" !== (c.type || "").toLowerCase() ? E._evalUrl && !c.noModule && E._evalUrl(c.src, { nonce: c.nonce || c.getAttribute("nonce") }, u) : w(c.textContent.replace(Oe, ""), c, u));
              }
              return e;
          }
          function He(e, t, n) {
              for (var i, r = t ? E.filter(t, e) : e, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || E.cleanData(ve(i)), i.parentNode && (n && se(i) && ye(ve(i, "script")), i.parentNode.removeChild(i));
              return e;
          }
          E.extend({
              htmlPrefilter: function (e) {
                  return e;
              },
              clone: function (e, t, n) {
                  var i,
                      r,
                      o,
                      s,
                      a = e.cloneNode(!0),
                      l = se(e);
                  if (!(m.noCloneChecked || (1 !== e.nodeType && 11 !== e.nodeType) || E.isXMLDoc(e))) for (s = ve(a), i = 0, r = (o = ve(e)).length; i < r; i++) Ie(o[i], s[i]);
                  if (t)
                      if (n) for (o = o || ve(e), s = s || ve(a), i = 0, r = o.length; i < r; i++) je(o[i], s[i]);
                      else je(e, a);
                  return (s = ve(a, "script")).length > 0 && ye(s, !l && ve(e, "script")), a;
              },
              cleanData: function (e) {
                  for (var t, n, i, r = E.event.special, o = 0; void 0 !== (n = e[o]); o++)
                      if (K(n)) {
                          if ((t = n[G.expando])) {
                              if (t.events) for (i in t.events) r[i] ? E.event.remove(n, i) : E.removeEvent(n, i, t.handle);
                              n[G.expando] = void 0;
                          }
                          n[J.expando] && (n[J.expando] = void 0);
                      }
              },
          }),
              E.fn.extend({
                  detach: function (e) {
                      return He(this, e, !0);
                  },
                  remove: function (e) {
                      return He(this, e);
                  },
                  text: function (e) {
                      return z(
                          this,
                          function (e) {
                              return void 0 === e
                                  ? E.text(this)
                                  : this.empty().each(function () {
                                        (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || (this.textContent = e);
                                    });
                          },
                          null,
                          e,
                          arguments.length
                      );
                  },
                  append: function () {
                      return Pe(this, arguments, function (e) {
                          (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || De(this, e).appendChild(e);
                      });
                  },
                  prepend: function () {
                      return Pe(this, arguments, function (e) {
                          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                              var t = De(this, e);
                              t.insertBefore(e, t.firstChild);
                          }
                      });
                  },
                  before: function () {
                      return Pe(this, arguments, function (e) {
                          this.parentNode && this.parentNode.insertBefore(e, this);
                      });
                  },
                  after: function () {
                      return Pe(this, arguments, function (e) {
                          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
                      });
                  },
                  empty: function () {
                      for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (E.cleanData(ve(e, !1)), (e.textContent = ""));
                      return this;
                  },
                  clone: function (e, t) {
                      return (
                          (e = null != e && e),
                          (t = null == t ? e : t),
                          this.map(function () {
                              return E.clone(this, e, t);
                          })
                      );
                  },
                  html: function (e) {
                      return z(
                          this,
                          function (e) {
                              var t = this[0] || {},
                                  n = 0,
                                  i = this.length;
                              if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                              if ("string" == typeof e && !ke.test(e) && !me[(pe.exec(e) || ["", ""])[1].toLowerCase()]) {
                                  e = E.htmlPrefilter(e);
                                  try {
                                      for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (E.cleanData(ve(t, !1)), (t.innerHTML = e));
                                      t = 0;
                                  } catch (e) {}
                              }
                              t && this.empty().append(e);
                          },
                          null,
                          e,
                          arguments.length
                      );
                  },
                  replaceWith: function () {
                      var e = [];
                      return Pe(
                          this,
                          arguments,
                          function (t) {
                              var n = this.parentNode;
                              E.inArray(this, e) < 0 && (E.cleanData(ve(this)), n && n.replaceChild(t, this));
                          },
                          e
                      );
                  },
              }),
              E.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, t) {
                  E.fn[e] = function (e) {
                      for (var n, i = [], r = E(e), o = r.length - 1, s = 0; s <= o; s++) (n = s === o ? this : this.clone(!0)), E(r[s])[t](n), c.apply(i, n.get());
                      return this.pushStack(i);
                  };
              });
          var Me = new RegExp("^(" + ne + ")(?!px)[a-z%]+$", "i"),
              qe = function (e) {
                  var t = e.ownerDocument.defaultView;
                  return (t && t.opener) || (t = n), t.getComputedStyle(e);
              },
              $e = function (e, t, n) {
                  var i,
                      r,
                      o = {};
                  for (r in t) (o[r] = e.style[r]), (e.style[r] = t[r]);
                  for (r in ((i = n.call(e)), t)) e.style[r] = o[r];
                  return i;
              },
              Re = new RegExp(re.join("|"), "i");
          function Be(e, t, n) {
              var i,
                  r,
                  o,
                  s,
                  a = e.style;
              return (
                  (n = n || qe(e)) &&
                      ("" !== (s = n.getPropertyValue(t) || n[t]) || se(e) || (s = E.style(e, t)),
                      !m.pixelBoxStyles() && Me.test(s) && Re.test(t) && ((i = a.width), (r = a.minWidth), (o = a.maxWidth), (a.minWidth = a.maxWidth = a.width = s), (s = n.width), (a.width = i), (a.minWidth = r), (a.maxWidth = o))),
                  void 0 !== s ? s + "" : s
              );
          }
          function We(e, t) {
              return {
                  get: function () {
                      if (!e()) return (this.get = t).apply(this, arguments);
                      delete this.get;
                  },
              };
          }
          !(function () {
              function e() {
                  if (u) {
                      (c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                          (u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                          oe.appendChild(c).appendChild(u);
                      var e = n.getComputedStyle(u);
                      (i = "1%" !== e.top),
                          (l = 12 === t(e.marginLeft)),
                          (u.style.right = "60%"),
                          (s = 36 === t(e.right)),
                          (r = 36 === t(e.width)),
                          (u.style.position = "absolute"),
                          (o = 12 === t(u.offsetWidth / 3)),
                          oe.removeChild(c),
                          (u = null);
                  }
              }
              function t(e) {
                  return Math.round(parseFloat(e));
              }
              var i,
                  r,
                  o,
                  s,
                  a,
                  l,
                  c = b.createElement("div"),
                  u = b.createElement("div");
              u.style &&
                  ((u.style.backgroundClip = "content-box"),
                  (u.cloneNode(!0).style.backgroundClip = ""),
                  (m.clearCloneStyle = "content-box" === u.style.backgroundClip),
                  E.extend(m, {
                      boxSizingReliable: function () {
                          return e(), r;
                      },
                      pixelBoxStyles: function () {
                          return e(), s;
                      },
                      pixelPosition: function () {
                          return e(), i;
                      },
                      reliableMarginLeft: function () {
                          return e(), l;
                      },
                      scrollboxSize: function () {
                          return e(), o;
                      },
                      reliableTrDimensions: function () {
                          var e, t, i, r;
                          return (
                              null == a &&
                                  ((e = b.createElement("table")),
                                  (t = b.createElement("tr")),
                                  (i = b.createElement("div")),
                                  (e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate"),
                                  (t.style.cssText = "border:1px solid"),
                                  (t.style.height = "1px"),
                                  (i.style.height = "9px"),
                                  (i.style.display = "block"),
                                  oe.appendChild(e).appendChild(t).appendChild(i),
                                  (r = n.getComputedStyle(t)),
                                  (a = parseInt(r.height, 10) + parseInt(r.borderTopWidth, 10) + parseInt(r.borderBottomWidth, 10) === t.offsetHeight),
                                  oe.removeChild(e)),
                              a
                          );
                      },
                  }));
          })();
          var Fe = ["Webkit", "Moz", "ms"],
              ze = b.createElement("div").style,
              Ue = {};
          function Ve(e) {
              var t = E.cssProps[e] || Ue[e];
              return (
                  t ||
                  (e in ze
                      ? e
                      : (Ue[e] =
                            (function (e) {
                                for (var t = e[0].toUpperCase() + e.slice(1), n = Fe.length; n--; ) if ((e = Fe[n] + t) in ze) return e;
                            })(e) || e))
              );
          }
          var Xe = /^(none|table(?!-c[ea]).+)/,
              Ye = /^--/,
              Ke = { position: "absolute", visibility: "hidden", display: "block" },
              Qe = { letterSpacing: "0", fontWeight: "400" };
          function Ge(e, t, n) {
              var i = ie.exec(t);
              return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
          }
          function Je(e, t, n, i, r, o) {
              var s = "width" === t ? 1 : 0,
                  a = 0,
                  l = 0;
              if (n === (i ? "border" : "content")) return 0;
              for (; s < 4; s += 2)
                  "margin" === n && (l += E.css(e, n + re[s], !0, r)),
                      i
                          ? ("content" === n && (l -= E.css(e, "padding" + re[s], !0, r)), "margin" !== n && (l -= E.css(e, "border" + re[s] + "Width", !0, r)))
                          : ((l += E.css(e, "padding" + re[s], !0, r)), "padding" !== n ? (l += E.css(e, "border" + re[s] + "Width", !0, r)) : (a += E.css(e, "border" + re[s] + "Width", !0, r)));
              return !i && o >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - l - a - 0.5)) || 0), l;
          }
          function Ze(e, t, n) {
              var i = qe(e),
                  r = (!m.boxSizingReliable() || n) && "border-box" === E.css(e, "boxSizing", !1, i),
                  o = r,
                  s = Be(e, t, i),
                  a = "offset" + t[0].toUpperCase() + t.slice(1);
              if (Me.test(s)) {
                  if (!n) return s;
                  s = "auto";
              }
              return (
                  ((!m.boxSizingReliable() && r) || (!m.reliableTrDimensions() && O(e, "tr")) || "auto" === s || (!parseFloat(s) && "inline" === E.css(e, "display", !1, i))) &&
                      e.getClientRects().length &&
                      ((r = "border-box" === E.css(e, "boxSizing", !1, i)), (o = a in e) && (s = e[a])),
                  (s = parseFloat(s) || 0) + Je(e, t, n || (r ? "border" : "content"), o, i, s) + "px"
              );
          }
          function et(e, t, n, i, r) {
              return new et.prototype.init(e, t, n, i, r);
          }
          E.extend({
              cssHooks: {
                  opacity: {
                      get: function (e, t) {
                          if (t) {
                              var n = Be(e, "opacity");
                              return "" === n ? "1" : n;
                          }
                      },
                  },
              },
              cssNumber: {
                  animationIterationCount: !0,
                  columnCount: !0,
                  fillOpacity: !0,
                  flexGrow: !0,
                  flexShrink: !0,
                  fontWeight: !0,
                  gridArea: !0,
                  gridColumn: !0,
                  gridColumnEnd: !0,
                  gridColumnStart: !0,
                  gridRow: !0,
                  gridRowEnd: !0,
                  gridRowStart: !0,
                  lineHeight: !0,
                  opacity: !0,
                  order: !0,
                  orphans: !0,
                  widows: !0,
                  zIndex: !0,
                  zoom: !0,
              },
              cssProps: {},
              style: function (e, t, n, i) {
                  if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                      var r,
                          o,
                          s,
                          a = Y(t),
                          l = Ye.test(t),
                          c = e.style;
                      if ((l || (t = Ve(a)), (s = E.cssHooks[t] || E.cssHooks[a]), void 0 === n)) return s && "get" in s && void 0 !== (r = s.get(e, !1, i)) ? r : c[t];
                      "string" === (o = typeof n) && (r = ie.exec(n)) && r[1] && ((n = ce(e, t, r)), (o = "number")),
                          null != n &&
                              n == n &&
                              ("number" !== o || l || (n += (r && r[3]) || (E.cssNumber[a] ? "" : "px")),
                              m.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"),
                              (s && "set" in s && void 0 === (n = s.set(e, n, i))) || (l ? c.setProperty(t, n) : (c[t] = n)));
                  }
              },
              css: function (e, t, n, i) {
                  var r,
                      o,
                      s,
                      a = Y(t);
                  return (
                      Ye.test(t) || (t = Ve(a)),
                      (s = E.cssHooks[t] || E.cssHooks[a]) && "get" in s && (r = s.get(e, !0, n)),
                      void 0 === r && (r = Be(e, t, i)),
                      "normal" === r && t in Qe && (r = Qe[t]),
                      "" === n || n ? ((o = parseFloat(r)), !0 === n || isFinite(o) ? o || 0 : r) : r
                  );
              },
          }),
              E.each(["height", "width"], function (e, t) {
                  E.cssHooks[t] = {
                      get: function (e, n, i) {
                          if (n)
                              return !Xe.test(E.css(e, "display")) || (e.getClientRects().length && e.getBoundingClientRect().width)
                                  ? Ze(e, t, i)
                                  : $e(e, Ke, function () {
                                        return Ze(e, t, i);
                                    });
                      },
                      set: function (e, n, i) {
                          var r,
                              o = qe(e),
                              s = !m.scrollboxSize() && "absolute" === o.position,
                              a = (s || i) && "border-box" === E.css(e, "boxSizing", !1, o),
                              l = i ? Je(e, t, i, a, o) : 0;
                          return (
                              a && s && (l -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - Je(e, t, "border", !1, o) - 0.5)),
                              l && (r = ie.exec(n)) && "px" !== (r[3] || "px") && ((e.style[t] = n), (n = E.css(e, t))),
                              Ge(0, n, l)
                          );
                      },
                  };
              }),
              (E.cssHooks.marginLeft = We(m.reliableMarginLeft, function (e, t) {
                  if (t)
                      return (
                          (parseFloat(Be(e, "marginLeft")) ||
                              e.getBoundingClientRect().left -
                                  $e(e, { marginLeft: 0 }, function () {
                                      return e.getBoundingClientRect().left;
                                  })) + "px"
                      );
              })),
              E.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
                  (E.cssHooks[e + t] = {
                      expand: function (n) {
                          for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[e + re[i] + t] = o[i] || o[i - 2] || o[0];
                          return r;
                      },
                  }),
                      "margin" !== e && (E.cssHooks[e + t].set = Ge);
              }),
              E.fn.extend({
                  css: function (e, t) {
                      return z(
                          this,
                          function (e, t, n) {
                              var i,
                                  r,
                                  o = {},
                                  s = 0;
                              if (Array.isArray(t)) {
                                  for (i = qe(e), r = t.length; s < r; s++) o[t[s]] = E.css(e, t[s], !1, i);
                                  return o;
                              }
                              return void 0 !== n ? E.style(e, t, n) : E.css(e, t);
                          },
                          e,
                          t,
                          arguments.length > 1
                      );
                  },
              }),
              (E.Tween = et),
              (et.prototype = {
                  constructor: et,
                  init: function (e, t, n, i, r, o) {
                      (this.elem = e), (this.prop = n), (this.easing = r || E.easing._default), (this.options = t), (this.start = this.now = this.cur()), (this.end = i), (this.unit = o || (E.cssNumber[n] ? "" : "px"));
                  },
                  cur: function () {
                      var e = et.propHooks[this.prop];
                      return e && e.get ? e.get(this) : et.propHooks._default.get(this);
                  },
                  run: function (e) {
                      var t,
                          n = et.propHooks[this.prop];
                      return (
                          this.options.duration ? (this.pos = t = E.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration)) : (this.pos = t = e),
                          (this.now = (this.end - this.start) * t + this.start),
                          this.options.step && this.options.step.call(this.elem, this.now, this),
                          n && n.set ? n.set(this) : et.propHooks._default.set(this),
                          this
                      );
                  },
              }),
              (et.prototype.init.prototype = et.prototype),
              (et.propHooks = {
                  _default: {
                      get: function (e) {
                          var t;
                          return 1 !== e.elem.nodeType || (null != e.elem[e.prop] && null == e.elem.style[e.prop]) ? e.elem[e.prop] : (t = E.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
                      },
                      set: function (e) {
                          E.fx.step[e.prop] ? E.fx.step[e.prop](e) : 1 !== e.elem.nodeType || (!E.cssHooks[e.prop] && null == e.elem.style[Ve(e.prop)]) ? (e.elem[e.prop] = e.now) : E.style(e.elem, e.prop, e.now + e.unit);
                      },
                  },
              }),
              (et.propHooks.scrollTop = et.propHooks.scrollLeft = {
                  set: function (e) {
                      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
                  },
              }),
              (E.easing = {
                  linear: function (e) {
                      return e;
                  },
                  swing: function (e) {
                      return 0.5 - Math.cos(e * Math.PI) / 2;
                  },
                  _default: "swing",
              }),
              (E.fx = et.prototype.init),
              (E.fx.step = {});
          var tt,
              nt,
              it = /^(?:toggle|show|hide)$/,
              rt = /queueHooks$/;
          function ot() {
              nt && (!1 === b.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(ot) : n.setTimeout(ot, E.fx.interval), E.fx.tick());
          }
          function st() {
              return (
                  n.setTimeout(function () {
                      tt = void 0;
                  }),
                  (tt = Date.now())
              );
          }
          function at(e, t) {
              var n,
                  i = 0,
                  r = { height: e };
              for (t = t ? 1 : 0; i < 4; i += 2 - t) r["margin" + (n = re[i])] = r["padding" + n] = e;
              return t && (r.opacity = r.width = e), r;
          }
          function lt(e, t, n) {
              for (var i, r = (ct.tweeners[t] || []).concat(ct.tweeners["*"]), o = 0, s = r.length; o < s; o++) if ((i = r[o].call(n, t, e))) return i;
          }
          function ct(e, t, n) {
              var i,
                  r,
                  o = 0,
                  s = ct.prefilters.length,
                  a = E.Deferred().always(function () {
                      delete l.elem;
                  }),
                  l = function () {
                      if (r) return !1;
                      for (var t = tt || st(), n = Math.max(0, c.startTime + c.duration - t), i = 1 - (n / c.duration || 0), o = 0, s = c.tweens.length; o < s; o++) c.tweens[o].run(i);
                      return a.notifyWith(e, [c, i, n]), i < 1 && s ? n : (s || a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c]), !1);
                  },
                  c = a.promise({
                      elem: e,
                      props: E.extend({}, t),
                      opts: E.extend(!0, { specialEasing: {}, easing: E.easing._default }, n),
                      originalProperties: t,
                      originalOptions: n,
                      startTime: tt || st(),
                      duration: n.duration,
                      tweens: [],
                      createTween: function (t, n) {
                          var i = E.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                          return c.tweens.push(i), i;
                      },
                      stop: function (t) {
                          var n = 0,
                              i = t ? c.tweens.length : 0;
                          if (r) return this;
                          for (r = !0; n < i; n++) c.tweens[n].run(1);
                          return t ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t])) : a.rejectWith(e, [c, t]), this;
                      },
                  }),
                  u = c.props;
              for (
                  !(function (e, t) {
                      var n, i, r, o, s;
                      for (n in e)
                          if (((r = t[(i = Y(n))]), (o = e[n]), Array.isArray(o) && ((r = o[1]), (o = e[n] = o[0])), n !== i && ((e[i] = o), delete e[n]), (s = E.cssHooks[i]) && ("expand" in s)))
                              for (n in ((o = s.expand(o)), delete e[i], o)) (n in e) || ((e[n] = o[n]), (t[n] = r));
                          else t[i] = r;
                  })(u, c.opts.specialEasing);
                  o < s;
                  o++
              )
                  if ((i = ct.prefilters[o].call(c, e, u, c.opts))) return v(i.stop) && (E._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)), i;
              return (
                  E.map(u, lt, c),
                  v(c.opts.start) && c.opts.start.call(e, c),
                  c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always),
                  E.fx.timer(E.extend(l, { elem: e, anim: c, queue: c.opts.queue })),
                  c
              );
          }
          (E.Animation = E.extend(ct, {
              tweeners: {
                  "*": [
                      function (e, t) {
                          var n = this.createTween(e, t);
                          return ce(n.elem, e, ie.exec(t), n), n;
                      },
                  ],
              },
              tweener: function (e, t) {
                  v(e) ? ((t = e), (e = ["*"])) : (e = e.match(M));
                  for (var n, i = 0, r = e.length; i < r; i++) (n = e[i]), (ct.tweeners[n] = ct.tweeners[n] || []), ct.tweeners[n].unshift(t);
              },
              prefilters: [
                  function (e, t, n) {
                      var i,
                          r,
                          o,
                          s,
                          a,
                          l,
                          c,
                          u,
                          f = "width" in t || "height" in t,
                          d = this,
                          h = {},
                          p = e.style,
                          g = e.nodeType && le(e),
                          m = G.get(e, "fxshow");
                      for (i in (n.queue ||
                          (null == (s = E._queueHooks(e, "fx")).unqueued &&
                              ((s.unqueued = 0),
                              (a = s.empty.fire),
                              (s.empty.fire = function () {
                                  s.unqueued || a();
                              })),
                          s.unqueued++,
                          d.always(function () {
                              d.always(function () {
                                  s.unqueued--, E.queue(e, "fx").length || s.empty.fire();
                              });
                          })),
                      t))
                          if (((r = t[i]), it.test(r))) {
                              if ((delete t[i], (o = o || "toggle" === r), r === (g ? "hide" : "show"))) {
                                  if ("show" !== r || !m || void 0 === m[i]) continue;
                                  g = !0;
                              }
                              h[i] = (m && m[i]) || E.style(e, i);
                          }
                      if ((l = !E.isEmptyObject(t)) || !E.isEmptyObject(h))
                          for (i in (f &&
                              1 === e.nodeType &&
                              ((n.overflow = [p.overflow, p.overflowX, p.overflowY]),
                              null == (c = m && m.display) && (c = G.get(e, "display")),
                              "none" === (u = E.css(e, "display")) && (c ? (u = c) : (de([e], !0), (c = e.style.display || c), (u = E.css(e, "display")), de([e]))),
                              ("inline" === u || ("inline-block" === u && null != c)) &&
                                  "none" === E.css(e, "float") &&
                                  (l ||
                                      (d.done(function () {
                                          p.display = c;
                                      }),
                                      null == c && ((u = p.display), (c = "none" === u ? "" : u))),
                                  (p.display = "inline-block"))),
                          n.overflow &&
                              ((p.overflow = "hidden"),
                              d.always(function () {
                                  (p.overflow = n.overflow[0]), (p.overflowX = n.overflow[1]), (p.overflowY = n.overflow[2]);
                              })),
                          (l = !1),
                          h))
                              l ||
                                  (m ? "hidden" in m && (g = m.hidden) : (m = G.access(e, "fxshow", { display: c })),
                                  o && (m.hidden = !g),
                                  g && de([e], !0),
                                  d.done(function () {
                                      for (i in (g || de([e]), G.remove(e, "fxshow"), h)) E.style(e, i, h[i]);
                                  })),
                                  (l = lt(g ? m[i] : 0, i, d)),
                                  i in m || ((m[i] = l.start), g && ((l.end = l.start), (l.start = 0)));
                  },
              ],
              prefilter: function (e, t) {
                  t ? ct.prefilters.unshift(e) : ct.prefilters.push(e);
              },
          })),
              (E.speed = function (e, t, n) {
                  var i = e && "object" == typeof e ? E.extend({}, e) : { complete: n || (!n && t) || (v(e) && e), duration: e, easing: (n && t) || (t && !v(t) && t) };
                  return (
                      E.fx.off ? (i.duration = 0) : "number" != typeof i.duration && (i.duration in E.fx.speeds ? (i.duration = E.fx.speeds[i.duration]) : (i.duration = E.fx.speeds._default)),
                      (null != i.queue && !0 !== i.queue) || (i.queue = "fx"),
                      (i.old = i.complete),
                      (i.complete = function () {
                          v(i.old) && i.old.call(this), i.queue && E.dequeue(this, i.queue);
                      }),
                      i
                  );
              }),
              E.fn.extend({
                  fadeTo: function (e, t, n, i) {
                      return this.filter(le).css("opacity", 0).show().end().animate({ opacity: t }, e, n, i);
                  },
                  animate: function (e, t, n, i) {
                      var r = E.isEmptyObject(e),
                          o = E.speed(t, n, i),
                          s = function () {
                              var t = ct(this, E.extend({}, e), o);
                              (r || G.get(this, "finish")) && t.stop(!0);
                          };
                      return (s.finish = s), r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s);
                  },
                  stop: function (e, t, n) {
                      var i = function (e) {
                          var t = e.stop;
                          delete e.stop, t(n);
                      };
                      return (
                          "string" != typeof e && ((n = t), (t = e), (e = void 0)),
                          t && this.queue(e || "fx", []),
                          this.each(function () {
                              var t = !0,
                                  r = null != e && e + "queueHooks",
                                  o = E.timers,
                                  s = G.get(this);
                              if (r) s[r] && s[r].stop && i(s[r]);
                              else for (r in s) s[r] && s[r].stop && rt.test(r) && i(s[r]);
                              for (r = o.length; r--; ) o[r].elem !== this || (null != e && o[r].queue !== e) || (o[r].anim.stop(n), (t = !1), o.splice(r, 1));
                              (!t && n) || E.dequeue(this, e);
                          })
                      );
                  },
                  finish: function (e) {
                      return (
                          !1 !== e && (e = e || "fx"),
                          this.each(function () {
                              var t,
                                  n = G.get(this),
                                  i = n[e + "queue"],
                                  r = n[e + "queueHooks"],
                                  o = E.timers,
                                  s = i ? i.length : 0;
                              for (n.finish = !0, E.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--; ) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                              for (t = 0; t < s; t++) i[t] && i[t].finish && i[t].finish.call(this);
                              delete n.finish;
                          })
                      );
                  },
              }),
              E.each(["toggle", "show", "hide"], function (e, t) {
                  var n = E.fn[t];
                  E.fn[t] = function (e, i, r) {
                      return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(at(t, !0), e, i, r);
                  };
              }),
              E.each({ slideDown: at("show"), slideUp: at("hide"), slideToggle: at("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, t) {
                  E.fn[e] = function (e, n, i) {
                      return this.animate(t, e, n, i);
                  };
              }),
              (E.timers = []),
              (E.fx.tick = function () {
                  var e,
                      t = 0,
                      n = E.timers;
                  for (tt = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
                  n.length || E.fx.stop(), (tt = void 0);
              }),
              (E.fx.timer = function (e) {
                  E.timers.push(e), E.fx.start();
              }),
              (E.fx.interval = 13),
              (E.fx.start = function () {
                  nt || ((nt = !0), ot());
              }),
              (E.fx.stop = function () {
                  nt = null;
              }),
              (E.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
              (E.fn.delay = function (e, t) {
                  return (
                      (e = (E.fx && E.fx.speeds[e]) || e),
                      (t = t || "fx"),
                      this.queue(t, function (t, i) {
                          var r = n.setTimeout(t, e);
                          i.stop = function () {
                              n.clearTimeout(r);
                          };
                      })
                  );
              }),
              (function () {
                  var e = b.createElement("input"),
                      t = b.createElement("select").appendChild(b.createElement("option"));
                  (e.type = "checkbox"), (m.checkOn = "" !== e.value), (m.optSelected = t.selected), ((e = b.createElement("input")).value = "t"), (e.type = "radio"), (m.radioValue = "t" === e.value);
              })();
          var ut,
              ft = E.expr.attrHandle;
          E.fn.extend({
              attr: function (e, t) {
                  return z(this, E.attr, e, t, arguments.length > 1);
              },
              removeAttr: function (e) {
                  return this.each(function () {
                      E.removeAttr(this, e);
                  });
              },
          }),
              E.extend({
                  attr: function (e, t, n) {
                      var i,
                          r,
                          o = e.nodeType;
                      if (3 !== o && 8 !== o && 2 !== o)
                          return void 0 === e.getAttribute
                              ? E.prop(e, t, n)
                              : ((1 === o && E.isXMLDoc(e)) || (r = E.attrHooks[t.toLowerCase()] || (E.expr.match.bool.test(t) ? ut : void 0)),
                                void 0 !== n
                                    ? null === n
                                        ? void E.removeAttr(e, t)
                                        : r && "set" in r && void 0 !== (i = r.set(e, n, t))
                                        ? i
                                        : (e.setAttribute(t, n + ""), n)
                                    : r && "get" in r && null !== (i = r.get(e, t))
                                    ? i
                                    : null == (i = E.find.attr(e, t))
                                    ? void 0
                                    : i);
                  },
                  attrHooks: {
                      type: {
                          set: function (e, t) {
                              if (!m.radioValue && "radio" === t && O(e, "input")) {
                                  var n = e.value;
                                  return e.setAttribute("type", t), n && (e.value = n), t;
                              }
                          },
                      },
                  },
                  removeAttr: function (e, t) {
                      var n,
                          i = 0,
                          r = t && t.match(M);
                      if (r && 1 === e.nodeType) for (; (n = r[i++]); ) e.removeAttribute(n);
                  },
              }),
              (ut = {
                  set: function (e, t, n) {
                      return !1 === t ? E.removeAttr(e, n) : e.setAttribute(n, n), n;
                  },
              }),
              E.each(E.expr.match.bool.source.match(/\w+/g), function (e, t) {
                  var n = ft[t] || E.find.attr;
                  ft[t] = function (e, t, i) {
                      var r,
                          o,
                          s = t.toLowerCase();
                      return i || ((o = ft[s]), (ft[s] = r), (r = null != n(e, t, i) ? s : null), (ft[s] = o)), r;
                  };
              });
          var dt = /^(?:input|select|textarea|button)$/i,
              ht = /^(?:a|area)$/i;
          function pt(e) {
              return (e.match(M) || []).join(" ");
          }
          function gt(e) {
              return (e.getAttribute && e.getAttribute("class")) || "";
          }
          function mt(e) {
              return Array.isArray(e) ? e : ("string" == typeof e && e.match(M)) || [];
          }
          E.fn.extend({
              prop: function (e, t) {
                  return z(this, E.prop, e, t, arguments.length > 1);
              },
              removeProp: function (e) {
                  return this.each(function () {
                      delete this[E.propFix[e] || e];
                  });
              },
          }),
              E.extend({
                  prop: function (e, t, n) {
                      var i,
                          r,
                          o = e.nodeType;
                      if (3 !== o && 8 !== o && 2 !== o)
                          return (
                              (1 === o && E.isXMLDoc(e)) || ((t = E.propFix[t] || t), (r = E.propHooks[t])),
                              void 0 !== n ? (r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e[t] = n)) : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
                          );
                  },
                  propHooks: {
                      tabIndex: {
                          get: function (e) {
                              var t = E.find.attr(e, "tabindex");
                              return t ? parseInt(t, 10) : dt.test(e.nodeName) || (ht.test(e.nodeName) && e.href) ? 0 : -1;
                          },
                      },
                  },
                  propFix: { for: "htmlFor", class: "className" },
              }),
              m.optSelected ||
                  (E.propHooks.selected = {
                      get: function (e) {
                          var t = e.parentNode;
                          return t && t.parentNode && t.parentNode.selectedIndex, null;
                      },
                      set: function (e) {
                          var t = e.parentNode;
                          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
                      },
                  }),
              E.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
                  E.propFix[this.toLowerCase()] = this;
              }),
              E.fn.extend({
                  addClass: function (e) {
                      var t,
                          n,
                          i,
                          r,
                          o,
                          s,
                          a,
                          l = 0;
                      if (v(e))
                          return this.each(function (t) {
                              E(this).addClass(e.call(this, t, gt(this)));
                          });
                      if ((t = mt(e)).length)
                          for (; (n = this[l++]); )
                              if (((r = gt(n)), (i = 1 === n.nodeType && " " + pt(r) + " "))) {
                                  for (s = 0; (o = t[s++]); ) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                                  r !== (a = pt(i)) && n.setAttribute("class", a);
                              }
                      return this;
                  },
                  removeClass: function (e) {
                      var t,
                          n,
                          i,
                          r,
                          o,
                          s,
                          a,
                          l = 0;
                      if (v(e))
                          return this.each(function (t) {
                              E(this).removeClass(e.call(this, t, gt(this)));
                          });
                      if (!arguments.length) return this.attr("class", "");
                      if ((t = mt(e)).length)
                          for (; (n = this[l++]); )
                              if (((r = gt(n)), (i = 1 === n.nodeType && " " + pt(r) + " "))) {
                                  for (s = 0; (o = t[s++]); ) for (; i.indexOf(" " + o + " ") > -1; ) i = i.replace(" " + o + " ", " ");
                                  r !== (a = pt(i)) && n.setAttribute("class", a);
                              }
                      return this;
                  },
                  toggleClass: function (e, t) {
                      var n = typeof e,
                          i = "string" === n || Array.isArray(e);
                      return "boolean" == typeof t && i
                          ? t
                              ? this.addClass(e)
                              : this.removeClass(e)
                          : v(e)
                          ? this.each(function (n) {
                                E(this).toggleClass(e.call(this, n, gt(this), t), t);
                            })
                          : this.each(function () {
                                var t, r, o, s;
                                if (i) for (r = 0, o = E(this), s = mt(e); (t = s[r++]); ) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                                else (void 0 !== e && "boolean" !== n) || ((t = gt(this)) && G.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : G.get(this, "__className__") || ""));
                            });
                  },
                  hasClass: function (e) {
                      var t,
                          n,
                          i = 0;
                      for (t = " " + e + " "; (n = this[i++]); ) if (1 === n.nodeType && (" " + pt(gt(n)) + " ").indexOf(t) > -1) return !0;
                      return !1;
                  },
              });
          var vt = /\r/g;
          E.fn.extend({
              val: function (e) {
                  var t,
                      n,
                      i,
                      r = this[0];
                  return arguments.length
                      ? ((i = v(e)),
                        this.each(function (n) {
                            var r;
                            1 === this.nodeType &&
                                (null == (r = i ? e.call(this, n, E(this).val()) : e)
                                    ? (r = "")
                                    : "number" == typeof r
                                    ? (r += "")
                                    : Array.isArray(r) &&
                                      (r = E.map(r, function (e) {
                                          return null == e ? "" : e + "";
                                      })),
                                ((t = E.valHooks[this.type] || E.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, r, "value")) || (this.value = r));
                        }))
                      : r
                      ? (t = E.valHooks[r.type] || E.valHooks[r.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(r, "value"))
                          ? n
                          : "string" == typeof (n = r.value)
                          ? n.replace(vt, "")
                          : null == n
                          ? ""
                          : n
                      : void 0;
              },
          }),
              E.extend({
                  valHooks: {
                      option: {
                          get: function (e) {
                              var t = E.find.attr(e, "value");
                              return null != t ? t : pt(E.text(e));
                          },
                      },
                      select: {
                          get: function (e) {
                              var t,
                                  n,
                                  i,
                                  r = e.options,
                                  o = e.selectedIndex,
                                  s = "select-one" === e.type,
                                  a = s ? null : [],
                                  l = s ? o + 1 : r.length;
                              for (i = o < 0 ? l : s ? o : 0; i < l; i++)
                                  if (((n = r[i]).selected || i === o) && !n.disabled && (!n.parentNode.disabled || !O(n.parentNode, "optgroup"))) {
                                      if (((t = E(n).val()), s)) return t;
                                      a.push(t);
                                  }
                              return a;
                          },
                          set: function (e, t) {
                              for (var n, i, r = e.options, o = E.makeArray(t), s = r.length; s--; ) ((i = r[s]).selected = E.inArray(E.valHooks.option.get(i), o) > -1) && (n = !0);
                              return n || (e.selectedIndex = -1), o;
                          },
                      },
                  },
              }),
              E.each(["radio", "checkbox"], function () {
                  (E.valHooks[this] = {
                      set: function (e, t) {
                          if (Array.isArray(t)) return (e.checked = E.inArray(E(e).val(), t) > -1);
                      },
                  }),
                      m.checkOn ||
                          (E.valHooks[this].get = function (e) {
                              return null === e.getAttribute("value") ? "on" : e.value;
                          });
              }),
              (m.focusin = "onfocusin" in n);
          var yt = /^(?:focusinfocus|focusoutblur)$/,
              bt = function (e) {
                  e.stopPropagation();
              };
          E.extend(E.event, {
              trigger: function (e, t, i, r) {
                  var o,
                      s,
                      a,
                      l,
                      c,
                      u,
                      f,
                      d,
                      p = [i || b],
                      g = h.call(e, "type") ? e.type : e,
                      m = h.call(e, "namespace") ? e.namespace.split(".") : [];
                  if (
                      ((s = d = a = i = i || b),
                      3 !== i.nodeType &&
                          8 !== i.nodeType &&
                          !yt.test(g + E.event.triggered) &&
                          (g.indexOf(".") > -1 && ((g = (m = g.split(".")).shift()), m.sort()),
                          (c = g.indexOf(":") < 0 && "on" + g),
                          ((e = e[E.expando] ? e : new E.Event(g, "object" == typeof e && e)).isTrigger = r ? 2 : 3),
                          (e.namespace = m.join(".")),
                          (e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null),
                          (e.result = void 0),
                          e.target || (e.target = i),
                          (t = null == t ? [e] : E.makeArray(t, [e])),
                          (f = E.event.special[g] || {}),
                          r || !f.trigger || !1 !== f.trigger.apply(i, t)))
                  ) {
                      if (!r && !f.noBubble && !y(i)) {
                          for (l = f.delegateType || g, yt.test(l + g) || (s = s.parentNode); s; s = s.parentNode) p.push(s), (a = s);
                          a === (i.ownerDocument || b) && p.push(a.defaultView || a.parentWindow || n);
                      }
                      for (o = 0; (s = p[o++]) && !e.isPropagationStopped(); )
                          (d = s),
                              (e.type = o > 1 ? l : f.bindType || g),
                              (u = (G.get(s, "events") || Object.create(null))[e.type] && G.get(s, "handle")) && u.apply(s, t),
                              (u = c && s[c]) && u.apply && K(s) && ((e.result = u.apply(s, t)), !1 === e.result && e.preventDefault());
                      return (
                          (e.type = g),
                          r ||
                              e.isDefaultPrevented() ||
                              (f._default && !1 !== f._default.apply(p.pop(), t)) ||
                              !K(i) ||
                              (c &&
                                  v(i[g]) &&
                                  !y(i) &&
                                  ((a = i[c]) && (i[c] = null),
                                  (E.event.triggered = g),
                                  e.isPropagationStopped() && d.addEventListener(g, bt),
                                  i[g](),
                                  e.isPropagationStopped() && d.removeEventListener(g, bt),
                                  (E.event.triggered = void 0),
                                  a && (i[c] = a))),
                          e.result
                      );
                  }
              },
              simulate: function (e, t, n) {
                  var i = E.extend(new E.Event(), n, { type: e, isSimulated: !0 });
                  E.event.trigger(i, null, t);
              },
          }),
              E.fn.extend({
                  trigger: function (e, t) {
                      return this.each(function () {
                          E.event.trigger(e, t, this);
                      });
                  },
                  triggerHandler: function (e, t) {
                      var n = this[0];
                      if (n) return E.event.trigger(e, t, n, !0);
                  },
              }),
              m.focusin ||
                  E.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
                      var n = function (e) {
                          E.event.simulate(t, e.target, E.event.fix(e));
                      };
                      E.event.special[t] = {
                          setup: function () {
                              var i = this.ownerDocument || this.document || this,
                                  r = G.access(i, t);
                              r || i.addEventListener(e, n, !0), G.access(i, t, (r || 0) + 1);
                          },
                          teardown: function () {
                              var i = this.ownerDocument || this.document || this,
                                  r = G.access(i, t) - 1;
                              r ? G.access(i, t, r) : (i.removeEventListener(e, n, !0), G.remove(i, t));
                          },
                      };
                  });
          var _t = n.location,
              wt = { guid: Date.now() },
              xt = /\?/;
          E.parseXML = function (e) {
              var t, i;
              if (!e || "string" != typeof e) return null;
              try {
                  t = new n.DOMParser().parseFromString(e, "text/xml");
              } catch (e) {}
              return (
                  (i = t && t.getElementsByTagName("parsererror")[0]),
                  (t && !i) ||
                      E.error(
                          "Invalid XML: " +
                              (i
                                  ? E.map(i.childNodes, function (e) {
                                        return e.textContent;
                                    }).join("\n")
                                  : e)
                      ),
                  t
              );
          };
          var Et = /\[\]$/,
              Tt = /\r?\n/g,
              Ct = /^(?:submit|button|image|reset|file)$/i,
              At = /^(?:input|select|textarea|keygen)/i;
          function kt(e, t, n, i) {
              var r;
              if (Array.isArray(t))
                  E.each(t, function (t, r) {
                      n || Et.test(e) ? i(e, r) : kt(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, i);
                  });
              else if (n || "object" !== x(t)) i(e, t);
              else for (r in t) kt(e + "[" + r + "]", t[r], n, i);
          }
          (E.param = function (e, t) {
              var n,
                  i = [],
                  r = function (e, t) {
                      var n = v(t) ? t() : t;
                      i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
                  };
              if (null == e) return "";
              if (Array.isArray(e) || (e.jquery && !E.isPlainObject(e)))
                  E.each(e, function () {
                      r(this.name, this.value);
                  });
              else for (n in e) kt(n, e[n], t, r);
              return i.join("&");
          }),
              E.fn.extend({
                  serialize: function () {
                      return E.param(this.serializeArray());
                  },
                  serializeArray: function () {
                      return this.map(function () {
                          var e = E.prop(this, "elements");
                          return e ? E.makeArray(e) : this;
                      })
                          .filter(function () {
                              var e = this.type;
                              return this.name && !E(this).is(":disabled") && At.test(this.nodeName) && !Ct.test(e) && (this.checked || !he.test(e));
                          })
                          .map(function (e, t) {
                              var n = E(this).val();
                              return null == n
                                  ? null
                                  : Array.isArray(n)
                                  ? E.map(n, function (e) {
                                        return { name: t.name, value: e.replace(Tt, "\r\n") };
                                    })
                                  : { name: t.name, value: n.replace(Tt, "\r\n") };
                          })
                          .get();
                  },
              });
          var St = /%20/g,
              Ot = /#.*$/,
              Dt = /([?&])_=[^&]*/,
              Nt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
              Lt = /^(?:GET|HEAD)$/,
              jt = /^\/\//,
              It = {},
              Pt = {},
              Ht = "*/".concat("*"),
              Mt = b.createElement("a");
          function qt(e) {
              return function (t, n) {
                  "string" != typeof t && ((n = t), (t = "*"));
                  var i,
                      r = 0,
                      o = t.toLowerCase().match(M) || [];
                  if (v(n)) for (; (i = o[r++]); ) "+" === i[0] ? ((i = i.slice(1) || "*"), (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n);
              };
          }
          function $t(e, t, n, i) {
              var r = {},
                  o = e === Pt;
              function s(a) {
                  var l;
                  return (
                      (r[a] = !0),
                      E.each(e[a] || [], function (e, a) {
                          var c = a(t, n, i);
                          return "string" != typeof c || o || r[c] ? (o ? !(l = c) : void 0) : (t.dataTypes.unshift(c), s(c), !1);
                      }),
                      l
                  );
              }
              return s(t.dataTypes[0]) || (!r["*"] && s("*"));
          }
          function Rt(e, t) {
              var n,
                  i,
                  r = E.ajaxSettings.flatOptions || {};
              for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
              return i && E.extend(!0, e, i), e;
          }
          (Mt.href = _t.href),
              E.extend({
                  active: 0,
                  lastModified: {},
                  etag: {},
                  ajaxSettings: {
                      url: _t.href,
                      type: "GET",
                      isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(_t.protocol),
                      global: !0,
                      processData: !0,
                      async: !0,
                      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                      accepts: { "*": Ht, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" },
                      contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
                      responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" },
                      converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": E.parseXML },
                      flatOptions: { url: !0, context: !0 },
                  },
                  ajaxSetup: function (e, t) {
                      return t ? Rt(Rt(e, E.ajaxSettings), t) : Rt(E.ajaxSettings, e);
                  },
                  ajaxPrefilter: qt(It),
                  ajaxTransport: qt(Pt),
                  ajax: function (e, t) {
                      "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
                      var i,
                          r,
                          o,
                          s,
                          a,
                          l,
                          c,
                          u,
                          f,
                          d,
                          h = E.ajaxSetup({}, t),
                          p = h.context || h,
                          g = h.context && (p.nodeType || p.jquery) ? E(p) : E.event,
                          m = E.Deferred(),
                          v = E.Callbacks("once memory"),
                          y = h.statusCode || {},
                          _ = {},
                          w = {},
                          x = "canceled",
                          T = {
                              readyState: 0,
                              getResponseHeader: function (e) {
                                  var t;
                                  if (c) {
                                      if (!s) for (s = {}; (t = Nt.exec(o)); ) s[t[1].toLowerCase() + " "] = (s[t[1].toLowerCase() + " "] || []).concat(t[2]);
                                      t = s[e.toLowerCase() + " "];
                                  }
                                  return null == t ? null : t.join(", ");
                              },
                              getAllResponseHeaders: function () {
                                  return c ? o : null;
                              },
                              setRequestHeader: function (e, t) {
                                  return null == c && ((e = w[e.toLowerCase()] = w[e.toLowerCase()] || e), (_[e] = t)), this;
                              },
                              overrideMimeType: function (e) {
                                  return null == c && (h.mimeType = e), this;
                              },
                              statusCode: function (e) {
                                  var t;
                                  if (e)
                                      if (c) T.always(e[T.status]);
                                      else for (t in e) y[t] = [y[t], e[t]];
                                  return this;
                              },
                              abort: function (e) {
                                  var t = e || x;
                                  return i && i.abort(t), C(0, t), this;
                              },
                          };
                      if (
                          (m.promise(T),
                          (h.url = ((e || h.url || _t.href) + "").replace(jt, _t.protocol + "//")),
                          (h.type = t.method || t.type || h.method || h.type),
                          (h.dataTypes = (h.dataType || "*").toLowerCase().match(M) || [""]),
                          null == h.crossDomain)
                      ) {
                          l = b.createElement("a");
                          try {
                              (l.href = h.url), (l.href = l.href), (h.crossDomain = Mt.protocol + "//" + Mt.host != l.protocol + "//" + l.host);
                          } catch (e) {
                              h.crossDomain = !0;
                          }
                      }
                      if ((h.data && h.processData && "string" != typeof h.data && (h.data = E.param(h.data, h.traditional)), $t(It, h, t, T), c)) return T;
                      for (f in ((u = E.event && h.global) && 0 == E.active++ && E.event.trigger("ajaxStart"),
                      (h.type = h.type.toUpperCase()),
                      (h.hasContent = !Lt.test(h.type)),
                      (r = h.url.replace(Ot, "")),
                      h.hasContent
                          ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(St, "+"))
                          : ((d = h.url.slice(r.length)),
                            h.data && (h.processData || "string" == typeof h.data) && ((r += (xt.test(r) ? "&" : "?") + h.data), delete h.data),
                            !1 === h.cache && ((r = r.replace(Dt, "$1")), (d = (xt.test(r) ? "&" : "?") + "_=" + wt.guid++ + d)),
                            (h.url = r + d)),
                      h.ifModified && (E.lastModified[r] && T.setRequestHeader("If-Modified-Since", E.lastModified[r]), E.etag[r] && T.setRequestHeader("If-None-Match", E.etag[r])),
                      ((h.data && h.hasContent && !1 !== h.contentType) || t.contentType) && T.setRequestHeader("Content-Type", h.contentType),
                      T.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Ht + "; q=0.01" : "") : h.accepts["*"]),
                      h.headers))
                          T.setRequestHeader(f, h.headers[f]);
                      if (h.beforeSend && (!1 === h.beforeSend.call(p, T, h) || c)) return T.abort();
                      if (((x = "abort"), v.add(h.complete), T.done(h.success), T.fail(h.error), (i = $t(Pt, h, t, T)))) {
                          if (((T.readyState = 1), u && g.trigger("ajaxSend", [T, h]), c)) return T;
                          h.async &&
                              h.timeout > 0 &&
                              (a = n.setTimeout(function () {
                                  T.abort("timeout");
                              }, h.timeout));
                          try {
                              (c = !1), i.send(_, C);
                          } catch (e) {
                              if (c) throw e;
                              C(-1, e);
                          }
                      } else C(-1, "No Transport");
                      function C(e, t, s, l) {
                          var f,
                              d,
                              b,
                              _,
                              w,
                              x = t;
                          c ||
                              ((c = !0),
                              a && n.clearTimeout(a),
                              (i = void 0),
                              (o = l || ""),
                              (T.readyState = e > 0 ? 4 : 0),
                              (f = (e >= 200 && e < 300) || 304 === e),
                              s &&
                                  (_ = (function (e, t, n) {
                                      for (var i, r, o, s, a = e.contents, l = e.dataTypes; "*" === l[0]; ) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                                      if (i)
                                          for (r in a)
                                              if (a[r] && a[r].test(i)) {
                                                  l.unshift(r);
                                                  break;
                                              }
                                      if (l[0] in n) o = l[0];
                                      else {
                                          for (r in n) {
                                              if (!l[0] || e.converters[r + " " + l[0]]) {
                                                  o = r;
                                                  break;
                                              }
                                              s || (s = r);
                                          }
                                          o = o || s;
                                      }
                                      if (o) return o !== l[0] && l.unshift(o), n[o];
                                  })(h, T, s)),
                              !f && E.inArray("script", h.dataTypes) > -1 && E.inArray("json", h.dataTypes) < 0 && (h.converters["text script"] = function () {}),
                              (_ = (function (e, t, n, i) {
                                  var r,
                                      o,
                                      s,
                                      a,
                                      l,
                                      c = {},
                                      u = e.dataTypes.slice();
                                  if (u[1]) for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
                                  for (o = u.shift(); o; )
                                      if ((e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), (l = o), (o = u.shift())))
                                          if ("*" === o) o = l;
                                          else if ("*" !== l && l !== o) {
                                              if (!(s = c[l + " " + o] || c["* " + o]))
                                                  for (r in c)
                                                      if ((a = r.split(" "))[1] === o && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                                                          !0 === s ? (s = c[r]) : !0 !== c[r] && ((o = a[0]), u.unshift(a[1]));
                                                          break;
                                                      }
                                              if (!0 !== s)
                                                  if (s && e.throws) t = s(t);
                                                  else
                                                      try {
                                                          t = s(t);
                                                      } catch (e) {
                                                          return { state: "parsererror", error: s ? e : "No conversion from " + l + " to " + o };
                                                      }
                                          }
                                  return { state: "success", data: t };
                              })(h, _, T, f)),
                              f
                                  ? (h.ifModified && ((w = T.getResponseHeader("Last-Modified")) && (E.lastModified[r] = w), (w = T.getResponseHeader("etag")) && (E.etag[r] = w)),
                                    204 === e || "HEAD" === h.type ? (x = "nocontent") : 304 === e ? (x = "notmodified") : ((x = _.state), (d = _.data), (f = !(b = _.error))))
                                  : ((b = x), (!e && x) || ((x = "error"), e < 0 && (e = 0))),
                              (T.status = e),
                              (T.statusText = (t || x) + ""),
                              f ? m.resolveWith(p, [d, x, T]) : m.rejectWith(p, [T, x, b]),
                              T.statusCode(y),
                              (y = void 0),
                              u && g.trigger(f ? "ajaxSuccess" : "ajaxError", [T, h, f ? d : b]),
                              v.fireWith(p, [T, x]),
                              u && (g.trigger("ajaxComplete", [T, h]), --E.active || E.event.trigger("ajaxStop")));
                      }
                      return T;
                  },
                  getJSON: function (e, t, n) {
                      return E.get(e, t, n, "json");
                  },
                  getScript: function (e, t) {
                      return E.get(e, void 0, t, "script");
                  },
              }),
              E.each(["get", "post"], function (e, t) {
                  E[t] = function (e, n, i, r) {
                      return v(n) && ((r = r || i), (i = n), (n = void 0)), E.ajax(E.extend({ url: e, type: t, dataType: r, data: n, success: i }, E.isPlainObject(e) && e));
                  };
              }),
              E.ajaxPrefilter(function (e) {
                  var t;
                  for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "");
              }),
              (E._evalUrl = function (e, t, n) {
                  return E.ajax({
                      url: e,
                      type: "GET",
                      dataType: "script",
                      cache: !0,
                      async: !1,
                      global: !1,
                      converters: { "text script": function () {} },
                      dataFilter: function (e) {
                          E.globalEval(e, t, n);
                      },
                  });
              }),
              E.fn.extend({
                  wrapAll: function (e) {
                      var t;
                      return (
                          this[0] &&
                              (v(e) && (e = e.call(this[0])),
                              (t = E(e, this[0].ownerDocument).eq(0).clone(!0)),
                              this[0].parentNode && t.insertBefore(this[0]),
                              t
                                  .map(function () {
                                      for (var e = this; e.firstElementChild; ) e = e.firstElementChild;
                                      return e;
                                  })
                                  .append(this)),
                          this
                      );
                  },
                  wrapInner: function (e) {
                      return v(e)
                          ? this.each(function (t) {
                                E(this).wrapInner(e.call(this, t));
                            })
                          : this.each(function () {
                                var t = E(this),
                                    n = t.contents();
                                n.length ? n.wrapAll(e) : t.append(e);
                            });
                  },
                  wrap: function (e) {
                      var t = v(e);
                      return this.each(function (n) {
                          E(this).wrapAll(t ? e.call(this, n) : e);
                      });
                  },
                  unwrap: function (e) {
                      return (
                          this.parent(e)
                              .not("body")
                              .each(function () {
                                  E(this).replaceWith(this.childNodes);
                              }),
                          this
                      );
                  },
              }),
              (E.expr.pseudos.hidden = function (e) {
                  return !E.expr.pseudos.visible(e);
              }),
              (E.expr.pseudos.visible = function (e) {
                  return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
              }),
              (E.ajaxSettings.xhr = function () {
                  try {
                      return new n.XMLHttpRequest();
                  } catch (e) {}
              });
          var Bt = { 0: 200, 1223: 204 },
              Wt = E.ajaxSettings.xhr();
          (m.cors = !!Wt && "withCredentials" in Wt),
              (m.ajax = Wt = !!Wt),
              E.ajaxTransport(function (e) {
                  var t, i;
                  if (m.cors || (Wt && !e.crossDomain))
                      return {
                          send: function (r, o) {
                              var s,
                                  a = e.xhr();
                              if ((a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)) for (s in e.xhrFields) a[s] = e.xhrFields[s];
                              for (s in (e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest"), r)) a.setRequestHeader(s, r[s]);
                              (t = function (e) {
                                  return function () {
                                      t &&
                                          ((t = i = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null),
                                          "abort" === e
                                              ? a.abort()
                                              : "error" === e
                                              ? "number" != typeof a.status
                                                  ? o(0, "error")
                                                  : o(a.status, a.statusText)
                                              : o(
                                                    Bt[a.status] || a.status,
                                                    a.statusText,
                                                    "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? { binary: a.response } : { text: a.responseText },
                                                    a.getAllResponseHeaders()
                                                ));
                                  };
                              }),
                                  (a.onload = t()),
                                  (i = a.onerror = a.ontimeout = t("error")),
                                  void 0 !== a.onabort
                                      ? (a.onabort = i)
                                      : (a.onreadystatechange = function () {
                                            4 === a.readyState &&
                                                n.setTimeout(function () {
                                                    t && i();
                                                });
                                        }),
                                  (t = t("abort"));
                              try {
                                  a.send((e.hasContent && e.data) || null);
                              } catch (e) {
                                  if (t) throw e;
                              }
                          },
                          abort: function () {
                              t && t();
                          },
                      };
              }),
              E.ajaxPrefilter(function (e) {
                  e.crossDomain && (e.contents.script = !1);
              }),
              E.ajaxSetup({
                  accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" },
                  contents: { script: /\b(?:java|ecma)script\b/ },
                  converters: {
                      "text script": function (e) {
                          return E.globalEval(e), e;
                      },
                  },
              }),
              E.ajaxPrefilter("script", function (e) {
                  void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
              }),
              E.ajaxTransport("script", function (e) {
                  var t, n;
                  if (e.crossDomain || e.scriptAttrs)
                      return {
                          send: function (i, r) {
                              (t = E("<script>")
                                  .attr(e.scriptAttrs || {})
                                  .prop({ charset: e.scriptCharset, src: e.url })
                                  .on(
                                      "load error",
                                      (n = function (e) {
                                          t.remove(), (n = null), e && r("error" === e.type ? 404 : 200, e.type);
                                      })
                                  )),
                                  b.head.appendChild(t[0]);
                          },
                          abort: function () {
                              n && n();
                          },
                      };
              });
          var Ft = [],
              zt = /(=)\?(?=&|$)|\?\?/;
          E.ajaxSetup({
              jsonp: "callback",
              jsonpCallback: function () {
                  var e = Ft.pop() || E.expando + "_" + wt.guid++;
                  return (this[e] = !0), e;
              },
          }),
              E.ajaxPrefilter("json jsonp", function (e, t, i) {
                  var r,
                      o,
                      s,
                      a = !1 !== e.jsonp && (zt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && zt.test(e.data) && "data");
                  if (a || "jsonp" === e.dataTypes[0])
                      return (
                          (r = e.jsonpCallback = v(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
                          a ? (e[a] = e[a].replace(zt, "$1" + r)) : !1 !== e.jsonp && (e.url += (xt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
                          (e.converters["script json"] = function () {
                              return s || E.error(r + " was not called"), s[0];
                          }),
                          (e.dataTypes[0] = "json"),
                          (o = n[r]),
                          (n[r] = function () {
                              s = arguments;
                          }),
                          i.always(function () {
                              void 0 === o ? E(n).removeProp(r) : (n[r] = o), e[r] && ((e.jsonpCallback = t.jsonpCallback), Ft.push(r)), s && v(o) && o(s[0]), (s = o = void 0);
                          }),
                          "script"
                      );
              }),
              (m.createHTMLDocument = (function () {
                  var e = b.implementation.createHTMLDocument("").body;
                  return (e.innerHTML = "<form></form><form></form>"), 2 === e.childNodes.length;
              })()),
              (E.parseHTML = function (e, t, n) {
                  return "string" != typeof e
                      ? []
                      : ("boolean" == typeof t && ((n = t), (t = !1)),
                        t || (m.createHTMLDocument ? (((i = (t = b.implementation.createHTMLDocument("")).createElement("base")).href = b.location.href), t.head.appendChild(i)) : (t = b)),
                        (r = D.exec(e)),
                        (o = !n && []),
                        r ? [t.createElement(r[1])] : ((r = _e([e], t, o)), o && o.length && E(o).remove(), E.merge([], r.childNodes)));
                  var i, r, o;
              }),
              (E.fn.load = function (e, t, n) {
                  var i,
                      r,
                      o,
                      s = this,
                      a = e.indexOf(" ");
                  return (
                      a > -1 && ((i = pt(e.slice(a))), (e = e.slice(0, a))),
                      v(t) ? ((n = t), (t = void 0)) : t && "object" == typeof t && (r = "POST"),
                      s.length > 0 &&
                          E.ajax({ url: e, type: r || "GET", dataType: "html", data: t })
                              .done(function (e) {
                                  (o = arguments), s.html(i ? E("<div>").append(E.parseHTML(e)).find(i) : e);
                              })
                              .always(
                                  n &&
                                      function (e, t) {
                                          s.each(function () {
                                              n.apply(this, o || [e.responseText, t, e]);
                                          });
                                      }
                              ),
                      this
                  );
              }),
              (E.expr.pseudos.animated = function (e) {
                  return E.grep(E.timers, function (t) {
                      return e === t.elem;
                  }).length;
              }),
              (E.offset = {
                  setOffset: function (e, t, n) {
                      var i,
                          r,
                          o,
                          s,
                          a,
                          l,
                          c = E.css(e, "position"),
                          u = E(e),
                          f = {};
                      "static" === c && (e.style.position = "relative"),
                          (a = u.offset()),
                          (o = E.css(e, "top")),
                          (l = E.css(e, "left")),
                          ("absolute" === c || "fixed" === c) && (o + l).indexOf("auto") > -1 ? ((s = (i = u.position()).top), (r = i.left)) : ((s = parseFloat(o) || 0), (r = parseFloat(l) || 0)),
                          v(t) && (t = t.call(e, n, E.extend({}, a))),
                          null != t.top && (f.top = t.top - a.top + s),
                          null != t.left && (f.left = t.left - a.left + r),
                          "using" in t ? t.using.call(e, f) : u.css(f);
                  },
              }),
              E.fn.extend({
                  offset: function (e) {
                      if (arguments.length)
                          return void 0 === e
                              ? this
                              : this.each(function (t) {
                                    E.offset.setOffset(this, e, t);
                                });
                      var t,
                          n,
                          i = this[0];
                      return i ? (i.getClientRects().length ? ((t = i.getBoundingClientRect()), (n = i.ownerDocument.defaultView), { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset }) : { top: 0, left: 0 }) : void 0;
                  },
                  position: function () {
                      if (this[0]) {
                          var e,
                              t,
                              n,
                              i = this[0],
                              r = { top: 0, left: 0 };
                          if ("fixed" === E.css(i, "position")) t = i.getBoundingClientRect();
                          else {
                              for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === E.css(e, "position"); ) e = e.parentNode;
                              e && e !== i && 1 === e.nodeType && (((r = E(e).offset()).top += E.css(e, "borderTopWidth", !0)), (r.left += E.css(e, "borderLeftWidth", !0)));
                          }
                          return { top: t.top - r.top - E.css(i, "marginTop", !0), left: t.left - r.left - E.css(i, "marginLeft", !0) };
                      }
                  },
                  offsetParent: function () {
                      return this.map(function () {
                          for (var e = this.offsetParent; e && "static" === E.css(e, "position"); ) e = e.offsetParent;
                          return e || oe;
                      });
                  },
              }),
              E.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (e, t) {
                  var n = "pageYOffset" === t;
                  E.fn[e] = function (i) {
                      return z(
                          this,
                          function (e, i, r) {
                              var o;
                              if ((y(e) ? (o = e) : 9 === e.nodeType && (o = e.defaultView), void 0 === r)) return o ? o[t] : e[i];
                              o ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset) : (e[i] = r);
                          },
                          e,
                          i,
                          arguments.length
                      );
                  };
              }),
              E.each(["top", "left"], function (e, t) {
                  E.cssHooks[t] = We(m.pixelPosition, function (e, n) {
                      if (n) return (n = Be(e, t)), Me.test(n) ? E(e).position()[t] + "px" : n;
                  });
              }),
              E.each({ Height: "height", Width: "width" }, function (e, t) {
                  E.each({ padding: "inner" + e, content: t, "": "outer" + e }, function (n, i) {
                      E.fn[i] = function (r, o) {
                          var s = arguments.length && (n || "boolean" != typeof r),
                              a = n || (!0 === r || !0 === o ? "margin" : "border");
                          return z(
                              this,
                              function (t, n, r) {
                                  var o;
                                  return y(t)
                                      ? 0 === i.indexOf("outer")
                                          ? t["inner" + e]
                                          : t.document.documentElement["client" + e]
                                      : 9 === t.nodeType
                                      ? ((o = t.documentElement), Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e]))
                                      : void 0 === r
                                      ? E.css(t, n, a)
                                      : E.style(t, n, r, a);
                              },
                              t,
                              s ? r : void 0,
                              s
                          );
                      };
                  });
              }),
              E.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
                  E.fn[t] = function (e) {
                      return this.on(t, e);
                  };
              }),
              E.fn.extend({
                  bind: function (e, t, n) {
                      return this.on(e, null, t, n);
                  },
                  unbind: function (e, t) {
                      return this.off(e, null, t);
                  },
                  delegate: function (e, t, n, i) {
                      return this.on(t, e, n, i);
                  },
                  undelegate: function (e, t, n) {
                      return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
                  },
                  hover: function (e, t) {
                      return this.mouseenter(e).mouseleave(t || e);
                  },
              }),
              E.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
                  E.fn[t] = function (e, n) {
                      return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
                  };
              });
          var Ut = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
          (E.proxy = function (e, t) {
              var n, i, r;
              if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), v(e)))
                  return (
                      (i = a.call(arguments, 2)),
                      ((r = function () {
                          return e.apply(t || this, i.concat(a.call(arguments)));
                      }).guid = e.guid = e.guid || E.guid++),
                      r
                  );
          }),
              (E.holdReady = function (e) {
                  e ? E.readyWait++ : E.ready(!0);
              }),
              (E.isArray = Array.isArray),
              (E.parseJSON = JSON.parse),
              (E.nodeName = O),
              (E.isFunction = v),
              (E.isWindow = y),
              (E.camelCase = Y),
              (E.type = x),
              (E.now = Date.now),
              (E.isNumeric = function (e) {
                  var t = E.type(e);
                  return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
              }),
              (E.trim = function (e) {
                  return null == e ? "" : (e + "").replace(Ut, "");
              }),
              void 0 ===
                  (i = function () {
                      return E;
                  }.apply(t, [])) || (e.exports = i);
          var Vt = n.jQuery,
              Xt = n.$;
          return (
              (E.noConflict = function (e) {
                  return n.$ === E && (n.$ = Xt), e && n.jQuery === E && (n.jQuery = Vt), E;
              }),
              void 0 === r && (n.jQuery = n.$ = E),
              E
          );
      });
  },
  
]);
