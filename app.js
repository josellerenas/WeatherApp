var btSubmit = document.querySelector('#btSubmit');
var inputCityName = document.querySelector('#input-city');
var labelCityName = document.querySelector('#city-name');
var tempDescription = document.querySelector('#temperature-description');
var tempDegree = document.querySelector('#temperature-degree');

btSubmit.addEventListener('click', function(){
  fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputCityName.value + '&APPID=18a1d6c435713ef7a951f786b0b6a73d')
  .then(response => response.json())
  .then(data => {
    labelCityName.innerHTML = data['name'];
    tempDegree.innerHTML = Math.floor(data['main']['temp'] - 273.15);
    tempDescription.innerHTML = data['weather'][0]['description'];
  })
  .catch(err => alert("Wrong city name!"))
});
