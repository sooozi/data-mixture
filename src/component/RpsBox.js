import React from 'react';

const RpsBox = (props) => {
  let result;
  if(
    props.title === "👩‍💻 COMPUTER" &&
    props.result !== "tie" &&
    props.result !== ""
  ) { 
    result = props.result === "win" ? "lose" : "win";
  } else {
    result = props.result;
  }

  return (
    <div className={`rps-box ${result}`}>
      <h1>{props.title}</h1>
      <div className="item-img-wrap">
        {props.item && props.item.img ? (
          <img className="item-img" src={props.item.img} alt={props.item.name} />
        ) : (
          <p>Click button!</p>
        )}
      </div>
      <h2>{result}</h2>
    </div>
  )
}

export default RpsBox
