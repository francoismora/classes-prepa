/* composants.js — registre et auto-initialisation des composants interactifs.
 *
 * Chaque composant s'enregistre dans window.Composants["nom"] = function (el) { ... }
 * et s'active dans le Markdown via :
 *     <div class="composant" data-composant="nom"></div>
 * Ce fichier est chargé uniquement sur les pages dont le front matter contient
 * `interactif: true` (voir _includes/interactif.html).
 */
(function () {
  "use strict";
  window.Composants = window.Composants || {};

  function init() {
    document.querySelectorAll("[data-composant]").forEach(function (el) {
      var nom = el.getAttribute("data-composant");
      var C = window.Composants[nom];
      if (typeof C === "function") {
        C(el);
      } else {
        el.innerHTML = '<p class="composant-erreur">Composant interactif inconnu : <code>' +
          nom + "</code></p>";
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
