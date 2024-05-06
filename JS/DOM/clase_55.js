const $cards = document.querySelector(".cards"),
      $template = document.getElementById("template-card").content,
      $fragmento = document.createDocumentFragment(),
      cardContent = [
        {
            title: "Tecnologia",
            img: "https://placeimg.com/200/200/tech",
        },
        {
            title: "Animales",
            img: "https://placeimg.com/200/200/animals",
        },
        {
            title: "Arquitectura",
            img: "https://placeimg.com/200/200/arch",
        },
        {
            title: "Gente",
            img: "https://placeimg.com/200/200/people",
        },
        {
            title: "Naturaleza",
            img: "https://placeimg.com/200/200/nature",
        },
      ]
;
cardContent.forEach(el => {
    $template.querySelector("img").setAttribute("src",el.img);
    $template.querySelector("img").setAttribute("alt",el.title);
    $template.querySelector("figcaption").textContent = el.title;

    let $clone = document.importNode($template,true);
    $fragmento.appendChild($clone);
});

$cards.appendChild($fragmento);