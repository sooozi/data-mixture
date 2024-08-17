import React from 'react';

const WeatherBox = ({weather}) => {
    console.log(weather);
    return (
        <div className='weather-box-wrap'>
            {/*삼항연산식 */}
            <span className="txt-location">{weather?.name}</span> 
            <div className="icon-box"><img src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}.png`} alt="Weather Icon" /></div>
            <h3 className="txt-temp">{weather?.main.temp}℃ / {(weather?.main.temp * 1.8 + 32).toFixed(2)}℉</h3>
            <h5 className="txt-weather-desc">{weather?.weather[0].description}</h5>
        </div>
    )
}

export default WeatherBox
