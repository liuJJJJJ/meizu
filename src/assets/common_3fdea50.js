
/*!cn:components/zepto/zepto.js*/
define("cn:components/zepto/zepto",
function(t, n, e) {
    var i = function() {
        function t(t) {
            return null == t ? String(t) : J[U.call(t)] || "object"
        }
        function n(n) {
            return "function" == t(n)
        }
        function e(t) {
            return null != t && t == t.window
        }
        function i(t) {
            return null != t && t.nodeType == t.DOCUMENT_NODE
        }
        function r(n) {
            return "object" == t(n)
        }
        function o(t) {
            return r(t) && !e(t) && Object.getPrototypeOf(t) == Object.prototype
        }
        function s(t) {
            return "number" == typeof t.length
        }
        function c(t) {
            return $.call(t,
            function(t) {
                return null != t
            })
        }
        function u(t) {
            return t.length > 0 ? x.fn.concat.apply([], t) : t
        }
        function a(t) {
            return t.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
        }
        function l(t) {
            return t in j ? j[t] : j[t] = new RegExp("(^|\\s)" + t + "(\\s|$)")
        }
        function f(t, n) {
            return "number" != typeof n || M[a(t)] ? n: n + "px"
        }
        function h(t) {
            var n, e;
            return P[t] || (n = L.createElement(t), L.body.appendChild(n), e = getComputedStyle(n, "").getPropertyValue("display"), n.parentNode.removeChild(n), "none" == e && (e = "block"), P[t] = e),
            P[t]
        }
        function p(t) {
            return "children" in t ? A.call(t.children) : x.map(t.childNodes,
            function(t) {
                return 1 == t.nodeType ? t: void 0
            })
        }
        function d(t, n, e) {
            for (N in n) e && (o(n[N]) || G(n[N])) ? (o(n[N]) && !o(t[N]) && (t[N] = {}), G(n[N]) && !G(t[N]) && (t[N] = []), d(t[N], n[N], e)) : n[N] !== E && (t[N] = n[N])
        }
        function m(t, n) {
            return null == n ? x(t) : x(t).filter(n)
        }
        function g(t, e, i, r) {
            return n(e) ? e.call(t, i, r) : e
        }
        function v(t, n, e) {
            null == e ? t.removeAttribute(n) : t.setAttribute(n, e)
        }
        function y(t, n) {
            var e = t.className || "",
            i = e && e.baseVal !== E;
            return n === E ? i ? e.baseVal: e: void(i ? e.baseVal = n: t.className = n)
        }
        function b(t) {
            try {
                return t ? "true" == t || ("false" == t ? !1 : "null" == t ? null: +t + "" == t ? +t: /^[\[\{]/.test(t) ? x.parseJSON(t) : t) : t
            } catch(n) {
                return t
            }
        }
        function w(t, n) {
            n(t);
            for (var e = 0,
            i = t.childNodes.length; i > e; e++) w(t.childNodes[e], n)
        }
        var E, N, x, C, O, S, T = [],
        A = T.slice,
        $ = T.filter,
        L = window.document,
        P = {},
        j = {},
        M = {
            "column-count": 1,
            columns: 1,
            "font-weight": 1,
            "line-height": 1,
            opacity: 1,
            "z-index": 1,
            zoom: 1
        },
        Z = /^\s*<(\w+|!)[^>]*>/,
        z = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        q = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        k = /^(?:body|html)$/i,
        B = /([A-Z])/g,
        R = ["val", "css", "html", "text", "data", "width", "height", "offset"],
        V = ["after", "prepend", "before", "append"],
        _ = L.createElement("table"),
        F = L.createElement("tr"),
        H = {
            tr: L.createElement("tbody"),
            tbody: _,
            thead: _,
            tfoot: _,
            td: F,
            th: F,
            "*": L.createElement("div")
        },
        D = /complete|loaded|interactive/,
        I = /^[\w-]*$/,
        J = {},
        U = J.toString,
        W = {},
        X = L.createElement("div"),
        Y = {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        G = Array.isArray ||
        function(t) {
            return t instanceof Array
        };
        return W.matches = function(t, n) {
            if (!n || !t || 1 !== t.nodeType) return ! 1;
            var e = t.webkitMatchesSelector || t.mozMatchesSelector || t.oMatchesSelector || t.matchesSelector;
            if (e) return e.call(t, n);
            var i, r = t.parentNode,
            o = !r;
            return o && (r = X).appendChild(t),
            i = ~W.qsa(r, n).indexOf(t),
            o && X.removeChild(t),
            i
        },
        O = function(t) {
            return t.replace(/-+(.)?/g,
            function(t, n) {
                return n ? n.toUpperCase() : ""
            })
        },
        S = function(t) {
            return $.call(t,
            function(n, e) {
                return t.indexOf(n) == e
            })
        },
        W.fragment = function(t, n, e) {
            var i, r, s;
            return z.test(t) && (i = x(L.createElement(RegExp.$1))),
            i || (t.replace && (t = t.replace(q, "<$1></$2>")), n === E && (n = Z.test(t) && RegExp.$1), n in H || (n = "*"), s = H[n], s.innerHTML = "" + t, i = x.each(A.call(s.childNodes),
            function() {
                s.removeChild(this)
            })),
            o(e) && (r = x(i), x.each(e,
            function(t, n) {
                R.indexOf(t) > -1 ? r[t](n) : r.attr(t, n)
            })),
            i
        },
        W.Z = function(t, n) {
            return t = t || [],
            t.__proto__ = x.fn,
            t.selector = n || "",
            t
        },
        W.isZ = function(t) {
            return t instanceof W.Z
        },
        W.init = function(t, e) {
            var i;
            if (!t) return W.Z();
            if ("string" == typeof t) if (t = t.trim(), "<" == t[0] && Z.test(t)) i = W.fragment(t, RegExp.$1, e),
            t = null;
            else {
                if (e !== E) return x(e).find(t);
                i = W.qsa(L, t)
            } else {
                if (n(t)) return x(L).ready(t);
                if (W.isZ(t)) return t;
                if (G(t)) i = c(t);
                else if (r(t)) i = [t],
                t = null;
                else if (Z.test(t)) i = W.fragment(t.trim(), RegExp.$1, e),
                t = null;
                else {
                    if (e !== E) return x(e).find(t);
                    i = W.qsa(L, t)
                }
            }
            return W.Z(i, t)
        },
        x = function(t, n) {
            return W.init(t, n)
        },
        x.extend = function(t) {
            var n, e = A.call(arguments, 1);
            return "boolean" == typeof t && (n = t, t = e.shift()),
            e.forEach(function(e) {
                d(t, e, n)
            }),
            t
        },
        W.qsa = function(t, n) {
            var e, r = "#" == n[0],
            o = !r && "." == n[0],
            s = r || o ? n.slice(1) : n,
            c = I.test(s);
            return i(t) && c && r ? (e = t.getElementById(s)) ? [e] : [] : 1 !== t.nodeType && 9 !== t.nodeType ? [] : A.call(c && !r ? o ? t.getElementsByClassName(s) : t.getElementsByTagName(n) : t.querySelectorAll(n))
        },
        x.contains = L.documentElement.contains ?
        function(t, n) {
            return t !== n && t.contains(n)
        }: function(t, n) {
            for (; n && (n = n.parentNode);) if (n === t) return ! 0;
            return ! 1
        },
        x.type = t,
        x.isFunction = n,
        x.isWindow = e,
        x.isArray = G,
        x.isPlainObject = o,
        x.isEmptyObject = function(t) {
            var n;
            for (n in t) return ! 1;
            return ! 0
        },
        x.inArray = function(t, n, e) {
            return T.indexOf.call(n, t, e)
        },
        x.camelCase = O,
        x.trim = function(t) {
            return null == t ? "": String.prototype.trim.call(t)
        },
        x.uuid = 0,
        x.support = {},
        x.expr = {},
        x.map = function(t, n) {
            var e, i, r, o = [];
            if (s(t)) for (i = 0; i < t.length; i++) e = n(t[i], i),
            null != e && o.push(e);
            else for (r in t) e = n(t[r], r),
            null != e && o.push(e);
            return u(o)
        },
        x.each = function(t, n) {
            var e, i;
            if (s(t)) {
                for (e = 0; e < t.length; e++) if (n.call(t[e], e, t[e]) === !1) return t
            } else for (i in t) if (n.call(t[i], i, t[i]) === !1) return t;
            return t
        },
        x.grep = function(t, n) {
            return $.call(t, n)
        },
        window.JSON && (x.parseJSON = JSON.parse),
        x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),
        function(t, n) {
            J["[object " + n + "]"] = n.toLowerCase()
        }),
        x.fn = {
            forEach: T.forEach,
            reduce: T.reduce,
            push: T.push,
            sort: T.sort,
            indexOf: T.indexOf,
            concat: T.concat,
            map: function(t) {
                return x(x.map(this,
                function(n, e) {
                    return t.call(n, e, n)
                }))
            },
            slice: function() {
                return x(A.apply(this, arguments))
            },
            ready: function(t) {
                return D.test(L.readyState) && L.body ? t(x) : L.addEventListener("DOMContentLoaded",
                function() {
                    t(x)
                },
                !1),
                this
            },
            get: function(t) {
                return t === E ? A.call(this) : this[t >= 0 ? t: t + this.length]
            },
            toArray: function() {
                return this.get()
            },
            size: function() {
                return this.length
            },
            remove: function() {
                return this.each(function() {
                    null != this.parentNode && this.parentNode.removeChild(this)
                })
            },
            each: function(t) {
                return T.every.call(this,
                function(n, e) {
                    return t.call(n, e, n) !== !1
                }),
                this
            },
            filter: function(t) {
                return n(t) ? this.not(this.not(t)) : x($.call(this,
                function(n) {
                    return W.matches(n, t)
                }))
            },
            add: function(t, n) {
                return x(S(this.concat(x(t, n))))
            },
            is: function(t) {
                return this.length > 0 && W.matches(this[0], t)
            },
            not: function(t) {
                var e = [];
                if (n(t) && t.call !== E) this.each(function(n) {
                    t.call(this, n) || e.push(this)
                });
                else {
                    var i = "string" == typeof t ? this.filter(t) : s(t) && n(t.item) ? A.call(t) : x(t);
                    this.forEach(function(t) {
                        i.indexOf(t) < 0 && e.push(t)
                    })
                }
                return x(e)
            },
            has: function(t) {
                return this.filter(function() {
                    return r(t) ? x.contains(this, t) : x(this).find(t).size()
                })
            },
            eq: function(t) {
                return - 1 === t ? this.slice(t) : this.slice(t, +t + 1)
            },
            first: function() {
                var t = this[0];
                return t && !r(t) ? t: x(t)
            },
            last: function() {
                var t = this[this.length - 1];
                return t && !r(t) ? t: x(t)
            },
            find: function(t) {
                var n, e = this;
                return n = t ? "object" == typeof t ? x(t).filter(function() {
                    var t = this;
                    return T.some.call(e,
                    function(n) {
                        return x.contains(n, t)
                    })
                }) : 1 == this.length ? x(W.qsa(this[0], t)) : this.map(function() {
                    return W.qsa(this, t)
                }) : x()
            },
            closest: function(t, n) {
                var e = this[0],
                r = !1;
                for ("object" == typeof t && (r = x(t)); e && !(r ? r.indexOf(e) >= 0 : W.matches(e, t));) e = e !== n && !i(e) && e.parentNode;
                return x(e)
            },
            parents: function(t) {
                for (var n = [], e = this; e.length > 0;) e = x.map(e,
                function(t) {
                    return (t = t.parentNode) && !i(t) && n.indexOf(t) < 0 ? (n.push(t), t) : void 0
                });
                return m(n, t)
            },
            parent: function(t) {
                return m(S(this.pluck("parentNode")), t)
            },
            children: function(t) {
                return m(this.map(function() {
                    return p(this)
                }), t)
            },
            contents: function() {
                return this.map(function() {
                    return A.call(this.childNodes)
                })
            },
            siblings: function(t) {
                return m(this.map(function(t, n) {
                    return $.call(p(n.parentNode),
                    function(t) {
                        return t !== n
                    })
                }), t)
            },
            empty: function() {
                return this.each(function() {
                    this.innerHTML = ""
                })
            },
            pluck: function(t) {
                return x.map(this,
                function(n) {
                    return n[t]
                })
            },
            show: function() {
                return this.each(function() {
                    "none" == this.style.display && (this.style.display = ""),
                    "none" == getComputedStyle(this, "").getPropertyValue("display") && (this.style.display = h(this.nodeName))
                })
            },
            replaceWith: function(t) {
                return this.before(t).remove()
            },
            wrap: function(t) {
                var e = n(t);
                if (this[0] && !e) var i = x(t).get(0),
                r = i.parentNode || this.length > 1;
                return this.each(function(n) {
                    x(this).wrapAll(e ? t.call(this, n) : r ? i.cloneNode(!0) : i)
                })
            },
            wrapAll: function(t) {
                if (this[0]) {
                    x(this[0]).before(t = x(t));
                    for (var n; (n = t.children()).length;) t = n.first();
                    x(t).append(this)
                }
                return this
            },
            wrapInner: function(t) {
                var e = n(t);
                return this.each(function(n) {
                    var i = x(this),
                    r = i.contents(),
                    o = e ? t.call(this, n) : t;
                    r.length ? r.wrapAll(o) : i.append(o)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    x(this).replaceWith(x(this).children())
                }),
                this
            },
            clone: function() {
                return this.map(function() {
                    return this.cloneNode(!0)
                })
            },
            hide: function() {
                return this.css("display", "none")
            },
            toggle: function(t) {
                return this.each(function() {
                    var n = x(this); (t === E ? "none" == n.css("display") : t) ? n.show() : n.hide()
                })
            },
            prev: function(t) {
                return x(this.pluck("previousElementSibling")).filter(t || "*")
            },
            next: function(t) {
                return x(this.pluck("nextElementSibling")).filter(t || "*")
            },
            html: function(t) {
                return 0 in arguments ? this.each(function(n) {
                    var e = this.innerHTML;
                    x(this).empty().append(g(this, t, n, e))
                }) : 0 in this ? this[0].innerHTML: null
            },
            text: function(t) {
                return 0 in arguments ? this.each(function(n) {
                    var e = g(this, t, n, this.textContent);
                    this.textContent = null == e ? "": "" + e
                }) : 0 in this ? this[0].textContent: null
            },
            attr: function(t, n) {
                var e;
                return "string" != typeof t || 1 in arguments ? this.each(function(e) {
                    if (1 === this.nodeType) if (r(t)) for (N in t) v(this, N, t[N]);
                    else v(this, t, g(this, n, e, this.getAttribute(t)))
                }) : this.length && 1 === this[0].nodeType ? !(e = this[0].getAttribute(t)) && t in this[0] ? this[0][t] : e: E
            },
            removeAttr: function(t) {
                return this.each(function() {
                    1 === this.nodeType && t.split(" ").forEach(function(t) {
                        v(this, t)
                    },
                    this)
                })
            },
            prop: function(t, n) {
                return t = Y[t] || t,
                1 in arguments ? this.each(function(e) {
                    this[t] = g(this, n, e, this[t])
                }) : this[0] && this[0][t]
            },
            data: function(t, n) {
                var e = "data-" + t.replace(B, "-$1").toLowerCase(),
                i = 1 in arguments ? this.attr(e, n) : this.attr(e);
                return null !== i ? b(i) : E
            },
            val: function(t) {
                return 0 in arguments ? this.each(function(n) {
                    this.value = g(this, t, n, this.value)
                }) : this[0] && (this[0].multiple ? x(this[0]).find("option").filter(function() {
                    return this.selected
                }).pluck("value") : this[0].value)
            },
            offset: function(t) {
                if (t) return this.each(function(n) {
                    var e = x(this),
                    i = g(this, t, n, e.offset()),
                    r = e.offsetParent().offset(),
                    o = {
                        top: i.top - r.top,
                        left: i.left - r.left
                    };
                    "static" == e.css("position") && (o.position = "relative"),
                    e.css(o)
                });
                if (!this.length) return null;
                var n = this[0].getBoundingClientRect();
                return {
                    left: n.left + window.pageXOffset,
                    top: n.top + window.pageYOffset,
                    width: Math.round(n.width),
                    height: Math.round(n.height)
                }
            },
            css: function(n, e) {
                if (arguments.length < 2) {
                    var i, r = this[0];
                    if (!r) return;
                    if (i = getComputedStyle(r, ""), "string" == typeof n) return r.style[O(n)] || i.getPropertyValue(n);
                    if (G(n)) {
                        var o = {};
                        return x.each(n,
                        function(t, n) {
                            o[n] = r.style[O(n)] || i.getPropertyValue(n)
                        }),
                        o
                    }
                }
                var s = "";
                if ("string" == t(n)) e || 0 === e ? s = a(n) + ":" + f(n, e) : this.each(function() {
                    this.style.removeProperty(a(n))
                });
                else for (N in n) n[N] || 0 === n[N] ? s += a(N) + ":" + f(N, n[N]) + ";": this.each(function() {
                    this.style.removeProperty(a(N))
                });
                return this.each(function() {
                    this.style.cssText += ";" + s
                })
            },
            index: function(t) {
                return t ? this.indexOf(x(t)[0]) : this.parent().children().indexOf(this[0])
            },
            hasClass: function(t) {
                return t ? T.some.call(this,
                function(t) {
                    return this.test(y(t))
                },
                l(t)) : !1
            },
            addClass: function(t) {
                return t ? this.each(function(n) {
                    if ("className" in this) {
                        C = [];
                        var e = y(this),
                        i = g(this, t, n, e);
                        i.split(/\s+/g).forEach(function(t) {
                            x(this).hasClass(t) || C.push(t)
                        },
                        this),
                        C.length && y(this, e + (e ? " ": "") + C.join(" "))
                    }
                }) : this
            },
            removeClass: function(t) {
                return this.each(function(n) {
                    if ("className" in this) {
                        if (t === E) return y(this, "");
                        C = y(this),
                        g(this, t, n, C).split(/\s+/g).forEach(function(t) {
                            C = C.replace(l(t), " ")
                        }),
                        y(this, C.trim())
                    }
                })
            },
            toggleClass: function(t, n) {
                return t ? this.each(function(e) {
                    var i = x(this),
                    r = g(this, t, e, y(this));
                    r.split(/\s+/g).forEach(function(t) { (n === E ? !i.hasClass(t) : n) ? i.addClass(t) : i.removeClass(t)
                    })
                }) : this
            },
            scrollTop: function(t) {
                if (this.length) {
                    var n = "scrollTop" in this[0];
                    return t === E ? n ? this[0].scrollTop: this[0].pageYOffset: this.each(n ?
                    function() {
                        this.scrollTop = t
                    }: function() {
                        this.scrollTo(this.scrollX, t)
                    })
                }
            },
            scrollLeft: function(t) {
                if (this.length) {
                    var n = "scrollLeft" in this[0];
                    return t === E ? n ? this[0].scrollLeft: this[0].pageXOffset: this.each(n ?
                    function() {
                        this.scrollLeft = t
                    }: function() {
                        this.scrollTo(t, this.scrollY)
                    })
                }
            },
            position: function() {
                if (this.length) {
                    var t = this[0],
                    n = this.offsetParent(),
                    e = this.offset(),
                    i = k.test(n[0].nodeName) ? {
                        top: 0,
                        left: 0
                    }: n.offset();
                    return e.top -= parseFloat(x(t).css("margin-top")) || 0,
                    e.left -= parseFloat(x(t).css("margin-left")) || 0,
                    i.top += parseFloat(x(n[0]).css("border-top-width")) || 0,
                    i.left += parseFloat(x(n[0]).css("border-left-width")) || 0,
                    {
                        top: e.top - i.top,
                        left: e.left - i.left
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var t = this.offsetParent || L.body; t && !k.test(t.nodeName) && "static" == x(t).css("position");) t = t.offsetParent;
                    return t
                })
            }
        },
        x.fn.detach = x.fn.remove,
        ["width", "height"].forEach(function(t) {
            var n = t.replace(/./,
            function(t) {
                return t[0].toUpperCase()
            });
            x.fn[t] = function(r) {
                var o, s = this[0];
                return r === E ? e(s) ? s["inner" + n] : i(s) ? s.documentElement["scroll" + n] : (o = this.offset()) && o[t] : this.each(function(n) {
                    s = x(this),
                    s.css(t, g(this, r, n, s[t]()))
                })
            }
        }),
        V.forEach(function(n, e) {
            var i = e % 2;
            x.fn[n] = function() {
                var n, r, o = x.map(arguments,
                function(e) {
                    return n = t(e),
                    "object" == n || "array" == n || null == e ? e: W.fragment(e)
                }),
                s = this.length > 1;
                return o.length < 1 ? this: this.each(function(t, n) {
                    r = i ? n: n.parentNode,
                    n = 0 == e ? n.nextSibling: 1 == e ? n.firstChild: 2 == e ? n: null;
                    var c = x.contains(L.documentElement, r);
                    o.forEach(function(t) {
                        if (s) t = t.cloneNode(!0);
                        else if (!r) return x(t).remove();
                        r.insertBefore(t, n),
                        c && w(t,
                        function(t) {
                            null == t.nodeName || "SCRIPT" !== t.nodeName.toUpperCase() || t.type && "text/javascript" !== t.type || t.src || window.eval.call(window, t.innerHTML)
                        })
                    })
                })
            },
            x.fn[i ? n + "To": "insert" + (e ? "Before": "After")] = function(t) {
                return x(t)[n](this),
                this
            }
        }),
        W.Z.prototype = x.fn,
        W.uniq = S,
        W.deserializeValue = b,
        x.zepto = W,
        x
    } ();
    window.Zepto = i,
    void 0 === window.$ && (window.$ = i),
    e.exports = i
});;
/*!cn:components/zepto/event.js*/
define("cn:components/zepto/event",
function(n, e, t) {
    var r = n("cn:components/zepto/zepto"); !
    function(n) {
        function e(n) {
            return n._zid || (n._zid = l++)
        }
        function t(n, t, i, u) {
            if (t = r(t), t.ns) var a = o(t.ns);
            return (g[e(n)] || []).filter(function(n) {
                return ! (!n || t.e && n.e != t.e || t.ns && !a.test(n.ns) || i && e(n.fn) !== e(i) || u && n.sel != u)
            })
        }
        function r(n) {
            var e = ("" + n).split(".");
            return {
                e: e[0],
                ns: e.slice(1).sort().join(" ")
            }
        }
        function o(n) {
            return new RegExp("(?:^| )" + n.replace(" ", " .* ?") + "(?: |$)")
        }
        function i(n, e) {
            return n.del && !y && n.e in E || !!e
        }
        function u(n) {
            return P[n] || y && E[n] || n
        }
        function a(t, o, a, s, f, l, d) {
            var v = e(t),
            h = g[v] || (g[v] = []);
            o.split(/\s/).forEach(function(e) {
                if ("ready" == e) return n(document).ready(a);
                var o = r(e);
                o.fn = a,
                o.sel = f,
                o.e in P && (a = function(e) {
                    var t = e.relatedTarget;
                    return ! t || t !== this && !n.contains(this, t) ? o.fn.apply(this, arguments) : void 0
                }),
                o.del = l;
                var v = l || a;
                o.proxy = function(n) {
                    if (n = c(n), !n.isImmediatePropagationStopped()) {
                        n.data = s;
                        var e = v.apply(t, n._args == p ? [n] : [n].concat(n._args));
                        return e === !1 && (n.preventDefault(), n.stopPropagation()),
                        e
                    }
                },
                o.i = h.length,
                h.push(o),
                "addEventListener" in t && t.addEventListener(u(o.e), o.proxy, i(o, d))
            })
        }
        function s(n, r, o, a, s) {
            var c = e(n); (r || "").split(/\s/).forEach(function(e) {
                t(n, e, o, a).forEach(function(e) {
                    delete g[c][e.i],
                    "removeEventListener" in n && n.removeEventListener(u(e.e), e.proxy, i(e, s))
                })
            })
        }
        function c(e, t) {
            return (t || !e.isDefaultPrevented) && (t || (t = e), n.each(z,
            function(n, r) {
                var o = t[n];
                e[n] = function() {
                    return this[r] = b,
                    o && o.apply(t, arguments)
                },
                e[r] = x
            }), (t.defaultPrevented !== p ? t.defaultPrevented: "returnValue" in t ? t.returnValue === !1 : t.getPreventDefault && t.getPreventDefault()) && (e.isDefaultPrevented = b)),
            e
        }
        function f(n) {
            var e, t = {
                originalEvent: n
            };
            for (e in n) w.test(e) || n[e] === p || (t[e] = n[e]);
            return c(t, n)
        }
        var p, l = 1,
        d = Array.prototype.slice,
        v = n.isFunction,
        h = function(n) {
            return "string" == typeof n
        },
        g = {},
        m = {},
        y = "onfocusin" in window,
        E = {
            focus: "focusin",
            blur: "focusout"
        },
        P = {
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        };
        m.click = m.mousedown = m.mouseup = m.mousemove = "MouseEvents",
        n.event = {
            add: a,
            remove: s
        },
        n.proxy = function(t, r) {
            var o = 2 in arguments && d.call(arguments, 2);
            if (v(t)) {
                var i = function() {
                    return t.apply(r, o ? o.concat(d.call(arguments)) : arguments)
                };
                return i._zid = e(t),
                i
            }
            if (h(r)) return o ? (o.unshift(t[r], t), n.proxy.apply(null, o)) : n.proxy(t[r], t);
            throw new TypeError("expected function")
        },
        n.fn.bind = function(n, e, t) {
            return this.on(n, e, t)
        },
        n.fn.unbind = function(n, e) {
            return this.off(n, e)
        },
        n.fn.one = function(n, e, t, r) {
            return this.on(n, e, t, r, 1)
        };
        var b = function() {
            return ! 0
        },
        x = function() {
            return ! 1
        },
        w = /^([A-Z]|returnValue$|layer[XY]$)/,
        z = {
            preventDefault: "isDefaultPrevented",
            stopImmediatePropagation: "isImmediatePropagationStopped",
            stopPropagation: "isPropagationStopped"
        };
        n.fn.delegate = function(n, e, t) {
            return this.on(e, n, t)
        },
        n.fn.undelegate = function(n, e, t) {
            return this.off(e, n, t)
        },
        n.fn.live = function(e, t) {
            return n(document.body).delegate(this.selector, e, t),
            this
        },
        n.fn.die = function(e, t) {
            return n(document.body).undelegate(this.selector, e, t),
            this
        },
        n.fn.on = function(e, t, r, o, i) {
            var u, c, l = this;
            return e && !h(e) ? (n.each(e,
            function(n, e) {
                l.on(n, t, r, e, i)
            }), l) : (h(t) || v(o) || o === !1 || (o = r, r = t, t = p), (v(r) || r === !1) && (o = r, r = p), o === !1 && (o = x), l.each(function(p, l) {
                i && (u = function(n) {
                    return s(l, n.type, o),
                    o.apply(this, arguments)
                }),
                t && (c = function(e) {
                    var r, i = n(e.target).closest(t, l).get(0);
                    return i && i !== l ? (r = n.extend(f(e), {
                        currentTarget: i,
                        liveFired: l
                    }), (u || o).apply(i, [r].concat(d.call(arguments, 1)))) : void 0
                }),
                a(l, e, o, r, t, c || u)
            }))
        },
        n.fn.off = function(e, t, r) {
            var o = this;
            return e && !h(e) ? (n.each(e,
            function(n, e) {
                o.off(n, t, e)
            }), o) : (h(t) || v(r) || r === !1 || (r = t, t = p), r === !1 && (r = x), o.each(function() {
                s(this, e, r, t)
            }))
        },
        n.fn.trigger = function(e, t) {
            return e = h(e) || n.isPlainObject(e) ? n.Event(e) : c(e),
            e._args = t,
            this.each(function() {
                e.type in E && "function" == typeof this[e.type] ? this[e.type]() : "dispatchEvent" in this ? this.dispatchEvent(e) : n(this).triggerHandler(e, t)
            })
        },
        n.fn.triggerHandler = function(e, r) {
            var o, i;
            return this.each(function(u, a) {
                o = f(h(e) ? n.Event(e) : e),
                o._args = r,
                o.target = a,
                n.each(t(a, e.type || e),
                function(n, e) {
                    return i = e.proxy(o),
                    o.isImmediatePropagationStopped() ? !1 : void 0
                })
            }),
            i
        },
        "focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e) {
            n.fn[e] = function(n) {
                return 0 in arguments ? this.bind(e, n) : this.trigger(e)
            }
        }),
        n.Event = function(n, e) {
            h(n) || (e = n, n = e.type);
            var t = document.createEvent(m[n] || "Events"),
            r = !0;
            if (e) for (var o in e)"bubbles" == o ? r = !!e[o] : t[o] = e[o];
            return t.initEvent(n, r, !0),
            c(t)
        }
    } (r),
    t.exports = r
});;
/*!cn:components/zepto/ajax.js*/
define("cn:components/zepto/ajax",
function(t, e, a) {
    var n = t("cn:components/zepto/zepto"); !
    function(t) {
        function e(e, a, n) {
            var r = t.Event(a);
            return t(e).trigger(r, n),
            !r.isDefaultPrevented()
        }
        function a(t, a, n, r) {
            return t.global ? e(a || j, n, r) : void 0
        }
        function n(e) {
            e.global && 0 === t.active++&&a(e, null, "ajaxStart")
        }
        function r(e) {
            e.global && !--t.active && a(e, null, "ajaxStop")
        }
        function o(t, e) {
            var n = e.context;
            return e.beforeSend.call(n, t, e) === !1 || a(e, n, "ajaxBeforeSend", [t, e]) === !1 ? !1 : void a(e, n, "ajaxSend", [t, e])
        }
        function i(t, e, n, r) {
            var o = n.context,
            i = "success";
            n.success.call(o, t, i, e),
            r && r.resolveWith(o, [t, i, e]),
            a(n, o, "ajaxSuccess", [e, n, t]),
            c(i, e, n)
        }
        function s(t, e, n, r, o) {
            var i = r.context;
            r.error.call(i, n, e, t),
            o && o.rejectWith(i, [n, e, t]),
            a(r, i, "ajaxError", [n, r, t || e]),
            c(e, n, r)
        }
        function c(t, e, n) {
            var o = n.context;
            n.complete.call(o, e, t),
            a(n, o, "ajaxComplete", [e, n]),
            r(n)
        }
        function u() {}
        function l(t) {
            return t && (t = t.split(";", 2)[0]),
            t && (t == b ? "html": t == T ? "json": g.test(t) ? "script": w.test(t) && "xml") || "text"
        }
        function p(t, e) {
            return "" == e ? t: (t + "&" + e).replace(/[&?]{1,2}/, "?")
        }
        function d(e) {
            e.processData && e.data && "string" != t.type(e.data) && (e.data = t.param(e.data, e.traditional)),
            !e.data || e.type && "GET" != e.type.toUpperCase() || (e.url = p(e.url, e.data), e.data = void 0)
        }
        function f(e, a, n, r) {
            return t.isFunction(a) && (r = n, n = a, a = void 0),
            t.isFunction(n) || (r = n, n = void 0),
            {
                url: e,
                data: a,
                success: n,
                dataType: r
            }
        }
        function m(e, a, n, r) {
            var o, i = t.isArray(a),
            s = t.isPlainObject(a);
            t.each(a,
            function(a, c) {
                o = t.type(c),
                r && (a = n ? r: r + "[" + (s || "object" == o || "array" == o ? a: "") + "]"),
                !r && i ? e.add(c.name, c.value) : "array" == o || !n && "object" == o ? m(e, c, n, a) : e.add(a, c)
            })
        }
        var x, v, h = 0,
        j = window.document,
        y = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        g = /^(?:text|application)\/javascript/i,
        w = /^(?:text|application)\/xml/i,
        T = "application/json",
        b = "text/html",
        S = /^\s*$/,
        D = j.createElement("a");
        D.href = window.location.href,
        t.active = 0,
        t.ajaxJSONP = function(e, a) {
            if (! ("type" in e)) return t.ajax(e);
            var n, r, c = e.jsonpCallback,
            u = (t.isFunction(c) ? c() : c) || "jsonp" + ++h,
            l = j.createElement("script"),
            p = window[u],
            d = function(e) {
                t(l).triggerHandler("error", e || "abort")
            },
            f = {
                abort: d
            };
            return a && a.promise(f),
            t(l).on("load error",
            function(o, c) {
                clearTimeout(r),
                t(l).off().remove(),
                "error" != o.type && n ? i(n[0], f, e, a) : s(null, c || "error", f, e, a),
                window[u] = p,
                n && t.isFunction(p) && p(n[0]),
                p = n = void 0
            }),
            o(f, e) === !1 ? (d("abort"), f) : (window[u] = function() {
                n = arguments
            },
            l.src = e.url.replace(/\?(.+)=\?/, "?$1=" + u), j.head.appendChild(l), e.timeout > 0 && (r = setTimeout(function() {
                d("timeout")
            },
            e.timeout)), f)
        },
        t.ajaxSettings = {
            type: "GET",
            beforeSend: u,
            success: u,
            error: u,
            complete: u,
            context: null,
            global: !0,
            xhr: function() {
                return new window.XMLHttpRequest
            },
            accepts: {
                script: "text/javascript, application/javascript, application/x-javascript",
                json: T,
                xml: "application/xml, text/xml",
                html: b,
                text: "text/plain"
            },
            crossDomain: !1,
            timeout: 0,
            processData: !0,
            cache: !0
        },
        t.ajax = function(e) {
            var a, r = t.extend({},
            e || {}),
            c = t.Deferred && t.Deferred();
            for (x in t.ajaxSettings) void 0 === r[x] && (r[x] = t.ajaxSettings[x]);
            n(r),
            r.crossDomain || (a = j.createElement("a"), a.href = r.url, a.href = a.href, r.crossDomain = D.protocol + "//" + D.host != a.protocol + "//" + a.host),
            r.url || (r.url = window.location.toString()),
            d(r);
            var f = r.dataType,
            m = /\?.+=\?/.test(r.url);
            if (m && (f = "jsonp"), r.cache !== !1 && (e && e.cache === !0 || "script" != f && "jsonp" != f) || (r.url = p(r.url, "_=" + Date.now())), "jsonp" == f) return m || (r.url = p(r.url, r.jsonp ? r.jsonp + "=?": r.jsonp === !1 ? "": "callback=?")),
            t.ajaxJSONP(r, c);
            var h, y = r.accepts[f],
            g = {},
            w = function(t, e) {
                g[t.toLowerCase()] = [t, e]
            },
            T = /^([\w-]+:)\/\//.test(r.url) ? RegExp.$1: window.location.protocol,
            b = r.xhr(),
            E = b.setRequestHeader;
            if (c && c.promise(b), r.crossDomain || w("X-Requested-With", "XMLHttpRequest"), w("Accept", y || "*/*"), (y = r.mimeType || y) && (y.indexOf(",") > -1 && (y = y.split(",", 2)[0]), b.overrideMimeType && b.overrideMimeType(y)), (r.contentType || r.contentType !== !1 && r.data && "GET" != r.type.toUpperCase()) && w("Content-Type", r.contentType || "application/x-www-form-urlencoded"), r.headers) for (v in r.headers) w(v, r.headers[v]);
            if (b.setRequestHeader = w, b.onreadystatechange = function() {
                if (4 == b.readyState) {
                    b.onreadystatechange = u,
                    clearTimeout(h);
                    var e, a = !1;
                    if (b.status >= 200 && b.status < 300 || 304 == b.status || 0 == b.status && "file:" == T) {
                        f = f || l(r.mimeType || b.getResponseHeader("content-type")),
                        e = b.responseText;
                        try {
                            "script" == f ? (1, eval)(e) : "xml" == f ? e = b.responseXML: "json" == f && (e = S.test(e) ? null: t.parseJSON(e))
                        } catch(n) {
                            a = n
                        }
                        a ? s(a, "parsererror", b, r, c) : i(e, b, r, c)
                    } else s(b.statusText || null, b.status ? "error": "abort", b, r, c)
                }
            },
            o(b, r) === !1) return b.abort(),
            s(null, "abort", b, r, c),
            b;
            if (r.xhrFields) for (v in r.xhrFields) b[v] = r.xhrFields[v];
            var C = "async" in r ? r.async: !0;
            b.open(r.type, r.url, C, r.username, r.password);
            for (v in g) E.apply(b, g[v]);
            return r.timeout > 0 && (h = setTimeout(function() {
                b.onreadystatechange = u,
                b.abort(),
                s(null, "timeout", b, r, c)
            },
            r.timeout)),
            b.send(r.data ? r.data: null),
            b
        },
        t.get = function() {
            return t.ajax(f.apply(null, arguments))
        },
        t.post = function() {
            var e = f.apply(null, arguments);
            return e.type = "POST",
            t.ajax(e)
        },
        t.getJSON = function() {
            var e = f.apply(null, arguments);
            return e.dataType = "json",
            t.ajax(e)
        },
        t.fn.load = function(e, a, n) {
            if (!this.length) return this;
            var r, o = this,
            i = e.split(/\s/),
            s = f(e, a, n),
            c = s.success;
            return i.length > 1 && (s.url = i[0], r = i[1]),
            s.success = function(e) {
                o.html(r ? t("<div>").html(e.replace(y, "")).find(r) : e),
                c && c.apply(o, arguments)
            },
            t.ajax(s),
            this
        };
        var E = encodeURIComponent;
        t.param = function(e, a) {
            var n = [];
            return n.add = function(e, a) {
                t.isFunction(a) && (a = a()),
                null == a && (a = ""),
                this.push(E(e) + "=" + E(a))
            },
            m(n, e, a),
            n.join("&").replace(/%20/g, "+")
        }
    } (n),
    a.exports = n
});;
/*!cn:components/zepto/form.js*/
define("cn:components/zepto/form",
function(e, n, t) {
    var i = e("cn:components/zepto/zepto"); !
    function(e) {
        e.fn.serializeArray = function() {
            var n, t, i = [],
            o = function(e) {
                return e.forEach ? e.forEach(o) : void i.push({
                    name: n,
                    value: e
                })
            };
            return this[0] && e.each(this[0].elements,
            function(i, r) {
                t = r.type,
                n = r.name,
                n && "fieldset" != r.nodeName.toLowerCase() && !r.disabled && "submit" != t && "reset" != t && "button" != t && "file" != t && ("radio" != t && "checkbox" != t || r.checked) && o(e(r).val())
            }),
            i
        },
        e.fn.serialize = function() {
            var e = [];
            return this.serializeArray().forEach(function(n) {
                e.push(encodeURIComponent(n.name) + "=" + encodeURIComponent(n.value))
            }),
            e.join("&")
        },
        e.fn.submit = function(n) {
            if (0 in arguments) this.bind("submit", n);
            else if (this.length) {
                var t = e.Event("submit");
                this.eq(0).trigger(t),
                t.isDefaultPrevented() || this.get(0).submit()
            }
            return this
        }
    } (i),
    t.exports = i
});;
/*!cn:components/zepto/ie.js*/
define("cn:components/zepto/ie",
function(t, e, n) {
    var o = t("cn:components/zepto/zepto"); !
    function(t) {
        "__proto__" in {} || t.extend(t.zepto, {
            Z: function(e, n) {
                return e = e || [],
                t.extend(e, t.fn),
                e.selector = n || "",
                e.__Z = !0,
                e
            },
            isZ: function(e) {
                return "array" === t.type(e) && "__Z" in e
            }
        });
        try {
            getComputedStyle(void 0)
        } catch(e) {
            var n = getComputedStyle;
            window.getComputedStyle = function(t) {
                try {
                    return n(t)
                } catch(e) {
                    return null
                }
            }
        }
    } (o),
    n.exports = o
});;
/*!cn:components/zepto/scrollToTop.js*/
define("cn:components/zepto/scrollToTop",
function(o, t, n) { !
    function(o) {
        var t = !1;
        o.fn.scrollToTop = function(o) {
            function n(o) {
                return (o /= .5) < 1 ? .5 * Math.pow(o, 5) : .5 * (Math.pow(o - 2, 5) + 2)
            }
            function i() {
                r.off("touchstart", w),
                t = !1
            }
            var a, e, c, r = this,
            u = o || 0,
            s = r.scrollTop(),
            m = s,
            f = u - s,
            h = Math.min(750, Math.min(1500, Math.abs(s - u))),
            p = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame ||
            function(o) {
                setTimeout(o, 15)
            },
            w = function() {
                i()
            };
            t || 0 != f && (r.on("touchstart", w), t = !0, p(function l(o) {
                t && (a || (a = o), e = Math.min(1, Math.max((o - a) / h, 0)), c = Math.round(s + f * n(e)), f > 0 && c > u && (c = u), 0 > f && u > c && (c = u), m != c && r.scrollTop(c), m = c, c !== u ? p(l) : i())
            }))
        }
    } (Zepto),
    n.exports = Zepto
});;
/*!cn:components/zepto/touch.js*/
define("cn:components/zepto/touch",
function(e, t, n) {
    var o = e("cn:components/zepto/zepto"); !
    function(e) {
        function t(e, t, n, o) {
            return Math.abs(e - t) >= Math.abs(n - o) ? e - t > 0 ? "Left": "Right": n - o > 0 ? "Up": "Down"
        }
        function n() {
            p = null,
            g.last && (g.el.trigger("longTap"), g = {})
        }
        function o() {
            p && clearTimeout(p),
            p = null
        }
        function i() {
            a && clearTimeout(a),
            c && clearTimeout(c),
            l && clearTimeout(l),
            p && clearTimeout(p),
            a = c = l = p = null,
            g = {}
        }
        function r(e) {
            return ("touch" == e.pointerType || e.pointerType == e.MSPOINTER_TYPE_TOUCH) && e.isPrimary
        }
        function u(e, t) {
            return e.type == "pointer" + t || e.type.toLowerCase() == "mspointer" + t
        }
        var a, c, l, p, s, g = {},
        f = 750;
        e(document).ready(function() {
            var T, h, w, d, m = 0,
            y = 0;
            "MSGesture" in window && (s = new MSGesture, s.target = document.body),
            e(document).bind("MSGestureEnd",
            function(e) {
                var t = e.velocityX > 1 ? "Right": e.velocityX < -1 ? "Left": e.velocityY > 1 ? "Down": e.velocityY < -1 ? "Up": null;
                t && (g.el.trigger("swipe"), g.el.trigger("swipe" + t))
            }).on("touchstart MSPointerDown pointerdown",
            function(t) { (!(d = u(t, "down")) || r(t)) && (w = d ? t: t.touches[0], t.touches && 1 === t.touches.length && g.x2 && (g.x2 = void 0, g.y2 = void 0), T = Date.now(), h = T - (g.last || T), g.el = e("tagName" in w.target ? w.target: w.target.parentNode), a && clearTimeout(a), g.x1 = w.pageX, g.y1 = w.pageY, h > 0 && 250 >= h && (g.isDoubleTap = !0), g.last = T, p = setTimeout(n, f), s && d && s.addPointer(t.pointerId))
            }).on("touchmove MSPointerMove pointermove",
            function(e) { (!(d = u(e, "move")) || r(e)) && (w = d ? e: e.touches[0], o(), g.x2 = w.pageX, g.y2 = w.pageY, m += Math.abs(g.x1 - g.x2), y += Math.abs(g.y1 - g.y2))
            }).on("touchend MSPointerUp pointerup",
            function(n) { (!(d = u(n, "up")) || r(n)) && (o(), g.x2 && Math.abs(g.x1 - g.x2) > 30 || g.y2 && Math.abs(g.y1 - g.y2) > 30 ? l = setTimeout(function() {
                    g.el.trigger("swipe"),
                    g.el.trigger("swipe" + t(g.x1, g.x2, g.y1, g.y2)),
                    g = {}
                },
                0) : "last" in g && (30 > m && 30 > y ? c = setTimeout(function() {
                    var t = e.Event("tap");
                    t.cancelTouch = i,
                    g.el.trigger(t),
                    g.isDoubleTap ? (g.el && g.el.trigger("doubleTap"), g = {}) : a = setTimeout(function() {
                        a = null,
                        g.el && g.el.trigger("singleTap"),
                        g = {}
                    },
                    250)
                },
                0) : g = {}), m = y = 0)
            }).on("touchcancel MSPointerCancel pointercancel", i),
            e(window).on("scroll", i)
        }),
        ["swipe", "swipeLeft", "swipeRight", "swipeUp", "swipeDown", "doubleTap", "tap", "singleTap", "longTap"].forEach(function(t) {
            e.fn[t] = function(e) {
                return this.on(t, e)
            }
        })
    } (o),
    n.exports = o
});;
/*!cn:components/zepto/main.js*/
define("cn:components/zepto/main",
function(n, o, e) {
    n("cn:components/zepto/event"),
    n("cn:components/zepto/ajax"),
    n("cn:components/zepto/form"),
    n("cn:components/zepto/ie"),
    n("cn:components/zepto/touch"),
    e.exports = n("cn:components/zepto/zepto")
});;
/*!cn:components/swiper/swiper.js*/
define("cn:components/swiper/swiper",
function(e, a, t) { !
    function() {
        "use strict";
        function e(e) {
            e.fn.swiper = function(a) {
                var r;
                return e(this).each(function() {
                    var e = new t(this, a);
                    r || (r = e)
                }),
                r
            }
        }
        var a, t = function(e, s) {
            function i() {
                return "horizontal" === w.params.direction
            }
            function n(e) {
                return Math.floor(e)
            }
            function o() {
                w.autoplayTimeoutId = setTimeout(function() {
                    w.params.loop ? (w.fixLoop(), w._slideNext()) : w.isEnd ? s.autoplayStopOnLast ? w.stopAutoplay() : w._slideTo(0) : w._slideNext()
                },
                w.params.autoplay)
            }
            function l(e, t) {
                var r = a(e.target);
                if (!r.is(t)) if ("string" == typeof t) r = r.parents(t);
                else if (t.nodeType) {
                    var s;
                    return r.parents().each(function(e, a) {
                        a === t && (s = t)
                    }),
                    s ? t: void 0
                }
                return 0 === r.length ? void 0 : r[0]
            }
            function d(e, a) {
                a = a || {};
                var t = window.MutationObserver || window.WebkitMutationObserver,
                r = new t(function(e) {
                    e.forEach(function(e) {
                        w.onResize(!0),
                        w.emit("onObserverUpdate", w, e)
                    })
                });
                r.observe(e, {
                    attributes: "undefined" == typeof a.attributes ? !0 : a.attributes,
                    childList: "undefined" == typeof a.childList ? !0 : a.childList,
                    characterData: "undefined" == typeof a.characterData ? !0 : a.characterData
                }),
                w.observers.push(r)
            }
            function p(e) {
                e.originalEvent && (e = e.originalEvent);
                var a = e.keyCode || e.charCode;
                if (!w.params.allowSwipeToNext && (i() && 39 === a || !i() && 40 === a)) return ! 1;
                if (!w.params.allowSwipeToPrev && (i() && 37 === a || !i() && 38 === a)) return ! 1;
                if (! (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey || document.activeElement && document.activeElement.nodeName && ("input" === document.activeElement.nodeName.toLowerCase() || "textarea" === document.activeElement.nodeName.toLowerCase()))) {
                    if (37 === a || 39 === a || 38 === a || 40 === a) {
                        var t = !1;
                        if (w.container.parents(".swiper-slide").length > 0 && 0 === w.container.parents(".swiper-slide-active").length) return;
                        var r = {
                            left: window.pageXOffset,
                            top: window.pageYOffset
                        },
                        s = window.innerWidth,
                        n = window.innerHeight,
                        o = w.container.offset();
                        w.rtl && (o.left = o.left - w.container[0].scrollLeft);
                        for (var l = [[o.left, o.top], [o.left + w.width, o.top], [o.left, o.top + w.height], [o.left + w.width, o.top + w.height]], d = 0; d < l.length; d++) {
                            var p = l[d];
                            p[0] >= r.left && p[0] <= r.left + s && p[1] >= r.top && p[1] <= r.top + n && (t = !0)
                        }
                        if (!t) return
                    }
                    i() ? ((37 === a || 39 === a) && (e.preventDefault ? e.preventDefault() : e.returnValue = !1), (39 === a && !w.rtl || 37 === a && w.rtl) && w.slideNext(), (37 === a && !w.rtl || 39 === a && w.rtl) && w.slidePrev()) : ((38 === a || 40 === a) && (e.preventDefault ? e.preventDefault() : e.returnValue = !1), 40 === a && w.slideNext(), 38 === a && w.slidePrev())
                }
            }
            function u(e) {
                e.originalEvent && (e = e.originalEvent);
                var a = w.mousewheel.event,
                t = 0;
                if (e.detail) t = -e.detail;
                else if ("mousewheel" === a) if (w.params.mousewheelForceToAxis) if (i()) {
                    if (! (Math.abs(e.wheelDeltaX) > Math.abs(e.wheelDeltaY))) return;
                    t = e.wheelDeltaX
                } else {
                    if (! (Math.abs(e.wheelDeltaY) > Math.abs(e.wheelDeltaX))) return;
                    t = e.wheelDeltaY
                } else t = e.wheelDelta;
                else if ("DOMMouseScroll" === a) t = -e.detail;
                else if ("wheel" === a) if (w.params.mousewheelForceToAxis) if (i()) {
                    if (! (Math.abs(e.deltaX) > Math.abs(e.deltaY))) return;
                    t = -e.deltaX
                } else {
                    if (! (Math.abs(e.deltaY) > Math.abs(e.deltaX))) return;
                    t = -e.deltaY
                } else t = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? -e.deltaX: -e.deltaY;
                if (w.params.mousewheelInvert && (t = -t), w.params.freeMode) {
                    var r = w.getWrapperTranslate() + t;
                    if (r > 0 && (r = 0), r < w.maxTranslate() && (r = w.maxTranslate()), w.setWrapperTransition(0), w.setWrapperTranslate(r), w.updateProgress(), w.updateActiveIndex(), w.params.freeModeSticky && (clearTimeout(w.mousewheel.timeout), w.mousewheel.timeout = setTimeout(function() {
                        w.slideReset()
                    },
                    300)), 0 === r || r === w.maxTranslate()) return
                } else {
                    if ((new window.Date).getTime() - w.mousewheel.lastScrollTime > 60) if (0 > t) if (w.isEnd) {
                        if (w.params.mousewheelReleaseOnEdges) return ! 0
                    } else w.slideNext();
                    else if (w.isBeginning) {
                        if (w.params.mousewheelReleaseOnEdges) return ! 0
                    } else w.slidePrev();
                    w.mousewheel.lastScrollTime = (new window.Date).getTime()
                }
                return w.params.autoplay && w.stopAutoplay(),
                e.preventDefault ? e.preventDefault() : e.returnValue = !1,
                !1
            }
            function c(e, t) {
                e = a(e);
                var r, s, n;
                r = e.attr("data-swiper-parallax") || "0",
                s = e.attr("data-swiper-parallax-x"),
                n = e.attr("data-swiper-parallax-y"),
                s || n ? (s = s || "0", n = n || "0") : i() ? (s = r, n = "0") : (n = r, s = "0"),
                s = s.indexOf("%") >= 0 ? parseInt(s, 10) * t + "%": s * t + "px",
                n = n.indexOf("%") >= 0 ? parseInt(n, 10) * t + "%": n * t + "px",
                e.transform("translate3d(" + s + ", " + n + ",0px)")
            }
            function m(e) {
                return 0 !== e.indexOf("on") && (e = e[0] !== e[0].toUpperCase() ? "on" + e[0].toUpperCase() + e.substring(1) : "on" + e),
                e
            }
            if (! (this instanceof t)) return new t(e, s);
            var f = {
                direction: "horizontal",
                touchEventsTarget: "container",
                initialSlide: 0,
                speed: 300,
                autoplay: !1,
                autoplayDisableOnInteraction: !0,
                freeMode: !1,
                freeModeMomentum: !0,
                freeModeMomentumRatio: 1,
                freeModeMomentumBounce: !0,
                freeModeMomentumBounceRatio: 1,
                freeModeSticky: !1,
                setWrapperSize: !1,
                virtualTranslate: !1,
                effect: "slide",
                coverflow: {
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: !0
                },
                cube: {
                    slideShadows: !0,
                    shadow: !0,
                    shadowOffset: 20,
                    shadowScale: .94
                },
                fade: {
                    crossFade: !1
                },
                parallax: !1,
                scrollbar: null,
                scrollbarHide: !0,
                keyboardControl: !1,
                mousewheelControl: !1,
                mousewheelReleaseOnEdges: !1,
                mousewheelInvert: !1,
                mousewheelForceToAxis: !1,
                hashnav: !1,
                spaceBetween: 0,
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerColumnFill: "column",
                slidesPerGroup: 1,
                centeredSlides: !1,
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
                roundLengths: !1,
                touchRatio: 1,
                touchAngle: 45,
                simulateTouch: !0,
                shortSwipes: !0,
                longSwipes: !0,
                longSwipesRatio: .5,
                longSwipesMs: 300,
                followFinger: !0,
                onlyExternal: !1,
                threshold: 0,
                touchMoveStopPropagation: !0,
                pagination: null,
                paginationElement: "span",
                paginationClickable: !1,
                paginationHide: !1,
                paginationBulletRender: null,
                resistance: !0,
                resistanceRatio: .85,
                nextButton: null,
                prevButton: null,
                watchSlidesProgress: !1,
                watchSlidesVisibility: !1,
                grabCursor: !1,
                preventClicks: !0,
                preventClicksPropagation: !0,
                slideToClickedSlide: !1,
                lazyLoading: !1,
                lazyLoadingInPrevNext: !1,
                lazyLoadingOnTransitionStart: !1,
                preloadImages: !0,
                updateOnImagesReady: !0,
                loop: !1,
                loopAdditionalSlides: 0,
                loopedSlides: null,
                control: void 0,
                controlInverse: !1,
                controlBy: "slide",
                allowSwipeToPrev: !0,
                allowSwipeToNext: !0,
                swipeHandler: null,
                noSwiping: !0,
                noSwipingClass: "swiper-no-swiping",
                slideClass: "swiper-slide",
                slideActiveClass: "swiper-slide-active",
                slideVisibleClass: "swiper-slide-visible",
                slideDuplicateClass: "swiper-slide-duplicate",
                slideNextClass: "swiper-slide-next",
                slidePrevClass: "swiper-slide-prev",
                wrapperClass: "swiper-wrapper",
                bulletClass: "swiper-pagination-bullet",
                bulletActiveClass: "swiper-pagination-bullet-active",
                buttonDisabledClass: "swiper-button-disabled",
                paginationHiddenClass: "swiper-pagination-hidden",
                observer: !1,
                observeParents: !1,
                a11y: !1,
                prevSlideMessage: "Previous slide",
                nextSlideMessage: "Next slide",
                firstSlideMessage: "This is the first slide",
                lastSlideMessage: "This is the last slide",
                paginationBulletMessage: "Go to slide {{index}}",
                runCallbacksOnInit: !0
            },
            h = s && s.virtualTranslate;
            s = s || {};
            for (var g in f) if ("undefined" == typeof s[g]) s[g] = f[g];
            else if ("object" == typeof s[g]) for (var v in f[g])"undefined" == typeof s[g][v] && (s[g][v] = f[g][v]);
            var w = this;
            if (w.version = "3.1.0", w.params = s, w.classNames = [], "undefined" != typeof a && "undefined" != typeof r && (a = r), ("undefined" != typeof a || (a = "undefined" == typeof r ? window.Dom7 || window.Zepto || window.jQuery: r)) && (w.$ = a, w.container = a(e), 0 !== w.container.length)) {
                if (w.container.length > 1) return void w.container.each(function() {
                    new t(this, s)
                });
                w.container[0].swiper = w,
                w.container.data("swiper", w),
                w.classNames.push("swiper-container-" + w.params.direction),
                w.params.freeMode && w.classNames.push("swiper-container-free-mode"),
                w.support.flexbox || (w.classNames.push("swiper-container-no-flexbox"), w.params.slidesPerColumn = 1),
                (w.params.parallax || w.params.watchSlidesVisibility) && (w.params.watchSlidesProgress = !0),
                ["cube", "coverflow"].indexOf(w.params.effect) >= 0 && (w.support.transforms3d ? (w.params.watchSlidesProgress = !0, w.classNames.push("swiper-container-3d")) : w.params.effect = "slide"),
                "slide" !== w.params.effect && w.classNames.push("swiper-container-" + w.params.effect),
                "cube" === w.params.effect && (w.params.resistanceRatio = 0, w.params.slidesPerView = 1, w.params.slidesPerColumn = 1, w.params.slidesPerGroup = 1, w.params.centeredSlides = !1, w.params.spaceBetween = 0, w.params.virtualTranslate = !0, w.params.setWrapperSize = !1),
                "fade" === w.params.effect && (w.params.slidesPerView = 1, w.params.slidesPerColumn = 1, w.params.slidesPerGroup = 1, w.params.watchSlidesProgress = !0, w.params.spaceBetween = 0, "undefined" == typeof h && (w.params.virtualTranslate = !0)),
                w.params.grabCursor && w.support.touch && (w.params.grabCursor = !1),
                w.wrapper = w.container.children("." + w.params.wrapperClass),
                w.params.pagination && (w.paginationContainer = a(w.params.pagination), w.params.paginationClickable && w.paginationContainer.addClass("swiper-pagination-clickable")),
                w.rtl = i() && ("rtl" === w.container[0].dir.toLowerCase() || "rtl" === w.container.css("direction")),
                w.rtl && w.classNames.push("swiper-container-rtl"),
                w.rtl && (w.wrongRTL = "-webkit-box" === w.wrapper.css("display")),
                w.params.slidesPerColumn > 1 && w.classNames.push("swiper-container-multirow"),
                w.device.android && w.classNames.push("swiper-container-android"),
                w.container.addClass(w.classNames.join(" ")),
                w.translate = 0,
                w.progress = 0,
                w.velocity = 0,
                w.lockSwipeToNext = function() {
                    w.params.allowSwipeToNext = !1
                },
                w.lockSwipeToPrev = function() {
                    w.params.allowSwipeToPrev = !1
                },
                w.lockSwipes = function() {
                    w.params.allowSwipeToNext = w.params.allowSwipeToPrev = !1
                },
                w.unlockSwipeToNext = function() {
                    w.params.allowSwipeToNext = !0
                },
                w.unlockSwipeToPrev = function() {
                    w.params.allowSwipeToPrev = !0
                },
                w.unlockSwipes = function() {
                    w.params.allowSwipeToNext = w.params.allowSwipeToPrev = !0
                },
                w.params.grabCursor && (w.container[0].style.cursor = "move", w.container[0].style.cursor = "-webkit-grab", w.container[0].style.cursor = "-moz-grab", w.container[0].style.cursor = "grab"),
                w.imagesToLoad = [],
                w.imagesLoaded = 0,
                w.loadImage = function(e, a, t, r) {
                    function s() {
                        r && r()
                    }
                    var i;
                    e.complete && t ? s() : a ? (i = new window.Image, i.onload = s, i.onerror = s, i.src = a) : s()
                },
                w.preloadImages = function() {
                    function e() {
                        "undefined" != typeof w && null !== w && (void 0 !== w.imagesLoaded && w.imagesLoaded++, w.imagesLoaded === w.imagesToLoad.length && (w.params.updateOnImagesReady && w.update(), w.emit("onImagesReady", w)))
                    }
                    w.imagesToLoad = w.container.find("img");
                    for (var a = 0; a < w.imagesToLoad.length; a++) w.loadImage(w.imagesToLoad[a], w.imagesToLoad[a].currentSrc || w.imagesToLoad[a].getAttribute("src"), !0, e)
                },
                w.autoplayTimeoutId = void 0,
                w.autoplaying = !1,
                w.autoplayPaused = !1,
                w.startAutoplay = function() {
                    return "undefined" != typeof w.autoplayTimeoutId ? !1 : w.params.autoplay ? w.autoplaying ? !1 : (w.autoplaying = !0, w.emit("onAutoplayStart", w), void o()) : !1
                },
                w.stopAutoplay = function() {
                    w.autoplayTimeoutId && (w.autoplayTimeoutId && clearTimeout(w.autoplayTimeoutId), w.autoplaying = !1, w.autoplayTimeoutId = void 0, w.emit("onAutoplayStop", w))
                },
                w.pauseAutoplay = function(e) {
                    w.autoplayPaused || (w.autoplayTimeoutId && clearTimeout(w.autoplayTimeoutId), w.autoplayPaused = !0, 0 === e ? (w.autoplayPaused = !1, o()) : w.wrapper.transitionEnd(function() {
                        w && (w.autoplayPaused = !1, w.autoplaying ? o() : w.stopAutoplay())
                    }))
                },
                w.minTranslate = function() {
                    return - w.snapGrid[0]
                },
                w.maxTranslate = function() {
                    return - w.snapGrid[w.snapGrid.length - 1]
                },
                w.updateContainerSize = function() {
                    var e, a;
                    e = "undefined" != typeof w.params.width ? w.params.width: w.container[0].clientWidth,
                    a = "undefined" != typeof w.params.height ? w.params.height: w.container[0].clientHeight,
                    0 === e && i() || 0 === a && !i() || (e = e - parseInt(w.container.css("padding-left"), 10) - parseInt(w.container.css("padding-right"), 10), a = a - parseInt(w.container.css("padding-top"), 10) - parseInt(w.container.css("padding-bottom"), 10), w.width = e, w.height = a, w.size = i() ? w.width: w.height)
                },
                w.updateSlidesSize = function() {
                    w.slides = w.wrapper.children("." + w.params.slideClass),
                    w.snapGrid = [],
                    w.slidesGrid = [],
                    w.slidesSizesGrid = [];
                    var e, a = w.params.spaceBetween,
                    t = -w.params.slidesOffsetBefore,
                    r = 0,
                    s = 0;
                    "string" == typeof a && a.indexOf("%") >= 0 && (a = parseFloat(a.replace("%", "")) / 100 * w.size),
                    w.virtualSize = -a,
                    w.slides.css(w.rtl ? {
                        marginLeft: "",
                        marginTop: ""
                    }: {
                        marginRight: "",
                        marginBottom: ""
                    });
                    var o;
                    w.params.slidesPerColumn > 1 && (o = Math.floor(w.slides.length / w.params.slidesPerColumn) === w.slides.length / w.params.slidesPerColumn ? w.slides.length: Math.ceil(w.slides.length / w.params.slidesPerColumn) * w.params.slidesPerColumn);
                    var l, d = w.params.slidesPerColumn,
                    p = o / d,
                    u = p - (w.params.slidesPerColumn * p - w.slides.length);
                    for (e = 0; e < w.slides.length; e++) {
                        l = 0;
                        var c = w.slides.eq(e);
                        if (w.params.slidesPerColumn > 1) {
                            var m, f, h;
                            "column" === w.params.slidesPerColumnFill ? (f = Math.floor(e / d), h = e - f * d, (f > u || f === u && h === d - 1) && ++h >= d && (h = 0, f++), m = f + h * o / d, c.css({
                                "-webkit-box-ordinal-group": m,
                                "-moz-box-ordinal-group": m,
                                "-ms-flex-order": m,
                                "-webkit-order": m,
                                order: m
                            })) : (h = Math.floor(e / p), f = e - h * p),
                            c.css({
                                "margin-top": 0 !== h && w.params.spaceBetween && w.params.spaceBetween + "px"
                            }).attr("data-swiper-column", f).attr("data-swiper-row", h)
                        }
                        "none" !== c.css("display") && ("auto" === w.params.slidesPerView ? (l = i() ? c.outerWidth(!0) : c.outerHeight(!0), w.params.roundLengths && (l = n(l))) : (l = (w.size - (w.params.slidesPerView - 1) * a) / w.params.slidesPerView, w.params.roundLengths && (l = n(l)), i() ? w.slides[e].style.width = l + "px": w.slides[e].style.height = l + "px"), w.slides[e].swiperSlideSize = l, w.slidesSizesGrid.push(l), w.params.centeredSlides ? (t = t + l / 2 + r / 2 + a, 0 === e && (t = t - w.size / 2 - a), Math.abs(t) < .001 && (t = 0), s % w.params.slidesPerGroup === 0 && w.snapGrid.push(t), w.slidesGrid.push(t)) : (s % w.params.slidesPerGroup === 0 && w.snapGrid.push(t), w.slidesGrid.push(t), t = t + l + a), w.virtualSize += l + a, r = l, s++)
                    }
                    w.virtualSize = Math.max(w.virtualSize, w.size) + w.params.slidesOffsetAfter;
                    var g;
                    if (w.rtl && w.wrongRTL && ("slide" === w.params.effect || "coverflow" === w.params.effect) && w.wrapper.css({
                        width: w.virtualSize + w.params.spaceBetween + "px"
                    }), (!w.support.flexbox || w.params.setWrapperSize) && w.wrapper.css(i() ? {
                        width: w.virtualSize + w.params.spaceBetween + "px"
                    }: {
                        height: w.virtualSize + w.params.spaceBetween + "px"
                    }), w.params.slidesPerColumn > 1 && (w.virtualSize = (l + w.params.spaceBetween) * o, w.virtualSize = Math.ceil(w.virtualSize / w.params.slidesPerColumn) - w.params.spaceBetween, w.wrapper.css({
                        width: w.virtualSize + w.params.spaceBetween + "px"
                    }), w.params.centeredSlides)) {
                        for (g = [], e = 0; e < w.snapGrid.length; e++) w.snapGrid[e] < w.virtualSize + w.snapGrid[0] && g.push(w.snapGrid[e]);
                        w.snapGrid = g
                    }
                    if (!w.params.centeredSlides) {
                        for (g = [], e = 0; e < w.snapGrid.length; e++) w.snapGrid[e] <= w.virtualSize - w.size && g.push(w.snapGrid[e]);
                        w.snapGrid = g,
                        Math.floor(w.virtualSize - w.size) > Math.floor(w.snapGrid[w.snapGrid.length - 1]) && w.snapGrid.push(w.virtualSize - w.size)
                    }
                    0 === w.snapGrid.length && (w.snapGrid = [0]),
                    0 !== w.params.spaceBetween && w.slides.css(i() ? w.rtl ? {
                        marginLeft: a + "px"
                    }: {
                        marginRight: a + "px"
                    }: {
                        marginBottom: a + "px"
                    }),
                    w.params.watchSlidesProgress && w.updateSlidesOffset()
                },
                w.updateSlidesOffset = function() {
                    for (var e = 0; e < w.slides.length; e++) w.slides[e].swiperSlideOffset = i() ? w.slides[e].offsetLeft: w.slides[e].offsetTop
                },
                w.updateSlidesProgress = function(e) {
                    if ("undefined" == typeof e && (e = w.translate || 0), 0 !== w.slides.length) {
                        "undefined" == typeof w.slides[0].swiperSlideOffset && w.updateSlidesOffset();
                        var a = w.params.centeredSlides ? -e + w.size / 2 : -e;
                        w.rtl && (a = w.params.centeredSlides ? e - w.size / 2 : e); {
                            w.container[0].getBoundingClientRect(),
                            i() ? "left": "top",
                            i() ? "right": "bottom"
                        }
                        w.slides.removeClass(w.params.slideVisibleClass);
                        for (var t = 0; t < w.slides.length; t++) {
                            var r = w.slides[t],
                            s = w.params.centeredSlides === !0 ? r.swiperSlideSize / 2 : 0,
                            n = (a - r.swiperSlideOffset - s) / (r.swiperSlideSize + w.params.spaceBetween);
                            if (w.params.watchSlidesVisibility) {
                                var o = -(a - r.swiperSlideOffset - s),
                                l = o + w.slidesSizesGrid[t],
                                d = o >= 0 && o < w.size || l > 0 && l <= w.size || 0 >= o && l >= w.size;
                                d && w.slides.eq(t).addClass(w.params.slideVisibleClass)
                            }
                            r.progress = w.rtl ? -n: n
                        }
                    }
                },
                w.updateProgress = function(e) {
                    "undefined" == typeof e && (e = w.translate || 0);
                    var a = w.maxTranslate() - w.minTranslate();
                    0 === a ? (w.progress = 0, w.isBeginning = w.isEnd = !0) : (w.progress = (e - w.minTranslate()) / a, w.isBeginning = w.progress <= 0, w.isEnd = w.progress >= 1),
                    w.isBeginning && w.emit("onReachBeginning", w),
                    w.isEnd && w.emit("onReachEnd", w),
                    w.params.watchSlidesProgress && w.updateSlidesProgress(e),
                    w.emit("onProgress", w, w.progress)
                },
                w.updateActiveIndex = function() {
                    var e, a, t, r = w.rtl ? w.translate: -w.translate;
                    for (a = 0; a < w.slidesGrid.length; a++)"undefined" != typeof w.slidesGrid[a + 1] ? r >= w.slidesGrid[a] && r < w.slidesGrid[a + 1] - (w.slidesGrid[a + 1] - w.slidesGrid[a]) / 2 ? e = a: r >= w.slidesGrid[a] && r < w.slidesGrid[a + 1] && (e = a + 1) : r >= w.slidesGrid[a] && (e = a); (0 > e || "undefined" == typeof e) && (e = 0),
                    t = Math.floor(e / w.params.slidesPerGroup),
                    t >= w.snapGrid.length && (t = w.snapGrid.length - 1),
                    e !== w.activeIndex && (w.snapIndex = t, w.previousIndex = w.activeIndex, w.activeIndex = e, w.updateClasses())
                },
                w.updateClasses = function() {
                    w.slides.removeClass(w.params.slideActiveClass + " " + w.params.slideNextClass + " " + w.params.slidePrevClass);
                    var e = w.slides.eq(w.activeIndex);
                    if (e.addClass(w.params.slideActiveClass), e.next("." + w.params.slideClass).addClass(w.params.slideNextClass), e.prev("." + w.params.slideClass).addClass(w.params.slidePrevClass), w.bullets && w.bullets.length > 0) {
                        w.bullets.removeClass(w.params.bulletActiveClass);
                        var t;
                        w.params.loop ? (t = Math.ceil(w.activeIndex - w.loopedSlides) / w.params.slidesPerGroup, t > w.slides.length - 1 - 2 * w.loopedSlides && (t -= w.slides.length - 2 * w.loopedSlides), t > w.bullets.length - 1 && (t -= w.bullets.length)) : t = "undefined" != typeof w.snapIndex ? w.snapIndex: w.activeIndex || 0,
                        w.paginationContainer.length > 1 ? w.bullets.each(function() {
                            a(this).index() === t && a(this).addClass(w.params.bulletActiveClass)
                        }) : w.bullets.eq(t).addClass(w.params.bulletActiveClass)
                    }
                    w.params.loop || (w.params.prevButton && (w.isBeginning ? (a(w.params.prevButton).addClass(w.params.buttonDisabledClass), w.params.a11y && w.a11y && w.a11y.disable(a(w.params.prevButton))) : (a(w.params.prevButton).removeClass(w.params.buttonDisabledClass), w.params.a11y && w.a11y && w.a11y.enable(a(w.params.prevButton)))), w.params.nextButton && (w.isEnd ? (a(w.params.nextButton).addClass(w.params.buttonDisabledClass), w.params.a11y && w.a11y && w.a11y.disable(a(w.params.nextButton))) : (a(w.params.nextButton).removeClass(w.params.buttonDisabledClass), w.params.a11y && w.a11y && w.a11y.enable(a(w.params.nextButton)))))
                },
                w.updatePagination = function() {
                    if (w.params.pagination && w.paginationContainer && w.paginationContainer.length > 0) {
                        for (var e = "",
                        a = w.params.loop ? Math.ceil((w.slides.length - 2 * w.loopedSlides) / w.params.slidesPerGroup) : w.snapGrid.length, t = 0; a > t; t++) e += w.params.paginationBulletRender ? w.params.paginationBulletRender(t, w.params.bulletClass) : "<" + w.params.paginationElement + ' class="' + w.params.bulletClass + '"></' + w.params.paginationElement + ">";
                        w.paginationContainer.html(e),
                        w.bullets = w.paginationContainer.find("." + w.params.bulletClass),
                        w.params.paginationClickable && w.params.a11y && w.a11y && w.a11y.initPagination()
                    }
                },
                w.update = function(e) {
                    function a() {
                        r = Math.min(Math.max(w.translate, w.maxTranslate()), w.minTranslate()),
                        w.setWrapperTranslate(r),
                        w.updateActiveIndex(),
                        w.updateClasses()
                    }
                    if (w.updateContainerSize(), w.updateSlidesSize(), w.updateProgress(), w.updatePagination(), w.updateClasses(), w.params.scrollbar && w.scrollbar && w.scrollbar.set(), e) {
                        var t, r;
                        w.controller && w.controller.spline && (w.controller.spline = void 0),
                        w.params.freeMode ? a() : (t = ("auto" === w.params.slidesPerView || w.params.slidesPerView > 1) && w.isEnd && !w.params.centeredSlides ? w.slideTo(w.slides.length - 1, 0, !1, !0) : w.slideTo(w.activeIndex, 0, !1, !0), t || a())
                    }
                },
                w.onResize = function(e) {
                    var a = w.params.allowSwipeToPrev,
                    t = w.params.allowSwipeToNext;
                    if (w.params.allowSwipeToPrev = w.params.allowSwipeToNext = !0, w.updateContainerSize(), w.updateSlidesSize(), ("auto" === w.params.slidesPerView || w.params.freeMode || e) && w.updatePagination(), w.params.scrollbar && w.scrollbar && w.scrollbar.set(), w.controller && w.controller.spline && (w.controller.spline = void 0), w.params.freeMode) {
                        var r = Math.min(Math.max(w.translate, w.maxTranslate()), w.minTranslate());
                        w.setWrapperTranslate(r),
                        w.updateActiveIndex(),
                        w.updateClasses()
                    } else w.updateClasses(),
                    ("auto" === w.params.slidesPerView || w.params.slidesPerView > 1) && w.isEnd && !w.params.centeredSlides ? w.slideTo(w.slides.length - 1, 0, !1, !0) : w.slideTo(w.activeIndex, 0, !1, !0);
                    w.params.allowSwipeToPrev = a,
                    w.params.allowSwipeToNext = t
                };
                var y = ["mousedown", "mousemove", "mouseup"];
                window.navigator.pointerEnabled ? y = ["pointerdown", "pointermove", "pointerup"] : window.navigator.msPointerEnabled && (y = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]),
                w.touchEvents = {
                    start: w.support.touch || !w.params.simulateTouch ? "touchstart": y[0],
                    move: w.support.touch || !w.params.simulateTouch ? "touchmove": y[1],
                    end: w.support.touch || !w.params.simulateTouch ? "touchend": y[2]
                },
                (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && ("container" === w.params.touchEventsTarget ? w.container: w.wrapper).addClass("swiper-wp8-" + w.params.direction),
                w.initEvents = function(e) {
                    var t = e ? "off": "on",
                    r = e ? "removeEventListener": "addEventListener",
                    i = "container" === w.params.touchEventsTarget ? w.container[0] : w.wrapper[0],
                    n = w.support.touch ? i: document,
                    o = w.params.nested ? !0 : !1;
                    w.browser.ie ? (i[r](w.touchEvents.start, w.onTouchStart, !1), n[r](w.touchEvents.move, w.onTouchMove, o), n[r](w.touchEvents.end, w.onTouchEnd, !1)) : (w.support.touch && (i[r](w.touchEvents.start, w.onTouchStart, !1), i[r](w.touchEvents.move, w.onTouchMove, o), i[r](w.touchEvents.end, w.onTouchEnd, !1)), !s.simulateTouch || w.device.ios || w.device.android || (i[r]("mousedown", w.onTouchStart, !1), document[r]("mousemove", w.onTouchMove, o), document[r]("mouseup", w.onTouchEnd, !1))),
                    window[r]("resize", w.onResize),
                    w.params.nextButton && (a(w.params.nextButton)[t]("click", w.onClickNext), w.params.a11y && w.a11y && a(w.params.nextButton)[t]("keydown", w.a11y.onEnterKey)),
                    w.params.prevButton && (a(w.params.prevButton)[t]("click", w.onClickPrev), w.params.a11y && w.a11y && a(w.params.prevButton)[t]("keydown", w.a11y.onEnterKey)),
                    w.params.pagination && w.params.paginationClickable && (a(w.paginationContainer)[t]("click", "." + w.params.bulletClass, w.onClickIndex), w.params.a11y && w.a11y && a(w.paginationContainer)[t]("keydown", "." + w.params.bulletClass, w.a11y.onEnterKey)),
                    (w.params.preventClicks || w.params.preventClicksPropagation) && i[r]("click", w.preventClicks, !0)
                },
                w.attachEvents = function() {
                    w.initEvents()
                },
                w.detachEvents = function() {
                    w.initEvents(!0)
                },
                w.allowClick = !0,
                w.preventClicks = function(e) {
                    w.allowClick || (w.params.preventClicks && e.preventDefault(), w.params.preventClicksPropagation && w.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
                },
                w.onClickNext = function(e) {
                    e.preventDefault(),
                    (!w.isEnd || w.params.loop) && w.slideNext()
                },
                w.onClickPrev = function(e) {
                    e.preventDefault(),
                    (!w.isBeginning || w.params.loop) && w.slidePrev()
                },
                w.onClickIndex = function(e) {
                    e.preventDefault();
                    var t = a(this).index() * w.params.slidesPerGroup;
                    w.params.loop && (t += w.loopedSlides),
                    w.slideTo(t)
                },
                w.updateClickedSlide = function(e) {
                    var t = l(e, "." + w.params.slideClass),
                    r = !1;
                    if (t) for (var s = 0; s < w.slides.length; s++) w.slides[s] === t && (r = !0);
                    if (!t || !r) return w.clickedSlide = void 0,
                    void(w.clickedIndex = void 0);
                    if (w.clickedSlide = t, w.clickedIndex = a(t).index(), w.params.slideToClickedSlide && void 0 !== w.clickedIndex && w.clickedIndex !== w.activeIndex) {
                        var i, n = w.clickedIndex;
                        if (w.params.loop) if (i = a(w.clickedSlide).attr("data-swiper-slide-index"), n > w.slides.length - w.params.slidesPerView) w.fixLoop(),
                        n = w.wrapper.children("." + w.params.slideClass + '[data-swiper-slide-index="' + i + '"]').eq(0).index(),
                        setTimeout(function() {
                            w.slideTo(n)
                        },
                        0);
                        else if (n < w.params.slidesPerView - 1) {
                            w.fixLoop();
                            var o = w.wrapper.children("." + w.params.slideClass + '[data-swiper-slide-index="' + i + '"]');
                            n = o.eq(o.length - 1).index(),
                            setTimeout(function() {
                                w.slideTo(n)
                            },
                            0)
                        } else w.slideTo(n);
                        else w.slideTo(n)
                    }
                };
                var b, x, T, S, C, M, E, P, z, I = "input, select, textarea, button",
                k = Date.now(),
                L = [];
                w.animating = !1,
                w.touches = {
                    startX: 0,
                    startY: 0,
                    currentX: 0,
                    currentY: 0,
                    diff: 0
                };
                var D, B;
                if (w.onTouchStart = function(e) {
                    if (e.originalEvent && (e = e.originalEvent), D = "touchstart" === e.type, D || !("which" in e) || 3 !== e.which) {
                        if (w.params.noSwiping && l(e, "." + w.params.noSwipingClass)) return void(w.allowClick = !0);
                        if (!w.params.swipeHandler || l(e, w.params.swipeHandler)) {
                            if (b = !0, x = !1, S = void 0, B = void 0, w.touches.startX = w.touches.currentX = "touchstart" === e.type ? e.targetTouches[0].pageX: e.pageX, w.touches.startY = w.touches.currentY = "touchstart" === e.type ? e.targetTouches[0].pageY: e.pageY, T = Date.now(), w.allowClick = !0, w.updateContainerSize(), w.swipeDirection = void 0, w.params.threshold > 0 && (E = !1), "touchstart" !== e.type) {
                                var t = !0;
                                a(e.target).is(I) && (t = !1),
                                document.activeElement && a(document.activeElement).is(I) && document.activeElement.blur(),
                                t && e.preventDefault()
                            }
                            w.emit("onTouchStart", w, e)
                        }
                    }
                },
                w.onTouchMove = function(e) {
                    if (e.originalEvent && (e = e.originalEvent), !(D && "mousemove" === e.type || e.preventedByNestedSwiper)) {
                        if (w.params.onlyExternal) return w.allowClick = !1,
                        void(b && (w.touches.startX = w.touches.currentX = "touchmove" === e.type ? e.targetTouches[0].pageX: e.pageX, w.touches.startY = w.touches.currentY = "touchmove" === e.type ? e.targetTouches[0].pageY: e.pageY, T = Date.now()));
                        if (D && document.activeElement && e.target === document.activeElement && a(e.target).is(I)) return x = !0,
                        void(w.allowClick = !1);
                        if (w.emit("onTouchMove", w, e), !(e.targetTouches && e.targetTouches.length > 1)) {
                            if (w.touches.currentX = "touchmove" === e.type ? e.targetTouches[0].pageX: e.pageX, w.touches.currentY = "touchmove" === e.type ? e.targetTouches[0].pageY: e.pageY, "undefined" == typeof S) {
                                var t = 180 * Math.atan2(Math.abs(w.touches.currentY - w.touches.startY), Math.abs(w.touches.currentX - w.touches.startX)) / Math.PI;
                                S = i() ? t > w.params.touchAngle: 90 - t > w.params.touchAngle
                            }
                            if (S && w.emit("onTouchMoveOpposite", w, e), "undefined" == typeof B && w.browser.ieTouch && (w.touches.currentX !== w.touches.startX || w.touches.currentY !== w.touches.startY) && (B = !0), b) {
                                if (S) return void(b = !1);
                                if (B || !w.browser.ieTouch) {
                                    w.allowClick = !1,
                                    w.emit("onSliderMove", w, e),
                                    e.preventDefault(),
                                    w.params.touchMoveStopPropagation && !w.params.nested && e.stopPropagation(),
                                    x || (s.loop && w.fixLoop(), M = w.getWrapperTranslate(), w.setWrapperTransition(0), w.animating && w.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"), w.params.autoplay && w.autoplaying && (w.params.autoplayDisableOnInteraction ? w.stopAutoplay() : w.pauseAutoplay()), z = !1, w.params.grabCursor && (w.container[0].style.cursor = "move", w.container[0].style.cursor = "-webkit-grabbing", w.container[0].style.cursor = "-moz-grabbin", w.container[0].style.cursor = "grabbing")),
                                    x = !0;
                                    var r = w.touches.diff = i() ? w.touches.currentX - w.touches.startX: w.touches.currentY - w.touches.startY;
                                    r *= w.params.touchRatio,
                                    w.rtl && (r = -r),
                                    w.swipeDirection = r > 0 ? "prev": "next",
                                    C = r + M;
                                    var n = !0;
                                    if (r > 0 && C > w.minTranslate() ? (n = !1, w.params.resistance && (C = w.minTranslate() - 1 + Math.pow( - w.minTranslate() + M + r, w.params.resistanceRatio))) : 0 > r && C < w.maxTranslate() && (n = !1, w.params.resistance && (C = w.maxTranslate() + 1 - Math.pow(w.maxTranslate() - M - r, w.params.resistanceRatio))), n && (e.preventedByNestedSwiper = !0), !w.params.allowSwipeToNext && "next" === w.swipeDirection && M > C && (C = M), !w.params.allowSwipeToPrev && "prev" === w.swipeDirection && C > M && (C = M), w.params.followFinger) {
                                        if (w.params.threshold > 0) {
                                            if (! (Math.abs(r) > w.params.threshold || E)) return void(C = M);
                                            if (!E) return E = !0,
                                            w.touches.startX = w.touches.currentX,
                                            w.touches.startY = w.touches.currentY,
                                            C = M,
                                            void(w.touches.diff = i() ? w.touches.currentX - w.touches.startX: w.touches.currentY - w.touches.startY)
                                        } (w.params.freeMode || w.params.watchSlidesProgress) && w.updateActiveIndex(),
                                        w.params.freeMode && (0 === L.length && L.push({
                                            position: w.touches[i() ? "startX": "startY"],
                                            time: T
                                        }), L.push({
                                            position: w.touches[i() ? "currentX": "currentY"],
                                            time: (new window.Date).getTime()
                                        })),
                                        w.updateProgress(C),
                                        w.setWrapperTranslate(C)
                                    }
                                }
                            }
                        }
                    }
                },
                w.onTouchEnd = function(e) {
                    if (e.originalEvent && (e = e.originalEvent), w.emit("onTouchEnd", w, e), b) {
                        w.params.grabCursor && x && b && (w.container[0].style.cursor = "move", w.container[0].style.cursor = "-webkit-grab", w.container[0].style.cursor = "-moz-grab", w.container[0].style.cursor = "grab");
                        var t = Date.now(),
                        r = t - T;
                        if (w.allowClick && (w.updateClickedSlide(e), w.emit("onTap", w, e), 300 > r && t - k > 300 && (P && clearTimeout(P), P = setTimeout(function() {
                            w && (w.params.paginationHide && w.paginationContainer.length > 0 && !a(e.target).hasClass(w.params.bulletClass) && w.paginationContainer.toggleClass(w.params.paginationHiddenClass), w.emit("onClick", w, e))
                        },
                        300)), 300 > r && 300 > t - k && (P && clearTimeout(P), w.emit("onDoubleTap", w, e))), k = Date.now(), setTimeout(function() {
                            w && (w.allowClick = !0)
                        },
                        0), !b || !x || !w.swipeDirection || 0 === w.touches.diff || C === M) return void(b = x = !1);
                        b = x = !1;
                        var s;
                        if (s = w.params.followFinger ? w.rtl ? w.translate: -w.translate: -C, w.params.freeMode) {
                            if (s < -w.minTranslate()) return void w.slideTo(w.activeIndex);
                            if (s > -w.maxTranslate()) return void w.slideTo(w.slides.length < w.snapGrid.length ? w.snapGrid.length - 1 : w.slides.length - 1);
                            if (w.params.freeModeMomentum) {
                                if (L.length > 1) {
                                    var i = L.pop(),
                                    n = L.pop(),
                                    o = i.position - n.position,
                                    l = i.time - n.time;
                                    w.velocity = o / l,
                                    w.velocity = w.velocity / 2,
                                    Math.abs(w.velocity) < .02 && (w.velocity = 0),
                                    (l > 150 || (new window.Date).getTime() - i.time > 300) && (w.velocity = 0)
                                } else w.velocity = 0;
                                L.length = 0;
                                var d = 1e3 * w.params.freeModeMomentumRatio,
                                p = w.velocity * d,
                                u = w.translate + p;
                                w.rtl && (u = -u);
                                var c, m = !1,
                                f = 20 * Math.abs(w.velocity) * w.params.freeModeMomentumBounceRatio;
                                if (u < w.maxTranslate()) w.params.freeModeMomentumBounce ? (u + w.maxTranslate() < -f && (u = w.maxTranslate() - f), c = w.maxTranslate(), m = !0, z = !0) : u = w.maxTranslate();
                                else if (u > w.minTranslate()) w.params.freeModeMomentumBounce ? (u - w.minTranslate() > f && (u = w.minTranslate() + f), c = w.minTranslate(), m = !0, z = !0) : u = w.minTranslate();
                                else if (w.params.freeModeSticky) {
                                    var h, g = 0;
                                    for (g = 0; g < w.snapGrid.length; g += 1) if (w.snapGrid[g] > -u) {
                                        h = g;
                                        break
                                    }
                                    u = Math.abs(w.snapGrid[h] - u) < Math.abs(w.snapGrid[h - 1] - u) || "next" === w.swipeDirection ? w.snapGrid[h] : w.snapGrid[h - 1],
                                    w.rtl || (u = -u)
                                }
                                if (0 !== w.velocity) d = Math.abs(w.rtl ? ( - u - w.translate) / w.velocity: (u - w.translate) / w.velocity);
                                else if (w.params.freeModeSticky) return void w.slideReset();
                                w.params.freeModeMomentumBounce && m ? (w.updateProgress(c), w.setWrapperTransition(d), w.setWrapperTranslate(u), w.onTransitionStart(), w.animating = !0, w.wrapper.transitionEnd(function() {
                                    w && z && (w.emit("onMomentumBounce", w), w.setWrapperTransition(w.params.speed), w.setWrapperTranslate(c), w.wrapper.transitionEnd(function() {
                                        w && w.onTransitionEnd()
                                    }))
                                })) : w.velocity ? (w.updateProgress(u), w.setWrapperTransition(d), w.setWrapperTranslate(u), w.onTransitionStart(), w.animating || (w.animating = !0, w.wrapper.transitionEnd(function() {
                                    w && w.onTransitionEnd()
                                }))) : w.updateProgress(u),
                                w.updateActiveIndex()
                            }
                            return void((!w.params.freeModeMomentum || r >= w.params.longSwipesMs) && (w.updateProgress(), w.updateActiveIndex()))
                        }
                        var v, y = 0,
                        S = w.slidesSizesGrid[0];
                        for (v = 0; v < w.slidesGrid.length; v += w.params.slidesPerGroup)"undefined" != typeof w.slidesGrid[v + w.params.slidesPerGroup] ? s >= w.slidesGrid[v] && s < w.slidesGrid[v + w.params.slidesPerGroup] && (y = v, S = w.slidesGrid[v + w.params.slidesPerGroup] - w.slidesGrid[v]) : s >= w.slidesGrid[v] && (y = v, S = w.slidesGrid[w.slidesGrid.length - 1] - w.slidesGrid[w.slidesGrid.length - 2]);
                        var E = (s - w.slidesGrid[y]) / S;
                        if (r > w.params.longSwipesMs) {
                            if (!w.params.longSwipes) return void w.slideTo(w.activeIndex);
                            "next" === w.swipeDirection && w.slideTo(E >= w.params.longSwipesRatio ? y + w.params.slidesPerGroup: y),
                            "prev" === w.swipeDirection && w.slideTo(E > 1 - w.params.longSwipesRatio ? y + w.params.slidesPerGroup: y)
                        } else {
                            if (!w.params.shortSwipes) return void w.slideTo(w.activeIndex);
                            "next" === w.swipeDirection && w.slideTo(y + w.params.slidesPerGroup),
                            "prev" === w.swipeDirection && w.slideTo(y)
                        }
                    }
                },
                w._slideTo = function(e, a) {
                    return w.slideTo(e, a, !0, !0)
                },
                w.slideTo = function(e, a, t, r) {
                    "undefined" == typeof t && (t = !0),
                    "undefined" == typeof e && (e = 0),
                    0 > e && (e = 0),
                    w.snapIndex = Math.floor(e / w.params.slidesPerGroup),
                    w.snapIndex >= w.snapGrid.length && (w.snapIndex = w.snapGrid.length - 1);
                    var s = -w.snapGrid[w.snapIndex];
                    if (!w.params.allowSwipeToNext && s < w.translate && s < w.minTranslate()) return ! 1;
                    if (!w.params.allowSwipeToPrev && s > w.translate && s > w.maxTranslate()) return ! 1;
                    w.params.autoplay && w.autoplaying && (r || !w.params.autoplayDisableOnInteraction ? w.pauseAutoplay(a) : w.stopAutoplay()),
                    w.updateProgress(s);
                    for (var n = 0; n < w.slidesGrid.length; n++) - Math.floor(100 * s) >= Math.floor(100 * w.slidesGrid[n]) && (e = n);
                    if ("undefined" == typeof a && (a = w.params.speed), w.previousIndex = w.activeIndex || 0, w.activeIndex = e, s === w.translate) return w.updateClasses(),
                    !1;
                    w.updateClasses(),
                    w.onTransitionStart(t);
                    i() ? s: 0,
                    i() ? 0 : s;
                    return 0 === a ? (w.setWrapperTransition(0), w.setWrapperTranslate(s), w.onTransitionEnd(t)) : (w.setWrapperTransition(a), w.setWrapperTranslate(s), w.animating || (w.animating = !0, w.wrapper.transitionEnd(function() {
                        w && w.onTransitionEnd(t)
                    }))),
                    !0
                },
                w.onTransitionStart = function(e) {
                    "undefined" == typeof e && (e = !0),
                    w.lazy && w.lazy.onTransitionStart(),
                    e && (w.emit("onTransitionStart", w), w.activeIndex !== w.previousIndex && w.emit("onSlideChangeStart", w))
                },
                w.onTransitionEnd = function(e) {
                    w.animating = !1,
                    w.setWrapperTransition(0),
                    "undefined" == typeof e && (e = !0),
                    w.lazy && w.lazy.onTransitionEnd(),
                    e && (w.emit("onTransitionEnd", w), w.activeIndex !== w.previousIndex && w.emit("onSlideChangeEnd", w)),
                    w.params.hashnav && w.hashnav && w.hashnav.setHash()
                },
                w.slideNext = function(e, a, t) {
                    if (w.params.loop) {
                        if (w.animating) return ! 1;
                        w.fixLoop(); {
                            w.container[0].clientLeft
                        }
                        return w.slideTo(w.activeIndex + w.params.slidesPerGroup, a, e, t)
                    }
                    return w.slideTo(w.activeIndex + w.params.slidesPerGroup, a, e, t)
                },
                w._slideNext = function(e) {
                    return w.slideNext(!0, e, !0)
                },
                w.slidePrev = function(e, a, t) {
                    if (w.params.loop) {
                        if (w.animating) return ! 1;
                        w.fixLoop(); {
                            w.container[0].clientLeft
                        }
                        return w.slideTo(w.activeIndex - 1, a, e, t)
                    }
                    return w.slideTo(w.activeIndex - 1, a, e, t)
                },
                w._slidePrev = function(e) {
                    return w.slidePrev(!0, e, !0)
                },
                w.slideReset = function(e, a) {
                    return w.slideTo(w.activeIndex, a, e)
                },
                w.setWrapperTransition = function(e, a) {
                    w.wrapper.transition(e),
                    "slide" !== w.params.effect && w.effects[w.params.effect] && w.effects[w.params.effect].setTransition(e),
                    w.params.parallax && w.parallax && w.parallax.setTransition(e),
                    w.params.scrollbar && w.scrollbar && w.scrollbar.setTransition(e),
                    w.params.control && w.controller && w.controller.setTransition(e, a),
                    w.emit("onSetTransition", w, e)
                },
                w.setWrapperTranslate = function(e, a, t) {
                    var r = 0,
                    s = 0,
                    n = 0;
                    i() ? r = w.rtl ? -e: e: s = e,
                    w.params.virtualTranslate || w.wrapper.transform(w.support.transforms3d ? "translate3d(" + r + "px, " + s + "px, " + n + "px)": "translate(" + r + "px, " + s + "px)"),
                    w.translate = i() ? r: s,
                    a && w.updateActiveIndex(),
                    "slide" !== w.params.effect && w.effects[w.params.effect] && w.effects[w.params.effect].setTranslate(w.translate),
                    w.params.parallax && w.parallax && w.parallax.setTranslate(w.translate),
                    w.params.scrollbar && w.scrollbar && w.scrollbar.setTranslate(w.translate),
                    w.params.control && w.controller && w.controller.setTranslate(w.translate, t),
                    w.emit("onSetTranslate", w, w.translate)
                },
                w.getTranslate = function(e, a) {
                    var t, r, s, i;
                    return "undefined" == typeof a && (a = "x"),
                    w.params.virtualTranslate ? w.rtl ? -w.translate: w.translate: (s = window.getComputedStyle(e, null), window.WebKitCSSMatrix ? i = new window.WebKitCSSMatrix("none" === s.webkitTransform ? "": s.webkitTransform) : (i = s.MozTransform || s.OTransform || s.MsTransform || s.msTransform || s.transform || s.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), t = i.toString().split(",")), "x" === a && (r = window.WebKitCSSMatrix ? i.m41: parseFloat(16 === t.length ? t[12] : t[4])), "y" === a && (r = window.WebKitCSSMatrix ? i.m42: parseFloat(16 === t.length ? t[13] : t[5])), w.rtl && r && (r = -r), r || 0)
                },
                w.getWrapperTranslate = function(e) {
                    return "undefined" == typeof e && (e = i() ? "x": "y"),
                    w.getTranslate(w.wrapper[0], e)
                },
                w.observers = [], w.initObservers = function() {
                    if (w.params.observeParents) for (var e = w.container.parents(), a = 0; a < e.length; a++) d(e[a]);
                    d(w.container[0], {
                        childList: !1
                    }),
                    d(w.wrapper[0], {
                        attributes: !1
                    })
                },
                w.disconnectObservers = function() {
                    for (var e = 0; e < w.observers.length; e++) w.observers[e].disconnect();
                    w.observers = []
                },
                w.createLoop = function() {
                    w.wrapper.children("." + w.params.slideClass + "." + w.params.slideDuplicateClass).remove();
                    var e = w.wrapper.children("." + w.params.slideClass);
                    w.loopedSlides = parseInt(w.params.loopedSlides || w.params.slidesPerView, 10),
                    w.loopedSlides = w.loopedSlides + w.params.loopAdditionalSlides,
                    w.loopedSlides > e.length && (w.loopedSlides = e.length);
                    var t, r = [],
                    s = [];
                    for (e.each(function(t, i) {
                        var n = a(this);
                        t < w.loopedSlides && s.push(i),
                        t < e.length && t >= e.length - w.loopedSlides && r.push(i),
                        n.attr("data-swiper-slide-index", t)
                    }), t = 0; t < s.length; t++) w.wrapper.append(a(s[t].cloneNode(!0)).addClass(w.params.slideDuplicateClass));
                    for (t = r.length - 1; t >= 0; t--) w.wrapper.prepend(a(r[t].cloneNode(!0)).addClass(w.params.slideDuplicateClass))
                },
                w.destroyLoop = function() {
                    w.wrapper.children("." + w.params.slideClass + "." + w.params.slideDuplicateClass).remove(),
                    w.slides.removeAttr("data-swiper-slide-index")
                },
                w.fixLoop = function() {
                    var e;
                    w.activeIndex < w.loopedSlides ? (e = w.slides.length - 3 * w.loopedSlides + w.activeIndex, e += w.loopedSlides, w.slideTo(e, 0, !1, !0)) : ("auto" === w.params.slidesPerView && w.activeIndex >= 2 * w.loopedSlides || w.activeIndex > w.slides.length - 2 * w.params.slidesPerView) && (e = -w.slides.length + w.activeIndex + w.loopedSlides, e += w.loopedSlides, w.slideTo(e, 0, !1, !0))
                },
                w.appendSlide = function(e) {
                    if (w.params.loop && w.destroyLoop(), "object" == typeof e && e.length) for (var a = 0; a < e.length; a++) e[a] && w.wrapper.append(e[a]);
                    else w.wrapper.append(e);
                    w.params.loop && w.createLoop(),
                    w.params.observer && w.support.observer || w.update(!0)
                },
                w.prependSlide = function(e) {
                    w.params.loop && w.destroyLoop();
                    var a = w.activeIndex + 1;
                    if ("object" == typeof e && e.length) {
                        for (var t = 0; t < e.length; t++) e[t] && w.wrapper.prepend(e[t]);
                        a = w.activeIndex + e.length
                    } else w.wrapper.prepend(e);
                    w.params.loop && w.createLoop(),
                    w.params.observer && w.support.observer || w.update(!0),
                    w.slideTo(a, 0, !1)
                },
                w.removeSlide = function(e) {
                    w.params.loop && (w.destroyLoop(), w.slides = w.wrapper.children("." + w.params.slideClass));
                    var a, t = w.activeIndex;
                    if ("object" == typeof e && e.length) {
                        for (var r = 0; r < e.length; r++) a = e[r],
                        w.slides[a] && w.slides.eq(a).remove(),
                        t > a && t--;
                        t = Math.max(t, 0)
                    } else a = e,
                    w.slides[a] && w.slides.eq(a).remove(),
                    t > a && t--,
                    t = Math.max(t, 0);
                    w.params.loop && w.createLoop(),
                    w.params.observer && w.support.observer || w.update(!0),
                    w.params.loop ? w.slideTo(t + w.loopedSlides, 0, !1) : w.slideTo(t, 0, !1)
                },
                w.removeAllSlides = function() {
                    for (var e = [], a = 0; a < w.slides.length; a++) e.push(a);
                    w.removeSlide(e)
                },
                w.effects = {
                    fade: {
                        setTranslate: function() {
                            for (var e = 0; e < w.slides.length; e++) {
                                var a = w.slides.eq(e),
                                t = a[0].swiperSlideOffset,
                                r = -t;
                                w.params.virtualTranslate || (r -= w.translate);
                                var s = 0;
                                i() || (s = r, r = 0);
                                var n = w.params.fade.crossFade ? Math.max(1 - Math.abs(a[0].progress), 0) : 1 + Math.min(Math.max(a[0].progress, -1), 0);
                                a.css({
                                    opacity: n
                                }).transform("translate3d(" + r + "px, " + s + "px, 0px)")
                            }
                        },
                        setTransition: function(e) {
                            if (w.slides.transition(e), w.params.virtualTranslate && 0 !== e) {
                                var a = !1;
                                w.slides.transitionEnd(function() {
                                    if (!a && w) {
                                        a = !0,
                                        w.animating = !1;
                                        for (var e = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], t = 0; t < e.length; t++) w.wrapper.trigger(e[t])
                                    }
                                })
                            }
                        }
                    },
                    cube: {
                        setTranslate: function() {
                            var e, t = 0;
                            w.params.cube.shadow && (i() ? (e = w.wrapper.find(".swiper-cube-shadow"), 0 === e.length && (e = a('<div class="swiper-cube-shadow"></div>'), w.wrapper.append(e)), e.css({
                                height: w.width + "px"
                            })) : (e = w.container.find(".swiper-cube-shadow"), 0 === e.length && (e = a('<div class="swiper-cube-shadow"></div>'), w.container.append(e))));
                            for (var r = 0; r < w.slides.length; r++) {
                                var s = w.slides.eq(r),
                                n = 90 * r,
                                o = Math.floor(n / 360);
                                w.rtl && (n = -n, o = Math.floor( - n / 360));
                                var l = Math.max(Math.min(s[0].progress, 1), -1),
                                d = 0,
                                p = 0,
                                u = 0;
                                r % 4 === 0 ? (d = 4 * -o * w.size, u = 0) : (r - 1) % 4 === 0 ? (d = 0, u = 4 * -o * w.size) : (r - 2) % 4 === 0 ? (d = w.size + 4 * o * w.size, u = w.size) : (r - 3) % 4 === 0 && (d = -w.size, u = 3 * w.size + 4 * w.size * o),
                                w.rtl && (d = -d),
                                i() || (p = d, d = 0);
                                var c = "rotateX(" + (i() ? 0 : -n) + "deg) rotateY(" + (i() ? n: 0) + "deg) translate3d(" + d + "px, " + p + "px, " + u + "px)";
                                if (1 >= l && l > -1 && (t = 90 * r + 90 * l, w.rtl && (t = 90 * -r - 90 * l)), s.transform(c), w.params.cube.slideShadows) {
                                    var m = s.find(i() ? ".swiper-slide-shadow-left": ".swiper-slide-shadow-top"),
                                    f = s.find(i() ? ".swiper-slide-shadow-right": ".swiper-slide-shadow-bottom");
                                    0 === m.length && (m = a('<div class="swiper-slide-shadow-' + (i() ? "left": "top") + '"></div>'), s.append(m)),
                                    0 === f.length && (f = a('<div class="swiper-slide-shadow-' + (i() ? "right": "bottom") + '"></div>'), s.append(f)); {
                                        s[0].progress
                                    }
                                    m.length && (m[0].style.opacity = -s[0].progress),
                                    f.length && (f[0].style.opacity = s[0].progress)
                                }
                            }
                            if (w.wrapper.css({
                                "-webkit-transform-origin": "50% 50% -" + w.size / 2 + "px",
                                "-moz-transform-origin": "50% 50% -" + w.size / 2 + "px",
                                "-ms-transform-origin": "50% 50% -" + w.size / 2 + "px",
                                "transform-origin": "50% 50% -" + w.size / 2 + "px"
                            }), w.params.cube.shadow) if (i()) e.transform("translate3d(0px, " + (w.width / 2 + w.params.cube.shadowOffset) + "px, " + -w.width / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + w.params.cube.shadowScale + ")");
                            else {
                                var h = Math.abs(t) - 90 * Math.floor(Math.abs(t) / 90),
                                g = 1.5 - (Math.sin(2 * h * Math.PI / 360) / 2 + Math.cos(2 * h * Math.PI / 360) / 2),
                                v = w.params.cube.shadowScale,
                                y = w.params.cube.shadowScale / g,
                                b = w.params.cube.shadowOffset;
                                e.transform("scale3d(" + v + ", 1, " + y + ") translate3d(0px, " + (w.height / 2 + b) + "px, " + -w.height / 2 / y + "px) rotateX(-90deg)")
                            }
                            var x = w.isSafari || w.isUiWebView ? -w.size / 2 : 0;
                            w.wrapper.transform("translate3d(0px,0," + x + "px) rotateX(" + (i() ? 0 : t) + "deg) rotateY(" + (i() ? -t: 0) + "deg)")
                        },
                        setTransition: function(e) {
                            w.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),
                            w.params.cube.shadow && !i() && w.container.find(".swiper-cube-shadow").transition(e)
                        }
                    },
                    coverflow: {
                        setTranslate: function() {
                            for (var e = w.translate,
                            t = i() ? -e + w.width / 2 : -e + w.height / 2, r = i() ? w.params.coverflow.rotate: -w.params.coverflow.rotate, s = w.params.coverflow.depth, n = 0, o = w.slides.length; o > n; n++) {
                                var l = w.slides.eq(n),
                                d = w.slidesSizesGrid[n],
                                p = l[0].swiperSlideOffset,
                                u = (t - p - d / 2) / d * w.params.coverflow.modifier,
                                c = i() ? r * u: 0,
                                m = i() ? 0 : r * u,
                                f = -s * Math.abs(u),
                                h = i() ? 0 : w.params.coverflow.stretch * u,
                                g = i() ? w.params.coverflow.stretch * u: 0;
                                Math.abs(g) < .001 && (g = 0),
                                Math.abs(h) < .001 && (h = 0),
                                Math.abs(f) < .001 && (f = 0),
                                Math.abs(c) < .001 && (c = 0),
                                Math.abs(m) < .001 && (m = 0);
                                var v = "translate3d(" + g + "px," + h + "px," + f + "px)  rotateX(" + m + "deg) rotateY(" + c + "deg)";
                                if (l.transform(v), l[0].style.zIndex = -Math.abs(Math.round(u)) + 1, w.params.coverflow.slideShadows) {
                                    var y = l.find(i() ? ".swiper-slide-shadow-left": ".swiper-slide-shadow-top"),
                                    b = l.find(i() ? ".swiper-slide-shadow-right": ".swiper-slide-shadow-bottom");
                                    0 === y.length && (y = a('<div class="swiper-slide-shadow-' + (i() ? "left": "top") + '"></div>'), l.append(y)),
                                    0 === b.length && (b = a('<div class="swiper-slide-shadow-' + (i() ? "right": "bottom") + '"></div>'), l.append(b)),
                                    y.length && (y[0].style.opacity = u > 0 ? u: 0),
                                    b.length && (b[0].style.opacity = -u > 0 ? -u: 0)
                                }
                            }
                            if (w.browser.ie) {
                                var x = w.wrapper[0].style;
                                x.perspectiveOrigin = t + "px 50%"
                            }
                        },
                        setTransition: function(e) {
                            w.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
                        }
                    }
                },
                w.lazy = {
                    initialImageLoaded: !1,
                    loadImageInSlide: function(e, t) {
                        if ("undefined" != typeof e && ("undefined" == typeof t && (t = !0), 0 !== w.slides.length)) {
                            var r = w.slides.eq(e),
                            s = r.find(".swiper-lazy:not(.swiper-lazy-loaded):not(.swiper-lazy-loading)"); ! r.hasClass("swiper-lazy") || r.hasClass("swiper-lazy-loaded") || r.hasClass("swiper-lazy-loading") || s.add(r[0]),
                            0 !== s.length && s.each(function() {
                                var e = a(this);
                                e.addClass("swiper-lazy-loading");
                                var s = e.attr("data-background"),
                                i = e.attr("data-src");
                                w.loadImage(e[0], i || s, !1,
                                function() {
                                    if (s ? (e.css("background-image", "url(" + s + ")"), e.removeAttr("data-background")) : (e.attr("src", i), e.removeAttr("data-src")), e.addClass("swiper-lazy-loaded").removeClass("swiper-lazy-loading"), r.find(".swiper-lazy-preloader, .preloader").remove(), w.params.loop && t) {
                                        var a = r.attr("data-swiper-slide-index");
                                        if (r.hasClass(w.params.slideDuplicateClass)) {
                                            var n = w.wrapper.children('[data-swiper-slide-index="' + a + '"]:not(.' + w.params.slideDuplicateClass + ")");
                                            w.lazy.loadImageInSlide(n.index(), !1)
                                        } else {
                                            var o = w.wrapper.children("." + w.params.slideDuplicateClass + '[data-swiper-slide-index="' + a + '"]');
                                            w.lazy.loadImageInSlide(o.index(), !1)
                                        }
                                    }
                                    w.emit("onLazyImageReady", w, r[0], e[0])
                                }),
                                w.emit("onLazyImageLoad", w, r[0], e[0])
                            })
                        }
                    },
                    load: function() {
                        var e;
                        if (w.params.watchSlidesVisibility) w.wrapper.children("." + w.params.slideVisibleClass).each(function() {
                            w.lazy.loadImageInSlide(a(this).index())
                        });
                        else if (w.params.slidesPerView > 1) for (e = w.activeIndex; e < w.activeIndex + w.params.slidesPerView; e++) w.slides[e] && w.lazy.loadImageInSlide(e);
                        else w.lazy.loadImageInSlide(w.activeIndex);
                        if (w.params.lazyLoadingInPrevNext) if (w.params.slidesPerView > 1) {
                            for (e = w.activeIndex + w.params.slidesPerView; e < w.activeIndex + w.params.slidesPerView + w.params.slidesPerView; e++) w.slides[e] && w.lazy.loadImageInSlide(e);
                            for (e = w.activeIndex - w.params.slidesPerView; e < w.activeIndex; e++) w.slides[e] && w.lazy.loadImageInSlide(e)
                        } else {
                            var t = w.wrapper.children("." + w.params.slideNextClass);
                            t.length > 0 && w.lazy.loadImageInSlide(t.index());
                            var r = w.wrapper.children("." + w.params.slidePrevClass);
                            r.length > 0 && w.lazy.loadImageInSlide(r.index())
                        }
                    },
                    onTransitionStart: function() {
                        w.params.lazyLoading && (w.params.lazyLoadingOnTransitionStart || !w.params.lazyLoadingOnTransitionStart && !w.lazy.initialImageLoaded) && w.lazy.load()
                    },
                    onTransitionEnd: function() {
                        w.params.lazyLoading && !w.params.lazyLoadingOnTransitionStart && w.lazy.load()
                    }
                },
                w.scrollbar = {
                    set: function() {
                        if (w.params.scrollbar) {
                            var e = w.scrollbar;
                            e.track = a(w.params.scrollbar),
                            e.drag = e.track.find(".swiper-scrollbar-drag"),
                            0 === e.drag.length && (e.drag = a('<div class="swiper-scrollbar-drag"></div>'), e.track.append(e.drag)),
                            e.drag[0].style.width = "",
                            e.drag[0].style.height = "",
                            e.trackSize = i() ? e.track[0].offsetWidth: e.track[0].offsetHeight,
                            e.divider = w.size / w.virtualSize,
                            e.moveDivider = e.divider * (e.trackSize / w.size),
                            e.dragSize = e.trackSize * e.divider,
                            i() ? e.drag[0].style.width = e.dragSize + "px": e.drag[0].style.height = e.dragSize + "px",
                            e.track[0].style.display = e.divider >= 1 ? "none": "",
                            w.params.scrollbarHide && (e.track[0].style.opacity = 0)
                        }
                    },
                    setTranslate: function() {
                        if (w.params.scrollbar) {
                            var e, a = w.scrollbar,
                            t = (w.translate || 0, a.dragSize);
                            e = (a.trackSize - a.dragSize) * w.progress,
                            w.rtl && i() ? (e = -e, e > 0 ? (t = a.dragSize - e, e = 0) : -e + a.dragSize > a.trackSize && (t = a.trackSize + e)) : 0 > e ? (t = a.dragSize + e, e = 0) : e + a.dragSize > a.trackSize && (t = a.trackSize - e),
                            i() ? (a.drag.transform(w.support.transforms3d ? "translate3d(" + e + "px, 0, 0)": "translateX(" + e + "px)"), a.drag[0].style.width = t + "px") : (a.drag.transform(w.support.transforms3d ? "translate3d(0px, " + e + "px, 0)": "translateY(" + e + "px)"), a.drag[0].style.height = t + "px"),
                            w.params.scrollbarHide && (clearTimeout(a.timeout), a.track[0].style.opacity = 1, a.timeout = setTimeout(function() {
                                a.track[0].style.opacity = 0,
                                a.track.transition(400)
                            },
                            1e3))
                        }
                    },
                    setTransition: function(e) {
                        w.params.scrollbar && w.scrollbar.drag.transition(e)
                    }
                },
                w.controller = {
                    LinearSpline: function(e, a) {
                        this.x = e,
                        this.y = a,
                        this.lastIndex = e.length - 1; {
                            var t, r;
                            this.x.length
                        }
                        this.interpolate = function(e) {
                            return e ? (r = s(this.x, e), t = r - 1, (e - this.x[t]) * (this.y[r] - this.y[t]) / (this.x[r] - this.x[t]) + this.y[t]) : 0
                        };
                        var s = function() {
                            var e, a, t;
                            return function(r, s) {
                                for (a = -1, e = r.length; e - a > 1;) r[t = e + a >> 1] <= s ? a = t: e = t;
                                return e
                            }
                        } ()
                    },
                    getInterpolateFunction: function(e) {
                        w.controller.spline || (w.controller.spline = w.params.loop ? new w.controller.LinearSpline(w.slidesGrid, e.slidesGrid) : new w.controller.LinearSpline(w.snapGrid, e.snapGrid))
                    },
                    setTranslate: function(e, a) {
                        function r(a) {
                            e = a.rtl && "horizontal" === a.params.direction ? -w.translate: w.translate,
                            "slide" === w.params.controlBy && (w.controller.getInterpolateFunction(a), i = -w.controller.spline.interpolate( - e)),
                            i && "container" !== w.params.controlBy || (s = (a.maxTranslate() - a.minTranslate()) / (w.maxTranslate() - w.minTranslate()), i = (e - w.minTranslate()) * s + a.minTranslate()),
                            w.params.controlInverse && (i = a.maxTranslate() - i),
                            a.updateProgress(i),
                            a.setWrapperTranslate(i, !1, w),
                            a.updateActiveIndex()
                        }
                        var s, i, n = w.params.control;
                        if (w.isArray(n)) for (var o = 0; o < n.length; o++) n[o] !== a && n[o] instanceof t && r(n[o]);
                        else n instanceof t && a !== n && r(n)
                    },
                    setTransition: function(e, a) {
                        function r(a) {
                            a.setWrapperTransition(e, w),
                            0 !== e && (a.onTransitionStart(), a.wrapper.transitionEnd(function() {
                                i && (a.params.loop && "slide" === w.params.controlBy && a.fixLoop(), a.onTransitionEnd())
                            }))
                        }
                        var s, i = w.params.control;
                        if (w.isArray(i)) for (s = 0; s < i.length; s++) i[s] !== a && i[s] instanceof t && r(i[s]);
                        else i instanceof t && a !== i && r(i)
                    }
                },
                w.hashnav = {
                    init: function() {
                        if (w.params.hashnav) {
                            w.hashnav.initialized = !0;
                            var e = document.location.hash.replace("#", "");
                            if (e) for (var a = 0,
                            t = 0,
                            r = w.slides.length; r > t; t++) {
                                var s = w.slides.eq(t),
                                i = s.attr("data-hash");
                                if (i === e && !s.hasClass(w.params.slideDuplicateClass)) {
                                    var n = s.index();
                                    w.slideTo(n, a, w.params.runCallbacksOnInit, !0)
                                }
                            }
                        }
                    },
                    setHash: function() {
                        w.hashnav.initialized && w.params.hashnav && (document.location.hash = w.slides.eq(w.activeIndex).attr("data-hash") || "")
                    }
                },
                w.disableKeyboardControl = function() {
                    a(document).off("keydown", p)
                },
                w.enableKeyboardControl = function() {
                    a(document).on("keydown", p)
                },
                w.mousewheel = {
                    event: !1,
                    lastScrollTime: (new window.Date).getTime()
                },
                w.params.mousewheelControl) {
                    if (void 0 !== document.onmousewheel && (w.mousewheel.event = "mousewheel"), !w.mousewheel.event) try {
                        new window.WheelEvent("wheel"),
                        w.mousewheel.event = "wheel"
                    } catch(G) {}
                    w.mousewheel.event || (w.mousewheel.event = "DOMMouseScroll")
                }
                w.disableMousewheelControl = function() {
                    return w.mousewheel.event ? (w.container.off(w.mousewheel.event, u), !0) : !1
                },
                w.enableMousewheelControl = function() {
                    return w.mousewheel.event ? (w.container.on(w.mousewheel.event, u), !0) : !1
                },
                w.parallax = {
                    setTranslate: function() {
                        w.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                            c(this, w.progress)
                        }),
                        w.slides.each(function() {
                            var e = a(this);
                            e.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                                var a = Math.min(Math.max(e[0].progress, -1), 1);
                                c(this, a)
                            })
                        })
                    },
                    setTransition: function(e) {
                        "undefined" == typeof e && (e = w.params.speed),
                        w.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                            var t = a(this),
                            r = parseInt(t.attr("data-swiper-parallax-duration"), 10) || e;
                            0 === e && (r = 0),
                            t.transition(r)
                        })
                    }
                },
                w._plugins = [];
                for (var O in w.plugins) {
                    var A = w.plugins[O](w, w.params[O]);
                    A && w._plugins.push(A)
                }
                return w.callPlugins = function(e) {
                    for (var a = 0; a < w._plugins.length; a++) e in w._plugins[a] && w._plugins[a][e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
                },
                w.emitterEventListeners = {},
                w.emit = function(e) {
                    w.params[e] && w.params[e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                    var a;
                    if (w.emitterEventListeners[e]) for (a = 0; a < w.emitterEventListeners[e].length; a++) w.emitterEventListeners[e][a](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                    w.callPlugins && w.callPlugins(e, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
                },
                w.on = function(e, a) {
                    return e = m(e),
                    w.emitterEventListeners[e] || (w.emitterEventListeners[e] = []),
                    w.emitterEventListeners[e].push(a),
                    w
                },
                w.off = function(e, a) {
                    var t;
                    if (e = m(e), "undefined" == typeof a) return w.emitterEventListeners[e] = [],
                    w;
                    if (w.emitterEventListeners[e] && 0 !== w.emitterEventListeners[e].length) {
                        for (t = 0; t < w.emitterEventListeners[e].length; t++) w.emitterEventListeners[e][t] === a && w.emitterEventListeners[e].splice(t, 1);
                        return w
                    }
                },
                w.once = function(e, a) {
                    e = m(e);
                    var t = function() {
                        a(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]),
                        w.off(e, t)
                    };
                    return w.on(e, t),
                    w
                },
                w.a11y = {
                    makeFocusable: function(e) {
                        return e.attr("tabIndex", "0"),
                        e
                    },
                    addRole: function(e, a) {
                        return e.attr("role", a),
                        e
                    },
                    addLabel: function(e, a) {
                        return e.attr("aria-label", a),
                        e
                    },
                    disable: function(e) {
                        return e.attr("aria-disabled", !0),
                        e
                    },
                    enable: function(e) {
                        return e.attr("aria-disabled", !1),
                        e
                    },
                    onEnterKey: function(e) {
                        13 === e.keyCode && (a(e.target).is(w.params.nextButton) ? (w.onClickNext(e), w.a11y.notify(w.isEnd ? w.params.lastSlideMessage: w.params.nextSlideMessage)) : a(e.target).is(w.params.prevButton) && (w.onClickPrev(e), w.a11y.notify(w.isBeginning ? w.params.firstSlideMessage: w.params.prevSlideMessage)), a(e.target).is("." + w.params.bulletClass) && a(e.target)[0].click())
                    },
                    liveRegion: a('<span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>'),
                    notify: function(e) {
                        var a = w.a11y.liveRegion;
                        0 !== a.length && (a.html(""), a.html(e))
                    },
                    init: function() {
                        if (w.params.nextButton) {
                            var e = a(w.params.nextButton);
                            w.a11y.makeFocusable(e),
                            w.a11y.addRole(e, "button"),
                            w.a11y.addLabel(e, w.params.nextSlideMessage)
                        }
                        if (w.params.prevButton) {
                            var t = a(w.params.prevButton);
                            w.a11y.makeFocusable(t),
                            w.a11y.addRole(t, "button"),
                            w.a11y.addLabel(t, w.params.prevSlideMessage)
                        }
                        a(w.container).append(w.a11y.liveRegion)
                    },
                    initPagination: function() {
                        w.params.pagination && w.params.paginationClickable && w.bullets && w.bullets.length && w.bullets.each(function() {
                            var e = a(this);
                            w.a11y.makeFocusable(e),
                            w.a11y.addRole(e, "button"),
                            w.a11y.addLabel(e, w.params.paginationBulletMessage.replace(/{{index}}/, e.index() + 1))
                        })
                    },
                    destroy: function() {
                        w.a11y.liveRegion && w.a11y.liveRegion.length > 0 && w.a11y.liveRegion.remove()
                    }
                },
                w.init = function() {
                    w.params.loop && w.createLoop(),
                    w.updateContainerSize(),
                    w.updateSlidesSize(),
                    w.updatePagination(),
                    w.params.scrollbar && w.scrollbar && w.scrollbar.set(),
                    "slide" !== w.params.effect && w.effects[w.params.effect] && (w.params.loop || w.updateProgress(), w.effects[w.params.effect].setTranslate()),
                    w.params.loop ? w.slideTo(w.params.initialSlide + w.loopedSlides, 0, w.params.runCallbacksOnInit) : (w.slideTo(w.params.initialSlide, 0, w.params.runCallbacksOnInit), 0 === w.params.initialSlide && (w.parallax && w.params.parallax && w.parallax.setTranslate(), w.lazy && w.params.lazyLoading && (w.lazy.load(), w.lazy.initialImageLoaded = !0))),
                    w.attachEvents(),
                    w.params.observer && w.support.observer && w.initObservers(),
                    w.params.preloadImages && !w.params.lazyLoading && w.preloadImages(),
                    w.params.autoplay && w.startAutoplay(),
                    w.params.keyboardControl && w.enableKeyboardControl && w.enableKeyboardControl(),
                    w.params.mousewheelControl && w.enableMousewheelControl && w.enableMousewheelControl(),
                    w.params.hashnav && w.hashnav && w.hashnav.init(),
                    w.params.a11y && w.a11y && w.a11y.init(),
                    w.emit("onInit", w)
                },
                w.cleanupStyles = function() {
                    w.container.removeClass(w.classNames.join(" ")).removeAttr("style"),
                    w.wrapper.removeAttr("style"),
                    w.slides && w.slides.length && w.slides.removeClass([w.params.slideVisibleClass, w.params.slideActiveClass, w.params.slideNextClass, w.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row"),
                    w.paginationContainer && w.paginationContainer.length && w.paginationContainer.removeClass(w.params.paginationHiddenClass),
                    w.bullets && w.bullets.length && w.bullets.removeClass(w.params.bulletActiveClass),
                    w.params.prevButton && a(w.params.prevButton).removeClass(w.params.buttonDisabledClass),
                    w.params.nextButton && a(w.params.nextButton).removeClass(w.params.buttonDisabledClass),
                    w.params.scrollbar && w.scrollbar && (w.scrollbar.track && w.scrollbar.track.length && w.scrollbar.track.removeAttr("style"), w.scrollbar.drag && w.scrollbar.drag.length && w.scrollbar.drag.removeAttr("style"))
                },
                w.destroy = function(e, a) {
                    w.detachEvents(),
                    w.stopAutoplay(),
                    w.params.loop && w.destroyLoop(),
                    a && w.cleanupStyles(),
                    w.disconnectObservers(),
                    w.params.keyboardControl && w.disableKeyboardControl && w.disableKeyboardControl(),
                    w.params.mousewheelControl && w.disableMousewheelControl && w.disableMousewheelControl(),
                    w.params.a11y && w.a11y && w.a11y.destroy(),
                    w.emit("onDestroy"),
                    e !== !1 && (w = null)
                },
                w.init(),
                w
            }
        };
        t.prototype = {
            isSafari: function() {
                var e = navigator.userAgent.toLowerCase();
                return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0
            } (),
            isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent),
            isArray: function(e) {
                return "[object Array]" === Object.prototype.toString.apply(e)
            },
            browser: {
                ie: window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
                ieTouch: window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 1 || window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 1
            },
            device: function() {
                var e = navigator.userAgent,
                a = e.match(/(Android);?[\s\/]+([\d.]+)?/),
                t = e.match(/(iPad).*OS\s([\d_]+)/),
                r = e.match(/(iPod)(.*OS\s([\d_]+))?/),
                s = !t && e.match(/(iPhone\sOS)\s([\d_]+)/);
                return {
                    ios: t || s || r,
                    android: a
                }
            } (),
            support: {
                touch: window.Modernizr && Modernizr.touch === !0 ||
                function() {
                    return !! ("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch)
                } (),
                transforms3d: window.Modernizr && Modernizr.csstransforms3d === !0 ||
                function() {
                    var e = document.createElement("div").style;
                    return "webkitPerspective" in e || "MozPerspective" in e || "OPerspective" in e || "MsPerspective" in e || "perspective" in e
                } (),
                flexbox: function() {
                    for (var e = document.createElement("div").style, a = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), t = 0; t < a.length; t++) if (a[t] in e) return ! 0
                } (),
                observer: function() {
                    return "MutationObserver" in window || "WebkitMutationObserver" in window
                } ()
            },
            plugins: {}
        };
        for (var r = (function() {
            var e = function(e) {
                var a = this,
                t = 0;
                for (t = 0; t < e.length; t++) a[t] = e[t];
                return a.length = e.length,
                this
            },
            a = function(a, t) {
                var r = [],
                s = 0;
                if (a && !t && a instanceof e) return a;
                if (a) if ("string" == typeof a) {
                    var i, n, o = a.trim();
                    if (o.indexOf("<") >= 0 && o.indexOf(">") >= 0) {
                        var l = "div";
                        for (0 === o.indexOf("<li") && (l = "ul"), 0 === o.indexOf("<tr") && (l = "tbody"), (0 === o.indexOf("<td") || 0 === o.indexOf("<th")) && (l = "tr"), 0 === o.indexOf("<tbody") && (l = "table"), 0 === o.indexOf("<option") && (l = "select"), n = document.createElement(l), n.innerHTML = a, s = 0; s < n.childNodes.length; s++) r.push(n.childNodes[s])
                    } else for (i = t || "#" !== a[0] || a.match(/[ .<>:~]/) ? (t || document).querySelectorAll(a) : [document.getElementById(a.split("#")[1])], s = 0; s < i.length; s++) i[s] && r.push(i[s])
                } else if (a.nodeType || a === window || a === document) r.push(a);
                else if (a.length > 0 && a[0].nodeType) for (s = 0; s < a.length; s++) r.push(a[s]);
                return new e(r)
            };
            return e.prototype = {
                addClass: function(e) {
                    if ("undefined" == typeof e) return this;
                    for (var a = e.split(" "), t = 0; t < a.length; t++) for (var r = 0; r < this.length; r++) this[r].classList.add(a[t]);
                    return this
                },
                removeClass: function(e) {
                    for (var a = e.split(" "), t = 0; t < a.length; t++) for (var r = 0; r < this.length; r++) this[r].classList.remove(a[t]);
                    return this
                },
                hasClass: function(e) {
                    return this[0] ? this[0].classList.contains(e) : !1
                },
                toggleClass: function(e) {
                    for (var a = e.split(" "), t = 0; t < a.length; t++) for (var r = 0; r < this.length; r++) this[r].classList.toggle(a[t]);
                    return this
                },
                attr: function(e, a) {
                    if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
                    for (var t = 0; t < this.length; t++) if (2 === arguments.length) this[t].setAttribute(e, a);
                    else for (var r in e) this[t][r] = e[r],
                    this[t].setAttribute(r, e[r]);
                    return this
                },
                removeAttr: function(e) {
                    for (var a = 0; a < this.length; a++) this[a].removeAttribute(e);
                    return this
                },
                data: function(e, a) {
                    if ("undefined" == typeof a) {
                        if (this[0]) {
                            var t = this[0].getAttribute("data-" + e);
                            return t ? t: this[0].dom7ElementDataStorage && e in this[0].dom7ElementDataStorage ? this[0].dom7ElementDataStorage[e] : void 0
                        }
                        return void 0
                    }
                    for (var r = 0; r < this.length; r++) {
                        var s = this[r];
                        s.dom7ElementDataStorage || (s.dom7ElementDataStorage = {}),
                        s.dom7ElementDataStorage[e] = a
                    }
                    return this
                },
                transform: function(e) {
                    for (var a = 0; a < this.length; a++) {
                        var t = this[a].style;
                        t.webkitTransform = t.MsTransform = t.msTransform = t.MozTransform = t.OTransform = t.transform = e
                    }
                    return this
                },
                transition: function(e) {
                    "string" != typeof e && (e += "ms");
                    for (var a = 0; a < this.length; a++) {
                        var t = this[a].style;
                        t.webkitTransitionDuration = t.MsTransitionDuration = t.msTransitionDuration = t.MozTransitionDuration = t.OTransitionDuration = t.transitionDuration = e
                    }
                    return this
                },
                on: function(e, t, r, s) {
                    function i(e) {
                        var s = e.target;
                        if (a(s).is(t)) r.call(s, e);
                        else for (var i = a(s).parents(), n = 0; n < i.length; n++) a(i[n]).is(t) && r.call(i[n], e)
                    }
                    var n, o, l = e.split(" ");
                    for (n = 0; n < this.length; n++) if ("function" == typeof t || t === !1) for ("function" == typeof t && (r = arguments[1], s = arguments[2] || !1), o = 0; o < l.length; o++) this[n].addEventListener(l[o], r, s);
                    else for (o = 0; o < l.length; o++) this[n].dom7LiveListeners || (this[n].dom7LiveListeners = []),
                    this[n].dom7LiveListeners.push({
                        listener: r,
                        liveListener: i
                    }),
                    this[n].addEventListener(l[o], i, s);
                    return this
                },
                off: function(e, a, t, r) {
                    for (var s = e.split(" "), i = 0; i < s.length; i++) for (var n = 0; n < this.length; n++) if ("function" == typeof a || a === !1)"function" == typeof a && (t = arguments[1], r = arguments[2] || !1),
                    this[n].removeEventListener(s[i], t, r);
                    else if (this[n].dom7LiveListeners) for (var o = 0; o < this[n].dom7LiveListeners.length; o++) this[n].dom7LiveListeners[o].listener === t && this[n].removeEventListener(s[i], this[n].dom7LiveListeners[o].liveListener, r);
                    return this
                },
                once: function(e, a, t, r) {
                    function s(n) {
                        t(n),
                        i.off(e, a, s, r)
                    }
                    var i = this;
                    "function" == typeof a && (a = !1, t = arguments[1], r = arguments[2]),
                    i.on(e, a, s, r)
                },
                trigger: function(e, a) {
                    for (var t = 0; t < this.length; t++) {
                        var r;
                        try {
                            r = new window.CustomEvent(e, {
                                detail: a,
                                bubbles: !0,
                                cancelable: !0
                            })
                        } catch(s) {
                            r = document.createEvent("Event"),
                            r.initEvent(e, !0, !0),
                            r.detail = a
                        }
                        this[t].dispatchEvent(r)
                    }
                    return this
                },
                transitionEnd: function(e) {
                    function a(i) {
                        if (i.target === this) for (e.call(this, i), t = 0; t < r.length; t++) s.off(r[t], a)
                    }
                    var t, r = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"],
                    s = this;
                    if (e) for (t = 0; t < r.length; t++) s.on(r[t], a);
                    return this
                },
                width: function() {
                    return this[0] === window ? window.innerWidth: this.length > 0 ? parseFloat(this.css("width")) : null
                },
                outerWidth: function(e) {
                    return this.length > 0 ? e ? this[0].offsetWidth + parseFloat(this.css("margin-right")) + parseFloat(this.css("margin-left")) : this[0].offsetWidth: null
                },
                height: function() {
                    return this[0] === window ? window.innerHeight: this.length > 0 ? parseFloat(this.css("height")) : null
                },
                outerHeight: function(e) {
                    return this.length > 0 ? e ? this[0].offsetHeight + parseFloat(this.css("margin-top")) + parseFloat(this.css("margin-bottom")) : this[0].offsetHeight: null
                },
                offset: function() {
                    if (this.length > 0) {
                        var e = this[0],
                        a = e.getBoundingClientRect(),
                        t = document.body,
                        r = e.clientTop || t.clientTop || 0,
                        s = e.clientLeft || t.clientLeft || 0,
                        i = window.pageYOffset || e.scrollTop,
                        n = window.pageXOffset || e.scrollLeft;
                        return {
                            top: a.top + i - r,
                            left: a.left + n - s
                        }
                    }
                    return null
                },
                css: function(e, a) {
                    var t;
                    if (1 === arguments.length) {
                        if ("string" != typeof e) {
                            for (t = 0; t < this.length; t++) for (var r in e) this[t].style[r] = e[r];
                            return this
                        }
                        if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(e)
                    }
                    if (2 === arguments.length && "string" == typeof e) {
                        for (t = 0; t < this.length; t++) this[t].style[e] = a;
                        return this
                    }
                    return this
                },
                each: function(e) {
                    for (var a = 0; a < this.length; a++) e.call(this[a], a, this[a]);
                    return this
                },
                html: function(e) {
                    if ("undefined" == typeof e) return this[0] ? this[0].innerHTML: void 0;
                    for (var a = 0; a < this.length; a++) this[a].innerHTML = e;
                    return this
                },
                is: function(t) {
                    if (!this[0]) return ! 1;
                    var r, s;
                    if ("string" == typeof t) {
                        var i = this[0];
                        if (i === document) return t === document;
                        if (i === window) return t === window;
                        if (i.matches) return i.matches(t);
                        if (i.webkitMatchesSelector) return i.webkitMatchesSelector(t);
                        if (i.mozMatchesSelector) return i.mozMatchesSelector(t);
                        if (i.msMatchesSelector) return i.msMatchesSelector(t);
                        for (r = a(t), s = 0; s < r.length; s++) if (r[s] === this[0]) return ! 0;
                        return ! 1
                    }
                    if (t === document) return this[0] === document;
                    if (t === window) return this[0] === window;
                    if (t.nodeType || t instanceof e) {
                        for (r = t.nodeType ? [t] : t, s = 0; s < r.length; s++) if (r[s] === this[0]) return ! 0;
                        return ! 1
                    }
                    return ! 1
                },
                index: function() {
                    if (this[0]) {
                        for (var e = this[0], a = 0; null !== (e = e.previousSibling);) 1 === e.nodeType && a++;
                        return a
                    }
                    return void 0
                },
                eq: function(a) {
                    if ("undefined" == typeof a) return this;
                    var t, r = this.length;
                    return a > r - 1 ? new e([]) : 0 > a ? (t = r + a, new e(0 > t ? [] : [this[t]])) : new e([this[a]])
                },
                append: function(a) {
                    var t, r;
                    for (t = 0; t < this.length; t++) if ("string" == typeof a) {
                        var s = document.createElement("div");
                        for (s.innerHTML = a; s.firstChild;) this[t].appendChild(s.firstChild)
                    } else if (a instanceof e) for (r = 0; r < a.length; r++) this[t].appendChild(a[r]);
                    else this[t].appendChild(a);
                    return this
                },
                prepend: function(a) {
                    var t, r;
                    for (t = 0; t < this.length; t++) if ("string" == typeof a) {
                        var s = document.createElement("div");
                        for (s.innerHTML = a, r = s.childNodes.length - 1; r >= 0; r--) this[t].insertBefore(s.childNodes[r], this[t].childNodes[0])
                    } else if (a instanceof e) for (r = 0; r < a.length; r++) this[t].insertBefore(a[r], this[t].childNodes[0]);
                    else this[t].insertBefore(a, this[t].childNodes[0]);
                    return this
                },
                insertBefore: function(e) {
                    for (var t = a(e), r = 0; r < this.length; r++) if (1 === t.length) t[0].parentNode.insertBefore(this[r], t[0]);
                    else if (t.length > 1) for (var s = 0; s < t.length; s++) t[s].parentNode.insertBefore(this[r].cloneNode(!0), t[s])
                },
                insertAfter: function(e) {
                    for (var t = a(e), r = 0; r < this.length; r++) if (1 === t.length) t[0].parentNode.insertBefore(this[r], t[0].nextSibling);
                    else if (t.length > 1) for (var s = 0; s < t.length; s++) t[s].parentNode.insertBefore(this[r].cloneNode(!0), t[s].nextSibling)
                },
                next: function(t) {
                    return new e(this.length > 0 ? t ? this[0].nextElementSibling && a(this[0].nextElementSibling).is(t) ? [this[0].nextElementSibling] : [] : this[0].nextElementSibling ? [this[0].nextElementSibling] : [] : [])
                },
                nextAll: function(t) {
                    var r = [],
                    s = this[0];
                    if (!s) return new e([]);
                    for (; s.nextElementSibling;) {
                        var i = s.nextElementSibling;
                        t ? a(i).is(t) && r.push(i) : r.push(i),
                        s = i
                    }
                    return new e(r)
                },
                prev: function(t) {
                    return new e(this.length > 0 ? t ? this[0].previousElementSibling && a(this[0].previousElementSibling).is(t) ? [this[0].previousElementSibling] : [] : this[0].previousElementSibling ? [this[0].previousElementSibling] : [] : [])
                },
                prevAll: function(t) {
                    var r = [],
                    s = this[0];
                    if (!s) return new e([]);
                    for (; s.previousElementSibling;) {
                        var i = s.previousElementSibling;
                        t ? a(i).is(t) && r.push(i) : r.push(i),
                        s = i
                    }
                    return new e(r)
                },
                parent: function(e) {
                    for (var t = [], r = 0; r < this.length; r++) e ? a(this[r].parentNode).is(e) && t.push(this[r].parentNode) : t.push(this[r].parentNode);
                    return a(a.unique(t))
                },
                parents: function(e) {
                    for (var t = [], r = 0; r < this.length; r++) for (var s = this[r].parentNode; s;) e ? a(s).is(e) && t.push(s) : t.push(s),
                    s = s.parentNode;
                    return a(a.unique(t))
                },
                find: function(a) {
                    for (var t = [], r = 0; r < this.length; r++) for (var s = this[r].querySelectorAll(a), i = 0; i < s.length; i++) t.push(s[i]);
                    return new e(t)
                },
                children: function(t) {
                    for (var r = [], s = 0; s < this.length; s++) for (var i = this[s].childNodes, n = 0; n < i.length; n++) t ? 1 === i[n].nodeType && a(i[n]).is(t) && r.push(i[n]) : 1 === i[n].nodeType && r.push(i[n]);
                    return new e(a.unique(r))
                },
                remove: function() {
                    for (var e = 0; e < this.length; e++) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
                    return this
                },
                add: function() {
                    var e, t, r = this;
                    for (e = 0; e < arguments.length; e++) {
                        var s = a(arguments[e]);
                        for (t = 0; t < s.length; t++) r[r.length] = s[t],
                        r.length++
                    }
                    return r
                }
            },
            a.fn = e.prototype,
            a.unique = function(e) {
                for (var a = [], t = 0; t < e.length; t++) - 1 === a.indexOf(e[t]) && a.push(e[t]);
                return a
            },
            a
        } ()), s = ["jQuery", "Zepto", "Dom7"], i = 0; i < s.length; i++) window[s[i]] && e(window[s[i]]);
        var n;
        n = "undefined" == typeof r ? window.Dom7 || window.Zepto || window.jQuery: r,
        n && ("transitionEnd" in n.fn || (n.fn.transitionEnd = function(e) {
            function a(i) {
                if (i.target === this) for (e.call(this, i), t = 0; t < r.length; t++) s.off(r[t], a)
            }
            var t, r = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"],
            s = this;
            if (e) for (t = 0; t < r.length; t++) s.on(r[t], a);
            return this
        }), "transform" in n.fn || (n.fn.transform = function(e) {
            for (var a = 0; a < this.length; a++) {
                var t = this[a].style;
                t.webkitTransform = t.MsTransform = t.msTransform = t.MozTransform = t.OTransform = t.transform = e
            }
            return this
        }), "transition" in n.fn || (n.fn.transition = function(e) {
            "string" != typeof e && (e += "ms");
            for (var a = 0; a < this.length; a++) {
                var t = this[a].style;
                t.webkitTransitionDuration = t.MsTransitionDuration = t.msTransitionDuration = t.MozTransitionDuration = t.OTransitionDuration = t.transitionDuration = e
            }
            return this
        })),
        window.Swiper = t
    } (),
    t.exports = window.Swiper || t.exports
});;
/*!cn:components/artTemplate/artTemplate.js*/
define("cn:components/artTemplate/artTemplate",
function(e, n, t) { !
    function() {
        function e(e) {
            return e.replace(w, "").replace(x, ",").replace(T, "").replace(j, "").replace(k, "").split(/^$|,+/)
        }
        function r(e) {
            return "'" + e.replace(/('|\\)/g, "\\$1").replace(/\r/g, "\\r").replace(/\n/g, "\\n") + "'"
        }
        function a(n, t) {
            function a(e) {
                return p += e.split(/\n/).length - 1,
                u && (e = e.replace(/\s+/g, " ").replace(/<!--.*?-->/g, "")),
                e && (e = m[1] + r(e) + m[2] + "\n"),
                e
            }
            function i(n) {
                var r = p;
                if (s ? n = s(n, t) : o && (n = n.replace(/\n/g,
                function() {
                    return p++,
                    "$line=" + p + ";"
                })), 0 === n.indexOf("=")) {
                    var a = f && !/^=[=#]/.test(n);
                    if (n = n.replace(/^=[=#]?|[\s;]*$/g, ""), a) {
                        var i = n.replace(/\s*\([^\)]+\)/, "");
                        d[i] || /^(include|print)$/.test(i) || (n = "$escape(" + n + ")")
                    } else n = "$string(" + n + ")";
                    n = m[1] + n + m[2]
                }
                return o && (n = "$line=" + r + ";" + n),
                y(e(n),
                function(e) {
                    if (e && !$[e]) {
                        var n;
                        n = "print" === e ? b: "include" === e ? w: d[e] ? "$utils." + e: h[e] ? "$helpers." + e: "$data." + e,
                        x += e + "=" + n + ",",
                        $[e] = !0
                    }
                }),
                n + "\n"
            }
            var o = t.debug,
            c = t.openTag,
            l = t.closeTag,
            s = t.parser,
            u = t.compress,
            f = t.escape,
            p = 1,
            $ = {
                $data: 1,
                $filename: 1,
                $utils: 1,
                $helpers: 1,
                $out: 1,
                $line: 1
            },
            g = "".trim,
            m = g ? ["$out='';", "$out+=", ";", "$out"] : ["$out=[];", "$out.push(", ");", "$out.join('')"],
            v = g ? "$out+=text;return $out;": "$out.push(text);",
            b = "function(){var text=''.concat.apply('',arguments);" + v + "}",
            w = "function(filename,data){data=data||$data;var text=$utils.$include(filename,data,$filename);" + v + "}",
            x = "'use strict';var $utils=this,$helpers=$utils.$helpers," + (o ? "$line=0,": ""),
            T = m[0],
            j = "return new String(" + m[3] + ");";
            y(n.split(c),
            function(e) {
                e = e.split(l);
                var n = e[0],
                t = e[1];
                1 === e.length ? T += a(n) : (T += i(n), t && (T += a(t)))
            });
            var k = x + T + j;
            o && (k = "try{" + k + "}catch(e){throw {filename:$filename,name:'Render Error',message:e.message,line:$line,source:" + r(n) + ".split(/\\n/)[$line-1].replace(/^\\s+/,'')};}");
            try {
                var E = new Function("$data", "$filename", k);
                return E.prototype = d,
                E
            } catch(S) {
                throw S.temp = "function anonymous($data,$filename) {" + k + "}",
                S
            }
        }
        var i = function(e, n) {
            return "string" == typeof n ? v(n, {
                filename: e
            }) : l(e, n)
        };
        i.version = "3.0.0",
        i.config = function(e, n) {
            o[e] = n
        };
        var o = i.defaults = {
            openTag: "<%",
            closeTag: "%>",
            escape: !0,
            cache: !0,
            compress: !1,
            parser: null
        },
        c = i.cache = {};
        i.render = function(e, n) {
            return v(e, n)
        };
        var l = i.renderFile = function(e, n) {
            var t = i.get(e) || m({
                filename: e,
                name: "Render Error",
                message: "Template not found"
            });
            return n ? t(n) : t
        };
        i.get = function(e) {
            var n;
            if (c[e]) n = c[e];
            else if ("object" == typeof document) {
                var t = document.getElementById(e);
                if (t) {
                    var r = (t.value || t.innerHTML).replace(/^\s*|\s*$/g, "");
                    n = v(r, {
                        filename: e
                    })
                }
            }
            return n
        };
        var s = function(e, n) {
            return "string" != typeof e && (n = typeof e, "number" === n ? e += "": e = "function" === n ? s(e.call(e)) : ""),
            e
        },
        u = {
            "<": "&#60;",
            ">": "&#62;",
            '"': "&#34;",
            "'": "&#39;",
            "&": "&#38;"
        },
        f = function(e) {
            return u[e]
        },
        p = function(e) {
            return s(e).replace(/&(?![\w#]+;)|[<>"']/g, f)
        },
        $ = Array.isArray ||
        function(e) {
            return "[object Array]" === {}.toString.call(e)
        },
        g = function(e, n) {
            var t, r;
            if ($(e)) for (t = 0, r = e.length; r > t; t++) n.call(e, e[t], t, e);
            else for (t in e) n.call(e, e[t], t)
        },
        d = i.utils = {
            $helpers: {},
            $include: l,
            $string: s,
            $escape: p,
            $each: g
        };
        i.helper = function(e, n) {
            h[e] = n
        };
        var h = i.helpers = d.$helpers;
        i.onerror = function(e) {
            var n = "Template Error\n\n";
            for (var t in e) n += "<" + t + ">\n" + e[t] + "\n\n";
            "object" == typeof console && console.error(n)
        };
        var m = function(e) {
            return i.onerror(e),
            function() {
                return "{Template Error}"
            }
        },
        v = i.compile = function(e, n) {
            function t(t) {
                try {
                    return new l(t, i) + ""
                } catch(r) {
                    return n.debug ? m(r)() : (n.debug = !0, v(e, n)(t))
                }
            }
            n = n || {};
            for (var r in o) void 0 === n[r] && (n[r] = o[r]);
            var i = n.filename;
            try {
                var l = a(e, n)
            } catch(s) {
                return s.filename = i || "anonymous",
                s.name = "Syntax Error",
                m(s)
            }
            return t.prototype = l.prototype,
            t.toString = function() {
                return l.toString()
            },
            i && n.cache && (c[i] = t),
            t
        },
        y = d.$each,
        b = "break,case,catch,continue,debugger,default,delete,do,else,false,finally,for,function,if,in,instanceof,new,null,return,switch,this,throw,true,try,typeof,var,void,while,with,abstract,boolean,byte,char,class,const,double,enum,export,extends,final,float,goto,implements,import,int,interface,long,native,package,private,protected,public,short,static,super,synchronized,throws,transient,volatile,arguments,let,yield,undefined",
        w = /\/\*[\w\W]*?\*\/|\/\/[^\n]*\n|\/\/[^\n]*$|"(?:[^"\\]|\\[\w\W])*"|'(?:[^'\\]|\\[\w\W])*'|\s*\.\s*[$\w\.]+/g,
        x = /[^\w$]+/g,
        T = new RegExp(["\\b" + b.replace(/,/g, "\\b|\\b") + "\\b"].join("|"), "g"),
        j = /^\d[^,]*|,\d[^,]*/g,
        k = /^,+|,+$/g;
        o.openTag = "{{",
        o.closeTag = "}}";
        var E = function(e, n) {
            var t = n.split(":"),
            r = t.shift(),
            a = t.join(":") || "";
            return a && (a = ", " + a),
            "$helpers." + r + "(" + e + a + ")"
        };
        o.parser = function(e, n) {
            e = e.replace(/^\s/, "");
            var t = e.split(" "),
            r = t.shift(),
            a = t.join(" ");
            switch (r) {
            case "if":
                e = "if(" + a + "){";
                break;
            case "else":
                t = "if" === t.shift() ? " if(" + t.join(" ") + ")": "",
                e = "}else" + t + "{";
                break;
            case "/if":
                e = "}";
                break;
            case "each":
                var o = t[0] || "$data",
                c = t[1] || "as",
                l = t[2] || "$value",
                s = t[3] || "$index",
                u = l + "," + s;
                "as" !== c && (o = "[]"),
                e = "$each(" + o + ",function(" + u + "){";
                break;
            case "/each":
                e = "});";
                break;
            case "echo":
                e = "print(" + a + ");";
                break;
            case "print":
            case "include":
                e = r + "(" + t.join(",") + ");";
                break;
            default:
                if ( - 1 !== a.indexOf("|")) {
                    var f = n.escape;
                    0 === e.indexOf("#") && (e = e.substr(1), f = !1);
                    for (var p = 0,
                    $ = e.split("|"), g = $.length, d = f ? "$escape": "$string", h = d + "(" + $[p++] + ")"; g > p; p++) h = E(h, $[p]);
                    e = "=#" + h
                } else e = i.helpers[r] ? "=#" + r + "(" + t.join(",") + ");": "=" + e
            }
            return e
        },
        "function" == typeof define ? t.exports = i: "undefined" != typeof n ? t.exports = i: this.template = i
    } ()
});;
/*!cn:components/mzlib/index.js*/
define("cn:components/mzlib/index",
function(e, n, t) {
    function a(e) {
        if (e) {
            var n = e.find("[name]"),
            t = {};
            return n.each(function(e, n) {
                "" !== n.name && (t[n.name] = n.value)
            }),
            t
        }
    }
    function o(e) {
        for (var n, t = document.cookie ? document.cookie.split(/;[ ]*/) : [], a = 0, o = t.length; o > a; a++) {
            var s = t[a].split("=");
            if (e && e == decodeURIComponent(s[0])) {
                n = decodeURIComponent(s[1]);
                break
            }
        }
        return n
    }
    function s(e, n, t) {
        if (e) {
            var a = n;
            "object" == typeof n && (a = JSON.stringify(n));
            var o = new Date,
            t = t || 86400;
            o.setTime(o.getTime() + 1e3 * t),
            document.cookie = e + "=" + encodeURI(a) + "; expires=" + o.toGMTString()
        }
    }
    function i(e, n, t) {
        if (e) {
            var a = n;
            "object" == typeof n && (a = JSON.stringify(n));
            var o = new Date,
            t = t || 86400;
            o.setTime(o.getTime() + 1e3 * t),
            document.cookie = e + "=" + encodeURI(a) + "; expires=" + o.toGMTString() + "; path=/"
        }
    }
    function c(e) {
        var n = new Date;
        n.setTime(n.getTime() - 1e3);
        var t = o(e);
        null !== t && (document.cookie = e + "=" + encodeURI(t) + "; expires=" + n.toGMTString())
    }
    function r(e) {
        var n = new Date;
        n.setTime(n.getTime() - 1e3);
        var t = o(e);
        null !== t && (document.cookie = e + "=" + encodeURI(t) + "; expires=" + n.toGMTString() + "; path=/")
    }
    function p(e) {
        var n = window.location.search;
        n = n.slice(1);
        var t, a = n.split("&");
        return $.each(a,
        function(n, a) {
            var o = a.split("=");
            return o[0] === e ? void(t = o[1]) : void 0
        }),
        t
    }
    function u(e) {
        var n, t = {};
        return "" === e ? t: (n = e.split("&"), $.each(n,
        function(e, n) {
            var a = n.split("=");
            t[a[0]] = decodeURIComponent(a[1])
        }), t)
    }
    function d(e) {
        var n = [];
        for (var t in e) n.push(t + "=" + e[t]);
        return n.join("&")
    }
    function l(e) {
        var n = navigator.userAgent,
        t = new RegExp(e);
        return t.test(n) ? !0 : !1
    }
    function v(e) {
        var n;
        for (n in e) return ! 1;
        return ! 0
    }
    function f(e) {
        $.ajax({
            url: "/independent",
            type: "get",
            dataType: "json",
            cache: !1,
            success: function(n, t, a) {
                var o = a.getResponseHeader("X-CSRF-TOKEN");
                e && e(o)
            }
        })
    }
    var m = function() {
        var e = $(['<div id="loading" class="loading"><div class="inner">', '<div class="panel">', '<div class="tick-tock">', '<span class="t1"></span><span class="t2"></span>', '<span class="t3"></span><span class="t4"></span>', '<span class="t5"></span><span class="t6"></span>', '<span class="t7"></span><span class="t8"></span>', '<span class="t9"></span><span class="t10"></span>', '<span class="t11"></span><span class="t12"></span>', "</div>", '<div class="txt">è¯·ç¨å€™...</div>', "</div>", "</div></div>"].join("")),
        n = function() {
            e.appendTo("body")
        },
        t = function() {
            e.remove()
        };
        return {
            start: n,
            stop: t
        }
    } ();
    t.exports = {
        load: m,
        uaTester: l,
        formDateToMap: a,
        getCookie: o,
        setCookie: s,
        setCookiePath: i,
        delCookie: c,
        delCookiePaht: r,
        getUrlQuery: p,
        queryToMap: u,
        mapToQuery: d,
        isEmptyObj: v,
        getcsrf: f
    }
});;
/*!cn:components/mall-search/index.js*/
define("cn:components/mall-search/index",
function(o, t, e) {
    function i() {
        var o = this;
        this.created = !1,
        this.$body = s("body"),
        this.cookieTime = 2592e3,
        this.timer = void 0,
        this.cookieVal = a.getCookie("MZ_MALL_SEARCH_HISTORY") ? JSON.parse(a.getCookie("MZ_MALL_SEARCH_HISTORY")) : [],
        this.triggerHash(),
        window.addEventListener("popstate",
        function() {
            o.triggerHash()
        }),
        this.HTMLDecode = function(o) {
            var t = document.createElement("div");
            t.innerHTML = o;
            var e = t.innerText || t.textContent;
            return t = null,
            e
        }
    }
    var s = o("cn:components/zepto/main"),
    a = o("cn:components/mzlib/index");
    i.prototype.showBox = function() {
        var o, t, e = this,
        i = '<header class="header">                        <div class="search-form">                          <form action="//mall.meizu.com/new/s" method="get">                            <div class="so-keyword">                              <input class="so-input" type="search" name="keyword" autocomplete="off" />                              <span class="btn-clear"></span>                            </div>                            <button type="submit" name="">æœç´¢</button>                          </form>                        </div>                        <div class="goback">                          <a class="btn-back">                            <i class="iconfont ico-back"></i>                          </a>                        </div>                      </header>                      <div class="so-recommend"></div>                      <div class="scroll-wrap" id="J_scrollWrap">                        <div>                          <div class="so-history"></div>                        </div>                      </div>                      <div class="scroll-wrap auto-keyword" id="J_autoKeywordWrap">                        <div>                          <div class="so-list"></div>                        </div>                      </div>';
        this.created || (o = s('<div class="search-box"/>').html(i), t = o.find("form"), this.$body.append(o), this.created = !0, this.$searchBox = o, this.$searchForm = t, this.bindEvent(), this.renderList(), this.toSearchList()),
        this.$searchBox.show(),
        this.$body.css("overflow", "hidden"),
        setTimeout(function() {
            e.$searchForm.find(".so-input").focus()
        },
        0),
        this.renderHotWords()
    },
    i.prototype.renderList = function() {
        var o = this.cookieVal,
        t = this.$searchBox.find(".so-history"),
        e = "";
        o.length > 0 ? (o.forEach(function(o) {
            e += '<a href="//mall.meizu.com/new/s?keyword=' + o + '">' + o + "</a>"
        },
        this), t.html('<div class="recommend-hd">åŽ†å²çºªå½•<i class="dele"></i></div><div class="lists">' + e + "</div>")) : t.html('<div class="recommend-hd">åŽ†å²çºªå½•</div><p>æš‚æ— æœç´¢åŽ†å²</p>')
    },
    i.prototype.open = function() {
        this.showBox(),
        window.history.pushState({},
        "æœç´¢", "#search")
    },
    i.prototype.bindEvent = function() {
        var o = this,
        t = this.$searchBox,
        e = this.$searchForm,
        i = t.find(".so-history"),
        n = e.find(".btn-clear");
        t.find(".btn-back").on("click",
        function() {
            o.close(),
            window.history.back()
        }),
        n.on("tap",
        function() {
            e.find(".so-input").val("").focus(),
            s("#J_autoKeywordWrap").hide()
        }),
        e.on("submit",
        function(t) {
            t.preventDefault();
            var e = s(this).find(".so-input"),
            i = s.trim(e.val());
            "" !== i ? (this.submit(), i = o.HTMLDecode(i), "" !== i && (o.cookieVal.unshift(i), o.cookieVal.length > 8 && (o.cookieVal = o.cookieVal.slice(0, 8)), a.setCookiePath("MZ_MALL_SEARCH_HISTORY", JSON.stringify(o.cookieVal), o.cookieTime))) : alert("è¯·è¾“å…¥å…³é”®è¯ï¼")
        }),
        t.on("touchmove",
        function(o) {
            o.preventDefault()
        }),
        i.on("tap", ".dele",
        function() {
            o.cookieVal = [],
            a.delCookiePaht("MZ_MALL_SEARCH_HISTORY"),
            o.renderList()
        }),
        e.on("input", ".so-input",
        function() {
            var t = s.trim(s(this).val());
            o.timer && clearTimeout(o.timer),
            o.timer = setTimeout(function() {
                o.fetchAutoKeyword(t)
            },
            500)
        })
    },
    i.prototype.fetchAutoKeyword = function(o) {
        "" == o ? s("#J_autoKeywordWrap").hide() : s("#J_autoKeywordWrap").show();
        var t = this;
        s.ajax({
            url: "//lists.meizu.com/search/primary/autocomplete?keyword=" + o,
            type: "get",
            dataType: "jsonp",
            success: function(o) {
                var e = t.$searchBox.find(".so-list");
                if (o.success) {
                    var i = o.data.autoComplete;
                    if (i && i.length) {
                        var a = "";
                        s.each(i,
                        function(o, t) {
                            var e = t.name,
                            i = t.num;
                            a += '<a href="//mall.meizu.com/new/s?keyword=' + e + '" data-val="' + e + '">' + e + "<span>çº¦" + i + "ç§</span></a>"
                        }),
                        e.html('<div class="lists">' + a + "</div>")
                    }
                }
            }
        })
    },
    i.prototype.toSearchList = function() {
        var o = this,
        t = s("#J_autoKeywordWrap");
        t.on("tap", "a",
        function(t) {
            t.preventDefault();
            var e = s(this),
            i = e.data("val");
            o.cookieVal.unshift(i),
            o.cookieVal.length > 8 && (o.cookieVal = o.cookieVal.slice(0, 8)),
            a.setCookiePath("MZ_MALL_SEARCH_HISTORY", JSON.stringify(o.cookieVal), o.cookieTime)
        })
    },
    i.prototype.toSearchHotWords = function() {
        var o = this,
        t = o.$searchBox.find(".hotwords");
        t.on("tap", "a",
        function(t) {
            t.preventDefault();
            var e = s(this),
            i = e.data("val");
            o.cookieVal.unshift(i),
            o.cookieVal.length > 8 && (o.cookieVal = o.cookieVal.slice(0, 8)),
            a.setCookiePath("MZ_MALL_SEARCH_HISTORY", JSON.stringify(o.cookieVal), o.cookieTime)
        })
    },
    i.prototype.close = function() {
        this.$searchBox.hide(),
        this.$body.removeAttr("style")
    },
    i.prototype.renderHotWords = function() {
        var o = this,
        t = this.$searchBox,
        e = t.find(".so-recommend");
        s.ajax({
            url: "//lists.meizu.com/search/primary/hot",
            type: "get",
            dataType: "jsonp",
            success: function(t) {
                if (t.success) {
                    var i = t.data;
                    if (i && i.length) {
                        var a = "";
                        s.each(i,
                        function(o, t) {
                            var e = t.keyword;
                            a += '<a href="//mall.meizu.com/new/s?keyword=' + e + '" data-val="' + e + '">' + e + "</a>"
                        }),
                        e.html('<div class="re-wrap"><div class="recommend-hd">å¤§å®¶éƒ½åœ¨æœ</div><div class="hotwords">' + a + "</div></div>"),
                        o.toSearchHotWords()
                    }
                }
            }
        })
    },
    i.prototype.triggerHash = function() {
        var o = this,
        t = location.hash;
        /\#search/.test(t) ? o.showBox() : o.created && o.close()
    },
    e.exports = i
});;
/*!cn:widget/nav/nav.js*/
define("cn:widget/nav/nav",
function(e, n, i) {
    var o = e("cn:components/zepto/main"),
    s = e("cn:components/swiper/swiper");
    i.exports = {
        init: function() {
            new s("#subHeaderLinks", {
                scrollbarHide: !0,
                direction: "horizontal",
                freeMode: !0,
                slidesPerView: "auto",
                onInit: function(e) {
                    var n = o("#subHeaderLinks .swiper-slide.active").index();
                    e.slideTo(n - 1)
                }
            })
        }
    }
});;
/*!cn:widget/nav-pop/nav-pop.js*/
define("cn:widget/nav-pop/nav-pop",
function(o, n, e) {
    var a = o("cn:components/zepto/main");
    e.exports = {
        init: function() {
            var o = a(".nav-header");
            a(".dropdown-list", o).on("click",
            function() {
                a(".popup-menu", o).addClass("active"),
                a("body,html").addClass("overflow-y"),
                setTimeout(function() {
                    a(".popup-menu", o).find(".icon").addClass("on")
                },
                200)
            }),
            a(".popup-menu", o).on("tap",
            function(n) {
                var e = n.target.tagName.toUpperCase();
                "A" != e && "SPAN" != e && "P" != e && (a(".popup-menu", o).removeClass("active").find(".icon").removeClass("on"), a("body,html").removeClass("overflow-y"))
            })
        }
    }
});;
/*!cn:static/global/global.js*/
var $ = require("cn:components/zepto/main"),
widget_nav = require("cn:widget/nav/nav"),
widget_nav_pop = require("cn:widget/nav-pop/nav-pop");
$(function() {
    widget_nav_pop && widget_nav_pop.init(),
    widget_nav && widget_nav.init()
});;
/*!cn:static/global/jweixin-1.2.0.js*/
!
function(e, n) {
    "function" == typeof define && (define.amd || define.cmd) ? define(function() {
        return n(e)
    }) : n(e, !0)
} (this,
function(e, n) {
    function i(n, i, t) {
        e.WeixinJSBridge ? WeixinJSBridge.invoke(n, o(i),
        function(e) {
            c(n, e, t)
        }) : u(n, t)
    }
    function t(n, i, t) {
        e.WeixinJSBridge ? WeixinJSBridge.on(n,
        function(e) {
            t && t.trigger && t.trigger(e),
            c(n, e, i)
        }) : t ? u(n, t) : u(n, i)
    }
    function o(e) {
        return e = e || {},
        e.appId = P.appId,
        e.verifyAppId = P.appId,
        e.verifySignType = "sha1",
        e.verifyTimestamp = P.timestamp + "",
        e.verifyNonceStr = P.nonceStr,
        e.verifySignature = P.signature,
        e
    }
    function r(e) {
        return {
            timeStamp: e.timestamp + "",
            nonceStr: e.nonceStr,
            "package": e["package"],
            paySign: e.paySign,
            signType: e.signType || "SHA1"
        }
    }
    function a(e) {
        return e.postalCode = e.addressPostalCode,
        delete e.addressPostalCode,
        e.provinceName = e.proviceFirstStageName,
        delete e.proviceFirstStageName,
        e.cityName = e.addressCitySecondStageName,
        delete e.addressCitySecondStageName,
        e.countryName = e.addressCountiesThirdStageName,
        delete e.addressCountiesThirdStageName,
        e.detailInfo = e.addressDetailInfo,
        delete e.addressDetailInfo,
        e
    }
    function c(e, n, i) {
        "openEnterpriseChat" == e && (n.errCode = n.err_code),
        delete n.err_code,
        delete n.err_desc,
        delete n.err_detail;
        var t = n.errMsg;
        t || (t = n.err_msg, delete n.err_msg, t = s(e, t), n.errMsg = t),
        i = i || {},
        i._complete && (i._complete(n), delete i._complete),
        t = n.errMsg || "",
        P.debug && !i.isInnerInvoke && alert(JSON.stringify(n));
        var o = t.indexOf(":"),
        r = t.substring(o + 1);
        switch (r) {
        case "ok":
            i.success && i.success(n);
            break;
        case "cancel":
            i.cancel && i.cancel(n);
            break;
        default:
            i.fail && i.fail(n)
        }
        i.complete && i.complete(n)
    }
    function s(e, n) {
        var i = e,
        t = h[i];
        t && (i = t);
        var o = "ok";
        if (n) {
            var r = n.indexOf(":");
            o = n.substring(r + 1),
            "confirm" == o && (o = "ok"),
            "failed" == o && (o = "fail"),
            -1 != o.indexOf("failed_") && (o = o.substring(7)),
            -1 != o.indexOf("fail_") && (o = o.substring(5)),
            o = o.replace(/_/g, " "),
            o = o.toLowerCase(),
            ("access denied" == o || "no permission to execute" == o) && (o = "permission denied"),
            "config" == i && "function not exist" == o && (o = "ok"),
            "" == o && (o = "fail")
        }
        return n = i + ":" + o
    }
    function d(e) {
        if (e) {
            for (var n = 0,
            i = e.length; i > n; ++n) {
                var t = e[n],
                o = g[t];
                o && (e[n] = o)
            }
            return e
        }
    }
    function u(e, n) {
        if (! (!P.debug || n && n.isInnerInvoke)) {
            var i = h[e];
            i && (e = i),
            n && n._complete && delete n._complete,
            console.log('"' + e + '",', n || "")
        }
    }
    function l() {
        if (! (_ || w || P.debug || "6.0.2" > M || V.systemType < 0)) {
            var e = new Image;
            V.appId = P.appId,
            V.initTime = C.initEndTime - C.initStartTime,
            V.preVerifyTime = C.preVerifyEndTime - C.preVerifyStartTime,
            N.getNetworkType({
                isInnerInvoke: !0,
                success: function(n) {
                    V.networkType = n.networkType;
                    var i = "https://open.weixin.qq.com/sdk/report?v=" + V.version + "&o=" + V.isPreVerifyOk + "&s=" + V.systemType + "&c=" + V.clientVersion + "&a=" + V.appId + "&n=" + V.networkType + "&i=" + V.initTime + "&p=" + V.preVerifyTime + "&u=" + V.url;
                    e.src = i
                }
            })
        }
    }
    function p() {
        return (new Date).getTime()
    }
    function f(n) {
        T && (e.WeixinJSBridge ? n() : S.addEventListener && S.addEventListener("WeixinJSBridgeReady", n, !1))
    }
    function m() {
        N.invoke || (N.invoke = function(n, i, t) {
            e.WeixinJSBridge && WeixinJSBridge.invoke(n, o(i), t)
        },
        N.on = function(n, i) {
            e.WeixinJSBridge && WeixinJSBridge.on(n, i)
        })
    }
    if (!e.jWeixin) {
        var g = {
            config: "preVerifyJSAPI",
            onMenuShareTimeline: "menu:share:timeline",
            onMenuShareAppMessage: "menu:share:appmessage",
            onMenuShareQQ: "menu:share:qq",
            onMenuShareWeibo: "menu:share:weiboApp",
            onMenuShareQZone: "menu:share:QZone",
            previewImage: "imagePreview",
            getLocation: "geoLocation",
            openProductSpecificView: "openProductViewWithPid",
            addCard: "batchAddCard",
            openCard: "batchViewCard",
            chooseWXPay: "getBrandWCPayRequest",
            openEnterpriseRedPacket: "getRecevieBizHongBaoRequest",
            startSearchBeacons: "startMonitoringBeacons",
            stopSearchBeacons: "stopMonitoringBeacons",
            onSearchBeacons: "onBeaconsInRange",
            consumeAndShareCard: "consumedShareCard",
            openAddress: "editAddress"
        },
        h = function() {
            var e = {};
            for (var n in g) e[g[n]] = n;
            return e
        } (),
        S = e.document,
        v = S.title,
        I = navigator.userAgent.toLowerCase(),
        y = navigator.platform.toLowerCase(),
        _ = !(!y.match("mac") && !y.match("win")),
        w = -1 != I.indexOf("wxdebugger"),
        T = -1 != I.indexOf("micromessenger"),
        k = -1 != I.indexOf("android"),
        x = -1 != I.indexOf("iphone") || -1 != I.indexOf("ipad"),
        M = function() {
            var e = I.match(/micromessenger\/(\d+\.\d+\.\d+)/) || I.match(/micromessenger\/(\d+\.\d+)/);
            return e ? e[1] : ""
        } (),
        C = {
            initStartTime: p(),
            initEndTime: 0,
            preVerifyStartTime: 0,
            preVerifyEndTime: 0
        },
        V = {
            version: 1,
            appId: "",
            initTime: 0,
            preVerifyTime: 0,
            networkType: "",
            isPreVerifyOk: 1,
            systemType: x ? 1 : k ? 2 : -1,
            clientVersion: M,
            url: encodeURIComponent(location.href)
        },
        P = {},
        A = {
            _completes: []
        },
        L = {
            state: 0,
            data: {}
        };
        f(function() {
            C.initEndTime = p()
        });
        var B = !1,
        O = [],
        N = {
            config: function(e) {
                P = e,
                u("config", e);
                var n = P.check === !1 ? !1 : !0;
                f(function() {
                    if (n) i(g.config, {
                        verifyJsApiList: d(P.jsApiList)
                    },
                    function() {
                        A._complete = function(e) {
                            C.preVerifyEndTime = p(),
                            L.state = 1,
                            L.data = e
                        },
                        A.success = function() {
                            V.isPreVerifyOk = 0
                        },
                        A.fail = function(e) {
                            A._fail ? A._fail(e) : L.state = -1
                        };
                        var e = A._completes;
                        return e.push(function() {
                            l()
                        }),
                        A.complete = function() {
                            for (var n = 0,
                            i = e.length; i > n; ++n) e[n]();
                            A._completes = []
                        },
                        A
                    } ()),
                    C.preVerifyStartTime = p();
                    else {
                        L.state = 1;
                        for (var e = A._completes,
                        t = 0,
                        o = e.length; o > t; ++t) e[t]();
                        A._completes = []
                    }
                }),
                P.beta && m()
            },
            ready: function(e) {
                0 != L.state ? e() : (A._completes.push(e), !T && P.debug && e())
            },
            error: function(e) {
                "6.0.2" > M || ( - 1 == L.state ? e(L.data) : A._fail = e)
            },
            checkJsApi: function(e) {
                var n = function(e) {
                    var n = e.checkResult;
                    for (var i in n) {
                        var t = h[i];
                        t && (n[t] = n[i], delete n[i])
                    }
                    return e
                };
                i("checkJsApi", {
                    jsApiList: d(e.jsApiList)
                },
                function() {
                    return e._complete = function(e) {
                        if (k) {
                            var i = e.checkResult;
                            i && (e.checkResult = JSON.parse(i))
                        }
                        e = n(e)
                    },
                    e
                } ())
            },
            onMenuShareTimeline: function(e) {
                t(g.onMenuShareTimeline, {
                    complete: function() {
                        i("shareTimeline", {
                            title: e.title || v,
                            desc: e.title || v,
                            img_url: e.imgUrl || "",
                            link: e.link || location.href,
                            type: e.type || "link",
                            data_url: e.dataUrl || ""
                        },
                        e)
                    }
                },
                e)
            },
            onMenuShareAppMessage: function(e) {
                t(g.onMenuShareAppMessage, {
                    complete: function() {
                        i("sendAppMessage", {
                            title: e.title || v,
                            desc: e.desc || "",
                            link: e.link || location.href,
                            img_url: e.imgUrl || "",
                            type: e.type || "link",
                            data_url: e.dataUrl || ""
                        },
                        e)
                    }
                },
                e)
            },
            onMenuShareQQ: function(e) {
                t(g.onMenuShareQQ, {
                    complete: function() {
                        i("shareQQ", {
                            title: e.title || v,
                            desc: e.desc || "",
                            img_url: e.imgUrl || "",
                            link: e.link || location.href
                        },
                        e)
                    }
                },
                e)
            },
            onMenuShareWeibo: function(e) {
                t(g.onMenuShareWeibo, {
                    complete: function() {
                        i("shareWeiboApp", {
                            title: e.title || v,
                            desc: e.desc || "",
                            img_url: e.imgUrl || "",
                            link: e.link || location.href
                        },
                        e)
                    }
                },
                e)
            },
            onMenuShareQZone: function(e) {
                t(g.onMenuShareQZone, {
                    complete: function() {
                        i("shareQZone", {
                            title: e.title || v,
                            desc: e.desc || "",
                            img_url: e.imgUrl || "",
                            link: e.link || location.href
                        },
                        e)
                    }
                },
                e)
            },
            startRecord: function(e) {
                i("startRecord", {},
                e)
            },
            stopRecord: function(e) {
                i("stopRecord", {},
                e)
            },
            onVoiceRecordEnd: function(e) {
                t("onVoiceRecordEnd", e)
            },
            playVoice: function(e) {
                i("playVoice", {
                    localId: e.localId
                },
                e)
            },
            pauseVoice: function(e) {
                i("pauseVoice", {
                    localId: e.localId
                },
                e)
            },
            stopVoice: function(e) {
                i("stopVoice", {
                    localId: e.localId
                },
                e)
            },
            onVoicePlayEnd: function(e) {
                t("onVoicePlayEnd", e)
            },
            uploadVoice: function(e) {
                i("uploadVoice", {
                    localId: e.localId,
                    isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1
                },
                e)
            },
            downloadVoice: function(e) {
                i("downloadVoice", {
                    serverId: e.serverId,
                    isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1
                },
                e)
            },
            translateVoice: function(e) {
                i("translateVoice", {
                    localId: e.localId,
                    isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1
                },
                e)
            },
            chooseImage: function(e) {
                i("chooseImage", {
                    scene: "1|2",
                    count: e.count || 9,
                    sizeType: e.sizeType || ["original", "compressed"],
                    sourceType: e.sourceType || ["album", "camera"]
                },
                function() {
                    return e._complete = function(e) {
                        if (k) {
                            var n = e.localIds;
                            n && (e.localIds = JSON.parse(n))
                        }
                    },
                    e
                } ())
            },
            getLocation: function() {},
            previewImage: function(e) {
                i(g.previewImage, {
                    current: e.current,
                    urls: e.urls
                },
                e)
            },
            uploadImage: function(e) {
                i("uploadImage", {
                    localId: e.localId,
                    isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1
                },
                e)
            },
            downloadImage: function(e) {
                i("downloadImage", {
                    serverId: e.serverId,
                    isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1
                },
                e)
            },
            getLocalImgData: function(e) {
                B === !1 ? (B = !0, i("getLocalImgData", {
                    localId: e.localId
                },
                function() {
                    return e._complete = function() {
                        if (B = !1, O.length > 0) {
                            var e = O.shift();
                            wx.getLocalImgData(e)
                        }
                    },
                    e
                } ())) : O.push(e)
            },
            getNetworkType: function(e) {
                var n = function(e) {
                    var n = e.errMsg;
                    e.errMsg = "getNetworkType:ok";
                    var i = e.subtype;
                    if (delete e.subtype, i) e.networkType = i;
                    else {
                        var t = n.indexOf(":"),
                        o = n.substring(t + 1);
                        switch (o) {
                        case "wifi":
                        case "edge":
                        case "wwan":
                            e.networkType = o;
                            break;
                        default:
                            e.errMsg = "getNetworkType:fail"
                        }
                    }
                    return e
                };
                i("getNetworkType", {},
                function() {
                    return e._complete = function(e) {
                        e = n(e)
                    },
                    e
                } ())
            },
            openLocation: function(e) {
                i("openLocation", {
                    latitude: e.latitude,
                    longitude: e.longitude,
                    name: e.name || "",
                    address: e.address || "",
                    scale: e.scale || 28,
                    infoUrl: e.infoUrl || ""
                },
                e)
            },
            getLocation: function(e) {
                e = e || {},
                i(g.getLocation, {
                    type: e.type || "wgs84"
                },
                function() {
                    return e._complete = function(e) {
                        delete e.type
                    },
                    e
                } ())
            },
            hideOptionMenu: function(e) {
                i("hideOptionMenu", {},
                e)
            },
            showOptionMenu: function(e) {
                i("showOptionMenu", {},
                e)
            },
            closeWindow: function(e) {
                e = e || {},
                i("closeWindow", {},
                e)
            },
            hideMenuItems: function(e) {
                i("hideMenuItems", {
                    menuList: e.menuList
                },
                e)
            },
            showMenuItems: function(e) {
                i("showMenuItems", {
                    menuList: e.menuList
                },
                e)
            },
            hideAllNonBaseMenuItem: function(e) {
                i("hideAllNonBaseMenuItem", {},
                e)
            },
            showAllNonBaseMenuItem: function(e) {
                i("showAllNonBaseMenuItem", {},
                e)
            },
            scanQRCode: function(e) {
                e = e || {},
                i("scanQRCode", {
                    needResult: e.needResult || 0,
                    scanType: e.scanType || ["qrCode", "barCode"]
                },
                function() {
                    return e._complete = function(e) {
                        if (x) {
                            var n = e.resultStr;
                            if (n) {
                                var i = JSON.parse(n);
                                e.resultStr = i && i.scan_code && i.scan_code.scan_result
                            }
                        }
                    },
                    e
                } ())
            },
            openAddress: function(e) {
                i(g.openAddress, {},
                function() {
                    return e._complete = function(e) {
                        e = a(e)
                    },
                    e
                } ())
            },
            openProductSpecificView: function(e) {
                i(g.openProductSpecificView, {
                    pid: e.productId,
                    view_type: e.viewType || 0,
                    ext_info: e.extInfo
                },
                e)
            },
            addCard: function(e) {
                for (var n = e.cardList,
                t = [], o = 0, r = n.length; r > o; ++o) {
                    var a = n[o],
                    c = {
                        card_id: a.cardId,
                        card_ext: a.cardExt
                    };
                    t.push(c)
                }
                i(g.addCard, {
                    card_list: t
                },
                function() {
                    return e._complete = function(e) {
                        var n = e.card_list;
                        if (n) {
                            n = JSON.parse(n);
                            for (var i = 0,
                            t = n.length; t > i; ++i) {
                                var o = n[i];
                                o.cardId = o.card_id,
                                o.cardExt = o.card_ext,
                                o.isSuccess = o.is_succ ? !0 : !1,
                                delete o.card_id,
                                delete o.card_ext,
                                delete o.is_succ
                            }
                            e.cardList = n,
                            delete e.card_list
                        }
                    },
                    e
                } ())
            },
            chooseCard: function(e) {
                i("chooseCard", {
                    app_id: P.appId,
                    location_id: e.shopId || "",
                    sign_type: e.signType || "SHA1",
                    card_id: e.cardId || "",
                    card_type: e.cardType || "",
                    card_sign: e.cardSign,
                    time_stamp: e.timestamp + "",
                    nonce_str: e.nonceStr
                },
                function() {
                    return e._complete = function(e) {
                        e.cardList = e.choose_card_info,
                        delete e.choose_card_info
                    },
                    e
                } ())
            },
            openCard: function(e) {
                for (var n = e.cardList,
                t = [], o = 0, r = n.length; r > o; ++o) {
                    var a = n[o],
                    c = {
                        card_id: a.cardId,
                        code: a.code
                    };
                    t.push(c)
                }
                i(g.openCard, {
                    card_list: t
                },
                e)
            },
            consumeAndShareCard: function(e) {
                i(g.consumeAndShareCard, {
                    consumedCardId: e.cardId,
                    consumedCode: e.code
                },
                e)
            },
            chooseWXPay: function(e) {
                i(g.chooseWXPay, r(e), e)
            },
            openEnterpriseRedPacket: function(e) {
                i(g.openEnterpriseRedPacket, r(e), e)
            },
            startSearchBeacons: function(e) {
                i(g.startSearchBeacons, {
                    ticket: e.ticket
                },
                e)
            },
            stopSearchBeacons: function(e) {
                i(g.stopSearchBeacons, {},
                e)
            },
            onSearchBeacons: function(e) {
                t(g.onSearchBeacons, e)
            },
            openEnterpriseChat: function(e) {
                i("openEnterpriseChat", {
                    useridlist: e.userIds,
                    chatname: e.groupName
                },
                e)
            }
        },
        E = 1,
        b = {};
        return S.addEventListener("error",
        function(e) {
            if (!k) {
                var n = e.target,
                i = n.tagName,
                t = n.src;
                if ("IMG" == i || "VIDEO" == i || "AUDIO" == i || "SOURCE" == i) {
                    var o = -1 != t.indexOf("wxlocalresource://");
                    if (o) {
                        e.preventDefault(),
                        e.stopPropagation();
                        var r = n["wx-id"];
                        if (r || (r = E++, n["wx-id"] = r), b[r]) return;
                        b[r] = !0,
                        wx.ready(function() {
                            wx.getLocalImgData({
                                localId: t,
                                success: function(e) {
                                    n.src = e.localData
                                }
                            })
                        })
                    }
                }
            }
        },
        !0),
        S.addEventListener("load",
        function(e) {
            if (!k) {
                var n = e.target,
                i = n.tagName;
                if (n.src, "IMG" == i || "VIDEO" == i || "AUDIO" == i || "SOURCE" == i) {
                    var t = n["wx-id"];
                    t && (b[t] = !1)
                }
            }
        },
        !0),
        n && (e.wx = e.jWeixin = N),
        N
    }
});;
/*!cn:widget/mask/mask.js*/
define("cn:widget/mask/mask",
function(o, t, n) {
    var e = function(o) {
        function t() {
            e.config.isClose || e.dom.$close.hide(),
            n()
        }
        function n() {
            e.dom.$container.on("click",
            function(o) {
                var t = $(o.target),
                n = t === e.dom.$close,
                i = e.dom.$content !== t && 0 === e.dom.$content.has(o.target).length; (i || n) && e.hide()
            }),
            e.dom.$container.on("touchmove",
            function(o) {
                var t = $(o.target),
                n = e.dom.$content !== t && 0 === e.dom.$content.has(o.target).length;
                return n ? !1 : void 0
            })
        }
        var e = this,
        i = {
            container: ".widget-mask",
            content: ".widget-mask-content",
            iconClose: ".icon-close",
            isClose: !0,
            template: "",
            beforeShow: function() {},
            beforeHide: function() {},
            afterShow: function() {},
            afterHide: function() {}
        };
        this.config = $.extend({},
        i, o),
        this.isShow = !1;
        var c = $(this.config.container);
        this.dom = {
            $container: c,
            $content: c.find(this.config.content),
            $close: c.find(this.config.iconClose)
        },
        t()
    };
    e.prototype.show = function(o) {
        this.config.beforeShow(),
        this.dom.$content.empty().append(o),
        this.dom.$container.addClass("active"),
        setTimeout(function() {
            $("body, html").addClass("no-scroll")
        },
        200),
        this.isShow = !0,
        this.config.afterShow()
    },
    e.prototype.hide = function() {
        this.config.beforeHide(),
        this.dom.$container.removeClass("active"),
        $("body, html").removeClass("no-scroll"),
        this.config.afterHide(),
        this.isShow = !1
    },
    n.exports = e
});;
/*!cn:widget/weixin/weixin.js*/
define("cn:widget/weixin/weixin",
function(e, n, a) {
    function i() {
        var e;
        e = document.createElement("script"),
        e.setAttribute("src", "https://act.meizu.cn/index.php?mod=oauth&action=get_wx_js_conf&callback=setConfigData&url=" + encodeURIComponent(location.href.split("#")[0])),
        document.getElementsByTagName("head")[0].appendChild(e),
        e.onerror = function() {
            alert("åŠ è½½å¾®ä¿¡é…ç½®å¤±è´¥")
        }
    }
    var t = {};
    a.exports = {
        init: function(e) {
            var n = $.extend({},
            e);
            return t.shareImageUrl = n.shareImageUrl,
            t.link = n.shareLink || window.location.href,
            t.title = n.title || $("html title").text(),
            t.longTitle = n.longTitle || "",
            t.desc = n.desc || $('html meta[name="description"]').attr("content"),
            t.success = n.success,
            t.cancel = n.cancel,
            t.handleWxError = n.handleWxError,
            t.handleWeixinJSBridgeReady = n.handleWeixinJSBridgeReady,
            setTimeout(function() {
                i()
            },
            200),
            t
        }
    },
    window.setConfigData = function(e) {
        wx.config({
            debug: !1,
            appId: e.data.appid,
            nonceStr: e.data.noncestr,
            timestamp: e.data.timestamp,
            signature: e.data.signature,
            jsApiList: ["checkJsApi", "onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ", "onMenuShareWeibo", "onMenuShareQZone", "chooseImage", "previewImage", "uploadImage", "getLocalImgData", "downloadImage"]
        }),
        wx.ready(function() {
            var e = {
                imgUrl: t.shareImageUrl,
                link: t.link,
                title: t.title,
                desc: t.desc,
                success: function(e) {
                    t.success && t.success(e)
                },
                cancel: function(e) {
                    t.cancel && t.cancel(e)
                }
            },
            n = {
                imgUrl: t.shareImageUrl,
                link: t.link,
                title: t.longTitle,
                desc: t.desc,
                success: function(e) {
                    t.success && t.success(e)
                },
                cancel: function(e) {
                    t.cancel && t.cancel(e)
                }
            };
            wx.checkJsApi({
                jsApiList: ["checkJsApi", "onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ", "onMenuShareWeibo"],
                success: function() {}
            }),
            wx.onMenuShareAppMessage(e),
            wx.onMenuShareTimeline(n),
            wx.onMenuShareQQ(e),
            wx.onMenuShareWeibo(e)
        }),
        document.addEventListener("WeixinJSBridgeReady",
        function(e) {
            t.handleWeixinJSBridgeReady && t.handleWeixinJSBridgeReady(e)
        }),
        wx.error(function(e) {
            t.handleWxError(e),
            alert(e.errMsg)
        })
    }
});;
/*!cn:static/global/weixin.js*/
var $ = require("cn:components/zepto/main"),
weixin = require("cn:widget/weixin/weixin"),
wxWidgetConfig = {
    audioControl: ".audio-control",
    loadingContainer: ".loading-container",
    shareImageUrl: "[data-share]",
    autoCloseFlag: "auto-close"
};
$(function() {
    function e() {
        var e = window.location.href;
        return /\/weixin/.test(e)
    }
    function i() {
        weixin.init({
            shareImageUrl: r.attr("src")
        }),
        t && (t.pause(), t.play(), n())
    }
    function n() {
        var e = a[0],
        i = !0;
        t && (e.addEventListener("touchstart",
        function() {
            t.paused ? (t.play(), e.classList.remove("disabled")) : (t.pause(), e.classList.add("disabled"))
        },
        !1), document.querySelector("body").addEventListener("touchstart",
        function() {
            i && t.paused && (t.play(), e.classList.remove("disabled"), i = !1)
        }))
    }
    var a = $(wxWidgetConfig.audioControl),
    t = a.find("audio")[0],
    o = $(wxWidgetConfig.loadingContainer),
    r = $(wxWidgetConfig.shareImageUrl),
    d = a.attr(wxWidgetConfig.autoCloseFlag);
    null !== d && "false" !== d && setTimeout(function() {
        o.hide()
    },
    3e3),
    e() && i()
});