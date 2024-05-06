const d = document;
let x = 0,
    y = 0;

export function moveBall(e,ball,stage){
    const $ball = d.querySelector(ball),
          $stage = d.querySelector(stage),
          limitsBall = $ball.getBoundingClientRect(),
          limitsStage = $stage.getBoundingClientRect();
          //console.log(limitsBall,limitsStage);          
    ;
    /* const move = (direction)=>{
        $ball.style.transform = `translate(${x*10}px,${y*10}px)`;
    } */
    switch (e.keyCode) {
        // Izquierda
        case 37:
            e.preventDefault();
            //move("Left");
            if (limitsBall.left>limitsStage.left)x--;
            break;
        // Arriba
        case 38:
            e.preventDefault();
            //move('Up');
            if (limitsBall.top>limitsStage.top)y--;
            break;
        // Derecha
        case 39:
            e.preventDefault();
            //move("Right")
            if (limitsBall.right<limitsStage.right)x++;
            break;
        // Abajo
        case 40:
            e.preventDefault();
            //move("Down");
            if (limitsBall.bottom<limitsStage.bottom)y++;
            break;
        default:
            break;
    }
    $ball.style.transform = `translate(${x*10}px,${y*10}px)`;
};

export function shotcuts(e){
    /* console.log(e.type);
    console.log(e.key);
    console.log(e.keyCode);
    console.log(`ctrl: ${e.ctrlKey}`);
    console.log(`alt: ${e.altKey}`);
    console.log(`shift: ${e.ShiftfKey}`); */
    if(e.keyCode === "a" && e.altKey){
        // alert("Haz lanzado una alerta con el teclado!");
    }
};