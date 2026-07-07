const API_KEY = "38c7d4a297f643abba34f2dc0a7f7929";

let map;
let marker;

navigator.geolocation.getCurrentPosition(
    position => {

        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        map = L.map("map").setView([lat, lon], 15);

        L.tileLayer(
            `https://maps.geoapify.com/v1/tile/osm-carto/{z}/{x}/{y}.png?apiKey=${API_KEY}`,
            {
                attribution: "&copy; Geoapify"
            }
        )
        .addTo(map);

        placeMarker(lat, lon);

        map.on("click", function (e) {

            placeMarker(e.latlng.lat, e.latlng.lng);

        });

    },
    () => {
        alert("Please allow location permission.");
    }
);


function placeMarker(lat, lon) {

    if (marker) {

        map.removeLayer(marker);

    }

    marker = L.marker([lat, lon]).addTo(map);

    map.setView([lat, lon], 15);

    getAddress(lat, lon);

}

async function getAddress(lat, lon) {

    showLoader(true);

    document.getElementById("lat").innerText = lat.toFixed(6);
    document.getElementById("lng").innerText = lon.toFixed(6);

    try {

        const response = await fetch(

            `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lon}&apiKey=${API_KEY}`

        );

        const data = await response.json();

        if (data.features.length > 0) {

            const address = data.features[0].properties.formatted;

            document.getElementById("address").value = address;

            marker.bindPopup(address).openPopup();

        } else {

            document.getElementById("address").value = "Address not found";

        }

    } catch (e) {

        document.getElementById("address").value = "Unable to fetch address";

    }

    showLoader(false);

}


document.getElementById("myLocation").onclick = function () {

    navigator.geolocation.getCurrentPosition(position => {

        placeMarker(

            position.coords.latitude,

            position.coords.longitude

        );

    });

};


document.getElementById("clearBtn").onclick = function () {

    if (marker) {

        map.removeLayer(marker);

        marker = null;

    }

    document.getElementById("lat").innerText = "-";
    document.getElementById("lng").innerText = "-";
    document.getElementById("address").value = "";

};

document.getElementById("copyBtn").onclick = function () {

    const lat = document.getElementById("lat").innerText;
    const lng = document.getElementById("lng").innerText;

    navigator.clipboard.writeText(

        `Latitude : ${lat}\nLongitude : ${lng}`

    );

    alert("Coordinates Copied!");

};

document.getElementById("themeBtn").onclick = function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        this.innerHTML =
            '<i class="fa-solid fa-sun"></i> Light Mode';

    } else {

        this.innerHTML =
            '<i class="fa-solid fa-moon"></i> Dark Mode';

    }

};


function updateClock() {

    document.getElementById("time").innerHTML =
        new Date().toLocaleTimeString();

}

setInterval(updateClock, 1000);

updateClock();

function showLoader(show) {

    const loader = document.getElementById("loader");

    if (show) {

        loader.classList.add("show");

    } else {

        loader.classList.remove("show");

    }

}
// =========================
// -----SEARCH LOCATION-----
// =========================

document.getElementById("searchBtn").addEventListener("click", searchPlace);

document.getElementById("searchInput").addEventListener("keypress", function(e){

    if(e.key==="Enter"){

        searchPlace();

    }

});

async function searchPlace(){

    const place=document.getElementById("searchInput").value.trim();

    if(place===""){

        alert("Please enter a location.");

        return;

    }

    showLoader(true);

    try{

        const response=await fetch(

`https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(place)}&apiKey=${API_KEY}`

        );

        const data=await response.json();

        if(data.features.length===0){

            alert("Location not found.");

            showLoader(false);

            return;

        }

        const feature=data.features[0];

        const lat=feature.properties.lat;

        const lon=feature.properties.lon;

        const address=feature.properties.formatted;

        if(marker){

            map.removeLayer(marker);

        }

        marker=L.marker([lat,lon]).addTo(map);

        marker.bindPopup(address).openPopup();

        map.setView([lat,lon],15);

        document.getElementById("lat").innerText=lat.toFixed(6);

        document.getElementById("lng").innerText=lon.toFixed(6);

        document.getElementById("address").value=address;

    }

    catch(error){

        console.error(error);

        alert("Unable to search location.");

    }

    showLoader(false);

}