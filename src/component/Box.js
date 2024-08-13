import React from 'react'

const Box = (props) => {
  return (
    <div className="box">
      <p>{props.num}</p>
      <span>{props.name}</span>
    </div>
  )
}

export default Box
