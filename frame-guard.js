// Protection anti-clickjacking. GitHub Pages (hebergeur de ce site) ne permet
// pas d'en-tete HTTP personnalise (X-Frame-Options), et frame-ancestors posee
// via <meta> est ignoree par les navigateurs — donc aucune des deux
// protections standard n'est disponible ici.
//
// Un essai precedent forcait la navigation du haut de la page hors du cadre
// (window.top.location = ...), mais Chrome bloque desormais ce type de
// navigation cross-origin sans geste utilisateur (verifie en conditions
// reelles : le blocage empeche totalement la sortie du cadre, la page reste
// visible et cliquable dans l'iframe attaquant).
//
// Repli qui fonctionne reellement : la page est masquee par defaut (voir le
// <style> en tete d'index.html) et n'est reaffichee que si elle n'est PAS
// dans un cadre. Un cadre reste donc vide/blanc pour l'attaquant — rien a
// afficher en superposition, l'attaque de clickjacking perd son objet.
// "= ''" ne suffit pas : ça n'efface qu'un style inline, or display:none vient
// d'une regle de feuille de style (le <style> d'index.html) — il faut une
// valeur inline explicite pour la surclasser.
if (window.top === window.self) {
  document.documentElement.style.display = "block"
}
