function unwrapExports(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, 'default') ? t.default : t;
}
function createCommonjsModule(t, e) {
  return (e = { exports: {} }), t(e, e.exports), e.exports;
}
var commonjsGlobal = 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : 'undefined' != typeof self ? self : {},
  apexcharts = createCommonjsModule(function (t, e) {
    !(function (e, i) {
      t.exports = i();
    })(0, function () {
      return (function (t) {
        function e(a) {
          if (i[a]) return i[a].exports;
          var s = (i[a] = { i: a, l: !1, exports: {} });
          return t[a].call(s.exports, s, s.exports, e), (s.l = !0), s.exports;
        }
        var i = {};
        return (
          (e.m = t),
          (e.c = i),
          (e.i = function (t) {
            return t;
          }),
          (e.d = function (t, i, a) {
            e.o(t, i) || Object.defineProperty(t, i, { configurable: !1, enumerable: !0, get: a });
          }),
          (e.n = function (t) {
            var i =
              t && t.__esModule
                ? function () {
                    return t.default;
                  }
                : function () {
                    return t;
                  };
            return e.d(i, 'a', i), i;
          }),
          (e.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
          }),
          (e.p = ''),
          e((e.s = 68))
        );
      })([
        function (t, e, i) {
          function a(t) {
            return t && t.__esModule ? t : { default: t };
          }
          function s(t, e) {
            if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
          }
          Object.defineProperty(e, '__esModule', { value: !0 });
          var n =
              Object.assign ||
              function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var i = arguments[e];
                  for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && (t[a] = i[a]);
                }
                return t;
              },
            r = (function () {
              function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                  var a = e[i];
                  (a.enumerable = a.enumerable || !1), (a.configurable = !0), 'value' in a && (a.writable = !0), Object.defineProperty(t, a.key, a);
                }
              }
              return function (e, i, a) {
                return i && t(e.prototype, i), a && t(e, a), e;
              };
            })(),
            o = a(i(1)),
            l = a(i(2)),
            h = a(i(5)),
            c = (function () {
              function t(e) {
                s(this, t), (this.ctx = e), (this.w = e.w);
              }
              return (
                r(
                  t,
                  [
                    {
                      key: 'drawLine',
                      value: function (t, e, i, a) {
                        var s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : '#a8a8a8',
                          n = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
                          r = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
                        return this.w.globals.dom.Paper.line().attr({
                          x1: t,
                          y1: e,
                          x2: i,
                          y2: a,
                          stroke: s,
                          'stroke-dasharray': n,
                          'stroke-width': r,
                        });
                      },
                    },
                    {
                      key: 'drawRect',
                      value: function () {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                          e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                          i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                          a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                          s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
                          n = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : '#fefefe',
                          r = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 1,
                          o = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
                          l = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
                          h = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
                          c = this.w.globals.dom.Paper.rect();
                        return (
                          c.attr({
                            x: t,
                            y: e,
                            width: i > 0 ? i : 0,
                            height: a > 0 ? a : 0,
                            rx: s,
                            ry: s,
                            fill: n,
                            opacity: r,
                            'stroke-width': null !== o ? o : 0,
                            stroke: null !== l ? l : 'none',
                            'stroke-dasharray': h,
                          }),
                          c
                        );
                      },
                    },
                    {
                      key: 'drawCircle',
                      value: function (t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                          i = this.w.globals.dom.Paper.circle(2 * t);
                        return null !== e && i.attr(e), i;
                      },
                    },
                    {
                      key: 'drawPath',
                      value: function (t) {
                        var e = t.d,
                          i = void 0 === e ? '' : e,
                          a = t.stroke,
                          s = void 0 === a ? '#a8a8a8' : a,
                          n = t.strokeWidth,
                          r = t.fill,
                          o = t.fillOpacity,
                          l = void 0 === o ? 1 : o,
                          h = t.strokeOpacity,
                          c = void 0 === h ? 1 : h,
                          d = t.classes,
                          u = t.strokeLinecap,
                          f = void 0 === u ? null : u,
                          g = t.strokeDashArray,
                          p = void 0 === g ? 0 : g,
                          x = this.w;
                        return (
                          null === f && (f = x.config.stroke.lineCap),
                          (i.indexOf('undefined') > -1 || i.indexOf('NaN') > -1) && (i = 'M 0 ' + x.globals.gridHeight),
                          x.globals.dom.Paper.path(i).attr({
                            fill: r,
                            'fill-opacity': l,
                            stroke: s,
                            'stroke-opacity': c,
                            'stroke-linecap': f,
                            'stroke-width': n,
                            'stroke-dasharray': p,
                            class: d,
                          })
                        );
                      },
                    },
                    {
                      key: 'group',
                      value: function () {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                          e = this.w.globals.dom.Paper.group();
                        return null !== t && e.attr(t), e;
                      },
                    },
                    {
                      key: 'move',
                      value: function (t, e) {
                        var i = ['M', t, e].join(' ');
                        return i;
                      },
                    },
                    {
                      key: 'line',
                      value: function (t, e) {
                        var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                          a = null;
                        return null === i ? (a = ['L', t, e].join(' ')) : 'H' === i ? (a = ['H', t].join(' ')) : 'V' === i && (a = ['V', e].join(' ')), a;
                      },
                    },
                    {
                      key: 'curve',
                      value: function (t, e, i, a, s, n) {
                        var r = ['C', t, e, i, a, s, n].join(' ');
                        return r;
                      },
                    },
                    {
                      key: 'quadraticCurve',
                      value: function (t, e, i, a) {
                        return ['Q', t, e, i, a].join(' ');
                      },
                    },
                    {
                      key: 'arc',
                      value: function (t, e, i, a, s, n, r) {
                        var o = 'A';
                        arguments.length > 7 && void 0 !== arguments[7] && arguments[7] && (o = 'a');
                        var l = [o, t, e, i, a, s, n, r].join(' ');
                        return l;
                      },
                    },
                    {
                      key: 'renderPaths',
                      value: function (t) {
                        var e = t.i,
                          i = t.j,
                          a = t.realIndex,
                          s = t.pathFrom,
                          r = t.pathTo,
                          o = t.stroke,
                          c = t.strokeWidth,
                          d = t.strokeLinecap,
                          u = t.fill,
                          f = t.animationDelay,
                          g = t.initialSpeed,
                          p = t.dataChangeSpeed,
                          x = (t.hideStrokesInChange, t.className),
                          b = t.id,
                          v = this.w,
                          m = new l.default(this.ctx),
                          y = new h.default(this.ctx),
                          w = this.w.config.chart.animations.enabled,
                          k = w && this.w.config.chart.animations.dynamicAnimation.enabled,
                          S = void 0,
                          A = !!((w && !v.globals.resized) || (k && v.globals.dataChanged && v.globals.shouldAnimate));
                        S = A ? s : r;
                        var C = v.config.stroke.dashArray,
                          M = 0;
                        M = Array.isArray(C) ? C[a] : v.config.stroke.dashArray;
                        var P = this.drawPath({
                          d: S,
                          stroke: o,
                          strokeWidth: c,
                          fill: u,
                          fillOpacity: 1,
                          classes: x,
                          strokeLinecap: d,
                          strokeDashArray: M,
                        });
                        if ((P.attr('id', b + '-' + e), P.attr('index', a), P.attr({ 'clip-path': 'url(#gridRectMask' + v.globals.cuid + ')' }), 'none' !== v.config.states.normal.filter.type)) m.getDefaultFilter(P, v.config.states.normal.filter.type, v.config.states.normal.filter.value);
                        else if (v.config.chart.dropShadow.enabled && (!v.config.chart.dropShadow.enabledSeries || (v.config.chart.dropShadow.enabledSeries && -1 !== v.config.chart.dropShadow.enabledSeries.indexOf(a)))) {
                          var L = v.config.chart.dropShadow;
                          m.dropShadow(P, L);
                        }
                        P.node.addEventListener('mouseenter', this.pathMouseEnter.bind(this, P)), P.node.addEventListener('mouseleave', this.pathMouseLeave.bind(this, P)), P.node.addEventListener('mousedown', this.pathMouseDown.bind(this, P)), P.attr({ pathTo: r, pathFrom: s });
                        var E = { el: P, j: i, pathFrom: s, pathTo: r, strokeWidth: c };
                        return !w || v.globals.resized || v.globals.dataChanged ? (!v.globals.resized && v.globals.dataChanged) || y.showDelayedElements() : y.animatePathsGradually(n({}, E, { speed: g, delay: f })), v.globals.dataChanged && k && A && y.animatePathsGradually(n({}, E, { speed: p })), P;
                      },
                    },
                    {
                      key: 'drawPattern',
                      value: function (t, e, i) {
                        var a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : '#a8a8a8',
                          s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
                        return this.w.globals.dom.Paper.pattern(e, i, function (n) {
                          'horizontalLines' === t ? n.line(0, 0, i, 0).stroke({ color: a, width: s + 1 }) : 'verticalLines' === t ? n.line(0, 0, 0, e).stroke({ color: a, width: s + 1 }) : 'slantedLines' === t ? n.line(0, 0, e, i).stroke({ color: a, width: s }) : 'squares' === t ? n.rect(e, i).fill('none').stroke({ color: a, width: s }) : 'circles' === t && n.circle(e).fill('none').stroke({ color: a, width: s });
                        });
                      },
                    },
                    {
                      key: 'drawGradient',
                      value: function (t, e, i, a, s) {
                        var n = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
                          r = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
                          l = this.w;
                        (e = o.default.hexToRgba(e, a)), (i = o.default.hexToRgba(i, s));
                        var h = 0,
                          c = 1,
                          d = 1,
                          u = null;
                        null !== r && ((h = void 0 !== r[0] ? r[0] / 100 : 0), (c = void 0 !== r[1] ? r[1] / 100 : 1), (d = void 0 !== r[2] ? r[2] / 100 : 1), (u = void 0 !== r[3] ? r[3] / 100 : null));
                        var f = !('donut' !== l.config.chart.type && 'pie' !== l.config.chart.type && 'bubble' !== l.config.chart.type),
                          g = l.globals.dom.Paper.gradient(f ? 'radial' : 'linear', function (t) {
                            t.at(h, e, a), t.at(c, i, s), t.at(d, i, s), null !== u && t.at(u, e, a);
                          });
                        if (f) {
                          var p = l.globals.gridWidth / 2,
                            x = l.globals.gridHeight / 2;
                          'bubble' !== l.config.chart.type ? g.attr({ gradientUnits: 'userSpaceOnUse', cx: p, cy: x, r: n }) : g.attr({ cx: 0.5, cy: 0.5, r: 0.8, fx: 0.2, fy: 0.2 });
                        } else 'vertical' === t ? g.from(0, 0).to(0, 1) : 'diagonal' === t ? g.from(0, 0).to(1, 1) : 'horizontal' === t ? g.from(0, 1).to(1, 1) : 'diagonal2' === t && g.from(0, 1).to(2, 2);
                        return g;
                      },
                    },
                    {
                      key: 'drawText',
                      value: function (t) {
                        var e = this.w,
                          i = t.x,
                          a = t.y,
                          s = t.text,
                          n = t.textAnchor,
                          r = t.fontSize,
                          o = t.fontFamily,
                          l = t.foreColor,
                          h = t.opacity;
                        n || (n = 'start'), l || (l = e.config.chart.foreColor), (o = o || e.config.chart.fontFamily);
                        var c = void 0;
                        return (
                          (c = Array.isArray(s)
                            ? e.globals.dom.Paper.text(function (t) {
                                for (var e = 0; e < s.length; e++) t.tspan(s[e]);
                              })
                            : e.globals.dom.Paper.plain(s)).attr({
                            x: i,
                            y: a,
                            'text-anchor': n,
                            'dominate-baseline': 'central',
                            'font-size': r,
                            'font-family': o,
                            fill: l,
                            class: t.cssClass,
                          }),
                          (c.node.style.fontFamily = o),
                          (c.node.style.opacity = h),
                          c
                        );
                      },
                    },
                    {
                      key: 'addTspan',
                      value: function (t, e, i) {
                        var a = t.tspan(e);
                        i || (i = this.w.config.chart.fontFamily), (a.node.style.fontFamily = i);
                      },
                    },
                    {
                      key: 'drawMarker',
                      value: function (t, e, i) {
                        t = t || 0;
                        var a = i.pSize || 0,
                          s = null;
                        if ('square' === i.shape) {
                          var n = void 0 === i.pRadius ? a / 2 : i.pRadius;
                          null === e && ((a = 0), (n = 0));
                          var r = 1.2 * a + n,
                            l = this.drawRect(r, r, r, r, n);
                          l.attr({
                            x: t - r / 2,
                            y: e - r / 2,
                            cx: t,
                            cy: e,
                            class: i.class ? i.class : '',
                            fill: i.pointFillColor,
                            'fill-opacity': i.pointFillOpacity ? i.pointFillOpacity : 1,
                            stroke: i.pointStrokeColor,
                            'stroke-width': i.pWidth ? i.pWidth : 0,
                            'stroke-opacity': i.pointStrokeOpacity ? i.pointStrokeOpacity : 1,
                          }),
                            (s = l);
                        } else
                          'circle' === i.shape &&
                            (o.default.isNumber(e) || ((a = 0), (e = 0)),
                            (s = this.drawCircle(a, {
                              cx: t,
                              cy: e,
                              class: i.class ? i.class : '',
                              stroke: i.pointStrokeColor,
                              fill: i.pointFillColor,
                              'fill-opacity': i.pointFillOpacity ? i.pointFillOpacity : 1,
                              'stroke-width': i.pWidth ? i.pWidth : 0,
                              'stroke-opacity': i.pointStrokeOpacity ? i.pointStrokeOpacity : 1,
                            })));
                        return s;
                      },
                    },
                    {
                      key: 'pathMouseEnter',
                      value: function (t, e) {
                        var i = this.w,
                          a = new l.default(this.ctx),
                          s = parseInt(t.node.getAttribute('index')),
                          n = parseInt(t.node.getAttribute('j'));
                        if (('function' == typeof i.config.chart.events.dataPointMouseEnter && i.config.chart.events.dataPointMouseEnter(e, this.ctx, { seriesIndex: s, dataPointIndex: n, w: i }), this.ctx.fireEvent('dataPointMouseEnter', [e, this.ctx, { seriesIndex: s, dataPointIndex: n, w: i }]), ('none' === i.config.states.active.filter.type || 'true' !== t.node.getAttribute('selected')) && 'none' !== i.config.states.hover.filter.type && 'none' !== i.config.states.active.filter.type && !i.globals.isTouchDevice)) {
                          var r = i.config.states.hover.filter;
                          a.applyFilter(t, r.type, r.value);
                        }
                      },
                    },
                    {
                      key: 'pathMouseLeave',
                      value: function (t, e) {
                        var i = this.w,
                          a = new l.default(this.ctx),
                          s = parseInt(t.node.getAttribute('index')),
                          n = parseInt(t.node.getAttribute('j'));
                        'function' == typeof i.config.chart.events.dataPointMouseLeave && i.config.chart.events.dataPointMouseLeave(e, this.ctx, { seriesIndex: s, dataPointIndex: n, w: i }), this.ctx.fireEvent('dataPointMouseLeave', [e, this.ctx, { seriesIndex: s, dataPointIndex: n, w: i }]), ('none' !== i.config.states.active.filter.type && 'true' === t.node.getAttribute('selected')) || ('none' !== i.config.states.hover.filter.type && a.getDefaultFilter(t));
                      },
                    },
                    {
                      key: 'pathMouseDown',
                      value: function (t, e) {
                        var i = this.w,
                          a = new l.default(this.ctx),
                          s = parseInt(t.node.getAttribute('index')),
                          n = parseInt(t.node.getAttribute('j')),
                          r = 'false';
                        if ('true' === t.node.getAttribute('selected')) {
                          if ((t.node.setAttribute('selected', 'false'), i.globals.selectedDataPoints[s].indexOf(n) > -1)) {
                            var o = i.globals.selectedDataPoints[s].indexOf(n);
                            i.globals.selectedDataPoints[s].splice(o, 1);
                          }
                        } else {
                          if (!i.config.states.active.allowMultipleDataPointsSelection && i.globals.selectedDataPoints.length > 0) {
                            i.globals.selectedDataPoints = [];
                            var h = i.globals.dom.Paper.select('.apexcharts-series path').members,
                              c = i.globals.dom.Paper.select('.apexcharts-series circle').members,
                              d = !0,
                              u = !1,
                              f = void 0;
                            try {
                              for (var g, p = h[Symbol.iterator](); !(d = (g = p.next()).done); d = !0) {
                                var x = g.value;
                                x.node.setAttribute('selected', 'false'), a.getDefaultFilter(x);
                              }
                            } catch (t) {
                              (u = !0), (f = t);
                            } finally {
                              try {
                                !d && p.return && p.return();
                              } finally {
                                if (u) throw f;
                              }
                            }
                            var b = !0,
                              v = !1,
                              m = void 0;
                            try {
                              for (var y, w = c[Symbol.iterator](); !(b = (y = w.next()).done); b = !0) {
                                var k = y.value;
                                k.node.setAttribute('selected', 'false'), a.getDefaultFilter(k);
                              }
                            } catch (t) {
                              (v = !0), (m = t);
                            } finally {
                              try {
                                !b && w.return && w.return();
                              } finally {
                                if (v) throw m;
                              }
                            }
                          }
                          t.node.setAttribute('selected', 'true'), (r = 'true'), void 0 === i.globals.selectedDataPoints[s] && (i.globals.selectedDataPoints[s] = []), i.globals.selectedDataPoints[s].push(n);
                        }
                        if ('true' === r) {
                          var S = i.config.states.active.filter;
                          'none' !== S && a.applyFilter(t, S.type, S.value);
                        } else 'none' !== i.config.states.active.filter.type && a.getDefaultFilter(t);
                        'function' == typeof i.config.chart.events.dataPointSelection &&
                          i.config.chart.events.dataPointSelection(e, this.ctx, {
                            selectedDataPoints: i.globals.selectedDataPoints,
                            seriesIndex: s,
                            dataPointIndex: n,
                            w: i,
                          }),
                          this.ctx.fireEvent('dataPointSelection', [e, this.ctx, { selectedDataPoints: i.globals.selectedDataPoints, seriesIndex: s, dataPointIndex: n, w: i }]);
                      },
                    },
                    {
                      key: 'rotateAroundCenter',
                      value: function (t) {
                        var e = t.getBBox();
                        return { x: e.x + e.width / 2, y: e.y + e.height / 2 };
                      },
                    },
                    {
                      key: 'getTextRects',
                      value: function (t, e, i, a) {
                        var s = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
                          n = this.w,
                          r = this.drawText({
                            x: -200,
                            y: -200,
                            text: t,
                            textAnchor: 'start',
                            fontSize: e,
                            fontFamily: i,
                            foreColor: '#fff',
                            opacity: 0,
                          });
                        a && r.attr('transform', a), n.globals.dom.Paper.add(r);
                        var o = r.bbox();
                        return s || (o = r.node.getBoundingClientRect()), r.remove(), { width: o.width, height: o.height };
                      },
                    },
                    {
                      key: 'placeTextWithEllipsis',
                      value: function (t, e, i) {
                        if (((t.textContent = e), e.length > 0 && t.getSubStringLength(0, e.length) >= i)) {
                          for (var a = e.length - 3; a > 0; a -= 3) if (t.getSubStringLength(0, a) <= i) return void (t.textContent = e.substring(0, a) + '...');
                          t.textContent = '...';
                        }
                      },
                    },
                  ],
                  [
                    {
                      key: 'setAttrs',
                      value: function (t, e) {
                        for (var i in e) e.hasOwnProperty(i) && t.setAttribute(i, e[i]);
                      },
                    },
                  ]
                ),
                t
              );
            })();
          e.default = c;
        },
        function (t, e, i) {
          function a(t, e, i) {
            return e in t ? Object.defineProperty(t, e, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = i), t;
          }
          function s(t, e) {
            if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
          }
          Object.defineProperty(e, '__esModule', { value: !0 });
          var n =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t;
                  },
            r = (function () {
              function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                  var a = e[i];
                  (a.enumerable = a.enumerable || !1), (a.configurable = !0), 'value' in a && (a.writable = !0), Object.defineProperty(t, a.key, a);
                }
              }
              return function (e, i, a) {
                return i && t(e.prototype, i), a && t(e, a), e;
              };
            })(),
            o = (function () {
              function t() {
                s(this, t);
              }
              return (
                r(
                  t,
                  [
                    {
                      key: 'shadeColor',
                      value: function (t, e) {
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
                        if ((('#' === e[0] && 'r' === e[0]) || (e = this.getHexColorFromName(e)), 'number' != typeof t || t < -1 || t > 1 || 'string' != typeof e || ('r' !== e[0] && '#' !== e[0]) || ('string' != typeof n && void 0 !== n))) return null;
                        var i = Math.round,
                          a = e.length > 9,
                          a = 'string' == typeof n ? n.length > 9 || ('c' === n && !a) : a,
                          s = t < 0,
                          t = s ? -1 * t : t,
                          n = n && 'c' !== n ? n : s ? '#000000' : '#FFFFFF',
                          r = this.sbcRip(e),
                          o = this.sbcRip(n);
                        return r && o ? (a ? 'rgb(' + i((o[0] - r[0]) * t + r[0]) + ',' + i((o[1] - r[1]) * t + r[1]) + ',' + i((o[2] - r[2]) * t + r[2]) + (r[3] < 0 && o[3] < 0 ? ')' : ',' + (r[3] > -1 && o[3] > -1 ? i(1e4 * ((o[3] - r[3]) * t + r[3])) / 1e4 : o[3] < 0 ? r[3] : o[3]) + ')') : '#' + (4294967296 + 16777216 * (r[3] > -1 && o[3] > -1 ? i(255 * ((o[3] - r[3]) * t + r[3])) : o[3] > -1 ? i(255 * o[3]) : r[3] > -1 ? i(255 * r[3]) : 255) + 65536 * i((o[0] - r[0]) * t + r[0]) + 256 * i((o[1] - r[1]) * t + r[1]) + i((o[2] - r[2]) * t + r[2])).toString(16).slice(r[3] > -1 || o[3] > -1 ? 1 : 3)) : null;
                      },
                    },
                    {
                      key: 'sbcRip',
                      value: function (t) {
                        var e = t.length,
                          i = new Object(),
                          a = parseInt,
                          s = Math.round;
                        if (e > 9) {
                          if ((t = t.split(',')).length < 3 || t.length > 4) return null;
                          (i[0] = a(t[0].slice(4))), (i[1] = a(t[1])), (i[2] = a(t[2])), (i[3] = t[3] ? parseFloat(t[3]) : -1);
                        } else {
                          if (8 === e || 6 === e || e < 4) return null;
                          e < 6 && (t = '#' + t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + (e > 4 ? t[4] + '' + t[4] : '')), (t = a(t.slice(1), 16)), (i[0] = (t >> 16) & 255), (i[1] = (t >> 8) & 255), (i[2] = 255 & t), (i[3] = 9 === e || 5 === e ? s((((t >> 24) & 255) / 255) * 1e4) / 1e4 : -1);
                        }
                        return i;
                      },
                    },
                    {
                      key: 'getHexColorFromName',
                      value: function (t) {
                        var e = document.createElement('div');
                        e.style.color = t;
                        var i = window
                          .getComputedStyle(document.body.appendChild(e))
                          .color.match(/\d+/g)
                          .map(function (t) {
                            return parseInt(t, 10);
                          });
                        return document.body.removeChild(e), i.length >= 3 && '#' + ((1 << 24) + (i[0] << 16) + (i[1] << 8) + i[2]).toString(16).substr(1);
                      },
                    },
                  ],
                  [
                    {
                      key: 'bind',
                      value: function (t, e) {
                        return function () {
                          return t.apply(e, arguments);
                        };
                      },
                    },
                    {
                      key: 'isObject',
                      value: function (t) {
                        return t && 'object' === (void 0 === t ? 'undefined' : n(t)) && !Array.isArray(t) && null != t;
                      },
                    },
                    {
                      key: 'extend',
                      value: function (t, e) {
                        var i = this;
                        'function' != typeof Object.assign &&
                          (function () {
                            Object.assign = function (t) {
                              if (void 0 === t || null === t) throw new TypeError('Cannot convert undefined or null to object');
                              for (var e = Object(t), i = 1; i < arguments.length; i++) {
                                var a = arguments[i];
                                if (void 0 !== a && null !== a) for (var s in a) a.hasOwnProperty(s) && (e[s] = a[s]);
                              }
                              return e;
                            };
                          })();
                        var s = Object.assign({}, t);
                        return (
                          this.isObject(t) &&
                            this.isObject(e) &&
                            Object.keys(e).forEach(function (n) {
                              i.isObject(e[n]) && n in t ? (s[n] = i.extend(t[n], e[n])) : Object.assign(s, a({}, n, e[n]));
                            }),
                          s
                        );
                      },
                    },
                    {
                      key: 'extendArray',
                      value: function (e, i) {
                        var a = [];
                        return (
                          e.map(function (e) {
                            a.push(t.extend(i, e));
                          }),
                          (e = a)
                        );
                      },
                    },
                    {
                      key: 'addProps',
                      value: function (t, e, i) {
                        'string' == typeof e && (e = e.split('.')), (t[e[0]] = t[e[0]] || {});
                        var a = t[e[0]];
                        return e.length > 1 ? (e.shift(), this.addProps(a, e, i)) : (t[e[0]] = i), t;
                      },
                    },
                    {
                      key: 'clone',
                      value: function (t) {
                        if ('[object Array]' === Object.prototype.toString.call(t)) {
                          for (var e = [], i = 0; i < t.length; i++) e[i] = this.clone(t[i]);
                          return e;
                        }
                        if ('object' === (void 0 === t ? 'undefined' : n(t))) {
                          var a = {};
                          for (var s in t) t.hasOwnProperty(s) && (a[s] = this.clone(t[s]));
                          return a;
                        }
                        return t;
                      },
                    },
                    {
                      key: 'log10',
                      value: function (t) {
                        return Math.log(t) / Math.LN10;
                      },
                    },
                    {
                      key: 'roundToBase10',
                      value: function (t) {
                        return Math.pow(10, Math.floor(Math.log10(t)));
                      },
                    },
                    {
                      key: 'roundToBase',
                      value: function (t, e) {
                        return Math.pow(e, Math.floor(Math.log(t) / Math.log(e)));
                      },
                    },
                    {
                      key: 'getDimensions',
                      value: function (t) {
                        var e = getComputedStyle(t),
                          i = [],
                          a = t.clientHeight,
                          s = t.clientWidth;
                        return (a -= parseFloat(e.paddingTop) + parseFloat(e.paddingBottom)), (s -= parseFloat(e.paddingLeft) + parseFloat(e.paddingRight)), i.push(s), i.push(a), i;
                      },
                    },
                    {
                      key: 'getBoundingClientRect',
                      value: function (t) {
                        var e = t.getBoundingClientRect();
                        return {
                          top: e.top,
                          right: e.right,
                          bottom: e.bottom,
                          left: e.left,
                          width: e.width,
                          height: e.height,
                          x: e.x,
                          y: e.y,
                        };
                      },
                    },
                    {
                      key: 'hexToRgba',
                      value: function () {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '#999999',
                          e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0.6;
                        '#' !== t.substring(0, 1) && (t = '#999999');
                        var i = t.replace('#', '');
                        i = i.match(new RegExp('(.{' + i.length / 3 + '})', 'g'));
                        for (var a = 0; a < i.length; a++) i[a] = parseInt(1 === i[a].length ? i[a] + i[a] : i[a], 16);
                        return void 0 !== e && i.push(e), 'rgba(' + i.join(',') + ')';
                      },
                    },
                    {
                      key: 'getOpacityFromRGBA',
                      value: function (t) {
                        return (t = t.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i))[3];
                      },
                    },
                    {
                      key: 'rgb2hex',
                      value: function (t) {
                        return (t = t.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i)), t && 4 === t.length ? '#' + ('0' + parseInt(t[1], 10).toString(16)).slice(-2) + ('0' + parseInt(t[2], 10).toString(16)).slice(-2) + ('0' + parseInt(t[3], 10).toString(16)).slice(-2) : '';
                      },
                    },
                    {
                      key: 'polarToCartesian',
                      value: function (t, e, i, a) {
                        var s = ((a - 90) * Math.PI) / 180;
                        return { x: t + i * Math.cos(s), y: e + i * Math.sin(s) };
                      },
                    },
                    {
                      key: 'negToZero',
                      value: function (t) {
                        return t < 0 ? 0 : t;
                      },
                    },
                    {
                      key: 'randomString',
                      value: function (t) {
                        for (var e = '', i = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz', a = 0; a < t; a++) e += i.charAt(Math.floor(Math.random() * i.length));
                        return e;
                      },
                    },
                    {
                      key: 'findAncestor',
                      value: function (t, e) {
                        for (; (t = t.parentElement) && !t.classList.contains(e); );
                        return t;
                      },
                    },
                    {
                      key: 'setELstyles',
                      value: function (t, e) {
                        for (var i in e) e.hasOwnProperty(i) && (t.style.key = e[i]);
                      },
                    },
                    {
                      key: 'isNumber',
                      value: function (t) {
                        return !isNaN(t) && parseFloat(Number(t)) === t && !isNaN(parseInt(t, 10));
                      },
                    },
                    {
                      key: 'isFloat',
                      value: function (t) {
                        return Number(t) === t && t % 1 != 0;
                      },
                    },
                    {
                      key: 'isSafari',
                      value: function () {
                        return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
                      },
                    },
                    {
                      key: 'isFirefox',
                      value: function () {
                        return navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
                      },
                    },
                    {
                      key: 'isIE11',
                      value: function () {
                        if (-1 !== window.navigator.userAgent.indexOf('MSIE') || window.navigator.appVersion.indexOf('Trident/') > -1) return !0;
                      },
                    },
                    {
                      key: 'isIE',
                      value: function () {
                        var t = window.navigator.userAgent,
                          e = t.indexOf('MSIE ');
                        if (e > 0) return parseInt(t.substring(e + 5, t.indexOf('.', e)), 10);
                        if (t.indexOf('Trident/') > 0) {
                          var i = t.indexOf('rv:');
                          return parseInt(t.substring(i + 3, t.indexOf('.', i)), 10);
                        }
                        var a = t.indexOf('Edge/');
                        return a > 0 && parseInt(t.substring(a + 5, t.indexOf('.', a)), 10);
                      },
                    },
                  ]
                ),
                t
              );
            })();
          e.default = o;
        },
        function (t, e, i) {
          function a(t, e) {
            if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
          }
          Object.defineProperty(e, '__esModule', { value: !0 });
          var s = (function () {
              function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                  var a = e[i];
                  (a.enumerable = a.enumerable || !1), (a.configurable = !0), 'value' in a && (a.writable = !0), Object.defineProperty(t, a.key, a);
                }
              }
              return function (e, i, a) {
                return i && t(e.prototype, i), a && t(e, a), e;
              };
            })(),
            n = (function (t) {
              return t && t.__esModule ? t : { default: t };
            })(i(1)),
            r = (function () {
              function t(e) {
                a(this, t), (this.ctx = e), (this.w = e.w);
              }
              return (
                s(t, [
                  {
                    key: 'getDefaultFilter',
                    value: function (t) {
                      var e = this.w;
                      t.unfilter(!0), new window.SVG.Filter().size('120%', '180%', '-5%', '-40%'), 'none' !== e.config.states.normal.filter ? this.applyFilter(t, e.config.states.normal.filter.type, e.config.states.normal.filter.value) : e.config.chart.dropShadow.enabled && this.dropShadow(t, e.config.chart.dropShadow);
                    },
                  },
                  {
                    key: 'addNormalFilter',
                    value: function (t) {
                      var e = this.w;
                      e.config.chart.dropShadow.enabled && this.dropShadow(t, e.config.chart.dropShadow);
                    },
                  },
                  {
                    key: 'addDesaturateFilter',
                    value: function (t) {
                      var e = this,
                        i = this.w;
                      t.unfilter(!0);
                      var a = new window.SVG.Filter();
                      a.size('120%', '180%', '-5%', '-40%'),
                        t.filter(function (t) {
                          var s = i.config.chart.dropShadow;
                          (a = s.enabled ? e.addShadow(t, s) : t).colorMatrix('matrix', [0, 0, 0, 0, 0.5, 0, 0, 0, 0, 0.5, 0, 0, 0, 0, 0.5, 0, 0, 0, 1, 0]).colorMatrix('saturate', 0);
                        }),
                        t.filterer.node.setAttribute('filterUnits', 'userSpaceOnUse');
                    },
                  },
                  {
                    key: 'addLightenFilter',
                    value: function (t, e) {
                      var i = this,
                        a = this.w,
                        s = e.intensity;
                      if (!n.default.isFirefox()) {
                        t.unfilter(!0);
                        var r = new window.SVG.Filter();
                        r.size('120%', '180%', '-5%', '-40%'),
                          t.filter(function (t) {
                            var e = a.config.chart.dropShadow;
                            (r = e.enabled ? i.addShadow(t, e) : t).componentTransfer({
                              rgb: { type: 'linear', slope: 1.5, intercept: s },
                            });
                          }),
                          t.filterer.node.setAttribute('filterUnits', 'userSpaceOnUse');
                      }
                    },
                  },
                  {
                    key: 'addDarkenFilter',
                    value: function (t, e) {
                      var i = this,
                        a = this.w,
                        s = e.intensity;
                      if (!n.default.isFirefox()) {
                        t.unfilter(!0);
                        var r = new window.SVG.Filter();
                        r.size('120%', '180%', '-5%', '-40%'),
                          t.filter(function (t) {
                            var e = a.config.chart.dropShadow;
                            (r = e.enabled ? i.addShadow(t, e) : t).componentTransfer({ rgb: { type: 'linear', slope: s } });
                          }),
                          t.filterer.node.setAttribute('filterUnits', 'userSpaceOnUse');
                      }
                    },
                  },
                  {
                    key: 'applyFilter',
                    value: function (t, e) {
                      var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0.5;
                      switch (e) {
                        case 'none':
                          this.addNormalFilter(t);
                          break;
                        case 'lighten':
                          this.addLightenFilter(t, { intensity: i });
                          break;
                        case 'darken':
                          this.addDarkenFilter(t, { intensity: i });
                          break;
                        case 'desaturate':
                          this.addDesaturateFilter(t);
                      }
                    },
                  },
                  {
                    key: 'addShadow',
                    value: function (t, e) {
                      var i = e.blur,
                        a = e.top,
                        s = e.left,
                        n = e.opacity,
                        r = t.flood('black', n).composite(t.sourceAlpha, 'in').offset(s, a).gaussianBlur(i).merge(t.source);
                      return t.blend(t.source, r);
                    },
                  },
                  {
                    key: 'dropShadow',
                    value: function (t, e) {
                      var i = e.top,
                        a = e.left,
                        s = e.blur,
                        r = e.opacity;
                      return (
                        t.unfilter(!0),
                        new window.SVG.Filter().size('120%', '180%', '-5%', '-40%'),
                        t.filter(function (t) {
                          var e = null;
                          (e = n.default.isSafari() || n.default.isFirefox() || n.default.isIE() ? t.flood('black', r).composite(t.sourceAlpha, 'in').offset(a, i).gaussianBlur(s) : t.flood('black', r).composite(t.sourceAlpha, 'in').offset(a, i).gaussianBlur(s).merge(t.source)), t.blend(t.source, e);
                        }),
                        t.filterer.node.setAttribute('filterUnits', 'userSpaceOnUse'),
                        t
                      );
                    },
                  },
                ]),
                t
              );
            })();
          e.default = r;
        },
        function (t, e, i) {
          function a(t, e) {
            if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
          }
          Object.defineProperty(e, '__esModule', { value: !0 });
          var s = (function () {
              function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                  var a = e[i];
                  (a.enumerable = a.enumerable || !1), (a.configurable = !0), 'value' in a && (a.writable = !0), Object.defineProperty(t, a.key, a);
                }
              }
              return function (e, i, a) {
                return i && t(e.prototype, i), a && t(e, a), e;
              };
            })(),
            n = (function () {
              function t(e) {
                a(this, t), (this.ctx = e), (this.w = e.w);
              }
              return (
                s(
                  t,
                  [
                    {
                      key: 'checkComboSeries',
                      value: function () {
                        var t = this.w;
                        t.config.series.length &&
                          void 0 !== t.config.series[0].type &&
                          ((t.globals.comboCharts = !0),
                          t.config.series.forEach(function (e) {
                            ('bar' !== e.type && 'column' !== e.type) || (t.globals.comboChartsHasBars = !0);
                          }));
                      },
                    },
                    {
                      key: 'getStackedSeriesTotals',
                      value: function () {
                        for (var t = this.w, e = [], i = 0; i < t.globals.series[t.globals.maxValsInArrayIndex].length; i++) {
                          for (var a = 0, s = 0; s < t.globals.series.length; s++) a += t.globals.series[s][i];
                          e.push(a);
                        }
                        return (t.globals.stackedSeriesTotals = e), e;
                      },
                    },
                    {
                      key: 'getSeriesTotalByIndex',
                      value: function () {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                        return null === t
                          ? this.w.config.series.reduce(function (t, e) {
                              return t + e;
                            }, 0)
                          : this.w.config.series[t].data.reduce(function (t, e) {
                              return t + e;
                            }, 0);
                      },
                    },
                    {
                      key: 'getLargestSeries',
                      value: function () {
                        var t = this.w;
                        t.globals.maxValsInArrayIndex = t.globals.series
                          .map(function (t) {
                            return t.length;
                          })
                          .indexOf(
                            Math.max.apply(
                              Math,
                              t.globals.series.map(function (t) {
                                return t.length;
                              })
                            )
                          );
                      },
                    },
                    {
                      key: 'getLargestMarkerSize',
                      value: function () {
                        var t = this.w,
                          e = 0;
                        return (
                          t.globals.markers.size.forEach(function (t) {
                            e = Math.max(e, t);
                          }),
                          (t.globals.markers.largestSize = e),
                          e
                        );
                      },
                    },
                    {
                      key: 'getSeriesTotals',
                      value: function () {
                        var t = this.w;
                        t.globals.seriesTotals = t.globals.series.map(function (t, e) {
                          var i = 0;
                          if (Array.isArray(t)) for (var a = 0; a < t.length; a++) i += t[a];
                          else i += t;
                          return i;
                        });
                      },
                    },
                    {
                      key: 'getSeriesTotalsXRange',
                      value: function (t, e) {
                        var i = this.w;
                        return i.globals.series.map(function (a, s) {
                          for (var n = 0, r = 0; r < a.length; r++) i.globals.seriesX[s][r] > t && i.globals.seriesX[s][r] < e && (n += a[r]);
                          return n;
                        });
                      },
                    },
                    {
                      key: 'getPercentSeries',
                      value: function () {
                        var t = this.w;
                        t.globals.seriesPercent = t.globals.series.map(function (e, i) {
                          var a = [];
                          if (Array.isArray(e))
                            for (var s = 0; s < e.length; s++) {
                              var n = t.globals.stackedSeriesTotals[s],
                                r = (100 * e[s]) / n;
                              a.push(r);
                            }
                          else {
                            var o =
                              (100 * e) /
                              t.globals.seriesTotals.reduce(function (t, e) {
                                return t + e;
                              }, 0);
                            a.push(o);
                          }
                          return a;
                        });
                      },
                    },
                    {
                      key: 'getCalculatedRatios',
                      value: function () {
                        var t = this.w.globals,
                          e = [],
                          i = 0,
                          a = 0,
                          s = 0,
                          n = 0,
                          r = 0,
                          o = [],
                          l = 0.1,
                          h = 0;
                        if (((t.yRange = []), t.isMultipleYAxis)) for (var c = 0; c < t.minYArr.length; c++) t.yRange.push(Math.abs(t.minYArr[c] - t.maxYArr[c])), o.push(0);
                        else t.yRange.push(Math.abs(t.minY - t.maxY));
                        (t.xRange = Math.abs(t.maxX - t.minX)), (t.zRange = Math.abs(t.maxZ - t.minZ));
                        for (var d = 0; d < t.yRange.length; d++) e.push(t.yRange[d] / t.gridHeight);
                        if (((a = t.xRange / t.gridWidth), (s = Math.abs(t.initialmaxX - t.initialminX) / t.gridWidth), (i = t.yRange / t.gridWidth), (n = t.xRange / t.gridHeight), (r = (t.zRange / t.gridHeight) * 16), t.minY !== Number.MIN_VALUE && 0 !== Math.abs(t.minY))) {
                          if (((t.hasNegs = !0), (o = []), t.isMultipleYAxis)) for (var u = 0; u < e.length; u++) o.push(-t.minYArr[u] / e[u]);
                          else o.push(-t.minY / e[0]);
                          (l = -t.minY / i), (h = t.minX / a);
                        } else o.push(0);
                        return {
                          yRatio: e,
                          invertedYRatio: i,
                          zRatio: r,
                          xRatio: a,
                          initialXRatio: s,
                          invertedXRatio: n,
                          baseLineInvertedY: l,
                          baseLineY: o,
                          baseLineX: h,
                        };
                      },
                    },
                    {
                      key: 'getLogSeries',
                      value: function (t) {
                        var e = this.w;
                        return (
                          (e.globals.seriesLog = t.map(function (t, i) {
                            return e.config.yaxis[i] && e.config.yaxis[i].logarithmic
                              ? t.map(function (t) {
                                  return null === t ? null : (Math.log(t) - Math.log(e.globals.minYArr[i])) / (Math.log(e.globals.maxYArr[i]) - Math.log(e.globals.minYArr[i]));
                                })
                              : t;
                          })),
                          e.globals.seriesLog
                        );
                      },
                    },
                    {
                      key: 'getLogYRatios',
                      value: function (t) {
                        var e = this,
                          i = this.w,
                          a = this.w.globals;
                        return (
                          (a.yLogRatio = t.slice()),
                          (a.logYRange = a.yRange.map(function (t, s) {
                            if (i.config.yaxis[s] && e.w.config.yaxis[s].logarithmic) {
                              var n = Number.MIN_SAFE_INTEGER,
                                r = Number.MAX_SAFE_INTEGER,
                                o = 1;
                              return (
                                a.seriesLog.forEach(function (t, e) {
                                  t.forEach(function (t) {
                                    i.config.yaxis[e] && i.config.yaxis[e].logarithmic && ((n = Math.max(t, n)), (r = Math.min(t, r)));
                                  });
                                }),
                                (o = Math.pow(a.yRange[s], Math.abs(r - n) / a.yRange[s])),
                                (a.yLogRatio[s] = o / a.gridHeight),
                                o
                              );
                            }
                          })),
                          a.yLogRatio
                        );
                      },
                    },
                  ],
                  [
                    {
                      key: 'extendArrayProps',
                      value: function (t, e) {
                        return e.yaxis && (e = t.extendYAxis(e)), e.annotations && (e.annotations.yaxis && (e = t.extendYAxisAnnotations(e)), e.annotations.xaxis && (e = t.extendXAxisAnnotations(e)), e.annotations.points && (e = t.extendPointAnnotations(e))), e;
                      },
                    },
                  ]
                ),
                t
              );
            })();
          e.default = n;
        },
        function (t, e, i) {
          function a(t) {
            return t && t.__esModule ? t : { default: t };
          }
          function s(t, e) {
            if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
          }
          Object.defineProperty(e, '__esModule', { value: !0 });
          var n = (function () {
              function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                  var a = e[i];
                  (a.enumerable = a.enumerable || !1), (a.configurable = !0), 'value' in a && (a.writable = !0), Object.defineProperty(t, a.key, a);
                }
              }
              return function (e, i, a) {
                return i && t(e.prototype, i), a && t(e, a), e;
              };
            })(),
            r = a(i(0)),
            o = a(i(1)),
            l = (function () {
              function t(e) {
                s(this, t), (this.ctx = e), (this.w = e.w), (this.opts = null), (this.seriesIndex = 0);
              }
              return (
                n(t, [
                  {
                    key: 'clippedImgArea',
                    value: function (t) {
                      var e = this.w,
                        i = e.config,
                        a = parseInt(e.globals.gridWidth),
                        s = parseInt(e.globals.gridHeight),
                        n = a > s ? a : s,
                        o = t.image,
                        l = 0,
                        h = 0;
                      void 0 === t.width && void 0 === t.height ? (void 0 !== i.fill.image.width && void 0 !== i.fill.image.height ? ((l = i.fill.image.width + 1), (h = i.fill.image.height)) : ((l = n + 1), (h = n))) : ((l = t.width), (h = t.height));
                      var c = document.createElementNS(e.globals.svgNS, 'pattern');
                      r.default.setAttrs(c, { id: t.patternID, patternUnits: 'userSpaceOnUse', width: l + 'px', height: h + 'px' });
                      var d = document.createElementNS(e.globals.svgNS, 'image');
                      c.appendChild(d), d.setAttributeNS('http://www.w3.org/1999/xlink', 'href', o), r.default.setAttrs(d, { x: 0, y: 0, preserveAspectRatio: 'none', width: l + 'px', height: h + 'px' }), (d.style.opacity = t.opacity), e.globals.dom.elDefs.node.appendChild(c);
                    },
                  },
                  {
                    key: 'getSeriesIndex',
                    value: function (t) {
                      var e = this.w;
                      return ('bar' === e.config.chart.type && e.config.plotOptions.bar.distributed) || 'heatmap' === e.config.chart.type ? (this.seriesIndex = t.seriesNumber) : (this.seriesIndex = t.seriesNumber % e.globals.series.length), this.seriesIndex;
                    },
                  },
                  {
                    key: 'fillPath',
                    value: function (t, e) {
                      var i = this.w;
                      this.opts = e;
                      var a = this.w.config,
                        s = void 0,
                        n = void 0,
                        r = void 0;
                      this.seriesIndex = this.getSeriesIndex(e);
                      var l = this.getFillColors(),
                        h = l[this.seriesIndex],
                        c = Array.isArray(a.fill.opacity) ? a.fill.opacity[this.seriesIndex] : a.fill.opacity,
                        d = h;
                      return (
                        -1 === h.indexOf('rgb') ? (d = o.default.hexToRgba(h, c)) : h.indexOf('rgba') > -1 && (c = '0.' + o.default.getOpacityFromRGBA(l[this.seriesIndex])),
                        'pattern' === a.fill.type && (n = this.handlePatternFill(n, h, c, d)),
                        'gradient' === a.fill.type && (r = this.handleGradientFill(r, h, c)),
                        a.fill.image.src.length > 0 && 'image' === a.fill.type
                          ? e.seriesNumber < a.fill.image.src.length
                            ? (this.clippedImgArea({
                                opacity: c,
                                image: a.fill.image.src[e.seriesNumber],
                                patternID: 'pattern' + i.globals.cuid + (e.seriesNumber + 1),
                              }),
                              (s = 'url(#pattern' + i.globals.cuid + (e.seriesNumber + 1) + ')'))
                            : (s = d)
                          : (s = 'gradient' === a.fill.type ? r : 'pattern' === a.fill.type ? n : d),
                        e.solid && (s = d),
                        e.color && (s = e.color),
                        s
                      );
                    },
                  },
                  {
                    key: 'getFillColors',
                    value: function () {
                      var t = this.w,
                        e = t.config,
                        i = this.opts,
                        a = [];
                      return t.globals.comboCharts ? ('line' === t.config.series[this.seriesIndex].type ? (t.globals.stroke.colors instanceof Array ? (a = t.globals.stroke.colors) : a.push(t.globals.stroke.colors)) : t.globals.fill.colors instanceof Array ? (a = t.globals.fill.colors) : a.push(t.globals.fill.colors)) : 'line' === e.chart.type ? (t.globals.stroke.colors instanceof Array ? (a = t.globals.stroke.colors) : a.push(t.globals.stroke.colors)) : t.globals.fill.colors instanceof Array ? (a = t.globals.fill.colors) : a.push(t.globals.fill.colors), void 0 !== i.fillColors && ((a = []), i.fillColors instanceof Array ? (a = i.fillColors.slice()) : a.push(i.fillColors)), a;
                    },
                  },
                  {
                    key: 'handlePatternFill',
                    value: function (t, e, i, a) {
                      var s = this.w.config,
                        n = this.opts,
                        o = new r.default(this.ctx),
                        l = void 0 === s.fill.pattern.strokeWidth ? (Array.isArray(s.stroke.width) ? s.stroke.width[this.seriesIndex] : s.stroke.width) : Array.isArray(s.fill.pattern.strokeWidth) ? s.fill.pattern.strokeWidth[this.seriesIndex] : s.fill.pattern.strokeWidth,
                        h = e;
                      return s.fill.pattern.style instanceof Array ? (void 0 !== s.fill.pattern.style[n.seriesNumber] ? o.drawPattern(s.fill.pattern.style[n.seriesNumber], s.fill.pattern.width, s.fill.pattern.height, h, l, i) : a) : o.drawPattern(s.fill.pattern.style, s.fill.pattern.width, s.fill.pattern.height, h, l, i);
                    },
                  },
                  {
                    key: 'handleGradientFill',
                    value: function (t, e, i) {
                      var a = this.w.config,
                        s = this.opts,
                        n = new r.default(this.ctx),
                        l = new o.default(),
                        h = a.fill.gradient.type,
                        c = void 0,
                        d = void 0,
                        u = void 0 === a.fill.gradient.opacityFrom ? i : a.fill.gradient.opacityFrom,
                        f = void 0 === a.fill.gradient.opacityTo ? i : a.fill.gradient.opacityTo;
                      if (((c = e), (d = void 0 === a.fill.gradient.gradientToColors || 0 === a.fill.gradient.gradientToColors.length ? ('dark' === a.fill.gradient.shade ? l.shadeColor(-1 * parseFloat(a.fill.gradient.shadeIntensity), e) : l.shadeColor(parseFloat(a.fill.gradient.shadeIntensity), e)) : a.fill.gradient.gradientToColors[s.seriesNumber]), a.fill.gradient.inverseColors)) {
                        var g = c;
                        (c = d), (d = g);
                      }
                      return n.drawGradient(h, c, d, u, f, s.size, a.fill.gradient.stops);
                    },
                  },
                ]),
                t
              );
            })();
          e.default = l;
        },
        function (t, e, i) {
          function a(t, e) {
            if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
          }
          var s = (function () {
              function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                  var a = e[i];
                  (a.enumerable = a.enumerable || !1), (a.configurable = !0), 'value' in a && (a.writable = !0), Object.defineProperty(t, a.key, a);
                }
              }
              return function (e, i, a) {
                return i && t(e.prototype, i), a && t(e, a), e;
              };
            })(),
            n = (function (t) {
              return t && t.__esModule ? t : { default: t };
            })(i(1)),
            r = (function () {
              function t(e) {
                a(this, t), (this.ctx = e), (this.w = e.w), this.setEasingFunctions();
              }
              return (
                s(t, [
                  {
                    key: 'setEasingFunctions',
                    value: function () {
                      var t = void 0;
                      switch (this.w.config.chart.animations.easing) {
                        case 'linear':
                          t = '-';
                          break;
                        case 'easein':
                          t = '<';
                          break;
                        case 'easeout':
                          t = '>';
                          break;
                        case 'easeinout':
                          t = '<>';
                          break;
                        case 'swing':
                          t = function (t) {
                            var e = 1.70158;
                            return (t -= 1) * t * ((e + 1) * t + e) + 1;
                          };
                          break;
                        case 'bounce':
                          t = function (t) {
                            return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375 : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
                          };
                          break;
                        case 'elastic':
                          t = function (t) {
                            return t === !!t ? t : Math.pow(2, -10 * t) * Math.sin(((t - 0.075) * (2 * Math.PI)) / 0.3) + 1;
                          };
                          break;
                        default:
                          t = '<>';
                      }
                      this.w.globals.easing = t;
                    },
                  },
                  {
                    key: 'animateLine',
                    value: function (t, e, i, a) {
                      t.attr(e).animate(a).attr(i);
                    },
                  },
                  {
                    key: 'animateCircleRadius',
                    value: function (t, e, i, a, s) {
                      e || (e = 0), t.attr({ r: e }).animate(a, s).attr({ r: i });
                    },
                  },
                  {
                    key: 'animateCircle',
                    value: function (t, e, i, a, s) {
                      t.attr({ r: e.r, cx: e.cx, cy: e.cy }).animate(a, s).attr({ r: i.r, cx: i.cx, cy: i.cy });
                    },
                  },
                  {
                    key: 'animateRect',
                    value: function (t, e, i, a) {
                      t.attr(e).animate(a).attr(i);
                    },
                  },
                  {
                    key: 'animatePathsGradually',
                    value: function (t) {
                      var e = t.el,
                        i = t.j,
                        a = t.pathFrom,
                        s = t.pathTo,
                        n = t.speed,
                        r = t.delay,
                        o = t.strokeWidth,
                        l = this,
                        h = this.w,
                        c = 0;
                      h.config.chart.animations.animateGradually.enabled && (c = h.config.chart.animations.animateGradually.delay), h.config.chart.animations.dynamicAnimation.enabled && h.globals.dataChanged && (c = 0), l.morphSVG(e, i, a, s, n, o, r * c);
                    },
                  },
                  {
                    key: 'showDelayedElements',
                    value: function () {
                      this.w.globals.delayedElements.forEach(function (t) {
                        t.el.classList.remove('hidden');
                      });
                    },
                  },
                  {
                    key: 'morphSVG',
                    value: function (t, e, i, a, s, r, o) {
                      var l = this,
                        h = this.w;
                      i || (i = t.attr('pathFrom')),
                        a || (a = t.attr('pathTo')),
                        (i.indexOf('undefined') > -1 || i.indexOf('NaN') > -1) && ((i = 'M 0 ' + h.globals.gridHeight), (s = 1)),
                        (a.indexOf('undefined') > -1 || a.indexOf('NaN') > -1) && ((a = 'M 0 ' + h.globals.gridHeight), (s = 1)),
                        h.globals.shouldAnimate || (s = 1),
                        t
                          .plot(i)
                          .animate(1, h.globals.easing, o)
                          .plot(i)
                          .animate(s, h.globals.easing, o)
                          .plot(a)
                          .afterAll(function () {
                            'function' == typeof h.config.chart.events.animationEnd && (n.default.isNumber(e) ? e === h.globals.series[h.globals.maxValsInArrayIndex].length - 2 && h.globals.shouldAnimate && h.config.chart.events.animationEnd(l.ctx, h) : h.globals.shouldAnimate && h.config.chart.events.animationEnd(l.ctx, h)), l.showDelayedElements();
                          });
                    },
                  },
                ]),
                t
              );
            })();
          t.exports = r;
        },
        function (t, e, i) {
          function a(t, e) {
            if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
          }
          Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
          var s = (function () {
              function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                  var a = e[i];
                  (a.enumerable = a.enumerable || !1), (a.configurable = !0), 'value' in a && (a.writable = !0), Object.defineProperty(t, a.key, a);
                }
              }
              return function (e, i, a) {
                return i && t(e.prototype, i), a && t(e, a), e;
              };
            })(),
            n = (function (t) {
              return t && t.__esModule ? t : { default: t };
            })(i(0)),
            r = (function () {
              function t(e) {
                a(this, t), (this.ctx = e), (this.w = e.w);
              }
              return (
                s(t, [
                  {
                    key: 'getAllSeriesEls',
                    value: function () {
                      return this.w.globals.dom.baseEl.querySelectorAll('.apexcharts-series');
                    },
                  },
                  {
                    key: 'getSeriesByName',
                    value: function (t) {
                      return this.w.globals.dom.baseEl.querySelector('.apexcharts-series.' + t.toString().replace(/ /g, '-'));
                    },
                  },
                  {
                    key: 'addCollapsedClassToSeries',
                    value: function (t, e) {
                      for (var i = this.w, a = 0; a < i.globals.collapsedSeries.length; a++) i.globals.collapsedSeries[a].index === e && t.node.classList.add('apexcharts-series-collapsed');
                    },
                  },
                  {
                    key: 'toggleSeriesOnHover',
                    value: function (t, e) {
                      var i = this.w,
                        a = i.globals.dom.baseEl.querySelectorAll('.apexcharts-series');
                      if ('mousemove' === t.type) {
                        var s = parseInt(e.getAttribute('rel')) - 1,
                          n = null;
                        n = i.globals.axisCharts || 'radialBar' === i.config.chart.type ? (i.globals.axisCharts ? i.globals.dom.baseEl.querySelector(".apexcharts-series[data\\:realIndex='" + s + "']") : i.globals.dom.baseEl.querySelector(".apexcharts-series[rel='" + (s + 1) + "']")) : i.globals.dom.baseEl.querySelector(".apexcharts-series[rel='" + (s + 1) + "'] path");
                        for (var r = 0; r < a.length; r++) a[r].classList.add('legend-mouseover-inactive');
                        null !== n && (i.globals.axisCharts || n.parentNode.classList.remove('legend-mouseover-inactive'), n.classList.remove('legend-mouseover-inactive'));
                      } else if ('mouseout' === t.type) for (var o = 0; o < a.length; o++) a[o].classList.remove('legend-mouseover-inactive');
                    },
                  },
                  {
                    key: 'highlightRangeInSeries',
                    value: function (t, e) {
                      var i = this.w,
                        a = i.globals.dom.baseEl.querySelectorAll('.apexcharts-heatmap-rect'),
                        s = function () {
                          for (var t = 0; t < a.length; t++) a[t].classList.remove('legend-mouseover-inactive');
                        };
                      if ('mousemove' === t.type) {
                        var n = parseInt(e.getAttribute('rel')) - 1;
                        s(),
                          (function () {
                            for (var t = 0; t < a.length; t++) a[t].classList.add('legend-mouseover-inactive');
                          })(),
                          (function (t) {
                            for (var e = 0; e < a.length; e++) {
                              var i = parseInt(a[e].getAttribute('val'));
                              i >= t.from && i <= t.to && a[e].classList.remove('legend-mouseover-inactive');
                            }
                          })(i.config.plotOptions.heatmap.colorScale.ranges[n]);
                      } else 'mouseout' === t.type && s();
                    },
                  },
                  {
                    key: 'getActiveSeriesIndex',
                    value: function () {
                      var t = this.w,
                        e = 0;
                      if (t.globals.series.length > 1)
                        for (
                          var i = t.globals.series.map(function (e, i) {
                              return e.length > 0 && 'bar' !== t.config.series[i].type && 'column' !== t.config.series[i].type ? i : -1;
                            }),
                            a = 0;
                          a < i.length;
                          a++
                        )
                          if (-1 !== i[a]) {
                            e = i[a];
                            break;
                          }
                      return e;
                    },
                  },
                  {
                    key: 'getActiveConfigSeriesIndex',
                    value: function () {
                      var t = this.w,
                        e = 0;
                      if (t.config.series.length > 1)
                        for (
                          var i = t.config.series.map(function (t, e) {
                              return t.data && t.data.length > 0 ? e : -1;
                            }),
                            a = 0;
                          a < i.length;
                          a++
                        )
                          if (-1 !== i[a]) {
                            e = i[a];
                            break;
                          }
                      return e;
                    },
                  },
                  {
                    key: 'getPreviousPaths',
                    value: function () {
                      function t(t, i, a) {
                        for (var s = t[i].childNodes, n = { type: a, paths: [], realIndex: t[i].getAttribute('data:realIndex') }, r = 0; r < s.length; r++)
                          if (s[r].hasAttribute('pathTo')) {
                            var o = s[r].getAttribute('pathTo');
                            'area' === a ? (s[r].classList.contains('apexcharts-line') || s[r].classList.contains('apexcharts-area')) && n.paths.push({ d: o }) : n.paths.push({ d: o });
                          }
                        e.globals.previousPaths.push(n);
                      }
                      var e = this.w;
                      e.globals.previousPaths = [];
                      var i = e.globals.dom.baseEl.querySelectorAll('.apexcharts-line-series .apexcharts-series');
                      if (i.length > 0) for (var a = i.length - 1; a >= 0; a--) t(i, a, 'line');
                      var s = e.globals.dom.baseEl.querySelectorAll('.apexcharts-area-series .apexcharts-series');
                      if (s.length > 0) for (var n = s.length - 1; n >= 0; n--) t(s, n, 'area');
                      var r = e.globals.dom.baseEl.querySelectorAll('.apexcharts-bar-series .apexcharts-series');
                      if (r.length > 0) for (var o = 0; o < r.length; o++) t(r, o, 'bar');
                      var l = e.globals.dom.baseEl.querySelectorAll('.apexcharts-candlestick-series .apexcharts-series');
                      if (l.length > 0) for (var h = 0; h < l.length; h++) t(l, h, 'candlestick');
                      var c = e.globals.dom.baseEl.querySelectorAll('.apexcharts-bubble-series .apexcharts-series');
                      if (c.length > 0)
                        for (var d = 0; d < c.length; d++) {
                          for (var u = e.globals.dom.baseEl.querySelectorAll(".apexcharts-bubble-series .apexcharts-series[data\\:realIndex='" + d + "'] circle"), f = [], g = 0; g < u.length; g++) f.push({ x: u[g].getAttribute('cx'), y: u[g].getAttribute('cy'), r: u[g].getAttribute('r') });
                          e.globals.previousPaths.push(f);
                        }
                      var p = e.globals.dom.baseEl.querySelectorAll('.apexcharts-scatter-series .apexcharts-series');
                      if (p.length > 0)
                        for (var x = 0; x < p.length; x++) {
                          for (var b = e.globals.dom.baseEl.querySelectorAll(".apexcharts-scatter-series .apexcharts-series[data\\:realIndex='" + x + "'] circle"), v = [], m = 0; m < b.length; m++) v.push({ x: b[m].getAttribute('cx'), y: b[m].getAttribute('cy'), r: b[m].getAttribute('r') });
                          e.globals.previousPaths.push(v);
                        }
                      var y = e.globals.dom.baseEl.querySelectorAll('.apexcharts-heatmap .apexcharts-series');
                      if (y.length > 0)
                        for (var w = 0; w < y.length; w++) {
                          for (var k = e.globals.dom.baseEl.querySelectorAll(".apexcharts-heatmap .apexcharts-series[data\\:realIndex='" + w + "'] rect"), S = [], A = 0; A < k.length; A++) S.push({ color: k[A].getAttribute('color') });
                          e.globals.previousPaths.push(S);
                        }
                      e.globals.axisCharts || (e.globals.previousPaths = e.globals.series);
                    },
                  },
                  {
                    key: 'handleNoData',
                    value: function () {
                      var t = this.w,
                        e = this,
                        i = t.config.noData,
                        a = new n.default(e.ctx),
                        s = t.globals.svgWidth / 2,
                        r = t.globals.svgHeight / 2,
                        o = 'middle';
                      if (((t.globals.noData = !0), 'left' === i.align ? ((s = 10), (o = 'start')) : 'right' === i.align && ((s = t.globals.svgWidth - 10), (o = 'end')), 'top' === i.verticalAlign ? (r = 50) : 'bottom' === i.verticalAlign && (r = t.globals.svgHeight - 50), (s += i.offsetX), (r = r + parseInt(i.style.fontSize) + 2), void 0 !== i.text && '' !== i.text)) {
                        var l = a.drawText({
                          x: s,
                          y: r,
                          text: i.text,
                          textAnchor: o,
                          fontSize: i.style.fontSize,
                          fontFamily: i.style.fontFamily,
                          foreColor: i.style.color,
                          opacity: 1,
                          class: 'apexcharts-text-nodata',
                        });
                        l.node.setAttribute('class', 'apexcharts-title-text'), t.globals.dom.Paper.add(l);
                      }
                    },
                  },
                  {
                    key: 'setNullSeriesToZeroValues',
                    value: function (t) {
                      for (var e = this.w, i = 0; i < t.length; i++) if (0 === t[i].length) for (var a = 0; a < t[e.globals.maxValsInArrayIndex].length; a++) t[i].push(0);
                      return t;
                    },
                  },
                  {
                    key: 'hasAllSeriesEqualX',
                    value: function () {
                      for (var t = !0, e = this.w, i = this.filteredSeriesX(), a = 0; a < i.length - 1; a++)
                        if (i[a][0] !== i[a + 1][0]) {
                          t = !1;
                          break;
                        }
                      return (e.globals.allSeriesHasEqualX = t), t;
                    },
                  },
                  {
                    key: 'filteredSeriesX',
                    value: function () {
                      var t = this.w.globals.seriesX.map(function (t, e) {
                        return t.length > 0 ? t : [];
                      });
                      return t;
                    },
                  },
                ]),
                t
              );
            })();
          e.default = r;
        },
        function (t, e, i) {
          function a(t) {
            return t && t.__esModule ? t : { default: t };
          }
          function s(t, e) {
            if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
          }
          Object.defineProperty(e, '__esModule', { value: !0 });
          var n = (function () {
              function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                  var a = e[i];
                  (a.enumerable = a.enumerable || !1), (a.configurable = !0), 'value' in a && (a.writable = !0), Object.defineProperty(t, a.key, a);
                }
              }
              return function (e, i, a) {
                return i && t(e.prototype, i), a && t(e, a), e;
              };
            })(),
            r = a(i(16)),
            o = a(i(1)),
            l = (function () {
              function t(e) {
                s(this, t), (this.ctx = e), (this.w = e.w), (this.tooltipKeyFormat = 'dd MMM');
              }
              return (
                n(t, [
                  {
                    key: 'xLabelFormat',
                    value: function (t, e) {
                      var i = this.w;
                      return 'datetime' === i.config.xaxis.type && void 0 === i.config.tooltip.x.formatter ? new r.default(this.ctx).formatDate(new Date(e), i.config.tooltip.x.format, !0, !0) : t(e);
                    },
                  },
                  {
                    key: 'setLabelFormatters',
                    value: function () {
                      var t = this.w;
                      return (
                        (t.globals.xLabelFormatter = function (t) {
                          return t;
                        }),
                        (t.globals.xaxisTooltipFormatter = function (t) {
                          return t;
                        }),
                        (t.globals.ttKeyFormatter = function (t) {
                          return t;
                        }),
                        (t.globals.ttZFormatter = function (t) {
                          return t;
                        }),
                        (t.globals.legendFormatter = function (t) {
                          return t;
                        }),
                        'function' == typeof t.config.tooltip.x.formatter && (t.globals.ttKeyFormatter = t.config.tooltip.x.formatter),
                        'function' == typeof t.config.xaxis.tooltip.formatter && (t.globals.xaxisTooltipFormatter = t.config.xaxis.tooltip.formatter),
                        Array.isArray(t.config.tooltip.y) ? (t.globals.ttVal = t.config.tooltip.y) : void 0 !== t.config.tooltip.y.formatter && (t.globals.ttVal = t.config.tooltip.y),
                        void 0 !== t.config.tooltip.z.formatter && (t.globals.ttZFormatter = t.config.tooltip.z.formatter),
                        void 0 !== t.config.legend.formatter && (t.globals.legendFormatter = t.config.legend.formatter),
                        void 0 !== t.config.xaxis.labels.formatter
                          ? (t.globals.xLabelFormatter = t.config.xaxis.labels.formatter)
                          : (t.globals.xLabelFormatter = function (e) {
                              return o.default.isNumber(e) ? ('numeric' === t.config.xaxis.type && t.globals.dataPoints < 50 ? e.toFixed(1) : e.toFixed(0)) : e;
                            }),
                        t.config.yaxis.forEach(function (e, i) {
                          void 0 !== e.labels.formatter
                            ? (t.globals.yLabelFormatters[i] = e.labels.formatter)
                            : (t.globals.yLabelFormatters[i] = function (i) {
                                return o.default.isNumber(i) ? (0 !== t.globals.yValueDecimal ? i.toFixed(e.decimalsInFloat) : i.toFixed(0)) : i;
                              });
                        }),
                        t.globals
                      );
                    },
                  },
                  {
                    key: 'heatmapLabelFormatters',
                    value: function () {
                      var t = this.w;
                      if ('heatmap' === t.config.chart.type) {
                        t.globals.yAxisScale[0].result = t.globals.seriesNames.slice();
                        var e = t.globals.seriesNames.reduce(function (t, e) {
                          return t.length > e.length ? t : e;
                        }, 0);
                        (t.globals.yAxisScale[0].niceMax = e), (t.globals.yAxisScale[0].niceMin = e);
                      }
                    },
                  },
                ]),
                t
              );
            })();
          e.default = l;
        },
        function (t, e, i) {
          function a(t) {
            return t && t.__esModule ? t : { default: t };
          }
          function s(t, e) {
            if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
          }
          var n = (function () {
              function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                  var a = e[i];
                  (a.enumerable = a.enumerable || !1), (a.configurable = !0), 'value' in a && (a.writable = !0), Object.defineProperty(t, a.key, a);
                }
              }
              return function (e, i, a) {
                return i && t(e.prototype, i), a && t(e, a), e;
              };
            })(),
            r = a(i(2)),
            o = a(i(0)),
            l = a(i(1)),
            h = (function () {
              function t(e, i) {
                s(this, t), (this.ctx = e), (this.w = e.w);
              }
              return (
                n(t, [
                  {
                    key: 'setGlobalMarkerSize',
                    value: function () {
                      var t = this.w;
                      if (((t.globals.markers.size = Array.isArray(t.config.markers.size) ? t.config.markers.size : [t.config.markers.size]), t.globals.markers.size.length > 0)) {
                        if (t.globals.markers.size.length < t.globals.series.length + 1) for (var e = 0; e <= t.globals.series.length; e++) void 0 === t.globals.markers.size[e] && t.globals.markers.size.push(t.globals.markers.size[0]);
                      } else
                        t.globals.markers.size = t.config.series.map(function (e) {
                          return t.config.markers.size;
                        });
                    },
                  },
                  {
                    key: 'plotChartMarkers',
                    value: function (t, e, i) {
                      var a = this,
                        s = this.w,
                        n = t,
                        r = null,
                        h = new o.default(this.ctx),
                        c = void 0;
                      if ((s.globals.markers.size[e] > 0 && (r = h.group({ class: 'apexcharts-series-markers' })).attr('clip-path', 'url(#gridRectMarkerMask' + s.globals.cuid + ')'), n.x instanceof Array))
                        for (var d = 0; d < n.x.length; d++)
                          !(function (t) {
                            var o = i,
                              d = 'apexcharts-marker';
                            if ((('line' !== s.config.chart.type && 'area' !== s.config.chart.type) || s.globals.comboCharts || s.config.tooltip.intersect || (d += ' no-pointer-events'), Array.isArray(s.config.markers.size) ? s.globals.markers.size[e] > 0 : s.config.markers.size > 0)) {
                              l.default.isNumber(n.y[t]) ? (d += ' w' + (Math.random() + 1).toString(36).substring(4)) : (d = 'apexcharts-nullpoint');
                              var u = a.getMarkerConfig(d, e);
                              s.config.markers.discrete.map(function (t) {
                                t.seriesIndex === e && t.dataPointIndex === o && ((u.pointStrokeColor = t.strokeColor), (u.pointFillColor = t.fillColor), (u.pSize = t.size));
                              }),
                                (c = h.drawMarker(n.x[t], n.y[t], u)),
                                1 === i && 0 === t && (o = 0),
                                1 === i && 1 === t && (o = 1),
                                c.attr('rel', o),
                                c.attr('j', o),
                                c.attr('index', e),
                                c.node.setAttribute('default-marker-size', u.pSize),
                                a.setSelectedPointFilter(c, e, o),
                                a.addEvents(c),
                                r && r.add(c);
                            } else void 0 === s.globals.pointsArray[e] && (s.globals.pointsArray[e] = []), s.globals.pointsArray[e].push([n.x[t], n.y[t]]);
                          })(d);
                      return r;
                    },
                  },
                  {
                    key: 'getMarkerConfig',
                    value: function (t, e) {
                      var i = this.w,
                        a = this.getMarkerStyle(e);
                      return {
                        pSize: i.globals.markers.size[e],
                        pRadius: i.config.markers.radius,
                        pWidth: i.config.markers.strokeWidth,
                        pointStrokeColor: a.pointStrokeColor,
                        pointFillColor: a.pointFillColor,
                        shape: i.config.markers.shape instanceof Array ? i.config.markers.shape[e] : i.config.markers.shape,
                        class: t,
                        pointStrokeOpacity: i.config.markers.strokeOpacity,
                        pointFillOpacity: i.config.markers.fillOpacity,
                        seriesIndex: e,
                      };
                    },
                  },
                  {
                    key: 'addEvents',
                    value: function (t) {
                      var e = new o.default(this.ctx);
                      t.node.addEventListener('mouseenter', e.pathMouseEnter.bind(this.ctx, t)), t.node.addEventListener('mouseleave', e.pathMouseLeave.bind(this.ctx, t)), t.node.addEventListener('mousedown', e.pathMouseDown.bind(this.ctx, t)), t.node.addEventListener('touchstart', e.pathMouseDown.bind(this.ctx, t), { passive: !0 });
                    },
                  },
                  {
                    key: 'setSelectedPointFilter',
                    value: function (t, e, i) {
                      var a = this.w;
                      if (void 0 !== a.globals.selectedDataPoints[e] && a.globals.selectedDataPoints[e].indexOf(i) > -1) {
                        t.node.setAttribute('selected', !0);
                        var s = a.config.states.active.filter;
                        'none' !== s && new r.default(this.ctx).applyFilter(t, s.type, s.value);
                      }
                    },
                  },
                  {
                    key: 'getMarkerStyle',
                    value: function (t) {
                      var e = this.w,
                        i = e.globals.markers.colors;
                      return { pointStrokeColor: e.config.markers.strokeColor, pointFillColor: i instanceof Array ? i[t] : i };
                    },
                  },
                ]),
                t
              );
            })();
          t.exports = h;
        },
        function (t, e, i) {
          function a(t) {
            return t && t.__esModule ? t : { default: t };
          }
          function s(t, e) {
            if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
          }
          Object.defineProperty(e, '__esModule', { value: !0 });
          var n = (function () {
              function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                  var a = e[i];
                  (a.enumerable = a.enumerable || !1), (a.configurable = !0), 'value' in a && (a.writable = !0), Object.defineProperty(t, a.key, a);
                }
              }
              return function (e, i, a) {
                return i && t(e.prototype, i), a && t(e, a), e;
              };
            })(),
            r = a(i(3)),
            o = a(i(4)),
            l = a(i(2)),
            h = a(i(0)),
            c = a(i(10)),
            d = (function () {
              function t(e, i) {
                s(this, t), (this.ctx = e), (this.w = e.w);
                var a = this.w;
                (this.barOptions = a.config.plotOptions.bar), (this.isHorizontal = this.barOptions.horizontal), (this.strokeWidth = a.config.stroke.width), (this.isNullValue = !1), (this.xyRatios = i), null !== this.xyRatios && ((this.xRatio = i.xRatio), (this.yRatio = i.yRatio), (this.invertedXRatio = i.invertedXRatio), (this.invertedYRatio = i.invertedYRatio), (this.baseLineY = i.baseLineY), (this.baseLineInvertedY = i.baseLineInvertedY)), (this.yaxisIndex = 0), (this.seriesLen = 0);
              }
              return (
                n(t, [
                  {
                    key: 'draw',
                    value: function (t, e) {
                      var i = this,
                        a = this.w,
                        s = new h.default(this.ctx),
                        n = new o.default(this.ctx),
                        l = new r.default(this.ctx, a);
                      (this.series = l.getLogSeries(t)), (t = this.series), (this.yRatio = l.getLogYRatios(this.yRatio)), this.initVariables(t);
                      var c = s.group({ class: 'apexcharts-bar-series apexcharts-plot-series' });
                      c.attr('clip-path', 'url(#gridRectMask' + a.globals.cuid + ')');
                      for (var d = 0, u = 0; d < t.length; d++, u++)
                        !(function (r, o) {
                          var l = void 0,
                            h = void 0,
                            d = void 0,
                            u = void 0,
                            f = void 0,
                            g = void 0,
                            p = void 0,
                            x = void 0,
                            b = [],
                            v = [],
                            m = a.globals.comboCharts ? e[r] : r,
                            y = s.group({
                              class: 'apexcharts-series ' + a.globals.seriesNames[m].toString().replace(/ /g, '-'),
                              rel: r + 1,
                              'data:realIndex': m,
                            });
                          i.ctx.series.addCollapsedClassToSeries(y, m), t[r].length > 0 && (i.visibleI = i.visibleI + 1);
                          var w = 0,
                            k = 0,
                            S = 0;
                          i.yRatio.length > 1 && (i.yaxisIndex = m);
                          var A = i.initialPositions();
                          (u = A.y), (k = A.barHeight), (g = A.yDivision), (x = A.zeroW), (d = A.x), (S = A.barWidth), (f = A.xDivision), (p = A.zeroH), i.horizontal || v.push(d + S / 2);
                          for (var C = s.group({ class: 'apexcharts-datalabels' }), M = 0, P = a.globals.dataPoints; M < a.globals.dataPoints; M++, P--)
                            !(function (e, s) {
                              void 0 === i.series[r][e] || null === t[r][e] ? (i.isNullValue = !0) : (i.isNullValue = !1), a.config.stroke.show && (w = i.isNullValue ? 0 : Array.isArray(i.strokeWidth) ? i.strokeWidth[m] : i.strokeWidth);
                              var c = null;
                              (c = i.isHorizontal
                                ? i.drawBarPaths({
                                    indexes: { i: r, j: e, realIndex: m, bc: o },
                                    barHeight: k,
                                    strokeWidth: w,
                                    pathTo: l,
                                    pathFrom: h,
                                    zeroW: x,
                                    x: d,
                                    y: u,
                                    yDivision: g,
                                    elSeries: y,
                                  })
                                : i.drawColumnPaths({
                                    indexes: { i: r, j: e, realIndex: m, bc: o },
                                    x: d,
                                    y: u,
                                    xDivision: f,
                                    pathTo: l,
                                    pathFrom: h,
                                    barWidth: S,
                                    zeroH: p,
                                    strokeWidth: w,
                                    elSeries: y,
                                  })),
                                (l = c.pathTo),
                                (h = c.pathFrom),
                                (u = c.y),
                                (d = c.x),
                                e > 0 && v.push(d + S / 2),
                                b.push(u);
                              var A = i.barOptions.distributed ? e : r,
                                M = null;
                              i.barOptions.colors.ranges.length > 0 &&
                                i.barOptions.colors.ranges.map(function (i) {
                                  t[r][e] >= i.from && t[r][e] <= i.to && (M = i.color);
                                });
                              var P = n.fillPath(y, { seriesNumber: i.barOptions.distributed ? A : m, color: M });
                              y = i.renderSeries({
                                realIndex: m,
                                pathFill: P,
                                j: e,
                                i: r,
                                pathFrom: h,
                                pathTo: l,
                                strokeWidth: w,
                                elSeries: y,
                                x: d,
                                y: u,
                                series: t,
                                barHeight: k,
                                barWidth: S,
                                elDataLabelsWrap: C,
                                visibleSeries: i.visibleI,
                                type: 'bar',
                              });
                            })(M);
                          (a.globals.seriesXvalues[m] = v), (a.globals.seriesYvalues[m] = b), c.add(y);
                        })(d, u);
                      return c;
                    },
                  },
                  {
                    key: 'renderSeries',
                    value: function (t) {
                      var e = t.realIndex,
                        i = t.pathFill,
                        a = t.lineFill,
                        s = t.j,
                        n = t.i,
                        r = t.pathFrom,
                        o = t.pathTo,
                        l = t.strokeWidth,
                        c = t.elSeries,
                        d = t.x,
                        u = t.y,
                        f = t.series,
                        g = t.barHeight,
                        p = t.barWidth,
                        x = t.elDataLabelsWrap,
                        b = t.visibleSeries,
                        v = t.type,
                        m = this.w,
                        y = new h.default(this.ctx);
                      a || (a = m.globals.stroke.colors[e]), this.isNullValue && (i = 'none');
                      var w = ((s / m.config.chart.animations.animateGradually.delay) * (m.config.chart.animations.speed / m.globals.dataPoints)) / 2.4,
                        k = y.renderPaths({
                          i: n,
                          j: s,
                          realIndex: e,
                          pathFrom: r,
                          pathTo: o,
                          stroke: a,
                          strokeWidth: l,
                          strokeLineCap: m.config.stroke.lineCap,
                          fill: i,
                          animationDelay: w,
                          initialSpeed: m.config.chart.animations.speed,
                          dataChangeSpeed: m.config.chart.animations.dynamicAnimation.speed,
                          className: 'apexcharts-' + v + '-area',
                          id: 'apexcharts-' + v + '-area',
                        });
                      this.setSelectedBarFilter(k, e, s), c.add(k);
                      var S = this.calculateDataLabelsPos({
                        x: d,
                        y: u,
                        i: n,
                        j: s,
                        series: f,
                        realIndex: e,
                        barHeight: g,
                        barWidth: p,
                        renderedPath: k,
                        visibleSeries: b,
                      });
                      return null !== S && x.add(S), c.add(x), c;
                    },
                  },
                  {
                    key: 'initVariables',
                    value: function (t) {
                      var e = this.w;
                      (this.series = t), (this.totalItems = 0), (this.seriesLen = 0), (this.visibleI = -1), (this.visibleItems = 1);
                      for (var i = 0; i < t.length; i++)
                        if ((t[i].length > 0 && ((this.seriesLen = this.seriesLen + 1), (this.totalItems += t[i].length)), e.globals.isXNumeric)) for (var a = 0; a < t[i].length; a++) e.globals.seriesX[i][a] > e.globals.minX && e.globals.seriesX[i][a] < e.globals.maxX && this.visibleItems++;
                        else this.visibleItems = e.globals.dataPoints;
                      0 === this.seriesLen && (this.seriesLen = 1);
                    },
                  },
                  {
                    key: 'initialPositions',
                    value: function () {
                      var t = this.w,
                        e = void 0,
                        i = void 0,
                        a = void 0,
                        s = void 0,
                        n = void 0,
                        r = void 0,
                        o = void 0,
                        l = void 0;
                      return this.isHorizontal ? ((n = (a = t.globals.gridHeight / t.globals.dataPoints) / this.seriesLen), t.globals.isXNumeric && (n = (a = t.globals.gridHeight / this.totalItems) / this.seriesLen), (n = (n * parseInt(this.barOptions.barHeight)) / 100), (l = this.baseLineInvertedY + t.globals.padHorizontal), (i = (a - n * this.seriesLen) / 2)) : ((r = (((s = t.globals.gridWidth / this.visibleItems) / this.seriesLen) * parseInt(this.barOptions.columnWidth)) / 100), (o = t.globals.gridHeight - this.baseLineY[this.yaxisIndex]), (e = t.globals.padHorizontal + (s - r * this.seriesLen) / 2)), { x: e, y: i, yDivision: a, xDivision: s, barHeight: n, barWidth: r, zeroH: o, zeroW: l };
                    },
                  },
                  {
                    key: 'drawBarPaths',
                    value: function (t) {
                      var e = t.indexes,
                        i = t.barHeight,
                        a = t.strokeWidth,
                        s = t.pathTo,
                        n = t.pathFrom,
                        r = t.zeroW,
                        o = t.x,
                        l = t.y,
                        c = t.yDivision,
                        d = t.elSeries,
                        u = this.w,
                        f = new h.default(this.ctx),
                        g = e.i,
                        p = e.j,
                        x = e.realIndex,
                        b = e.bc;
                      u.globals.isXNumeric && (l = (u.globals.seriesX[g][p] - u.globals.minX) / this.invertedXRatio - i);
                      var v = l + i * this.visibleI;
                      (s = f.move(r, v)), (n = f.move(r, v)), u.globals.previousPaths.length > 0 && (n = this.getPathFrom(x, p, !0));
                      var m = {
                          barHeight: i,
                          strokeWidth: a,
                          barYPosition: v,
                          x: (o = void 0 === this.series[g][p] || null === this.series[g][p] ? r : r + this.series[g][p] / this.invertedYRatio),
                          zeroW: r,
                        },
                        y = this.barEndingShape(u, m, this.series, g, p);
                      if (((s = s + f.line(y.newX, v) + y.path + f.line(r, v + i - a) + f.line(r, v)), (n = n + f.line(r, v) + y.ending_p_from + f.line(r, v + i - a) + f.line(r, v + i - a) + f.line(r, v)), u.globals.isXNumeric || (l += c), this.barOptions.colors.backgroundBarColors.length > 0 && 0 === g)) {
                        b >= this.barOptions.colors.backgroundBarColors.length && (b = 0);
                        var w = this.barOptions.colors.backgroundBarColors[b],
                          k = f.drawRect(0, v - i * this.visibleI, u.globals.gridWidth, i * this.seriesLen, 0, w, this.barOptions.colors.backgroundBarOpacity);
                        d.add(k), k.node.classList.add('apexcharts-backgroundBar');
                      }
                      return { pathTo: s, pathFrom: n, x: o, y: l, barYPosition: v };
                    },
                  },
                  {
                    key: 'drawColumnPaths',
                    value: function (t) {
                      var e = t.indexes,
                        i = t.x,
                        a = t.y,
                        s = t.xDivision,
                        n = t.pathTo,
                        r = t.pathFrom,
                        o = t.barWidth,
                        l = t.zeroH,
                        c = t.strokeWidth,
                        d = t.elSeries,
                        u = this.w,
                        f = new h.default(this.ctx),
                        g = e.i,
                        p = e.j,
                        x = e.realIndex,
                        b = e.bc;
                      u.globals.isXNumeric && (i = (u.globals.seriesX[g][p] - u.globals.minX) / this.xRatio - o / 2);
                      var v = i + o * this.visibleI;
                      (n = f.move(v, l)), (r = f.move(v, l)), u.globals.previousPaths.length > 0 && (r = this.getPathFrom(x, p, !0));
                      var m = {
                          barWidth: o,
                          strokeWidth: c,
                          barXPosition: v,
                          y: (a = void 0 === this.series[g][p] || null === this.series[g][p] ? l : l - this.series[g][p] / this.yRatio[this.yaxisIndex]),
                          zeroH: l,
                        },
                        y = this.barEndingShape(u, m, this.series, g, p);
                      if (((n = n + f.line(v, y.newY) + y.path + f.line(v + o - c, l) + f.line(v, l)), (r = r + f.line(v, l) + y.ending_p_from + f.line(v + o - c, l) + f.line(v + o - c, l) + f.line(v, l)), u.globals.isXNumeric || (i += s), this.barOptions.colors.backgroundBarColors.length > 0 && 0 === g)) {
                        b >= this.barOptions.colors.backgroundBarColors.length && (b = 0);
                        var w = this.barOptions.colors.backgroundBarColors[b],
                          k = f.drawRect(v - o * this.visibleI, 0, o * this.seriesLen, u.globals.gridHeight, 0, w, this.barOptions.colors.backgroundBarOpacity);
                        d.add(k), k.node.classList.add('apexcharts-backgroundBar');
                      }
                      return { pathTo: n, pathFrom: r, x: i, y: a, barXPosition: v };
                    },
                  },
                  {
                    key: 'getPathFrom',
                    value: function (t, e) {
                      for (var i = this.w, a = void 0, s = 0; s < i.globals.previousPaths.length; s++) {
                        var n = i.globals.previousPaths[s];
                        n.paths.length > 0 && parseInt(n.realIndex) === parseInt(t) && void 0 !== i.globals.previousPaths[s].paths[e] && (a = i.globals.previousPaths[s].paths[e].d);
                      }
                      return a;
                    },
                  },
                  {
                    key: 'calculateDataLabelsPos',
                    value: function (t) {
                      var e = t.x,
                        i = t.y,
                        a = t.i,
                        s = t.j,
                        n = t.realIndex,
                        r = t.series,
                        o = t.barHeight,
                        l = t.barWidth,
                        c = t.visibleSeries,
                        d = t.renderedPath,
                        u = this.w,
                        f = new h.default(this.ctx),
                        g = Array.isArray(this.strokeWidth) ? this.strokeWidth[n] : this.strokeWidth,
                        p = e + parseFloat(l * c),
                        x = i + parseFloat(o * c);
                      u.globals.isXNumeric && ((p = e + parseFloat(l * (c + 1)) - g), (x = i + parseFloat(o * (c + 1)) - g));
                      var b = e,
                        v = i,
                        m = {},
                        y = u.config.dataLabels,
                        w = this.barOptions.dataLabels,
                        k = y.offsetX,
                        S = y.offsetY,
                        A = f.getTextRects(u.globals.yLabelFormatters[0](u.globals.maxY), parseInt(y.style.fontSize));
                      return (
                        (m = this.isHorizontal
                          ? this.calculateBarsDataLabelsPosition({
                              x: e,
                              y: i,
                              i: a,
                              j: s,
                              bcy: x,
                              barHeight: o,
                              textRects: A,
                              strokeWidth: g,
                              dataLabelsX: b,
                              dataLabelsY: v,
                              barDataLabelsConfig: w,
                              offX: k,
                              offY: S,
                            })
                          : this.calculateColumnsDataLabelsPosition({
                              x: e,
                              y: i,
                              i: a,
                              j: s,
                              realIndex: n,
                              bcx: p,
                              bcy: x,
                              barHeight: o,
                              barWidth: l,
                              textRects: A,
                              strokeWidth: g,
                              dataLabelsY: v,
                              barDataLabelsConfig: w,
                              offX: k,
                              offY: S,
                            })),
                        d.attr({ cy: m.bcy, cx: m.bcx, j: s, val: r[a][s], barHeight: o, barWidth: l }),
                        this.drawCalculatedDataLabels({ x: m.dataLabelsX, y: m.dataLabelsY, val: r[a][s], i: n, j: s, dataLabelsConfig: y })
                      );
                    },
                  },
                  {
                    key: 'calculateColumnsDataLabelsPosition',
                    value: function (t) {
                      var e = this.w,
                        i = t.i,
                        a = t.j,
                        s = t.realIndex,
                        n = t.y,
                        r = t.bcx,
                        o = t.barWidth,
                        l = t.textRects,
                        h = t.dataLabelsY,
                        c = t.barDataLabelsConfig,
                        d = t.strokeWidth,
                        u = t.offX,
                        f = t.offY,
                        g = void 0,
                        p = this.series[i][a] / this.yRatio[this.yaxisIndex],
                        x = e.globals.gridWidth / e.globals.dataPoints;
                      (r -= d / 2), (g = e.globals.isXNumeric ? r - o / 2 + u : r - x + o / 2 + u);
                      var b = !!(n > e.globals.gridHeight - this.baseLineY[this.yaxisIndex] && 0 !== Math.abs(this.baseLineY[this.yaxisIndex])),
                        v = 0 !== Math.abs(e.globals.minYArr[s]);
                      switch (c.position) {
                        case 'center':
                          (h = n + p / 2 + l.height / 2 - f), v && (h = b ? n + p / 2 + l.height / 2 + f : n + p / 2 + l.height / 2 - f);
                          break;
                        case 'bottom':
                          h = v ? (b ? n + p + l.height + d + f : n + p - l.height / 2 + d - f) : e.globals.gridHeight - l.height / 2 - f;
                          break;
                        case 'top':
                          h = v && b ? n - l.height / 2 - f : n + l.height + f;
                      }
                      return { bcx: r, bcy: n, dataLabelsX: g, dataLabelsY: h };
                    },
                  },
                  {
                    key: 'calculateBarsDataLabelsPosition',
                    value: function (t) {
                      var e = this.w,
                        i = t.x,
                        a = t.i,
                        s = t.j,
                        n = t.bcy,
                        r = t.barHeight,
                        o = t.textRects,
                        l = t.dataLabelsX,
                        h = t.strokeWidth,
                        c = t.barDataLabelsConfig,
                        d = t.offX,
                        u = t.offY,
                        f = n - e.globals.gridHeight / e.globals.dataPoints + r / 2 + o.height / 2 + u - 3,
                        g = this.series[a][s] / this.invertedYRatio,
                        p = this.series[a][s] <= 0,
                        x = 0 !== Math.abs(e.globals.minY);
                      switch (c.position) {
                        case 'center':
                          (l = i - g / 2 + d), x && (l = p ? i - g / 2 - d : i - g / 2 + d);
                          break;
                        case 'bottom':
                          l = x && p ? i - g - h - Math.round(o.width / 2) - d : i - g + h + Math.round(o.width / 2) + d;
                          break;
                        case 'top':
                          l = x ? (p ? i - h + Math.round(o.width / 2) - d : i - h - Math.round(o.width / 2) + d) : i + h - Math.round(o.width / 2) + d;
                      }
                      return l < 0 ? (l = o.width + h) : l + o.width / 2 > e.globals.gridWidth && (l = l - o.width - h), { bcx: i, bcy: n, dataLabelsX: l, dataLabelsY: f };
                    },
                  },
                  {
                    key: 'drawCalculatedDataLabels',
                    value: function (t) {
                      var e = t.x,
                        i = t.y,
                        a = t.val,
                        s = t.i,
                        n = t.j,
                        r = t.dataLabelsConfig,
                        o = this.w,
                        l = new c.default(this.ctx),
                        d = new h.default(this.ctx),
                        u = r.formatter,
                        f = null,
                        g = o.globals.collapsedSeriesIndices.indexOf(s) > -1;
                      if (r.enabled && !g) {
                        f = d.group({ class: 'apexcharts-data-labels' });
                        var p = '';
                        void 0 !== a && (p = u(a, { seriesIndex: s, dataPointIndex: n, w: o })), l.plotDataLabelsText(e, i, p, s, n, f, r, !0);
                      }
                      return f;
                    },
                  },
                  {
                    key: 'barEndingShape',
                    value: function (t, e, i, a, s) {
                      var n = new h.default(this.ctx);
                      if (this.isHorizontal) {
                        var r = null,
                          o = '',
                          l = e.x;
                        if (void 0 !== i[a][s] || null !== i[a][s]) {
                          var c = i[a][s] < 0,
                            d = e.barHeight / 2 - e.strokeWidth;
                          switch ((c && (d = -e.barHeight / 2 - e.strokeWidth), t.config.chart.stacked || ('arrow' === this.barOptions.endingShape ? (l = e.x - d) : 'rounded' === this.barOptions.endingShape && (l = e.x - d / 2)), this.barOptions.endingShape)) {
                            case 'flat':
                              r = n.line(l, e.barYPosition + e.barHeight - e.strokeWidth);
                              break;
                            case 'arrow':
                              (r = n.line(l + d, e.barYPosition + (e.barHeight - e.strokeWidth) / 2) + n.line(l, e.barYPosition + e.barHeight - e.strokeWidth)), (o = n.line(e.zeroW, e.barYPosition + e.barHeight - e.strokeWidth));
                              break;
                            case 'rounded':
                              r = n.quadraticCurve(l + d, e.barYPosition + (e.barHeight - e.strokeWidth) / 2, l, e.barYPosition + e.barHeight - e.strokeWidth);
                          }
                        }
                        return { path: r, ending_p_from: o, newX: l };
                      }
                      var u = null,
                        f = '',
                        g = e.y;
                      if (void 0 !== i[a][s] || null !== i[a][s]) {
                        var p = i[a][s] < 0,
                          x = e.barWidth / 2 - e.strokeWidth;
                        switch ((p && (x = -e.barWidth / 2 - e.strokeWidth), t.config.chart.stacked || ('arrow' === this.barOptions.endingShape ? (g += x) : 'rounded' === this.barOptions.endingShape && (g += x / 2)), this.barOptions.endingShape)) {
                          case 'flat':
                            u = n.line(e.barXPosition + e.barWidth - e.strokeWidth, g);
                            break;
                          case 'arrow':
                            (u = n.line(e.barXPosition + (e.barWidth - e.strokeWidth) / 2, g - x) + n.line(e.barXPosition + e.barWidth - e.strokeWidth, g)), (f = n.line(e.barXPosition + e.barWidth - e.strokeWidth, e.zeroH));
                            break;
                          case 'rounded':
                            u = n.quadraticCurve(e.barXPosition + (e.barWidth - e.strokeWidth) / 2, g - x, e.barXPosition + e.barWidth - e.strokeWidth, g);
                        }
                      }
                      return { path: u, ending_p_from: f, newY: g };
                    },
                  },
                  {
                    key: 'setSelectedBarFilter',
                    value: function (t, e, i) {
                      var a = this.w;
                      if (void 0 !== a.globals.selectedDataPoints[e] && a.globals.selectedDataPoints[e].indexOf(i) > -1) {
                        t.node.setAttribute('selected', !0);
                        var s = a.config.states.active.filter;
                        'none' !== s && new l.default(this.ctx).applyFilter(t, s.type, s.value);
                      }
                    },
                  },
                ]),
                t
              );
            })();
          e.default = d;
        },
        function (t, e, i) {
          function a(t) {
            return t && t.__esModule ? t : { default: t };
          }
          function s(t, e) {
            if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
          }
          Object.defineProperty(e, '__esModule', { value: !0 });
          var n = (function () {
              function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                  var a = e[i];
                  (a.enumerable = a.enumerable || !1), (a.configurable = !0), 'value' in a && (a.writable = !0), Object.defineProperty(t, a.key, a);
                }
              }
              return function (e, i, a) {
                return i && t(e.prototype, i), a && t(e, a), e;
              };
            })(),
            r = a(i(18)),
            o = a(i(0)),
            l = a(i(2)),
            h = (function () {
              function t(e) {
                s(this, t), (this.ctx = e), (this.w = e.w);
              }
              return (
                n(t, [
                  {
                    key: 'dataLabelsCorrection',
                    value: function (t, e, i, a, s, n, r) {
                      var l = this.w,
                        h = !1,
                        c = new o.default(this.ctx).getTextRects(i, r),
                        d = c.width,
                        u = c.height;
                      void 0 === l.globals.dataLabelsRects[a] && (l.globals.dataLabelsRects[a] = []), l.globals.dataLabelsRects[a].push({ x: t, y: e, width: d, height: u });
                      var f = l.globals.dataLabelsRects[a].length - 2,
                        g = void 0 !== l.globals.lastDrawnDataLabelsIndexes[a] ? l.globals.lastDrawnDataLabelsIndexes[a][l.globals.lastDrawnDataLabelsIndexes[a].length - 1] : 0;
                      if (void 0 !== l.globals.dataLabelsRects[a][f]) {
                        var p = l.globals.dataLabelsRects[a][g];
                        (t > p.x + p.width + 2 || e > p.y + p.height + 2 || t + d < p.x) && (h = !0);
                      }
                      return (0 === s || n) && (h = !0), { x: t, y: e, drawnextLabel: h };
                    },
                  },
                  {
                    key: 'drawDataLabel',
                    value: function (t, e, i) {
                      var a = this.w,
                        s = new o.default(this.ctx),
                        n = a.config.dataLabels,
                        l = 0,
                        h = 0,
                        c = i,
                        d = null;
                      if (!n.enabled || t.x instanceof Array != !0) return d;
                      d = s.group({ class: 'apexcharts-data-labels' });
                      for (var u = 0; u < t.x.length; u++)
                        if (((l = t.x[u] + n.offsetX), (h = t.y[u] + n.offsetY - a.globals.markers.size[e] - 5), !isNaN(l))) {
                          1 === i && 0 === u && (c = 0), 1 === i && 1 === u && (c = 1);
                          var f = a.globals.series[e][c],
                            g = '';
                          'bubble' === a.config.chart.type ? ((g = a.globals.seriesZ[e][c]), (h = t.y[u] + a.config.dataLabels.offsetY), (h = new r.default(this.ctx).centerTextInBubble(h, e, c).y)) : void 0 !== f && (g = a.config.dataLabels.formatter(f, { seriesIndex: e, dataPointIndex: c, w: a })), this.plotDataLabelsText(l, h, g, e, c, d, a.config.dataLabels);
                        }
                      return d;
                    },
                  },
                  {
                    key: 'plotDataLabelsText',
                    value: function (t, e, i, a, s, n, r) {
                      var h = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
                        c = this.w,
                        d = new o.default(this.ctx),
                        u = this.dataLabelsCorrection(t, e, i, a, s, h, parseInt(r.style.fontSize));
                      if ((c.globals.zoomed || ((t = u.x), (e = u.y)), u.drawnextLabel)) {
                        var f = d.drawText({
                          width: 100,
                          height: parseInt(r.style.fontSize),
                          x: t,
                          y: e,
                          foreColor: c.globals.dataLabels.style.colors[a],
                          textAnchor: r.textAnchor,
                          text: i,
                          fontSize: r.style.fontSize,
                          fontFamily: r.style.fontFamily,
                        });
                        if ((f.attr({ class: 'apexcharts-datalabel', cx: t, cy: e, 'clip-path': 'url(#gridRectMask' + c.globals.cuid + ')' }), r.dropShadow.enabled)) {
                          var g = r.dropShadow;
                          new l.default(this.ctx).dropShadow(f, g);
                        }
                        n.add(f), void 0 === c.globals.lastDrawnDataLabelsIndexes[a] && (c.globals.lastDrawnDataLabelsIndexes[a] = []), c.globals.lastDrawnDataLabelsIndexes[a].push(s);
                      }
                    },
                  },
                ]),
                t
              );
            })();
          e.default = h;
        },
        function (t, e, i) {
          function a(t) {
            return t && t.__esModule ? t : { default: t };
          }
          function s(t, e) {
            if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
          }
          var n = (function () {
              function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                  var a = e[i];
                  (a.enumerable = a.enumerable || !1), (a.configurable = !0), 'value' in a && (a.writable = !0), Object.defineProperty(t, a.key, a);
                }
              }
              return function (e, i, a) {
                return i && t(e.prototype, i), a && t(e, a), e;
              };
            })(),
            r = a(i(0)),
            o = a(i(7)),
            l = a(i(1)),
            h = a(i(13)),
            c = (function () {
              function t(e) {
                s(this, t), (this.ctx = e), (this.w = e.w), (this.lgRect = {}), (this.yAxisWidth = 0), (this.xAxisHeight = 0), (this.isSparkline = this.w.config.chart.sparkline.enabled), (this.isBarHorizontal = !('bar' !== this.w.config.chart.type || !this.w.config.plotOptions.bar.horizontal));
              }
              return (
                n(t, [
                  {
                    key: 'plotCoords',
                    value: function () {
                      var t = this.w.globals,
                        e = this.getLegendsRect();
                      t.axisCharts ? this.setGridCoordsForAxisCharts(e) : this.setGridCoordsForNonAxisCharts(e), this.titleSubtitleOffset();
                    },
                  },
                  {
                    key: 'conditionalChecksForAxisCoords',
                    value: function (t, e) {
                      var i = this.w;
                      (this.xAxisHeight = (t.height + e.height) * i.globals.lineHeightRatio + 15), (this.xAxisWidth = t.width), this.xAxisHeight - e.height > i.config.xaxis.labels.maxHeight && (this.xAxisHeight = i.config.xaxis.labels.maxHeight), i.config.xaxis.labels.minHeight && this.xAxisHeight < i.config.xaxis.labels.minHeight && (this.xAxisHeight = i.config.xaxis.labels.minHeight), i.config.xaxis.floating && (this.xAxisHeight = 0), this.isBarHorizontal ? (this.yAxisWidth = i.globals.yLabelsCoords[0].width + i.globals.yTitleCoords[0].width + 15) : (this.yAxisWidth = this.getTotalYAxisWidth()), i.globals.isMultipleYAxis || (this.yAxisWidth < i.config.yaxis[0].labels.minWidth && (this.yAxisWidth = i.config.yaxis[0].labels.minWidth), this.yAxisWidth > i.config.yaxis[0].labels.maxWidth && (this.yAxisWidth = i.config.yaxis[0].labels.maxWidth));
                    },
                  },
                  {
                    key: 'setGridCoordsForAxisCharts',
                    value: function (t) {
                      var e = this.w,
                        i = e.globals,
                        a = this.getyAxisLabelsCoords(),
                        s = this.getxAxisLabelsCoords(),
                        n = this.getyAxisTitleCoords(),
                        r = this.getxAxisTitleCoords();
                      (e.globals.yLabelsCoords = []),
                        (e.globals.yTitleCoords = []),
                        e.config.yaxis.map(function (t, i) {
                          e.globals.yLabelsCoords.push({ width: a[i].width, index: i }), e.globals.yTitleCoords.push({ width: n[i].width, index: i });
                        }),
                        this.conditionalChecksForAxisCoords(s, r),
                        (i.translateXAxisY = e.globals.rotateXLabels ? this.xAxisHeight / 8 : -4),
                        (i.translateXAxisX = e.globals.rotateXLabels && e.globals.isXNumeric && e.config.xaxis.labels.rotate <= -45 ? -this.xAxisWidth / 4 : 0),
                        this.isBarHorizontal && ((i.rotateXLabels = !1), (i.translateXAxisY = (parseInt(e.config.xaxis.labels.style.fontSize) / 1.5) * -1)),
                        (i.translateXAxisY = i.translateXAxisY + e.config.xaxis.labels.offsetY),
                        (i.translateXAxisX = i.translateXAxisX + e.config.xaxis.labels.offsetX);
                      var o = this.yAxisWidth,
                        l = this.xAxisHeight;
                      (i.xAxisLabelsHeight = this.xAxisHeight), (i.xAxisHeight = this.xAxisHeight);
                      var c = 10;
                      switch ((e.config.grid.show || ((o = 0), (l = 35)), this.isSparkline && ((t = { height: 0, width: 0 }), (l = 0), (o = 0), (c = 0)), e.config.legend.position)) {
                        case 'bottom':
                          (i.translateY = c), (i.translateX = o), (i.gridHeight = i.svgHeight - t.height - l - (this.isSparkline ? 0 : e.globals.rotateXLabels ? 10 : 15)), (i.gridWidth = i.svgWidth - o);
                          break;
                        case 'top':
                          (i.translateY = t.height + c), (i.translateX = o), (i.gridHeight = i.svgHeight - t.height - l - (this.isSparkline ? 0 : e.globals.rotateXLabels ? 10 : 15)), (i.gridWidth = i.svgWidth - o);
                          break;
                        case 'left':
                          (i.translateY = c), (i.translateX = t.width + o), (i.gridHeight = i.svgHeight - l - 12), (i.gridWidth = i.svgWidth - t.width - o);
                          break;
                        case 'right':
                          (i.translateY = c), (i.translateX = o), (i.gridHeight = i.svgHeight - l - 12), (i.gridWidth = i.svgWidth - t.width - o - 5);
                          break;
                        default:
                          throw new Error('Legend position not supported');
                      }
                      (i.gridHeight = i.gridHeight - e.config.grid.padding.top - e.config.grid.padding.bottom), (i.gridWidth = i.gridWidth - e.config.grid.padding.left - e.config.grid.padding.right), (i.translateX = i.translateX + e.config.grid.padding.left), (i.translateY = i.translateY + e.config.grid.padding.top), this.isBarHorizontal || this.setGridXPosForDualYAxis(n, a), new h.default(this.ctx).setYAxisXPosition(a, n);
                    },
                  },
                  {
                    key: 'setGridCoordsForNonAxisCharts',
                    value: function (t) {
                      var e = this.w,
                        i = e.globals,
                        a = 0;
                      e.config.legend.show && !e.config.legend.floating && (a = 20);
                      var s = 10;
                      if (('pie' === e.config.chart.type || 'donut' === e.config.chart.type ? (s += e.config.plotOptions.pie.offsetY) : 'radialBar' === e.config.chart.type && (s += e.config.plotOptions.radialBar.offsetY), !e.config.legend.show)) return (i.gridHeight = i.svgHeight - 35), (i.gridWidth = i.gridHeight), (i.translateY = s - 10), void (i.translateX = (i.svgWidth - i.gridWidth) / 2);
                      switch (e.config.legend.position) {
                        case 'bottom':
                          (i.gridHeight = i.svgHeight - t.height - 35), (i.gridWidth = i.gridHeight), (i.translateY = s - 20), (i.translateX = (i.svgWidth - i.gridWidth) / 2);
                          break;
                        case 'top':
                          (i.gridHeight = i.svgHeight - t.height - 35), (i.gridWidth = i.gridHeight), (i.translateY = t.height + s), (i.translateX = (i.svgWidth - i.gridWidth) / 2);
                          break;
                        case 'left':
                          (i.gridWidth = i.svgWidth - t.width - a), (i.gridHeight = i.gridWidth), (i.translateY = s), (i.translateX = t.width + a);
                          break;
                        case 'right':
                          (i.gridWidth = i.svgWidth - t.width - a - 5), (i.gridHeight = i.gridWidth), (i.translateY = s), (i.translateX = 10);
                          break;
                        default:
                          throw new Error('Legend position not supported');
                      }
                    },
                  },
                  {
                    key: 'setGridXPosForDualYAxis',
                    value: function (t, e) {
                      var i = this.w;
                      i.config.yaxis.map(function (a, s) {
                        -1 === i.globals.ignoreYAxisIndexes.indexOf(s) && !i.config.yaxis[s].floating && i.config.yaxis[s].show && a.opposite && (i.globals.translateX = i.globals.translateX - (e[s].width + t[s].width) - parseInt(i.config.yaxis[s].labels.style.fontSize) / 1.2 - 12);
                      });
                    },
                  },
                  {
                    key: 'titleSubtitleOffset',
                    value: function () {
                      var t = this.w,
                        e = t.globals,
                        i = this.isSparkline ? 0 : 10;
                      void 0 !== t.config.title.text ? (i += t.config.title.margin) : (i += this.isSparkline ? 0 : 5), void 0 !== t.config.subtitle.text ? (i += t.config.subtitle.margin) : (i += this.isSparkline ? 0 : 5), t.config.legend.show && 'bottom' === t.config.legend.position && !t.config.legend.floating && t.config.series.length > 1 && (i += 10);
                      var a = this.getTitleSubtitleCoords('title'),
                        s = this.getTitleSubtitleCoords('subtitle');
                      (e.gridHeight = e.gridHeight - a.height - s.height - i), (e.translateY = e.translateY + a.height + s.height + i);
                    },
                  },
                  {
                    key: 'getTotalYAxisWidth',
                    value: function () {
                      var t = this.w,
                        e = 0,
                        i = 10,
                        a = function (e) {
                          return t.globals.ignoreYAxisIndexes.indexOf(e) > -1;
                        };
                      return (
                        t.globals.yLabelsCoords.map(function (s, n) {
                          var r = t.config.yaxis[n].floating;
                          s.width > 0 && !r ? ((e = e + s.width + i), a(n) && (e = e - s.width - i)) : (e += r || !t.config.yaxis[n].show ? 0 : 5);
                        }),
                        t.globals.yTitleCoords.map(function (s, n) {
                          var r = t.config.yaxis[n].floating;
                          (i = parseInt(t.config.yaxis[n].title.style.fontSize)), s.width > 0 && !r ? ((e = e + s.width + i), a(n) && (e = e - s.width - i)) : (e += r || !t.config.yaxis[n].show ? 0 : 5);
                        }),
                        e
                      );
                    },
                  },
                  {
                    key: 'getxAxisTimeScaleLabelsCoords',
                    value: function () {
                      var t = this.w,
                        e = void 0,
                        i = t.globals.timelineLabels.slice().map(function (t) {
                          return t.value;
                        }),
                        a = i.reduce(function (t, e) {
                          return void 0 === t ? (console.error('You have possibly supplied invalid Date format. Please supply a valid JavaScript Date'), 0) : t.length > e.length ? t : e;
                        }, 0);
                      return 1.05 * (e = new r.default(this.ctx).getTextRects(a, t.config.xaxis.labels.style.fontSize)).width * i.length > t.globals.gridWidth && 0 !== t.config.xaxis.labels.rotate && (t.globals.overlappingXLabels = !0), e;
                    },
                  },
                  {
                    key: 'getxAxisLabelsCoords',
                    value: function () {
                      var t = this.w,
                        e = t.globals.labels.slice(),
                        i = { width: 0, height: 0 };
                      if (t.globals.timelineLabels.length > 0) {
                        var a = this.getxAxisTimeScaleLabelsCoords();
                        i = { width: a.width, height: a.height };
                      } else {
                        var s = 'left' !== t.config.legend.position || 'right' !== t.config.legend.position || t.config.legend.floating ? 0 : this.lgRect.width,
                          n = e.reduce(function (t, e) {
                            return t.length > e.length ? t : e;
                          }, 0),
                          l = t.globals.xLabelFormatter;
                        n = new o.default(this.ctx).xLabelFormat(l, n);
                        var h = new r.default(this.ctx),
                          c = h.getTextRects(n, t.config.xaxis.labels.style.fontSize);
                        (i = { width: c.width, height: c.height }).width * e.length > t.globals.svgWidth - s - this.yAxisWidth && 0 !== t.config.xaxis.labels.rotate ? this.isBarHorizontal || ((t.globals.rotateXLabels = !0), (c = h.getTextRects(n, t.config.xaxis.labels.style.fontSize, t.config.xaxis.labels.style.fontFamily, 'rotate(' + t.config.xaxis.labels.rotate + ' 0 0)', !1)), (i.height = c.height / 1.66)) : (t.globals.rotateXLabels = !1);
                      }
                      return t.config.xaxis.labels.show || (i = { width: 0, height: 0 }), { width: i.width, height: i.height };
                    },
                  },
                  {
                    key: 'getyAxisLabelsCoords',
                    value: function () {
                      var t = this,
                        e = this.w,
                        i = [],
                        a = 10;
                      return (
                        e.config.yaxis.map(function (s, n) {
                          if (s.show && s.labels.show && e.globals.yAxisScale[n].result.length) {
                            var o = e.globals.yLabelFormatters[n],
                              l = o(e.globals.yAxisScale[n].niceMax, -1);
                            (void 0 !== l && 0 !== l.length) || (l = e.globals.yAxisScale[n].niceMax),
                              t.isBarHorizontal &&
                                ((a = 0),
                                (l = o(
                                  (l = e.globals.labels.slice().reduce(function (t, e) {
                                    return t.length > e.length ? t : e;
                                  }, 0)),
                                  -1
                                )));
                            var h = new r.default(t.ctx).getTextRects(l, s.labels.style.fontSize);
                            i.push({ width: h.width + a, height: h.height });
                          } else i.push({ width: 0, height: 0 });
                        }),
                        i
                      );
                    },
                  },
                  {
                    key: 'getxAxisTitleCoords',
                    value: function () {
                      var t = this.w,
                        e = 0,
                        i = 0;
                      if (void 0 !== t.config.xaxis.title.text) {
                        var a = new r.default(this.ctx).getTextRects(t.config.xaxis.title.text, t.config.xaxis.title.style.fontSize);
                        (e = a.width), (i = a.height);
                      }
                      return { width: e, height: i };
                    },
                  },
                  {
                    key: 'getyAxisTitleCoords',
                    value: function () {
                      var t = this,
                        e = [];
                      return (
                        this.w.config.yaxis.map(function (i, a) {
                          if (i.show && void 0 !== i.title.text) {
                            var s = new r.default(t.ctx).getTextRects(i.title.text, i.title.style.fontSize, i.title.style.fontFamily, 'rotate(-90 0 0)', !1);
                            e.push({ width: s.width, height: s.height });
                          } else e.push({ width: 0, height: 0 });
                        }),
                        e
                      );
                    },
                  },
                  {
                    key: 'getTitleSubtitleCoords',
                    value: function (t) {
                      var e = this.w,
                        i = 0,
                        a = 0,
                        s = 'title' === t ? e.config.title.floating : e.config.subtitle.floating,
                        n = e.globals.dom.baseEl.querySelector('.apexcharts-' + t + '-text');
                      if (null !== n && !s) {
                        var r = n.getBoundingClientRect();
                        (i = r.width), (a = e.globals.axisCharts ? r.height + 5 : r.height);
                      }
                      return { width: i, height: a };
                    },
                  },
                  {
                    key: 'getLegendsRect',
                    value: function () {
                      var t = this.w,
                        e = t.globals.dom.baseEl.querySelector('.apexcharts-legend'),
                        i = Object.assign({}, l.default.getBoundingClientRect(e));
                      return null !== e && !t.config.legend.floating && t.config.legend.show ? (this.lgRect = i) : (this.lgRect = { x: 0, y: 0, height: 0, width: 0 }), this.lgRect;
                    },
                  },
                ]),
                t
              );
            })();
          t.exports = c;
        },
        function (t, e, i) {
          function a(t) {
            return t && t.__esModule ? t : { default: t };
          }
          function s(t, e) {
            if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
          }
          var n = (function () {
              function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                  var a = e[i];
                  (a.enumerable = a.enumerable || !1), (a.configurable = !0), 'value' in a && (a.writable = !0), Object.defineProperty(t, a.key, a);
                }
              }
              return function (e, i, a) {
                return i && t(e.prototype, i), a && t(e, a), e;
              };
            })(),
            r = a(i(0)),
            o = a(i(13)),
            l = a(i(7)),
            h = (function () {
              function t(e) {
                s(this, t), (this.ctx = e), (this.w = e.w);
                var i = this.w;
                (this.xaxisLabels = i.globals.labels.slice()), i.globals.timelineLabels.length > 0 && (this.xaxisLabels = i.globals.timelineLabels.slice()), (this.drawnLabels = []), 'top' === i.config.xaxis.position ? (this.offY = 0) : (this.offY = i.globals.gridHeight + 1), (this.offY = this.offY + i.config.xaxis.axisBorder.offsetY), (this.xaxisFontSize = i.config.xaxis.labels.style.fontSize), (this.xaxisFontFamily = i.config.xaxis.labels.style.fontFamily), (this.xaxisForeColors = i.config.xaxis.labels.style.colors), (this.xaxisBorderWidth = i.config.xaxis.axisBorder.width), this.xaxisBorderWidth.indexOf('%') > -1 ? (this.xaxisBorderWidth = (i.globals.gridWidth * parseInt(this.xaxisBorderWidth)) / 100) : (this.xaxisBorderWidth = parseInt(this.xaxisBorderWidth)), (this.xaxisBorderHeight = i.config.xaxis.axisBorder.height), (this.yaxis = i.config.yaxis[0]);
              }
              return (
                n(t, [
                  {
                    key: 'drawXaxis',
                    value: function () {
                      var t = this.w,
                        e = new r.default(this.ctx),
                        i = e.group({
                          class: 'apexcharts-xaxis',
                          transform: 'translate(' + t.config.xaxis.offsetX + ', ' + t.config.xaxis.offsetY + ')',
                        }),
                        a = e.group({
                          class: 'apexcharts-xaxis-texts-g',
                          transform: 'translate(' + t.globals.translateXAxisX + ', ' + t.globals.translateXAxisY + ')',
                        });
                      i.add(a);
                      for (var s = void 0, n = t.globals.padHorizontal, o = [], h = 0; h < this.xaxisLabels.length; h++) o.push(this.xaxisLabels[h]);
                      n = 'line' === t.config.chart.type || 'area' === t.config.chart.type ? (t.globals.isXNumeric ? n + (s = t.globals.gridWidth / (o.length - 1)) / 2 + t.config.xaxis.labels.offsetX : n + (s = t.globals.noLabelsProvided ? t.globals.gridWidth / this.xaxisLabels.length : t.globals.gridWidth / o.length) + t.config.xaxis.labels.offsetX) : t.globals.isXNumeric ? ('bar' !== t.config.chart.type ? n + (s = t.globals.gridWidth / (this.xaxisLabels.length - 1)) / 2 + t.config.xaxis.labels.offsetX : n + (s = t.globals.gridWidth / t.globals.labels.length) / 2 + t.config.xaxis.labels.offsetX) : t.globals.noLabelsProvided && 'bar' !== t.config.chart.type ? n + (s = t.globals.gridWidth / this.xaxisLabels.length) / 2 + t.config.xaxis.labels.offsetX : n + (s = t.globals.gridWidth / o.length) + t.config.xaxis.labels.offsetX;
                      var c = t.globals.xLabelFormatter,
                        d = t.config.xaxis.labels.formatter,
                        u = o.length;
                      if (t.config.xaxis.labels.show)
                        for (var f = 0; f <= u - 1; f++) {
                          var g = void 0 === o[f] ? '' : o[f],
                            p = void 0;
                          (p = new l.default(this.ctx).xLabelFormat(c, g)), void 0 !== d && (p = d(g, this.xaxisLabels[f], f));
                          var x = n - s / 2 + t.config.xaxis.labels.offsetX;
                          t.globals.timelineLabels.length > 0 && ((x = t.globals.timelineLabels[f].position), (p = t.globals.timelineLabels[f].value)), (0 === (p = p.toString()).indexOf('NaN') || 'undefined' === p || 0 === p.toLowerCase().indexOf('invalid') || p.toLowerCase().indexOf('infinity') >= 0 || (this.drawnLabels.indexOf(p) >= 0 && !t.config.xaxis.labels.showDuplicates)) && (p = ''), this.drawnLabels.push(p);
                          var b = 28;
                          t.globals.rotateXLabels && (b = 22);
                          var v = e.drawText({
                            x: x,
                            y: this.offY + t.config.xaxis.labels.offsetY + b,
                            text: '',
                            textAnchor: 'middle',
                            fontSize: this.xaxisFontSize,
                            fontFamily: this.xaxisFontFamily,
                            foreColor: Array.isArray(this.xaxisForeColors) ? this.xaxisForeColors[f] : this.xaxisForeColors,
                            cssClass: 'apexcharts-xaxis-label ' + t.config.xaxis.labels.style.cssClass,
                          });
                          a.add(v), e.addTspan(v, p, this.xaxisFontFamily);
                          var m = document.createElementNS(t.globals.svgNS, 'title');
                          (m.textContent = p), v.node.appendChild(m), (n += s);
                        }
                      if (void 0 !== t.config.xaxis.title.text) {
                        var y = e.group({ class: 'apexcharts-xaxis-title' }),
                          w = e.drawText({
                            x: t.globals.gridWidth / 2 + t.config.xaxis.title.offsetX,
                            y: this.offY - parseInt(this.xaxisFontSize) + t.globals.xAxisLabelsHeight + t.config.xaxis.title.offsetY,
                            text: t.config.xaxis.title.text,
                            textAnchor: 'middle',
                            fontSize: t.config.xaxis.title.style.fontSize,
                            fontFamily: t.config.xaxis.title.style.fontFamily,
                            foreColor: t.config.xaxis.title.style.color,
                            cssClass: 'apexcharts-xaxis-title-text ' + t.config.xaxis.title.style.cssClass,
                          });
                        y.add(w), i.add(y);
                      }
                      if (t.config.xaxis.axisBorder.show) {
                        var k = 0;
                        'bar' === t.config.chart.type && t.globals.isXNumeric && (k -= 15);
                        var S = e.drawLine(t.globals.padHorizontal + k + t.config.xaxis.axisBorder.offsetX, this.offY, this.xaxisBorderWidth, this.offY, t.config.xaxis.axisBorder.color, 0, this.xaxisBorderHeight);
                        i.add(S);
                      }
                      return i;
                    },
                  },
                  {
                    key: 'drawXaxisInversed',
                    value: function (t) {
                      var e = this.w,
                        i = new r.default(this.ctx),
                        a = i.group({ class: 'apexcharts-yaxis apexcharts-xaxis-inversed', rel: t }),
                        s = i.group({ class: 'apexcharts-yaxis-texts-g apexcharts-xaxis-inversed-texts-g' });
                      a.add(s);
                      for (var n = void 0, l = void 0, h = [], c = 0; c < this.xaxisLabels.length; c++) h.push(this.xaxisLabels[c]);
                      l = -(n = e.globals.gridHeight / h.length) / 2.2;
                      var d = e.globals.yLabelFormatters[0],
                        u = e.config.yaxis[0].labels;
                      if (u.show)
                        for (var f = 0; f <= h.length - 1; f++) {
                          var g = void 0 === h[f] ? '' : h[f];
                          g = d(g);
                          var p = i.drawText({
                            x: u.offsetX - 15,
                            y: l + n + u.offsetY,
                            text: g,
                            textAnchor: 'end',
                            foreColor: u.style.color ? u.style.color : u.style.colors[f],
                            fontSize: u.style.fontSize,
                            fontFamily: u.style.fontFamily,
                            cssClass: 'apexcharts-yaxis-label ' + u.style.cssClass,
                          });
                          s.add(p), (l += n);
                        }
                      if (void 0 !== e.config.yaxis[0].title.text) {
                        var x = i.group({ class: 'apexcharts-yaxis-title apexcharts-xaxis-title-inversed' }),
                          b = i.drawText({
                            x: 0,
                            y: e.globals.gridHeight / 2,
                            text: e.config.yaxis[0].title.text,
                            textAnchor: 'middle',
                            foreColor: e.config.yaxis[0].title.style.color,
                            fontSize: e.config.yaxis[0].title.style.fontSize,
                            fontFamily: e.config.yaxis[0].title.style.fontFamily,
                            cssClass: 'apexcharts-yaxis-title-text ' + e.config.yaxis[0].title.style.cssClass,
                          });
                        x.add(b), a.add(x);
                      }
                      if (e.config.xaxis.axisBorder.show) {
                        var v = i.drawLine(e.globals.padHorizontal + e.config.xaxis.axisBorder.offsetX, this.offY, this.xaxisBorderWidth, this.offY, this.yaxis.axisBorder.color, 0, this.xaxisBorderHeight);
                        a.add(v), new o.default(this.ctx).drawAxisTicks(0, h.length, e.config.yaxis[0].axisBorder, e.config.yaxis[0].axisTicks, 0, n, a);
                      }
                      return a;
                    },
                  },
                  {
                    key: 'drawXaxisTicks',
                    value: function (t, e) {
                      var i = this.w,
                        a = t;
                      if (!(t < 0 || t > i.globals.gridWidth)) {
                        var s = this.offY + i.config.xaxis.axisTicks.offsetY,
                          n = s + i.config.xaxis.axisTicks.height;
                        if (i.config.xaxis.axisTicks.show) {
                          var o = new r.default(this.ctx).drawLine(t + i.config.xaxis.axisTicks.offsetX, s + i.config.xaxis.offsetY, a + i.config.xaxis.axisTicks.offsetX, n + i.config.xaxis.offsetY, i.config.xaxis.axisTicks.color);
                          e.add(o), o.node.classList.add('apexcharts-xaxis-tick');
                        }
                      }
                    },
                  },
                  {
                    key: 'getXAxisTicksPositions',
                    value: function () {
                      var t = this.w,
                        e = [],
                        i = this.xaxisLabels.length,
                        a = t.globals.padHorizontal;
                      if (t.globals.timelineLabels.length > 0) for (var s = 0; s < i; s++) (a = this.xaxisLabels[s].position), e.push(a);
                      else
                        for (var n = i, r = 0; r < n; r++) {
                          var o = n;
                          t.globals.isXNumeric && 'bar' !== t.config.chart.type && (o -= 1), (a += t.globals.gridWidth / o), e.push(a);
                        }
                      return e;
                    },
                  },
                  {
                    key: 'xAxisLabelCorrections',
                    value: function () {
                      var t = this.w,
                        e = new r.default(this.ctx),
                        i = t.globals.dom.baseEl.querySelector('.apexcharts-xaxis-texts-g'),
                        a = t.globals.dom.baseEl.querySelectorAll('.apexcharts-xaxis-texts-g text'),
                        s = t.globals.dom.baseEl.querySelectorAll('.apexcharts-yaxis-inversed text'),
                        n = t.globals.dom.baseEl.querySelectorAll('.apexcharts-xaxis-inversed-texts-g text');
                      if (t.globals.rotateXLabels || t.config.xaxis.labels.rotateAlways)
                        for (var o = 0; o < a.length; o++) {
                          var l = e.rotateAroundCenter(a[o]);
                          (l.y = l.y - 1), (l.x = l.x + 1), a[o].setAttribute('transform', 'rotate(' + t.config.xaxis.labels.rotate + ' ' + l.x + ' ' + l.y + ')'), a[o].setAttribute('text-anchor', 'end');
                          i.setAttribute('transform', 'translate(0, -10)');
                          var h = a[o].childNodes;
                          t.config.xaxis.labels.trim && e.placeTextWithEllipsis(h[0], h[0].textContent, t.config.xaxis.labels.maxHeight - 40);
                        }
                      else
                        for (var c = t.globals.gridWidth / t.globals.labels.length, d = 0; d < a.length; d++) {
                          var u = a[d].childNodes;
                          t.config.xaxis.labels.trim && 'bar' !== t.config.chart.type && t.config.plotOptions.bar.horizontal && e.placeTextWithEllipsis(u[0], u[0].textContent, c);
                        }
                      if (s.length > 0) {
                        var f = s[s.length - 1].getBBox(),
                          g = s[0].getBBox();
                        f.x < -20 && s[s.length - 1].parentNode.removeChild(s[s.length - 1]), g.x + g.width > t.globals.gridWidth && s[0].parentNode.removeChild(s[0]);
                        for (var p = 0; p < n.length; p++) e.placeTextWithEllipsis(n[p], n[p].textContent, t.config.yaxis[0].labels.maxWidth - 2 * parseInt(t.config.yaxis[0].title.style.fontSize) - 20);
                      }
                    },
                  },
                ]),
                t
              );
            })();
          t.exports = h;
        },
        function (t, e, i) {
          function a(t, e) {
            if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
          }
          var s = (function () {
              function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                  var a = e[i];
                  (a.enumerable = a.enumerable || !1), (a.configurable = !0), 'value' in a && (a.writable = !0), Object.defineProperty(t, a.key, a);
                }
              }
              return function (e, i, a) {
                return i && t(e.prototype, i), a && t(e, a), e;
              };
            })(),
            n = (function (t) {
              return t && t.__esModule ? t : { default: t };
            })(i(0)),
            r = (function () {
              function t(e) {
                a(this, t), (this.ctx = e), (this.w = e.w), (this.xaxisFontSize = this.w.config.xaxis.labels.style.fontSize), (this.axisFontFamily = this.w.config.xaxis.labels.style.fontFamily), (this.isBarHorizontal = !('bar' !== this.w.config.chart.type || !this.w.config.plotOptions.bar.horizontal)), (this.xaxisForeColors = this.w.config.xaxis.labels.style.colors), (this.xAxisoffX = 0), 'bottom' === this.w.config.xaxis.position && (this.xAxisoffX = this.w.globals.gridHeight);
              }
              return (
                s(t, [
                  {
                    key: 'drawYaxis',
                    value: function (t, e) {
                      var i = this.w,
                        a = new n.default(this.ctx),
                        s = i.config.yaxis[e].labels.style.fontSize,
                        r = i.config.yaxis[e].labels.style.fontFamily,
                        o = a.group({ class: 'apexcharts-yaxis', rel: e, transform: 'translate(' + i.globals.translateYAxisX[e] + ', 0)' });
                      if (!i.config.yaxis[e].show) return o;
                      var l = a.group({ class: 'apexcharts-yaxis-texts-g' });
                      o.add(l);
                      var h = i.globals.yAxisScale[e].result.length - 1,
                        c = i.globals.gridHeight / h + 0.1,
                        d = i.globals.translateY,
                        u = i.globals.yLabelFormatters[e];
                      if (i.config.yaxis[e].labels.show)
                        for (var f = h; f >= 0; f--) {
                          var g = i.globals.yAxisScale[e].result[f];
                          g = u(g, f);
                          var p = 20;
                          i.config.yaxis[e].opposite && (p *= -1), 0 === i.config.yaxis.length && (p = 20);
                          var x = a.drawText({
                            x: p,
                            y: d + h / 10 + i.config.yaxis[e].labels.offsetY + 1,
                            text: g,
                            textAnchor: i.config.yaxis[e].opposite ? 'start' : 'end',
                            fontSize: s,
                            fontFamily: r,
                            foreColor: i.config.yaxis[e].labels.style.color,
                            cssClass: 'apexcharts-yaxis-label ' + i.config.yaxis[e].labels.style.cssClass,
                          });
                          l.add(x), (d += c);
                        }
                      if (void 0 !== i.config.yaxis[e].title.text) {
                        var b = a.group({ class: 'apexcharts-yaxis-title' }),
                          v = 0;
                        i.config.yaxis[e].opposite && (v = i.globals.translateYAxisX[e]);
                        var m = a.drawText({
                          x: v,
                          y: i.globals.gridHeight / 2 + i.globals.translateY,
                          text: i.config.yaxis[e].title.text,
                          textAnchor: 'end',
                          foreColor: i.config.yaxis[e].title.style.color,
                          fontSize: i.config.yaxis[e].title.style.fontSize,
                          fontFamily: i.config.yaxis[e].title.style.fontFamily,
                          cssClass: 'apexcharts-yaxis-title-text ' + i.config.yaxis[e].title.style.cssClass,
                        });
                        b.add(m), o.add(b);
                      }
                      var y = i.config.yaxis[e].axisBorder;
                      if (y.show) {
                        var w = 31 + y.offsetX;
                        i.config.yaxis[e].opposite && (w = -31 - y.offsetX);
                        var k = a.drawLine(w, i.globals.translateY + y.offsetY - 2, w, i.globals.gridHeight + i.globals.translateY + y.offsetY + 2, y.color);
                        o.add(k), this.drawAxisTicks(w, h, y, i.config.yaxis[e].axisTicks, e, c, o);
                      }
                      return o;
                    },
                  },
                  {
                    key: 'drawYaxisInversed',
                    value: function (t) {
                      var e = this.w,
                        i = new n.default(this.ctx),
                        a = i.group({ class: 'apexcharts-xaxis apexcharts-yaxis-inversed' }),
                        s = i.group({
                          class: 'apexcharts-xaxis-texts-g',
                          transform: 'translate(' + e.globals.translateXAxisX + ', ' + e.globals.translateXAxisY + ')',
                        });
                      a.add(s);
                      var r = e.globals.yAxisScale[t].result.length - 1,
                        o = e.globals.gridWidth / r + 0.1,
                        l = o + e.config.xaxis.labels.offsetX,
                        h = e.globals.xLabelFormatter;
                      if (e.config.xaxis.labels.show)
                        for (var c = r; c >= 0; c--) {
                          var d = e.globals.yAxisScale[t].result[c];
                          d = h(d);
                          var u = i.drawText({
                            x: e.globals.gridWidth + e.globals.padHorizontal - (l - o + e.config.xaxis.labels.offsetX),
                            y: this.xAxisoffX + e.config.xaxis.labels.offsetY + 30,
                            text: '',
                            textAnchor: 'middle',
                            foreColor: Array.isArray(this.xaxisForeColors) ? this.xaxisForeColors[t] : this.xaxisForeColors,
                            fontSize: this.xaxisFontSize,
                            fontFamily: this.xaxisFontFamily,
                            cssClass: 'apexcharts-xaxis-label ' + e.config.xaxis.labels.style.cssClass,
                          });
                          s.add(u), u.tspan(d);
                          var f = document.createElementNS(e.globals.svgNS, 'title');
                          (f.textContent = d), u.node.appendChild(f), (l += o);
                        }
                      if (void 0 !== e.config.xaxis.title.text) {
                        var g = i.group({ class: 'apexcharts-xaxis-title apexcharts-yaxis-title-inversed' }),
                          p = i.drawText({
                            x: e.globals.gridWidth / 2,
                            y: this.xAxisoffX + parseInt(this.xaxisFontSize) + parseInt(e.config.xaxis.title.style.fontSize) + 20,
                            text: e.config.xaxis.title.text,
                            textAnchor: 'middle',
                            fontSize: e.config.xaxis.title.style.fontSize,
                            fontFamily: e.config.xaxis.title.style.fontFamily,
                            cssClass: 'apexcharts-xaxis-title-text ' + e.config.xaxis.title.style.cssClass,
                          });
                        g.add(p), a.add(g);
                      }
                      var x = e.config.yaxis[t].axisBorder;
                      if (x.show) {
                        var b = i.drawLine(e.globals.padHorizontal + x.offsetX, 1 + x.offsetY, e.globals.padHorizontal + x.offsetX, e.globals.gridHeight + x.offsetY, x.color);
                        a.add(b);
                      }
                      return a;
                    },
                  },
                  {
                    key: 'drawAxisTicks',
                    value: function (t, e, i, a, s, r, o) {
                      var l = this.w,
                        h = new n.default(this.ctx),
                        c = l.globals.translateY;
                      if (a.show) {
                        !0 === l.config.yaxis[s].opposite && (t += a.width);
                        for (var d = e; d >= 0; d--) {
                          var u = c + e / 10 + l.config.yaxis[s].labels.offsetY - 1;
                          this.isBarHorizontal && (u = r * d);
                          var f = h.drawLine(t + i.offsetX - a.width + a.offsetX, u + a.offsetY, t + i.offsetX + a.offsetX, u + a.offsetY, i.color);
                          o.add(f), (c += r);
                        }
                      }
                    },
                  },
                  {
                    key: 'yAxisTitleRotate',
                    value: function (t, e) {
                      var i = this.w,
                        a = new n.default(this.ctx),
                        s = { width: 0, height: 0 },
                        r = { width: 0, height: 0 },
                        o = i.globals.dom.baseEl.querySelector(" .apexcharts-yaxis[rel='" + t + "'] .apexcharts-yaxis-texts-g");
                      null !== o && (s = o.getBoundingClientRect());
                      var l = i.globals.dom.baseEl.querySelector(".apexcharts-yaxis[rel='" + t + "'] .apexcharts-yaxis-title text");
                      if ((null !== l && (r = l.getBoundingClientRect()), null !== l)) {
                        var h = this.xPaddingForYAxisTitle(t, s, r, e);
                        l.setAttribute('x', h.xPos - (e ? 10 : 0));
                      }
                      if (null !== l) {
                        var c = a.rotateAroundCenter(l);
                        e ? l.setAttribute('transform', 'rotate(90 ' + c.x + ' ' + c.y + ')') : l.setAttribute('transform', 'rotate(-90 ' + c.x + ' ' + c.y + ')');
                      }
                    },
                  },
                  {
                    key: 'xPaddingForYAxisTitle',
                    value: function (t, e, i, a) {
                      var s = this.w,
                        n = 0,
                        r = 0,
                        o = 20;
                      return a ? ((r = e.width + s.config.yaxis[t].title.offsetX + o + i.width / 2 - 15), 0 === (n += 1) && (r -= 15)) : ((r = -1 * e.width + s.config.yaxis[t].title.offsetX + o + i.width / 2 - 15), this.isBarHorizontal && ((o = 25), (r = -1 * e.width - s.config.yaxis[t].title.offsetX - o))), { xPos: r, padd: o };
                    },
                  },
                  {
                    key: 'setYAxisXPosition',
                    value: function (t, e) {
                      var i = this,
                        a = this.w,
                        s = 0,
                        n = 0,
                        r = 0,
                        o = 1;
                      (this.multipleYs = !1),
                        a.config.yaxis.length > 1 && (this.multipleYs = !0),
                        a.config.yaxis.map(function (l, h) {
                          var c = t[h].width + e[h].width,
                            d = i.multipleYs && e[h].width > 0 ? 20 : 8,
                            u = i.xPaddingForYAxisTitle(h, { width: t[h].width }, { width: e[h].width }, l.opposite);
                          if ((a.config.yaxis.length > 1 ? (c += Math.abs(u.padd)) : void 0 === l.title.text ? (c = c + Math.abs(u.padd) + 15) : (c += Math.abs(u.padd)), l.opposite))
                            (n = a.globals.gridWidth + a.globals.translateX + o + 30 + (a.globals.series.length - a.globals.collapsedSeries.length)),
                              a.globals.collapsedSeries.forEach(function (t) {
                                t.index === h && (o -= c);
                              }),
                              (o += c),
                              (a.globals.translateYAxisX[h] = n - l.labels.offsetX);
                          else {
                            var f = c + 5;
                            a.globals.ignoreYAxisIndexes.indexOf(h) > -1 && (f = 0), (s = i.multipleYs ? a.globals.translateX - c - r + d + parseInt(a.config.yaxis[h].labels.style.fontSize) + l.labels.offsetX : a.globals.translateX - c + t[h].width + l.labels.offsetX), (r += f), (a.globals.translateYAxisX[h] = s);
                          }
                        });
                    },
                  },
                ]),
                t
              );
            })();
          t.exports = r;
        },
        function (t, e, i) {
          function a(t) {
            return t && t.__esModule ? t : { default: t };
          }
          function s(t, e) {
            if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
          }
          var n =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t;
                  },
            r = (function () {
              function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                  var a = e[i];
                  (a.enumerable = a.enumerable || !1), (a.configurable = !0), 'value' in a && (a.writable = !0), Object.defineProperty(t, a.key, a);
                }
              }
              return function (e, i, a) {
                return i && t(e.prototype, i), a && t(e, a), e;
              };
            })(),
            o = a(i(44)),
            l = a(i(1)),
            h = a(i(15)),
            c = (function () {
              function t(e) {
                s(this, t), (this.opts = e);
              }
              return (
                r(t, [
                  {
                    key: 'init',
                    value: function () {
                      var t = this.opts,
                        e = new h.default(),
                        i = new o.default(t);
                      (this.chartType = t.chart.type), 'histogram' === this.chartType && ((t.chart.type = 'bar'), (t = l.default.extend({ plotOptions: { bar: { columnWidth: '99.99%' } } }, t))), (t.series = this.checkEmptySeries(t.series)), (t = this.extendYAxis(t)), (t = this.extendAnnotations(t));
                      var a = e.init(),
                        s = {};
                      if (t && 'object' === (void 0 === t ? 'undefined' : n(t))) {
                        var r = {};
                        switch (this.chartType) {
                          case 'line':
                            r = i.line();
                            break;
                          case 'area':
                            r = i.area();
                            break;
                          case 'bar':
                            r = i.bar();
                            break;
                          case 'candlestick':
                            r = i.candlestick();
                            break;
                          case 'histogram':
                            r = i.bar();
                            break;
                          case 'bubble':
                            r = i.bubble();
                            break;
                          case 'scatter':
                            r = i.scatter();
                            break;
                          case 'heatmap':
                            r = i.heatmap();
                            break;
                          case 'pie':
                            r = i.pie();
                            break;
                          case 'donut':
                            r = i.donut();
                            break;
                          case 'radialBar':
                            r = i.radialBar();
                            break;
                          default:
                            r = i.line();
                        }
                        t.chart.brush && t.chart.brush.enabled && (r = i.brush(r)), t.chart.stacked && '100%' === t.chart.stackType && i.stacked100(), ((t.chart.sparkline && t.chart.sparkline.enabled) || (window.Apex.chart && window.Apex.chart.sparkline && window.Apex.chart.sparkline.enabled)) && (r = i.sparkline(r)), (s = l.default.extend(a, r));
                      }
                      var c = l.default.extend(s, window.Apex);
                      return (a = l.default.extend(c, t)), (a = this.handleUserInputErrors(a));
                    },
                  },
                  {
                    key: 'extendYAxis',
                    value: function (t) {
                      var e = new h.default();
                      return void 0 === t.yaxis && (t.yaxis = {}), t.yaxis.constructor !== Array && window.Apex.yaxis && window.Apex.yaxis.constructor !== Array && (t.yaxis = l.default.extend(t.yaxis, window.Apex.yaxis)), t.yaxis.constructor !== Array ? (t.yaxis = [l.default.extend(e.yAxis, t.yaxis)]) : (t.yaxis = l.default.extendArray(t.yaxis, e.yAxis)), t;
                    },
                  },
                  {
                    key: 'extendAnnotations',
                    value: function (t) {
                      return void 0 === t.annotations && ((t.annotations = {}), (t.annotations.yaxis = []), (t.annotations.xaxis = []), (t.annotations.points = [])), (t = this.extendYAxisAnnotations(t)), (t = this.extendXAxisAnnotations(t)), (t = this.extendPointAnnotations(t));
                    },
                  },
                  {
                    key: 'extendYAxisAnnotations',
                    value: function (t) {
                      var e = new h.default();
                      return (t.annotations.yaxis = l.default.extendArray(void 0 !== t.annotations.yaxis ? t.annotations.yaxis : [], e.yAxisAnnotation)), t;
                    },
                  },
                  {
                    key: 'extendXAxisAnnotations',
                    value: function (t) {
                      var e = new h.default();
                      return (t.annotations.xaxis = l.default.extendArray(void 0 !== t.annotations.xaxis ? t.annotations.xaxis : [], e.xAxisAnnotation)), t;
                    },
                  },
                  {
                    key: 'extendPointAnnotations',
                    value: function (t) {
                      var e = new h.default();
                      return (t.annotations.points = l.default.extendArray(void 0 !== t.annotations.points ? t.annotations.points : [], e.pointAnnotation)), t;
                    },
                  },
                  {
                    key: 'checkEmptySeries',
                    value: function (t) {
                      return 0 === t.length ? [{ data: [] }] : t;
                    },
                  },
                  {
                    key: 'handleUserInputErrors',
                    value: function (t) {
                      var e = t;
                      if (e.tooltip.shared && e.tooltip.intersect) throw new Error('tooltip.shared cannot be enabled when tooltip.intersect is true. Turn off any other option by setting it to false');
                      if ((e.chart.scroller && console.warn('Scroller has been deprecated since v2.0.0. Please remove the configuration for chart.scroller'), 'bar' === e.chart.type && e.plotOptions.bar.horizontal)) {
                        if ('datetime' === e.xaxis.type) throw new Error('Timelines on bars are not supported yet. Switch to column chart by setting plotOptions.bar.horizontal=false');
                        if (e.yaxis.length > 1) throw new Error('Multiple Y Axis for bars are not supported. Switch to column chart by setting plotOptions.bar.horizontal=false');
                        (e.xaxis.tooltip.enabled = !1), (e.yaxis[0].tooltip.enabled = !1), (e.chart.zoom.enabled = !1);
                      }
                      return 'bar' === e.chart.type && e.tooltip.shared && ('barWidth' === e.xaxis.crosshairs.width && e.series.length > 1 && (console.warn('crosshairs.width = "barWidth" is only supported in single series, not in a multi-series barChart'), (e.xaxis.crosshairs.width = 'tickWidth')), e.plotOptions.bar.horizontal && (e.states.hover.type = 'none'), e.tooltip.followCursor || (console.warn('followCursor option in shared columns cannot be turned off'), (e.tooltip.followCursor = !0))), Array.isArray(e.stroke.width) && 'line' !== e.chart.type && 'area' !== e.chart.type && (console.warn('stroke.width option accepts array only for line and area charts. Reverted back to Number'), (e.stroke.width = e.stroke.width[0])), e;
                    },
                  },
                ]),
                t
              );
            })();
          t.exports = c;
        },
        function (t, e, i) {
          function a(t, e) {
            if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
          }
          Object.defineProperty(e, '__esModule', { value: !0 });
          var s = (function () {
              function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                  var a = e[i];
                  (a.enumerable = a.enumerable || !1), (a.configurable = !0), 'value' in a && (a.writable = !0), Object.defineProperty(t, a.key, a);
                }
              }
              return function (e, i, a) {
                return i && t(e.prototype, i), a && t(e, a), e;
              };
            })(),
            n = i(26),
            r = (function () {
              function t() {
                a(this, t),
                  (this.yAxis = {
                    show: !0,
                    opposite: !1,
                    logarithmic: !1,
                    logBase: 10,
                    tickAmount: void 0,
                    max: void 0,
                    min: void 0,
                    decimalsInFloat: 2,
                    floating: !1,
                    seriesName: void 0,
                    labels: {
                      show: !0,
                      minWidth: 0,
                      maxWidth: 160,
                      offsetX: 0,
                      offsetY: 0,
                      style: { colors: [], fontSize: '11px', fontFamily: void 0, cssClass: 'apexcharts-yaxis-label' },
                      formatter: void 0,
                    },
                    axisBorder: { show: !1, color: '#78909C', offsetX: 0, offsetY: 0 },
                    axisTicks: { show: !1, color: '#78909C', width: 6, offsetX: 0, offsetY: 0 },
                    title: {
                      text: void 0,
                      rotate: -90,
                      offsetY: 0,
                      offsetX: 0,
                      style: { color: void 0, fontSize: '11px', fontFamily: void 0, cssClass: 'apexcharts-yaxis-title' },
                    },
                    tooltip: { enabled: !1, offsetX: 0 },
                    crosshairs: { show: !0, position: 'front', stroke: { color: '#b6b6b6', width: 1, dashArray: 0 } },
                  }),
                  (this.xAxisAnnotation = {
                    x: 0,
                    strokeDashArray: 4,
                    borderColor: '#c2c2c2',
                    offsetX: 0,
                    offsetY: 0,
                    label: {
                      borderColor: '#c2c2c2',
                      borderWidth: 1,
                      text: void 0,
                      textAnchor: 'middle',
                      orientation: 'vertical',
                      position: 'top',
                      offsetX: 0,
                      offsetY: 0,
                      style: {
                        background: '#fff',
                        color: void 0,
                        fontSize: '11px',
                        fontFamily: void 0,
                        cssClass: 'apexcharts-xaxis-annotation-label',
                        padding: { left: 5, right: 5, top: 2, bottom: 2 },
                      },
                    },
                  }),
                  (this.yAxisAnnotation = {
                    y: 0,
                    strokeDashArray: 4,
                    borderColor: '#c2c2c2',
                    offsetX: 0,
                    offsetY: 0,
                    yAxisIndex: 0,
                    label: {
                      borderColor: '#c2c2c2',
                      borderWidth: 1,
                      text: void 0,
                      textAnchor: 'end',
                      position: 'right',
                      offsetX: 0,
                      offsetY: -3,
                      style: {
                        background: '#fff',
                        color: void 0,
                        fontSize: '11px',
                        fontFamily: void 0,
                        cssClass: 'apexcharts-yaxis-annotation-label',
                        padding: { left: 5, right: 5, top: 0, bottom: 2 },
                      },
                    },
                  }),
                  (this.pointAnnotation = {
                    x: 0,
                    y: null,
                    yAxisIndex: 0,
                    seriesIndex: 0,
                    marker: {
                      size: 0,
                      fillColor: '#fff',
                      strokeWidth: 2,
                      strokeColor: '#333',
                      shape: 'circle',
                      offsetX: 0,
                      offsetY: 0,
                      radius: 2,
                    },
                    label: {
                      borderColor: '#c2c2c2',
                      borderWidth: 1,
                      text: void 0,
                      textAnchor: 'middle',
                      offsetX: 0,
                      offsetY: -15,
                      style: {
                        background: '#fff',
                        color: void 0,
                        fontSize: '11px',
                        fontFamily: void 0,
                        cssClass: 'apexcharts-point-annotation-label',
                        padding: { left: 5, right: 5, top: 0, bottom: 2 },
                      },
                    },
                  });
              }
              return (
                s(t, [
                  {
                    key: 'init',
                    value: function () {
                      return {
                        annotations: {
                          position: 'front',
                          yaxis: [this.yAxisAnnotation],
                          xaxis: [this.xAxisAnnotation],
                          points: [this.pointAnnotation],
                        },
                        chart: {
                          animations: {
                            enabled: !0,
                            easing: 'easeinout',
                            speed: 800,
                            animateGradually: { delay: 150, enabled: !0 },
                            dynamicAnimation: { enabled: !0, speed: 350 },
                          },
                          background: 'transparent',
                          locales: [n],
                          defaultLocale: 'en',
                          dropShadow: { enabled: !1, enabledSeries: void 0, top: 2, left: 2, blur: 4, opacity: 0.35 },
                          events: {
                            animationEnd: void 0,
                            beforeMount: void 0,
                            mounted: void 0,
                            updated: void 0,
                            click: void 0,
                            legendClick: void 0,
                            selection: void 0,
                            dataPointSelection: void 0,
                            dataPointMouseEnter: void 0,
                            dataPointMouseLeave: void 0,
                            beforeZoom: void 0,
                            zoomed: void 0,
                            scrolled: void 0,
                          },
                          foreColor: '#373d3f',
                          fontFamily: 'Helvetica, Arial, sans-serif',
                          height: 'auto',
                          id: void 0,
                          offsetX: 0,
                          offsetY: 0,
                          selection: {
                            enabled: !1,
                            type: 'x',
                            fill: { color: '#24292e', opacity: 0.1 },
                            stroke: { width: 1, color: '#24292e', opacity: 0.4, dashArray: 3 },
                            xaxis: { min: void 0, max: void 0 },
                            yaxis: { min: void 0, max: void 0 },
                          },
                          sparkline: { enabled: !1 },
                          brush: { enabled: !1, target: void 0 },
                          stacked: !1,
                          stackType: 'normal',
                          toolbar: {
                            show: !0,
                            tools: { download: !0, selection: !0, zoom: !0, zoomin: !0, zoomout: !0, pan: !0, reset: !0 },
                            autoSelected: 'zoom',
                          },
                          type: 'line',
                          width: '100%',
                          zoom: {
                            enabled: !0,
                            type: 'x',
                            zoomedArea: { fill: { color: '#90CAF9', opacity: 0.4 }, stroke: { color: '#0D47A1', opacity: 0.4, width: 1 } },
                          },
                        },
                        plotOptions: {
                          bar: {
                            horizontal: !1,
                            endingShape: 'flat',
                            columnWidth: '70%',
                            barHeight: '70%',
                            distributed: !1,
                            colors: { ranges: [], backgroundBarColors: [], backgroundBarOpacity: 1 },
                            dataLabels: { position: 'top' },
                          },
                          candlestick: { colors: { upward: '#00B746', downward: '#EF403C' }, wick: { useFillColor: !0 } },
                          heatmap: {
                            radius: 2,
                            enableShades: !0,
                            shadeIntensity: 0.5,
                            distributed: !1,
                            colorScale: { inverse: !1, ranges: [], min: void 0, max: void 0 },
                          },
                          radialBar: {
                            size: void 0,
                            inverseOrder: !1,
                            startAngle: 0,
                            endAngle: 360,
                            offsetX: 0,
                            offsetY: 0,
                            hollow: {
                              margin: 5,
                              size: '50%',
                              background: 'transparent',
                              image: void 0,
                              imageWidth: 150,
                              imageHeight: 150,
                              imageOffsetX: 0,
                              imageOffsetY: 0,
                              imageClipped: !0,
                              position: 'front',
                              dropShadow: { enabled: !1, top: 0, left: 0, blur: 3, opacity: 0.5 },
                            },
                            track: {
                              show: !0,
                              startAngle: void 0,
                              endAngle: void 0,
                              background: '#f2f2f2',
                              strokeWidth: '97%',
                              opacity: 1,
                              margin: 5,
                              dropShadow: { enabled: !1, top: 0, left: 0, blur: 3, opacity: 0.5 },
                            },
                            dataLabels: {
                              show: !0,
                              name: { show: !0, fontSize: '16px', fontFamily: void 0, color: void 0, offsetY: 0 },
                              value: {
                                show: !0,
                                fontSize: '14px',
                                fontFamily: void 0,
                                color: void 0,
                                offsetY: 16,
                                formatter: function (t) {
                                  return t + '%';
                                },
                              },
                              total: {
                                show: !1,
                                label: 'Total',
                                color: '#373d3f',
                                formatter: function (t) {
                                  return (
                                    t.globals.seriesTotals.reduce(function (t, e) {
                                      return t + e;
                                    }, 0) /
                                      t.globals.series.length +
                                    '%'
                                  );
                                },
                              },
                            },
                          },
                          pie: {
                            size: void 0,
                            customScale: 0,
                            offsetX: 0,
                            offsetY: 0,
                            dataLabels: { offset: 0 },
                            donut: {
                              size: '65%',
                              background: 'transparent',
                              labels: {
                                show: !1,
                                name: { show: !0, fontSize: '16px', fontFamily: void 0, color: void 0, offsetY: -10 },
                                value: {
                                  show: !0,
                                  fontSize: '20px',
                                  fontFamily: void 0,
                                  color: void 0,
                                  offsetY: 10,
                                  formatter: function (t) {
                                    return t;
                                  },
                                },
                                total: {
                                  show: !1,
                                  label: 'Total',
                                  color: '#373d3f',
                                  formatter: function (t) {
                                    return t.globals.seriesTotals.reduce(function (t, e) {
                                      return t + e;
                                    }, 0);
                                  },
                                },
                              },
                            },
                          },
                        },
                        colors: void 0,
                        dataLabels: {
                          enabled: !0,
                          formatter: function (t) {
                            return t;
                          },
                          textAnchor: 'middle',
                          offsetX: 0,
                          offsetY: 0,
                          style: { fontSize: '12px', fontFamily: void 0, colors: void 0 },
                          dropShadow: { enabled: !1, top: 1, left: 1, blur: 1, opacity: 0.45 },
                        },
                        fill: {
                          type: 'solid',
                          colors: void 0,
                          opacity: 0.85,
                          gradient: {
                            shade: 'dark',
                            type: 'horizontal',
                            shadeIntensity: 0.5,
                            gradientToColors: void 0,
                            inverseColors: !0,
                            opacityFrom: 1,
                            opacityTo: 1,
                            stops: [0, 50, 100],
                          },
                          image: { src: [], width: void 0, height: void 0 },
                          pattern: { style: 'sqaures', width: 6, height: 6, strokeWidth: 2 },
                        },
                        grid: {
                          show: !0,
                          borderColor: '#e0e0e0',
                          strokeDashArray: 0,
                          position: 'back',
                          xaxis: { lines: { show: !1, animate: !1 } },
                          yaxis: { lines: { show: !0, animate: !0 } },
                          row: { colors: void 0, opacity: 0.5 },
                          column: { colors: void 0, opacity: 0.5 },
                          padding: { top: 0, right: 10, bottom: 0, left: 10 },
                        },
                        labels: [],
                        legend: {
                          show: !0,
                          showForSingleSeries: !1,
                          showNullSeries: !0,
                          showZeroSeries: !0,
                          floating: !1,
                          position: 'bottom',
                          horizontalAlign: 'center',
                          fontSize: '12px',
                          fontFamily: void 0,
                          offsetY: 0,
                          offsetX: -20,
                          maxWidth: void 0,
                          maxHeight: void 0,
                          formatter: void 0,
                          labels: { colors: void 0, useSeriesColors: !1 },
                          markers: {
                            width: 12,
                            height: 12,
                            strokeWidth: 0,
                            strokeColor: '#fff',
                            radius: 12,
                            customHTML: void 0,
                            offsetX: 0,
                            offsetY: 0,
                          },
                          itemMargin: { horizontal: 0, vertical: 5 },
                          containerMargin: { left: 0, top: 0 },
                          onItemClick: { toggleDataSeries: !0 },
                          onItemHover: { highlightDataSeries: !0 },
                        },
                        markers: {
                          discrete: [],
                          size: 0,
                          colors: void 0,
                          strokeColor: '#fff',
                          strokeWidth: 2,
                          strokeOpacity: 0.9,
                          fillOpacity: 1,
                          shape: 'circle',
                          radius: 2,
                          offsetX: 0,
                          offsetY: 0,
                          hover: { size: void 0, sizeOffset: 3 },
                        },
                        noData: {
                          text: void 0,
                          align: 'center',
                          verticalAlign: 'middle',
                          offsetX: 0,
                          offsetY: 0,
                          style: { color: void 0, fontSize: '14px', fontFamily: void 0 },
                        },
                        responsive: [],
                        series: void 0,
                        states: {
                          normal: { filter: { type: 'none', value: 0 } },
                          hover: { filter: { type: 'lighten', value: 0.15 } },
                          active: { allowMultipleDataPointsSelection: !1, filter: { type: 'darken', value: 0.35 } },
                        },
                        title: {
                          text: void 0,
                          align: 'left',
                          margin: 10,
                          offsetX: 0,
                          offsetY: 0,
                          floating: !1,
                          style: { fontSize: '14px', fontFamily: void 0, color: void 0 },
                        },
                        subtitle: {
                          text: void 0,
                          align: 'left',
                          margin: 10,
                          offsetX: 0,
                          offsetY: 30,
                          floating: !1,
                          style: { fontSize: '12px', fontFamily: void 0, color: void 0 },
                        },
                        stroke: { show: !0, curve: 'smooth', lineCap: 'butt', width: 2, colors: void 0, dashArray: 0 },
                        tooltip: {
                          enabled: !0,
                          shared: !0,
                          followCursor: !1,
                          intersect: !1,
                          inverseOrder: !1,
                          custom: void 0,
                          fillSeriesColor: !1,
                          theme: 'light',
                          onDatasetHover: { highlightDataSeries: !1 },
                          x: { show: !0, format: 'dd MMM', formatter: void 0 },
                          y: {
                            formatter: void 0,
                            title: {
                              formatter: function (t) {
                                return t;
                              },
                            },
                          },
                          z: { formatter: void 0, title: 'Size: ' },
                          marker: { show: !0 },
                          items: { display: 'flex' },
                          fixed: { enabled: !1, position: 'topRight', offsetX: 0, offsetY: 0 },
                        },
                        xaxis: {
                          type: 'category',
                          categories: [],
                          offsetX: 0,
                          offsetY: 0,
                          labels: {
                            show: !0,
                            rotate: -45,
                            rotateAlways: !1,
                            hideOverlappingLabels: !0,
                            trim: !0,
                            minHeight: void 0,
                            maxHeight: 120,
                            showDuplicates: !1,
                            style: { colors: [], fontSize: '12px', fontFamily: void 0, cssClass: 'apexcharts-xaxis-label' },
                            offsetX: 0,
                            offsetY: 0,
                            format: void 0,
                            formatter: void 0,
                            datetimeFormatter: { year: 'yyyy', month: "MMM 'yy", day: 'dd MMM', hour: 'HH:mm', minute: 'HH:mm:ss' },
                          },
                          axisBorder: { show: !0, color: '#78909C', width: '100%', height: 1, offsetX: 0, offsetY: 0 },
                          axisTicks: { show: !0, color: '#78909C', height: 6, offsetX: 0, offsetY: 0 },
                          tickAmount: void 0,
                          min: void 0,
                          max: void 0,
                          range: void 0,
                          floating: !1,
                          position: 'bottom',
                          title: {
                            text: void 0,
                            offsetX: 0,
                            offsetY: 0,
                            style: { color: void 0, fontSize: '12px', fontFamily: void 0, cssClass: 'apexcharts-xaxis-title' },
                          },
                          crosshairs: {
                            show: !0,
                            width: 1,
                            position: 'back',
                            opacity: 0.9,
                            stroke: { color: '#b6b6b6', width: 0, dashArray: 0 },
                            fill: {
                              type: 'solid',
                              color: '#B1B9C4',
                              gradient: { colorFrom: '#D8E3F0', colorTo: '#BED1E6', stops: [0, 100], opacityFrom: 0.4, opacityTo: 0.5 },
                            },
                            dropShadow: { enabled: !1, left: 0, top: 0, blur: 1, opacity: 0.4 },
                          },
                          tooltip: { enabled: !0, offsetY: 0, formatter: void 0 },
                        },
                        yaxis: this.yAxis,
                        theme: {
                          palette: 'palette1',
                          monochrome: { enabled: !1, color: '#008FFB', shadeTo: 'light', shadeIntensity: 0.65 },
                        },
                      };
                    },
                  },
                ]),
                t
              );
            })();
          e.default = r;
        },
        function (t, e, i) {
          function a(t) {
            if (Array.isArray(t)) {
              for (var e = 0, i = Array(t.length); e < t.length; e++) i[e] = t[e];
              return i;
            }
            return Array.from(t);
          }
          function s(t, e) {
            if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
          }
          Object.defineProperty(e, '__esModule', { value: !0 });
          var n = (function () {
              function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                  var a = e[i];
                  (a.enumerable = a.enumerable || !1), (a.configurable = !0), 'value' in a && (a.writable = !0), Object.defineProperty(t, a.key, a);
                }
              }
              return function (e, i, a) {
                return i && t(e.prototype, i), a && t(e, a), e;
              };
            })(),
            r = (function (t) {
              return t && t.__esModule ? t : { default: t };
            })(i(22)),
            o = (function () {
              function t(e) {
                s(this, t), (this.ctx = e), (this.w = e.w), (this.months31 = [1, 3, 5, 7, 8, 10, 12]), (this.months30 = [2, 4, 6, 9, 11]), (this.daysCntOfYear = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334]);
              }
              return (
                n(t, [
                  {
                    key: 'isValidDate',
                    value: function (t) {
                      return !isNaN(this.parseDate(t));
                    },
                  },
                  {
                    key: 'getUTCTimeStamp',
                    value: function (t) {
                      return new Date(new Date(t).toUTCString().substr(0, 25)).getTime();
                    },
                  },
                  {
                    key: 'parseDate',
                    value: function (t) {
                      var e = Date.parse(t);
                      if (!isNaN(e)) return this.getUTCTimeStamp(t);
                      var i = Date.parse(t.replace(/-/g, '/').replace(/[a-z]+/gi, ' '));
                      return (i = this.getUTCTimeStamp(i));
                    },
                  },
                  {
                    key: 'treatAsUtc',
                    value: function (t) {
                      var e = new Date(t);
                      return e.setMinutes(e.getMinutes() - e.getTimezoneOffset()), e;
                    },
                  },
                  {
                    key: 'formatDate',
                    value: function (t, e) {
                      function i(t, e) {
                        var i = t + '';
                        for (e = e || 2; i.length < e; ) i = '0' + i;
                        return i;
                      }
                      var s = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                        n = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                        r = this.w.globals.locale,
                        o = ['\0'].concat(a(r.months)),
                        l = [''].concat(a(r.shortMonths)),
                        h = [''].concat(a(r.days)),
                        c = [''].concat(a(r.shortDays));
                      n && (t = this.treatAsUtc(t));
                      var d = s ? t.getUTCFullYear() : t.getFullYear();
                      e = (e = (e = e.replace(/(^|[^\\])yyyy+/g, '$1' + d)).replace(/(^|[^\\])yy/g, '$1' + d.toString().substr(2, 2))).replace(/(^|[^\\])y/g, '$1' + d);
                      var u = (s ? t.getUTCMonth() : t.getMonth()) + 1;
                      e = (e = (e = (e = e.replace(/(^|[^\\])MMMM+/g, '$1' + o[0])).replace(/(^|[^\\])MMM/g, '$1' + l[0])).replace(/(^|[^\\])MM/g, '$1' + i(u))).replace(/(^|[^\\])M/g, '$1' + u);
                      var f = s ? t.getUTCDate() : t.getDate();
                      e = (e = (e = (e = e.replace(/(^|[^\\])dddd+/g, '$1' + h[0])).replace(/(^|[^\\])ddd/g, '$1' + c[0])).replace(/(^|[^\\])dd/g, '$1' + i(f))).replace(/(^|[^\\])d/g, '$1' + f);
                      var g = s ? t.getUTCHours() : t.getHours();
                      e = (e = e.replace(/(^|[^\\])HH+/g, '$1' + i(g))).replace(/(^|[^\\])H/g, '$1' + g);
                      var p = g > 12 ? g - 12 : 0 === g ? 12 : g;
                      e = (e = e.replace(/(^|[^\\])hh+/g, '$1' + i(p))).replace(/(^|[^\\])h/g, '$1' + p);
                      var x = s ? t.getUTCMinutes() : t.getMinutes();
                      e = (e = e.replace(/(^|[^\\])mm+/g, '$1' + i(x))).replace(/(^|[^\\])m/g, '$1' + x);
                      var b = s ? t.getUTCSeconds() : t.getSeconds();
                      e = (e = e.replace(/(^|[^\\])ss+/g, '$1' + i(b))).replace(/(^|[^\\])s/g, '$1' + b);
                      var v = s ? t.getUTCMilliseconds() : t.getMilliseconds();
                      (e = e.replace(/(^|[^\\])fff+/g, '$1' + i(v, 3))), (v = Math.round(v / 10)), (e = e.replace(/(^|[^\\])ff/g, '$1' + i(v))), (v = Math.round(v / 10)), (e = e.replace(/(^|[^\\])f/g, '$1' + v));
                      var m = g < 12 ? 'AM' : 'PM';
                      e = (e = e.replace(/(^|[^\\])TT+/g, '$1' + m)).replace(/(^|[^\\])T/g, '$1' + m.charAt(0));
                      var y = m.toLowerCase();
                      e = (e = e.replace(/(^|[^\\])tt+/g, '$1' + y)).replace(/(^|[^\\])t/g, '$1' + y.charAt(0));
                      var w = -t.getTimezoneOffset(),
                        k = s || !w ? 'Z' : w > 0 ? '+' : '-';
                      if (!s) {
                        var S = (w = Math.abs(w)) % 60;
                        k += i(Math.floor(w / 60)) + ':' + i(S);
                      }
                      e = e.replace(/(^|[^\\])K/g, '$1' + k);
                      var A = (s ? t.getUTCDay() : t.getDay()) + 1;
                      return (e = e.replace(new RegExp(h[0], 'g'), h[A])), (e = e.replace(new RegExp(c[0], 'g'), c[A])), (e = e.replace(new RegExp(o[0], 'g'), o[u])), (e = e.replace(new RegExp(l[0], 'g'), l[u])), (e = e.replace(/\\(.)/g, '$1'));
                    },
                  },
                  {
                    key: 'getTimeUnitsfromTimestamp',
                    value: function (t, e) {
                      var i = this.w;
                      void 0 !== i.config.xaxis.min && (t = i.config.xaxis.min), void 0 !== i.config.xaxis.max && (e = i.config.xaxis.max);
                      var a = new Date(t).getFullYear(),
                        s = new Date(e).getFullYear(),
                        n = new Date(t).getMonth(),
                        r = new Date(e).getMonth(),
                        o = new Date(t).getDate(),
                        l = new Date(e).getDate(),
                        h = new Date(t).getHours(),
                        c = new Date(e).getHours();
                      return {
                        minMinute: new Date(t).getMinutes(),
                        maxMinute: new Date(e).getMinutes(),
                        minHour: h,
                        maxHour: c,
                        minDate: o,
                        maxDate: l,
                        minMonth: n,
                        maxMonth: r,
                        minYear: a,
                        maxYear: s,
                      };
                    },
                  },
                  {
                    key: 'isLeapYear',
                    value: function (t) {
                      return (t % 4 == 0 && t % 100 != 0) || t % 400 == 0;
                    },
                  },
                  {
                    key: 'calculcateLastDaysOfMonth',
                    value: function (t, e, i) {
                      return this.determineDaysOfMonths(t, e) - i;
                    },
                  },
                  {
                    key: 'determineDaysOfYear',
                    value: function (t) {
                      var e = 365;
                      return this.isLeapYear(t) && (e = 366), e;
                    },
                  },
                  {
                    key: 'determineRemainingDaysOfYear',
                    value: function (t, e, i) {
                      var a = this.daysCntOfYear[e] + i;
                      return e > 1 && this.isLeapYear() && a++, a;
                    },
                  },
                  {
                    key: 'determineDaysOfMonths',
                    value: function (t, e) {
                      var i = 30;
                      switch (((t = new r.default(this.ctx).monthMod(t)), !0)) {
                        case this.months30.includes(t):
                          2 === t && (i = this.isLeapYear(e) ? 29 : 28);
                          break;
                        case this.months31.includes(t):
                        default:
                          i = 31;
                      }
                      return i;
                    },
                  },
                ]),
                t
              );
            })();
          e.default = o;
        },
        function (t, e, i) {
          function a(t) {
            return t && t.__esModule ? t : { default: t };
          }
          function s(t, e) {
            if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
          }
          Object.defineProperty(e, '__esModule', { value: !0 });
          var n = (function () {
              function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                  var a = e[i];
                  (a.enumerable = a.enumerable || !1), (a.configurable = !0), 'value' in a && (a.writable = !0), Object.defineProperty(t, a.key, a);
                }
              }
              return function (e, i, a) {
                return i && t(e.prototype, i), a && t(e, a), e;
              };
            })(),
            r = a(i(4)),
            o = a(i(1)),
            l = a(i(0)),
            h = a(i(2)),
            c = (function () {
              function t(e) {
                s(this, t), (this.ctx = e), (this.w = e.w), (this.chartType = this.w.config.chart.type), (this.initialAnim = this.w.config.chart.animations.enabled), (this.dynamicAnim = this.initialAnim && this.w.config.chart.animations.dynamicAnimation.enabled), (this.animBeginArr = [0]), (this.animDur = 0), (this.donutDataLabels = this.w.config.plotOptions.pie.donut.labels);
                var i = this.w;
                (this.lineColorArr = void 0 !== i.globals.stroke.colors ? i.globals.stroke.colors : i.globals.colors), (this.defaultSize = i.globals.svgHeight < i.globals.svgWidth ? i.globals.svgHeight - 35 : i.globals.gridWidth), (this.centerY = this.defaultSize / 2), (this.centerX = i.globals.gridWidth / 2), (this.fullAngle = 360), (this.size = 0), (this.donutSize = 0), (this.sliceLabels = []), (this.prevSectorAngleArr = []);
              }
              return (
                n(t, [
                  {
                    key: 'draw',
                    value: function (t) {
                      for (var e = this, i = this.w, a = new l.default(this.ctx), s = a.group({ class: 'apexcharts-pie' }), n = 0, r = 0; r < t.length; r++) n += o.default.negToZero(t[r]);
                      var h = [],
                        c = a.group();
                      0 === n && (n = 1e-5);
                      for (var d = 0; d < t.length; d++) {
                        var u = (this.fullAngle * o.default.negToZero(t[d])) / n;
                        h.push(u);
                      }
                      if (i.globals.dataChanged) {
                        for (var f = 0, g = 0; g < i.globals.previousPaths.length; g++) f += o.default.negToZero(i.globals.previousPaths[g]);
                        for (var p = void 0, x = 0; x < i.globals.previousPaths.length; x++) (p = (this.fullAngle * o.default.negToZero(i.globals.previousPaths[x])) / f), this.prevSectorAngleArr.push(p);
                      }
                      (this.size = this.defaultSize / 2.05 - i.config.stroke.width - i.config.chart.dropShadow.blur), void 0 !== i.config.plotOptions.pie.size && (this.size = i.config.plotOptions.pie.size), (this.donutSize = (this.size * parseInt(i.config.plotOptions.pie.donut.size)) / 100);
                      var b = 1 + i.config.plotOptions.pie.customScale,
                        v = i.globals.gridWidth / 2,
                        m = i.globals.gridHeight / 2,
                        y = v - (i.globals.gridWidth / 2) * b,
                        w = m - (i.globals.gridHeight / 2) * b;
                      if (this.donutDataLabels.show) {
                        var k = this.renderInnerDataLabels(this.donutDataLabels, {
                          hollowSize: this.donutSize,
                          centerX: this.centerX,
                          centerY: this.centerY,
                          opacity: this.donutDataLabels.show,
                          translateX: y,
                          translateY: w - 25,
                        });
                        s.add(k);
                      }
                      if ('donut' === i.config.chart.type) {
                        var S = a.drawCircle(this.donutSize);
                        S.attr({ cx: this.centerX, cy: this.centerY, fill: i.config.plotOptions.pie.donut.background }), c.add(S);
                      }
                      var A = e.drawArcs(h, t);
                      return (
                        this.sliceLabels.forEach(function (t) {
                          A.add(t);
                        }),
                        c.attr({ transform: 'translate(' + y + ', ' + (w - 25) + ') scale(' + b + ')' }),
                        s.attr({ 'data:innerTranslateX': y, 'data:innerTranslateY': w - 25 }),
                        c.add(A),
                        s.add(c),
                        s
                      );
                    },
                  },
                  {
                    key: 'drawArcs',
                    value: function (t, e) {
                      var i = this.w,
                        a = new h.default(this.ctx),
                        s = new l.default(this.ctx),
                        n = new r.default(this.ctx),
                        c = s.group(),
                        d = 0,
                        u = 0,
                        f = 0,
                        g = 0;
                      this.strokeWidth = i.config.stroke.show ? i.config.stroke.width : 0;
                      for (var p = 0; p < t.length; p++) {
                        var x = s.group({
                          class: 'apexcharts-series apexcharts-pie-series ' + i.globals.seriesNames[p].toString().replace(/ /g, '-'),
                          id: 'apexcharts-series-' + p,
                          rel: p + 1,
                        });
                        c.add(x), (u = g), (f = (d = f) + t[p]), (g = u + this.prevSectorAngleArr[p]);
                        var b = f - d,
                          v = n.fillPath(x, { seriesNumber: p, size: this.size }),
                          m = this.getChangedPath(u, g),
                          y = s.drawPath({
                            d: m,
                            stroke: this.lineColorArr instanceof Array ? this.lineColorArr[p] : this.lineColorArr,
                            strokeWidth: this.strokeWidth,
                            fill: v,
                            fillOpacity: i.config.fill.opacity,
                            classes: 'apexcharts-pie-area',
                          });
                        if ((y.attr({ id: 'apexcharts-pieSlice-' + p, index: 0, j: p }), i.config.chart.dropShadow.enabled)) {
                          var w = i.config.chart.dropShadow;
                          a.dropShadow(y, w);
                        }
                        this.addListeners(y, this.donutDataLabels),
                          l.default.setAttrs(y.node, {
                            'data:angle': b,
                            'data:startAngle': d,
                            'data:strokeWidth': this.strokeWidth,
                            'data:value': e[p],
                          });
                        var k = void 0;
                        'pie' === i.config.chart.type ? (k = o.default.polarToCartesian(this.centerX, this.centerY, this.size / 1.25 + i.config.plotOptions.pie.dataLabels.offset, d + (f - d) / 2)) : 'donut' === i.config.chart.type && (k = o.default.polarToCartesian(this.centerX, this.centerY, (this.size + this.donutSize) / 2 + i.config.plotOptions.pie.dataLabels.offset, d + (f - d) / 2)), x.add(y);
                        var S = 0;
                        if (
                          (!this.initialAnim || i.globals.resized || i.globals.dataChanged ? this.animBeginArr.push(0) : ((S = ((f - d) / this.fullAngle) * i.config.chart.animations.speed), (this.animDur = S + this.animDur), this.animBeginArr.push(this.animDur)),
                          this.dynamicAnim && i.globals.dataChanged
                            ? this.animatePaths(y, {
                                endAngle: f,
                                startAngle: d,
                                prevStartAngle: u,
                                prevEndAngle: g,
                                animateStartingPos: !0,
                                i: p,
                                animBeginArr: this.animBeginArr,
                                dur: i.config.chart.animations.dynamicAnimation.speed,
                              })
                            : this.animatePaths(y, {
                                endAngle: f,
                                startAngle: d,
                                i: p,
                                totalItems: t.length - 1,
                                animBeginArr: this.animBeginArr,
                                dur: S,
                              }),
                          y.click(this.pieClicked.bind(this, p)),
                          i.config.dataLabels.enabled)
                        ) {
                          var A = k.x,
                            C = k.y,
                            M = (100 * (f - d)) / 360 + '%';
                          if (0 !== b) {
                            var P = i.config.dataLabels.formatter;
                            void 0 !== P && (M = P(i.globals.seriesPercent[p][0], { seriesIndex: p, w: i }));
                            var L = i.globals.dataLabels.style.colors[p],
                              E = s.drawText({
                                x: A,
                                y: C,
                                text: M,
                                textAnchor: 'middle',
                                fontSize: i.config.dataLabels.style.fontSize,
                                fontFamily: i.config.dataLabels.style.fontFamily,
                                foreColor: L,
                              });
                            if (i.config.dataLabels.dropShadow.enabled) {
                              var T = i.config.dataLabels.dropShadow;
                              new h.default(this.ctx).dropShadow(E, T);
                            }
                            E.node.classList.add('apexcharts-pie-label'), i.config.chart.animations.animate && !1 === i.globals.resized && (E.node.classList.add('apexcharts-pie-label-delay'), (E.node.style.animationDelay = i.config.chart.animations.speed / 940 + 's')), this.sliceLabels.push(E);
                          }
                        }
                      }
                      return c;
                    },
                  },
                  {
                    key: 'addListeners',
                    value: function (t, e) {
                      var i = new l.default(this.ctx);
                      t.node.addEventListener('mouseenter', i.pathMouseEnter.bind(this, t)), t.node.addEventListener('mouseenter', this.dataLabelsMouseIn.bind(this, t.node, e)), t.node.addEventListener('mouseleave', i.pathMouseLeave.bind(this, t)), t.node.addEventListener('mouseleave', this.dataLabelsMouseout.bind(this, t.node, e)), t.node.addEventListener('mousedown', i.pathMouseDown.bind(this, t));
                    },
                  },
                  {
                    key: 'animatePaths',
                    value: function (t, e) {
                      var i = this.w,
                        a = this,
                        s = e.endAngle - e.startAngle,
                        n = s,
                        r = e.startAngle,
                        o = e.startAngle;
                      void 0 !== e.prevStartAngle && void 0 !== e.prevEndAngle && ((r = e.prevEndAngle), (n = e.prevEndAngle - e.prevStartAngle)), e.i === i.config.series.length - 1 && (s + o > this.fullAngle ? (e.endAngle = e.endAngle - (s + o)) : s + o < this.fullAngle && (e.endAngle = e.endAngle + (this.fullAngle - (s + o)))), s === this.fullAngle && (s = this.fullAngle - 0.01), a.animateArc(t, r, o, s, n, e);
                    },
                  },
                  {
                    key: 'animateArc',
                    value: function (t, e, i, a, s, n) {
                      var r = this,
                        o = this.w,
                        l = r.size;
                      l || (l = n.size);
                      var h = void 0,
                        c = n;
                      (isNaN(e) || isNaN(s)) && ((e = i), (s = a), (c.dur = 0));
                      var d = a,
                        u = i,
                        f = e - i;
                      o.globals.dataChanged && n.shouldSetPrevPaths && ((h = r.getPiePath({ me: r, startAngle: u, angle: s, size: l })), t.attr({ d: h })),
                        0 !== c.dur
                          ? t
                              .animate(c.dur, o.globals.easing, c.animBeginArr[c.i])
                              .afterAll(function () {
                                ('pie' !== o.config.chart.type && 'donut' !== o.config.chart.type) || this.animate(300).attr({ 'stroke-width': o.config.stroke.width });
                              })
                              .during(function (o) {
                                (d = f + (a - f) * o), n.animateStartingPos && ((d = s + (a - s) * o), (u = e - s + (i - (e - s)) * o)), (h = r.getPiePath({ me: r, startAngle: u, angle: d, size: l })), t.node.setAttribute('data:pathOrig', h), t.attr({ d: h });
                              })
                          : ((h = r.getPiePath({ me: r, startAngle: u, angle: a, size: l })), t.node.setAttribute('data:pathOrig', h), t.attr({ d: h }));
                    },
                  },
                  {
                    key: 'pieClicked',
                    value: function (t) {
                      var e = this.w,
                        i = this,
                        a = void 0,
                        s = i.size + 5,
                        n = e.globals.dom.Paper.select('#apexcharts-pieSlice-' + t).members[0],
                        r = n.attr('d');
                      if ('true' === n.attr('data:pieClicked')) {
                        n.attr({ 'data:pieClicked': 'false' });
                        var o = n.attr('data:pathOrig');
                        return void n.attr({ d: o });
                      }
                      var l = e.globals.dom.baseEl.querySelectorAll('.apexcharts-pie-area');
                      Array.prototype.forEach.call(l, function (t) {
                        t.setAttribute('data:pieClicked', 'false');
                        var e = t.getAttribute('data:pathOrig');
                        t.setAttribute('d', e);
                      }),
                        n.attr('data:pieClicked', 'true');
                      var h = parseInt(n.attr('data:startAngle')),
                        c = parseInt(n.attr('data:angle'));
                      (a = i.getPiePath({ me: i, startAngle: h, angle: c, size: s })), 360 !== c && n.plot(a).animate(1).plot(r).animate(100).plot(a);
                    },
                  },
                  {
                    key: 'getChangedPath',
                    value: function (t, e) {
                      var i = '';
                      return this.dynamicAnim && this.w.globals.dataChanged && (i = this.getPiePath({ me: this, startAngle: t, angle: e - t, size: this.size })), i;
                    },
                  },
                  {
                    key: 'getPiePath',
                    value: function (t) {
                      var e = t.me,
                        i = t.startAngle,
                        a = t.angle,
                        s = t.size,
                        n = this.w,
                        r = i,
                        l = (Math.PI * (r - 90)) / 180,
                        h = a + i;
                      h > 360 && (h = 360);
                      var c = (Math.PI * (h - 90)) / 180,
                        d = e.centerX + s * Math.cos(l),
                        u = e.centerY + s * Math.sin(l),
                        f = e.centerX + s * Math.cos(c),
                        g = e.centerY + s * Math.sin(c),
                        p = o.default.polarToCartesian(e.centerX, e.centerY, e.donutSize, h),
                        x = o.default.polarToCartesian(e.centerX, e.centerY, e.donutSize, r),
                        b = a > 180 ? 1 : 0;
                      return 'donut' === n.config.chart.type ? ['M', d, u, 'A', s, s, 0, b, 1, f, g, 'L', p.x, p.y, 'A', e.donutSize, e.donutSize, 0, b, 0, x.x, x.y, 'L', d, u, 'z'].join(' ') : 'pie' === n.config.chart.type ? ['M', d, u, 'A', s, s, 0, b, 1, f, g, 'L', e.centerX, e.centerY, 'L', d, u].join(' ') : ['M', d, u, 'A', s, s, 0, b, 1, f, g].join(' ');
                    },
                  },
                  {
                    key: 'renderInnerDataLabels',
                    value: function (t, e) {
                      var i = this.w,
                        a = new l.default(this.ctx),
                        s = a.group({
                          class: 'apexcharts-datalabels-group',
                          transform: 'translate(' + (e.translateX ? e.translateX : 0) + ', ' + (e.translateY ? e.translateY : 0) + ')',
                        }),
                        n = t.total.show;
                      s.node.style.opacity = e.opacity;
                      var r = e.centerX,
                        o = e.centerY,
                        h = void 0,
                        c = void 0;
                      (h = void 0 === t.name.color ? i.globals.colors[0] : t.name.color), (c = void 0 === t.value.color ? i.config.chart.foreColor : t.value.color);
                      var d = t.value.formatter,
                        u = '',
                        f = '';
                      if ((n ? ((h = t.total.color), (f = t.total.label), (u = t.total.formatter(i))) : 1 === i.globals.series.length && ((u = d(i.globals.series[0], i)), (f = i.globals.seriesNames[0])), t.name.show)) {
                        var g = a.drawText({
                          x: r,
                          y: o + parseInt(t.name.offsetY),
                          text: f,
                          textAnchor: 'middle',
                          foreColor: h,
                          fontSize: t.name.fontSize,
                          fontFamily: t.name.fontFamily,
                        });
                        g.node.classList.add('apexcharts-datalabel-label'), s.add(g);
                      }
                      if (t.value.show) {
                        var p = t.name.show ? parseInt(t.value.offsetY) + 16 : t.value.offsetY,
                          x = a.drawText({
                            x: r,
                            y: o + p,
                            text: u,
                            textAnchor: 'middle',
                            foreColor: c,
                            fontSize: t.value.fontSize,
                            fontFamily: t.value.fontFamily,
                          });
                        x.node.classList.add('apexcharts-datalabel-value'), s.add(x);
                      }
                      return s;
                    },
                  },
                  {
                    key: 'printInnerLabels',
                    value: function (t, e, i, a) {
                      var s = this.w,
                        n = void 0;
                      a ? (n = void 0 === t.name.color ? s.globals.colors[parseInt(a.parentNode.getAttribute('rel')) - 1] : t.name.color) : s.globals.series.length > 1 && t.total.show && (n = t.total.color);
                      var r = s.globals.dom.baseEl.querySelector('.apexcharts-datalabel-label'),
                        o = s.globals.dom.baseEl.querySelector('.apexcharts-datalabel-value');
                      (i = (0, t.value.formatter)(i, s)), a || 'function' != typeof t.total.formatter || (i = t.total.formatter(s)), null !== r && (r.textContent = e), null !== o && (o.textContent = i), null !== r && (r.style.fill = n);
                    },
                  },
                  {
                    key: 'dataLabelsMouseIn',
                    value: function (t, e) {
                      var i = this.w,
                        a = t.getAttribute('data:value'),
                        s = i.globals.seriesNames[parseInt(t.parentNode.getAttribute('rel')) - 1];
                      i.globals.series.length > 1 && this.printInnerLabels(e, s, a, t);
                      var n = i.globals.dom.baseEl.querySelector('.apexcharts-datalabels-group');
                      null !== n && (n.style.opacity = 1);
                    },
                  },
                  {
                    key: 'dataLabelsMouseout',
                    value: function (e, i) {
                      var a = this.w,
                        s = a.globals.dom.baseEl.querySelector('.apexcharts-datalabels-group');
                      i.total.show && a.globals.series.length > 1 ? new t(this.ctx).printInnerLabels(i, i.total.label, i.total.formatter(a)) : null !== s && a.globals.series.length > 1 && (s.style.opacity = 0);
                    },
                  },
                ]),
                t
              );
            })();
          e.default = c;
        },
        function (t, e, i) {
          function a(t) {
            return t && t.__esModule ? t : { default: t };
          }
          function s(t, e) {
            if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
          }
          var n = (function () {
              function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                  var a = e[i];
                  (a.enumerable = a.enumerable || !1), (a.configurable = !0), 'value' in a && (a.writable = !0), Object.defineProperty(t, a.key, a);
                }
              }
              return function (e, i, a) {
                return i && t(e.prototype, i), a && t(e, a), e;
              };
            })(),
            r = a(i(5)),
            o = a(i(4)),
            l = a(i(2)),
            h = a(i(0)),
            c = a(i(8)),
            d = (function () {
              function t(e) {
                s(this, t), (this.ctx = e), (this.w = e.w), (this.initialAnim = this.w.config.chart.animations.enabled), (this.dynamicAnim = this.initialAnim && this.w.config.chart.animations.dynamicAnimation.enabled), (this.radiusSizes = []);
              }
              return (
                n(t, [
                  {
                    key: 'draw',
                    value: function (t, e, i) {
                      var a = this.w,
                        s = new r.default(this.ctx),
                        n = new h.default(this.ctx),
                        d = new l.default(this.ctx),
                        u = new o.default(this.ctx),
                        f = i.realIndex,
                        g = i.pointsPos,
                        p = i.zRatio,
                        x = i.elParent,
                        b = u.fillPath(t, { seriesNumber: f }),
                        v = n.group({ class: 'apexcharts-series-markers apexcharts-series-' + a.config.chart.type });
                      if ((v.attr('clip-path', 'url(#gridRectMarkerMask' + a.globals.cuid + ')'), g.x instanceof Array))
                        for (var m = 0; m < g.x.length; m++) {
                          var y = e + 1;
                          0 === e && 0 === m && (y = 0), 0 === e && 1 === m && (y = 1);
                          var w = 0,
                            k = a.globals.markers.size[f];
                          p !== 1 / 0 && ((k = a.globals.seriesZ[f][y] / p), void 0 === this.radiusSizes[f] && this.radiusSizes.push([]), this.radiusSizes[f].push(k)), a.config.chart.animations.enabled || (w = k);
                          var S = g.x[m],
                            A = g.y[m];
                          if (((S = S || 0), (A = A || 0), (w = w || 0), (0 === S && 0 === A) || void 0 === a.globals.series[f][y])) return;
                          var C = n.drawCircle(w);
                          if (
                            (C.attr({ cx: S, cy: A, fill: b }),
                            a.config.chart.dropShadow.enabled &&
                              d.dropShadow(C, {
                                top: a.config.chart.dropShadow.top,
                                left: a.config.chart.dropShadow.left,
                                blur: a.config.chart.dropShadow.blur,
                              }),
                            this.initialAnim && !a.globals.dataChanged)
                          ) {
                            var M = 1;
                            a.globals.resized || (M = a.config.chart.animations.speed), s.animateCircleRadius(C, 0, k, M, a.globals.easing);
                          }
                          if (a.globals.dataChanged)
                            if (this.dynamicAnim) {
                              var P = a.config.chart.animations.dynamicAnimation.speed,
                                L = void 0,
                                E = void 0,
                                T = void 0,
                                z = null;
                              void 0 !== (z = a.globals.previousPaths[f] && a.globals.previousPaths[f][e]) && null !== z && ((L = z.x), (E = z.y), (T = void 0 !== z.r ? z.r : k));
                              for (var X = 0; X < a.globals.collapsedSeries.length; X++) a.globals.collapsedSeries[X].index === f && ((P = 1), (k = 0));
                              0 === S && 0 === A && (k = 0), s.animateCircle(C, { cx: L, cy: E, r: T }, { cx: S, cy: A, r: k }, P, a.globals.easing);
                            } else C.attr({ r: k });
                          C.attr({ rel: y, j: y, index: f, 'default-marker-size': k });
                          var Y = new c.default(this.ctx);
                          Y.setSelectedPointFilter(C, f, y), Y.addEvents(C), C.node.classList.add('apexcharts-marker'), v.add(C), x.add(v);
                        }
                    },
                  },
                  {
                    key: 'centerTextInBubble',
                    value: function (t) {
                      var e = this.w;
                      return (t += parseInt(e.config.dataLabels.style.fontSize) / 4), { y: t };
                    },
                  },
                ]),
                t
              );
            })();
          t.exports = d;
        },
        function (t, e, i) {
          function a(t) {
            return t && t.__esModule ? t : { default: t };
          }
          function s(t, e) {
            if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
          }
          Object.defineProperty(e, '__esModule', { value: !0 });
          var n = (function () {
              function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                  var a = e[i];
                  (a.enumerable = a.enumerable || !1), (a.configurable = !0), 'value' in a && (a.writable = !0), Object.defineProperty(t, a.key, a);
                }
              }
              return function (e, i, a) {
                return i && t(e.prototype, i), a && t(e, a), e;
              };
            })(),
            r = a(i(0)),
            o = a(i(2)),
            l = (function () {
              function t(e) {
                s(this, t), (this.ctx = e), (this.w = e.w);
              }
              return (
                n(t, [
                  {
                    key: 'drawXCrosshairs',
                    value: function () {
                      var t = this.w,
                        e = new r.default(this.ctx),
                        i = new o.default(this.ctx),
                        a = t.config.xaxis.crosshairs.fill.gradient,
                        s = t.config.xaxis.crosshairs.dropShadow,
                        n = t.config.xaxis.crosshairs.fill.type,
                        l = a.colorFrom,
                        h = a.colorTo,
                        c = a.opacityFrom,
                        d = a.opacityTo,
                        u = a.stops,
                        f = s.enabled,
                        g = s.left,
                        p = s.top,
                        x = s.blur,
                        b = s.opacity,
                        v = t.config.xaxis.crosshairs.fill.color;
                      if (t.config.xaxis.crosshairs.show) {
                        'gradient' === n && (v = e.drawGradient('vertical', l, h, c, d, null, u));
                        var m = e.drawRect();
                        m.attr({
                          class: 'apexcharts-xcrosshairs',
                          x: 0,
                          y: 0,
                          width: 0,
                          height: t.globals.gridHeight,
                          fill: v,
                          filter: 'none',
                          'fill-opacity': t.config.xaxis.crosshairs.opacity,
                          stroke: t.config.xaxis.crosshairs.stroke.color,
                          'stroke-width': t.config.xaxis.crosshairs.stroke.width,
                          'stroke-dasharray': t.config.xaxis.crosshairs.stroke.dashArray,
                        }),
                          f && (m = i.dropShadow(m, { left: g, top: p, blur: x, opacity: b })),
                          t.globals.dom.elGraphical.add(m);
                      }
                    },
                  },
                  {
                    key: 'drawYCrosshairs',
                    value: function () {
                      var t = this.w,
                        e = new r.default(this.ctx),
                        i = t.config.yaxis[0].crosshairs;
                      if (t.config.yaxis[0].crosshairs.show) {
                        var a = e.drawLine(0, 0, t.globals.gridWidth, 0, i.stroke.color, i.stroke.dashArray, i.stroke.width);
                        a.attr({ class: 'apexcharts-ycrosshairs' }), t.globals.dom.elGraphical.add(a);
                      }
                      var s = e.drawLine(0, 0, t.globals.gridWidth, 0, i.stroke.color, 0, 0);
                      s.attr({ class: 'apexcharts-ycrosshairs-hidden' }), t.globals.dom.elGraphical.add(s);
                    },
                  },
                ]),
                t
              );
            })();
          e.default = l;
        },
        function (t, e, i) {
          function a(t, e) {
            if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
          }
          Object.defineProperty(e, '__esModule', { value: !0 });
          var s = (function () {
              function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                  var a = e[i];
                  (a.enumerable = a.enumerable || !1), (a.configurable = !0), 'value' in a && (a.writable = !0), Object.defineProperty(t, a.key, a);
                }
              }
              return function (e, i, a) {
                return i && t(e.prototype, i), a && t(e, a), e;
              };
            })(),
            n = (function () {
              function t(e) {
                a(this, t), (this.ctx = e), (this.w = e.w);
              }
              return (
                s(t, [
                  {
                    key: 'getSvgString',
                    value: function () {
                      return this.w.globals.dom.Paper.svg();
                    },
                  },
                  {
                    key: 'cleanup',
                    value: function () {
                      var t = this.w,
                        e = t.globals.dom.baseEl.querySelector('.apexcharts-xcrosshairs'),
                        i = t.globals.dom.baseEl.querySelector('.apexcharts-ycrosshairs');
                      e && e.setAttribute('x', -500), i && (i.setAttribute('y1', -100), i.setAttribute('y2', -100));
                    },
                  },
                  {
                    key: 'svgUrl',
                    value: function () {
                      this.cleanup();
                      var t = this.getSvgString(),
                        e = new Blob([t], { type: 'image/svg+xml;charset=utf-8' });
                      return URL.createObjectURL(e);
                    },
                  },
                  {
                    key: 'exportToSVG',
                    value: function () {
                      this.triggerDownload(this.svgUrl(), '.svg');
                    },
                  },
                  {
                    key: 'exportToPng',
                    value: function () {
                      var t = this,
                        e = this.w;
                      this.cleanup();
                      var i = document.createElement('canvas');
                      (i.width = e.globals.svgWidth), (i.height = e.globals.svgHeight);
                      var a = 'transparent' === e.config.chart.background ? '#fff' : e.config.chart.background,
                        s = i.getContext('2d');
                      (s.fillStyle = a), s.fillRect(0, 0, i.width, i.height);
                      var n = window.URL || window.webkitURL || window,
                        r = new Image(),
                        o = this.getSvgString(),
                        l = new Blob([o], { type: 'image/svg+xml;charset=utf-8' }),
                        h = n.createObjectURL(l);
                      (r.onload = function () {
                        s.drawImage(r, 0, 0), n.revokeObjectURL(h);
                        var e = i.toDataURL('image/png').replace('image/png', 'image/octet-stream');
                        t.triggerDownload(e, '.png');
                      }),
                        (r.src = h);
                    },
                  },
                  {
                    key: 'triggerDownload',
                    value: function (t, e) {
                      var i = document.createElement('a');
                      (i.href = t), (i.download = this.w.globals.chartID + e), document.body.appendChild(i), i.click(), document.body.removeChild(i);
                    },
                  },
                ]),
                t
              );
            })();
          e.default = n;
        },
        function (t, e, i) {
          function a(t) {
            return t && t.__esModule ? t : { default: t };
          }
          function s(t) {
            if (Array.isArray(t)) {
              for (var e = 0, i = Array(t.length); e < t.length; e++) i[e] = t[e];
              return i;
            }
            return Array.from(t);
          }
          function n(t, e) {
            if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
          }
          Object.defineProperty(e, '__esModule', { value: !0 });
          var r = (function () {
              function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                  var a = e[i];
                  (a.enumerable = a.enumerable || !1), (a.configurable = !0), 'value' in a && (a.writable = !0), Object.defineProperty(t, a.key, a);
                }
              }
              return function (e, i, a) {
                return i && t(e.prototype, i), a && t(e, a), e;
              };
            })(),
            o = a(i(1)),
            l = a(i(39)),
            h = (function () {
              function t(e) {
                n(this, t), (this.ctx = e), (this.w = e.w), (this.scales = new l.default(e));
              }
              return (
                r(t, [
                  {
                    key: 'init',
                    value: function () {
                      this.setYRange(), this.setXRange(), this.setZRange();
                    },
                  },
                  {
                    key: 'getMinYMaxY',
                    value: function (t) {
                      var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MAX_VALUE,
                        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Number.MIN_SAFE_INTEGER,
                        a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                        n = this.w.globals,
                        r = -Number.MAX_VALUE,
                        l = Number.MIN_VALUE;
                      null === a && (a = t + 1);
                      var h = n.series,
                        c = h,
                        d = h;
                      'candlestick' === this.w.config.chart.type && ((c = n.seriesCandleL), (d = n.seriesCandleH));
                      for (var u = t; u < a; u++) {
                        (n.dataPoints = Math.max(n.dataPoints, h[u].length)), o.default.isIE11() && (l = Math.min.apply(Math, s(c[u]).concat([0])));
                        for (var f = 0; f < n.series[u].length; f++) null !== h[u][f] && o.default.isNumber(h[u][f]) ? ((r = Math.max(r, d[u][f])), (e = Math.min(e, c[u][f])), (i = Math.max(i, c[u][f])), o.default.isFloat(h[u][f]) && (n.yValueDecimal = Math.max(n.yValueDecimal, h[u][f].toString().split('.')[1].length)), l > c[u][f] && c[u][f] < 0 && (l = c[u][f])) : (n.hasNullValues = !0);
                      }
                      return { minY: l, maxY: r, lowestY: e, highestY: i };
                    },
                  },
                  {
                    key: 'setYRange',
                    value: function () {
                      var t = this.w.globals,
                        e = this.w.config;
                      (t.maxY = -Number.MAX_VALUE), (t.minY = Number.MIN_VALUE);
                      var i = e.yaxis,
                        a = Number.MAX_VALUE;
                      if (t.isMultipleYAxis)
                        for (var s = 0; s < t.series.length; s++) {
                          var n = this.getMinYMaxY(s, a, null, s + 1);
                          t.minYArr.push(n.minY), t.maxYArr.push(n.maxY), (a = n.lowestY);
                        }
                      var r = this.getMinYMaxY(0, a, null, t.series.length);
                      if (((t.minY = r.minY), (t.maxY = r.maxY), (a = r.lowestY), e.chart.stacked)) {
                        for (var l = [], h = [], c = 0; c < t.series[t.maxValsInArrayIndex].length; c++) for (var d = 0, u = 0, f = 0; f < t.series.length; f++) null !== t.series[f][c] && o.default.isNumber(t.series[f][c]) && (t.series[f][c] > 0 ? (d = d + parseInt(t.series[f][c]) + 1e-4) : (u += parseInt(t.series[f][c]))), f === t.series.length - 1 && (l.push(d), h.push(u));
                        for (var g = 0; g < l.length; g++) (t.maxY = Math.max(t.maxY, l[g])), (t.minY = Math.min(t.minY, h[g]));
                      }
                      if (('line' === e.chart.type || 'area' === e.chart.type || 'candlestick' === e.chart.type) && t.minY === Number.MIN_VALUE && a !== Number.MAX_SAFE_INTEGER) {
                        var p = t.maxY - a;
                        a >= 0 && a <= 10 && (p = 0), (t.minY = a - (5 * p) / 100), ((a > 0 && t.maxY < 50) || (a > 0 && t.minY < 0)) && (t.minY = 0), t.maxY > 10 && (t.maxY = t.maxY + (5 * p) / 100 + 0.6);
                      }
                      e.yaxis.map(function (e, a) {
                        void 0 !== e.max && 'number' == typeof e.max && ((t.maxYArr[a] = e.max), (t.maxY = i[0].max)), void 0 !== e.min && 'number' == typeof e.min && ((t.minYArr[a] = e.min), (t.minY = i[0].min));
                      }),
                        t.isMultipleYAxis
                          ? (this.scales.setMultipleYScales(),
                            t.yAxisScale.forEach(function (e, i) {
                              (t.minYArr[i] = e.niceMin), (t.maxYArr[i] = e.niceMax);
                            }))
                          : (this.scales.setYScaleForIndex(0, t.minY, t.maxY), (t.minY = t.yAxisScale[0].niceMin), (t.maxY = t.yAxisScale[0].niceMax), (t.minYArr[0] = t.yAxisScale[0].niceMin), (t.maxYArr[0] = t.yAxisScale[0].niceMax));
                    },
                  },
                  {
                    key: 'setXRange',
                    value: function () {
                      var t = this.w.globals,
                        e = this.w.config;
                      if (t.isXNumeric) for (var i = 0; i < t.series.length; i++) if (t.labels[i]) for (var a = 0; a < t.labels[i].length; a++) null !== t.labels[i][a] && o.default.isNumber(t.labels[i][a]) && ((t.maxX = Math.max(t.maxX, t.labels[i][a])), (t.initialmaxX = Math.max(t.maxX, t.labels[i][a])), (t.minX = Math.min(t.minX, t.labels[i][a])), (t.initialminX = Math.min(t.minX, t.labels[i][a])));
                      if ((t.noLabelsProvided && 0 === e.xaxis.categories.length && ((t.maxX = t.labels[t.labels.length - 1]), (t.initialmaxX = t.labels[t.labels.length - 1]), (t.minX = 1), (t.initialminX = 1)), (t.comboChartsHasBars || ('bar' === e.chart.type && 'category' !== e.xaxis.type)) && 'category' !== e.xaxis.type)) {
                        var s = t.minX - ((t.svgWidth / t.dataPoints) * (Math.abs(t.maxX - t.minX) / t.svgWidth)) / 3;
                        (t.minX = s), (t.initialminX = s);
                        var n = t.maxX + ((t.svgWidth / t.dataPoints) * (Math.abs(t.maxX - t.minX) / t.svgWidth)) / 3;
                        (t.maxX = n), (t.initialmaxX = n);
                      }
                      if (t.isXNumeric || t.noLabelsProvided) {
                        var r = void 0;
                        void 0 === e.xaxis.tickAmount ? ((r = Math.round(t.svgWidth / 150)), 'numeric' === e.xaxis.type && t.dataPoints < 20 && (r = t.dataPoints - 1), r > t.dataPoints && 0 !== t.dataPoints && (r = t.dataPoints - 1)) : (r = 'dataPoints' === e.xaxis.tickAmount ? t.series[t.maxValsInArrayIndex].length - 1 : e.xaxis.tickAmount), void 0 !== e.xaxis.max && 'number' == typeof e.xaxis.max && (t.maxX = e.xaxis.max), void 0 !== e.xaxis.min && 'number' == typeof e.xaxis.min && (t.minX = e.xaxis.min), void 0 !== e.xaxis.range && (t.minX = t.maxX - e.xaxis.range), t.minX !== Number.MAX_VALUE && t.maxX !== -Number.MAX_VALUE ? (t.xAxisScale = this.scales.linearScale(t.minX, t.maxX, r)) : ((t.xAxisScale = this.scales.linearScale(1, r, r)), t.noLabelsProvided && t.labels.length > 0 && ((t.xAxisScale = this.scales.linearScale(1, t.labels.length, r - 1)), (t.seriesX = t.labels.slice()))), ('numeric' === e.xaxis.type || 'datetime' === e.xaxis.type || ('category' === e.xaxis.type && !t.noLabelsProvided)) && (t.labels = t.xAxisScale.result.slice());
                      }
                    },
                  },
                  {
                    key: 'setZRange',
                    value: function () {
                      var t = this.w.globals;
                      if (t.isDataXYZ) for (var e = 0; e < t.series.length; e++) if (void 0 !== t.seriesZ[e]) for (var i = 0; i < t.seriesZ[e].length; i++) null !== t.seriesZ[e][i] && o.default.isNumber(t.seriesZ[e][i]) && ((t.maxZ = Math.max(t.maxZ, t.seriesZ[e][i])), (t.minZ = Math.min(t.minZ, t.seriesZ[e][i])));
                    },
                  },
                ]),
                t
              );
            })();
          e.default = h;
        },
        function (t, e, i) {
          function a(t) {
            return t && t.__esModule ? t : { default: t };
          }
          function s(t, e) {
            if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
          }
          Object.defineProperty(e, '__esModule', { value: !0 });
          var n =
              Object.assign ||
              function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var i = arguments[e];
                  for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && (t[a] = i[a]);
                }
                return t;
              },
            r = (function () {
              function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                  var a = e[i];
                  (a.enumerable = a.enumerable || !1), (a.configurable = !0), 'value' in a && (a.writable = !0), Object.defineProperty(t, a.key, a);
                }
              }
              return function (e, i, a) {
                return i && t(e.prototype, i), a && t(e, a), e;
              };
            })(),
            o = a(i(16)),
            l = a(i(11)),
            h = a(i(0)),
            c = (function () {
              function t(e) {
                s(this, t), (this.ctx = e), (this.w = e.w), (this.timeScaleArray = []);
              }
              return (
                r(t, [
                  {
                    key: 'calculateTimeScaleTicks',
                    value: function (t, e) {
                      var i = this,
                        a = this.w;
                      if (a.globals.allSeriesCollapsed) return (a.globals.labels = []), (a.globals.timelineLabels = []), [];
                      var s = new o.default(this.ctx),
                        r = (e - t) / 864e5;
                      this.determineInterval(r), (a.globals.disableZoomIn = !1), (a.globals.disableZoomOut = !1), r < 0.005 ? (a.globals.disableZoomIn = !0) : r > 5e4 && (a.globals.disableZoomOut = !0);
                      var l = s.getTimeUnitsfromTimestamp(t, e),
                        h = a.globals.gridWidth / r,
                        c = h / 24,
                        d = c / 60,
                        u = Math.floor(24 * r),
                        f = Math.floor(24 * r * 60),
                        g = Math.floor(r),
                        p = Math.floor(r / 30),
                        x = Math.floor(r / 365),
                        b = { minMinute: l.minMinute, minHour: l.minHour, minDate: l.minDate, minMonth: l.minMonth, minYear: l.minYear },
                        v = {
                          firstVal: b,
                          currentMinute: b.minMinute,
                          currentHour: b.minHour,
                          currentMonthDate: b.minDate,
                          currentDate: b.minDate,
                          currentMonth: b.minMonth,
                          currentYear: b.minYear,
                          daysWidthOnXAxis: h,
                          hoursWidthOnXAxis: c,
                          minutesWidthOnXAxis: d,
                          numberOfMinutes: f,
                          numberOfHours: u,
                          numberOfDays: g,
                          numberOfMonths: p,
                          numberOfYears: x,
                        };
                      switch (this.tickInterval) {
                        case 'years':
                          this.generateYearScale(v);
                          break;
                        case 'months':
                        case 'half_year':
                          this.generateMonthScale(v);
                          break;
                        case 'months_days':
                        case 'months_fortnight':
                        case 'days':
                        case 'week_days':
                          this.generateDayScale(v);
                          break;
                        case 'hours':
                          this.generateHourScale(v);
                          break;
                        case 'minutes':
                          this.generateMinuteScale(v);
                      }
                      var m = this.timeScaleArray.map(function (t) {
                        var e = {
                          position: t.position,
                          unit: t.unit,
                          year: t.year,
                          day: t.day ? t.day : 1,
                          hour: t.hour ? t.hour : 0,
                          month: t.month + 1,
                        };
                        return 'month' === t.unit ? n({}, e, { value: t.value + 1 }) : 'day' === t.unit || 'hour' === t.unit ? n({}, e, { value: t.value }) : 'minute' === t.unit ? n({}, e, { value: t.value, minute: t.value }) : t;
                      });
                      return m.filter(function (t) {
                        var e = 1,
                          s = Math.ceil(a.globals.gridWidth / 120),
                          n = t.value;
                        void 0 !== a.config.xaxis.tickAmount && (s = a.config.xaxis.tickAmount), m.length > s && (e = Math.floor(m.length / s));
                        var r = !1,
                          o = !1;
                        switch (i.tickInterval) {
                          case 'half_year':
                            (e = 7), 'year' === t.unit && (r = !0);
                            break;
                          case 'months':
                            (e = 1), 'year' === t.unit && (r = !0);
                            break;
                          case 'months_fortnight':
                            (e = 15), ('year' !== t.unit && 'month' !== t.unit) || (r = !0), 30 === n && (o = !0);
                            break;
                          case 'months_days':
                            (e = 10), 'month' === t.unit && (r = !0), 30 === n && (o = !0);
                            break;
                          case 'week_days':
                            (e = 8), 'month' === t.unit && (r = !0);
                            break;
                          case 'days':
                            (e = 1), 'month' === t.unit && (r = !0);
                            break;
                          case 'hours':
                            'day' === t.unit && (r = !0);
                            break;
                          case 'minutes':
                            n % 5 != 0 && (o = !0);
                        }
                        if ('minutes' === i.tickInterval || 'hours' === i.tickInterval) {
                          if (!o) return !0;
                        } else if ((n % e == 0 || r) && !o) return !0;
                      });
                    },
                  },
                  {
                    key: 'recalcDimensionsBasedOnFormat',
                    value: function (t) {
                      var e = this.w,
                        i = this.formatDates(t),
                        a = this.removeOverlappingTS(i);
                      (e.globals.timelineLabels = a.slice()), new l.default(this.ctx).plotCoords();
                    },
                  },
                  {
                    key: 'determineInterval',
                    value: function (t) {
                      switch (!0) {
                        case t > 1825:
                          this.tickInterval = 'years';
                          break;
                        case t > 800 && t <= 1825:
                          this.tickInterval = 'half_year';
                          break;
                        case t > 180 && t <= 800:
                          this.tickInterval = 'months';
                          break;
                        case t > 90 && t <= 180:
                          this.tickInterval = 'months_fortnight';
                          break;
                        case t > 60 && t <= 90:
                          this.tickInterval = 'months_days';
                          break;
                        case t > 30 && t <= 60:
                          this.tickInterval = 'week_days';
                          break;
                        case t > 2 && t <= 30:
                          this.tickInterval = 'days';
                          break;
                        case t > 0.1 && t <= 2:
                          this.tickInterval = 'hours';
                          break;
                        case t < 0.1:
                          this.tickInterval = 'minutes';
                          break;
                        default:
                          this.tickInterval = 'days';
                      }
                    },
                  },
                  {
                    key: 'generateYearScale',
                    value: function (t) {
                      var e = t.firstVal,
                        i = t.currentMonth,
                        a = t.currentYear,
                        s = t.daysWidthOnXAxis,
                        n = t.numberOfYears,
                        r = e.minYear,
                        l = 0,
                        h = new o.default(this.ctx);
                      if (e.minDate > 1 && e.minMonth > 0) {
                        var c = h.determineRemainingDaysOfYear(e.minYear, e.minMonth, e.minDate);
                        (l = (h.determineDaysOfYear(e.minYear) - c + 1) * s), (r = e.minYear + 1), this.timeScaleArray.push({ position: l, value: r, unit: 'year', year: r, month: this.monthMod(i + 1) });
                      } else 1 === e.minDate && 0 === e.minMonth && this.timeScaleArray.push({ position: l, value: r, unit: 'year', year: a, month: this.monthMod(i + 1) });
                      for (var d = r, u = l, f = 0; f < n; f++) d++, (u = h.determineDaysOfYear(d - 1) * s + u), this.timeScaleArray.push({ position: u, value: d, unit: 'year', year: d, month: 1 });
                    },
                  },
                  {
                    key: 'generateMonthScale',
                    value: function (t) {
                      var e = t.firstVal,
                        i = t.currentMonthDate,
                        a = t.currentMonth,
                        s = t.currentYear,
                        n = t.daysWidthOnXAxis,
                        r = t.numberOfMonths,
                        l = a,
                        h = 0,
                        c = new o.default(this.ctx),
                        d = 'month',
                        u = 0;
                      if (e.minDate > 1) {
                        (h = (c.determineDaysOfMonths(a + 1, e.minYear) - i + 1) * n), (l = this.monthMod(a + 1));
                        var f = s + u,
                          g = this.monthMod(l),
                          p = l;
                        0 === l && ((d = 'year'), (p = f), (g = 1), (f += u += 1)), this.timeScaleArray.push({ position: h, value: p, unit: d, year: f, month: g });
                      } else this.timeScaleArray.push({ position: h, value: l, unit: d, year: s, month: this.monthMod(a) });
                      for (var x = l + 1, b = h, v = 0, m = 1; v < r; v++, m++) {
                        0 === (x = this.monthMod(x)) ? ((d = 'year'), (u += 1)) : (d = 'month');
                        var y = s + Math.floor(x / 12) + u;
                        b = c.determineDaysOfMonths(x, y) * n + b;
                        var w = 0 === x ? y : x;
                        this.timeScaleArray.push({ position: b, value: w, unit: d, year: y, month: 0 === x ? 1 : x }), x++;
                      }
                    },
                  },
                  {
                    key: 'generateDayScale',
                    value: function (t) {
                      var e = t.firstVal,
                        i = t.currentMonth,
                        a = t.currentYear,
                        s = t.hoursWidthOnXAxis,
                        n = t.numberOfDays,
                        r = new o.default(this.ctx),
                        l = 'day',
                        h = (24 - e.minHour) * s,
                        c = e.minDate + 1,
                        d = c,
                        u = function (t, e, i) {
                          return t > r.determineDaysOfMonths(e + 1, i) ? ((e += 1), (f = 1), (l = 'month'), (d = e), e) : e;
                        },
                        f = c,
                        g = u(f, i, a);
                      this.timeScaleArray.push({ position: h, value: d, unit: l, year: a, month: this.monthMod(g), day: f });
                      for (var p = h, x = 0; x < n; x++) {
                        (l = 'day'), (g = u((f += 1), g, a + Math.floor(g / 12) + 0));
                        var b = a + Math.floor(g / 12) + 0;
                        p = 24 * s + p;
                        var v = 1 === f ? this.monthMod(g) : f;
                        this.timeScaleArray.push({ position: p, value: v, unit: l, year: b, month: this.monthMod(g), day: v });
                      }
                    },
                  },
                  {
                    key: 'generateHourScale',
                    value: function (t) {
                      var e = t.firstVal,
                        i = t.currentDate,
                        a = t.currentMonth,
                        s = t.currentYear,
                        n = t.minutesWidthOnXAxis,
                        r = t.numberOfHours,
                        l = new o.default(this.ctx),
                        h = 'hour',
                        c = function (t, e) {
                          return t > l.determineDaysOfMonths(e + 1, s) ? (e += 1) : e;
                        },
                        d = 60 - e.minMinute,
                        u = d * n,
                        f = e.minHour + 1,
                        g = f + 1;
                      60 === d && ((u = 0), (g = (f = e.minHour) + 1));
                      var p = i,
                        x = c(p, a);
                      this.timeScaleArray.push({ position: u, value: f, unit: h, day: p, hour: g, year: s, month: this.monthMod(x) });
                      for (var b = u, v = 0; v < r; v++) {
                        if (((h = 'hour'), g >= 24)) {
                          (g = 0), (h = 'day');
                          var m = (function (t, e) {
                            return t > l.determineDaysOfMonths(e + 1, s) && ((p = 1), (e += 1)), { month: e, date: p };
                          })((p += 1), x);
                          (x = m.month), (x = c(p, x));
                        }
                        var y = s + Math.floor(x / 12) + 0;
                        b = 0 === g && 0 === v ? d * n : 60 * n + b;
                        var w = 0 === g ? p : g;
                        this.timeScaleArray.push({ position: b, value: w, unit: h, hour: g, day: p, year: y, month: this.monthMod(x) }), g++;
                      }
                    },
                  },
                  {
                    key: 'generateMinuteScale',
                    value: function (t) {
                      var e = t.firstVal,
                        i = t.currentMinute,
                        a = t.currentHour,
                        s = t.currentDate,
                        n = t.currentMonth,
                        r = t.currentYear,
                        o = t.minutesWidthOnXAxis,
                        l = t.numberOfMinutes,
                        h = o - (i - e.minMinute),
                        c = e.minMinute + 1,
                        d = c + 1,
                        u = s,
                        f = n,
                        g = r,
                        p = a;
                      this.timeScaleArray.push({
                        position: h,
                        value: c,
                        unit: 'minute',
                        day: u,
                        hour: p,
                        minute: d,
                        year: g,
                        month: this.monthMod(f),
                      });
                      for (var x = h, b = 0; b < l; b++) {
                        d >= 60 && ((d = 0), 24 === (p += 1) && (p = 0));
                        var v = r + Math.floor(f / 12) + 0;
                        x = o + x;
                        var m = d;
                        this.timeScaleArray.push({
                          position: x,
                          value: m,
                          unit: 'minute',
                          hour: p,
                          minute: d,
                          day: u,
                          year: v,
                          month: this.monthMod(f),
                        }),
                          d++;
                      }
                    },
                  },
                  {
                    key: 'createRawDateString',
                    value: function (t, e) {
                      var i = t.year;
                      return (i += '-' + ('0' + t.month.toString()).slice(-2)), 'day' === t.unit ? (i += 'day' === t.unit ? '-' + ('0' + e).slice(-2) : '-01') : (i += '-' + ('0' + (t.day ? t.day : '1')).slice(-2)), 'hour' === t.unit ? (i += 'hour' === t.unit ? 'T' + ('0' + e).slice(-2) : 'T00') : (i += 'T' + ('0' + (t.hour ? t.hour : '0')).slice(-2)), (i += 'minute' === t.unit ? ':' + ('0' + e).slice(-2) + ':00.000Z' : ':00:00.000Z');
                    },
                  },
                  {
                    key: 'formatDates',
                    value: function (t) {
                      var e = this,
                        i = this.w;
                      return t.map(function (t) {
                        var a = t.value.toString(),
                          s = new o.default(e.ctx),
                          n = e.createRawDateString(t, a),
                          r = new Date(Date.parse(n));
                        if (void 0 === i.config.xaxis.labels.format) {
                          var l = 'dd MMM',
                            h = i.config.xaxis.labels.datetimeFormatter;
                          'year' === t.unit && (l = h.year), 'month' === t.unit && (l = h.month), 'day' === t.unit && (l = h.day), 'hour' === t.unit && (l = h.hour), 'minute' === t.unit && (l = h.minute), (a = s.formatDate(r, l, !0, !1));
                        } else a = s.formatDate(r, i.config.xaxis.labels.format);
                        return { dateString: n, position: t.position, value: a, unit: t.unit, year: t.year, month: t.month };
                      });
                    },
                  },
                  {
                    key: 'removeOverlappingTS',
                    value: function (t) {
                      var e = this,
                        i = new h.default(this.ctx),
                        a = 0,
                        s = t.map(function (s, n) {
                          if (n > 0 && e.w.config.xaxis.labels.hideOverlappingLabels) {
                            var r = i.getTextRects(t[a].value).width,
                              o = t[a].position;
                            return s.position > o + r + 10 ? ((a = n), s) : null;
                          }
                          return s;
                        });
                      return (s = s.filter(function (t) {
                        return null !== t;
                      }));
                    },
                  },
                  {
                    key: 'monthMod',
                    value: function (t) {
                      return t % 12;
                    },
                  },
                ]),
                t
              );
            })();
          e.default = c;
        },
        function (t, e, i) {
          function a(t) {
            return t && t.__esModule ? t : { default: t };
          }
          function s(t, e) {
            if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
          }
          var n = (function () {
              function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                  var a = e[i];
                  (a.enumerable = a.enumerable || !1), (a.configurable = !0), 'value' in a && (a.writable = !0), Object.defineProperty(t, a.key, a);
                }
              }
              return function (e, i, a) {
                return i && t(e.prototype, i), a && t(e, a), e;
              };
            })(),
            r = a(i(0)),
            o = a(i(20)),
            l = a(i(64)),
            h = a(i(67)),
            c = a(i(61)),
            d = a(i(65)),
            u = a(i(63)),
            f = a(i(66)),
            g = a(i(62)),
            p = (function () {
              function t(e) {
                s(this, t), (this.ctx = e), (this.w = e.w), (this.ev = this.w.config.chart.events), (this.localeValues = this.w.globals.locale.toolbar);
              }
              return (
                n(t, [
                  {
                    key: 'createToolbar',
                    value: function () {
                      var t = this.w,
                        e = document.createElement('div');
                      e.setAttribute('class', 'apexcharts-toolbar'), t.globals.dom.elWrap.appendChild(e), (this.elZoom = document.createElement('div')), (this.elZoomIn = document.createElement('div')), (this.elZoomOut = document.createElement('div')), (this.elPan = document.createElement('div')), (this.elSelection = document.createElement('div')), (this.elZoomReset = document.createElement('div')), (this.elMenuIcon = document.createElement('div')), (this.elMenu = document.createElement('div')), (this.elMenuItems = []);
                      var i = [];
                      t.config.chart.toolbar.tools.selection &&
                        t.config.chart.selection.enabled &&
                        i.push({
                          el: this.elSelection,
                          icon: f.default,
                          title: this.localeValues.selection,
                          class: 'apexcharts-selection-icon',
                        }),
                        t.config.chart.toolbar.tools.zoomin && t.config.chart.zoom.enabled && i.push({ el: this.elZoomIn, icon: d.default, title: this.localeValues.zoomIn, class: 'apexcharts-zoom-in-icon' }),
                        t.config.chart.toolbar.tools.zoomout &&
                          t.config.chart.zoom.enabled &&
                          i.push({
                            el: this.elZoomOut,
                            icon: u.default,
                            title: this.localeValues.zoomOut,
                            class: 'apexcharts-zoom-out-icon',
                          }),
                        t.config.chart.toolbar.tools.zoom &&
                          t.config.chart.zoom.enabled &&
                          i.push({
                            el: this.elZoom,
                            icon: h.default,
                            title: this.localeValues.selectionZoom,
                            class: 'apexcharts-zoom-icon',
                          }),
                        t.config.chart.toolbar.tools.pan && t.config.chart.zoom.enabled && i.push({ el: this.elPan, icon: l.default, title: this.localeValues.pan, class: 'apexcharts-pan-icon' }),
                        t.config.chart.toolbar.tools.reset &&
                          i.push({
                            el: this.elZoomReset,
                            icon: c.default,
                            title: this.localeValues.reset,
                            class: 'apexcharts-reset-zoom-icon',
                          }),
                        t.config.chart.toolbar.tools.download && i.push({ el: this.elMenuIcon, icon: g.default, title: this.localeValues.menu, class: 'apexcharts-menu-icon' });
                      for (var a = 0; a < i.length; a++) r.default.setAttrs(i[a].el, { class: i[a].class, title: i[a].title }), (i[a].el.innerHTML = i[a].icon), e.appendChild(i[a].el);
                      e.appendChild(this.elMenu), r.default.setAttrs(this.elMenu, { class: 'apexcharts-menu' });
                      for (
                        var s = [
                            { name: 'exportSVG', title: this.localeValues.exportToSVG },
                            { name: 'exportPNG', title: this.localeValues.exportToPNG },
                          ],
                          n = 0;
                        n < s.length;
                        n++
                      )
                        this.elMenuItems.push(document.createElement('div')), (this.elMenuItems[n].innerHTML = s[n].title), r.default.setAttrs(this.elMenuItems[n], { class: 'apexcharts-menu-item ' + s[n].name, title: s[n].title }), this.elMenu.appendChild(this.elMenuItems[n]);
                      t.globals.zoomEnabled ? this.elZoom.classList.add('selected') : t.globals.panEnabled ? this.elPan.classList.add('selected') : t.globals.selectionEnabled && this.elSelection.classList.add('selected'), this.addToolbarEventListeners();
                    },
                  },
                  {
                    key: 'addToolbarEventListeners',
                    value: function () {
                      var t = this;
                      this.elZoomReset.addEventListener('click', this.handleZoomReset.bind(this)),
                        this.elSelection.addEventListener('click', this.toggleSelection.bind(this)),
                        this.elZoom.addEventListener('click', this.toggleZooming.bind(this)),
                        this.elZoomIn.addEventListener('click', this.handleZoomIn.bind(this)),
                        this.elZoomOut.addEventListener('click', this.handleZoomOut.bind(this)),
                        this.elPan.addEventListener('click', this.togglePanning.bind(this)),
                        this.elMenuIcon.addEventListener('click', this.toggleMenu.bind(this)),
                        this.elMenuItems.forEach(function (e) {
                          e.classList.contains('exportSVG') ? e.addEventListener('click', t.downloadSVG.bind(t)) : e.classList.contains('exportPNG') && e.addEventListener('click', t.downloadPNG.bind(t));
                        });
                    },
                  },
                  {
                    key: 'toggleSelection',
                    value: function () {
                      this.toggleOtherControls(), (this.w.globals.selectionEnabled = !this.w.globals.selectionEnabled), this.elSelection.classList.contains('selected') ? this.elSelection.classList.remove('selected') : this.elSelection.classList.add('selected');
                    },
                  },
                  {
                    key: 'toggleZooming',
                    value: function () {
                      this.toggleOtherControls(), (this.w.globals.zoomEnabled = !this.w.globals.zoomEnabled), this.elZoom.classList.contains('selected') ? this.elZoom.classList.remove('selected') : this.elZoom.classList.add('selected');
                    },
                  },
                  {
                    key: 'getToolbarIconsReference',
                    value: function () {
                      var t = this.w;
                      this.elZoom || (this.elZoom = t.globals.dom.baseEl.querySelector('.apexcharts-zoom-icon')), this.elPan || (this.elPan = t.globals.dom.baseEl.querySelector('.apexcharts-pan-icon')), this.elSelection || (this.elSelection = t.globals.dom.baseEl.querySelector('.apexcharts-selection-icon'));
                    },
                  },
                  {
                    key: 'enableZooming',
                    value: function () {
                      this.toggleOtherControls(), (this.w.globals.zoomEnabled = !0), this.elZoom && this.elZoom.classList.add('selected'), this.elPan && this.elPan.classList.remove('selected');
                    },
                  },
                  {
                    key: 'enablePanning',
                    value: function () {
                      this.toggleOtherControls(), (this.w.globals.panEnabled = !0), this.elPan && this.elPan.classList.add('selected'), this.elZoom && this.elZoom.classList.remove('selected');
                    },
                  },
                  {
                    key: 'togglePanning',
                    value: function () {
                      this.toggleOtherControls(), (this.w.globals.panEnabled = !this.w.globals.panEnabled), this.elPan.classList.contains('selected') ? this.elPan.classList.remove('selected') : this.elPan.classList.add('selected');
                    },
                  },
                  {
                    key: 'toggleOtherControls',
                    value: function () {
                      var t = this.w;
                      (t.globals.panEnabled = !1), (t.globals.zoomEnabled = !1), (t.globals.selectionEnabled = !1), this.getToolbarIconsReference(), this.elPan && this.elPan.classList.remove('selected'), this.elSelection && this.elSelection.classList.remove('selected'), this.elZoom && this.elZoom.classList.remove('selected');
                    },
                  },
                  {
                    key: 'handleZoomIn',
                    value: function () {
                      var t = this.w,
                        e = (t.globals.minX + t.globals.maxX) / 2,
                        i = (t.globals.minX + e) / 2,
                        a = (t.globals.maxX + e) / 2;
                      t.globals.disableZoomIn || this.zoomUpdateOptions(i, a);
                    },
                  },
                  {
                    key: 'handleZoomOut',
                    value: function () {
                      var t = this.w;
                      if (!('datetime' === t.config.xaxis.type && new Date(t.globals.minX).getUTCFullYear() < 1e3)) {
                        var e = (t.globals.minX + t.globals.maxX) / 2,
                          i = t.globals.minX - (e - t.globals.minX),
                          a = t.globals.maxX - (e - t.globals.maxX);
                        t.globals.disableZoomOut || this.zoomUpdateOptions(i, a);
                      }
                    },
                  },
                  {
                    key: 'zoomUpdateOptions',
                    value: function (t, e) {
                      var i = { min: t, max: e },
                        a = this.getBeforeZoomRange(i);
                      a && (i = a.xaxis), (this.w.globals.zoomed = !0), this.ctx._updateOptions({ xaxis: i }, !1, this.w.config.chart.animations.dynamicAnimation.enabled), this.zoomCallback({ min: t, max: e });
                    },
                  },
                  {
                    key: 'zoomCallback',
                    value: function (t, e) {
                      'function' == typeof this.ev.zoomed && this.ev.zoomed(this.ctx, { xaxis: t, yaxis: e });
                    },
                  },
                  {
                    key: 'getBeforeZoomRange',
                    value: function (t, e) {
                      var i = null;
                      return 'function' == typeof this.ev.beforeZoom && (i = this.ev.beforeZoom(this, { xaxis: t, yaxis: e })), i;
                    },
                  },
                  {
                    key: 'toggleMenu',
                    value: function () {
                      this.elMenu.classList.contains('open') ? this.elMenu.classList.remove('open') : this.elMenu.classList.add('open');
                    },
                  },
                  {
                    key: 'downloadPNG',
                    value: function () {
                      var t = new o.default(this.ctx);
                      t.exportToPng(this.ctx), this.toggleMenu();
                    },
                  },
                  {
                    key: 'downloadSVG',
                    value: function () {
                      var t = new o.default(this.ctx);
                      t.exportToSVG(), this.toggleMenu();
                    },
                  },
                  {
                    key: 'handleZoomReset',
                    value: function (t) {
                      var e = this;
                      this.ctx.getSyncedCharts().forEach(function (t) {
                        var i = t.w;
                        i.globals.minX !== i.globals.initialminX && i.globals.maxX !== i.globals.initialmaxX && (t.revertDefaultAxisMinMax(), 'function' == typeof i.config.chart.events.zoomed && e.zoomCallback({ min: i.config.xaxis.min, max: i.config.xaxis.max }), (i.globals.zoomed = !1), t._updateSeries(i.globals.initialSeries, i.config.chart.animations.dynamicAnimation.enabled));
                      });
                    },
                  },
                  {
                    key: 'destroy',
                    value: function () {
                      this.elZoomReset && (this.elZoomReset.removeEventListener('click', this.handleZoomReset.bind(this)), this.elSelection.removeEventListener('click', this.toggleSelection.bind(this)), this.elZoom.removeEventListener('click', this.toggleZooming.bind(this)), this.elZoomIn.removeEventListener('click', this.handleZoomIn.bind(this)), this.elZoomOut.removeEventListener('click', this.handleZoomOut.bind(this)), this.elPan.removeEventListener('click', this.togglePanning.bind(this)), this.elMenuIcon.removeEventListener('click', this.toggleMenu.bind(this))), (this.elZoom = null), (this.elZoomIn = null), (this.elZoomOut = null), (this.elPan = null), (this.elSelection = null), (this.elZoomReset = null), (this.elMenuIcon = null);
                    },
                  },
                ]),
                t
              );
            })();
          t.exports = p;
        },
        function (t, e, i) {
          function a(t) {
            return t && t.__esModule ? t : { default: t };
          }
          function s(t, e) {
            if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
          }
          var n = (function () {
              function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                  var a = e[i];
                  (a.enumerable = a.enumerable || !1), (a.configurable = !0), 'value' in a && (a.writable = !0), Object.defineProperty(t, a.key, a);
                }
              }
              return function (e, i, a) {
                return i && t(e.prototype, i), a && t(e, a), e;
              };
            })(),
            r = a(i(0)),
            o = a(i(6)),
            l = (function () {
              function t(e) {
                s(this, t), (this.ttCtx = e), (this.ctx = e.ctx), (this.w = e.w);
              }
              return (
                n(t, [
                  {
                    key: 'moveXCrosshairs',
                    value: function (t) {
                      var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        i = this.ttCtx,
                        a = this.w,
                        s = i.getElXCrosshairs(),
                        n = t - i.xcrosshairsWidth / 2,
                        r = a.globals.labels.slice().length;
                      if ((null !== e && (n = (a.globals.gridWidth / r) * e), 'tickWidth' === a.config.xaxis.crosshairs.width || 'barWidth' === a.config.xaxis.crosshairs.width ? n + i.xcrosshairsWidth > a.globals.gridWidth && (n = a.globals.gridWidth - i.xcrosshairsWidth) : null !== e && (n += a.globals.gridWidth / r / 2), n < 0 && (n = 0), n > a.globals.gridWidth && (n = a.globals.gridWidth), null !== s && (s.setAttribute('x', n), s.classList.add('active')), i.blxaxisTooltip)) {
                        var o = n;
                        ('tickWidth' !== a.config.xaxis.crosshairs.width && 'barWidth' !== a.config.xaxis.crosshairs.width) || (o = n + i.xcrosshairsWidth / 2), this.moveXAxisTooltip(o);
                      }
                    },
                  },
                  {
                    key: 'moveYCrosshairs',
                    value: function (t) {
                      var e = this.ttCtx;
                      null !== e.ycrosshairs && (r.default.setAttrs(e.ycrosshairs, { y1: t, y2: t }), r.default.setAttrs(e.ycrosshairsHidden, { y1: t, y2: t }));
                    },
                  },
                  {
                    key: 'moveXAxisTooltip',
                    value: function (t) {
                      var e = this.w,
                        i = this.ttCtx;
                      if (null !== i.xaxisTooltip) {
                        i.xaxisTooltip.classList.add('active');
                        var a = i.xaxisOffY + e.config.xaxis.tooltip.offsetY + e.globals.translateY + 1 + e.config.xaxis.offsetY;
                        if (((t -= i.xaxisTooltip.getBoundingClientRect().width / 2), !isNaN(t))) {
                          t += e.globals.translateX;
                          var s = 0;
                          (s = new r.default(this.ctx).getTextRects(i.xaxisTooltipText.innerHTML)), (i.xaxisTooltipText.style.minWidth = s.width + 'px'), (i.xaxisTooltip.style.left = t + 'px'), (i.xaxisTooltip.style.top = a + 'px');
                        }
                      }
                    },
                  },
                  {
                    key: 'moveYAxisTooltip',
                    value: function (t) {
                      var e = this.w,
                        i = this.ttCtx;
                      null === i.yaxisTTEls && (i.yaxisTTEls = e.globals.dom.baseEl.querySelectorAll('.apexcharts-yaxistooltip'));
                      var a = parseInt(i.ycrosshairsHidden.getAttribute('y1')),
                        s = e.globals.translateY + a,
                        n = i.yaxisTTEls[t].getBoundingClientRect().height,
                        r = e.globals.translateYAxisX[t] - 2;
                      e.config.yaxis[t].opposite && (r -= 26), (s -= n / 2), -1 === e.globals.ignoreYAxisIndexes.indexOf(t) ? (i.yaxisTTEls[t].classList.add('active'), (i.yaxisTTEls[t].style.top = s + 'px'), (i.yaxisTTEls[t].style.left = r + e.config.yaxis[t].tooltip.offsetX + 'px')) : i.yaxisTTEls[t].classList.remove('active');
                    },
                  },
                  {
                    key: 'moveTooltip',
                    value: function (t, e) {
                      var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                        a = this.w,
                        s = this.ttCtx,
                        n = s.getElTooltip(),
                        r = s.tooltipRect,
                        o = null !== i ? parseInt(i) : 1,
                        l = parseInt(t) + o + 5,
                        h = parseInt(e) + o / 2;
                      if ((l > a.globals.gridWidth / 2 && (l = l - r.ttWidth - o - 15), l > a.globals.gridWidth - r.ttWidth - 10 && (l = a.globals.gridWidth - r.ttWidth), l < -20 && (l = -20), a.config.tooltip.followCursor)) {
                        var c = s.getElGrid().getBoundingClientRect();
                        h = s.e.clientY - c.top - r.ttHeight / 2;
                      }
                      var d = this.positionChecks(r, l, h);
                      (l = d.x), (h = d.y), isNaN(l) || ((l += a.globals.translateX), (n.style.left = l + 'px'), (n.style.top = h + 'px'));
                    },
                  },
                  {
                    key: 'positionChecks',
                    value: function (t, e, i) {
                      var a = this.w;
                      return t.ttHeight + i > a.globals.gridHeight && (i = a.globals.gridHeight - t.ttHeight + a.globals.translateY), i < 0 && (i = 0), { x: e, y: i };
                    },
                  },
                  {
                    key: 'moveMarkers',
                    value: function (t, e) {
                      var i = this.w,
                        a = this.ttCtx;
                      if (i.globals.markers.size[t] > 0) for (var s = i.globals.dom.baseEl.querySelectorAll(" .apexcharts-series[data\\:realIndex='" + t + "'] .apexcharts-marker"), n = 0; n < s.length; n++) parseInt(s[n].getAttribute('rel')) === e && (a.marker.resetPointsSize(), a.marker.enlargeCurrentPoint(e, s[n]));
                      else a.marker.resetPointsSize(), this.moveDynamicPointOnHover(e, t);
                    },
                  },
                  {
                    key: 'moveDynamicPointOnHover',
                    value: function (t, e) {
                      var i = this.w,
                        a = this.ttCtx,
                        s = 0,
                        n = 0,
                        r = i.globals.pointsArray,
                        o = i.config.markers.hover.size;
                      void 0 === o && (o = i.globals.markers.size[e] + i.config.markers.hover.sizeOffset), (s = r[e][t][0]), (n = r[e][t][1] ? r[e][t][1] : 0);
                      var l = i.globals.dom.baseEl.querySelector(".apexcharts-series[data\\:realIndex='" + e + "'] .apexcharts-series-markers circle");
                      l.setAttribute('r', o), l.setAttribute('cx', s), l.setAttribute('cy', n), this.moveXCrosshairs(s), a.fixedTooltip || this.moveTooltip(s, n, o);
                    },
                  },
                  {
                    key: 'moveDynamicPointsOnHover',
                    value: function (t) {
                      var e = this.ttCtx,
                        i = e.w,
                        a = 0,
                        s = 0,
                        n = 0,
                        r = i.globals.pointsArray;
                      n = new o.default(this.ctx).getActiveSeriesIndex();
                      var l = i.config.markers.hover.size;
                      void 0 === l && (l = i.globals.markers.size[n] + i.config.markers.hover.sizeOffset), r[n] && ((a = r[n][t][0]), (s = r[n][t][1]));
                      var h = null,
                        c = e.getAllMarkers();
                      if (null !== (h = null !== c ? c : i.globals.dom.baseEl.querySelectorAll('.apexcharts-series-markers circle')))
                        for (var d = 0; d < h.length; d++) {
                          var u = r[d];
                          if (u && u.length) {
                            var f = r[d][t][1];
                            h[d].setAttribute('cx', a);
                            var g = parseInt(h[d].parentNode.parentNode.parentNode.getAttribute('data:realIndex'));
                            null !== f ? (h[g] && h[g].setAttribute('r', l), h[g] && h[g].setAttribute('cy', f)) : h[g] && h[g].setAttribute('r', 0);
                          }
                        }
                      if ((this.moveXCrosshairs(a), !e.fixedTooltip)) {
                        var p = s || i.globals.gridHeight;
                        this.moveTooltip(a, p, l);
                      }
                    },
                  },
                  {
                    key: 'moveStickyTooltipOverBars',
                    value: function (t) {
                      var e = this.w,
                        i = this.ttCtx,
                        a = e.globals.dom.baseEl.querySelector(".apexcharts-bar-series .apexcharts-series[rel='1'] path[j='" + t + "'], .apexcharts-candlestick-series .apexcharts-series[rel='1'] path[j='" + t + "']"),
                        s = a ? parseFloat(a.getAttribute('cx')) : 0,
                        n = 0,
                        r = a ? parseFloat(a.getAttribute('barWidth')) : 0;
                      e.globals.isXNumeric ? (s -= r / 2) : ((s = i.xAxisTicksPositions[t - 1] + i.dataPointsDividedWidth / 2), isNaN(s) && (s = i.xAxisTicksPositions[t] - i.dataPointsDividedWidth / 2));
                      var o = i.getElGrid().getBoundingClientRect();
                      if (((n = i.e.clientY - o.top - i.tooltipRect.ttHeight / 2), this.moveXCrosshairs(s), !i.fixedTooltip)) {
                        var l = n || e.globals.gridHeight;
                        this.moveTooltip(s, l);
                      }
                    },
                  },
                ]),
                t
              );
            })();
          t.exports = l;
        },
        function (t, e, i) {
          function a(t) {
            if (Array.isArray(t)) {
              for (var e = 0, i = Array(t.length); e < t.length; e++) i[e] = t[e];
              return i;
            }
            return Array.from(t);
          }
          function s(t, e) {
            if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
          }
          var n = (function () {
              function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                  var a = e[i];
                  (a.enumerable = a.enumerable || !1), (a.configurable = !0), 'value' in a && (a.writable = !0), Object.defineProperty(t, a.key, a);
                }
              }
              return function (e, i, a) {
                return i && t(e.prototype, i), a && t(e, a), e;
              };
            })(),
            r = (function () {
              function t(e) {
                s(this, t), (this.w = e.w), (this.ttCtx = e), (this.ctx = e.ctx);
              }
              return (
                n(t, [
                  {
                    key: 'getNearestValues',
                    value: function (t) {
                      var e = t.hoverArea,
                        i = t.elGrid,
                        a = t.clientX,
                        s = t.clientY,
                        n = t.hasBars,
                        r = this.w,
                        o = r.globals.gridWidth,
                        l = o / (r.globals.dataPoints - 1),
                        h = i.getBoundingClientRect();
                      ((n && r.globals.comboCharts) || n) && (l = o / r.globals.dataPoints);
                      var c = a - h.left,
                        d = s - h.top;
                      c < 0 || d < 0 || c > r.globals.gridWidth || d > r.globals.gridHeight ? (e.classList.remove('hovering-zoom'), e.classList.remove('hovering-pan')) : r.globals.zoomEnabled ? (e.classList.remove('hovering-pan'), e.classList.add('hovering-zoom')) : r.globals.panEnabled && (e.classList.remove('hovering-zoom'), e.classList.add('hovering-pan'));
                      var u = Math.round(c / l);
                      n && ((u = Math.ceil(c / l)), (u -= 1));
                      for (var f = null, g = null, p = [], x = [], b = 0; b < r.globals.seriesXvalues.length; b++) p.push([r.globals.seriesXvalues[b][0] - 1e-6].concat(r.globals.seriesXvalues[b]));
                      return (
                        (p = p.map(function (t) {
                          return t.filter(function (t) {
                            return t;
                          });
                        })),
                        (x = r.globals.seriesYvalues.map(function (t) {
                          return t.filter(function (t) {
                            return t;
                          });
                        })),
                        r.globals.isXNumeric && ((f = (g = this.closestInMultiArray(c, d, p, x)).index), (u = g.j), null !== f && ((p = r.globals.seriesXvalues[f]), (u = (g = this.closestInArray(c, p)).index))),
                        (!u || u < 1) && (u = 0),
                        { capturedSeries: f, j: u, hoverX: c, hoverY: d }
                      );
                    },
                  },
                  {
                    key: 'closestInMultiArray',
                    value: function (t, e, i, a) {
                      var s = 0,
                        n = null,
                        r = -1;
                      this.w.globals.series.length > 1 ? (s = this.getFirstActiveXArray(i)) : (n = 0);
                      var o = a[s][0],
                        l = i[s][0],
                        h = Math.abs(t - l),
                        c = Math.abs(e - o),
                        d = c + h;
                      return (
                        a.map(function (s, o) {
                          s.map(function (s, l) {
                            var u = Math.abs(e - a[o][l]),
                              f = Math.abs(t - i[o][l]),
                              g = f + u;
                            g < d && ((d = g), (h = f), (c = u), (n = o), (r = l));
                          });
                        }),
                        { index: n, j: r }
                      );
                    },
                  },
                  {
                    key: 'getFirstActiveXArray',
                    value: function (t) {
                      for (
                        var e = 0,
                          i = t.map(function (t, e) {
                            return t.length > 0 ? e : -1;
                          }),
                          a = 0;
                        a < i.length;
                        a++
                      )
                        if (-1 !== i[a]) {
                          e = i[a];
                          break;
                        }
                      return e;
                    },
                  },
                  {
                    key: 'closestInArray',
                    value: function (t, e) {
                      for (var i = e[0], a = null, s = Math.abs(t - i), n = 0; n < e.length; n++) {
                        var r = Math.abs(t - e[n]);
                        r < s && ((s = r), (i = e[n]), (a = n));
                      }
                      return { index: a };
                    },
                  },
                  {
                    key: 'isXoverlap',
                    value: function (t) {
                      var e = [],
                        i = this.w.globals.seriesX.filter(function (t) {
                          return void 0 !== t[0];
                        });
                      if (i.length > 0) for (var a = 0; a < i.length - 1; a++) void 0 !== i[a][t] && void 0 !== i[a + 1][t] && i[a][t] !== i[a + 1][t] && e.push('unEqual');
                      return 0 === e.length;
                    },
                  },
                  {
                    key: 'isinitialSeriesSameLen',
                    value: function () {
                      for (var t = !0, e = this.w.globals.initialSeries, i = 0; i < e.length - 1; i++)
                        if (e[i].data.length !== e[i + 1].data.length) {
                          t = !1;
                          break;
                        }
                      return t;
                    },
                  },
                  {
                    key: 'getBarsHeight',
                    value: function (t) {
                      return [].concat(a(t)).reduce(function (t, e) {
                        return t + e.getBBox().height;
                      }, 0);
                    },
                  },
                  {
                    key: 'toggleAllTooltipSeriesGroups',
                    value: function (t) {
                      var e = this.w,
                        i = this.ttCtx;
                      0 === i.allTooltipSeriesGroups.length && (i.allTooltipSeriesGroups = e.globals.dom.baseEl.querySelectorAll('.apexcharts-tooltip-series-group'));
                      for (var a = i.allTooltipSeriesGroups, s = 0; s < a.length; s++) 'enable' === t ? (a[s].classList.add('active'), (a[s].style.display = e.config.tooltip.items.display)) : (a[s].classList.remove('active'), (a[s].style.display = 'none'));
                    },
                  },
                ]),
                t
              );
            })();
          t.exports = r;
        },
        function (t, e) {
          t.exports = {
            name: 'en',
            options: {
              months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
              shortMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
              days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
              shortDays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
              toolbar: {
                exportToSVG: 'Download SVG',
                exportToPNG: 'Download PNG',
                menu: 'Menu',
                selection: 'Selection',
                selectionZoom: 'Selection Zoom',
                zoomIn: 'Zoom In',
                zoomOut: 'Zoom Out',
                pan: 'Panning',
                reset: 'Reset Zoom',
              },
            },
          };
        },
        function (t, e, i) {
          function a(t) {
            return t && t.__esModule ? t : { default: t };
          }
          function s(t, e) {
            if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
          }
          var n =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t;
                  },
            r =
              Object.assign ||
              function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var i = arguments[e];
                  for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && (t[a] = i[a]);
                }
                return t;
              },
            o = (function () {
              function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                  var a = e[i];
                  (a.enumerable = a.enumerable || !1), (a.configurable = !0), 'value' in a && (a.writable = !0), Object.defineProperty(t, a.key, a);
                }
              }
              return function (e, i, a) {
                return i && t(e.prototype, i), a && t(e, a), e;
              };
            })(),
            l = a(i(34)),
            h = a(i(5)),
            c = a(i(35)),
            d = a(i(14)),
            u = a(i(36)),
            f = a(i(3)),
            g = a(i(19)),
            p = a(i(11)),
            x = a(i(7)),
            b = a(i(20)),
            v = a(i(43)),
            m = a(i(37)),
            y = a(i(8)),
            w = a(i(21)),
            k = a(i(38)),
            S = a(i(6)),
            A = a(i(40)),
            C = a(i(50)),
            M = a(i(1)),
            P = a(i(42)),
            L = a(i(41)),
            E = a(i(23)),
            T = a(i(15));
          i(57), i(53), i(54), i(52), i(56), i(55), i(59);
          var z = i(26);
          window.Apex = {};
          var X = (function () {
            function t(e, i) {
              s(this, t), (this.opts = i), (this.ctx = this), (this.w = new c.default(i).init()), (this.el = e), (this.w.globals.cuid = (Math.random() + 1).toString(36).substring(4)), (this.w.globals.chartID = this.w.config.chart.id ? this.w.config.chart.id : this.w.globals.cuid), this.initModules(), (this.create = M.default.bind(this.create, this)), (this.windowResizeHandler = this.windowResize.bind(this));
            }
            return (
              o(
                t,
                [
                  {
                    key: 'render',
                    value: function () {
                      var t = this;
                      return new Promise(function (e, i) {
                        if (null !== t.el) {
                          void 0 === Apex._chartInstances && (Apex._chartInstances = []), t.w.config.chart.id && Apex._chartInstances.push({ id: t.w.globals.chartID, group: t.w.config.chart.group, chart: t }), t.setLocale(t.w.config.chart.defaultLocale);
                          var a = t.w.config.chart.events.beforeMount;
                          'function' == typeof a && a(t, t.w), t.fireEvent('beforeMount', [t, t.w]), window.addEventListener('resize', t.windowResizeHandler);
                          var s = t.create(t.w.config.series);
                          if (!s) return e(t);
                          t.mount(s)
                            .then(function () {
                              e(s), 'function' == typeof t.w.config.chart.events.mounted && t.w.config.chart.events.mounted(t, t.w), t.fireEvent('mounted', [t, t.w]);
                            })
                            .catch(function (t) {
                              i(t);
                            });
                        } else i(new Error('Element not found'));
                      });
                    },
                  },
                  {
                    key: 'initModules',
                    value: function () {
                      (this.animations = new h.default(this.ctx)), (this.annotations = new l.default(this.ctx)), (this.core = new u.default(this.el, this)), (this.grid = new v.default(this)), (this.coreUtils = new f.default(this)), (this.config = new d.default({})), (this.crosshairs = new g.default(this.ctx)), (this.options = new T.default()), (this.responsive = new k.default(this.ctx)), (this.series = new S.default(this.ctx)), (this.theme = new A.default(this.ctx)), (this.formatters = new x.default(this.ctx)), (this.titleSubtitle = new L.default(this.ctx)), (this.legend = new m.default(this.ctx)), (this.toolbar = new E.default(this.ctx)), (this.dimensions = new p.default(this.ctx)), (this.zoomPanSelection = new P.default(this.ctx)), (this.w.globals.tooltip = new C.default(this.ctx));
                    },
                  },
                  {
                    key: 'addEventListener',
                    value: function (t, e) {
                      var i = this.w;
                      i.globals.events.hasOwnProperty(t) ? i.globals.events[t].push(e) : (i.globals.events[t] = [e]);
                    },
                  },
                  {
                    key: 'removeEventListener',
                    value: function (t, e) {
                      var i = this.w;
                      if (i.globals.events.hasOwnProperty(t)) {
                        var a = i.globals.events[t].indexOf(e);
                        -1 !== a && i.globals.events[t].splice(a, 1);
                      }
                    },
                  },
                  {
                    key: 'fireEvent',
                    value: function (t, e) {
                      var i = this.w;
                      if (i.globals.events.hasOwnProperty(t)) {
                        (e && e.length) || (e = []);
                        for (var a = i.globals.events[t], s = a.length, n = 0; n < s; n++) a[n].apply(null, e);
                      }
                    },
                  },
                  {
                    key: 'create',
                    value: function (t) {
                      var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        i = this.w;
                      this.initModules();
                      var a = this.w.globals;
                      if (((a.noData = !1), this.responsive.checkResponsiveConfig(e), null === this.el)) return null;
                      this.core.setupElements(), this.coreUtils.checkComboSeries(), (0 === t.length || (1 === t.length && t[0].data && 0 === t[0].data.length)) && this.series.handleNoData(), this.setupEventHandlers(), this.core.parseData(t), this.theme.init(), new y.default(this).setGlobalMarkerSize(), this.formatters.setLabelFormatters(), this.titleSubtitle.draw(), this.legend.init(), this.series.hasAllSeriesEqualX(), a.axisCharts && (this.core.coreCalculations(), 'category' !== i.config.xaxis.type && this.formatters.setLabelFormatters()), this.formatters.heatmapLabelFormatters(), this.dimensions.plotCoords();
                      var s = this.core.xySettings();
                      this.grid.createGridMask();
                      var n = this.core.plotChartType(t, s);
                      this.core.shiftGraphPosition();
                      var r = {
                        plot: {
                          left: i.globals.translateX,
                          top: i.globals.translateY,
                          width: i.globals.gridWidth,
                          height: i.globals.gridHeight,
                        },
                      };
                      return { elGraph: n, xyRatios: s, elInner: i.globals.dom.elGraphical, dimensions: r };
                    },
                  },
                  {
                    key: 'mount',
                    value: function () {
                      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                        e = this,
                        i = e.w;
                      return new Promise(function (a, s) {
                        if (null === e.el) return s(new Error('Not enough data to display or target element not found'));
                        if (((null === t || i.globals.allSeriesCollapsed) && e.series.handleNoData(), e.core.drawAxis(i.config.chart.type, t.xyRatios), (e.grid = new v.default(e)), 'back' === i.config.grid.position && e.grid.drawGrid(), 'back' === i.config.annotations.position && e.annotations.drawAnnotations(), t.elGraph instanceof Array)) for (var n = 0; n < t.elGraph.length; n++) i.globals.dom.elGraphical.add(t.elGraph[n]);
                        else i.globals.dom.elGraphical.add(t.elGraph);
                        if (('front' === i.config.grid.position && e.grid.drawGrid(), 'front' === i.config.xaxis.crosshairs.position && e.crosshairs.drawXCrosshairs(), 'front' === i.config.yaxis[0].crosshairs.position && e.crosshairs.drawYCrosshairs(), 'front' === i.config.annotations.position && e.annotations.drawAnnotations(), !i.globals.noData)) {
                          if ((i.config.tooltip.enabled && !i.globals.noData && e.w.globals.tooltip.drawTooltip(t.xyRatios), i.globals.axisCharts && i.globals.isXNumeric)) (i.config.chart.zoom.enabled || (i.config.chart.selection && i.config.chart.selection.enabled) || (i.config.chart.pan && i.config.chart.pan.enabled)) && e.zoomPanSelection.init({ xyRatios: t.xyRatios });
                          else {
                            var r = i.config.chart.toolbar.tools;
                            (r.zoom = !1), (r.zoomin = !1), (r.zoomout = !1), (r.selection = !1), (r.pan = !1), (r.reset = !1);
                          }
                          i.config.chart.toolbar.show && !i.globals.allSeriesCollapsed && e.toolbar.createToolbar();
                        }
                        if (i.globals.memory.methodsToExec.length > 0) {
                          var o = !0,
                            l = !1,
                            h = void 0;
                          try {
                            for (var c, d = i.globals.memory.methodsToExec[Symbol.iterator](); !(o = (c = d.next()).done); o = !0) {
                              var u = c.value;
                              u.method(u.params, !1, u.context);
                            }
                          } catch (t) {
                            (l = !0), (h = t);
                          } finally {
                            try {
                              !o && d.return && d.return();
                            } finally {
                              if (l) throw h;
                            }
                          }
                        }
                        a(e);
                      });
                    },
                  },
                  {
                    key: 'clearPreviousPaths',
                    value: function () {
                      var t = this.w;
                      (t.globals.previousPaths = []), (t.globals.allSeriesCollapsed = !1), (t.globals.collapsedSeries = []), (t.globals.collapsedSeriesIndices = []);
                    },
                  },
                  {
                    key: 'updateOptions',
                    value: function (t) {
                      var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                        a = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                        s = this.w;
                      return (
                        t.series &&
                          (t.series[0].data &&
                            (t.series = t.series.map(function (t, e) {
                              return r({}, s.config.series[e], { name: t.name ? t.name : s.config.series[e].name, data: t.data });
                            })),
                          this.revertDefaultAxisMinMax()),
                        t.xaxis && (t.xaxis.min || t.xaxis.max) && this.forceXAxisUpdate(t),
                        s.globals.collapsedSeriesIndices.length > 0 && this.clearPreviousPaths(),
                        this._updateOptions(t, e, i, a)
                      );
                    },
                  },
                  {
                    key: '_updateOptions',
                    value: function (t) {
                      var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                        a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                      this.getSyncedCharts().forEach(function (s) {
                        var r = s.w;
                        return (r.globals.shouldAnimate = i), e || ((r.globals.resized = !0), (r.globals.dataChanged = !0), i && s.series.getPreviousPaths()), t && 'object' === (void 0 === t ? 'undefined' : n(t)) && ((s.config = new d.default(t)), (t = f.default.extendArrayProps(s.config, t)), (r.config = M.default.extend(r.config, t)), a && ((r.globals.lastXAxis = []), (r.globals.lastYAxis = []), (r.globals.initialConfig = M.default.extend({}, r.config)), (r.globals.initialSeries = JSON.parse(JSON.stringify(r.config.series))))), s.update(t);
                      });
                    },
                  },
                  {
                    key: 'updateSeries',
                    value: function () {
                      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                        e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                      return this.revertDefaultAxisMinMax(), this._updateSeries(t, e, i);
                    },
                  },
                  {
                    key: '_updateSeries',
                    value: function (t, e) {
                      var i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        a = this.w;
                      (this.w.globals.shouldAnimate = e), (a.globals.dataChanged = !0), a.globals.allSeriesCollapsed && (a.globals.allSeriesCollapsed = !1), e && this.series.getPreviousPaths();
                      var s = void 0;
                      return (
                        t[0].data
                          ? ((s = t.map(function (t, e) {
                              return r({}, a.config.series[e], { name: t.name ? t.name : a.config.series[e].name, data: t.data });
                            })),
                            (a.config.series = s))
                          : (a.config.series = t.slice()),
                        i && ((a.globals.initialConfig.series = JSON.parse(JSON.stringify(a.config.series))), (a.globals.initialSeries = JSON.parse(JSON.stringify(a.config.series)))),
                        this.update()
                      );
                    },
                  },
                  {
                    key: 'getSyncedCharts',
                    value: function () {
                      var t = this.getGroupedCharts(),
                        e = [this];
                      return (
                        t.length &&
                          ((e = []),
                          t.forEach(function (t) {
                            e.push(t);
                          })),
                        e
                      );
                    },
                  },
                  {
                    key: 'getGroupedCharts',
                    value: function () {
                      var t = this;
                      return Apex._chartInstances
                        .filter(function (t) {
                          if (t.group) return !0;
                        })
                        .map(function (e) {
                          return t.w.config.chart.group === e.group ? e.chart : null;
                        });
                    },
                  },
                  {
                    key: 'appendData',
                    value: function (t) {
                      var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        i = this;
                      (i.w.globals.dataChanged = !0), i.series.getPreviousPaths();
                      for (var a = i.w.config.series.slice(), s = 0; s < a.length; s++) if (void 0 !== t[s]) for (var n = 0; n < t[s].data.length; n++) a[s].data.push(t[s].data[n]);
                      return (i.w.config.series = a), e && (i.w.globals.initialSeries = JSON.parse(JSON.stringify(i.w.config.series))), this.update();
                    },
                  },
                  {
                    key: 'update',
                    value: function (t) {
                      var e = this,
                        i = this;
                      return new Promise(function (a, s) {
                        i.clear();
                        var n = i.create(i.w.config.series, t);
                        if (!n) return a(i);
                        i.mount(n)
                          .then(function () {
                            'function' == typeof i.w.config.chart.events.updated && i.w.config.chart.events.updated(i, i.w), i.fireEvent('updated', [e, e.w]), (i.w.globals.isDirty = !0), a(i);
                          })
                          .catch(function (t) {
                            s(t);
                          });
                      });
                    },
                  },
                  {
                    key: 'forceXAxisUpdate',
                    value: function (t) {
                      var e = this.w;
                      void 0 !== t.xaxis.min && ((e.config.xaxis.min = t.xaxis.min), (e.globals.lastXAxis.min = t.xaxis.min)), void 0 !== t.xaxis.max && ((e.config.xaxis.max = t.xaxis.max), (e.globals.lastXAxis.max = t.xaxis.max));
                    },
                  },
                  {
                    key: 'revertDefaultAxisMinMax',
                    value: function () {
                      var t = this.w;
                      (t.config.xaxis.min = t.globals.lastXAxis.min),
                        (t.config.xaxis.max = t.globals.lastXAxis.max),
                        t.config.yaxis.map(function (e, i) {
                          t.globals.zoomed && void 0 !== t.globals.lastYAxis[i] && ((e.min = t.globals.lastYAxis[i].min), (e.max = t.globals.lastYAxis[i].max));
                        });
                    },
                  },
                  {
                    key: 'clear',
                    value: function () {
                      this.zoomPanSelection && this.zoomPanSelection.destroy(), this.toolbar && this.toolbar.destroy(), (this.animations = null), (this.annotations = null), (this.core = null), (this.grid = null), (this.series = null), (this.responsive = null), (this.theme = null), (this.formatters = null), (this.titleSubtitle = null), (this.legend = null), (this.dimensions = null), (this.options = null), (this.crosshairs = null), (this.zoomPanSelection = null), (this.toolbar = null), (this.w.globals.tooltip = null), this.clearDomElements();
                    },
                  },
                  {
                    key: 'killSVG',
                    value: function (t) {
                      return new Promise(function (e, i) {
                        t.each(function (t, e) {
                          this.removeClass('*'), this.off(), this.stop();
                        }, !0),
                          t.ungroup(),
                          t.clear(),
                          e('done');
                      });
                    },
                  },
                  {
                    key: 'clearDomElements',
                    value: function () {
                      var t = this.w.globals.dom;
                      if (null !== this.el) for (; this.el.firstChild; ) this.el.removeChild(this.el.firstChild);
                      this.killSVG(t.Paper), t.Paper.remove(), (t.elWrap = null), (t.elGraphical = null), (t.elLegendWrap = null), (t.baseEl = null), (t.elGridRect = null), (t.elGridRectMask = null), (t.elGridRectMarkerMask = null), (t.elDefs = null);
                    },
                  },
                  {
                    key: 'destroy',
                    value: function () {
                      this.clear(), window.removeEventListener('resize', this.windowResizeHandler);
                    },
                  },
                  {
                    key: 'toggleSeries',
                    value: function (t) {
                      var e = this.series.getSeriesByName(t),
                        i = parseInt(e.getAttribute('data:realIndex')),
                        a = e.classList.contains('apexcharts-series-collapsed');
                      this.legend.toggleDataSeries(i, a);
                    },
                  },
                  {
                    key: 'resetToggleSeries',
                    value: function () {
                      this.legend.resetToggleDataSeries();
                    },
                  },
                  {
                    key: 'setupEventHandlers',
                    value: function () {
                      var t = this.w,
                        e = this,
                        i = t.globals.dom.baseEl.querySelector(t.globals.chartClass),
                        a = ['mousedown', 'mousemove', 'touchstart', 'touchmove', 'mouseup', 'touchend'],
                        s = !0,
                        n = !1,
                        r = void 0;
                      try {
                        for (var o, l = a[Symbol.iterator](); !(s = (o = l.next()).done); s = !0) {
                          var h = o.value;
                          i.addEventListener(
                            h,
                            function (i) {
                              ('mousedown' === i.type && 1 === i.which) || ((('mouseup' === i.type && 1 === i.which) || 'touchend' === i.type) && ('function' == typeof t.config.chart.events.click && t.config.chart.events.click(i, e, t), e.fireEvent('click', [i, e, t])));
                            },
                            { capture: !1, passive: !0 }
                          );
                        }
                      } catch (t) {
                        (n = !0), (r = t);
                      } finally {
                        try {
                          !s && l.return && l.return();
                        } finally {
                          if (n) throw r;
                        }
                      }
                      this.core.setupBrushHandler();
                    },
                  },
                  {
                    key: 'addXaxisAnnotation',
                    value: function (t) {
                      var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
                        a = this;
                      i && (a = i), a.annotations.addXaxisAnnotationExternal(t, e, a);
                    },
                  },
                  {
                    key: 'addYaxisAnnotation',
                    value: function (t) {
                      var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
                        a = this;
                      i && (a = i), a.annotations.addYaxisAnnotationExternal(t, e, a);
                    },
                  },
                  {
                    key: 'addPointAnnotation',
                    value: function (t) {
                      var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
                        a = this;
                      i && (a = i), a.annotations.addPointAnnotationExternal(t, e, a);
                    },
                  },
                  {
                    key: 'clearAnnotations',
                    value: function () {
                      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0,
                        e = this;
                      t && (e = t), e.annotations.clearAnnotations(e);
                    },
                  },
                  {
                    key: 'addText',
                    value: function (t) {
                      var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
                        a = this;
                      i && (a = i), a.annotations.addText(t, e, a);
                    },
                  },
                  {
                    key: 'getChartArea',
                    value: function () {
                      return this.w.globals.dom.baseEl.querySelector('.apexcharts-inner');
                    },
                  },
                  {
                    key: 'getSeriesTotalXRange',
                    value: function (t, e) {
                      return this.coreUtils.getSeriesTotalsXRange(t, e);
                    },
                  },
                  {
                    key: 'getHighestValueInSeries',
                    value: function () {
                      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                      return new w.default(this.ctx).getMinYMaxY(t).highestY;
                    },
                  },
                  {
                    key: 'getLowestValueInSeries',
                    value: function () {
                      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                      return new w.default(this.ctx).getMinYMaxY(t).lowestY;
                    },
                  },
                  {
                    key: 'getSeriesTotal',
                    value: function () {
                      return this.w.globals.seriesTotals;
                    },
                  },
                  {
                    key: 'setLocale',
                    value: function (t) {
                      this.setCurrentLocaleValues(t);
                    },
                  },
                  {
                    key: 'setCurrentLocaleValues',
                    value: function (t) {
                      var e = this.w.config.chart.locales;
                      window.Apex.chart && window.Apex.chart.locales && window.Apex.chart.locales.length > 0 && (e = this.w.config.chart.locales.concat(window.Apex.chart.locales));
                      var i = e.find(function (e) {
                        return e.name === t;
                      });
                      if (!i) throw new Error('Wrong locale name provided. Please make sure you set the correct locale name in options');
                      var a = M.default.extend(z, i);
                      this.w.globals.locale = a.options;
                    },
                  },
                  {
                    key: 'svgUrl',
                    value: function () {
                      return new b.default(this.ctx).svgUrl();
                    },
                  },
                  {
                    key: 'paper',
                    value: function () {
                      return this.w.globals.dom.Paper;
                    },
                  },
                  {
                    key: 'windowResize',
                    value: function () {
                      var t = this;
                      clearTimeout(this.w.globals.resizeTimer),
                        (this.w.globals.resizeTimer = window.setTimeout(function () {
                          (t.w.globals.resized = !0), (t.w.globals.dataChanged = !1), t.update();
                        }, 150));
                    },
                  },
                ],
                [
                  {
                    key: 'initOnLoad',
                    value: function () {
                      for (var e = document.querySelectorAll('[data-apexcharts]'), i = 0; i < e.length; i++) new t(e[i], JSON.parse(e[i].getAttribute('data-options'))).render();
                    },
                  },
                  {
                    key: 'exec',
                    value: function (t, e) {
                      var i = this.getChartByID(t);
                      if (i) {
                        for (var a = arguments.length, s = Array(a > 2 ? a - 2 : 0), n = 2; n < a; n++) s[n - 2] = arguments[n];
                        switch (e) {
                          case 'updateOptions':
                            return i.updateOptions.apply(i, s);
                          case 'updateSeries':
                            return i.updateSeries.apply(i, s);
                          case 'appendData':
                            return i.appendData.apply(i, s);
                          case 'addXaxisAnnotation':
                            return i.addXaxisAnnotation.apply(i, s);
                          case 'addYaxisAnnotation':
                            return i.addYaxisAnnotation.apply(i, s);
                          case 'addPointAnnotation':
                            return i.addPointAnnotation.apply(i, s);
                          case 'clearAnnotations':
                            return i.clearAnnotations.apply(i, s);
                          case 'destroy':
                            return i.destroy();
                        }
                      }
                    },
                  },
                  {
                    key: 'merge',
                    value: function (t, e) {
                      return M.default.extend(t, e);
                    },
                  },
                  {
                    key: 'getChartByID',
                    value: function (t) {
                      return Apex._chartInstances.find(function (e) {
                        return e.id === t;
                      }).chart;
                    },
                  },
                ]
              ),
              t
            );
          })();
          t.exports = X;
        },
        function (t, e, i) {
          function a(t, e) {
            var i = t[1] || '',
              a = t[3];
            if (!a) return i;
            if (e && 'function' == typeof btoa) {
              var n = s(a),
                r = a.sources.map(function (t) {
                  return '/*# sourceURL=' + a.sourceRoot + t + ' */';
                });
              return [i].concat(r).concat([n]).join('\n');
            }
            return [i].join('\n');
          }
          function s(t) {
            return '/*# ' + ('sourceMappingURL=data:application/json;charset=utf-8;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(t))))) + ' */';
          }
          t.exports = function (t) {
            var e = [];
            return (
              (e.toString = function () {
                return this.map(function (e) {
                  var i = a(e, t);
                  return e[2] ? '@media ' + e[2] + '{' + i + '}' : i;
                }).join('');
              }),
              (e.i = function (t, i) {
                'string' == typeof t && (t = [[null, t, '']]);
                for (var a = {}, s = 0; s < this.length; s++) {
                  var n = this[s][0];
                  'number' == typeof n && (a[n] = !0);
                }
                for (s = 0; s < t.length; s++) {
                  var r = t[s];
                  ('number' == typeof r[0] && a[r[0]]) || (i && !r[2] ? (r[2] = i) : i && (r[2] = '(' + r[2] + ') and (' + i + ')'), e.push(r));
                }
              }),
              e
            );
          };
        },
        function (t, e, i) {
          function a(t) {
            return t && t.__esModule ? t : { default: t };
          }
          function s(t, e) {
            if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
          }
          function n(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || ('object' != typeof e && 'function' != typeof e) ? t : e;
          }
          function r(t, e) {
            if ('function' != typeof e && null !== e) throw new TypeError('Super expression must either be null or a function, not ' + typeof e);
            (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } })), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
          }
          Object.defineProperty(e, '__esModule', { value: !0 });
          var o = (function () {
              function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                  var a = e[i];
                  (a.enumerable = a.enumerable || !1), (a.configurable = !0), 'value' in a && (a.writable = !0), Object.defineProperty(t, a.key, a);
                }
              }
              return function (e, i, a) {
                return i && t(e.prototype, i), a && t(e, a), e;
              };
            })(),
            l = a(i(3)),
            h = a(i(9)),
            c = a(i(4)),
            d = a(i(0)),
            u = (function (t) {
              function e() {
                return s(this, e), n(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments));
              }
              return (
                r(e, t),
                o(e, [
                  {
                    key: 'draw',
                    value: function (t, e) {
                      var i = this,
                        a = this.w;
                      (this.graphics = new d.default(this.ctx)), (this.fill = new c.default(this.ctx)), (this.bar = new h.default(this.ctx, this.xyRatios));
                      var s = new l.default(this.ctx, a);
                      (this.series = s.getLogSeries(t)), (t = this.series), (this.yRatio = s.getLogYRatios(this.yRatio)), (this.series = t), '100%' === a.config.chart.stackType && ((this.series = a.globals.seriesPercent.slice()), (t = this.series)), (this.totalItems = 0), (this.prevY = []), (this.prevX = []), (this.prevYF = []), (this.prevXF = []), (this.prevYVal = []), (this.prevXVal = []), (this.xArrj = []), (this.xArrjF = []), (this.xArrjVal = []), (this.yArrj = []), (this.yArrjF = []), (this.yArrjVal = []);
                      for (var n = 0; n < t.length; n++) t[n].length > 0 && (this.totalItems += t[n].length);
                      (this.zeroSerieses = []), (this.endingShapeOnSeriesNumber = t.length - 1), this.checkZeroSeries({ series: t });
                      var r = this.graphics.group({ class: 'apexcharts-bar-series apexcharts-plot-series' });
                      r.attr('clip-path', 'url(#gridRectMask' + a.globals.cuid + ')');
                      for (var o = 0, u = 0, f = 0, g = 0; f < t.length; f++, g++)
                        !(function (s, n) {
                          var l = void 0,
                            h = void 0,
                            c = void 0,
                            d = void 0,
                            f = void 0,
                            g = void 0,
                            p = [],
                            x = [],
                            b = a.globals.comboCharts ? e[s] : s;
                          i.yRatio.length > 1 && (i.yaxisIndex = b);
                          var v = i.graphics.group({
                              class: 'apexcharts-series ' + a.globals.seriesNames[b].toString().replace(/ /g, '-'),
                              rel: s + 1,
                              'data:realIndex': b,
                            }),
                            m = i.graphics.group({ class: 'apexcharts-datalabels' }),
                            y = 0,
                            w = 0,
                            k = 0,
                            S = i.initialPositions(o, u, c, d, f, g);
                          (u = S.y), (w = S.barHeight), (d = S.yDivision), (g = S.zeroW), (o = S.x), (k = S.barWidth), (c = S.xDivision), (f = S.zeroH), (i.yArrj = []), (i.yArrjF = []), (i.yArrjVal = []), (i.xArrj = []), (i.xArrjF = []), (i.xArrjVal = []);
                          for (var A = 0; A < a.globals.dataPoints; A++)
                            !(function (e) {
                              a.config.stroke.show && (y = i.isNullValue ? 0 : Array.isArray(i.strokeWidth) ? i.strokeWidth[b] : i.strokeWidth);
                              var r = null;
                              (r = i.isHorizontal
                                ? i.drawBarPaths({
                                    indexes: { i: s, j: e, realIndex: b, bc: n },
                                    barHeight: w,
                                    strokeWidth: y,
                                    pathTo: l,
                                    pathFrom: h,
                                    zeroW: g,
                                    x: o,
                                    y: u,
                                    yDivision: d,
                                    elSeries: v,
                                  })
                                : i.drawColumnPaths({
                                    indexes: { i: s, j: e, realIndex: b, bc: n },
                                    x: o,
                                    y: u,
                                    xDivision: c,
                                    pathTo: l,
                                    pathFrom: h,
                                    barWidth: k,
                                    zeroH: f,
                                    strokeWidth: y,
                                    elSeries: v,
                                  })),
                                (l = r.pathTo),
                                (h = r.pathFrom),
                                (u = r.y),
                                (o = r.x),
                                p.push(o),
                                x.push(u);
                              var S = a.config.plotOptions.bar.distributed ? e : s,
                                A = a.globals.colors[b];
                              i.barOptions.colors.ranges.length > 0 &&
                                i.barOptions.colors.ranges.map(function (i, a) {
                                  t[s][e] >= i.from && t[s][e] <= i.to && (A = i.color);
                                });
                              var C = i.fill.fillPath(v, { seriesNumber: S, color: A });
                              v = i.renderSeries({
                                realIndex: b,
                                pathFill: C,
                                j: e,
                                i: s,
                                pathFrom: h,
                                pathTo: l,
                                strokeWidth: y,
                                elSeries: v,
                                x: o,
                                y: u,
                                series: t,
                                barHeight: w,
                                barWidth: k,
                                elDataLabelsWrap: m,
                                type: 'bar',
                                visibleSeries: 0,
                              });
                            })(A);
                          (a.globals.seriesXvalues[b] = p), (a.globals.seriesYvalues[b] = x), i.prevY.push(i.yArrj), i.prevYF.push(i.yArrjF), i.prevYVal.push(i.yArrjVal), i.prevX.push(i.xArrj), i.prevXF.push(i.xArrjF), i.prevXVal.push(i.xArrjVal), r.add(v);
                        })(f, g);
                      return r;
                    },
                  },
                  {
                    key: 'initialPositions',
                    value: function (t, e, i, a, s, n) {
                      var r = this.w,
                        o = void 0,
                        l = void 0;
                      return this.isHorizontal ? ((o = ((o = a = r.globals.gridHeight / r.globals.dataPoints) * parseInt(r.config.plotOptions.bar.barHeight)) / 100), (n = this.baseLineInvertedY + r.globals.padHorizontal), (e = (a - o) / 2)) : ((l = i = r.globals.gridWidth / r.globals.dataPoints), (l = r.globals.isXNumeric ? (i = r.globals.gridWidth / (this.totalItems / r.globals.series.length)) / 1.8 : (l * parseInt(r.config.plotOptions.bar.columnWidth)) / 100), (s = this.baseLineY[this.yaxisIndex] + 1), (t = r.globals.padHorizontal + (i - l) / 2)), { x: t, y: e, yDivision: a, xDivision: i, barHeight: o, barWidth: l, zeroH: s, zeroW: n };
                    },
                  },
                  {
                    key: 'drawBarPaths',
                    value: function (t) {
                      for (var e = t.indexes, i = t.barHeight, a = t.strokeWidth, s = t.pathTo, n = t.pathFrom, r = t.zeroW, o = t.x, l = t.y, h = t.yDivision, c = t.elSeries, d = this.w, u = l, f = void 0, g = e.i, p = e.j, x = e.realIndex, b = e.bc, v = 0, m = 0; m < this.prevXF.length; m++) v += this.prevXF[m][p];
                      if (g > 0) {
                        var y = r;
                        this.prevXVal[g - 1][p] < 0 ? (y = this.series[g][p] >= 0 ? this.prevX[g - 1][p] + v : this.prevX[g - 1][p]) : this.prevXVal[g - 1][p] >= 0 && (y = this.series[g][p] >= 0 ? this.prevX[g - 1][p] : this.prevX[g - 1][p] - v), (f = y);
                      } else f = r;
                      o = null === this.series[g][p] ? f : f + this.series[g][p] / this.invertedYRatio;
                      var w = { barHeight: i, strokeWidth: a, invertedYRatio: this.invertedYRatio, barYPosition: u, x: o },
                        k = this.bar.barEndingShape(d, w, this.series, g, p);
                      if ((this.series.length > 1 && g !== this.endingShapeOnSeriesNumber && (k.path = this.graphics.line(k.newX, u + i - a)), this.xArrj.push(k.newX), this.xArrjF.push(Math.abs(f - k.newX)), this.xArrjVal.push(this.series[g][p]), (s = this.graphics.move(f, u)), (n = this.graphics.move(f, u)), d.globals.previousPaths.length > 0 && (n = this.bar.getPathFrom(x, p, !1)), (s = s + this.graphics.line(k.newX, u) + k.path + this.graphics.line(f, u + i - a) + this.graphics.line(f, u)), (n = n + this.graphics.line(f, u) + this.graphics.line(f, u + i - a) + this.graphics.line(f, u + i - a) + this.graphics.line(f, u + i - a) + this.graphics.line(f, u)), d.config.plotOptions.bar.colors.backgroundBarColors.length > 0 && 0 === g)) {
                        b >= d.config.plotOptions.bar.colors.backgroundBarColors.length && (b = 0);
                        var S = d.config.plotOptions.bar.colors.backgroundBarColors[b],
                          A = this.graphics.drawRect(0, u, d.globals.gridWidth, i, 0, S, d.config.plotOptions.bar.colors.backgroundBarOpacity);
                        c.add(A), A.node.classList.add('apexcharts-backgroundBar');
                      }
                      return (l += h), { pathTo: s, pathFrom: n, x: o, y: l };
                    },
                  },
                  {
                    key: 'drawColumnPaths',
                    value: function (t) {
                      var e = t.indexes,
                        i = t.x,
                        a = t.y,
                        s = t.xDivision,
                        n = t.pathTo,
                        r = t.pathFrom,
                        o = t.barWidth,
                        l = t.zeroH,
                        h = t.strokeWidth,
                        c = t.elSeries,
                        d = this.w,
                        u = e.i,
                        f = e.j,
                        g = e.realIndex,
                        p = e.bc;
                      if (d.globals.isXNumeric) {
                        var x = d.globals.seriesX[u][f];
                        x || (x = 0), (i = (x - d.globals.minX) / this.xRatio - o / 2);
                      }
                      for (var b = i, v = void 0, m = 0, y = 0; y < this.prevYF.length; y++) m += this.prevYF[y][f];
                      if (u > 0) {
                        var w = this.prevY[u - 1][f];
                        v = this.prevYVal[u - 1][f] < 0 ? (this.series[u][f] >= 0 ? w - m : w) : this.series[u][f] >= 0 ? w : w + m;
                      } else v = d.globals.gridHeight - l;
                      a = (this.series[u][f], v - this.series[u][f] / this.yRatio[this.yaxisIndex]);
                      var k = { barWidth: o, strokeWidth: h, yRatio: this.yRatio[this.yaxisIndex], barXPosition: b, y: a },
                        S = this.bar.barEndingShape(d, k, this.series, u, f);
                      if ((this.series.length > 1 && u !== this.endingShapeOnSeriesNumber && (S.path = this.graphics.line(b + o - h, S.newY)), this.yArrj.push(S.newY), this.yArrjF.push(Math.abs(v - S.newY)), this.yArrjVal.push(this.series[u][f]), (n = this.graphics.move(b, v)), (r = this.graphics.move(b, v)), d.globals.previousPaths.length > 0 && (r = this.bar.getPathFrom(g, f, !1)), (n = n + this.graphics.line(b, S.newY) + S.path + this.graphics.line(b + o - h, v) + this.graphics.line(b, v)), (r = r + this.graphics.line(b, v) + this.graphics.line(b + o - h, v) + this.graphics.line(b + o - h, v) + this.graphics.line(b + o - h, v) + this.graphics.line(b, v)), d.config.plotOptions.bar.colors.backgroundBarColors.length > 0 && 0 === u)) {
                        p >= d.config.plotOptions.bar.colors.backgroundBarColors.length && (p = 0);
                        var A = d.config.plotOptions.bar.colors.backgroundBarColors[p],
                          C = this.graphics.drawRect(b, 0, o, d.globals.gridHeight, 0, A, d.config.plotOptions.bar.colors.backgroundBarOpacity);
                        c.add(C), C.node.classList.add('apexcharts-backgroundBar');
                      }
                      return (i += s), { pathTo: n, pathFrom: r, x: d.globals.isXNumeric ? i - s : i, y: a };
                    },
                  },
                  {
                    key: 'checkZeroSeries',
                    value: function (t) {
                      for (var e = t.series, i = this.w, a = 0; a < e.length; a++) {
                        for (var s = 0, n = 0; n < e[i.globals.maxValsInArrayIndex].length; n++) s += e[a][n];
                        0 === s && this.zeroSerieses.push(a);
                      }
                      for (var r = e.length - 1; r >= 0; r--) this.zeroSerieses.indexOf(r) > -1 && r === this.endingShapeOnSeriesNumber && (this.endingShapeOnSeriesNumber -= 1);
                    },
                  },
                ]),
                e
              );
            })(h.default);
          e.default = u;
        },
        function (t, e, i) {
          function a(t) {
            return t && t.__esModule ? t : { default: t };
          }
          function s(t, e) {
            if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
          }
          function n(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || ('object' != typeof e && 'function' != typeof e) ? t : e;
          }
          function r(t, e) {
            if ('function' != typeof e && null !== e) throw new TypeError('Super expression must either be null or a function, not ' + typeof e);
            (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } })), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
          }
          Object.defineProperty(e, '__esModule', { value: !0 });
          var o = (function () {
              function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                  var a = e[i];
                  (a.enumerable = a.enumerable || !1), (a.configurable = !0), 'value' in a && (a.writable = !0), Object.defineProperty(t, a.key, a);
                }
              }
              return function (e, i, a) {
                return i && t(e.prototype, i), a && t(e, a), e;
              };
            })(),
            l = a(i(3)),
            h = a(i(9)),
            c = a(i(4)),
            d = a(i(0)),
            u = (function (t) {
              function e() {
                return s(this, e), n(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments));
              }
              return (
                r(e, t),
                o(e, [
                  {
                    key: 'draw',
                    value: function (t, e) {
                      var i = this.w,
                        a = new d.default(this.ctx),
                        s = new c.default(this.ctx);
                      this.candlestickOptions = this.w.config.plotOptions.candlestick;
                      var n = new l.default(this.ctx, i);
                      (this.series = n.getLogSeries(t)), (t = this.series), (this.yRatio = n.getLogYRatios(this.yRatio)), this.initVariables(t);
                      var r = a.group({ class: 'apexcharts-candlestick-series apexcharts-plot-series' });
                      r.attr('clip-path', 'url(#gridRectMask' + i.globals.cuid + ')');
                      for (var o = 0, h = 0; o < t.length; o++, h++) {
                        var u = void 0,
                          f = void 0,
                          g = void 0,
                          p = void 0,
                          x = void 0,
                          b = void 0,
                          v = [],
                          m = [],
                          y = i.globals.comboCharts ? e[o] : o,
                          w = a.group({
                            class: 'apexcharts-series ' + i.globals.seriesNames[y].toString().replace(/ /g, '-'),
                            rel: o + 1,
                            'data:realIndex': y,
                          });
                        t[o].length > 0 && (this.visibleI = this.visibleI + 1);
                        var k = 0,
                          S = 0,
                          A = 0;
                        this.yRatio.length > 1 && (this.yaxisIndex = y);
                        var C = this.initialPositions();
                        (p = C.y), (S = C.barHeight), (g = C.x), (A = C.barWidth), (x = C.xDivision), (b = C.zeroH), m.push(g + A / 2);
                        for (var M = a.group({ class: 'apexcharts-datalabels' }), P = 0, L = i.globals.dataPoints; P < i.globals.dataPoints; P++, L--) {
                          void 0 === this.series[o][P] || null === t[o][P] ? (this.isNullValue = !0) : (this.isNullValue = !1), i.config.stroke.show && (k = this.isNullValue ? 0 : Array.isArray(this.strokeWidth) ? this.strokeWidth[y] : this.strokeWidth);
                          var E = void 0,
                            T = this.drawCandleStickPaths({
                              indexes: { i: o, j: P, realIndex: y, bc: h },
                              x: g,
                              y: p,
                              xDivision: x,
                              pathTo: u,
                              pathFrom: f,
                              barWidth: A,
                              zeroH: b,
                              strokeWidth: k,
                              elSeries: w,
                            });
                          (u = T.pathTo), (f = T.pathFrom), (p = T.y), (g = T.x), (E = T.color), P > 0 && m.push(g + A / 2), v.push(p);
                          var z = s.fillPath(w, { seriesNumber: y, color: E }),
                            X = this.candlestickOptions.wick.useFillColor ? E : void 0;
                          w = this.renderSeries({
                            realIndex: y,
                            pathFill: z,
                            lineFill: X,
                            j: P,
                            i: o,
                            pathFrom: f,
                            pathTo: u,
                            strokeWidth: k,
                            elSeries: w,
                            x: g,
                            y: p,
                            series: t,
                            barHeight: S,
                            barWidth: A,
                            elDataLabelsWrap: M,
                            visibleSeries: this.visibleI,
                            type: 'candlestick',
                          });
                        }
                        (i.globals.seriesXvalues[y] = m), (i.globals.seriesYvalues[y] = v), r.add(w);
                      }
                      return r;
                    },
                  },
                  {
                    key: 'drawCandleStickPaths',
                    value: function (t) {
                      var e = t.indexes,
                        i = t.x,
                        a = (t.y, t.xDivision),
                        s = t.pathTo,
                        n = t.pathFrom,
                        r = t.barWidth,
                        o = t.zeroH,
                        l = t.strokeWidth,
                        h = this.w,
                        c = new d.default(this.ctx),
                        u = e.i,
                        f = e.j,
                        g = !0,
                        p = h.config.plotOptions.candlestick.colors.upward,
                        x = h.config.plotOptions.candlestick.colors.downward,
                        b = this.yRatio[this.yaxisIndex],
                        v = e.realIndex,
                        m = this.getOHLCValue(v, f),
                        y = o,
                        w = o;
                      m.o > m.c && (g = !1);
                      var k = Math.min(m.o, m.c),
                        S = Math.max(m.o, m.c);
                      h.globals.isXNumeric && (i = (h.globals.seriesX[u][f] - h.globals.minX) / this.xRatio - r / 2);
                      var A = i + r * this.visibleI;
                      return (s = c.move(A, o)), (n = c.move(A, o)), h.globals.previousPaths.length > 0 && (n = this.getPathFrom(v, f, !0)), void 0 === this.series[u][f] || null === this.series[u][f] ? (k = o) : ((k = o - k / b), (S = o - S / b), (y = o - m.h / b), (w = o - m.l / b)), (s = c.move(A, S) + c.line(A + r / 2, S) + c.line(A + r / 2, y) + c.line(A + r / 2, S) + c.line(A + r, S) + c.line(A + r, k) + c.line(A + r / 2, k) + c.line(A + r / 2, w) + c.line(A + r / 2, k) + c.line(A, k) + c.line(A, S - l / 2)), h.globals.isXNumeric || (i += a), { pathTo: s, pathFrom: n, x: i, y: S, barXPosition: A, color: g ? p : x };
                    },
                  },
                  {
                    key: 'getOHLCValue',
                    value: function (t, e) {
                      var i = this.w;
                      return {
                        o: i.globals.seriesCandleO[t][e],
                        h: i.globals.seriesCandleH[t][e],
                        l: i.globals.seriesCandleL[t][e],
                        c: i.globals.seriesCandleC[t][e],
                      };
                    },
                  },
                ]),
                e
              );
            })(h.default);
          e.default = u;
        },
        function (t, e, i) {
          function a(t) {
            return t && t.__esModule ? t : { default: t };
          }
          function s(t) {
            if (Array.isArray(t)) {
              for (var e = 0, i = Array(t.length); e < t.length; e++) i[e] = t[e];
              return i;
            }
            return Array.from(t);
          }
          function n(t, e) {
            if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
          }
          var r = (function () {
              function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                  var a = e[i];
                  (a.enumerable = a.enumerable || !1), (a.configurable = !0), 'value' in a && (a.writable = !0), Object.defineProperty(t, a.key, a);
                }
              }
              return function (e, i, a) {
                return i && t(e.prototype, i), a && t(e, a), e;
              };
            })(),
            o = a(i(10)),
            l = a(i(5)),
            h = a(i(0)),
            c = a(i(1)),
            d = a(i(2)),
            u = (function () {
              function t(e, i) {
                n(this, t), (this.ctx = e), (this.w = e.w), (this.xRatio = i.xRatio), (this.yRatio = i.yRatio), (this.dynamicAnim = this.w.config.chart.animations.dynamicAnimation), (this.rectRadius = this.w.config.plotOptions.heatmap.radius), (this.strokeWidth = this.w.config.stroke.width);
              }
              return (
                r(t, [
                  {
                    key: 'draw',
                    value: function (t) {
                      var e = this.w,
                        i = new h.default(this.ctx),
                        a = i.group({ class: 'apexcharts-heatmap' });
                      a.attr('clip-path', 'url(#gridRectMask' + e.globals.cuid + ')');
                      for (var s = e.globals.gridWidth / e.globals.dataPoints, n = e.globals.gridHeight / e.globals.series.length, r = 0, o = t.length - 1; o >= 0; o--) {
                        var l = i.group({
                          class: 'apexcharts-series apexcharts-heatmap-series ' + e.globals.seriesNames[o].toString().replace(/ /g, '-'),
                          rel: o + 1,
                          'data:realIndex': o,
                        });
                        if (e.config.chart.dropShadow.enabled) {
                          var u = e.config.chart.dropShadow;
                          new d.default(this.ctx).dropShadow(l, u);
                        }
                        for (var f = 0, g = 0; g < t[o].length; g++) {
                          var p = 1,
                            x = this.determineHeatColor(o, g);
                          if (e.globals.hasNegs) {
                            var b = e.config.plotOptions.heatmap.shadeIntensity;
                            p = x.percent < 0 ? 1 - (1 + x.percent / 100) * b : (1 - x.percent / 100) * b;
                          } else p = 1 - x.percent / 100;
                          var v = x.color;
                          if (e.config.plotOptions.heatmap.enableShades) {
                            var m = new c.default();
                            v = c.default.hexToRgba(m.shadeColor(p, x.color), e.config.fill.opacity);
                          }
                          var y = this.rectRadius,
                            w = i.drawRect(f, r, s, n, y);
                          if (
                            (w.attr({ cx: f, cy: r }),
                            w.node.classList.add('apexcharts-heatmap-rect'),
                            l.add(w),
                            w.attr({
                              fill: v,
                              i: o,
                              j: g,
                              val: t[o][g],
                              'stroke-width': this.strokeWidth,
                              stroke: e.globals.stroke.colors[0],
                              color: v,
                            }),
                            e.config.chart.animations.enabled && !e.globals.dataChanged)
                          ) {
                            var k = 1;
                            e.globals.resized || (k = e.config.chart.animations.speed), this.animateHeatMap(w, f, r, s, n, k);
                          }
                          if (e.globals.dataChanged) {
                            var S = 1;
                            if (this.dynamicAnim.enabled && e.globals.shouldAnimate) {
                              S = this.dynamicAnim.speed;
                              var A = e.globals.previousPaths[o] && e.globals.previousPaths[o][g] && e.globals.previousPaths[o][g].color;
                              A || (A = 'rgba(255, 255, 255, 1)'), this.animateHeatColor(w, c.default.rgb2hex(A), c.default.rgb2hex(v), S);
                            }
                          }
                          var C = this.calculateHeatmapDataLabels({ x: f, y: r, i: o, j: g, series: t, rectHeight: n, rectWidth: s });
                          null !== C && l.add(C), (f += s);
                        }
                        (r += n), a.add(l);
                      }
                      e.globals.yAxisScale[0].result.push('');
                      var M = e.globals.gridHeight / e.globals.series.length;
                      return (e.config.yaxis[0].labels.offsetY = -M / 2), a;
                    },
                  },
                  {
                    key: 'determineHeatColor',
                    value: function (t, e) {
                      var i = this.w,
                        a = i.globals.series[t][e],
                        n = i.config.plotOptions.heatmap,
                        r = n.colorScale.inverse ? e : t,
                        o = i.globals.colors[r],
                        l = Math.min.apply(Math, s(i.globals.series[t])),
                        h = Math.max.apply(Math, s(i.globals.series[t]));
                      n.distributed || ((l = i.globals.minY), (h = i.globals.maxY)), void 0 !== n.colorScale.min && ((l = n.colorScale.min < i.globals.minY ? n.colorScale.min : i.globals.minY), (h = n.colorScale.max > i.globals.maxY ? n.colorScale.max : i.globals.maxY));
                      var c = Math.abs(h) + Math.abs(l),
                        d = (100 * a) / (0 === c ? c - 1e-6 : c);
                      return (
                        n.colorScale.ranges.length > 0 &&
                          n.colorScale.ranges.map(function (t, e) {
                            a >= t.from && a <= t.to && ((o = t.color), (l = t.from), (h = t.to), (c = Math.abs(h) + Math.abs(l)), (d = (100 * a) / c));
                          }),
                        { color: o, percent: d }
                      );
                    },
                  },
                  {
                    key: 'calculateHeatmapDataLabels',
                    value: function (t) {
                      var e = t.x,
                        i = t.y,
                        a = t.i,
                        s = t.j,
                        n = (t.series, t.rectHeight),
                        r = t.rectWidth,
                        l = this.w,
                        c = l.config.dataLabels,
                        d = new h.default(this.ctx),
                        u = new o.default(this.ctx),
                        f = c.formatter,
                        g = null;
                      if (c.enabled) {
                        g = d.group({ class: 'apexcharts-data-labels' });
                        var p = c.offsetX,
                          x = c.offsetY,
                          b = e + r / 2 + p,
                          v = i + n / 2 + parseInt(c.style.fontSize) / 3 + x,
                          m = f(l.globals.series[a][s], { seriesIndex: a, dataPointIndex: s, w: l });
                        u.plotDataLabelsText(b, v, m, a, s, g, c);
                      }
                      return g;
                    },
                  },
                  {
                    key: 'animateHeatMap',
                    value: function (t, e, i, a, s, n) {
                      new l.default(this.ctx).animateRect(t, { x: e + a / 2, y: i + s / 2, width: 0, height: 0 }, { x: e, y: i, width: a, height: s }, n);
                    },
                  },
                  {
                    key: 'animateHeatColor',
                    value: function (t, e, i, a) {
                      t.attr({ fill: e }).animate(a).attr({ fill: i });
                    },
                  },
                ]),
                t
              );
            })();
          t.exports = u;
        },
        function (t, e, i) {
          function a(t) {
            return t && t.__esModule ? t : { default: t };
          }
          function s(t, e) {
            if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
          }
          Object.defineProperty(e, '__esModule', { value: !0 });
          var n =
              Object.assign ||
              function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var i = arguments[e];
                  for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && (t[a] = i[a]);
                }
                return t;
              },
            r = (function () {
              function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                  var a = e[i];
                  (a.enumerable = a.enumerable || !1), (a.configurable = !0), 'value' in a && (a.writable = !0), Object.defineProperty(t, a.key, a);
                }
              }
              return function (e, i, a) {
                return i && t(e.prototype, i), a && t(e, a), e;
              };
            })(),
            o = a(i(3)),
            l = a(i(0)),
            h = a(i(4)),
            c = a(i(10)),
            d = a(i(8)),
            u = a(i(18)),
            f = a(i(1)),
            g = (function () {
              function t(e, i, a) {
                s(this, t), (this.ctx = e), (this.w = e.w), (this.xyRatios = i), (this.pointsChart = !('bubble' !== this.w.config.chart.type && 'scatter' !== this.w.config.chart.type) || a), this.pointsChart && (this.scatter = new u.default(this.ctx)), (this.noNegatives = this.w.globals.minX === Number.MAX_VALUE), (this.yaxisIndex = 0);
              }
              return (
                r(t, [
                  {
                    key: 'draw',
                    value: function (t, e, i) {
                      var a = this.w,
                        s = new l.default(this.ctx),
                        r = new h.default(this.ctx),
                        u = a.globals.comboCharts ? e : a.config.chart.type,
                        g = s.group({ class: 'apexcharts-' + u + '-series apexcharts-plot-series' }),
                        p = new o.default(this.ctx, a);
                      t = p.getLogSeries(t);
                      var x = this.xyRatios.yRatio;
                      x = p.getLogYRatios(x);
                      for (var b = this.xyRatios.zRatio, v = this.xyRatios.xRatio, m = this.xyRatios.baseLineY, y = [], w = [], k = 0, S = 0; S < t.length; S++) {
                        var A = a.globals.gridWidth / a.globals.dataPoints,
                          C = a.globals.comboCharts ? i[S] : S;
                        x.length > 1 && (this.yaxisIndex = C);
                        var M = [],
                          P = [],
                          L = a.globals.gridHeight - m[this.yaxisIndex],
                          E = L;
                        L > a.globals.gridHeight && (E = a.globals.gridHeight), (k = A / 2);
                        var T = a.globals.padHorizontal + k,
                          z = 1;
                        a.globals.isXNumeric && (T = (a.globals.seriesX[C][0] - a.globals.minX) / v), P.push(T);
                        var X = void 0,
                          Y = void 0,
                          O = void 0,
                          I = void 0,
                          F = [],
                          D = [],
                          N = s.group({ class: 'apexcharts-series ' + a.globals.seriesNames[C].toString().replace(/ /g, '-') }),
                          R = s.group({ class: 'apexcharts-series-markers-wrap' }),
                          W = s.group({ class: 'apexcharts-datalabels' });
                        this.ctx.series.addCollapsedClassToSeries(N, C);
                        var H = t[S].length === a.globals.dataPoints;
                        N.attr({ 'data:longestSeries': H, rel: S + 1, 'data:realIndex': C }), (this.appendPathFrom = !0);
                        var B = T,
                          _ = void 0,
                          V = B,
                          G = L,
                          j = 0;
                        if (
                          ((G = this.determineFirstPrevY({
                            i: S,
                            series: t,
                            yRatio: x[this.yaxisIndex],
                            zeroY: L,
                            prevY: G,
                            prevSeriesY: w,
                            lineYPosition: j,
                          }).prevY),
                          M.push(G),
                          (_ = G),
                          null === t[S][0])
                        ) {
                          for (var U = 0; U < t[S].length; U++)
                            if (null !== t[S][U]) {
                              (V = A * U), (G = L - t[S][U] / x[this.yaxisIndex]), (X = s.move(V, G)), (Y = s.move(V, E));
                              break;
                            }
                        } else (X = s.move(V, G)), (Y = s.move(V, E) + s.line(V, G));
                        if (((O = s.move(-1, L) + s.line(-1, L)), (I = s.move(-1, L) + s.line(-1, L)), a.globals.previousPaths.length > 0)) {
                          var q = this.checkPreviousPaths({ pathFromLine: O, pathFromArea: I, realIndex: C });
                          (O = q.pathFromLine), (I = q.pathFromArea);
                        }
                        for (var Z = a.globals.dataPoints > 1 ? a.globals.dataPoints - 1 : a.globals.dataPoints, $ = 0; $ < Z; $++) {
                          a.globals.isXNumeric ? (T = (a.globals.seriesX[C][$ + 1] - a.globals.minX) / v) : (T += A);
                          var J = f.default.isNumber(a.globals.minYArr[C]) ? a.globals.minYArr[C] : a.globals.minY;
                          a.config.chart.stacked ? ((j = S > 0 && a.globals.collapsedSeries.length < a.config.series.length - 1 ? w[S - 1][$ + 1] : L), (z = void 0 === t[S][$ + 1] || null === t[S][$ + 1] ? j - J / x[this.yaxisIndex] : j - t[S][$ + 1] / x[this.yaxisIndex])) : (z = void 0 === t[S][$ + 1] || null === t[S][$ + 1] ? L - J / x[this.yaxisIndex] : L - t[S][$ + 1] / x[this.yaxisIndex]), P.push(T), M.push(z);
                          var Q = this.createPaths({
                            series: t,
                            i: S,
                            j: $,
                            x: T,
                            y: z,
                            xDivision: A,
                            pX: B,
                            pY: _,
                            areaBottomY: E,
                            linePath: X,
                            areaPath: Y,
                            linePaths: F,
                            areaPaths: D,
                          });
                          (D = Q.areaPaths), (F = Q.linePaths), (B = Q.pX), (_ = Q.pY), (Y = Q.areaPath), (X = Q.linePath), this.appendPathFrom && ((O += s.line(T, L)), (I += s.line(T, L)));
                          var K = this.calculatePoints({
                            series: t,
                            x: T,
                            y: z,
                            realIndex: C,
                            i: S,
                            j: $,
                            prevY: G,
                            categoryAxisCorrection: k,
                            xRatio: v,
                          });
                          if (this.pointsChart) this.scatter.draw(N, $, { realIndex: C, pointsPos: K, zRatio: b, elParent: R });
                          else {
                            var tt = new d.default(this.ctx);
                            a.globals.dataPoints > 1 && R.node.classList.add('hidden');
                            var et = tt.plotChartMarkers(K, C, $ + 1);
                            null !== et && R.add(et);
                          }
                          var it = new c.default(this.ctx).drawDataLabel(K, C, $ + 1);
                          null !== it && W.add(it);
                        }
                        w.push(M), (a.globals.seriesXvalues[C] = P), (a.globals.seriesYvalues[C] = M), this.pointsChart || a.globals.delayedElements.push({ el: R.node, index: C });
                        var at = {
                          i: S,
                          realIndex: C,
                          animationDelay: S,
                          initialSpeed: a.config.chart.animations.speed,
                          dataChangeSpeed: a.config.chart.animations.dynamicAnimation.speed,
                          className: 'apexcharts-' + u,
                          id: 'apexcharts-' + u,
                        };
                        if (a.config.stroke.show && !this.pointsChart) {
                          var st = null;
                          st = 'line' === u ? r.fillPath(N, { seriesNumber: C, i: S }) : a.globals.stroke.colors[C];
                          for (var nt = 0; nt < F.length; nt++) {
                            var rt = s.renderPaths(
                              n({}, at, {
                                pathFrom: O,
                                pathTo: F[nt],
                                stroke: st,
                                strokeWidth: Array.isArray(a.config.stroke.width) ? a.config.stroke.width[C] : a.config.stroke.width,
                                strokeLineCap: a.config.stroke.lineCap,
                                fill: 'none',
                              })
                            );
                            N.add(rt);
                          }
                        }
                        if ('area' === u)
                          for (var ot = r.fillPath(N, { seriesNumber: C }), lt = 0; lt < D.length; lt++) {
                            var ht = s.renderPaths(n({}, at, { pathFrom: I, pathTo: D[lt], stroke: 'none', strokeWidth: 0, strokeLineCap: null, fill: ot }));
                            N.add(ht);
                          }
                        N.add(R), N.add(W), y.push(N);
                      }
                      for (var ct = y.length; ct > 0; ct--) g.add(y[ct - 1]);
                      return g;
                    },
                  },
                  {
                    key: 'createPaths',
                    value: function (t) {
                      var e = t.series,
                        i = t.i,
                        a = t.j,
                        s = t.x,
                        n = t.y,
                        r = t.pX,
                        o = t.pY,
                        h = t.xDivision,
                        c = t.areaBottomY,
                        d = t.linePath,
                        u = t.areaPath,
                        f = t.linePaths,
                        g = t.areaPaths,
                        p = this.w,
                        x = new l.default(this.ctx),
                        b = Array.isArray(p.config.stroke.curve) ? p.config.stroke.curve[i] : p.config.stroke.curve;
                      if ('smooth' === b) {
                        var v = 0.35 * (s - r);
                        p.globals.hasNullValues ? (null !== e[i][a] && (null !== e[i][a + 1] ? ((d = x.move(r, o) + x.curve(r + v, o, s - v, n, s + 1, n)), (u = x.move(r + 1, o) + x.curve(r + v, o, s - v, n, s + 1, n) + x.line(s, c) + x.line(r, c) + 'z')) : ((d = x.move(r, o)), (u = x.move(r, o) + 'z'))), f.push(d), g.push(u)) : ((d += x.curve(r + v, o, s - v, n, s, n)), (u += x.curve(r + v, o, s - v, n, s, n))), (r = s), (o = n), a === e[i].length - 2 && ((u = u + x.curve(r + v, o, s, n, s, c) + x.move(s, n) + 'z'), p.globals.hasNullValues || (f.push(d), g.push(u)));
                      } else null === e[i][a + 1] && ((d += x.move(s, n)), (u = u + x.line(s - h, c) + x.move(s, n))), null === e[i][a] && ((d += x.move(s, n)), (u += x.move(s, c))), 'stepline' === b ? ((d = d + x.line(s, null, 'H') + x.line(null, n, 'V')), (u = u + x.line(s, null, 'H') + x.line(null, n, 'V'))) : 'straight' === b && ((d += x.line(s, n)), (u += x.line(s, n))), a === e[i].length - 2 && ((u = u + x.line(s, c) + x.move(s, n) + 'z'), f.push(d), g.push(u));
                      return { linePaths: f, areaPaths: g, pX: r, pY: o, linePath: d, areaPath: u };
                    },
                  },
                  {
                    key: 'calculatePoints',
                    value: function (t) {
                      var e = t.series,
                        i = t.realIndex,
                        a = t.x,
                        s = t.y,
                        n = t.i,
                        r = t.j,
                        o = t.prevY,
                        l = t.categoryAxisCorrection,
                        h = t.xRatio,
                        c = this.w,
                        d = [],
                        u = [];
                      if (0 === r) {
                        var g = l + c.config.markers.offsetX;
                        c.globals.isXNumeric && (g = (c.globals.seriesX[i][0] - c.globals.minX) / h + c.config.markers.offsetX), d.push(g), u.push(f.default.isNumber(e[n][0]) ? o + c.config.markers.offsetY : null), d.push(a + c.config.markers.offsetX), u.push(f.default.isNumber(e[n][r + 1]) ? s + c.config.markers.offsetY : null);
                      } else d.push(a + c.config.markers.offsetX), u.push(f.default.isNumber(e[n][r + 1]) ? s + c.config.markers.offsetY : null);
                      return { x: d, y: u };
                    },
                  },
                  {
                    key: 'checkPreviousPaths',
                    value: function (t) {
                      for (var e = t.pathFromLine, i = t.pathFromArea, a = t.realIndex, s = this.w, n = 0; n < s.globals.previousPaths.length; n++) {
                        var r = s.globals.previousPaths[n];
                        ('line' === r.type || 'area' === r.type) && r.paths.length > 0 && parseInt(r.realIndex) === parseInt(a) && ('line' === r.type ? ((this.appendPathFrom = !1), (e = s.globals.previousPaths[n].paths[0].d)) : 'area' === r.type && ((this.appendPathFrom = !1), (e = s.globals.previousPaths[n].paths[0].d), (i = s.globals.previousPaths[n].paths[1].d)));
                      }
                      return { pathFromLine: e, pathFromArea: i };
                    },
                  },
                  {
                    key: 'determineFirstPrevY',
                    value: function (t) {
                      var e = t.i,
                        i = t.series,
                        a = t.yRatio,
                        s = t.zeroY,
                        n = t.prevY,
                        r = t.prevSeriesY,
                        o = t.lineYPosition,
                        l = this.w;
                      if (void 0 !== i[e][0]) n = l.config.chart.stacked ? (o = e > 0 ? r[e - 1][0] : s) - i[e][0] / a : s - i[e][0] / a;
                      else if (l.config.chart.stacked && e > 0 && void 0 === i[e][0])
                        for (var h = e - 1; h >= 0; h--)
                          if (null !== i[h][0] && void 0 !== i[h][0]) {
                            n = o = r[h][0];
                            break;
                          }
                      return { prevY: n, lineYPosition: o };
                    },
                  },
                ]),
                t
              );
            })();
          e.default = g;
        },
        function (t, e, i) {
          function a(t) {
            return t && t.__esModule ? t : { default: t };
          }
          function s(t, e) {
            if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
          }
          function n(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || ('object' != typeof e && 'function' != typeof e) ? t : e;
          }
          function r(t, e) {
            if ('function' != typeof e && null !== e) throw new TypeError('Super expression must either be null or a function, not ' + typeof e);
            (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } })), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
          }
          Object.defineProperty(e, '__esModule', { value: !0 });
          var o = (function () {
              function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                  var a = e[i];
                  (a.enumerable = a.enumerable || !1), (a.configurable = !0), 'value' in a && (a.writable = !0), Object.defineProperty(t, a.key, a);
                }
              }
              return function (e, i, a) {
                return i && t(e.prototype, i), a && t(e, a), e;
              };
            })(),
            l = a(i(17)),
            h = a(i(1)),
            c = a(i(4)),
            d = a(i(0)),
            u = a(i(2)),
            f = (function (t) {
              function e(t) {
                s(this, e);
                var i = n(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
                (i.ctx = t), (i.w = t.w), (i.animBeginArr = [0]), (i.animDur = 0);
                var a = i.w;
                return (i.startAngle = a.config.plotOptions.radialBar.startAngle), (i.endAngle = a.config.plotOptions.radialBar.endAngle), (i.trackStartAngle = a.config.plotOptions.radialBar.track.startAngle), (i.trackEndAngle = a.config.plotOptions.radialBar.track.endAngle), (i.radialDataLabels = a.config.plotOptions.radialBar.dataLabels), i.trackStartAngle || (i.trackStartAngle = i.startAngle), i.trackEndAngle || (i.trackEndAngle = i.endAngle), 360 === i.endAngle && (i.endAngle = 359.99), (i.fullAngle = 360 - a.config.plotOptions.radialBar.endAngle - a.config.plotOptions.radialBar.startAngle), (i.margin = parseInt(a.config.plotOptions.radialBar.track.margin)), i;
              }
              return (
                r(e, t),
                o(e, [
                  {
                    key: 'draw',
                    value: function (t) {
                      var e = this.w,
                        i = new d.default(this.ctx),
                        a = i.group({ class: 'apexcharts-radialbar' }),
                        s = i.group(),
                        n = this.defaultSize / 2,
                        r = e.globals.gridWidth / 2,
                        o = this.defaultSize / 2.05 - e.config.stroke.width - e.config.chart.dropShadow.blur;
                      void 0 !== e.config.plotOptions.radialBar.size && (o = e.config.plotOptions.radialBar.size);
                      var l = e.globals.fill.colors;
                      if (e.config.plotOptions.radialBar.track.show) {
                        var h = this.drawTracks({ size: o, centerX: r, centerY: n, colorArr: l, series: t });
                        s.add(h);
                      }
                      var c = this.drawArcs({ size: o, centerX: r, centerY: n, colorArr: l, series: t });
                      return s.add(c.g), 'front' === e.config.plotOptions.radialBar.hollow.position && (c.g.add(c.elHollow), c.dataLabels && c.g.add(c.dataLabels)), a.add(s), a;
                    },
                  },
                  {
                    key: 'drawTracks',
                    value: function (t) {
                      var e = this.w,
                        i = new d.default(this.ctx),
                        a = i.group(),
                        s = new u.default(this.ctx),
                        n = new c.default(this.ctx),
                        r = this.getStrokeWidth(t);
                      t.size = t.size - r / 2;
                      for (var o = 0; o < t.series.length; o++) {
                        var h = i.group({ class: 'apexcharts-radialbar-track apexcharts-track' });
                        a.add(h), h.attr({ id: 'apexcharts-track-' + o, rel: o + 1 }), (t.size = t.size - r - this.margin);
                        var f = e.config.plotOptions.radialBar.track,
                          g = n.fillPath(h, {
                            seriesNumber: 0,
                            size: t.size,
                            fillColors: Array.isArray(f.background) ? f.background[o] : f.background,
                            solid: !0,
                          }),
                          p = this.trackStartAngle,
                          x = this.trackEndAngle;
                        Math.abs(x) + Math.abs(p) >= 360 && (x = 360 - Math.abs(this.startAngle) - 0.1);
                        var b = i.drawPath({
                          d: '',
                          stroke: g,
                          strokeWidth: (r * parseInt(f.strokeWidth)) / 100,
                          fill: 'none',
                          strokeOpacity: f.opacity,
                          classes: 'apexcharts-radialbar-area',
                        });
                        if (f.dropShadow.enabled) {
                          var v = f.dropShadow;
                          s.dropShadow(b, v);
                        }
                        h.add(b),
                          b.attr('id', 'apexcharts-radialbarTrack-' + o),
                          new l.default(this.ctx).animatePaths(b, {
                            centerX: t.centerX,
                            centerY: t.centerY,
                            endAngle: x,
                            startAngle: p,
                            size: t.size,
                            i: o,
                            totalItems: 2,
                            animBeginArr: 0,
                            dur: 0,
                            easing: e.globals.easing,
                          });
                      }
                      return a;
                    },
                  },
                  {
                    key: 'drawArcs',
                    value: function (t) {
                      var e = this.w,
                        i = new d.default(this.ctx),
                        a = new c.default(this.ctx),
                        s = new u.default(this.ctx),
                        n = i.group(),
                        r = this.getStrokeWidth(t);
                      t.size = t.size - r / 2;
                      var o = e.config.plotOptions.radialBar.hollow.background,
                        f = t.size - r * t.series.length - this.margin * t.series.length - (r * parseInt(e.config.plotOptions.radialBar.track.strokeWidth)) / 100 / 2,
                        g = f - e.config.plotOptions.radialBar.hollow.margin;
                      void 0 !== e.config.plotOptions.radialBar.hollow.image && (o = this.drawHollowImage(t, n, f, o));
                      var p = this.drawHollow({ size: g, centerX: t.centerX, centerY: t.centerY, fill: o });
                      if (e.config.plotOptions.radialBar.hollow.dropShadow.enabled) {
                        var x = e.config.plotOptions.radialBar.hollow.dropShadow;
                        s.dropShadow(p, x);
                      }
                      var b = 1;
                      !this.radialDataLabels.total.show && e.globals.series.length > 1 && (b = 0);
                      var v = new l.default(this.ctx),
                        m = null;
                      this.radialDataLabels.show &&
                        (m = v.renderInnerDataLabels(this.radialDataLabels, {
                          hollowSize: f,
                          centerX: t.centerX,
                          centerY: t.centerY,
                          opacity: b,
                        })),
                        'back' === e.config.plotOptions.radialBar.hollow.position && (n.add(p), m && n.add(m));
                      var y = !1;
                      e.config.plotOptions.radialBar.inverseOrder && (y = !0);
                      for (var w = y ? t.series.length - 1 : 0; y ? w >= 0 : w < t.series.length; y ? w-- : w++) {
                        var k = i.group({
                          class: 'apexcharts-series apexcharts-radial-series ' + e.globals.seriesNames[w].toString().replace(/ /g, '-'),
                        });
                        n.add(k), k.attr({ id: 'apexcharts-series-' + w, rel: w + 1 }), this.ctx.series.addCollapsedClassToSeries(k, w), (t.size = t.size - r - this.margin);
                        var S = a.fillPath(k, { seriesNumber: w, size: t.size }),
                          A = this.startAngle,
                          C = void 0,
                          M = Math.abs(e.config.plotOptions.radialBar.endAngle - e.config.plotOptions.radialBar.startAngle),
                          P = Math.round((M * h.default.negToZero(t.series[w])) / 100) + this.startAngle,
                          L = void 0;
                        e.globals.dataChanged && ((C = this.startAngle), (L = Math.round((M * h.default.negToZero(e.globals.previousPaths[w])) / 100) + C)), Math.abs(P) + Math.abs(A) >= 360 && (P -= 0.01), Math.abs(L) + Math.abs(C) >= 360 && (L -= 0.01);
                        var E = P - A,
                          T = Array.isArray(e.config.stroke.dashArray) ? e.config.stroke.dashArray[w] : e.config.stroke.dashArray,
                          z = i.drawPath({
                            d: '',
                            stroke: S,
                            strokeWidth: r,
                            fill: 'none',
                            fillOpacity: e.config.fill.opacity,
                            classes: 'apexcharts-radialbar-area',
                            strokeDashArray: T,
                          });
                        if ((d.default.setAttrs(z.node, { 'data:angle': E, 'data:value': t.series[w] }), e.config.chart.dropShadow.enabled)) {
                          var X = e.config.chart.dropShadow;
                          s.dropShadow(z, X);
                        }
                        this.addListeners(z, this.radialDataLabels);
                        var Y = new l.default(this.ctx);
                        z.node.addEventListener('mouseenter', Y.dataLabelsMouseIn.bind(this, z.node, this.radialDataLabels)), z.node.addEventListener('mouseleave', Y.dataLabelsMouseout.bind(this, z.node, this.radialDataLabels)), k.add(z), z.attr('id', 'apexcharts-radialArc-' + w);
                        var O = 0;
                        !Y.initialAnim || e.globals.resized || e.globals.dataChanged || ((O = ((P - A) / 360) * e.config.chart.animations.speed), (this.animDur = O / (1.2 * t.series.length) + this.animDur), this.animBeginArr.push(this.animDur)),
                          e.globals.dataChanged && ((O = ((P - A) / 360) * e.config.chart.animations.dynamicAnimation.speed), (this.animDur = O / (1.2 * t.series.length) + this.animDur), this.animBeginArr.push(this.animDur)),
                          Y.animatePaths(z, {
                            centerX: t.centerX,
                            centerY: t.centerY,
                            endAngle: P,
                            startAngle: A,
                            prevEndAngle: L,
                            prevStartAngle: C,
                            size: t.size,
                            i: w,
                            totalItems: 2,
                            animBeginArr: this.animBeginArr,
                            dur: O,
                            shouldSetPrevPaths: !0,
                            easing: e.globals.easing,
                          });
                      }
                      return { g: n, elHollow: p, dataLabels: m };
                    },
                  },
                  {
                    key: 'drawHollow',
                    value: function (t) {
                      var e = new d.default(this.ctx).drawCircle(2 * t.size);
                      return e.attr({ class: 'apexcharts-radialbar-hollow', cx: t.centerX, cy: t.centerY, r: t.size, fill: t.fill }), e;
                    },
                  },
                  {
                    key: 'drawHollowImage',
                    value: function (t, e, i, a) {
                      var s = this.w,
                        n = new c.default(this.ctx),
                        r = (Math.random() + 1).toString(36).substring(4),
                        o = s.config.plotOptions.radialBar.hollow.image;
                      if (s.config.plotOptions.radialBar.hollow.imageClipped) n.clippedImgArea({ width: i, height: i, image: o, patternID: 'pattern' + s.globals.cuid + r }), (a = 'url(#pattern' + s.globals.cuid + r + ')');
                      else {
                        var l = s.config.plotOptions.radialBar.hollow.imageWidth,
                          h = s.config.plotOptions.radialBar.hollow.imageHeight;
                        if (void 0 === l && void 0 === h) {
                          var d = s.globals.dom.Paper.image(o).loaded(function (e) {
                            this.move(t.centerX - e.width / 2 + s.config.plotOptions.radialBar.hollow.imageOffsetX, t.centerY - e.height / 2 + s.config.plotOptions.radialBar.hollow.imageOffsetY);
                          });
                          e.add(d);
                        } else {
                          var u = s.globals.dom.Paper.image(o).loaded(function (e) {
                            this.move(t.centerX - l / 2 + s.config.plotOptions.radialBar.hollow.imageOffsetX, t.centerY - h / 2 + s.config.plotOptions.radialBar.hollow.imageOffsetY), this.size(l, h);
                          });
                          e.add(u);
                        }
                      }
                      return a;
                    },
                  },
                  {
                    key: 'getStrokeWidth',
                    value: function (t) {
                      var e = this.w;
                      return (t.size * (100 - parseInt(e.config.plotOptions.radialBar.hollow.size))) / 100 / (t.series.length + 1) - this.margin;
                    },
                  },
                ]),
                e
              );
            })(l.default);
          e.default = f;
        },
        function (t, e, i) {
          function a(t) {
            return t && t.__esModule ? t : { default: t };
          }
          function s(t, e) {
            if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
          }
          var n = (function () {
              function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                  var a = e[i];
                  (a.enumerable = a.enumerable || !1), (a.configurable = !0), 'value' in a && (a.writable = !0), Object.defineProperty(t, a.key, a);
                }
              }
              return function (e, i, a) {
                return i && t(e.prototype, i), a && t(e, a), e;
              };
            })(),
            r = a(i(0)),
            o = a(i(15)),
            l = a(i(1)),
            h = (function () {
              function t(e) {
                s(this, t), (this.ctx = e), (this.w = e.w), (this.graphics = new r.default(this.ctx)), 'bar' === this.w.config.chart.type && this.w.config.plotOptions.bar.horizontal && (this.invertAxis = !0), (this.xDivision = this.w.globals.gridWidth / this.w.globals.dataPoints);
              }
              return (
                n(t, [
                  {
                    key: 'drawAnnotations',
                    value: function () {
                      var t = this.w;
                      if (t.globals.axisCharts) {
                        for (var e = this.drawYAxisAnnotations(), i = this.drawXAxisAnnotations(), a = this.drawPointAnnotations(), s = t.config.chart.animations.enabled, n = [e, i, a], r = [i.node, e.node, a.node], o = 0; o < 3; o++) t.globals.dom.elGraphical.add(n[o]), !s || t.globals.resized || t.globals.dataChanged || r[o].classList.add('hidden'), t.globals.delayedElements.push({ el: r[o], index: 0 });
                        this.setOrientations(t.config.annotations.xaxis), this.annotationsBackground();
                      }
                    },
                  },
                  {
                    key: 'addXaxisAnnotation',
                    value: function (t, e, i) {
                      var a = this.w,
                        s = this.invertAxis ? a.globals.minY : a.globals.minX,
                        n = this.invertAxis ? a.globals.yRange[0] : a.globals.xRange,
                        r = t.strokeDashArray,
                        o = (t.x - s) / (n / a.globals.gridWidth),
                        l = this.graphics.drawLine(o + t.offsetX, 0 + t.offsetY, o + t.offsetX, a.globals.gridHeight + t.offsetY, t.borderColor, r);
                      e.appendChild(l.node);
                      var h = 'top' === t.label.position ? -3 : a.globals.gridHeight,
                        c = t.label.text ? t.label.text : '',
                        d = this.graphics.drawText({
                          x: o + t.label.offsetX,
                          y: h + t.label.offsetY,
                          text: c,
                          textAnchor: t.label.textAnchor,
                          fontSize: t.label.style.fontSize,
                          fontFamily: t.label.style.fontFamily,
                          foreColor: t.label.style.color,
                          cssClass: 'apexcharts-xaxis-annotation-label ' + t.label.style.cssClass,
                        });
                      d.attr({ rel: i }), e.appendChild(d.node);
                    },
                  },
                  {
                    key: 'drawXAxisAnnotations',
                    value: function () {
                      var t = this,
                        e = this.w,
                        i = this.graphics.group({ class: 'apexcharts-xaxis-annotations' });
                      return (
                        e.config.annotations.xaxis.map(function (e, a) {
                          t.addXaxisAnnotation(e, i.node, a);
                        }),
                        i
                      );
                    },
                  },
                  {
                    key: 'addYaxisAnnotation',
                    value: function (t, e, i) {
                      var a = this.w,
                        s = t.strokeDashArray,
                        n = void 0;
                      if (this.invertAxis) {
                        var r = a.globals.labels.indexOf(t.y),
                          o = a.globals.dom.baseEl.querySelector('.apexcharts-yaxis-texts-g text:nth-child(' + (r + 1) + ')');
                        n = parseInt(o.getAttribute('y'));
                      } else n = a.globals.gridHeight - (t.y - a.globals.minYArr[t.yAxisIndex]) / (a.globals.yRange[t.yAxisIndex] / a.globals.gridHeight);
                      var l = t.label.text ? t.label.text : '',
                        h = this.graphics.drawLine(0 + t.offsetX, n + t.offsetY, a.globals.gridWidth + t.offsetX, n + t.offsetY, t.borderColor, s);
                      e.appendChild(h.node);
                      var c = 'right' === t.label.position ? a.globals.gridWidth : 0,
                        d = this.graphics.drawText({
                          x: c + t.label.offsetX,
                          y: n + t.label.offsetY - 3,
                          text: l,
                          textAnchor: t.label.textAnchor,
                          fontSize: t.label.style.fontSize,
                          fontFamily: t.label.style.fontFamily,
                          foreColor: t.label.style.color,
                          cssClass: 'apexcharts-yaxis-annotation-label ' + t.label.style.cssClass,
                        });
                      d.attr({ rel: i }), e.appendChild(d.node);
                    },
                  },
                  {
                    key: 'drawYAxisAnnotations',
                    value: function () {
                      var t = this,
                        e = this.w,
                        i = this.graphics.group({ class: 'apexcharts-yaxis-annotations' });
                      return (
                        e.config.annotations.yaxis.map(function (e, a) {
                          t.addYaxisAnnotation(e, i.node, a);
                        }),
                        i
                      );
                    },
                  },
                  {
                    key: 'clearAnnotations',
                    value: function (t) {
                      t.w.globals.dom.baseEl.querySelectorAll('.apexcharts-yaxis-annotations, .apexcharts-xaxis-annotations, .apexcharts-point-annotations').forEach(function (t) {
                        for (; t.firstChild; ) t.removeChild(t.firstChild);
                      });
                    },
                  },
                  {
                    key: 'addPointAnnotation',
                    value: function (t, e, i) {
                      var a = this.w,
                        s = 0,
                        n = 0,
                        r = 0;
                      if ((this.invertAxis && console.warn('Point annotation is not supported in horizontal bar charts.'), 'string' == typeof t.x)) {
                        var o = a.globals.labels.indexOf(t.x),
                          l = a.globals.dom.baseEl.querySelector('.apexcharts-xaxis-texts-g text:nth-child(' + (o + 1) + ')');
                        s = parseInt(l.getAttribute('x'));
                        var h = t.y;
                        null === t.y && (h = a.globals.series[t.seriesIndex][o]), (n = a.globals.gridHeight - (h - a.globals.minYArr[t.yAxisIndex]) / (a.globals.yRange[t.yAxisIndex] / a.globals.gridHeight) - parseInt(t.label.style.fontSize) - t.marker.size), (r = a.globals.gridHeight - (h - a.globals.minYArr[t.yAxisIndex]) / (a.globals.yRange[t.yAxisIndex] / a.globals.gridHeight));
                      } else (s = (t.x - a.globals.minX) / (a.globals.xRange / a.globals.gridWidth)), (n = a.globals.gridHeight - (parseInt(t.y) - a.globals.minYArr[t.yAxisIndex]) / (a.globals.yRange[t.yAxisIndex] / a.globals.gridHeight) - parseInt(t.label.style.fontSize) - t.marker.size), (r = a.globals.gridHeight - (t.y - a.globals.minYArr[t.yAxisIndex]) / (a.globals.yRange[t.yAxisIndex] / a.globals.gridHeight));
                      var c = {
                          pSize: t.marker.size,
                          pWidth: t.marker.strokeWidth,
                          pointFillColor: t.marker.fillColor,
                          pointStrokeColor: t.marker.strokeColor,
                          shape: t.marker.shape,
                          radius: t.marker.radius,
                        },
                        d = this.graphics.drawMarker(s + t.marker.offsetX, r + t.marker.offsetY, c);
                      e.appendChild(d.node);
                      var u = t.label.text ? t.label.text : '',
                        f = this.graphics.drawText({
                          x: s + t.label.offsetX,
                          y: n + t.label.offsetY,
                          text: u,
                          textAnchor: t.label.textAnchor,
                          fontSize: t.label.style.fontSize,
                          fontFamily: t.label.style.fontFamily,
                          foreColor: t.label.style.color,
                          cssClass: 'apexcharts-point-annotation-label ' + t.label.style.cssClass,
                        });
                      f.attr({ rel: i }), e.appendChild(f.node);
                    },
                  },
                  {
                    key: 'drawPointAnnotations',
                    value: function () {
                      var t = this,
                        e = this.w,
                        i = this.graphics.group({ class: 'apexcharts-point-annotations' });
                      return (
                        e.config.annotations.points.map(function (e, a) {
                          t.addPointAnnotation(e, i.node, a);
                        }),
                        i
                      );
                    },
                  },
                  {
                    key: 'setOrientations',
                    value: function (t) {
                      var e = this,
                        i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        a = this.w;
                      t.map(function (t, s) {
                        if ('vertical' === t.label.orientation) {
                          var n = null !== i ? i : s,
                            r = a.globals.dom.baseEl.querySelector(".apexcharts-xaxis-annotations .apexcharts-xaxis-annotation-label[rel='" + n + "']");
                          if (null !== r) {
                            var o = r.getBoundingClientRect();
                            r.setAttribute('x', parseInt(r.getAttribute('x')) - o.height + 4), 'top' === t.label.position ? r.setAttribute('y', parseInt(r.getAttribute('y')) + o.width) : r.setAttribute('y', parseInt(r.getAttribute('y')) - o.width);
                            var l = e.graphics.rotateAroundCenter(r),
                              h = l.x,
                              c = l.y;
                            r.setAttribute('transform', 'rotate(-90 ' + h + ' ' + c + ')');
                          }
                        }
                      });
                    },
                  },
                  {
                    key: 'addBackgroundToAnno',
                    value: function (t, e) {
                      var i = this.w.globals.dom.baseEl.querySelector('.apexcharts-grid').getBoundingClientRect(),
                        a = t.getBoundingClientRect(),
                        s = e.label.style.padding.left,
                        n = e.label.style.padding.right,
                        r = e.label.style.padding.top,
                        o = e.label.style.padding.bottom;
                      'vertical' === e.label.orientation && ((r = e.label.style.padding.left), (o = e.label.style.padding.right), (s = e.label.style.padding.top), (n = e.label.style.padding.bottom));
                      var l = a.left - i.left - s,
                        h = a.top - i.top - r;
                      return this.graphics.drawRect(l, h, a.width + s + n, a.height + r + o, 0, e.label.style.background, 1, e.label.borderWidth, e.label.borderColor, 0);
                    },
                  },
                  {
                    key: 'annotationsBackground',
                    value: function () {
                      var t = this,
                        e = this.w,
                        i = function (i, a, s) {
                          var n = e.globals.dom.baseEl.querySelector('.apexcharts-' + s + '-annotations .apexcharts-' + s + "-annotation-label[rel='" + a + "']"),
                            r = n.parentNode,
                            o = t.addBackgroundToAnno(n, i);
                          r.insertBefore(o.node, n);
                        };
                      e.config.annotations.xaxis.map(function (t, e) {
                        i(t, e, 'xaxis');
                      }),
                        e.config.annotations.yaxis.map(function (t, e) {
                          i(t, e, 'yaxis');
                        }),
                        e.config.annotations.points.map(function (t, e) {
                          i(t, e, 'point');
                        });
                    },
                  },
                  {
                    key: 'addText',
                    value: function (t, e, i) {
                      var a = t.x,
                        s = t.y,
                        n = t.text,
                        r = t.textAnchor,
                        o = t.appendTo,
                        l = void 0 === o ? '.apexcharts-inner' : o,
                        h = t.foreColor,
                        c = t.fontSize,
                        d = t.fontFamily,
                        u = t.cssClass,
                        f = t.backgroundColor,
                        g = t.borderWidth,
                        p = t.strokeDashArray,
                        x = t.radius,
                        b = t.borderColor,
                        v = t.paddingLeft,
                        m = void 0 === v ? 4 : v,
                        y = t.paddingRight,
                        w = void 0 === y ? 4 : y,
                        k = t.paddingBottom,
                        S = void 0 === k ? 2 : k,
                        A = t.paddingTop,
                        C = void 0 === A ? 2 : A,
                        M = i,
                        P = M.w,
                        L = P.globals.dom.baseEl.querySelector(l),
                        E = this.graphics.drawText({
                          x: a,
                          y: s,
                          text: n,
                          textAnchor: r || 'start',
                          fontSize: c || '12px',
                          fontFamily: d || P.config.chart.fontFamily,
                          foreColor: h || P.config.chart.foreColor,
                          cssClass: u,
                        });
                      L.appendChild(E.node);
                      var T = E.bbox(),
                        z = this.graphics.drawRect(T.x - m, T.y - C, T.width + m + w, T.height + S + C, x, f, 1, g, b, p);
                      return (
                        E.before(z),
                        e &&
                          P.globals.memory.methodsToExec.push({
                            context: M,
                            method: M.addText,
                            params: {
                              x: a,
                              y: s,
                              text: n,
                              textAnchor: r,
                              appendTo: l,
                              foreColor: h,
                              fontSize: c,
                              cssClass: u,
                              backgroundColor: f,
                              borderWidth: g,
                              strokeDashArray: p,
                              radius: x,
                              borderColor: b,
                              paddingLeft: m,
                              paddingRight: w,
                              paddingBottom: S,
                              paddingTop: C,
                            },
                          }),
                        i
                      );
                    },
                  },
                  {
                    key: 'addPointAnnotationExternal',
                    value: function (t, e, i) {
                      return (
                        this.addAnnotationExternal({
                          params: t,
                          pushToMemory: e,
                          context: i,
                          type: 'point',
                          contextMethod: i.addPointAnnotation,
                        }),
                        i
                      );
                    },
                  },
                  {
                    key: 'addYaxisAnnotationExternal',
                    value: function (t, e, i) {
                      return (
                        this.addAnnotationExternal({
                          params: t,
                          pushToMemory: e,
                          context: i,
                          type: 'yaxis',
                          contextMethod: i.addYaxisAnnotation,
                        }),
                        i
                      );
                    },
                  },
                  {
                    key: 'addXaxisAnnotationExternal',
                    value: function (t, e, i) {
                      return (
                        this.addAnnotationExternal({
                          params: t,
                          pushToMemory: e,
                          context: i,
                          type: 'xaxis',
                          contextMethod: i.addXaxisAnnotation,
                        }),
                        i
                      );
                    },
                  },
                  {
                    key: 'addAnnotationExternal',
                    value: function (t) {
                      var e = t.params,
                        i = t.pushToMemory,
                        a = t.context,
                        s = t.type,
                        n = t.contextMethod,
                        r = a,
                        h = r.w,
                        c = h.globals.dom.baseEl.querySelector('.apexcharts-' + s + '-annotations'),
                        d = c.childNodes.length + 1,
                        u = new o.default(),
                        f = Object.assign({}, 'xaxis' === s ? u.xAxisAnnotation : 'yaxis' === s ? u.yAxisAnnotation : u.pointAnnotation),
                        g = l.default.extend(f, e);
                      switch (s) {
                        case 'xaxis':
                          this.addXaxisAnnotation(g, c, d);
                          break;
                        case 'yaxis':
                          this.addYaxisAnnotation(g, c, d);
                          break;
                        case 'point':
                          this.addPointAnnotation(g, c, d);
                      }
                      var p = h.globals.dom.baseEl.querySelector('.apexcharts-' + s + '-annotations .apexcharts-' + s + "-annotation-label[rel='" + d + "']"),
                        x = this.addBackgroundToAnno(p, g);
                      return c.insertBefore(x.node, p), i && h.globals.memory.methodsToExec.push({ context: r, method: n, params: e }), a;
                    },
                  },
                ]),
                t
              );
            })();
          t.exports = h;
        },
        function (t, e, i) {
          function a(t) {
            return t && t.__esModule ? t : { default: t };
          }
          function s(t, e) {
            if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
          }
          var n = (function () {
              function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                  var a = e[i];
                  (a.enumerable = a.enumerable || !1), (a.configurable = !0), 'value' in a && (a.writable = !0), Object.defineProperty(t, a.key, a);
                }
              }
              return function (e, i, a) {
                return i && t(e.prototype, i), a && t(e, a), e;
              };
            })(),
            r = a(i(14)),
            o = a(i(45)),
            l = (function () {
              function t(e) {
                s(this, t), (this.opts = e);
              }
              return (
                n(t, [
                  {
                    key: 'init',
                    value: function () {
                      var t = new r.default(this.opts).init();
                      return { config: t, globals: new o.default().init(t) };
                    },
                  },
                ]),
                t
              );
            })();
          t.exports = l;
        },
        function (t, e, i) {
          function a(t) {
            return t && t.__esModule ? t : { default: t };
          }
          function s(t, e) {
            if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
          }
          var n = (function () {
              function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                  var a = e[i];
                  (a.enumerable = a.enumerable || !1), (a.configurable = !0), 'value' in a && (a.writable = !0), Object.defineProperty(t, a.key, a);
                }
              }
              return function (e, i, a) {
                return i && t(e.prototype, i), a && t(e, a), e;
              };
            })(),
            r = a(i(9)),
            o = a(i(29)),
            l = a(i(30)),
            h = a(i(3)),
            c = a(i(19)),
            d = a(i(16)),
            u = a(i(31)),
            f = a(i(17)),
            g = a(i(33)),
            p = a(i(32)),
            x = a(i(0)),
            b = a(i(12)),
            v = a(i(13)),
            m = a(i(21)),
            y = a(i(1)),
            w = a(i(6)),
            k = a(i(22)),
            S = (function () {
              function t(e, i) {
                s(this, t), (this.ctx = i), (this.w = i.w), (this.el = e), (this.coreUtils = new h.default(this.ctx)), (this.twoDSeries = []), (this.threeDSeries = []), (this.twoDSeriesX = []);
              }
              return (
                n(t, [
                  {
                    key: 'setupElements',
                    value: function () {
                      var t = this.w.globals,
                        e = this.w.config,
                        i = e.chart.type,
                        a = ['line', 'area', 'bar', 'candlestick', 'scatter', 'bubble', 'heatmap'],
                        s = ['line', 'area', 'bar', 'candlestick', 'scatter', 'bubble'];
                      (t.axisCharts = a.indexOf(i) > -1),
                        (t.xyCharts = s.indexOf(i) > -1),
                        (t.chartClass = '.apexcharts' + t.cuid),
                        (t.dom.baseEl = this.el),
                        (t.dom.elWrap = document.createElement('div')),
                        x.default.setAttrs(t.dom.elWrap, {
                          id: t.chartClass.substring(1),
                          class: 'apexcharts-canvas ' + t.chartClass.substring(1),
                        }),
                        this.el.appendChild(t.dom.elWrap),
                        (t.dom.Paper = new window.SVG.Doc(t.dom.elWrap)),
                        t.dom.Paper.attr({
                          class: 'apexcharts-svg',
                          'xmlns:data': 'ApexChartsNS',
                          transform: 'translate(' + e.chart.offsetX + ', ' + e.chart.offsetY + ')',
                        }),
                        (t.dom.Paper.node.style.background = e.chart.background),
                        this.setSVGDimensions(),
                        (t.dom.elGraphical = t.dom.Paper.group().attr({ class: 'apexcharts-inner apexcharts-graphical' })),
                        (t.dom.elDefs = t.dom.Paper.defs()),
                        (t.dom.elLegendWrap = document.createElement('div')),
                        t.dom.elLegendWrap.classList.add('apexcharts-legend'),
                        t.dom.elWrap.appendChild(t.dom.elLegendWrap),
                        t.dom.Paper.add(t.dom.elGraphical),
                        t.dom.elGraphical.add(t.dom.elDefs);
                    },
                  },
                  {
                    key: 'plotChartType',
                    value: function (t, e) {
                      var i = this.w,
                        a = i.config,
                        s = i.globals,
                        n = { series: [], i: [] },
                        h = { series: [], i: [] },
                        c = { series: [], i: [] },
                        d = { series: [], i: [] },
                        x = { series: [], i: [] };
                      s.series.map(function (e, a) {
                        if (void 0 !== t[a].type) {
                          if ('column' === t[a].type || 'bar' === t[a].type) (i.config.plotOptions.bar.horizontal = !1), d.series.push(e), d.i.push(a);
                          else if ('area' === t[a].type) h.series.push(e), h.i.push(a);
                          else if ('line' === t[a].type) n.series.push(e), n.i.push(a);
                          else if ('scatter' === t[a].type) c.series.push(e), c.i.push(a);
                          else {
                            if ('candlestick' !== t[a].type) throw new Error('You have specified an unrecognized chart type. Available types for this propery are line/area/column/bar');
                            x.series.push(e), x.i.push(a);
                          }
                          s.comboCharts = !0;
                        } else n.series.push(e), n.i.push(a);
                      });
                      var b = new p.default(this.ctx, e),
                        v = new l.default(this.ctx, e),
                        m = new f.default(this.ctx),
                        y = new g.default(this.ctx),
                        w = [];
                      if (s.comboCharts) {
                        if ((h.series.length > 0 && w.push(b.draw(h.series, 'area', h.i)), d.series.length > 0))
                          if (i.config.chart.stacked) {
                            var k = new o.default(this.ctx, e);
                            w.push(k.draw(d.series, d.i));
                          } else {
                            var S = new r.default(this.ctx, e);
                            w.push(S.draw(d.series, d.i));
                          }
                        if ((n.series.length > 0 && w.push(b.draw(n.series, 'line', n.i)), x.series.length > 0 && w.push(v.draw(x.series, x.i)), c.series.length > 0)) {
                          var A = new p.default(this.ctx, e, !0);
                          w.push(A.draw(c.series, 'scatter', c.i));
                        }
                      } else
                        switch (a.chart.type) {
                          case 'line':
                            w = b.draw(s.series, 'line');
                            break;
                          case 'area':
                            w = b.draw(s.series, 'area');
                            break;
                          case 'bar':
                            w = a.chart.stacked ? new o.default(this.ctx, e).draw(s.series) : new r.default(this.ctx, e).draw(s.series);
                            break;
                          case 'candlestick':
                            w = new l.default(this.ctx, e).draw(s.series);
                            break;
                          case 'heatmap':
                            w = new u.default(this.ctx, e).draw(s.series);
                            break;
                          case 'pie':
                          case 'donut':
                            w = m.draw(s.series);
                            break;
                          case 'radialBar':
                            w = y.draw(s.series);
                            break;
                          default:
                            w = b.draw(s.series);
                        }
                      return w;
                    },
                  },
                  {
                    key: 'setSVGDimensions',
                    value: function () {
                      var t = this.w.globals,
                        e = this.w.config;
                      (t.svgWidth = e.chart.width), (t.svgHeight = e.chart.height);
                      var i = y.default.getDimensions(this.el),
                        a = e.chart.width
                          .toString()
                          .split(/[0-9]+/g)
                          .pop();
                      if (('%' === a ? y.default.isNumber(i[0]) && (t.svgWidth = (i[0] * parseInt(e.chart.width)) / 100) : ('px' !== a && '' !== a) || (t.svgWidth = parseInt(e.chart.width)), 'auto' !== t.svgHeight && '' !== t.svgHeight))
                        if (
                          '%' ===
                          e.chart.height
                            .toString()
                            .split(/[0-9]+/g)
                            .pop()
                        ) {
                          var s = y.default.getDimensions(this.el.parentNode);
                          t.svgHeight = (s[1] * parseInt(e.chart.height)) / 100;
                        } else t.svgHeight = parseInt(e.chart.height);
                      else t.axisCharts ? (t.svgHeight = t.svgWidth / 1.61) : (t.svgHeight = t.svgWidth);
                      x.default.setAttrs(t.dom.Paper.node, { width: t.svgWidth, height: t.svgHeight });
                      var n = e.chart.sparkline.enabled ? 0 : 14;
                      (t.dom.Paper.node.parentNode.parentNode.style.minHeight = t.svgHeight + n + 'px'), (t.dom.elWrap.style.width = t.svgWidth + 'px'), (t.dom.elWrap.style.height = t.svgHeight + 'px');
                    },
                  },
                  {
                    key: 'shiftGraphPosition',
                    value: function () {
                      var t = this.w.globals,
                        e = t.translateY,
                        i = { transform: 'translate(' + t.translateX + ', ' + e + ')' };
                      x.default.setAttrs(t.dom.elGraphical.node, i);
                    },
                  },
                  {
                    key: 'coreCalculations',
                    value: function () {
                      new m.default(this.ctx).init();
                    },
                  },
                  {
                    key: 'resetGlobals',
                    value: function () {
                      var t = this,
                        e = this.w.globals;
                      (e.series = []),
                        (e.seriesCandleO = []),
                        (e.seriesCandleH = []),
                        (e.seriesCandleL = []),
                        (e.seriesCandleC = []),
                        (e.seriesPercent = []),
                        (e.seriesX = []),
                        (e.seriesZ = []),
                        (e.seriesNames = []),
                        (e.seriesTotals = []),
                        (e.stackedSeriesTotals = []),
                        (e.labels = []),
                        (e.timelineLabels = []),
                        (e.noLabelsProvided = !1),
                        (e.timescaleTicks = []),
                        (e.resizeTimer = null),
                        (e.selectionResizeTimer = null),
                        (e.seriesXvalues = (function () {
                          return t.w.config.series.map(function (t) {
                            return [];
                          });
                        })()),
                        (e.seriesYvalues = (function () {
                          return t.w.config.series.map(function (t) {
                            return [];
                          });
                        })()),
                        (e.delayedElements = []),
                        (e.pointsArray = []),
                        (e.dataLabelsRects = []),
                        (e.isXNumeric = !1),
                        (e.isDataXYZ = !1),
                        (e.maxY = -Number.MAX_VALUE),
                        (e.minY = Number.MIN_VALUE),
                        (e.minYArr = []),
                        (e.maxYArr = []),
                        (e.maxX = -Number.MAX_VALUE),
                        (e.minX = Number.MAX_VALUE),
                        (e.initialmaxX = -Number.MAX_VALUE),
                        (e.initialminX = Number.MAX_VALUE),
                        (e.maxDate = 0),
                        (e.minDate = Number.MAX_VALUE),
                        (e.minZ = Number.MAX_VALUE),
                        (e.maxZ = -Number.MAX_VALUE),
                        (e.yAxisScale = []),
                        (e.xAxisScale = null),
                        (e.xAxisTicksPositions = []),
                        (e.yLabelsCoords = []),
                        (e.yTitleCoords = []),
                        (e.xRange = 0),
                        (e.yRange = []),
                        (e.zRange = 0),
                        (e.dataPoints = 0);
                    },
                  },
                  {
                    key: 'isMultipleY',
                    value: function () {
                      if (this.w.config.yaxis.constructor === Array && this.w.config.yaxis.length > 1) return (this.w.config.chart.stacked = !1), (this.w.globals.isMultipleYAxis = !0), !0;
                    },
                  },
                  {
                    key: 'excludeCollapsedSeriesInYAxis',
                    value: function () {
                      var t = this,
                        e = this.w;
                      e.globals.ignoreYAxisIndexes = e.globals.collapsedSeries.map(function (e, i) {
                        if (t.w.globals.isMultipleYAxis) return e.index;
                      });
                    },
                  },
                  {
                    key: 'isMultiFormat',
                    value: function () {
                      return this.isFormatXY() || this.isFormat2DArray();
                    },
                  },
                  {
                    key: 'isFormatXY',
                    value: function () {
                      var t = this.w.config.series.slice(),
                        e = new w.default(this.ctx).getActiveConfigSeriesIndex();
                      if (void 0 !== t[e].data && t[e].data.length > 0 && null !== t[e].data[0] && void 0 !== t[e].data[0].x && null !== t[e].data[0]) return !0;
                    },
                  },
                  {
                    key: 'isFormat2DArray',
                    value: function () {
                      var t = this.w.config.series.slice(),
                        e = new w.default(this.ctx).getActiveConfigSeriesIndex();
                      if (void 0 !== t[e].data && t[e].data.length > 0 && void 0 !== t[e].data[0] && null !== t[e].data[0] && t[e].data[0].constructor === Array) return !0;
                    },
                  },
                  {
                    key: 'handleFormat2DArray',
                    value: function (t, e) {
                      for (var i = this.w.config, a = this.w.globals, s = 0; s < t[e].data.length; s++)
                        if ((void 0 !== t[e].data[s][1] && (Array.isArray(t[e].data[s][1]) && 4 === t[e].data[s][1].length ? this.twoDSeries.push(t[e].data[s][1][3]) : this.twoDSeries.push(t[e].data[s][1])), 'datetime' === i.xaxis.type)) {
                          var n = new Date(t[e].data[s][0]);
                          (n = new Date(n).getTime()), this.twoDSeriesX.push(n);
                        } else this.twoDSeriesX.push(t[e].data[s][0]);
                      for (var r = 0; r < t[e].data.length; r++) void 0 !== t[e].data[r][2] && (this.threeDSeries.push(t[e].data[r][2]), (a.isDataXYZ = !0));
                    },
                  },
                  {
                    key: 'handleFormatXY',
                    value: function (t, e) {
                      for (var i = this.w.config, a = this.w.globals, s = this.w.config.series.slice(), n = new d.default(this.ctx), r = 0; r < t[e].data.length; r++) {
                        void 0 !== t[e].data[r].y && (Array.isArray(t[e].data[r].y) && 4 === t[e].data[r].y.length ? this.twoDSeries.push(t[e].data[r].y[3]) : this.twoDSeries.push(t[e].data[r].y));
                        var o = 'string' == typeof t[e].data[r].x,
                          l = !!n.isValidDate(t[e].data[r].x.toString());
                        o || l ? (o ? ('datetime' === i.xaxis.type ? this.twoDSeriesX.push(n.parseDate(t[e].data[r].x)) : ((this.fallbackToCategory = !0), this.twoDSeriesX.push(t[e].data[r].x))) : 'datetime' === i.xaxis.type ? this.twoDSeriesX.push(n.parseDate(t[e].data[r].x.toString())) : this.twoDSeriesX.push(parseFloat(t[e].data[r].x))) : this.twoDSeriesX.push(t[e].data[r].x);
                      }
                      if (s[e].data[0] && void 0 !== s[e].data[0].z) {
                        for (var h = 0; h < s[e].data.length; h++) this.threeDSeries.push(s[e].data[h].z);
                        a.isDataXYZ = !0;
                      }
                    },
                  },
                  {
                    key: 'handleCandleStickData',
                    value: function (t, e) {
                      var i = this.w.globals,
                        a = {};
                      return this.isFormat2DArray() ? (a = this.handleCandleStickDataFormat('array', t, e)) : this.isFormatXY() && (a = this.handleCandleStickDataFormat('xy', t, e)), i.seriesCandleO.push(a.o), i.seriesCandleH.push(a.h), i.seriesCandleL.push(a.l), i.seriesCandleC.push(a.c), a;
                    },
                  },
                  {
                    key: 'handleCandleStickDataFormat',
                    value: function (t, e, i) {
                      var a = [],
                        s = [],
                        n = [],
                        r = [],
                        o = 'Please provide [Open, High, Low and Close] values in valid format. Read more https://apexcharts.com/docs/series/#candlestick';
                      if ('array' === t) {
                        if (4 !== e[i].data[0][1].length) throw new Error(o);
                        for (var l = 0; l < e[i].data.length; l++) a.push(e[i].data[l][1][0]), s.push(e[i].data[l][1][1]), n.push(e[i].data[l][1][2]), r.push(e[i].data[l][1][3]);
                      } else if ('xy' === t) {
                        if (4 !== e[i].data[0].y.length) throw new Error(o);
                        for (var h = 0; h < e[i].data.length; h++) a.push(e[i].data[h].y[0]), s.push(e[i].data[h].y[1]), n.push(e[i].data[h].y[2]), r.push(e[i].data[h].y[3]);
                      }
                      return { o: a, h: s, l: n, c: r };
                    },
                  },
                  {
                    key: 'parseDataAxisCharts',
                    value: function (t, e) {
                      for (var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.ctx, a = this.w.config, s = this.w.globals, n = new d.default(i), r = 0; r < e.length; r++) {
                        if (((this.twoDSeries = []), (this.twoDSeriesX = []), (this.threeDSeries = []), void 0 === e[r].data)) return void console.error("It is a possibility that you may have not included 'data' property in series.");
                        if (this.isMultiFormat()) this.isFormat2DArray() ? this.handleFormat2DArray(t, r) : this.isFormatXY() && this.handleFormatXY(t, r), ('candlestick' !== a.chart.type && 'candlestick' !== t[r].type) || this.handleCandleStickData(t, r), s.series.push(this.twoDSeries), s.labels.push(this.twoDSeriesX), s.seriesX.push(this.twoDSeriesX), this.fallbackToCategory || (s.isXNumeric = !0);
                        else {
                          if ('datetime' === a.xaxis.type) {
                            s.isXNumeric = !0;
                            for (var o = a.labels.length > 0 ? a.labels.slice() : a.xaxis.categories.slice(), l = 0; l < o.length; l++)
                              if ('string' == typeof o[l]) {
                                if (!n.isValidDate(o[l])) throw new Error('You have provided invalid Date format. Please provide a valid JavaScript Date');
                                this.twoDSeriesX.push(n.parseDate(o[l]));
                              }
                            s.seriesX.push(this.twoDSeriesX);
                          } else if ('numeric' === a.xaxis.type) {
                            s.isXNumeric = !0;
                            var h = a.labels.length > 0 ? a.labels.slice() : a.xaxis.categories.slice();
                            h.length > 0 && ((this.twoDSeriesX = h), s.seriesX.push(this.twoDSeriesX));
                          }
                          s.labels.push(this.twoDSeriesX), s.series.push(t[r].data);
                        }
                        s.seriesZ.push(this.threeDSeries), void 0 !== t[r].name ? s.seriesNames.push(t[r].name) : s.seriesNames.push('series-' + parseInt(r + 1));
                      }
                      return this.w;
                    },
                  },
                  {
                    key: 'parseDataNonAxisCharts',
                    value: function (t) {
                      var e = this.w.globals,
                        i = this.w.config;
                      (e.series = t.slice()), (e.seriesNames = i.labels.slice());
                      for (var a = 0; a < e.series.length; a++) void 0 === e.seriesNames[a] && e.seriesNames.push('series-' + (a + 1));
                      return this.w;
                    },
                  },
                  {
                    key: 'handleExternalLabelsData',
                    value: function (t) {
                      var e = this.w.config,
                        i = this.w.globals;
                      if (e.xaxis.categories.length > 0) i.labels = e.xaxis.categories;
                      else if (e.labels.length > 0) i.labels = e.labels.slice();
                      else if (this.fallbackToCategory) i.labels = i.labels[0];
                      else {
                        var a = [];
                        if (i.axisCharts) {
                          for (var s = 0; s < i.series[i.maxValsInArrayIndex].length; s++) a.push(s + 1);
                          for (var n = 0; n < t.length; n++) i.seriesX.push(a);
                          i.isXNumeric = !0;
                        }
                        if (0 === a.length) {
                          a = [0, 10];
                          for (var r = 0; r < t.length; r++) i.seriesX.push(a);
                        }
                        (i.labels = a), (i.noLabelsProvided = !0), 'category' === e.xaxis.type && (i.isXNumeric = !1);
                      }
                    },
                  },
                  {
                    key: 'parseData',
                    value: function (t) {
                      var e = this.w,
                        i = e.config,
                        a = e.globals;
                      this.excludeCollapsedSeriesInYAxis();
                      var s = i.series.slice();
                      if (((this.fallbackToCategory = !1), this.resetGlobals(), this.isMultipleY(), a.axisCharts ? this.parseDataAxisCharts(t, s) : this.parseDataNonAxisCharts(t), this.coreUtils.getLargestSeries(), 'bar' === i.chart.type && i.chart.stacked)) {
                        var n = new w.default(this.ctx);
                        a.series = n.setNullSeriesToZeroValues(a.series);
                      }
                      this.coreUtils.getSeriesTotals(), a.axisCharts && this.coreUtils.getStackedSeriesTotals(), this.coreUtils.getPercentSeries(), (!a.isXNumeric || ('numeric' === i.xaxis.type && 0 === i.labels.length && 0 === i.xaxis.categories.length)) && this.handleExternalLabelsData(t);
                    },
                  },
                  {
                    key: 'xySettings',
                    value: function () {
                      var t = null,
                        e = this.w;
                      if (e.globals.axisCharts && ('back' === e.config.xaxis.crosshairs.position && new c.default(this.ctx).drawXCrosshairs(), 'back' === e.config.yaxis[0].crosshairs.position && new c.default(this.ctx).drawYCrosshairs(), (t = this.coreUtils.getCalculatedRatios()), 'datetime' === e.config.xaxis.type && void 0 === e.config.xaxis.labels.formatter && isFinite(e.globals.minX) && isFinite(e.globals.maxX))) {
                        var i = new k.default(this.ctx),
                          a = i.calculateTimeScaleTicks(e.globals.minX, e.globals.maxX);
                        i.recalcDimensionsBasedOnFormat(a);
                      }
                      return t;
                    },
                  },
                  {
                    key: 'drawAxis',
                    value: function (t, e) {
                      var i = this.w.globals,
                        a = this.w.config,
                        s = new b.default(this.ctx),
                        n = new v.default(this.ctx);
                      if (i.axisCharts) {
                        var r = void 0,
                          o = void 0;
                        'bar' === t && a.plotOptions.bar.horizontal
                          ? ((o = n.drawYaxisInversed(0)), (r = s.drawXaxisInversed(0)), i.dom.elGraphical.add(r), i.dom.elGraphical.add(o))
                          : ((r = s.drawXaxis()),
                            i.dom.elGraphical.add(r),
                            a.yaxis.map(function (t, a) {
                              -1 === i.ignoreYAxisIndexes.indexOf(a) && ((o = n.drawYaxis(e, a)), i.dom.Paper.add(o));
                            }));
                      }
                      a.yaxis.map(function (t, e) {
                        -1 === i.ignoreYAxisIndexes.indexOf(e) && n.yAxisTitleRotate(e, t.opposite);
                      });
                    },
                  },
                  {
                    key: 'setupBrushHandler',
                    value: function () {
                      var t = this,
                        e = this.w;
                      if (e.config.chart.brush.enabled && 'function' != typeof e.config.chart.events.selection) {
                        var i = ApexCharts.getChartByID(e.config.chart.brush.target);
                        i.w.globals.brushSource = this.ctx;
                        var a = function () {
                          t.ctx._updateOptions({ chart: { selection: { xaxis: { min: i.w.globals.minX, max: i.w.globals.maxX } } } }, !1, !1);
                        };
                        'function' != typeof i.w.config.chart.events.zoomed &&
                          (i.w.config.chart.events.zoomed = function () {
                            a();
                          }),
                          'function' != typeof i.w.config.chart.events.scrolled &&
                            (i.w.config.chart.events.scrolled = function () {
                              a();
                            }),
                          (e.config.chart.events.selection = function (t, e) {
                            i._updateOptions({ xaxis: { min: e.xaxis.min, max: e.xaxis.max } }, !1, !1);
                          });
                      }
                    },
                  },
                ]),
                t
              );
            })();
          t.exports = S;
        },
        function (t, e, i) {
          function a(t) {
            return t && t.__esModule ? t : { default: t };
          }
          function s(t, e) {
            if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
          }
          Object.defineProperty(e, '__esModule', { value: !0 });
          var n = (function () {
              function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                  var a = e[i];
                  (a.enumerable = a.enumerable || !1), (a.configurable = !0), 'value' in a && (a.writable = !0), Object.defineProperty(t, a.key, a);
                }
              }
              return function (e, i, a) {
                return i && t(e.prototype, i), a && t(e, a), e;
              };
            })(),
            r = a(i(11)),
            o = a(i(0)),
            l = a(i(6)),
            h = (function () {
              function t(e, i) {
                s(this, t), (this.ctx = e), (this.w = e.w), (this.onLegendClick = this.onLegendClick.bind(this)), (this.onLegendHovered = this.onLegendHovered.bind(this));
              }
              return (
                n(t, [
                  {
                    key: 'init',
                    value: function () {
                      var t = this.w,
                        e = t.globals,
                        i = t.config;
                      if (((i.legend.showForSingleSeries && 1 === e.series.length) || e.series.length > 1 || !e.axisCharts) && i.legend.show) {
                        for (; e.dom.elLegendWrap.firstChild; ) e.dom.elLegendWrap.removeChild(e.dom.elLegendWrap.firstChild);
                        this.drawLegends(), this.appendToForeignObject(), 'bottom' === i.legend.position || 'top' === i.legend.position ? this.legendAlignHorizontal() : ('right' !== i.legend.position && 'left' !== i.legend.position) || this.legendAlignVertical();
                      }
                    },
                  },
                  {
                    key: 'appendToForeignObject',
                    value: function () {
                      var t = this.w.globals,
                        e = document.createElementNS(t.svgNS, 'foreignObject');
                      e.setAttribute('x', 0), e.setAttribute('y', 0), e.setAttribute('width', t.svgWidth), e.setAttribute('height', t.svgHeight), t.dom.elLegendWrap.setAttribute('xmlns', 'http://www.w3.org/1999/xhtml'), e.appendChild(t.dom.elLegendWrap), e.append(this.getLegendStyles()), t.dom.Paper.node.appendChild(e);
                    },
                  },
                  {
                    key: 'drawLegends',
                    value: function () {
                      var t = this,
                        e = this.w,
                        i = e.config.legend.fontFamily,
                        a = e.globals.seriesNames,
                        s = e.globals.colors.slice();
                      if ('heatmap' === e.config.chart.type) {
                        var n = e.config.plotOptions.heatmap.colorScale.ranges;
                        (a = n.map(function (t) {
                          return t.name ? t.name : t.from + ' - ' + t.to;
                        })),
                          (s = n.map(function (t) {
                            return t.color;
                          }));
                      }
                      for (var r = e.globals.legendFormatter, l = 0; l <= a.length - 1; l++) {
                        var h = r(a[l], { seriesIndex: l, w: e }),
                          c = !1;
                        if (e.globals.collapsedSeries.length > 0) for (var d = 0; d < e.globals.collapsedSeries.length; d++) e.globals.collapsedSeries[d].index === l && (c = !0);
                        var u = document.createElement('span');
                        u.classList.add('apexcharts-legend-marker');
                        var f = e.config.legend.markers.offsetX,
                          g = e.config.legend.markers.offsetY,
                          p = e.config.legend.markers.height,
                          x = e.config.legend.markers.width,
                          b = e.config.legend.markers.strokeWidth,
                          v = e.config.legend.markers.strokeColor,
                          m = e.config.legend.markers.radius,
                          y = u.style;
                        (y.background = s[l]), (y.height = Array.isArray(p) ? parseFloat(p[l]) + 'px' : parseFloat(p) + 'px'), (y.width = Array.isArray(x) ? parseFloat(x[l]) + 'px' : parseFloat(x) + 'px'), (y.left = Array.isArray(f) ? f[l] : f), (y.top = Array.isArray(g) ? g[l] : g), (y.borderWidth = Array.isArray(b) ? b[l] : b), (y.borderColor = Array.isArray(v) ? v[l] : v), (y.borderRadius = Array.isArray(m) ? parseFloat(m[l]) + 'px' : parseFloat(m) + 'px'), e.config.legend.markers.customHTML && (u.innerHTML = e.config.legend.markers.customHTML), o.default.setAttrs(u, { rel: l + 1, 'data:collapsed': c }), c && u.classList.add('inactive-legend');
                        var w = document.createElement('div'),
                          k = document.createElement('span');
                        k.classList.add('apexcharts-legend-text'), (k.innerHTML = h), (k.style.color = e.config.legend.labels.useSeriesColors ? e.globals.colors[l] : e.config.legend.labels.color), (k.style.fontSize = parseFloat(e.config.legend.labels.fontSize) + 'px'), (k.style.fontFamily = i || e.config.chart.fontFamily), (k.style.color = e.config.chart.foreColor), o.default.setAttrs(k, { rel: l + 1, 'data:collapsed': c }), w.appendChild(u), w.appendChild(k), e.globals.dom.elLegendWrap.appendChild(w), e.globals.dom.elLegendWrap.classList.add(e.config.legend.horizontalAlign), e.globals.dom.elLegendWrap.classList.add('position-' + e.config.legend.position), w.classList.add('apexcharts-legend-series'), (w.style.margin = e.config.legend.itemMargin.horizontal + 'px ' + e.config.legend.itemMargin.vertical + 'px'), (e.globals.dom.elLegendWrap.style.maxWidth = e.config.legend.maxWidth ? e.config.legend.maxWidth + 'px' : ''), (e.globals.dom.elLegendWrap.style.maxHeight = e.config.legend.maxHeight ? e.config.legend.maxHeight + 'px' : ''), o.default.setAttrs(w, { rel: l + 1, 'data:collapsed': c }), c && w.classList.add('inactiv`e-legend'), e.config.legend.onItemClick.toggleDataSeries || w.classList.add('no-click');
                      }
                      'heatmap' !== e.config.chart.type && e.config.legend.onItemClick.toggleDataSeries && e.globals.dom.elWrap.addEventListener('click', t.onLegendClick, !0), e.config.legend.onItemHover.highlightDataSeries && (e.globals.dom.elWrap.addEventListener('mousemove', t.onLegendHovered, !0), e.globals.dom.elWrap.addEventListener('mouseout', t.onLegendHovered, !0));
                    },
                  },
                  {
                    key: 'getLegendBBox',
                    value: function () {
                      var t = this.w.globals.dom.baseEl.querySelector('.apexcharts-legend').getBoundingClientRect(),
                        e = t.width;
                      return { clwh: t.height, clww: e };
                    },
                  },
                  {
                    key: 'setLegendWrapXY',
                    value: function (t, e) {
                      var i = this.w,
                        a = i.globals.dom.baseEl.querySelector('.apexcharts-legend'),
                        s = a.getBoundingClientRect(),
                        n = i.config.legend.containerMargin.left,
                        o = i.config.legend.containerMargin.top;
                      if ('bottom' === i.config.legend.position) o += i.globals.svgHeight - s.height / 2;
                      else if ('top' === i.config.legend.position) {
                        var l = new r.default(this.ctx),
                          h = l.getTitleSubtitleCoords('title').height,
                          c = l.getTitleSubtitleCoords('subtitle').height;
                        o = o + (h > 0 ? h - 10 : 0) + (c > 0 ? c - 10 : 0);
                      }
                      (n = n + t + i.config.legend.offsetX), (o = o + e + i.config.legend.offsetY), (a.style.position = 'absolute'), (a.style.top = o + 'px'), (a.style.left = n + 'px'), 'bottom' === i.config.legend.position ? ((a.style.top = 'auto'), (a.style.bottom = -i.config.legend.offsetY + 'px')) : 'right' === i.config.legend.position && ((a.style.left = 'auto'), (a.style.right = 25 + i.config.legend.offsetX + 'px')), a.style.maxWidth && (a.style.maxWidth = i.config.legend.maxWidth), a.style.maxHeight && (a.style.maxHeight = i.config.legend.maxHeight);
                    },
                  },
                  {
                    key: 'legendAlignHorizontal',
                    value: function () {
                      var t = this.w;
                      t.globals.dom.baseEl.querySelector('.apexcharts-legend').style.right = 0;
                      var e = this.getLegendBBox(),
                        i = new r.default(this.ctx),
                        a = i.getTitleSubtitleCoords('title'),
                        s = i.getTitleSubtitleCoords('subtitle'),
                        n = 0;
                      'bottom' === t.config.legend.position ? (n = -e.clwh / 1.8) : 'top' === t.config.legend.position && (n = a.height + s.height + t.config.title.margin + t.config.subtitle.margin - 15), this.setLegendWrapXY(20, n);
                    },
                  },
                  {
                    key: 'legendAlignVertical',
                    value: function () {
                      var t = this.w,
                        e = this.getLegendBBox(),
                        i = 0;
                      'left' === t.config.legend.position && (i = 20), 'right' === t.config.legend.position && (i = t.globals.svgWidth - e.clww - 10), console.log(e), this.setLegendWrapXY(i, 20);
                    },
                  },
                  {
                    key: 'onLegendHovered',
                    value: function (t) {
                      var e = this.w,
                        i = t.target.classList.contains('apexcharts-legend-text') || t.target.classList.contains('apexcharts-legend-marker');
                      'heatmap' !== e.config.chart.type ? !t.target.classList.contains('inactive-legend') && i && new l.default(this.ctx).toggleSeriesOnHover(t, t.target) : i && new l.default(this.ctx).highlightRangeInSeries(t, t.target);
                    },
                  },
                  {
                    key: 'onLegendClick',
                    value: function (t) {
                      if (t.target.classList.contains('apexcharts-legend-text') || t.target.classList.contains('apexcharts-legend-marker')) {
                        var e = parseInt(t.target.getAttribute('rel')) - 1,
                          i = 'true' === t.target.getAttribute('data:collapsed'),
                          a = this.w.config.chart.events.legendClick;
                        'function' == typeof a && a(this.ctx, e, this.w), this.ctx.fireEvent('legendClick', [this.ctx, e, this.w]), this.toggleDataSeries(e, i);
                      }
                    },
                  },
                  {
                    key: 'getLegendStyles',
                    value: function () {
                      var t = document.createElement('style');
                      t.setAttribute('type', 'text/css');
                      var e = document.createTextNode('\n    \n      .apexcharts-legend {\n        display: flex;\n        overflow: auto;\n        padding: 0 10px;\n      }\n\n      .apexcharts-legend.position-bottom, .apexcharts-legend.position-top {\n        flex-wrap: wrap\n      }\n      .apexcharts-legend.position-right, .apexcharts-legend.position-left {\n        flex-direction: column;\n        bottom: 0;\n      }\n\n      .apexcharts-legend.position-bottom.left, .apexcharts-legend.position-top.left, .apexcharts-legend.position-right, .apexcharts-legend.position-left {\n        justify-content: flex-start;\n      }\n\n      .apexcharts-legend.position-bottom.center, .apexcharts-legend.position-top.center {\n        justify-content: center;  \n      }\n\n      .apexcharts-legend.position-bottom.right, .apexcharts-legend.position-top.right {\n        justify-content: flex-end;\n      }\n\n      .apexcharts-legend-series {\n        cursor: pointer;\n      }\n\n      .apexcharts-legend.position-bottom .apexcharts-legend-series, .apexcharts-legend.position-top .apexcharts-legend-series{\n        display: flex;\n        align-items: center;\n      }\n\n      .apexcharts-legend-text {\n        position: relative;\n        font-size: 14px;\n      }\n\n      .apexcharts-legend-marker {\n        position: relative;\n        display: inline-block;\n        cursor: pointer;\n        margin-right: 3px;\n      }\n      \n      .apexcharts-legend.right .apexcharts-legend-series, .apexcharts-legend.left .apexcharts-legend-series{\n        display: inline-block;\n      }\n\n      .apexcharts-legend-series.no-click {\n        cursor: auto;\n      }\n\n      .inactive-legend {\n        opacity: 0.45;\n      }');
                      return t.appendChild(e), t;
                    },
                  },
                  {
                    key: 'resetToggleDataSeries',
                    value: function () {
                      var t = this.w,
                        e = [];
                      if (
                        (t.globals.axisCharts
                          ? t.globals.dom.baseEl.querySelectorAll('.apexcharts-series[data\\:realIndex]').forEach(function (t) {
                              e.push(parseInt(t.getAttribute('data:realIndex')));
                            })
                          : t.globals.dom.baseEl.querySelectorAll('.apexcharts-series[rel]').forEach(function (t) {
                              e.push(parseInt(t.getAttribute('rel')) - 1);
                            }),
                        e.sort(),
                        t.globals.collapsedSeries.length > 0)
                      ) {
                        for (var i = t.globals.risingSeries.slice(), a = t.config.series.slice(), s = 0; s < t.globals.collapsedSeries.length; s++) {
                          var n = e.indexOf(t.globals.collapsedSeries[s].index);
                          -1 !== n && (t.globals.axisCharts ? (a[n].data = t.globals.collapsedSeries.slice()[s].data.slice()) : (a[n] = t.globals.collapsedSeries.slice()[s].data), i.push(n));
                        }
                        (t.globals.collapsedSeries = []), (t.globals.collapsedSeriesIndices = []), (t.globals.risingSeries = i), (t.config.series = a), this.ctx._updateSeries(t.config.series, t.config.chart.animations.dynamicAnimation.enabled);
                      }
                    },
                  },
                  {
                    key: 'toggleDataSeries',
                    value: function (t, e) {
                      var i = this.w;
                      if (i.globals.axisCharts || 'radialBar' === i.config.chart.type) {
                        i.globals.resized = !0;
                        var a = null,
                          s = null;
                        if (((i.globals.risingSeries = []), i.globals.axisCharts ? ((a = i.globals.dom.baseEl.querySelector(".apexcharts-series[data\\:realIndex='" + t + "']")), (s = parseInt(a.getAttribute('data:realIndex')))) : ((a = i.globals.dom.baseEl.querySelector(".apexcharts-series[rel='" + (t + 1) + "']")), (s = parseInt(a.getAttribute('rel')) - 1)), e)) {
                          if (i.globals.collapsedSeries.length > 0) for (var n = 0; n < i.globals.collapsedSeries.length; n++) i.globals.collapsedSeries[n].index === s && (i.globals.axisCharts ? ((i.config.series[s].data = i.globals.collapsedSeries[n].data.slice()), i.globals.collapsedSeries.splice(n, 1), i.globals.collapsedSeriesIndices.splice(n, 1), i.globals.risingSeries.push(s)) : ((i.config.series[s] = i.globals.collapsedSeries[n].data), i.globals.collapsedSeries.splice(n, 1), i.globals.collapsedSeriesIndices.splice(n, 1), i.globals.risingSeries.push(s)), this.ctx._updateSeries(i.config.series, i.config.chart.animations.dynamicAnimation.enabled));
                        } else {
                          if (i.globals.axisCharts) {
                            i.globals.collapsedSeries.push({
                              index: s,
                              data: i.config.series[s].data.slice(),
                              type: a.parentNode.className.baseVal.split('-')[1],
                            }),
                              i.globals.collapsedSeriesIndices.push(s);
                            var r = i.globals.risingSeries.indexOf(s);
                            i.globals.risingSeries.splice(r, 1), (i.config.series[s].data = []);
                          } else i.globals.collapsedSeries.push({ index: s, data: i.config.series[s] }), i.globals.collapsedSeriesIndices.push(s), (i.config.series[s] = 0);
                          for (var o = a.childNodes, l = 0; l < o.length; l++) o[l].classList.contains('apexcharts-series-markers-wrap') && (o[l].classList.contains('apexcharts-hide') ? o[l].classList.remove('apexcharts-hide') : o[l].classList.add('apexcharts-hide'));
                          (i.globals.allSeriesCollapsed = i.globals.collapsedSeries.length === i.globals.series.length), this.ctx._updateSeries(i.config.series, i.config.chart.animations.dynamicAnimation.enabled);
                        }
                      } else i.globals.dom.Paper.select(" .apexcharts-series[rel='" + (t + 1) + "'] path").fire('click');
                    },
                  },
                ]),
                t
              );
            })();
          e.default = h;
        },
        function (t, e, i) {
          function a(t) {
            return t && t.__esModule ? t : { default: t };
          }
          function s(t, e) {
            if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
          }
          var n = (function () {
              function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                  var a = e[i];
                  (a.enumerable = a.enumerable || !1), (a.configurable = !0), 'value' in a && (a.writable = !0), Object.defineProperty(t, a.key, a);
                }
              }
              return function (e, i, a) {
                return i && t(e.prototype, i), a && t(e, a), e;
              };
            })(),
            r = a(i(14)),
            o = a(i(1)),
            l = a(i(3)),
            h = (function () {
              function t(e) {
                s(this, t), (this.ctx = e), (this.w = e.w);
              }
              return (
                n(t, [
                  {
                    key: 'checkResponsiveConfig',
                    value: function (t) {
                      var e = this.w,
                        i = e.config;
                      if (void 0 !== i.responsive) {
                        for (var a = {}, s = new r.default(a), n = 0; n < i.responsive.length; n++) {
                          if ((window.innerWidth > 0 ? window.innerWidth : screen.width) < i.responsive[n].breakpoint) {
                            (a = l.default.extendArrayProps(s, i.responsive[n].options)), (a = o.default.extend(e.config, a)), this.overrideResponsiveOptions(a);
                            break;
                          }
                          var h = l.default.extendArrayProps(s, e.globals.initialConfig);
                          (a = o.default.extend(e.config, h)), this.overrideResponsiveOptions(a);
                        }
                        if (null !== t) {
                          var c = l.default.extendArrayProps(s, t);
                          (c = o.default.extend(e.config, c)), this.overrideResponsiveOptions(c);
                        }
                      }
                    },
                  },
                  {
                    key: 'overrideResponsiveOptions',
                    value: function (t) {
                      var e = new r.default(t).init();
                      this.w.config = e;
                    },
                  },
                ]),
                t
              );
            })();
          t.exports = h;
        },
        function (t, e, i) {
          function a(t, e) {
            if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
          }
          Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
          var s = (function () {
              function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                  var a = e[i];
                  (a.enumerable = a.enumerable || !1), (a.configurable = !0), 'value' in a && (a.writable = !0), Object.defineProperty(t, a.key, a);
                }
              }
              return function (e, i, a) {
                return i && t(e.prototype, i), a && t(e, a), e;
              };
            })(),
            n = (function (t) {
              return t && t.__esModule ? t : { default: t };
            })(i(1)),
            r = (function () {
              function t(e) {
                a(this, t), (this.ctx = e), (this.w = e.w);
              }
              return (
                s(t, [
                  {
                    key: 'niceScale',
                    value: function (t, e) {
                      var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10;
                      if ((t === Number.MIN_VALUE && 0 === e) || (!n.default.isNumber(t) && !n.default.isNumber(e))) return (t = 0), (e = 1), (i = 1), this.linearScale(t, e, i);
                      t > e ? (console.warn('yaxis.min cannot be greater than yaxis.max'), (e = t + 0.1)) : t === e && ((t = 0 === t ? 0 : t - 0.1), (e = 0 === e ? 2 : e + 0.1));
                      var a = [],
                        s = e - t,
                        r = i + 1;
                      r < 2 ? (r = 2) : r > 2 && (r -= 2);
                      for (var o = s / r, l = Math.floor(n.default.log10(o)), h = Math.pow(10, l), c = parseInt(o / h) * h, d = c * Math.floor(t / c), u = c * Math.ceil(e / c), f = d; ; ) if ((a.push(f), (f += c) > u)) break;
                      if (void 0 === this.w.config.yaxis[0].max && void 0 === this.w.config.yaxis[0].min) return { result: a, niceMin: a[0], niceMax: a[a.length - 1] };
                      var g = t;
                      (a = []).push(g);
                      for (var p = Math.abs(e - t) / i, x = 0; x <= i - 1; x++) (g += p), a.push(g);
                      return { result: a, niceMin: a[0], niceMax: a[a.length - 1] };
                    },
                  },
                  {
                    key: 'linearScale',
                    value: function (t, e) {
                      var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
                        a = Math.abs(e - t) / i;
                      i === Number.MAX_VALUE && ((i = 10), (a = 1));
                      for (var s = [], n = t; i >= 0; ) s.push(n), (n += a), (i -= 1);
                      return { result: s, niceMin: s[0], niceMax: s[s.length - 1] };
                    },
                  },
                  {
                    key: 'logarithmicScale',
                    value: function (t, e, i, a) {
                      var s = this.w;
                      (e < 0 || e === Number.MIN_VALUE) && (e = 0.01);
                      for (var r = s.config.yaxis[t].logBase, o = Math.log(e) / Math.log(r), l = Math.log(i) / Math.log(r), h = Math.abs(i - e) / a, c = [], d = e; a >= 0; ) c.push(d), (d += h), (a -= 1);
                      var u = c.map(function (t, a) {
                        t <= 0 && (t = 0.01);
                        var s = (l - o) / (i - e),
                          h = Math.pow(r, o + s * (t - o));
                        return Math.round(h / n.default.roundToBase(h, r)) * n.default.roundToBase(h, r);
                      });
                      return 0 === u[0] && (u[0] = 1), { result: u, niceMin: u[0], niceMax: u[u.length - 1] };
                    },
                  },
                  {
                    key: 'setYScaleForIndex',
                    value: function (t, e, i) {
                      var a = this.w.globals,
                        s = this.w.config,
                        r = s.yaxis[t];
                      void 0 === a.yAxisScale[t] && (a.yAxisScale[t] = []), s.yaxis[t].logarithmic ? ((a.allSeriesCollapsed = !1), (a.yAxisScale[t] = this.logarithmicScale(t, e, i, r.tickAmount ? r.tickAmount : Math.floor(Math.log10(i))))) : i !== -Number.MAX_VALUE && n.default.isNumber(i) ? ((a.allSeriesCollapsed = !1), (a.yAxisScale[t] = this.niceScale(e, i, r.tickAmount ? r.tickAmount : 6))) : (a.yAxisScale[t] = this.linearScale(0, 5, 5));
                    },
                  },
                  {
                    key: 'setMultipleYScales',
                    value: function () {
                      var t = this,
                        e = this.w.globals,
                        i = this.w.config,
                        a = e.minYArr.concat([]),
                        s = e.maxYArr.concat([]),
                        n = [];
                      i.yaxis.forEach(function (r, o) {
                        var l = o;
                        i.series.forEach(function (t, i) {
                          t.name === r.seriesName && -1 === e.collapsedSeriesIndices.indexOf(i) && ((l = i), o !== i ? n.push({ index: i, similarIndex: o, alreadyExists: !0 }) : n.push({ index: i }));
                        });
                        var h = a[l],
                          c = s[l];
                        t.setYScaleForIndex(o, h, c);
                      }),
                        this.sameScaleInMultipleAxes(a, s, n);
                    },
                  },
                  {
                    key: 'sameScaleInMultipleAxes',
                    value: function (t, e, i) {
                      function a(t, e) {
                        return t.filter(function (t) {
                          return -1 !== e.indexOf(t);
                        });
                      }
                      var s = this,
                        n = this.w.config,
                        r = [];
                      i.forEach(function (t) {
                        t.alreadyExists && (void 0 === r[t.index] && (r[t.index] = []), r[t.index].push(t.index), r[t.index].push(t.similarIndex));
                      }),
                        r.forEach(function (t, e) {
                          r.forEach(function (i, s) {
                            e !== s && a(t, i).length > 0 && (r[e] = r[e].concat(r[s]));
                          });
                        });
                      var o = r
                        .map(function (t) {
                          return t.filter(function (e, i) {
                            return t.indexOf(e) === i;
                          });
                        })
                        .map(function (t) {
                          return t.sort();
                        });
                      r = r.filter(function (t) {
                        return !!t;
                      });
                      var l = o.slice(),
                        h = l.map(function (t) {
                          return JSON.stringify(t);
                        });
                      l = l.filter(function (t, e) {
                        return h.indexOf(JSON.stringify(t)) === e;
                      });
                      var c = [],
                        d = [];
                      t.forEach(function (t, i) {
                        l.forEach(function (a, s) {
                          a.includes(i) && (void 0 === c[s] && ((c[s] = []), (d[s] = [])), c[s].push({ key: i, value: t }), d[s].push({ key: i, value: e[i] }));
                        });
                      });
                      var u = Array(l.length)
                          .fill()
                          .map(function (t, e) {
                            return Number.MAX_SAFE_INTEGER;
                          }),
                        f = Array(l.length)
                          .fill()
                          .map(function (t, e) {
                            return Number.MIN_SAFE_INTEGER;
                          });
                      c.forEach(function (t, e) {
                        t.forEach(function (t, i) {
                          u[e] = Math.min(t.value, u[e]);
                        });
                      }),
                        d.forEach(function (t, e) {
                          t.forEach(function (t, i) {
                            f[e] = Math.max(t.value, f[e]);
                          });
                        }),
                        t.forEach(function (t, e) {
                          d.forEach(function (t, i) {
                            var a = u[i],
                              r = f[i];
                            t.forEach(function (i, o) {
                              t[o].key === e && (void 0 !== n.yaxis[e].min && (a = n.yaxis[e].min), void 0 !== n.yaxis[e].max && (r = n.yaxis[e].max), s.setYScaleForIndex(e, a, r));
                            });
                          });
                        });
                    },
                  },
                ]),
                t
              );
            })();
          e.default = r;
        },
        function (t, e, i) {
          function a(t, e) {
            if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
          }
          var s = (function () {
              function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                  var a = e[i];
                  (a.enumerable = a.enumerable || !1), (a.configurable = !0), 'value' in a && (a.writable = !0), Object.defineProperty(t, a.key, a);
                }
              }
              return function (e, i, a) {
                return i && t(e.prototype, i), a && t(e, a), e;
              };
            })(),
            n = (function (t) {
              return t && t.__esModule ? t : { default: t };
            })(i(1)),
            r = (function () {
              function t(e) {
                a(this, t), (this.ctx = e), (this.w = e.w), (this.colors = []);
              }
              return (
                s(t, [
                  {
                    key: 'init',
                    value: function () {
                      this.setDefaultColors();
                    },
                  },
                  {
                    key: 'setDefaultColors',
                    value: function () {
                      var t = this.w,
                        e = new n.default();
                      if ((void 0 === t.config.colors ? (t.globals.colors = this.predefined()) : (t.globals.colors = t.config.colors), t.config.theme.monochrome.enabled)) {
                        var i = [],
                          a = t.globals.series.length;
                        t.config.plotOptions.bar.distributed && 'bar' === t.config.chart.type && (a = t.globals.series[0].length * t.globals.series.length);
                        for (var s = t.config.theme.monochrome.color, r = 1 / (a / t.config.theme.monochrome.shadeIntensity), o = t.config.theme.monochrome.shadeTo, l = 0, h = 0; h < a; h++) {
                          var c = void 0;
                          'dark' === o ? ((c = e.shadeColor(-1 * l, s)), (l += r)) : ((c = e.shadeColor(l, s)), (l += r)), i.push(c);
                        }
                        t.globals.colors = i.slice();
                      }
                      var d = t.globals.colors.slice();
                      this.pushExtraColors(t.globals.colors), void 0 === t.config.stroke.colors ? (t.globals.stroke.colors = d) : (t.globals.stroke.colors = t.config.stroke.colors), this.pushExtraColors(t.globals.stroke.colors), void 0 === t.config.fill.colors ? (t.globals.fill.colors = d) : (t.globals.fill.colors = t.config.fill.colors), this.pushExtraColors(t.globals.fill.colors), void 0 === t.config.dataLabels.style.colors ? (t.globals.dataLabels.style.colors = d) : (t.globals.dataLabels.style.colors = t.config.dataLabels.style.colors), this.pushExtraColors(t.globals.dataLabels.style.colors), void 0 === t.config.markers.colors ? (t.globals.markers.colors = d) : (t.globals.markers.colors = t.config.markers.colors), this.pushExtraColors(t.globals.markers.colors);
                    },
                  },
                  {
                    key: 'pushExtraColors',
                    value: function (t) {
                      var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        i = this.w,
                        a = i.globals.series.length;
                      if (((e = null === e && (('bar' === i.config.chart.type && i.config.plotOptions.bar.distributed) || ('heatmap' === i.config.chart.type && i.config.plotOptions.heatmap.colorScale.inverse))) && (a = i.globals.series[0].length * i.globals.series.length), t.length < a)) for (var s = a - t.length, n = 0; n < s; n++) t.push(t[n]);
                    },
                  },
                  {
                    key: 'predefined',
                    value: function () {
                      switch (this.w.config.theme.palette) {
                        case 'palette1':
                          this.colors = ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0'];
                          break;
                        case 'palette2':
                          this.colors = ['#3f51b5', '#03a9f4', '#4caf50', '#f9ce1d', '#FF9800'];
                          break;
                        case 'palette3':
                          this.colors = ['#33b2df', '#546E7A', '#d4526e', '#13d8aa', '#A5978B'];
                          break;
                        case 'palette4':
                          this.colors = ['#546E7A', '#4ecdc4', '#c7f464', '#81D4FA', '#fd6a6a'];
                          break;
                        case 'palette5':
                          this.colors = ['#2b908f', '#f9a3a4', '#90ee7e', '#fa4443', '#69d2e7'];
                          break;
                        case 'palette6':
                          this.colors = ['#449DD1', '#F86624', '#EA3546', '#662E9B', '#C5D86D'];
                          break;
                        case 'palette7':
                          this.colors = ['#D7263D', '#1B998B', '#2E294E', '#F46036', '#E2C044'];
                          break;
                        case 'palette8':
                          this.colors = ['#662E9B', '#F86624', '#F9C80E', '#EA3546', '#43BCCD'];
                          break;
                        case 'palette9':
                          this.colors = ['#5C4742', '#A5978B', '#8D5B4C', '#5A2A27', '#C4BBAF'];
                          break;
                        case 'palette10':
                          this.colors = ['#A300D6', '#7D02EB', '#5653FE', '#2983FF', '#00B1F2'];
                          break;
                        default:
                          this.colors = ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0'];
                      }
                      return this.colors;
                    },
                  },
                ]),
                t
              );
            })();
          t.exports = r;
        },
        function (t, e, i) {
          function a(t, e) {
            if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
          }
          Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
          var s = (function () {
              function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                  var a = e[i];
                  (a.enumerable = a.enumerable || !1), (a.configurable = !0), 'value' in a && (a.writable = !0), Object.defineProperty(t, a.key, a);
                }
              }
              return function (e, i, a) {
                return i && t(e.prototype, i), a && t(e, a), e;
              };
            })(),
            n = (function (t) {
              return t && t.__esModule ? t : { default: t };
            })(i(0)),
            r = (function () {
              function t(e) {
                a(this, t), (this.ctx = e), (this.w = e.w);
              }
              return (
                s(t, [
                  {
                    key: 'draw',
                    value: function () {
                      this.drawTitleSubtitle('title'), this.drawTitleSubtitle('subtitle');
                    },
                  },
                  {
                    key: 'drawTitleSubtitle',
                    value: function (t) {
                      var e = this.w,
                        i = 'title' === t ? e.config.title : e.config.subtitle,
                        a = e.globals.svgWidth / 2,
                        s = i.offsetY,
                        r = 'middle';
                      if (('left' === i.align ? ((a = 10), (r = 'start')) : 'right' === i.align && ((a = e.globals.svgWidth - 10), (r = 'end')), (a += i.offsetX), (s = s + parseInt(i.style.fontSize) + 2), void 0 !== i.text)) {
                        var o = new n.default(this.ctx).drawText({
                          x: a,
                          y: s,
                          text: i.text,
                          textAnchor: r,
                          fontSize: i.style.fontSize,
                          fontFamily: i.style.fontFamily,
                          foreColor: i.style.color,
                          opacity: 1,
                        });
                        o.node.setAttribute('class', 'apexcharts-' + t + '-text'), e.globals.dom.Paper.add(o);
                      }
                    },
                  },
                ]),
                t
              );
            })();
          e.default = r;
        },
        function (t, e, i) {
          function a(t) {
            return t && t.__esModule ? t : { default: t };
          }
          function s(t, e) {
            if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
          }
          function n(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || ('object' != typeof e && 'function' != typeof e) ? t : e;
          }
          function r(t, e) {
            if ('function' != typeof e && null !== e) throw new TypeError('Super expression must either be null or a function, not ' + typeof e);
            (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } })), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
          }
          var o = (function () {
              function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                  var a = e[i];
                  (a.enumerable = a.enumerable || !1), (a.configurable = !0), 'value' in a && (a.writable = !0), Object.defineProperty(t, a.key, a);
                }
              }
              return function (e, i, a) {
                return i && t(e.prototype, i), a && t(e, a), e;
              };
            })(),
            l = a(i(0)),
            h = a(i(1)),
            c = (function (t) {
              function e(t) {
                s(this, e);
                var i = n(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
                return (i.ctx = t), (i.w = t.w), (i.dragged = !1), (i.graphics = new l.default(i.ctx)), (i.eventList = ['mousedown', 'mousemove', 'touchstart', 'touchmove', 'mouseup', 'touchend']), (i.clientX = 0), (i.clientY = 0), (i.startX = 0), (i.endX = 0), (i.dragX = 0), (i.startY = 0), (i.endY = 0), (i.dragY = 0), i;
              }
              return (
                r(e, t),
                o(e, [
                  {
                    key: 'init',
                    value: function (t) {
                      var e = t.xyRatios,
                        i = this.w,
                        a = this;
                      (this.xyRatios = e), (this.zoomRect = this.graphics.drawRect(0, 0, 0, 0)), (this.selectionRect = this.graphics.drawRect(0, 0, 0, 0)), (this.gridRect = i.globals.dom.baseEl.querySelector('.apexcharts-grid')), this.zoomRect.node.classList.add('apexcharts-zoom-rect'), this.selectionRect.node.classList.add('apexcharts-selection-rect'), i.globals.dom.elGraphical.add(this.zoomRect), i.globals.dom.elGraphical.add(this.selectionRect), 'x' === i.config.chart.selection.type ? (this.slDraggableRect = this.selectionRect.draggable({ minX: 0, minY: 0, maxX: i.globals.gridWidth, maxY: i.globals.gridHeight }).on('dragmove', this.selectionDragging.bind(this, 'dragging'))) : 'y' === i.config.chart.selection.type ? (this.slDraggableRect = this.selectionRect.draggable({ minX: 0, maxX: i.globals.gridWidth }).on('dragmove', this.selectionDragging.bind(this, 'dragging'))) : (this.slDraggableRect = this.selectionRect.draggable().on('dragmove', this.selectionDragging.bind(this, 'dragging'))), this.preselectedSelection(), (this.hoverArea = i.globals.dom.baseEl.querySelector(i.globals.chartClass)), this.hoverArea.classList.add('zoomable');
                      var s = !0,
                        n = !1,
                        r = void 0;
                      try {
                        for (var o, l = this.eventList[Symbol.iterator](); !(s = (o = l.next()).done); s = !0) {
                          var h = o.value;
                          this.hoverArea.addEventListener(h, a.svgMouseEvents.bind(a, e), { capture: !1, passive: !0 });
                        }
                      } catch (t) {
                        (n = !0), (r = t);
                      } finally {
                        try {
                          !s && l.return && l.return();
                        } finally {
                          if (n) throw r;
                        }
                      }
                    },
                  },
                  {
                    key: 'destroy',
                    value: function () {
                      var t = this,
                        e = !0,
                        i = !1,
                        a = void 0;
                      try {
                        for (var s, n = this.eventList[Symbol.iterator](); !(e = (s = n.next()).done); e = !0) {
                          var r = s.value;
                          this.hoverArea && this.hoverArea.removeEventListener(r, t.svgMouseEvents.bind(t, t.xyRatios), { capture: !1, passive: !0 });
                        }
                      } catch (t) {
                        (i = !0), (a = t);
                      } finally {
                        try {
                          !e && n.return && n.return();
                        } finally {
                          if (i) throw a;
                        }
                      }
                      this.slDraggableRect && (this.slDraggableRect.draggable(!1), this.slDraggableRect.off(), this.selectionRect.off()), (this.selectionRect = null), (this.zoomRect = null), (this.gridRect = null);
                    },
                  },
                  {
                    key: 'svgMouseEvents',
                    value: function (t, e) {
                      var i = this.w,
                        a = this,
                        s = this.ctx.toolbar,
                        n = i.globals.zoomEnabled ? i.config.chart.zoom.type : i.config.chart.selection.type;
                      if ((e.shiftKey ? ((this.shiftWasPressed = !0), s.enablePanning()) : this.shiftWasPressed && (s.enableZooming(), (this.shiftWasPressed = !1)), !(e.target.classList.contains('apexcharts-selection-rect') || e.target.parentNode.classList.contains('apexcharts-toolbar')))) {
                        if (((a.clientX = 'touchmove' === e.type || 'touchstart' === e.type ? e.touches[0].clientX : 'touchend' === e.type ? e.changedTouches[0].clientX : e.clientX), (a.clientY = 'touchmove' === e.type || 'touchstart' === e.type ? e.touches[0].clientY : 'touchend' === e.type ? e.changedTouches[0].clientY : e.clientY), 'mousedown' === e.type && 1 === e.which)) {
                          var r = a.gridRect.getBoundingClientRect();
                          (a.startX = a.clientX - r.left), (a.startY = a.clientY - r.top), (a.dragged = !1), (a.w.globals.mousedown = !0);
                        }
                        if (((('mousemove' === e.type && 1 === e.which) || 'touchmove' === e.type) && ((a.dragged = !0), i.globals.panEnabled ? ((i.globals.selection = null), a.w.globals.mousedown && a.panDragging({ context: a, zoomtype: n, xyRatios: t })) : ((a.w.globals.mousedown && i.globals.zoomEnabled) || (a.w.globals.mousedown && i.globals.selectionEnabled)) && (a.selection = a.selectionDrawing({ context: a, zoomtype: n }))), 'mouseup' === e.type || 'touchend' === e.type)) {
                          var o = a.gridRect.getBoundingClientRect();
                          a.w.globals.mousedown && ((a.endX = a.clientX - o.left), (a.endY = a.clientY - o.top), (a.dragX = Math.abs(a.endX - a.startX)), (a.dragY = Math.abs(a.endY - a.startY)), (i.globals.zoomEnabled || i.globals.selectionEnabled) && a.selectionDrawn({ context: a, zoomtype: n })), i.globals.zoomEnabled && a.hideSelectionRect(this.selectionRect), (a.dragged = !1), (a.w.globals.mousedown = !1);
                        }
                        this.makeSelectionRectDraggable();
                      }
                    },
                  },
                  {
                    key: 'makeSelectionRectDraggable',
                    value: function () {
                      var t = this.w;
                      if (this.selectionRect) {
                        var e = this.selectionRect.node.getBoundingClientRect();
                        e.width > 0 &&
                          e.height > 0 &&
                          this.slDraggableRect
                            .selectize()
                            .resize({ constraint: { minX: 0, minY: 0, maxX: t.globals.gridWidth, maxY: t.globals.gridHeight } })
                            .on('resizing', this.selectionDragging.bind(this, 'resizing'));
                      }
                    },
                  },
                  {
                    key: 'preselectedSelection',
                    value: function () {
                      var t = this.w,
                        e = this.xyRatios;
                      if (!t.globals.zoomEnabled)
                        if (void 0 !== t.globals.selection && null !== t.globals.selection) this.drawSelectionRect(t.globals.selection);
                        else if (void 0 !== t.config.chart.selection.xaxis.min && void 0 !== t.config.chart.selection.xaxis.max) {
                          var i = (t.config.chart.selection.xaxis.min - t.globals.minX) / e.xRatio,
                            a = {
                              x: i,
                              y: 0,
                              width: t.globals.gridWidth - (t.globals.maxX - t.config.chart.selection.xaxis.max) / e.xRatio - i,
                              height: t.globals.gridHeight,
                              translateX: 0,
                              translateY: 0,
                              selectionEnabled: !0,
                            };
                          this.drawSelectionRect(a),
                            this.makeSelectionRectDraggable(),
                            'function' == typeof t.config.chart.events.selection &&
                              t.config.chart.events.selection(this.ctx, {
                                xaxis: { min: t.config.chart.selection.xaxis.min, max: t.config.chart.selection.xaxis.max },
                                yaxis: {},
                              });
                        }
                    },
                  },
                  {
                    key: 'drawSelectionRect',
                    value: function (t) {
                      var e = t.x,
                        i = t.y,
                        a = t.width,
                        s = t.height,
                        n = t.translateX,
                        r = t.translateY,
                        o = this.w,
                        h = this.zoomRect,
                        c = this.selectionRect;
                      if (this.dragged || null !== o.globals.selection) {
                        var d = { transform: 'translate(' + n + ', ' + r + ')' };
                        o.globals.zoomEnabled &&
                          this.dragged &&
                          (h.attr({
                            x: e,
                            y: i,
                            width: a,
                            height: s,
                            fill: o.config.chart.zoom.zoomedArea.fill.color,
                            'fill-opacity': o.config.chart.zoom.zoomedArea.fill.opacity,
                            stroke: o.config.chart.zoom.zoomedArea.stroke.color,
                            'stroke-width': o.config.chart.zoom.zoomedArea.stroke.width,
                            'stroke-opacity': o.config.chart.zoom.zoomedArea.stroke.opacity,
                          }),
                          l.default.setAttrs(h.node, d)),
                          o.globals.selectionEnabled &&
                            (c.attr({
                              x: e,
                              y: i,
                              width: a > 0 ? a : 0,
                              height: s > 0 ? s : 0,
                              fill: o.config.chart.selection.fill.color,
                              'fill-opacity': o.config.chart.selection.fill.opacity,
                              stroke: o.config.chart.selection.stroke.color,
                              'stroke-width': o.config.chart.selection.stroke.width,
                              'stroke-dasharray': o.config.chart.selection.stroke.dashArray,
                              'stroke-opacity': o.config.chart.selection.stroke.opacity,
                            }),
                            l.default.setAttrs(c.node, d));
                      }
                    },
                  },
                  {
                    key: 'hideSelectionRect',
                    value: function (t) {
                      t && t.attr({ x: 0, y: 0, width: 0, height: 0 });
                    },
                  },
                  {
                    key: 'selectionDrawing',
                    value: function (t) {
                      var e = t.context,
                        i = t.zoomtype,
                        a = this.w,
                        s = e,
                        n = this.gridRect.getBoundingClientRect(),
                        r = s.startX - 1,
                        o = s.startY,
                        l = s.clientX - n.left - r,
                        h = s.clientY - n.top - o,
                        c = 0,
                        d = 0,
                        u = {};
                      return (Math.abs(l + r) > a.globals.gridWidth || s.clientX - n.left < 0) && (s.hideSelectionRect(this.zoomRect), (s.dragged = !1), (s.w.globals.mousedown = !1)), r > s.clientX - n.left && (c = -(l = Math.abs(l))), o > s.clientY - n.top && (d = -(h = Math.abs(h))), (u = 'x' === i ? { x: r, y: 0, width: l, height: a.globals.gridHeight, translateX: c, translateY: 0 } : 'y' === i ? { x: 0, y: o, width: a.globals.gridWidth, height: h, translateX: 0, translateY: d } : { x: r, y: o, width: l, height: h, translateX: c, translateY: d }), s.drawSelectionRect(u), u;
                    },
                  },
                  {
                    key: 'selectionDragging',
                    value: function (t, e) {
                      var i = this,
                        a = this.w,
                        s = this.xyRatios,
                        n = this.selectionRect,
                        r = 0;
                      'resizing' === t && (r = 30),
                        'function' == typeof a.config.chart.events.selection &&
                          (clearTimeout(this.w.globals.selectionResizeTimer),
                          (this.w.globals.selectionResizeTimer = window.setTimeout(function () {
                            var t = i.gridRect.getBoundingClientRect(),
                              e = n.node.getBoundingClientRect(),
                              r = a.globals.xAxisScale.niceMin + (e.left - t.left) * s.xRatio,
                              o = a.globals.xAxisScale.niceMin + (e.right - t.left) * s.xRatio,
                              l = a.globals.yAxisScale[0].niceMin + (t.bottom - e.bottom) * s.yRatio[0],
                              h = a.globals.yAxisScale[0].niceMax - (e.top - t.top) * s.yRatio[0];
                            a.config.chart.events.selection(i.ctx, { xaxis: { min: r, max: o }, yaxis: { min: l, max: h } });
                          }, r)));
                    },
                  },
                  {
                    key: 'selectionDrawn',
                    value: function (t) {
                      var e = t.context,
                        i = t.zoomtype,
                        a = this.w,
                        s = e,
                        n = this.xyRatios,
                        r = this.ctx.toolbar;
                      if (s.startX > s.endX) {
                        var o = s.startX;
                        (s.startX = s.endX), (s.endX = o);
                      }
                      if (s.startY > s.endY) {
                        var l = s.startY;
                        (s.startY = s.endY), (s.endY = l);
                      }
                      var c = a.globals.xAxisScale.niceMin + s.startX * n.xRatio,
                        d = a.globals.xAxisScale.niceMin + s.endX * n.xRatio,
                        u = [],
                        f = [];
                      if (
                        (a.config.yaxis.forEach(function (t, e) {
                          u.push(Math.floor(a.globals.yAxisScale[e].niceMax - n.yRatio[e] * s.startY)), f.push(Math.floor(a.globals.yAxisScale[e].niceMax - n.yRatio[e] * s.endY));
                        }),
                        s.dragged && (s.dragX > 10 || s.dragY > 10) && c !== d)
                      )
                        if (a.globals.zoomEnabled) {
                          var g = h.default.clone(a.config.yaxis);
                          a.globals.zoomed || ((a.globals.lastXAxis = h.default.clone(a.config.xaxis)), (a.globals.lastYAxis = h.default.clone(a.config.yaxis)));
                          var p = { min: c, max: d };
                          if (
                            (('xy' !== i && 'y' !== i) ||
                              g.forEach(function (t, e) {
                                (g[e].min = f[e]), (g[e].max = u[e]);
                              }),
                            r)
                          ) {
                            var x = r.getBeforeZoomRange(p, g);
                            x && ((p = x.xaxis ? x.xaxis : p), (g = x.yaxis ? x.yaxe : g));
                          }
                          'x' === i ? s.ctx._updateOptions({ xaxis: p }, !1, s.w.config.chart.animations.dynamicAnimation.enabled) : 'y' === i ? s.ctx._updateOptions({ yaxis: g }, !1, s.w.config.chart.animations.dynamicAnimation.enabled) : s.ctx._updateOptions({ xaxis: p, yaxis: g }, !1, s.w.config.chart.animations.dynamicAnimation.enabled), 'function' == typeof a.config.chart.events.zoomed && r.zoomCallback(p, g), (a.globals.zoomed = !0);
                        } else if (a.globals.selectionEnabled) {
                          var b = null,
                            v = null;
                          (v = { min: c, max: d }),
                            ('xy' !== i && 'y' !== i) ||
                              (b = h.default.clone(a.config.yaxis)).forEach(function (t, e) {
                                (b[e].min = f[e]), (b[e].max = u[e]);
                              }),
                            (a.globals.selection = s.selection),
                            'function' == typeof a.config.chart.events.selection && a.config.chart.events.selection(s.ctx, { xaxis: v, yaxis: b });
                        }
                    },
                  },
                  {
                    key: 'panDragging',
                    value: function (t) {
                      var e = t.context,
                        i = (t.zoomtype, this.w),
                        a = e,
                        s = void 0;
                      if (void 0 !== i.globals.lastClientPosition.x) {
                        var n = i.globals.lastClientPosition.x - a.clientX,
                          r = i.globals.lastClientPosition.y - a.clientY;
                        Math.abs(n) > Math.abs(r) && n > 0 ? (s = 'left') : Math.abs(n) > Math.abs(r) && n < 0 ? (s = 'right') : Math.abs(r) > Math.abs(n) && r > 0 ? (s = 'up') : Math.abs(r) > Math.abs(n) && r < 0 && (s = 'down');
                      }
                      i.globals.lastClientPosition = { x: a.clientX, y: a.clientY };
                      var o = i.globals.minX,
                        l = i.globals.maxX;
                      this.panScrolled(s, o, l);
                    },
                  },
                  {
                    key: 'panScrolled',
                    value: function (t, e, i) {
                      var a = this.w,
                        s = this.xyRatios;
                      'left' === t ? ((e = a.globals.minX + (a.globals.gridWidth / 15) * s.xRatio), (i = a.globals.maxX + (a.globals.gridWidth / 15) * s.xRatio)) : 'right' === t && ((e = a.globals.minX - (a.globals.gridWidth / 15) * s.xRatio), (i = a.globals.maxX - (a.globals.gridWidth / 15) * s.xRatio)), (e < a.globals.initialminX || i > a.globals.initialmaxX) && ((e = a.globals.minX), (i = a.globals.maxX)), this.ctx._updateOptions({ xaxis: { min: e, max: i } }, !1, !1), 'function' == typeof a.config.chart.events.scrolled && a.config.chart.events.scrolled(this.ctx, { xaxis: { min: e, max: i } });
                    },
                  },
                ]),
                e
              );
            })(a(i(23)).default);
          t.exports = c;
        },
        function (t, e, i) {
          function a(t) {
            return t && t.__esModule ? t : { default: t };
          }
          function s(t, e) {
            if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
          }
          Object.defineProperty(e, '__esModule', { value: !0 });
          var n = (function () {
              function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                  var a = e[i];
                  (a.enumerable = a.enumerable || !1), (a.configurable = !0), 'value' in a && (a.writable = !0), Object.defineProperty(t, a.key, a);
                }
              }
              return function (e, i, a) {
                return i && t(e.prototype, i), a && t(e, a), e;
              };
            })(),
            r = a(i(5)),
            o = a(i(3)),
            l = a(i(0)),
            h = a(i(12)),
            c = (function () {
              function t(e) {
                s(this, t), (this.ctx = e), (this.w = e.w);
                var i = this.w;
                (this.anim = new r.default(this.ctx)), (this.xaxisLabels = i.globals.labels.slice()), (this.animX = i.config.grid.xaxis.lines.animate && i.config.chart.animations.enabled), (this.animY = i.config.grid.yaxis.lines.animate && i.config.chart.animations.enabled), i.globals.timelineLabels.length > 0 && (this.xaxisLabels = i.globals.timelineLabels.slice());
              }
              return (
                n(t, [
                  {
                    key: 'drawGridArea',
                    value: function () {
                      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                        e = this.w,
                        i = new l.default(this.ctx);
                      null === t && (t = i.group({ class: 'apexcharts-grid' }));
                      var a = i.drawLine(e.globals.padHorizontal, 1, e.globals.padHorizontal, e.globals.gridHeight, 'transparent'),
                        s = i.drawLine(e.globals.padHorizontal, e.globals.gridHeight, e.globals.gridWidth, e.globals.gridHeight, 'transparent');
                      return t.add(s), t.add(a), t;
                    },
                  },
                  {
                    key: 'drawGrid',
                    value: function () {
                      var t = this.w,
                        e = new h.default(this.ctx),
                        i = this.w.globals,
                        a = null;
                      if (i.axisCharts) {
                        if (t.config.grid.show) (a = this.renderGrid()), i.dom.elGraphical.add(a.el), this.drawGridArea(a.el);
                        else {
                          var s = this.drawGridArea();
                          i.dom.elGraphical.add(s);
                        }
                        null !== a && e.xAxisLabelCorrections(a.xAxisTickWidth);
                      }
                    },
                  },
                  {
                    key: 'createGridMask',
                    value: function () {
                      var t = this.w,
                        e = t.globals,
                        i = new l.default(this.ctx),
                        a = Array.isArray(t.config.stroke.width) ? 0 : t.config.stroke.width;
                      if (Array.isArray(t.config.stroke.width)) {
                        var s = 0;
                        t.config.stroke.width.forEach(function (t) {
                          s = Math.max(s, t);
                        }),
                          (a = s);
                      }
                      (e.dom.elGridRectMask = document.createElementNS(e.svgNS, 'clipPath')), e.dom.elGridRectMask.setAttribute('id', 'gridRectMask' + e.cuid), (e.dom.elGridRectMarkerMask = document.createElementNS(e.svgNS, 'clipPath')), e.dom.elGridRectMarkerMask.setAttribute('id', 'gridRectMarkerMask' + e.cuid), (e.dom.elGridRect = i.drawRect(-a / 2, -a / 2, e.gridWidth + a, e.gridHeight + a, 0, '#fff')), new o.default(this).getLargestMarkerSize();
                      var n = t.globals.markers.largestSize + t.config.markers.hover.sizeOffset + 1;
                      (e.dom.elGridRectMarker = i.drawRect(-n, -n, e.gridWidth + 2 * n, e.gridHeight + 2 * n, 0, '#fff')), e.dom.elGridRectMask.appendChild(e.dom.elGridRect.node), e.dom.elGridRectMarkerMask.appendChild(e.dom.elGridRectMarker.node);
                      var r = e.dom.baseEl.querySelector('defs');
                      r.appendChild(e.dom.elGridRectMask), r.appendChild(e.dom.elGridRectMarkerMask);
                    },
                  },
                  {
                    key: 'renderGrid',
                    value: function () {
                      for (var t = this.w, e = new l.default(this.ctx), i = t.config.grid.strokeDashArray, a = e.group({ class: 'apexcharts-grid' }), s = 8, n = 0; n < t.globals.series.length && (void 0 !== t.globals.yAxisScale[n] && (s = t.globals.yAxisScale[n].result.length - 1), !(s > 2)); n++);
                      var r = void 0;
                      if (!(!t.config.plotOptions.bar.horizontal || 'bar' !== t.config.chart.type)) {
                        if (((r = s), t.config.grid.xaxis.lines.show || t.config.xaxis.axisTicks.show))
                          for (var o = t.globals.padHorizontal, c = void 0, d = t.globals.gridHeight, u = 0; u < r + 1 && ((o = o + t.globals.gridWidth / r + 0.3), (c = o), u !== r - 1); u++) {
                            if (t.config.grid.xaxis.lines.show) {
                              var f = e.drawLine(o, 0, c, d, t.config.grid.borderColor, i);
                              f.node.classList.add('apexcharts-gridline'), a.add(f), this.animX && this.animateLine(f, { x1: 0, x2: 0 }, { x1: o, x2: c });
                            }
                            new h.default(this.ctx).drawXaxisTicks(o, a);
                          }
                        if (t.config.grid.yaxis.lines.show)
                          for (var g = 0, p = 0, x = t.globals.gridWidth, b = 0; b < t.globals.dataPoints + 1; b++) {
                            var v = e.drawLine(0, g, x, p, t.config.grid.borderColor, i);
                            a.add(v), v.node.classList.add('apexcharts-gridline'), this.animY && this.animateLine(v, { y1: g + 20, y2: p + 20 }, { y1: g, y2: p }), (p = g += t.globals.gridHeight / t.globals.dataPoints);
                          }
                      } else {
                        if (((r = this.xaxisLabels.length), t.config.grid.xaxis.lines.show || t.config.xaxis.axisTicks.show)) {
                          var m = t.globals.padHorizontal,
                            y = void 0,
                            w = t.globals.gridHeight;
                          if (t.globals.timelineLabels.length > 0)
                            for (var k = 0; k < r; k++) {
                              if (((m = this.xaxisLabels[k].position), (y = this.xaxisLabels[k].position), t.config.grid.xaxis.lines.show && m > 0 && m < t.globals.gridWidth)) {
                                var S = e.drawLine(m, 0, y, w, t.config.grid.borderColor, i);
                                S.node.classList.add('apexcharts-gridline'), a.add(S), this.animX && this.animateLine(S, { x1: 0, x2: 0 }, { x1: m, x2: y });
                              }
                              new h.default(this.ctx).drawXaxisTicks(m, a);
                            }
                          else
                            for (var A = r, C = 0; C < A; C++) {
                              var M = A;
                              if ((t.globals.isXNumeric && 'bar' !== t.config.chart.type && (M -= 1), (m += t.globals.gridWidth / M), (y = m), C === M - 1)) break;
                              if (t.config.grid.xaxis.lines.show) {
                                var P = e.drawLine(m, 0, y, w, t.config.grid.borderColor, i);
                                P.node.classList.add('apexcharts-gridline'), a.add(P), this.animX && this.animateLine(P, { x1: 0, x2: 0 }, { x1: m, x2: y });
                              }
                              new h.default(this.ctx).drawXaxisTicks(m, a);
                            }
                        }
                        if (t.config.grid.yaxis.lines.show)
                          for (var L = 0, E = 0, T = t.globals.gridWidth, z = 0; z < s + 1; z++) {
                            var X = e.drawLine(0, L, T, E, t.config.grid.borderColor, i);
                            a.add(X), X.node.classList.add('apexcharts-gridline'), this.animY && this.animateLine(X, { y1: L + 20, y2: E + 20 }, { y1: L, y2: E }), (E = L += t.globals.gridHeight / s);
                          }
                      }
                      return this.drawGridBands(a, r, s), { el: a, xAxisTickWidth: t.globals.gridWidth / r };
                    },
                  },
                  {
                    key: 'drawGridBands',
                    value: function (t, e, i) {
                      var a = this.w,
                        s = new l.default(this.ctx);
                      if (void 0 !== a.config.grid.row.colors && a.config.grid.row.colors.length > 0)
                        for (var n = 0, r = a.globals.gridHeight / i, o = a.globals.gridWidth, h = 0, c = 0; h < i; h++, c++) {
                          c >= a.config.grid.row.colors.length && (c = 0);
                          var d = a.config.grid.row.colors[c],
                            u = s.drawRect(0, n, o, r, 0, d, a.config.grid.row.opacity);
                          t.add(u), u.node.classList.add('apexcharts-gridRow'), (n += a.globals.gridHeight / i);
                        }
                      if (void 0 !== a.config.grid.column.colors && a.config.grid.column.colors.length > 0)
                        for (var f = a.globals.padHorizontal, g = a.globals.padHorizontal + a.globals.gridWidth / e, p = a.globals.gridHeight, x = 0, b = 0; x < e; x++, b++) {
                          b >= a.config.grid.column.colors.length && (b = 0);
                          var v = a.config.grid.column.colors[b],
                            m = s.drawRect(f, 0, g, p, 0, v, a.config.grid.column.opacity);
                          m.node.classList.add('apexcharts-gridColumn'), t.add(m), (f += a.globals.gridWidth / e);
                        }
                    },
                  },
                  {
                    key: 'animateLine',
                    value: function (t, e, i) {
                      var a = this.w,
                        s = a.config.chart.animations;
                      if (s && !a.globals.resized && !a.globals.dataChanged) {
                        var n = s.speed;
                        this.anim.animateLine(t, e, i, n);
                      }
                    },
                  },
                ]),
                t
              );
            })();
          e.default = c;
        },
        function (t, e, i) {
          function a(t, e) {
            if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
          }
          var s = (function () {
              function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                  var a = e[i];
                  (a.enumerable = a.enumerable || !1), (a.configurable = !0), 'value' in a && (a.writable = !0), Object.defineProperty(t, a.key, a);
                }
              }
              return function (e, i, a) {
                return i && t(e.prototype, i), a && t(e, a), e;
              };
            })(),
            n = (function (t) {
              return t && t.__esModule ? t : { default: t };
            })(i(1)),
            r = (function () {
              function t(e) {
                a(this, t), (this.opts = e);
              }
              return (
                s(t, [
                  {
                    key: 'line',
                    value: function () {
                      return {
                        chart: { animations: { easing: 'swing' } },
                        dataLabels: { enabled: !1 },
                        stroke: { width: 5, curve: 'straight' },
                        markers: { size: 5 },
                        xaxis: { crosshairs: { width: 1 } },
                      };
                    },
                  },
                  {
                    key: 'sparkline',
                    value: function (t) {
                      (this.opts.yaxis[0].labels.show = !1), (this.opts.yaxis[0].floating = !0);
                      var e = {
                        grid: { show: !1, padding: { left: 0, right: 0, top: 0, bottom: 0 } },
                        legend: { show: !1 },
                        xaxis: { labels: { show: !1 }, tooltip: { enabled: !1 }, axisBorder: { show: !1 } },
                        chart: { toolbar: { show: !1 }, zoom: { enabled: !1 } },
                        dataLabels: { enabled: !1 },
                      };
                      return n.default.extend(t, e);
                    },
                  },
                  {
                    key: 'bar',
                    value: function () {
                      return {
                        chart: { stacked: !1, animations: { easing: 'swing' } },
                        plotOptions: { bar: { dataLabels: { position: 'center' } } },
                        dataLabels: { style: { colors: ['#fff'] } },
                        stroke: { width: 0 },
                        fill: { opacity: 0.85 },
                        legend: { markers: { shape: 'square', radius: 2, size: 8 } },
                        tooltip: { shared: !1 },
                        xaxis: {
                          tooltip: { enabled: !1 },
                          crosshairs: { width: 'barWidth', position: 'back', fill: { type: 'gradient' }, dropShadow: { enabled: !1 } },
                        },
                      };
                    },
                  },
                  {
                    key: 'candlestick',
                    value: function () {
                      return {
                        stroke: { width: 1, colors: ['#333'] },
                        dataLabels: { enabled: !1 },
                        tooltip: {
                          shared: !0,
                          custom: function (t) {
                            var e = t.seriesIndex,
                              i = t.dataPointIndex,
                              a = t.w;
                            return '<div class="apexcharts-tooltip-candlestick"><div>Open: <span class="value">' + a.globals.seriesCandleO[e][i] + '</span></div><div>High: <span class="value">' + a.globals.seriesCandleH[e][i] + '</span></div><div>Low: <span class="value">' + a.globals.seriesCandleL[e][i] + '</span></div><div>Close: <span class="value">' + a.globals.seriesCandleC[e][i] + '</span></div></div>';
                          },
                        },
                        states: { active: { filter: { type: 'none' } } },
                        xaxis: { crosshairs: { width: 1 } },
                      };
                    },
                  },
                  {
                    key: 'area',
                    value: function () {
                      return {
                        stroke: { width: 4 },
                        fill: {
                          type: 'gradient',
                          gradient: {
                            inverseColors: !1,
                            shade: 'light',
                            type: 'vertical',
                            opacityFrom: 0.65,
                            opacityTo: 0.5,
                            stops: [0, 100, 100],
                          },
                        },
                        markers: { size: 0, hover: { sizeOffset: 6 } },
                        tooltip: { followCursor: !1 },
                      };
                    },
                  },
                  {
                    key: 'brush',
                    value: function (t) {
                      var e = {
                        chart: { toolbar: { autoSelected: 'selection', show: !1 }, zoom: { enabled: !1 } },
                        dataLabels: { enabled: !1 },
                        stroke: { width: 1 },
                        tooltip: { enabled: !1 },
                        xaxis: { tooltip: { enabled: !1 } },
                      };
                      return n.default.extend(t, e);
                    },
                  },
                  {
                    key: 'stacked100',
                    value: function () {
                      var t = this;
                      (this.opts.dataLabels = this.opts.dataLabels || {}), (this.opts.dataLabels.formatter = this.opts.dataLabels.formatter || void 0);
                      var e = this.opts.dataLabels.formatter;
                      this.opts.yaxis.forEach(function (e, i) {
                        (t.opts.yaxis[i].min = 0), (t.opts.yaxis[i].max = 100);
                      }),
                        !('bar' !== this.opts.chart.type) &&
                          (this.opts.dataLabels.formatter =
                            e ||
                            function (t) {
                              return 'number' == typeof t && t ? t.toFixed(0) + '%' : t;
                            });
                    },
                  },
                  {
                    key: 'bubble',
                    value: function () {
                      return {
                        dataLabels: { style: { colors: ['#fff'] } },
                        tooltip: { shared: !1, intersect: !0 },
                        xaxis: { crosshairs: { width: 0 } },
                        fill: {
                          type: 'solid',
                          gradient: { shade: 'light', inverse: !0, shadeIntensity: 0.55, opacityFrom: 0.4, opacityTo: 0.8 },
                        },
                      };
                    },
                  },
                  {
                    key: 'scatter',
                    value: function () {
                      return {
                        dataLabels: { enabled: !1 },
                        tooltip: { shared: !1, intersect: !0 },
                        markers: { size: 6, strokeWidth: 2, hover: { sizeOffset: 2 } },
                      };
                    },
                  },
                  {
                    key: 'heatmap',
                    value: function () {
                      return {
                        chart: { stacked: !1, zoom: { enabled: !1 } },
                        fill: { opacity: 1 },
                        dataLabels: { style: { colors: ['#fff'] } },
                        stroke: { colors: ['#fff'] },
                        tooltip: { followCursor: !0, marker: { show: !1 }, x: { show: !1 } },
                        legend: { position: 'top', markers: { shape: 'square', size: 10, offsetY: 2 } },
                        grid: { padding: { right: 20 } },
                      };
                    },
                  },
                  {
                    key: 'pie',
                    value: function () {
                      return {
                        chart: { toolbar: { show: !1 } },
                        plotOptions: { pie: { donut: { labels: { show: !1 } } } },
                        dataLabels: {
                          formatter: function (t) {
                            return t.toFixed(1) + '%';
                          },
                          style: { colors: ['#fff'] },
                          dropShadow: { enabled: !0 },
                        },
                        stroke: { colors: ['#fff'] },
                        fill: { opacity: 1, gradient: { shade: 'dark', shadeIntensity: 0.35, inverseColors: !1, stops: [0, 100, 100] } },
                        tooltip: { theme: 'dark', fillSeriesColor: !0 },
                        legend: { position: 'right', offsetY: 30 },
                      };
                    },
                  },
                  {
                    key: 'donut',
                    value: function () {
                      return {
                        chart: { toolbar: { show: !1 } },
                        dataLabels: {
                          formatter: function (t) {
                            return t.toFixed(1) + '%';
                          },
                          style: { colors: ['#fff'] },
                          dropShadow: { enabled: !0 },
                        },
                        stroke: { colors: ['#fff'] },
                        fill: {
                          opacity: 1,
                          gradient: {
                            shade: 'dark',
                            shadeIntensity: 0.4,
                            inverseColors: !1,
                            type: 'vertical',
                            opacityFrom: 1,
                            opacityTo: 1,
                            stops: [70, 98, 100],
                          },
                        },
                        tooltip: { theme: 'dark', fillSeriesColor: !0 },
                        legend: { position: 'right', offsetY: 30 },
                      };
                    },
                  },
                  {
                    key: 'radialBar',
                    value: function () {
                      return {
                        chart: { animations: { dynamicAnimation: { enabled: !0, speed: 800 } }, toolbar: { show: !1 } },
                        fill: {
                          gradient: {
                            shade: 'dark',
                            shadeIntensity: 0.4,
                            inverseColors: !1,
                            type: 'diagonal2',
                            opacityFrom: 1,
                            opacityTo: 1,
                            stops: [70, 98, 100],
                          },
                        },
                        legend: { show: !1, offsetY: 30 },
                        tooltip: { enabled: !1, fillSeriesColor: !0 },
                      };
                    },
                  },
                ]),
                t
              );
            })();
          t.exports = r;
        },
        function (t, e, i) {
          function a(t, e) {
            if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
          }
          Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
          var s = (function () {
              function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                  var a = e[i];
                  (a.enumerable = a.enumerable || !1), (a.configurable = !0), 'value' in a && (a.writable = !0), Object.defineProperty(t, a.key, a);
                }
              }
              return function (e, i, a) {
                return i && t(e.prototype, i), a && t(e, a), e;
              };
            })(),
            n = (function (t) {
              return t && t.__esModule ? t : { default: t };
            })(i(1)),
            r = (function () {
              function t() {
                a(this, t);
              }
              return (
                s(t, [
                  {
                    key: 'globalVars',
                    value: function (t) {
                      return {
                        chartID: null,
                        cuid: null,
                        events: {
                          beforeMount: [],
                          mounted: [],
                          updated: [],
                          clicked: [],
                          selection: [],
                          dataPointSelection: [],
                          zoomed: [],
                          scrolled: [],
                        },
                        colors: [],
                        fill: { colors: [] },
                        stroke: { colors: [] },
                        dataLabels: { style: { colors: [] } },
                        markers: { colors: [], size: t.markers.size, largestSize: 0 },
                        isTouchDevice: 'ontouchstart' in window || navigator.msMaxTouchPoints,
                        isDirty: !1,
                        initialConfig: null,
                        lastXAxis: [],
                        lastYAxis: [],
                        series: [],
                        seriesPercent: [],
                        seriesTotals: [],
                        stackedSeriesTotals: [],
                        seriesX: [],
                        seriesZ: [],
                        labels: [],
                        timelineLabels: [],
                        seriesNames: [],
                        noLabelsProvided: !1,
                        allSeriesCollapsed: !1,
                        collapsedSeries: [],
                        collapsedSeriesIndices: [],
                        risingSeries: [],
                        selectedDataPoints: [],
                        ignoreYAxisIndexes: [],
                        padHorizontal: 0,
                        maxValsInArrayIndex: 0,
                        zoomEnabled: 'zoom' === t.chart.toolbar.autoSelected && t.chart.toolbar.tools.zoom && t.chart.zoom.enabled,
                        panEnabled: 'pan' === t.chart.toolbar.autoSelected && t.chart.toolbar.tools.pan,
                        selectionEnabled: 'selection' === t.chart.toolbar.autoSelected && t.chart.toolbar.tools.selection,
                        yaxis: null,
                        minY: Number.MIN_VALUE,
                        maxY: -Number.MAX_VALUE,
                        minYArr: [],
                        maxYArr: [],
                        maxX: -Number.MAX_VALUE,
                        initialmaxX: -Number.MAX_VALUE,
                        minX: Number.MAX_VALUE,
                        initialminX: Number.MAX_VALUE,
                        minZ: Number.MAX_VALUE,
                        maxZ: -Number.MAX_VALUE,
                        mousedown: !1,
                        lastClientPosition: {},
                        visibleXRange: void 0,
                        yRange: [],
                        zRange: 0,
                        xRange: 0,
                        yValueDecimal: 0,
                        total: 0,
                        svgNS: 'http://www.w3.org/2000/svg',
                        svgWidth: 0,
                        svgHeight: 0,
                        noData: !1,
                        locale: {},
                        dom: {},
                        memory: { methodsToExec: [] },
                        shouldAnimate: !0,
                        delayedElements: [],
                        axisCharts: !0,
                        isXNumeric: !1,
                        isDataXYZ: !1,
                        resized: !1,
                        resizeTimer: null,
                        comboCharts: !1,
                        comboChartsHasBars: !1,
                        dataChanged: !1,
                        previousPaths: [],
                        seriesXvalues: [],
                        seriesYvalues: [],
                        seriesCandleO: [],
                        seriesCandleH: [],
                        seriesCandleL: [],
                        seriesCandleC: [],
                        allSeriesHasEqualX: !0,
                        dataPoints: 0,
                        pointsArray: [],
                        dataLabelsRects: [],
                        lastDrawnDataLabelsIndexes: [],
                        hasNullValues: !1,
                        easing: null,
                        zoomed: !1,
                        gridWidth: 0,
                        gridHeight: 0,
                        yAxisScale: [],
                        xAxisScale: null,
                        xAxisTicksPositions: [],
                        timescaleTicks: [],
                        rotateXLabels: !1,
                        defaultLabels: !1,
                        xLabelFormatter: void 0,
                        yLabelFormatters: [],
                        xaxisTooltipFormatter: void 0,
                        ttKeyFormatter: void 0,
                        ttVal: void 0,
                        ttZFormatter: void 0,
                        lineHeightRatio: 1.618,
                        xAxisLabelsHeight: 0,
                        yAxisLabelsWidth: 0,
                        scaleX: 1,
                        scaleY: 1,
                        translateX: 0,
                        translateY: 0,
                        translateYAxisX: [],
                        yLabelsCoords: [],
                        yTitleCoords: [],
                        yAxisWidths: [],
                        translateXAxisY: 0,
                        translateXAxisX: 0,
                        tooltip: null,
                        tooltipOpts: null,
                      };
                    },
                  },
                  {
                    key: 'init',
                    value: function (t) {
                      var e = this.globalVars(t);
                      return (e.initialConfig = n.default.extend({}, t)), (e.initialSeries = JSON.parse(JSON.stringify(e.initialConfig.series))), (e.lastXAxis = JSON.parse(JSON.stringify(e.initialConfig.xaxis))), (e.lastYAxis = JSON.parse(JSON.stringify(e.initialConfig.yaxis))), e;
                    },
                  },
                ]),
                t
              );
            })();
          e.default = r;
        },
        function (t, e, i) {
          function a(t, e) {
            if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
          }
          Object.defineProperty(e, '__esModule', { value: !0 });
          var s = (function () {
              function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                  var a = e[i];
                  (a.enumerable = a.enumerable || !1), (a.configurable = !0), 'value' in a && (a.writable = !0), Object.defineProperty(t, a.key, a);
                }
              }
              return function (e, i, a) {
                return i && t(e.prototype, i), a && t(e, a), e;
              };
            })(),
            n = (function () {
              function t(e) {
                a(this, t), (this.w = e.w), (this.ttCtx = e);
              }
              return (
                s(t, [
                  {
                    key: 'drawXaxisTooltip',
                    value: function () {
                      var t = this.w,
                        e = this.ttCtx,
                        i = 'bottom' === t.config.xaxis.position;
                      e.xaxisOffY = i ? t.globals.gridHeight + 1 : 1;
                      var a = i ? 'apexcharts-xaxistooltip apexcharts-xaxistooltip-bottom' : 'apexcharts-xaxistooltip apexcharts-xaxistooltip-top',
                        s = t.globals.dom.elWrap;
                      e.blxaxisTooltip && null === t.globals.dom.baseEl.querySelector('.apexcharts-xaxistooltip') && ((e.xaxisTooltip = document.createElement('div')), e.xaxisTooltip.setAttribute('class', a), s.appendChild(e.xaxisTooltip), (e.xaxisTooltipText = document.createElement('div')), e.xaxisTooltipText.classList.add('apexcharts-xaxistooltip-text'), e.xaxisTooltip.appendChild(e.xaxisTooltipText));
                    },
                  },
                  {
                    key: 'drawYaxisTooltip',
                    value: function () {
                      for (var t = this.w, e = this.ttCtx, i = 0; i < t.config.yaxis.length; i++) {
                        var a = t.config.yaxis[i].opposite || t.config.yaxis[i].crosshairs.opposite;
                        e.yaxisOffX = a ? t.globals.gridWidth + 1 : 1;
                        var s = a ? 'apexcharts-yaxistooltip apexcharts-yaxistooltip-' + i + ' apexcharts-yaxistooltip-right' : 'apexcharts-yaxistooltip apexcharts-yaxistooltip-' + i + ' apexcharts-yaxistooltip-left',
                          n = t.globals.dom.elWrap;
                        e.blyaxisTooltip && null === t.globals.dom.baseEl.querySelector('.apexcharts-yaxistooltip apexcharts-yaxistooltip-' + i) && ((e.yaxisTooltip = document.createElement('div')), e.yaxisTooltip.setAttribute('class', s), n.appendChild(e.yaxisTooltip), 0 === i && (e.yaxisTooltipText = []), e.yaxisTooltipText.push(document.createElement('div')), e.yaxisTooltipText[i].classList.add('apexcharts-yaxistooltip-text'), e.yaxisTooltip.appendChild(e.yaxisTooltipText[i]));
                      }
                    },
                  },
                  {
                    key: 'setXCrosshairWidth',
                    value: function () {
                      var t = this.w,
                        e = this.ttCtx,
                        i = e.getElXCrosshairs();
                      if (((e.xcrosshairsWidth = parseInt(t.config.xaxis.crosshairs.width)), t.globals.comboCharts)) {
                        var a = t.globals.dom.baseEl.querySelector('.apexcharts-bar-area');
                        if (null !== a && 'barWidth' === t.config.xaxis.crosshairs.width) {
                          var s = parseFloat(a.getAttribute('barWidth'));
                          e.xcrosshairsWidth = s;
                        } else if ('tickWidth' === t.config.xaxis.crosshairs.width) {
                          var n = t.globals.labels.length;
                          e.xcrosshairsWidth = t.globals.gridWidth / n;
                        }
                      } else if ('tickWidth' === t.config.xaxis.crosshairs.width) {
                        var r = t.globals.labels.length;
                        e.xcrosshairsWidth = t.globals.gridWidth / r;
                      } else if ('barWidth' === t.config.xaxis.crosshairs.width) {
                        var o = t.globals.dom.baseEl.querySelector('.apexcharts-bar-area');
                        if (null !== o) {
                          var l = parseFloat(o.getAttribute('barWidth'));
                          e.xcrosshairsWidth = l;
                        } else e.xcrosshairsWidth = 1;
                      }
                      'bar' === t.config.chart.type && t.config.plotOptions.bar.horizontal && (e.xcrosshairsWidth = 0), null !== i && i.setAttribute('width', e.xcrosshairsWidth);
                    },
                  },
                  {
                    key: 'handleYCrosshair',
                    value: function () {
                      var t = this.w,
                        e = this.ttCtx;
                      (e.ycrosshairs = t.globals.dom.baseEl.querySelector('.apexcharts-ycrosshairs')), (e.ycrosshairsHidden = t.globals.dom.baseEl.querySelector('.apexcharts-ycrosshairs-hidden'));
                    },
                  },
                  {
                    key: 'drawYaxisTooltipText',
                    value: function (t, e, i) {
                      var a = this.ttCtx,
                        s = this.w,
                        n = s.globals.yLabelFormatters[t];
                      if (a.blyaxisTooltip) {
                        var r = a.getElGrid().getBoundingClientRect(),
                          o = (e - r.top) * i.yRatio[t],
                          l = s.globals.maxYArr[t] - s.globals.minYArr[t],
                          h = s.globals.minYArr[t] + (l - o);
                        a.tooltipPosition.moveYCrosshairs(e - r.top), (a.yaxisTooltipText[t].innerHTML = n(h)), a.tooltipPosition.moveYAxisTooltip(t);
                      }
                    },
                  },
                ]),
                t
              );
            })();
          e.default = n;
        },
        function (t, e, i) {
          function a(t, e) {
            if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
          }
          Object.defineProperty(e, '__esModule', { value: !0 });
          var s = (function () {
              function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                  var a = e[i];
                  (a.enumerable = a.enumerable || !1), (a.configurable = !0), 'value' in a && (a.writable = !0), Object.defineProperty(t, a.key, a);
                }
              }
              return function (e, i, a) {
                return i && t(e.prototype, i), a && t(e, a), e;
              };
            })(),
            n = (function (t) {
              return t && t.__esModule ? t : { default: t };
            })(i(1)),
            r = (function () {
              function t(e) {
                a(this, t),
                  (this.getAttr = function (t, e) {
                    return parseFloat(t.target.getAttribute(e));
                  }),
                  (this.w = e.w),
                  (this.ttCtx = e);
              }
              return (
                s(t, [
                  {
                    key: 'handleHeatTooltip',
                    value: function (t) {
                      var e = t.e,
                        i = t.opt,
                        a = t.x,
                        s = t.y,
                        n = this.ttCtx,
                        r = this.w;
                      if (e.target.classList.contains('apexcharts-heatmap-rect')) {
                        var o = this.getAttr(e, 'i'),
                          l = this.getAttr(e, 'j'),
                          h = this.getAttr(e, 'cx'),
                          c = this.getAttr(e, 'cy'),
                          d = this.getAttr(e, 'width'),
                          u = this.getAttr(e, 'height');
                        if ((n.tooltipLabels.drawSeriesTexts({ ttItems: i.ttItems, i: o, j: l, shared: !1 }), (a = h + n.tooltipRect.ttWidth / 2 + d), (s = c + n.tooltipRect.ttHeight / 2 - u / 2), n.tooltipPosition.moveXCrosshairs(h + d / 2), a > r.globals.gridWidth / 2 && (a = h - n.tooltipRect.ttWidth / 2 + d), n.w.config.tooltip.followCursor)) {
                          var f = n.getElGrid().getBoundingClientRect();
                          s = n.e.clientY - f.top + r.globals.translateY / 2 - 10;
                        }
                      }
                      return { x: a, y: s };
                    },
                  },
                  {
                    key: 'handleMarkerTooltip',
                    value: function (t) {
                      var e = t.e,
                        i = t.opt,
                        a = t.x,
                        s = t.y,
                        r = this.w,
                        o = this.ttCtx,
                        l = void 0,
                        h = void 0;
                      if (e.target.classList.contains('apexcharts-marker')) {
                        var c = parseInt(i.paths.getAttribute('cx')),
                          d = parseInt(i.paths.getAttribute('cy')),
                          u = parseFloat(i.paths.getAttribute('val'));
                        if (((h = parseInt(i.paths.getAttribute('rel'))), (l = parseInt(i.paths.parentNode.parentNode.parentNode.getAttribute('rel')) - 1), o.intersect)) {
                          var f = n.default.findAncestor(i.paths, 'apexcharts-series');
                          f && (l = parseInt(f.getAttribute('data:realIndex')));
                        }
                        if (
                          (o.tooltipLabels.drawSeriesTexts({
                            ttItems: i.ttItems,
                            i: l,
                            j: h,
                            shared: !o.intersect && r.config.tooltip.shared,
                          }),
                          o.marker.enlargeCurrentPoint(h, i.paths),
                          (a = c),
                          (s = d - 1.4 * o.tooltipRect.ttHeight),
                          o.w.config.tooltip.followCursor)
                        ) {
                          var g = o.getElGrid().getBoundingClientRect();
                          s = o.e.clientY - g.top;
                        }
                        u < 0 && (s = d);
                      }
                      return { x: a, y: s };
                    },
                  },
                  {
                    key: 'handleBarTooltip',
                    value: function (t) {
                      var e = t.e,
                        i = t.opt,
                        a = this.w,
                        s = this.ttCtx,
                        n = s.getElTooltip(),
                        r = 0,
                        o = 0,
                        l = 0,
                        h = 0,
                        c = void 0;
                      if ((s.isBarHorizontal && s.hasBars()) || !a.config.tooltip.shared) {
                        var d = this.getBarTooltipXY({ e: e, opt: i });
                        (o = d.x), (l = d.y), (h = d.i), (c = Array.isArray(a.config.stroke.width) ? a.config.stroke.width[h] : a.config.stroke.width), (r = o);
                      } else a.globals.comboCharts || a.config.tooltip.shared || (r /= 2);
                      if ((isNaN(l) && (l = a.globals.svgHeight - s.tooltipRect.ttHeight), o + s.tooltipRect.ttWidth > a.globals.gridWidth ? (o -= s.tooltipRect.ttWidth) : o < 0 && (o += s.tooltipRect.ttWidth), s.w.config.tooltip.followCursor)) {
                        var u = s.getElGrid().getBoundingClientRect();
                        l = s.e.clientY - u.top;
                      }
                      null === s.tooltip && (s.tooltip = a.globals.dom.baseEl.querySelector('.apexcharts-tooltip')), a.config.tooltip.shared || (a.globals.comboChartsHasBars ? s.tooltipPosition.moveXCrosshairs(r + c / 2) : s.tooltipPosition.moveXCrosshairs(r)), !s.fixedTooltip && (!a.config.tooltip.shared || (s.isBarHorizontal && s.hasBars())) && ((n.style.left = o + a.globals.translateX + 'px'), s.tooltipRect.ttHeight + l > a.globals.gridHeight ? ((l = a.globals.gridHeight - s.tooltipRect.ttHeight + a.globals.translateY), (n.style.top = l + 'px')) : (n.style.top = l + a.globals.translateY - s.tooltipRect.ttHeight / 2 + 'px'));
                    },
                  },
                  {
                    key: 'getBarTooltipXY',
                    value: function (t) {
                      var e = t.e,
                        i = t.opt,
                        a = this.w,
                        s = null,
                        n = this.ttCtx,
                        r = 0,
                        o = 0,
                        l = 0,
                        h = 0,
                        c = e.target.classList;
                      if (c.contains('apexcharts-bar-area') || c.contains('apexcharts-candlestick-area')) {
                        var d = e.target,
                          u = d.getBoundingClientRect(),
                          f = i.elGrid.getBoundingClientRect(),
                          g = u.height,
                          p = u.width,
                          x = parseInt(d.getAttribute('cx')),
                          b = parseInt(d.getAttribute('cy'));
                        h = parseFloat(d.getAttribute('barWidth'));
                        var v = 'touchmove' === e.type ? e.touches[0].clientX : e.clientX;
                        (s = parseInt(d.getAttribute('j'))),
                          (r = parseInt(d.parentNode.getAttribute('rel')) - 1),
                          a.globals.comboCharts && (r = parseInt(d.parentNode.getAttribute('data:realIndex'))),
                          n.tooltipLabels.drawSeriesTexts({
                            ttItems: i.ttItems,
                            i: r,
                            j: s,
                            shared: !n.showOnIntersect && a.config.tooltip.shared,
                          }),
                          a.config.tooltip.followCursor ? (a.config.plotOptions.bar.horizontal ? ((o = v - f.left + 15), (l = b - n.dataPointsDividedHeight + g / 2 - n.tooltipRect.ttHeight / 2)) : ((o = a.globals.isXNumeric ? x - p / 2 : x - n.dataPointsDividedWidth + p / 2), (l = e.clientY - f.top - n.tooltipRect.ttHeight / 2 - 15))) : a.config.plotOptions.bar.horizontal ? ((o = x) < n.xyRatios.baseLineInvertedY && (o = x - n.tooltipRect.ttWidth), (l = b - n.dataPointsDividedHeight + g / 2 - n.tooltipRect.ttHeight / 2)) : ((o = a.globals.isXNumeric ? x - p / 2 : x - n.dataPointsDividedWidth + p / 2), (l = b));
                      }
                      return { x: o, y: l, barWidth: h, i: r, j: s };
                    },
                  },
                ]),
                t
              );
            })();
          e.default = r;
        },
        function (t, e, i) {
          function a(t) {
            return t && t.__esModule ? t : { default: t };
          }
          function s(t, e) {
            if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
          }
          var n = (function () {
              function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                  var a = e[i];
                  (a.enumerable = a.enumerable || !1), (a.configurable = !0), 'value' in a && (a.writable = !0), Object.defineProperty(t, a.key, a);
                }
              }
              return function (e, i, a) {
                return i && t(e.prototype, i), a && t(e, a), e;
              };
            })(),
            r = a(i(7)),
            o = a(i(25)),
            l = (function () {
              function t(e) {
                s(this, t), (this.w = e.w), (this.ctx = e.ctx), (this.ttCtx = e), (this.tooltipUtil = new o.default(e));
              }
              return (
                n(t, [
                  {
                    key: 'drawSeriesTexts',
                    value: function (t) {
                      var e = t.shared,
                        i = void 0 === e || e,
                        a = t.ttItems,
                        s = t.i,
                        n = void 0 === s ? 0 : s,
                        r = t.j,
                        o = void 0 === r ? null : r;
                      void 0 !== this.w.config.tooltip.custom ? this.handleCustomTooltip({ i: n, j: o }) : this.toggleActiveInactiveSeries(i);
                      var l = this.getValuesToPrint({ i: n, j: o });
                      this.printLabels({ i: n, j: o, values: l, ttItems: a, shared: i });
                    },
                  },
                  {
                    key: 'printLabels',
                    value: function (t) {
                      var e = t.i,
                        i = t.j,
                        a = t.values,
                        s = t.ttItems,
                        n = t.shared,
                        r = this.w,
                        o = void 0,
                        l = a.xVal,
                        h = a.zVal,
                        c = a.xAxisTTVal,
                        d = '',
                        u = r.globals.colors[e];
                      null !== i && r.config.plotOptions.bar.distributed && (u = r.globals.colors[i]);
                      for (var f = 0, g = r.globals.series.length - 1; f < r.globals.series.length; f++, g--) {
                        var p = this.getFormatters(e);
                        if (((d = this.getSeriesName({ fn: p.yLbTitleFormatter, index: e, seriesIndex: e, j: i })), n)) {
                          var x = r.config.tooltip.inverseOrder ? g : f;
                          (p = this.getFormatters(x)),
                            (d = this.getSeriesName({ fn: p.yLbTitleFormatter, index: x, seriesIndex: e, j: i })),
                            (u = r.globals.colors[x]),
                            (o = p.yLbFormatter(r.globals.series[x][i], {
                              series: r.globals.series,
                              seriesIndex: e,
                              dataPointIndex: i,
                              w: r,
                            })),
                            ((this.ttCtx.hasBars() && r.config.chart.stacked && 0 === r.globals.series[x][i]) || void 0 === r.globals.series[x][i]) && (o = void 0);
                        } else o = p.yLbFormatter(r.globals.series[e][i], r);
                        null === i && (o = p.yLbFormatter(r.globals.series[e], r)),
                          this.DOMHandling({
                            t: f,
                            ttItems: s,
                            values: { val: o, xVal: l, xAxisTTVal: c, zVal: h },
                            seriesName: d,
                            shared: n,
                            pColor: u,
                          });
                      }
                    },
                  },
                  {
                    key: 'getFormatters',
                    value: function (t) {
                      var e = this.w,
                        i = e.globals.yLabelFormatters[t],
                        a = void 0;
                      return (
                        void 0 !== e.globals.ttVal ? (Array.isArray(e.globals.ttVal) ? ((i = e.globals.ttVal[t] && e.globals.ttVal[t].formatter), (a = e.globals.ttVal[t] && e.globals.ttVal[t].title && e.globals.ttVal[t].title.formatter)) : ((i = e.globals.ttVal.formatter), 'function' == typeof e.globals.ttVal.title.formatter && (a = e.globals.ttVal.title.formatter))) : (a = e.config.tooltip.y.title.formatter),
                        'function' != typeof i &&
                          (i = e.globals.yLabelFormatters[0]
                            ? e.globals.yLabelFormatters[0]
                            : function (t) {
                                return t;
                              }),
                        'function' != typeof a &&
                          (a = function (t) {
                            return t;
                          }),
                        { yLbFormatter: i, yLbTitleFormatter: a }
                      );
                    },
                  },
                  {
                    key: 'getSeriesName',
                    value: function (t) {
                      var e = t.fn,
                        i = t.index,
                        a = t.seriesIndex,
                        s = t.j,
                        n = this.w;
                      return e(String(n.globals.seriesNames[i]), { series: n.globals.series, seriesIndex: a, dataPointIndex: s, w: n });
                    },
                  },
                  {
                    key: 'DOMHandling',
                    value: function (t) {
                      var e = t.t,
                        i = t.ttItems,
                        a = t.values,
                        s = t.seriesName,
                        n = t.shared,
                        r = t.pColor,
                        o = this.w,
                        l = this.ttCtx,
                        h = a.val,
                        c = a.xVal,
                        d = a.xAxisTTVal,
                        u = a.zVal,
                        f = null;
                      (f = i[e].children), o.config.tooltip.fillSeriesColor && ((i[e].style.backgroundColor = r), (f[0].style.display = 'none')), l.showTooltipTitle && (null === l.tooltipTitle && (l.tooltipTitle = o.globals.dom.baseEl.querySelector('.apexcharts-tooltip-title')), (l.tooltipTitle.innerHTML = c)), l.blxaxisTooltip && (l.xaxisTooltipText.innerHTML = '' !== d ? d : c);
                      var g = i[e].querySelector('.apexcharts-tooltip-text-label');
                      g && (g.innerHTML = s ? s + ': ' : '');
                      var p = i[e].querySelector('.apexcharts-tooltip-text-value');
                      p && (p.innerHTML = h), f[0] && f[0].classList.contains('apexcharts-tooltip-marker') && (f[0].style.backgroundColor = r), o.config.tooltip.marker.show || (f[0].style.display = 'none'), null !== u && ((i[e].querySelector('.apexcharts-tooltip-text-z-label').innerHTML = o.config.tooltip.z.title), (i[e].querySelector('.apexcharts-tooltip-text-z-value').innerHTML = u)), n && f[0] && (f[0].parentNode.style.display = void 0 === h || null === h ? 'none' : o.config.tooltip.items.display);
                    },
                  },
                  {
                    key: 'toggleActiveInactiveSeries',
                    value: function (t) {
                      var e = this.w;
                      if (t) this.tooltipUtil.toggleAllTooltipSeriesGroups('enable');
                      else {
                        this.tooltipUtil.toggleAllTooltipSeriesGroups('disable');
                        var i = e.globals.dom.baseEl.querySelector('.apexcharts-tooltip-series-group');
                        i && (i.classList.add('active'), (i.style.display = e.config.tooltip.items.display));
                      }
                    },
                  },
                  {
                    key: 'getValuesToPrint',
                    value: function (t) {
                      var e = t.i,
                        i = t.j,
                        a = this.w,
                        s = this.ctx.series.filteredSeriesX(),
                        n = '',
                        o = '',
                        l = null,
                        h = null,
                        c = { series: a.globals.series, seriesIndex: e, dataPointIndex: i, w: a },
                        d = a.globals.ttZFormatter;
                      null === i ? (h = a.globals.series[e]) : a.globals.isXNumeric ? ((n = s[e][i]), 0 === s[e].length && (n = s[this.tooltipUtil.getFirstActiveXArray(s)][i])) : (n = void 0 !== a.globals.labels[i] ? a.globals.labels[i] : '');
                      var u = n;
                      return (n = a.globals.isXNumeric && 'datetime' === a.config.xaxis.type ? new r.default(this.ctx).xLabelFormat(a.globals.ttKeyFormatter, u) : a.globals.xLabelFormatter(u, c)), void 0 !== a.config.tooltip.x.formatter && (n = a.globals.ttKeyFormatter(u, c)), a.globals.seriesZ.length > 0 && a.globals.seriesZ[0].length > 0 && (l = d(a.globals.seriesZ[e][i], a)), (o = 'function' == typeof a.config.xaxis.tooltip.formatter ? a.globals.xaxisTooltipFormatter(u, c) : n), { val: h, xVal: n, xAxisTTVal: o, zVal: l };
                    },
                  },
                  {
                    key: 'handleCustomTooltip',
                    value: function (t) {
                      var e = t.i,
                        i = t.j,
                        a = this.w;
                      this.ttCtx.getElTooltip().innerHTML = a.config.tooltip.custom({
                        series: a.globals.series,
                        seriesIndex: e,
                        dataPointIndex: i,
                        w: a,
                      });
                    },
                  },
                ]),
                t
              );
            })();
          t.exports = l;
        },
        function (t, e, i) {
          function a(t) {
            return t && t.__esModule ? t : { default: t };
          }
          function s(t, e) {
            if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
          }
          var n = (function () {
              function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                  var a = e[i];
                  (a.enumerable = a.enumerable || !1), (a.configurable = !0), 'value' in a && (a.writable = !0), Object.defineProperty(t, a.key, a);
                }
              }
              return function (e, i, a) {
                return i && t(e.prototype, i), a && t(e, a), e;
              };
            })(),
            r = a(i(0)),
            o = a(i(24)),
            l = a(i(8)),
            h = a(i(1)),
            c = (function () {
              function t(e) {
                s(this, t), (this.w = e.w), (this.ttCtx = e), (this.ctx = e.ctx), (this.tooltipPosition = new o.default(e));
              }
              return (
                n(t, [
                  {
                    key: 'drawDynamicPoints',
                    value: function () {
                      for (var t = this.w, e = new r.default(this.ctx), i = new l.default(this.ctx), a = t.globals.dom.baseEl.querySelectorAll('.apexcharts-series'), s = 0; s < a.length; s++) {
                        var n = parseInt(a[s].getAttribute('data:realIndex')),
                          o = t.globals.dom.baseEl.querySelector(".apexcharts-series[data\\:realIndex='" + n + "'] .apexcharts-series-markers-wrap");
                        if (null !== o) {
                          var h = void 0,
                            c = 'apexcharts-marker w' + (Math.random() + 1).toString(36).substring(4);
                          ('line' !== t.config.chart.type && 'area' !== t.config.chart.type) || t.globals.comboCharts || t.config.tooltip.intersect || (c += ' no-pointer-events');
                          var d = i.getMarkerConfig(c, n);
                          (h = e.drawMarker(0, 0, d)).node.setAttribute('default-marker-size', 0);
                          var u = document.createElementNS(t.globals.svgNS, 'g');
                          u.classList.add('apexcharts-series-markers'), u.appendChild(h.node), o.appendChild(u);
                        }
                      }
                    },
                  },
                  {
                    key: 'enlargeCurrentPoint',
                    value: function (t, e) {
                      var i = this.w;
                      'bubble' !== i.config.chart.type && this.newPointSize(t, e);
                      var a = e.getAttribute('cx'),
                        s = e.getAttribute('cy');
                      this.tooltipPosition.moveXCrosshairs(a), this.fixedTooltip || this.tooltipPosition.moveTooltip(a, s, i.config.markers.hover.size);
                    },
                  },
                  {
                    key: 'enlargePoints',
                    value: function (t) {
                      for (var e = this.w, i = this, a = this.ttCtx, s = t, n = e.globals.dom.baseEl.querySelectorAll('.apexcharts-series:not(.apexcharts-series-collapsed) .apexcharts-marker'), r = e.config.markers.hover.size, o = 0; o < n.length; o++) {
                        var l = n[o].getAttribute('rel'),
                          h = n[o].getAttribute('index');
                        if ((void 0 === r && (r = e.globals.markers.size[h] + e.config.markers.hover.sizeOffset), s === parseInt(l))) {
                          i.newPointSize(s, n[o]);
                          var c = n[o].getAttribute('cx'),
                            d = n[o].getAttribute('cy');
                          i.tooltipPosition.moveXCrosshairs(c), a.fixedTooltip || i.tooltipPosition.moveTooltip(c, d, r);
                        } else i.oldPointSize(n[o]);
                      }
                    },
                  },
                  {
                    key: 'newPointSize',
                    value: function (t, e) {
                      var i = this.w,
                        a = i.config.markers.hover.size,
                        s = null;
                      s = 0 === t ? e.parentNode.firstChild : e.parentNode.lastChild;
                      var n = parseInt(s.getAttribute('index'));
                      void 0 === a && (a = i.globals.markers.size[n] + i.config.markers.hover.sizeOffset), s.setAttribute('r', a);
                    },
                  },
                  {
                    key: 'oldPointSize',
                    value: function (t) {
                      var e = parseInt(t.getAttribute('default-marker-size'));
                      t.setAttribute('r', e);
                    },
                  },
                  {
                    key: 'resetPointsSize',
                    value: function () {
                      for (var t = this.w.globals.dom.baseEl.querySelectorAll('.apexcharts-series:not(.apexcharts-series-collapsed) .apexcharts-marker'), e = 0; e < t.length; e++) {
                        var i = parseInt(t[e].getAttribute('default-marker-size'));
                        h.default.isNumber(i) ? t[e].setAttribute('r', i) : t[e].setAttribute('r', 0);
                      }
                    },
                  },
                ]),
                t
              );
            })();
          t.exports = c;
        },
        function (t, e, i) {
          function a(t) {
            return t && t.__esModule ? t : { default: t };
          }
          function s(t, e) {
            if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
          }
          var n = (function () {
              function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                  var a = e[i];
                  (a.enumerable = a.enumerable || !1), (a.configurable = !0), 'value' in a && (a.writable = !0), Object.defineProperty(t, a.key, a);
                }
              }
              return function (e, i, a) {
                return i && t(e.prototype, i), a && t(e, a), e;
              };
            })(),
            r = a(i(48)),
            o = a(i(24)),
            l = a(i(49)),
            h = a(i(47)),
            c = a(i(46)),
            d = a(i(0)),
            u = a(i(6)),
            f = a(i(12)),
            g = a(i(25)),
            p = (function () {
              function t(e) {
                s(this, t), (this.ctx = e), (this.w = e.w);
                var i = this.w;
                (this.tooltipUtil = new g.default(this)), (this.tooltipLabels = new r.default(this)), (this.tooltipPosition = new o.default(this)), (this.marker = new l.default(this)), (this.intersect = new h.default(this)), (this.axesTooltip = new c.default(this)), (this.showOnIntersect = i.config.tooltip.intersect), (this.showTooltipTitle = i.config.tooltip.x.show), (this.fixedTooltip = i.config.tooltip.fixed.enabled), (this.xaxisTooltip = null), (this.yaxisTTEls = null), (this.isBarHorizontal = i.config.plotOptions.bar.horizontal), (this.isBarShared = !i.config.plotOptions.bar.horizontal && i.config.tooltip.shared);
              }
              return (
                n(t, [
                  {
                    key: 'getElTooltip',
                    value: function (t) {
                      return t || (t = this), t.w.globals.dom.baseEl.querySelector('.apexcharts-tooltip');
                    },
                  },
                  {
                    key: 'getElXCrosshairs',
                    value: function () {
                      return this.w.globals.dom.baseEl.querySelector('.apexcharts-xcrosshairs');
                    },
                  },
                  {
                    key: 'getElGrid',
                    value: function () {
                      return this.w.globals.dom.baseEl.querySelector('.apexcharts-grid');
                    },
                  },
                  {
                    key: 'drawTooltip',
                    value: function (t) {
                      var e = this.w;
                      (this.xyRatios = t), (this.blxaxisTooltip = e.config.xaxis.tooltip.enabled && e.globals.axisCharts), (this.blyaxisTooltip = e.config.yaxis[0].tooltip.enabled && e.globals.axisCharts), (this.allTooltipSeriesGroups = []), e.globals.axisCharts || (this.showTooltipTitle = !1);
                      var i = document.createElement('div');
                      if ((i.classList.add('apexcharts-tooltip'), i.classList.add(e.config.tooltip.theme), e.globals.dom.elWrap.appendChild(i), e.globals.axisCharts)) {
                        this.axesTooltip.drawXaxisTooltip(), this.axesTooltip.drawYaxisTooltip(), this.axesTooltip.setXCrosshairWidth(), this.axesTooltip.handleYCrosshair();
                        var a = new f.default(this.ctx);
                        this.xAxisTicksPositions = a.getXAxisTicksPositions();
                      }
                      if ((((e.globals.comboCharts && !e.config.tooltip.shared) || (e.config.tooltip.intersect && !e.config.tooltip.shared) || ('bar' === e.config.chart.type && !e.config.tooltip.shared)) && (this.showOnIntersect = !0), (0 !== e.config.markers.size && 0 !== e.globals.markers.largestSize) || this.marker.drawDynamicPoints(this), e.globals.collapsedSeries.length !== e.globals.series.length)) {
                        (this.dataPointsDividedHeight = e.globals.gridHeight / e.globals.dataPoints), (this.dataPointsDividedWidth = e.globals.gridWidth / e.globals.dataPoints), this.showTooltipTitle && ((this.tooltipTitle = document.createElement('div')), this.tooltipTitle.classList.add('apexcharts-tooltip-title'), i.appendChild(this.tooltipTitle));
                        var s = e.globals.series.length;
                        (e.globals.xyCharts || e.globals.comboCharts) && e.config.tooltip.shared && (s = this.showOnIntersect ? 1 : e.globals.series.length), (this.ttItems = this.createTTElements(s)), this.addSVGEvents();
                      }
                    },
                  },
                  {
                    key: 'createTTElements',
                    value: function (t) {
                      for (var e = this.w, i = [], a = this.getElTooltip(), s = 0; s < t; s++) {
                        var n = document.createElement('div');
                        n.classList.add('apexcharts-tooltip-series-group');
                        var r = document.createElement('span');
                        r.classList.add('apexcharts-tooltip-marker'), (r.style.backgroundColor = e.globals.colors[s]), n.appendChild(r);
                        var o = document.createElement('div');
                        o.classList.add('apexcharts-tooltip-text');
                        var l = document.createElement('div');
                        l.classList.add('apexcharts-tooltip-y-group');
                        var h = document.createElement('span');
                        h.classList.add('apexcharts-tooltip-text-label'), l.appendChild(h);
                        var c = document.createElement('span');
                        c.classList.add('apexcharts-tooltip-text-value'), l.appendChild(c);
                        var d = document.createElement('div');
                        d.classList.add('apexcharts-tooltip-z-group');
                        var u = document.createElement('span');
                        u.classList.add('apexcharts-tooltip-text-z-label'), d.appendChild(u);
                        var f = document.createElement('span');
                        f.classList.add('apexcharts-tooltip-text-z-value'), d.appendChild(f), o.appendChild(l), o.appendChild(d), n.appendChild(o), a.appendChild(n), i.push(n);
                      }
                      return i;
                    },
                  },
                  {
                    key: 'addSVGEvents',
                    value: function () {
                      var t = this.w,
                        e = t.config.chart.type,
                        i = this.getElTooltip(),
                        a = !('bar' !== e && 'candlestick' !== e),
                        s = t.globals.dom.Paper.node,
                        n = this.getElGrid();
                      n && (this.seriesBound = n.getBoundingClientRect());
                      var r = [],
                        o = [],
                        l = { hoverArea: s, elGrid: n, tooltipEl: i, tooltipY: r, tooltipX: o, ttItems: this.ttItems },
                        h = void 0;
                      if (t.globals.axisCharts && ('area' === e || 'line' === e || 'scatter' === e || 'bubble' === e ? (h = t.globals.dom.baseEl.querySelectorAll(".apexcharts-series[data\\:longestSeries='true'] .apexcharts-marker")) : a ? (h = t.globals.dom.baseEl.querySelectorAll('.apexcharts-series .apexcharts-bar-area', '.apexcharts-series .apexcharts-candlestick-area')) : 'heatmap' === e && (h = t.globals.dom.baseEl.querySelectorAll('.apexcharts-series .apexcharts-heatmap')), h && h.length)) for (var c = 0; c < h.length; c++) r.push(h[c].getAttribute('cy')), o.push(h[c].getAttribute('cx'));
                      if ((t.globals.xyCharts && !this.showOnIntersect) || (t.globals.comboCharts && !this.showOnIntersect) || (a && this.hasBars() && t.config.tooltip.shared)) this.addPathsEventListeners([s], l);
                      else if (a && !t.globals.comboCharts) this.addBarsEventListeners(l);
                      else if ('bubble' === e || 'scatter' === e || (this.showOnIntersect && ('area' === e || 'line' === e))) this.addPointsEventsListeners(l);
                      else if (!t.globals.axisCharts || 'heatmap' === e) {
                        var d = t.globals.dom.baseEl.querySelectorAll('.apexcharts-series');
                        this.addPathsEventListeners(d, l);
                      }
                      if (this.showOnIntersect) {
                        var u = t.globals.dom.baseEl.querySelectorAll('.apexcharts-line-series .apexcharts-marker');
                        u.length > 0 && this.addPathsEventListeners(u, l);
                        var f = t.globals.dom.baseEl.querySelectorAll('.apexcharts-area-series .apexcharts-marker');
                        f.length > 0 && this.addPathsEventListeners(f, l), this.hasBars() && !t.config.tooltip.shared && this.addBarsEventListeners(l);
                      }
                    },
                  },
                  {
                    key: 'drawFixedTooltipRect',
                    value: function () {
                      var t = this.w,
                        e = this.getElTooltip(),
                        i = e.getBoundingClientRect(),
                        a = i.width + 10,
                        s = i.height + 10,
                        n = t.config.tooltip.fixed.offsetX,
                        r = t.config.tooltip.fixed.offsetY;
                      return t.config.tooltip.fixed.position.toLowerCase().indexOf('right') > -1 && (n = n + t.globals.svgWidth - a + 10), t.config.tooltip.fixed.position.toLowerCase().indexOf('bottom') > -1 && (r = r + t.globals.svgHeight - s - 10), (e.style.left = n + 'px'), (e.style.top = r + 'px'), { x: n, y: r, ttWidth: a, ttHeight: s };
                    },
                  },
                  {
                    key: 'addPointsEventsListeners',
                    value: function (t) {
                      var e = this.w.globals.dom.baseEl.querySelectorAll('.apexcharts-series-markers .apexcharts-marker');
                      this.addPathsEventListeners(e, t);
                    },
                  },
                  {
                    key: 'addBarsEventListeners',
                    value: function (t) {
                      var e = this.w.globals.dom.baseEl.querySelectorAll('.apexcharts-bar-area, .apexcharts-candlestick-area');
                      this.addPathsEventListeners(e, t);
                    },
                  },
                  {
                    key: 'addPathsEventListeners',
                    value: function (t, e) {
                      for (var i = this, a = this, s = 0; s < t.length; s++)
                        !(function (s) {
                          var n = {
                            paths: t[s],
                            tooltipEl: e.tooltipEl,
                            tooltipY: e.tooltipY,
                            tooltipX: e.tooltipX,
                            elGrid: e.elGrid,
                            hoverArea: e.hoverArea,
                            ttItems: e.ttItems,
                          };
                          (i.w.globals.tooltipOpts = n),
                            ['mousemove', 'touchmove', 'mouseout', 'touchend'].map(function (e) {
                              return t[s].addEventListener(e, a.seriesHover.bind(a, n), { capture: !1, passive: !0 });
                            });
                        })(s);
                    },
                  },
                  {
                    key: 'seriesHover',
                    value: function (t, e) {
                      var i = this,
                        a = [];
                      this.w.config.chart.group && (a = this.ctx.getGroupedCharts()),
                        a.length
                          ? a.forEach(function (a) {
                              var s = i.getElTooltip(a),
                                n = {
                                  paths: t.paths,
                                  tooltipEl: s,
                                  tooltipY: t.tooltipY,
                                  tooltipX: t.tooltipX,
                                  elGrid: t.elGrid,
                                  hoverArea: t.hoverArea,
                                  ttItems: a.w.globals.tooltip.ttItems,
                                };
                              a.w.globals.minX === i.w.globals.minX && a.w.globals.maxX === i.w.globals.maxX && a.w.globals.tooltip.seriesHoverByContext({ chartCtx: a, ttCtx: a.w.globals.tooltip, opt: n, e: e });
                            })
                          : this.seriesHoverByContext({ chartCtx: this.ctx, ttCtx: this.w.globals.tooltip, opt: t, e: e });
                    },
                  },
                  {
                    key: 'seriesHoverByContext',
                    value: function (t) {
                      var e = t.chartCtx,
                        i = t.ttCtx,
                        a = t.opt,
                        s = t.e,
                        n = e.w,
                        r = this.getElTooltip();
                      (i.tooltipRect = {
                        x: 0,
                        y: 0,
                        ttWidth: r.getBoundingClientRect().width,
                        ttHeight: r.getBoundingClientRect().height,
                      }),
                        (i.e = s),
                        !i.hasBars() || n.globals.comboCharts || i.isBarShared || (n.config.tooltip.onDatasetHover.highlightDataSeries && new u.default(e).toggleSeriesOnHover(s, s.target.parentNode)),
                        i.fixedTooltip && i.drawFixedTooltipRect(),
                        n.globals.axisCharts ? i.axisChartsTooltips({ e: s, opt: a, tooltipRect: i.tooltipRect }) : i.nonAxisChartsTooltips({ e: s, opt: a, tooltipRect: i.tooltipRect });
                    },
                  },
                  {
                    key: 'axisChartsTooltips',
                    value: function (t) {
                      var e = t.e,
                        i = t.opt,
                        a = this.w,
                        s = void 0,
                        n = void 0,
                        r = void 0,
                        o = this,
                        l = null,
                        h = this.getElTooltip(),
                        c = this.getElXCrosshairs(),
                        d = 'touchmove' === e.type ? e.touches[0].clientX : e.clientX,
                        u = 'touchmove' === e.type ? e.touches[0].clientY : e.clientY;
                      (this.clientY = u), (this.clientX = d);
                      var f = a.globals.xyCharts || ('bar' === a.config.chart.type && !this.isBarHorizontal && this.hasBars() && a.config.tooltip.shared) || (a.globals.comboCharts && this.hasBars);
                      if (('bar' === a.config.chart.type && this.isBarHorizontal && this.hasBars() && (f = !1), 'mousemove' === e.type || 'touchmove' === e.type)) {
                        if ((null !== c && c.classList.add('active'), null !== o.ycrosshairs && o.blyaxisTooltip && o.ycrosshairs.classList.add('active'), f && !o.showOnIntersect)) {
                          s = (l = o.tooltipUtil.getNearestValues({
                            context: o,
                            hoverArea: i.hoverArea,
                            elGrid: i.elGrid,
                            clientX: d,
                            clientY: u,
                            hasBars: o.hasBars,
                          })).j;
                          var g = l.capturedSeries;
                          if (l.hoverX < 0 || l.hoverX > a.globals.gridWidth) return void o.handleMouseOut(i);
                          if (null !== g) {
                            if (null === a.globals.series[g][s]) return void i.tooltipEl.classList.remove('active');
                            void 0 !== a.globals.series[g][s] ? (a.config.tooltip.shared && this.tooltipUtil.isXoverlap(s) && this.tooltipUtil.isinitialSeriesSameLen() ? this.create(o, g, s, i.ttItems) : this.create(o, g, s, i.ttItems, !1)) : this.tooltipUtil.isXoverlap(s) && o.create(o, 0, s, i.ttItems);
                          } else this.tooltipUtil.isXoverlap(s) && o.create(o, 0, s, i.ttItems);
                        } else if ('heatmap' === a.config.chart.type) {
                          var p = this.intersect.handleHeatTooltip({ e: e, opt: i, x: n, y: r });
                          (n = p.x), (r = p.y), (h.style.left = n + 'px'), (h.style.top = r + 'px');
                        } else this.hasBars && this.intersect.handleBarTooltip({ e: e, opt: i }), this.hasMarkers && this.intersect.handleMarkerTooltip({ e: e, opt: i, x: n, y: r });
                        if (this.blyaxisTooltip) for (var x = 0; x < a.config.yaxis.length; x++) o.axesTooltip.drawYaxisTooltipText(x, u, o.xyRatios);
                        i.tooltipEl.classList.add('active');
                      } else ('mouseout' !== e.type && 'touchend' !== e.type) || this.handleMouseOut(i);
                    },
                  },
                  {
                    key: 'nonAxisChartsTooltips',
                    value: function (t) {
                      var e = t.e,
                        i = t.opt,
                        a = t.tooltipRect,
                        s = this.w,
                        n = i.paths.getAttribute('rel'),
                        r = this.getElTooltip(),
                        o = 0,
                        l = 0,
                        h = null,
                        c = 'touchmove' === e.type ? e.touches[0].clientX : e.clientX;
                      'radialBar' === s.config.chart.type ? (h = s.globals.dom.baseEl.querySelector('.apexcharts-radialbar')) : ((h = s.globals.dom.baseEl.querySelector('.apexcharts-pie')), (o = parseInt(h.getAttribute('data:innerTranslateX'))), (l = parseInt(h.getAttribute('data:innerTranslateY'))));
                      var d = h.getBoundingClientRect();
                      if ('mousemove' === e.type || 'touchmove' === e.type) {
                        r.classList.add('active'), this.tooltipLabels.drawSeriesTexts({ ttItems: i.ttItems, i: parseInt(n) - 1, shared: !1 });
                        var u = c - d.left - a.ttWidth / 2.2 + o,
                          f = e.clientY - d.top - a.ttHeight / 2 - 15 + l;
                        u < 0 ? (u = 0) : u + a.ttWidth > s.globals.gridWidth && (u = c - d.left - a.ttWidth + o), f < 0 && (f = a.ttHeight + 20), (r.style.left = u + s.globals.translateX + 'px'), (r.style.top = f + 'px');
                      } else ('mouseout' !== e.type && 'touchend' !== e.type) || r.classList.remove('active');
                    },
                  },
                  {
                    key: 'deactivateHoverFilter',
                    value: function () {
                      for (var t = this.w, e = new d.default(this.ctx), i = t.globals.dom.Paper.select('.apexcharts-bar-area'), a = 0; a < i.length; a++) e.pathMouseLeave(i[a]);
                    },
                  },
                  {
                    key: 'handleMouseOut',
                    value: function (t) {
                      var e = this.w,
                        i = this.getElXCrosshairs();
                      if ((t.tooltipEl.classList.remove('active'), this.deactivateHoverFilter(), 'bubble' !== e.config.chart.type && this.marker.resetPointsSize(), null !== i && i.classList.remove('active'), null !== this.ycrosshairs && this.ycrosshairs.classList.remove('active'), this.blxaxisTooltip && this.xaxisTooltip.classList.remove('active'), this.blyaxisTooltip)) {
                        null === this.yaxisTTEls && (this.yaxisTTEls = e.globals.dom.baseEl.querySelectorAll('.apexcharts-yaxistooltip'));
                        for (var a = 0; a < this.yaxisTTEls.length; a++) this.yaxisTTEls[a].classList.remove('active');
                      }
                    },
                  },
                  {
                    key: 'getElMarkers',
                    value: function () {
                      return this.w.globals.dom.baseEl.querySelectorAll(' .apexcharts-series-markers');
                    },
                  },
                  {
                    key: 'getAllMarkers',
                    value: function () {
                      return this.w.globals.dom.baseEl.querySelectorAll('.apexcharts-series-markers .apexcharts-marker');
                    },
                  },
                  {
                    key: 'hasMarkers',
                    value: function () {
                      return this.getElMarkers().length > 0;
                    },
                  },
                  {
                    key: 'getElBars',
                    value: function () {
                      return this.w.globals.dom.baseEl.querySelectorAll('.apexcharts-bar-series,  .apexcharts-candlestick-series');
                    },
                  },
                  {
                    key: 'hasBars',
                    value: function () {
                      return this.getElBars().length > 0;
                    },
                  },
                  {
                    key: 'create',
                    value: function (t, e, i, a) {
                      var s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                        n = this.w,
                        r = t;
                      null === s && (s = n.config.tooltip.shared);
                      var o = this.hasMarkers(),
                        l = this.getElBars();
                      if (s) {
                        if (
                          (r.tooltipLabels.drawSeriesTexts({
                            ttItems: a,
                            i: e,
                            j: i,
                            shared: !this.showOnIntersect && n.config.tooltip.shared,
                          }),
                          o && (n.globals.markers.largestSize > 0 ? r.marker.enlargePoints(i) : r.tooltipPosition.moveDynamicPointsOnHover(i)),
                          this.hasBars() && ((this.barSeriesHeight = this.tooltipUtil.getBarsHeight(l)), this.barSeriesHeight > 0))
                        ) {
                          var h = new d.default(this.ctx),
                            c = n.globals.dom.Paper.select(".apexcharts-bar-area[j='" + i + "']");
                          this.deactivateHoverFilter(), this.tooltipPosition.moveStickyTooltipOverBars(i);
                          for (var u = 0; u < c.length; u++) h.pathMouseEnter(c[u]);
                        }
                      } else r.tooltipLabels.drawSeriesTexts({ shared: !1, ttItems: a, i: e, j: i }), this.hasBars() && r.tooltipPosition.moveStickyTooltipOverBars(i), o && r.tooltipPosition.moveMarkers(e, i);
                    },
                  },
                ]),
                t
              );
            })();
          t.exports = p;
        },
        function (t, e, i) {
          t.exports = function (t) {
            var e = 'undefined' != typeof window && window.location;
            if (!e) throw new Error('fixUrls requires window.location');
            if (!t || 'string' != typeof t) return t;
            var i = e.protocol + '//' + e.host,
              a = i + e.pathname.replace(/\/[^\/]*$/, '/');
            return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (t, e) {
              var s = e
                .trim()
                .replace(/^"(.*)"$/, function (t, e) {
                  return e;
                })
                .replace(/^'(.*)'$/, function (t, e) {
                  return e;
                });
              if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(s)) return t;
              var n;
              return (n = 0 === s.indexOf('//') ? s : 0 === s.indexOf('/') ? i + s : a + s.replace(/^\.\//, '')), 'url(' + JSON.stringify(n) + ')';
            });
          };
        },
        function (t, e, i) {
          var a =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t;
                };
          (function () {
            function t(t) {
              t.remember('_draggable', this), (this.el = t);
            }
            (t.prototype.init = function (t, e) {
              var i = this;
              (this.constraint = t),
                (this.value = e),
                this.el.on('mousedown.drag', function (t) {
                  i.start(t);
                }),
                this.el.on('touchstart.drag', function (t) {
                  i.start(t);
                });
            }),
              (t.prototype.transformPoint = function (t, e) {
                var i = ((t = t || window.event).changedTouches && t.changedTouches[0]) || t;
                return (this.p.x = i.pageX - (e || 0)), (this.p.y = i.pageY), this.p.matrixTransform(this.m);
              }),
              (t.prototype.getBBox = function () {
                var t = this.el.bbox();
                return this.el instanceof SVG.Nested && (t = this.el.rbox()), (this.el instanceof SVG.G || this.el instanceof SVG.Use || this.el instanceof SVG.Nested) && ((t.x = this.el.x()), (t.y = this.el.y())), t;
              }),
              (t.prototype.start = function (t) {
                if (('click' != t.type && 'mousedown' != t.type && 'mousemove' != t.type) || 1 == (t.which || t.buttons)) {
                  var e = this;
                  this.el.fire('beforedrag', { event: t, handler: this }), (this.parent = this.parent || this.el.parent(SVG.Nested) || this.el.parent(SVG.Doc)), (this.p = this.parent.node.createSVGPoint()), (this.m = this.el.node.getScreenCTM().inverse());
                  var i,
                    a = this.getBBox();
                  if (this.el instanceof SVG.Text)
                    switch (((i = this.el.node.getComputedTextLength()), this.el.attr('text-anchor'))) {
                      case 'middle':
                        i /= 2;
                        break;
                      case 'start':
                        i = 0;
                    }
                  (this.startPoints = { point: this.transformPoint(t, i), box: a, transform: this.el.transform() }),
                    SVG.on(window, 'mousemove.drag', function (t) {
                      e.drag(t);
                    }),
                    SVG.on(window, 'touchmove.drag', function (t) {
                      e.drag(t);
                    }),
                    SVG.on(window, 'mouseup.drag', function (t) {
                      e.end(t);
                    }),
                    SVG.on(window, 'touchend.drag', function (t) {
                      e.end(t);
                    }),
                    this.el.fire('dragstart', { event: t, p: this.startPoints.point, m: this.m, handler: this }),
                    t.preventDefault(),
                    t.stopPropagation();
                }
              }),
              (t.prototype.drag = function (t) {
                var e = this.getBBox(),
                  i = this.transformPoint(t),
                  s = this.startPoints.box.x + i.x - this.startPoints.point.x,
                  n = this.startPoints.box.y + i.y - this.startPoints.point.y,
                  r = this.constraint,
                  o = i.x - this.startPoints.point.x,
                  l = i.y - this.startPoints.point.y,
                  h = new CustomEvent('dragmove', { detail: { event: t, p: i, m: this.m, handler: this }, cancelable: !0 });
                if ((this.el.fire(h), h.defaultPrevented)) return i;
                if ('function' == typeof r) {
                  var c = r.call(this.el, s, n, this.m);
                  'boolean' == typeof c && (c = { x: c, y: c }), !0 === c.x ? this.el.x(s) : !1 !== c.x && this.el.x(c.x), !0 === c.y ? this.el.y(n) : !1 !== c.y && this.el.y(c.y);
                } else 'object' == (void 0 === r ? 'undefined' : a(r)) && (null != r.minX && s < r.minX ? (s = r.minX) : null != r.maxX && s > r.maxX - e.width && (s = r.maxX - e.width), null != r.minY && n < r.minY ? (n = r.minY) : null != r.maxY && n > r.maxY - e.height && (n = r.maxY - e.height), this.el instanceof SVG.G ? this.el.matrix(this.startPoints.transform).transform({ x: o, y: l }, !0) : this.el.move(s, n));
                return i;
              }),
              (t.prototype.end = function (t) {
                var e = this.drag(t);
                this.el.fire('dragend', { event: t, p: e, m: this.m, handler: this }), SVG.off(window, 'mousemove.drag'), SVG.off(window, 'touchmove.drag'), SVG.off(window, 'mouseup.drag'), SVG.off(window, 'touchend.drag');
              }),
              SVG.extend(SVG.Element, {
                draggable: function (e, i) {
                  ('function' != typeof e && 'object' != (void 0 === e ? 'undefined' : a(e))) || ((i = e), (e = !0));
                  var s = this.remember('_draggable') || new t(this);
                  return (e = void 0 === e || e), e ? s.init(i || {}, e) : (this.off('mousedown.drag'), this.off('touchstart.drag')), this;
                },
              });
          }.call(void 0));
        },
        function (t, e, i) {
          (function () {
            function t(t) {
              return Array.isArray(t) && (t = new SVG.Array(t)), t.toString().replace(/^\s+/, '').replace(/\s+$/, '').replace(/\s+/g, ' ');
            }
            function e(t) {
              if (!Array.isArray(t)) return t;
              for (var e = 0, i = t.length, a = []; e < i; e++) a.push(t[e]);
              return a.join(' ');
            }
            function i() {
              var t = function () {};
              'function' == typeof arguments[arguments.length - 1] && ((t = arguments[arguments.length - 1]), Array.prototype.splice.call(arguments, arguments.length - 1, 1));
              for (var e in arguments) for (var i in arguments[e]) t(arguments[e][i], i, arguments[e]);
            }
            (SVG.Filter = SVG.invent({
              create: 'filter',
              inherit: SVG.Parent,
              extend: {
                source: 'SourceGraphic',
                sourceAlpha: 'SourceAlpha',
                background: 'BackgroundImage',
                backgroundAlpha: 'BackgroundAlpha',
                fill: 'FillPaint',
                stroke: 'StrokePaint',
                autoSetIn: !0,
                put: function (t, e) {
                  return this.add(t, e), !t.attr('in') && this.autoSetIn && t.attr('in', this.source), t.attr('result') || t.attr('result', t), t;
                },
                blend: function (t, e, i) {
                  return this.put(new SVG.BlendEffect(t, e, i));
                },
                colorMatrix: function (t, e) {
                  return this.put(new SVG.ColorMatrixEffect(t, e));
                },
                convolveMatrix: function (t) {
                  return this.put(new SVG.ConvolveMatrixEffect(t));
                },
                componentTransfer: function (t) {
                  return this.put(new SVG.ComponentTransferEffect(t));
                },
                composite: function (t, e, i) {
                  return this.put(new SVG.CompositeEffect(t, e, i));
                },
                flood: function (t, e) {
                  return this.put(new SVG.FloodEffect(t, e));
                },
                offset: function (t, e) {
                  return this.put(new SVG.OffsetEffect(t, e));
                },
                image: function (t) {
                  return this.put(new SVG.ImageEffect(t));
                },
                merge: function () {
                  var t = [void 0];
                  for (var e in arguments) t.push(arguments[e]);
                  return this.put(new (SVG.MergeEffect.bind.apply(SVG.MergeEffect, t))());
                },
                gaussianBlur: function (t, e) {
                  return this.put(new SVG.GaussianBlurEffect(t, e));
                },
                morphology: function (t, e) {
                  return this.put(new SVG.MorphologyEffect(t, e));
                },
                diffuseLighting: function (t, e, i) {
                  return this.put(new SVG.DiffuseLightingEffect(t, e, i));
                },
                displacementMap: function (t, e, i, a, s) {
                  return this.put(new SVG.DisplacementMapEffect(t, e, i, a, s));
                },
                specularLighting: function (t, e, i, a) {
                  return this.put(new SVG.SpecularLightingEffect(t, e, i, a));
                },
                tile: function () {
                  return this.put(new SVG.TileEffect());
                },
                turbulence: function (t, e, i, a, s) {
                  return this.put(new SVG.TurbulenceEffect(t, e, i, a, s));
                },
                toString: function () {
                  return 'url(#' + this.attr('id') + ')';
                },
              },
            })),
              SVG.extend(SVG.Defs, {
                filter: function (t) {
                  var e = this.put(new SVG.Filter());
                  return 'function' == typeof t && t.call(e, e), e;
                },
              }),
              SVG.extend(SVG.Container, {
                filter: function (t) {
                  return this.defs().filter(t);
                },
              }),
              SVG.extend(SVG.Element, SVG.G, SVG.Nested, {
                filter: function (t) {
                  return (this.filterer = t instanceof SVG.Element ? t : this.doc().filter(t)), this.doc() && this.filterer.doc() !== this.doc() && this.doc().defs().add(this.filterer), this.attr('filter', this.filterer), this.filterer;
                },
                unfilter: function (t) {
                  return this.filterer && !0 === t && this.filterer.remove(), delete this.filterer, this.attr('filter', null);
                },
              }),
              (SVG.Effect = SVG.invent({
                create: function () {
                  this.constructor.call(this);
                },
                inherit: SVG.Element,
                extend: {
                  in: function (t) {
                    return null == t
                      ? (this.parent() &&
                          this.parent()
                            .select('[result="' + this.attr('in') + '"]')
                            .get(0)) ||
                          this.attr('in')
                      : this.attr('in', t);
                  },
                  result: function (t) {
                    return null == t ? this.attr('result') : this.attr('result', t);
                  },
                  toString: function () {
                    return this.result();
                  },
                },
              })),
              (SVG.ParentEffect = SVG.invent({
                create: function () {
                  this.constructor.call(this);
                },
                inherit: SVG.Parent,
                extend: {
                  in: function (t) {
                    return null == t
                      ? (this.parent() &&
                          this.parent()
                            .select('[result="' + this.attr('in') + '"]')
                            .get(0)) ||
                          this.attr('in')
                      : this.attr('in', t);
                  },
                  result: function (t) {
                    return null == t ? this.attr('result') : this.attr('result', t);
                  },
                  toString: function () {
                    return this.result();
                  },
                },
              }));
            var a = {
              blend: function (t, e) {
                return this.parent() && this.parent().blend(this, t, e);
              },
              colorMatrix: function (t, e) {
                return this.parent() && this.parent().colorMatrix(t, e).in(this);
              },
              convolveMatrix: function (t) {
                return this.parent() && this.parent().convolveMatrix(t).in(this);
              },
              componentTransfer: function (t) {
                return this.parent() && this.parent().componentTransfer(t).in(this);
              },
              composite: function (t, e) {
                return this.parent() && this.parent().composite(this, t, e);
              },
              flood: function (t, e) {
                return this.parent() && this.parent().flood(t, e);
              },
              offset: function (t, e) {
                return this.parent() && this.parent().offset(t, e).in(this);
              },
              image: function (t) {
                return this.parent() && this.parent().image(t);
              },
              merge: function () {
                return this.parent() && this.parent().merge.apply(this.parent(), [this].concat(arguments));
              },
              gaussianBlur: function (t, e) {
                return this.parent() && this.parent().gaussianBlur(t, e).in(this);
              },
              morphology: function (t, e) {
                return this.parent() && this.parent().morphology(t, e).in(this);
              },
              diffuseLighting: function (t, e, i) {
                return this.parent() && this.parent().diffuseLighting(t, e, i).in(this);
              },
              displacementMap: function (t, e, i, a) {
                return this.parent() && this.parent().displacementMap(this, t, e, i, a);
              },
              specularLighting: function (t, e, i, a) {
                return this.parent() && this.parent().specularLighting(t, e, i, a).in(this);
              },
              tile: function () {
                return this.parent() && this.parent().tile().in(this);
              },
              turbulence: function (t, e, i, a, s) {
                return this.parent() && this.parent().turbulence(t, e, i, a, s).in(this);
              },
            };
            SVG.extend(SVG.Effect, a),
              SVG.extend(SVG.ParentEffect, a),
              (SVG.ChildEffect = SVG.invent({
                create: function () {
                  this.constructor.call(this);
                },
                inherit: SVG.Element,
                extend: {
                  in: function (t) {
                    this.attr('in', t);
                  },
                },
              }));
            var s = {
                blend: function (t, e, i) {
                  this.attr({ in: t, in2: e, mode: i || 'normal' });
                },
                colorMatrix: function (e, i) {
                  'matrix' == e && (i = t(i)), this.attr({ type: e, values: void 0 === i ? null : i });
                },
                convolveMatrix: function (e) {
                  (e = t(e)), this.attr({ order: Math.sqrt(e.split(' ').length), kernelMatrix: e });
                },
                composite: function (t, e, i) {
                  this.attr({ in: t, in2: e, operator: i });
                },
                flood: function (t, e) {
                  this.attr('flood-color', t), null != e && this.attr('flood-opacity', e);
                },
                offset: function (t, e) {
                  this.attr({ dx: t, dy: e });
                },
                image: function (t) {
                  this.attr('href', t, SVG.xlink);
                },
                displacementMap: function (t, e, i, a, s) {
                  this.attr({ in: t, in2: e, scale: i, xChannelSelector: a, yChannelSelector: s });
                },
                gaussianBlur: function (t, i) {
                  null != t || null != i ? this.attr('stdDeviation', e(Array.prototype.slice.call(arguments))) : this.attr('stdDeviation', '0 0');
                },
                morphology: function (t, e) {
                  this.attr({ operator: t, radius: e });
                },
                tile: function () {},
                turbulence: function (t, e, i, a, s) {
                  this.attr({ numOctaves: e, seed: i, stitchTiles: a, baseFrequency: t, type: s });
                },
              },
              n = {
                merge: function () {
                  var t;
                  if (arguments[0] instanceof SVG.Set) {
                    var e = this;
                    arguments[0].each(function (t) {
                      this instanceof SVG.MergeNode ? e.put(this) : (this instanceof SVG.Effect || this instanceof SVG.ParentEffect) && e.put(new SVG.MergeNode(this));
                    });
                  } else {
                    t = Array.isArray(arguments[0]) ? arguments[0] : arguments;
                    for (var i = 0; i < t.length; i++) t[i] instanceof SVG.MergeNode ? this.put(t[i]) : this.put(new SVG.MergeNode(t[i]));
                  }
                },
                componentTransfer: function (t) {
                  if (
                    ((this.rgb = new SVG.Set()),
                    ['r', 'g', 'b', 'a'].forEach(
                      function (t) {
                        (this[t] = new SVG['Func' + t.toUpperCase()]('identity')), this.rgb.add(this[t]), this.node.appendChild(this[t].node);
                      }.bind(this)
                    ),
                    t)
                  ) {
                    t.rgb &&
                      (['r', 'g', 'b'].forEach(
                        function (e) {
                          this[e].attr(t.rgb);
                        }.bind(this)
                      ),
                      delete t.rgb);
                    for (var e in t) this[e].attr(t[e]);
                  }
                },
                diffuseLighting: function (t, e, i) {
                  this.attr({ surfaceScale: t, diffuseConstant: e, kernelUnitLength: i });
                },
                specularLighting: function (t, e, i, a) {
                  this.attr({ surfaceScale: t, diffuseConstant: e, specularExponent: i, kernelUnitLength: a });
                },
              },
              r = {
                distantLight: function (t, e) {
                  this.attr({ azimuth: t, elevation: e });
                },
                pointLight: function (t, e, i) {
                  this.attr({ x: t, y: e, z: i });
                },
                spotLight: function (t, e, i, a, s, n) {
                  this.attr({ x: t, y: e, z: i, pointsAtX: a, pointsAtY: s, pointsAtZ: n });
                },
                mergeNode: function (t) {
                  this.attr('in', t);
                },
              };
            ['r', 'g', 'b', 'a'].forEach(function (t) {
              r['Func' + t.toUpperCase()] = function (t) {
                switch ((this.attr('type', t), t)) {
                  case 'table':
                    this.attr('tableValues', arguments[1]);
                    break;
                  case 'linear':
                    this.attr('slope', arguments[1]), this.attr('intercept', arguments[2]);
                    break;
                  case 'gamma':
                    this.attr('amplitude', arguments[1]), this.attr('exponent', arguments[2]), this.attr('offset', arguments[2]);
                }
              };
            }),
              i(s, function (t, e) {
                var i = e.charAt(0).toUpperCase() + e.slice(1),
                  a = {};
                SVG[i + 'Effect'] = SVG.invent({
                  create: function () {
                    this.constructor.call(this, SVG.create('fe' + i)), t.apply(this, arguments), this.result(this.attr('id') + 'Out');
                  },
                  inherit: SVG.Effect,
                  extend: a,
                });
              }),
              i(n, function (t, e) {
                var i = e.charAt(0).toUpperCase() + e.slice(1),
                  a = {};
                SVG[i + 'Effect'] = SVG.invent({
                  create: function () {
                    this.constructor.call(this, SVG.create('fe' + i)), t.apply(this, arguments), this.result(this.attr('id') + 'Out');
                  },
                  inherit: SVG.ParentEffect,
                  extend: a,
                });
              }),
              i(r, function (t, e) {
                var i = e.charAt(0).toUpperCase() + e.slice(1),
                  a = {};
                SVG[i] = SVG.invent({
                  create: function () {
                    this.constructor.call(this, SVG.create('fe' + i)), t.apply(this, arguments);
                  },
                  inherit: SVG.ChildEffect,
                  extend: a,
                });
              }),
              SVG.extend(SVG.MergeEffect, {
                in: function (t) {
                  return t instanceof SVG.MergeNode ? this.add(t, 0) : this.add(new SVG.MergeNode(t), 0), this;
                },
              }),
              SVG.extend(SVG.CompositeEffect, SVG.BlendEffect, SVG.DisplacementMapEffect, {
                in2: function (t) {
                  return null == t
                    ? (this.parent() &&
                        this.parent()
                          .select('[result="' + this.attr('in2') + '"]')
                          .get(0)) ||
                        this.attr('in2')
                    : this.attr('in2', t);
                },
              }),
              (SVG.filter = { sepiatone: [0.343, 0.669, 0.119, 0, 0, 0.249, 0.626, 0.13, 0, 0, 0.172, 0.334, 0.111, 0, 0, 0, 0, 0, 1, 0] });
          }.call(void 0));
        },
        function (t, e, i) {
          !(function () {
            function t(t, s, n, r, o, l, h) {
              for (var c = t.slice(s, n || h), d = r.slice(o, l || h), u = 0, f = { pos: [0, 0], start: [0, 0] }, g = { pos: [0, 0], start: [0, 0] }; ; ) {
                if (((c[u] = e.call(f, c[u])), (d[u] = e.call(g, d[u])), c[u][0] != d[u][0] || 'M' == c[u][0] || ('A' == c[u][0] && (c[u][4] != d[u][4] || c[u][5] != d[u][5])) ? (Array.prototype.splice.apply(c, [u, 1].concat(a.call(f, c[u]))), Array.prototype.splice.apply(d, [u, 1].concat(a.call(g, d[u])))) : ((c[u] = i.call(f, c[u])), (d[u] = i.call(g, d[u]))), ++u == c.length && u == d.length)) break;
                u == c.length && c.push(['C', f.pos[0], f.pos[1], f.pos[0], f.pos[1], f.pos[0], f.pos[1]]), u == d.length && d.push(['C', g.pos[0], g.pos[1], g.pos[0], g.pos[1], g.pos[0], g.pos[1]]);
              }
              return { start: c, dest: d };
            }
            function e(t) {
              switch (t[0]) {
                case 'z':
                case 'Z':
                  (t[0] = 'L'), (t[1] = this.start[0]), (t[2] = this.start[1]);
                  break;
                case 'H':
                  (t[0] = 'L'), (t[2] = this.pos[1]);
                  break;
                case 'V':
                  (t[0] = 'L'), (t[2] = t[1]), (t[1] = this.pos[0]);
                  break;
                case 'T':
                  (t[0] = 'Q'), (t[3] = t[1]), (t[4] = t[2]), (t[1] = this.reflection[1]), (t[2] = this.reflection[0]);
                  break;
                case 'S':
                  (t[0] = 'C'), (t[6] = t[4]), (t[5] = t[3]), (t[4] = t[2]), (t[3] = t[1]), (t[2] = this.reflection[1]), (t[1] = this.reflection[0]);
              }
              return t;
            }
            function i(t) {
              var e = t.length;
              return (this.pos = [t[e - 2], t[e - 1]]), -1 != 'SCQT'.indexOf(t[0]) && (this.reflection = [2 * this.pos[0] - t[e - 4], 2 * this.pos[1] - t[e - 3]]), t;
            }
            function a(t) {
              var e = [t];
              switch (t[0]) {
                case 'M':
                  return (this.pos = this.start = [t[1], t[2]]), e;
                case 'L':
                  (t[5] = t[3] = t[1]), (t[6] = t[4] = t[2]), (t[1] = this.pos[0]), (t[2] = this.pos[1]);
                  break;
                case 'Q':
                  (t[6] = t[4]), (t[5] = t[3]), (t[4] = (1 * t[4]) / 3 + (2 * t[2]) / 3), (t[3] = (1 * t[3]) / 3 + (2 * t[1]) / 3), (t[2] = (1 * this.pos[1]) / 3 + (2 * t[2]) / 3), (t[1] = (1 * this.pos[0]) / 3 + (2 * t[1]) / 3);
                  break;
                case 'A':
                  t = (e = n(this.pos, t))[0];
              }
              return (t[0] = 'C'), (this.pos = [t[5], t[6]]), (this.reflection = [2 * t[5] - t[3], 2 * t[6] - t[4]]), e;
            }
            function s(t, e) {
              if (!1 === e) return !1;
              for (var i = e, a = t.length; i < a; ++i) if ('M' == t[i][0]) return i;
              return !1;
            }
            function n(t, e) {
              var i,
                a,
                s,
                n,
                r,
                o,
                l,
                h,
                c,
                d,
                u,
                f,
                g,
                p,
                x,
                b,
                v,
                m,
                y,
                w,
                k,
                S,
                A,
                C,
                M,
                P,
                L = Math.abs(e[1]),
                E = Math.abs(e[2]),
                T = e[3] % 360,
                z = e[4],
                X = e[5],
                Y = e[6],
                O = e[7],
                I = new SVG.Point(t),
                F = new SVG.Point(Y, O),
                D = [];
              if (0 === L || 0 === E || (I.x === F.x && I.y === F.y)) return [['C', I.x, I.y, F.x, F.y, F.x, F.y]];
              for (
                (a = ((i = new SVG.Point((I.x - F.x) / 2, (I.y - F.y) / 2).transform(new SVG.Matrix().rotate(T))).x * i.x) / (L * L) + (i.y * i.y) / (E * E)) > 1 && ((L *= a = Math.sqrt(a)), (E *= a)),
                  s = new SVG.Matrix()
                    .rotate(T)
                    .scale(1 / L, 1 / E)
                    .rotate(-T),
                  I = I.transform(s),
                  o = (n = [(F = F.transform(s)).x - I.x, F.y - I.y])[0] * n[0] + n[1] * n[1],
                  r = Math.sqrt(o),
                  n[0] /= r,
                  n[1] /= r,
                  l = o < 4 ? Math.sqrt(1 - o / 4) : 0,
                  z === X && (l *= -1),
                  h = new SVG.Point((F.x + I.x) / 2 + l * -n[1], (F.y + I.y) / 2 + l * n[0]),
                  c = new SVG.Point(I.x - h.x, I.y - h.y),
                  d = new SVG.Point(F.x - h.x, F.y - h.y),
                  u = Math.acos(c.x / Math.sqrt(c.x * c.x + c.y * c.y)),
                  c.y < 0 && (u *= -1),
                  f = Math.acos(d.x / Math.sqrt(d.x * d.x + d.y * d.y)),
                  d.y < 0 && (f *= -1),
                  X && u > f && (f += 2 * Math.PI),
                  !X && u < f && (f -= 2 * Math.PI),
                  b = [],
                  v = u,
                  g = (f - u) / (p = Math.ceil((2 * Math.abs(u - f)) / Math.PI)),
                  x = (4 * Math.tan(g / 4)) / 3,
                  k = 0;
                k <= p;
                k++
              )
                (y = Math.cos(v)), (m = Math.sin(v)), (w = new SVG.Point(h.x + y, h.y + m)), (b[k] = [new SVG.Point(w.x + x * m, w.y - x * y), w, new SVG.Point(w.x - x * m, w.y + x * y)]), (v += g);
              for (b[0][0] = b[0][1].clone(), b[b.length - 1][2] = b[b.length - 1][1].clone(), s = new SVG.Matrix().rotate(T).scale(L, E).rotate(-T), k = 0, S = b.length; k < S; k++) (b[k][0] = b[k][0].transform(s)), (b[k][1] = b[k][1].transform(s)), (b[k][2] = b[k][2].transform(s));
              for (k = 1, S = b.length; k < S; k++) (A = (w = b[k - 1][2]).x), (C = w.y), (M = (w = b[k][0]).x), (P = w.y), (Y = (w = b[k][1]).x), (O = w.y), D.push(['C', A, C, M, P, Y, O]);
              return D;
            }
            SVG.extend(SVG.PathArray, {
              morph: function (e) {
                for (var i = this.value, a = this.parse(e), n = 0, r = 0, o = !1, l = !1; ; ) {
                  if (!1 === n && !1 === r) break;
                  if (((o = s(i, !1 !== n && n + 1)), (l = s(a, !1 !== r && r + 1)), !1 === n && (n = 0 == (h = new SVG.PathArray(c.start).bbox()).height || 0 == h.width ? i.push(i[0]) - 1 : i.push(['M', h.x + h.width / 2, h.y + h.height / 2]) - 1), !1 === r)) {
                    var h = new SVG.PathArray(c.dest).bbox();
                    r = 0 == h.height || 0 == h.width ? a.push(a[0]) - 1 : a.push(['M', h.x + h.width / 2, h.y + h.height / 2]) - 1;
                  }
                  var c = t(i, n, o, a, r, l);
                  (i = i.slice(0, n).concat(c.start, !1 === o ? [] : i.slice(o))), (a = a.slice(0, r).concat(c.dest, !1 === l ? [] : a.slice(l))), (n = !1 !== o && n + c.start.length), (r = !1 !== l && r + c.dest.length);
                }
                return (this.value = i), (this.destination = new SVG.PathArray()), (this.destination.value = a), this;
              },
            });
          })();
        },
        function (t, e, i) {
          !(function () {
            (function () {
              function t(t) {
                t.remember('_resizeHandler', this), (this.el = t), (this.parameters = {}), (this.lastUpdateCall = null), (this.p = t.doc().node.createSVGPoint());
              }
              (t.prototype.transformPoint = function (t, e, i) {
                return (this.p.x = t - (this.offset.x - window.pageXOffset)), (this.p.y = e - (this.offset.y - window.pageYOffset)), this.p.matrixTransform(i || this.m);
              }),
                (t.prototype._extractPosition = function (t) {
                  return {
                    x: null != t.clientX ? t.clientX : t.touches[0].clientX,
                    y: null != t.clientY ? t.clientY : t.touches[0].clientY,
                  };
                }),
                (t.prototype.init = function (t) {
                  var e = this;
                  if ((this.stop(), 'stop' !== t)) {
                    this.options = {};
                    for (var i in this.el.resize.defaults) (this.options[i] = this.el.resize.defaults[i]), void 0 !== t[i] && (this.options[i] = t[i]);
                    this.el.on('lt.resize', function (t) {
                      e.resize(t || window.event);
                    }),
                      this.el.on('rt.resize', function (t) {
                        e.resize(t || window.event);
                      }),
                      this.el.on('rb.resize', function (t) {
                        e.resize(t || window.event);
                      }),
                      this.el.on('lb.resize', function (t) {
                        e.resize(t || window.event);
                      }),
                      this.el.on('t.resize', function (t) {
                        e.resize(t || window.event);
                      }),
                      this.el.on('r.resize', function (t) {
                        e.resize(t || window.event);
                      }),
                      this.el.on('b.resize', function (t) {
                        e.resize(t || window.event);
                      }),
                      this.el.on('l.resize', function (t) {
                        e.resize(t || window.event);
                      }),
                      this.el.on('rot.resize', function (t) {
                        e.resize(t || window.event);
                      }),
                      this.el.on('point.resize', function (t) {
                        e.resize(t || window.event);
                      }),
                      this.update();
                  }
                }),
                (t.prototype.stop = function () {
                  return this.el.off('lt.resize'), this.el.off('rt.resize'), this.el.off('rb.resize'), this.el.off('lb.resize'), this.el.off('t.resize'), this.el.off('r.resize'), this.el.off('b.resize'), this.el.off('l.resize'), this.el.off('rot.resize'), this.el.off('point.resize'), this;
                }),
                (t.prototype.resize = function (t) {
                  var e = this;
                  (this.m = this.el.node.getScreenCTM().inverse()), (this.offset = { x: window.pageXOffset, y: window.pageYOffset });
                  var i = this._extractPosition(t.detail.event);
                  if (
                    ((this.parameters = {
                      type: this.el.type,
                      p: this.transformPoint(i.x, i.y),
                      x: t.detail.x,
                      y: t.detail.y,
                      box: this.el.bbox(),
                      rotation: this.el.transform().rotation,
                    }),
                    'text' === this.el.type && (this.parameters.fontSize = this.el.attr()['font-size']),
                    void 0 !== t.detail.i)
                  ) {
                    var a = this.el.array().valueOf();
                    (this.parameters.i = t.detail.i), (this.parameters.pointCoords = [a[t.detail.i][0], a[t.detail.i][1]]);
                  }
                  switch (t.type) {
                    case 'lt':
                      this.calc = function (t, e) {
                        var i = this.snapToGrid(t, e);
                        if (this.parameters.box.width - i[0] > 0 && this.parameters.box.height - i[1] > 0) {
                          if ('text' === this.parameters.type) return this.el.move(this.parameters.box.x + i[0], this.parameters.box.y), void this.el.attr('font-size', this.parameters.fontSize - i[0]);
                          (i = this.checkAspectRatio(i)), this.el.move(this.parameters.box.x + i[0], this.parameters.box.y + i[1]).size(this.parameters.box.width - i[0], this.parameters.box.height - i[1]);
                        }
                      };
                      break;
                    case 'rt':
                      this.calc = function (t, e) {
                        var i = this.snapToGrid(t, e, 2);
                        if (this.parameters.box.width + i[0] > 0 && this.parameters.box.height - i[1] > 0) {
                          if ('text' === this.parameters.type) return this.el.move(this.parameters.box.x - i[0], this.parameters.box.y), void this.el.attr('font-size', this.parameters.fontSize + i[0]);
                          (i = this.checkAspectRatio(i)), this.el.move(this.parameters.box.x, this.parameters.box.y + i[1]).size(this.parameters.box.width + i[0], this.parameters.box.height - i[1]);
                        }
                      };
                      break;
                    case 'rb':
                      this.calc = function (t, e) {
                        var i = this.snapToGrid(t, e, 0);
                        if (this.parameters.box.width + i[0] > 0 && this.parameters.box.height + i[1] > 0) {
                          if ('text' === this.parameters.type) return this.el.move(this.parameters.box.x - i[0], this.parameters.box.y), void this.el.attr('font-size', this.parameters.fontSize + i[0]);
                          (i = this.checkAspectRatio(i)), this.el.move(this.parameters.box.x, this.parameters.box.y).size(this.parameters.box.width + i[0], this.parameters.box.height + i[1]);
                        }
                      };
                      break;
                    case 'lb':
                      this.calc = function (t, e) {
                        var i = this.snapToGrid(t, e, 1);
                        if (this.parameters.box.width - i[0] > 0 && this.parameters.box.height + i[1] > 0) {
                          if ('text' === this.parameters.type) return this.el.move(this.parameters.box.x + i[0], this.parameters.box.y), void this.el.attr('font-size', this.parameters.fontSize - i[0]);
                          (i = this.checkAspectRatio(i)), this.el.move(this.parameters.box.x + i[0], this.parameters.box.y).size(this.parameters.box.width - i[0], this.parameters.box.height + i[1]);
                        }
                      };
                      break;
                    case 't':
                      this.calc = function (t, e) {
                        var i = this.snapToGrid(t, e, 2);
                        if (this.parameters.box.height - i[1] > 0) {
                          if ('text' === this.parameters.type) return;
                          this.el.move(this.parameters.box.x, this.parameters.box.y + i[1]).height(this.parameters.box.height - i[1]);
                        }
                      };
                      break;
                    case 'r':
                      this.calc = function (t, e) {
                        var i = this.snapToGrid(t, e, 0);
                        if (this.parameters.box.width + i[0] > 0) {
                          if ('text' === this.parameters.type) return;
                          this.el.move(this.parameters.box.x, this.parameters.box.y).width(this.parameters.box.width + i[0]);
                        }
                      };
                      break;
                    case 'b':
                      this.calc = function (t, e) {
                        var i = this.snapToGrid(t, e, 0);
                        if (this.parameters.box.height + i[1] > 0) {
                          if ('text' === this.parameters.type) return;
                          this.el.move(this.parameters.box.x, this.parameters.box.y).height(this.parameters.box.height + i[1]);
                        }
                      };
                      break;
                    case 'l':
                      this.calc = function (t, e) {
                        var i = this.snapToGrid(t, e, 1);
                        if (this.parameters.box.width - i[0] > 0) {
                          if ('text' === this.parameters.type) return;
                          this.el.move(this.parameters.box.x + i[0], this.parameters.box.y).width(this.parameters.box.width - i[0]);
                        }
                      };
                      break;
                    case 'rot':
                      this.calc = function (t, e) {
                        var i = { x: t + this.parameters.p.x, y: e + this.parameters.p.y },
                          a = Math.atan2(this.parameters.p.y - this.parameters.box.y - this.parameters.box.height / 2, this.parameters.p.x - this.parameters.box.x - this.parameters.box.width / 2),
                          s = (180 * (Math.atan2(i.y - this.parameters.box.y - this.parameters.box.height / 2, i.x - this.parameters.box.x - this.parameters.box.width / 2) - a)) / Math.PI;
                        this.el.center(this.parameters.box.cx, this.parameters.box.cy).rotate(this.parameters.rotation + s - (s % this.options.snapToAngle), this.parameters.box.cx, this.parameters.box.cy);
                      };
                      break;
                    case 'point':
                      this.calc = function (t, e) {
                        var i = this.snapToGrid(t, e, this.parameters.pointCoords[0], this.parameters.pointCoords[1]),
                          a = this.el.array().valueOf();
                        (a[this.parameters.i][0] = this.parameters.pointCoords[0] + i[0]), (a[this.parameters.i][1] = this.parameters.pointCoords[1] + i[1]), this.el.plot(a);
                      };
                  }
                  this.el.fire('resizestart', { dx: this.parameters.x, dy: this.parameters.y, event: t }),
                    SVG.on(window, 'touchmove.resize', function (t) {
                      e.update(t || window.event);
                    }),
                    SVG.on(window, 'touchend.resize', function () {
                      e.done();
                    }),
                    SVG.on(window, 'mousemove.resize', function (t) {
                      e.update(t || window.event);
                    }),
                    SVG.on(window, 'mouseup.resize', function () {
                      e.done();
                    });
                }),
                (t.prototype.update = function (t) {
                  if (!t) return void (this.lastUpdateCall && this.calc(this.lastUpdateCall[0], this.lastUpdateCall[1]));
                  var e = this._extractPosition(t),
                    i = this.transformPoint(e.x, e.y),
                    a = i.x - this.parameters.p.x,
                    s = i.y - this.parameters.p.y;
                  (this.lastUpdateCall = [a, s]), this.calc(a, s), this.el.fire('resizing', { dx: a, dy: s, event: t });
                }),
                (t.prototype.done = function () {
                  (this.lastUpdateCall = null), SVG.off(window, 'mousemove.resize'), SVG.off(window, 'mouseup.resize'), SVG.off(window, 'touchmove.resize'), SVG.off(window, 'touchend.resize'), this.el.fire('resizedone');
                }),
                (t.prototype.snapToGrid = function (t, e, i, a) {
                  var s;
                  return void 0 !== a ? (s = [(i + t) % this.options.snapToGrid, (a + e) % this.options.snapToGrid]) : ((i = null == i ? 3 : i), (s = [(this.parameters.box.x + t + (1 & i ? 0 : this.parameters.box.width)) % this.options.snapToGrid, (this.parameters.box.y + e + (2 & i ? 0 : this.parameters.box.height)) % this.options.snapToGrid])), (t -= Math.abs(s[0]) < this.options.snapToGrid / 2 ? s[0] : s[0] - (t < 0 ? -this.options.snapToGrid : this.options.snapToGrid)), (e -= Math.abs(s[1]) < this.options.snapToGrid / 2 ? s[1] : s[1] - (e < 0 ? -this.options.snapToGrid : this.options.snapToGrid)), this.constraintToBox(t, e, i, a);
                }),
                (t.prototype.constraintToBox = function (t, e, i, a) {
                  var s,
                    n,
                    r = this.options.constraint || {};
                  return void 0 !== a ? ((s = i), (n = a)) : ((s = this.parameters.box.x + (1 & i ? 0 : this.parameters.box.width)), (n = this.parameters.box.y + (2 & i ? 0 : this.parameters.box.height))), void 0 !== r.minX && s + t < r.minX && (t = r.minX - s), void 0 !== r.maxX && s + t > r.maxX && (t = r.maxX - s), void 0 !== r.minY && n + e < r.minY && (e = r.minY - n), void 0 !== r.maxY && n + e > r.maxY && (e = r.maxY - n), [t, e];
                }),
                (t.prototype.checkAspectRatio = function (t) {
                  if (!this.options.saveAspectRatio) return t;
                  var e = t.slice(),
                    i = this.parameters.box.width / this.parameters.box.height,
                    a = this.parameters.box.width + t[0],
                    s = this.parameters.box.height - t[1],
                    n = a / s;
                  return n < i ? (e[1] = a / i - this.parameters.box.height) : n > i && (e[0] = this.parameters.box.width - s * i), e;
                }),
                SVG.extend(SVG.Element, {
                  resize: function (e) {
                    return (this.remember('_resizeHandler') || new t(this)).init(e || {}), this;
                  },
                }),
                (SVG.Element.prototype.resize.defaults = { snapToAngle: 0.1, snapToGrid: 1, constraint: {}, saveAspectRatio: !1 });
            }.call(this));
          })();
        },
        function (t, e, i) {
          var a =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t;
                };
          !(function () {
            function t(t) {
              (this.el = t), t.remember('_selectHandler', this), (this.pointSelection = { isSelected: !1 }), (this.rectSelection = { isSelected: !1 });
            }
            (t.prototype.init = function (t, e) {
              var i = this.el.bbox();
              this.options = {};
              for (var a in this.el.selectize.defaults) (this.options[a] = this.el.selectize.defaults[a]), void 0 !== e[a] && (this.options[a] = e[a]);
              (this.parent = this.el.parent()), (this.nested = this.nested || this.parent.group()), this.nested.matrix(new SVG.Matrix(this.el).translate(i.x, i.y)), this.options.deepSelect && -1 !== ['line', 'polyline', 'polygon'].indexOf(this.el.type) ? this.selectPoints(t) : this.selectRect(t), this.observe(), this.cleanup();
            }),
              (t.prototype.selectPoints = function (t) {
                return (this.pointSelection.isSelected = t), this.pointSelection.set ? this : ((this.pointSelection.set = this.parent.set()), this.drawCircles(), this);
              }),
              (t.prototype.getPointArray = function () {
                var t = this.el.bbox();
                return this.el
                  .array()
                  .valueOf()
                  .map(function (e) {
                    return [e[0] - t.x, e[1] - t.y];
                  });
              }),
              (t.prototype.drawCircles = function () {
                for (var t = this, e = this.getPointArray(), i = 0, a = e.length; i < a; ++i) {
                  var s = (function (e) {
                    return function (i) {
                      (i = i || window.event).preventDefault ? i.preventDefault() : (i.returnValue = !1), i.stopPropagation();
                      var a = i.pageX || i.touches[0].pageX,
                        s = i.pageY || i.touches[0].pageY;
                      t.el.fire('point', { x: a, y: s, i: e, event: i });
                    };
                  })(i);
                  this.pointSelection.set.add(
                    this.nested
                      .circle(this.options.radius)
                      .center(e[i][0], e[i][1])
                      .addClass(this.options.classPoints)
                      .addClass(this.options.classPoints + '_point')
                      .on('touchstart', s)
                      .on('mousedown', s)
                  );
                }
              }),
              (t.prototype.updatePointSelection = function () {
                var t = this.getPointArray();
                this.pointSelection.set.each(function (e) {
                  (this.cx() === t[e][0] && this.cy() === t[e][1]) || this.center(t[e][0], t[e][1]);
                });
              }),
              (t.prototype.updateRectSelection = function () {
                var t = this.el.bbox();
                this.rectSelection.set.get(0).attr({ width: t.width, height: t.height }), this.options.points && (this.rectSelection.set.get(2).center(t.width, 0), this.rectSelection.set.get(3).center(t.width, t.height), this.rectSelection.set.get(4).center(0, t.height), this.rectSelection.set.get(5).center(t.width / 2, 0), this.rectSelection.set.get(6).center(t.width, t.height / 2), this.rectSelection.set.get(7).center(t.width / 2, t.height), this.rectSelection.set.get(8).center(0, t.height / 2)), this.options.rotationPoint && (this.options.points ? this.rectSelection.set.get(9).center(t.width / 2, 20) : this.rectSelection.set.get(1).center(t.width / 2, 20));
              }),
              (t.prototype.selectRect = function (t) {
                function e(t) {
                  return function (e) {
                    (e = e || window.event).preventDefault ? e.preventDefault() : (e.returnValue = !1), e.stopPropagation();
                    var a = e.pageX || e.touches[0].pageX,
                      s = e.pageY || e.touches[0].pageY;
                    i.el.fire(t, { x: a, y: s, event: e });
                  };
                }
                var i = this,
                  a = this.el.bbox();
                if (((this.rectSelection.isSelected = t), (this.rectSelection.set = this.rectSelection.set || this.parent.set()), this.rectSelection.set.get(0) || this.rectSelection.set.add(this.nested.rect(a.width, a.height).addClass(this.options.classRect)), this.options.points && !this.rectSelection.set.get(1))) {
                  var s = 'touchstart',
                    n = 'mousedown';
                  this.rectSelection.set.add(
                    this.nested
                      .circle(this.options.radius)
                      .center(0, 0)
                      .attr('class', this.options.classPoints + '_lt')
                      .on(n, e('lt'))
                      .on(s, e('lt'))
                  ),
                    this.rectSelection.set.add(
                      this.nested
                        .circle(this.options.radius)
                        .center(a.width, 0)
                        .attr('class', this.options.classPoints + '_rt')
                        .on(n, e('rt'))
                        .on(s, e('rt'))
                    ),
                    this.rectSelection.set.add(
                      this.nested
                        .circle(this.options.radius)
                        .center(a.width, a.height)
                        .attr('class', this.options.classPoints + '_rb')
                        .on(n, e('rb'))
                        .on(s, e('rb'))
                    ),
                    this.rectSelection.set.add(
                      this.nested
                        .circle(this.options.radius)
                        .center(0, a.height)
                        .attr('class', this.options.classPoints + '_lb')
                        .on(n, e('lb'))
                        .on(s, e('lb'))
                    ),
                    this.rectSelection.set.add(
                      this.nested
                        .circle(this.options.radius)
                        .center(a.width / 2, 0)
                        .attr('class', this.options.classPoints + '_t')
                        .on(n, e('t'))
                        .on(s, e('t'))
                    ),
                    this.rectSelection.set.add(
                      this.nested
                        .circle(this.options.radius)
                        .center(a.width, a.height / 2)
                        .attr('class', this.options.classPoints + '_r')
                        .on(n, e('r'))
                        .on(s, e('r'))
                    ),
                    this.rectSelection.set.add(
                      this.nested
                        .circle(this.options.radius)
                        .center(a.width / 2, a.height)
                        .attr('class', this.options.classPoints + '_b')
                        .on(n, e('b'))
                        .on(s, e('b'))
                    ),
                    this.rectSelection.set.add(
                      this.nested
                        .circle(this.options.radius)
                        .center(0, a.height / 2)
                        .attr('class', this.options.classPoints + '_l')
                        .on(n, e('l'))
                        .on(s, e('l'))
                    ),
                    this.rectSelection.set.each(function () {
                      this.addClass(i.options.classPoints);
                    });
                }
                if (this.options.rotationPoint && ((this.options.points && !this.rectSelection.set.get(9)) || (!this.options.points && !this.rectSelection.set.get(1)))) {
                  var r = function (t) {
                    (t = t || window.event).preventDefault ? t.preventDefault() : (t.returnValue = !1), t.stopPropagation();
                    var e = t.pageX || t.touches[0].pageX,
                      a = t.pageY || t.touches[0].pageY;
                    i.el.fire('rot', { x: e, y: a, event: t });
                  };
                  this.rectSelection.set.add(
                    this.nested
                      .circle(this.options.radius)
                      .center(a.width / 2, 20)
                      .attr('class', this.options.classPoints + '_rot')
                      .on('touchstart', r)
                      .on('mousedown', r)
                  );
                }
              }),
              (t.prototype.handler = function () {
                var t = this.el.bbox();
                this.nested.matrix(new SVG.Matrix(this.el).translate(t.x, t.y)), this.rectSelection.isSelected && this.updateRectSelection(), this.pointSelection.isSelected && this.updatePointSelection();
              }),
              (t.prototype.observe = function () {
                var t = this;
                if (MutationObserver)
                  if (this.rectSelection.isSelected || this.pointSelection.isSelected)
                    (this.observerInst =
                      this.observerInst ||
                      new MutationObserver(function () {
                        t.handler();
                      })),
                      this.observerInst.observe(this.el.node, { attributes: !0 });
                  else
                    try {
                      this.observerInst.disconnect(), delete this.observerInst;
                    } catch (t) {}
                else
                  this.el.off('DOMAttrModified.select'),
                    (this.rectSelection.isSelected || this.pointSelection.isSelected) &&
                      this.el.on('DOMAttrModified.select', function () {
                        t.handler();
                      });
              }),
              (t.prototype.cleanup = function () {
                !this.rectSelection.isSelected &&
                  this.rectSelection.set &&
                  (this.rectSelection.set.each(function () {
                    this.remove();
                  }),
                  this.rectSelection.set.clear(),
                  delete this.rectSelection.set),
                  !this.pointSelection.isSelected &&
                    this.pointSelection.set &&
                    (this.pointSelection.set.each(function () {
                      this.remove();
                    }),
                    this.pointSelection.set.clear(),
                    delete this.pointSelection.set),
                  this.pointSelection.isSelected || this.rectSelection.isSelected || (this.nested.remove(), delete this.nested);
              }),
              SVG.extend(SVG.Element, {
                selectize: function (e, i) {
                  return 'object' === (void 0 === e ? 'undefined' : a(e)) && ((i = e), (e = !0)), (this.remember('_selectHandler') || new t(this)).init(void 0 === e || e, i || {}), this;
                },
              }),
              (SVG.Element.prototype.selectize.defaults = {
                points: !0,
                classRect: 'svg_select_boundingRect',
                classPoints: 'svg_select_points',
                radius: 7,
                rotationPoint: !0,
                deepSelect: !1,
              });
          })();
        },
        function (t, e, i) {
          var a,
            s =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t;
                  };
          !(function (s, n) {
            void 0 !==
              (a = function () {
                return n(s, s.document);
              }.call(e, i, e, t)) && (t.exports = a);
          })('undefined' != typeof window ? window : void 0, function (t, e) {
            function i(t, e, i, a) {
              return i + a.replace(w.regex.dots, ' .');
            }
            function a(t) {
              for (var e = t.slice(0), i = e.length; i--; ) Array.isArray(e[i]) && (e[i] = a(e[i]));
              return e;
            }
            function n(t, e) {
              return t instanceof e;
            }
            function r(t, e) {
              return (t.matches || t.matchesSelector || t.msMatchesSelector || t.mozMatchesSelector || t.webkitMatchesSelector || t.oMatchesSelector).call(t, e);
            }
            function o(t) {
              return t.toLowerCase().replace(/-(.)/g, function (t, e) {
                return e.toUpperCase();
              });
            }
            function l(t) {
              return t.charAt(0).toUpperCase() + t.slice(1);
            }
            function h(t) {
              return 4 == t.length ? ['#', t.substring(1, 2), t.substring(1, 2), t.substring(2, 3), t.substring(2, 3), t.substring(3, 4), t.substring(3, 4)].join('') : t;
            }
            function c(t) {
              var e = t.toString(16);
              return 1 == e.length ? '0' + e : e;
            }
            function d(t, e, i) {
              if (null == e || null == i) {
                var a = t.bbox();
                null == e ? (e = (a.width / a.height) * i) : null == i && (i = (a.height / a.width) * e);
              }
              return { width: e, height: i };
            }
            function u(t, e, i) {
              return { x: e * t.a + i * t.c + 0, y: e * t.b + i * t.d + 0 };
            }
            function f(t) {
              return { a: t[0], b: t[1], c: t[2], d: t[3], e: t[4], f: t[5] };
            }
            function g(t) {
              return t instanceof w.Matrix || (t = new w.Matrix(t)), t;
            }
            function p(t, e) {
              (t.cx = null == t.cx ? e.bbox().cx : t.cx), (t.cy = null == t.cy ? e.bbox().cy : t.cy);
            }
            function x(t) {
              for (var e = 0, i = t.length, a = ''; e < i; e++) (a += t[e][0]), null != t[e][1] && ((a += t[e][1]), null != t[e][2] && ((a += ' '), (a += t[e][2]), null != t[e][3] && ((a += ' '), (a += t[e][3]), (a += ' '), (a += t[e][4]), null != t[e][5] && ((a += ' '), (a += t[e][5]), (a += ' '), (a += t[e][6]), null != t[e][7] && ((a += ' '), (a += t[e][7]))))));
              return a + ' ';
            }
            function b(e) {
              for (var i = e.childNodes.length - 1; i >= 0; i--) e.childNodes[i] instanceof t.SVGElement && b(e.childNodes[i]);
              return w.adopt(e).id(w.eid(e.nodeName));
            }
            function v(t) {
              return null == t.x && ((t.x = 0), (t.y = 0), (t.width = 0), (t.height = 0)), (t.w = t.width), (t.h = t.height), (t.x2 = t.x + t.width), (t.y2 = t.y + t.height), (t.cx = t.x + t.width / 2), (t.cy = t.y + t.height / 2), t;
            }
            function m(t) {
              var e = (t || '').toString().match(w.regex.reference);
              if (e) return e[1];
            }
            function y(t) {
              return Math.abs(t) > 1e-37 ? t : 0;
            }
            var w = ((void 0 !== this ? this : t).SVG = function (t) {
              if (w.supported) return (t = new w.Doc(t)), w.parser.draw || w.prepare(), t;
            });
            if (((w.ns = 'http://www.w3.org/2000/svg'), (w.xmlns = 'http://www.w3.org/2000/xmlns/'), (w.xlink = 'http://www.w3.org/1999/xlink'), (w.svgjs = 'http://svgjs.com/svgjs'), (w.supported = !0), !w.supported)) return !1;
            (w.did = 1e3),
              (w.eid = function (t) {
                return 'Svgjs' + l(t) + w.did++;
              }),
              (w.create = function (t) {
                var i = e.createElementNS(this.ns, t);
                return i.setAttribute('id', this.eid(t)), i;
              }),
              (w.extend = function () {
                var t, e, i, a;
                for (e = (t = [].slice.call(arguments)).pop(), a = t.length - 1; a >= 0; a--) if (t[a]) for (i in e) t[a].prototype[i] = e[i];
                w.Set && w.Set.inherit && w.Set.inherit();
              }),
              (w.invent = function (t) {
                var e =
                  'function' == typeof t.create
                    ? t.create
                    : function () {
                        this.constructor.call(this, w.create(t.create));
                      };
                return t.inherit && (e.prototype = new t.inherit()), t.extend && w.extend(e, t.extend), t.construct && w.extend(t.parent || w.Container, t.construct), e;
              }),
              (w.adopt = function (e) {
                if (!e) return null;
                if (e.instance) return e.instance;
                var i;
                return (i = 'svg' == e.nodeName ? (e.parentNode instanceof t.SVGElement ? new w.Nested() : new w.Doc()) : 'linearGradient' == e.nodeName ? new w.Gradient('linear') : 'radialGradient' == e.nodeName ? new w.Gradient('radial') : w[l(e.nodeName)] ? new w[l(e.nodeName)]() : new w.Element(e)), (i.type = e.nodeName), (i.node = e), (e.instance = i), i instanceof w.Doc && i.namespace().defs(), i.setData(JSON.parse(e.getAttribute('svgjs:data')) || {}), i;
              }),
              (w.prepare = function () {
                var t = e.getElementsByTagName('body')[0],
                  i = (t ? new w.Doc(t) : w.adopt(e.documentElement).nested()).size(2, 0);
                w.parser = {
                  body: t || e.documentElement,
                  draw: i.style('opacity:0;position:absolute;left:-100%;top:-100%;overflow:hidden').node,
                  poly: i.polyline().node,
                  path: i.path().node,
                  native: w.create('svg'),
                };
              }),
              (w.parser = { native: w.create('svg') }),
              e.addEventListener(
                'DOMContentLoaded',
                function () {
                  w.parser.draw || w.prepare();
                },
                !1
              ),
              (w.regex = {
                numberAndUnit: /^([+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?)([a-z%]*)$/i,
                hex: /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,
                rgb: /rgb\((\d+),(\d+),(\d+)\)/,
                reference: /#([a-z0-9\-_]+)/i,
                transforms: /\)\s*,?\s*/,
                whitespace: /\s/g,
                isHex: /^#[a-f0-9]{3,6}$/i,
                isRgb: /^rgb\(/,
                isCss: /[^:]+:[^;]+;?/,
                isBlank: /^(\s+)?$/,
                isNumber: /^[+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
                isPercent: /^-?[\d\.]+%$/,
                isImage: /\.(jpg|jpeg|png|gif|svg)(\?[^=]+.*)?/i,
                delimiter: /[\s,]+/,
                hyphen: /([^e])\-/gi,
                pathLetters: /[MLHVCSQTAZ]/gi,
                isPathLetter: /[MLHVCSQTAZ]/i,
                numbersWithDots: /((\d?\.\d+(?:e[+-]?\d+)?)((?:\.\d+(?:e[+-]?\d+)?)+))+/gi,
                dots: /\./g,
              }),
              (w.utils = {
                map: function (t, e) {
                  var i,
                    a = t.length,
                    s = [];
                  for (i = 0; i < a; i++) s.push(e(t[i]));
                  return s;
                },
                filter: function (t, e) {
                  var i,
                    a = t.length,
                    s = [];
                  for (i = 0; i < a; i++) e(t[i]) && s.push(t[i]);
                  return s;
                },
                radians: function (t) {
                  return ((t % 360) * Math.PI) / 180;
                },
                degrees: function (t) {
                  return ((180 * t) / Math.PI) % 360;
                },
                filterSVGElements: function (e) {
                  return this.filter(e, function (e) {
                    return e instanceof t.SVGElement;
                  });
                },
              }),
              (w.defaults = {
                attrs: {
                  'fill-opacity': 1,
                  'stroke-opacity': 1,
                  'stroke-width': 0,
                  'stroke-linejoin': 'miter',
                  'stroke-linecap': 'butt',
                  fill: '#000000',
                  stroke: '#000000',
                  opacity: 1,
                  x: 0,
                  y: 0,
                  cx: 0,
                  cy: 0,
                  width: 0,
                  height: 0,
                  r: 0,
                  rx: 0,
                  ry: 0,
                  offset: 0,
                  'stop-opacity': 1,
                  'stop-color': '#000000',
                  'font-size': 16,
                  'font-family': 'Helvetica, Arial, sans-serif',
                  'text-anchor': 'start',
                },
              }),
              (w.Color = function (t) {
                var e;
                (this.r = 0), (this.g = 0), (this.b = 0), t && ('string' == typeof t ? (w.regex.isRgb.test(t) ? ((e = w.regex.rgb.exec(t.replace(w.regex.whitespace, ''))), (this.r = parseInt(e[1])), (this.g = parseInt(e[2])), (this.b = parseInt(e[3]))) : w.regex.isHex.test(t) && ((e = w.regex.hex.exec(h(t))), (this.r = parseInt(e[1], 16)), (this.g = parseInt(e[2], 16)), (this.b = parseInt(e[3], 16)))) : 'object' === (void 0 === t ? 'undefined' : s(t)) && ((this.r = t.r), (this.g = t.g), (this.b = t.b)));
              }),
              w.extend(w.Color, {
                toString: function () {
                  return this.toHex();
                },
                toHex: function () {
                  return '#' + c(this.r) + c(this.g) + c(this.b);
                },
                toRgb: function () {
                  return 'rgb(' + [this.r, this.g, this.b].join() + ')';
                },
                brightness: function () {
                  return (this.r / 255) * 0.3 + (this.g / 255) * 0.59 + (this.b / 255) * 0.11;
                },
                morph: function (t) {
                  return (this.destination = new w.Color(t)), this;
                },
                at: function (t) {
                  return this.destination
                    ? ((t = t < 0 ? 0 : t > 1 ? 1 : t),
                      new w.Color({
                        r: ~~(this.r + (this.destination.r - this.r) * t),
                        g: ~~(this.g + (this.destination.g - this.g) * t),
                        b: ~~(this.b + (this.destination.b - this.b) * t),
                      }))
                    : this;
                },
              }),
              (w.Color.test = function (t) {
                return (t += ''), w.regex.isHex.test(t) || w.regex.isRgb.test(t);
              }),
              (w.Color.isRgb = function (t) {
                return t && 'number' == typeof t.r && 'number' == typeof t.g && 'number' == typeof t.b;
              }),
              (w.Color.isColor = function (t) {
                return w.Color.isRgb(t) || w.Color.test(t);
              }),
              (w.Array = function (t, e) {
                0 == (t = (t || []).valueOf()).length && e && (t = e.valueOf()), (this.value = this.parse(t));
              }),
              w.extend(w.Array, {
                morph: function (t) {
                  if (((this.destination = this.parse(t)), this.value.length != this.destination.length)) {
                    for (var e = this.value[this.value.length - 1], i = this.destination[this.destination.length - 1]; this.value.length > this.destination.length; ) this.destination.push(i);
                    for (; this.value.length < this.destination.length; ) this.value.push(e);
                  }
                  return this;
                },
                settle: function () {
                  for (var t = 0, e = this.value.length, i = []; t < e; t++) -1 == i.indexOf(this.value[t]) && i.push(this.value[t]);
                  return (this.value = i);
                },
                at: function (t) {
                  if (!this.destination) return this;
                  for (var e = 0, i = this.value.length, a = []; e < i; e++) a.push(this.value[e] + (this.destination[e] - this.value[e]) * t);
                  return new w.Array(a);
                },
                toString: function () {
                  return this.value.join(' ');
                },
                valueOf: function () {
                  return this.value;
                },
                parse: function (t) {
                  return (t = t.valueOf()), Array.isArray(t) ? t : this.split(t);
                },
                split: function (t) {
                  return t.trim().split(w.regex.delimiter).map(parseFloat);
                },
                reverse: function () {
                  return this.value.reverse(), this;
                },
                clone: function () {
                  var t = new this.constructor();
                  return (t.value = a(this.value)), t;
                },
              }),
              (w.PointArray = function (t, e) {
                w.Array.call(this, t, e || [[0, 0]]);
              }),
              (w.PointArray.prototype = new w.Array()),
              (w.PointArray.prototype.constructor = w.PointArray),
              w.extend(w.PointArray, {
                toString: function () {
                  for (var t = 0, e = this.value.length, i = []; t < e; t++) i.push(this.value[t].join(','));
                  return i.join(' ');
                },
                toLine: function () {
                  return { x1: this.value[0][0], y1: this.value[0][1], x2: this.value[1][0], y2: this.value[1][1] };
                },
                at: function (t) {
                  if (!this.destination) return this;
                  for (var e = 0, i = this.value.length, a = []; e < i; e++) a.push([this.value[e][0] + (this.destination[e][0] - this.value[e][0]) * t, this.value[e][1] + (this.destination[e][1] - this.value[e][1]) * t]);
                  return new w.PointArray(a);
                },
                parse: function (t) {
                  var e = [];
                  if (((t = t.valueOf()), Array.isArray(t))) {
                    if (Array.isArray(t[0]))
                      return t.map(function (t) {
                        return t.slice();
                      });
                    if (null != t[0].x)
                      return t.map(function (t) {
                        return [t.x, t.y];
                      });
                  } else t = t.trim().split(w.regex.delimiter).map(parseFloat);
                  t.length % 2 != 0 && t.pop();
                  for (var i = 0, a = t.length; i < a; i += 2) e.push([t[i], t[i + 1]]);
                  return e;
                },
                move: function (t, e) {
                  var i = this.bbox();
                  if (((t -= i.x), (e -= i.y), !isNaN(t) && !isNaN(e))) for (var a = this.value.length - 1; a >= 0; a--) this.value[a] = [this.value[a][0] + t, this.value[a][1] + e];
                  return this;
                },
                size: function (t, e) {
                  var i,
                    a = this.bbox();
                  for (i = this.value.length - 1; i >= 0; i--) a.width && (this.value[i][0] = ((this.value[i][0] - a.x) * t) / a.width + a.x), a.height && (this.value[i][1] = ((this.value[i][1] - a.y) * e) / a.height + a.y);
                  return this;
                },
                bbox: function () {
                  return w.parser.poly.setAttribute('points', this.toString()), w.parser.poly.getBBox();
                },
              });
            for (
              var k = {
                  M: function (t, e, i) {
                    return (e.x = i.x = t[0]), (e.y = i.y = t[1]), ['M', e.x, e.y];
                  },
                  L: function (t, e) {
                    return (e.x = t[0]), (e.y = t[1]), ['L', t[0], t[1]];
                  },
                  H: function (t, e) {
                    return (e.x = t[0]), ['H', t[0]];
                  },
                  V: function (t, e) {
                    return (e.y = t[0]), ['V', t[0]];
                  },
                  C: function (t, e) {
                    return (e.x = t[4]), (e.y = t[5]), ['C', t[0], t[1], t[2], t[3], t[4], t[5]];
                  },
                  S: function (t, e) {
                    return (e.x = t[2]), (e.y = t[3]), ['S', t[0], t[1], t[2], t[3]];
                  },
                  Q: function (t, e) {
                    return (e.x = t[2]), (e.y = t[3]), ['Q', t[0], t[1], t[2], t[3]];
                  },
                  T: function (t, e) {
                    return (e.x = t[0]), (e.y = t[1]), ['T', t[0], t[1]];
                  },
                  Z: function (t, e, i) {
                    return (e.x = i.x), (e.y = i.y), ['Z'];
                  },
                  A: function (t, e) {
                    return (e.x = t[5]), (e.y = t[6]), ['A', t[0], t[1], t[2], t[3], t[4], t[5], t[6]];
                  },
                },
                S = 'mlhvqtcsaz'.split(''),
                A = 0,
                C = S.length;
              A < C;
              ++A
            )
              k[S[A]] = (function (t) {
                return function (e, i, a) {
                  if ('H' == t) e[0] = e[0] + i.x;
                  else if ('V' == t) e[0] = e[0] + i.y;
                  else if ('A' == t) (e[5] = e[5] + i.x), (e[6] = e[6] + i.y);
                  else for (var s = 0, n = e.length; s < n; ++s) e[s] = e[s] + (s % 2 ? i.y : i.x);
                  return k[t](e, i, a);
                };
              })(S[A].toUpperCase());
            (w.PathArray = function (t, e) {
              w.Array.call(this, t, e || [['M', 0, 0]]);
            }),
              (w.PathArray.prototype = new w.Array()),
              (w.PathArray.prototype.constructor = w.PathArray),
              w.extend(w.PathArray, {
                toString: function () {
                  return x(this.value);
                },
                move: function (t, e) {
                  var i = this.bbox();
                  if (((t -= i.x), (e -= i.y), !isNaN(t) && !isNaN(e))) for (var a, s = this.value.length - 1; s >= 0; s--) 'M' == (a = this.value[s][0]) || 'L' == a || 'T' == a ? ((this.value[s][1] += t), (this.value[s][2] += e)) : 'H' == a ? (this.value[s][1] += t) : 'V' == a ? (this.value[s][1] += e) : 'C' == a || 'S' == a || 'Q' == a ? ((this.value[s][1] += t), (this.value[s][2] += e), (this.value[s][3] += t), (this.value[s][4] += e), 'C' == a && ((this.value[s][5] += t), (this.value[s][6] += e))) : 'A' == a && ((this.value[s][6] += t), (this.value[s][7] += e));
                  return this;
                },
                size: function (t, e) {
                  var i,
                    a,
                    s = this.bbox();
                  for (i = this.value.length - 1; i >= 0; i--) 'M' == (a = this.value[i][0]) || 'L' == a || 'T' == a ? ((this.value[i][1] = ((this.value[i][1] - s.x) * t) / s.width + s.x), (this.value[i][2] = ((this.value[i][2] - s.y) * e) / s.height + s.y)) : 'H' == a ? (this.value[i][1] = ((this.value[i][1] - s.x) * t) / s.width + s.x) : 'V' == a ? (this.value[i][1] = ((this.value[i][1] - s.y) * e) / s.height + s.y) : 'C' == a || 'S' == a || 'Q' == a ? ((this.value[i][1] = ((this.value[i][1] - s.x) * t) / s.width + s.x), (this.value[i][2] = ((this.value[i][2] - s.y) * e) / s.height + s.y), (this.value[i][3] = ((this.value[i][3] - s.x) * t) / s.width + s.x), (this.value[i][4] = ((this.value[i][4] - s.y) * e) / s.height + s.y), 'C' == a && ((this.value[i][5] = ((this.value[i][5] - s.x) * t) / s.width + s.x), (this.value[i][6] = ((this.value[i][6] - s.y) * e) / s.height + s.y))) : 'A' == a && ((this.value[i][1] = (this.value[i][1] * t) / s.width), (this.value[i][2] = (this.value[i][2] * e) / s.height), (this.value[i][6] = ((this.value[i][6] - s.x) * t) / s.width + s.x), (this.value[i][7] = ((this.value[i][7] - s.y) * e) / s.height + s.y));
                  return this;
                },
                equalCommands: function (t) {
                  var e, i, a;
                  for (t = new w.PathArray(t), a = this.value.length === t.value.length, e = 0, i = this.value.length; a && e < i; e++) a = this.value[e][0] === t.value[e][0];
                  return a;
                },
                morph: function (t) {
                  return (t = new w.PathArray(t)), this.equalCommands(t) ? (this.destination = t) : (this.destination = null), this;
                },
                at: function (t) {
                  if (!this.destination) return this;
                  var e,
                    i,
                    a,
                    s,
                    n = this.value,
                    r = this.destination.value,
                    o = [],
                    l = new w.PathArray();
                  for (e = 0, i = n.length; e < i; e++) {
                    for (o[e] = [n[e][0]], a = 1, s = n[e].length; a < s; a++) o[e][a] = n[e][a] + (r[e][a] - n[e][a]) * t;
                    'A' === o[e][0] && ((o[e][4] = +(0 != o[e][4])), (o[e][5] = +(0 != o[e][5])));
                  }
                  return (l.value = o), l;
                },
                parse: function (t) {
                  if (t instanceof w.PathArray) return t.valueOf();
                  var e,
                    a = { M: 2, L: 2, H: 1, V: 1, C: 6, S: 4, Q: 4, T: 2, A: 7, Z: 0 };
                  t =
                    'string' == typeof t
                      ? t.replace(w.regex.numbersWithDots, i).replace(w.regex.pathLetters, ' $& ').replace(w.regex.hyphen, '$1 -').trim().split(w.regex.delimiter)
                      : t.reduce(function (t, e) {
                          return [].concat.call(t, e);
                        }, []);
                  var s = [],
                    n = new w.Point(),
                    r = new w.Point(),
                    o = 0,
                    l = t.length;
                  do {
                    w.regex.isPathLetter.test(t[o]) ? ((e = t[o]), ++o) : 'M' == e ? (e = 'L') : 'm' == e && (e = 'l'), s.push(k[e].call(null, t.slice(o, (o += a[e.toUpperCase()])).map(parseFloat), n, r));
                  } while (l > o);
                  return s;
                },
                bbox: function () {
                  return w.parser.path.setAttribute('d', this.toString()), w.parser.path.getBBox();
                },
              }),
              (w.Number = w.invent({
                create: function (t, e) {
                  (this.value = 0), (this.unit = e || ''), 'number' == typeof t ? (this.value = isNaN(t) ? 0 : isFinite(t) ? t : t < 0 ? -3.4e38 : 3.4e38) : 'string' == typeof t ? (e = t.match(w.regex.numberAndUnit)) && ((this.value = parseFloat(e[1])), '%' == e[5] ? (this.value /= 100) : 's' == e[5] && (this.value *= 1e3), (this.unit = e[5])) : t instanceof w.Number && ((this.value = t.valueOf()), (this.unit = t.unit));
                },
                extend: {
                  toString: function () {
                    return ('%' == this.unit ? ~~(1e8 * this.value) / 1e6 : 's' == this.unit ? this.value / 1e3 : this.value) + this.unit;
                  },
                  toJSON: function () {
                    return this.toString();
                  },
                  valueOf: function () {
                    return this.value;
                  },
                  plus: function (t) {
                    return (t = new w.Number(t)), new w.Number(this + t, this.unit || t.unit);
                  },
                  minus: function (t) {
                    return (t = new w.Number(t)), new w.Number(this - t, this.unit || t.unit);
                  },
                  times: function (t) {
                    return (t = new w.Number(t)), new w.Number(this * t, this.unit || t.unit);
                  },
                  divide: function (t) {
                    return (t = new w.Number(t)), new w.Number(this / t, this.unit || t.unit);
                  },
                  to: function (t) {
                    var e = new w.Number(this);
                    return 'string' == typeof t && (e.unit = t), e;
                  },
                  morph: function (t) {
                    return (this.destination = new w.Number(t)), t.relative && (this.destination.value += this.value), this;
                  },
                  at: function (t) {
                    return this.destination ? new w.Number(this.destination).minus(this).times(t).plus(this) : this;
                  },
                },
              })),
              (w.Element = w.invent({
                create: function (t) {
                  (this._stroke = w.defaults.attrs.stroke), (this._event = null), (this.dom = {}), (this.node = t) && ((this.type = t.nodeName), (this.node.instance = this), (this._stroke = t.getAttribute('stroke') || this._stroke));
                },
                extend: {
                  x: function (t) {
                    return this.attr('x', t);
                  },
                  y: function (t) {
                    return this.attr('y', t);
                  },
                  cx: function (t) {
                    return null == t ? this.x() + this.width() / 2 : this.x(t - this.width() / 2);
                  },
                  cy: function (t) {
                    return null == t ? this.y() + this.height() / 2 : this.y(t - this.height() / 2);
                  },
                  move: function (t, e) {
                    return this.x(t).y(e);
                  },
                  center: function (t, e) {
                    return this.cx(t).cy(e);
                  },
                  width: function (t) {
                    return this.attr('width', t);
                  },
                  height: function (t) {
                    return this.attr('height', t);
                  },
                  size: function (t, e) {
                    var i = d(this, t, e);
                    return this.width(new w.Number(i.width)).height(new w.Number(i.height));
                  },
                  clone: function (t) {
                    this.writeDataToDom();
                    var e = b(this.node.cloneNode(!0));
                    return t ? t.add(e) : this.after(e), e;
                  },
                  remove: function () {
                    return this.parent() && this.parent().removeElement(this), this;
                  },
                  replace: function (t) {
                    return this.after(t).remove(), t;
                  },
                  addTo: function (t) {
                    return t.put(this);
                  },
                  putIn: function (t) {
                    return t.add(this);
                  },
                  id: function (t) {
                    return this.attr('id', t);
                  },
                  inside: function (t, e) {
                    var i = this.bbox();
                    return t > i.x && e > i.y && t < i.x + i.width && e < i.y + i.height;
                  },
                  show: function () {
                    return this.style('display', '');
                  },
                  hide: function () {
                    return this.style('display', 'none');
                  },
                  visible: function () {
                    return 'none' != this.style('display');
                  },
                  toString: function () {
                    return this.attr('id');
                  },
                  classes: function () {
                    var t = this.attr('class');
                    return null == t ? [] : t.trim().split(w.regex.delimiter);
                  },
                  hasClass: function (t) {
                    return -1 != this.classes().indexOf(t);
                  },
                  addClass: function (t) {
                    if (!this.hasClass(t)) {
                      var e = this.classes();
                      e.push(t), this.attr('class', e.join(' '));
                    }
                    return this;
                  },
                  removeClass: function (t) {
                    return (
                      this.hasClass(t) &&
                        this.attr(
                          'class',
                          this.classes()
                            .filter(function (e) {
                              return e != t;
                            })
                            .join(' ')
                        ),
                      this
                    );
                  },
                  toggleClass: function (t) {
                    return this.hasClass(t) ? this.removeClass(t) : this.addClass(t);
                  },
                  reference: function (t) {
                    return w.get(this.attr(t));
                  },
                  parent: function (e) {
                    var i = this;
                    if (!i.node.parentNode) return null;
                    if (((i = w.adopt(i.node.parentNode)), !e)) return i;
                    for (; i && i.node instanceof t.SVGElement; ) {
                      if ('string' == typeof e ? i.matches(e) : i instanceof e) return i;
                      if (!i.node.parentNode || '#document' == i.node.parentNode.nodeName) return null;
                      i = w.adopt(i.node.parentNode);
                    }
                  },
                  doc: function () {
                    return this instanceof w.Doc ? this : this.parent(w.Doc);
                  },
                  parents: function (t) {
                    var e = [],
                      i = this;
                    do {
                      if (!(i = i.parent(t)) || !i.node) break;
                      e.push(i);
                    } while (i.parent);
                    return e;
                  },
                  matches: function (t) {
                    return r(this.node, t);
                  },
                  native: function () {
                    return this.node;
                  },
                  svg: function (t) {
                    var i = e.createElement('svg');
                    if (!(t && this instanceof w.Parent)) return i.appendChild((t = e.createElement('svg'))), this.writeDataToDom(), t.appendChild(this.node.cloneNode(!0)), i.innerHTML.replace(/^<svg>/, '').replace(/<\/svg>$/, '');
                    i.innerHTML = '<svg>' + t.replace(/\n/, '').replace(/<([\w:-]+)([^<]+?)\/>/g, '<$1$2></$1>') + '</svg>';
                    for (var a = 0, s = i.firstChild.childNodes.length; a < s; a++) this.node.appendChild(i.firstChild.firstChild);
                    return this;
                  },
                  writeDataToDom: function () {
                    return (
                      (this.each || this.lines) &&
                        (this.each ? this : this.lines()).each(function () {
                          this.writeDataToDom();
                        }),
                      this.node.removeAttribute('svgjs:data'),
                      Object.keys(this.dom).length && this.node.setAttribute('svgjs:data', JSON.stringify(this.dom)),
                      this
                    );
                  },
                  setData: function (t) {
                    return (this.dom = t), this;
                  },
                  is: function (t) {
                    return n(this, t);
                  },
                },
              })),
              (w.easing = {
                '-': function (t) {
                  return t;
                },
                '<>': function (t) {
                  return -Math.cos(t * Math.PI) / 2 + 0.5;
                },
                '>': function (t) {
                  return Math.sin((t * Math.PI) / 2);
                },
                '<': function (t) {
                  return 1 - Math.cos((t * Math.PI) / 2);
                },
              }),
              (w.morph = function (t) {
                return function (e, i) {
                  return new w.MorphObj(e, i).at(t);
                };
              }),
              (w.Situation = w.invent({
                create: function (t) {
                  (this.init = !1), (this.reversed = !1), (this.reversing = !1), (this.duration = new w.Number(t.duration).valueOf()), (this.delay = new w.Number(t.delay).valueOf()), (this.start = +new Date() + this.delay), (this.finish = this.start + this.duration), (this.ease = t.ease), (this.loop = 0), (this.loops = !1), (this.animations = {}), (this.attrs = {}), (this.styles = {}), (this.transforms = []), (this.once = {});
                },
              })),
              (w.FX = w.invent({
                create: function (t) {
                  (this._target = t), (this.situations = []), (this.active = !1), (this.situation = null), (this.paused = !1), (this.lastPos = 0), (this.pos = 0), (this.absPos = 0), (this._speed = 1);
                },
                extend: {
                  animate: function (t, e, i) {
                    'object' === (void 0 === t ? 'undefined' : s(t)) && ((e = t.ease), (i = t.delay), (t = t.duration));
                    var a = new w.Situation({ duration: t || 1e3, delay: i || 0, ease: w.easing[e || '-'] || e });
                    return this.queue(a), this;
                  },
                  delay: function (t) {
                    var e = new w.Situation({ duration: t, delay: 0, ease: w.easing['-'] });
                    return this.queue(e);
                  },
                  target: function (t) {
                    return t && t instanceof w.Element ? ((this._target = t), this) : this._target;
                  },
                  timeToAbsPos: function (t) {
                    return (t - this.situation.start) / (this.situation.duration / this._speed);
                  },
                  absPosToTime: function (t) {
                    return (this.situation.duration / this._speed) * t + this.situation.start;
                  },
                  startAnimFrame: function () {
                    this.stopAnimFrame(),
                      (this.animationFrame = t.requestAnimationFrame(
                        function () {
                          this.step();
                        }.bind(this)
                      ));
                  },
                  stopAnimFrame: function () {
                    t.cancelAnimationFrame(this.animationFrame);
                  },
                  start: function () {
                    return !this.active && this.situation && ((this.active = !0), this.startCurrent()), this;
                  },
                  startCurrent: function () {
                    return (this.situation.start = +new Date() + this.situation.delay / this._speed), (this.situation.finish = this.situation.start + this.situation.duration / this._speed), this.initAnimations().step();
                  },
                  queue: function (t) {
                    return ('function' == typeof t || t instanceof w.Situation) && this.situations.push(t), this.situation || (this.situation = this.situations.shift()), this;
                  },
                  dequeue: function () {
                    return this.stop(), (this.situation = this.situations.shift()), this.situation && (this.situation instanceof w.Situation ? this.start() : this.situation.call(this)), this;
                  },
                  initAnimations: function () {
                    var t,
                      e,
                      i,
                      a = this.situation;
                    if (a.init) return this;
                    for (t in a.animations) for (i = this.target()[t](), Array.isArray(i) || (i = [i]), Array.isArray(a.animations[t]) || (a.animations[t] = [a.animations[t]]), e = i.length; e--; ) a.animations[t][e] instanceof w.Number && (i[e] = new w.Number(i[e])), (a.animations[t][e] = i[e].morph(a.animations[t][e]));
                    for (t in a.attrs) a.attrs[t] = new w.MorphObj(this.target().attr(t), a.attrs[t]);
                    for (t in a.styles) a.styles[t] = new w.MorphObj(this.target().style(t), a.styles[t]);
                    return (a.initialTransformation = this.target().matrixify()), (a.init = !0), this;
                  },
                  clearQueue: function () {
                    return (this.situations = []), this;
                  },
                  clearCurrent: function () {
                    return (this.situation = null), this;
                  },
                  stop: function (t, e) {
                    var i = this.active;
                    return (this.active = !1), e && this.clearQueue(), t && this.situation && (!i && this.startCurrent(), this.atEnd()), this.stopAnimFrame(), this.clearCurrent();
                  },
                  reset: function () {
                    if (this.situation) {
                      var t = this.situation;
                      this.stop(), (this.situation = t), this.atStart();
                    }
                    return this;
                  },
                  finish: function () {
                    for (this.stop(!0, !1); this.dequeue().situation && this.stop(!0, !1); );
                    return this.clearQueue().clearCurrent(), this;
                  },
                  atStart: function () {
                    return this.at(0, !0);
                  },
                  atEnd: function () {
                    return !0 === this.situation.loops && (this.situation.loops = this.situation.loop + 1), 'number' == typeof this.situation.loops ? this.at(this.situation.loops, !0) : this.at(1, !0);
                  },
                  at: function (t, e) {
                    var i = this.situation.duration / this._speed;
                    return (this.absPos = t), e || (this.situation.reversed && (this.absPos = 1 - this.absPos), (this.absPos += this.situation.loop)), (this.situation.start = +new Date() - this.absPos * i), (this.situation.finish = this.situation.start + i), this.step(!0);
                  },
                  speed: function (t) {
                    return 0 === t ? this.pause() : t ? ((this._speed = t), this.at(this.absPos, !0)) : this._speed;
                  },
                  loop: function (t, e) {
                    var i = this.last();
                    return (i.loops = null == t || t), (i.loop = 0), e && (i.reversing = !0), this;
                  },
                  pause: function () {
                    return (this.paused = !0), this.stopAnimFrame(), this;
                  },
                  play: function () {
                    return this.paused ? ((this.paused = !1), this.at(this.absPos, !0)) : this;
                  },
                  reverse: function (t) {
                    var e = this.last();
                    return (e.reversed = void 0 === t ? !e.reversed : t), this;
                  },
                  progress: function (t) {
                    return t ? this.situation.ease(this.pos) : this.pos;
                  },
                  after: function (t) {
                    var e = this.last(),
                      i = function i(a) {
                        a.detail.situation == e && (t.call(this, e), this.off('finished.fx', i));
                      };
                    return this.target().on('finished.fx', i), this._callStart();
                  },
                  during: function (t) {
                    var e = this.last(),
                      i = function (i) {
                        i.detail.situation == e && t.call(this, i.detail.pos, w.morph(i.detail.pos), i.detail.eased, e);
                      };
                    return (
                      this.target().off('during.fx', i).on('during.fx', i),
                      this.after(function () {
                        this.off('during.fx', i);
                      }),
                      this._callStart()
                    );
                  },
                  afterAll: function (t) {
                    var e = function e(i) {
                      t.call(this), this.off('allfinished.fx', e);
                    };
                    return this.target().off('allfinished.fx', e).on('allfinished.fx', e), this._callStart();
                  },
                  duringAll: function (t) {
                    var e = function (e) {
                      t.call(this, e.detail.pos, w.morph(e.detail.pos), e.detail.eased, e.detail.situation);
                    };
                    return (
                      this.target().off('during.fx', e).on('during.fx', e),
                      this.afterAll(function () {
                        this.off('during.fx', e);
                      }),
                      this._callStart()
                    );
                  },
                  last: function () {
                    return this.situations.length ? this.situations[this.situations.length - 1] : this.situation;
                  },
                  add: function (t, e, i) {
                    return (this.last()[i || 'animations'][t] = e), this._callStart();
                  },
                  step: function (t) {
                    if ((t || (this.absPos = this.timeToAbsPos(+new Date())), !1 !== this.situation.loops)) {
                      var e, i, a;
                      (e = Math.max(this.absPos, 0)), (i = Math.floor(e)), !0 === this.situation.loops || i < this.situation.loops ? ((this.pos = e - i), (a = this.situation.loop), (this.situation.loop = i)) : ((this.absPos = this.situation.loops), (this.pos = 1), (a = this.situation.loop - 1), (this.situation.loop = this.situation.loops)), this.situation.reversing && (this.situation.reversed = this.situation.reversed != Boolean((this.situation.loop - a) % 2));
                    } else (this.absPos = Math.min(this.absPos, 1)), (this.pos = this.absPos);
                    this.pos < 0 && (this.pos = 0), this.situation.reversed && (this.pos = 1 - this.pos);
                    var s = this.situation.ease(this.pos);
                    for (var n in this.situation.once) n > this.lastPos && n <= s && (this.situation.once[n].call(this.target(), this.pos, s), delete this.situation.once[n]);
                    return this.active && this.target().fire('during', { pos: this.pos, eased: s, fx: this, situation: this.situation }), this.situation ? (this.eachAt(), (1 == this.pos && !this.situation.reversed) || (this.situation.reversed && 0 == this.pos) ? (this.stopAnimFrame(), this.target().fire('finished', { fx: this, situation: this.situation }), this.situations.length || (this.target().fire('allfinished'), this.situations.length || (this.target().off('.fx'), (this.active = !1))), this.active ? this.dequeue() : this.clearCurrent()) : !this.paused && this.active && this.startAnimFrame(), (this.lastPos = s), this) : this;
                  },
                  eachAt: function () {
                    var t,
                      e,
                      i,
                      a = this,
                      s = this.target(),
                      n = this.situation;
                    for (t in n.animations)
                      (i = [].concat(n.animations[t]).map(function (t) {
                        return 'string' != typeof t && t.at ? t.at(n.ease(a.pos), a.pos) : t;
                      })),
                        s[t].apply(s, i);
                    for (t in n.attrs)
                      (i = [t].concat(n.attrs[t]).map(function (t) {
                        return 'string' != typeof t && t.at ? t.at(n.ease(a.pos), a.pos) : t;
                      })),
                        s.attr.apply(s, i);
                    for (t in n.styles)
                      (i = [t].concat(n.styles[t]).map(function (t) {
                        return 'string' != typeof t && t.at ? t.at(n.ease(a.pos), a.pos) : t;
                      })),
                        s.style.apply(s, i);
                    if (n.transforms.length) {
                      for (i = n.initialTransformation, t = 0, e = n.transforms.length; t < e; t++) {
                        var r = n.transforms[t];
                        r instanceof w.Matrix ? (i = r.relative ? i.multiply(new w.Matrix().morph(r).at(n.ease(this.pos))) : i.morph(r).at(n.ease(this.pos))) : (r.relative || r.undo(i.extract()), (i = i.multiply(r.at(n.ease(this.pos)))));
                      }
                      s.matrix(i);
                    }
                    return this;
                  },
                  once: function (t, e, i) {
                    var a = this.last();
                    return i || (t = a.ease(t)), (a.once[t] = e), this;
                  },
                  _callStart: function () {
                    return (
                      setTimeout(
                        function () {
                          this.start();
                        }.bind(this),
                        0
                      ),
                      this
                    );
                  },
                },
                parent: w.Element,
                construct: {
                  animate: function (t, e, i) {
                    return (this.fx || (this.fx = new w.FX(this))).animate(t, e, i);
                  },
                  delay: function (t) {
                    return (this.fx || (this.fx = new w.FX(this))).delay(t);
                  },
                  stop: function (t, e) {
                    return this.fx && this.fx.stop(t, e), this;
                  },
                  finish: function () {
                    return this.fx && this.fx.finish(), this;
                  },
                  pause: function () {
                    return this.fx && this.fx.pause(), this;
                  },
                  play: function () {
                    return this.fx && this.fx.play(), this;
                  },
                  speed: function (t) {
                    if (this.fx) {
                      if (null == t) return this.fx.speed();
                      this.fx.speed(t);
                    }
                    return this;
                  },
                },
              })),
              (w.MorphObj = w.invent({
                create: function (t, e) {
                  return w.Color.isColor(e) ? new w.Color(t).morph(e) : w.regex.delimiter.test(t) ? (w.regex.pathLetters.test(t) ? new w.PathArray(t).morph(e) : new w.Array(t).morph(e)) : w.regex.numberAndUnit.test(e) ? new w.Number(t).morph(e) : ((this.value = t), void (this.destination = e));
                },
                extend: {
                  at: function (t, e) {
                    return e < 1 ? this.value : this.destination;
                  },
                  valueOf: function () {
                    return this.value;
                  },
                },
              })),
              w.extend(w.FX, {
                attr: function (t, e, i) {
                  if ('object' === (void 0 === t ? 'undefined' : s(t))) for (var a in t) this.attr(a, t[a]);
                  else this.add(t, e, 'attrs');
                  return this;
                },
                style: function (t, e) {
                  if ('object' === (void 0 === t ? 'undefined' : s(t))) for (var i in t) this.style(i, t[i]);
                  else this.add(t, e, 'styles');
                  return this;
                },
                x: function (t, e) {
                  if (this.target() instanceof w.G) return this.transform({ x: t }, e), this;
                  var i = new w.Number(t);
                  return (i.relative = e), this.add('x', i);
                },
                y: function (t, e) {
                  if (this.target() instanceof w.G) return this.transform({ y: t }, e), this;
                  var i = new w.Number(t);
                  return (i.relative = e), this.add('y', i);
                },
                cx: function (t) {
                  return this.add('cx', new w.Number(t));
                },
                cy: function (t) {
                  return this.add('cy', new w.Number(t));
                },
                move: function (t, e) {
                  return this.x(t).y(e);
                },
                center: function (t, e) {
                  return this.cx(t).cy(e);
                },
                size: function (t, e) {
                  if (this.target() instanceof w.Text) this.attr('font-size', t);
                  else {
                    var i;
                    (t && e) || (i = this.target().bbox()), t || (t = (i.width / i.height) * e), e || (e = (i.height / i.width) * t), this.add('width', new w.Number(t)).add('height', new w.Number(e));
                  }
                  return this;
                },
                width: function (t) {
                  return this.add('width', new w.Number(t));
                },
                height: function (t) {
                  return this.add('height', new w.Number(t));
                },
                plot: function (t, e, i, a) {
                  return 4 == arguments.length ? this.plot([t, e, i, a]) : this.add('plot', new (this.target().morphArray)(t));
                },
                leading: function (t) {
                  return this.target().leading ? this.add('leading', new w.Number(t)) : this;
                },
                viewbox: function (t, e, i, a) {
                  return this.target() instanceof w.Container && this.add('viewbox', new w.ViewBox(t, e, i, a)), this;
                },
                update: function (t) {
                  if (this.target() instanceof w.Stop) {
                    if ('number' == typeof t || t instanceof w.Number) return this.update({ offset: arguments[0], color: arguments[1], opacity: arguments[2] });
                    null != t.opacity && this.attr('stop-opacity', t.opacity), null != t.color && this.attr('stop-color', t.color), null != t.offset && this.attr('offset', t.offset);
                  }
                  return this;
                },
              }),
              (w.Box = w.invent({
                create: function (t, e, i, a) {
                  if (!('object' !== (void 0 === t ? 'undefined' : s(t)) || t instanceof w.Element)) return w.Box.call(this, null != t.left ? t.left : t.x, null != t.top ? t.top : t.y, t.width, t.height);
                  4 == arguments.length && ((this.x = t), (this.y = e), (this.width = i), (this.height = a)), v(this);
                },
                extend: {
                  merge: function (t) {
                    var e = new this.constructor();
                    return (e.x = Math.min(this.x, t.x)), (e.y = Math.min(this.y, t.y)), (e.width = Math.max(this.x + this.width, t.x + t.width) - e.x), (e.height = Math.max(this.y + this.height, t.y + t.height) - e.y), v(e);
                  },
                  transform: function (t) {
                    var e,
                      i = 1 / 0,
                      a = -1 / 0,
                      s = 1 / 0,
                      n = -1 / 0;
                    return (
                      [new w.Point(this.x, this.y), new w.Point(this.x2, this.y), new w.Point(this.x, this.y2), new w.Point(this.x2, this.y2)].forEach(function (e) {
                        (e = e.transform(t)), (i = Math.min(i, e.x)), (a = Math.max(a, e.x)), (s = Math.min(s, e.y)), (n = Math.max(n, e.y));
                      }),
                      (e = new this.constructor()),
                      (e.x = i),
                      (e.width = a - i),
                      (e.y = s),
                      (e.height = n - s),
                      v(e),
                      e
                    );
                  },
                },
              })),
              (w.BBox = w.invent({
                create: function (t) {
                  if ((w.Box.apply(this, [].slice.call(arguments)), t instanceof w.Element)) {
                    var i;
                    try {
                      if (!e.documentElement.contains) {
                        for (var a = t.node; a.parentNode; ) a = a.parentNode;
                        if (a != e) throw new Error('Element not in the dom');
                      }
                      i = t.node.getBBox();
                    } catch (e) {
                      if (t instanceof w.Shape) {
                        w.parser.draw || w.prepare();
                        var s = t.clone(w.parser.draw.instance).show();
                        (i = s.node.getBBox()), s.remove();
                      } else i = { x: t.node.clientLeft, y: t.node.clientTop, width: t.node.clientWidth, height: t.node.clientHeight };
                    }
                    w.Box.call(this, i);
                  }
                },
                inherit: w.Box,
                parent: w.Element,
                construct: {
                  bbox: function () {
                    return new w.BBox(this);
                  },
                },
              })),
              (w.BBox.prototype.constructor = w.BBox),
              w.extend(w.Element, {
                tbox: function () {
                  return console.warn('Use of TBox is deprecated and mapped to RBox. Use .rbox() instead.'), this.rbox(this.doc());
                },
              }),
              (w.RBox = w.invent({
                create: function (t) {
                  w.Box.apply(this, [].slice.call(arguments)), t instanceof w.Element && w.Box.call(this, t.node.getBoundingClientRect());
                },
                inherit: w.Box,
                parent: w.Element,
                extend: {
                  addOffset: function () {
                    return (this.x += t.pageXOffset), (this.y += t.pageYOffset), this;
                  },
                },
                construct: {
                  rbox: function (t) {
                    return t ? new w.RBox(this).transform(t.screenCTM().inverse()) : new w.RBox(this).addOffset();
                  },
                },
              })),
              (w.RBox.prototype.constructor = w.RBox),
              (w.Matrix = w.invent({
                create: function (t) {
                  var e,
                    i = f([1, 0, 0, 1, 0, 0]);
                  for (t = t instanceof w.Element ? t.matrixify() : 'string' == typeof t ? f(t.split(w.regex.delimiter).map(parseFloat)) : 6 == arguments.length ? f([].slice.call(arguments)) : Array.isArray(t) ? f(t) : 'object' === (void 0 === t ? 'undefined' : s(t)) ? t : i, e = P.length - 1; e >= 0; --e) this[P[e]] = null != t[P[e]] ? t[P[e]] : i[P[e]];
                },
                extend: {
                  extract: function () {
                    var t = u(this, 0, 1),
                      e = u(this, 1, 0),
                      i = (180 / Math.PI) * Math.atan2(t.y, t.x) - 90;
                    return {
                      x: this.e,
                      y: this.f,
                      transformedX: (this.e * Math.cos((i * Math.PI) / 180) + this.f * Math.sin((i * Math.PI) / 180)) / Math.sqrt(this.a * this.a + this.b * this.b),
                      transformedY: (this.f * Math.cos((i * Math.PI) / 180) + this.e * Math.sin((-i * Math.PI) / 180)) / Math.sqrt(this.c * this.c + this.d * this.d),
                      skewX: -i,
                      skewY: (180 / Math.PI) * Math.atan2(e.y, e.x),
                      scaleX: Math.sqrt(this.a * this.a + this.b * this.b),
                      scaleY: Math.sqrt(this.c * this.c + this.d * this.d),
                      rotation: i,
                      a: this.a,
                      b: this.b,
                      c: this.c,
                      d: this.d,
                      e: this.e,
                      f: this.f,
                      matrix: new w.Matrix(this),
                    };
                  },
                  clone: function () {
                    return new w.Matrix(this);
                  },
                  morph: function (t) {
                    return (this.destination = new w.Matrix(t)), this;
                  },
                  at: function (t) {
                    return this.destination
                      ? new w.Matrix({
                          a: this.a + (this.destination.a - this.a) * t,
                          b: this.b + (this.destination.b - this.b) * t,
                          c: this.c + (this.destination.c - this.c) * t,
                          d: this.d + (this.destination.d - this.d) * t,
                          e: this.e + (this.destination.e - this.e) * t,
                          f: this.f + (this.destination.f - this.f) * t,
                        })
                      : this;
                  },
                  multiply: function (t) {
                    return new w.Matrix(this.native().multiply(g(t).native()));
                  },
                  inverse: function () {
                    return new w.Matrix(this.native().inverse());
                  },
                  translate: function (t, e) {
                    return new w.Matrix(this.native().translate(t || 0, e || 0));
                  },
                  scale: function (t, e, i, a) {
                    return 1 == arguments.length ? (e = t) : 3 == arguments.length && ((a = i), (i = e), (e = t)), this.around(i, a, new w.Matrix(t, 0, 0, e, 0, 0));
                  },
                  rotate: function (t, e, i) {
                    return (t = w.utils.radians(t)), this.around(e, i, new w.Matrix(Math.cos(t), Math.sin(t), -Math.sin(t), Math.cos(t), 0, 0));
                  },
                  flip: function (t, e) {
                    return 'x' == t ? this.scale(-1, 1, e, 0) : 'y' == t ? this.scale(1, -1, 0, e) : this.scale(-1, -1, t, null != e ? e : t);
                  },
                  skew: function (t, e, i, a) {
                    return 1 == arguments.length ? (e = t) : 3 == arguments.length && ((a = i), (i = e), (e = t)), (t = w.utils.radians(t)), (e = w.utils.radians(e)), this.around(i, a, new w.Matrix(1, Math.tan(e), Math.tan(t), 1, 0, 0));
                  },
                  skewX: function (t, e, i) {
                    return this.skew(t, 0, e, i);
                  },
                  skewY: function (t, e, i) {
                    return this.skew(0, t, e, i);
                  },
                  around: function (t, e, i) {
                    return this.multiply(new w.Matrix(1, 0, 0, 1, t || 0, e || 0))
                      .multiply(i)
                      .multiply(new w.Matrix(1, 0, 0, 1, -t || 0, -e || 0));
                  },
                  native: function () {
                    for (var t = w.parser.native.createSVGMatrix(), e = P.length - 1; e >= 0; e--) t[P[e]] = this[P[e]];
                    return t;
                  },
                  toString: function () {
                    return 'matrix(' + y(this.a) + ',' + y(this.b) + ',' + y(this.c) + ',' + y(this.d) + ',' + y(this.e) + ',' + y(this.f) + ')';
                  },
                },
                parent: w.Element,
                construct: {
                  ctm: function () {
                    return new w.Matrix(this.node.getCTM());
                  },
                  screenCTM: function () {
                    if (this instanceof w.Nested) {
                      var t = this.rect(1, 1),
                        e = t.node.getScreenCTM();
                      return t.remove(), new w.Matrix(e);
                    }
                    return new w.Matrix(this.node.getScreenCTM());
                  },
                },
              })),
              (w.Point = w.invent({
                create: function (t, e) {
                  var i,
                    a = { x: 0, y: 0 };
                  (i = Array.isArray(t) ? { x: t[0], y: t[1] } : 'object' === (void 0 === t ? 'undefined' : s(t)) ? { x: t.x, y: t.y } : null != t ? { x: t, y: null != e ? e : t } : a), (this.x = i.x), (this.y = i.y);
                },
                extend: {
                  clone: function () {
                    return new w.Point(this);
                  },
                  morph: function (t, e) {
                    return (this.destination = new w.Point(t, e)), this;
                  },
                  at: function (t) {
                    return this.destination ? new w.Point({ x: this.x + (this.destination.x - this.x) * t, y: this.y + (this.destination.y - this.y) * t }) : this;
                  },
                  native: function () {
                    var t = w.parser.native.createSVGPoint();
                    return (t.x = this.x), (t.y = this.y), t;
                  },
                  transform: function (t) {
                    return new w.Point(this.native().matrixTransform(t.native()));
                  },
                },
              })),
              w.extend(w.Element, {
                point: function (t, e) {
                  return new w.Point(t, e).transform(this.screenCTM().inverse());
                },
              }),
              w.extend(w.Element, {
                attr: function (t, e, i) {
                  if (null == t) {
                    for (t = {}, i = (e = this.node.attributes).length - 1; i >= 0; i--) t[e[i].nodeName] = w.regex.isNumber.test(e[i].nodeValue) ? parseFloat(e[i].nodeValue) : e[i].nodeValue;
                    return t;
                  }
                  if ('object' === (void 0 === t ? 'undefined' : s(t))) for (e in t) this.attr(e, t[e]);
                  else if (null === e) this.node.removeAttribute(t);
                  else {
                    if (null == e) return (e = this.node.getAttribute(t)), null == e ? w.defaults.attrs[t] : w.regex.isNumber.test(e) ? parseFloat(e) : e;
                    'stroke-width' == t ? this.attr('stroke', parseFloat(e) > 0 ? this._stroke : null) : 'stroke' == t && (this._stroke = e),
                      ('fill' != t && 'stroke' != t) ||
                        (w.regex.isImage.test(e) && (e = this.doc().defs().image(e, 0, 0)),
                        e instanceof w.Image &&
                          (e = this.doc()
                            .defs()
                            .pattern(0, 0, function () {
                              this.add(e);
                            }))),
                      'number' == typeof e ? (e = new w.Number(e)) : w.Color.isColor(e) ? (e = new w.Color(e)) : Array.isArray(e) && (e = new w.Array(e)),
                      'leading' == t ? this.leading && this.leading(e) : 'string' == typeof i ? this.node.setAttributeNS(i, t, e.toString()) : this.node.setAttribute(t, e.toString()),
                      !this.rebuild || ('font-size' != t && 'x' != t) || this.rebuild(t, e);
                  }
                  return this;
                },
              }),
              w.extend(w.Element, {
                transform: function (t, e) {
                  var i,
                    a,
                    n = this;
                  if ('object' !== (void 0 === t ? 'undefined' : s(t))) return (i = new w.Matrix(n).extract()), 'string' == typeof t ? i[t] : i;
                  if (((i = new w.Matrix(n)), (e = !!e || !!t.relative), null != t.a)) i = e ? i.multiply(new w.Matrix(t)) : new w.Matrix(t);
                  else if (null != t.rotation) p(t, n), (i = e ? i.rotate(t.rotation, t.cx, t.cy) : i.rotate(t.rotation - i.extract().rotation, t.cx, t.cy));
                  else if (null != t.scale || null != t.scaleX || null != t.scaleY) {
                    if ((p(t, n), (t.scaleX = null != t.scale ? t.scale : null != t.scaleX ? t.scaleX : 1), (t.scaleY = null != t.scale ? t.scale : null != t.scaleY ? t.scaleY : 1), !e)) {
                      r = i.extract();
                      (t.scaleX = (1 * t.scaleX) / r.scaleX), (t.scaleY = (1 * t.scaleY) / r.scaleY);
                    }
                    i = i.scale(t.scaleX, t.scaleY, t.cx, t.cy);
                  } else if (null != t.skew || null != t.skewX || null != t.skewY) {
                    if ((p(t, n), (t.skewX = null != t.skew ? t.skew : null != t.skewX ? t.skewX : 0), (t.skewY = null != t.skew ? t.skew : null != t.skewY ? t.skewY : 0), !e)) {
                      var r = i.extract();
                      i = i.multiply(new w.Matrix().skew(r.skewX, r.skewY, t.cx, t.cy).inverse());
                    }
                    i = i.skew(t.skewX, t.skewY, t.cx, t.cy);
                  } else t.flip ? ('x' == t.flip || 'y' == t.flip ? (t.offset = null == t.offset ? n.bbox()['c' + t.flip] : t.offset) : null == t.offset ? ((a = n.bbox()), (t.flip = a.cx), (t.offset = a.cy)) : (t.flip = t.offset), (i = new w.Matrix().flip(t.flip, t.offset))) : (null == t.x && null == t.y) || (e ? (i = i.translate(t.x, t.y)) : (null != t.x && (i.e = t.x), null != t.y && (i.f = t.y)));
                  return this.attr('transform', i);
                },
              }),
              w.extend(w.FX, {
                transform: function (t, e) {
                  var i,
                    a,
                    n = this.target();
                  return 'object' !== (void 0 === t ? 'undefined' : s(t)) ? ((i = new w.Matrix(n).extract()), 'string' == typeof t ? i[t] : i) : ((e = !!e || !!t.relative), null != t.a ? (i = new w.Matrix(t)) : null != t.rotation ? (p(t, n), (i = new w.Rotate(t.rotation, t.cx, t.cy))) : null != t.scale || null != t.scaleX || null != t.scaleY ? (p(t, n), (t.scaleX = null != t.scale ? t.scale : null != t.scaleX ? t.scaleX : 1), (t.scaleY = null != t.scale ? t.scale : null != t.scaleY ? t.scaleY : 1), (i = new w.Scale(t.scaleX, t.scaleY, t.cx, t.cy))) : null != t.skewX || null != t.skewY ? (p(t, n), (t.skewX = null != t.skewX ? t.skewX : 0), (t.skewY = null != t.skewY ? t.skewY : 0), (i = new w.Skew(t.skewX, t.skewY, t.cx, t.cy))) : t.flip ? ('x' == t.flip || 'y' == t.flip ? (t.offset = null == t.offset ? n.bbox()['c' + t.flip] : t.offset) : null == t.offset ? ((a = n.bbox()), (t.flip = a.cx), (t.offset = a.cy)) : (t.flip = t.offset), (i = new w.Matrix().flip(t.flip, t.offset))) : (null == t.x && null == t.y) || (i = new w.Translate(t.x, t.y)), i ? ((i.relative = e), this.last().transforms.push(i), this._callStart()) : this);
                },
              }),
              w.extend(w.Element, {
                untransform: function () {
                  return this.attr('transform', null);
                },
                matrixify: function () {
                  return (this.attr('transform') || '')
                    .split(w.regex.transforms)
                    .slice(0, -1)
                    .map(function (t) {
                      var e = t.trim().split('(');
                      return [
                        e[0],
                        e[1].split(w.regex.delimiter).map(function (t) {
                          return parseFloat(t);
                        }),
                      ];
                    })
                    .reduce(function (t, e) {
                      return 'matrix' == e[0] ? t.multiply(f(e[1])) : t[e[0]].apply(t, e[1]);
                    }, new w.Matrix());
                },
                toParent: function (t) {
                  if (this == t) return this;
                  var e = this.screenCTM(),
                    i = t.screenCTM().inverse();
                  return this.addTo(t).untransform().transform(i.multiply(e)), this;
                },
                toDoc: function () {
                  return this.toParent(this.doc());
                },
              }),
              (w.Transformation = w.invent({
                create: function (t, e) {
                  if (arguments.length > 1 && 'boolean' != typeof e) return this.constructor.call(this, [].slice.call(arguments));
                  if (Array.isArray(t)) for (var i = 0, a = this.arguments.length; i < a; ++i) this[this.arguments[i]] = t[i];
                  else if ('object' === (void 0 === t ? 'undefined' : s(t))) for (var i = 0, a = this.arguments.length; i < a; ++i) this[this.arguments[i]] = t[this.arguments[i]];
                  (this.inversed = !1), !0 === e && (this.inversed = !0);
                },
                extend: {
                  arguments: [],
                  method: '',
                  at: function (t) {
                    for (var e = [], i = 0, a = this.arguments.length; i < a; ++i) e.push(this[this.arguments[i]]);
                    var s = this._undo || new w.Matrix();
                    return (s = new w.Matrix().morph(w.Matrix.prototype[this.method].apply(s, e)).at(t)), this.inversed ? s.inverse() : s;
                  },
                  undo: function (t) {
                    for (var e = 0, i = this.arguments.length; e < i; ++e) t[this.arguments[e]] = void 0 === this[this.arguments[e]] ? 0 : t[this.arguments[e]];
                    return (t.cx = this.cx), (t.cy = this.cy), (this._undo = new w[l(this.method)](t, !0).at(1)), this;
                  },
                },
              })),
              (w.Translate = w.invent({
                parent: w.Matrix,
                inherit: w.Transformation,
                create: function (t, e) {
                  this.constructor.apply(this, [].slice.call(arguments));
                },
                extend: { arguments: ['transformedX', 'transformedY'], method: 'translate' },
              })),
              (w.Rotate = w.invent({
                parent: w.Matrix,
                inherit: w.Transformation,
                create: function (t, e) {
                  this.constructor.apply(this, [].slice.call(arguments));
                },
                extend: {
                  arguments: ['rotation', 'cx', 'cy'],
                  method: 'rotate',
                  at: function (t) {
                    var e = new w.Matrix().rotate(new w.Number().morph(this.rotation - (this._undo ? this._undo.rotation : 0)).at(t), this.cx, this.cy);
                    return this.inversed ? e.inverse() : e;
                  },
                  undo: function (t) {
                    return (this._undo = t), this;
                  },
                },
              })),
              (w.Scale = w.invent({
                parent: w.Matrix,
                inherit: w.Transformation,
                create: function (t, e) {
                  this.constructor.apply(this, [].slice.call(arguments));
                },
                extend: { arguments: ['scaleX', 'scaleY', 'cx', 'cy'], method: 'scale' },
              })),
              (w.Skew = w.invent({
                parent: w.Matrix,
                inherit: w.Transformation,
                create: function (t, e) {
                  this.constructor.apply(this, [].slice.call(arguments));
                },
                extend: { arguments: ['skewX', 'skewY', 'cx', 'cy'], method: 'skew' },
              })),
              w.extend(w.Element, {
                style: function (t, e) {
                  if (0 == arguments.length) return this.node.style.cssText || '';
                  if (arguments.length < 2)
                    if ('object' === (void 0 === t ? 'undefined' : s(t))) for (e in t) this.style(e, t[e]);
                    else {
                      if (!w.regex.isCss.test(t)) return this.node.style[o(t)];
                      for (
                        t = t
                          .split(/\s*;\s*/)
                          .filter(function (t) {
                            return !!t;
                          })
                          .map(function (t) {
                            return t.split(/\s*:\s*/);
                          });
                        (e = t.pop());

                      )
                        this.style(e[0], e[1]);
                    }
                  else this.node.style[o(t)] = null === e || w.regex.isBlank.test(e) ? '' : e;
                  return this;
                },
              }),
              (w.Parent = w.invent({
                create: function (t) {
                  this.constructor.call(this, t);
                },
                inherit: w.Element,
                extend: {
                  children: function () {
                    return w.utils.map(w.utils.filterSVGElements(this.node.childNodes), function (t) {
                      return w.adopt(t);
                    });
                  },
                  add: function (t, e) {
                    return null == e ? this.node.appendChild(t.node) : t.node != this.node.childNodes[e] && this.node.insertBefore(t.node, this.node.childNodes[e]), this;
                  },
                  put: function (t, e) {
                    return this.add(t, e), t;
                  },
                  has: function (t) {
                    return this.index(t) >= 0;
                  },
                  index: function (t) {
                    return [].slice.call(this.node.childNodes).indexOf(t.node);
                  },
                  get: function (t) {
                    return w.adopt(this.node.childNodes[t]);
                  },
                  first: function () {
                    return this.get(0);
                  },
                  last: function () {
                    return this.get(this.node.childNodes.length - 1);
                  },
                  each: function (t, e) {
                    var i,
                      a,
                      s = this.children();
                    for (i = 0, a = s.length; i < a; i++) s[i] instanceof w.Element && t.apply(s[i], [i, s]), e && s[i] instanceof w.Container && s[i].each(t, e);
                    return this;
                  },
                  removeElement: function (t) {
                    return this.node.removeChild(t.node), this;
                  },
                  clear: function () {
                    for (; this.node.hasChildNodes(); ) this.node.removeChild(this.node.lastChild);
                    return delete this._defs, this;
                  },
                  defs: function () {
                    return this.doc().defs();
                  },
                },
              })),
              w.extend(w.Parent, {
                ungroup: function (t, e) {
                  return 0 === e || this instanceof w.Defs || this.node == w.parser.draw
                    ? this
                    : ((t = t || (this instanceof w.Doc ? this : this.parent(w.Parent))),
                      (e = e || 1 / 0),
                      this.each(function () {
                        return this instanceof w.Defs ? this : this instanceof w.Parent ? this.ungroup(t, e - 1) : this.toParent(t);
                      }),
                      this.node.firstChild || this.remove(),
                      this);
                },
                flatten: function (t, e) {
                  return this.ungroup(t, e);
                },
              }),
              (w.Container = w.invent({
                create: function (t) {
                  this.constructor.call(this, t);
                },
                inherit: w.Parent,
              })),
              (w.ViewBox = w.invent({
                create: function (t) {
                  var e,
                    i,
                    a,
                    n,
                    r,
                    o,
                    l,
                    h = [0, 0, 0, 0],
                    c = 1,
                    d = 1,
                    u = /[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?/gi;
                  if (t instanceof w.Element) {
                    for (o = t, l = t, r = (t.attr('viewBox') || '').match(u), t.bbox, a = new w.Number(t.width()), n = new w.Number(t.height()); '%' == a.unit; ) (c *= a.value), (a = new w.Number(o instanceof w.Doc ? o.parent().offsetWidth : o.parent().width())), (o = o.parent());
                    for (; '%' == n.unit; ) (d *= n.value), (n = new w.Number(l instanceof w.Doc ? l.parent().offsetHeight : l.parent().height())), (l = l.parent());
                    (this.x = 0), (this.y = 0), (this.width = a * c), (this.height = n * d), (this.zoom = 1), r && ((e = parseFloat(r[0])), (i = parseFloat(r[1])), (a = parseFloat(r[2])), (n = parseFloat(r[3])), (this.zoom = this.width / this.height > a / n ? this.height / n : this.width / a), (this.x = e), (this.y = i), (this.width = a), (this.height = n));
                  } else
                    (t =
                      'string' == typeof t
                        ? t.match(u).map(function (t) {
                            return parseFloat(t);
                          })
                        : Array.isArray(t)
                        ? t
                        : 'object' === (void 0 === t ? 'undefined' : s(t))
                        ? [t.x, t.y, t.width, t.height]
                        : 4 == arguments.length
                        ? [].slice.call(arguments)
                        : h),
                      (this.x = t[0]),
                      (this.y = t[1]),
                      (this.width = t[2]),
                      (this.height = t[3]);
                },
                extend: {
                  toString: function () {
                    return this.x + ' ' + this.y + ' ' + this.width + ' ' + this.height;
                  },
                  morph: function (t, e, i, a) {
                    return (this.destination = new w.ViewBox(t, e, i, a)), this;
                  },
                  at: function (t) {
                    return this.destination ? new w.ViewBox([this.x + (this.destination.x - this.x) * t, this.y + (this.destination.y - this.y) * t, this.width + (this.destination.width - this.width) * t, this.height + (this.destination.height - this.height) * t]) : this;
                  },
                },
                parent: w.Container,
                construct: {
                  viewbox: function (t, e, i, a) {
                    return 0 == arguments.length ? new w.ViewBox(this) : this.attr('viewBox', new w.ViewBox(t, e, i, a));
                  },
                },
              })),
              ['click', 'dblclick', 'mousedown', 'mouseup', 'mouseover', 'mouseout', 'mousemove', 'touchstart', 'touchmove', 'touchleave', 'touchend', 'touchcancel'].forEach(function (t) {
                w.Element.prototype[t] = function (e) {
                  return w.on(this.node, t, e), this;
                };
              }),
              (w.listeners = []),
              (w.handlerMap = []),
              (w.listenerId = 0),
              (w.on = function (t, e, i, a, s) {
                var n = i.bind(a || t.instance || t),
                  r = (w.handlerMap.indexOf(t) + 1 || w.handlerMap.push(t)) - 1,
                  o = e.split('.')[0],
                  l = e.split('.')[1] || '*';
                (w.listeners[r] = w.listeners[r] || {}), (w.listeners[r][o] = w.listeners[r][o] || {}), (w.listeners[r][o][l] = w.listeners[r][o][l] || {}), i._svgjsListenerId || (i._svgjsListenerId = ++w.listenerId), (w.listeners[r][o][l][i._svgjsListenerId] = n), t.addEventListener(o, n, s || !1);
              }),
              (w.off = function (t, e, i) {
                var a = w.handlerMap.indexOf(t),
                  s = e && e.split('.')[0],
                  n = e && e.split('.')[1],
                  r = '';
                if (-1 != a)
                  if (i) {
                    if (('function' == typeof i && (i = i._svgjsListenerId), !i)) return;
                    w.listeners[a][s] && w.listeners[a][s][n || '*'] && (t.removeEventListener(s, w.listeners[a][s][n || '*'][i], !1), delete w.listeners[a][s][n || '*'][i]);
                  } else if (n && s) {
                    if (w.listeners[a][s] && w.listeners[a][s][n]) {
                      for (i in w.listeners[a][s][n]) w.off(t, [s, n].join('.'), i);
                      delete w.listeners[a][s][n];
                    }
                  } else if (n) for (e in w.listeners[a]) for (r in w.listeners[a][e]) n === r && w.off(t, [e, n].join('.'));
                  else if (s) {
                    if (w.listeners[a][s]) {
                      for (r in w.listeners[a][s]) w.off(t, [s, r].join('.'));
                      delete w.listeners[a][s];
                    }
                  } else {
                    for (e in w.listeners[a]) w.off(t, e);
                    delete w.listeners[a], delete w.handlerMap[a];
                  }
              }),
              w.extend(w.Element, {
                on: function (t, e, i, a) {
                  return w.on(this.node, t, e, i, a), this;
                },
                off: function (t, e) {
                  return w.off(this.node, t, e), this;
                },
                fire: function (e, i) {
                  return e instanceof t.Event ? this.node.dispatchEvent(e) : this.node.dispatchEvent((e = new w.CustomEvent(e, { detail: i, cancelable: !0 }))), (this._event = e), this;
                },
                event: function () {
                  return this._event;
                },
              }),
              (w.Defs = w.invent({ create: 'defs', inherit: w.Container })),
              (w.G = w.invent({
                create: 'g',
                inherit: w.Container,
                extend: {
                  x: function (t) {
                    return null == t ? this.transform('x') : this.transform({ x: t - this.x() }, !0);
                  },
                  y: function (t) {
                    return null == t ? this.transform('y') : this.transform({ y: t - this.y() }, !0);
                  },
                  cx: function (t) {
                    return null == t ? this.gbox().cx : this.x(t - this.gbox().width / 2);
                  },
                  cy: function (t) {
                    return null == t ? this.gbox().cy : this.y(t - this.gbox().height / 2);
                  },
                  gbox: function () {
                    var t = this.bbox(),
                      e = this.transform();
                    return (t.x += e.x), (t.x2 += e.x), (t.cx += e.x), (t.y += e.y), (t.y2 += e.y), (t.cy += e.y), t;
                  },
                },
                construct: {
                  group: function () {
                    return this.put(new w.G());
                  },
                },
              })),
              (w.Doc = w.invent({
                create: function (t) {
                  t && ('svg' == (t = 'string' == typeof t ? e.getElementById(t) : t).nodeName ? this.constructor.call(this, t) : (this.constructor.call(this, w.create('svg')), t.appendChild(this.node), this.size('100%', '100%')), this.namespace().defs());
                },
                inherit: w.Container,
                extend: {
                  namespace: function () {
                    return this.attr({ xmlns: w.ns, version: '1.1' }).attr('xmlns:xlink', w.xlink, w.xmlns).attr('xmlns:svgjs', w.svgjs, w.xmlns);
                  },
                  defs: function () {
                    if (!this._defs) {
                      var t;
                      (t = this.node.getElementsByTagName('defs')[0]) ? (this._defs = w.adopt(t)) : (this._defs = new w.Defs()), this.node.appendChild(this._defs.node);
                    }
                    return this._defs;
                  },
                  parent: function () {
                    return this.node.parentNode && '#document' != this.node.parentNode.nodeName ? this.node.parentNode : null;
                  },
                  spof: function () {
                    var t = this.node.getScreenCTM();
                    return t && this.style('left', (-t.e % 1) + 'px').style('top', (-t.f % 1) + 'px'), this;
                  },
                  remove: function () {
                    return this.parent() && this.parent().removeChild(this.node), this;
                  },
                  clear: function () {
                    for (; this.node.hasChildNodes(); ) this.node.removeChild(this.node.lastChild);
                    return delete this._defs, w.parser.draw && !w.parser.draw.parentNode && this.node.appendChild(w.parser.draw), this;
                  },
                  clone: function (t) {
                    this.writeDataToDom();
                    var e = this.node,
                      i = b(e.cloneNode(!0));
                    return t ? (t.node || t).appendChild(i.node) : e.parentNode.insertBefore(i.node, e.nextSibling), i;
                  },
                },
              })),
              w.extend(w.Element, {
                siblings: function () {
                  return this.parent().children();
                },
                position: function () {
                  return this.parent().index(this);
                },
                next: function () {
                  return this.siblings()[this.position() + 1];
                },
                previous: function () {
                  return this.siblings()[this.position() - 1];
                },
                forward: function () {
                  var t = this.position() + 1,
                    e = this.parent();
                  return e.removeElement(this).add(this, t), e instanceof w.Doc && e.node.appendChild(e.defs().node), this;
                },
                backward: function () {
                  var t = this.position();
                  return (
                    t > 0 &&
                      this.parent()
                        .removeElement(this)
                        .add(this, t - 1),
                    this
                  );
                },
                front: function () {
                  var t = this.parent();
                  return t.node.appendChild(this.node), t instanceof w.Doc && t.node.appendChild(t.defs().node), this;
                },
                back: function () {
                  return this.position() > 0 && this.parent().removeElement(this).add(this, 0), this;
                },
                before: function (t) {
                  t.remove();
                  var e = this.position();
                  return this.parent().add(t, e), this;
                },
                after: function (t) {
                  t.remove();
                  var e = this.position();
                  return this.parent().add(t, e + 1), this;
                },
              }),
              (w.Mask = w.invent({
                create: function () {
                  this.constructor.call(this, w.create('mask')), (this.targets = []);
                },
                inherit: w.Container,
                extend: {
                  remove: function () {
                    for (var t = this.targets.length - 1; t >= 0; t--) this.targets[t] && this.targets[t].unmask();
                    return (this.targets = []), w.Element.prototype.remove.call(this), this;
                  },
                },
                construct: {
                  mask: function () {
                    return this.defs().put(new w.Mask());
                  },
                },
              })),
              w.extend(w.Element, {
                maskWith: function (t) {
                  return (this.masker = t instanceof w.Mask ? t : this.parent().mask().add(t)), this.masker.targets.push(this), this.attr('mask', 'url("#' + this.masker.attr('id') + '")');
                },
                unmask: function () {
                  return delete this.masker, this.attr('mask', null);
                },
              }),
              (w.ClipPath = w.invent({
                create: function () {
                  this.constructor.call(this, w.create('clipPath')), (this.targets = []);
                },
                inherit: w.Container,
                extend: {
                  remove: function () {
                    for (var t = this.targets.length - 1; t >= 0; t--) this.targets[t] && this.targets[t].unclip();
                    return (this.targets = []), this.parent().removeElement(this), this;
                  },
                },
                construct: {
                  clip: function () {
                    return this.defs().put(new w.ClipPath());
                  },
                },
              })),
              w.extend(w.Element, {
                clipWith: function (t) {
                  return (this.clipper = t instanceof w.ClipPath ? t : this.parent().clip().add(t)), this.clipper.targets.push(this), this.attr('clip-path', 'url("#' + this.clipper.attr('id') + '")');
                },
                unclip: function () {
                  return delete this.clipper, this.attr('clip-path', null);
                },
              }),
              (w.Gradient = w.invent({
                create: function (t) {
                  this.constructor.call(this, w.create(t + 'Gradient')), (this.type = t);
                },
                inherit: w.Container,
                extend: {
                  at: function (t, e, i) {
                    return this.put(new w.Stop()).update(t, e, i);
                  },
                  update: function (t) {
                    return this.clear(), 'function' == typeof t && t.call(this, this), this;
                  },
                  fill: function () {
                    return 'url(#' + this.id() + ')';
                  },
                  toString: function () {
                    return this.fill();
                  },
                  attr: function (t, e, i) {
                    return 'transform' == t && (t = 'gradientTransform'), w.Container.prototype.attr.call(this, t, e, i);
                  },
                },
                construct: {
                  gradient: function (t, e) {
                    return this.defs().gradient(t, e);
                  },
                },
              })),
              w.extend(w.Gradient, w.FX, {
                from: function (t, e) {
                  return 'radial' == (this._target || this).type ? this.attr({ fx: new w.Number(t), fy: new w.Number(e) }) : this.attr({ x1: new w.Number(t), y1: new w.Number(e) });
                },
                to: function (t, e) {
                  return 'radial' == (this._target || this).type ? this.attr({ cx: new w.Number(t), cy: new w.Number(e) }) : this.attr({ x2: new w.Number(t), y2: new w.Number(e) });
                },
              }),
              w.extend(w.Defs, {
                gradient: function (t, e) {
                  return this.put(new w.Gradient(t)).update(e);
                },
              }),
              (w.Stop = w.invent({
                create: 'stop',
                inherit: w.Element,
                extend: {
                  update: function (t) {
                    return ('number' == typeof t || t instanceof w.Number) && (t = { offset: arguments[0], color: arguments[1], opacity: arguments[2] }), null != t.opacity && this.attr('stop-opacity', t.opacity), null != t.color && this.attr('stop-color', t.color), null != t.offset && this.attr('offset', new w.Number(t.offset)), this;
                  },
                },
              })),
              (w.Pattern = w.invent({
                create: 'pattern',
                inherit: w.Container,
                extend: {
                  fill: function () {
                    return 'url(#' + this.id() + ')';
                  },
                  update: function (t) {
                    return this.clear(), 'function' == typeof t && t.call(this, this), this;
                  },
                  toString: function () {
                    return this.fill();
                  },
                  attr: function (t, e, i) {
                    return 'transform' == t && (t = 'patternTransform'), w.Container.prototype.attr.call(this, t, e, i);
                  },
                },
                construct: {
                  pattern: function (t, e, i) {
                    return this.defs().pattern(t, e, i);
                  },
                },
              })),
              w.extend(w.Defs, {
                pattern: function (t, e, i) {
                  return this.put(new w.Pattern()).update(i).attr({ x: 0, y: 0, width: t, height: e, patternUnits: 'userSpaceOnUse' });
                },
              }),
              (w.Shape = w.invent({
                create: function (t) {
                  this.constructor.call(this, t);
                },
                inherit: w.Element,
              })),
              (w.Bare = w.invent({
                create: function (t, e) {
                  if ((this.constructor.call(this, w.create(t)), e)) for (var i in e.prototype) 'function' == typeof e.prototype[i] && (this[i] = e.prototype[i]);
                },
                inherit: w.Element,
                extend: {
                  words: function (t) {
                    for (; this.node.hasChildNodes(); ) this.node.removeChild(this.node.lastChild);
                    return this.node.appendChild(e.createTextNode(t)), this;
                  },
                },
              })),
              w.extend(w.Parent, {
                element: function (t, e) {
                  return this.put(new w.Bare(t, e));
                },
              }),
              (w.Symbol = w.invent({
                create: 'symbol',
                inherit: w.Container,
                construct: {
                  symbol: function () {
                    return this.put(new w.Symbol());
                  },
                },
              })),
              (w.Use = w.invent({
                create: 'use',
                inherit: w.Shape,
                extend: {
                  element: function (t, e) {
                    return this.attr('href', (e || '') + '#' + t, w.xlink);
                  },
                },
                construct: {
                  use: function (t, e) {
                    return this.put(new w.Use()).element(t, e);
                  },
                },
              })),
              (w.Rect = w.invent({
                create: 'rect',
                inherit: w.Shape,
                construct: {
                  rect: function (t, e) {
                    return this.put(new w.Rect()).size(t, e);
                  },
                },
              })),
              (w.Circle = w.invent({
                create: 'circle',
                inherit: w.Shape,
                construct: {
                  circle: function (t) {
                    return this.put(new w.Circle()).rx(new w.Number(t).divide(2)).move(0, 0);
                  },
                },
              })),
              w.extend(w.Circle, w.FX, {
                rx: function (t) {
                  return this.attr('r', t);
                },
                ry: function (t) {
                  return this.rx(t);
                },
              }),
              (w.Ellipse = w.invent({
                create: 'ellipse',
                inherit: w.Shape,
                construct: {
                  ellipse: function (t, e) {
                    return this.put(new w.Ellipse()).size(t, e).move(0, 0);
                  },
                },
              })),
              w.extend(w.Ellipse, w.Rect, w.FX, {
                rx: function (t) {
                  return this.attr('rx', t);
                },
                ry: function (t) {
                  return this.attr('ry', t);
                },
              }),
              w.extend(w.Circle, w.Ellipse, {
                x: function (t) {
                  return null == t ? this.cx() - this.rx() : this.cx(t + this.rx());
                },
                y: function (t) {
                  return null == t ? this.cy() - this.ry() : this.cy(t + this.ry());
                },
                cx: function (t) {
                  return null == t ? this.attr('cx') : this.attr('cx', t);
                },
                cy: function (t) {
                  return null == t ? this.attr('cy') : this.attr('cy', t);
                },
                width: function (t) {
                  return null == t ? 2 * this.rx() : this.rx(new w.Number(t).divide(2));
                },
                height: function (t) {
                  return null == t ? 2 * this.ry() : this.ry(new w.Number(t).divide(2));
                },
                size: function (t, e) {
                  var i = d(this, t, e);
                  return this.rx(new w.Number(i.width).divide(2)).ry(new w.Number(i.height).divide(2));
                },
              }),
              (w.Line = w.invent({
                create: 'line',
                inherit: w.Shape,
                extend: {
                  array: function () {
                    return new w.PointArray([
                      [this.attr('x1'), this.attr('y1')],
                      [this.attr('x2'), this.attr('y2')],
                    ]);
                  },
                  plot: function (t, e, i, a) {
                    return null == t ? this.array() : ((t = void 0 !== e ? { x1: t, y1: e, x2: i, y2: a } : new w.PointArray(t).toLine()), this.attr(t));
                  },
                  move: function (t, e) {
                    return this.attr(this.array().move(t, e).toLine());
                  },
                  size: function (t, e) {
                    var i = d(this, t, e);
                    return this.attr(this.array().size(i.width, i.height).toLine());
                  },
                },
                construct: {
                  line: function (t, e, i, a) {
                    return w.Line.prototype.plot.apply(this.put(new w.Line()), null != t ? [t, e, i, a] : [0, 0, 0, 0]);
                  },
                },
              })),
              (w.Polyline = w.invent({
                create: 'polyline',
                inherit: w.Shape,
                construct: {
                  polyline: function (t) {
                    return this.put(new w.Polyline()).plot(t || new w.PointArray());
                  },
                },
              })),
              (w.Polygon = w.invent({
                create: 'polygon',
                inherit: w.Shape,
                construct: {
                  polygon: function (t) {
                    return this.put(new w.Polygon()).plot(t || new w.PointArray());
                  },
                },
              })),
              w.extend(w.Polyline, w.Polygon, {
                array: function () {
                  return this._array || (this._array = new w.PointArray(this.attr('points')));
                },
                plot: function (t) {
                  return null == t ? this.array() : this.clear().attr('points', 'string' == typeof t ? t : (this._array = new w.PointArray(t)));
                },
                clear: function () {
                  return delete this._array, this;
                },
                move: function (t, e) {
                  return this.attr('points', this.array().move(t, e));
                },
                size: function (t, e) {
                  var i = d(this, t, e);
                  return this.attr('points', this.array().size(i.width, i.height));
                },
              }),
              w.extend(w.Line, w.Polyline, w.Polygon, {
                morphArray: w.PointArray,
                x: function (t) {
                  return null == t ? this.bbox().x : this.move(t, this.bbox().y);
                },
                y: function (t) {
                  return null == t ? this.bbox().y : this.move(this.bbox().x, t);
                },
                width: function (t) {
                  var e = this.bbox();
                  return null == t ? e.width : this.size(t, e.height);
                },
                height: function (t) {
                  var e = this.bbox();
                  return null == t ? e.height : this.size(e.width, t);
                },
              }),
              (w.Path = w.invent({
                create: 'path',
                inherit: w.Shape,
                extend: {
                  morphArray: w.PathArray,
                  array: function () {
                    return this._array || (this._array = new w.PathArray(this.attr('d')));
                  },
                  plot: function (t) {
                    return null == t ? this.array() : this.clear().attr('d', 'string' == typeof t ? t : (this._array = new w.PathArray(t)));
                  },
                  clear: function () {
                    return delete this._array, this;
                  },
                  move: function (t, e) {
                    return this.attr('d', this.array().move(t, e));
                  },
                  x: function (t) {
                    return null == t ? this.bbox().x : this.move(t, this.bbox().y);
                  },
                  y: function (t) {
                    return null == t ? this.bbox().y : this.move(this.bbox().x, t);
                  },
                  size: function (t, e) {
                    var i = d(this, t, e);
                    return this.attr('d', this.array().size(i.width, i.height));
                  },
                  width: function (t) {
                    return null == t ? this.bbox().width : this.size(t, this.bbox().height);
                  },
                  height: function (t) {
                    return null == t ? this.bbox().height : this.size(this.bbox().width, t);
                  },
                },
                construct: {
                  path: function (t) {
                    return this.put(new w.Path()).plot(t || new w.PathArray());
                  },
                },
              })),
              (w.Image = w.invent({
                create: 'image',
                inherit: w.Shape,
                extend: {
                  load: function (e) {
                    if (!e) return this;
                    var i = this,
                      a = new t.Image();
                    return (
                      w.on(a, 'load', function () {
                        w.off(a);
                        var t = i.parent(w.Pattern);
                        null !== t && (0 == i.width() && 0 == i.height() && i.size(a.width, a.height), t && 0 == t.width() && 0 == t.height() && t.size(i.width(), i.height()), 'function' == typeof i._loaded && i._loaded.call(i, { width: a.width, height: a.height, ratio: a.width / a.height, url: e }));
                      }),
                      w.on(a, 'error', function (t) {
                        w.off(a), 'function' == typeof i._error && i._error.call(i, t);
                      }),
                      this.attr('href', (a.src = this.src = e), w.xlink)
                    );
                  },
                  loaded: function (t) {
                    return (this._loaded = t), this;
                  },
                  error: function (t) {
                    return (this._error = t), this;
                  },
                },
                construct: {
                  image: function (t, e, i) {
                    return this.put(new w.Image())
                      .load(t)
                      .size(e || 0, i || e || 0);
                  },
                },
              })),
              (w.Text = w.invent({
                create: function () {
                  this.constructor.call(this, w.create('text')), (this.dom.leading = new w.Number(1.3)), (this._rebuild = !0), (this._build = !1), this.attr('font-family', w.defaults.attrs['font-family']);
                },
                inherit: w.Shape,
                extend: {
                  x: function (t) {
                    return null == t ? this.attr('x') : this.attr('x', t);
                  },
                  y: function (t) {
                    var e = this.attr('y'),
                      i = 'number' == typeof e ? e - this.bbox().y : 0;
                    return null == t ? ('number' == typeof e ? e - i : e) : this.attr('y', 'number' == typeof t.valueOf() ? t + i : t);
                  },
                  cx: function (t) {
                    return null == t ? this.bbox().cx : this.x(t - this.bbox().width / 2);
                  },
                  cy: function (t) {
                    return null == t ? this.bbox().cy : this.y(t - this.bbox().height / 2);
                  },
                  text: function (t) {
                    if (void 0 === t) {
                      for (var t = '', e = this.node.childNodes, i = 0, a = e.length; i < a; ++i) 0 != i && 3 != e[i].nodeType && 1 == w.adopt(e[i]).dom.newLined && (t += '\n'), (t += e[i].textContent);
                      return t;
                    }
                    if ((this.clear().build(!0), 'function' == typeof t)) t.call(this, this);
                    else {
                      t = t.split('\n');
                      for (var i = 0, s = t.length; i < s; i++) this.tspan(t[i]).newLine();
                    }
                    return this.build(!1).rebuild();
                  },
                  size: function (t) {
                    return this.attr('font-size', t).rebuild();
                  },
                  leading: function (t) {
                    return null == t ? this.dom.leading : ((this.dom.leading = new w.Number(t)), this.rebuild());
                  },
                  lines: function () {
                    var t = ((this.textPath && this.textPath()) || this).node,
                      e = w.utils.map(w.utils.filterSVGElements(t.childNodes), function (t) {
                        return w.adopt(t);
                      });
                    return new w.Set(e);
                  },
                  rebuild: function (t) {
                    if (('boolean' == typeof t && (this._rebuild = t), this._rebuild)) {
                      var e = this,
                        i = 0,
                        a = this.dom.leading * new w.Number(this.attr('font-size'));
                      this.lines().each(function () {
                        this.dom.newLined && (e.textPath() || this.attr('x', e.attr('x')), '\n' == this.text() ? (i += a) : (this.attr('dy', a + i), (i = 0)));
                      }),
                        this.fire('rebuild');
                    }
                    return this;
                  },
                  build: function (t) {
                    return (this._build = !!t), this;
                  },
                  setData: function (t) {
                    return (this.dom = t), (this.dom.leading = new w.Number(t.leading || 1.3)), this;
                  },
                },
                construct: {
                  text: function (t) {
                    return this.put(new w.Text()).text(t);
                  },
                  plain: function (t) {
                    return this.put(new w.Text()).plain(t);
                  },
                },
              })),
              (w.Tspan = w.invent({
                create: 'tspan',
                inherit: w.Shape,
                extend: {
                  text: function (t) {
                    return null == t ? this.node.textContent + (this.dom.newLined ? '\n' : '') : ('function' == typeof t ? t.call(this, this) : this.plain(t), this);
                  },
                  dx: function (t) {
                    return this.attr('dx', t);
                  },
                  dy: function (t) {
                    return this.attr('dy', t);
                  },
                  newLine: function () {
                    var t = this.parent(w.Text);
                    return (this.dom.newLined = !0), this.dy(t.dom.leading * t.attr('font-size')).attr('x', t.x());
                  },
                },
              })),
              w.extend(w.Text, w.Tspan, {
                plain: function (t) {
                  return !1 === this._build && this.clear(), this.node.appendChild(e.createTextNode(t)), this;
                },
                tspan: function (t) {
                  var e = ((this.textPath && this.textPath()) || this).node,
                    i = new w.Tspan();
                  return !1 === this._build && this.clear(), e.appendChild(i.node), i.text(t);
                },
                clear: function () {
                  for (var t = ((this.textPath && this.textPath()) || this).node; t.hasChildNodes(); ) t.removeChild(t.lastChild);
                  return this;
                },
                length: function () {
                  return this.node.getComputedTextLength();
                },
              }),
              (w.TextPath = w.invent({
                create: 'textPath',
                inherit: w.Parent,
                parent: w.Text,
                construct: {
                  morphArray: w.PathArray,
                  path: function (t) {
                    for (var e = new w.TextPath(), i = this.doc().defs().path(t); this.node.hasChildNodes(); ) e.node.appendChild(this.node.firstChild);
                    return this.node.appendChild(e.node), e.attr('href', '#' + i, w.xlink), this;
                  },
                  array: function () {
                    var t = this.track();
                    return t ? t.array() : null;
                  },
                  plot: function (t) {
                    var e = this.track(),
                      i = null;
                    return e && (i = e.plot(t)), null == t ? i : this;
                  },
                  track: function () {
                    var t = this.textPath();
                    if (t) return t.reference('href');
                  },
                  textPath: function () {
                    if (this.node.firstChild && 'textPath' == this.node.firstChild.nodeName) return w.adopt(this.node.firstChild);
                  },
                },
              })),
              (w.Nested = w.invent({
                create: function () {
                  this.constructor.call(this, w.create('svg')), this.style('overflow', 'visible');
                },
                inherit: w.Container,
                construct: {
                  nested: function () {
                    return this.put(new w.Nested());
                  },
                },
              })),
              (w.A = w.invent({
                create: 'a',
                inherit: w.Container,
                extend: {
                  to: function (t) {
                    return this.attr('href', t, w.xlink);
                  },
                  show: function (t) {
                    return this.attr('show', t, w.xlink);
                  },
                  target: function (t) {
                    return this.attr('target', t);
                  },
                },
                construct: {
                  link: function (t) {
                    return this.put(new w.A()).to(t);
                  },
                },
              })),
              w.extend(w.Element, {
                linkTo: function (t) {
                  var e = new w.A();
                  return 'function' == typeof t ? t.call(e, e) : e.to(t), this.parent().put(e).put(this);
                },
              }),
              (w.Marker = w.invent({
                create: 'marker',
                inherit: w.Container,
                extend: {
                  width: function (t) {
                    return this.attr('markerWidth', t);
                  },
                  height: function (t) {
                    return this.attr('markerHeight', t);
                  },
                  ref: function (t, e) {
                    return this.attr('refX', t).attr('refY', e);
                  },
                  update: function (t) {
                    return this.clear(), 'function' == typeof t && t.call(this, this), this;
                  },
                  toString: function () {
                    return 'url(#' + this.id() + ')';
                  },
                },
                construct: {
                  marker: function (t, e, i) {
                    return this.defs().marker(t, e, i);
                  },
                },
              })),
              w.extend(w.Defs, {
                marker: function (t, e, i) {
                  return this.put(new w.Marker())
                    .size(t, e)
                    .ref(t / 2, e / 2)
                    .viewbox(0, 0, t, e)
                    .attr('orient', 'auto')
                    .update(i);
                },
              }),
              w.extend(w.Line, w.Polyline, w.Polygon, w.Path, {
                marker: function (t, e, i, a) {
                  var s = ['marker'];
                  return 'all' != t && s.push(t), (s = s.join('-')), (t = arguments[1] instanceof w.Marker ? arguments[1] : this.doc().marker(e, i, a)), this.attr(s, t);
                },
              });
            var M = {
              stroke: ['color', 'width', 'opacity', 'linecap', 'linejoin', 'miterlimit', 'dasharray', 'dashoffset'],
              fill: ['color', 'opacity', 'rule'],
              prefix: function (t, e) {
                return 'color' == e ? t : t + '-' + e;
              },
            };
            ['fill', 'stroke'].forEach(function (t) {
              var e,
                i = {};
              (i[t] = function (i) {
                if (void 0 === i) return this;
                if ('string' == typeof i || w.Color.isRgb(i) || (i && 'function' == typeof i.fill)) this.attr(t, i);
                else for (e = M[t].length - 1; e >= 0; e--) null != i[M[t][e]] && this.attr(M.prefix(t, M[t][e]), i[M[t][e]]);
                return this;
              }),
                w.extend(w.Element, w.FX, i);
            }),
              w.extend(w.Element, w.FX, {
                rotate: function (t, e, i) {
                  return this.transform({ rotation: t, cx: e, cy: i });
                },
                skew: function (t, e, i, a) {
                  return 1 == arguments.length || 3 == arguments.length ? this.transform({ skew: t, cx: e, cy: i }) : this.transform({ skewX: t, skewY: e, cx: i, cy: a });
                },
                scale: function (t, e, i, a) {
                  return 1 == arguments.length || 3 == arguments.length ? this.transform({ scale: t, cx: e, cy: i }) : this.transform({ scaleX: t, scaleY: e, cx: i, cy: a });
                },
                translate: function (t, e) {
                  return this.transform({ x: t, y: e });
                },
                flip: function (t, e) {
                  return (e = 'number' == typeof t ? t : e), this.transform({ flip: t || 'both', offset: e });
                },
                matrix: function (t) {
                  return this.attr('transform', new w.Matrix(6 == arguments.length ? [].slice.call(arguments) : t));
                },
                opacity: function (t) {
                  return this.attr('opacity', t);
                },
                dx: function (t) {
                  return this.x(new w.Number(t).plus(this instanceof w.FX ? 0 : this.x()), !0);
                },
                dy: function (t) {
                  return this.y(new w.Number(t).plus(this instanceof w.FX ? 0 : this.y()), !0);
                },
                dmove: function (t, e) {
                  return this.dx(t).dy(e);
                },
              }),
              w.extend(w.Rect, w.Ellipse, w.Circle, w.Gradient, w.FX, {
                radius: function (t, e) {
                  var i = (this._target || this).type;
                  return 'radial' == i || 'circle' == i ? this.attr('r', new w.Number(t)) : this.rx(t).ry(null == e ? t : e);
                },
              }),
              w.extend(w.Path, {
                length: function () {
                  return this.node.getTotalLength();
                },
                pointAt: function (t) {
                  return this.node.getPointAtLength(t);
                },
              }),
              w.extend(w.Parent, w.Text, w.Tspan, w.FX, {
                font: function (t, e) {
                  if ('object' === (void 0 === t ? 'undefined' : s(t))) for (e in t) this.font(e, t[e]);
                  return 'leading' == t ? this.leading(e) : 'anchor' == t ? this.attr('text-anchor', e) : 'size' == t || 'family' == t || 'weight' == t || 'stretch' == t || 'variant' == t || 'style' == t ? this.attr('font-' + t, e) : this.attr(t, e);
                },
              }),
              (w.Set = w.invent({
                create: function (t) {
                  Array.isArray(t) ? (this.members = t) : this.clear();
                },
                extend: {
                  add: function () {
                    var t,
                      e,
                      i = [].slice.call(arguments);
                    for (t = 0, e = i.length; t < e; t++) this.members.push(i[t]);
                    return this;
                  },
                  remove: function (t) {
                    var e = this.index(t);
                    return e > -1 && this.members.splice(e, 1), this;
                  },
                  each: function (t) {
                    for (var e = 0, i = this.members.length; e < i; e++) t.apply(this.members[e], [e, this.members]);
                    return this;
                  },
                  clear: function () {
                    return (this.members = []), this;
                  },
                  length: function () {
                    return this.members.length;
                  },
                  has: function (t) {
                    return this.index(t) >= 0;
                  },
                  index: function (t) {
                    return this.members.indexOf(t);
                  },
                  get: function (t) {
                    return this.members[t];
                  },
                  first: function () {
                    return this.get(0);
                  },
                  last: function () {
                    return this.get(this.members.length - 1);
                  },
                  valueOf: function () {
                    return this.members;
                  },
                  bbox: function () {
                    if (0 == this.members.length) return new w.RBox();
                    var t = this.members[0].rbox(this.members[0].doc());
                    return (
                      this.each(function () {
                        t = t.merge(this.rbox(this.doc()));
                      }),
                      t
                    );
                  },
                },
                construct: {
                  set: function (t) {
                    return new w.Set(t);
                  },
                },
              })),
              (w.FX.Set = w.invent({
                create: function (t) {
                  this.set = t;
                },
              })),
              (w.Set.inherit = function () {
                var t = [];
                for (var e in w.Shape.prototype) 'function' == typeof w.Shape.prototype[e] && 'function' != typeof w.Set.prototype[e] && t.push(e);
                t.forEach(function (t) {
                  w.Set.prototype[t] = function () {
                    for (var e = 0, i = this.members.length; e < i; e++) this.members[e] && 'function' == typeof this.members[e][t] && this.members[e][t].apply(this.members[e], arguments);
                    return 'animate' == t ? this.fx || (this.fx = new w.FX.Set(this)) : this;
                  };
                }),
                  (t = []);
                for (var e in w.FX.prototype) 'function' == typeof w.FX.prototype[e] && 'function' != typeof w.FX.Set.prototype[e] && t.push(e);
                t.forEach(function (t) {
                  w.FX.Set.prototype[t] = function () {
                    for (var e = 0, i = this.set.members.length; e < i; e++) this.set.members[e].fx[t].apply(this.set.members[e].fx, arguments);
                    return this;
                  };
                });
              }),
              w.extend(w.Element, {
                data: function (t, e, i) {
                  if ('object' === (void 0 === t ? 'undefined' : s(t))) for (e in t) this.data(e, t[e]);
                  else if (arguments.length < 2)
                    try {
                      return JSON.parse(this.attr('data-' + t));
                    } catch (e) {
                      return this.attr('data-' + t);
                    }
                  else this.attr('data-' + t, null === e ? null : !0 === i || 'string' == typeof e || 'number' == typeof e ? e : JSON.stringify(e));
                  return this;
                },
              }),
              w.extend(w.Element, {
                remember: function (t, e) {
                  if ('object' === s(arguments[0])) for (var e in t) this.remember(e, t[e]);
                  else {
                    if (1 == arguments.length) return this.memory()[t];
                    this.memory()[t] = e;
                  }
                  return this;
                },
                forget: function () {
                  if (0 == arguments.length) this._memory = {};
                  else for (var t = arguments.length - 1; t >= 0; t--) delete this.memory()[arguments[t]];
                  return this;
                },
                memory: function () {
                  return this._memory || (this._memory = {});
                },
              }),
              (w.get = function (t) {
                var i = e.getElementById(m(t) || t);
                return w.adopt(i);
              }),
              (w.select = function (t, i) {
                return new w.Set(
                  w.utils.map((i || e).querySelectorAll(t), function (t) {
                    return w.adopt(t);
                  })
                );
              }),
              w.extend(w.Parent, {
                select: function (t) {
                  return w.select(t, this.node);
                },
              });
            var P = 'abcdef'.split('');
            if ('function' != typeof t.CustomEvent) {
              var L = function (t, i) {
                i = i || { bubbles: !1, cancelable: !1, detail: void 0 };
                var a = e.createEvent('CustomEvent');
                return a.initCustomEvent(t, i.bubbles, i.cancelable, i.detail), a;
              };
              (L.prototype = t.Event.prototype), (w.CustomEvent = L);
            } else w.CustomEvent = t.CustomEvent;
            return (
              (function (e) {
                for (var i = 0, a = ['moz', 'webkit'], s = 0; s < a.length && !t.requestAnimationFrame; ++s) (e.requestAnimationFrame = e[a[s] + 'RequestAnimationFrame']), (e.cancelAnimationFrame = e[a[s] + 'CancelAnimationFrame'] || e[a[s] + 'CancelRequestAnimationFrame']);
                (e.requestAnimationFrame =
                  e.requestAnimationFrame ||
                  function (t) {
                    var a = new Date().getTime(),
                      s = Math.max(0, 16 - (a - i)),
                      n = e.setTimeout(function () {
                        t(a + s);
                      }, s);
                    return (i = a + s), n;
                  }),
                  (e.cancelAnimationFrame = e.cancelAnimationFrame || e.clearTimeout);
              })(t),
              w
            );
          });
        },
        function (t, e, i) {
          (t.exports = i(28)(!1)).push([t.i, '.apexcharts-canvas {\n  position: relative;\n  user-select: none;\n  /* cannot give overflow: hidden as it will crop tooltips which overflow outside chart area */\n}\n\n.apexcharts-inner {\n  position: relative;\n}\n\n.legend-mouseover-inactive {\n  transition: 0.15s ease all;\n  opacity: 0.20;\n}\n\n.apexcharts-series-collapsed {\n  opacity: 0;\n}\n\n.apexcharts-gridline, .apexcharts-text {\n  pointer-events: none;\n}\n\n.apexcharts-tooltip {\n  border-radius: 5px;\n  box-shadow: 2px 2px 6px -4px #999;\n  cursor: default;\n  font-size: 14px;\n  left: 62px;\n  opacity: 0;\n  pointer-events: none;\n  position: absolute;\n  top: 20px;\n  overflow: hidden;\n  white-space: nowrap;\n  z-index: 12;\n  transition: 0.15s ease all;\n}\n.apexcharts-tooltip.light {\n  border: 1px solid #e3e3e3;\n  background: rgba(255, 255, 255, 0.96);\n}\n.apexcharts-tooltip.dark {\n  color: #fff;\n  background: rgba(30,30,30, 0.8);\n}\n\n.apexcharts-tooltip .apexcharts-marker,\n.apexcharts-area-series .apexcharts-area,\n.apexcharts-line {\n  pointer-events: none;\n}\n\n.apexcharts-tooltip.active {\n  opacity: 1;\n  transition: 0.15s ease all;\n}\n\n.apexcharts-tooltip-title {\n  padding: 6px;\n  font-size: 15px;\n  margin-bottom: 4px;\n}\n.apexcharts-tooltip.light .apexcharts-tooltip-title {\n  background: #ECEFF1;\n  border-bottom: 1px solid #ddd;\n}\n.apexcharts-tooltip.dark .apexcharts-tooltip-title {\n  background: rgba(0, 0, 0, 0.7);\n  border-bottom: 1px solid #222;\n}\n\n.apexcharts-tooltip-text-value,\n.apexcharts-tooltip-text-z-value {\n  display: inline-block;\n  font-weight: 600;\n  margin-left: 5px;\n}\n\n.apexcharts-tooltip-text-z-label:empty,\n.apexcharts-tooltip-text-z-value:empty {\n  display: none;\n}\n\n.apexcharts-tooltip-text-value, \n.apexcharts-tooltip-text-z-value {\n  font-weight: 600;\n}\n\n.apexcharts-tooltip-marker {\n  width: 12px;\n  height: 12px;\n  position: relative;\n  top: 1px;\n  margin-right: 10px;\n  border-radius: 50%;\n}\n\n.apexcharts-tooltip-series-group {\n  padding: 0 10px;\n  display: none;\n  text-align: left;\n  justify-content: left;\n  align-items: center;\n}\n\n.apexcharts-tooltip-series-group.active .apexcharts-tooltip-marker {\n  opacity: 1;\n}\n.apexcharts-tooltip-series-group.active, .apexcharts-tooltip-series-group:last-child {\n  padding-bottom: 4px;\n}\n.apexcharts-tooltip-y-group {\n  padding: 6px 0 5px;\n}\n.apexcharts-tooltip-candlestick {\n  padding: 4px 8px;\n}\n.apexcharts-tooltip-candlestick > div {\n  margin: 4px 0;\n}\n.apexcharts-tooltip-candlestick span.value {\n  font-weight: bold;\n}\n\n.apexcharts-xaxistooltip {\n  opacity: 0;\n  padding: 9px 10px;\n  pointer-events: none;\n  color: #373d3f;\n  font-size: 13px;\n  text-align: center;\n  border-radius: 2px;\n  position: absolute;\n  z-index: 10;\n\tbackground: #ECEFF1;\n  border: 1px solid #90A4AE;\n  transition: 0.15s ease all;\n}\n\n.apexcharts-xaxistooltip:after, .apexcharts-xaxistooltip:before {\n\tleft: 50%;\n\tborder: solid transparent;\n\tcontent: " ";\n\theight: 0;\n\twidth: 0;\n\tposition: absolute;\n\tpointer-events: none;\n}\n\n.apexcharts-xaxistooltip:after {\n\tborder-color: rgba(236, 239, 241, 0);\n\tborder-width: 6px;\n\tmargin-left: -6px;\n}\n.apexcharts-xaxistooltip:before {\n\tborder-color: rgba(144, 164, 174, 0);\n\tborder-width: 7px;\n\tmargin-left: -7px;\n}\n\n.apexcharts-xaxistooltip-bottom:after, .apexcharts-xaxistooltip-bottom:before {\n  bottom: 100%;\n}\n\n.apexcharts-xaxistooltip-bottom:after {\n  border-bottom-color: #ECEFF1;\n}\n.apexcharts-xaxistooltip-bottom:before {\n  border-bottom-color: #90A4AE;\n}\n\n.apexcharts-xaxistooltip-top:after, .apexcharts-xaxistooltip-top:before {\n  top: 100%;\n}\n.apexcharts-xaxistooltip-top:after {\n  border-top-color: #ECEFF1;\n}\n.apexcharts-xaxistooltip-top:before {\n  border-top-color: #90A4AE;\n}\n\n.apexcharts-xaxistooltip.active {\n  opacity: 1;\n  transition: 0.15s ease all;\n}\n\n.apexcharts-yaxistooltip {\n  opacity: 0;\n  padding: 4px 10px;\n  pointer-events: none;\n  color: #373d3f;\n  font-size: 13px;\n  text-align: center;\n  border-radius: 2px;\n  position: absolute;\n  z-index: 10;\n\tbackground: #ECEFF1;\n  border: 1px solid #90A4AE;\n}\n\n.apexcharts-yaxistooltip:after, .apexcharts-yaxistooltip:before {\n\ttop: 50%;\n\tborder: solid transparent;\n\tcontent: " ";\n\theight: 0;\n\twidth: 0;\n\tposition: absolute;\n\tpointer-events: none;\n}\n.apexcharts-yaxistooltip:after {\n\tborder-color: rgba(236, 239, 241, 0);\n\tborder-width: 6px;\n\tmargin-top: -6px;\n}\n.apexcharts-yaxistooltip:before {\n\tborder-color: rgba(144, 164, 174, 0);\n\tborder-width: 7px;\n\tmargin-top: -7px;\n}\n\n.apexcharts-yaxistooltip-left:after, .apexcharts-yaxistooltip-left:before {\n  left: 100%;\n}\n.apexcharts-yaxistooltip-left:after {\n  border-left-color: #ECEFF1;\n}\n.apexcharts-yaxistooltip-left:before {\n  border-left-color: #90A4AE;\n}\n\n.apexcharts-yaxistooltip-right:after, .apexcharts-yaxistooltip-right:before {\n  right: 100%;\n}\n.apexcharts-yaxistooltip-right:after {\n  border-right-color: #ECEFF1;\n}\n.apexcharts-yaxistooltip-right:before {\n  border-right-color: #90A4AE;\n}\n\n.apexcharts-yaxistooltip.active {\n  opacity: 1;\n}\n\n.apexcharts-xcrosshairs, .apexcharts-ycrosshairs {\n  pointer-events: none;\n  opacity: 0;\n  transition: 0.15s ease all;\n}\n\n.apexcharts-xcrosshairs.active, .apexcharts-ycrosshairs.active {\n  opacity: 1;\n  transition: 0.15s ease all;\n}\n\n.apexcharts-ycrosshairs-hidden {\n  opacity: 0;\n}\n\n.apexcharts-zoom-rect {\n  pointer-events: none;\n}\n.apexcharts-selection-rect {\n  cursor: move;\n}\n\n.svg_select_points, .svg_select_points_rot {\n  opacity: 0;\n  visibility: hidden;\n}\n.svg_select_points_l, .svg_select_points_r {\n  cursor: ew-resize;\n  opacity: 1;\n  visibility: visible;\n  fill: #888;\n}\n.apexcharts-canvas.zoomable .hovering-zoom {\n  cursor: crosshair\n}\n.apexcharts-canvas.zoomable .hovering-pan {\n  cursor: move\n}\n\n.apexcharts-xaxis,\n.apexcharts-yaxis {\n  pointer-events: none;\n}\n\n.apexcharts-zoom-icon, \n.apexcharts-zoom-in-icon,\n.apexcharts-zoom-out-icon,\n.apexcharts-reset-zoom-icon, \n.apexcharts-pan-icon, \n.apexcharts-selection-icon,\n.apexcharts-menu-icon {\n  cursor: pointer;\n  width: 20px;\n  height: 20px;\n  text-align: center;\n}\n\n\n.apexcharts-zoom-icon svg, \n.apexcharts-zoom-in-icon svg,\n.apexcharts-zoom-out-icon svg,\n.apexcharts-reset-zoom-icon svg,\n.apexcharts-menu-icon svg {\n  fill: #6E8192;\n}\n.apexcharts-selection-icon svg {\n  fill: #444;\n  transform: scale(0.86)\n}\n.apexcharts-zoom-icon.selected svg, \n.apexcharts-selection-icon.selected svg, \n.apexcharts-reset-zoom-icon.selected svg {\n  fill: #008FFB;\n}\n.apexcharts-selection-icon:not(.selected):hover svg,\n.apexcharts-zoom-icon:not(.selected):hover svg, \n.apexcharts-zoom-in-icon:hover svg, \n.apexcharts-zoom-out-icon:hover svg, \n.apexcharts-reset-zoom-icon:hover svg, \n.apexcharts-menu-icon:hover svg {\n  fill: #333;\n}\n\n.apexcharts-selection-icon, .apexcharts-menu-icon {\n  margin-right: 3px;\n  margin-left: 5px;\n  position: relative;\n  top: 1px;\n}\n.apexcharts-reset-zoom-icon {\n  margin-left: 7px;\n}\n.apexcharts-zoom-icon {\n  transform: scale(1);\n}\n\n.apexcharts-zoom-in-icon, .apexcharts-zoom-out-icon {\n  transform: scale(0.8)\n}\n\n.apexcharts-zoom-out-icon {\n  margin-right: 3px;\n}\n\n.apexcharts-pan-icon {\n  transform: scale(0.72);\n  position: relative;\n  left: 1px;\n  top: 0px;\n}\n.apexcharts-pan-icon svg {\n  fill: #fff;\n  stroke: #6E8192;\n  stroke-width: 2;\n}\n.apexcharts-pan-icon.selected svg {\n  stroke: #008FFB;\n}\n.apexcharts-pan-icon:not(.selected):hover svg {\n  stroke: #333;\n}\n\n.apexcharts-toolbar {\n  position: absolute;\n  z-index: 11;\n  top: 0px;\n  right: 3px;\n  max-width: 176px;\n  text-align: right;\n  border-radius: 3px;\n  padding: 5px 6px 2px 6px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center; \n}\n\n.apexcharts-toolbar svg {\n  pointer-events: none;\n}\n\n.apexcharts-menu {\n  background: #fff;\n  position: absolute;\n  top: 100%;\n  border: 1px solid #ddd;\n  border-radius: 3px;\n  padding: 3px;\n  right: 10px;\n  opacity: 0;\n  min-width: 110px;\n  transition: 0.15s ease all;\n  pointer-events: none;\n}\n\n.apexcharts-menu.open {\n  opacity: 1;\n  pointer-events: all;\n  transition: 0.15s ease all;\n}\n\n.apexcharts-menu-item {\n  padding: 6px 7px;\n  font-size: 12px;\n  cursor: pointer;\n}\n.apexcharts-menu-item:hover {\n  background: #eee;\n}\n\n@media screen and (min-width: 768px) {\n  .apexcharts-toolbar {\n    /*opacity: 0;*/\n  }\n\n  .apexcharts-canvas:hover .apexcharts-toolbar {\n    opacity: 1;\n  } \n}\n\n.apexcharts-datalabel.hidden {\n  opacity: 0;\n}\n\n.apexcharts-pie-label,\n.apexcharts-datalabel, .apexcharts-datalabel-label, .apexcharts-datalabel-value {\n  cursor: default;\n  pointer-events: none;\n}\n\n.apexcharts-pie-label-delay {\n  opacity: 0;\n  animation-name: opaque;\n  animation-duration: 0.3s;\n  animation-fill-mode: forwards;\n  animation-timing-function: ease;\n}\n\n.apexcharts-canvas .hidden {\n  opacity: 0;\n}\n\n.apexcharts-hide .apexcharts-series-points {\n  opacity: 0;\n}\n\n.apexcharts-area-series .apexcharts-series-markers .apexcharts-marker.no-pointer-events,\n.apexcharts-line-series .apexcharts-series-markers .apexcharts-marker.no-pointer-events {\n  pointer-events: none;\n}\n\n\n/* markers */\n\n.apexcharts-marker {\n  transition: 0.15s ease all;\n}\n\n@keyframes opaque {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}', '']);
        },
        function (t, e, i) {
          var a = i(58);
          'string' == typeof a && (a = [[t.i, a, '']]);
          var s = { hmr: !0 };
          (s.transform = void 0), (s.insertInto = void 0);
          i(60)(a, s);
          a.locals && (t.exports = a.locals);
        },
        function (t, e, i) {
          function a(t, e) {
            for (var i = 0; i < t.length; i++) {
              var a = t[i],
                s = g[a.id];
              if (s) {
                s.refs++;
                for (r = 0; r < s.parts.length; r++) s.parts[r](a.parts[r]);
                for (; r < a.parts.length; r++) s.parts.push(c(a.parts[r], e));
              } else {
                for (var n = [], r = 0; r < a.parts.length; r++) n.push(c(a.parts[r], e));
                g[a.id] = { id: a.id, refs: 1, parts: n };
              }
            }
          }
          function s(t, e) {
            for (var i = [], a = {}, s = 0; s < t.length; s++) {
              var n = t[s],
                r = e.base ? n[0] + e.base : n[0],
                o = { css: n[1], media: n[2], sourceMap: n[3] };
              a[r] ? a[r].parts.push(o) : i.push((a[r] = { id: r, parts: [o] }));
            }
            return i;
          }
          function n(t, e) {
            var i = b(t.insertInto);
            if (!i) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
            var a = y[y.length - 1];
            if ('top' === t.insertAt) a ? (a.nextSibling ? i.insertBefore(e, a.nextSibling) : i.appendChild(e)) : i.insertBefore(e, i.firstChild), y.push(e);
            else if ('bottom' === t.insertAt) i.appendChild(e);
            else {
              if ('object' != typeof t.insertAt || !t.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
              var s = b(t.insertInto + ' ' + t.insertAt.before);
              i.insertBefore(e, s);
            }
          }
          function r(t) {
            if (null === t.parentNode) return !1;
            t.parentNode.removeChild(t);
            var e = y.indexOf(t);
            e >= 0 && y.splice(e, 1);
          }
          function o(t) {
            var e = document.createElement('style');
            return (t.attrs.type = 'text/css'), h(e, t.attrs), n(t, e), e;
          }
          function l(t) {
            var e = document.createElement('link');
            return (t.attrs.type = 'text/css'), (t.attrs.rel = 'stylesheet'), h(e, t.attrs), n(t, e), e;
          }
          function h(t, e) {
            Object.keys(e).forEach(function (i) {
              t.setAttribute(i, e[i]);
            });
          }
          function c(t, e) {
            var i, a, s, n;
            if (e.transform && t.css) {
              if (!(n = e.transform(t.css))) return function () {};
              t.css = n;
            }
            if (e.singleton) {
              var h = m++;
              (i = v || (v = o(e))), (a = d.bind(null, i, h, !1)), (s = d.bind(null, i, h, !0));
            } else
              t.sourceMap && 'function' == typeof URL && 'function' == typeof URL.createObjectURL && 'function' == typeof URL.revokeObjectURL && 'function' == typeof Blob && 'function' == typeof btoa
                ? ((i = l(e)),
                  (a = f.bind(null, i, e)),
                  (s = function () {
                    r(i), i.href && URL.revokeObjectURL(i.href);
                  }))
                : ((i = o(e)),
                  (a = u.bind(null, i)),
                  (s = function () {
                    r(i);
                  }));
            return (
              a(t),
              function (e) {
                if (e) {
                  if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
                  a((t = e));
                } else s();
              }
            );
          }
          function d(t, e, i, a) {
            var s = i ? '' : a.css;
            if (t.styleSheet) t.styleSheet.cssText = k(e, s);
            else {
              var n = document.createTextNode(s),
                r = t.childNodes;
              r[e] && t.removeChild(r[e]), r.length ? t.insertBefore(n, r[e]) : t.appendChild(n);
            }
          }
          function u(t, e) {
            var i = e.css,
              a = e.media;
            if ((a && t.setAttribute('media', a), t.styleSheet)) t.styleSheet.cssText = i;
            else {
              for (; t.firstChild; ) t.removeChild(t.firstChild);
              t.appendChild(document.createTextNode(i));
            }
          }
          function f(t, e, i) {
            var a = i.css,
              s = i.sourceMap,
              n = void 0 === e.convertToAbsoluteUrls && s;
            (e.convertToAbsoluteUrls || n) && (a = w(a)), s && (a += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(s)))) + ' */');
            var r = new Blob([a], { type: 'text/css' }),
              o = t.href;
            (t.href = URL.createObjectURL(r)), o && URL.revokeObjectURL(o);
          }
          var g = {},
            p = (function (t) {
              var e;
              return function () {
                return void 0 === e && (e = t.apply(this, arguments)), e;
              };
            })(function () {
              return window && document && document.all && !window.atob;
            }),
            x = function (t) {
              return document.querySelector(t);
            },
            b = (function (t) {
              var e = {};
              return function (t) {
                if ('function' == typeof t) return t();
                if (void 0 === e[t]) {
                  var i = x.call(this, t);
                  if (window.HTMLIFrameElement && i instanceof window.HTMLIFrameElement)
                    try {
                      i = i.contentDocument.head;
                    } catch (t) {
                      i = null;
                    }
                  e[t] = i;
                }
                return e[t];
              };
            })(),
            v = null,
            m = 0,
            y = [],
            w = i(51);
          t.exports = function (t, e) {
            if ('undefined' != typeof DEBUG && DEBUG && 'object' != typeof document) throw new Error('The style-loader cannot be used in a non-browser environment');
            ((e = e || {}).attrs = 'object' == typeof e.attrs ? e.attrs : {}), e.singleton || 'boolean' == typeof e.singleton || (e.singleton = p()), e.insertInto || (e.insertInto = 'head'), e.insertAt || (e.insertAt = 'bottom');
            var i = s(t, e);
            return (
              a(i, e),
              function (t) {
                for (var n = [], r = 0; r < i.length; r++) {
                  var o = i[r];
                  (l = g[o.id]).refs--, n.push(l);
                }
                t && a(s(t, e), e);
                for (r = 0; r < n.length; r++) {
                  var l = n[r];
                  if (0 === l.refs) {
                    for (var h = 0; h < l.parts.length; h++) l.parts[h]();
                    delete g[l.id];
                  }
                }
              }
            );
          };
          var k = (function () {
            var t = [];
            return function (e, i) {
              return (t[e] = i), t.filter(Boolean).join('\n');
            };
          })();
        },
        function (t, e) {
          t.exports = '<svg fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path><path d="M0 0h24v24H0z" fill="none"></path></svg>';
        },
        function (t, e) {
          t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></svg>';
        },
        function (t, e) {
          t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"></path><path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></svg>';
        },
        function (t, e) {
          t.exports = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" viewBox="0 0 24 24"><defs><path d="M0 0h24v24H0z" id="a"></path></defs><clipPath id="b"><use overflow="visible" xlink:href="#a"></use></clipPath><path clip-path="url(#b)" d="M23 5.5V20c0 2.2-1.8 4-4 4h-7.3c-1.08 0-2.1-.43-2.85-1.19L1 14.83s1.26-1.23 1.3-1.25c.22-.19.49-.29.79-.29.22 0 .42.06.6.16.04.01 4.31 2.46 4.31 2.46V4c0-.83.67-1.5 1.5-1.5S11 3.17 11 4v7h1V1.5c0-.83.67-1.5 1.5-1.5S15 .67 15 1.5V11h1V2.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V11h1V5.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5z"></path></svg>';
        },
        function (t, e) {
          t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"></path><path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></svg>';
        },
        function (t, e) {
          t.exports = '<svg fill="#6E8192" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M3 5h2V3c-1.1 0-2 .9-2 2zm0 8h2v-2H3v2zm4 8h2v-2H7v2zM3 9h2V7H3v2zm10-6h-2v2h2V3zm6 0v2h2c0-1.1-.9-2-2-2zM5 21v-2H3c0 1.1.9 2 2 2zm-2-4h2v-2H3v2zM9 3H7v2h2V3zm2 18h2v-2h-2v2zm8-8h2v-2h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zm0-12h2V7h-2v2zm0 8h2v-2h-2v2zm-4 4h2v-2h-2v2zm0-16h2V3h-2v2z"></path></svg>';
        },
        function (t, e) {
          t.exports = '<svg xmlns="http://www.w3.org/2000/svg" fill="#000000" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"></path></svg>';
        },
        function (t, e, i) {
          t.exports = i(27);
        },
      ]);
    });
  }),
  apexcharts$1 = unwrapExports(apexcharts);
export default apexcharts$1;