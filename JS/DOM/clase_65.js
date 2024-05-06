// window.alert("Alerta");
// window.confirm("Confirmación");
// window.prompt("Aviso");
// alert('Alerta sin "Window"')

const $btnAbrir = document.getElementById("abrir-ventana"),
      $btnCerrar = document.getElementById("cerrar-ventana"),
      $btnImprimir = document.getElementById("imprimir-ventana")
;

$btnAbrir.addEventListener("click",e =>{
    ventana = open("https://www.udemy.com");
});

$btnCerrar.addEventListener("click",e =>{
    // close("#");
    ventana.close();
});

$btnImprimir.addEventListener("click",e =>{
    print("#");
});