import React, { Component } from 'react';
import BoxClass from './component/BoxClass';

export default class BoxClassPage extends Component {
    constructor(props) {
        console.log("constructor");
        super(props)
        this.state= {
            counter: 0,
            num: 1,
            value: 0,
        };
    }

    increase = () => {
        this.setState({
            counter: this.state.counter + 1,
            value: this.state.value + 1
        })
        console.log("increase function", this.state)
    }

    componentDidMount(){
        console.log("componentDidMount");
    }

    componentDidUpdate(){
        console.log("componentDidUpdate", this.state)
    }

    render() {
        console.log("render");
        return (
        <div>
            <span>{this.state.counter}</span>
            <button onClick={this.increase}>Click 👆</button>
            {this.state.counter < 3 && <BoxClass num={this.state.value} />}
        </div>
        )
    }
}
