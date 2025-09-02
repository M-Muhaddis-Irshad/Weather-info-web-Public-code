const input = document.getElementById('user_value');

// Headings Start's__________________

let temp_cntnr = document.getElementById("temp");
let feel_cntnr = document.getElementById("feel");
let city_cntnr = document.getElementById("city");
let weather_cntnr = document.getElementById("weather");
let humidity_cntnr = document.getElementById("humidity");

// Headings End's__________________

// Conditions block Start's__________________

let temp = "";
let feelLike = "";
let weather = "";
let humidity = "";

// Conditions block End's__________________

let flg = true;

const weatherData = async () => {

    if (!input.value.trim()) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Enter city name",
        });
        return
    }
    else {
        try {
            const weatherApi = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=a097eb39ebf73787c3b509888e03d178&units=metric`);
            const response = await weatherApi.json()

            console.log(response);

            const { name } = response
            const { temp, feels_like, humidity } = response.main
            const { description } = response.weather[0]
            console.log(`
                temperature: ${temp} 
                feels like: ${feels_like} 
                humidity: ${humidity} 
                description: ${description}
                `);


            city_cntnr.innerText = name;


            // const {}

        } catch (error) {
            // flg = false
            console.log('false');
            console.log("failed");
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "City name is incorrect",
            });
        }
    }

    // if (!flg) {
    //     console.log("failed");
    //     Swal.fire({
    //         icon: "error",
    //         title: "Oops...",
    //         text: "City name is incorrect",
    //     });
    // }

}

// function conditions(params) {

// }

input.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        weatherData()
    }
})





// document.getElementById('info_div').style.display = "flex"

















// // let user_location = {
// //     lat: "",
// //     long: ""
// // };

// // let { lat, long } = user_location
// // // console.log(latitude , longitude);

// // function getUserLocation() {

// //     return new Promise((resolve, reject) => {
// //         navigator.geolocation.getCurrentPosition((data) => {
// //             console.log(data);
// //             const { coords: { latitude }, coords: { longitude } } = data.coords
// //             // console.log(latitude, longitude);
// //             lat = latitude;
// //             long = longitude;
// //             resolve(lat,long)
// //         },
// //             (denied) => {
// //                 Swal.fire({
// //                     icon: "error",
// //                     title: "Oops...",
// //                     text: "Permission Denied",
// //                 });
// //                 reject(denied)
// //             }
// //         );

// //     }
// //     )
// // }

// // getUserLocation();

// // let flg = true;

// // setTimeout(() => {
// //     const user_loc = `${lat} ${long}`
// //     console.log(user_loc);
// //     if (!user_loc) {
// //         flg = false;
// //     }
// // }, 3000);

// // if (!flg) {
// //     console.log('passed');

// // }

// // async () => {

// //     if (lat !== "" && long !== "") {
// //         console.log(true);

// //     }
// //     else {
// //         console.log(false);

// //     }
// // }


// _________________________________________________________________

// let arr = [3 , 9,2];


// function sum(num1 , num2) {
//     return num1 * num2
// }

// sum()

// console.log(sum(arr[2],...arr));

// function square(number) {
//     return Math.pow(number,2)
// }

// square()

// console.log(square(3));
