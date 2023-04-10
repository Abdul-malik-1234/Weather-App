function clearSearchBox() {
    var getValue = document.getElementById("title");
    if (getValue.value != "") {
        getValue.value = "";
    }
}
const button = document.getElementById("b1");
button.addEventListener("click", myfunction = () => {
    let city = document.getElementById('title').value;
    let key = "52b8b382b767b999eabb897d5514eb96";
    let h1 = document.getElementById('temp');
    let url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + key;
    let promise = fetch(url);
    promise.then((val) => {
        clearSearchBox();
        return val.json();
    }).then((val1) => {
        let wimg = document.getElementById('weather-image');
        console.log(val1.weather[0].main);
        if (val1.weather[0].main == 'Rain') {
            wimg.src = "images/rain.png";
        }
        else if (val1.weather[0].main == 'Clouds') {
            wimg.src = "images/clouds.png";
        }
        else if (val1.weather[0].main == 'Clear') {
            wimg.src = "images/clear.png";
        }
        else if (val1.weather[0].main == 'Drizzle') {
            wimg.src = "images/drizzle.png";
        }
        else if (val1.weather[0].main == 'Mist') {
            wimg.src = "images/mist.png";
        }
        else if (val1.weather[0].main == 'Snow') {
            wimg.src = "images/snow.png";
        }
        let c = document.getElementById('city');
        c.innerText = val1.name;
        let tempe = (Math.round(val1.main.temp) / 10);
        h1.innerText = tempe + "°c";
        let wind = document.getElementById('wind');
        wind.innerText = val1.wind.speed + "km/h";
        let humidity = document.getElementById('humidity');
        humidity.innerText = Math.round(val1.main.humidity) + "%";
        document.querySelector(".error").style.display = "none";
        document.querySelector(".visibility").style.display = "block";
        
    })
        .catch((err) => {
            document.querySelector(".visibility").style.display = "none";
            document.querySelector(".error").style.display = "block";
        });
});