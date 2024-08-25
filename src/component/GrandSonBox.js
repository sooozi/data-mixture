import React from 'react';
import { useSelector } from 'react-redux';

const GrandSonBox = () => {
    const count = useSelector((state)=>state.count);
  return (
    <div>
      <p>This is GrandSonBox!! {count}</p>
    </div>
  )
}

export default GrandSonBox
