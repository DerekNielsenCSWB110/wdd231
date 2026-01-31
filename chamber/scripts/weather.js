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
    console.error("Weather error:", error);
    currentTemp.textContent = "Weather data unavailable";
    weatherDesc.textContent = "";
    day1.textContent = day2.textContent = day3.textContent = "N/A";
  }
}

function displayWeather(data) {
  const current = data.list[0];
  currentTemp.textContent = `🌡️ Current: ${current.main.temp.toFixed(0)}°F`;
  weatherDesc.textContent = current.weather[0].description;

  const forecastDays = data.list.filter(item => item.dt_txt.includes("12:00:00"));

  [day1, day2, day3].forEach((el, i) => {
    if (forecastDays[i]) {
      el.textContent = `Day ${i + 1}: ${forecastDays[i].main.temp.toFixed(0)}°F`;
    } else {
      el.textContent = `Day ${i + 1}: N/A`;
    }
  });
}

getWeather();
