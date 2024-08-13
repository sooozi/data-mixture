import React from 'react'

const RpsBox = (props) => {
  return (
    <div className="rps-box">
      <h1>{props.title}</h1>
      <img className="item-img" src="https://cdn-icons-png.flaticon.com/512/16356/16356325.png" alt="" />
      <h2>win</h2>
    </div>
  )
}

export default RpsBox
