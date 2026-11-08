/* riemann.js — visualiseur interactif des sommes de Riemann sur [0, 1].
 *
 * <div class="composant" data-composant="riemann"></div>
 *
 * Affiche la fonction choisie, les rectangles de la somme de Riemann à n
 * intervalles (méthode au choix : gauche, droite, milieu, ou sommes de Darboux
 * inférieure/supérieure), la valeur S_n comparée à l'intégrale exacte, et la
 * courbe de convergence |S_k - I| en fonction de k. Nécessite Plotly (CDN).
 */
(function () {
  "use strict";

  window.Composants = window.Composants || {};

  var A = 0, B = 1;
  var MAX_N = 200;
  var NB_POINTS = 600;
  var ECH = 16; /* échantillons par intervalle pour les sommes de Darboux */

  var FONCTIONS = {
    "x^2":             { label: "x²",        f: function (x) { return x * x; },               exact: 1 / 3,        exactLatex: "\\frac{1}{3}",  exactTexte: "1/3" },
    "\\sqrt{x}":       { label: "√x",        f: function (x) { return Math.sqrt(x); },        exact: 2 / 3,        exactLatex: "\\frac{2}{3}",  exactTexte: "2/3" },
    "\\sin(\\pi x)":  { label: "sin(πx)",   f: function (x) { return Math.sin(Math.PI * x); }, exact: 2 / Math.PI, exactLatex: "\\frac{2}{\\pi}", exactTexte: "2/π" },
    "e^x":             { label: "e^x",       f: function (x) { return Math.exp(x); },         exact: Math.E - 1,   exactLatex: "e - 1",       exactTexte: "e − 1" },
    "\\frac{1}{1+x}":  { label: "1/(1+x)",   f: function (x) { return 1 / (1 + x); },         exact: Math.LN2,     exactLatex: "\\ln 2",      exactTexte: "ln 2" },
    "|x-\\frac{1}{2}|": { label: "|x−½|",     f: function (x) { return Math.abs(x - 0.5); }, exact: 0.25,        exactLatex: "\\frac{1}{4}",  exactTexte: "1/4" }
  };

  /* Méthodes : chaque méthode renvoie, pour l'intervalle i (0-based) de la
   * subdivision régulière à n intervalles, la liste des points où évaluer f
   * pour la somme (1 point pour Riemann, ECH+1 pour Darboux min/max). */
  var METHODES = {
    "gauche": { label: "rectangles à gauche",
      tag: function (i, n) { return [i / n]; },
      tagLatex: "\\lambda_i = x_{i-1} = \\frac{i}{n}" },
    "droite": { label: "rectangles à droite",
      tag: function (i, n) { return [(i + 1) / n]; },
      tagLatex: "\\lambda_i = x_i = \\frac{i+1}{n}" },
    "milieu": { label: "rectangles au point milieu",
      tag: function (i, n) { return [(i + 0.5) / n]; },
      tagLatex: "\\lambda_i = \\frac{x_{i-1}+x_i}{2} = \\frac{2i+1}{2n}" },
    "min": { label: "Darboux inférieure",
      tag: function (i, n) {
        var pts = [], x0 = i / n, dx = 1 / n;
        for (var j = 0; j <= ECH; j++) pts.push(x0 + dx * j / ECH);
        return pts;
      },
      tagLatex: "m_i = \\min_{[x_{i-1},x_i]} f" },
    "max": { label: "Darboux supérieure",
      tag: function (i, n) {
        var pts = [], x0 = i / n, dx = 1 / n;
        for (var j = 0; j <= ECH; j++) pts.push(x0 + dx * j / ECH);
        return pts;
      },
      tagLatex: "M_i = \\max_{[x_{i-1},x_i]} f" }
  };

  /* Somme de Riemann (1 point d'évaluation) ou de Darboux (min/max sur les
   * échantillons) pour la subdivision régulière à n intervalles de [A, B]. */
  function somme(nomF, n, methode, mode) {
    var F = FONCTIONS[nomF];
    var M = METHODES[methode];
    if (!F || !M) throw new Error("fonction ou méthode inconnue");
    var dx = (B - A) / n, total = 0;
    for (var i = 0; i < n; i++) {
      var pts = M.tag(i, n);
      if (mode === "min" || methode === "min") {
        var m = Infinity;
        for (var j = 0; j < pts.length; j++) m = Math.min(m, F.f(pts[j]));
        total += dx * m;
      } else if (mode === "max" || methode === "max") {
        var Mx = -Infinity;
        for (var j = 0; j < pts.length; j++) Mx = Math.max(Mx, F.f(pts[j]));
        total += dx * Mx;
      } else {
        total += dx * F.f(pts[0]);
      }
    }
    return total;
  }

  /* Appelle MathJax quand il est prêt (script async) pour rendre le nœud. */
  function typeset(node) {
    if (window.MathJax && window.MathJax.typesetPromise) {
      window.MathJax.typesetPromise([node]).catch(function () {});
    } else {
      setTimeout(function () { typeset(node); }, 150);
    }
  }

  function fmt(x) {
    if (!isFinite(x)) return "—";
    return x.toPrecision(6);
  }

  function composant(el) {
    if (typeof Plotly === "undefined") {
      el.innerHTML = '<p class="composant-erreur">Graphique indisponible : Plotly.js n’a pas pu être chargé (hors ligne ?).</p>';
      return;
    }
    Plotly.setPlotConfig({ locale: "fr" });

    var nomsF = Object.keys(FONCTIONS);
    var nomsM = Object.keys(METHODES);

    el.innerHTML =
      '<div class="controles">' +
        '<label>Fonction ' +
          '<select class="sel-fonction">' +
            nomsF.map(function (n) { return '<option value="' + n + '">' + FONCTIONS[n].label + "</option>"; }).join("") +
          "</select>" +
        "</label>" +
        '<label>Méthode ' +
          '<select class="sel-methode">' +
            nomsM.map(function (m) { return '<option value="' + m + '">' + METHODES[m].label + "</option>"; }).join("") +
          "</select>" +
        "</label>" +
        '<label>Nombre de subdivisions ' +
          '<input type="range" class="sel-n" min="1" max="' + MAX_N + '" step="1" value="10">' +
          '<span class="valeur-n">n = 10</span>' +
        "</label>" +
      "</div>" +
      '<div class="plot plot-principal"></div>' +
      '<div class="formule-somme"></div>' +
      '<div class="plot plot-convergence"></div>';

    var state = { nom: "x^2", methode: "gauche", n: 10 };
    var selF = el.querySelector(".sel-fonction");
    var selM = el.querySelector(".sel-methode");
    var selN = el.querySelector(".sel-n");
    var valN = el.querySelector(".valeur-n");
    var plotP = el.querySelector(".plot-principal");
    var plotC = el.querySelector(".plot-convergence");
    var form = el.querySelector(".formule-somme");
    selF.value = state.nom;
    selM.value = state.methode;

    function render() {
      var F = FONCTIONS[state.nom];
      var M = METHODES[state.methode];
      var n = state.n;
      var dx = (B - A) / n;

      /* courbe + rectangles */
      var xs = [], yf = [];
      var pas = (B - A) / NB_POINTS;
      for (var i = 0; i <= NB_POINTS; i++) {
        xs.push(A + pas * i);
        yf.push(F.f(A + pas * i));
      }
      var xr = [], yr = [];
      for (var k = 0; k < n; k++) {
        var pts = M.tag(k, n);
        var h;
        if (state.methode === "min") {
          h = Infinity;
          for (var j = 0; j < pts.length; j++) h = Math.min(h, F.f(pts[j]));
        } else if (state.methode === "max") {
          h = -Infinity;
          for (var j = 0; j < pts.length; j++) h = Math.max(h, F.f(pts[j]));
        } else {
          h = F.f(pts[0]);
        }
        xr.push(A + (k + 0.5) * dx);
        yr.push(h);
      }
      var Sn = somme(state.nom, n, state.methode);
      var I = F.exact;

      var config = { responsive: true, displaylogo: false };
      Plotly.react(plotP, [
        { x: xs, y: yf, name: "f(x)", mode: "lines", line: { color: "#1f5fa8", width: 3 } },
        { x: xr, y: yr, name: "rectangles (n = " + n + ")", type: "bar",
          marker: { color: "rgba(176, 42, 42, 0.55)" }, width: dx * 0.96, hoverinfo: "x+y" },
        { x: [A, B], y: [I, I], name: "∫₀¹ f = " + F.exactTexte, mode: "lines",
          line: { color: "#2a7a2a", width: 2, dash: "dot" } }
      ], {
        autosize: true,
        margin: { t: 58, r: 20, b: 42, l: 55 },
        title: { text: "y = " + F.label + " sur [0,1] — somme de Riemann à n = " + n + " intervalles", y: 0.97 },
        hovermode: "x unified",
        legend: { orientation: "h", y: 1.02 },
        xaxis: { title: "x", range: [A - 0.03, B + 0.03], zeroline: true },
        yaxis: { title: "y", zeroline: true },
        bargap: 0
      }, config);

      /* convergence : |S_k - I| pour k = 1..n */
      var ks = [], err = [];
      for (var k = 1; k <= n; k++) {
        var Sk = somme(state.nom, k, state.methode);
        var e = Math.abs(Sk - I);
        ks.push(k);
        err.push(e > 1e-15 ? e : NaN);
      }
      Plotly.react(plotC, [
        { x: ks, y: err, name: "|S_k − I|", mode: "lines+markers", marker: { size: 4 },
          line: { color: "#7a4fa3", width: 2 } }
      ], {
        autosize: true,
        margin: { t: 30, r: 20, b: 42, l: 70 },
        title: "Erreur |S_k − ∫₀¹ f| en fonction du nombre k d’intervalles (échelle log)",
        hovermode: "x unified",
        xaxis: { title: "k", zeroline: false },
        yaxis: { type: "log", title: "|S_k − I|", zeroline: false }
      }, config);

      var nomS = (state.methode === "min" || state.methode === "max")
        ? (state.methode === "min" ? "s(\\sigma_n)" : "S(\\sigma_n)")
        : "S_n";
      form.textContent =
        "$" + nomS + " = \\frac{1}{n}\\sum_{i=0}^{n-1} f(\\lambda_i),\\quad " +
        M.tagLatex + ",\\quad " +
        nomS + " = " + fmt(Sn) + "\\;;\\quad \\int_0^1 f(x)\\,dx = " + F.exactLatex +
        " \\approx " + fmt(I) + "\\;;\\quad |" + nomS + " - \\int_0^1 f| = " + fmt(Math.abs(Sn - I)) + "$";
      typeset(form);
    }

    selF.addEventListener("change", function () { state.nom = selF.value; render(); });
    selM.addEventListener("change", function () { state.methode = selM.value; render(); });
    selN.addEventListener("input", function () {
      state.n = +selN.value;
      valN.textContent = "n = " + state.n;
      render();
    });

    function resizePlots() {
      [plotP, plotC].forEach(function (el) {
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

  window.Composants["riemann"] = composant;
  /* exposés pour les tests hors navigateur */
  window.Composants["riemann"].FONCTIONS = FONCTIONS;
  window.Composants["riemann"].METHODES = METHODES;
  window.Composants["riemann"].somme = somme;
})();
