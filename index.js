let timerId; // переменная, которая будет хранить ID таймера


const startButton = document.getElementById('start');
startButton.addEventListener('click', function () {
    // НУЖНО ПОГУГЛИТЬ ЧТО ТАКОЕ setInterval
    timerId = setInterval(updateClock, 1000); // запускаем  updateClock() каждую секунду
});


const stopButton = document.getElementById('stop');
stopButton.addEventListener('click', function () {
    // НУЖНО ПОГУГЛИТЬ ЧТО ТАКОЕ clearInterval
    clearInterval(timerId); // останавливаем таймер
});


function updateClock() {
    const clock = document.getElementById('clock');
    // НУЖНО ПОГУГЛИТЬ ЧТО ТАКОЕ new Date()
    const now = new Date();
    const hours =now.getHours()
    const minutes = now.getMinutes() 
    const seconds = now.getSeconds() 
    hours = hours % 100 < 10 ? '0' + hours : hours;  
   minutes = minutes % 100 < 10 ? '0' + minutes : minutes;  
   seconds = seconds % 100 < 10 ? '0' + seconds : seconds;  
    clock.textContent = hours + ':' + minutes + ':' + seconds;
   
    
}
