/* ==========================================
        OpenWeather API Key
========================================== */

const apiKey =
"d1cd42300920f6b668a1d5844c48255d";


/* ==========================================
        DOM Elements
========================================== */

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

let feelsLike =
document.getElementById("feelsLike");

let clouds =
document.getElementById("clouds");

let sunrise =
document.getElementById("sunrise");

let sunset =
document.getElementById("sunset");

let errorMessage =
document.getElementById("errorMessage");


/* ==========================================
        Search Button
========================================== */

searchBtn.addEventListener(

    "click",

    getWeather

);


/* ==========================================
        Press Enter
========================================== */

cityInput.addEventListener(

    "keypress",

    function(event){

        if(event.key==="Enter"){

            getWeather();

        }

    }

);


/* ==========================================
        Get Weather
========================================== */

async function getWeather(){

    let city =

    cityInput.value.trim();

    if(city===""){

        errorMessage.innerText=

        "Please Enter City Name";

        weatherCard.style.display="none";

        return;

    }

    errorMessage.innerText="";

    try{

        const url=

`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        const response=

        await fetch(url);

        if(!response.ok){

            throw new Error("City Not Found");

        }

        const data=

        await response.json();

        updateWeatherUI(data);
    }

    catch(error){

        weatherCard.style.display="none";

        errorMessage.innerText=

        error.message;

    }

}


/* ==========================================
        Display Weather
========================================== */

function displayWeather(data){

    weatherCard.style.display="grid";


    cityName.innerText=

    data.name;


    country.innerText=

    data.sys.country;


    temperature.innerText=

    Math.round(data.main.temp)

    +"°C";


    condition.innerText=

    data.weather[0].description;


    humidity.innerText=

    data.main.humidity

    +" %";


    wind.innerText=

    data.wind.speed

    +" km/h";


    pressure.innerText=

    data.main.pressure

    +" hPa";


    visibility.innerText=

    (data.visibility/1000)

    +" km";


    feelsLike.innerText=

    Math.round(data.main.feels_like)

    +"°C";


    clouds.innerText=

    data.clouds.all

    +" %";


    weatherIcon.src=

`https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;


    sunrise.innerText=

    convertTime(

        data.sys.sunrise

    );


    sunset.innerText=

    convertTime(

        data.sys.sunset

    );

}


/* ==========================================
        Convert Time
========================================== */

function convertTime(time){

    let date=

    new Date(

        time*1000

    );

    return date.toLocaleTimeString(

        "en-IN",

        {

            hour:"2-digit",

            minute:"2-digit"

        }

    );

}
/* ==========================================
        Live Date & Time
========================================== */

updateDateTime();

setInterval(

    updateDateTime,

    1000

);

function updateDateTime(){

    let now =

    new Date();

    let options = {

        weekday:"long",

        day:"numeric",

        month:"long",

        year:"numeric"

    };

    let currentDate =

    document.getElementById("currentDate");

    let currentTime =

    document.getElementById("currentTime");

    currentDate.innerText =

    now.toLocaleDateString(

        "en-IN",

        options

    );

    currentTime.innerText =

    now.toLocaleTimeString(

        "en-IN"

    );

}


/* ==========================================
        Dynamic Background
========================================== */

function changeBackground(weather){

    document.body.classList.remove(

        "sunny",

        "cloudy",

        "rainy",

        "snow",

        "night"

    );

    weather =

    weather.toLowerCase();

    if(weather.includes("clear")){

        document.body.classList.add(

            "sunny"

        );

    }

    else if(

        weather.includes("cloud")

    ){

        document.body.classList.add(

            "cloudy"

        );

    }

    else if(

        weather.includes("rain")

    ||

        weather.includes("drizzle")

    ||

        weather.includes("thunderstorm")

    ){

        document.body.classList.add(

            "rainy"

        );

    }

    else if(

        weather.includes("snow")

    ){

        document.body.classList.add(

            "snow"

        );

    }

    else{

        document.body.classList.add(

            "night"

        );

    }

}


/* ==========================================
        Update Background
========================================== */

function updateWeatherUI(data){

    displayWeather(data);

    changeBackground(

        data.weather[0].main

    );

}


/* ==========================================
        Loading Spinner
========================================== */

function showLoading(){

    weatherCard.style.display =

    "none";

    errorMessage.innerHTML =

    `<div class="loading">

        <div class="spinner"></div>

    </div>`;

}


function hideLoading(){

    errorMessage.innerHTML = "";

}


/* ==========================================
        Update getWeather()
========================================== */

/*
Inside getWeather()

Add this line before fetch()

showLoading();

Replace

displayWeather(data);

with

hideLoading();

updateWeatherUI(data);

Inside catch block

add

hideLoading();

*/


/* ==========================================
        Current Location
========================================== */

function getCurrentLocation(){

    if(

        navigator.geolocation

    ){

        navigator.geolocation.getCurrentPosition(

            function(position){

                getLocationWeather(

                    position.coords.latitude,

                    position.coords.longitude

                );

            },

            function(){

                alert(

                "Location Permission Denied"

                );

            }

        );

    }

}


/* ==========================================
        Weather Using Latitude & Longitude
========================================== */

async function getLocationWeather(

    lat,

    lon

){

    try{

        const url=

`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

        const response=

        await fetch(url);

        const data=

        await response.json();

        updateWeatherUI(data);

    }

    catch(error){

        errorMessage.innerText=

        "Unable To Get Weather";

    }

}
/* ==========================================
        Get 5-Day Forecast
========================================== */

async function getForecast(city){

    try{

        const url =

`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

        const response =

        await fetch(url);

        const data =

        await response.json();

        displayForecast(data);

        displayHourlyForecast(data);

    }

    catch(error){

        console.log(error);

    }

}

/* ==========================================
        Display Forecast
========================================== */

function displayForecast(data){

    let weeklyForecast =

    document.getElementById("weeklyForecast");

    weeklyForecast.innerHTML = "";

    let dailyData = [];

    for(let i = 0; i < data.list.length; i += 8){

        dailyData.push(data.list[i]);

    }

    dailyData.forEach(function(day){

        let date =

        new Date(day.dt * 1000);

        let dayName =

        date.toLocaleDateString(

            "en-IN",

            {

                weekday:"short"

            }

        );

        weeklyForecast.innerHTML +=

        `

        <div class="forecast-card">

            <h3>${dayName}</h3>

            <img
            src="https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png">

            <p>

            ${Math.round(day.main.temp)}°C

            </p>

            <p>

            ${day.weather[0].main}

            </p>

        </div>

        `;

    });

}
/* ==========================================
        Hourly Forecast
========================================== */

let chart;

function displayHourlyForecast(data){

    let hourlyForecast =

    document.getElementById(

        "hourlyForecast"

    );

    hourlyForecast.innerHTML="";

    let labels=[];

    let temperatures=[];

    for(let i=0;i<8;i++){

        let item=

        data.list[i];

        let time=

        item.dt_txt.split(" ")[1].

        substring(0,5);

        labels.push(time);

        temperatures.push(

            item.main.temp

        );

        hourlyForecast.innerHTML+=`

        <div class="hour-card">

            <h4>

                ${time}

            </h4>

            <img
src="https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png">

            <p>

                ${Math.round(item.main.temp)}°C

            </p>

        </div>

        `;

    }

    drawChart(

        labels,

        temperatures

    );

}
/* ==========================================
        Temperature Chart
========================================== */

function drawChart(

labels,

temperatures

){

    let ctx=

    document.getElementById(

        "tempChart"

    );

    if(chart){

        chart.destroy();

    }

    chart=

    new Chart(ctx,{

        type:"line",

        data:{

            labels:labels,

            datasets:[{

                label:"Temperature",

                data:temperatures,

                borderColor:"#FFD43B",

                backgroundColor:

                "rgba(255,212,59,.2)",

                borderWidth:3,

                tension:.4,

                fill:true

            }]

        },

        options:{

            responsive:true,

            plugins:{

                legend:{

                    display:false

                }

            },

            scales:{

                y:{

                    beginAtZero:false

                }

            }

        }

    });

}