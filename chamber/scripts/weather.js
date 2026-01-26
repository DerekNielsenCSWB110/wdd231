const apiKey = "7ad8feca96a446109e221926262601";
const city = "Boise";
const units = "imperial";

const currentTemp = document.getElementById("current-temp");
const weatherDesc = document.getElementById("weather-desc");

const day1 = document.getElementById("day1");
const day2 = document.getElementById("day2");
const day3 = document.getElementById("day3");

const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${units}&appid=${apiKey}`;

async function getWeather() {
  try {
    const response = await fetch(url);
    if (!response.ok) throw Error(await response.text());
    const data = await response.json();

    displayWeather(data);
  } catch (error) {
    console.error(error);
  }
}

function displayWeather(data) {
  const current = data.list[0];

  currentTemp.innerHTML = `🌡️ Current: ${current.main.temp.toFixed(0)}°F`;
  weatherDesc.textContent = current.weather[0].description;

  const forecastDays = data.list.filter(item => item.dt_txt.includes("12:00:00"));

  day1.textContent = `Day 1: ${forecastDays[0].main.temp.toFixed(0)}°F`;
  day2.textContent = `Day 2: ${forecastDays[1].main.temp.toFixed(0)}°F`;
  day3.textContent = `Day 3: ${forecastDays[2].main.temp.toFixed(0)}°F`;
}

getWeather();
