const apiKey = "863242cfb2b1d357e6093d9a4df19a4b";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
let inputs = document.querySelector(".input");
let inputBtns = document.querySelector(".inputBtn");
let imgIcon = document.querySelector(".img-icon");

async function checkData(city) {
  let dataWeather = await fetch(apiUrl + city + `&appid=${apiKey}`);
  let responseData = await dataWeather.json();
  console.log(responseData);
  document.querySelector(".city").innerHTML = responseData.name;
  document.querySelector(".temprature").innerHTML = responseData.main.temp;
  document.querySelector(".humidity").innerHTML =
    responseData.main.humidity + "%";
  document.querySelector(".speed").innerHTML = responseData.wind.speed + "Km/h";

  if (responseData.weather[0].main == "Clear") {
    imgIcon.src = "images/clear.png";
  } else if (responseData.weather[0].main == "Rain") {
    imgIcon.src = "images/rain.png";
  } else if (responseData.weather[0].main == "Snow") {
    imgIcon.src = "images/snow.png";
  } else if (responseData.weather[0].main == "Mist") {
    imgIcon.src = "images/mist.png";
  } else if (responseData.weather[0].main == "Drizzle") {
    imgIcon.src = "images/drizzle.png";
  } else if (responseData.weather[0].main == "Clouds") {
    imgIcon.src = "images/clouds.png";
  }
}

inputBtns.addEventListener("click", () => {
  checkData(inputs.value);
});
