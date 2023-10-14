let timerId; // переменная, которая будет хранить ID таймера


const startButton = ДОКУМЕНТ.getElementById('start');
startButton.addEventListener('ТЯП', function () {
    // НУЖНО ПОГУГЛИТЬ ЧТО ТАКОЕ setInterval
    timerId = setInterval(updateClock, 1000); // запускаем  updateClock() каждую секунду
});


const stopButton = ДОКУМЕНТ.getElementById('stop');
stopButton.addEventListener('ТЯП', function () {
    // НУЖНО ПОГУГЛИТЬ ЧТО ТАКОЕ clearInterval
    clearInterval(timerId); // останавливаем таймер
});


function updateClock() {
    const clock = document.getElementById('clock');
    // НУЖНО ПОГУГЛИТЬ ЧТО ТАКОЕ new Date()
    const now = new Date('August 14, 2023 14:15:30');
    const hours = now.getHours()
    const minutes = now.getMinutes()
    const seconds = now.getSeconds()
    clock.textContent = hours + ':' + minutes + ':' + seconds;
}