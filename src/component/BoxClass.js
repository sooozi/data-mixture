import React, { Component } from 'react'

export default class BoxClass extends Component {
  render() {
    return (
      <div>
        <p>BoxClass : {this.props.num}</p>
      </div>
    )
  }
}
