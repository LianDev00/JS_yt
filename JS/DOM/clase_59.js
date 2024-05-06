function saludar(nombre = "Desconocido"){
    alert(`Hola ${nombre}`);
    console.log(window.event);
}



const $eventoMultiple = document.getElementById("evento-multiple"),
      $eventoRemover = document.getElementById("evento-remover");

$eventoMultiple.addEventListener("click", () => {
    saludar();
    saludar("Lian");
});


const $removerDobleClick = (e) => {
    alert(`Removiento el Evento de tipo ${e.type}`);
    console.log(e);
    $eventoRemover.removeEventListener("dblclick",$removerDobleClick);
    $eventoRemover.disabled = true;
}

$eventoRemover.addEventListener("dblclick",$removerDobleClick);