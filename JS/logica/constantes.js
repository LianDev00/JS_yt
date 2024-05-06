export const PI = Math.PI;

// "usuario" aparece sombreado porque no esta siendo IMPORTADO
//       ↓
export let usuario = "Lian";

// "default" se pone debajo de las variables.
let password = "qwerty";
// export default password;


export const hello = ()=> console.log("Hola");

// solo se puede tener UNA exportacion "default".
// export default function saludar2() {
    //     console.log("Hola modulos +ES6");
    // }
export default function saludar() {
    console.log("Hola modulos +ES6");
}

export class Saludar{
    constructor() {
        console.log(`Hola desde una "class"`);
    }
}