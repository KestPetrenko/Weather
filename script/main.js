let city = document.querySelector("#city");
let coun = document.querySelector("#coun");
let temp = document.querySelector("#temp");
let like = document.querySelector("#like");
let speed = document.querySelector("#speed");
let pressure = document.querySelector("#pressure");
let humidity = document.querySelector("#humidity");
let visibility = document.querySelector("#visibility");
let meteorSituation;
let backgroundVideo = document.querySelector(".videoWeather");
let backgoundImg = document.querySelector(".imgWeather");
let myVideo = document.querySelector("#myVideo");
let cityId = "Kyiv";
let search = document.querySelector(".searchCity")
search.addEventListener("keypress", nameCity);

function nameCity(evt) {
    if (evt.keyCode == 13) {
        cityId = search.value;
        cityName(cityId);
        console.log(cityId);
        search.value = "";
    }
}

function cityName(e) {
    let url = "https://api.openweathermap.org/data/2.5/weather?q=" + `${cityId}` + "&appid=bf35cac91880cb98375230fb443a116f"
    console.log(url)
    fetch(url)
        .then(response => response.json())
        .then(json => {
            console.log(json)
            city.innerHTML = json.name + ", ";
            coun.innerHTML = json.sys.country;
            temp.innerHTML = ((json.main.temp - 273.15).toFixed(1)) + `℃`;
            like.innerHTML = "Feels like: " + ((json.main.feels_like - 273.15).toFixed(1)) + `℃`;
            speed.innerHTML = "speed: " + json.wind.speed + " m/s";
            pressure.innerHTML = "pressure: " + json.main.pressure + " hPa";
            humidity.innerHTML = "humidity: " + json.main.humidity + " %";
            visibility.innerHTML = "visibility: " + json.visibility / 1000 + " km";
            meteorSituation = json.weather[0].main;

            console.log(meteorSituation);

            if (meteorSituation === "Clear") {
                myVideo.load();
                backgroundVideo.src = `video/clear.mp4`;
                backgoundImg.src = `img/Clear.png`;
            }


            if (meteorSituation === "Clouds") {
                myVideo.load();
                backgroundVideo.src = `video/clouds.mp4`;
                backgoundImg.src = `img/Clouds.png`;
            }
            if (meteorSituation == `Snow`) {
                myVideo.load();
                backgroundVideo.src = `video/snow.mp4`;
                backgoundImg.src = `img/Snow.png`;
            }
            if (meteorSituation == `Thunderstorm`) {
                myVideo.load();
                backgroundVideo.src = `video/tunderstorm.mp4`;
                backgoundImg.src = `img/Thunderstorm.png`;
            }
            if (meteorSituation == `Drizzle`) {
                myVideo.load();
                backgroundVideo.src = `video/drizzle.mp4`;
                backgoundImg.src = `img/Drizzle.png`;
            }
            if (meteorSituation == `Rain`) {
                myVideo.load();
                backgroundVideo.src = `video/rain.mp4`;
                backgoundImg.src = `img/rain.png`;
            }

        });
};
cityName();

