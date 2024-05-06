const $divsEventos = document.querySelectorAll(".eventos-flujo div"),
      $linkEventos = document.querySelector(".eventos-flujo a");


function flujoEevntos(e){
    console.log(`Hola soy ${this.className}, el click lo origino ${e.target.className}`);
    e.stopPropagation();
};

$divsEventos.forEach(div => {
    div.addEventListener("click",flujoEevntos)
    // div.addEventListener("click",flujoEevntos,true)
});

$linkEventos.addEventListener("click",(e) => {
    alert('Hola soy Lian fundador de "LianCorp".');
    e.preventDefault();
    e.stopPropagation();
});


