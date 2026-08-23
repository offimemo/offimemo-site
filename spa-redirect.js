// Moitié "restauration" de la technique spa-github-pages (rafgraph), voir
// public/404.html. Doit s'exécuter avant l'initialisation de React Router :
// chargé en tout premier dans <head> de index.html. Fichier externe (pas
// inline) pour rester compatible avec la CSP script-src 'self'.
(function (l) {
  if (l.search[1] === "/") {
    var decoded = l.search
      .slice(1)
      .split("&")
      .map(function (s) {
        return s.replace(/~and~/g, "&");
      })
      .join("?");
    window.history.replaceState(null, null, l.pathname.slice(0, -1) + decoded + l.hash);
  }
})(window.location);
