// Question 1 :
// Combien y a-t-il d'éléments <p> présents dans la page HTML ? 
// Imprime-le résultat dans la console.
let p_tag = document.getElementsByTagName("p");
console.log(p_tag.length);

// Question 2 :
// Quel est le contenu texte de l'élément portant l'id coucou ?
//  Imprime-le dans la console.
let say_coucou = document.getElementById("coucou");
console.log(say_coucou);

// Question 3 :
// Quelle est l'URL vers laquelle pointe le 3ème élément <a> de la page HTML ?
//  Imprime-la dans la console.
let a_one = document.getElementsByTagName("a");
console.log(a_one[2].href);

// Question 4 :
// Combien d'éléments portent la classe compte-moi ?
//  Imprime le résultat dans la console.
let compte_moi_class = document.getElementsByClassName("compte-moi"); 
console.log(compte_moi_class.length);

// Question 5 :
// Combien d'éléments <li> portent la classe compte-moi ?
//  Imprime le résultat dans la console.
let li_compte_moi = document.querySelectorAll("li.compte-moi");
console.log(li_compte_moi.length);

// Question 6 :
// Combien d'éléments <li> et situés dans une liste ordonnée portent la classe
//  compte-moi ? Imprime le résultat dans la console.
let ol_tag = document.getElementsByTagName("ol");
let li_child_compte_moi = document.querySelectorAll("ol > li.compte-moi");
console.log(li_child_compte_moi.length);


// Question 7 :
// Petit jeu de piste à résoudre si possible sans regarder le fichier HTML…
// La page contient un seul élément <div>.
//  Celui-ci contient 2 éléments "unordered list" ou <ul>.
//   Dans le second <ul>,
//    le premier élément de la liste (tag <li>)
//     est caché visuellement de l'utilisateur mais toi,
//      tu peux en récupérer le contenu.
//       Affiche-le dans la console.
let div = document.getElementsByTagName("div")[0];
let find_second_ul = div.getElementsByTagName("ul");
console.log(find_second_ul);
let find_li = find_second_ul[1].getElementsByTagName("li")[0];
console.log(find_li);
