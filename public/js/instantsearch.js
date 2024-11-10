/*! InstantSearch.js 4.3.1 | © Algolia, Inc. and contributors; MIT License | https://github.com/algolia/instantsearch.js */
!(function (e, t) {
    'object' == typeof exports && 'undefined' != typeof module
        ? (module.exports = t())
        : 'function' == typeof define && define.amd
        ? define(t)
        : ((e = e || self).instantsearch = t())
})(this, function () {
    'use strict'
    function l(e) {
        return (l =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (e) {
                      return typeof e
                  }
                : function (e) {
                      return e &&
                          'function' == typeof Symbol &&
                          e.constructor === Symbol &&
                          e !== Symbol.prototype
                          ? 'symbol'
                          : typeof e
                  })(e)
    }
    function T(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
    }
    function r(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n]
            ;(r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
        }
    }
    function k(e, t, n) {
        return t && r(e.prototype, t), n && r(e, n), e
    }
    function C(e, t, n) {
        return (
            t in e
                ? Object.defineProperty(e, t, {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (e[t] = n),
            e
        )
    }
    function f() {
        return (f =
            Object.assign ||
            function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t]
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
    }
    function i(t, e) {
        var n = Object.keys(t)
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t)
            e &&
                (r = r.filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                })),
                n.push.apply(n, r)
        }
        return n
    }
    function D(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {}
            e % 2
                ? i(Object(n), !0).forEach(function (e) {
                      C(t, e, n[e])
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                : i(Object(n)).forEach(function (e) {
                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                  })
        }
        return t
    }
    function j(e, t) {
        if ('function' != typeof t && null !== t)
            throw new TypeError('Super expression must either be null or a function')
        ;(e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 }
        })),
            t && a(e, t)
    }
    function E(e) {
        return (E = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e)
              })(e)
    }
    function a(e, t) {
        return (a =
            Object.setPrototypeOf ||
            function (e, t) {
                return (e.__proto__ = t), e
            })(e, t)
    }
    function s(e, t, n) {
        return (s = (function () {
            if ('undefined' == typeof Reflect || !Reflect.construct) return !1
            if (Reflect.construct.sham) return !1
            if ('function' == typeof Proxy) return !0
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0
            } catch (e) {
                return !1
            }
        })()
            ? Reflect.construct
            : function (e, t, n) {
                  var r = [null]
                  r.push.apply(r, t)
                  var i = new (Function.bind.apply(e, r))()
                  return n && a(i, n.prototype), i
              }).apply(null, arguments)
    }
    function O(e, t) {
        if (null == e) return {}
        var n,
            r,
            i = (function (e, t) {
                if (null == e) return {}
                var n,
                    r,
                    i = {},
                    a = Object.keys(e)
                for (r = 0; r < a.length; r++) (n = a[r]), 0 <= t.indexOf(n) || (i[n] = e[n])
                return i
            })(e, t)
        if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e)
            for (r = 0; r < a.length; r++)
                (n = a[r]),
                    0 <= t.indexOf(n) ||
                        (Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]))
        }
        return i
    }
    function y(e) {
        if (void 0 === e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        return e
    }
    function A(e, t) {
        return !t || ('object' != typeof t && 'function' != typeof t) ? y(e) : t
    }
    function B(e, t) {
        return (
            (function (e) {
                if (Array.isArray(e)) return e
            })(e) ||
            (function (e, t) {
                if (
                    !(
                        Symbol.iterator in Object(e) ||
                        '[object Arguments]' === Object.prototype.toString.call(e)
                    )
                )
                    return
                var n = [],
                    r = !0,
                    i = !1,
                    a = void 0
                try {
                    for (
                        var s, o = e[Symbol.iterator]();
                        !(r = (s = o.next()).done) && (n.push(s.value), !t || n.length !== t);
                        r = !0
                    );
                } catch (e) {
                    ;(i = !0), (a = e)
                } finally {
                    try {
                        r || null == o.return || o.return()
                    } finally {
                        if (i) throw a
                    }
                }
                return n
            })(e, t) ||
            (function () {
                throw new TypeError('Invalid attempt to destructure non-iterable instance')
            })()
        )
    }
    function w(e) {
        return (
            (function (e) {
                if (Array.isArray(e)) {
                    for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t]
                    return n
                }
            })(e) ||
            (function (e) {
                if (
                    Symbol.iterator in Object(e) ||
                    '[object Arguments]' === Object.prototype.toString.call(e)
                )
                    return Array.from(e)
            })(e) ||
            (function () {
                throw new TypeError('Invalid attempt to spread non-iterable instance')
            })()
        )
    }
    function o(e) {
        return (
            'function' == typeof e ||
            Array.isArray(e) ||
            '[object Object]' === Object.prototype.toString.call(e)
        )
    }
    function c(e, t) {
        if (e === t) return e
        for (var n in t)
            if (Object.prototype.hasOwnProperty.call(t, n)) {
                var r = t[n],
                    i = e[n]
                ;(void 0 !== i && void 0 === r) ||
                    (o(i) && o(r)
                        ? (e[n] = c(i, r))
                        : (e[n] =
                              'object' == typeof (a = r) && null !== a
                                  ? c(Array.isArray(a) ? [] : {}, a)
                                  : a))
            }
        var a
        return e
    }
    function m() {
        return Array.prototype.slice.call(arguments).reduceRight(function (t, n) {
            return (
                Object.keys(Object(n)).forEach(function (e) {
                    void 0 !== n[e] && (t[e] = n[e])
                }),
                t
            )
        }, {})
    }
    var p = function (e) {
        o(e) || (e = {})
        for (var t = 1, n = arguments.length; t < n; t++) {
            var r = arguments[t]
            o(r) && c(e, r)
        }
        return e
    }
    var n = function (n, r) {
            return n.filter(function (e, t) {
                return -1 < r.indexOf(e) && n.indexOf(e) === t
            })
        },
        g = function (e, t) {
            if (Array.isArray(e)) for (var n = 0; n < e.length; n++) if (t(e[n])) return e[n]
        }
    var u = function e(t) {
        if ('number' == typeof t) return t
        if ('string' == typeof t) return parseFloat(t)
        if (Array.isArray(t)) return t.map(e)
        throw new Error('The value should be a number, a parsable string or an array of those.')
    }
    var h = function (e, t) {
        if (null === e) return {}
        var n,
            r,
            i = {},
            a = Object.keys(e)
        for (r = 0; r < a.length; r++) (n = a[r]), 0 <= t.indexOf(n) || (i[n] = e[n])
        return i
    }
    var d = function (e) {
            return e && 0 < Object.keys(e).length
        },
        v = {
            addRefinement: function (e, t, n) {
                if (v.isRefined(e, t, n)) return e
                var r = '' + n,
                    i = e[t] ? e[t].concat(r) : [r],
                    a = {}
                return (a[t] = i), m({}, a, e)
            },
            removeRefinement: function (e, n, t) {
                if (void 0 === t)
                    return v.clearRefinement(e, function (e, t) {
                        return n === t
                    })
                var r = '' + t
                return v.clearRefinement(e, function (e, t) {
                    return n === t && r === e
                })
            },
            toggleRefinement: function (e, t, n) {
                if (void 0 === n) throw new Error('toggleRefinement should be used with a value')
                return v.isRefined(e, t, n) ? v.removeRefinement(e, t, n) : v.addRefinement(e, t, n)
            },
            clearRefinement: function (i, a, s) {
                if (void 0 === a) return d(i) ? {} : i
                if ('string' == typeof a) return h(i, [a])
                if ('function' == typeof a) {
                    var o = !1,
                        e = Object.keys(i).reduce(function (e, t) {
                            var n = i[t] || [],
                                r = n.filter(function (e) {
                                    return !a(e, t, s)
                                })
                            return r.length !== n.length && (o = !0), (e[t] = r), e
                        }, {})
                    return o ? e : i
                }
            },
            isRefined: function (e, t, n) {
                var r = !!e[t] && 0 < e[t].length
                if (void 0 === n || !r) return r
                var i = '' + n
                return -1 !== e[t].indexOf(i)
            }
        },
        b = v
    function R(e, n) {
        return Array.isArray(e) && Array.isArray(n)
            ? e.length === n.length &&
                  e.every(function (e, t) {
                      return R(n[t], e)
                  })
            : e === n
    }
    function S(e) {
        var r = e ? S._parseNumbers(e) : {}
        ;(this.facets = r.facets || []),
            (this.disjunctiveFacets = r.disjunctiveFacets || []),
            (this.hierarchicalFacets = r.hierarchicalFacets || []),
            (this.facetsRefinements = r.facetsRefinements || {}),
            (this.facetsExcludes = r.facetsExcludes || {}),
            (this.disjunctiveFacetsRefinements = r.disjunctiveFacetsRefinements || {}),
            (this.numericRefinements = r.numericRefinements || {}),
            (this.tagRefinements = r.tagRefinements || []),
            (this.hierarchicalFacetsRefinements = r.hierarchicalFacetsRefinements || {})
        var i = this
        Object.keys(r).forEach(function (e) {
            var t = -1 !== S.PARAMETERS.indexOf(e),
                n = void 0 !== r[e]
            !t && n && (i[e] = r[e])
        })
    }
    ;(S.PARAMETERS = Object.keys(new S())),
        (S._parseNumbers = function (i) {
            if (i instanceof S) return i
            var r = {}
            if (
                ([
                    'aroundPrecision',
                    'aroundRadius',
                    'getRankingInfo',
                    'minWordSizefor2Typos',
                    'minWordSizefor1Typo',
                    'page',
                    'maxValuesPerFacet',
                    'distinct',
                    'minimumAroundRadius',
                    'hitsPerPage',
                    'minProximity'
                ].forEach(function (e) {
                    var t = i[e]
                    if ('string' == typeof t) {
                        var n = parseFloat(t)
                        r[e] = isNaN(n) ? t : n
                    }
                }),
                Array.isArray(i.insideBoundingBox) &&
                    (r.insideBoundingBox = i.insideBoundingBox.map(function (e) {
                        return e.map(function (e) {
                            return parseFloat(e)
                        })
                    })),
                i.numericRefinements)
            ) {
                var a = {}
                Object.keys(i.numericRefinements).forEach(function (n) {
                    var r = i.numericRefinements[n] || {}
                    ;(a[n] = {}),
                        Object.keys(r).forEach(function (e) {
                            var t = r[e].map(function (e) {
                                return Array.isArray(e)
                                    ? e.map(function (e) {
                                          return 'string' == typeof e ? parseFloat(e) : e
                                      })
                                    : 'string' == typeof e
                                    ? parseFloat(e)
                                    : e
                            })
                            a[n][e] = t
                        })
                }),
                    (r.numericRefinements = a)
            }
            return p({}, i, r)
        }),
        (S.make = function (e) {
            var n = new S(e)
            return (
                (e.hierarchicalFacets || []).forEach(function (e) {
                    if (e.rootPath) {
                        var t = n.getHierarchicalRefinement(e.name)
                        0 < t.length &&
                            0 !== t[0].indexOf(e.rootPath) &&
                            (n = n.clearRefinements(e.name)),
                            0 === (t = n.getHierarchicalRefinement(e.name)).length &&
                                (n = n.toggleHierarchicalFacetRefinement(e.name, e.rootPath))
                    }
                }),
                n
            )
        }),
        (S.validate = function (e, t) {
            var n = t || {}
            return e.tagFilters && n.tagRefinements && 0 < n.tagRefinements.length
                ? new Error(
                      '[Tags] Cannot switch from the managed tag API to the advanced API. It is probably an error, if it is really what you want, you should first clear the tags with clearTags method.'
                  )
                : 0 < e.tagRefinements.length && n.tagFilters
                ? new Error(
                      '[Tags] Cannot switch from the advanced tag API to the managed API. It is probably an error, if it is not, you should first clear the tags with clearTags method.'
                  )
                : e.numericFilters && n.numericRefinements && d(n.numericRefinements)
                ? new Error(
                      "[Numeric filters] Can't switch from the advanced to the managed API. It is probably an error, if this is really what you want, you have to first clear the numeric filters."
                  )
                : d(e.numericRefinements) && n.numericFilters
                ? new Error(
                      "[Numeric filters] Can't switch from the managed API to the advanced. It is probably an error, if this is really what you want, you have to first clear the numeric filters."
                  )
                : null
        }),
        (S.prototype = {
            constructor: S,
            clearRefinements: function (e) {
                var t = {
                    numericRefinements: this._clearNumericRefinements(e),
                    facetsRefinements: b.clearRefinement(
                        this.facetsRefinements,
                        e,
                        'conjunctiveFacet'
                    ),
                    facetsExcludes: b.clearRefinement(this.facetsExcludes, e, 'exclude'),
                    disjunctiveFacetsRefinements: b.clearRefinement(
                        this.disjunctiveFacetsRefinements,
                        e,
                        'disjunctiveFacet'
                    ),
                    hierarchicalFacetsRefinements: b.clearRefinement(
                        this.hierarchicalFacetsRefinements,
                        e,
                        'hierarchicalFacet'
                    )
                }
                return t.numericRefinements === this.numericRefinements &&
                    t.facetsRefinements === this.facetsRefinements &&
                    t.facetsExcludes === this.facetsExcludes &&
                    t.disjunctiveFacetsRefinements === this.disjunctiveFacetsRefinements &&
                    t.hierarchicalFacetsRefinements === this.hierarchicalFacetsRefinements
                    ? this
                    : this.setQueryParameters(t)
            },
            clearTags: function () {
                return void 0 === this.tagFilters && 0 === this.tagRefinements.length
                    ? this
                    : this.setQueryParameters({ tagFilters: void 0, tagRefinements: [] })
            },
            setIndex: function (e) {
                return e === this.index ? this : this.setQueryParameters({ index: e })
            },
            setQuery: function (e) {
                return e === this.query ? this : this.setQueryParameters({ query: e })
            },
            setPage: function (e) {
                return e === this.page ? this : this.setQueryParameters({ page: e })
            },
            setFacets: function (e) {
                return this.setQueryParameters({ facets: e })
            },
            setDisjunctiveFacets: function (e) {
                return this.setQueryParameters({ disjunctiveFacets: e })
            },
            setHitsPerPage: function (e) {
                return this.hitsPerPage === e ? this : this.setQueryParameters({ hitsPerPage: e })
            },
            setTypoTolerance: function (e) {
                return this.typoTolerance === e
                    ? this
                    : this.setQueryParameters({ typoTolerance: e })
            },
            addNumericRefinement: function (e, t, n) {
                var r = u(n)
                if (this.isNumericRefined(e, t, r)) return this
                var i = p({}, this.numericRefinements)
                return (
                    (i[e] = p({}, i[e])),
                    i[e][t] ? ((i[e][t] = i[e][t].slice()), i[e][t].push(r)) : (i[e][t] = [r]),
                    this.setQueryParameters({ numericRefinements: i })
                )
            },
            getConjunctiveRefinements: function (e) {
                return (this.isConjunctiveFacet(e) && this.facetsRefinements[e]) || []
            },
            getDisjunctiveRefinements: function (e) {
                return (this.isDisjunctiveFacet(e) && this.disjunctiveFacetsRefinements[e]) || []
            },
            getHierarchicalRefinement: function (e) {
                return this.hierarchicalFacetsRefinements[e] || []
            },
            getExcludeRefinements: function (e) {
                return (this.isConjunctiveFacet(e) && this.facetsExcludes[e]) || []
            },
            removeNumericRefinement: function (n, r, i) {
                return void 0 !== i
                    ? this.isNumericRefined(n, r, i)
                        ? this.setQueryParameters({
                              numericRefinements: this._clearNumericRefinements(function (e, t) {
                                  return t === n && e.op === r && R(e.val, u(i))
                              })
                          })
                        : this
                    : void 0 !== r
                    ? this.isNumericRefined(n, r)
                        ? this.setQueryParameters({
                              numericRefinements: this._clearNumericRefinements(function (e, t) {
                                  return t === n && e.op === r
                              })
                          })
                        : this
                    : this.isNumericRefined(n)
                    ? this.setQueryParameters({
                          numericRefinements: this._clearNumericRefinements(function (e, t) {
                              return t === n
                          })
                      })
                    : this
            },
            getNumericRefinements: function (e) {
                return this.numericRefinements[e] || {}
            },
            getNumericRefinement: function (e, t) {
                return this.numericRefinements[e] && this.numericRefinements[e][t]
            },
            _clearNumericRefinements: function (s) {
                if (void 0 === s) return d(this.numericRefinements) ? {} : this.numericRefinements
                if ('string' == typeof s)
                    return d(this.numericRefinements[s])
                        ? h(this.numericRefinements, [s])
                        : this.numericRefinements
                if ('function' == typeof s) {
                    var o = !1,
                        t = this.numericRefinements,
                        e = Object.keys(t).reduce(function (e, r) {
                            var i = t[r],
                                a = {}
                            return (
                                (i = i || {}),
                                Object.keys(i).forEach(function (t) {
                                    var e = i[t] || [],
                                        n = []
                                    e.forEach(function (e) {
                                        s({ val: e, op: t }, r, 'numeric') || n.push(e)
                                    }),
                                        n.length !== e.length && (o = !0),
                                        (a[t] = n)
                                }),
                                (e[r] = a),
                                e
                            )
                        }, {})
                    return o ? e : this.numericRefinements
                }
            },
            addFacet: function (e) {
                return this.isConjunctiveFacet(e)
                    ? this
                    : this.setQueryParameters({ facets: this.facets.concat([e]) })
            },
            addDisjunctiveFacet: function (e) {
                return this.isDisjunctiveFacet(e)
                    ? this
                    : this.setQueryParameters({
                          disjunctiveFacets: this.disjunctiveFacets.concat([e])
                      })
            },
            addHierarchicalFacet: function (e) {
                if (this.isHierarchicalFacet(e.name))
                    throw new Error(
                        'Cannot declare two hierarchical facets with the same name: `' +
                            e.name +
                            '`'
                    )
                return this.setQueryParameters({
                    hierarchicalFacets: this.hierarchicalFacets.concat([e])
                })
            },
            addFacetRefinement: function (e, t) {
                if (!this.isConjunctiveFacet(e))
                    throw new Error(
                        e + ' is not defined in the facets attribute of the helper configuration'
                    )
                return b.isRefined(this.facetsRefinements, e, t)
                    ? this
                    : this.setQueryParameters({
                          facetsRefinements: b.addRefinement(this.facetsRefinements, e, t)
                      })
            },
            addExcludeRefinement: function (e, t) {
                if (!this.isConjunctiveFacet(e))
                    throw new Error(
                        e + ' is not defined in the facets attribute of the helper configuration'
                    )
                return b.isRefined(this.facetsExcludes, e, t)
                    ? this
                    : this.setQueryParameters({
                          facetsExcludes: b.addRefinement(this.facetsExcludes, e, t)
                      })
            },
            addDisjunctiveFacetRefinement: function (e, t) {
                if (!this.isDisjunctiveFacet(e))
                    throw new Error(
                        e +
                            ' is not defined in the disjunctiveFacets attribute of the helper configuration'
                    )
                return b.isRefined(this.disjunctiveFacetsRefinements, e, t)
                    ? this
                    : this.setQueryParameters({
                          disjunctiveFacetsRefinements: b.addRefinement(
                              this.disjunctiveFacetsRefinements,
                              e,
                              t
                          )
                      })
            },
            addTagRefinement: function (e) {
                if (this.isTagRefined(e)) return this
                var t = { tagRefinements: this.tagRefinements.concat(e) }
                return this.setQueryParameters(t)
            },
            removeFacet: function (t) {
                return this.isConjunctiveFacet(t)
                    ? this.clearRefinements(t).setQueryParameters({
                          facets: this.facets.filter(function (e) {
                              return e !== t
                          })
                      })
                    : this
            },
            removeDisjunctiveFacet: function (t) {
                return this.isDisjunctiveFacet(t)
                    ? this.clearRefinements(t).setQueryParameters({
                          disjunctiveFacets: this.disjunctiveFacets.filter(function (e) {
                              return e !== t
                          })
                      })
                    : this
            },
            removeHierarchicalFacet: function (t) {
                return this.isHierarchicalFacet(t)
                    ? this.clearRefinements(t).setQueryParameters({
                          hierarchicalFacets: this.hierarchicalFacets.filter(function (e) {
                              return e.name !== t
                          })
                      })
                    : this
            },
            removeFacetRefinement: function (e, t) {
                if (!this.isConjunctiveFacet(e))
                    throw new Error(
                        e + ' is not defined in the facets attribute of the helper configuration'
                    )
                return b.isRefined(this.facetsRefinements, e, t)
                    ? this.setQueryParameters({
                          facetsRefinements: b.removeRefinement(this.facetsRefinements, e, t)
                      })
                    : this
            },
            removeExcludeRefinement: function (e, t) {
                if (!this.isConjunctiveFacet(e))
                    throw new Error(
                        e + ' is not defined in the facets attribute of the helper configuration'
                    )
                return b.isRefined(this.facetsExcludes, e, t)
                    ? this.setQueryParameters({
                          facetsExcludes: b.removeRefinement(this.facetsExcludes, e, t)
                      })
                    : this
            },
            removeDisjunctiveFacetRefinement: function (e, t) {
                if (!this.isDisjunctiveFacet(e))
                    throw new Error(
                        e +
                            ' is not defined in the disjunctiveFacets attribute of the helper configuration'
                    )
                return b.isRefined(this.disjunctiveFacetsRefinements, e, t)
                    ? this.setQueryParameters({
                          disjunctiveFacetsRefinements: b.removeRefinement(
                              this.disjunctiveFacetsRefinements,
                              e,
                              t
                          )
                      })
                    : this
            },
            removeTagRefinement: function (t) {
                if (!this.isTagRefined(t)) return this
                var e = {
                    tagRefinements: this.tagRefinements.filter(function (e) {
                        return e !== t
                    })
                }
                return this.setQueryParameters(e)
            },
            toggleRefinement: function (e, t) {
                return this.toggleFacetRefinement(e, t)
            },
            toggleFacetRefinement: function (e, t) {
                if (this.isHierarchicalFacet(e)) return this.toggleHierarchicalFacetRefinement(e, t)
                if (this.isConjunctiveFacet(e)) return this.toggleConjunctiveFacetRefinement(e, t)
                if (this.isDisjunctiveFacet(e)) return this.toggleDisjunctiveFacetRefinement(e, t)
                throw new Error(
                    'Cannot refine the undeclared facet ' +
                        e +
                        '; it should be added to the helper options facets, disjunctiveFacets or hierarchicalFacets'
                )
            },
            toggleConjunctiveFacetRefinement: function (e, t) {
                if (!this.isConjunctiveFacet(e))
                    throw new Error(
                        e + ' is not defined in the facets attribute of the helper configuration'
                    )
                return this.setQueryParameters({
                    facetsRefinements: b.toggleRefinement(this.facetsRefinements, e, t)
                })
            },
            toggleExcludeFacetRefinement: function (e, t) {
                if (!this.isConjunctiveFacet(e))
                    throw new Error(
                        e + ' is not defined in the facets attribute of the helper configuration'
                    )
                return this.setQueryParameters({
                    facetsExcludes: b.toggleRefinement(this.facetsExcludes, e, t)
                })
            },
            toggleDisjunctiveFacetRefinement: function (e, t) {
                if (!this.isDisjunctiveFacet(e))
                    throw new Error(
                        e +
                            ' is not defined in the disjunctiveFacets attribute of the helper configuration'
                    )
                return this.setQueryParameters({
                    disjunctiveFacetsRefinements: b.toggleRefinement(
                        this.disjunctiveFacetsRefinements,
                        e,
                        t
                    )
                })
            },
            toggleHierarchicalFacetRefinement: function (e, t) {
                if (!this.isHierarchicalFacet(e))
                    throw new Error(
                        e +
                            ' is not defined in the hierarchicalFacets attribute of the helper configuration'
                    )
                var n = this._getHierarchicalFacetSeparator(this.getHierarchicalFacetByName(e)),
                    r = {}
                return (
                    void 0 !== this.hierarchicalFacetsRefinements[e] &&
                    0 < this.hierarchicalFacetsRefinements[e].length &&
                    (this.hierarchicalFacetsRefinements[e][0] === t ||
                        0 === this.hierarchicalFacetsRefinements[e][0].indexOf(t + n))
                        ? -1 === t.indexOf(n)
                            ? (r[e] = [])
                            : (r[e] = [t.slice(0, t.lastIndexOf(n))])
                        : (r[e] = [t]),
                    this.setQueryParameters({
                        hierarchicalFacetsRefinements: m({}, r, this.hierarchicalFacetsRefinements)
                    })
                )
            },
            addHierarchicalFacetRefinement: function (e, t) {
                if (this.isHierarchicalFacetRefined(e)) throw new Error(e + ' is already refined.')
                if (!this.isHierarchicalFacet(e))
                    throw new Error(
                        e +
                            ' is not defined in the hierarchicalFacets attribute of the helper configuration.'
                    )
                var n = {}
                return (
                    (n[e] = [t]),
                    this.setQueryParameters({
                        hierarchicalFacetsRefinements: m({}, n, this.hierarchicalFacetsRefinements)
                    })
                )
            },
            removeHierarchicalFacetRefinement: function (e) {
                if (!this.isHierarchicalFacetRefined(e)) return this
                var t = {}
                return (
                    (t[e] = []),
                    this.setQueryParameters({
                        hierarchicalFacetsRefinements: m({}, t, this.hierarchicalFacetsRefinements)
                    })
                )
            },
            toggleTagRefinement: function (e) {
                return this.isTagRefined(e) ? this.removeTagRefinement(e) : this.addTagRefinement(e)
            },
            isDisjunctiveFacet: function (e) {
                return -1 < this.disjunctiveFacets.indexOf(e)
            },
            isHierarchicalFacet: function (e) {
                return void 0 !== this.getHierarchicalFacetByName(e)
            },
            isConjunctiveFacet: function (e) {
                return -1 < this.facets.indexOf(e)
            },
            isFacetRefined: function (e, t) {
                return !!this.isConjunctiveFacet(e) && b.isRefined(this.facetsRefinements, e, t)
            },
            isExcludeRefined: function (e, t) {
                return !!this.isConjunctiveFacet(e) && b.isRefined(this.facetsExcludes, e, t)
            },
            isDisjunctiveFacetRefined: function (e, t) {
                return (
                    !!this.isDisjunctiveFacet(e) &&
                    b.isRefined(this.disjunctiveFacetsRefinements, e, t)
                )
            },
            isHierarchicalFacetRefined: function (e, t) {
                if (!this.isHierarchicalFacet(e)) return !1
                var n = this.getHierarchicalRefinement(e)
                return t ? -1 !== n.indexOf(t) : 0 < n.length
            },
            isNumericRefined: function (e, t, n) {
                if (void 0 === n && void 0 === t) return !!this.numericRefinements[e]
                var r = this.numericRefinements[e] && void 0 !== this.numericRefinements[e][t]
                if (void 0 === n || !r) return r
                var i = u(n),
                    a =
                        void 0 !==
                        (function (e, t) {
                            return g(e, function (e) {
                                return R(e, t)
                            })
                        })(this.numericRefinements[e][t], i)
                return r && a
            },
            isTagRefined: function (e) {
                return -1 !== this.tagRefinements.indexOf(e)
            },
            getRefinedDisjunctiveFacets: function () {
                var t = this,
                    e = n(
                        Object.keys(this.numericRefinements).filter(function (e) {
                            return 0 < Object.keys(t.numericRefinements[e]).length
                        }),
                        this.disjunctiveFacets
                    )
                return Object.keys(this.disjunctiveFacetsRefinements)
                    .filter(function (e) {
                        return 0 < t.disjunctiveFacetsRefinements[e].length
                    })
                    .concat(e)
                    .concat(this.getRefinedHierarchicalFacets())
            },
            getRefinedHierarchicalFacets: function () {
                var t = this
                return n(
                    this.hierarchicalFacets.map(function (e) {
                        return e.name
                    }),
                    Object.keys(this.hierarchicalFacetsRefinements).filter(function (e) {
                        return 0 < t.hierarchicalFacetsRefinements[e].length
                    })
                )
            },
            getUnrefinedDisjunctiveFacets: function () {
                var t = this.getRefinedDisjunctiveFacets()
                return this.disjunctiveFacets.filter(function (e) {
                    return -1 === t.indexOf(e)
                })
            },
            managedParameters: [
                'index',
                'facets',
                'disjunctiveFacets',
                'facetsRefinements',
                'facetsExcludes',
                'disjunctiveFacetsRefinements',
                'numericRefinements',
                'tagRefinements',
                'hierarchicalFacets',
                'hierarchicalFacetsRefinements'
            ],
            getQueryParams: function () {
                var n = this.managedParameters,
                    r = {},
                    i = this
                return (
                    Object.keys(this).forEach(function (e) {
                        var t = i[e]
                        ;-1 === n.indexOf(e) && void 0 !== t && (r[e] = t)
                    }),
                    r
                )
            },
            setQueryParameter: function (e, t) {
                if (this[e] === t) return this
                var n = {}
                return (n[e] = t), this.setQueryParameters(n)
            },
            setQueryParameters: function (e) {
                if (!e) return this
                var t = S.validate(this, e)
                if (t) throw t
                var n = this,
                    i = S._parseNumbers(e),
                    r = Object.keys(this).reduce(function (e, t) {
                        return (e[t] = n[t]), e
                    }, {}),
                    a = Object.keys(i).reduce(function (e, t) {
                        var n = void 0 !== e[t],
                            r = void 0 !== i[t]
                        return n && !r ? h(e, [t]) : (r && (e[t] = i[t]), e)
                    }, r)
                return new this.constructor(a)
            },
            resetPage: function () {
                return void 0 === this.page ? this : this.setPage(0)
            },
            _getHierarchicalFacetSortBy: function (e) {
                return e.sortBy || ['isRefined:desc', 'name:asc']
            },
            _getHierarchicalFacetSeparator: function (e) {
                return e.separator || ' > '
            },
            _getHierarchicalRootPath: function (e) {
                return e.rootPath || null
            },
            _getHierarchicalShowParentLevel: function (e) {
                return 'boolean' != typeof e.showParentLevel || e.showParentLevel
            },
            getHierarchicalFacetByName: function (t) {
                return g(this.hierarchicalFacets, function (e) {
                    return e.name === t
                })
            },
            getHierarchicalFacetBreadcrumb: function (e) {
                if (!this.isHierarchicalFacet(e)) return []
                var t = this.getHierarchicalRefinement(e)[0]
                if (!t) return []
                var n = this._getHierarchicalFacetSeparator(this.getHierarchicalFacetByName(e))
                return t.split(n).map(function (e) {
                    return e.trim()
                })
            },
            toString: function () {
                return JSON.stringify(this, null, 2)
            }
        })
    var P = S
    function _(e, t) {
        if (e !== t) {
            var n = void 0 !== e,
                r = null === e,
                i = void 0 !== t,
                a = null === t
            if ((!a && t < e) || (r && i) || !n) return 1
            if ((!r && e < t) || (a && n) || !i) return -1
        }
        return 0
    }
    function t(e) {
        return Array.isArray(e) ? e.filter(Boolean) : []
    }
    function x(e, t) {
        if (!Array.isArray(e)) return -1
        for (var n = 0; n < e.length; n++) if (t(e[n])) return n
        return -1
    }
    function N(e, t) {
        var i = (t || []).map(function (e) {
            return e.split(':')
        })
        return e.reduce(
            function (e, t) {
                var n = t.split(':'),
                    r = g(i, function (e) {
                        return e[0] === n[0]
                    })
                return (
                    1 < n.length || !r
                        ? (e[0].push(n[0]), e[1].push(n[1]))
                        : (e[0].push(r[0]), e[1].push(r[1])),
                    e
                )
            },
            [[], []]
        )
    }
    var F = function (e, n, i) {
            if (!Array.isArray(e)) return []
            Array.isArray(i) || (i = [])
            var t = e.map(function (t, e) {
                return {
                    criteria: n.map(function (e) {
                        return t[e]
                    }),
                    index: e,
                    value: t
                }
            })
            return (
                t.sort(function (e, t) {
                    for (var n = -1; ++n < e.criteria.length; ) {
                        var r = _(e.criteria[n], t.criteria[n])
                        if (r) return n >= i.length ? r : 'desc' === i[n] ? -r : r
                    }
                    return e.index - t.index
                }),
                t.map(function (e) {
                    return e.value
                })
            )
        },
        I = function (h) {
            return function (e, t) {
                var n = h.hierarchicalFacets[t],
                    r =
                        (h.hierarchicalFacetsRefinements[n.name] &&
                            h.hierarchicalFacetsRefinements[n.name][0]) ||
                        '',
                    i = h._getHierarchicalFacetSeparator(n),
                    a = h._getHierarchicalRootPath(n),
                    s = h._getHierarchicalShowParentLevel(n),
                    o = N(h._getHierarchicalFacetSortBy(n)),
                    c = e.every(function (e) {
                        return e.exhaustive
                    }),
                    u = (function (o, c, u, l, h) {
                        return function (e, n, t) {
                            var r = e
                            if (0 < t) {
                                var i = 0
                                for (r = e; i < t; ) {
                                    var a = r && Array.isArray(r.data) ? r.data : []
                                    ;(r = g(a, function (e) {
                                        return e.isRefined
                                    })),
                                        i++
                                }
                            }
                            if (r) {
                                var s = Object.keys(n.data)
                                    .map(function (e) {
                                        return [e, n.data[e]]
                                    })
                                    .filter(function (e) {
                                        return (function (e, t, n, r, i, a) {
                                            return (
                                                (!i || (0 === e.indexOf(i) && i !== e)) &&
                                                ((!i && -1 === e.indexOf(r)) ||
                                                    (i &&
                                                        e.split(r).length - i.split(r).length ==
                                                            1) ||
                                                    (-1 === e.indexOf(r) && -1 === n.indexOf(r)) ||
                                                    0 === n.indexOf(e) ||
                                                    (0 === e.indexOf(t + r) &&
                                                        (a || 0 === e.indexOf(n))))
                                            )
                                        })(e[0], r.path || u, h, c, u, l)
                                    })
                                r.data = F(
                                    s.map(function (e) {
                                        var t = e[0]
                                        return (function (e, t, n, r, i) {
                                            var a = t.split(n)
                                            return {
                                                name: a[a.length - 1].trim(),
                                                path: t,
                                                count: e,
                                                isRefined: r === t || 0 === r.indexOf(t + n),
                                                exhaustive: i,
                                                data: null
                                            }
                                        })(e[1], t, c, h, n.exhaustive)
                                    }),
                                    o[0],
                                    o[1]
                                )
                            }
                            return e
                        }
                    })(o, i, a, s, r),
                    l = e
                return (
                    a && (l = e.slice(a.split(i).length)),
                    l.reduce(u, {
                        name: h.hierarchicalFacets[t].name,
                        count: null,
                        isRefined: !0,
                        path: null,
                        exhaustive: c,
                        data: null
                    })
                )
            }
        }
    function M(e) {
        var n = {}
        return (
            e.forEach(function (e, t) {
                n[e] = t
            }),
            n
        )
    }
    function L(e, t, n) {
        t && t[n] && (e.stats = t[n])
    }
    function H(l, n) {
        var c = n[0]
        ;(this._rawResults = n),
            (this.query = c.query),
            (this.parsedQuery = c.parsedQuery),
            (this.hits = c.hits),
            (this.index = c.index),
            (this.hitsPerPage = c.hitsPerPage),
            (this.nbHits = c.nbHits),
            (this.nbPages = c.nbPages),
            (this.page = c.page),
            (this.processingTimeMS = n.reduce(function (e, t) {
                return void 0 === t.processingTimeMS ? e : e + t.processingTimeMS
            }, 0)),
            (this.aroundLatLng = c.aroundLatLng),
            (this.automaticRadius = c.automaticRadius),
            (this.serverUsed = c.serverUsed),
            (this.timeoutCounts = c.timeoutCounts),
            (this.timeoutHits = c.timeoutHits),
            (this.exhaustiveFacetsCount = c.exhaustiveFacetsCount),
            (this.exhaustiveNbHits = c.exhaustiveNbHits),
            (this.userData = c.userData),
            (this.queryID = c.queryID),
            (this.disjunctiveFacets = []),
            (this.hierarchicalFacets = l.hierarchicalFacets.map(function () {
                return []
            })),
            (this.facets = [])
        var e = l.getRefinedDisjunctiveFacets(),
            u = M(l.facets),
            h = M(l.disjunctiveFacets),
            r = 1,
            f = this,
            d = c.facets || {}
        Object.keys(d).forEach(function (e) {
            var t = d[e],
                n = (function (e, t) {
                    return g(e, function (e) {
                        return -1 < (e.attributes || []).indexOf(t)
                    })
                })(l.hierarchicalFacets, e)
            if (n) {
                var r = n.attributes.indexOf(e),
                    i = x(l.hierarchicalFacets, function (e) {
                        return e.name === n.name
                    })
                f.hierarchicalFacets[i][r] = {
                    attribute: e,
                    data: t,
                    exhaustive: c.exhaustiveFacetsCount
                }
            } else {
                var a,
                    s = -1 !== l.disjunctiveFacets.indexOf(e),
                    o = -1 !== l.facets.indexOf(e)
                s &&
                    ((a = h[e]),
                    (f.disjunctiveFacets[a] = {
                        name: e,
                        data: t,
                        exhaustive: c.exhaustiveFacetsCount
                    }),
                    L(f.disjunctiveFacets[a], c.facets_stats, e)),
                    o &&
                        ((a = u[e]),
                        (f.facets[a] = { name: e, data: t, exhaustive: c.exhaustiveFacetsCount }),
                        L(f.facets[a], c.facets_stats, e))
            }
        }),
            (this.hierarchicalFacets = t(this.hierarchicalFacets)),
            e.forEach(function (e) {
                var a = n[r],
                    s = a && a.facets ? a.facets : {},
                    o = l.getHierarchicalFacetByName(e)
                Object.keys(s).forEach(function (t) {
                    var n,
                        e = s[t]
                    if (o) {
                        n = x(l.hierarchicalFacets, function (e) {
                            return e.name === o.name
                        })
                        var r = x(f.hierarchicalFacets[n], function (e) {
                            return e.attribute === t
                        })
                        if (-1 === r) return
                        f.hierarchicalFacets[n][r].data = p({}, f.hierarchicalFacets[n][r].data, e)
                    } else {
                        n = h[t]
                        var i = (c.facets && c.facets[t]) || {}
                        ;(f.disjunctiveFacets[n] = {
                            name: t,
                            data: m({}, e, i),
                            exhaustive: a.exhaustiveFacetsCount
                        }),
                            L(f.disjunctiveFacets[n], a.facets_stats, t),
                            l.disjunctiveFacetsRefinements[t] &&
                                l.disjunctiveFacetsRefinements[t].forEach(function (e) {
                                    !f.disjunctiveFacets[n].data[e] &&
                                        -1 < l.disjunctiveFacetsRefinements[t].indexOf(e) &&
                                        (f.disjunctiveFacets[n].data[e] = 0)
                                })
                    }
                }),
                    r++
            }),
            l.getRefinedHierarchicalFacets().forEach(function (e) {
                var s = l.getHierarchicalFacetByName(e),
                    o = l._getHierarchicalFacetSeparator(s),
                    c = l.getHierarchicalRefinement(e)
                if (!(0 === c.length || c[0].split(o).length < 2)) {
                    var t = n[r],
                        u = t && t.facets ? t.facets : {}
                    Object.keys(u).forEach(function (t) {
                        var e = u[t],
                            n = x(l.hierarchicalFacets, function (e) {
                                return e.name === s.name
                            }),
                            r = x(f.hierarchicalFacets[n], function (e) {
                                return e.attribute === t
                            })
                        if (-1 !== r) {
                            var i = {}
                            if (0 < c.length) {
                                var a = c[0].split(o)[0]
                                i[a] = f.hierarchicalFacets[n][r].data[a]
                            }
                            f.hierarchicalFacets[n][r].data = m(
                                i,
                                e,
                                f.hierarchicalFacets[n][r].data
                            )
                        }
                    }),
                        r++
                }
            }),
            Object.keys(l.facetsExcludes).forEach(function (t) {
                var e = l.facetsExcludes[t],
                    n = u[t]
                ;(f.facets[n] = {
                    name: t,
                    data: c.facets[t],
                    exhaustive: c.exhaustiveFacetsCount
                }),
                    e.forEach(function (e) {
                        ;(f.facets[n] = f.facets[n] || { name: t }),
                            (f.facets[n].data = f.facets[n].data || {}),
                            (f.facets[n].data[e] = 0)
                    })
            }),
            (this.hierarchicalFacets = this.hierarchicalFacets.map(I(l))),
            (this.facets = t(this.facets)),
            (this.disjunctiveFacets = t(this.disjunctiveFacets)),
            (this._state = l)
    }
    function Q(t, e) {
        if (!e.data || 0 === e.data.length) return e
        var n = e.data.map(function (e) {
                return Q(t, e)
            }),
            r = t(n)
        return p({}, e, { data: r })
    }
    function q(e, t) {
        var n = g(e, function (e) {
            return e.name === t
        })
        return n && n.stats
    }
    function U(e, t, n, r, i) {
        var a = g(i, function (e) {
                return e.name === n
            }),
            s = a && a.data && a.data[r] ? a.data[r] : 0,
            o = (a && a.exhaustive) || !1
        return { type: t, attributeName: n, name: r, count: s, exhaustive: o }
    }
    ;(H.prototype.getFacetByName = function (t) {
        function e(e) {
            return e.name === t
        }
        return g(this.facets, e) || g(this.disjunctiveFacets, e) || g(this.hierarchicalFacets, e)
    }),
        (H.DEFAULT_SORT = ['isRefined:desc', 'count:desc', 'name:asc']),
        (H.prototype.getFacetValues = function (e, t) {
            var n = (function (t, n) {
                function e(e) {
                    return e.name === n
                }
                if (t._state.isConjunctiveFacet(n)) {
                    var r = g(t.facets, e)
                    return r
                        ? Object.keys(r.data).map(function (e) {
                              return {
                                  name: e,
                                  count: r.data[e],
                                  isRefined: t._state.isFacetRefined(n, e),
                                  isExcluded: t._state.isExcludeRefined(n, e)
                              }
                          })
                        : []
                }
                if (t._state.isDisjunctiveFacet(n)) {
                    var i = g(t.disjunctiveFacets, e)
                    return i
                        ? Object.keys(i.data).map(function (e) {
                              return {
                                  name: e,
                                  count: i.data[e],
                                  isRefined: t._state.isDisjunctiveFacetRefined(n, e)
                              }
                          })
                        : []
                }
                if (t._state.isHierarchicalFacet(n)) return g(t.hierarchicalFacets, e)
            })(this, e)
            if (n) {
                var r = m({}, t, { sortBy: H.DEFAULT_SORT })
                if (Array.isArray(r.sortBy)) {
                    var i = N(r.sortBy, H.DEFAULT_SORT)
                    return Array.isArray(n)
                        ? F(n, i[0], i[1])
                        : Q(function (e) {
                              return F(e, i[0], i[1])
                          }, n)
                }
                if ('function' == typeof r.sortBy)
                    return Array.isArray(n)
                        ? n.sort(r.sortBy)
                        : Q(function (e) {
                              return (function (e, t) {
                                  return t.sort(e)
                              })(r.sortBy, e)
                          }, n)
                throw new Error(
                    'options.sortBy is optional but if defined it must be either an array of string (predicates) or a sorting function'
                )
            }
        }),
        (H.prototype.getFacetStats = function (e) {
            return this._state.isConjunctiveFacet(e)
                ? q(this.facets, e)
                : this._state.isDisjunctiveFacet(e)
                ? q(this.disjunctiveFacets, e)
                : void 0
        }),
        (H.prototype.getRefinements = function () {
            var r = this._state,
                n = this,
                i = []
            return (
                Object.keys(r.facetsRefinements).forEach(function (t) {
                    r.facetsRefinements[t].forEach(function (e) {
                        i.push(U(r, 'facet', t, e, n.facets))
                    })
                }),
                Object.keys(r.facetsExcludes).forEach(function (t) {
                    r.facetsExcludes[t].forEach(function (e) {
                        i.push(U(r, 'exclude', t, e, n.facets))
                    })
                }),
                Object.keys(r.disjunctiveFacetsRefinements).forEach(function (t) {
                    r.disjunctiveFacetsRefinements[t].forEach(function (e) {
                        i.push(U(r, 'disjunctive', t, e, n.disjunctiveFacets))
                    })
                }),
                Object.keys(r.hierarchicalFacetsRefinements).forEach(function (t) {
                    r.hierarchicalFacetsRefinements[t].forEach(function (e) {
                        i.push(
                            (function (e, t, n, r) {
                                var i = e.getHierarchicalFacetByName(t),
                                    a = e._getHierarchicalFacetSeparator(i),
                                    s = n.split(a),
                                    o = g(r, function (e) {
                                        return e.name === t
                                    }),
                                    c = s.reduce(function (e, t) {
                                        var n =
                                            e &&
                                            g(e.data, function (e) {
                                                return e.name === t
                                            })
                                        return void 0 !== n ? n : e
                                    }, o),
                                    u = (c && c.count) || 0,
                                    l = (c && c.exhaustive) || !1,
                                    h = (c && c.path) || ''
                                return {
                                    type: 'hierarchical',
                                    attributeName: t,
                                    name: h,
                                    count: u,
                                    exhaustive: l
                                }
                            })(r, t, e, n.hierarchicalFacets)
                        )
                    })
                }),
                Object.keys(r.numericRefinements).forEach(function (n) {
                    var e = r.numericRefinements[n]
                    Object.keys(e).forEach(function (t) {
                        e[t].forEach(function (e) {
                            i.push({
                                type: 'numeric',
                                attributeName: n,
                                name: e,
                                numericValue: e,
                                operator: t
                            })
                        })
                    })
                }),
                r.tagRefinements.forEach(function (e) {
                    i.push({ type: 'tag', attributeName: '_tags', name: e })
                }),
                i
            )
        })
    var V = H
    function W() {
        ;(this._events = this._events || {}), (this._maxListeners = this._maxListeners || void 0)
    }
    var e = W
    function $(e) {
        return 'function' == typeof e
    }
    function z(e) {
        return 'object' == typeof e && null !== e
    }
    function K(e) {
        return void 0 === e
    }
    ;((W.EventEmitter = W).prototype._events = void 0),
        (W.prototype._maxListeners = void 0),
        (W.defaultMaxListeners = 10),
        (W.prototype.setMaxListeners = function (e) {
            if (
                !(function (e) {
                    return 'number' == typeof e
                })(e) ||
                e < 0 ||
                isNaN(e)
            )
                throw TypeError('n must be a positive number')
            return (this._maxListeners = e), this
        }),
        (W.prototype.emit = function (e) {
            var t, n, r, i, a, s
            if (
                (this._events || (this._events = {}),
                'error' === e &&
                    (!this._events.error || (z(this._events.error) && !this._events.error.length)))
            ) {
                if ((t = arguments[1]) instanceof Error) throw t
                var o = new Error('Uncaught, unspecified "error" event. (' + t + ')')
                throw ((o.context = t), o)
            }
            if (K((n = this._events[e]))) return !1
            if ($(n))
                switch (arguments.length) {
                    case 1:
                        n.call(this)
                        break
                    case 2:
                        n.call(this, arguments[1])
                        break
                    case 3:
                        n.call(this, arguments[1], arguments[2])
                        break
                    default:
                        ;(i = Array.prototype.slice.call(arguments, 1)), n.apply(this, i)
                }
            else if (z(n))
                for (
                    i = Array.prototype.slice.call(arguments, 1), r = (s = n.slice()).length, a = 0;
                    a < r;
                    a++
                )
                    s[a].apply(this, i)
            return !0
        }),
        (W.prototype.on = W.prototype.addListener =
            function (e, t) {
                var n
                if (!$(t)) throw TypeError('listener must be a function')
                return (
                    this._events || (this._events = {}),
                    this._events.newListener &&
                        this.emit('newListener', e, $(t.listener) ? t.listener : t),
                    this._events[e]
                        ? z(this._events[e])
                            ? this._events[e].push(t)
                            : (this._events[e] = [this._events[e], t])
                        : (this._events[e] = t),
                    z(this._events[e]) &&
                        !this._events[e].warned &&
                        (n = K(this._maxListeners) ? W.defaultMaxListeners : this._maxListeners) &&
                        0 < n &&
                        this._events[e].length > n &&
                        ((this._events[e].warned = !0),
                        console.error(
                            '(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.',
                            this._events[e].length
                        ),
                        'function' == typeof console.trace && console.trace()),
                    this
                )
            }),
        (W.prototype.once = function (e, t) {
            if (!$(t)) throw TypeError('listener must be a function')
            var n = !1
            function r() {
                this.removeListener(e, r), n || ((n = !0), t.apply(this, arguments))
            }
            return (r.listener = t), this.on(e, r), this
        }),
        (W.prototype.removeListener = function (e, t) {
            var n, r, i, a
            if (!$(t)) throw TypeError('listener must be a function')
            if (!this._events || !this._events[e]) return this
            if (
                ((i = (n = this._events[e]).length),
                (r = -1),
                n === t || ($(n.listener) && n.listener === t))
            )
                delete this._events[e],
                    this._events.removeListener && this.emit('removeListener', e, t)
            else if (z(n)) {
                for (a = i; 0 < a--; )
                    if (n[a] === t || (n[a].listener && n[a].listener === t)) {
                        r = a
                        break
                    }
                if (r < 0) return this
                1 === n.length ? ((n.length = 0), delete this._events[e]) : n.splice(r, 1),
                    this._events.removeListener && this.emit('removeListener', e, t)
            }
            return this
        }),
        (W.prototype.removeAllListeners = function (e) {
            var t, n
            if (!this._events) return this
            if (!this._events.removeListener)
                return (
                    0 === arguments.length
                        ? (this._events = {})
                        : this._events[e] && delete this._events[e],
                    this
                )
            if (0 === arguments.length) {
                for (t in this._events) 'removeListener' !== t && this.removeAllListeners(t)
                return this.removeAllListeners('removeListener'), (this._events = {}), this
            }
            if ($((n = this._events[e]))) this.removeListener(e, n)
            else if (n) for (; n.length; ) this.removeListener(e, n[n.length - 1])
            return delete this._events[e], this
        }),
        (W.prototype.listeners = function (e) {
            return this._events && this._events[e]
                ? $(this._events[e])
                    ? [this._events[e]]
                    : this._events[e].slice()
                : []
        }),
        (W.prototype.listenerCount = function (e) {
            if (this._events) {
                var t = this._events[e]
                if ($(t)) return 1
                if (t) return t.length
            }
            return 0
        }),
        (W.listenerCount = function (e, t) {
            return e.listenerCount(t)
        })
    var J = function (e, t) {
        e.prototype = Object.create(t.prototype, {
            constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 }
        })
    }
    function Y(e, t) {
        ;(this.main = e), (this.fn = t), (this.lastResults = null)
    }
    J(Y, e.EventEmitter),
        (Y.prototype.detach = function () {
            this.removeAllListeners(), this.main.detachDerivedHelper(this)
        }),
        (Y.prototype.getModifiedState = function (e) {
            return this.fn(e)
        })
    var X = Y,
        G = {
            _getQueries: function (i, a) {
                var s = []
                return (
                    s.push({ indexName: i, params: G._getHitsSearchParams(a) }),
                    a.getRefinedDisjunctiveFacets().forEach(function (e) {
                        s.push({ indexName: i, params: G._getDisjunctiveFacetSearchParams(a, e) })
                    }),
                    a.getRefinedHierarchicalFacets().forEach(function (e) {
                        var t = a.getHierarchicalFacetByName(e),
                            n = a.getHierarchicalRefinement(e),
                            r = a._getHierarchicalFacetSeparator(t)
                        0 < n.length &&
                            1 < n[0].split(r).length &&
                            s.push({
                                indexName: i,
                                params: G._getDisjunctiveFacetSearchParams(a, e, !0)
                            })
                    }),
                    s
                )
            },
            _getHitsSearchParams: function (e) {
                var t = e.facets
                        .concat(e.disjunctiveFacets)
                        .concat(G._getHitsHierarchicalFacetsAttributes(e)),
                    n = G._getFacetFilters(e),
                    r = G._getNumericFilters(e),
                    i = { facets: t, tagFilters: G._getTagFilters(e) }
                return (
                    0 < n.length && (i.facetFilters = n),
                    0 < r.length && (i.numericFilters = r),
                    p({}, e.getQueryParams(), i)
                )
            },
            _getDisjunctiveFacetSearchParams: function (e, t, n) {
                var r = G._getFacetFilters(e, t, n),
                    i = G._getNumericFilters(e, t),
                    a = {
                        hitsPerPage: 1,
                        page: 0,
                        attributesToRetrieve: [],
                        attributesToHighlight: [],
                        attributesToSnippet: [],
                        tagFilters: G._getTagFilters(e),
                        analytics: !1,
                        clickAnalytics: !1
                    },
                    s = e.getHierarchicalFacetByName(t)
                return (
                    (a.facets = s ? G._getDisjunctiveHierarchicalFacetAttribute(e, s, n) : t),
                    0 < i.length && (a.numericFilters = i),
                    0 < r.length && (a.facetFilters = r),
                    p({}, e.getQueryParams(), a)
                )
            },
            _getNumericFilters: function (e, i) {
                if (e.numericFilters) return e.numericFilters
                var a = []
                return (
                    Object.keys(e.numericRefinements).forEach(function (r) {
                        var t = e.numericRefinements[r] || {}
                        Object.keys(t).forEach(function (n) {
                            var e = t[n] || []
                            i !== r &&
                                e.forEach(function (e) {
                                    if (Array.isArray(e)) {
                                        var t = e.map(function (e) {
                                            return r + n + e
                                        })
                                        a.push(t)
                                    } else a.push(r + n + e)
                                })
                        })
                    }),
                    a
                )
            },
            _getTagFilters: function (e) {
                return e.tagFilters ? e.tagFilters : e.tagRefinements.join(',')
            },
            _getFacetFilters: function (o, c, u) {
                var l = [],
                    e = o.facetsRefinements || {}
                Object.keys(e).forEach(function (t) {
                    ;(e[t] || []).forEach(function (e) {
                        l.push(t + ':' + e)
                    })
                })
                var n = o.facetsExcludes || {}
                Object.keys(n).forEach(function (t) {
                    ;(n[t] || []).forEach(function (e) {
                        l.push(t + ':-' + e)
                    })
                })
                var r = o.disjunctiveFacetsRefinements || {}
                Object.keys(r).forEach(function (t) {
                    var e = r[t] || []
                    if (t !== c && e && 0 !== e.length) {
                        var n = []
                        e.forEach(function (e) {
                            n.push(t + ':' + e)
                        }),
                            l.push(n)
                    }
                })
                var h = o.hierarchicalFacetsRefinements || {}
                return (
                    Object.keys(h).forEach(function (e) {
                        var t = (h[e] || [])[0]
                        if (void 0 !== t) {
                            var n,
                                r,
                                i = o.getHierarchicalFacetByName(e),
                                a = o._getHierarchicalFacetSeparator(i),
                                s = o._getHierarchicalRootPath(i)
                            if (c === e) {
                                if (
                                    -1 === t.indexOf(a) ||
                                    (!s && !0 === u) ||
                                    (s && s.split(a).length === t.split(a).length)
                                )
                                    return
                                ;(t = s
                                    ? ((r = s.split(a).length - 1), s)
                                    : ((r = t.split(a).length - 2), t.slice(0, t.lastIndexOf(a)))),
                                    (n = i.attributes[r])
                            } else (r = t.split(a).length - 1), (n = i.attributes[r])
                            n && l.push([n + ':' + t])
                        }
                    }),
                    l
                )
            },
            _getHitsHierarchicalFacetsAttributes: function (s) {
                return s.hierarchicalFacets.reduce(function (e, t) {
                    var n = s.getHierarchicalRefinement(t.name)[0]
                    if (!n) return e.push(t.attributes[0]), e
                    var r = s._getHierarchicalFacetSeparator(t),
                        i = n.split(r).length,
                        a = t.attributes.slice(0, i + 1)
                    return e.concat(a)
                }, [])
            },
            _getDisjunctiveHierarchicalFacetAttribute: function (e, t, n) {
                var r = e._getHierarchicalFacetSeparator(t)
                if (!0 === n) {
                    var i = e._getHierarchicalRootPath(t),
                        a = 0
                    return i && (a = i.split(r).length), [t.attributes[a]]
                }
                var s = (e.getHierarchicalRefinement(t.name)[0] || '').split(r).length - 1
                return t.attributes.slice(0, 1 + s)
            },
            getSearchForFacetQuery: function (e, t, n, r) {
                var i = r.isDisjunctiveFacet(e) ? r.clearRefinements(e) : r,
                    a = { facetQuery: t, facetName: e }
                return (
                    'number' == typeof n && (a.maxFacetHits = n),
                    p({}, G._getHitsSearchParams(i), a)
                )
            }
        },
        Z = G,
        ee = '3.1.1'
    function te(e, t, n) {
        'function' == typeof e.addAlgoliaAgent && e.addAlgoliaAgent('JS Helper (3.1.1)'),
            this.setClient(e)
        var r = n || {}
        ;(r.index = t),
            (this.state = P.make(r)),
            (this.lastResults = null),
            (this._queryId = 0),
            (this._lastQueryIdReceived = -1),
            (this.derivedHelpers = []),
            (this._currentNbQueries = 0)
    }
    function ne(e) {
        if (e < 0) throw new Error('Page requested below 0.')
        return this._change({ state: this.state.setPage(e), isPageReset: !1 }), this
    }
    function re() {
        return this.state.page
    }
    J(te, e.EventEmitter),
        (te.prototype.search = function () {
            return this._search({ onlyWithDerivedHelpers: !1 }), this
        }),
        (te.prototype.searchOnlyWithDerivedHelpers = function () {
            return this._search({ onlyWithDerivedHelpers: !0 }), this
        }),
        (te.prototype.getQuery = function () {
            var e = this.state
            return Z._getHitsSearchParams(e)
        }),
        (te.prototype.searchOnce = function (e, t) {
            var n = e ? this.state.setQueryParameters(e) : this.state,
                r = Z._getQueries(n.index, n),
                i = this
            if ((this._currentNbQueries++, this.emit('searchOnce', { state: n }), !t))
                return this.client.search(r).then(
                    function (e) {
                        return (
                            i._currentNbQueries--,
                            0 === i._currentNbQueries && i.emit('searchQueueEmpty'),
                            { content: new V(n, e.results), state: n, _originalResponse: e }
                        )
                    },
                    function (e) {
                        throw (
                            (i._currentNbQueries--,
                            0 === i._currentNbQueries && i.emit('searchQueueEmpty'),
                            e)
                        )
                    }
                )
            this.client
                .search(r)
                .then(function (e) {
                    i._currentNbQueries--,
                        0 === i._currentNbQueries && i.emit('searchQueueEmpty'),
                        t(null, new V(n, e.results), n)
                })
                .catch(function (e) {
                    i._currentNbQueries--,
                        0 === i._currentNbQueries && i.emit('searchQueueEmpty'),
                        t(e, null, n)
                })
        }),
        (te.prototype.searchForFacetValues = function (t, e, n, r) {
            var i = 'function' == typeof this.client.searchForFacetValues
            if (!i && 'function' != typeof this.client.initIndex)
                throw new Error(
                    'search for facet values (searchable) was called, but this client does not have a function client.searchForFacetValues or client.initIndex(index).searchForFacetValues'
                )
            var a = this.state.setQueryParameters(r || {}),
                s = a.isDisjunctiveFacet(t),
                o = Z.getSearchForFacetQuery(t, e, n, a)
            this._currentNbQueries++
            var c = this
            return (
                this.emit('searchForFacetValues', { state: a, facet: t, query: e }),
                (i
                    ? this.client.searchForFacetValues([{ indexName: a.index, params: o }])
                    : this.client.initIndex(a.index).searchForFacetValues(o)
                ).then(
                    function (e) {
                        return (
                            c._currentNbQueries--,
                            0 === c._currentNbQueries && c.emit('searchQueueEmpty'),
                            (e = Array.isArray(e) ? e[0] : e).facetHits.forEach(function (e) {
                                e.isRefined = s
                                    ? a.isDisjunctiveFacetRefined(t, e.value)
                                    : a.isFacetRefined(t, e.value)
                            }),
                            e
                        )
                    },
                    function (e) {
                        throw (
                            (c._currentNbQueries--,
                            0 === c._currentNbQueries && c.emit('searchQueueEmpty'),
                            e)
                        )
                    }
                )
            )
        }),
        (te.prototype.setQuery = function (e) {
            return (
                this._change({ state: this.state.resetPage().setQuery(e), isPageReset: !0 }), this
            )
        }),
        (te.prototype.clearRefinements = function (e) {
            return (
                this._change({
                    state: this.state.resetPage().clearRefinements(e),
                    isPageReset: !0
                }),
                this
            )
        }),
        (te.prototype.clearTags = function () {
            return (
                this._change({ state: this.state.resetPage().clearTags(), isPageReset: !0 }), this
            )
        }),
        (te.prototype.addDisjunctiveFacetRefinement = function (e, t) {
            return (
                this._change({
                    state: this.state.resetPage().addDisjunctiveFacetRefinement(e, t),
                    isPageReset: !0
                }),
                this
            )
        }),
        (te.prototype.addDisjunctiveRefine = function () {
            return this.addDisjunctiveFacetRefinement.apply(this, arguments)
        }),
        (te.prototype.addHierarchicalFacetRefinement = function (e, t) {
            return (
                this._change({
                    state: this.state.resetPage().addHierarchicalFacetRefinement(e, t),
                    isPageReset: !0
                }),
                this
            )
        }),
        (te.prototype.addNumericRefinement = function (e, t, n) {
            return (
                this._change({
                    state: this.state.resetPage().addNumericRefinement(e, t, n),
                    isPageReset: !0
                }),
                this
            )
        }),
        (te.prototype.addFacetRefinement = function (e, t) {
            return (
                this._change({
                    state: this.state.resetPage().addFacetRefinement(e, t),
                    isPageReset: !0
                }),
                this
            )
        }),
        (te.prototype.addRefine = function () {
            return this.addFacetRefinement.apply(this, arguments)
        }),
        (te.prototype.addFacetExclusion = function (e, t) {
            return (
                this._change({
                    state: this.state.resetPage().addExcludeRefinement(e, t),
                    isPageReset: !0
                }),
                this
            )
        }),
        (te.prototype.addExclude = function () {
            return this.addFacetExclusion.apply(this, arguments)
        }),
        (te.prototype.addTag = function (e) {
            return (
                this._change({
                    state: this.state.resetPage().addTagRefinement(e),
                    isPageReset: !0
                }),
                this
            )
        }),
        (te.prototype.removeNumericRefinement = function (e, t, n) {
            return (
                this._change({
                    state: this.state.resetPage().removeNumericRefinement(e, t, n),
                    isPageReset: !0
                }),
                this
            )
        }),
        (te.prototype.removeDisjunctiveFacetRefinement = function (e, t) {
            return (
                this._change({
                    state: this.state.resetPage().removeDisjunctiveFacetRefinement(e, t),
                    isPageReset: !0
                }),
                this
            )
        }),
        (te.prototype.removeDisjunctiveRefine = function () {
            return this.removeDisjunctiveFacetRefinement.apply(this, arguments)
        }),
        (te.prototype.removeHierarchicalFacetRefinement = function (e) {
            return (
                this._change({
                    state: this.state.resetPage().removeHierarchicalFacetRefinement(e),
                    isPageReset: !0
                }),
                this
            )
        }),
        (te.prototype.removeFacetRefinement = function (e, t) {
            return (
                this._change({
                    state: this.state.resetPage().removeFacetRefinement(e, t),
                    isPageReset: !0
                }),
                this
            )
        }),
        (te.prototype.removeRefine = function () {
            return this.removeFacetRefinement.apply(this, arguments)
        }),
        (te.prototype.removeFacetExclusion = function (e, t) {
            return (
                this._change({
                    state: this.state.resetPage().removeExcludeRefinement(e, t),
                    isPageReset: !0
                }),
                this
            )
        }),
        (te.prototype.removeExclude = function () {
            return this.removeFacetExclusion.apply(this, arguments)
        }),
        (te.prototype.removeTag = function (e) {
            return (
                this._change({
                    state: this.state.resetPage().removeTagRefinement(e),
                    isPageReset: !0
                }),
                this
            )
        }),
        (te.prototype.toggleFacetExclusion = function (e, t) {
            return (
                this._change({
                    state: this.state.resetPage().toggleExcludeFacetRefinement(e, t),
                    isPageReset: !0
                }),
                this
            )
        }),
        (te.prototype.toggleExclude = function () {
            return this.toggleFacetExclusion.apply(this, arguments)
        }),
        (te.prototype.toggleRefinement = function (e, t) {
            return this.toggleFacetRefinement(e, t)
        }),
        (te.prototype.toggleFacetRefinement = function (e, t) {
            return (
                this._change({
                    state: this.state.resetPage().toggleFacetRefinement(e, t),
                    isPageReset: !0
                }),
                this
            )
        }),
        (te.prototype.toggleRefine = function () {
            return this.toggleFacetRefinement.apply(this, arguments)
        }),
        (te.prototype.toggleTag = function (e) {
            return (
                this._change({
                    state: this.state.resetPage().toggleTagRefinement(e),
                    isPageReset: !0
                }),
                this
            )
        }),
        (te.prototype.nextPage = function () {
            var e = this.state.page || 0
            return this.setPage(e + 1)
        }),
        (te.prototype.previousPage = function () {
            var e = this.state.page || 0
            return this.setPage(e - 1)
        }),
        (te.prototype.setCurrentPage = ne),
        (te.prototype.setPage = ne),
        (te.prototype.setIndex = function (e) {
            return (
                this._change({ state: this.state.resetPage().setIndex(e), isPageReset: !0 }), this
            )
        }),
        (te.prototype.setQueryParameter = function (e, t) {
            return (
                this._change({
                    state: this.state.resetPage().setQueryParameter(e, t),
                    isPageReset: !0
                }),
                this
            )
        }),
        (te.prototype.setState = function (e) {
            return this._change({ state: P.make(e), isPageReset: !1 }), this
        }),
        (te.prototype.overrideStateWithoutTriggeringChangeEvent = function (e) {
            return (this.state = new P(e)), this
        }),
        (te.prototype.hasRefinements = function (e) {
            return (
                !!d(this.state.getNumericRefinements(e)) ||
                (this.state.isConjunctiveFacet(e)
                    ? this.state.isFacetRefined(e)
                    : this.state.isDisjunctiveFacet(e)
                    ? this.state.isDisjunctiveFacetRefined(e)
                    : !!this.state.isHierarchicalFacet(e) &&
                      this.state.isHierarchicalFacetRefined(e))
            )
        }),
        (te.prototype.isExcluded = function (e, t) {
            return this.state.isExcludeRefined(e, t)
        }),
        (te.prototype.isDisjunctiveRefined = function (e, t) {
            return this.state.isDisjunctiveFacetRefined(e, t)
        }),
        (te.prototype.hasTag = function (e) {
            return this.state.isTagRefined(e)
        }),
        (te.prototype.isTagRefined = function () {
            return this.hasTagRefinements.apply(this, arguments)
        }),
        (te.prototype.getIndex = function () {
            return this.state.index
        }),
        (te.prototype.getCurrentPage = re),
        (te.prototype.getPage = re),
        (te.prototype.getTags = function () {
            return this.state.tagRefinements
        }),
        (te.prototype.getRefinements = function (e) {
            var n = []
            if (this.state.isConjunctiveFacet(e))
                this.state.getConjunctiveRefinements(e).forEach(function (e) {
                    n.push({ value: e, type: 'conjunctive' })
                }),
                    this.state.getExcludeRefinements(e).forEach(function (e) {
                        n.push({ value: e, type: 'exclude' })
                    })
            else if (this.state.isDisjunctiveFacet(e)) {
                this.state.getDisjunctiveRefinements(e).forEach(function (e) {
                    n.push({ value: e, type: 'disjunctive' })
                })
            }
            var r = this.state.getNumericRefinements(e)
            return (
                Object.keys(r).forEach(function (e) {
                    var t = r[e]
                    n.push({ value: t, operator: e, type: 'numeric' })
                }),
                n
            )
        }),
        (te.prototype.getNumericRefinement = function (e, t) {
            return this.state.getNumericRefinement(e, t)
        }),
        (te.prototype.getHierarchicalFacetBreadcrumb = function (e) {
            return this.state.getHierarchicalFacetBreadcrumb(e)
        }),
        (te.prototype._search = function (e) {
            var r = this.state,
                i = [],
                t = []
            e.onlyWithDerivedHelpers ||
                ((t = Z._getQueries(r.index, r)),
                i.push({ state: r, queriesCount: t.length, helper: this }),
                this.emit('search', { state: r, results: this.lastResults }))
            var n = this.derivedHelpers.map(function (e) {
                    var t = e.getModifiedState(r),
                        n = Z._getQueries(t.index, t)
                    return (
                        i.push({ state: t, queriesCount: n.length, helper: e }),
                        e.emit('search', { state: t, results: e.lastResults }),
                        n
                    )
                }),
                a = Array.prototype.concat.apply(t, n),
                s = this._queryId++
            this._currentNbQueries++
            try {
                this.client
                    .search(a)
                    .then(this._dispatchAlgoliaResponse.bind(this, i, s))
                    .catch(this._dispatchAlgoliaError.bind(this, s))
            } catch (e) {
                this.emit('error', { error: e })
            }
        }),
        (te.prototype._dispatchAlgoliaResponse = function (e, t, n) {
            if (!(t < this._lastQueryIdReceived)) {
                ;(this._currentNbQueries -= t - this._lastQueryIdReceived),
                    (this._lastQueryIdReceived = t),
                    0 === this._currentNbQueries && this.emit('searchQueueEmpty')
                var s = n.results.slice()
                e.forEach(function (e) {
                    var t = e.state,
                        n = e.queriesCount,
                        r = e.helper,
                        i = s.splice(0, n),
                        a = (r.lastResults = new V(t, i))
                    r.emit('result', { results: a, state: t })
                })
            }
        }),
        (te.prototype._dispatchAlgoliaError = function (e, t) {
            e < this._lastQueryIdReceived ||
                ((this._currentNbQueries -= e - this._lastQueryIdReceived),
                (this._lastQueryIdReceived = e),
                this.emit('error', { error: t }),
                0 === this._currentNbQueries && this.emit('searchQueueEmpty'))
        }),
        (te.prototype.containsRefinement = function (e, t, n, r) {
            return e || 0 !== t.length || 0 !== n.length || 0 !== r.length
        }),
        (te.prototype._hasDisjunctiveRefinements = function (e) {
            return (
                this.state.disjunctiveRefinements[e] &&
                0 < this.state.disjunctiveRefinements[e].length
            )
        }),
        (te.prototype._change = function (e) {
            var t = e.state,
                n = e.isPageReset
            t !== this.state &&
                ((this.state = t),
                this.emit('change', {
                    state: this.state,
                    results: this.lastResults,
                    isPageReset: n
                }))
        }),
        (te.prototype.clearCache = function () {
            return this.client.clearCache && this.client.clearCache(), this
        }),
        (te.prototype.setClient = function (e) {
            return (
                this.client === e ||
                    ('function' == typeof e.addAlgoliaAgent &&
                        e.addAlgoliaAgent('JS Helper (3.1.1)'),
                    (this.client = e)),
                this
            )
        }),
        (te.prototype.getClient = function () {
            return this.client
        }),
        (te.prototype.derive = function (e) {
            var t = new X(this, e)
            return this.derivedHelpers.push(t), t
        }),
        (te.prototype.detachDerivedHelper = function (e) {
            var t = this.derivedHelpers.indexOf(e)
            if (-1 === t) throw new Error('Derived helper already detached')
            this.derivedHelpers.splice(t, 1)
        }),
        (te.prototype.hasPendingRequests = function () {
            return 0 < this._currentNbQueries
        })
    var ie = te
    function ae(e, t, n) {
        return new ie(e, t, n)
    }
    ;(ae.version = ee),
        (ae.AlgoliaSearchHelper = ie),
        (ae.SearchParameters = P),
        (ae.SearchResults = V)
    var se = ae
    function oe(r) {
        function e() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n]
            null === i &&
                (i = ce.then(function () {
                    ;(i = null), a ? (a = !1) : r.apply(void 0, t)
                }))
        }
        var i = null,
            a = !1
        return (
            (e.wait = function () {
                if (null === i)
                    throw new Error(
                        'The deferred function should be called before calling `wait()`'
                    )
                return i
            }),
            (e.cancel = function () {
                null !== i && (a = !0)
            }),
            e
        )
    }
    var ce = Promise.resolve()
    function ue(e) {
        var t = 'string' == typeof e,
            n = t ? document.querySelector(e) : e
        if (
            (function (e) {
                return e instanceof HTMLElement || (Boolean(e) && 0 < e.nodeType)
            })(n)
        )
            return n
        var r = 'Container must be `string` or `HTMLElement`.'
        throw (t && (r += ' Unable to find '.concat(e)), new Error(r))
    }
    function le(e) {
        return 1 === e.button || e.altKey || e.ctrlKey || e.metaKey || e.shiftKey
    }
    function he(e) {
        return e.filter(function (e, t, n) {
            return n.indexOf(e) === t
        })
    }
    function fe(e) {
        var t = e.defaultTemplates,
            n = e.templates
        return D(
            { templatesConfig: e.templatesConfig },
            (function (e, t) {
                var a = 0 < arguments.length && void 0 !== e ? e : {},
                    s = 1 < arguments.length && void 0 !== t ? t : {}
                return he([].concat(w(Object.keys(a)), w(Object.keys(s)))).reduce(
                    function (e, t) {
                        var n = a[t],
                            r = s[t],
                            i = void 0 !== r && r !== n
                        return (e.templates[t] = i ? r : n), (e.useCustomCompileOptions[t] = i), e
                    },
                    { templates: {}, useCustomCompileOptions: {} }
                )
            })(t, n)
        )
    }
    function de(e) {
        return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
            ? e.default
            : e
    }
    function me(e, t) {
        return e((t = { exports: {} }), t.exports), t.exports
    }
    var pe = me(function (e, t) {
            !(function (R) {
                var w = /\S/,
                    t = /\"/g,
                    n = /\n/g,
                    r = /\r/g,
                    i = /\\/g,
                    a = /\u2028/,
                    s = /\u2029/
                function S(e) {
                    '}' === e.n.substr(e.n.length - 1) && (e.n = e.n.substring(0, e.n.length - 1))
                }
                function P(e) {
                    return e.trim ? e.trim() : e.replace(/^\s*|\s*$/g, '')
                }
                function _(e, t, n) {
                    if (t.charAt(n) != e.charAt(0)) return !1
                    for (var r = 1, i = e.length; r < i; r++)
                        if (t.charAt(n + r) != e.charAt(r)) return !1
                    return !0
                }
                ;(R.tags = {
                    '#': 1,
                    '^': 2,
                    '<': 3,
                    $: 4,
                    '/': 5,
                    '!': 6,
                    '>': 7,
                    '=': 8,
                    _v: 9,
                    '{': 10,
                    '&': 11,
                    _t: 12
                }),
                    (R.scan = function (e, t) {
                        var n,
                            r,
                            i,
                            a,
                            s,
                            o = e.length,
                            c = 0,
                            u = null,
                            l = null,
                            h = '',
                            f = [],
                            d = !1,
                            m = 0,
                            p = 0,
                            g = '{{',
                            v = '}}'
                        function y() {
                            0 < h.length && (f.push({ tag: '_t', text: new String(h) }), (h = ''))
                        }
                        function b(e, t) {
                            if (
                                (y(),
                                e &&
                                    (function () {
                                        for (var e = !0, t = p; t < f.length; t++)
                                            if (
                                                !(e =
                                                    R.tags[f[t].tag] < R.tags._v ||
                                                    ('_t' == f[t].tag &&
                                                        null === f[t].text.match(w)))
                                            )
                                                return !1
                                        return e
                                    })())
                            )
                                for (var n, r = p; r < f.length; r++)
                                    f[r].text &&
                                        ((n = f[r + 1]) &&
                                            '>' == n.tag &&
                                            (n.indent = f[r].text.toString()),
                                        f.splice(r, 1))
                            else t || f.push({ tag: '\n' })
                            ;(d = !1), (p = f.length)
                        }
                        for (t && ((t = t.split(' ')), (g = t[0]), (v = t[1])), m = 0; m < o; m++)
                            0 == c
                                ? _(g, e, m)
                                    ? (--m, y(), (c = 1))
                                    : '\n' == e.charAt(m)
                                    ? b(d)
                                    : (h += e.charAt(m))
                                : 1 == c
                                ? ((m += g.length - 1),
                                  (c =
                                      '=' ==
                                      (u = (l = R.tags[e.charAt(m + 1)]) ? e.charAt(m + 1) : '_v')
                                          ? ((r = m),
                                            void 0,
                                            (i = '=' + v),
                                            (a = (n = e).indexOf(i, r)),
                                            (s = P(n.substring(n.indexOf('=', r) + 1, a)).split(
                                                ' '
                                            )),
                                            (g = s[0]),
                                            (v = s[s.length - 1]),
                                            (m = a + i.length - 1),
                                            0)
                                          : (l && m++, 2)),
                                  (d = m))
                                : _(v, e, m)
                                ? (f.push({
                                      tag: u,
                                      n: P(h),
                                      otag: g,
                                      ctag: v,
                                      i: '/' == u ? d - g.length : m + v.length
                                  }),
                                  (h = ''),
                                  (m += v.length - 1),
                                  (c = 0),
                                  '{' == u && ('}}' == v ? m++ : S(f[f.length - 1])))
                                : (h += e.charAt(m))
                        return b(d, !0), f
                    })
                var u = { _t: !0, '\n': !0, $: !0, '/': !0 }
                function l(e, t) {
                    for (var n = 0, r = t.length; n < r; n++)
                        if (t[n].o == e.n) return (e.tag = '#'), !0
                }
                function h(e, t, n) {
                    for (var r = 0, i = n.length; r < i; r++)
                        if (n[r].c == e && n[r].o == t) return !0
                }
                function o(e) {
                    var t = []
                    for (var n in e.partials)
                        t.push(
                            '"' +
                                f(n) +
                                '":{name:"' +
                                f(e.partials[n].name) +
                                '", ' +
                                o(e.partials[n]) +
                                '}'
                        )
                    return (
                        'partials: {' +
                        t.join(',') +
                        '}, subs: ' +
                        (function (e) {
                            var t = []
                            for (var n in e)
                                t.push('"' + f(n) + '": function(c,p,t,i) {' + e[n] + '}')
                            return '{ ' + t.join(',') + ' }'
                        })(e.subs)
                    )
                }
                R.stringify = function (e, t, n) {
                    return '{code: function (c,p,i) { ' + R.wrapMain(e.code) + ' },' + o(e) + '}'
                }
                var c = 0
                function f(e) {
                    return e
                        .replace(i, '\\\\')
                        .replace(t, '\\"')
                        .replace(n, '\\n')
                        .replace(r, '\\r')
                        .replace(a, '\\u2028')
                        .replace(s, '\\u2029')
                }
                function d(e) {
                    return ~e.indexOf('.') ? 'd' : 'f'
                }
                function m(e, t) {
                    var n = '<' + (t.prefix || '') + e.n + c++
                    return (
                        (t.partials[n] = { name: e.n, partials: {} }),
                        (t.code += 't.b(t.rp("' + f(n) + '",c,p,"' + (e.indent || '') + '"));'),
                        n
                    )
                }
                function e(e, t) {
                    t.code += 't.b(t.t(t.' + d(e.n) + '("' + f(e.n) + '",c,p,0)));'
                }
                function p(e) {
                    return 't.b(' + e + ');'
                }
                ;(R.generate = function (e, t, n) {
                    c = 0
                    var r = { code: '', subs: {}, partials: {} }
                    return (
                        R.walk(e, r),
                        n.asString ? this.stringify(r, t, n) : this.makeTemplate(r, t, n)
                    )
                }),
                    (R.wrapMain = function (e) {
                        return 'var t=this;t.b(i=i||"");' + e + 'return t.fl();'
                    }),
                    (R.template = R.Template),
                    (R.makeTemplate = function (e, t, n) {
                        var r = this.makePartials(e)
                        return (
                            (r.code = new Function('c', 'p', 'i', this.wrapMain(e.code))),
                            new this.template(r, t, this, n)
                        )
                    }),
                    (R.makePartials = function (e) {
                        var t,
                            n = { subs: {}, partials: e.partials, name: e.name }
                        for (t in n.partials) n.partials[t] = this.makePartials(n.partials[t])
                        for (t in e.subs) n.subs[t] = new Function('c', 'p', 't', 'i', e.subs[t])
                        return n
                    }),
                    (R.codegen = {
                        '#': function (e, t) {
                            ;(t.code +=
                                'if(t.s(t.' +
                                d(e.n) +
                                '("' +
                                f(e.n) +
                                '",c,p,1),c,p,0,' +
                                e.i +
                                ',' +
                                e.end +
                                ',"' +
                                e.otag +
                                ' ' +
                                e.ctag +
                                '")){t.rs(c,p,function(c,p,t){'),
                                R.walk(e.nodes, t),
                                (t.code += '});c.pop();}')
                        },
                        '^': function (e, t) {
                            ;(t.code +=
                                'if(!t.s(t.' + d(e.n) + '("' + f(e.n) + '",c,p,1),c,p,1,0,0,"")){'),
                                R.walk(e.nodes, t),
                                (t.code += '};')
                        },
                        '>': m,
                        '<': function (e, t) {
                            var n = { partials: {}, code: '', subs: {}, inPartial: !0 }
                            R.walk(e.nodes, n)
                            var r = t.partials[m(e, t)]
                            ;(r.subs = n.subs), (r.partials = n.partials)
                        },
                        $: function (e, t) {
                            var n = { subs: {}, code: '', partials: t.partials, prefix: e.n }
                            R.walk(e.nodes, n),
                                (t.subs[e.n] = n.code),
                                t.inPartial || (t.code += 't.sub("' + f(e.n) + '",c,p,i);')
                        },
                        '\n': function (e, t) {
                            t.code += p('"\\n"' + (e.last ? '' : ' + i'))
                        },
                        _v: function (e, t) {
                            t.code += 't.b(t.v(t.' + d(e.n) + '("' + f(e.n) + '",c,p,0)));'
                        },
                        _t: function (e, t) {
                            t.code += p('"' + f(e.text) + '"')
                        },
                        '{': e,
                        '&': e
                    }),
                    (R.walk = function (e, t) {
                        for (var n, r = 0, i = e.length; r < i; r++)
                            (n = R.codegen[e[r].tag]) && n(e[r], t)
                        return t
                    }),
                    (R.parse = function (e, t, n) {
                        return (function e(t, n, r, i) {
                            var a,
                                s = [],
                                o = null,
                                c = null
                            for (a = r[r.length - 1]; 0 < t.length; ) {
                                if (((c = t.shift()), a && '<' == a.tag && !(c.tag in u)))
                                    throw new Error('Illegal content in < super tag.')
                                if (R.tags[c.tag] <= R.tags.$ || l(c, i))
                                    r.push(c), (c.nodes = e(t, c.tag, r, i))
                                else {
                                    if ('/' == c.tag) {
                                        if (0 === r.length)
                                            throw new Error('Closing tag without opener: /' + c.n)
                                        if (((o = r.pop()), c.n != o.n && !h(c.n, o.n, i)))
                                            throw new Error('Nesting error: ' + o.n + ' vs. ' + c.n)
                                        return (o.end = c.i), s
                                    }
                                    '\n' == c.tag && (c.last = 0 == t.length || '\n' == t[0].tag)
                                }
                                s.push(c)
                            }
                            if (0 < r.length) throw new Error('missing closing tag: ' + r.pop().n)
                            return s
                        })(e, 0, [], (n = n || {}).sectionTags || [])
                    }),
                    (R.cache = {}),
                    (R.cacheKey = function (e, t) {
                        return [
                            e,
                            !!t.asString,
                            !!t.disableLambda,
                            t.delimiters,
                            !!t.modelGet
                        ].join('||')
                    }),
                    (R.compile = function (e, t) {
                        t = t || {}
                        var n = R.cacheKey(e, t),
                            r = this.cache[n]
                        if (r) {
                            var i = r.partials
                            for (var a in i) delete i[a].instance
                            return r
                        }
                        return (
                            (r = this.generate(this.parse(this.scan(e, t.delimiters), e, t), e, t)),
                            (this.cache[n] = r)
                        )
                    })
            })(t)
        }),
        ge = me(function (e, t) {
            !(function (e) {
                function l(e, t, n) {
                    var r
                    return (
                        t &&
                            'object' == typeof t &&
                            (void 0 !== t[e]
                                ? (r = t[e])
                                : n && t.get && 'function' == typeof t.get && (r = t.get(e))),
                        r
                    )
                }
                ;(e.Template = function (e, t, n, r) {
                    ;(e = e || {}),
                        (this.r = e.code || this.r),
                        (this.c = n),
                        (this.options = r || {}),
                        (this.text = t || ''),
                        (this.partials = e.partials || {}),
                        (this.subs = e.subs || {}),
                        (this.buf = '')
                }),
                    (e.Template.prototype = {
                        r: function (e, t, n) {
                            return ''
                        },
                        v: function (e) {
                            return (
                                (e = o(e)),
                                s.test(e)
                                    ? e
                                          .replace(t, '&amp;')
                                          .replace(n, '&lt;')
                                          .replace(r, '&gt;')
                                          .replace(i, '&#39;')
                                          .replace(a, '&quot;')
                                    : e
                            )
                        },
                        t: o,
                        render: function (e, t, n) {
                            return this.ri([e], t || {}, n)
                        },
                        ri: function (e, t, n) {
                            return this.r(e, t, n)
                        },
                        ep: function (e, t) {
                            var n = this.partials[e],
                                r = t[n.name]
                            if (n.instance && n.base == r) return n.instance
                            if ('string' == typeof r) {
                                if (!this.c) throw new Error('No compiler available.')
                                r = this.c.compile(r, this.options)
                            }
                            if (!r) return null
                            if (((this.partials[e].base = r), n.subs)) {
                                for (key in (t.stackText || (t.stackText = {}), n.subs))
                                    t.stackText[key] ||
                                        (t.stackText[key] =
                                            void 0 !== this.activeSub && t.stackText[this.activeSub]
                                                ? t.stackText[this.activeSub]
                                                : this.text)
                                r = (function (e, t, n, r, i, a) {
                                    function s() {}
                                    function o() {}
                                    var c
                                    o.prototype = (s.prototype = e).subs
                                    var u = new s()
                                    for (c in ((u.subs = new o()),
                                    (u.subsText = {}),
                                    (u.buf = ''),
                                    (r = r || {}),
                                    (u.stackSubs = r),
                                    (u.subsText = a),
                                    t))
                                        r[c] || (r[c] = t[c])
                                    for (c in r) u.subs[c] = r[c]
                                    for (c in ((i = i || {}), (u.stackPartials = i), n))
                                        i[c] || (i[c] = n[c])
                                    for (c in i) u.partials[c] = i[c]
                                    return u
                                })(
                                    r,
                                    n.subs,
                                    n.partials,
                                    this.stackSubs,
                                    this.stackPartials,
                                    t.stackText
                                )
                            }
                            return (this.partials[e].instance = r)
                        },
                        rp: function (e, t, n, r) {
                            var i = this.ep(e, n)
                            return i ? i.ri(t, n, r) : ''
                        },
                        rs: function (e, t, n) {
                            var r = e[e.length - 1]
                            if (h(r))
                                for (var i = 0; i < r.length; i++)
                                    e.push(r[i]), n(e, t, this), e.pop()
                            else n(e, t, this)
                        },
                        s: function (e, t, n, r, i, a, s) {
                            var o
                            return (
                                (!h(e) || 0 !== e.length) &&
                                ('function' == typeof e && (e = this.ms(e, t, n, r, i, a, s)),
                                (o = !!e),
                                !r && o && t && t.push('object' == typeof e ? e : t[t.length - 1]),
                                o)
                            )
                        },
                        d: function (e, t, n, r) {
                            var i,
                                a = e.split('.'),
                                s = this.f(a[0], t, n, r),
                                o = this.options.modelGet,
                                c = null
                            if ('.' === e && h(t[t.length - 2])) s = t[t.length - 1]
                            else
                                for (var u = 1; u < a.length; u++)
                                    s = void 0 !== (i = l(a[u], s, o)) ? ((c = s), i) : ''
                            return (
                                !(r && !s) &&
                                (r ||
                                    'function' != typeof s ||
                                    (t.push(c), (s = this.mv(s, t, n)), t.pop()),
                                s)
                            )
                        },
                        f: function (e, t, n, r) {
                            for (
                                var i = !1, a = !1, s = this.options.modelGet, o = t.length - 1;
                                0 <= o;
                                o--
                            )
                                if (void 0 !== (i = l(e, t[o], s))) {
                                    a = !0
                                    break
                                }
                            return a
                                ? (r || 'function' != typeof i || (i = this.mv(i, t, n)), i)
                                : !r && ''
                        },
                        ls: function (e, t, n, r, i) {
                            var a = this.options.delimiters
                            return (
                                (this.options.delimiters = i),
                                this.b(this.ct(o(e.call(t, r)), t, n)),
                                (this.options.delimiters = a),
                                !1
                            )
                        },
                        ct: function (e, t, n) {
                            if (this.options.disableLambda)
                                throw new Error('Lambda features disabled.')
                            return this.c.compile(e, this.options).render(t, n)
                        },
                        b: function (e) {
                            this.buf += e
                        },
                        fl: function () {
                            var e = this.buf
                            return (this.buf = ''), e
                        },
                        ms: function (e, t, n, r, i, a, s) {
                            var o,
                                c = t[t.length - 1],
                                u = e.call(c)
                            return 'function' == typeof u
                                ? !!r ||
                                      ((o =
                                          this.activeSub &&
                                          this.subsText &&
                                          this.subsText[this.activeSub]
                                              ? this.subsText[this.activeSub]
                                              : this.text),
                                      this.ls(u, c, n, o.substring(i, a), s))
                                : u
                        },
                        mv: function (e, t, n) {
                            var r = t[t.length - 1],
                                i = e.call(r)
                            return 'function' == typeof i ? this.ct(o(i.call(r)), r, n) : i
                        },
                        sub: function (e, t, n, r) {
                            var i = this.subs[e]
                            i && ((this.activeSub = e), i(t, n, this, r), (this.activeSub = !1))
                        }
                    })
                var t = /&/g,
                    n = /</g,
                    r = />/g,
                    i = /\'/g,
                    a = /\"/g,
                    s = /[&<>\"\']/
                function o(e) {
                    return String(null == e ? '' : e)
                }
                var h =
                    Array.isArray ||
                    function (e) {
                        return '[object Array]' === Object.prototype.toString.call(e)
                    }
            })(t)
        })
    ;(pe.Template = ge.Template), (pe.template = pe.Template)
    var ve = pe
    function ye(e) {
        var t = e.templates,
            n = e.templateKey,
            r = e.compileOptions,
            i = e.helpers,
            a = e.data,
            s = t[n],
            o = l(s),
            c = 'function' === o
        if (!('string' === o) && !c)
            throw new Error(
                "Template must be 'string' or 'function', was '"
                    .concat(o, "' (key: ")
                    .concat(n, ')')
            )
        if (c) return s(a)
        var u = (function (e, t, n) {
            var r = 0 < arguments.length && void 0 !== e ? e : {},
                i = 1 < arguments.length ? t : void 0,
                a = 2 < arguments.length ? n : void 0
            return Object.keys(r).reduce(function (e, n) {
                return D(
                    {},
                    e,
                    C({}, n, function () {
                        var t = this
                        return function (e) {
                            return r[n].call(a, e, function (e) {
                                return ve.compile(e, i).render(t)
                            })
                        }
                    })
                )
            }, {})
        })(i, r, a)
        return ve
            .compile(s, r)
            .render(D({}, a, { helpers: u }))
            .replace(/[ \n\r\t\f\xA0]+/g, function (e) {
                return e.replace(/(^|\xA0+)[^\xA0]+/g, '$1 ')
            })
            .trim()
    }
    function be(e, t, n) {
        return Array.prototype.find ? e.find(t, n) : e.filter(t, n)[0]
    }
    function Re(e) {
        return String(e).replace(/^\\-/, '-')
    }
    function we(i, e, a, s, t) {
        var o,
            n = { type: e, attribute: a, name: s },
            c = be(4 < arguments.length && void 0 !== t ? t : [], function (e) {
                return e.name === a
            })
        'hierarchical' === e
            ? (function () {
                  for (
                      var e = i.getHierarchicalFacetByName(a),
                          n = s.split(e.separator),
                          t = function (t) {
                              c =
                                  c &&
                                  c.data &&
                                  be(
                                      Object.keys(c.data).map(
                                          (function (t) {
                                              return function (e) {
                                                  return t[e]
                                              }
                                          })(c.data)
                                      ),
                                      function (e) {
                                          return e.name === n[t]
                                      }
                                  )
                          },
                          r = 0;
                      void 0 !== c && r < n.length;
                      ++r
                  )
                      t(r)
                  o = c && c.count
              })()
            : (o = c && c.data && c.data[n.name])
        var r = c && c.exhaustive
        return void 0 !== o && (n.count = o), void 0 !== r && (n.exhaustive = r), n
    }
    function Se(n, r, e) {
        var t = 2 < arguments.length && void 0 !== e && e,
            a = [],
            i = r.facetsRefinements,
            s = void 0 === i ? {} : i,
            o = r.facetsExcludes,
            c = void 0 === o ? {} : o,
            u = r.disjunctiveFacetsRefinements,
            l = void 0 === u ? {} : u,
            h = r.hierarchicalFacetsRefinements,
            f = void 0 === h ? {} : h,
            d = r.numericRefinements,
            m = void 0 === d ? {} : d,
            p = r.tagRefinements,
            g = void 0 === p ? [] : p
        return (
            Object.keys(s).forEach(function (t) {
                s[t].forEach(function (e) {
                    a.push(we(r, 'facet', t, e, n.facets))
                })
            }),
            Object.keys(c).forEach(function (t) {
                c[t].forEach(function (e) {
                    a.push({ type: 'exclude', attribute: t, name: e, exclude: !0 })
                })
            }),
            Object.keys(l).forEach(function (t) {
                l[t].forEach(function (e) {
                    a.push(we(r, 'disjunctive', t, Re(e), n.disjunctiveFacets))
                })
            }),
            Object.keys(f).forEach(function (t) {
                f[t].forEach(function (e) {
                    a.push(we(r, 'hierarchical', t, e, n.hierarchicalFacets))
                })
            }),
            Object.keys(m).forEach(function (r) {
                var i = m[r]
                Object.keys(i).forEach(function (e) {
                    var t = e,
                        n = i[t]
                    ;(Array.isArray(n) ? n : [n]).forEach(function (e) {
                        a.push({
                            type: 'numeric',
                            attribute: r,
                            name: ''.concat(e),
                            numericValue: e,
                            operator: t
                        })
                    })
                })
            }),
            g.forEach(function (e) {
                a.push({ type: 'tag', attribute: '_tags', name: e })
            }),
            t &&
                r.query &&
                r.query.trim() &&
                a.push({ attribute: 'query', type: 'query', name: r.query, query: r.query }),
            a
        )
    }
    function Pe(e) {
        var t = e.helper,
            n = e.attributesToClear,
            r = void 0 === n ? [] : n,
            i = t.state.setPage(0)
        return (
            (i = r.reduce(function (e, t) {
                return i.isNumericRefined(t)
                    ? e.removeNumericRefinement(t)
                    : i.isHierarchicalFacet(t)
                    ? e.removeHierarchicalFacetRefinement(t)
                    : i.isDisjunctiveFacet(t)
                    ? e.removeDisjunctiveFacetRefinement(t)
                    : i.isConjunctiveFacet(t)
                    ? e.removeFacetRefinement(t)
                    : e
            }, i)),
            -1 !== r.indexOf('query') && (i = i.setQuery('')),
            i
        )
    }
    function _e(e) {
        return 'number' == typeof e && e < 0 && (e = String(e).replace(/^-/, '\\-')), e
    }
    function xe(e, t) {
        if (void 0 === e || 'function' != typeof e)
            throw new Error(
                'The render function is not valid (received type '
                    .concat(
                        (function (e) {
                            return Object.prototype.toString.call(e).slice(8, -1)
                        })(e),
                        ').\n\n'
                    )
                    .concat(t)
            )
    }
    function Ne(e, t) {
        return t.split('.').reduce(function (e, t) {
            return e && e[t]
        }, e)
    }
    function Fe() {}
    function Ce(e) {
        return 'number' == typeof e && isFinite(e)
    }
    function Ie(e) {
        if (
            !(function (e) {
                return 'object' === l(e) && null !== e
            })(e) ||
            '[object Object]' !==
                (function (e) {
                    return null === e
                        ? void 0 === e
                            ? '[object Undefined]'
                            : '[object Null]'
                        : Object.prototype.toString.call(e)
                })(e)
        )
            return !1
        if (null === Object.getPrototypeOf(e)) return !0
        for (var t = e; null !== Object.getPrototypeOf(t); ) t = Object.getPrototypeOf(t)
        return Object.getPrototypeOf(e) === t
    }
    function Me(e) {
        var t = e.start,
            n = void 0 === t ? 0 : t,
            r = e.end,
            i = e.step,
            a = void 0 === i ? 1 : i,
            s = 0 === a ? 1 : a,
            o = Math.round((r - n) / s)
        return w(Array(o)).map(function (e, t) {
            return (n + t) * s
        })
    }
    function Le(e) {
        return e !== Object(e)
    }
    function Te(e, t) {
        if (e === t) return !0
        if (Le(e) || Le(t) || 'function' == typeof e || 'function' == typeof t) return e === t
        if (Object.keys(e).length !== Object.keys(t).length) return !1
        for (var n = 0, r = Object.keys(e); n < r.length; n++) {
            var i = r[n]
            if (!(i in t)) return !1
            if (!Te(e[i], t[i])) return !1
        }
        return !0
    }
    var ke = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' },
        je = /[&<>"']/g,
        Ee = RegExp(je.source)
    function Oe(e, t) {
        return e.setQueryParameters({
            hierarchicalFacets: t.hierarchicalFacets.reduce(function (e, t) {
                var n = (function (e, t) {
                    if (!Array.isArray(e)) return -1
                    for (var n = 0; n < e.length; n++) if (t(e[n])) return n
                    return -1
                })(e, function (e) {
                    return e.name === t.name
                })
                if (-1 === n) return e.concat(t)
                var r = e.slice()
                return r.splice(n, 1, t), r
            }, e.hierarchicalFacets)
        })
    }
    function Ae() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n]
        var r = t
            .map(function (e) {
                return (function (e) {
                    var t = e.name,
                        n = e.connector
                    return [
                        'https://www.algolia.com/doc/api-reference/widgets/',
                        t,
                        '/js/',
                        void 0 !== n && n ? '#connector' : ''
                    ].join('')
                })(e)
            })
            .join(', ')
        return function (e) {
            return [e, 'See documentation: '.concat(r)].filter(Boolean).join('\n\n')
        }
    }
    var He = function () {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n]
            return t.reduce(function (e, t) {
                var n = (function (e, t) {
                    return e.setQueryParameters({
                        hierarchicalFacetsRefinements: D(
                            {},
                            e.hierarchicalFacetsRefinements,
                            {},
                            t.hierarchicalFacetsRefinements
                        )
                    })
                })(e, t)
                return (function (e, t) {
                    t.facets,
                        t.disjunctiveFacets,
                        t.facetsRefinements,
                        t.facetsExcludes,
                        t.disjunctiveFacetsRefinements,
                        t.numericRefinements,
                        t.tagRefinements,
                        t.hierarchicalFacets,
                        t.hierarchicalFacetsRefinements,
                        t.ruleContexts
                    var n = O(t, [
                        'facets',
                        'disjunctiveFacets',
                        'facetsRefinements',
                        'facetsExcludes',
                        'disjunctiveFacetsRefinements',
                        'numericRefinements',
                        'tagRefinements',
                        'hierarchicalFacets',
                        'hierarchicalFacetsRefinements',
                        'ruleContexts'
                    ])
                    return e.setQueryParameters(n)
                })(
                    (function (e, t) {
                        return t.facets.reduce(function (e, t) {
                            return e.addFacet(t)
                        }, e)
                    })(
                        (function (e, t) {
                            var n = he(
                                [].concat(e.ruleContexts).concat(t.ruleContexts).filter(Boolean)
                            )
                            return 0 < n.length ? e.setQueryParameters({ ruleContexts: n }) : e
                        })(
                            (function (e, t) {
                                return t.disjunctiveFacets.reduce(function (e, t) {
                                    return e.addDisjunctiveFacet(t)
                                }, e)
                            })(
                                (function (e, t) {
                                    return e.setQueryParameters({
                                        facetsRefinements: D(
                                            {},
                                            e.facetsRefinements,
                                            {},
                                            t.facetsRefinements
                                        )
                                    })
                                })(
                                    (function (e, t) {
                                        return e.setQueryParameters({
                                            facetsExcludes: D(
                                                {},
                                                e.facetsExcludes,
                                                {},
                                                t.facetsExcludes
                                            )
                                        })
                                    })(
                                        (function (e, t) {
                                            return e.setQueryParameters({
                                                disjunctiveFacetsRefinements: D(
                                                    {},
                                                    e.disjunctiveFacetsRefinements,
                                                    {},
                                                    t.disjunctiveFacetsRefinements
                                                )
                                            })
                                        })(
                                            (function (e, t) {
                                                return e.setQueryParameters({
                                                    numericRefinements: D(
                                                        {},
                                                        e.numericRefinements,
                                                        {},
                                                        t.numericRefinements
                                                    )
                                                })
                                            })(
                                                (function (e, t) {
                                                    return t.tagRefinements.reduce(function (e, t) {
                                                        return e.addTagRefinement(t)
                                                    }, e)
                                                })(Oe(n, t), t),
                                                t
                                            ),
                                            t
                                        ),
                                        t
                                    ),
                                    t
                                ),
                                t
                            ),
                            t
                        ),
                        t
                    ),
                    t
                )
            })
        },
        De = /^(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)$/
    function Be(e) {
        return Array.isArray(e)
            ? (function (e) {
                  var t = B(e, 1)[0],
                      n = B((t = void 0 === t ? [void 0, void 0, void 0, void 0] : t), 4),
                      r = n[0],
                      i = n[1],
                      a = n[2],
                      s = n[3]
                  if (!(r && i && a && s))
                      throw new Error(
                          'Invalid value for "insideBoundingBox" parameter: ['.concat(e, ']')
                      )
                  return { northEast: { lat: r, lng: i }, southWest: { lat: a, lng: s } }
              })(e)
            : (function (e) {
                  var t = B(e.split(',').map(parseFloat), 4),
                      n = t[0],
                      r = t[1],
                      i = t[2],
                      a = t[3]
                  if (!(n && r && i && a))
                      throw new Error(
                          'Invalid value for "insideBoundingBox" parameter: "'.concat(e, '"')
                      )
                  return { northEast: { lat: n, lng: r }, southWest: { lat: i, lng: a } }
              })(e)
    }
    var Qe = function (e, n, r) {
            return e.map(function (e, t) {
                return D({}, e, { __position: r * n + t + 1 })
            })
        },
        qe = function (e, t) {
            return t
                ? e.map(function (e) {
                      return D({}, e, { __queryID: t })
                  })
                : e
        },
        Ue = Ae({ name: 'index-widget' })
    function Ve(e) {
        return 'ais.index' === e.$$type
    }
    function We(e, n) {
        return e
            .filter(function (e) {
                return !Ve(e)
            })
            .reduce(function (e, t) {
                return t.getWidgetState ? t.getWidgetState(e, n) : e
            }, {})
    }
    function $e(e, t) {
        var n = t.initialSearchParameters,
            r = O(t, ['initialSearchParameters'])
        return e
            .filter(function (e) {
                return !Ve(e)
            })
            .reduce(function (e, t) {
                return t.getWidgetSearchParameters ? t.getWidgetSearchParameters(e, r) : e
            }, n)
    }
    function ze(e) {
        var t = e.getParent()
        return (function n(e) {
            return e.filter(Ve).reduce(function (e, t) {
                return e.concat.apply(
                    e,
                    [
                        { indexId: t.getIndexId(), results: t.getResults(), helper: t.getHelper() }
                    ].concat(w(n(t.getWidgets())))
                )
            }, [])
        })(t ? t.getWidgets() : [e])
    }
    function Ke(e) {
        if (void 0 === e || void 0 === e.indexName)
            throw new Error(Ue('The `indexName` option is required.'))
        function o(e) {
            return f._createURL(C({}, u, We(l, { searchParameters: e, helper: m })))
        }
        var c = e.indexName,
            t = e.indexId,
            u = void 0 === t ? c : t,
            l = [],
            h = {},
            f = null,
            d = null,
            m = null,
            p = null
        return {
            $$type: 'ais.index',
            getIndexName: function () {
                return c
            },
            getIndexId: function () {
                return u
            },
            getHelper: function () {
                return m
            },
            getResults: function () {
                return p && p.lastResults
            },
            getParent: function () {
                return d
            },
            getWidgets: function () {
                return l
            },
            addWidgets: function (e) {
                var t = this
                if (!Array.isArray(e))
                    throw new Error(Ue('The `addWidgets` method expects an array of widgets.'))
                if (
                    e.some(function (e) {
                        return 'function' != typeof e.init && 'function' != typeof e.render
                    })
                )
                    throw new Error(
                        Ue('The widget definition expects a `render` and/or an `init` method.')
                    )
                return (
                    (l = l.concat(e)),
                    f &&
                        Boolean(e.length) &&
                        (m.setState($e(l, { uiState: h, initialSearchParameters: m.state })),
                        e.forEach(function (e) {
                            f &&
                                e.init &&
                                e.init({
                                    helper: m,
                                    parent: t,
                                    uiState: {},
                                    instantSearchInstance: f,
                                    state: m.state,
                                    templatesConfig: f.templatesConfig,
                                    createURL: o
                                })
                        }),
                        f.scheduleSearch()),
                    this
                )
            },
            removeWidgets: function (t) {
                if (!Array.isArray(t))
                    throw new Error(Ue('The `removeWidgets` method expects an array of widgets.'))
                if (
                    t.some(function (e) {
                        return 'function' != typeof e.dispose
                    })
                )
                    throw new Error(Ue('The widget definition expects a `dispose` method.'))
                if (
                    ((l = l.filter(function (e) {
                        return -1 === t.indexOf(e)
                    })),
                    f && Boolean(t.length))
                ) {
                    var e = t.reduce(function (e, t) {
                        return t.dispose({ helper: m, state: e }) || e
                    }, m.state)
                    ;(h = We(l, { searchParameters: e, helper: m })),
                        m.setState($e(l, { uiState: h, initialSearchParameters: e })),
                        l.length && f.scheduleSearch()
                }
                return this
            },
            init: function (e) {
                var t = this,
                    n = e.instantSearchInstance,
                    r = e.parent,
                    i = e.uiState
                ;(f = n), (d = r), (h = i[u] || {})
                var a = n.mainHelper,
                    s = $e(l, {
                        uiState: h,
                        initialSearchParameters: new se.SearchParameters({ index: c })
                    })
                ;((m = se({}, s.index, s)).search = function () {
                    return a.search()
                }),
                    (m.searchForFacetValues = function (e, t, n, r) {
                        var i = m.state.setQueryParameters(r)
                        return a.searchForFacetValues(e, t, n, i)
                    }),
                    (p = a.derive(function () {
                        return He.apply(
                            void 0,
                            w(
                                (function (e) {
                                    for (
                                        var t = e.getParent(), n = [e.getHelper().state];
                                        null !== t;

                                    )
                                        (n = [t.getHelper().state].concat(n)), (t = t.getParent())
                                    return n
                                })(t)
                            )
                        )
                    })),
                    m.on('change', function (e) {
                        e.isPageReset &&
                            !(function n(e) {
                                var t = e.filter(Ve)
                                0 !== t.length &&
                                    t.forEach(function (e) {
                                        var t = e.getHelper()
                                        t.setState(t.state.resetPage()), n(e.getWidgets())
                                    })
                            })(l)
                    }),
                    p.on('search', function () {
                        n.scheduleStalledRender()
                    }),
                    p.on('result', function (e) {
                        var t = e.results
                        n.scheduleRender(), (m.lastResults = t)
                    }),
                    l.forEach(function (e) {
                        e.init &&
                            e.init({
                                uiState: i,
                                helper: m,
                                parent: t,
                                instantSearchInstance: n,
                                state: m.state,
                                templatesConfig: n.templatesConfig,
                                createURL: o
                            })
                    }),
                    m.on('change', function (e) {
                        var t = e.state
                        ;(h = We(l, { searchParameters: t, helper: m })), n.onStateChange()
                    })
            },
            render: function (e) {
                var t = this,
                    n = e.instantSearchInstance
                l.forEach(function (e) {
                    e.render &&
                        p.lastResults &&
                        e.render({
                            helper: m,
                            instantSearchInstance: n,
                            results: p.lastResults,
                            scopedResults: ze(t),
                            state: p.lastResults._state,
                            templatesConfig: n.templatesConfig,
                            createURL: o,
                            searchMetadata: { isSearchStalled: n._isSearchStalled }
                        })
                })
            },
            dispose: function () {
                l.forEach(function (e) {
                    e.dispose && e.dispose({ helper: m, state: m.state })
                }),
                    (d = f = null),
                    m.removeAllListeners(),
                    (m = null),
                    p.detach(),
                    (p = null)
            },
            getWidgetState: function (e) {
                return l.filter(Ve).reduce(function (e, t) {
                    return t.getWidgetState(e)
                }, D({}, e, C({}, this.getIndexId(), h)))
            }
        }
    }
    var Je = { highlightPreTag: '__ais-highlight__', highlightPostTag: '__/ais-highlight__' },
        Ye = { highlightPreTag: '<mark>', highlightPostTag: '</mark>' }
    function Xe(e) {
        return (function (e) {
            return e && Ee.test(e)
                ? e.replace(je, function (e) {
                      return ke[e]
                  })
                : e
        })(e)
            .replace(new RegExp(Je.highlightPreTag, 'g'), Ye.highlightPreTag)
            .replace(new RegExp(Je.highlightPostTag, 'g'), Ye.highlightPostTag)
    }
    function Ge(n) {
        return Ie(n) && 'string' != typeof n.value
            ? Object.keys(n).reduce(function (e, t) {
                  return D({}, e, C({}, t, Ge(n[t])))
              }, {})
            : Array.isArray(n)
            ? n.map(Ge)
            : D({}, n, { value: Xe(n.value) })
    }
    function Ze(e) {
        return (
            void 0 === e.__escaped &&
                ((e = e.map(function (e) {
                    return (
                        e._highlightResult && (e._highlightResult = Ge(e._highlightResult)),
                        e._snippetResult && (e._snippetResult = Ge(e._snippetResult)),
                        e
                    )
                })).__escaped = !0),
            e
        )
    }
    function et(a) {
        return function () {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.descendantName,
                n = e.modifierName,
                r = t ? '-'.concat(t) : '',
                i = n ? '--'.concat(n) : ''
            return ''.concat('ais', '-').concat(a).concat(r).concat(i)
        }
    }
    var tt = et('Highlight')
    function nt(e) {
        var t = e.attribute,
            n = e.highlightedTagName,
            r = void 0 === n ? 'mark' : n,
            i = e.hit,
            a = e.cssClasses,
            s = void 0 === a ? {} : a,
            o = Ne(i, '_highlightResult.'.concat(t, '.value')) || '',
            c =
                tt({ descendantName: 'highlighted' }) +
                (s.highlighted ? ' '.concat(s.highlighted) : '')
        return o
            .replace(
                new RegExp(Ye.highlightPreTag, 'g'),
                '<'.concat(r, ' className="').concat(c, '">')
            )
            .replace(new RegExp(Ye.highlightPostTag, 'g'), '</'.concat(r, '>'))
    }
    var rt = et('Snippet')
    function it(e) {
        var t = e.attribute,
            n = e.highlightedTagName,
            r = void 0 === n ? 'mark' : n,
            i = e.hit,
            a = e.cssClasses,
            s = void 0 === a ? {} : a,
            o = Ne(i, '_snippetResult.'.concat(t, '.value')) || '',
            c =
                rt({ descendantName: 'highlighted' }) +
                (s.highlighted ? ' '.concat(s.highlighted) : '')
        return o
            .replace(
                new RegExp(Ye.highlightPreTag, 'g'),
                '<'.concat(r, ' className="').concat(c, '">')
            )
            .replace(new RegExp(Ye.highlightPostTag, 'g'), '</'.concat(r, '>'))
    }
    function at(e, t) {
        return (function (e) {
            var t,
                n = e.method,
                r = e.payload
            if ('object' !== l(r))
                throw new Error('The insights helper expects the payload to be an object.')
            try {
                t = btoa(JSON.stringify(r))
            } catch (e) {
                throw new Error('Could not JSON serialize the payload object.')
            }
            return 'data-insights-method="'.concat(n, '" data-insights-payload="').concat(t, '"')
        })({ method: e, payload: t })
    }
    function st(e) {
        e.configure
        return O(e, ['configure'])
    }
    function ot() {
        return {
            stateToRoute: function (n) {
                return Object.keys(n).reduce(function (e, t) {
                    return D({}, e, C({}, t, st(n[t])))
                }, {})
            },
            routeToState: function (e) {
                var n = 0 < arguments.length && void 0 !== e ? e : {}
                return Object.keys(n).reduce(function (e, t) {
                    return D({}, e, C({}, t, st(n[t])))
                }, {})
            }
        }
    }
    function ct(e, t) {
        for (var n = t && t.plainObjects ? Object.create(null) : {}, r = 0; r < e.length; ++r)
            void 0 !== e[r] && (n[r] = e[r])
        return n
    }
    function ut(e, t) {
        Nt.apply(e, xt(t) ? t : [t])
    }
    function lt(e, t, n, r, i, a, s, o, c, u, l, h, f) {
        var d = e
        if (
            ('function' == typeof s
                ? (d = s(t, d))
                : d instanceof Date
                ? (d = u(d))
                : 'comma' === n && xt(d) && (d = d.join(',')),
            null === d)
        ) {
            if (r) return a && !h ? a(t, It.encoder, f) : t
            d = ''
        }
        if (
            (function (e) {
                return (
                    'string' == typeof e ||
                    'number' == typeof e ||
                    'boolean' == typeof e ||
                    'symbol' == typeof e ||
                    'bigint' == typeof e
                )
            })(d) ||
            yt.isBuffer(d)
        )
            return a
                ? [l(h ? t : a(t, It.encoder, f)) + '=' + l(a(d, It.encoder, f))]
                : [l(t) + '=' + l(String(d))]
        var m,
            p = []
        if (void 0 === d) return p
        if (xt(s)) m = s
        else {
            var g = Object.keys(d)
            m = o ? g.sort(o) : g
        }
        for (var v = 0; v < m.length; ++v) {
            var y = m[v]
            ;(i && null === d[y]) ||
                (xt(d)
                    ? ut(
                          p,
                          lt(
                              d[y],
                              'function' == typeof n ? n(t, y) : t,
                              n,
                              r,
                              i,
                              a,
                              s,
                              o,
                              c,
                              u,
                              l,
                              h,
                              f
                          )
                      )
                    : ut(
                          p,
                          lt(
                              d[y],
                              t + (c ? '.' + y : '[' + y + ']'),
                              n,
                              r,
                              i,
                              a,
                              s,
                              o,
                              c,
                              u,
                              l,
                              h,
                              f
                          )
                      ))
        }
        return p
    }
    function ht(e, t, n) {
        if (e) {
            var r = n.allowDots ? e.replace(/\.([^.[]+)/g, '[$1]') : e,
                i = /(\[[^[\]]*])/g,
                a = 0 < n.depth && /(\[[^[\]]*])/.exec(r),
                s = a ? r.slice(0, a.index) : r,
                o = []
            if (s) {
                if (!n.plainObjects && Mt.call(Object.prototype, s) && !n.allowPrototypes) return
                o.push(s)
            }
            for (var c = 0; 0 < n.depth && null !== (a = i.exec(r)) && c < n.depth; ) {
                if (
                    ((c += 1),
                    !n.plainObjects &&
                        Mt.call(Object.prototype, a[1].slice(1, -1)) &&
                        !n.allowPrototypes)
                )
                    return
                o.push(a[1])
            }
            return (
                a && o.push('[' + r.slice(a.index) + ']'),
                (function (e, t, n) {
                    for (var r = t, i = e.length - 1; 0 <= i; --i) {
                        var a,
                            s = e[i]
                        if ('[]' === s && n.parseArrays) a = [].concat(r)
                        else {
                            a = n.plainObjects ? Object.create(null) : {}
                            var o =
                                    '[' === s.charAt(0) && ']' === s.charAt(s.length - 1)
                                        ? s.slice(1, -1)
                                        : s,
                                c = parseInt(o, 10)
                            n.parseArrays || '' !== o
                                ? !isNaN(c) &&
                                  s !== o &&
                                  String(c) === o &&
                                  0 <= c &&
                                  n.parseArrays &&
                                  c <= n.arrayLimit
                                    ? ((a = [])[c] = r)
                                    : (a[o] = r)
                                : (a = { 0: r })
                        }
                        r = a
                    }
                    return r
                })(o, t, n)
            )
        }
    }
    function ft(e) {
        var t = e.qsModule,
            n = e.routeState,
            r = e.location,
            i = r.protocol,
            a = r.hostname,
            s = r.port,
            o = void 0 === s ? '' : s,
            c = r.pathname,
            u = r.hash,
            l = t.stringify(n),
            h = '' === o ? '' : ':'.concat(o)
        return l
            ? ''.concat(i, '//').concat(a).concat(h).concat(c, '?').concat(l).concat(u)
            : ''.concat(i, '//').concat(a).concat(h).concat(c).concat(u)
    }
    function dt(e) {
        var t = e.qsModule,
            n = e.location
        return t.parse(n.search.slice(1), { arrayLimit: 99 })
    }
    function mt(e) {
        e && (window.document.title = e)
    }
    var pt = Object.prototype.hasOwnProperty,
        gt = Array.isArray,
        vt = (function () {
            for (var e = [], t = 0; t < 256; ++t)
                e.push('%' + ((t < 16 ? '0' : '') + t.toString(16)).toUpperCase())
            return e
        })(),
        yt = {
            arrayToObject: ct,
            assign: function (e, n) {
                return Object.keys(n).reduce(function (e, t) {
                    return (e[t] = n[t]), e
                }, e)
            },
            combine: function (e, t) {
                return [].concat(e, t)
            },
            compact: function (e) {
                for (var t = [{ obj: { o: e }, prop: 'o' }], n = [], r = 0; r < t.length; ++r)
                    for (
                        var i = t[r], a = i.obj[i.prop], s = Object.keys(a), o = 0;
                        o < s.length;
                        ++o
                    ) {
                        var c = s[o],
                            u = a[c]
                        'object' == typeof u &&
                            null !== u &&
                            -1 === n.indexOf(u) &&
                            (t.push({ obj: a, prop: c }), n.push(u))
                    }
                return (
                    (function (e) {
                        for (; 1 < e.length; ) {
                            var t = e.pop(),
                                n = t.obj[t.prop]
                            if (gt(n)) {
                                for (var r = [], i = 0; i < n.length; ++i)
                                    void 0 !== n[i] && r.push(n[i])
                                t.obj[t.prop] = r
                            }
                        }
                    })(t),
                    e
                )
            },
            decode: function (e, t, n) {
                var r = e.replace(/\+/g, ' ')
                if ('iso-8859-1' === n) return r.replace(/%[0-9a-f]{2}/gi, unescape)
                try {
                    return decodeURIComponent(r)
                } catch (e) {
                    return r
                }
            },
            encode: function (e, t, n) {
                if (0 === e.length) return e
                var r = e
                if (
                    ('symbol' == typeof e
                        ? (r = Symbol.prototype.toString.call(e))
                        : 'string' != typeof e && (r = String(e)),
                    'iso-8859-1' === n)
                )
                    return escape(r).replace(/%u[0-9a-f]{4}/gi, function (e) {
                        return '%26%23' + parseInt(e.slice(2), 16) + '%3B'
                    })
                for (var i = '', a = 0; a < r.length; ++a) {
                    var s = r.charCodeAt(a)
                    45 === s ||
                    46 === s ||
                    95 === s ||
                    126 === s ||
                    (48 <= s && s <= 57) ||
                    (65 <= s && s <= 90) ||
                    (97 <= s && s <= 122)
                        ? (i += r.charAt(a))
                        : s < 128
                        ? (i += vt[s])
                        : s < 2048
                        ? (i += vt[192 | (s >> 6)] + vt[128 | (63 & s)])
                        : s < 55296 || 57344 <= s
                        ? (i +=
                              vt[224 | (s >> 12)] + vt[128 | ((s >> 6) & 63)] + vt[128 | (63 & s)])
                        : ((a += 1),
                          (s = 65536 + (((1023 & s) << 10) | (1023 & r.charCodeAt(a)))),
                          (i +=
                              vt[240 | (s >> 18)] +
                              vt[128 | ((s >> 12) & 63)] +
                              vt[128 | ((s >> 6) & 63)] +
                              vt[128 | (63 & s)]))
                }
                return i
            },
            isBuffer: function (e) {
                return (
                    !(!e || 'object' != typeof e) &&
                    !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e))
                )
            },
            isRegExp: function (e) {
                return '[object RegExp]' === Object.prototype.toString.call(e)
            },
            merge: function r(i, a, s) {
                if (!a) return i
                if ('object' != typeof a) {
                    if (gt(i)) i.push(a)
                    else {
                        if (!i || 'object' != typeof i) return [i, a]
                        ;((s && (s.plainObjects || s.allowPrototypes)) ||
                            !pt.call(Object.prototype, a)) &&
                            (i[a] = !0)
                    }
                    return i
                }
                if (!i || 'object' != typeof i) return [i].concat(a)
                var e = i
                return (
                    gt(i) && !gt(a) && (e = ct(i, s)),
                    gt(i) && gt(a)
                        ? (a.forEach(function (e, t) {
                              if (pt.call(i, t)) {
                                  var n = i[t]
                                  n && 'object' == typeof n && e && 'object' == typeof e
                                      ? (i[t] = r(n, e, s))
                                      : i.push(e)
                              } else i[t] = e
                          }),
                          i)
                        : Object.keys(a).reduce(function (e, t) {
                              var n = a[t]
                              return pt.call(e, t) ? (e[t] = r(e[t], n, s)) : (e[t] = n), e
                          }, e)
                )
            }
        },
        bt = String.prototype.replace,
        Rt = /%20/g,
        wt = { RFC1738: 'RFC1738', RFC3986: 'RFC3986' },
        St = yt.assign(
            {
                default: wt.RFC3986,
                formatters: {
                    RFC1738: function (e) {
                        return bt.call(e, Rt, '+')
                    },
                    RFC3986: function (e) {
                        return String(e)
                    }
                }
            },
            wt
        ),
        Pt = Object.prototype.hasOwnProperty,
        _t = {
            brackets: function (e) {
                return e + '[]'
            },
            comma: 'comma',
            indices: function (e, t) {
                return e + '[' + t + ']'
            },
            repeat: function (e) {
                return e
            }
        },
        xt = Array.isArray,
        Nt = Array.prototype.push,
        Ft = Date.prototype.toISOString,
        Ct = St.default,
        It = {
            addQueryPrefix: !1,
            allowDots: !1,
            charset: 'utf-8',
            charsetSentinel: !1,
            delimiter: '&',
            encode: !0,
            encoder: yt.encode,
            encodeValuesOnly: !1,
            format: Ct,
            formatter: St.formatters[Ct],
            indices: !1,
            serializeDate: function (e) {
                return Ft.call(e)
            },
            skipNulls: !1,
            strictNullHandling: !1
        },
        Mt = Object.prototype.hasOwnProperty,
        Lt = {
            allowDots: !1,
            allowPrototypes: !1,
            arrayLimit: 20,
            charset: 'utf-8',
            charsetSentinel: !1,
            comma: !1,
            decoder: yt.decode,
            delimiter: '&',
            depth: 5,
            ignoreQueryPrefix: !1,
            interpretNumericEntities: !1,
            parameterLimit: 1e3,
            parseArrays: !0,
            plainObjects: !1,
            strictNullHandling: !1
        },
        Tt = {
            formats: St,
            parse: function (e, t) {
                var n = (function (e) {
                    if (!e) return Lt
                    if (
                        null !== e.decoder &&
                        void 0 !== e.decoder &&
                        'function' != typeof e.decoder
                    )
                        throw new TypeError('Decoder has to be a function.')
                    if (void 0 !== e.charset && 'utf-8' !== e.charset && 'iso-8859-1' !== e.charset)
                        throw new Error(
                            'The charset option must be either utf-8, iso-8859-1, or undefined'
                        )
                    var t = void 0 === e.charset ? Lt.charset : e.charset
                    return {
                        allowDots: void 0 === e.allowDots ? Lt.allowDots : !!e.allowDots,
                        allowPrototypes:
                            'boolean' == typeof e.allowPrototypes
                                ? e.allowPrototypes
                                : Lt.allowPrototypes,
                        arrayLimit: 'number' == typeof e.arrayLimit ? e.arrayLimit : Lt.arrayLimit,
                        charset: t,
                        charsetSentinel:
                            'boolean' == typeof e.charsetSentinel
                                ? e.charsetSentinel
                                : Lt.charsetSentinel,
                        comma: 'boolean' == typeof e.comma ? e.comma : Lt.comma,
                        decoder: 'function' == typeof e.decoder ? e.decoder : Lt.decoder,
                        delimiter:
                            'string' == typeof e.delimiter || yt.isRegExp(e.delimiter)
                                ? e.delimiter
                                : Lt.delimiter,
                        depth: 'number' == typeof e.depth || !1 === e.depth ? +e.depth : Lt.depth,
                        ignoreQueryPrefix: !0 === e.ignoreQueryPrefix,
                        interpretNumericEntities:
                            'boolean' == typeof e.interpretNumericEntities
                                ? e.interpretNumericEntities
                                : Lt.interpretNumericEntities,
                        parameterLimit:
                            'number' == typeof e.parameterLimit
                                ? e.parameterLimit
                                : Lt.parameterLimit,
                        parseArrays: !1 !== e.parseArrays,
                        plainObjects:
                            'boolean' == typeof e.plainObjects ? e.plainObjects : Lt.plainObjects,
                        strictNullHandling:
                            'boolean' == typeof e.strictNullHandling
                                ? e.strictNullHandling
                                : Lt.strictNullHandling
                    }
                })(t)
                if ('' === e || null == e) return n.plainObjects ? Object.create(null) : {}
                for (
                    var r =
                            'string' == typeof e
                                ? (function (e, t) {
                                      var n,
                                          r = {},
                                          i = t.ignoreQueryPrefix ? e.replace(/^\?/, '') : e,
                                          a =
                                              t.parameterLimit === 1 / 0
                                                  ? void 0
                                                  : t.parameterLimit,
                                          s = i.split(t.delimiter, a),
                                          o = -1,
                                          c = t.charset
                                      if (t.charsetSentinel)
                                          for (n = 0; n < s.length; ++n)
                                              0 === s[n].indexOf('utf8=') &&
                                                  ('utf8=%E2%9C%93' === s[n]
                                                      ? (c = 'utf-8')
                                                      : 'utf8=%26%2310003%3B' === s[n] &&
                                                        (c = 'iso-8859-1'),
                                                  (o = n),
                                                  (n = s.length))
                                      for (n = 0; n < s.length; ++n)
                                          if (n !== o) {
                                              var u,
                                                  l,
                                                  h = s[n],
                                                  f = h.indexOf(']='),
                                                  d = -1 === f ? h.indexOf('=') : f + 1
                                              ;(l =
                                                  -1 === d
                                                      ? ((u = t.decoder(h, Lt.decoder, c)),
                                                        t.strictNullHandling ? null : '')
                                                      : ((u = t.decoder(
                                                            h.slice(0, d),
                                                            Lt.decoder,
                                                            c
                                                        )),
                                                        t.decoder(
                                                            h.slice(d + 1),
                                                            Lt.decoder,
                                                            c
                                                        ))) &&
                                                  t.interpretNumericEntities &&
                                                  'iso-8859-1' === c &&
                                                  (l = l.replace(/&#(\d+);/g, function (e, t) {
                                                      return String.fromCharCode(parseInt(t, 10))
                                                  })),
                                                  l &&
                                                      t.comma &&
                                                      -1 < l.indexOf(',') &&
                                                      (l = l.split(',')),
                                                  Mt.call(r, u)
                                                      ? (r[u] = yt.combine(r[u], l))
                                                      : (r[u] = l)
                                          }
                                      return r
                                  })(e, n)
                                : e,
                        i = n.plainObjects ? Object.create(null) : {},
                        a = Object.keys(r),
                        s = 0;
                    s < a.length;
                    ++s
                ) {
                    var o = a[s],
                        c = ht(o, r[o], n)
                    i = yt.merge(i, c, n)
                }
                return yt.compact(i)
            },
            stringify: function (e, t) {
                var n,
                    r = e,
                    i = (function (e) {
                        if (!e) return It
                        if (
                            null !== e.encoder &&
                            void 0 !== e.encoder &&
                            'function' != typeof e.encoder
                        )
                            throw new TypeError('Encoder has to be a function.')
                        var t = e.charset || It.charset
                        if (
                            void 0 !== e.charset &&
                            'utf-8' !== e.charset &&
                            'iso-8859-1' !== e.charset
                        )
                            throw new TypeError(
                                'The charset option must be either utf-8, iso-8859-1, or undefined'
                            )
                        var n = St.default
                        if (void 0 !== e.format) {
                            if (!Pt.call(St.formatters, e.format))
                                throw new TypeError('Unknown format option provided.')
                            n = e.format
                        }
                        var r = St.formatters[n],
                            i = It.filter
                        return (
                            ('function' != typeof e.filter && !xt(e.filter)) || (i = e.filter),
                            {
                                addQueryPrefix:
                                    'boolean' == typeof e.addQueryPrefix
                                        ? e.addQueryPrefix
                                        : It.addQueryPrefix,
                                allowDots: void 0 === e.allowDots ? It.allowDots : !!e.allowDots,
                                charset: t,
                                charsetSentinel:
                                    'boolean' == typeof e.charsetSentinel
                                        ? e.charsetSentinel
                                        : It.charsetSentinel,
                                delimiter: void 0 === e.delimiter ? It.delimiter : e.delimiter,
                                encode: 'boolean' == typeof e.encode ? e.encode : It.encode,
                                encoder: 'function' == typeof e.encoder ? e.encoder : It.encoder,
                                encodeValuesOnly:
                                    'boolean' == typeof e.encodeValuesOnly
                                        ? e.encodeValuesOnly
                                        : It.encodeValuesOnly,
                                filter: i,
                                formatter: r,
                                serializeDate:
                                    'function' == typeof e.serializeDate
                                        ? e.serializeDate
                                        : It.serializeDate,
                                skipNulls:
                                    'boolean' == typeof e.skipNulls ? e.skipNulls : It.skipNulls,
                                sort: 'function' == typeof e.sort ? e.sort : null,
                                strictNullHandling:
                                    'boolean' == typeof e.strictNullHandling
                                        ? e.strictNullHandling
                                        : It.strictNullHandling
                            }
                        )
                    })(t)
                'function' == typeof i.filter
                    ? (r = (0, i.filter)('', r))
                    : xt(i.filter) && (n = i.filter)
                var a,
                    s = []
                if ('object' != typeof r || null === r) return ''
                a =
                    t && t.arrayFormat in _t
                        ? t.arrayFormat
                        : t && 'indices' in t
                        ? t.indices
                            ? 'indices'
                            : 'repeat'
                        : 'indices'
                var o = _t[a]
                ;(n = n || Object.keys(r)), i.sort && n.sort(i.sort)
                for (var c = 0; c < n.length; ++c) {
                    var u = n[c]
                    ;(i.skipNulls && null === r[u]) ||
                        ut(
                            s,
                            lt(
                                r[u],
                                u,
                                o,
                                i.strictNullHandling,
                                i.skipNulls,
                                i.encode ? i.encoder : null,
                                i.filter,
                                i.sort,
                                i.allowDots,
                                i.serializeDate,
                                i.formatter,
                                i.encodeValuesOnly,
                                i.charset
                            )
                        )
                }
                var l = s.join(i.delimiter),
                    h = !0 === i.addQueryPrefix ? '?' : ''
                return (
                    i.charsetSentinel &&
                        ('iso-8859-1' === i.charset
                            ? (h += 'utf8=%26%2310003%3B&')
                            : (h += 'utf8=%E2%9C%93&')),
                    0 < l.length ? h + l : ''
                )
            }
        },
        kt = (function () {
            function u() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                    t = e.windowTitle,
                    n = e.writeDelay,
                    r = void 0 === n ? 400 : n,
                    i = e.createURL,
                    a = void 0 === i ? ft : i,
                    s = e.parseURL,
                    o = void 0 === s ? dt : s
                T(this, u),
                    C(this, 'windowTitle', void 0),
                    C(this, 'writeDelay', void 0),
                    C(this, '_createURL', void 0),
                    C(this, 'parseURL', void 0),
                    C(this, 'writeTimer', void 0),
                    (this.windowTitle = t),
                    (this.writeTimer = void 0),
                    (this.writeDelay = r),
                    (this._createURL = a),
                    (this.parseURL = o)
                var c = this.windowTitle && this.windowTitle(this.read())
                mt(c)
            }
            return (
                k(u, [
                    {
                        key: 'read',
                        value: function () {
                            return this.parseURL({ qsModule: Tt, location: window.location })
                        }
                    },
                    {
                        key: 'write',
                        value: function (e) {
                            var t = this,
                                n = this.createURL(e),
                                r = this.windowTitle && this.windowTitle(e)
                            this.writeTimer && window.clearTimeout(this.writeTimer),
                                (this.writeTimer = window.setTimeout(function () {
                                    mt(r),
                                        window.history.pushState(e, r || '', n),
                                        (t.writeTimer = void 0)
                                }, this.writeDelay))
                        }
                    },
                    {
                        key: 'onUpdate',
                        value: function (n) {
                            var r = this
                            ;(this._onPopState = function (e) {
                                r.writeTimer &&
                                    (window.clearTimeout(r.writeTimer), (r.writeTimer = void 0))
                                var t = e.state
                                n(t || r.read())
                            }),
                                window.addEventListener('popstate', this._onPopState)
                        }
                    },
                    {
                        key: 'createURL',
                        value: function (e) {
                            return this._createURL({
                                qsModule: Tt,
                                routeState: e,
                                location: window.location
                            })
                        }
                    },
                    {
                        key: 'dispose',
                        value: function () {
                            this._onPopState &&
                                window.removeEventListener('popstate', this._onPopState),
                                this.writeTimer && window.clearTimeout(this.writeTimer),
                                this.write({})
                        }
                    }
                ]),
                u
            )
        })()
    function jt() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n]
        return s(kt, t)
    }
    var Et = Ae({ name: 'instantsearch' })
    function Ot() {
        return '#'
    }
    var At = (function () {
            function v(e) {
                var n
                T(this, v),
                    C(y((n = A(this, E(v).call(this)))), 'client', void 0),
                    C(y(n), 'indexName', void 0),
                    C(y(n), 'insightsClient', void 0),
                    C(y(n), 'helper', void 0),
                    C(y(n), 'mainHelper', void 0),
                    C(y(n), 'mainIndex', void 0),
                    C(y(n), 'started', void 0),
                    C(y(n), 'templatesConfig', void 0),
                    C(y(n), '_stalledSearchDelay', void 0),
                    C(y(n), '_searchStalledTimer', void 0),
                    C(y(n), '_isSearchStalled', void 0),
                    C(y(n), '_initialUiState', void 0),
                    C(y(n), '_createURL', void 0),
                    C(y(n), '_searchFunction', void 0),
                    C(y(n), '_mainHelperSearch', void 0),
                    C(y(n), 'middleware', []),
                    C(
                        y(n),
                        'scheduleSearch',
                        oe(function () {
                            n.mainHelper.search()
                        })
                    ),
                    C(
                        y(n),
                        'scheduleRender',
                        oe(function () {
                            n.mainHelper.hasPendingRequests() ||
                                (clearTimeout(n._searchStalledTimer),
                                (n._searchStalledTimer = null),
                                (n._isSearchStalled = !1)),
                                n.mainIndex.render({ instantSearchInstance: y(n) }),
                                n.emit('render')
                        })
                    ),
                    C(y(n), 'onStateChange', function () {
                        var t = n.mainIndex.getWidgetState({})
                        n.middleware.forEach(function (e) {
                            e.onStateChange({ state: t })
                        })
                    })
                var t = e.indexName,
                    r = void 0 === t ? null : t,
                    i = e.numberLocale,
                    a = e.initialUiState,
                    s = void 0 === a ? {} : a,
                    o = e.routing,
                    c = void 0 === o ? null : o,
                    u = e.searchFunction,
                    l = e.stalledSearchDelay,
                    h = void 0 === l ? 200 : l,
                    f = e.searchClient,
                    d = void 0 === f ? null : f,
                    m = e.insightsClient,
                    p = void 0 === m ? null : m
                if (null === r) throw new Error(Et('The `indexName` option is required.'))
                if (null === d) throw new Error(Et('The `searchClient` option is required.'))
                if ('function' != typeof d.search)
                    throw new Error(
                        'The `searchClient` must implement a `search` method.\n\nSee: https://www.algolia.com/doc/guides/building-search-ui/going-further/backend-search/in-depth/backend-instantsearch/js/'
                    )
                if (
                    ('function' == typeof d.addAlgoliaAgent &&
                        d.addAlgoliaAgent('instantsearch.js ('.concat('4.3.1', ')')),
                    p && 'function' != typeof p)
                )
                    throw new Error(Et('The `insightsClient` option should be a function.'))
                if (
                    ((n.client = d),
                    (n.insightsClient = p),
                    (n.indexName = r),
                    (n.helper = null),
                    (n.mainHelper = null),
                    (n.mainIndex = Ke({ indexName: r })),
                    (n.started = !1),
                    (n.templatesConfig = {
                        helpers: (function (e) {
                            var n = e.numberLocale
                            return {
                                formatNumber: function (e, t) {
                                    return Number(t(e)).toLocaleString(n)
                                },
                                highlight: function (e, t) {
                                    try {
                                        return t(nt(D({}, JSON.parse(e), { hit: this })))
                                    } catch (e) {
                                        throw new Error(
                                            '\nThe highlight helper expects a JSON object of the format:\n{ "attribute": "name", "highlightedTagName": "mark" }'
                                        )
                                    }
                                },
                                snippet: function (e, t) {
                                    try {
                                        return t(it(D({}, JSON.parse(e), { hit: this })))
                                    } catch (e) {
                                        throw new Error(
                                            '\nThe snippet helper expects a JSON object of the format:\n{ "attribute": "name", "highlightedTagName": "mark" }'
                                        )
                                    }
                                },
                                insights: function (e, t) {
                                    try {
                                        var n = JSON.parse(e),
                                            r = n.method,
                                            i = n.payload
                                        return t(at(r, D({ objectIDs: [this.objectID] }, i)))
                                    } catch (e) {
                                        throw new Error(
                                            '\nThe insights helper expects a JSON object of the format:\n{ "method": "method-name", "payload": { "eventName": "name of the event" } }'
                                        )
                                    }
                                }
                            }
                        })({ numberLocale: i }),
                        compileOptions: {}
                    }),
                    (n._stalledSearchDelay = h),
                    (n._searchStalledTimer = null),
                    (n._isSearchStalled = !1),
                    (n._createURL = Ot),
                    (n._initialUiState = s),
                    u && (n._searchFunction = u),
                    c)
                ) {
                    var g = 'boolean' == typeof c ? void 0 : c
                    n.EXPERIMENTAL_use(
                        (function (e) {
                            var t = 0 < arguments.length && void 0 !== e ? e : {},
                                n = t.router,
                                r = void 0 === n ? jt() : n,
                                i = t.stateMapping,
                                s = void 0 === i ? ot() : i
                            return function (e) {
                                var a = e.instantSearchInstance
                                return (
                                    (a._createURL = function (n) {
                                        var e = Object.keys(n).reduce(function (e, t) {
                                                return D({}, e, C({}, t, n[t]))
                                            }, a.mainIndex.getWidgetState({})),
                                            t = s.stateToRoute(e)
                                        return r.createURL(t)
                                    }),
                                    (a._initialUiState = D(
                                        {},
                                        a._initialUiState,
                                        {},
                                        s.routeToState(r.read())
                                    )),
                                    {
                                        onStateChange: function (e) {
                                            var t = e.state,
                                                n = s.stateToRoute(t)
                                            r.write(n)
                                        },
                                        subscribe: function () {
                                            r.onUpdate(function (e) {
                                                var i = s.routeToState(e)
                                                !(function t(e, n) {
                                                    n(e),
                                                        e
                                                            .getWidgets()
                                                            .filter(function (e) {
                                                                return 'ais.index' === e.$$type
                                                            })
                                                            .forEach(function (e) {
                                                                t(e, n)
                                                            })
                                                })(a.mainIndex, function (e) {
                                                    var t = e.getWidgets(),
                                                        n = i[e.getIndexId()] || {},
                                                        r = t.reduce(function (e, t) {
                                                            return t.getWidgetSearchParameters
                                                                ? t.getWidgetSearchParameters(e, {
                                                                      uiState: n
                                                                  })
                                                                : e
                                                        }, e.getHelper().state)
                                                    e
                                                        .getHelper()
                                                        .overrideStateWithoutTriggeringChangeEvent(
                                                            r
                                                        ),
                                                        a.scheduleSearch()
                                                })
                                            })
                                        },
                                        unsubscribe: function () {
                                            r.dispose()
                                        }
                                    }
                                )
                            }
                        })(g)
                    )
                }
                return n
            }
            return (
                j(v, e),
                k(v, [
                    {
                        key: 'EXPERIMENTAL_use',
                        value: function () {
                            for (
                                var n = this, e = arguments.length, t = new Array(e), r = 0;
                                r < e;
                                r++
                            )
                                t[r] = arguments[r]
                            var i = t.map(function (e) {
                                var t = e({ instantSearchInstance: n })
                                return n.middleware.push(t), t
                            })
                            return (
                                this.started &&
                                    i.forEach(function (e) {
                                        e.subscribe()
                                    }),
                                this
                            )
                        }
                    },
                    {
                        key: 'addWidget',
                        value: function (e) {
                            return this.addWidgets([e])
                        }
                    },
                    {
                        key: 'addWidgets',
                        value: function (e) {
                            if (!Array.isArray(e))
                                throw new Error(
                                    Et(
                                        'The `addWidgets` method expects an array of widgets. Please use `addWidget`.'
                                    )
                                )
                            if (
                                e.some(function (e) {
                                    return (
                                        'function' != typeof e.init && 'function' != typeof e.render
                                    )
                                })
                            )
                                throw new Error(
                                    Et(
                                        'The widget definition expects a `render` and/or an `init` method.'
                                    )
                                )
                            return this.mainIndex.addWidgets(e), this
                        }
                    },
                    {
                        key: 'removeWidget',
                        value: function (e) {
                            return this.removeWidgets([e])
                        }
                    },
                    {
                        key: 'removeWidgets',
                        value: function (e) {
                            if (!Array.isArray(e))
                                throw new Error(
                                    Et(
                                        'The `removeWidgets` method expects an array of widgets. Please use `removeWidget`.'
                                    )
                                )
                            if (
                                e.some(function (e) {
                                    return 'function' != typeof e.dispose
                                })
                            )
                                throw new Error(
                                    Et('The widget definition expects a `dispose` method.')
                                )
                            return this.mainIndex.removeWidgets(e), this
                        }
                    },
                    {
                        key: 'start',
                        value: function () {
                            var r = this
                            if (this.started)
                                throw new Error(
                                    Et('The `start` method has already been called once.')
                                )
                            var t = se(this.client, this.indexName)
                            if (
                                ((t.search = function () {
                                    return t.searchOnlyWithDerivedHelpers()
                                }),
                                this._searchFunction)
                            ) {
                                var i = {
                                    search: function () {
                                        return new Promise(Fe)
                                    }
                                }
                                ;(this._mainHelperSearch = t.search.bind(t)),
                                    (t.search = function () {
                                        var n = r.mainIndex.getHelper(),
                                            e = se(i, n.state.index, n.state)
                                        return (
                                            e.once('search', function (e) {
                                                var t = e.state
                                                n.overrideStateWithoutTriggeringChangeEvent(t),
                                                    r._mainHelperSearch()
                                            }),
                                            e.on('change', function (e) {
                                                var t = e.state
                                                n.setState(t)
                                            }),
                                            r._searchFunction(e),
                                            t
                                        )
                                    })
                            }
                            t.on('error', function (e) {
                                var t = e.error
                                r.emit('error', { error: t })
                            }),
                                (this.mainHelper = t),
                                this.middleware.forEach(function (e) {
                                    e.subscribe()
                                }),
                                this.mainIndex.init({
                                    instantSearchInstance: this,
                                    parent: null,
                                    uiState: this._initialUiState
                                }),
                                t.search(),
                                (this.helper = this.mainIndex.getHelper()),
                                (this.started = !0)
                        }
                    },
                    {
                        key: 'dispose',
                        value: function () {
                            this.scheduleSearch.cancel(),
                                this.scheduleRender.cancel(),
                                clearTimeout(this._searchStalledTimer),
                                this.removeWidgets(this.mainIndex.getWidgets()),
                                this.mainIndex.dispose(),
                                (this.started = !1),
                                this.removeAllListeners(),
                                this.mainHelper.removeAllListeners(),
                                (this.mainHelper = null),
                                (this.helper = null),
                                this.middleware.forEach(function (e) {
                                    e.unsubscribe()
                                })
                        }
                    },
                    {
                        key: 'scheduleStalledRender',
                        value: function () {
                            var e = this
                            this._searchStalledTimer ||
                                (this._searchStalledTimer = setTimeout(function () {
                                    ;(e._isSearchStalled = !0), e.scheduleRender()
                                }, this._stalledSearchDelay))
                        }
                    },
                    {
                        key: 'createURL',
                        value: function (e) {
                            var t = 0 < arguments.length && void 0 !== e ? e : {}
                            if (!this.started)
                                throw new Error(
                                    Et('The `start` method needs to be called before `createURL`.')
                                )
                            return this._createURL(t)
                        }
                    },
                    {
                        key: 'refresh',
                        value: function () {
                            if (!this.mainHelper)
                                throw new Error(
                                    Et('The `start` method needs to be called before `refresh`.')
                                )
                            this.mainHelper.clearCache().search()
                        }
                    }
                ]),
                v
            )
        })(),
        Ht = Ae({ name: 'clear-refinements', connector: !0 })
    function Dt(f) {
        var r = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : Fe
        return (
            xe(f, Ht()),
            function () {
                var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}
                if (a.includedAttributes && a.excludedAttributes)
                    throw new Error(
                        Ht(
                            'The options `includedAttributes` and `excludedAttributes` cannot be used together.'
                        )
                    )
                function s() {
                    return h.refine()
                }
                function o() {
                    return h.createURL()
                }
                var e = a.includedAttributes,
                    c = void 0 === e ? [] : e,
                    t = a.excludedAttributes,
                    u = void 0 === t ? ['query'] : t,
                    n = a.transformItems,
                    l =
                        void 0 === n
                            ? function (e) {
                                  return e
                              }
                            : n,
                    h = {
                        refine: Fe,
                        createURL: function () {
                            return ''
                        }
                    }
                return {
                    $$type: 'ais.clearRefinements',
                    init: function (e) {
                        var t = e.instantSearchInstance
                        f(
                            {
                                hasRefinements: !1,
                                refine: s,
                                createURL: o,
                                instantSearchInstance: t,
                                widgetParams: a
                            },
                            !0
                        )
                    },
                    render: function (e) {
                        var t = e.scopedResults,
                            n = e.createURL,
                            r = e.instantSearchInstance,
                            i = t.reduce(function (e, t) {
                                return e.concat(
                                    (function (e) {
                                        var t = e.scopedResult,
                                            n = e.includedAttributes,
                                            r = e.excludedAttributes,
                                            i = e.transformItems,
                                            a =
                                                -1 !== n.indexOf('query') ||
                                                -1 === r.indexOf('query')
                                        return {
                                            helper: t.helper,
                                            items: i(
                                                he(
                                                    Se(t.results, t.helper.state, a)
                                                        .map(function (e) {
                                                            return e.attribute
                                                        })
                                                        .filter(function (e) {
                                                            return (
                                                                0 === n.length ||
                                                                -1 !== n.indexOf(e)
                                                            )
                                                        })
                                                        .filter(function (e) {
                                                            return (
                                                                ('query' === e && a) ||
                                                                -1 === r.indexOf(e)
                                                            )
                                                        })
                                                )
                                            )
                                        }
                                    })({
                                        scopedResult: t,
                                        includedAttributes: c,
                                        excludedAttributes: u,
                                        transformItems: l
                                    })
                                )
                            }, [])
                        ;(h.refine = function () {
                            i.forEach(function (e) {
                                var t = e.helper,
                                    n = e.items
                                t.setState(Pe({ helper: t, attributesToClear: n })).search()
                            })
                        }),
                            (h.createURL = function () {
                                return n(
                                    He.apply(
                                        void 0,
                                        w(
                                            i.map(function (e) {
                                                return Pe({
                                                    helper: e.helper,
                                                    attributesToClear: e.items
                                                })
                                            })
                                        )
                                    )
                                )
                            }),
                            f(
                                {
                                    hasRefinements: i.some(function (e) {
                                        return 0 < e.items.length
                                    }),
                                    refine: s,
                                    createURL: o,
                                    instantSearchInstance: r,
                                    widgetParams: a
                                },
                                !1
                            )
                    },
                    dispose: function () {
                        r()
                    }
                }
            }
        )
    }
    function Bt(f, e) {
        var r = 1 < arguments.length && void 0 !== e ? e : Fe
        return (
            xe(f, Qt()),
            function (c) {
                if ((c || {}).includedAttributes && (c || {}).excludedAttributes)
                    throw new Error(
                        Qt(
                            'The options `includedAttributes` and `excludedAttributes` cannot be used together.'
                        )
                    )
                var e = c || {},
                    u = e.includedAttributes,
                    t = e.excludedAttributes,
                    l = void 0 === t ? ['query'] : t,
                    n = e.transformItems,
                    h =
                        void 0 === n
                            ? function (e) {
                                  return e
                              }
                            : n
                return {
                    $$type: 'ais.currentRefinements',
                    init: function (e) {
                        var t,
                            n = e.helper,
                            r = e.createURL,
                            i = e.instantSearchInstance,
                            a = h(
                                qt({
                                    results: {},
                                    helper: n,
                                    includedAttributes: u,
                                    excludedAttributes: l
                                })
                            )
                        function s(e) {
                            return t.apply(this, arguments)
                        }
                        f(
                            {
                                items: a,
                                refine: function (e) {
                                    return Vt(n, e)
                                },
                                createURL:
                                    ((t = function (e) {
                                        return r(Ut(n.state, e))
                                    }),
                                    (s.toString = function () {
                                        return t.toString()
                                    }),
                                    s),
                                instantSearchInstance: i,
                                widgetParams: c
                            },
                            !0
                        )
                    },
                    render: function (e) {
                        var t,
                            n = e.scopedResults,
                            r = e.helper,
                            i = e.createURL,
                            a = e.instantSearchInstance,
                            s = n.reduce(function (e, t) {
                                return e.concat(
                                    h(
                                        qt({
                                            results: t.results,
                                            helper: t.helper,
                                            includedAttributes: u,
                                            excludedAttributes: l
                                        })
                                    )
                                )
                            }, [])
                        function o(e) {
                            return t.apply(this, arguments)
                        }
                        f(
                            {
                                items: s,
                                refine: function (e) {
                                    return Vt(r, e)
                                },
                                createURL:
                                    ((t = function (e) {
                                        return i(Ut(r.state, e))
                                    }),
                                    (o.toString = function () {
                                        return t.toString()
                                    }),
                                    o),
                                instantSearchInstance: a,
                                widgetParams: c
                            },
                            !1
                        )
                    },
                    dispose: function () {
                        r()
                    }
                }
            }
        )
    }
    var Qt = Ae({ name: 'current-refinements', connector: !0 })
    function qt(e) {
        var t = e.results,
            n = e.helper,
            r = e.includedAttributes,
            i = e.excludedAttributes,
            a = -1 !== (r || []).indexOf('query') || -1 === (i || []).indexOf('query'),
            s = r
                ? function (e) {
                      return -1 !== r.indexOf(e.attribute)
                  }
                : function (e) {
                      return -1 === i.indexOf(e.attribute)
                  },
            o = Se(t, n.state, a).map(Wt).filter(s)
        return o.reduce(function (e, t) {
            return [].concat(
                w(
                    e.filter(function (e) {
                        return e.attribute !== t.attribute
                    })
                ),
                [
                    {
                        indexName: n.state.index,
                        attribute: t.attribute,
                        label: t.attribute,
                        refinements: o
                            .filter(function (e) {
                                return e.attribute === t.attribute
                            })
                            .sort(function (e, t) {
                                return 'numeric' === e.type ? e.value - t.value : 0
                            }),
                        refine: function (e) {
                            return Vt(n, e)
                        }
                    }
                ]
            )
        }, [])
    }
    function Ut(e, t) {
        switch (t.type) {
            case 'facet':
                return e.removeFacetRefinement(t.attribute, t.value)
            case 'disjunctive':
                return e.removeDisjunctiveFacetRefinement(t.attribute, t.value)
            case 'hierarchical':
                return e.removeHierarchicalFacetRefinement(t.attribute)
            case 'exclude':
                return e.removeExcludeRefinement(t.attribute, t.value)
            case 'numeric':
                return e.removeNumericRefinement(t.attribute, t.operator, t.value)
            case 'tag':
                return e.removeTagRefinement(t.value)
            case 'query':
                return e.setQueryParameter('query', '')
            default:
                return e
        }
    }
    function Vt(e, t) {
        e.setState(Ut(e.state, t)).search()
    }
    function Wt(e) {
        var t = 'numeric' === e.type ? Number(e.name) : e.name,
            n = e.operator
                ? ''
                      .concat(
                          (function (e) {
                              switch (e) {
                                  case '>=':
                                      return '≥'
                                  case '<=':
                                      return '≤'
                                  default:
                                      return e
                              }
                          })(e.operator),
                          ' '
                      )
                      .concat(e.name)
                : e.name,
            r = { attribute: e.attribute, type: e.type, value: t, label: n }
        return (
            void 0 !== e.operator && (r.operator = e.operator),
            void 0 !== e.count && (r.count = e.count),
            void 0 !== e.exhaustive && (r.exhaustive = e.exhaustive),
            r
        )
    }
    var $t = Ae({ name: 'hierarchical-menu', connector: !0 })
    function zt(b) {
        var R = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : Fe
        return (
            xe(b, $t()),
            function () {
                var l = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                    c = l.attributes,
                    e = l.separator,
                    u = void 0 === e ? ' > ' : e,
                    t = l.rootPath,
                    h = void 0 === t ? null : t,
                    n = l.showParentLevel,
                    f = void 0 === n || n,
                    r = l.limit,
                    d = void 0 === r ? 10 : r,
                    i = l.showMore,
                    m = void 0 !== i && i,
                    a = l.showMoreLimit,
                    p = void 0 === a ? 20 : a,
                    s = l.sortBy,
                    g = void 0 === s ? ['name:asc'] : s,
                    o = l.transformItems,
                    v =
                        void 0 === o
                            ? function (e) {
                                  return e
                              }
                            : o
                if (!c || !Array.isArray(c) || 0 === c.length)
                    throw new Error($t('The `attributes` option expects an array of strings.'))
                if (!0 === m && p <= d)
                    throw new Error($t('The `showMoreLimit` option must be greater than `limit`.'))
                var y = B(c, 1)[0]
                return {
                    $$type: 'ais.hierarchicalMenu',
                    isShowingMore: !1,
                    toggleShowMore: function () {},
                    cachedToggleShowMore: function () {
                        this.toggleShowMore()
                    },
                    createToggleShowMore: function (e) {
                        var t = this
                        return function () {
                            ;(t.isShowingMore = !t.isShowingMore), t.render(e)
                        }
                    },
                    getLimit: function () {
                        return this.isShowingMore ? p : d
                    },
                    init: function (e) {
                        var t = e.helper,
                            n = e.createURL,
                            r = e.instantSearchInstance
                        ;(this.cachedToggleShowMore = this.cachedToggleShowMore.bind(this)),
                            (this._refine = function (e) {
                                t.toggleRefinement(y, e).search()
                            }),
                            b(
                                {
                                    items: [],
                                    createURL: function (e) {
                                        return n(t.state.toggleRefinement(y, e))
                                    },
                                    refine: this._refine,
                                    instantSearchInstance: r,
                                    widgetParams: l,
                                    isShowingMore: !1,
                                    toggleShowMore: this.cachedToggleShowMore,
                                    canToggleShowMore: !1
                                },
                                !0
                            )
                    },
                    _prepareFacetValues: function (e, i) {
                        var a = this
                        return e.slice(0, this.getLimit()).map(function (e) {
                            var t = e.name,
                                n = e.path,
                                r = O(e, ['name', 'path'])
                            return (
                                Array.isArray(r.data) &&
                                    (r.data = a._prepareFacetValues(r.data, i)),
                                D({}, r, { label: t, value: n })
                            )
                        })
                    },
                    render: function (e) {
                        var t = e.results,
                            n = e.state,
                            r = e.createURL,
                            i = e.instantSearchInstance,
                            a = t.getFacetValues(y, { sortBy: g }).data || [],
                            s = v(this._prepareFacetValues(a), n)
                        var o = n.maxValuesPerFacet,
                            c = this.getLimit(),
                            u = c < o ? a.length <= c : a.length < c
                        ;(this.toggleShowMore = this.createToggleShowMore(e)),
                            b(
                                {
                                    items: s,
                                    refine: this._refine,
                                    createURL: function (e) {
                                        return r(n.toggleRefinement(y, e))
                                    },
                                    instantSearchInstance: i,
                                    widgetParams: l,
                                    isShowingMore: this.isShowingMore,
                                    toggleShowMore: this.cachedToggleShowMore,
                                    canToggleShowMore: m && (this.isShowingMore || !u)
                                },
                                !1
                            )
                    },
                    dispose: function (e) {
                        var t = e.state
                        return (
                            R(),
                            t
                                .removeHierarchicalFacet(y)
                                .setQueryParameter('maxValuesPerFacet', void 0)
                        )
                    },
                    getWidgetState: function (e, t) {
                        var n = t.searchParameters.getHierarchicalFacetBreadcrumb(y)
                        return n.length
                            ? D({}, e, { hierarchicalMenu: D({}, e.hierarchicalMenu, C({}, y, n)) })
                            : e
                    },
                    getWidgetSearchParameters: function (e, t) {
                        var n = t.uiState,
                            r = n.hierarchicalMenu && n.hierarchicalMenu[y]
                        if (e.isHierarchicalFacet(y)) e.getHierarchicalFacetByName(y)
                        var i = e
                                .removeHierarchicalFacet(y)
                                .addHierarchicalFacet({
                                    name: y,
                                    attributes: c,
                                    separator: u,
                                    rootPath: h,
                                    showParentLevel: f
                                }),
                            a = i.maxValuesPerFacet || 0,
                            s = Math.max(a, m ? p : d),
                            o = i.setQueryParameter('maxValuesPerFacet', s)
                        return r
                            ? o.addHierarchicalFacetRefinement(y, r.join(u))
                            : o.setQueryParameters({
                                  hierarchicalFacetsRefinements: D(
                                      {},
                                      o.hierarchicalFacetsRefinements,
                                      C({}, y, [])
                                  )
                              })
                    }
                }
            }
        )
    }
    var Kt = Ae({ name: 'hits', connector: !0 })
    function Jt(o) {
        var n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : Fe
        return (
            xe(o, Kt()),
            function () {
                var i = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                    e = i.escapeHTML,
                    a = void 0 === e || e,
                    t = i.transformItems,
                    s =
                        void 0 === t
                            ? function (e) {
                                  return e
                              }
                            : t
                return {
                    $$type: 'ais.hits',
                    init: function (e) {
                        var t = e.instantSearchInstance
                        o(
                            {
                                hits: [],
                                results: void 0,
                                instantSearchInstance: t,
                                widgetParams: i
                            },
                            !0
                        )
                    },
                    render: function (e) {
                        var t = e.results,
                            n = e.instantSearchInstance
                        a && 0 < t.hits.length && (t.hits = Ze(t.hits))
                        var r = t.hits.__escaped
                        ;(t.hits = Qe(t.hits, t.page, t.hitsPerPage)),
                            (t.hits = qe(t.hits, t.queryID)),
                            (t.hits = s(t.hits)),
                            (t.hits.__escaped = r),
                            o(
                                {
                                    hits: t.hits,
                                    results: t,
                                    instantSearchInstance: n,
                                    widgetParams: i
                                },
                                !1
                            )
                    },
                    dispose: function (e) {
                        var t = e.state
                        return (
                            n(),
                            a
                                ? t.setQueryParameters(
                                      Object.keys(Je).reduce(function (e, t) {
                                          return D({}, e, C({}, t, void 0))
                                      }, {})
                                  )
                                : t
                        )
                    },
                    getWidgetSearchParameters: function (e) {
                        return a ? e.setQueryParameters(Je) : e
                    }
                }
            }
        )
    }
    function Yt(e) {
        var t = e.method,
            n = e.results,
            r = e.hits,
            i = e.objectIDs,
            a = n.index,
            s = (function (n, e) {
                return e.map(function (t) {
                    var e = be(n, function (e) {
                        return e.objectID === t
                    })
                    if (void 0 === e)
                        throw new Error(
                            'Could not find objectID "'.concat(
                                t,
                                '" passed to `clickedObjectIDsAfterSearch` in the returned hits. This is necessary to infer the absolute position and the query ID.'
                            )
                        )
                    return e
                })
            })(r, i),
            o = (function (e) {
                var t = he(
                    e.map(function (e) {
                        return e.__queryID
                    })
                )
                if (1 < t.length)
                    throw new Error(
                        'Insights currently allows a single `queryID`. The `objectIDs` provided map to multiple `queryID`s.'
                    )
                var n = t[0]
                if ('string' != typeof n)
                    throw new Error(
                        'Could not infer `queryID`. Ensure InstantSearch `clickAnalytics: true` was added with the Configure widget.\n\nSee: https://alg.li/lNiZZ7'
                    )
                return n
            })(s)
        switch (t) {
            case 'clickedObjectIDsAfterSearch':
                return {
                    index: a,
                    queryID: o,
                    objectIDs: i,
                    positions: (function (e) {
                        return e.map(function (e) {
                            return e.__position
                        })
                    })(s)
                }
            case 'convertedObjectIDsAfterSearch':
                return { index: a, queryID: o, objectIDs: i }
            default:
                throw new Error('Unsupported method passed to insights: "'.concat(t, '".'))
        }
    }
    var Xt = function (i, a, s) {
        return function (e, t) {
            if (!i) {
                var n = Ae({ name: 'instantsearch' })
                throw new Error(
                    n('The `insightsClient` option has not been provided to `instantsearch`.')
                )
            }
            if (!Array.isArray(t.objectIDs))
                throw new TypeError('Expected `objectIDs` to be an array.')
            var r = Yt({ method: e, results: a, hits: s, objectIDs: t.objectIDs })
            i(e, D({}, r, {}, t))
        }
    }
    function Gt(n) {
        return function (e, t) {
            return n(
                (function (s) {
                    return function (e, t) {
                        var n = e.results,
                            r = e.hits,
                            i = e.instantSearchInstance
                        if (n && r && i) {
                            var a = Xt(i.insightsClient, n, r)
                            return s(D({}, e, { insights: a }), t)
                        }
                        return s(e, t)
                    }
                })(e),
                t
            )
        }
    }
    var Zt,
        en,
        tn,
        nn,
        rn,
        an = {},
        sn = [],
        on = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i
    function cn(e, t) {
        for (var n in t) e[n] = t[n]
        return e
    }
    function un(e) {
        var t = e.parentNode
        t && t.removeChild(e)
    }
    function ln(e, t, n) {
        var r,
            i,
            a,
            s,
            o = arguments
        if (((t = cn({}, t)), 3 < arguments.length))
            for (n = [n], r = 3; r < arguments.length; r++) n.push(o[r])
        if ((null != n && (t.children = n), null != e && null != e.defaultProps))
            for (i in e.defaultProps) void 0 === t[i] && (t[i] = e.defaultProps[i])
        return (
            (s = t.key),
            null != (a = t.ref) && delete t.ref,
            null != s && delete t.key,
            hn(e, t, s, a)
        )
    }
    function hn(e, t, n, r) {
        var i = {
            type: e,
            props: t,
            key: n,
            ref: r,
            __k: null,
            __p: null,
            __b: 0,
            __e: null,
            l: null,
            __c: null,
            constructor: void 0
        }
        return Zt.vnode && Zt.vnode(i), i
    }
    function fn(e) {
        return e.children
    }
    function dn(e, t) {
        ;(this.props = e), (this.context = t)
    }
    function mn(e, t) {
        if (null == t) return e.__p ? mn(e.__p, e.__p.__k.indexOf(e) + 1) : null
        for (var n; t < e.__k.length; t++) if (null != (n = e.__k[t]) && null != n.__e) return n.__e
        return 'function' == typeof e.type ? mn(e) : null
    }
    function pn(e) {
        var t, n
        if (null != (e = e.__p) && null != e.__c) {
            for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
                if (null != (n = e.__k[t]) && null != n.__e) {
                    e.__e = e.__c.base = n.__e
                    break
                }
            return pn(e)
        }
    }
    function gn(e) {
        ;((!e.__d && (e.__d = !0) && 1 === en.push(e)) || nn !== Zt.debounceRendering) &&
            ((nn = Zt.debounceRendering), (Zt.debounceRendering || tn)(vn))
    }
    function vn() {
        var e, t, n, r, i, a, s, o
        for (
            en.sort(function (e, t) {
                return t.__v.__b - e.__v.__b
            });
            (e = en.pop());

        )
            e.__d &&
                ((r = n = void 0),
                (a = (i = (t = e).__v).__e),
                (s = t.__P),
                (o = t.u),
                (t.u = !1),
                s &&
                    ((n = []),
                    (r = Pn(
                        s,
                        i,
                        cn({}, i),
                        t.__n,
                        void 0 !== s.ownerSVGElement,
                        null,
                        n,
                        o,
                        null == a ? mn(i) : a
                    )),
                    _n(n, i),
                    r != a && pn(i)))
    }
    function yn(t, n, e, r, i, a, s, o, c) {
        var u,
            l,
            h,
            f,
            d,
            m,
            p,
            g = (e && e.__k) || sn,
            v = g.length
        if (
            (o == an && (o = null != a ? a[0] : v ? mn(e, 0) : null),
            (u = 0),
            (n.__k = bn(n.__k, function (e) {
                if (null != e) {
                    if (
                        ((e.__p = n),
                        (e.__b = n.__b + 1),
                        null === (h = g[u]) || (h && e.key == h.key && e.type === h.type))
                    )
                        g[u] = void 0
                    else
                        for (l = 0; l < v; l++) {
                            if ((h = g[l]) && e.key == h.key && e.type === h.type) {
                                g[l] = void 0
                                break
                            }
                            h = null
                        }
                    if (
                        ((f = Pn(t, e, (h = h || an), r, i, a, s, null, o, c)),
                        (l = e.ref) && h.ref != l && (p = p || []).push(l, e.__c || f, e),
                        null != f)
                    ) {
                        if ((null == m && (m = f), null != e.l)) (f = e.l), (e.l = null)
                        else if (a == h || f != o || null == f.parentNode) {
                            e: if (null == o || o.parentNode !== t) t.appendChild(f)
                            else {
                                for (d = o, l = 0; (d = d.nextSibling) && l < v; l += 2)
                                    if (d == f) break e
                                t.insertBefore(f, o)
                            }
                            'option' == n.type && (t.value = '')
                        }
                        ;(o = f.nextSibling), 'function' == typeof n.type && (n.l = f)
                    }
                }
                return u++, e
            })),
            (n.__e = m),
            null != a && 'function' != typeof n.type)
        )
            for (u = a.length; u--; ) null != a[u] && un(a[u])
        for (u = v; u--; ) null != g[u] && Nn(g[u], g[u])
        if (p) for (u = 0; u < p.length; u++) xn(p[u], p[++u], p[++u])
    }
    function bn(e, t, n) {
        if ((null == n && (n = []), null == e || 'boolean' == typeof e)) t && n.push(t(null))
        else if (Array.isArray(e)) for (var r = 0; r < e.length; r++) bn(e[r], t, n)
        else
            n.push(
                t
                    ? t(
                          (function (e) {
                              if (null == e || 'boolean' == typeof e) return null
                              if ('string' == typeof e || 'number' == typeof e)
                                  return hn(null, e, null, null)
                              if (null == e.__e && null == e.__c) return e
                              var t = hn(e.type, e.props, e.key, null)
                              return (t.__e = e.__e), t
                          })(e)
                      )
                    : e
            )
        return n
    }
    function Rn(e, t, n) {
        '-' === t[0]
            ? e.setProperty(t, n)
            : (e[t] = 'number' == typeof n && !1 === on.test(t) ? n + 'px' : null == n ? '' : n)
    }
    function wn(e, t, n, r, i) {
        var a, s, o, c, u
        if (
            'key' ===
                (t = i ? ('className' === t ? 'class' : t) : 'class' === t ? 'className' : t) ||
            'children' === t
        );
        else if ('style' === t)
            if (((a = e.style), 'string' == typeof n)) a.cssText = n
            else {
                if (('string' == typeof r && ((a.cssText = ''), (r = null)), r))
                    for (s in r) (n && s in n) || Rn(a, s, '')
                if (n) for (o in n) (r && n[o] === r[o]) || Rn(a, o, n[o])
            }
        else
            'o' === t[0] && 'n' === t[1]
                ? ((c = t !== (t = t.replace(/Capture$/, ''))),
                  (t = ((u = t.toLowerCase()) in e ? u : t).slice(2)),
                  n
                      ? (r || e.addEventListener(t, Sn, c), ((e.t || (e.t = {}))[t] = n))
                      : e.removeEventListener(t, Sn, c))
                : 'list' !== t && 'tagName' !== t && 'form' !== t && !i && t in e
                ? (e[t] = null == n ? '' : n)
                : 'function' != typeof n &&
                  'dangerouslySetInnerHTML' !== t &&
                  (t !== (t = t.replace(/^xlink:?/, ''))
                      ? null == n || !1 === n
                          ? e.removeAttributeNS('http://www.w3.org/1999/xlink', t.toLowerCase())
                          : e.setAttributeNS('http://www.w3.org/1999/xlink', t.toLowerCase(), n)
                      : null == n || !1 === n
                      ? e.removeAttribute(t)
                      : e.setAttribute(t, n))
    }
    function Sn(e) {
        return this.t[e.type](Zt.event ? Zt.event(e) : e)
    }
    function Pn(e, t, n, r, i, a, s, o, c, u) {
        var l,
            h,
            f,
            d,
            m,
            p,
            g,
            v,
            y,
            b,
            R = t.type
        if (void 0 !== t.constructor) return null
        ;(l = Zt.__b) && l(t)
        try {
            e: if ('function' == typeof R) {
                if (
                    ((v = t.props),
                    (y = (l = R.contextType) && r[l.__c]),
                    (b = l ? (y ? y.props.value : l.__p) : r),
                    n.__c
                        ? (g = (h = t.__c = n.__c).__p = h.__E)
                        : ('prototype' in R && R.prototype.render
                              ? (t.__c = h = new R(v, b))
                              : ((t.__c = h = new dn(v, b)), (h.constructor = R), (h.render = Fn)),
                          y && y.sub(h),
                          (h.props = v),
                          h.state || (h.state = {}),
                          (h.context = b),
                          (h.__n = r),
                          (f = h.__d = !0),
                          (h.__h = [])),
                    null == h.__s && (h.__s = h.state),
                    null != R.getDerivedStateFromProps &&
                        cn(
                            h.__s == h.state ? (h.__s = cn({}, h.__s)) : h.__s,
                            R.getDerivedStateFromProps(v, h.__s)
                        ),
                    f)
                )
                    null == R.getDerivedStateFromProps &&
                        null != h.componentWillMount &&
                        h.componentWillMount(),
                        null != h.componentDidMount && s.push(h)
                else {
                    if (
                        (null == R.getDerivedStateFromProps &&
                            null == o &&
                            null != h.componentWillReceiveProps &&
                            h.componentWillReceiveProps(v, b),
                        !o &&
                            null != h.shouldComponentUpdate &&
                            !1 === h.shouldComponentUpdate(v, h.__s, b))
                    ) {
                        for (
                            h.props = v,
                                h.state = h.__s,
                                h.__d = !1,
                                (h.__v = t).__e = null != c ? (c !== n.__e ? c : n.__e) : null,
                                t.__k = n.__k,
                                l = 0;
                            l < t.__k.length;
                            l++
                        )
                            t.__k[l] && (t.__k[l].__p = t)
                        break e
                    }
                    null != h.componentWillUpdate && h.componentWillUpdate(v, h.__s, b)
                }
                for (
                    d = h.props,
                        m = h.state,
                        h.context = b,
                        h.props = v,
                        h.state = h.__s,
                        (l = Zt.__r) && l(t),
                        h.__d = !1,
                        h.__v = t,
                        h.__P = e,
                        l = h.render(h.props, h.state, h.context),
                        t.__k = bn(
                            null != l && l.type == fn && null == l.key ? l.props.children : l
                        ),
                        null != h.getChildContext && (r = cn(cn({}, r), h.getChildContext())),
                        f ||
                            null == h.getSnapshotBeforeUpdate ||
                            (p = h.getSnapshotBeforeUpdate(d, m)),
                        yn(e, t, n, r, i, a, s, c, u),
                        h.base = t.__e;
                    (l = h.__h.pop());

                )
                    h.__s && (h.state = h.__s), l.call(h)
                f || null == d || null == h.componentDidUpdate || h.componentDidUpdate(d, m, p),
                    g && (h.__E = h.__p = null)
            } else
                t.__e = (function (e, t, n, r, i, a, s, o) {
                    var c,
                        u,
                        l,
                        h,
                        f = n.props,
                        d = t.props
                    if (((i = 'svg' === t.type || i), null == e && null != a))
                        for (c = 0; c < a.length; c++)
                            if (
                                null != (u = a[c]) &&
                                (null === t.type ? 3 === u.nodeType : u.localName === t.type)
                            ) {
                                ;(e = u), (a[c] = null)
                                break
                            }
                    if (null == e) {
                        if (null === t.type) return document.createTextNode(d)
                        ;(e = i
                            ? document.createElementNS('http://www.w3.org/2000/svg', t.type)
                            : document.createElement(t.type)),
                            (a = null)
                    }
                    return (
                        null === t.type
                            ? f !== d && (null != a && (a[a.indexOf(e)] = null), (e.data = d))
                            : t !== n &&
                              (null != a && (a = sn.slice.call(e.childNodes)),
                              (l = (f = n.props || an).dangerouslySetInnerHTML),
                              (h = d.dangerouslySetInnerHTML),
                              o ||
                                  ((h || l) &&
                                      ((h && l && h.__html == l.__html) ||
                                          (e.innerHTML = (h && h.__html) || ''))),
                              (function (e, t, n, r, i) {
                                  var a
                                  for (a in n) a in t || wn(e, a, null, n[a], r)
                                  for (a in t)
                                      (i && 'function' != typeof t[a]) ||
                                          'value' === a ||
                                          'checked' === a ||
                                          n[a] === t[a] ||
                                          wn(e, a, t[a], n[a], r)
                              })(e, d, f, i, o),
                              (t.__k = t.props.children),
                              h || yn(e, t, n, r, 'foreignObject' !== t.type && i, a, s, an, o),
                              o ||
                                  ('value' in d &&
                                      void 0 !== d.value &&
                                      d.value !== e.value &&
                                      (e.value = null == d.value ? '' : d.value),
                                  'checked' in d &&
                                      void 0 !== d.checked &&
                                      d.checked !== e.checked &&
                                      (e.checked = d.checked))),
                        e
                    )
                })(n.__e, t, n, r, i, a, s, u)
            ;(l = Zt.diffed) && l(t)
        } catch (e) {
            Zt.__e(e, t, n)
        }
        return t.__e
    }
    function _n(e, t) {
        for (var n; (n = e.pop()); )
            try {
                n.componentDidMount()
            } catch (e) {
                Zt.__e(e, n.__v)
            }
        Zt.__c && Zt.__c(t)
    }
    function xn(e, t, n) {
        try {
            'function' == typeof e ? e(t) : (e.current = t)
        } catch (e) {
            Zt.__e(e, n)
        }
    }
    function Nn(e, t, n) {
        var r, i, a
        if (
            (Zt.unmount && Zt.unmount(e),
            (r = e.ref) && xn(r, null, t),
            n || 'function' == typeof e.type || (n = null != (i = e.__e)),
            (e.__e = e.l = null),
            null != (r = e.__c))
        ) {
            if (r.componentWillUnmount)
                try {
                    r.componentWillUnmount()
                } catch (e) {
                    Zt.__e(e, t)
                }
            r.base = r.__P = null
        }
        if ((r = e.__k)) for (a = 0; a < r.length; a++) r[a] && Nn(r[a], t, n)
        null != i && un(i)
    }
    function Fn(e, t, n) {
        return this.constructor(e, n)
    }
    function Cn(e, t, n) {
        var r, i, a
        Zt.__p && Zt.__p(e, t),
            (i = (r = n === rn) ? null : (n && n.__k) || t.__k),
            (e = ln(fn, null, [e])),
            (a = []),
            Pn(
                t,
                r ? (t.__k = e) : ((n || t).__k = e),
                i || an,
                an,
                void 0 !== t.ownerSVGElement,
                n && !r ? [n] : i ? null : sn.slice.call(t.childNodes),
                a,
                !1,
                n || an,
                r
            ),
            _n(a, e)
    }
    ;(Zt = {}),
        (dn.prototype.setState = function (e, t) {
            var n = (this.__s !== this.state && this.__s) || (this.__s = cn({}, this.state))
            ;('function' == typeof e && !(e = e(n, this.props))) || cn(n, e),
                null != e && this.__v && ((this.u = !1), t && this.__h.push(t), gn(this))
        }),
        (dn.prototype.forceUpdate = function (e) {
            this.__v && (e && this.__h.push(e), (this.u = !0), gn(this))
        }),
        (dn.prototype.render = fn),
        (en = []),
        (tn =
            'function' == typeof Promise
                ? Promise.prototype.then.bind(Promise.resolve())
                : setTimeout),
        (nn = Zt.debounceRendering),
        (Zt.__e = function (e, t, n) {
            for (var r; (t = t.__p); )
                if ((r = t.__c) && !r.__p)
                    try {
                        if (r.constructor && null != r.constructor.getDerivedStateFromError)
                            r.setState(r.constructor.getDerivedStateFromError(e))
                        else {
                            if (null == r.componentDidCatch) continue
                            r.componentDidCatch(e)
                        }
                        return gn((r.__E = r))
                    } catch (t) {
                        e = t
                    }
            throw e
        }),
        (rn = an)
    function In(e) {
        return function (a) {
            return ln(
                'div',
                {
                    onClick: function (e) {
                        var t = (function (e, t) {
                            for (var n = e; n && !n.hasAttribute('data-insights-method'); ) {
                                if (n === t) return null
                                n = n.parentElement
                            }
                            return n
                        })(e.target, e.currentTarget)
                        if (t) {
                            var n = (function (e) {
                                    var t = e.getAttribute('data-insights-method'),
                                        n = e.getAttribute('data-insights-payload')
                                    if ('string' != typeof n)
                                        throw new Error(
                                            'The insights helper expects `data-insights-payload` to be a base64-encoded JSON string.'
                                        )
                                    try {
                                        return { method: t, payload: JSON.parse(atob(n)) }
                                    } catch (e) {
                                        throw new Error(
                                            'The insights helper was unable to parse `data-insights-payload`.'
                                        )
                                    }
                                })(t),
                                r = n.method,
                                i = n.payload
                            a.insights(r, i)
                        }
                    }
                },
                ln(e, a)
            )
        }
    }
    var Mn = Gt(Jt),
        Ln = Ae({ name: 'hits-per-page', connector: !0 })
    function Tn(c) {
        var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : Fe
        return (
            xe(c, Ln()),
            function () {
                var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                    e = a.items,
                    t = a.transformItems,
                    s =
                        void 0 === t
                            ? function (e) {
                                  return e
                              }
                            : t,
                    o = e
                if (!Array.isArray(o))
                    throw new Error(Ln('The `items` option expects an array of objects.'))
                var n = o.filter(function (e) {
                    return !0 === e.default
                })
                if (0 === n.length)
                    throw new Error(Ln('A default value must be specified in `items`.'))
                if (1 < n.length)
                    throw new Error(Ln('More than one default value is specified in `items`.'))
                var r = n[0]
                return {
                    $$type: 'ais.hitsPerPage',
                    init: function (e) {
                        var t = e.helper,
                            n = e.createURL,
                            r = e.state,
                            i = e.instantSearchInstance
                        o.some(function (e) {
                            return Number(r.hitsPerPage) === Number(e.value)
                        }) || (o = [{ value: '', label: '' }].concat(w(o))),
                            (this.setHitsPerPage = function (e) {
                                return e || 0 === e
                                    ? t.setQueryParameter('hitsPerPage', e).search()
                                    : t.setQueryParameter('hitsPerPage', void 0).search()
                            }),
                            (this.createURL = function (t) {
                                return function (e) {
                                    return n(
                                        t.setQueryParameter(
                                            'hitsPerPage',
                                            e || 0 === e ? e : void 0
                                        )
                                    )
                                }
                            }),
                            c(
                                {
                                    items: s(this._normalizeItems(r)),
                                    refine: this.setHitsPerPage,
                                    createURL: this.createURL(t.state),
                                    hasNoResults: !0,
                                    widgetParams: a,
                                    instantSearchInstance: i
                                },
                                !0
                            )
                    },
                    render: function (e) {
                        var t = e.state,
                            n = e.results,
                            r = e.instantSearchInstance,
                            i = 0 === n.nbHits
                        c(
                            {
                                items: s(this._normalizeItems(t)),
                                refine: this.setHitsPerPage,
                                createURL: this.createURL(t),
                                hasNoResults: i,
                                widgetParams: a,
                                instantSearchInstance: r
                            },
                            !1
                        )
                    },
                    _normalizeItems: function (e) {
                        var t = e.hitsPerPage
                        return o.map(function (e) {
                            return D({}, e, { isRefined: Number(e.value) === Number(t) })
                        })
                    },
                    dispose: function (e) {
                        var t = e.state
                        return i(), t.setQueryParameter('hitsPerPage', void 0)
                    },
                    getWidgetState: function (e, t) {
                        var n = t.searchParameters.hitsPerPage
                        return void 0 === n || n === r.value ? e : D({}, e, { hitsPerPage: n })
                    },
                    getWidgetSearchParameters: function (e, t) {
                        var n = t.uiState
                        return e.setQueryParameters({ hitsPerPage: n.hitsPerPage || r.value })
                    }
                }
            }
        )
    }
    function kn(R, e) {
        var a = 1 < arguments.length && void 0 !== e ? e : Fe
        return (
            xe(R, jn()),
            function (l) {
                function h(e) {
                    var n = 0 < arguments.length && void 0 !== e ? e : {}
                    return Object.keys(n)
                        .filter(function (e) {
                            return Array.isArray(n[e]) ? n[e].length : Object.keys(n[e]).length
                        })
                        .reduce(function (e, t) {
                            return (e[t] = n[t]), e
                        }, {})
                }
                var f,
                    d,
                    m,
                    e = l || {},
                    t = e.escapeHTML,
                    p = void 0 === t || t,
                    n = e.transformItems,
                    g =
                        void 0 === n
                            ? function (e) {
                                  return e
                              }
                            : n,
                    r = e.showPrevious,
                    i = void 0 !== r && r,
                    v = [],
                    y = 1 / 0,
                    b = -1
                return {
                    $$type: 'ais.infiniteHits',
                    init: function (e) {
                        var t = e.instantSearchInstance,
                            n = e.helper
                        ;(d = (function (e) {
                            return function () {
                                e.overrideStateWithoutTriggeringChangeEvent(
                                    D({}, e.state, { page: y - 1 })
                                ).search()
                            }
                        })(n)),
                            (m = (function (e) {
                                return function () {
                                    e.setPage(b + 1).search()
                                }
                            })(n)),
                            (y = n.state.page || 0),
                            (b = n.state.page || 0),
                            R(
                                {
                                    hits: v,
                                    results: void 0,
                                    showPrevious: d,
                                    showMore: m,
                                    isFirstPage: 0 === y,
                                    isLastPage: !0,
                                    instantSearchInstance: t,
                                    widgetParams: l
                                },
                                !0
                            )
                    },
                    render: function (e) {
                        var t = e.results,
                            n = e.state,
                            r = e.instantSearchInstance,
                            i = n.page,
                            a = void 0 === i ? 0 : i,
                            s =
                                (n.facets,
                                n.hierarchicalFacets,
                                n.disjunctiveFacets,
                                n.maxValuesPerFacet,
                                O(n, [
                                    'page',
                                    'facets',
                                    'hierarchicalFacets',
                                    'disjunctiveFacets',
                                    'maxValuesPerFacet'
                                ]))
                        ;(s.facetsRefinements = h(s.facetsRefinements)),
                            (s.hierarchicalFacetsRefinements = h(s.hierarchicalFacetsRefinements)),
                            (s.disjunctiveFacetsRefinements = h(s.disjunctiveFacetsRefinements)),
                            (s.numericRefinements = h(s.numericRefinements)),
                            Te(s, f) || ((v = []), (b = y = a), (f = s)),
                            p && 0 < t.hits.length && (t.hits = Ze(t.hits))
                        var o = t.hits.__escaped
                        ;(t.hits = Qe(t.hits, t.page, t.hitsPerPage)),
                            (t.hits = qe(t.hits, t.queryID)),
                            (t.hits = g(t.hits)),
                            (t.hits.__escaped = o),
                            b < a || !v.length
                                ? ((v = [].concat(w(v), w(t.hits))), (b = a))
                                : a < y && ((v = [].concat(w(t.hits), w(v))), (y = a))
                        var c = 0 === y,
                            u = t.nbPages <= t.page + 1
                        R(
                            {
                                hits: v,
                                results: t,
                                showPrevious: d,
                                showMore: m,
                                isFirstPage: c,
                                isLastPage: u,
                                instantSearchInstance: r,
                                widgetParams: l
                            },
                            !1
                        )
                    },
                    dispose: function (e) {
                        var t = e.state
                        a()
                        var n = t.setQueryParameter('page', void 0)
                        return p
                            ? n.setQueryParameters(
                                  Object.keys(Je).reduce(function (e, t) {
                                      return D({}, e, C({}, t, void 0))
                                  }, {})
                              )
                            : n
                    },
                    getWidgetState: function (e, t) {
                        var n = t.searchParameters.page || 0
                        return i && n ? D({}, e, { page: n + 1 }) : e
                    },
                    getWidgetSearchParameters: function (e, t) {
                        var n = t.uiState,
                            r = e
                        p && (r = e.setQueryParameters(Je))
                        var i = n.page ? n.page - 1 : 0
                        return r.setQueryParameter('page', i)
                    }
                }
            }
        )
    }
    var jn = Ae({ name: 'infinite-hits', connector: !0 }),
        En = Gt(kn),
        On = Ae({ name: 'menu', connector: !0 })
    function An(d) {
        var a = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : Fe
        return (
            xe(d, On()),
            function () {
                var s = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                    c = s.attribute,
                    e = s.limit,
                    u = void 0 === e ? 10 : e,
                    t = s.showMore,
                    l = void 0 !== t && t,
                    n = s.showMoreLimit,
                    h = void 0 === n ? 20 : n,
                    r = s.sortBy,
                    o = void 0 === r ? ['isRefined', 'name:asc'] : r,
                    i = s.transformItems,
                    f =
                        void 0 === i
                            ? function (e) {
                                  return e
                              }
                            : i
                if (!c) throw new Error(On('The `attribute` option is required.'))
                if (!0 === l && h <= u)
                    throw new Error(On('The `showMoreLimit` option must be greater than `limit`.'))
                return {
                    $$type: 'ais.menu',
                    isShowingMore: !1,
                    toggleShowMore: function () {},
                    cachedToggleShowMore: function () {
                        this.toggleShowMore()
                    },
                    createToggleShowMore: function (e) {
                        var t = this,
                            n = e.results,
                            r = e.instantSearchInstance
                        return function () {
                            ;(t.isShowingMore = !t.isShowingMore),
                                t.render({ results: n, instantSearchInstance: r })
                        }
                    },
                    getLimit: function () {
                        return this.isShowingMore ? h : u
                    },
                    refine: function (n) {
                        return function (e) {
                            var t = B(n.getHierarchicalFacetBreadcrumb(c), 1)[0]
                            n.toggleRefinement(c, e || t).search()
                        }
                    },
                    init: function (e) {
                        var t = e.helper,
                            n = e.createURL,
                            r = e.instantSearchInstance
                        ;(this.cachedToggleShowMore = this.cachedToggleShowMore.bind(this)),
                            (this._createURL = function (e) {
                                return n(t.state.toggleRefinement(c, e))
                            }),
                            (this._refine = this.refine(t)),
                            d(
                                {
                                    items: [],
                                    createURL: this._createURL,
                                    refine: this._refine,
                                    instantSearchInstance: r,
                                    canRefine: !1,
                                    widgetParams: s,
                                    isShowingMore: this.isShowingMore,
                                    toggleShowMore: this.cachedToggleShowMore,
                                    canToggleShowMore: !1
                                },
                                !0
                            )
                    },
                    render: function (e) {
                        var t = e.results,
                            n = e.instantSearchInstance,
                            r = t.getFacetValues(c, { sortBy: o }),
                            i = r && r.data ? r.data : [],
                            a = f(
                                i.slice(0, this.getLimit()).map(function (e) {
                                    var t = e.name,
                                        n = e.path
                                    return D({}, O(e, ['name', 'path']), { label: t, value: n })
                                })
                            )
                        ;(this.toggleShowMore = this.createToggleShowMore({
                            results: t,
                            instantSearchInstance: n
                        })),
                            d(
                                {
                                    items: a,
                                    createURL: this._createURL,
                                    refine: this._refine,
                                    instantSearchInstance: n,
                                    canRefine: 0 < a.length,
                                    widgetParams: s,
                                    isShowingMore: this.isShowingMore,
                                    toggleShowMore: this.cachedToggleShowMore,
                                    canToggleShowMore:
                                        l && (this.isShowingMore || i.length > this.getLimit())
                                },
                                !1
                            )
                    },
                    dispose: function (e) {
                        var t = e.state
                        return (
                            a(),
                            t
                                .removeHierarchicalFacet(c)
                                .setQueryParameter('maxValuesPerFacet', void 0)
                        )
                    },
                    getWidgetState: function (e, t) {
                        var n = B(t.searchParameters.getHierarchicalFacetBreadcrumb(c), 1)[0]
                        return n ? D({}, e, { menu: D({}, e.menu, C({}, c, n)) }) : e
                    },
                    getWidgetSearchParameters: function (e, t) {
                        var n = t.uiState,
                            r = n.menu && n.menu[c],
                            i = e
                                .removeHierarchicalFacet(c)
                                .addHierarchicalFacet({ name: c, attributes: [c] }),
                            a = i.maxValuesPerFacet || 0,
                            s = Math.max(a, l ? h : u),
                            o = i.setQueryParameter('maxValuesPerFacet', s)
                        return r
                            ? o.addHierarchicalFacetRefinement(c, r)
                            : o.setQueryParameters({
                                  hierarchicalFacetsRefinements: D(
                                      {},
                                      o.hierarchicalFacetsRefinements,
                                      C({}, c, [])
                                  )
                              })
                    }
                }
            }
        )
    }
    function Hn(l, e) {
        var h = 1 < arguments.length && void 0 !== e ? e : Fe
        return (
            xe(l, Dn()),
            function (i) {
                var e = i || {},
                    t = e.attribute,
                    u = void 0 === t ? '' : t,
                    n = e.items,
                    r = void 0 === n ? [] : n,
                    a = e.transformItems,
                    s =
                        void 0 === a
                            ? function (e) {
                                  return e
                              }
                            : a
                if ('' === u) throw new Error(Dn('The `attribute` option is required.'))
                if (!r || 0 === r.length)
                    throw new Error(Dn('The `items` option expects an array of objects.'))
                function o(i) {
                    return r.map(function (e) {
                        var t = e.start,
                            n = e.end,
                            r = e.label
                        return {
                            label: r,
                            value: window.encodeURI(JSON.stringify({ start: t, end: n })),
                            isRefined: Bn(i, u, { start: t, end: n, label: r })
                        }
                    })
                }
                var c = {}
                return {
                    $$type: 'ais.numericMenu',
                    init: function (e) {
                        var n = e.helper,
                            r = e.createURL,
                            t = e.instantSearchInstance
                        ;(c.refine = function (e) {
                            var t = Qn(n.state, u, e)
                            n.setState(t).search()
                        }),
                            (c.createURL = function (t) {
                                return function (e) {
                                    return r(Qn(t, u, e))
                                }
                            }),
                            l(
                                {
                                    createURL: c.createURL(n.state),
                                    items: s(o(n.state)),
                                    hasNoResults: !0,
                                    refine: c.refine,
                                    instantSearchInstance: t,
                                    widgetParams: i
                                },
                                !0
                            )
                    },
                    render: function (e) {
                        var t = e.results,
                            n = e.state,
                            r = e.instantSearchInstance
                        l(
                            {
                                createURL: c.createURL(n),
                                items: s(o(n)),
                                hasNoResults: 0 === t.nbHits,
                                refine: c.refine,
                                instantSearchInstance: r,
                                widgetParams: i
                            },
                            !1
                        )
                    },
                    dispose: function (e) {
                        var t = e.state
                        return h(), t.clearRefinements(u)
                    },
                    getWidgetState: function (e, t) {
                        var n = t.searchParameters.getNumericRefinements(u),
                            r = n['='] && n['='][0]
                        if (r || 0 === r)
                            return D({}, e, {
                                numericMenu: D({}, e.numericMenu, C({}, u, ''.concat(n['='])))
                            })
                        var i = (n['>='] && n['>='][0]) || '',
                            a = (n['<='] && n['<='][0]) || ''
                        return '' === i && '' === a
                            ? e
                            : D({}, e, {
                                  numericMenu: D(
                                      {},
                                      e.numericMenu,
                                      C({}, u, ''.concat(i, ':').concat(a))
                                  )
                              })
                    },
                    getWidgetSearchParameters: function (e, t) {
                        var n = t.uiState,
                            r = n.numericMenu && n.numericMenu[u],
                            i = e.clearRefinements(u)
                        if (!r)
                            return i.setQueryParameters({
                                numericRefinements: D({}, i.numericRefinements, C({}, u, {}))
                            })
                        if (-1 === r.indexOf(':')) return i.addNumericRefinement(u, '=', Number(r))
                        var a = B(r.split(':').map(parseFloat), 2),
                            s = a[0],
                            o = a[1],
                            c = Ce(s) ? i.addNumericRefinement(u, '>=', s) : i
                        return Ce(o) ? c.addNumericRefinement(u, '<=', o) : c
                    }
                }
            }
        )
    }
    var Dn = Ae({ name: 'numeric-menu', connector: !0 })
    function Bn(e, t, n) {
        var r = e.getNumericRefinements(t)
        return void 0 !== n.start && void 0 !== n.end && n.start === n.end
            ? qn(r, '=', n.start)
            : void 0 !== n.start
            ? qn(r, '>=', n.start)
            : void 0 !== n.end
            ? qn(r, '<=', n.end)
            : void 0 === n.start &&
              void 0 === n.end &&
              Object.keys(r).every(function (e) {
                  return 0 === (r[e] || []).length
              })
    }
    function Qn(e, t, n) {
        var r = e,
            i = JSON.parse(window.decodeURI(n)),
            a = r.getNumericRefinements(t)
        if (void 0 === i.start && void 0 === i.end) return r.removeNumericRefinement(t)
        if (
            (Bn(r, t, i) || (r = r.removeNumericRefinement(t)),
            void 0 !== i.start && void 0 !== i.end)
        ) {
            if (i.start > i.end) throw new Error('option.start should be > to option.end')
            if (i.start === i.end)
                return (r = qn(a, '=', i.start)
                    ? r.removeNumericRefinement(t, '=', i.start)
                    : r.addNumericRefinement(t, '=', i.start))
        }
        return (
            void 0 !== i.start &&
                (r = qn(a, '>=', i.start)
                    ? r.removeNumericRefinement(t, '>=', i.start)
                    : r.addNumericRefinement(t, '>=', i.start)),
            void 0 !== i.end &&
                (r = qn(a, '<=', i.end)
                    ? r.removeNumericRefinement(t, '<=', i.end)
                    : r.addNumericRefinement(t, '<=', i.end)),
            'number' == typeof r.page && (r.page = 0),
            r
        )
    }
    function qn(e, t, n) {
        return void 0 !== e[t] && e[t].includes(n)
    }
    var Un = (function () {
            function t(e) {
                T(this, t),
                    (this.currentPage = e.currentPage),
                    (this.total = e.total),
                    (this.padding = e.padding)
            }
            return (
                k(t, [
                    {
                        key: 'pages',
                        value: function () {
                            var e = this.total,
                                t = this.currentPage,
                                n = this.padding
                            if (0 === e) return [0]
                            var r = this.nbPagesDisplayed(n, e)
                            if (r === e) return Me({ end: e })
                            var i = this.calculatePaddingLeft(t, n, e, r)
                            return Me({ start: t - i, end: t + (r - i) })
                        }
                    },
                    {
                        key: 'nbPagesDisplayed',
                        value: function (e, t) {
                            return Math.min(2 * e + 1, t)
                        }
                    },
                    {
                        key: 'calculatePaddingLeft',
                        value: function (e, t, n, r) {
                            return e <= t ? e : n - t <= e ? r - (n - e) : t
                        }
                    },
                    {
                        key: 'isLastPage',
                        value: function () {
                            return this.currentPage === this.total - 1
                        }
                    },
                    {
                        key: 'isFirstPage',
                        value: function () {
                            return 0 === this.currentPage
                        }
                    }
                ]),
                t
            )
        })(),
        Vn = Ae({ name: 'pagination', connector: !0 })
    function Wn(c) {
        var r = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : Fe
        return (
            xe(c, Vn()),
            function () {
                var s = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                    n = s.totalPages,
                    e = s.padding,
                    o = new Un({ currentPage: 0, total: 0, padding: void 0 === e ? 3 : e })
                return {
                    $$type: 'ais.pagination',
                    init: function (e) {
                        var t = e.helper,
                            n = e.createURL,
                            r = e.instantSearchInstance
                        ;(this.refine = function (e) {
                            t.setPage(e), t.search()
                        }),
                            (this.createURL = function (t) {
                                return function (e) {
                                    return n(t.setPage(e))
                                }
                            }),
                            c(
                                {
                                    createURL: this.createURL(t.state),
                                    currentRefinement: t.state.page || 0,
                                    nbHits: 0,
                                    nbPages: 0,
                                    pages: [],
                                    isFirstPage: !0,
                                    isLastPage: !0,
                                    refine: this.refine,
                                    widgetParams: s,
                                    instantSearchInstance: r
                                },
                                !0
                            )
                    },
                    getMaxPage: function (e) {
                        var t = e.nbPages
                        return void 0 !== n ? Math.min(n, t) : t
                    },
                    render: function (e) {
                        var t = e.results,
                            n = e.state,
                            r = e.instantSearchInstance,
                            i = n.page || 0,
                            a = this.getMaxPage(t)
                        ;(o.currentPage = i),
                            (o.total = a),
                            c(
                                {
                                    createURL: this.createURL(n),
                                    currentRefinement: i,
                                    refine: this.refine,
                                    nbHits: t.nbHits,
                                    nbPages: a,
                                    pages: o.pages(),
                                    isFirstPage: o.isFirstPage(),
                                    isLastPage: o.isLastPage(),
                                    widgetParams: s,
                                    instantSearchInstance: r
                                },
                                !1
                            )
                    },
                    dispose: function (e) {
                        var t = e.state
                        return r(), t.setQueryParameter('page', void 0)
                    },
                    getWidgetState: function (e, t) {
                        var n = t.searchParameters.page || 0
                        return n ? D({}, e, { page: n + 1 }) : e
                    },
                    getWidgetSearchParameters: function (e, t) {
                        var n = t.uiState,
                            r = n.page ? n.page - 1 : 0
                        return e.setQueryParameter('page', r)
                    }
                }
            }
        )
    }
    var $n = Ae({ name: 'range-input', connector: !0 }, { name: 'range-slider', connector: !0 })
    function zn(h) {
        var r = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : Fe
        return (
            xe(h, $n()),
            function () {
                var c = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                    S = c.attribute,
                    P = c.min,
                    _ = c.max,
                    e = c.precision,
                    u = void 0 === e ? 0 : e,
                    x = Ce(P),
                    N = Ce(_)
                if (!S) throw new Error($n('The `attribute` option is required.'))
                if (x && N && _ < P)
                    throw new Error($n("The `max` option can't be lower than `min`."))
                function F(e) {
                    return Number(Number(e).toFixed(u))
                }
                var l = {
                    from: function (e) {
                        return e
                    },
                    to: function (e) {
                        return F(e).toLocaleString()
                    }
                }
                return {
                    $$type: 'ais.range',
                    _getCurrentRange: function (e) {
                        var t,
                            n,
                            r = Math.pow(10, u)
                        return (
                            (t = x ? P : Ce(e.min) ? e.min : 0),
                            (n = N ? _ : Ce(e.max) ? e.max : 0),
                            { min: Math.floor(t * r) / r, max: Math.ceil(n * r) / r }
                        )
                    },
                    _getCurrentRefinement: function (e) {
                        var t = B(e.getNumericRefinement(S, '>=') || [], 1)[0],
                            n = B(e.getNumericRefinement(S, '<=') || [], 1)[0]
                        return [Ce(t) ? t : -1 / 0, Ce(n) ? n : 1 / 0]
                    },
                    _refine: function (R, w) {
                        return function () {
                            var e,
                                t,
                                n = B(
                                    0 < arguments.length && void 0 !== arguments[0]
                                        ? arguments[0]
                                        : [],
                                    2
                                ),
                                r = n[0],
                                i = n[1],
                                a = w.min,
                                s = w.max,
                                o = B(R.getNumericRefinement(S, '>=') || [], 1)[0],
                                c = B(R.getNumericRefinement(S, '<=') || [], 1)[0],
                                u = void 0 === r || '' === r,
                                l = void 0 === i || '' === i,
                                h = u ? void 0 : parseFloat(r),
                                f = l ? void 0 : parseFloat(i)
                            t = N || s !== f ? (N && l ? _ : f) : void 0
                            var d = void 0 === (e = x || a !== h ? (x && u ? P : h) : void 0),
                                m = Ce(e),
                                p = Ce(a),
                                g = d || (m && (!p || (p && a <= e))),
                                v = void 0 === t,
                                y = Ce(t),
                                b = Ce(s)
                            ;(o !== e || c !== t) &&
                                g &&
                                (v || (y && (!b || (b && t <= s)))) &&
                                (R.removeNumericRefinement(S),
                                m && R.addNumericRefinement(S, '>=', F(e)),
                                y && R.addNumericRefinement(S, '<=', F(t)),
                                R.search())
                        }
                    },
                    init: function (e) {
                        var t = e.helper,
                            n = e.instantSearchInstance,
                            r = this._getCurrentRange({}),
                            i = this._getCurrentRefinement(t)
                        h(
                            {
                                refine: this._refine(t, {}),
                                format: l,
                                range: r,
                                widgetParams: D({}, c, { precision: u }),
                                start: i,
                                instantSearchInstance: n
                            },
                            !0
                        )
                    },
                    render: function (e) {
                        var t = e.results,
                            n = e.helper,
                            r = e.instantSearchInstance,
                            i = be(t.disjunctiveFacets || [], function (e) {
                                return e.name === S
                            }),
                            a = (i && i.stats) || {},
                            s = this._getCurrentRange(a),
                            o = this._getCurrentRefinement(n)
                        h(
                            {
                                refine: this._refine(n, s),
                                format: l,
                                range: s,
                                widgetParams: D({}, c, { precision: u }),
                                start: o,
                                instantSearchInstance: r
                            },
                            !1
                        )
                    },
                    dispose: function (e) {
                        var t = e.state
                        r()
                        var n = t.removeDisjunctiveFacet(S)
                        return (
                            (n.numericRefinements = D({}, t.numericRefinements, C({}, S, void 0))),
                            n
                        )
                    },
                    getWidgetState: function (e, t) {
                        var n = t.searchParameters.getNumericRefinements(S),
                            r = n['>='],
                            i = void 0 === r ? [] : r,
                            a = n['<='],
                            s = void 0 === a ? [] : a
                        return 0 === i.length && 0 === s.length
                            ? e
                            : D({}, e, {
                                  range: D({}, e.range, C({}, S, ''.concat(i, ':').concat(s)))
                              })
                    },
                    getWidgetSearchParameters: function (e, t) {
                        var n = t.uiState,
                            r = e
                                .addDisjunctiveFacet(S)
                                .setQueryParameters({
                                    numericRefinements: D({}, e.numericRefinements, C({}, S, {}))
                                })
                        x && (r = r.addNumericRefinement(S, '>=', P)),
                            N && (r = r.addNumericRefinement(S, '<=', _))
                        var i = n.range && n.range[S]
                        if (!i || -1 === i.indexOf(':')) return r
                        var a = B(i.split(':').map(parseFloat), 2),
                            s = a[0],
                            o = a[1]
                        return (
                            Ce(s) && (r = r.addNumericRefinement(S, '>=', s)),
                            Ce(o) && (r = r.addNumericRefinement(S, '<=', o)),
                            r
                        )
                    }
                }
            }
        )
    }
    var Kn = Ae({ name: 'refinement-list', connector: !0 })
    function Jn(x) {
        var c = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : Fe
        return (
            xe(x, Kn()),
            function () {
                var d = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                    m = d.attribute,
                    e = d.operator,
                    h = void 0 === e ? 'or' : e,
                    t = d.limit,
                    p = void 0 === t ? 10 : t,
                    n = d.showMore,
                    g = void 0 !== n && n,
                    r = d.showMoreLimit,
                    f = void 0 === r ? 20 : r,
                    i = d.sortBy,
                    u = void 0 === i ? ['isRefined', 'count:desc', 'name:asc'] : i,
                    a = d.escapeFacetValues,
                    l = void 0 === a || a,
                    s = d.transformItems,
                    v =
                        void 0 === s
                            ? function (e) {
                                  return e
                              }
                            : s
                if (!m) throw new Error(Kn('The `attribute` option is required.'))
                if (!/^(and|or)$/.test(h))
                    throw new Error(
                        Kn('The `operator` must one of: `"and"`, `"or"` (got "'.concat(h, '").'))
                    )
                if (!0 === g && f <= p)
                    throw new Error(Kn('`showMoreLimit` should be greater than `limit`.'))
                function y(e) {
                    var t = e.name
                    return D({}, O(e, ['name']), { label: t, value: t, highlighted: t })
                }
                function b(e) {
                    return e ? f : p
                }
                function R(e) {
                    var t = e.items,
                        n = e.state,
                        r = e.createURL,
                        i = e.helperSpecializedSearchFacetValues,
                        a = e.refine,
                        s = e.isFromSearch,
                        o = e.isFirstSearch,
                        c = e.isShowingMore,
                        u = e.toggleShowMore,
                        l = e.instantSearchInstance,
                        h = i && i(n, r, i, a, l, c),
                        f = (c && P.length > p) || (g && !s && !_)
                    x(
                        {
                            createURL: function (e) {
                                return r(n.toggleRefinement(m, e))
                            },
                            items: t,
                            refine: a,
                            searchForItems: h,
                            instantSearchInstance: l,
                            isFromSearch: s,
                            canRefine: s || 0 < t.length,
                            widgetParams: d,
                            isShowingMore: c,
                            canToggleShowMore: f,
                            toggleShowMore: u,
                            hasExhaustiveItems: _
                        },
                        o
                    )
                }
                function o(n, u) {
                    return function (r, i, a, s, o, c) {
                        return function (e) {
                            if ('' === e && P)
                                R({
                                    items: P,
                                    state: r,
                                    createURL: i,
                                    helperSpecializedSearchFacetValues: a,
                                    refine: s,
                                    isFromSearch: !1,
                                    isFirstSearch: !1,
                                    instantSearchInstance: o,
                                    toggleShowMore: u,
                                    isShowingMore: c
                                })
                            else {
                                var t = {
                                    highlightPreTag: l ? Je.highlightPreTag : Ye.highlightPreTag,
                                    highlightPostTag: l ? Je.highlightPostTag : Ye.highlightPostTag
                                }
                                n.searchForFacetValues(m, e, b(c), t).then(function (e) {
                                    var t = l
                                            ? (function (e) {
                                                  return e.map(function (e) {
                                                      return D({}, e, {
                                                          highlighted: Xe(e.highlighted)
                                                      })
                                                  })
                                              })(e.facetHits)
                                            : e.facetHits,
                                        n = v(
                                            t.map(function (e) {
                                                var t = e.value
                                                return D({}, O(e, ['value']), {
                                                    value: t,
                                                    label: t
                                                })
                                            })
                                        )
                                    R({
                                        items: n,
                                        state: r,
                                        createURL: i,
                                        helperSpecializedSearchFacetValues: a,
                                        refine: s,
                                        isFromSearch: !0,
                                        isFirstSearch: !1,
                                        instantSearchInstance: o,
                                        isShowingMore: c
                                    })
                                })
                            }
                        }
                    }
                }
                var w,
                    S,
                    P = [],
                    _ = !0
                return {
                    $$type: 'ais.refinementList',
                    isShowingMore: !1,
                    toggleShowMore: function () {},
                    cachedToggleShowMore: function () {
                        this.toggleShowMore()
                    },
                    createToggleShowMore: function (e) {
                        var t = this
                        return function () {
                            ;(t.isShowingMore = !t.isShowingMore), t.render(e)
                        }
                    },
                    getLimit: function () {
                        return b(this.isShowingMore)
                    },
                    init: function (e) {
                        var t = e.helper,
                            n = e.createURL,
                            r = e.instantSearchInstance
                        ;(this.cachedToggleShowMore = this.cachedToggleShowMore.bind(this)),
                            (S = function (e) {
                                return t.toggleRefinement(m, e).search()
                            }),
                            (w = o(t, this.cachedToggleShowMore)),
                            R({
                                items: [],
                                state: t.state,
                                createURL: n,
                                helperSpecializedSearchFacetValues: w,
                                refine: S,
                                isFromSearch: !1,
                                isFirstSearch: !0,
                                instantSearchInstance: r,
                                isShowingMore: this.isShowingMore,
                                toggleShowMore: this.cachedToggleShowMore
                            })
                    },
                    render: function (e) {
                        var t = e.results,
                            n = e.state,
                            r = e.createURL,
                            i = e.instantSearchInstance,
                            a = t.getFacetValues(m, { sortBy: u }) || [],
                            s = v(a.slice(0, this.getLimit()).map(y)),
                            o = n.maxValuesPerFacet,
                            c = this.getLimit()
                        ;(_ = c < o ? a.length <= c : a.length < c),
                            (P = s),
                            (this.toggleShowMore = this.createToggleShowMore(e)),
                            R({
                                items: s,
                                state: n,
                                createURL: r,
                                helperSpecializedSearchFacetValues: w,
                                refine: S,
                                isFromSearch: !1,
                                isFirstSearch: !1,
                                instantSearchInstance: i,
                                isShowingMore: this.isShowingMore,
                                toggleShowMore: this.cachedToggleShowMore
                            })
                    },
                    dispose: function (e) {
                        var t = e.state
                        c()
                        var n = t.setQueryParameter('maxValuesPerFacet', void 0)
                        return 'and' === h ? n.removeFacet(m) : n.removeDisjunctiveFacet(m)
                    },
                    getWidgetState: function (e, t) {
                        var n = t.searchParameters,
                            r =
                                'or' === h
                                    ? n.getDisjunctiveRefinements(m)
                                    : n.getConjunctiveRefinements(m)
                        return r.length
                            ? D({}, e, { refinementList: D({}, e.refinementList, C({}, m, r)) })
                            : e
                    },
                    getWidgetSearchParameters: function (e, t) {
                        var n = t.uiState,
                            r = 'or' === h,
                            i = n.refinementList && n.refinementList[m],
                            a = e.clearRefinements(m),
                            s = r ? a.addDisjunctiveFacet(m) : a.addFacet(m),
                            o = s.maxValuesPerFacet || 0,
                            c = Math.max(o, g ? f : p),
                            u = s.setQueryParameter('maxValuesPerFacet', c)
                        if (i)
                            return i.reduce(function (e, t) {
                                return r
                                    ? e.addDisjunctiveFacetRefinement(m, t)
                                    : e.addFacetRefinement(m, t)
                            }, u)
                        var l = r ? 'disjunctiveFacetsRefinements' : 'facetsRefinements'
                        return u.setQueryParameters(C({}, l, D({}, u[l], C({}, m, []))))
                    }
                }
            }
        )
    }
    var Yn = Ae({ name: 'search-box', connector: !0 })
    function Xn(o) {
        var n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : Fe
        return (
            xe(o, Yn()),
            function () {
                var i = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                    a = i.queryHook
                function s(e) {
                    return function () {
                        e.setQuery(''), e.search()
                    }
                }
                return {
                    $$type: 'ais.searchBox',
                    _clear: function () {},
                    _cachedClear: function () {
                        this._clear()
                    },
                    init: function (e) {
                        var t = e.helper,
                            n = e.instantSearchInstance
                        ;(this._cachedClear = this._cachedClear.bind(this)), (this._clear = s(t))
                        function r(e) {
                            e !== t.state.query && t.setQuery(e).search()
                        }
                        ;(this._refine = function (e) {
                            a ? a(e, r) : r(e)
                        }),
                            o(
                                {
                                    query: t.state.query || '',
                                    refine: this._refine,
                                    clear: this._cachedClear,
                                    widgetParams: i,
                                    instantSearchInstance: n
                                },
                                !0
                            )
                    },
                    render: function (e) {
                        var t = e.helper,
                            n = e.instantSearchInstance,
                            r = e.searchMetadata
                        ;(this._clear = s(t)),
                            o(
                                {
                                    query: t.state.query || '',
                                    refine: this._refine,
                                    clear: this._cachedClear,
                                    widgetParams: i,
                                    instantSearchInstance: n,
                                    isSearchStalled: r.isSearchStalled
                                },
                                !1
                            )
                    },
                    dispose: function (e) {
                        var t = e.state
                        return n(), t.setQueryParameter('query', void 0)
                    },
                    getWidgetState: function (e, t) {
                        var n = t.searchParameters.query || ''
                        return '' === n || (e && e.query === n) ? e : D({}, e, { query: n })
                    },
                    getWidgetSearchParameters: function (e, t) {
                        var n = t.uiState
                        return e.setQueryParameter('query', n.query || '')
                    }
                }
            }
        )
    }
    var Gn = Ae({ name: 'sort-by', connector: !0 })
    function Zn(c) {
        var n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : Fe
        return (
            xe(c, Gn()),
            function () {
                var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                    s = a.items,
                    e = a.transformItems,
                    o =
                        void 0 === e
                            ? function (e) {
                                  return e
                              }
                            : e
                if (!Array.isArray(s))
                    throw new Error(Gn('The `items` option expects an array of objects.'))
                return {
                    $$type: 'ais.sortBy',
                    init: function (e) {
                        var t = e.helper,
                            n = e.instantSearchInstance,
                            r = e.parent,
                            i = t.state.index
                        be(s, function (e) {
                            return e.value === i
                        })
                        ;(this.initialIndex = r.getIndexName()),
                            (this.setIndex = function (e) {
                                t.setIndex(e).search()
                            }),
                            c(
                                {
                                    currentRefinement: i,
                                    options: o(s),
                                    refine: this.setIndex,
                                    hasNoResults: !0,
                                    widgetParams: a,
                                    instantSearchInstance: n
                                },
                                !0
                            )
                    },
                    render: function (e) {
                        var t = e.helper,
                            n = e.results,
                            r = e.instantSearchInstance
                        c(
                            {
                                currentRefinement: t.state.index,
                                options: o(s),
                                refine: this.setIndex,
                                hasNoResults: 0 === n.nbHits,
                                widgetParams: a,
                                instantSearchInstance: r
                            },
                            !1
                        )
                    },
                    dispose: function (e) {
                        var t = e.state
                        return n(), t.setIndex(this.initialIndex)
                    },
                    getWidgetState: function (e, t) {
                        var n = t.searchParameters.index
                        return n === this.initialIndex ? e : D({}, e, { sortBy: n })
                    },
                    getWidgetSearchParameters: function (e, t) {
                        var n = t.uiState
                        return e.setQueryParameter(
                            'index',
                            n.sortBy || this.initialIndex || e.index
                        )
                    }
                }
            }
        )
    }
    var er = Ae({ name: 'rating-menu', connector: !0 })
    function tr(g) {
        var n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : Fe
        return (
            xe(g, er()),
            function () {
                var d = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                    m = d.attribute,
                    e = d.max,
                    p = void 0 === e ? 5 : e
                if (!m) throw new Error(er('The `attribute` option is required.'))
                return {
                    $$type: 'ais.ratingMenu',
                    init: function (e) {
                        var t = e.helper,
                            n = e.createURL,
                            r = e.instantSearchInstance
                        ;(this._toggleRefinement = this._toggleRefinement.bind(this, t)),
                            (this._createURL = function (t) {
                                return function (e) {
                                    return n(t.toggleRefinement(m, e))
                                }
                            }),
                            g(
                                {
                                    instantSearchInstance: r,
                                    items: [],
                                    hasNoResults: !0,
                                    refine: this._toggleRefinement,
                                    createURL: this._createURL(t.state),
                                    widgetParams: d
                                },
                                !0
                            )
                    },
                    render: function (e) {
                        for (
                            var t = e.helper,
                                n = e.results,
                                r = e.state,
                                i = e.instantSearchInstance,
                                a = [],
                                s = {},
                                o = p;
                            0 <= o;
                            --o
                        )
                            s[o] = 0
                        ;(n.getFacetValues(m) || []).forEach(function (e) {
                            var t = Math.round(e.name)
                            if (t && !(p < t)) for (var n = t; 1 <= n; --n) s[n] += e.count
                        })
                        for (var c = this._getRefinedStar(t.state), u = p - 1; 1 <= u; --u) {
                            var l = s[u]
                            if (!c || u === c || 0 !== l) {
                                for (var h = [], f = 1; f <= p; ++f) h.push(f <= u)
                                a.push({
                                    stars: h,
                                    name: String(u),
                                    value: String(u),
                                    count: l,
                                    isRefined: c === u
                                })
                            }
                        }
                        g(
                            {
                                instantSearchInstance: i,
                                items: a,
                                hasNoResults: 0 === n.nbHits,
                                refine: this._toggleRefinement,
                                createURL: this._createURL(r),
                                widgetParams: d
                            },
                            !1
                        )
                    },
                    dispose: function (e) {
                        var t = e.state
                        return n(), t.removeDisjunctiveFacet(m)
                    },
                    getWidgetState: function (e, t) {
                        var n = t.searchParameters,
                            r = this._getRefinedStar(n)
                        return 'number' != typeof r
                            ? e
                            : D({}, e, { ratingMenu: D({}, e.ratingMenu, C({}, m, r)) })
                    },
                    getWidgetSearchParameters: function (e, t) {
                        var n = t.uiState,
                            r = n.ratingMenu && n.ratingMenu[m],
                            i = e.clearRefinements(m).addDisjunctiveFacet(m)
                        return r
                            ? Me({ start: Number(r), end: p + 1 }).reduce(function (e, t) {
                                  return e.addDisjunctiveFacetRefinement(m, t)
                              }, i)
                            : i.setQueryParameters({
                                  disjunctiveFacetsRefinements: D(
                                      {},
                                      i.disjunctiveFacetsRefinements,
                                      C({}, m, [])
                                  )
                              })
                    },
                    _toggleRefinement: function (e, t) {
                        var n = this._getRefinedStar(e.state) === Number(t)
                        if ((e.removeDisjunctiveFacetRefinement(m), !n))
                            for (var r = Number(t); r <= p; ++r)
                                e.addDisjunctiveFacetRefinement(m, r)
                        e.search()
                    },
                    _getRefinedStar: function (e) {
                        var t = e.getDisjunctiveRefinements(m)
                        if (t.length) return Math.min.apply(Math, w(t.map(Number)))
                    }
                }
            }
        )
    }
    var nr = Ae({ name: 'stats', connector: !0 })
    function rr(i) {
        var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : Fe
        return (
            xe(i, nr()),
            function () {
                var r = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}
                return {
                    $$type: 'ais.stats',
                    init: function (e) {
                        var t = e.helper,
                            n = e.instantSearchInstance
                        i(
                            {
                                instantSearchInstance: n,
                                hitsPerPage: t.state.hitsPerPage,
                                nbHits: 0,
                                nbPages: 0,
                                page: t.state.page || 0,
                                processingTimeMS: -1,
                                query: t.state.query || '',
                                widgetParams: r
                            },
                            !0
                        )
                    },
                    render: function (e) {
                        var t = e.results,
                            n = e.instantSearchInstance
                        i(
                            {
                                instantSearchInstance: n,
                                hitsPerPage: t.hitsPerPage,
                                nbHits: t.nbHits,
                                nbPages: t.nbPages,
                                page: t.page,
                                processingTimeMS: t.processingTimeMS,
                                query: t.query,
                                widgetParams: r
                            },
                            !1
                        )
                    },
                    dispose: function () {
                        e()
                    }
                }
            }
        )
    }
    var ir = Ae({ name: 'toggle-refinement', connector: !0 })
    function ar(y) {
        var r = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : Fe
        return (
            xe(y, ir()),
            function () {
                var d = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                    m = d.attribute,
                    e = d.on,
                    t = void 0 === e || e,
                    n = d.off
                if (!m) throw new Error(ir('The `attribute` option is required.'))
                var p = void 0 !== n,
                    g = void 0 !== t ? _e(t) : void 0,
                    v = p ? _e(n) : void 0
                return {
                    $$type: 'ais.toggleRefinement',
                    _toggleRefinement: function (e, t) {
                        ;(1 < arguments.length && void 0 !== t ? t : {}).isRefined
                            ? (e.removeDisjunctiveFacetRefinement(m, g),
                              p && e.addDisjunctiveFacetRefinement(m, v))
                            : (p && e.removeDisjunctiveFacetRefinement(m, v),
                              e.addDisjunctiveFacetRefinement(m, g)),
                            e.search()
                    },
                    init: function (e) {
                        var t = this,
                            n = e.state,
                            r = e.helper,
                            i = e.createURL,
                            a = e.instantSearchInstance
                        ;(this._createURL = function (e) {
                            return function () {
                                return i(
                                    n
                                        .removeDisjunctiveFacetRefinement(m, e ? g : v)
                                        .addDisjunctiveFacetRefinement(m, e ? v : g)
                                )
                            }
                        }),
                            (this.toggleRefinement = function (e) {
                                t._toggleRefinement(r, e)
                            })
                        var s = n.isDisjunctiveFacetRefined(m, g)
                        if (p && !s) {
                            var o = r.state.page
                            r.addDisjunctiveFacetRefinement(m, v).setPage(o)
                        }
                        var c = {
                            name: m,
                            isRefined: s,
                            count: null,
                            onFacetValue: { isRefined: s, count: 0 },
                            offFacetValue: { isRefined: p && !s, count: 0 }
                        }
                        y(
                            {
                                value: c,
                                createURL: this._createURL(c.isRefined),
                                refine: this.toggleRefinement,
                                instantSearchInstance: a,
                                widgetParams: d
                            },
                            !0
                        )
                    },
                    render: function (e) {
                        var t = e.helper,
                            n = e.results,
                            r = e.state,
                            i = e.instantSearchInstance,
                            a = t.state.isDisjunctiveFacetRefined(m, g),
                            s = void 0 !== v && v,
                            o = n.getFacetValues(m) || [],
                            c = be(o, function (e) {
                                return e.name === Re(g)
                            }),
                            u = {
                                isRefined: void 0 !== c && c.isRefined,
                                count: void 0 === c ? null : c.count
                            },
                            l = p
                                ? be(o, function (e) {
                                      return e.name === Re(s)
                                  })
                                : void 0,
                            h = {
                                isRefined: void 0 !== l && l.isRefined,
                                count:
                                    void 0 === l
                                        ? o.reduce(function (e, t) {
                                              return e + t.count
                                          }, 0)
                                        : l.count
                            },
                            f = {
                                name: m,
                                isRefined: a,
                                count: (a ? h : u).count,
                                onFacetValue: u,
                                offFacetValue: h
                            }
                        y(
                            {
                                value: f,
                                state: r,
                                createURL: this._createURL(f.isRefined),
                                refine: this.toggleRefinement,
                                helper: t,
                                instantSearchInstance: i,
                                widgetParams: d
                            },
                            !1
                        )
                    },
                    dispose: function (e) {
                        var t = e.state
                        return r(), t.removeDisjunctiveFacet(m)
                    },
                    getWidgetState: function (e, t) {
                        var n = t.searchParameters.isDisjunctiveFacetRefined(m, g)
                        return n ? D({}, e, { toggle: D({}, e.toggle, C({}, m, n)) }) : e
                    },
                    getWidgetSearchParameters: function (e, t) {
                        var n = t.uiState,
                            r = e.clearRefinements(m).addDisjunctiveFacet(m)
                        return Boolean(n.toggle && n.toggle[m])
                            ? r.addDisjunctiveFacetRefinement(m, g)
                            : p
                            ? r.addDisjunctiveFacetRefinement(m, v)
                            : r.setQueryParameters({
                                  disjunctiveFacetsRefinements: D(
                                      {},
                                      e.disjunctiveFacetsRefinements,
                                      C({}, m, [])
                                  )
                              })
                    }
                }
            }
        )
    }
    var sr = Ae({ name: 'breadcrumb', connector: !0 })
    function or(u) {
        var l = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : Fe
        return (
            xe(u, sr()),
            function () {
                var o = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                    t = o.attributes,
                    e = o.separator,
                    n = void 0 === e ? ' > ' : e,
                    r = o.rootPath,
                    i = void 0 === r ? null : r,
                    a = o.transformItems,
                    c =
                        void 0 === a
                            ? function (e) {
                                  return e
                              }
                            : a
                if (!t || !Array.isArray(t) || 0 === t.length)
                    throw new Error(sr('The `attributes` option expects an array of strings.'))
                var s = B(t, 1)[0]
                return {
                    $$type: 'ais.breadcrumb',
                    init: function (e) {
                        var n = e.createURL,
                            r = e.helper,
                            t = e.instantSearchInstance
                        ;(this._createURL = function (e) {
                            if (!e) {
                                var t = r.getHierarchicalFacetBreadcrumb(s)
                                if (0 < t.length) return n(r.state.toggleRefinement(s, t[0]))
                            }
                            return n(r.state.toggleRefinement(s, e))
                        }),
                            (this._refine = function (e) {
                                if (e) r.toggleRefinement(s, e).search()
                                else {
                                    var t = r.getHierarchicalFacetBreadcrumb(s)
                                    0 < t.length && r.toggleRefinement(s, t[0]).search()
                                }
                            }),
                            u(
                                {
                                    createURL: this._createURL,
                                    canRefine: !1,
                                    instantSearchInstance: t,
                                    items: [],
                                    refine: this._refine,
                                    widgetParams: o
                                },
                                !0
                            )
                    },
                    render: function (e) {
                        var t = e.instantSearchInstance,
                            n = e.results,
                            r = B(e.state.hierarchicalFacets, 1)[0].name,
                            i = n.getFacetValues(r),
                            a = Array.isArray(i.data) ? i.data : [],
                            s = c(
                                (function (n) {
                                    return n.map(function (e, t) {
                                        return {
                                            label: e.label,
                                            value: t + 1 === n.length ? null : n[t + 1].value
                                        }
                                    })
                                })(
                                    (function n(e) {
                                        return e.reduce(function (e, t) {
                                            return (
                                                t.isRefined &&
                                                    (e.push({ label: t.name, value: t.path }),
                                                    Array.isArray(t.data) &&
                                                        (e = e.concat(n(t.data)))),
                                                e
                                            )
                                        }, [])
                                    })(a)
                                )
                            )
                        u(
                            {
                                canRefine: 0 < s.length,
                                createURL: this._createURL,
                                instantSearchInstance: t,
                                items: s,
                                refine: this._refine,
                                widgetParams: o
                            },
                            !1
                        )
                    },
                    dispose: function () {
                        l()
                    },
                    getWidgetSearchParameters: function (e) {
                        if (e.isHierarchicalFacet(s)) {
                            e.getHierarchicalFacetByName(s)
                            return e
                        }
                        return e.addHierarchicalFacet({
                            name: s,
                            attributes: t,
                            separator: n,
                            rootPath: i
                        })
                    }
                }
            }
        )
    }
    function cr(P, e) {
        var r = 1 < arguments.length && void 0 !== e ? e : Fe
        return (
            xe(P, ur()),
            function () {
                function u(e) {
                    return (
                        e.aroundLatLng &&
                        (function (e) {
                            var t = e.match(De)
                            if (!t)
                                throw new Error(
                                    'Invalid value for "aroundLatLng" parameter: "'.concat(e, '"')
                                )
                            return { lat: parseFloat(t[1]), lng: parseFloat(t[2]) }
                        })(e.aroundLatLng)
                    )
                }
                function l(e) {
                    return e.insideBoundingBox && Be(e.insideBoundingBox)
                }
                function h(i) {
                    return function (e) {
                        var t = e.northEast,
                            n = e.southWest,
                            r = [t.lat, t.lng, n.lat, n.lng].join()
                        i.setQueryParameter('insideBoundingBox', r).search(),
                            (S.hasMapMoveSinceLastRefine = !1),
                            (S.lastRefineBoundingBox = r)
                    }
                }
                function f(e) {
                    return function () {
                        e.setQueryParameter('insideBoundingBox', void 0).search()
                    }
                }
                function d(e) {
                    return function () {
                        return Boolean(e.insideBoundingBox)
                    }
                }
                function m() {
                    return S.internalToggleRefineOnMapMove()
                }
                function p(e, t) {
                    return function () {
                        ;(S.isRefineOnMapMove = !S.isRefineOnMapMove), e(t)
                    }
                }
                function g() {
                    return S.isRefineOnMapMove
                }
                function v() {
                    return S.internalSetMapMoveSinceLastRefine()
                }
                function y(t, n) {
                    return function () {
                        var e = !0 !== S.hasMapMoveSinceLastRefine
                        ;(S.hasMapMoveSinceLastRefine = !0), e && t(n)
                    }
                }
                function b() {
                    return S.hasMapMoveSinceLastRefine
                }
                var R = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                    e = R.enableRefineOnMapMove,
                    t = void 0 === e || e,
                    n = R.transformItems,
                    w =
                        void 0 === n
                            ? function (e) {
                                  return e
                              }
                            : n,
                    S = {
                        isRefineOnMapMove: t,
                        hasMapMoveSinceLastRefine: !1,
                        lastRefinePosition: '',
                        lastRefineBoundingBox: '',
                        internalToggleRefineOnMapMove: Fe,
                        internalSetMapMoveSinceLastRefine: Fe
                    }
                return {
                    $$type: 'ais.geoSearch',
                    init: function (e) {
                        var t = e.state,
                            n = e.helper,
                            r = e.instantSearchInstance
                        ;(S.internalToggleRefineOnMapMove = p(Fe, e)),
                            (S.internalSetMapMoveSinceLastRefine = y(Fe, e)),
                            P(
                                {
                                    items: [],
                                    position: u(t),
                                    currentRefinement: l(t),
                                    refine: h(n),
                                    clearMapRefinement: f(n),
                                    isRefinedWithMap: d(t),
                                    toggleRefineOnMapMove: m,
                                    isRefineOnMapMove: g,
                                    setMapMoveSinceLastRefine: v,
                                    hasMapMoveSinceLastRefine: b,
                                    widgetParams: R,
                                    instantSearchInstance: r
                                },
                                !0
                            )
                    },
                    render: function e(t) {
                        var n = t.results,
                            r = t.helper,
                            i = t.instantSearchInstance,
                            a = r.state,
                            s =
                                Boolean(a.aroundLatLng) &&
                                Boolean(S.lastRefinePosition) &&
                                a.aroundLatLng !== S.lastRefinePosition,
                            o =
                                !a.insideBoundingBox &&
                                Boolean(S.lastRefineBoundingBox) &&
                                a.insideBoundingBox !== S.lastRefineBoundingBox
                        ;(s || o) && (S.hasMapMoveSinceLastRefine = !1),
                            (S.lastRefinePosition = a.aroundLatLng || ''),
                            (S.lastRefineBoundingBox = a.insideBoundingBox || ''),
                            (S.internalToggleRefineOnMapMove = p(e, t)),
                            (S.internalSetMapMoveSinceLastRefine = y(e, t))
                        var c = w(
                            n.hits.filter(function (e) {
                                return e._geoloc
                            })
                        )
                        P(
                            {
                                items: c,
                                position: u(a),
                                currentRefinement: l(a),
                                refine: h(r),
                                clearMapRefinement: f(r),
                                isRefinedWithMap: d(a),
                                toggleRefineOnMapMove: m,
                                isRefineOnMapMove: g,
                                setMapMoveSinceLastRefine: v,
                                hasMapMoveSinceLastRefine: b,
                                widgetParams: R,
                                instantSearchInstance: i
                            },
                            !1
                        )
                    },
                    dispose: function (e) {
                        var t = e.state
                        return r(), t.setQueryParameter('insideBoundingBox', void 0)
                    },
                    getWidgetState: function (e, t) {
                        var n = t.searchParameters.insideBoundingBox
                        return !n || (e && e.geoSearch && e.geoSearch.boundingBox === n)
                            ? e
                            : D({}, e, { geoSearch: { boundingBox: n } })
                    },
                    getWidgetSearchParameters: function (e, t) {
                        var n = t.uiState
                        return n && n.geoSearch
                            ? e.setQueryParameter('insideBoundingBox', n.geoSearch.boundingBox)
                            : e.setQueryParameter('insideBoundingBox', void 0)
                    }
                }
            }
        )
    }
    var ur = Ae({ name: 'geo-search', connector: !0 }),
        lr = Ae({ name: 'powered-by', connector: !0 })
    function hr(r) {
        var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : Fe
        xe(r, lr())
        var a =
            'https://www.algolia.com/?utm_source=instantsearch.js&utm_medium=website&' +
            'utm_content='.concat(
                'undefined' != typeof window && window.location ? window.location.hostname : '',
                '&'
            ) +
            'utm_campaign=poweredby'
        return function () {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.url,
                n = void 0 === t ? a : t
            return {
                $$type: 'ais.poweredBy',
                init: function () {
                    r({ url: n, widgetParams: e }, !0)
                },
                render: function () {
                    r({ url: n, widgetParams: e }, !1)
                },
                dispose: function () {
                    i()
                }
            }
        }
    }
    var fr = Ae({ name: 'configure', connector: !0 })
    function dr(e, t) {
        return e.setQueryParameters(
            Object.keys(t.searchParameters).reduce(function (e, t) {
                return D({}, e, C({}, t, void 0))
            }, {})
        )
    }
    function mr(e, t) {
        var a = 0 < arguments.length && void 0 !== e ? e : Fe,
            n = 1 < arguments.length && void 0 !== t ? t : Fe
        return function (i) {
            if (!i || !Ie(i.searchParameters))
                throw new Error(fr('The `searchParameters` option expects an object.'))
            var r = {}
            return {
                $$type: 'ais.configure',
                init: function (e) {
                    var t = e.instantSearchInstance,
                        n = e.helper
                    ;(r.refine = (function (r) {
                        return function (e) {
                            var t = dr(r.state, i),
                                n = He(t, new se.SearchParameters(e))
                            r.setState(n).search(), (i.searchParameters = e)
                        }
                    })(n)),
                        a({ refine: r.refine, instantSearchInstance: t, widgetParams: i }, !0)
                },
                render: function (e) {
                    var t = e.instantSearchInstance
                    a({ refine: r.refine, instantSearchInstance: t, widgetParams: i }, !1)
                },
                dispose: function (e) {
                    var t = e.state
                    return n(), dr(t, i)
                },
                getWidgetSearchParameters: function (e, t) {
                    var n = t.uiState
                    return He(
                        e,
                        new se.SearchParameters(D({}, n.configure, {}, i.searchParameters))
                    )
                },
                getWidgetState: function (e) {
                    return D({}, e, { configure: D({}, e.configure, {}, i.searchParameters) })
                }
            }
        }
    }
    var pr = Ae({ name: 'configure-related-items', connector: !0 })
    function gr(e) {
        var t = e.attributeName,
            n = e.attributeValue,
            r = e.attributeScore
        return ''
            .concat(t, ':')
            .concat(n, '<score=')
            .concat(r || 1, '>')
    }
    function vr(c, u) {
        return function (e) {
            var t = e || {},
                a = t.hit,
                s = t.matchingPatterns,
                n = t.transformSearchParameters,
                r =
                    void 0 === n
                        ? function (e) {
                              return e
                          }
                        : n
            if (!a) throw new Error(pr('The `hit` option is required.'))
            if (!s) throw new Error(pr('The `matchingPatterns` option is required.'))
            var i = Object.keys(s).reduce(function (e, t) {
                    var n = s[t],
                        r = a[t],
                        i = n.score
                    return Array.isArray(r)
                        ? [].concat(w(e), [
                              r.map(function (e) {
                                  return gr({
                                      attributeName: t,
                                      attributeValue: e,
                                      attributeScore: i
                                  })
                              })
                          ])
                        : 'string' == typeof r
                        ? [].concat(w(e), [
                              gr({ attributeName: t, attributeValue: r, attributeScore: i })
                          ])
                        : e
                }, []),
                o = D(
                    {},
                    r(
                        new se.SearchParameters({
                            sumOrFiltersScores: !0,
                            facetFilters: ['objectID:-'.concat(a.objectID)],
                            optionalFilters: i
                        })
                    )
                )
            return D({}, mr(c, u)({ searchParameters: o }), { $$type: 'ais.configureRelatedItems' })
        }
    }
    var yr = Ae({ name: 'autocomplete', connector: !0 }),
        br = Ae({ name: 'query-rules', connector: !0 })
    function Rr(e) {
        var t = this.helper,
            n = this.initialRuleContexts,
            r = this.trackedFilters,
            i = this.transformRuleContexts,
            a = e.state,
            s = a.ruleContexts || [],
            o = (function (e) {
                var i = e.helper,
                    a = e.sharedHelperState,
                    s = e.trackedFilters
                return Object.keys(s).reduce(function (e, t) {
                    var n = Se(i.lastResults || {}, a)
                            .filter(function (e) {
                                return e.attribute === t
                            })
                            .map(function (e) {
                                return e.numericValue || e.name
                            }),
                        r = (0, s[t])(n)
                    return [].concat(
                        w(e),
                        w(
                            n
                                .filter(function (e) {
                                    return r.includes(e)
                                })
                                .map(function (e) {
                                    return (function (e) {
                                        return e.replace(/[^a-z0-9-_]+/gi, '_')
                                    })('ais-'.concat(t, '-').concat(e))
                                })
                        )
                    )
                }, [])
            })({ helper: t, sharedHelperState: a, trackedFilters: r }),
            c = i([].concat(w(n), w(o))).slice(0, 10)
        Te(s, c) || t.overrideStateWithoutTriggeringChangeEvent(D({}, a, { ruleContexts: c }))
    }
    function wr(d, e) {
        var m = 1 < arguments.length && void 0 !== e ? e : Fe
        return (
            xe(d, br()),
            function (a) {
                var e = a || {},
                    t = e.trackedFilters,
                    i = void 0 === t ? {} : t,
                    n = e.transformRuleContexts,
                    s =
                        void 0 === n
                            ? function (e) {
                                  return e
                              }
                            : n,
                    r = e.transformItems,
                    o =
                        void 0 === r
                            ? function (e) {
                                  return e
                              }
                            : r
                Object.keys(i).forEach(function (e) {
                    if ('function' != typeof i[e])
                        throw new Error(
                            br(
                                '\'The "'.concat(
                                    e,
                                    '" filter value in the `trackedFilters` option expects a function.'
                                )
                            )
                        )
                })
                var c,
                    u,
                    l = 0 < Object.keys(i).length,
                    h = []
                return {
                    $$type: 'ais.queryRules',
                    init: function (e) {
                        var t = e.helper,
                            n = e.state,
                            r = e.instantSearchInstance
                        ;(h = n.ruleContexts || []),
                            (c = Rr.bind({
                                helper: t,
                                initialRuleContexts: h,
                                trackedFilters: i,
                                transformRuleContexts: s
                            })),
                            l &&
                                (((function (e) {
                                    return [
                                        e.disjunctiveFacetsRefinements,
                                        e.facetsRefinements,
                                        e.hierarchicalFacetsRefinements,
                                        e.numericRefinements
                                    ].some(function (e) {
                                        return Boolean(e && 0 < Object.keys(e).length)
                                    })
                                })(n) ||
                                    Boolean(a.transformRuleContexts)) &&
                                    c({ state: n }),
                                t.on('change', c)),
                            d({ items: [], instantSearchInstance: r, widgetParams: a }, !0)
                    },
                    render:
                        ((u = function (e) {
                            var t = e.results,
                                n = e.instantSearchInstance,
                                r = t.userData,
                                i = o(void 0 === r ? [] : r)
                            d({ items: i, instantSearchInstance: n, widgetParams: a }, !1)
                        }),
                        (f.toString = function () {
                            return u.toString()
                        }),
                        f),
                    dispose: function (e) {
                        var t = e.helper,
                            n = e.state
                        return (
                            m(),
                            l
                                ? (t.removeListener('change', c),
                                  n.setQueryParameter('ruleContexts', h))
                                : n
                        )
                    }
                }
                function f(e) {
                    return u.apply(this, arguments)
                }
            }
        )
    }
    function Sr(e) {
        function t(e) {
            return { status: e, transcript: '', isSpeechFinal: !1, errorCode: void 0 }
        }
        function n() {
            return Boolean(g)
        }
        function r() {
            return (
                'askingPermission' === v.status ||
                'waiting' === v.status ||
                'recognizing' === v.status
            )
        }
        function i(e) {
            ;(v = D({}, v, {}, 0 < arguments.length && void 0 !== e ? e : {})), p()
        }
        function a(e) {
            i(t(0 < arguments.length && void 0 !== e ? e : 'initial'))
        }
        function s() {
            i({ status: 'waiting' })
        }
        function o(e) {
            i({ status: 'error', errorCode: e.error })
        }
        function c(e) {
            i({
                status: 'recognizing',
                transcript: (e.results[0] && e.results[0][0] && e.results[0][0].transcript) || '',
                isSpeechFinal: e.results[0] && e.results[0].isFinal
            }),
                f && v.transcript && m(v.transcript)
        }
        function u() {
            v.errorCode || !v.transcript || f || m(v.transcript),
                'error' !== v.status && i({ status: 'finished' })
        }
        function l() {
            h &&
                (h.stop(),
                h.removeEventListener('start', s),
                h.removeEventListener('error', o),
                h.removeEventListener('result', c),
                h.removeEventListener('end', u),
                (h = void 0))
        }
        var h,
            f = e.searchAsYouSpeak,
            d = e.language,
            m = e.onQueryChange,
            p = e.onStateChange,
            g = window.webkitSpeechRecognition || window.SpeechRecognition,
            v = t('initial')
        return {
            getState: function () {
                return v
            },
            isBrowserSupported: n,
            isListening: r,
            toggleListening: function () {
                n() &&
                    (r()
                        ? (l(), a('finished'))
                        : (h = new g()) &&
                          (a('askingPermission'),
                          (h.interimResults = !0),
                          d && (h.lang = d),
                          h.addEventListener('start', s),
                          h.addEventListener('error', o),
                          h.addEventListener('result', c),
                          h.addEventListener('end', u),
                          h.start()))
            },
            dispose: l
        }
    }
    function Pr(u, e) {
        var l = 1 < arguments.length && void 0 !== e ? e : Fe
        return (
            xe(u, _r()),
            function (c) {
                function i(e) {
                    var t = e.isFirstRendering,
                        n = e.instantSearchInstance,
                        r = e.voiceSearchHelper,
                        i = r.isBrowserSupported,
                        a = r.isListening,
                        s = r.toggleListening,
                        o = r.getState
                    u(
                        {
                            isBrowserSupported: i(),
                            isListening: a(),
                            toggleListening: s,
                            voiceListeningState: o(),
                            widgetParams: c,
                            instantSearchInstance: n
                        },
                        t
                    )
                }
                var e = c.searchAsYouSpeak,
                    a = void 0 !== e && e,
                    s = c.language,
                    o = c.additionalQueryParameters
                return {
                    $$type: 'ais.voiceSearch',
                    init: function (e) {
                        var t = this,
                            n = e.helper,
                            r = e.instantSearchInstance
                        ;(this._refine = function (e) {
                            if (e !== n.state.query) {
                                var t = s ? [s.split('-')[0]] : void 0
                                n.setQueryParameter('queryLanguages', t),
                                    'function' == typeof o &&
                                        n.setState(
                                            n.state.setQueryParameters(
                                                D(
                                                    {
                                                        ignorePlurals: !0,
                                                        removeStopWords: !0,
                                                        optionalWords: e
                                                    },
                                                    o({ query: e })
                                                )
                                            )
                                        ),
                                    n.setQuery(e).search()
                            }
                        }),
                            (this._voiceSearchHelper = Sr({
                                searchAsYouSpeak: a,
                                language: s,
                                onQueryChange: function (e) {
                                    return t._refine(e)
                                },
                                onStateChange: function () {
                                    i({
                                        isFirstRendering: !1,
                                        instantSearchInstance: r,
                                        voiceSearchHelper: t._voiceSearchHelper
                                    })
                                }
                            })),
                            i({
                                isFirstRendering: !0,
                                instantSearchInstance: r,
                                voiceSearchHelper: this._voiceSearchHelper
                            })
                    },
                    render: function (e) {
                        var t = e.instantSearchInstance
                        i({
                            isFirstRendering: !1,
                            instantSearchInstance: t,
                            voiceSearchHelper: this._voiceSearchHelper
                        })
                    },
                    dispose: function (e) {
                        var t = e.state
                        this._voiceSearchHelper.dispose(), l()
                        var n = t
                        if ('function' == typeof o) {
                            var r = o({ query: '' }),
                                i = r
                                    ? Object.keys(r).reduce(function (e, t) {
                                          return (e[t] = void 0), e
                                      }, {})
                                    : {}
                            n = t.setQueryParameters(
                                D(
                                    {
                                        queryLanguages: void 0,
                                        ignorePlurals: void 0,
                                        removeStopWords: void 0,
                                        optionalWords: void 0
                                    },
                                    i
                                )
                            )
                        }
                        return n.setQueryParameter('query', void 0)
                    },
                    getWidgetState: function (e, t) {
                        var n = t.searchParameters.query || ''
                        return n ? D({}, e, { query: n }) : e
                    },
                    getWidgetSearchParameters: function (e, t) {
                        var n = t.uiState
                        return e.setQueryParameter('query', n.query || '')
                    }
                }
            }
        )
    }
    var _r = Ae({ name: 'voice-search', connector: !0 }),
        xr = Object.freeze({
            __proto__: null,
            connectClearRefinements: Dt,
            connectCurrentRefinements: Bt,
            connectHierarchicalMenu: zt,
            connectHits: Jt,
            connectHitsWithInsights: Mn,
            connectHitsPerPage: Tn,
            connectInfiniteHits: kn,
            connectInfiniteHitsWithInsights: En,
            connectMenu: An,
            connectNumericMenu: Hn,
            connectPagination: Wn,
            connectRange: zn,
            connectRefinementList: Jn,
            connectSearchBox: Xn,
            connectSortBy: Zn,
            connectRatingMenu: tr,
            connectStats: rr,
            connectToggleRefinement: ar,
            connectBreadcrumb: or,
            connectGeoSearch: cr,
            connectPoweredBy: hr,
            connectConfigure: mr,
            EXPERIMENTAL_connectConfigureRelatedItems: vr,
            connectAutocomplete: function (c, e) {
                var r = 1 < arguments.length && void 0 !== e ? e : Fe
                return (
                    xe(c, yr()),
                    function (a) {
                        var e = (a || {}).escapeHTML,
                            s = void 0 === e || e,
                            o = {}
                        return {
                            $$type: 'ais.autocomplete',
                            init: function (e) {
                                var t = e.instantSearchInstance,
                                    n = e.helper
                                ;(o.refine = function (e) {
                                    n.setQuery(e).search()
                                }),
                                    c(
                                        {
                                            widgetParams: a,
                                            currentRefinement: n.state.query || '',
                                            indices: [],
                                            refine: o.refine,
                                            instantSearchInstance: t
                                        },
                                        !0
                                    )
                            },
                            render: function (e) {
                                var t = e.helper,
                                    n = e.scopedResults,
                                    r = e.instantSearchInstance,
                                    i = n.map(function (e) {
                                        return (
                                            (e.results.hits = s
                                                ? Ze(e.results.hits)
                                                : e.results.hits),
                                            {
                                                indexId: e.indexId,
                                                indexName: e.results.index,
                                                hits: e.results.hits,
                                                results: e.results
                                            }
                                        )
                                    })
                                c(
                                    {
                                        widgetParams: a,
                                        currentRefinement: t.state.query || '',
                                        indices: i,
                                        refine: o.refine,
                                        instantSearchInstance: r
                                    },
                                    !1
                                )
                            },
                            getWidgetState: function (e, t) {
                                var n = t.searchParameters.query || ''
                                return '' === n || (e && e.query === n) ? e : D({}, e, { query: n })
                            },
                            getWidgetSearchParameters: function (e, t) {
                                var n = { query: t.uiState.query || '' }
                                return s
                                    ? e.setQueryParameters(D({}, n, {}, Je))
                                    : e.setQueryParameters(n)
                            },
                            dispose: function (e) {
                                var t = e.state
                                r()
                                var n = t.setQueryParameter('query', void 0)
                                return s
                                    ? n.setQueryParameters(
                                          Object.keys(Je).reduce(function (e, t) {
                                              return D({}, e, C({}, t, void 0))
                                          }, {})
                                      )
                                    : n
                            }
                        }
                    }
                )
            },
            connectQueryRules: wr,
            connectVoiceSearch: Pr
        }),
        Nr = me(function (e, t) {
            Object.defineProperty(t, '__esModule', { value: !0 })
            var n = 'function' == typeof Symbol && Symbol.for,
                r = n ? Symbol.for('react.element') : 60103,
                i = n ? Symbol.for('react.portal') : 60106,
                a = n ? Symbol.for('react.fragment') : 60107,
                s = n ? Symbol.for('react.strict_mode') : 60108,
                o = n ? Symbol.for('react.profiler') : 60114,
                c = n ? Symbol.for('react.provider') : 60109,
                u = n ? Symbol.for('react.context') : 60110,
                l = n ? Symbol.for('react.async_mode') : 60111,
                h = n ? Symbol.for('react.concurrent_mode') : 60111,
                f = n ? Symbol.for('react.forward_ref') : 60112,
                d = n ? Symbol.for('react.suspense') : 60113,
                m = n ? Symbol.for('react.suspense_list') : 60120,
                p = n ? Symbol.for('react.memo') : 60115,
                g = n ? Symbol.for('react.lazy') : 60116,
                v = n ? Symbol.for('react.fundamental') : 60117,
                y = n ? Symbol.for('react.responder') : 60118
            function b(e) {
                if ('object' == typeof e && null !== e) {
                    var t = e.$$typeof
                    switch (t) {
                        case r:
                            switch ((e = e.type)) {
                                case l:
                                case h:
                                case a:
                                case o:
                                case s:
                                case d:
                                    return e
                                default:
                                    switch ((e = e && e.$$typeof)) {
                                        case u:
                                        case f:
                                        case c:
                                            return e
                                        default:
                                            return t
                                    }
                            }
                        case g:
                        case p:
                        case i:
                            return t
                    }
                }
            }
            function R(e) {
                return b(e) === h
            }
            ;(t.typeOf = b),
                (t.AsyncMode = l),
                (t.ConcurrentMode = h),
                (t.ContextConsumer = u),
                (t.ContextProvider = c),
                (t.Element = r),
                (t.ForwardRef = f),
                (t.Fragment = a),
                (t.Lazy = g),
                (t.Memo = p),
                (t.Portal = i),
                (t.Profiler = o),
                (t.StrictMode = s),
                (t.Suspense = d),
                (t.isValidElementType = function (e) {
                    return (
                        'string' == typeof e ||
                        'function' == typeof e ||
                        e === a ||
                        e === h ||
                        e === o ||
                        e === s ||
                        e === d ||
                        e === m ||
                        ('object' == typeof e &&
                            null !== e &&
                            (e.$$typeof === g ||
                                e.$$typeof === p ||
                                e.$$typeof === c ||
                                e.$$typeof === u ||
                                e.$$typeof === f ||
                                e.$$typeof === v ||
                                e.$$typeof === y))
                    )
                }),
                (t.isAsyncMode = function (e) {
                    return R(e) || b(e) === l
                }),
                (t.isConcurrentMode = R),
                (t.isContextConsumer = function (e) {
                    return b(e) === u
                }),
                (t.isContextProvider = function (e) {
                    return b(e) === c
                }),
                (t.isElement = function (e) {
                    return 'object' == typeof e && null !== e && e.$$typeof === r
                }),
                (t.isForwardRef = function (e) {
                    return b(e) === f
                }),
                (t.isFragment = function (e) {
                    return b(e) === a
                }),
                (t.isLazy = function (e) {
                    return b(e) === g
                }),
                (t.isMemo = function (e) {
                    return b(e) === p
                }),
                (t.isPortal = function (e) {
                    return b(e) === i
                }),
                (t.isProfiler = function (e) {
                    return b(e) === o
                }),
                (t.isStrictMode = function (e) {
                    return b(e) === s
                }),
                (t.isSuspense = function (e) {
                    return b(e) === d
                })
        })
    de(Nr)
    Nr.typeOf,
        Nr.AsyncMode,
        Nr.ConcurrentMode,
        Nr.ContextConsumer,
        Nr.ContextProvider,
        Nr.Element,
        Nr.ForwardRef,
        Nr.Fragment,
        Nr.Lazy,
        Nr.Memo,
        Nr.Portal,
        Nr.Profiler,
        Nr.StrictMode,
        Nr.Suspense,
        Nr.isValidElementType,
        Nr.isAsyncMode,
        Nr.isConcurrentMode,
        Nr.isContextConsumer,
        Nr.isContextProvider,
        Nr.isElement,
        Nr.isForwardRef,
        Nr.isFragment,
        Nr.isLazy,
        Nr.isMemo,
        Nr.isPortal,
        Nr.isProfiler,
        Nr.isStrictMode,
        Nr.isSuspense
    var Fr = me(function (e, t) {})
    de(Fr)
    Fr.typeOf,
        Fr.AsyncMode,
        Fr.ConcurrentMode,
        Fr.ContextConsumer,
        Fr.ContextProvider,
        Fr.Element,
        Fr.ForwardRef,
        Fr.Fragment,
        Fr.Lazy,
        Fr.Memo,
        Fr.Portal,
        Fr.Profiler,
        Fr.StrictMode,
        Fr.Suspense,
        Fr.isValidElementType,
        Fr.isAsyncMode,
        Fr.isConcurrentMode,
        Fr.isContextConsumer,
        Fr.isContextProvider,
        Fr.isElement,
        Fr.isForwardRef,
        Fr.isFragment,
        Fr.isLazy,
        Fr.isMemo,
        Fr.isPortal,
        Fr.isProfiler,
        Fr.isStrictMode,
        Fr.isSuspense,
        me(function (e) {
            e.exports = Nr
        })
    var Cr = Object.getOwnPropertySymbols,
        Ir = Object.prototype.hasOwnProperty,
        Mr = Object.prototype.propertyIsEnumerable
    !(function () {
        try {
            if (!Object.assign) return !1
            var e = new String('abc')
            if (((e[5] = 'de'), '5' === Object.getOwnPropertyNames(e)[0])) return !1
            for (var t = {}, n = 0; n < 10; n++) t['_' + String.fromCharCode(n)] = n
            if (
                '0123456789' !==
                Object.getOwnPropertyNames(t)
                    .map(function (e) {
                        return t[e]
                    })
                    .join('')
            )
                return !1
            var r = {}
            return (
                'abcdefghijklmnopqrst'.split('').forEach(function (e) {
                    r[e] = e
                }),
                'abcdefghijklmnopqrst' === Object.keys(Object.assign({}, r)).join('')
            )
        } catch (e) {
            return !1
        }
    })() || Object.assign,
        Function.call.bind(Object.prototype.hasOwnProperty)
    function Lr() {}
    function Tr() {}
    Tr.resetWarningCache = Lr
    me(function (e) {
        e.exports = (function () {
            function e(e, t, n, r, i, a) {
                if ('SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED' !== a) {
                    var s = new Error(
                        'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
                    )
                    throw ((s.name = 'Invariant Violation'), s)
                }
            }
            function t() {
                return e
            }
            var n = {
                array: (e.isRequired = e),
                bool: e,
                func: e,
                number: e,
                object: e,
                string: e,
                symbol: e,
                any: e,
                arrayOf: t,
                element: e,
                elementType: e,
                instanceOf: t,
                node: e,
                objectOf: t,
                oneOf: t,
                oneOfType: t,
                shape: t,
                exact: t,
                checkPropTypes: Tr,
                resetWarningCache: Lr
            }
            return (n.PropTypes = n)
        })()
    })
    var kr = me(function (e) {
            function s() {
                for (var e = [], t = 0; t < arguments.length; t++) {
                    var n = arguments[t]
                    if (n) {
                        var r = typeof n
                        if ('string' == r || 'number' == r) e.push(n)
                        else if (Array.isArray(n) && n.length) {
                            var i = s.apply(null, n)
                            i && e.push(i)
                        } else if ('object' == r) for (var a in n) o.call(n, a) && n[a] && e.push(a)
                    }
                }
                return e.join(' ')
            }
            var o
            ;(o = {}.hasOwnProperty),
                e.exports ? ((s.default = s), (e.exports = s)) : (window.classNames = s)
        }),
        jr = (function () {
            function e() {
                return T(this, e), A(this, E(e).apply(this, arguments))
            }
            return (
                j(e, dn),
                k(e, [
                    {
                        key: 'shouldComponentUpdate',
                        value: function (e) {
                            return (
                                !Te(this.props.data, e.data) ||
                                this.props.templateKey !== e.templateKey ||
                                !Te(this.props.rootProps, e.rootProps)
                            )
                        }
                    },
                    {
                        key: 'render',
                        value: function () {
                            var e = this.props.rootTagName,
                                t = this.props.useCustomCompileOptions[this.props.templateKey]
                                    ? this.props.templatesConfig.compileOptions
                                    : {},
                                n = ye({
                                    templates: this.props.templates,
                                    templateKey: this.props.templateKey,
                                    compileOptions: t,
                                    helpers: this.props.templatesConfig.helpers,
                                    data: this.props.data
                                })
                            return null === n
                                ? null
                                : ln(
                                      e,
                                      f({}, this.props.rootProps, {
                                          dangerouslySetInnerHTML: { __html: n }
                                      })
                                  )
                        }
                    }
                ]),
                e
            )
        })()
    jr.defaultProps = {
        data: {},
        rootTagName: 'div',
        useCustomCompileOptions: {},
        templates: {},
        templatesConfig: {}
    }
    function Er(e) {
        var t = e.hasRefinements,
            n = e.refine,
            r = e.cssClasses,
            i = e.templateProps
        return ln(
            'div',
            { className: r.root },
            ln(
                jr,
                f({}, i, {
                    templateKey: 'resetLabel',
                    rootTagName: 'button',
                    rootProps: {
                        className: kr(r.button, C({}, r.disabledButton, !t)),
                        onClick: n,
                        disabled: !t
                    },
                    data: { hasRefinements: t }
                })
            )
        )
    }
    var Or = { resetLabel: 'Clear refinements' },
        Ar = Ae({ name: 'clear-refinements' }),
        Hr = et('ClearRefinements')
    function Dr(e) {
        var t = e.items,
            n = e.cssClasses
        return ln(
            'div',
            { className: n.root },
            ln(
                'ul',
                { className: n.list },
                t.map(function (t, e) {
                    return ln(
                        'li',
                        {
                            key: ''.concat(t.indexName, '-').concat(t.attribute, '-').concat(e),
                            className: n.item
                        },
                        ln(
                            'span',
                            { className: n.label },
                            (function (e) {
                                return e.toString().charAt(0).toUpperCase() + e.toString().slice(1)
                            })(t.label),
                            ':'
                        ),
                        t.refinements.map(function (e) {
                            return ln(
                                'span',
                                {
                                    key: (function (e) {
                                        var t = e.attribute,
                                            n = e.value
                                        return [t, e.type, n, e.operator]
                                            .map(function (e) {
                                                return e
                                            })
                                            .filter(Boolean)
                                            .join(':')
                                    })(e),
                                    className: n.category
                                },
                                ln(
                                    'span',
                                    { className: n.categoryLabel },
                                    'query' === e.attribute ? ln('q', null, e.label) : e.label
                                ),
                                ln(
                                    'button',
                                    {
                                        className: n.delete,
                                        onClick: (function (t) {
                                            return function (e) {
                                                le(e) || (e.preventDefault(), t())
                                            }
                                        })(t.refine.bind(null, e))
                                    },
                                    '✕'
                                )
                            )
                        })
                    )
                })
            )
        )
    }
    function Br(e, t) {
        var n = e.items,
            r = e.widgetParams
        if (!t) {
            var i = r.container,
                a = r.cssClasses
            Cn(ln(Dr, { cssClasses: a, items: n }), i)
        }
    }
    function Qr(e) {
        var t = e.className,
            n = e.disabled
        return ln('button', { className: t, onClick: e.onClick, disabled: n }, e.children)
    }
    var qr = Ae({ name: 'current-refinements' }),
        Ur = et('CurrentRefinements')
    Qr.defaultProps = { disabled: !1 }
    function Vr(e) {
        var t = e.classNameLabel,
            n = e.classNameInput,
            r = e.checked,
            i = e.onToggle,
            a = e.children
        return ln(
            'label',
            { className: t },
            ln('input', { className: n, type: 'checkbox', checked: r, onChange: i }),
            a
        )
    }
    function Wr(e) {
        var t = e.cssClasses,
            n = e.enableRefine,
            r = e.enableRefineControl,
            i = e.enableClearMapRefinement,
            a = e.isRefineOnMapMove,
            s = e.isRefinedWithMap,
            o = e.hasMapMoveSinceLastRefine,
            c = e.onRefineToggle,
            u = e.onRefineClick,
            l = e.onClearClick,
            h = e.templateProps
        return (
            n &&
            ln(
                'div',
                null,
                r &&
                    ln(
                        'div',
                        { className: t.control },
                        a || !o
                            ? ln(
                                  Vr,
                                  {
                                      classNameLabel: kr(t.label, C({}, t.selectedLabel, a)),
                                      classNameInput: t.input,
                                      checked: a,
                                      onToggle: c
                                  },
                                  ln(jr, f({}, h, { templateKey: 'toggle', rootTagName: 'span' }))
                              )
                            : ln(
                                  Qr,
                                  { className: t.redo, disabled: !o, onClick: u },
                                  ln(jr, f({}, h, { templateKey: 'redo', rootTagName: 'span' }))
                              )
                    ),
                !r &&
                    !a &&
                    ln(
                        'div',
                        { className: t.control },
                        ln(
                            Qr,
                            {
                                className: kr(t.redo, C({}, t.disabledRedo, !o)),
                                disabled: !o,
                                onClick: u
                            },
                            ln(jr, f({}, h, { templateKey: 'redo', rootTagName: 'span' }))
                        )
                    ),
                i &&
                    s &&
                    ln(
                        Qr,
                        { className: t.reset, onClick: l },
                        ln(jr, f({}, h, { templateKey: 'reset', rootTagName: 'span' }))
                    )
            )
        )
    }
    function $r(e) {
        var t = e.refine,
            n = e.mapInstance
        return t({
            northEast: n.getBounds().getNorthEast().toJSON(),
            southWest: n.getBounds().getSouthWest().toJSON()
        })
    }
    function zr(e, t) {
        ;(e.isUserInteraction = !1), t(), (e.isUserInteraction = !0)
    }
    function Kr(e, t) {
        var n = e.items,
            r = e.position,
            i = e.currentRefinement,
            a = e.refine,
            s = e.clearMapRefinement,
            o = e.toggleRefineOnMapMove,
            c = e.isRefineOnMapMove,
            u = e.setMapMoveSinceLastRefine,
            l = e.hasMapMoveSinceLastRefine,
            h = e.isRefinedWithMap,
            f = e.widgetParams,
            d = e.instantSearchInstance,
            m = f.container,
            p = f.googleReference,
            g = f.cssClasses,
            v = f.templates,
            y = f.initialZoom,
            b = f.initialPosition,
            R = f.enableRefine,
            w = f.enableClearMapRefinement,
            S = f.enableRefineControl,
            P = f.mapOptions,
            _ = f.createMarker,
            x = f.markerOptions,
            N = f.renderState
        if (t) {
            ;(N.isUserInteraction = !0), (N.isPendingRefine = !1), (N.markers = [])
            var F = document.createElement('div')
            ;(F.className = g.root), m.appendChild(F)
            var C = document.createElement('div')
            ;(C.className = g.map), F.appendChild(C)
            var I = document.createElement('div')
            ;(I.className = g.tree),
                F.appendChild(I),
                (N.mapInstance = new p.maps.Map(
                    C,
                    D(
                        {
                            mapTypeControl: !1,
                            fullscreenControl: !1,
                            streetViewControl: !1,
                            clickableIcons: !1,
                            zoomControlOptions: { position: p.maps.ControlPosition.LEFT_TOP }
                        },
                        P
                    )
                ))
            return (
                p.maps.event.addListenerOnce(N.mapInstance, 'idle', function () {
                    function e() {
                        N.isUserInteraction && R && (u(), c() && (N.isPendingRefine = !0))
                    }
                    N.mapInstance.addListener('center_changed', e),
                        N.mapInstance.addListener('zoom_changed', e),
                        N.mapInstance.addListener('dragstart', e),
                        N.mapInstance.addListener('idle', function () {
                            N.isUserInteraction &&
                                N.isPendingRefine &&
                                ((N.isPendingRefine = !1),
                                $r({ mapInstance: N.mapInstance, refine: a }))
                        })
                }),
                void (N.templateProps = fe({ templatesConfig: d.templatesConfig, templates: v }))
            )
        }
        var M = n.map(function (e) {
                return e.objectID
            }),
            L = B(
                (function (e, a) {
                    return e.reduce(
                        function (e, t) {
                            var n = B(e, 2),
                                r = n[0],
                                i = n[1]
                            return a.includes(t.__id) ? [r.concat(t), i] : [r, i.concat(t)]
                        },
                        [[], []]
                    )
                })(N.markers, M),
                2
            ),
            T = L[0],
            k = L[1],
            j = T.map(function (e) {
                return e.__id
            }),
            E = n.filter(function (e) {
                return !j.includes(e.objectID)
            })
        k.forEach(function (e) {
            return e.setMap(null)
        }),
            (N.markers = T.concat(
                E.map(function (n) {
                    var r = _({ map: N.mapInstance, item: n })
                    return (
                        Object.keys(x.events).forEach(function (t) {
                            r.addListener(t, function (e) {
                                x.events[t]({ map: N.mapInstance, event: e, item: n, marker: r })
                            })
                        }),
                        r
                    )
                })
            ))
        var O = !l(),
            A = i ? 0 : null,
            H =
                !i && Boolean(N.markers.length)
                    ? (function (e, t) {
                          var n = t.reduce(function (e, t) {
                              return e.extend(t.getPosition())
                          }, new e.maps.LatLngBounds())
                          return {
                              northEast: n.getNorthEast().toJSON(),
                              southWest: n.getSouthWest().toJSON()
                          }
                      })(p, N.markers)
                    : i
        H && O
            ? zr(N, function () {
                  N.mapInstance.fitBounds(new p.maps.LatLngBounds(H.southWest, H.northEast), A)
              })
            : O &&
              zr(N, function () {
                  N.mapInstance.setCenter(r || b), N.mapInstance.setZoom(y)
              }),
            Cn(
                ln(Wr, {
                    cssClasses: g,
                    enableRefine: R,
                    enableRefineControl: S,
                    enableClearMapRefinement: w,
                    isRefineOnMapMove: c(),
                    isRefinedWithMap: h(),
                    hasMapMoveSinceLastRefine: l(),
                    onRefineToggle: o,
                    onRefineClick: function () {
                        return $r({ mapInstance: N.mapInstance, refine: a })
                    },
                    onClearClick: s,
                    templateProps: N.templateProps
                }),
                m.querySelector('.'.concat(g.tree))
            )
    }
    var Jr = {
            HTMLMarker: '<p>Your custom HTML Marker</p>',
            reset: 'Clear the map refinement',
            toggle: 'Search as I move the map',
            redo: 'Redo search here'
        },
        Yr = Ae({ name: 'geo-search' }),
        Xr = et('GeoSearch')
    function Gr(e) {
        var t = e.className,
            n = e.handleClick,
            r = e.facetValueToRefine,
            i = e.isRefined,
            a = e.templateProps,
            s = e.templateKey,
            o = e.templateData,
            c = e.subItems
        return ln(
            'li',
            {
                className: t,
                onClick: function (e) {
                    n({ facetValueToRefine: r, isRefined: i, originalEvent: e })
                }
            },
            ln(jr, f({}, a, { templateKey: s, data: o })),
            c
        )
    }
    var Zr = (function () {
        function i() {
            var e, s
            T(this, i)
            for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r]
            return (
                C(y((s = A(this, (e = E(i)).call.apply(e, [this].concat(n))))), 'state', {
                    query: s.props.query,
                    focused: !1
                }),
                C(y(s), 'onInput', function (e) {
                    var t = s.props,
                        n = t.searchAsYouType,
                        r = t.refine,
                        i = t.onChange,
                        a = e.target.value
                    n && r(a), s.setState({ query: a }), i(e)
                }),
                C(y(s), 'onSubmit', function (e) {
                    var t = s.props,
                        n = t.searchAsYouType,
                        r = t.refine,
                        i = t.onSubmit
                    return (
                        e.preventDefault(),
                        e.stopPropagation(),
                        s.input.blur(),
                        n || r(s.state.query),
                        i(e),
                        !1
                    )
                }),
                C(y(s), 'onReset', function (e) {
                    var t = s.props,
                        n = t.refine,
                        r = t.onReset
                    s.input.focus(), n(''), s.setState({ query: '' }), r(e)
                }),
                C(y(s), 'onBlur', function () {
                    s.setState({ focused: !1 })
                }),
                C(y(s), 'onFocus', function () {
                    s.setState({ focused: !0 })
                }),
                s
            )
        }
        return (
            j(i, dn),
            k(i, [
                {
                    key: 'resetInput',
                    value: function () {
                        this.setState({ query: '' })
                    }
                },
                {
                    key: 'componentWillReceiveProps',
                    value: function (e) {
                        this.state.focused ||
                            e.query === this.state.query ||
                            this.setState({ query: e.query })
                    }
                },
                {
                    key: 'render',
                    value: function () {
                        var t = this,
                            e = this.props,
                            n = e.cssClasses,
                            r = e.placeholder,
                            i = e.autofocus,
                            a = e.showSubmit,
                            s = e.showReset,
                            o = e.showLoadingIndicator,
                            c = e.templates,
                            u = e.isSearchStalled
                        return ln(
                            'div',
                            { className: n.root },
                            ln(
                                'form',
                                {
                                    action: '',
                                    role: 'search',
                                    className: n.form,
                                    noValidate: !0,
                                    onSubmit: this.onSubmit,
                                    onReset: this.onReset
                                },
                                ln('input', {
                                    ref: function (e) {
                                        return (t.input = e)
                                    },
                                    value: this.state.query,
                                    disabled: this.props.disabled,
                                    className: n.input,
                                    type: 'search',
                                    placeholder: r,
                                    autoFocus: i,
                                    autoComplete: 'off',
                                    autoCorrect: 'off',
                                    autoCapitalize: 'off',
                                    spellCheck: !1,
                                    maxLength: 512,
                                    onInput: this.onInput,
                                    onBlur: this.onBlur,
                                    onFocus: this.onFocus
                                }),
                                ln(jr, {
                                    templateKey: 'submit',
                                    rootTagName: 'button',
                                    rootProps: {
                                        className: n.submit,
                                        type: 'submit',
                                        title: 'Submit the search query.',
                                        hidden: !a
                                    },
                                    templates: c,
                                    data: { cssClasses: n }
                                }),
                                ln(jr, {
                                    templateKey: 'reset',
                                    rootTagName: 'button',
                                    rootProps: {
                                        className: n.reset,
                                        type: 'reset',
                                        title: 'Clear the search query.',
                                        hidden: !(s && this.state.query.trim() && !u)
                                    },
                                    templates: c,
                                    data: { cssClasses: n }
                                }),
                                o &&
                                    ln(jr, {
                                        templateKey: 'loadingIndicator',
                                        rootTagName: 'span',
                                        rootProps: { className: n.loadingIndicator, hidden: !u },
                                        templates: c,
                                        data: { cssClasses: n }
                                    })
                            )
                        )
                    }
                }
            ]),
            i
        )
    })()
    C(Zr, 'defaultProps', {
        query: '',
        showSubmit: !0,
        showReset: !0,
        showLoadingIndicator: !0,
        autofocus: !1,
        searchAsYouType: !0,
        isSearchStalled: !1,
        disabled: !1,
        onChange: Fe,
        onSubmit: Fe,
        onReset: Fe,
        refine: Fe
    })
    var ei = (function () {
        function c(e) {
            var t
            return (
                T(this, c),
                ((t = A(this, E(c).call(this, e))).handleItemClick = t.handleItemClick.bind(y(t))),
                t
            )
        }
        return (
            j(c, dn),
            k(c, [
                {
                    key: 'shouldComponentUpdate',
                    value: function (e, t) {
                        var n = this.state !== t,
                            r = !Te(this.props.facetValues, e.facetValues)
                        return n || r
                    }
                },
                {
                    key: 'refine',
                    value: function (e, t) {
                        this.props.toggleRefinement(e, t)
                    }
                },
                {
                    key: '_generateFacetItem',
                    value: function (e) {
                        var t,
                            n,
                            r = e.data && 0 < e.data.length
                        if (r) {
                            var i = this.props.cssClasses,
                                a = (i.root, O(i, ['root']))
                            n = ln(
                                c,
                                f({}, this.props, {
                                    cssClasses: a,
                                    depth: this.props.depth + 1,
                                    facetValues: e.data,
                                    showMore: !1,
                                    className: this.props.cssClasses.childList
                                })
                            )
                        }
                        var s = D({}, e, {
                                url: this.props.createURL(e.value),
                                attribute: this.props.attribute,
                                cssClasses: this.props.cssClasses,
                                isFromSearch: this.props.isFromSearch
                            }),
                            o = e.value
                        return (
                            void 0 !== e.isRefined && (o += '/'.concat(e.isRefined)),
                            void 0 !== e.count && (o += '/'.concat(e.count)),
                            ln(Gr, {
                                templateKey: 'item',
                                key: o,
                                facetValueToRefine: e.value,
                                handleClick: this.handleItemClick,
                                isRefined: e.isRefined,
                                className: kr(
                                    this.props.cssClasses.item,
                                    ((t = {}),
                                    C(t, this.props.cssClasses.selectedItem, e.isRefined),
                                    C(t, this.props.cssClasses.disabledItem, !e.count),
                                    C(t, this.props.cssClasses.parentItem, r),
                                    t)
                                ),
                                subItems: n,
                                templateData: s,
                                templateProps: this.props.templateProps
                            })
                        )
                    }
                },
                {
                    key: 'handleItemClick',
                    value: function (e) {
                        var t = e.facetValueToRefine,
                            n = e.originalEvent,
                            r = e.isRefined
                        if (
                            !(
                                le(n) ||
                                (r &&
                                    n.target.parentNode.querySelector(
                                        'input[type="radio"]:checked'
                                    ))
                            )
                        )
                            if ('INPUT' !== n.target.tagName) {
                                for (var i = n.target; i !== n.currentTarget; ) {
                                    if (
                                        'LABEL' === i.tagName &&
                                        (i.querySelector('input[type="checkbox"]') ||
                                            i.querySelector('input[type="radio"]'))
                                    )
                                        return
                                    'A' === i.tagName && i.href && n.preventDefault(),
                                        (i = i.parentNode)
                                }
                                n.stopPropagation(), this.refine(t, r)
                            } else this.refine(t, r)
                    }
                },
                {
                    key: 'componentWillReceiveProps',
                    value: function (e) {
                        this.searchBox && !e.isFromSearch && this.searchBox.resetInput()
                    }
                },
                {
                    key: 'refineFirstValue',
                    value: function () {
                        var e = this.props.facetValues[0]
                        if (e) {
                            var t = e.value
                            this.props.toggleRefinement(t)
                        }
                    }
                },
                {
                    key: 'render',
                    value: function () {
                        var t = this,
                            e = kr(
                                this.props.cssClasses.list,
                                C(
                                    {},
                                    ''.concat(this.props.cssClasses.depth).concat(this.props.depth),
                                    this.props.cssClasses.depth
                                )
                            ),
                            n = kr(
                                this.props.cssClasses.showMore,
                                C(
                                    {},
                                    this.props.cssClasses.disabledShowMore,
                                    !(!0 === this.props.showMore && this.props.canToggleShowMore)
                                )
                            ),
                            r =
                                !0 === this.props.showMore &&
                                ln(
                                    jr,
                                    f({}, this.props.templateProps, {
                                        templateKey: 'showMoreText',
                                        rootTagName: 'button',
                                        rootProps: {
                                            className: n,
                                            disabled: !this.props.canToggleShowMore,
                                            onClick: this.props.toggleShowMore
                                        },
                                        data: { isShowingMore: this.props.isShowingMore }
                                    })
                                ),
                            i =
                                !0 !== this.props.searchIsAlwaysActive &&
                                !(this.props.isFromSearch || !this.props.hasExhaustiveItems),
                            a =
                                this.props.searchFacetValues &&
                                ln(
                                    'div',
                                    { className: this.props.cssClasses.searchBox },
                                    ln(Zr, {
                                        ref: function (e) {
                                            return (t.searchBox = e)
                                        },
                                        placeholder: this.props.searchPlaceholder,
                                        disabled: i,
                                        cssClasses: this.props.cssClasses.searchable,
                                        templates: this.props.templateProps.templates,
                                        onChange: function (e) {
                                            return t.props.searchFacetValues(e.target.value)
                                        },
                                        onReset: function () {
                                            return t.props.searchFacetValues('')
                                        },
                                        onSubmit: function () {
                                            return t.refineFirstValue()
                                        },
                                        searchAsYouType: !1
                                    })
                                ),
                            s =
                                this.props.facetValues &&
                                0 < this.props.facetValues.length &&
                                ln(
                                    'ul',
                                    { className: e },
                                    this.props.facetValues.map(this._generateFacetItem, this)
                                ),
                            o =
                                this.props.searchFacetValues &&
                                this.props.isFromSearch &&
                                0 === this.props.facetValues.length &&
                                ln(
                                    jr,
                                    f({}, this.props.templateProps, {
                                        templateKey: 'searchableNoResults',
                                        rootProps: { className: this.props.cssClasses.noResults }
                                    })
                                )
                        return ln(
                            'div',
                            {
                                className: kr(
                                    this.props.cssClasses.root,
                                    C(
                                        {},
                                        this.props.cssClasses.noRefinementRoot,
                                        !this.props.facetValues ||
                                            0 === this.props.facetValues.length
                                    ),
                                    this.props.className
                                )
                            },
                            this.props.children,
                            a,
                            s,
                            o,
                            r
                        )
                    }
                }
            ]),
            c
        )
    })()
    ei.defaultProps = { cssClasses: {}, depth: 0 }
    var ti = {
            item: '<a className="{{cssClasses.link}}" href="{{url}}"><span className="{{cssClasses.label}}">{{label}}</span><span className="{{cssClasses.count}}">{{#helpers.formatNumber}}{{count}}{{/helpers.formatNumber}}</span></a>',
            showMoreText:
                '\n    {{#isShowingMore}}\n      Show less\n    {{/isShowingMore}}\n    {{^isShowingMore}}\n      Show more\n    {{/isShowingMore}}\n  '
        },
        ni = Ae({ name: 'hierarchical-menu' }),
        ri = et('HierarchicalMenu')
    function ii(e) {
        var t = e.results,
            n = e.hits,
            r = e.cssClasses,
            i = e.templateProps
        return 0 === t.hits.length
            ? ln(
                  jr,
                  f({}, i, {
                      templateKey: 'empty',
                      rootProps: { className: kr(r.root, r.emptyRoot) },
                      data: t
                  })
              )
            : ln(
                  'div',
                  { className: r.root },
                  ln(
                      'ol',
                      { className: r.list },
                      n.map(function (e, t) {
                          return ln(
                              jr,
                              f({}, i, {
                                  templateKey: 'item',
                                  rootTagName: 'li',
                                  rootProps: { className: r.item },
                                  key: e.objectID,
                                  data: D({}, e, { __hitIndex: t })
                              })
                          )
                      })
                  )
              )
    }
    ii.defaultProps = { results: { hits: [] }, hits: [] }
    var ai = {
            empty: 'No results',
            item: function (e) {
                return JSON.stringify(e, null, 2)
            }
        },
        si = Ae({ name: 'hits' }),
        oi = et('Hits'),
        ci = In(ii)
    function ui(e) {
        var t = e.currentValue,
            n = e.options,
            r = e.cssClasses,
            i = e.setValue
        return ln(
            'select',
            {
                className: kr(r.select),
                onChange: function (e) {
                    return i(e.target.value)
                },
                value: ''.concat(t)
            },
            n.map(function (e) {
                return ln(
                    'option',
                    { className: kr(r.option), key: e.label + e.value, value: ''.concat(e.value) },
                    e.label
                )
            })
        )
    }
    var li = Ae({ name: 'hits-per-page' }),
        hi = et('HitsPerPage')
    var fi = {
            empty: 'No results',
            showPreviousText: 'Show previous results',
            showMoreText: 'Show more results',
            item: function (e) {
                return JSON.stringify(e, null, 2)
            }
        },
        di = Ae({ name: 'infinite-hits' }),
        mi = et('InfiniteHits'),
        pi = In(function (e) {
            var t = e.results,
                n = e.hits,
                r = e.hasShowPrevious,
                i = e.showPrevious,
                a = e.showMore,
                s = e.isFirstPage,
                o = e.isLastPage,
                c = e.cssClasses,
                u = e.templateProps
            return 0 === t.hits.length
                ? ln(
                      jr,
                      f({}, u, {
                          templateKey: 'empty',
                          rootProps: { className: kr(c.root, c.emptyRoot) },
                          data: t
                      })
                  )
                : ln(
                      'div',
                      { className: c.root },
                      r &&
                          ln(
                              jr,
                              f({}, u, {
                                  templateKey: 'showPreviousText',
                                  rootTagName: 'button',
                                  rootProps: {
                                      className: kr(
                                          c.loadPrevious,
                                          C({}, c.disabledLoadPrevious, s)
                                      ),
                                      disabled: s,
                                      onClick: i
                                  }
                              })
                          ),
                      ln(
                          'ol',
                          { className: c.list },
                          n.map(function (e, t) {
                              return ln(
                                  jr,
                                  f({}, u, {
                                      templateKey: 'item',
                                      rootTagName: 'li',
                                      rootProps: { className: c.item },
                                      key: e.objectID,
                                      data: D({}, e, { __hitIndex: t })
                                  })
                              )
                          })
                      ),
                      ln(
                          jr,
                          f({}, u, {
                              templateKey: 'showMoreText',
                              rootTagName: 'button',
                              rootProps: {
                                  className: kr(c.loadMore, C({}, c.disabledLoadMore, o)),
                                  disabled: o,
                                  onClick: a
                              }
                          })
                      )
                  )
        }),
        gi = {
            item: '<a className="{{cssClasses.link}}" href="{{url}}"><span className="{{cssClasses.label}}">{{label}}</span><span className="{{cssClasses.count}}">{{#helpers.formatNumber}}{{count}}{{/helpers.formatNumber}}</span></a>',
            showMoreText:
                '\n    {{#isShowingMore}}\n      Show less\n    {{/isShowingMore}}\n    {{^isShowingMore}}\n      Show more\n    {{/isShowingMore}}\n  '
        },
        vi = Ae({ name: 'menu' }),
        yi = et('Menu')
    var bi = {
            item: '<label className="{{cssClasses.label}}">\n  <input type="checkbox"\n         className="{{cssClasses.checkbox}}"\n         value="{{value}}"\n         {{#isRefined}}checked{{/isRefined}} />\n  <span className="{{cssClasses.labelText}}">{{#isFromSearch}}{{{highlighted}}}{{/isFromSearch}}{{^isFromSearch}}{{highlighted}}{{/isFromSearch}}</span>\n  <span className="{{cssClasses.count}}">{{#helpers.formatNumber}}{{count}}{{/helpers.formatNumber}}</span>\n</label>',
            showMoreText:
                '\n    {{#isShowingMore}}\n      Show less\n    {{/isShowingMore}}\n    {{^isShowingMore}}\n      Show more\n    {{/isShowingMore}}\n    ',
            searchableNoResults: 'No results',
            searchableReset:
                '\n  <svg className="{{cssClasses.resetIcon}}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="10" height="10">\n    <path d="M8.114 10L.944 2.83 0 1.885 1.886 0l.943.943L10 8.113l7.17-7.17.944-.943L20 1.886l-.943.943-7.17 7.17 7.17 7.17.943.944L18.114 20l-.943-.943-7.17-7.17-7.17 7.17-.944.943L0 18.114l.943-.943L8.113 10z"></path>\n  </svg>\n    ',
            searchableSubmit:
                '\n  <svg className="{{cssClasses.submitIcon}}" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 40 40">\n    <path d="M26.804 29.01c-2.832 2.34-6.465 3.746-10.426 3.746C7.333 32.756 0 25.424 0 16.378 0 7.333 7.333 0 16.378 0c9.046 0 16.378 7.333 16.378 16.378 0 3.96-1.406 7.594-3.746 10.426l10.534 10.534c.607.607.61 1.59-.004 2.202-.61.61-1.597.61-2.202.004L26.804 29.01zm-10.426.627c7.323 0 13.26-5.936 13.26-13.26 0-7.32-5.937-13.257-13.26-13.257C9.056 3.12 3.12 9.056 3.12 16.378c0 7.323 5.936 13.26 13.258 13.26z"></path>\n  </svg>\n    ',
            searchableLoadingIndicator:
                '\n  <svg className="{{cssClasses.loadingIcon}}" width="16" height="16" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" stroke="#444">\n    <g fill="none" fillRule="evenodd">\n      <g transform="translate(1 1)" strokeWidth="2">\n        <circle strokeOpacity=".5" cx="18" cy="18" r="18" />\n        <path d="M36 18c0-9.94-8.06-18-18-18">\n          <animateTransform\n            attributeName="transform"\n            type="rotate"\n            from="0 18 18"\n            to="360 18 18"\n            dur="1s"\n            repeatCount="indefinite"\n          />\n        </path>\n      </g>\n    </g>\n  </svg>\n    '
        },
        Ri = Ae({ name: 'refinement-list' }),
        wi = et('RefinementList'),
        Si = et('SearchBox')
    var Pi = {
            item: '<label className="{{cssClasses.label}}">\n  <input type="radio" className="{{cssClasses.radio}}" name="{{attribute}}"{{#isRefined}} checked{{/isRefined}} />\n  <span className="{{cssClasses.labelText}}">{{label}}</span>\n</label>'
        },
        _i = Ae({ name: 'numeric-menu' }),
        xi = et('NumericMenu')
    function Ni(e) {
        var t = e.cssClasses,
            n = e.label,
            r = e.ariaLabel,
            i = e.url,
            a = e.isDisabled,
            s = e.handleClick,
            o = e.pageNumber
        return ln(
            'li',
            { className: t.item },
            a
                ? ln('span', { className: t.link, dangerouslySetInnerHTML: { __html: n } })
                : ln('a', {
                      className: t.link,
                      'aria-label': r,
                      href: i,
                      onClick: function (e) {
                          return s(o, e)
                      },
                      dangerouslySetInnerHTML: { __html: n }
                  })
        )
    }
    var Fi = (function () {
        function a() {
            var e, n
            T(this, a)
            for (var t = arguments.length, r = new Array(t), i = 0; i < t; i++) r[i] = arguments[i]
            return (
                C(
                    y((n = A(this, (e = E(a)).call.apply(e, [this].concat(r))))),
                    'handleClick',
                    function (e, t) {
                        le(t) || (t.preventDefault(), n.props.setCurrentPage(e))
                    }
                ),
                n
            )
        }
        return (
            j(a, dn),
            k(a, [
                {
                    key: 'pageLink',
                    value: function (e) {
                        var t = e.label,
                            n = e.ariaLabel,
                            r = e.pageNumber,
                            i = e.additionalClassName,
                            a = void 0 === i ? null : i,
                            s = e.isDisabled,
                            o = void 0 !== s && s,
                            c = e.isSelected,
                            u = void 0 !== c && c,
                            l = e.createURL,
                            h = {
                                item: kr(this.props.cssClasses.item, a),
                                link: this.props.cssClasses.link
                            }
                        o
                            ? (h.item = kr(h.item, this.props.cssClasses.disabledItem))
                            : u && (h.item = kr(h.item, this.props.cssClasses.selectedItem))
                        var f = l && !o ? l(r) : '#'
                        return ln(Ni, {
                            ariaLabel: n,
                            cssClasses: h,
                            handleClick: this.handleClick,
                            isDisabled: o,
                            key: t + r + n,
                            label: t,
                            pageNumber: r,
                            url: f
                        })
                    }
                },
                {
                    key: 'previousPageLink',
                    value: function (e) {
                        var t = e.isFirstPage,
                            n = e.currentPage,
                            r = e.createURL
                        return this.pageLink({
                            ariaLabel: 'Previous',
                            additionalClassName: this.props.cssClasses.previousPageItem,
                            isDisabled: 0 === this.props.nbHits || t,
                            label: this.props.templates.previous,
                            pageNumber: n - 1,
                            createURL: r
                        })
                    }
                },
                {
                    key: 'nextPageLink',
                    value: function (e) {
                        var t = e.isLastPage,
                            n = e.currentPage,
                            r = e.createURL
                        return this.pageLink({
                            ariaLabel: 'Next',
                            additionalClassName: this.props.cssClasses.nextPageItem,
                            isDisabled: 0 === this.props.nbHits || t,
                            label: this.props.templates.next,
                            pageNumber: n + 1,
                            createURL: r
                        })
                    }
                },
                {
                    key: 'firstPageLink',
                    value: function (e) {
                        var t = e.isFirstPage,
                            n = e.createURL
                        return this.pageLink({
                            ariaLabel: 'First',
                            additionalClassName: this.props.cssClasses.firstPageItem,
                            isDisabled: 0 === this.props.nbHits || t,
                            label: this.props.templates.first,
                            pageNumber: 0,
                            createURL: n
                        })
                    }
                },
                {
                    key: 'lastPageLink',
                    value: function (e) {
                        var t = e.isLastPage,
                            n = e.nbPages,
                            r = e.createURL
                        return this.pageLink({
                            ariaLabel: 'Last',
                            additionalClassName: this.props.cssClasses.lastPageItem,
                            isDisabled: 0 === this.props.nbHits || t,
                            label: this.props.templates.last,
                            pageNumber: n - 1,
                            createURL: r
                        })
                    }
                },
                {
                    key: 'pages',
                    value: function (e) {
                        var t = this,
                            n = e.currentPage,
                            r = e.pages,
                            i = e.createURL
                        return r.map(function (e) {
                            return t.pageLink({
                                ariaLabel: e + 1,
                                additionalClassName: t.props.cssClasses.pageItem,
                                isSelected: e === n,
                                label: e + 1,
                                pageNumber: e,
                                createURL: i
                            })
                        })
                    }
                },
                {
                    key: 'render',
                    value: function () {
                        return ln(
                            'div',
                            {
                                className: kr(
                                    this.props.cssClasses.root,
                                    C(
                                        {},
                                        this.props.cssClasses.noRefinementRoot,
                                        this.props.nbPages <= 1
                                    )
                                )
                            },
                            ln(
                                'ul',
                                { className: this.props.cssClasses.list },
                                this.props.showFirst && this.firstPageLink(this.props),
                                this.props.showPrevious && this.previousPageLink(this.props),
                                this.pages(this.props),
                                this.props.showNext && this.nextPageLink(this.props),
                                this.props.showLast && this.lastPageLink(this.props)
                            )
                        )
                    }
                }
            ]),
            a
        )
    })()
    Fi.defaultProps = { nbHits: 0, currentPage: 0, nbPages: 0 }
    var Ci = Ae({ name: 'pagination' }),
        Ii = et('Pagination'),
        Mi = { previous: '‹', next: '›', first: '«', last: '»' }
    var Li = (function () {
            function t(e) {
                var n
                return (
                    T(this, t),
                    C(y((n = A(this, E(t).call(this, e)))), 'onInput', function (t) {
                        return function (e) {
                            n.setState(C({}, t, Number(e.currentTarget.value)))
                        }
                    }),
                    C(y(n), 'onSubmit', function (e) {
                        e.preventDefault(), n.props.refine([n.state.min, n.state.max])
                    }),
                    (n.state = { min: e.values.min, max: e.values.max }),
                    n
                )
            }
            return (
                j(t, dn),
                k(t, [
                    {
                        key: 'componentWillReceiveProps',
                        value: function (e) {
                            this.setState({ min: e.values.min, max: e.values.max })
                        }
                    },
                    {
                        key: 'render',
                        value: function () {
                            var e = this.state,
                                t = e.min,
                                n = e.max,
                                r = this.props,
                                i = r.min,
                                a = r.max,
                                s = r.step,
                                o = r.cssClasses,
                                c = r.templateProps,
                                u = a <= i,
                                l = Boolean(t || n)
                            return ln(
                                'div',
                                { className: kr(o.root, C({}, o.noRefinement, !l)) },
                                ln(
                                    'form',
                                    { className: o.form, onSubmit: this.onSubmit },
                                    ln(
                                        'label',
                                        { className: o.label },
                                        ln('input', {
                                            className: kr(o.input, o.inputMin),
                                            type: 'number',
                                            min: i,
                                            max: a,
                                            step: s,
                                            value: t,
                                            onInput: this.onInput('min'),
                                            placeholder: i,
                                            disabled: u
                                        })
                                    ),
                                    ln(
                                        jr,
                                        f({}, c, {
                                            templateKey: 'separatorText',
                                            rootTagName: 'span',
                                            rootProps: { className: o.separator }
                                        })
                                    ),
                                    ln(
                                        'label',
                                        { className: o.label },
                                        ln('input', {
                                            className: kr(o.input, o.inputMax),
                                            type: 'number',
                                            min: i,
                                            max: a,
                                            step: s,
                                            value: n,
                                            onInput: this.onInput('max'),
                                            placeholder: a,
                                            disabled: u
                                        })
                                    ),
                                    ln(
                                        jr,
                                        f({}, c, {
                                            templateKey: 'submitText',
                                            rootTagName: 'button',
                                            rootProps: {
                                                type: 'submit',
                                                className: o.submit,
                                                disabled: u
                                            }
                                        })
                                    )
                                )
                            )
                        }
                    }
                ]),
                t
            )
        })(),
        Ti = Ae({ name: 'range-input' }),
        ki = et('RangeInput')
    var ji = {
            reset: '\n<svg className="{{cssClasses.resetIcon}}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="10" height="10">\n  <path d="M8.114 10L.944 2.83 0 1.885 1.886 0l.943.943L10 8.113l7.17-7.17.944-.943L20 1.886l-.943.943-7.17 7.17 7.17 7.17.943.944L18.114 20l-.943-.943-7.17-7.17-7.17 7.17-.944.943L0 18.114l.943-.943L8.113 10z"></path>\n</svg>\n  ',
            submit: '\n<svg className="{{cssClasses.submitIcon}}" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 40 40">\n  <path d="M26.804 29.01c-2.832 2.34-6.465 3.746-10.426 3.746C7.333 32.756 0 25.424 0 16.378 0 7.333 7.333 0 16.378 0c9.046 0 16.378 7.333 16.378 16.378 0 3.96-1.406 7.594-3.746 10.426l10.534 10.534c.607.607.61 1.59-.004 2.202-.61.61-1.597.61-2.202.004L26.804 29.01zm-10.426.627c7.323 0 13.26-5.936 13.26-13.26 0-7.32-5.937-13.257-13.26-13.257C9.056 3.12 3.12 9.056 3.12 16.378c0 7.323 5.936 13.26 13.258 13.26z"></path>\n</svg>\n  ',
            loadingIndicator:
                '\n<svg className="{{cssClasses.loadingIcon}}" width="16" height="16" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" stroke="#444">\n  <g fill="none" fillRule="evenodd">\n    <g transform="translate(1 1)" strokeWidth="2">\n      <circle strokeOpacity=".5" cx="18" cy="18" r="18" />\n      <path d="M36 18c0-9.94-8.06-18-18-18">\n        <animateTransform\n          attributeName="transform"\n          type="rotate"\n          from="0 18 18"\n          to="360 18 18"\n          dur="1s"\n          repeatCount="indefinite"\n        />\n      </path>\n    </g>\n  </g>\n</svg>\n  '
        },
        Ei = Ae({ name: 'search-box' }),
        Oi = et('SearchBox')
    var Ai = 40,
        Hi = 35,
        Di = 27,
        Bi = 36,
        Qi = 37,
        qi = 34,
        Ui = 33,
        Vi = 39,
        Wi = 38,
        $i = 100
    function zi(e, t, n) {
        return ((e - t) / (n - t)) * 100
    }
    function Ki(e, t, n) {
        var r = e / 100
        return 0 === e ? t : 100 === e ? n : Math.round((n - t) * r + t)
    }
    function Ji(e) {
        return [
            'rheostat',
            'vertical' === e.orientation ? 'rheostat-vertical' : 'rheostat-horizontal'
        ]
            .concat(e.className.split(' '))
            .join(' ')
    }
    function Yi(e) {
        return Number(e.currentTarget.getAttribute('data-handle-key'))
    }
    function Xi(e) {
        e.stopPropagation(), e.preventDefault()
    }
    var Gi = (function () {
            function e() {
                return T(this, e), A(this, E(e).apply(this, arguments))
            }
            return (
                j(e, dn),
                k(e, [
                    {
                        key: 'render',
                        value: function () {
                            return ln('button', f({}, this.props, { type: 'button' }))
                        }
                    }
                ]),
                e
            )
        })(),
        Zi = ln('div', { className: 'rheostat-background' }),
        ea = (function () {
            function n(e) {
                var t
                return (
                    T(this, n),
                    C(y((t = A(this, E(n).call(this, e)))), 'state', {
                        className: Ji(t.props),
                        handlePos: t.props.values.map(function (e) {
                            return zi(e, t.props.min, t.props.max)
                        }),
                        handleDimensions: 0,
                        mousePos: null,
                        sliderBox: {},
                        slidingIndex: null,
                        values: t.props.values
                    }),
                    (t.getPublicState = t.getPublicState.bind(y(t))),
                    (t.getSliderBoundingBox = t.getSliderBoundingBox.bind(y(t))),
                    (t.getProgressStyle = t.getProgressStyle.bind(y(t))),
                    (t.getMinValue = t.getMinValue.bind(y(t))),
                    (t.getMaxValue = t.getMaxValue.bind(y(t))),
                    (t.getHandleDimensions = t.getHandleDimensions.bind(y(t))),
                    (t.getClosestSnapPoint = t.getClosestSnapPoint.bind(y(t))),
                    (t.getSnapPosition = t.getSnapPosition.bind(y(t))),
                    (t.getNextPositionForKey = t.getNextPositionForKey.bind(y(t))),
                    (t.getNextState = t.getNextState.bind(y(t))),
                    (t.handleClick = t.handleClick.bind(y(t))),
                    (t.getClosestHandle = t.getClosestHandle.bind(y(t))),
                    (t.setStartSlide = t.setStartSlide.bind(y(t))),
                    (t.startMouseSlide = t.startMouseSlide.bind(y(t))),
                    (t.startTouchSlide = t.startTouchSlide.bind(y(t))),
                    (t.handleMouseSlide = t.handleMouseSlide.bind(y(t))),
                    (t.handleTouchSlide = t.handleTouchSlide.bind(y(t))),
                    (t.handleSlide = t.handleSlide.bind(y(t))),
                    (t.endSlide = t.endSlide.bind(y(t))),
                    (t.handleKeydown = t.handleKeydown.bind(y(t))),
                    (t.validatePosition = t.validatePosition.bind(y(t))),
                    (t.validateValues = t.validateValues.bind(y(t))),
                    (t.canMove = t.canMove.bind(y(t))),
                    (t.fireChangeEvent = t.fireChangeEvent.bind(y(t))),
                    (t.slideTo = t.slideTo.bind(y(t))),
                    (t.updateNewValues = t.updateNewValues.bind(y(t))),
                    t
                )
            }
            return (
                j(n, dn),
                k(n, [
                    {
                        key: 'componentWillReceiveProps',
                        value: function (n) {
                            var e = this.props,
                                t = e.className,
                                r = e.disabled,
                                i = e.min,
                                a = e.max,
                                s = e.orientation,
                                o = this.state,
                                c = o.values,
                                u = o.slidingIndex,
                                l = n.min !== i || n.max !== a,
                                h =
                                    c.length !== n.values.length ||
                                    c.some(function (e, t) {
                                        return n.values[t] !== e
                                    }),
                                f = n.className !== t || n.orientation !== s,
                                d = n.disabled && !r
                            f && this.setState({ className: Ji(n) }),
                                (l || h) && this.updateNewValues(n),
                                d && null !== u && this.endSlide()
                        }
                    },
                    {
                        key: 'getPublicState',
                        value: function () {
                            var e = this.props,
                                t = e.min
                            return { max: e.max, min: t, values: this.state.values }
                        }
                    },
                    {
                        key: 'getSliderBoundingBox',
                        value: function () {
                            var e = this.rheostat.getDOMNode
                                    ? this.rheostat.getDOMNode()
                                    : this.rheostat,
                                t = e.getBoundingClientRect()
                            return {
                                height: t.height || e.clientHeight,
                                left: t.left,
                                top: t.top,
                                width: t.width || e.clientWidth
                            }
                        }
                    },
                    {
                        key: 'getProgressStyle',
                        value: function (e) {
                            var t = this.state.handlePos,
                                n = t[e]
                            if (0 === e)
                                return 'vertical' === this.props.orientation
                                    ? { height: ''.concat(n, '%'), top: 0 }
                                    : { left: 0, width: ''.concat(n, '%') }
                            var r = t[e - 1],
                                i = n - r
                            return 'vertical' === this.props.orientation
                                ? { height: ''.concat(i, '%'), top: ''.concat(r, '%') }
                                : { left: ''.concat(r, '%'), width: ''.concat(i, '%') }
                        }
                    },
                    {
                        key: 'getMinValue',
                        value: function (e) {
                            return this.state.values[e - 1]
                                ? Math.max(this.props.min, this.state.values[e - 1])
                                : this.props.min
                        }
                    },
                    {
                        key: 'getMaxValue',
                        value: function (e) {
                            return this.state.values[e + 1]
                                ? Math.min(this.props.max, this.state.values[e + 1])
                                : this.props.max
                        }
                    },
                    {
                        key: 'getHandleDimensions',
                        value: function (e, t) {
                            var n = e.currentTarget || null
                            return n
                                ? 'vertical' === this.props.orientation
                                    ? ((n.clientHeight / t.height) * $i) / 2
                                    : ((n.clientWidth / t.width) * $i) / 2
                                : 0
                        }
                    },
                    {
                        key: 'getClosestSnapPoint',
                        value: function (n) {
                            return this.props.snapPoints.length
                                ? this.props.snapPoints.reduce(function (e, t) {
                                      return Math.abs(e - n) < Math.abs(t - n) ? e : t
                                  })
                                : n
                        }
                    },
                    {
                        key: 'getSnapPosition',
                        value: function (e) {
                            if (!this.props.snap) return e
                            var t = this.props,
                                n = t.max,
                                r = t.min,
                                i = Ki(e, r, n)
                            return zi(this.getClosestSnapPoint(i), r, n)
                        }
                    },
                    {
                        key: 'getNextPositionForKey',
                        value: function (e, t) {
                            var n,
                                r = this.state,
                                i = r.handlePos,
                                a = r.values,
                                s = this.props,
                                o = s.max,
                                c = s.min,
                                u = s.snapPoints,
                                l = this.props.snap,
                                h = a[e],
                                f = i[e],
                                d = f,
                                m = 1
                            100 <= o ? (f = Math.round(f)) : (m = 100 / (o - c))
                            var p = null
                            l && (p = u.indexOf(this.getClosestSnapPoint(a[e])))
                            var g =
                                (C((n = {}), Qi, function (e) {
                                    return -1 * e
                                }),
                                C(n, Vi, function (e) {
                                    return e
                                }),
                                C(n, Wi, function (e) {
                                    return e
                                }),
                                C(n, Ai, function (e) {
                                    return -1 * e
                                }),
                                C(n, qi, function (e) {
                                    return 1 < e ? -e : -10 * e
                                }),
                                C(n, Ui, function (e) {
                                    return 1 < e ? e : 10 * e
                                }),
                                n)
                            if (Object.prototype.hasOwnProperty.call(g, t))
                                (f += g[t](m)),
                                    l &&
                                        (d < f
                                            ? p < u.length - 1 && (h = u[p + 1])
                                            : 0 < p && (h = u[p - 1]))
                            else if (t === Bi) (f = 0), l && (h = u[0])
                            else {
                                if (t !== Hi) return null
                                ;(f = $i), l && (h = u[u.length - 1])
                            }
                            return l ? zi(h, c, o) : f
                        }
                    },
                    {
                        key: 'getNextState',
                        value: function (n, e) {
                            var t = this.state.handlePos,
                                r = this.props,
                                i = r.max,
                                a = r.min,
                                s = this.validatePosition(n, e),
                                o = t.map(function (e, t) {
                                    return t === n ? s : e
                                })
                            return {
                                handlePos: o,
                                values: o.map(function (e) {
                                    return Ki(e, a, i)
                                })
                            }
                        }
                    },
                    {
                        key: 'getClosestHandle',
                        value: function (r) {
                            var i = this.state.handlePos
                            return i.reduce(function (e, t, n) {
                                return Math.abs(i[n] - r) < Math.abs(i[e] - r) ? n : e
                            }, 0)
                        }
                    },
                    {
                        key: 'setStartSlide',
                        value: function (e, t, n) {
                            var r = this.getSliderBoundingBox()
                            this.setState({
                                handleDimensions: this.getHandleDimensions(e, r),
                                mousePos: { x: t, y: n },
                                sliderBox: r,
                                slidingIndex: Yi(e)
                            })
                        }
                    },
                    {
                        key: 'startMouseSlide',
                        value: function (e) {
                            this.setStartSlide(e, e.clientX, e.clientY),
                                'function' == typeof document.addEventListener
                                    ? (document.addEventListener(
                                          'mousemove',
                                          this.handleMouseSlide,
                                          !1
                                      ),
                                      document.addEventListener('mouseup', this.endSlide, !1))
                                    : (document.attachEvent('onmousemove', this.handleMouseSlide),
                                      document.attachEvent('onmouseup', this.endSlide)),
                                Xi(e)
                        }
                    },
                    {
                        key: 'startTouchSlide',
                        value: function (e) {
                            if (!(1 < e.changedTouches.length)) {
                                var t = e.changedTouches[0]
                                this.setStartSlide(e, t.clientX, t.clientY),
                                    document.addEventListener(
                                        'touchmove',
                                        this.handleTouchSlide,
                                        !1
                                    ),
                                    document.addEventListener('touchend', this.endSlide, !1),
                                    this.props.onSliderDragStart && this.props.onSliderDragStart(),
                                    Xi(e)
                            }
                        }
                    },
                    {
                        key: 'handleMouseSlide',
                        value: function (e) {
                            null !== this.state.slidingIndex &&
                                (this.handleSlide(e.clientX, e.clientY), Xi(e))
                        }
                    },
                    {
                        key: 'handleTouchSlide',
                        value: function (e) {
                            if (null !== this.state.slidingIndex)
                                if (1 < e.changedTouches.length) this.endSlide()
                                else {
                                    var t = e.changedTouches[0]
                                    this.handleSlide(t.clientX, t.clientY), Xi(e)
                                }
                        }
                    },
                    {
                        key: 'handleSlide',
                        value: function (e, t) {
                            var n = this.state,
                                r = n.slidingIndex,
                                i = n.sliderBox,
                                a =
                                    'vertical' === this.props.orientation
                                        ? ((t - i.top) / i.height) * $i
                                        : ((e - i.left) / i.width) * $i
                            this.slideTo(r, a),
                                this.canMove(r, a) &&
                                    (this.setState({ x: e, y: t }),
                                    this.props.onSliderDragMove && this.props.onSliderDragMove())
                        }
                    },
                    {
                        key: 'endSlide',
                        value: function () {
                            var e = this,
                                t = this.state.slidingIndex
                            if (
                                (this.setState({ slidingIndex: null }),
                                'function' == typeof document.removeEventListener
                                    ? (document.removeEventListener('mouseup', this.endSlide, !1),
                                      document.removeEventListener('touchend', this.endSlide, !1),
                                      document.removeEventListener(
                                          'touchmove',
                                          this.handleTouchSlide,
                                          !1
                                      ),
                                      document.removeEventListener(
                                          'mousemove',
                                          this.handleMouseSlide,
                                          !1
                                      ))
                                    : (document.detachEvent('onmousemove', this.handleMouseSlide),
                                      document.detachEvent('onmouseup', this.endSlide)),
                                this.props.onSliderDragEnd && this.props.onSliderDragEnd(),
                                this.props.snap)
                            ) {
                                var n = this.getSnapPosition(this.state.handlePos[t])
                                this.slideTo(t, n, function () {
                                    return e.fireChangeEvent()
                                })
                            } else this.fireChangeEvent()
                        }
                    },
                    {
                        key: 'handleClick',
                        value: function (e) {
                            var t = this
                            if (!e.target.getAttribute('data-handle-key')) {
                                var n = this.getSliderBoundingBox(),
                                    r =
                                        ('vertical' === this.props.orientation
                                            ? (e.clientY - n.top) / n.height
                                            : (e.clientX - n.left) / n.width) * $i,
                                    i = this.getClosestHandle(r),
                                    a = this.getSnapPosition(r)
                                this.slideTo(i, a, function () {
                                    return t.fireChangeEvent()
                                }),
                                    this.props.onClick && this.props.onClick()
                            }
                        }
                    },
                    {
                        key: 'handleKeydown',
                        value: function (e) {
                            var t = this,
                                n = Yi(e)
                            if (e.keyCode !== Di) {
                                var r = this.getNextPositionForKey(n, e.keyCode)
                                null !== r &&
                                    (this.canMove(n, r) &&
                                        (this.slideTo(n, r, function () {
                                            return t.fireChangeEvent()
                                        }),
                                        this.props.onKeyPress && this.props.onKeyPress()),
                                    Xi(e))
                            } else e.currentTarget.blur()
                        }
                    },
                    {
                        key: 'validatePosition',
                        value: function (e, t) {
                            var n = this.state,
                                r = n.handlePos,
                                i = n.handleDimensions
                            return Math.max(
                                Math.min(t, void 0 !== r[e + 1] ? r[e + 1] - i : $i),
                                void 0 !== r[e - 1] ? r[e - 1] + i : 0
                            )
                        }
                    },
                    {
                        key: 'validateValues',
                        value: function (e, t) {
                            var n = t || this.props,
                                i = n.max,
                                a = n.min
                            return e.map(function (e, t, n) {
                                var r = Math.max(Math.min(e, i), a)
                                return n.length && r < n[t - 1] ? n[t - 1] : r
                            })
                        }
                    },
                    {
                        key: 'canMove',
                        value: function (e, t) {
                            var n = this.state,
                                r = n.handlePos,
                                i = n.handleDimensions
                            return (
                                !(t < 0) &&
                                !($i < t) &&
                                !((void 0 !== r[e + 1] ? r[e + 1] - i : 1 / 0) < t) &&
                                !(t < (void 0 !== r[e - 1] ? r[e - 1] + i : -1 / 0))
                            )
                        }
                    },
                    {
                        key: 'fireChangeEvent',
                        value: function () {
                            var e = this.props.onChange
                            e && e(this.getPublicState())
                        }
                    },
                    {
                        key: 'slideTo',
                        value: function (e, t, n) {
                            var r = this,
                                i = this.getNextState(e, t)
                            this.setState(i, function () {
                                var e = r.props.onValuesUpdated
                                e && e(r.getPublicState()), n && n()
                            })
                        }
                    },
                    {
                        key: 'updateNewValues',
                        value: function (e) {
                            var t = this
                            if (null === this.state.slidingIndex) {
                                var n = e.max,
                                    r = e.min,
                                    i = e.values,
                                    a = this.validateValues(i, e)
                                this.setState(
                                    {
                                        handlePos: a.map(function (e) {
                                            return zi(e, r, n)
                                        }),
                                        values: a
                                    },
                                    function () {
                                        return t.fireChangeEvent()
                                    }
                                )
                            }
                        }
                    },
                    {
                        key: 'render',
                        value: function () {
                            var r = this,
                                e = this.props,
                                t = e.children,
                                i = e.disabled,
                                a = e.handle,
                                s = e.max,
                                o = e.min,
                                c = e.orientation,
                                u = e.pitComponent,
                                n = e.pitPoints,
                                l = e.progressBar,
                                h = this.state,
                                f = h.className,
                                d = h.handlePos,
                                m = h.values
                            return ln(
                                'div',
                                {
                                    className: f,
                                    ref: function (e) {
                                        r.rheostat = e
                                    },
                                    onClick: !i && this.handleClick,
                                    style: { position: 'relative' }
                                },
                                Zi,
                                d.map(function (e, t) {
                                    var n =
                                        'vertical' === c
                                            ? { top: ''.concat(e, '%'), position: 'absolute' }
                                            : { left: ''.concat(e, '%'), position: 'absolute' }
                                    return ln(a, {
                                        'aria-valuemax': r.getMaxValue(t),
                                        'aria-valuemin': r.getMinValue(t),
                                        'aria-valuenow': m[t],
                                        'aria-disabled': i,
                                        'data-handle-key': t,
                                        className: 'rheostat-handle',
                                        key: 'handle-'.concat(t),
                                        onClick: r.killEvent,
                                        onKeyDown: !i && r.handleKeydown,
                                        onMouseDown: !i && r.startMouseSlide,
                                        onTouchStart: !i && r.startTouchSlide,
                                        role: 'slider',
                                        style: n,
                                        tabIndex: 0
                                    })
                                }),
                                d.map(function (e, t, n) {
                                    return 0 === t && 1 < n.length
                                        ? null
                                        : ln(l, {
                                              className: 'rheostat-progress',
                                              key: 'progress-bar-'.concat(t),
                                              style: r.getProgressStyle(t)
                                          })
                                }),
                                u &&
                                    n.map(function (e) {
                                        var t = zi(e, o, s),
                                            n =
                                                'vertical' === c
                                                    ? {
                                                          top: ''.concat(t, '%'),
                                                          position: 'absolute'
                                                      }
                                                    : {
                                                          left: ''.concat(t, '%'),
                                                          position: 'absolute'
                                                      }
                                        return ln(u, { key: 'pit-'.concat(e), style: n }, e)
                                    }),
                                t
                            )
                        }
                    }
                ]),
                n
            )
        })()
    C(ea, 'defaultProps', {
        className: '',
        children: null,
        disabled: !1,
        handle: Gi,
        max: $i,
        min: 0,
        onClick: null,
        onChange: null,
        onKeyPress: null,
        onSliderDragEnd: null,
        onSliderDragMove: null,
        onSliderDragStart: null,
        onValuesUpdated: null,
        orientation: 'horizontal',
        pitComponent: null,
        pitPoints: [],
        progressBar: 'div',
        snap: !1,
        snapPoints: [],
        values: [0]
    })
    function ta(e) {
        var t = e.style,
            n = e.children,
            r = Math.round(parseFloat(t.left)),
            i = [0, 50, 100].includes(r),
            a = Array.isArray(n) ? n[0] : n,
            s = Math.round(100 * parseInt(a, 10)) / 100
        return ln(
            'div',
            {
                style: D({}, t, { marginLeft: 100 === r ? '-2px' : 0 }),
                className: kr('rheostat-marker', 'rheostat-marker-horizontal', {
                    'rheostat-marker-large': i
                })
            },
            i && ln('div', { className: 'rheostat-value' }, s)
        )
    }
    var na = (function () {
            function a() {
                var e, n
                T(this, a)
                for (var t = arguments.length, r = new Array(t), i = 0; i < t; i++)
                    r[i] = arguments[i]
                return (
                    C(
                        y((n = A(this, (e = E(a)).call.apply(e, [this].concat(r))))),
                        'handleChange',
                        function (e) {
                            var t = e.values
                            n.isDisabled || n.props.refine(t)
                        }
                    ),
                    C(y(n), 'createHandleComponent', function (r) {
                        return function (e) {
                            var t = Math.round(100 * parseFloat(e['aria-valuenow'])) / 100,
                                n = r && r.format ? r.format(t) : t
                            return ln(
                                'div',
                                f({}, e, {
                                    className: kr(e.className, {
                                        'rheostat-handle-lower': 0 === e['data-handle-key'],
                                        'rheostat-handle-upper': 1 === e['data-handle-key']
                                    })
                                }),
                                r && ln('div', { className: 'rheostat-tooltip' }, n)
                            )
                        }
                    }),
                    n
                )
            }
            return (
                j(a, dn),
                k(a, [
                    {
                        key: 'computeDefaultPitPoints',
                        value: function (e) {
                            var t = e.min,
                                n = e.max,
                                r = (n - t) / 34
                            return [t].concat(
                                w(
                                    Me({ end: 33 }).map(function (e) {
                                        return t + r * (e + 1)
                                    })
                                ),
                                [n]
                            )
                        }
                    },
                    {
                        key: 'computeSnapPoints',
                        value: function (e) {
                            var t = e.min,
                                n = e.max,
                                r = e.step
                            if (r) return [].concat(w(Me({ start: t, end: n, step: r })), [n])
                        }
                    },
                    {
                        key: 'render',
                        value: function () {
                            var e = this.props,
                                t = e.tooltips,
                                n = e.step,
                                r = e.pips,
                                i = e.values,
                                a = e.cssClasses,
                                s = this.isDisabled
                                    ? { min: this.props.min, max: this.props.max + 0.001 }
                                    : this.props,
                                o = s.min,
                                c = s.max,
                                u = this.computeSnapPoints({ min: o, max: c, step: n }),
                                l = !1 === r ? [] : this.computeDefaultPitPoints({ min: o, max: c })
                            return ln(
                                'div',
                                { className: kr(a.root, C({}, a.disabledRoot, this.isDisabled)) },
                                ln(ea, {
                                    handle: this.createHandleComponent(t),
                                    onChange: this.handleChange,
                                    min: o,
                                    max: c,
                                    pitComponent: ta,
                                    pitPoints: l,
                                    snap: !0,
                                    snapPoints: u,
                                    values: this.isDisabled ? [o, c] : i,
                                    disabled: this.isDisabled
                                })
                            )
                        }
                    },
                    {
                        key: 'isDisabled',
                        get: function () {
                            return this.props.min >= this.props.max
                        }
                    }
                ]),
                a
            )
        })(),
        ra = Ae({ name: 'range-slider' }),
        ia = et('RangeSlider')
    var aa = Ae({ name: 'sort-by' }),
        sa = et('SortBy')
    var oa = {
            item: '{{#count}}<a className="{{cssClasses.link}}" aria-label="{{value}} & up" href="{{href}}">{{/count}}{{^count}}<div className="{{cssClasses.link}}" aria-label="{{value}} & up" disabled>{{/count}}\n  {{#stars}}<svg className="{{cssClasses.starIcon}} {{#.}}{{cssClasses.fullStarIcon}}{{/.}}{{^.}}{{cssClasses.emptyStarIcon}}{{/.}}" aria-hidden="true" width="24" height="24">\n    {{#.}}<use xlink:href="#ais-RatingMenu-starSymbol"></use>{{/.}}{{^.}}<use xlink:href="#ais-RatingMenu-starEmptySymbol"></use>{{/.}}\n  </svg>{{/stars}}\n  <span className="{{cssClasses.label}}">& Up</span>\n  {{#count}}<span className="{{cssClasses.count}}">{{#helpers.formatNumber}}{{count}}{{/helpers.formatNumber}}</span>{{/count}}\n{{#count}}</a>{{/count}}{{^count}}</div>{{/count}}'
        },
        ca = Ae({ name: 'rating-menu' }),
        ua = et('RatingMenu'),
        la = ln('path', {
            d: 'M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z'
        }),
        ha = ln('path', {
            d: 'M12 6.76l1.379 4.246h4.465l-3.612 2.625 1.379 4.246-3.611-2.625-3.612 2.625 1.379-4.246-3.612-2.625h4.465l1.38-4.246zm0-6.472l-2.833 8.718h-9.167l7.416 5.389-2.833 8.718 7.417-5.388 7.416 5.388-2.833-8.718 7.417-5.389h-9.167l-2.833-8.718z'
        })
    function fa(e) {
        var t = e.nbHits,
            n = e.hitsPerPage,
            r = e.nbPages,
            i = e.page,
            a = e.processingTimeMS,
            s = e.query,
            o = e.templateProps,
            c = e.cssClasses
        return ln(
            'div',
            { className: c.root },
            ln(
                jr,
                f({}, o, {
                    templateKey: 'text',
                    rootTagName: 'span',
                    rootProps: { className: c.text },
                    data: {
                        hasManyResults: 1 < t,
                        hasNoResults: 0 === t,
                        hasOneResult: 1 === t,
                        hitsPerPage: n,
                        nbHits: t,
                        nbPages: r,
                        page: i,
                        processingTimeMS: a,
                        query: s,
                        cssClasses: c
                    }
                })
            )
        )
    }
    var da = {
            text: '{{#hasNoResults}}No results{{/hasNoResults}}\n    {{#hasOneResult}}1 result{{/hasOneResult}}\n    {{#hasManyResults}}{{#helpers.formatNumber}}{{nbHits}}{{/helpers.formatNumber}} results{{/hasManyResults}} found in {{processingTimeMS}}ms'
        },
        ma = Ae({ name: 'stats' }),
        pa = et('Stats')
    function ga(e) {
        var t = e.currentRefinement,
            n = e.refine,
            r = e.cssClasses,
            i = e.templateProps
        return ln(
            'div',
            { className: r.root },
            ln(
                'label',
                { className: r.label },
                ln('input', {
                    className: r.checkbox,
                    type: 'checkbox',
                    checked: t.isRefined,
                    onChange: function (e) {
                        return n(!e.target.checked)
                    }
                }),
                ln(
                    jr,
                    f({}, i, {
                        rootTagName: 'span',
                        rootProps: { className: r.labelText },
                        templateKey: 'labelText',
                        data: t
                    })
                )
            )
        )
    }
    var va = { labelText: '{{name}}' },
        ya = Ae({ name: 'toggle-refinement' }),
        ba = et('ToggleRefinement')
    var Ra = Ae({ name: 'analytics' })
    function wa(e) {
        var r = e.items,
            i = e.cssClasses,
            a = e.templateProps,
            s = e.createURL,
            o = e.refine
        return ln(
            'div',
            { className: kr(i.root, C({}, i.noRefinementRoot, 0 === r.length)) },
            ln(
                'ul',
                { className: i.list },
                ln(
                    'li',
                    { className: kr(i.item, C({}, i.selectedItem, 0 === r.length)) },
                    ln(
                        jr,
                        f({}, a, {
                            templateKey: 'home',
                            rootTagName: 'a',
                            rootProps: {
                                className: i.link,
                                href: s(void 0),
                                onClick: function (e) {
                                    e.preventDefault(), o(void 0)
                                }
                            }
                        })
                    )
                ),
                r.map(function (t, e) {
                    var n = e === r.length - 1
                    return ln(
                        'li',
                        { key: t.label + e, className: kr(i.item, C({}, i.selectedItem, n)) },
                        ln(
                            jr,
                            f({}, a, {
                                templateKey: 'separator',
                                rootTagName: 'span',
                                rootProps: { className: i.separator, 'aria-hidden': !0 }
                            })
                        ),
                        n
                            ? t.label
                            : ln(
                                  'a',
                                  {
                                      className: i.link,
                                      href: s(t.value),
                                      onClick: function (e) {
                                          e.preventDefault(), o(t.value)
                                      }
                                  },
                                  t.label
                              )
                    )
                })
            )
        )
    }
    var Sa = { home: 'Home', separator: '>' },
        Pa = Ae({ name: 'breadcrumb' }),
        _a = et('Breadcrumb')
    function xa(e) {
        var t = e.cssClasses,
            n = e.templateProps,
            r = e.items,
            i = e.refine,
            a = (
                be(r, function (e) {
                    return e.isRefined
                }) || { value: '' }
            ).value
        return ln(
            'div',
            { className: kr(t.root, C({}, t.noRefinementRoot, 0 === r.length)) },
            ln(
                'select',
                {
                    className: t.select,
                    value: a,
                    onChange: function (e) {
                        i(e.target.value)
                    }
                },
                ln(
                    jr,
                    f({}, n, {
                        templateKey: 'defaultOption',
                        rootTagName: 'option',
                        rootProps: { value: '', className: t.option }
                    })
                ),
                r.map(function (e) {
                    return ln(
                        jr,
                        f({}, n, {
                            templateKey: 'item',
                            rootTagName: 'option',
                            rootProps: { value: e.value, className: t.option },
                            key: e.value,
                            data: e
                        })
                    )
                })
            )
        )
    }
    var Na = {
            item: '{{label}} ({{#helpers.formatNumber}}{{count}}{{/helpers.formatNumber}})',
            defaultOption: 'See all'
        },
        Fa = Ae({ name: 'menu-select' }),
        Ca = et('MenuSelect')
    function Ia(e) {
        var t = e.url,
            n = e.theme,
            r = e.cssClasses
        return ln(
            'div',
            { className: r.root },
            ln(
                'a',
                {
                    href: t,
                    target: '_blank',
                    className: r.link,
                    'aria-label': 'Search by Algolia',
                    rel: 'noopener noreferrer'
                },
                ln(
                    'svg',
                    {
                        height: '1.2em',
                        className: r.logo,
                        viewBox: '0 0 168 24',
                        style: { width: 'auto' }
                    },
                    ln('path', {
                        fill: 'dark' === n ? '#FFF' : '#5D6494',
                        d: 'M6.97 6.68V8.3a4.47 4.47 0 0 0-2.42-.67 2.2 2.2 0 0 0-1.38.4c-.34.26-.5.6-.5 1.02 0 .43.16.77.49 1.03.33.25.83.53 1.51.83a7.04 7.04 0 0 1 1.9 1.08c.34.24.58.54.73.89.15.34.23.74.23 1.18 0 .95-.33 1.7-1 2.24a4 4 0 0 1-2.6.81 5.71 5.71 0 0 1-2.94-.68v-1.71c.84.63 1.81.94 2.92.94.58 0 1.05-.14 1.39-.4.34-.28.5-.65.5-1.13 0-.29-.1-.55-.3-.8a2.2 2.2 0 0 0-.65-.53 23.03 23.03 0 0 0-1.64-.78 13.67 13.67 0 0 1-1.11-.64c-.12-.1-.28-.22-.46-.4a1.72 1.72 0 0 1-.39-.5 4.46 4.46 0 0 1-.22-.6c-.07-.23-.1-.48-.1-.75 0-.91.33-1.63 1-2.17a4 4 0 0 1 2.57-.8c.97 0 1.8.18 2.47.52zm7.47 5.7v-.3a2.26 2.26 0 0 0-.5-1.44c-.3-.35-.74-.53-1.32-.53-.53 0-.99.2-1.37.58-.38.39-.62.95-.72 1.68h3.91zm1 2.79v1.4c-.6.34-1.38.51-2.36.51a4.02 4.02 0 0 1-3-1.13 4.04 4.04 0 0 1-1.11-2.97c0-1.3.34-2.32 1.02-3.06a3.38 3.38 0 0 1 2.6-1.1c1.03 0 1.85.32 2.46.96.6.64.9 1.57.9 2.78 0 .33-.03.68-.09 1.04h-5.31c.1.7.4 1.24.89 1.61.49.38 1.1.56 1.85.56.86 0 1.58-.2 2.15-.6zm6.61-1.78h-1.21c-.6 0-1.05.12-1.35.36-.3.23-.46.53-.46.89 0 .37.12.66.36.88.23.2.57.32 1.02.32.5 0 .9-.15 1.2-.43.3-.28.44-.65.44-1.1v-.92zm-4.07-2.55V9.33a4.96 4.96 0 0 1 2.5-.55c2.1 0 3.17 1.03 3.17 3.08V17H22.1v-.96c-.42.68-1.15 1.02-2.19 1.02-.76 0-1.38-.22-1.84-.66-.46-.44-.7-1-.7-1.68 0-.78.3-1.38.88-1.81.59-.43 1.4-.65 2.46-.65h1.34v-.46c0-.55-.13-.97-.4-1.25-.26-.29-.7-.43-1.32-.43-.86 0-1.65.24-2.35.72zm9.34-1.93v1.42c.39-1 1.1-1.5 2.12-1.5.15 0 .31.02.5.05v1.53c-.23-.1-.48-.14-.76-.14-.54 0-.99.24-1.34.71a2.8 2.8 0 0 0-.52 1.71V17h-1.57V8.91h1.57zm5 4.09a3 3 0 0 0 .76 2.01c.47.53 1.14.8 2 .8.64 0 1.24-.18 1.8-.53v1.4c-.53.32-1.2.48-2 .48a3.98 3.98 0 0 1-4.17-4.18c0-1.16.38-2.15 1.14-2.98a4 4 0 0 1 3.1-1.23c.7 0 1.34.15 1.92.44v1.44a3.24 3.24 0 0 0-1.77-.5A2.65 2.65 0 0 0 32.33 13zm7.92-7.28v4.58c.46-1 1.3-1.5 2.5-1.5.8 0 1.42.24 1.9.73.48.5.72 1.17.72 2.05V17H43.8v-5.1c0-.56-.14-.99-.43-1.29-.28-.3-.65-.45-1.1-.45-.54 0-1 .2-1.42.6-.4.4-.61 1.02-.61 1.85V17h-1.56V5.72h1.56zM55.2 15.74c.6 0 1.1-.25 1.5-.76.4-.5.6-1.16.6-1.95 0-.92-.2-1.62-.6-2.12-.4-.5-.92-.74-1.55-.74-.56 0-1.05.22-1.5.67-.44.45-.66 1.13-.66 2.06 0 .96.22 1.67.64 2.14.43.47.95.7 1.57.7zM53 5.72v4.42a2.74 2.74 0 0 1 2.43-1.34c1.03 0 1.86.38 2.51 1.15.65.76.97 1.78.97 3.05 0 1.13-.3 2.1-.92 2.9-.62.81-1.47 1.21-2.54 1.21s-1.9-.45-2.46-1.34V17h-1.58V5.72H53zm9.9 11.1l-3.22-7.9h1.74l1 2.62 1.26 3.42c.1-.32.48-1.46 1.15-3.42l.91-2.63h1.66l-2.92 7.87c-.78 2.07-1.96 3.1-3.56 3.1-.28 0-.53-.02-.73-.07v-1.34c.17.04.35.06.54.06 1.03 0 1.76-.57 2.17-1.7z'
                    }),
                    Ma,
                    La,
                    ln('path', {
                        fill: 'dark' === n ? '#FFF' : '#5468FF',
                        d: 'M120.92 18.8c-4.38.02-4.38-3.54-4.38-4.1V1.36l2.67-.42v13.25c0 .32 0 2.36 1.71 2.37v2.24zm-10.84-2.18c.82 0 1.43-.04 1.85-.12v-2.72a5.48 5.48 0 0 0-1.57-.2c-.3 0-.6.02-.9.07-.3.04-.57.12-.81.24-.24.11-.44.28-.58.49a.93.93 0 0 0-.22.65c0 .63.22 1 .61 1.23.4.24.94.36 1.62.36zm-.23-9.7c.88 0 1.62.11 2.23.33.6.22 1.09.53 1.44.92.36.4.61.92.76 1.48.16.56.23 1.17.23 1.85v6.87c-.4.1-1.03.2-1.86.32-.84.12-1.78.18-2.82.18-.69 0-1.32-.07-1.9-.2a4 4 0 0 1-1.46-.63c-.4-.3-.72-.67-.96-1.13a4.3 4.3 0 0 1-.34-1.8c0-.66.13-1.08.39-1.53.26-.45.6-.82 1.04-1.1.45-.3.95-.5 1.54-.62a8.8 8.8 0 0 1 3.79.05v-.44c0-.3-.04-.6-.11-.87a1.78 1.78 0 0 0-1.1-1.22c-.31-.12-.7-.2-1.15-.2a9.75 9.75 0 0 0-2.95.46l-.33-2.19c.34-.12.84-.23 1.48-.35.65-.12 1.34-.18 2.08-.18zm52.84 9.63c.82 0 1.43-.05 1.85-.13V13.7a5.42 5.42 0 0 0-1.57-.2c-.3 0-.6.02-.9.07-.3.04-.57.12-.81.24-.24.12-.44.28-.58.5a.93.93 0 0 0-.22.65c0 .63.22.99.61 1.23.4.24.94.36 1.62.36zm-.23-9.7c.88 0 1.63.11 2.23.33.6.22 1.1.53 1.45.92.35.39.6.92.76 1.48.15.56.23 1.18.23 1.85v6.88c-.41.08-1.03.19-1.87.31-.83.12-1.77.18-2.81.18-.7 0-1.33-.06-1.9-.2a4 4 0 0 1-1.47-.63c-.4-.3-.72-.67-.95-1.13a4.3 4.3 0 0 1-.34-1.8c0-.66.13-1.08.38-1.53.26-.45.61-.82 1.05-1.1.44-.3.95-.5 1.53-.62a8.8 8.8 0 0 1 3.8.05v-.43c0-.31-.04-.6-.12-.88-.07-.28-.2-.52-.38-.73a1.78 1.78 0 0 0-.73-.5c-.3-.1-.68-.2-1.14-.2a9.85 9.85 0 0 0-2.95.47l-.32-2.19a11.63 11.63 0 0 1 3.55-.53zm-8.03-1.27a1.62 1.62 0 0 0 0-3.24 1.62 1.62 0 1 0 0 3.24zm1.35 13.22h-2.7V7.27l2.7-.42V18.8zm-4.72 0c-4.38.02-4.38-3.54-4.38-4.1l-.01-13.34 2.67-.42v13.25c0 .32 0 2.36 1.72 2.37v2.24zm-8.7-5.9a4.7 4.7 0 0 0-.74-2.79 2.4 2.4 0 0 0-2.07-1 2.4 2.4 0 0 0-2.06 1 4.7 4.7 0 0 0-.74 2.8c0 1.16.25 1.94.74 2.62a2.4 2.4 0 0 0 2.07 1.02c.88 0 1.57-.34 2.07-1.02.49-.68.73-1.46.73-2.63zm2.74 0a6.46 6.46 0 0 1-1.52 4.23c-.49.53-1.07.94-1.76 1.22-.68.29-1.73.45-2.26.45-.53 0-1.58-.15-2.25-.45a5.1 5.1 0 0 1-2.88-3.13 7.3 7.3 0 0 1-.01-4.84 5.13 5.13 0 0 1 2.9-3.1 5.67 5.67 0 0 1 2.22-.42c.81 0 1.56.14 2.24.42.69.29 1.28.69 1.75 1.22.49.52.87 1.15 1.14 1.89a7 7 0 0 1 .43 2.5zm-20.14 0c0 1.11.25 2.36.74 2.88.5.52 1.13.78 1.91.78a4.07 4.07 0 0 0 2.12-.6V9.33c-.19-.04-.99-.2-1.76-.23a2.67 2.67 0 0 0-2.23 1 4.73 4.73 0 0 0-.78 2.8zm7.44 5.27c0 1.82-.46 3.16-1.4 4-.94.85-2.37 1.27-4.3 1.27-.7 0-2.17-.13-3.34-.4l.43-2.11c.98.2 2.27.26 2.95.26 1.08 0 1.84-.22 2.3-.66.46-.43.68-1.08.68-1.94v-.44a5.2 5.2 0 0 1-2.54.6 5.6 5.6 0 0 1-2.01-.36 4.2 4.2 0 0 1-2.58-2.71 9.88 9.88 0 0 1 .02-5.35 4.92 4.92 0 0 1 2.93-2.96 6.6 6.6 0 0 1 2.43-.46 19.64 19.64 0 0 1 4.43.66v10.6z'
                    })
                )
            )
        )
    }
    var Ma = ln('path', {
            fill: '#5468FF',
            d: 'M78.99.94h16.6a2.97 2.97 0 0 1 2.96 2.96v16.6a2.97 2.97 0 0 1-2.97 2.96h-16.6a2.97 2.97 0 0 1-2.96-2.96V3.9A2.96 2.96 0 0 1 79 .94'
        }),
        La = ln('path', {
            fill: '#FFF',
            d: 'M89.63 5.97v-.78a.98.98 0 0 0-.98-.97h-2.28a.98.98 0 0 0-.97.97V6c0 .09.08.15.17.13a7.13 7.13 0 0 1 3.9-.02c.08.02.16-.04.16-.13m-6.25 1L83 6.6a.98.98 0 0 0-1.38 0l-.46.46a.97.97 0 0 0 0 1.38l.38.39c.06.06.15.04.2-.02a7.49 7.49 0 0 1 1.63-1.62c.07-.04.08-.14.02-.2m4.16 2.45v3.34c0 .1.1.17.2.12l2.97-1.54c.06-.03.08-.12.05-.18a3.7 3.7 0 0 0-3.08-1.87c-.07 0-.14.06-.14.13m0 8.05a4.49 4.49 0 1 1 0-8.98 4.49 4.49 0 0 1 0 8.98m0-10.85a6.37 6.37 0 1 0 0 12.74 6.37 6.37 0 0 0 0-12.74'
        }),
        Ta = et('PoweredBy'),
        ka = Ae({ name: 'powered-by' })
    var ja,
        Ea,
        Oa = [],
        Aa = Zt.__r
    Zt.__r = function (e) {
        Aa && Aa(e), (ja = 0), (Ea = e.__c).__H && (Ea.__H.t = $a(Ea.__H.t))
    }
    var Ha = Zt.diffed
    Zt.diffed = function (e) {
        Ha && Ha(e)
        var t = e.__c
        if (t) {
            var n = t.__H
            n &&
                ((n.u =
                    (n.u.some(function (e) {
                        e.ref && (e.ref.current = e.createHandle())
                    }),
                    [])),
                (n.i = $a(n.i)))
        }
    }
    var Da = Zt.unmount
    function Ba(e) {
        Zt.__h && Zt.__h(Ea)
        var t = Ea.__H || (Ea.__H = { o: [], t: [], i: [], u: [] })
        return e >= t.o.length && t.o.push({}), t.o[e]
    }
    function Qa(e) {
        return (function (n, e, t) {
            var r = Ba(ja++)
            return (
                r.__c ||
                    ((r.__c = Ea),
                    (r.v = [
                        t ? t(e) : Ya(void 0, e),
                        function (e) {
                            var t = n(r.v[0], e)
                            r.v[0] !== t && ((r.v[0] = t), r.__c.setState({}))
                        }
                    ])),
                r.v
            )
        })(Ya, e)
    }
    function qa(e) {
        return (function (e, t) {
            var n = Ba(ja++)
            return Ja(n.m, t) ? ((n.m = t), (n.p = e), (n.v = e())) : n.v
        })(function () {
            return { current: e }
        }, [])
    }
    Zt.unmount = function (e) {
        Da && Da(e)
        var t = e.__c
        if (t) {
            var n = t.__H
            n &&
                n.o.forEach(function (e) {
                    return e.l && e.l()
                })
        }
    }
    var Ua = function () {}
    function Va() {
        Oa.some(function (e) {
            ;(e.s = !1), e.__P && (e.__H.t = $a(e.__H.t))
        }),
            (Oa = [])
    }
    if ('undefined' != typeof window) {
        var Wa = Zt.requestAnimationFrame
        Ua = function (e) {
            ;((!e.s && (e.s = !0) && 1 === Oa.push(e)) || Wa !== Zt.requestAnimationFrame) &&
                ((Wa = Zt.requestAnimationFrame),
                (
                    Zt.requestAnimationFrame ||
                    function (e) {
                        function t() {
                            clearTimeout(n), cancelAnimationFrame(r), setTimeout(e)
                        }
                        var n = setTimeout(t, 100),
                            r = requestAnimationFrame(t)
                    }
                )(Va))
        }
    }
    function $a(e) {
        return e.forEach(za), e.forEach(Ka), []
    }
    function za(e) {
        e.l && e.l()
    }
    function Ka(e) {
        var t = e.v()
        'function' == typeof t && (e.l = t)
    }
    function Ja(n, e) {
        return (
            !n ||
            e.some(function (e, t) {
                return e !== n[t]
            })
        )
    }
    function Ya(e, t) {
        return 'function' == typeof t ? t(e) : t
    }
    function Xa(e) {
        var t,
            n = B(Qa(e.isCollapsed), 2),
            r = n[0],
            i = n[1],
            a = B(Qa(!1), 2),
            s = a[0],
            o = a[1],
            c = qa(null)
        return (
            (function (e, t) {
                var n = Ba(ja++)
                Ja(n.m, t) && ((n.v = e), (n.m = t), Ea.__H.t.push(n), Ua(Ea))
            })(
                function () {
                    if (c.current)
                        return (
                            c.current.appendChild(e.bodyElement),
                            function () {
                                c.current.removeChild(e.bodyElement)
                            }
                        )
                },
                [c, e.bodyElement]
            ),
            s || e.isCollapsed === r || i(e.isCollapsed),
            ln(
                'div',
                {
                    className: kr(
                        e.cssClasses.root,
                        ((t = {}),
                        C(t, e.cssClasses.noRefinementRoot, e.hidden),
                        C(t, e.cssClasses.collapsibleRoot, e.collapsible),
                        C(t, e.cssClasses.collapsedRoot, r),
                        t)
                    ),
                    hidden: e.hidden
                },
                e.templates.header &&
                    ln(
                        'div',
                        { className: e.cssClasses.header },
                        ln(jr, {
                            templates: e.templates,
                            templateKey: 'header',
                            rootTagName: 'span',
                            data: e.data
                        }),
                        e.collapsible &&
                            ln(
                                'button',
                                {
                                    className: e.cssClasses.collapseButton,
                                    'aria-expanded': !r,
                                    onClick: function (e) {
                                        e.preventDefault(),
                                            o(!0),
                                            i(function (e) {
                                                return !e
                                            })
                                    }
                                },
                                ln(jr, {
                                    templates: e.templates,
                                    templateKey: 'collapseButtonText',
                                    rootTagName: 'span',
                                    data: { collapsed: r }
                                })
                            )
                    ),
                ln('div', { className: e.cssClasses.body, ref: c }),
                e.templates.footer &&
                    ln(jr, {
                        templates: e.templates,
                        templateKey: 'footer',
                        rootProps: { className: e.cssClasses.footer },
                        data: e.data
                    })
            )
        )
    }
    function Ga(e) {
        var t = e.cssClasses,
            n = e.isBrowserSupported,
            r = e.isListening,
            i = e.toggleListening,
            a = e.voiceListeningState,
            s = e.templates,
            o = a.status,
            c = a.transcript,
            u = a.isSpeechFinal,
            l = a.errorCode
        return ln(
            'div',
            { className: t.root },
            ln(jr, {
                templateKey: 'buttonText',
                rootTagName: 'button',
                rootProps: {
                    className: t.button,
                    type: 'button',
                    title: 'Search by voice'.concat(n ? '' : ' (not supported on this browser)'),
                    onClick: function (e) {
                        e.currentTarget.blur(), i()
                    },
                    disabled: !n
                },
                data: {
                    status: o,
                    errorCode: l,
                    isListening: r,
                    transcript: c,
                    isSpeechFinal: u,
                    isBrowserSupported: n
                },
                templates: s
            }),
            ln(jr, {
                templateKey: 'status',
                rootProps: { className: t.status },
                data: {
                    status: o,
                    errorCode: l,
                    isListening: r,
                    transcript: c,
                    isSpeechFinal: u,
                    isBrowserSupported: n
                },
                templates: s
            })
        )
    }
    function Za(e) {
        var t = e.isBrowserSupported,
            n = e.isListening,
            r = e.toggleListening,
            i = e.voiceListeningState,
            a = e.widgetParams,
            s = a.container,
            o = a.cssClasses,
            c = a.templates
        Cn(
            ln(Ga, {
                cssClasses: o,
                templates: c,
                isBrowserSupported: t,
                isListening: n,
                toggleListening: r,
                voiceListeningState: i
            }),
            s
        )
    }
    function es(e) {
        var t = e.cssClasses,
            n = e.templates,
            r = e.items
        return ln(jr, {
            templateKey: 'default',
            templates: n,
            rootProps: { className: t.root },
            data: { items: r }
        })
    }
    function ts(e) {
        var t = e.items,
            n = e.widgetParams,
            r = n.container,
            i = n.cssClasses,
            a = n.templates
        Cn(ln(es, { cssClasses: i, templates: a, items: t }), r)
    }
    var ns = Ae({ name: 'panel' }),
        rs = et('Panel'),
        is = {
            buttonText: function (e) {
                var t = e.status,
                    n = e.errorCode,
                    r = e.isListening
                return '<svg\n       xmlns="http://www.w3.org/2000/svg"\n       width="16"\n       height="16"\n       viewBox="0 0 24 24"\n       fill="none"\n       stroke="currentColor"\n       stroke-width="2"\n       stroke-linecap="round"\n       stroke-linejoin="round"\n     >\n       '.concat(
                    (function (e, t, n) {
                        return 'error' === e && 'not-allowed' === t
                            ? '<line x1="1" y1="1" x2="23" y2="23"></line>\n            <path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"></path>\n            <path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"></path>\n            <line x1="12" y1="19" x2="12" y2="23"></line>\n            <line x1="8" y1="23" x2="16" y2="23"></line>'
                            : '<path\n            d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"\n            fill="'.concat(
                                  n ? 'currentColor' : 'none',
                                  '">\n          </path>\n          <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>\n          <line x1="12" y1="19" x2="12" y2="23"></line>\n          <line x1="8" y1="23" x2="16" y2="23"></line>'
                              )
                    })(t, n, r),
                    '\n     </svg>'
                )
            },
            status: '<p>{{transcript}}</p>'
        },
        as = Ae({ name: 'voice-search' }),
        ss = et('VoiceSearch'),
        os = Ae({ name: 'query-rule-custom-data' }),
        cs = et('QueryRuleCustomData'),
        us = Ae({ name: 'query-rule-context' }),
        ls = Object.freeze({
            __proto__: null,
            clearRefinements: function (e) {
                var t = e.container,
                    n = e.templates,
                    r = void 0 === n ? Or : n,
                    i = e.includedAttributes,
                    a = e.excludedAttributes,
                    s = e.transformItems,
                    o = e.cssClasses,
                    c = void 0 === o ? {} : o
                if (!t) throw new Error(Ar('The `container` option is required.'))
                var u = ue(t),
                    l = {
                        root: kr(Hr(), c.root),
                        button: kr(Hr({ descendantName: 'button' }), c.button),
                        disabledButton: kr(
                            Hr({ descendantName: 'button', modifierName: 'disabled' }),
                            c.disabledButton
                        )
                    }
                return Dt(
                    (function (e) {
                        var a = e.containerNode,
                            s = e.cssClasses,
                            o = e.renderState,
                            c = e.templates
                        return function (e, t) {
                            var n = e.refine,
                                r = e.hasRefinements,
                                i = e.instantSearchInstance
                            t
                                ? (o.templateProps = fe({
                                      defaultTemplates: Or,
                                      templatesConfig: i.templatesConfig,
                                      templates: c
                                  }))
                                : Cn(
                                      ln(Er, {
                                          refine: n,
                                          cssClasses: s,
                                          hasRefinements: r,
                                          templateProps: o.templateProps
                                      }),
                                      a
                                  )
                        }
                    })({ containerNode: u, cssClasses: l, renderState: {}, templates: r }),
                    function () {
                        return Cn(null, u)
                    }
                )({ includedAttributes: i, excludedAttributes: a, transformItems: s })
            },
            configure: function (e) {
                return mr()({ searchParameters: e })
            },
            EXPERIMENTAL_configureRelatedItems: function (e) {
                return vr()(e)
            },
            currentRefinements: function (e) {
                var t = e.container,
                    n = e.includedAttributes,
                    r = e.excludedAttributes,
                    i = e.cssClasses,
                    a = void 0 === i ? {} : i,
                    s = e.transformItems
                if (!t) throw new Error(qr('The `container` option is required.'))
                var o = ue(t),
                    c = {
                        root: kr(Ur(), a.root),
                        list: kr(Ur({ descendantName: 'list' }), a.list),
                        item: kr(Ur({ descendantName: 'item' }), a.item),
                        label: kr(Ur({ descendantName: 'label' }), a.label),
                        category: kr(Ur({ descendantName: 'category' }), a.category),
                        categoryLabel: kr(Ur({ descendantName: 'categoryLabel' }), a.categoryLabel),
                        delete: kr(Ur({ descendantName: 'delete' }), a.delete)
                    }
                return Bt(Br, function () {
                    return Cn(null, o)
                })({
                    container: o,
                    cssClasses: c,
                    includedAttributes: n,
                    excludedAttributes: r,
                    transformItems: s
                })
            },
            geoSearch: function (e) {
                var t = 0 < arguments.length && void 0 !== e ? e : {},
                    n = t.initialZoom,
                    r = void 0 === n ? 1 : n,
                    i = t.initialPosition,
                    a = void 0 === i ? { lat: 0, lng: 0 } : i,
                    s = t.templates,
                    o = void 0 === s ? {} : s,
                    c = t.cssClasses,
                    u = void 0 === c ? {} : c,
                    l = t.builtInMarker,
                    h = void 0 === l ? {} : l,
                    f = t.customHTMLMarker,
                    d = t.enableRefine,
                    m = void 0 === d || d,
                    p = t.enableClearMapRefinement,
                    g = void 0 === p || p,
                    v = t.enableRefineControl,
                    y = void 0 === v || v,
                    b = t.container,
                    R = t.googleReference,
                    w = O(t, [
                        'initialZoom',
                        'initialPosition',
                        'templates',
                        'cssClasses',
                        'builtInMarker',
                        'customHTMLMarker',
                        'enableRefine',
                        'enableClearMapRefinement',
                        'enableRefineControl',
                        'container',
                        'googleReference'
                    ]),
                    S = { createOptions: Fe, events: {} },
                    P = { createOptions: Fe, events: {} }
                if (!b) throw new Error(Yr('The `container` option is required.'))
                if (!R) throw new Error(Yr('The `googleReference` option is required.'))
                var _ = ue(b),
                    x = {
                        root: kr(Xr(), u.root),
                        tree: Xr({ descendantName: 'tree' }),
                        map: kr(Xr({ descendantName: 'map' }), u.map),
                        control: kr(Xr({ descendantName: 'control' }), u.control),
                        label: kr(Xr({ descendantName: 'label' }), u.label),
                        selectedLabel: kr(
                            Xr({ descendantName: 'label', modifierName: 'selected' }),
                            u.selectedLabel
                        ),
                        input: kr(Xr({ descendantName: 'input' }), u.input),
                        redo: kr(Xr({ descendantName: 'redo' }), u.redo),
                        disabledRedo: kr(
                            Xr({ descendantName: 'redo', modifierName: 'disabled' }),
                            u.disabledRedo
                        ),
                        reset: kr(Xr({ descendantName: 'reset' }), u.reset)
                    },
                    N = D({}, Jr, {}, o),
                    F = D({}, S, {}, h),
                    C = (Boolean(f) || Boolean(o.HTMLMarker)) && D({}, P, {}, f),
                    I = (function (l) {
                        return (function () {
                            function u(e) {
                                var t,
                                    n = e.__id,
                                    r = e.position,
                                    i = e.map,
                                    a = e.template,
                                    s = e.className,
                                    o = e.anchor,
                                    c = void 0 === o ? { x: 0, y: 0 } : o
                                return (
                                    T(this, u),
                                    ((t = A(this, E(u).call(this))).__id = n),
                                    (t.anchor = c),
                                    (t.listeners = {}),
                                    (t.latLng = new l.maps.LatLng(r)),
                                    (t.element = document.createElement('div')),
                                    (t.element.className = s),
                                    (t.element.style.position = 'absolute'),
                                    (t.element.innerHTML = a),
                                    t.setMap(i),
                                    t
                                )
                            }
                            return (
                                j(u, l.maps.OverlayView),
                                k(u, [
                                    {
                                        key: 'onAdd',
                                        value: function () {
                                            this.getPanes().overlayMouseTarget.appendChild(
                                                this.element
                                            )
                                            var e = this.element.getBoundingClientRect()
                                            ;(this.offset = {
                                                x: this.anchor.x + e.width / 2,
                                                y: this.anchor.y + e.height
                                            }),
                                                (this.element.style.width = ''.concat(
                                                    e.width,
                                                    'px'
                                                ))
                                        }
                                    },
                                    {
                                        key: 'draw',
                                        value: function () {
                                            var e = this.getProjection().fromLatLngToDivPixel(
                                                this.latLng
                                            )
                                            ;(this.element.style.left = ''.concat(
                                                Math.round(e.x - this.offset.x),
                                                'px'
                                            )),
                                                (this.element.style.top = ''.concat(
                                                    Math.round(e.y - this.offset.y),
                                                    'px'
                                                )),
                                                (this.element.style.zIndex = parseInt(
                                                    this.element.style.top,
                                                    10
                                                ))
                                        }
                                    },
                                    {
                                        key: 'onRemove',
                                        value: function () {
                                            var t = this
                                            this.element &&
                                                (this.element.parentNode.removeChild(this.element),
                                                Object.keys(this.listeners).forEach(function (e) {
                                                    t.element.removeEventListener(e, t.listeners[e])
                                                }),
                                                delete this.element,
                                                delete this.listeners)
                                        }
                                    },
                                    {
                                        key: 'addListener',
                                        value: function (e, t) {
                                            ;(this.listeners[e] = t),
                                                this.element.addEventListener(e, t)
                                        }
                                    },
                                    {
                                        key: 'getPosition',
                                        value: function () {
                                            return this.latLng
                                        }
                                    }
                                ]),
                                u
                            )
                        })()
                    })(R),
                    M = C
                        ? function (e) {
                              var t = e.item,
                                  n = O(e, ['item'])
                              return new I(
                                  D({}, C.createOptions(t), {}, n, {
                                      __id: t.objectID,
                                      position: t._geoloc,
                                      className: kr(Xr({ descendantName: 'marker' })),
                                      template: ye({
                                          templateKey: 'HTMLMarker',
                                          templates: N,
                                          data: t
                                      })
                                  })
                              )
                          }
                        : function (e) {
                              var t = e.item,
                                  n = O(e, ['item'])
                              return new R.maps.Marker(
                                  D({}, F.createOptions(t), {}, n, {
                                      __id: t.objectID,
                                      position: t._geoloc
                                  })
                              )
                          },
                    L = C || F
                return cr(Kr, function () {
                    return Cn(null, _)
                })(
                    D({}, w, {
                        renderState: {},
                        container: _,
                        googleReference: R,
                        initialZoom: r,
                        initialPosition: a,
                        templates: N,
                        cssClasses: x,
                        createMarker: M,
                        markerOptions: L,
                        enableRefine: m,
                        enableClearMapRefinement: g,
                        enableRefineControl: y
                    })
                )
            },
            hierarchicalMenu: function () {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                    t = e.container,
                    n = e.attributes,
                    r = e.separator,
                    i = e.rootPath,
                    a = e.showParentLevel,
                    s = e.limit,
                    o = e.showMore,
                    c = void 0 !== o && o,
                    u = e.showMoreLimit,
                    l = e.sortBy,
                    h = e.transformItems,
                    f = e.templates,
                    d = void 0 === f ? ti : f,
                    m = e.cssClasses,
                    p = void 0 === m ? {} : m
                if (!t) throw new Error(ni('The `container` option is required.'))
                var g = ue(t)
                return zt(
                    (function (e) {
                        var u = e.cssClasses,
                            l = e.containerNode,
                            h = e.showMore,
                            f = e.templates,
                            d = e.renderState
                        return function (e, t) {
                            var n = e.createURL,
                                r = e.items,
                                i = e.refine,
                                a = e.instantSearchInstance,
                                s = e.isShowingMore,
                                o = e.toggleShowMore,
                                c = e.canToggleShowMore
                            t
                                ? (d.templateProps = fe({
                                      defaultTemplates: ti,
                                      templatesConfig: a.templatesConfig,
                                      templates: f
                                  }))
                                : Cn(
                                      ln(ei, {
                                          createURL: n,
                                          cssClasses: u,
                                          facetValues: r,
                                          templateProps: d.templateProps,
                                          toggleRefinement: i,
                                          showMore: h,
                                          toggleShowMore: o,
                                          isShowingMore: s,
                                          canToggleShowMore: c
                                      }),
                                      l
                                  )
                        }
                    })({
                        cssClasses: {
                            root: kr(ri(), p.root),
                            noRefinementRoot: kr(
                                ri({ modifierName: 'noRefinement' }),
                                p.noRefinementRoot
                            ),
                            list: kr(ri({ descendantName: 'list' }), p.list),
                            childList: kr(
                                ri({ descendantName: 'list', modifierName: 'child' }),
                                p.childList
                            ),
                            item: kr(ri({ descendantName: 'item' }), p.item),
                            selectedItem: kr(
                                ri({ descendantName: 'item', modifierName: 'selected' }),
                                p.selectedItem
                            ),
                            parentItem: kr(
                                ri({ descendantName: 'item', modifierName: 'parent' }),
                                p.parentItem
                            ),
                            link: kr(ri({ descendantName: 'link' }), p.link),
                            label: kr(ri({ descendantName: 'label' }), p.label),
                            count: kr(ri({ descendantName: 'count' }), p.count),
                            showMore: kr(ri({ descendantName: 'showMore' }), p.showMore),
                            disabledShowMore: kr(
                                ri({ descendantName: 'showMore', modifierName: 'disabled' }),
                                p.disabledShowMore
                            )
                        },
                        containerNode: g,
                        templates: d,
                        showMore: c,
                        renderState: {}
                    }),
                    function () {
                        return Cn(null, g)
                    }
                )({
                    attributes: n,
                    separator: r,
                    rootPath: i,
                    showParentLevel: a,
                    limit: s,
                    showMore: c,
                    showMoreLimit: u,
                    sortBy: l,
                    transformItems: h
                })
            },
            hits: function (e) {
                var t = e.container,
                    n = e.escapeHTML,
                    r = e.transformItems,
                    i = e.templates,
                    a = void 0 === i ? ai : i,
                    s = e.cssClasses,
                    o = void 0 === s ? {} : s
                if (!t) throw new Error(si('The `container` option is required.'))
                var c = ue(t),
                    u = {
                        root: kr(oi(), o.root),
                        emptyRoot: kr(oi({ modifierName: 'empty' }), o.emptyRoot),
                        list: kr(oi({ descendantName: 'list' }), o.list),
                        item: kr(oi({ descendantName: 'item' }), o.item)
                    },
                    l = (function (e) {
                        var s = e.renderState,
                            o = e.cssClasses,
                            c = e.containerNode,
                            u = e.templates
                        return function (e, t) {
                            var n = e.hits,
                                r = e.results,
                                i = e.instantSearchInstance,
                                a = e.insights
                            t
                                ? (s.templateProps = fe({
                                      defaultTemplates: ai,
                                      templatesConfig: i.templatesConfig,
                                      templates: u
                                  }))
                                : Cn(
                                      ln(ci, {
                                          cssClasses: o,
                                          hits: n,
                                          results: r,
                                          templateProps: s.templateProps,
                                          insights: a
                                      }),
                                      c
                                  )
                        }
                    })({ containerNode: c, cssClasses: u, renderState: {}, templates: a })
                return Gt(Jt)(l, function () {
                    return Cn(null, c)
                })({ escapeHTML: n, transformItems: r })
            },
            hitsPerPage: function () {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                    t = e.container,
                    n = e.items,
                    r = e.cssClasses,
                    i = void 0 === r ? {} : r,
                    a = e.transformItems
                if (!t) throw new Error(li('The `container` option is required.'))
                var s = ue(t),
                    o = {
                        root: kr(hi(), i.root),
                        select: kr(hi({ descendantName: 'select' }), i.select),
                        option: kr(hi({ descendantName: 'option' }), i.option)
                    }
                return Tn(
                    (function (e) {
                        var a = e.containerNode,
                            s = e.cssClasses
                        return function (e, t) {
                            var n = e.items,
                                r = e.refine
                            if (!t) {
                                var i = (
                                    be(n, function (e) {
                                        return e.isRefined
                                    }) || {}
                                ).value
                                Cn(
                                    ln(
                                        'div',
                                        { className: s.root },
                                        ln(ui, {
                                            cssClasses: s,
                                            currentValue: i,
                                            options: n,
                                            setValue: r
                                        })
                                    ),
                                    a
                                )
                            }
                        }
                    })({ containerNode: s, cssClasses: o }),
                    function () {
                        return Cn(null, s)
                    }
                )({ items: n, transformItems: a })
            },
            infiniteHits: function (e) {
                var t = 0 < arguments.length && void 0 !== e ? e : {},
                    n = t.container,
                    r = t.escapeHTML,
                    i = t.transformItems,
                    a = t.templates,
                    s = void 0 === a ? fi : a,
                    o = t.cssClasses,
                    c = void 0 === o ? {} : o,
                    u = t.showPrevious
                if (!n) throw new Error(di('The `container` option is required.'))
                var l = ue(n),
                    h = {
                        root: kr(mi(), c.root),
                        emptyRoot: kr(mi({ modifierName: 'empty' }), c.emptyRoot),
                        item: kr(mi({ descendantName: 'item' }), c.item),
                        list: kr(mi({ descendantName: 'list' }), c.list),
                        loadPrevious: kr(mi({ descendantName: 'loadPrevious' }), c.loadPrevious),
                        disabledLoadPrevious: kr(
                            mi({ descendantName: 'loadPrevious', modifierName: 'disabled' }),
                            c.disabledLoadPrevious
                        ),
                        loadMore: kr(mi({ descendantName: 'loadMore' }), c.loadMore),
                        disabledLoadMore: kr(
                            mi({ descendantName: 'loadMore', modifierName: 'disabled' }),
                            c.disabledLoadMore
                        )
                    },
                    f = (function (e) {
                        var l = e.cssClasses,
                            h = e.containerNode,
                            f = e.renderState,
                            d = e.templates,
                            m = e.showPrevious
                        return function (e, t) {
                            var n = e.hits,
                                r = e.results,
                                i = e.showMore,
                                a = e.showPrevious,
                                s = e.isFirstPage,
                                o = e.isLastPage,
                                c = e.instantSearchInstance,
                                u = e.insights
                            t
                                ? (f.templateProps = fe({
                                      defaultTemplates: fi,
                                      templatesConfig: c.templatesConfig,
                                      templates: d
                                  }))
                                : Cn(
                                      ln(pi, {
                                          cssClasses: l,
                                          hits: n,
                                          results: r,
                                          hasShowPrevious: m,
                                          showPrevious: a,
                                          showMore: i,
                                          templateProps: f.templateProps,
                                          isFirstPage: s,
                                          isLastPage: o,
                                          insights: u
                                      }),
                                      h
                                  )
                        }
                    })({
                        containerNode: l,
                        cssClasses: h,
                        templates: s,
                        showPrevious: u,
                        renderState: {}
                    })
                return Gt(kn)(f, function () {
                    return Cn(null, l)
                })({ escapeHTML: r, transformItems: i, showPrevious: u })
            },
            menu: function (e) {
                var t = e.container,
                    n = e.attribute,
                    r = e.sortBy,
                    i = e.limit,
                    a = e.showMore,
                    s = e.showMoreLimit,
                    o = e.cssClasses,
                    c = void 0 === o ? {} : o,
                    u = e.templates,
                    l = void 0 === u ? gi : u,
                    h = e.transformItems
                if (!t) throw new Error(vi('The `container` option is required.'))
                var f = ue(t),
                    d = {
                        root: kr(yi(), c.root),
                        noRefinementRoot: kr(
                            yi({ modifierName: 'noRefinement' }),
                            c.noRefinementRoot
                        ),
                        list: kr(yi({ descendantName: 'list' }), c.list),
                        item: kr(yi({ descendantName: 'item' }), c.item),
                        selectedItem: kr(
                            yi({ descendantName: 'item', modifierName: 'selected' }),
                            c.selectedItem
                        ),
                        link: kr(yi({ descendantName: 'link' }), c.link),
                        label: kr(yi({ descendantName: 'label' }), c.label),
                        count: kr(yi({ descendantName: 'count' }), c.count),
                        showMore: kr(yi({ descendantName: 'showMore' }), c.showMore),
                        disabledShowMore: kr(
                            yi({ descendantName: 'showMore', modifierName: 'disabled' }),
                            c.disabledShowMore
                        )
                    }
                return An(
                    (function (e) {
                        var l = e.containerNode,
                            h = e.cssClasses,
                            f = e.renderState,
                            d = e.templates,
                            m = e.showMore
                        return function (e, t) {
                            var n = e.refine,
                                r = e.items,
                                i = e.createURL,
                                a = e.instantSearchInstance,
                                s = e.isShowingMore,
                                o = e.toggleShowMore,
                                c = e.canToggleShowMore
                            if (t)
                                f.templateProps = fe({
                                    defaultTemplates: gi,
                                    templatesConfig: a.templatesConfig,
                                    templates: d
                                })
                            else {
                                var u = r.map(function (e) {
                                    return D({}, e, { url: i(e.name) })
                                })
                                Cn(
                                    ln(ei, {
                                        createURL: i,
                                        cssClasses: h,
                                        facetValues: u,
                                        showMore: m,
                                        templateProps: f.templateProps,
                                        toggleRefinement: n,
                                        toggleShowMore: o,
                                        isShowingMore: s,
                                        canToggleShowMore: c
                                    }),
                                    l
                                )
                            }
                        }
                    })({
                        containerNode: f,
                        cssClasses: d,
                        renderState: {},
                        templates: l,
                        showMore: a
                    }),
                    function () {
                        return Cn(null, f)
                    }
                )({
                    attribute: n,
                    limit: i,
                    showMore: a,
                    showMoreLimit: s,
                    sortBy: r,
                    transformItems: h
                })
            },
            refinementList: function () {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                    t = e.container,
                    n = e.attribute,
                    r = e.operator,
                    i = e.sortBy,
                    a = e.limit,
                    s = e.showMore,
                    o = e.showMoreLimit,
                    c = e.searchable,
                    u = void 0 !== c && c,
                    l = e.searchablePlaceholder,
                    h = void 0 === l ? 'Search...' : l,
                    f = e.searchableEscapeFacetValues,
                    d = void 0 === f || f,
                    m = e.searchableIsAlwaysActive,
                    p = void 0 === m || m,
                    g = e.cssClasses,
                    v = void 0 === g ? {} : g,
                    y = e.templates,
                    b = void 0 === y ? bi : y,
                    R = e.transformItems
                if (!t) throw new Error(Ri('The `container` option is required.'))
                var w = !!u && Boolean(d),
                    S = ue(t),
                    P = (function (e) {
                        var t = D({}, e, {
                            submit: e.searchableSubmit,
                            reset: e.searchableReset,
                            loadingIndicator: e.searchableLoadingIndicator
                        })
                        return (
                            t.searchableReset,
                            t.searchableSubmit,
                            t.searchableLoadingIndicator,
                            O(t, [
                                'searchableReset',
                                'searchableSubmit',
                                'searchableLoadingIndicator'
                            ])
                        )
                    })(D({}, bi, {}, b)),
                    _ = {
                        root: kr(wi(), v.root),
                        noRefinementRoot: kr(
                            wi({ modifierName: 'noRefinement' }),
                            v.noRefinementRoot
                        ),
                        list: kr(wi({ descendantName: 'list' }), v.list),
                        item: kr(wi({ descendantName: 'item' }), v.item),
                        selectedItem: kr(
                            wi({ descendantName: 'item', modifierName: 'selected' }),
                            v.selectedItem
                        ),
                        searchBox: kr(wi({ descendantName: 'searchBox' }), v.searchBox),
                        label: kr(wi({ descendantName: 'label' }), v.label),
                        checkbox: kr(wi({ descendantName: 'checkbox' }), v.checkbox),
                        labelText: kr(wi({ descendantName: 'labelText' }), v.labelText),
                        count: kr(wi({ descendantName: 'count' }), v.count),
                        noResults: kr(wi({ descendantName: 'noResults' }), v.noResults),
                        showMore: kr(wi({ descendantName: 'showMore' }), v.showMore),
                        disabledShowMore: kr(
                            wi({ descendantName: 'showMore', modifierName: 'disabled' }),
                            v.disabledShowMore
                        ),
                        searchable: {
                            root: kr(Si(), v.searchableRoot),
                            form: kr(Si({ descendantName: 'form' }), v.searchableForm),
                            input: kr(Si({ descendantName: 'input' }), v.searchableInput),
                            submit: kr(Si({ descendantName: 'submit' }), v.searchableSubmit),
                            submitIcon: kr(
                                Si({ descendantName: 'submitIcon' }),
                                v.searchableSubmitIcon
                            ),
                            reset: kr(Si({ descendantName: 'reset' }), v.searchableReset),
                            resetIcon: kr(
                                Si({ descendantName: 'resetIcon' }),
                                v.searchableResetIcon
                            ),
                            loadingIndicator: kr(
                                Si({ descendantName: 'loadingIndicator' }),
                                v.searchableLoadingIndicator
                            ),
                            loadingIcon: kr(
                                Si({ descendantName: 'loadingIcon' }),
                                v.searchableLoadingIcon
                            )
                        }
                    }
                return Jn(
                    (function (e) {
                        var f = e.containerNode,
                            d = e.cssClasses,
                            m = e.templates,
                            p = e.renderState,
                            g = e.showMore,
                            v = e.searchable,
                            y = e.searchablePlaceholder,
                            b = e.searchableIsAlwaysActive
                        return function (e, t) {
                            var n = e.refine,
                                r = e.items,
                                i = e.createURL,
                                a = e.searchForItems,
                                s = e.isFromSearch,
                                o = e.instantSearchInstance,
                                c = e.toggleShowMore,
                                u = e.isShowingMore,
                                l = e.hasExhaustiveItems,
                                h = e.canToggleShowMore
                            t
                                ? (p.templateProps = fe({
                                      templatesConfig: o.templatesConfig,
                                      templates: m
                                  }))
                                : Cn(
                                      ln(ei, {
                                          createURL: i,
                                          cssClasses: d,
                                          facetValues: r,
                                          templateProps: p.templateProps,
                                          toggleRefinement: n,
                                          searchFacetValues: v ? a : void 0,
                                          searchPlaceholder: y,
                                          searchIsAlwaysActive: b,
                                          isFromSearch: s,
                                          showMore: g && !s && 0 < r.length,
                                          toggleShowMore: c,
                                          isShowingMore: u,
                                          hasExhaustiveItems: l,
                                          canToggleShowMore: h
                                      }),
                                      f
                                  )
                        }
                    })({
                        containerNode: S,
                        cssClasses: _,
                        templates: P,
                        renderState: {},
                        searchable: u,
                        searchablePlaceholder: h,
                        searchableIsAlwaysActive: p,
                        showMore: s
                    }),
                    function () {
                        return Cn(null, S)
                    }
                )({
                    attribute: n,
                    operator: r,
                    limit: a,
                    showMore: s,
                    showMoreLimit: o,
                    sortBy: i,
                    escapeFacetValues: w,
                    transformItems: R
                })
            },
            numericMenu: function () {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                    t = e.container,
                    n = e.attribute,
                    r = e.items,
                    i = e.cssClasses,
                    a = void 0 === i ? {} : i,
                    s = e.templates,
                    o = void 0 === s ? Pi : s,
                    c = e.transformItems
                if (!t) throw new Error(_i('The `container` option is required.'))
                var u = ue(t),
                    l = {
                        root: kr(xi(), a.root),
                        noRefinementRoot: kr(
                            xi({ modifierName: 'noRefinement' }),
                            a.noRefinementRoot
                        ),
                        list: kr(xi({ descendantName: 'list' }), a.list),
                        item: kr(xi({ descendantName: 'item' }), a.item),
                        selectedItem: kr(
                            xi({ descendantName: 'item', modifierName: 'selected' }),
                            a.selectedItem
                        ),
                        label: kr(xi({ descendantName: 'label' }), a.label),
                        radio: kr(xi({ descendantName: 'radio' }), a.radio),
                        labelText: kr(xi({ descendantName: 'labelText' }), a.labelText)
                    },
                    h = (function (e) {
                        var s = e.containerNode,
                            o = e.attribute,
                            c = e.cssClasses,
                            u = e.renderState,
                            l = e.templates
                        return function (e, t) {
                            var n = e.createURL,
                                r = e.instantSearchInstance,
                                i = e.refine,
                                a = e.items
                            t
                                ? (u.templateProps = fe({
                                      defaultTemplates: Pi,
                                      templatesConfig: r.templatesConfig,
                                      templates: l
                                  }))
                                : Cn(
                                      ln(ei, {
                                          createURL: n,
                                          cssClasses: c,
                                          facetValues: a,
                                          templateProps: u.templateProps,
                                          toggleRefinement: i,
                                          attribute: o
                                      }),
                                      s
                                  )
                        }
                    })({
                        containerNode: u,
                        attribute: n,
                        cssClasses: l,
                        renderState: {},
                        templates: o
                    })
                return Hn(h, function () {
                    return Cn(null, u)
                })({ attribute: n, items: r, transformItems: c })
            },
            pagination: function () {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                    t = e.container,
                    n = e.templates,
                    r = void 0 === n ? {} : n,
                    i = e.cssClasses,
                    a = void 0 === i ? {} : i,
                    s = e.totalPages,
                    o = e.padding,
                    c = e.showFirst,
                    u = void 0 === c || c,
                    l = e.showLast,
                    h = void 0 === l || l,
                    f = e.showPrevious,
                    d = void 0 === f || f,
                    m = e.showNext,
                    p = void 0 === m || m,
                    g = e.scrollTo,
                    v = void 0 === g ? 'body' : g
                if (!t) throw new Error(Ci('The `container` option is required.'))
                var y = ue(t),
                    b = !0 === v ? 'body' : v,
                    R = !1 !== b && ue(b),
                    w = {
                        root: kr(Ii(), a.root),
                        noRefinementRoot: kr(
                            Ii({ modifierName: 'noRefinement' }),
                            a.noRefinementRoot
                        ),
                        list: kr(Ii({ descendantName: 'list' }), a.list),
                        item: kr(Ii({ descendantName: 'item' }), a.item),
                        firstPageItem: kr(
                            Ii({ descendantName: 'item', modifierName: 'firstPage' }),
                            a.firstPageItem
                        ),
                        lastPageItem: kr(
                            Ii({ descendantName: 'item', modifierName: 'lastPage' }),
                            a.lastPageItem
                        ),
                        previousPageItem: kr(
                            Ii({ descendantName: 'item', modifierName: 'previousPage' }),
                            a.previousPageItem
                        ),
                        nextPageItem: kr(
                            Ii({ descendantName: 'item', modifierName: 'nextPage' }),
                            a.nextPageItem
                        ),
                        pageItem: kr(
                            Ii({ descendantName: 'item', modifierName: 'page' }),
                            a.pageItem
                        ),
                        selectedItem: kr(
                            Ii({ descendantName: 'item', modifierName: 'selected' }),
                            a.selectedItem
                        ),
                        disabledItem: kr(
                            Ii({ descendantName: 'item', modifierName: 'disabled' }),
                            a.disabledItem
                        ),
                        link: kr(Ii({ descendantName: 'link' }), a.link)
                    },
                    S = D({}, Mi, {}, r)
                return Wn(
                    (function (e) {
                        var l = e.containerNode,
                            h = e.cssClasses,
                            f = e.templates,
                            d = e.totalPages,
                            m = e.showFirst,
                            p = e.showLast,
                            g = e.showPrevious,
                            v = e.showNext,
                            y = e.scrollToNode
                        return function (e, t) {
                            var n = e.createURL,
                                r = e.currentRefinement,
                                i = e.nbHits,
                                a = e.nbPages,
                                s = e.pages,
                                o = e.isFirstPage,
                                c = e.isLastPage,
                                u = e.refine
                            if (!t) {
                                Cn(
                                    ln(Fi, {
                                        createURL: n,
                                        cssClasses: h,
                                        currentPage: r,
                                        templates: f,
                                        nbHits: i,
                                        nbPages: a,
                                        pages: s,
                                        totalPages: d,
                                        isFirstPage: o,
                                        isLastPage: c,
                                        setCurrentPage: function (e) {
                                            u(e), !1 !== y && y.scrollIntoView()
                                        },
                                        showFirst: m,
                                        showLast: p,
                                        showPrevious: g,
                                        showNext: v
                                    }),
                                    l
                                )
                            }
                        }
                    })({
                        containerNode: y,
                        cssClasses: w,
                        templates: S,
                        showFirst: u,
                        showLast: h,
                        showPrevious: d,
                        showNext: p,
                        padding: o,
                        scrollToNode: R
                    }),
                    function () {
                        return Cn(null, y)
                    }
                )({ totalPages: s, padding: o })
            },
            rangeInput: function () {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                    t = e.container,
                    n = e.attribute,
                    r = e.min,
                    i = e.max,
                    a = e.precision,
                    s = void 0 === a ? 0 : a,
                    o = e.cssClasses,
                    c = void 0 === o ? {} : o,
                    u = e.templates,
                    l = void 0 === u ? {} : u
                if (!t) throw new Error(Ti('The `container` option is required.'))
                var h = ue(t),
                    f = D({ separatorText: 'to', submitText: 'Go' }, l),
                    d = {
                        root: kr(ki(), c.root),
                        noRefinement: kr(ki({ modifierName: 'noRefinement' })),
                        form: kr(ki({ descendantName: 'form' }), c.form),
                        label: kr(ki({ descendantName: 'label' }), c.label),
                        input: kr(ki({ descendantName: 'input' }), c.input),
                        inputMin: kr(
                            ki({ descendantName: 'input', modifierName: 'min' }),
                            c.inputMin
                        ),
                        inputMax: kr(
                            ki({ descendantName: 'input', modifierName: 'max' }),
                            c.inputMax
                        ),
                        separator: kr(ki({ descendantName: 'separator' }), c.separator),
                        submit: kr(ki({ descendantName: 'submit' }), c.submit)
                    }
                return D(
                    {},
                    zn(
                        (function (e) {
                            var d = e.containerNode,
                                m = e.cssClasses,
                                p = e.renderState,
                                g = e.templates
                            return function (e, t) {
                                var n = e.refine,
                                    r = e.range,
                                    i = e.start,
                                    a = e.widgetParams,
                                    s = e.instantSearchInstance
                                if (t)
                                    p.templateProps = fe({
                                        templatesConfig: s.templatesConfig,
                                        templates: g
                                    })
                                else {
                                    var o = r.min,
                                        c = r.max,
                                        u = B(i, 2),
                                        l = u[0],
                                        h = u[1],
                                        f = 1 / Math.pow(10, a.precision)
                                    Cn(
                                        ln(Li, {
                                            min: o,
                                            max: c,
                                            step: f,
                                            values: {
                                                min: l !== -1 / 0 && l !== o ? l : void 0,
                                                max: h !== 1 / 0 && h !== c ? h : void 0
                                            },
                                            cssClasses: m,
                                            refine: n,
                                            templateProps: p.templateProps
                                        }),
                                        d
                                    )
                                }
                            }
                        })({ containerNode: h, cssClasses: d, templates: f, renderState: {} }),
                        function () {
                            return Cn(null, h)
                        }
                    )({ attribute: n, min: r, max: i, precision: s }),
                    { $$type: 'ais.rangeInput' }
                )
            },
            searchBox: function () {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                    t = e.container,
                    n = e.placeholder,
                    r = void 0 === n ? '' : n,
                    i = e.cssClasses,
                    a = void 0 === i ? {} : i,
                    s = e.autofocus,
                    o = void 0 !== s && s,
                    c = e.searchAsYouType,
                    u = void 0 === c || c,
                    l = e.showReset,
                    h = void 0 === l || l,
                    f = e.showSubmit,
                    d = void 0 === f || f,
                    m = e.showLoadingIndicator,
                    p = void 0 === m || m,
                    g = e.queryHook,
                    v = e.templates
                if (!t) throw new Error(Ei('The `container` option is required.'))
                var y = ue(t),
                    b = {
                        root: kr(Oi(), a.root),
                        form: kr(Oi({ descendantName: 'form' }), a.form),
                        input: kr(Oi({ descendantName: 'input' }), a.input),
                        submit: kr(Oi({ descendantName: 'submit' }), a.submit),
                        submitIcon: kr(Oi({ descendantName: 'submitIcon' }), a.submitIcon),
                        reset: kr(Oi({ descendantName: 'reset' }), a.reset),
                        resetIcon: kr(Oi({ descendantName: 'resetIcon' }), a.resetIcon),
                        loadingIndicator: kr(
                            Oi({ descendantName: 'loadingIndicator' }),
                            a.loadingIndicator
                        ),
                        loadingIcon: kr(Oi({ descendantName: 'loadingIcon' }), a.loadingIcon)
                    }
                return Xn(
                    (function (e) {
                        var i = e.containerNode,
                            a = e.cssClasses,
                            s = e.placeholder,
                            o = e.templates,
                            c = e.autofocus,
                            u = e.searchAsYouType,
                            l = e.showReset,
                            h = e.showSubmit,
                            f = e.showLoadingIndicator
                        return function (e) {
                            var t = e.refine,
                                n = e.query,
                                r = e.isSearchStalled
                            Cn(
                                ln(Zr, {
                                    query: n,
                                    placeholder: s,
                                    autofocus: c,
                                    refine: t,
                                    searchAsYouType: u,
                                    templates: o,
                                    showSubmit: h,
                                    showReset: l,
                                    showLoadingIndicator: f,
                                    isSearchStalled: r,
                                    cssClasses: a
                                }),
                                i
                            )
                        }
                    })({
                        containerNode: y,
                        cssClasses: b,
                        placeholder: r,
                        templates: D({}, ji, {}, v),
                        autofocus: o,
                        searchAsYouType: u,
                        showReset: h,
                        showSubmit: d,
                        showLoadingIndicator: p
                    }),
                    function () {
                        return Cn(null, y)
                    }
                )({ queryHook: g })
            },
            rangeSlider: function () {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                    t = e.container,
                    n = e.attribute,
                    r = e.min,
                    i = e.max,
                    a = e.cssClasses,
                    s = void 0 === a ? {} : a,
                    o = e.step,
                    c = e.pips,
                    u = void 0 === c || c,
                    l = e.precision,
                    h = void 0 === l ? 0 : l,
                    f = e.tooltips,
                    d = void 0 === f || f
                if (!t) throw new Error(ra('The `container` option is required.'))
                var m = ue(t),
                    p = {
                        root: kr(ia(), s.root),
                        disabledRoot: kr(ia({ modifierName: 'disabled' }), s.disabledRoot)
                    }
                return D(
                    {},
                    zn(
                        (function (e) {
                            var f = e.containerNode,
                                d = e.cssClasses,
                                m = e.pips,
                                p = e.step,
                                g = e.tooltips
                            return function (e, t) {
                                var n = e.refine,
                                    r = e.range,
                                    i = e.start
                                if (!t) {
                                    var a = r.min,
                                        s = r.max,
                                        o = B(i, 2),
                                        c = o[0],
                                        u = o[1],
                                        l = c === -1 / 0 ? a : c,
                                        h = u === 1 / 0 ? s : u
                                    Cn(
                                        ln(na, {
                                            cssClasses: d,
                                            refine: n,
                                            min: a,
                                            max: s,
                                            values: [s < l ? s : l, h < a ? a : h],
                                            tooltips: g,
                                            step: p,
                                            pips: m
                                        }),
                                        f
                                    )
                                }
                            }
                        })({
                            containerNode: m,
                            step: o,
                            pips: u,
                            tooltips: d,
                            renderState: {},
                            cssClasses: p
                        }),
                        function () {
                            return Cn(null, m)
                        }
                    )({ attribute: n, min: r, max: i, precision: h }),
                    { $$type: 'ais.rangeSlider' }
                )
            },
            sortBy: function () {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                    t = e.container,
                    n = e.items,
                    r = e.cssClasses,
                    i = void 0 === r ? {} : r,
                    a = e.transformItems
                if (!t) throw new Error(aa('The `container` option is required.'))
                var s = ue(t),
                    o = {
                        root: kr(sa(), i.root),
                        select: kr(sa({ descendantName: 'select' }), i.select),
                        option: kr(sa({ descendantName: 'option' }), i.option)
                    }
                return Zn(
                    (function (e) {
                        var a = e.containerNode,
                            s = e.cssClasses
                        return function (e, t) {
                            var n = e.currentRefinement,
                                r = e.options,
                                i = e.refine
                            t ||
                                Cn(
                                    ln(
                                        'div',
                                        { className: s.root },
                                        ln(ui, {
                                            cssClasses: s,
                                            currentValue: n,
                                            options: r,
                                            setValue: i
                                        })
                                    ),
                                    a
                                )
                        }
                    })({ containerNode: s, cssClasses: o }),
                    function () {
                        return Cn(null, s)
                    }
                )({ items: n, transformItems: a })
            },
            ratingMenu: function () {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                    t = e.container,
                    n = e.attribute,
                    r = e.max,
                    i = void 0 === r ? 5 : r,
                    a = e.cssClasses,
                    s = void 0 === a ? {} : a,
                    o = e.templates,
                    c = void 0 === o ? oa : o
                if (!t) throw new Error(ca('The `container` option is required.'))
                var u = ue(t),
                    l = {
                        root: kr(ua(), s.root),
                        noRefinementRoot: kr(
                            ua({ modifierName: 'noRefinement' }),
                            s.noRefinementRoot
                        ),
                        list: kr(ua({ descendantName: 'list' }), s.list),
                        item: kr(ua({ descendantName: 'item' }), s.item),
                        selectedItem: kr(
                            ua({ descendantName: 'item', modifierName: 'selected' }),
                            s.selectedItem
                        ),
                        disabledItem: kr(
                            ua({ descendantName: 'item', modifierName: 'disabled' }),
                            s.disabledItem
                        ),
                        link: kr(ua({ descendantName: 'link' }), s.link),
                        starIcon: kr(ua({ descendantName: 'starIcon' }), s.starIcon),
                        fullStarIcon: kr(
                            ua({ descendantName: 'starIcon', modifierName: 'full' }),
                            s.fullStarIcon
                        ),
                        emptyStarIcon: kr(
                            ua({ descendantName: 'starIcon', modifierName: 'empty' }),
                            s.emptyStarIcon
                        ),
                        label: kr(ua({ descendantName: 'label' }), s.label),
                        count: kr(ua({ descendantName: 'count' }), s.count)
                    }
                return tr(
                    (function (e) {
                        var s = e.containerNode,
                            o = e.cssClasses,
                            c = e.templates,
                            u = e.renderState
                        return function (e, t) {
                            var n = e.refine,
                                r = e.items,
                                i = e.createURL,
                                a = e.instantSearchInstance
                            t
                                ? (u.templateProps = fe({
                                      defaultTemplates: oa,
                                      templatesConfig: a.templatesConfig,
                                      templates: c
                                  }))
                                : Cn(
                                      ln(
                                          ei,
                                          {
                                              createURL: i,
                                              cssClasses: o,
                                              facetValues: r,
                                              templateProps: u.templateProps,
                                              toggleRefinement: n
                                          },
                                          ln(
                                              'svg',
                                              {
                                                  xmlns: 'http://www.w3.org/2000/svg',
                                                  style: 'display:none;'
                                              },
                                              ln(
                                                  'symbol',
                                                  {
                                                      id: ua({ descendantName: 'starSymbol' }),
                                                      viewBox: '0 0 24 24'
                                                  },
                                                  la
                                              ),
                                              ln(
                                                  'symbol',
                                                  {
                                                      id: ua({ descendantName: 'starEmptySymbol' }),
                                                      viewBox: '0 0 24 24'
                                                  },
                                                  ha
                                              )
                                          )
                                      ),
                                      s
                                  )
                        }
                    })({ containerNode: u, cssClasses: l, renderState: {}, templates: c }),
                    function () {
                        return Cn(null, u)
                    }
                )({ attribute: n, max: i })
            },
            stats: function () {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                    t = e.container,
                    n = e.cssClasses,
                    r = void 0 === n ? {} : n,
                    i = e.templates,
                    a = void 0 === i ? da : i
                if (!t) throw new Error(ma('The `container` option is required.'))
                var s = ue(t),
                    o = { root: kr(pa(), r.root), text: kr(pa({ descendantName: 'text' }), r.text) }
                return rr(
                    (function (e) {
                        var u = e.containerNode,
                            l = e.cssClasses,
                            h = e.renderState,
                            f = e.templates
                        return function (e, t) {
                            var n = e.hitsPerPage,
                                r = e.nbHits,
                                i = e.nbPages,
                                a = e.page,
                                s = e.processingTimeMS,
                                o = e.query,
                                c = e.instantSearchInstance
                            t
                                ? (h.templateProps = fe({
                                      defaultTemplates: da,
                                      templatesConfig: c.templatesConfig,
                                      templates: f
                                  }))
                                : Cn(
                                      ln(fa, {
                                          cssClasses: l,
                                          hitsPerPage: n,
                                          nbHits: r,
                                          nbPages: i,
                                          page: a,
                                          processingTimeMS: s,
                                          query: o,
                                          templateProps: h.templateProps
                                      }),
                                      u
                                  )
                        }
                    })({ containerNode: s, cssClasses: o, renderState: {}, templates: a }),
                    function () {
                        return Cn(null, s)
                    }
                )()
            },
            toggleRefinement: function () {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                    t = e.container,
                    n = e.attribute,
                    r = e.cssClasses,
                    i = void 0 === r ? {} : r,
                    a = e.templates,
                    s = void 0 === a ? va : a,
                    o = e.on,
                    c = void 0 === o || o,
                    u = e.off
                if (!t) throw new Error(ya('The `container` option is required.'))
                var l = ue(t),
                    h = {
                        root: kr(ba(), i.root),
                        label: kr(ba({ descendantName: 'label' }), i.label),
                        checkbox: kr(ba({ descendantName: 'checkbox' }), i.checkbox),
                        labelText: kr(ba({ descendantName: 'labelText' }), i.labelText)
                    }
                return ar(
                    (function (e) {
                        var s = e.containerNode,
                            o = e.cssClasses,
                            c = e.renderState,
                            u = e.templates
                        return function (e, t) {
                            var n = e.value,
                                r = e.createURL,
                                i = e.refine,
                                a = e.instantSearchInstance
                            t
                                ? (c.templateProps = fe({
                                      defaultTemplates: va,
                                      templatesConfig: a.templatesConfig,
                                      templates: u
                                  }))
                                : Cn(
                                      ln(ga, {
                                          createURL: r,
                                          cssClasses: o,
                                          currentRefinement: n,
                                          templateProps: c.templateProps,
                                          refine: function (e) {
                                              return i({ isRefined: e })
                                          }
                                      }),
                                      s
                                  )
                        }
                    })({ containerNode: l, cssClasses: h, renderState: {}, templates: s }),
                    function () {
                        return Cn(null, l)
                    }
                )({ attribute: n, on: c, off: u })
            },
            analytics: function () {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                    s = e.pushFunction,
                    t = e.delay,
                    r = void 0 === t ? 3e3 : t,
                    n = e.triggerOnUIInteraction,
                    i = void 0 !== n && n,
                    a = e.pushInitialSearch,
                    o = void 0 === a || a,
                    c = e.pushPagination,
                    u = void 0 !== c && c
                if (!s) throw new Error(Ra('The `pushFunction` option is required.'))
                function l(e) {
                    if (null !== e) {
                        var t = [],
                            n = (function (e) {
                                var t = []
                                for (var n in e)
                                    if (e.hasOwnProperty(n)) {
                                        var r = e[n].join('+')
                                        t.push(
                                            ''
                                                .concat(encodeURIComponent(n), '=')
                                                .concat(encodeURIComponent(n), '_')
                                                .concat(encodeURIComponent(r))
                                        )
                                    }
                                return t.join('&')
                            })(
                                D(
                                    {},
                                    e.state.disjunctiveFacetsRefinements,
                                    {},
                                    e.state.facetsRefinements,
                                    {},
                                    e.state.hierarchicalFacetsRefinements
                                )
                            ),
                            r = (function (e) {
                                var t = []
                                for (var n in e)
                                    if (e.hasOwnProperty(n)) {
                                        var r = e[n]
                                        if (r.hasOwnProperty('>=') && r.hasOwnProperty('<='))
                                            r['>='] && r['>='][0] === r['<='] && r['<='][0]
                                                ? t.push(
                                                      ''
                                                          .concat(n, '=')
                                                          .concat(n, '_')
                                                          .concat(r['>='])
                                                  )
                                                : t.push(
                                                      ''
                                                          .concat(n, '=')
                                                          .concat(n, '_')
                                                          .concat(r['>='], 'to')
                                                          .concat(r['<='])
                                                  )
                                        else if (r.hasOwnProperty('>='))
                                            t.push(
                                                ''.concat(n, '=').concat(n, '_from').concat(r['>='])
                                            )
                                        else if (r.hasOwnProperty('<='))
                                            t.push(
                                                ''.concat(n, '=').concat(n, '_to').concat(r['<='])
                                            )
                                        else if (r.hasOwnProperty('=')) {
                                            var i = []
                                            for (var a in r['='])
                                                r['='].hasOwnProperty(a) && i.push(r['='][a])
                                            t.push(
                                                ''.concat(n, '=').concat(n, '_').concat(i.join('-'))
                                            )
                                        }
                                    }
                                return t.join('&')
                            })(e.state.numericRefinements)
                        '' !== n && t.push(n), '' !== r && t.push(r)
                        var i = t.join('&'),
                            a = 'Query: '.concat(e.state.query || '', ', ').concat(i)
                        !0 === u && (a += ', Page: '.concat(e.state.page || 0)),
                            d !== a && (s(i, e.state, e.results), (d = a))
                    }
                }
                var h,
                    f = null,
                    d = '',
                    m = !0
                function p() {
                    l(f)
                }
                function g() {
                    l(f)
                }
                return (
                    !0 === o && (m = !1),
                    {
                        init: function () {
                            !0 === i &&
                                (document.addEventListener('click', p),
                                window.addEventListener('beforeunload', g))
                        },
                        render: function (e) {
                            var t = e.results,
                                n = e.state
                            !0 !== m
                                ? ((f = { results: t, state: n }),
                                  h && clearTimeout(h),
                                  (h = window.setTimeout(function () {
                                      return l(f)
                                  }, r)))
                                : (m = !1)
                        },
                        dispose: function () {
                            !0 === i &&
                                (document.removeEventListener('click', p),
                                window.removeEventListener('beforeunload', g))
                        }
                    }
                )
            },
            breadcrumb: function () {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                    t = e.container,
                    n = e.attributes,
                    r = e.separator,
                    i = e.rootPath,
                    a = void 0 === i ? null : i,
                    s = e.transformItems,
                    o = e.templates,
                    c = void 0 === o ? Sa : o,
                    u = e.cssClasses,
                    l = void 0 === u ? {} : u
                if (!t) throw new Error(Pa('The `container` option is required.'))
                var h = ue(t),
                    f = {
                        root: kr(_a(), l.root),
                        noRefinementRoot: kr(
                            _a({ modifierName: 'noRefinement' }),
                            l.noRefinementRoot
                        ),
                        list: kr(_a({ descendantName: 'list' }), l.list),
                        item: kr(_a({ descendantName: 'item' }), l.item),
                        selectedItem: kr(
                            _a({ descendantName: 'item', modifierName: 'selected' }),
                            l.selectedItem
                        ),
                        separator: kr(_a({ descendantName: 'separator' }), l.separator),
                        link: kr(_a({ descendantName: 'link' }), l.link)
                    }
                return or(
                    (function (e) {
                        var o = e.containerNode,
                            c = e.cssClasses,
                            u = e.renderState,
                            l = e.templates
                        return function (e, t) {
                            var n = e.canRefine,
                                r = e.createURL,
                                i = e.instantSearchInstance,
                                a = e.items,
                                s = e.refine
                            t
                                ? (u.templateProps = fe({
                                      defaultTemplates: Sa,
                                      templatesConfig: i.templatesConfig,
                                      templates: l
                                  }))
                                : Cn(
                                      ln(wa, {
                                          canRefine: n,
                                          cssClasses: c,
                                          createURL: r,
                                          items: a,
                                          refine: s,
                                          templateProps: u.templateProps
                                      }),
                                      o
                                  )
                        }
                    })({ containerNode: h, cssClasses: f, renderState: {}, templates: c }),
                    function () {
                        return Cn(null, h)
                    }
                )({ attributes: n, separator: r, rootPath: a, transformItems: s })
            },
            menuSelect: function (e) {
                var t = e.container,
                    n = e.attribute,
                    r = e.sortBy,
                    i = void 0 === r ? ['name:asc'] : r,
                    a = e.limit,
                    s = void 0 === a ? 10 : a,
                    o = e.cssClasses,
                    c = void 0 === o ? {} : o,
                    u = e.templates,
                    l = void 0 === u ? Na : u,
                    h = e.transformItems
                if (!t) throw new Error(Fa('The `container` option is required.'))
                var f = ue(t),
                    d = {
                        root: kr(Ca(), c.root),
                        noRefinementRoot: kr(
                            Ca({ modifierName: 'noRefinement' }),
                            c.noRefinementRoot
                        ),
                        select: kr(Ca({ descendantName: 'select' }), c.select),
                        option: kr(Ca({ descendantName: 'option' }), c.option)
                    }
                return An(
                    (function (e) {
                        var s = e.containerNode,
                            o = e.cssClasses,
                            c = e.renderState,
                            u = e.templates
                        return function (e, t) {
                            var n = e.refine,
                                r = e.items,
                                i = e.canRefine,
                                a = e.instantSearchInstance
                            t
                                ? (c.templateProps = fe({
                                      defaultTemplates: Na,
                                      templatesConfig: a.templatesConfig,
                                      templates: u
                                  }))
                                : Cn(
                                      ln(xa, {
                                          cssClasses: o,
                                          items: r,
                                          refine: n,
                                          templateProps: c.templateProps,
                                          canRefine: i
                                      }),
                                      s
                                  )
                        }
                    })({ containerNode: f, cssClasses: d, renderState: {}, templates: l }),
                    function () {
                        return Cn(null, f)
                    }
                )({ attribute: n, limit: s, sortBy: i, transformItems: h })
            },
            poweredBy: function () {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                    t = e.container,
                    n = e.cssClasses,
                    r = void 0 === n ? {} : n,
                    i = e.theme,
                    a = void 0 === i ? 'light' : i
                if (!t) throw new Error(ka('The `container` option is required.'))
                var s = ue(t),
                    o = {
                        root: kr(
                            Ta(),
                            Ta({ modifierName: 'dark' === a ? 'dark' : 'light' }),
                            r.root
                        ),
                        link: kr(Ta({ descendantName: 'link' }), r.link),
                        logo: kr(Ta({ descendantName: 'logo' }), r.logo)
                    }
                return hr(
                    (function (e) {
                        var a = e.containerNode,
                            s = e.cssClasses
                        return function (e, t) {
                            var n = e.url,
                                r = e.widgetParams
                            if (t) {
                                var i = r.theme
                                Cn(ln(Ia, { cssClasses: s, url: n, theme: i }), a)
                            } else;
                        }
                    })({ containerNode: s, cssClasses: o }),
                    function () {
                        return Cn(null, s)
                    }
                )({ theme: a })
            },
            panel: function (e) {
                var t = 0 < arguments.length && void 0 !== e ? e : {},
                    n = t.templates,
                    r = void 0 === n ? {} : n,
                    i = t.hidden,
                    o =
                        void 0 === i
                            ? function () {
                                  return !1
                              }
                            : i,
                    a = t.collapsed,
                    s = t.cssClasses,
                    c = void 0 === s ? {} : s,
                    u = document.createElement('div'),
                    l = Boolean(a),
                    h =
                        'function' == typeof a
                            ? a
                            : function () {
                                  return !1
                              },
                    f = {
                        root: kr(rs(), c.root),
                        noRefinementRoot: kr(
                            rs({ modifierName: 'noRefinement' }),
                            c.noRefinementRoot
                        ),
                        collapsibleRoot: kr(rs({ modifierName: 'collapsible' }), c.collapsibleRoot),
                        collapsedRoot: kr(rs({ modifierName: 'collapsed' }), c.collapsedRoot),
                        collapseButton: kr(
                            rs({ descendantName: 'collapseButton' }),
                            c.collapseButton
                        ),
                        collapseIcon: kr(rs({ descendantName: 'collapseIcon' }), c.collapseIcon),
                        body: kr(rs({ descendantName: 'body' }), c.body),
                        header: kr(rs({ descendantName: 'header' }), c.header),
                        footer: kr(rs({ descendantName: 'footer' }), c.footer)
                    }
                return function (n) {
                    return function () {
                        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                            i = e.container
                        if (!i)
                            throw new Error(
                                ns(
                                    'The `container` option is required in the widget within the panel.'
                                )
                            )
                        var t = {
                                header: '',
                                footer: '',
                                collapseButtonText: function (e) {
                                    var t = e.collapsed
                                    return '<svg\n          className="'
                                        .concat(
                                            f.collapseIcon,
                                            '"\n          width="1em"\n          height="1em"\n          viewBox="0 0 500 500"\n        >\n        <path d="'
                                        )
                                        .concat(
                                            t ? 'M100 250l300-150v300z' : 'M250 400l150-300H100z',
                                            '" fill="currentColor" />\n        </svg>'
                                        )
                                }
                            },
                            a = (function (e) {
                                var a = e.containerNode,
                                    s = e.bodyContainerNode,
                                    o = e.cssClasses,
                                    c = e.templates
                                return function (e) {
                                    var t = e.options,
                                        n = e.hidden,
                                        r = e.collapsible,
                                        i = e.collapsed
                                    Cn(
                                        ln(Xa, {
                                            cssClasses: o,
                                            hidden: n,
                                            collapsible: r,
                                            isCollapsed: i,
                                            templates: c,
                                            data: t,
                                            bodyElement: s
                                        }),
                                        a
                                    )
                                }
                            })({
                                containerNode: ue(i),
                                bodyContainerNode: u,
                                cssClasses: f,
                                templates: D({}, t, {}, r)
                            })
                        a({ options: {}, hidden: !0, collapsible: l, collapsed: !1 })
                        var s = n(D({}, e, { container: u }))
                        return D({}, s, {
                            dispose: function () {
                                if ((Cn(null, ue(i)), 'function' == typeof s.dispose)) {
                                    for (
                                        var e, t = arguments.length, n = new Array(t), r = 0;
                                        r < t;
                                        r++
                                    )
                                        n[r] = arguments[r]
                                    return (e = s.dispose).call.apply(e, [this].concat(n))
                                }
                            },
                            render: function () {
                                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                                    t[n] = arguments[n]
                                var r,
                                    i = t[0]
                                a({
                                    options: i,
                                    hidden: Boolean(o(i)),
                                    collapsible: l,
                                    collapsed: Boolean(h(i))
                                }),
                                    'function' == typeof s.render &&
                                        (r = s.render).call.apply(r, [this].concat(t))
                            }
                        })
                    }
                }
            },
            voiceSearch: function (e) {
                var t = 0 < arguments.length && void 0 !== e ? e : {},
                    n = t.container,
                    r = t.cssClasses,
                    i = void 0 === r ? {} : r,
                    a = t.templates,
                    s = t.searchAsYouSpeak,
                    o = void 0 !== s && s,
                    c = t.language,
                    u = t.additionalQueryParameters
                if (!n) throw new Error(as('The `container` option is required.'))
                var l = ue(n),
                    h = {
                        root: kr(ss(), i.root),
                        button: kr(ss({ descendantName: 'button' }), i.button),
                        status: kr(ss({ descendantName: 'status' }), i.status)
                    }
                return Pr(Za, function () {
                    return Cn(null, l)
                })({
                    container: l,
                    cssClasses: h,
                    templates: D({}, is, {}, a),
                    searchAsYouSpeak: o,
                    language: c,
                    additionalQueryParameters: u
                })
            },
            queryRuleCustomData: function (e) {
                var t = 0 < arguments.length && void 0 !== e ? e : {},
                    n = t.container,
                    r = t.cssClasses,
                    i = void 0 === r ? {} : r,
                    a = t.templates,
                    s = void 0 === a ? {} : a,
                    o = t.transformItems,
                    c =
                        void 0 === o
                            ? function (e) {
                                  return e
                              }
                            : o
                if (!n) throw new Error(os('The `container` option is required.'))
                var u = { root: kr(cs(), i.root) },
                    l = D(
                        {},
                        {
                            default: function (e) {
                                var t = e.items
                                return JSON.stringify(t, null, 2)
                            }
                        },
                        {},
                        s
                    ),
                    h = ue(n)
                return D(
                    {},
                    wr(ts, function () {
                        Cn(null, h)
                    })({ container: h, cssClasses: u, templates: l, transformItems: c }),
                    { $$type: 'ais.queryRuleCustomData' }
                )
            },
            queryRuleContext: function (e) {
                var t = 0 < arguments.length && void 0 !== e ? e : {},
                    n = t.trackedFilters,
                    r = t.transformRuleContexts
                if (!n) throw new Error(us('The `trackedFilters` option is required.'))
                return D({}, wr(Fe)({ trackedFilters: n, transformRuleContexts: r }), {
                    $$type: 'ais.queryRuleContext'
                })
            },
            index: Ke,
            places: function (e) {
                var t = e || {},
                    n = t.placesReference,
                    r = void 0 === n ? void 0 : n,
                    i = t.defaultPosition,
                    o = void 0 === i ? [] : i,
                    a = O(t, ['placesReference', 'defaultPosition'])
                if ('function' != typeof r)
                    throw new Error(
                        'The `placesReference` option requires a valid Places.js reference.'
                    )
                var c = r(a),
                    u = { query: '', initialLatLngViaIP: void 0, isInitialLatLngViaIPSet: !1 }
                return {
                    $$type: 'ais.places',
                    init: function (e) {
                        var s = e.helper
                        c.on('change', function (e) {
                            var t = e.suggestion,
                                n = t.value,
                                r = t.latlng,
                                i = r.lat,
                                a = r.lng
                            ;(u.query = n),
                                s
                                    .setQueryParameter('insideBoundingBox', void 0)
                                    .setQueryParameter('aroundLatLngViaIP', !1)
                                    .setQueryParameter('aroundLatLng', ''.concat(i, ',').concat(a))
                                    .search()
                        }),
                            c.on('clear', function () {
                                ;(u.query = ''),
                                    s.setQueryParameter('insideBoundingBox', void 0),
                                    1 < o.length
                                        ? s
                                              .setQueryParameter('aroundLatLngViaIP', !1)
                                              .setQueryParameter('aroundLatLng', o.join(','))
                                        : s
                                              .setQueryParameter(
                                                  'aroundLatLngViaIP',
                                                  u.initialLatLngViaIP
                                              )
                                              .setQueryParameter('aroundLatLng', void 0),
                                    s.search()
                            })
                    },
                    getWidgetState: function (e, t) {
                        var n = t.searchParameters.aroundLatLng || o.join(',')
                        if (n !== o.join(',') || u.query)
                            return D({}, e, { places: { query: u.query, position: n } })
                        e.places
                        return O(e, ['places'])
                    },
                    getWidgetSearchParameters: function (e, t) {
                        var n = t.uiState.places || {},
                            r = n.query,
                            i = void 0 === r ? '' : r,
                            a = n.position,
                            s = void 0 === a ? o.join(',') : a
                        return (
                            (u.query = i),
                            u.isInitialLatLngViaIPSet ||
                                ((u.isInitialLatLngViaIPSet = !0),
                                (u.initialLatLngViaIP = e.aroundLatLngViaIP)),
                            c.setVal(i),
                            c.close(),
                            e
                                .setQueryParameter('insideBoundingBox', void 0)
                                .setQueryParameter('aroundLatLngViaIP', !1)
                                .setQueryParameter('aroundLatLng', s || void 0)
                        )
                    }
                }
            }
        }),
        hs = Object.freeze({ __proto__: null, history: jt })
    function fs(e) {
        e.configure
        return O(e, ['configure'])
    }
    function ds(e) {
        return new At(e)
    }
    var ms = Object.freeze({
        __proto__: null,
        simple: ot,
        singleIndex: function (t) {
            return {
                stateToRoute: function (e) {
                    return fs(e[t] || {})
                },
                routeToState: function (e) {
                    return C({}, t, fs(0 < arguments.length && void 0 !== e ? e : {}))
                }
            }
        }
    })
    return (
        (ds.routers = hs),
        (ds.stateMappings = ms),
        (ds.connectors = xr),
        (ds.widgets = ls),
        (ds.version = '4.3.1'),
        (ds.highlight = nt),
        (ds.snippet = it),
        (ds.insights = at),
        ds
    )
})
//# sourceMappingURL=instantsearch.production.min.js.map
