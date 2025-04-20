function t() {}

function e(t) {
    return t()
}

function n() {
    return Object.create(null)
}

function o(t) {
    t.forEach(e)
}

function r(t) {
    return "function" == typeof t
}

function s(t, e) {
    return t != t ? e == e : t !== e || t && "object" == typeof t || "function" == typeof t
}
let c, i;

function l(t, e) {
    return c || (c = document.createElement("a")), c.href = e, t === c.href
}

function a(e, ...n) {
    if (null == e) return t;
    const o = e.subscribe(...n);
    return o.unsubscribe ? () => o.unsubscribe() : o
}

function u(t) {
    let e;
    return a(t, (t => e = t))(), e
}

function d(t, e, n) {
    t.$$.on_destroy.push(a(e, n))
}

function f(t, e, n) {
    return t.set(n), e
}

function m(t, e) {
    t.appendChild(e)
}

function p(t, e, n) {
    t.insertBefore(e, n || null)
}

function h(t) {
    t.parentNode.removeChild(t)
}

function g(t, e) {
    for (let n = 0; n < t.length; n += 1) t[n] && t[n].d(e)
}

function v(t) {
    return document.createElement(t)
}

function y(t) {
    return document.createTextNode(t)
}

function $() {
    return y(" ")
}

function b(t, e, n, o) {
    return t.addEventListener(e, n, o), () => t.removeEventListener(e, n, o)
}

function w(t, e, n) {
    null == n ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n)
}

function k(t, e) {
    e = "" + e, t.wholeText !== e && (t.data = e)
}

function x(t, e, n) {
    t.classList[n ? "add" : "remove"](e)
}

function E(t) {
    i = t
}

function C() {
    if (!i) throw new Error("Function called outside component initialization");
    return i
}

function A(t) {
    C().$$.on_mount.push(t)
}

function N() {
    const t = C();
    return (e, n) => {
        const o = t.$$.callbacks[e];
        if (o) {
            const r = function(t, e, n = !1) {
                const o = document.createEvent("CustomEvent");
                return o.initCustomEvent(t, n, !1, e), o
            }(e, n);
            o.slice().forEach((e => {
                e.call(t, r)
            }))
        }
    }
}
const S = [],
    T = [],
    L = [],
    j = [],
    _ = Promise.resolve();
let M = !1;

function O(t) {
    L.push(t)
}
const q = new Set;
let D = 0;

function F() {
    const t = i;
    do {
        for (; D < S.length;) {
            const t = S[D];
            D++, E(t), P(t.$$)
        }
        for (E(null), S.length = 0, D = 0; T.length;) T.pop()();
        for (let t = 0; t < L.length; t += 1) {
            const e = L[t];
            q.has(e) || (q.add(e), e())
        }
        L.length = 0
    } while (S.length);
    for (; j.length;) j.pop()();
    M = !1, q.clear(), E(t)
}

function P(t) {
    if (null !== t.fragment) {
        t.update(), o(t.before_update);
        const e = t.dirty;
        t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(O)
    }
}
const H = new Set;
let z;

function R(t, e) {
    t && t.i && (H.delete(t), t.i(e))
}

function U(t, e, n, o) {
    if (t && t.o) {
        if (H.has(t)) return;
        H.add(t), z.c.push((() => {
            H.delete(t),
            o && (n && t.d(1), o())
        })), t.o(e)
    }
}

function B(t) {
    t && t.c()
}

function I(t, n, s, c) {
    const {
        fragment: i,
        on_mount: l,
        on_destroy: a,
        after_update: u
    } = t.$$;
    i && i.m(n, s), c || O((() => {
        const n = l.map(e).filter(r);a ? a.push(...n) : o(n),
        t.$$.on_mount = []
    })), u.forEach(O)
}

