//Generador de colores hexagesimal
const generate = document.getElementById('generate'),
    reset = document.getElementById('reset'),
    showColor = document.querySelector('.color-hex'),
    cargaColor = document.getElementById('cargaColor'), 
    carga = document.getElementById('carga');

let hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

document.addEventListener('click', e =>{
    if(e.target === generate){
        let color = '#';
        for(let i = 0; i < 6; i++){
            color += hex[randomNumber()]
        }
        showColor.innerHTML = color;
        document.body.style.background = color;
    }
    else if(e.target === reset){
        showColor.innerHTML = '#303134';
        document.body.style.background = '#303134';
    }
    else if(e.target === carga){
        showColor.innerHTML = cargaColor;
        document.body.style.background = cargaColor;
    }
})

function randomNumber(){
    return Math.floor(Math.random() * hex.length);
}

//Cambiar background con carga de datos


