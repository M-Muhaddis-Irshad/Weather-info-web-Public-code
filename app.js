const input = document.getElementById('user_value');

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
    try {
        const weather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=a097eb39ebf73787c3b509888e03d178&units=metric`);
        const response = await weather.json()
        console.log(response);
    } catch (error) {
        flg = false
        console.log('false');
        
    }

    if (!flg) {
        console.log("failed");
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "City name is incorrect",
        });
    }

}






















// let user_location = {
//     lat: "",
//     long: ""
// };

// let { lat, long } = user_location
// // console.log(latitude , longitude);

// function getUserLocation() {

//     return new Promise((resolve, reject) => {
//         navigator.geolocation.getCurrentPosition((data) => {
//             console.log(data);
//             const { coords: { latitude }, coords: { longitude } } = data.coords
//             // console.log(latitude, longitude);
//             lat = latitude;
//             long = longitude;
//             resolve(lat,long)
//         },
//             (denied) => {
//                 Swal.fire({
//                     icon: "error",
//                     title: "Oops...",
//                     text: "Permission Denied",
//                 });
//                 reject(denied)
//             }
//         );

//     }
//     )
// }

// getUserLocation();

// let flg = true;

// setTimeout(() => {
//     const user_loc = `${lat} ${long}`
//     console.log(user_loc);
//     if (!user_loc) {
//         flg = false;
//     }
// }, 3000);

// if (!flg) {
//     console.log('passed');

// }

// async () => {

//     if (lat !== "" && long !== "") {
//         console.log(true);

//     }
//     else {
//         console.log(false);

//     }
// }