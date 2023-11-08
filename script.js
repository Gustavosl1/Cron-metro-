let tempo = 0;
let isRunning = false;
let intervalId;

const tempoElement = document.getElementById('tempo');
const iniciarButton = document.getElementById('iniciar');
const pararButton = document.getElementById('parar');
const zerarButton = document.getElementById('zerar');

function atualizarTempo() {
    const horas = Math.floor(tempo / 3600);
        const minutos = Math.floor((tempo % 3600) / 60);
            const segundos = tempo % 60;

                tempoElement.innerText = `${String(horas).padStart(2, '0')}:${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`;
                }

                iniciarButton.addEventListener('click', function () {
                    if (!isRunning) {
                            intervalId = setInterval(function () {
                                        tempo++;
                                                    atualizarTempo();
                                                            }, 1000);
                                                                    isRunning = true;
                                                                        }
                                                                        });

                                                                        pararButton.addEventListener('click', function () {
                                                                            if (isRunning) {
                                                                                    clearInterval(intervalId);
                                                                                            isRunning = false;
                                                                                                }
                                                                                                });

                                                                                                zerarButton.addEventListener('click', function () {
                                                                                                    tempo = 0;
                                                                                                        atualizarTempo();
                                                                                                            if (isRunning) {
                                                                                                                    clearInterval(intervalId);
                                                                                                                            isRunning = false;
                                                                                                                                }
                                                                                                                                });