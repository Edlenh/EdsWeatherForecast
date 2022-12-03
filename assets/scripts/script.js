var city = document.querySelector(".city_search")
var apiKey = '83ba888341c4c3c5f2ce6316ad28fbfd'
var searchForm = document.querySelector(".search")




//create function for search 
searchForm.addEventListener("submit", function(event){
  event.preventDefault()
  var cityName =  city.value
  fetchWeather(cityName)
  fetchForecast(cityName)
  city.innerHTML=""
});


//todo
//create for loop to get 5 weather data
//save to local storage
//diisplay local storage = Recent History 
// if already searched dont add it again

    // localStorage.setItem
    // forecast.search();


function fetchForecast(city){

    apiKey= '83ba888341c4c3c5f2ce6316ad28fbfd',
    fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=metric&appid=" + this.apiKey) 
    .then((response) => response.json())

    .then((data) =>{
    displayForecast(data)

    })}

//get currentWeather
function fetchWeather(city){
fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apiKey)
.then((response) => response.json())
.then((data) => displayWeather(data))};


function displayWeather(data) {
    const {name} = data;
    const {icon, description} =data.weather[0];
    const {temp, humidity} = data.main;
    const {speed} = data.wind;
    console.log(name,icon,temp, description,humidity,speed)
    document.querySelector(".city").innerText= "Weather in " + name;
    document.querySelector(".icon").src ="https://openweathermap.org/img/wn/" + icon + ".png"
    document.querySelector(".description").innerText= description
    document.querySelector(".temperature").innerText= temp + "°C"
    document.querySelector(".humidity").innerText= "Humidity: " + humidity + "%"
    document.querySelector(".wind").innerText= "Wind Speed: " + speed + " km/h"

}

function displayForecast(data){
    console.log(data);
    for(var i=0; i< data.list.length; i +=8 ){
        const {name} = data.city;
        console.log(name)
        const {speed} = data.list[i].wind;
        console.log(speed)
    } 
}