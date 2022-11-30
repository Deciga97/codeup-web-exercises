console.log("linked")


// MAPBOX MAP //
mapboxgl.accessToken = MAPBOX_TOKEN;
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: [-74.5, 40], // starting position [lng, lat]
    zoom: 9 // starting zoom
});

// JQUERY code selects the button element and adds an click event listener to it with a function inside the braces to find the coordinates using geocode.  //
$("#button").click(function findCoordinates() {

    // geocode will then grab the value from the search id using jquery and will use that data collected as an argument for the getLangLong function. //
        geocode($("#search-bar").val(), MAPBOX_TOKEN, map).then(
            function getLatLong(coordinates) {
                //resetting the Map with the following code: //
                //map.setCenter will center the maps location. //
                map.setCenter(coordinates)

                // map.setZoom will zoom in on the location specified. //
                map.setZoom(14)

                // Marker is created and has the long and lat set with the coordinates parameters. //
                let marker = new mapboxgl.Marker({draggable: true})
                    marker.setDraggable(coordinates)
                    .setLngLat([coordinates[0], coordinates[1]])
                    .addTo(map)

                // NOT TOO SURE BUT... marker.on is used to get the coordinates from 'dragend'. the coordinates from drag end will then get put
                marker.on('dragend' , () => {
                    const lngLat = marker.getLngLat();
                    let coordinates = lngLat.toArray()
                    // console.log('Drag function:' , 'lat:' + lngLat.lat, '/typeof: ' + typeof lngLat.lat, '/lng:' + lngLat.lng '/typeof ' + typeof lngLat.lng)

                    //Relay coordinates to weatherData
                    weatherData(coordinates)
                });



                // Calling weatherData function
                weatherData(coordinates)
            });

        //

    });


// GEO CODE //
function geocode(search, token) {
    var baseUrl = 'https://api.mapbox.com';
    var endPoint = '/geocoding/v5/mapbox.places/';
    return fetch(baseUrl + endPoint + encodeURIComponent(search) + '.json' + "?" + 'access_token=' + token)
        .then(function(res) {
            return res.json();
            // to get all the data from the request, comment out the following three lines...
        }).then(function(data) {
            return data.features[0].center;
        });
}
// REVERSE GEO CODE //
function reverseGeocode(coordinates, token) {
    var baseUrl = 'https://api.mapbox.com';
    var endPoint = '/geocoding/v5/mapbox.places/';
    return fetch(baseUrl + endPoint + coordinates.lng + "," + coordinates.lat + '.json' + "?" + 'access_token=' + token)
        .then(function(res) {
            return res.json();
        })
        // to get all the data from the request, comment out the following three lines...
        .then(function(data) {
            return data.features[0].place_name;
        });
}

function weatherData(coordinates) {
    $.get("http://api.openweathermap.org/data/2.5/forecast", {
        APPID: OPEN_WEATHER_APPID,
        lat: coordinates[1],
        lon: coordinates[0],
        units: "imperial",
        exclude: 'minutely,hourly,current,alerts'
    }).done(function (data) {
        // console.log(data);

        //appending the weather
        let forecasts = data.list
        // console.log("Data List: ", data.list)
        let appendedForecast = append(forecasts);
        $('#card').html(appendedForecast);
        // console.log("forecast: ", forecasts)

        //Rendering City Name
        let city = data.city.name
        let country = data.city.country
        $('#city-name').html(`${city}, ${country}`);
        // console.log("Data country: ", data.city.country)


    }).fail(function (jqXhr, status, error) {
        console.log(jqXhr);
        console.log(status);
        console.log(error);
    });
}

// appending html to empty div //
let append = function (data) {
    let html = ``
    for (let i = 0; i < data.length; i += 8) {
        // console.log("Data: ", data[i])
        const {
            dt_txt,
            main: {humidity, temp, temp_max, temp_min},
            weather: [{description, icon}],
            wind: {speed}
        } = data[i]
        html += `
            <div class="card  col-xxl">
               <h6 class="card-header date text-center ">${dt_txt.substring(5, 7)}/${dt_txt.substring(8, 10)}/${dt_txt.substring(0, 4)}</h6>
               <img src='http://openweathermap.org/img/w/${icon}.png' class="img-thumbnail mx-auto d-block border-0 img" ;' alt="image">
               
              <div class="card-body pt-0">
              <h4 class="card-title text-center">${temp.toFixed(1)}ºF</h4>
                <div class="d-flex justify-content-around" >
                <p class="card-text mb-0 text-warning pe-1"> H: ${temp_max.toFixed(1)}ºF </p>
                <p class="card-text mb-0 text-warning" > L: ${temp_min.toFixed(1)}ºF</p>
                </div>
              </div>
              <ul class="list-group list-group-flush text-center">
                <li class="list-group-item humidity">Humidity: ${humidity}%</li>
                <li class="list-group-item wind">Wind: ${speed} mph</li>
              </ul>
              <div class="card-body p-0 ">
              <p class="list-group-item bg-secondary text-light text-center p-0 m-0">${description.toUpperCase()}</p>
              </div>
            </div>`
    }
    return html
}



// // SearchVal was created to store an add event listener on the ID button. After clicking the button, renderNewCity function was called. //
//     let searchVal = document.querySelector('#button');
//     searchVal.addEventListener('click', renderNewCity);
//
// // The renderNewCity function stores the value from the element ID search-bar into a variable named city and inputs that variable into an AJAX request. //
//         function renderNewCity(event) {
//             let city = document.getElementById('search-bar').value;
//
//             // Prevent default, was used to keep the window from refreshing.
//             event.preventDefault();
//
//             // AJAX GET request
//             $.get("http://api.openweathermap.org/data/2.5/forecast", {
//                 APPID: OPEN_WEATHER_APPID,
//                 q: city ,
//                 units: "imperial"
//             }).done(function(data){
//                 console.log("fetch fired")
//                 console.log(data);
//                 console.log(data.list[0].main.temp);
//                 console.log(data.list[0].main.temp_min);
//
//                 let html = '';
//
//
//                 // This for loop is creating HTML cards with data.
//                 for(var i = 0; i <= 39; i+=8){
//                     html+= "<div class=\"card\" style=\"width: 18rem;\">";
//
//                     html+= "<img src=\"...\" class=\"card-img-top\" alt=\"...\">";
//
//                     html+= "<h5 class=\"card-title\">Forecast - index"  + i + "</h5>";
//
//                     html+= "<p class=\"card-text\">Current Temp: " + data.list[i].main.temp +"</p>";
//
//                     html+= "<p class=\"card-text\">Max Temp :" + data.list[i].main.temp_max +"</p>";
//
//                     html+= "<a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>";
//
//                     html+= "</div>";
//                     html+= "</div>"
//                 }
//
//                 $(".display_weather").html(html);
//
//         });
//         }