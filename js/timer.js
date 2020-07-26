
var tempoFront = document.querySelector('.contador');
var btnI = document.querySelector('.inicia');
var btnP = document.querySelector('.pause');
var btnR = document.querySelector('.reset');
var S = 15;
var M = 5;



var cronometro;


tempoFront.innerHTML = `${M}:${S}`;


function relogio() {


    
    S = S - 1;
   
    // var tempoHora = H++;

    tempoFront.innerHTML = `${M}:${S}`;

    if(M < 10) {
        tempoFront.innerHTML = `0${M}:${S}`;
    }
    if(S < 10) {
        tempoFront.innerHTML = `0${M}:0${S}`;
    }


    if (S < 1) {
        clearInterval(cronometro);
        M = M - 1;
        S = 10;
        rodandoTempo();
    }
    if(M === 0) {
        console.log('FIM');
        tempoFront.innerHTML = `${0}:${S}`;
        clearInterval(cronometro);
        
    }

}

function rodandoTempo() {
    cronometro = setInterval(function () {
        relogio();
    }, 1000);
}

btnI.addEventListener('click', function () {
    rodandoTempo();
});


btnP.addEventListener('click', function () {
    clearInterval(cronometro);
});

btnR.addEventListener('click', function () {
    clearInterval(cronometro);
    S = 0;
    M = 0;
    rodandoTempo();
});