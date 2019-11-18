// Écris une fonction changeTitles() qui va :

//     Pointer vers le titre en haut de page 
//     ("Album Example") et le changer en 
//     "Ce que j'ai appris à THP"

//     Pointer vers le sous-titre 
//     ("Something short and leading about…")
//     et le changer en "THP est une formation qui,
//      en 3 mois, à plein temps, 
//      vous apportera des connaissances actionnables 
//      pour vous permettre de voir plus loin. 
//      Chez nous, pas de professeurs,
//       pas de locaux,
//        mais un groupe de travail en présentiel.
//         Après 11 semaines,
//          les principaux langages et outils du web
//           n'auront plus de secret pour vous !"

// Pour cette fonction comme toutes les suivantes :
//  exécute la fonction dans ton code JS 
//  en l'appelant en bas avec un changeTitles();.
//   Dès que tu fais une modification sur la fonction,
//    rafraîchis la page HTML dans ton navigateur 
//    pour voir si la modification apportée est OK.


function changeTitles(){
    let titre = document.getElementsByTagName("h1");
    console.log(titre);
    titre.textContent = "Ce que j'ai appris à THP";
    let sous_titre = document.getElementsByTagName("p")[1];
    console.log(sous_titre);
    sous_titre.textContent = "THP est une formation qui ,en 3 mois, à plein temps, vous apportera des connaissances actionnables  pour vous permettre de voir plus loin. Chez nous, pas de professeurs, pas de locaux, mais un groupe de travail en présentiel.Après 11 semaines,les principaux langages et outils du web n'auront plus de secret pour vous !"


}

// Ecris une fonction changeCallToActions() qui va:

//     Changer le texte du bouton 
//     "Main call to action" en "OK je veux tester !"

//     Ajouter l'URL (un href) 
//     vers laquelle le bouton "Main call to action" 
//     va pointer : "http://www.thehackingproject.org"

//     Changer le texte du bouton "Secondary action" 
//     en "Non Merci"

//     Ajouter l'URL vers laquelle le bouton 
//     "Secondary action" va pointer : 
//     "https://www.pole-emploi.fr/accueil/"

function changeCallToActions(){
    
    let primary_btn = document.getElementsByClassName("btn-primary");
    console.log(primary_btn);
    primary_btn.textContent = "OK je veux tester !";
    primary_btn[0].setAttribute("href", "http://www.thehackingproject.org");

    let secondary_btn = document.getElementsByClassName("btn-secondary");
    console.log(secondary_btn);
    secondary_btn.textContent = "Non Merci";
    secondary_btn[0].setAttribute("href", "https://www.pole-emploi.fr/accueil/");

}


// Modification n°3

// Écris une fonction changeLogoName() 
// qui va modifier le titre "Album" de la navbar 
// (en haut à gauche) de la façon suivante :

//     Change "Album" par "The THP Experience" ;
//     Change la taille du texte pour le passer en 2em.

function changeLogoName(){
    let nav_titre = document.getElementsByTagName("strong");
    nav_titre[0].textContent = "The THP Experience";
    nav_titre[0].style.fontSize = "2em";
}

// Écris une fonction deleteLastCards() 
// qui va supprimer les 3 dernières cards via une boucle.
//  Je donne ci-dessous 2 coups de main
//   sur cette modification : 
//   les plus à l'aise peuvent essayer de ne pas les lire.

function deleteLastCards() {
    let parent_cards = document.getElementsByClassName("col-md-4");
    // let cards =[];
    // console.log(parent_cards);
    let i = 0;
    while(i <  parent_cards.length){
        if (i >=   parent_cards.length - 3  ){
           parent_cards[i].childNodes[1].remove();
        }
        console.log(parent_cards[i].childNodes[1]);
        i++;
    }
}

// Écris une fonction changeCardsText() 
// qui va modifier le texte des 3 premières cards 
// et le remplacer avec cela :

//     Carte HTML : "L’HyperText Markup Language, 
//     généralement abrégé HTML,
//      est le langage de balisage conçu pour représenter 
//      les pages web"

//     Carte CSS : "Les feuilles de style en cascade,
//      généralement appelées CSS 
//      de l'anglais Cascading Style Sheets,
//       forment un langage informatique qui décrit
//        la présentation des documents HTML et XML"

//     Carte JS : "JavaScript est un 
//     langage de programmation de scripts 
//     principalement employé dans 
//     les pages web interactives mais aussi
//      pour les serveurs
//      . C'est un langage orienté objet à prototype."

// Essaye de mettre ça dans une boucle.
function changeCardsText(){
    let parent_cards = document.getElementsByClassName("col-md-4");
    let i = 0;
    while(i <  parent_cards.length){
        // console.log(parent_cards[i].childNodes[0]);
        switch (i){
            case 0:
                parent_cards[i].getElementsByClassName("card-text")[0].textContent = "L’HyperText Markup Language, généralement abrégé HTML, est le langage de balisage conçu pour représenter les pages web";
                break;
            case 1:
                parent_cards[i].childNodes[1].getElementsByClassName("card-text")[0].textContent = "Les feuilles de style en cascade, généralement appelées CSS de l'anglais Cascading Style Sheets forment un langage informatique qui décrit la présentation des documents HTML et XML";
                break;
            case 2:
                parent_cards[i].childNodes[1].getElementsByClassName("card-text")[0].textContent = "JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives mais aussi pour les serveurs. C'est un langage orienté objet à prototype.";
                break;

        }
        console.log(parent_cards[i].childNodes[1].textContent);
        i++;
    }

}

// Écris une fonction changeViewButtons() 
// qui va modifier tous les boutons "View" 
// des cards pour les passer en vert. 
// En gros il faut leur mettre la classe btn-success
//  et enlever btn-outline-secondary. 
//  Les boutons Edit ne doivent pas changer.
//   Évite bien sûr de faire les 6 modifications une à une 
//   ... faut de la boucle là !

function changeViewButtons(){
    let parent_btn = document.getElementsByClassName("btn-group");
   
    // console.log(parent_btn);
    let i = 0;
    while(i <  parent_btn.length){
        // console.log(parent_btn[i].childNodes[1]);
        
        parent_btn[i].childNodes[1].classList.add("btn-success");
        parent_btn[i].childNodes[1].classList.remove("btn-outline-secondary");


        console.log(parent_btn[i].childNodes[1].classList);
        i++;
    }
}

function pyramide(){
    let container = document.getElementsByClassName("container");
    console.log(container);
    let new_div = document.createElement('div');
    let new_row = container[3].appendChild(new_div);
    new_row.classList.add("row");
    console.log(new_row);
    console.log(container);
    
    let parent_cards = document.getElementsByClassName("col-md-4");
   let js_card =  parent_cards[2].childNodes[1];
     new_row.appendChild(parent_cards[2]);

}

// Allez, on finit sur une modification un peu tordue :

//     Rajoute une <div> portant la classe row 
//      juste après celle 
//     qui contient déjà les cards actuelle.

//     Déplace la 3ème card (JS) de la première
//      <div class="row"> vers la deuxième 
//      que tu viens de créer.

// Elle est pas belle cette pyramide inversée en front 👳? 
// (comment ça "obsédés par les pyramides" ?). 

function perform(){
    changeTitles();
    changeCallToActions();
    changeLogoName();
    deleteLastCards();
    changeCardsText();
    changeViewButtons();
    pyramide();
}
perform();