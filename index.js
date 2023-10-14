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
    const now = new Date();
    const hours =( now.getHours() < 10) ? '0' + date.getHours() : date.getHours()
    const minutes =( now.getMinutes()  < 10) ? '0' + date.getMinutes() : date.getMinutes()
    const seconds = (now.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds()
    clock.textContent = hours + ':' + minutes + ':' + seconds;
}