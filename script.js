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

let navbarHeader = document.getElementsByClassName("navbar-toggler")[0];

navbarHeader.addEventListener('click', function(){
  document.getElementById("navbarHeader").classList.toggle("collapse");
});

// Fonctionnalité 3 :
// si on clique sur le bouton "Edit" de la première card, le texte de la card va se mettre en rouge de façon irréversible (sauf si on recharge la page)

let firstCardParagraph = document.querySelectorAll("main .card p")[0]

let firstCardEditButton = document.querySelectorAll("main .col-md-4 .btn-group")[0].children[1]

firstCardEditButton.addEventListener("click", function(){
  firstCardParagraph.style.color = "red"
});

// Fonctionnalité 4 :
// si on clique sur le bouton "Edit" de la deuxième card, le texte de la card va se mettre en vert. Si on re-clique dessus, il redevient comme avant ! 
let secondCardParagraph = document.querySelectorAll("main .card p")[1]

let secondCardEditButton = document.querySelectorAll("main .col-md-4 .btn-group")[1].children[1]

let first_click = true;
secondCardEditButton.addEventListener("click", function(){
  if (first_click === true){
    secondCardParagraph.style.color = "green"
    first_click = false;
  } else {
    secondCardParagraph.style.color = "";
    first_click = true;
  }
});

// Fonctionnalité 5 :
// si un utilisateur double clique sur la navbar en haut, tout Bootstrap disparaît et la page s'affiche comme si on avait oublié de mettre le CDN qui la relie au fichier CSS. Si possible, rends cette fonctionnalité réversible (un nouveau double-clic fait tout revenir à la normale).

// 1. Find and store the element we want to listen to events on.
let linkCDN = document.getElementsByTagName("link")[0]
let navbar = document.querySelectorAll("header")[0]
// 2. Add the event listener for the element and function
let click = true;
navbar.addEventListener("dblclick", function(){
  if (click){
    linkCDN.disabled = true;
    click = false;
  } else {
    linkCDN.disabled = false;
    click = true;
  }
});

// Fonctionnalité 6 :
// si un utilisateur passe sa souris sur le bouton "View" d'une card (n'importe laquelle), celle-ci va se réduire. Cela veut dire que le texte disparaît, l'image n'apparaîtra qu'à 20 % de sa taille d'origine et les boutons "Edit" / "View" restent visibles. Cette fonction sera réversible : s'il repasse sa souris, la card redevient normale
let cards = [];
let cardsImg = []; 
let cardsP = [];
let cardsViewButton = [];
let smallCard = [];

for (let i = 0; i < document.querySelectorAll("main .col-md-4 .btn-group").length; i ++){
  cards.push(document.querySelectorAll("main .card")[i]);
  cardsImg.push(document.querySelectorAll("main .card .card-img-top")[i]);
  cardsP.push(document.querySelectorAll("main .card p")[i]);
  cardsViewButton.push(document.querySelectorAll("main .col-md-4 .btn-group")[i].children[0]);
  smallCard.push(false);

}  
for (let i = 0; i < cards.length; i ++){
    cardsViewButton[i].addEventListener("mouseover", function(){
      if (smallCard[i] === false){
        cardsImg[i].style.width = "20%"
        cardsImg[i].style.margin = 'auto';
        cardsP[i].style.display = "none"
        smallCard[i] = true;
      } else {
        cardsImg[i].style.width = ""
        cardsImg[i].style.margin = '';
        cardsP[i].style.display = ""
        smallCard[i] = false;
      }
  });
}