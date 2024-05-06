console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute("lang"));
console.log(document.querySelector(".link-dom").href);
console.log(document.querySelector(".link-dom").getAttribute("href"));

document.documentElement.lang = "es";
console.log(document.documentElement.lang);
document.documentElement.setAttribute("lang","es-PE")
console.log(document.documentElement.lang);

const $linkDOM = document.querySelector(".link-dom");

$linkDOM.setAttribute("target","_blank");
$linkDOM.setAttribute("rel","noopener");
$linkDOM.setAttribute("href","https://youtube.com");
console.log($linkDOM.hasAttribute("rel"));
$linkDOM.removeAttribute("rel","noopener");
console.log($linkDOM.hasAttribute("rel"));

// Data Attributes

console.log($linkDOM.getAttribute("data-description"));
console.log($linkDOM.dataset);
$linkDOM.setAttribute("data-id","1");
console.log($linkDOM.dataset);
console.log($linkDOM.dataset.description);
console.log($linkDOM.dataset.id);
$linkDOM.setAttribute("data-description","Modelo de Objeto del Documento");
console.log($linkDOM.dataset.description);
$linkDOM.dataset.description = "Hola Lian"
console.log($linkDOM.dataset.description);