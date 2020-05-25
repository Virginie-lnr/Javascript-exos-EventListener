// // Fonctionalité 1 + // Fonctionalité 1=Bis

let footerTag = document.getElementsByTagName("footer")[0]

// Fonctionalité 1
// lorsque l'utilisateur va cliquer sur le footer (portant le tag <footer>), tu vas afficher le mot "clique" en console.

footerTag.addEventListener("click", function() {
  console.log("clique");
});

// Fonctionalité 1-Bis 
//lorsque l'utilisateur va cliquer sur le footer, tu vas afficher en console "clic numéro x" avec x qui commence à 1 et s'incrémente de +1 à chaque clic.

let i = 1;
footerTag.addEventListener("click", function() {
  console.log("clique numéro" + " " + i );
  i ++;
});

// Fonctionnalité 2 :
// Tu vas faire que si quelqu'un clique sur ce bouton, l'élément HTML portant l'Id navbarHeader perde sa classe collapse. Une fois que ça, ça marche, fait que si on clique à nouveau dessus, la classe collapse soit rajoutée à nouveau à l'élément portant l'Id navbarHeader

let navbarHeader = document.getElementById("navbarHeader");

function toggleNavbarId() {
  console.log("coucou");
  navbarHeader.classList.toggle("collapse");
}

document.getElementById("navbarHeader").addEventListener('click', toggleNavbarId);


