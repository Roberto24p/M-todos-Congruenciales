let inputsElements = document.querySelectorAll('input[type=text]');
window.onload = cargarInputs();

function cargarInputs() {
    console.log("dsds");
    for (let e = 0; e < inputsElements.length; e++) {

        inputsElements[e].addEventListener('input', function () {
            validarInput(inputsElements[e]);
        });
    }
}


function validarInput(e) {
    let dato = e.value;
    console.log(!isNaN(dato) + " " + dato);
    if (isNaN(dato)) {
        alert('no es numero');
    } 
}