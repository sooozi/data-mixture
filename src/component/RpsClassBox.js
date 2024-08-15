import React, { Component } from 'react';

export default class RpsClassBox extends Component {
    render() {
        let result;
        if (
            this.props.title === "👩‍💻 COMPUTER" &&
            this.props.result !== "Tie" &&
            this.props.result !== ""
        ) {
            result = this.props.result === "Win" ? "Lose" : "Win";
        } else {
            result = this.props.result;
        }

        return (
            <div className={`rps-box ${result.toLowerCase()}`}>
                <h1>{this.props.title}</h1>
                <div className="item-img-wrap">
                    {this.props.item && this.props.item.img ? (
                        <img className="item-img" src={this.props.item.img} alt={this.props.item.name} />
                    ) : (
                        <p>Click button!</p>
                    )}
                </div>
                <h2>{result}</h2>
            </div>
        )
    }
}
