import React from 'react'

const RpsBox = (props) => {
  return (
    <div className="rps-box">
      <h1>{props.title}</h1>
      <div className="item-img-wrap">
        <img className="item-img" src={props.item && props.item.img} alt="" />
      </div>
      <h2>win</h2>
    </div>
  )
}

export default RpsBox
