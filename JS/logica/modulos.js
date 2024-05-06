// "usuario" aparece sombreado porque no esta siendo LLAMADO
//                                         ↓
import saludar, /*password,*/ {Saludar,PI,usuario} from "./constantes.js";
import {aritmetica as cal} from "./aritmetica.js";

console.log("Archivo modulos.js");
console.log(PI);
//console.log(aritmetica.sumar(3,4));
//console.log(aritmetica.restar(3,4));
console.log(cal.sumar(3,4));
console.log(cal.restar(3,4));
saludar();
let saludo = new Saludar();
saludo;