const clockTitle = document.querySelector(".js-clock");

function getClock() {
    const date = new Date()
    const dateString = date.getFullYear() + '년 ' + 
        (date.getMonth() + 1) + '월 ' + 
        date.getDate() + '일 ' + 
        date.getHours() + '시 ' + 
        date.getMinutes() + '분';
    clockTitle.innerText = dateString;

}

getClock();
setInterval(getClock, 1000);