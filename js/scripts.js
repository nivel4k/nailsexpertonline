const $days = document.getElementById('days'),
    $hours = document.getElementById('hours'),
    $minutes = document.getElementById('minutes'),
    $seconds = document.getElementById('seconds'),
    $hours2 = document.getElementById('hours2'),
    $minutes2 = document.getElementById('minutes2'),
    $seconds2 = document.getElementById('seconds2'),
    $barPro = document.getElementById('barProg');
// $finalMessage = document.querySelector('.final-sms')
const promotion = new Date().getTime() + (1000 * 60 * 60 * 9.5);
let interval = setInterval(function() {
    //Obtener fecha actual y milisegundos
    const now = new Date().getTime();
    //Obtener las distancias entre ambas fechas
    let distance = +promotion - now;

    //Calculos a dias-horas-minutos-segundos
    // let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / (1000));
    let hours2 = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes2 = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds2 = Math.floor((distance % (1000 * 60)) / (1000));

    //Escribimos resultados
    // $days.innerHTML = days;
    $hours.innerHTML = hours;
    $minutes.innerHTML = minutes;
    $seconds.innerHTML = ('0' + seconds).slice(-2);
    $hours2.innerHTML = hours2;
    $minutes2.innerHTML = minutes2;
    $seconds2.innerHTML = ('0' + seconds2).slice(-2);

    // //Cuando llegue a 0
    // if (distance < 0) {
    //     clearInterval(interval);
    //     $finalMessage.style.transform = 'translateY(0)';
    // }
}, 1000);