AOS.init();

const dataDoEvento = new Date("Jul 28, 2026 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();
const contador = document.getElementById('contador');

const contaAsHoras = setInterval(function () {
    const agora = new Date();
    const timeStampAtual = agora.getTime();
    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

    if (distanciaAteOEvento < 0) {
        clearInterval(contaAsHoras);
        contador.innerHTML = '🎉 Feliz Aniversário!';
        return;
    }

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;

    const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMs);
    const horasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMs) / horaEmMs);
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % horaEmMs) / minutoEmMs);
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutoEmMs) / 1000);

    contador.innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;

}, 1000);