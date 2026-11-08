/* series.js — arithmétique de séries formelles (DL) tronquées.
 *
 * Une série est représentée par un tableau de coefficients [c0, c1, c2, ...]
 * (c_k = coefficient de x^k), tronqué à l'ordre N.
 * Utilisable dans le navigateur (window.Serie) et en Node (globalThis.Serie).
 */
(function (root) {
  "use strict";

  var N = 24; // ordre max de troncature par défaut

  function trunc(a, n) {
    var r = a.slice(0, n + 1);
    while (r.length < n + 1) r.push(0);
    return r;
  }

  function add(a, b, n) {
    n = n === undefined ? Math.max(a.length, b.length) - 1 : n;
    var r = [];
    for (var k = 0; k <= n; k++) r.push((a[k] || 0) + (b[k] || 0));
    return r;
  }

  function mul(a, b, n) {
    // produit de Cauchy tronqué à l'ordre n
    if (n === undefined) n = N;
    var r = [];
    for (var k = 0; k <= n; k++) {
      var s = 0;
      for (var i = 0; i <= k; i++) s += (a[i] || 0) * (b[k - i] || 0);
      r.push(s);
    }
    return r;
  }

  function div(a, b, n) {
    // quotient a/b tronqué à l'ordre n ; exige b[0] != 0
    if (!b[0]) throw new Error("div: terme constant nul au dénominateur");
    if (n === undefined) n = N;
    var r = [];
    for (var k = 0; k <= n; k++) {
      var s = a[k] || 0;
      for (var i = 0; i < k; i++) s -= r[i] * (b[k - i] || 0);
      r.push(s / b[0]);
    }
    return r;
  }

  function derive(a) {
    var r = [];
    for (var k = 1; k < a.length; k++) r.push(k * a[k]);
    return r;
  }

  function integrate(a, c0) {
    var r = [c0 || 0];
    for (var k = 0; k < a.length; k++) r.push(a[k] / (k + 1));
    return r;
  }

  function compose(a, b, n) {
    // a(b(x)) tronqué à l'ordre n ; exige b[0] = 0
    if (b[0] !== 0) throw new Error("compose: b doit être sans terme constant");
    if (n === undefined) n = N;
    var r = trunc([a[0] || 0], n);
    var bpow = trunc([1], n); // b^0
    for (var k = 1; k < a.length && k <= n; k++) {
      bpow = mul(bpow, b, n);
      var term = [];
      for (var j = 0; j <= n; j++) term.push((a[k] || 0) * (bpow[j] || 0));
      r = add(r, term, n);
    }
    return r;
  }

  function evalPoly(c, x) {
    // schéma de Horner
    var s = 0;
    for (var k = c.length - 1; k >= 0; k--) s = s * x + (c[k] || 0);
    return s;
  }

  function fact(k) {
    var r = 1;
    for (var i = 2; i <= k; i++) r *= i;
    return r;
  }

  function binom(alpha, k) {
    var r = 1;
    for (var i = 0; i < k; i++) r *= (alpha - i) / (i + 1);
    return r;
  }

  /* DL usuels en 0, d'ordre n. Chaque entrée : { f: fonction réelle, coeffs: c_k } */
  function usuelles(n) {
    var exp = [], sin = [], cos = [], ln = [], arctan = [], inv1mx = [], sqrt = [], tan = [];
    for (var k = 0; k <= n; k++) {
      exp.push(1 / fact(k));
      sin.push(k % 2 === 1 ? ((k % 4 === 1 ? 1 : -1) / fact(k)) : 0);
      cos.push(k % 2 === 0 ? ((k % 4 === 0 ? 1 : -1) / fact(k)) : 0);
      ln.push(k === 0 ? 0 : ((k % 2 === 1 ? 1 : -1) / k));
      arctan.push(k % 2 === 1 ? ((k % 4 === 1 ? 1 : -1) / k) : 0);
      inv1mx.push(1);
      sqrt.push(binom(0.5, k));
    }
    tan = div(sin, cos, n);
    return {
      "exp(x)": { f: Math.exp, coeffs: exp, domaine: [-3, 3] },
      "sin(x)": { f: Math.sin, coeffs: sin, domaine: [-6, 6] },
      "cos(x)": { f: Math.cos, coeffs: cos, domaine: [-6, 6] },
      "tan(x)": { f: Math.tan, coeffs: tan, domaine: [-1.45, 1.45] },
      "ln(1+x)": { f: function (x) { return Math.log(1 + x); }, coeffs: ln, domaine: [-0.98, 4] },
      "arctan(x)": { f: Math.atan, coeffs: arctan, domaine: [-5, 5] },
      "1/(1-x)": { f: function (x) { return 1 / (1 - x); }, coeffs: inv1mx, domaine: [-2.5, 2.5], trou: 1 },
      "sqrt(1+x)": { f: function (x) { return Math.sqrt(1 + x); }, coeffs: sqrt, domaine: [-0.98, 4] }
    };
  }

  root.Serie = {
    N: N,
    trunc: trunc,
    add: add,
    mul: mul,
    div: div,
    derive: derive,
    integrate: integrate,
    compose: compose,
    evalPoly: evalPoly,
    fact: fact,
    binom: binom,
    usuelles: usuelles
  };
})(typeof window !== "undefined" ? window : globalThis);
