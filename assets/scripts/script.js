var fetchButton= document.getElementById('fetch-button')
var bodyContent= document.getElementById('bodyContent')
var city = document.getElementById('city_name')


//get currentWeather
let weather = {
    apiKey: '83ba888341c4c3c5f2ce6316ad28fbfd',
    fetchWeather: function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apiKey)
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const {name} = data;
        const {icon, description} =data.weather[0];
        const {temp, humidity} = data.main;
        const {speed} = data.wind;
        console.log(name,icon,temp, description,humidity,speed)
        document.querySelector(".city").innerText= "Weather in " + name;
        document.querySelector(".icon").src ="https://openweathermap.org/img/wn/" + icon+ ".png"
        document.querySelector(".description").innerText= description
        document.querySelector(".temperature").innerText= temp + "°C"
        document.querySelector(".humidity").innerText= "Humidty: " + humidity + "%"
        document.querySelector(".wind").innerText= "Wind Speed: " + speed + " km/h"

    },
    search: function(){
        this.fetchWeather(document.querySelector(".city_search").value);
    }
};

document.querySelector(".search button").addEventListener("click", function(){
    weather.search();
});
document.querySelector(".city_search").addEventListener("keyup", function(event){
    if (event.key == "Enter"){
        weather.search();
    }
});





// var usernameInput=document.getElementById(buttonid)
// usernameInput.value
