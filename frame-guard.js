// Protection anti-clickjacking. GitHub Pages (hébergeur de ce site) ne permet
// pas d'envoyer d'en-tête HTTP personnalisé (X-Frame-Options), et la directive
// CSP frame-ancestors est ignorée par les navigateurs quand elle est posée via
// une balise <meta> plutôt qu'un vrai en-tête HTTP — donc aucune des deux
// protections standard n'est disponible ici. Ceci est le repli côté client :
// si la page est chargée dans un iframe d'une origine tierce, on sort du cadre.
if (window.top !== window.self) {
  window.top.location = window.self.location;
}
