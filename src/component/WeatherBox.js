import React from 'react';

const WeatherBox = ({weather}) => {
    console.log(weather);
    return (
        <div className='weather-box-wrap'>
            {/*삼항연산식 */}
            <span>{weather?.name}</span> 
            <h3>{weather?.main.temp}℃ / {(weather?.main.temp * 1.8 + 32).toFixed(2)}℉</h3>
            <h4>{weather?.weather[0].description}</h4>
        </div>
    )
}

export default WeatherBox
