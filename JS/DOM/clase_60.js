const $divsEventos = document.querySelectorAll(".eventos-flujo div");
console.log($divsEventos);

function flujoEevntos(e){
    console.log(`Hola soy ${this.className}, el click lo origino ${e.target.className}`);
};

$divsEventos.forEach(div => {
    // Fase de Burbuja
    // div.addEventListener("click",flujoEevntos)
    // div.addEventListener("click",flujoEevntos,false)
    // Fase de Captura
    // div.addEventListener("click",flujoEevntos,true)
    div.addEventListener("click",flujoEevntos,{
        capture: false,
        once: true,
    })
});