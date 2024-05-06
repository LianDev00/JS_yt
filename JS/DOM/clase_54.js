const $figure = document.createElement("figure"),
      $img = document.createElement("img"),
      $figcaption = document.createElement("figcaption"),
      $figcaptionText = document.createTextNode("Tech"),
      $cards = document.querySelector(".cards"),
      $figure2 = document.createElement("figure")
;


$img.setAttribute("src","https://placeimg.com/200/200/tech");
$img.setAttribute("alt","tech");
$figure.classList.add("card");

$figcaption.appendChild($figcaptionText);
$figure.appendChild($img);
$figure.appendChild($figcaption)
$cards.appendChild($figure);

$figure2.innerHTML = `
    <img src="https://placeimg.com/200/200/arch" alt="arch">
    <figcaption>Arch</figcaption>
`
;
$figure2.classList.add("card");
$cards.appendChild($figure2);

// -------------------------------------------------------------------------
const estaciones = ["Verano","Otoño","Invierno","Primavera"],
      $ul = document.createElement("ul")
;
document.write("<h3>Estaciones del Año</h3>");
document.body.appendChild($ul);

estaciones.forEach(el =>{
    const $li = document.createElement("li")
    $li.textContent = el;
    $ul.appendChild($li);
});

// -------------------------------------------------------------------------
const continentes = ["America","Africa","Europa","Asia","Oceania"],
      $ul2 = document.createElement("ul")
;
document.write("<h3>Continentes del mundo</h3>");
document.body.appendChild($ul2);

$ul2.innerHTML = "";
continentes.forEach(el => $ul2.innerHTML += `<li>${el}</li>`)

// -------------------------------------------------------------------------
const meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio",
              "Agosto","Septiembre","Octubre","Noviembre","Diciembre"],
      $ul3 = document.createElement("ul"),
      $fragmento = document.createDocumentFragment()
;
meses.forEach(el => {
    const $li = document.createElement("li");
    $li.textContent = el;
    $fragmento.appendChild($li);
});
document.write("<h3>Meses del Año</h3>")
$ul3.appendChild($fragmento)
document.body.appendChild($ul3);