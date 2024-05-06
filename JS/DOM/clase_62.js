function flujoEventos(e) {
    console.log(`Hola soy ${this}, el click lo originó ${e.target.className}`);
};

document.addEventListener("click",(e) => {
    console.log("Click en",e.target);
    if (e.target.matches(".eventos-flujo div")){
        flujoEventos(e);
    }
    
    if (e.target.matches(".eventos-flujo a")){
        alert('Hola soy Lian fundador de "LianCorp".');
        e.preventDefault();
    }
});



