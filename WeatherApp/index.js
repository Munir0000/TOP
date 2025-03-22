const url = "http://api.weatherapi.com/v1/forecast.json";
const apikey = "aa2a7147559440bcbbd54300241902";

// Selecting HTML elements
const cityName = document.getElementById("city");
const temperature = document.getElementById("temp");
const tempImage = document.getElementById("imgtemp");
const searchbar = document.getElementById("searchbar");
const hourForecast = document.getElementById("hourhere");
const forecastImage = document.getElementById("hourimg");
const forecastTemprature = document.getElementById("tempforecast");
const sunrise = document.getElementById("Sunrise");
const sunset = document.getElementById("sunset");
const chanceofrain = document.getElementById("chanceofrain");
const uvindex = document.getElementById("uvindex");
const wind = document.getElementById("wind");
const pressure = document.getElementById("pressure");
const feelslike = document.getElementById("feelslike");
const visibility = document.getElementById("visibility");
async function getWeather(city) {
  try {
    const response = await fetch(`${url}?key=${apikey}&q=${city}`);
    if (!response.ok) throw new Error("City not found");

    const data = await response.json(); // Await JSON parsing
    return data;
  } catch (error) {
    alert(error.message);
    return null; // Return null to indicate failure
  }
}

function updateWeatherUI(weatherData) {
  if (!weatherData) return; // Avoid errors if no data is returned

  cityName.textContent = weatherData.location.name;
  temperature.textContent = `${weatherData.current.temp_c}°C`;
  tempImage.src = `https:${weatherData.current.condition.icon}`;
  sunrise.textContent = weatherData.forecast.forecastday[0].astro.sunrise;
  sunset.textContent = weatherData.forecast.forecastday[0].astro.sunset;
  chanceofrain.textContent =
    weatherData.forecast.forecastday[0].hour.chance_of_rain;

  weatherData.forecast.forecastday[0].hour.forEach((hour) => {
    const hourElement = document.createElement("div");
    hourElement.classList.add("hourly-forecast");
    const parentDiv = document.createElement("div");
    parentDiv.classList.add("hour-parent"); // Add a class for styling
    // Extract time (HH:MM)
    const time = new Date(hour.time).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    // Create hour text
    const hourText = document.createElement("p");
    hourText.id = "hourhere";
    hourText.textContent = time;

    // Create weather icon
    const icon = document.createElement("img");
    icon.src = hour.condition.icon;
    icon.alt = hour.condition.text;
    icon.id = "hourimg";

    // Create temperature text
    const tempText = document.createElement("p");
    tempText.id = "tempforecast";
    tempText.textContent = `${hour.temp_c}°`;

    // Append elements
    hourElement.appendChild(hourText);
    hourElement.appendChild(icon);
    hourElement.appendChild(tempText);
    parentDiv.appendChild(hourElement);

    // Append the parent container to the forecast container
    hourForecast.appendChild(parentDiv);
  });
}

// Add blur event to input field
searchbar.addEventListener("blur", async () => {
  const cityNAME = searchbar.value.trim();
  if (!cityNAME) return; // Prevent empty requests

  const weatherData = await getWeather(cityNAME); // Wait for API response
  updateWeatherUI(weatherData); // Update UI with data
});
