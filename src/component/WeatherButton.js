import React from 'react';
import { Button } from 'react-bootstrap';

const WeatherButton = ({cities, setCity, getCurrentLocation, selectCity}) => {
  return (
    <div className='weather-btn-wrap'>
      <Button variant={`${selectCity === "Here" ? "secondary" : "warning"}`} onClick={getCurrentLocation}>Here!</Button>
      {cities.map(item => (
        <Button variant={`${selectCity === item ? "secondary" : "warning"}`} key={item} onClick={() => setCity(item)}>{item}</Button>
      ))}
    </div>
  )
}

export default WeatherButton
