import hamburgerMenu from "./JS Ejercicios/Ejercicio_1_MenuHamburguesa.js";
import { digitalClock,alarm } from "./JS Ejercicios/Ejercicio_2_Reloj Digital.js";
import { shotcuts,moveBall } from "./JS Ejercicios/Ejercicio_3_Eventos del Teclado.js";
import countdown from "./JS Ejercicios/Ejercicio_4_Cuenta_Regresiva.js";
import scrollTopButton from "./JS Ejercicios/Ejercicio_5_Boton_Scroll.js";
import darkTheme from "./JS Ejercicios/Ejercicio_6_Tema Dark y Light.js";
import responsiveMedia from "./JS Ejercicios/Ejercicio_8_Responsive con JavaScript.js";
import responsiveTester from "./JS Ejercicios/Ejercicio_9_Responsive Tester.js";
import userDeviceInfo from "./JS Ejercicios/Ejercicio_10_Detección de Dispositivos.js";
import networkStatus from "./JS Ejercicios/Ejercicio_11_Deteccion de Red.js";
import webCam from "./JS Ejercicios/Ejercicio_12_Detección de la WebCam.js";
import getGeolocation from "./JS Ejercicios/Ejercicio_13_Geolocalización.js";
import searchFilters from "./JS Ejercicios/Ejercicio_14_Filtros de Búsqueda.js";
import lottery from "./JS Ejercicios/Ejercicio_15_Sorteo Digital.js";
import slider from "./JS Ejercicios/Ejercicio_16_Responsive Slider.js";
import scrollSpy from "./JS Ejercicios/Ejercicio_17_ScrollSpy con Intersection Observer.js";
import smartVideo from "./JS Ejercicios/Ejercicio_18_Video Inteligente.js";
import contactFromValidations from "./JS Ejercicios/Ejercicio_19_Validación de Formularios.js";
import speechReader from "./JS Ejercicios/Ejercicio_20_Narrador.js";

const d = document;

d.addEventListener("DOMContentLoaded",(e)=>{
    hamburgerMenu(".panel-btn",".panel",".menu a");
    digitalClock("#reloj","#activar-reloj","#desactivar-reloj");
    alarm("");
    countdown("countdown","Feb 29, 2024 16:00:00","Feliz Cumpleaños Lian!🤓");
    scrollTopButton(".scroll-top-btn");
    responsiveMedia(
        "youtube",
        "(min-width: 1024px)",
        `<a href="http://127.0.0.1:5500/Ejercicios%20DOM/Ejercicio_DOM_9.html">Ver video</a>`,
        `<iframe width="560" height="315" src=""</iframe>`);
    responsiveMedia(
        "gmaps",
        "(min-width: 1024px)",
        `<a href="https://goo.gl/maps/ZLxdKZNbpVTc7tKo9">Ver mapa</a>`,
        `<iframe src="" width="600" height="450" style="border:1;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`);
    responsiveTester("responsive-tester");
    userDeviceInfo("user-device");
    webCam("webcam");
    getGeolocation("geolocation");
    searchFilters(".card-filter",".card");
    lottery("#winner-btn",".player")
    slider();
    scrollSpy();
    smartVideo();
    contactFromValidations();
});

d.addEventListener("keydown",e=>{
    shotcuts(e);
    moveBall(e,".ball",".stage");
});

darkTheme(".dark-theme-btn","dark-mode");
networkStatus();
speechReader();