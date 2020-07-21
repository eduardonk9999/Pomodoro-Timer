
var rodaTime;
function TempoAtual() {
    var horaAtual = new Date();
    var hora = horaAtual.getHours();
    var minutos = horaAtual.getMinutes();
    var segundos = horaAtual.getSeconds();
    var mileSegundos = horaAtual.getMilliseconds();

    console.log(minutos);

    if(mileSegundos > 996){
        clearInterval(rodaTime);
        SrTempo();

    }
}





function SrTempo() {
    rodaTime = setInterval(function () {
        TempoAtual();
    
    }, 001);
}
SrTempo();