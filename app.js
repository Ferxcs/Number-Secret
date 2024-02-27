let listaNumerosSorteados = [];
let numeroMaximo = 10;

//Generando un número aleatorio, pero no lo estamos guardando en ninguna variable.
function generarNumeroSecreto() {
    let numeroGeneradoro = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGeneradoro);
    console.log(listaNumerosSorteados);
    //Si ya se sortearon todos los números posibles
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    } else {
            //Si el numero generado está está incluido en la lista
        if (listaNumerosSorteados.includes(numeroGeneradoro)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGeneradoro);
            return numeroGeneradoro;
        }   
    } 
}

function asignarTextoElemento(elemento,texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function limpiarcaja() {
    //Seleccionamos el id con el "#";
    document.querySelector('#valorUsuario').value = '';
}

function verificarIntento() {
    //Devolviendo el número al input con el id='valorUsuario'.
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`¡Acertaste el número! en ${intentos} ${(intentos == 1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        }
        else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos ++;
        limpiarcaja();
    }
    
    return;
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Ingresa un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    limpiarcaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();