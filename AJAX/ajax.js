// -------------------------- XMLHttpRequest --------------------------
(()=>{
    const xhr = new XMLHttpRequest(),
          $xhr = document.getElementById("xhr"),
          $fragment = document.createDocumentFragment();

    xhr.addEventListener("readystatechange",(e)=>{          
        if(xhr.readyState !== 4)return;

        // console.log(xhr);

        if(xhr.status >= 200 && xhr.status < 300){
            // console.log("Exito");
            // console.log(xhr.responseText)
            // $xhr.innerHTML = xhr.responseText;
            let json = JSON.parse(xhr.responseText);
            // console.log(json)
            json.forEach(el =>{
                const $li = document.createElement("li");
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
                $fragment.appendChild($li);
            });
            $xhr.appendChild($fragment);
        } else{
            // console.log("Fallo");
            let message = xhr.statusText || "Ocurrio un fallo";
            $xhr.innerHTML = `Error ${xhr.status}: ${message}`
        };
        // console.log("Esto se ejecutara independientemente del resultado del if-else Fetch.")
        // console.log("")
    });
    
    xhr.open("GET","https://jsonplaceholder.typicode.com/users");
    xhr.send("");
    
})();

// ---------------------------- Fetch API ----------------------------
(()=>{
    const $fetch = document.getElementById("fetch"),
          $fragment = document.createDocumentFragment();
    
    fetch("https://jsonplaceholder.typicode.com/users")
        /* .then((res) =>{
            console.log(res)
            return res.ok ? res.json() : Promise.reject(res);
        }) */
        .then((res) => res.ok ? res.json() : Promise.reject(res))
        .then((json) =>{
            // console.log(json)
            // $fetch.innerHTML = json
            json.forEach(el =>{
                const $li = document.createElement("li");
                      $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
                      $fragment.appendChild($li);
                $fetch.appendChild($fragment);
            });
        })
        .catch((err) =>{
            // console.log(err)
            let message = err.statusText || "Ocurrio un fallo";
            $fetch.innerHTML = `Error ${fetch.status}: ${message}`
        })
        .finally(()=>{
            // console.log("Esto se ejecutara independientemente del resultado de la promesa Fetch.")
            // console.log("")
        });
})();

// ----------------------- Fetch API + Asyn Await -----------------------
(()=>{
    const $fetchAsync = document.getElementById("fetch-async"),
          $fragment = document.createDocumentFragment();
    
    async function getData(){
        try {
            let res = await fetch("https://jsonplaceholder.typicode.com/users"),
            json = await res.json();
            // console.log(res,json)

            // if(!res.ok) throw new Error("Ocurrio un Error al solicitar los Datos");
            if(!res.ok) throw {status: res.status,statusText: res.statusText}

            json.forEach(el =>{
                const $li = document.createElement("li");
                      $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
                      $fragment.appendChild($li);
                $fetchAsync.appendChild($fragment);
            });
        } catch (err) {
            console.log("Catch",err)
            let message = err.statusText || "Ocurrio un fallo";
            $fetchAsync.innerHTML = `Error ${err.status}: ${message}`
        } finally{
            // console.log("Esto se ejecutara independientemente del resultado del try-catch.")
            // console.log("")
        }        
    }
     getData();
})();

// ------------------------------- Axios -------------------------------
(()=>{
    const $axios = document.getElementById("axios"),
          $fragment = document.createDocumentFragment();

    axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{
            // console.log(res)
            let json = res.data;
            json.forEach(el =>{
                const $li = document.createElement("li");
                      $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
                      $fragment.appendChild($li);
                $axios.appendChild($fragment);
            });
        })
        .catch((err)=>{
            // console.log("Catch",err.response)
            let message = err.response.statusText || "Ocurrio un fallo";
            $axios.innerHTML = `Error ${err.response.status}: ${message}`
        })
        .finally(()=>{
            // console.log("Esto se ejecutara independientemente del resultado de Axios.")
        });
})();

// ------------------------ Axios + Asyn Await ------------------------
(()=>{
    const $axiosAsync = document.getElementById("axios-async"),
          $fragment = document.createDocumentFragment();
    async function getData(){
        try {
            // "/assets/users.json"
            // "https://jsonplaceholder.typicode.com/users"
            let res = await axios.get("https://jsonplaceholder.typicode.com/users"),
                json = await res.data;
            console.log(res,json);
            json.forEach(el =>{
                const $li = document.createElement("li");
                      $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
                      $fragment.appendChild($li);
                $axiosAsync.appendChild($fragment);
            });
        } catch (err) {
            console.log("Catch",err.response)
            let message = err.response.statusText || "Ocurrio un fallo";
            $axiosAsync.innerHTML = `Error ${err.response.status}: ${message}`
        } finally{
            console.log("Esto se ejecutara independientemente del resultado de Axios try-catch")
        }
    }
    getData();
})();