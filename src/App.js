import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import './App.css';
import WeatherBox from './component/WeatherBox';
import WeatherButton from './component/WeatherButton';

function App() {
  const API_KEY = process.env.REACT_APP_WEATHER_KEY;
  const [weather, setWeather] = useState(null);
  const cities = ["Australia", "Germany", "Bangkok", "Prague"]

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon);
    });
  }

  const getWeatherByCurrentLocation = async(lat, lon)  => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
  }

  //내가 불러온 api
  // const getWeather = async(lat, lon) => {
  //   try {
  //     const link = await axios.get(
  //       `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  //     )
  //     console.log(link)
  //   } catch(err) {
  //     console.error(err)
  //   }
  // }

  useEffect(() => {
    getCurrentLocation();
  }, [])
  return (
    <div className="App">
      <div className="container">
        <WeatherBox weather={weather}/>
        <WeatherButton cities={cities}/>
      </div>
    </div>
  );
}

export default App;
