import React, { useState } from 'react';

const BtnPage = () => {
  const [counter, setCounter] = useState(0);
  const increase = () => {
    setCounter(counter + 1);
  }
  return (
    <div className="App">
      <span>{counter}</span>
      <button onClick={increase}>Click 👆</button>
    </div>
  );
}

export default BtnPage
