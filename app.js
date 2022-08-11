var btSubmit = document.querySelector('#btSubmit');
var inputCityName = document.querySelector('#input-city');
var labelCityName = document.querySelector('#city-name');
var tempDescription = document.querySelector('#temperature-description');
var tempDegree = document.querySelector('#temperature-degree');

// REPLACE 'MY-API-KEY' WITH MY KEY. IT'S IN OPENWEATHERMAP.COM, AND INSIDE AN EMAIL THEY SEND ME

btSubmit.addEventListener('click', function(){
  fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputCityName.value + '&APPID=MY-API-KEY')
  .then(response => response.json())
  .then(data => {
    labelCityName.innerHTML = data['name'];
    tempDegree.innerHTML = Math.floor(data['main']['temp'] - 273.15);
    tempDescription.innerHTML = data['weather'][0]['description'];
  })
  .catch(err => alert("Wrong city name!"))
});
