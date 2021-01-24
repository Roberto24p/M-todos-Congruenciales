let bttMix = document.getElementById('bttMix');
let bttMul = document.getElementById('bttMul');
let bttAdi = document.getElementById('bttAdi');

bttMul.addEventListener('click', function () {
    let tipoA = document.getElementById('divCmb');
    let txtK = document.getElementById('divK');
    let txtC = document.getElementById('divC');
    let inputX = document.getElementById('txtX');
    inputX.addEventListener('input',validarSoloImpares);
txtC.style.display = 'none';
inputX.parentNode.style.display = 'block';
txtK.style.display = 'block';
tipoA.style.display = 'block';


hiddenBoton(bttMultiplicativo, bttCalcular, bttAditivo)
});


bttMix.addEventListener('click', function () {
    let inputX = document.getElementById('txtX');
    inputX.removeEventListener('input', validarSoloImpares);
    let txtK = document.getElementById('divK');
    let txtC = document.getElementById('divC');
    let tipoA = document.getElementById('divCmb');
    tipoA.style.display = 'none';
    txtK.style.display = 'block';

    txtC.style.display = 'block'

    hiddenBoton(bttCalcular, bttMultiplicativo, bttAditivo);
});

bttAdi.addEventListener('click', function () {
    let inputX = document.getElementById('txtX');
    inputX.removeEventListener('input', validarSoloImpares);
    document.getElementById('divX').style.display = 'none';
    let txtK = document.getElementById('divK');
    let txtC = document.getElementById('divC');
    let tipoA = document.getElementById('divCmb');
    tipoA.style.display = 'none';
    txtK.style.display = 'none';
    txtC.style.display = 'none';
    hiddenBoton(bttAditivo, bttCalcular, bttMultiplicativo);
    let cantidadI = prompt('Ingresa la cantidad números que vas a ingresar');
    let  elementAditivo;
    for(let i = 0; i<cantidadI; i++){
        elementAditivo = prompt('Ingresa una semilla: ')
        if(!isNaN(elementAditivo) && elementAditivo != null && elementAditivo != ""){
            arrayAditivo.push(parseInt(elementAditivo));
        }else{
            alert('no es numero');
            i--;
        }
    }
})

function hiddenBoton(bttA, bttN, bttNe) {
    bttN.style.display = 'none';
    bttA.style.display = 'inline-block';
    bttNe.style.display = 'none';
}
