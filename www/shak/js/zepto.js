var Zepto = function () {
    function a(a) {
        return null == a ? String(a) : W[X.call(a)] || "object"
    }

    function b(b) {
        return "function" == a(b)
    }

    function c(a) {
        return null != a && a == a.window
    }

    function d(a) {
        return null != a && a.nodeType == a.DOCUMENT_NODE
    }

    function e(b) {
        return "object" == a(b)
    }

    function f(a) {
        return e(a) && !c(a) && Object.getPrototypeOf(a) == Object.prototype
    }

    function g(a) {
        return "number" == typeof a.length
    }

    function h(a) {
        return E.call(a, function (a) {
            return null != a
        })
    }

    function i(a) {
        return a.length > 0 ? y.fn.concat.apply([], a) : a
    }

    function j(a) {
        return a.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
    }

    function k(a) {
        return a in I ? I[a] : I[a] = new RegExp("(^|\\s)" + a + "(\\s|$)")
    }

    function l(a, b) {
        return "number" != typeof b || J[j(a)] ? b : b + "px"
    }

    function m(a) {
        var b, c;
        return H[a] || (b = G.createElement(a), G.body.appendChild(b), c = getComputedStyle(b, "").getPropertyValue("display"), b.parentNode.removeChild(b), "none" == c && (c = "block"), H[a] = c), H[a]
    }

    function n(a) {
        return "children" in a ? F.call(a.children) : y.map(a.childNodes, function (a) {
            return 1 == a.nodeType ? a : void 0
        })
    }

    function o(a, b) {
        var c, d = a ? a.length : 0;
        for (c = 0; d > c; c++)this[c] = a[c];
        this.length = d, this.selector = b || ""
    }

    function p(a, b, c) {
        for (x in b)c && (f(b[x]) || _(b[x])) ? (f(b[x]) && !f(a[x]) && (a[x] = {}), _(b[x]) && !_(a[x]) && (a[x] = []), p(a[x], b[x], c)) : b[x] !== w && (a[x] = b[x])
    }

    function q(a, b) {
        return null == b ? y(a) : y(a).filter(b)
    }

    function r(a, c, d, e) {
        return b(c) ? c.call(a, d, e) : c
    }

    function s(a, b, c) {
        null == c ? a.removeAttribute(b) : a.setAttribute(b, c)
    }

    function t(a, b) {
        var c = a.className || "", d = c && c.baseVal !== w;
        return b === w ? d ? c.baseVal : c : void(d ? c.baseVal = b : a.className = b)
    }

    function u(a) {
        try {
            return a ? "true" == a || ("false" == a ? !1 : "null" == a ? null : +a + "" == a ? +a : /^[\[\{]/.test(a) ? y.parseJSON(a) : a) : a
        } catch (b) {
            return a
        }
    }

    function v(a, b) {
        b(a);
        for (var c = 0, d = a.childNodes.length; d > c; c++)v(a.childNodes[c], b)
    }

    var w, x, y, z, A, B, C = [], D = C.concat, E = C.filter, F = C.slice, G = window.document, H = {}, I = {}, J = {
        "column-count": 1,
        columns: 1,
        "font-weight": 1,
        "line-height": 1,
        opacity: 1,
        "z-index": 1,
        zoom: 1
    }, K = /^\s*<(\w+|!)[^>]*>/, L = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, M = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, N = /^(?:body|html)$/i, O = /([A-Z])/g, P = ["val", "css", "html", "text", "data", "width", "height", "offset"], Q = ["after", "prepend", "before", "append"], R = G.createElement("table"), S = G.createElement("tr"), T = {
        tr: G.createElement("tbody"),
        tbody: R,
        thead: R,
        tfoot: R,
        td: S,
        th: S,
        "*": G.createElement("div")
    }, U = /complete|loaded|interactive/, V = /^[\w-]*$/, W = {}, X = W.toString, Y = {}, Z = G.createElement("div"), $ = {
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
    }, _ = Array.isArray || function (a) {
            return a instanceof Array
        };
    return Y.matches = function (a, b) {
        if (!b || !a || 1 !== a.nodeType)return !1;
        var c = a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.matchesSelector;
        if (c)return c.call(a, b);
        var d, e = a.parentNode, f = !e;
        return f && (e = Z).appendChild(a), d = ~Y.qsa(e, b).indexOf(a), f && Z.removeChild(a), d
    }, A = function (a) {
        return a.replace(/-+(.)?/g, function (a, b) {
            return b ? b.toUpperCase() : ""
        })
    }, B = function (a) {
        return E.call(a, function (b, c) {
            return a.indexOf(b) == c
        })
    }, Y.fragment = function (a, b, c) {
        var d, e, g;
        return L.test(a) && (d = y(G.createElement(RegExp.$1))), d || (a.replace && (a = a.replace(M, "<$1></$2>")), b === w && (b = K.test(a) && RegExp.$1), b in T || (b = "*"), g = T[b], g.innerHTML = "" + a, d = y.each(F.call(g.childNodes), function () {
            g.removeChild(this)
        })), f(c) && (e = y(d), y.each(c, function (a, b) {
            P.indexOf(a) > -1 ? e[a](b) : e.attr(a, b)
        })), d
    }, Y.Z = function (a, b) {
        return new o(a, b)
    }, Y.isZ = function (a) {
        return a instanceof Y.Z
    }, Y.init = function (a, c) {
        var d;
        if (!a)return Y.Z();
        if ("string" == typeof a)if (a = a.trim(), "<" == a[0] && K.test(a))d = Y.fragment(a, RegExp.$1, c), a = null; else {
            if (c !== w)return y(c).find(a);
            d = Y.qsa(G, a)
        } else {
            if (b(a))return y(G).ready(a);
            if (Y.isZ(a))return a;
            if (_(a))d = h(a); else if (e(a))d = [a], a = null; else if (K.test(a))d = Y.fragment(a.trim(), RegExp.$1, c), a = null; else {
                if (c !== w)return y(c).find(a);
                d = Y.qsa(G, a)
            }
        }
        return Y.Z(d, a)
    }, y = function (a, b) {
        return Y.init(a, b)
    }, y.extend = function (a) {
        var b, c = F.call(arguments, 1);
        return "boolean" == typeof a && (b = a, a = c.shift()), c.forEach(function (c) {
            p(a, c, b)
        }), a
    }, Y.qsa = function (a, b) {
        var c, d = "#" == b[0], e = !d && "." == b[0], f = d || e ? b.slice(1) : b, g = V.test(f);
        return a.getElementById && g && d ? (c = a.getElementById(f)) ? [c] : [] : 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType ? [] : F.call(g && !d && a.getElementsByClassName ? e ? a.getElementsByClassName(f) : a.getElementsByTagName(b) : a.querySelectorAll(b))
    }, y.contains = G.documentElement.contains ? function (a, b) {
        return a !== b && a.contains(b)
    } : function (a, b) {
        for (; b && (b = b.parentNode);)if (b === a)return !0;
        return !1
    }, y.type = a, y.isFunction = b, y.isWindow = c, y.isArray = _, y.isPlainObject = f, y.isEmptyObject = function (a) {
        var b;
        for (b in a)return !1;
        return !0
    }, y.inArray = function (a, b, c) {
        return C.indexOf.call(b, a, c)
    }, y.camelCase = A, y.trim = function (a) {
        return null == a ? "" : String.prototype.trim.call(a)
    }, y.uuid = 0, y.support = {}, y.expr = {}, y.noop = function () {
    }, y.map = function (a, b) {
        var c, d, e, f = [];
        if (g(a))for (d = 0; d < a.length; d++)c = b(a[d], d), null != c && f.push(c); else for (e in a)c = b(a[e], e), null != c && f.push(c);
        return i(f)
    }, y.each = function (a, b) {
        var c, d;
        if (g(a)) {
            for (c = 0; c < a.length; c++)if (b.call(a[c], c, a[c]) === !1)return a
        } else for (d in a)if (b.call(a[d], d, a[d]) === !1)return a;
        return a
    }, y.grep = function (a, b) {
        return E.call(a, b)
    }, window.JSON && (y.parseJSON = JSON.parse), y.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (a, b) {
        W["[object " + b + "]"] = b.toLowerCase()
    }), y.fn = {
        constructor: Y.Z,
        length: 0,
        forEach: C.forEach,
        reduce: C.reduce,
        push: C.push,
        sort: C.sort,
        splice: C.splice,
        indexOf: C.indexOf,
        concat: function () {
            var a, b, c = [];
            for (a = 0; a < arguments.length; a++)b = arguments[a], c[a] = Y.isZ(b) ? b.toArray() : b;
            return D.apply(Y.isZ(this) ? this.toArray() : this, c)
        },
        map: function (a) {
            return y(y.map(this, function (b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function () {
            return y(F.apply(this, arguments))
        },
        ready: function (a) {
            return U.test(G.readyState) && G.body ? a(y) : G.addEventListener("DOMContentLoaded", function () {
                a(y)
            }, !1), this
        },
        get: function (a) {
            return a === w ? F.call(this) : this[a >= 0 ? a : a + this.length]
        },
        toArray: function () {
            return this.get()
        },
        size: function () {
            return this.length
        },
        remove: function () {
            return this.each(function () {
                null != this.parentNode && this.parentNode.removeChild(this)
            })
        },
        each: function (a) {
            return C.every.call(this, function (b, c) {
                return a.call(b, c, b) !== !1
            }), this
        },
        filter: function (a) {
            return b(a) ? this.not(this.not(a)) : y(E.call(this, function (b) {
                return Y.matches(b, a)
            }))
        },
        add: function (a, b) {
            return y(B(this.concat(y(a, b))))
        },
        is: function (a) {
            return this.length > 0 && Y.matches(this[0], a)
        },
        not: function (a) {
            var c = [];
            if (b(a) && a.call !== w)this.each(function (b) {
                a.call(this, b) || c.push(this)
            }); else {
                var d = "string" == typeof a ? this.filter(a) : g(a) && b(a.item) ? F.call(a) : y(a);
                this.forEach(function (a) {
                    d.indexOf(a) < 0 && c.push(a)
                })
            }
            return y(c)
        },
        has: function (a) {
            return this.filter(function () {
                return e(a) ? y.contains(this, a) : y(this).find(a).size()
            })
        },
        eq: function (a) {
            return -1 === a ? this.slice(a) : this.slice(a, +a + 1)
        },
        first: function () {
            var a = this[0];
            return a && !e(a) ? a : y(a)
        },
        last: function () {
            var a = this[this.length - 1];
            return a && !e(a) ? a : y(a)
        },
        find: function (a) {
            var b, c = this;
            return b = a ? "object" == typeof a ? y(a).filter(function () {
                var a = this;
                return C.some.call(c, function (b) {
                    return y.contains(b, a)
                })
            }) : 1 == this.length ? y(Y.qsa(this[0], a)) : this.map(function () {
                return Y.qsa(this, a)
            }) : y()
        },
        closest: function (a, b) {
            var c = this[0], e = !1;
            for ("object" == typeof a && (e = y(a)); c && !(e ? e.indexOf(c) >= 0 : Y.matches(c, a));)c = c !== b && !d(c) && c.parentNode;
            return y(c)
        },
        parents: function (a) {
            for (var b = [], c = this; c.length > 0;)c = y.map(c, function (a) {
                return (a = a.parentNode) && !d(a) && b.indexOf(a) < 0 ? (b.push(a), a) : void 0
            });
            return q(b, a)
        },
        parent: function (a) {
            return q(B(this.pluck("parentNode")), a)
        },
        children: function (a) {
            return q(this.map(function () {
                return n(this)
            }), a)
        },
        contents: function () {
            return this.map(function () {
                return this.contentDocument || F.call(this.childNodes)
            })
        },
        siblings: function (a) {
            return q(this.map(function (a, b) {
                return E.call(n(b.parentNode), function (a) {
                    return a !== b
                })
            }), a)
        },
        empty: function () {
            return this.each(function () {
                this.innerHTML = ""
            })
        },
        pluck: function (a) {
            return y.map(this, function (b) {
                return b[a]
            })
        },
        show: function () {
            return this.each(function () {
                "none" == this.style.display && (this.style.display = ""), "none" == getComputedStyle(this, "").getPropertyValue("display") && (this.style.display = m(this.nodeName))
            })
        },
        replaceWith: function (a) {
            return this.before(a).remove()
        },
        wrap: function (a) {
            var c = b(a);
            if (this[0] && !c)var d = y(a).get(0), e = d.parentNode || this.length > 1;
            return this.each(function (b) {
                y(this).wrapAll(c ? a.call(this, b) : e ? d.cloneNode(!0) : d)
            })
        },
        wrapAll: function (a) {
            if (this[0]) {
                y(this[0]).before(a = y(a));
                for (var b; (b = a.children()).length;)a = b.first();
                y(a).append(this)
            }
            return this
        },
        wrapInner: function (a) {
            var c = b(a);
            return this.each(function (b) {
                var d = y(this), e = d.contents(), f = c ? a.call(this, b) : a;
                e.length ? e.wrapAll(f) : d.append(f)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                y(this).replaceWith(y(this).children())
            }), this
        },
        clone: function () {
            return this.map(function () {
                return this.cloneNode(!0)
            })
        },
        hide: function () {
            return this.css("display", "none")
        },
        toggle: function (a) {
            return this.each(function () {
                var b = y(this);
                (a === w ? "none" == b.css("display") : a) ? b.show() : b.hide()
            })
        },
        prev: function (a) {
            return y(this.pluck("previousElementSibling")).filter(a || "*")
        },
        next: function (a) {
            return y(this.pluck("nextElementSibling")).filter(a || "*")
        },
        html: function (a) {
            return 0 in arguments ? this.each(function (b) {
                var c = this.innerHTML;
                y(this).empty().append(r(this, a, b, c))
            }) : 0 in this ? this[0].innerHTML : null
        },
        text: function (a) {
            return 0 in arguments ? this.each(function (b) {
                var c = r(this, a, b, this.textContent);
                this.textContent = null == c ? "" : "" + c
            }) : 0 in this ? this[0].textContent : null
        },
        attr: function (a, b) {
            var c;
            return "string" != typeof a || 1 in arguments ? this.each(function (c) {
                if (1 === this.nodeType)if (e(a))for (x in a)s(this, x, a[x]); else s(this, a, r(this, b, c, this.getAttribute(a)))
            }) : this.length && 1 === this[0].nodeType ? !(c = this[0].getAttribute(a)) && a in this[0] ? this[0][a] : c : w
        },
        removeAttr: function (a) {
            return this.each(function () {
                1 === this.nodeType && a.split(" ").forEach(function (a) {
                    s(this, a)
                }, this)
            })
        },
        prop: function (a, b) {
            return a = $[a] || a, 1 in arguments ? this.each(function (c) {
                this[a] = r(this, b, c, this[a])
            }) : this[0] && this[0][a]
        },
        data: function (a, b) {
            var c = "data-" + a.replace(O, "-$1").toLowerCase(), d = 1 in arguments ? this.attr(c, b) : this.attr(c);
            return null !== d ? u(d) : w
        },
        val: function (a) {
            return 0 in arguments ? this.each(function (b) {
                this.value = r(this, a, b, this.value)
            }) : this[0] && (this[0].multiple ? y(this[0]).find("option").filter(function () {
                return this.selected
            }).pluck("value") : this[0].value)
        },
        offset: function (a) {
            if (a)return this.each(function (b) {
                var c = y(this), d = r(this, a, b, c.offset()), e = c.offsetParent().offset(), f = {
                    top: d.top - e.top,
                    left: d.left - e.left
                };
                "static" == c.css("position") && (f.position = "relative"), c.css(f)
            });
            if (!this.length)return null;
            if (!y.contains(G.documentElement, this[0]))return {top: 0, left: 0};
            var b = this[0].getBoundingClientRect();
            return {
                left: b.left + window.pageXOffset,
                top: b.top + window.pageYOffset,
                width: Math.round(b.width),
                height: Math.round(b.height)
            }
        },
        css: function (b, c) {
            if (arguments.length < 2) {
                var d, e = this[0];
                if (!e)return;
                if (d = getComputedStyle(e, ""), "string" == typeof b)return e.style[A(b)] || d.getPropertyValue(b);
                if (_(b)) {
                    var f = {};
                    return y.each(b, function (a, b) {
                        f[b] = e.style[A(b)] || d.getPropertyValue(b)
                    }), f
                }
            }
            var g = "";
            if ("string" == a(b))c || 0 === c ? g = j(b) + ":" + l(b, c) : this.each(function () {
                this.style.removeProperty(j(b))
            }); else for (x in b)b[x] || 0 === b[x] ? g += j(x) + ":" + l(x, b[x]) + ";" : this.each(function () {
                this.style.removeProperty(j(x))
            });
            return this.each(function () {
                this.style.cssText += ";" + g
            })
        },
        index: function (a) {
            return a ? this.indexOf(y(a)[0]) : this.parent().children().indexOf(this[0])
        },
        hasClass: function (a) {
            return a ? C.some.call(this, function (a) {
                return this.test(t(a))
            }, k(a)) : !1
        },
        addClass: function (a) {
            return a ? this.each(function (b) {
                if ("className" in this) {
                    z = [];
                    var c = t(this), d = r(this, a, b, c);
                    d.split(/\s+/g).forEach(function (a) {
                        y(this).hasClass(a) || z.push(a)
                    }, this), z.length && t(this, c + (c ? " " : "") + z.join(" "))
                }
            }) : this
        },
        removeClass: function (a) {
            return this.each(function (b) {
                if ("className" in this) {
                    if (a === w)return t(this, "");
                    z = t(this), r(this, a, b, z).split(/\s+/g).forEach(function (a) {
                        z = z.replace(k(a), " ")
                    }), t(this, z.trim())
                }
            })
        },
        toggleClass: function (a, b) {
            return a ? this.each(function (c) {
                var d = y(this), e = r(this, a, c, t(this));
                e.split(/\s+/g).forEach(function (a) {
                    (b === w ? !d.hasClass(a) : b) ? d.addClass(a) : d.removeClass(a)
                })
            }) : this
        },
        scrollTop: function (a) {
            if (this.length) {
                var b = "scrollTop" in this[0];
                return a === w ? b ? this[0].scrollTop : this[0].pageYOffset : this.each(b ? function () {
                    this.scrollTop = a
                } : function () {
                    this.scrollTo(this.scrollX, a)
                })
            }
        },
        scrollLeft: function (a) {
            if (this.length) {
                var b = "scrollLeft" in this[0];
                return a === w ? b ? this[0].scrollLeft : this[0].pageXOffset : this.each(b ? function () {
                    this.scrollLeft = a
                } : function () {
                    this.scrollTo(a, this.scrollY)
                })
            }
        },
        position: function () {
            if (this.length) {
                var a = this[0], b = this.offsetParent(), c = this.offset(), d = N.test(b[0].nodeName) ? {
                    top: 0,
                    left: 0
                } : b.offset();
                return c.top -= parseFloat(y(a).css("margin-top")) || 0, c.left -= parseFloat(y(a).css("margin-left")) || 0, d.top += parseFloat(y(b[0]).css("border-top-width")) || 0, d.left += parseFloat(y(b[0]).css("border-left-width")) || 0, {
                    top: c.top - d.top,
                    left: c.left - d.left
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var a = this.offsetParent || G.body; a && !N.test(a.nodeName) && "static" == y(a).css("position");)a = a.offsetParent;
                return a
            })
        }
    }, y.fn.detach = y.fn.remove, ["width", "height"].forEach(function (a) {
        var b = a.replace(/./, function (a) {
            return a[0].toUpperCase()
        });
        y.fn[a] = function (e) {
            var f, g = this[0];
            return e === w ? c(g) ? g["inner" + b] : d(g) ? g.documentElement["scroll" + b] : (f = this.offset()) && f[a] : this.each(function (b) {
                g = y(this), g.css(a, r(this, e, b, g[a]()))
            })
        }
    }), Q.forEach(function (b, c) {
        var d = c % 2;
        y.fn[b] = function () {
            var b, e, f = y.map(arguments, function (c) {
                return b = a(c), "object" == b || "array" == b || null == c ? c : Y.fragment(c)
            }), g = this.length > 1;
            return f.length < 1 ? this : this.each(function (a, b) {
                e = d ? b : b.parentNode, b = 0 == c ? b.nextSibling : 1 == c ? b.firstChild : 2 == c ? b : null;
                var h = y.contains(G.documentElement, e);
                f.forEach(function (a) {
                    if (g)a = a.cloneNode(!0); else if (!e)return y(a).remove();
                    e.insertBefore(a, b), h && v(a, function (a) {
                        null == a.nodeName || "SCRIPT" !== a.nodeName.toUpperCase() || a.type && "text/javascript" !== a.type || a.src || window.eval.call(window, a.innerHTML)
                    })
                })
            })
        }, y.fn[d ? b + "To" : "insert" + (c ? "Before" : "After")] = function (a) {
            return y(a)[b](this), this
        }
    }), Y.Z.prototype = o.prototype = y.fn, Y.uniq = B, Y.deserializeValue = u, y.zepto = Y, y
}();
window.Zepto = Zepto, void 0 === window.$ && (window.$ = Zepto), function (a) {
    function b(a) {
        return a._zid || (a._zid = m++)
    }

    function c(a, c, f, g) {
        if (c = d(c), c.ns)var h = e(c.ns);
        return (q[b(a)] || []).filter(function (a) {
            return !(!a || c.e && a.e != c.e || c.ns && !h.test(a.ns) || f && b(a.fn) !== b(f) || g && a.sel != g)
        })
    }

    function d(a) {
        var b = ("" + a).split(".");
        return {e: b[0], ns: b.slice(1).sort().join(" ")}
    }

    function e(a) {
        return new RegExp("(?:^| )" + a.replace(" ", " .* ?") + "(?: |$)")
    }

    function f(a, b) {
        return a.del && !s && a.e in t || !!b
    }

    function g(a) {
        return u[a] || s && t[a] || a
    }

    function h(c, e, h, i, k, m, n) {
        var o = b(c), p = q[o] || (q[o] = []);
        e.split(/\s/).forEach(function (b) {
            if ("ready" == b)return a(document).ready(h);
            var e = d(b);
            e.fn = h, e.sel = k, e.e in u && (h = function (b) {
                var c = b.relatedTarget;
                return !c || c !== this && !a.contains(this, c) ? e.fn.apply(this, arguments) : void 0
            }), e.del = m;
            var o = m || h;
            e.proxy = function (a) {
                if (a = j(a), !a.isImmediatePropagationStopped()) {
                    a.data = i;
                    var b = o.apply(c, a._args == l ? [a] : [a].concat(a._args));
                    return b === !1 && (a.preventDefault(), a.stopPropagation()), b
                }
            }, e.i = p.length, p.push(e), "addEventListener" in c && c.addEventListener(g(e.e), e.proxy, f(e, n))
        })
    }

    function i(a, d, e, h, i) {
        var j = b(a);
        (d || "").split(/\s/).forEach(function (b) {
            c(a, b, e, h).forEach(function (b) {
                delete q[j][b.i], "removeEventListener" in a && a.removeEventListener(g(b.e), b.proxy, f(b, i))
            })
        })
    }

    function j(b, c) {
        return (c || !b.isDefaultPrevented) && (c || (c = b), a.each(y, function (a, d) {
            var e = c[a];
            b[a] = function () {
                return this[d] = v, e && e.apply(c, arguments)
            }, b[d] = w
        }), (c.defaultPrevented !== l ? c.defaultPrevented : "returnValue" in c ? c.returnValue === !1 : c.getPreventDefault && c.getPreventDefault()) && (b.isDefaultPrevented = v)), b
    }

    function k(a) {
        var b, c = {originalEvent: a};
        for (b in a)x.test(b) || a[b] === l || (c[b] = a[b]);
        return j(c, a)
    }

    var l, m = 1, n = Array.prototype.slice, o = a.isFunction, p = function (a) {
        return "string" == typeof a
    }, q = {}, r = {}, s = "onfocusin" in window, t = {
        focus: "focusin",
        blur: "focusout"
    }, u = {mouseenter: "mouseover", mouseleave: "mouseout"};
    r.click = r.mousedown = r.mouseup = r.mousemove = "MouseEvents", a.event = {
        add: h,
        remove: i
    }, a.proxy = function (c, d) {
        var e = 2 in arguments && n.call(arguments, 2);
        if (o(c)) {
            var f = function () {
                return c.apply(d, e ? e.concat(n.call(arguments)) : arguments)
            };
            return f._zid = b(c), f
        }
        if (p(d))return e ? (e.unshift(c[d], c), a.proxy.apply(null, e)) : a.proxy(c[d], c);
        throw new TypeError("expected function")
    }, a.fn.bind = function (a, b, c) {
        return this.on(a, b, c)
    }, a.fn.unbind = function (a, b) {
        return this.off(a, b)
    }, a.fn.one = function (a, b, c, d) {
        return this.on(a, b, c, d, 1)
    };
    var v = function () {
        return !0
    }, w = function () {
        return !1
    }, x = /^([A-Z]|returnValue$|layer[XY]$)/, y = {
        preventDefault: "isDefaultPrevented",
        stopImmediatePropagation: "isImmediatePropagationStopped",
        stopPropagation: "isPropagationStopped"
    };
    a.fn.delegate = function (a, b, c) {
        return this.on(b, a, c)
    }, a.fn.undelegate = function (a, b, c) {
        return this.off(b, a, c)
    }, a.fn.live = function (b, c) {
        return a(document.body).delegate(this.selector, b, c), this
    }, a.fn.die = function (b, c) {
        return a(document.body).undelegate(this.selector, b, c), this
    }, a.fn.on = function (b, c, d, e, f) {
        var g, j, m = this;
        return b && !p(b) ? (a.each(b, function (a, b) {
            m.on(a, c, d, b, f)
        }), m) : (p(c) || o(e) || e === !1 || (e = d, d = c, c = l), (e === l || d === !1) && (e = d, d = l), e === !1 && (e = w), m.each(function (l, m) {
            f && (g = function (a) {
                return i(m, a.type, e), e.apply(this, arguments)
            }), c && (j = function (b) {
                var d, f = a(b.target).closest(c, m).get(0);
                return f && f !== m ? (d = a.extend(k(b), {
                    currentTarget: f,
                    liveFired: m
                }), (g || e).apply(f, [d].concat(n.call(arguments, 1)))) : void 0
            }), h(m, b, e, d, c, j || g)
        }))
    }, a.fn.off = function (b, c, d) {
        var e = this;
        return b && !p(b) ? (a.each(b, function (a, b) {
            e.off(a, c, b)
        }), e) : (p(c) || o(d) || d === !1 || (d = c, c = l), d === !1 && (d = w), e.each(function () {
            i(this, b, d, c)
        }))
    }, a.fn.trigger = function (b, c) {
        return b = p(b) || a.isPlainObject(b) ? a.Event(b) : j(b), b._args = c, this.each(function () {
            b.type in t && "function" == typeof this[b.type] ? this[b.type]() : "dispatchEvent" in this ? this.dispatchEvent(b) : a(this).triggerHandler(b, c)
        })
    }, a.fn.triggerHandler = function (b, d) {
        var e, f;
        return this.each(function (g, h) {
            e = k(p(b) ? a.Event(b) : b), e._args = d, e.target = h, a.each(c(h, b.type || b), function (a, b) {
                return f = b.proxy(e), e.isImmediatePropagationStopped() ? !1 : void 0
            })
        }), f
    }, "focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function (b) {
        a.fn[b] = function (a) {
            return 0 in arguments ? this.bind(b, a) : this.trigger(b)
        }
    }), a.Event = function (a, b) {
        p(a) || (b = a, a = b.type);
        var c = document.createEvent(r[a] || "Events"), d = !0;
        if (b)for (var e in b)"bubbles" == e ? d = !!b[e] : c[e] = b[e];
        return c.initEvent(a, d, !0), j(c)
    }
}(Zepto), function (a) {
    function b(a, b, c, d) {
        return Math.abs(a - b) >= Math.abs(c - d) ? a - b > 0 ? "Left" : "Right" : c - d > 0 ? "Up" : "Down"
    }

    function c() {
        k = null, m.last && (m.el.trigger("longTap"), m = {})
    }

    function d() {
        k && clearTimeout(k), k = null
    }

    function e() {
        h && clearTimeout(h), i && clearTimeout(i), j && clearTimeout(j), k && clearTimeout(k), h = i = j = k = null, m = {}
    }

    function f(a) {
        return ("touch" == a.pointerType || a.pointerType == a.MSPOINTER_TYPE_TOUCH) && a.isPrimary
    }

    function g(a, b) {
        return a.type == "pointer" + b || a.type.toLowerCase() == "mspointer" + b
    }

    var h, i, j, k, l, m = {}, n = 750;
    a(document).ready(function () {
        var o, p, q, r, s = 0, t = 0;
        "MSGesture" in window && (l = new MSGesture, l.target = document.body), a(document).bind("MSGestureEnd", function (a) {
            var b = a.velocityX > 1 ? "Right" : a.velocityX < -1 ? "Left" : a.velocityY > 1 ? "Down" : a.velocityY < -1 ? "Up" : null;
            b && (m.el.trigger("swipe"), m.el.trigger("swipe" + b))
        }).on("touchstart MSPointerDown pointerdown", function (b) {
            (!(r = g(b, "down")) || f(b)) && (q = r ? b : b.touches[0], b.touches && 1 === b.touches.length && m.x2 && (m.x2 = void 0, m.y2 = void 0), o = Date.now(), p = o - (m.last || o), m.el = a("tagName" in q.target ? q.target : q.target.parentNode), h && clearTimeout(h), m.x1 = q.pageX, m.y1 = q.pageY, p > 0 && 250 >= p && (m.isDoubleTap = !0), m.last = o, k = setTimeout(c, n), l && r && l.addPointer(b.pointerId))
        }).on("touchmove MSPointerMove pointermove", function (a) {
            (!(r = g(a, "move")) || f(a)) && (q = r ? a : a.touches[0], d(), m.x2 = q.pageX, m.y2 = q.pageY, s += Math.abs(m.x1 - m.x2), t += Math.abs(m.y1 - m.y2))
        }).on("touchend MSPointerUp pointerup", function (c) {
            (!(r = g(c, "up")) || f(c)) && (d(), m.x2 && Math.abs(m.x1 - m.x2) > 30 || m.y2 && Math.abs(m.y1 - m.y2) > 30 ? j = setTimeout(function () {
                m.el.trigger("swipe"), m.el.trigger("swipe" + b(m.x1, m.x2, m.y1, m.y2)), m = {}
            }, 0) : "last" in m && (30 > s && 30 > t ? i = setTimeout(function () {
                var b = a.Event("tap");
                b.cancelTouch = e, m.el.trigger(b), m.isDoubleTap ? (m.el && m.el.trigger("doubleTap"), m = {}) : h = setTimeout(function () {
                    h = null, m.el && m.el.trigger("singleTap"), m = {}
                }, 250)
            }, 0) : m = {}), s = t = 0)
        }).on("touchcancel MSPointerCancel pointercancel", e), a(window).on("scroll", e)
    }), ["swipe", "swipeLeft", "swipeRight", "swipeUp", "swipeDown", "doubleTap", "tap", "singleTap", "longTap"].forEach(function (b) {
        a.fn[b] = function (a) {
            return this.on(b, a)
        }
    })
}(Zepto), function (a) {
    function b(b, c, d) {
        var e = a.Event(c);
        return a(b).trigger(e, d), !e.isDefaultPrevented()
    }

    function c(a, c, d, e) {
        return a.global ? b(c || s, d, e) : void 0
    }

    function d(b) {
        b.global && 0 === a.active++ && c(b, null, "ajaxStart")
    }

    function e(b) {
        b.global && !--a.active && c(b, null, "ajaxStop")
    }

    function f(a, b) {
        var d = b.context;
        return b.beforeSend.call(d, a, b) === !1 || c(b, d, "ajaxBeforeSend", [a, b]) === !1 ? !1 : void c(b, d, "ajaxSend", [a, b])
    }

    function g(a, b, d, e) {
        var f = d.context, g = "success";
        d.success.call(f, a, g, b), e && e.resolveWith(f, [a, g, b]), c(d, f, "ajaxSuccess", [b, d, a]), i(g, b, d)
    }

    function h(a, b, d, e, f) {
        var g = e.context;
        e.error.call(g, d, b, a), f && f.rejectWith(g, [d, b, a]), c(e, g, "ajaxError", [d, e, a || b]), i(b, d, e)
    }

    function i(a, b, d) {
        var f = d.context;
        d.complete.call(f, b, a), c(d, f, "ajaxComplete", [b, d]), e(d)
    }

    function j() {
    }

    function k(a) {
        return a && (a = a.split(";", 2)[0]), a && (a == x ? "html" : a == w ? "json" : u.test(a) ? "script" : v.test(a) && "xml") || "text"
    }

    function l(a, b) {
        return "" == b ? a : (a + "&" + b).replace(/[&?]{1,2}/, "?")
    }

    function m(b) {
        b.processData && b.data && "string" != a.type(b.data) && (b.data = a.param(b.data, b.traditional)), !b.data || b.type && "GET" != b.type.toUpperCase() || (b.url = l(b.url, b.data), b.data = void 0)
    }

    function n(b, c, d, e) {
        return a.isFunction(c) && (e = d, d = c, c = void 0), a.isFunction(d) || (e = d, d = void 0), {
            url: b,
            data: c,
            success: d,
            dataType: e
        }
    }

    function o(b, c, d, e) {
        var f, g = a.isArray(c), h = a.isPlainObject(c);
        a.each(c, function (c, i) {
            f = a.type(i), e && (c = d ? e : e + "[" + (h || "object" == f || "array" == f ? c : "") + "]"), !e && g ? b.add(i.name, i.value) : "array" == f || !d && "object" == f ? o(b, i, d, c) : b.add(c, i)
        })
    }

    var p, q, r = 0, s = window.document, t = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, u = /^(?:text|application)\/javascript/i, v = /^(?:text|application)\/xml/i, w = "application/json", x = "text/html", y = /^\s*$/, z = s.createElement("a");
    z.href = window.location.href, a.active = 0, a.ajaxJSONP = function (b, c) {
        if (!("type" in b))return a.ajax(b);
        var d, e, i = b.jsonpCallback, j = (a.isFunction(i) ? i() : i) || "jsonp" + ++r, k = s.createElement("script"), l = window[j], m = function (b) {
            a(k).triggerHandler("error", b || "abort")
        }, n = {abort: m};
        return c && c.promise(n), a(k).on("load error", function (f, i) {
            clearTimeout(e), a(k).off().remove(), "error" != f.type && d ? g(d[0], n, b, c) : h(null, i || "error", n, b, c), window[j] = l, d && a.isFunction(l) && l(d[0]), l = d = void 0
        }), f(n, b) === !1 ? (m("abort"), n) : (window[j] = function () {
            d = arguments
        }, k.src = b.url.replace(/\?(.+)=\?/, "?$1=" + j), s.head.appendChild(k), b.timeout > 0 && (e = setTimeout(function () {
            m("timeout")
        }, b.timeout)), n)
    }, a.ajaxSettings = {
        type: "GET",
        beforeSend: j,
        success: j,
        error: j,
        complete: j,
        context: null,
        global: !0,
        xhr: function () {
            return new window.XMLHttpRequest
        },
        accepts: {
            script: "text/javascript, application/javascript, application/x-javascript",
            json: w,
            xml: "application/xml, text/xml",
            html: x,
            text: "text/plain"
        },
        crossDomain: !1,
        timeout: 0,
        processData: !0,
        cache: !0
    }, a.ajax = function (b) {
        var c, e, i = a.extend({}, b || {}), n = a.Deferred && a.Deferred();
        for (p in a.ajaxSettings)void 0 === i[p] && (i[p] = a.ajaxSettings[p]);
        d(i), i.crossDomain || (c = s.createElement("a"), c.href = i.url, c.href = c.href, i.crossDomain = z.protocol + "//" + z.host != c.protocol + "//" + c.host), i.url || (i.url = window.location.toString()), (e = i.url.indexOf("#")) > -1 && (i.url = i.url.slice(0, e)), m(i);
        var o = i.dataType, r = /\?.+=\?/.test(i.url);
        if (r && (o = "jsonp"), i.cache !== !1 && (b && b.cache === !0 || "script" != o && "jsonp" != o) || (i.url = l(i.url, "_=" + Date.now())), "jsonp" == o)return r || (i.url = l(i.url, i.jsonp ? i.jsonp + "=?" : i.jsonp === !1 ? "" : "callback=?")), a.ajaxJSONP(i, n);
        var t, u = i.accepts[o], v = {}, w = function (a, b) {
            v[a.toLowerCase()] = [a, b]
        }, x = /^([\w-]+:)\/\//.test(i.url) ? RegExp.$1 : window.location.protocol, A = i.xhr(), B = A.setRequestHeader;
        if (n && n.promise(A), i.crossDomain || w("X-Requested-With", "XMLHttpRequest"), w("Accept", u || "*/*"), (u = i.mimeType || u) && (u.indexOf(",") > -1 && (u = u.split(",", 2)[0]), A.overrideMimeType && A.overrideMimeType(u)), (i.contentType || i.contentType !== !1 && i.data && "GET" != i.type.toUpperCase()) && w("Content-Type", i.contentType || "application/x-www-form-urlencoded"), i.headers)for (q in i.headers)w(q, i.headers[q]);
        if (A.setRequestHeader = w, A.onreadystatechange = function () {
                if (4 == A.readyState) {
                    A.onreadystatechange = j, clearTimeout(t);
                    var b, c = !1;
                    if (A.status >= 200 && A.status < 300 || 304 == A.status || 0 == A.status && "file:" == x) {
                        o = o || k(i.mimeType || A.getResponseHeader("content-type")), b = A.responseText;
                        try {
                            "script" == o ? (1, eval)(b) : "xml" == o ? b = A.responseXML : "json" == o && (b = y.test(b) ? null : a.parseJSON(b))
                        } catch (d) {
                            c = d
                        }
                        c ? h(c, "parsererror", A, i, n) : g(b, A, i, n)
                    } else h(A.statusText || null, A.status ? "error" : "abort", A, i, n)
                }
            }, f(A, i) === !1)return A.abort(), h(null, "abort", A, i, n), A;
        if (i.xhrFields)for (q in i.xhrFields)A[q] = i.xhrFields[q];
        var C = "async" in i ? i.async : !0;
        A.open(i.type, i.url, C, i.username, i.password);
        for (q in v)B.apply(A, v[q]);
        return i.timeout > 0 && (t = setTimeout(function () {
            A.onreadystatechange = j, A.abort(), h(null, "timeout", A, i, n)
        }, i.timeout)), A.send(i.data ? i.data : null), A
    }, a.get = function () {
        return a.ajax(n.apply(null, arguments))
    }, a.post = function () {
        var b = n.apply(null, arguments);
        return b.type = "POST", a.ajax(b)
    }, a.getJSON = function () {
        var b = n.apply(null, arguments);
        return b.dataType = "json", a.ajax(b)
    }, a.fn.load = function (b, c, d) {
        if (!this.length)return this;
        var e, f = this, g = b.split(/\s/), h = n(b, c, d), i = h.success;
        return g.length > 1 && (h.url = g[0], e = g[1]), h.success = function (b) {
            f.html(e ? a("<div>").html(b.replace(t, "")).find(e) : b), i && i.apply(f, arguments)
        }, a.ajax(h), this
    };
    var A = encodeURIComponent;
    a.param = function (b, c) {
        var d = [];
        return d.add = function (b, c) {
            a.isFunction(c) && (c = c()), null == c && (c = ""), this.push(A(b) + "=" + A(c))
        }, o(d, b, c), d.join("&").replace(/%20/g, "+")
    }
}(Zepto), function () {
    try {
        getComputedStyle(void 0)
    } catch (a) {
        var b = getComputedStyle;
        window.getComputedStyle = function (a) {
            try {
                return b(a)
            } catch (c) {
                return null
            }
        }
    }
}(), function (a) {
    a.fn.serializeArray = function () {
        var b, c, d = [], e = function (a) {
            return a.forEach ? a.forEach(e) : void d.push({name: b, value: a})
        };
        return this[0] && a.each(this[0].elements, function (d, f) {
            c = f.type, b = f.name, b && "fieldset" != f.nodeName.toLowerCase() && !f.disabled && "submit" != c && "reset" != c && "button" != c && "file" != c && ("radio" != c && "checkbox" != c || f.checked) && e(a(f).val())
        }), d
    }, a.fn.serialize = function () {
        var a = [];
        return this.serializeArray().forEach(function (b) {
            a.push(encodeURIComponent(b.name) + "=" + encodeURIComponent(b.value))
        }), a.join("&")
    }, a.fn.submit = function (b) {
        if (0 in arguments)this.bind("submit", b); else if (this.length) {
            var c = a.Event("submit");
            this.eq(0).trigger(c), c.isDefaultPrevented() || this.get(0).submit()
        }
        return this
    }
}(Zepto);