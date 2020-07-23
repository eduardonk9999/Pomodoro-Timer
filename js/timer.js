
var tempoFront = document.querySelector('.contador');
var btnI = document.querySelector('.inicia');
var btnP = document.querySelector('.pause');
var btnR = document.querySelector('.reset');
var S = 0;
var M = 0;
var H = 0;


var cronometro;

function relogio() {
    // var horaAtual = new Date();
    // var hora = horaAtual.getHours();
    // var minutos = horaAtual.getMinutes();
    // var segundos = horaAtual.getSeconds();
    // var mileSegundos = horaAtual.getMilliseconds();


    var tempoSegundo = S++;
   
    // var tempoHora = H++;

    


    tempoFront.innerHTML = `${0}:${M}:${tempoSegundo}`;



    if (tempoSegundo >= 59) {
        clearInterval(cronometro);
        M += 1;
        S = 0;
        tempoFront.innerHTML = `${0}:${M}:${tempoSegundo}`;
        rodandoTempo();
    }

    // if (tempoMinuto >= 59) {
    //     tempoFront.innerHTML = `${tempoHora}:${tempoMinuto}:${tempoSegundo}`;
    // }

    

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
    H = 0;
    rodandoTempo();
});