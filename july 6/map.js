/* ==========================================
        Global Variables
========================================== */

let map;

let marker;

let geocoder;


/* ==========================================
        Initialize Google Map
========================================== */

function initMap() {

    // Default Location (Hyderabad)

    const defaultLocation = {

        lat: 17.3850,

        lng: 78.4867

    };

    // Create Map

    map = new google.maps.Map(

        document.getElementById("map"),

        {

            center: defaultLocation,

            zoom: 10,

        }

    );

    // Create Marker

    marker = new google.maps.Marker({

        position: defaultLocation,

        map: map,

    });

    // Geocoder

    geocoder = new google.maps.Geocoder();

}


/* ==========================================
        DOM Elements
========================================== */

let locationInput =

document.getElementById("locationInput");

let searchBtn =

document.getElementById("searchBtn");


/* ==========================================
        Event Listener
========================================== */

searchBtn.addEventListener(

    "click",

    searchLocation

);


/* ==========================================
        Enter Key Search
========================================== */

locationInput.addEventListener(

    "keypress",

    function(event){

        if(event.key==="Enter"){

            searchLocation();

        }

    }

);


/* ==========================================
        Search Function
========================================== */

function searchLocation(){

    let address =

    locationInput.value.trim();

    if(address===""){

        alert(

            "Please Enter Location"

        );

        return;

    }

    geocoder.geocode(

        {

            address: address

        },

        function(results,status){

            if(

                status==="OK"

            ){

                let location =

                results[0].geometry.location;

                map.setCenter(

                    location

                );

                map.setZoom(

                    15

                );

                marker.setPosition(

                    location

                );

            }

            else{

                alert(

                    "Location Not Found"

                );

            }

        }

    );

}