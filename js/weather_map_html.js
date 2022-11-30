console.log("linked")
// I WILL CHANGE THE CODE TO JQUERY //

// From my understanding, the block of code will prevent the webpage from refreshing and saving the user input value into a variable. //
// const form = document.querySelector(".top-banner form");
// form.addEventListener("submit", e => {
//         e.preventDefault();
//         const inputVal = e.value;
//     });

// This is making a making a request. //
   // const apiKey = "d724dfe49ef2e9d3796f1098d6ad35e4";
    //const inputVal = input.value;

   // const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;

/* After declaring a variable, an ajax request is sent with the open weather API key. Once the request is done, a function will console log the data. */
// var city = "dallas";
// var html = "";
// $.get("http://api.openweathermap.org/data/2.5/forecast", {
//     APPID: OPEN_WEATHER_APPID,
//     q: "" + city,
//     units: "imperial"
// }).done(function(data){
//     console.log("fetch fired")
//     console.log(data);
//     console.log(data.list[0].main.temp);
//     console.log(data.list[0].main.temp_min);
//
//
//     // This for loop is creating HTML cards with data.
//     for(var i = 0; i <= 39; i+=8){
//         html+= "<div class=\"card\" style=\"width: 18rem;\">";
//
//         html+= "<img src=\"...\" class=\"card-img-top\" alt=\"...\">";
//
//         html+= "<h5 class=\"card-title\">Forecast - index"  + i + "</h5>";
//
//         html+= "<p class=\"card-text\">Current Temp: " + data.list[i].main.temp +"</p>";
//
//         html+= "<p class=\"card-text\">Max Temp :" + data.list[i].main.temp_max +"</p>";
//
//         html+= "<a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>";
//
//         html+= "</div>";
//         html+= "</div>"
//     }
//
//     $(".display_weather").html(html);



// MAPBOX MAP //
mapboxgl.accessToken = MAPBOX_TOKEN;
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: [-74.5, 40], // starting position [lng, lat]
    zoom: 9 // starting zoom
});




// SearchVal was created to store an add event listener on the ID button. After clicking the button, renderNewCity function was called. //
    let searchVal = document.querySelector('#button');
    searchVal.addEventListener('click', renderNewCity);

// The renderNewCity function stores the value from the element ID search-bar into a variable named city and inputs that variable into an AJAX request. //
        function renderNewCity(event) {
            let city = document.getElementById('search-bar').value;

            // Prevent default, was used to keep the window from refreshing.
            event.preventDefault();

            // AJAX GET request
            $.get("http://api.openweathermap.org/data/2.5/forecast", {
                APPID: OPEN_WEATHER_APPID,
                q: city ,
                units: "imperial"
            }).done(function(data){
                console.log("fetch fired")
                console.log(data);
                console.log(data.list[0].main.temp);
                console.log(data.list[0].main.temp_min);

                let html = '';


                // This for loop is creating HTML cards with data.
                for(var i = 0; i <= 39; i+=8){
                    html+= "<div class=\"card\" style=\"width: 18rem;\">";

                    html+= "<img src=\"...\" class=\"card-img-top\" alt=\"...\">";

                    html+= "<h5 class=\"card-title\">Forecast - index"  + i + "</h5>";

                    html+= "<p class=\"card-text\">Current Temp: " + data.list[i].main.temp +"</p>";

                    html+= "<p class=\"card-text\">Max Temp :" + data.list[i].main.temp_max +"</p>";

                    html+= "<a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>";

                    html+= "</div>";
                    html+= "</div>"
                }

                $(".display_weather").html(html);

        });
        }

