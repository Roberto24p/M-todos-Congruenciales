let inputsElements = document.querySelectorAll('input[type=text]');
let bandearBtt;
window.onload = cargarInputs();

function cargarInputs() {
    console.log("dsds");
    for (let e = 0; e < inputsElements.length; e++) {

        inputsElements[e].addEventListener('input', function () {
            validarInput(inputsElements[e]);
        });

        inputsElements[e].addEventListener('change', function () {
            validarBtt(inputsElements);
        });
        inputsElements[e].addEventListener('input', function () {
            validarBtt(inputsElements);
        });
    }
}

function validarBtt(e) {
    let bandera = true;
    let bttValidar = document.getElementById('bttMultiplicativo');
    let parentNode;
    for (let i = 0; i < e.length; i++) {
        parentNode = e[i];
        if (parentNode.style.display != 'none') {
            if (e[i].value == "") {
                console.log("saludos");
                bttValidar.disabled = true;
                bttAditivo.disabled = true;
                bttCalcular.disabled = true;
                bandera = false;
            }
        }
    }
    if (bandera == true) {
        bttValidar.disabled = false;
        bttAditivo.disabled = false;
        bttCalcular.disabled = false;

    }
}


function validarInput(e) {
    let dato = e.value;

    console.log(!isNaN(dato) + " " + dato);
    if (isNaN(dato)) {
        alert('no es numero');
        e.value = "";
    }

}

function validarSoloImpares(){
    let inputX = document.getElementById('txtX');
    let dato = parseInt(inputX.value);

    if( dato%2 == 0){
        alert('Solo números impares en la semilla');
        inputX.value = "";
    }
}