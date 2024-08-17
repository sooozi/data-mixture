import axios from 'axios';
import { useEffect } from 'react';
import './App.css';

function App() {
  const API_KEY = process.env.REACT_APP_WEATHER_KEY;

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeather(lat, lon);
    });
  }
  const getWeather = async(lat, lon) => {
    try {
      const link = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
      
      )
      console.log(link)
    } catch(err) {
      console.error(err)
    }
  }

  useEffect(() => {
    getCurrentLocation();
  }, [])
  return (
    <div className="App">

    </div>
  );
}

export default App;
