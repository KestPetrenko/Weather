let city = document.querySelector("#city");
let coun = document.querySelector("#coun");
let like = document.querySelector("#like");
let speed = document.querySelector("#speed");
let pressure = document.querySelector("#pressure");
let humidity = document.querySelector("#humidity");
let visibility = document.querySelector("#visibility");
let meteorSituation;
let meteorSituation1;
let meteorSituation2;
let meteorSituation3;

let backgroundVideo = document.querySelector(".videoWeather");
let backgoundImg = document.querySelector(".imgWeather");

let backgoundImg1 = document.querySelector(".imgWeather1");
let backgoundImg2 = document.querySelector(".imgWeather2");
let backgoundImg3 = document.querySelector(".imgWeather3");

let temp = document.querySelector("#temp");
let temp1 = document.querySelector("#temp1");
let temp2 = document.querySelector("#temp2");
let temp3 = document.querySelector("#temp3");

let myVideo = document.querySelector("#myVideo");
let cityId = "Kyiv";
let search = document.querySelector(".searchCity");
search.addEventListener("keypress", nameCity);
let lon;
let lat;


function nameCity(evt) {
    if (evt.keyCode == 13) {
        cityId = search.value;
        cityName(cityId);
        console.log(cityId);
    }
}
function cityName(e) {
    let url = "https://api.openweathermap.org/data/2.5/weather?q=" + `${cityId}` + "&appid=bf35cac91880cb98375230fb443a116f"
    fetch(url)
        .then(response => response.json())
        .then(json => {
            lon = json.coord.lon;
            lat = json.coord.lat;
            console.log(json);
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

            let url2 = "https://api.openweathermap.org/data/2.5/onecall?lat=" + `${lat}` + "&lon=" + `${lon}` + "&exclude=current,minutely,hourly&appid=343d33d71141f1623d91c8c8aab91982&units=metric"
            console.log(url2)
            fetch(url2)
                .then(response => response.json())
                .then(json => {
                    console.log(json)
                    temp1.innerHTML = (json.daily[1].temp.day) + `℃`;
                    temp2.innerHTML = (json.daily[2].temp.day) + `℃`;
                    temp3.innerHTML = (json.daily[3].temp.day) + `℃`;
                    meteorSituation1 = json.daily[1].weather[0].main;
                    meteorSituation2 = json.daily[2].weather[0].main;
                    meteorSituation3 = json.daily[3].weather[0].main;
                    console.log(meteorSituation1);
                    if (meteorSituation1 === "Clear") {
                        backgoundImg1.src = `img/Clear.png`;
                    }
                    if (meteorSituation1 === "Clouds") {
                        backgoundImg1.src = `img/Clouds.png`;
                    }
                    if (meteorSituation1 == `Snow`){
                        backgoundImg.src = `img/Snow.png`;
                    }
                    if (meteorSituation1 == `Thunderstorm`) {
                        backgoundImg1.src = `img/Thunderstorm.png`;
                    }
                    if (meteorSituation1 == `Drizzle`) {
                        backgoundImg1.src = `img/Drizzle.png`;
                    }
                    if (meteorSituation1 == `Rain`) {
                        backgoundImg1.src = `img/rain.png`;
                    }

                    if (meteorSituation2 === "Clear") {
                        backgoundImg2.src = `img/Clear.png`;
                    }
                    if (meteorSituation2 === "Clouds") {
                        backgoundImg2.src = `img/Clouds.png`;
                    }
                    if (meteorSituation2 == `Snow`){
                        backgoundImg2.src = `img/Snow.png`;
                    }
                    if (meteorSituation2 == `Thunderstorm`) {
                        backgoundImg2.src = `img/Thunderstorm.png`;
                    }
                    if (meteorSituation2 == `Drizzle`) {
                        backgoundImg2.src = `img/Drizzle.png`;
                    }
                    if (meteorSituation2 == `Rain`) {
                        backgoundImg2.src = `img/rain.png`;
                    }

                    if (meteorSituation3 === "Clear") {
                        backgoundImg3.src = `img/Clear.png`;
                    }
                    if (meteorSituation3 === "Clouds") {
                        backgoundImg3.src = `img/Clouds.png`;
                    }
                    if (meteorSituation3 == `Snow`){
                        backgoundImg3.src = `img/Snow.png`;
                    }
                    if (meteorSituation3 == `Thunderstorm`) {
                        backgoundImg3.src = `img/Thunderstorm.png`;
                    }
                    if (meteorSituation3 == `Drizzle`) {
                        backgoundImg3.src = `img/Drizzle.png`;
                    }
                    if (meteorSituation3 == `Rain`) {
                        backgoundImg3.src = `img/rain.png`;
                    }

                   

                });
        });
}

cityName();
