let bttMix = document.getElementById('bttMix');
let bttMul = document.getElementById('bttMul');
let bttAdi = document.getElementById('bttAdi');

bttMul.addEventListener('click', function(){
    let tipoA = document.getElementById('divCmb');
    let txtK = document.getElementById('divK');
    let txtC = document.getElementById('divC');
    txtC.style.display = 'none';
    txtK.style.display = 'block';
    tipoA.style.display = 'block';
    hiddenBoton(bttMultiplicativo, bttCalcular, bttAditivo)
});


bttMix.addEventListener('click', function(){
    let txtK = document.getElementById('divK');
    let txtC = document.getElementById('divC');
    let tipoA = document.getElementById('divCmb');
    tipoA.style.display = 'none';
    txtK.style.display = 'block';
    txtC.style.display = 'block'
    hiddenBoton(bttCalcular, bttMultiplicativo,bttAditivo);
});

bttAdi.addEventListener('click', function(){
    let txtK = document.getElementById('divK');
    let txtC = document.getElementById('divC');
    let tipoA = document.getElementById('divCmb');
    tipoA.style.display = 'none';
    txtK.style.display = 'none';
    txtC.style.display = 'none';
    hiddenBoton(bttAditivo,bttCalcular, bttMultiplicativo);
})

function hiddenBoton(bttA, bttN, bttNe){
    bttN.style.display = 'none';
    bttA.style.display = 'inline-block';
    bttNe.style.display = 'none';
}