function V(t, e) {
    const n = t.$$;
    null !== n.fragment && (o(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = [])
}

function W(t, e) {
    -1 === t.$$.dirty[0] && (S.push(t), M || (M = !0, _.then(F)), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31
}

function J(e, r, s, c, l, a, u, d = [-1]) {
    const f = i;
    E(e);
    const m = e.$$ = {
        fragment: null,
        ctx: null,
        props: a,
        update: t,
        not_equal: l,
        bound: n(),
        on_mount: [],
        on_destroy: [],
        on_disconnect: [],
        before_update: [],
        after_update: [],
        context: new Map(r.context || (f ? f.$$.context : [])),
        callbacks: n(),
        dirty: d,
        skip_bound: !1,
        root: r.target || f.$$.root
    };
    u && u(m.root);
    let p = !1;
    if (m.ctx = s ? s(e, r.props || {}, ((t, n, ...o) => {
            const r = o.length ? o[0] : n;
            return m.ctx && l(m.ctx[t], m.ctx[t] = r) && (!m.skip_bound && m.bound[t] && m.bound[t](r), p && W(e, t)),
            n
        })) : [], m.update(), p = !0, o(m.before_update), m.fragment = !!c && c(m.ctx), r.target) {
        if (r.hydrate) {
            const t = function(t) {
                return Array.from(t.childNodes)
            }(r.target);
            m.fragment && m.fragment.l(t), t.forEach(h)
        } else m.fragment && m.fragment.c();
        r.intro && R(e.$$.fragment), I(e, r.target, r.anchor, r.customElement), F()
    }
    E(f)
}
class G {
    $destroy() {
        V(this, 1), this.$destroy = t
    }
    $on(t, e) {
        const n = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
        return n.push(e), () => {
            const t = n.indexOf(e); - 1 !== t && n.splice(t, 1)
        }
    }
    $set(t) {
        var e;
        this.$$set && (e = t, 0 !== Object.keys(e).length) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1)
    }
}
const K = [];

function Q(e, n = t) {
    let o;
    const r = new Set;

    function c(t) {
        if (s(e, t) && (e = t, o)) {
            const t = !K.length;
            for (const t of r) t[1](), K.push(t, e);
            if (t) {
                for (let t = 0; t < K.length; t += 2) K[t][0](K[t + 1]);
                K.length = 0
            }
        }
    }
    return {
        set: c,
        update: function(t) {
            c(t(e))
        },
        subscribe: function(s, i = t) {
            const l = [s, i];
            return r.add(l), 1 === r.size && (o = n(c) || t), s(e), () => {
                r.delete(l),
                0 === r.size && (o(), o = null)
            }
        }
    }
}

function X({
    type: t,
    label: e,
    value: n
}) {
    window.panelbear && window.panelbear("track", [t, e, n].filter(Boolean).join("."))
}
const Y = window.requestAnimationFrame,
    Z = window.setTimeout,
    {
        body: tt
    } = document,
    {
        location: et
    } = window,
    {
        hostname: nt
    } = et,
    ot = t => new Promise((e => Z(e, t))),
    rt = 0,
    st = 1,
    ct = 2;
let it = null;
const lt = document.querySelector(".js-tv"),
    at = lt.querySelector(".js-screen"),
    ut = at.querySelector(".js-content"),
    dt = Q(!0),
    ft = Q(.25),
    mt = Q(0),
    pt = Q(rt),
    ht = Q(rt),
    gt = {
        0: {},
        1: {
            type: "video",
            duration: null,
            startTimestamp: null
        },
        2: {
            type: "video",
            duration: null,
            startTimestamp: null
        },
        3: {
            type: "video",
            duration: null,
            startTimestamp: null
        },
        4: {
            type: "video",
            duration: null,
            startTimestamp: null
        },
        5: {
            type: "video",
            duration: null,
            startTimestamp: null
        },
        6: {
            type: "video",
            duration: null,
            startTimestamp: null
        },
        7: {
            type: "video",
            duration: null,
            startTimestamp: null
        },
        8: {
            type: "video",
            duration: null,
            startTimestamp: null
        },
        9: {
            type: "webcam",
            displayName: "AV1"
        }
    },
    vt = Object.keys(gt),
    yt = function(e, n, s) {
        const c = !Array.isArray(e),
            i = c ? [e] : e,
            l = n.length < 2;
        return u = e => {
            let s = !1;
            const u = [];
            let d = 0,
                f = t;
            const m = () => {
                    if (d) return;f();
                    const o = n(c ? u[0] : u, e);l ? e(o) : f = r(o) ? o : t
                },
                p = i.map(((t, e) => a(t, (t => {
                    u[e] = t,
                    d &= ~(1 << e),
                    s && m()
                }), (() => {
                    d |= 1 << e
                }))));
            return s = !0,
            m(),
            function() {
                o(p), f()
            }
        }, {
            subscribe: Q(s, u).subscribe
        };
        var u
    }([mt], (([t]) => ({
        displayName: t.toString().padStart(2, "0"),
        number: t,
        type: "unknown",
        ...gt[t]
    }))),
    $t = (t, e) => {
        gt[t] = {...gt[t],
            ...e
        }
    },
    bt = () => {
        mt.update((t => {
            const e = t + 1;
            return e >= vt.length ? 0 : e
        }))
    },
    wt = t => {
        mt.set(t)
    },
    kt = () => {
        mt.update((t => {
            const e = t - 1;
            return e < 0 ? vt.length - 1 : e
        }))
    };

function xt() {
    const t = u(ft) - .06666666666666667;
    t < 0 || ft.set(t)
}

function Et() {
    const t = u(ft) + .06666666666666667;
    t > 1 || ft.set(t)
}

function Ct() {
    const t = u(ft);
    0 === t ? ft.set(it) : (it = t, ft.set(0))
}
const At = () => {
    dt.update((t => !t))
};

function Nt() {
    lt.addEventListener("animationend", (t => {
        Y((() => "go-to-space" === t.animationName ? tt.setAttribute("space", "floating") : "exit-space" === t.animationName ? tt.removeAttribute("space") : void 0))
    }), {
        once: !0
    }), Y((() => {
        const t = "floating" === tt.getAttribute("space") ? "exiting" : "entering";tt.setAttribute("space", t),
        "entering" === t && X({
            type: "easter_egg",
            label: "space"
        })
    }))
}

function St(t, e, n) {
    const o = t.slice();
    return o[6] = e[n], o[8] = n, o
}

function Tt(t) {
    let e, n, o, r = {
            length: 15
        },
        s = [];
    for (let e = 0; e < r.length; e += 1) s[e] = Lt(St(t, r, e));
    return {
        c() {
            e = v("div"), n = y("VOLUME\n    "), o = v("div");
            for (let t = 0; t < s.length; t += 1) s[t].c();
            w(o, "class", "track svelte-k500de"), w(e, "class", "volume glitchy-text svelte-k500de")
        },
        m(t, r) {
            p(t, e, r), m(e, n), m(e, o);
            for (let t = 0; t < s.length; t += 1) s[t].m(o, null)
        },
        p(t, e) {
            if (2 & e) {
                let n;
                for (r = {
                        length: 15
                    }, n = 0; n < r.length; n += 1) {
                    const c = St(t, r, n);
                    s[n] ? s[n].p(c, e) : (s[n] = Lt(c), s[n].c(), s[n].m(o, null))
                }
                for (; n < s.length; n += 1) s[n].d(1);
                s.length = r.length
            }
        },
        d(t) {
            t && h(e), g(s, t)
        }
    }
}

function Lt(t) {
    let e, n, o = t[8] <= t[1] ? "|" : "-";
    return {
        c() {
            e = v("div"), n = y(o), w(e, "class", "step")
        },
        m(t, o) {
            p(t, e, o), m(e, n)
        },
        p(t, e) {
            2 & e && o !== (o = t[8] <= t[1] ? "|" : "-") && k(n, o)
        },
        d(t) {
            t && h(e)
        }
    }
}

function jt(e) {
    let n, o = !e[0] && Tt(e);
    return {
        c() {
            o && o.c(), n = y("")
        },
        m(t, e) {
            o && o.m(t, e), p(t, n, e)
        },
        p(t, [e]) {
            t[0] ? o && (o.d(1), o = null) : o ? o.p(t, e) : (o = Tt(t), o.c(), o.m(n.parentNode, n))
        },
        i: t,
        o: t,
        d(t) {
            o && o.d(t), t && h(n)
        }
    }
}

function _t(t, e, n) {
    let o, r;
    d(t, ft, (t => n(2, r = t)));
    let s = !0,
        c = null,
        i = !0;
    return t.$$.update = () => {
        4 & t.$$.dirty && n(1, o = Math.floor(15 * r)),
        4 & t.$$.dirty && function() {
            if (i) return i = !1;
            n(0, s = !1), clearTimeout(c), c = Z((() => n(0, s = !0)), 2e3)
        }()
    }, [s, o, r]
}
window.addEventListener("visibilitychange", (() => {
        "hidden" === document.visibilityState && localStorage.setItem("timestamps", JSON.stringify(Object.entries(gt).map((([t, e]) => [t, e.startTimestamp]))))
    }), !1),
    function() {
        const t = JSON.parse(localStorage.getItem("timestamps"));
        null != t && t.forEach((([t, e]) => {
            gt[t].startTimestamp = e
        }))
    }();
class Mt extends G {
    constructor(t) {
        super(), J(this, t, _t, jt, s, {})
    }
}

function Ot(e) {
    let n, o, r, s, c, i, l, a;
    return {
        c() {
            n = v("div"), o = v("video"), r = $(), s = v("div"), c = v("div"), c.innerHTML = 'REC <span class="svelte-1vgfjjk"></span>', i = $(), l = v("div"), a = y(e[2]), w(o, "class", "tv-video"), w(o, "channel", "camera"), o.autoplay = !0, w(c, "class", "rec svelte-1vgfjjk"), w(l, "class", "counter"), w(s, "class", "rec-wrapper big-text glitchy-text svelte-1vgfjjk"), x(n, "visually-hidden", !e[0] || e[3] === st)
        },
        m(t, u) {
            p(t, n, u), m(n, o), e[5](o), m(n, r), m(n, s), m(s, c), m(s, i), m(s, l), m(l, a)
        },
        p(t, [e]) {
            4 & e && k(a, t[2]), 9 & e && x(n, "visually-hidden", !t[0] || t[3] === st)
        },
        i: t,
        o: t,
        d(t) {
            t && h(n), e[5](null)
        }
    }
}

function qt(t) {
    return t < 10 ? `0${t}` : t
}

function Dt(t, e, n) {
    let o;
    d(t, pt, (t => n(3, o = t)));
    const r = N();
    let s, c, i, l, a, u, f = !1;
    async function m() {
        s = await window.navigator.mediaDevices.getUserMedia({
            video: {
                width: {
                    exact: 256
                },
                height: {
                    exact: 144
                }
            }
        }).catch((() => null)), null != s && null != c && (n(1, c.srcObject = s, c), c.addEventListener("playing", (() => {
            r("ready", !0),
            n(0, f = !0),
            u = Y((function t(e) {
                null == i && (i = e), n(4, l = e - i), u = Y(t)
            })),
            tt.setAttribute("camera", "")
        }), {
            once: !0
        }))
    }
    return A((() => (m(), () => {
        tt.removeAttribute("camera"),
        cancelAnimationFrame(u),
        s && s.getTracks().forEach((t => t.stop()))
    }))), t.$$.update = () => {
        if (16 & t.$$.dirty) {
            const t = parseInt(l % 1e3 / 100),
                e = qt(Math.floor(l / 1e3 % 60)),
                o = qt(Math.floor(l / 6e4 % 60)),
                r = qt(Math.floor(l / 36e5 % 24));
            n(2, a = `${r}:${o}:${e}.${t}`)
        }
    }, [f, c, a, o, l, function(t) {
        T[t ? "unshift" : "push"]((() => {
            c = t,
            n(1, c)
        }))
    }]
}
class Ft extends G {
    constructor(t) {
        super(), J(this, t, Dt, Ot, s, {})
    }
}

function Pt(e) {
    let n, r, s, c, i, a, u, d;
    return {
        c() {
            n = v("video"), r = v("source"), c = v("source"), l(r.src, s = "/assets/videos/channel-" + e[4].displayName + ".webm") || w(r, "src", s), w(r, "type", "video/webm"), l(c.src, i = "/assets/videos/channel-" + e[4].displayName + ".mp4") || w(c, "src", i), w(c, "type", "video/mp4"), w(n, "class", "tv-video"), w(n, "channel", a = e[4].number), n.playsInline = !0, n.loop = !0, void 0 === e[2] && O((() => e[10].call(n))), x(n, "visually-hidden", !e[1] || e[3] === st)
        },
        m(t, o) {
            p(t, n, o), m(n, r), m(n, c), e[8](n), isNaN(e[5]) || (n.volume = e[5]), u || (d = [b(n, "volumechange", e[9]), b(n, "durationchange", e[10]), b(n, "canplay", e[6])], u = !0)
        },
        p(t, [e]) {
            16 & e && !l(r.src, s = "/assets/videos/channel-" + t[4].displayName + ".webm") && w(r, "src", s), 16 & e && !l(c.src, i = "/assets/videos/channel-" + t[4].displayName + ".mp4") && w(c, "src", i), 16 & e && a !== (a = t[4].number) && w(n, "channel", a), 32 & e && !isNaN(t[5]) && (n.volume = t[5]), 10 & e && x(n, "visually-hidden", !t[1] || t[3] === st)
        },
        i: t,
        o: t,
        d(t) {
            t && h(n), e[8](null), u = !1, o(d)
        }
    }
}

function Ht(t, e, n) {
    let o, r, s, c;
    d(t, pt, (t => n(3, o = t))), d(t, mt, (t => n(7, r = t))), d(t, yt, (t => n(4, s = t))), d(t, ft, (t => n(5, c = t)));
    const i = N();
    let l, a, u = !1;
    return t.$$.update = () => {
        129 & t.$$.dirty && l && (n(1, u = !1), l.load()),
        10 & t.$$.dirty && function() {
            if (l) u && o === ct ? l.play() : l.pause()
        }(),
        4 & t.$$.dirty && a && function() {
            const {
                number: t,
                startTimestamp: e
            } = s, o = Date.now() / 1e3;
            if (null != e) {
                let r, s = o - e;
                s < a ? r = s : (r = s % a, $t(t, {
                    startTimestamp: o - r
                })), n(0, l.currentTime = r, l)
            } else $t(t, {
                startTimestamp: o
            })
        }()
    }, [l, u, a, o, s, c, function() {
        l.readyState < 2 || (i("ready", !0), n(1, u = !0))
    }, r, function(t) {
        T[t ? "unshift" : "push"]((() => {
            l = t,
            n(0, l)
        }))
    }, function() {
        c = this.volume, ft.set(c)
    }, function() {
        a = this.duration, n(2, a)
    }]
}
class zt extends G {
    constructor(t) {
        super(), J(this, t, Ht, Pt, s, {})
    }
}
let Rt = null;

function Ut() {
    null == Rt && (Rt = function() {
        if (window.AudioContext) try {
            const t = new window.AudioContext,
                e = t.sampleRate / 3,
                n = t.createBuffer(1, e, t.sampleRate),
                o = t.createGain();
            o.gain.setValueAtTime(.008, t.currentTime), o.connect(t.destination);
            for (let t = 0, o = n.getChannelData(0); t < e; t++) o[t] = 2 * Math.random() - 1;
            const r = t.createBufferSource();
            return r.buffer = n, r.connect(o), r.loop = !0, r.start(0), r.onended = () => {
                r.disconnect(),
                o.disconnect(),
                t.close()
            }, r
        } catch (t) {}
    }())
}

function Bt(e) {
    let n, o;
    return n = new zt({}), n.$on("ready", e[1]), {
        c() {
            B(n.$$.fragment)
        },
        m(t, e) {
            I(n, t, e), o = !0
        },
        p: t,
        i(t) {
            o || (R(n.$$.fragment, t), o = !0)
        },
        o(t) {
            U(n.$$.fragment, t), o = !1
        },
        d(t) {
            V(n, t)
        }
    }
}

function It(e) {
    let n, o;
    return n = new Ft({}), n.$on("ready", e[1]), {
        c() {
            B(n.$$.fragment)
        },
        m(t, e) {
            I(n, t, e), o = !0
        },
        p: t,
        i(t) {
            o || (R(n.$$.fragment, t), o = !0)
        },
        o(t) {
            U(n.$$.fragment, t), o = !1
        },
        d(t) {
            V(n, t)
        }
    }
}

function Vt(t) {
    let e, n, r, s, c, i;
    const l = [It, Bt],
        a = [];

    function u(t, e) {
        return "webcam" === t[0].type ? 0 : "video" === t[0].type ? 1 : -1
    }
    return ~(n = u(t)) && (r = a[n] = l[n](t)), c = new Mt({}), {
        c() {
            e = v("div"), r && r.c(), s = $(), B(c.$$.fragment), w(e, "class", "tv-videos svelte-18atvsb")
        },
        m(t, o) {
            p(t, e, o), ~n && a[n].m(e, null), p(t, s, o), I(c, t, o), i = !0
        },
        p(t, [s]) {
            let c = n;
            n = u(t), n === c ? ~n && a[n].p(t, s) : (r && (z = {
                r: 0,
                c: [],
                p: z
            }, U(a[c], 1, 1, (() => {
                a[c] = null
            })), z.r || o(z.c), z = z.p), ~n ? (r = a[n], r ? r.p(t, s) : (r = a[n] = l[n](t), r.c()), R(r, 1), r.m(e, null)) : r = null)
        },
        i(t) {
            i || (R(r), R(c.$$.fragment, t), i = !0)
        },
        o(t) {
            U(r), U(c.$$.fragment, t), i = !1
        },
        d(t) {
            t && h(e), ~n && a[n].d(), t && h(s), V(c, t)
        }
    }
}

function Wt(t, e, n) {
    let o, r, s, c, i;
    d(t, pt, (t => n(2, o = t))), d(t, ht, (t => n(3, r = t))), d(t, dt, (t => n(4, s = t))), d(t, mt, (t => n(5, c = t))), d(t, yt, (t => n(0, i = t)));
    let l, a = !1;

    function u() {
        tt.classList.remove("loading-channel")
    }

    function m() {
        Y((() => {
            const t = Date.now() - l;t <= 400 ? Z((() => {
                f(pt, o = ct, o)
            }), 400 - t) : f(pt, o = ct, o)
        }))
    }
    return A((() => {
        a = !0
    })), t.$$.update = () => {
        var e;4 & t.$$.dirty && (o === st ? (u(), tt.classList.add("loading-channel"), l = Date.now()) : u()),
        1 & t.$$.dirty && (e = i, a && (Y((() => {
            f(pt, o = st, o),
            "unknown" == e.type && m()
        })), X({
            type: "easter_egg",
            label: "channel_switch",
            value: e.displayName
        }))),
        32 & t.$$.dirty && tt.setAttribute("channel", `${c}`),
        16 & t.$$.dirty && tt.classList.toggle("hide-content", !s),
        8 & t.$$.dirty && tt.classList.toggle("loading-page", r === st),
        12 & t.$$.dirty && (r === st || o === st ? Ut() : Rt && (Rt.stop(), Rt = null))
    }, [i, m, o, r, s, c]
}
class Jt extends G {
    constructor(t) {
        super(), J(this, t, Wt, Vt, s, {})
    }
}

function Gt(t, e, n) {
    const o = t.slice();
    return o[3] = e[n], o[5] = n, o
}

function Kt(t) {
    let e, n, o, r, s, c = t[5] + 1 + "";

    function i() {
        return t[1](t[5])
    }
    return {
        c() {
            e = v("div"), n = v("button"), o = y(c), w(n, "class", "svelte-t8kg08"), w(e, "class", "control number svelte-t8kg08")
        },
        m(t, c) {
            p(t, e, c), m(e, n), m(n, o), r || (s = b(n, "click", i), r = !0)
        },
        p(e, n) {
            t = e
        },
        d(t) {
            t && h(e), r = !1, s()
        }
    }
}

function Qt(e) {
    let n, r, s, c, i, l, a, u, d, f, y, k, x, E, C, A, N, S, T, L, j, _, M, O, q, D, F, P, H, z, R, U, B, I, V, W, J, G, K, Q, X, Y, Z = {
            length: 9
        },
        tt = [];
    for (let t = 0; t < Z.length; t += 1) tt[t] = Kt(Gt(e, Z, t));
    return {
        c() {
            n = v("div"), r = v("div"), s = v("div"), c = v("div"), i = v("div"), l = v("div"), a = v("button"), a.textContent = "REMOTE\n              OFF", u = $(), d = v("span"), d.textContent = "SPACE OFF", f = $(), y = v("div"), k = v("button"), k.textContent = "▲", x = $(), E = v("div"), C = v("button"), C.textContent = "▼", A = $(), N = v("span"), N.textContent = "VOLUME", S = $(), T = v("div"), L = v("button"), L.textContent = "MUTE", j = $(), _ = v("span"), _.textContent = "MUTE", M = $(), O = v("div"), q = v("button"), q.textContent = "▲", D = $(), F = v("div"), P = v("button"), P.textContent = "▼", H = $(), z = v("span"), z.textContent = "CHANNEL", R = $(), U = v("div");
            for (let t = 0; t < tt.length; t += 1) tt[t].c();
            B = $(), I = v("div"), V = v("button"), V.textContent = "0", W = $(), J = v("div"), G = v("button"), G.textContent = "SHOW/HIDE", K = $(), Q = v("div"), Q.innerHTML = '<img loading="lazy" src="/assets/images/kiwivision.svg" alt="kiwivision" width="103" height="10" class="svelte-t8kg08"/> \n          <br/> \n          <span>COMPUTER SPACE COMMAND</span>', w(a, "class", "hide-text svelte-t8kg08"), w(d, "class", "svelte-t8kg08"), w(l, "class", "control onoff svelte-t8kg08"), w(k, "class", "svelte-t8kg08"), w(y, "class", "control vol up svelte-t8kg08"), w(C, "class", "svelte-t8kg08"), w(N, "class", "svelte-t8kg08"), w(E, "class", "control vol down svelte-t8kg08"), w(L, "class", "hide-text svelte-t8kg08"), w(_, "class", "svelte-t8kg08"), w(T, "class", "control mute svelte-t8kg08"), w(q, "class", "svelte-t8kg08"), w(O, "class", "control ch up svelte-t8kg08"), w(P, "class", "svelte-t8kg08"), w(z, "class", "svelte-t8kg08"), w(F, "class", "control ch down svelte-t8kg08"), w(V, "class", "svelte-t8kg08"), w(I, "class", "control number svelte-t8kg08"), w(G, "class", "showhide svelte-t8kg08"), w(J, "class", "control showhide svelte-t8kg08"), w(U, "class", "numbers svelte-t8kg08"), w(i, "class", "buttons svelte-t8kg08"), w(Q, "class", "brand svelte-t8kg08"), w(c, "class", "inner svelte-t8kg08"), w(s, "class", "remote svelte-t8kg08"), w(r, "class", "wrapper svelte-t8kg08"), w(n, "class", "perspective svelte-t8kg08")
        },
        m(t, o) {
            p(t, n, o), m(n, r), m(r, s), m(s, c), m(c, i), m(i, l), m(l, a), m(l, u), m(l, d), m(i, f), m(i, y), m(y, k), m(i, x), m(i, E), m(E, C), m(E, A), m(E, N), m(i, S), m(i, T), m(T, L), m(T, j), m(T, _), m(i, M), m(i, O), m(O, q), m(i, D), m(i, F), m(F, P), m(F, H), m(F, z), m(i, R), m(i, U);
            for (let t = 0; t < tt.length; t += 1) tt[t].m(U, null);
            m(U, B), m(U, I), m(I, V), m(U, W), m(U, J), m(J, G), m(c, K), m(c, Q), X || (Y = [b(a, "click", e[0]), b(k, "click", Et), b(C, "click", xt), b(L, "click", Ct), b(q, "click", bt), b(P, "click", kt), b(V, "click", e[2]), b(G, "click", At)], X = !0)
        },
        p(t, [e]) {
            if (0 & e) {
                let n;
                for (Z = {
                        length: 9
                    }, n = 0; n < Z.length; n += 1) {
                    const o = Gt(t, Z, n);
                    tt[n] ? tt[n].p(o, e) : (tt[n] = Kt(o), tt[n].c(), tt[n].m(U, B))
                }
                for (; n < tt.length; n += 1) tt[n].d(1);
                tt.length = Z.length
            }
        },
        i: t,
        o: t,
        d(t) {
            t && h(n), g(tt, t), X = !1, o(Y)
        }
    }
}

function Xt(t) {
    return [() => Nt(), t => wt(t + 1), () => wt(0)]
}
class Yt extends G {
    constructor(t) {
        super(), J(this, t, Xt, Qt, s, {})
    }
}

function Zt(e) {
    let n, r, s, c, i, l, a, u, d, f, g, x = e[0].displayName + "";
    return {
        c() {
            n = v("div"), r = v("button"), r.textContent = "◄", s = $(), c = v("div"), i = y("CHANNEL "), l = v("span"), a = y(x), u = $(), d = v("button"), d.textContent = "►", w(r, "class", "previous cursor-pointer svelte-93ldlz"), w(r, "aria-label", "previous channel"), w(c, "class", "channel"), w(d, "class", "next cursor-pointer svelte-93ldlz"), w(d, "aria-label", "next channel"), w(n, "class", "channel-controller svelte-93ldlz")
        },
        m(t, e) {
            p(t, n, e), m(n, r), m(n, s), m(n, c), m(c, i), m(c, l), m(l, a), m(n, u), m(n, d), f || (g = [b(r, "click", kt), b(d, "click", bt)], f = !0)
        },
        p(t, [e]) {
            1 & e && x !== (x = t[0].displayName + "") && k(a, x)
        },
        i: t,
        o: t,
        d(t) {
            t && h(n), f = !1, o(g)
        }
    }
}

function te(t, e, n) {
    let o;
    return d(t, yt, (t => n(0, o = t))), [o]
}
class ee extends G {
    constructor(t) {
        super(), J(this, t, te, Zt, s, {})
    }
}

function ne(e) {
    let n, o, r;
    return {
        c() {
            n = v("button"), n.textContent = "SPACE MODE", w(n, "class", "cursor-pointer svelte-6brq6f")
        },
        m(t, e) {
            p(t, n, e), o || (r = b(n, "click", Nt), o = !0)
        },
        p: t,
        i: t,
        o: t,
        d(t) {
            t && h(n), o = !1, r()
        }
    }
}
class oe extends G {
    constructor(t) {
        super(), J(this, t, null, ne, s, {})
    }
}
var re = function() {
    function t(t, e, n, o, r) {
        return t < e || n < e ? t > n ? n + 1 : t + 1 : o === r ? e : e + 1
    }
    return function(e, n) {
        if (e === n) return 0;
        if (e.length > n.length) {
            var o = e;
            e = n, n = o
        }
        for (var r = e.length, s = n.length; r > 0 && e.charCodeAt(r - 1) === n.charCodeAt(s - 1);) r--, s--;
        for (var c = 0; c < r && e.charCodeAt(c) === n.charCodeAt(c);) c++;
        if (s -= c, 0 === (r -= c) || s < 3) return s;
        var i, l, a, u, d, f, m, p, h, g, v, y, $ = 0,
            b = [];
        for (i = 0; i < r; i++) b.push(i + 1), b.push(e.charCodeAt(c + i));
        for (var w = b.length - 1; $ < s - 3;)
            for (h = n.charCodeAt(c + (l = $)), g = n.charCodeAt(c + (a = $ + 1)), v = n.charCodeAt(c + (u = $ + 2)), y = n.charCodeAt(c + (d = $ + 3)), f = $ += 4, i = 0; i < w; i += 2) l = t(m = b[i], l, a, h, p = b[i + 1]), a = t(l, a, u, g, p), u = t(a, u, d, v, p), f = t(u, d, f, y, p), b[i] = f, d = u, u = a, a = l, l = m;
        for (; $ < s;)
            for (h = n.charCodeAt(c + (l = $)), f = ++$, i = 0; i < w; i += 2) m = b[i], b[i] = f = t(m, l, f, h, b[i + 1]), l = m;
        return f
    }
}();
const se = Array.from(ut.querySelectorAll("[js-slot]")),
    ce = new Map,
    ie = {
        title: document.title,
        slots: pe()
    };
let le, ae, ue, de = et.pathname;

function fe(t) {
    return "A" === t.tagName && 0 === t.getAttribute("href").indexOf("#")
}

function me(t) {
    return "A" === t.tagName && !fe(t) && "_blank" !== t.target && t.hostname === nt && !t.hasAttribute("redirect")
}

function pe(t = ut) {
    let e = se;
    t !== ut && (e = Array.from(t.querySelectorAll("[js-slot]")));
    return e.reduce(((t, e) => (t[e.getAttribute("js-slot")] = e.innerHTML, t)), {})
}

function he({
    slots: t
}) {
    Object.entries(t).forEach((([t, e]) => {
        const n = se.find((e => e.getAttribute("js-slot") === t));null != n && (n.innerHTML = e)
    })), window.dispatchEvent(new CustomEvent("contentChange"))
}

function ge(t, {
    importance: e
} = {}) {
    if (t = t.replace(/\/$/, ""), ce.has(t)) return Promise.resolve(ce.get(t));
    const n = fetch(t, { 
        importance: e 
    }).then((t => t.text())).then((e => {
        null == le && (le = new DOMParser);
        const n = le.parseFromString(e, "text/html"),
            o = n.querySelector(".js-content"),
            r = {
                title: n.title,
                slots: pe(o)
            };
        return ce.set(t, r),
        r
    }));
    return ce.set(t, n), n
}
async function ve(t) {
    if (0 === t.indexOf("#")) return;
    0 !== t.indexOf("http") && (t = `${window.location.origin}${t}`), ht.set(st);
    const [{
        title: e,
        slots: n
    }] = await Promise.all([ge(t), ot(300)]);
    ht.set(ct), Y((() => {
        he({
            title: e,
            slots: n
        }),
        document.title = e,
        ut.scrollTop = 0,
        window.history.pushState({
            title: e,
            slots: n
        }, e, t),
        de = et.pathname
    }))
}

function ye() {
    Y((() => {
        const t = ut.querySelector(":target");ut.scrollTop = t ? Math.max(t.offsetTop - 24, 0) : 0
    }))
}

function $e() {
    const t = function(t) {
        const {
            page: e
        } = ae.reduce(((e, n) => {
            const {
                aliases: o
            } = n;
            return o.forEach((o => {
                const r = o.startsWith(t) || t.startsWith(o) ? -4 : 1,
                    s = Math.max(0, re(o, t) + r);s < e.diff && (e = {
                    diff: s,
                    page: n
                })
            })),
            e
        }), {
            page: ae[0],
            diff: 100
        });
        return e
    }(ue.textContent.trim());
    t.external ? window.open(t.url, "_blank") : ve(t.url)
}

function be() {
    fetch("/assets/pages.json").then((t => t.json())).then((t => {
        ae = t
    })).catch((() => {
        be.retries++ < 3 ? be() : console.warn("Something went wrong :(")
    }))
}
be.retries = 0;
const we = Y.bind(null, (function() {
        if (null == ue) return;
        const t = function(t) {
            let e = 0;
            if (window.getSelection().rangeCount > 0) {
                const n = window.getSelection().getRangeAt(0),
                    o = n.cloneRange();
                o.selectNodeContents(t), o.setEnd(n.endContainer, n.endOffset), e = o.toString().length
            }
            return e
        }(ue);
        ue.style.setProperty("--caret-position", t)
    })),
    ke = we;

function xe() {
    "" === ue.textContent && (ue.textContent = ue.getAttribute("data-original-text"))
}

function Ee() {
    we(), null == ae && be()
}

function Ce(t) {
    "Enter" === t.key && (t.preventDefault(), $e()), " " === t.key && t.preventDefault(), we()
}

function Ae() {
    ue = document.querySelector(".js-text-nav"), ue && (ue.addEventListener("click", ke), ue.addEventListener("blur", xe), ue.addEventListener("focus", Ee), ue.addEventListener("keydown", Ce), ue.textContent = ue.textContent.trim())
}

function Ne(t) {
    if (! function(t) {
            const e = document.activeElement;
            return e === tt || null == e || ("BUTTON" === e.tagName || "A" === e.tagName) && "Enter" !== t.key && " " !== t.key
        }(t)) return;
    if ("r" === t.key) return Nt();
    if ("+" === t.key || "=" === t.key) return bt();
    if ("-" === t.key) return kt();
    if ("h" === t.key) return At();
    if ("f" === t.key) return void(document.fullscreenElement ? document.exitFullscreen && document.exitFullscreen() : document.documentElement.requestFullscreen());
    const e = Number(t.key);
    Number.isNaN(e) || (e === u(mt) ? wt(0) : wt(e))
}
const Se = () => {
    Y((() => {
        Ae(),
        window.addEventListener("contentChange", Ae),
        window.addEventListener("keyup", Ne),
        window.addEventListener("popstate", (async t => {
            let {
                state: e
            } = t;
            if (et.pathname === de) return t.preventDefault(), void ye();de = et.pathname,
            null == e && (e = ie),
            ht.set(st),
            await ot(300),
            ht.set(ct),
            Y((() => {
                he(e),
                document.title = e.title,
                ye()
            }))
        })),
        tt.addEventListener("mousemove", (t => {
            me(t.target) && (ce.has(t.target.href) || ge(t.target.href, {
                importante: "low"
            }))
        })),
        tt.addEventListener("click", (t => {
            if (fe(t.target)) return t.preventDefault(), et.hash = t.target.getAttribute("href"), ye();me(t.target) && (t.preventDefault(), ve(t.target.href))
        })),
        new Jt({
            target: at
        }),
        new Yt({
            target: document.querySelector(".js-remote")
        }),
        new ee({
            target: document.querySelector(".js-header-controls")
        }),
        new oe({
            target: document.querySelector(".js-space-trigger")
        })
    }))
};
"interactive" !== document.readyState ? window.addEventListener("DOMContentLoaded", Se) : Se();