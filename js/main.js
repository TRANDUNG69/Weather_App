const APP_ID = 'a57c68afe09e9e5fbf2cf9544e375750';
// API
const DEFAULT_VALUE = "--";
const city_Name = document.querySelector('.city-name');
const weather_State = document.querySelector('.weather-state');
const weather_icon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const sunrise = document.querySelector('.sunrise');
const sunset = document.querySelector('.sunset');
const humidity = document.querySelector('.humidity');
const wind_speed = document.querySelector('.wind-speed');
const search_input = document.querySelector('#search-input');
const speed = " km/h";
const degree = "॰";
const percent = "%";
//     search_input.addEventListener('change', (e)=>{
        // console.log(['search_input'], e);
//         fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&appid=${APP_ID}&units=metric&lang=vi`)
//         .then(async res =>{
//             const data = await res.json();
              // console.log('[search_input]', data);
//             city_Name.innerHTML = data.name || DEFAULT_VALUE;
//             weather_State.innerHTML = data.weather[0].description || DEFAULT_VALUE;
//             weather_icon.setAttribute('src', `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
//             temperature.innerHTML = Math.round(data.main.temp) + degree || DEFAULT_VALUE;
//             sunrise.innerHTML = moment.unix(data.sys.sunrise).format('H:mm') || DEFAULT_VALUE;
//             sunset.innerHTML = moment.unix(data.sys.sunset).format('H:mm') || DEFAULT_VALUE;
//             humidity.innerHTML = data.main.humidity + percent || DEFAULT_VALUE;
//             wind_speed.innerHTML = (data.wind.speed * 3.6).toFixed(2) + speed || DEFAULT_VALUE;
//         });
// })
// ! Cách 1
document.addEventListener("DOMContentLoaded", function(){
    search_input.onchange = function(e){
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&appid=${APP_ID}&units=metric&lang=vi`)
        .then(async function(res) {
            // Thực hiện hàm ko đồng bộ
            const data = await res.json();
            // Await làm hoãn hàm không đồng bộ lại và lấy ra dl
            // Hàm lấy dữ liệu
            // console.log('[search_input]',data);
            city_Name.innerHTML = data.name || DEFAULT_VALUE;
            weather_State.innerHTML = data.weather[0].description || DEFAULT_VALUE;
            weather_icon.setAttribute('src',`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
            temperature.innerHTML = Math.round(data.main.temp) + degree || DEFAULT_VALUE;
            sunrise.innerHTML = moment.unix(data.sys.sunrise).format('H:mm') || DEFAULT_VALUE;
            sunset.innerHTML = moment.unix(data.sys.sunset).format('H:mm') || DEFAULT_VALUE;
            humidity.innerHTML = data.main.humidity + percent || DEFAULT_VALUE;
            wind_speed.innerHTML = (data.wind.speed * 3.6).toFixed(2) + speed || DEFAULT_VALUE;
        })
    }
}, false)
// ? Cách 2