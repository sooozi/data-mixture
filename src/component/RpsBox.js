import React from 'react'

const RpsBox = (props) => {
  return (
    <div className="rps-box">
      <h1>{props.title}</h1>
      <div className="item-img-wrap">
        {props.item && props.item.img ? (
          <img className="item-img" src={props.item.img} alt={props.item.name} />
        ) : (
          <p>Click button!</p>
        )}
      </div>
      <h2>win</h2>
    </div>
  )
}

export default RpsBox
