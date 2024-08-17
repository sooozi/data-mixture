import React from 'react';
import { Button } from 'react-bootstrap';

const WeatherButton = ({cities}) => {
  return (
    <div>
      <Button variant="secondary">Secondary</Button>
      {cities.map((item) => (
        <Button variant="secondary">{item}</Button>
      ))}
    </div>
  )
}

export default WeatherButton
