/*
.insertAdjacent...
    .insertAdjacentElement(posicion,el)
    .insertAdjacentHTML(posicion,html)
    .insertAdjacentText(posicion,text)
                           ^ 
                           |
    ------------------------            
    |
Posiciones
    beforebegin(hermano anterior)
    afterend(hermano siguiente)
    
    afterbegin(primer hijo)
    beforeend(ultimo hijo)
*/

const $cards = document.querySelector(".cards"),
      $newCard = document.createElement("figure")
;
let $contenCard=`
    <img src="https://placeimg.com/200/200/any" alt="Any">
    <figcaption></figcaption>
`;
$newCard.classList.add("card");

$newCard.insertAdjacentHTML("beforeend",$contenCard);
$newCard.querySelector("figcaption").insertAdjacentText("afterbegin","Any")
// $cards.insertAdjacentElement("beforebegin",$newCard);
//$cards.insertAdjacentElement("afterbegin",$newCard);
// $cards.insertAdjacentElement("beforeend",$newCard);
// $cards.insertAdjacentElement("afterend",$newCard);

// Primer
// $cards.prepend($newCard);
// Antes de
// $cards.before($newCard);
// Ultimo
// $cards.append($newCard);
// Despues de
$cards.after($newCard);



