(() => { if (typeof window != "undefined") { let r = function (s, n, t, o, e) { let a = `cq-${s}-${n}`; t && !e.hasAttribute(a) ? e.setAttribute(a, "") : o && e.removeAttribute(a) }; var toggleAttribute = r; let w = new ResizeObserver(s => { s.forEach(n => { let { target: t } = n, { offsetWidth: o, offsetHeight: e } = t, { cqMinW: a, cqMaxW: m, cqMinH: E, cqMaxH: u } = t.dataset, q = a && f(a), h = m && f(m), d = E && f(E), i = u && f(u); q == null || q.forEach(c => r("min-w", c, o >= c, o < c, t)), h == null || h.forEach(c => r("max-w", c, o <= c, o > c, t)), d == null || d.forEach(c => r("min-h", c, e >= c, e < c, t)), i == null || i.forEach(c => r("max-h", c, e <= c, e > c, t)) }) }), f = s => JSON.parse(`[${s}]`); Array.from(document.querySelectorAll("[data-cq-min-w],[data-cq-max-w],[data-cq-min-h],[data-cq-max-h]")).forEach(s => { w.observe(s, { box: "border-box" }) }) } })();
;










