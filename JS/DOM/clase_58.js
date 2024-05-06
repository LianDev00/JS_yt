function holaMundo() {
  alert("Hola Mundo");
  // "event" esta obsoleto, por lo que para hacercarme lo mas posible a algo parecido primero ejecute "window"
  console.log(window.event);
}

const $eventoSemantico = document.getElementById("evento-semantico"),
      $eventoMultiple = document.getElementById("evento-multiple");
$eventoSemantico.onclick = holaMundo;
$eventoSemantico.onclick = function (e) {
    alert("Hola Mundo desde el Manejador de Eventos Semanticos")
    console.log(e);
    console.log(window.event);
};

$eventoMultiple.addEventListener("click",holaMundo);
$eventoMultiple.addEventListener("click",(e) => {
    alert("Hola Mundo desde el Manejador de Eventos Multiples");
    console.log(e);
    console.log(e.type);
    console.log(e.target);
});