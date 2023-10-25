import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherCard from "./WeatherCard";

const Weather = ({ city }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (city) {
      setLoading(true);
      axios
        .get("https://api.weatherapi.com/v1/current.json", {
          params: {
            key: "426acab8265f4f69b2d152554232010",
            q: city
          }
        })
        .then((response) => {
          setWeatherData(response.data);
        })
        .catch((error) =>
          console.error("Error occured in fetching data", error)
        )
        .finally(() => setLoading(false));
    }
  }, [city]);

  return (
    <div>
      {loading && <p>Loading Data ....</p>}
      {!loading && weatherData && (
        <div className="weather-display">
          <WeatherCard title="Temprature" data={weatherData.current.temp_c} />
          <WeatherCard title="Humidity" data={weatherData.current.humidity} />
          <WeatherCard
            title="Condition"
            data={weatherData.current.condition.text}
          />
          <WeatherCard title="Wind Speed" data={weatherData.current.wind_kph} />
        </div>
      )}
    </div>
  );
};

export default Weather;
