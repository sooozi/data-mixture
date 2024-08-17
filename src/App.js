import { useEffect } from 'react';
import './App.css';

function App() {
  const API_KEY = process.env.REACT_APP_WEATHER_KEY;

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon);
    });
  }

  const getWeatherByCurrentLocation = async(lat, lon)  => {
    let url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(API_KEY);
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

    </div>
  );
}

export default App;
