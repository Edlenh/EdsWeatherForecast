var city = document.querySelector(".city_search")
var apiKey = '83ba888341c4c3c5f2ce6316ad28fbfd'
var searchForm = document.querySelector(".search")
var fiveDay = document.getElementById("five_day")
let locationIcon = document.querySelector('.weather-icon');


//create function for search 
searchForm.addEventListener("submit", function(event){
  event.preventDefault()
  var cityName =  city.value
  fetchWeather(cityName)
  fetchForecast(cityName)
  city.value=""
});



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
.then((data) => displayWeather(data))
};

//display current weather
function displayWeather(data) {
    const {name} = data;
    const {icon, description} =data.weather[0];
    const {temp, humidity} = data.main;
    const {speed} = data.wind;
    console.log(name,icon,temp, description,humidity,speed)
    document.querySelector(".city").innerText= "Current Weather in " + name;
    document.querySelector(".icon").src ="https://openweathermap.org/img/wn/" + icon + ".png"
    document.querySelector(".description").innerText= description
    document.querySelector(".temperature").innerText= temp + "°C"
    document.querySelector(".humidity").innerText= "Humidity: " + humidity + "%"
    document.querySelector(".wind").innerText= "Wind Speed: " + speed + " km/h"

}

//get 5 day forecast
function displayForecast(data){
    console.log(data);
    for(var i=0; i< data.list.length; i +=8 ){
    
        const date =data.list[i].dt_txt
        const newDate= (date.split(" ")[0]);
        const {temp,humidity} =data.list[i].main;
        const icon=data.list[i].weather[0].icon
        const {description} =data.list[i].weather[0];
        const newDescription = description.toUpperCase()
        const {speed} = data.list[i].wind;

        //create and disaplay icon
        
        var newImage2 = document.createElement('img')
        var iconURL=`https://openweathermap.org/img/wn/${icon}.png`
        
        newImage2.setAttribute("src",iconURL)
        console.log(icon)
        var iconEl=document.createElement('p')
        iconEl.append(icon)
        fiveDay.appendChild(newImage2)

        //create and display Date 
        var dateEl=document.createElement('p')
        dateEl.append("Date " + newDate)
        fiveDay.appendChild(dateEl)
      

        //create and display temperature 
        var tempEl=document.createElement('p')
        tempEl.append("Temperature: " +temp +"°C")
        fiveDay.appendChild(tempEl)


        //create and display description
        var descEl=document.createElement('p')

        descEl.append(newDescription)
        fiveDay.appendChild(descEl)

        //create and display humidity
        var humidEl=document.createElement('p')
        humidEl.append("Humidity: " +humidity +"%" )
        fiveDay.appendChild(humidEl)


        //create and display wind speed
        var speedEl=document.createElement('p')
        speedEl.append("Wind Speed: " +speed)
        fiveDay.appendChild(speedEl)

       
   
    } 

    
}
