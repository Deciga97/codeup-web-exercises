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
    // })
    //
    //     $.get("http://api.openweathermap.org/data/2.5/forecast", {
    //         APPID: OPEN_WEATHER_APPID,
    //         q: "" + city,
    //         units: "imperial"
    //     }).done(function(data){
    //         console.log("fetch fired")
    //         console.log(data);
    //         console.log(data.list[0].main.temp);
    //         console.log(data.list[0].main.temp_min);
    //
    //
    //         // This for loop is creating HTML cards with data.
    //         for(var i = 0; i <= 39; i+=8){
    //             html+= "<div class=\"card\" style=\"width: 18rem;\">";
    //
    //             html+= "<img src=\"...\" class=\"card-img-top\" alt=\"...\">";
    //
    //             html+= "<h5 class=\"card-title\">Forecast - index"  + i + "</h5>";
    //
    //             html+= "<p class=\"card-text\">Current Temp: " + data.list[i].main.temp +"</p>";
    //
    //             html+= "<p class=\"card-text\">Max Temp :" + data.list[i].main.temp_max +"</p>";
    //
    //             html+= "<a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>";
    //
    //             html+= "</div>";
    //             html+= "</div>"
    //         }
    //
    //         $(".display_weather").html(html);
    //
    // })



    // So my first question is about your ".display_weather" class. Where exactly is that class within your html. I had assumed it was a big div contaning the card div so thats what I went with. As of right now, I am getting a reference error on the console stating the weather map input is not defined. My second question is about the get request, I'm getting a 404 on the console. AND my mao is not showing up on my page...



// $('#top')

    // Converting to JSON data...I THINK. Not sure what .catch is doing. //
    // fetch(url)
    //     .then(response => response.json())
    //     .then(data => {
    //         // do stuff with the data
    //     })
    //     .catch(() => {
    //         msg.textContent = "Please search for a valid city 😩";
    //     });
// Now that AJAX is in place, hypothetically speaking...each time the user hits the search button with the right information. Weather data should populate.//

// $.ajax(url).done(function(data) {

// });



// This is the code to extract the code/value the user searched for, and appends it to the list. //

    // const { main, name, sys, weather } = data;
    // const icon = `https://openweathermap.org/img/wn/${
    //     weather[0]["icon"]
    // }@2x.png`;

    // const li = document.createElement("li");
    // li.classList.add("city");
    // const markup = `
  // <h2 class="city-name" data-name="${name},${sys.country}">
  //   <span>${name}</span>
  //   <sup>${sys.country}</sup>
  // </h2>
  // <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup>
  // </div>
  // <figure>
  //   <img class="city-icon" src=${icon} alt=${weather[0]["main"]}>
  //   <figcaption>${weather[0]["description"]}</figcaption>
  // </figure>
// `;
//     li.innerHTML = markup;
//     list.appendChild(li);
//
//
//     // Clears content of search field
//     msg.textContent = "";
//     form.reset();
//     input.focus();

