const API_key = "f7d38de17b470a194c7af0969a5e07b4";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}&units=metric`
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}


function onGeoError() {
 alert("Cant find you. No weather for you.");   
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
