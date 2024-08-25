import React, { useState } from 'react';

const Counting = () => {
    const [count, setCount] = useState(0);
    const increase = () => {
        setCount(count + 1);
    }
  return (
    <div>
      <h1>0</h1>
      <button onClick={increase}>증가 ⬆️</button>
    </div>
  )
}

export default Counting
