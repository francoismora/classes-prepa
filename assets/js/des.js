/* des.js — décomposition en éléments simples (sur R) de fractions rationnelles
 * dont le dénominateur est donné factorisé, avec vérification graphique.
 *
 * <div class="composant" data-composant="des"></div>
 *
 * Le composant calcule réellement la décomposition (partie entière par division
 * euclidienne, puis pour chaque facteur Q^p : inverse modulaire du produit des
 * autres facteurs, reste, et divisions successives par Q), l'affiche en LaTeX,
 * trace la courbe de f avec les asymptotes verticales aux pôles réels (et
 * l'asymptote oblique = partie entière si deg E >= 1), et trace l'erreur
 * |f(x) - décomposition(x)| qui doit être nulle à la précision machine.
 * Nécessite Plotly (CDN).
 */
(function () {
  "use strict";

  window.Composants = window.Composants || {};

  /* ---------- arithmétique polynomiale : p[i] = coefficient de X^i ---------- */
  function ptrim(p) {
    var d = p.length - 1;
    while (d > 0 && Math.abs(p[d]) < 1e-12) d--;
    return p.slice(0, d + 1);
  }
  function piszero(p) { p = ptrim(p); return p.length === 1 && Math.abs(p[0]) < 1e-12; }
  function pdeg(p) { return ptrim(p).length - 1; }
  function padd(a, b) {
    var n = Math.max(a.length, b.length), r = new Array(n);
    for (var i = 0; i < n; i++) r[i] = (a[i] || 0) + (b[i] || 0);
    return ptrim(r);
  }
  function psub(a, b) {
    var n = Math.max(a.length, b.length), r = new Array(n);
    for (var i = 0; i < n; i++) r[i] = (a[i] || 0) - (b[i] || 0);
    return ptrim(r);
  }
  function pmul(a, b) {
    var r = new Array(a.length + b.length - 1).fill(0);
    for (var i = 0; i < a.length; i++)
      for (var j = 0; j < b.length; j++) r[i + j] += a[i] * b[j];
    return ptrim(r);
  }
  function ppow(a, n) { var r = [1]; for (var i = 0; i < n; i++) r = pmul(r, a); return r; }
  function pdivmod(a, b) {
    a = ptrim(a.slice());
    if (piszero(a)) return [[0], [0]];
    var db = pdeg(b), da = pdeg(a);
    if (da < db) return [[0], a];
    var q = new Array(da - db + 1).fill(0), r = a.slice();
    while (!piszero(r) && pdeg(r) >= db) {
      var dr = pdeg(r), c = r[dr] / b[db];
      q[dr - db] += c;
      for (var i = 0; i <= db; i++) r[dr - db + i] -= c * b[i];
      r = ptrim(r);
    }
    return [ptrim(q), ptrim(r)];
  }
  function pextgcd(a, b) {
    var r0 = ptrim(a.slice()), r1 = ptrim(b.slice());
    var s0 = [1], s1 = [0], t0 = [0], t1 = [1];
    while (!piszero(r1)) {
      var qr = pdivmod(r0, r1), q = qr[0], r = qr[1];
      var s2 = psub(s0, pmul(q, s1)), t2 = psub(t0, pmul(q, t1));
      r0 = r1; r1 = r; s0 = s1; s1 = s2; t0 = t1; t1 = t2;
    }
    return [r0, s0, t0];
  }
  function pmod(a, m) { return pdivmod(a, m)[1]; }
  function pmodinv(a, m) {
    var g = pextgcd(a, m)[0];
    var u = pextgcd(a, m)[1];
    var inv = 1 / g[0];
    return pmod(u.map(function (c) { return c * inv; }), m);
  }
  function peval(a, x) {
    var s = 0;
    for (var i = a.length - 1; i >= 0; i--) s = s * x + a[i];
    return s;
  }

  /* ---------- décomposition en éléments simples sur R ----------
   * A : numérateur (coeffs). groups : [{Q: poly, p: entier >= 1}] facteurs
   * premiers entre eux ; B = produit des Q^p.
   * Renvoie { E, terms: [{Q, j, A}], B } avec F = E + sum A/Q^j. */
  function decompose(A, groups) {
    var B = [1];
    groups.forEach(function (g) { B = pmul(B, ppow(g.Q, g.p)); });
    var qr = pdivmod(A, B);
    var E = qr[0], R = qr[1];
    var terms = [];
    groups.forEach(function (g) {
      var Qp = ppow(g.Q, g.p);
      var C = pdivmod(B, Qp)[0];          /* produit des autres facteurs */
      var U = pmodinv(C, Qp);             /* C^{-1} mod Q^p */
      var T = pmod(pmul(R, U), Qp);       /* deg T < deg Q^p */
      var rem = T;
      for (var k = 0; k < g.p; k++) {
        var d = pdivmod(rem, g.Q); /* rem = d[0]*Q + d[1] : d[1] est le coef de Q^(g.p-k) */
        terms.push({ Q: g.Q, j: g.p - k, A: d[1] });
        rem = d[0];
      }
    });
    return { E: E, terms: terms, B: B };
  }

  /* Reconstruction : numérateur de E + sum A/Q^j sur le dénominateur commun B. */
  function reconstruct(dec) {
    var N = pmul(dec.E, dec.B);
    dec.terms.forEach(function (t) {
      var contrib = pmul(t.A, pdivmod(dec.B, ppow(t.Q, t.j))[0]);
      N = padd(N, contrib);
    });
    return N;
  }

  function desEval(dec, x) {
    var s = peval(dec.E, x);
    dec.terms.forEach(function (t) {
      var q = peval(t.Q, x);
      s += peval(t.A, x) / Math.pow(q, t.j);
    });
    return s;
  }

  /* ---------- mise en forme LaTeX ---------- */
  function rat(c) {
    if (Math.abs(c - Math.round(c)) < 1e-9) return String(Math.round(c));
    for (var q = 2; q <= 5040; q++) { /* 7! : couvre les dénominateurs usuels sans prendre √2 pour une fraction */
      var p = Math.round(c * q);
      if (Math.abs(c - p / q) < 1e-9) {
        return (p < 0 ? "-" : "") + "\\frac{" + Math.abs(p) + "}{" + q + "}";
      }
    }
    return c.toPrecision(6);
  }

  /* aX+b (degré <= 1) en LaTeX, avec signe géré par l'appelant via leadSign */
  function linLatex(a) { /* X - a */
    return a >= 0 ? "X - " + rat(a) : "X + " + rat(-a);
  }
  function quadLatex(Q) { /* Q = X^2 + pX + q, coeffs [q, p, 1] */
    var p = Q[1], q = Q[0];
    var s = "X^2";
    if (Math.abs(p) > 1e-12) {
      var mp = rat(Math.abs(p));
      s += p >= 0 ? " + " + (mp === "1" ? "X" : mp + "X") : " - " + (mp === "1" ? "X" : mp + "X");
    }
    if (Math.abs(q) > 1e-12) s += q >= 0 ? " + " + rat(q) : " - " + rat(-q);
    return s;
  }
  function polyLatexX(p) { /* polynôme en X, coeffs croissants */
    var s = "", first = true;
    for (var k = p.length - 1; k >= 0; k--) {
      var c = p[k];
      if (Math.abs(c) < 1e-12) continue;
      var mag = rat(Math.abs(c));
      var t = k === 0 ? mag : (k === 1 ? (mag === "1" ? "X" : mag + "X") : (mag === "1" ? "X^{" + k + "}" : mag + "X^{" + k + "}"));
      if (first) { s += (c < 0 ? "-" : "") + t; first = false; }
      else s += (c < 0 ? " - " : " + ") + t;
    }
    return first ? "0" : s;
  }
  function numLatex(A) {
    if (pdeg(A) <= 0) return rat(A[0] || 0);
    return polyLatexX(A);
  }
  function termLatex(t) {
    var den = pdeg(t.Q) === 1 ? linLatex(-t.Q[0]) : quadLatex(t.Q);
    if (t.j > 1) den = "(" + den + ")^{" + t.j + "}";
    return { sign: (t.A[t.A.length - 1] || 0) >= 0 ? 1 : -1, body: "\\frac{" + numLatex(t.A) + "}{" + den + "}" };
  }
  function decomLatex(dec) {
    var parts = [];
    if (!piszero(dec.E)) parts.push({ sign: dec.E[dec.E.length - 1] >= 0 ? 1 : -1, body: polyLatexX(dec.E) });
    dec.terms.forEach(function (t) { parts.push(termLatex(t)); });
    if (!parts.length) return "0";
    var s = (parts[0].sign < 0 ? "-" : "") + parts[0].body;
    for (var i = 1; i < parts.length; i++) {
      s += parts[i].sign < 0 ? " - " : " + ";
      var b = parts[i].body;
      if (parts[i].sign < 0 && b.indexOf("\\frac{-") === 0) b = b.replace("\\frac{-", "\\frac{");
      s += b;
    }
    return s;
  }

  /* ---------- exemples du cours ---------- */
  var EXEMPLES = [
    { nom: "Partie entière seule (ex. du cours)",
      A: [1, -1, 1, 1],
      groups: [{ Q: [1, 0, 1], p: 1 }],
      latex: "\\frac{X^3+X^2-X+1}{X^2+1}", plain: "(X³+X²−X+1)/(X²+1)",
      xmin: -3, xmax: 3 },
    { nom: "Pôles simples (ex. du cours)",
      A: [0, 0, 0, 1],
      groups: [{ Q: [-1, 1], p: 1 }, { Q: [-2, 1], p: 1 }, { Q: [1, 1], p: 1 }],
      latex: "\\frac{X^3}{(X-1)(X-2)(X+1)}", plain: "X³/((X−1)(X−2)(X+1))",
      xmin: -3, xmax: 3 },
    { nom: "Pôle multiple d'ordre 3 (ex. du cours)",
      A: [0, 0, 0, 1],
      groups: [{ Q: [-1, 1], p: 3 }, { Q: [1, 1], p: 1 }],
      latex: "\\frac{X^3}{(X-1)^3(X+1)}", plain: "X³/((X−1)³(X+1))",
      xmin: -3, xmax: 3 },
    { nom: "Pôle réel + facteur quadratique (ex. du cours)",
      A: [1, 0, 1],
      groups: [{ Q: [-1, 1], p: 1 }, { Q: [1, -1, 1], p: 3 }],
      latex: "\\frac{X^2+1}{(X-1)(X^2-X+1)^3}", plain: "(X²+1)/((X−1)(X²−X+1)³)",
      xmin: -2, xmax: 4 },
    { nom: "Facteurs quadratiques conjugués : 1/(X^4+1) (ex. du cours)",
      A: [1],
      groups: [{ Q: [1, Math.SQRT2, 1], p: 1 }, { Q: [1, -Math.SQRT2, 1], p: 1 }],
      latex: "\\frac{1}{X^4+1}", plain: "1/(X⁴+1)",
      xmin: -2.5, xmax: 2.5 },
    { nom: "Partie entière + pôles (ex. du cours)",
      A: [0, 0, 0, 0, 1],
      groups: [{ Q: [-2, 1], p: 1 }, { Q: [2, 1, 1], p: 1 }],
      latex: "\\frac{X^4}{(X-2)(X^2+X+2)}", plain: "X⁴/((X−2)(X²+X+2))",
      xmin: -3, xmax: 5 }
  ];

  function typeset(node) {
    if (window.MathJax && window.MathJax.typesetPromise) {
      window.MathJax.typesetPromise([node]).catch(function () {});
    } else {
      setTimeout(function () { typeset(node); }, 150);
    }
  }

  function composant(el) {
    if (typeof Plotly === "undefined") {
      el.innerHTML = '<p class="composant-erreur">Graphique indisponible : Plotly.js n’a pas pu être chargé (hors ligne ?).</p>';
      return;
    }
    Plotly.setPlotConfig({ locale: "fr" });

    el.innerHTML =
      '<div class="controles">' +
        '<label>Fraction rationnelle ' +
          '<select class="sel-exemple">' +
            EXEMPLES.map(function (e, i) { return '<option value="' + i + '">' + e.nom + "</option>"; }).join("") +
          "</select>" +
        "</label>" +
      "</div>" +
      '<div class="formule-somme formule-f"></div>' +
      '<div class="formule-somme formule-des"></div>' +
      '<div class="plot plot-principal"></div>' +
      '<div class="plot plot-erreur"></div>';

    var state = { i: 1 };
    var sel = el.querySelector(".sel-exemple");
    var fF = el.querySelector(".formule-f");
    var fD = el.querySelector(".formule-des");
    var plotP = el.querySelector(".plot-principal");
    var plotE = el.querySelector(".plot-erreur");
    sel.value = String(state.i);

    var NB = 900;

    function render() {
      var ex = EXEMPLES[state.i];
      var dec = decompose(ex.A, ex.groups);

      fF.textContent = "$F(X) = " + ex.latex + "$";
      typeset(fF);
      fD.textContent = "$F(X) = " + decomLatex(dec) + "$";
      typeset(fD);

      /* pôles réels et leurs ordres */
      var poles = [];
      ex.groups.forEach(function (g) {
        if (pdeg(g.Q) === 1) poles.push({ a: -g.Q[0], p: g.p });
      });

      var xs = [], yf = [], ye = [], ya = [];
      var pas = (ex.xmax - ex.xmin) / NB;
      var exclCourbe = (ex.xmax - ex.xmin) * 0.025; /* 2,5 % de la fenêtre autour de chaque pôle */
      var exclErr = (ex.xmax - ex.xmin) * 0.01;
      for (var k = 0; k <= NB; k++) {
        var x = ex.xmin + pas * k;
        var fx = peval(ex.A, x) / peval(dec.B, x);
        var skipC = false, skipE = false;
        poles.forEach(function (pl) {
          if (Math.abs(x - pl.a) < exclCourbe) skipC = true;
          if (Math.abs(x - pl.a) < exclErr) skipE = true;
        });
        xs.push(x);
        yf.push(skipC ? NaN : fx);
        var e = Math.abs(fx - desEval(dec, x)) / (Math.abs(fx) + 1); /* erreur relative */
        ye.push((!skipE && isFinite(e) && e > 1e-14) ? e : NaN);
        ya.push(pdeg(dec.E) >= 1 ? peval(dec.E, x) : NaN);
      }
      /* axe y lisible : quantiles 2 % / 98 % des valeurs retenues */
      var ys = yf.filter(function (v) { return isFinite(v); }).sort(function (a, b) { return a - b; });
      var ylo = ys.length ? ys[Math.floor(0.02 * ys.length)] : -1;
      var yhi = ys.length ? ys[Math.min(ys.length - 1, Math.floor(0.98 * ys.length))] : 1;
      if (yhi - ylo < 1e-6) { ylo -= 1; yhi += 1; }
      var marge = 0.05 * (yhi - ylo);
      var ylim = [ylo - marge, yhi + marge];

      var traces = [
        { x: xs, y: yf, name: "f(x)", mode: "lines", line: { color: "#1f5fa8", width: 3 } }
      ];
      if (pdeg(dec.E) >= 1) {
        traces.push({ x: xs, y: ya, name: "partie entière E(x) (asymptote)", mode: "lines",
          line: { color: "#2a7a2a", width: 2, dash: "dot" } });
      }
      var shapes = poles.map(function (pl) {
        return { type: "line", x0: pl.a, x1: pl.a, y0: 0, y1: 1, yref: "paper",
          line: { color: "#b02a2a", width: 2, dash: "dash" } };
      });
      var annot = poles.map(function (pl) {
        return { x: pl.a, y: 1, yref: "paper", text: "pôle " + rat(pl.a) + (pl.p > 1 ? " (ordre " + pl.p + ")" : ""),
          showarrow: false, xanchor: "left", yanchor: "top", font: { color: "#b02a2a", size: 12 } };
      });

      var config = { responsive: true, displaylogo: false };
      Plotly.react(plotP, traces, {
        autosize: true,
        margin: { t: 58, r: 20, b: 42, l: 55 },
        title: { text: "F(X) = " + ex.plain + " — pôles en rouge", y: 0.97 },
        hovermode: "x unified",
        legend: { orientation: "h", y: 1.02 },
        shapes: shapes, annotations: annot,
        xaxis: { title: "x", zeroline: true },
        yaxis: { title: "y", zeroline: true, range: ylim }
      }, config);

      Plotly.react(plotE, [
        { x: xs, y: ye, name: "erreur relative", mode: "lines", line: { color: "#7a4fa3", width: 2 } }
      ], {
        autosize: true,
        margin: { t: 30, r: 20, b: 42, l: 70 },
        title: "Vérification : erreur relative |f(x) − décomposition(x)| / (|f(x)| + 1) (échelle log)",
        hovermode: "x unified",
        xaxis: { title: "x", zeroline: true },
        yaxis: { type: "log", title: "erreur relative", zeroline: false }
      }, config);
    }

    sel.addEventListener("change", function () { state.i = +sel.value; render(); });

    function resizePlots() {
      [plotP, plotE].forEach(function (el) {
        if (el && el.classList && el.classList.contains("js-plotly-plot")) {
          try { Plotly.Plots.resize(el); } catch (e) {}
        }
      });
    }
    window.addEventListener("resize", resizePlots);

    render();
    setTimeout(resizePlots, 0);
    setTimeout(resizePlots, 500);
  }

  window.Composants["des"] = composant;
  /* exposés pour les tests hors navigateur */
  window.Composants["des"].decompose = decompose;
  window.Composants["des"].reconstruct = reconstruct;
  window.Composants["des"].desEval = desEval;
  window.Composants["des"].decomLatex = decomLatex;
  window.Composants["des"].EXEMPLES = EXEMPLES;
  window.Composants["des"].poly = { trim: ptrim, deg: pdeg, mul: pmul, divmod: pdivmod, eval: peval, add: padd, sub: psub, pow: ppow };
})();
