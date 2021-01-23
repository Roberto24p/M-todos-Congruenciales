let arrayAditivo = [20,13, 56, 98, 9];
let bttAditivo = document.getElementById('bttAditivo');
function calcularAditivo(m,cantidadAleatoria){
    let n = arrayAditivo.length - 1 ;
    let i = n + 1;
    let x, r;
 
    for(;i <= n + cantidadAleatoria  ;i++){
        x = (arrayAditivo[(i-n) - 1] + arrayAditivo[i-1]) % m ;
        
        arrayAditivo.push(x);
        r = calcularR(x,m);
        console.log(x + " " + r);
        presentar(x,i+1,r);
    }
}