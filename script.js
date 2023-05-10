const pContador = document.querySelector ("#contador")

let contador = 0;

function aumentaContador(){
        contador = contador +1;
        pContador.innerHTML = contador;
}


function reiniciarContador(){
    contador = 0;
    pContador.innerHTML = contador; 
}


function restarClickContador(){
    contador = contador - 1;
    pContador.innerHTML = contador;

}