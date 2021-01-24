let bttCalcular = document.getElementById('bttCalcular');
let txtK = document.getElementById('txtK');
let txtC = document.getElementById('txtC');
let txtG = document.getElementById('txtG');
let txtN = document.getElementById('txtN');

let xArray = [];
let resultado = [];
let i = 1;


bttCalcular.addEventListener('click', function(){
    console.log('hola gente');
    let n = parseInt(txtN.value);
    let k , c , g, semilla;
    k = parseFloat(txtK.value);
    c = parseFloat(txtC.value);
    g = parseFloat(txtG.value);
    semilla = document.getElementById('txtX').value;
    xArray.push(parseFloat(semilla));
    for(let i = 0; i<n; i++)
        metodoMixto(k,c,g);
})



function metodoMixto(k ,c ,g ){
    let a = calcularA(k);
    let m = calcularM(g);
    let xSub = calcularXsub(xArray[i-1],a,c,m);
    xArray.push(xSub);
    let datoResultado = calcularR(xSub,m);
    resultado.push(datoResultado);
    console.log(xArray[i-1] + " " + resultado[i-1]);
    presentar(xArray[i-1], i, resultado[i-1]);
    i++;
}
function calcularR(x , m){
    return x / ( m - 1 );
}
function calcularA(k){
    return 1 + (4 * k);
}

function calcularM(g){
    return Math.pow(2,g);   
}

function calcularXsub(x,a,c,m){
    return (x * a + c) % m;
}

function presentar(x, i ,resultado){
    let tabla = document.getElementById('presentacion');
    let fila = document.createElement('tr');
    let textI = document.createTextNode(i); 
    let textX = document.createTextNode(x);
    let textR = document.createTextNode(resultado);
    crearElementoPresentar(fila, textI, tabla);
    crearElementoPresentar(fila, textX, tabla);
    crearElementoPresentar(fila, textR, tabla);
}

function crearElementoPresentar(fila, text, tabla){
    let td = document.createElement('td');
    td.appendChild(text);
    fila.appendChild(td);
    tabla.appendChild(fila);
}


let bttLimpiar = document.getElementById('bttLimpiar').addEventListener('click', function(){
    for(let i = 0; i< inputsElements.length; i++){
        inputsElements[i].value = "";
    }
    window.location.reload();
    
})