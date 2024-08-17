import React from 'react';
import { Button } from 'react-bootstrap';

const WeatherButton = ({cities}) => {
  return (
    <div className='weather-btn-wrap'>
      <Button variant="secondary">Here!</Button>
      {cities.map(item => (
        <Button variant="secondary" key={item}>{item}</Button>
      ))}
    </div>
  )
}

export default WeatherButton
