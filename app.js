const body = document.body;

const input = document.getElementById('user_value');

const screen = document.getElementById('Screen');

const screenBg = document.getElementById("wallpapper");

// Headings Start's__________________

let temp_cntnr = document.getElementById("temp");
let feel_cntnr = document.getElementById("feel");
let city_cntnr = document.getElementById("city");
let cloud_cntnr = document.getElementById("cloud");
let humidity_cntnr = document.getElementById("humidity");

// Headings End's__________________

const weatherData = async () => {

    if (input.value === 'clear') {
        body.style.backgroundImage = 'linear-gradient(25deg, rgb(49, 191, 238), deepskyblue, rgb(0, 157, 209), rgb(0, 118, 165), rgb(0, 101, 141), rgb(0, 100, 139))';
        screenBg.classList.remove('hide');
    }
    else if (!input.value.trim()) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Enter city name",
        });
        return
    }
    else {
        try {
            const weatherApi = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=Api-Key&units=metric`);
            const response = await weatherApi.json()

            // console.log(response);

            const { name } = response
            const { temp, feels_like, humidity } = response.main
            const { description } = response.weather[0]

            temp_cntnr.innerHTML = `Temperature (${temp}<sup>o</sup>C)`;
            feel_cntnr.innerHTML = `Feels Like (${feels_like}<sup>o</sup>C)`;
            city_cntnr.innerHTML = `<h4>(${name})<h4>`;
            cloud_cntnr.innerHTML = `Weather (${description})`;
            humidity_cntnr.innerHTML = `Humidity (${humidity})%`;

            if (description === 'overcast clouds') {
                body.style.backgroundImage = 'url(files_related_to_project/bg_gifs/overCast.gif)';
                screenBg.classList.add('hide');
            }
            else if (description === 'broken clouds') {
                body.style.backgroundImage = 'url(files_related_to_project/bg_gifs/broken.gif)';
                screenBg.classList.add('hide');
            }
            else if (description === 'clear sky') {
                body.style.backgroundImage = 'url(files_related_to_project/bg_gifs/clearSky.gif)';
                screenBg.classList.add('hide');
            }
            else if (description === 'few clouds') {
                body.style.backgroundImage = 'url(files_related_to_project/bg_gifs/fewClouds.gif)';
                screenBg.classList.add('hide');
            }
            else if (description === 'scattered clouds') {
                body.style.backgroundImage = 'url(files_related_to_project/bg_gifs/scatteredClouds.gif)';
                screenBg.classList.add('hide');
            }
            else if (description === 'light rain') {
                body.style.backgroundImage = 'url(files_related_to_project/bg_gifs/lightRain.gif)';
                screenBg.classList.add('hide');
            }
            else if (description === 'heavy intensity rain') {
                body.style.backgroundImage = 'url(files_related_to_project/bg_gifs/heavyRain.gif)';
                screenBg.classList.add('hide');
            }
            else if (description === 'moderate rain') {
                body.style.backgroundImage = 'url(files_related_to_project/bg_gifs/moderateRain.gif)';
                screenBg.classList.add('hide');
            }
            else if (description === 'Snow') {
                body.style.backgroundImage = 'url(files_related_to_project/bg_gifs/snow.gif)';
                screenBg.classList.add('hide');
            }
            else {
                body.style.backgroundImage = 'linear-gradient(25deg, rgb(49, 191, 238), deepskyblue, rgb(0, 157, 209), rgb(0, 118, 165), rgb(0, 101, 141), rgb(0, 100, 139))';
                screenBg.classList.remove('hide');
            }

            const infoDiv = document.getElementById('info_div')

            infoDiv.classList.remove('hide');
            infoDiv.classList.add('bgBlur');

        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "City name is incorrect",
            });
        }
    }

    input.value = "";

}

// Power Button Start's___________________________________________

const powerBtn = document.getElementById('power_btn');

function power_btn(params) {
    if (!powerBtn.classList.contains('red')) {
        screen.classList.add('d_none');
        powerBtn.classList.add('red');
        powerBtn.title = 'Turn On the display';
    }
    else {
        screen.classList.remove('d_none');
        powerBtn.classList.remove('red');
        powerBtn.title = 'Turn Off the display';
    }
}

// Power Button End's___________________________________________

input.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        weatherData()
        input.value = "";
    }
})
