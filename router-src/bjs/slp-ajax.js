(function() {
    function G(a) {
        return function(b, d) {
            "string" !== typeof b && (d = b, b = "*");
            var c, e = 0, g = b.toLowerCase().match(N) || [];
            if (jQuery.isFunction(d)) for (;c = g[e++]; ) "+" === c[0] ? (c = c.slice(1) || "*", 
            (a[c] = a[c] || []).unshift(d)) : (a[c] = a[c] || []).push(d);
        };
    }
    function O(a, b, d, c) {
        function e(r) {
            var E;
            g[r] = !0;
            jQuery.each(a[r] || [], function(a, k) {
                var f = k(b, d, c);
                if ("string" === typeof f && !h && !g[f]) return b.dataTypes.unshift(f), e(f), !1;
                if (h) return !(E = f);
            });
            return E;
        }
        var g = {}, h = a === J;
        return e(b.dataTypes[0]) || !g["*"] && e("*");
    }
    function y(a, b) {
        var d, c, e = jQuery.ajaxSettings.flatOptions || {};
        for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        d && jQuery.extend(!0, a, d);
        return a;
    }
    function P() {
        try {
            return new window.XMLHttpRequest();
        } catch (a) {}
    }
    var N = /\S+/g, q, m, K = jQuery.now(), L = /\?/, W = /#.*$/, Q = /([?&])_=[^&]*/, X = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Y = /^(?:GET|HEAD)$/, Z = /^\/\//, R = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, S = jQuery.fn.load, T = {}, J = {}, U = "*/".concat("*");
    try {
        m = location.href;
    } catch (ba) {
        m = document.createElement("a"), m.href = "", m = m.href;
    }
    q = R.exec(m.toLowerCase()) || [];
    jQuery.fn.load = function(a, b, d) {
        if ("string" !== typeof a && S) return S.apply(this, arguments);
        var c, e, g, h = this, r = a.indexOf(" ");
        0 <= r && (c = a.slice(r, a.length), a = a.slice(0, r));
        jQuery.isFunction(b) ? (d = b, b = void 0) : b && "object" === typeof b && (g = "POST");
        0 < h.length && jQuery.ajax({
            url: a,
            type: g,
            dataType: "html",
            data: b
        }).done(function(a) {
            e = arguments;
            h.html(c ? jQuery("<div>").append(jQuery.parseHTML(a)).find(c) : a);
        }).complete(d && function(a, b) {
            h.each(d, e || [ a.responseText, b, a ]);
        });
        return this;
    };
    jQuery.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(a, b) {
        jQuery.fn[b] = function(a) {
            return this.on(b, a);
        };
    });
    jQuery.each([ "get", "post" ], function(a, b) {
        jQuery[b] = function(a, c, e, g) {
            jQuery.isFunction(c) && (g = g || e, e = c, c = void 0);
            return jQuery.ajax({
                url: a,
                type: b,
                dataType: g,
                data: c,
                success: e
            });
        };
    });
    jQuery.extend({
        slpParseJSON: function(a, b) {
            if (window.JSON && window.JSON.parse) return b.utf8Encode ? window.JSON.parse(a, function(a, b) {
                var e = b;
                if ("string" === typeof e) try {
                    e = decodeURIComponent(e);
                } catch (g) {}
                return e;
            }) : window.JSON.parse(a);
            if (null === a) return a;
            if ("string" === typeof a && (a = jQuery.trim(a)) && rvalidchars.test(a.replace(rvalidescape, "@").replace(rvalidtokens, "]").replace(rvalidbraces, ""))) return new Function("return " + a)();
            jQuery.error("Invalid JSON: " + a);
        }
    });
    jQuery.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: m,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(q[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": U,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": window.String,
                "text html": !0,
                "text json": jQuery.slpParseJSON,
                "text xml": jQuery.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? y(y(a, jQuery.ajaxSettings), b) : y(jQuery.ajaxSettings, a);
        },
        ajaxPrefilter: G(T),
        ajaxTransport: G(J),
        ajax: function(a, b) {
            function d(a, b, c, d) {
                var e, k, t, z, n = b;
                if (2 !== w) {
                    w = 2;
                    r && clearTimeout(r);
                    H = void 0;
                    h = d || "";
                    l.readyState = 0 < a ? 4 : 0;
                    if (c) {
                        z = f;
                        d = l;
                        var m, A, s, v, q = z.contents, B = z.dataTypes, y = z.responseFields;
                        for (v in y) v in c && (d[y[v]] = c[v]);
                        for (;"*" === B[0]; ) B.shift(), void 0 === A && (A = z.mimeType || d.getResponseHeader("Content-Type"));
                        if (A) for (v in q) if (q[v] && q[v].test(A)) {
                            B.unshift(v);
                            break;
                        }
                        if (B[0] in c) s = B[0]; else {
                            for (v in c) {
                                if (!B[0] || z.converters[v + " " + B[0]]) {
                                    s = v;
                                    break;
                                }
                                m || (m = v);
                            }
                            s = s || m;
                        }
                        s ? (s !== B[0] && B.unshift(s), z = c[s]) : z = void 0;
                    }
                    if (200 <= a && 300 > a || 304 === a || 401 === a) if (f.ifModified && ((c = l.getResponseHeader("Last-Modified")) && (jQuery.lastModified[g] = c), 
                    (c = l.getResponseHeader("etag")) && (jQuery.etag[g] = c)), 204 === a) e = !0, n = "nocontent"; else if (304 === a) e = !0, 
                    n = "notmodified"; else {
                        a: {
                            k = f;
                            t = z;
                            var p, u, n = {};
                            m = 0;
                            A = k.dataTypes.slice();
                            s = A[0];
                            k.dataFilter && (t = k.dataFilter(t, k.dataType));
                            if (A[1]) for (u in k.converters) n[u.toLowerCase()] = k.converters[u];
                            for (;c = A[++m]; ) if ("*" !== c) {
                                if ("*" !== s && s !== c) {
                                    u = n[s + " " + c] || n["* " + c];
                                    if (!u) for (p in n) if (e = p.split(" "), e[1] === c && (u = n[s + " " + e[0]] || n["* " + e[0]])) {
                                        !0 === u ? u = n[p] : !0 !== n[p] && (c = e[0], A.splice(m--, 0, c));
                                        break;
                                    }
                                    if (!0 !== u) if (u && k["throws"]) t = u(t, k); else try {
                                        t = u(t, k);
                                    } catch (D) {
                                        e = {
                                            state: "parsererror",
                                            error: u ? D : "No conversion from " + s + " to " + c
                                        };
                                        break a;
                                    }
                                }
                                s = c;
                            }
                            e = {
                                state: "success",
                                data: t
                            };
                        }
                        n = e.state;
                        k = e.data;
                        t = e.error;
                        e = !t;
                    } else if (t = n, a || !n) n = "error", 0 > a && (a = 0);
                    l.status = a;
                    l.statusText = (b || n) + "";
                    e ? x.resolveWith(F, [ k, n, l ]) : x.rejectWith(F, [ l, n, t ]);
                    l.statusCode(I);
                    I = void 0;
                    E && M.trigger(e ? "ajaxSuccess" : "ajaxError", [ l, f, e ? k : t ]);
                    C.fireWith(F, [ l, n ]);
                    E && (M.trigger("ajaxComplete", [ l, f ]), --jQuery.active || jQuery.event.trigger("ajaxStop"));
                }
            }
            "object" === typeof a && (b = a, a = void 0);
            b = b || {};
            var c, e, g, h, r, E, H, k, f = jQuery.ajaxSetup({}, b), F = f.context || f, M = f.context && (F.nodeType || F.jquery) ? jQuery(F) : jQuery.event, x = jQuery.Deferred(), C = jQuery.Callbacks("once memory"), I = f.statusCode || {}, y = {}, p = {}, w = 0, D = "canceled", l = {
                readyState: 0,
                getResponseHeader: function(a) {
                    var b;
                    if (2 === w) {
                        if (!k) for (k = {}; b = X.exec(h); ) k[b[1].toLowerCase()] = b[2];
                        b = k[a.toLowerCase()];
                    }
                    return null == b ? null : b;
                },
                getAllResponseHeaders: function() {
                    return 2 === w ? h : null;
                },
                setRequestHeader: function(a, b) {
                    var c = a.toLowerCase();
                    w || (a = p[c] = p[c] || a, y[a] = b);
                    return this;
                },
                overrideMimeType: function(a) {
                    w || (f.mimeType = a);
                    return this;
                },
                statusCode: function(a) {
                    var b;
                    if (a) if (2 > w) for (b in a) I[b] = [ I[b], a[b] ]; else l.always(a[l.status]);
                    return this;
                },
                abort: function(a) {
                    a = a || D;
                    H && H.abort(a);
                    d(0, a);
                    return this;
                }
            };
            x.promise(l).complete = C.add;
            l.success = l.done;
            l.error = l.fail;
            f.url = ((a || f.url || m) + "").replace(W, "").replace(Z, q[1] + "//");
            f.type = b.method || b.type || f.method || f.type;
            f.dataTypes = jQuery.trim(f.dataType || "*").toLowerCase().match(N) || [ "" ];
            null == f.crossDomain && (c = R.exec(f.url.toLowerCase()), f.crossDomain = !(!c || c[1] === q[1] && c[2] === q[2] && (c[3] || ("http:" === c[1] ? 80 : 443)) == (q[3] || ("http:" === q[1] ? 80 : 443))));
            f.data && f.processData && "json" == f.postDataType && "string" !== typeof f.data ? f.data = f.utf8Encode ? JSON.stringify(f.data, function(a, b) {
                return "string" === typeof b ? encodeURIComponent(b) : b;
            }) : JSON.stringify(f.data) : f.data && f.processData && "string" !== typeof f.data && (f.data = jQuery.param(f.data, f.traditional));
            O(T, f, b, l);
            if (2 === w) return l;
            (E = f.global) && 0 === jQuery.active++ && jQuery.event.trigger("ajaxStart");
            f.type = f.type.toUpperCase();
            f.hasContent = !Y.test(f.type);
            g = f.url;
            f.hasContent || (f.data && (g = f.url += (L.test(g) ? "&" : "?") + f.data, delete f.data), 
            !1 === f.cache && (f.url = Q.test(g) ? g.replace(Q, "$1_=" + K++) : g + (L.test(g) ? "&" : "?") + "_=" + K++));
            f.ifModified && (jQuery.lastModified[g] && l.setRequestHeader("If-Modified-Since", jQuery.lastModified[g]), 
            jQuery.etag[g] && l.setRequestHeader("If-None-Match", jQuery.etag[g]));
            (f.data && f.hasContent && !1 !== f.contentType || b.contentType) && l.setRequestHeader("Content-Type", f.contentType);
            l.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + U + "; q=0.01" : "") : f.accepts["*"]);
            for (e in f.headers) l.setRequestHeader(e, f.headers[e]);
            if (f.beforeSend && (!1 === f.beforeSend.call(F, l, f) || 2 === w)) return l.abort();
            D = "abort";
            for (e in {
                success: 1,
                error: 1,
                complete: 1
            }) l[e](f[e]);
            if (H = O(J, f, b, l)) {
                l.readyState = 1;
                E && M.trigger("ajaxSend", [ l, f ]);
                f.async && 0 < f.timeout && (r = setTimeout(function() {
                    l.abort("timeout");
                }, f.timeout));
                try {
                    w = 1, H.send(y, d);
                } catch (G) {
                    if (2 > w) d(-1, G); else throw G;
                }
            } else d(-1, "No Transport");
            return l;
        },
        getScript: function(a, b) {
            return jQuery.get(a, void 0, b, "script");
        },
        getJSON: function(a, b, d) {
            return jQuery.get(a, b, d, "json");
        }
    });
    jQuery.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(a) {
                jQuery.globalEval(a);
                return a;
            }
        }
    });
    jQuery.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1);
        a.crossDomain && (a.type = "GET", a.global = !1);
    });
    jQuery.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, d = document.head || jQuery("head")[0] || document.documentElement;
            return {
                send: function(c, e) {
                    b = document.createElement("script");
                    b.async = !0;
                    a.scriptCharset && (b.charset = a.scriptCharset);
                    b.src = a.url;
                    b.onload = b.onreadystatechange = function(a, c) {
                        if (c || !b.readyState || /loaded|complete/.test(b.readyState)) b.onload = b.onreadystatechange = null, 
                        b.parentNode && b.parentNode.removeChild(b), b = null, c || e(200, "success");
                    };
                    d.insertBefore(b, d.firstChild);
                },
                abort: function() {
                    if (b) b.onload(void 0, !0);
                }
            };
        }
    });
    var V = [], p = /(=)\?(?=&|$)|\?\?/;
    jQuery.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = V.pop() || jQuery.expando + "_" + K++;
            this[a] = !0;
            return a;
        }
    });
    jQuery.ajaxPrefilter("json jsonp", function(a, b, d) {
        var c, e, g, h = !1 !== a.jsonp && (p.test(a.url) ? "url" : "string" === typeof a.data && !(a.contentType || "").indexOf("application/x-www-form-urlencoded") && p.test(a.data) && "data");
        if (h || "jsonp" === a.dataTypes[0]) return c = a.jsonpCallback = jQuery.isFunction(a.jsonpCallback) ? a.jsonpCallback() : a.jsonpCallback, 
        h ? a[h] = a[h].replace(p, "$1" + c) : !1 !== a.jsonp && (a.url += (L.test(a.url) ? "&" : "?") + a.jsonp + "=" + c), 
        a.converters["script json"] = function() {
            g || jQuery.error(c + " was not called");
            return g[0];
        }, a.dataTypes[0] = "json", e = window[c], window[c] = function() {
            g = arguments;
        }, d.always(function() {
            window[c] = e;
            a[c] && (a.jsonpCallback = b.jsonpCallback, V.push(c));
            g && jQuery.isFunction(e) && e(g[0]);
            g = e = void 0;
        }), "script";
    });
    var x, C, aa = 0, D = window.ActiveXObject && function() {
        for (var a in x) x[a](void 0, !0);
    };
    jQuery.ajaxSettings.xhr = window.ActiveXObject ? function() {
        var a;
        if (!(a = !this.isLocal && P())) a: {
            try {
                a = new window.ActiveXObject("Microsoft.XMLHTTP");
                break a;
            } catch (b) {}
            a = void 0;
        }
        return a;
    } : P;
    C = jQuery.ajaxSettings.xhr();
    jQuery.support.cors = !!C && "withCredentials" in C;
    (C = jQuery.support.ajax = !!C) && jQuery.ajaxTransport(function(a) {
        if (!a.crossDomain || jQuery.support.cors) {
            var b;
            return {
                send: function(d, c) {
                    var e, g, h = a.xhr();
                    a.username ? h.open(a.type, a.url, a.async, a.username, a.password) : h.open(a.type, a.url, a.async);
                    if (a.xhrFields) for (g in a.xhrFields) h[g] = a.xhrFields[g];
                    a.mimeType && h.overrideMimeType && h.overrideMimeType(a.mimeType);
                    a.crossDomain || d["X-Requested-With"] || (d["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (g in d) h.setRequestHeader(g, d[g]);
                    } catch (r) {}
                    h.send(a.hasContent && a.data || null);
                    b = function(d, g) {
                        var k, f, r, m;
                        try {
                            if (b && (g || 4 === h.readyState)) if (b = void 0, e && (h.onreadystatechange = jQuery.noop, 
                            D && delete x[e]), g) 4 !== h.readyState && h.abort(); else {
                                m = {};
                                k = h.status;
                                f = h.getAllResponseHeaders();
                                "string" === typeof h.responseText && (m.text = h.responseText);
                                try {
                                    r = h.statusText;
                                } catch (q) {
                                    r = "";
                                }
                                k || !a.isLocal || a.crossDomain ? 1223 === k && (k = 204) : k = m.text ? 200 : 404;
                            }
                        } catch (p) {
                            g || c(-1, p);
                        }
                        m && c(k, r, m, f);
                    };
                    a.async ? 4 === h.readyState ? setTimeout(b) : (e = ++aa, D && (x || (x = {}, jQuery(window).unload(D)), 
                    x[e] = b), h.onreadystatechange = b) : b();
                },
                abort: function() {
                    b && b(void 0, !0);
                }
            };
        }
    });
    jQuery.extend({
        replaceObjName: function(a) {
            var b = null, d, c, e = "", g = /\"(\w+)(\.(\w+)(\.(\w+))?)?\"\:/i, b = g.exec(a);
            try {
                for (;null != b; ) {
                    c = b[1];
                    void 0 != b[2] && (c += "." + b[3], void 0 != b[4] && (c += "." + b[5]));
                    try {
                        d = eval("(" + c + ")"), 0 == d.length && (d = c), a = a.replace(c, d), e += a.substring(0, a.indexOf(d) + d.length + 2), 
                        a = a.substring(a.indexOf(d) + d.length + 2);
                    } catch (h) {
                        e += a.substring(0, a.indexOf(c) + c.length + 2), a = a.substring(a.indexOf(c) + c.length + 2);
                    }
                    b = g.exec(a);
                }
                e += a;
            } catch (m) {}
            return e;
        }
    });
    jQuery.extend({
        sendAjaxReq: function(a, b, d, c, e, g) {
            if (!0 == $.local) return e = {}, e[ERR_CODE] = ENONE, d && d(e);
            if ("string" !== typeof a) return !1;
            $.isFunction(b) && (c = c || d, d = b, b = {});
            c = c || "undefined" === typeof c;
            var h = !0;
            a = {
                url: a,
                data: b,
                type: "POST",
                async: c,
                postDataType: e,
                utf8Encode: g || "undefined" === typeof g,
                success: function(a) {
                    if (d) try {
                        h = d(a);
                    } catch (b) {
                        h = null, c && (h = !1);
                    }
                },
                dataType: "json"
            };
            "json" == e && (a.contentType = "application/json; charset=UTF-8");
            $.ajax(a);
            return h;
        },
        sendDsReq: function(a, b, d, c) {
            var e;
            e = {};
            if (!1 === $.authRltObj.authStatus) return e[ERR_CODE] = ENONE, b && b(e);
            e = $.orgDsUrl();
            a.method = c;
            return $.sendAjaxReq(e, a, function(c) {
                !0 == $.local && (c[ERR_CODE] = ENONE);
                return EUNAUTH == c[ERR_CODE] ? $.postDsUnAuthHandle(a, b, d, c) : b && b(c);
            }, d, "json");
        },
        getLocalData: function(a, b, d, c) {
            d = {};
            d[ERR_CODE] = ENONE;
            for (var e in a) if ("method" != e) if (c = a[e].name || a[e].table, d[e] = {}, 
            isArray(c)) for (var g = 0; g < c.length; g++) d[e][c[g]] = localData[e][c[g]]; else d[e][c] = localData[e][c];
            return b && b(d);
        },
        getLocalActionData: function(a, b, d, c) {
            d = {};
            d[ERR_CODE] = ENONE;
            for (var e in a) if ("method" != e) for (var g in a[e]) c = localActionData[e] || {}, 
            d[e] = c[g] || {};
            return b && b(d);
        },
        query: function(a, b, d) {
            return $.local ? $.getLocalData(a, b, d, "get") : $.sendDsReq(a, b, d, "get");
        },
        modify: function(a, b, d) {
            return $.sendDsReq(a, b, d, "set");
        },
        add: function(a, b, d) {
            return $.sendDsReq(a, b, d, "add");
        },
        del: function(a, b, d) {
            return $.sendDsReq(a, b, d, "delete");
        },
        action: function(a, b, d) {
            return $.local ? $.getLocalActionData(a, b, d, "do") : $.sendDsReq(a, b, d, "do");
        }
    });
    jQuery.extend({
        pwd: "",
        entrypType: {
            default: 0,
            rsa: 1
        },
        authRltObj: {
            code: "",
            key: "",
            group: 0,
            dictionary: "",
            time: 0,
            encrypt_type: 0,
            client: "",
            bHandLg: !1,
            authStatus: !0,
            authLog: null
        },
        accountStatus: {
            logoutHandle: !1
        },
        loginErrHandle: {},
        externPageHandle: {},
        pagePRHandle: {},
        setLoginErrHandle: function(a) {
            $.loginErrHandle = function(b) {
                $.setLgPwd("");
                a(b);
            };
        },
        setExternPageHandle: function(a) {
            $.externPageHandle = a;
        },
        setPRHandle: function(a) {
            $.pagePRHandle = a;
        },
        orgDsUrl: function() {
            return "/stok=" + encodeURIComponent($.session) + "/ds";
        },
        securityEncode: function(a, b, d) {
            var c = "", e, g, h, m, p = 187, q = 187;
            g = a.length;
            h = b.length;
            m = d.length;
            e = g > h ? g : h;
            for (var k = 0; k < e; k++) q = p = 187, k >= g ? q = b.charCodeAt(k) : k >= h ? p = a.charCodeAt(k) : (p = a.charCodeAt(k), 
            q = b.charCodeAt(k)), c += d.charAt((p ^ q) % m);
            return c;
        },
        orgAuthPwd: function(a) {
            return $.securityEncode("RDpbLfCPsJZ7fiv", a, "yLwVl0zKqws7LgKPRQ84Mdt708T1qQ3Ha7xv3H7NyU84p21BriUWBU43odz3iP4rBL3cD02KZciXTysVXiV8ngg6vL48rPJyAUw0HurW20xqxv9aYb4M9wK1Ae0wlro510qXeU07kV57fQMc8L6aLgMLwygtc0F10a0Dg70TOoouyFhdysuRMO51yY5ZlOZZLEal1h0t9YQW0Ko7oBwmCAHoic4HYbUyVeU3sfQ1xtXcPcf1aT303wAQhv66qzW");
        },
        objCopy: function(a, b) {
            var d, c;
            for (c in a) d = b[c], void 0 != d && (a[c] = d);
        },
        setLgPwd: function(a) {
            try {
                sessionLS.setItem(LGKEYSTR, a), sessionLS.setItem(LGKEYLEN, gCloudAccountBR.pwdLen), 
                $.pwd = a;
            } catch (b) {}
        },
        getLgPwd: function() {
            return $.pwd;
        },
        parseAuthRlt: function(a) {
            "object" == typeof a && ($.objCopy($.authRltObj, a), $.authRltObj.group = parseInt($.authRltObj.group, 10), 
            $.pagePRHandle());
        },
        logout: function() {
            $.action({
                system: {
                    logout: "null"
                }
            }, function(a) {
                ENONE == a[ERR_CODE] && ($.session = "", $.setLgPwd(""), setLoadPage("Content.htm", "Con"), 
                $.authRltObj.code = ESYSCLIENTNORMAL, showLogin(function() {
                    emptyNodes(id("Con"));
                }), $.accountStatus.logoutHandle = !0);
            });
        },
        queryAuthLog: function(a) {
            return $.sendAjaxReq("/", {
                query_auth_log: "null",
                method: "do"
            }, function(b) {
                !0 == $.local && (b[ERR_CODE] = ENONE);
                return a && a(b);
            }, !0, "json");
        },
        postDsUnAuthHandle: function(a, b, d, c) {
            if (!0 != $.accountStatus.logoutHandle && EUNAUTH == c[ERR_CODE]) if ($.authRltObj.authStatus = !1, 
            $.parseAuthRlt(c.data), null == $.pwd || 0 == $.pwd.length || ESYSRESET == $.authRltObj.code) window.setTimeout(function() {
                $.loginErrHandle();
            }, 0); else return $.auth($.pwd, function(c) {
                if (ENONE == c) return $.sendAjaxReq($.orgDsUrl(), a, function(a) {
                    if (EUNAUTH == a[ERR_CODE]) $.authRltObj.authStatus = !1, $.parseAuthRlt(a.data), 
                    $.loginErrHandle(); else return $.authRltObj.authStatus = !0, b && b(a);
                }, d, "json");
                window.setTimeout(function() {
                    $.authRltObj.authStatus = !1;
                    $.loginErrHandle();
                }, 0);
            }, d);
        },
        changeDefaultPwd: function(a, b) {
            var d = orgAuthPwd(a), c = {
                method: "do",
                set_password: {
                    password: d
                }
            };
            $.accountStatus.logoutHandle = !1;
            $.sendAjaxReq("", c, function(a) {
                var c = a[ERR_CODE];
                ENONE == c && ($.authRltObj.authStatus = !0, $.setLgPwd(d), $.session = decodeURIComponent(a.stok));
                b && b(c);
            }, !0, "json");
        },
        changePwd: function(a, b, d) {
            a = {
                system: {
                    chg_pwd: {
                        old_pwd: orgAuthPwd(a),
                        new_pwd: orgAuthPwd(b)
                    }
                }
            };
            $.action(a, function(a) {
                a = a[ERR_CODE];
                ENONE == a && $.setLgPwd(orgAuthPwd(b));
                "function" == typeof d && d(a);
            });
        },
        auth: function(a, b, d) {
            var c;
            $.accountStatus.logoutHandle = !1;
            c = a;
            (void 0 == a || 0 == a.length) && b && b(EUNAUTH);
            d = d || "undefined" === typeof d;
            $.authRltObj.encrypt_type == $.entrypType.rsa && (c = new JSEncrypt(), c.setPublicKey($.authRltObj.key), 
            c = c.encrypt(a));
            return $.sendAjaxReq("", {
                method: "do",
                login: {
                    password: c,
                    encrypt_type: $.authRltObj.encrypt_type
                }
            }, function(c) {
                var d = c[ERR_CODE];
                ENONE == d ? ($.session = decodeURIComponent(c.stok), $.setLgPwd(a), $.authRltObj.authStatus = !0) : ($.authRltObj.authStatus = !1, 
                $.parseAuthRlt(c.data));
                return b && b(d);
            }, d, "json");
        }
    });
})();
