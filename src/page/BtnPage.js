import React, { useEffect, useState } from 'react';

const BtnPage = () => {
  const [counter, setCounter] = useState(0);
  const increase = () => {
    setCounter(counter + 1);
  }
  //useEffect는 매개변수 2개를 받는다. (함수, 배열)
  useEffect(() => {
    console.log("useEffect1 fire");
  }, [])

  useEffect(() => {
    console.log("useEffect2 fire");
  }, [counter])
  return (
    <div className="App">
      {console.log("render")}
      <span>{counter}</span>
      <button onClick={increase}>Click 👆</button>
    </div>
  );
}

export default BtnPage
