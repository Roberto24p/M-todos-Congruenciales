let bttMultiplicativo = document.getElementById('bttMultiplicativo');

bttMultiplicativo.addEventListener('click', function(){
    let k = parseFloat(txtK.value);
    let g = parseFloat(txtG.value);
    let n = parseInt(txtN.value);
    let semilla;
    let tipoA = document.getElementById('aCmb');
    let a = calcularAMulti(parseInt(tipoA.value), k);
    console.log(a);
    let m = calcularM(g);
    semilla = document.getElementById('txtX').value;
    xArray.push(semilla);
    let randomNumber;
    let x;
    for(let i = 0; i<n; i++){
        x = calcularMultiplicativo(xArray[i],a,m);
       
        xArray.push(x);
        
        randomNumber = calcularR(xArray[i], m);
        presentar(xArray[i], i, randomNumber);
    }
});

function calcularAMulti(tipo, k){
    let a;
    if(tipo == 1  )
        a = 3 + 8 * k;
    else
        a = 5 + 8 * k;
    
    return a;
}

function calcularMultiplicativo(x,a,m){
    
        return (x * a) % m; 
}

