// ==============================
// OpenWeather API Key
// ==============================

const apiKey = "d1cd42300920f6b668a1d5844c48255d";

// ==============================
// DOM Elements
// ==============================

let cityInput =
document.getElementById("cityInput");

let searchBtn =
document.getElementById("searchBtn");

let weatherCard =
document.getElementById("weatherCard");

let weatherIcon =
document.getElementById("weatherIcon");

let cityName =
document.getElementById("cityName");

let country =
document.getElementById("country");

let temperature =
document.getElementById("temperature");

let condition =
document.getElementById("condition");

let humidity =
document.getElementById("humidity");

let wind =
document.getElementById("wind");

let pressure =
document.getElementById("pressure");

let visibility =
document.getElementById("visibility");

let sunrise =
document.getElementById("sunrise");

let sunset =
document.getElementById("sunset");

let errorMessage =
document.getElementById("errorMessage");

// ==============================
// Search Button
// ==============================

searchBtn.addEventListener(

    "click",

    getWeather

);

// ==============================
// Press Enter
// ==============================

cityInput.addEventListener(

    "keypress",

    function(event){

        if(event.key==="Enter"){

            getWeather();

        }

    }

);

// ==============================
// Get Weather
// ==============================

async function getWeather(){

    let city = cityInput.value.trim();

    if(city===""){

        errorMessage.innerText =
        "Please enter a city name.";

        weatherCard.style.display="none";

        return;

    }

    errorMessage.innerText="";

    try{

        const url =

`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        const response =

        await fetch(url);

        if(!response.ok){

            throw new Error("City not found");

        }

        const data =

        await response.json();

        displayWeather(data);

    }

    catch(error){

        weatherCard.style.display="none";

        errorMessage.innerText=

        "City not found.";

    }

}

// ==============================
// Display Weather
// ==============================

function displayWeather(data){

    weatherCard.style.display="block";

    cityName.innerText =

    data.name;

    country.innerText =

    data.sys.country;

    temperature.innerText =

    Math.round(data.main.temp)

    + "°C";

    condition.innerText =

    data.weather[0].main;

    humidity.innerText =

    data.main.humidity + "%";

    wind.innerText =

    data.wind.speed + " km/h";

    pressure.innerText =

    data.main.pressure + " hPa";

    visibility.innerText =

    (data.visibility/1000)

    + " km";

    weatherIcon.src =

`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    sunrise.innerText =

    convertTime(data.sys.sunrise);

    sunset.innerText =

    convertTime(data.sys.sunset);

}

// ==============================
// Convert Time
// ==============================

function convertTime(time){

    let date =

    new Date(time*1000);

    return date.toLocaleTimeString(

        "en-IN",

        {

            hour:"2-digit",

            minute:"2-digit"

        }

    );

}