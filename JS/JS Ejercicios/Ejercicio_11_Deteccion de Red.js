const d = document,
      w = window,
      n = navigator;

export default function networkStatus(){
    const isOnLine = ()=>{
        const $div = d.createElement("div")
        if(n.onLine){
            $div.textContent = "Conexion Reestablecida";
            $div.classList.add("online");
            $div.classList.remove("offline");
        } else{
            $div.textContent = "Conexion Perdida";
            $div.classList.add("offline");
            $div.classList.remove("online");
        }
        d.body.insertAdjacentElement("afterbegin",$div);
        setTimeout(()=> d.body.removeChild($div),2000)
    }
    
    w.addEventListener("online",(e)=>isOnLine());
    w.addEventListener("offline",(e)=>isOnLine());
}

/* export default function networkStatus() {
    const onOnline = (e) => {
      console.log("Estás online");
    };
  
    const onOffline = (e) => {
      console.log("Estás offline");
    };
  
    w.addEventListener("online", onOnline);
    w.addEventListener("offline", onOffline);
  
    // Verificar el estado de conexión inicial
    if (n.onLine) {
      console.log("Estás online");
    } else {
      console.log("Estás offline");
    }
  } */
  