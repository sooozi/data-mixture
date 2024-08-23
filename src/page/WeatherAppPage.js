import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import WeatherBox from '../component/WeatherBox';
import WeatherButton from '../component/WeatherButton';

function WeatherAppPage() {
  const API_KEY = process.env.REACT_APP_WEATHER_KEY;
  const [weather, setWeather] = useState(null);
  const cities = ["Australia", "Germany", "Bangkok", "Prague"];
  const [city, setCity] = useState(' ');
  const [loading, setLoading] = useState(false);
  const [apiError, setAPIError] = useState("");
  const navigate = useNavigate();

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon);
      setCity('Here');
    });
  }

  const getWeatherByCurrentLocation = async(lat, lon)  => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
      setLoading(true);
      let response = await fetch(url);
      let data = await response.json();
      setWeather(data);
      setLoading(false);
    } catch(err) {
      setAPIError(err.message);
      setLoading(false);
    }
  }
  
  const getWeatherByCity = async() => {
    try{
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
      setLoading(true);
      let response = await fetch(url);
      let data = await response.json();
      setWeather(data);
      setLoading(false);
    } catch(err) {
      setAPIError(err.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    if(city === ' ') {
      setLoading(true);
      getCurrentLocation();
    } else if(city === 'Here'){
      setLoading(true);
      getCurrentLocation();
    } else {
      setLoading(true);
      getWeatherByCity();
    }
  }, [city]);

  const goToProductDetailPage = () => {
    navigate('/productDetailPage?q=pants')
  }

  return (
    <div className="WeatherAppPage">
      <Link to="/RpsPage">RpsPage</Link>
      <button onClick={goToProductDetailPage}>productDetailPage</button>

      <div className="container">
        {loading ? (<ClipLoader size={100} loading={loading}/>) : !apiError ? (
          <div>
            <ClipLoader size={50} loading={loading}/>
            <WeatherBox weather={weather}/>
            <WeatherButton cities={cities} setCity={setCity} getCurrentLocation={getCurrentLocation} selectCity={city}/>
          </div>
        ) : (
          apiError
        )}
      </div>
    </div>
  );
}

export default WeatherAppPage;
