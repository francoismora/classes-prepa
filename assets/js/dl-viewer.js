/* dl-viewer.js — visualiseur interactif de développements limités (Taylor-Young en 0).
 *
 * <div class="composant" data-composant="dl-viewer"></div>
 *
 * Affiche la fonction choisie et son DL d'ordre n (slider), le polynôme en LaTeX
 * (rendu par MathJax, mis à jour à chaque changement), et l'erreur |f - P_n| en
 * échelle logarithmique. Nécessite Plotly (CDN) et Serie (assets/js/series.js).
 */
(function () {
  "use strict";

  window.Composants = window.Composants || {};

  var MAX_N = 12;
  var NB_POINTS = 700;

  /* Écrit un coefficient sous forme de fraction "simple" p/q quand c'est possible. */
  function rat(c) {
    if (Math.abs(c - Math.round(c)) < 1e-12) return String(Math.round(c));
    for (var q = 2; q <= 2520; q++) {
      var p = Math.round(c * q);
      if (Math.abs(c - p / q) < 1e-12) {
        return (p < 0 ? "-" : "") + "\\frac{" + Math.abs(p) + "}{" + q + "}";
      }
    }
    return String(Math.round(c * 1e6) / 1e6);
  }

  /* Polynôme tronqué, coefficients en LaTeX, ordre croissant : P_n(x) = ... */
  function polyLatex(coeffs, n) {
    var s = "P_{" + n + "}(x) = ";
    var first = true;
    for (var k = 0; k <= n; k++) {
      var c = coeffs[k] || 0;
      if (Math.abs(c) < 1e-15) continue;
      var mag = rat(Math.abs(c));
      var t;
      if (k === 0) t = mag;
      else if (k === 1) t = (mag === "1" ? "" : mag + "\\,") + "x";
      else t = (mag === "1" ? "" : mag + "\\,") + "x^{" + k + "}";
      if (first) {
        s += (c < 0 ? "-" : "") + t;
        first = false;
      } else {
        s += " " + (c < 0 ? "-" : "+") + " " + t;
      }
    }
    return first ? s + "0" : s;
  }

  /* Appelle MathJax quand il est prêt (script async) pour rendre le nœud. */
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

    var fonctions = Serie.usuelles(MAX_N);
    var noms = Object.keys(fonctions);

    el.innerHTML =
      '<div class="controles">' +
        '<label>Fonction usuelle ' +
          '<select class="sel-fonction">' +
            noms.map(function (n) { return "<option>" + n + "</option>"; }).join("") +
          "</select>" +
        "</label>" +
        '<label>Ordre du DL en 0 ' +
          '<input type="range" class="sel-n" min="0" max="' + MAX_N + '" step="1" value="4">' +
          '<span class="valeur-n">n = 4</span>' +
        "</label>" +
      "</div>" +
      '<div class="plot plot-principal"></div>' +
      '<div class="formule-dl"></div>' +
      '<div class="plot plot-erreur"></div>';

    var state = { nom: "sin(x)", n: 4 };
    var selF = el.querySelector(".sel-fonction");
    var selN = el.querySelector(".sel-n");
    var valN = el.querySelector(".valeur-n");
    var plotP = el.querySelector(".plot-principal");
    var plotE = el.querySelector(".plot-erreur");
    var form = el.querySelector(".formule-dl");
    selF.value = state.nom;

    function render() {
      var F = fonctions[state.nom];
      var a = F.domaine[0], b = F.domaine[1];
      var coeffs = Serie.trunc(F.coeffs, state.n);
      var xs = [], yf = [], ydl = [], ye = [];
      var pas = (b - a) / NB_POINTS;
      for (var i = 0; i <= NB_POINTS; i++) {
        var x = a + pas * i;
        var fx = F.f(x);
        if (F.trou !== undefined && Math.abs(x - F.trou) < pas * 1.5) fx = NaN;
        if (!isFinite(fx)) fx = NaN;
        var dl = Serie.evalPoly(coeffs, x);
        var err = isFinite(fx) && isFinite(dl) ? Math.abs(fx - dl) : NaN;
        xs.push(x);
        yf.push(fx);
        ydl.push(isFinite(dl) ? dl : NaN);
        ye.push(isFinite(err) && err > 0 ? err : NaN);
      }

      var config = { responsive: true, displaylogo: false };
      Plotly.react(plotP, [
        { x: xs, y: yf, name: "f(x)", mode: "lines", line: { color: "#1f5fa8", width: 3 } },
        { x: xs, y: ydl, name: "DL d’ordre " + state.n, mode: "lines",
          line: { color: "#b02a2a", width: 2.5, dash: "dash" } }
      ], {
        margin: { t: 34, r: 20, b: 42, l: 55 },
        title: state.nom + "  et son DL d’ordre " + state.n + " en 0",
        hovermode: "x unified",
        legend: { orientation: "h", y: 1.18 },
        xaxis: { title: "x", zeroline: true },
        yaxis: { title: "y", zeroline: true }
      }, config);

      Plotly.react(plotE, [
        { x: xs, y: ye, name: "|f(x) − P_" + state.n + "(x)|", mode: "lines",
          line: { color: "#7a4fa3", width: 2 } }
      ], {
        margin: { t: 30, r: 20, b: 42, l: 70 },
        title: "Erreur |f(x) − P_" + state.n + "(x)| (échelle log)",
        hovermode: "x unified",
        xaxis: { title: "x", zeroline: true },
        yaxis: { type: "log", title: "|erreur|", zeroline: false }
      }, config);

      form.textContent = "$" + polyLatex(coeffs, state.n) + "$";
      typeset(form);
    }

    selF.addEventListener("change", function () { state.nom = selF.value; render(); });
    selN.addEventListener("input", function () {
      state.n = +selN.value;
      valN.textContent = "n = " + state.n;
      render();
    });

    render();
  }

  window.Composants["dl-viewer"] = composant;
  /* exposé pour les tests hors navigateur */
  window.Composants["dl-viewer"].polyLatex = polyLatex;
  window.Composants["dl-viewer"].rat = rat;
})();
