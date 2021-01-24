let arrayAditivo = [];
let bttAditivo = document.getElementById('bttAditivo');

bttAditivo.addEventListener('click', function(){
    let m = parseInt(txtG.value);
    calcularAditivo(m)
})
function calcularAditivo(m){
    let n = arrayAditivo.length - 1 ;
    let i = n + 1;
    let x, r;
    let cantNumeros = parseInt(txtN.value);
 
    for(;i <= n + cantNumeros  ;i++){
        x = (arrayAditivo[(i-n) - 1] + arrayAditivo[i-1]) % m ;
        
        arrayAditivo.push(x);
        r = calcularR(x,m);
        console.log(x + " " + r);
        presentar(x,i+1,r);
    }
}